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
	static readonly CREATE_IDENTITY_POOL = "cognito-identity:CreateIdentityPool";
	/** [Write] cognito-identity:DeleteIdentities */
	static readonly DELETE_IDENTITIES = "cognito-identity:DeleteIdentities";
	/** [Write] cognito-identity:DeleteIdentityPool */
	static readonly DELETE_IDENTITY_POOL = "cognito-identity:DeleteIdentityPool";
	/** [Read] cognito-identity:DescribeIdentity */
	static readonly DESCRIBE_IDENTITY = "cognito-identity:DescribeIdentity";
	/** [Read] cognito-identity:DescribeIdentityPool */
	static readonly DESCRIBE_IDENTITY_POOL =
		"cognito-identity:DescribeIdentityPool";
	/** [Read] cognito-identity:GetCredentialsForIdentity */
	static readonly GET_CREDENTIALS_FOR_IDENTITY =
		"cognito-identity:GetCredentialsForIdentity";
	/** [Write] cognito-identity:GetId */
	static readonly GET_ID = "cognito-identity:GetId";
	/** [Read] cognito-identity:GetIdentityPoolAnalytics */
	static readonly GET_IDENTITY_POOL_ANALYTICS =
		"cognito-identity:GetIdentityPoolAnalytics";
	/** [Read] cognito-identity:GetIdentityPoolDailyAnalytics */
	static readonly GET_IDENTITY_POOL_DAILY_ANALYTICS =
		"cognito-identity:GetIdentityPoolDailyAnalytics";
	/** [Read] cognito-identity:GetIdentityPoolRoles */
	static readonly GET_IDENTITY_POOL_ROLES =
		"cognito-identity:GetIdentityPoolRoles";
	/** [Read] cognito-identity:GetIdentityProviderDailyAnalytics */
	static readonly GET_IDENTITY_PROVIDER_DAILY_ANALYTICS =
		"cognito-identity:GetIdentityProviderDailyAnalytics";
	/** [Read] cognito-identity:GetOpenIdToken */
	static readonly GET_OPEN_ID_TOKEN = "cognito-identity:GetOpenIdToken";
	/** [Read] cognito-identity:GetOpenIdTokenForDeveloperIdentity */
	static readonly GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY =
		"cognito-identity:GetOpenIdTokenForDeveloperIdentity";
	/** [Read] cognito-identity:GetPrincipalTagAttributeMap */
	static readonly GET_PRINCIPAL_TAG_ATTRIBUTE_MAP =
		"cognito-identity:GetPrincipalTagAttributeMap";
	/** [List] cognito-identity:ListIdentities */
	static readonly LIST_IDENTITIES = "cognito-identity:ListIdentities";
	/** [List] cognito-identity:ListIdentityPools */
	static readonly LIST_IDENTITY_POOLS = "cognito-identity:ListIdentityPools";
	/** [Read] cognito-identity:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"cognito-identity:ListTagsForResource";
	/** [Read] cognito-identity:LookupDeveloperIdentity */
	static readonly LOOKUP_DEVELOPER_IDENTITY =
		"cognito-identity:LookupDeveloperIdentity";
	/** [Write] cognito-identity:MergeDeveloperIdentities */
	static readonly MERGE_DEVELOPER_IDENTITIES =
		"cognito-identity:MergeDeveloperIdentities";
	/** [Write] cognito-identity:SetIdentityPoolRoles */
	static readonly SET_IDENTITY_POOL_ROLES =
		"cognito-identity:SetIdentityPoolRoles";
	/** [Write] cognito-identity:SetPrincipalTagAttributeMap */
	static readonly SET_PRINCIPAL_TAG_ATTRIBUTE_MAP =
		"cognito-identity:SetPrincipalTagAttributeMap";
	/** [Tagging] cognito-identity:TagResource */
	static readonly TAG_RESOURCE = "cognito-identity:TagResource";
	/** [Write] cognito-identity:UnlinkDeveloperIdentity */
	static readonly UNLINK_DEVELOPER_IDENTITY =
		"cognito-identity:UnlinkDeveloperIdentity";
	/** [Write] cognito-identity:UnlinkIdentity */
	static readonly UNLINK_IDENTITY = "cognito-identity:UnlinkIdentity";
	/** [Tagging] cognito-identity:UntagResource */
	static readonly UNTAG_RESOURCE = "cognito-identity:UntagResource";
	/** [Write] cognito-identity:UpdateIdentityPool */
	static readonly UPDATE_IDENTITY_POOL = "cognito-identity:UpdateIdentityPool";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CognitoIdentityActions.DESCRIBE_IDENTITY,
		CognitoIdentityActions.DESCRIBE_IDENTITY_POOL,
		CognitoIdentityActions.GET_CREDENTIALS_FOR_IDENTITY,
		CognitoIdentityActions.GET_IDENTITY_POOL_ANALYTICS,
		CognitoIdentityActions.GET_IDENTITY_POOL_DAILY_ANALYTICS,
		CognitoIdentityActions.GET_IDENTITY_POOL_ROLES,
		CognitoIdentityActions.GET_IDENTITY_PROVIDER_DAILY_ANALYTICS,
		CognitoIdentityActions.GET_OPEN_ID_TOKEN,
		CognitoIdentityActions.GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY,
		CognitoIdentityActions.GET_PRINCIPAL_TAG_ATTRIBUTE_MAP,
		CognitoIdentityActions.LIST_TAGS_FOR_RESOURCE,
		CognitoIdentityActions.LOOKUP_DEVELOPER_IDENTITY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CognitoIdentityActions.CREATE_IDENTITY_POOL,
		CognitoIdentityActions.DELETE_IDENTITIES,
		CognitoIdentityActions.DELETE_IDENTITY_POOL,
		CognitoIdentityActions.GET_ID,
		CognitoIdentityActions.MERGE_DEVELOPER_IDENTITIES,
		CognitoIdentityActions.SET_IDENTITY_POOL_ROLES,
		CognitoIdentityActions.SET_PRINCIPAL_TAG_ATTRIBUTE_MAP,
		CognitoIdentityActions.UNLINK_DEVELOPER_IDENTITY,
		CognitoIdentityActions.UNLINK_IDENTITY,
		CognitoIdentityActions.UPDATE_IDENTITY_POOL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CognitoIdentityActions.LIST_IDENTITIES,
		CognitoIdentityActions.LIST_IDENTITY_POOLS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CognitoIdentityActions.TAG_RESOURCE,
		CognitoIdentityActions.UNTAG_RESOURCE,
	];
}

const IdentitypoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cognito-identity:(?<region>[^:]*):(?<account>[^:]*):identitypool/(?<identityPoolId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cognito-identity resources.
 */
export class CognitoIdentityResources {
	/**
	 * Builds an ARN for the identitypool resource.
	 */
	static identitypool(props: {
		/** The IdentityPoolId component of the ARN. */
		readonly identityPoolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIdentitypoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identityPoolId: string;
	} {
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
	static readonly CREATE_IDENTITY_POOL: string[] = [
		"cognito-identity:CreateIdentityPool",
		"cognito-identity:TagResource",
	];
	/** IAM actions required for the DeleteIdentities API call. */
	static readonly DELETE_IDENTITIES: string[] = [
		"cognito-identity:DeleteIdentities",
	];
	/** IAM actions required for the DeleteIdentityPool API call. */
	static readonly DELETE_IDENTITY_POOL: string[] = [
		"cognito-identity:DeleteIdentityPool",
	];
	/** IAM actions required for the DescribeIdentity API call. */
	static readonly DESCRIBE_IDENTITY: string[] = [
		"cognito-identity:DescribeIdentity",
	];
	/** IAM actions required for the DescribeIdentityPool API call. */
	static readonly DESCRIBE_IDENTITY_POOL: string[] = [
		"cognito-identity:DescribeIdentityPool",
	];
	/** IAM actions required for the GetCredentialsForIdentity API call. */
	static readonly GET_CREDENTIALS_FOR_IDENTITY: string[] = [
		"cognito-identity:GetCredentialsForIdentity",
	];
	/** IAM actions required for the GetId API call. */
	static readonly GET_ID: string[] = ["cognito-identity:GetId"];
	/** IAM actions required for the GetIdentityPoolRoles API call. */
	static readonly GET_IDENTITY_POOL_ROLES: string[] = [
		"cognito-identity:GetIdentityPoolRoles",
	];
	/** IAM actions required for the GetOpenIdToken API call. */
	static readonly GET_OPEN_ID_TOKEN: string[] = [
		"cognito-identity:GetOpenIdToken",
	];
	/** IAM actions required for the GetOpenIdTokenForDeveloperIdentity API call. */
	static readonly GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY: string[] = [
		"cognito-identity:GetOpenIdTokenForDeveloperIdentity",
	];
	/** IAM actions required for the GetPrincipalTagAttributeMap API call. */
	static readonly GET_PRINCIPAL_TAG_ATTRIBUTE_MAP: string[] = [
		"cognito-identity:GetPrincipalTagAttributeMap",
	];
	/** IAM actions required for the ListIdentities API call. */
	static readonly LIST_IDENTITIES: string[] = [
		"cognito-identity:ListIdentities",
	];
	/** IAM actions required for the ListIdentityPools API call. */
	static readonly LIST_IDENTITY_POOLS: string[] = [
		"cognito-identity:ListIdentityPools",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"cognito-identity:ListTagsForResource",
	];
	/** IAM actions required for the LookupDeveloperIdentity API call. */
	static readonly LOOKUP_DEVELOPER_IDENTITY: string[] = [
		"cognito-identity:LookupDeveloperIdentity",
	];
	/** IAM actions required for the MergeDeveloperIdentities API call. */
	static readonly MERGE_DEVELOPER_IDENTITIES: string[] = [
		"cognito-identity:MergeDeveloperIdentities",
	];
	/** IAM actions required for the SetIdentityPoolRoles API call. */
	static readonly SET_IDENTITY_POOL_ROLES: string[] = [
		"iam:PassRole",
		"cognito-identity:SetIdentityPoolRoles",
	];
	/** IAM actions required for the SetPrincipalTagAttributeMap API call. */
	static readonly SET_PRINCIPAL_TAG_ATTRIBUTE_MAP: string[] = [
		"cognito-identity:SetPrincipalTagAttributeMap",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["cognito-identity:TagResource"];
	/** IAM actions required for the UnlinkDeveloperIdentity API call. */
	static readonly UNLINK_DEVELOPER_IDENTITY: string[] = [
		"cognito-identity:UnlinkDeveloperIdentity",
	];
	/** IAM actions required for the UnlinkIdentity API call. */
	static readonly UNLINK_IDENTITY: string[] = [
		"cognito-identity:UnlinkIdentity",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["cognito-identity:UntagResource"];
	/** IAM actions required for the UpdateIdentityPool API call. */
	static readonly UPDATE_IDENTITY_POOL: string[] = [
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
	static readonly CREATE_IDENTITY_POOL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteIdentities action. */
	static readonly DELETE_IDENTITIES_CONDITION_KEYS: string[] = [
		"cognito-identity:IdentityPoolArn",
	];
	/** Condition keys applicable to the DescribeIdentity action. */
	static readonly DESCRIBE_IDENTITY_CONDITION_KEYS: string[] = [
		"cognito-identity:IdentityPoolArn",
	];
	/** Condition keys applicable to the GetCredentialsForIdentity action. */
	static readonly GET_CREDENTIALS_FOR_IDENTITY_CONDITION_KEYS: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
		"cognito-identity-unauth:AccountId",
		"cognito-identity-unauth:IdentityPoolArn",
	];
	/** Condition keys applicable to the GetId action. */
	static readonly GET_ID_CONDITION_KEYS: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
		"cognito-identity-unauth:AccountId",
		"cognito-identity-unauth:IdentityPoolArn",
	];
	/** Condition keys applicable to the GetOpenIdToken action. */
	static readonly GET_OPEN_ID_TOKEN_CONDITION_KEYS: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
		"cognito-identity-unauth:AccountId",
		"cognito-identity-unauth:IdentityPoolArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnlinkIdentity action. */
	static readonly UNLINK_IDENTITY_CONDITION_KEYS: string[] = [
		"cognito-identity-auth:AccountId",
		"cognito-identity-auth:IdentityPoolArn",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: cognito-identity-auth:AccountId (String) */
	static readonly ACCOUNT_ID = "cognito-identity-auth:AccountId";
	/** Condition key: cognito-identity-auth:IdentityPoolArn (ARN) */
	static readonly IDENTITY_POOL_ARN = "cognito-identity-auth:IdentityPoolArn";
	/** Condition key: cognito-identity-unauth:AccountId (String) */
	static readonly ACCOUNT_ID = "cognito-identity-unauth:AccountId";
	/** Condition key: cognito-identity-unauth:IdentityPoolArn (ARN) */
	static readonly IDENTITY_POOL_ARN = "cognito-identity-unauth:IdentityPoolArn";
	/** Condition key: cognito-identity:IdentityPoolArn (ARN) */
	static readonly IDENTITY_POOL_ARN = "cognito-identity:IdentityPoolArn";

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
