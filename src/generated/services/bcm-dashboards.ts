// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bcm-dashboards.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bcm-dashboards service.
 */
export class BcmDashboardsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bcm-dashboards";

	/** [Write] bcm-dashboards:CreateDashboard */
	static readonly CREATE_DASHBOARD = "bcm-dashboards:CreateDashboard";
	/** [Write] bcm-dashboards:CreateScheduledReport */
	static readonly CREATE_SCHEDULED_REPORT =
		"bcm-dashboards:CreateScheduledReport";
	/** [Write] bcm-dashboards:DeleteDashboard */
	static readonly DELETE_DASHBOARD = "bcm-dashboards:DeleteDashboard";
	/** [Write] bcm-dashboards:DeleteScheduledReport */
	static readonly DELETE_SCHEDULED_REPORT =
		"bcm-dashboards:DeleteScheduledReport";
	/** [Write] bcm-dashboards:ExecuteScheduledReport */
	static readonly EXECUTE_SCHEDULED_REPORT =
		"bcm-dashboards:ExecuteScheduledReport";
	/** [Read] bcm-dashboards:GetDashboard */
	static readonly GET_DASHBOARD = "bcm-dashboards:GetDashboard";
	/** [Read] bcm-dashboards:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "bcm-dashboards:GetResourcePolicy";
	/** [Read] bcm-dashboards:GetScheduledReport */
	static readonly GET_SCHEDULED_REPORT = "bcm-dashboards:GetScheduledReport";
	/** [Read] bcm-dashboards:ListDashboards */
	static readonly LIST_DASHBOARDS = "bcm-dashboards:ListDashboards";
	/** [List] bcm-dashboards:ListScheduledReports */
	static readonly LIST_SCHEDULED_REPORTS =
		"bcm-dashboards:ListScheduledReports";
	/** [Read] bcm-dashboards:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "bcm-dashboards:ListTagsForResource";
	/** [Tagging] bcm-dashboards:TagResource */
	static readonly TAG_RESOURCE = "bcm-dashboards:TagResource";
	/** [Tagging] bcm-dashboards:UntagResource */
	static readonly UNTAG_RESOURCE = "bcm-dashboards:UntagResource";
	/** [Write] bcm-dashboards:UpdateDashboard */
	static readonly UPDATE_DASHBOARD = "bcm-dashboards:UpdateDashboard";
	/** [Write] bcm-dashboards:UpdateScheduledReport */
	static readonly UPDATE_SCHEDULED_REPORT =
		"bcm-dashboards:UpdateScheduledReport";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BcmDashboardsActions.GET_DASHBOARD,
		BcmDashboardsActions.GET_RESOURCE_POLICY,
		BcmDashboardsActions.GET_SCHEDULED_REPORT,
		BcmDashboardsActions.LIST_DASHBOARDS,
		BcmDashboardsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BcmDashboardsActions.CREATE_DASHBOARD,
		BcmDashboardsActions.CREATE_SCHEDULED_REPORT,
		BcmDashboardsActions.DELETE_DASHBOARD,
		BcmDashboardsActions.DELETE_SCHEDULED_REPORT,
		BcmDashboardsActions.EXECUTE_SCHEDULED_REPORT,
		BcmDashboardsActions.UPDATE_DASHBOARD,
		BcmDashboardsActions.UPDATE_SCHEDULED_REPORT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BcmDashboardsActions.LIST_SCHEDULED_REPORTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BcmDashboardsActions.TAG_RESOURCE,
		BcmDashboardsActions.UNTAG_RESOURCE,
	];
}

const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bcm-dashboards::(?<account>[^:]*):dashboard/(?<dashboardName>[^:/?]+)$",
);
const ScheduledReportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):bcm-dashboards::(?<account>[^:]*):scheduled-report/(?<scheduledReportName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for bcm-dashboards resources.
 */
export class BcmDashboardsResources {
	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: {
		/** The DashboardName component of the ARN. */
		readonly dashboardName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bcm-dashboards::${props.account ?? "*"}:dashboard/${props.dashboardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): {
		partition: string;
		account: string;
		dashboardName: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			dashboardName: match.groups!.dashboardName,
		};
	}

	/**
	 * Builds an ARN for the scheduled-report resource.
	 */
	static scheduledReport(props: {
		/** The ScheduledReportName component of the ARN. */
		readonly scheduledReportName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:bcm-dashboards::${props.account ?? "*"}:scheduled-report/${props.scheduledReportName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scheduled-report resource.
	 */
	static isValidScheduledReportArn(arn: string): boolean {
		return ScheduledReportArnRegex.test(arn);
	}

	/**
	 * Parses a scheduled-report ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduledReportArn(arn: string): {
		partition: string;
		account: string;
		scheduledReportName: string;
	} {
		const match = ScheduledReportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scheduled-report ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			scheduledReportName: match.groups!.scheduledReportName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for bcm-dashboards.
 */
export class BcmDashboardsOperations {
	/** IAM actions required for the CreateDashboard API call. */
	static readonly CREATE_DASHBOARD: string[] = [
		"bcm-dashboards:CreateDashboard",
		"bcm-dashboards:TagResource",
	];
	/** IAM actions required for the CreateScheduledReport API call. */
	static readonly CREATE_SCHEDULED_REPORT: string[] = [
		"bcm-dashboards:CreateScheduledReport",
		"iam:PassRole",
		"bcm-dashboards:TagResource",
	];
	/** IAM actions required for the DeleteDashboard API call. */
	static readonly DELETE_DASHBOARD: string[] = [
		"bcm-dashboards:DeleteDashboard",
	];
	/** IAM actions required for the DeleteScheduledReport API call. */
	static readonly DELETE_SCHEDULED_REPORT: string[] = [
		"bcm-dashboards:DeleteScheduledReport",
	];
	/** IAM actions required for the ExecuteScheduledReport API call. */
	static readonly EXECUTE_SCHEDULED_REPORT: string[] = [
		"bcm-dashboards:ExecuteScheduledReport",
	];
	/** IAM actions required for the GetDashboard API call. */
	static readonly GET_DASHBOARD: string[] = ["bcm-dashboards:GetDashboard"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"bcm-dashboards:GetResourcePolicy",
	];
	/** IAM actions required for the GetScheduledReport API call. */
	static readonly GET_SCHEDULED_REPORT: string[] = [
		"bcm-dashboards:GetScheduledReport",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly LIST_DASHBOARDS: string[] = ["bcm-dashboards:ListDashboards"];
	/** IAM actions required for the ListScheduledReports API call. */
	static readonly LIST_SCHEDULED_REPORTS: string[] = [
		"bcm-dashboards:ListScheduledReports",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"bcm-dashboards:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["bcm-dashboards:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["bcm-dashboards:UntagResource"];
	/** IAM actions required for the UpdateDashboard API call. */
	static readonly UPDATE_DASHBOARD: string[] = [
		"bcm-dashboards:UpdateDashboard",
	];
	/** IAM actions required for the UpdateScheduledReport API call. */
	static readonly UPDATE_SCHEDULED_REPORT: string[] = [
		"iam:PassRole",
		"bcm-dashboards:UpdateScheduledReport",
	];
}

/**
 * Condition key constants and builders for bcm-dashboards.
 */
export class BcmDashboardsConditions {
	/** Condition keys applicable to the CreateScheduledReport action. */
	static readonly CREATE_SCHEDULED_REPORT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
