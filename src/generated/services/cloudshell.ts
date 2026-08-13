// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudshell.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudshell service.
 */
export class CloudShellActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudshell";

	/** [Read] cloudshell:ApproveCommand */
	static readonly APPROVE_COMMAND = "cloudshell:ApproveCommand";
	/** [Write] cloudshell:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "cloudshell:CreateEnvironment";
	/** [Write] cloudshell:CreateSession */
	static readonly CREATE_SESSION = "cloudshell:CreateSession";
	/** [Write] cloudshell:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "cloudshell:DeleteEnvironment";
	/** [List] cloudshell:DescribeEnvironments */
	static readonly DESCRIBE_ENVIRONMENTS = "cloudshell:DescribeEnvironments";
	/** [Read] cloudshell:GetEnvironmentStatus */
	static readonly GET_ENVIRONMENT_STATUS = "cloudshell:GetEnvironmentStatus";
	/** [Write] cloudshell:GetFileDownloadUrls */
	static readonly GET_FILE_DOWNLOAD_URLS = "cloudshell:GetFileDownloadUrls";
	/** [Write] cloudshell:GetFileUploadUrls */
	static readonly GET_FILE_UPLOAD_URLS = "cloudshell:GetFileUploadUrls";
	/** [Write] cloudshell:PutCredentials */
	static readonly PUT_CREDENTIALS = "cloudshell:PutCredentials";
	/** [Write] cloudshell:StartEnvironment */
	static readonly START_ENVIRONMENT = "cloudshell:StartEnvironment";
	/** [Write] cloudshell:StopEnvironment */
	static readonly STOP_ENVIRONMENT = "cloudshell:StopEnvironment";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CloudShellActions.APPROVE_COMMAND,
		CloudShellActions.GET_ENVIRONMENT_STATUS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CloudShellActions.CREATE_ENVIRONMENT,
		CloudShellActions.CREATE_SESSION,
		CloudShellActions.DELETE_ENVIRONMENT,
		CloudShellActions.GET_FILE_DOWNLOAD_URLS,
		CloudShellActions.GET_FILE_UPLOAD_URLS,
		CloudShellActions.PUT_CREDENTIALS,
		CloudShellActions.START_ENVIRONMENT,
		CloudShellActions.STOP_ENVIRONMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CloudShellActions.DESCRIBE_ENVIRONMENTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudshell:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloudshell resources.
 */
export class CloudShellResources {
	/**
	 * Builds an ARN for the Environment resource.
	 */
	static environment(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudshell:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a Environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
	} {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
		};
	}
}

/**
 * Condition key constants and builders for cloudshell.
 */
export class CloudShellConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"cloudshell:SecurityGroupIds",
		"cloudshell:SubnetIds",
		"cloudshell:VpcIds",
	];

	/** Condition key: cloudshell:SecurityGroupIds (ArrayOfString) */
	static readonly SECURITY_GROUP_IDS = "cloudshell:SecurityGroupIds";
	/** Condition key: cloudshell:SubnetIds (ArrayOfString) */
	static readonly SUBNET_IDS = "cloudshell:SubnetIds";
	/** Condition key: cloudshell:VpcIds (ArrayOfString) */
	static readonly VPC_IDS = "cloudshell:VpcIds";

	/**
	 * Generates a condition block for `cloudshell:SecurityGroupIds`.
	 */
	static securityGroupIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "cloudshell:SecurityGroupIds": values },
		};
	}

	/**
	 * Generates a condition block for `cloudshell:SubnetIds`.
	 */
	static subnetIds(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "cloudshell:SubnetIds": values } };
	}

	/**
	 * Generates a condition block for `cloudshell:VpcIds`.
	 */
	static vpcIds(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "cloudshell:VpcIds": values } };
	}
}
