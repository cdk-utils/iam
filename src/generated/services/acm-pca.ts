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
	static readonly CreateCertificateAuthority =
		"acm-pca:CreateCertificateAuthority";
	/** [Write] acm-pca:CreateCertificateAuthorityAuditReport */
	static readonly CreateCertificateAuthorityAuditReport =
		"acm-pca:CreateCertificateAuthorityAuditReport";
	/** [PermissionManagement] acm-pca:CreatePermission */
	static readonly CreatePermission = "acm-pca:CreatePermission";
	/** [Write] acm-pca:DeleteCertificateAuthority */
	static readonly DeleteCertificateAuthority =
		"acm-pca:DeleteCertificateAuthority";
	/** [PermissionManagement] acm-pca:DeletePermission */
	static readonly DeletePermission = "acm-pca:DeletePermission";
	/** [PermissionManagement] acm-pca:DeletePolicy */
	static readonly DeletePolicy = "acm-pca:DeletePolicy";
	/** [Read] acm-pca:DescribeCertificateAuthority */
	static readonly DescribeCertificateAuthority =
		"acm-pca:DescribeCertificateAuthority";
	/** [Read] acm-pca:DescribeCertificateAuthorityAuditReport */
	static readonly DescribeCertificateAuthorityAuditReport =
		"acm-pca:DescribeCertificateAuthorityAuditReport";
	/** [Read] acm-pca:GetCertificate */
	static readonly actionGetCertificate = "acm-pca:GetCertificate";
	/** [Read] acm-pca:GetCertificateAuthorityCertificate */
	static readonly actionGetCertificateAuthorityCertificate =
		"acm-pca:GetCertificateAuthorityCertificate";
	/** [Read] acm-pca:GetCertificateAuthorityCsr */
	static readonly actionGetCertificateAuthorityCsr =
		"acm-pca:GetCertificateAuthorityCsr";
	/** [Read] acm-pca:GetPolicy */
	static readonly actionGetPolicy = "acm-pca:GetPolicy";
	/** [Write] acm-pca:ImportCertificateAuthorityCertificate */
	static readonly ImportCertificateAuthorityCertificate =
		"acm-pca:ImportCertificateAuthorityCertificate";
	/** [Write] acm-pca:IssueCertificate */
	static readonly IssueCertificate = "acm-pca:IssueCertificate";
	/** [List] acm-pca:ListCertificateAuthorities */
	static readonly ListCertificateAuthorities =
		"acm-pca:ListCertificateAuthorities";
	/** [Read] acm-pca:ListPermissions */
	static readonly ListPermissions = "acm-pca:ListPermissions";
	/** [Read] acm-pca:ListTags */
	static readonly ListTags = "acm-pca:ListTags";
	/** [PermissionManagement] acm-pca:PutPolicy */
	static readonly PutPolicy = "acm-pca:PutPolicy";
	/** [Write] acm-pca:RestoreCertificateAuthority */
	static readonly RestoreCertificateAuthority =
		"acm-pca:RestoreCertificateAuthority";
	/** [Write] acm-pca:RevokeCertificate */
	static readonly RevokeCertificate = "acm-pca:RevokeCertificate";
	/** [Tagging] acm-pca:TagCertificateAuthority */
	static readonly TagCertificateAuthority = "acm-pca:TagCertificateAuthority";
	/** [Tagging] acm-pca:UntagCertificateAuthority */
	static readonly UntagCertificateAuthority =
		"acm-pca:UntagCertificateAuthority";
	/** [Write] acm-pca:UpdateCertificateAuthority */
	static readonly UpdateCertificateAuthority =
		"acm-pca:UpdateCertificateAuthority";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ACMPcaActions.DescribeCertificateAuthority,
		ACMPcaActions.DescribeCertificateAuthorityAuditReport,
		ACMPcaActions.actionGetCertificate,
		ACMPcaActions.actionGetCertificateAuthorityCertificate,
		ACMPcaActions.actionGetCertificateAuthorityCsr,
		ACMPcaActions.actionGetPolicy,
		ACMPcaActions.ListPermissions,
		ACMPcaActions.ListTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ACMPcaActions.CreateCertificateAuthority,
		ACMPcaActions.CreateCertificateAuthorityAuditReport,
		ACMPcaActions.DeleteCertificateAuthority,
		ACMPcaActions.ImportCertificateAuthorityCertificate,
		ACMPcaActions.IssueCertificate,
		ACMPcaActions.RestoreCertificateAuthority,
		ACMPcaActions.RevokeCertificate,
		ACMPcaActions.UpdateCertificateAuthority,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ACMPcaActions.ListCertificateAuthorities,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ACMPcaActions.CreatePermission,
		ACMPcaActions.DeletePermission,
		ACMPcaActions.DeletePolicy,
		ACMPcaActions.PutPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ACMPcaActions.TagCertificateAuthority,
		ACMPcaActions.UntagCertificateAuthority,
	];
}

/**
 * Properties for building a certificate-authority ARN.
 */
