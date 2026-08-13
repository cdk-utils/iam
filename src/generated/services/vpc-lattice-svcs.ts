// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/vpc-lattice-svcs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the vpc-lattice-svcs service.
 */
export class VPCLatticeSvcsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "vpc-lattice-svcs";

	/** [Write] vpc-lattice-svcs:Connect */
	static readonly CONNECT = "vpc-lattice-svcs:Connect";
	/** [Write] vpc-lattice-svcs:Invoke */
	static readonly INVOKE = "vpc-lattice-svcs:Invoke";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		VPCLatticeSvcsActions.CONNECT,
		VPCLatticeSvcsActions.INVOKE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)/(?<requestPath>[^:/?]+)$",
);
const TCPServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vpc-lattice:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for vpc-lattice-svcs resources.
 */
export class VPCLatticeSvcsResources {
	/**
	 * Builds an ARN for the Service resource.
	 */
	static service(props: {
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** The RequestPath component of the ARN. */
		readonly requestPath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}/${props.requestPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a Service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceId: string;
		requestPath: string;
	} {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
			requestPath: match.groups!.requestPath,
		};
	}

	/**
	 * Builds an ARN for the TCP Service resource.
	 */
	static tcpService(props: {
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:vpc-lattice:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TCP Service resource.
	 */
	static isValidTCPServiceArn(arn: string): boolean {
		return TCPServiceArnRegex.test(arn);
	}

	/**
	 * Parses a TCP Service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTCPServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceId: string;
	} {
		const match = TCPServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TCP Service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
		};
	}
}

/**
 * Condition key constants and builders for vpc-lattice-svcs.
 */
export class VPCLatticeSvcsConditions {
	/** Condition keys applicable to the Connect action. */
	static readonly CONNECT_CONDITION_KEYS: string[] = [
		"vpc-lattice-svcs:Port",
		"vpc-lattice-svcs:ServiceArn",
		"vpc-lattice-svcs:ServiceNetworkArn",
		"vpc-lattice-svcs:SourceVpc",
		"vpc-lattice-svcs:SourceVpcOwnerAccount",
	];
	/** Condition keys applicable to the Invoke action. */
	static readonly INVOKE_CONDITION_KEYS: string[] = [
		"vpc-lattice-svcs:Port",
		"vpc-lattice-svcs:RequestHeader/${HeaderName}",
		"vpc-lattice-svcs:RequestMethod",
		"vpc-lattice-svcs:RequestPath",
		"vpc-lattice-svcs:RequestQueryString/${QueryStringKey}",
		"vpc-lattice-svcs:ServiceArn",
		"vpc-lattice-svcs:ServiceNetworkArn",
		"vpc-lattice-svcs:SourceVpc",
		"vpc-lattice-svcs:SourceVpcOwnerAccount",
	];

	/** Condition key: vpc-lattice-svcs:Port (Numeric) */
	static readonly PORT = "vpc-lattice-svcs:Port";
	/** Condition key: vpc-lattice-svcs:RequestHeader/${HeaderName} (String) */
	static readonly REQUEST_HEADER =
		"vpc-lattice-svcs:RequestHeader/${HeaderName}";
	/** Condition key: vpc-lattice-svcs:RequestMethod (String) */
	static readonly REQUEST_METHOD = "vpc-lattice-svcs:RequestMethod";
	/** Condition key: vpc-lattice-svcs:RequestPath (String) */
	static readonly REQUEST_PATH = "vpc-lattice-svcs:RequestPath";
	/** Condition key: vpc-lattice-svcs:RequestQueryString/${QueryStringKey} (ArrayOfString) */
	static readonly REQUEST_QUERY_STRING =
		"vpc-lattice-svcs:RequestQueryString/${QueryStringKey}";
	/** Condition key: vpc-lattice-svcs:ServiceArn (ARN) */
	static readonly SERVICE_ARN = "vpc-lattice-svcs:ServiceArn";
	/** Condition key: vpc-lattice-svcs:ServiceNetworkArn (ARN) */
	static readonly SERVICE_NETWORK_ARN = "vpc-lattice-svcs:ServiceNetworkArn";
	/** Condition key: vpc-lattice-svcs:SourceVpc (String) */
	static readonly SOURCE_VPC = "vpc-lattice-svcs:SourceVpc";
	/** Condition key: vpc-lattice-svcs:SourceVpcOwnerAccount (String) */
	static readonly SOURCE_VPC_OWNER_ACCOUNT =
		"vpc-lattice-svcs:SourceVpcOwnerAccount";

	/**
	 * Generates a condition block for `vpc-lattice-svcs:Port`.
	 */
	static port(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "vpc-lattice-svcs:Port": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:RequestHeader/${HeaderName}`.
	 */
	static requestHeader(value: string): Record<string, Record<string, string>> {
		return {
			StringEquals: { "vpc-lattice-svcs:RequestHeader/${HeaderName}": value },
		};
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:RequestMethod`.
	 */
	static requestMethod(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice-svcs:RequestMethod": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:RequestPath`.
	 */
	static requestPath(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice-svcs:RequestPath": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:RequestQueryString/${QueryStringKey}`.
	 */
	static requestQueryString(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"vpc-lattice-svcs:RequestQueryString/${QueryStringKey}": values,
			},
		};
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:ServiceArn`.
	 */
	static serviceARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "vpc-lattice-svcs:ServiceArn": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:ServiceNetworkArn`.
	 */
	static serviceNetworkARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "vpc-lattice-svcs:ServiceNetworkArn": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:SourceVpc`.
	 */
	static sourceVPC(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "vpc-lattice-svcs:SourceVpc": value } };
	}

	/**
	 * Generates a condition block for `vpc-lattice-svcs:SourceVpcOwnerAccount`.
	 */
	static sourceVPCOwnerAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "vpc-lattice-svcs:SourceVpcOwnerAccount": value },
		};
	}
}
