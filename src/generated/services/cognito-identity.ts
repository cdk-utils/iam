// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cognito-identity.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cognito-identity service.
 */
export class CognitoIdentityActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cognito-identity";

	/** [Write] cognito-identity:CreateIdentityPool */
	static readonly CreateIdentityPool = "cognito-identity:CreateIdentityPool";
	/** [Write] cognito-identity:DeleteIdentities */
	static readonly DeleteIdentities = "cognito-identity:DeleteIdentities";
	/** [Write] cognito-identity:DeleteIdentityPool */
	static readonly DeleteIdentityPool = "cognito-identity:DeleteIdentityPool";
	/** [Read] cognito-identity:DescribeIdentity */
	static readonly DescribeIdentity = "cognito-identity:DescribeIdentity";
	/** [Read] cognito-identity:DescribeIdentityPool */
	static readonly DescribeIdentityPool =
		"cognito-identity:DescribeIdentityPool";
	/** [Read] cognito-identity:GetCredentialsForIdentity */
	static readonly actionGetCredentialsForIdentity =
		"cognito-identity:GetCredentialsForIdentity";
	/** [Write] cognito-identity:GetId */
	static readonly actionGetId = "cognito-identity:GetId";
	/** [Read] cognito-identity:GetIdentityPoolAnalytics */
	static readonly actionGetIdentityPoolAnalytics =
		"cognito-identity:GetIdentityPoolAnalytics";
	/** [Read] cognito-identity:GetIdentityPoolDailyAnalytics */
	static readonly actionGetIdentityPoolDailyAnalytics =
		"cognito-identity:GetIdentityPoolDailyAnalytics";
	/** [Read] cognito-identity:GetIdentityPoolRoles */
	static readonly actionGetIdentityPoolRoles =
		"cognito-identity:GetIdentityPoolRoles";
	/** [Read] cognito-identity:GetIdentityProviderDailyAnalytics */
	static readonly actionGetIdentityProviderDailyAnalytics =
		"cognito-identity:GetIdentityProviderDailyAnalytics";
	/** [Read] cognito-identity:GetOpenIdToken */
	static readonly actionGetOpenIdToken = "cognito-identity:GetOpenIdToken";
	/** [Read] cognito-identity:GetOpenIdTokenForDeveloperIdentity */
	static readonly actionGetOpenIdTokenForDeveloperIdentity =
		"cognito-identity:GetOpenIdTokenForDeveloperIdentity";
	/** [Read] cognito-identity:GetPrincipalTagAttributeMap */
	static readonly actionGetPrincipalTagAttributeMap =
		"cognito-identity:GetPrincipalTagAttributeMap";
	/** [List] cognito-identity:ListIdentities */
	static readonly ListIdentities = "cognito-identity:ListIdentities";
	/** [List] cognito-identity:ListIdentityPools */
	static readonly ListIdentityPools = "cognito-identity:ListIdentityPools";
	/** [Read] cognito-identity:ListTagsForResource */
	static readonly ListTagsForResource = "cognito-identity:ListTagsForResource";
	/** [Read] cognito-identity:LookupDeveloperIdentity */
	static readonly LookupDeveloperIdentity =
		"cognito-identity:LookupDeveloperIdentity";
	/** [Write] cognito-identity:MergeDeveloperIdentities */
	static readonly MergeDeveloperIdentities =
		"cognito-identity:MergeDeveloperIdentities";
	/** [Write] cognito-identity:SetIdentityPoolRoles */
	static readonly actionSetIdentityPoolRoles =
		"cognito-identity:SetIdentityPoolRoles";
	/** [Write] cognito-identity:SetPrincipalTagAttributeMap */
	static readonly actionSetPrincipalTagAttributeMap =
		"cognito-identity:SetPrincipalTagAttributeMap";
	/** [Tagging] cognito-identity:TagResource */
	static readonly TagResource = "cognito-identity:TagResource";
	/** [Write] cognito-identity:UnlinkDeveloperIdentity */
	static readonly UnlinkDeveloperIdentity =
		"cognito-identity:UnlinkDeveloperIdentity";
	/** [Write] cognito-identity:UnlinkIdentity */
	static readonly UnlinkIdentity = "cognito-identity:UnlinkIdentity";
	/** [Tagging] cognito-identity:UntagResource */
	static readonly UntagResource = "cognito-identity:UntagResource";
	/** [Write] cognito-identity:UpdateIdentityPool */
	static readonly UpdateIdentityPool = "cognito-identity:UpdateIdentityPool";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CognitoIdentityActions.DescribeIdentity,
		CognitoIdentityActions.DescribeIdentityPool,
		CognitoIdentityActions.actionGetCredentialsForIdentity,
		CognitoIdentityActions.actionGetIdentityPoolAnalytics,
		CognitoIdentityActions.actionGetIdentityPoolDailyAnalytics,
		CognitoIdentityActions.actionGetIdentityPoolRoles,
		CognitoIdentityActions.actionGetIdentityProviderDailyAnalytics,
		CognitoIdentityActions.actionGetOpenIdToken,
		CognitoIdentityActions.actionGetOpenIdTokenForDeveloperIdentity,
		CognitoIdentityActions.actionGetPrincipalTagAttributeMap,
		CognitoIdentityActions.ListTagsForResource,
		CognitoIdentityActions.LookupDeveloperIdentity,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CognitoIdentityActions.CreateIdentityPool,
		CognitoIdentityActions.DeleteIdentities,
		CognitoIdentityActions.DeleteIdentityPool,
		CognitoIdentityActions.actionGetId,
		CognitoIdentityActions.MergeDeveloperIdentities,
		CognitoIdentityActions.actionSetIdentityPoolRoles,
		CognitoIdentityActions.actionSetPrincipalTagAttributeMap,
		CognitoIdentityActions.UnlinkDeveloperIdentity,
		CognitoIdentityActions.UnlinkIdentity,
		CognitoIdentityActions.UpdateIdentityPool,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CognitoIdentityActions.ListIdentities,
		CognitoIdentityActions.ListIdentityPools,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CognitoIdentityActions.TagResource,
		CognitoIdentityActions.UntagResource,
	];
}

