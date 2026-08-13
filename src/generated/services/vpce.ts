// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/vpce.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the vpce service.
 */
export class VpceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "vpce";

	/** [Write] vpce:AllowMultiRegion */
	static readonly AllowMultiRegion = "vpce:AllowMultiRegion";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [VpceActions.AllowMultiRegion];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a vpc-endpoint ARN.
 */
export interface VpceVPCEndpointArnProps {
	/** The VpcEndpointId component of the ARN. */
	readonly vpcEndpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vpc-endpoint ARN.
 */
export interface VpceVPCEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VpcEndpointId component. */
	readonly vpcEndpointId: string;
}

/**
 * Properties for building a vpc-endpoint-service ARN.
 */
export interface VpceVPCEndpointServiceArnProps {
	/** The VpcEndpointServiceId component of the ARN. */
	readonly vpcEndpointServiceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vpc-endpoint-service ARN.
 */
export interface VpceVPCEndpointServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VpcEndpointServiceId component. */
	readonly vpcEndpointServiceId: string;
}

const VPCEndpointArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):vpc-endpoint\/(?<vpcEndpointId>[^:/?]+)$/;
const VPCEndpointServiceArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):vpc-endpoint-service\/(?<vpcEndpointServiceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for vpce resources.
 */
export class VpceResources {
	/**
	 * Builds an ARN for the vpc-endpoint resource.
	 */
	static vpcEndpoint(props: VpceVPCEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:vpc-endpoint/${props.vpcEndpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpc-endpoint resource.
	 */
	static isValidVPCEndpointArn(arn: string): boolean {
		return VPCEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a vpc-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVPCEndpointArn(arn: string): VpceVPCEndpointArnComponents {
		const match = VPCEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpc-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vpcEndpointId: match.groups!.vpcEndpointId,
		};
	}

	/**
	 * Builds an ARN for the vpc-endpoint-service resource.
	 */
	static vpcEndpointService(props: VpceVPCEndpointServiceArnProps): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:vpc-endpoint-service/${props.vpcEndpointServiceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpc-endpoint-service resource.
	 */
	static isValidVPCEndpointServiceArn(arn: string): boolean {
		return VPCEndpointServiceArnRegex.test(arn);
	}

	/**
	 * Parses a vpc-endpoint-service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVPCEndpointServiceArn(
		arn: string,
	): VpceVPCEndpointServiceArnComponents {
		const match = VPCEndpointServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpc-endpoint-service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vpcEndpointServiceId: match.groups!.vpcEndpointServiceId,
		};
	}
}
