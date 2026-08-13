// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/acm.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the acm service.
 */
export class ACMActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "acm";

	/** [Tagging] acm:AddTagsToCertificate */
	static readonly AddTagsToCertificate = "acm:AddTagsToCertificate";
	/** [Write] acm:CreateAcmeDomainValidation */
	static readonly CreateAcmeDomainValidation = "acm:CreateAcmeDomainValidation";
	/** [Write] acm:CreateAcmeEndpoint */
	static readonly CreateAcmeEndpoint = "acm:CreateAcmeEndpoint";
	/** [Write] acm:CreateAcmeExternalAccountBinding */
	static readonly CreateAcmeExternalAccountBinding =
		"acm:CreateAcmeExternalAccountBinding";
	/** [Write] acm:DeleteAcmeDomainValidation */
	static readonly DeleteAcmeDomainValidation = "acm:DeleteAcmeDomainValidation";
	/** [Write] acm:DeleteAcmeEndpoint */
	static readonly DeleteAcmeEndpoint = "acm:DeleteAcmeEndpoint";
	/** [Write] acm:DeleteAcmeExternalAccountBinding */
	static readonly DeleteAcmeExternalAccountBinding =
		"acm:DeleteAcmeExternalAccountBinding";
	/** [Write] acm:DeleteCertificate */
	static readonly DeleteCertificate = "acm:DeleteCertificate";
	/** [Read] acm:DescribeAcmeAccount */
	static readonly DescribeAcmeAccount = "acm:DescribeAcmeAccount";
	/** [Read] acm:DescribeAcmeDomainValidation */
	static readonly DescribeAcmeDomainValidation =
		"acm:DescribeAcmeDomainValidation";
	/** [Read] acm:DescribeAcmeEndpoint */
	static readonly DescribeAcmeEndpoint = "acm:DescribeAcmeEndpoint";
	/** [Read] acm:DescribeAcmeExternalAccountBinding */
	static readonly DescribeAcmeExternalAccountBinding =
		"acm:DescribeAcmeExternalAccountBinding";
	/** [Read] acm:DescribeCertificate */
	static readonly DescribeCertificate = "acm:DescribeCertificate";
	/** [Read] acm:ExportCertificate */
	static readonly ExportCertificate = "acm:ExportCertificate";
	/** [Read] acm:GetAccountConfiguration */
	static readonly actionGetAccountConfiguration = "acm:GetAccountConfiguration";
	/** [Read] acm:GetAcmeExternalAccountBindingCredentials */
	static readonly actionGetAcmeExternalAccountBindingCredentials =
		"acm:GetAcmeExternalAccountBindingCredentials";
	/** [Read] acm:GetCertificate */
	static readonly actionGetCertificate = "acm:GetCertificate";
	/** [Write] acm:ImportCertificate */
	static readonly ImportCertificate = "acm:ImportCertificate";
	/** [List] acm:ListAcmeAccounts */
	static readonly ListAcmeAccounts = "acm:ListAcmeAccounts";
	/** [List] acm:ListAcmeDomainValidations */
	static readonly ListAcmeDomainValidations = "acm:ListAcmeDomainValidations";
	/** [List] acm:ListAcmeEndpoints */
	static readonly ListAcmeEndpoints = "acm:ListAcmeEndpoints";
	/** [List] acm:ListAcmeExternalAccountBindings */
	static readonly ListAcmeExternalAccountBindings =
		"acm:ListAcmeExternalAccountBindings";
	/** [List] acm:ListCertificates */
	static readonly ListCertificates = "acm:ListCertificates";
	/** [Read] acm:ListTagsForCertificate */
	static readonly ListTagsForCertificate = "acm:ListTagsForCertificate";
	/** [Read] acm:ListTagsForResource */
	static readonly ListTagsForResource = "acm:ListTagsForResource";
	/** [Write] acm:PutAccountConfiguration */
	static readonly PutAccountConfiguration = "acm:PutAccountConfiguration";
	/** [Tagging] acm:RemoveTagsFromCertificate */
	static readonly RemoveTagsFromCertificate = "acm:RemoveTagsFromCertificate";
	/** [Write] acm:RenewCertificate */
	static readonly RenewCertificate = "acm:RenewCertificate";
	/** [Write] acm:RequestCertificate */
	static readonly RequestCertificate = "acm:RequestCertificate";
	/** [Write] acm:ResendValidationEmail */
	static readonly ResendValidationEmail = "acm:ResendValidationEmail";
	/** [Write] acm:RevokeAcmeAccount */
	static readonly RevokeAcmeAccount = "acm:RevokeAcmeAccount";
	/** [Write] acm:RevokeAcmeExternalAccountBinding */
	static readonly RevokeAcmeExternalAccountBinding =
		"acm:RevokeAcmeExternalAccountBinding";
	/** [Write] acm:RevokeCertificate */
	static readonly RevokeCertificate = "acm:RevokeCertificate";
	/** [List] acm:SearchCertificates */
	static readonly SearchCertificates = "acm:SearchCertificates";
	/** [Tagging] acm:TagResource */
	static readonly TagResource = "acm:TagResource";
	/** [Tagging] acm:UntagResource */
	static readonly UntagResource = "acm:UntagResource";
	/** [Write] acm:UpdateAcmeDomainValidation */
	static readonly UpdateAcmeDomainValidation = "acm:UpdateAcmeDomainValidation";
	/** [Write] acm:UpdateAcmeEndpoint */
	static readonly UpdateAcmeEndpoint = "acm:UpdateAcmeEndpoint";
	/** [Write] acm:UpdateCertificate */
	static readonly UpdateCertificate = "acm:UpdateCertificate";
	/** [Write] acm:UpdateCertificateOptions */
	static readonly UpdateCertificateOptions = "acm:UpdateCertificateOptions";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ACMActions.DescribeAcmeAccount,
		ACMActions.DescribeAcmeDomainValidation,
		ACMActions.DescribeAcmeEndpoint,
		ACMActions.DescribeAcmeExternalAccountBinding,
		ACMActions.DescribeCertificate,
		ACMActions.ExportCertificate,
		ACMActions.actionGetAccountConfiguration,
		ACMActions.actionGetAcmeExternalAccountBindingCredentials,
		ACMActions.actionGetCertificate,
		ACMActions.ListTagsForCertificate,
		ACMActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ACMActions.CreateAcmeDomainValidation,
		ACMActions.CreateAcmeEndpoint,
		ACMActions.CreateAcmeExternalAccountBinding,
		ACMActions.DeleteAcmeDomainValidation,
		ACMActions.DeleteAcmeEndpoint,
		ACMActions.DeleteAcmeExternalAccountBinding,
		ACMActions.DeleteCertificate,
		ACMActions.ImportCertificate,
		ACMActions.PutAccountConfiguration,
		ACMActions.RenewCertificate,
		ACMActions.RequestCertificate,
		ACMActions.ResendValidationEmail,
		ACMActions.RevokeAcmeAccount,
		ACMActions.RevokeAcmeExternalAccountBinding,
		ACMActions.RevokeCertificate,
		ACMActions.UpdateAcmeDomainValidation,
		ACMActions.UpdateAcmeEndpoint,
		ACMActions.UpdateCertificate,
		ACMActions.UpdateCertificateOptions,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ACMActions.ListAcmeAccounts,
		ACMActions.ListAcmeDomainValidations,
		ACMActions.ListAcmeEndpoints,
		ACMActions.ListAcmeExternalAccountBindings,
		ACMActions.ListCertificates,
		ACMActions.SearchCertificates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ACMActions.AddTagsToCertificate,
		ACMActions.RemoveTagsFromCertificate,
		ACMActions.TagResource,
		ACMActions.UntagResource,
	];
}

