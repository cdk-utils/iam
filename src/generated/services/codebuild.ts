// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codebuild.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codebuild service.
 */
export class CodeBuildActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codebuild";

	/** [Write] codebuild:BatchDeleteBuilds */
	static readonly BatchDeleteBuilds = "codebuild:BatchDeleteBuilds";
	/** [Read] codebuild:BatchGetBuildBatches */
	static readonly BatchGetBuildBatches = "codebuild:BatchGetBuildBatches";
	/** [Read] codebuild:BatchGetBuilds */
	static readonly BatchGetBuilds = "codebuild:BatchGetBuilds";
	/** [Read] codebuild:BatchGetCommandExecutions */
	static readonly BatchGetCommandExecutions =
		"codebuild:BatchGetCommandExecutions";
	/** [Read] codebuild:BatchGetFleets */
	static readonly BatchGetFleets = "codebuild:BatchGetFleets";
	/** [Read] codebuild:BatchGetProjects */
	static readonly BatchGetProjects = "codebuild:BatchGetProjects";
	/** [Read] codebuild:BatchGetReportGroups */
	static readonly BatchGetReportGroups = "codebuild:BatchGetReportGroups";
	/** [Read] codebuild:BatchGetReports */
	static readonly BatchGetReports = "codebuild:BatchGetReports";
	/** [Read] codebuild:BatchGetSandboxes */
	static readonly BatchGetSandboxes = "codebuild:BatchGetSandboxes";
	/** [Write] codebuild:BatchPutCodeCoverages */
	static readonly BatchPutCodeCoverages = "codebuild:BatchPutCodeCoverages";
	/** [Write] codebuild:BatchPutTestCases */
	static readonly BatchPutTestCases = "codebuild:BatchPutTestCases";
	/** [Write] codebuild:CreateFleet */
	static readonly CreateFleet = "codebuild:CreateFleet";
	/** [Write] codebuild:CreateProject */
	static readonly CreateProject = "codebuild:CreateProject";
	/** [Write] codebuild:CreateReport */
	static readonly CreateReport = "codebuild:CreateReport";
	/** [Write] codebuild:CreateReportGroup */
	static readonly CreateReportGroup = "codebuild:CreateReportGroup";
	/** [Write] codebuild:CreateWebhook */
	static readonly CreateWebhook = "codebuild:CreateWebhook";
	/** [Write] codebuild:DeleteBuildBatch */
	static readonly DeleteBuildBatch = "codebuild:DeleteBuildBatch";
	/** [Write] codebuild:DeleteFleet */
	static readonly DeleteFleet = "codebuild:DeleteFleet";
	/** [Write] codebuild:DeleteOAuthToken */
	static readonly DeleteOAuthToken = "codebuild:DeleteOAuthToken";
	/** [Write] codebuild:DeleteProject */
	static readonly DeleteProject = "codebuild:DeleteProject";
	/** [Write] codebuild:DeleteReport */
	static readonly DeleteReport = "codebuild:DeleteReport";
	/** [Write] codebuild:DeleteReportGroup */
	static readonly DeleteReportGroup = "codebuild:DeleteReportGroup";
	/** [PermissionManagement] codebuild:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "codebuild:DeleteResourcePolicy";
	/** [Write] codebuild:DeleteSourceCredentials */
	static readonly DeleteSourceCredentials = "codebuild:DeleteSourceCredentials";
	/** [Write] codebuild:DeleteWebhook */
	static readonly DeleteWebhook = "codebuild:DeleteWebhook";
	/** [Read] codebuild:DescribeCodeCoverages */
	static readonly DescribeCodeCoverages = "codebuild:DescribeCodeCoverages";
	/** [Read] codebuild:DescribeTestCases */
	static readonly DescribeTestCases = "codebuild:DescribeTestCases";
	/** [Read] codebuild:GetReportGroupTrend */
	static readonly actionGetReportGroupTrend = "codebuild:GetReportGroupTrend";
	/** [Read] codebuild:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "codebuild:GetResourcePolicy";
	/** [Write] codebuild:ImportSourceCredentials */
	static readonly ImportSourceCredentials = "codebuild:ImportSourceCredentials";
	/** [Write] codebuild:InvalidateProjectCache */
	static readonly InvalidateProjectCache = "codebuild:InvalidateProjectCache";
	/** [List] codebuild:ListBuildBatches */
	static readonly ListBuildBatches = "codebuild:ListBuildBatches";
	/** [List] codebuild:ListBuildBatchesForProject */
	static readonly ListBuildBatchesForProject =
		"codebuild:ListBuildBatchesForProject";
	/** [List] codebuild:ListBuilds */
	static readonly ListBuilds = "codebuild:ListBuilds";
	/** [List] codebuild:ListBuildsForProject */
	static readonly ListBuildsForProject = "codebuild:ListBuildsForProject";
	/** [List] codebuild:ListCommandExecutionsForSandbox */
	static readonly ListCommandExecutionsForSandbox =
		"codebuild:ListCommandExecutionsForSandbox";
	/** [List] codebuild:ListConnectedOAuthAccounts */
	static readonly ListConnectedOAuthAccounts =
		"codebuild:ListConnectedOAuthAccounts";
	/** [List] codebuild:ListCuratedEnvironmentImages */
	static readonly ListCuratedEnvironmentImages =
		"codebuild:ListCuratedEnvironmentImages";
	/** [List] codebuild:ListFleets */
	static readonly ListFleets = "codebuild:ListFleets";
	/** [List] codebuild:ListProjects */
	static readonly ListProjects = "codebuild:ListProjects";
	/** [List] codebuild:ListReportGroups */
	static readonly ListReportGroups = "codebuild:ListReportGroups";
	/** [List] codebuild:ListReports */
	static readonly ListReports = "codebuild:ListReports";
	/** [List] codebuild:ListReportsForReportGroup */
	static readonly ListReportsForReportGroup =
		"codebuild:ListReportsForReportGroup";
	/** [List] codebuild:ListRepositories */
	static readonly ListRepositories = "codebuild:ListRepositories";
	/** [List] codebuild:ListSandboxes */
	static readonly ListSandboxes = "codebuild:ListSandboxes";
	/** [List] codebuild:ListSandboxesForProject */
	static readonly ListSandboxesForProject = "codebuild:ListSandboxesForProject";
	/** [List] codebuild:ListSharedProjects */
	static readonly ListSharedProjects = "codebuild:ListSharedProjects";
	/** [List] codebuild:ListSharedReportGroups */
	static readonly ListSharedReportGroups = "codebuild:ListSharedReportGroups";
	/** [List] codebuild:ListSourceCredentials */
	static readonly ListSourceCredentials = "codebuild:ListSourceCredentials";
	/** [Write] codebuild:PersistOAuthToken */
	static readonly PersistOAuthToken = "codebuild:PersistOAuthToken";
	/** [PermissionManagement] codebuild:PutResourcePolicy */
	static readonly PutResourcePolicy = "codebuild:PutResourcePolicy";
	/** [Write] codebuild:RetryBuild */
	static readonly RetryBuild = "codebuild:RetryBuild";
	/** [Write] codebuild:RetryBuildBatch */
	static readonly RetryBuildBatch = "codebuild:RetryBuildBatch";
	/** [Write] codebuild:StartBuild */
	static readonly StartBuild = "codebuild:StartBuild";
	/** [Write] codebuild:StartBuildBatch */
	static readonly StartBuildBatch = "codebuild:StartBuildBatch";
	/** [Write] codebuild:StartCommandExecution */
	static readonly StartCommandExecution = "codebuild:StartCommandExecution";
	/** [Write] codebuild:StartSandbox */
	static readonly StartSandbox = "codebuild:StartSandbox";
	/** [Write] codebuild:StartSandboxConnection */
	static readonly StartSandboxConnection = "codebuild:StartSandboxConnection";
	/** [Write] codebuild:StopBuild */
	static readonly StopBuild = "codebuild:StopBuild";
	/** [Write] codebuild:StopBuildBatch */
	static readonly StopBuildBatch = "codebuild:StopBuildBatch";
	/** [Write] codebuild:StopSandbox */
	static readonly StopSandbox = "codebuild:StopSandbox";
	/** [Write] codebuild:UpdateFleet */
	static readonly UpdateFleet = "codebuild:UpdateFleet";
	/** [Write] codebuild:UpdateProject */
	static readonly UpdateProject = "codebuild:UpdateProject";
	/** [Write] codebuild:UpdateProjectVisibility */
	static readonly UpdateProjectVisibility = "codebuild:UpdateProjectVisibility";
	/** [Write] codebuild:UpdateReport */
	static readonly UpdateReport = "codebuild:UpdateReport";
	/** [Write] codebuild:UpdateReportGroup */
	static readonly UpdateReportGroup = "codebuild:UpdateReportGroup";
	/** [Write] codebuild:UpdateWebhook */
	static readonly UpdateWebhook = "codebuild:UpdateWebhook";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeBuildActions.BatchGetBuildBatches,
		CodeBuildActions.BatchGetBuilds,
		CodeBuildActions.BatchGetCommandExecutions,
		CodeBuildActions.BatchGetFleets,
		CodeBuildActions.BatchGetProjects,
		CodeBuildActions.BatchGetReportGroups,
		CodeBuildActions.BatchGetReports,
		CodeBuildActions.BatchGetSandboxes,
		CodeBuildActions.DescribeCodeCoverages,
		CodeBuildActions.DescribeTestCases,
		CodeBuildActions.actionGetReportGroupTrend,
		CodeBuildActions.actionGetResourcePolicy,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeBuildActions.BatchDeleteBuilds,
		CodeBuildActions.BatchPutCodeCoverages,
		CodeBuildActions.BatchPutTestCases,
		CodeBuildActions.CreateFleet,
		CodeBuildActions.CreateProject,
		CodeBuildActions.CreateReport,
		CodeBuildActions.CreateReportGroup,
		CodeBuildActions.CreateWebhook,
		CodeBuildActions.DeleteBuildBatch,
		CodeBuildActions.DeleteFleet,
		CodeBuildActions.DeleteOAuthToken,
		CodeBuildActions.DeleteProject,
		CodeBuildActions.DeleteReport,
		CodeBuildActions.DeleteReportGroup,
		CodeBuildActions.DeleteSourceCredentials,
		CodeBuildActions.DeleteWebhook,
		CodeBuildActions.ImportSourceCredentials,
		CodeBuildActions.InvalidateProjectCache,
		CodeBuildActions.PersistOAuthToken,
		CodeBuildActions.RetryBuild,
		CodeBuildActions.RetryBuildBatch,
		CodeBuildActions.StartBuild,
		CodeBuildActions.StartBuildBatch,
		CodeBuildActions.StartCommandExecution,
		CodeBuildActions.StartSandbox,
		CodeBuildActions.StartSandboxConnection,
		CodeBuildActions.StopBuild,
		CodeBuildActions.StopBuildBatch,
		CodeBuildActions.StopSandbox,
		CodeBuildActions.UpdateFleet,
		CodeBuildActions.UpdateProject,
		CodeBuildActions.UpdateProjectVisibility,
		CodeBuildActions.UpdateReport,
		CodeBuildActions.UpdateReportGroup,
		CodeBuildActions.UpdateWebhook,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeBuildActions.ListBuildBatches,
		CodeBuildActions.ListBuildBatchesForProject,
		CodeBuildActions.ListBuilds,
		CodeBuildActions.ListBuildsForProject,
		CodeBuildActions.ListCommandExecutionsForSandbox,
		CodeBuildActions.ListConnectedOAuthAccounts,
		CodeBuildActions.ListCuratedEnvironmentImages,
		CodeBuildActions.ListFleets,
		CodeBuildActions.ListProjects,
		CodeBuildActions.ListReportGroups,
		CodeBuildActions.ListReports,
		CodeBuildActions.ListReportsForReportGroup,
		CodeBuildActions.ListRepositories,
		CodeBuildActions.ListSandboxes,
		CodeBuildActions.ListSandboxesForProject,
		CodeBuildActions.ListSharedProjects,
		CodeBuildActions.ListSharedReportGroups,
		CodeBuildActions.ListSourceCredentials,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CodeBuildActions.DeleteResourcePolicy,
		CodeBuildActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a build ARN.
 */
