// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/artifact.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the artifact service.
 */
export class ArtifactActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "artifact";

	/** [Write] artifact:AcceptAgreement */
	static readonly ACCEPT_AGREEMENT = "artifact:AcceptAgreement";
	/** [Write] artifact:AcceptNdaForAgreement */
	static readonly ACCEPT_NDA_FOR_AGREEMENT = "artifact:AcceptNdaForAgreement";
	/** [Write] artifact:CreateComplianceInquiry */
	static readonly CREATE_COMPLIANCE_INQUIRY =
		"artifact:CreateComplianceInquiry";
	/** [Read] artifact:ExportComplianceInquiry */
	static readonly EXPORT_COMPLIANCE_INQUIRY =
		"artifact:ExportComplianceInquiry";
	/** [Read] artifact:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "artifact:GetAccountSettings";
	/** [Read] artifact:GetAgreement */
	static readonly GET_AGREEMENT = "artifact:GetAgreement";
	/** [Read] artifact:GetComplianceInquiryMetadata */
	static readonly GET_COMPLIANCE_INQUIRY_METADATA =
		"artifact:GetComplianceInquiryMetadata";
	/** [Read] artifact:GetCustomerAgreement */
	static readonly GET_CUSTOMER_AGREEMENT = "artifact:GetCustomerAgreement";
	/** [Read] artifact:GetNdaForAgreement */
	static readonly GET_NDA_FOR_AGREEMENT = "artifact:GetNdaForAgreement";
	/** [Read] artifact:GetReport */
	static readonly GET_REPORT = "artifact:GetReport";
	/** [Read] artifact:GetReportMetadata */
	static readonly GET_REPORT_METADATA = "artifact:GetReportMetadata";
	/** [Read] artifact:GetTermForReport */
	static readonly GET_TERM_FOR_REPORT = "artifact:GetTermForReport";
	/** [List] artifact:ListAgreements */
	static readonly LIST_AGREEMENTS = "artifact:ListAgreements";
	/** [List] artifact:ListComplianceInquiries */
	static readonly LIST_COMPLIANCE_INQUIRIES =
		"artifact:ListComplianceInquiries";
	/** [List] artifact:ListComplianceInquiryQueries */
	static readonly LIST_COMPLIANCE_INQUIRY_QUERIES =
		"artifact:ListComplianceInquiryQueries";
	/** [List] artifact:ListCustomerAgreements */
	static readonly LIST_CUSTOMER_AGREEMENTS = "artifact:ListCustomerAgreements";
	/** [List] artifact:ListReportVersions */
	static readonly LIST_REPORT_VERSIONS = "artifact:ListReportVersions";
	/** [List] artifact:ListReports */
	static readonly LIST_REPORTS = "artifact:ListReports";
	/** [Read] artifact:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "artifact:ListTagsForResource";
	/** [Write] artifact:PutAccountSettings */
	static readonly PUT_ACCOUNT_SETTINGS = "artifact:PutAccountSettings";
	/** [Write] artifact:PutComplianceInquiryFeedback */
	static readonly PUT_COMPLIANCE_INQUIRY_FEEDBACK =
		"artifact:PutComplianceInquiryFeedback";
	/** [Tagging] artifact:TagResource */
	static readonly TAG_RESOURCE = "artifact:TagResource";
	/** [Write] artifact:TerminateAgreement */
	static readonly TERMINATE_AGREEMENT = "artifact:TerminateAgreement";
	/** [Tagging] artifact:UntagResource */
	static readonly UNTAG_RESOURCE = "artifact:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ArtifactActions.EXPORT_COMPLIANCE_INQUIRY,
		ArtifactActions.GET_ACCOUNT_SETTINGS,
		ArtifactActions.GET_AGREEMENT,
		ArtifactActions.GET_COMPLIANCE_INQUIRY_METADATA,
		ArtifactActions.GET_CUSTOMER_AGREEMENT,
		ArtifactActions.GET_NDA_FOR_AGREEMENT,
		ArtifactActions.GET_REPORT,
		ArtifactActions.GET_REPORT_METADATA,
		ArtifactActions.GET_TERM_FOR_REPORT,
		ArtifactActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ArtifactActions.ACCEPT_AGREEMENT,
		ArtifactActions.ACCEPT_NDA_FOR_AGREEMENT,
		ArtifactActions.CREATE_COMPLIANCE_INQUIRY,
		ArtifactActions.PUT_ACCOUNT_SETTINGS,
		ArtifactActions.PUT_COMPLIANCE_INQUIRY_FEEDBACK,
		ArtifactActions.TERMINATE_AGREEMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ArtifactActions.LIST_AGREEMENTS,
		ArtifactActions.LIST_COMPLIANCE_INQUIRIES,
		ArtifactActions.LIST_COMPLIANCE_INQUIRY_QUERIES,
		ArtifactActions.LIST_CUSTOMER_AGREEMENTS,
		ArtifactActions.LIST_REPORT_VERSIONS,
		ArtifactActions.LIST_REPORTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ArtifactActions.TAG_RESOURCE,
		ArtifactActions.UNTAG_RESOURCE,
	];
}

const AgreementArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):artifact:::agreement/.*$",
);
const ComplianceInquiryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):artifact:(?<region>[^:]*):(?<account>[^:]*):compliance-inquiry/.*$",
);
const CustomerAgreementArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):artifact::(?<account>[^:]*):customer-agreement/.*$",
);
const ReportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):artifact:(?<region>[^:]*)::report/(?<reportId>[^:/?]+):(?<version>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for artifact resources.
 */
export class ArtifactResources {
	/**
	 * Builds an ARN for the agreement resource.
	 */
	static agreement(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:artifact:::agreement/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agreement resource.
	 */
	static isValidAgreementArn(arn: string): boolean {
		return AgreementArnRegex.test(arn);
	}

	/**
	 * Parses a agreement ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgreementArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = AgreementArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agreement ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the compliance-inquiry resource.
	 */
	static complianceInquiry(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:artifact:${props.region ?? "*"}:${props.account ?? "*"}:compliance-inquiry/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the compliance-inquiry resource.
	 */
	static isValidComplianceInquiryArn(arn: string): boolean {
		return ComplianceInquiryArnRegex.test(arn);
	}

	/**
	 * Parses a compliance-inquiry ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComplianceInquiryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = ComplianceInquiryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid compliance-inquiry ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the customer-agreement resource.
	 */
	static customerAgreement(props: {
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:artifact::${props.account ?? "*"}:customer-agreement/*`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customer-agreement resource.
	 */
	static isValidCustomerAgreementArn(arn: string): boolean {
		return CustomerAgreementArnRegex.test(arn);
	}

	/**
	 * Parses a customer-agreement ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomerAgreementArn(arn: string): {
		partition: string;
		account: string;
	} {
		const match = CustomerAgreementArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customer-agreement ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the report resource.
	 */
	static report(props: {
		/** The ReportId component of the ARN. */
		readonly reportId: string;
		/** The Version component of the ARN. */
		readonly version: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:artifact:${props.region ?? "*"}::report/${props.reportId}:${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the report resource.
	 */
	static isValidReportArn(arn: string): boolean {
		return ReportArnRegex.test(arn);
	}

	/**
	 * Parses a report ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reportId: string;
		version: string;
	} {
		const match = ReportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid report ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reportId: match.groups!.reportId,
			version: match.groups!.version,
		};
	}
}

/**
 * API operation to required IAM actions mapping for artifact.
 */
export class ArtifactOperations {
	/** IAM actions required for the CreateComplianceInquiry API call. */
	static readonly CREATE_COMPLIANCE_INQUIRY: string[] = [
		"artifact:CreateComplianceInquiry",
		"artifact:TagResource",
	];
	/** IAM actions required for the ExportComplianceInquiry API call. */
	static readonly EXPORT_COMPLIANCE_INQUIRY: string[] = [
		"artifact:ExportComplianceInquiry",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = [
		"artifact:GetAccountSettings",
	];
	/** IAM actions required for the GetComplianceInquiryMetadata API call. */
	static readonly GET_COMPLIANCE_INQUIRY_METADATA: string[] = [
		"artifact:GetComplianceInquiryMetadata",
	];
	/** IAM actions required for the GetReport API call. */
	static readonly GET_REPORT: string[] = ["artifact:GetReport"];
	/** IAM actions required for the GetReportMetadata API call. */
	static readonly GET_REPORT_METADATA: string[] = [
		"artifact:GetReportMetadata",
	];
	/** IAM actions required for the GetTermForReport API call. */
	static readonly GET_TERM_FOR_REPORT: string[] = ["artifact:GetTermForReport"];
	/** IAM actions required for the ListComplianceInquiries API call. */
	static readonly LIST_COMPLIANCE_INQUIRIES: string[] = [
		"artifact:ListComplianceInquiries",
	];
	/** IAM actions required for the ListComplianceInquiryQueries API call. */
	static readonly LIST_COMPLIANCE_INQUIRY_QUERIES: string[] = [
		"artifact:ListComplianceInquiryQueries",
	];
	/** IAM actions required for the ListCustomerAgreements API call. */
	static readonly LIST_CUSTOMER_AGREEMENTS: string[] = [
		"artifact:ListCustomerAgreements",
	];
	/** IAM actions required for the ListReportVersions API call. */
	static readonly LIST_REPORT_VERSIONS: string[] = [
		"artifact:ListReportVersions",
	];
	/** IAM actions required for the ListReports API call. */
	static readonly LIST_REPORTS: string[] = ["artifact:ListReports"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"artifact:ListTagsForResource",
	];
	/** IAM actions required for the PutAccountSettings API call. */
	static readonly PUT_ACCOUNT_SETTINGS: string[] = [
		"artifact:PutAccountSettings",
	];
	/** IAM actions required for the PutComplianceInquiryFeedback API call. */
	static readonly PUT_COMPLIANCE_INQUIRY_FEEDBACK: string[] = [
		"artifact:PutComplianceInquiryFeedback",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["artifact:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["artifact:UntagResource"];
}

/**
 * Condition key constants and builders for artifact.
 */
export class ArtifactConditions {
	/** Condition keys applicable to the CreateComplianceInquiry action. */
	static readonly CREATE_COMPLIANCE_INQUIRY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: artifact:ReportCategory (String) */
	static readonly REPORT_CATEGORY = "artifact:ReportCategory";
	/** Condition key: artifact:ReportSeries (String) */
	static readonly REPORT_SERIES = "artifact:ReportSeries";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `artifact:ReportCategory`.
	 */
	static reportCategory(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "artifact:ReportCategory": value } };
	}

	/**
	 * Generates a condition block for `artifact:ReportSeries`.
	 */
	static reportSeries(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "artifact:ReportSeries": value } };
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
