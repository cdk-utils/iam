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
	static readonly INVALIDATE_CACHE = "execute-api:InvalidateCache";
	/** [Write] execute-api:Invoke */
	static readonly INVOKE = "execute-api:Invoke";
	/** [Write] execute-api:ManageConnections */
	static readonly MANAGE_CONNECTIONS = "execute-api:ManageConnections";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ExecuteAPIActions.INVALIDATE_CACHE,
		ExecuteAPIActions.INVOKE,
		ExecuteAPIActions.MANAGE_CONNECTIONS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ExecuteAPIDomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):execute-api:(?<region>[^:]*):(?<account>[^:]*):/domainnames/(?<domainName>[^:/?]+)\\+(?<domainIdentifier>[^:/?]+)$",
);
const ExecuteAPIGeneralArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):execute-api:(?<region>[^:]*):(?<account>[^:]*):(?<apiId>[^:/?]+)/(?<stage>[^:/?]+)/(?<method>[^:/?]+)/(?<apiSpecificResourcePath>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for execute-api resources.
 */
export class ExecuteAPIResources {
	/**
	 * Builds an ARN for the execute-api-domain resource.
	 */
	static executeAPIDomain(props: {
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
	}): string {
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
	static parseExecuteAPIDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		domainIdentifier: string;
	} {
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
	static executeAPIGeneral(props: {
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
	}): string {
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
	static parseExecuteAPIGeneralArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiId: string;
		stage: string;
		method: string;
		apiSpecificResourcePath: string;
	} {
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
	static readonly DELETE_CONNECTION: string[] = [];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = [];
	/** IAM actions required for the PostToConnection API call. */
	static readonly POST_TO_CONNECTION: string[] = [];
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
