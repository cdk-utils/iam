// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/emr-containers.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the emr-containers service.
 */
export class EmrContainersActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "emr-containers";

	/** [Write] emr-containers:CancelJobRun */
	static readonly CANCEL_JOB_RUN = "emr-containers:CancelJobRun";
	/** [Write] emr-containers:CreateCertificate */
	static readonly CREATE_CERTIFICATE = "emr-containers:CreateCertificate";
	/** [Write] emr-containers:CreateJobTemplate */
	static readonly CREATE_JOB_TEMPLATE = "emr-containers:CreateJobTemplate";
	/** [Write] emr-containers:CreateManagedEndpoint */
	static readonly CREATE_MANAGED_ENDPOINT =
		"emr-containers:CreateManagedEndpoint";
	/** [Write] emr-containers:CreateSecurityConfiguration */
	static readonly CREATE_SECURITY_CONFIGURATION =
		"emr-containers:CreateSecurityConfiguration";
	/** [Write] emr-containers:CreateVirtualCluster */
	static readonly CREATE_VIRTUAL_CLUSTER =
		"emr-containers:CreateVirtualCluster";
	/** [Write] emr-containers:DeleteJobTemplate */
	static readonly DELETE_JOB_TEMPLATE = "emr-containers:DeleteJobTemplate";
	/** [Write] emr-containers:DeleteManagedEndpoint */
	static readonly DELETE_MANAGED_ENDPOINT =
		"emr-containers:DeleteManagedEndpoint";
	/** [Write] emr-containers:DeleteSecurityConfiguration */
	static readonly DELETE_SECURITY_CONFIGURATION =
		"emr-containers:DeleteSecurityConfiguration";
	/** [Write] emr-containers:DeleteVirtualCluster */
	static readonly DELETE_VIRTUAL_CLUSTER =
		"emr-containers:DeleteVirtualCluster";
	/** [Read] emr-containers:DescribeJobRun */
	static readonly DESCRIBE_JOB_RUN = "emr-containers:DescribeJobRun";
	/** [Read] emr-containers:DescribeJobTemplate */
	static readonly DESCRIBE_JOB_TEMPLATE = "emr-containers:DescribeJobTemplate";
	/** [Read] emr-containers:DescribeManagedEndpoint */
	static readonly DESCRIBE_MANAGED_ENDPOINT =
		"emr-containers:DescribeManagedEndpoint";
	/** [Read] emr-containers:DescribeSecurityConfiguration */
	static readonly DESCRIBE_SECURITY_CONFIGURATION =
		"emr-containers:DescribeSecurityConfiguration";
	/** [Read] emr-containers:DescribeVirtualCluster */
	static readonly DESCRIBE_VIRTUAL_CLUSTER =
		"emr-containers:DescribeVirtualCluster";
	/** [Write] emr-containers:GetManagedEndpointSessionCredentials */
	static readonly GET_MANAGED_ENDPOINT_SESSION_CREDENTIALS =
		"emr-containers:GetManagedEndpointSessionCredentials";
	/** [List] emr-containers:ListJobRuns */
	static readonly LIST_JOB_RUNS = "emr-containers:ListJobRuns";
	/** [List] emr-containers:ListJobTemplates */
	static readonly LIST_JOB_TEMPLATES = "emr-containers:ListJobTemplates";
	/** [List] emr-containers:ListManagedEndpoints */
	static readonly LIST_MANAGED_ENDPOINTS =
		"emr-containers:ListManagedEndpoints";
	/** [List] emr-containers:ListSecurityConfigurations */
	static readonly LIST_SECURITY_CONFIGURATIONS =
		"emr-containers:ListSecurityConfigurations";
	/** [List] emr-containers:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "emr-containers:ListTagsForResource";
	/** [List] emr-containers:ListVirtualClusters */
	static readonly LIST_VIRTUAL_CLUSTERS = "emr-containers:ListVirtualClusters";
	/** [Write] emr-containers:StartJobRun */
	static readonly START_JOB_RUN = "emr-containers:StartJobRun";
	/** [Tagging] emr-containers:TagResource */
	static readonly TAG_RESOURCE = "emr-containers:TagResource";
	/** [Tagging] emr-containers:UntagResource */
	static readonly UNTAG_RESOURCE = "emr-containers:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EmrContainersActions.DESCRIBE_JOB_RUN,
		EmrContainersActions.DESCRIBE_JOB_TEMPLATE,
		EmrContainersActions.DESCRIBE_MANAGED_ENDPOINT,
		EmrContainersActions.DESCRIBE_SECURITY_CONFIGURATION,
		EmrContainersActions.DESCRIBE_VIRTUAL_CLUSTER,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EmrContainersActions.CANCEL_JOB_RUN,
		EmrContainersActions.CREATE_CERTIFICATE,
		EmrContainersActions.CREATE_JOB_TEMPLATE,
		EmrContainersActions.CREATE_MANAGED_ENDPOINT,
		EmrContainersActions.CREATE_SECURITY_CONFIGURATION,
		EmrContainersActions.CREATE_VIRTUAL_CLUSTER,
		EmrContainersActions.DELETE_JOB_TEMPLATE,
		EmrContainersActions.DELETE_MANAGED_ENDPOINT,
		EmrContainersActions.DELETE_SECURITY_CONFIGURATION,
		EmrContainersActions.DELETE_VIRTUAL_CLUSTER,
		EmrContainersActions.GET_MANAGED_ENDPOINT_SESSION_CREDENTIALS,
		EmrContainersActions.START_JOB_RUN,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		EmrContainersActions.LIST_JOB_RUNS,
		EmrContainersActions.LIST_JOB_TEMPLATES,
		EmrContainersActions.LIST_MANAGED_ENDPOINTS,
		EmrContainersActions.LIST_SECURITY_CONFIGURATIONS,
		EmrContainersActions.LIST_TAGS_FOR_RESOURCE,
		EmrContainersActions.LIST_VIRTUAL_CLUSTERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EmrContainersActions.TAG_RESOURCE,
		EmrContainersActions.UNTAG_RESOURCE,
	];
}

const JobRunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):/virtualclusters/(?<virtualClusterId>[^:/?]+)/jobruns/(?<jobRunId>[^:/?]+)$",
);
const JobTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):/jobtemplates/(?<jobTemplateId>[^:/?]+)$",
);
const ManagedEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):/virtualclusters/(?<virtualClusterId>[^:/?]+)/endpoints/(?<endpointId>[^:/?]+)$",
);
const SecurityConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):/securityconfigurations/(?<securityConfigurationId>[^:/?]+)$",
);
const VirtualClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):/virtualclusters/(?<virtualClusterId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for emr-containers resources.
 */
export class EmrContainersResources {
	/**
	 * Builds an ARN for the jobRun resource.
	 */
	static jobRun(props: {
		/** The VirtualClusterId component of the ARN. */
		readonly virtualClusterId: string;
		/** The JobRunId component of the ARN. */
		readonly jobRunId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:emr-containers:${props.region ?? "*"}:${props.account ?? "*"}:/virtualclusters/${props.virtualClusterId}/jobruns/${props.jobRunId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the jobRun resource.
	 */
	static isValidJobRunArn(arn: string): boolean {
		return JobRunArnRegex.test(arn);
	}

	/**
	 * Parses a jobRun ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobRunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		virtualClusterId: string;
		jobRunId: string;
	} {
		const match = JobRunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid jobRun ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			virtualClusterId: match.groups!.virtualClusterId,
			jobRunId: match.groups!.jobRunId,
		};
	}

	/**
	 * Builds an ARN for the jobTemplate resource.
	 */
	static jobTemplate(props: {
		/** The JobTemplateId component of the ARN. */
		readonly jobTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:emr-containers:${props.region ?? "*"}:${props.account ?? "*"}:/jobtemplates/${props.jobTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the jobTemplate resource.
	 */
	static isValidJobTemplateArn(arn: string): boolean {
		return JobTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a jobTemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobTemplateId: string;
	} {
		const match = JobTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid jobTemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobTemplateId: match.groups!.jobTemplateId,
		};
	}

	/**
	 * Builds an ARN for the managedEndpoint resource.
	 */
	static managedEndpoint(props: {
		/** The VirtualClusterId component of the ARN. */
		readonly virtualClusterId: string;
		/** The EndpointId component of the ARN. */
		readonly endpointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:emr-containers:${props.region ?? "*"}:${props.account ?? "*"}:/virtualclusters/${props.virtualClusterId}/endpoints/${props.endpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managedEndpoint resource.
	 */
	static isValidManagedEndpointArn(arn: string): boolean {
		return ManagedEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a managedEndpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		virtualClusterId: string;
		endpointId: string;
	} {
		const match = ManagedEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managedEndpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			virtualClusterId: match.groups!.virtualClusterId,
			endpointId: match.groups!.endpointId,
		};
	}

	/**
	 * Builds an ARN for the securityConfiguration resource.
	 */
	static securityConfiguration(props: {
		/** The SecurityConfigurationId component of the ARN. */
		readonly securityConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:emr-containers:${props.region ?? "*"}:${props.account ?? "*"}:/securityconfigurations/${props.securityConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the securityConfiguration resource.
	 */
	static isValidSecurityConfigurationArn(arn: string): boolean {
		return SecurityConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a securityConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecurityConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		securityConfigurationId: string;
	} {
		const match = SecurityConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid securityConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			securityConfigurationId: match.groups!.securityConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the virtualCluster resource.
	 */
	static virtualCluster(props: {
		/** The VirtualClusterId component of the ARN. */
		readonly virtualClusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:emr-containers:${props.region ?? "*"}:${props.account ?? "*"}:/virtualclusters/${props.virtualClusterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the virtualCluster resource.
	 */
	static isValidVirtualClusterArn(arn: string): boolean {
		return VirtualClusterArnRegex.test(arn);
	}

	/**
	 * Parses a virtualCluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVirtualClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		virtualClusterId: string;
	} {
		const match = VirtualClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid virtualCluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			virtualClusterId: match.groups!.virtualClusterId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for emr-containers.
 */
export class EmrContainersOperations {
	/** IAM actions required for the CancelJobRun API call. */
	static readonly CANCEL_JOB_RUN: string[] = ["emr-containers:CancelJobRun"];
	/** IAM actions required for the CreateJobTemplate API call. */
	static readonly CREATE_JOB_TEMPLATE: string[] = [
		"emr-containers:CreateJobTemplate",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the CreateManagedEndpoint API call. */
	static readonly CREATE_MANAGED_ENDPOINT: string[] = [
		"ec2:AuthorizeSecurityGroupEgress",
		"ec2:AuthorizeSecurityGroupIngress",
		"emr-containers:CreateManagedEndpoint",
		"ec2:CreateSecurityGroup",
		"ec2:DeleteSecurityGroup",
		"iam:PassRole",
		"ec2:RevokeSecurityGroupEgress",
		"ec2:RevokeSecurityGroupIngress",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the CreateSecurityConfiguration API call. */
	static readonly CREATE_SECURITY_CONFIGURATION: string[] = [
		"emr-containers:CreateSecurityConfiguration",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the CreateVirtualCluster API call. */
	static readonly CREATE_VIRTUAL_CLUSTER: string[] = [
		"emr-containers:CreateVirtualCluster",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the DeleteJobTemplate API call. */
	static readonly DELETE_JOB_TEMPLATE: string[] = [
		"emr-containers:DeleteJobTemplate",
	];
	/** IAM actions required for the DeleteManagedEndpoint API call. */
	static readonly DELETE_MANAGED_ENDPOINT: string[] = [
		"emr-containers:DeleteManagedEndpoint",
		"ec2:DeleteSecurityGroup",
		"ec2:RevokeSecurityGroupEgress",
		"ec2:RevokeSecurityGroupIngress",
	];
	/** IAM actions required for the DeleteSecurityConfiguration API call. */
	static readonly DELETE_SECURITY_CONFIGURATION: string[] = [
		"emr-containers:DeleteSecurityConfiguration",
	];
	/** IAM actions required for the DeleteVirtualCluster API call. */
	static readonly DELETE_VIRTUAL_CLUSTER: string[] = [
		"eks:AssociateAccessPolicy",
		"eks:DeleteAccessEntry",
		"emr-containers:DeleteVirtualCluster",
		"eks:DescribeAccessEntry",
		"eks:DisassociateAccessPolicy",
		"eks:ListAssociatedAccessPolicies",
	];
	/** IAM actions required for the DescribeJobRun API call. */
	static readonly DESCRIBE_JOB_RUN: string[] = [
		"emr-containers:DescribeJobRun",
	];
	/** IAM actions required for the DescribeJobTemplate API call. */
	static readonly DESCRIBE_JOB_TEMPLATE: string[] = [
		"emr-containers:DescribeJobTemplate",
	];
	/** IAM actions required for the DescribeManagedEndpoint API call. */
	static readonly DESCRIBE_MANAGED_ENDPOINT: string[] = [
		"emr-containers:DescribeManagedEndpoint",
	];
	/** IAM actions required for the DescribeSecurityConfiguration API call. */
	static readonly DESCRIBE_SECURITY_CONFIGURATION: string[] = [
		"emr-containers:DescribeSecurityConfiguration",
	];
	/** IAM actions required for the DescribeVirtualCluster API call. */
	static readonly DESCRIBE_VIRTUAL_CLUSTER: string[] = [
		"emr-containers:DescribeVirtualCluster",
	];
	/** IAM actions required for the GetManagedEndpointSessionCredentials API call. */
	static readonly GET_MANAGED_ENDPOINT_SESSION_CREDENTIALS: string[] = [
		"emr-containers:GetManagedEndpointSessionCredentials",
	];
	/** IAM actions required for the ListJobRuns API call. */
	static readonly LIST_JOB_RUNS: string[] = ["emr-containers:ListJobRuns"];
	/** IAM actions required for the ListJobTemplates API call. */
	static readonly LIST_JOB_TEMPLATES: string[] = [
		"emr-containers:ListJobTemplates",
	];
	/** IAM actions required for the ListManagedEndpoints API call. */
	static readonly LIST_MANAGED_ENDPOINTS: string[] = [
		"emr-containers:ListManagedEndpoints",
	];
	/** IAM actions required for the ListSecurityConfigurations API call. */
	static readonly LIST_SECURITY_CONFIGURATIONS: string[] = [
		"emr-containers:ListSecurityConfigurations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"emr-containers:ListTagsForResource",
	];
	/** IAM actions required for the ListVirtualClusters API call. */
	static readonly LIST_VIRTUAL_CLUSTERS: string[] = [
		"emr-containers:ListVirtualClusters",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly START_JOB_RUN: string[] = [
		"emr-containers:DescribeJobTemplate",
		"iam:PassRole",
		"emr-containers:StartJobRun",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["emr-containers:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["emr-containers:UntagResource"];
	/** IAM actions required for the UpdateVirtualCluster API call. */
	static readonly UPDATE_VIRTUAL_CLUSTER: string[] = [];
}

/**
 * Condition key constants and builders for emr-containers.
 */
export class EmrContainersConditions {
	/** Condition keys applicable to the CreateJobTemplate action. */
	static readonly CREATE_JOB_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateManagedEndpoint action. */
	static readonly CREATE_MANAGED_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"emr-containers:ExecutionRoleArn",
	];
	/** Condition keys applicable to the CreateSecurityConfiguration action. */
	static readonly CREATE_SECURITY_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVirtualCluster action. */
	static readonly CREATE_VIRTUAL_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartJobRun action. */
	static readonly START_JOB_RUN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"emr-containers:ExecutionRoleArn",
		"emr-containers:JobTemplateArn",
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
	/** Condition key: emr-containers:ExecutionRoleArn (ARN) */
	static readonly EXECUTION_ROLE_ARN = "emr-containers:ExecutionRoleArn";
	/** Condition key: emr-containers:JobTemplateArn (ARN) */
	static readonly JOB_TEMPLATE_ARN = "emr-containers:JobTemplateArn";

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
	 * Generates a condition block for `emr-containers:ExecutionRoleArn`.
	 */
	static executionRoleARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "emr-containers:ExecutionRoleArn": value } };
	}

	/**
	 * Generates a condition block for `emr-containers:JobTemplateArn`.
	 */
	static jobTemplateARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "emr-containers:JobTemplateArn": value } };
	}
}
