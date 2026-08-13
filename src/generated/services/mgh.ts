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
	static readonly ACCEPT_CONNECTION = "mgh:AcceptConnection";
	/** [Write] mgh:AssociateAutomationUnitRole */
	static readonly ASSOCIATE_AUTOMATION_UNIT_ROLE =
		"mgh:AssociateAutomationUnitRole";
	/** [Write] mgh:AssociateCreatedArtifact */
	static readonly ASSOCIATE_CREATED_ARTIFACT = "mgh:AssociateCreatedArtifact";
	/** [Write] mgh:AssociateDiscoveredResource */
	static readonly ASSOCIATE_DISCOVERED_RESOURCE =
		"mgh:AssociateDiscoveredResource";
	/** [Write] mgh:AssociateSourceResource */
	static readonly ASSOCIATE_SOURCE_RESOURCE = "mgh:AssociateSourceResource";
	/** [Write] mgh:BatchAssociateIamRoleWithConnection */
	static readonly BATCH_ASSOCIATE_IAM_ROLE_WITH_CONNECTION =
		"mgh:BatchAssociateIamRoleWithConnection";
	/** [Write] mgh:BatchDisassociateIamRoleFromConnection */
	static readonly BATCH_DISASSOCIATE_IAM_ROLE_FROM_CONNECTION =
		"mgh:BatchDisassociateIamRoleFromConnection";
	/** [Write] mgh:CreateAutomationRun */
	static readonly CREATE_AUTOMATION_RUN = "mgh:CreateAutomationRun";
	/** [Write] mgh:CreateAutomationUnit */
	static readonly CREATE_AUTOMATION_UNIT = "mgh:CreateAutomationUnit";
	/** [Write] mgh:CreateHomeRegionControl */
	static readonly CREATE_HOME_REGION_CONTROL = "mgh:CreateHomeRegionControl";
	/** [Write] mgh:CreateProgressUpdateStream */
	static readonly CREATE_PROGRESS_UPDATE_STREAM =
		"mgh:CreateProgressUpdateStream";
	/** [Write] mgh:DeleteAutomationRun */
	static readonly DELETE_AUTOMATION_RUN = "mgh:DeleteAutomationRun";
	/** [Write] mgh:DeleteAutomationUnit */
	static readonly DELETE_AUTOMATION_UNIT = "mgh:DeleteAutomationUnit";
	/** [Write] mgh:DeleteConnection */
	static readonly DELETE_CONNECTION = "mgh:DeleteConnection";
	/** [Write] mgh:DeleteHomeRegionControl */
	static readonly DELETE_HOME_REGION_CONTROL = "mgh:DeleteHomeRegionControl";
	/** [Write] mgh:DeleteProgressUpdateStream */
	static readonly DELETE_PROGRESS_UPDATE_STREAM =
		"mgh:DeleteProgressUpdateStream";
	/** [Read] mgh:DescribeApplicationState */
	static readonly DESCRIBE_APPLICATION_STATE = "mgh:DescribeApplicationState";
	/** [Read] mgh:DescribeAutomationRun */
	static readonly DESCRIBE_AUTOMATION_RUN = "mgh:DescribeAutomationRun";
	/** [Read] mgh:DescribeAutomationUnit */
	static readonly DESCRIBE_AUTOMATION_UNIT = "mgh:DescribeAutomationUnit";
	/** [List] mgh:DescribeHomeRegionControls */
	static readonly DESCRIBE_HOME_REGION_CONTROLS =
		"mgh:DescribeHomeRegionControls";
	/** [Read] mgh:DescribeMigrationTask */
	static readonly DESCRIBE_MIGRATION_TASK = "mgh:DescribeMigrationTask";
	/** [Write] mgh:DisassociateAutomationUnitRole */
	static readonly DISASSOCIATE_AUTOMATION_UNIT_ROLE =
		"mgh:DisassociateAutomationUnitRole";
	/** [Write] mgh:DisassociateCreatedArtifact */
	static readonly DISASSOCIATE_CREATED_ARTIFACT =
		"mgh:DisassociateCreatedArtifact";
	/** [Write] mgh:DisassociateDiscoveredResource */
	static readonly DISASSOCIATE_DISCOVERED_RESOURCE =
		"mgh:DisassociateDiscoveredResource";
	/** [Write] mgh:DisassociateSourceResource */
	static readonly DISASSOCIATE_SOURCE_RESOURCE =
		"mgh:DisassociateSourceResource";
	/** [Read] mgh:GetConnection */
	static readonly GET_CONNECTION = "mgh:GetConnection";
	/** [Read] mgh:GetHomeRegion */
	static readonly GET_HOME_REGION = "mgh:GetHomeRegion";
	/** [Write] mgh:ImportMigrationTask */
	static readonly IMPORT_MIGRATION_TASK = "mgh:ImportMigrationTask";
	/** [List] mgh:ListApplicationStates */
	static readonly LIST_APPLICATION_STATES = "mgh:ListApplicationStates";
	/** [List] mgh:ListAutomationRuns */
	static readonly LIST_AUTOMATION_RUNS = "mgh:ListAutomationRuns";
	/** [List] mgh:ListAutomationUnits */
	static readonly LIST_AUTOMATION_UNITS = "mgh:ListAutomationUnits";
	/** [List] mgh:ListConnectionRoles */
	static readonly LIST_CONNECTION_ROLES = "mgh:ListConnectionRoles";
	/** [List] mgh:ListConnections */
	static readonly LIST_CONNECTIONS = "mgh:ListConnections";
	/** [List] mgh:ListCreatedArtifacts */
	static readonly LIST_CREATED_ARTIFACTS = "mgh:ListCreatedArtifacts";
	/** [List] mgh:ListDiscoveredResources */
	static readonly LIST_DISCOVERED_RESOURCES = "mgh:ListDiscoveredResources";
	/** [List] mgh:ListMigrationTaskUpdates */
	static readonly LIST_MIGRATION_TASK_UPDATES = "mgh:ListMigrationTaskUpdates";
	/** [List] mgh:ListMigrationTasks */
	static readonly LIST_MIGRATION_TASKS = "mgh:ListMigrationTasks";
	/** [List] mgh:ListProgressUpdateStreams */
	static readonly LIST_PROGRESS_UPDATE_STREAMS =
		"mgh:ListProgressUpdateStreams";
	/** [List] mgh:ListSourceResources */
	static readonly LIST_SOURCE_RESOURCES = "mgh:ListSourceResources";
	/** [List] mgh:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mgh:ListTagsForResource";
	/** [Write] mgh:NotifyApplicationState */
	static readonly NOTIFY_APPLICATION_STATE = "mgh:NotifyApplicationState";
	/** [Write] mgh:NotifyMigrationTaskState */
	static readonly NOTIFY_MIGRATION_TASK_STATE = "mgh:NotifyMigrationTaskState";
	/** [Write] mgh:PutResourceAttributes */
	static readonly PUT_RESOURCE_ATTRIBUTES = "mgh:PutResourceAttributes";
	/** [Write] mgh:RejectConnection */
	static readonly REJECT_CONNECTION = "mgh:RejectConnection";
	/** [Tagging] mgh:TagResource */
	static readonly TAG_RESOURCE = "mgh:TagResource";
	/** [Tagging] mgh:UntagResource */
	static readonly UNTAG_RESOURCE = "mgh:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MghActions.DESCRIBE_APPLICATION_STATE,
		MghActions.DESCRIBE_AUTOMATION_RUN,
		MghActions.DESCRIBE_AUTOMATION_UNIT,
		MghActions.DESCRIBE_MIGRATION_TASK,
		MghActions.GET_CONNECTION,
		MghActions.GET_HOME_REGION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MghActions.ACCEPT_CONNECTION,
		MghActions.ASSOCIATE_AUTOMATION_UNIT_ROLE,
		MghActions.ASSOCIATE_CREATED_ARTIFACT,
		MghActions.ASSOCIATE_DISCOVERED_RESOURCE,
		MghActions.ASSOCIATE_SOURCE_RESOURCE,
		MghActions.BATCH_ASSOCIATE_IAM_ROLE_WITH_CONNECTION,
		MghActions.BATCH_DISASSOCIATE_IAM_ROLE_FROM_CONNECTION,
		MghActions.CREATE_AUTOMATION_RUN,
		MghActions.CREATE_AUTOMATION_UNIT,
		MghActions.CREATE_HOME_REGION_CONTROL,
		MghActions.CREATE_PROGRESS_UPDATE_STREAM,
		MghActions.DELETE_AUTOMATION_RUN,
		MghActions.DELETE_AUTOMATION_UNIT,
		MghActions.DELETE_CONNECTION,
		MghActions.DELETE_HOME_REGION_CONTROL,
		MghActions.DELETE_PROGRESS_UPDATE_STREAM,
		MghActions.DISASSOCIATE_AUTOMATION_UNIT_ROLE,
		MghActions.DISASSOCIATE_CREATED_ARTIFACT,
		MghActions.DISASSOCIATE_DISCOVERED_RESOURCE,
		MghActions.DISASSOCIATE_SOURCE_RESOURCE,
		MghActions.IMPORT_MIGRATION_TASK,
		MghActions.NOTIFY_APPLICATION_STATE,
		MghActions.NOTIFY_MIGRATION_TASK_STATE,
		MghActions.PUT_RESOURCE_ATTRIBUTES,
		MghActions.REJECT_CONNECTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MghActions.DESCRIBE_HOME_REGION_CONTROLS,
		MghActions.LIST_APPLICATION_STATES,
		MghActions.LIST_AUTOMATION_RUNS,
		MghActions.LIST_AUTOMATION_UNITS,
		MghActions.LIST_CONNECTION_ROLES,
		MghActions.LIST_CONNECTIONS,
		MghActions.LIST_CREATED_ARTIFACTS,
		MghActions.LIST_DISCOVERED_RESOURCES,
		MghActions.LIST_MIGRATION_TASK_UPDATES,
		MghActions.LIST_MIGRATION_TASKS,
		MghActions.LIST_PROGRESS_UPDATE_STREAMS,
		MghActions.LIST_SOURCE_RESOURCES,
		MghActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MghActions.TAG_RESOURCE,
		MghActions.UNTAG_RESOURCE,
	];
}

const AutomationRunResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):automation-run/(?<runId>[^:/?]+)$",
);
const AutomationUnitResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):automation-unit/(?<automationUnitId>[^:/?]+)$",
);
const ConnectionResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):(?<connectionARN>[^:/?]+)$",
);
const MigrationTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):progressUpdateStream/(?<stream>[^:/?]+)/migrationTask/(?<task>[^:/?]+)$",
);
const ProgressUpdateStreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mgh:(?<region>[^:]*):(?<account>[^:]*):progressUpdateStream/(?<stream>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mgh resources.
 */
export class MghResources {
	/**
	 * Builds an ARN for the AutomationRunResource resource.
	 */
	static automationRunResource(props: {
		/** The RunID component of the ARN. */
		readonly runId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAutomationRunResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		runId: string;
	} {
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
	static automationUnitResource(props: {
		/** The AutomationUnitId component of the ARN. */
		readonly automationUnitId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAutomationUnitResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		automationUnitId: string;
	} {
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
	static connectionResource(props: {
		/** The ConnectionArn component of the ARN. */
		readonly connectionARN: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectionResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionARN: string;
	} {
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
	static migrationTask(props: {
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
	}): string {
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
	static parseMigrationTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stream: string;
		task: string;
	} {
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
	static progressUpdateStream(props: {
		/** The Stream component of the ARN. */
		readonly stream: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProgressUpdateStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stream: string;
	} {
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
	static readonly ASSOCIATE_CREATED_ARTIFACT: string[] = [
		"mgh:AssociateCreatedArtifact",
	];
	/** IAM actions required for the AssociateDiscoveredResource API call. */
	static readonly ASSOCIATE_DISCOVERED_RESOURCE: string[] = [
		"mgh:AssociateDiscoveredResource",
	];
	/** IAM actions required for the AssociateSourceResource API call. */
	static readonly ASSOCIATE_SOURCE_RESOURCE: string[] = [
		"mgh:AssociateSourceResource",
	];
	/** IAM actions required for the CreateHomeRegionControl API call. */
	static readonly CREATE_HOME_REGION_CONTROL: string[] = [
		"mgh:CreateHomeRegionControl",
	];
	/** IAM actions required for the CreateProgressUpdateStream API call. */
	static readonly CREATE_PROGRESS_UPDATE_STREAM: string[] = [
		"mgh:CreateProgressUpdateStream",
	];
	/** IAM actions required for the DeleteHomeRegionControl API call. */
	static readonly DELETE_HOME_REGION_CONTROL: string[] = [
		"mgh:DeleteHomeRegionControl",
	];
	/** IAM actions required for the DeleteProgressUpdateStream API call. */
	static readonly DELETE_PROGRESS_UPDATE_STREAM: string[] = [
		"mgh:DeleteProgressUpdateStream",
	];
	/** IAM actions required for the DescribeApplicationState API call. */
	static readonly DESCRIBE_APPLICATION_STATE: string[] = [
		"mgh:DescribeApplicationState",
	];
	/** IAM actions required for the DescribeHomeRegionControls API call. */
	static readonly DESCRIBE_HOME_REGION_CONTROLS: string[] = [
		"mgh:DescribeHomeRegionControls",
	];
	/** IAM actions required for the DescribeMigrationTask API call. */
	static readonly DESCRIBE_MIGRATION_TASK: string[] = [
		"mgh:DescribeMigrationTask",
	];
	/** IAM actions required for the DisassociateCreatedArtifact API call. */
	static readonly DISASSOCIATE_CREATED_ARTIFACT: string[] = [
		"mgh:DisassociateCreatedArtifact",
	];
	/** IAM actions required for the DisassociateDiscoveredResource API call. */
	static readonly DISASSOCIATE_DISCOVERED_RESOURCE: string[] = [
		"mgh:DisassociateDiscoveredResource",
	];
	/** IAM actions required for the DisassociateSourceResource API call. */
	static readonly DISASSOCIATE_SOURCE_RESOURCE: string[] = [
		"mgh:DisassociateSourceResource",
	];
	/** IAM actions required for the GetHomeRegion API call. */
	static readonly GET_HOME_REGION: string[] = ["mgh:GetHomeRegion"];
	/** IAM actions required for the ImportMigrationTask API call. */
	static readonly IMPORT_MIGRATION_TASK: string[] = ["mgh:ImportMigrationTask"];
	/** IAM actions required for the ListApplicationStates API call. */
	static readonly LIST_APPLICATION_STATES: string[] = [
		"mgh:ListApplicationStates",
	];
	/** IAM actions required for the ListCreatedArtifacts API call. */
	static readonly LIST_CREATED_ARTIFACTS: string[] = [
		"mgh:ListCreatedArtifacts",
	];
	/** IAM actions required for the ListDiscoveredResources API call. */
	static readonly LIST_DISCOVERED_RESOURCES: string[] = [
		"mgh:ListDiscoveredResources",
	];
	/** IAM actions required for the ListMigrationTaskUpdates API call. */
	static readonly LIST_MIGRATION_TASK_UPDATES: string[] = [
		"mgh:ListMigrationTaskUpdates",
	];
	/** IAM actions required for the ListMigrationTasks API call. */
	static readonly LIST_MIGRATION_TASKS: string[] = ["mgh:ListMigrationTasks"];
	/** IAM actions required for the ListProgressUpdateStreams API call. */
	static readonly LIST_PROGRESS_UPDATE_STREAMS: string[] = [
		"mgh:ListProgressUpdateStreams",
	];
	/** IAM actions required for the ListSourceResources API call. */
	static readonly LIST_SOURCE_RESOURCES: string[] = ["mgh:ListSourceResources"];
	/** IAM actions required for the NotifyApplicationState API call. */
	static readonly NOTIFY_APPLICATION_STATE: string[] = [
		"mgh:NotifyApplicationState",
	];
	/** IAM actions required for the NotifyMigrationTaskState API call. */
	static readonly NOTIFY_MIGRATION_TASK_STATE: string[] = [
		"mgh:NotifyMigrationTaskState",
	];
	/** IAM actions required for the PutResourceAttributes API call. */
	static readonly PUT_RESOURCE_ATTRIBUTES: string[] = [
		"mgh:PutResourceAttributes",
	];
}

/**
 * Condition key constants and builders for mgh.
 */
export class MghConditions {
	/** Condition keys applicable to the AcceptConnection action. */
	static readonly ACCEPT_CONNECTION_CONDITION_KEYS: string[] = [
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
