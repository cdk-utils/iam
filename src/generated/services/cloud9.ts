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
	static readonly ACTIVATE_EC2_REMOTE = "cloud9:ActivateEC2Remote";
	/** [Write] cloud9:CreateEnvironmentEC2 */
	static readonly CREATE_ENVIRONMENT_EC2 = "cloud9:CreateEnvironmentEC2";
	/** [Write] cloud9:CreateEnvironmentMembership */
	static readonly CREATE_ENVIRONMENT_MEMBERSHIP =
		"cloud9:CreateEnvironmentMembership";
	/** [Write] cloud9:CreateEnvironmentSSH */
	static readonly CREATE_ENVIRONMENT_SSH = "cloud9:CreateEnvironmentSSH";
	/** [Read] cloud9:CreateEnvironmentToken */
	static readonly CREATE_ENVIRONMENT_TOKEN = "cloud9:CreateEnvironmentToken";
	/** [Write] cloud9:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "cloud9:DeleteEnvironment";
	/** [Write] cloud9:DeleteEnvironmentMembership */
	static readonly DELETE_ENVIRONMENT_MEMBERSHIP =
		"cloud9:DeleteEnvironmentMembership";
	/** [Read] cloud9:DescribeEC2Remote */
	static readonly DESCRIBE_EC2_REMOTE = "cloud9:DescribeEC2Remote";
	/** [Read] cloud9:DescribeEnvironmentMemberships */
	static readonly DESCRIBE_ENVIRONMENT_MEMBERSHIPS =
		"cloud9:DescribeEnvironmentMemberships";
	/** [Read] cloud9:DescribeEnvironmentStatus */
	static readonly DESCRIBE_ENVIRONMENT_STATUS =
		"cloud9:DescribeEnvironmentStatus";
	/** [Read] cloud9:DescribeEnvironments */
	static readonly DESCRIBE_ENVIRONMENTS = "cloud9:DescribeEnvironments";
	/** [Read] cloud9:DescribeSSHRemote */
	static readonly DESCRIBE_SSH_REMOTE = "cloud9:DescribeSSHRemote";
	/** [Read] cloud9:GetEnvironmentConfig */
	static readonly GET_ENVIRONMENT_CONFIG = "cloud9:GetEnvironmentConfig";
	/** [Read] cloud9:GetEnvironmentSettings */
	static readonly GET_ENVIRONMENT_SETTINGS = "cloud9:GetEnvironmentSettings";
	/** [Read] cloud9:GetMembershipSettings */
	static readonly GET_MEMBERSHIP_SETTINGS = "cloud9:GetMembershipSettings";
	/** [Read] cloud9:GetMigrationExperiences */
	static readonly GET_MIGRATION_EXPERIENCES = "cloud9:GetMigrationExperiences";
	/** [Read] cloud9:GetUserPublicKey */
	static readonly GET_USER_PUBLIC_KEY = "cloud9:GetUserPublicKey";
	/** [Read] cloud9:GetUserSettings */
	static readonly GET_USER_SETTINGS = "cloud9:GetUserSettings";
	/** [Read] cloud9:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "cloud9:ListEnvironments";
	/** [Read] cloud9:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "cloud9:ListTagsForResource";
	/** [Write] cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2 */
	static readonly MODIFY_TEMPORARY_CREDENTIALS_ON_ENVIRONMENT_EC2 =
		"cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2";
	/** [Tagging] cloud9:TagResource */
	static readonly TAG_RESOURCE = "cloud9:TagResource";
	/** [Tagging] cloud9:UntagResource */
	static readonly UNTAG_RESOURCE = "cloud9:UntagResource";
	/** [Write] cloud9:UpdateEnvironment */
	static readonly UPDATE_ENVIRONMENT = "cloud9:UpdateEnvironment";
	/** [Write] cloud9:UpdateEnvironmentMembership */
	static readonly UPDATE_ENVIRONMENT_MEMBERSHIP =
		"cloud9:UpdateEnvironmentMembership";
	/** [Write] cloud9:UpdateEnvironmentSettings */
	static readonly UPDATE_ENVIRONMENT_SETTINGS =
		"cloud9:UpdateEnvironmentSettings";
	/** [Write] cloud9:UpdateMembershipSettings */
	static readonly UPDATE_MEMBERSHIP_SETTINGS =
		"cloud9:UpdateMembershipSettings";
	/** [Write] cloud9:UpdateSSHRemote */
	static readonly UPDATE_SSH_REMOTE = "cloud9:UpdateSSHRemote";
	/** [Write] cloud9:UpdateUserSettings */
	static readonly UPDATE_USER_SETTINGS = "cloud9:UpdateUserSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Cloud9Actions.CREATE_ENVIRONMENT_TOKEN,
		Cloud9Actions.DESCRIBE_EC2_REMOTE,
		Cloud9Actions.DESCRIBE_ENVIRONMENT_MEMBERSHIPS,
		Cloud9Actions.DESCRIBE_ENVIRONMENT_STATUS,
		Cloud9Actions.DESCRIBE_ENVIRONMENTS,
		Cloud9Actions.DESCRIBE_SSH_REMOTE,
		Cloud9Actions.GET_ENVIRONMENT_CONFIG,
		Cloud9Actions.GET_ENVIRONMENT_SETTINGS,
		Cloud9Actions.GET_MEMBERSHIP_SETTINGS,
		Cloud9Actions.GET_MIGRATION_EXPERIENCES,
		Cloud9Actions.GET_USER_PUBLIC_KEY,
		Cloud9Actions.GET_USER_SETTINGS,
		Cloud9Actions.LIST_ENVIRONMENTS,
		Cloud9Actions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Cloud9Actions.ACTIVATE_EC2_REMOTE,
		Cloud9Actions.CREATE_ENVIRONMENT_EC2,
		Cloud9Actions.CREATE_ENVIRONMENT_MEMBERSHIP,
		Cloud9Actions.CREATE_ENVIRONMENT_SSH,
		Cloud9Actions.DELETE_ENVIRONMENT,
		Cloud9Actions.DELETE_ENVIRONMENT_MEMBERSHIP,
		Cloud9Actions.MODIFY_TEMPORARY_CREDENTIALS_ON_ENVIRONMENT_EC2,
		Cloud9Actions.UPDATE_ENVIRONMENT,
		Cloud9Actions.UPDATE_ENVIRONMENT_MEMBERSHIP,
		Cloud9Actions.UPDATE_ENVIRONMENT_SETTINGS,
		Cloud9Actions.UPDATE_MEMBERSHIP_SETTINGS,
		Cloud9Actions.UPDATE_SSH_REMOTE,
		Cloud9Actions.UPDATE_USER_SETTINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Cloud9Actions.TAG_RESOURCE,
		Cloud9Actions.UNTAG_RESOURCE,
	];
}

