// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/secretsmanager.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================


/**
 * IAM action constants for the secretsmanager service.
 */
export class SecretsManagerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "secretsmanager";

	/** [Read] secretsmanager:BatchGetSecretValue */
	static readonly BATCH_GET_SECRET_VALUE = "secretsmanager:BatchGetSecretValue";
	/** [Write] secretsmanager:CancelRotateSecret */
	static readonly CANCEL_ROTATE_SECRET = "secretsmanager:CancelRotateSecret";
	/** [Write] secretsmanager:CreateSecret */
	static readonly CREATE_SECRET = "secretsmanager:CreateSecret";
	/** [PermissionManagement] secretsmanager:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "secretsmanager:DeleteResourcePolicy";
	/** [Write] secretsmanager:DeleteSecret */
	static readonly DELETE_SECRET = "secretsmanager:DeleteSecret";
	/** [Read] secretsmanager:DescribeSecret */
	static readonly DESCRIBE_SECRET = "secretsmanager:DescribeSecret";
	/** [Read] secretsmanager:GetRandomPassword */
	static readonly GET_RANDOM_PASSWORD = "secretsmanager:GetRandomPassword";
	/** [Read] secretsmanager:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "secretsmanager:GetResourcePolicy";
	/** [Read] secretsmanager:GetSecretValue */
	static readonly GET_SECRET_VALUE = "secretsmanager:GetSecretValue";
	/** [Read] secretsmanager:ListSecretVersionIds */
	static readonly LIST_SECRET_VERSION_IDS = "secretsmanager:ListSecretVersionIds";
	/** [List] secretsmanager:ListSecrets */
	static readonly LIST_SECRETS = "secretsmanager:ListSecrets";
	/** [PermissionManagement] secretsmanager:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "secretsmanager:PutResourcePolicy";
	/** [Write] secretsmanager:PutSecretValue */
	static readonly PUT_SECRET_VALUE = "secretsmanager:PutSecretValue";
	/** [Write] secretsmanager:RemoveRegionsFromReplication */
	static readonly REMOVE_REGIONS_FROM_REPLICATION = "secretsmanager:RemoveRegionsFromReplication";
	/** [Write] secretsmanager:ReplicateSecretToRegions */
	static readonly REPLICATE_SECRET_TO_REGIONS = "secretsmanager:ReplicateSecretToRegions";
	/** [Write] secretsmanager:RestoreSecret */
	static readonly RESTORE_SECRET = "secretsmanager:RestoreSecret";
	/** [Write] secretsmanager:RotateSecret */
	static readonly ROTATE_SECRET = "secretsmanager:RotateSecret";
	/** [Write] secretsmanager:StopReplicationToReplica */
	static readonly STOP_REPLICATION_TO_REPLICA = "secretsmanager:StopReplicationToReplica";
	/** [Tagging] secretsmanager:TagResource */
	static readonly TAG_RESOURCE = "secretsmanager:TagResource";
	/** [Tagging] secretsmanager:UntagResource */
	static readonly UNTAG_RESOURCE = "secretsmanager:UntagResource";
	/** [Write] secretsmanager:UpdateSecret */
	static readonly UPDATE_SECRET = "secretsmanager:UpdateSecret";
	/** [Write] secretsmanager:UpdateSecretVersionStage */
	static readonly UPDATE_SECRET_VERSION_STAGE = "secretsmanager:UpdateSecretVersionStage";
	/** [PermissionManagement] secretsmanager:ValidateResourcePolicy */
	static readonly VALIDATE_RESOURCE_POLICY = "secretsmanager:ValidateResourcePolicy";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [SecretsManagerActions.BATCH_GET_SECRET_VALUE, SecretsManagerActions.DESCRIBE_SECRET, SecretsManagerActions.GET_RANDOM_PASSWORD, SecretsManagerActions.GET_RESOURCE_POLICY, SecretsManagerActions.GET_SECRET_VALUE, SecretsManagerActions.LIST_SECRET_VERSION_IDS];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [SecretsManagerActions.CANCEL_ROTATE_SECRET, SecretsManagerActions.CREATE_SECRET, SecretsManagerActions.DELETE_SECRET, SecretsManagerActions.PUT_SECRET_VALUE, SecretsManagerActions.REMOVE_REGIONS_FROM_REPLICATION, SecretsManagerActions.REPLICATE_SECRET_TO_REGIONS, SecretsManagerActions.RESTORE_SECRET, SecretsManagerActions.ROTATE_SECRET, SecretsManagerActions.STOP_REPLICATION_TO_REPLICA, SecretsManagerActions.UPDATE_SECRET, SecretsManagerActions.UPDATE_SECRET_VERSION_STAGE];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [SecretsManagerActions.LIST_SECRETS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [SecretsManagerActions.DELETE_RESOURCE_POLICY, SecretsManagerActions.PUT_RESOURCE_POLICY, SecretsManagerActions.VALIDATE_RESOURCE_POLICY];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [SecretsManagerActions.TAG_RESOURCE, SecretsManagerActions.UNTAG_RESOURCE];
}

