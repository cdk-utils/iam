// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mgh.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mgh service.
 */
export class MghActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mgh";

	/** [Write] mgh:AcceptConnection */
	static readonly AcceptConnection = "mgh:AcceptConnection";
	/** [Write] mgh:AssociateAutomationUnitRole */
	static readonly AssociateAutomationUnitRole =
		"mgh:AssociateAutomationUnitRole";
	/** [Write] mgh:AssociateCreatedArtifact */
	static readonly AssociateCreatedArtifact = "mgh:AssociateCreatedArtifact";
	/** [Write] mgh:AssociateDiscoveredResource */
	static readonly AssociateDiscoveredResource =
		"mgh:AssociateDiscoveredResource";
	/** [Write] mgh:AssociateSourceResource */
	static readonly AssociateSourceResource = "mgh:AssociateSourceResource";
	/** [Write] mgh:BatchAssociateIamRoleWithConnection */
	static readonly BatchAssociateIamRoleWithConnection =
		"mgh:BatchAssociateIamRoleWithConnection";
	/** [Write] mgh:BatchDisassociateIamRoleFromConnection */
	static readonly BatchDisassociateIamRoleFromConnection =
		"mgh:BatchDisassociateIamRoleFromConnection";
	/** [Write] mgh:CreateAutomationRun */
	static readonly CreateAutomationRun = "mgh:CreateAutomationRun";
	/** [Write] mgh:CreateAutomationUnit */
	static readonly CreateAutomationUnit = "mgh:CreateAutomationUnit";
	/** [Write] mgh:CreateHomeRegionControl */
	static readonly CreateHomeRegionControl = "mgh:CreateHomeRegionControl";
	/** [Write] mgh:CreateProgressUpdateStream */
	static readonly CreateProgressUpdateStream = "mgh:CreateProgressUpdateStream";
	/** [Write] mgh:DeleteAutomationRun */
	static readonly DeleteAutomationRun = "mgh:DeleteAutomationRun";
	/** [Write] mgh:DeleteAutomationUnit */
	static readonly DeleteAutomationUnit = "mgh:DeleteAutomationUnit";
	/** [Write] mgh:DeleteConnection */
	static readonly DeleteConnection = "mgh:DeleteConnection";
	/** [Write] mgh:DeleteHomeRegionControl */
	static readonly DeleteHomeRegionControl = "mgh:DeleteHomeRegionControl";
	/** [Write] mgh:DeleteProgressUpdateStream */
	static readonly DeleteProgressUpdateStream = "mgh:DeleteProgressUpdateStream";
	/** [Read] mgh:DescribeApplicationState */
	static readonly DescribeApplicationState = "mgh:DescribeApplicationState";
	/** [Read] mgh:DescribeAutomationRun */
	static readonly DescribeAutomationRun = "mgh:DescribeAutomationRun";
	/** [Read] mgh:DescribeAutomationUnit */
	static readonly DescribeAutomationUnit = "mgh:DescribeAutomationUnit";
	/** [List] mgh:DescribeHomeRegionControls */
	static readonly DescribeHomeRegionControls = "mgh:DescribeHomeRegionControls";
	/** [Read] mgh:DescribeMigrationTask */
	static readonly DescribeMigrationTask = "mgh:DescribeMigrationTask";
	/** [Write] mgh:DisassociateAutomationUnitRole */
	static readonly DisassociateAutomationUnitRole =
		"mgh:DisassociateAutomationUnitRole";
	/** [Write] mgh:DisassociateCreatedArtifact */
	static readonly DisassociateCreatedArtifact =
		"mgh:DisassociateCreatedArtifact";
	/** [Write] mgh:DisassociateDiscoveredResource */
	static readonly DisassociateDiscoveredResource =
		"mgh:DisassociateDiscoveredResource";
	/** [Write] mgh:DisassociateSourceResource */
	static readonly DisassociateSourceResource = "mgh:DisassociateSourceResource";
	/** [Read] mgh:GetConnection */
	static readonly actionGetConnection = "mgh:GetConnection";
	/** [Read] mgh:GetHomeRegion */
	static readonly actionGetHomeRegion = "mgh:GetHomeRegion";
	/** [Write] mgh:ImportMigrationTask */
	static readonly ImportMigrationTask = "mgh:ImportMigrationTask";
	/** [List] mgh:ListApplicationStates */
	static readonly ListApplicationStates = "mgh:ListApplicationStates";
	/** [List] mgh:ListAutomationRuns */
	static readonly ListAutomationRuns = "mgh:ListAutomationRuns";
	/** [List] mgh:ListAutomationUnits */
	static readonly ListAutomationUnits = "mgh:ListAutomationUnits";
	/** [List] mgh:ListConnectionRoles */
	static readonly ListConnectionRoles = "mgh:ListConnectionRoles";
	/** [List] mgh:ListConnections */
	static readonly ListConnections = "mgh:ListConnections";
	/** [List] mgh:ListCreatedArtifacts */
	static readonly ListCreatedArtifacts = "mgh:ListCreatedArtifacts";
	/** [List] mgh:ListDiscoveredResources */
	static readonly ListDiscoveredResources = "mgh:ListDiscoveredResources";
	/** [List] mgh:ListMigrationTaskUpdates */
	static readonly ListMigrationTaskUpdates = "mgh:ListMigrationTaskUpdates";
	/** [List] mgh:ListMigrationTasks */
	static readonly ListMigrationTasks = "mgh:ListMigrationTasks";
	/** [List] mgh:ListProgressUpdateStreams */
	static readonly ListProgressUpdateStreams = "mgh:ListProgressUpdateStreams";
	/** [List] mgh:ListSourceResources */
	static readonly ListSourceResources = "mgh:ListSourceResources";
	/** [List] mgh:ListTagsForResource */
	static readonly ListTagsForResource = "mgh:ListTagsForResource";
	/** [Write] mgh:NotifyApplicationState */
	static readonly NotifyApplicationState = "mgh:NotifyApplicationState";
	/** [Write] mgh:NotifyMigrationTaskState */
	static readonly NotifyMigrationTaskState = "mgh:NotifyMigrationTaskState";
	/** [Write] mgh:PutResourceAttributes */
	static readonly PutResourceAttributes = "mgh:PutResourceAttributes";
	/** [Write] mgh:RejectConnection */
	static readonly RejectConnection = "mgh:RejectConnection";
	/** [Tagging] mgh:TagResource */
	static readonly TagResource = "mgh:TagResource";
	/** [Tagging] mgh:UntagResource */
	static readonly UntagResource = "mgh:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MghActions.DescribeApplicationState,
		MghActions.DescribeAutomationRun,
		MghActions.DescribeAutomationUnit,
		MghActions.DescribeMigrationTask,
		MghActions.actionGetConnection,
		MghActions.actionGetHomeRegion,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MghActions.AcceptConnection,
		MghActions.AssociateAutomationUnitRole,
		MghActions.AssociateCreatedArtifact,
		MghActions.AssociateDiscoveredResource,
		MghActions.AssociateSourceResource,
		MghActions.BatchAssociateIamRoleWithConnection,
		MghActions.BatchDisassociateIamRoleFromConnection,
		MghActions.CreateAutomationRun,
		MghActions.CreateAutomationUnit,
		MghActions.CreateHomeRegionControl,
		MghActions.CreateProgressUpdateStream,
		MghActions.DeleteAutomationRun,
		MghActions.DeleteAutomationUnit,
		MghActions.DeleteConnection,
		MghActions.DeleteHomeRegionControl,
		MghActions.DeleteProgressUpdateStream,
		MghActions.DisassociateAutomationUnitRole,
		MghActions.DisassociateCreatedArtifact,
		MghActions.DisassociateDiscoveredResource,
		MghActions.DisassociateSourceResource,
		MghActions.ImportMigrationTask,
		MghActions.NotifyApplicationState,
		MghActions.NotifyMigrationTaskState,
		MghActions.PutResourceAttributes,
		MghActions.RejectConnection,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MghActions.DescribeHomeRegionControls,
		MghActions.ListApplicationStates,
		MghActions.ListAutomationRuns,
		MghActions.ListAutomationUnits,
		MghActions.ListConnectionRoles,
		MghActions.ListConnections,
		MghActions.ListCreatedArtifacts,
		MghActions.ListDiscoveredResources,
		MghActions.ListMigrationTaskUpdates,
		MghActions.ListMigrationTasks,
		MghActions.ListProgressUpdateStreams,
		MghActions.ListSourceResources,
		MghActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MghActions.TagResource,
		MghActions.UntagResource,
	];
}

