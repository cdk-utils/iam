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
	static readonly ApproveCommand = "cloudshell:ApproveCommand";
	/** [Write] cloudshell:CreateEnvironment */
	static readonly CreateEnvironment = "cloudshell:CreateEnvironment";
	/** [Write] cloudshell:CreateSession */
	static readonly CreateSession = "cloudshell:CreateSession";
	/** [Write] cloudshell:DeleteEnvironment */
	static readonly DeleteEnvironment = "cloudshell:DeleteEnvironment";
	/** [List] cloudshell:DescribeEnvironments */
	static readonly DescribeEnvironments = "cloudshell:DescribeEnvironments";
	/** [Read] cloudshell:GetEnvironmentStatus */
	static readonly actionGetEnvironmentStatus =
		"cloudshell:GetEnvironmentStatus";
	/** [Write] cloudshell:GetFileDownloadUrls */
	static readonly actionGetFileDownloadUrls = "cloudshell:GetFileDownloadUrls";
	/** [Write] cloudshell:GetFileUploadUrls */
	static readonly actionGetFileUploadUrls = "cloudshell:GetFileUploadUrls";
	/** [Write] cloudshell:PutCredentials */
	static readonly PutCredentials = "cloudshell:PutCredentials";
	/** [Write] cloudshell:StartEnvironment */
	static readonly StartEnvironment = "cloudshell:StartEnvironment";
	/** [Write] cloudshell:StopEnvironment */
	static readonly StopEnvironment = "cloudshell:StopEnvironment";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudShellActions.ApproveCommand,
		CloudShellActions.actionGetEnvironmentStatus,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudShellActions.CreateEnvironment,
		CloudShellActions.CreateSession,
		CloudShellActions.DeleteEnvironment,
		CloudShellActions.actionGetFileDownloadUrls,
		CloudShellActions.actionGetFileUploadUrls,
		CloudShellActions.PutCredentials,
		CloudShellActions.StartEnvironment,
		CloudShellActions.StopEnvironment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CloudShellActions.DescribeEnvironments,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a Environment ARN.
 */
export interface CloudShellEnvironmentArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Environment ARN.
 */
export interface CloudShellEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):cloudshell:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudshell resources.
 */
export class CloudShellResources {
	/**
	 * Builds an ARN for the Environment resource.
	 */
	static environment(props: CloudShellEnvironmentArnProps): string {
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
	static parseEnvironmentArn(arn: string): CloudShellEnvironmentArnComponents {
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
	static readonly CreateEnvironmentConditionKeys: string[] = [
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
