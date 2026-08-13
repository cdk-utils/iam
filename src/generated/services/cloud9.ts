// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloud9.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloud9 service.
 */
export class Cloud9Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloud9";

	/** [Write] cloud9:ActivateEC2Remote */
	static readonly ActivateEC2Remote = "cloud9:ActivateEC2Remote";
	/** [Write] cloud9:CreateEnvironmentEC2 */
	static readonly CreateEnvironmentEC2 = "cloud9:CreateEnvironmentEC2";
	/** [Write] cloud9:CreateEnvironmentMembership */
	static readonly CreateEnvironmentMembership =
		"cloud9:CreateEnvironmentMembership";
	/** [Write] cloud9:CreateEnvironmentSSH */
	static readonly CreateEnvironmentSSH = "cloud9:CreateEnvironmentSSH";
	/** [Read] cloud9:CreateEnvironmentToken */
	static readonly CreateEnvironmentToken = "cloud9:CreateEnvironmentToken";
	/** [Write] cloud9:DeleteEnvironment */
	static readonly DeleteEnvironment = "cloud9:DeleteEnvironment";
	/** [Write] cloud9:DeleteEnvironmentMembership */
	static readonly DeleteEnvironmentMembership =
		"cloud9:DeleteEnvironmentMembership";
	/** [Read] cloud9:DescribeEC2Remote */
	static readonly DescribeEC2Remote = "cloud9:DescribeEC2Remote";
	/** [Read] cloud9:DescribeEnvironmentMemberships */
	static readonly DescribeEnvironmentMemberships =
		"cloud9:DescribeEnvironmentMemberships";
	/** [Read] cloud9:DescribeEnvironmentStatus */
	static readonly DescribeEnvironmentStatus =
		"cloud9:DescribeEnvironmentStatus";
	/** [Read] cloud9:DescribeEnvironments */
	static readonly DescribeEnvironments = "cloud9:DescribeEnvironments";
	/** [Read] cloud9:DescribeSSHRemote */
	static readonly DescribeSSHRemote = "cloud9:DescribeSSHRemote";
	/** [Read] cloud9:GetEnvironmentConfig */
	static readonly actionGetEnvironmentConfig = "cloud9:GetEnvironmentConfig";
	/** [Read] cloud9:GetEnvironmentSettings */
	static readonly actionGetEnvironmentSettings =
		"cloud9:GetEnvironmentSettings";
	/** [Read] cloud9:GetMembershipSettings */
	static readonly actionGetMembershipSettings = "cloud9:GetMembershipSettings";
	/** [Read] cloud9:GetMigrationExperiences */
	static readonly actionGetMigrationExperiences =
		"cloud9:GetMigrationExperiences";
	/** [Read] cloud9:GetUserPublicKey */
	static readonly actionGetUserPublicKey = "cloud9:GetUserPublicKey";
	/** [Read] cloud9:GetUserSettings */
	static readonly actionGetUserSettings = "cloud9:GetUserSettings";
	/** [Read] cloud9:ListEnvironments */
	static readonly ListEnvironments = "cloud9:ListEnvironments";
	/** [Read] cloud9:ListTagsForResource */
	static readonly ListTagsForResource = "cloud9:ListTagsForResource";
	/** [Write] cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2 */
	static readonly ModifyTemporaryCredentialsOnEnvironmentEC2 =
		"cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2";
	/** [Tagging] cloud9:TagResource */
	static readonly TagResource = "cloud9:TagResource";
	/** [Tagging] cloud9:UntagResource */
	static readonly UntagResource = "cloud9:UntagResource";
	/** [Write] cloud9:UpdateEnvironment */
	static readonly UpdateEnvironment = "cloud9:UpdateEnvironment";
	/** [Write] cloud9:UpdateEnvironmentMembership */
	static readonly UpdateEnvironmentMembership =
		"cloud9:UpdateEnvironmentMembership";
	/** [Write] cloud9:UpdateEnvironmentSettings */
	static readonly UpdateEnvironmentSettings =
		"cloud9:UpdateEnvironmentSettings";
	/** [Write] cloud9:UpdateMembershipSettings */
	static readonly UpdateMembershipSettings = "cloud9:UpdateMembershipSettings";
	/** [Write] cloud9:UpdateSSHRemote */
	static readonly UpdateSSHRemote = "cloud9:UpdateSSHRemote";
	/** [Write] cloud9:UpdateUserSettings */
	static readonly UpdateUserSettings = "cloud9:UpdateUserSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Cloud9Actions.CreateEnvironmentToken,
		Cloud9Actions.DescribeEC2Remote,
		Cloud9Actions.DescribeEnvironmentMemberships,
		Cloud9Actions.DescribeEnvironmentStatus,
		Cloud9Actions.DescribeEnvironments,
		Cloud9Actions.DescribeSSHRemote,
		Cloud9Actions.actionGetEnvironmentConfig,
		Cloud9Actions.actionGetEnvironmentSettings,
		Cloud9Actions.actionGetMembershipSettings,
		Cloud9Actions.actionGetMigrationExperiences,
		Cloud9Actions.actionGetUserPublicKey,
		Cloud9Actions.actionGetUserSettings,
		Cloud9Actions.ListEnvironments,
		Cloud9Actions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Cloud9Actions.ActivateEC2Remote,
		Cloud9Actions.CreateEnvironmentEC2,
		Cloud9Actions.CreateEnvironmentMembership,
		Cloud9Actions.CreateEnvironmentSSH,
		Cloud9Actions.DeleteEnvironment,
		Cloud9Actions.DeleteEnvironmentMembership,
		Cloud9Actions.ModifyTemporaryCredentialsOnEnvironmentEC2,
		Cloud9Actions.UpdateEnvironment,
		Cloud9Actions.UpdateEnvironmentMembership,
		Cloud9Actions.UpdateEnvironmentSettings,
		Cloud9Actions.UpdateMembershipSettings,
		Cloud9Actions.UpdateSSHRemote,
		Cloud9Actions.UpdateUserSettings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Cloud9Actions.TagResource,
		Cloud9Actions.UntagResource,
	];
}

