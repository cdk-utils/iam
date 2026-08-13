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
	static readonly CANCEL_JOB = "batch:CancelJob";
	/** [Write] batch:CreateComputeEnvironment */
	static readonly CREATE_COMPUTE_ENVIRONMENT = "batch:CreateComputeEnvironment";
	/** [Write] batch:CreateConsumableResource */
	static readonly CREATE_CONSUMABLE_RESOURCE = "batch:CreateConsumableResource";
	/** [Write] batch:CreateJobQueue */
	static readonly CREATE_JOB_QUEUE = "batch:CreateJobQueue";
	/** [Write] batch:CreateQuotaShare */
	static readonly CREATE_QUOTA_SHARE = "batch:CreateQuotaShare";
	/** [Write] batch:CreateSchedulingPolicy */
	static readonly CREATE_SCHEDULING_POLICY = "batch:CreateSchedulingPolicy";
	/** [Write] batch:CreateServiceEnvironment */
	static readonly CREATE_SERVICE_ENVIRONMENT = "batch:CreateServiceEnvironment";
	/** [Write] batch:DeleteComputeEnvironment */
	static readonly DELETE_COMPUTE_ENVIRONMENT = "batch:DeleteComputeEnvironment";
	/** [Write] batch:DeleteConsumableResource */
	static readonly DELETE_CONSUMABLE_RESOURCE = "batch:DeleteConsumableResource";
	/** [Write] batch:DeleteJobQueue */
	static readonly DELETE_JOB_QUEUE = "batch:DeleteJobQueue";
	/** [Write] batch:DeleteQuotaShare */
	static readonly DELETE_QUOTA_SHARE = "batch:DeleteQuotaShare";
	/** [Write] batch:DeleteSchedulingPolicy */
	static readonly DELETE_SCHEDULING_POLICY = "batch:DeleteSchedulingPolicy";
	/** [Write] batch:DeleteServiceEnvironment */
	static readonly DELETE_SERVICE_ENVIRONMENT = "batch:DeleteServiceEnvironment";
	/** [Write] batch:DeregisterJobDefinition */
	static readonly DEREGISTER_JOB_DEFINITION = "batch:DeregisterJobDefinition";
	/** [Read] batch:DescribeComputeEnvironments */
	static readonly DESCRIBE_COMPUTE_ENVIRONMENTS =
		"batch:DescribeComputeEnvironments";
	/** [Read] batch:DescribeConsumableResource */
	static readonly DESCRIBE_CONSUMABLE_RESOURCE =
		"batch:DescribeConsumableResource";
	/** [Read] batch:DescribeJobDefinitions */
	static readonly DESCRIBE_JOB_DEFINITIONS = "batch:DescribeJobDefinitions";
	/** [Read] batch:DescribeJobQueues */
	static readonly DESCRIBE_JOB_QUEUES = "batch:DescribeJobQueues";
	/** [Read] batch:DescribeJobs */
	static readonly DESCRIBE_JOBS = "batch:DescribeJobs";
	/** [Read] batch:DescribeQuotaShare */
	static readonly DESCRIBE_QUOTA_SHARE = "batch:DescribeQuotaShare";
	/** [Read] batch:DescribeSchedulingPolicies */
	static readonly DESCRIBE_SCHEDULING_POLICIES =
		"batch:DescribeSchedulingPolicies";
	/** [Read] batch:DescribeServiceEnvironments */
	static readonly DESCRIBE_SERVICE_ENVIRONMENTS =
		"batch:DescribeServiceEnvironments";
	/** [Read] batch:DescribeServiceJob */
	static readonly DESCRIBE_SERVICE_JOB = "batch:DescribeServiceJob";
	/** [Read] batch:GetJobQueueSnapshot */
	static readonly GET_JOB_QUEUE_SNAPSHOT = "batch:GetJobQueueSnapshot";
	/** [List] batch:ListConsumableResources */
	static readonly LIST_CONSUMABLE_RESOURCES = "batch:ListConsumableResources";
	/** [List] batch:ListJobs */
	static readonly LIST_JOBS = "batch:ListJobs";
	/** [List] batch:ListJobsByConsumableResource */
	static readonly LIST_JOBS_BY_CONSUMABLE_RESOURCE =
		"batch:ListJobsByConsumableResource";
	/** [List] batch:ListQuotaShares */
	static readonly LIST_QUOTA_SHARES = "batch:ListQuotaShares";
	/** [Read] batch:ListSchedulingPolicies */
	static readonly LIST_SCHEDULING_POLICIES = "batch:ListSchedulingPolicies";
	/** [List] batch:ListServiceJobs */
	static readonly LIST_SERVICE_JOBS = "batch:ListServiceJobs";
	/** [Read] batch:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "batch:ListTagsForResource";
	/** [Write] batch:RegisterJobDefinition */
	static readonly REGISTER_JOB_DEFINITION = "batch:RegisterJobDefinition";
	/** [Write] batch:SubmitJob */
	static readonly SUBMIT_JOB = "batch:SubmitJob";
	/** [Write] batch:SubmitServiceJob */
	static readonly SUBMIT_SERVICE_JOB = "batch:SubmitServiceJob";
	/** [Tagging] batch:TagResource */
	static readonly TAG_RESOURCE = "batch:TagResource";
	/** [Write] batch:TerminateJob */
	static readonly TERMINATE_JOB = "batch:TerminateJob";
	/** [Write] batch:TerminateServiceJob */
	static readonly TERMINATE_SERVICE_JOB = "batch:TerminateServiceJob";
	/** [Tagging] batch:UntagResource */
	static readonly UNTAG_RESOURCE = "batch:UntagResource";
	/** [Write] batch:UpdateComputeEnvironment */
	static readonly UPDATE_COMPUTE_ENVIRONMENT = "batch:UpdateComputeEnvironment";
	/** [Write] batch:UpdateConsumableResource */
	static readonly UPDATE_CONSUMABLE_RESOURCE = "batch:UpdateConsumableResource";
	/** [Write] batch:UpdateJobQueue */
	static readonly UPDATE_JOB_QUEUE = "batch:UpdateJobQueue";
	/** [Write] batch:UpdateQuotaShare */
	static readonly UPDATE_QUOTA_SHARE = "batch:UpdateQuotaShare";
	/** [Write] batch:UpdateSchedulingPolicy */
	static readonly UPDATE_SCHEDULING_POLICY = "batch:UpdateSchedulingPolicy";
	/** [Write] batch:UpdateServiceEnvironment */
	static readonly UPDATE_SERVICE_ENVIRONMENT = "batch:UpdateServiceEnvironment";
	/** [Write] batch:UpdateServiceJob */
	static readonly UPDATE_SERVICE_JOB = "batch:UpdateServiceJob";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BatchActions.DESCRIBE_COMPUTE_ENVIRONMENTS,
		BatchActions.DESCRIBE_CONSUMABLE_RESOURCE,
		BatchActions.DESCRIBE_JOB_DEFINITIONS,
		BatchActions.DESCRIBE_JOB_QUEUES,
		BatchActions.DESCRIBE_JOBS,
		BatchActions.DESCRIBE_QUOTA_SHARE,
		BatchActions.DESCRIBE_SCHEDULING_POLICIES,
		BatchActions.DESCRIBE_SERVICE_ENVIRONMENTS,
		BatchActions.DESCRIBE_SERVICE_JOB,
		BatchActions.GET_JOB_QUEUE_SNAPSHOT,
		BatchActions.LIST_SCHEDULING_POLICIES,
		BatchActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BatchActions.CANCEL_JOB,
		BatchActions.CREATE_COMPUTE_ENVIRONMENT,
		BatchActions.CREATE_CONSUMABLE_RESOURCE,
		BatchActions.CREATE_JOB_QUEUE,
		BatchActions.CREATE_QUOTA_SHARE,
		BatchActions.CREATE_SCHEDULING_POLICY,
		BatchActions.CREATE_SERVICE_ENVIRONMENT,
		BatchActions.DELETE_COMPUTE_ENVIRONMENT,
		BatchActions.DELETE_CONSUMABLE_RESOURCE,
		BatchActions.DELETE_JOB_QUEUE,
		BatchActions.DELETE_QUOTA_SHARE,
		BatchActions.DELETE_SCHEDULING_POLICY,
		BatchActions.DELETE_SERVICE_ENVIRONMENT,
		BatchActions.DEREGISTER_JOB_DEFINITION,
		BatchActions.REGISTER_JOB_DEFINITION,
		BatchActions.SUBMIT_JOB,
		BatchActions.SUBMIT_SERVICE_JOB,
		BatchActions.TERMINATE_JOB,
		BatchActions.TERMINATE_SERVICE_JOB,
		BatchActions.UPDATE_COMPUTE_ENVIRONMENT,
		BatchActions.UPDATE_CONSUMABLE_RESOURCE,
		BatchActions.UPDATE_JOB_QUEUE,
		BatchActions.UPDATE_QUOTA_SHARE,
		BatchActions.UPDATE_SCHEDULING_POLICY,
		BatchActions.UPDATE_SERVICE_ENVIRONMENT,
		BatchActions.UPDATE_SERVICE_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		BatchActions.LIST_CONSUMABLE_RESOURCES,
		BatchActions.LIST_JOBS,
		BatchActions.LIST_JOBS_BY_CONSUMABLE_RESOURCE,
		BatchActions.LIST_QUOTA_SHARES,
		BatchActions.LIST_SERVICE_JOBS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BatchActions.TAG_RESOURCE,
		BatchActions.UNTAG_RESOURCE,
	];
}

const ComputeEnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):compute-environment/(?<computeEnvironmentName>[^:/?]+)$",
);
const ConsumableResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):consumable-resource/(?<consumableResourceName>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobId>[^:/?]+)$",
);
const JobDefinitionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-definition/(?<jobDefinitionName>[^:/?]+)$",
);
const JobDefinitionRevisionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-definition/(?<jobDefinitionName>[^:/?]+):(?<revision>[^:/?]+)$",
);
const JobQueueArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-queue/(?<jobQueueName>[^:/?]+)$",
);
const QuotaShareArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):job-queue/(?<jobQueueName>[^:/?]+)/quota-share/(?<quotaShareName>[^:/?]+)$",
);
const SchedulingPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):scheduling-policy/(?<schedulingPolicyName>[^:/?]+)$",
);
const ServiceEnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):service-environment/(?<serviceEnvironmentName>[^:/?]+)$",
);
const ServiceJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):batch:(?<region>[^:]*):(?<account>[^:]*):service-job/(?<jobId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for batch resources.
 */
export class BatchResources {
	/**
	 * Builds an ARN for the compute-environment resource.
	 */
	static computeEnvironment(props: {
		/** The ComputeEnvironmentName component of the ARN. */
		readonly computeEnvironmentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseComputeEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		computeEnvironmentName: string;
	} {
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
	static consumableResource(props: {
		/** The ConsumableResourceName component of the ARN. */
		readonly consumableResourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConsumableResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		consumableResourceName: string;
	} {
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
	static job(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static jobDefinition(props: {
		/** The JobDefinitionName component of the ARN. */
		readonly jobDefinitionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobDefinitionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobDefinitionName: string;
	} {
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
	static jobDefinitionRevision(props: {
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
	}): string {
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
	static parseJobDefinitionRevisionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobDefinitionName: string;
		revision: string;
	} {
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
	static jobQueue(props: {
		/** The JobQueueName component of the ARN. */
		readonly jobQueueName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobQueueArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobQueueName: string;
	} {
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
	static quotaShare(props: {
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
	}): string {
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
	static parseQuotaShareArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobQueueName: string;
		quotaShareName: string;
	} {
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
	static schedulingPolicy(props: {
		/** The SchedulingPolicyName component of the ARN. */
		readonly schedulingPolicyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSchedulingPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		schedulingPolicyName: string;
	} {
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
	static serviceEnvironment(props: {
		/** The ServiceEnvironmentName component of the ARN. */
		readonly serviceEnvironmentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceEnvironmentName: string;
	} {
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
	static serviceJob(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static readonly CANCEL_JOB: string[] = ["batch:CancelJob"];
	/** IAM actions required for the CreateComputeEnvironment API call. */
	static readonly CREATE_COMPUTE_ENVIRONMENT: string[] = [
		"batch:CreateComputeEnvironment",
		"iam:PassRole",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateConsumableResource API call. */
	static readonly CREATE_CONSUMABLE_RESOURCE: string[] = [
		"batch:CreateConsumableResource",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateJobQueue API call. */
	static readonly CREATE_JOB_QUEUE: string[] = [
		"batch:CreateJobQueue",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateQuotaShare API call. */
	static readonly CREATE_QUOTA_SHARE: string[] = [
		"batch:CreateQuotaShare",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateSchedulingPolicy API call. */
	static readonly CREATE_SCHEDULING_POLICY: string[] = [
		"batch:CreateSchedulingPolicy",
		"batch:TagResource",
	];
	/** IAM actions required for the CreateServiceEnvironment API call. */
	static readonly CREATE_SERVICE_ENVIRONMENT: string[] = [
		"batch:CreateServiceEnvironment",
		"batch:TagResource",
	];
	/** IAM actions required for the DeleteComputeEnvironment API call. */
	static readonly DELETE_COMPUTE_ENVIRONMENT: string[] = [
		"batch:DeleteComputeEnvironment",
	];
	/** IAM actions required for the DeleteConsumableResource API call. */
	static readonly DELETE_CONSUMABLE_RESOURCE: string[] = [
		"batch:DeleteConsumableResource",
	];
	/** IAM actions required for the DeleteJobQueue API call. */
	static readonly DELETE_JOB_QUEUE: string[] = ["batch:DeleteJobQueue"];
	/** IAM actions required for the DeleteQuotaShare API call. */
	static readonly DELETE_QUOTA_SHARE: string[] = ["batch:DeleteQuotaShare"];
	/** IAM actions required for the DeleteSchedulingPolicy API call. */
	static readonly DELETE_SCHEDULING_POLICY: string[] = [
		"batch:DeleteSchedulingPolicy",
	];
	/** IAM actions required for the DeleteServiceEnvironment API call. */
	static readonly DELETE_SERVICE_ENVIRONMENT: string[] = [
		"batch:DeleteServiceEnvironment",
	];
	/** IAM actions required for the DeregisterJobDefinition API call. */
	static readonly DEREGISTER_JOB_DEFINITION: string[] = [
		"batch:DeregisterJobDefinition",
	];
	/** IAM actions required for the DescribeComputeEnvironments API call. */
	static readonly DESCRIBE_COMPUTE_ENVIRONMENTS: string[] = [
		"batch:DescribeComputeEnvironments",
	];
	/** IAM actions required for the DescribeConsumableResource API call. */
	static readonly DESCRIBE_CONSUMABLE_RESOURCE: string[] = [
		"batch:DescribeConsumableResource",
	];
	/** IAM actions required for the DescribeJobDefinitions API call. */
	static readonly DESCRIBE_JOB_DEFINITIONS: string[] = [
		"batch:DescribeJobDefinitions",
	];
	/** IAM actions required for the DescribeJobQueues API call. */
	static readonly DESCRIBE_JOB_QUEUES: string[] = ["batch:DescribeJobQueues"];
	/** IAM actions required for the DescribeJobs API call. */
	static readonly DESCRIBE_JOBS: string[] = ["batch:DescribeJobs"];
	/** IAM actions required for the DescribeQuotaShare API call. */
	static readonly DESCRIBE_QUOTA_SHARE: string[] = ["batch:DescribeQuotaShare"];
	/** IAM actions required for the DescribeSchedulingPolicies API call. */
	static readonly DESCRIBE_SCHEDULING_POLICIES: string[] = [
		"batch:DescribeSchedulingPolicies",
	];
	/** IAM actions required for the DescribeServiceEnvironments API call. */
	static readonly DESCRIBE_SERVICE_ENVIRONMENTS: string[] = [
		"batch:DescribeServiceEnvironments",
	];
	/** IAM actions required for the DescribeServiceJob API call. */
	static readonly DESCRIBE_SERVICE_JOB: string[] = ["batch:DescribeServiceJob"];
	/** IAM actions required for the GetJobQueueSnapshot API call. */
	static readonly GET_JOB_QUEUE_SNAPSHOT: string[] = [
		"batch:GetJobQueueSnapshot",
	];
	/** IAM actions required for the ListConsumableResources API call. */
	static readonly LIST_CONSUMABLE_RESOURCES: string[] = [
		"batch:ListConsumableResources",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["batch:ListJobs"];
	/** IAM actions required for the ListJobsByConsumableResource API call. */
	static readonly LIST_JOBS_BY_CONSUMABLE_RESOURCE: string[] = [
		"batch:ListJobsByConsumableResource",
	];
	/** IAM actions required for the ListQuotaShares API call. */
	static readonly LIST_QUOTA_SHARES: string[] = ["batch:ListQuotaShares"];
	/** IAM actions required for the ListSchedulingPolicies API call. */
	static readonly LIST_SCHEDULING_POLICIES: string[] = [
		"batch:ListSchedulingPolicies",
	];
	/** IAM actions required for the ListServiceJobs API call. */
	static readonly LIST_SERVICE_JOBS: string[] = ["batch:ListServiceJobs"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"batch:ListTagsForResource",
	];
	/** IAM actions required for the RegisterJobDefinition API call. */
	static readonly REGISTER_JOB_DEFINITION: string[] = [
		"iam:PassRole",
		"batch:RegisterJobDefinition",
		"batch:TagResource",
	];
	/** IAM actions required for the SubmitJob API call. */
	static readonly SUBMIT_JOB: string[] = [
		"batch:SubmitJob",
		"batch:TagResource",
	];
	/** IAM actions required for the SubmitServiceJob API call. */
	static readonly SUBMIT_SERVICE_JOB: string[] = [
		"iam:PassRole",
		"batch:SubmitServiceJob",
		"batch:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["batch:TagResource"];
	/** IAM actions required for the TerminateJob API call. */
	static readonly TERMINATE_JOB: string[] = ["batch:TerminateJob"];
	/** IAM actions required for the TerminateServiceJob API call. */
	static readonly TERMINATE_SERVICE_JOB: string[] = [
		"batch:TerminateServiceJob",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["batch:UntagResource"];
	/** IAM actions required for the UpdateComputeEnvironment API call. */
	static readonly UPDATE_COMPUTE_ENVIRONMENT: string[] = [
		"iam:PassRole",
		"batch:UpdateComputeEnvironment",
	];
	/** IAM actions required for the UpdateConsumableResource API call. */
	static readonly UPDATE_CONSUMABLE_RESOURCE: string[] = [
		"batch:UpdateConsumableResource",
	];
	/** IAM actions required for the UpdateJobQueue API call. */
	static readonly UPDATE_JOB_QUEUE: string[] = ["batch:UpdateJobQueue"];
	/** IAM actions required for the UpdateQuotaShare API call. */
	static readonly UPDATE_QUOTA_SHARE: string[] = ["batch:UpdateQuotaShare"];
	/** IAM actions required for the UpdateSchedulingPolicy API call. */
	static readonly UPDATE_SCHEDULING_POLICY: string[] = [
		"batch:UpdateSchedulingPolicy",
	];
	/** IAM actions required for the UpdateServiceEnvironment API call. */
	static readonly UPDATE_SERVICE_ENVIRONMENT: string[] = [
		"batch:UpdateServiceEnvironment",
	];
	/** IAM actions required for the UpdateServiceJob API call. */
	static readonly UPDATE_SERVICE_JOB: string[] = ["batch:UpdateServiceJob"];
}

/**
 * Condition key constants and builders for batch.
 */
export class BatchConditions {
	/** Condition keys applicable to the CreateComputeEnvironment action. */
	static readonly CREATE_COMPUTE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConsumableResource action. */
	static readonly CREATE_CONSUMABLE_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJobQueue action. */
	static readonly CREATE_JOB_QUEUE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQuotaShare action. */
	static readonly CREATE_QUOTA_SHARE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchedulingPolicy action. */
	static readonly CREATE_SCHEDULING_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServiceEnvironment action. */
	static readonly CREATE_SERVICE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterJobDefinition action. */
	static readonly REGISTER_JOB_DEFINITION_CONDITION_KEYS: string[] = [
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
	static readonly SUBMIT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the SubmitServiceJob action. */
	static readonly SUBMIT_SERVICE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"batch:SchedulingPriority",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateServiceJob action. */
	static readonly UPDATE_SERVICE_JOB_CONDITION_KEYS: string[] = [
		"batch:SchedulingPriority",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
