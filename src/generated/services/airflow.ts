// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/airflow.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the airflow service.
 */
export class AirflowActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "airflow";

	/** [Write] airflow:CreateCliToken */
	static readonly CREATE_CLI_TOKEN = "airflow:CreateCliToken";
	/** [Write] airflow:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "airflow:CreateEnvironment";
	/** [Write] airflow:CreateWebLoginToken */
	static readonly CREATE_WEB_LOGIN_TOKEN = "airflow:CreateWebLoginToken";
	/** [Write] airflow:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "airflow:DeleteEnvironment";
	/** [Read] airflow:GetEnvironment */
	static readonly GET_ENVIRONMENT = "airflow:GetEnvironment";
	/** [Write] airflow:InvokeRestApi */
	static readonly INVOKE_REST_API = "airflow:InvokeRestApi";
	/** [List] airflow:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "airflow:ListEnvironments";
	/** [Read] airflow:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "airflow:ListTagsForResource";
	/** [Write] airflow:PublishMetrics */
	static readonly PUBLISH_METRICS = "airflow:PublishMetrics";
	/** [Tagging] airflow:TagResource */
	static readonly TAG_RESOURCE = "airflow:TagResource";
	/** [Tagging] airflow:UntagResource */
	static readonly UNTAG_RESOURCE = "airflow:UntagResource";
	/** [Write] airflow:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "airflow:UpdateEnvironment";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AirflowActions.GET_ENVIRONMENT,
		AirflowActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AirflowActions.CREATE_CLI_TOKEN,
		AirflowActions.CREATE_ENVIRONMENT,
		AirflowActions.CREATE_WEB_LOGIN_TOKEN,
		AirflowActions.DELETE_ENVIRONMENT,
		AirflowActions.INVOKE_REST_API,
		AirflowActions.PUBLISH_METRICS,
		AirflowActions.UPDATE_ENVIRONMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [AirflowActions.LIST_ENVIRONMENTS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AirflowActions.TAG_RESOURCE,
		AirflowActions.UNTAG_RESOURCE,
	];
}

const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):airflow:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentName>[^:/?]+)$",
);
const RbacRoleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):airflow:(?<region>[^:]*):(?<account>[^:]*):role/(?<environmentName>[^:/?]+)/(?<roleName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for airflow resources.
 */
export class AirflowResources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The EnvironmentName component of the ARN. */
		readonly environmentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:airflow:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentName: string;
	} {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentName: match.groups!.environmentName,
		};
	}

	/**
	 * Builds an ARN for the rbac-role resource.
	 */
	static rbacRole(props: {
		/** The EnvironmentName component of the ARN. */
		readonly environmentName: string;
		/** The RoleName component of the ARN. */
		readonly roleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:airflow:${props.region ?? "*"}:${props.account ?? "*"}:role/${props.environmentName}/${props.roleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rbac-role resource.
	 */
	static isValidRbacRoleArn(arn: string): boolean {
		return RbacRoleArnRegex.test(arn);
	}

	/**
	 * Parses a rbac-role ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRbacRoleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentName: string;
		roleName: string;
	} {
		const match = RbacRoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rbac-role ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentName: match.groups!.environmentName,
			roleName: match.groups!.roleName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for airflow.
 */
export class AirflowOperations {
	/** IAM actions required for the CreateCliToken API call. */
	static readonly CREATE_CLI_TOKEN: string[] = ["airflow:CreateCliToken"];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"airflow:CreateEnvironment",
		"iam:PassRole",
		"airflow:TagResource",
	];
	/** IAM actions required for the CreateWebLoginToken API call. */
	static readonly CREATE_WEB_LOGIN_TOKEN: string[] = [
		"airflow:CreateWebLoginToken",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = ["airflow:DeleteEnvironment"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["airflow:GetEnvironment"];
	/** IAM actions required for the InvokeRestApi API call. */
	static readonly INVOKE_REST_API: string[] = ["airflow:InvokeRestApi"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["airflow:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"airflow:ListTagsForResource",
	];
	/** IAM actions required for the PublishMetrics API call. */
	static readonly PUBLISH_METRICS: string[] = ["airflow:PublishMetrics"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["airflow:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["airflow:UntagResource"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = [
		"iam:PassRole",
		"airflow:UpdateEnvironment",
	];
}

/**
 * Condition key constants and builders for airflow.
 */
export class AirflowConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DELETE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly GET_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UPDATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: airflow:DagAccessEntity (String) */
	static readonly DAG_ACCESS_ENTITY = "airflow:DagAccessEntity";
	/** Condition key: airflow:ResourceAction (String) */
	static readonly RESOURCE_ACTION = "airflow:ResourceAction";
	/** Condition key: airflow:ResourceId (String) */
	static readonly RESOURCE_ID = "airflow:ResourceId";
	/** Condition key: airflow:ResourceType (String) */
	static readonly RESOURCE_TYPE = "airflow:ResourceType";
	/** Condition key: airflow:TeamNames (ArrayOfString) */
	static readonly TEAM_NAMES = "airflow:TeamNames";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `airflow:DagAccessEntity`.
	 */
	static dagAccessEntity(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "airflow:DagAccessEntity": value } };
	}

	/**
	 * Generates a condition block for `airflow:ResourceAction`.
	 */
	static resourceAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "airflow:ResourceAction": value } };
	}

	/**
	 * Generates a condition block for `airflow:ResourceId`.
	 */
	static resourceId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "airflow:ResourceId": value } };
	}

	/**
	 * Generates a condition block for `airflow:ResourceType`.
	 */
	static resourceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "airflow:ResourceType": value } };
	}

	/**
	 * Generates a condition block for `airflow:TeamNames`.
	 */
	static teamNames(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "airflow:TeamNames": values } };
	}

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
