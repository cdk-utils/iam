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
	static readonly AddKeyReplicationRegions =
		"payment-cryptography:AddKeyReplicationRegions";
	/** [Write] payment-cryptography:AssociateMpaTeam */
	static readonly AssociateMpaTeam = "payment-cryptography:AssociateMpaTeam";
	/** [Write] payment-cryptography:CreateAlias */
	static readonly CreateAlias = "payment-cryptography:CreateAlias";
	/** [Write] payment-cryptography:CreateKey */
	static readonly CreateKey = "payment-cryptography:CreateKey";
	/** [Write] payment-cryptography:DecryptData */
	static readonly DecryptData = "payment-cryptography:DecryptData";
	/** [Write] payment-cryptography:DeleteAlias */
	static readonly DeleteAlias = "payment-cryptography:DeleteAlias";
	/** [Write] payment-cryptography:DeleteKey */
	static readonly DeleteKey = "payment-cryptography:DeleteKey";
	/** [PermissionManagement] payment-cryptography:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"payment-cryptography:DeleteResourcePolicy";
	/** [Write] payment-cryptography:DisableDefaultKeyReplicationRegions */
	static readonly DisableDefaultKeyReplicationRegions =
		"payment-cryptography:DisableDefaultKeyReplicationRegions";
	/** [Write] payment-cryptography:DisassociateMpaTeam */
	static readonly DisassociateMpaTeam =
		"payment-cryptography:DisassociateMpaTeam";
	/** [Write] payment-cryptography:EnableDefaultKeyReplicationRegions */
	static readonly EnableDefaultKeyReplicationRegions =
		"payment-cryptography:EnableDefaultKeyReplicationRegions";
	/** [Write] payment-cryptography:EncryptData */
	static readonly EncryptData = "payment-cryptography:EncryptData";
	/** [Write] payment-cryptography:ExportKey */
	static readonly ExportKey = "payment-cryptography:ExportKey";
	/** [Write] payment-cryptography:GenerateAs2805KekValidation */
	static readonly GenerateAs2805KekValidation =
		"payment-cryptography:GenerateAs2805KekValidation";
	/** [Write] payment-cryptography:GenerateCardValidationData */
	static readonly GenerateCardValidationData =
		"payment-cryptography:GenerateCardValidationData";
	/** [Write] payment-cryptography:GenerateMac */
	static readonly GenerateMac = "payment-cryptography:GenerateMac";
	/** [Write] payment-cryptography:GenerateMacEmvPinChange */
	static readonly GenerateMacEmvPinChange =
		"payment-cryptography:GenerateMacEmvPinChange";
	/** [Write] payment-cryptography:GeneratePinData */
	static readonly GeneratePinData = "payment-cryptography:GeneratePinData";
	/** [Read] payment-cryptography:GetAlias */
	static readonly actionGetAlias = "payment-cryptography:GetAlias";
	/** [Read] payment-cryptography:GetCertificateSigningRequest */
	static readonly actionGetCertificateSigningRequest =
		"payment-cryptography:GetCertificateSigningRequest";
	/** [Read] payment-cryptography:GetDefaultKeyReplicationRegions */
	static readonly actionGetDefaultKeyReplicationRegions =
		"payment-cryptography:GetDefaultKeyReplicationRegions";
	/** [Read] payment-cryptography:GetKey */
	static readonly actionGetKey = "payment-cryptography:GetKey";
	/** [Read] payment-cryptography:GetMpaTeamAssociation */
	static readonly actionGetMpaTeamAssociation =
		"payment-cryptography:GetMpaTeamAssociation";
	/** [Read] payment-cryptography:GetParametersForExport */
	static readonly actionGetParametersForExport =
		"payment-cryptography:GetParametersForExport";
	/** [Read] payment-cryptography:GetParametersForImport */
	static readonly actionGetParametersForImport =
		"payment-cryptography:GetParametersForImport";
	/** [Read] payment-cryptography:GetPublicKeyCertificate */
	static readonly actionGetPublicKeyCertificate =
		"payment-cryptography:GetPublicKeyCertificate";
	/** [Read] payment-cryptography:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"payment-cryptography:GetResourcePolicy";
	/** [Write] payment-cryptography:ImportKey */
	static readonly ImportKey = "payment-cryptography:ImportKey";
	/** [List] payment-cryptography:ListAliases */
	static readonly ListAliases = "payment-cryptography:ListAliases";
	/** [List] payment-cryptography:ListKeys */
	static readonly ListKeys = "payment-cryptography:ListKeys";
	/** [Read] payment-cryptography:ListTagsForResource */
	static readonly ListTagsForResource =
		"payment-cryptography:ListTagsForResource";
	/** [PermissionManagement] payment-cryptography:PutResourcePolicy */
	static readonly PutResourcePolicy = "payment-cryptography:PutResourcePolicy";
	/** [Write] payment-cryptography:ReEncryptData */
	static readonly ReEncryptData = "payment-cryptography:ReEncryptData";
	/** [Write] payment-cryptography:RemoveKeyReplicationRegions */
	static readonly RemoveKeyReplicationRegions =
		"payment-cryptography:RemoveKeyReplicationRegions";
	/** [Write] payment-cryptography:RestoreKey */
	static readonly RestoreKey = "payment-cryptography:RestoreKey";
	/** [Write] payment-cryptography:StartKeyUsage */
	static readonly StartKeyUsage = "payment-cryptography:StartKeyUsage";
	/** [Write] payment-cryptography:StopKeyUsage */
	static readonly StopKeyUsage = "payment-cryptography:StopKeyUsage";
	/** [Tagging] payment-cryptography:TagResource */
	static readonly TagResource = "payment-cryptography:TagResource";
	/** [Write] payment-cryptography:TranslateKeyMaterial */
	static readonly TranslateKeyMaterial =
		"payment-cryptography:TranslateKeyMaterial";
	/** [Write] payment-cryptography:TranslatePinData */
	static readonly TranslatePinData = "payment-cryptography:TranslatePinData";
	/** [Tagging] payment-cryptography:UntagResource */
	static readonly UntagResource = "payment-cryptography:UntagResource";
	/** [Write] payment-cryptography:UpdateAlias */
	static readonly UpdateAlias = "payment-cryptography:UpdateAlias";
	/** [Write] payment-cryptography:VerifyAuthRequestCryptogram */
	static readonly VerifyAuthRequestCryptogram =
		"payment-cryptography:VerifyAuthRequestCryptogram";
	/** [Write] payment-cryptography:VerifyCardValidationData */
	static readonly VerifyCardValidationData =
		"payment-cryptography:VerifyCardValidationData";
	/** [Write] payment-cryptography:VerifyMac */
	static readonly VerifyMac = "payment-cryptography:VerifyMac";
	/** [Write] payment-cryptography:VerifyPinData */
	static readonly VerifyPinData = "payment-cryptography:VerifyPinData";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PaymentCryptographyActions.actionGetAlias,
		PaymentCryptographyActions.actionGetCertificateSigningRequest,
		PaymentCryptographyActions.actionGetDefaultKeyReplicationRegions,
		PaymentCryptographyActions.actionGetKey,
		PaymentCryptographyActions.actionGetMpaTeamAssociation,
		PaymentCryptographyActions.actionGetParametersForExport,
		PaymentCryptographyActions.actionGetParametersForImport,
		PaymentCryptographyActions.actionGetPublicKeyCertificate,
		PaymentCryptographyActions.actionGetResourcePolicy,
		PaymentCryptographyActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PaymentCryptographyActions.AddKeyReplicationRegions,
		PaymentCryptographyActions.AssociateMpaTeam,
		PaymentCryptographyActions.CreateAlias,
		PaymentCryptographyActions.CreateKey,
		PaymentCryptographyActions.DecryptData,
		PaymentCryptographyActions.DeleteAlias,
		PaymentCryptographyActions.DeleteKey,
		PaymentCryptographyActions.DisableDefaultKeyReplicationRegions,
		PaymentCryptographyActions.DisassociateMpaTeam,
		PaymentCryptographyActions.EnableDefaultKeyReplicationRegions,
		PaymentCryptographyActions.EncryptData,
		PaymentCryptographyActions.ExportKey,
		PaymentCryptographyActions.GenerateAs2805KekValidation,
		PaymentCryptographyActions.GenerateCardValidationData,
		PaymentCryptographyActions.GenerateMac,
		PaymentCryptographyActions.GenerateMacEmvPinChange,
		PaymentCryptographyActions.GeneratePinData,
		PaymentCryptographyActions.ImportKey,
		PaymentCryptographyActions.ReEncryptData,
		PaymentCryptographyActions.RemoveKeyReplicationRegions,
		PaymentCryptographyActions.RestoreKey,
		PaymentCryptographyActions.StartKeyUsage,
		PaymentCryptographyActions.StopKeyUsage,
		PaymentCryptographyActions.TranslateKeyMaterial,
		PaymentCryptographyActions.TranslatePinData,
		PaymentCryptographyActions.UpdateAlias,
		PaymentCryptographyActions.VerifyAuthRequestCryptogram,
		PaymentCryptographyActions.VerifyCardValidationData,
		PaymentCryptographyActions.VerifyMac,
		PaymentCryptographyActions.VerifyPinData,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PaymentCryptographyActions.ListAliases,
		PaymentCryptographyActions.ListKeys,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		PaymentCryptographyActions.DeleteResourcePolicy,
		PaymentCryptographyActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PaymentCryptographyActions.TagResource,
		PaymentCryptographyActions.UntagResource,
	];
}

