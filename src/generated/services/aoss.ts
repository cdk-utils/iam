// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aoss.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aoss service.
 */
export class AossActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aoss";

	/** [Write] aoss:APIAccessAll */
	static readonly APIAccessAll = "aoss:APIAccessAll";
	/** [Write] aoss:AddCollectionToCollectionGroup */
	static readonly AddCollectionToCollectionGroup =
		"aoss:AddCollectionToCollectionGroup";
	/** [Read] aoss:BatchGetCollection */
	static readonly BatchGetCollection = "aoss:BatchGetCollection";
	/** [Read] aoss:BatchGetCollectionGroup */
	static readonly BatchGetCollectionGroup = "aoss:BatchGetCollectionGroup";
	/** [Read] aoss:BatchGetEffectiveLifecyclePolicy */
	static readonly BatchGetEffectiveLifecyclePolicy =
		"aoss:BatchGetEffectiveLifecyclePolicy";
	/** [Read] aoss:BatchGetLifecyclePolicy */
	static readonly BatchGetLifecyclePolicy = "aoss:BatchGetLifecyclePolicy";
	/** [Read] aoss:BatchGetVpcEndpoint */
	static readonly BatchGetVpcEndpoint = "aoss:BatchGetVpcEndpoint";
	/** [Write] aoss:CreateAccessPolicy */
	static readonly CreateAccessPolicy = "aoss:CreateAccessPolicy";
	/** [Write] aoss:CreateCollection */
	static readonly CreateCollection = "aoss:CreateCollection";
	/** [Write] aoss:CreateCollectionGroup */
	static readonly CreateCollectionGroup = "aoss:CreateCollectionGroup";
	/** [Write] aoss:CreateIndex */
	static readonly CreateIndex = "aoss:CreateIndex";
	/** [Write] aoss:CreateLifecyclePolicy */
	static readonly CreateLifecyclePolicy = "aoss:CreateLifecyclePolicy";
	/** [Write] aoss:CreateSecurityConfig */
	static readonly CreateSecurityConfig = "aoss:CreateSecurityConfig";
	/** [Write] aoss:CreateSecurityPolicy */
	static readonly CreateSecurityPolicy = "aoss:CreateSecurityPolicy";
	/** [Write] aoss:CreateVpcEndpoint */
	static readonly CreateVpcEndpoint = "aoss:CreateVpcEndpoint";
	/** [Write] aoss:DashboardsAccessAll */
	static readonly DashboardsAccessAll = "aoss:DashboardsAccessAll";
	/** [Write] aoss:DeleteAccessPolicy */
	static readonly DeleteAccessPolicy = "aoss:DeleteAccessPolicy";
	/** [Write] aoss:DeleteCollection */
	static readonly DeleteCollection = "aoss:DeleteCollection";
	/** [Write] aoss:DeleteCollectionGroup */
	static readonly DeleteCollectionGroup = "aoss:DeleteCollectionGroup";
	/** [Write] aoss:DeleteIndex */
	static readonly DeleteIndex = "aoss:DeleteIndex";
	/** [Write] aoss:DeleteLifecyclePolicy */
	static readonly DeleteLifecyclePolicy = "aoss:DeleteLifecyclePolicy";
	/** [Write] aoss:DeleteSecurityConfig */
	static readonly DeleteSecurityConfig = "aoss:DeleteSecurityConfig";
	/** [Write] aoss:DeleteSecurityPolicy */
	static readonly DeleteSecurityPolicy = "aoss:DeleteSecurityPolicy";
	/** [Write] aoss:DeleteVpcEndpoint */
	static readonly DeleteVpcEndpoint = "aoss:DeleteVpcEndpoint";
	/** [Read] aoss:GetAccessPolicy */
	static readonly actionGetAccessPolicy = "aoss:GetAccessPolicy";
	/** [Read] aoss:GetAccountSettings */
	static readonly actionGetAccountSettings = "aoss:GetAccountSettings";
	/** [Read] aoss:GetIndex */
	static readonly actionGetIndex = "aoss:GetIndex";
	/** [Read] aoss:GetPoliciesStats */
	static readonly actionGetPoliciesStats = "aoss:GetPoliciesStats";
	/** [Read] aoss:GetSecurityConfig */
	static readonly actionGetSecurityConfig = "aoss:GetSecurityConfig";
	/** [Read] aoss:GetSecurityPolicy */
	static readonly actionGetSecurityPolicy = "aoss:GetSecurityPolicy";
	/** [List] aoss:ListAccessPolicies */
	static readonly ListAccessPolicies = "aoss:ListAccessPolicies";
	/** [List] aoss:ListCollectionGroups */
	static readonly ListCollectionGroups = "aoss:ListCollectionGroups";
	/** [List] aoss:ListCollections */
	static readonly ListCollections = "aoss:ListCollections";
	/** [List] aoss:ListLifecyclePolicies */
	static readonly ListLifecyclePolicies = "aoss:ListLifecyclePolicies";
	/** [List] aoss:ListSecurityConfigs */
	static readonly ListSecurityConfigs = "aoss:ListSecurityConfigs";
	/** [List] aoss:ListSecurityPolicies */
	static readonly ListSecurityPolicies = "aoss:ListSecurityPolicies";
	/** [List] aoss:ListTagsForResource */
	static readonly ListTagsForResource = "aoss:ListTagsForResource";
	/** [List] aoss:ListVpcEndpoints */
	static readonly ListVpcEndpoints = "aoss:ListVpcEndpoints";
	/** [Write] aoss:TagResource */
	static readonly TagResource = "aoss:TagResource";
	/** [Write] aoss:UntagResource */
	static readonly UntagResource = "aoss:UntagResource";
	/** [Write] aoss:UpdateAccessPolicy */
	static readonly UpdateAccessPolicy = "aoss:UpdateAccessPolicy";
	/** [Write] aoss:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "aoss:UpdateAccountSettings";
	/** [Write] aoss:UpdateCollection */
	static readonly UpdateCollection = "aoss:UpdateCollection";
	/** [Write] aoss:UpdateCollectionGroup */
	static readonly UpdateCollectionGroup = "aoss:UpdateCollectionGroup";
	/** [Write] aoss:UpdateIndex */
	static readonly UpdateIndex = "aoss:UpdateIndex";
	/** [Write] aoss:UpdateLifecyclePolicy */
	static readonly UpdateLifecyclePolicy = "aoss:UpdateLifecyclePolicy";
	/** [Write] aoss:UpdateSecurityConfig */
	static readonly UpdateSecurityConfig = "aoss:UpdateSecurityConfig";
	/** [Write] aoss:UpdateSecurityPolicy */
	static readonly UpdateSecurityPolicy = "aoss:UpdateSecurityPolicy";
	/** [Write] aoss:UpdateVpcEndpoint */
	static readonly UpdateVpcEndpoint = "aoss:UpdateVpcEndpoint";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AossActions.BatchGetCollection,
		AossActions.BatchGetCollectionGroup,
		AossActions.BatchGetEffectiveLifecyclePolicy,
		AossActions.BatchGetLifecyclePolicy,
		AossActions.BatchGetVpcEndpoint,
		AossActions.actionGetAccessPolicy,
		AossActions.actionGetAccountSettings,
		AossActions.actionGetIndex,
		AossActions.actionGetPoliciesStats,
		AossActions.actionGetSecurityConfig,
		AossActions.actionGetSecurityPolicy,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AossActions.APIAccessAll,
		AossActions.AddCollectionToCollectionGroup,
		AossActions.CreateAccessPolicy,
		AossActions.CreateCollection,
		AossActions.CreateCollectionGroup,
		AossActions.CreateIndex,
		AossActions.CreateLifecyclePolicy,
		AossActions.CreateSecurityConfig,
		AossActions.CreateSecurityPolicy,
		AossActions.CreateVpcEndpoint,
		AossActions.DashboardsAccessAll,
		AossActions.DeleteAccessPolicy,
		AossActions.DeleteCollection,
		AossActions.DeleteCollectionGroup,
		AossActions.DeleteIndex,
		AossActions.DeleteLifecyclePolicy,
		AossActions.DeleteSecurityConfig,
		AossActions.DeleteSecurityPolicy,
		AossActions.DeleteVpcEndpoint,
		AossActions.TagResource,
		AossActions.UntagResource,
		AossActions.UpdateAccessPolicy,
		AossActions.UpdateAccountSettings,
		AossActions.UpdateCollection,
		AossActions.UpdateCollectionGroup,
		AossActions.UpdateIndex,
		AossActions.UpdateLifecyclePolicy,
		AossActions.UpdateSecurityConfig,
		AossActions.UpdateSecurityPolicy,
		AossActions.UpdateVpcEndpoint,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AossActions.ListAccessPolicies,
		AossActions.ListCollectionGroups,
		AossActions.ListCollections,
		AossActions.ListLifecyclePolicies,
		AossActions.ListSecurityConfigs,
		AossActions.ListSecurityPolicies,
		AossActions.ListTagsForResource,
		AossActions.ListVpcEndpoints,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a Collection ARN.
 */
