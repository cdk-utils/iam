// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/signin.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the signin service.
 */
export class SigninActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "signin";

	/** [Read] signin:Authenticate */
	static readonly Authenticate = "signin:Authenticate";
	/** [Read] signin:AuthorizeOAuth2Access */
	static readonly AuthorizeOAuth2Access = "signin:AuthorizeOAuth2Access";
	/** [Write] signin:CreateAccount */
	static readonly CreateAccount = "signin:CreateAccount";
	/** [Write] signin:CreateOAuth2PublicClient */
	static readonly CreateOAuth2PublicClient = "signin:CreateOAuth2PublicClient";
	/** [Read] signin:CreateOAuth2Token */
	static readonly CreateOAuth2Token = "signin:CreateOAuth2Token";
	/** [Write] signin:CreateTrustedIdentityPropagationApplicationForConsole */
	static readonly CreateTrustedIdentityPropagationApplicationForConsole =
		"signin:CreateTrustedIdentityPropagationApplicationForConsole";
	/** [Write] signin:DeleteConsoleAuthorizationConfiguration */
	static readonly DeleteConsoleAuthorizationConfiguration =
		"signin:DeleteConsoleAuthorizationConfiguration";
	/** [Write] signin:DeleteResourcePermissionStatement */
	static readonly DeleteResourcePermissionStatement =
		"signin:DeleteResourcePermissionStatement";
	/** [Read] signin:GetConsoleAuthorizationConfiguration */
	static readonly actionGetConsoleAuthorizationConfiguration =
		"signin:GetConsoleAuthorizationConfiguration";
	/** [Read] signin:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "signin:GetResourcePolicy";
	/** [Read] signin:IntrospectOAuth2Token */
	static readonly IntrospectOAuth2Token = "signin:IntrospectOAuth2Token";
	/** [List] signin:ListResourcePermissionStatements */
	static readonly ListResourcePermissionStatements =
		"signin:ListResourcePermissionStatements";
	/** [List] signin:ListTrustedIdentityPropagationApplicationsForConsole */
	static readonly ListTrustedIdentityPropagationApplicationsForConsole =
		"signin:ListTrustedIdentityPropagationApplicationsForConsole";
	/** [Write] signin:PutConsoleAuthorizationConfiguration */
	static readonly PutConsoleAuthorizationConfiguration =
		"signin:PutConsoleAuthorizationConfiguration";
	/** [Write] signin:PutResourcePermissionStatement */
	static readonly PutResourcePermissionStatement =
		"signin:PutResourcePermissionStatement";
	/** [Write] signin:RevokeOAuth2Token */
	static readonly RevokeOAuth2Token = "signin:RevokeOAuth2Token";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SigninActions.Authenticate,
		SigninActions.AuthorizeOAuth2Access,
		SigninActions.CreateOAuth2Token,
		SigninActions.actionGetConsoleAuthorizationConfiguration,
		SigninActions.actionGetResourcePolicy,
		SigninActions.IntrospectOAuth2Token,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SigninActions.CreateAccount,
		SigninActions.CreateOAuth2PublicClient,
		SigninActions.CreateTrustedIdentityPropagationApplicationForConsole,
		SigninActions.DeleteConsoleAuthorizationConfiguration,
		SigninActions.DeleteResourcePermissionStatement,
		SigninActions.PutConsoleAuthorizationConfiguration,
		SigninActions.PutResourcePermissionStatement,
		SigninActions.RevokeOAuth2Token,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SigninActions.ListResourcePermissionStatements,
		SigninActions.ListTrustedIdentityPropagationApplicationsForConsole,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a console ARN.
 */
export interface SigninConsoleArnProps {
	/** The ConsoleName component of the ARN. */
	readonly consoleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a console ARN.
 */
export interface SigninConsoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConsoleName component. */
	readonly consoleName: string;
}

/**
 * Properties for building a oauth2-public-client-localhost ARN.
 */
export interface SigninOauth2PublicClientLocalhostArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a oauth2-public-client-localhost ARN.
 */
export interface SigninOauth2PublicClientLocalhostArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a oauth2-public-client-registration ARN.
 */
export interface SigninOauth2PublicClientRegistrationArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a oauth2-public-client-registration ARN.
 */
export interface SigninOauth2PublicClientRegistrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a oauth2-public-client-remote ARN.
 */
export interface SigninOauth2PublicClientRemoteArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a oauth2-public-client-remote ARN.
 */
export interface SigninOauth2PublicClientRemoteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a oauth2-resource-service-principal ARN.
 */
export interface SigninOauth2ResourceServicePrincipalArnProps {
	/** The ServicePrincipalName component of the ARN. */
	readonly servicePrincipalName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a oauth2-resource-service-principal ARN.
 */
export interface SigninOauth2ResourceServicePrincipalArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServicePrincipalName component. */
	readonly servicePrincipalName: string;
}

