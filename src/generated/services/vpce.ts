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
	static readonly ALLOW_MULTI_REGION = "vpce:AllowMultiRegion";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [VpceActions.ALLOW_MULTI_REGION];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const VPCEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):vpc-endpoint/(?<vpcEndpointId>[^:/?]+)$",
);
const VPCEndpointServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):vpc-endpoint-service/(?<vpcEndpointServiceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for vpce resources.
 */
export class VpceResources {
	/**
	 * Builds an ARN for the vpc-endpoint resource.
	 */
	static vpcEndpoint(props: {
		/** The VpcEndpointId component of the ARN. */
		readonly vpcEndpointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVPCEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vpcEndpointId: string;
	} {
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
	static vpcEndpointService(props: {
		/** The VpcEndpointServiceId component of the ARN. */
		readonly vpcEndpointServiceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVPCEndpointServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vpcEndpointServiceId: string;
	} {
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