/**
 * Properties for building a environment ARN.
 */
export interface Cloud9EnvironmentArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface Cloud9EnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):cloud9:(?<region>[^:]*):(?<account>[^:]*):environment:(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloud9 resources.
 */
export class Cloud9Resources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: Cloud9EnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloud9:${props.region ?? "*"}:${props.account ?? "*"}:environment:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): Cloud9EnvironmentArnComponents {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloud9.
 */
export class Cloud9Operations {
	/** IAM actions required for the CreateEnvironmentEC2 API call. */
	static readonly CreateEnvironmentEC2: string[] = [
		"cloud9:CreateEnvironmentEC2",
		"cloud9:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentMembership API call. */
	static readonly CreateEnvironmentMembership: string[] = [
		"cloud9:CreateEnvironmentMembership",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = ["cloud9:DeleteEnvironment"];
	/** IAM actions required for the DeleteEnvironmentMembership API call. */
	static readonly DeleteEnvironmentMembership: string[] = [
		"cloud9:DeleteEnvironmentMembership",
	];
	/** IAM actions required for the DescribeEnvironmentMemberships API call. */
	static readonly DescribeEnvironmentMemberships: string[] = [
		"cloud9:DescribeEnvironmentMemberships",
	];
	/** IAM actions required for the DescribeEnvironmentStatus API call. */
	static readonly DescribeEnvironmentStatus: string[] = [
		"cloud9:DescribeEnvironmentStatus",
	];
	/** IAM actions required for the DescribeEnvironments API call. */
	static readonly DescribeEnvironments: string[] = [
		"cloud9:DescribeEnvironments",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["cloud9:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"cloud9:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["cloud9:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["cloud9:UntagResource"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = ["cloud9:UpdateEnvironment"];
	/** IAM actions required for the UpdateEnvironmentMembership API call. */
	static readonly UpdateEnvironmentMembership: string[] = [
		"cloud9:UpdateEnvironmentMembership",
	];
}

/**
 * Condition key constants and builders for cloud9.
 */
export class Cloud9Conditions {
	/** Condition keys applicable to the CreateEnvironmentEC2 action. */
	static readonly CreateEnvironmentEC2ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloud9:EnvironmentName",
		"cloud9:InstanceType",
		"cloud9:OwnerArn",
		"cloud9:SubnetId",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the CreateEnvironmentMembership action. */
	static readonly CreateEnvironmentMembershipConditionKeys: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:Permissions",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the CreateEnvironmentSSH action. */
	static readonly CreateEnvironmentSSHConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloud9:EnvironmentName",
		"cloud9:OwnerArn",
	];
	/** Condition keys applicable to the DeleteEnvironmentMembership action. */
	static readonly DeleteEnvironmentMembershipConditionKeys: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the DescribeEnvironmentMemberships action. */
	static readonly DescribeEnvironmentMembershipsConditionKeys: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the GetUserPublicKey action. */
	static readonly actionGetUserPublicKeyConditionKeys: string[] = [
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateEnvironmentMembership action. */
	static readonly UpdateEnvironmentMembershipConditionKeys: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:Permissions",
		"cloud9:UserArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: cloud9:EnvironmentId (String) */
	static readonly ENVIRONMENT_ID = "cloud9:EnvironmentId";
	/** Condition key: cloud9:EnvironmentName (String) */
	static readonly ENVIRONMENT_NAME = "cloud9:EnvironmentName";
	/** Condition key: cloud9:InstanceType (String) */
	static readonly INSTANCE_TYPE = "cloud9:InstanceType";
	/** Condition key: cloud9:OwnerArn (ARN) */
	static readonly OWNER_ARN = "cloud9:OwnerArn";
	/** Condition key: cloud9:Permissions (String) */
	static readonly PERMISSIONS = "cloud9:Permissions";
	/** Condition key: cloud9:SubnetId (String) */
	static readonly SUBNET_ID = "cloud9:SubnetId";
	/** Condition key: cloud9:UserArn (ARN) */
	static readonly USER_ARN = "cloud9:UserArn";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}

	/**
	 * Generates a condition block for `cloud9:EnvironmentId`.
	 */
	static environmentId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloud9:EnvironmentId": value } };
	}

	/**
	 * Generates a condition block for `cloud9:EnvironmentName`.
	 */
	static environmentName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "cloud9:EnvironmentName": value } };
	}

	/**
	 * Generates a condition block for `cloud9:InstanceType`.
	 */
	static instanceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloud9:InstanceType": value } };
	}

	/**
	 * Generates a condition block for `cloud9:OwnerArn`.
	 */
	static ownerARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "cloud9:OwnerArn": value } };
	}

	/**
	 * Generates a condition block for `cloud9:Permissions`.
	 */
	static permissions(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloud9:Permissions": value } };
	}

	/**
	 * Generates a condition block for `cloud9:SubnetId`.
	 */
	static subnetId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloud9:SubnetId": value } };
	}

	/**
	 * Generates a condition block for `cloud9:UserArn`.
	 */
	static userARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "cloud9:UserArn": value } };
	}
}