export interface CodeBuildBuildArnProps {
	/** The BuildId component of the ARN. */
	readonly buildId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a build ARN.
 */
export interface CodeBuildBuildArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BuildId component. */
	readonly buildId: string;
}

/**
 * Properties for building a build-batch ARN.
 */
export interface CodeBuildBuildBatchArnProps {
	/** The BuildBatchId component of the ARN. */
	readonly buildBatchId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a build-batch ARN.
 */
export interface CodeBuildBuildBatchArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BuildBatchId component. */
	readonly buildBatchId: string;
}

/**
 * Properties for building a fleet ARN.
 */
export interface CodeBuildFleetArnProps {
	/** The FleetName component of the ARN. */
	readonly fleetName: string;
	/** The FleetId component of the ARN. */
	readonly fleetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fleet ARN.
 */
export interface CodeBuildFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetName component. */
	readonly fleetName: string;
	/** The FleetId component. */
	readonly fleetId: string;
}

/**
 * Properties for building a project ARN.
 */
export interface CodeBuildProjectArnProps {
	/** The ProjectName component of the ARN. */
	readonly projectName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a project ARN.
 */
export interface CodeBuildProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
}

/**
 * Properties for building a report ARN.
 */
export interface CodeBuildReportArnProps {
	/** The ReportGroupName component of the ARN. */
	readonly reportGroupName: string;
	/** The ReportId component of the ARN. */
	readonly reportId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a report ARN.
 */
export interface CodeBuildReportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReportGroupName component. */
	readonly reportGroupName: string;
	/** The ReportId component. */
	readonly reportId: string;
}

/**
 * Properties for building a report-group ARN.
 */
export interface CodeBuildReportGroupArnProps {
	/** The ReportGroupName component of the ARN. */
	readonly reportGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a report-group ARN.
 */
export interface CodeBuildReportGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReportGroupName component. */
	readonly reportGroupName: string;
}

/**
 * Properties for building a sandbox ARN.
 */
export interface CodeBuildSandboxArnProps {
	/** The SandboxId component of the ARN. */
	readonly sandboxId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a sandbox ARN.
 */
export interface CodeBuildSandboxArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SandboxId component. */
	readonly sandboxId: string;
}

const BuildArnRegex =
	/^arn:(?<partition>[^:]+):codebuild:(?<region>[^:]*):(?<account>[^:]*):build\/(?<buildId>[^:/?]+)$/;
const BuildBatchArnRegex =
	/^arn:(?<partition>[^:]+):codebuild:(?<region>[^:]*):(?<account>[^:]*):build-batch\/(?<buildBatchId>[^:/?]+)$/;
const FleetArnRegex =
	/^arn:(?<partition>[^:]+):codebuild:(?<region>[^:]*):(?<account>[^:]*):fleet\/(?<fleetName>[^:/?]+):(?<fleetId>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):codebuild:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)$/;
const ReportArnRegex =
	/^arn:(?<partition>[^:]+):codebuild:(?<region>[^:]*):(?<account>[^:]*):report\/(?<reportGroupName>[^:/?]+):(?<reportId>[^:/?]+)$/;
const ReportGroupArnRegex =
	/^arn:(?<partition>[^:]+):codebuild:(?<region>[^:]*):(?<account>[^:]*):report-group\/(?<reportGroupName>[^:/?]+)$/;
