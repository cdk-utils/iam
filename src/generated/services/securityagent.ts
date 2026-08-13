// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/securityagent.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the securityagent service.
 */
export class SecurityagentActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "securityagent";

	/** [Write] securityagent:AddArtifact */
	static readonly AddArtifact = "securityagent:AddArtifact";
	/** [Write] securityagent:BatchCreateSecurityRequirements */
	static readonly BatchCreateSecurityRequirements =
		"securityagent:BatchCreateSecurityRequirements";
	/** [Write] securityagent:BatchDeleteCodeReviews */
	static readonly BatchDeleteCodeReviews =
		"securityagent:BatchDeleteCodeReviews";
	/** [Write] securityagent:BatchDeletePentests */
	static readonly BatchDeletePentests = "securityagent:BatchDeletePentests";
	/** [Write] securityagent:BatchDeleteSecurityRequirements */
	static readonly BatchDeleteSecurityRequirements =
		"securityagent:BatchDeleteSecurityRequirements";
	/** [Write] securityagent:BatchDeleteThreatModels */
	static readonly BatchDeleteThreatModels =
		"securityagent:BatchDeleteThreatModels";
	/** [Write] securityagent:BatchDeleteThreats */
	static readonly BatchDeleteThreats = "securityagent:BatchDeleteThreats";
	/** [Read] securityagent:BatchGetAgentSpaces */
	static readonly BatchGetAgentSpaces = "securityagent:BatchGetAgentSpaces";
	/** [Read] securityagent:BatchGetArtifactMetadata */
	static readonly BatchGetArtifactMetadata =
		"securityagent:BatchGetArtifactMetadata";
	/** [Read] securityagent:BatchGetCodeReviewJobTasks */
	static readonly BatchGetCodeReviewJobTasks =
		"securityagent:BatchGetCodeReviewJobTasks";
	/** [Read] securityagent:BatchGetCodeReviewJobs */
	static readonly BatchGetCodeReviewJobs =
		"securityagent:BatchGetCodeReviewJobs";
	/** [Read] securityagent:BatchGetCodeReviews */
	static readonly BatchGetCodeReviews = "securityagent:BatchGetCodeReviews";
	/** [Read] securityagent:BatchGetFindings */
	static readonly BatchGetFindings = "securityagent:BatchGetFindings";
	/** [Read] securityagent:BatchGetPentestJobContentMetadata */
	static readonly BatchGetPentestJobContentMetadata =
		"securityagent:BatchGetPentestJobContentMetadata";
	/** [Read] securityagent:BatchGetPentestJobTasks */
	static readonly BatchGetPentestJobTasks =
		"securityagent:BatchGetPentestJobTasks";
	/** [Read] securityagent:BatchGetPentestJobs */
	static readonly BatchGetPentestJobs = "securityagent:BatchGetPentestJobs";
	/** [Read] securityagent:BatchGetPentests */
	static readonly BatchGetPentests = "securityagent:BatchGetPentests";
	/** [Read] securityagent:BatchGetSecurityRequirements */
	static readonly BatchGetSecurityRequirements =
		"securityagent:BatchGetSecurityRequirements";
	/** [Read] securityagent:BatchGetTargetDomains */
	static readonly BatchGetTargetDomains = "securityagent:BatchGetTargetDomains";
	/** [Read] securityagent:BatchGetThreatModelJobTasks */
	static readonly BatchGetThreatModelJobTasks =
		"securityagent:BatchGetThreatModelJobTasks";
	/** [Read] securityagent:BatchGetThreatModelJobs */
	static readonly BatchGetThreatModelJobs =
		"securityagent:BatchGetThreatModelJobs";
	/** [Read] securityagent:BatchGetThreatModels */
	static readonly BatchGetThreatModels = "securityagent:BatchGetThreatModels";
	/** [Read] securityagent:BatchGetThreats */
	static readonly BatchGetThreats = "securityagent:BatchGetThreats";
	/** [Write] securityagent:BatchUpdateSecurityRequirements */
	static readonly BatchUpdateSecurityRequirements =
		"securityagent:BatchUpdateSecurityRequirements";
	/** [Write] securityagent:CreateAgentSpace */
	static readonly CreateAgentSpace = "securityagent:CreateAgentSpace";
	/** [Write] securityagent:CreateApplication */
	static readonly CreateApplication = "securityagent:CreateApplication";
	/** [Write] securityagent:CreateCodeReview */
	static readonly CreateCodeReview = "securityagent:CreateCodeReview";
	/** [Write] securityagent:CreateDesignReview */
	static readonly CreateDesignReview = "securityagent:CreateDesignReview";
	/** [Write] securityagent:CreateIntegration */
	static readonly CreateIntegration = "securityagent:CreateIntegration";
	/** [Write] securityagent:CreateMembership */
	static readonly CreateMembership = "securityagent:CreateMembership";
	/** [Write] securityagent:CreateOneTimeLoginSession */
	static readonly CreateOneTimeLoginSession =
		"securityagent:CreateOneTimeLoginSession";
	/** [Write] securityagent:CreatePentest */
	static readonly CreatePentest = "securityagent:CreatePentest";
	/** [Write] securityagent:CreatePrivateConnection */
	static readonly CreatePrivateConnection =
		"securityagent:CreatePrivateConnection";
	/** [Write] securityagent:CreateSecurityRequirement */
	static readonly CreateSecurityRequirement =
		"securityagent:CreateSecurityRequirement";
	/** [Write] securityagent:CreateSecurityRequirementPack */
	static readonly CreateSecurityRequirementPack =
		"securityagent:CreateSecurityRequirementPack";
	/** [Write] securityagent:CreateTargetDomain */
	static readonly CreateTargetDomain = "securityagent:CreateTargetDomain";
	/** [Write] securityagent:CreateThreat */
	static readonly CreateThreat = "securityagent:CreateThreat";
	/** [Write] securityagent:CreateThreatModel */
	static readonly CreateThreatModel = "securityagent:CreateThreatModel";
	/** [Write] securityagent:DeleteAgentSpace */
	static readonly DeleteAgentSpace = "securityagent:DeleteAgentSpace";
	/** [Write] securityagent:DeleteApplication */
	static readonly DeleteApplication = "securityagent:DeleteApplication";
	/** [Write] securityagent:DeleteArtifact */
	static readonly DeleteArtifact = "securityagent:DeleteArtifact";
	/** [Write] securityagent:DeleteDesignReview */
	static readonly DeleteDesignReview = "securityagent:DeleteDesignReview";
	/** [Write] securityagent:DeleteIntegration */
	static readonly DeleteIntegration = "securityagent:DeleteIntegration";
	/** [Write] securityagent:DeleteMembership */
	static readonly DeleteMembership = "securityagent:DeleteMembership";
	/** [Write] securityagent:DeletePrivateConnection */
	static readonly DeletePrivateConnection =
		"securityagent:DeletePrivateConnection";
	/** [Write] securityagent:DeleteSecurityRequirement */
	static readonly DeleteSecurityRequirement =
		"securityagent:DeleteSecurityRequirement";
	/** [Write] securityagent:DeleteSecurityRequirementPack */
	static readonly DeleteSecurityRequirementPack =
		"securityagent:DeleteSecurityRequirementPack";
	/** [Write] securityagent:DeleteTargetDomain */
	static readonly DeleteTargetDomain = "securityagent:DeleteTargetDomain";
	/** [Read] securityagent:DescribePrivateConnection */
	static readonly DescribePrivateConnection =
		"securityagent:DescribePrivateConnection";
	/** [Read] securityagent:GetApplication */
	static readonly actionGetApplication = "securityagent:GetApplication";
	/** [Read] securityagent:GetArtifact */
	static readonly actionGetArtifact = "securityagent:GetArtifact";
	/** [Read] securityagent:GetDesignReview */
	static readonly actionGetDesignReview = "securityagent:GetDesignReview";
	/** [Read] securityagent:GetDesignReviewArtifact */
	static readonly actionGetDesignReviewArtifact =
		"securityagent:GetDesignReviewArtifact";
	/** [Read] securityagent:GetDesignReviewFeedback */
	static readonly actionGetDesignReviewFeedback =
		"securityagent:GetDesignReviewFeedback";
	/** [Read] securityagent:GetIntegration */
	static readonly actionGetIntegration = "securityagent:GetIntegration";
	/** [Read] securityagent:GetProviderRegistrationManifest */
	static readonly actionGetProviderRegistrationManifest =
		"securityagent:GetProviderRegistrationManifest";
	/** [Read] securityagent:GetSecurityRequirement */
	static readonly actionGetSecurityRequirement =
		"securityagent:GetSecurityRequirement";
	/** [Read] securityagent:GetSecurityRequirementPack */
	static readonly actionGetSecurityRequirementPack =
		"securityagent:GetSecurityRequirementPack";
	/** [Write] securityagent:HandleProviderRegistrationCallback */
	static readonly HandleProviderRegistrationCallback =
		"securityagent:HandleProviderRegistrationCallback";
	/** [Write] securityagent:ImportSecurityRequirements */
	static readonly ImportSecurityRequirements =
		"securityagent:ImportSecurityRequirements";
	/** [Write] securityagent:InitiateProviderRegistration */
	static readonly InitiateProviderRegistration =
		"securityagent:InitiateProviderRegistration";
	/** [List] securityagent:ListAgentSpaces */
	static readonly ListAgentSpaces = "securityagent:ListAgentSpaces";
	/** [List] securityagent:ListApplications */
	static readonly ListApplications = "securityagent:ListApplications";
	/** [List] securityagent:ListArtifacts */
	static readonly ListArtifacts = "securityagent:ListArtifacts";
	/** [List] securityagent:ListCodeReviewJobTasks */
	static readonly ListCodeReviewJobTasks =
		"securityagent:ListCodeReviewJobTasks";
	/** [List] securityagent:ListCodeReviewJobsForCodeReview */
	static readonly ListCodeReviewJobsForCodeReview =
		"securityagent:ListCodeReviewJobsForCodeReview";
	/** [List] securityagent:ListCodeReviews */
	static readonly ListCodeReviews = "securityagent:ListCodeReviews";
	/** [List] securityagent:ListDesignReviewComments */
	static readonly ListDesignReviewComments =
		"securityagent:ListDesignReviewComments";
	/** [List] securityagent:ListDesignReviews */
	static readonly ListDesignReviews = "securityagent:ListDesignReviews";
	/** [List] securityagent:ListDiscoveredEndpoints */
	static readonly ListDiscoveredEndpoints =
		"securityagent:ListDiscoveredEndpoints";
	/** [List] securityagent:ListFindings */
	static readonly ListFindings = "securityagent:ListFindings";
	/** [List] securityagent:ListIntegratedResources */
	static readonly ListIntegratedResources =
		"securityagent:ListIntegratedResources";
	/** [List] securityagent:ListIntegrations */
	static readonly ListIntegrations = "securityagent:ListIntegrations";
	/** [List] securityagent:ListMemberships */
	static readonly ListMemberships = "securityagent:ListMemberships";
	/** [List] securityagent:ListPentestJobTasks */
	static readonly ListPentestJobTasks = "securityagent:ListPentestJobTasks";
	/** [List] securityagent:ListPentestJobsForPentest */
	static readonly ListPentestJobsForPentest =
		"securityagent:ListPentestJobsForPentest";
	/** [List] securityagent:ListPentests */
	static readonly ListPentests = "securityagent:ListPentests";
	/** [List] securityagent:ListPrivateConnections */
	static readonly ListPrivateConnections =
		"securityagent:ListPrivateConnections";
	/** [List] securityagent:ListResourcesFromIntegration */
	static readonly ListResourcesFromIntegration =
		"securityagent:ListResourcesFromIntegration";
	/** [List] securityagent:ListSecurityRequirementPacks */
	static readonly ListSecurityRequirementPacks =
		"securityagent:ListSecurityRequirementPacks";
	/** [List] securityagent:ListSecurityRequirements */
	static readonly ListSecurityRequirements =
		"securityagent:ListSecurityRequirements";
	/** [Read] securityagent:ListTagsForResource */
	static readonly ListTagsForResource = "securityagent:ListTagsForResource";
	/** [List] securityagent:ListTargetDomains */
	static readonly ListTargetDomains = "securityagent:ListTargetDomains";
	/** [List] securityagent:ListThreatModelJobTasks */
	static readonly ListThreatModelJobTasks =
		"securityagent:ListThreatModelJobTasks";
	/** [List] securityagent:ListThreatModelJobs */
	static readonly ListThreatModelJobs = "securityagent:ListThreatModelJobs";
	/** [List] securityagent:ListThreatModels */
	static readonly ListThreatModels = "securityagent:ListThreatModels";
	/** [List] securityagent:ListThreats */
	static readonly ListThreats = "securityagent:ListThreats";
	/** [Write] securityagent:PutDesignReviewFeedback */
	static readonly PutDesignReviewFeedback =
		"securityagent:PutDesignReviewFeedback";
	/** [Write] securityagent:StartCodeRemediation */
	static readonly StartCodeRemediation = "securityagent:StartCodeRemediation";
	/** [Write] securityagent:StartCodeReviewJob */
	static readonly StartCodeReviewJob = "securityagent:StartCodeReviewJob";
	/** [Write] securityagent:StartPentestJob */
	static readonly StartPentestJob = "securityagent:StartPentestJob";
	/** [Write] securityagent:StartThreatModelJob */
	static readonly StartThreatModelJob = "securityagent:StartThreatModelJob";
	/** [Write] securityagent:StopCodeReviewJob */
	static readonly StopCodeReviewJob = "securityagent:StopCodeReviewJob";
	/** [Write] securityagent:StopPentestJob */
	static readonly StopPentestJob = "securityagent:StopPentestJob";
	/** [Write] securityagent:StopThreatModelJob */
	static readonly StopThreatModelJob = "securityagent:StopThreatModelJob";
	/** [Tagging] securityagent:TagResource */
	static readonly TagResource = "securityagent:TagResource";
	/** [Write] securityagent:ToggleManagedSecurityRequirement */
	static readonly ToggleManagedSecurityRequirement =
		"securityagent:ToggleManagedSecurityRequirement";
	/** [Tagging] securityagent:UntagResource */
	static readonly UntagResource = "securityagent:UntagResource";
	/** [Write] securityagent:UpdateAgentSpace */
	static readonly UpdateAgentSpace = "securityagent:UpdateAgentSpace";
	/** [Write] securityagent:UpdateApplication */
	static readonly UpdateApplication = "securityagent:UpdateApplication";
	/** [Write] securityagent:UpdateCodeReview */
	static readonly UpdateCodeReview = "securityagent:UpdateCodeReview";
	/** [Write] securityagent:UpdateFinding */
	static readonly UpdateFinding = "securityagent:UpdateFinding";
	/** [Write] securityagent:UpdateIntegratedResources */
	static readonly UpdateIntegratedResources =
		"securityagent:UpdateIntegratedResources";
	/** [Write] securityagent:UpdatePentest */
	static readonly UpdatePentest = "securityagent:UpdatePentest";
	/** [Write] securityagent:UpdatePrivateConnectionCertificate */
	static readonly UpdatePrivateConnectionCertificate =
		"securityagent:UpdatePrivateConnectionCertificate";
	/** [Write] securityagent:UpdateSecurityRequirement */
	static readonly UpdateSecurityRequirement =
		"securityagent:UpdateSecurityRequirement";
	/** [Write] securityagent:UpdateSecurityRequirementPack */
	static readonly UpdateSecurityRequirementPack =
		"securityagent:UpdateSecurityRequirementPack";
	/** [Write] securityagent:UpdateTargetDomain */
	static readonly UpdateTargetDomain = "securityagent:UpdateTargetDomain";
	/** [Write] securityagent:UpdateThreat */
	static readonly UpdateThreat = "securityagent:UpdateThreat";
	/** [Write] securityagent:UpdateThreatModel */
	static readonly UpdateThreatModel = "securityagent:UpdateThreatModel";
	/** [Write] securityagent:VerifyTargetDomain */
	static readonly VerifyTargetDomain = "securityagent:VerifyTargetDomain";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SecurityagentActions.BatchGetAgentSpaces,
		SecurityagentActions.BatchGetArtifactMetadata,
		SecurityagentActions.BatchGetCodeReviewJobTasks,
		SecurityagentActions.BatchGetCodeReviewJobs,
		SecurityagentActions.BatchGetCodeReviews,
		SecurityagentActions.BatchGetFindings,
		SecurityagentActions.BatchGetPentestJobContentMetadata,
		SecurityagentActions.BatchGetPentestJobTasks,
		SecurityagentActions.BatchGetPentestJobs,
		SecurityagentActions.BatchGetPentests,
		SecurityagentActions.BatchGetSecurityRequirements,
		SecurityagentActions.BatchGetTargetDomains,
		SecurityagentActions.BatchGetThreatModelJobTasks,
		SecurityagentActions.BatchGetThreatModelJobs,
		SecurityagentActions.BatchGetThreatModels,
		SecurityagentActions.BatchGetThreats,
		SecurityagentActions.DescribePrivateConnection,
		SecurityagentActions.actionGetApplication,
		SecurityagentActions.actionGetArtifact,
		SecurityagentActions.actionGetDesignReview,
		SecurityagentActions.actionGetDesignReviewArtifact,
		SecurityagentActions.actionGetDesignReviewFeedback,
		SecurityagentActions.actionGetIntegration,
		SecurityagentActions.actionGetProviderRegistrationManifest,
		SecurityagentActions.actionGetSecurityRequirement,
		SecurityagentActions.actionGetSecurityRequirementPack,
		SecurityagentActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SecurityagentActions.AddArtifact,
		SecurityagentActions.BatchCreateSecurityRequirements,
		SecurityagentActions.BatchDeleteCodeReviews,
		SecurityagentActions.BatchDeletePentests,
		SecurityagentActions.BatchDeleteSecurityRequirements,
		SecurityagentActions.BatchDeleteThreatModels,
		SecurityagentActions.BatchDeleteThreats,
		SecurityagentActions.BatchUpdateSecurityRequirements,
		SecurityagentActions.CreateAgentSpace,
		SecurityagentActions.CreateApplication,
		SecurityagentActions.CreateCodeReview,
		SecurityagentActions.CreateDesignReview,
		SecurityagentActions.CreateIntegration,
		SecurityagentActions.CreateMembership,
		SecurityagentActions.CreateOneTimeLoginSession,
		SecurityagentActions.CreatePentest,
		SecurityagentActions.CreatePrivateConnection,
		SecurityagentActions.CreateSecurityRequirement,
		SecurityagentActions.CreateSecurityRequirementPack,
		SecurityagentActions.CreateTargetDomain,
		SecurityagentActions.CreateThreat,
		SecurityagentActions.CreateThreatModel,
		SecurityagentActions.DeleteAgentSpace,
		SecurityagentActions.DeleteApplication,
		SecurityagentActions.DeleteArtifact,
		SecurityagentActions.DeleteDesignReview,
		SecurityagentActions.DeleteIntegration,
		SecurityagentActions.DeleteMembership,
		SecurityagentActions.DeletePrivateConnection,
		SecurityagentActions.DeleteSecurityRequirement,
		SecurityagentActions.DeleteSecurityRequirementPack,
		SecurityagentActions.DeleteTargetDomain,
		SecurityagentActions.HandleProviderRegistrationCallback,
		SecurityagentActions.ImportSecurityRequirements,
		SecurityagentActions.InitiateProviderRegistration,
		SecurityagentActions.PutDesignReviewFeedback,
		SecurityagentActions.StartCodeRemediation,
		SecurityagentActions.StartCodeReviewJob,
		SecurityagentActions.StartPentestJob,
		SecurityagentActions.StartThreatModelJob,
		SecurityagentActions.StopCodeReviewJob,
		SecurityagentActions.StopPentestJob,
		SecurityagentActions.StopThreatModelJob,
		SecurityagentActions.ToggleManagedSecurityRequirement,
		SecurityagentActions.UpdateAgentSpace,
		SecurityagentActions.UpdateApplication,
		SecurityagentActions.UpdateCodeReview,
		SecurityagentActions.UpdateFinding,
		SecurityagentActions.UpdateIntegratedResources,
		SecurityagentActions.UpdatePentest,
		SecurityagentActions.UpdatePrivateConnectionCertificate,
		SecurityagentActions.UpdateSecurityRequirement,
		SecurityagentActions.UpdateSecurityRequirementPack,
		SecurityagentActions.UpdateTargetDomain,
		SecurityagentActions.UpdateThreat,
		SecurityagentActions.UpdateThreatModel,
		SecurityagentActions.VerifyTargetDomain,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SecurityagentActions.ListAgentSpaces,
		SecurityagentActions.ListApplications,
		SecurityagentActions.ListArtifacts,
		SecurityagentActions.ListCodeReviewJobTasks,
		SecurityagentActions.ListCodeReviewJobsForCodeReview,
		SecurityagentActions.ListCodeReviews,
		SecurityagentActions.ListDesignReviewComments,
		SecurityagentActions.ListDesignReviews,
		SecurityagentActions.ListDiscoveredEndpoints,
		SecurityagentActions.ListFindings,
		SecurityagentActions.ListIntegratedResources,
		SecurityagentActions.ListIntegrations,
		SecurityagentActions.ListMemberships,
		SecurityagentActions.ListPentestJobTasks,
		SecurityagentActions.ListPentestJobsForPentest,
		SecurityagentActions.ListPentests,
		SecurityagentActions.ListPrivateConnections,
		SecurityagentActions.ListResourcesFromIntegration,
		SecurityagentActions.ListSecurityRequirementPacks,
		SecurityagentActions.ListSecurityRequirements,
		SecurityagentActions.ListTargetDomains,
		SecurityagentActions.ListThreatModelJobTasks,
		SecurityagentActions.ListThreatModelJobs,
		SecurityagentActions.ListThreatModels,
		SecurityagentActions.ListThreats,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SecurityagentActions.TagResource,
		SecurityagentActions.UntagResource,
	];
}