/**
 * Properties for building a AutomationRunResource ARN.
 */
export interface MghAutomationRunResourceArnProps {
	/** The RunID component of the ARN. */
	readonly runId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AutomationRunResource ARN.
 */
export interface MghAutomationRunResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RunID component. */
	readonly runId: string;
}

/**
 * Properties for building a AutomationUnitResource ARN.
 */
export interface MghAutomationUnitResourceArnProps {
	/** The AutomationUnitId component of the ARN. */
	readonly automationUnitId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a AutomationUnitResource ARN.
 */
export interface MghAutomationUnitResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutomationUnitId component. */
	readonly automationUnitId: string;
}

/**
 * Properties for building a ConnectionResource ARN.
 */
export interface MghConnectionResourceArnProps {
	/** The ConnectionArn component of the ARN. */
	readonly connectionARN: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ConnectionResource ARN.
 */
export interface MghConnectionResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionArn component. */
	readonly connectionARN: string;
}

/**
 * Properties for building a migrationTask ARN.
 */
export interface MghMigrationTaskArnProps {
	/** The Stream component of the ARN. */
	readonly stream: string;
	/** The Task component of the ARN. */
	readonly task: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a migrationTask ARN.
 */
export interface MghMigrationTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Stream component. */
	readonly stream: string;
	/** The Task component. */
	readonly task: string;
}

