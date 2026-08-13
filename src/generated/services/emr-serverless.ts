// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/emr-serverless.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the emr-serverless service.
 */
export class EmrServerlessActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "emr-serverless";

	/** [Write] emr-serverless:AccessInteractiveEndpoints */
	static readonly AccessInteractiveEndpoints =
		"emr-serverless:AccessInteractiveEndpoints";
	/** [Write] emr-serverless:AccessLivyEndpoints */
	static readonly AccessLivyEndpoints = "emr-serverless:AccessLivyEndpoints";
	/** [Write] emr-serverless:AccessSystemProfileLogs */
	static readonly AccessSystemProfileLogs =
		"emr-serverless:AccessSystemProfileLogs";
	/** [Write] emr-serverless:CancelJobRun */
	static readonly CancelJobRun = "emr-serverless:CancelJobRun";
	/** [Write] emr-serverless:CreateApplication */
	static readonly CreateApplication = "emr-serverless:CreateApplication";
	/** [Write] emr-serverless:DeleteApplication */
	static readonly DeleteApplication = "emr-serverless:DeleteApplication";
	/** [Read] emr-serverless:GetApplication */
	static readonly actionGetApplication = "emr-serverless:GetApplication";
	/** [Read] emr-serverless:GetDashboardForJobRun */
	static readonly actionGetDashboardForJobRun =
		"emr-serverless:GetDashboardForJobRun";
	/** [Read] emr-serverless:GetJobRun */
	static readonly actionGetJobRun = "emr-serverless:GetJobRun";
	/** [Read] emr-serverless:GetResourceDashboard */
	static readonly actionGetResourceDashboard =
		"emr-serverless:GetResourceDashboard";
	/** [Read] emr-serverless:GetSession */
	static readonly actionGetSession = "emr-serverless:GetSession";
	/** [Read] emr-serverless:GetSessionEndpoint */
	static readonly actionGetSessionEndpoint =
		"emr-serverless:GetSessionEndpoint";
	/** [List] emr-serverless:ListApplications */
	static readonly ListApplications = "emr-serverless:ListApplications";
	/** [List] emr-serverless:ListJobRunAttempts */
	static readonly ListJobRunAttempts = "emr-serverless:ListJobRunAttempts";
	/** [List] emr-serverless:ListJobRuns */
	static readonly ListJobRuns = "emr-serverless:ListJobRuns";
	/** [List] emr-serverless:ListSessions */
	static readonly ListSessions = "emr-serverless:ListSessions";
	/** [Read] emr-serverless:ListTagsForResource */
	static readonly ListTagsForResource = "emr-serverless:ListTagsForResource";
	/** [Write] emr-serverless:StartApplication */
	static readonly StartApplication = "emr-serverless:StartApplication";
	/** [Write] emr-serverless:StartJobRun */
	static readonly StartJobRun = "emr-serverless:StartJobRun";
	/** [Write] emr-serverless:StartSession */
	static readonly StartSession = "emr-serverless:StartSession";
	/** [Write] emr-serverless:StopApplication */
	static readonly StopApplication = "emr-serverless:StopApplication";
	/** [Tagging] emr-serverless:TagResource */
	static readonly TagResource = "emr-serverless:TagResource";
	/** [Write] emr-serverless:TerminateSession */
	static readonly TerminateSession = "emr-serverless:TerminateSession";
	/** [Tagging] emr-serverless:UntagResource */
	static readonly UntagResource = "emr-serverless:UntagResource";
	/** [Write] emr-serverless:UpdateApplication */
	static readonly UpdateApplication = "emr-serverless:UpdateApplication";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EmrServerlessActions.actionGetApplication,
		EmrServerlessActions.actionGetDashboardForJobRun,
		EmrServerlessActions.actionGetJobRun,
		EmrServerlessActions.actionGetResourceDashboard,
		EmrServerlessActions.actionGetSession,
		EmrServerlessActions.actionGetSessionEndpoint,
		EmrServerlessActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EmrServerlessActions.AccessInteractiveEndpoints,
		EmrServerlessActions.AccessLivyEndpoints,
		EmrServerlessActions.AccessSystemProfileLogs,
		EmrServerlessActions.CancelJobRun,
		EmrServerlessActions.CreateApplication,
		EmrServerlessActions.DeleteApplication,
		EmrServerlessActions.StartApplication,
		EmrServerlessActions.StartJobRun,
		EmrServerlessActions.StartSession,
		EmrServerlessActions.StopApplication,
		EmrServerlessActions.TerminateSession,
		EmrServerlessActions.UpdateApplication,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EmrServerlessActions.ListApplications,
		EmrServerlessActions.ListJobRunAttempts,
		EmrServerlessActions.ListJobRuns,
		EmrServerlessActions.ListSessions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EmrServerlessActions.TagResource,
		EmrServerlessActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface EmrServerlessApplicationArnProps {
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
 * Parsed components of a application ARN.
 */
export interface EmrServerlessApplicationArnComponents {
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
 * Properties for building a jobRun ARN.
 */
export interface EmrServerlessJobRunArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The JobRunId component of the ARN. */
	readonly jobRunId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a jobRun ARN.
 */
export interface EmrServerlessJobRunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The JobRunId component. */
	readonly jobRunId: string;
}

/**
 * Properties for building a session ARN.
 */
export interface EmrServerlessSessionArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a session ARN.
 */
export interface EmrServerlessSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):emr-serverless:(?<region>[^:]*):(?<account>[^:]*):\/applications\/(?<applicationId>[^:/?]+)$/;
const JobRunArnRegex =
	/^arn:(?<partition>[^:]+):emr-serverless:(?<region>[^:]*):(?<account>[^:]*):\/applications\/(?<applicationId>[^:/?]+)\/jobruns\/(?<jobRunId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):emr-serverless:(?<region>[^:]*):(?<account>[^:]*):\/applications\/(?<applicationId>[^:/?]+)\/sessions\/(?<sessionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for emr-serverless resources.
 */
export class EmrServerlessResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: EmrServerlessApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:emr-serverless:${props.region ?? "*"}:${props.account ?? "*"}:/applications/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(
		arn: string,
	): EmrServerlessApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the jobRun resource.
	 */
	static jobRun(props: EmrServerlessJobRunArnProps): string {
		return `arn:${props.partition ?? "aws"}:emr-serverless:${props.region ?? "*"}:${props.account ?? "*"}:/applications/${props.applicationId}/jobruns/${props.jobRunId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the jobRun resource.
	 */
	static isValidJobRunArn(arn: string): boolean {
		return JobRunArnRegex.test(arn);
	}

	/**
	 * Parses a jobRun ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobRunArn(arn: string): EmrServerlessJobRunArnComponents {
		const match = JobRunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid jobRun ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			jobRunId: match.groups!.jobRunId,
		};
	}

	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: EmrServerlessSessionArnProps): string {
		return `arn:${props.partition ?? "aws"}:emr-serverless:${props.region ?? "*"}:${props.account ?? "*"}:/applications/${props.applicationId}/sessions/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): EmrServerlessSessionArnComponents {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			sessionId: match.groups!.sessionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for emr-serverless.
 */
export class EmrServerlessOperations {
	/** IAM actions required for the CancelJobRun API call. */
	static readonly CancelJobRun: string[] = ["emr-serverless:CancelJobRun"];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"emr-serverless:CreateApplication",
		"emr-serverless:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"emr-serverless:DeleteApplication",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = [
		"emr-serverless:GetApplication",
	];
	/** IAM actions required for the GetDashboardForJobRun API call. */
	static readonly opGetDashboardForJobRun: string[] = [
		"emr-serverless:AccessSystemProfileLogs",
		"emr-serverless:GetDashboardForJobRun",
		"glue:GetDatabases",
		"glue:SearchTables",
	];
	/** IAM actions required for the GetJobRun API call. */
	static readonly opGetJobRun: string[] = ["emr-serverless:GetJobRun"];
	/** IAM actions required for the GetResourceDashboard API call. */
	static readonly opGetResourceDashboard: string[] = [
		"emr-serverless:GetResourceDashboard",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["emr-serverless:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly opGetSessionEndpoint: string[] = [
		"emr-serverless:GetSessionEndpoint",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"emr-serverless:ListApplications",
	];
	/** IAM actions required for the ListJobRunAttempts API call. */
	static readonly ListJobRunAttempts: string[] = [
		"emr-serverless:ListJobRunAttempts",
	];
	/** IAM actions required for the ListJobRuns API call. */
	static readonly ListJobRuns: string[] = ["emr-serverless:ListJobRuns"];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["emr-serverless:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"emr-serverless:ListTagsForResource",
	];
	/** IAM actions required for the StartApplication API call. */
	static readonly StartApplication: string[] = [
		"emr-serverless:StartApplication",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly StartJobRun: string[] = [
		"iam:PassRole",
		"emr-serverless:StartJobRun",
		"emr-serverless:TagResource",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly StartSession: string[] = [
		"iam:PassRole",
		"emr-serverless:StartSession",
		"emr-serverless:TagResource",
	];
	/** IAM actions required for the StopApplication API call. */
	static readonly StopApplication: string[] = [
		"emr-serverless:StopApplication",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["emr-serverless:TagResource"];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TerminateSession: string[] = [
		"emr-serverless:TerminateSession",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["emr-serverless:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"emr-serverless:UpdateApplication",
	];
}

/**
 * Condition key constants and builders for emr-serverless.
 */
export class EmrServerlessConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartJobRun action. */
	static readonly StartJobRunConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly StartSessionConditionKeys: string[] = [
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
