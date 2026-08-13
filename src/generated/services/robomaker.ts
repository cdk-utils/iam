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
	static readonly BatchDeleteWorlds = "robomaker:BatchDeleteWorlds";
	/** [Read] robomaker:BatchDescribeSimulationJob */
	static readonly BatchDescribeSimulationJob =
		"robomaker:BatchDescribeSimulationJob";
	/** [Write] robomaker:CancelDeploymentJob */
	static readonly CancelDeploymentJob = "robomaker:CancelDeploymentJob";
	/** [Write] robomaker:CancelSimulationJob */
	static readonly CancelSimulationJob = "robomaker:CancelSimulationJob";
	/** [Write] robomaker:CancelSimulationJobBatch */
	static readonly CancelSimulationJobBatch =
		"robomaker:CancelSimulationJobBatch";
	/** [Write] robomaker:CancelWorldExportJob */
	static readonly CancelWorldExportJob = "robomaker:CancelWorldExportJob";
	/** [Write] robomaker:CancelWorldGenerationJob */
	static readonly CancelWorldGenerationJob =
		"robomaker:CancelWorldGenerationJob";
	/** [Write] robomaker:CreateDeploymentJob */
	static readonly CreateDeploymentJob = "robomaker:CreateDeploymentJob";
	/** [Write] robomaker:CreateFleet */
	static readonly CreateFleet = "robomaker:CreateFleet";
	/** [Write] robomaker:CreateRobot */
	static readonly CreateRobot = "robomaker:CreateRobot";
	/** [Write] robomaker:CreateRobotApplication */
	static readonly CreateRobotApplication = "robomaker:CreateRobotApplication";
	/** [Write] robomaker:CreateRobotApplicationVersion */
	static readonly CreateRobotApplicationVersion =
		"robomaker:CreateRobotApplicationVersion";
	/** [Write] robomaker:CreateSimulationApplication */
	static readonly CreateSimulationApplication =
		"robomaker:CreateSimulationApplication";
	/** [Write] robomaker:CreateSimulationApplicationVersion */
	static readonly CreateSimulationApplicationVersion =
		"robomaker:CreateSimulationApplicationVersion";
	/** [Write] robomaker:CreateSimulationJob */
	static readonly CreateSimulationJob = "robomaker:CreateSimulationJob";
	/** [Write] robomaker:CreateWorldExportJob */
	static readonly CreateWorldExportJob = "robomaker:CreateWorldExportJob";
	/** [Write] robomaker:CreateWorldGenerationJob */
	static readonly CreateWorldGenerationJob =
		"robomaker:CreateWorldGenerationJob";
	/** [Write] robomaker:CreateWorldTemplate */
	static readonly CreateWorldTemplate = "robomaker:CreateWorldTemplate";
	/** [Write] robomaker:DeleteFleet */
	static readonly DeleteFleet = "robomaker:DeleteFleet";
	/** [Write] robomaker:DeleteRobot */
	static readonly DeleteRobot = "robomaker:DeleteRobot";
	/** [Write] robomaker:DeleteRobotApplication */
	static readonly DeleteRobotApplication = "robomaker:DeleteRobotApplication";
	/** [Write] robomaker:DeleteSimulationApplication */
	static readonly DeleteSimulationApplication =
		"robomaker:DeleteSimulationApplication";
	/** [Write] robomaker:DeleteWorldTemplate */
	static readonly DeleteWorldTemplate = "robomaker:DeleteWorldTemplate";
	/** [Write] robomaker:DeregisterRobot */
	static readonly DeregisterRobot = "robomaker:DeregisterRobot";
	/** [Read] robomaker:DescribeDeploymentJob */
	static readonly DescribeDeploymentJob = "robomaker:DescribeDeploymentJob";
	/** [Read] robomaker:DescribeFleet */
	static readonly DescribeFleet = "robomaker:DescribeFleet";
	/** [Read] robomaker:DescribeRobot */
	static readonly DescribeRobot = "robomaker:DescribeRobot";
	/** [Read] robomaker:DescribeRobotApplication */
	static readonly DescribeRobotApplication =
		"robomaker:DescribeRobotApplication";
	/** [Read] robomaker:DescribeSimulationApplication */
	static readonly DescribeSimulationApplication =
		"robomaker:DescribeSimulationApplication";
	/** [Read] robomaker:DescribeSimulationJob */
	static readonly DescribeSimulationJob = "robomaker:DescribeSimulationJob";
	/** [Read] robomaker:DescribeSimulationJobBatch */
	static readonly DescribeSimulationJobBatch =
		"robomaker:DescribeSimulationJobBatch";
	/** [Read] robomaker:DescribeWorld */
	static readonly DescribeWorld = "robomaker:DescribeWorld";
	/** [Read] robomaker:DescribeWorldExportJob */
	static readonly DescribeWorldExportJob = "robomaker:DescribeWorldExportJob";
	/** [Read] robomaker:DescribeWorldGenerationJob */
	static readonly DescribeWorldGenerationJob =
		"robomaker:DescribeWorldGenerationJob";
	/** [Read] robomaker:DescribeWorldTemplate */
	static readonly DescribeWorldTemplate = "robomaker:DescribeWorldTemplate";
	/** [Read] robomaker:GetWorldTemplateBody */
	static readonly actionGetWorldTemplateBody = "robomaker:GetWorldTemplateBody";
	/** [List] robomaker:ListDeploymentJobs */
	static readonly ListDeploymentJobs = "robomaker:ListDeploymentJobs";
	/** [List] robomaker:ListFleets */
	static readonly ListFleets = "robomaker:ListFleets";
	/** [List] robomaker:ListRobotApplications */
	static readonly ListRobotApplications = "robomaker:ListRobotApplications";
	/** [List] robomaker:ListRobots */
	static readonly ListRobots = "robomaker:ListRobots";
	/** [List] robomaker:ListSimulationApplications */
	static readonly ListSimulationApplications =
		"robomaker:ListSimulationApplications";
	/** [List] robomaker:ListSimulationJobBatches */
	static readonly ListSimulationJobBatches =
		"robomaker:ListSimulationJobBatches";
	/** [List] robomaker:ListSimulationJobs */
	static readonly ListSimulationJobs = "robomaker:ListSimulationJobs";
	/** [List] robomaker:ListSupportedAvailabilityZones */
	static readonly ListSupportedAvailabilityZones =
		"robomaker:ListSupportedAvailabilityZones";
	/** [List] robomaker:ListTagsForResource */
	static readonly ListTagsForResource = "robomaker:ListTagsForResource";
	/** [List] robomaker:ListWorldExportJobs */
	static readonly ListWorldExportJobs = "robomaker:ListWorldExportJobs";
	/** [List] robomaker:ListWorldGenerationJobs */
	static readonly ListWorldGenerationJobs = "robomaker:ListWorldGenerationJobs";
	/** [List] robomaker:ListWorldTemplates */
	static readonly ListWorldTemplates = "robomaker:ListWorldTemplates";
	/** [List] robomaker:ListWorlds */
	static readonly ListWorlds = "robomaker:ListWorlds";
	/** [Write] robomaker:RegisterRobot */
	static readonly RegisterRobot = "robomaker:RegisterRobot";
	/** [Write] robomaker:RestartSimulationJob */
	static readonly RestartSimulationJob = "robomaker:RestartSimulationJob";
	/** [Write] robomaker:StartSimulationJobBatch */
	static readonly StartSimulationJobBatch = "robomaker:StartSimulationJobBatch";
	/** [Write] robomaker:SyncDeploymentJob */
	static readonly SyncDeploymentJob = "robomaker:SyncDeploymentJob";
	/** [Tagging] robomaker:TagResource */
	static readonly TagResource = "robomaker:TagResource";
	/** [Tagging] robomaker:UntagResource */
	static readonly UntagResource = "robomaker:UntagResource";
	/** [Write] robomaker:UpdateRobotApplication */
	static readonly UpdateRobotApplication = "robomaker:UpdateRobotApplication";
	/** [Write] robomaker:UpdateRobotDeployment */
	static readonly UpdateRobotDeployment = "robomaker:UpdateRobotDeployment";
	/** [Write] robomaker:UpdateSimulationApplication */
	static readonly UpdateSimulationApplication =
		"robomaker:UpdateSimulationApplication";
	/** [Write] robomaker:UpdateWorldTemplate */
	static readonly UpdateWorldTemplate = "robomaker:UpdateWorldTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RoboMakerActions.BatchDescribeSimulationJob,
		RoboMakerActions.DescribeDeploymentJob,
		RoboMakerActions.DescribeFleet,
		RoboMakerActions.DescribeRobot,
		RoboMakerActions.DescribeRobotApplication,
		RoboMakerActions.DescribeSimulationApplication,
		RoboMakerActions.DescribeSimulationJob,
		RoboMakerActions.DescribeSimulationJobBatch,
		RoboMakerActions.DescribeWorld,
		RoboMakerActions.DescribeWorldExportJob,
		RoboMakerActions.DescribeWorldGenerationJob,
		RoboMakerActions.DescribeWorldTemplate,
		RoboMakerActions.actionGetWorldTemplateBody,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RoboMakerActions.BatchDeleteWorlds,
		RoboMakerActions.CancelDeploymentJob,
		RoboMakerActions.CancelSimulationJob,
		RoboMakerActions.CancelSimulationJobBatch,
		RoboMakerActions.CancelWorldExportJob,
		RoboMakerActions.CancelWorldGenerationJob,
		RoboMakerActions.CreateDeploymentJob,
		RoboMakerActions.CreateFleet,
		RoboMakerActions.CreateRobot,
		RoboMakerActions.CreateRobotApplication,
		RoboMakerActions.CreateRobotApplicationVersion,
		RoboMakerActions.CreateSimulationApplication,
		RoboMakerActions.CreateSimulationApplicationVersion,
		RoboMakerActions.CreateSimulationJob,
		RoboMakerActions.CreateWorldExportJob,
		RoboMakerActions.CreateWorldGenerationJob,
		RoboMakerActions.CreateWorldTemplate,
		RoboMakerActions.DeleteFleet,
		RoboMakerActions.DeleteRobot,
		RoboMakerActions.DeleteRobotApplication,
		RoboMakerActions.DeleteSimulationApplication,
		RoboMakerActions.DeleteWorldTemplate,
		RoboMakerActions.DeregisterRobot,
		RoboMakerActions.RegisterRobot,
		RoboMakerActions.RestartSimulationJob,
		RoboMakerActions.StartSimulationJobBatch,
		RoboMakerActions.SyncDeploymentJob,
		RoboMakerActions.UpdateRobotApplication,
		RoboMakerActions.UpdateRobotDeployment,
		RoboMakerActions.UpdateSimulationApplication,
		RoboMakerActions.UpdateWorldTemplate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RoboMakerActions.ListDeploymentJobs,
		RoboMakerActions.ListFleets,
		RoboMakerActions.ListRobotApplications,
		RoboMakerActions.ListRobots,
		RoboMakerActions.ListSimulationApplications,
		RoboMakerActions.ListSimulationJobBatches,
		RoboMakerActions.ListSimulationJobs,
		RoboMakerActions.ListSupportedAvailabilityZones,
		RoboMakerActions.ListTagsForResource,
		RoboMakerActions.ListWorldExportJobs,
		RoboMakerActions.ListWorldGenerationJobs,
		RoboMakerActions.ListWorldTemplates,
		RoboMakerActions.ListWorlds,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RoboMakerActions.TagResource,
		RoboMakerActions.UntagResource,
	];
}

