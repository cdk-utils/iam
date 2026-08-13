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
	static readonly CancelKeyDeletion = "kms:CancelKeyDeletion";
	/** [Write] kms:ConnectCustomKeyStore */
	static readonly ConnectCustomKeyStore = "kms:ConnectCustomKeyStore";
	/** [Write] kms:CreateAlias */
	static readonly CreateAlias = "kms:CreateAlias";
	/** [Write] kms:CreateCustomKeyStore */
	static readonly CreateCustomKeyStore = "kms:CreateCustomKeyStore";
	/** [PermissionManagement] kms:CreateGrant */
	static readonly CreateGrant = "kms:CreateGrant";
	/** [Write] kms:CreateKey */
	static readonly CreateKey = "kms:CreateKey";
	/** [Write] kms:Decrypt */
	static readonly Decrypt = "kms:Decrypt";
	/** [Write] kms:DeleteAlias */
	static readonly DeleteAlias = "kms:DeleteAlias";
	/** [Write] kms:DeleteCustomKeyStore */
	static readonly DeleteCustomKeyStore = "kms:DeleteCustomKeyStore";
	/** [Write] kms:DeleteImportedKeyMaterial */
	static readonly DeleteImportedKeyMaterial = "kms:DeleteImportedKeyMaterial";
	/** [Write] kms:DeriveSharedSecret */
	static readonly DeriveSharedSecret = "kms:DeriveSharedSecret";
	/** [Read] kms:DescribeCustomKeyStores */
	static readonly DescribeCustomKeyStores = "kms:DescribeCustomKeyStores";
	/** [Read] kms:DescribeKey */
	static readonly DescribeKey = "kms:DescribeKey";
	/** [Write] kms:DisableKey */
	static readonly DisableKey = "kms:DisableKey";
	/** [Write] kms:DisableKeyRotation */
	static readonly DisableKeyRotation = "kms:DisableKeyRotation";
	/** [Write] kms:DisconnectCustomKeyStore */
	static readonly DisconnectCustomKeyStore = "kms:DisconnectCustomKeyStore";
	/** [Write] kms:EnableKey */
	static readonly EnableKey = "kms:EnableKey";
	/** [Write] kms:EnableKeyRotation */
	static readonly EnableKeyRotation = "kms:EnableKeyRotation";
	/** [Write] kms:Encrypt */
	static readonly Encrypt = "kms:Encrypt";
	/** [Write] kms:GenerateDataKey */
	static readonly GenerateDataKey = "kms:GenerateDataKey";
	/** [Write] kms:GenerateDataKeyPair */
	static readonly GenerateDataKeyPair = "kms:GenerateDataKeyPair";
	/** [Write] kms:GenerateDataKeyPairWithoutPlaintext */
	static readonly GenerateDataKeyPairWithoutPlaintext =
		"kms:GenerateDataKeyPairWithoutPlaintext";
	/** [Write] kms:GenerateDataKeyWithoutPlaintext */
	static readonly GenerateDataKeyWithoutPlaintext =
		"kms:GenerateDataKeyWithoutPlaintext";
	/** [Write] kms:GenerateMac */
	static readonly GenerateMac = "kms:GenerateMac";
	/** [Write] kms:GenerateRandom */
	static readonly GenerateRandom = "kms:GenerateRandom";
	/** [Read] kms:GetKeyLastUsage */
	static readonly actionGetKeyLastUsage = "kms:GetKeyLastUsage";
	/** [Read] kms:GetKeyPolicy */
	static readonly actionGetKeyPolicy = "kms:GetKeyPolicy";
	/** [Read] kms:GetKeyRotationStatus */
	static readonly actionGetKeyRotationStatus = "kms:GetKeyRotationStatus";
	/** [Read] kms:GetParametersForImport */
	static readonly actionGetParametersForImport = "kms:GetParametersForImport";
	/** [Read] kms:GetPublicKey */
	static readonly actionGetPublicKey = "kms:GetPublicKey";
	/** [Write] kms:ImportKeyMaterial */
	static readonly ImportKeyMaterial = "kms:ImportKeyMaterial";
	/** [List] kms:ListAliases */
	static readonly ListAliases = "kms:ListAliases";
	/** [List] kms:ListGrants */
	static readonly ListGrants = "kms:ListGrants";
	/** [List] kms:ListKeyPolicies */
	static readonly ListKeyPolicies = "kms:ListKeyPolicies";
	/** [List] kms:ListKeyRotations */
	static readonly ListKeyRotations = "kms:ListKeyRotations";
	/** [List] kms:ListKeys */
	static readonly ListKeys = "kms:ListKeys";
	/** [List] kms:ListResourceTags */
	static readonly ListResourceTags = "kms:ListResourceTags";
	/** [List] kms:ListRetirableGrants */
	static readonly ListRetirableGrants = "kms:ListRetirableGrants";
	/** [PermissionManagement] kms:PutKeyPolicy */
	static readonly PutKeyPolicy = "kms:PutKeyPolicy";
	/** [Write] kms:ReEncryptFrom */
	static readonly ReEncryptFrom = "kms:ReEncryptFrom";
	/** [Write] kms:ReEncryptTo */
	static readonly ReEncryptTo = "kms:ReEncryptTo";
	/** [Write] kms:ReplicateKey */
	static readonly ReplicateKey = "kms:ReplicateKey";
	/** [PermissionManagement] kms:RetireGrant */
	static readonly RetireGrant = "kms:RetireGrant";
	/** [PermissionManagement] kms:RevokeGrant */
	static readonly RevokeGrant = "kms:RevokeGrant";
	/** [Write] kms:RotateKeyOnDemand */
	static readonly RotateKeyOnDemand = "kms:RotateKeyOnDemand";
	/** [Write] kms:ScheduleKeyDeletion */
	static readonly ScheduleKeyDeletion = "kms:ScheduleKeyDeletion";
	/** [Write] kms:Sign */
	static readonly Sign = "kms:Sign";
	/** [Write] kms:SynchronizeMultiRegionKey */
	static readonly SynchronizeMultiRegionKey = "kms:SynchronizeMultiRegionKey";
	/** [Tagging] kms:TagResource */
	static readonly TagResource = "kms:TagResource";
	/** [Tagging] kms:UntagResource */
	static readonly UntagResource = "kms:UntagResource";
	/** [Write] kms:UpdateAlias */
	static readonly UpdateAlias = "kms:UpdateAlias";
	/** [Write] kms:UpdateCustomKeyStore */
	static readonly UpdateCustomKeyStore = "kms:UpdateCustomKeyStore";
	/** [Write] kms:UpdateKeyDescription */
	static readonly UpdateKeyDescription = "kms:UpdateKeyDescription";
	/** [Write] kms:UpdatePrimaryRegion */
	static readonly UpdatePrimaryRegion = "kms:UpdatePrimaryRegion";
	/** [Write] kms:Verify */
	static readonly Verify = "kms:Verify";
	/** [Write] kms:VerifyMac */
	static readonly VerifyMac = "kms:VerifyMac";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KMSActions.DescribeCustomKeyStores,
		KMSActions.DescribeKey,
		KMSActions.actionGetKeyLastUsage,
		KMSActions.actionGetKeyPolicy,
		KMSActions.actionGetKeyRotationStatus,
		KMSActions.actionGetParametersForImport,
		KMSActions.actionGetPublicKey,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KMSActions.CancelKeyDeletion,
		KMSActions.ConnectCustomKeyStore,
		KMSActions.CreateAlias,
		KMSActions.CreateCustomKeyStore,
		KMSActions.CreateKey,
		KMSActions.Decrypt,
		KMSActions.DeleteAlias,
		KMSActions.DeleteCustomKeyStore,
		KMSActions.DeleteImportedKeyMaterial,
		KMSActions.DeriveSharedSecret,
		KMSActions.DisableKey,
		KMSActions.DisableKeyRotation,
		KMSActions.DisconnectCustomKeyStore,
		KMSActions.EnableKey,
		KMSActions.EnableKeyRotation,
		KMSActions.Encrypt,
		KMSActions.GenerateDataKey,
		KMSActions.GenerateDataKeyPair,
		KMSActions.GenerateDataKeyPairWithoutPlaintext,
		KMSActions.GenerateDataKeyWithoutPlaintext,
		KMSActions.GenerateMac,
		KMSActions.GenerateRandom,
		KMSActions.ImportKeyMaterial,
		KMSActions.ReEncryptFrom,
		KMSActions.ReEncryptTo,
		KMSActions.ReplicateKey,
		KMSActions.RotateKeyOnDemand,
		KMSActions.ScheduleKeyDeletion,
		KMSActions.Sign,
		KMSActions.SynchronizeMultiRegionKey,
		KMSActions.UpdateAlias,
		KMSActions.UpdateCustomKeyStore,
		KMSActions.UpdateKeyDescription,
		KMSActions.UpdatePrimaryRegion,
		KMSActions.Verify,
		KMSActions.VerifyMac,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KMSActions.ListAliases,
		KMSActions.ListGrants,
		KMSActions.ListKeyPolicies,
		KMSActions.ListKeyRotations,
		KMSActions.ListKeys,
		KMSActions.ListResourceTags,
		KMSActions.ListRetirableGrants,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		KMSActions.CreateGrant,
		KMSActions.PutKeyPolicy,
		KMSActions.RetireGrant,
		KMSActions.RevokeGrant,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KMSActions.TagResource,
		KMSActions.UntagResource,
	];
}

