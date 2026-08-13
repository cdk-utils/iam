// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/consoleapp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the consoleapp service.
 */
export class ConsoleappActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "consoleapp";

	/** [Read] consoleapp:GetDeviceIdentity */
	static readonly actionGetDeviceIdentity = "consoleapp:GetDeviceIdentity";
	/** [List] consoleapp:ListDeviceIdentities */
	static readonly ListDeviceIdentities = "consoleapp:ListDeviceIdentities";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ConsoleappActions.actionGetDeviceIdentity,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ConsoleappActions.ListDeviceIdentities,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a DeviceIdentity ARN.
 */
export interface ConsoleappDeviceIdentityArnProps {
	/** The DeviceId component of the ARN. */
	readonly deviceId: string;
	/** The IdentityId component of the ARN. */
	readonly identityId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DeviceIdentity ARN.
 */
export interface ConsoleappDeviceIdentityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeviceId component. */
	readonly deviceId: string;
	/** The IdentityId component. */
	readonly identityId: string;
}

const DeviceIdentityArnRegex =
	/^arn:(?<partition>[^:]+):consoleapp::(?<account>[^:]*):device\/(?<deviceId>[^:/?]+)\/identity\/(?<identityId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for consoleapp resources.
 */
export class ConsoleappResources {
	/**
	 * Builds an ARN for the DeviceIdentity resource.
	 */
	static deviceIdentity(props: ConsoleappDeviceIdentityArnProps): string {
		return `arn:${props.partition ?? "aws"}:consoleapp::${props.account ?? "*"}:device/${props.deviceId}/identity/${props.identityId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DeviceIdentity resource.
	 */
	static isValidDeviceIdentityArn(arn: string): boolean {
		return DeviceIdentityArnRegex.test(arn);
	}

	/**
	 * Parses a DeviceIdentity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeviceIdentityArn(
		arn: string,
	): ConsoleappDeviceIdentityArnComponents {
		const match = DeviceIdentityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DeviceIdentity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			deviceId: match.groups!.deviceId,
			identityId: match.groups!.identityId,
		};
	}
}
