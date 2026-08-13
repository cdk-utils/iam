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
	static readonly AcceptAgreement = "artifact:AcceptAgreement";
	/** [Write] artifact:AcceptNdaForAgreement */
	static readonly AcceptNdaForAgreement = "artifact:AcceptNdaForAgreement";
	/** [Write] artifact:CreateComplianceInquiry */
	static readonly CreateComplianceInquiry = "artifact:CreateComplianceInquiry";
	/** [Read] artifact:ExportComplianceInquiry */
	static readonly ExportComplianceInquiry = "artifact:ExportComplianceInquiry";
	/** [Read] artifact:GetAccountSettings */
	static readonly actionGetAccountSettings = "artifact:GetAccountSettings";
	/** [Read] artifact:GetAgreement */
	static readonly actionGetAgreement = "artifact:GetAgreement";
	/** [Read] artifact:GetComplianceInquiryMetadata */
	static readonly actionGetComplianceInquiryMetadata =
		"artifact:GetComplianceInquiryMetadata";
	/** [Read] artifact:GetCustomerAgreement */
	static readonly actionGetCustomerAgreement = "artifact:GetCustomerAgreement";
	/** [Read] artifact:GetNdaForAgreement */
	static readonly actionGetNdaForAgreement = "artifact:GetNdaForAgreement";
	/** [Read] artifact:GetReport */
	static readonly actionGetReport = "artifact:GetReport";
	/** [Read] artifact:GetReportMetadata */
	static readonly actionGetReportMetadata = "artifact:GetReportMetadata";
	/** [Read] artifact:GetTermForReport */
	static readonly actionGetTermForReport = "artifact:GetTermForReport";
	/** [List] artifact:ListAgreements */
	static readonly ListAgreements = "artifact:ListAgreements";
	/** [List] artifact:ListComplianceInquiries */
	static readonly ListComplianceInquiries = "artifact:ListComplianceInquiries";
	/** [List] artifact:ListComplianceInquiryQueries */
	static readonly ListComplianceInquiryQueries =
		"artifact:ListComplianceInquiryQueries";
	/** [List] artifact:ListCustomerAgreements */
	static readonly ListCustomerAgreements = "artifact:ListCustomerAgreements";
	/** [List] artifact:ListReportVersions */
	static readonly ListReportVersions = "artifact:ListReportVersions";
	/** [List] artifact:ListReports */
	static readonly ListReports = "artifact:ListReports";
	/** [Read] artifact:ListTagsForResource */
	static readonly ListTagsForResource = "artifact:ListTagsForResource";
	/** [Write] artifact:PutAccountSettings */
	static readonly PutAccountSettings = "artifact:PutAccountSettings";
	/** [Write] artifact:PutComplianceInquiryFeedback */
	static readonly PutComplianceInquiryFeedback =
		"artifact:PutComplianceInquiryFeedback";
	/** [Tagging] artifact:TagResource */
	static readonly TagResource = "artifact:TagResource";
	/** [Write] artifact:TerminateAgreement */
	static readonly TerminateAgreement = "artifact:TerminateAgreement";
	/** [Tagging] artifact:UntagResource */
	static readonly UntagResource = "artifact:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ArtifactActions.ExportComplianceInquiry,
		ArtifactActions.actionGetAccountSettings,
		ArtifactActions.actionGetAgreement,
		ArtifactActions.actionGetComplianceInquiryMetadata,
		ArtifactActions.actionGetCustomerAgreement,
		ArtifactActions.actionGetNdaForAgreement,
		ArtifactActions.actionGetReport,
		ArtifactActions.actionGetReportMetadata,
		ArtifactActions.actionGetTermForReport,
		ArtifactActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ArtifactActions.AcceptAgreement,
		ArtifactActions.AcceptNdaForAgreement,
		ArtifactActions.CreateComplianceInquiry,
		ArtifactActions.PutAccountSettings,
		ArtifactActions.PutComplianceInquiryFeedback,
		ArtifactActions.TerminateAgreement,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ArtifactActions.ListAgreements,
		ArtifactActions.ListComplianceInquiries,
		ArtifactActions.ListComplianceInquiryQueries,
		ArtifactActions.ListCustomerAgreements,
		ArtifactActions.ListReportVersions,
		ArtifactActions.ListReports,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ArtifactActions.TagResource,
		ArtifactActions.UntagResource,
	];
}

/**
 * Properties for building a agreement ARN.
 */
export interface ArtifactAgreementArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agreement ARN.
 */
export interface ArtifactAgreementArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a compliance-inquiry ARN.
 */
export interface ArtifactComplianceInquiryArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a compliance-inquiry ARN.
 */
export interface ArtifactComplianceInquiryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a customer-agreement ARN.
 */
export interface ArtifactCustomerAgreementArnProps {
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customer-agreement ARN.
 */
export interface ArtifactCustomerAgreementArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a report ARN.
 */
export interface ArtifactReportArnProps {
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
}

/**
 * Parsed components of a report ARN.
 */
export interface ArtifactReportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReportId component. */
	readonly reportId: string;
	/** The Version component. */
	readonly version: string;
}

const AgreementArnRegex = /^arn:(?<partition>[^:]+):artifact:::agreement\/.*$/;
const ComplianceInquiryArnRegex =
	/^arn:(?<partition>[^:]+):artifact:(?<region>[^:]*):(?<account>[^:]*):compliance-inquiry\/.*$/;
const CustomerAgreementArnRegex =
	/^arn:(?<partition>[^:]+):artifact::(?<account>[^:]*):customer-agreement\/.*$/;
const ReportArnRegex =
	/^arn:(?<partition>[^:]+):artifact:(?<region>[^:]*)::report\/(?<reportId>[^:/?]+):(?<version>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for artifact resources.
 */
export class ArtifactResources {
	/**
	 * Builds an ARN for the agreement resource.
	 */
	static agreement(props: ArtifactAgreementArnProps): string {
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
	static parseAgreementArn(arn: string): ArtifactAgreementArnComponents {
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
	static complianceInquiry(props: ArtifactComplianceInquiryArnProps): string {
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
	static parseComplianceInquiryArn(
		arn: string,
	): ArtifactComplianceInquiryArnComponents {
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
	static customerAgreement(props: ArtifactCustomerAgreementArnProps): string {
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
	static parseCustomerAgreementArn(
		arn: string,
	): ArtifactCustomerAgreementArnComponents {
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
	static report(props: ArtifactReportArnProps): string {
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
	static parseReportArn(arn: string): ArtifactReportArnComponents {
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
	static readonly CreateComplianceInquiry: string[] = [
		"artifact:CreateComplianceInquiry",
		"artifact:TagResource",
	];
	/** IAM actions required for the ExportComplianceInquiry API call. */
	static readonly ExportComplianceInquiry: string[] = [
		"artifact:ExportComplianceInquiry",
	];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = [
		"artifact:GetAccountSettings",
	];
	/** IAM actions required for the GetComplianceInquiryMetadata API call. */
	static readonly opGetComplianceInquiryMetadata: string[] = [
		"artifact:GetComplianceInquiryMetadata",
	];
	/** IAM actions required for the GetReport API call. */
	static readonly opGetReport: string[] = ["artifact:GetReport"];
	/** IAM actions required for the GetReportMetadata API call. */
	static readonly opGetReportMetadata: string[] = [
		"artifact:GetReportMetadata",
	];
	/** IAM actions required for the GetTermForReport API call. */
	static readonly opGetTermForReport: string[] = ["artifact:GetTermForReport"];
	/** IAM actions required for the ListComplianceInquiries API call. */
	static readonly ListComplianceInquiries: string[] = [
		"artifact:ListComplianceInquiries",
	];
	/** IAM actions required for the ListComplianceInquiryQueries API call. */
	static readonly ListComplianceInquiryQueries: string[] = [
		"artifact:ListComplianceInquiryQueries",
	];
	/** IAM actions required for the ListCustomerAgreements API call. */
	static readonly ListCustomerAgreements: string[] = [
		"artifact:ListCustomerAgreements",
	];
	/** IAM actions required for the ListReportVersions API call. */
	static readonly ListReportVersions: string[] = [
		"artifact:ListReportVersions",
	];
	/** IAM actions required for the ListReports API call. */
	static readonly ListReports: string[] = ["artifact:ListReports"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"artifact:ListTagsForResource",
	];
	/** IAM actions required for the PutAccountSettings API call. */
	static readonly PutAccountSettings: string[] = [
		"artifact:PutAccountSettings",
	];
	/** IAM actions required for the PutComplianceInquiryFeedback API call. */
	static readonly PutComplianceInquiryFeedback: string[] = [
		"artifact:PutComplianceInquiryFeedback",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["artifact:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["artifact:UntagResource"];
}

/**
 * Condition key constants and builders for artifact.
 */
export class ArtifactConditions {
	/** Condition keys applicable to the CreateComplianceInquiry action. */
	static readonly CreateComplianceInquiryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: artifact:ReportCategory (String) */
	static readonly REPORT_CATEGORY = "artifact:ReportCategory";
	/** Condition key: artifact:ReportSeries (String) */
	static readonly REPORT_SERIES = "artifact:ReportSeries";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