/**
 * Properties for building a alias ARN.
 */
export interface KMSAliasArnProps {
	/** The Alias component of the ARN. */
	readonly alias: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alias ARN.
 */
export interface KMSAliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Alias component. */
	readonly alias: string;
}

/**
 * Properties for building a key ARN.
 */
export interface KMSKeyArnProps {
	/** The KeyId component of the ARN. */
	readonly keyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a key ARN.
 */
export interface KMSKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KeyId component. */
	readonly keyId: string;
}

const AliasArnRegex =
	/^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):alias\/(?<alias>[^:/?]+)$/;
const KeyArnRegex =
	/^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):key\/(?<keyId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kms resources.
 */
export class KMSResources {
	/**
	 * Builds an ARN for the alias resource.
	 */
	static alias(props: KMSAliasArnProps): string {
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
	static parseAliasArn(arn: string): KMSAliasArnComponents {
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
	static key(props: KMSKeyArnProps): string {
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
	static parseKeyArn(arn: string): KMSKeyArnComponents {
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
	static readonly CancelKeyDeletion: string[] = ["kms:CancelKeyDeletion"];
	/** IAM actions required for the ConnectCustomKeyStore API call. */
	static readonly ConnectCustomKeyStore: string[] = [
		"kms:ConnectCustomKeyStore",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CreateAlias: string[] = ["kms:CreateAlias"];
	/** IAM actions required for the CreateCustomKeyStore API call. */
	static readonly CreateCustomKeyStore: string[] = ["kms:CreateCustomKeyStore"];
	/** IAM actions required for the CreateGrant API call. */
	static readonly CreateGrant: string[] = ["kms:CreateGrant"];
	/** IAM actions required for the CreateKey API call. */
	static readonly CreateKey: string[] = [
		"kms:CreateKey",
		"kms:PutKeyPolicy",
		"kms:TagResource",
	];
	/** IAM actions required for the Decrypt API call. */
	static readonly Decrypt: string[] = ["kms:Decrypt"];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DeleteAlias: string[] = ["kms:DeleteAlias"];
	/** IAM actions required for the DeleteCustomKeyStore API call. */
	static readonly DeleteCustomKeyStore: string[] = ["kms:DeleteCustomKeyStore"];
	/** IAM actions required for the DeleteImportedKeyMaterial API call. */
	static readonly DeleteImportedKeyMaterial: string[] = [
		"kms:DeleteImportedKeyMaterial",
	];
	/** IAM actions required for the DeriveSharedSecret API call. */
	static readonly DeriveSharedSecret: string[] = ["kms:DeriveSharedSecret"];
	/** IAM actions required for the DescribeCustomKeyStores API call. */
	static readonly DescribeCustomKeyStores: string[] = [
		"kms:DescribeCustomKeyStores",
	];
	/** IAM actions required for the DescribeKey API call. */
	static readonly DescribeKey: string[] = ["kms:DescribeKey"];
	/** IAM actions required for the DisableKey API call. */
	static readonly DisableKey: string[] = ["kms:DisableKey"];
	/** IAM actions required for the DisableKeyRotation API call. */
	static readonly DisableKeyRotation: string[] = ["kms:DisableKeyRotation"];
	/** IAM actions required for the DisconnectCustomKeyStore API call. */
	static readonly DisconnectCustomKeyStore: string[] = [
		"kms:DisconnectCustomKeyStore",
	];
	/** IAM actions required for the EnableKey API call. */
	static readonly EnableKey: string[] = ["kms:EnableKey"];
	/** IAM actions required for the EnableKeyRotation API call. */
	static readonly EnableKeyRotation: string[] = ["kms:EnableKeyRotation"];
	/** IAM actions required for the Encrypt API call. */
	static readonly Encrypt: string[] = ["kms:Encrypt"];
	/** IAM actions required for the GenerateDataKey API call. */
	static readonly GenerateDataKey: string[] = ["kms:GenerateDataKey"];
	/** IAM actions required for the GenerateDataKeyPair API call. */
	static readonly GenerateDataKeyPair: string[] = ["kms:GenerateDataKeyPair"];
	/** IAM actions required for the GenerateDataKeyPairWithoutPlaintext API call. */
	static readonly GenerateDataKeyPairWithoutPlaintext: string[] = [
		"kms:GenerateDataKeyPairWithoutPlaintext",
	];
	/** IAM actions required for the GenerateDataKeyWithoutPlaintext API call. */
	static readonly GenerateDataKeyWithoutPlaintext: string[] = [
		"kms:GenerateDataKeyWithoutPlaintext",
	];
	/** IAM actions required for the GenerateMac API call. */
	static readonly GenerateMac: string[] = ["kms:GenerateMac"];
	/** IAM actions required for the GenerateRandom API call. */
	static readonly GenerateRandom: string[] = ["kms:GenerateRandom"];
	/** IAM actions required for the GetKeyLastUsage API call. */
	static readonly opGetKeyLastUsage: string[] = ["kms:GetKeyLastUsage"];
	/** IAM actions required for the GetKeyPolicy API call. */
	static readonly opGetKeyPolicy: string[] = ["kms:GetKeyPolicy"];
	/** IAM actions required for the GetKeyRotationStatus API call. */
	static readonly opGetKeyRotationStatus: string[] = [
		"kms:GetKeyRotationStatus",
	];
	/** IAM actions required for the GetParametersForImport API call. */
	static readonly opGetParametersForImport: string[] = [
		"kms:GetParametersForImport",
	];
	/** IAM actions required for the GetPublicKey API call. */
	static readonly opGetPublicKey: string[] = ["kms:GetPublicKey"];
	/** IAM actions required for the ImportKeyMaterial API call. */
	static readonly ImportKeyMaterial: string[] = ["kms:ImportKeyMaterial"];
	/** IAM actions required for the ListAliases API call. */
	static readonly ListAliases: string[] = ["kms:ListAliases"];
	/** IAM actions required for the ListGrants API call. */
	static readonly ListGrants: string[] = ["kms:ListGrants"];
	/** IAM actions required for the ListKeyPolicies API call. */
	static readonly ListKeyPolicies: string[] = ["kms:ListKeyPolicies"];
	/** IAM actions required for the ListKeyRotations API call. */
	static readonly ListKeyRotations: string[] = ["kms:ListKeyRotations"];
	/** IAM actions required for the ListKeys API call. */
	static readonly ListKeys: string[] = ["kms:ListKeys"];
	/** IAM actions required for the ListResourceTags API call. */
	static readonly ListResourceTags: string[] = ["kms:ListResourceTags"];
	/** IAM actions required for the ListRetirableGrants API call. */
	static readonly ListRetirableGrants: string[] = ["kms:ListRetirableGrants"];
	/** IAM actions required for the PutKeyPolicy API call. */
	static readonly PutKeyPolicy: string[] = ["kms:PutKeyPolicy"];
	/** IAM actions required for the ReEncrypt API call. */
	static readonly ReEncrypt: string[] = [
		"kms:ReEncryptFrom",
		"kms:ReEncryptTo",
	];
	/** IAM actions required for the ReplicateKey API call. */
	static readonly ReplicateKey: string[] = ["kms:ReplicateKey"];
	/** IAM actions required for the RetireGrant API call. */
	static readonly RetireGrant: string[] = ["kms:RetireGrant"];
	/** IAM actions required for the RevokeGrant API call. */
	static readonly RevokeGrant: string[] = ["kms:RevokeGrant"];
	/** IAM actions required for the RotateKeyOnDemand API call. */
	static readonly RotateKeyOnDemand: string[] = ["kms:RotateKeyOnDemand"];
	/** IAM actions required for the ScheduleKeyDeletion API call. */
	static readonly ScheduleKeyDeletion: string[] = ["kms:ScheduleKeyDeletion"];
	/** IAM actions required for the Sign API call. */
	static readonly Sign: string[] = ["kms:Sign"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kms:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kms:UntagResource"];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UpdateAlias: string[] = ["kms:UpdateAlias"];
	/** IAM actions required for the UpdateCustomKeyStore API call. */
	static readonly UpdateCustomKeyStore: string[] = ["kms:UpdateCustomKeyStore"];
	/** IAM actions required for the UpdateKeyDescription API call. */
	static readonly UpdateKeyDescription: string[] = ["kms:UpdateKeyDescription"];
	/** IAM actions required for the UpdatePrimaryRegion API call. */
	static readonly UpdatePrimaryRegion: string[] = ["kms:UpdatePrimaryRegion"];
	/** IAM actions required for the Verify API call. */
	static readonly Verify: string[] = ["kms:Verify"];
	/** IAM actions required for the VerifyMac API call. */
	static readonly VerifyMac: string[] = ["kms:VerifyMac"];
}

/**
 * Condition key constants and builders for kms.
 */
export class KMSConditions {
	/** Condition keys applicable to the CancelKeyDeletion action. */
	static readonly CancelKeyDeletionConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ConnectCustomKeyStore action. */
	static readonly ConnectCustomKeyStoreConditionKeys: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the CreateAlias action. */
	static readonly CreateAliasConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the CreateCustomKeyStore action. */
	static readonly CreateCustomKeyStoreConditionKeys: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the CreateGrant action. */
	static readonly CreateGrantConditionKeys: string[] = [
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
	static readonly CreateKeyConditionKeys: string[] = [
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
	static readonly DecryptConditionKeys: string[] = [
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
	static readonly DeleteAliasConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DeleteCustomKeyStore action. */
	static readonly DeleteCustomKeyStoreConditionKeys: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the DeleteImportedKeyMaterial action. */
	static readonly DeleteImportedKeyMaterialConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DeriveSharedSecret action. */
	static readonly DeriveSharedSecretConditionKeys: string[] = [
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
	static readonly DescribeCustomKeyStoresConditionKeys: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the DescribeKey action. */
	static readonly DescribeKeyConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DisableKey action. */
	static readonly DisableKeyConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:TrailingDaysWithoutKeyUsage",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DisableKeyRotation action. */
	static readonly DisableKeyRotationConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the DisconnectCustomKeyStore action. */
	static readonly DisconnectCustomKeyStoreConditionKeys: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the EnableKey action. */
	static readonly EnableKeyConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the EnableKeyRotation action. */
	static readonly EnableKeyRotationConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:RotationPeriodInDays",
		"kms:ViaService",
	];
	/** Condition keys applicable to the Encrypt action. */
	static readonly EncryptConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateDataKey action. */
	static readonly GenerateDataKeyConditionKeys: string[] = [
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
	static readonly GenerateDataKeyPairConditionKeys: string[] = [
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
	static readonly GenerateDataKeyPairWithoutPlaintextConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:DataKeyPairSpec",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateDataKeyWithoutPlaintext action. */
	static readonly GenerateDataKeyWithoutPlaintextConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateMac action. */
	static readonly GenerateMacConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:MacAlgorithm",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GenerateRandom action. */
	static readonly GenerateRandomConditionKeys: string[] = [
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
	static readonly actionGetKeyLastUsageConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GetKeyPolicy action. */
	static readonly actionGetKeyPolicyConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GetKeyRotationStatus action. */
	static readonly actionGetKeyRotationStatusConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the GetParametersForImport action. */
	static readonly actionGetParametersForImportConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
		"kms:WrappingAlgorithm",
		"kms:WrappingKeySpec",
	];
	/** Condition keys applicable to the GetPublicKey action. */
	static readonly actionGetPublicKeyConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ImportKeyMaterial action. */
	static readonly ImportKeyMaterialConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ExpirationModel",
		"kms:ValidTo",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListGrants action. */
	static readonly ListGrantsConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:GrantIsForAWSResource",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListKeyPolicies action. */
	static readonly ListKeyPoliciesConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListKeyRotations action. */
	static readonly ListKeyRotationsConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ListResourceTags action. */
	static readonly ListResourceTagsConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the PutKeyPolicy action. */
	static readonly PutKeyPolicyConditionKeys: string[] = [
		"kms:BypassPolicyLockoutSafetyCheck",
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ReEncryptFrom action. */
	static readonly ReEncryptFromConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:ReEncryptOnSameKey",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ReEncryptTo action. */
	static readonly ReEncryptToConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionAlgorithm",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:ReEncryptOnSameKey",
		"kms:RequestAlias",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ReplicateKey action. */
	static readonly ReplicateKeyConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ReplicaRegion",
		"kms:ViaService",
	];
	/** Condition keys applicable to the RetireGrant action. */
	static readonly RetireGrantConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:EncryptionContext:${EncryptionContextKey}",
		"kms:EncryptionContextKeys",
		"kms:GrantConstraintType",
		"kms:ViaService",
	];
	/** Condition keys applicable to the RevokeGrant action. */
	static readonly RevokeGrantConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:GrantIsForAWSResource",
		"kms:ViaService",
	];
	/** Condition keys applicable to the RotateKeyOnDemand action. */
	static readonly RotateKeyOnDemandConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the ScheduleKeyDeletion action. */
	static readonly ScheduleKeyDeletionConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ScheduleKeyDeletionPendingWindowInDays",
		"kms:TrailingDaysWithoutKeyUsage",
		"kms:ViaService",
	];
	/** Condition keys applicable to the Sign action. */
	static readonly SignConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:MessageType",
		"kms:RequestAlias",
		"kms:SigningAlgorithm",
		"kms:ViaService",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UpdateAlias action. */
	static readonly UpdateAliasConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UpdateCustomKeyStore action. */
	static readonly UpdateCustomKeyStoreConditionKeys: string[] = [
		"kms:CallerAccount",
	];
	/** Condition keys applicable to the UpdateKeyDescription action. */
	static readonly UpdateKeyDescriptionConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:ViaService",
	];
	/** Condition keys applicable to the UpdatePrimaryRegion action. */
	static readonly UpdatePrimaryRegionConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:PrimaryRegion",
		"kms:ViaService",
	];
	/** Condition keys applicable to the Verify action. */
	static readonly VerifyConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:MessageType",
		"kms:RequestAlias",
		"kms:SigningAlgorithm",
		"kms:ViaService",
	];
	/** Condition keys applicable to the VerifyMac action. */
	static readonly VerifyMacConditionKeys: string[] = [
		"kms:CallerAccount",
		"kms:MacAlgorithm",
		"kms:RequestAlias",
		"kms:ViaService",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
