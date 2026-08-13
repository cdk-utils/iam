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
	static readonly ApplyArchiveRule = "access-analyzer:ApplyArchiveRule";
	/** [Write] access-analyzer:CancelPolicyGeneration */
	static readonly CancelPolicyGeneration =
		"access-analyzer:CancelPolicyGeneration";
	/** [Read] access-analyzer:CheckAccessNotGranted */
	static readonly CheckAccessNotGranted =
		"access-analyzer:CheckAccessNotGranted";
	/** [Read] access-analyzer:CheckNoNewAccess */
	static readonly CheckNoNewAccess = "access-analyzer:CheckNoNewAccess";
	/** [Read] access-analyzer:CheckNoPublicAccess */
	static readonly CheckNoPublicAccess = "access-analyzer:CheckNoPublicAccess";
	/** [Write] access-analyzer:CreateAccessPreview */
	static readonly CreateAccessPreview = "access-analyzer:CreateAccessPreview";
	/** [Write] access-analyzer:CreateAnalyzer */
	static readonly CreateAnalyzer = "access-analyzer:CreateAnalyzer";
	/** [Write] access-analyzer:CreateArchiveRule */
	static readonly CreateArchiveRule = "access-analyzer:CreateArchiveRule";
	/** [Write] access-analyzer:CreateServiceLinkedAnalyzer */
	static readonly CreateServiceLinkedAnalyzer =
		"access-analyzer:CreateServiceLinkedAnalyzer";
	/** [Write] access-analyzer:DeleteAnalyzer */
	static readonly DeleteAnalyzer = "access-analyzer:DeleteAnalyzer";
	/** [Write] access-analyzer:DeleteArchiveRule */
	static readonly DeleteArchiveRule = "access-analyzer:DeleteArchiveRule";
	/** [Write] access-analyzer:DeleteServiceLinkedAnalyzer */
	static readonly DeleteServiceLinkedAnalyzer =
		"access-analyzer:DeleteServiceLinkedAnalyzer";
	/** [Write] access-analyzer:GenerateFindingRecommendation */
	static readonly GenerateFindingRecommendation =
		"access-analyzer:GenerateFindingRecommendation";
	/** [Read] access-analyzer:GetAccessPreview */
	static readonly actionGetAccessPreview = "access-analyzer:GetAccessPreview";
	/** [Read] access-analyzer:GetAnalyzedResource */
	static readonly actionGetAnalyzedResource =
		"access-analyzer:GetAnalyzedResource";
	/** [Read] access-analyzer:GetAnalyzer */
	static readonly actionGetAnalyzer = "access-analyzer:GetAnalyzer";
	/** [Read] access-analyzer:GetArchiveRule */
	static readonly actionGetArchiveRule = "access-analyzer:GetArchiveRule";
	/** [Read] access-analyzer:GetFinding */
	static readonly actionGetFinding = "access-analyzer:GetFinding";
	/** [Read] access-analyzer:GetFindingRecommendation */
	static readonly actionGetFindingRecommendation =
		"access-analyzer:GetFindingRecommendation";
	/** [Read] access-analyzer:GetFindingsStatistics */
	static readonly actionGetFindingsStatistics =
		"access-analyzer:GetFindingsStatistics";
	/** [Read] access-analyzer:GetGeneratedPolicy */
	static readonly actionGetGeneratedPolicy =
		"access-analyzer:GetGeneratedPolicy";
	/** [Read] access-analyzer:ListAccessPreviewFindings */
	static readonly ListAccessPreviewFindings =
		"access-analyzer:ListAccessPreviewFindings";
	/** [List] access-analyzer:ListAccessPreviews */
	static readonly ListAccessPreviews = "access-analyzer:ListAccessPreviews";
	/** [Read] access-analyzer:ListAnalyzedResources */
	static readonly ListAnalyzedResources =
		"access-analyzer:ListAnalyzedResources";
	/** [List] access-analyzer:ListAnalyzers */
	static readonly ListAnalyzers = "access-analyzer:ListAnalyzers";
	/** [List] access-analyzer:ListArchiveRules */
	static readonly ListArchiveRules = "access-analyzer:ListArchiveRules";
	/** [Read] access-analyzer:ListFindings */
	static readonly ListFindings = "access-analyzer:ListFindings";
	/** [Read] access-analyzer:ListPolicyGenerations */
	static readonly ListPolicyGenerations =
		"access-analyzer:ListPolicyGenerations";
	/** [Read] access-analyzer:ListTagsForResource */
	static readonly ListTagsForResource = "access-analyzer:ListTagsForResource";
	/** [Write] access-analyzer:StartPolicyGeneration */
	static readonly StartPolicyGeneration =
		"access-analyzer:StartPolicyGeneration";
	/** [Write] access-analyzer:StartResourceScan */
	static readonly StartResourceScan = "access-analyzer:StartResourceScan";
	/** [Tagging] access-analyzer:TagResource */
	static readonly TagResource = "access-analyzer:TagResource";
	/** [Tagging] access-analyzer:UntagResource */
	static readonly UntagResource = "access-analyzer:UntagResource";
	/** [Write] access-analyzer:UpdateAnalyzer */
	static readonly UpdateAnalyzer = "access-analyzer:UpdateAnalyzer";
	/** [Write] access-analyzer:UpdateArchiveRule */
	static readonly UpdateArchiveRule = "access-analyzer:UpdateArchiveRule";
	/** [Write] access-analyzer:UpdateFindings */
	static readonly UpdateFindings = "access-analyzer:UpdateFindings";
	/** [Read] access-analyzer:ValidatePolicy */
	static readonly ValidatePolicy = "access-analyzer:ValidatePolicy";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AccessAnalyzerActions.CheckAccessNotGranted,
		AccessAnalyzerActions.CheckNoNewAccess,
		AccessAnalyzerActions.CheckNoPublicAccess,
		AccessAnalyzerActions.actionGetAccessPreview,
		AccessAnalyzerActions.actionGetAnalyzedResource,
		AccessAnalyzerActions.actionGetAnalyzer,
		AccessAnalyzerActions.actionGetArchiveRule,
		AccessAnalyzerActions.actionGetFinding,
		AccessAnalyzerActions.actionGetFindingRecommendation,
		AccessAnalyzerActions.actionGetFindingsStatistics,
		AccessAnalyzerActions.actionGetGeneratedPolicy,
		AccessAnalyzerActions.ListAccessPreviewFindings,
		AccessAnalyzerActions.ListAnalyzedResources,
		AccessAnalyzerActions.ListFindings,
		AccessAnalyzerActions.ListPolicyGenerations,
		AccessAnalyzerActions.ListTagsForResource,
		AccessAnalyzerActions.ValidatePolicy,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AccessAnalyzerActions.ApplyArchiveRule,
		AccessAnalyzerActions.CancelPolicyGeneration,
		AccessAnalyzerActions.CreateAccessPreview,
		AccessAnalyzerActions.CreateAnalyzer,
		AccessAnalyzerActions.CreateArchiveRule,
		AccessAnalyzerActions.CreateServiceLinkedAnalyzer,
		AccessAnalyzerActions.DeleteAnalyzer,
		AccessAnalyzerActions.DeleteArchiveRule,
		AccessAnalyzerActions.DeleteServiceLinkedAnalyzer,
		AccessAnalyzerActions.GenerateFindingRecommendation,
		AccessAnalyzerActions.StartPolicyGeneration,
		AccessAnalyzerActions.StartResourceScan,
		AccessAnalyzerActions.UpdateAnalyzer,
		AccessAnalyzerActions.UpdateArchiveRule,
		AccessAnalyzerActions.UpdateFindings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AccessAnalyzerActions.ListAccessPreviews,
		AccessAnalyzerActions.ListAnalyzers,
		AccessAnalyzerActions.ListArchiveRules,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AccessAnalyzerActions.TagResource,
		AccessAnalyzerActions.UntagResource,
	];
}

