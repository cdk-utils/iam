// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/assurance.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the assurance service.
 */
export class AssuranceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "assurance";

	/** [Write] assurance:AcceptInvitation */
	static readonly AcceptInvitation = "assurance:AcceptInvitation";
	/** [Write] assurance:AssignPermissionSet */
	static readonly AssignPermissionSet = "assurance:AssignPermissionSet";
	/** [Read] assurance:BatchGetComment */
	static readonly BatchGetComment = "assurance:BatchGetComment";
	/** [Read] assurance:BatchGetControl */
	static readonly BatchGetControl = "assurance:BatchGetControl";
	/** [Read] assurance:BatchGetTask */
	static readonly BatchGetTask = "assurance:BatchGetTask";
	/** [Write] assurance:Chat */
	static readonly Chat = "assurance:Chat";
	/** [Write] assurance:CreateAnnotation */
	static readonly CreateAnnotation = "assurance:CreateAnnotation";
	/** [Write] assurance:CreateComment */
	static readonly CreateComment = "assurance:CreateComment";
	/** [Write] assurance:CreateControl */
	static readonly CreateControl = "assurance:CreateControl";
	/** [Write] assurance:CreateControlGroup */
	static readonly CreateControlGroup = "assurance:CreateControlGroup";
	/** [Write] assurance:CreateEnvironment */
	static readonly CreateEnvironment = "assurance:CreateEnvironment";
	/** [Write] assurance:CreateEnvironmentConnection */
	static readonly CreateEnvironmentConnection =
		"assurance:CreateEnvironmentConnection";
	/** [Write] assurance:CreateFramework */
	static readonly CreateFramework = "assurance:CreateFramework";
	/** [Write] assurance:CreateInvitation */
	static readonly CreateInvitation = "assurance:CreateInvitation";
	/** [Write] assurance:CreatePermissionSet */
	static readonly CreatePermissionSet = "assurance:CreatePermissionSet";
	/** [Write] assurance:CreateProject */
	static readonly CreateProject = "assurance:CreateProject";
	/** [Write] assurance:CreateTask */
	static readonly CreateTask = "assurance:CreateTask";
	/** [Write] assurance:DeleteAnnotation */
	static readonly DeleteAnnotation = "assurance:DeleteAnnotation";
	/** [Write] assurance:DeleteComment */
	static readonly DeleteComment = "assurance:DeleteComment";
	/** [Write] assurance:DeleteControl */
	static readonly DeleteControl = "assurance:DeleteControl";
	/** [Write] assurance:DeleteControlGroup */
	static readonly DeleteControlGroup = "assurance:DeleteControlGroup";
	/** [Write] assurance:DeleteEnvironment */
	static readonly DeleteEnvironment = "assurance:DeleteEnvironment";
	/** [Write] assurance:DeleteEnvironmentConnection */
	static readonly DeleteEnvironmentConnection =
		"assurance:DeleteEnvironmentConnection";
	/** [Write] assurance:DeleteEvidence */
	static readonly DeleteEvidence = "assurance:DeleteEvidence";
	/** [Write] assurance:DeleteFramework */
	static readonly DeleteFramework = "assurance:DeleteFramework";
	/** [Write] assurance:DeleteInvitation */
	static readonly DeleteInvitation = "assurance:DeleteInvitation";
	/** [Write] assurance:DeletePermissionSet */
	static readonly DeletePermissionSet = "assurance:DeletePermissionSet";
	/** [Write] assurance:DeleteProject */
	static readonly DeleteProject = "assurance:DeleteProject";
	/** [Write] assurance:DeregisterOrganizationDelegatedAdmin */
	static readonly DeregisterOrganizationDelegatedAdmin =
		"assurance:DeregisterOrganizationDelegatedAdmin";
	/** [Write] assurance:DisableFramework */
	static readonly DisableFramework = "assurance:DisableFramework";
	/** [Read] assurance:DownloadEvidence */
	static readonly DownloadEvidence = "assurance:DownloadEvidence";
	/** [Write] assurance:EnableFramework */
	static readonly EnableFramework = "assurance:EnableFramework";
	/** [Read] assurance:GetAnnotation */
	static readonly actionGetAnnotation = "assurance:GetAnnotation";
	/** [Read] assurance:GetAssessment */
	static readonly actionGetAssessment = "assurance:GetAssessment";
	/** [Read] assurance:GetAssessmentReportContent */
	static readonly actionGetAssessmentReportContent =
		"assurance:GetAssessmentReportContent";
	/** [Read] assurance:GetAssessmentReportExport */
	static readonly actionGetAssessmentReportExport =
		"assurance:GetAssessmentReportExport";
	/** [Read] assurance:GetChatMessages */
	static readonly actionGetChatMessages = "assurance:GetChatMessages";
	/** [Read] assurance:GetComment */
	static readonly actionGetComment = "assurance:GetComment";
	/** [Read] assurance:GetControl */
	static readonly actionGetControl = "assurance:GetControl";
	/** [Read] assurance:GetControlGroup */
	static readonly actionGetControlGroup = "assurance:GetControlGroup";
	/** [Read] assurance:GetControlStatus */
	static readonly actionGetControlStatus = "assurance:GetControlStatus";
	/** [Read] assurance:GetEnvironment */
	static readonly actionGetEnvironment = "assurance:GetEnvironment";
	/** [Read] assurance:GetEvidence */
	static readonly actionGetEvidence = "assurance:GetEvidence";
	/** [Read] assurance:GetEvidenceContent */
	static readonly actionGetEvidenceContent = "assurance:GetEvidenceContent";
	/** [Read] assurance:GetFramework */
	static readonly actionGetFramework = "assurance:GetFramework";
	/** [Read] assurance:GetInvitation */
	static readonly actionGetInvitation = "assurance:GetInvitation";
	/** [Read] assurance:GetPermissionSet */
	static readonly actionGetPermissionSet = "assurance:GetPermissionSet";
	/** [Read] assurance:GetProject */
	static readonly actionGetProject = "assurance:GetProject";
	/** [Read] assurance:GetTask */
	static readonly actionGetTask = "assurance:GetTask";
	/** [Read] assurance:ListAssessmentAnnotations */
	static readonly ListAssessmentAnnotations =
		"assurance:ListAssessmentAnnotations";
	/** [Read] assurance:ListAssessmentJournalRecords */
	static readonly ListAssessmentJournalRecords =
		"assurance:ListAssessmentJournalRecords";
	/** [Read] assurance:ListAssessmentOutcomes */
	static readonly ListAssessmentOutcomes = "assurance:ListAssessmentOutcomes";
	/** [Read] assurance:ListAssessments */
	static readonly ListAssessments = "assurance:ListAssessments";
	/** [Read] assurance:ListChatSessions */
	static readonly ListChatSessions = "assurance:ListChatSessions";
	/** [Read] assurance:ListComments */
	static readonly ListComments = "assurance:ListComments";
	/** [Read] assurance:ListConnectionItems */
	static readonly ListConnectionItems = "assurance:ListConnectionItems";
	/** [Read] assurance:ListControlGroups */
	static readonly ListControlGroups = "assurance:ListControlGroups";
	/** [Read] assurance:ListControlResources */
	static readonly ListControlResources = "assurance:ListControlResources";
	/** [Read] assurance:ListControls */
	static readonly ListControls = "assurance:ListControls";
	/** [Read] assurance:ListDiscoveredResources */
	static readonly ListDiscoveredResources = "assurance:ListDiscoveredResources";
	/** [Read] assurance:ListEnabledFrameworks */
	static readonly ListEnabledFrameworks = "assurance:ListEnabledFrameworks";
	/** [Read] assurance:ListEnvironmentConnections */
	static readonly ListEnvironmentConnections =
		"assurance:ListEnvironmentConnections";
	/** [Read] assurance:ListEnvironments */
	static readonly ListEnvironments = "assurance:ListEnvironments";
	/** [Read] assurance:ListEvidence */
	static readonly ListEvidence = "assurance:ListEvidence";
	/** [Read] assurance:ListEvidenceAnnotations */
	static readonly ListEvidenceAnnotations = "assurance:ListEvidenceAnnotations";
	/** [Read] assurance:ListFrameworks */
	static readonly ListFrameworks = "assurance:ListFrameworks";
	/** [Read] assurance:ListInboundInvitations */
	static readonly ListInboundInvitations = "assurance:ListInboundInvitations";
	/** [Read] assurance:ListOutboundInvitations */
	static readonly ListOutboundInvitations = "assurance:ListOutboundInvitations";
	/** [Read] assurance:ListPermissionSetAssignments */
	static readonly ListPermissionSetAssignments =
		"assurance:ListPermissionSetAssignments";
	/** [Read] assurance:ListPermissionSets */
	static readonly ListPermissionSets = "assurance:ListPermissionSets";
	/** [Read] assurance:ListProjects */
	static readonly ListProjects = "assurance:ListProjects";
	/** [Read] assurance:ListResourcesForControl */
	static readonly ListResourcesForControl = "assurance:ListResourcesForControl";
	/** [Read] assurance:ListTagsForResource */
	static readonly ListTagsForResource = "assurance:ListTagsForResource";
	/** [Read] assurance:ListTaskHistory */
	static readonly ListTaskHistory = "assurance:ListTaskHistory";
	/** [Read] assurance:ListTasks */
	static readonly ListTasks = "assurance:ListTasks";
	/** [Write] assurance:PublishFramework */
	static readonly PublishFramework = "assurance:PublishFramework";
	/** [Write] assurance:PutControlStatusOverride */
	static readonly PutControlStatusOverride =
		"assurance:PutControlStatusOverride";
	/** [Write] assurance:PutEvidence */
	static readonly PutEvidence = "assurance:PutEvidence";
	/** [Write] assurance:RegisterOrganizationDelegatedAdmin */
	static readonly RegisterOrganizationDelegatedAdmin =
		"assurance:RegisterOrganizationDelegatedAdmin";
	/** [Write] assurance:RejectInvitation */
	static readonly RejectInvitation = "assurance:RejectInvitation";
	/** [Write] assurance:RevokePermissionSet */
	static readonly RevokePermissionSet = "assurance:RevokePermissionSet";
	/** [Write] assurance:StartAssessment */
	static readonly StartAssessment = "assurance:StartAssessment";
	/** [Write] assurance:StartAssessmentReportExport */
	static readonly StartAssessmentReportExport =
		"assurance:StartAssessmentReportExport";
	/** [Write] assurance:StartResourceDiscovery */
	static readonly StartResourceDiscovery = "assurance:StartResourceDiscovery";
	/** [Tagging] assurance:TagResource */
	static readonly TagResource = "assurance:TagResource";
	/** [Tagging] assurance:UntagResource */
	static readonly UntagResource = "assurance:UntagResource";
	/** [Write] assurance:UpdateAnnotation */
	static readonly UpdateAnnotation = "assurance:UpdateAnnotation";
	/** [Write] assurance:UpdateAssessment */
	static readonly UpdateAssessment = "assurance:UpdateAssessment";
	/** [Write] assurance:UpdateComment */
	static readonly UpdateComment = "assurance:UpdateComment";
	/** [Write] assurance:UpdateControl */
	static readonly UpdateControl = "assurance:UpdateControl";
	/** [Write] assurance:UpdateControlGroup */
	static readonly UpdateControlGroup = "assurance:UpdateControlGroup";
	/** [Write] assurance:UpdateEnvironment */
	static readonly UpdateEnvironment = "assurance:UpdateEnvironment";
	/** [Write] assurance:UpdateEvidence */
	static readonly UpdateEvidence = "assurance:UpdateEvidence";
	/** [Write] assurance:UpdateFramework */
	static readonly UpdateFramework = "assurance:UpdateFramework";
	/** [Write] assurance:UpdatePermissionSet */
	static readonly UpdatePermissionSet = "assurance:UpdatePermissionSet";
	/** [Write] assurance:UpdateProject */
	static readonly UpdateProject = "assurance:UpdateProject";
	/** [Write] assurance:UpdateTask */
	static readonly UpdateTask = "assurance:UpdateTask";
	/** [Write] assurance:UploadEvidence */
	static readonly UploadEvidence = "assurance:UploadEvidence";
	/** [Write] assurance:VendConnectionAccessToken */
	static readonly VendConnectionAccessToken =
		"assurance:VendConnectionAccessToken";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AssuranceActions.BatchGetComment,
		AssuranceActions.BatchGetControl,
		AssuranceActions.BatchGetTask,
		AssuranceActions.DownloadEvidence,
		AssuranceActions.actionGetAnnotation,
		AssuranceActions.actionGetAssessment,
		AssuranceActions.actionGetAssessmentReportContent,
		AssuranceActions.actionGetAssessmentReportExport,
		AssuranceActions.actionGetChatMessages,
		AssuranceActions.actionGetComment,
		AssuranceActions.actionGetControl,
		AssuranceActions.actionGetControlGroup,
		AssuranceActions.actionGetControlStatus,
		AssuranceActions.actionGetEnvironment,
		AssuranceActions.actionGetEvidence,
		AssuranceActions.actionGetEvidenceContent,
		AssuranceActions.actionGetFramework,
		AssuranceActions.actionGetInvitation,
		AssuranceActions.actionGetPermissionSet,
		AssuranceActions.actionGetProject,
		AssuranceActions.actionGetTask,
		AssuranceActions.ListAssessmentAnnotations,
		AssuranceActions.ListAssessmentJournalRecords,
		AssuranceActions.ListAssessmentOutcomes,
		AssuranceActions.ListAssessments,
		AssuranceActions.ListChatSessions,
		AssuranceActions.ListComments,
		AssuranceActions.ListConnectionItems,
		AssuranceActions.ListControlGroups,
		AssuranceActions.ListControlResources,
		AssuranceActions.ListControls,
		AssuranceActions.ListDiscoveredResources,
		AssuranceActions.ListEnabledFrameworks,
		AssuranceActions.ListEnvironmentConnections,
		AssuranceActions.ListEnvironments,
		AssuranceActions.ListEvidence,
		AssuranceActions.ListEvidenceAnnotations,
		AssuranceActions.ListFrameworks,
		AssuranceActions.ListInboundInvitations,
		AssuranceActions.ListOutboundInvitations,
		AssuranceActions.ListPermissionSetAssignments,
		AssuranceActions.ListPermissionSets,
		AssuranceActions.ListProjects,
		AssuranceActions.ListResourcesForControl,
		AssuranceActions.ListTagsForResource,
		AssuranceActions.ListTaskHistory,
		AssuranceActions.ListTasks,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AssuranceActions.AcceptInvitation,
		AssuranceActions.AssignPermissionSet,
		AssuranceActions.Chat,
		AssuranceActions.CreateAnnotation,
		AssuranceActions.CreateComment,
		AssuranceActions.CreateControl,
		AssuranceActions.CreateControlGroup,
		AssuranceActions.CreateEnvironment,
		AssuranceActions.CreateEnvironmentConnection,
		AssuranceActions.CreateFramework,
		AssuranceActions.CreateInvitation,
		AssuranceActions.CreatePermissionSet,
		AssuranceActions.CreateProject,
		AssuranceActions.CreateTask,
		AssuranceActions.DeleteAnnotation,
		AssuranceActions.DeleteComment,
		AssuranceActions.DeleteControl,
		AssuranceActions.DeleteControlGroup,
		AssuranceActions.DeleteEnvironment,
		AssuranceActions.DeleteEnvironmentConnection,
		AssuranceActions.DeleteEvidence,
		AssuranceActions.DeleteFramework,
		AssuranceActions.DeleteInvitation,
		AssuranceActions.DeletePermissionSet,
		AssuranceActions.DeleteProject,
		AssuranceActions.DeregisterOrganizationDelegatedAdmin,
		AssuranceActions.DisableFramework,
		AssuranceActions.EnableFramework,
		AssuranceActions.PublishFramework,
		AssuranceActions.PutControlStatusOverride,
		AssuranceActions.PutEvidence,
		AssuranceActions.RegisterOrganizationDelegatedAdmin,
		AssuranceActions.RejectInvitation,
		AssuranceActions.RevokePermissionSet,
		AssuranceActions.StartAssessment,
		AssuranceActions.StartAssessmentReportExport,
		AssuranceActions.StartResourceDiscovery,
		AssuranceActions.UpdateAnnotation,
		AssuranceActions.UpdateAssessment,
		AssuranceActions.UpdateComment,
		AssuranceActions.UpdateControl,
		AssuranceActions.UpdateControlGroup,
		AssuranceActions.UpdateEnvironment,
		AssuranceActions.UpdateEvidence,
		AssuranceActions.UpdateFramework,
		AssuranceActions.UpdatePermissionSet,
		AssuranceActions.UpdateProject,
		AssuranceActions.UpdateTask,
		AssuranceActions.UploadEvidence,
		AssuranceActions.VendConnectionAccessToken,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AssuranceActions.TagResource,
		AssuranceActions.UntagResource,
	];
}

/**
 * Properties for building a environment ARN.
 */
export interface AssuranceEnvironmentArnProps {
	/** The Environment component of the ARN. */
	readonly environment: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface AssuranceEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Environment component. */
	readonly environment: string;
}

const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):assurance:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environment>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for assurance resources.
 */
export class AssuranceResources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: AssuranceEnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:assurance:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environment}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): AssuranceEnvironmentArnComponents {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environment: match.groups!.environment,
		};
	}
}

/**
 * Condition key constants and builders for assurance.
 */
export class AssuranceConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
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