/**
 * Properties for building a identitypool ARN.
 */
export interface CognitoIdentityIdentitypoolArnProps {
	/** The IdentityPoolId component of the ARN. */
	readonly identityPoolId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a identitypool ARN.
 */
export interface CognitoIdentityIdentitypoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityPoolId component. */
	readonly identityPoolId: string;
}

const IdentitypoolArnRegex =
	/^arn:(?<partition>[^:]+):cognito-identity:(?<region>[^:]*):(?<account>[^:]*):identitypool\/(?<identityPoolId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cognito-identity resources.
 */
export class CognitoIdentityResources {
	/**
	 * Builds an ARN for the identitypool resource.
	 */
	static identitypool(props: CognitoIdentityIdentitypoolArnProps): string {
		return `arn:${props.partition ?? "aws"}:cognito-identity:${props.region ?? "*"}:${props.account ?? "*"}:identitypool/${props.identityPoolId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identitypool resource.
	 */
	static isValidIdentitypoolArn(arn: string): boolean {
		return IdentitypoolArnRegex.test(arn);
	}

	/**
	 * Parses a identitypool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentitypoolArn(
		arn: string,
	): CognitoIdentityIdentitypoolArnComponents {
		const match = IdentitypoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identitypool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identityPoolId: match.groups!.identityPoolId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cognito-identity.
 */
export class CognitoIdentityOperations {
	/** IAM actions required for the CreateIdentityPool API call. */
	static readonly CreateIdentityPool: string[] = [
		"cognito-identity:CreateIdentityPool",
		"cognito-identity:TagResource",
	];
	/** IAM actions required for the DeleteIdentities API call. */
	static readonly DeleteIdentities: string[] = [
		"cognito-identity:DeleteIdentities",
	];
	/** IAM actions required for the DeleteIdentityPool API call. */
	static readonly DeleteIdentityPool: string[] = [
		"cognito-identity:DeleteIdentityPool",
	];
	/** IAM actions required for the DescribeIdentity API call. */
	static readonly DescribeIdentity: string[] = [
		"cognito-identity:DescribeIdentity",
	];
	/** IAM actions required for the DescribeIdentityPool API call. */
	static readonly DescribeIdentityPool: string[] = [
		"cognito-identity:DescribeIdentityPool",
	];
	/** IAM actions required for the GetCredentialsForIdentity API call. */
	static readonly opGetCredentialsForIdentity: string[] = [
		"cognito-identity:GetCredentialsForIdentity",
	];
	/** IAM actions required for the GetId API call. */
	static readonly opGetId: string[] = ["cognito-identity:GetId"];
	/** IAM actions required for the GetIdentityPoolRoles API call. */
	static readonly opGetIdentityPoolRoles: string[] = [
		"cognito-identity:GetIdentityPoolRoles",
	];
	/** IAM actions required for the GetOpenIdToken API call. */
	static readonly opGetOpenIdToken: string[] = [
		"cognito-identity:GetOpenIdToken",
	];
	/** IAM actions required for the GetOpenIdTokenForDeveloperIdentity API call. */
	static readonly opGetOpenIdTokenForDeveloperIdentity: string[] = [
		"cognito-identity:GetOpenIdTokenForDeveloperIdentity",
	];
	/** IAM actions required for the GetPrincipalTagAttributeMap API call. */
	static readonly opGetPrincipalTagAttributeMap: string[] = [
		"cognito-identity:GetPrincipalTagAttributeMap",
	];
	/** IAM actions required for the ListIdentities API call. */
	static readonly ListIdentities: string[] = [
		"cognito-identity:ListIdentities",
	];
	/** IAM actions required for the ListIdentityPools API call. */
	static readonly ListIdentityPools: string[] = [
		"cognito-identity:ListIdentityPools",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"cognito-identity:ListTagsForResource",
	];
	/** IAM actions required for the LookupDeveloperIdentity API call. */
	static readonly LookupDeveloperIdentity: string[] = [
		"cognito-identity:LookupDeveloperIdentity",
	];
	/** IAM actions required for the MergeDeveloperIdentities API call. */
	static readonly MergeDeveloperIdentities: string[] = [
		"cognito-identity:MergeDeveloperIdentities",
	];
	/** IAM actions required for the SetIdentityPoolRoles API call. */
	static readonly opSetIdentityPoolRoles: string[] = [
		"iam:PassRole",
		"cognito-identity:SetIdentityPoolRoles",
	];
	/** IAM actions required for the SetPrincipalTagAttributeMap API call. */
	static readonly opSetPrincipalTagAttributeMap: string[] = [
		"cognito-identity:SetPrincipalTagAttributeMap",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["cognito-identity:TagResource"];
	/** IAM actions required for the UnlinkDeveloperIdentity API call. */
	static readonly UnlinkDeveloperIdentity: string[] = [
		"cognito-identity:UnlinkDeveloperIdentity",
	];
	/** IAM actions required for the UnlinkIdentity API call. */
	static readonly UnlinkIdentity: string[] = [
		"cognito-identity:UnlinkIdentity",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["cognito-identity:UntagResource"];
	/** IAM actions required for the UpdateIdentityPool API call. */
	static readonly UpdateIdentityPool: string[] = [
		"cognito-identity:TagResource",
		"cognito-identity:UntagResource",
		"cognito-identity:UpdateIdentityPool",
	];
}

/**
 * Condition key constants and builders for cognito-identity.
 */
export class CognitoIdentityConditions {
	/** Condition keys applicable to the CreateIdentityPool action. */
	static readonly CreateIdentityPoolConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteIdentities action. */
	static readonly DeleteIdentitiesConditionKeys: string[] = [
		"cognito-identity:IdentityPoolArn",
	];
	/** Condition keys applicable to the DescribeIdentity action. */
	static readonly DescribeIdentityConditionKeys: string[] = [
		"cognito-identity:IdentityPoolArn",
	];
	/** Condition keys applicable to the GetCredentialsForIdentity action. */
	static readonly actionGetCredentialsForIdentityConditionKeys: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
		"cognito-identity-unauth:AccountId",
		"cognito-identity-unauth:IdentityPoolArn",
	];
	/** Condition keys applicable to the GetId action. */
	static readonly actionGetIdConditionKeys: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
		"cognito-identity-unauth:AccountId",
		"cognito-identity-unauth:IdentityPoolArn",
	];
	/** Condition keys applicable to the GetOpenIdToken action. */
	static readonly actionGetOpenIdTokenConditionKeys: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
		"cognito-identity-unauth:AccountId",
		"cognito-identity-unauth:IdentityPoolArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnlinkIdentity action. */
	static readonly UnlinkIdentityConditionKeys: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: cognito-identity-auth:AccountId (String) */
	static readonly ACCOUNT_ID = "cognito-identity-auth:AccountId";
	/** Condition key: cognito-identity-auth:IdentityPoolArn (ARN) */
	static readonly IDENTITY_POOL_ARN = "cognito-identity-auth:IdentityPoolArn";

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

	/**
	 * Generates a condition block for `cognito-identity:IdentityPoolArn`.
	 */
	static identityPoolARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "cognito-identity:IdentityPoolArn": value } };
	}
}
