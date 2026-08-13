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
	static readonly AUTHENTICATE = "signin:Authenticate";
	/** [Read] signin:AuthorizeOAuth2Access */
	static readonly AUTHORIZE_O_AUTH2_ACCESS = "signin:AuthorizeOAuth2Access";
	/** [Write] signin:CreateAccount */
	static readonly CREATE_ACCOUNT = "signin:CreateAccount";
	/** [Write] signin:CreateOAuth2PublicClient */
	static readonly CREATE_O_AUTH2_PUBLIC_CLIENT =
		"signin:CreateOAuth2PublicClient";
	/** [Read] signin:CreateOAuth2Token */
	static readonly CREATE_O_AUTH2_TOKEN = "signin:CreateOAuth2Token";
	/** [Write] signin:CreateTrustedIdentityPropagationApplicationForConsole */
	static readonly CREATE_TRUSTED_IDENTITY_PROPAGATION_APPLICATION_FOR_CONSOLE =
		"signin:CreateTrustedIdentityPropagationApplicationForConsole";
	/** [Write] signin:DeleteConsoleAuthorizationConfiguration */
	static readonly DELETE_CONSOLE_AUTHORIZATION_CONFIGURATION =
		"signin:DeleteConsoleAuthorizationConfiguration";
	/** [Write] signin:DeleteResourcePermissionStatement */
	static readonly DELETE_RESOURCE_PERMISSION_STATEMENT =
		"signin:DeleteResourcePermissionStatement";
	/** [Read] signin:GetConsoleAuthorizationConfiguration */
	static readonly GET_CONSOLE_AUTHORIZATION_CONFIGURATION =
		"signin:GetConsoleAuthorizationConfiguration";
	/** [Read] signin:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "signin:GetResourcePolicy";
	/** [Read] signin:IntrospectOAuth2Token */
	static readonly INTROSPECT_O_AUTH2_TOKEN = "signin:IntrospectOAuth2Token";
	/** [List] signin:ListResourcePermissionStatements */
	static readonly LIST_RESOURCE_PERMISSION_STATEMENTS =
		"signin:ListResourcePermissionStatements";
	/** [List] signin:ListTrustedIdentityPropagationApplicationsForConsole */
	static readonly LIST_TRUSTED_IDENTITY_PROPAGATION_APPLICATIONS_FOR_CONSOLE =
		"signin:ListTrustedIdentityPropagationApplicationsForConsole";
	/** [Write] signin:PutConsoleAuthorizationConfiguration */
	static readonly PUT_CONSOLE_AUTHORIZATION_CONFIGURATION =
		"signin:PutConsoleAuthorizationConfiguration";
	/** [Write] signin:PutResourcePermissionStatement */
	static readonly PUT_RESOURCE_PERMISSION_STATEMENT =
		"signin:PutResourcePermissionStatement";
	/** [Write] signin:RevokeOAuth2Token */
	static readonly REVOKE_O_AUTH2_TOKEN = "signin:RevokeOAuth2Token";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SigninActions.AUTHENTICATE,
		SigninActions.AUTHORIZE_O_AUTH2_ACCESS,
		SigninActions.CREATE_O_AUTH2_TOKEN,
		SigninActions.GET_CONSOLE_AUTHORIZATION_CONFIGURATION,
		SigninActions.GET_RESOURCE_POLICY,
		SigninActions.INTROSPECT_O_AUTH2_TOKEN,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SigninActions.CREATE_ACCOUNT,
		SigninActions.CREATE_O_AUTH2_PUBLIC_CLIENT,
		SigninActions.CREATE_TRUSTED_IDENTITY_PROPAGATION_APPLICATION_FOR_CONSOLE,
		SigninActions.DELETE_CONSOLE_AUTHORIZATION_CONFIGURATION,
		SigninActions.DELETE_RESOURCE_PERMISSION_STATEMENT,
		SigninActions.PUT_CONSOLE_AUTHORIZATION_CONFIGURATION,
		SigninActions.PUT_RESOURCE_PERMISSION_STATEMENT,
		SigninActions.REVOKE_O_AUTH2_TOKEN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SigninActions.LIST_RESOURCE_PERMISSION_STATEMENTS,
		SigninActions.LIST_TRUSTED_IDENTITY_PROPAGATION_APPLICATIONS_FOR_CONSOLE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ConsoleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):signin:::console/(?<consoleName>[^:/?]+)$",
);
const Oauth2PublicClientLocalhostArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):signin:(?<region>[^:]*):(?<account>[^:]*):oauth2/public-client/localhost$",
);
const Oauth2PublicClientRegistrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):signin:(?<region>[^:]*)::external-client/dcr/.*$",
);
const Oauth2PublicClientRemoteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):signin:(?<region>[^:]*):(?<account>[^:]*):oauth2/public-client/remote$",
);
const Oauth2ResourceServicePrincipalArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):signin:(?<region>[^:]*):(?<account>[^:]*):service-principal/(?<servicePrincipalName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for signin resources.
 */
export class SigninResources {
	/**
	 * Builds an ARN for the console resource.
	 */
	static console(props: {
		/** The ConsoleName component of the ARN. */
		readonly consoleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConsoleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		consoleName: string;
	} {
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
	static oauth2PublicClientLocalhost(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOauth2PublicClientLocalhostArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static oauth2PublicClientRegistration(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOauth2PublicClientRegistrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static oauth2PublicClientRemote(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOauth2PublicClientRemoteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static oauth2ResourceServicePrincipal(props: {
		/** The ServicePrincipalName component of the ARN. */
		readonly servicePrincipalName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOauth2ResourceServicePrincipalArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		servicePrincipalName: string;
	} {
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
	static readonly CREATE_O_AUTH2_TOKEN: string[] = ["signin:CreateOAuth2Token"];
	/** IAM actions required for the CreateOAuth2TokenWithIAM API call. */
	static readonly CREATE_O_AUTH2_TOKEN_WITH_IAM: string[] = [
		"signin:CreateOAuth2Token",
	];
	/** IAM actions required for the DeleteConsoleAuthorizationConfiguration API call. */
	static readonly DELETE_CONSOLE_AUTHORIZATION_CONFIGURATION: string[] = [
		"signin:DeleteConsoleAuthorizationConfiguration",
	];
	/** IAM actions required for the DeleteResourcePermissionStatement API call. */
	static readonly DELETE_RESOURCE_PERMISSION_STATEMENT: string[] = [
		"signin:DeleteResourcePermissionStatement",
	];
	/** IAM actions required for the GetConsoleAuthorizationConfiguration API call. */
	static readonly GET_CONSOLE_AUTHORIZATION_CONFIGURATION: string[] = [
		"signin:GetConsoleAuthorizationConfiguration",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["signin:GetResourcePolicy"];
	/** IAM actions required for the IntrospectOAuth2TokenWithIAM API call. */
	static readonly INTROSPECT_O_AUTH2_TOKEN_WITH_IAM: string[] = [
		"signin:IntrospectOAuth2Token",
	];
	/** IAM actions required for the ListResourcePermissionStatements API call. */
	static readonly LIST_RESOURCE_PERMISSION_STATEMENTS: string[] = [
		"signin:ListResourcePermissionStatements",
	];
	/** IAM actions required for the PutConsoleAuthorizationConfiguration API call. */
	static readonly PUT_CONSOLE_AUTHORIZATION_CONFIGURATION: string[] = [
		"signin:PutConsoleAuthorizationConfiguration",
	];
	/** IAM actions required for the PutResourcePermissionStatement API call. */
	static readonly PUT_RESOURCE_PERMISSION_STATEMENT: string[] = [
		"signin:PutResourcePermissionStatement",
	];
	/** IAM actions required for the RevokeOAuth2TokenWithIAM API call. */
	static readonly REVOKE_O_AUTH2_TOKEN_WITH_IAM: string[] = [
		"signin:RevokeOAuth2Token",
	];
}

/**
 * Condition key constants and builders for signin.
 */
export class SigninConditions {
	/** Condition keys applicable to the Authenticate action. */
	static readonly AUTHENTICATE_CONDITION_KEYS: string[] = [
		"signin:PrincipalArn",
	];
	/** Condition keys applicable to the CreateOAuth2PublicClient action. */
	static readonly CREATE_O_AUTH2_PUBLIC_CLIENT_CONDITION_KEYS: string[] = [
		"signin:OAuthRedirectUri",
	];
	/** Condition keys applicable to the IntrospectOAuth2Token action. */
	static readonly INTROSPECT_O_AUTH2_TOKEN_CONDITION_KEYS: string[] = [
		"signin:OAuthClientId",
		"signin:OAuthTokenType",
	];
	/** Condition keys applicable to the RevokeOAuth2Token action. */
	static readonly REVOKE_O_AUTH2_TOKEN_CONDITION_KEYS: string[] = [
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