/**
 * Properties for building a AgentSpace ARN.
 */
export interface SecurityagentAgentSpaceArnProps {
	/** The AgentId component of the ARN. */
	readonly agentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AgentSpace ARN.
 */
export interface SecurityagentAgentSpaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AgentId component. */
	readonly agentId: string;
}

/**
 * Properties for building a Application ARN.
 */
export interface SecurityagentApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Application ARN.
 */
export interface SecurityagentApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a Integration ARN.
 */
export interface SecurityagentIntegrationArnProps {
	/** The IntegrationId component of the ARN. */
	readonly integrationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Integration ARN.
 */
export interface SecurityagentIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

/**
 * Properties for building a PrivateConnection ARN.
 */
export interface SecurityagentPrivateConnectionArnProps {
	/** The PrivateConnectionName component of the ARN. */
	readonly privateConnectionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a PrivateConnection ARN.
 */
export interface SecurityagentPrivateConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PrivateConnectionName component. */
	readonly privateConnectionName: string;
}

/**
 * Properties for building a SecurityRequirementPack ARN.
 */
export interface SecurityagentSecurityRequirementPackArnProps {
	/** The SecurityRequirementPackId component of the ARN. */
	readonly securityRequirementPackId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a SecurityRequirementPack ARN.
 */
export interface SecurityagentSecurityRequirementPackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SecurityRequirementPackId component. */
	readonly securityRequirementPackId: string;
}

/**
 * Properties for building a TargetDomain ARN.
 */
export interface SecurityagentTargetDomainArnProps {
	/** The TargetDomainId component of the ARN. */
	readonly targetDomainId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TargetDomain ARN.
 */
export interface SecurityagentTargetDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TargetDomainId component. */
	readonly targetDomainId: string;
}

const AgentSpaceArnRegex =
	/^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):agent-space\/(?<agentId>[^:/?]+)$/;