const SecretArnRegex = new RegExp("^arn:(?<partition>[^:]+):secretsmanager:(?<region>[^:]*):(?<account>[^:]*):secret:(?<secretId>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for secretsmanager resources.
 */
export class SecretsManagerResources {
	/**
	 * Builds an ARN for the Secret resource.
	 */
	static secret(props: {
		/** The SecretId component of the ARN. */
		readonly secretId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:secretsmanager:${props.region ?? "*"}:${props.account ?? "*"}:secret:${props.secretId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Secret resource.
	 */
	static isValidSecretArn(arn: string): boolean {
		return SecretArnRegex.test(arn);
	}

	/**
	 * Parses a Secret ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecretArn(arn: string): { partition: string; region: string; account: string; secretId: string } {
		const match = SecretArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Secret ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			secretId: match.groups!.secretId,
		};
	}

}

/**
 * API operation to required IAM actions mapping for secretsmanager.
 */
export class SecretsManagerOperations {
	/** IAM actions required for the BatchGetSecretValue API call. */
	static readonly BATCH_GET_SECRET_VALUE: string[] = ["secretsmanager:BatchGetSecretValue", "secretsmanager:GetSecretValue", "secretsmanager:ListSecrets"];
	/** IAM actions required for the CancelRotateSecret API call. */
	static readonly CANCEL_ROTATE_SECRET: string[] = ["secretsmanager:CancelRotateSecret"];
	/** IAM actions required for the CreateSecret API call. */
	static readonly CREATE_SECRET: string[] = ["secretsmanager:CreateSecret", "secretsmanager:ReplicateSecretToRegions", "secretsmanager:TagResource"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = ["secretsmanager:DeleteResourcePolicy"];
	/** IAM actions required for the DeleteSecret API call. */
	static readonly DELETE_SECRET: string[] = ["secretsmanager:DeleteSecret"];
	/** IAM actions required for the DescribeSecret API call. */
	static readonly DESCRIBE_SECRET: string[] = ["secretsmanager:DescribeSecret"];
	/** IAM actions required for the GetRandomPassword API call. */
	static readonly GET_RANDOM_PASSWORD: string[] = ["secretsmanager:GetRandomPassword"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["secretsmanager:GetResourcePolicy"];
	/** IAM actions required for the GetSecretValue API call. */
	static readonly GET_SECRET_VALUE: string[] = ["secretsmanager:GetSecretValue"];
	/** IAM actions required for the ListSecretVersionIds API call. */
	static readonly LIST_SECRET_VERSION_IDS: string[] = ["secretsmanager:ListSecretVersionIds"];
	/** IAM actions required for the ListSecrets API call. */
	static readonly LIST_SECRETS: string[] = ["secretsmanager:ListSecrets"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["secretsmanager:PutResourcePolicy"];
	/** IAM actions required for the PutSecretValue API call. */
	static readonly PUT_SECRET_VALUE: string[] = ["secretsmanager:PutSecretValue"];
	/** IAM actions required for the RemoveRegionsFromReplication API call. */
	static readonly REMOVE_REGIONS_FROM_REPLICATION: string[] = ["secretsmanager:RemoveRegionsFromReplication"];
	/** IAM actions required for the ReplicateSecretToRegions API call. */
	static readonly REPLICATE_SECRET_TO_REGIONS: string[] = ["secretsmanager:ReplicateSecretToRegions"];
	/** IAM actions required for the RestoreSecret API call. */
	static readonly RESTORE_SECRET: string[] = ["secretsmanager:RestoreSecret"];
	/** IAM actions required for the RotateSecret API call. */
	static readonly ROTATE_SECRET: string[] = ["iam:PassRole", "secretsmanager:RotateSecret"];
	/** IAM actions required for the StopReplicationToReplica API call. */
	static readonly STOP_REPLICATION_TO_REPLICA: string[] = ["secretsmanager:StopReplicationToReplica"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["secretsmanager:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["secretsmanager:UntagResource"];
	/** IAM actions required for the UpdateSecret API call. */
	static readonly UPDATE_SECRET: string[] = ["secretsmanager:UpdateSecret"];
	/** IAM actions required for the UpdateSecretVersionStage API call. */
	static readonly UPDATE_SECRET_VERSION_STAGE: string[] = ["secretsmanager:UpdateSecretVersionStage"];
	/** IAM actions required for the ValidateResourcePolicy API call. */
	static readonly VALIDATE_RESOURCE_POLICY: string[] = ["secretsmanager:PutResourcePolicy", "secretsmanager:ValidateResourcePolicy"];
}

/**
 * Condition key constants and builders for secretsmanager.
 */
export class SecretsManagerConditions {
	/** Condition keys applicable to the CancelRotateSecret action. */
	static readonly CANCEL_ROTATE_SECRET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the CreateSecret action. */
	static readonly CREATE_SECRET_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "secretsmanager:AddReplicaRegions", "secretsmanager:Description", "secretsmanager:ForceOverwriteReplicaSecret", "secretsmanager:KmsKeyArn", "secretsmanager:KmsKeyId", "secretsmanager:Name", "secretsmanager:ResourceTag/tag-key", "secretsmanager:Type"];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DELETE_RESOURCE_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the DeleteSecret action. */
	static readonly DELETE_SECRET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ForceDeleteWithoutRecovery", "secretsmanager:RecoveryWindowInDays", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the DescribeSecret action. */
	static readonly DESCRIBE_SECRET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the GetResourcePolicy action. */
	static readonly GET_RESOURCE_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the GetSecretValue action. */
	static readonly GET_SECRET_VALUE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:VersionId", "secretsmanager:VersionStage", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the ListSecretVersionIds action. */
	static readonly LIST_SECRET_VERSION_IDS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PUT_RESOURCE_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:BlockPublicPolicy", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the PutSecretValue action. */
	static readonly PUT_SECRET_VALUE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the RemoveRegionsFromReplication action. */
	static readonly REMOVE_REGIONS_FROM_REPLICATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the ReplicateSecretToRegions action. */
	static readonly REPLICATE_SECRET_TO_REGIONS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:AddReplicaRegions", "secretsmanager:ForceOverwriteReplicaSecret", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the RestoreSecret action. */
	static readonly RESTORE_SECRET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the RotateSecret action. */
	static readonly ROTATE_SECRET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ExternalSecretRotationRoleArn", "secretsmanager:ModifyRotationRules", "secretsmanager:ResourceTag/tag-key", "secretsmanager:RotateImmediately", "secretsmanager:RotationLambdaARN", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the StopReplicationToReplica action. */
	static readonly STOP_REPLICATION_TO_REPLICA_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "aws:TagKeys", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the UpdateSecret action. */
	static readonly UPDATE_SECRET_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:Description", "secretsmanager:KmsKeyArn", "secretsmanager:KmsKeyId", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:Type", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the UpdateSecretVersionStage action. */
	static readonly UPDATE_SECRET_VERSION_STAGE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:VersionStage", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];
	/** Condition keys applicable to the ValidateResourcePolicy action. */
	static readonly VALIDATE_RESOURCE_POLICY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "secretsmanager:ResourceTag/tag-key", "secretsmanager:SecretId", "secretsmanager:SecretPrimaryRegion", "secretsmanager:resource/AllowRotationLambdaArn", "secretsmanager:resource/Type"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: secretsmanager:AddReplicaRegions (ArrayOfString) */
	static readonly ADD_REPLICA_REGIONS = "secretsmanager:AddReplicaRegions";
	/** Condition key: secretsmanager:BlockPublicPolicy (Bool) */
	static readonly BLOCK_PUBLIC_POLICY = "secretsmanager:BlockPublicPolicy";
	/** Condition key: secretsmanager:Description (String) */
	static readonly DESCRIPTION = "secretsmanager:Description";
	/** Condition key: secretsmanager:ExternalSecretRotationRoleArn (ARN) */
	static readonly EXTERNAL_SECRET_ROTATION_ROLE_ARN = "secretsmanager:ExternalSecretRotationRoleArn";
	/** Condition key: secretsmanager:ForceDeleteWithoutRecovery (Bool) */
	static readonly FORCE_DELETE_WITHOUT_RECOVERY = "secretsmanager:ForceDeleteWithoutRecovery";
	/** Condition key: secretsmanager:ForceOverwriteReplicaSecret (Bool) */
	static readonly FORCE_OVERWRITE_REPLICA_SECRET = "secretsmanager:ForceOverwriteReplicaSecret";
	/** Condition key: secretsmanager:KmsKeyArn (ARN) */
	static readonly KMS_KEY_ARN = "secretsmanager:KmsKeyArn";
	/** Condition key: secretsmanager:KmsKeyId (String) */
	static readonly KMS_KEY_ID = "secretsmanager:KmsKeyId";
	/** Condition key: secretsmanager:ModifyRotationRules (Bool) */
	static readonly MODIFY_ROTATION_RULES = "secretsmanager:ModifyRotationRules";
	/** Condition key: secretsmanager:Name (String) */
	static readonly NAME = "secretsmanager:Name";
	/** Condition key: secretsmanager:RecoveryWindowInDays (Numeric) */
	static readonly RECOVERY_WINDOW_IN_DAYS = "secretsmanager:RecoveryWindowInDays";
	/** Condition key: secretsmanager:ResourceTag/tag-key (String) */
	static readonly RESOURCE_TAG/TAG_KEY = "secretsmanager:ResourceTag/tag-key";
	/** Condition key: secretsmanager:RotateImmediately (Bool) */
	static readonly ROTATE_IMMEDIATELY = "secretsmanager:RotateImmediately";
	/** Condition key: secretsmanager:RotationLambdaARN (ARN) */
	static readonly ROTATION_LAMBDA_ARN = "secretsmanager:RotationLambdaARN";
	/** Condition key: secretsmanager:SecretId (ARN) */
	static readonly SECRET_ID = "secretsmanager:SecretId";
	/** Condition key: secretsmanager:SecretPrimaryRegion (String) */
	static readonly SECRET_PRIMARY_REGION = "secretsmanager:SecretPrimaryRegion";
	/** Condition key: secretsmanager:Type (String) */
	static readonly TYPE = "secretsmanager:Type";
	/** Condition key: secretsmanager:VersionId (String) */
	static readonly VERSION_ID = "secretsmanager:VersionId";
	/** Condition key: secretsmanager:VersionStage (String) */
	static readonly VERSION_STAGE = "secretsmanager:VersionStage";
	/** Condition key: secretsmanager:resource/AllowRotationLambdaArn (ARN) */
	static readonly RESOURCE/ALLOW_ROTATION_LAMBDA_ARN = "secretsmanager:resource/AllowRotationLambdaArn";
	/** Condition key: secretsmanager:resource/Type (String) */
	static readonly RESOURCE/TYPE = "secretsmanager:resource/Type";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}

	/**
	 * Generates a condition block for `secretsmanager:AddReplicaRegions`.
	 */
	static addReplicaRegions(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "secretsmanager:AddReplicaRegions": values } };
	}

	/**
	 * Generates a condition block for `secretsmanager:BlockPublicPolicy`.
	 */
	static blockPublicPolicy(value: boolean): Record<string, Record<string, boolean>> {
		return { "Bool": { "secretsmanager:BlockPublicPolicy": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:Description`.
	 */
	static description(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:Description": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:ExternalSecretRotationRoleArn`.
	 */
	static externalSecretRotationRoleARN(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "secretsmanager:ExternalSecretRotationRoleArn": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:ForceDeleteWithoutRecovery`.
	 */
	static forceDeleteWithoutRecovery(value: boolean): Record<string, Record<string, boolean>> {
		return { "Bool": { "secretsmanager:ForceDeleteWithoutRecovery": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:ForceOverwriteReplicaSecret`.
	 */
	static forceOverwriteReplicaSecret(value: boolean): Record<string, Record<string, boolean>> {
		return { "Bool": { "secretsmanager:ForceOverwriteReplicaSecret": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:KmsKeyArn`.
	 */
	static kmsKeyARN(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "secretsmanager:KmsKeyArn": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:KmsKeyId`.
	 */
	static kmsKeyId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:KmsKeyId": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:ModifyRotationRules`.
	 */
	static modifyRotationRules(value: boolean): Record<string, Record<string, boolean>> {
		return { "Bool": { "secretsmanager:ModifyRotationRules": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:Name`.
	 */
	static name(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:Name": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:RecoveryWindowInDays`.
	 */
	static recoveryWindowInDays(value: number): Record<string, Record<string, number>> {
		return { "NumericEquals": { "secretsmanager:RecoveryWindowInDays": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:ResourceTag/tag-key`.
	 */
	static resourceTag/tagKey(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:ResourceTag/tag-key": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:RotateImmediately`.
	 */
	static rotateImmediately(value: boolean): Record<string, Record<string, boolean>> {
		return { "Bool": { "secretsmanager:RotateImmediately": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:RotationLambdaARN`.
	 */
	static rotationLambdaARN(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "secretsmanager:RotationLambdaARN": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:SecretId`.
	 */
	static secretId(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "secretsmanager:SecretId": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:SecretPrimaryRegion`.
	 */
	static secretPrimaryRegion(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:SecretPrimaryRegion": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:Type`.
	 */
	static type(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:Type": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:VersionId`.
	 */
	static versionId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:VersionId": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:VersionStage`.
	 */
	static versionStage(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:VersionStage": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:resource/AllowRotationLambdaArn`.
	 */
	static resource/allowRotationLambdaARN(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "secretsmanager:resource/AllowRotationLambdaArn": value } };
	}

	/**
	 * Generates a condition block for `secretsmanager:resource/Type`.
	 */
	static resource/type(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "secretsmanager:resource/Type": value } };
	}

}
