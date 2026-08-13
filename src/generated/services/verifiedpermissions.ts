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
	static readonly CreateIdentitySource =
		"verifiedpermissions:CreateIdentitySource";
	/** [Write] verifiedpermissions:CreatePolicy */
	static readonly CreatePolicy = "verifiedpermissions:CreatePolicy";
	/** [Write] verifiedpermissions:CreatePolicyStore */
	static readonly CreatePolicyStore = "verifiedpermissions:CreatePolicyStore";
	/** [Write] verifiedpermissions:CreatePolicyStoreAlias */
	static readonly CreatePolicyStoreAlias =
		"verifiedpermissions:CreatePolicyStoreAlias";
	/** [Write] verifiedpermissions:CreatePolicyTemplate */
	static readonly CreatePolicyTemplate =
		"verifiedpermissions:CreatePolicyTemplate";
	/** [Write] verifiedpermissions:DeleteIdentitySource */
	static readonly DeleteIdentitySource =
		"verifiedpermissions:DeleteIdentitySource";
	/** [Write] verifiedpermissions:DeletePolicy */
	static readonly DeletePolicy = "verifiedpermissions:DeletePolicy";
	/** [Write] verifiedpermissions:DeletePolicyStore */
	static readonly DeletePolicyStore = "verifiedpermissions:DeletePolicyStore";
	/** [Write] verifiedpermissions:DeletePolicyStoreAlias */
	static readonly DeletePolicyStoreAlias =
		"verifiedpermissions:DeletePolicyStoreAlias";
	/** [Write] verifiedpermissions:DeletePolicyTemplate */
	static readonly DeletePolicyTemplate =
		"verifiedpermissions:DeletePolicyTemplate";
	/** [Read] verifiedpermissions:GetIdentitySource */
	static readonly actionGetIdentitySource =
		"verifiedpermissions:GetIdentitySource";
	/** [Read] verifiedpermissions:GetPolicy */
	static readonly actionGetPolicy = "verifiedpermissions:GetPolicy";
	/** [Read] verifiedpermissions:GetPolicyStore */
	static readonly actionGetPolicyStore = "verifiedpermissions:GetPolicyStore";
	/** [Read] verifiedpermissions:GetPolicyStoreAlias */
	static readonly actionGetPolicyStoreAlias =
		"verifiedpermissions:GetPolicyStoreAlias";
	/** [Read] verifiedpermissions:GetPolicyTemplate */
	static readonly actionGetPolicyTemplate =
		"verifiedpermissions:GetPolicyTemplate";
	/** [Read] verifiedpermissions:GetSchema */
	static readonly actionGetSchema = "verifiedpermissions:GetSchema";
	/** [Read] verifiedpermissions:IsAuthorized */
	static readonly IsAuthorized = "verifiedpermissions:IsAuthorized";
	/** [Read] verifiedpermissions:IsAuthorizedWithToken */
	static readonly IsAuthorizedWithToken =
		"verifiedpermissions:IsAuthorizedWithToken";
	/** [List] verifiedpermissions:ListIdentitySources */
	static readonly ListIdentitySources =
		"verifiedpermissions:ListIdentitySources";
	/** [List] verifiedpermissions:ListPolicies */
	static readonly ListPolicies = "verifiedpermissions:ListPolicies";
	/** [List] verifiedpermissions:ListPolicyStoreAliases */
	static readonly ListPolicyStoreAliases =
		"verifiedpermissions:ListPolicyStoreAliases";
	/** [List] verifiedpermissions:ListPolicyStores */
	static readonly ListPolicyStores = "verifiedpermissions:ListPolicyStores";
	/** [List] verifiedpermissions:ListPolicyTemplates */
	static readonly ListPolicyTemplates =
		"verifiedpermissions:ListPolicyTemplates";
	/** [Read] verifiedpermissions:ListTagsForResource */
	static readonly ListTagsForResource =
		"verifiedpermissions:ListTagsForResource";
	/** [Write] verifiedpermissions:PutSchema */
	static readonly PutSchema = "verifiedpermissions:PutSchema";
	/** [Tagging] verifiedpermissions:TagResource */
	static readonly TagResource = "verifiedpermissions:TagResource";
	/** [Tagging] verifiedpermissions:UntagResource */
	static readonly UntagResource = "verifiedpermissions:UntagResource";
	/** [Write] verifiedpermissions:UpdateIdentitySource */
	static readonly UpdateIdentitySource =
		"verifiedpermissions:UpdateIdentitySource";
	/** [Write] verifiedpermissions:UpdatePolicy */
	static readonly UpdatePolicy = "verifiedpermissions:UpdatePolicy";
	/** [Write] verifiedpermissions:UpdatePolicyStore */
	static readonly UpdatePolicyStore = "verifiedpermissions:UpdatePolicyStore";
	/** [Write] verifiedpermissions:UpdatePolicyTemplate */
	static readonly UpdatePolicyTemplate =
		"verifiedpermissions:UpdatePolicyTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		VerifiedpermissionsActions.actionGetIdentitySource,
		VerifiedpermissionsActions.actionGetPolicy,
		VerifiedpermissionsActions.actionGetPolicyStore,
		VerifiedpermissionsActions.actionGetPolicyStoreAlias,
		VerifiedpermissionsActions.actionGetPolicyTemplate,
		VerifiedpermissionsActions.actionGetSchema,
		VerifiedpermissionsActions.IsAuthorized,
		VerifiedpermissionsActions.IsAuthorizedWithToken,
		VerifiedpermissionsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		VerifiedpermissionsActions.CreateIdentitySource,
		VerifiedpermissionsActions.CreatePolicy,
		VerifiedpermissionsActions.CreatePolicyStore,
		VerifiedpermissionsActions.CreatePolicyStoreAlias,
		VerifiedpermissionsActions.CreatePolicyTemplate,
		VerifiedpermissionsActions.DeleteIdentitySource,
		VerifiedpermissionsActions.DeletePolicy,
		VerifiedpermissionsActions.DeletePolicyStore,
		VerifiedpermissionsActions.DeletePolicyStoreAlias,
		VerifiedpermissionsActions.DeletePolicyTemplate,
		VerifiedpermissionsActions.PutSchema,
		VerifiedpermissionsActions.UpdateIdentitySource,
		VerifiedpermissionsActions.UpdatePolicy,
		VerifiedpermissionsActions.UpdatePolicyStore,
		VerifiedpermissionsActions.UpdatePolicyTemplate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		VerifiedpermissionsActions.ListIdentitySources,
		VerifiedpermissionsActions.ListPolicies,
		VerifiedpermissionsActions.ListPolicyStoreAliases,
		VerifiedpermissionsActions.ListPolicyStores,
		VerifiedpermissionsActions.ListPolicyTemplates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		VerifiedpermissionsActions.TagResource,
		VerifiedpermissionsActions.UntagResource,
	];
}