const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloud9:(?<region>[^:]*):(?<account>[^:]*):environment:(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloud9 resources.
 */
export class Cloud9Resources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_ENVIRONMENT_EC2: string[] = [
		"cloud9:CreateEnvironmentEC2",
		"cloud9:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentMembership API call. */
	static readonly CREATE_ENVIRONMENT_MEMBERSHIP: string[] = [
		"cloud9:CreateEnvironmentMembership",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = ["cloud9:DeleteEnvironment"];
	/** IAM actions required for the DeleteEnvironmentMembership API call. */
	static readonly DELETE_ENVIRONMENT_MEMBERSHIP: string[] = [
		"cloud9:DeleteEnvironmentMembership",
	];
	/** IAM actions required for the DescribeEnvironmentMemberships API call. */
	static readonly DESCRIBE_ENVIRONMENT_MEMBERSHIPS: string[] = [
		"cloud9:DescribeEnvironmentMemberships",
	];
	/** IAM actions required for the DescribeEnvironmentStatus API call. */
	static readonly DESCRIBE_ENVIRONMENT_STATUS: string[] = [
		"cloud9:DescribeEnvironmentStatus",
	];
	/** IAM actions required for the DescribeEnvironments API call. */
	static readonly DESCRIBE_ENVIRONMENTS: string[] = [
		"cloud9:DescribeEnvironments",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["cloud9:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"cloud9:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["cloud9:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["cloud9:UntagResource"];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UPDATE_ENVIRONMENT: string[] = ["cloud9:UpdateEnvironment"];
	/** IAM actions required for the UpdateEnvironmentMembership API call. */
	static readonly UPDATE_ENVIRONMENT_MEMBERSHIP: string[] = [
		"cloud9:UpdateEnvironmentMembership",
	];
}

/**
 * Condition key constants and builders for cloud9.
 */
export class Cloud9Conditions {
	/** Condition keys applicable to the CreateEnvironmentEC2 action. */
	static readonly CREATE_ENVIRONMENT_EC2_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloud9:EnvironmentName",
		"cloud9:InstanceType",
		"cloud9:OwnerArn",
		"cloud9:SubnetId",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the CreateEnvironmentMembership action. */
	static readonly CREATE_ENVIRONMENT_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:Permissions",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the CreateEnvironmentSSH action. */
	static readonly CREATE_ENVIRONMENT_SSH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloud9:EnvironmentName",
		"cloud9:OwnerArn",
	];
	/** Condition keys applicable to the DeleteEnvironmentMembership action. */
	static readonly DELETE_ENVIRONMENT_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the DescribeEnvironmentMemberships action. */
	static readonly DESCRIBE_ENVIRONMENT_MEMBERSHIPS_CONDITION_KEYS: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the GetUserPublicKey action. */
	static readonly GET_USER_PUBLIC_KEY_CONDITION_KEYS: string[] = [
		"cloud9:UserArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateEnvironmentMembership action. */
	static readonly UPDATE_ENVIRONMENT_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"cloud9:EnvironmentId",
		"cloud9:Permissions",
		"cloud9:UserArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
