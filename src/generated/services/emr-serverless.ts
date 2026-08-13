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
	static readonly ACCESS_INTERACTIVE_ENDPOINTS =
		"emr-serverless:AccessInteractiveEndpoints";
	/** [Write] emr-serverless:AccessLivyEndpoints */
	static readonly ACCESS_LIVY_ENDPOINTS = "emr-serverless:AccessLivyEndpoints";
	/** [Write] emr-serverless:AccessSystemProfileLogs */
	static readonly ACCESS_SYSTEM_PROFILE_LOGS =
		"emr-serverless:AccessSystemProfileLogs";
	/** [Write] emr-serverless:CancelJobRun */
	static readonly CANCEL_JOB_RUN = "emr-serverless:CancelJobRun";
	/** [Write] emr-serverless:CreateApplication */
	static readonly CREATE_APPLICATION = "emr-serverless:CreateApplication";
	/** [Write] emr-serverless:DeleteApplication */
	static readonly DELETE_APPLICATION = "emr-serverless:DeleteApplication";
	/** [Read] emr-serverless:GetApplication */
	static readonly GET_APPLICATION = "emr-serverless:GetApplication";
	/** [Read] emr-serverless:GetDashboardForJobRun */
	static readonly GET_DASHBOARD_FOR_JOB_RUN =
		"emr-serverless:GetDashboardForJobRun";
	/** [Read] emr-serverless:GetJobRun */
	static readonly GET_JOB_RUN = "emr-serverless:GetJobRun";
	/** [Read] emr-serverless:GetResourceDashboard */
	static readonly GET_RESOURCE_DASHBOARD =
		"emr-serverless:GetResourceDashboard";
	/** [Read] emr-serverless:GetSession */
	static readonly GET_SESSION = "emr-serverless:GetSession";
	/** [Read] emr-serverless:GetSessionEndpoint */
	static readonly GET_SESSION_ENDPOINT = "emr-serverless:GetSessionEndpoint";
	/** [List] emr-serverless:ListApplications */
	static readonly LIST_APPLICATIONS = "emr-serverless:ListApplications";
	/** [List] emr-serverless:ListJobRunAttempts */
	static readonly LIST_JOB_RUN_ATTEMPTS = "emr-serverless:ListJobRunAttempts";
	/** [List] emr-serverless:ListJobRuns */
	static readonly LIST_JOB_RUNS = "emr-serverless:ListJobRuns";
	/** [List] emr-serverless:ListSessions */
	static readonly LIST_SESSIONS = "emr-serverless:ListSessions";
	/** [Read] emr-serverless:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "emr-serverless:ListTagsForResource";
	/** [Write] emr-serverless:StartApplication */
	static readonly START_APPLICATION = "emr-serverless:StartApplication";
	/** [Write] emr-serverless:StartJobRun */
	static readonly START_JOB_RUN = "emr-serverless:StartJobRun";
	/** [Write] emr-serverless:StartSession */
	static readonly START_SESSION = "emr-serverless:StartSession";
	/** [Write] emr-serverless:StopApplication */
	static readonly STOP_APPLICATION = "emr-serverless:StopApplication";
	/** [Tagging] emr-serverless:TagResource */
	static readonly TAG_RESOURCE = "emr-serverless:TagResource";
	/** [Write] emr-serverless:TerminateSession */
	static readonly TERMINATE_SESSION = "emr-serverless:TerminateSession";
	/** [Tagging] emr-serverless:UntagResource */
	static readonly UNTAG_RESOURCE = "emr-serverless:UntagResource";
	/** [Write] emr-serverless:UpdateApplication */
	static readonly UPDATE_APPLICATION = "emr-serverless:UpdateApplication";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EmrServerlessActions.GET_APPLICATION,
		EmrServerlessActions.GET_DASHBOARD_FOR_JOB_RUN,
		EmrServerlessActions.GET_JOB_RUN,
		EmrServerlessActions.GET_RESOURCE_DASHBOARD,
		EmrServerlessActions.GET_SESSION,
		EmrServerlessActions.GET_SESSION_ENDPOINT,
		EmrServerlessActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EmrServerlessActions.ACCESS_INTERACTIVE_ENDPOINTS,
		EmrServerlessActions.ACCESS_LIVY_ENDPOINTS,
		EmrServerlessActions.ACCESS_SYSTEM_PROFILE_LOGS,
		EmrServerlessActions.CANCEL_JOB_RUN,
		EmrServerlessActions.CREATE_APPLICATION,
		EmrServerlessActions.DELETE_APPLICATION,
		EmrServerlessActions.START_APPLICATION,
		EmrServerlessActions.START_JOB_RUN,
		EmrServerlessActions.START_SESSION,
		EmrServerlessActions.STOP_APPLICATION,
		EmrServerlessActions.TERMINATE_SESSION,
		EmrServerlessActions.UPDATE_APPLICATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		EmrServerlessActions.LIST_APPLICATIONS,
		EmrServerlessActions.LIST_JOB_RUN_ATTEMPTS,
		EmrServerlessActions.LIST_JOB_RUNS,
		EmrServerlessActions.LIST_SESSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EmrServerlessActions.TAG_RESOURCE,
		EmrServerlessActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-serverless:(?<region>[^:]*):(?<account>[^:]*):/applications/(?<applicationId>[^:/?]+)$",
);
const JobRunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-serverless:(?<region>[^:]*):(?<account>[^:]*):/applications/(?<applicationId>[^:/?]+)/jobruns/(?<jobRunId>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-serverless:(?<region>[^:]*):(?<account>[^:]*):/applications/(?<applicationId>[^:/?]+)/sessions/(?<sessionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for emr-serverless resources.
 */
export class EmrServerlessResources {
	/**
	 * Builds an ARN for the application resource.
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static jobRun(props: {
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
	}): string {
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
	static parseJobRunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		jobRunId: string;
	} {
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
	static session(props: {
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
	}): string {
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
	static parseSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		sessionId: string;
	} {
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
	static readonly CANCEL_JOB_RUN: string[] = ["emr-serverless:CancelJobRun"];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"emr-serverless:CreateApplication",
		"emr-serverless:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"emr-serverless:DeleteApplication",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["emr-serverless:GetApplication"];
	/** IAM actions required for the GetDashboardForJobRun API call. */
	static readonly GET_DASHBOARD_FOR_JOB_RUN: string[] = [
		"emr-serverless:AccessSystemProfileLogs",
		"emr-serverless:GetDashboardForJobRun",
		"glue:GetDatabases",
		"glue:SearchTables",
	];
	/** IAM actions required for the GetJobRun API call. */
	static readonly GET_JOB_RUN: string[] = ["emr-serverless:GetJobRun"];
	/** IAM actions required for the GetResourceDashboard API call. */
	static readonly GET_RESOURCE_DASHBOARD: string[] = [
		"emr-serverless:GetResourceDashboard",
	];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["emr-serverless:GetSession"];
	/** IAM actions required for the GetSessionEndpoint API call. */
	static readonly GET_SESSION_ENDPOINT: string[] = [
		"emr-serverless:GetSessionEndpoint",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"emr-serverless:ListApplications",
	];
	/** IAM actions required for the ListJobRunAttempts API call. */
	static readonly LIST_JOB_RUN_ATTEMPTS: string[] = [
		"emr-serverless:ListJobRunAttempts",
	];
	/** IAM actions required for the ListJobRuns API call. */
	static readonly LIST_JOB_RUNS: string[] = ["emr-serverless:ListJobRuns"];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["emr-serverless:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"emr-serverless:ListTagsForResource",
	];
	/** IAM actions required for the StartApplication API call. */
	static readonly START_APPLICATION: string[] = [
		"emr-serverless:StartApplication",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly START_JOB_RUN: string[] = [
		"iam:PassRole",
		"emr-serverless:StartJobRun",
		"emr-serverless:TagResource",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly START_SESSION: string[] = [
		"iam:PassRole",
		"emr-serverless:StartSession",
		"emr-serverless:TagResource",
	];
	/** IAM actions required for the StopApplication API call. */
	static readonly STOP_APPLICATION: string[] = [
		"emr-serverless:StopApplication",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["emr-serverless:TagResource"];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TERMINATE_SESSION: string[] = [
		"emr-serverless:TerminateSession",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["emr-serverless:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"emr-serverless:UpdateApplication",
	];
}

/**
 * Condition key constants and builders for emr-serverless.
 */
export class EmrServerlessConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartJobRun action. */
	static readonly START_JOB_RUN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly START_SESSION_CONDITION_KEYS: string[] = [
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