/**
 * Properties for building a deploymentFleet ARN.
 */
export interface RoboMakerDeploymentFleetArnProps {
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
}

/**
 * Parsed components of a deploymentFleet ARN.
 */
export interface RoboMakerDeploymentFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetName component. */
	readonly fleetName: string;
	/** The CreatedOnEpoch component. */
	readonly createdOnEpoch: string;
}

/**
 * Properties for building a deploymentJob ARN.
 */
export interface RoboMakerDeploymentJobArnProps {
	/** The DeploymentJobId component of the ARN. */
	readonly deploymentJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deploymentJob ARN.
 */
export interface RoboMakerDeploymentJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DeploymentJobId component. */
	readonly deploymentJobId: string;
}

/**
 * Properties for building a robot ARN.
 */
export interface RoboMakerRobotArnProps {
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
}

/**
 * Parsed components of a robot ARN.
 */
export interface RoboMakerRobotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RobotName component. */
	readonly robotName: string;
	/** The CreatedOnEpoch component. */
	readonly createdOnEpoch: string;
}

/**
 * Properties for building a robotApplication ARN.
 */
export interface RoboMakerRobotApplicationArnProps {
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
}

/**
 * Parsed components of a robotApplication ARN.
 */
export interface RoboMakerRobotApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
	/** The CreatedOnEpoch component. */
	readonly createdOnEpoch: string;
}

