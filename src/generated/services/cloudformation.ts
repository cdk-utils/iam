// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudformation.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudformation service.
 */
export class CloudFormationActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudformation";

	/** [Write] cloudformation:ActivateOrganizationsAccess */
	static readonly ActivateOrganizationsAccess =
		"cloudformation:ActivateOrganizationsAccess";
	/** [Write] cloudformation:ActivateType */
	static readonly ActivateType = "cloudformation:ActivateType";
	/** [Read] cloudformation:BatchDescribeTypeConfigurations */
	static readonly BatchDescribeTypeConfigurations =
		"cloudformation:BatchDescribeTypeConfigurations";
	/** [Write] cloudformation:CancelResourceRequest */
	static readonly CancelResourceRequest =
		"cloudformation:CancelResourceRequest";
	/** [Write] cloudformation:CancelUpdateStack */
	static readonly CancelUpdateStack = "cloudformation:CancelUpdateStack";
	/** [Write] cloudformation:ContinueUpdateRollback */
	static readonly ContinueUpdateRollback =
		"cloudformation:ContinueUpdateRollback";
	/** [Write] cloudformation:CreateChangeSet */
	static readonly CreateChangeSet = "cloudformation:CreateChangeSet";
	/** [Write] cloudformation:CreateGeneratedTemplate */
	static readonly CreateGeneratedTemplate =
		"cloudformation:CreateGeneratedTemplate";
	/** [Write] cloudformation:CreateResource */
	static readonly CreateResource = "cloudformation:CreateResource";
	/** [Write] cloudformation:CreateStack */
	static readonly CreateStack = "cloudformation:CreateStack";
	/** [Write] cloudformation:CreateStackInstances */
	static readonly CreateStackInstances = "cloudformation:CreateStackInstances";
	/** [Write] cloudformation:CreateStackRefactor */
	static readonly CreateStackRefactor = "cloudformation:CreateStackRefactor";
	/** [Write] cloudformation:CreateStackSet */
	static readonly CreateStackSet = "cloudformation:CreateStackSet";
	/** [Write] cloudformation:CreateUploadBucket */
	static readonly CreateUploadBucket = "cloudformation:CreateUploadBucket";
	/** [Write] cloudformation:DeactivateOrganizationsAccess */
	static readonly DeactivateOrganizationsAccess =
		"cloudformation:DeactivateOrganizationsAccess";
	/** [Write] cloudformation:DeactivateType */
	static readonly DeactivateType = "cloudformation:DeactivateType";
	/** [Write] cloudformation:DeleteChangeSet */
	static readonly DeleteChangeSet = "cloudformation:DeleteChangeSet";
	/** [Write] cloudformation:DeleteGeneratedTemplate */
	static readonly DeleteGeneratedTemplate =
		"cloudformation:DeleteGeneratedTemplate";
	/** [Write] cloudformation:DeleteResource */
	static readonly DeleteResource = "cloudformation:DeleteResource";
	/** [Write] cloudformation:DeleteStack */
	static readonly DeleteStack = "cloudformation:DeleteStack";
	/** [Write] cloudformation:DeleteStackInstances */
	static readonly DeleteStackInstances = "cloudformation:DeleteStackInstances";
	/** [Write] cloudformation:DeleteStackSet */
	static readonly DeleteStackSet = "cloudformation:DeleteStackSet";
	/** [Write] cloudformation:DeregisterType */
	static readonly DeregisterType = "cloudformation:DeregisterType";
	/** [Read] cloudformation:DescribeAccountLimits */
	static readonly DescribeAccountLimits =
		"cloudformation:DescribeAccountLimits";
	/** [Read] cloudformation:DescribeChangeSet */
	static readonly DescribeChangeSet = "cloudformation:DescribeChangeSet";
	/** [Read] cloudformation:DescribeChangeSetHooks */
	static readonly DescribeChangeSetHooks =
		"cloudformation:DescribeChangeSetHooks";
	/** [Read] cloudformation:DescribeEvents */
	static readonly DescribeEvents = "cloudformation:DescribeEvents";
	/** [Read] cloudformation:DescribeGeneratedTemplate */
	static readonly DescribeGeneratedTemplate =
		"cloudformation:DescribeGeneratedTemplate";
	/** [Read] cloudformation:DescribeOrganizationsAccess */
	static readonly DescribeOrganizationsAccess =
		"cloudformation:DescribeOrganizationsAccess";
	/** [Read] cloudformation:DescribePublisher */
	static readonly DescribePublisher = "cloudformation:DescribePublisher";
	/** [Read] cloudformation:DescribeResourceScan */
	static readonly DescribeResourceScan = "cloudformation:DescribeResourceScan";
	/** [Read] cloudformation:DescribeStackDriftDetectionStatus */
	static readonly DescribeStackDriftDetectionStatus =
		"cloudformation:DescribeStackDriftDetectionStatus";
	/** [Read] cloudformation:DescribeStackEvents */
	static readonly DescribeStackEvents = "cloudformation:DescribeStackEvents";
	/** [Read] cloudformation:DescribeStackInstance */
	static readonly DescribeStackInstance =
		"cloudformation:DescribeStackInstance";
	/** [Read] cloudformation:DescribeStackRefactor */
	static readonly DescribeStackRefactor =
		"cloudformation:DescribeStackRefactor";
	/** [Read] cloudformation:DescribeStackResource */
	static readonly DescribeStackResource =
		"cloudformation:DescribeStackResource";
	/** [Read] cloudformation:DescribeStackResourceDrifts */
	static readonly DescribeStackResourceDrifts =
		"cloudformation:DescribeStackResourceDrifts";
	/** [Read] cloudformation:DescribeStackResources */
	static readonly DescribeStackResources =
		"cloudformation:DescribeStackResources";
	/** [Read] cloudformation:DescribeStackSet */
	static readonly DescribeStackSet = "cloudformation:DescribeStackSet";
	/** [Read] cloudformation:DescribeStackSetOperation */
	static readonly DescribeStackSetOperation =
		"cloudformation:DescribeStackSetOperation";
	/** [List] cloudformation:DescribeStacks */
	static readonly DescribeStacks = "cloudformation:DescribeStacks";
	/** [Read] cloudformation:DescribeType */
	static readonly DescribeType = "cloudformation:DescribeType";
	/** [Read] cloudformation:DescribeTypeRegistration */
	static readonly DescribeTypeRegistration =
		"cloudformation:DescribeTypeRegistration";
	/** [Read] cloudformation:DetectStackDrift */
	static readonly DetectStackDrift = "cloudformation:DetectStackDrift";
	/** [Read] cloudformation:DetectStackResourceDrift */
	static readonly DetectStackResourceDrift =
		"cloudformation:DetectStackResourceDrift";
	/** [Read] cloudformation:DetectStackSetDrift */
	static readonly DetectStackSetDrift = "cloudformation:DetectStackSetDrift";
	/** [Read] cloudformation:EstimateTemplateCost */
	static readonly EstimateTemplateCost = "cloudformation:EstimateTemplateCost";
	/** [Write] cloudformation:ExecuteChangeSet */
	static readonly ExecuteChangeSet = "cloudformation:ExecuteChangeSet";
	/** [Write] cloudformation:ExecuteStackRefactor */
	static readonly ExecuteStackRefactor = "cloudformation:ExecuteStackRefactor";
	/** [Read] cloudformation:GetGeneratedTemplate */
	static readonly actionGetGeneratedTemplate =
		"cloudformation:GetGeneratedTemplate";
	/** [Read] cloudformation:GetHookResult */
	static readonly actionGetHookResult = "cloudformation:GetHookResult";
	/** [Read] cloudformation:GetResource */
	static readonly actionGetResource = "cloudformation:GetResource";
	/** [Read] cloudformation:GetResourceRequestStatus */
	static readonly actionGetResourceRequestStatus =
		"cloudformation:GetResourceRequestStatus";
	/** [Read] cloudformation:GetStackPolicy */
	static readonly actionGetStackPolicy = "cloudformation:GetStackPolicy";
	/** [Read] cloudformation:GetTemplate */
	static readonly actionGetTemplate = "cloudformation:GetTemplate";
	/** [Read] cloudformation:GetTemplateSummary */
	static readonly actionGetTemplateSummary =
		"cloudformation:GetTemplateSummary";
	/** [Write] cloudformation:ImportStacksToStackSet */
	static readonly ImportStacksToStackSet =
		"cloudformation:ImportStacksToStackSet";
	/** [List] cloudformation:ListAllHookResults */
	static readonly ListAllHookResults = "cloudformation:ListAllHookResults";
	/** [List] cloudformation:ListChangeSets */
	static readonly ListChangeSets = "cloudformation:ListChangeSets";
	/** [List] cloudformation:ListExports */
	static readonly ListExports = "cloudformation:ListExports";
	/** [List] cloudformation:ListGeneratedTemplates */
	static readonly ListGeneratedTemplates =
		"cloudformation:ListGeneratedTemplates";
	/** [List] cloudformation:ListHookResults */
	static readonly ListHookResults = "cloudformation:ListHookResults";
	/** [List] cloudformation:ListImports */
	static readonly ListImports = "cloudformation:ListImports";
	/** [Read] cloudformation:ListResourceRequests */
	static readonly ListResourceRequests = "cloudformation:ListResourceRequests";
	/** [List] cloudformation:ListResourceScanRelatedResources */
	static readonly ListResourceScanRelatedResources =
		"cloudformation:ListResourceScanRelatedResources";
	/** [List] cloudformation:ListResourceScanResources */
	static readonly ListResourceScanResources =
		"cloudformation:ListResourceScanResources";
	/** [List] cloudformation:ListResourceScans */
	static readonly ListResourceScans = "cloudformation:ListResourceScans";
	/** [Read] cloudformation:ListResources */
	static readonly ListResources = "cloudformation:ListResources";
	/** [List] cloudformation:ListStackInstanceResourceDrifts */
	static readonly ListStackInstanceResourceDrifts =
		"cloudformation:ListStackInstanceResourceDrifts";
	/** [List] cloudformation:ListStackInstances */
	static readonly ListStackInstances = "cloudformation:ListStackInstances";
	/** [List] cloudformation:ListStackRefactorActions */
	static readonly ListStackRefactorActions =
		"cloudformation:ListStackRefactorActions";
	/** [List] cloudformation:ListStackRefactors */
	static readonly ListStackRefactors = "cloudformation:ListStackRefactors";
	/** [List] cloudformation:ListStackResources */
	static readonly ListStackResources = "cloudformation:ListStackResources";
	/** [List] cloudformation:ListStackSetAutoDeploymentTargets */
	static readonly ListStackSetAutoDeploymentTargets =
		"cloudformation:ListStackSetAutoDeploymentTargets";
	/** [List] cloudformation:ListStackSetOperationResults */
	static readonly ListStackSetOperationResults =
		"cloudformation:ListStackSetOperationResults";
	/** [List] cloudformation:ListStackSetOperations */
	static readonly ListStackSetOperations =
		"cloudformation:ListStackSetOperations";
	/** [List] cloudformation:ListStackSets */
	static readonly ListStackSets = "cloudformation:ListStackSets";
	/** [List] cloudformation:ListStacks */
	static readonly ListStacks = "cloudformation:ListStacks";
	/** [List] cloudformation:ListTypeRegistrations */
	static readonly ListTypeRegistrations =
		"cloudformation:ListTypeRegistrations";
	/** [List] cloudformation:ListTypeVersions */
	static readonly ListTypeVersions = "cloudformation:ListTypeVersions";
	/** [List] cloudformation:ListTypes */
	static readonly ListTypes = "cloudformation:ListTypes";
	/** [Write] cloudformation:PublishType */
	static readonly PublishType = "cloudformation:PublishType";
	/** [Write] cloudformation:RecordHandlerProgress */
	static readonly RecordHandlerProgress =
		"cloudformation:RecordHandlerProgress";
	/** [Write] cloudformation:RegisterPublisher */
	static readonly RegisterPublisher = "cloudformation:RegisterPublisher";
	/** [Write] cloudformation:RegisterType */
	static readonly RegisterType = "cloudformation:RegisterType";
	/** [Write] cloudformation:RollbackStack */
	static readonly RollbackStack = "cloudformation:RollbackStack";
	/** [PermissionManagement] cloudformation:SetStackPolicy */
	static readonly actionSetStackPolicy = "cloudformation:SetStackPolicy";
	/** [Write] cloudformation:SetTypeConfiguration */
	static readonly actionSetTypeConfiguration =
		"cloudformation:SetTypeConfiguration";
	/** [Write] cloudformation:SetTypeDefaultVersion */
	static readonly actionSetTypeDefaultVersion =
		"cloudformation:SetTypeDefaultVersion";
	/** [Write] cloudformation:SignalResource */
	static readonly SignalResource = "cloudformation:SignalResource";
	/** [Write] cloudformation:StartResourceScan */
	static readonly StartResourceScan = "cloudformation:StartResourceScan";
	/** [Write] cloudformation:StopStackSetOperation */
	static readonly StopStackSetOperation =
		"cloudformation:StopStackSetOperation";
	/** [Tagging] cloudformation:TagResource */
	static readonly TagResource = "cloudformation:TagResource";
	/** [Write] cloudformation:TestType */
	static readonly TestType = "cloudformation:TestType";
	/** [Tagging] cloudformation:UntagResource */
	static readonly UntagResource = "cloudformation:UntagResource";
	/** [Write] cloudformation:UpdateGeneratedTemplate */
	static readonly UpdateGeneratedTemplate =
		"cloudformation:UpdateGeneratedTemplate";
	/** [Write] cloudformation:UpdateResource */
	static readonly UpdateResource = "cloudformation:UpdateResource";
	/** [Write] cloudformation:UpdateStack */
	static readonly UpdateStack = "cloudformation:UpdateStack";
	/** [Write] cloudformation:UpdateStackInstances */
	static readonly UpdateStackInstances = "cloudformation:UpdateStackInstances";
	/** [Write] cloudformation:UpdateStackSet */
	static readonly UpdateStackSet = "cloudformation:UpdateStackSet";
	/** [Write] cloudformation:UpdateTerminationProtection */
	static readonly UpdateTerminationProtection =
		"cloudformation:UpdateTerminationProtection";
	/** [Read] cloudformation:ValidateTemplate */
	static readonly ValidateTemplate = "cloudformation:ValidateTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudFormationActions.BatchDescribeTypeConfigurations,
		CloudFormationActions.DescribeAccountLimits,
		CloudFormationActions.DescribeChangeSet,
		CloudFormationActions.DescribeChangeSetHooks,
		CloudFormationActions.DescribeEvents,
		CloudFormationActions.DescribeGeneratedTemplate,
		CloudFormationActions.DescribeOrganizationsAccess,
		CloudFormationActions.DescribePublisher,
		CloudFormationActions.DescribeResourceScan,
		CloudFormationActions.DescribeStackDriftDetectionStatus,
		CloudFormationActions.DescribeStackEvents,
		CloudFormationActions.DescribeStackInstance,
		CloudFormationActions.DescribeStackRefactor,
		CloudFormationActions.DescribeStackResource,
		CloudFormationActions.DescribeStackResourceDrifts,
		CloudFormationActions.DescribeStackResources,
		CloudFormationActions.DescribeStackSet,
		CloudFormationActions.DescribeStackSetOperation,
		CloudFormationActions.DescribeType,
		CloudFormationActions.DescribeTypeRegistration,
		CloudFormationActions.DetectStackDrift,
		CloudFormationActions.DetectStackResourceDrift,
		CloudFormationActions.DetectStackSetDrift,
		CloudFormationActions.EstimateTemplateCost,
		CloudFormationActions.actionGetGeneratedTemplate,
		CloudFormationActions.actionGetHookResult,
		CloudFormationActions.actionGetResource,
		CloudFormationActions.actionGetResourceRequestStatus,
		CloudFormationActions.actionGetStackPolicy,
		CloudFormationActions.actionGetTemplate,
		CloudFormationActions.actionGetTemplateSummary,
		CloudFormationActions.ListResourceRequests,
		CloudFormationActions.ListResources,
		CloudFormationActions.ValidateTemplate,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudFormationActions.ActivateOrganizationsAccess,
		CloudFormationActions.ActivateType,
		CloudFormationActions.CancelResourceRequest,
		CloudFormationActions.CancelUpdateStack,
		CloudFormationActions.ContinueUpdateRollback,
		CloudFormationActions.CreateChangeSet,
		CloudFormationActions.CreateGeneratedTemplate,
		CloudFormationActions.CreateResource,
		CloudFormationActions.CreateStack,
		CloudFormationActions.CreateStackInstances,
		CloudFormationActions.CreateStackRefactor,
		CloudFormationActions.CreateStackSet,
		CloudFormationActions.CreateUploadBucket,
		CloudFormationActions.DeactivateOrganizationsAccess,
		CloudFormationActions.DeactivateType,
		CloudFormationActions.DeleteChangeSet,
		CloudFormationActions.DeleteGeneratedTemplate,
		CloudFormationActions.DeleteResource,
		CloudFormationActions.DeleteStack,
		CloudFormationActions.DeleteStackInstances,
		CloudFormationActions.DeleteStackSet,
		CloudFormationActions.DeregisterType,
		CloudFormationActions.ExecuteChangeSet,
		CloudFormationActions.ExecuteStackRefactor,
		CloudFormationActions.ImportStacksToStackSet,
		CloudFormationActions.PublishType,
		CloudFormationActions.RecordHandlerProgress,
		CloudFormationActions.RegisterPublisher,
		CloudFormationActions.RegisterType,
		CloudFormationActions.RollbackStack,
		CloudFormationActions.actionSetTypeConfiguration,
		CloudFormationActions.actionSetTypeDefaultVersion,
		CloudFormationActions.SignalResource,
		CloudFormationActions.StartResourceScan,
		CloudFormationActions.StopStackSetOperation,
		CloudFormationActions.TestType,
		CloudFormationActions.UpdateGeneratedTemplate,
		CloudFormationActions.UpdateResource,
		CloudFormationActions.UpdateStack,
		CloudFormationActions.UpdateStackInstances,
		CloudFormationActions.UpdateStackSet,
		CloudFormationActions.UpdateTerminationProtection,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CloudFormationActions.DescribeStacks,
		CloudFormationActions.ListAllHookResults,
		CloudFormationActions.ListChangeSets,
		CloudFormationActions.ListExports,
		CloudFormationActions.ListGeneratedTemplates,
		CloudFormationActions.ListHookResults,
		CloudFormationActions.ListImports,
		CloudFormationActions.ListResourceScanRelatedResources,
		CloudFormationActions.ListResourceScanResources,
		CloudFormationActions.ListResourceScans,
		CloudFormationActions.ListStackInstanceResourceDrifts,
		CloudFormationActions.ListStackInstances,
		CloudFormationActions.ListStackRefactorActions,
		CloudFormationActions.ListStackRefactors,
		CloudFormationActions.ListStackResources,
		CloudFormationActions.ListStackSetAutoDeploymentTargets,
		CloudFormationActions.ListStackSetOperationResults,
		CloudFormationActions.ListStackSetOperations,
		CloudFormationActions.ListStackSets,
		CloudFormationActions.ListStacks,
		CloudFormationActions.ListTypeRegistrations,
		CloudFormationActions.ListTypeVersions,
		CloudFormationActions.ListTypes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CloudFormationActions.actionSetStackPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CloudFormationActions.TagResource,
		CloudFormationActions.UntagResource,
	];
}

