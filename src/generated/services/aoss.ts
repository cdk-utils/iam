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
	static readonly API_ACCESS_ALL = "aoss:APIAccessAll";
	/** [Write] aoss:AddCollectionToCollectionGroup */
	static readonly ADD_COLLECTION_TO_COLLECTION_GROUP =
		"aoss:AddCollectionToCollectionGroup";
	/** [Read] aoss:BatchGetCollection */
	static readonly BATCH_GET_COLLECTION = "aoss:BatchGetCollection";
	/** [Read] aoss:BatchGetCollectionGroup */
	static readonly BATCH_GET_COLLECTION_GROUP = "aoss:BatchGetCollectionGroup";
	/** [Read] aoss:BatchGetEffectiveLifecyclePolicy */
	static readonly BATCH_GET_EFFECTIVE_LIFECYCLE_POLICY =
		"aoss:BatchGetEffectiveLifecyclePolicy";
	/** [Read] aoss:BatchGetLifecyclePolicy */
	static readonly BATCH_GET_LIFECYCLE_POLICY = "aoss:BatchGetLifecyclePolicy";
	/** [Read] aoss:BatchGetVpcEndpoint */
	static readonly BATCH_GET_VPC_ENDPOINT = "aoss:BatchGetVpcEndpoint";
	/** [Write] aoss:CreateAccessPolicy */
	static readonly CREATE_ACCESS_POLICY = "aoss:CreateAccessPolicy";
	/** [Write] aoss:CreateCollection */
	static readonly CREATE_COLLECTION = "aoss:CreateCollection";
	/** [Write] aoss:CreateCollectionGroup */
	static readonly CREATE_COLLECTION_GROUP = "aoss:CreateCollectionGroup";
	/** [Write] aoss:CreateIndex */
	static readonly CREATE_INDEX = "aoss:CreateIndex";
	/** [Write] aoss:CreateLifecyclePolicy */
	static readonly CREATE_LIFECYCLE_POLICY = "aoss:CreateLifecyclePolicy";
	/** [Write] aoss:CreateSecurityConfig */
	static readonly CREATE_SECURITY_CONFIG = "aoss:CreateSecurityConfig";
	/** [Write] aoss:CreateSecurityPolicy */
	static readonly CREATE_SECURITY_POLICY = "aoss:CreateSecurityPolicy";
	/** [Write] aoss:CreateVpcEndpoint */
	static readonly CREATE_VPC_ENDPOINT = "aoss:CreateVpcEndpoint";
	/** [Write] aoss:DashboardsAccessAll */
	static readonly DASHBOARDS_ACCESS_ALL = "aoss:DashboardsAccessAll";
	/** [Write] aoss:DeleteAccessPolicy */
	static readonly DELETE_ACCESS_POLICY = "aoss:DeleteAccessPolicy";
	/** [Write] aoss:DeleteCollection */
	static readonly DELETE_COLLECTION = "aoss:DeleteCollection";
	/** [Write] aoss:DeleteCollectionGroup */
	static readonly DELETE_COLLECTION_GROUP = "aoss:DeleteCollectionGroup";
	/** [Write] aoss:DeleteIndex */
	static readonly DELETE_INDEX = "aoss:DeleteIndex";
	/** [Write] aoss:DeleteLifecyclePolicy */
	static readonly DELETE_LIFECYCLE_POLICY = "aoss:DeleteLifecyclePolicy";
	/** [Write] aoss:DeleteSecurityConfig */
	static readonly DELETE_SECURITY_CONFIG = "aoss:DeleteSecurityConfig";
	/** [Write] aoss:DeleteSecurityPolicy */
	static readonly DELETE_SECURITY_POLICY = "aoss:DeleteSecurityPolicy";
	/** [Write] aoss:DeleteVpcEndpoint */
	static readonly DELETE_VPC_ENDPOINT = "aoss:DeleteVpcEndpoint";
	/** [Read] aoss:GetAccessPolicy */
	static readonly GET_ACCESS_POLICY = "aoss:GetAccessPolicy";
	/** [Read] aoss:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "aoss:GetAccountSettings";
	/** [Read] aoss:GetIndex */
	static readonly GET_INDEX = "aoss:GetIndex";
	/** [Read] aoss:GetPoliciesStats */
	static readonly GET_POLICIES_STATS = "aoss:GetPoliciesStats";
	/** [Read] aoss:GetSecurityConfig */
	static readonly GET_SECURITY_CONFIG = "aoss:GetSecurityConfig";
	/** [Read] aoss:GetSecurityPolicy */
	static readonly GET_SECURITY_POLICY = "aoss:GetSecurityPolicy";
	/** [List] aoss:ListAccessPolicies */
	static readonly LIST_ACCESS_POLICIES = "aoss:ListAccessPolicies";
	/** [List] aoss:ListCollectionGroups */
	static readonly LIST_COLLECTION_GROUPS = "aoss:ListCollectionGroups";
	/** [List] aoss:ListCollections */
	static readonly LIST_COLLECTIONS = "aoss:ListCollections";
	/** [List] aoss:ListLifecyclePolicies */
	static readonly LIST_LIFECYCLE_POLICIES = "aoss:ListLifecyclePolicies";
	/** [List] aoss:ListSecurityConfigs */
	static readonly LIST_SECURITY_CONFIGS = "aoss:ListSecurityConfigs";
	/** [List] aoss:ListSecurityPolicies */
	static readonly LIST_SECURITY_POLICIES = "aoss:ListSecurityPolicies";
	/** [List] aoss:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "aoss:ListTagsForResource";
	/** [List] aoss:ListVpcEndpoints */
	static readonly LIST_VPC_ENDPOINTS = "aoss:ListVpcEndpoints";
	/** [Write] aoss:TagResource */
	static readonly TAG_RESOURCE = "aoss:TagResource";
	/** [Write] aoss:UntagResource */
	static readonly UNTAG_RESOURCE = "aoss:UntagResource";
	/** [Write] aoss:UpdateAccessPolicy */
	static readonly UPDATE_ACCESS_POLICY = "aoss:UpdateAccessPolicy";
	/** [Write] aoss:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "aoss:UpdateAccountSettings";
	/** [Write] aoss:UpdateCollection */
	static readonly UPDATE_COLLECTION = "aoss:UpdateCollection";
	/** [Write] aoss:UpdateCollectionGroup */
	static readonly UPDATE_COLLECTION_GROUP = "aoss:UpdateCollectionGroup";
	/** [Write] aoss:UpdateIndex */
	static readonly UPDATE_INDEX = "aoss:UpdateIndex";
	/** [Write] aoss:UpdateLifecyclePolicy */
	static readonly UPDATE_LIFECYCLE_POLICY = "aoss:UpdateLifecyclePolicy";
	/** [Write] aoss:UpdateSecurityConfig */
	static readonly UPDATE_SECURITY_CONFIG = "aoss:UpdateSecurityConfig";
	/** [Write] aoss:UpdateSecurityPolicy */
	static readonly UPDATE_SECURITY_POLICY = "aoss:UpdateSecurityPolicy";
	/** [Write] aoss:UpdateVpcEndpoint */
	static readonly UPDATE_VPC_ENDPOINT = "aoss:UpdateVpcEndpoint";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AossActions.BATCH_GET_COLLECTION,
		AossActions.BATCH_GET_COLLECTION_GROUP,
		AossActions.BATCH_GET_EFFECTIVE_LIFECYCLE_POLICY,
		AossActions.BATCH_GET_LIFECYCLE_POLICY,
		AossActions.BATCH_GET_VPC_ENDPOINT,
		AossActions.GET_ACCESS_POLICY,
		AossActions.GET_ACCOUNT_SETTINGS,
		AossActions.GET_INDEX,
		AossActions.GET_POLICIES_STATS,
		AossActions.GET_SECURITY_CONFIG,
		AossActions.GET_SECURITY_POLICY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AossActions.API_ACCESS_ALL,
		AossActions.ADD_COLLECTION_TO_COLLECTION_GROUP,
		AossActions.CREATE_ACCESS_POLICY,
		AossActions.CREATE_COLLECTION,
		AossActions.CREATE_COLLECTION_GROUP,
		AossActions.CREATE_INDEX,
		AossActions.CREATE_LIFECYCLE_POLICY,
		AossActions.CREATE_SECURITY_CONFIG,
		AossActions.CREATE_SECURITY_POLICY,
		AossActions.CREATE_VPC_ENDPOINT,
		AossActions.DASHBOARDS_ACCESS_ALL,
		AossActions.DELETE_ACCESS_POLICY,
		AossActions.DELETE_COLLECTION,
		AossActions.DELETE_COLLECTION_GROUP,
		AossActions.DELETE_INDEX,
		AossActions.DELETE_LIFECYCLE_POLICY,
		AossActions.DELETE_SECURITY_CONFIG,
		AossActions.DELETE_SECURITY_POLICY,
		AossActions.DELETE_VPC_ENDPOINT,
		AossActions.TAG_RESOURCE,
		AossActions.UNTAG_RESOURCE,
		AossActions.UPDATE_ACCESS_POLICY,
		AossActions.UPDATE_ACCOUNT_SETTINGS,
		AossActions.UPDATE_COLLECTION,
		AossActions.UPDATE_COLLECTION_GROUP,
		AossActions.UPDATE_INDEX,
		AossActions.UPDATE_LIFECYCLE_POLICY,
		AossActions.UPDATE_SECURITY_CONFIG,
		AossActions.UPDATE_SECURITY_POLICY,
		AossActions.UPDATE_VPC_ENDPOINT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AossActions.LIST_ACCESS_POLICIES,
		AossActions.LIST_COLLECTION_GROUPS,
		AossActions.LIST_COLLECTIONS,
		AossActions.LIST_LIFECYCLE_POLICIES,
		AossActions.LIST_SECURITY_CONFIGS,
		AossActions.LIST_SECURITY_POLICIES,
		AossActions.LIST_TAGS_FOR_RESOURCE,
		AossActions.LIST_VPC_ENDPOINTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const CollectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aoss:(?<region>[^:]*):(?<account>[^:]*):collection/(?<collectionId>[^:/?]+)$",
);
const CollectionGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aoss:(?<region>[^:]*):(?<account>[^:]*):collection-group/(?<collectionGroupId>[^:/?]+)$",
);
const DashboardsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aoss:(?<region>[^:]*):(?<account>[^:]*):dashboards/default$",
);