/**
 * Properties for building a simulationApplication ARN.
 */
export interface RoboMakerSimulationApplicationArnProps {
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
}

/**
 * Parsed components of a simulationApplication ARN.
 */
export interface RoboMakerSimulationApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
	/** The CreatedOnEpoch component. */
	readonly createdOnEpoch: string;
}

/**
 * Properties for building a simulationJob ARN.
 */
export interface RoboMakerSimulationJobArnProps {
	/** The SimulationJobId component of the ARN. */
	readonly simulationJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a simulationJob ARN.
 */
export interface RoboMakerSimulationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SimulationJobId component. */
	readonly simulationJobId: string;
}

/**
 * Properties for building a simulationJobBatch ARN.
 */
export interface RoboMakerSimulationJobBatchArnProps {
	/** The SimulationJobBatchId component of the ARN. */
	readonly simulationJobBatchId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a simulationJobBatch ARN.
 */
export interface RoboMakerSimulationJobBatchArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SimulationJobBatchId component. */
	readonly simulationJobBatchId: string;
}

/**
 * Properties for building a world ARN.
 */
export interface RoboMakerWorldArnProps {
	/** The WorldId component of the ARN. */
	readonly worldId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a world ARN.
 */
export interface RoboMakerWorldArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorldId component. */
	readonly worldId: string;
}

