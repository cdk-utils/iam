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
	static readonly CancelJobRun = "emr-containers:CancelJobRun";
	/** [Write] emr-containers:CreateCertificate */
	static readonly CreateCertificate = "emr-containers:CreateCertificate";
	/** [Write] emr-containers:CreateJobTemplate */
	static readonly CreateJobTemplate = "emr-containers:CreateJobTemplate";
	/** [Write] emr-containers:CreateManagedEndpoint */
	static readonly CreateManagedEndpoint =
		"emr-containers:CreateManagedEndpoint";
	/** [Write] emr-containers:CreateSecurityConfiguration */
	static readonly CreateSecurityConfiguration =
		"emr-containers:CreateSecurityConfiguration";
	/** [Write] emr-containers:CreateVirtualCluster */
	static readonly CreateVirtualCluster = "emr-containers:CreateVirtualCluster";
	/** [Write] emr-containers:DeleteJobTemplate */
	static readonly DeleteJobTemplate = "emr-containers:DeleteJobTemplate";
	/** [Write] emr-containers:DeleteManagedEndpoint */
	static readonly DeleteManagedEndpoint =
		"emr-containers:DeleteManagedEndpoint";
	/** [Write] emr-containers:DeleteSecurityConfiguration */
	static readonly DeleteSecurityConfiguration =
		"emr-containers:DeleteSecurityConfiguration";
	/** [Write] emr-containers:DeleteVirtualCluster */
	static readonly DeleteVirtualCluster = "emr-containers:DeleteVirtualCluster";
	/** [Read] emr-containers:DescribeJobRun */
	static readonly DescribeJobRun = "emr-containers:DescribeJobRun";
	/** [Read] emr-containers:DescribeJobTemplate */
	static readonly DescribeJobTemplate = "emr-containers:DescribeJobTemplate";
	/** [Read] emr-containers:DescribeManagedEndpoint */
	static readonly DescribeManagedEndpoint =
		"emr-containers:DescribeManagedEndpoint";
	/** [Read] emr-containers:DescribeSecurityConfiguration */
	static readonly DescribeSecurityConfiguration =
		"emr-containers:DescribeSecurityConfiguration";
	/** [Read] emr-containers:DescribeVirtualCluster */
	static readonly DescribeVirtualCluster =
		"emr-containers:DescribeVirtualCluster";
	/** [Write] emr-containers:GetManagedEndpointSessionCredentials */
	static readonly actionGetManagedEndpointSessionCredentials =
		"emr-containers:GetManagedEndpointSessionCredentials";
	/** [List] emr-containers:ListJobRuns */
	static readonly ListJobRuns = "emr-containers:ListJobRuns";
	/** [List] emr-containers:ListJobTemplates */
	static readonly ListJobTemplates = "emr-containers:ListJobTemplates";
	/** [List] emr-containers:ListManagedEndpoints */
	static readonly ListManagedEndpoints = "emr-containers:ListManagedEndpoints";
	/** [List] emr-containers:ListSecurityConfigurations */
	static readonly ListSecurityConfigurations =
		"emr-containers:ListSecurityConfigurations";
	/** [List] emr-containers:ListTagsForResource */
	static readonly ListTagsForResource = "emr-containers:ListTagsForResource";
	/** [List] emr-containers:ListVirtualClusters */
	static readonly ListVirtualClusters = "emr-containers:ListVirtualClusters";
	/** [Write] emr-containers:StartJobRun */
	static readonly StartJobRun = "emr-containers:StartJobRun";
	/** [Tagging] emr-containers:TagResource */
	static readonly TagResource = "emr-containers:TagResource";
	/** [Tagging] emr-containers:UntagResource */
	static readonly UntagResource = "emr-containers:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EmrContainersActions.DescribeJobRun,
		EmrContainersActions.DescribeJobTemplate,
		EmrContainersActions.DescribeManagedEndpoint,
		EmrContainersActions.DescribeSecurityConfiguration,
		EmrContainersActions.DescribeVirtualCluster,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EmrContainersActions.CancelJobRun,
		EmrContainersActions.CreateCertificate,
		EmrContainersActions.CreateJobTemplate,
		EmrContainersActions.CreateManagedEndpoint,
		EmrContainersActions.CreateSecurityConfiguration,
		EmrContainersActions.CreateVirtualCluster,
		EmrContainersActions.DeleteJobTemplate,
		EmrContainersActions.DeleteManagedEndpoint,
		EmrContainersActions.DeleteSecurityConfiguration,
		EmrContainersActions.DeleteVirtualCluster,
		EmrContainersActions.actionGetManagedEndpointSessionCredentials,
		EmrContainersActions.StartJobRun,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EmrContainersActions.ListJobRuns,
		EmrContainersActions.ListJobTemplates,
		EmrContainersActions.ListManagedEndpoints,
		EmrContainersActions.ListSecurityConfigurations,
		EmrContainersActions.ListTagsForResource,
		EmrContainersActions.ListVirtualClusters,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EmrContainersActions.TagResource,
		EmrContainersActions.UntagResource,
	];
}

