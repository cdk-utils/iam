// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/batch.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the batch service.
 */
export class BatchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "batch";

	/** [Write] batch:CancelJob */
	static readonly CancelJob = "batch:CancelJob";
	/** [Write] batch:CreateComputeEnvironment */
	static readonly CreateComputeEnvironment = "batch:CreateComputeEnvironment";
	/** [Write] batch:CreateConsumableResource */
	static readonly CreateConsumableResource = "batch:CreateConsumableResource";
	/** [Write] batch:CreateJobQueue */
	static readonly CreateJobQueue = "batch:CreateJobQueue";
	/** [Write] batch:CreateQuotaShare */
	static readonly CreateQuotaShare = "batch:CreateQuotaShare";
	/** [Write] batch:CreateSchedulingPolicy */
	static readonly CreateSchedulingPolicy = "batch:CreateSchedulingPolicy";
	/** [Write] batch:CreateServiceEnvironment */
	static readonly CreateServiceEnvironment = "batch:CreateServiceEnvironment";
	/** [Write] batch:DeleteComputeEnvironment */
	static readonly DeleteComputeEnvironment = "batch:DeleteComputeEnvironment";
	/** [Write] batch:DeleteConsumableResource */
	static readonly DeleteConsumableResource = "batch:DeleteConsumableResource";
	/** [Write] batch:DeleteJobQueue */
	static readonly DeleteJobQueue = "batch:DeleteJobQueue";
	/** [Write] batch:DeleteQuotaShare */
	static readonly DeleteQuotaShare = "batch:DeleteQuotaShare";
	/** [Write] batch:DeleteSchedulingPolicy */
	static readonly DeleteSchedulingPolicy = "batch:DeleteSchedulingPolicy";
	/** [Write] batch:DeleteServiceEnvironment */
	static readonly DeleteServiceEnvironment = "batch:DeleteServiceEnvironment";
	/** [Write] batch:DeregisterJobDefinition */
	static readonly DeregisterJobDefinition = "batch:DeregisterJobDefinition";
	/** [Read] batch:DescribeComputeEnvironments */
	static readonly DescribeComputeEnvironments =
		"batch:DescribeComputeEnvironments";
	/** [Read] batch:DescribeConsumableResource */
	static readonly DescribeConsumableResource =
		"batch:DescribeConsumableResource";
	/** [Read] batch:DescribeJobDefinitions */
	static readonly DescribeJobDefinitions = "batch:DescribeJobDefinitions";
	/** [Read] batch:DescribeJobQueues */
	static readonly DescribeJobQueues = "batch:DescribeJobQueues";
	/** [Read] batch:DescribeJobs */
	static readonly DescribeJobs = "batch:DescribeJobs";
	/** [Read] batch:DescribeQuotaShare */
	static readonly DescribeQuotaShare = "batch:DescribeQuotaShare";
	/** [Read] batch:DescribeSchedulingPolicies */
	static readonly DescribeSchedulingPolicies =
		"batch:DescribeSchedulingPolicies";
	/** [Read] batch:DescribeServiceEnvironments */
	static readonly DescribeServiceEnvironments =
		"batch:DescribeServiceEnvironments";
	/** [Read] batch:DescribeServiceJob */
	static readonly DescribeServiceJob = "batch:DescribeServiceJob";
	/** [Read] batch:GetJobQueueSnapshot */
	static readonly actionGetJobQueueSnapshot = "batch:GetJobQueueSnapshot";
	/** [List] batch:ListConsumableResources */
	static readonly ListConsumableResources = "batch:ListConsumableResources";
	/** [List] batch:ListJobs */
	static readonly ListJobs = "batch:ListJobs";
	/** [List] batch:ListJobsByConsumableResource */
	static readonly ListJobsByConsumableResource =
		"batch:ListJobsByConsumableResource";
	/** [List] batch:ListQuotaShares */
	static readonly ListQuotaShares = "batch:ListQuotaShares";
	/** [Read] batch:ListSchedulingPolicies */
	static readonly ListSchedulingPolicies = "batch:ListSchedulingPolicies";
	/** [List] batch:ListServiceJobs */
	static readonly ListServiceJobs = "batch:ListServiceJobs";
	/** [Read] batch:ListTagsForResource */
	static readonly ListTagsForResource = "batch:ListTagsForResource";
	/** [Write] batch:RegisterJobDefinition */
	static readonly RegisterJobDefinition = "batch:RegisterJobDefinition";
	/** [Write] batch:SubmitJob */
	static readonly SubmitJob = "batch:SubmitJob";
	/** [Write] batch:SubmitServiceJob */
	static readonly SubmitServiceJob = "batch:SubmitServiceJob";
	/** [Tagging] batch:TagResource */
	static readonly TagResource = "batch:TagResource";
	/** [Write] batch:TerminateJob */
	static readonly TerminateJob = "batch:TerminateJob";
	/** [Write] batch:TerminateServiceJob */
	static readonly TerminateServiceJob = "batch:TerminateServiceJob";
	/** [Tagging] batch:UntagResource */
	static readonly UntagResource = "batch:UntagResource";
	/** [Write] batch:UpdateComputeEnvironment */
	static readonly UpdateComputeEnvironment = "batch:UpdateComputeEnvironment";
	/** [Write] batch:UpdateConsumableResource */
	static readonly UpdateConsumableResource = "batch:UpdateConsumableResource";
	/** [Write] batch:UpdateJobQueue */
	static readonly UpdateJobQueue = "batch:UpdateJobQueue";
	/** [Write] batch:UpdateQuotaShare */
	static readonly UpdateQuotaShare = "batch:UpdateQuotaShare";
	/** [Write] batch:UpdateSchedulingPolicy */
	static readonly UpdateSchedulingPolicy = "batch:UpdateSchedulingPolicy";
	/** [Write] batch:UpdateServiceEnvironment */
	static readonly UpdateServiceEnvironment = "batch:UpdateServiceEnvironment";
	/** [Write] batch:UpdateServiceJob */
	static readonly UpdateServiceJob = "batch:UpdateServiceJob";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BatchActions.DescribeComputeEnvironments,
		BatchActions.DescribeConsumableResource,
		BatchActions.DescribeJobDefinitions,
		BatchActions.DescribeJobQueues,
		BatchActions.DescribeJobs,
		BatchActions.DescribeQuotaShare,
		BatchActions.DescribeSchedulingPolicies,
		BatchActions.DescribeServiceEnvironments,
		BatchActions.DescribeServiceJob,
		BatchActions.actionGetJobQueueSnapshot,
		BatchActions.ListSchedulingPolicies,
		BatchActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BatchActions.CancelJob,
		BatchActions.CreateComputeEnvironment,
		BatchActions.CreateConsumableResource,
		BatchActions.CreateJobQueue,
		BatchActions.CreateQuotaShare,
		BatchActions.CreateSchedulingPolicy,
		BatchActions.CreateServiceEnvironment,
		BatchActions.DeleteComputeEnvironment,
		BatchActions.DeleteConsumableResource,
		BatchActions.DeleteJobQueue,
		BatchActions.DeleteQuotaShare,
		BatchActions.DeleteSchedulingPolicy,
		BatchActions.DeleteServiceEnvironment,
		BatchActions.DeregisterJobDefinition,
		BatchActions.RegisterJobDefinition,
		BatchActions.SubmitJob,
		BatchActions.SubmitServiceJob,
		BatchActions.TerminateJob,
		BatchActions.TerminateServiceJob,
		BatchActions.UpdateComputeEnvironment,
		BatchActions.UpdateConsumableResource,
		BatchActions.UpdateJobQueue,
		BatchActions.UpdateQuotaShare,
		BatchActions.UpdateSchedulingPolicy,
		BatchActions.UpdateServiceEnvironment,
		BatchActions.UpdateServiceJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BatchActions.ListConsumableResources,
		BatchActions.ListJobs,
		BatchActions.ListJobsByConsumableResource,
		BatchActions.ListQuotaShares,
		BatchActions.ListServiceJobs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BatchActions.TagResource,
		BatchActions.UntagResource,
	];
}

