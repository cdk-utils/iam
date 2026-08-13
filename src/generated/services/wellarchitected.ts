// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/wellarchitected.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the wellarchitected service.
 */
export class WellArchitectedActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "wellarchitected";

	/** [Write] wellarchitected:AssociateLenses */
	static readonly AssociateLenses = "wellarchitected:AssociateLenses";
	/** [Write] wellarchitected:AssociateProfiles */
	static readonly AssociateProfiles = "wellarchitected:AssociateProfiles";
	/** [Write] wellarchitected:ConfigureIntegration */
	static readonly ConfigureIntegration = "wellarchitected:ConfigureIntegration";
	/** [Write] wellarchitected:CreateAgentContext */
	static readonly CreateAgentContext = "wellarchitected:CreateAgentContext";
	/** [Write] wellarchitected:CreateAgentGoal */
	static readonly CreateAgentGoal = "wellarchitected:CreateAgentGoal";
	/** [Write] wellarchitected:CreateAgentProfile */
	static readonly CreateAgentProfile = "wellarchitected:CreateAgentProfile";
	/** [Write] wellarchitected:CreateLensShare */
	static readonly CreateLensShare = "wellarchitected:CreateLensShare";
	/** [Write] wellarchitected:CreateLensVersion */
	static readonly CreateLensVersion = "wellarchitected:CreateLensVersion";
	/** [Write] wellarchitected:CreateMilestone */
	static readonly CreateMilestone = "wellarchitected:CreateMilestone";
	/** [Write] wellarchitected:CreateProfile */
	static readonly CreateProfile = "wellarchitected:CreateProfile";
	/** [Write] wellarchitected:CreateProfileShare */
	static readonly CreateProfileShare = "wellarchitected:CreateProfileShare";
	/** [Write] wellarchitected:CreateReviewTemplate */
	static readonly CreateReviewTemplate = "wellarchitected:CreateReviewTemplate";
	/** [Write] wellarchitected:CreateTemplateShare */
	static readonly CreateTemplateShare = "wellarchitected:CreateTemplateShare";
	/** [Write] wellarchitected:CreateWorkload */
	static readonly CreateWorkload = "wellarchitected:CreateWorkload";
	/** [Write] wellarchitected:CreateWorkloadShare */
	static readonly CreateWorkloadShare = "wellarchitected:CreateWorkloadShare";
	/** [Write] wellarchitected:DeleteAgentContext */
	static readonly DeleteAgentContext = "wellarchitected:DeleteAgentContext";
	/** [Write] wellarchitected:DeleteAgentGoal */
	static readonly DeleteAgentGoal = "wellarchitected:DeleteAgentGoal";
	/** [Write] wellarchitected:DeleteAgentProfile */
	static readonly DeleteAgentProfile = "wellarchitected:DeleteAgentProfile";
	/** [Write] wellarchitected:DeleteLens */
	static readonly DeleteLens = "wellarchitected:DeleteLens";
	/** [Write] wellarchitected:DeleteLensShare */
	static readonly DeleteLensShare = "wellarchitected:DeleteLensShare";
	/** [Write] wellarchitected:DeleteProfile */
	static readonly DeleteProfile = "wellarchitected:DeleteProfile";
	/** [Write] wellarchitected:DeleteProfileShare */
	static readonly DeleteProfileShare = "wellarchitected:DeleteProfileShare";
	/** [Write] wellarchitected:DeleteReviewTemplate */
	static readonly DeleteReviewTemplate = "wellarchitected:DeleteReviewTemplate";
	/** [Write] wellarchitected:DeleteTemplateShare */
	static readonly DeleteTemplateShare = "wellarchitected:DeleteTemplateShare";
	/** [Write] wellarchitected:DeleteWorkload */
	static readonly DeleteWorkload = "wellarchitected:DeleteWorkload";
	/** [Write] wellarchitected:DeleteWorkloadShare */
	static readonly DeleteWorkloadShare = "wellarchitected:DeleteWorkloadShare";
	/** [Write] wellarchitected:DisassociateLenses */
	static readonly DisassociateLenses = "wellarchitected:DisassociateLenses";
	/** [Write] wellarchitected:DisassociateProfiles */
	static readonly DisassociateProfiles = "wellarchitected:DisassociateProfiles";
	/** [Read] wellarchitected:ExportLens */
	static readonly ExportLens = "wellarchitected:ExportLens";
	/** [Read] wellarchitected:GetAgentContext */
	static readonly actionGetAgentContext = "wellarchitected:GetAgentContext";
	/** [Read] wellarchitected:GetAgentGoal */
	static readonly actionGetAgentGoal = "wellarchitected:GetAgentGoal";
	/** [Read] wellarchitected:GetAgentProfile */
	static readonly actionGetAgentProfile = "wellarchitected:GetAgentProfile";
	/** [Read] wellarchitected:GetAgentRecommendation */
	static readonly actionGetAgentRecommendation =
		"wellarchitected:GetAgentRecommendation";
	/** [Read] wellarchitected:GetAgentRecommendationGeneration */
	static readonly actionGetAgentRecommendationGeneration =
		"wellarchitected:GetAgentRecommendationGeneration";
	/** [Read] wellarchitected:GetAnswer */
	static readonly actionGetAnswer = "wellarchitected:GetAnswer";
	/** [Read] wellarchitected:GetConsolidatedReport */
	static readonly actionGetConsolidatedReport =
		"wellarchitected:GetConsolidatedReport";
	/** [Read] wellarchitected:GetGlobalSettings */
	static readonly actionGetGlobalSettings = "wellarchitected:GetGlobalSettings";
	/** [Read] wellarchitected:GetLens */
	static readonly actionGetLens = "wellarchitected:GetLens";
	/** [Read] wellarchitected:GetLensReview */
	static readonly actionGetLensReview = "wellarchitected:GetLensReview";
	/** [Read] wellarchitected:GetLensReviewReport */
	static readonly actionGetLensReviewReport =
		"wellarchitected:GetLensReviewReport";
	/** [Read] wellarchitected:GetLensVersionDifference */
	static readonly actionGetLensVersionDifference =
		"wellarchitected:GetLensVersionDifference";
	/** [Read] wellarchitected:GetMilestone */
	static readonly actionGetMilestone = "wellarchitected:GetMilestone";
	/** [Read] wellarchitected:GetProfile */
	static readonly actionGetProfile = "wellarchitected:GetProfile";
	/** [Read] wellarchitected:GetProfileTemplate */
	static readonly actionGetProfileTemplate =
		"wellarchitected:GetProfileTemplate";
	/** [Read] wellarchitected:GetReviewTemplate */
	static readonly actionGetReviewTemplate = "wellarchitected:GetReviewTemplate";
	/** [Read] wellarchitected:GetReviewTemplateAnswer */
	static readonly actionGetReviewTemplateAnswer =
		"wellarchitected:GetReviewTemplateAnswer";
	/** [Read] wellarchitected:GetReviewTemplateLensReview */
	static readonly actionGetReviewTemplateLensReview =
		"wellarchitected:GetReviewTemplateLensReview";
	/** [Read] wellarchitected:GetWorkload */
	static readonly actionGetWorkload = "wellarchitected:GetWorkload";
	/** [Write] wellarchitected:ImportLens */
	static readonly ImportLens = "wellarchitected:ImportLens";
	/** [Read] wellarchitected:ListAgentContexts */
	static readonly ListAgentContexts = "wellarchitected:ListAgentContexts";
	/** [Read] wellarchitected:ListAgentGoals */
	static readonly ListAgentGoals = "wellarchitected:ListAgentGoals";
	/** [Read] wellarchitected:ListAgentProfiles */
	static readonly ListAgentProfiles = "wellarchitected:ListAgentProfiles";
	/** [Read] wellarchitected:ListAgentRecommendationGenerations */
	static readonly ListAgentRecommendationGenerations =
		"wellarchitected:ListAgentRecommendationGenerations";
	/** [Read] wellarchitected:ListAgentRecommendationItems */
	static readonly ListAgentRecommendationItems =
		"wellarchitected:ListAgentRecommendationItems";
	/** [Read] wellarchitected:ListAgentRecommendations */
	static readonly ListAgentRecommendations =
		"wellarchitected:ListAgentRecommendations";
	/** [List] wellarchitected:ListAnswers */
	static readonly ListAnswers = "wellarchitected:ListAnswers";
	/** [List] wellarchitected:ListCheckDetails */
	static readonly ListCheckDetails = "wellarchitected:ListCheckDetails";
	/** [List] wellarchitected:ListCheckSummaries */
	static readonly ListCheckSummaries = "wellarchitected:ListCheckSummaries";
	/** [List] wellarchitected:ListLensReviewImprovements */
	static readonly ListLensReviewImprovements =
		"wellarchitected:ListLensReviewImprovements";
	/** [List] wellarchitected:ListLensReviews */
	static readonly ListLensReviews = "wellarchitected:ListLensReviews";
	/** [List] wellarchitected:ListLensShares */
	static readonly ListLensShares = "wellarchitected:ListLensShares";
	/** [List] wellarchitected:ListLenses */
	static readonly ListLenses = "wellarchitected:ListLenses";
	/** [List] wellarchitected:ListMilestones */
	static readonly ListMilestones = "wellarchitected:ListMilestones";
	/** [List] wellarchitected:ListNotifications */
	static readonly ListNotifications = "wellarchitected:ListNotifications";
	/** [List] wellarchitected:ListProfileNotifications */
	static readonly ListProfileNotifications =
		"wellarchitected:ListProfileNotifications";
	/** [List] wellarchitected:ListProfileShares */
	static readonly ListProfileShares = "wellarchitected:ListProfileShares";
	/** [List] wellarchitected:ListProfiles */
	static readonly ListProfiles = "wellarchitected:ListProfiles";
	/** [List] wellarchitected:ListReviewTemplateAnswers */
	static readonly ListReviewTemplateAnswers =
		"wellarchitected:ListReviewTemplateAnswers";
	/** [List] wellarchitected:ListReviewTemplates */
	static readonly ListReviewTemplates = "wellarchitected:ListReviewTemplates";
	/** [List] wellarchitected:ListShareInvitations */
	static readonly ListShareInvitations = "wellarchitected:ListShareInvitations";
	/** [Read] wellarchitected:ListTagsForResource */
	static readonly ListTagsForResource = "wellarchitected:ListTagsForResource";
	/** [List] wellarchitected:ListTemplateShares */
	static readonly ListTemplateShares = "wellarchitected:ListTemplateShares";
	/** [List] wellarchitected:ListWorkloadShares */
	static readonly ListWorkloadShares = "wellarchitected:ListWorkloadShares";
	/** [List] wellarchitected:ListWorkloads */
	static readonly ListWorkloads = "wellarchitected:ListWorkloads";
	/** [Write] wellarchitected:PutAgentRecommendationFeedback */
	static readonly PutAgentRecommendationFeedback =
		"wellarchitected:PutAgentRecommendationFeedback";
	/** [Write] wellarchitected:StartAgentRecommendationGeneration */
	static readonly StartAgentRecommendationGeneration =
		"wellarchitected:StartAgentRecommendationGeneration";
	/** [Tagging] wellarchitected:TagResource */
	static readonly TagResource = "wellarchitected:TagResource";
	/** [Tagging] wellarchitected:UntagResource */
	static readonly UntagResource = "wellarchitected:UntagResource";
	/** [Write] wellarchitected:UpdateAgentContext */
	static readonly UpdateAgentContext = "wellarchitected:UpdateAgentContext";
	/** [Write] wellarchitected:UpdateAgentGoal */
	static readonly UpdateAgentGoal = "wellarchitected:UpdateAgentGoal";
	/** [Write] wellarchitected:UpdateAgentProfile */
	static readonly UpdateAgentProfile = "wellarchitected:UpdateAgentProfile";
	/** [Write] wellarchitected:UpdateAgentRecommendationStatus */
	static readonly UpdateAgentRecommendationStatus =
		"wellarchitected:UpdateAgentRecommendationStatus";
	/** [Write] wellarchitected:UpdateAnswer */
	static readonly UpdateAnswer = "wellarchitected:UpdateAnswer";
	/** [Write] wellarchitected:UpdateGlobalSettings */
	static readonly UpdateGlobalSettings = "wellarchitected:UpdateGlobalSettings";
	/** [Write] wellarchitected:UpdateIntegration */
	static readonly UpdateIntegration = "wellarchitected:UpdateIntegration";
	/** [Write] wellarchitected:UpdateLensReview */
	static readonly UpdateLensReview = "wellarchitected:UpdateLensReview";
	/** [Write] wellarchitected:UpdateProfile */
	static readonly UpdateProfile = "wellarchitected:UpdateProfile";
	/** [Write] wellarchitected:UpdateReviewTemplate */
	static readonly UpdateReviewTemplate = "wellarchitected:UpdateReviewTemplate";
	/** [Write] wellarchitected:UpdateReviewTemplateAnswer */
	static readonly UpdateReviewTemplateAnswer =
		"wellarchitected:UpdateReviewTemplateAnswer";
	/** [Write] wellarchitected:UpdateReviewTemplateLensReview */
	static readonly UpdateReviewTemplateLensReview =
		"wellarchitected:UpdateReviewTemplateLensReview";
	/** [Write] wellarchitected:UpdateShareInvitation */
	static readonly UpdateShareInvitation =
		"wellarchitected:UpdateShareInvitation";
	/** [Write] wellarchitected:UpdateWorkload */
	static readonly UpdateWorkload = "wellarchitected:UpdateWorkload";
	/** [Write] wellarchitected:UpdateWorkloadShare */
	static readonly UpdateWorkloadShare = "wellarchitected:UpdateWorkloadShare";
	/** [Write] wellarchitected:UpgradeLensReview */
	static readonly UpgradeLensReview = "wellarchitected:UpgradeLensReview";
	/** [Write] wellarchitected:UpgradeProfileVersion */
	static readonly UpgradeProfileVersion =
		"wellarchitected:UpgradeProfileVersion";
	/** [Write] wellarchitected:UpgradeReviewTemplateLensReview */
	static readonly UpgradeReviewTemplateLensReview =
		"wellarchitected:UpgradeReviewTemplateLensReview";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WellArchitectedActions.ExportLens,
		WellArchitectedActions.actionGetAgentContext,
		WellArchitectedActions.actionGetAgentGoal,
		WellArchitectedActions.actionGetAgentProfile,
		WellArchitectedActions.actionGetAgentRecommendation,
		WellArchitectedActions.actionGetAgentRecommendationGeneration,
		WellArchitectedActions.actionGetAnswer,
		WellArchitectedActions.actionGetConsolidatedReport,
		WellArchitectedActions.actionGetGlobalSettings,
		WellArchitectedActions.actionGetLens,
		WellArchitectedActions.actionGetLensReview,
		WellArchitectedActions.actionGetLensReviewReport,
		WellArchitectedActions.actionGetLensVersionDifference,
		WellArchitectedActions.actionGetMilestone,
		WellArchitectedActions.actionGetProfile,
		WellArchitectedActions.actionGetProfileTemplate,
		WellArchitectedActions.actionGetReviewTemplate,
		WellArchitectedActions.actionGetReviewTemplateAnswer,
		WellArchitectedActions.actionGetReviewTemplateLensReview,
		WellArchitectedActions.actionGetWorkload,
		WellArchitectedActions.ListAgentContexts,
		WellArchitectedActions.ListAgentGoals,
		WellArchitectedActions.ListAgentProfiles,
		WellArchitectedActions.ListAgentRecommendationGenerations,
		WellArchitectedActions.ListAgentRecommendationItems,
		WellArchitectedActions.ListAgentRecommendations,
		WellArchitectedActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WellArchitectedActions.AssociateLenses,
		WellArchitectedActions.AssociateProfiles,
		WellArchitectedActions.ConfigureIntegration,
		WellArchitectedActions.CreateAgentContext,
		WellArchitectedActions.CreateAgentGoal,
		WellArchitectedActions.CreateAgentProfile,
		WellArchitectedActions.CreateLensShare,
		WellArchitectedActions.CreateLensVersion,
		WellArchitectedActions.CreateMilestone,
		WellArchitectedActions.CreateProfile,
		WellArchitectedActions.CreateProfileShare,
		WellArchitectedActions.CreateReviewTemplate,
		WellArchitectedActions.CreateTemplateShare,
		WellArchitectedActions.CreateWorkload,
		WellArchitectedActions.CreateWorkloadShare,
		WellArchitectedActions.DeleteAgentContext,
		WellArchitectedActions.DeleteAgentGoal,
		WellArchitectedActions.DeleteAgentProfile,
		WellArchitectedActions.DeleteLens,
		WellArchitectedActions.DeleteLensShare,
		WellArchitectedActions.DeleteProfile,
		WellArchitectedActions.DeleteProfileShare,
		WellArchitectedActions.DeleteReviewTemplate,
		WellArchitectedActions.DeleteTemplateShare,
		WellArchitectedActions.DeleteWorkload,
		WellArchitectedActions.DeleteWorkloadShare,
		WellArchitectedActions.DisassociateLenses,
		WellArchitectedActions.DisassociateProfiles,
		WellArchitectedActions.ImportLens,
		WellArchitectedActions.PutAgentRecommendationFeedback,
		WellArchitectedActions.StartAgentRecommendationGeneration,
		WellArchitectedActions.UpdateAgentContext,
		WellArchitectedActions.UpdateAgentGoal,
		WellArchitectedActions.UpdateAgentProfile,
		WellArchitectedActions.UpdateAgentRecommendationStatus,
		WellArchitectedActions.UpdateAnswer,
		WellArchitectedActions.UpdateGlobalSettings,
		WellArchitectedActions.UpdateIntegration,
		WellArchitectedActions.UpdateLensReview,
		WellArchitectedActions.UpdateProfile,
		WellArchitectedActions.UpdateReviewTemplate,
		WellArchitectedActions.UpdateReviewTemplateAnswer,
		WellArchitectedActions.UpdateReviewTemplateLensReview,
		WellArchitectedActions.UpdateShareInvitation,
		WellArchitectedActions.UpdateWorkload,
		WellArchitectedActions.UpdateWorkloadShare,
		WellArchitectedActions.UpgradeLensReview,
		WellArchitectedActions.UpgradeProfileVersion,
		WellArchitectedActions.UpgradeReviewTemplateLensReview,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WellArchitectedActions.ListAnswers,
		WellArchitectedActions.ListCheckDetails,
		WellArchitectedActions.ListCheckSummaries,
		WellArchitectedActions.ListLensReviewImprovements,
		WellArchitectedActions.ListLensReviews,
		WellArchitectedActions.ListLensShares,
		WellArchitectedActions.ListLenses,
		WellArchitectedActions.ListMilestones,
		WellArchitectedActions.ListNotifications,
		WellArchitectedActions.ListProfileNotifications,
		WellArchitectedActions.ListProfileShares,
		WellArchitectedActions.ListProfiles,
		WellArchitectedActions.ListReviewTemplateAnswers,
		WellArchitectedActions.ListReviewTemplates,
		WellArchitectedActions.ListShareInvitations,
		WellArchitectedActions.ListTemplateShares,
		WellArchitectedActions.ListWorkloadShares,
		WellArchitectedActions.ListWorkloads,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WellArchitectedActions.TagResource,
		WellArchitectedActions.UntagResource,
	];
}

