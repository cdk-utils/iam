# @cdk_utils/iam

CDK Constructs and helper functions to streamline the creation of IAM resources.

This package provides:

- **Type-safe AWS service constants** — auto-generated from the official AWS Service Authorization Reference, giving you compile-time checked action names, resource ARN patterns, and condition keys for every 455+ AWS services.
- **ARN builders, validators, and parsers** — type-safe functions to construct, validate, and decompose ARNs for every resource type.
- **Operation → IAM action mappings** — know exactly which IAM actions are required for each API call (including cross-service dependencies).
- **Condition key builders** — typed helpers to generate IAM condition blocks with the correct operators.

> **Coming soon:** IAM helper functions and ready-to-use CDK constructs.

## Documentation

Full API reference documentation is available in the [`docs/`](./docs/) directory, with one file per AWS service. Start at **[`docs/API.md`](./docs/API.md)** for the complete table of contents.

## Installation

```bash
npm install @cdk_utils/iam
```

## Usage

```typescript
import { dynamodb, s3 } from "@cdk_utils/iam";

// Action constants (type-safe, no typos)
const action = dynamodb.DynamoDBActions.CreateTable; // "dynamodb:CreateTable"
const getAction = dynamodb.DynamoDBActions.actionGetItem; // "dynamodb:GetItem"

// Access-level groupings
const readActions = dynamodb.DynamoDBActions.AllReadActions; // string[]
const writeActions = dynamodb.DynamoDBActions.AllWriteActions; // string[]

// ARN builders (with defaults: partition="aws", region="*", account="*")
const tableArn = dynamodb.DynamoDBResources.table({ tableName: "Orders" });
// → "arn:aws:dynamodb:*:*:table/Orders"

const indexArn = dynamodb.DynamoDBResources.index({
  tableName: "Orders",
  indexName: "GSI1",
  region: "us-east-1",
  account: "123456789012",
});
// → "arn:aws:dynamodb:us-east-1:123456789012:table/Orders/index/GSI1"

// ARN validation
dynamodb.DynamoDBResources.isValidTableArn("arn:aws:dynamodb:us-east-1:123:table/T"); // true

// ARN parsing (throws on invalid)
const parts = dynamodb.DynamoDBResources.parseTableArn(
  "arn:aws:dynamodb:us-east-1:123:table/Orders"
);
// → { partition: "aws", region: "us-east-1", account: "123", tableName: "Orders" }

// Operation → required IAM actions (what you actually need to call CreateTable)
const required = dynamodb.DynamoDBOperations.CreateTable;
// → ["dynamodb:AssociateTableReplica", "dynamodb:BatchWriteItem", "dynamodb:CreateTable", ...]

// Condition key builders (type-safe operators)
const condition = dynamodb.DynamoDBConditions.attributes(["col1", "col2"]);
// → { "ForAllValues:StringEquals": { "dynamodb:Attributes": ["col1", "col2"] } }

// S3 example
const bucketArn = s3.S3Resources.bucket({ bucketName: "my-bucket" });
// → "arn:aws:s3:::my-bucket"
```

## Generated Classes per Service

Each AWS service is exported as a **jsii submodule** (namespace). Import the service namespace from the package root:

```typescript
import { s3, lambda, ec2 } from "@cdk_utils/iam";
```

Each submodule contains up to 4 classes:

| Class | Purpose | Example |
|-------|---------|---------|
| `{Service}Actions` | Action string constants + access-level groupings | `s3.S3Actions.PutObject` |
| `{Service}Resources` | ARN builders, validators (`isValid*Arn`), parsers (`parse*Arn`) | `s3.S3Resources.bucket(...)` |
| `{Service}Operations` | API operation → required IAM actions arrays | `s3.S3Operations.PutObject` |
| `{Service}Conditions` | Condition key constants + typed builder methods | `s3.S3Conditions.prefix("docs/")` |

Services without resources/operations/conditions skip the corresponding class.

> **Note:** Submodule names use underscores for hyphenated services (e.g., `access_analyzer`, `route53_recovery_cluster`).

## Project Structure

