// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/finspace-api.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the finspace-api service.
 */
export class FinspaceAPIActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "finspace-api";

	/** [Read] finspace-api:GetProgrammaticAccessCredentials */
	static readonly actionGetProgrammaticAccessCredentials =
		"finspace-api:GetProgrammaticAccessCredentials";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FinspaceAPIActions.actionGetProgrammaticAccessCredentials,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a credential ARN.
 */
export interface FinspaceAPICredentialArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a credential ARN.
 */
export interface FinspaceAPICredentialArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const CredentialArnRegex =
	/^arn:(?<partition>[^:]+):finspace-api:(?<region>[^:]*):(?<account>[^:]*):\/credentials\/programmatic$/;

/**
 * ARN builders, validators, and parsers for finspace-api resources.
 */
export class FinspaceAPIResources {
	/**
	 * Builds an ARN for the credential resource.
	 */
	static credential(props: FinspaceAPICredentialArnProps): string {
		return `arn:${props.partition ?? "aws"}:finspace-api:${props.region ?? "*"}:${props.account ?? "*"}:/credentials/programmatic`;
	}

	/**
	 * Validates whether a string is a valid ARN for the credential resource.
	 */
	static isValidCredentialArn(arn: string): boolean {
		return CredentialArnRegex.test(arn);
	}

	/**
	 * Parses a credential ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCredentialArn(arn: string): FinspaceAPICredentialArnComponents {
		const match = CredentialArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid credential ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}