/**
 * ARN builders, validators, and parsers for aoss resources.
 */
export class AossResources {
	/**
	 * Builds an ARN for the Collection resource.
	 */
	static collection(props: {
		/** The CollectionId component of the ARN. */
		readonly collectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCollectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		collectionId: string;
	} {
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
	static collectionGroup(props: {
		/** The CollectionGroupId component of the ARN. */
		readonly collectionGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCollectionGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		collectionGroupId: string;
	} {
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
	static dashboards(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDashboardsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static readonly BATCH_GET_COLLECTION: string[] = ["aoss:BatchGetCollection"];
	/** IAM actions required for the BatchGetCollectionGroup API call. */
	static readonly BATCH_GET_COLLECTION_GROUP: string[] = [
		"aoss:BatchGetCollectionGroup",
	];
	/** IAM actions required for the BatchGetEffectiveLifecyclePolicy API call. */
	static readonly BATCH_GET_EFFECTIVE_LIFECYCLE_POLICY: string[] = [
		"aoss:BatchGetEffectiveLifecyclePolicy",
	];
	/** IAM actions required for the BatchGetLifecyclePolicy API call. */
	static readonly BATCH_GET_LIFECYCLE_POLICY: string[] = [
		"aoss:BatchGetLifecyclePolicy",
	];
	/** IAM actions required for the BatchGetVpcEndpoint API call. */
	static readonly BATCH_GET_VPC_ENDPOINT: string[] = [
		"aoss:BatchGetVpcEndpoint",
	];
	/** IAM actions required for the CreateAccessPolicy API call. */
	static readonly CREATE_ACCESS_POLICY: string[] = ["aoss:CreateAccessPolicy"];
	/** IAM actions required for the CreateCollection API call. */
	static readonly CREATE_COLLECTION: string[] = [
		"aoss:AddCollectionToCollectionGroup",
		"aoss:CreateCollection",
		"aoss:TagResource",
	];
	/** IAM actions required for the CreateCollectionGroup API call. */
	static readonly CREATE_COLLECTION_GROUP: string[] = [
		"aoss:CreateCollectionGroup",
		"aoss:TagResource",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CREATE_INDEX: string[] = ["aoss:CreateIndex"];
	/** IAM actions required for the CreateLifecyclePolicy API call. */
	static readonly CREATE_LIFECYCLE_POLICY: string[] = [
		"aoss:CreateLifecyclePolicy",
	];
	/** IAM actions required for the CreateSecurityConfig API call. */
	static readonly CREATE_SECURITY_CONFIG: string[] = [
		"aoss:CreateSecurityConfig",
	];
	/** IAM actions required for the CreateSecurityPolicy API call. */
	static readonly CREATE_SECURITY_POLICY: string[] = [
		"aoss:CreateSecurityPolicy",
	];
	/** IAM actions required for the CreateVpcEndpoint API call. */
	static readonly CREATE_VPC_ENDPOINT: string[] = ["aoss:CreateVpcEndpoint"];
	/** IAM actions required for the DeleteAccessPolicy API call. */
	static readonly DELETE_ACCESS_POLICY: string[] = ["aoss:DeleteAccessPolicy"];
	/** IAM actions required for the DeleteCollection API call. */
	static readonly DELETE_COLLECTION: string[] = ["aoss:DeleteCollection"];
	/** IAM actions required for the DeleteCollectionGroup API call. */
	static readonly DELETE_COLLECTION_GROUP: string[] = [
		"aoss:DeleteCollectionGroup",
	];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DELETE_INDEX: string[] = ["aoss:DeleteIndex"];
	/** IAM actions required for the DeleteLifecyclePolicy API call. */
	static readonly DELETE_LIFECYCLE_POLICY: string[] = [
		"aoss:DeleteLifecyclePolicy",
	];
	/** IAM actions required for the DeleteSecurityConfig API call. */
	static readonly DELETE_SECURITY_CONFIG: string[] = [
		"aoss:DeleteSecurityConfig",
	];
	/** IAM actions required for the DeleteSecurityPolicy API call. */
	static readonly DELETE_SECURITY_POLICY: string[] = [
		"aoss:DeleteSecurityPolicy",
	];
	/** IAM actions required for the DeleteVpcEndpoint API call. */
	static readonly DELETE_VPC_ENDPOINT: string[] = ["aoss:DeleteVpcEndpoint"];
	/** IAM actions required for the GetAccessPolicy API call. */
	static readonly GET_ACCESS_POLICY: string[] = ["aoss:GetAccessPolicy"];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = ["aoss:GetAccountSettings"];
	/** IAM actions required for the GetIndex API call. */
	static readonly GET_INDEX: string[] = ["aoss:GetIndex"];
	/** IAM actions required for the GetPoliciesStats API call. */
	static readonly GET_POLICIES_STATS: string[] = ["aoss:GetPoliciesStats"];
	/** IAM actions required for the GetSecurityConfig API call. */
	static readonly GET_SECURITY_CONFIG: string[] = ["aoss:GetSecurityConfig"];
	/** IAM actions required for the GetSecurityPolicy API call. */
	static readonly GET_SECURITY_POLICY: string[] = ["aoss:GetSecurityPolicy"];
	/** IAM actions required for the ListAccessPolicies API call. */
	static readonly LIST_ACCESS_POLICIES: string[] = ["aoss:ListAccessPolicies"];
	/** IAM actions required for the ListCollectionGroups API call. */
	static readonly LIST_COLLECTION_GROUPS: string[] = [
		"aoss:ListCollectionGroups",
	];
	/** IAM actions required for the ListCollections API call. */
	static readonly LIST_COLLECTIONS: string[] = ["aoss:ListCollections"];
	/** IAM actions required for the ListLifecyclePolicies API call. */
	static readonly LIST_LIFECYCLE_POLICIES: string[] = [
		"aoss:ListLifecyclePolicies",
	];
	/** IAM actions required for the ListSecurityConfigs API call. */
	static readonly LIST_SECURITY_CONFIGS: string[] = [
		"aoss:ListSecurityConfigs",
	];
	/** IAM actions required for the ListSecurityPolicies API call. */
	static readonly LIST_SECURITY_POLICIES: string[] = [
		"aoss:ListSecurityPolicies",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"aoss:ListTagsForResource",
	];
	/** IAM actions required for the ListVpcEndpoints API call. */
	static readonly LIST_VPC_ENDPOINTS: string[] = ["aoss:ListVpcEndpoints"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["aoss:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["aoss:UntagResource"];
	/** IAM actions required for the UpdateAccessPolicy API call. */
	static readonly UPDATE_ACCESS_POLICY: string[] = ["aoss:UpdateAccessPolicy"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [
		"aoss:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateCollection API call. */
	static readonly UPDATE_COLLECTION: string[] = ["aoss:UpdateCollection"];
	/** IAM actions required for the UpdateCollectionGroup API call. */
	static readonly UPDATE_COLLECTION_GROUP: string[] = [
		"aoss:UpdateCollectionGroup",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UPDATE_INDEX: string[] = ["aoss:UpdateIndex"];
	/** IAM actions required for the UpdateLifecyclePolicy API call. */
	static readonly UPDATE_LIFECYCLE_POLICY: string[] = [
		"aoss:UpdateLifecyclePolicy",
	];
	/** IAM actions required for the UpdateSecurityConfig API call. */
	static readonly UPDATE_SECURITY_CONFIG: string[] = [
		"aoss:UpdateSecurityConfig",
	];
	/** IAM actions required for the UpdateSecurityPolicy API call. */
	static readonly UPDATE_SECURITY_POLICY: string[] = [
		"aoss:UpdateSecurityPolicy",
	];
	/** IAM actions required for the UpdateVpcEndpoint API call. */
	static readonly UPDATE_VPC_ENDPOINT: string[] = ["aoss:UpdateVpcEndpoint"];
}

/**
 * Condition key constants and builders for aoss.
 */
export class AossConditions {
	/** Condition keys applicable to the APIAccessAll action. */
	static readonly API_ACCESS_ALL_CONDITION_KEYS: string[] = [
		"aoss:CollectionId",
		"aoss:collection",
	];
	/** Condition keys applicable to the AddCollectionToCollectionGroup action. */
	static readonly ADD_COLLECTION_TO_COLLECTION_GROUP_CONDITION_KEYS: string[] =
		["aoss:collection-group"];
	/** Condition keys applicable to the BatchGetCollection action. */
	static readonly BATCH_GET_COLLECTION_CONDITION_KEYS: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the BatchGetCollectionGroup action. */
	static readonly BATCH_GET_COLLECTION_GROUP_CONDITION_KEYS: string[] = [
		"aoss:collection-group",
	];
	/** Condition keys applicable to the CreateAccessPolicy action. */
	static readonly CREATE_ACCESS_POLICY_CONDITION_KEYS: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the CreateCollection action. */
	static readonly CREATE_COLLECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCollectionGroup action. */
	static readonly CREATE_COLLECTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLifecyclePolicy action. */
	static readonly CREATE_LIFECYCLE_POLICY_CONDITION_KEYS: string[] = [
		"aoss:index",
	];
	/** Condition keys applicable to the CreateSecurityPolicy action. */
	static readonly CREATE_SECURITY_POLICY_CONDITION_KEYS: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the DashboardsAccessAll action. */
	static readonly DASHBOARDS_ACCESS_ALL_CONDITION_KEYS: string[] = [
		"aoss:CollectionId",
		"aoss:collection",
	];
	/** Condition keys applicable to the DeleteAccessPolicy action. */
	static readonly DELETE_ACCESS_POLICY_CONDITION_KEYS: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the DeleteLifecyclePolicy action. */
	static readonly DELETE_LIFECYCLE_POLICY_CONDITION_KEYS: string[] = [
		"aoss:index",
	];
	/** Condition keys applicable to the DeleteSecurityPolicy action. */
	static readonly DELETE_SECURITY_POLICY_CONDITION_KEYS: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the GetAccessPolicy action. */
	static readonly GET_ACCESS_POLICY_CONDITION_KEYS: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the GetSecurityPolicy action. */
	static readonly GET_SECURITY_POLICY_CONDITION_KEYS: string[] = [
		"aoss:collection",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAccessPolicy action. */
	static readonly UPDATE_ACCESS_POLICY_CONDITION_KEYS: string[] = [
		"aoss:collection",
		"aoss:index",
	];
	/** Condition keys applicable to the UpdateLifecyclePolicy action. */
	static readonly UPDATE_LIFECYCLE_POLICY_CONDITION_KEYS: string[] = [
		"aoss:index",
	];
	/** Condition keys applicable to the UpdateSecurityPolicy action. */
	static readonly UPDATE_SECURITY_POLICY_CONDITION_KEYS: string[] = [
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
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
