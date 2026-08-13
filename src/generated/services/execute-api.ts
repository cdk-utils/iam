// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/execute-api.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the execute-api service.
 */
export class ExecuteAPIActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "execute-api";

	/** [Write] execute-api:InvalidateCache */
	static readonly InvalidateCache = "execute-api:InvalidateCache";
	/** [Write] execute-api:Invoke */
	static readonly Invoke = "execute-api:Invoke";
	/** [Write] execute-api:ManageConnections */
	static readonly ManageConnections = "execute-api:ManageConnections";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ExecuteAPIActions.InvalidateCache,
		ExecuteAPIActions.Invoke,
		ExecuteAPIActions.ManageConnections,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a execute-api-domain ARN.
 */
export interface ExecuteAPIExecuteAPIDomainArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The DomainIdentifier component of the ARN. */
	readonly domainIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a execute-api-domain ARN.
 */
export interface ExecuteAPIExecuteAPIDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The DomainIdentifier component. */
	readonly domainIdentifier: string;
}

/**
 * Properties for building a execute-api-general ARN.
 */
export interface ExecuteAPIExecuteAPIGeneralArnProps {
	/** The ApiId component of the ARN. */
	readonly apiId: string;
	/** The Stage component of the ARN. */
	readonly stage: string;
	/** The Method component of the ARN. */
	readonly method: string;
	/** The ApiSpecificResourcePath component of the ARN. */
	readonly apiSpecificResourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a execute-api-general ARN.
 */
export interface ExecuteAPIExecuteAPIGeneralArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiId component. */
	readonly apiId: string;
	/** The Stage component. */
	readonly stage: string;
	/** The Method component. */
	readonly method: string;
	/** The ApiSpecificResourcePath component. */
	readonly apiSpecificResourcePath: string;
}

const ExecuteAPIDomainArnRegex =
	/^arn:(?<partition>[^:]+):execute-api:(?<region>[^:]*):(?<account>[^:]*):\/domainnames\/(?<domainName>[^:/?]+)\+(?<domainIdentifier>[^:/?]+)$/;
const ExecuteAPIGeneralArnRegex =
	/^arn:(?<partition>[^:]+):execute-api:(?<region>[^:]*):(?<account>[^:]*):(?<apiId>[^:/?]+)\/(?<stage>[^:/?]+)\/(?<method>[^:/?]+)\/(?<apiSpecificResourcePath>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for execute-api resources.
 */
export class ExecuteAPIResources {
	/**
	 * Builds an ARN for the execute-api-domain resource.
	 */
	static executeAPIDomain(props: ExecuteAPIExecuteAPIDomainArnProps): string {
		return `arn:${props.partition ?? "aws"}:execute-api:${props.region ?? "*"}:${props.account ?? "*"}:/domainnames/${props.domainName}+${props.domainIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the execute-api-domain resource.
	 */
	static isValidExecuteAPIDomainArn(arn: string): boolean {
		return ExecuteAPIDomainArnRegex.test(arn);
	}

	/**
	 * Parses a execute-api-domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExecuteAPIDomainArn(
		arn: string,
	): ExecuteAPIExecuteAPIDomainArnComponents {
		const match = ExecuteAPIDomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid execute-api-domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			domainIdentifier: match.groups!.domainIdentifier,
		};
	}

	/**
	 * Builds an ARN for the execute-api-general resource.
	 */
	static executeAPIGeneral(props: ExecuteAPIExecuteAPIGeneralArnProps): string {
		return `arn:${props.partition ?? "aws"}:execute-api:${props.region ?? "*"}:${props.account ?? "*"}:${props.apiId}/${props.stage}/${props.method}/${props.apiSpecificResourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the execute-api-general resource.
	 */
	static isValidExecuteAPIGeneralArn(arn: string): boolean {
		return ExecuteAPIGeneralArnRegex.test(arn);
	}

	/**
	 * Parses a execute-api-general ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExecuteAPIGeneralArn(
		arn: string,
	): ExecuteAPIExecuteAPIGeneralArnComponents {
		const match = ExecuteAPIGeneralArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid execute-api-general ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiId: match.groups!.apiId,
			stage: match.groups!.stage,
			method: match.groups!.method,
			apiSpecificResourcePath: match.groups!.apiSpecificResourcePath,
		};
	}
}

/**
 * API operation to required IAM actions mapping for execute-api.
 */
export class ExecuteAPIOperations {
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = [];
	/** IAM actions required for the GetConnection API call. */
	static readonly opGetConnection: string[] = [];
	/** IAM actions required for the PostToConnection API call. */
	static readonly PostToConnection: string[] = [];
}

/**
 * Condition key constants and builders for execute-api.
 */
export class ExecuteAPIConditions {
	/** Condition key: execute-api:viaDomainArn (ARN) */
	static readonly VIA_DOMAIN_ARN = "execute-api:viaDomainArn";

	/**
	 * Generates a condition block for `execute-api:viaDomainArn`.
	 */
	static viaDomainARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "execute-api:viaDomainArn": value } };
	}
}
