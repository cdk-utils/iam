// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iotjobsdata.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iotjobsdata service.
 */
export class IotjobsdataActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iotjobsdata";

	/** [Read] iotjobsdata:DescribeJobExecution */
	static readonly DESCRIBE_JOB_EXECUTION = "iotjobsdata:DescribeJobExecution";
	/** [Read] iotjobsdata:GetPendingJobExecutions */
	static readonly GET_PENDING_JOB_EXECUTIONS =
		"iotjobsdata:GetPendingJobExecutions";
	/** [Write] iotjobsdata:StartNextPendingJobExecution */
	static readonly START_NEXT_PENDING_JOB_EXECUTION =
		"iotjobsdata:StartNextPendingJobExecution";
	/** [Write] iotjobsdata:UpdateJobExecution */
	static readonly UPDATE_JOB_EXECUTION = "iotjobsdata:UpdateJobExecution";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotjobsdataActions.DESCRIBE_JOB_EXECUTION,
		IotjobsdataActions.GET_PENDING_JOB_EXECUTIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotjobsdataActions.START_NEXT_PENDING_JOB_EXECUTION,
		IotjobsdataActions.UPDATE_JOB_EXECUTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ThingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thing/(?<thingName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iotjobsdata resources.
 */
export class IotjobsdataResources {
	/**
	 * Builds an ARN for the thing resource.
	 */
	static thing(props: {
		/** The ThingName component of the ARN. */
		readonly thingName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:thing/${props.thingName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the thing resource.
	 */
	static isValidThingArn(arn: string): boolean {
		return ThingArnRegex.test(arn);
	}

	/**
	 * Parses a thing ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingName: string;
	} {
		const match = ThingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid thing ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingName: match.groups!.thingName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for iotjobsdata.
 */
export class IotjobsdataOperations {
	/** IAM actions required for the DescribeJobExecution API call. */
	static readonly DESCRIBE_JOB_EXECUTION: string[] = [
		"iotjobsdata:DescribeJobExecution",
	];
	/** IAM actions required for the GetPendingJobExecutions API call. */
	static readonly GET_PENDING_JOB_EXECUTIONS: string[] = [
		"iotjobsdata:GetPendingJobExecutions",
	];
	/** IAM actions required for the StartCommandExecution API call. */
	static readonly START_COMMAND_EXECUTION: string[] = [
		"iot:StartCommandExecution",
	];
	/** IAM actions required for the StartNextPendingJobExecution API call. */
	static readonly START_NEXT_PENDING_JOB_EXECUTION: string[] = [
		"iotjobsdata:StartNextPendingJobExecution",
	];
	/** IAM actions required for the UpdateJobExecution API call. */
	static readonly UPDATE_JOB_EXECUTION: string[] = [
		"iotjobsdata:UpdateJobExecution",
	];
}

/**
 * Condition key constants and builders for iotjobsdata.
 */
export class IotjobsdataConditions {
	/** Condition keys applicable to the DescribeJobExecution action. */
	static readonly DESCRIBE_JOB_EXECUTION_CONDITION_KEYS: string[] = [
		"iot:JobId",
	];
	/** Condition keys applicable to the UpdateJobExecution action. */
	static readonly UPDATE_JOB_EXECUTION_CONDITION_KEYS: string[] = ["iot:JobId"];

	/** Condition key: iot:JobId (String) */
	static readonly JOB_ID = "iot:JobId";
}
