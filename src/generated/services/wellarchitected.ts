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
	static readonly ASSOCIATE_LENSES = "wellarchitected:AssociateLenses";
	/** [Write] wellarchitected:AssociateProfiles */
	static readonly ASSOCIATE_PROFILES = "wellarchitected:AssociateProfiles";
	/** [Write] wellarchitected:ConfigureIntegration */
	static readonly CONFIGURE_INTEGRATION =
		"wellarchitected:ConfigureIntegration";
	/** [Write] wellarchitected:CreateAgentContext */
	static readonly CREATE_AGENT_CONTEXT = "wellarchitected:CreateAgentContext";
	/** [Write] wellarchitected:CreateAgentGoal */
	static readonly CREATE_AGENT_GOAL = "wellarchitected:CreateAgentGoal";
	/** [Write] wellarchitected:CreateAgentProfile */
	static readonly CREATE_AGENT_PROFILE = "wellarchitected:CreateAgentProfile";
	/** [Write] wellarchitected:CreateLensShare */
	static readonly CREATE_LENS_SHARE = "wellarchitected:CreateLensShare";
	/** [Write] wellarchitected:CreateLensVersion */
	static readonly CREATE_LENS_VERSION = "wellarchitected:CreateLensVersion";
	/** [Write] wellarchitected:CreateMilestone */
	static readonly CREATE_MILESTONE = "wellarchitected:CreateMilestone";
	/** [Write] wellarchitected:CreateProfile */
	static readonly CREATE_PROFILE = "wellarchitected:CreateProfile";
	/** [Write] wellarchitected:CreateProfileShare */
	static readonly CREATE_PROFILE_SHARE = "wellarchitected:CreateProfileShare";
	/** [Write] wellarchitected:CreateReviewTemplate */
	static readonly CREATE_REVIEW_TEMPLATE =
		"wellarchitected:CreateReviewTemplate";
	/** [Write] wellarchitected:CreateTemplateShare */
	static readonly CREATE_TEMPLATE_SHARE = "wellarchitected:CreateTemplateShare";
	/** [Write] wellarchitected:CreateWorkload */
	static readonly CREATE_WORKLOAD = "wellarchitected:CreateWorkload";
	/** [Write] wellarchitected:CreateWorkloadShare */
	static readonly CREATE_WORKLOAD_SHARE = "wellarchitected:CreateWorkloadShare";
	/** [Write] wellarchitected:DeleteAgentContext */
	static readonly DELETE_AGENT_CONTEXT = "wellarchitected:DeleteAgentContext";
	/** [Write] wellarchitected:DeleteAgentGoal */
	static readonly DELETE_AGENT_GOAL = "wellarchitected:DeleteAgentGoal";
	/** [Write] wellarchitected:DeleteAgentProfile */
	static readonly DELETE_AGENT_PROFILE = "wellarchitected:DeleteAgentProfile";
	/** [Write] wellarchitected:DeleteLens */
	static readonly DELETE_LENS = "wellarchitected:DeleteLens";
	/** [Write] wellarchitected:DeleteLensShare */
	static readonly DELETE_LENS_SHARE = "wellarchitected:DeleteLensShare";
	/** [Write] wellarchitected:DeleteProfile */
	static readonly DELETE_PROFILE = "wellarchitected:DeleteProfile";
	/** [Write] wellarchitected:DeleteProfileShare */
	static readonly DELETE_PROFILE_SHARE = "wellarchitected:DeleteProfileShare";
	/** [Write] wellarchitected:DeleteReviewTemplate */
	static readonly DELETE_REVIEW_TEMPLATE =
		"wellarchitected:DeleteReviewTemplate";
	/** [Write] wellarchitected:DeleteTemplateShare */
	static readonly DELETE_TEMPLATE_SHARE = "wellarchitected:DeleteTemplateShare";
	/** [Write] wellarchitected:DeleteWorkload */
	static readonly DELETE_WORKLOAD = "wellarchitected:DeleteWorkload";
	/** [Write] wellarchitected:DeleteWorkloadShare */
	static readonly DELETE_WORKLOAD_SHARE = "wellarchitected:DeleteWorkloadShare";
	/** [Write] wellarchitected:DisassociateLenses */
	static readonly DISASSOCIATE_LENSES = "wellarchitected:DisassociateLenses";
	/** [Write] wellarchitected:DisassociateProfiles */
	static readonly DISASSOCIATE_PROFILES =
		"wellarchitected:DisassociateProfiles";
	/** [Read] wellarchitected:ExportLens */
	static readonly EXPORT_LENS = "wellarchitected:ExportLens";
	/** [Read] wellarchitected:GetAgentContext */
	static readonly GET_AGENT_CONTEXT = "wellarchitected:GetAgentContext";
	/** [Read] wellarchitected:GetAgentGoal */
	static readonly GET_AGENT_GOAL = "wellarchitected:GetAgentGoal";
	/** [Read] wellarchitected:GetAgentProfile */
	static readonly GET_AGENT_PROFILE = "wellarchitected:GetAgentProfile";
	/** [Read] wellarchitected:GetAgentRecommendation */
	static readonly GET_AGENT_RECOMMENDATION =
		"wellarchitected:GetAgentRecommendation";
	/** [Read] wellarchitected:GetAgentRecommendationGeneration */
	static readonly GET_AGENT_RECOMMENDATION_GENERATION =
		"wellarchitected:GetAgentRecommendationGeneration";
	/** [Read] wellarchitected:GetAnswer */
	static readonly GET_ANSWER = "wellarchitected:GetAnswer";
	/** [Read] wellarchitected:GetConsolidatedReport */
	static readonly GET_CONSOLIDATED_REPORT =
		"wellarchitected:GetConsolidatedReport";
	/** [Read] wellarchitected:GetGlobalSettings */
	static readonly GET_GLOBAL_SETTINGS = "wellarchitected:GetGlobalSettings";
	/** [Read] wellarchitected:GetLens */
	static readonly GET_LENS = "wellarchitected:GetLens";
	/** [Read] wellarchitected:GetLensReview */
	static readonly GET_LENS_REVIEW = "wellarchitected:GetLensReview";
	/** [Read] wellarchitected:GetLensReviewReport */
	static readonly GET_LENS_REVIEW_REPORT =
		"wellarchitected:GetLensReviewReport";
	/** [Read] wellarchitected:GetLensVersionDifference */
	static readonly GET_LENS_VERSION_DIFFERENCE =
		"wellarchitected:GetLensVersionDifference";
	/** [Read] wellarchitected:GetMilestone */
	static readonly GET_MILESTONE = "wellarchitected:GetMilestone";
	/** [Read] wellarchitected:GetProfile */
	static readonly GET_PROFILE = "wellarchitected:GetProfile";
	/** [Read] wellarchitected:GetProfileTemplate */
	static readonly GET_PROFILE_TEMPLATE = "wellarchitected:GetProfileTemplate";
	/** [Read] wellarchitected:GetReviewTemplate */
	static readonly GET_REVIEW_TEMPLATE = "wellarchitected:GetReviewTemplate";
	/** [Read] wellarchitected:GetReviewTemplateAnswer */
	static readonly GET_REVIEW_TEMPLATE_ANSWER =
		"wellarchitected:GetReviewTemplateAnswer";
	/** [Read] wellarchitected:GetReviewTemplateLensReview */
	static readonly GET_REVIEW_TEMPLATE_LENS_REVIEW =
		"wellarchitected:GetReviewTemplateLensReview";
	/** [Read] wellarchitected:GetWorkload */
	static readonly GET_WORKLOAD = "wellarchitected:GetWorkload";
	/** [Write] wellarchitected:ImportLens */
	static readonly IMPORT_LENS = "wellarchitected:ImportLens";
	/** [Read] wellarchitected:ListAgentContexts */
	static readonly LIST_AGENT_CONTEXTS = "wellarchitected:ListAgentContexts";
	/** [Read] wellarchitected:ListAgentGoals */
	static readonly LIST_AGENT_GOALS = "wellarchitected:ListAgentGoals";
	/** [Read] wellarchitected:ListAgentProfiles */
	static readonly LIST_AGENT_PROFILES = "wellarchitected:ListAgentProfiles";
	/** [Read] wellarchitected:ListAgentRecommendationGenerations */
	static readonly LIST_AGENT_RECOMMENDATION_GENERATIONS =
		"wellarchitected:ListAgentRecommendationGenerations";
	/** [Read] wellarchitected:ListAgentRecommendationItems */
	static readonly LIST_AGENT_RECOMMENDATION_ITEMS =
		"wellarchitected:ListAgentRecommendationItems";
	/** [Read] wellarchitected:ListAgentRecommendations */
	static readonly LIST_AGENT_RECOMMENDATIONS =
		"wellarchitected:ListAgentRecommendations";
	/** [List] wellarchitected:ListAnswers */
	static readonly LIST_ANSWERS = "wellarchitected:ListAnswers";
	/** [List] wellarchitected:ListCheckDetails */
	static readonly LIST_CHECK_DETAILS = "wellarchitected:ListCheckDetails";
	/** [List] wellarchitected:ListCheckSummaries */
	static readonly LIST_CHECK_SUMMARIES = "wellarchitected:ListCheckSummaries";
	/** [List] wellarchitected:ListLensReviewImprovements */
	static readonly LIST_LENS_REVIEW_IMPROVEMENTS =
		"wellarchitected:ListLensReviewImprovements";
	/** [List] wellarchitected:ListLensReviews */
	static readonly LIST_LENS_REVIEWS = "wellarchitected:ListLensReviews";
	/** [List] wellarchitected:ListLensShares */
	static readonly LIST_LENS_SHARES = "wellarchitected:ListLensShares";
	/** [List] wellarchitected:ListLenses */
	static readonly LIST_LENSES = "wellarchitected:ListLenses";
	/** [List] wellarchitected:ListMilestones */
	static readonly LIST_MILESTONES = "wellarchitected:ListMilestones";
	/** [List] wellarchitected:ListNotifications */
	static readonly LIST_NOTIFICATIONS = "wellarchitected:ListNotifications";
	/** [List] wellarchitected:ListProfileNotifications */
	static readonly LIST_PROFILE_NOTIFICATIONS =
		"wellarchitected:ListProfileNotifications";
	/** [List] wellarchitected:ListProfileShares */
	static readonly LIST_PROFILE_SHARES = "wellarchitected:ListProfileShares";
	/** [List] wellarchitected:ListProfiles */
	static readonly LIST_PROFILES = "wellarchitected:ListProfiles";
	/** [List] wellarchitected:ListReviewTemplateAnswers */
	static readonly LIST_REVIEW_TEMPLATE_ANSWERS =
		"wellarchitected:ListReviewTemplateAnswers";
	/** [List] wellarchitected:ListReviewTemplates */
	static readonly LIST_REVIEW_TEMPLATES = "wellarchitected:ListReviewTemplates";
	/** [List] wellarchitected:ListShareInvitations */
	static readonly LIST_SHARE_INVITATIONS =
		"wellarchitected:ListShareInvitations";
	/** [Read] wellarchitected:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"wellarchitected:ListTagsForResource";
	/** [List] wellarchitected:ListTemplateShares */
	static readonly LIST_TEMPLATE_SHARES = "wellarchitected:ListTemplateShares";
	/** [List] wellarchitected:ListWorkloadShares */
	static readonly LIST_WORKLOAD_SHARES = "wellarchitected:ListWorkloadShares";
	/** [List] wellarchitected:ListWorkloads */
	static readonly LIST_WORKLOADS = "wellarchitected:ListWorkloads";
	/** [Write] wellarchitected:PutAgentRecommendationFeedback */
	static readonly PUT_AGENT_RECOMMENDATION_FEEDBACK =
		"wellarchitected:PutAgentRecommendationFeedback";
	/** [Write] wellarchitected:StartAgentRecommendationGeneration */
	static readonly START_AGENT_RECOMMENDATION_GENERATION =
		"wellarchitected:StartAgentRecommendationGeneration";
	/** [Tagging] wellarchitected:TagResource */
	static readonly TAG_RESOURCE = "wellarchitected:TagResource";
	/** [Tagging] wellarchitected:UntagResource */
	static readonly UNTAG_RESOURCE = "wellarchitected:UntagResource";
	/** [Write] wellarchitected:UpdateAgentContext */
	static readonly UPDATE_AGENT_CONTEXT = "wellarchitected:UpdateAgentContext";
	/** [Write] wellarchitected:UpdateAgentGoal */
	static readonly UPDATE_AGENT_GOAL = "wellarchitected:UpdateAgentGoal";
	/** [Write] wellarchitected:UpdateAgentProfile */
	static readonly UPDATE_AGENT_PROFILE = "wellarchitected:UpdateAgentProfile";
	/** [Write] wellarchitected:UpdateAgentRecommendationStatus */
	static readonly UPDATE_AGENT_RECOMMENDATION_STATUS =
		"wellarchitected:UpdateAgentRecommendationStatus";
	/** [Write] wellarchitected:UpdateAnswer */
	static readonly UPDATE_ANSWER = "wellarchitected:UpdateAnswer";
	/** [Write] wellarchitected:UpdateGlobalSettings */
	static readonly UPDATE_GLOBAL_SETTINGS =
		"wellarchitected:UpdateGlobalSettings";
	/** [Write] wellarchitected:UpdateIntegration */
	static readonly UPDATE_INTEGRATION = "wellarchitected:UpdateIntegration";
	/** [Write] wellarchitected:UpdateLensReview */
	static readonly UPDATE_LENS_REVIEW = "wellarchitected:UpdateLensReview";
	/** [Write] wellarchitected:UpdateProfile */
	static readonly UPDATE_PROFILE = "wellarchitected:UpdateProfile";
	/** [Write] wellarchitected:UpdateReviewTemplate */
	static readonly UPDATE_REVIEW_TEMPLATE =
		"wellarchitected:UpdateReviewTemplate";
	/** [Write] wellarchitected:UpdateReviewTemplateAnswer */
	static readonly UPDATE_REVIEW_TEMPLATE_ANSWER =
		"wellarchitected:UpdateReviewTemplateAnswer";
	/** [Write] wellarchitected:UpdateReviewTemplateLensReview */
	static readonly UPDATE_REVIEW_TEMPLATE_LENS_REVIEW =
		"wellarchitected:UpdateReviewTemplateLensReview";
	/** [Write] wellarchitected:UpdateShareInvitation */
	static readonly UPDATE_SHARE_INVITATION =
		"wellarchitected:UpdateShareInvitation";
	/** [Write] wellarchitected:UpdateWorkload */
	static readonly UPDATE_WORKLOAD = "wellarchitected:UpdateWorkload";
	/** [Write] wellarchitected:UpdateWorkloadShare */
	static readonly UPDATE_WORKLOAD_SHARE = "wellarchitected:UpdateWorkloadShare";
	/** [Write] wellarchitected:UpgradeLensReview */
	static readonly UPGRADE_LENS_REVIEW = "wellarchitected:UpgradeLensReview";
	/** [Write] wellarchitected:UpgradeProfileVersion */
	static readonly UPGRADE_PROFILE_VERSION =
		"wellarchitected:UpgradeProfileVersion";
	/** [Write] wellarchitected:UpgradeReviewTemplateLensReview */
	static readonly UPGRADE_REVIEW_TEMPLATE_LENS_REVIEW =
		"wellarchitected:UpgradeReviewTemplateLensReview";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WellArchitectedActions.EXPORT_LENS,
		WellArchitectedActions.GET_AGENT_CONTEXT,
		WellArchitectedActions.GET_AGENT_GOAL,
		WellArchitectedActions.GET_AGENT_PROFILE,
		WellArchitectedActions.GET_AGENT_RECOMMENDATION,
		WellArchitectedActions.GET_AGENT_RECOMMENDATION_GENERATION,
		WellArchitectedActions.GET_ANSWER,
		WellArchitectedActions.GET_CONSOLIDATED_REPORT,
		WellArchitectedActions.GET_GLOBAL_SETTINGS,
		WellArchitectedActions.GET_LENS,
		WellArchitectedActions.GET_LENS_REVIEW,
		WellArchitectedActions.GET_LENS_REVIEW_REPORT,
		WellArchitectedActions.GET_LENS_VERSION_DIFFERENCE,
		WellArchitectedActions.GET_MILESTONE,
		WellArchitectedActions.GET_PROFILE,
		WellArchitectedActions.GET_PROFILE_TEMPLATE,
		WellArchitectedActions.GET_REVIEW_TEMPLATE,
		WellArchitectedActions.GET_REVIEW_TEMPLATE_ANSWER,
		WellArchitectedActions.GET_REVIEW_TEMPLATE_LENS_REVIEW,
		WellArchitectedActions.GET_WORKLOAD,
		WellArchitectedActions.LIST_AGENT_CONTEXTS,
		WellArchitectedActions.LIST_AGENT_GOALS,
		WellArchitectedActions.LIST_AGENT_PROFILES,
		WellArchitectedActions.LIST_AGENT_RECOMMENDATION_GENERATIONS,
		WellArchitectedActions.LIST_AGENT_RECOMMENDATION_ITEMS,
		WellArchitectedActions.LIST_AGENT_RECOMMENDATIONS,
		WellArchitectedActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WellArchitectedActions.ASSOCIATE_LENSES,
		WellArchitectedActions.ASSOCIATE_PROFILES,
		WellArchitectedActions.CONFIGURE_INTEGRATION,
		WellArchitectedActions.CREATE_AGENT_CONTEXT,
		WellArchitectedActions.CREATE_AGENT_GOAL,
		WellArchitectedActions.CREATE_AGENT_PROFILE,
		WellArchitectedActions.CREATE_LENS_SHARE,
		WellArchitectedActions.CREATE_LENS_VERSION,
		WellArchitectedActions.CREATE_MILESTONE,
		WellArchitectedActions.CREATE_PROFILE,
		WellArchitectedActions.CREATE_PROFILE_SHARE,
		WellArchitectedActions.CREATE_REVIEW_TEMPLATE,
		WellArchitectedActions.CREATE_TEMPLATE_SHARE,
		WellArchitectedActions.CREATE_WORKLOAD,
		WellArchitectedActions.CREATE_WORKLOAD_SHARE,
		WellArchitectedActions.DELETE_AGENT_CONTEXT,
		WellArchitectedActions.DELETE_AGENT_GOAL,
		WellArchitectedActions.DELETE_AGENT_PROFILE,
		WellArchitectedActions.DELETE_LENS,
		WellArchitectedActions.DELETE_LENS_SHARE,
		WellArchitectedActions.DELETE_PROFILE,
		WellArchitectedActions.DELETE_PROFILE_SHARE,
		WellArchitectedActions.DELETE_REVIEW_TEMPLATE,
		WellArchitectedActions.DELETE_TEMPLATE_SHARE,
		WellArchitectedActions.DELETE_WORKLOAD,
		WellArchitectedActions.DELETE_WORKLOAD_SHARE,
		WellArchitectedActions.DISASSOCIATE_LENSES,
		WellArchitectedActions.DISASSOCIATE_PROFILES,
		WellArchitectedActions.IMPORT_LENS,
		WellArchitectedActions.PUT_AGENT_RECOMMENDATION_FEEDBACK,
		WellArchitectedActions.START_AGENT_RECOMMENDATION_GENERATION,
		WellArchitectedActions.UPDATE_AGENT_CONTEXT,
		WellArchitectedActions.UPDATE_AGENT_GOAL,
		WellArchitectedActions.UPDATE_AGENT_PROFILE,
		WellArchitectedActions.UPDATE_AGENT_RECOMMENDATION_STATUS,
		WellArchitectedActions.UPDATE_ANSWER,
		WellArchitectedActions.UPDATE_GLOBAL_SETTINGS,
		WellArchitectedActions.UPDATE_INTEGRATION,
		WellArchitectedActions.UPDATE_LENS_REVIEW,
		WellArchitectedActions.UPDATE_PROFILE,
		WellArchitectedActions.UPDATE_REVIEW_TEMPLATE,
		WellArchitectedActions.UPDATE_REVIEW_TEMPLATE_ANSWER,
		WellArchitectedActions.UPDATE_REVIEW_TEMPLATE_LENS_REVIEW,
		WellArchitectedActions.UPDATE_SHARE_INVITATION,
		WellArchitectedActions.UPDATE_WORKLOAD,
		WellArchitectedActions.UPDATE_WORKLOAD_SHARE,
		WellArchitectedActions.UPGRADE_LENS_REVIEW,
		WellArchitectedActions.UPGRADE_PROFILE_VERSION,
		WellArchitectedActions.UPGRADE_REVIEW_TEMPLATE_LENS_REVIEW,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		WellArchitectedActions.LIST_ANSWERS,
		WellArchitectedActions.LIST_CHECK_DETAILS,
		WellArchitectedActions.LIST_CHECK_SUMMARIES,
		WellArchitectedActions.LIST_LENS_REVIEW_IMPROVEMENTS,
		WellArchitectedActions.LIST_LENS_REVIEWS,
		WellArchitectedActions.LIST_LENS_SHARES,
		WellArchitectedActions.LIST_LENSES,
		WellArchitectedActions.LIST_MILESTONES,
		WellArchitectedActions.LIST_NOTIFICATIONS,
		WellArchitectedActions.LIST_PROFILE_NOTIFICATIONS,
		WellArchitectedActions.LIST_PROFILE_SHARES,
		WellArchitectedActions.LIST_PROFILES,
		WellArchitectedActions.LIST_REVIEW_TEMPLATE_ANSWERS,
		WellArchitectedActions.LIST_REVIEW_TEMPLATES,
		WellArchitectedActions.LIST_SHARE_INVITATIONS,
		WellArchitectedActions.LIST_TEMPLATE_SHARES,
		WellArchitectedActions.LIST_WORKLOAD_SHARES,
		WellArchitectedActions.LIST_WORKLOADS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		WellArchitectedActions.TAG_RESOURCE,
		WellArchitectedActions.UNTAG_RESOURCE,
	];
}

const AgentProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):agent-profile/(?<profileName>[^:/?]+)$",
);
const AgentRecommendationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):agent-recommendation/(?<resourceId>[^:/?]+)$",
);
const LensArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):lens/(?<resourceId>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):profile/(?<resourceId>[^:/?]+)$",
);
const ReviewTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):review-template/(?<resourceId>[^:/?]+)$",
);
const WorkloadArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wellarchitected:(?<region>[^:]*):(?<account>[^:]*):workload/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for wellarchitected resources.
 */
export class WellArchitectedResources {
	/**
	 * Builds an ARN for the agent-profile resource.
	 */
	static agentProfile(props: {
		/** The ProfileName component of the ARN. */
		readonly profileName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAgentProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profileName: string;
	} {
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
	static agentRecommendation(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAgentRecommendationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static lens(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLensArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static profile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static reviewTemplate(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseReviewTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static workload(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkloadArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly ASSOCIATE_LENSES: string[] = [
		"wellarchitected:AssociateLenses",
	];
	/** IAM actions required for the AssociateProfiles API call. */
	static readonly ASSOCIATE_PROFILES: string[] = [
		"wellarchitected:AssociateProfiles",
	];
	/** IAM actions required for the CreateLensShare API call. */
	static readonly CREATE_LENS_SHARE: string[] = [
		"wellarchitected:CreateLensShare",
	];
	/** IAM actions required for the CreateLensVersion API call. */
	static readonly CREATE_LENS_VERSION: string[] = [
		"wellarchitected:CreateLensVersion",
	];
	/** IAM actions required for the CreateMilestone API call. */
	static readonly CREATE_MILESTONE: string[] = [
		"wellarchitected:CreateMilestone",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CREATE_PROFILE: string[] = [
		"wellarchitected:CreateProfile",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the CreateProfileShare API call. */
	static readonly CREATE_PROFILE_SHARE: string[] = [
		"wellarchitected:CreateProfileShare",
	];
	/** IAM actions required for the CreateReviewTemplate API call. */
	static readonly CREATE_REVIEW_TEMPLATE: string[] = [
		"wellarchitected:CreateReviewTemplate",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the CreateTemplateShare API call. */
	static readonly CREATE_TEMPLATE_SHARE: string[] = [
		"wellarchitected:CreateTemplateShare",
	];
	/** IAM actions required for the CreateWorkload API call. */
	static readonly CREATE_WORKLOAD: string[] = [
		"wellarchitected:CreateWorkload",
		"wellarchitected:GetReviewTemplate",
		"wellarchitected:GetReviewTemplateAnswer",
		"wellarchitected:GetReviewTemplateLensReview",
		"wellarchitected:ListReviewTemplateAnswers",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the CreateWorkloadShare API call. */
	static readonly CREATE_WORKLOAD_SHARE: string[] = [
		"wellarchitected:CreateWorkloadShare",
	];
	/** IAM actions required for the DeleteLens API call. */
	static readonly DELETE_LENS: string[] = ["wellarchitected:DeleteLens"];
	/** IAM actions required for the DeleteLensShare API call. */
	static readonly DELETE_LENS_SHARE: string[] = [
		"wellarchitected:DeleteLensShare",
	];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DELETE_PROFILE: string[] = ["wellarchitected:DeleteProfile"];
	/** IAM actions required for the DeleteProfileShare API call. */
	static readonly DELETE_PROFILE_SHARE: string[] = [
		"wellarchitected:DeleteProfileShare",
	];
	/** IAM actions required for the DeleteReviewTemplate API call. */
	static readonly DELETE_REVIEW_TEMPLATE: string[] = [
		"wellarchitected:DeleteReviewTemplate",
	];
	/** IAM actions required for the DeleteTemplateShare API call. */
	static readonly DELETE_TEMPLATE_SHARE: string[] = [
		"wellarchitected:DeleteTemplateShare",
	];
	/** IAM actions required for the DeleteWorkload API call. */
	static readonly DELETE_WORKLOAD: string[] = [
		"wellarchitected:DeleteWorkload",
	];
	/** IAM actions required for the DeleteWorkloadShare API call. */
	static readonly DELETE_WORKLOAD_SHARE: string[] = [
		"wellarchitected:DeleteWorkloadShare",
	];
	/** IAM actions required for the DisassociateLenses API call. */
	static readonly DISASSOCIATE_LENSES: string[] = [
		"wellarchitected:DisassociateLenses",
	];
	/** IAM actions required for the DisassociateProfiles API call. */
	static readonly DISASSOCIATE_PROFILES: string[] = [
		"wellarchitected:DisassociateProfiles",
	];
	/** IAM actions required for the ExportLens API call. */
	static readonly EXPORT_LENS: string[] = ["wellarchitected:ExportLens"];
	/** IAM actions required for the GetAnswer API call. */
	static readonly GET_ANSWER: string[] = ["wellarchitected:GetAnswer"];
	/** IAM actions required for the GetConsolidatedReport API call. */
	static readonly GET_CONSOLIDATED_REPORT: string[] = [
		"wellarchitected:GetConsolidatedReport",
	];
	/** IAM actions required for the GetGlobalSettings API call. */
	static readonly GET_GLOBAL_SETTINGS: string[] = [
		"wellarchitected:GetGlobalSettings",
	];
	/** IAM actions required for the GetLens API call. */
	static readonly GET_LENS: string[] = ["wellarchitected:GetLens"];
	/** IAM actions required for the GetLensReview API call. */
	static readonly GET_LENS_REVIEW: string[] = ["wellarchitected:GetLensReview"];
	/** IAM actions required for the GetLensReviewReport API call. */
	static readonly GET_LENS_REVIEW_REPORT: string[] = [
		"wellarchitected:GetLensReviewReport",
	];
	/** IAM actions required for the GetLensVersionDifference API call. */
	static readonly GET_LENS_VERSION_DIFFERENCE: string[] = [
		"wellarchitected:GetLensVersionDifference",
	];
	/** IAM actions required for the GetMilestone API call. */
	static readonly GET_MILESTONE: string[] = ["wellarchitected:GetMilestone"];
	/** IAM actions required for the GetProfile API call. */
	static readonly GET_PROFILE: string[] = ["wellarchitected:GetProfile"];
	/** IAM actions required for the GetProfileTemplate API call. */
	static readonly GET_PROFILE_TEMPLATE: string[] = [
		"wellarchitected:GetProfileTemplate",
	];
	/** IAM actions required for the GetReviewTemplate API call. */
	static readonly GET_REVIEW_TEMPLATE: string[] = [
		"wellarchitected:GetReviewTemplate",
	];
	/** IAM actions required for the GetReviewTemplateAnswer API call. */
	static readonly GET_REVIEW_TEMPLATE_ANSWER: string[] = [
		"wellarchitected:GetReviewTemplateAnswer",
	];
	/** IAM actions required for the GetReviewTemplateLensReview API call. */
	static readonly GET_REVIEW_TEMPLATE_LENS_REVIEW: string[] = [
		"wellarchitected:GetReviewTemplateLensReview",
	];
	/** IAM actions required for the GetWorkload API call. */
	static readonly GET_WORKLOAD: string[] = ["wellarchitected:GetWorkload"];
	/** IAM actions required for the ImportLens API call. */
	static readonly IMPORT_LENS: string[] = [
		"wellarchitected:ImportLens",
		"wellarchitected:TagResource",
	];
	/** IAM actions required for the ListAnswers API call. */
	static readonly LIST_ANSWERS: string[] = ["wellarchitected:ListAnswers"];
	/** IAM actions required for the ListCheckDetails API call. */
	static readonly LIST_CHECK_DETAILS: string[] = [
		"wellarchitected:ListCheckDetails",
	];
	/** IAM actions required for the ListCheckSummaries API call. */
	static readonly LIST_CHECK_SUMMARIES: string[] = [
		"wellarchitected:ListCheckSummaries",
	];
	/** IAM actions required for the ListLensReviewImprovements API call. */
	static readonly LIST_LENS_REVIEW_IMPROVEMENTS: string[] = [
		"wellarchitected:ListLensReviewImprovements",
	];
	/** IAM actions required for the ListLensReviews API call. */
	static readonly LIST_LENS_REVIEWS: string[] = [
		"wellarchitected:ListLensReviews",
	];
	/** IAM actions required for the ListLensShares API call. */
	static readonly LIST_LENS_SHARES: string[] = [
		"wellarchitected:ListLensShares",
	];
	/** IAM actions required for the ListLenses API call. */
	static readonly LIST_LENSES: string[] = ["wellarchitected:ListLenses"];
	/** IAM actions required for the ListMilestones API call. */
	static readonly LIST_MILESTONES: string[] = [
		"wellarchitected:ListMilestones",
	];
	/** IAM actions required for the ListNotifications API call. */
	static readonly LIST_NOTIFICATIONS: string[] = [
		"wellarchitected:ListNotifications",
	];
	/** IAM actions required for the ListProfileNotifications API call. */
	static readonly LIST_PROFILE_NOTIFICATIONS: string[] = [
		"wellarchitected:ListProfileNotifications",
	];
	/** IAM actions required for the ListProfileShares API call. */
	static readonly LIST_PROFILE_SHARES: string[] = [
		"wellarchitected:ListProfileShares",
	];
	/** IAM actions required for the ListProfiles API call. */
	static readonly LIST_PROFILES: string[] = ["wellarchitected:ListProfiles"];
	/** IAM actions required for the ListReviewTemplateAnswers API call. */
	static readonly LIST_REVIEW_TEMPLATE_ANSWERS: string[] = [
		"wellarchitected:ListReviewTemplateAnswers",
	];
	/** IAM actions required for the ListReviewTemplates API call. */
	static readonly LIST_REVIEW_TEMPLATES: string[] = [
		"wellarchitected:ListReviewTemplates",
	];
	/** IAM actions required for the ListShareInvitations API call. */
	static readonly LIST_SHARE_INVITATIONS: string[] = [
		"wellarchitected:ListShareInvitations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"wellarchitected:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateShares API call. */
	static readonly LIST_TEMPLATE_SHARES: string[] = [
		"wellarchitected:ListTemplateShares",
	];
	/** IAM actions required for the ListWorkloadShares API call. */
	static readonly LIST_WORKLOAD_SHARES: string[] = [
		"wellarchitected:ListWorkloadShares",
	];
	/** IAM actions required for the ListWorkloads API call. */
	static readonly LIST_WORKLOADS: string[] = ["wellarchitected:ListWorkloads"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["wellarchitected:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["wellarchitected:UntagResource"];
	/** IAM actions required for the UpdateAnswer API call. */
	static readonly UPDATE_ANSWER: string[] = ["wellarchitected:UpdateAnswer"];
	/** IAM actions required for the UpdateGlobalSettings API call. */
	static readonly UPDATE_GLOBAL_SETTINGS: string[] = [
		"wellarchitected:UpdateGlobalSettings",
	];
	/** IAM actions required for the UpdateIntegration API call. */
	static readonly UPDATE_INTEGRATION: string[] = [
		"wellarchitected:UpdateIntegration",
	];
	/** IAM actions required for the UpdateLensReview API call. */
	static readonly UPDATE_LENS_REVIEW: string[] = [
		"wellarchitected:UpdateLensReview",
	];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UPDATE_PROFILE: string[] = ["wellarchitected:UpdateProfile"];
	/** IAM actions required for the UpdateReviewTemplate API call. */
	static readonly UPDATE_REVIEW_TEMPLATE: string[] = [
		"wellarchitected:UpdateReviewTemplate",
	];
	/** IAM actions required for the UpdateReviewTemplateAnswer API call. */
	static readonly UPDATE_REVIEW_TEMPLATE_ANSWER: string[] = [
		"wellarchitected:UpdateReviewTemplateAnswer",
	];
	/** IAM actions required for the UpdateReviewTemplateLensReview API call. */
	static readonly UPDATE_REVIEW_TEMPLATE_LENS_REVIEW: string[] = [
		"wellarchitected:UpdateReviewTemplateLensReview",
	];
	/** IAM actions required for the UpdateShareInvitation API call. */
	static readonly UPDATE_SHARE_INVITATION: string[] = [
		"wellarchitected:UpdateShareInvitation",
	];
	/** IAM actions required for the UpdateWorkload API call. */
	static readonly UPDATE_WORKLOAD: string[] = [
		"wellarchitected:UpdateWorkload",
	];
	/** IAM actions required for the UpdateWorkloadShare API call. */
	static readonly UPDATE_WORKLOAD_SHARE: string[] = [
		"wellarchitected:UpdateWorkloadShare",
	];
	/** IAM actions required for the UpgradeLensReview API call. */
	static readonly UPGRADE_LENS_REVIEW: string[] = [
		"wellarchitected:UpgradeLensReview",
	];
	/** IAM actions required for the UpgradeProfileVersion API call. */
	static readonly UPGRADE_PROFILE_VERSION: string[] = [
		"wellarchitected:UpgradeProfileVersion",
	];
	/** IAM actions required for the UpgradeReviewTemplateLensReview API call. */
	static readonly UPGRADE_REVIEW_TEMPLATE_LENS_REVIEW: string[] = [
		"wellarchitected:UpgradeReviewTemplateLensReview",
	];
}

/**
 * Condition key constants and builders for wellarchitected.
 */
export class WellArchitectedConditions {
	/** Condition keys applicable to the AssociateLenses action. */
	static readonly ASSOCIATE_LENSES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateProfiles action. */
	static readonly ASSOCIATE_PROFILES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgentContext action. */
	static readonly CREATE_AGENT_CONTEXT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgentGoal action. */
	static readonly CREATE_AGENT_GOAL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAgentProfile action. */
	static readonly CREATE_AGENT_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLensShare action. */
	static readonly CREATE_LENS_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateLensVersion action. */
	static readonly CREATE_LENS_VERSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateMilestone action. */
	static readonly CREATE_MILESTONE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CREATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProfileShare action. */
	static readonly CREATE_PROFILE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateReviewTemplate action. */
	static readonly CREATE_REVIEW_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplateShare action. */
	static readonly CREATE_TEMPLATE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateWorkload action. */
	static readonly CREATE_WORKLOAD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"wellarchitected:JiraProjectKey",
	];
	/** Condition keys applicable to the CreateWorkloadShare action. */
	static readonly CREATE_WORKLOAD_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAgentContext action. */
	static readonly DELETE_AGENT_CONTEXT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAgentGoal action. */
	static readonly DELETE_AGENT_GOAL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAgentProfile action. */
	static readonly DELETE_AGENT_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteLens action. */
	static readonly DELETE_LENS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteLensShare action. */
	static readonly DELETE_LENS_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProfile action. */
	static readonly DELETE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProfileShare action. */
	static readonly DELETE_PROFILE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteReviewTemplate action. */
	static readonly DELETE_REVIEW_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteTemplateShare action. */
	static readonly DELETE_TEMPLATE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteWorkload action. */
	static readonly DELETE_WORKLOAD_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteWorkloadShare action. */
	static readonly DELETE_WORKLOAD_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateLenses action. */
	static readonly DISASSOCIATE_LENSES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateProfiles action. */
	static readonly DISASSOCIATE_PROFILES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ExportLens action. */
	static readonly EXPORT_LENS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentContext action. */
	static readonly GET_AGENT_CONTEXT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentGoal action. */
	static readonly GET_AGENT_GOAL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentProfile action. */
	static readonly GET_AGENT_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentRecommendation action. */
	static readonly GET_AGENT_RECOMMENDATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAgentRecommendationGeneration action. */
	static readonly GET_AGENT_RECOMMENDATION_GENERATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetAnswer action. */
	static readonly GET_ANSWER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLens action. */
	static readonly GET_LENS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLensReview action. */
	static readonly GET_LENS_REVIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLensReviewReport action. */
	static readonly GET_LENS_REVIEW_REPORT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLensVersionDifference action. */
	static readonly GET_LENS_VERSION_DIFFERENCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetMilestone action. */
	static readonly GET_MILESTONE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetProfile action. */
	static readonly GET_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetReviewTemplate action. */
	static readonly GET_REVIEW_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetReviewTemplateAnswer action. */
	static readonly GET_REVIEW_TEMPLATE_ANSWER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetReviewTemplateLensReview action. */
	static readonly GET_REVIEW_TEMPLATE_LENS_REVIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetWorkload action. */
	static readonly GET_WORKLOAD_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ImportLens action. */
	static readonly IMPORT_LENS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListAgentContexts action. */
	static readonly LIST_AGENT_CONTEXTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAgentGoals action. */
	static readonly LIST_AGENT_GOALS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAgentRecommendationGenerations action. */
	static readonly LIST_AGENT_RECOMMENDATION_GENERATIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListAgentRecommendationItems action. */
	static readonly LIST_AGENT_RECOMMENDATION_ITEMS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAgentRecommendations action. */
	static readonly LIST_AGENT_RECOMMENDATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAnswers action. */
	static readonly LIST_ANSWERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCheckDetails action. */
	static readonly LIST_CHECK_DETAILS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCheckSummaries action. */
	static readonly LIST_CHECK_SUMMARIES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListLensReviewImprovements action. */
	static readonly LIST_LENS_REVIEW_IMPROVEMENTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListLensReviews action. */
	static readonly LIST_LENS_REVIEWS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListLensShares action. */
	static readonly LIST_LENS_SHARES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListMilestones action. */
	static readonly LIST_MILESTONES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListProfileShares action. */
	static readonly LIST_PROFILE_SHARES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListReviewTemplateAnswers action. */
	static readonly LIST_REVIEW_TEMPLATE_ANSWERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTemplateShares action. */
	static readonly LIST_TEMPLATE_SHARES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListWorkloadShares action. */
	static readonly LIST_WORKLOAD_SHARES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAgentRecommendationFeedback action. */
	static readonly PUT_AGENT_RECOMMENDATION_FEEDBACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartAgentRecommendationGeneration action. */
	static readonly START_AGENT_RECOMMENDATION_GENERATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAgentContext action. */
	static readonly UPDATE_AGENT_CONTEXT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAgentGoal action. */
	static readonly UPDATE_AGENT_GOAL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAgentProfile action. */
	static readonly UPDATE_AGENT_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAgentRecommendationStatus action. */
	static readonly UPDATE_AGENT_RECOMMENDATION_STATUS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateAnswer action. */
	static readonly UPDATE_ANSWER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateGlobalSettings action. */
	static readonly UPDATE_GLOBAL_SETTINGS_CONDITION_KEYS: string[] = [
		"wellarchitected:JiraProjectKey",
	];
	/** Condition keys applicable to the UpdateIntegration action. */
	static readonly UPDATE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateLensReview action. */
	static readonly UPDATE_LENS_REVIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateProfile action. */
	static readonly UPDATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateReviewTemplate action. */
	static readonly UPDATE_REVIEW_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateReviewTemplateAnswer action. */
	static readonly UPDATE_REVIEW_TEMPLATE_ANSWER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateReviewTemplateLensReview action. */
	static readonly UPDATE_REVIEW_TEMPLATE_LENS_REVIEW_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateWorkload action. */
	static readonly UPDATE_WORKLOAD_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"wellarchitected:JiraProjectKey",
	];
	/** Condition keys applicable to the UpdateWorkloadShare action. */
	static readonly UPDATE_WORKLOAD_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpgradeLensReview action. */
	static readonly UPGRADE_LENS_REVIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpgradeProfileVersion action. */
	static readonly UPGRADE_PROFILE_VERSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpgradeReviewTemplateLensReview action. */
	static readonly UPGRADE_REVIEW_TEMPLATE_LENS_REVIEW_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