/**
 * Properties for building a acme-domain-validation ARN.
 */
export interface ACMAcmeDomainValidationArnProps {
	/** The AcmeEndpointId component of the ARN. */
	readonly acmeEndpointId: string;
	/** The AcmeDomainValidationId component of the ARN. */
	readonly acmeDomainValidationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a acme-domain-validation ARN.
 */
export interface ACMAcmeDomainValidationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AcmeEndpointId component. */
	readonly acmeEndpointId: string;
	/** The AcmeDomainValidationId component. */
	readonly acmeDomainValidationId: string;
}

/**
 * Properties for building a acme-endpoint ARN.
 */
export interface ACMAcmeEndpointArnProps {
	/** The AcmeEndpointId component of the ARN. */
	readonly acmeEndpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a acme-endpoint ARN.
 */
export interface ACMAcmeEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AcmeEndpointId component. */
	readonly acmeEndpointId: string;
}

/**
 * Properties for building a acme-external-account-binding ARN.
 */
export interface ACMAcmeExternalAccountBindingArnProps {
	/** The AcmeEndpointId component of the ARN. */
	readonly acmeEndpointId: string;
	/** The ExternalAccountBindingId component of the ARN. */
	readonly externalAccountBindingId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a acme-external-account-binding ARN.
 */
export interface ACMAcmeExternalAccountBindingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AcmeEndpointId component. */
	readonly acmeEndpointId: string;
	/** The ExternalAccountBindingId component. */
	readonly externalAccountBindingId: string;
}

