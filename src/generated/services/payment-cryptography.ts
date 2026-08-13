// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/payment-cryptography.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the payment-cryptography service.
 */
export class PaymentCryptographyActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "payment-cryptography";

	/** [Write] payment-cryptography:AddKeyReplicationRegions */
	static readonly ADD_KEY_REPLICATION_REGIONS =
		"payment-cryptography:AddKeyReplicationRegions";
	/** [Write] payment-cryptography:AssociateMpaTeam */
	static readonly ASSOCIATE_MPA_TEAM = "payment-cryptography:AssociateMpaTeam";
	/** [Write] payment-cryptography:CreateAlias */
	static readonly CREATE_ALIAS = "payment-cryptography:CreateAlias";
	/** [Write] payment-cryptography:CreateKey */
	static readonly CREATE_KEY = "payment-cryptography:CreateKey";
	/** [Write] payment-cryptography:DecryptData */
	static readonly DECRYPT_DATA = "payment-cryptography:DecryptData";
	/** [Write] payment-cryptography:DeleteAlias */
	static readonly DELETE_ALIAS = "payment-cryptography:DeleteAlias";
	/** [Write] payment-cryptography:DeleteKey */
	static readonly DELETE_KEY = "payment-cryptography:DeleteKey";
	/** [PermissionManagement] payment-cryptography:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"payment-cryptography:DeleteResourcePolicy";
	/** [Write] payment-cryptography:DisableDefaultKeyReplicationRegions */
	static readonly DISABLE_DEFAULT_KEY_REPLICATION_REGIONS =
		"payment-cryptography:DisableDefaultKeyReplicationRegions";
	/** [Write] payment-cryptography:DisassociateMpaTeam */
	static readonly DISASSOCIATE_MPA_TEAM =
		"payment-cryptography:DisassociateMpaTeam";
	/** [Write] payment-cryptography:EnableDefaultKeyReplicationRegions */
	static readonly ENABLE_DEFAULT_KEY_REPLICATION_REGIONS =
		"payment-cryptography:EnableDefaultKeyReplicationRegions";
	/** [Write] payment-cryptography:EncryptData */
	static readonly ENCRYPT_DATA = "payment-cryptography:EncryptData";
	/** [Write] payment-cryptography:ExportKey */
	static readonly EXPORT_KEY = "payment-cryptography:ExportKey";
	/** [Write] payment-cryptography:GenerateAs2805KekValidation */
	static readonly GENERATE_AS2805_KEK_VALIDATION =
		"payment-cryptography:GenerateAs2805KekValidation";
	/** [Write] payment-cryptography:GenerateCardValidationData */
	static readonly GENERATE_CARD_VALIDATION_DATA =
		"payment-cryptography:GenerateCardValidationData";
	/** [Write] payment-cryptography:GenerateMac */
	static readonly GENERATE_MAC = "payment-cryptography:GenerateMac";
	/** [Write] payment-cryptography:GenerateMacEmvPinChange */
	static readonly GENERATE_MAC_EMV_PIN_CHANGE =
		"payment-cryptography:GenerateMacEmvPinChange";
	/** [Write] payment-cryptography:GeneratePinData */
	static readonly GENERATE_PIN_DATA = "payment-cryptography:GeneratePinData";
	/** [Read] payment-cryptography:GetAlias */
	static readonly GET_ALIAS = "payment-cryptography:GetAlias";
	/** [Read] payment-cryptography:GetCertificateSigningRequest */
	static readonly GET_CERTIFICATE_SIGNING_REQUEST =
		"payment-cryptography:GetCertificateSigningRequest";
	/** [Read] payment-cryptography:GetDefaultKeyReplicationRegions */
	static readonly GET_DEFAULT_KEY_REPLICATION_REGIONS =
		"payment-cryptography:GetDefaultKeyReplicationRegions";
	/** [Read] payment-cryptography:GetKey */
	static readonly GET_KEY = "payment-cryptography:GetKey";
	/** [Read] payment-cryptography:GetMpaTeamAssociation */
	static readonly GET_MPA_TEAM_ASSOCIATION =
		"payment-cryptography:GetMpaTeamAssociation";
	/** [Read] payment-cryptography:GetParametersForExport */
	static readonly GET_PARAMETERS_FOR_EXPORT =
		"payment-cryptography:GetParametersForExport";
	/** [Read] payment-cryptography:GetParametersForImport */
	static readonly GET_PARAMETERS_FOR_IMPORT =
		"payment-cryptography:GetParametersForImport";
	/** [Read] payment-cryptography:GetPublicKeyCertificate */
	static readonly GET_PUBLIC_KEY_CERTIFICATE =
		"payment-cryptography:GetPublicKeyCertificate";
	/** [Read] payment-cryptography:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY =
		"payment-cryptography:GetResourcePolicy";
	/** [Write] payment-cryptography:ImportKey */
	static readonly IMPORT_KEY = "payment-cryptography:ImportKey";
	/** [List] payment-cryptography:ListAliases */
	static readonly LIST_ALIASES = "payment-cryptography:ListAliases";
	/** [List] payment-cryptography:ListKeys */
	static readonly LIST_KEYS = "payment-cryptography:ListKeys";
	/** [Read] payment-cryptography:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"payment-cryptography:ListTagsForResource";
	/** [PermissionManagement] payment-cryptography:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY =
		"payment-cryptography:PutResourcePolicy";
	/** [Write] payment-cryptography:ReEncryptData */
	static readonly RE_ENCRYPT_DATA = "payment-cryptography:ReEncryptData";
	/** [Write] payment-cryptography:RemoveKeyReplicationRegions */
	static readonly REMOVE_KEY_REPLICATION_REGIONS =
		"payment-cryptography:RemoveKeyReplicationRegions";
	/** [Write] payment-cryptography:RestoreKey */
	static readonly RESTORE_KEY = "payment-cryptography:RestoreKey";
	/** [Write] payment-cryptography:StartKeyUsage */
	static readonly START_KEY_USAGE = "payment-cryptography:StartKeyUsage";
	/** [Write] payment-cryptography:StopKeyUsage */
	static readonly STOP_KEY_USAGE = "payment-cryptography:StopKeyUsage";
	/** [Tagging] payment-cryptography:TagResource */
	static readonly TAG_RESOURCE = "payment-cryptography:TagResource";
	/** [Write] payment-cryptography:TranslateKeyMaterial */
	static readonly TRANSLATE_KEY_MATERIAL =
		"payment-cryptography:TranslateKeyMaterial";
	/** [Write] payment-cryptography:TranslatePinData */
	static readonly TRANSLATE_PIN_DATA = "payment-cryptography:TranslatePinData";
	/** [Tagging] payment-cryptography:UntagResource */
	static readonly UNTAG_RESOURCE = "payment-cryptography:UntagResource";
	/** [Write] payment-cryptography:UpdateAlias */
	static readonly UPDATE_ALIAS = "payment-cryptography:UpdateAlias";
	/** [Write] payment-cryptography:VerifyAuthRequestCryptogram */
	static readonly VERIFY_AUTH_REQUEST_CRYPTOGRAM =
		"payment-cryptography:VerifyAuthRequestCryptogram";
	/** [Write] payment-cryptography:VerifyCardValidationData */
	static readonly VERIFY_CARD_VALIDATION_DATA =
		"payment-cryptography:VerifyCardValidationData";
	/** [Write] payment-cryptography:VerifyMac */
	static readonly VERIFY_MAC = "payment-cryptography:VerifyMac";
	/** [Write] payment-cryptography:VerifyPinData */
	static readonly VERIFY_PIN_DATA = "payment-cryptography:VerifyPinData";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PaymentCryptographyActions.GET_ALIAS,
		PaymentCryptographyActions.GET_CERTIFICATE_SIGNING_REQUEST,
		PaymentCryptographyActions.GET_DEFAULT_KEY_REPLICATION_REGIONS,
		PaymentCryptographyActions.GET_KEY,
		PaymentCryptographyActions.GET_MPA_TEAM_ASSOCIATION,
		PaymentCryptographyActions.GET_PARAMETERS_FOR_EXPORT,
		PaymentCryptographyActions.GET_PARAMETERS_FOR_IMPORT,
		PaymentCryptographyActions.GET_PUBLIC_KEY_CERTIFICATE,
		PaymentCryptographyActions.GET_RESOURCE_POLICY,
		PaymentCryptographyActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PaymentCryptographyActions.ADD_KEY_REPLICATION_REGIONS,
		PaymentCryptographyActions.ASSOCIATE_MPA_TEAM,
		PaymentCryptographyActions.CREATE_ALIAS,
		PaymentCryptographyActions.CREATE_KEY,
		PaymentCryptographyActions.DECRYPT_DATA,
		PaymentCryptographyActions.DELETE_ALIAS,
		PaymentCryptographyActions.DELETE_KEY,
		PaymentCryptographyActions.DISABLE_DEFAULT_KEY_REPLICATION_REGIONS,
		PaymentCryptographyActions.DISASSOCIATE_MPA_TEAM,
		PaymentCryptographyActions.ENABLE_DEFAULT_KEY_REPLICATION_REGIONS,
		PaymentCryptographyActions.ENCRYPT_DATA,
		PaymentCryptographyActions.EXPORT_KEY,
		PaymentCryptographyActions.GENERATE_AS2805_KEK_VALIDATION,
		PaymentCryptographyActions.GENERATE_CARD_VALIDATION_DATA,
		PaymentCryptographyActions.GENERATE_MAC,
		PaymentCryptographyActions.GENERATE_MAC_EMV_PIN_CHANGE,
		PaymentCryptographyActions.GENERATE_PIN_DATA,
		PaymentCryptographyActions.IMPORT_KEY,
		PaymentCryptographyActions.RE_ENCRYPT_DATA,
		PaymentCryptographyActions.REMOVE_KEY_REPLICATION_REGIONS,
		PaymentCryptographyActions.RESTORE_KEY,
		PaymentCryptographyActions.START_KEY_USAGE,
		PaymentCryptographyActions.STOP_KEY_USAGE,
		PaymentCryptographyActions.TRANSLATE_KEY_MATERIAL,
		PaymentCryptographyActions.TRANSLATE_PIN_DATA,
		PaymentCryptographyActions.UPDATE_ALIAS,
		PaymentCryptographyActions.VERIFY_AUTH_REQUEST_CRYPTOGRAM,
		PaymentCryptographyActions.VERIFY_CARD_VALIDATION_DATA,
		PaymentCryptographyActions.VERIFY_MAC,
		PaymentCryptographyActions.VERIFY_PIN_DATA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PaymentCryptographyActions.LIST_ALIASES,
		PaymentCryptographyActions.LIST_KEYS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		PaymentCryptographyActions.DELETE_RESOURCE_POLICY,
		PaymentCryptographyActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PaymentCryptographyActions.TAG_RESOURCE,
		PaymentCryptographyActions.UNTAG_RESOURCE,
	];
}

const AliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):payment-cryptography:(?<region>[^:]*):(?<account>[^:]*):alias/(?<alias>[^:/?]+)$",
);
const ApprovalTeamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):approval-team/(?<approvalTeamId>[^:/?]+)$",
);
const KeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):payment-cryptography:(?<region>[^:]*):(?<account>[^:]*):key/(?<keyId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for payment-cryptography resources.
 */
export class PaymentCryptographyResources {
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
		return `arn:${props.partition ?? "aws"}:payment-cryptography:${props.region ?? "*"}:${props.account ?? "*"}:alias/${props.alias}`;
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
	 * Builds an ARN for the approval-team resource.
	 */
	static approvalTeam(props: {
		/** The ApprovalTeamId component of the ARN. */
		readonly approvalTeamId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mpa:${props.region ?? "*"}:${props.account ?? "*"}:approval-team/${props.approvalTeamId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the approval-team resource.
	 */
	static isValidApprovalTeamArn(arn: string): boolean {
		return ApprovalTeamArnRegex.test(arn);
	}

	/**
	 * Parses a approval-team ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApprovalTeamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		approvalTeamId: string;
	} {
		const match = ApprovalTeamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid approval-team ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			approvalTeamId: match.groups!.approvalTeamId,
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
		return `arn:${props.partition ?? "aws"}:payment-cryptography:${props.region ?? "*"}:${props.account ?? "*"}:key/${props.keyId}`;
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
 * API operation to required IAM actions mapping for payment-cryptography.
 */
export class PaymentCryptographyOperations {
	/** IAM actions required for the AddKeyReplicationRegions API call. */
	static readonly ADD_KEY_REPLICATION_REGIONS: string[] = [
		"payment-cryptography:AddKeyReplicationRegions",
	];
	/** IAM actions required for the AssociateMpaTeam API call. */
	static readonly ASSOCIATE_MPA_TEAM: string[] = [
		"payment-cryptography:AssociateMpaTeam",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CREATE_ALIAS: string[] = ["payment-cryptography:CreateAlias"];
	/** IAM actions required for the CreateKey API call. */
	static readonly CREATE_KEY: string[] = [
		"payment-cryptography:CreateKey",
		"payment-cryptography:TagResource",
	];
	/** IAM actions required for the DecryptData API call. */
	static readonly DECRYPT_DATA: string[] = [];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DELETE_ALIAS: string[] = ["payment-cryptography:DeleteAlias"];
	/** IAM actions required for the DeleteKey API call. */
	static readonly DELETE_KEY: string[] = ["payment-cryptography:DeleteKey"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"payment-cryptography:DeleteResourcePolicy",
	];
	/** IAM actions required for the DisableDefaultKeyReplicationRegions API call. */
	static readonly DISABLE_DEFAULT_KEY_REPLICATION_REGIONS: string[] = [
		"payment-cryptography:DisableDefaultKeyReplicationRegions",
	];
	/** IAM actions required for the DisassociateMpaTeam API call. */
	static readonly DISASSOCIATE_MPA_TEAM: string[] = [
		"payment-cryptography:DisassociateMpaTeam",
	];
	/** IAM actions required for the EnableDefaultKeyReplicationRegions API call. */
	static readonly ENABLE_DEFAULT_KEY_REPLICATION_REGIONS: string[] = [
		"payment-cryptography:EnableDefaultKeyReplicationRegions",
	];
	/** IAM actions required for the EncryptData API call. */
	static readonly ENCRYPT_DATA: string[] = [];
	/** IAM actions required for the ExportKey API call. */
	static readonly EXPORT_KEY: string[] = ["payment-cryptography:ExportKey"];
	/** IAM actions required for the GenerateAs2805KekValidation API call. */
	static readonly GENERATE_AS2805_KEK_VALIDATION: string[] = [];
	/** IAM actions required for the GenerateAuthRequestCryptogram API call. */
	static readonly GENERATE_AUTH_REQUEST_CRYPTOGRAM: string[] = [];
	/** IAM actions required for the GenerateCardValidationData API call. */
	static readonly GENERATE_CARD_VALIDATION_DATA: string[] = [];
	/** IAM actions required for the GenerateMac API call. */
	static readonly GENERATE_MAC: string[] = [];
	/** IAM actions required for the GenerateMacEmvPinChange API call. */
	static readonly GENERATE_MAC_EMV_PIN_CHANGE: string[] = [];
	/** IAM actions required for the GeneratePinData API call. */
	static readonly GENERATE_PIN_DATA: string[] = [];
	/** IAM actions required for the GetAlias API call. */
	static readonly GET_ALIAS: string[] = ["payment-cryptography:GetAlias"];
	/** IAM actions required for the GetCertificateSigningRequest API call. */
	static readonly GET_CERTIFICATE_SIGNING_REQUEST: string[] = [
		"payment-cryptography:GetCertificateSigningRequest",
	];
	/** IAM actions required for the GetDefaultKeyReplicationRegions API call. */
	static readonly GET_DEFAULT_KEY_REPLICATION_REGIONS: string[] = [
		"payment-cryptography:GetDefaultKeyReplicationRegions",
	];
	/** IAM actions required for the GetKey API call. */
	static readonly GET_KEY: string[] = ["payment-cryptography:GetKey"];
	/** IAM actions required for the GetMpaTeamAssociation API call. */
	static readonly GET_MPA_TEAM_ASSOCIATION: string[] = [
		"payment-cryptography:GetMpaTeamAssociation",
	];
	/** IAM actions required for the GetParametersForExport API call. */
	static readonly GET_PARAMETERS_FOR_EXPORT: string[] = [
		"payment-cryptography:GetParametersForExport",
	];
	/** IAM actions required for the GetParametersForImport API call. */
	static readonly GET_PARAMETERS_FOR_IMPORT: string[] = [
		"payment-cryptography:GetParametersForImport",
	];
	/** IAM actions required for the GetPublicKeyCertificate API call. */
	static readonly GET_PUBLIC_KEY_CERTIFICATE: string[] = [
		"payment-cryptography:GetPublicKeyCertificate",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"payment-cryptography:GetResourcePolicy",
	];
	/** IAM actions required for the ImportKey API call. */
	static readonly IMPORT_KEY: string[] = [
		"payment-cryptography:ImportKey",
		"payment-cryptography:TagResource",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly LIST_ALIASES: string[] = ["payment-cryptography:ListAliases"];
	/** IAM actions required for the ListKeys API call. */
	static readonly LIST_KEYS: string[] = ["payment-cryptography:ListKeys"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"payment-cryptography:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"payment-cryptography:PutResourcePolicy",
	];
	/** IAM actions required for the ReEncryptData API call. */
	static readonly RE_ENCRYPT_DATA: string[] = [];
	/** IAM actions required for the RemoveKeyReplicationRegions API call. */
	static readonly REMOVE_KEY_REPLICATION_REGIONS: string[] = [
		"payment-cryptography:RemoveKeyReplicationRegions",
	];
	/** IAM actions required for the RestoreKey API call. */
	static readonly RESTORE_KEY: string[] = ["payment-cryptography:RestoreKey"];
	/** IAM actions required for the StartKeyUsage API call. */
	static readonly START_KEY_USAGE: string[] = [
		"payment-cryptography:StartKeyUsage",
	];
	/** IAM actions required for the StopKeyUsage API call. */
	static readonly STOP_KEY_USAGE: string[] = [
		"payment-cryptography:StopKeyUsage",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["payment-cryptography:TagResource"];
	/** IAM actions required for the TranslateKeyMaterial API call. */
	static readonly TRANSLATE_KEY_MATERIAL: string[] = [];
	/** IAM actions required for the TranslatePinData API call. */
	static readonly TRANSLATE_PIN_DATA: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"payment-cryptography:UntagResource",
	];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UPDATE_ALIAS: string[] = ["payment-cryptography:UpdateAlias"];
	/** IAM actions required for the VerifyAuthRequestCryptogram API call. */
	static readonly VERIFY_AUTH_REQUEST_CRYPTOGRAM: string[] = [];
	/** IAM actions required for the VerifyCardValidationData API call. */
	static readonly VERIFY_CARD_VALIDATION_DATA: string[] = [];
	/** IAM actions required for the VerifyMac API call. */
	static readonly VERIFY_MAC: string[] = [];
	/** IAM actions required for the VerifyPinData API call. */
	static readonly VERIFY_PIN_DATA: string[] = [];
}

/**
 * Condition key constants and builders for payment-cryptography.
 */
export class PaymentCryptographyConditions {
	/** Condition keys applicable to the AddKeyReplicationRegions action. */
	static readonly ADD_KEY_REPLICATION_REGIONS_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the CreateKey action. */
	static readonly CREATE_KEY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"payment-cryptography:KeyAlgorithm",
		"payment-cryptography:KeyClass",
		"payment-cryptography:KeyUsage",
	];
	/** Condition keys applicable to the DecryptData action. */
	static readonly DECRYPT_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the DeleteAlias action. */
	static readonly DELETE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteKey action. */
	static readonly DELETE_KEY_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the EncryptData action. */
	static readonly ENCRYPT_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the ExportKey action. */
	static readonly EXPORT_KEY_CONDITION_KEYS: string[] = [
		"payment-cryptography:CertificateAuthorityPublicKeyIdentifier",
		"payment-cryptography:RequestAlias",
		"payment-cryptography:WrappingKeyIdentifier",
	];
	/** Condition keys applicable to the GenerateAs2805KekValidation action. */
	static readonly GENERATE_AS2805_KEK_VALIDATION_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GenerateCardValidationData action. */
	static readonly GENERATE_CARD_VALIDATION_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GenerateMac action. */
	static readonly GENERATE_MAC_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GenerateMacEmvPinChange action. */
	static readonly GENERATE_MAC_EMV_PIN_CHANGE_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GeneratePinData action. */
	static readonly GENERATE_PIN_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GetAlias action. */
	static readonly GET_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetCertificateSigningRequest action. */
	static readonly GET_CERTIFICATE_SIGNING_REQUEST_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GetKey action. */
	static readonly GET_KEY_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GetPublicKeyCertificate action. */
	static readonly GET_PUBLIC_KEY_CERTIFICATE_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the ImportKey action. */
	static readonly IMPORT_KEY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"payment-cryptography:CertificateAuthorityPublicKeyIdentifier",
		"payment-cryptography:ImportKeyMaterial",
		"payment-cryptography:WrappingKeyIdentifier",
	];
	/** Condition keys applicable to the ReEncryptData action. */
	static readonly RE_ENCRYPT_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the RemoveKeyReplicationRegions action. */
	static readonly REMOVE_KEY_REPLICATION_REGIONS_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the RestoreKey action. */
	static readonly RESTORE_KEY_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the StartKeyUsage action. */
	static readonly START_KEY_USAGE_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the StopKeyUsage action. */
	static readonly STOP_KEY_USAGE_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TranslateKeyMaterial action. */
	static readonly TRANSLATE_KEY_MATERIAL_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the TranslatePinData action. */
	static readonly TRANSLATE_PIN_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAlias action. */
	static readonly UPDATE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the VerifyAuthRequestCryptogram action. */
	static readonly VERIFY_AUTH_REQUEST_CRYPTOGRAM_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the VerifyCardValidationData action. */
	static readonly VERIFY_CARD_VALIDATION_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the VerifyMac action. */
	static readonly VERIFY_MAC_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the VerifyPinData action. */
	static readonly VERIFY_PIN_DATA_CONDITION_KEYS: string[] = [
		"payment-cryptography:RequestAlias",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: payment-cryptography:CertificateAuthorityPublicKeyIdentifier (String) */
	static readonly CERTIFICATE_AUTHORITY_PUBLIC_KEY_IDENTIFIER =
		"payment-cryptography:CertificateAuthorityPublicKeyIdentifier";
	/** Condition key: payment-cryptography:ImportKeyMaterial (String) */
	static readonly IMPORT_KEY_MATERIAL =
		"payment-cryptography:ImportKeyMaterial";
	/** Condition key: payment-cryptography:KeyAlgorithm (String) */
	static readonly KEY_ALGORITHM = "payment-cryptography:KeyAlgorithm";
	/** Condition key: payment-cryptography:KeyClass (String) */
	static readonly KEY_CLASS = "payment-cryptography:KeyClass";
	/** Condition key: payment-cryptography:KeyUsage (String) */
	static readonly KEY_USAGE = "payment-cryptography:KeyUsage";
	/** Condition key: payment-cryptography:RequestAlias (String) */
	static readonly REQUEST_ALIAS = "payment-cryptography:RequestAlias";
	/** Condition key: payment-cryptography:ResourceAliases (ArrayOfString) */
	static readonly RESOURCE_ALIASES = "payment-cryptography:ResourceAliases";
	/** Condition key: payment-cryptography:WrappingKeyIdentifier (String) */
	static readonly WRAPPING_KEY_IDENTIFIER =
		"payment-cryptography:WrappingKeyIdentifier";

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
	 * Generates a condition block for `payment-cryptography:CertificateAuthorityPublicKeyIdentifier`.
	 */
	static certificateAuthorityPublicKeyIdentifier(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"payment-cryptography:CertificateAuthorityPublicKeyIdentifier": value,
			},
		};
	}

	/**
	 * Generates a condition block for `payment-cryptography:ImportKeyMaterial`.
	 */
	static importKeyMaterial(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "payment-cryptography:ImportKeyMaterial": value },
		};
	}

	/**
	 * Generates a condition block for `payment-cryptography:KeyAlgorithm`.
	 */
	static keyAlgorithm(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "payment-cryptography:KeyAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `payment-cryptography:KeyClass`.
	 */
	static keyClass(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "payment-cryptography:KeyClass": value } };
	}

	/**
	 * Generates a condition block for `payment-cryptography:KeyUsage`.
	 */
	static keyUsage(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "payment-cryptography:KeyUsage": value } };
	}

	/**
	 * Generates a condition block for `payment-cryptography:RequestAlias`.
	 */
	static requestAlias(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "payment-cryptography:RequestAlias": value } };
	}

	/**
	 * Generates a condition block for `payment-cryptography:ResourceAliases`.
	 */
	static resourceAliases(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"payment-cryptography:ResourceAliases": values,
			},
		};
	}

	/**
	 * Generates a condition block for `payment-cryptography:WrappingKeyIdentifier`.
	 */
	static wrappingKeyIdentifier(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "payment-cryptography:WrappingKeyIdentifier": value },
		};
	}
}
