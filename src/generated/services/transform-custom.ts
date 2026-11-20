// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/transform-custom.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the transform-custom service.
 */
export class TransformCustomActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "transform-custom";

	/** [Write] transform-custom:BatchCreateFindings */
	static readonly BatchCreateFindings = "transform-custom:BatchCreateFindings";
	/** [Write] transform-custom:BatchUpdateFindings */
	static readonly BatchUpdateFindings = "transform-custom:BatchUpdateFindings";
	/** [Write] transform-custom:CancelSkillCreationJob */
	static readonly CancelSkillCreationJob =
		"transform-custom:CancelSkillCreationJob";
	/** [Write] transform-custom:CompleteTransformationPackageUpload */
	static readonly CompleteTransformationPackageUpload =
		"transform-custom:CompleteTransformationPackageUpload";
	/** [Write] transform-custom:ConnectSource */
	static readonly ConnectSource = "transform-custom:ConnectSource";
	/** [Write] transform-custom:ContributeKnowledgeItems */
	static readonly ContributeKnowledgeItems =
		"transform-custom:ContributeKnowledgeItems";
	/** [Write] transform-custom:ConverseStream */
	static readonly ConverseStream = "transform-custom:ConverseStream";
	/** [Write] transform-custom:CreateAnalysis */
	static readonly CreateAnalysis = "transform-custom:CreateAnalysis";
	/** [Write] transform-custom:CreateCampaign */
	static readonly CreateCampaign = "transform-custom:CreateCampaign";
	/** [Write] transform-custom:CreateRemediation */
	static readonly CreateRemediation = "transform-custom:CreateRemediation";
	/** [Write] transform-custom:CreateRemediationPlan */
	static readonly CreateRemediationPlan =
		"transform-custom:CreateRemediationPlan";
	/** [Write] transform-custom:CreateRepository */
	static readonly CreateRepository = "transform-custom:CreateRepository";
	/** [Write] transform-custom:CreateSource */
	static readonly CreateSource = "transform-custom:CreateSource";
	/** [Write] transform-custom:CreateTransformationPackageUrl */
	static readonly CreateTransformationPackageUrl =
		"transform-custom:CreateTransformationPackageUrl";
	/** [Write] transform-custom:DeleteAnalysis */
	static readonly DeleteAnalysis = "transform-custom:DeleteAnalysis";
	/** [Write] transform-custom:DeleteCampaign */
	static readonly DeleteCampaign = "transform-custom:DeleteCampaign";
	/** [Write] transform-custom:DeleteFinding */
	static readonly DeleteFinding = "transform-custom:DeleteFinding";
	/** [Write] transform-custom:DeleteKnowledgeItem */
	static readonly DeleteKnowledgeItem = "transform-custom:DeleteKnowledgeItem";
	/** [Write] transform-custom:DeleteRemediation */
	static readonly DeleteRemediation = "transform-custom:DeleteRemediation";
	/** [Write] transform-custom:DeleteRemediationPlan */
	static readonly DeleteRemediationPlan =
		"transform-custom:DeleteRemediationPlan";
	/** [Write] transform-custom:DeleteRepository */
	static readonly DeleteRepository = "transform-custom:DeleteRepository";
	/** [PermissionManagement] transform-custom:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"transform-custom:DeleteResourcePolicy";
	/** [Write] transform-custom:DeleteSource */
	static readonly DeleteSource = "transform-custom:DeleteSource";
	/** [Write] transform-custom:DeleteTransformationPackage */
	static readonly DeleteTransformationPackage =
		"transform-custom:DeleteTransformationPackage";
	/** [Write] transform-custom:ExecuteTransformation */
	static readonly ExecuteTransformation =
		"transform-custom:ExecuteTransformation";
	/** [Read] transform-custom:GetAnalysis */
	static readonly actionGetAnalysis = "transform-custom:GetAnalysis";
	/** [Read] transform-custom:GetAnalysisArtifactDownloadUrl */
	static readonly actionGetAnalysisArtifactDownloadUrl =
		"transform-custom:GetAnalysisArtifactDownloadUrl";
	/** [Read] transform-custom:GetCampaign */
	static readonly actionGetCampaign = "transform-custom:GetCampaign";
	/** [Read] transform-custom:GetFinding */
	static readonly actionGetFinding = "transform-custom:GetFinding";
	/** [Read] transform-custom:GetFindingGroups */
	static readonly actionGetFindingGroups = "transform-custom:GetFindingGroups";
	/** [Read] transform-custom:GetIssueGroup */
	static readonly actionGetIssueGroup = "transform-custom:GetIssueGroup";
	/** [Read] transform-custom:GetKnowledgeItem */
	static readonly actionGetKnowledgeItem = "transform-custom:GetKnowledgeItem";
	/** [Read] transform-custom:GetRemediation */
	static readonly actionGetRemediation = "transform-custom:GetRemediation";
	/** [Read] transform-custom:GetRemediationPlan */
	static readonly actionGetRemediationPlan =
		"transform-custom:GetRemediationPlan";
	/** [Read] transform-custom:GetRepository */
	static readonly actionGetRepository = "transform-custom:GetRepository";
	/** [Read] transform-custom:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"transform-custom:GetResourcePolicy";
	/** [Read] transform-custom:GetSkillCreationJob */
	static readonly actionGetSkillCreationJob =
		"transform-custom:GetSkillCreationJob";
	/** [Read] transform-custom:GetSource */
	static readonly actionGetSource = "transform-custom:GetSource";
	/** [Read] transform-custom:GetTransformationPackageUrl */
	static readonly actionGetTransformationPackageUrl =
		"transform-custom:GetTransformationPackageUrl";
	/** [List] transform-custom:ListAnalyses */
	static readonly ListAnalyses = "transform-custom:ListAnalyses";
	/** [Read] transform-custom:ListAnalysisArtifacts */
	static readonly ListAnalysisArtifacts =
		"transform-custom:ListAnalysisArtifacts";
	/** [Read] transform-custom:ListCampaignRepositories */
	static readonly ListCampaignRepositories =
		"transform-custom:ListCampaignRepositories";
	/** [List] transform-custom:ListCampaigns */
	static readonly ListCampaigns = "transform-custom:ListCampaigns";
	/** [List] transform-custom:ListFindings */
	static readonly ListFindings = "transform-custom:ListFindings";
	/** [List] transform-custom:ListIssueGroups */
	static readonly ListIssueGroups = "transform-custom:ListIssueGroups";
	/** [List] transform-custom:ListKnowledgeItems */
	static readonly ListKnowledgeItems = "transform-custom:ListKnowledgeItems";
	/** [List] transform-custom:ListRemediationPlans */
	static readonly ListRemediationPlans =
		"transform-custom:ListRemediationPlans";
	/** [List] transform-custom:ListRemediations */
	static readonly ListRemediations = "transform-custom:ListRemediations";
	/** [List] transform-custom:ListRepositories */
	static readonly ListRepositories = "transform-custom:ListRepositories";
	/** [List] transform-custom:ListSkillCreationJobs */
	static readonly ListSkillCreationJobs =
		"transform-custom:ListSkillCreationJobs";
	/** [List] transform-custom:ListSources */
	static readonly ListSources = "transform-custom:ListSources";
	/** [Read] transform-custom:ListTagsForResource */
	static readonly ListTagsForResource = "transform-custom:ListTagsForResource";
	/** [List] transform-custom:ListTransformationPackageMetadata */
	static readonly ListTransformationPackageMetadata =
		"transform-custom:ListTransformationPackageMetadata";
	/** [Read] transform-custom:ListTransformationPackageShares */
	static readonly ListTransformationPackageShares =
		"transform-custom:ListTransformationPackageShares";
	/** [PermissionManagement] transform-custom:PutResourcePolicy */
	static readonly PutResourcePolicy = "transform-custom:PutResourcePolicy";
	/** [Write] transform-custom:ReadRepositoryContent */
	static readonly ReadRepositoryContent =
		"transform-custom:ReadRepositoryContent";
	/** [Write] transform-custom:SendTelemetryEvent */
	static readonly SendTelemetryEvent = "transform-custom:SendTelemetryEvent";
	/** [Write] transform-custom:ShareTransformationPackage */
	static readonly ShareTransformationPackage =
		"transform-custom:ShareTransformationPackage";
	/** [Write] transform-custom:StartSkillCreationJob */
	static readonly StartSkillCreationJob =
		"transform-custom:StartSkillCreationJob";
	/** [Tagging] transform-custom:TagResource */
	static readonly TagResource = "transform-custom:TagResource";
	/** [Write] transform-custom:UnshareTransformationPackage */
	static readonly UnshareTransformationPackage =
		"transform-custom:UnshareTransformationPackage";
	/** [Tagging] transform-custom:UntagResource */
	static readonly UntagResource = "transform-custom:UntagResource";
	/** [Write] transform-custom:UpdateAnalysis */
	static readonly UpdateAnalysis = "transform-custom:UpdateAnalysis";
	/** [Write] transform-custom:UpdateCampaign */
	static readonly UpdateCampaign = "transform-custom:UpdateCampaign";
	/** [Write] transform-custom:UpdateCampaignRepositoryStatus */
	static readonly UpdateCampaignRepositoryStatus =
		"transform-custom:UpdateCampaignRepositoryStatus";
	/** [Write] transform-custom:UpdateIssueGroup */
	static readonly UpdateIssueGroup = "transform-custom:UpdateIssueGroup";
	/** [Write] transform-custom:UpdateKnowledgeItemConfiguration */
	static readonly UpdateKnowledgeItemConfiguration =
		"transform-custom:UpdateKnowledgeItemConfiguration";
	/** [Write] transform-custom:UpdateKnowledgeItemStatus */
	static readonly UpdateKnowledgeItemStatus =
		"transform-custom:UpdateKnowledgeItemStatus";
	/** [Write] transform-custom:UpdateRemediation */
	static readonly UpdateRemediation = "transform-custom:UpdateRemediation";
	/** [Write] transform-custom:UpdateRemediationPlan */
	static readonly UpdateRemediationPlan =
		"transform-custom:UpdateRemediationPlan";
	/** [Write] transform-custom:UpdateRepository */
	static readonly UpdateRepository = "transform-custom:UpdateRepository";
	/** [Write] transform-custom:UpdateSkillCreationJob */
	static readonly UpdateSkillCreationJob =
		"transform-custom:UpdateSkillCreationJob";
	/** [Write] transform-custom:UpdateSource */
	static readonly UpdateSource = "transform-custom:UpdateSource";
	/** [Write] transform-custom:WriteRepositoryContent */
	static readonly WriteRepositoryContent =
		"transform-custom:WriteRepositoryContent";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TransformCustomActions.actionGetAnalysis,
		TransformCustomActions.actionGetAnalysisArtifactDownloadUrl,
		TransformCustomActions.actionGetCampaign,
		TransformCustomActions.actionGetFinding,
		TransformCustomActions.actionGetFindingGroups,
		TransformCustomActions.actionGetIssueGroup,
		TransformCustomActions.actionGetKnowledgeItem,
		TransformCustomActions.actionGetRemediation,
		TransformCustomActions.actionGetRemediationPlan,
		TransformCustomActions.actionGetRepository,
		TransformCustomActions.actionGetResourcePolicy,
		TransformCustomActions.actionGetSkillCreationJob,
		TransformCustomActions.actionGetSource,
		TransformCustomActions.actionGetTransformationPackageUrl,
		TransformCustomActions.ListAnalysisArtifacts,
		TransformCustomActions.ListCampaignRepositories,
		TransformCustomActions.ListTagsForResource,
		TransformCustomActions.ListTransformationPackageShares,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TransformCustomActions.BatchCreateFindings,
		TransformCustomActions.BatchUpdateFindings,
		TransformCustomActions.CancelSkillCreationJob,
		TransformCustomActions.CompleteTransformationPackageUpload,
		TransformCustomActions.ConnectSource,
		TransformCustomActions.ContributeKnowledgeItems,
		TransformCustomActions.ConverseStream,
		TransformCustomActions.CreateAnalysis,
		TransformCustomActions.CreateCampaign,
		TransformCustomActions.CreateRemediation,
		TransformCustomActions.CreateRemediationPlan,
		TransformCustomActions.CreateRepository,
		TransformCustomActions.CreateSource,
		TransformCustomActions.CreateTransformationPackageUrl,
		TransformCustomActions.DeleteAnalysis,
		TransformCustomActions.DeleteCampaign,
		TransformCustomActions.DeleteFinding,
		TransformCustomActions.DeleteKnowledgeItem,
		TransformCustomActions.DeleteRemediation,
		TransformCustomActions.DeleteRemediationPlan,
		TransformCustomActions.DeleteRepository,
		TransformCustomActions.DeleteSource,
		TransformCustomActions.DeleteTransformationPackage,
		TransformCustomActions.ExecuteTransformation,
		TransformCustomActions.ReadRepositoryContent,
		TransformCustomActions.SendTelemetryEvent,
		TransformCustomActions.ShareTransformationPackage,
		TransformCustomActions.StartSkillCreationJob,
		TransformCustomActions.UnshareTransformationPackage,
		TransformCustomActions.UpdateAnalysis,
		TransformCustomActions.UpdateCampaign,
		TransformCustomActions.UpdateCampaignRepositoryStatus,
		TransformCustomActions.UpdateIssueGroup,
		TransformCustomActions.UpdateKnowledgeItemConfiguration,
		TransformCustomActions.UpdateKnowledgeItemStatus,
		TransformCustomActions.UpdateRemediation,
		TransformCustomActions.UpdateRemediationPlan,
		TransformCustomActions.UpdateRepository,
		TransformCustomActions.UpdateSkillCreationJob,
		TransformCustomActions.UpdateSource,
		TransformCustomActions.WriteRepositoryContent,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TransformCustomActions.ListAnalyses,
		TransformCustomActions.ListCampaigns,
		TransformCustomActions.ListFindings,
		TransformCustomActions.ListIssueGroups,
		TransformCustomActions.ListKnowledgeItems,
		TransformCustomActions.ListRemediationPlans,
		TransformCustomActions.ListRemediations,
		TransformCustomActions.ListRepositories,
		TransformCustomActions.ListSkillCreationJobs,
		TransformCustomActions.ListSources,
		TransformCustomActions.ListTransformationPackageMetadata,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		TransformCustomActions.DeleteResourcePolicy,
		TransformCustomActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TransformCustomActions.TagResource,
		TransformCustomActions.UntagResource,
	];
}