/**
 * Properties for building a changeset ARN.
 */
export interface CloudFormationChangesetArnProps {
	/** The ChangeSetName component of the ARN. */
	readonly changeSetName: string;
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a changeset ARN.
 */
export interface CloudFormationChangesetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChangeSetName component. */
	readonly changeSetName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a generatedtemplate ARN.
 */
export interface CloudFormationGeneratedtemplateArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a generatedtemplate ARN.
 */
export interface CloudFormationGeneratedtemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a resourcescan ARN.
 */
export interface CloudFormationResourcescanArnProps {
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a resourcescan ARN.
 */
export interface CloudFormationResourcescanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a stack ARN.
 */
export interface CloudFormationStackArnProps {
	/** The StackName component of the ARN. */
	readonly stackName: string;
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stack ARN.
 */
export interface CloudFormationStackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StackName component. */
	readonly stackName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a stackset ARN.
 */
export interface CloudFormationStacksetArnProps {
	/** The StackSetName component of the ARN. */
	readonly stackSetName: string;
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stackset ARN.
 */
export interface CloudFormationStacksetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StackSetName component. */
	readonly stackSetName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a stackset-target ARN.
 */
export interface CloudFormationStacksetTargetArnProps {
	/** The StackSetTarget component of the ARN. */
	readonly stackSetTarget: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stackset-target ARN.
 */
export interface CloudFormationStacksetTargetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StackSetTarget component. */
	readonly stackSetTarget: string;
}

/**
 * Properties for building a type ARN.
 */
export interface CloudFormationTypeArnProps {
	/** The Type component of the ARN. */
	readonly type: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a type ARN.
 */
export interface CloudFormationTypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Type component. */
	readonly type: string;
}

/**
 * Properties for building a typeHook ARN.
 */
export interface CloudFormationTypeHookArnProps {
	/** The Type component of the ARN. */
	readonly type: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a typeHook ARN.
 */
export interface CloudFormationTypeHookArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Type component. */
	readonly type: string;
}

const ChangesetArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):changeSet\/(?<changeSetName>[^:/?]+)\/(?<id>[^:/?]+)$/;
const GeneratedtemplateArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):generatedTemplate\/(?<id>[^:/?]+)$/;
const ResourcescanArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):resourceScan\/(?<id>[^:/?]+)$/;
const StackArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):stack\/(?<stackName>[^:/?]+)\/(?<id>[^:/?]+)$/;
const StacksetArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):stackset\/(?<stackSetName>[^:/?]+):(?<id>[^:/?]+)$/;
const StacksetTargetArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):stackset-target\/(?<stackSetTarget>[^:/?]+)$/;
const TypeArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):type\/resource\/(?<type>[^:/?]+)$/;
const TypeHookArnRegex =
	/^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):type\/hook\/(?<type>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudformation resources.
 */
export class CloudFormationResources {
	/**
	 * Builds an ARN for the changeset resource.
	 */
	static changeset(props: CloudFormationChangesetArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:changeSet/${props.changeSetName}/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the changeset resource.
	 */
	static isValidChangesetArn(arn: string): boolean {
		return ChangesetArnRegex.test(arn);
	}

	/**
	 * Parses a changeset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChangesetArn(arn: string): CloudFormationChangesetArnComponents {
		const match = ChangesetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid changeset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			changeSetName: match.groups!.changeSetName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the generatedtemplate resource.
	 */
	static generatedtemplate(
		props: CloudFormationGeneratedtemplateArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:generatedTemplate/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the generatedtemplate resource.
	 */
	static isValidGeneratedtemplateArn(arn: string): boolean {
		return GeneratedtemplateArnRegex.test(arn);
	}

	/**
	 * Parses a generatedtemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGeneratedtemplateArn(
		arn: string,
	): CloudFormationGeneratedtemplateArnComponents {
		const match = GeneratedtemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid generatedtemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the resourcescan resource.
	 */
	static resourcescan(props: CloudFormationResourcescanArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:resourceScan/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resourcescan resource.
	 */
	static isValidResourcescanArn(arn: string): boolean {
		return ResourcescanArnRegex.test(arn);
	}

	/**
	 * Parses a resourcescan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourcescanArn(
		arn: string,
	): CloudFormationResourcescanArnComponents {
		const match = ResourcescanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resourcescan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the stack resource.
	 */
	static stack(props: CloudFormationStackArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:stack/${props.stackName}/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stack resource.
	 */
	static isValidStackArn(arn: string): boolean {
		return StackArnRegex.test(arn);
	}

	/**
	 * Parses a stack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStackArn(arn: string): CloudFormationStackArnComponents {
		const match = StackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stackName: match.groups!.stackName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the stackset resource.
	 */
	static stackset(props: CloudFormationStacksetArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:stackset/${props.stackSetName}:${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stackset resource.
	 */
	static isValidStacksetArn(arn: string): boolean {
		return StacksetArnRegex.test(arn);
	}

	/**
	 * Parses a stackset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStacksetArn(arn: string): CloudFormationStacksetArnComponents {
		const match = StacksetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stackset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stackSetName: match.groups!.stackSetName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the stackset-target resource.
	 */
	static stacksetTarget(props: CloudFormationStacksetTargetArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:stackset-target/${props.stackSetTarget}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stackset-target resource.
	 */
	static isValidStacksetTargetArn(arn: string): boolean {
		return StacksetTargetArnRegex.test(arn);
	}

	/**
	 * Parses a stackset-target ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStacksetTargetArn(
		arn: string,
	): CloudFormationStacksetTargetArnComponents {
		const match = StacksetTargetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stackset-target ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stackSetTarget: match.groups!.stackSetTarget,
		};
	}

	/**
	 * Builds an ARN for the type resource.
	 */
	static type(props: CloudFormationTypeArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:type/resource/${props.type}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the type resource.
	 */
	static isValidTypeArn(arn: string): boolean {
		return TypeArnRegex.test(arn);
	}

	/**
	 * Parses a type ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTypeArn(arn: string): CloudFormationTypeArnComponents {
		const match = TypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid type ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			type: match.groups!.type,
		};
	}

	/**
	 * Builds an ARN for the typeHook resource.
	 */
	static typeHook(props: CloudFormationTypeHookArnProps): string {
		return `arn:${props.partition ?? "aws"}:cloudformation:${props.region ?? "*"}:${props.account ?? "*"}:type/hook/${props.type}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the typeHook resource.
	 */
	static isValidTypeHookArn(arn: string): boolean {
		return TypeHookArnRegex.test(arn);
	}

	/**
	 * Parses a typeHook ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTypeHookArn(arn: string): CloudFormationTypeHookArnComponents {
		const match = TypeHookArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid typeHook ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			type: match.groups!.type,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudformation.
 */
export class CloudFormationOperations {
	/** IAM actions required for the ActivateOrganizationsAccess API call. */
	static readonly ActivateOrganizationsAccess: string[] = [
		"cloudformation:ActivateOrganizationsAccess",
		"iam:CreateServiceLinkedRole",
		"iam:GetRole",
	];
	/** IAM actions required for the ActivateType API call. */
	static readonly ActivateType: string[] = [
		"cloudformation:ActivateType",
		"iam:PassRole",
	];
	/** IAM actions required for the BatchDescribeTypeConfigurations API call. */
	static readonly BatchDescribeTypeConfigurations: string[] = [
		"cloudformation:BatchDescribeTypeConfigurations",
	];
	/** IAM actions required for the CancelResourceRequest API call. */
	static readonly CancelResourceRequest: string[] = [
		"cloudformation:CancelResourceRequest",
	];
	/** IAM actions required for the CancelUpdateStack API call. */
	static readonly CancelUpdateStack: string[] = [
		"cloudformation:CancelUpdateStack",
	];
	/** IAM actions required for the ContinueUpdateRollback API call. */
	static readonly ContinueUpdateRollback: string[] = [
		"cloudformation:ContinueUpdateRollback",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateChangeSet API call. */
	static readonly CreateChangeSet: string[] = [
		"cloudformation:CreateChangeSet",
		"iam:PassRole",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
	];
	/** IAM actions required for the CreateGeneratedTemplate API call. */
	static readonly CreateGeneratedTemplate: string[] = [
		"cloudformation:CreateGeneratedTemplate",
	];
	/** IAM actions required for the CreateResource API call. */
	static readonly CreateResource: string[] = [
		"cloudformation:CreateResource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateStack API call. */
	static readonly CreateStack: string[] = [
		"cloudformation:CreateStack",
		"iam:PassRole",
		"cloudformation:TagResource",
	];
	/** IAM actions required for the CreateStackInstances API call. */
	static readonly CreateStackInstances: string[] = [
		"cloudformation:CreateStackInstances",
	];
	/** IAM actions required for the CreateStackRefactor API call. */
	static readonly CreateStackRefactor: string[] = [
		"cloudformation:CreateStackRefactor",
	];
	/** IAM actions required for the CreateStackSet API call. */
	static readonly CreateStackSet: string[] = [
		"cloudformation:CreateStackSet",
		"iam:PassRole",
		"cloudformation:TagResource",
	];
	/** IAM actions required for the DeactivateOrganizationsAccess API call. */
	static readonly DeactivateOrganizationsAccess: string[] = [
		"cloudformation:DeactivateOrganizationsAccess",
	];
	/** IAM actions required for the DeactivateType API call. */
	static readonly DeactivateType: string[] = ["cloudformation:DeactivateType"];
	/** IAM actions required for the DeleteChangeSet API call. */
	static readonly DeleteChangeSet: string[] = [
		"cloudformation:DeleteChangeSet",
	];
	/** IAM actions required for the DeleteGeneratedTemplate API call. */
	static readonly DeleteGeneratedTemplate: string[] = [
		"cloudformation:DeleteGeneratedTemplate",
	];
	/** IAM actions required for the DeleteResource API call. */
	static readonly DeleteResource: string[] = [
		"cloudformation:DeleteResource",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteStack API call. */
	static readonly DeleteStack: string[] = [
		"cloudformation:DeleteStack",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteStackInstances API call. */
	static readonly DeleteStackInstances: string[] = [
		"cloudformation:DeleteStackInstances",
	];
	/** IAM actions required for the DeleteStackSet API call. */
	static readonly DeleteStackSet: string[] = ["cloudformation:DeleteStackSet"];
	/** IAM actions required for the DeregisterType API call. */
	static readonly DeregisterType: string[] = ["cloudformation:DeregisterType"];
	/** IAM actions required for the DescribeAccountLimits API call. */
	static readonly DescribeAccountLimits: string[] = [
		"cloudformation:DescribeAccountLimits",
	];
	/** IAM actions required for the DescribeChangeSet API call. */
	static readonly DescribeChangeSet: string[] = [
		"cloudformation:DescribeChangeSet",
	];
	/** IAM actions required for the DescribeChangeSetHooks API call. */
	static readonly DescribeChangeSetHooks: string[] = [
		"cloudformation:DescribeChangeSetHooks",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["cloudformation:DescribeEvents"];
	/** IAM actions required for the DescribeGeneratedTemplate API call. */
	static readonly DescribeGeneratedTemplate: string[] = [
		"cloudformation:DescribeGeneratedTemplate",
	];
	/** IAM actions required for the DescribeOrganizationsAccess API call. */
	static readonly DescribeOrganizationsAccess: string[] = [
		"cloudformation:DescribeOrganizationsAccess",
	];
	/** IAM actions required for the DescribePublisher API call. */
	static readonly DescribePublisher: string[] = [
		"cloudformation:DescribePublisher",
	];
	/** IAM actions required for the DescribeResourceScan API call. */
	static readonly DescribeResourceScan: string[] = [
		"cloudformation:DescribeResourceScan",
	];
	/** IAM actions required for the DescribeStackDriftDetectionStatus API call. */
	static readonly DescribeStackDriftDetectionStatus: string[] = [
		"cloudformation:DescribeStackDriftDetectionStatus",
	];
	/** IAM actions required for the DescribeStackEvents API call. */
	static readonly DescribeStackEvents: string[] = [
		"cloudformation:DescribeStackEvents",
	];
	/** IAM actions required for the DescribeStackInstance API call. */
	static readonly DescribeStackInstance: string[] = [
		"cloudformation:DescribeStackInstance",
	];
	/** IAM actions required for the DescribeStackRefactor API call. */
	static readonly DescribeStackRefactor: string[] = [
		"cloudformation:DescribeStackRefactor",
	];
	/** IAM actions required for the DescribeStackResource API call. */
	static readonly DescribeStackResource: string[] = [
		"cloudformation:DescribeStackResource",
	];
	/** IAM actions required for the DescribeStackResourceDrifts API call. */
	static readonly DescribeStackResourceDrifts: string[] = [
		"cloudformation:DescribeStackResourceDrifts",
	];
	/** IAM actions required for the DescribeStackResources API call. */
	static readonly DescribeStackResources: string[] = [
		"cloudformation:DescribeStackResources",
	];
	/** IAM actions required for the DescribeStackSet API call. */
	static readonly DescribeStackSet: string[] = [
		"cloudformation:DescribeStackSet",
	];
	/** IAM actions required for the DescribeStackSetOperation API call. */
	static readonly DescribeStackSetOperation: string[] = [
		"cloudformation:DescribeStackSetOperation",
	];
	/** IAM actions required for the DescribeStacks API call. */
	static readonly DescribeStacks: string[] = [
		"cloudformation:DescribeStacks",
		"cloudformation:ListStacks",
	];
	/** IAM actions required for the DescribeType API call. */
	static readonly DescribeType: string[] = ["cloudformation:DescribeType"];
	/** IAM actions required for the DescribeTypeRegistration API call. */
	static readonly DescribeTypeRegistration: string[] = [
		"cloudformation:DescribeTypeRegistration",
	];
	/** IAM actions required for the DetectStackDrift API call. */
	static readonly DetectStackDrift: string[] = [
		"cloudformation:DetectStackDrift",
		"cloudformation:DetectStackResourceDrift",
	];
	/** IAM actions required for the DetectStackResourceDrift API call. */
	static readonly DetectStackResourceDrift: string[] = [
		"cloudformation:DetectStackResourceDrift",
	];
	/** IAM actions required for the DetectStackSetDrift API call. */
	static readonly DetectStackSetDrift: string[] = [
		"cloudformation:DetectStackSetDrift",
	];
	/** IAM actions required for the EstimateTemplateCost API call. */
	static readonly EstimateTemplateCost: string[] = [
		"cloudformation:EstimateTemplateCost",
	];
	/** IAM actions required for the ExecuteChangeSet API call. */
	static readonly ExecuteChangeSet: string[] = [
		"cloudformation:ExecuteChangeSet",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
	];
	/** IAM actions required for the ExecuteStackRefactor API call. */
	static readonly ExecuteStackRefactor: string[] = [
		"cloudformation:ExecuteStackRefactor",
	];
	/** IAM actions required for the GetGeneratedTemplate API call. */
	static readonly opGetGeneratedTemplate: string[] = [
		"cloudformation:GetGeneratedTemplate",
	];
	/** IAM actions required for the GetHookResult API call. */
	static readonly opGetHookResult: string[] = ["cloudformation:GetHookResult"];
	/** IAM actions required for the GetResource API call. */
	static readonly opGetResource: string[] = [
		"cloudformation:GetResource",
		"iam:PassRole",
	];
	/** IAM actions required for the GetResourceRequestStatus API call. */
	static readonly opGetResourceRequestStatus: string[] = [
		"cloudformation:GetResourceRequestStatus",
	];
	/** IAM actions required for the GetStackPolicy API call. */
	static readonly opGetStackPolicy: string[] = [
		"cloudformation:GetStackPolicy",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly opGetTemplate: string[] = ["cloudformation:GetTemplate"];
	/** IAM actions required for the GetTemplateSummary API call. */
	static readonly opGetTemplateSummary: string[] = [
		"cloudformation:GetTemplateSummary",
	];
	/** IAM actions required for the ImportStacksToStackSet API call. */
	static readonly ImportStacksToStackSet: string[] = [
		"cloudformation:ImportStacksToStackSet",
	];
	/** IAM actions required for the ListChangeSets API call. */
	static readonly ListChangeSets: string[] = ["cloudformation:ListChangeSets"];
	/** IAM actions required for the ListExports API call. */
	static readonly ListExports: string[] = ["cloudformation:ListExports"];
	/** IAM actions required for the ListGeneratedTemplates API call. */
	static readonly ListGeneratedTemplates: string[] = [
		"cloudformation:ListGeneratedTemplates",
	];
	/** IAM actions required for the ListHookResults API call. */
	static readonly ListHookResults: string[] = [
		"cloudformation:ListAllHookResults",
		"cloudformation:ListHookResults",
	];
	/** IAM actions required for the ListImports API call. */
	static readonly ListImports: string[] = ["cloudformation:ListImports"];
	/** IAM actions required for the ListResourceRequests API call. */
	static readonly ListResourceRequests: string[] = [
		"cloudformation:ListResourceRequests",
	];
	/** IAM actions required for the ListResourceScanRelatedResources API call. */
	static readonly ListResourceScanRelatedResources: string[] = [
		"cloudformation:ListResourceScanRelatedResources",
	];
	/** IAM actions required for the ListResourceScanResources API call. */
	static readonly ListResourceScanResources: string[] = [
		"cloudformation:ListResourceScanResources",
	];
	/** IAM actions required for the ListResourceScans API call. */
	static readonly ListResourceScans: string[] = [
		"cloudformation:ListResourceScans",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly ListResources: string[] = [
		"cloudformation:ListResources",
		"iam:PassRole",
	];
	/** IAM actions required for the ListStackInstanceResourceDrifts API call. */
	static readonly ListStackInstanceResourceDrifts: string[] = [
		"cloudformation:ListStackInstanceResourceDrifts",
	];
	/** IAM actions required for the ListStackInstances API call. */
	static readonly ListStackInstances: string[] = [
		"cloudformation:ListStackInstances",
	];
	/** IAM actions required for the ListStackRefactorActions API call. */
	static readonly ListStackRefactorActions: string[] = [
		"cloudformation:ListStackRefactorActions",
	];
	/** IAM actions required for the ListStackRefactors API call. */
	static readonly ListStackRefactors: string[] = [
		"cloudformation:ListStackRefactors",
	];
	/** IAM actions required for the ListStackResources API call. */
	static readonly ListStackResources: string[] = [
		"cloudformation:ListStackResources",
	];
	/** IAM actions required for the ListStackSetAutoDeploymentTargets API call. */
	static readonly ListStackSetAutoDeploymentTargets: string[] = [
		"cloudformation:ListStackSetAutoDeploymentTargets",
	];
	/** IAM actions required for the ListStackSetOperationResults API call. */
	static readonly ListStackSetOperationResults: string[] = [
		"cloudformation:ListStackSetOperationResults",
	];
	/** IAM actions required for the ListStackSetOperations API call. */
	static readonly ListStackSetOperations: string[] = [
		"cloudformation:ListStackSetOperations",
	];
	/** IAM actions required for the ListStackSets API call. */
	static readonly ListStackSets: string[] = ["cloudformation:ListStackSets"];
	/** IAM actions required for the ListStacks API call. */
	static readonly ListStacks: string[] = ["cloudformation:ListStacks"];
	/** IAM actions required for the ListTypeRegistrations API call. */
	static readonly ListTypeRegistrations: string[] = [
		"cloudformation:ListTypeRegistrations",
	];
	/** IAM actions required for the ListTypeVersions API call. */
	static readonly ListTypeVersions: string[] = [
		"cloudformation:ListTypeVersions",
	];
	/** IAM actions required for the ListTypes API call. */
	static readonly ListTypes: string[] = ["cloudformation:ListTypes"];
	/** IAM actions required for the PublishType API call. */
	static readonly PublishType: string[] = ["cloudformation:PublishType"];
	/** IAM actions required for the RecordHandlerProgress API call. */
	static readonly RecordHandlerProgress: string[] = [
		"cloudformation:RecordHandlerProgress",
	];
	/** IAM actions required for the RegisterPublisher API call. */
	static readonly RegisterPublisher: string[] = [
		"cloudformation:RegisterPublisher",
	];
	/** IAM actions required for the RegisterType API call. */
	static readonly RegisterType: string[] = [
		"iam:PassRole",
		"cloudformation:RegisterType",
	];
	/** IAM actions required for the RollbackStack API call. */
	static readonly RollbackStack: string[] = [
		"iam:PassRole",
		"cloudformation:RollbackStack",
	];
	/** IAM actions required for the SetStackPolicy API call. */
	static readonly opSetStackPolicy: string[] = [
		"cloudformation:SetStackPolicy",
	];
	/** IAM actions required for the SetTypeConfiguration API call. */
	static readonly opSetTypeConfiguration: string[] = [
		"cloudformation:SetTypeConfiguration",
	];
	/** IAM actions required for the SetTypeDefaultVersion API call. */
	static readonly opSetTypeDefaultVersion: string[] = [
		"cloudformation:SetTypeDefaultVersion",
	];
	/** IAM actions required for the SignalResource API call. */
	static readonly SignalResource: string[] = ["cloudformation:SignalResource"];
	/** IAM actions required for the StartResourceScan API call. */
	static readonly StartResourceScan: string[] = [
		"cloudformation:StartResourceScan",
	];
	/** IAM actions required for the StopStackSetOperation API call. */
	static readonly StopStackSetOperation: string[] = [
		"cloudformation:StopStackSetOperation",
	];
	/** IAM actions required for the TestType API call. */
	static readonly TestType: string[] = ["cloudformation:TestType"];
	/** IAM actions required for the UpdateGeneratedTemplate API call. */
	static readonly UpdateGeneratedTemplate: string[] = [
		"cloudformation:UpdateGeneratedTemplate",
	];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UpdateResource: string[] = [
		"iam:PassRole",
		"cloudformation:UpdateResource",
	];
	/** IAM actions required for the UpdateStack API call. */
	static readonly UpdateStack: string[] = [
		"iam:PassRole",
		"cloudformation:SetStackPolicy",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
		"cloudformation:UpdateStack",
	];
	/** IAM actions required for the UpdateStackInstances API call. */
	static readonly UpdateStackInstances: string[] = [
		"cloudformation:UpdateStackInstances",
	];
	/** IAM actions required for the UpdateStackSet API call. */
	static readonly UpdateStackSet: string[] = [
		"iam:PassRole",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
		"cloudformation:UpdateStackSet",
	];
	/** IAM actions required for the UpdateTerminationProtection API call. */
	static readonly UpdateTerminationProtection: string[] = [
		"cloudformation:UpdateTerminationProtection",
	];
	/** IAM actions required for the ValidateTemplate API call. */
	static readonly ValidateTemplate: string[] = [
		"cloudformation:ValidateTemplate",
	];
}

/**
 * Condition key constants and builders for cloudformation.
 */
export class CloudFormationConditions {
	/** Condition keys applicable to the ContinueUpdateRollback action. */
	static readonly ContinueUpdateRollbackConditionKeys: string[] = [
		"cloudformation:RoleArn",
	];
	/** Condition keys applicable to the CreateChangeSet action. */
	static readonly CreateChangeSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:ChangeSetName",
		"cloudformation:ImportResourceTypes",
		"cloudformation:ResourceTypes",
		"cloudformation:RoleArn",
		"cloudformation:StackPolicyUrl",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the CreateStack action. */
	static readonly CreateStackConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:ResourceTypes",
		"cloudformation:RoleArn",
		"cloudformation:StackPolicyUrl",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the CreateStackInstances action. */
	static readonly CreateStackInstancesConditionKeys: string[] = [
		"aws:TagKeys",
		"cloudformation:TargetRegion",
	];
	/** Condition keys applicable to the CreateStackSet action. */
	static readonly CreateStackSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:RoleArn",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the DeleteChangeSet action. */
	static readonly DeleteChangeSetConditionKeys: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the DeleteStack action. */
	static readonly DeleteStackConditionKeys: string[] = [
		"cloudformation:RoleArn",
	];
	/** Condition keys applicable to the DeleteStackInstances action. */
	static readonly DeleteStackInstancesConditionKeys: string[] = [
		"cloudformation:TargetRegion",
	];
	/** Condition keys applicable to the DescribeChangeSet action. */
	static readonly DescribeChangeSetConditionKeys: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the DescribeChangeSetHooks action. */
	static readonly DescribeChangeSetHooksConditionKeys: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the EstimateTemplateCost action. */
	static readonly EstimateTemplateCostConditionKeys: string[] = [
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the ExecuteChangeSet action. */
	static readonly ExecuteChangeSetConditionKeys: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the GetHookResult action. */
	static readonly actionGetHookResultConditionKeys: string[] = [
		"cloudformation:TypeArn",
	];
	/** Condition keys applicable to the GetTemplateSummary action. */
	static readonly actionGetTemplateSummaryConditionKeys: string[] = [
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the ListAllHookResults action. */
	static readonly ListAllHookResultsConditionKeys: string[] = [
		"cloudformation:TypeArn",
	];
	/** Condition keys applicable to the ListHookResults action. */
	static readonly ListHookResultsConditionKeys: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the RollbackStack action. */
	static readonly RollbackStackConditionKeys: string[] = [
		"cloudformation:RoleArn",
	];
	/** Condition keys applicable to the SetStackPolicy action. */
	static readonly actionSetStackPolicyConditionKeys: string[] = [
		"cloudformation:StackPolicyUrl",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"cloudformation:CreateAction",
	];
	/** Condition keys applicable to the UpdateStack action. */
	static readonly UpdateStackConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:ResourceTypes",
		"cloudformation:RoleArn",
		"cloudformation:StackPolicyUrl",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the UpdateStackInstances action. */
	static readonly UpdateStackInstancesConditionKeys: string[] = [
		"cloudformation:TargetRegion",
	];
	/** Condition keys applicable to the UpdateStackSet action. */
	static readonly UpdateStackSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:RoleArn",
		"cloudformation:TargetRegion",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the ValidateTemplate action. */
	static readonly ValidateTemplateConditionKeys: string[] = [
		"cloudformation:TemplateUrl",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: cloudformation:ChangeSetName (String) */
	static readonly CHANGE_SET_NAME = "cloudformation:ChangeSetName";
	/** Condition key: cloudformation:CreateAction (String) */
	static readonly CREATE_ACTION = "cloudformation:CreateAction";
	/** Condition key: cloudformation:ImportResourceTypes (String) */
	static readonly IMPORT_RESOURCE_TYPES = "cloudformation:ImportResourceTypes";
	/** Condition key: cloudformation:ResourceTypes (ArrayOfString) */
	static readonly RESOURCE_TYPES = "cloudformation:ResourceTypes";
	/** Condition key: cloudformation:RoleArn (ARN) */
	static readonly ROLE_ARN = "cloudformation:RoleArn";
	/** Condition key: cloudformation:StackPolicyUrl (String) */
	static readonly STACK_POLICY_URL = "cloudformation:StackPolicyUrl";
	/** Condition key: cloudformation:TargetRegion (ArrayOfString) */
	static readonly TARGET_REGION = "cloudformation:TargetRegion";
	/** Condition key: cloudformation:TemplateUrl (String) */
	static readonly TEMPLATE_URL = "cloudformation:TemplateUrl";
	/** Condition key: cloudformation:TypeArn (ARN) */
	static readonly TYPE_ARN = "cloudformation:TypeArn";

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
	 * Generates a condition block for `cloudformation:ChangeSetName`.
	 */
	static changeSetName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudformation:ChangeSetName": value } };
	}

	/**
	 * Generates a condition block for `cloudformation:CreateAction`.
	 */
	static createAction(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudformation:CreateAction": value } };
	}

	/**
	 * Generates a condition block for `cloudformation:ImportResourceTypes`.
	 */
	static importResourceTypes(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudformation:ImportResourceTypes": value } };
	}

	/**
	 * Generates a condition block for `cloudformation:ResourceTypes`.
	 */
	static resourceTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "cloudformation:ResourceTypes": values },
		};
	}

	/**
	 * Generates a condition block for `cloudformation:RoleArn`.
	 */
	static roleARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "cloudformation:RoleArn": value } };
	}

	/**
	 * Generates a condition block for `cloudformation:StackPolicyUrl`.
	 */
	static stackPolicyURL(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudformation:StackPolicyUrl": value } };
	}

	/**
	 * Generates a condition block for `cloudformation:TargetRegion`.
	 */
	static targetRegion(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "cloudformation:TargetRegion": values },
		};
	}

	/**
	 * Generates a condition block for `cloudformation:TemplateUrl`.
	 */
	static templateURL(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cloudformation:TemplateUrl": value } };
	}

	/**
	 * Generates a condition block for `cloudformation:TypeArn`.
	 */
	static typeARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "cloudformation:TypeArn": value } };
	}
}