```
iam/
├── src/
│   ├── index.ts                      # Re-exports submodules from generated/
│   ├── generated/                    # Auto-generated (DO NOT EDIT)
│   │   ├── index.ts                  # jsii submodule declarations (export * as ...)
│   │   └── services/                 # One file per AWS service (455+)
│   │       ├── dynamodb.ts
│   │       ├── s3.ts
│   │       ├── lambda.ts
│   │       └── ...
│   ├── helpers/                      # (Planned) IAM helper functions
│   └── constructs/                   # (Planned) CDK constructs
│
├── docs/                             # API documentation (NOT published to npm)
│   ├── API.md                        # Table of contents (links to all services)
│   ├── s3.md                         # Per-service documentation
│   ├── dynamodb.md
│   └── ...                           # 456 files total
│
├── scripts/                          # Tooling (NOT published to npm)
│   ├── types.ts                      # TypeScript types for the AWS API
│   ├── fetch-service-reference.ts    # Fetch + validate API responses
│   ├── sync-service-reference.ts     # Timestamp-based incremental sync
│   ├── generate-service.ts           # Generate TS for a single service
│   ├── generate-index.ts             # Regenerate barrel exports
│   ├── generate-all.ts              # Generate all services
│   ├── run-update.ts                 # Unified: sync + generate + index
│   ├── run-sync.ts                   # CLI for sync-only
│   ├── naming.ts                     # PascalCase/camelCase/UPPER_SNAKE utilities
│   ├── arn-codegen.ts                # ARN template → code generation
│   └── condition-codegen.ts          # Condition type → operator mapping
│
├── data/                             # Raw data (NOT published to npm)
│   └── service-reference/            # 455+ AWS service JSON files
│       ├── .last-sync-timestamp
│       ├── dynamodb.json
│       └── ...
│
├── test/scripts/                     # Unit tests (154 tests)
│
├── .github/workflows/
│   ├── build.yml                     # CI (projen-managed)
│   ├── release.yml                   # Release to npm (projen-managed)
│   ├── upgrade-main.yml              # Dependency upgrades (projen-managed)
│   └── update-service-reference.yml  # Cron: sync → generate → PR
│
├── .projenrc.ts                      # Project configuration
└── package.json
```

## Automated Updates

A GitHub Action (`update-service-reference.yml`) keeps the generated code in sync with AWS:

- **Schedule:** Weekdays at 06:00 UTC
- **Manual trigger:** `gh workflow run update-service-reference`
- **Flow:** Fetches updated service data → regenerates only changed services → runs full build → opens a PR if anything changed

The update is **incremental** — only services whose `modified` timestamp exceeds the stored `.last-sync-timestamp` are re-fetched and regenerated.

## Development

### Prerequisites

- Node.js 24.x
- npm

### Projen Tasks

```bash
npx projen build                    # Full build (jsii + tests + packaging)
npx projen test                     # Run unit tests
npx projen update-service-reference # Sync data + regenerate constants
npx projen sync-service-reference   # Fetch data only (no code generation)
npx projen generate-constants       # Regenerate all 455+ service files
npx projen generate-service         # Generate for a single service JSON
npx projen generate-index           # Regenerate the barrel index
```

### How Code Generation Works

1. **Data source:** [AWS Service Authorization Reference API](https://servicereference.us-east-1.amazonaws.com/)
2. **Sync:** `fetch-service-reference.ts` downloads service JSONs with timestamp-based filtering
3. **Generate:** `generate-service.ts` transforms one JSON → one TypeScript file with named interfaces and static classes
4. **Naming conventions:**
   - Actions: PascalCase as-is (`CreateTable`, `PutItem`); `Get*`/`Set*` prefixed with `action`/`op` for jsii compatibility
   - Resources: camelCase methods (`table(...)`, `index(...)`)
   - Interfaces: `{ServicePrefix}{Resource}ArnProps` / `{ServicePrefix}{Resource}ArnComponents`
5. **Formatting:** All generated files are auto-formatted with Biome

## Projen

This project is managed by [projen](https://github.com/projen/projen) via the `@cdk_utils/projen_template` template. Do **not** manually edit generated files — modify `.projenrc.ts` and run `npx projen` instead.

Files excluded from the npm package (but committed to git):
- `scripts/` — build/sync tooling
- `data/` — raw AWS service reference JSONs
- `docs/` — per-service API documentation (generated by jsii-docgen)
- `test/` — unit tests

## License

Apache-2.0
