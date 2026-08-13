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
	static readonly ADD_TAGS_TO_CERTIFICATE = "acm:AddTagsToCertificate";
	/** [Write] acm:CreateAcmeDomainValidation */
	static readonly CREATE_ACME_DOMAIN_VALIDATION =
		"acm:CreateAcmeDomainValidation";
	/** [Write] acm:CreateAcmeEndpoint */
	static readonly CREATE_ACME_ENDPOINT = "acm:CreateAcmeEndpoint";
	/** [Write] acm:CreateAcmeExternalAccountBinding */
	static readonly CREATE_ACME_EXTERNAL_ACCOUNT_BINDING =
		"acm:CreateAcmeExternalAccountBinding";
	/** [Write] acm:DeleteAcmeDomainValidation */
	static readonly DELETE_ACME_DOMAIN_VALIDATION =
		"acm:DeleteAcmeDomainValidation";
	/** [Write] acm:DeleteAcmeEndpoint */
	static readonly DELETE_ACME_ENDPOINT = "acm:DeleteAcmeEndpoint";
	/** [Write] acm:DeleteAcmeExternalAccountBinding */
	static readonly DELETE_ACME_EXTERNAL_ACCOUNT_BINDING =
		"acm:DeleteAcmeExternalAccountBinding";
	/** [Write] acm:DeleteCertificate */
	static readonly DELETE_CERTIFICATE = "acm:DeleteCertificate";
	/** [Read] acm:DescribeAcmeAccount */
	static readonly DESCRIBE_ACME_ACCOUNT = "acm:DescribeAcmeAccount";
	/** [Read] acm:DescribeAcmeDomainValidation */
	static readonly DESCRIBE_ACME_DOMAIN_VALIDATION =
		"acm:DescribeAcmeDomainValidation";
	/** [Read] acm:DescribeAcmeEndpoint */
	static readonly DESCRIBE_ACME_ENDPOINT = "acm:DescribeAcmeEndpoint";
	/** [Read] acm:DescribeAcmeExternalAccountBinding */
	static readonly DESCRIBE_ACME_EXTERNAL_ACCOUNT_BINDING =
		"acm:DescribeAcmeExternalAccountBinding";
	/** [Read] acm:DescribeCertificate */
	static readonly DESCRIBE_CERTIFICATE = "acm:DescribeCertificate";
	/** [Read] acm:ExportCertificate */
	static readonly EXPORT_CERTIFICATE = "acm:ExportCertificate";
	/** [Read] acm:GetAccountConfiguration */
	static readonly GET_ACCOUNT_CONFIGURATION = "acm:GetAccountConfiguration";
	/** [Read] acm:GetAcmeExternalAccountBindingCredentials */
	static readonly GET_ACME_EXTERNAL_ACCOUNT_BINDING_CREDENTIALS =
		"acm:GetAcmeExternalAccountBindingCredentials";
	/** [Read] acm:GetCertificate */
	static readonly GET_CERTIFICATE = "acm:GetCertificate";
	/** [Write] acm:ImportCertificate */
	static readonly IMPORT_CERTIFICATE = "acm:ImportCertificate";
	/** [List] acm:ListAcmeAccounts */
	static readonly LIST_ACME_ACCOUNTS = "acm:ListAcmeAccounts";
	/** [List] acm:ListAcmeDomainValidations */
	static readonly LIST_ACME_DOMAIN_VALIDATIONS =
		"acm:ListAcmeDomainValidations";
	/** [List] acm:ListAcmeEndpoints */
	static readonly LIST_ACME_ENDPOINTS = "acm:ListAcmeEndpoints";
	/** [List] acm:ListAcmeExternalAccountBindings */
	static readonly LIST_ACME_EXTERNAL_ACCOUNT_BINDINGS =
		"acm:ListAcmeExternalAccountBindings";
	/** [List] acm:ListCertificates */
	static readonly LIST_CERTIFICATES = "acm:ListCertificates";
	/** [Read] acm:ListTagsForCertificate */
	static readonly LIST_TAGS_FOR_CERTIFICATE = "acm:ListTagsForCertificate";
	/** [Read] acm:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "acm:ListTagsForResource";
	/** [Write] acm:PutAccountConfiguration */
	static readonly PUT_ACCOUNT_CONFIGURATION = "acm:PutAccountConfiguration";
	/** [Tagging] acm:RemoveTagsFromCertificate */
	static readonly REMOVE_TAGS_FROM_CERTIFICATE =
		"acm:RemoveTagsFromCertificate";
	/** [Write] acm:RenewCertificate */
	static readonly RENEW_CERTIFICATE = "acm:RenewCertificate";
	/** [Write] acm:RequestCertificate */
	static readonly REQUEST_CERTIFICATE = "acm:RequestCertificate";
	/** [Write] acm:ResendValidationEmail */
	static readonly RESEND_VALIDATION_EMAIL = "acm:ResendValidationEmail";
	/** [Write] acm:RevokeAcmeAccount */
	static readonly REVOKE_ACME_ACCOUNT = "acm:RevokeAcmeAccount";
	/** [Write] acm:RevokeAcmeExternalAccountBinding */
	static readonly REVOKE_ACME_EXTERNAL_ACCOUNT_BINDING =
		"acm:RevokeAcmeExternalAccountBinding";
	/** [Write] acm:RevokeCertificate */
	static readonly REVOKE_CERTIFICATE = "acm:RevokeCertificate";
	/** [List] acm:SearchCertificates */
	static readonly SEARCH_CERTIFICATES = "acm:SearchCertificates";
	/** [Tagging] acm:TagResource */
	static readonly TAG_RESOURCE = "acm:TagResource";
	/** [Tagging] acm:UntagResource */
	static readonly UNTAG_RESOURCE = "acm:UntagResource";
	/** [Write] acm:UpdateAcmeDomainValidation */
	static readonly UPDATE_ACME_DOMAIN_VALIDATION =
		"acm:UpdateAcmeDomainValidation";
	/** [Write] acm:UpdateAcmeEndpoint */
	static readonly UPDATE_ACME_ENDPOINT = "acm:UpdateAcmeEndpoint";
	/** [Write] acm:UpdateCertificate */
	static readonly UPDATE_CERTIFICATE = "acm:UpdateCertificate";
	/** [Write] acm:UpdateCertificateOptions */
	static readonly UPDATE_CERTIFICATE_OPTIONS = "acm:UpdateCertificateOptions";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ACMActions.DESCRIBE_ACME_ACCOUNT,
		ACMActions.DESCRIBE_ACME_DOMAIN_VALIDATION,
		ACMActions.DESCRIBE_ACME_ENDPOINT,
		ACMActions.DESCRIBE_ACME_EXTERNAL_ACCOUNT_BINDING,
		ACMActions.DESCRIBE_CERTIFICATE,
		ACMActions.EXPORT_CERTIFICATE,
		ACMActions.GET_ACCOUNT_CONFIGURATION,
		ACMActions.GET_ACME_EXTERNAL_ACCOUNT_BINDING_CREDENTIALS,
		ACMActions.GET_CERTIFICATE,
		ACMActions.LIST_TAGS_FOR_CERTIFICATE,
		ACMActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ACMActions.CREATE_ACME_DOMAIN_VALIDATION,
		ACMActions.CREATE_ACME_ENDPOINT,
		ACMActions.CREATE_ACME_EXTERNAL_ACCOUNT_BINDING,
		ACMActions.DELETE_ACME_DOMAIN_VALIDATION,
		ACMActions.DELETE_ACME_ENDPOINT,
		ACMActions.DELETE_ACME_EXTERNAL_ACCOUNT_BINDING,
		ACMActions.DELETE_CERTIFICATE,
		ACMActions.IMPORT_CERTIFICATE,
		ACMActions.PUT_ACCOUNT_CONFIGURATION,
		ACMActions.RENEW_CERTIFICATE,
		ACMActions.REQUEST_CERTIFICATE,
		ACMActions.RESEND_VALIDATION_EMAIL,
		ACMActions.REVOKE_ACME_ACCOUNT,
		ACMActions.REVOKE_ACME_EXTERNAL_ACCOUNT_BINDING,
		ACMActions.REVOKE_CERTIFICATE,
		ACMActions.UPDATE_ACME_DOMAIN_VALIDATION,
		ACMActions.UPDATE_ACME_ENDPOINT,
		ACMActions.UPDATE_CERTIFICATE,
		ACMActions.UPDATE_CERTIFICATE_OPTIONS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ACMActions.LIST_ACME_ACCOUNTS,
		ACMActions.LIST_ACME_DOMAIN_VALIDATIONS,
		ACMActions.LIST_ACME_ENDPOINTS,
		ACMActions.LIST_ACME_EXTERNAL_ACCOUNT_BINDINGS,
		ACMActions.LIST_CERTIFICATES,
		ACMActions.SEARCH_CERTIFICATES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ACMActions.ADD_TAGS_TO_CERTIFICATE,
		ACMActions.REMOVE_TAGS_FROM_CERTIFICATE,
		ACMActions.TAG_RESOURCE,
		ACMActions.UNTAG_RESOURCE,
	];
}

const AcmeDomainValidationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):acme-endpoint/(?<acmeEndpointId>[^:/?]+)/acme-domain-validation/(?<acmeDomainValidationId>[^:/?]+)$",
);
const AcmeEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):acme-endpoint/(?<acmeEndpointId>[^:/?]+)$",
);
const AcmeExternalAccountBindingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):acme-endpoint/(?<acmeEndpointId>[^:/?]+)/acme-external-account-binding/(?<externalAccountBindingId>[^:/?]+)$",
);
const CertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):acm:(?<region>[^:]*):(?<account>[^:]*):certificate/(?<certificateId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for acm resources.
 */
export class ACMResources {
	/**
	 * Builds an ARN for the acme-domain-validation resource.
	 */
	static acmeDomainValidation(props: {
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
	}): string {
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
	static parseAcmeDomainValidationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		acmeEndpointId: string;
		acmeDomainValidationId: string;
	} {
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
	static acmeEndpoint(props: {
		/** The AcmeEndpointId component of the ARN. */
		readonly acmeEndpointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAcmeEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		acmeEndpointId: string;
	} {
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
	static acmeExternalAccountBinding(props: {
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
	}): string {
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
	static parseAcmeExternalAccountBindingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		acmeEndpointId: string;
		externalAccountBindingId: string;
	} {
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
	static certificate(props: {
		/** The CertificateId component of the ARN. */
		readonly certificateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCertificateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		certificateId: string;
	} {
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
	static readonly ADD_TAGS_TO_CERTIFICATE: string[] = [
		"acm:AddTagsToCertificate",
	];
	/** IAM actions required for the CreateAcmeDomainValidation API call. */
	static readonly CREATE_ACME_DOMAIN_VALIDATION: string[] = [];
	/** IAM actions required for the CreateAcmeEndpoint API call. */
	static readonly CREATE_ACME_ENDPOINT: string[] = [];
	/** IAM actions required for the CreateAcmeExternalAccountBinding API call. */
	static readonly CREATE_ACME_EXTERNAL_ACCOUNT_BINDING: string[] = [];
	/** IAM actions required for the DeleteAcmeDomainValidation API call. */
	static readonly DELETE_ACME_DOMAIN_VALIDATION: string[] = [];
	/** IAM actions required for the DeleteAcmeEndpoint API call. */
	static readonly DELETE_ACME_ENDPOINT: string[] = [];
	/** IAM actions required for the DeleteAcmeExternalAccountBinding API call. */
	static readonly DELETE_ACME_EXTERNAL_ACCOUNT_BINDING: string[] = [];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DELETE_CERTIFICATE: string[] = ["acm:DeleteCertificate"];
	/** IAM actions required for the DescribeAcmeAccount API call. */
	static readonly DESCRIBE_ACME_ACCOUNT: string[] = [];
	/** IAM actions required for the DescribeAcmeDomainValidation API call. */
	static readonly DESCRIBE_ACME_DOMAIN_VALIDATION: string[] = [];
	/** IAM actions required for the DescribeAcmeEndpoint API call. */
	static readonly DESCRIBE_ACME_ENDPOINT: string[] = [];
	/** IAM actions required for the DescribeAcmeExternalAccountBinding API call. */
	static readonly DESCRIBE_ACME_EXTERNAL_ACCOUNT_BINDING: string[] = [];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DESCRIBE_CERTIFICATE: string[] = ["acm:DescribeCertificate"];
	/** IAM actions required for the ExportCertificate API call. */
	static readonly EXPORT_CERTIFICATE: string[] = ["acm:ExportCertificate"];
	/** IAM actions required for the GetAccountConfiguration API call. */
	static readonly GET_ACCOUNT_CONFIGURATION: string[] = [
		"acm:GetAccountConfiguration",
	];
	/** IAM actions required for the GetAcmeExternalAccountBindingCredentials API call. */
	static readonly GET_ACME_EXTERNAL_ACCOUNT_BINDING_CREDENTIALS: string[] = [];
	/** IAM actions required for the GetCertificate API call. */
	static readonly GET_CERTIFICATE: string[] = ["acm:GetCertificate"];
	/** IAM actions required for the ImportCertificate API call. */
	static readonly IMPORT_CERTIFICATE: string[] = [
		"acm:AddTagsToCertificate",
		"acm:ImportCertificate",
	];
	/** IAM actions required for the ListAcmeAccounts API call. */
	static readonly LIST_ACME_ACCOUNTS: string[] = [];
	/** IAM actions required for the ListAcmeDomainValidations API call. */
	static readonly LIST_ACME_DOMAIN_VALIDATIONS: string[] = [];
	/** IAM actions required for the ListAcmeEndpoints API call. */
	static readonly LIST_ACME_ENDPOINTS: string[] = [];
	/** IAM actions required for the ListAcmeExternalAccountBindings API call. */
	static readonly LIST_ACME_EXTERNAL_ACCOUNT_BINDINGS: string[] = [];
	/** IAM actions required for the ListCertificates API call. */
	static readonly LIST_CERTIFICATES: string[] = ["acm:ListCertificates"];
	/** IAM actions required for the ListTagsForCertificate API call. */
	static readonly LIST_TAGS_FOR_CERTIFICATE: string[] = [
		"acm:ListTagsForCertificate",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"acm:ListTagsForResource",
	];
	/** IAM actions required for the PutAccountConfiguration API call. */
	static readonly PUT_ACCOUNT_CONFIGURATION: string[] = [
		"acm:PutAccountConfiguration",
	];
	/** IAM actions required for the RemoveTagsFromCertificate API call. */
	static readonly REMOVE_TAGS_FROM_CERTIFICATE: string[] = [
		"acm:RemoveTagsFromCertificate",
	];
	/** IAM actions required for the RenewCertificate API call. */
	static readonly RENEW_CERTIFICATE: string[] = ["acm:RenewCertificate"];
	/** IAM actions required for the RequestCertificate API call. */
	static readonly REQUEST_CERTIFICATE: string[] = [
		"acm:AddTagsToCertificate",
		"acm:RequestCertificate",
	];
	/** IAM actions required for the ResendValidationEmail API call. */
	static readonly RESEND_VALIDATION_EMAIL: string[] = [
		"acm:ResendValidationEmail",
	];
	/** IAM actions required for the RevokeAcmeAccount API call. */
	static readonly REVOKE_ACME_ACCOUNT: string[] = [];
	/** IAM actions required for the RevokeAcmeExternalAccountBinding API call. */
	static readonly REVOKE_ACME_EXTERNAL_ACCOUNT_BINDING: string[] = [];
	/** IAM actions required for the RevokeCertificate API call. */
	static readonly REVOKE_CERTIFICATE: string[] = ["acm:RevokeCertificate"];
	/** IAM actions required for the SearchCertificates API call. */
	static readonly SEARCH_CERTIFICATES: string[] = ["acm:SearchCertificates"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["acm:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["acm:UntagResource"];
	/** IAM actions required for the UpdateAcmeDomainValidation API call. */
	static readonly UPDATE_ACME_DOMAIN_VALIDATION: string[] = [];
	/** IAM actions required for the UpdateAcmeEndpoint API call. */
	static readonly UPDATE_ACME_ENDPOINT: string[] = [];
	/** IAM actions required for the UpdateCertificateOptions API call. */
	static readonly UPDATE_CERTIFICATE_OPTIONS: string[] = [
		"acm:UpdateCertificateOptions",
	];
}

/**
 * Condition key constants and builders for acm.
 */
export class ACMConditions {
	/** Condition keys applicable to the AddTagsToCertificate action. */
	static readonly ADD_TAGS_TO_CERTIFICATE_CONDITION_KEYS: string[] = [
		"acm:CertificateKeyPairOrigin",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcmeDomainValidation action. */
	static readonly CREATE_ACME_DOMAIN_VALIDATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcmeEndpoint action. */
	static readonly CREATE_ACME_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAcmeExternalAccountBinding action. */
	static readonly CREATE_ACME_EXTERNAL_ACCOUNT_BINDING_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the DeleteCertificate action. */
	static readonly DELETE_CERTIFICATE_CONDITION_KEYS: string[] = [
		"acm:CertificateKeyPairOrigin",
	];
	/** Condition keys applicable to the ExportCertificate action. */
	static readonly EXPORT_CERTIFICATE_CONDITION_KEYS: string[] = [
		"acm:DomainNames",
	];
	/** Condition keys applicable to the ImportCertificate action. */
	static readonly IMPORT_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromCertificate action. */
	static readonly REMOVE_TAGS_FROM_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RequestCertificate action. */
	static readonly REQUEST_CERTIFICATE_CONDITION_KEYS: string[] = [
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
	static readonly REVOKE_CERTIFICATE_CONDITION_KEYS: string[] = [
		"acm:CertificateKeyPairOrigin",
		"acm:DomainNames",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCertificate action. */
	static readonly UPDATE_CERTIFICATE_CONDITION_KEYS: string[] = [
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
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
