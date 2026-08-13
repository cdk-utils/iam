// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/access-analyzer.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the access-analyzer service.
 */
export class AccessAnalyzerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "access-analyzer";

	/** [Write] access-analyzer:ApplyArchiveRule */
	static readonly APPLY_ARCHIVE_RULE = "access-analyzer:ApplyArchiveRule";
	/** [Write] access-analyzer:CancelPolicyGeneration */
	static readonly CANCEL_POLICY_GENERATION =
		"access-analyzer:CancelPolicyGeneration";
	/** [Read] access-analyzer:CheckAccessNotGranted */
	static readonly CHECK_ACCESS_NOT_GRANTED =
		"access-analyzer:CheckAccessNotGranted";
	/** [Read] access-analyzer:CheckNoNewAccess */
	static readonly CHECK_NO_NEW_ACCESS = "access-analyzer:CheckNoNewAccess";
	/** [Read] access-analyzer:CheckNoPublicAccess */
	static readonly CHECK_NO_PUBLIC_ACCESS =
		"access-analyzer:CheckNoPublicAccess";
	/** [Write] access-analyzer:CreateAccessPreview */
	static readonly CREATE_ACCESS_PREVIEW = "access-analyzer:CreateAccessPreview";
	/** [Write] access-analyzer:CreateAnalyzer */
	static readonly CREATE_ANALYZER = "access-analyzer:CreateAnalyzer";
	/** [Write] access-analyzer:CreateArchiveRule */
	static readonly CREATE_ARCHIVE_RULE = "access-analyzer:CreateArchiveRule";
	/** [Write] access-analyzer:CreateServiceLinkedAnalyzer */
	static readonly CREATE_SERVICE_LINKED_ANALYZER =
		"access-analyzer:CreateServiceLinkedAnalyzer";
	/** [Write] access-analyzer:DeleteAnalyzer */
	static readonly DELETE_ANALYZER = "access-analyzer:DeleteAnalyzer";
	/** [Write] access-analyzer:DeleteArchiveRule */
	static readonly DELETE_ARCHIVE_RULE = "access-analyzer:DeleteArchiveRule";
	/** [Write] access-analyzer:DeleteServiceLinkedAnalyzer */
	static readonly DELETE_SERVICE_LINKED_ANALYZER =
		"access-analyzer:DeleteServiceLinkedAnalyzer";
	/** [Write] access-analyzer:GenerateFindingRecommendation */
	static readonly GENERATE_FINDING_RECOMMENDATION =
		"access-analyzer:GenerateFindingRecommendation";
	/** [Read] access-analyzer:GetAccessPreview */
	static readonly GET_ACCESS_PREVIEW = "access-analyzer:GetAccessPreview";
	/** [Read] access-analyzer:GetAnalyzedResource */
	static readonly GET_ANALYZED_RESOURCE = "access-analyzer:GetAnalyzedResource";
	/** [Read] access-analyzer:GetAnalyzer */
	static readonly GET_ANALYZER = "access-analyzer:GetAnalyzer";
	/** [Read] access-analyzer:GetArchiveRule */
	static readonly GET_ARCHIVE_RULE = "access-analyzer:GetArchiveRule";
	/** [Read] access-analyzer:GetFinding */
	static readonly GET_FINDING = "access-analyzer:GetFinding";
	/** [Read] access-analyzer:GetFindingRecommendation */
	static readonly GET_FINDING_RECOMMENDATION =
		"access-analyzer:GetFindingRecommendation";
	/** [Read] access-analyzer:GetFindingsStatistics */
	static readonly GET_FINDINGS_STATISTICS =
		"access-analyzer:GetFindingsStatistics";
	/** [Read] access-analyzer:GetGeneratedPolicy */
	static readonly GET_GENERATED_POLICY = "access-analyzer:GetGeneratedPolicy";
	/** [Read] access-analyzer:ListAccessPreviewFindings */
	static readonly LIST_ACCESS_PREVIEW_FINDINGS =
		"access-analyzer:ListAccessPreviewFindings";
	/** [List] access-analyzer:ListAccessPreviews */
	static readonly LIST_ACCESS_PREVIEWS = "access-analyzer:ListAccessPreviews";
	/** [Read] access-analyzer:ListAnalyzedResources */
	static readonly LIST_ANALYZED_RESOURCES =
		"access-analyzer:ListAnalyzedResources";
	/** [List] access-analyzer:ListAnalyzers */
	static readonly LIST_ANALYZERS = "access-analyzer:ListAnalyzers";
	/** [List] access-analyzer:ListArchiveRules */
	static readonly LIST_ARCHIVE_RULES = "access-analyzer:ListArchiveRules";
	/** [Read] access-analyzer:ListFindings */
	static readonly LIST_FINDINGS = "access-analyzer:ListFindings";
	/** [Read] access-analyzer:ListPolicyGenerations */
	static readonly LIST_POLICY_GENERATIONS =
		"access-analyzer:ListPolicyGenerations";
	/** [Read] access-analyzer:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"access-analyzer:ListTagsForResource";
	/** [Write] access-analyzer:StartPolicyGeneration */
	static readonly START_POLICY_GENERATION =
		"access-analyzer:StartPolicyGeneration";
	/** [Write] access-analyzer:StartResourceScan */
	static readonly START_RESOURCE_SCAN = "access-analyzer:StartResourceScan";
	/** [Tagging] access-analyzer:TagResource */
	static readonly TAG_RESOURCE = "access-analyzer:TagResource";
	/** [Tagging] access-analyzer:UntagResource */
	static readonly UNTAG_RESOURCE = "access-analyzer:UntagResource";
	/** [Write] access-analyzer:UpdateAnalyzer */
	static readonly UPDATE_ANALYZER = "access-analyzer:UpdateAnalyzer";
	/** [Write] access-analyzer:UpdateArchiveRule */
	static readonly UPDATE_ARCHIVE_RULE = "access-analyzer:UpdateArchiveRule";
	/** [Write] access-analyzer:UpdateFindings */
	static readonly UPDATE_FINDINGS = "access-analyzer:UpdateFindings";
	/** [Read] access-analyzer:ValidatePolicy */
	static readonly VALIDATE_POLICY = "access-analyzer:ValidatePolicy";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AccessAnalyzerActions.CHECK_ACCESS_NOT_GRANTED,
		AccessAnalyzerActions.CHECK_NO_NEW_ACCESS,
		AccessAnalyzerActions.CHECK_NO_PUBLIC_ACCESS,
		AccessAnalyzerActions.GET_ACCESS_PREVIEW,
		AccessAnalyzerActions.GET_ANALYZED_RESOURCE,
		AccessAnalyzerActions.GET_ANALYZER,
		AccessAnalyzerActions.GET_ARCHIVE_RULE,
		AccessAnalyzerActions.GET_FINDING,
		AccessAnalyzerActions.GET_FINDING_RECOMMENDATION,
		AccessAnalyzerActions.GET_FINDINGS_STATISTICS,
		AccessAnalyzerActions.GET_GENERATED_POLICY,
		AccessAnalyzerActions.LIST_ACCESS_PREVIEW_FINDINGS,
		AccessAnalyzerActions.LIST_ANALYZED_RESOURCES,
		AccessAnalyzerActions.LIST_FINDINGS,
		AccessAnalyzerActions.LIST_POLICY_GENERATIONS,
		AccessAnalyzerActions.LIST_TAGS_FOR_RESOURCE,
		AccessAnalyzerActions.VALIDATE_POLICY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AccessAnalyzerActions.APPLY_ARCHIVE_RULE,
		AccessAnalyzerActions.CANCEL_POLICY_GENERATION,
		AccessAnalyzerActions.CREATE_ACCESS_PREVIEW,
		AccessAnalyzerActions.CREATE_ANALYZER,
		AccessAnalyzerActions.CREATE_ARCHIVE_RULE,
		AccessAnalyzerActions.CREATE_SERVICE_LINKED_ANALYZER,
		AccessAnalyzerActions.DELETE_ANALYZER,
		AccessAnalyzerActions.DELETE_ARCHIVE_RULE,
		AccessAnalyzerActions.DELETE_SERVICE_LINKED_ANALYZER,
		AccessAnalyzerActions.GENERATE_FINDING_RECOMMENDATION,
		AccessAnalyzerActions.START_POLICY_GENERATION,
		AccessAnalyzerActions.START_RESOURCE_SCAN,
		AccessAnalyzerActions.UPDATE_ANALYZER,
		AccessAnalyzerActions.UPDATE_ARCHIVE_RULE,
		AccessAnalyzerActions.UPDATE_FINDINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AccessAnalyzerActions.LIST_ACCESS_PREVIEWS,
		AccessAnalyzerActions.LIST_ANALYZERS,
		AccessAnalyzerActions.LIST_ARCHIVE_RULES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AccessAnalyzerActions.TAG_RESOURCE,
		AccessAnalyzerActions.UNTAG_RESOURCE,
	];
}

const AnalyzerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):access-analyzer:(?<region>[^:]*):(?<account>[^:]*):analyzer/(?<analyzerName>[^:/?]+)$",
);
const ArchiveRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):access-analyzer:(?<region>[^:]*):(?<account>[^:]*):analyzer/(?<analyzerName>[^:/?]+)/archive-rule/(?<ruleName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for access-analyzer resources.
 */
export class AccessAnalyzerResources {
	/**
	 * Builds an ARN for the Analyzer resource.
	 */
	static analyzer(props: {
		/** The AnalyzerName component of the ARN. */
		readonly analyzerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:access-analyzer:${props.region ?? "*"}:${props.account ?? "*"}:analyzer/${props.analyzerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Analyzer resource.
	 */
	static isValidAnalyzerArn(arn: string): boolean {
		return AnalyzerArnRegex.test(arn);
	}

	/**
	 * Parses a Analyzer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnalyzerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		analyzerName: string;
	} {
		const match = AnalyzerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Analyzer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			analyzerName: match.groups!.analyzerName,
		};
	}

	/**
	 * Builds an ARN for the ArchiveRule resource.
	 */
	static archiveRule(props: {
		/** The AnalyzerName component of the ARN. */
		readonly analyzerName: string;
		/** The RuleName component of the ARN. */
		readonly ruleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:access-analyzer:${props.region ?? "*"}:${props.account ?? "*"}:analyzer/${props.analyzerName}/archive-rule/${props.ruleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ArchiveRule resource.
	 */
	static isValidArchiveRuleArn(arn: string): boolean {
		return ArchiveRuleArnRegex.test(arn);
	}

	/**
	 * Parses a ArchiveRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseArchiveRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		analyzerName: string;
		ruleName: string;
	} {
		const match = ArchiveRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ArchiveRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			analyzerName: match.groups!.analyzerName,
			ruleName: match.groups!.ruleName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for access-analyzer.
 */
export class AccessAnalyzerOperations {
	/** IAM actions required for the ApplyArchiveRule API call. */
	static readonly APPLY_ARCHIVE_RULE: string[] = [
		"access-analyzer:ApplyArchiveRule",
	];
	/** IAM actions required for the CancelPolicyGeneration API call. */
	static readonly CANCEL_POLICY_GENERATION: string[] = [
		"access-analyzer:CancelPolicyGeneration",
	];
	/** IAM actions required for the CheckAccessNotGranted API call. */
	static readonly CHECK_ACCESS_NOT_GRANTED: string[] = [
		"access-analyzer:CheckAccessNotGranted",
	];
	/** IAM actions required for the CheckNoNewAccess API call. */
	static readonly CHECK_NO_NEW_ACCESS: string[] = [
		"access-analyzer:CheckNoNewAccess",
	];
	/** IAM actions required for the CheckNoPublicAccess API call. */
	static readonly CHECK_NO_PUBLIC_ACCESS: string[] = [
		"access-analyzer:CheckNoPublicAccess",
	];
	/** IAM actions required for the CreateAccessPreview API call. */
	static readonly CREATE_ACCESS_PREVIEW: string[] = [
		"access-analyzer:CreateAccessPreview",
	];
	/** IAM actions required for the CreateAnalyzer API call. */
	static readonly CREATE_ANALYZER: string[] = [
		"access-analyzer:CreateAnalyzer",
		"access-analyzer:TagResource",
	];
	/** IAM actions required for the CreateArchiveRule API call. */
	static readonly CREATE_ARCHIVE_RULE: string[] = [
		"access-analyzer:CreateArchiveRule",
	];
	/** IAM actions required for the CreateServiceLinkedAnalyzer API call. */
	static readonly CREATE_SERVICE_LINKED_ANALYZER: string[] = [
		"access-analyzer:CreateServiceLinkedAnalyzer",
	];
	/** IAM actions required for the DeleteAnalyzer API call. */
	static readonly DELETE_ANALYZER: string[] = [
		"access-analyzer:DeleteAnalyzer",
	];
	/** IAM actions required for the DeleteArchiveRule API call. */
	static readonly DELETE_ARCHIVE_RULE: string[] = [
		"access-analyzer:DeleteArchiveRule",
	];
	/** IAM actions required for the DeleteServiceLinkedAnalyzer API call. */
	static readonly DELETE_SERVICE_LINKED_ANALYZER: string[] = [
		"access-analyzer:DeleteServiceLinkedAnalyzer",
	];
	/** IAM actions required for the GenerateFindingRecommendation API call. */
	static readonly GENERATE_FINDING_RECOMMENDATION: string[] = [
		"access-analyzer:GenerateFindingRecommendation",
	];
	/** IAM actions required for the GetAccessPreview API call. */
	static readonly GET_ACCESS_PREVIEW: string[] = [
		"access-analyzer:GetAccessPreview",
	];
	/** IAM actions required for the GetAnalyzedResource API call. */
	static readonly GET_ANALYZED_RESOURCE: string[] = [
		"access-analyzer:GetAnalyzedResource",
	];
	/** IAM actions required for the GetAnalyzer API call. */
	static readonly GET_ANALYZER: string[] = ["access-analyzer:GetAnalyzer"];
	/** IAM actions required for the GetArchiveRule API call. */
	static readonly GET_ARCHIVE_RULE: string[] = [
		"access-analyzer:GetArchiveRule",
	];
	/** IAM actions required for the GetFinding API call. */
	static readonly GET_FINDING: string[] = ["access-analyzer:GetFinding"];
	/** IAM actions required for the GetFindingRecommendation API call. */
	static readonly GET_FINDING_RECOMMENDATION: string[] = [
		"access-analyzer:GetFindingRecommendation",
	];
	/** IAM actions required for the GetFindingV2 API call. */
	static readonly GET_FINDING_V2: string[] = ["access-analyzer:GetFinding"];
	/** IAM actions required for the GetFindingsStatistics API call. */
	static readonly GET_FINDINGS_STATISTICS: string[] = [
		"access-analyzer:GetFindingsStatistics",
	];
	/** IAM actions required for the GetGeneratedPolicy API call. */
	static readonly GET_GENERATED_POLICY: string[] = [
		"access-analyzer:GetGeneratedPolicy",
	];
	/** IAM actions required for the ListAccessPreviewFindings API call. */
	static readonly LIST_ACCESS_PREVIEW_FINDINGS: string[] = [
		"access-analyzer:ListAccessPreviewFindings",
	];
	/** IAM actions required for the ListAccessPreviews API call. */
	static readonly LIST_ACCESS_PREVIEWS: string[] = [
		"access-analyzer:ListAccessPreviews",
	];
	/** IAM actions required for the ListAnalyzedResources API call. */
	static readonly LIST_ANALYZED_RESOURCES: string[] = [
		"access-analyzer:ListAnalyzedResources",
	];
	/** IAM actions required for the ListAnalyzers API call. */
	static readonly LIST_ANALYZERS: string[] = ["access-analyzer:ListAnalyzers"];
	/** IAM actions required for the ListArchiveRules API call. */
	static readonly LIST_ARCHIVE_RULES: string[] = [
		"access-analyzer:ListArchiveRules",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly LIST_FINDINGS: string[] = ["access-analyzer:ListFindings"];
	/** IAM actions required for the ListFindingsV2 API call. */
	static readonly LIST_FINDINGS_V2: string[] = ["access-analyzer:ListFindings"];
	/** IAM actions required for the ListPolicyGenerations API call. */
	static readonly LIST_POLICY_GENERATIONS: string[] = [
		"access-analyzer:ListPolicyGenerations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"access-analyzer:ListTagsForResource",
	];
	/** IAM actions required for the StartPolicyGeneration API call. */
	static readonly START_POLICY_GENERATION: string[] = [
		"iam:PassRole",
		"access-analyzer:StartPolicyGeneration",
	];
	/** IAM actions required for the StartResourceScan API call. */
	static readonly START_RESOURCE_SCAN: string[] = [
		"access-analyzer:StartResourceScan",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["access-analyzer:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["access-analyzer:UntagResource"];
	/** IAM actions required for the UpdateAnalyzer API call. */
	static readonly UPDATE_ANALYZER: string[] = [
		"access-analyzer:UpdateAnalyzer",
	];
	/** IAM actions required for the UpdateArchiveRule API call. */
	static readonly UPDATE_ARCHIVE_RULE: string[] = [
		"access-analyzer:UpdateArchiveRule",
	];
	/** IAM actions required for the UpdateFindings API call. */
	static readonly UPDATE_FINDINGS: string[] = [
		"access-analyzer:UpdateFindings",
	];
	/** IAM actions required for the ValidatePolicy API call. */
	static readonly VALIDATE_POLICY: string[] = [
		"access-analyzer:ValidatePolicy",
	];
}

/**
 * Condition key constants and builders for access-analyzer.
 */
export class AccessAnalyzerConditions {
	/** Condition keys applicable to the CreateAnalyzer action. */
	static readonly CREATE_ANALYZER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceLinkedAnalyzer action. */
	static readonly CREATE_SERVICE_LINKED_ANALYZER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAnalyzer action. */
	static readonly DELETE_ANALYZER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteServiceLinkedAnalyzer action. */
	static readonly DELETE_SERVICE_LINKED_ANALYZER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAnalyzer action. */
	static readonly GET_ANALYZER_CONDITION_KEYS: string[] = [
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
