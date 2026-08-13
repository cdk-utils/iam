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
	static readonly ACTIVATE_ORGANIZATIONS_ACCESS =
		"cloudformation:ActivateOrganizationsAccess";
	/** [Write] cloudformation:ActivateType */
	static readonly ACTIVATE_TYPE = "cloudformation:ActivateType";
	/** [Read] cloudformation:BatchDescribeTypeConfigurations */
	static readonly BATCH_DESCRIBE_TYPE_CONFIGURATIONS =
		"cloudformation:BatchDescribeTypeConfigurations";
	/** [Write] cloudformation:CancelResourceRequest */
	static readonly CANCEL_RESOURCE_REQUEST =
		"cloudformation:CancelResourceRequest";
	/** [Write] cloudformation:CancelUpdateStack */
	static readonly CANCEL_UPDATE_STACK = "cloudformation:CancelUpdateStack";
	/** [Write] cloudformation:ContinueUpdateRollback */
	static readonly CONTINUE_UPDATE_ROLLBACK =
		"cloudformation:ContinueUpdateRollback";
	/** [Write] cloudformation:CreateChangeSet */
	static readonly CREATE_CHANGE_SET = "cloudformation:CreateChangeSet";
	/** [Write] cloudformation:CreateGeneratedTemplate */
	static readonly CREATE_GENERATED_TEMPLATE =
		"cloudformation:CreateGeneratedTemplate";
	/** [Write] cloudformation:CreateResource */
	static readonly CREATE_RESOURCE = "cloudformation:CreateResource";
	/** [Write] cloudformation:CreateStack */
	static readonly CREATE_STACK = "cloudformation:CreateStack";
	/** [Write] cloudformation:CreateStackInstances */
	static readonly CREATE_STACK_INSTANCES =
		"cloudformation:CreateStackInstances";
	/** [Write] cloudformation:CreateStackRefactor */
	static readonly CREATE_STACK_REFACTOR = "cloudformation:CreateStackRefactor";
	/** [Write] cloudformation:CreateStackSet */
	static readonly CREATE_STACK_SET = "cloudformation:CreateStackSet";
	/** [Write] cloudformation:CreateUploadBucket */
	static readonly CREATE_UPLOAD_BUCKET = "cloudformation:CreateUploadBucket";
	/** [Write] cloudformation:DeactivateOrganizationsAccess */
	static readonly DEACTIVATE_ORGANIZATIONS_ACCESS =
		"cloudformation:DeactivateOrganizationsAccess";
	/** [Write] cloudformation:DeactivateType */
	static readonly DEACTIVATE_TYPE = "cloudformation:DeactivateType";
	/** [Write] cloudformation:DeleteChangeSet */
	static readonly DELETE_CHANGE_SET = "cloudformation:DeleteChangeSet";
	/** [Write] cloudformation:DeleteGeneratedTemplate */
	static readonly DELETE_GENERATED_TEMPLATE =
		"cloudformation:DeleteGeneratedTemplate";
	/** [Write] cloudformation:DeleteResource */
	static readonly DELETE_RESOURCE = "cloudformation:DeleteResource";
	/** [Write] cloudformation:DeleteStack */
	static readonly DELETE_STACK = "cloudformation:DeleteStack";
	/** [Write] cloudformation:DeleteStackInstances */
	static readonly DELETE_STACK_INSTANCES =
		"cloudformation:DeleteStackInstances";
	/** [Write] cloudformation:DeleteStackSet */
	static readonly DELETE_STACK_SET = "cloudformation:DeleteStackSet";
	/** [Write] cloudformation:DeregisterType */
	static readonly DEREGISTER_TYPE = "cloudformation:DeregisterType";
	/** [Read] cloudformation:DescribeAccountLimits */
	static readonly DESCRIBE_ACCOUNT_LIMITS =
		"cloudformation:DescribeAccountLimits";
	/** [Read] cloudformation:DescribeChangeSet */
	static readonly DESCRIBE_CHANGE_SET = "cloudformation:DescribeChangeSet";
	/** [Read] cloudformation:DescribeChangeSetHooks */
	static readonly DESCRIBE_CHANGE_SET_HOOKS =
		"cloudformation:DescribeChangeSetHooks";
	/** [Read] cloudformation:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "cloudformation:DescribeEvents";
	/** [Read] cloudformation:DescribeGeneratedTemplate */
	static readonly DESCRIBE_GENERATED_TEMPLATE =
		"cloudformation:DescribeGeneratedTemplate";
	/** [Read] cloudformation:DescribeOrganizationsAccess */
	static readonly DESCRIBE_ORGANIZATIONS_ACCESS =
		"cloudformation:DescribeOrganizationsAccess";
	/** [Read] cloudformation:DescribePublisher */
	static readonly DESCRIBE_PUBLISHER = "cloudformation:DescribePublisher";
	/** [Read] cloudformation:DescribeResourceScan */
	static readonly DESCRIBE_RESOURCE_SCAN =
		"cloudformation:DescribeResourceScan";
	/** [Read] cloudformation:DescribeStackDriftDetectionStatus */
	static readonly DESCRIBE_STACK_DRIFT_DETECTION_STATUS =
		"cloudformation:DescribeStackDriftDetectionStatus";
	/** [Read] cloudformation:DescribeStackEvents */
	static readonly DESCRIBE_STACK_EVENTS = "cloudformation:DescribeStackEvents";
	/** [Read] cloudformation:DescribeStackInstance */
	static readonly DESCRIBE_STACK_INSTANCE =
		"cloudformation:DescribeStackInstance";
	/** [Read] cloudformation:DescribeStackRefactor */
	static readonly DESCRIBE_STACK_REFACTOR =
		"cloudformation:DescribeStackRefactor";
	/** [Read] cloudformation:DescribeStackResource */
	static readonly DESCRIBE_STACK_RESOURCE =
		"cloudformation:DescribeStackResource";
	/** [Read] cloudformation:DescribeStackResourceDrifts */
	static readonly DESCRIBE_STACK_RESOURCE_DRIFTS =
		"cloudformation:DescribeStackResourceDrifts";
	/** [Read] cloudformation:DescribeStackResources */
	static readonly DESCRIBE_STACK_RESOURCES =
		"cloudformation:DescribeStackResources";
	/** [Read] cloudformation:DescribeStackSet */
	static readonly DESCRIBE_STACK_SET = "cloudformation:DescribeStackSet";
	/** [Read] cloudformation:DescribeStackSetOperation */
	static readonly DESCRIBE_STACK_SET_OPERATION =
		"cloudformation:DescribeStackSetOperation";
	/** [List] cloudformation:DescribeStacks */
	static readonly DESCRIBE_STACKS = "cloudformation:DescribeStacks";
	/** [Read] cloudformation:DescribeType */
	static readonly DESCRIBE_TYPE = "cloudformation:DescribeType";
	/** [Read] cloudformation:DescribeTypeRegistration */
	static readonly DESCRIBE_TYPE_REGISTRATION =
		"cloudformation:DescribeTypeRegistration";
	/** [Read] cloudformation:DetectStackDrift */
	static readonly DETECT_STACK_DRIFT = "cloudformation:DetectStackDrift";
	/** [Read] cloudformation:DetectStackResourceDrift */
	static readonly DETECT_STACK_RESOURCE_DRIFT =
		"cloudformation:DetectStackResourceDrift";
	/** [Read] cloudformation:DetectStackSetDrift */
	static readonly DETECT_STACK_SET_DRIFT = "cloudformation:DetectStackSetDrift";
	/** [Read] cloudformation:EstimateTemplateCost */
	static readonly ESTIMATE_TEMPLATE_COST =
		"cloudformation:EstimateTemplateCost";
	/** [Write] cloudformation:ExecuteChangeSet */
	static readonly EXECUTE_CHANGE_SET = "cloudformation:ExecuteChangeSet";
	/** [Write] cloudformation:ExecuteStackRefactor */
	static readonly EXECUTE_STACK_REFACTOR =
		"cloudformation:ExecuteStackRefactor";
	/** [Read] cloudformation:GetGeneratedTemplate */
	static readonly GET_GENERATED_TEMPLATE =
		"cloudformation:GetGeneratedTemplate";
	/** [Read] cloudformation:GetHookResult */
	static readonly GET_HOOK_RESULT = "cloudformation:GetHookResult";
	/** [Read] cloudformation:GetResource */
	static readonly GET_RESOURCE = "cloudformation:GetResource";
	/** [Read] cloudformation:GetResourceRequestStatus */
	static readonly GET_RESOURCE_REQUEST_STATUS =
		"cloudformation:GetResourceRequestStatus";
	/** [Read] cloudformation:GetStackPolicy */
	static readonly GET_STACK_POLICY = "cloudformation:GetStackPolicy";
	/** [Read] cloudformation:GetTemplate */
	static readonly GET_TEMPLATE = "cloudformation:GetTemplate";
	/** [Read] cloudformation:GetTemplateSummary */
	static readonly GET_TEMPLATE_SUMMARY = "cloudformation:GetTemplateSummary";
	/** [Write] cloudformation:ImportStacksToStackSet */
	static readonly IMPORT_STACKS_TO_STACK_SET =
		"cloudformation:ImportStacksToStackSet";
	/** [List] cloudformation:ListAllHookResults */
	static readonly LIST_ALL_HOOK_RESULTS = "cloudformation:ListAllHookResults";
	/** [List] cloudformation:ListChangeSets */
	static readonly LIST_CHANGE_SETS = "cloudformation:ListChangeSets";
	/** [List] cloudformation:ListExports */
	static readonly LIST_EXPORTS = "cloudformation:ListExports";
	/** [List] cloudformation:ListGeneratedTemplates */
	static readonly LIST_GENERATED_TEMPLATES =
		"cloudformation:ListGeneratedTemplates";
	/** [List] cloudformation:ListHookResults */
	static readonly LIST_HOOK_RESULTS = "cloudformation:ListHookResults";
	/** [List] cloudformation:ListImports */
	static readonly LIST_IMPORTS = "cloudformation:ListImports";
	/** [Read] cloudformation:ListResourceRequests */
	static readonly LIST_RESOURCE_REQUESTS =
		"cloudformation:ListResourceRequests";
	/** [List] cloudformation:ListResourceScanRelatedResources */
	static readonly LIST_RESOURCE_SCAN_RELATED_RESOURCES =
		"cloudformation:ListResourceScanRelatedResources";
	/** [List] cloudformation:ListResourceScanResources */
	static readonly LIST_RESOURCE_SCAN_RESOURCES =
		"cloudformation:ListResourceScanResources";
	/** [List] cloudformation:ListResourceScans */
	static readonly LIST_RESOURCE_SCANS = "cloudformation:ListResourceScans";
	/** [Read] cloudformation:ListResources */
	static readonly LIST_RESOURCES = "cloudformation:ListResources";
	/** [List] cloudformation:ListStackInstanceResourceDrifts */
	static readonly LIST_STACK_INSTANCE_RESOURCE_DRIFTS =
		"cloudformation:ListStackInstanceResourceDrifts";
	/** [List] cloudformation:ListStackInstances */
	static readonly LIST_STACK_INSTANCES = "cloudformation:ListStackInstances";
	/** [List] cloudformation:ListStackRefactorActions */
	static readonly LIST_STACK_REFACTOR_ACTIONS =
		"cloudformation:ListStackRefactorActions";
	/** [List] cloudformation:ListStackRefactors */
	static readonly LIST_STACK_REFACTORS = "cloudformation:ListStackRefactors";
	/** [List] cloudformation:ListStackResources */
	static readonly LIST_STACK_RESOURCES = "cloudformation:ListStackResources";
	/** [List] cloudformation:ListStackSetAutoDeploymentTargets */
	static readonly LIST_STACK_SET_AUTO_DEPLOYMENT_TARGETS =
		"cloudformation:ListStackSetAutoDeploymentTargets";
	/** [List] cloudformation:ListStackSetOperationResults */
	static readonly LIST_STACK_SET_OPERATION_RESULTS =
		"cloudformation:ListStackSetOperationResults";
	/** [List] cloudformation:ListStackSetOperations */
	static readonly LIST_STACK_SET_OPERATIONS =
		"cloudformation:ListStackSetOperations";
	/** [List] cloudformation:ListStackSets */
	static readonly LIST_STACK_SETS = "cloudformation:ListStackSets";
	/** [List] cloudformation:ListStacks */
	static readonly LIST_STACKS = "cloudformation:ListStacks";
	/** [List] cloudformation:ListTypeRegistrations */
	static readonly LIST_TYPE_REGISTRATIONS =
		"cloudformation:ListTypeRegistrations";
	/** [List] cloudformation:ListTypeVersions */
	static readonly LIST_TYPE_VERSIONS = "cloudformation:ListTypeVersions";
	/** [List] cloudformation:ListTypes */
	static readonly LIST_TYPES = "cloudformation:ListTypes";
	/** [Write] cloudformation:PublishType */
	static readonly PUBLISH_TYPE = "cloudformation:PublishType";
	/** [Write] cloudformation:RecordHandlerProgress */
	static readonly RECORD_HANDLER_PROGRESS =
		"cloudformation:RecordHandlerProgress";
	/** [Write] cloudformation:RegisterPublisher */
	static readonly REGISTER_PUBLISHER = "cloudformation:RegisterPublisher";
	/** [Write] cloudformation:RegisterType */
	static readonly REGISTER_TYPE = "cloudformation:RegisterType";
	/** [Write] cloudformation:RollbackStack */
	static readonly ROLLBACK_STACK = "cloudformation:RollbackStack";
	/** [PermissionManagement] cloudformation:SetStackPolicy */
	static readonly SET_STACK_POLICY = "cloudformation:SetStackPolicy";
	/** [Write] cloudformation:SetTypeConfiguration */
	static readonly SET_TYPE_CONFIGURATION =
		"cloudformation:SetTypeConfiguration";
	/** [Write] cloudformation:SetTypeDefaultVersion */
	static readonly SET_TYPE_DEFAULT_VERSION =
		"cloudformation:SetTypeDefaultVersion";
	/** [Write] cloudformation:SignalResource */
	static readonly SIGNAL_RESOURCE = "cloudformation:SignalResource";
	/** [Write] cloudformation:StartResourceScan */
	static readonly START_RESOURCE_SCAN = "cloudformation:StartResourceScan";
	/** [Write] cloudformation:StopStackSetOperation */
	static readonly STOP_STACK_SET_OPERATION =
		"cloudformation:StopStackSetOperation";
	/** [Tagging] cloudformation:TagResource */
	static readonly TAG_RESOURCE = "cloudformation:TagResource";
	/** [Write] cloudformation:TestType */
	static readonly TEST_TYPE = "cloudformation:TestType";
	/** [Tagging] cloudformation:UntagResource */
	static readonly UNTAG_RESOURCE = "cloudformation:UntagResource";
	/** [Write] cloudformation:UpdateGeneratedTemplate */
	static readonly UPDATE_GENERATED_TEMPLATE =
		"cloudformation:UpdateGeneratedTemplate";
	/** [Write] cloudformation:UpdateResource */
	static readonly UPDATE_RESOURCE = "cloudformation:UpdateResource";
	/** [Write] cloudformation:UpdateStack */
	static readonly UPDATE_STACK = "cloudformation:UpdateStack";
	/** [Write] cloudformation:UpdateStackInstances */
	static readonly UPDATE_STACK_INSTANCES =
		"cloudformation:UpdateStackInstances";
	/** [Write] cloudformation:UpdateStackSet */
	static readonly UPDATE_STACK_SET = "cloudformation:UpdateStackSet";
	/** [Write] cloudformation:UpdateTerminationProtection */
	static readonly UPDATE_TERMINATION_PROTECTION =
		"cloudformation:UpdateTerminationProtection";
	/** [Read] cloudformation:ValidateTemplate */
	static readonly VALIDATE_TEMPLATE = "cloudformation:ValidateTemplate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CloudFormationActions.BATCH_DESCRIBE_TYPE_CONFIGURATIONS,
		CloudFormationActions.DESCRIBE_ACCOUNT_LIMITS,
		CloudFormationActions.DESCRIBE_CHANGE_SET,
		CloudFormationActions.DESCRIBE_CHANGE_SET_HOOKS,
		CloudFormationActions.DESCRIBE_EVENTS,
		CloudFormationActions.DESCRIBE_GENERATED_TEMPLATE,
		CloudFormationActions.DESCRIBE_ORGANIZATIONS_ACCESS,
		CloudFormationActions.DESCRIBE_PUBLISHER,
		CloudFormationActions.DESCRIBE_RESOURCE_SCAN,
		CloudFormationActions.DESCRIBE_STACK_DRIFT_DETECTION_STATUS,
		CloudFormationActions.DESCRIBE_STACK_EVENTS,
		CloudFormationActions.DESCRIBE_STACK_INSTANCE,
		CloudFormationActions.DESCRIBE_STACK_REFACTOR,
		CloudFormationActions.DESCRIBE_STACK_RESOURCE,
		CloudFormationActions.DESCRIBE_STACK_RESOURCE_DRIFTS,
		CloudFormationActions.DESCRIBE_STACK_RESOURCES,
		CloudFormationActions.DESCRIBE_STACK_SET,
		CloudFormationActions.DESCRIBE_STACK_SET_OPERATION,
		CloudFormationActions.DESCRIBE_TYPE,
		CloudFormationActions.DESCRIBE_TYPE_REGISTRATION,
		CloudFormationActions.DETECT_STACK_DRIFT,
		CloudFormationActions.DETECT_STACK_RESOURCE_DRIFT,
		CloudFormationActions.DETECT_STACK_SET_DRIFT,
		CloudFormationActions.ESTIMATE_TEMPLATE_COST,
		CloudFormationActions.GET_GENERATED_TEMPLATE,
		CloudFormationActions.GET_HOOK_RESULT,
		CloudFormationActions.GET_RESOURCE,
		CloudFormationActions.GET_RESOURCE_REQUEST_STATUS,
		CloudFormationActions.GET_STACK_POLICY,
		CloudFormationActions.GET_TEMPLATE,
		CloudFormationActions.GET_TEMPLATE_SUMMARY,
		CloudFormationActions.LIST_RESOURCE_REQUESTS,
		CloudFormationActions.LIST_RESOURCES,
		CloudFormationActions.VALIDATE_TEMPLATE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CloudFormationActions.ACTIVATE_ORGANIZATIONS_ACCESS,
		CloudFormationActions.ACTIVATE_TYPE,
		CloudFormationActions.CANCEL_RESOURCE_REQUEST,
		CloudFormationActions.CANCEL_UPDATE_STACK,
		CloudFormationActions.CONTINUE_UPDATE_ROLLBACK,
		CloudFormationActions.CREATE_CHANGE_SET,
		CloudFormationActions.CREATE_GENERATED_TEMPLATE,
		CloudFormationActions.CREATE_RESOURCE,
		CloudFormationActions.CREATE_STACK,
		CloudFormationActions.CREATE_STACK_INSTANCES,
		CloudFormationActions.CREATE_STACK_REFACTOR,
		CloudFormationActions.CREATE_STACK_SET,
		CloudFormationActions.CREATE_UPLOAD_BUCKET,
		CloudFormationActions.DEACTIVATE_ORGANIZATIONS_ACCESS,
		CloudFormationActions.DEACTIVATE_TYPE,
		CloudFormationActions.DELETE_CHANGE_SET,
		CloudFormationActions.DELETE_GENERATED_TEMPLATE,
		CloudFormationActions.DELETE_RESOURCE,
		CloudFormationActions.DELETE_STACK,
		CloudFormationActions.DELETE_STACK_INSTANCES,
		CloudFormationActions.DELETE_STACK_SET,
		CloudFormationActions.DEREGISTER_TYPE,
		CloudFormationActions.EXECUTE_CHANGE_SET,
		CloudFormationActions.EXECUTE_STACK_REFACTOR,
		CloudFormationActions.IMPORT_STACKS_TO_STACK_SET,
		CloudFormationActions.PUBLISH_TYPE,
		CloudFormationActions.RECORD_HANDLER_PROGRESS,
		CloudFormationActions.REGISTER_PUBLISHER,
		CloudFormationActions.REGISTER_TYPE,
		CloudFormationActions.ROLLBACK_STACK,
		CloudFormationActions.SET_TYPE_CONFIGURATION,
		CloudFormationActions.SET_TYPE_DEFAULT_VERSION,
		CloudFormationActions.SIGNAL_RESOURCE,
		CloudFormationActions.START_RESOURCE_SCAN,
		CloudFormationActions.STOP_STACK_SET_OPERATION,
		CloudFormationActions.TEST_TYPE,
		CloudFormationActions.UPDATE_GENERATED_TEMPLATE,
		CloudFormationActions.UPDATE_RESOURCE,
		CloudFormationActions.UPDATE_STACK,
		CloudFormationActions.UPDATE_STACK_INSTANCES,
		CloudFormationActions.UPDATE_STACK_SET,
		CloudFormationActions.UPDATE_TERMINATION_PROTECTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CloudFormationActions.DESCRIBE_STACKS,
		CloudFormationActions.LIST_ALL_HOOK_RESULTS,
		CloudFormationActions.LIST_CHANGE_SETS,
		CloudFormationActions.LIST_EXPORTS,
		CloudFormationActions.LIST_GENERATED_TEMPLATES,
		CloudFormationActions.LIST_HOOK_RESULTS,
		CloudFormationActions.LIST_IMPORTS,
		CloudFormationActions.LIST_RESOURCE_SCAN_RELATED_RESOURCES,
		CloudFormationActions.LIST_RESOURCE_SCAN_RESOURCES,
		CloudFormationActions.LIST_RESOURCE_SCANS,
		CloudFormationActions.LIST_STACK_INSTANCE_RESOURCE_DRIFTS,
		CloudFormationActions.LIST_STACK_INSTANCES,
		CloudFormationActions.LIST_STACK_REFACTOR_ACTIONS,
		CloudFormationActions.LIST_STACK_REFACTORS,
		CloudFormationActions.LIST_STACK_RESOURCES,
		CloudFormationActions.LIST_STACK_SET_AUTO_DEPLOYMENT_TARGETS,
		CloudFormationActions.LIST_STACK_SET_OPERATION_RESULTS,
		CloudFormationActions.LIST_STACK_SET_OPERATIONS,
		CloudFormationActions.LIST_STACK_SETS,
		CloudFormationActions.LIST_STACKS,
		CloudFormationActions.LIST_TYPE_REGISTRATIONS,
		CloudFormationActions.LIST_TYPE_VERSIONS,
		CloudFormationActions.LIST_TYPES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		CloudFormationActions.SET_STACK_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CloudFormationActions.TAG_RESOURCE,
		CloudFormationActions.UNTAG_RESOURCE,
	];
}

const ChangesetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):changeSet/(?<changeSetName>[^:/?]+)/(?<id>[^:/?]+)$",
);
const GeneratedtemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):generatedTemplate/(?<id>[^:/?]+)$",
);
const ResourcescanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):resourceScan/(?<id>[^:/?]+)$",
);
const StackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):stack/(?<stackName>[^:/?]+)/(?<id>[^:/?]+)$",
);
const StacksetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):stackset/(?<stackSetName>[^:/?]+):(?<id>[^:/?]+)$",
);
const StacksetTargetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):stackset-target/(?<stackSetTarget>[^:/?]+)$",
);
const TypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):type/resource/(?<type>[^:/?]+)$",
);
const TypeHookArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudformation:(?<region>[^:]*):(?<account>[^:]*):type/hook/(?<type>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloudformation resources.
 */
export class CloudFormationResources {
	/**
	 * Builds an ARN for the changeset resource.
	 */
	static changeset(props: {
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
	}): string {
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
	static parseChangesetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		changeSetName: string;
		id: string;
	} {
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
	static generatedtemplate(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGeneratedtemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static resourcescan(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseResourcescanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static stack(props: {
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
	}): string {
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
	static parseStackArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stackName: string;
		id: string;
	} {
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
	static stackset(props: {
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
	}): string {
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
	static parseStacksetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stackSetName: string;
		id: string;
	} {
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
	static stacksetTarget(props: {
		/** The StackSetTarget component of the ARN. */
		readonly stackSetTarget: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStacksetTargetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stackSetTarget: string;
	} {
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
	static type(props: {
		/** The Type component of the ARN. */
		readonly type: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		type: string;
	} {
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
	static typeHook(props: {
		/** The Type component of the ARN. */
		readonly type: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTypeHookArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		type: string;
	} {
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
	static readonly ACTIVATE_ORGANIZATIONS_ACCESS: string[] = [
		"cloudformation:ActivateOrganizationsAccess",
		"iam:CreateServiceLinkedRole",
		"iam:GetRole",
	];
	/** IAM actions required for the ActivateType API call. */
	static readonly ACTIVATE_TYPE: string[] = [
		"cloudformation:ActivateType",
		"iam:PassRole",
	];
	/** IAM actions required for the BatchDescribeTypeConfigurations API call. */
	static readonly BATCH_DESCRIBE_TYPE_CONFIGURATIONS: string[] = [
		"cloudformation:BatchDescribeTypeConfigurations",
	];
	/** IAM actions required for the CancelResourceRequest API call. */
	static readonly CANCEL_RESOURCE_REQUEST: string[] = [
		"cloudformation:CancelResourceRequest",
	];
	/** IAM actions required for the CancelUpdateStack API call. */
	static readonly CANCEL_UPDATE_STACK: string[] = [
		"cloudformation:CancelUpdateStack",
	];
	/** IAM actions required for the ContinueUpdateRollback API call. */
	static readonly CONTINUE_UPDATE_ROLLBACK: string[] = [
		"cloudformation:ContinueUpdateRollback",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateChangeSet API call. */
	static readonly CREATE_CHANGE_SET: string[] = [
		"cloudformation:CreateChangeSet",
		"iam:PassRole",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
	];
	/** IAM actions required for the CreateGeneratedTemplate API call. */
	static readonly CREATE_GENERATED_TEMPLATE: string[] = [
		"cloudformation:CreateGeneratedTemplate",
	];
	/** IAM actions required for the CreateResource API call. */
	static readonly CREATE_RESOURCE: string[] = [
		"cloudformation:CreateResource",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateStack API call. */
	static readonly CREATE_STACK: string[] = [
		"cloudformation:CreateStack",
		"iam:PassRole",
		"cloudformation:TagResource",
	];
	/** IAM actions required for the CreateStackInstances API call. */
	static readonly CREATE_STACK_INSTANCES: string[] = [
		"cloudformation:CreateStackInstances",
	];
	/** IAM actions required for the CreateStackRefactor API call. */
	static readonly CREATE_STACK_REFACTOR: string[] = [
		"cloudformation:CreateStackRefactor",
	];
	/** IAM actions required for the CreateStackSet API call. */
	static readonly CREATE_STACK_SET: string[] = [
		"cloudformation:CreateStackSet",
		"iam:PassRole",
		"cloudformation:TagResource",
	];
	/** IAM actions required for the DeactivateOrganizationsAccess API call. */
	static readonly DEACTIVATE_ORGANIZATIONS_ACCESS: string[] = [
		"cloudformation:DeactivateOrganizationsAccess",
	];
	/** IAM actions required for the DeactivateType API call. */
	static readonly DEACTIVATE_TYPE: string[] = ["cloudformation:DeactivateType"];
	/** IAM actions required for the DeleteChangeSet API call. */
	static readonly DELETE_CHANGE_SET: string[] = [
		"cloudformation:DeleteChangeSet",
	];
	/** IAM actions required for the DeleteGeneratedTemplate API call. */
	static readonly DELETE_GENERATED_TEMPLATE: string[] = [
		"cloudformation:DeleteGeneratedTemplate",
	];
	/** IAM actions required for the DeleteResource API call. */
	static readonly DELETE_RESOURCE: string[] = [
		"cloudformation:DeleteResource",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteStack API call. */
	static readonly DELETE_STACK: string[] = [
		"cloudformation:DeleteStack",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteStackInstances API call. */
	static readonly DELETE_STACK_INSTANCES: string[] = [
		"cloudformation:DeleteStackInstances",
	];
	/** IAM actions required for the DeleteStackSet API call. */
	static readonly DELETE_STACK_SET: string[] = [
		"cloudformation:DeleteStackSet",
	];
	/** IAM actions required for the DeregisterType API call. */
	static readonly DEREGISTER_TYPE: string[] = ["cloudformation:DeregisterType"];
	/** IAM actions required for the DescribeAccountLimits API call. */
	static readonly DESCRIBE_ACCOUNT_LIMITS: string[] = [
		"cloudformation:DescribeAccountLimits",
	];
	/** IAM actions required for the DescribeChangeSet API call. */
	static readonly DESCRIBE_CHANGE_SET: string[] = [
		"cloudformation:DescribeChangeSet",
	];
	/** IAM actions required for the DescribeChangeSetHooks API call. */
	static readonly DESCRIBE_CHANGE_SET_HOOKS: string[] = [
		"cloudformation:DescribeChangeSetHooks",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["cloudformation:DescribeEvents"];
	/** IAM actions required for the DescribeGeneratedTemplate API call. */
	static readonly DESCRIBE_GENERATED_TEMPLATE: string[] = [
		"cloudformation:DescribeGeneratedTemplate",
	];
	/** IAM actions required for the DescribeOrganizationsAccess API call. */
	static readonly DESCRIBE_ORGANIZATIONS_ACCESS: string[] = [
		"cloudformation:DescribeOrganizationsAccess",
	];
	/** IAM actions required for the DescribePublisher API call. */
	static readonly DESCRIBE_PUBLISHER: string[] = [
		"cloudformation:DescribePublisher",
	];
	/** IAM actions required for the DescribeResourceScan API call. */
	static readonly DESCRIBE_RESOURCE_SCAN: string[] = [
		"cloudformation:DescribeResourceScan",
	];
	/** IAM actions required for the DescribeStackDriftDetectionStatus API call. */
	static readonly DESCRIBE_STACK_DRIFT_DETECTION_STATUS: string[] = [
		"cloudformation:DescribeStackDriftDetectionStatus",
	];
	/** IAM actions required for the DescribeStackEvents API call. */
	static readonly DESCRIBE_STACK_EVENTS: string[] = [
		"cloudformation:DescribeStackEvents",
	];
	/** IAM actions required for the DescribeStackInstance API call. */
	static readonly DESCRIBE_STACK_INSTANCE: string[] = [
		"cloudformation:DescribeStackInstance",
	];
	/** IAM actions required for the DescribeStackRefactor API call. */
	static readonly DESCRIBE_STACK_REFACTOR: string[] = [
		"cloudformation:DescribeStackRefactor",
	];
	/** IAM actions required for the DescribeStackResource API call. */
	static readonly DESCRIBE_STACK_RESOURCE: string[] = [
		"cloudformation:DescribeStackResource",
	];
	/** IAM actions required for the DescribeStackResourceDrifts API call. */
	static readonly DESCRIBE_STACK_RESOURCE_DRIFTS: string[] = [
		"cloudformation:DescribeStackResourceDrifts",
	];
	/** IAM actions required for the DescribeStackResources API call. */
	static readonly DESCRIBE_STACK_RESOURCES: string[] = [
		"cloudformation:DescribeStackResources",
	];
	/** IAM actions required for the DescribeStackSet API call. */
	static readonly DESCRIBE_STACK_SET: string[] = [
		"cloudformation:DescribeStackSet",
	];
	/** IAM actions required for the DescribeStackSetOperation API call. */
	static readonly DESCRIBE_STACK_SET_OPERATION: string[] = [
		"cloudformation:DescribeStackSetOperation",
	];
	/** IAM actions required for the DescribeStacks API call. */
	static readonly DESCRIBE_STACKS: string[] = [
		"cloudformation:DescribeStacks",
		"cloudformation:ListStacks",
	];
	/** IAM actions required for the DescribeType API call. */
	static readonly DESCRIBE_TYPE: string[] = ["cloudformation:DescribeType"];
	/** IAM actions required for the DescribeTypeRegistration API call. */
	static readonly DESCRIBE_TYPE_REGISTRATION: string[] = [
		"cloudformation:DescribeTypeRegistration",
	];
	/** IAM actions required for the DetectStackDrift API call. */
	static readonly DETECT_STACK_DRIFT: string[] = [
		"cloudformation:DetectStackDrift",
		"cloudformation:DetectStackResourceDrift",
	];
	/** IAM actions required for the DetectStackResourceDrift API call. */
	static readonly DETECT_STACK_RESOURCE_DRIFT: string[] = [
		"cloudformation:DetectStackResourceDrift",
	];
	/** IAM actions required for the DetectStackSetDrift API call. */
	static readonly DETECT_STACK_SET_DRIFT: string[] = [
		"cloudformation:DetectStackSetDrift",
	];
	/** IAM actions required for the EstimateTemplateCost API call. */
	static readonly ESTIMATE_TEMPLATE_COST: string[] = [
		"cloudformation:EstimateTemplateCost",
	];
	/** IAM actions required for the ExecuteChangeSet API call. */
	static readonly EXECUTE_CHANGE_SET: string[] = [
		"cloudformation:ExecuteChangeSet",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
	];
	/** IAM actions required for the ExecuteStackRefactor API call. */
	static readonly EXECUTE_STACK_REFACTOR: string[] = [
		"cloudformation:ExecuteStackRefactor",
	];
	/** IAM actions required for the GetGeneratedTemplate API call. */
	static readonly GET_GENERATED_TEMPLATE: string[] = [
		"cloudformation:GetGeneratedTemplate",
	];
	/** IAM actions required for the GetHookResult API call. */
	static readonly GET_HOOK_RESULT: string[] = ["cloudformation:GetHookResult"];
	/** IAM actions required for the GetResource API call. */
	static readonly GET_RESOURCE: string[] = [
		"cloudformation:GetResource",
		"iam:PassRole",
	];
	/** IAM actions required for the GetResourceRequestStatus API call. */
	static readonly GET_RESOURCE_REQUEST_STATUS: string[] = [
		"cloudformation:GetResourceRequestStatus",
	];
	/** IAM actions required for the GetStackPolicy API call. */
	static readonly GET_STACK_POLICY: string[] = [
		"cloudformation:GetStackPolicy",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly GET_TEMPLATE: string[] = ["cloudformation:GetTemplate"];
	/** IAM actions required for the GetTemplateSummary API call. */
	static readonly GET_TEMPLATE_SUMMARY: string[] = [
		"cloudformation:GetTemplateSummary",
	];
	/** IAM actions required for the ImportStacksToStackSet API call. */
	static readonly IMPORT_STACKS_TO_STACK_SET: string[] = [
		"cloudformation:ImportStacksToStackSet",
	];
	/** IAM actions required for the ListChangeSets API call. */
	static readonly LIST_CHANGE_SETS: string[] = [
		"cloudformation:ListChangeSets",
	];
	/** IAM actions required for the ListExports API call. */
	static readonly LIST_EXPORTS: string[] = ["cloudformation:ListExports"];
	/** IAM actions required for the ListGeneratedTemplates API call. */
	static readonly LIST_GENERATED_TEMPLATES: string[] = [
		"cloudformation:ListGeneratedTemplates",
	];
	/** IAM actions required for the ListHookResults API call. */
	static readonly LIST_HOOK_RESULTS: string[] = [
		"cloudformation:ListAllHookResults",
		"cloudformation:ListHookResults",
	];
	/** IAM actions required for the ListImports API call. */
	static readonly LIST_IMPORTS: string[] = ["cloudformation:ListImports"];
	/** IAM actions required for the ListResourceRequests API call. */
	static readonly LIST_RESOURCE_REQUESTS: string[] = [
		"cloudformation:ListResourceRequests",
	];
	/** IAM actions required for the ListResourceScanRelatedResources API call. */
	static readonly LIST_RESOURCE_SCAN_RELATED_RESOURCES: string[] = [
		"cloudformation:ListResourceScanRelatedResources",
	];
	/** IAM actions required for the ListResourceScanResources API call. */
	static readonly LIST_RESOURCE_SCAN_RESOURCES: string[] = [
		"cloudformation:ListResourceScanResources",
	];
	/** IAM actions required for the ListResourceScans API call. */
	static readonly LIST_RESOURCE_SCANS: string[] = [
		"cloudformation:ListResourceScans",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly LIST_RESOURCES: string[] = [
		"cloudformation:ListResources",
		"iam:PassRole",
	];
	/** IAM actions required for the ListStackInstanceResourceDrifts API call. */
	static readonly LIST_STACK_INSTANCE_RESOURCE_DRIFTS: string[] = [
		"cloudformation:ListStackInstanceResourceDrifts",
	];
	/** IAM actions required for the ListStackInstances API call. */
	static readonly LIST_STACK_INSTANCES: string[] = [
		"cloudformation:ListStackInstances",
	];
	/** IAM actions required for the ListStackRefactorActions API call. */
	static readonly LIST_STACK_REFACTOR_ACTIONS: string[] = [
		"cloudformation:ListStackRefactorActions",
	];
	/** IAM actions required for the ListStackRefactors API call. */
	static readonly LIST_STACK_REFACTORS: string[] = [
		"cloudformation:ListStackRefactors",
	];
	/** IAM actions required for the ListStackResources API call. */
	static readonly LIST_STACK_RESOURCES: string[] = [
		"cloudformation:ListStackResources",
	];
	/** IAM actions required for the ListStackSetAutoDeploymentTargets API call. */
	static readonly LIST_STACK_SET_AUTO_DEPLOYMENT_TARGETS: string[] = [
		"cloudformation:ListStackSetAutoDeploymentTargets",
	];
	/** IAM actions required for the ListStackSetOperationResults API call. */
	static readonly LIST_STACK_SET_OPERATION_RESULTS: string[] = [
		"cloudformation:ListStackSetOperationResults",
	];
	/** IAM actions required for the ListStackSetOperations API call. */
	static readonly LIST_STACK_SET_OPERATIONS: string[] = [
		"cloudformation:ListStackSetOperations",
	];
	/** IAM actions required for the ListStackSets API call. */
	static readonly LIST_STACK_SETS: string[] = ["cloudformation:ListStackSets"];
	/** IAM actions required for the ListStacks API call. */
	static readonly LIST_STACKS: string[] = ["cloudformation:ListStacks"];
	/** IAM actions required for the ListTypeRegistrations API call. */
	static readonly LIST_TYPE_REGISTRATIONS: string[] = [
		"cloudformation:ListTypeRegistrations",
	];
	/** IAM actions required for the ListTypeVersions API call. */
	static readonly LIST_TYPE_VERSIONS: string[] = [
		"cloudformation:ListTypeVersions",
	];
	/** IAM actions required for the ListTypes API call. */
	static readonly LIST_TYPES: string[] = ["cloudformation:ListTypes"];
	/** IAM actions required for the PublishType API call. */
	static readonly PUBLISH_TYPE: string[] = ["cloudformation:PublishType"];
	/** IAM actions required for the RecordHandlerProgress API call. */
	static readonly RECORD_HANDLER_PROGRESS: string[] = [
		"cloudformation:RecordHandlerProgress",
	];
	/** IAM actions required for the RegisterPublisher API call. */
	static readonly REGISTER_PUBLISHER: string[] = [
		"cloudformation:RegisterPublisher",
	];
	/** IAM actions required for the RegisterType API call. */
	static readonly REGISTER_TYPE: string[] = [
		"iam:PassRole",
		"cloudformation:RegisterType",
	];
	/** IAM actions required for the RollbackStack API call. */
	static readonly ROLLBACK_STACK: string[] = [
		"iam:PassRole",
		"cloudformation:RollbackStack",
	];
	/** IAM actions required for the SetStackPolicy API call. */
	static readonly SET_STACK_POLICY: string[] = [
		"cloudformation:SetStackPolicy",
	];
	/** IAM actions required for the SetTypeConfiguration API call. */
	static readonly SET_TYPE_CONFIGURATION: string[] = [
		"cloudformation:SetTypeConfiguration",
	];
	/** IAM actions required for the SetTypeDefaultVersion API call. */
	static readonly SET_TYPE_DEFAULT_VERSION: string[] = [
		"cloudformation:SetTypeDefaultVersion",
	];
	/** IAM actions required for the SignalResource API call. */
	static readonly SIGNAL_RESOURCE: string[] = ["cloudformation:SignalResource"];
	/** IAM actions required for the StartResourceScan API call. */
	static readonly START_RESOURCE_SCAN: string[] = [
		"cloudformation:StartResourceScan",
	];
	/** IAM actions required for the StopStackSetOperation API call. */
	static readonly STOP_STACK_SET_OPERATION: string[] = [
		"cloudformation:StopStackSetOperation",
	];
	/** IAM actions required for the TestType API call. */
	static readonly TEST_TYPE: string[] = ["cloudformation:TestType"];
	/** IAM actions required for the UpdateGeneratedTemplate API call. */
	static readonly UPDATE_GENERATED_TEMPLATE: string[] = [
		"cloudformation:UpdateGeneratedTemplate",
	];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UPDATE_RESOURCE: string[] = [
		"iam:PassRole",
		"cloudformation:UpdateResource",
	];
	/** IAM actions required for the UpdateStack API call. */
	static readonly UPDATE_STACK: string[] = [
		"iam:PassRole",
		"cloudformation:SetStackPolicy",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
		"cloudformation:UpdateStack",
	];
	/** IAM actions required for the UpdateStackInstances API call. */
	static readonly UPDATE_STACK_INSTANCES: string[] = [
		"cloudformation:UpdateStackInstances",
	];
	/** IAM actions required for the UpdateStackSet API call. */
	static readonly UPDATE_STACK_SET: string[] = [
		"iam:PassRole",
		"cloudformation:TagResource",
		"cloudformation:UntagResource",
		"cloudformation:UpdateStackSet",
	];
	/** IAM actions required for the UpdateTerminationProtection API call. */
	static readonly UPDATE_TERMINATION_PROTECTION: string[] = [
		"cloudformation:UpdateTerminationProtection",
	];
	/** IAM actions required for the ValidateTemplate API call. */
	static readonly VALIDATE_TEMPLATE: string[] = [
		"cloudformation:ValidateTemplate",
	];
}

/**
 * Condition key constants and builders for cloudformation.
 */
export class CloudFormationConditions {
	/** Condition keys applicable to the ContinueUpdateRollback action. */
	static readonly CONTINUE_UPDATE_ROLLBACK_CONDITION_KEYS: string[] = [
		"cloudformation:RoleArn",
	];
	/** Condition keys applicable to the CreateChangeSet action. */
	static readonly CREATE_CHANGE_SET_CONDITION_KEYS: string[] = [
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
	static readonly CREATE_STACK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:ResourceTypes",
		"cloudformation:RoleArn",
		"cloudformation:StackPolicyUrl",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the CreateStackInstances action. */
	static readonly CREATE_STACK_INSTANCES_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"cloudformation:TargetRegion",
	];
	/** Condition keys applicable to the CreateStackSet action. */
	static readonly CREATE_STACK_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:RoleArn",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the DeleteChangeSet action. */
	static readonly DELETE_CHANGE_SET_CONDITION_KEYS: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the DeleteStack action. */
	static readonly DELETE_STACK_CONDITION_KEYS: string[] = [
		"cloudformation:RoleArn",
	];
	/** Condition keys applicable to the DeleteStackInstances action. */
	static readonly DELETE_STACK_INSTANCES_CONDITION_KEYS: string[] = [
		"cloudformation:TargetRegion",
	];
	/** Condition keys applicable to the DescribeChangeSet action. */
	static readonly DESCRIBE_CHANGE_SET_CONDITION_KEYS: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the DescribeChangeSetHooks action. */
	static readonly DESCRIBE_CHANGE_SET_HOOKS_CONDITION_KEYS: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the EstimateTemplateCost action. */
	static readonly ESTIMATE_TEMPLATE_COST_CONDITION_KEYS: string[] = [
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the ExecuteChangeSet action. */
	static readonly EXECUTE_CHANGE_SET_CONDITION_KEYS: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the GetHookResult action. */
	static readonly GET_HOOK_RESULT_CONDITION_KEYS: string[] = [
		"cloudformation:TypeArn",
	];
	/** Condition keys applicable to the GetTemplateSummary action. */
	static readonly GET_TEMPLATE_SUMMARY_CONDITION_KEYS: string[] = [
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the ListAllHookResults action. */
	static readonly LIST_ALL_HOOK_RESULTS_CONDITION_KEYS: string[] = [
		"cloudformation:TypeArn",
	];
	/** Condition keys applicable to the ListHookResults action. */
	static readonly LIST_HOOK_RESULTS_CONDITION_KEYS: string[] = [
		"cloudformation:ChangeSetName",
	];
	/** Condition keys applicable to the RollbackStack action. */
	static readonly ROLLBACK_STACK_CONDITION_KEYS: string[] = [
		"cloudformation:RoleArn",
	];
	/** Condition keys applicable to the SetStackPolicy action. */
	static readonly SET_STACK_POLICY_CONDITION_KEYS: string[] = [
		"cloudformation:StackPolicyUrl",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:CreateAction",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"cloudformation:CreateAction",
	];
	/** Condition keys applicable to the UpdateStack action. */
	static readonly UPDATE_STACK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:ResourceTypes",
		"cloudformation:RoleArn",
		"cloudformation:StackPolicyUrl",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the UpdateStackInstances action. */
	static readonly UPDATE_STACK_INSTANCES_CONDITION_KEYS: string[] = [
		"cloudformation:TargetRegion",
	];
	/** Condition keys applicable to the UpdateStackSet action. */
	static readonly UPDATE_STACK_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cloudformation:RoleArn",
		"cloudformation:TargetRegion",
		"cloudformation:TemplateUrl",
	];
	/** Condition keys applicable to the ValidateTemplate action. */
	static readonly VALIDATE_TEMPLATE_CONDITION_KEYS: string[] = [
		"cloudformation:TemplateUrl",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