/**
 * Properties for building a agent-profile ARN.
 */
export interface WellArchitectedAgentProfileArnProps {
	/** The ProfileName component of the ARN. */
	readonly profileName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agent-profile ARN.
 */
export interface WellArchitectedAgentProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfileName component. */
	readonly profileName: string;
}

/**
 * Properties for building a agent-recommendation ARN.
 */
export interface WellArchitectedAgentRecommendationArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agent-recommendation ARN.
 */
export interface WellArchitectedAgentRecommendationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a lens ARN.
 */
export interface WellArchitectedLensArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a lens ARN.
 */
export interface WellArchitectedLensArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a profile ARN.
 */
export interface WellArchitectedProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a profile ARN.
 */
export interface WellArchitectedProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a review-template ARN.
 */
export interface WellArchitectedReviewTemplateArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a review-template ARN.
 */
export interface WellArchitectedReviewTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a workload ARN.
 */
export interface WellArchitectedWorkloadArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workload ARN.
 */
export interface WellArchitectedWorkloadArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AgentProfileArnRegex =
	/^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):agent-profile\/(?<profileName>[^:/?]+)$/;
const AgentRecommendationArnRegex =
	/^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):agent-recommendation\/(?<resourceId>[^:/?]+)$/;
