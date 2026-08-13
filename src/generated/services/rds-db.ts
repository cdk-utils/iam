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
	static readonly connect = "rds-db:connect";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		RDSDBActions.connect,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a db-user ARN.
 */
export interface RDSDBDBUserArnProps {
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
}

/**
 * Parsed components of a db-user ARN.
 */
export interface RDSDBDBUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbiResourceId component. */
	readonly dbiResourceId: string;
	/** The DbUserName component. */
	readonly dbUserName: string;
}

const DBUserArnRegex =
	/^arn:(?<partition>[^:]+):rds-db:(?<region>[^:]*):(?<account>[^:]*):dbuser:(?<dbiResourceId>[^:/?]+)\/(?<dbUserName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rds-db resources.
 */
export class RDSDBResources {
	/**
	 * Builds an ARN for the db-user resource.
	 */
	static dbUser(props: RDSDBDBUserArnProps): string {
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
	static parseDBUserArn(arn: string): RDSDBDBUserArnComponents {
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