/**
 * Properties for building a compute-environment ARN.
 */
export interface BatchComputeEnvironmentArnProps {
	/** The ComputeEnvironmentName component of the ARN. */
	readonly computeEnvironmentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a compute-environment ARN.
 */
export interface BatchComputeEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ComputeEnvironmentName component. */
	readonly computeEnvironmentName: string;
}

/**
 * Properties for building a consumable-resource ARN.
 */
export interface BatchConsumableResourceArnProps {
	/** The ConsumableResourceName component of the ARN. */
	readonly consumableResourceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a consumable-resource ARN.
 */
export interface BatchConsumableResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConsumableResourceName component. */
	readonly consumableResourceName: string;
}

/**
 * Properties for building a job ARN.
 */
export interface BatchJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface BatchJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a job-definition ARN.
 */
export interface BatchJobDefinitionArnProps {
	/** The JobDefinitionName component of the ARN. */
	readonly jobDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job-definition ARN.
 */
export interface BatchJobDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobDefinitionName component. */
	readonly jobDefinitionName: string;
}

/**
 * Properties for building a job-definition-revision ARN.
 */
export interface BatchJobDefinitionRevisionArnProps {
	/** The JobDefinitionName component of the ARN. */
	readonly jobDefinitionName: string;
	/** The Revision component of the ARN. */
	readonly revision: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job-definition-revision ARN.
 */
export interface BatchJobDefinitionRevisionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobDefinitionName component. */
	readonly jobDefinitionName: string;
	/** The Revision component. */
	readonly revision: string;
}