/**
 * Properties for building a progressUpdateStream ARN.
 */
export interface MghProgressUpdateStreamArnProps {
	/** The Stream component of the ARN. */
	readonly stream: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a progressUpdateStream ARN.
 */
export interface MghProgressUpdateStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Stream component. */
	readonly stream: string;
}

const AutomationRunResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):automation-run\/(?<runId>[^:/?]+)$/;
const AutomationUnitResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):automation-unit\/(?<automationUnitId>[^:/?]+)$/;
const ConnectionResourceArnRegex =
	/^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):(?<connectionARN>[^:/?]+)$/;
const MigrationTaskArnRegex =
	/^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):progressUpdateStream\/(?<stream>[^:/?]+)\/migrationTask\/(?<task>[^:/?]+)$/;
const ProgressUpdateStreamArnRegex =
	/^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):progressUpdateStream\/(?<stream>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mgh resources.
 */
export class MghResources {
	/**
	 * Builds an ARN for the AutomationRunResource resource.
	 */
	static automationRunResource(
		props: MghAutomationRunResourceArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:mgh:${props.region ?? "*"}:${props.account ?? "*"}:automation-run/${props.runId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AutomationRunResource resource.
	 */
	static isValidAutomationRunResourceArn(arn: string): boolean {
		return AutomationRunResourceArnRegex.test(arn);
	}

	/**
	 * Parses a AutomationRunResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationRunResourceArn(
		arn: string,
	): MghAutomationRunResourceArnComponents {
		const match = AutomationRunResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AutomationRunResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			runId: match.groups!.runId,
		};
	}

	/**
	 * Builds an ARN for the AutomationUnitResource resource.
	 */
	static automationUnitResource(
		props: MghAutomationUnitResourceArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:mgh:${props.region ?? "*"}:${props.account ?? "*"}:automation-unit/${props.automationUnitId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AutomationUnitResource resource.
	 */
	static isValidAutomationUnitResourceArn(arn: string): boolean {
		return AutomationUnitResourceArnRegex.test(arn);
	}

	/**
	 * Parses a AutomationUnitResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationUnitResourceArn(
		arn: string,
	): MghAutomationUnitResourceArnComponents {
		const match = AutomationUnitResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AutomationUnitResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automationUnitId: match.groups!.automationUnitId,
		};
	}

	/**
	 * Builds an ARN for the ConnectionResource resource.
	 */
	static connectionResource(props: MghConnectionResourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:mgh:${props.region ?? "*"}:${props.account ?? "*"}:${props.connectionARN}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConnectionResource resource.
	 */
	static isValidConnectionResourceArn(arn: string): boolean {
		return ConnectionResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ConnectionResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionResourceArn(
		arn: string,
	): MghConnectionResourceArnComponents {
		const match = ConnectionResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConnectionResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionARN: match.groups!.connectionARN,
		};
	}

	/**
	 * Builds an ARN for the migrationTask resource.
	 */
	static migrationTask(props: MghMigrationTaskArnProps): string {
		return `arn:${props.partition ?? "aws"}:mgh:${props.region ?? "*"}:${props.account ?? "*"}:progressUpdateStream/${props.stream}/migrationTask/${props.task}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the migrationTask resource.
	 */
	static isValidMigrationTaskArn(arn: string): boolean {
		return MigrationTaskArnRegex.test(arn);
	}

	/**
	 * Parses a migrationTask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMigrationTaskArn(arn: string): MghMigrationTaskArnComponents {
		const match = MigrationTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid migrationTask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stream: match.groups!.stream,
			task: match.groups!.task,
		};
	}

	/**
	 * Builds an ARN for the progressUpdateStream resource.
	 */
	static progressUpdateStream(props: MghProgressUpdateStreamArnProps): string {
		return `arn:${props.partition ?? "aws"}:mgh:${props.region ?? "*"}:${props.account ?? "*"}:progressUpdateStream/${props.stream}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the progressUpdateStream resource.
	 */
	static isValidProgressUpdateStreamArn(arn: string): boolean {
		return ProgressUpdateStreamArnRegex.test(arn);
	}

	/**
	 * Parses a progressUpdateStream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProgressUpdateStreamArn(
		arn: string,
	): MghProgressUpdateStreamArnComponents {
		const match = ProgressUpdateStreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid progressUpdateStream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stream: match.groups!.stream,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mgh.
 */
export class MghOperations {
	/** IAM actions required for the AssociateCreatedArtifact API call. */
	static readonly AssociateCreatedArtifact: string[] = [
		"mgh:AssociateCreatedArtifact",
	];
	/** IAM actions required for the AssociateDiscoveredResource API call. */
	static readonly AssociateDiscoveredResource: string[] = [
		"mgh:AssociateDiscoveredResource",
	];
	/** IAM actions required for the AssociateSourceResource API call. */
	static readonly AssociateSourceResource: string[] = [
		"mgh:AssociateSourceResource",
	];
	/** IAM actions required for the CreateHomeRegionControl API call. */
	static readonly CreateHomeRegionControl: string[] = [
		"mgh:CreateHomeRegionControl",
	];
	/** IAM actions required for the CreateProgressUpdateStream API call. */
	static readonly CreateProgressUpdateStream: string[] = [
		"mgh:CreateProgressUpdateStream",
	];
	/** IAM actions required for the DeleteHomeRegionControl API call. */
	static readonly DeleteHomeRegionControl: string[] = [
		"mgh:DeleteHomeRegionControl",
	];
	/** IAM actions required for the DeleteProgressUpdateStream API call. */
	static readonly DeleteProgressUpdateStream: string[] = [
		"mgh:DeleteProgressUpdateStream",
	];
	/** IAM actions required for the DescribeApplicationState API call. */
	static readonly DescribeApplicationState: string[] = [
		"mgh:DescribeApplicationState",
	];
	/** IAM actions required for the DescribeHomeRegionControls API call. */
	static readonly DescribeHomeRegionControls: string[] = [
		"mgh:DescribeHomeRegionControls",
	];
	/** IAM actions required for the DescribeMigrationTask API call. */
	static readonly DescribeMigrationTask: string[] = [
		"mgh:DescribeMigrationTask",
	];
	/** IAM actions required for the DisassociateCreatedArtifact API call. */
	static readonly DisassociateCreatedArtifact: string[] = [
		"mgh:DisassociateCreatedArtifact",
	];
	/** IAM actions required for the DisassociateDiscoveredResource API call. */
	static readonly DisassociateDiscoveredResource: string[] = [
		"mgh:DisassociateDiscoveredResource",
	];
	/** IAM actions required for the DisassociateSourceResource API call. */
	static readonly DisassociateSourceResource: string[] = [
		"mgh:DisassociateSourceResource",
	];
	/** IAM actions required for the GetHomeRegion API call. */
	static readonly opGetHomeRegion: string[] = ["mgh:GetHomeRegion"];
	/** IAM actions required for the ImportMigrationTask API call. */
	static readonly ImportMigrationTask: string[] = ["mgh:ImportMigrationTask"];
	/** IAM actions required for the ListApplicationStates API call. */
	static readonly ListApplicationStates: string[] = [
		"mgh:ListApplicationStates",
	];
	/** IAM actions required for the ListCreatedArtifacts API call. */
	static readonly ListCreatedArtifacts: string[] = ["mgh:ListCreatedArtifacts"];
	/** IAM actions required for the ListDiscoveredResources API call. */
	static readonly ListDiscoveredResources: string[] = [
		"mgh:ListDiscoveredResources",
	];
	/** IAM actions required for the ListMigrationTaskUpdates API call. */
	static readonly ListMigrationTaskUpdates: string[] = [
		"mgh:ListMigrationTaskUpdates",
	];
	/** IAM actions required for the ListMigrationTasks API call. */
	static readonly ListMigrationTasks: string[] = ["mgh:ListMigrationTasks"];
	/** IAM actions required for the ListProgressUpdateStreams API call. */
	static readonly ListProgressUpdateStreams: string[] = [
		"mgh:ListProgressUpdateStreams",
	];
	/** IAM actions required for the ListSourceResources API call. */
	static readonly ListSourceResources: string[] = ["mgh:ListSourceResources"];
	/** IAM actions required for the NotifyApplicationState API call. */
	static readonly NotifyApplicationState: string[] = [
		"mgh:NotifyApplicationState",
	];
	/** IAM actions required for the NotifyMigrationTaskState API call. */
	static readonly NotifyMigrationTaskState: string[] = [
		"mgh:NotifyMigrationTaskState",
	];
	/** IAM actions required for the PutResourceAttributes API call. */
	static readonly PutResourceAttributes: string[] = [
		"mgh:PutResourceAttributes",
	];
}

/**
 * Condition key constants and builders for mgh.
 */
export class MghConditions {
	/** Condition keys applicable to the AcceptConnection action. */
	static readonly AcceptConnectionConditionKeys: string[] = [
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
	/** Condition key: mgh:AutomationRunResourceRunID (String) */
	static readonly AUTOMATION_RUN_RESOURCE_RUN_ID =
		"mgh:AutomationRunResourceRunID";
	/** Condition key: mgh:AutomationUnitResourceAutomationUnitArn (ARN) */
	static readonly AUTOMATION_UNIT_RESOURCE_AUTOMATION_UNIT_ARN =
		"mgh:AutomationUnitResourceAutomationUnitArn";
	/** Condition key: mgh:ConnectionResourceConnectionArn (String) */
	static readonly CONNECTION_RESOURCE_CONNECTION_ARN =
		"mgh:ConnectionResourceConnectionArn";

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
	 * Generates a condition block for `mgh:AutomationRunResourceRunID`.
	 */
	static automationRunResourceRunId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "mgh:AutomationRunResourceRunID": value } };
	}

	/**
	 * Generates a condition block for `mgh:AutomationUnitResourceAutomationUnitArn`.
	 */
	static automationUnitResourceAutomationUnitARN(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			ArnEquals: { "mgh:AutomationUnitResourceAutomationUnitArn": value },
		};
	}

	/**
	 * Generates a condition block for `mgh:ConnectionResourceConnectionArn`.
	 */
	static connectionResourceConnectionARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "mgh:ConnectionResourceConnectionArn": value } };
	}
}
