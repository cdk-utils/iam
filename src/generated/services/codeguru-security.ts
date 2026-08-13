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
	static readonly BATCH_GET_FINDINGS = "codeguru-security:BatchGetFindings";
	/** [Write] codeguru-security:CreateScan */
	static readonly CREATE_SCAN = "codeguru-security:CreateScan";
	/** [Write] codeguru-security:CreateUploadUrl */
	static readonly CREATE_UPLOAD_URL = "codeguru-security:CreateUploadUrl";
	/** [Write] codeguru-security:DeleteScansByCategory */
	static readonly DELETE_SCANS_BY_CATEGORY =
		"codeguru-security:DeleteScansByCategory";
	/** [Read] codeguru-security:GetAccountConfiguration */
	static readonly GET_ACCOUNT_CONFIGURATION =
		"codeguru-security:GetAccountConfiguration";
	/** [List] codeguru-security:GetFindings */
	static readonly GET_FINDINGS = "codeguru-security:GetFindings";
	/** [Read] codeguru-security:GetMetricsSummary */
	static readonly GET_METRICS_SUMMARY = "codeguru-security:GetMetricsSummary";
	/** [Read] codeguru-security:GetScan */
	static readonly GET_SCAN = "codeguru-security:GetScan";
	/** [List] codeguru-security:ListFindings */
	static readonly LIST_FINDINGS = "codeguru-security:ListFindings";
	/** [List] codeguru-security:ListFindingsMetrics */
	static readonly LIST_FINDINGS_METRICS =
		"codeguru-security:ListFindingsMetrics";
	/** [List] codeguru-security:ListScans */
	static readonly LIST_SCANS = "codeguru-security:ListScans";
	/** [Read] codeguru-security:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"codeguru-security:ListTagsForResource";
	/** [Tagging] codeguru-security:TagResource */
	static readonly TAG_RESOURCE = "codeguru-security:TagResource";
	/** [Tagging] codeguru-security:UntagResource */
	static readonly UNTAG_RESOURCE = "codeguru-security:UntagResource";
	/** [Write] codeguru-security:UpdateAccountConfiguration */
	static readonly UPDATE_ACCOUNT_CONFIGURATION =
		"codeguru-security:UpdateAccountConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeguruSecurityActions.BATCH_GET_FINDINGS,
		CodeguruSecurityActions.GET_ACCOUNT_CONFIGURATION,
		CodeguruSecurityActions.GET_METRICS_SUMMARY,
		CodeguruSecurityActions.GET_SCAN,
		CodeguruSecurityActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeguruSecurityActions.CREATE_SCAN,
		CodeguruSecurityActions.CREATE_UPLOAD_URL,
		CodeguruSecurityActions.DELETE_SCANS_BY_CATEGORY,
		CodeguruSecurityActions.UPDATE_ACCOUNT_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeguruSecurityActions.GET_FINDINGS,
		CodeguruSecurityActions.LIST_FINDINGS,
		CodeguruSecurityActions.LIST_FINDINGS_METRICS,
		CodeguruSecurityActions.LIST_SCANS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeguruSecurityActions.TAG_RESOURCE,
		CodeguruSecurityActions.UNTAG_RESOURCE,
	];
}

const ScanNameArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeguru-security:(?<region>[^:]*):(?<account>[^:]*):scans/(?<scanName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codeguru-security resources.
 */
export class CodeguruSecurityResources {
	/**
	 * Builds an ARN for the ScanName resource.
	 */
	static scanName(props: {
		/** The ScanName component of the ARN. */
		readonly scanName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseScanNameArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scanName: string;
	} {
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
	static readonly BATCH_GET_FINDINGS: string[] = [
		"codeguru-security:BatchGetFindings",
	];
	/** IAM actions required for the CreateScan API call. */
	static readonly CREATE_SCAN: string[] = [
		"codeguru-security:CreateScan",
		"codeguru-security:TagResource",
	];
	/** IAM actions required for the CreateUploadUrl API call. */
	static readonly CREATE_UPLOAD_URL: string[] = [
		"codeguru-security:CreateUploadUrl",
	];
	/** IAM actions required for the GetAccountConfiguration API call. */
	static readonly GET_ACCOUNT_CONFIGURATION: string[] = [
		"codeguru-security:GetAccountConfiguration",
	];
	/** IAM actions required for the GetFindings API call. */
	static readonly GET_FINDINGS: string[] = ["codeguru-security:GetFindings"];
	/** IAM actions required for the GetMetricsSummary API call. */
	static readonly GET_METRICS_SUMMARY: string[] = [
		"codeguru-security:GetMetricsSummary",
	];
	/** IAM actions required for the GetScan API call. */
	static readonly GET_SCAN: string[] = ["codeguru-security:GetScan"];
	/** IAM actions required for the ListFindingsMetrics API call. */
	static readonly LIST_FINDINGS_METRICS: string[] = [
		"codeguru-security:ListFindingsMetrics",
	];
	/** IAM actions required for the ListScans API call. */
	static readonly LIST_SCANS: string[] = ["codeguru-security:ListScans"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codeguru-security:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["codeguru-security:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"codeguru-security:UntagResource",
	];
	/** IAM actions required for the UpdateAccountConfiguration API call. */
	static readonly UPDATE_ACCOUNT_CONFIGURATION: string[] = [
		"codeguru-security:UpdateAccountConfiguration",
	];
}

/**
 * Condition key constants and builders for codeguru-security.
 */
export class CodeguruSecurityConditions {
	/** Condition keys applicable to the CreateScan action. */
	static readonly CREATE_SCAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetScan action. */
	static readonly GET_SCAN_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