/**
 * Properties for building a certificate ARN.
 */
export interface ACMCertificateArnProps {
	/** The CertificateId component of the ARN. */
	readonly certificateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a certificate ARN.
 */
export interface ACMCertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CertificateId component. */
	readonly certificateId: string;
}

const AcmeDomainValidationArnRegex =
	/^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):acme-endpoint\/(?<acmeEndpointId>[^:/?]+)\/acme-domain-validation\/(?<acmeDomainValidationId>[^:/?]+)$/;
const AcmeEndpointArnRegex =
	/^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):acme-endpoint\/(?<acmeEndpointId>[^:/?]+)$/;
const AcmeExternalAccountBindingArnRegex =
	/^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):acme-endpoint\/(?<acmeEndpointId>[^:/?]+)\/acme-external-account-binding\/(?<externalAccountBindingId>[^:/?]+)$/;
const CertificateArnRegex =
	/^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):certificate\/(?<certificateId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for acm resources.
 */
export class ACMResources {
	/**
	 * Builds an ARN for the acme-domain-validation resource.
	 */
	static acmeDomainValidation(props: ACMAcmeDomainValidationArnProps): string {
		return `arn:${props.partition ?? "aws"}:acm:${props.region ?? "*"}:${props.account ?? "*"}:acme-endpoint/${props.acmeEndpointId}/acme-domain-validation/${props.acmeDomainValidationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the acme-domain-validation resource.
	 */
	static isValidAcmeDomainValidationArn(arn: string): boolean {
		return AcmeDomainValidationArnRegex.test(arn);
	}

	/**
	 * Parses a acme-domain-validation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAcmeDomainValidationArn(
		arn: string,
	): ACMAcmeDomainValidationArnComponents {
		const match = AcmeDomainValidationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid acme-domain-validation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			acmeEndpointId: match.groups!.acmeEndpointId,
			acmeDomainValidationId: match.groups!.acmeDomainValidationId,
		};
	}

	/**
	 * Builds an ARN for the acme-endpoint resource.
	 */
	static acmeEndpoint(props: ACMAcmeEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:acm:${props.region ?? "*"}:${props.account ?? "*"}:acme-endpoint/${props.acmeEndpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the acme-endpoint resource.
	 */
	static isValidAcmeEndpointArn(arn: string): boolean {
		return AcmeEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a acme-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAcmeEndpointArn(arn: string): ACMAcmeEndpointArnComponents {
		const match = AcmeEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid acme-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			acmeEndpointId: match.groups!.acmeEndpointId,
		};
	}

	/**
	 * Builds an ARN for the acme-external-account-binding resource.
	 */
	static acmeExternalAccountBinding(
		props: ACMAcmeExternalAccountBindingArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:acm:${props.region ?? "*"}:${props.account ?? "*"}:acme-endpoint/${props.acmeEndpointId}/acme-external-account-binding/${props.externalAccountBindingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the acme-external-account-binding resource.
	 */
	static isValidAcmeExternalAccountBindingArn(arn: string): boolean {
		return AcmeExternalAccountBindingArnRegex.test(arn);
	}

	/**
	 * Parses a acme-external-account-binding ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAcmeExternalAccountBindingArn(
		arn: string,
	): ACMAcmeExternalAccountBindingArnComponents {
		const match = AcmeExternalAccountBindingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid acme-external-account-binding ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			acmeEndpointId: match.groups!.acmeEndpointId,
			externalAccountBindingId: match.groups!.externalAccountBindingId,
		};
	}

	/**
	 * Builds an ARN for the certificate resource.
	 */
	static certificate(props: ACMCertificateArnProps): string {
		return `arn:${props.partition ?? "aws"}:acm:${props.region ?? "*"}:${props.account ?? "*"}:certificate/${props.certificateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the certificate resource.
	 */
	static isValidCertificateArn(arn: string): boolean {
		return CertificateArnRegex.test(arn);
	}

	/**
	 * Parses a certificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateArn(arn: string): ACMCertificateArnComponents {
		const match = CertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid certificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			certificateId: match.groups!.certificateId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for acm.
 */
export class ACMOperations {
	/** IAM actions required for the AddTagsToCertificate API call. */
	static readonly AddTagsToCertificate: string[] = ["acm:AddTagsToCertificate"];
	/** IAM actions required for the CreateAcmeDomainValidation API call. */
	static readonly CreateAcmeDomainValidation: string[] = [];
	/** IAM actions required for the CreateAcmeEndpoint API call. */
	static readonly CreateAcmeEndpoint: string[] = [];
	/** IAM actions required for the CreateAcmeExternalAccountBinding API call. */
	static readonly CreateAcmeExternalAccountBinding: string[] = [];
	/** IAM actions required for the DeleteAcmeDomainValidation API call. */
	static readonly DeleteAcmeDomainValidation: string[] = [];
	/** IAM actions required for the DeleteAcmeEndpoint API call. */
	static readonly DeleteAcmeEndpoint: string[] = [];
	/** IAM actions required for the DeleteAcmeExternalAccountBinding API call. */
	static readonly DeleteAcmeExternalAccountBinding: string[] = [];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DeleteCertificate: string[] = ["acm:DeleteCertificate"];
	/** IAM actions required for the DescribeAcmeAccount API call. */
	static readonly DescribeAcmeAccount: string[] = [];
	/** IAM actions required for the DescribeAcmeDomainValidation API call. */
	static readonly DescribeAcmeDomainValidation: string[] = [];
	/** IAM actions required for the DescribeAcmeEndpoint API call. */
	static readonly DescribeAcmeEndpoint: string[] = [];
	/** IAM actions required for the DescribeAcmeExternalAccountBinding API call. */
	static readonly DescribeAcmeExternalAccountBinding: string[] = [];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DescribeCertificate: string[] = ["acm:DescribeCertificate"];
	/** IAM actions required for the ExportCertificate API call. */
	static readonly ExportCertificate: string[] = ["acm:ExportCertificate"];
	/** IAM actions required for the GetAccountConfiguration API call. */
	static readonly opGetAccountConfiguration: string[] = [
		"acm:GetAccountConfiguration",
	];
	/** IAM actions required for the GetAcmeExternalAccountBindingCredentials API call. */
	static readonly opGetAcmeExternalAccountBindingCredentials: string[] = [];
	/** IAM actions required for the GetCertificate API call. */
	static readonly opGetCertificate: string[] = ["acm:GetCertificate"];
	/** IAM actions required for the ImportCertificate API call. */
	static readonly ImportCertificate: string[] = [
		"acm:AddTagsToCertificate",
		"acm:ImportCertificate",
	];
	/** IAM actions required for the ListAcmeAccounts API call. */
	static readonly ListAcmeAccounts: string[] = [];
	/** IAM actions required for the ListAcmeDomainValidations API call. */
	static readonly ListAcmeDomainValidations: string[] = [];
	/** IAM actions required for the ListAcmeEndpoints API call. */
	static readonly ListAcmeEndpoints: string[] = [];
	/** IAM actions required for the ListAcmeExternalAccountBindings API call. */
	static readonly ListAcmeExternalAccountBindings: string[] = [];
	/** IAM actions required for the ListCertificates API call. */
	static readonly ListCertificates: string[] = ["acm:ListCertificates"];
	/** IAM actions required for the ListTagsForCertificate API call. */
	static readonly ListTagsForCertificate: string[] = [
		"acm:ListTagsForCertificate",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["acm:ListTagsForResource"];
	/** IAM actions required for the PutAccountConfiguration API call. */
	static readonly PutAccountConfiguration: string[] = [
		"acm:PutAccountConfiguration",
	];
	/** IAM actions required for the RemoveTagsFromCertificate API call. */
	static readonly RemoveTagsFromCertificate: string[] = [
		"acm:RemoveTagsFromCertificate",
	];
	/** IAM actions required for the RenewCertificate API call. */
	static readonly RenewCertificate: string[] = ["acm:RenewCertificate"];
	/** IAM actions required for the RequestCertificate API call. */
	static readonly RequestCertificate: string[] = [
		"acm:AddTagsToCertificate",
		"acm:RequestCertificate",
	];
	/** IAM actions required for the ResendValidationEmail API call. */
	static readonly ResendValidationEmail: string[] = [
		"acm:ResendValidationEmail",
	];
	/** IAM actions required for the RevokeAcmeAccount API call. */
	static readonly RevokeAcmeAccount: string[] = [];
	/** IAM actions required for the RevokeAcmeExternalAccountBinding API call. */
	static readonly RevokeAcmeExternalAccountBinding: string[] = [];
	/** IAM actions required for the RevokeCertificate API call. */
	static readonly RevokeCertificate: string[] = ["acm:RevokeCertificate"];
	/** IAM actions required for the SearchCertificates API call. */
	static readonly SearchCertificates: string[] = ["acm:SearchCertificates"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["acm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["acm:UntagResource"];
	/** IAM actions required for the UpdateAcmeDomainValidation API call. */
	static readonly UpdateAcmeDomainValidation: string[] = [];
	/** IAM actions required for the UpdateAcmeEndpoint API call. */
	static readonly UpdateAcmeEndpoint: string[] = [];
	/** IAM actions required for the UpdateCertificateOptions API call. */
	static readonly UpdateCertificateOptions: string[] = [
		"acm:UpdateCertificateOptions",
	];
}

/**
 * Condition key constants and builders for acm.
 */
export class ACMConditions {
	/** Condition keys applicable to the AddTagsToCertificate action. */
	static readonly AddTagsToCertificateConditionKeys: string[] = [
		"acm:CertificateKeyPairOrigin",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcmeDomainValidation action. */
	static readonly CreateAcmeDomainValidationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcmeEndpoint action. */
	static readonly CreateAcmeEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcmeExternalAccountBinding action. */
	static readonly CreateAcmeExternalAccountBindingConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCertificate action. */
	static readonly DeleteCertificateConditionKeys: string[] = [
		"acm:CertificateKeyPairOrigin",
	];
	/** Condition keys applicable to the ExportCertificate action. */
	static readonly ExportCertificateConditionKeys: string[] = [
		"acm:DomainNames",
	];
	/** Condition keys applicable to the ImportCertificate action. */
	static readonly ImportCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromCertificate action. */
	static readonly RemoveTagsFromCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RequestCertificate action. */
	static readonly RequestCertificateConditionKeys: string[] = [
		"acm:CertificateAuthority",
		"acm:CertificateKeyPairOrigin",
		"acm:CertificateTransparencyLogging",
		"acm:DomainNames",
		"acm:Export",
		"acm:KeyAlgorithm",
		"acm:ValidationMethod",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RevokeCertificate action. */
	static readonly RevokeCertificateConditionKeys: string[] = [
		"acm:CertificateKeyPairOrigin",
		"acm:DomainNames",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCertificate action. */
	static readonly UpdateCertificateConditionKeys: string[] = [
		"acm:CertificateKeyPairOrigin",
	];

	/** Condition key: acm:CertificateAuthority (String) */
	static readonly CERTIFICATE_AUTHORITY = "acm:CertificateAuthority";
	/** Condition key: acm:CertificateKeyPairOrigin (String) */
	static readonly CERTIFICATE_KEY_PAIR_ORIGIN = "acm:CertificateKeyPairOrigin";
	/** Condition key: acm:CertificateTransparencyLogging (String) */
	static readonly CERTIFICATE_TRANSPARENCY_LOGGING =
		"acm:CertificateTransparencyLogging";
	/** Condition key: acm:DomainNames (ArrayOfString) */
	static readonly DOMAIN_NAMES = "acm:DomainNames";
	/** Condition key: acm:Export (String) */
	static readonly EXPORT = "acm:Export";
	/** Condition key: acm:KeyAlgorithm (String) */
	static readonly KEY_ALGORITHM = "acm:KeyAlgorithm";
	/** Condition key: acm:ValidationMethod (String) */
	static readonly VALIDATION_METHOD = "acm:ValidationMethod";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `acm:CertificateAuthority`.
	 */
	static certificateAuthority(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "acm:CertificateAuthority": value } };
	}

	/**
	 * Generates a condition block for `acm:CertificateKeyPairOrigin`.
	 */
	static certificateKeyPairOrigin(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "acm:CertificateKeyPairOrigin": value } };
	}

	/**
	 * Generates a condition block for `acm:CertificateTransparencyLogging`.
	 */
	static certificateTransparencyLogging(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "acm:CertificateTransparencyLogging": value } };
	}

	/**
	 * Generates a condition block for `acm:DomainNames`.
	 */
	static domainNames(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "acm:DomainNames": values } };
	}

	/**
	 * Generates a condition block for `acm:Export`.
	 */
	static export(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "acm:Export": value } };
	}

	/**
	 * Generates a condition block for `acm:KeyAlgorithm`.
	 */
	static keyAlgorithm(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "acm:KeyAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `acm:ValidationMethod`.
	 */
	static validationMethod(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "acm:ValidationMethod": value } };
	}

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
}
