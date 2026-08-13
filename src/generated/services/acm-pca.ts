// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/acm-pca.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the acm-pca service.
 */
export class ACMPcaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "acm-pca";

	/** [Write] acm-pca:CreateCertificateAuthority */
	static readonly CREATE_CERTIFICATE_AUTHORITY =
		"acm-pca:CreateCertificateAuthority";
	/** [Write] acm-pca:CreateCertificateAuthorityAuditReport */
	static readonly CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT =
		"acm-pca:CreateCertificateAuthorityAuditReport";
	/** [PermissionManagement] acm-pca:CreatePermission */
	static readonly CREATE_PERMISSION = "acm-pca:CreatePermission";
	/** [Write] acm-pca:DeleteCertificateAuthority */
	static readonly DELETE_CERTIFICATE_AUTHORITY =
		"acm-pca:DeleteCertificateAuthority";
	/** [PermissionManagement] acm-pca:DeletePermission */
	static readonly DELETE_PERMISSION = "acm-pca:DeletePermission";
	/** [PermissionManagement] acm-pca:DeletePolicy */
	static readonly DELETE_POLICY = "acm-pca:DeletePolicy";
	/** [Read] acm-pca:DescribeCertificateAuthority */
	static readonly DESCRIBE_CERTIFICATE_AUTHORITY =
		"acm-pca:DescribeCertificateAuthority";
	/** [Read] acm-pca:DescribeCertificateAuthorityAuditReport */
	static readonly DESCRIBE_CERTIFICATE_AUTHORITY_AUDIT_REPORT =
		"acm-pca:DescribeCertificateAuthorityAuditReport";
	/** [Read] acm-pca:GetCertificate */
	static readonly GET_CERTIFICATE = "acm-pca:GetCertificate";
	/** [Read] acm-pca:GetCertificateAuthorityCertificate */
	static readonly GET_CERTIFICATE_AUTHORITY_CERTIFICATE =
		"acm-pca:GetCertificateAuthorityCertificate";
	/** [Read] acm-pca:GetCertificateAuthorityCsr */
	static readonly GET_CERTIFICATE_AUTHORITY_CSR =
		"acm-pca:GetCertificateAuthorityCsr";
	/** [Read] acm-pca:GetPolicy */
	static readonly GET_POLICY = "acm-pca:GetPolicy";
	/** [Write] acm-pca:ImportCertificateAuthorityCertificate */
	static readonly IMPORT_CERTIFICATE_AUTHORITY_CERTIFICATE =
		"acm-pca:ImportCertificateAuthorityCertificate";
	/** [Write] acm-pca:IssueCertificate */
	static readonly ISSUE_CERTIFICATE = "acm-pca:IssueCertificate";
	/** [List] acm-pca:ListCertificateAuthorities */
	static readonly LIST_CERTIFICATE_AUTHORITIES =
		"acm-pca:ListCertificateAuthorities";
	/** [Read] acm-pca:ListPermissions */
	static readonly LIST_PERMISSIONS = "acm-pca:ListPermissions";
	/** [Read] acm-pca:ListTags */
	static readonly LIST_TAGS = "acm-pca:ListTags";
	/** [PermissionManagement] acm-pca:PutPolicy */
	static readonly PUT_POLICY = "acm-pca:PutPolicy";
	/** [Write] acm-pca:RestoreCertificateAuthority */
	static readonly RESTORE_CERTIFICATE_AUTHORITY =
		"acm-pca:RestoreCertificateAuthority";
	/** [Write] acm-pca:RevokeCertificate */
	static readonly REVOKE_CERTIFICATE = "acm-pca:RevokeCertificate";
	/** [Tagging] acm-pca:TagCertificateAuthority */
	static readonly TAG_CERTIFICATE_AUTHORITY = "acm-pca:TagCertificateAuthority";
	/** [Tagging] acm-pca:UntagCertificateAuthority */
	static readonly UNTAG_CERTIFICATE_AUTHORITY =
		"acm-pca:UntagCertificateAuthority";
	/** [Write] acm-pca:UpdateCertificateAuthority */
	static readonly UPDATE_CERTIFICATE_AUTHORITY =
		"acm-pca:UpdateCertificateAuthority";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ACMPcaActions.DESCRIBE_CERTIFICATE_AUTHORITY,
		ACMPcaActions.DESCRIBE_CERTIFICATE_AUTHORITY_AUDIT_REPORT,
		ACMPcaActions.GET_CERTIFICATE,
		ACMPcaActions.GET_CERTIFICATE_AUTHORITY_CERTIFICATE,
		ACMPcaActions.GET_CERTIFICATE_AUTHORITY_CSR,
		ACMPcaActions.GET_POLICY,
		ACMPcaActions.LIST_PERMISSIONS,
		ACMPcaActions.LIST_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ACMPcaActions.CREATE_CERTIFICATE_AUTHORITY,
		ACMPcaActions.CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT,
		ACMPcaActions.DELETE_CERTIFICATE_AUTHORITY,
		ACMPcaActions.IMPORT_CERTIFICATE_AUTHORITY_CERTIFICATE,
		ACMPcaActions.ISSUE_CERTIFICATE,
		ACMPcaActions.RESTORE_CERTIFICATE_AUTHORITY,
		ACMPcaActions.REVOKE_CERTIFICATE,
		ACMPcaActions.UPDATE_CERTIFICATE_AUTHORITY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ACMPcaActions.LIST_CERTIFICATE_AUTHORITIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ACMPcaActions.CREATE_PERMISSION,
		ACMPcaActions.DELETE_PERMISSION,
		ACMPcaActions.DELETE_POLICY,
		ACMPcaActions.PUT_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ACMPcaActions.TAG_CERTIFICATE_AUTHORITY,
		ACMPcaActions.UNTAG_CERTIFICATE_AUTHORITY,
	];
}

const CertificateAuthorityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):acm-pca:(?<region>[^:]*):(?<account>[^:]*):certificate-authority/(?<certificateAuthorityId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for acm-pca resources.
 */
export class ACMPcaResources {
	/**
	 * Builds an ARN for the certificate-authority resource.
	 */
	static certificateAuthority(props: {
		/** The CertificateAuthorityId component of the ARN. */
		readonly certificateAuthorityId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:acm-pca:${props.region ?? "*"}:${props.account ?? "*"}:certificate-authority/${props.certificateAuthorityId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the certificate-authority resource.
	 */
	static isValidCertificateAuthorityArn(arn: string): boolean {
		return CertificateAuthorityArnRegex.test(arn);
	}

	/**
	 * Parses a certificate-authority ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateAuthorityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		certificateAuthorityId: string;
	} {
		const match = CertificateAuthorityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid certificate-authority ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			certificateAuthorityId: match.groups!.certificateAuthorityId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for acm-pca.
 */
export class ACMPcaOperations {
	/** IAM actions required for the CreateCertificateAuthority API call. */
	static readonly CREATE_CERTIFICATE_AUTHORITY: string[] = [
		"acm-pca:CreateCertificateAuthority",
		"acm-pca:TagCertificateAuthority",
	];
	/** IAM actions required for the CreateCertificateAuthorityAuditReport API call. */
	static readonly CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT: string[] = [
		"acm-pca:CreateCertificateAuthorityAuditReport",
	];
	/** IAM actions required for the CreatePermission API call. */
	static readonly CREATE_PERMISSION: string[] = ["acm-pca:CreatePermission"];
	/** IAM actions required for the DeleteCertificateAuthority API call. */
	static readonly DELETE_CERTIFICATE_AUTHORITY: string[] = [
		"acm-pca:DeleteCertificateAuthority",
	];
	/** IAM actions required for the DeletePermission API call. */
	static readonly DELETE_PERMISSION: string[] = ["acm-pca:DeletePermission"];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["acm-pca:DeletePolicy"];
	/** IAM actions required for the DescribeCertificateAuthority API call. */
	static readonly DESCRIBE_CERTIFICATE_AUTHORITY: string[] = [
		"acm-pca:DescribeCertificateAuthority",
	];
	/** IAM actions required for the DescribeCertificateAuthorityAuditReport API call. */
	static readonly DESCRIBE_CERTIFICATE_AUTHORITY_AUDIT_REPORT: string[] = [
		"acm-pca:DescribeCertificateAuthorityAuditReport",
	];
	/** IAM actions required for the GetCertificate API call. */
	static readonly GET_CERTIFICATE: string[] = ["acm-pca:GetCertificate"];
	/** IAM actions required for the GetCertificateAuthorityCertificate API call. */
	static readonly GET_CERTIFICATE_AUTHORITY_CERTIFICATE: string[] = [
		"acm-pca:GetCertificateAuthorityCertificate",
	];
	/** IAM actions required for the GetCertificateAuthorityCsr API call. */
	static readonly GET_CERTIFICATE_AUTHORITY_CSR: string[] = [
		"acm-pca:GetCertificateAuthorityCsr",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["acm-pca:GetPolicy"];
	/** IAM actions required for the ImportCertificateAuthorityCertificate API call. */
	static readonly IMPORT_CERTIFICATE_AUTHORITY_CERTIFICATE: string[] = [
		"acm-pca:ImportCertificateAuthorityCertificate",
	];
	/** IAM actions required for the IssueCertificate API call. */
	static readonly ISSUE_CERTIFICATE: string[] = ["acm-pca:IssueCertificate"];
	/** IAM actions required for the ListCertificateAuthorities API call. */
	static readonly LIST_CERTIFICATE_AUTHORITIES: string[] = [
		"acm-pca:ListCertificateAuthorities",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly LIST_PERMISSIONS: string[] = ["acm-pca:ListPermissions"];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["acm-pca:ListTags"];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PUT_POLICY: string[] = ["acm-pca:PutPolicy"];
	/** IAM actions required for the RestoreCertificateAuthority API call. */
	static readonly RESTORE_CERTIFICATE_AUTHORITY: string[] = [
		"acm-pca:RestoreCertificateAuthority",
	];
	/** IAM actions required for the RevokeCertificate API call. */
	static readonly REVOKE_CERTIFICATE: string[] = ["acm-pca:RevokeCertificate"];
	/** IAM actions required for the TagCertificateAuthority API call. */
	static readonly TAG_CERTIFICATE_AUTHORITY: string[] = [
		"acm-pca:TagCertificateAuthority",
	];
	/** IAM actions required for the UntagCertificateAuthority API call. */
	static readonly UNTAG_CERTIFICATE_AUTHORITY: string[] = [
		"acm-pca:UntagCertificateAuthority",
	];
	/** IAM actions required for the UpdateCertificateAuthority API call. */
	static readonly UPDATE_CERTIFICATE_AUTHORITY: string[] = [
		"acm-pca:UpdateCertificateAuthority",
	];
}

/**
 * Condition key constants and builders for acm-pca.
 */
export class ACMPcaConditions {
	/** Condition keys applicable to the CreateCertificateAuthority action. */
	static readonly CREATE_CERTIFICATE_AUTHORITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the IssueCertificate action. */
	static readonly ISSUE_CERTIFICATE_CONDITION_KEYS: string[] = [
		"acm-pca:TemplateArn",
	];
	/** Condition keys applicable to the TagCertificateAuthority action. */
	static readonly TAG_CERTIFICATE_AUTHORITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagCertificateAuthority action. */
	static readonly UNTAG_CERTIFICATE_AUTHORITY_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];

	/** Condition key: acm-pca:TemplateArn (ARN) */
	static readonly TEMPLATE_ARN = "acm-pca:TemplateArn";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `acm-pca:TemplateArn`.
	 */
	static templateARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "acm-pca:TemplateArn": value } };
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