/**
 * Properties for building a alias ARN.
 */
export interface PaymentCryptographyAliasArnProps {
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
export interface PaymentCryptographyAliasArnComponents {
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
 * Properties for building a approval-team ARN.
 */
export interface PaymentCryptographyApprovalTeamArnProps {
	/** The ApprovalTeamId component of the ARN. */
	readonly approvalTeamId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a approval-team ARN.
 */
export interface PaymentCryptographyApprovalTeamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApprovalTeamId component. */
	readonly approvalTeamId: string;
}

/**
 * Properties for building a key ARN.
 */
export interface PaymentCryptographyKeyArnProps {
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
export interface PaymentCryptographyKeyArnComponents {
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
	/^arn:(?<partition>[^:]+):payment-cryptography:(?<region>[^:]*):(?<account>[^:]*):alias\/(?<alias>[^:/?]+)$/;
const ApprovalTeamArnRegex =
	/^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):approval-team\/(?<approvalTeamId>[^:/?]+)$/;
const KeyArnRegex =
	/^arn:(?<partition>[^:]+):payment-cryptography:(?<region>[^:]*):(?<account>[^:]*):key\/(?<keyId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for payment-cryptography resources.
 */
export class PaymentCryptographyResources {
	/**
	 * Builds an ARN for the alias resource.
	 */
	static alias(props: PaymentCryptographyAliasArnProps): string {
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
	static parseAliasArn(arn: string): PaymentCryptographyAliasArnComponents {
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
	static approvalTeam(props: PaymentCryptographyApprovalTeamArnProps): string {
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
	static parseApprovalTeamArn(
		arn: string,
	): PaymentCryptographyApprovalTeamArnComponents {
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
	static key(props: PaymentCryptographyKeyArnProps): string {
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
	static parseKeyArn(arn: string): PaymentCryptographyKeyArnComponents {
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
	static readonly AddKeyReplicationRegions: string[] = [
		"payment-cryptography:AddKeyReplicationRegions",
	];
	/** IAM actions required for the AssociateMpaTeam API call. */
	static readonly AssociateMpaTeam: string[] = [
		"payment-cryptography:AssociateMpaTeam",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CreateAlias: string[] = ["payment-cryptography:CreateAlias"];
	/** IAM actions required for the CreateKey API call. */
	static readonly CreateKey: string[] = [
		"payment-cryptography:CreateKey",
		"payment-cryptography:TagResource",
	];
	/** IAM actions required for the DecryptData API call. */
	static readonly DecryptData: string[] = [];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DeleteAlias: string[] = ["payment-cryptography:DeleteAlias"];
	/** IAM actions required for the DeleteKey API call. */
	static readonly DeleteKey: string[] = ["payment-cryptography:DeleteKey"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"payment-cryptography:DeleteResourcePolicy",
	];
	/** IAM actions required for the DisableDefaultKeyReplicationRegions API call. */
	static readonly DisableDefaultKeyReplicationRegions: string[] = [
		"payment-cryptography:DisableDefaultKeyReplicationRegions",
	];
	/** IAM actions required for the DisassociateMpaTeam API call. */
	static readonly DisassociateMpaTeam: string[] = [
		"payment-cryptography:DisassociateMpaTeam",
	];
	/** IAM actions required for the EnableDefaultKeyReplicationRegions API call. */
	static readonly EnableDefaultKeyReplicationRegions: string[] = [
		"payment-cryptography:EnableDefaultKeyReplicationRegions",
	];
	/** IAM actions required for the EncryptData API call. */
	static readonly EncryptData: string[] = [];
	/** IAM actions required for the ExportKey API call. */
	static readonly ExportKey: string[] = ["payment-cryptography:ExportKey"];
	/** IAM actions required for the GenerateAs2805KekValidation API call. */
	static readonly GenerateAs2805KekValidation: string[] = [];
	/** IAM actions required for the GenerateAuthRequestCryptogram API call. */
	static readonly GenerateAuthRequestCryptogram: string[] = [];
	/** IAM actions required for the GenerateCardValidationData API call. */
	static readonly GenerateCardValidationData: string[] = [];
	/** IAM actions required for the GenerateMac API call. */
	static readonly GenerateMac: string[] = [];
	/** IAM actions required for the GenerateMacEmvPinChange API call. */
	static readonly GenerateMacEmvPinChange: string[] = [];
	/** IAM actions required for the GeneratePinData API call. */
	static readonly GeneratePinData: string[] = [];
	/** IAM actions required for the GetAlias API call. */
	static readonly opGetAlias: string[] = ["payment-cryptography:GetAlias"];
	/** IAM actions required for the GetCertificateSigningRequest API call. */
	static readonly opGetCertificateSigningRequest: string[] = [
		"payment-cryptography:GetCertificateSigningRequest",
	];
	/** IAM actions required for the GetDefaultKeyReplicationRegions API call. */
	static readonly opGetDefaultKeyReplicationRegions: string[] = [
		"payment-cryptography:GetDefaultKeyReplicationRegions",
	];
	/** IAM actions required for the GetKey API call. */
	static readonly opGetKey: string[] = ["payment-cryptography:GetKey"];
	/** IAM actions required for the GetMpaTeamAssociation API call. */
	static readonly opGetMpaTeamAssociation: string[] = [
		"payment-cryptography:GetMpaTeamAssociation",
	];
	/** IAM actions required for the GetParametersForExport API call. */
	static readonly opGetParametersForExport: string[] = [
		"payment-cryptography:GetParametersForExport",
	];
	/** IAM actions required for the GetParametersForImport API call. */
	static readonly opGetParametersForImport: string[] = [
		"payment-cryptography:GetParametersForImport",
	];
	/** IAM actions required for the GetPublicKeyCertificate API call. */
	static readonly opGetPublicKeyCertificate: string[] = [
		"payment-cryptography:GetPublicKeyCertificate",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"payment-cryptography:GetResourcePolicy",
	];
	/** IAM actions required for the ImportKey API call. */
	static readonly ImportKey: string[] = [
		"payment-cryptography:ImportKey",
		"payment-cryptography:TagResource",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly ListAliases: string[] = ["payment-cryptography:ListAliases"];
	/** IAM actions required for the ListKeys API call. */
	static readonly ListKeys: string[] = ["payment-cryptography:ListKeys"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"payment-cryptography:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"payment-cryptography:PutResourcePolicy",
	];
	/** IAM actions required for the ReEncryptData API call. */
	static readonly ReEncryptData: string[] = [];
	/** IAM actions required for the RemoveKeyReplicationRegions API call. */
	static readonly RemoveKeyReplicationRegions: string[] = [
		"payment-cryptography:RemoveKeyReplicationRegions",
	];
	/** IAM actions required for the RestoreKey API call. */
	static readonly RestoreKey: string[] = ["payment-cryptography:RestoreKey"];
	/** IAM actions required for the StartKeyUsage API call. */
	static readonly StartKeyUsage: string[] = [
		"payment-cryptography:StartKeyUsage",
	];
	/** IAM actions required for the StopKeyUsage API call. */
	static readonly StopKeyUsage: string[] = [
		"payment-cryptography:StopKeyUsage",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["payment-cryptography:TagResource"];
	/** IAM actions required for the TranslateKeyMaterial API call. */
	static readonly TranslateKeyMaterial: string[] = [];
	/** IAM actions required for the TranslatePinData API call. */
	static readonly TranslatePinData: string[] = [];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"payment-cryptography:UntagResource",
	];
	/** IAM actions required for the UpdateAlias API call. */
	static readonly UpdateAlias: string[] = ["payment-cryptography:UpdateAlias"];
	/** IAM actions required for the VerifyAuthRequestCryptogram API call. */
	static readonly VerifyAuthRequestCryptogram: string[] = [];
	/** IAM actions required for the VerifyCardValidationData API call. */
	static readonly VerifyCardValidationData: string[] = [];
	/** IAM actions required for the VerifyMac API call. */
	static readonly VerifyMac: string[] = [];
	/** IAM actions required for the VerifyPinData API call. */
	static readonly VerifyPinData: string[] = [];
}

/**
 * Condition key constants and builders for payment-cryptography.
 */
export class PaymentCryptographyConditions {
	/** Condition keys applicable to the AddKeyReplicationRegions action. */
	static readonly AddKeyReplicationRegionsConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the CreateKey action. */
	static readonly CreateKeyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"payment-cryptography:KeyAlgorithm",
		"payment-cryptography:KeyClass",
		"payment-cryptography:KeyUsage",
	];
	/** Condition keys applicable to the DecryptData action. */
	static readonly DecryptDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the DeleteAlias action. */
	static readonly DeleteAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteKey action. */
	static readonly DeleteKeyConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the EncryptData action. */
	static readonly EncryptDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the ExportKey action. */
	static readonly ExportKeyConditionKeys: string[] = [
		"payment-cryptography:CertificateAuthorityPublicKeyIdentifier",
		"payment-cryptography:RequestAlias",
		"payment-cryptography:WrappingKeyIdentifier",
	];
	/** Condition keys applicable to the GenerateAs2805KekValidation action. */
	static readonly GenerateAs2805KekValidationConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GenerateCardValidationData action. */
	static readonly GenerateCardValidationDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GenerateMac action. */
	static readonly GenerateMacConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GenerateMacEmvPinChange action. */
	static readonly GenerateMacEmvPinChangeConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GeneratePinData action. */
	static readonly GeneratePinDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GetAlias action. */
	static readonly actionGetAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetCertificateSigningRequest action. */
	static readonly actionGetCertificateSigningRequestConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GetKey action. */
	static readonly actionGetKeyConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the GetPublicKeyCertificate action. */
	static readonly actionGetPublicKeyCertificateConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the ImportKey action. */
	static readonly ImportKeyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"payment-cryptography:CertificateAuthorityPublicKeyIdentifier",
		"payment-cryptography:ImportKeyMaterial",
		"payment-cryptography:WrappingKeyIdentifier",
	];
	/** Condition keys applicable to the ReEncryptData action. */
	static readonly ReEncryptDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the RemoveKeyReplicationRegions action. */
	static readonly RemoveKeyReplicationRegionsConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the RestoreKey action. */
	static readonly RestoreKeyConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the StartKeyUsage action. */
	static readonly StartKeyUsageConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the StopKeyUsage action. */
	static readonly StopKeyUsageConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TranslateKeyMaterial action. */
	static readonly TranslateKeyMaterialConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the TranslatePinData action. */
	static readonly TranslatePinDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAlias action. */
	static readonly UpdateAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the VerifyAuthRequestCryptogram action. */
	static readonly VerifyAuthRequestCryptogramConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the VerifyCardValidationData action. */
	static readonly VerifyCardValidationDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the VerifyMac action. */
	static readonly VerifyMacConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];
	/** Condition keys applicable to the VerifyPinData action. */
	static readonly VerifyPinDataConditionKeys: string[] = [
		"payment-cryptography:RequestAlias",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