const ConsoleArnRegex =
	/^arn:(?<partition>[^:]+):signin:::console\/(?<consoleName>[^:/?]+)$/;
const Oauth2PublicClientLocalhostArnRegex =
	/^arn:(?<partition>[^:]+):signin:(?<region>[^:]*):(?<account>[^:]*):oauth2\/public-client\/localhost$/;
const Oauth2PublicClientRegistrationArnRegex =
	/^arn:(?<partition>[^:]+):signin:(?<region>[^:]*)::external-client\/dcr\/.*$/;
const Oauth2PublicClientRemoteArnRegex =
	/^arn:(?<partition>[^:]+):signin:(?<region>[^:]*):(?<account>[^:]*):oauth2\/public-client\/remote$/;
const Oauth2ResourceServicePrincipalArnRegex =
	/^arn:(?<partition>[^:]+):signin:(?<region>[^:]*):(?<account>[^:]*):service-principal\/(?<servicePrincipalName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for signin resources.
 */
export class SigninResources {
	/**
	 * Builds an ARN for the console resource.
	 */
	static console(props: SigninConsoleArnProps): string {
		return `arn:${props.partition ?? "aws"}:signin:::console/${props.consoleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the console resource.
	 */
	static isValidConsoleArn(arn: string): boolean {
		return ConsoleArnRegex.test(arn);
	}

	/**
	 * Parses a console ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConsoleArn(arn: string): SigninConsoleArnComponents {
		const match = ConsoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid console ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			consoleName: match.groups!.consoleName,
		};
	}

	/**
	 * Builds an ARN for the oauth2-public-client-localhost resource.
	 */
	static oauth2PublicClientLocalhost(
		props: SigninOauth2PublicClientLocalhostArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:signin:${props.region ?? "*"}:${props.account ?? "*"}:oauth2/public-client/localhost`;
	}

	/**
	 * Validates whether a string is a valid ARN for the oauth2-public-client-localhost resource.
	 */
	static isValidOauth2PublicClientLocalhostArn(arn: string): boolean {
		return Oauth2PublicClientLocalhostArnRegex.test(arn);
	}

	/**
	 * Parses a oauth2-public-client-localhost ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOauth2PublicClientLocalhostArn(
		arn: string,
	): SigninOauth2PublicClientLocalhostArnComponents {
		const match = Oauth2PublicClientLocalhostArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid oauth2-public-client-localhost ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the oauth2-public-client-registration resource.
	 */
	static oauth2PublicClientRegistration(
		props: SigninOauth2PublicClientRegistrationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:signin:${props.region ?? "*"}::external-client/dcr/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the oauth2-public-client-registration resource.
	 */
	static isValidOauth2PublicClientRegistrationArn(arn: string): boolean {
		return Oauth2PublicClientRegistrationArnRegex.test(arn);
	}

	/**
	 * Parses a oauth2-public-client-registration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOauth2PublicClientRegistrationArn(
		arn: string,
	): SigninOauth2PublicClientRegistrationArnComponents {
		const match = Oauth2PublicClientRegistrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid oauth2-public-client-registration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the oauth2-public-client-remote resource.
	 */
	static oauth2PublicClientRemote(
		props: SigninOauth2PublicClientRemoteArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:signin:${props.region ?? "*"}:${props.account ?? "*"}:oauth2/public-client/remote`;
	}

	/**
	 * Validates whether a string is a valid ARN for the oauth2-public-client-remote resource.
	 */
	static isValidOauth2PublicClientRemoteArn(arn: string): boolean {
		return Oauth2PublicClientRemoteArnRegex.test(arn);
	}

	/**
	 * Parses a oauth2-public-client-remote ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOauth2PublicClientRemoteArn(
		arn: string,
	): SigninOauth2PublicClientRemoteArnComponents {
		const match = Oauth2PublicClientRemoteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid oauth2-public-client-remote ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the oauth2-resource-service-principal resource.
	 */
	static oauth2ResourceServicePrincipal(
		props: SigninOauth2ResourceServicePrincipalArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:signin:${props.region ?? "*"}:${props.account ?? "*"}:service-principal/${props.servicePrincipalName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the oauth2-resource-service-principal resource.
	 */
	static isValidOauth2ResourceServicePrincipalArn(arn: string): boolean {
		return Oauth2ResourceServicePrincipalArnRegex.test(arn);
	}

	/**
	 * Parses a oauth2-resource-service-principal ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOauth2ResourceServicePrincipalArn(
		arn: string,
	): SigninOauth2ResourceServicePrincipalArnComponents {
		const match = Oauth2ResourceServicePrincipalArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid oauth2-resource-service-principal ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			servicePrincipalName: match.groups!.servicePrincipalName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for signin.
 */
export class SigninOperations {
	/** IAM actions required for the CreateOAuth2Token API call. */
	static readonly CreateOAuth2Token: string[] = ["signin:CreateOAuth2Token"];
	/** IAM actions required for the CreateOAuth2TokenWithIAM API call. */
	static readonly CreateOAuth2TokenWithIAM: string[] = [
		"signin:CreateOAuth2Token",
	];
	/** IAM actions required for the DeleteConsoleAuthorizationConfiguration API call. */
	static readonly DeleteConsoleAuthorizationConfiguration: string[] = [
		"signin:DeleteConsoleAuthorizationConfiguration",
	];
	/** IAM actions required for the DeleteResourcePermissionStatement API call. */
	static readonly DeleteResourcePermissionStatement: string[] = [
		"signin:DeleteResourcePermissionStatement",
	];
	/** IAM actions required for the GetConsoleAuthorizationConfiguration API call. */
	static readonly opGetConsoleAuthorizationConfiguration: string[] = [
		"signin:GetConsoleAuthorizationConfiguration",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["signin:GetResourcePolicy"];
	/** IAM actions required for the IntrospectOAuth2TokenWithIAM API call. */
	static readonly IntrospectOAuth2TokenWithIAM: string[] = [
		"signin:IntrospectOAuth2Token",
	];
	/** IAM actions required for the ListResourcePermissionStatements API call. */
	static readonly ListResourcePermissionStatements: string[] = [
		"signin:ListResourcePermissionStatements",
	];
	/** IAM actions required for the PutConsoleAuthorizationConfiguration API call. */
	static readonly PutConsoleAuthorizationConfiguration: string[] = [
		"signin:PutConsoleAuthorizationConfiguration",
	];
	/** IAM actions required for the PutResourcePermissionStatement API call. */
	static readonly PutResourcePermissionStatement: string[] = [
		"signin:PutResourcePermissionStatement",
	];
	/** IAM actions required for the RevokeOAuth2TokenWithIAM API call. */
	static readonly RevokeOAuth2TokenWithIAM: string[] = [
		"signin:RevokeOAuth2Token",
	];
}

/**
 * Condition key constants and builders for signin.
 */
export class SigninConditions {
	/** Condition keys applicable to the Authenticate action. */
	static readonly AuthenticateConditionKeys: string[] = ["signin:PrincipalArn"];
	/** Condition keys applicable to the CreateOAuth2PublicClient action. */
	static readonly CreateOAuth2PublicClientConditionKeys: string[] = [
		"signin:OAuthRedirectUri",
	];
	/** Condition keys applicable to the IntrospectOAuth2Token action. */
	static readonly IntrospectOAuth2TokenConditionKeys: string[] = [
		"signin:OAuthClientId",
		"signin:OAuthTokenType",
	];
	/** Condition keys applicable to the RevokeOAuth2Token action. */
	static readonly RevokeOAuth2TokenConditionKeys: string[] = [
		"signin:OAuthTokenType",
	];

	/** Condition key: signin:OAuthClientAuthentication (String) */
	static readonly O_AUTH_CLIENT_AUTHENTICATION =
		"signin:OAuthClientAuthentication";
	/** Condition key: signin:OAuthClientId (String) */
	static readonly O_AUTH_CLIENT_ID = "signin:OAuthClientId";
	/** Condition key: signin:OAuthGrantType (String) */
	static readonly O_AUTH_GRANT_TYPE = "signin:OAuthGrantType";
	/** Condition key: signin:OAuthRedirectUri (String) */
	static readonly O_AUTH_REDIRECT_URI = "signin:OAuthRedirectUri";
	/** Condition key: signin:OAuthTokenType (String) */
	static readonly O_AUTH_TOKEN_TYPE = "signin:OAuthTokenType";
	/** Condition key: signin:PrincipalArn (ARN) */
	static readonly PRINCIPAL_ARN = "signin:PrincipalArn";

	/**
	 * Generates a condition block for `signin:OAuthClientAuthentication`.
	 */
	static oAuthClientAuthentication(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "signin:OAuthClientAuthentication": value } };
	}

	/**
	 * Generates a condition block for `signin:OAuthClientId`.
	 */
	static oAuthClientId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "signin:OAuthClientId": value } };
	}

	/**
	 * Generates a condition block for `signin:OAuthGrantType`.
	 */
	static oAuthGrantType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "signin:OAuthGrantType": value } };
	}

	/**
	 * Generates a condition block for `signin:OAuthRedirectUri`.
	 */
	static oAuthRedirectURI(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "signin:OAuthRedirectUri": value } };
	}

	/**
	 * Generates a condition block for `signin:OAuthTokenType`.
	 */
	static oAuthTokenType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "signin:OAuthTokenType": value } };
	}

	/**
	 * Generates a condition block for `signin:PrincipalArn`.
	 */
	static principalARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "signin:PrincipalArn": value } };
	}
}
