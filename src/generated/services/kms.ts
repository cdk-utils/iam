// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kms.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kms service.
 */
export class KMSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kms";

	/** [Write] kms:CancelKeyDeletion */
	static readonly CANCEL_KEY_DELETION = "kms:CancelKeyDeletion";
	/** [Write] kms:ConnectCustomKeyStore */
	static readonly CONNECT_CUSTOM_KEY_STORE = "kms:ConnectCustomKeyStore";
	/** [Write] kms:CreateAlias */
	static readonly CREATE_ALIAS = "kms:CreateAlias";
	/** [Write] kms:CreateCustomKeyStore */
	static readonly CREATE_CUSTOM_KEY_STORE = "kms:CreateCustomKeyStore";
	/** [PermissionManagement] kms:CreateGrant */
	static readonly CREATE_GRANT = "kms:CreateGrant";
	/** [Write] kms:CreateKey */
	static readonly CREATE_KEY = "kms:CreateKey";
	/** [Write] kms:Decrypt */
	static readonly DECRYPT = "kms:Decrypt";
	/** [Write] kms:DeleteAlias */
	static readonly DELETE_ALIAS = "kms:DeleteAlias";
	/** [Write] kms:DeleteCustomKeyStore */
	static readonly DELETE_CUSTOM_KEY_STORE = "kms:DeleteCustomKeyStore";
	/** [Write] kms:DeleteImportedKeyMaterial */
	static readonly DELETE_IMPORTED_KEY_MATERIAL =
		"kms:DeleteImportedKeyMaterial";
	/** [Write] kms:DeriveSharedSecret */
	static readonly DERIVE_SHARED_SECRET = "kms:DeriveSharedSecret";
	/** [Read] kms:DescribeCustomKeyStores */
	static readonly DESCRIBE_CUSTOM_KEY_STORES = "kms:DescribeCustomKeyStores";
	/** [Read] kms:DescribeKey */
	static readonly DESCRIBE_KEY = "kms:DescribeKey";
	/** [Write] kms:DisableKey */
	static readonly DISABLE_KEY = "kms:DisableKey";
	/** [Write] kms:DisableKeyRotation */
	static readonly DISABLE_KEY_ROTATION = "kms:DisableKeyRotation";
	/** [Write] kms:DisconnectCustomKeyStore */
	static readonly DISCONNECT_CUSTOM_KEY_STORE = "kms:DisconnectCustomKeyStore";
	/** [Write] kms:EnableKey */
	static readonly ENABLE_KEY = "kms:EnableKey";
	/** [Write] kms:EnableKeyRotation */
	static readonly ENABLE_KEY_ROTATION = "kms:EnableKeyRotation";
	/** [Write] kms:Encrypt */
	static readonly ENCRYPT = "kms:Encrypt";
	/** [Write] kms:GenerateDataKey */
	static readonly GENERATE_DATA_KEY = "kms:GenerateDataKey";
	/** [Write] kms:GenerateDataKeyPair */
	static readonly GENERATE_DATA_KEY_PAIR = "kms:GenerateDataKeyPair";
	/** [Write] kms:GenerateDataKeyPairWithoutPlaintext */
	static readonly GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT =
		"kms:GenerateDataKeyPairWithoutPlaintext";
	/** [Write] kms:GenerateDataKeyWithoutPlaintext */
	static readonly GENERATE_DATA_KEY_WITHOUT_PLAINTEXT =
		"kms:GenerateDataKeyWithoutPlaintext";
	/** [Write] kms:GenerateMac */
	static readonly GENERATE_MAC = "kms:GenerateMac";
	/** [Write] kms:GenerateRandom */
	static readonly GENERATE_RANDOM = "kms:GenerateRandom";
	/** [Read] kms:GetKeyLastUsage */
	static readonly GET_KEY_LAST_USAGE = "kms:GetKeyLastUsage";
	/** [Read] kms:GetKeyPolicy */
	static readonly GET_KEY_POLICY = "kms:GetKeyPolicy";
	/** [Read] kms:GetKeyRotationStatus */
	static readonly GET_KEY_ROTATION_STATUS = "kms:GetKeyRotationStatus";
	/** [Read] kms:GetParametersForImport */
	static readonly GET_PARAMETERS_FOR_IMPORT = "kms:GetParametersForImport";
	/** [Read] kms:GetPublicKey */
	static readonly GET_PUBLIC_KEY = "kms:GetPublicKey";
	/** [Write] kms:ImportKeyMaterial */
	static readonly IMPORT_KEY_MATERIAL = "kms:ImportKeyMaterial";
	/** [List] kms:ListAliases */
	static readonly LIST_ALIASES = "kms:ListAliases";
	/** [List] kms:ListGrants */
	static readonly LIST_GRANTS = "kms:ListGrants";
	/** [List] kms:ListKeyPolicies */
	static readonly LIST_KEY_POLICIES = "kms:ListKeyPolicies";
	/** [List] kms:ListKeyRotations */
	static readonly LIST_KEY_ROTATIONS = "kms:ListKeyRotations";
	/** [List] kms:ListKeys */
	static readonly LIST_KEYS = "kms:ListKeys";
	/** [List] kms:ListResourceTags */
	static readonly LIST_RESOURCE_TAGS = "kms:ListResourceTags";
	/** [List] kms:ListRetirableGrants */
	static readonly LIST_RETIRABLE_GRANTS = "kms:ListRetirableGrants";
	/** [PermissionManagement] kms:PutKeyPolicy */
	static readonly PUT_KEY_POLICY = "kms:PutKeyPolicy";
	/** [Write] kms:ReEncryptFrom */
	static readonly RE_ENCRYPT_FROM = "kms:ReEncryptFrom";
	/** [Write] kms:ReEncryptTo */
	static readonly RE_ENCRYPT_TO = "kms:ReEncryptTo";
	/** [Write] kms:ReplicateKey */
	static readonly REPLICATE_KEY = "kms:ReplicateKey";
	/** [PermissionManagement] kms:RetireGrant */
	static readonly RETIRE_GRANT = "kms:RetireGrant";
	/** [PermissionManagement] kms:RevokeGrant */
	static readonly REVOKE_GRANT = "kms:RevokeGrant";
	/** [Write] kms:RotateKeyOnDemand */
	static readonly ROTATE_KEY_ON_DEMAND = "kms:RotateKeyOnDemand";
	/** [Write] kms:ScheduleKeyDeletion */
	static readonly SCHEDULE_KEY_DELETION = "kms:ScheduleKeyDeletion";
	/** [Write] kms:Sign */
	static readonly SIGN = "kms:Sign";
	/** [Write] kms:SynchronizeMultiRegionKey */
	static readonly SYNCHRONIZE_MULTI_REGION_KEY =
		"kms:SynchronizeMultiRegionKey";
	/** [Tagging] kms:TagResource */
	static readonly TAG_RESOURCE = "kms:TagResource";
	/** [Tagging] kms:UntagResource */
	static readonly UNTAG_RESOURCE = "kms:UntagResource";
	/** [Write] kms:UpdateAlias */
	static readonly UPDATE_ALIAS = "kms:UpdateAlias";
	/** [Write] kms:UpdateCustomKeyStore */
	static readonly UPDATE_CUSTOM_KEY_STORE = "kms:UpdateCustomKeyStore";
	/** [Write] kms:UpdateKeyDescription */
	static readonly UPDATE_KEY_DESCRIPTION = "kms:UpdateKeyDescription";
	/** [Write] kms:UpdatePrimaryRegion */
	static readonly UPDATE_PRIMARY_REGION = "kms:UpdatePrimaryRegion";
	/** [Write] kms:Verify */
	static readonly VERIFY = "kms:Verify";
	/** [Write] kms:VerifyMac */
	static readonly VERIFY_MAC = "kms:VerifyMac";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KMSActions.DESCRIBE_CUSTOM_KEY_STORES,
		KMSActions.DESCRIBE_KEY,
		KMSActions.GET_KEY_LAST_USAGE,
		KMSActions.GET_KEY_POLICY,
		KMSActions.GET_KEY_ROTATION_STATUS,
		KMSActions.GET_PARAMETERS_FOR_IMPORT,
		KMSActions.GET_PUBLIC_KEY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KMSActions.CANCEL_KEY_DELETION,
		KMSActions.CONNECT_CUSTOM_KEY_STORE,
		KMSActions.CREATE_ALIAS,
		KMSActions.CREATE_CUSTOM_KEY_STORE,
		KMSActions.CREATE_KEY,
		KMSActions.DECRYPT,
		KMSActions.DELETE_ALIAS,
		KMSActions.DELETE_CUSTOM_KEY_STORE,
		KMSActions.DELETE_IMPORTED_KEY_MATERIAL,
		KMSActions.DERIVE_SHARED_SECRET,
		KMSActions.DISABLE_KEY,
		KMSActions.DISABLE_KEY_ROTATION,
		KMSActions.DISCONNECT_CUSTOM_KEY_STORE,
		KMSActions.ENABLE_KEY,
		KMSActions.ENABLE_KEY_ROTATION,
		KMSActions.ENCRYPT,
		KMSActions.GENERATE_DATA_KEY,
		KMSActions.GENERATE_DATA_KEY_PAIR,
		KMSActions.GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT,
		KMSActions.GENERATE_DATA_KEY_WITHOUT_PLAINTEXT,
		KMSActions.GENERATE_MAC,
		KMSActions.GENERATE_RANDOM,
		KMSActions.IMPORT_KEY_MATERIAL,
		KMSActions.RE_ENCRYPT_FROM,
		KMSActions.RE_ENCRYPT_TO,
		KMSActions.REPLICATE_KEY,
		KMSActions.ROTATE_KEY_ON_DEMAND,
		KMSActions.SCHEDULE_KEY_DELETION,
		KMSActions.SIGN,
		KMSActions.SYNCHRONIZE_MULTI_REGION_KEY,
		KMSActions.UPDATE_ALIAS,
		KMSActions.UPDATE_CUSTOM_KEY_STORE,
		KMSActions.UPDATE_KEY_DESCRIPTION,
		KMSActions.UPDATE_PRIMARY_REGION,
		KMSActions.VERIFY,
		KMSActions.VERIFY_MAC,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KMSActions.LIST_ALIASES,
		KMSActions.LIST_GRANTS,
		KMSActions.LIST_KEY_POLICIES,
		KMSActions.LIST_KEY_ROTATIONS,
		KMSActions.LIST_KEYS,
		KMSActions.LIST_RESOURCE_TAGS,
		KMSActions.LIST_RETIRABLE_GRANTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		KMSActions.CREATE_GRANT,
		KMSActions.PUT_KEY_POLICY,
		KMSActions.RETIRE_GRANT,
		KMSActions.REVOKE_GRANT,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KMSActions.TAG_RESOURCE,
		KMSActions.UNTAG_RESOURCE,
	];
}

const AliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):alias/(?<alias>[^:/?]+)$",
);
const KeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):key/(?<keyId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kms resources.
 */
export class KMSResources {
	/**
	 * Builds an ARN for the alias resource.
	 */
	static alias(props: {
		/** The Alias component of the ARN. */
		readonly alias: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kms:${props.region ?? "*"}:${props.account ?? "*"}:alias/${props.alias}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alias resource.
	 */
	static isValidAliasArn(arn: string): boolean {
		return AliasArnRegex.test(arn);
	}

	/**
	 * Parses a alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		alias: string;
	} {
		const match = AliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alias: match.groups!.alias,
		};
	}

	/**
	 * Builds an ARN for the key resource.
	 */
	static key(props: {
		/** The KeyId component of the ARN. */
		readonly keyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kms:${props.region ?? "*"}:${props.account ?? "*"}:key/${props.keyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the key resource.
	 */
	static isValidKeyArn(arn: string): boolean {
		return KeyArnRegex.test(arn);
	}

	/**
	 * Parses a key ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		keyId: string;
	} {
		const match = KeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid key ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			keyId: match.groups!.keyId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kms.
 */
export class KMSOperations {
	/** IAM actions required for the CancelKeyDeletion API call. */
	static readonly CANCEL_KEY_DELETION: string[] = ["kms:CancelKeyDeletion"];
	/** IAM actions required for the ConnectCustomKeyStore API call. */
	static readonly CONNECT_CUSTOM_KEY_STORE: string[] = [
		"kms:ConnectCustomKeyStore",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CREATE_ALIAS: string[] = ["kms:CreateAlias"];
	/** IAM actions required for the CreateCustomKeyStore API call. */
	static readonly CREATE_CUSTOM_KEY_STORE: string[] = [
		"kms:CreateCustomKeyStore",
	];
	/** IAM actions required for the CreateGrant API call. */
	static readonly CREATE_GRANT: string[] = ["kms:CreateGrant"];
	/** IAM actions required for the CreateKey API call. */
	static readonly CREATE_KEY: string[] = [
		"kms:CreateKey",
		"kms:PutKeyPolicy",
		"kms:TagResource",
	];
	/** IAM actions required for the Decrypt API call. */
	static readonly DECRYPT: string[] = ["kms:Decrypt"];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DELETE_ALIAS: string[] = ["kms:DeleteAlias"];
	/** IAM actions required for the DeleteCustomKeyStore API call. */
	static readonly DELETE_CUSTOM_KEY_STORE: string[] = [
		"kms:DeleteCustomKeyStore",
	];
	/** IAM actions required for the DeleteImportedKeyMaterial API call. */
	static readonly DELETE_IMPORTED_KEY_MATERIAL: string[] = [
		"kms:DeleteImportedKeyMaterial",
	];
	/** IAM actions required for the DeriveSharedSecret API call. */
	static readonly DERIVE_SHARED_SECRET: string[] = ["kms:DeriveSharedSecret"];
	/** IAM actions required for the DescribeCustomKeyStores API call. */
	static readonly DESCRIBE_CUSTOM_KEY_STORES: string[] = [
		"kms:DescribeCustomKeyStores",
	];
	/** IAM actions required for the DescribeKey API call. */
	static readonly DESCRIBE_KEY: string[] = ["kms:DescribeKey"];
	/** IAM actions required for the DisableKey API call. */
	static readonly DISABLE_KEY: string[] = ["kms:DisableKey"];
	/** IAM actions required for the DisableKeyRotation API call. */
	static readonly DISABLE_KEY_ROTATION: string[] = ["kms:DisableKeyRotation"];
	/** IAM actions required for the DisconnectCustomKeyStore API call. */
	static readonly DISCONNECT_CUSTOM_KEY_STORE: string[] = [
		"kms:DisconnectCustomKeyStore",
	];
	/** IAM actions required for the EnableKey API call. */
	static readonly ENABLE_KEY: string[] = ["kms:EnableKey"];
	/** IAM actions required for the EnableKeyRotation API call. */
	static readonly ENABLE_KEY_ROTATION: string[] = ["kms:EnableKeyRotation"];
	/** IAM actions required for the Encrypt API call. */
	static readonly ENCRYPT: string[] = ["kms:Encrypt"];
	/** IAM actions required for the GenerateDataKey API call. */
	static readonly GENERATE_DATA_KEY: string[] = ["kms:GenerateDataKey"];
	/** IAM actions required for the GenerateDataKeyPair API call. */
	static readonly GENERATE_DATA_KEY_PAIR: string[] = [
		"kms:GenerateDataKeyPair",
	];
	/** IAM actions required for the GenerateDataKeyPairWithoutPlaintext API call. */
	static readonly GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT: string[] = [
		"kms:GenerateDataKeyPairWithoutPlaintext",
	];
	/** IAM actions required for the GenerateDataKeyWithoutPlaintext API call. */
	static readonly GENERATE_DATA_KEY_WITHOUT_PLAINTEXT: string[] = [
		"kms:GenerateDataKeyWithoutPlaintext",
	];
	/** IAM actions required for the GenerateMac API call. */
	static readonly GENERATE_MAC: string[] = ["kms:GenerateMac"];
	/** IAM actions required for the GenerateRandom API call. */
	static readonly GENERATE_RANDOM: string[] = ["kms:GenerateRandom"];
	/** IAM actions required for the GetKeyLastUsage API call. */
	static readonly GET_KEY_LAST_USAGE: string[] = ["kms:GetKeyLastUsage"];
	/** IAM actions required for the GetKeyPolicy API call. */
	static readonly GET_KEY_POLICY: string[] = ["kms:GetKeyPolicy"];
	/** IAM actions required for the GetKeyRotationStatus API call. */
	static readonly GET_KEY_ROTATION_STATUS: string[] = [
		"kms:GetKeyRotationStatus",
	];
	/** IAM actions required for the GetParametersForImport API call. */
	static readonly GET_PARAMETERS_FOR_IMPORT: string[] = [
		"kms:GetParametersForImport",
	];
	/** IAM actions required for the GetPublicKey API call. */
	static readonly GET_PUBLIC_KEY: string[] = ["kms:GetPublicKey"];
	/** IAM actions required for the ImportKeyMaterial API call. */
	static readonly IMPORT_KEY_MATERIAL: string[] = ["kms:ImportKeyMaterial"];
	/** IAM actions required for the ListAliases API call. */
	static readonly LIST_ALIASES: string[] = ["kms:ListAliases"];
	/** IAM actions required for the ListGrants API call. */
	static readonly LIST_GRANTS: string[] = ["kms:ListGrants"];
	/** IAM actions required for the ListKeyPolicies API call. */
	static readonly LIST_KEY_POLICIES: string[] = ["kms:ListKeyPolicies"];
	/** IAM actions required for the ListKeyRotations API call. */
	static readonly LIST_KEY_ROTATIONS: string[] = ["kms:ListKeyRotations"];
	/** IAM actions required for the ListKeys API call. */
	static readonly LIST_KEYS: string[] = ["kms:ListKeys"];
	/** IAM actions required for the ListResourceTags API call. */
	static readonly LIST_RESOURCE_TAGS: string[] = ["kms:ListResourceTags"];
	/** IAM actions required for the ListRetirableGrants API call. */
	static readonly LIST_RETIRABLE_GRANTS: string[] = ["kms:ListRetirableGrants"];
	/** IAM actions required for the PutKeyPolicy API call. */
	static readonly PUT_KEY_POLICY: string[] = ["kms:PutKeyPolicy"];
	/** IAM actions required for the ReEncrypt API call. */
	static readonly RE_ENCRYPT: string[] = [
		"kms:ReEncryptFrom",
		"kms:ReEncryptTo",
	];
	/** IAM actions required for the ReplicateKey API call. */
	static readonly REPLICATE_KEY: string[] = ["kms:ReplicateKey"];
	/** IAM actions required for the RetireGrant API call. */
	static readonly RETIRE_GRANT: string[] = ["kms:RetireGrant"];
	/** IAM actions required for the RevokeGrant API call. */
	static readonly REVOKE_GRANT: string[] = ["kms:RevokeGrant"];
	/** IAM actions required for the RotateKeyOnDemand API call. */
	static readonly ROTATE_KEY_ON_DEMAND: string[] = ["kms:RotateKeyOnDemand"];
	/** IAM actions required for the ScheduleKeyDeletion API call. */
	static readonly SCHEDULE_KEY_DELETION: string[] = ["kms:ScheduleKeyDeletion"];
	/** IAM actions required for the Sign API call. */
	static readonly SIGN: string[] = ["kms:Sign"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kms:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kms:UntagResource"];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UPDATE_ALIAS: string[] = ["kms:UpdateAlias"];
	/** IAM actions required for the UpdateCustomKeyStore API call. */
	static readonly UPDATE_CUSTOM_KEY_STORE: string[] = [
		"kms:UpdateCustomKeyStore",
	];
	/** IAM actions required for the UpdateKeyDescription API call. */
	static readonly UPDATE_KEY_DESCRIPTION: string[] = [
		"kms:UpdateKeyDescription",
	];
	/** IAM actions required for the UpdatePrimaryRegion API call. */
	static readonly UPDATE_PRIMARY_REGION: string[] = ["kms:UpdatePrimaryRegion"];
	/** IAM actions required for the Verify API call. */
	static readonly VERIFY: string[] = ["kms:Verify"];
	/** IAM actions required for the VerifyMac API call. */
	static readonly VERIFY_MAC: string[] = ["kms:VerifyMac"];
}

/**
 * Condition key constants and builders for kms.
 */
export class KMSConditions {
	/** Condition keys applicable to the CancelKeyDeletion action. */
	static readonly CANCEL_KEY_DELETION_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ConnectCustomKeyStore action. */
	static readonly CONNECT_CUSTOM_KEY_STORE_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the CreateAlias action. */
	static readonly CREATE_ALIAS_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the CreateCustomKeyStore action. */
	static readonly CREATE_CUSTOM_KEY_STORE_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the CreateGrant action. */
	static readonly CREATE_GRANT_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:GrantConstraintSourceArn",
		"kms:GrantConstraintType",
		"kms:GrantIsForAWSResource",
		"kms:GrantOperations",
		"kms:GranteePrincipal",
		"kms:GranteeServicePrincipal",
		"kms:RetiringPrincipal",
		"kms:RetiringServicePrincipal",
		"kms:ViaService",
	];
	/** Condition keys applicable to the CreateKey action. */
	static readonly CREATE_KEY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"kms:BypassPolicyLockoutSafetyCheck",
		"kms:CallerAccount",
		"kms:KeyOrigin",
		"kms:KeySpec",
		"kms:KeyUsage",
		"kms:MultiRegion",
		"kms:MultiRegionKeyType",
		"kms:ViaService",
	];
	/** Condition keys applicable to the Decrypt action. */
	static readonly DECRYPT_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:RecipientAttestation:ImageSha384",
		"kms:RecipientAttestation:NitroTPMPCR0",
		"kms:RecipientAttestation:NitroTPMPCR1",
		"kms:RecipientAttestation:NitroTPMPCR10",
		"kms:RecipientAttestation:NitroTPMPCR11",
		"kms:RecipientAttestation:NitroTPMPCR12",
		"kms:RecipientAttestation:NitroTPMPCR13",
		"kms:RecipientAttestation:NitroTPMPCR14",
		"kms:RecipientAttestation:NitroTPMPCR15",
		"kms:RecipientAttestation:NitroTPMPCR16",
		"kms:RecipientAttestation:NitroTPMPCR17",
		"kms:RecipientAttestation:NitroTPMPCR18",
		"kms:RecipientAttestation:NitroTPMPCR19",
		"kms:RecipientAttestation:NitroTPMPCR2",
		"kms:RecipientAttestation:NitroTPMPCR20",
		"kms:RecipientAttestation:NitroTPMPCR21",
		"kms:RecipientAttestation:NitroTPMPCR22",
		"kms:RecipientAttestation:NitroTPMPCR23",
		"kms:RecipientAttestation:NitroTPMPCR3",
		"kms:RecipientAttestation:NitroTPMPCR4",
		"kms:RecipientAttestation:NitroTPMPCR5",
		"kms:RecipientAttestation:NitroTPMPCR6",
		"kms:RecipientAttestation:NitroTPMPCR7",
		"kms:RecipientAttestation:NitroTPMPCR8",
		"kms:RecipientAttestation:NitroTPMPCR9",
		"kms:RecipientAttestation:PCR0",
		"kms:RecipientAttestation:PCR1",
		"kms:RecipientAttestation:PCR10",
		"kms:RecipientAttestation:PCR11",
		"kms:RecipientAttestation:PCR12",
		"kms:RecipientAttestation:PCR13",
		"kms:RecipientAttestation:PCR14",
		"kms:RecipientAttestation:PCR15",
		"kms:RecipientAttestation:PCR16",
		"kms:RecipientAttestation:PCR17",
		"kms:RecipientAttestation:PCR18",
		"kms:RecipientAttestation:PCR19",
		"kms:RecipientAttestation:PCR2",
		"kms:RecipientAttestation:PCR20",
		"kms:RecipientAttestation:PCR21",
		"kms:RecipientAttestation:PCR22",
		"kms:RecipientAttestation:PCR23",
		"kms:RecipientAttestation:PCR24",
		"kms:RecipientAttestation:PCR25",
		"kms:RecipientAttestation:PCR26",
		"kms:RecipientAttestation:PCR27",
		"kms:RecipientAttestation:PCR28",
		"kms:RecipientAttestation:PCR29",
		"kms:RecipientAttestation:PCR3",
		"kms:RecipientAttestation:PCR30",
		"kms:RecipientAttestation:PCR31",
		"kms:RecipientAttestation:PCR4",
		"kms:RecipientAttestation:PCR5",
		"kms:RecipientAttestation:PCR6",
		"kms:RecipientAttestation:PCR7",
		"kms:RecipientAttestation:PCR8",
		"kms:RecipientAttestation:PCR9",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DeleteAlias action. */
	static readonly DELETE_ALIAS_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DeleteCustomKeyStore action. */
	static readonly DELETE_CUSTOM_KEY_STORE_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the DeleteImportedKeyMaterial action. */
	static readonly DELETE_IMPORTED_KEY_MATERIAL_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DeriveSharedSecret action. */
	static readonly DERIVE_SHARED_SECRET_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:KeyAgreementAlgorithm",
		"kms:RecipientAttestation:ImageSha384",
		"kms:RecipientAttestation:NitroTPMPCR0",
		"kms:RecipientAttestation:NitroTPMPCR1",
		"kms:RecipientAttestation:NitroTPMPCR10",
		"kms:RecipientAttestation:NitroTPMPCR11",
		"kms:RecipientAttestation:NitroTPMPCR12",
		"kms:RecipientAttestation:NitroTPMPCR13",
		"kms:RecipientAttestation:NitroTPMPCR14",
		"kms:RecipientAttestation:NitroTPMPCR15",
		"kms:RecipientAttestation:NitroTPMPCR16",
		"kms:RecipientAttestation:NitroTPMPCR17",
		"kms:RecipientAttestation:NitroTPMPCR18",
		"kms:RecipientAttestation:NitroTPMPCR19",
		"kms:RecipientAttestation:NitroTPMPCR2",
		"kms:RecipientAttestation:NitroTPMPCR20",
		"kms:RecipientAttestation:NitroTPMPCR21",
		"kms:RecipientAttestation:NitroTPMPCR22",
		"kms:RecipientAttestation:NitroTPMPCR23",
		"kms:RecipientAttestation:NitroTPMPCR3",
		"kms:RecipientAttestation:NitroTPMPCR4",
		"kms:RecipientAttestation:NitroTPMPCR5",
		"kms:RecipientAttestation:NitroTPMPCR6",
		"kms:RecipientAttestation:NitroTPMPCR7",
		"kms:RecipientAttestation:NitroTPMPCR8",
		"kms:RecipientAttestation:NitroTPMPCR9",
		"kms:RecipientAttestation:PCR0",
		"kms:RecipientAttestation:PCR1",
		"kms:RecipientAttestation:PCR10",
		"kms:RecipientAttestation:PCR11",
		"kms:RecipientAttestation:PCR12",
		"kms:RecipientAttestation:PCR13",
		"kms:RecipientAttestation:PCR14",
		"kms:RecipientAttestation:PCR15",
		"kms:RecipientAttestation:PCR16",
		"kms:RecipientAttestation:PCR17",
		"kms:RecipientAttestation:PCR18",
		"kms:RecipientAttestation:PCR19",
		"kms:RecipientAttestation:PCR2",
		"kms:RecipientAttestation:PCR20",
		"kms:RecipientAttestation:PCR21",
		"kms:RecipientAttestation:PCR22",
		"kms:RecipientAttestation:PCR23",
		"kms:RecipientAttestation:PCR24",
		"kms:RecipientAttestation:PCR25",
		"kms:RecipientAttestation:PCR26",
		"kms:RecipientAttestation:PCR27",
		"kms:RecipientAttestation:PCR28",
		"kms:RecipientAttestation:PCR29",
		"kms:RecipientAttestation:PCR3",
		"kms:RecipientAttestation:PCR30",
		"kms:RecipientAttestation:PCR31",
		"kms:RecipientAttestation:PCR4",
		"kms:RecipientAttestation:PCR5",
		"kms:RecipientAttestation:PCR6",
		"kms:RecipientAttestation:PCR7",
		"kms:RecipientAttestation:PCR8",
		"kms:RecipientAttestation:PCR9",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DescribeCustomKeyStores action. */
	static readonly DESCRIBE_CUSTOM_KEY_STORES_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the DescribeKey action. */
	static readonly DESCRIBE_KEY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DisableKey action. */
	static readonly DISABLE_KEY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:TrailingDaysWithoutKeyUsage",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DisableKeyRotation action. */
	static readonly DISABLE_KEY_ROTATION_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DisconnectCustomKeyStore action. */
	static readonly DISCONNECT_CUSTOM_KEY_STORE_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the EnableKey action. */
	static readonly ENABLE_KEY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the EnableKeyRotation action. */
	static readonly ENABLE_KEY_ROTATION_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:RotationPeriodInDays",
		"kms:ViaService",
	];
	/** Condition keys applicable to the Encrypt action. */
	static readonly ENCRYPT_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateDataKey action. */
	static readonly GENERATE_DATA_KEY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:RecipientAttestation:ImageSha384",
		"kms:RecipientAttestation:NitroTPMPCR0",
		"kms:RecipientAttestation:NitroTPMPCR1",
		"kms:RecipientAttestation:NitroTPMPCR10",
		"kms:RecipientAttestation:NitroTPMPCR11",
		"kms:RecipientAttestation:NitroTPMPCR12",
		"kms:RecipientAttestation:NitroTPMPCR13",
		"kms:RecipientAttestation:NitroTPMPCR14",
		"kms:RecipientAttestation:NitroTPMPCR15",
		"kms:RecipientAttestation:NitroTPMPCR16",
		"kms:RecipientAttestation:NitroTPMPCR17",
		"kms:RecipientAttestation:NitroTPMPCR18",
		"kms:RecipientAttestation:NitroTPMPCR19",
		"kms:RecipientAttestation:NitroTPMPCR2",
		"kms:RecipientAttestation:NitroTPMPCR20",
		"kms:RecipientAttestation:NitroTPMPCR21",
		"kms:RecipientAttestation:NitroTPMPCR22",
		"kms:RecipientAttestation:NitroTPMPCR23",
		"kms:RecipientAttestation:NitroTPMPCR3",
		"kms:RecipientAttestation:NitroTPMPCR4",
		"kms:RecipientAttestation:NitroTPMPCR5",
		"kms:RecipientAttestation:NitroTPMPCR6",
		"kms:RecipientAttestation:NitroTPMPCR7",
		"kms:RecipientAttestation:NitroTPMPCR8",
		"kms:RecipientAttestation:NitroTPMPCR9",
		"kms:RecipientAttestation:PCR0",
		"kms:RecipientAttestation:PCR1",
		"kms:RecipientAttestation:PCR10",
		"kms:RecipientAttestation:PCR11",
		"kms:RecipientAttestation:PCR12",
		"kms:RecipientAttestation:PCR13",
		"kms:RecipientAttestation:PCR14",
		"kms:RecipientAttestation:PCR15",
		"kms:RecipientAttestation:PCR16",
		"kms:RecipientAttestation:PCR17",
		"kms:RecipientAttestation:PCR18",
		"kms:RecipientAttestation:PCR19",
		"kms:RecipientAttestation:PCR2",
		"kms:RecipientAttestation:PCR20",
		"kms:RecipientAttestation:PCR21",
		"kms:RecipientAttestation:PCR22",
		"kms:RecipientAttestation:PCR23",
		"kms:RecipientAttestation:PCR24",
		"kms:RecipientAttestation:PCR25",
		"kms:RecipientAttestation:PCR26",
		"kms:RecipientAttestation:PCR27",
		"kms:RecipientAttestation:PCR28",
		"kms:RecipientAttestation:PCR29",
		"kms:RecipientAttestation:PCR3",
		"kms:RecipientAttestation:PCR30",
		"kms:RecipientAttestation:PCR31",
		"kms:RecipientAttestation:PCR4",
		"kms:RecipientAttestation:PCR5",
		"kms:RecipientAttestation:PCR6",
		"kms:RecipientAttestation:PCR7",
		"kms:RecipientAttestation:PCR8",
		"kms:RecipientAttestation:PCR9",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateDataKeyPair action. */
	static readonly GENERATE_DATA_KEY_PAIR_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:DataKeyPairSpec",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:RecipientAttestation:ImageSha384",
		"kms:RecipientAttestation:NitroTPMPCR0",
		"kms:RecipientAttestation:NitroTPMPCR1",
		"kms:RecipientAttestation:NitroTPMPCR10",
		"kms:RecipientAttestation:NitroTPMPCR11",
		"kms:RecipientAttestation:NitroTPMPCR12",
		"kms:RecipientAttestation:NitroTPMPCR13",
		"kms:RecipientAttestation:NitroTPMPCR14",
		"kms:RecipientAttestation:NitroTPMPCR15",
		"kms:RecipientAttestation:NitroTPMPCR16",
		"kms:RecipientAttestation:NitroTPMPCR17",
		"kms:RecipientAttestation:NitroTPMPCR18",
		"kms:RecipientAttestation:NitroTPMPCR19",
		"kms:RecipientAttestation:NitroTPMPCR2",
		"kms:RecipientAttestation:NitroTPMPCR20",
		"kms:RecipientAttestation:NitroTPMPCR21",
		"kms:RecipientAttestation:NitroTPMPCR22",
		"kms:RecipientAttestation:NitroTPMPCR23",
		"kms:RecipientAttestation:NitroTPMPCR3",
		"kms:RecipientAttestation:NitroTPMPCR4",
		"kms:RecipientAttestation:NitroTPMPCR5",
		"kms:RecipientAttestation:NitroTPMPCR6",
		"kms:RecipientAttestation:NitroTPMPCR7",
		"kms:RecipientAttestation:NitroTPMPCR8",
		"kms:RecipientAttestation:NitroTPMPCR9",
		"kms:RecipientAttestation:PCR0",
		"kms:RecipientAttestation:PCR1",
		"kms:RecipientAttestation:PCR10",
		"kms:RecipientAttestation:PCR11",
		"kms:RecipientAttestation:PCR12",
		"kms:RecipientAttestation:PCR13",
		"kms:RecipientAttestation:PCR14",
		"kms:RecipientAttestation:PCR15",
		"kms:RecipientAttestation:PCR16",
		"kms:RecipientAttestation:PCR17",
		"kms:RecipientAttestation:PCR18",
		"kms:RecipientAttestation:PCR19",
		"kms:RecipientAttestation:PCR2",
		"kms:RecipientAttestation:PCR20",
		"kms:RecipientAttestation:PCR21",
		"kms:RecipientAttestation:PCR22",
		"kms:RecipientAttestation:PCR23",
		"kms:RecipientAttestation:PCR24",
		"kms:RecipientAttestation:PCR25",
		"kms:RecipientAttestation:PCR26",
		"kms:RecipientAttestation:PCR27",
		"kms:RecipientAttestation:PCR28",
		"kms:RecipientAttestation:PCR29",
		"kms:RecipientAttestation:PCR3",
		"kms:RecipientAttestation:PCR30",
		"kms:RecipientAttestation:PCR31",
		"kms:RecipientAttestation:PCR4",
		"kms:RecipientAttestation:PCR5",
		"kms:RecipientAttestation:PCR6",
		"kms:RecipientAttestation:PCR7",
		"kms:RecipientAttestation:PCR8",
		"kms:RecipientAttestation:PCR9",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateDataKeyPairWithoutPlaintext action. */
	static readonly GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT_CONDITION_KEYS: string[] =
		[
			"kms:CallerAccount",
			"kms:DataKeyPairSpec",
			"kms:EncryptionAlgorithm",
			"kms:EncryptionContext:${EncryptionContextKey}",
			"kms:EncryptionContextKeys",
			"kms:RequestAlias",
			"kms:ViaService",
		];
	/** Condition keys applicable to the GenerateDataKeyWithoutPlaintext action. */
	static readonly GENERATE_DATA_KEY_WITHOUT_PLAINTEXT_CONDITION_KEYS: string[] =
		[
			"kms:CallerAccount",
			"kms:EncryptionAlgorithm",
			"kms:EncryptionContext:${EncryptionContextKey}",
			"kms:EncryptionContextKeys",
			"kms:RequestAlias",
			"kms:ViaService",
		];
	/** Condition keys applicable to the GenerateMac action. */
	static readonly GENERATE_MAC_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:MacAlgorithm",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateRandom action. */
	static readonly GENERATE_RANDOM_CONDITION_KEYS: string[] = [
		"kms:RecipientAttestation:ImageSha384",
		"kms:RecipientAttestation:NitroTPMPCR0",
		"kms:RecipientAttestation:NitroTPMPCR1",
		"kms:RecipientAttestation:NitroTPMPCR10",
		"kms:RecipientAttestation:NitroTPMPCR11",
		"kms:RecipientAttestation:NitroTPMPCR12",
		"kms:RecipientAttestation:NitroTPMPCR13",
		"kms:RecipientAttestation:NitroTPMPCR14",
		"kms:RecipientAttestation:NitroTPMPCR15",
		"kms:RecipientAttestation:NitroTPMPCR16",
		"kms:RecipientAttestation:NitroTPMPCR17",
		"kms:RecipientAttestation:NitroTPMPCR18",
		"kms:RecipientAttestation:NitroTPMPCR19",
		"kms:RecipientAttestation:NitroTPMPCR2",
		"kms:RecipientAttestation:NitroTPMPCR20",
		"kms:RecipientAttestation:NitroTPMPCR21",
		"kms:RecipientAttestation:NitroTPMPCR22",
		"kms:RecipientAttestation:NitroTPMPCR23",
		"kms:RecipientAttestation:NitroTPMPCR3",
		"kms:RecipientAttestation:NitroTPMPCR4",
		"kms:RecipientAttestation:NitroTPMPCR5",
		"kms:RecipientAttestation:NitroTPMPCR6",
		"kms:RecipientAttestation:NitroTPMPCR7",
		"kms:RecipientAttestation:NitroTPMPCR8",
		"kms:RecipientAttestation:NitroTPMPCR9",
		"kms:RecipientAttestation:PCR0",
		"kms:RecipientAttestation:PCR1",
		"kms:RecipientAttestation:PCR10",
		"kms:RecipientAttestation:PCR11",
		"kms:RecipientAttestation:PCR12",
		"kms:RecipientAttestation:PCR13",
		"kms:RecipientAttestation:PCR14",
		"kms:RecipientAttestation:PCR15",
		"kms:RecipientAttestation:PCR16",
		"kms:RecipientAttestation:PCR17",
		"kms:RecipientAttestation:PCR18",
		"kms:RecipientAttestation:PCR19",
		"kms:RecipientAttestation:PCR2",
		"kms:RecipientAttestation:PCR20",
		"kms:RecipientAttestation:PCR21",
		"kms:RecipientAttestation:PCR22",
		"kms:RecipientAttestation:PCR23",
		"kms:RecipientAttestation:PCR24",
		"kms:RecipientAttestation:PCR25",
		"kms:RecipientAttestation:PCR26",
		"kms:RecipientAttestation:PCR27",
		"kms:RecipientAttestation:PCR28",
		"kms:RecipientAttestation:PCR29",
		"kms:RecipientAttestation:PCR3",
		"kms:RecipientAttestation:PCR30",
		"kms:RecipientAttestation:PCR31",
		"kms:RecipientAttestation:PCR4",
		"kms:RecipientAttestation:PCR5",
		"kms:RecipientAttestation:PCR6",
		"kms:RecipientAttestation:PCR7",
		"kms:RecipientAttestation:PCR8",
		"kms:RecipientAttestation:PCR9",
	];
	/** Condition keys applicable to the GetKeyLastUsage action. */
	static readonly GET_KEY_LAST_USAGE_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GetKeyPolicy action. */
	static readonly GET_KEY_POLICY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GetKeyRotationStatus action. */
	static readonly GET_KEY_ROTATION_STATUS_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GetParametersForImport action. */
	static readonly GET_PARAMETERS_FOR_IMPORT_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
		"kms:WrappingAlgorithm",
		"kms:WrappingKeySpec",
	];
	/** Condition keys applicable to the GetPublicKey action. */
	static readonly GET_PUBLIC_KEY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ImportKeyMaterial action. */
	static readonly IMPORT_KEY_MATERIAL_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ExpirationModel",
		"kms:ValidTo",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListGrants action. */
	static readonly LIST_GRANTS_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:GrantIsForAWSResource",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListKeyPolicies action. */
	static readonly LIST_KEY_POLICIES_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListKeyRotations action. */
	static readonly LIST_KEY_ROTATIONS_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListResourceTags action. */
	static readonly LIST_RESOURCE_TAGS_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the PutKeyPolicy action. */
	static readonly PUT_KEY_POLICY_CONDITION_KEYS: string[] = [
		"kms:BypassPolicyLockoutSafetyCheck",
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ReEncryptFrom action. */
	static readonly RE_ENCRYPT_FROM_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:ReEncryptOnSameKey",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ReEncryptTo action. */
	static readonly RE_ENCRYPT_TO_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:ReEncryptOnSameKey",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ReplicateKey action. */
	static readonly REPLICATE_KEY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ReplicaRegion",
		"kms:ViaService",
	];
	/** Condition keys applicable to the RetireGrant action. */
	static readonly RETIRE_GRANT_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:GrantConstraintType",
		"kms:ViaService",
	];
	/** Condition keys applicable to the RevokeGrant action. */
	static readonly REVOKE_GRANT_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:GrantIsForAWSResource",
		"kms:ViaService",
	];
	/** Condition keys applicable to the RotateKeyOnDemand action. */
	static readonly ROTATE_KEY_ON_DEMAND_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ScheduleKeyDeletion action. */
	static readonly SCHEDULE_KEY_DELETION_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ScheduleKeyDeletionPendingWindowInDays",
		"kms:TrailingDaysWithoutKeyUsage",
		"kms:ViaService",
	];
	/** Condition keys applicable to the Sign action. */
	static readonly SIGN_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:MessageType",
		"kms:RequestAlias",
		"kms:SigningAlgorithm",
		"kms:ViaService",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UpdateAlias action. */
	static readonly UPDATE_ALIAS_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UpdateCustomKeyStore action. */
	static readonly UPDATE_CUSTOM_KEY_STORE_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the UpdateKeyDescription action. */
	static readonly UPDATE_KEY_DESCRIPTION_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UpdatePrimaryRegion action. */
	static readonly UPDATE_PRIMARY_REGION_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:PrimaryRegion",
		"kms:ViaService",
	];
	/** Condition keys applicable to the Verify action. */
	static readonly VERIFY_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:MessageType",
		"kms:RequestAlias",
		"kms:SigningAlgorithm",
		"kms:ViaService",
	];
	/** Condition keys applicable to the VerifyMac action. */
	static readonly VERIFY_MAC_CONDITION_KEYS: string[] = [
		"kms:CallerAccount",
		"kms:MacAlgorithm",
		"kms:RequestAlias",
		"kms:ViaService",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: kms:BypassPolicyLockoutSafetyCheck (Bool) */
	static readonly BYPASS_POLICY_LOCKOUT_SAFETY_CHECK =
		"kms:BypassPolicyLockoutSafetyCheck";
	/** Condition key: kms:CallerAccount (String) */
	static readonly CALLER_ACCOUNT = "kms:CallerAccount";
	/** Condition key: kms:CustomerMasterKeySpec (String) */
	static readonly CUSTOMER_MASTER_KEY_SPEC = "kms:CustomerMasterKeySpec";
	/** Condition key: kms:CustomerMasterKeyUsage (String) */
	static readonly CUSTOMER_MASTER_KEY_USAGE = "kms:CustomerMasterKeyUsage";
	/** Condition key: kms:DataKeyPairSpec (String) */
	static readonly DATA_KEY_PAIR_SPEC = "kms:DataKeyPairSpec";
	/** Condition key: kms:EncryptionAlgorithm (String) */
	static readonly ENCRYPTION_ALGORITHM = "kms:EncryptionAlgorithm";
	/** Condition key: kms:EncryptionContext:${EncryptionContextKey} (String) */
	static readonly ENCRYPTION_CONTEXT =
		"kms:EncryptionContext:${EncryptionContextKey}";
	/** Condition key: kms:EncryptionContextKeys (ArrayOfString) */
	static readonly ENCRYPTION_CONTEXT_KEYS = "kms:EncryptionContextKeys";
	/** Condition key: kms:ExpirationModel (String) */
	static readonly EXPIRATION_MODEL = "kms:ExpirationModel";
	/** Condition key: kms:GrantConstraintSourceArn (ARN) */
	static readonly GRANT_CONSTRAINT_SOURCE_ARN = "kms:GrantConstraintSourceArn";
	/** Condition key: kms:GrantConstraintType (String) */
	static readonly GRANT_CONSTRAINT_TYPE = "kms:GrantConstraintType";
	/** Condition key: kms:GrantIsForAWSResource (Bool) */
	static readonly GRANT_IS_FOR_AWS_RESOURCE = "kms:GrantIsForAWSResource";
	/** Condition key: kms:GrantOperations (ArrayOfString) */
	static readonly GRANT_OPERATIONS = "kms:GrantOperations";
	/** Condition key: kms:GranteePrincipal (String) */
	static readonly GRANTEE_PRINCIPAL = "kms:GranteePrincipal";
	/** Condition key: kms:GranteeServicePrincipal (String) */
	static readonly GRANTEE_SERVICE_PRINCIPAL = "kms:GranteeServicePrincipal";
	/** Condition key: kms:KeyAgreementAlgorithm (String) */
	static readonly KEY_AGREEMENT_ALGORITHM = "kms:KeyAgreementAlgorithm";
	/** Condition key: kms:KeyOrigin (String) */
	static readonly KEY_ORIGIN = "kms:KeyOrigin";
	/** Condition key: kms:KeySpec (String) */
	static readonly KEY_SPEC = "kms:KeySpec";
	/** Condition key: kms:KeyUsage (String) */
	static readonly KEY_USAGE = "kms:KeyUsage";
	/** Condition key: kms:MacAlgorithm (String) */
	static readonly MAC_ALGORITHM = "kms:MacAlgorithm";
	/** Condition key: kms:MessageType (String) */
	static readonly MESSAGE_TYPE = "kms:MessageType";
	/** Condition key: kms:MultiRegion (Bool) */
	static readonly MULTI_REGION = "kms:MultiRegion";
	/** Condition key: kms:MultiRegionKeyType (String) */
	static readonly MULTI_REGION_KEY_TYPE = "kms:MultiRegionKeyType";
	/** Condition key: kms:PrimaryRegion (String) */
	static readonly PRIMARY_REGION = "kms:PrimaryRegion";
	/** Condition key: kms:ReEncryptOnSameKey (Bool) */
	static readonly RE_ENCRYPT_ON_SAME_KEY = "kms:ReEncryptOnSameKey";
	/** Condition key: kms:RecipientAttestation:ImageSha384 (String) */
	static readonly RECIPIENT_ATTESTATION_IMAGE_SHA384 =
		"kms:RecipientAttestation:ImageSha384";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR0 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR0 =
		"kms:RecipientAttestation:NitroTPMPCR0";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR1 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR1 =
		"kms:RecipientAttestation:NitroTPMPCR1";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR10 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR10 =
		"kms:RecipientAttestation:NitroTPMPCR10";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR11 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR11 =
		"kms:RecipientAttestation:NitroTPMPCR11";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR12 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR12 =
		"kms:RecipientAttestation:NitroTPMPCR12";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR13 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR13 =
		"kms:RecipientAttestation:NitroTPMPCR13";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR14 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR14 =
		"kms:RecipientAttestation:NitroTPMPCR14";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR15 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR15 =
		"kms:RecipientAttestation:NitroTPMPCR15";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR16 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR16 =
		"kms:RecipientAttestation:NitroTPMPCR16";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR17 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR17 =
		"kms:RecipientAttestation:NitroTPMPCR17";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR18 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR18 =
		"kms:RecipientAttestation:NitroTPMPCR18";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR19 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR19 =
		"kms:RecipientAttestation:NitroTPMPCR19";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR2 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR2 =
		"kms:RecipientAttestation:NitroTPMPCR2";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR20 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR20 =
		"kms:RecipientAttestation:NitroTPMPCR20";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR21 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR21 =
		"kms:RecipientAttestation:NitroTPMPCR21";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR22 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR22 =
		"kms:RecipientAttestation:NitroTPMPCR22";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR23 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR23 =
		"kms:RecipientAttestation:NitroTPMPCR23";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR3 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR3 =
		"kms:RecipientAttestation:NitroTPMPCR3";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR4 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR4 =
		"kms:RecipientAttestation:NitroTPMPCR4";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR5 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR5 =
		"kms:RecipientAttestation:NitroTPMPCR5";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR6 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR6 =
		"kms:RecipientAttestation:NitroTPMPCR6";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR7 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR7 =
		"kms:RecipientAttestation:NitroTPMPCR7";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR8 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR8 =
		"kms:RecipientAttestation:NitroTPMPCR8";
	/** Condition key: kms:RecipientAttestation:NitroTPMPCR9 (String) */
	static readonly RECIPIENT_ATTESTATION_NITRO_TPMPCR9 =
		"kms:RecipientAttestation:NitroTPMPCR9";
	/** Condition key: kms:RecipientAttestation:PCR0 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR0 = "kms:RecipientAttestation:PCR0";
	/** Condition key: kms:RecipientAttestation:PCR1 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR1 = "kms:RecipientAttestation:PCR1";
	/** Condition key: kms:RecipientAttestation:PCR10 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR10 =
		"kms:RecipientAttestation:PCR10";
	/** Condition key: kms:RecipientAttestation:PCR11 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR11 =
		"kms:RecipientAttestation:PCR11";
	/** Condition key: kms:RecipientAttestation:PCR12 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR12 =
		"kms:RecipientAttestation:PCR12";
	/** Condition key: kms:RecipientAttestation:PCR13 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR13 =
		"kms:RecipientAttestation:PCR13";
	/** Condition key: kms:RecipientAttestation:PCR14 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR14 =
		"kms:RecipientAttestation:PCR14";
	/** Condition key: kms:RecipientAttestation:PCR15 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR15 =
		"kms:RecipientAttestation:PCR15";
	/** Condition key: kms:RecipientAttestation:PCR16 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR16 =
		"kms:RecipientAttestation:PCR16";
	/** Condition key: kms:RecipientAttestation:PCR17 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR17 =
		"kms:RecipientAttestation:PCR17";
	/** Condition key: kms:RecipientAttestation:PCR18 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR18 =
		"kms:RecipientAttestation:PCR18";
	/** Condition key: kms:RecipientAttestation:PCR19 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR19 =
		"kms:RecipientAttestation:PCR19";
	/** Condition key: kms:RecipientAttestation:PCR2 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR2 = "kms:RecipientAttestation:PCR2";
	/** Condition key: kms:RecipientAttestation:PCR20 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR20 =
		"kms:RecipientAttestation:PCR20";
	/** Condition key: kms:RecipientAttestation:PCR21 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR21 =
		"kms:RecipientAttestation:PCR21";
	/** Condition key: kms:RecipientAttestation:PCR22 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR22 =
		"kms:RecipientAttestation:PCR22";
	/** Condition key: kms:RecipientAttestation:PCR23 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR23 =
		"kms:RecipientAttestation:PCR23";
	/** Condition key: kms:RecipientAttestation:PCR24 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR24 =
		"kms:RecipientAttestation:PCR24";
	/** Condition key: kms:RecipientAttestation:PCR25 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR25 =
		"kms:RecipientAttestation:PCR25";
	/** Condition key: kms:RecipientAttestation:PCR26 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR26 =
		"kms:RecipientAttestation:PCR26";
	/** Condition key: kms:RecipientAttestation:PCR27 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR27 =
		"kms:RecipientAttestation:PCR27";
	/** Condition key: kms:RecipientAttestation:PCR28 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR28 =
		"kms:RecipientAttestation:PCR28";
	/** Condition key: kms:RecipientAttestation:PCR29 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR29 =
		"kms:RecipientAttestation:PCR29";
	/** Condition key: kms:RecipientAttestation:PCR3 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR3 = "kms:RecipientAttestation:PCR3";
	/** Condition key: kms:RecipientAttestation:PCR30 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR30 =
		"kms:RecipientAttestation:PCR30";
	/** Condition key: kms:RecipientAttestation:PCR31 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR31 =
		"kms:RecipientAttestation:PCR31";
	/** Condition key: kms:RecipientAttestation:PCR4 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR4 = "kms:RecipientAttestation:PCR4";
	/** Condition key: kms:RecipientAttestation:PCR5 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR5 = "kms:RecipientAttestation:PCR5";
	/** Condition key: kms:RecipientAttestation:PCR6 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR6 = "kms:RecipientAttestation:PCR6";
	/** Condition key: kms:RecipientAttestation:PCR7 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR7 = "kms:RecipientAttestation:PCR7";
	/** Condition key: kms:RecipientAttestation:PCR8 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR8 = "kms:RecipientAttestation:PCR8";
	/** Condition key: kms:RecipientAttestation:PCR9 (String) */
	static readonly RECIPIENT_ATTESTATION_PCR9 = "kms:RecipientAttestation:PCR9";
	/** Condition key: kms:ReplicaRegion (String) */
	static readonly REPLICA_REGION = "kms:ReplicaRegion";
	/** Condition key: kms:RequestAlias (String) */
	static readonly REQUEST_ALIAS = "kms:RequestAlias";
	/** Condition key: kms:ResourceAliases (ArrayOfString) */
	static readonly RESOURCE_ALIASES = "kms:ResourceAliases";
	/** Condition key: kms:RetiringPrincipal (String) */
	static readonly RETIRING_PRINCIPAL = "kms:RetiringPrincipal";
	/** Condition key: kms:RetiringServicePrincipal (String) */
	static readonly RETIRING_SERVICE_PRINCIPAL = "kms:RetiringServicePrincipal";
	/** Condition key: kms:RotationPeriodInDays (Numeric) */
	static readonly ROTATION_PERIOD_IN_DAYS = "kms:RotationPeriodInDays";
	/** Condition key: kms:ScheduleKeyDeletionPendingWindowInDays (Numeric) */
	static readonly SCHEDULE_KEY_DELETION_PENDING_WINDOW_IN_DAYS =
		"kms:ScheduleKeyDeletionPendingWindowInDays";
	/** Condition key: kms:SigningAlgorithm (String) */
	static readonly SIGNING_ALGORITHM = "kms:SigningAlgorithm";
	/** Condition key: kms:TrailingDaysWithoutKeyUsage (Numeric) */
	static readonly TRAILING_DAYS_WITHOUT_KEY_USAGE =
		"kms:TrailingDaysWithoutKeyUsage";
	/** Condition key: kms:ValidTo (Date) */
	static readonly VALID_TO = "kms:ValidTo";
	/** Condition key: kms:ViaService (String) */
	static readonly VIA_SERVICE = "kms:ViaService";
	/** Condition key: kms:WrappingAlgorithm (String) */
	static readonly WRAPPING_ALGORITHM = "kms:WrappingAlgorithm";
	/** Condition key: kms:WrappingKeySpec (String) */
	static readonly WRAPPING_KEY_SPEC = "kms:WrappingKeySpec";

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
	 * Generates a condition block for `kms:BypassPolicyLockoutSafetyCheck`.
	 */
	static bypassPolicyLockoutSafetyCheck(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "kms:BypassPolicyLockoutSafetyCheck": value } };
	}

	/**
	 * Generates a condition block for `kms:CallerAccount`.
	 */
	static callerAccount(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:CallerAccount": value } };
	}

	/**
	 * Generates a condition block for `kms:CustomerMasterKeySpec`.
	 */
	static customerMasterKeySpec(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:CustomerMasterKeySpec": value } };
	}

	/**
	 * Generates a condition block for `kms:CustomerMasterKeyUsage`.
	 */
	static customerMasterKeyUsage(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:CustomerMasterKeyUsage": value } };
	}

	/**
	 * Generates a condition block for `kms:DataKeyPairSpec`.
	 */
	static dataKeyPairSpec(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:DataKeyPairSpec": value } };
	}

	/**
	 * Generates a condition block for `kms:EncryptionAlgorithm`.
	 */
	static encryptionAlgorithm(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:EncryptionAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `kms:EncryptionContext:${EncryptionContextKey}`.
	 */
	static encryptionContext(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:EncryptionContext:${EncryptionContextKey}": value },
		};
	}

	/**
	 * Generates a condition block for `kms:EncryptionContextKeys`.
	 */
	static encryptionContextKeys(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "kms:EncryptionContextKeys": values },
		};
	}

	/**
	 * Generates a condition block for `kms:ExpirationModel`.
	 */
	static expirationModel(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:ExpirationModel": value } };
	}

	/**
	 * Generates a condition block for `kms:GrantConstraintSourceArn`.
	 */
	static grantConstraintSourceARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "kms:GrantConstraintSourceArn": value } };
	}

	/**
	 * Generates a condition block for `kms:GrantConstraintType`.
	 */
	static grantConstraintType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:GrantConstraintType": value } };
	}

	/**
	 * Generates a condition block for `kms:GrantIsForAWSResource`.
	 */
	static grantIsForAWSResource(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "kms:GrantIsForAWSResource": value } };
	}

	/**
	 * Generates a condition block for `kms:GrantOperations`.
	 */
	static grantOperations(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "kms:GrantOperations": values } };
	}

	/**
	 * Generates a condition block for `kms:GranteePrincipal`.
	 */
	static granteePrincipal(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:GranteePrincipal": value } };
	}

	/**
	 * Generates a condition block for `kms:GranteeServicePrincipal`.
	 */
	static granteeServicePrincipal(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:GranteeServicePrincipal": value } };
	}

	/**
	 * Generates a condition block for `kms:KeyAgreementAlgorithm`.
	 */
	static keyAgreementAlgorithm(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:KeyAgreementAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `kms:KeyOrigin`.
	 */
	static keyOrigin(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:KeyOrigin": value } };
	}

	/**
	 * Generates a condition block for `kms:KeySpec`.
	 */
	static keySpec(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:KeySpec": value } };
	}

	/**
	 * Generates a condition block for `kms:KeyUsage`.
	 */
	static keyUsage(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:KeyUsage": value } };
	}

	/**
	 * Generates a condition block for `kms:MacAlgorithm`.
	 */
	static macAlgorithm(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:MacAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `kms:MessageType`.
	 */
	static messageType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:MessageType": value } };
	}

	/**
	 * Generates a condition block for `kms:MultiRegion`.
	 */
	static multiRegion(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "kms:MultiRegion": value } };
	}

	/**
	 * Generates a condition block for `kms:MultiRegionKeyType`.
	 */
	static multiRegionKeyType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:MultiRegionKeyType": value } };
	}

	/**
	 * Generates a condition block for `kms:PrimaryRegion`.
	 */
	static primaryRegion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:PrimaryRegion": value } };
	}

	/**
	 * Generates a condition block for `kms:ReEncryptOnSameKey`.
	 */
	static reEncryptOnSameKey(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "kms:ReEncryptOnSameKey": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:ImageSha384`.
	 */
	static recipientAttestationImageSha384(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:ImageSha384": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR0`.
	 */
	static recipientAttestationNitroTpmpcr0(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR0": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR1`.
	 */
	static recipientAttestationNitroTpmpcr1(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR1": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR10`.
	 */
	static recipientAttestationNitroTpmpcr10(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR10": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR11`.
	 */
	static recipientAttestationNitroTpmpcr11(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR11": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR12`.
	 */
	static recipientAttestationNitroTpmpcr12(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR12": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR13`.
	 */
	static recipientAttestationNitroTpmpcr13(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR13": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR14`.
	 */
	static recipientAttestationNitroTpmpcr14(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR14": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR15`.
	 */
	static recipientAttestationNitroTpmpcr15(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR15": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR16`.
	 */
	static recipientAttestationNitroTpmpcr16(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR16": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR17`.
	 */
	static recipientAttestationNitroTpmpcr17(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR17": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR18`.
	 */
	static recipientAttestationNitroTpmpcr18(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR18": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR19`.
	 */
	static recipientAttestationNitroTpmpcr19(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR19": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR2`.
	 */
	static recipientAttestationNitroTpmpcr2(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR2": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR20`.
	 */
	static recipientAttestationNitroTpmpcr20(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR20": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR21`.
	 */
	static recipientAttestationNitroTpmpcr21(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR21": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR22`.
	 */
	static recipientAttestationNitroTpmpcr22(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR22": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR23`.
	 */
	static recipientAttestationNitroTpmpcr23(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "kms:RecipientAttestation:NitroTPMPCR23": value },
		};
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR3`.
	 */
	static recipientAttestationNitroTpmpcr3(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR3": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR4`.
	 */
	static recipientAttestationNitroTpmpcr4(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR4": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR5`.
	 */
	static recipientAttestationNitroTpmpcr5(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR5": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR6`.
	 */
	static recipientAttestationNitroTpmpcr6(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR6": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR7`.
	 */
	static recipientAttestationNitroTpmpcr7(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR7": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR8`.
	 */
	static recipientAttestationNitroTpmpcr8(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR8": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:NitroTPMPCR9`.
	 */
	static recipientAttestationNitroTpmpcr9(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:NitroTPMPCR9": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR0`.
	 */
	static recipientAttestationPcr0(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR0": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR1`.
	 */
	static recipientAttestationPcr1(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR1": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR10`.
	 */
	static recipientAttestationPcr10(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR10": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR11`.
	 */
	static recipientAttestationPcr11(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR11": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR12`.
	 */
	static recipientAttestationPcr12(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR12": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR13`.
	 */
	static recipientAttestationPcr13(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR13": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR14`.
	 */
	static recipientAttestationPcr14(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR14": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR15`.
	 */
	static recipientAttestationPcr15(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR15": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR16`.
	 */
	static recipientAttestationPcr16(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR16": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR17`.
	 */
	static recipientAttestationPcr17(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR17": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR18`.
	 */
	static recipientAttestationPcr18(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR18": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR19`.
	 */
	static recipientAttestationPcr19(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR19": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR2`.
	 */
	static recipientAttestationPcr2(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR2": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR20`.
	 */
	static recipientAttestationPcr20(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR20": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR21`.
	 */
	static recipientAttestationPcr21(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR21": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR22`.
	 */
	static recipientAttestationPcr22(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR22": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR23`.
	 */
	static recipientAttestationPcr23(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR23": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR24`.
	 */
	static recipientAttestationPcr24(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR24": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR25`.
	 */
	static recipientAttestationPcr25(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR25": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR26`.
	 */
	static recipientAttestationPcr26(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR26": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR27`.
	 */
	static recipientAttestationPcr27(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR27": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR28`.
	 */
	static recipientAttestationPcr28(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR28": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR29`.
	 */
	static recipientAttestationPcr29(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR29": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR3`.
	 */
	static recipientAttestationPcr3(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR3": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR30`.
	 */
	static recipientAttestationPcr30(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR30": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR31`.
	 */
	static recipientAttestationPcr31(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR31": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR4`.
	 */
	static recipientAttestationPcr4(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR4": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR5`.
	 */
	static recipientAttestationPcr5(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR5": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR6`.
	 */
	static recipientAttestationPcr6(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR6": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR7`.
	 */
	static recipientAttestationPcr7(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR7": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR8`.
	 */
	static recipientAttestationPcr8(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR8": value } };
	}

	/**
	 * Generates a condition block for `kms:RecipientAttestation:PCR9`.
	 */
	static recipientAttestationPcr9(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RecipientAttestation:PCR9": value } };
	}

	/**
	 * Generates a condition block for `kms:ReplicaRegion`.
	 */
	static replicaRegion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:ReplicaRegion": value } };
	}

	/**
	 * Generates a condition block for `kms:RequestAlias`.
	 */
	static requestAlias(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RequestAlias": value } };
	}

	/**
	 * Generates a condition block for `kms:ResourceAliases`.
	 */
	static resourceAliases(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "kms:ResourceAliases": values } };
	}

	/**
	 * Generates a condition block for `kms:RetiringPrincipal`.
	 */
	static retiringPrincipal(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RetiringPrincipal": value } };
	}

	/**
	 * Generates a condition block for `kms:RetiringServicePrincipal`.
	 */
	static retiringServicePrincipal(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:RetiringServicePrincipal": value } };
	}

	/**
	 * Generates a condition block for `kms:RotationPeriodInDays`.
	 */
	static rotationPeriodInDays(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "kms:RotationPeriodInDays": value } };
	}

	/**
	 * Generates a condition block for `kms:ScheduleKeyDeletionPendingWindowInDays`.
	 */
	static scheduleKeyDeletionPendingWindowInDays(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: { "kms:ScheduleKeyDeletionPendingWindowInDays": value },
		};
	}

	/**
	 * Generates a condition block for `kms:SigningAlgorithm`.
	 */
	static signingAlgorithm(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:SigningAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `kms:TrailingDaysWithoutKeyUsage`.
	 */
	static trailingDaysWithoutKeyUsage(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "kms:TrailingDaysWithoutKeyUsage": value } };
	}

	/**
	 * Generates a condition block for `kms:ValidTo`.
	 */
	static validTo(value: string): Record<string, Record<string, string>> {
		return { DateEquals: { "kms:ValidTo": value } };
	}

	/**
	 * Generates a condition block for `kms:ViaService`.
	 */
	static viaService(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:ViaService": value } };
	}

	/**
	 * Generates a condition block for `kms:WrappingAlgorithm`.
	 */
	static wrappingAlgorithm(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:WrappingAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `kms:WrappingKeySpec`.
	 */
	static wrappingKeySpec(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "kms:WrappingKeySpec": value } };
	}
}
