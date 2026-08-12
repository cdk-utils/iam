# @cdk_utils/iam

CDK Constructs and helper functions to streamline the creation of IAM resources.

This package provides:

- **Type-safe AWS service constants** — auto-generated from the official AWS Service Authorization Reference, giving you compile-time checked action names, resource ARN patterns, and condition keys for every AWS service.
- **IAM helper functions** — utilities to validate policies, build least-privilege statements, and simplify common IAM patterns when working with CDK.
- **Ready-to-use CDK constructs** — opinionated, production-ready IAM constructs that encode best practices out of the box.

## Installation

```bash
npm install @cdk_utils/iam
```

## Project Structure

```
iam/
├── src/                              # Published library source
│   ├── index.ts                      # Barrel exports
│   ├── helpers/                      # IAM helper functions
│   │   ├── index.ts
│   │   ├── policy-validator.ts       # Validate IAM policy documents
│   │   ├── statement-builder.ts      # Fluent API for IAM statements
│   │   └── ...
│   ├── constructs/                   # CDK constructs
│   │   ├── index.ts
│   │   ├── least-privilege-role.ts   # Role with scoped-down permissions
│   │   └── ...
│   └── generated/                    # Auto-generated service constants
│       ├── index.ts
│       └── services/                 # One file per AWS service
│           ├── s3.ts
│           ├── lambda.ts
│           └── ...
│
├── scripts/                          # Tooling (NOT published to npm)
│   ├── fetch-service-reference.ts    # Downloads AWS service reference JSONs
│   └── generate-constants.ts         # Transforms JSONs → TypeScript constants
│
├── data/                             # Raw data (NOT published to npm)
│   └── service-reference/            # AWS service authorization reference files
│       ├── .last-sync-timestamp      # Tracks last successful sync
│       ├── s3.json
│       ├── lambda.json
│       └── ...
│
├── test/                             # Unit tests (mirrors src/ structure)
│   ├── helpers/
│   ├── constructs/
│   └── generated/
│
├── .github/workflows/
│   ├── build.yml                     # CI (projen-managed)
│   ├── release.yml                   # Release to npm (projen-managed)
│   ├── upgrade-main.yml              # Dependency upgrades (projen-managed)
│   └── update-service-reference.yml  # Cron: sync AWS data → open PR
│
├── .projenrc.ts                      # Project configuration
└── package.json
```

## Architecture

### Generated Constants (`src/generated/`)

The package includes auto-generated TypeScript constants derived from the [AWS Service Authorization Reference](https://docs.aws.amazon.com/service-authorization/latest/reference/). Each AWS service gets a single file exporting:

- **Actions** — all IAM actions for the service (e.g., `S3Actions.GetObject`)
- **Resource types** — ARN patterns for each resource (e.g., `S3Resources.Bucket`)
- **Condition keys** — available condition keys (e.g., `S3ConditionKeys.Prefix`)

These constants are **committed to the repository** so the package builds without running the generator, and diffs are reviewable in PRs.

### Scripts (`scripts/`)

Two TypeScript scripts (executed via `tsx`) handle the data pipeline:

1. **`fetch-service-reference.ts`** — Connects to the AWS Service Authorization Reference API, checks modification timestamps against `.last-sync-timestamp`, and downloads updated service JSON files to `data/service-reference/`.

2. **`generate-constants.ts`** — Reads the raw JSON files from `data/service-reference/`, transforms them into well-typed TypeScript source files, and writes them to `src/generated/services/`. Includes proper JSDoc comments and barrel exports.

### Automated Updates (GitHub Actions)

A cron-triggered GitHub Action (`update-service-reference.yml`) runs the full pipeline:

1. Execute `fetch-service-reference.ts` to pull the latest data
2. Execute `generate-constants.ts` to regenerate TypeScript files
3. If any files changed, open a PR with the updates for review

This ensures the package stays in sync with AWS service changes without manual intervention.

### Helper Functions (`src/helpers/`)

Utility functions for working with IAM in CDK:

- **Policy validation** — validate policy document structure, check for overly permissive statements, detect common anti-patterns
- **Statement builder** — fluent API for constructing `PolicyStatement` objects with guardrails
- **Resource scoping** — helpers to narrow wildcard permissions to specific resource ARNs

### CDK Constructs (`src/constructs/`)

Production-ready constructs that encode IAM best practices:

- **Least-privilege roles** — constructs that scope down permissions based on actual usage patterns
- **Boundary-aware roles** — roles that automatically respect permission boundaries
- **Service-linked patterns** — pre-configured role/policy combinations for common AWS service integrations

## Development

### Prerequisites

- Node.js 24.x
- npm

### Building

```bash
npx projen build
```

### Updating AWS Service Reference Data

```bash
# Fetch latest service reference files
npx tsx scripts/fetch-service-reference.ts

# Regenerate TypeScript constants
npx tsx scripts/generate-constants.ts
```

### Running Tests

```bash
npx projen test
```

## Projen

This project is managed by [projen](https://github.com/projen/projen) via the `@cdk_utils/projen_template` template. Do **not** manually edit generated files — modify `.projenrc.ts` and run `npx projen` instead.

Files and directories excluded from the npm package (but committed to git):

- `scripts/` — build/sync tooling
- `data/` — raw AWS service reference JSONs
- `test/` — unit tests

## License

Apache-2.0