export interface AossCollectionArnProps {
	/** The CollectionId component of the ARN. */
	readonly collectionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Collection ARN.
 */
export interface AossCollectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CollectionId component. */
	readonly collectionId: string;
}

/**
 * Properties for building a CollectionGroup ARN.
 */
export interface AossCollectionGroupArnProps {
	/** The CollectionGroupId component of the ARN. */
	readonly collectionGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a CollectionGroup ARN.
 */
export interface AossCollectionGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CollectionGroupId component. */
	readonly collectionGroupId: string;
}

/**
 * Properties for building a Dashboards ARN.
 */
export interface AossDashboardsArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Dashboards ARN.
 */
export interface AossDashboardsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const CollectionArnRegex =
	/^arn:(?<partition>[^:]+):aoss:(?<region>[^:]*):(?<account>[^:]*):collection\/(?<collectionId>[^:/?]+)$/;
const CollectionGroupArnRegex =
	/^arn:(?<partition>[^:]+):aoss:(?<region>[^:]*):(?<account>[^:]*):collection-group\/(?<collectionGroupId>[^:/?]+)$/;
const DashboardsArnRegex =
	/^arn:(?<partition>[^:]+):aoss:(?<region>[^:]*):(?<account>[^:]*):dashboards\/default$/;

/**
 * ARN builders, validators, and parsers for aoss resources.
 */
