// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/simspaceweaver.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the simspaceweaver service.
 */
export class SimspaceweaverActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "simspaceweaver";

	/** [Write] simspaceweaver:CreateSnapshot */
	static readonly CreateSnapshot = "simspaceweaver:CreateSnapshot";
	/** [Write] simspaceweaver:DeleteApp */
	static readonly DeleteApp = "simspaceweaver:DeleteApp";
	/** [Write] simspaceweaver:DeleteSimulation */
	static readonly DeleteSimulation = "simspaceweaver:DeleteSimulation";
	/** [Read] simspaceweaver:DescribeApp */
	static readonly DescribeApp = "simspaceweaver:DescribeApp";
	/** [Read] simspaceweaver:DescribeSimulation */
	static readonly DescribeSimulation = "simspaceweaver:DescribeSimulation";
	/** [Read] simspaceweaver:ListApps */
	static readonly ListApps = "simspaceweaver:ListApps";
	/** [List] simspaceweaver:ListSimulations */
	static readonly ListSimulations = "simspaceweaver:ListSimulations";
	/** [Read] simspaceweaver:ListTagsForResource */
	static readonly ListTagsForResource = "simspaceweaver:ListTagsForResource";
	/** [Write] simspaceweaver:StartApp */
	static readonly StartApp = "simspaceweaver:StartApp";
	/** [Write] simspaceweaver:StartClock */
	static readonly StartClock = "simspaceweaver:StartClock";
	/** [Write] simspaceweaver:StartSimulation */
	static readonly StartSimulation = "simspaceweaver:StartSimulation";
	/** [Write] simspaceweaver:StopApp */
	static readonly StopApp = "simspaceweaver:StopApp";
	/** [Write] simspaceweaver:StopClock */
	static readonly StopClock = "simspaceweaver:StopClock";
	/** [Write] simspaceweaver:StopSimulation */
	static readonly StopSimulation = "simspaceweaver:StopSimulation";
	/** [Tagging] simspaceweaver:TagResource */
	static readonly TagResource = "simspaceweaver:TagResource";
	/** [Tagging] simspaceweaver:UntagResource */
	static readonly UntagResource = "simspaceweaver:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SimspaceweaverActions.DescribeApp,
		SimspaceweaverActions.DescribeSimulation,
		SimspaceweaverActions.ListApps,
		SimspaceweaverActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SimspaceweaverActions.CreateSnapshot,
		SimspaceweaverActions.DeleteApp,
		SimspaceweaverActions.DeleteSimulation,
		SimspaceweaverActions.StartApp,
		SimspaceweaverActions.StartClock,
		SimspaceweaverActions.StartSimulation,
		SimspaceweaverActions.StopApp,
		SimspaceweaverActions.StopClock,
		SimspaceweaverActions.StopSimulation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SimspaceweaverActions.ListSimulations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SimspaceweaverActions.TagResource,
		SimspaceweaverActions.UntagResource,
	];
}

/**
 * Properties for building a Simulation ARN.
 */
export interface SimspaceweaverSimulationArnProps {
	/** The SimulationName component of the ARN. */
	readonly simulationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Simulation ARN.
 */
export interface SimspaceweaverSimulationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SimulationName component. */
	readonly simulationName: string;
}

const SimulationArnRegex =
	/^arn:(?<partition>[^:]+):simspaceweaver:(?<region>[^:]*):(?<account>[^:]*):simulation\/(?<simulationName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for simspaceweaver resources.
 */
export class SimspaceweaverResources {
	/**
	 * Builds an ARN for the Simulation resource.
	 */
	static simulation(props: SimspaceweaverSimulationArnProps): string {
		return `arn:${props.partition ?? "aws"}:simspaceweaver:${props.region ?? "*"}:${props.account ?? "*"}:simulation/${props.simulationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Simulation resource.
	 */
	static isValidSimulationArn(arn: string): boolean {
		return SimulationArnRegex.test(arn);
	}

	/**
	 * Parses a Simulation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSimulationArn(
		arn: string,
	): SimspaceweaverSimulationArnComponents {
		const match = SimulationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Simulation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			simulationName: match.groups!.simulationName,
		};
	}
}

/**
 * Condition key constants and builders for simspaceweaver.
 */
export class SimspaceweaverConditions {
	/** Condition keys applicable to the StartSimulation action. */
	static readonly StartSimulationConditionKeys: string[] = [
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