/**
 * Properties for building a job-queue ARN.
 */
export interface BatchJobQueueArnProps {
	/** The JobQueueName component of the ARN. */
	readonly jobQueueName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job-queue ARN.
 */
export interface BatchJobQueueArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobQueueName component. */
	readonly jobQueueName: string;
}

/**
 * Properties for building a quota-share ARN.
 */
export interface BatchQuotaShareArnProps {
	/** The JobQueueName component of the ARN. */
	readonly jobQueueName: string;
	/** The QuotaShareName component of the ARN. */
	readonly quotaShareName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a quota-share ARN.
 */
export interface BatchQuotaShareArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobQueueName component. */
	readonly jobQueueName: string;
	/** The QuotaShareName component. */
	readonly quotaShareName: string;
}

/**
 * Properties for building a scheduling-policy ARN.
 */
export interface BatchSchedulingPolicyArnProps {
	/** The SchedulingPolicyName component of the ARN. */
	readonly schedulingPolicyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scheduling-policy ARN.
 */
export interface BatchSchedulingPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SchedulingPolicyName component. */
	readonly schedulingPolicyName: string;
}

/**
 * Properties for building a service-environment ARN.
 */
export interface BatchServiceEnvironmentArnProps {
	/** The ServiceEnvironmentName component of the ARN. */
	readonly serviceEnvironmentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service-environment ARN.
 */
export interface BatchServiceEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceEnvironmentName component. */
	readonly serviceEnvironmentName: string;
}

/**
 * Properties for building a service-job ARN.
 */
export interface BatchServiceJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a service-job ARN.
 */
export interface BatchServiceJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

const ComputeEnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):compute-environment\/(?<computeEnvironmentName>[^:/?]+)$/;
const ConsumableResourceArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):consumable-resource\/(?<consumableResourceName>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const JobDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-definition\/(?<jobDefinitionName>[^:/?]+)$/;
const JobDefinitionRevisionArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-definition\/(?<jobDefinitionName>[^:/?]+):(?<revision>[^:/?]+)$/;
const JobQueueArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-queue\/(?<jobQueueName>[^:/?]+)$/;
const QuotaShareArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-queue\/(?<jobQueueName>[^:/?]+)\/quota-share\/(?<quotaShareName>[^:/?]+)$/;
const SchedulingPolicyArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):scheduling-policy\/(?<schedulingPolicyName>[^:/?]+)$/;
const ServiceEnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):service-environment\/(?<serviceEnvironmentName>[^:/?]+)$/;
const ServiceJobArnRegex =
	/^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):service-job\/(?<jobId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for batch resources.
 */
export class BatchResources {
	/**
	 * Builds an ARN for the compute-environment resource.
	 */
	static computeEnvironment(props: BatchComputeEnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:compute-environment/${props.computeEnvironmentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the compute-environment resource.
	 */
	static isValidComputeEnvironmentArn(arn: string): boolean {
		return ComputeEnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a compute-environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComputeEnvironmentArn(
		arn: string,
	): BatchComputeEnvironmentArnComponents {
		const match = ComputeEnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid compute-environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			computeEnvironmentName: match.groups!.computeEnvironmentName,
		};
	}

	/**
	 * Builds an ARN for the consumable-resource resource.
	 */
	static consumableResource(props: BatchConsumableResourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:consumable-resource/${props.consumableResourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the consumable-resource resource.
	 */
	static isValidConsumableResourceArn(arn: string): boolean {
		return ConsumableResourceArnRegex.test(arn);
	}

	/**
	 * Parses a consumable-resource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConsumableResourceArn(
		arn: string,
	): BatchConsumableResourceArnComponents {
		const match = ConsumableResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid consumable-resource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			consumableResourceName: match.groups!.consumableResourceName,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: BatchJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): BatchJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the job-definition resource.
	 */
	static jobDefinition(props: BatchJobDefinitionArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:job-definition/${props.jobDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job-definition resource.
	 */
	static isValidJobDefinitionArn(arn: string): boolean {
		return JobDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a job-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobDefinitionArn(arn: string): BatchJobDefinitionArnComponents {
		const match = JobDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobDefinitionName: match.groups!.jobDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the job-definition-revision resource.
	 */
	static jobDefinitionRevision(
		props: BatchJobDefinitionRevisionArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:job-definition/${props.jobDefinitionName}:${props.revision}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job-definition-revision resource.
	 */
	static isValidJobDefinitionRevisionArn(arn: string): boolean {
		return JobDefinitionRevisionArnRegex.test(arn);
	}

	/**
	 * Parses a job-definition-revision ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobDefinitionRevisionArn(
		arn: string,
	): BatchJobDefinitionRevisionArnComponents {
		const match = JobDefinitionRevisionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job-definition-revision ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobDefinitionName: match.groups!.jobDefinitionName,
			revision: match.groups!.revision,
		};
	}

	/**
	 * Builds an ARN for the job-queue resource.
	 */
	static jobQueue(props: BatchJobQueueArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:job-queue/${props.jobQueueName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job-queue resource.
	 */
	static isValidJobQueueArn(arn: string): boolean {
		return JobQueueArnRegex.test(arn);
	}

	/**
	 * Parses a job-queue ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobQueueArn(arn: string): BatchJobQueueArnComponents {
		const match = JobQueueArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job-queue ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobQueueName: match.groups!.jobQueueName,
		};
	}

	/**
	 * Builds an ARN for the quota-share resource.
	 */
	static quotaShare(props: BatchQuotaShareArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:job-queue/${props.jobQueueName}/quota-share/${props.quotaShareName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the quota-share resource.
	 */
	static isValidQuotaShareArn(arn: string): boolean {
		return QuotaShareArnRegex.test(arn);
	}

	/**
	 * Parses a quota-share ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQuotaShareArn(arn: string): BatchQuotaShareArnComponents {
		const match = QuotaShareArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid quota-share ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobQueueName: match.groups!.jobQueueName,
			quotaShareName: match.groups!.quotaShareName,
		};
	}

	/**
	 * Builds an ARN for the scheduling-policy resource.
	 */
	static schedulingPolicy(props: BatchSchedulingPolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:scheduling-policy/${props.schedulingPolicyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scheduling-policy resource.
	 */
	static isValidSchedulingPolicyArn(arn: string): boolean {
		return SchedulingPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a scheduling-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSchedulingPolicyArn(
		arn: string,
	): BatchSchedulingPolicyArnComponents {
		const match = SchedulingPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scheduling-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			schedulingPolicyName: match.groups!.schedulingPolicyName,
		};
	}

	/**
	 * Builds an ARN for the service-environment resource.
	 */
	static serviceEnvironment(props: BatchServiceEnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:service-environment/${props.serviceEnvironmentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-environment resource.
	 */
	static isValidServiceEnvironmentArn(arn: string): boolean {
		return ServiceEnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a service-environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceEnvironmentArn(
		arn: string,
	): BatchServiceEnvironmentArnComponents {
		const match = ServiceEnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceEnvironmentName: match.groups!.serviceEnvironmentName,
		};
	}

	/**
	 * Builds an ARN for the service-job resource.
	 */
	static serviceJob(props: BatchServiceJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:batch:${props.region ?? "*"}:${props.account ?? "*"}:service-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service-job resource.
	 */
	static isValidServiceJobArn(arn: string): boolean {
		return ServiceJobArnRegex.test(arn);
	}

	/**
	 * Parses a service-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceJobArn(arn: string): BatchServiceJobArnComponents {
		const match = ServiceJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for batch.
 */
export class BatchOperations {
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = ["batch:CancelJob"];
	/** IAM actions required for the CreateComputeEnvironment API call. */
	static readonly CreateComputeEnvironment: string[] = [
		"batch:CreateComputeEnvironment",
		"iam:PassRole",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateConsumableResource API call. */
	static readonly CreateConsumableResource: string[] = [
		"batch:CreateConsumableResource",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateJobQueue API call. */
	static readonly CreateJobQueue: string[] = [
		"batch:CreateJobQueue",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateQuotaShare API call. */
	static readonly CreateQuotaShare: string[] = [
		"batch:CreateQuotaShare",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateSchedulingPolicy API call. */
	static readonly CreateSchedulingPolicy: string[] = [
		"batch:CreateSchedulingPolicy",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateServiceEnvironment API call. */
	static readonly CreateServiceEnvironment: string[] = [
		"batch:CreateServiceEnvironment",
		"batch:TagResource",
	];
	/** IAM actions required for the DeleteComputeEnvironment API call. */
	static readonly DeleteComputeEnvironment: string[] = [
		"batch:DeleteComputeEnvironment",
	];
	/** IAM actions required for the DeleteConsumableResource API call. */
	static readonly DeleteConsumableResource: string[] = [
		"batch:DeleteConsumableResource",
	];
	/** IAM actions required for the DeleteJobQueue API call. */
	static readonly DeleteJobQueue: string[] = ["batch:DeleteJobQueue"];
	/** IAM actions required for the DeleteQuotaShare API call. */
	static readonly DeleteQuotaShare: string[] = ["batch:DeleteQuotaShare"];
	/** IAM actions required for the DeleteSchedulingPolicy API call. */
	static readonly DeleteSchedulingPolicy: string[] = [
		"batch:DeleteSchedulingPolicy",
	];
	/** IAM actions required for the DeleteServiceEnvironment API call. */
	static readonly DeleteServiceEnvironment: string[] = [
		"batch:DeleteServiceEnvironment",
	];
	/** IAM actions required for the DeregisterJobDefinition API call. */
	static readonly DeregisterJobDefinition: string[] = [
		"batch:DeregisterJobDefinition",
	];
	/** IAM actions required for the DescribeComputeEnvironments API call. */
	static readonly DescribeComputeEnvironments: string[] = [
		"batch:DescribeComputeEnvironments",
	];
	/** IAM actions required for the DescribeConsumableResource API call. */
	static readonly DescribeConsumableResource: string[] = [
		"batch:DescribeConsumableResource",
	];
	/** IAM actions required for the DescribeJobDefinitions API call. */
	static readonly DescribeJobDefinitions: string[] = [
		"batch:DescribeJobDefinitions",
	];
	/** IAM actions required for the DescribeJobQueues API call. */
	static readonly DescribeJobQueues: string[] = ["batch:DescribeJobQueues"];
	/** IAM actions required for the DescribeJobs API call. */
	static readonly DescribeJobs: string[] = ["batch:DescribeJobs"];
	/** IAM actions required for the DescribeQuotaShare API call. */
	static readonly DescribeQuotaShare: string[] = ["batch:DescribeQuotaShare"];
	/** IAM actions required for the DescribeSchedulingPolicies API call. */
	static readonly DescribeSchedulingPolicies: string[] = [
		"batch:DescribeSchedulingPolicies",
	];
	/** IAM actions required for the DescribeServiceEnvironments API call. */
	static readonly DescribeServiceEnvironments: string[] = [
		"batch:DescribeServiceEnvironments",
	];
	/** IAM actions required for the DescribeServiceJob API call. */
	static readonly DescribeServiceJob: string[] = ["batch:DescribeServiceJob"];
	/** IAM actions required for the GetJobQueueSnapshot API call. */
	static readonly opGetJobQueueSnapshot: string[] = [
		"batch:GetJobQueueSnapshot",
	];
	/** IAM actions required for the ListConsumableResources API call. */
	static readonly ListConsumableResources: string[] = [
		"batch:ListConsumableResources",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["batch:ListJobs"];
	/** IAM actions required for the ListJobsByConsumableResource API call. */
	static readonly ListJobsByConsumableResource: string[] = [
		"batch:ListJobsByConsumableResource",
	];
	/** IAM actions required for the ListQuotaShares API call. */
	static readonly ListQuotaShares: string[] = ["batch:ListQuotaShares"];
	/** IAM actions required for the ListSchedulingPolicies API call. */
	static readonly ListSchedulingPolicies: string[] = [
		"batch:ListSchedulingPolicies",
	];
	/** IAM actions required for the ListServiceJobs API call. */
	static readonly ListServiceJobs: string[] = ["batch:ListServiceJobs"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["batch:ListTagsForResource"];
	/** IAM actions required for the RegisterJobDefinition API call. */
	static readonly RegisterJobDefinition: string[] = [
		"iam:PassRole",
		"batch:RegisterJobDefinition",
		"batch:TagResource",
	];
	/** IAM actions required for the SubmitJob API call. */
	static readonly SubmitJob: string[] = [
		"batch:SubmitJob",
		"batch:TagResource",
	];
	/** IAM actions required for the SubmitServiceJob API call. */
	static readonly SubmitServiceJob: string[] = [
		"iam:PassRole",
		"batch:SubmitServiceJob",
		"batch:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["batch:TagResource"];
	/** IAM actions required for the TerminateJob API call. */
	static readonly TerminateJob: string[] = ["batch:TerminateJob"];
	/** IAM actions required for the TerminateServiceJob API call. */
	static readonly TerminateServiceJob: string[] = ["batch:TerminateServiceJob"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["batch:UntagResource"];
	/** IAM actions required for the UpdateComputeEnvironment API call. */
	static readonly UpdateComputeEnvironment: string[] = [
		"iam:PassRole",
		"batch:UpdateComputeEnvironment",
	];
	/** IAM actions required for the UpdateConsumableResource API call. */
	static readonly UpdateConsumableResource: string[] = [
		"batch:UpdateConsumableResource",
	];
	/** IAM actions required for the UpdateJobQueue API call. */
	static readonly UpdateJobQueue: string[] = ["batch:UpdateJobQueue"];
	/** IAM actions required for the UpdateQuotaShare API call. */
	static readonly UpdateQuotaShare: string[] = ["batch:UpdateQuotaShare"];
	/** IAM actions required for the UpdateSchedulingPolicy API call. */
	static readonly UpdateSchedulingPolicy: string[] = [
		"batch:UpdateSchedulingPolicy",
	];
	/** IAM actions required for the UpdateServiceEnvironment API call. */
	static readonly UpdateServiceEnvironment: string[] = [
		"batch:UpdateServiceEnvironment",
	];
	/** IAM actions required for the UpdateServiceJob API call. */
	static readonly UpdateServiceJob: string[] = ["batch:UpdateServiceJob"];
}

/**
 * Condition key constants and builders for batch.
 */
export class BatchConditions {
	/** Condition keys applicable to the CreateComputeEnvironment action. */
	static readonly CreateComputeEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConsumableResource action. */
	static readonly CreateConsumableResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJobQueue action. */
	static readonly CreateJobQueueConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQuotaShare action. */
	static readonly CreateQuotaShareConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchedulingPolicy action. */
	static readonly CreateSchedulingPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceEnvironment action. */
	static readonly CreateServiceEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterJobDefinition action. */
	static readonly RegisterJobDefinitionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"batch:AWSLogsCreateGroup",
		"batch:AWSLogsGroup",
		"batch:AWSLogsRegion",
		"batch:AWSLogsStreamPrefix",
		"batch:EKSImage",
		"batch:EKSNamespace",
		"batch:EKSPrivileged",
		"batch:EKSRunAsGroup",
		"batch:EKSRunAsUser",
		"batch:EKSServiceAccountName",
		"batch:Image",
		"batch:LogDriver",
		"batch:Privileged",
		"batch:User",
	];
	/** Condition keys applicable to the SubmitJob action. */
	static readonly SubmitJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the SubmitServiceJob action. */
	static readonly SubmitServiceJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"batch:SchedulingPriority",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateServiceJob action. */
	static readonly UpdateServiceJobConditionKeys: string[] = [
		"batch:SchedulingPriority",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: batch:AWSLogsCreateGroup (Bool) */
	static readonly AWS_LOGS_CREATE_GROUP = "batch:AWSLogsCreateGroup";
	/** Condition key: batch:AWSLogsGroup (String) */
	static readonly AWS_LOGS_GROUP = "batch:AWSLogsGroup";
	/** Condition key: batch:AWSLogsRegion (String) */
	static readonly AWS_LOGS_REGION = "batch:AWSLogsRegion";
	/** Condition key: batch:AWSLogsStreamPrefix (String) */
	static readonly AWS_LOGS_STREAM_PREFIX = "batch:AWSLogsStreamPrefix";
	/** Condition key: batch:EKSImage (String) */
	static readonly EKS_IMAGE = "batch:EKSImage";
	/** Condition key: batch:EKSNamespace (String) */
	static readonly EKS_NAMESPACE = "batch:EKSNamespace";
	/** Condition key: batch:EKSPrivileged (Bool) */
	static readonly EKS_PRIVILEGED = "batch:EKSPrivileged";
	/** Condition key: batch:EKSRunAsGroup (Numeric) */
	static readonly EKS_RUN_AS_GROUP = "batch:EKSRunAsGroup";
	/** Condition key: batch:EKSRunAsUser (Numeric) */
	static readonly EKS_RUN_AS_USER = "batch:EKSRunAsUser";
	/** Condition key: batch:EKSServiceAccountName (String) */
	static readonly EKS_SERVICE_ACCOUNT_NAME = "batch:EKSServiceAccountName";
	/** Condition key: batch:Image (String) */
	static readonly IMAGE = "batch:Image";
	/** Condition key: batch:LogDriver (String) */
	static readonly LOG_DRIVER = "batch:LogDriver";
	/** Condition key: batch:Privileged (Bool) */
	static readonly PRIVILEGED = "batch:Privileged";
	/** Condition key: batch:SchedulingPriority (Numeric) */
	static readonly SCHEDULING_PRIORITY = "batch:SchedulingPriority";
	/** Condition key: batch:ShareIdentifier (String) */
	static readonly SHARE_IDENTIFIER = "batch:ShareIdentifier";
	/** Condition key: batch:User (String) */
	static readonly USER = "batch:User";

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
	 * Generates a condition block for `batch:AWSLogsCreateGroup`.
	 */
	static awsLogsCreateGroup(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "batch:AWSLogsCreateGroup": value } };
	}

	/**
	 * Generates a condition block for `batch:AWSLogsGroup`.
	 */
	static awsLogsGroup(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:AWSLogsGroup": value } };
	}

	/**
	 * Generates a condition block for `batch:AWSLogsRegion`.
	 */
	static awsLogsRegion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:AWSLogsRegion": value } };
	}

	/**
	 * Generates a condition block for `batch:AWSLogsStreamPrefix`.
	 */
	static awsLogsStreamPrefix(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:AWSLogsStreamPrefix": value } };
	}

	/**
	 * Generates a condition block for `batch:EKSImage`.
	 */
	static eksImage(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:EKSImage": value } };
	}

	/**
	 * Generates a condition block for `batch:EKSNamespace`.
	 */
	static eksNamespace(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:EKSNamespace": value } };
	}

	/**
	 * Generates a condition block for `batch:EKSPrivileged`.
	 */
	static eksPrivileged(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "batch:EKSPrivileged": value } };
	}

	/**
	 * Generates a condition block for `batch:EKSRunAsGroup`.
	 */
	static eksRunAsGroup(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "batch:EKSRunAsGroup": value } };
	}

	/**
	 * Generates a condition block for `batch:EKSRunAsUser`.
	 */
	static eksRunAsUser(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "batch:EKSRunAsUser": value } };
	}

	/**
	 * Generates a condition block for `batch:EKSServiceAccountName`.
	 */
	static eksServiceAccountName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:EKSServiceAccountName": value } };
	}

	/**
	 * Generates a condition block for `batch:Image`.
	 */
	static image(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:Image": value } };
	}

	/**
	 * Generates a condition block for `batch:LogDriver`.
	 */
	static logDriver(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:LogDriver": value } };
	}

	/**
	 * Generates a condition block for `batch:Privileged`.
	 */
	static privileged(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "batch:Privileged": value } };
	}

	/**
	 * Generates a condition block for `batch:SchedulingPriority`.
	 */
	static schedulingPriority(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "batch:SchedulingPriority": value } };
	}

	/**
	 * Generates a condition block for `batch:ShareIdentifier`.
	 */
	static shareIdentifier(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:ShareIdentifier": value } };
	}

	/**
	 * Generates a condition block for `batch:User`.
	 */
	static user(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "batch:User": value } };
	}
}