const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):integration\/(?<integrationId>[^:/?]+)$/;
const PrivateConnectionArnRegex =
	/^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):private-connection\/(?<privateConnectionName>[^:/?]+)$/;
const SecurityRequirementPackArnRegex =
	/^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):security-requirement-pack\/(?<securityRequirementPackId>[^:/?]+)$/;
const TargetDomainArnRegex =
	/^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):target-domain\/(?<targetDomainId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for securityagent resources.
 */
export class SecurityagentResources {
	/**
	 * Builds an ARN for the AgentSpace resource.
	 */
	static agentSpace(props: SecurityagentAgentSpaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityagent:${props.region ?? "*"}:${props.account ?? "*"}:agent-space/${props.agentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AgentSpace resource.
	 */
	static isValidAgentSpaceArn(arn: string): boolean {
		return AgentSpaceArnRegex.test(arn);
	}

	/**
	 * Parses a AgentSpace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentSpaceArn(arn: string): SecurityagentAgentSpaceArnComponents {
		const match = AgentSpaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AgentSpace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agentId: match.groups!.agentId,
		};
	}

	/**
	 * Builds an ARN for the Application resource.
	 */
	static application(props: SecurityagentApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityagent:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a Application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(
		arn: string,
	): SecurityagentApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the Integration resource.
	 */
	static integration(props: SecurityagentIntegrationArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityagent:${props.region ?? "*"}:${props.account ?? "*"}:integration/${props.integrationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Integration resource.
	 */
	static isValidIntegrationArn(arn: string): boolean {
		return IntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a Integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationArn(
		arn: string,
	): SecurityagentIntegrationArnComponents {
		const match = IntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			integrationId: match.groups!.integrationId,
		};
	}

	/**
	 * Builds an ARN for the PrivateConnection resource.
	 */
	static privateConnection(
		props: SecurityagentPrivateConnectionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:securityagent:${props.region ?? "*"}:${props.account ?? "*"}:private-connection/${props.privateConnectionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PrivateConnection resource.
	 */
	static isValidPrivateConnectionArn(arn: string): boolean {
		return PrivateConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a PrivateConnection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePrivateConnectionArn(
		arn: string,
	): SecurityagentPrivateConnectionArnComponents {
		const match = PrivateConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PrivateConnection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			privateConnectionName: match.groups!.privateConnectionName,
		};
	}

	/**
	 * Builds an ARN for the SecurityRequirementPack resource.
	 */
	static securityRequirementPack(
		props: SecurityagentSecurityRequirementPackArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:securityagent:${props.region ?? "*"}:${props.account ?? "*"}:security-requirement-pack/${props.securityRequirementPackId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SecurityRequirementPack resource.
	 */
	static isValidSecurityRequirementPackArn(arn: string): boolean {
		return SecurityRequirementPackArnRegex.test(arn);
	}

	/**
	 * Parses a SecurityRequirementPack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecurityRequirementPackArn(
		arn: string,
	): SecurityagentSecurityRequirementPackArnComponents {
		const match = SecurityRequirementPackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SecurityRequirementPack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			securityRequirementPackId: match.groups!.securityRequirementPackId,
		};
	}

	/**
	 * Builds an ARN for the TargetDomain resource.
	 */
	static targetDomain(props: SecurityagentTargetDomainArnProps): string {
		return `arn:${props.partition ?? "aws"}:securityagent:${props.region ?? "*"}:${props.account ?? "*"}:target-domain/${props.targetDomainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TargetDomain resource.
	 */
	static isValidTargetDomainArn(arn: string): boolean {
		return TargetDomainArnRegex.test(arn);
	}

	/**
	 * Parses a TargetDomain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTargetDomainArn(
		arn: string,
	): SecurityagentTargetDomainArnComponents {
		const match = TargetDomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TargetDomain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			targetDomainId: match.groups!.targetDomainId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for securityagent.
 */
export class SecurityagentOperations {
	/** IAM actions required for the AddArtifact API call. */
	static readonly AddArtifact: string[] = ["securityagent:AddArtifact"];
	/** IAM actions required for the BatchCreateSecurityRequirements API call. */
	static readonly BatchCreateSecurityRequirements: string[] = [
		"securityagent:BatchCreateSecurityRequirements",
	];
	/** IAM actions required for the BatchDeleteCodeReviews API call. */
	static readonly BatchDeleteCodeReviews: string[] = [
		"securityagent:BatchDeleteCodeReviews",
	];
	/** IAM actions required for the BatchDeletePentests API call. */
	static readonly BatchDeletePentests: string[] = [
		"securityagent:BatchDeletePentests",
	];
	/** IAM actions required for the BatchDeleteSecurityRequirements API call. */
	static readonly BatchDeleteSecurityRequirements: string[] = [
		"securityagent:BatchDeleteSecurityRequirements",
	];
	/** IAM actions required for the BatchDeleteThreatModels API call. */
	static readonly BatchDeleteThreatModels: string[] = [
		"securityagent:BatchDeleteThreatModels",
	];
	/** IAM actions required for the BatchGetAgentSpaces API call. */
	static readonly BatchGetAgentSpaces: string[] = [
		"securityagent:BatchGetAgentSpaces",
	];
	/** IAM actions required for the BatchGetArtifactMetadata API call. */
	static readonly BatchGetArtifactMetadata: string[] = [
		"securityagent:BatchGetArtifactMetadata",
	];
	/** IAM actions required for the BatchGetCodeReviewJobTasks API call. */
	static readonly BatchGetCodeReviewJobTasks: string[] = [
		"securityagent:BatchGetCodeReviewJobTasks",
	];
	/** IAM actions required for the BatchGetCodeReviewJobs API call. */
	static readonly BatchGetCodeReviewJobs: string[] = [
		"securityagent:BatchGetCodeReviewJobs",
	];
	/** IAM actions required for the BatchGetCodeReviews API call. */
	static readonly BatchGetCodeReviews: string[] = [
		"securityagent:BatchGetCodeReviews",
	];
	/** IAM actions required for the BatchGetFindings API call. */
	static readonly BatchGetFindings: string[] = [
		"securityagent:BatchGetFindings",
	];
	/** IAM actions required for the BatchGetPentestJobTasks API call. */
	static readonly BatchGetPentestJobTasks: string[] = [
		"securityagent:BatchGetPentestJobTasks",
	];
	/** IAM actions required for the BatchGetPentestJobs API call. */
	static readonly BatchGetPentestJobs: string[] = [
		"securityagent:BatchGetPentestJobs",
	];
	/** IAM actions required for the BatchGetPentests API call. */
	static readonly BatchGetPentests: string[] = [
		"securityagent:BatchGetPentests",
	];
	/** IAM actions required for the BatchGetSecurityRequirements API call. */
	static readonly BatchGetSecurityRequirements: string[] = [
		"securityagent:BatchGetSecurityRequirements",
	];
	/** IAM actions required for the BatchGetTargetDomains API call. */
	static readonly BatchGetTargetDomains: string[] = [
		"securityagent:BatchGetTargetDomains",
	];
	/** IAM actions required for the BatchGetThreatModelJobTasks API call. */
	static readonly BatchGetThreatModelJobTasks: string[] = [
		"securityagent:BatchGetThreatModelJobTasks",
	];
	/** IAM actions required for the BatchGetThreatModelJobs API call. */
	static readonly BatchGetThreatModelJobs: string[] = [
		"securityagent:BatchGetThreatModelJobs",
	];
	/** IAM actions required for the BatchGetThreatModels API call. */
	static readonly BatchGetThreatModels: string[] = [
		"securityagent:BatchGetThreatModels",
	];
	/** IAM actions required for the BatchGetThreats API call. */
	static readonly BatchGetThreats: string[] = ["securityagent:BatchGetThreats"];
	/** IAM actions required for the BatchUpdateSecurityRequirements API call. */
	static readonly BatchUpdateSecurityRequirements: string[] = [
		"securityagent:BatchUpdateSecurityRequirements",
	];
	/** IAM actions required for the CreateAgentSpace API call. */
	static readonly CreateAgentSpace: string[] = [
		"securityagent:CreateAgentSpace",
		"iam:PassRole",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"securityagent:CreateApplication",
		"iam:PassRole",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateCodeReview API call. */
	static readonly CreateCodeReview: string[] = [
		"securityagent:CreateCodeReview",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CreateIntegration: string[] = [
		"securityagent:CreateIntegration",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateMembership API call. */
	static readonly CreateMembership: string[] = [
		"securityagent:CreateMembership",
	];
	/** IAM actions required for the CreatePentest API call. */
	static readonly CreatePentest: string[] = ["securityagent:CreatePentest"];
	/** IAM actions required for the CreatePrivateConnection API call. */
	static readonly CreatePrivateConnection: string[] = [
		"securityagent:CreatePrivateConnection",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateSecurityRequirementPack API call. */
	static readonly CreateSecurityRequirementPack: string[] = [
		"securityagent:CreateSecurityRequirementPack",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateTargetDomain API call. */
	static readonly CreateTargetDomain: string[] = [
		"securityagent:CreateTargetDomain",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateThreat API call. */
	static readonly CreateThreat: string[] = ["securityagent:CreateThreat"];
	/** IAM actions required for the CreateThreatModel API call. */
	static readonly CreateThreatModel: string[] = [
		"securityagent:CreateThreatModel",
	];
	/** IAM actions required for the DeleteAgentSpace API call. */
	static readonly DeleteAgentSpace: string[] = [
		"securityagent:DeleteAgentSpace",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"securityagent:DeleteApplication",
	];
	/** IAM actions required for the DeleteArtifact API call. */
	static readonly DeleteArtifact: string[] = ["securityagent:DeleteArtifact"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = [
		"securityagent:DeleteIntegration",
	];
	/** IAM actions required for the DeleteMembership API call. */
	static readonly DeleteMembership: string[] = [
		"securityagent:DeleteMembership",
	];
	/** IAM actions required for the DeletePrivateConnection API call. */
	static readonly DeletePrivateConnection: string[] = [
		"securityagent:DeletePrivateConnection",
	];
	/** IAM actions required for the DeleteSecurityRequirementPack API call. */
	static readonly DeleteSecurityRequirementPack: string[] = [
		"securityagent:DeleteSecurityRequirementPack",
	];
	/** IAM actions required for the DeleteTargetDomain API call. */
	static readonly DeleteTargetDomain: string[] = [
		"securityagent:DeleteTargetDomain",
	];
	/** IAM actions required for the DescribePrivateConnection API call. */
	static readonly DescribePrivateConnection: string[] = [
		"securityagent:DescribePrivateConnection",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = ["securityagent:GetApplication"];
	/** IAM actions required for the GetArtifact API call. */
	static readonly opGetArtifact: string[] = ["securityagent:GetArtifact"];
	/** IAM actions required for the GetIntegration API call. */
	static readonly opGetIntegration: string[] = ["securityagent:GetIntegration"];
	/** IAM actions required for the GetSecurityRequirementPack API call. */
	static readonly opGetSecurityRequirementPack: string[] = [
		"securityagent:GetSecurityRequirementPack",
	];
	/** IAM actions required for the ImportSecurityRequirements API call. */
	static readonly ImportSecurityRequirements: string[] = [
		"securityagent:ImportSecurityRequirements",
	];
	/** IAM actions required for the InitiateProviderRegistration API call. */
	static readonly InitiateProviderRegistration: string[] = [
		"securityagent:InitiateProviderRegistration",
	];
	/** IAM actions required for the ListAgentSpaces API call. */
	static readonly ListAgentSpaces: string[] = ["securityagent:ListAgentSpaces"];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"securityagent:ListApplications",
	];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly ListArtifacts: string[] = ["securityagent:ListArtifacts"];
	/** IAM actions required for the ListCodeReviewJobTasks API call. */
	static readonly ListCodeReviewJobTasks: string[] = [
		"securityagent:ListCodeReviewJobTasks",
	];
	/** IAM actions required for the ListCodeReviewJobsForCodeReview API call. */
	static readonly ListCodeReviewJobsForCodeReview: string[] = [
		"securityagent:ListCodeReviewJobsForCodeReview",
	];
	/** IAM actions required for the ListCodeReviews API call. */
	static readonly ListCodeReviews: string[] = ["securityagent:ListCodeReviews"];
	/** IAM actions required for the ListDiscoveredEndpoints API call. */
	static readonly ListDiscoveredEndpoints: string[] = [
		"securityagent:ListDiscoveredEndpoints",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly ListFindings: string[] = ["securityagent:ListFindings"];
	/** IAM actions required for the ListIntegratedResources API call. */
	static readonly ListIntegratedResources: string[] = [
		"securityagent:ListIntegratedResources",
	];
	/** IAM actions required for the ListIntegrations API call. */
	static readonly ListIntegrations: string[] = [
		"securityagent:ListIntegrations",
	];
	/** IAM actions required for the ListMemberships API call. */
	static readonly ListMemberships: string[] = ["securityagent:ListMemberships"];
	/** IAM actions required for the ListPentestJobTasks API call. */
	static readonly ListPentestJobTasks: string[] = [
		"securityagent:ListPentestJobTasks",
	];
	/** IAM actions required for the ListPentestJobsForPentest API call. */
	static readonly ListPentestJobsForPentest: string[] = [
		"securityagent:ListPentestJobsForPentest",
	];
	/** IAM actions required for the ListPentests API call. */
	static readonly ListPentests: string[] = ["securityagent:ListPentests"];
	/** IAM actions required for the ListPrivateConnections API call. */
	static readonly ListPrivateConnections: string[] = [
		"securityagent:ListPrivateConnections",
	];
	/** IAM actions required for the ListSecurityRequirementPacks API call. */
	static readonly ListSecurityRequirementPacks: string[] = [
		"securityagent:ListSecurityRequirementPacks",
	];
	/** IAM actions required for the ListSecurityRequirements API call. */
	static readonly ListSecurityRequirements: string[] = [
		"securityagent:ListSecurityRequirements",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"securityagent:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetDomains API call. */
	static readonly ListTargetDomains: string[] = [
		"securityagent:ListTargetDomains",
	];
	/** IAM actions required for the ListThreatModelJobTasks API call. */
	static readonly ListThreatModelJobTasks: string[] = [
		"securityagent:ListThreatModelJobTasks",
	];
	/** IAM actions required for the ListThreatModelJobs API call. */
	static readonly ListThreatModelJobs: string[] = [
		"securityagent:ListThreatModelJobs",
	];
	/** IAM actions required for the ListThreatModels API call. */
	static readonly ListThreatModels: string[] = [
		"securityagent:ListThreatModels",
	];
	/** IAM actions required for the ListThreats API call. */
	static readonly ListThreats: string[] = ["securityagent:ListThreats"];
	/** IAM actions required for the StartCodeRemediation API call. */
	static readonly StartCodeRemediation: string[] = [
		"securityagent:StartCodeRemediation",
	];
	/** IAM actions required for the StartCodeReviewJob API call. */
	static readonly StartCodeReviewJob: string[] = [
		"securityagent:StartCodeReviewJob",
	];
	/** IAM actions required for the StartPentestJob API call. */
	static readonly StartPentestJob: string[] = ["securityagent:StartPentestJob"];
	/** IAM actions required for the StartThreatModelJob API call. */
	static readonly StartThreatModelJob: string[] = [
		"securityagent:StartThreatModelJob",
	];
	/** IAM actions required for the StopCodeReviewJob API call. */
	static readonly StopCodeReviewJob: string[] = [
		"securityagent:StopCodeReviewJob",
	];
	/** IAM actions required for the StopPentestJob API call. */
	static readonly StopPentestJob: string[] = ["securityagent:StopPentestJob"];
	/** IAM actions required for the StopThreatModelJob API call. */
	static readonly StopThreatModelJob: string[] = [
		"securityagent:StopThreatModelJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["securityagent:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["securityagent:UntagResource"];
	/** IAM actions required for the UpdateAgentSpace API call. */
	static readonly UpdateAgentSpace: string[] = [
		"iam:PassRole",
		"securityagent:UpdateAgentSpace",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"iam:PassRole",
		"securityagent:UpdateApplication",
	];
	/** IAM actions required for the UpdateCodeReview API call. */
	static readonly UpdateCodeReview: string[] = [
		"securityagent:UpdateCodeReview",
	];
	/** IAM actions required for the UpdateFinding API call. */
	static readonly UpdateFinding: string[] = ["securityagent:UpdateFinding"];
	/** IAM actions required for the UpdateIntegratedResources API call. */
	static readonly UpdateIntegratedResources: string[] = [
		"securityagent:UpdateIntegratedResources",
	];
	/** IAM actions required for the UpdatePentest API call. */
	static readonly UpdatePentest: string[] = ["securityagent:UpdatePentest"];
	/** IAM actions required for the UpdatePrivateConnectionCertificate API call. */
	static readonly UpdatePrivateConnectionCertificate: string[] = [
		"securityagent:UpdatePrivateConnectionCertificate",
	];
	/** IAM actions required for the UpdateSecurityRequirementPack API call. */
	static readonly UpdateSecurityRequirementPack: string[] = [
		"securityagent:UpdateSecurityRequirementPack",
	];
	/** IAM actions required for the UpdateTargetDomain API call. */
	static readonly UpdateTargetDomain: string[] = [
		"securityagent:UpdateTargetDomain",
	];
	/** IAM actions required for the UpdateThreat API call. */
	static readonly UpdateThreat: string[] = ["securityagent:UpdateThreat"];
	/** IAM actions required for the UpdateThreatModel API call. */
	static readonly UpdateThreatModel: string[] = [
		"securityagent:UpdateThreatModel",
	];
	/** IAM actions required for the VerifyTargetDomain API call. */
	static readonly VerifyTargetDomain: string[] = [
		"securityagent:VerifyTargetDomain",
	];
}

/**
 * Condition key constants and builders for securityagent.
 */
export class SecurityagentConditions {
	/** Condition keys applicable to the CreateAgentSpace action. */
	static readonly CreateAgentSpaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CreateIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrivateConnection action. */
	static readonly CreatePrivateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSecurityRequirementPack action. */
	static readonly CreateSecurityRequirementPackConditionKeys: string[] = [
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