/**
 * Properties for building a policy-store ARN.
 */
export interface VerifiedpermissionsPolicyStoreArnProps {
	/** The PolicyStoreId component of the ARN. */
	readonly policyStoreId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy-store ARN.
 */
export interface VerifiedpermissionsPolicyStoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyStoreId component. */
	readonly policyStoreId: string;
}

/**
 * Properties for building a policy-store-alias ARN.
 */
export interface VerifiedpermissionsPolicyStoreAliasArnProps {
	/** The AliasName component of the ARN. */
	readonly aliasName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy-store-alias ARN.
 */
export interface VerifiedpermissionsPolicyStoreAliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AliasName component. */
	readonly aliasName: string;
}

const PolicyStoreArnRegex =
	/^arn:(?<partition>[^:]+):verifiedpermissions::(?<account>[^:]*):policy-store\/(?<policyStoreId>[^:/?]+)$/;
const PolicyStoreAliasArnRegex =
	/^arn:(?<partition>[^:]+):verifiedpermissions:(?<region>[^:]*):(?<account>[^:]*):policy-store-alias\/(?<aliasName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for verifiedpermissions resources.
 */
export class VerifiedpermissionsResources {
	/**
	 * Builds an ARN for the policy-store resource.
	 */
	static policyStore(props: VerifiedpermissionsPolicyStoreArnProps): string {
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
	static parsePolicyStoreArn(
		arn: string,
	): VerifiedpermissionsPolicyStoreArnComponents {
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
	static policyStoreAlias(
		props: VerifiedpermissionsPolicyStoreAliasArnProps,
	): string {
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
	static parsePolicyStoreAliasArn(
		arn: string,
	): VerifiedpermissionsPolicyStoreAliasArnComponents {
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
	static readonly BatchGetPolicy: string[] = [];
	/** IAM actions required for the BatchIsAuthorized API call. */
	static readonly BatchIsAuthorized: string[] = [];
	/** IAM actions required for the BatchIsAuthorizedWithToken API call. */
	static readonly BatchIsAuthorizedWithToken: string[] = [];
	/** IAM actions required for the CreateIdentitySource API call. */
	static readonly CreateIdentitySource: string[] = [];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CreatePolicy: string[] = [];
	/** IAM actions required for the CreatePolicyStore API call. */
	static readonly CreatePolicyStore: string[] = [];
	/** IAM actions required for the CreatePolicyStoreAlias API call. */
	static readonly CreatePolicyStoreAlias: string[] = [];
	/** IAM actions required for the CreatePolicyTemplate API call. */
	static readonly CreatePolicyTemplate: string[] = [];
	/** IAM actions required for the DeleteIdentitySource API call. */
	static readonly DeleteIdentitySource: string[] = [];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = [];
	/** IAM actions required for the DeletePolicyStore API call. */
	static readonly DeletePolicyStore: string[] = [];
	/** IAM actions required for the DeletePolicyStoreAlias API call. */
	static readonly DeletePolicyStoreAlias: string[] = [];
	/** IAM actions required for the DeletePolicyTemplate API call. */
	static readonly DeletePolicyTemplate: string[] = [];
	/** IAM actions required for the GetIdentitySource API call. */
	static readonly opGetIdentitySource: string[] = [];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = [];
	/** IAM actions required for the GetPolicyStore API call. */
	static readonly opGetPolicyStore: string[] = [];
	/** IAM actions required for the GetPolicyStoreAlias API call. */
	static readonly opGetPolicyStoreAlias: string[] = [];
	/** IAM actions required for the GetPolicyTemplate API call. */
	static readonly opGetPolicyTemplate: string[] = [];
	/** IAM actions required for the GetSchema API call. */
	static readonly opGetSchema: string[] = [];
	/** IAM actions required for the IsAuthorized API call. */
	static readonly IsAuthorized: string[] = [];
	/** IAM actions required for the IsAuthorizedWithToken API call. */
	static readonly IsAuthorizedWithToken: string[] = [];
	/** IAM actions required for the ListIdentitySources API call. */
	static readonly ListIdentitySources: string[] = [];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = [];
	/** IAM actions required for the ListPolicyStoreAliases API call. */
	static readonly ListPolicyStoreAliases: string[] = [];
	/** IAM actions required for the ListPolicyStores API call. */
	static readonly ListPolicyStores: string[] = [];
	/** IAM actions required for the ListPolicyTemplates API call. */
	static readonly ListPolicyTemplates: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [];
	/** IAM actions required for the PutSchema API call. */
	static readonly PutSchema: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [];
	/** IAM actions required for the UpdateIdentitySource API call. */
	static readonly UpdateIdentitySource: string[] = [];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UpdatePolicy: string[] = [];
	/** IAM actions required for the UpdatePolicyStore API call. */
	static readonly UpdatePolicyStore: string[] = [];
	/** IAM actions required for the UpdatePolicyTemplate API call. */
	static readonly UpdatePolicyTemplate: string[] = [];
}

/**
 * Condition key constants and builders for verifiedpermissions.
 */
export class VerifiedpermissionsConditions {
	/** Condition keys applicable to the CreatePolicyStore action. */
	static readonly CreatePolicyStoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