const SandboxArnRegex =
	/^arn:(?<partition>[^:]+):codebuild:(?<region>[^:]*):(?<account>[^:]*):sandbox\/(?<sandboxId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codebuild resources.
 */
export class CodeBuildResources {
	/**
	 * Builds an ARN for the build resource.
	 */
	static buildResource(props: CodeBuildBuildArnProps): string {
		return `arn:${props.partition ?? "aws"}:codebuild:${props.region ?? "*"}:${props.account ?? "*"}:build/${props.buildId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the build resource.
	 */
	static isValidBuildArn(arn: string): boolean {
		return BuildArnRegex.test(arn);
	}

	/**
	 * Parses a build ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBuildArn(arn: string): CodeBuildBuildArnComponents {
		const match = BuildArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid build ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			buildId: match.groups!.buildId,
		};
	}

	/**
	 * Builds an ARN for the build-batch resource.
	 */
	static buildBatch(props: CodeBuildBuildBatchArnProps): string {
		return `arn:${props.partition ?? "aws"}:codebuild:${props.region ?? "*"}:${props.account ?? "*"}:build-batch/${props.buildBatchId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the build-batch resource.
	 */
	static isValidBuildBatchArn(arn: string): boolean {
		return BuildBatchArnRegex.test(arn);
	}

	/**
	 * Parses a build-batch ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBuildBatchArn(arn: string): CodeBuildBuildBatchArnComponents {
		const match = BuildBatchArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid build-batch ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			buildBatchId: match.groups!.buildBatchId,
		};
	}

	/**
	 * Builds an ARN for the fleet resource.
	 */
	static fleet(props: CodeBuildFleetArnProps): string {
		return `arn:${props.partition ?? "aws"}:codebuild:${props.region ?? "*"}:${props.account ?? "*"}:fleet/${props.fleetName}:${props.fleetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fleet resource.
	 */
	static isValidFleetArn(arn: string): boolean {
		return FleetArnRegex.test(arn);
	}

	/**
	 * Parses a fleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFleetArn(arn: string): CodeBuildFleetArnComponents {
		const match = FleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fleetName: match.groups!.fleetName,
			fleetId: match.groups!.fleetId,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: CodeBuildProjectArnProps): string {
		return `arn:${props.partition ?? "aws"}:codebuild:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): CodeBuildProjectArnComponents {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
		};
	}

	/**
	 * Builds an ARN for the report resource.
	 */
	static report(props: CodeBuildReportArnProps): string {
		return `arn:${props.partition ?? "aws"}:codebuild:${props.region ?? "*"}:${props.account ?? "*"}:report/${props.reportGroupName}:${props.reportId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the report resource.
	 */
	static isValidReportArn(arn: string): boolean {
		return ReportArnRegex.test(arn);
	}

	/**
	 * Parses a report ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReportArn(arn: string): CodeBuildReportArnComponents {
		const match = ReportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid report ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reportGroupName: match.groups!.reportGroupName,
			reportId: match.groups!.reportId,
		};
	}

	/**
	 * Builds an ARN for the report-group resource.
	 */
	static reportGroup(props: CodeBuildReportGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:codebuild:${props.region ?? "*"}:${props.account ?? "*"}:report-group/${props.reportGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the report-group resource.
	 */
	static isValidReportGroupArn(arn: string): boolean {
		return ReportGroupArnRegex.test(arn);
	}

	/**
	 * Parses a report-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReportGroupArn(arn: string): CodeBuildReportGroupArnComponents {
		const match = ReportGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid report-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reportGroupName: match.groups!.reportGroupName,
		};
	}

	/**
	 * Builds an ARN for the sandbox resource.
	 */
	static sandbox(props: CodeBuildSandboxArnProps): string {
		return `arn:${props.partition ?? "aws"}:codebuild:${props.region ?? "*"}:${props.account ?? "*"}:sandbox/${props.sandboxId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sandbox resource.
	 */
	static isValidSandboxArn(arn: string): boolean {
		return SandboxArnRegex.test(arn);
	}

	/**
	 * Parses a sandbox ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSandboxArn(arn: string): CodeBuildSandboxArnComponents {
		const match = SandboxArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sandbox ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sandboxId: match.groups!.sandboxId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codebuild.
 */
export class CodeBuildOperations {
	/** IAM actions required for the BatchDeleteBuilds API call. */
	static readonly BatchDeleteBuilds: string[] = ["codebuild:BatchDeleteBuilds"];
	/** IAM actions required for the BatchGetBuildBatches API call. */
	static readonly BatchGetBuildBatches: string[] = [
		"codebuild:BatchGetBuildBatches",
	];
	/** IAM actions required for the BatchGetBuilds API call. */
	static readonly BatchGetBuilds: string[] = ["codebuild:BatchGetBuilds"];
	/** IAM actions required for the BatchGetCommandExecutions API call. */
	static readonly BatchGetCommandExecutions: string[] = [
		"codebuild:BatchGetCommandExecutions",
	];
	/** IAM actions required for the BatchGetFleets API call. */
	static readonly BatchGetFleets: string[] = ["codebuild:BatchGetFleets"];
	/** IAM actions required for the BatchGetProjects API call. */
	static readonly BatchGetProjects: string[] = ["codebuild:BatchGetProjects"];
	/** IAM actions required for the BatchGetReportGroups API call. */
	static readonly BatchGetReportGroups: string[] = [
		"codebuild:BatchGetReportGroups",
	];
	/** IAM actions required for the BatchGetReports API call. */
	static readonly BatchGetReports: string[] = ["codebuild:BatchGetReports"];
	/** IAM actions required for the BatchGetSandboxes API call. */
	static readonly BatchGetSandboxes: string[] = ["codebuild:BatchGetSandboxes"];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CreateFleet: string[] = [
		"codebuild:CreateFleet",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [
		"codebuild:CreateProject",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateReportGroup API call. */
	static readonly CreateReportGroup: string[] = ["codebuild:CreateReportGroup"];
	/** IAM actions required for the CreateWebhook API call. */
	static readonly CreateWebhook: string[] = ["codebuild:CreateWebhook"];
	/** IAM actions required for the DeleteBuildBatch API call. */
	static readonly DeleteBuildBatch: string[] = ["codebuild:DeleteBuildBatch"];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DeleteFleet: string[] = ["codebuild:DeleteFleet"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = ["codebuild:DeleteProject"];
	/** IAM actions required for the DeleteReport API call. */
	static readonly DeleteReport: string[] = ["codebuild:DeleteReport"];
	/** IAM actions required for the DeleteReportGroup API call. */
	static readonly DeleteReportGroup: string[] = ["codebuild:DeleteReportGroup"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"codebuild:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteSourceCredentials API call. */
	static readonly DeleteSourceCredentials: string[] = [
		"codebuild:DeleteSourceCredentials",
	];
	/** IAM actions required for the DeleteWebhook API call. */
	static readonly DeleteWebhook: string[] = ["codebuild:DeleteWebhook"];
	/** IAM actions required for the DescribeCodeCoverages API call. */
	static readonly DescribeCodeCoverages: string[] = [
		"codebuild:DescribeCodeCoverages",
	];
	/** IAM actions required for the DescribeTestCases API call. */
	static readonly DescribeTestCases: string[] = ["codebuild:DescribeTestCases"];
	/** IAM actions required for the GetReportGroupTrend API call. */
	static readonly opGetReportGroupTrend: string[] = [
		"codebuild:GetReportGroupTrend",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"codebuild:GetResourcePolicy",
	];
	/** IAM actions required for the ImportSourceCredentials API call. */
	static readonly ImportSourceCredentials: string[] = [
		"codebuild:ImportSourceCredentials",
	];
	/** IAM actions required for the InvalidateProjectCache API call. */
	static readonly InvalidateProjectCache: string[] = [
		"codebuild:InvalidateProjectCache",
	];
	/** IAM actions required for the ListBuildBatches API call. */
	static readonly ListBuildBatches: string[] = ["codebuild:ListBuildBatches"];
	/** IAM actions required for the ListBuildBatchesForProject API call. */
	static readonly ListBuildBatchesForProject: string[] = [
		"codebuild:ListBuildBatchesForProject",
	];
	/** IAM actions required for the ListBuilds API call. */
	static readonly ListBuilds: string[] = ["codebuild:ListBuilds"];
	/** IAM actions required for the ListBuildsForProject API call. */
	static readonly ListBuildsForProject: string[] = [
		"codebuild:ListBuildsForProject",
	];
	/** IAM actions required for the ListCommandExecutionsForSandbox API call. */
	static readonly ListCommandExecutionsForSandbox: string[] = [
		"codebuild:ListCommandExecutionsForSandbox",
	];
	/** IAM actions required for the ListCuratedEnvironmentImages API call. */
	static readonly ListCuratedEnvironmentImages: string[] = [
		"codebuild:ListCuratedEnvironmentImages",
	];
	/** IAM actions required for the ListFleets API call. */
	static readonly ListFleets: string[] = ["codebuild:ListFleets"];
	/** IAM actions required for the ListProjects API call. */
	static readonly ListProjects: string[] = ["codebuild:ListProjects"];
	/** IAM actions required for the ListReportGroups API call. */
	static readonly ListReportGroups: string[] = ["codebuild:ListReportGroups"];
	/** IAM actions required for the ListReports API call. */
	static readonly ListReports: string[] = ["codebuild:ListReports"];
	/** IAM actions required for the ListReportsForReportGroup API call. */
	static readonly ListReportsForReportGroup: string[] = [
		"codebuild:ListReportsForReportGroup",
	];
	/** IAM actions required for the ListSandboxes API call. */
	static readonly ListSandboxes: string[] = ["codebuild:ListSandboxes"];
	/** IAM actions required for the ListSandboxesForProject API call. */
	static readonly ListSandboxesForProject: string[] = [
		"codebuild:ListSandboxesForProject",
	];
	/** IAM actions required for the ListSharedProjects API call. */
	static readonly ListSharedProjects: string[] = [
		"codebuild:ListSharedProjects",
	];
	/** IAM actions required for the ListSharedReportGroups API call. */
	static readonly ListSharedReportGroups: string[] = [
		"codebuild:ListSharedReportGroups",
	];
	/** IAM actions required for the ListSourceCredentials API call. */
	static readonly ListSourceCredentials: string[] = [
		"codebuild:ListSourceCredentials",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["codebuild:PutResourcePolicy"];
	/** IAM actions required for the RetryBuild API call. */
	static readonly RetryBuild: string[] = ["codebuild:RetryBuild"];
	/** IAM actions required for the RetryBuildBatch API call. */
	static readonly RetryBuildBatch: string[] = ["codebuild:RetryBuildBatch"];
	/** IAM actions required for the StartBuild API call. */
	static readonly StartBuild: string[] = [
		"iam:PassRole",
		"codebuild:StartBuild",
	];
	/** IAM actions required for the StartBuildBatch API call. */
	static readonly StartBuildBatch: string[] = [
		"iam:PassRole",
		"codebuild:StartBuildBatch",
	];
	/** IAM actions required for the StartCommandExecution API call. */
	static readonly StartCommandExecution: string[] = [
		"codebuild:StartCommandExecution",
	];
	/** IAM actions required for the StartSandbox API call. */
	static readonly StartSandbox: string[] = ["codebuild:StartSandbox"];
	/** IAM actions required for the StartSandboxConnection API call. */
	static readonly StartSandboxConnection: string[] = [
		"codebuild:StartSandboxConnection",
	];
	/** IAM actions required for the StopBuild API call. */
	static readonly StopBuild: string[] = ["codebuild:StopBuild"];
	/** IAM actions required for the StopBuildBatch API call. */
	static readonly StopBuildBatch: string[] = ["codebuild:StopBuildBatch"];
	/** IAM actions required for the StopSandbox API call. */
	static readonly StopSandbox: string[] = ["codebuild:StopSandbox"];
	/** IAM actions required for the UpdateFleet API call. */
	static readonly UpdateFleet: string[] = [
		"iam:PassRole",
		"codebuild:UpdateFleet",
	];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UpdateProject: string[] = [
		"iam:PassRole",
		"codebuild:UpdateProject",
	];
	/** IAM actions required for the UpdateProjectVisibility API call. */
	static readonly UpdateProjectVisibility: string[] = [
		"iam:PassRole",
		"codebuild:UpdateProjectVisibility",
	];
	/** IAM actions required for the UpdateReportGroup API call. */
	static readonly UpdateReportGroup: string[] = ["codebuild:UpdateReportGroup"];
	/** IAM actions required for the UpdateWebhook API call. */
	static readonly UpdateWebhook: string[] = ["codebuild:UpdateWebhook"];
}

/**
 * Condition key constants and builders for codebuild.
 */
export class CodeBuildConditions {
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CreateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codebuild:computeConfiguration",
		"codebuild:computeConfiguration.disk",
		"codebuild:computeConfiguration.instanceType",
		"codebuild:computeConfiguration.machineType",
		"codebuild:computeConfiguration.memory",
		"codebuild:computeConfiguration.vCpu",
		"codebuild:computeType",
		"codebuild:environmentType",
		"codebuild:fleetServiceRole",
		"codebuild:imageId",
		"codebuild:vpcConfig",
		"codebuild:vpcConfig.securityGroupIds",
		"codebuild:vpcConfig.subnets",
		"codebuild:vpcConfig.vpcId",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codebuild:artifacts",
		"codebuild:artifacts.bucketOwnerAccess",
		"codebuild:artifacts.encryptionDisabled",
		"codebuild:artifacts.location",
		"codebuild:autoRetryLimit",
		"codebuild:buildBatchConfig",
		"codebuild:buildBatchConfig.restrictions.computeTypesAllowed",
		"codebuild:buildBatchConfig.restrictions.fleetsAllowed",
		"codebuild:buildBatchConfig.serviceRole",
		"codebuild:cache",
		"codebuild:cache.location",
		"codebuild:cache.modes",
		"codebuild:cache.type",
		"codebuild:concurrentBuildLimit",
		"codebuild:encryptionKey",
		"codebuild:environment",
		"codebuild:environment.certificate",
		"codebuild:environment.computeConfiguration",
		"codebuild:environment.computeConfiguration.disk",
		"codebuild:environment.computeConfiguration.instanceType",
		"codebuild:environment.computeConfiguration.machineType",
		"codebuild:environment.computeConfiguration.memory",
		"codebuild:environment.computeConfiguration.vCpu",
		"codebuild:environment.computeType",
		"codebuild:environment.environmentVariables",
		"codebuild:environment.environmentVariables.name",
		"codebuild:environment.environmentVariables.value",
		"codebuild:environment.environmentVariables/${name}.value",
		"codebuild:environment.fleet.fleetArn",
		"codebuild:environment.image",
		"codebuild:environment.imagePullCredentialsType",
		"codebuild:environment.privilegedMode",
		"codebuild:environment.registryCredential",
		"codebuild:environment.registryCredential.credential",
		"codebuild:environment.registryCredential.credentialProvider",
		"codebuild:environment.type",
		"codebuild:fileSystemLocations.identifier",
		"codebuild:fileSystemLocations.location",
		"codebuild:fileSystemLocations.type",
		"codebuild:fileSystemLocations/${identifier}.location",
		"codebuild:fileSystemLocations/${identifier}.type",
		"codebuild:logsConfig",
		"codebuild:logsConfig.s3Logs",
		"codebuild:logsConfig.s3Logs.bucketOwnerAccess",
		"codebuild:logsConfig.s3Logs.encryptionDisabled",
		"codebuild:logsConfig.s3Logs.location",
		"codebuild:logsConfig.s3Logs.status",
		"codebuild:secondaryArtifacts",
		"codebuild:secondaryArtifacts.artifactIdentifier",
		"codebuild:secondaryArtifacts.bucketOwnerAccess",
		"codebuild:secondaryArtifacts.encryptionDisabled",
		"codebuild:secondaryArtifacts.location",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.bucketOwnerAccess",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.encryptionDisabled",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.location",
		"codebuild:secondarySources",
		"codebuild:secondarySources.auth.resource",
		"codebuild:secondarySources.auth.type",
		"codebuild:secondarySources.buildStatusConfig.context",
		"codebuild:secondarySources.buildStatusConfig.targetUrl",
		"codebuild:secondarySources.buildspec",
		"codebuild:secondarySources.insecureSsl",
		"codebuild:secondarySources.location",
		"codebuild:secondarySources.sourceIdentifier",
		"codebuild:secondarySources/${sourceIdentifier}.auth.resource",
		"codebuild:secondarySources/${sourceIdentifier}.auth.type",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.context",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.targetUrl",
		"codebuild:secondarySources/${sourceIdentifier}.buildspec",
		"codebuild:secondarySources/${sourceIdentifier}.insecureSsl",
		"codebuild:secondarySources/${sourceIdentifier}.location",
		"codebuild:serviceRole",
		"codebuild:source",
		"codebuild:source.auth.resource",
		"codebuild:source.auth.type",
		"codebuild:source.buildStatusConfig.context",
		"codebuild:source.buildStatusConfig.targetUrl",
		"codebuild:source.buildspec",
		"codebuild:source.insecureSsl",
		"codebuild:source.location",
		"codebuild:vpcConfig",
		"codebuild:vpcConfig.securityGroupIds",
		"codebuild:vpcConfig.subnets",
		"codebuild:vpcConfig.vpcId",
	];
	/** Condition keys applicable to the CreateReportGroup action. */
	static readonly CreateReportGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codebuild:exportConfig.s3Destination.bucket",
		"codebuild:exportConfig.s3Destination.bucketOwner",
		"codebuild:exportConfig.s3Destination.encryptionDisabled",
		"codebuild:exportConfig.s3Destination.encryptionKey",
		"codebuild:exportConfig.s3Destination.path",
	];
	/** Condition keys applicable to the CreateWebhook action. */
	static readonly CreateWebhookConditionKeys: string[] = [
		"codebuild:buildType",
		"codebuild:manualCreation",
		"codebuild:scopeConfiguration.domain",
		"codebuild:scopeConfiguration.name",
		"codebuild:scopeConfiguration.scope",
	];
	/** Condition keys applicable to the ImportSourceCredentials action. */
	static readonly ImportSourceCredentialsConditionKeys: string[] = [
		"codebuild:authType",
		"codebuild:serverType",
		"codebuild:shouldOverwrite",
		"codebuild:token",
		"codebuild:username",
	];
	/** Condition keys applicable to the StartBuild action. */
	static readonly StartBuildConditionKeys: string[] = [
		"codebuild:artifacts",
		"codebuild:artifacts.bucketOwnerAccess",
		"codebuild:artifacts.encryptionDisabled",
		"codebuild:artifacts.location",
		"codebuild:autoRetryLimit",
		"codebuild:cache",
		"codebuild:cache.location",
		"codebuild:cache.modes",
		"codebuild:cache.type",
		"codebuild:encryptionKey",
		"codebuild:environment",
		"codebuild:environment.certificate",
		"codebuild:environment.computeType",
		"codebuild:environment.environmentVariables",
		"codebuild:environment.environmentVariables.name",
		"codebuild:environment.environmentVariables.value",
		"codebuild:environment.environmentVariables/${name}.value",
		"codebuild:environment.fleet.fleetArn",
		"codebuild:environment.image",
		"codebuild:environment.imagePullCredentialsType",
		"codebuild:environment.privilegedMode",
		"codebuild:environment.registryCredential",
		"codebuild:environment.registryCredential.credential",
		"codebuild:environment.registryCredential.credentialProvider",
		"codebuild:environment.type",
		"codebuild:logsConfig",
		"codebuild:logsConfig.s3Logs",
		"codebuild:logsConfig.s3Logs.bucketOwnerAccess",
		"codebuild:logsConfig.s3Logs.encryptionDisabled",
		"codebuild:logsConfig.s3Logs.location",
		"codebuild:logsConfig.s3Logs.status",
		"codebuild:secondaryArtifacts",
		"codebuild:secondaryArtifacts.artifactIdentifier",
		"codebuild:secondaryArtifacts.bucketOwnerAccess",
		"codebuild:secondaryArtifacts.encryptionDisabled",
		"codebuild:secondaryArtifacts.location",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.bucketOwnerAccess",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.encryptionDisabled",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.location",
		"codebuild:secondarySources",
		"codebuild:secondarySources.auth.resource",
		"codebuild:secondarySources.auth.type",
		"codebuild:secondarySources.buildStatusConfig.context",
		"codebuild:secondarySources.buildStatusConfig.targetUrl",
		"codebuild:secondarySources.buildspec",
		"codebuild:secondarySources.insecureSsl",
		"codebuild:secondarySources.location",
		"codebuild:secondarySources.sourceIdentifier",
		"codebuild:secondarySources/${sourceIdentifier}.auth.resource",
		"codebuild:secondarySources/${sourceIdentifier}.auth.type",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.context",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.targetUrl",
		"codebuild:secondarySources/${sourceIdentifier}.buildspec",
		"codebuild:secondarySources/${sourceIdentifier}.insecureSsl",
		"codebuild:secondarySources/${sourceIdentifier}.location",
		"codebuild:serviceRole",
		"codebuild:source",
		"codebuild:source.auth.resource",
		"codebuild:source.auth.type",
		"codebuild:source.buildStatusConfig.context",
		"codebuild:source.buildStatusConfig.targetUrl",
		"codebuild:source.buildspec",
		"codebuild:source.insecureSsl",
		"codebuild:source.location",
	];
	/** Condition keys applicable to the StartBuildBatch action. */
	static readonly StartBuildBatchConditionKeys: string[] = [
		"codebuild:artifacts",
		"codebuild:artifacts.bucketOwnerAccess",
		"codebuild:artifacts.encryptionDisabled",
		"codebuild:artifacts.location",
		"codebuild:buildBatchConfig",
		"codebuild:buildBatchConfig.restrictions.computeTypesAllowed",
		"codebuild:buildBatchConfig.restrictions.fleetsAllowed",
		"codebuild:buildBatchConfig.serviceRole",
		"codebuild:cache",
		"codebuild:cache.location",
		"codebuild:cache.modes",
		"codebuild:cache.type",
		"codebuild:encryptionKey",
		"codebuild:environment",
		"codebuild:environment.certificate",
		"codebuild:environment.computeType",
		"codebuild:environment.environmentVariables",
		"codebuild:environment.environmentVariables.name",
		"codebuild:environment.environmentVariables.value",
		"codebuild:environment.environmentVariables/${name}.value",
		"codebuild:environment.image",
		"codebuild:environment.imagePullCredentialsType",
		"codebuild:environment.privilegedMode",
		"codebuild:environment.registryCredential",
		"codebuild:environment.registryCredential.credential",
		"codebuild:environment.registryCredential.credentialProvider",
		"codebuild:environment.type",
		"codebuild:logsConfig",
		"codebuild:logsConfig.s3Logs",
		"codebuild:logsConfig.s3Logs.bucketOwnerAccess",
		"codebuild:logsConfig.s3Logs.encryptionDisabled",
		"codebuild:logsConfig.s3Logs.location",
		"codebuild:logsConfig.s3Logs.status",
		"codebuild:secondaryArtifacts",
		"codebuild:secondaryArtifacts.artifactIdentifier",
		"codebuild:secondaryArtifacts.bucketOwnerAccess",
		"codebuild:secondaryArtifacts.encryptionDisabled",
		"codebuild:secondaryArtifacts.location",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.bucketOwnerAccess",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.encryptionDisabled",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.location",
		"codebuild:secondarySources",
		"codebuild:secondarySources.auth.resource",
		"codebuild:secondarySources.auth.type",
		"codebuild:secondarySources.buildStatusConfig.context",
		"codebuild:secondarySources.buildStatusConfig.targetUrl",
		"codebuild:secondarySources.buildspec",
		"codebuild:secondarySources.insecureSsl",
		"codebuild:secondarySources.location",
		"codebuild:secondarySources.sourceIdentifier",
		"codebuild:secondarySources/${sourceIdentifier}.auth.resource",
		"codebuild:secondarySources/${sourceIdentifier}.auth.type",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.context",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.targetUrl",
		"codebuild:secondarySources/${sourceIdentifier}.buildspec",
		"codebuild:secondarySources/${sourceIdentifier}.insecureSsl",
		"codebuild:secondarySources/${sourceIdentifier}.location",
		"codebuild:serviceRole",
		"codebuild:source",
		"codebuild:source.auth.resource",
		"codebuild:source.auth.type",
		"codebuild:source.buildspec",
		"codebuild:source.insecureSsl",
		"codebuild:source.location",
	];
	/** Condition keys applicable to the UpdateFleet action. */
	static readonly UpdateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codebuild:computeConfiguration",
		"codebuild:computeConfiguration.disk",
		"codebuild:computeConfiguration.instanceType",
		"codebuild:computeConfiguration.machineType",
		"codebuild:computeConfiguration.memory",
		"codebuild:computeConfiguration.vCpu",
		"codebuild:computeType",
		"codebuild:environmentType",
		"codebuild:fleetServiceRole",
		"codebuild:imageId",
		"codebuild:vpcConfig",
		"codebuild:vpcConfig.securityGroupIds",
		"codebuild:vpcConfig.subnets",
		"codebuild:vpcConfig.vpcId",
	];
	/** Condition keys applicable to the UpdateProject action. */
	static readonly UpdateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codebuild:artifacts",
		"codebuild:artifacts.bucketOwnerAccess",
		"codebuild:artifacts.encryptionDisabled",
		"codebuild:artifacts.location",
		"codebuild:autoRetryLimit",
		"codebuild:buildBatchConfig",
		"codebuild:buildBatchConfig.restrictions.computeTypesAllowed",
		"codebuild:buildBatchConfig.restrictions.fleetsAllowed",
		"codebuild:buildBatchConfig.serviceRole",
		"codebuild:cache",
		"codebuild:cache.location",
		"codebuild:cache.modes",
		"codebuild:cache.type",
		"codebuild:concurrentBuildLimit",
		"codebuild:encryptionKey",
		"codebuild:environment",
		"codebuild:environment.certificate",
		"codebuild:environment.computeConfiguration",
		"codebuild:environment.computeConfiguration.disk",
		"codebuild:environment.computeConfiguration.instanceType",
		"codebuild:environment.computeConfiguration.machineType",
		"codebuild:environment.computeConfiguration.memory",
		"codebuild:environment.computeConfiguration.vCpu",
		"codebuild:environment.computeType",
		"codebuild:environment.environmentVariables",
		"codebuild:environment.environmentVariables.name",
		"codebuild:environment.environmentVariables.value",
		"codebuild:environment.environmentVariables/${name}.value",
		"codebuild:environment.fleet.fleetArn",
		"codebuild:environment.image",
		"codebuild:environment.imagePullCredentialsType",
		"codebuild:environment.privilegedMode",
		"codebuild:environment.registryCredential",
		"codebuild:environment.registryCredential.credential",
		"codebuild:environment.registryCredential.credentialProvider",
		"codebuild:environment.type",
		"codebuild:fileSystemLocations.identifier",
		"codebuild:fileSystemLocations.location",
		"codebuild:fileSystemLocations.type",
		"codebuild:fileSystemLocations/${identifier}.location",
		"codebuild:fileSystemLocations/${identifier}.type",
		"codebuild:logsConfig",
		"codebuild:logsConfig.s3Logs",
		"codebuild:logsConfig.s3Logs.bucketOwnerAccess",
		"codebuild:logsConfig.s3Logs.encryptionDisabled",
		"codebuild:logsConfig.s3Logs.location",
		"codebuild:logsConfig.s3Logs.status",
		"codebuild:secondaryArtifacts",
		"codebuild:secondaryArtifacts.artifactIdentifier",
		"codebuild:secondaryArtifacts.bucketOwnerAccess",
		"codebuild:secondaryArtifacts.encryptionDisabled",
		"codebuild:secondaryArtifacts.location",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.bucketOwnerAccess",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.encryptionDisabled",
		"codebuild:secondaryArtifacts/${artifactIdentifier}.location",
		"codebuild:secondarySources",
		"codebuild:secondarySources.auth.resource",
		"codebuild:secondarySources.auth.type",
		"codebuild:secondarySources.buildStatusConfig.context",
		"codebuild:secondarySources.buildStatusConfig.targetUrl",
		"codebuild:secondarySources.buildspec",
		"codebuild:secondarySources.insecureSsl",
		"codebuild:secondarySources.location",
		"codebuild:secondarySources.sourceIdentifier",
		"codebuild:secondarySources/${sourceIdentifier}.auth.resource",
		"codebuild:secondarySources/${sourceIdentifier}.auth.type",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.context",
		"codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.targetUrl",
		"codebuild:secondarySources/${sourceIdentifier}.buildspec",
		"codebuild:secondarySources/${sourceIdentifier}.insecureSsl",
		"codebuild:secondarySources/${sourceIdentifier}.location",
		"codebuild:serviceRole",
		"codebuild:source",
		"codebuild:source.auth.resource",
		"codebuild:source.auth.type",
		"codebuild:source.buildStatusConfig.context",
		"codebuild:source.buildStatusConfig.targetUrl",
		"codebuild:source.buildspec",
		"codebuild:source.insecureSsl",
		"codebuild:source.location",
		"codebuild:vpcConfig",
		"codebuild:vpcConfig.securityGroupIds",
		"codebuild:vpcConfig.subnets",
		"codebuild:vpcConfig.vpcId",
	];
	/** Condition keys applicable to the UpdateProjectVisibility action. */
	static readonly UpdateProjectVisibilityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codebuild:projectVisibility",
	];
	/** Condition keys applicable to the UpdateReportGroup action. */
	static readonly UpdateReportGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"codebuild:exportConfig.s3Destination.bucket",
		"codebuild:exportConfig.s3Destination.bucketOwner",
		"codebuild:exportConfig.s3Destination.encryptionDisabled",
		"codebuild:exportConfig.s3Destination.encryptionKey",
		"codebuild:exportConfig.s3Destination.path",
	];
	/** Condition keys applicable to the UpdateWebhook action. */
	static readonly UpdateWebhookConditionKeys: string[] = [
		"codebuild:buildType",
		"codebuild:manualCreation",
		"codebuild:scopeConfiguration.domain",
		"codebuild:scopeConfiguration.name",
		"codebuild:scopeConfiguration.scope",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: codebuild:artifacts (Bool) */
	static readonly ARTIFACTS = "codebuild:artifacts";
	/** Condition key: codebuild:artifacts.bucketOwnerAccess (String) */
	static readonly ARTIFACTS_BUCKET_OWNER_ACCESS =
		"codebuild:artifacts.bucketOwnerAccess";
	/** Condition key: codebuild:artifacts.encryptionDisabled (Bool) */
	static readonly ARTIFACTS_ENCRYPTION_DISABLED =
		"codebuild:artifacts.encryptionDisabled";
	/** Condition key: codebuild:artifacts.location (String) */
	static readonly ARTIFACTS_LOCATION = "codebuild:artifacts.location";
	/** Condition key: codebuild:authType (String) */
	static readonly AUTH_TYPE = "codebuild:authType";
	/** Condition key: codebuild:autoRetryLimit (Numeric) */
	static readonly AUTO_RETRY_LIMIT = "codebuild:autoRetryLimit";
	/** Condition key: codebuild:buildArn (ARN) */
	static readonly BUILD_ARN = "codebuild:buildArn";
	/** Condition key: codebuild:buildBatchConfig (Bool) */
	static readonly BUILD_BATCH_CONFIG = "codebuild:buildBatchConfig";
	/** Condition key: codebuild:buildBatchConfig.restrictions.computeTypesAllowed (ArrayOfString) */
	static readonly BUILD_BATCH_CONFIG_RESTRICTIONS_COMPUTE_TYPES_ALLOWED =
		"codebuild:buildBatchConfig.restrictions.computeTypesAllowed";
	/** Condition key: codebuild:buildBatchConfig.restrictions.fleetsAllowed (ArrayOfString) */
	static readonly BUILD_BATCH_CONFIG_RESTRICTIONS_FLEETS_ALLOWED =
		"codebuild:buildBatchConfig.restrictions.fleetsAllowed";
	/** Condition key: codebuild:buildBatchConfig.serviceRole (String) */
	static readonly BUILD_BATCH_CONFIG_SERVICE_ROLE =
		"codebuild:buildBatchConfig.serviceRole";
	/** Condition key: codebuild:buildType (String) */
	static readonly BUILD_TYPE = "codebuild:buildType";
	/** Condition key: codebuild:cache (Bool) */
	static readonly CACHE = "codebuild:cache";
	/** Condition key: codebuild:cache.location (String) */
	static readonly CACHE_LOCATION = "codebuild:cache.location";
	/** Condition key: codebuild:cache.modes (ArrayOfString) */
	static readonly CACHE_MODES = "codebuild:cache.modes";
	/** Condition key: codebuild:cache.type (String) */
	static readonly CACHE_TYPE = "codebuild:cache.type";
	/** Condition key: codebuild:computeConfiguration (Bool) */
	static readonly COMPUTE_CONFIGURATION = "codebuild:computeConfiguration";
	/** Condition key: codebuild:computeConfiguration.disk (Numeric) */
	static readonly COMPUTE_CONFIGURATION_DISK =
		"codebuild:computeConfiguration.disk";
	/** Condition key: codebuild:computeConfiguration.instanceType (String) */
	static readonly COMPUTE_CONFIGURATION_INSTANCE_TYPE =
		"codebuild:computeConfiguration.instanceType";
	/** Condition key: codebuild:computeConfiguration.machineType (String) */
	static readonly COMPUTE_CONFIGURATION_MACHINE_TYPE =
		"codebuild:computeConfiguration.machineType";
	/** Condition key: codebuild:computeConfiguration.memory (Numeric) */
	static readonly COMPUTE_CONFIGURATION_MEMORY =
		"codebuild:computeConfiguration.memory";
	/** Condition key: codebuild:computeConfiguration.vCpu (Numeric) */
	static readonly COMPUTE_CONFIGURATION_V_CPU =
		"codebuild:computeConfiguration.vCpu";
	/** Condition key: codebuild:computeType (String) */
	static readonly COMPUTE_TYPE = "codebuild:computeType";
	/** Condition key: codebuild:concurrentBuildLimit (Numeric) */
	static readonly CONCURRENT_BUILD_LIMIT = "codebuild:concurrentBuildLimit";
	/** Condition key: codebuild:encryptionKey (String) */
	static readonly ENCRYPTION_KEY = "codebuild:encryptionKey";
	/** Condition key: codebuild:environment (Bool) */
	static readonly ENVIRONMENT = "codebuild:environment";
	/** Condition key: codebuild:environment.certificate (String) */
	static readonly ENVIRONMENT_CERTIFICATE = "codebuild:environment.certificate";
	/** Condition key: codebuild:environment.computeConfiguration (Bool) */
	static readonly ENVIRONMENT_COMPUTE_CONFIGURATION =
		"codebuild:environment.computeConfiguration";
	/** Condition key: codebuild:environment.computeConfiguration.disk (Numeric) */
	static readonly ENVIRONMENT_COMPUTE_CONFIGURATION_DISK =
		"codebuild:environment.computeConfiguration.disk";
	/** Condition key: codebuild:environment.computeConfiguration.instanceType (String) */
	static readonly ENVIRONMENT_COMPUTE_CONFIGURATION_INSTANCE_TYPE =
		"codebuild:environment.computeConfiguration.instanceType";
	/** Condition key: codebuild:environment.computeConfiguration.machineType (String) */
	static readonly ENVIRONMENT_COMPUTE_CONFIGURATION_MACHINE_TYPE =
		"codebuild:environment.computeConfiguration.machineType";
	/** Condition key: codebuild:environment.computeConfiguration.memory (Numeric) */
	static readonly ENVIRONMENT_COMPUTE_CONFIGURATION_MEMORY =
		"codebuild:environment.computeConfiguration.memory";
	/** Condition key: codebuild:environment.computeConfiguration.vCpu (Numeric) */
	static readonly ENVIRONMENT_COMPUTE_CONFIGURATION_V_CPU =
		"codebuild:environment.computeConfiguration.vCpu";
	/** Condition key: codebuild:environment.computeType (String) */
	static readonly ENVIRONMENT_COMPUTE_TYPE =
		"codebuild:environment.computeType";
	/** Condition key: codebuild:environment.environmentVariables (Bool) */
	static readonly ENVIRONMENT_ENVIRONMENT_VARIABLES =
		"codebuild:environment.environmentVariables";
	/** Condition key: codebuild:environment.environmentVariables.name (ArrayOfString) */
	static readonly ENVIRONMENT_ENVIRONMENT_VARIABLES_NAME =
		"codebuild:environment.environmentVariables.name";
	/** Condition key: codebuild:environment.environmentVariables.value (ArrayOfString) */
	static readonly ENVIRONMENT_ENVIRONMENT_VARIABLES_VALUE =
		"codebuild:environment.environmentVariables.value";
	/** Condition key: codebuild:environment.fleet.fleetArn (ARN) */
	static readonly ENVIRONMENT_FLEET_FLEET_ARN =
		"codebuild:environment.fleet.fleetArn";
	/** Condition key: codebuild:environment.image (String) */
	static readonly ENVIRONMENT_IMAGE = "codebuild:environment.image";
	/** Condition key: codebuild:environment.imagePullCredentialsType (String) */
	static readonly ENVIRONMENT_IMAGE_PULL_CREDENTIALS_TYPE =
		"codebuild:environment.imagePullCredentialsType";
	/** Condition key: codebuild:environment.privilegedMode (Bool) */
	static readonly ENVIRONMENT_PRIVILEGED_MODE =
		"codebuild:environment.privilegedMode";
	/** Condition key: codebuild:environment.registryCredential (Bool) */
	static readonly ENVIRONMENT_REGISTRY_CREDENTIAL =
		"codebuild:environment.registryCredential";
	/** Condition key: codebuild:environment.registryCredential.credential (String) */
	static readonly ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL =
		"codebuild:environment.registryCredential.credential";
	/** Condition key: codebuild:environment.registryCredential.credentialProvider (String) */
	static readonly ENVIRONMENT_REGISTRY_CREDENTIAL_CREDENTIAL_PROVIDER =
		"codebuild:environment.registryCredential.credentialProvider";
	/** Condition key: codebuild:environment.type (String) */
	static readonly ENVIRONMENT_TYPE = "codebuild:environment.type";
	/** Condition key: codebuild:exportConfig.s3Destination.bucket (String) */
	static readonly EXPORT_CONFIG_S3_DESTINATION_BUCKET =
		"codebuild:exportConfig.s3Destination.bucket";
	/** Condition key: codebuild:exportConfig.s3Destination.bucketOwner (String) */
	static readonly EXPORT_CONFIG_S3_DESTINATION_BUCKET_OWNER =
		"codebuild:exportConfig.s3Destination.bucketOwner";
	/** Condition key: codebuild:exportConfig.s3Destination.encryptionDisabled (Bool) */
	static readonly EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_DISABLED =
		"codebuild:exportConfig.s3Destination.encryptionDisabled";
	/** Condition key: codebuild:exportConfig.s3Destination.encryptionKey (String) */
	static readonly EXPORT_CONFIG_S3_DESTINATION_ENCRYPTION_KEY =
		"codebuild:exportConfig.s3Destination.encryptionKey";
	/** Condition key: codebuild:exportConfig.s3Destination.path (String) */
	static readonly EXPORT_CONFIG_S3_DESTINATION_PATH =
		"codebuild:exportConfig.s3Destination.path";
	/** Condition key: codebuild:fileSystemLocations.identifier (ArrayOfString) */
	static readonly FILE_SYSTEM_LOCATIONS_IDENTIFIER =
		"codebuild:fileSystemLocations.identifier";
	/** Condition key: codebuild:fileSystemLocations.location (ArrayOfString) */
	static readonly FILE_SYSTEM_LOCATIONS_LOCATION =
		"codebuild:fileSystemLocations.location";
	/** Condition key: codebuild:fileSystemLocations.type (ArrayOfString) */
	static readonly FILE_SYSTEM_LOCATIONS_TYPE =
		"codebuild:fileSystemLocations.type";
	/** Condition key: codebuild:fleetServiceRole (String) */
	static readonly FLEET_SERVICE_ROLE = "codebuild:fleetServiceRole";
	/** Condition key: codebuild:imageId (String) */
	static readonly IMAGE_ID = "codebuild:imageId";
	/** Condition key: codebuild:logsConfig (Bool) */
	static readonly LOGS_CONFIG = "codebuild:logsConfig";
	/** Condition key: codebuild:logsConfig.s3Logs (Bool) */
	static readonly LOGS_CONFIG_S3_LOGS = "codebuild:logsConfig.s3Logs";
	/** Condition key: codebuild:logsConfig.s3Logs.bucketOwnerAccess (String) */
	static readonly LOGS_CONFIG_S3_LOGS_BUCKET_OWNER_ACCESS =
		"codebuild:logsConfig.s3Logs.bucketOwnerAccess";
	/** Condition key: codebuild:logsConfig.s3Logs.encryptionDisabled (Bool) */
	static readonly LOGS_CONFIG_S3_LOGS_ENCRYPTION_DISABLED =
		"codebuild:logsConfig.s3Logs.encryptionDisabled";
	/** Condition key: codebuild:logsConfig.s3Logs.location (String) */
	static readonly LOGS_CONFIG_S3_LOGS_LOCATION =
		"codebuild:logsConfig.s3Logs.location";
	/** Condition key: codebuild:logsConfig.s3Logs.status (String) */
	static readonly LOGS_CONFIG_S3_LOGS_STATUS =
		"codebuild:logsConfig.s3Logs.status";
	/** Condition key: codebuild:manualCreation (Bool) */
	static readonly MANUAL_CREATION = "codebuild:manualCreation";
	/** Condition key: codebuild:projectArn (ARN) */
	static readonly PROJECT_ARN = "codebuild:projectArn";
	/** Condition key: codebuild:projectVisibility (String) */
	static readonly PROJECT_VISIBILITY = "codebuild:projectVisibility";
	/** Condition key: codebuild:scopeConfiguration.domain (String) */
	static readonly SCOPE_CONFIGURATION_DOMAIN =
		"codebuild:scopeConfiguration.domain";
	/** Condition key: codebuild:scopeConfiguration.name (String) */
	static readonly SCOPE_CONFIGURATION_NAME =
		"codebuild:scopeConfiguration.name";
	/** Condition key: codebuild:scopeConfiguration.scope (String) */
	static readonly SCOPE_CONFIGURATION_SCOPE =
		"codebuild:scopeConfiguration.scope";
	/** Condition key: codebuild:secondaryArtifacts (Bool) */
	static readonly SECONDARY_ARTIFACTS = "codebuild:secondaryArtifacts";
	/** Condition key: codebuild:secondaryArtifacts.artifactIdentifier (ArrayOfString) */
	static readonly SECONDARY_ARTIFACTS_ARTIFACT_IDENTIFIER =
		"codebuild:secondaryArtifacts.artifactIdentifier";
	/** Condition key: codebuild:secondaryArtifacts.bucketOwnerAccess (ArrayOfString) */
	static readonly SECONDARY_ARTIFACTS_BUCKET_OWNER_ACCESS =
		"codebuild:secondaryArtifacts.bucketOwnerAccess";
	/** Condition key: codebuild:secondaryArtifacts.encryptionDisabled (ArrayOfBool) */
	static readonly SECONDARY_ARTIFACTS_ENCRYPTION_DISABLED =
		"codebuild:secondaryArtifacts.encryptionDisabled";
	/** Condition key: codebuild:secondaryArtifacts.location (ArrayOfString) */
	static readonly SECONDARY_ARTIFACTS_LOCATION =
		"codebuild:secondaryArtifacts.location";
	/** Condition key: codebuild:secondarySources (Bool) */
	static readonly SECONDARY_SOURCES = "codebuild:secondarySources";
	/** Condition key: codebuild:secondarySources.auth.resource (ArrayOfString) */
	static readonly SECONDARY_SOURCES_AUTH_RESOURCE =
		"codebuild:secondarySources.auth.resource";
	/** Condition key: codebuild:secondarySources.auth.type (ArrayOfString) */
	static readonly SECONDARY_SOURCES_AUTH_TYPE =
		"codebuild:secondarySources.auth.type";
	/** Condition key: codebuild:secondarySources.buildStatusConfig.context (ArrayOfString) */
	static readonly SECONDARY_SOURCES_BUILD_STATUS_CONFIG_CONTEXT =
		"codebuild:secondarySources.buildStatusConfig.context";
	/** Condition key: codebuild:secondarySources.buildStatusConfig.targetUrl (ArrayOfString) */
	static readonly SECONDARY_SOURCES_BUILD_STATUS_CONFIG_TARGET_URL =
		"codebuild:secondarySources.buildStatusConfig.targetUrl";
	/** Condition key: codebuild:secondarySources.buildspec (Bool) */
	static readonly SECONDARY_SOURCES_BUILDSPEC =
		"codebuild:secondarySources.buildspec";
	/** Condition key: codebuild:secondarySources.insecureSsl (ArrayOfBool) */
	static readonly SECONDARY_SOURCES_INSECURE_SSL =
		"codebuild:secondarySources.insecureSsl";
	/** Condition key: codebuild:secondarySources.location (ArrayOfString) */
	static readonly SECONDARY_SOURCES_LOCATION =
		"codebuild:secondarySources.location";
	/** Condition key: codebuild:secondarySources.sourceIdentifier (ArrayOfString) */
	static readonly SECONDARY_SOURCES_SOURCE_IDENTIFIER =
		"codebuild:secondarySources.sourceIdentifier";
	/** Condition key: codebuild:serverType (String) */
	static readonly SERVER_TYPE = "codebuild:serverType";
	/** Condition key: codebuild:serviceRole (String) */
	static readonly SERVICE_ROLE = "codebuild:serviceRole";
	/** Condition key: codebuild:shouldOverwrite (Bool) */
	static readonly SHOULD_OVERWRITE = "codebuild:shouldOverwrite";
	/** Condition key: codebuild:source (Bool) */
	static readonly SOURCE = "codebuild:source";
	/** Condition key: codebuild:source.auth.resource (String) */
	static readonly SOURCE_AUTH_RESOURCE = "codebuild:source.auth.resource";
	/** Condition key: codebuild:source.auth.type (String) */
	static readonly SOURCE_AUTH_TYPE = "codebuild:source.auth.type";
	/** Condition key: codebuild:source.buildStatusConfig.context (String) */
	static readonly SOURCE_BUILD_STATUS_CONFIG_CONTEXT =
		"codebuild:source.buildStatusConfig.context";
	/** Condition key: codebuild:source.buildStatusConfig.targetUrl (String) */
	static readonly SOURCE_BUILD_STATUS_CONFIG_TARGET_URL =
		"codebuild:source.buildStatusConfig.targetUrl";
	/** Condition key: codebuild:source.buildspec (Bool) */
	static readonly SOURCE_BUILDSPEC = "codebuild:source.buildspec";
	/** Condition key: codebuild:source.insecureSsl (Bool) */
	static readonly SOURCE_INSECURE_SSL = "codebuild:source.insecureSsl";
	/** Condition key: codebuild:source.location (String) */
	static readonly SOURCE_LOCATION = "codebuild:source.location";
	/** Condition key: codebuild:token (String) */
	static readonly TOKEN = "codebuild:token";
	/** Condition key: codebuild:username (String) */
	static readonly USERNAME = "codebuild:username";
	/** Condition key: codebuild:vpcConfig (Bool) */
	static readonly VPC_CONFIG = "codebuild:vpcConfig";
	/** Condition key: codebuild:vpcConfig.securityGroupIds (ArrayOfString) */
	static readonly VPC_CONFIG_SECURITY_GROUP_IDS =
		"codebuild:vpcConfig.securityGroupIds";
	/** Condition key: codebuild:vpcConfig.subnets (ArrayOfString) */
	static readonly VPC_CONFIG_SUBNETS = "codebuild:vpcConfig.subnets";
	/** Condition key: codebuild:vpcConfig.vpcId (String) */
	static readonly VPC_CONFIG_VPC_ID = "codebuild:vpcConfig.vpcId";

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
	 * Generates a condition block for `codebuild:artifacts`.
	 */
	static artifacts(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:artifacts": value } };
	}

	/**
	 * Generates a condition block for `codebuild:artifacts.bucketOwnerAccess`.
	 */
	static artifactsBucketOwnerAccess(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:artifacts.bucketOwnerAccess": value } };
	}

	/**
	 * Generates a condition block for `codebuild:artifacts.encryptionDisabled`.
	 */
	static artifactsEncryptionDisabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:artifacts.encryptionDisabled": value } };
	}

	/**
	 * Generates a condition block for `codebuild:artifacts.location`.
	 */
	static artifactsLocation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:artifacts.location": value } };
	}

	/**
	 * Generates a condition block for `codebuild:authType`.
	 */
	static authType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:authType": value } };
	}

	/**
	 * Generates a condition block for `codebuild:autoRetryLimit`.
	 */
	static autoRetryLimit(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "codebuild:autoRetryLimit": value } };
	}

	/**
	 * Generates a condition block for `codebuild:buildArn`.
	 */
	static buildARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "codebuild:buildArn": value } };
	}

	/**
	 * Generates a condition block for `codebuild:buildBatchConfig`.
	 */
	static buildBatchConfig(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:buildBatchConfig": value } };
	}

	/**
	 * Generates a condition block for `codebuild:buildBatchConfig.restrictions.computeTypesAllowed`.
	 */
	static buildBatchConfigRestrictionsComputeTypesAllowed(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:buildBatchConfig.restrictions.computeTypesAllowed": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:buildBatchConfig.restrictions.fleetsAllowed`.
	 */
	static buildBatchConfigRestrictionsFleetsAllowed(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:buildBatchConfig.restrictions.fleetsAllowed": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:buildBatchConfig.serviceRole`.
	 */
	static buildBatchConfigServiceRole(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:buildBatchConfig.serviceRole": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:buildType`.
	 */
	static buildType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:buildType": value } };
	}

	/**
	 * Generates a condition block for `codebuild:cache`.
	 */
	static cache(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:cache": value } };
	}

	/**
	 * Generates a condition block for `codebuild:cache.location`.
	 */
	static cacheLocation(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:cache.location": value } };
	}

	/**
	 * Generates a condition block for `codebuild:cache.modes`.
	 */
	static cacheModes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "codebuild:cache.modes": values } };
	}

	/**
	 * Generates a condition block for `codebuild:cache.type`.
	 */
	static cacheType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:cache.type": value } };
	}

	/**
	 * Generates a condition block for `codebuild:computeConfiguration`.
	 */
	static computeConfiguration(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:computeConfiguration": value } };
	}

	/**
	 * Generates a condition block for `codebuild:computeConfiguration.disk`.
	 */
	static computeConfigurationDisk(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "codebuild:computeConfiguration.disk": value } };
	}

	/**
	 * Generates a condition block for `codebuild:computeConfiguration.instanceType`.
	 */
	static computeConfigurationInstanceType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:computeConfiguration.instanceType": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:computeConfiguration.machineType`.
	 */
	static computeConfigurationMachineType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:computeConfiguration.machineType": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:computeConfiguration.memory`.
	 */
	static computeConfigurationMemory(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: { "codebuild:computeConfiguration.memory": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:computeConfiguration.vCpu`.
	 */
	static computeConfigurationVCpu(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "codebuild:computeConfiguration.vCpu": value } };
	}

	/**
	 * Generates a condition block for `codebuild:computeType`.
	 */
	static computeType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:computeType": value } };
	}

	/**
	 * Generates a condition block for `codebuild:concurrentBuildLimit`.
	 */
	static concurrentBuildLimit(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "codebuild:concurrentBuildLimit": value } };
	}

	/**
	 * Generates a condition block for `codebuild:encryptionKey`.
	 */
	static encryptionKey(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:encryptionKey": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment`.
	 */
	static environment(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:environment": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.certificate`.
	 */
	static environmentCertificate(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:environment.certificate": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.computeConfiguration`.
	 */
	static environmentComputeConfiguration(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:environment.computeConfiguration": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.computeConfiguration.disk`.
	 */
	static environmentComputeConfigurationDisk(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: {
				"codebuild:environment.computeConfiguration.disk": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.computeConfiguration.instanceType`.
	 */
	static environmentComputeConfigurationInstanceType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"codebuild:environment.computeConfiguration.instanceType": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.computeConfiguration.machineType`.
	 */
	static environmentComputeConfigurationMachineType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"codebuild:environment.computeConfiguration.machineType": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.computeConfiguration.memory`.
	 */
	static environmentComputeConfigurationMemory(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: {
				"codebuild:environment.computeConfiguration.memory": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.computeConfiguration.vCpu`.
	 */
	static environmentComputeConfigurationVCpu(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: {
				"codebuild:environment.computeConfiguration.vCpu": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.computeType`.
	 */
	static environmentComputeType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:environment.computeType": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.environmentVariables`.
	 */
	static environmentEnvironmentVariables(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:environment.environmentVariables": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.environmentVariables.name`.
	 */
	static environmentEnvironmentVariablesName(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:environment.environmentVariables.name": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.environmentVariables.value`.
	 */
	static environmentEnvironmentVariablesValue(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:environment.environmentVariables.value": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.fleet.fleetArn`.
	 */
	static environmentFleetFleetARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "codebuild:environment.fleet.fleetArn": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.image`.
	 */
	static environmentImage(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:environment.image": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.imagePullCredentialsType`.
	 */
	static environmentImagePullCredentialsType(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:environment.imagePullCredentialsType": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.privilegedMode`.
	 */
	static environmentPrivilegedMode(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:environment.privilegedMode": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.registryCredential`.
	 */
	static environmentRegistryCredential(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:environment.registryCredential": value } };
	}

	/**
	 * Generates a condition block for `codebuild:environment.registryCredential.credential`.
	 */
	static environmentRegistryCredentialCredential(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"codebuild:environment.registryCredential.credential": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.registryCredential.credentialProvider`.
	 */
	static environmentRegistryCredentialCredentialProvider(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"codebuild:environment.registryCredential.credentialProvider": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:environment.type`.
	 */
	static environmentType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:environment.type": value } };
	}

	/**
	 * Generates a condition block for `codebuild:exportConfig.s3Destination.bucket`.
	 */
	static exportConfigS3DestinationBucket(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:exportConfig.s3Destination.bucket": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:exportConfig.s3Destination.bucketOwner`.
	 */
	static exportConfigS3DestinationBucketOwner(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"codebuild:exportConfig.s3Destination.bucketOwner": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:exportConfig.s3Destination.encryptionDisabled`.
	 */
	static exportConfigS3DestinationEncryptionDisabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return {
			Bool: {
				"codebuild:exportConfig.s3Destination.encryptionDisabled": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:exportConfig.s3Destination.encryptionKey`.
	 */
	static exportConfigS3DestinationEncryptionKey(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"codebuild:exportConfig.s3Destination.encryptionKey": value,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:exportConfig.s3Destination.path`.
	 */
	static exportConfigS3DestinationPath(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:exportConfig.s3Destination.path": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:fileSystemLocations.identifier`.
	 */
	static fileSystemLocationsIdentifier(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:fileSystemLocations.identifier": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:fileSystemLocations.location`.
	 */
	static fileSystemLocationsLocation(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:fileSystemLocations.location": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:fileSystemLocations.type`.
	 */
	static fileSystemLocationsType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:fileSystemLocations.type": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:fleetServiceRole`.
	 */
	static fleetServiceRole(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:fleetServiceRole": value } };
	}

	/**
	 * Generates a condition block for `codebuild:imageId`.
	 */
	static imageId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:imageId": value } };
	}

	/**
	 * Generates a condition block for `codebuild:logsConfig`.
	 */
	static logsConfig(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:logsConfig": value } };
	}

	/**
	 * Generates a condition block for `codebuild:logsConfig.s3Logs`.
	 */
	static logsConfigS3Logs(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:logsConfig.s3Logs": value } };
	}

	/**
	 * Generates a condition block for `codebuild:logsConfig.s3Logs.bucketOwnerAccess`.
	 */
	static logsConfigS3LogsBucketOwnerAccess(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:logsConfig.s3Logs.bucketOwnerAccess": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:logsConfig.s3Logs.encryptionDisabled`.
	 */
	static logsConfigS3LogsEncryptionDisabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return {
			Bool: { "codebuild:logsConfig.s3Logs.encryptionDisabled": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:logsConfig.s3Logs.location`.
	 */
	static logsConfigS3LogsLocation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:logsConfig.s3Logs.location": value } };
	}

	/**
	 * Generates a condition block for `codebuild:logsConfig.s3Logs.status`.
	 */
	static logsConfigS3LogsStatus(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:logsConfig.s3Logs.status": value } };
	}

	/**
	 * Generates a condition block for `codebuild:manualCreation`.
	 */
	static manualCreation(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:manualCreation": value } };
	}

	/**
	 * Generates a condition block for `codebuild:projectArn`.
	 */
	static projectARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "codebuild:projectArn": value } };
	}

	/**
	 * Generates a condition block for `codebuild:projectVisibility`.
	 */
	static projectVisibility(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:projectVisibility": value } };
	}

	/**
	 * Generates a condition block for `codebuild:scopeConfiguration.domain`.
	 */
	static scopeConfigurationDomain(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:scopeConfiguration.domain": value } };
	}

	/**
	 * Generates a condition block for `codebuild:scopeConfiguration.name`.
	 */
	static scopeConfigurationName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:scopeConfiguration.name": value } };
	}

	/**
	 * Generates a condition block for `codebuild:scopeConfiguration.scope`.
	 */
	static scopeConfigurationScope(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:scopeConfiguration.scope": value } };
	}

	/**
	 * Generates a condition block for `codebuild:secondaryArtifacts`.
	 */
	static secondaryArtifacts(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:secondaryArtifacts": value } };
	}

	/**
	 * Generates a condition block for `codebuild:secondaryArtifacts.artifactIdentifier`.
	 */
	static secondaryArtifactsArtifactIdentifier(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondaryArtifacts.artifactIdentifier": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondaryArtifacts.bucketOwnerAccess`.
	 */
	static secondaryArtifactsBucketOwnerAccess(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondaryArtifacts.bucketOwnerAccess": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondaryArtifacts.encryptionDisabled`.
	 */
	static secondaryArtifactsEncryptionDisabled(
		values: boolean[],
	): Record<string, Record<string, boolean[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondaryArtifacts.encryptionDisabled": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondaryArtifacts.location`.
	 */
	static secondaryArtifactsLocation(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondaryArtifacts.location": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources`.
	 */
	static secondarySources(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:secondarySources": value } };
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.auth.resource`.
	 */
	static secondarySourcesAuthResource(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondarySources.auth.resource": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.auth.type`.
	 */
	static secondarySourcesAuthType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondarySources.auth.type": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.buildStatusConfig.context`.
	 */
	static secondarySourcesBuildStatusConfigContext(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondarySources.buildStatusConfig.context": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.buildStatusConfig.targetUrl`.
	 */
	static secondarySourcesBuildStatusConfigTargetURL(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondarySources.buildStatusConfig.targetUrl": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.buildspec`.
	 */
	static secondarySourcesBuildspec(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:secondarySources.buildspec": value } };
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.insecureSsl`.
	 */
	static secondarySourcesInsecureSSL(
		values: boolean[],
	): Record<string, Record<string, boolean[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondarySources.insecureSsl": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.location`.
	 */
	static secondarySourcesLocation(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondarySources.location": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:secondarySources.sourceIdentifier`.
	 */
	static secondarySourcesSourceIdentifier(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:secondarySources.sourceIdentifier": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:serverType`.
	 */
	static serverType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:serverType": value } };
	}

	/**
	 * Generates a condition block for `codebuild:serviceRole`.
	 */
	static serviceRole(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:serviceRole": value } };
	}

	/**
	 * Generates a condition block for `codebuild:shouldOverwrite`.
	 */
	static shouldOverwrite(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:shouldOverwrite": value } };
	}

	/**
	 * Generates a condition block for `codebuild:source`.
	 */
	static source(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:source": value } };
	}

	/**
	 * Generates a condition block for `codebuild:source.auth.resource`.
	 */
	static sourceAuthResource(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:source.auth.resource": value } };
	}

	/**
	 * Generates a condition block for `codebuild:source.auth.type`.
	 */
	static sourceAuthType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:source.auth.type": value } };
	}

	/**
	 * Generates a condition block for `codebuild:source.buildStatusConfig.context`.
	 */
	static sourceBuildStatusConfigContext(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:source.buildStatusConfig.context": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:source.buildStatusConfig.targetUrl`.
	 */
	static sourceBuildStatusConfigTargetURL(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "codebuild:source.buildStatusConfig.targetUrl": value },
		};
	}

	/**
	 * Generates a condition block for `codebuild:source.buildspec`.
	 */
	static sourceBuildspec(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:source.buildspec": value } };
	}

	/**
	 * Generates a condition block for `codebuild:source.insecureSsl`.
	 */
	static sourceInsecureSSL(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:source.insecureSsl": value } };
	}

	/**
	 * Generates a condition block for `codebuild:source.location`.
	 */
	static sourceLocation(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:source.location": value } };
	}

	/**
	 * Generates a condition block for `codebuild:token`.
	 */
	static token(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:token": value } };
	}

	/**
	 * Generates a condition block for `codebuild:username`.
	 */
	static username(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:username": value } };
	}

	/**
	 * Generates a condition block for `codebuild:vpcConfig`.
	 */
	static vpcConfig(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "codebuild:vpcConfig": value } };
	}

	/**
	 * Generates a condition block for `codebuild:vpcConfig.securityGroupIds`.
	 */
	static vpcConfigSecurityGroupIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"codebuild:vpcConfig.securityGroupIds": values,
			},
		};
	}

	/**
	 * Generates a condition block for `codebuild:vpcConfig.subnets`.
	 */
	static vpcConfigSubnets(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "codebuild:vpcConfig.subnets": values },
		};
	}

	/**
	 * Generates a condition block for `codebuild:vpcConfig.vpcId`.
	 */
	static vpcConfigVPCId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codebuild:vpcConfig.vpcId": value } };
	}
}
