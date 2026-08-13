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
	static readonly CreateDashboard = "bcm-dashboards:CreateDashboard";
	/** [Write] bcm-dashboards:CreateScheduledReport */
	static readonly CreateScheduledReport =
		"bcm-dashboards:CreateScheduledReport";
	/** [Write] bcm-dashboards:DeleteDashboard */
	static readonly DeleteDashboard = "bcm-dashboards:DeleteDashboard";
	/** [Write] bcm-dashboards:DeleteScheduledReport */
	static readonly DeleteScheduledReport =
		"bcm-dashboards:DeleteScheduledReport";
	/** [Write] bcm-dashboards:ExecuteScheduledReport */
	static readonly ExecuteScheduledReport =
		"bcm-dashboards:ExecuteScheduledReport";
	/** [Read] bcm-dashboards:GetDashboard */
	static readonly actionGetDashboard = "bcm-dashboards:GetDashboard";
	/** [Read] bcm-dashboards:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "bcm-dashboards:GetResourcePolicy";
	/** [Read] bcm-dashboards:GetScheduledReport */
	static readonly actionGetScheduledReport =
		"bcm-dashboards:GetScheduledReport";
	/** [Read] bcm-dashboards:ListDashboards */
	static readonly ListDashboards = "bcm-dashboards:ListDashboards";
	/** [List] bcm-dashboards:ListScheduledReports */
	static readonly ListScheduledReports = "bcm-dashboards:ListScheduledReports";
	/** [Read] bcm-dashboards:ListTagsForResource */
	static readonly ListTagsForResource = "bcm-dashboards:ListTagsForResource";
	/** [Tagging] bcm-dashboards:TagResource */
	static readonly TagResource = "bcm-dashboards:TagResource";
	/** [Tagging] bcm-dashboards:UntagResource */
	static readonly UntagResource = "bcm-dashboards:UntagResource";
	/** [Write] bcm-dashboards:UpdateDashboard */
	static readonly UpdateDashboard = "bcm-dashboards:UpdateDashboard";
	/** [Write] bcm-dashboards:UpdateScheduledReport */
	static readonly UpdateScheduledReport =
		"bcm-dashboards:UpdateScheduledReport";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BcmDashboardsActions.actionGetDashboard,
		BcmDashboardsActions.actionGetResourcePolicy,
		BcmDashboardsActions.actionGetScheduledReport,
		BcmDashboardsActions.ListDashboards,
		BcmDashboardsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BcmDashboardsActions.CreateDashboard,
		BcmDashboardsActions.CreateScheduledReport,
		BcmDashboardsActions.DeleteDashboard,
		BcmDashboardsActions.DeleteScheduledReport,
		BcmDashboardsActions.ExecuteScheduledReport,
		BcmDashboardsActions.UpdateDashboard,
		BcmDashboardsActions.UpdateScheduledReport,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BcmDashboardsActions.ListScheduledReports,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BcmDashboardsActions.TagResource,
		BcmDashboardsActions.UntagResource,
	];
}

/**
 * Properties for building a dashboard ARN.
 */
export interface BcmDashboardsDashboardArnProps {
	/** The DashboardName component of the ARN. */
	readonly dashboardName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dashboard ARN.
 */
export interface BcmDashboardsDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DashboardName component. */
	readonly dashboardName: string;
}

/**
 * Properties for building a scheduled-report ARN.
 */
export interface BcmDashboardsScheduledReportArnProps {
	/** The ScheduledReportName component of the ARN. */
	readonly scheduledReportName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scheduled-report ARN.
 */
export interface BcmDashboardsScheduledReportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScheduledReportName component. */
	readonly scheduledReportName: string;
}

const DashboardArnRegex =
	/^arn:(?<partition>[^:]+):bcm-dashboards::(?<account>[^:]*):dashboard\/(?<dashboardName>[^:/?]+)$/;
const ScheduledReportArnRegex =
	/^arn:(?<partition>[^:]+):bcm-dashboards::(?<account>[^:]*):scheduled-report\/(?<scheduledReportName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bcm-dashboards resources.
 */
export class BcmDashboardsResources {
	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: BcmDashboardsDashboardArnProps): string {
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
	static parseDashboardArn(arn: string): BcmDashboardsDashboardArnComponents {
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
	static scheduledReport(props: BcmDashboardsScheduledReportArnProps): string {
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
	static parseScheduledReportArn(
		arn: string,
	): BcmDashboardsScheduledReportArnComponents {
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
	static readonly CreateDashboard: string[] = [
		"bcm-dashboards:CreateDashboard",
		"bcm-dashboards:TagResource",
	];
	/** IAM actions required for the CreateScheduledReport API call. */
	static readonly CreateScheduledReport: string[] = [
		"bcm-dashboards:CreateScheduledReport",
		"iam:PassRole",
		"bcm-dashboards:TagResource",
	];
	/** IAM actions required for the DeleteDashboard API call. */
	static readonly DeleteDashboard: string[] = [
		"bcm-dashboards:DeleteDashboard",
	];
	/** IAM actions required for the DeleteScheduledReport API call. */
	static readonly DeleteScheduledReport: string[] = [
		"bcm-dashboards:DeleteScheduledReport",
	];
	/** IAM actions required for the ExecuteScheduledReport API call. */
	static readonly ExecuteScheduledReport: string[] = [
		"bcm-dashboards:ExecuteScheduledReport",
	];
	/** IAM actions required for the GetDashboard API call. */
	static readonly opGetDashboard: string[] = ["bcm-dashboards:GetDashboard"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"bcm-dashboards:GetResourcePolicy",
	];
	/** IAM actions required for the GetScheduledReport API call. */
	static readonly opGetScheduledReport: string[] = [
		"bcm-dashboards:GetScheduledReport",
	];
	/** IAM actions required for the ListDashboards API call. */
	static readonly ListDashboards: string[] = ["bcm-dashboards:ListDashboards"];
	/** IAM actions required for the ListScheduledReports API call. */
	static readonly ListScheduledReports: string[] = [
		"bcm-dashboards:ListScheduledReports",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"bcm-dashboards:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["bcm-dashboards:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["bcm-dashboards:UntagResource"];
	/** IAM actions required for the UpdateDashboard API call. */
	static readonly UpdateDashboard: string[] = [
		"bcm-dashboards:UpdateDashboard",
	];
	/** IAM actions required for the UpdateScheduledReport API call. */
	static readonly UpdateScheduledReport: string[] = [
		"iam:PassRole",
		"bcm-dashboards:UpdateScheduledReport",
	];
}

/**
 * Condition key constants and builders for bcm-dashboards.
 */
export class BcmDashboardsConditions {
	/** Condition keys applicable to the CreateScheduledReport action. */
	static readonly CreateScheduledReportConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