export interface ACMPcaCertificateAuthorityArnProps {
	/** The CertificateAuthorityId component of the ARN. */
	readonly certificateAuthorityId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a certificate-authority ARN.
 */
export interface ACMPcaCertificateAuthorityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CertificateAuthorityId component. */
	readonly certificateAuthorityId: string;
}

const CertificateAuthorityArnRegex =
	/^arn:(?<partition>[^:]+):acm-pca:(?<region>[^:]*):(?<account>[^:]*):certificate-authority\/(?<certificateAuthorityId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for acm-pca resources.
 */
export class ACMPcaResources {
	/**
	 * Builds an ARN for the certificate-authority resource.
	 */
	static certificateAuthority(
		props: ACMPcaCertificateAuthorityArnProps,
	): string {
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
	static parseCertificateAuthorityArn(
		arn: string,
	): ACMPcaCertificateAuthorityArnComponents {
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
	static readonly CreateCertificateAuthority: string[] = [
		"acm-pca:CreateCertificateAuthority",
		"acm-pca:TagCertificateAuthority",
	];
	/** IAM actions required for the CreateCertificateAuthorityAuditReport API call. */
	static readonly CreateCertificateAuthorityAuditReport: string[] = [
		"acm-pca:CreateCertificateAuthorityAuditReport",
	];
	/** IAM actions required for the CreatePermission API call. */
	static readonly CreatePermission: string[] = ["acm-pca:CreatePermission"];
	/** IAM actions required for the DeleteCertificateAuthority API call. */
	static readonly DeleteCertificateAuthority: string[] = [
		"acm-pca:DeleteCertificateAuthority",
	];
	/** IAM actions required for the DeletePermission API call. */
	static readonly DeletePermission: string[] = ["acm-pca:DeletePermission"];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["acm-pca:DeletePolicy"];
	/** IAM actions required for the DescribeCertificateAuthority API call. */
	static readonly DescribeCertificateAuthority: string[] = [
		"acm-pca:DescribeCertificateAuthority",
	];
	/** IAM actions required for the DescribeCertificateAuthorityAuditReport API call. */
	static readonly DescribeCertificateAuthorityAuditReport: string[] = [
		"acm-pca:DescribeCertificateAuthorityAuditReport",
	];
	/** IAM actions required for the GetCertificate API call. */
	static readonly opGetCertificate: string[] = ["acm-pca:GetCertificate"];
	/** IAM actions required for the GetCertificateAuthorityCertificate API call. */
	static readonly opGetCertificateAuthorityCertificate: string[] = [
		"acm-pca:GetCertificateAuthorityCertificate",
	];
	/** IAM actions required for the GetCertificateAuthorityCsr API call. */
	static readonly opGetCertificateAuthorityCsr: string[] = [
		"acm-pca:GetCertificateAuthorityCsr",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["acm-pca:GetPolicy"];
	/** IAM actions required for the ImportCertificateAuthorityCertificate API call. */
	static readonly ImportCertificateAuthorityCertificate: string[] = [
		"acm-pca:ImportCertificateAuthorityCertificate",
	];
	/** IAM actions required for the IssueCertificate API call. */
	static readonly IssueCertificate: string[] = ["acm-pca:IssueCertificate"];
	/** IAM actions required for the ListCertificateAuthorities API call. */
	static readonly ListCertificateAuthorities: string[] = [
		"acm-pca:ListCertificateAuthorities",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly ListPermissions: string[] = ["acm-pca:ListPermissions"];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["acm-pca:ListTags"];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PutPolicy: string[] = ["acm-pca:PutPolicy"];
	/** IAM actions required for the RestoreCertificateAuthority API call. */
	static readonly RestoreCertificateAuthority: string[] = [
		"acm-pca:RestoreCertificateAuthority",
	];
	/** IAM actions required for the RevokeCertificate API call. */
	static readonly RevokeCertificate: string[] = ["acm-pca:RevokeCertificate"];
	/** IAM actions required for the TagCertificateAuthority API call. */
	static readonly TagCertificateAuthority: string[] = [
		"acm-pca:TagCertificateAuthority",
	];
	/** IAM actions required for the UntagCertificateAuthority API call. */
	static readonly UntagCertificateAuthority: string[] = [
		"acm-pca:UntagCertificateAuthority",
	];
	/** IAM actions required for the UpdateCertificateAuthority API call. */
	static readonly UpdateCertificateAuthority: string[] = [
		"acm-pca:UpdateCertificateAuthority",
	];
}

/**
 * Condition key constants and builders for acm-pca.
 */
export class ACMPcaConditions {
	/** Condition keys applicable to the CreateCertificateAuthority action. */
	static readonly CreateCertificateAuthorityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the IssueCertificate action. */
	static readonly IssueCertificateConditionKeys: string[] = [
		"acm-pca:TemplateArn",
	];
	/** Condition keys applicable to the TagCertificateAuthority action. */
	static readonly TagCertificateAuthorityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagCertificateAuthority action. */
	static readonly UntagCertificateAuthorityConditionKeys: string[] = [
		"aws:TagKeys",
	];

	/** Condition key: acm-pca:TemplateArn (ARN) */
	static readonly TEMPLATE_ARN = "acm-pca:TemplateArn";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
