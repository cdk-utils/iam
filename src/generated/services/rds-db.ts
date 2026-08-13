// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rds-db.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rds-db service.
 */
export class RDSDBActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rds-db";

	/** [PermissionManagement] rds-db:connect */
	static readonly CONNECT = "rds-db:connect";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		RDSDBActions.CONNECT,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const DBUserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds-db:(?<region>[^:]*):(?<account>[^:]*):dbuser:(?<dbiResourceId>[^:/?]+)/(?<dbUserName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for rds-db resources.
 */
export class RDSDBResources {
	/**
	 * Builds an ARN for the db-user resource.
	 */
	static dbUser(props: {
		/** The DbiResourceId component of the ARN. */
		readonly dbiResourceId: string;
		/** The DbUserName component of the ARN. */
		readonly dbUserName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rds-db:${props.region ?? "*"}:${props.account ?? "*"}:dbuser:${props.dbiResourceId}/${props.dbUserName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the db-user resource.
	 */
	static isValidDBUserArn(arn: string): boolean {
		return DBUserArnRegex.test(arn);
	}

	/**
	 * Parses a db-user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDBUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbiResourceId: string;
		dbUserName: string;
	} {
		const match = DBUserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid db-user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbiResourceId: match.groups!.dbiResourceId,
			dbUserName: match.groups!.dbUserName,
		};
	}
}
