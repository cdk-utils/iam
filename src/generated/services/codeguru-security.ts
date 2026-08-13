// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codeguru-security.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codeguru-security service.
 */
export class CodeguruSecurityActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codeguru-security";

	/** [Read] codeguru-security:BatchGetFindings */
	static readonly BatchGetFindings = "codeguru-security:BatchGetFindings";
	/** [Write] codeguru-security:CreateScan */
	static readonly CreateScan = "codeguru-security:CreateScan";
	/** [Write] codeguru-security:CreateUploadUrl */
	static readonly CreateUploadUrl = "codeguru-security:CreateUploadUrl";
	/** [Write] codeguru-security:DeleteScansByCategory */
	static readonly DeleteScansByCategory =
		"codeguru-security:DeleteScansByCategory";
	/** [Read] codeguru-security:GetAccountConfiguration */
	static readonly actionGetAccountConfiguration =
		"codeguru-security:GetAccountConfiguration";
	/** [List] codeguru-security:GetFindings */
	static readonly actionGetFindings = "codeguru-security:GetFindings";
	/** [Read] codeguru-security:GetMetricsSummary */
	static readonly actionGetMetricsSummary =
		"codeguru-security:GetMetricsSummary";
	/** [Read] codeguru-security:GetScan */
	static readonly actionGetScan = "codeguru-security:GetScan";
	/** [List] codeguru-security:ListFindings */
	static readonly ListFindings = "codeguru-security:ListFindings";
	/** [List] codeguru-security:ListFindingsMetrics */
	static readonly ListFindingsMetrics = "codeguru-security:ListFindingsMetrics";
	/** [List] codeguru-security:ListScans */
	static readonly ListScans = "codeguru-security:ListScans";
	/** [Read] codeguru-security:ListTagsForResource */
	static readonly ListTagsForResource = "codeguru-security:ListTagsForResource";
	/** [Tagging] codeguru-security:TagResource */
	static readonly TagResource = "codeguru-security:TagResource";
	/** [Tagging] codeguru-security:UntagResource */
	static readonly UntagResource = "codeguru-security:UntagResource";
	/** [Write] codeguru-security:UpdateAccountConfiguration */
	static readonly UpdateAccountConfiguration =
		"codeguru-security:UpdateAccountConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeguruSecurityActions.BatchGetFindings,
		CodeguruSecurityActions.actionGetAccountConfiguration,
		CodeguruSecurityActions.actionGetMetricsSummary,
		CodeguruSecurityActions.actionGetScan,
		CodeguruSecurityActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeguruSecurityActions.CreateScan,
		CodeguruSecurityActions.CreateUploadUrl,
		CodeguruSecurityActions.DeleteScansByCategory,
		CodeguruSecurityActions.UpdateAccountConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeguruSecurityActions.actionGetFindings,
		CodeguruSecurityActions.ListFindings,
		CodeguruSecurityActions.ListFindingsMetrics,
		CodeguruSecurityActions.ListScans,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeguruSecurityActions.TagResource,
		CodeguruSecurityActions.UntagResource,
	];
}

/**
 * Properties for building a ScanName ARN.
 */
export interface CodeguruSecurityScanNameArnProps {
	/** The ScanName component of the ARN. */
	readonly scanName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ScanName ARN.
 */
export interface CodeguruSecurityScanNameArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScanName component. */
	readonly scanName: string;
}

const ScanNameArnRegex =
	/^arn:(?<partition>[^:]+):codeguru-security:(?<region>[^:]*):(?<account>[^:]*):scans\/(?<scanName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codeguru-security resources.
 */
export class CodeguruSecurityResources {
	/**
	 * Builds an ARN for the ScanName resource.
	 */
	static scanName(props: CodeguruSecurityScanNameArnProps): string {
		return `arn:${props.partition ?? "aws"}:codeguru-security:${props.region ?? "*"}:${props.account ?? "*"}:scans/${props.scanName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ScanName resource.
	 */
	static isValidScanNameArn(arn: string): boolean {
		return ScanNameArnRegex.test(arn);
	}

	/**
	 * Parses a ScanName ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScanNameArn(arn: string): CodeguruSecurityScanNameArnComponents {
		const match = ScanNameArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ScanName ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scanName: match.groups!.scanName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codeguru-security.
 */
export class CodeguruSecurityOperations {
	/** IAM actions required for the BatchGetFindings API call. */
	static readonly BatchGetFindings: string[] = [
		"codeguru-security:BatchGetFindings",
	];
	/** IAM actions required for the CreateScan API call. */
	static readonly CreateScan: string[] = [
		"codeguru-security:CreateScan",
		"codeguru-security:TagResource",
	];
	/** IAM actions required for the CreateUploadUrl API call. */
	static readonly CreateUploadUrl: string[] = [
		"codeguru-security:CreateUploadUrl",
	];
	/** IAM actions required for the GetAccountConfiguration API call. */
	static readonly opGetAccountConfiguration: string[] = [
		"codeguru-security:GetAccountConfiguration",
	];
	/** IAM actions required for the GetFindings API call. */
	static readonly opGetFindings: string[] = ["codeguru-security:GetFindings"];
	/** IAM actions required for the GetMetricsSummary API call. */
	static readonly opGetMetricsSummary: string[] = [
		"codeguru-security:GetMetricsSummary",
	];
	/** IAM actions required for the GetScan API call. */
	static readonly opGetScan: string[] = ["codeguru-security:GetScan"];
	/** IAM actions required for the ListFindingsMetrics API call. */
	static readonly ListFindingsMetrics: string[] = [
		"codeguru-security:ListFindingsMetrics",
	];
	/** IAM actions required for the ListScans API call. */
	static readonly ListScans: string[] = ["codeguru-security:ListScans"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codeguru-security:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["codeguru-security:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["codeguru-security:UntagResource"];
	/** IAM actions required for the UpdateAccountConfiguration API call. */
	static readonly UpdateAccountConfiguration: string[] = [
		"codeguru-security:UpdateAccountConfiguration",
	];
}

/**
 * Condition key constants and builders for codeguru-security.
 */
export class CodeguruSecurityConditions {
	/** Condition keys applicable to the CreateScan action. */
	static readonly CreateScanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetScan action. */
	static readonly actionGetScanConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