/**
 * Properties for building a analysis ARN.
 */
export interface TransformCustomAnalysisArnProps {
	/** The AnalysisId component of the ARN. */
	readonly analysisId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a analysis ARN.
 */
export interface TransformCustomAnalysisArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AnalysisId component. */
	readonly analysisId: string;
}

/**
 * Properties for building a campaign ARN.
 */
export interface TransformCustomCampaignArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a campaign ARN.
 */
export interface TransformCustomCampaignArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a finding ARN.
 */
export interface TransformCustomFindingArnProps {
	/** The FindingId component of the ARN. */
	readonly findingId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a finding ARN.
 */
export interface TransformCustomFindingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FindingId component. */
	readonly findingId: string;
}

/**
 * Properties for building a issue-group ARN.
 */
export interface TransformCustomIssueGroupArnProps {
	/** The IssueGroupId component of the ARN. */
	readonly issueGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a issue-group ARN.
 */
export interface TransformCustomIssueGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IssueGroupId component. */
	readonly issueGroupId: string;
}

/**
 * Properties for building a knowledge-item ARN.
 */
export interface TransformCustomKnowledgeItemArnProps {
	/** The TransformationPackageName component of the ARN. */
	readonly transformationPackageName: string;
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a knowledge-item ARN.
 */
export interface TransformCustomKnowledgeItemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TransformationPackageName component. */
	readonly transformationPackageName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a package ARN.
 */
export interface TransformCustomPackageArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a package ARN.
 */
export interface TransformCustomPackageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a remediation ARN.
 */
export interface TransformCustomRemediationArnProps {
	/** The RemediationId component of the ARN. */
	readonly remediationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a remediation ARN.
 */
export interface TransformCustomRemediationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RemediationId component. */
	readonly remediationId: string;
}

/**
 * Properties for building a remediation-plan ARN.
 */
export interface TransformCustomRemediationPlanArnProps {
	/** The RemediationPlanId component of the ARN. */
	readonly remediationPlanId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a remediation-plan ARN.
 */
export interface TransformCustomRemediationPlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RemediationPlanId component. */
	readonly remediationPlanId: string;
}

/**
 * Properties for building a repository ARN.
 */
export interface TransformCustomRepositoryArnProps {
	/** The RepositoryId component of the ARN. */
	readonly repositoryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a repository ARN.
 */
export interface TransformCustomRepositoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RepositoryId component. */
	readonly repositoryId: string;
}

/**
 * Properties for building a skill-creation-job ARN.
 */
export interface TransformCustomSkillCreationJobArnProps {
	/** The SkillCreationJobId component of the ARN. */
	readonly skillCreationJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a skill-creation-job ARN.
 */
export interface TransformCustomSkillCreationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SkillCreationJobId component. */
	readonly skillCreationJobId: string;
}

/**
 * Properties for building a source ARN.
 */
export interface TransformCustomSourceArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a source ARN.
 */
export interface TransformCustomSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

const AnalysisArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):analysis\/(?<analysisId>[^:/?]+)$/;
const CampaignArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):campaign\/(?<name>[^:/?]+)$/;
const FindingArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):finding\/(?<findingId>[^:/?]+)$/;
const IssueGroupArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):issue-group\/(?<issueGroupId>[^:/?]+)$/;
const KnowledgeItemArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):package\/(?<transformationPackageName>[^:/?]+)\/knowledge-item\/(?<id>[^:/?]+)$/;
const PackageArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):package\/(?<name>[^:/?]+)$/;
const RemediationArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):remediation\/(?<remediationId>[^:/?]+)$/;
const RemediationPlanArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):remediation-plan\/(?<remediationPlanId>[^:/?]+)$/;
const RepositoryArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):repository\/(?<repositoryId>[^:/?]+)$/;
const SkillCreationJobArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):skill-creation-job\/(?<skillCreationJobId>[^:/?]+)$/;
const SourceArnRegex =
	/^arn:(?<partition>[^:]+):transform-custom:(?<region>[^:]*):(?<account>[^:]*):source\/(?<name>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for transform-custom resources.
 */
export class TransformCustomResources {
	/**
	 * Builds an ARN for the analysis resource.
	 */
	static analysis(props: TransformCustomAnalysisArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:analysis/${props.analysisId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the analysis resource.
	 */
	static isValidAnalysisArn(arn: string): boolean {
		return AnalysisArnRegex.test(arn);
	}

	/**
	 * Parses a analysis ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnalysisArn(arn: string): TransformCustomAnalysisArnComponents {
		const match = AnalysisArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid analysis ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			analysisId: match.groups!.analysisId,
		};
	}

	/**
	 * Builds an ARN for the campaign resource.
	 */
	static campaign(props: TransformCustomCampaignArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:campaign/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the campaign resource.
	 */
	static isValidCampaignArn(arn: string): boolean {
		return CampaignArnRegex.test(arn);
	}

	/**
	 * Parses a campaign ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCampaignArn(arn: string): TransformCustomCampaignArnComponents {
		const match = CampaignArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid campaign ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the finding resource.
	 */
	static finding(props: TransformCustomFindingArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:finding/${props.findingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the finding resource.
	 */
	static isValidFindingArn(arn: string): boolean {
		return FindingArnRegex.test(arn);
	}

	/**
	 * Parses a finding ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFindingArn(arn: string): TransformCustomFindingArnComponents {
		const match = FindingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid finding ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			findingId: match.groups!.findingId,
		};
	}

	/**
	 * Builds an ARN for the issue-group resource.
	 */
	static issueGroup(props: TransformCustomIssueGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:issue-group/${props.issueGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the issue-group resource.
	 */
	static isValidIssueGroupArn(arn: string): boolean {
		return IssueGroupArnRegex.test(arn);
	}

	/**
	 * Parses a issue-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIssueGroupArn(
		arn: string,
	): TransformCustomIssueGroupArnComponents {
		const match = IssueGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid issue-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			issueGroupId: match.groups!.issueGroupId,
		};
	}

	/**
	 * Builds an ARN for the knowledge-item resource.
	 */
	static knowledgeItem(props: TransformCustomKnowledgeItemArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:package/${props.transformationPackageName}/knowledge-item/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the knowledge-item resource.
	 */
	static isValidKnowledgeItemArn(arn: string): boolean {
		return KnowledgeItemArnRegex.test(arn);
	}

	/**
	 * Parses a knowledge-item ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKnowledgeItemArn(
		arn: string,
	): TransformCustomKnowledgeItemArnComponents {
		const match = KnowledgeItemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid knowledge-item ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			transformationPackageName: match.groups!.transformationPackageName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the package resource.
	 */
	static package(props: TransformCustomPackageArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:package/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the package resource.
	 */
	static isValidPackageArn(arn: string): boolean {
		return PackageArnRegex.test(arn);
	}

	/**
	 * Parses a package ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackageArn(arn: string): TransformCustomPackageArnComponents {
		const match = PackageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid package ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the remediation resource.
	 */
	static remediation(props: TransformCustomRemediationArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:remediation/${props.remediationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the remediation resource.
	 */
	static isValidRemediationArn(arn: string): boolean {
		return RemediationArnRegex.test(arn);
	}

	/**
	 * Parses a remediation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRemediationArn(
		arn: string,
	): TransformCustomRemediationArnComponents {
		const match = RemediationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid remediation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			remediationId: match.groups!.remediationId,
		};
	}

	/**
	 * Builds an ARN for the remediation-plan resource.
	 */
	static remediationPlan(
		props: TransformCustomRemediationPlanArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:remediation-plan/${props.remediationPlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the remediation-plan resource.
	 */
	static isValidRemediationPlanArn(arn: string): boolean {
		return RemediationPlanArnRegex.test(arn);
	}

	/**
	 * Parses a remediation-plan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRemediationPlanArn(
		arn: string,
	): TransformCustomRemediationPlanArnComponents {
		const match = RemediationPlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid remediation-plan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			remediationPlanId: match.groups!.remediationPlanId,
		};
	}

	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: TransformCustomRepositoryArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:repository/${props.repositoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the repository resource.
	 */
	static isValidRepositoryArn(arn: string): boolean {
		return RepositoryArnRegex.test(arn);
	}

	/**
	 * Parses a repository ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRepositoryArn(
		arn: string,
	): TransformCustomRepositoryArnComponents {
		const match = RepositoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid repository ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			repositoryId: match.groups!.repositoryId,
		};
	}

	/**
	 * Builds an ARN for the skill-creation-job resource.
	 */
	static skillCreationJob(
		props: TransformCustomSkillCreationJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:skill-creation-job/${props.skillCreationJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the skill-creation-job resource.
	 */
	static isValidSkillCreationJobArn(arn: string): boolean {
		return SkillCreationJobArnRegex.test(arn);
	}

	/**
	 * Parses a skill-creation-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSkillCreationJobArn(
		arn: string,
	): TransformCustomSkillCreationJobArnComponents {
		const match = SkillCreationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid skill-creation-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			skillCreationJobId: match.groups!.skillCreationJobId,
		};
	}

	/**
	 * Builds an ARN for the source resource.
	 */
	static source(props: TransformCustomSourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:transform-custom:${props.region ?? "*"}:${props.account ?? "*"}:source/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the source resource.
	 */
	static isValidSourceArn(arn: string): boolean {
		return SourceArnRegex.test(arn);
	}

	/**
	 * Parses a source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSourceArn(arn: string): TransformCustomSourceArnComponents {
		const match = SourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}
}

/**
 * Condition key constants and builders for transform-custom.
 */
export class TransformCustomConditions {
	/** Condition keys applicable to the BatchCreateFindings action. */
	static readonly BatchCreateFindingsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CancelSkillCreationJob action. */
	static readonly CancelSkillCreationJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CompleteTransformationPackageUpload action. */
	static readonly CompleteTransformationPackageUploadConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ConnectSource action. */
	static readonly ConnectSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ContributeKnowledgeItems action. */
	static readonly ContributeKnowledgeItemsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAnalysis action. */
	static readonly CreateAnalysisConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CreateCampaignConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRemediation action. */
	static readonly CreateRemediationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRemediationPlan action. */
	static readonly CreateRemediationPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CreateRepositoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSource action. */
	static readonly CreateSourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTransformationPackageUrl action. */
	static readonly CreateTransformationPackageUrlConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAnalysis action. */
	static readonly DeleteAnalysisConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCampaign action. */
	static readonly DeleteCampaignConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteFinding action. */
	static readonly DeleteFindingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteKnowledgeItem action. */
	static readonly DeleteKnowledgeItemConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRemediation action. */
	static readonly DeleteRemediationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRemediationPlan action. */
	static readonly DeleteRemediationPlanConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRepository action. */
	static readonly DeleteRepositoryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DeleteResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteSource action. */
	static readonly DeleteSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteTransformationPackage action. */
	static readonly DeleteTransformationPackageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ExecuteTransformation action. */
	static readonly ExecuteTransformationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnalysis action. */
	static readonly actionGetAnalysisConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAnalysisArtifactDownloadUrl action. */
	static readonly actionGetAnalysisArtifactDownloadUrlConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetCampaign action. */
	static readonly actionGetCampaignConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetFinding action. */
	static readonly actionGetFindingConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIssueGroup action. */
	static readonly actionGetIssueGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetKnowledgeItem action. */
	static readonly actionGetKnowledgeItemConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRemediation action. */
	static readonly actionGetRemediationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRemediationPlan action. */
	static readonly actionGetRemediationPlanConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRepository action. */
	static readonly actionGetRepositoryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetResourcePolicy action. */
	static readonly actionGetResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSkillCreationJob action. */
	static readonly actionGetSkillCreationJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSource action. */
	static readonly actionGetSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetTransformationPackageUrl action. */
	static readonly actionGetTransformationPackageUrlConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAnalysisArtifacts action. */
	static readonly ListAnalysisArtifactsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCampaignRepositories action. */
	static readonly ListCampaignRepositoriesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTransformationPackageShares action. */
	static readonly ListTransformationPackageSharesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PutResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ReadRepositoryContent action. */
	static readonly ReadRepositoryContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ShareTransformationPackage action. */
	static readonly ShareTransformationPackageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSkillCreationJob action. */
	static readonly StartSkillCreationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnshareTransformationPackage action. */
	static readonly UnshareTransformationPackageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAnalysis action. */
	static readonly UpdateAnalysisConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCampaign action. */
	static readonly UpdateCampaignConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCampaignRepositoryStatus action. */
	static readonly UpdateCampaignRepositoryStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateIssueGroup action. */
	static readonly UpdateIssueGroupConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateKnowledgeItemConfiguration action. */
	static readonly UpdateKnowledgeItemConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateKnowledgeItemStatus action. */
	static readonly UpdateKnowledgeItemStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateRemediation action. */
	static readonly UpdateRemediationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateRemediationPlan action. */
	static readonly UpdateRemediationPlanConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateRepository action. */
	static readonly UpdateRepositoryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSkillCreationJob action. */
	static readonly UpdateSkillCreationJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSource action. */
	static readonly UpdateSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the WriteRepositoryContent action. */
	static readonly WriteRepositoryContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