/**
 * Properties for building a worldExportJob ARN.
 */
export interface RoboMakerWorldExportJobArnProps {
	/** The WorldExportJobId component of the ARN. */
	readonly worldExportJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a worldExportJob ARN.
 */
export interface RoboMakerWorldExportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorldExportJobId component. */
	readonly worldExportJobId: string;
}

/**
 * Properties for building a worldGenerationJob ARN.
 */
export interface RoboMakerWorldGenerationJobArnProps {
	/** The WorldGenerationJobId component of the ARN. */
	readonly worldGenerationJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a worldGenerationJob ARN.
 */
export interface RoboMakerWorldGenerationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorldGenerationJobId component. */
	readonly worldGenerationJobId: string;
}

/**
 * Properties for building a worldTemplate ARN.
 */
export interface RoboMakerWorldTemplateArnProps {
	/** The WorldTemplateJobId component of the ARN. */
	readonly worldTemplateJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a worldTemplate ARN.
 */
export interface RoboMakerWorldTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorldTemplateJobId component. */
	readonly worldTemplateJobId: string;
}

const DeploymentFleetArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):deployment-fleet\/(?<fleetName>[^:/?]+)\/(?<createdOnEpoch>[^:/?]+)$/;
const DeploymentJobArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):deployment-job\/(?<deploymentJobId>[^:/?]+)$/;
const RobotArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):robot\/(?<robotName>[^:/?]+)\/(?<createdOnEpoch>[^:/?]+)$/;
const RobotApplicationArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):robot-application\/(?<applicationName>[^:/?]+)\/(?<createdOnEpoch>[^:/?]+)$/;
const SimulationApplicationArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):simulation-application\/(?<applicationName>[^:/?]+)\/(?<createdOnEpoch>[^:/?]+)$/;
const SimulationJobArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):simulation-job\/(?<simulationJobId>[^:/?]+)$/;
const SimulationJobBatchArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):simulation-job-batch\/(?<simulationJobBatchId>[^:/?]+)$/;
const WorldArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world\/(?<worldId>[^:/?]+)$/;
const WorldExportJobArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world-export-job\/(?<worldExportJobId>[^:/?]+)$/;
const WorldGenerationJobArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world-generation-job\/(?<worldGenerationJobId>[^:/?]+)$/;
const WorldTemplateArnRegex =
	/^arn:(?<partition>[^:]+):robomaker:(?<region>[^:]*):(?<account>[^:]*):world-template\/(?<worldTemplateJobId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for robomaker resources.
 */
export class RoboMakerResources {
	/**
	 * Builds an ARN for the deploymentFleet resource.
	 */
	static deploymentFleet(props: RoboMakerDeploymentFleetArnProps): string {
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
	static parseDeploymentFleetArn(
		arn: string,
	): RoboMakerDeploymentFleetArnComponents {
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
	static deploymentJob(props: RoboMakerDeploymentJobArnProps): string {
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
	static parseDeploymentJobArn(
		arn: string,
	): RoboMakerDeploymentJobArnComponents {
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
	static robot(props: RoboMakerRobotArnProps): string {
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
	static parseRobotArn(arn: string): RoboMakerRobotArnComponents {
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
	static robotApplication(props: RoboMakerRobotApplicationArnProps): string {
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
	static parseRobotApplicationArn(
		arn: string,
	): RoboMakerRobotApplicationArnComponents {
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
	static simulationApplication(
		props: RoboMakerSimulationApplicationArnProps,
	): string {
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
	static parseSimulationApplicationArn(
		arn: string,
	): RoboMakerSimulationApplicationArnComponents {
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
	static simulationJob(props: RoboMakerSimulationJobArnProps): string {
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
	static parseSimulationJobArn(
		arn: string,
	): RoboMakerSimulationJobArnComponents {
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
	static simulationJobBatch(
		props: RoboMakerSimulationJobBatchArnProps,
	): string {
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
	static parseSimulationJobBatchArn(
		arn: string,
	): RoboMakerSimulationJobBatchArnComponents {
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
	static world(props: RoboMakerWorldArnProps): string {
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
	static parseWorldArn(arn: string): RoboMakerWorldArnComponents {
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
	static worldExportJob(props: RoboMakerWorldExportJobArnProps): string {
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
	static parseWorldExportJobArn(
		arn: string,
	): RoboMakerWorldExportJobArnComponents {
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
	static worldGenerationJob(
		props: RoboMakerWorldGenerationJobArnProps,
	): string {
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
	static parseWorldGenerationJobArn(
		arn: string,
	): RoboMakerWorldGenerationJobArnComponents {
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
	static worldTemplate(props: RoboMakerWorldTemplateArnProps): string {
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
	static parseWorldTemplateArn(
		arn: string,
	): RoboMakerWorldTemplateArnComponents {
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
	static readonly CreateDeploymentJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CreateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRobot action. */
	static readonly CreateRobotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRobotApplication action. */
	static readonly CreateRobotApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSimulationApplication action. */
	static readonly CreateSimulationApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSimulationJob action. */
	static readonly CreateSimulationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorldExportJob action. */
	static readonly CreateWorldExportJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorldGenerationJob action. */
	static readonly CreateWorldGenerationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorldTemplate action. */
	static readonly CreateWorldTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartSimulationJobBatch action. */
	static readonly StartSimulationJobBatchConditionKeys: string[] = [
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
