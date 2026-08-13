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
	static readonly CREATE_SNAPSHOT = "simspaceweaver:CreateSnapshot";
	/** [Write] simspaceweaver:DeleteApp */
	static readonly DELETE_APP = "simspaceweaver:DeleteApp";
	/** [Write] simspaceweaver:DeleteSimulation */
	static readonly DELETE_SIMULATION = "simspaceweaver:DeleteSimulation";
	/** [Read] simspaceweaver:DescribeApp */
	static readonly DESCRIBE_APP = "simspaceweaver:DescribeApp";
	/** [Read] simspaceweaver:DescribeSimulation */
	static readonly DESCRIBE_SIMULATION = "simspaceweaver:DescribeSimulation";
	/** [Read] simspaceweaver:ListApps */
	static readonly LIST_APPS = "simspaceweaver:ListApps";
	/** [List] simspaceweaver:ListSimulations */
	static readonly LIST_SIMULATIONS = "simspaceweaver:ListSimulations";
	/** [Read] simspaceweaver:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "simspaceweaver:ListTagsForResource";
	/** [Write] simspaceweaver:StartApp */
	static readonly START_APP = "simspaceweaver:StartApp";
	/** [Write] simspaceweaver:StartClock */
	static readonly START_CLOCK = "simspaceweaver:StartClock";
	/** [Write] simspaceweaver:StartSimulation */
	static readonly START_SIMULATION = "simspaceweaver:StartSimulation";
	/** [Write] simspaceweaver:StopApp */
	static readonly STOP_APP = "simspaceweaver:StopApp";
	/** [Write] simspaceweaver:StopClock */
	static readonly STOP_CLOCK = "simspaceweaver:StopClock";
	/** [Write] simspaceweaver:StopSimulation */
	static readonly STOP_SIMULATION = "simspaceweaver:StopSimulation";
	/** [Tagging] simspaceweaver:TagResource */
	static readonly TAG_RESOURCE = "simspaceweaver:TagResource";
	/** [Tagging] simspaceweaver:UntagResource */
	static readonly UNTAG_RESOURCE = "simspaceweaver:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SimspaceweaverActions.DESCRIBE_APP,
		SimspaceweaverActions.DESCRIBE_SIMULATION,
		SimspaceweaverActions.LIST_APPS,
		SimspaceweaverActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SimspaceweaverActions.CREATE_SNAPSHOT,
		SimspaceweaverActions.DELETE_APP,
		SimspaceweaverActions.DELETE_SIMULATION,
		SimspaceweaverActions.START_APP,
		SimspaceweaverActions.START_CLOCK,
		SimspaceweaverActions.START_SIMULATION,
		SimspaceweaverActions.STOP_APP,
		SimspaceweaverActions.STOP_CLOCK,
		SimspaceweaverActions.STOP_SIMULATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SimspaceweaverActions.LIST_SIMULATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SimspaceweaverActions.TAG_RESOURCE,
		SimspaceweaverActions.UNTAG_RESOURCE,
	];
}

const SimulationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):simspaceweaver:(?<region>[^:]*):(?<account>[^:]*):simulation/(?<simulationName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for simspaceweaver resources.
 */
export class SimspaceweaverResources {
	/**
	 * Builds an ARN for the Simulation resource.
	 */
	static simulation(props: {
		/** The SimulationName component of the ARN. */
		readonly simulationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSimulationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		simulationName: string;
	} {
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
	static readonly START_SIMULATION_CONDITION_KEYS: string[] = [
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
