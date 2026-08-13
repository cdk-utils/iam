// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/verifiedpermissions.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the verifiedpermissions service.
 */
export class VerifiedpermissionsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "verifiedpermissions";

	/** [Write] verifiedpermissions:CreateIdentitySource */
	static readonly CREATE_IDENTITY_SOURCE =
		"verifiedpermissions:CreateIdentitySource";
	/** [Write] verifiedpermissions:CreatePolicy */
	static readonly CREATE_POLICY = "verifiedpermissions:CreatePolicy";
	/** [Write] verifiedpermissions:CreatePolicyStore */
	static readonly CREATE_POLICY_STORE = "verifiedpermissions:CreatePolicyStore";
	/** [Write] verifiedpermissions:CreatePolicyStoreAlias */
	static readonly CREATE_POLICY_STORE_ALIAS =
		"verifiedpermissions:CreatePolicyStoreAlias";
	/** [Write] verifiedpermissions:CreatePolicyTemplate */
	static readonly CREATE_POLICY_TEMPLATE =
		"verifiedpermissions:CreatePolicyTemplate";
	/** [Write] verifiedpermissions:DeleteIdentitySource */
	static readonly DELETE_IDENTITY_SOURCE =
		"verifiedpermissions:DeleteIdentitySource";
	/** [Write] verifiedpermissions:DeletePolicy */
	static readonly DELETE_POLICY = "verifiedpermissions:DeletePolicy";
	/** [Write] verifiedpermissions:DeletePolicyStore */
	static readonly DELETE_POLICY_STORE = "verifiedpermissions:DeletePolicyStore";
	/** [Write] verifiedpermissions:DeletePolicyStoreAlias */
	static readonly DELETE_POLICY_STORE_ALIAS =
		"verifiedpermissions:DeletePolicyStoreAlias";
	/** [Write] verifiedpermissions:DeletePolicyTemplate */
	static readonly DELETE_POLICY_TEMPLATE =
		"verifiedpermissions:DeletePolicyTemplate";
	/** [Read] verifiedpermissions:GetIdentitySource */
	static readonly GET_IDENTITY_SOURCE = "verifiedpermissions:GetIdentitySource";
	/** [Read] verifiedpermissions:GetPolicy */
	static readonly GET_POLICY = "verifiedpermissions:GetPolicy";
	/** [Read] verifiedpermissions:GetPolicyStore */
	static readonly GET_POLICY_STORE = "verifiedpermissions:GetPolicyStore";
	/** [Read] verifiedpermissions:GetPolicyStoreAlias */
	static readonly GET_POLICY_STORE_ALIAS =
		"verifiedpermissions:GetPolicyStoreAlias";
	/** [Read] verifiedpermissions:GetPolicyTemplate */
	static readonly GET_POLICY_TEMPLATE = "verifiedpermissions:GetPolicyTemplate";
	/** [Read] verifiedpermissions:GetSchema */
	static readonly GET_SCHEMA = "verifiedpermissions:GetSchema";
	/** [Read] verifiedpermissions:IsAuthorized */
	static readonly IS_AUTHORIZED = "verifiedpermissions:IsAuthorized";
	/** [Read] verifiedpermissions:IsAuthorizedWithToken */
	static readonly IS_AUTHORIZED_WITH_TOKEN =
		"verifiedpermissions:IsAuthorizedWithToken";
	/** [List] verifiedpermissions:ListIdentitySources */
	static readonly LIST_IDENTITY_SOURCES =
		"verifiedpermissions:ListIdentitySources";
	/** [List] verifiedpermissions:ListPolicies */
	static readonly LIST_POLICIES = "verifiedpermissions:ListPolicies";
	/** [List] verifiedpermissions:ListPolicyStoreAliases */
	static readonly LIST_POLICY_STORE_ALIASES =
		"verifiedpermissions:ListPolicyStoreAliases";
	/** [List] verifiedpermissions:ListPolicyStores */
	static readonly LIST_POLICY_STORES = "verifiedpermissions:ListPolicyStores";
	/** [List] verifiedpermissions:ListPolicyTemplates */
	static readonly LIST_POLICY_TEMPLATES =
		"verifiedpermissions:ListPolicyTemplates";
	/** [Read] verifiedpermissions:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"verifiedpermissions:ListTagsForResource";
	/** [Write] verifiedpermissions:PutSchema */
	static readonly PUT_SCHEMA = "verifiedpermissions:PutSchema";
	/** [Tagging] verifiedpermissions:TagResource */
	static readonly TAG_RESOURCE = "verifiedpermissions:TagResource";
	/** [Tagging] verifiedpermissions:UntagResource */
	static readonly UNTAG_RESOURCE = "verifiedpermissions:UntagResource";
	/** [Write] verifiedpermissions:UpdateIdentitySource */
	static readonly UPDATE_IDENTITY_SOURCE =
		"verifiedpermissions:UpdateIdentitySource";
	/** [Write] verifiedpermissions:UpdatePolicy */
	static readonly UPDATE_POLICY = "verifiedpermissions:UpdatePolicy";
	/** [Write] verifiedpermissions:UpdatePolicyStore */
	static readonly UPDATE_POLICY_STORE = "verifiedpermissions:UpdatePolicyStore";
	/** [Write] verifiedpermissions:UpdatePolicyTemplate */
	static readonly UPDATE_POLICY_TEMPLATE =
		"verifiedpermissions:UpdatePolicyTemplate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		VerifiedpermissionsActions.GET_IDENTITY_SOURCE,
		VerifiedpermissionsActions.GET_POLICY,
		VerifiedpermissionsActions.GET_POLICY_STORE,
		VerifiedpermissionsActions.GET_POLICY_STORE_ALIAS,
		VerifiedpermissionsActions.GET_POLICY_TEMPLATE,
		VerifiedpermissionsActions.GET_SCHEMA,
		VerifiedpermissionsActions.IS_AUTHORIZED,
		VerifiedpermissionsActions.IS_AUTHORIZED_WITH_TOKEN,
		VerifiedpermissionsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		VerifiedpermissionsActions.CREATE_IDENTITY_SOURCE,
		VerifiedpermissionsActions.CREATE_POLICY,
		VerifiedpermissionsActions.CREATE_POLICY_STORE,
		VerifiedpermissionsActions.CREATE_POLICY_STORE_ALIAS,
		VerifiedpermissionsActions.CREATE_POLICY_TEMPLATE,
		VerifiedpermissionsActions.DELETE_IDENTITY_SOURCE,
		VerifiedpermissionsActions.DELETE_POLICY,
		VerifiedpermissionsActions.DELETE_POLICY_STORE,
		VerifiedpermissionsActions.DELETE_POLICY_STORE_ALIAS,
		VerifiedpermissionsActions.DELETE_POLICY_TEMPLATE,
		VerifiedpermissionsActions.PUT_SCHEMA,
		VerifiedpermissionsActions.UPDATE_IDENTITY_SOURCE,
		VerifiedpermissionsActions.UPDATE_POLICY,
		VerifiedpermissionsActions.UPDATE_POLICY_STORE,
		VerifiedpermissionsActions.UPDATE_POLICY_TEMPLATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		VerifiedpermissionsActions.LIST_IDENTITY_SOURCES,
		VerifiedpermissionsActions.LIST_POLICIES,
		VerifiedpermissionsActions.LIST_POLICY_STORE_ALIASES,
		VerifiedpermissionsActions.LIST_POLICY_STORES,
		VerifiedpermissionsActions.LIST_POLICY_TEMPLATES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		VerifiedpermissionsActions.TAG_RESOURCE,
		VerifiedpermissionsActions.UNTAG_RESOURCE,
	];
}

const PolicyStoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):verifiedpermissions::(?<account>[^:]*):policy-store/(?<policyStoreId>[^:/?]+)$",
);
const PolicyStoreAliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):verifiedpermissions:(?<region>[^:]*):(?<account>[^:]*):policy-store-alias/(?<aliasName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for verifiedpermissions resources.
 */
export class VerifiedpermissionsResources {
	/**
	 * Builds an ARN for the policy-store resource.
	 */
	static policyStore(props: {
		/** The PolicyStoreId component of the ARN. */
		readonly policyStoreId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:verifiedpermissions::${props.account ?? "*"}:policy-store/${props.policyStoreId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy-store resource.
	 */
	static isValidPolicyStoreArn(arn: string): boolean {
		return PolicyStoreArnRegex.test(arn);
	}

	/**
	 * Parses a policy-store ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyStoreArn(arn: string): {
		partition: string;
		account: string;
		policyStoreId: string;
	} {
		const match = PolicyStoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy-store ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			policyStoreId: match.groups!.policyStoreId,
		};
	}

	/**
	 * Builds an ARN for the policy-store-alias resource.
	 */
	static policyStoreAlias(props: {
		/** The AliasName component of the ARN. */
		readonly aliasName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:verifiedpermissions:${props.region ?? "*"}:${props.account ?? "*"}:policy-store-alias/${props.aliasName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy-store-alias resource.
	 */
	static isValidPolicyStoreAliasArn(arn: string): boolean {
		return PolicyStoreAliasArnRegex.test(arn);
	}

	/**
	 * Parses a policy-store-alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyStoreAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		aliasName: string;
	} {
		const match = PolicyStoreAliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy-store-alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			aliasName: match.groups!.aliasName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for verifiedpermissions.
 */
export class VerifiedpermissionsOperations {
	/** IAM actions required for the BatchGetPolicy API call. */
	static readonly BATCH_GET_POLICY: string[] = [];
	/** IAM actions required for the BatchIsAuthorized API call. */
	static readonly BATCH_IS_AUTHORIZED: string[] = [];
	/** IAM actions required for the BatchIsAuthorizedWithToken API call. */
	static readonly BATCH_IS_AUTHORIZED_WITH_TOKEN: string[] = [];
	/** IAM actions required for the CreateIdentitySource API call. */
	static readonly CREATE_IDENTITY_SOURCE: string[] = [];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CREATE_POLICY: string[] = [];
	/** IAM actions required for the CreatePolicyStore API call. */
	static readonly CREATE_POLICY_STORE: string[] = [];
	/** IAM actions required for the CreatePolicyStoreAlias API call. */
	static readonly CREATE_POLICY_STORE_ALIAS: string[] = [];
	/** IAM actions required for the CreatePolicyTemplate API call. */
	static readonly CREATE_POLICY_TEMPLATE: string[] = [];
	/** IAM actions required for the DeleteIdentitySource API call. */
	static readonly DELETE_IDENTITY_SOURCE: string[] = [];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = [];
	/** IAM actions required for the DeletePolicyStore API call. */
	static readonly DELETE_POLICY_STORE: string[] = [];
	/** IAM actions required for the DeletePolicyStoreAlias API call. */
	static readonly DELETE_POLICY_STORE_ALIAS: string[] = [];
	/** IAM actions required for the DeletePolicyTemplate API call. */
	static readonly DELETE_POLICY_TEMPLATE: string[] = [];
	/** IAM actions required for the GetIdentitySource API call. */
	static readonly GET_IDENTITY_SOURCE: string[] = [];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = [];
	/** IAM actions required for the GetPolicyStore API call. */
	static readonly GET_POLICY_STORE: string[] = [];
	/** IAM actions required for the GetPolicyStoreAlias API call. */
	static readonly GET_POLICY_STORE_ALIAS: string[] = [];
	/** IAM actions required for the GetPolicyTemplate API call. */
	static readonly GET_POLICY_TEMPLATE: string[] = [];
	/** IAM actions required for the GetSchema API call. */
	static readonly GET_SCHEMA: string[] = [];
	/** IAM actions required for the IsAuthorized API call. */
	static readonly IS_AUTHORIZED: string[] = [];
	/** IAM actions required for the IsAuthorizedWithToken API call. */
	static readonly IS_AUTHORIZED_WITH_TOKEN: string[] = [];
	/** IAM actions required for the ListIdentitySources API call. */
	static readonly LIST_IDENTITY_SOURCES: string[] = [];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = [];
	/** IAM actions required for the ListPolicyStoreAliases API call. */
	static readonly LIST_POLICY_STORE_ALIASES: string[] = [];
	/** IAM actions required for the ListPolicyStores API call. */
	static readonly LIST_POLICY_STORES: string[] = [];
	/** IAM actions required for the ListPolicyTemplates API call. */
	static readonly LIST_POLICY_TEMPLATES: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [];
	/** IAM actions required for the PutSchema API call. */
	static readonly PUT_SCHEMA: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [];
	/** IAM actions required for the UpdateIdentitySource API call. */
	static readonly UPDATE_IDENTITY_SOURCE: string[] = [];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UPDATE_POLICY: string[] = [];
	/** IAM actions required for the UpdatePolicyStore API call. */
	static readonly UPDATE_POLICY_STORE: string[] = [];
	/** IAM actions required for the UpdatePolicyTemplate API call. */
	static readonly UPDATE_POLICY_TEMPLATE: string[] = [];
}

/**
 * Condition key constants and builders for verifiedpermissions.
 */
export class VerifiedpermissionsConditions {
	/** Condition keys applicable to the CreatePolicyStore action. */
	static readonly CREATE_POLICY_STORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
