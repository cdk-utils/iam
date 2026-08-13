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
	static readonly DescribeJobExecution = "iotjobsdata:DescribeJobExecution";
	/** [Read] iotjobsdata:GetPendingJobExecutions */
	static readonly actionGetPendingJobExecutions =
		"iotjobsdata:GetPendingJobExecutions";
	/** [Write] iotjobsdata:StartNextPendingJobExecution */
	static readonly StartNextPendingJobExecution =
		"iotjobsdata:StartNextPendingJobExecution";
	/** [Write] iotjobsdata:UpdateJobExecution */
	static readonly UpdateJobExecution = "iotjobsdata:UpdateJobExecution";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotjobsdataActions.DescribeJobExecution,
		IotjobsdataActions.actionGetPendingJobExecutions,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotjobsdataActions.StartNextPendingJobExecution,
		IotjobsdataActions.UpdateJobExecution,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a thing ARN.
 */
export interface IotjobsdataThingArnProps {
	/** The ThingName component of the ARN. */
	readonly thingName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a thing ARN.
 */
export interface IotjobsdataThingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingName component. */
	readonly thingName: string;
}

const ThingArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thing\/(?<thingName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iotjobsdata resources.
 */
export class IotjobsdataResources {
	/**
	 * Builds an ARN for the thing resource.
	 */
	static thing(props: IotjobsdataThingArnProps): string {
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
	static parseThingArn(arn: string): IotjobsdataThingArnComponents {
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
	static readonly DescribeJobExecution: string[] = [
		"iotjobsdata:DescribeJobExecution",
	];
	/** IAM actions required for the GetPendingJobExecutions API call. */
	static readonly opGetPendingJobExecutions: string[] = [
		"iotjobsdata:GetPendingJobExecutions",
	];
	/** IAM actions required for the StartCommandExecution API call. */
	static readonly StartCommandExecution: string[] = [
		"iot:StartCommandExecution",
	];
	/** IAM actions required for the StartNextPendingJobExecution API call. */
	static readonly StartNextPendingJobExecution: string[] = [
		"iotjobsdata:StartNextPendingJobExecution",
	];
	/** IAM actions required for the UpdateJobExecution API call. */
	static readonly UpdateJobExecution: string[] = [
		"iotjobsdata:UpdateJobExecution",
	];
}

/**
 * Condition key constants and builders for iotjobsdata.
 */
export class IotjobsdataConditions {
	/** Condition keys applicable to the DescribeJobExecution action. */
	static readonly DescribeJobExecutionConditionKeys: string[] = ["iot:JobId"];
	/** Condition keys applicable to the UpdateJobExecution action. */
	static readonly UpdateJobExecutionConditionKeys: string[] = ["iot:JobId"];

	/** Condition key: iot:JobId (String) */
	static readonly JOB_ID = "iot:JobId";
}
