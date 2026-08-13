// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ec2-instance-connect.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ec2-instance-connect service.
 */
export class EC2InstanceConnectActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ec2-instance-connect";

	/** [Write] ec2-instance-connect:OpenTunnel */
	static readonly OpenTunnel = "ec2-instance-connect:OpenTunnel";
	/** [Write] ec2-instance-connect:SendSSHPublicKey */
	static readonly SendSSHPublicKey = "ec2-instance-connect:SendSSHPublicKey";
	/** [Write] ec2-instance-connect:SendSerialConsoleSSHPublicKey */
	static readonly SendSerialConsoleSSHPublicKey =
		"ec2-instance-connect:SendSerialConsoleSSHPublicKey";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EC2InstanceConnectActions.OpenTunnel,
		EC2InstanceConnectActions.SendSSHPublicKey,
		EC2InstanceConnectActions.SendSerialConsoleSSHPublicKey,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a instance ARN.
 */
export interface EC2InstanceConnectInstanceArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance ARN.
 */
export interface EC2InstanceConnectInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a instance-connect-endpoint ARN.
 */
export interface EC2InstanceConnectInstanceConnectEndpointArnProps {
	/** The InstanceConnectEndpointId component of the ARN. */
	readonly instanceConnectEndpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance-connect-endpoint ARN.
 */
export interface EC2InstanceConnectInstanceConnectEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceConnectEndpointId component. */
	readonly instanceConnectEndpointId: string;
}

const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)$/;
const InstanceConnectEndpointArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):instance-connect-endpoint\/(?<instanceConnectEndpointId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ec2-instance-connect resources.
 */
export class EC2InstanceConnectResources {
	/**
	 * Builds an ARN for the instance resource.
	 */
	static instance(props: EC2InstanceConnectInstanceArnProps): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance resource.
	 */
	static isValidInstanceArn(arn: string): boolean {
		return InstanceArnRegex.test(arn);
	}

	/**
	 * Parses a instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceArn(
		arn: string,
	): EC2InstanceConnectInstanceArnComponents {
		const match = InstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the instance-connect-endpoint resource.
	 */
	static instanceConnectEndpoint(
		props: EC2InstanceConnectInstanceConnectEndpointArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:instance-connect-endpoint/${props.instanceConnectEndpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance-connect-endpoint resource.
	 */
	static isValidInstanceConnectEndpointArn(arn: string): boolean {
		return InstanceConnectEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a instance-connect-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceConnectEndpointArn(
		arn: string,
	): EC2InstanceConnectInstanceConnectEndpointArnComponents {
		const match = InstanceConnectEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance-connect-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceConnectEndpointId: match.groups!.instanceConnectEndpointId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ec2-instance-connect.
 */
export class EC2InstanceConnectOperations {
	/** IAM actions required for the SendSSHPublicKey API call. */
	static readonly SendSSHPublicKey: string[] = [
		"ec2-instance-connect:SendSSHPublicKey",
	];
	/** IAM actions required for the SendSerialConsoleSSHPublicKey API call. */
	static readonly SendSerialConsoleSSHPublicKey: string[] = [
		"ec2-instance-connect:SendSerialConsoleSSHPublicKey",
	];
}

/**
 * Condition key constants and builders for ec2-instance-connect.
 */
export class EC2InstanceConnectConditions {
	/** Condition keys applicable to the SendSSHPublicKey action. */
	static readonly SendSSHPublicKeyConditionKeys: string[] = ["ec2:osuser"];

	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: ec2-instance-connect:maxTunnelDuration (Numeric) */
	static readonly MAX_TUNNEL_DURATION =
		"ec2-instance-connect:maxTunnelDuration";
	/** Condition key: ec2-instance-connect:privateIpAddress (IPAddress) */
	static readonly PRIVATE_IP_ADDRESS = "ec2-instance-connect:privateIpAddress";
	/** Condition key: ec2-instance-connect:remotePort (Numeric) */
	static readonly REMOTE_PORT = "ec2-instance-connect:remotePort";
	/** Condition key: ec2:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "ec2:ResourceTag/${TagKey}";
	/** Condition key: ec2:osuser (String) */
	static readonly OSUSER = "ec2:osuser";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `ec2-instance-connect:maxTunnelDuration`.
	 */
	static maxTunnelDuration(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: { "ec2-instance-connect:maxTunnelDuration": value },
		};
	}

	/**
	 * Generates a condition block for `ec2-instance-connect:privateIpAddress`.
	 */
	static privateIPAddress(
		value: string,
	): Record<string, Record<string, string>> {
		return { IpAddress: { "ec2-instance-connect:privateIpAddress": value } };
	}

	/**
	 * Generates a condition block for `ec2-instance-connect:remotePort`.
	 */
	static remotePort(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "ec2-instance-connect:remotePort": value } };
	}
}