const LensArnRegex =
	/^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):lens\/(?<resourceId>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<resourceId>[^:/?]+)$/;
const ReviewTemplateArnRegex =
	/^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):review-template\/(?<resourceId>[^:/?]+)$/;
const WorkloadArnRegex =
	/^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):workload\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for wellarchitected resources.
 */
export class WellArchitectedResources {
	/**
	 * Builds an ARN for the agent-profile resource.
	 */
	static agentProfile(props: WellArchitectedAgentProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:wellarchitected:${props.region ?? "*"}:${props.account ?? "*"}:agent-profile/${props.profileName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agent-profile resource.
	 */
	static isValidAgentProfileArn(arn: string): boolean {
		return AgentProfileArnRegex.test(arn);
	}

	/**
	 * Parses a agent-profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentProfileArn(
		arn: string,
	): WellArchitectedAgentProfileArnComponents {
		const match = AgentProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agent-profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileName: match.groups!.profileName,
		};
	}

	/**
	 * Builds an ARN for the agent-recommendation resource.
	 */
	static agentRecommendation(
		props: WellArchitectedAgentRecommendationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:wellarchitected:${props.region ?? "*"}:${props.account ?? "*"}:agent-recommendation/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agent-recommendation resource.
	 */
	static isValidAgentRecommendationArn(arn: string): boolean {
		return AgentRecommendationArnRegex.test(arn);
	}

	/**
	 * Parses a agent-recommendation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentRecommendationArn(
		arn: string,
	): WellArchitectedAgentRecommendationArnComponents {
		const match = AgentRecommendationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agent-recommendation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the lens resource.
	 */
	static lens(props: WellArchitectedLensArnProps): string {
		return `arn:${props.partition ?? "aws"}:wellarchitected:${props.region ?? "*"}:${props.account ?? "*"}:lens/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the lens resource.
	 */
	static isValidLensArn(arn: string): boolean {
		return LensArnRegex.test(arn);
	}

	/**
	 * Parses a lens ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLensArn(arn: string): WellArchitectedLensArnComponents {
		const match = LensArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid lens ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: WellArchitectedProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:wellarchitected:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the profile resource.
	 */
	static isValidProfileArn(arn: string): boolean {
		return ProfileArnRegex.test(arn);
	}

	/**
	 * Parses a profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfileArn(arn: string): WellArchitectedProfileArnComponents {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the review-template resource.
	 */
	static reviewTemplate(props: WellArchitectedReviewTemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:wellarchitected:${props.region ?? "*"}:${props.account ?? "*"}:review-template/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the review-template resource.
	 */
	static isValidReviewTemplateArn(arn: string): boolean {
		return ReviewTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a review-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReviewTemplateArn(
		arn: string,
	): WellArchitectedReviewTemplateArnComponents {
		const match = ReviewTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid review-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the workload resource.
	 */
	static workload(props: WellArchitectedWorkloadArnProps): string {
		return `arn:${props.partition ?? "aws"}:wellarchitected:${props.region ?? "*"}:${props.account ?? "*"}:workload/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workload resource.
	 */
	static isValidWorkloadArn(arn: string): boolean {
		return WorkloadArnRegex.test(arn);
	}

	/**
	 * Parses a workload ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkloadArn(arn: string): WellArchitectedWorkloadArnComponents {
		const match = WorkloadArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workload ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for wellarchitected.
 */
export class WellArchitectedOperations {
	/** IAM actions required for the AssociateLenses API call. */
	static readonly AssociateLenses: string[] = [
		"wellarchitected:AssociateLenses",
	];
	/** IAM actions required for the AssociateProfiles API call. */
	static readonly AssociateProfiles: string[] = [
		"wellarchitected:AssociateProfiles",
	];
	/** IAM actions required for the CreateAgentContext API call. */
	static readonly CreateAgentContext: string[] = [
		"wellarchitected:CreateAgentContext",
	];
	/** IAM actions required for the CreateAgentGoal API call. */
	static readonly CreateAgentGoal: string[] = [
		"wellarchitected:CreateAgentGoal",
	];
	/** IAM actions required for the CreateAgentProfile API call. */
	static readonly CreateAgentProfile: string[] = [
		"wellarchitected:CreateAgentProfile",
		"iam:PassRole",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the CreateLensShare API call. */
	static readonly CreateLensShare: string[] = [
		"wellarchitected:CreateLensShare",
	];
	/** IAM actions required for the CreateLensVersion API call. */
	static readonly CreateLensVersion: string[] = [
		"wellarchitected:CreateLensVersion",
	];
	/** IAM actions required for the CreateMilestone API call. */
	static readonly CreateMilestone: string[] = [
		"wellarchitected:CreateMilestone",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CreateProfile: string[] = [
		"wellarchitected:CreateProfile",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the CreateProfileShare API call. */
	static readonly CreateProfileShare: string[] = [
		"wellarchitected:CreateProfileShare",
	];
	/** IAM actions required for the CreateReviewTemplate API call. */
	static readonly CreateReviewTemplate: string[] = [
		"wellarchitected:CreateReviewTemplate",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the CreateTemplateShare API call. */
	static readonly CreateTemplateShare: string[] = [
		"wellarchitected:CreateTemplateShare",
	];
	/** IAM actions required for the CreateWorkload API call. */
	static readonly CreateWorkload: string[] = [
		"wellarchitected:CreateWorkload",
		"wellarchitected:GetReviewTemplate",
		"wellarchitected:GetReviewTemplateAnswer",
		"wellarchitected:GetReviewTemplateLensReview",
		"wellarchitected:ListReviewTemplateAnswers",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the CreateWorkloadShare API call. */
	static readonly CreateWorkloadShare: string[] = [
		"wellarchitected:CreateWorkloadShare",
	];
	/** IAM actions required for the DeleteAgentContext API call. */
	static readonly DeleteAgentContext: string[] = [
		"wellarchitected:DeleteAgentContext",
	];
	/** IAM actions required for the DeleteAgentGoal API call. */
	static readonly DeleteAgentGoal: string[] = [
		"wellarchitected:DeleteAgentGoal",
	];
	/** IAM actions required for the DeleteAgentProfile API call. */
	static readonly DeleteAgentProfile: string[] = [
		"wellarchitected:DeleteAgentProfile",
	];
	/** IAM actions required for the DeleteLens API call. */
	static readonly DeleteLens: string[] = ["wellarchitected:DeleteLens"];
	/** IAM actions required for the DeleteLensShare API call. */
	static readonly DeleteLensShare: string[] = [
		"wellarchitected:DeleteLensShare",
	];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DeleteProfile: string[] = ["wellarchitected:DeleteProfile"];
	/** IAM actions required for the DeleteProfileShare API call. */
	static readonly DeleteProfileShare: string[] = [
		"wellarchitected:DeleteProfileShare",
	];
	/** IAM actions required for the DeleteReviewTemplate API call. */
	static readonly DeleteReviewTemplate: string[] = [
		"wellarchitected:DeleteReviewTemplate",
	];
	/** IAM actions required for the DeleteTemplateShare API call. */
	static readonly DeleteTemplateShare: string[] = [
		"wellarchitected:DeleteTemplateShare",
	];
	/** IAM actions required for the DeleteWorkload API call. */
	static readonly DeleteWorkload: string[] = ["wellarchitected:DeleteWorkload"];
	/** IAM actions required for the DeleteWorkloadShare API call. */
	static readonly DeleteWorkloadShare: string[] = [
		"wellarchitected:DeleteWorkloadShare",
	];
	/** IAM actions required for the DisassociateLenses API call. */
	static readonly DisassociateLenses: string[] = [
		"wellarchitected:DisassociateLenses",
	];
	/** IAM actions required for the DisassociateProfiles API call. */
	static readonly DisassociateProfiles: string[] = [
		"wellarchitected:DisassociateProfiles",
	];
	/** IAM actions required for the ExportLens API call. */
	static readonly ExportLens: string[] = ["wellarchitected:ExportLens"];
	/** IAM actions required for the GetAgentContext API call. */
	static readonly opGetAgentContext: string[] = [
		"wellarchitected:GetAgentContext",
	];
	/** IAM actions required for the GetAgentGoal API call. */
	static readonly opGetAgentGoal: string[] = ["wellarchitected:GetAgentGoal"];
	/** IAM actions required for the GetAgentProfile API call. */
	static readonly opGetAgentProfile: string[] = [
		"wellarchitected:GetAgentProfile",
	];
	/** IAM actions required for the GetAgentRecommendation API call. */
	static readonly opGetAgentRecommendation: string[] = [
		"wellarchitected:GetAgentRecommendation",
	];
	/** IAM actions required for the GetAgentRecommendationGeneration API call. */
	static readonly opGetAgentRecommendationGeneration: string[] = [
		"wellarchitected:GetAgentRecommendationGeneration",
	];
	/** IAM actions required for the GetAnswer API call. */
	static readonly opGetAnswer: string[] = ["wellarchitected:GetAnswer"];
	/** IAM actions required for the GetConsolidatedReport API call. */
	static readonly opGetConsolidatedReport: string[] = [
		"wellarchitected:GetConsolidatedReport",
	];
	/** IAM actions required for the GetGlobalSettings API call. */
	static readonly opGetGlobalSettings: string[] = [
		"wellarchitected:GetGlobalSettings",
	];
	/** IAM actions required for the GetLens API call. */
	static readonly opGetLens: string[] = ["wellarchitected:GetLens"];
	/** IAM actions required for the GetLensReview API call. */
	static readonly opGetLensReview: string[] = ["wellarchitected:GetLensReview"];
	/** IAM actions required for the GetLensReviewReport API call. */
	static readonly opGetLensReviewReport: string[] = [
		"wellarchitected:GetLensReviewReport",
	];
	/** IAM actions required for the GetLensVersionDifference API call. */
	static readonly opGetLensVersionDifference: string[] = [
		"wellarchitected:GetLensVersionDifference",
	];
	/** IAM actions required for the GetMilestone API call. */
	static readonly opGetMilestone: string[] = ["wellarchitected:GetMilestone"];
	/** IAM actions required for the GetProfile API call. */
	static readonly opGetProfile: string[] = ["wellarchitected:GetProfile"];
	/** IAM actions required for the GetProfileTemplate API call. */
	static readonly opGetProfileTemplate: string[] = [
		"wellarchitected:GetProfileTemplate",
	];
	/** IAM actions required for the GetReviewTemplate API call. */
	static readonly opGetReviewTemplate: string[] = [
		"wellarchitected:GetReviewTemplate",
	];
	/** IAM actions required for the GetReviewTemplateAnswer API call. */
	static readonly opGetReviewTemplateAnswer: string[] = [
		"wellarchitected:GetReviewTemplateAnswer",
	];
	/** IAM actions required for the GetReviewTemplateLensReview API call. */
	static readonly opGetReviewTemplateLensReview: string[] = [
		"wellarchitected:GetReviewTemplateLensReview",
	];
	/** IAM actions required for the GetWorkload API call. */
	static readonly opGetWorkload: string[] = ["wellarchitected:GetWorkload"];
	/** IAM actions required for the ImportLens API call. */
	static readonly ImportLens: string[] = [
		"wellarchitected:ImportLens",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the ListAgentContexts API call. */
	static readonly ListAgentContexts: string[] = [
		"wellarchitected:ListAgentContexts",
	];
	/** IAM actions required for the ListAgentGoals API call. */
	static readonly ListAgentGoals: string[] = ["wellarchitected:ListAgentGoals"];
	/** IAM actions required for the ListAgentProfiles API call. */
	static readonly ListAgentProfiles: string[] = [
		"wellarchitected:ListAgentProfiles",
	];
	/** IAM actions required for the ListAgentRecommendationGenerations API call. */
	static readonly ListAgentRecommendationGenerations: string[] = [
		"wellarchitected:ListAgentRecommendationGenerations",
	];
	/** IAM actions required for the ListAgentRecommendationItems API call. */
	static readonly ListAgentRecommendationItems: string[] = [
		"wellarchitected:ListAgentRecommendationItems",
	];
	/** IAM actions required for the ListAgentRecommendations API call. */
	static readonly ListAgentRecommendations: string[] = [
		"wellarchitected:ListAgentRecommendations",
	];
	/** IAM actions required for the ListAnswers API call. */
	static readonly ListAnswers: string[] = ["wellarchitected:ListAnswers"];
	/** IAM actions required for the ListCheckDetails API call. */
	static readonly ListCheckDetails: string[] = [
		"wellarchitected:ListCheckDetails",
	];
	/** IAM actions required for the ListCheckSummaries API call. */
	static readonly ListCheckSummaries: string[] = [
		"wellarchitected:ListCheckSummaries",
	];
	/** IAM actions required for the ListLensReviewImprovements API call. */
	static readonly ListLensReviewImprovements: string[] = [
		"wellarchitected:ListLensReviewImprovements",
	];
	/** IAM actions required for the ListLensReviews API call. */
	static readonly ListLensReviews: string[] = [
		"wellarchitected:ListLensReviews",
	];
	/** IAM actions required for the ListLensShares API call. */
	static readonly ListLensShares: string[] = ["wellarchitected:ListLensShares"];
	/** IAM actions required for the ListLenses API call. */
	static readonly ListLenses: string[] = ["wellarchitected:ListLenses"];
	/** IAM actions required for the ListMilestones API call. */
	static readonly ListMilestones: string[] = ["wellarchitected:ListMilestones"];
	/** IAM actions required for the ListNotifications API call. */
	static readonly ListNotifications: string[] = [
		"wellarchitected:ListNotifications",
	];
	/** IAM actions required for the ListProfileNotifications API call. */
	static readonly ListProfileNotifications: string[] = [
		"wellarchitected:ListProfileNotifications",
	];
	/** IAM actions required for the ListProfileShares API call. */
	static readonly ListProfileShares: string[] = [
		"wellarchitected:ListProfileShares",
	];
	/** IAM actions required for the ListProfiles API call. */
	static readonly ListProfiles: string[] = ["wellarchitected:ListProfiles"];
	/** IAM actions required for the ListReviewTemplateAnswers API call. */
	static readonly ListReviewTemplateAnswers: string[] = [
		"wellarchitected:ListReviewTemplateAnswers",
	];
	/** IAM actions required for the ListReviewTemplates API call. */
	static readonly ListReviewTemplates: string[] = [
		"wellarchitected:ListReviewTemplates",
	];
	/** IAM actions required for the ListShareInvitations API call. */
	static readonly ListShareInvitations: string[] = [
		"wellarchitected:ListShareInvitations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"wellarchitected:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateShares API call. */
	static readonly ListTemplateShares: string[] = [
		"wellarchitected:ListTemplateShares",
	];
	/** IAM actions required for the ListWorkloadShares API call. */
	static readonly ListWorkloadShares: string[] = [
		"wellarchitected:ListWorkloadShares",
	];
	/** IAM actions required for the ListWorkloads API call. */
	static readonly ListWorkloads: string[] = ["wellarchitected:ListWorkloads"];
	/** IAM actions required for the PutAgentRecommendationFeedback API call. */
	static readonly PutAgentRecommendationFeedback: string[] = [
		"wellarchitected:PutAgentRecommendationFeedback",
	];
	/** IAM actions required for the StartAgentRecommendationGeneration API call. */
	static readonly StartAgentRecommendationGeneration: string[] = [
		"wellarchitected:StartAgentRecommendationGeneration",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["wellarchitected:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["wellarchitected:UntagResource"];
	/** IAM actions required for the UpdateAgentContext API call. */
	static readonly UpdateAgentContext: string[] = [
		"wellarchitected:UpdateAgentContext",
	];
	/** IAM actions required for the UpdateAgentGoal API call. */
	static readonly UpdateAgentGoal: string[] = [
		"wellarchitected:UpdateAgentGoal",
	];
	/** IAM actions required for the UpdateAgentProfile API call. */
	static readonly UpdateAgentProfile: string[] = [
		"iam:PassRole",
		"wellarchitected:UpdateAgentProfile",
	];
	/** IAM actions required for the UpdateAgentRecommendationStatus API call. */
	static readonly UpdateAgentRecommendationStatus: string[] = [
		"wellarchitected:UpdateAgentRecommendationStatus",
	];
	/** IAM actions required for the UpdateAnswer API call. */
	static readonly UpdateAnswer: string[] = ["wellarchitected:UpdateAnswer"];
	/** IAM actions required for the UpdateGlobalSettings API call. */
	static readonly UpdateGlobalSettings: string[] = [
		"wellarchitected:UpdateGlobalSettings",
	];
	/** IAM actions required for the UpdateIntegration API call. */
	static readonly UpdateIntegration: string[] = [
		"wellarchitected:UpdateIntegration",
	];
	/** IAM actions required for the UpdateLensReview API call. */
	static readonly UpdateLensReview: string[] = [
		"wellarchitected:UpdateLensReview",
	];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UpdateProfile: string[] = ["wellarchitected:UpdateProfile"];
	/** IAM actions required for the UpdateReviewTemplate API call. */
	static readonly UpdateReviewTemplate: string[] = [
		"wellarchitected:UpdateReviewTemplate",
	];
	/** IAM actions required for the UpdateReviewTemplateAnswer API call. */
	static readonly UpdateReviewTemplateAnswer: string[] = [
		"wellarchitected:UpdateReviewTemplateAnswer",
	];
	/** IAM actions required for the UpdateReviewTemplateLensReview API call. */
	static readonly UpdateReviewTemplateLensReview: string[] = [
		"wellarchitected:UpdateReviewTemplateLensReview",
	];
	/** IAM actions required for the UpdateShareInvitation API call. */
	static readonly UpdateShareInvitation: string[] = [
		"wellarchitected:UpdateShareInvitation",
	];
	/** IAM actions required for the UpdateWorkload API call. */
	static readonly UpdateWorkload: string[] = ["wellarchitected:UpdateWorkload"];
	/** IAM actions required for the UpdateWorkloadShare API call. */
	static readonly UpdateWorkloadShare: string[] = [
		"wellarchitected:UpdateWorkloadShare",
	];
	/** IAM actions required for the UpgradeLensReview API call. */
	static readonly UpgradeLensReview: string[] = [
		"wellarchitected:UpgradeLensReview",
	];
	/** IAM actions required for the UpgradeProfileVersion API call. */
	static readonly UpgradeProfileVersion: string[] = [
		"wellarchitected:UpgradeProfileVersion",
	];
	/** IAM actions required for the UpgradeReviewTemplateLensReview API call. */
	static readonly UpgradeReviewTemplateLensReview: string[] = [
		"wellarchitected:UpgradeReviewTemplateLensReview",
	];
}

/**
 * Condition key constants and builders for wellarchitected.
 */
export class WellArchitectedConditions {
	/** Condition keys applicable to the AssociateLenses action. */
	static readonly AssociateLensesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateProfiles action. */
	static readonly AssociateProfilesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgentContext action. */
	static readonly CreateAgentContextConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgentGoal action. */
	static readonly CreateAgentGoalConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgentProfile action. */
	static readonly CreateAgentProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLensShare action. */
	static readonly CreateLensShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateLensVersion action. */
	static readonly CreateLensVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateMilestone action. */
	static readonly CreateMilestoneConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CreateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfileShare action. */
	static readonly CreateProfileShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReviewTemplate action. */
	static readonly CreateReviewTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplateShare action. */
	static readonly CreateTemplateShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateWorkload action. */
	static readonly CreateWorkloadConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"wellarchitected:JiraProjectKey",
	];
	/** Condition keys applicable to the CreateWorkloadShare action. */
	static readonly CreateWorkloadShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAgentContext action. */
	static readonly DeleteAgentContextConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAgentGoal action. */
	static readonly DeleteAgentGoalConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAgentProfile action. */
	static readonly DeleteAgentProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteLens action. */
	static readonly DeleteLensConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteLensShare action. */
	static readonly DeleteLensShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProfile action. */
	static readonly DeleteProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProfileShare action. */
	static readonly DeleteProfileShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteReviewTemplate action. */
	static readonly DeleteReviewTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteTemplateShare action. */
	static readonly DeleteTemplateShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteWorkload action. */
	static readonly DeleteWorkloadConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteWorkloadShare action. */
	static readonly DeleteWorkloadShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateLenses action. */
	static readonly DisassociateLensesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateProfiles action. */
	static readonly DisassociateProfilesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ExportLens action. */
	static readonly ExportLensConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentContext action. */
	static readonly actionGetAgentContextConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentGoal action. */
	static readonly actionGetAgentGoalConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentProfile action. */
	static readonly actionGetAgentProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentRecommendation action. */
	static readonly actionGetAgentRecommendationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentRecommendationGeneration action. */
	static readonly actionGetAgentRecommendationGenerationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetAnswer action. */
	static readonly actionGetAnswerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLens action. */
	static readonly actionGetLensConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLensReview action. */
	static readonly actionGetLensReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLensReviewReport action. */
	static readonly actionGetLensReviewReportConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLensVersionDifference action. */
	static readonly actionGetLensVersionDifferenceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetMilestone action. */
	static readonly actionGetMilestoneConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetProfile action. */
	static readonly actionGetProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetReviewTemplate action. */
	static readonly actionGetReviewTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetReviewTemplateAnswer action. */
	static readonly actionGetReviewTemplateAnswerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetReviewTemplateLensReview action. */
	static readonly actionGetReviewTemplateLensReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetWorkload action. */
	static readonly actionGetWorkloadConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ImportLens action. */
	static readonly ImportLensConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListAgentContexts action. */
	static readonly ListAgentContextsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAgentGoals action. */
	static readonly ListAgentGoalsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAgentRecommendationGenerations action. */
	static readonly ListAgentRecommendationGenerationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAgentRecommendationItems action. */
	static readonly ListAgentRecommendationItemsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAgentRecommendations action. */
	static readonly ListAgentRecommendationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAnswers action. */
	static readonly ListAnswersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCheckDetails action. */
	static readonly ListCheckDetailsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCheckSummaries action. */
	static readonly ListCheckSummariesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListLensReviewImprovements action. */
	static readonly ListLensReviewImprovementsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListLensReviews action. */
	static readonly ListLensReviewsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListLensShares action. */
	static readonly ListLensSharesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListMilestones action. */
	static readonly ListMilestonesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListProfileShares action. */
	static readonly ListProfileSharesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListReviewTemplateAnswers action. */
	static readonly ListReviewTemplateAnswersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTemplateShares action. */
	static readonly ListTemplateSharesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListWorkloadShares action. */
	static readonly ListWorkloadSharesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAgentRecommendationFeedback action. */
	static readonly PutAgentRecommendationFeedbackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartAgentRecommendationGeneration action. */
	static readonly StartAgentRecommendationGenerationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAgentContext action. */
	static readonly UpdateAgentContextConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAgentGoal action. */
	static readonly UpdateAgentGoalConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAgentProfile action. */
	static readonly UpdateAgentProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAgentRecommendationStatus action. */
	static readonly UpdateAgentRecommendationStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAnswer action. */
	static readonly UpdateAnswerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateGlobalSettings action. */
	static readonly UpdateGlobalSettingsConditionKeys: string[] = [
		"wellarchitected:JiraProjectKey",
	];
	/** Condition keys applicable to the UpdateIntegration action. */
	static readonly UpdateIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateLensReview action. */
	static readonly UpdateLensReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateProfile action. */
	static readonly UpdateProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateReviewTemplate action. */
	static readonly UpdateReviewTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateReviewTemplateAnswer action. */
	static readonly UpdateReviewTemplateAnswerConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateReviewTemplateLensReview action. */
	static readonly UpdateReviewTemplateLensReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkload action. */
	static readonly UpdateWorkloadConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"wellarchitected:JiraProjectKey",
	];
	/** Condition keys applicable to the UpdateWorkloadShare action. */
	static readonly UpdateWorkloadShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpgradeLensReview action. */
	static readonly UpgradeLensReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpgradeProfileVersion action. */
	static readonly UpgradeProfileVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpgradeReviewTemplateLensReview action. */
	static readonly UpgradeReviewTemplateLensReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: wellarchitected:JiraProjectKey (String) */
	static readonly JIRA_PROJECT_KEY = "wellarchitected:JiraProjectKey";

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

	/**
	 * Generates a condition block for `wellarchitected:JiraProjectKey`.
	 */
	static jiraProjectKey(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "wellarchitected:JiraProjectKey": value } };
	}
}
