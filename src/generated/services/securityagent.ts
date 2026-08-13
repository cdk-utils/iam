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
	static readonly ADD_ARTIFACT = "securityagent:AddArtifact";
	/** [Write] securityagent:BatchCreateSecurityRequirements */
	static readonly BATCH_CREATE_SECURITY_REQUIREMENTS =
		"securityagent:BatchCreateSecurityRequirements";
	/** [Write] securityagent:BatchDeleteCodeReviews */
	static readonly BATCH_DELETE_CODE_REVIEWS =
		"securityagent:BatchDeleteCodeReviews";
	/** [Write] securityagent:BatchDeletePentests */
	static readonly BATCH_DELETE_PENTESTS = "securityagent:BatchDeletePentests";
	/** [Write] securityagent:BatchDeleteSecurityRequirements */
	static readonly BATCH_DELETE_SECURITY_REQUIREMENTS =
		"securityagent:BatchDeleteSecurityRequirements";
	/** [Write] securityagent:BatchDeleteThreatModels */
	static readonly BATCH_DELETE_THREAT_MODELS =
		"securityagent:BatchDeleteThreatModels";
	/** [Write] securityagent:BatchDeleteThreats */
	static readonly BATCH_DELETE_THREATS = "securityagent:BatchDeleteThreats";
	/** [Read] securityagent:BatchGetAgentSpaces */
	static readonly BATCH_GET_AGENT_SPACES = "securityagent:BatchGetAgentSpaces";
	/** [Read] securityagent:BatchGetArtifactMetadata */
	static readonly BATCH_GET_ARTIFACT_METADATA =
		"securityagent:BatchGetArtifactMetadata";
	/** [Read] securityagent:BatchGetCodeReviewJobTasks */
	static readonly BATCH_GET_CODE_REVIEW_JOB_TASKS =
		"securityagent:BatchGetCodeReviewJobTasks";
	/** [Read] securityagent:BatchGetCodeReviewJobs */
	static readonly BATCH_GET_CODE_REVIEW_JOBS =
		"securityagent:BatchGetCodeReviewJobs";
	/** [Read] securityagent:BatchGetCodeReviews */
	static readonly BATCH_GET_CODE_REVIEWS = "securityagent:BatchGetCodeReviews";
	/** [Read] securityagent:BatchGetFindings */
	static readonly BATCH_GET_FINDINGS = "securityagent:BatchGetFindings";
	/** [Read] securityagent:BatchGetPentestJobContentMetadata */
	static readonly BATCH_GET_PENTEST_JOB_CONTENT_METADATA =
		"securityagent:BatchGetPentestJobContentMetadata";
	/** [Read] securityagent:BatchGetPentestJobTasks */
	static readonly BATCH_GET_PENTEST_JOB_TASKS =
		"securityagent:BatchGetPentestJobTasks";
	/** [Read] securityagent:BatchGetPentestJobs */
	static readonly BATCH_GET_PENTEST_JOBS = "securityagent:BatchGetPentestJobs";
	/** [Read] securityagent:BatchGetPentests */
	static readonly BATCH_GET_PENTESTS = "securityagent:BatchGetPentests";
	/** [Read] securityagent:BatchGetSecurityRequirements */
	static readonly BATCH_GET_SECURITY_REQUIREMENTS =
		"securityagent:BatchGetSecurityRequirements";
	/** [Read] securityagent:BatchGetTargetDomains */
	static readonly BATCH_GET_TARGET_DOMAINS =
		"securityagent:BatchGetTargetDomains";
	/** [Read] securityagent:BatchGetThreatModelJobTasks */
	static readonly BATCH_GET_THREAT_MODEL_JOB_TASKS =
		"securityagent:BatchGetThreatModelJobTasks";
	/** [Read] securityagent:BatchGetThreatModelJobs */
	static readonly BATCH_GET_THREAT_MODEL_JOBS =
		"securityagent:BatchGetThreatModelJobs";
	/** [Read] securityagent:BatchGetThreatModels */
	static readonly BATCH_GET_THREAT_MODELS =
		"securityagent:BatchGetThreatModels";
	/** [Read] securityagent:BatchGetThreats */
	static readonly BATCH_GET_THREATS = "securityagent:BatchGetThreats";
	/** [Write] securityagent:BatchUpdateSecurityRequirements */
	static readonly BATCH_UPDATE_SECURITY_REQUIREMENTS =
		"securityagent:BatchUpdateSecurityRequirements";
	/** [Write] securityagent:CreateAgentSpace */
	static readonly CREATE_AGENT_SPACE = "securityagent:CreateAgentSpace";
	/** [Write] securityagent:CreateApplication */
	static readonly CREATE_APPLICATION = "securityagent:CreateApplication";
	/** [Write] securityagent:CreateCodeReview */
	static readonly CREATE_CODE_REVIEW = "securityagent:CreateCodeReview";
	/** [Write] securityagent:CreateDesignReview */
	static readonly CREATE_DESIGN_REVIEW = "securityagent:CreateDesignReview";
	/** [Write] securityagent:CreateIntegration */
	static readonly CREATE_INTEGRATION = "securityagent:CreateIntegration";
	/** [Write] securityagent:CreateMembership */
	static readonly CREATE_MEMBERSHIP = "securityagent:CreateMembership";
	/** [Write] securityagent:CreateOneTimeLoginSession */
	static readonly CREATE_ONE_TIME_LOGIN_SESSION =
		"securityagent:CreateOneTimeLoginSession";
	/** [Write] securityagent:CreatePentest */
	static readonly CREATE_PENTEST = "securityagent:CreatePentest";
	/** [Write] securityagent:CreatePrivateConnection */
	static readonly CREATE_PRIVATE_CONNECTION =
		"securityagent:CreatePrivateConnection";
	/** [Write] securityagent:CreateSecurityRequirement */
	static readonly CREATE_SECURITY_REQUIREMENT =
		"securityagent:CreateSecurityRequirement";
	/** [Write] securityagent:CreateSecurityRequirementPack */
	static readonly CREATE_SECURITY_REQUIREMENT_PACK =
		"securityagent:CreateSecurityRequirementPack";
	/** [Write] securityagent:CreateTargetDomain */
	static readonly CREATE_TARGET_DOMAIN = "securityagent:CreateTargetDomain";
	/** [Write] securityagent:CreateThreat */
	static readonly CREATE_THREAT = "securityagent:CreateThreat";
	/** [Write] securityagent:CreateThreatModel */
	static readonly CREATE_THREAT_MODEL = "securityagent:CreateThreatModel";
	/** [Write] securityagent:DeleteAgentSpace */
	static readonly DELETE_AGENT_SPACE = "securityagent:DeleteAgentSpace";
	/** [Write] securityagent:DeleteApplication */
	static readonly DELETE_APPLICATION = "securityagent:DeleteApplication";
	/** [Write] securityagent:DeleteArtifact */
	static readonly DELETE_ARTIFACT = "securityagent:DeleteArtifact";
	/** [Write] securityagent:DeleteDesignReview */
	static readonly DELETE_DESIGN_REVIEW = "securityagent:DeleteDesignReview";
	/** [Write] securityagent:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "securityagent:DeleteIntegration";
	/** [Write] securityagent:DeleteMembership */
	static readonly DELETE_MEMBERSHIP = "securityagent:DeleteMembership";
	/** [Write] securityagent:DeletePrivateConnection */
	static readonly DELETE_PRIVATE_CONNECTION =
		"securityagent:DeletePrivateConnection";
	/** [Write] securityagent:DeleteSecurityRequirement */
	static readonly DELETE_SECURITY_REQUIREMENT =
		"securityagent:DeleteSecurityRequirement";
	/** [Write] securityagent:DeleteSecurityRequirementPack */
	static readonly DELETE_SECURITY_REQUIREMENT_PACK =
		"securityagent:DeleteSecurityRequirementPack";
	/** [Write] securityagent:DeleteTargetDomain */
	static readonly DELETE_TARGET_DOMAIN = "securityagent:DeleteTargetDomain";
	/** [Read] securityagent:DescribePrivateConnection */
	static readonly DESCRIBE_PRIVATE_CONNECTION =
		"securityagent:DescribePrivateConnection";
	/** [Read] securityagent:GetApplication */
	static readonly GET_APPLICATION = "securityagent:GetApplication";
	/** [Read] securityagent:GetArtifact */
	static readonly GET_ARTIFACT = "securityagent:GetArtifact";
	/** [Read] securityagent:GetDesignReview */
	static readonly GET_DESIGN_REVIEW = "securityagent:GetDesignReview";
	/** [Read] securityagent:GetDesignReviewArtifact */
	static readonly GET_DESIGN_REVIEW_ARTIFACT =
		"securityagent:GetDesignReviewArtifact";
	/** [Read] securityagent:GetDesignReviewFeedback */
	static readonly GET_DESIGN_REVIEW_FEEDBACK =
		"securityagent:GetDesignReviewFeedback";
	/** [Read] securityagent:GetIntegration */
	static readonly GET_INTEGRATION = "securityagent:GetIntegration";
	/** [Read] securityagent:GetProviderRegistrationManifest */
	static readonly GET_PROVIDER_REGISTRATION_MANIFEST =
		"securityagent:GetProviderRegistrationManifest";
	/** [Read] securityagent:GetSecurityRequirement */
	static readonly GET_SECURITY_REQUIREMENT =
		"securityagent:GetSecurityRequirement";
	/** [Read] securityagent:GetSecurityRequirementPack */
	static readonly GET_SECURITY_REQUIREMENT_PACK =
		"securityagent:GetSecurityRequirementPack";
	/** [Write] securityagent:HandleProviderRegistrationCallback */
	static readonly HANDLE_PROVIDER_REGISTRATION_CALLBACK =
		"securityagent:HandleProviderRegistrationCallback";
	/** [Write] securityagent:ImportSecurityRequirements */
	static readonly IMPORT_SECURITY_REQUIREMENTS =
		"securityagent:ImportSecurityRequirements";
	/** [Write] securityagent:InitiateProviderRegistration */
	static readonly INITIATE_PROVIDER_REGISTRATION =
		"securityagent:InitiateProviderRegistration";
	/** [List] securityagent:ListAgentSpaces */
	static readonly LIST_AGENT_SPACES = "securityagent:ListAgentSpaces";
	/** [List] securityagent:ListApplications */
	static readonly LIST_APPLICATIONS = "securityagent:ListApplications";
	/** [List] securityagent:ListArtifacts */
	static readonly LIST_ARTIFACTS = "securityagent:ListArtifacts";
	/** [List] securityagent:ListCodeReviewJobTasks */
	static readonly LIST_CODE_REVIEW_JOB_TASKS =
		"securityagent:ListCodeReviewJobTasks";
	/** [List] securityagent:ListCodeReviewJobsForCodeReview */
	static readonly LIST_CODE_REVIEW_JOBS_FOR_CODE_REVIEW =
		"securityagent:ListCodeReviewJobsForCodeReview";
	/** [List] securityagent:ListCodeReviews */
	static readonly LIST_CODE_REVIEWS = "securityagent:ListCodeReviews";
	/** [List] securityagent:ListDesignReviewComments */
	static readonly LIST_DESIGN_REVIEW_COMMENTS =
		"securityagent:ListDesignReviewComments";
	/** [List] securityagent:ListDesignReviews */
	static readonly LIST_DESIGN_REVIEWS = "securityagent:ListDesignReviews";
	/** [List] securityagent:ListDiscoveredEndpoints */
	static readonly LIST_DISCOVERED_ENDPOINTS =
		"securityagent:ListDiscoveredEndpoints";
	/** [List] securityagent:ListFindings */
	static readonly LIST_FINDINGS = "securityagent:ListFindings";
	/** [List] securityagent:ListIntegratedResources */
	static readonly LIST_INTEGRATED_RESOURCES =
		"securityagent:ListIntegratedResources";
	/** [List] securityagent:ListIntegrations */
	static readonly LIST_INTEGRATIONS = "securityagent:ListIntegrations";
	/** [List] securityagent:ListMemberships */
	static readonly LIST_MEMBERSHIPS = "securityagent:ListMemberships";
	/** [List] securityagent:ListPentestJobTasks */
	static readonly LIST_PENTEST_JOB_TASKS = "securityagent:ListPentestJobTasks";
	/** [List] securityagent:ListPentestJobsForPentest */
	static readonly LIST_PENTEST_JOBS_FOR_PENTEST =
		"securityagent:ListPentestJobsForPentest";
	/** [List] securityagent:ListPentests */
	static readonly LIST_PENTESTS = "securityagent:ListPentests";
	/** [List] securityagent:ListPrivateConnections */
	static readonly LIST_PRIVATE_CONNECTIONS =
		"securityagent:ListPrivateConnections";
	/** [List] securityagent:ListResourcesFromIntegration */
	static readonly LIST_RESOURCES_FROM_INTEGRATION =
		"securityagent:ListResourcesFromIntegration";
	/** [List] securityagent:ListSecurityRequirementPacks */
	static readonly LIST_SECURITY_REQUIREMENT_PACKS =
		"securityagent:ListSecurityRequirementPacks";
	/** [List] securityagent:ListSecurityRequirements */
	static readonly LIST_SECURITY_REQUIREMENTS =
		"securityagent:ListSecurityRequirements";
	/** [Read] securityagent:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "securityagent:ListTagsForResource";
	/** [List] securityagent:ListTargetDomains */
	static readonly LIST_TARGET_DOMAINS = "securityagent:ListTargetDomains";
	/** [List] securityagent:ListThreatModelJobTasks */
	static readonly LIST_THREAT_MODEL_JOB_TASKS =
		"securityagent:ListThreatModelJobTasks";
	/** [List] securityagent:ListThreatModelJobs */
	static readonly LIST_THREAT_MODEL_JOBS = "securityagent:ListThreatModelJobs";
	/** [List] securityagent:ListThreatModels */
	static readonly LIST_THREAT_MODELS = "securityagent:ListThreatModels";
	/** [List] securityagent:ListThreats */
	static readonly LIST_THREATS = "securityagent:ListThreats";
	/** [Write] securityagent:PutDesignReviewFeedback */
	static readonly PUT_DESIGN_REVIEW_FEEDBACK =
		"securityagent:PutDesignReviewFeedback";
	/** [Write] securityagent:StartCodeRemediation */
	static readonly START_CODE_REMEDIATION = "securityagent:StartCodeRemediation";
	/** [Write] securityagent:StartCodeReviewJob */
	static readonly START_CODE_REVIEW_JOB = "securityagent:StartCodeReviewJob";
	/** [Write] securityagent:StartPentestJob */
	static readonly START_PENTEST_JOB = "securityagent:StartPentestJob";
	/** [Write] securityagent:StartThreatModelJob */
	static readonly START_THREAT_MODEL_JOB = "securityagent:StartThreatModelJob";
	/** [Write] securityagent:StopCodeReviewJob */
	static readonly STOP_CODE_REVIEW_JOB = "securityagent:StopCodeReviewJob";
	/** [Write] securityagent:StopPentestJob */
	static readonly STOP_PENTEST_JOB = "securityagent:StopPentestJob";
	/** [Write] securityagent:StopThreatModelJob */
	static readonly STOP_THREAT_MODEL_JOB = "securityagent:StopThreatModelJob";
	/** [Tagging] securityagent:TagResource */
	static readonly TAG_RESOURCE = "securityagent:TagResource";
	/** [Write] securityagent:ToggleManagedSecurityRequirement */
	static readonly TOGGLE_MANAGED_SECURITY_REQUIREMENT =
		"securityagent:ToggleManagedSecurityRequirement";
	/** [Tagging] securityagent:UntagResource */
	static readonly UNTAG_RESOURCE = "securityagent:UntagResource";
	/** [Write] securityagent:UpdateAgentSpace */
	static readonly UPDATE_AGENT_SPACE = "securityagent:UpdateAgentSpace";
	/** [Write] securityagent:UpdateApplication */
	static readonly UPDATE_APPLICATION = "securityagent:UpdateApplication";
	/** [Write] securityagent:UpdateCodeReview */
	static readonly UPDATE_CODE_REVIEW = "securityagent:UpdateCodeReview";
	/** [Write] securityagent:UpdateFinding */
	static readonly UPDATE_FINDING = "securityagent:UpdateFinding";
	/** [Write] securityagent:UpdateIntegratedResources */
	static readonly UPDATE_INTEGRATED_RESOURCES =
		"securityagent:UpdateIntegratedResources";
	/** [Write] securityagent:UpdatePentest */
	static readonly UPDATE_PENTEST = "securityagent:UpdatePentest";
	/** [Write] securityagent:UpdatePrivateConnectionCertificate */
	static readonly UPDATE_PRIVATE_CONNECTION_CERTIFICATE =
		"securityagent:UpdatePrivateConnectionCertificate";
	/** [Write] securityagent:UpdateSecurityRequirement */
	static readonly UPDATE_SECURITY_REQUIREMENT =
		"securityagent:UpdateSecurityRequirement";
	/** [Write] securityagent:UpdateSecurityRequirementPack */
	static readonly UPDATE_SECURITY_REQUIREMENT_PACK =
		"securityagent:UpdateSecurityRequirementPack";
	/** [Write] securityagent:UpdateTargetDomain */
	static readonly UPDATE_TARGET_DOMAIN = "securityagent:UpdateTargetDomain";
	/** [Write] securityagent:UpdateThreat */
	static readonly UPDATE_THREAT = "securityagent:UpdateThreat";
	/** [Write] securityagent:UpdateThreatModel */
	static readonly UPDATE_THREAT_MODEL = "securityagent:UpdateThreatModel";
	/** [Write] securityagent:VerifyTargetDomain */
	static readonly VERIFY_TARGET_DOMAIN = "securityagent:VerifyTargetDomain";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SecurityagentActions.BATCH_GET_AGENT_SPACES,
		SecurityagentActions.BATCH_GET_ARTIFACT_METADATA,
		SecurityagentActions.BATCH_GET_CODE_REVIEW_JOB_TASKS,
		SecurityagentActions.BATCH_GET_CODE_REVIEW_JOBS,
		SecurityagentActions.BATCH_GET_CODE_REVIEWS,
		SecurityagentActions.BATCH_GET_FINDINGS,
		SecurityagentActions.BATCH_GET_PENTEST_JOB_CONTENT_METADATA,
		SecurityagentActions.BATCH_GET_PENTEST_JOB_TASKS,
		SecurityagentActions.BATCH_GET_PENTEST_JOBS,
		SecurityagentActions.BATCH_GET_PENTESTS,
		SecurityagentActions.BATCH_GET_SECURITY_REQUIREMENTS,
		SecurityagentActions.BATCH_GET_TARGET_DOMAINS,
		SecurityagentActions.BATCH_GET_THREAT_MODEL_JOB_TASKS,
		SecurityagentActions.BATCH_GET_THREAT_MODEL_JOBS,
		SecurityagentActions.BATCH_GET_THREAT_MODELS,
		SecurityagentActions.BATCH_GET_THREATS,
		SecurityagentActions.DESCRIBE_PRIVATE_CONNECTION,
		SecurityagentActions.GET_APPLICATION,
		SecurityagentActions.GET_ARTIFACT,
		SecurityagentActions.GET_DESIGN_REVIEW,
		SecurityagentActions.GET_DESIGN_REVIEW_ARTIFACT,
		SecurityagentActions.GET_DESIGN_REVIEW_FEEDBACK,
		SecurityagentActions.GET_INTEGRATION,
		SecurityagentActions.GET_PROVIDER_REGISTRATION_MANIFEST,
		SecurityagentActions.GET_SECURITY_REQUIREMENT,
		SecurityagentActions.GET_SECURITY_REQUIREMENT_PACK,
		SecurityagentActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SecurityagentActions.ADD_ARTIFACT,
		SecurityagentActions.BATCH_CREATE_SECURITY_REQUIREMENTS,
		SecurityagentActions.BATCH_DELETE_CODE_REVIEWS,
		SecurityagentActions.BATCH_DELETE_PENTESTS,
		SecurityagentActions.BATCH_DELETE_SECURITY_REQUIREMENTS,
		SecurityagentActions.BATCH_DELETE_THREAT_MODELS,
		SecurityagentActions.BATCH_DELETE_THREATS,
		SecurityagentActions.BATCH_UPDATE_SECURITY_REQUIREMENTS,
		SecurityagentActions.CREATE_AGENT_SPACE,
		SecurityagentActions.CREATE_APPLICATION,
		SecurityagentActions.CREATE_CODE_REVIEW,
		SecurityagentActions.CREATE_DESIGN_REVIEW,
		SecurityagentActions.CREATE_INTEGRATION,
		SecurityagentActions.CREATE_MEMBERSHIP,
		SecurityagentActions.CREATE_ONE_TIME_LOGIN_SESSION,
		SecurityagentActions.CREATE_PENTEST,
		SecurityagentActions.CREATE_PRIVATE_CONNECTION,
		SecurityagentActions.CREATE_SECURITY_REQUIREMENT,
		SecurityagentActions.CREATE_SECURITY_REQUIREMENT_PACK,
		SecurityagentActions.CREATE_TARGET_DOMAIN,
		SecurityagentActions.CREATE_THREAT,
		SecurityagentActions.CREATE_THREAT_MODEL,
		SecurityagentActions.DELETE_AGENT_SPACE,
		SecurityagentActions.DELETE_APPLICATION,
		SecurityagentActions.DELETE_ARTIFACT,
		SecurityagentActions.DELETE_DESIGN_REVIEW,
		SecurityagentActions.DELETE_INTEGRATION,
		SecurityagentActions.DELETE_MEMBERSHIP,
		SecurityagentActions.DELETE_PRIVATE_CONNECTION,
		SecurityagentActions.DELETE_SECURITY_REQUIREMENT,
		SecurityagentActions.DELETE_SECURITY_REQUIREMENT_PACK,
		SecurityagentActions.DELETE_TARGET_DOMAIN,
		SecurityagentActions.HANDLE_PROVIDER_REGISTRATION_CALLBACK,
		SecurityagentActions.IMPORT_SECURITY_REQUIREMENTS,
		SecurityagentActions.INITIATE_PROVIDER_REGISTRATION,
		SecurityagentActions.PUT_DESIGN_REVIEW_FEEDBACK,
		SecurityagentActions.START_CODE_REMEDIATION,
		SecurityagentActions.START_CODE_REVIEW_JOB,
		SecurityagentActions.START_PENTEST_JOB,
		SecurityagentActions.START_THREAT_MODEL_JOB,
		SecurityagentActions.STOP_CODE_REVIEW_JOB,
		SecurityagentActions.STOP_PENTEST_JOB,
		SecurityagentActions.STOP_THREAT_MODEL_JOB,
		SecurityagentActions.TOGGLE_MANAGED_SECURITY_REQUIREMENT,
		SecurityagentActions.UPDATE_AGENT_SPACE,
		SecurityagentActions.UPDATE_APPLICATION,
		SecurityagentActions.UPDATE_CODE_REVIEW,
		SecurityagentActions.UPDATE_FINDING,
		SecurityagentActions.UPDATE_INTEGRATED_RESOURCES,
		SecurityagentActions.UPDATE_PENTEST,
		SecurityagentActions.UPDATE_PRIVATE_CONNECTION_CERTIFICATE,
		SecurityagentActions.UPDATE_SECURITY_REQUIREMENT,
		SecurityagentActions.UPDATE_SECURITY_REQUIREMENT_PACK,
		SecurityagentActions.UPDATE_TARGET_DOMAIN,
		SecurityagentActions.UPDATE_THREAT,
		SecurityagentActions.UPDATE_THREAT_MODEL,
		SecurityagentActions.VERIFY_TARGET_DOMAIN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SecurityagentActions.LIST_AGENT_SPACES,
		SecurityagentActions.LIST_APPLICATIONS,
		SecurityagentActions.LIST_ARTIFACTS,
		SecurityagentActions.LIST_CODE_REVIEW_JOB_TASKS,
		SecurityagentActions.LIST_CODE_REVIEW_JOBS_FOR_CODE_REVIEW,
		SecurityagentActions.LIST_CODE_REVIEWS,
		SecurityagentActions.LIST_DESIGN_REVIEW_COMMENTS,
		SecurityagentActions.LIST_DESIGN_REVIEWS,
		SecurityagentActions.LIST_DISCOVERED_ENDPOINTS,
		SecurityagentActions.LIST_FINDINGS,
		SecurityagentActions.LIST_INTEGRATED_RESOURCES,
		SecurityagentActions.LIST_INTEGRATIONS,
		SecurityagentActions.LIST_MEMBERSHIPS,
		SecurityagentActions.LIST_PENTEST_JOB_TASKS,
		SecurityagentActions.LIST_PENTEST_JOBS_FOR_PENTEST,
		SecurityagentActions.LIST_PENTESTS,
		SecurityagentActions.LIST_PRIVATE_CONNECTIONS,
		SecurityagentActions.LIST_RESOURCES_FROM_INTEGRATION,
		SecurityagentActions.LIST_SECURITY_REQUIREMENT_PACKS,
		SecurityagentActions.LIST_SECURITY_REQUIREMENTS,
		SecurityagentActions.LIST_TARGET_DOMAINS,
		SecurityagentActions.LIST_THREAT_MODEL_JOB_TASKS,
		SecurityagentActions.LIST_THREAT_MODEL_JOBS,
		SecurityagentActions.LIST_THREAT_MODELS,
		SecurityagentActions.LIST_THREATS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SecurityagentActions.TAG_RESOURCE,
		SecurityagentActions.UNTAG_RESOURCE,
	];
}

const AgentSpaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):agent-space/(?<agentId>[^:/?]+)$",
);
const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const IntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):integration/(?<integrationId>[^:/?]+)$",
);
const PrivateConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):private-connection/(?<privateConnectionName>[^:/?]+)$",
);
const SecurityRequirementPackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):security-requirement-pack/(?<securityRequirementPackId>[^:/?]+)$",
);
const TargetDomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):securityagent:(?<region>[^:]*):(?<account>[^:]*):target-domain/(?<targetDomainId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for securityagent resources.
 */
export class SecurityagentResources {
	/**
	 * Builds an ARN for the AgentSpace resource.
	 */
	static agentSpace(props: {
		/** The AgentId component of the ARN. */
		readonly agentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAgentSpaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agentId: string;
	} {
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
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static integration(props: {
		/** The IntegrationId component of the ARN. */
		readonly integrationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		integrationId: string;
	} {
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
	static privateConnection(props: {
		/** The PrivateConnectionName component of the ARN. */
		readonly privateConnectionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePrivateConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		privateConnectionName: string;
	} {
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
	static securityRequirementPack(props: {
		/** The SecurityRequirementPackId component of the ARN. */
		readonly securityRequirementPackId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSecurityRequirementPackArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		securityRequirementPackId: string;
	} {
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
	static targetDomain(props: {
		/** The TargetDomainId component of the ARN. */
		readonly targetDomainId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTargetDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		targetDomainId: string;
	} {
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
	static readonly ADD_ARTIFACT: string[] = ["securityagent:AddArtifact"];
	/** IAM actions required for the BatchCreateSecurityRequirements API call. */
	static readonly BATCH_CREATE_SECURITY_REQUIREMENTS: string[] = [
		"securityagent:BatchCreateSecurityRequirements",
	];
	/** IAM actions required for the BatchDeleteCodeReviews API call. */
	static readonly BATCH_DELETE_CODE_REVIEWS: string[] = [
		"securityagent:BatchDeleteCodeReviews",
	];
	/** IAM actions required for the BatchDeletePentests API call. */
	static readonly BATCH_DELETE_PENTESTS: string[] = [
		"securityagent:BatchDeletePentests",
	];
	/** IAM actions required for the BatchDeleteSecurityRequirements API call. */
	static readonly BATCH_DELETE_SECURITY_REQUIREMENTS: string[] = [
		"securityagent:BatchDeleteSecurityRequirements",
	];
	/** IAM actions required for the BatchDeleteThreatModels API call. */
	static readonly BATCH_DELETE_THREAT_MODELS: string[] = [
		"securityagent:BatchDeleteThreatModels",
	];
	/** IAM actions required for the BatchGetAgentSpaces API call. */
	static readonly BATCH_GET_AGENT_SPACES: string[] = [
		"securityagent:BatchGetAgentSpaces",
	];
	/** IAM actions required for the BatchGetArtifactMetadata API call. */
	static readonly BATCH_GET_ARTIFACT_METADATA: string[] = [
		"securityagent:BatchGetArtifactMetadata",
	];
	/** IAM actions required for the BatchGetCodeReviewJobTasks API call. */
	static readonly BATCH_GET_CODE_REVIEW_JOB_TASKS: string[] = [
		"securityagent:BatchGetCodeReviewJobTasks",
	];
	/** IAM actions required for the BatchGetCodeReviewJobs API call. */
	static readonly BATCH_GET_CODE_REVIEW_JOBS: string[] = [
		"securityagent:BatchGetCodeReviewJobs",
	];
	/** IAM actions required for the BatchGetCodeReviews API call. */
	static readonly BATCH_GET_CODE_REVIEWS: string[] = [
		"securityagent:BatchGetCodeReviews",
	];
	/** IAM actions required for the BatchGetFindings API call. */
	static readonly BATCH_GET_FINDINGS: string[] = [
		"securityagent:BatchGetFindings",
	];
	/** IAM actions required for the BatchGetPentestJobTasks API call. */
	static readonly BATCH_GET_PENTEST_JOB_TASKS: string[] = [
		"securityagent:BatchGetPentestJobTasks",
	];
	/** IAM actions required for the BatchGetPentestJobs API call. */
	static readonly BATCH_GET_PENTEST_JOBS: string[] = [
		"securityagent:BatchGetPentestJobs",
	];
	/** IAM actions required for the BatchGetPentests API call. */
	static readonly BATCH_GET_PENTESTS: string[] = [
		"securityagent:BatchGetPentests",
	];
	/** IAM actions required for the BatchGetSecurityRequirements API call. */
	static readonly BATCH_GET_SECURITY_REQUIREMENTS: string[] = [
		"securityagent:BatchGetSecurityRequirements",
	];
	/** IAM actions required for the BatchGetTargetDomains API call. */
	static readonly BATCH_GET_TARGET_DOMAINS: string[] = [
		"securityagent:BatchGetTargetDomains",
	];
	/** IAM actions required for the BatchGetThreatModelJobTasks API call. */
	static readonly BATCH_GET_THREAT_MODEL_JOB_TASKS: string[] = [
		"securityagent:BatchGetThreatModelJobTasks",
	];
	/** IAM actions required for the BatchGetThreatModelJobs API call. */
	static readonly BATCH_GET_THREAT_MODEL_JOBS: string[] = [
		"securityagent:BatchGetThreatModelJobs",
	];
	/** IAM actions required for the BatchGetThreatModels API call. */
	static readonly BATCH_GET_THREAT_MODELS: string[] = [
		"securityagent:BatchGetThreatModels",
	];
	/** IAM actions required for the BatchGetThreats API call. */
	static readonly BATCH_GET_THREATS: string[] = [
		"securityagent:BatchGetThreats",
	];
	/** IAM actions required for the BatchUpdateSecurityRequirements API call. */
	static readonly BATCH_UPDATE_SECURITY_REQUIREMENTS: string[] = [
		"securityagent:BatchUpdateSecurityRequirements",
	];
	/** IAM actions required for the CreateAgentSpace API call. */
	static readonly CREATE_AGENT_SPACE: string[] = [
		"securityagent:CreateAgentSpace",
		"iam:PassRole",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"securityagent:CreateApplication",
		"iam:PassRole",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateCodeReview API call. */
	static readonly CREATE_CODE_REVIEW: string[] = [
		"securityagent:CreateCodeReview",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CREATE_INTEGRATION: string[] = [
		"securityagent:CreateIntegration",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateMembership API call. */
	static readonly CREATE_MEMBERSHIP: string[] = [
		"securityagent:CreateMembership",
	];
	/** IAM actions required for the CreatePentest API call. */
	static readonly CREATE_PENTEST: string[] = ["securityagent:CreatePentest"];
	/** IAM actions required for the CreatePrivateConnection API call. */
	static readonly CREATE_PRIVATE_CONNECTION: string[] = [
		"securityagent:CreatePrivateConnection",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateSecurityRequirementPack API call. */
	static readonly CREATE_SECURITY_REQUIREMENT_PACK: string[] = [
		"securityagent:CreateSecurityRequirementPack",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateTargetDomain API call. */
	static readonly CREATE_TARGET_DOMAIN: string[] = [
		"securityagent:CreateTargetDomain",
		"securityagent:TagResource",
	];
	/** IAM actions required for the CreateThreat API call. */
	static readonly CREATE_THREAT: string[] = ["securityagent:CreateThreat"];
	/** IAM actions required for the CreateThreatModel API call. */
	static readonly CREATE_THREAT_MODEL: string[] = [
		"securityagent:CreateThreatModel",
	];
	/** IAM actions required for the DeleteAgentSpace API call. */
	static readonly DELETE_AGENT_SPACE: string[] = [
		"securityagent:DeleteAgentSpace",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"securityagent:DeleteApplication",
	];
	/** IAM actions required for the DeleteArtifact API call. */
	static readonly DELETE_ARTIFACT: string[] = ["securityagent:DeleteArtifact"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DELETE_INTEGRATION: string[] = [
		"securityagent:DeleteIntegration",
	];
	/** IAM actions required for the DeleteMembership API call. */
	static readonly DELETE_MEMBERSHIP: string[] = [
		"securityagent:DeleteMembership",
	];
	/** IAM actions required for the DeletePrivateConnection API call. */
	static readonly DELETE_PRIVATE_CONNECTION: string[] = [
		"securityagent:DeletePrivateConnection",
	];
	/** IAM actions required for the DeleteSecurityRequirementPack API call. */
	static readonly DELETE_SECURITY_REQUIREMENT_PACK: string[] = [
		"securityagent:DeleteSecurityRequirementPack",
	];
	/** IAM actions required for the DeleteTargetDomain API call. */
	static readonly DELETE_TARGET_DOMAIN: string[] = [
		"securityagent:DeleteTargetDomain",
	];
	/** IAM actions required for the DescribePrivateConnection API call. */
	static readonly DESCRIBE_PRIVATE_CONNECTION: string[] = [
		"securityagent:DescribePrivateConnection",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["securityagent:GetApplication"];
	/** IAM actions required for the GetArtifact API call. */
	static readonly GET_ARTIFACT: string[] = ["securityagent:GetArtifact"];
	/** IAM actions required for the GetIntegration API call. */
	static readonly GET_INTEGRATION: string[] = ["securityagent:GetIntegration"];
	/** IAM actions required for the GetSecurityRequirementPack API call. */
	static readonly GET_SECURITY_REQUIREMENT_PACK: string[] = [
		"securityagent:GetSecurityRequirementPack",
	];
	/** IAM actions required for the ImportSecurityRequirements API call. */
	static readonly IMPORT_SECURITY_REQUIREMENTS: string[] = [
		"securityagent:ImportSecurityRequirements",
	];
	/** IAM actions required for the InitiateProviderRegistration API call. */
	static readonly INITIATE_PROVIDER_REGISTRATION: string[] = [
		"securityagent:InitiateProviderRegistration",
	];
	/** IAM actions required for the ListAgentSpaces API call. */
	static readonly LIST_AGENT_SPACES: string[] = [
		"securityagent:ListAgentSpaces",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"securityagent:ListApplications",
	];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly LIST_ARTIFACTS: string[] = ["securityagent:ListArtifacts"];
	/** IAM actions required for the ListCodeReviewJobTasks API call. */
	static readonly LIST_CODE_REVIEW_JOB_TASKS: string[] = [
		"securityagent:ListCodeReviewJobTasks",
	];
	/** IAM actions required for the ListCodeReviewJobsForCodeReview API call. */
	static readonly LIST_CODE_REVIEW_JOBS_FOR_CODE_REVIEW: string[] = [
		"securityagent:ListCodeReviewJobsForCodeReview",
	];
	/** IAM actions required for the ListCodeReviews API call. */
	static readonly LIST_CODE_REVIEWS: string[] = [
		"securityagent:ListCodeReviews",
	];
	/** IAM actions required for the ListDiscoveredEndpoints API call. */
	static readonly LIST_DISCOVERED_ENDPOINTS: string[] = [
		"securityagent:ListDiscoveredEndpoints",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly LIST_FINDINGS: string[] = ["securityagent:ListFindings"];
	/** IAM actions required for the ListIntegratedResources API call. */
	static readonly LIST_INTEGRATED_RESOURCES: string[] = [
		"securityagent:ListIntegratedResources",
	];
	/** IAM actions required for the ListIntegrations API call. */
	static readonly LIST_INTEGRATIONS: string[] = [
		"securityagent:ListIntegrations",
	];
	/** IAM actions required for the ListMemberships API call. */
	static readonly LIST_MEMBERSHIPS: string[] = [
		"securityagent:ListMemberships",
	];
	/** IAM actions required for the ListPentestJobTasks API call. */
	static readonly LIST_PENTEST_JOB_TASKS: string[] = [
		"securityagent:ListPentestJobTasks",
	];
	/** IAM actions required for the ListPentestJobsForPentest API call. */
	static readonly LIST_PENTEST_JOBS_FOR_PENTEST: string[] = [
		"securityagent:ListPentestJobsForPentest",
	];
	/** IAM actions required for the ListPentests API call. */
	static readonly LIST_PENTESTS: string[] = ["securityagent:ListPentests"];
	/** IAM actions required for the ListPrivateConnections API call. */
	static readonly LIST_PRIVATE_CONNECTIONS: string[] = [
		"securityagent:ListPrivateConnections",
	];
	/** IAM actions required for the ListSecurityRequirementPacks API call. */
	static readonly LIST_SECURITY_REQUIREMENT_PACKS: string[] = [
		"securityagent:ListSecurityRequirementPacks",
	];
	/** IAM actions required for the ListSecurityRequirements API call. */
	static readonly LIST_SECURITY_REQUIREMENTS: string[] = [
		"securityagent:ListSecurityRequirements",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"securityagent:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetDomains API call. */
	static readonly LIST_TARGET_DOMAINS: string[] = [
		"securityagent:ListTargetDomains",
	];
	/** IAM actions required for the ListThreatModelJobTasks API call. */
	static readonly LIST_THREAT_MODEL_JOB_TASKS: string[] = [
		"securityagent:ListThreatModelJobTasks",
	];
	/** IAM actions required for the ListThreatModelJobs API call. */
	static readonly LIST_THREAT_MODEL_JOBS: string[] = [
		"securityagent:ListThreatModelJobs",
	];
	/** IAM actions required for the ListThreatModels API call. */
	static readonly LIST_THREAT_MODELS: string[] = [
		"securityagent:ListThreatModels",
	];
	/** IAM actions required for the ListThreats API call. */
	static readonly LIST_THREATS: string[] = ["securityagent:ListThreats"];
	/** IAM actions required for the StartCodeRemediation API call. */
	static readonly START_CODE_REMEDIATION: string[] = [
		"securityagent:StartCodeRemediation",
	];
	/** IAM actions required for the StartCodeReviewJob API call. */
	static readonly START_CODE_REVIEW_JOB: string[] = [
		"securityagent:StartCodeReviewJob",
	];
	/** IAM actions required for the StartPentestJob API call. */
	static readonly START_PENTEST_JOB: string[] = [
		"securityagent:StartPentestJob",
	];
	/** IAM actions required for the StartThreatModelJob API call. */
	static readonly START_THREAT_MODEL_JOB: string[] = [
		"securityagent:StartThreatModelJob",
	];
	/** IAM actions required for the StopCodeReviewJob API call. */
	static readonly STOP_CODE_REVIEW_JOB: string[] = [
		"securityagent:StopCodeReviewJob",
	];
	/** IAM actions required for the StopPentestJob API call. */
	static readonly STOP_PENTEST_JOB: string[] = ["securityagent:StopPentestJob"];
	/** IAM actions required for the StopThreatModelJob API call. */
	static readonly STOP_THREAT_MODEL_JOB: string[] = [
		"securityagent:StopThreatModelJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["securityagent:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["securityagent:UntagResource"];
	/** IAM actions required for the UpdateAgentSpace API call. */
	static readonly UPDATE_AGENT_SPACE: string[] = [
		"iam:PassRole",
		"securityagent:UpdateAgentSpace",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"iam:PassRole",
		"securityagent:UpdateApplication",
	];
	/** IAM actions required for the UpdateCodeReview API call. */
	static readonly UPDATE_CODE_REVIEW: string[] = [
		"securityagent:UpdateCodeReview",
	];
	/** IAM actions required for the UpdateFinding API call. */
	static readonly UPDATE_FINDING: string[] = ["securityagent:UpdateFinding"];
	/** IAM actions required for the UpdateIntegratedResources API call. */
	static readonly UPDATE_INTEGRATED_RESOURCES: string[] = [
		"securityagent:UpdateIntegratedResources",
	];
	/** IAM actions required for the UpdatePentest API call. */
	static readonly UPDATE_PENTEST: string[] = ["securityagent:UpdatePentest"];
	/** IAM actions required for the UpdatePrivateConnectionCertificate API call. */
	static readonly UPDATE_PRIVATE_CONNECTION_CERTIFICATE: string[] = [
		"securityagent:UpdatePrivateConnectionCertificate",
	];
	/** IAM actions required for the UpdateSecurityRequirementPack API call. */
	static readonly UPDATE_SECURITY_REQUIREMENT_PACK: string[] = [
		"securityagent:UpdateSecurityRequirementPack",
	];
	/** IAM actions required for the UpdateTargetDomain API call. */
	static readonly UPDATE_TARGET_DOMAIN: string[] = [
		"securityagent:UpdateTargetDomain",
	];
	/** IAM actions required for the UpdateThreat API call. */
	static readonly UPDATE_THREAT: string[] = ["securityagent:UpdateThreat"];
	/** IAM actions required for the UpdateThreatModel API call. */
	static readonly UPDATE_THREAT_MODEL: string[] = [
		"securityagent:UpdateThreatModel",
	];
	/** IAM actions required for the VerifyTargetDomain API call. */
	static readonly VERIFY_TARGET_DOMAIN: string[] = [
		"securityagent:VerifyTargetDomain",
	];
}

/**
 * Condition key constants and builders for securityagent.
 */
export class SecurityagentConditions {
	/** Condition keys applicable to the CreateAgentSpace action. */
	static readonly CREATE_AGENT_SPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CREATE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrivateConnection action. */
	static readonly CREATE_PRIVATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSecurityRequirementPack action. */
	static readonly CREATE_SECURITY_REQUIREMENT_PACK_CONDITION_KEYS: string[] = [
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