export class AossResources {
	/**
	 * Builds an ARN for the Collection resource.
	 */
	static collection(props: AossCollectionArnProps): string {
		return `arn:${props.partition ?? "aws"}:aoss:${props.region ?? "*"}:${props.account ?? "*"}:collection/${props.collectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Collection resource.
	 */
	static isValidCollectionArn(arn: string): boolean {
		return CollectionArnRegex.test(arn);
	}

	/**
	 * Parses a Collection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCollectionArn(arn: string): AossCollectionArnComponents {
		const match = CollectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Collection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			collectionId: match.groups!.collectionId,
		};
	}

	/**
	 * Builds an ARN for the CollectionGroup resource.
	 */
	static collectionGroup(props: AossCollectionGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:aoss:${props.region ?? "*"}:${props.account ?? "*"}:collection-group/${props.collectionGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the CollectionGroup resource.
	 */
	static isValidCollectionGroupArn(arn: string): boolean {
		return CollectionGroupArnRegex.test(arn);
	}

	/**
	 * Parses a CollectionGroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCollectionGroupArn(
		arn: string,
	): AossCollectionGroupArnComponents {
		const match = CollectionGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid CollectionGroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			collectionGroupId: match.groups!.collectionGroupId,
		};
	}

	/**
	 * Builds an ARN for the Dashboards resource.
	 */
	static dashboards(props: AossDashboardsArnProps): string {
		return `arn:${props.partition ?? "aws"}:aoss:${props.region ?? "*"}:${props.account ?? "*"}:dashboards/default`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Dashboards resource.
	 */
	static isValidDashboardsArn(arn: string): boolean {
		return DashboardsArnRegex.test(arn);
	}

	/**
	 * Parses a Dashboards ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardsArn(arn: string): AossDashboardsArnComponents {
		const match = DashboardsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Dashboards ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for aoss.
 */
export class AossOperations {
	/** IAM actions required for the BatchGetCollection API call. */
	static readonly BatchGetCollection: string[] = ["aoss:BatchGetCollection"];
	/** IAM actions required for the BatchGetCollectionGroup API call. */
	static readonly BatchGetCollectionGroup: string[] = [
		"aoss:BatchGetCollectionGroup",
	];
	/** IAM actions required for the BatchGetEffectiveLifecyclePolicy API call. */
	static readonly BatchGetEffectiveLifecyclePolicy: string[] = [
		"aoss:BatchGetEffectiveLifecyclePolicy",
	];
	/** IAM actions required for the BatchGetLifecyclePolicy API call. */
	static readonly BatchGetLifecyclePolicy: string[] = [
		"aoss:BatchGetLifecyclePolicy",
	];
	/** IAM actions required for the BatchGetVpcEndpoint API call. */
	static readonly BatchGetVpcEndpoint: string[] = ["aoss:BatchGetVpcEndpoint"];
	/** IAM actions required for the CreateAccessPolicy API call. */
	static readonly CreateAccessPolicy: string[] = ["aoss:CreateAccessPolicy"];
	/** IAM actions required for the CreateCollection API call. */
	static readonly CreateCollection: string[] = [
		"aoss:AddCollectionToCollectionGroup",
		"aoss:CreateCollection",
		"aoss:TagResource",
	];
	/** IAM actions required for the CreateCollectionGroup API call. */
	static readonly CreateCollectionGroup: string[] = [
		"aoss:CreateCollectionGroup",
		"aoss:TagResource",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CreateIndex: string[] = ["aoss:CreateIndex"];
	/** IAM actions required for the CreateLifecyclePolicy API call. */
	static readonly CreateLifecyclePolicy: string[] = [
		"aoss:CreateLifecyclePolicy",
	];
	/** IAM actions required for the CreateSecurityConfig API call. */
	static readonly CreateSecurityConfig: string[] = [
		"aoss:CreateSecurityConfig",
	];
	/** IAM actions required for the CreateSecurityPolicy API call. */
	static readonly CreateSecurityPolicy: string[] = [
		"aoss:CreateSecurityPolicy",
	];
	/** IAM actions required for the CreateVpcEndpoint API call. */
	static readonly CreateVpcEndpoint: string[] = ["aoss:CreateVpcEndpoint"];
	/** IAM actions required for the DeleteAccessPolicy API call. */
	static readonly DeleteAccessPolicy: string[] = ["aoss:DeleteAccessPolicy"];
	/** IAM actions required for the DeleteCollection API call. */
	static readonly DeleteCollection: string[] = ["aoss:DeleteCollection"];
	/** IAM actions required for the DeleteCollectionGroup API call. */
	static readonly DeleteCollectionGroup: string[] = [
		"aoss:DeleteCollectionGroup",
	];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DeleteIndex: string[] = ["aoss:DeleteIndex"];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DeleteLifecyclePolicy: string[] = [
		"aoss:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeleteSecurityConfig API call. */
	static readonly DeleteSecurityConfig: string[] = [
		"aoss:DeleteSecurityConfig",
	];
	/** IAM actions required for the DeleteSecurityPolicy API call. */
	static readonly DeleteSecurityPolicy: string[] = [
		"aoss:DeleteSecurityPolicy",
	];
	/** IAM actions required for the DeleteVpcEndpoint API call. */
	static readonly DeleteVpcEndpoint: string[] = ["aoss:DeleteVpcEndpoint"];
	/** IAM actions required for the GetAccessPolicy API call. */
	static readonly opGetAccessPolicy: string[] = ["aoss:GetAccessPolicy"];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = ["aoss:GetAccountSettings"];
	/** IAM actions required for the GetIndex API call. */
	static readonly opGetIndex: string[] = ["aoss:GetIndex"];
	/** IAM actions required for the GetPoliciesStats API call. */
	static readonly opGetPoliciesStats: string[] = ["aoss:GetPoliciesStats"];
	/** IAM actions required for the GetSecurityConfig API call. */
	static readonly opGetSecurityConfig: string[] = ["aoss:GetSecurityConfig"];
	/** IAM actions required for the GetSecurityPolicy API call. */
	static readonly opGetSecurityPolicy: string[] = ["aoss:GetSecurityPolicy"];
	/** IAM actions required for the ListAccessPolicies API call. */
	static readonly ListAccessPolicies: string[] = ["aoss:ListAccessPolicies"];
	/** IAM actions required for the ListCollectionGroups API call. */
	static readonly ListCollectionGroups: string[] = [
		"aoss:ListCollectionGroups",
	];
	/** IAM actions required for the ListCollections API call. */
	static readonly ListCollections: string[] = ["aoss:ListCollections"];
	/** IAM actions required for the ListLifecyclePolicies API call. */
	static readonly ListLifecyclePolicies: string[] = [
		"aoss:ListLifecyclePolicies",
	];
	/** IAM actions required for the ListSecurityConfigs API call. */
	static readonly ListSecurityConfigs: string[] = ["aoss:ListSecurityConfigs"];
	/** IAM actions required for the ListSecurityPolicies API call. */
	static readonly ListSecurityPolicies: string[] = [
		"aoss:ListSecurityPolicies",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["aoss:ListTagsForResource"];
	/** IAM actions required for the ListVpcEndpoints API call. */
	static readonly ListVpcEndpoints: string[] = ["aoss:ListVpcEndpoints"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["aoss:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["aoss:UntagResource"];
	/** IAM actions required for the UpdateAccessPolicy API call. */
	static readonly UpdateAccessPolicy: string[] = ["aoss:UpdateAccessPolicy"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UpdateAccountSettings: string[] = [
		"aoss:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateCollection API call. */
	static readonly UpdateCollection: string[] = ["aoss:UpdateCollection"];
	/** IAM actions required for the UpdateCollectionGroup API call. */
	static readonly UpdateCollectionGroup: string[] = [
		"aoss:UpdateCollectionGroup",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UpdateIndex: string[] = ["aoss:UpdateIndex"];
	/** IAM actions required for the UpdateLifecyclePolicy API call. */
	static readonly UpdateLifecyclePolicy: string[] = [
		"aoss:UpdateLifecyclePolicy",
	];
	/** IAM actions required for the UpdateSecurityConfig API call. */
	static readonly UpdateSecurityConfig: string[] = [
		"aoss:UpdateSecurityConfig",
	];
	/** IAM actions required for the UpdateSecurityPolicy API call. */
	static readonly UpdateSecurityPolicy: string[] = [
		"aoss:UpdateSecurityPolicy",
	];
	/** IAM actions required for the UpdateVpcEndpoint API call. */
	static readonly UpdateVpcEndpoint: string[] = ["aoss:UpdateVpcEndpoint"];
}

/**
 * Condition key constants and builders for aoss.
 */
export class AossConditions {
	/** Condition keys applicable to the APIAccessAll action. */
	static readonly APIAccessAllConditionKeys: string[] = [
		"aoss:CollectionId",
		"aoss:collection",
	];
	/** Condition keys applicable to the AddCollectionToCollectionGroup action. */
	static readonly AddCollectionToCollectionGroupConditionKeys: string[] = [
		"aoss:collection-group",
	];
	/** Condition keys applicable to the BatchGetCollection action. */
	static readonly BatchGetCollectionConditionKeys: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the BatchGetCollectionGroup action. */
	static readonly BatchGetCollectionGroupConditionKeys: string[] = [
		"aoss:collection-group",
	];
	/** Condition keys applicable to the CreateAccessPolicy action. */
	static readonly CreateAccessPolicyConditionKeys: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the CreateCollection action. */
	static readonly CreateCollectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCollectionGroup action. */
	static readonly CreateCollectionGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLifecyclePolicy action. */
	static readonly CreateLifecyclePolicyConditionKeys: string[] = ["aoss:index"];
	/** Condition keys applicable to the CreateSecurityPolicy action. */
	static readonly CreateSecurityPolicyConditionKeys: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the DashboardsAccessAll action. */
	static readonly DashboardsAccessAllConditionKeys: string[] = [
		"aoss:CollectionId",
		"aoss:collection",
	];
	/** Condition keys applicable to the DeleteAccessPolicy action. */
	static readonly DeleteAccessPolicyConditionKeys: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the DeleteLifecyclePolicy action. */
	static readonly DeleteLifecyclePolicyConditionKeys: string[] = ["aoss:index"];
	/** Condition keys applicable to the DeleteSecurityPolicy action. */
	static readonly DeleteSecurityPolicyConditionKeys: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the GetAccessPolicy action. */
	static readonly actionGetAccessPolicyConditionKeys: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the GetSecurityPolicy action. */
	static readonly actionGetSecurityPolicyConditionKeys: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAccessPolicy action. */
	static readonly UpdateAccessPolicyConditionKeys: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the UpdateLifecyclePolicy action. */
	static readonly UpdateLifecyclePolicyConditionKeys: string[] = ["aoss:index"];
	/** Condition keys applicable to the UpdateSecurityPolicy action. */
	static readonly UpdateSecurityPolicyConditionKeys: string[] = [
		"aoss:collection",
	];

	/** Condition key: aoss:CollectionId (String) */
	static readonly COLLECTION_ID = "aoss:CollectionId";
	/** Condition key: aoss:collection (String) */
	static readonly COLLECTION = "aoss:collection";
	/** Condition key: aoss:collection-group (String) */
	static readonly COLLECTION_GROUP = "aoss:collection-group";
	/** Condition key: aoss:index (String) */
	static readonly INDEX = "aoss:index";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aoss:CollectionId`.
	 */
	static collectionId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aoss:CollectionId": value } };
	}

	/**
	 * Generates a condition block for `aoss:collection`.
	 */
	static collection(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aoss:collection": value } };
	}

	/**
	 * Generates a condition block for `aoss:collection-group`.
	 */
	static collectionGroup(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "aoss:collection-group": value } };
	}

	/**
	 * Generates a condition block for `aoss:index`.
	 */
	static index(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aoss:index": value } };
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