/**
 * Properties for building a Analyzer ARN.
 */
export interface AccessAnalyzerAnalyzerArnProps {
	/** The AnalyzerName component of the ARN. */
	readonly analyzerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Analyzer ARN.
 */
export interface AccessAnalyzerAnalyzerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AnalyzerName component. */
	readonly analyzerName: string;
}

/**
 * Properties for building a ArchiveRule ARN.
 */
export interface AccessAnalyzerArchiveRuleArnProps {
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
}

/**
 * Parsed components of a ArchiveRule ARN.
 */
export interface AccessAnalyzerArchiveRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AnalyzerName component. */
	readonly analyzerName: string;
	/** The RuleName component. */
	readonly ruleName: string;
}

const AnalyzerArnRegex =
	/^arn:(?<partition>[^:]+):access-analyzer:(?<region>[^:]*):(?<account>[^:]*):analyzer\/(?<analyzerName>[^:/?]+)$/;
const ArchiveRuleArnRegex =
	/^arn:(?<partition>[^:]+):access-analyzer:(?<region>[^:]*):(?<account>[^:]*):analyzer\/(?<analyzerName>[^:/?]+)\/archive-rule\/(?<ruleName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for access-analyzer resources.
 */
export class AccessAnalyzerResources {
	/**
	 * Builds an ARN for the Analyzer resource.
	 */
	static analyzer(props: AccessAnalyzerAnalyzerArnProps): string {
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
	static parseAnalyzerArn(arn: string): AccessAnalyzerAnalyzerArnComponents {
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
	static archiveRule(props: AccessAnalyzerArchiveRuleArnProps): string {
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
	static parseArchiveRuleArn(
		arn: string,
	): AccessAnalyzerArchiveRuleArnComponents {
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
	static readonly ApplyArchiveRule: string[] = [
		"access-analyzer:ApplyArchiveRule",
	];
	/** IAM actions required for the CancelPolicyGeneration API call. */
	static readonly CancelPolicyGeneration: string[] = [
		"access-analyzer:CancelPolicyGeneration",
	];
	/** IAM actions required for the CheckAccessNotGranted API call. */
	static readonly CheckAccessNotGranted: string[] = [
		"access-analyzer:CheckAccessNotGranted",
	];
	/** IAM actions required for the CheckNoNewAccess API call. */
	static readonly CheckNoNewAccess: string[] = [
		"access-analyzer:CheckNoNewAccess",
	];
	/** IAM actions required for the CheckNoPublicAccess API call. */
	static readonly CheckNoPublicAccess: string[] = [
		"access-analyzer:CheckNoPublicAccess",
	];
	/** IAM actions required for the CreateAccessPreview API call. */
	static readonly CreateAccessPreview: string[] = [
		"access-analyzer:CreateAccessPreview",
	];
	/** IAM actions required for the CreateAnalyzer API call. */
	static readonly CreateAnalyzer: string[] = [
		"access-analyzer:CreateAnalyzer",
		"access-analyzer:TagResource",
	];
	/** IAM actions required for the CreateArchiveRule API call. */
	static readonly CreateArchiveRule: string[] = [
		"access-analyzer:CreateArchiveRule",
	];
	/** IAM actions required for the CreateServiceLinkedAnalyzer API call. */
	static readonly CreateServiceLinkedAnalyzer: string[] = [
		"access-analyzer:CreateServiceLinkedAnalyzer",
	];
	/** IAM actions required for the DeleteAnalyzer API call. */
	static readonly DeleteAnalyzer: string[] = ["access-analyzer:DeleteAnalyzer"];
	/** IAM actions required for the DeleteArchiveRule API call. */
	static readonly DeleteArchiveRule: string[] = [
		"access-analyzer:DeleteArchiveRule",
	];
	/** IAM actions required for the DeleteServiceLinkedAnalyzer API call. */
	static readonly DeleteServiceLinkedAnalyzer: string[] = [
		"access-analyzer:DeleteServiceLinkedAnalyzer",
	];
	/** IAM actions required for the GenerateFindingRecommendation API call. */
	static readonly GenerateFindingRecommendation: string[] = [
		"access-analyzer:GenerateFindingRecommendation",
	];
	/** IAM actions required for the GetAccessPreview API call. */
	static readonly opGetAccessPreview: string[] = [
		"access-analyzer:GetAccessPreview",
	];
	/** IAM actions required for the GetAnalyzedResource API call. */
	static readonly opGetAnalyzedResource: string[] = [
		"access-analyzer:GetAnalyzedResource",
	];
	/** IAM actions required for the GetAnalyzer API call. */
	static readonly opGetAnalyzer: string[] = ["access-analyzer:GetAnalyzer"];
	/** IAM actions required for the GetArchiveRule API call. */
	static readonly opGetArchiveRule: string[] = [
		"access-analyzer:GetArchiveRule",
	];
	/** IAM actions required for the GetFinding API call. */
	static readonly opGetFinding: string[] = ["access-analyzer:GetFinding"];
	/** IAM actions required for the GetFindingRecommendation API call. */
	static readonly opGetFindingRecommendation: string[] = [
		"access-analyzer:GetFindingRecommendation",
	];
	/** IAM actions required for the GetFindingV2 API call. */
	static readonly opGetFindingV2: string[] = ["access-analyzer:GetFinding"];
	/** IAM actions required for the GetFindingsStatistics API call. */
	static readonly opGetFindingsStatistics: string[] = [
		"access-analyzer:GetFindingsStatistics",
	];
	/** IAM actions required for the GetGeneratedPolicy API call. */
	static readonly opGetGeneratedPolicy: string[] = [
		"access-analyzer:GetGeneratedPolicy",
	];
	/** IAM actions required for the ListAccessPreviewFindings API call. */
	static readonly ListAccessPreviewFindings: string[] = [
		"access-analyzer:ListAccessPreviewFindings",
	];
	/** IAM actions required for the ListAccessPreviews API call. */
	static readonly ListAccessPreviews: string[] = [
		"access-analyzer:ListAccessPreviews",
	];
	/** IAM actions required for the ListAnalyzedResources API call. */
	static readonly ListAnalyzedResources: string[] = [
		"access-analyzer:ListAnalyzedResources",
	];
	/** IAM actions required for the ListAnalyzers API call. */
	static readonly ListAnalyzers: string[] = ["access-analyzer:ListAnalyzers"];
	/** IAM actions required for the ListArchiveRules API call. */
	static readonly ListArchiveRules: string[] = [
		"access-analyzer:ListArchiveRules",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly ListFindings: string[] = ["access-analyzer:ListFindings"];
	/** IAM actions required for the ListFindingsV2 API call. */
	static readonly ListFindingsV2: string[] = ["access-analyzer:ListFindings"];
	/** IAM actions required for the ListPolicyGenerations API call. */
	static readonly ListPolicyGenerations: string[] = [
		"access-analyzer:ListPolicyGenerations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"access-analyzer:ListTagsForResource",
	];
	/** IAM actions required for the StartPolicyGeneration API call. */
	static readonly StartPolicyGeneration: string[] = [
		"iam:PassRole",
		"access-analyzer:StartPolicyGeneration",
	];
	/** IAM actions required for the StartResourceScan API call. */
	static readonly StartResourceScan: string[] = [
		"access-analyzer:StartResourceScan",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["access-analyzer:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["access-analyzer:UntagResource"];
	/** IAM actions required for the UpdateAnalyzer API call. */
	static readonly UpdateAnalyzer: string[] = ["access-analyzer:UpdateAnalyzer"];
	/** IAM actions required for the UpdateArchiveRule API call. */
	static readonly UpdateArchiveRule: string[] = [
		"access-analyzer:UpdateArchiveRule",
	];
	/** IAM actions required for the UpdateFindings API call. */
	static readonly UpdateFindings: string[] = ["access-analyzer:UpdateFindings"];
	/** IAM actions required for the ValidatePolicy API call. */
	static readonly ValidatePolicy: string[] = ["access-analyzer:ValidatePolicy"];
}

/**
 * Condition key constants and builders for access-analyzer.
 */
export class AccessAnalyzerConditions {
	/** Condition keys applicable to the CreateAnalyzer action. */
	static readonly CreateAnalyzerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceLinkedAnalyzer action. */
	static readonly CreateServiceLinkedAnalyzerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAnalyzer action. */
	static readonly DeleteAnalyzerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteServiceLinkedAnalyzer action. */
	static readonly DeleteServiceLinkedAnalyzerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAnalyzer action. */
	static readonly actionGetAnalyzerConditionKeys: string[] = [
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
