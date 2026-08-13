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
	static readonly CreateCliToken = "airflow:CreateCliToken";
	/** [Write] airflow:CreateEnvironment */
	static readonly CreateEnvironment = "airflow:CreateEnvironment";
	/** [Write] airflow:CreateWebLoginToken */
	static readonly CreateWebLoginToken = "airflow:CreateWebLoginToken";
	/** [Write] airflow:DeleteEnvironment */
	static readonly DeleteEnvironment = "airflow:DeleteEnvironment";
	/** [Read] airflow:GetEnvironment */
	static readonly actionGetEnvironment = "airflow:GetEnvironment";
	/** [Write] airflow:InvokeRestApi */
	static readonly InvokeRestApi = "airflow:InvokeRestApi";
	/** [List] airflow:ListEnvironments */
	static readonly ListEnvironments = "airflow:ListEnvironments";
	/** [Read] airflow:ListTagsForResource */
	static readonly ListTagsForResource = "airflow:ListTagsForResource";
	/** [Write] airflow:PublishMetrics */
	static readonly PublishMetrics = "airflow:PublishMetrics";
	/** [Tagging] airflow:TagResource */
	static readonly TagResource = "airflow:TagResource";
	/** [Tagging] airflow:UntagResource */
	static readonly UntagResource = "airflow:UntagResource";
	/** [Write] airflow:UpdateEnvironment */
	static readonly UpdateEnvironment = "airflow:UpdateEnvironment";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AirflowActions.actionGetEnvironment,
		AirflowActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AirflowActions.CreateCliToken,
		AirflowActions.CreateEnvironment,
		AirflowActions.CreateWebLoginToken,
		AirflowActions.DeleteEnvironment,
		AirflowActions.InvokeRestApi,
		AirflowActions.PublishMetrics,
		AirflowActions.UpdateEnvironment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [AirflowActions.ListEnvironments];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AirflowActions.TagResource,
		AirflowActions.UntagResource,
	];
}

/**
 * Properties for building a environment ARN.
 */
export interface AirflowEnvironmentArnProps {
	/** The EnvironmentName component of the ARN. */
	readonly environmentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface AirflowEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentName component. */
	readonly environmentName: string;
}

/**
 * Properties for building a rbac-role ARN.
 */
export interface AirflowRbacRoleArnProps {
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
}

/**
 * Parsed components of a rbac-role ARN.
 */
export interface AirflowRbacRoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentName component. */
	readonly environmentName: string;
	/** The RoleName component. */
	readonly roleName: string;
}

const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):airflow:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentName>[^:/?]+)$/;
const RbacRoleArnRegex =
	/^arn:(?<partition>[^:]+):airflow:(?<region>[^:]*):(?<account>[^:]*):role\/(?<environmentName>[^:/?]+)\/(?<roleName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for airflow resources.
 */
export class AirflowResources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: AirflowEnvironmentArnProps): string {
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
	static parseEnvironmentArn(arn: string): AirflowEnvironmentArnComponents {
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
	static rbacRole(props: AirflowRbacRoleArnProps): string {
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
	static parseRbacRoleArn(arn: string): AirflowRbacRoleArnComponents {
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
	static readonly CreateCliToken: string[] = ["airflow:CreateCliToken"];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [
		"airflow:CreateEnvironment",
		"iam:PassRole",
		"airflow:TagResource",
	];
	/** IAM actions required for the CreateWebLoginToken API call. */
	static readonly CreateWebLoginToken: string[] = [
		"airflow:CreateWebLoginToken",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = ["airflow:DeleteEnvironment"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["airflow:GetEnvironment"];
	/** IAM actions required for the InvokeRestApi API call. */
	static readonly InvokeRestApi: string[] = ["airflow:InvokeRestApi"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["airflow:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"airflow:ListTagsForResource",
	];
	/** IAM actions required for the PublishMetrics API call. */
	static readonly PublishMetrics: string[] = ["airflow:PublishMetrics"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["airflow:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["airflow:UntagResource"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = [
		"iam:PassRole",
		"airflow:UpdateEnvironment",
	];
}

/**
 * Condition key constants and builders for airflow.
 */
export class AirflowConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DeleteEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly actionGetEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UpdateEnvironmentConditionKeys: string[] = [
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
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