/**
 * Properties for building a jobRun ARN.
 */
export interface EmrContainersJobRunArnProps {
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
}

/**
 * Parsed components of a jobRun ARN.
 */
export interface EmrContainersJobRunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VirtualClusterId component. */
	readonly virtualClusterId: string;
	/** The JobRunId component. */
	readonly jobRunId: string;
}

/**
 * Properties for building a jobTemplate ARN.
 */
export interface EmrContainersJobTemplateArnProps {
	/** The JobTemplateId component of the ARN. */
	readonly jobTemplateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a jobTemplate ARN.
 */
export interface EmrContainersJobTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobTemplateId component. */
	readonly jobTemplateId: string;
}

/**
 * Properties for building a managedEndpoint ARN.
 */
export interface EmrContainersManagedEndpointArnProps {
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
}

/**
 * Parsed components of a managedEndpoint ARN.
 */
export interface EmrContainersManagedEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VirtualClusterId component. */
	readonly virtualClusterId: string;
	/** The EndpointId component. */
	readonly endpointId: string;
}

/**
 * Properties for building a securityConfiguration ARN.
 */
export interface EmrContainersSecurityConfigurationArnProps {
	/** The SecurityConfigurationId component of the ARN. */
	readonly securityConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a securityConfiguration ARN.
 */
export interface EmrContainersSecurityConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SecurityConfigurationId component. */
	readonly securityConfigurationId: string;
}

/**
 * Properties for building a virtualCluster ARN.
 */
export interface EmrContainersVirtualClusterArnProps {
	/** The VirtualClusterId component of the ARN. */
	readonly virtualClusterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a virtualCluster ARN.
 */
export interface EmrContainersVirtualClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VirtualClusterId component. */
	readonly virtualClusterId: string;
}

const JobRunArnRegex =
	/^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):\/virtualclusters\/(?<virtualClusterId>[^:/?]+)\/jobruns\/(?<jobRunId>[^:/?]+)$/;
const JobTemplateArnRegex =
	/^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):\/jobtemplates\/(?<jobTemplateId>[^:/?]+)$/;
const ManagedEndpointArnRegex =
	/^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):\/virtualclusters\/(?<virtualClusterId>[^:/?]+)\/endpoints\/(?<endpointId>[^:/?]+)$/;
const SecurityConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):\/securityconfigurations\/(?<securityConfigurationId>[^:/?]+)$/;
const VirtualClusterArnRegex =
	/^arn:(?<partition>[^:]+):emr-containers:(?<region>[^:]*):(?<account>[^:]*):\/virtualclusters\/(?<virtualClusterId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for emr-containers resources.
 */
export class EmrContainersResources {
	/**
	 * Builds an ARN for the jobRun resource.
	 */
	static jobRun(props: EmrContainersJobRunArnProps): string {
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
	static parseJobRunArn(arn: string): EmrContainersJobRunArnComponents {
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
	static jobTemplate(props: EmrContainersJobTemplateArnProps): string {
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
	static parseJobTemplateArn(
		arn: string,
	): EmrContainersJobTemplateArnComponents {
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
	static managedEndpoint(props: EmrContainersManagedEndpointArnProps): string {
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
	static parseManagedEndpointArn(
		arn: string,
	): EmrContainersManagedEndpointArnComponents {
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
	static securityConfiguration(
		props: EmrContainersSecurityConfigurationArnProps,
	): string {
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
	static parseSecurityConfigurationArn(
		arn: string,
	): EmrContainersSecurityConfigurationArnComponents {
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
	static virtualCluster(props: EmrContainersVirtualClusterArnProps): string {
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
	static parseVirtualClusterArn(
		arn: string,
	): EmrContainersVirtualClusterArnComponents {
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
	static readonly CancelJobRun: string[] = ["emr-containers:CancelJobRun"];
	/** IAM actions required for the CreateJobTemplate API call. */
	static readonly CreateJobTemplate: string[] = [
		"emr-containers:CreateJobTemplate",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the CreateManagedEndpoint API call. */
	static readonly CreateManagedEndpoint: string[] = [
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
	static readonly CreateSecurityConfiguration: string[] = [
		"emr-containers:CreateSecurityConfiguration",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the CreateVirtualCluster API call. */
	static readonly CreateVirtualCluster: string[] = [
		"emr-containers:CreateVirtualCluster",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the DeleteJobTemplate API call. */
	static readonly DeleteJobTemplate: string[] = [
		"emr-containers:DeleteJobTemplate",
	];
	/** IAM actions required for the DeleteManagedEndpoint API call. */
	static readonly DeleteManagedEndpoint: string[] = [
		"emr-containers:DeleteManagedEndpoint",
		"ec2:DeleteSecurityGroup",
		"ec2:RevokeSecurityGroupEgress",
		"ec2:RevokeSecurityGroupIngress",
	];
	/** IAM actions required for the DeleteSecurityConfiguration API call. */
	static readonly DeleteSecurityConfiguration: string[] = [
		"emr-containers:DeleteSecurityConfiguration",
	];
	/** IAM actions required for the DeleteVirtualCluster API call. */
	static readonly DeleteVirtualCluster: string[] = [
		"eks:AssociateAccessPolicy",
		"eks:DeleteAccessEntry",
		"emr-containers:DeleteVirtualCluster",
		"eks:DescribeAccessEntry",
		"eks:DisassociateAccessPolicy",
		"eks:ListAssociatedAccessPolicies",
	];
	/** IAM actions required for the DescribeJobRun API call. */
	static readonly DescribeJobRun: string[] = ["emr-containers:DescribeJobRun"];
	/** IAM actions required for the DescribeJobTemplate API call. */
	static readonly DescribeJobTemplate: string[] = [
		"emr-containers:DescribeJobTemplate",
	];
	/** IAM actions required for the DescribeManagedEndpoint API call. */
	static readonly DescribeManagedEndpoint: string[] = [
		"emr-containers:DescribeManagedEndpoint",
	];
	/** IAM actions required for the DescribeSecurityConfiguration API call. */
	static readonly DescribeSecurityConfiguration: string[] = [
		"emr-containers:DescribeSecurityConfiguration",
	];
	/** IAM actions required for the DescribeVirtualCluster API call. */
	static readonly DescribeVirtualCluster: string[] = [
		"emr-containers:DescribeVirtualCluster",
	];
	/** IAM actions required for the GetManagedEndpointSessionCredentials API call. */
	static readonly opGetManagedEndpointSessionCredentials: string[] = [
		"emr-containers:GetManagedEndpointSessionCredentials",
	];
	/** IAM actions required for the ListJobRuns API call. */
	static readonly ListJobRuns: string[] = ["emr-containers:ListJobRuns"];
	/** IAM actions required for the ListJobTemplates API call. */
	static readonly ListJobTemplates: string[] = [
		"emr-containers:ListJobTemplates",
	];
	/** IAM actions required for the ListManagedEndpoints API call. */
	static readonly ListManagedEndpoints: string[] = [
		"emr-containers:ListManagedEndpoints",
	];
	/** IAM actions required for the ListSecurityConfigurations API call. */
	static readonly ListSecurityConfigurations: string[] = [
		"emr-containers:ListSecurityConfigurations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"emr-containers:ListTagsForResource",
	];
	/** IAM actions required for the ListVirtualClusters API call. */
	static readonly ListVirtualClusters: string[] = [
		"emr-containers:ListVirtualClusters",
	];
	/** IAM actions required for the StartJobRun API call. */
	static readonly StartJobRun: string[] = [
		"emr-containers:DescribeJobTemplate",
		"iam:PassRole",
		"emr-containers:StartJobRun",
		"emr-containers:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["emr-containers:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["emr-containers:UntagResource"];
	/** IAM actions required for the UpdateVirtualCluster API call. */
	static readonly UpdateVirtualCluster: string[] = [];
}

/**
 * Condition key constants and builders for emr-containers.
 */
export class EmrContainersConditions {
	/** Condition keys applicable to the CreateJobTemplate action. */
	static readonly CreateJobTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateManagedEndpoint action. */
	static readonly CreateManagedEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"emr-containers:ExecutionRoleArn",
	];
	/** Condition keys applicable to the CreateSecurityConfiguration action. */
	static readonly CreateSecurityConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVirtualCluster action. */
	static readonly CreateVirtualClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartJobRun action. */
	static readonly StartJobRunConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"emr-containers:ExecutionRoleArn",
		"emr-containers:JobTemplateArn",
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
