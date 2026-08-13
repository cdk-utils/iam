// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sso-oauth.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sso-oauth service.
 */
export class SSOOauthActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sso-oauth";

	/** [Write] sso-oauth:CreateTokenWithIAM */
	static readonly CreateTokenWithIAM = "sso-oauth:CreateTokenWithIAM";
	/** [Write] sso-oauth:IntrospectTokenWithIAM */
	static readonly IntrospectTokenWithIAM = "sso-oauth:IntrospectTokenWithIAM";
	/** [Write] sso-oauth:RevokeTokenWithIAM */
	static readonly RevokeTokenWithIAM = "sso-oauth:RevokeTokenWithIAM";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSOOauthActions.CreateTokenWithIAM,
		SSOOauthActions.IntrospectTokenWithIAM,
		SSOOauthActions.RevokeTokenWithIAM,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a Application ARN.
 */
export interface SSOOauthApplicationArnProps {
	/** The AccountId component of the ARN. */
	readonly accountId: string;
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Application ARN.
 */
export interface SSOOauthApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccountId component. */
	readonly accountId: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):sso::(?<accountId>[^:/?]+):application\/(?<instanceId>[^:/?]+)\/(?<applicationId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sso-oauth resources.
 */
export class SSOOauthResources {
	/**
	 * Builds an ARN for the Application resource.
	 */
	static application(props: SSOOauthApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:sso::${props.accountId}:application/${props.instanceId}/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a Application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): SSOOauthApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accountId: match.groups!.accountId,
			instanceId: match.groups!.instanceId,
			applicationId: match.groups!.applicationId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sso-oauth.
 */
export class SSOOauthOperations {
	/** IAM actions required for the CreateToken API call. */
	static readonly CreateToken: string[] = ["sso-oauth:CreateTokenWithIAM"];
	/** IAM actions required for the CreateTokenWithIAM API call. */
	static readonly CreateTokenWithIAM: string[] = [
		"sso-oauth:CreateTokenWithIAM",
	];
	/** IAM actions required for the RegisterClient API call. */
	static readonly RegisterClient: string[] = [];
	/** IAM actions required for the StartDeviceAuthorization API call. */
	static readonly StartDeviceAuthorization: string[] = [];
}
