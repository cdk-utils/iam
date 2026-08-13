// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/robomaker.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the robomaker service.
 */
export class RoboMakerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "robomaker";

	/** [Write] robomaker:BatchDeleteWorlds */
	static readonly BATCH_DELETE_WORLDS = "robomaker:BatchDeleteWorlds";
	/** [Read] robomaker:BatchDescribeSimulationJob */
	static readonly BATCH_DESCRIBE_SIMULATION_JOB =
		"robomaker:BatchDescribeSimulationJob";
	/** [Write] robomaker:CancelDeploymentJob */
	static readonly CANCEL_DEPLOYMENT_JOB = "robomaker:CancelDeploymentJob";
	/** [Write] robomaker:CancelSimulationJob */
	static readonly CANCEL_SIMULATION_JOB = "robomaker:CancelSimulationJob";
	/** [Write] robomaker:CancelSimulationJobBatch */
	static readonly CANCEL_SIMULATION_JOB_BATCH =
		"robomaker:CancelSimulationJobBatch";
	/** [Write] robomaker:CancelWorldExportJob */
	static readonly CANCEL_WORLD_EXPORT_JOB = "robomaker:CancelWorldExportJob";
	/** [Write] robomaker:CancelWorldGenerationJob */
	static readonly CANCEL_WORLD_GENERATION_JOB =
		"robomaker:CancelWorldGenerationJob";
	/** [Write] robomaker:CreateDeploymentJob */
	static readonly CREATE_DEPLOYMENT_JOB = "robomaker:CreateDeploymentJob";
	/** [Write] robomaker:CreateFleet */
	static readonly CREATE_FLEET = "robomaker:CreateFleet";
	/** [Write] robomaker:CreateRobot */
	static readonly CREATE_ROBOT = "robomaker:CreateRobot";
	/** [Write] robomaker:CreateRobotApplication */
	static readonly CREATE_ROBOT_APPLICATION = "robomaker:CreateRobotApplication";
	/** [Write] robomaker:CreateRobotApplicationVersion */
	static readonly CREATE_ROBOT_APPLICATION_VERSION =
		"robomaker:CreateRobotApplicationVersion";
	/** [Write] robomaker:CreateSimulationApplication */
	static readonly CREATE_SIMULATION_APPLICATION =
		"robomaker:CreateSimulationApplication";
	/** [Write] robomaker:CreateSimulationApplicationVersion */
	static readonly CREATE_SIMULATION_APPLICATION_VERSION =
		"robomaker:CreateSimulationApplicationVersion";
	/** [Write] robomaker:CreateSimulationJob */
	static readonly CREATE_SIMULATION_JOB = "robomaker:CreateSimulationJob";
	/** [Write] robomaker:CreateWorldExportJob */
	static readonly CREATE_WORLD_EXPORT_JOB = "robomaker:CreateWorldExportJob";
	/** [Write] robomaker:CreateWorldGenerationJob */
	static readonly CREATE_WORLD_GENERATION_JOB =
		"robomaker:CreateWorldGenerationJob";
	/** [Write] robomaker:CreateWorldTemplate */
	static readonly CREATE_WORLD_TEMPLATE = "robomaker:CreateWorldTemplate";
	/** [Write] robomaker:DeleteFleet */
	static readonly DELETE_FLEET = "robomaker:DeleteFleet";
	/** [Write] robomaker:DeleteRobot */
	static readonly DELETE_ROBOT = "robomaker:DeleteRobot";
	/** [Write] robomaker:DeleteRobotApplication */
	static readonly DELETE_ROBOT_APPLICATION = "robomaker:DeleteRobotApplication";
	/** [Write] robomaker:DeleteSimulationApplication */
	static readonly DELETE_SIMULATION_APPLICATION =
		"robomaker:DeleteSimulationApplication";
	/** [Write] robomaker:DeleteWorldTemplate */
	static readonly DELETE_WORLD_TEMPLATE = "robomaker:DeleteWorldTemplate";
	/** [Write] robomaker:DeregisterRobot */
	static readonly DEREGISTER_ROBOT = "robomaker:DeregisterRobot";
	/** [Read] robomaker:DescribeDeploymentJob */
	static readonly DESCRIBE_DEPLOYMENT_JOB = "robomaker:DescribeDeploymentJob";
	/** [Read] robomaker:DescribeFleet */
	static readonly DESCRIBE_FLEET = "robomaker:DescribeFleet";
	/** [Read] robomaker:DescribeRobot */
	static readonly DESCRIBE_ROBOT = "robomaker:DescribeRobot";
	/** [Read] robomaker:DescribeRobotApplication */
	static readonly DESCRIBE_ROBOT_APPLICATION =
		"robomaker:DescribeRobotApplication";
	/** [Read] robomaker:DescribeSimulationApplication */
	static readonly DESCRIBE_SIMULATION_APPLICATION =
		"robomaker:DescribeSimulationApplication";
	/** [Read] robomaker:DescribeSimulationJob */
	static readonly DESCRIBE_SIMULATION_JOB = "robomaker:DescribeSimulationJob";
	/** [Read] robomaker:DescribeSimulationJobBatch */
	static readonly DESCRIBE_SIMULATION_JOB_BATCH =
		"robomaker:DescribeSimulationJobBatch";
	/** [Read] robomaker:DescribeWorld */
	static readonly DESCRIBE_WORLD = "robomaker:DescribeWorld";
	/** [Read] robomaker:DescribeWorldExportJob */
	static readonly DESCRIBE_WORLD_EXPORT_JOB =
		"robomaker:DescribeWorldExportJob";
	/** [Read] robomaker:DescribeWorldGenerationJob */
	static readonly DESCRIBE_WORLD_GENERATION_JOB =
		"robomaker:DescribeWorldGenerationJob";
	/** [Read] robomaker:DescribeWorldTemplate */
	static readonly DESCRIBE_WORLD_TEMPLATE = "robomaker:DescribeWorldTemplate";
	/** [Read] robomaker:GetWorldTemplateBody */
	static readonly GET_WORLD_TEMPLATE_BODY = "robomaker:GetWorldTemplateBody";
	/** [List] robomaker:ListDeploymentJobs */
	static readonly LIST_DEPLOYMENT_JOBS = "robomaker:ListDeploymentJobs";
	/** [List] robomaker:ListFleets */
	static readonly LIST_FLEETS = "robomaker:ListFleets";
	/** [List] robomaker:ListRobotApplications */
	static readonly LIST_ROBOT_APPLICATIONS = "robomaker:ListRobotApplications";
	/** [List] robomaker:ListRobots */
	static readonly LIST_ROBOTS = "robomaker:ListRobots";
	/** [List] robomaker:ListSimulationApplications */
	static readonly LIST_SIMULATION_APPLICATIONS =
		"robomaker:ListSimulationApplications";
	/** [List] robomaker:ListSimulationJobBatches */
	static readonly LIST_SIMULATION_JOB_BATCHES =
		"robomaker:ListSimulationJobBatches";
	/** [List] robomaker:ListSimulationJobs */
	static readonly LIST_SIMULATION_JOBS = "robomaker:ListSimulationJobs";
	/** [List] robomaker:ListSupportedAvailabilityZones */
	static readonly LIST_SUPPORTED_AVAILABILITY_ZONES =
		"robomaker:ListSupportedAvailabilityZones";
	/** [List] robomaker:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "robomaker:ListTagsForResource";
	/** [List] robomaker:ListWorldExportJobs */
	static readonly LIST_WORLD_EXPORT_JOBS = "robomaker:ListWorldExportJobs";
	/** [List] robomaker:ListWorldGenerationJobs */
	static readonly LIST_WORLD_GENERATION_JOBS =
		"robomaker:ListWorldGenerationJobs";
	/** [List] robomaker:ListWorldTemplates */
	static readonly LIST_WORLD_TEMPLATES = "robomaker:ListWorldTemplates";
	/** [List] robomaker:ListWorlds */
	static readonly LIST_WORLDS = "robomaker:ListWorlds";
	/** [Write] robomaker:RegisterRobot */
	static readonly REGISTER_ROBOT = "robomaker:RegisterRobot";
	/** [Write] robomaker:RestartSimulationJob */
	static readonly RESTART_SIMULATION_JOB = "robomaker:RestartSimulationJob";
	/** [Write] robomaker:StartSimulationJobBatch */
	static readonly START_SIMULATION_JOB_BATCH =
		"robomaker:StartSimulationJobBatch";
	/** [Write] robomaker:SyncDeploymentJob */
	static readonly SYNC_DEPLOYMENT_JOB = "robomaker:SyncDeploymentJob";
	/** [Tagging] robomaker:TagResource */
	static readonly TAG_RESOURCE = "robomaker:TagResource";
	/** [Tagging] robomaker:UntagResource */
	static readonly UNTAG_RESOURCE = "robomaker:UntagResource";
	/** [Write] robomaker:UpdateRobotApplication */
	static readonly UPDATE_ROBOT_APPLICATION = "robomaker:UpdateRobotApplication";
	/** [Write] robomaker:UpdateRobotDeployment */
	static readonly UPDATE_ROBOT_DEPLOYMENT = "robomaker:UpdateRobotDeployment";
	/** [Write] robomaker:UpdateSimulationApplication */
	static readonly UPDATE_SIMULATION_APPLICATION =
		"robomaker:UpdateSimulationApplication";
	/** [Write] robomaker:UpdateWorldTemplate */
	static readonly UPDATE_WORLD_TEMPLATE = "robomaker:UpdateWorldTemplate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RoboMakerActions.BATCH_DESCRIBE_SIMULATION_JOB,
		RoboMakerActions.DESCRIBE_DEPLOYMENT_JOB,
		RoboMakerActions.DESCRIBE_FLEET,
		RoboMakerActions.DESCRIBE_ROBOT,
		RoboMakerActions.DESCRIBE_ROBOT_APPLICATION,
		RoboMakerActions.DESCRIBE_SIMULATION_APPLICATION,
		RoboMakerActions.DESCRIBE_SIMULATION_JOB,
		RoboMakerActions.DESCRIBE_SIMULATION_JOB_BATCH,
		RoboMakerActions.DESCRIBE_WORLD,
		RoboMakerActions.DESCRIBE_WORLD_EXPORT_JOB,
		RoboMakerActions.DESCRIBE_WORLD_GENERATION_JOB,
		RoboMakerActions.DESCRIBE_WORLD_TEMPLATE,
		RoboMakerActions.GET_WORLD_TEMPLATE_BODY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RoboMakerActions.BATCH_DELETE_WORLDS,
		RoboMakerActions.CANCEL_DEPLOYMENT_JOB,
		RoboMakerActions.CANCEL_SIMULATION_JOB,
		RoboMakerActions.CANCEL_SIMULATION_JOB_BATCH,
		RoboMakerActions.CANCEL_WORLD_EXPORT_JOB,
		RoboMakerActions.CANCEL_WORLD_GENERATION_JOB,
		RoboMakerActions.CREATE_DEPLOYMENT_JOB,
		RoboMakerActions.CREATE_FLEET,
		RoboMakerActions.CREATE_ROBOT,
		RoboMakerActions.CREATE_ROBOT_APPLICATION,
		RoboMakerActions.CREATE_ROBOT_APPLICATION_VERSION,
		RoboMakerActions.CREATE_SIMULATION_APPLICATION,
		RoboMakerActions.CREATE_SIMULATION_APPLICATION_VERSION,
		RoboMakerActions.CREATE_SIMULATION_JOB,
		RoboMakerActions.CREATE_WORLD_EXPORT_JOB,
		RoboMakerActions.CREATE_WORLD_GENERATION_JOB,
		RoboMakerActions.CREATE_WORLD_TEMPLATE,
		RoboMakerActions.DELETE_FLEET,
		RoboMakerActions.DELETE_ROBOT,
		RoboMakerActions.DELETE_ROBOT_APPLICATION,
		RoboMakerActions.DELETE_SIMULATION_APPLICATION,
		RoboMakerActions.DELETE_WORLD_TEMPLATE,
		RoboMakerActions.DEREGISTER_ROBOT,
		RoboMakerActions.REGISTER_ROBOT,
		RoboMakerActions.RESTART_SIMULATION_JOB,
		RoboMakerActions.START_SIMULATION_JOB_BATCH,
		RoboMakerActions.SYNC_DEPLOYMENT_JOB,
		RoboMakerActions.UPDATE_ROBOT_APPLICATION,
		RoboMakerActions.UPDATE_ROBOT_DEPLOYMENT,
		RoboMakerActions.UPDATE_SIMULATION_APPLICATION,
		RoboMakerActions.UPDATE_WORLD_TEMPLATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RoboMakerActions.LIST_DEPLOYMENT_JOBS,
		RoboMakerActions.LIST_FLEETS,
		RoboMakerActions.LIST_ROBOT_APPLICATIONS,
		RoboMakerActions.LIST_ROBOTS,
		RoboMakerActions.LIST_SIMULATION_APPLICATIONS,
		RoboMakerActions.LIST_SIMULATION_JOB_BATCHES,
		RoboMakerActions.LIST_SIMULATION_JOBS,
		RoboMakerActions.LIST_SUPPORTED_AVAILABILITY_ZONES,
		RoboMakerActions.LIST_TAGS_FOR_RESOURCE,
		RoboMakerActions.LIST_WORLD_EXPORT_JOBS,
		RoboMakerActions.LIST_WORLD_GENERATION_JOBS,
		RoboMakerActions.LIST_WORLD_TEMPLATES,
		RoboMakerActions.LIST_WORLDS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RoboMakerActions.TAG_RESOURCE,
		RoboMakerActions.UNTAG_RESOURCE,
	];
}

const DeploymentFleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):deployment-fleet/(?<fleetName>[^:/?]+)/(?<createdOnEpoch>[^:/?]+)$",
);
const DeploymentJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):deployment-job/(?<deploymentJobId>[^:/?]+)$",
);
const RobotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):robot/(?<robotName>[^:/?]+)/(?<createdOnEpoch>[^:/?]+)$",
);
const RobotApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):robot-application/(?<applicationName>[^:/?]+)/(?<createdOnEpoch>[^:/?]+)$",
);
const SimulationApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):simulation-application/(?<applicationName>[^:/?]+)/(?<createdOnEpoch>[^:/?]+)$",
);
const SimulationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):simulation-job/(?<simulationJobId>[^:/?]+)$",
);
const SimulationJobBatchArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):simulation-job-batch/(?<simulationJobBatchId>[^:/?]+)$",
);
const WorldArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world/(?<worldId>[^:/?]+)$",
);
const WorldExportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world-export-job/(?<worldExportJobId>[^:/?]+)$",
);
const WorldGenerationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world-generation-job/(?<worldGenerationJobId>[^:/?]+)$",
);
const WorldTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world-template/(?<worldTemplateJobId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for robomaker resources.
 */
export class RoboMakerResources {
	/**
	 * Builds an ARN for the deploymentFleet resource.
	 */
	static deploymentFleet(props: {
		/** The FleetName component of the ARN. */
		readonly fleetName: string;
		/** The CreatedOnEpoch component of the ARN. */
		readonly createdOnEpoch: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:deployment-fleet/${props.fleetName}/${props.createdOnEpoch}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deploymentFleet resource.
	 */
	static isValidDeploymentFleetArn(arn: string): boolean {
		return DeploymentFleetArnRegex.test(arn);
	}

	/**
	 * Parses a deploymentFleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentFleetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fleetName: string;
		createdOnEpoch: string;
	} {
		const match = DeploymentFleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deploymentFleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fleetName: match.groups!.fleetName,
			createdOnEpoch: match.groups!.createdOnEpoch,
		};
	}

	/**
	 * Builds an ARN for the deploymentJob resource.
	 */
	static deploymentJob(props: {
		/** The DeploymentJobId component of the ARN. */
		readonly deploymentJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:deployment-job/${props.deploymentJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deploymentJob resource.
	 */
	static isValidDeploymentJobArn(arn: string): boolean {
		return DeploymentJobArnRegex.test(arn);
	}

	/**
	 * Parses a deploymentJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deploymentJobId: string;
	} {
		const match = DeploymentJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deploymentJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deploymentJobId: match.groups!.deploymentJobId,
		};
	}

	/**
	 * Builds an ARN for the robot resource.
	 */
	static robot(props: {
		/** The RobotName component of the ARN. */
		readonly robotName: string;
		/** The CreatedOnEpoch component of the ARN. */
		readonly createdOnEpoch: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:robot/${props.robotName}/${props.createdOnEpoch}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the robot resource.
	 */
	static isValidRobotArn(arn: string): boolean {
		return RobotArnRegex.test(arn);
	}

	/**
	 * Parses a robot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRobotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		robotName: string;
		createdOnEpoch: string;
	} {
		const match = RobotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid robot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			robotName: match.groups!.robotName,
			createdOnEpoch: match.groups!.createdOnEpoch,
		};
	}

	/**
	 * Builds an ARN for the robotApplication resource.
	 */
	static robotApplication(props: {
		/** The ApplicationName component of the ARN. */
		readonly applicationName: string;
		/** The CreatedOnEpoch component of the ARN. */
		readonly createdOnEpoch: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:robot-application/${props.applicationName}/${props.createdOnEpoch}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the robotApplication resource.
	 */
	static isValidRobotApplicationArn(arn: string): boolean {
		return RobotApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a robotApplication ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRobotApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
		createdOnEpoch: string;
	} {
		const match = RobotApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid robotApplication ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
			createdOnEpoch: match.groups!.createdOnEpoch,
		};
	}

	/**
	 * Builds an ARN for the simulationApplication resource.
	 */
	static simulationApplication(props: {
		/** The ApplicationName component of the ARN. */
		readonly applicationName: string;
		/** The CreatedOnEpoch component of the ARN. */
		readonly createdOnEpoch: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:simulation-application/${props.applicationName}/${props.createdOnEpoch}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the simulationApplication resource.
	 */
	static isValidSimulationApplicationArn(arn: string): boolean {
		return SimulationApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a simulationApplication ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSimulationApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
		createdOnEpoch: string;
	} {
		const match = SimulationApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid simulationApplication ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
			createdOnEpoch: match.groups!.createdOnEpoch,
		};
	}

	/**
	 * Builds an ARN for the simulationJob resource.
	 */
	static simulationJob(props: {
		/** The SimulationJobId component of the ARN. */
		readonly simulationJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:simulation-job/${props.simulationJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the simulationJob resource.
	 */
	static isValidSimulationJobArn(arn: string): boolean {
		return SimulationJobArnRegex.test(arn);
	}

	/**
	 * Parses a simulationJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSimulationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		simulationJobId: string;
	} {
		const match = SimulationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid simulationJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			simulationJobId: match.groups!.simulationJobId,
		};
	}

	/**
	 * Builds an ARN for the simulationJobBatch resource.
	 */
	static simulationJobBatch(props: {
		/** The SimulationJobBatchId component of the ARN. */
		readonly simulationJobBatchId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:simulation-job-batch/${props.simulationJobBatchId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the simulationJobBatch resource.
	 */
	static isValidSimulationJobBatchArn(arn: string): boolean {
		return SimulationJobBatchArnRegex.test(arn);
	}

	/**
	 * Parses a simulationJobBatch ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSimulationJobBatchArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		simulationJobBatchId: string;
	} {
		const match = SimulationJobBatchArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid simulationJobBatch ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			simulationJobBatchId: match.groups!.simulationJobBatchId,
		};
	}

	/**
	 * Builds an ARN for the world resource.
	 */
	static world(props: {
		/** The WorldId component of the ARN. */
		readonly worldId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:world/${props.worldId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the world resource.
	 */
	static isValidWorldArn(arn: string): boolean {
		return WorldArnRegex.test(arn);
	}

	/**
	 * Parses a world ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorldArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		worldId: string;
	} {
		const match = WorldArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid world ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			worldId: match.groups!.worldId,
		};
	}

	/**
	 * Builds an ARN for the worldExportJob resource.
	 */
	static worldExportJob(props: {
		/** The WorldExportJobId component of the ARN. */
		readonly worldExportJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:world-export-job/${props.worldExportJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the worldExportJob resource.
	 */
	static isValidWorldExportJobArn(arn: string): boolean {
		return WorldExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a worldExportJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorldExportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		worldExportJobId: string;
	} {
		const match = WorldExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid worldExportJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			worldExportJobId: match.groups!.worldExportJobId,
		};
	}

	/**
	 * Builds an ARN for the worldGenerationJob resource.
	 */
	static worldGenerationJob(props: {
		/** The WorldGenerationJobId component of the ARN. */
		readonly worldGenerationJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:world-generation-job/${props.worldGenerationJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the worldGenerationJob resource.
	 */
	static isValidWorldGenerationJobArn(arn: string): boolean {
		return WorldGenerationJobArnRegex.test(arn);
	}

	/**
	 * Parses a worldGenerationJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorldGenerationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		worldGenerationJobId: string;
	} {
		const match = WorldGenerationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid worldGenerationJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			worldGenerationJobId: match.groups!.worldGenerationJobId,
		};
	}

	/**
	 * Builds an ARN for the worldTemplate resource.
	 */
	static worldTemplate(props: {
		/** The WorldTemplateJobId component of the ARN. */
		readonly worldTemplateJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:robomaker:${props.region ?? "*"}:${props.account ?? "*"}:world-template/${props.worldTemplateJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the worldTemplate resource.
	 */
	static isValidWorldTemplateArn(arn: string): boolean {
		return WorldTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a worldTemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorldTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		worldTemplateJobId: string;
	} {
		const match = WorldTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid worldTemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			worldTemplateJobId: match.groups!.worldTemplateJobId,
		};
	}
}

/**
 * Condition key constants and builders for robomaker.
 */
export class RoboMakerConditions {
	/** Condition keys applicable to the CreateDeploymentJob action. */
	static readonly CREATE_DEPLOYMENT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CREATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRobot action. */
	static readonly CREATE_ROBOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRobotApplication action. */
	static readonly CREATE_ROBOT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSimulationApplication action. */
	static readonly CREATE_SIMULATION_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSimulationJob action. */
	static readonly CREATE_SIMULATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorldExportJob action. */
	static readonly CREATE_WORLD_EXPORT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorldGenerationJob action. */
	static readonly CREATE_WORLD_GENERATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorldTemplate action. */
	static readonly CREATE_WORLD_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSimulationJobBatch action. */
	static readonly START_SIMULATION_JOB_BATCH_CONDITION_KEYS: string[] = [
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
