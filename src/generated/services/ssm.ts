// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssm.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================


/**
 * IAM action constants for the ssm service.
 */
export class SSMActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssm";

	/** [Tagging] ssm:AddTagsToResource */
	static readonly ADD_TAGS_TO_RESOURCE = "ssm:AddTagsToResource";
	/** [Write] ssm:AssociateOpsItemRelatedItem */
	static readonly ASSOCIATE_OPS_ITEM_RELATED_ITEM = "ssm:AssociateOpsItemRelatedItem";
	/** [Write] ssm:CancelCommand */
	static readonly CANCEL_COMMAND = "ssm:CancelCommand";
	/** [Write] ssm:CancelMaintenanceWindowExecution */
	static readonly CANCEL_MAINTENANCE_WINDOW_EXECUTION = "ssm:CancelMaintenanceWindowExecution";
	/** [Write] ssm:CreateActivation */
	static readonly CREATE_ACTIVATION = "ssm:CreateActivation";
	/** [Write] ssm:CreateAssociation */
	static readonly CREATE_ASSOCIATION = "ssm:CreateAssociation";
	/** [Write] ssm:CreateAssociationBatch */
	static readonly CREATE_ASSOCIATION_BATCH = "ssm:CreateAssociationBatch";
	/** [Write] ssm:CreateCloudConnector */
	static readonly CREATE_CLOUD_CONNECTOR = "ssm:CreateCloudConnector";
	/** [Write] ssm:CreateDocument */
	static readonly CREATE_DOCUMENT = "ssm:CreateDocument";
	/** [Write] ssm:CreateMaintenanceWindow */
	static readonly CREATE_MAINTENANCE_WINDOW = "ssm:CreateMaintenanceWindow";
	/** [Write] ssm:CreateOpsItem */
	static readonly CREATE_OPS_ITEM = "ssm:CreateOpsItem";
	/** [Write] ssm:CreateOpsMetadata */
	static readonly CREATE_OPS_METADATA = "ssm:CreateOpsMetadata";
	/** [Write] ssm:CreatePatchBaseline */
	static readonly CREATE_PATCH_BASELINE = "ssm:CreatePatchBaseline";
	/** [Write] ssm:CreateResourceDataSync */
	static readonly CREATE_RESOURCE_DATA_SYNC = "ssm:CreateResourceDataSync";
	/** [Write] ssm:DeleteActivation */
	static readonly DELETE_ACTIVATION = "ssm:DeleteActivation";
	/** [Write] ssm:DeleteAssociation */
	static readonly DELETE_ASSOCIATION = "ssm:DeleteAssociation";
	/** [Write] ssm:DeleteCloudConnector */
	static readonly DELETE_CLOUD_CONNECTOR = "ssm:DeleteCloudConnector";
	/** [Write] ssm:DeleteDocument */
	static readonly DELETE_DOCUMENT = "ssm:DeleteDocument";
	/** [Write] ssm:DeleteInventory */
	static readonly DELETE_INVENTORY = "ssm:DeleteInventory";
	/** [Write] ssm:DeleteMaintenanceWindow */
	static readonly DELETE_MAINTENANCE_WINDOW = "ssm:DeleteMaintenanceWindow";
	/** [Write] ssm:DeleteOpsItem */
	static readonly DELETE_OPS_ITEM = "ssm:DeleteOpsItem";
	/** [Write] ssm:DeleteOpsMetadata */
	static readonly DELETE_OPS_METADATA = "ssm:DeleteOpsMetadata";
	/** [Write] ssm:DeleteParameter */
	static readonly DELETE_PARAMETER = "ssm:DeleteParameter";
	/** [Write] ssm:DeleteParameters */
	static readonly DELETE_PARAMETERS = "ssm:DeleteParameters";
	/** [Write] ssm:DeletePatchBaseline */
	static readonly DELETE_PATCH_BASELINE = "ssm:DeletePatchBaseline";
	/** [Write] ssm:DeleteResourceDataSync */
	static readonly DELETE_RESOURCE_DATA_SYNC = "ssm:DeleteResourceDataSync";
	/** [PermissionManagement] ssm:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "ssm:DeleteResourcePolicy";
	/** [Write] ssm:DeregisterManagedInstance */
	static readonly DEREGISTER_MANAGED_INSTANCE = "ssm:DeregisterManagedInstance";
	/** [Write] ssm:DeregisterPatchBaselineForPatchGroup */
	static readonly DEREGISTER_PATCH_BASELINE_FOR_PATCH_GROUP = "ssm:DeregisterPatchBaselineForPatchGroup";
	/** [Write] ssm:DeregisterTargetFromMaintenanceWindow */
	static readonly DEREGISTER_TARGET_FROM_MAINTENANCE_WINDOW = "ssm:DeregisterTargetFromMaintenanceWindow";
	/** [Write] ssm:DeregisterTaskFromMaintenanceWindow */
	static readonly DEREGISTER_TASK_FROM_MAINTENANCE_WINDOW = "ssm:DeregisterTaskFromMaintenanceWindow";
	/** [Read] ssm:DescribeActivations */
	static readonly DESCRIBE_ACTIVATIONS = "ssm:DescribeActivations";
	/** [Read] ssm:DescribeAssociation */
	static readonly DESCRIBE_ASSOCIATION = "ssm:DescribeAssociation";
	/** [Read] ssm:DescribeAssociationExecutionTargets */
	static readonly DESCRIBE_ASSOCIATION_EXECUTION_TARGETS = "ssm:DescribeAssociationExecutionTargets";
	/** [Read] ssm:DescribeAssociationExecutions */
	static readonly DESCRIBE_ASSOCIATION_EXECUTIONS = "ssm:DescribeAssociationExecutions";
	/** [Read] ssm:DescribeAutomationExecutions */
	static readonly DESCRIBE_AUTOMATION_EXECUTIONS = "ssm:DescribeAutomationExecutions";
	/** [Read] ssm:DescribeAutomationStepExecutions */
	static readonly DESCRIBE_AUTOMATION_STEP_EXECUTIONS = "ssm:DescribeAutomationStepExecutions";
	/** [Read] ssm:DescribeAvailablePatches */
	static readonly DESCRIBE_AVAILABLE_PATCHES = "ssm:DescribeAvailablePatches";
	/** [Read] ssm:DescribeDocument */
	static readonly DESCRIBE_DOCUMENT = "ssm:DescribeDocument";
	/** [Read] ssm:DescribeDocumentParameters */
	static readonly DESCRIBE_DOCUMENT_PARAMETERS = "ssm:DescribeDocumentParameters";
	/** [Read] ssm:DescribeDocumentPermission */
	static readonly DESCRIBE_DOCUMENT_PERMISSION = "ssm:DescribeDocumentPermission";
	/** [Read] ssm:DescribeEffectiveInstanceAssociations */
	static readonly DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS = "ssm:DescribeEffectiveInstanceAssociations";
	/** [Read] ssm:DescribeEffectivePatchesForPatchBaseline */
	static readonly DESCRIBE_EFFECTIVE_PATCHES_FOR_PATCH_BASELINE = "ssm:DescribeEffectivePatchesForPatchBaseline";
	/** [Read] ssm:DescribeInstanceAssociationsStatus */
	static readonly DESCRIBE_INSTANCE_ASSOCIATIONS_STATUS = "ssm:DescribeInstanceAssociationsStatus";
	/** [Read] ssm:DescribeInstanceInformation */
	static readonly DESCRIBE_INSTANCE_INFORMATION = "ssm:DescribeInstanceInformation";
	/** [Read] ssm:DescribeInstancePatchStates */
	static readonly DESCRIBE_INSTANCE_PATCH_STATES = "ssm:DescribeInstancePatchStates";
	/** [Read] ssm:DescribeInstancePatchStatesForPatchGroup */
	static readonly DESCRIBE_INSTANCE_PATCH_STATES_FOR_PATCH_GROUP = "ssm:DescribeInstancePatchStatesForPatchGroup";
	/** [Read] ssm:DescribeInstancePatches */
	static readonly DESCRIBE_INSTANCE_PATCHES = "ssm:DescribeInstancePatches";
	/** [Read] ssm:DescribeInstanceProperties */
	static readonly DESCRIBE_INSTANCE_PROPERTIES = "ssm:DescribeInstanceProperties";
	/** [Read] ssm:DescribeInventoryDeletions */
	static readonly DESCRIBE_INVENTORY_DELETIONS = "ssm:DescribeInventoryDeletions";
	/** [List] ssm:DescribeMaintenanceWindowExecutionTaskInvocations */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATIONS = "ssm:DescribeMaintenanceWindowExecutionTaskInvocations";
	/** [List] ssm:DescribeMaintenanceWindowExecutionTasks */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASKS = "ssm:DescribeMaintenanceWindowExecutionTasks";
	/** [List] ssm:DescribeMaintenanceWindowExecutions */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_EXECUTIONS = "ssm:DescribeMaintenanceWindowExecutions";
	/** [List] ssm:DescribeMaintenanceWindowSchedule */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_SCHEDULE = "ssm:DescribeMaintenanceWindowSchedule";
	/** [List] ssm:DescribeMaintenanceWindowTargets */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_TARGETS = "ssm:DescribeMaintenanceWindowTargets";
	/** [List] ssm:DescribeMaintenanceWindowTasks */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_TASKS = "ssm:DescribeMaintenanceWindowTasks";
	/** [List] ssm:DescribeMaintenanceWindows */
	static readonly DESCRIBE_MAINTENANCE_WINDOWS = "ssm:DescribeMaintenanceWindows";
	/** [List] ssm:DescribeMaintenanceWindowsForTarget */
	static readonly DESCRIBE_MAINTENANCE_WINDOWS_FOR_TARGET = "ssm:DescribeMaintenanceWindowsForTarget";
	/** [Read] ssm:DescribeOpsItems */
	static readonly DESCRIBE_OPS_ITEMS = "ssm:DescribeOpsItems";
	/** [List] ssm:DescribeParameters */
	static readonly DESCRIBE_PARAMETERS = "ssm:DescribeParameters";
	/** [List] ssm:DescribePatchBaselines */
	static readonly DESCRIBE_PATCH_BASELINES = "ssm:DescribePatchBaselines";
	/** [List] ssm:DescribePatchGroupState */
	static readonly DESCRIBE_PATCH_GROUP_STATE = "ssm:DescribePatchGroupState";
	/** [List] ssm:DescribePatchGroups */
	static readonly DESCRIBE_PATCH_GROUPS = "ssm:DescribePatchGroups";
	/** [List] ssm:DescribePatchProperties */
	static readonly DESCRIBE_PATCH_PROPERTIES = "ssm:DescribePatchProperties";
	/** [List] ssm:DescribeSessions */
	static readonly DESCRIBE_SESSIONS = "ssm:DescribeSessions";
	/** [Write] ssm:DisassociateOpsItemRelatedItem */
	static readonly DISASSOCIATE_OPS_ITEM_RELATED_ITEM = "ssm:DisassociateOpsItemRelatedItem";
	/** [Read] ssm:ExecuteAPI */
	static readonly EXECUTE_API = "ssm:ExecuteAPI";
	/** [Read] ssm:GetAccessToken */
	static readonly GET_ACCESS_TOKEN = "ssm:GetAccessToken";
	/** [Read] ssm:GetAutomationExecution */
	static readonly GET_AUTOMATION_EXECUTION = "ssm:GetAutomationExecution";
	/** [Read] ssm:GetCalendar */
	static readonly GET_CALENDAR = "ssm:GetCalendar";
	/** [Read] ssm:GetCalendarState */
	static readonly GET_CALENDAR_STATE = "ssm:GetCalendarState";
	/** [Read] ssm:GetCloudConnector */
	static readonly GET_CLOUD_CONNECTOR = "ssm:GetCloudConnector";
	/** [Read] ssm:GetCommandInvocation */
	static readonly GET_COMMAND_INVOCATION = "ssm:GetCommandInvocation";
	/** [Read] ssm:GetConnectionStatus */
	static readonly GET_CONNECTION_STATUS = "ssm:GetConnectionStatus";
	/** [Read] ssm:GetDefaultPatchBaseline */
	static readonly GET_DEFAULT_PATCH_BASELINE = "ssm:GetDefaultPatchBaseline";
	/** [Read] ssm:GetDeployablePatchSnapshotForInstance */
	static readonly GET_DEPLOYABLE_PATCH_SNAPSHOT_FOR_INSTANCE = "ssm:GetDeployablePatchSnapshotForInstance";
	/** [Read] ssm:GetDocument */
	static readonly GET_DOCUMENT = "ssm:GetDocument";
	/** [Read] ssm:GetExecutionPreview */
	static readonly GET_EXECUTION_PREVIEW = "ssm:GetExecutionPreview";
	/** [Read] ssm:GetInventory */
	static readonly GET_INVENTORY = "ssm:GetInventory";
	/** [Read] ssm:GetInventorySchema */
	static readonly GET_INVENTORY_SCHEMA = "ssm:GetInventorySchema";
	/** [Read] ssm:GetMaintenanceWindow */
	static readonly GET_MAINTENANCE_WINDOW = "ssm:GetMaintenanceWindow";
	/** [Read] ssm:GetMaintenanceWindowExecution */
	static readonly GET_MAINTENANCE_WINDOW_EXECUTION = "ssm:GetMaintenanceWindowExecution";
	/** [Read] ssm:GetMaintenanceWindowExecutionTask */
	static readonly GET_MAINTENANCE_WINDOW_EXECUTION_TASK = "ssm:GetMaintenanceWindowExecutionTask";
	/** [Read] ssm:GetMaintenanceWindowExecutionTaskInvocation */
	static readonly GET_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATION = "ssm:GetMaintenanceWindowExecutionTaskInvocation";
	/** [Read] ssm:GetMaintenanceWindowTask */
	static readonly GET_MAINTENANCE_WINDOW_TASK = "ssm:GetMaintenanceWindowTask";
	/** [Read] ssm:GetManifest */
	static readonly GET_MANIFEST = "ssm:GetManifest";
	/** [Read] ssm:GetOpsItem */
	static readonly GET_OPS_ITEM = "ssm:GetOpsItem";
	/** [Read] ssm:GetOpsMetadata */
	static readonly GET_OPS_METADATA = "ssm:GetOpsMetadata";
	/** [Read] ssm:GetOpsSummary */
	static readonly GET_OPS_SUMMARY = "ssm:GetOpsSummary";
	/** [Read] ssm:GetParameter */
	static readonly GET_PARAMETER = "ssm:GetParameter";
	/** [Read] ssm:GetParameterHistory */
	static readonly GET_PARAMETER_HISTORY = "ssm:GetParameterHistory";
	/** [Read] ssm:GetParameters */
	static readonly GET_PARAMETERS = "ssm:GetParameters";
	/** [Read] ssm:GetParametersByPath */
	static readonly GET_PARAMETERS_BY_PATH = "ssm:GetParametersByPath";
	/** [Read] ssm:GetPatchBaseline */
	static readonly GET_PATCH_BASELINE = "ssm:GetPatchBaseline";
	/** [Read] ssm:GetPatchBaselineForPatchGroup */
	static readonly GET_PATCH_BASELINE_FOR_PATCH_GROUP = "ssm:GetPatchBaselineForPatchGroup";
	/** [List] ssm:GetResourcePolicies */
	static readonly GET_RESOURCE_POLICIES = "ssm:GetResourcePolicies";
	/** [Read] ssm:GetServiceSetting */
	static readonly GET_SERVICE_SETTING = "ssm:GetServiceSetting";
	/** [Write] ssm:LabelParameterVersion */
	static readonly LABEL_PARAMETER_VERSION = "ssm:LabelParameterVersion";
	/** [List] ssm:ListAssociationVersions */
	static readonly LIST_ASSOCIATION_VERSIONS = "ssm:ListAssociationVersions";
	/** [List] ssm:ListAssociations */
	static readonly LIST_ASSOCIATIONS = "ssm:ListAssociations";
	/** [List] ssm:ListCloudConnectors */
	static readonly LIST_CLOUD_CONNECTORS = "ssm:ListCloudConnectors";
	/** [List] ssm:ListCommandInvocations */
	static readonly LIST_COMMAND_INVOCATIONS = "ssm:ListCommandInvocations";
	/** [List] ssm:ListCommands */
	static readonly LIST_COMMANDS = "ssm:ListCommands";
	/** [List] ssm:ListComplianceItems */
	static readonly LIST_COMPLIANCE_ITEMS = "ssm:ListComplianceItems";
	/** [List] ssm:ListComplianceSummaries */
	static readonly LIST_COMPLIANCE_SUMMARIES = "ssm:ListComplianceSummaries";
	/** [List] ssm:ListDocumentMetadataHistory */
	static readonly LIST_DOCUMENT_METADATA_HISTORY = "ssm:ListDocumentMetadataHistory";
	/** [List] ssm:ListDocumentVersions */
	static readonly LIST_DOCUMENT_VERSIONS = "ssm:ListDocumentVersions";
	/** [List] ssm:ListDocuments */
	static readonly LIST_DOCUMENTS = "ssm:ListDocuments";
	/** [List] ssm:ListInstanceAssociations */
	static readonly LIST_INSTANCE_ASSOCIATIONS = "ssm:ListInstanceAssociations";
	/** [List] ssm:ListInventoryEntries */
	static readonly LIST_INVENTORY_ENTRIES = "ssm:ListInventoryEntries";
	/** [List] ssm:ListNodes */
	static readonly LIST_NODES = "ssm:ListNodes";
	/** [List] ssm:ListNodesSummary */
	static readonly LIST_NODES_SUMMARY = "ssm:ListNodesSummary";
	/** [List] ssm:ListOpsItemEvents */
	static readonly LIST_OPS_ITEM_EVENTS = "ssm:ListOpsItemEvents";
	/** [List] ssm:ListOpsItemRelatedItems */
	static readonly LIST_OPS_ITEM_RELATED_ITEMS = "ssm:ListOpsItemRelatedItems";
	/** [List] ssm:ListOpsMetadata */
	static readonly LIST_OPS_METADATA = "ssm:ListOpsMetadata";
	/** [List] ssm:ListResourceComplianceSummaries */
	static readonly LIST_RESOURCE_COMPLIANCE_SUMMARIES = "ssm:ListResourceComplianceSummaries";
	/** [List] ssm:ListResourceDataSync */
	static readonly LIST_RESOURCE_DATA_SYNC = "ssm:ListResourceDataSync";
	/** [List] ssm:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ssm:ListTagsForResource";
	/** [PermissionManagement] ssm:ModifyDocumentPermission */
	static readonly MODIFY_DOCUMENT_PERMISSION = "ssm:ModifyDocumentPermission";
	/** [Write] ssm:PutCalendar */
	static readonly PUT_CALENDAR = "ssm:PutCalendar";
	/** [Write] ssm:PutComplianceItems */
	static readonly PUT_COMPLIANCE_ITEMS = "ssm:PutComplianceItems";
	/** [Read] ssm:PutConfigurePackageResult */
	static readonly PUT_CONFIGURE_PACKAGE_RESULT = "ssm:PutConfigurePackageResult";
	/** [Write] ssm:PutInventory */
	static readonly PUT_INVENTORY = "ssm:PutInventory";
	/** [Write] ssm:PutParameter */
	static readonly PUT_PARAMETER = "ssm:PutParameter";
	/** [PermissionManagement] ssm:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "ssm:PutResourcePolicy";
	/** [Write] ssm:RegisterDefaultPatchBaseline */
	static readonly REGISTER_DEFAULT_PATCH_BASELINE = "ssm:RegisterDefaultPatchBaseline";
	/** [Write] ssm:RegisterManagedInstance */
	static readonly REGISTER_MANAGED_INSTANCE = "ssm:RegisterManagedInstance";
	/** [Write] ssm:RegisterPatchBaselineForPatchGroup */
	static readonly REGISTER_PATCH_BASELINE_FOR_PATCH_GROUP = "ssm:RegisterPatchBaselineForPatchGroup";
	/** [Write] ssm:RegisterTargetWithMaintenanceWindow */
	static readonly REGISTER_TARGET_WITH_MAINTENANCE_WINDOW = "ssm:RegisterTargetWithMaintenanceWindow";
	/** [Write] ssm:RegisterTaskWithMaintenanceWindow */
	static readonly REGISTER_TASK_WITH_MAINTENANCE_WINDOW = "ssm:RegisterTaskWithMaintenanceWindow";
	/** [Tagging] ssm:RemoveTagsFromResource */
	static readonly REMOVE_TAGS_FROM_RESOURCE = "ssm:RemoveTagsFromResource";
	/** [Write] ssm:ResetServiceSetting */
	static readonly RESET_SERVICE_SETTING = "ssm:ResetServiceSetting";
	/** [Write] ssm:ResumeSession */
	static readonly RESUME_SESSION = "ssm:ResumeSession";
	/** [Write] ssm:SendAutomationSignal */
	static readonly SEND_AUTOMATION_SIGNAL = "ssm:SendAutomationSignal";
	/** [Write] ssm:SendCommand */
	static readonly SEND_COMMAND = "ssm:SendCommand";
	/** [Write] ssm:StartAccessRequest */
	static readonly START_ACCESS_REQUEST = "ssm:StartAccessRequest";
	/** [Write] ssm:StartAssociationsOnce */
	static readonly START_ASSOCIATIONS_ONCE = "ssm:StartAssociationsOnce";
	/** [Write] ssm:StartAutomationExecution */
	static readonly START_AUTOMATION_EXECUTION = "ssm:StartAutomationExecution";
	/** [Write] ssm:StartChangeRequestExecution */
	static readonly START_CHANGE_REQUEST_EXECUTION = "ssm:StartChangeRequestExecution";
	/** [Read] ssm:StartExecutionPreview */
	static readonly START_EXECUTION_PREVIEW = "ssm:StartExecutionPreview";
	/** [Write] ssm:StartSession */
	static readonly START_SESSION = "ssm:StartSession";
	/** [Write] ssm:StopAutomationExecution */
	static readonly STOP_AUTOMATION_EXECUTION = "ssm:StopAutomationExecution";
	/** [Write] ssm:TerminateSession */
	static readonly TERMINATE_SESSION = "ssm:TerminateSession";
	/** [Write] ssm:UnlabelParameterVersion */
	static readonly UNLABEL_PARAMETER_VERSION = "ssm:UnlabelParameterVersion";
	/** [Write] ssm:UpdateAssociation */
	static readonly UPDATE_ASSOCIATION = "ssm:UpdateAssociation";
	/** [Write] ssm:UpdateAssociationStatus */
	static readonly UPDATE_ASSOCIATION_STATUS = "ssm:UpdateAssociationStatus";
	/** [Write] ssm:UpdateCloudConnector */
	static readonly UPDATE_CLOUD_CONNECTOR = "ssm:UpdateCloudConnector";
	/** [Write] ssm:UpdateDocument */
	static readonly UPDATE_DOCUMENT = "ssm:UpdateDocument";
	/** [Write] ssm:UpdateDocumentDefaultVersion */
	static readonly UPDATE_DOCUMENT_DEFAULT_VERSION = "ssm:UpdateDocumentDefaultVersion";
	/** [Write] ssm:UpdateDocumentMetadata */
	static readonly UPDATE_DOCUMENT_METADATA = "ssm:UpdateDocumentMetadata";
	/** [Write] ssm:UpdateInstanceAssociationStatus */
	static readonly UPDATE_INSTANCE_ASSOCIATION_STATUS = "ssm:UpdateInstanceAssociationStatus";
	/** [Write] ssm:UpdateInstanceInformation */
	static readonly UPDATE_INSTANCE_INFORMATION = "ssm:UpdateInstanceInformation";
	/** [Write] ssm:UpdateMaintenanceWindow */
	static readonly UPDATE_MAINTENANCE_WINDOW = "ssm:UpdateMaintenanceWindow";
	/** [Write] ssm:UpdateMaintenanceWindowTarget */
	static readonly UPDATE_MAINTENANCE_WINDOW_TARGET = "ssm:UpdateMaintenanceWindowTarget";
	/** [Write] ssm:UpdateMaintenanceWindowTask */
	static readonly UPDATE_MAINTENANCE_WINDOW_TASK = "ssm:UpdateMaintenanceWindowTask";
	/** [Write] ssm:UpdateManagedInstanceRole */
	static readonly UPDATE_MANAGED_INSTANCE_ROLE = "ssm:UpdateManagedInstanceRole";
	/** [Write] ssm:UpdateOpsItem */
	static readonly UPDATE_OPS_ITEM = "ssm:UpdateOpsItem";
	/** [Write] ssm:UpdateOpsMetadata */
	static readonly UPDATE_OPS_METADATA = "ssm:UpdateOpsMetadata";
	/** [Write] ssm:UpdatePatchBaseline */
	static readonly UPDATE_PATCH_BASELINE = "ssm:UpdatePatchBaseline";
	/** [Write] ssm:UpdateResourceDataSync */
	static readonly UPDATE_RESOURCE_DATA_SYNC = "ssm:UpdateResourceDataSync";
	/** [Write] ssm:UpdateServiceSetting */
	static readonly UPDATE_SERVICE_SETTING = "ssm:UpdateServiceSetting";
	/** [Read] ssm:ValidateCloudConnector */
	static readonly VALIDATE_CLOUD_CONNECTOR = "ssm:ValidateCloudConnector";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [SSMActions.DESCRIBE_ACTIVATIONS, SSMActions.DESCRIBE_ASSOCIATION, SSMActions.DESCRIBE_ASSOCIATION_EXECUTION_TARGETS, SSMActions.DESCRIBE_ASSOCIATION_EXECUTIONS, SSMActions.DESCRIBE_AUTOMATION_EXECUTIONS, SSMActions.DESCRIBE_AUTOMATION_STEP_EXECUTIONS, SSMActions.DESCRIBE_AVAILABLE_PATCHES, SSMActions.DESCRIBE_DOCUMENT, SSMActions.DESCRIBE_DOCUMENT_PARAMETERS, SSMActions.DESCRIBE_DOCUMENT_PERMISSION, SSMActions.DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS, SSMActions.DESCRIBE_EFFECTIVE_PATCHES_FOR_PATCH_BASELINE, SSMActions.DESCRIBE_INSTANCE_ASSOCIATIONS_STATUS, SSMActions.DESCRIBE_INSTANCE_INFORMATION, SSMActions.DESCRIBE_INSTANCE_PATCH_STATES, SSMActions.DESCRIBE_INSTANCE_PATCH_STATES_FOR_PATCH_GROUP, SSMActions.DESCRIBE_INSTANCE_PATCHES, SSMActions.DESCRIBE_INSTANCE_PROPERTIES, SSMActions.DESCRIBE_INVENTORY_DELETIONS, SSMActions.DESCRIBE_OPS_ITEMS, SSMActions.EXECUTE_API, SSMActions.GET_ACCESS_TOKEN, SSMActions.GET_AUTOMATION_EXECUTION, SSMActions.GET_CALENDAR, SSMActions.GET_CALENDAR_STATE, SSMActions.GET_CLOUD_CONNECTOR, SSMActions.GET_COMMAND_INVOCATION, SSMActions.GET_CONNECTION_STATUS, SSMActions.GET_DEFAULT_PATCH_BASELINE, SSMActions.GET_DEPLOYABLE_PATCH_SNAPSHOT_FOR_INSTANCE, SSMActions.GET_DOCUMENT, SSMActions.GET_EXECUTION_PREVIEW, SSMActions.GET_INVENTORY, SSMActions.GET_INVENTORY_SCHEMA, SSMActions.GET_MAINTENANCE_WINDOW, SSMActions.GET_MAINTENANCE_WINDOW_EXECUTION, SSMActions.GET_MAINTENANCE_WINDOW_EXECUTION_TASK, SSMActions.GET_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATION, SSMActions.GET_MAINTENANCE_WINDOW_TASK, SSMActions.GET_MANIFEST, SSMActions.GET_OPS_ITEM, SSMActions.GET_OPS_METADATA, SSMActions.GET_OPS_SUMMARY, SSMActions.GET_PARAMETER, SSMActions.GET_PARAMETER_HISTORY, SSMActions.GET_PARAMETERS, SSMActions.GET_PARAMETERS_BY_PATH, SSMActions.GET_PATCH_BASELINE, SSMActions.GET_PATCH_BASELINE_FOR_PATCH_GROUP, SSMActions.GET_SERVICE_SETTING, SSMActions.PUT_CONFIGURE_PACKAGE_RESULT, SSMActions.START_EXECUTION_PREVIEW, SSMActions.VALIDATE_CLOUD_CONNECTOR];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [SSMActions.ASSOCIATE_OPS_ITEM_RELATED_ITEM, SSMActions.CANCEL_COMMAND, SSMActions.CANCEL_MAINTENANCE_WINDOW_EXECUTION, SSMActions.CREATE_ACTIVATION, SSMActions.CREATE_ASSOCIATION, SSMActions.CREATE_ASSOCIATION_BATCH, SSMActions.CREATE_CLOUD_CONNECTOR, SSMActions.CREATE_DOCUMENT, SSMActions.CREATE_MAINTENANCE_WINDOW, SSMActions.CREATE_OPS_ITEM, SSMActions.CREATE_OPS_METADATA, SSMActions.CREATE_PATCH_BASELINE, SSMActions.CREATE_RESOURCE_DATA_SYNC, SSMActions.DELETE_ACTIVATION, SSMActions.DELETE_ASSOCIATION, SSMActions.DELETE_CLOUD_CONNECTOR, SSMActions.DELETE_DOCUMENT, SSMActions.DELETE_INVENTORY, SSMActions.DELETE_MAINTENANCE_WINDOW, SSMActions.DELETE_OPS_ITEM, SSMActions.DELETE_OPS_METADATA, SSMActions.DELETE_PARAMETER, SSMActions.DELETE_PARAMETERS, SSMActions.DELETE_PATCH_BASELINE, SSMActions.DELETE_RESOURCE_DATA_SYNC, SSMActions.DEREGISTER_MANAGED_INSTANCE, SSMActions.DEREGISTER_PATCH_BASELINE_FOR_PATCH_GROUP, SSMActions.DEREGISTER_TARGET_FROM_MAINTENANCE_WINDOW, SSMActions.DEREGISTER_TASK_FROM_MAINTENANCE_WINDOW, SSMActions.DISASSOCIATE_OPS_ITEM_RELATED_ITEM, SSMActions.LABEL_PARAMETER_VERSION, SSMActions.PUT_CALENDAR, SSMActions.PUT_COMPLIANCE_ITEMS, SSMActions.PUT_INVENTORY, SSMActions.PUT_PARAMETER, SSMActions.REGISTER_DEFAULT_PATCH_BASELINE, SSMActions.REGISTER_MANAGED_INSTANCE, SSMActions.REGISTER_PATCH_BASELINE_FOR_PATCH_GROUP, SSMActions.REGISTER_TARGET_WITH_MAINTENANCE_WINDOW, SSMActions.REGISTER_TASK_WITH_MAINTENANCE_WINDOW, SSMActions.RESET_SERVICE_SETTING, SSMActions.RESUME_SESSION, SSMActions.SEND_AUTOMATION_SIGNAL, SSMActions.SEND_COMMAND, SSMActions.START_ACCESS_REQUEST, SSMActions.START_ASSOCIATIONS_ONCE, SSMActions.START_AUTOMATION_EXECUTION, SSMActions.START_CHANGE_REQUEST_EXECUTION, SSMActions.START_SESSION, SSMActions.STOP_AUTOMATION_EXECUTION, SSMActions.TERMINATE_SESSION, SSMActions.UNLABEL_PARAMETER_VERSION, SSMActions.UPDATE_ASSOCIATION, SSMActions.UPDATE_ASSOCIATION_STATUS, SSMActions.UPDATE_CLOUD_CONNECTOR, SSMActions.UPDATE_DOCUMENT, SSMActions.UPDATE_DOCUMENT_DEFAULT_VERSION, SSMActions.UPDATE_DOCUMENT_METADATA, SSMActions.UPDATE_INSTANCE_ASSOCIATION_STATUS, SSMActions.UPDATE_INSTANCE_INFORMATION, SSMActions.UPDATE_MAINTENANCE_WINDOW, SSMActions.UPDATE_MAINTENANCE_WINDOW_TARGET, SSMActions.UPDATE_MAINTENANCE_WINDOW_TASK, SSMActions.UPDATE_MANAGED_INSTANCE_ROLE, SSMActions.UPDATE_OPS_ITEM, SSMActions.UPDATE_OPS_METADATA, SSMActions.UPDATE_PATCH_BASELINE, SSMActions.UPDATE_RESOURCE_DATA_SYNC, SSMActions.UPDATE_SERVICE_SETTING];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [SSMActions.DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATIONS, SSMActions.DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASKS, SSMActions.DESCRIBE_MAINTENANCE_WINDOW_EXECUTIONS, SSMActions.DESCRIBE_MAINTENANCE_WINDOW_SCHEDULE, SSMActions.DESCRIBE_MAINTENANCE_WINDOW_TARGETS, SSMActions.DESCRIBE_MAINTENANCE_WINDOW_TASKS, SSMActions.DESCRIBE_MAINTENANCE_WINDOWS, SSMActions.DESCRIBE_MAINTENANCE_WINDOWS_FOR_TARGET, SSMActions.DESCRIBE_PARAMETERS, SSMActions.DESCRIBE_PATCH_BASELINES, SSMActions.DESCRIBE_PATCH_GROUP_STATE, SSMActions.DESCRIBE_PATCH_GROUPS, SSMActions.DESCRIBE_PATCH_PROPERTIES, SSMActions.DESCRIBE_SESSIONS, SSMActions.GET_RESOURCE_POLICIES, SSMActions.LIST_ASSOCIATION_VERSIONS, SSMActions.LIST_ASSOCIATIONS, SSMActions.LIST_CLOUD_CONNECTORS, SSMActions.LIST_COMMAND_INVOCATIONS, SSMActions.LIST_COMMANDS, SSMActions.LIST_COMPLIANCE_ITEMS, SSMActions.LIST_COMPLIANCE_SUMMARIES, SSMActions.LIST_DOCUMENT_METADATA_HISTORY, SSMActions.LIST_DOCUMENT_VERSIONS, SSMActions.LIST_DOCUMENTS, SSMActions.LIST_INSTANCE_ASSOCIATIONS, SSMActions.LIST_INVENTORY_ENTRIES, SSMActions.LIST_NODES, SSMActions.LIST_NODES_SUMMARY, SSMActions.LIST_OPS_ITEM_EVENTS, SSMActions.LIST_OPS_ITEM_RELATED_ITEMS, SSMActions.LIST_OPS_METADATA, SSMActions.LIST_RESOURCE_COMPLIANCE_SUMMARIES, SSMActions.LIST_RESOURCE_DATA_SYNC, SSMActions.LIST_TAGS_FOR_RESOURCE];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [SSMActions.DELETE_RESOURCE_POLICY, SSMActions.MODIFY_DOCUMENT_PERMISSION, SSMActions.PUT_RESOURCE_POLICY];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [SSMActions.ADD_TAGS_TO_RESOURCE, SSMActions.REMOVE_TAGS_FROM_RESOURCE];
}

const AssociationArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):association/(?<associationId>[^:/?]+)$");
const AutomationDefinitionArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):automation-definition/(?<automationDefinitionName>[^:/?]+):(?<versionId>[^:/?]+)$");
const AutomationExecutionArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):automation-execution/(?<automationExecutionId>[^:/?]+)$");
const BucketArnRegex = new RegExp("^arn:(?<partition>[^:]+):s3:::(?<bucketName>[^:/?]+)$");
const CloudConnectorArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):cloud-connector/(?<cloudConnectorId>[^:/?]+)$");
const DocumentArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):document/(?<documentName>[^:/?]+)$");
const IAMRoleArnRegex = new RegExp("^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role/(?<roleName>[^:/?]+)$");
const InstanceArnRegex = new RegExp("^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)$");
const MaintenancewindowArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):maintenancewindow/(?<resourceId>[^:/?]+)$");
const ManagedInstanceArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):managed-instance/(?<instanceId>[^:/?]+)$");
const ManagedInstanceInventoryArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):managed-instance-inventory/(?<instanceId>[^:/?]+)$");
const OpsitemArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):opsitem/(?<resourceId>[^:/?]+)$");
const OpsitemgroupArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):opsitemgroup/default$");
const OpsmetadataArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):opsmetadata/(?<resourceId>[^:/?]+)$");
const ParameterArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):parameter/(?<parameterNameWithoutLeadingSlash>[^:/?]+)$");
const PatchbaselineArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):patchbaseline/(?<patchBaselineIdResourceId>[^:/?]+)$");
const ResourcedatasyncArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):resource-data-sync/(?<syncName>[^:/?]+)$");
const ServicesettingArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):servicesetting/(?<resourceId>[^:/?]+)$");
const SessionArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):session/(?<sessionId>[^:/?]+)$");
const TaskArnRegex = new RegExp("^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task/(?<taskId>[^:/?]+)$");
const WindowtargetArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):windowtarget/(?<windowTargetId>[^:/?]+)$");
const WindowtaskArnRegex = new RegExp("^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):windowtask/(?<windowTaskId>[^:/?]+)$");

/**
 * ARN builders, validators, and parsers for ssm resources.
 */
export class SSMResources {
	/**
	 * Builds an ARN for the association resource.
	 */
	static association(props: {
		/** The AssociationId component of the ARN. */
		readonly associationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:association/${props.associationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the association resource.
	 */
	static isValidAssociationArn(arn: string): boolean {
		return AssociationArnRegex.test(arn);
	}

	/**
	 * Parses a association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssociationArn(arn: string): { partition: string; region: string; account: string; associationId: string } {
		const match = AssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			associationId: match.groups!.associationId,
		};
	}

	/**
	 * Builds an ARN for the automation-definition resource.
	 */
	static automationDefinition(props: {
		/** The AutomationDefinitionName component of the ARN. */
		readonly automationDefinitionName: string;
		/** The VersionId component of the ARN. */
		readonly versionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:automation-definition/${props.automationDefinitionName}:${props.versionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automation-definition resource.
	 */
	static isValidAutomationDefinitionArn(arn: string): boolean {
		return AutomationDefinitionArnRegex.test(arn);
	}

	/**
	 * Parses a automation-definition ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationDefinitionArn(arn: string): { partition: string; region: string; account: string; automationDefinitionName: string; versionId: string } {
		const match = AutomationDefinitionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automation-definition ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automationDefinitionName: match.groups!.automationDefinitionName,
			versionId: match.groups!.versionId,
		};
	}

	/**
	 * Builds an ARN for the automation-execution resource.
	 */
	static automationExecution(props: {
		/** The AutomationExecutionId component of the ARN. */
		readonly automationExecutionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:automation-execution/${props.automationExecutionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the automation-execution resource.
	 */
	static isValidAutomationExecutionArn(arn: string): boolean {
		return AutomationExecutionArnRegex.test(arn);
	}

	/**
	 * Parses a automation-execution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutomationExecutionArn(arn: string): { partition: string; region: string; account: string; automationExecutionId: string } {
		const match = AutomationExecutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid automation-execution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			automationExecutionId: match.groups!.automationExecutionId,
		};
	}

	/**
	 * Builds an ARN for the bucket resource.
	 */
	static bucket(props: {
		/** The BucketName component of the ARN. */
		readonly bucketName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:s3:::${props.bucketName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bucket resource.
	 */
	static isValidBucketArn(arn: string): boolean {
		return BucketArnRegex.test(arn);
	}

	/**
	 * Parses a bucket ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBucketArn(arn: string): { partition: string; region: string; account: string; bucketName: string } {
		const match = BucketArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bucket ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			bucketName: match.groups!.bucketName,
		};
	}

	/**
	 * Builds an ARN for the cloud-connector resource.
	 */
	static cloudConnector(props: {
		/** The CloudConnectorId component of the ARN. */
		readonly cloudConnectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:cloud-connector/${props.cloudConnectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cloud-connector resource.
	 */
	static isValidCloudConnectorArn(arn: string): boolean {
		return CloudConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a cloud-connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCloudConnectorArn(arn: string): { partition: string; region: string; account: string; cloudConnectorId: string } {
		const match = CloudConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cloud-connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudConnectorId: match.groups!.cloudConnectorId,
		};
	}

	/**
	 * Builds an ARN for the document resource.
	 */
	static document(props: {
		/** The DocumentName component of the ARN. */
		readonly documentName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:document/${props.documentName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the document resource.
	 */
	static isValidDocumentArn(arn: string): boolean {
		return DocumentArnRegex.test(arn);
	}

	/**
	 * Parses a document ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDocumentArn(arn: string): { partition: string; region: string; account: string; documentName: string } {
		const match = DocumentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid document ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			documentName: match.groups!.documentName,
		};
	}

	/**
	 * Builds an ARN for the iam-role resource.
	 */
	static iamRole(props: {
		/** The RoleName component of the ARN. */
		readonly roleName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:role/${props.roleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the iam-role resource.
	 */
	static isValidIAMRoleArn(arn: string): boolean {
		return IAMRoleArnRegex.test(arn);
	}

	/**
	 * Parses a iam-role ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIAMRoleArn(arn: string): { partition: string; account: string; roleName: string } {
		const match = IAMRoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid iam-role ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			roleName: match.groups!.roleName,
		};
	}

	/**
	 * Builds an ARN for the instance resource.
	 */
	static instance(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance resource.
	 */
	static isValidInstanceArn(arn: string): boolean {
		return InstanceArnRegex.test(arn);
	}

	/**
	 * Parses a instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceArn(arn: string): { partition: string; region: string; account: string; instanceId: string } {
		const match = InstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the maintenancewindow resource.
	 */
	static maintenancewindow(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:maintenancewindow/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the maintenancewindow resource.
	 */
	static isValidMaintenancewindowArn(arn: string): boolean {
		return MaintenancewindowArnRegex.test(arn);
	}

	/**
	 * Parses a maintenancewindow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMaintenancewindowArn(arn: string): { partition: string; region: string; account: string; resourceId: string } {
		const match = MaintenancewindowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid maintenancewindow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the managed-instance resource.
	 */
	static managedInstance(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:managed-instance/${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managed-instance resource.
	 */
	static isValidManagedInstanceArn(arn: string): boolean {
		return ManagedInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a managed-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedInstanceArn(arn: string): { partition: string; region: string; account: string; instanceId: string } {
		const match = ManagedInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managed-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the managed-instance-inventory resource.
	 */
	static managedInstanceInventory(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:managed-instance-inventory/${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managed-instance-inventory resource.
	 */
	static isValidManagedInstanceInventoryArn(arn: string): boolean {
		return ManagedInstanceInventoryArnRegex.test(arn);
	}

	/**
	 * Parses a managed-instance-inventory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedInstanceInventoryArn(arn: string): { partition: string; region: string; account: string; instanceId: string } {
		const match = ManagedInstanceInventoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managed-instance-inventory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}

	/**
	 * Builds an ARN for the opsitem resource.
	 */
	static opsitem(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:opsitem/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the opsitem resource.
	 */
	static isValidOpsitemArn(arn: string): boolean {
		return OpsitemArnRegex.test(arn);
	}

	/**
	 * Parses a opsitem ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOpsitemArn(arn: string): { partition: string; region: string; account: string; resourceId: string } {
		const match = OpsitemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid opsitem ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the opsitemgroup resource.
	 */
	static opsitemgroup(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:opsitemgroup/default`;
	}

	/**
	 * Validates whether a string is a valid ARN for the opsitemgroup resource.
	 */
	static isValidOpsitemgroupArn(arn: string): boolean {
		return OpsitemgroupArnRegex.test(arn);
	}

	/**
	 * Parses a opsitemgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOpsitemgroupArn(arn: string): { partition: string; region: string; account: string } {
		const match = OpsitemgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid opsitemgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,

		};
	}

	/**
	 * Builds an ARN for the opsmetadata resource.
	 */
	static opsmetadata(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:opsmetadata/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the opsmetadata resource.
	 */
	static isValidOpsmetadataArn(arn: string): boolean {
		return OpsmetadataArnRegex.test(arn);
	}

	/**
	 * Parses a opsmetadata ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOpsmetadataArn(arn: string): { partition: string; region: string; account: string; resourceId: string } {
		const match = OpsmetadataArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid opsmetadata ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the parameter resource.
	 */
	static parameter(props: {
		/** The ParameterNameWithoutLeadingSlash component of the ARN. */
		readonly parameterNameWithoutLeadingSlash: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:parameter/${props.parameterNameWithoutLeadingSlash}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the parameter resource.
	 */
	static isValidParameterArn(arn: string): boolean {
		return ParameterArnRegex.test(arn);
	}

	/**
	 * Parses a parameter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseParameterArn(arn: string): { partition: string; region: string; account: string; parameterNameWithoutLeadingSlash: string } {
		const match = ParameterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid parameter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			parameterNameWithoutLeadingSlash: match.groups!.parameterNameWithoutLeadingSlash,
		};
	}

	/**
	 * Builds an ARN for the patchbaseline resource.
	 */
	static patchbaseline(props: {
		/** The PatchBaselineIdResourceId component of the ARN. */
		readonly patchBaselineIdResourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:patchbaseline/${props.patchBaselineIdResourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the patchbaseline resource.
	 */
	static isValidPatchbaselineArn(arn: string): boolean {
		return PatchbaselineArnRegex.test(arn);
	}

	/**
	 * Parses a patchbaseline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePatchbaselineArn(arn: string): { partition: string; region: string; account: string; patchBaselineIdResourceId: string } {
		const match = PatchbaselineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid patchbaseline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			patchBaselineIdResourceId: match.groups!.patchBaselineIdResourceId,
		};
	}

	/**
	 * Builds an ARN for the resourcedatasync resource.
	 */
	static resourcedatasync(props: {
		/** The SyncName component of the ARN. */
		readonly syncName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:resource-data-sync/${props.syncName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resourcedatasync resource.
	 */
	static isValidResourcedatasyncArn(arn: string): boolean {
		return ResourcedatasyncArnRegex.test(arn);
	}

	/**
	 * Parses a resourcedatasync ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourcedatasyncArn(arn: string): { partition: string; region: string; account: string; syncName: string } {
		const match = ResourcedatasyncArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resourcedatasync ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			syncName: match.groups!.syncName,
		};
	}

	/**
	 * Builds an ARN for the servicesetting resource.
	 */
	static servicesetting(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:servicesetting/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the servicesetting resource.
	 */
	static isValidServicesettingArn(arn: string): boolean {
		return ServicesettingArnRegex.test(arn);
	}

	/**
	 * Parses a servicesetting ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServicesettingArn(arn: string): { partition: string; region: string; account: string; resourceId: string } {
		const match = ServicesettingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid servicesetting ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: {
		/** The SessionId component of the ARN. */
		readonly sessionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): { partition: string; region: string; account: string; sessionId: string } {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sessionId: match.groups!.sessionId,
		};
	}

	/**
	 * Builds an ARN for the task resource.
	 */
	static task(props: {
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ecs:${props.region ?? "*"}:${props.account ?? "*"}:task/${props.taskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the task resource.
	 */
	static isValidTaskArn(arn: string): boolean {
		return TaskArnRegex.test(arn);
	}

	/**
	 * Parses a task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTaskArn(arn: string): { partition: string; region: string; account: string; taskId: string } {
		const match = TaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			taskId: match.groups!.taskId,
		};
	}

	/**
	 * Builds an ARN for the windowtarget resource.
	 */
	static windowtarget(props: {
		/** The WindowTargetId component of the ARN. */
		readonly windowTargetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:windowtarget/${props.windowTargetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the windowtarget resource.
	 */
	static isValidWindowtargetArn(arn: string): boolean {
		return WindowtargetArnRegex.test(arn);
	}

	/**
	 * Parses a windowtarget ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWindowtargetArn(arn: string): { partition: string; region: string; account: string; windowTargetId: string } {
		const match = WindowtargetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid windowtarget ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			windowTargetId: match.groups!.windowTargetId,
		};
	}

	/**
	 * Builds an ARN for the windowtask resource.
	 */
	static windowtask(props: {
		/** The WindowTaskId component of the ARN. */
		readonly windowTaskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:windowtask/${props.windowTaskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the windowtask resource.
	 */
	static isValidWindowtaskArn(arn: string): boolean {
		return WindowtaskArnRegex.test(arn);
	}

	/**
	 * Parses a windowtask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWindowtaskArn(arn: string): { partition: string; region: string; account: string; windowTaskId: string } {
		const match = WindowtaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid windowtask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			windowTaskId: match.groups!.windowTaskId,
		};
	}

}

/**
 * API operation to required IAM actions mapping for ssm.
 */
export class SSMOperations {
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly ADD_TAGS_TO_RESOURCE: string[] = ["ssm:AddTagsToResource"];
	/** IAM actions required for the AssociateOpsItemRelatedItem API call. */
	static readonly ASSOCIATE_OPS_ITEM_RELATED_ITEM: string[] = ["ssm:AssociateOpsItemRelatedItem"];
	/** IAM actions required for the CancelCommand API call. */
	static readonly CANCEL_COMMAND: string[] = ["ssm:CancelCommand"];
	/** IAM actions required for the CancelMaintenanceWindowExecution API call. */
	static readonly CANCEL_MAINTENANCE_WINDOW_EXECUTION: string[] = ["ssm:CancelMaintenanceWindowExecution"];
	/** IAM actions required for the CreateActivation API call. */
	static readonly CREATE_ACTIVATION: string[] = ["ssm:AddTagsToResource", "ssm:CreateActivation", "iam:PassRole"];
	/** IAM actions required for the CreateAssociation API call. */
	static readonly CREATE_ASSOCIATION: string[] = ["ssm:AddTagsToResource", "ssm:CreateAssociation", "iam:PassRole"];
	/** IAM actions required for the CreateAssociationBatch API call. */
	static readonly CREATE_ASSOCIATION_BATCH: string[] = ["ssm:CreateAssociation", "ssm:CreateAssociationBatch", "iam:PassRole"];
	/** IAM actions required for the CreateCloudConnector API call. */
	static readonly CREATE_CLOUD_CONNECTOR: string[] = ["ssm:AddTagsToResource", "ssm:CreateCloudConnector", "iam:PassRole"];
	/** IAM actions required for the CreateDocument API call. */
	static readonly CREATE_DOCUMENT: string[] = ["ssm:AddTagsToResource", "ssm:CreateDocument", "ssm:GetDocument", "iam:PassRole"];
	/** IAM actions required for the CreateMaintenanceWindow API call. */
	static readonly CREATE_MAINTENANCE_WINDOW: string[] = ["ssm:AddTagsToResource", "ssm:CreateMaintenanceWindow"];
	/** IAM actions required for the CreateOpsItem API call. */
	static readonly CREATE_OPS_ITEM: string[] = ["ssm:AddTagsToResource", "ssm:CreateOpsItem"];
	/** IAM actions required for the CreateOpsMetadata API call. */
	static readonly CREATE_OPS_METADATA: string[] = ["ssm:AddTagsToResource", "ssm:CreateOpsMetadata"];
	/** IAM actions required for the CreatePatchBaseline API call. */
	static readonly CREATE_PATCH_BASELINE: string[] = ["ssm:AddTagsToResource", "ssm:CreatePatchBaseline"];
	/** IAM actions required for the CreateResourceDataSync API call. */
	static readonly CREATE_RESOURCE_DATA_SYNC: string[] = ["ssm:CreateResourceDataSync"];
	/** IAM actions required for the DeleteActivation API call. */
	static readonly DELETE_ACTIVATION: string[] = ["ssm:DeleteActivation"];
	/** IAM actions required for the DeleteAssociation API call. */
	static readonly DELETE_ASSOCIATION: string[] = ["ssm:DeleteAssociation"];
	/** IAM actions required for the DeleteCloudConnector API call. */
	static readonly DELETE_CLOUD_CONNECTOR: string[] = ["ssm:DeleteCloudConnector"];
	/** IAM actions required for the DeleteDocument API call. */
	static readonly DELETE_DOCUMENT: string[] = ["ssm:DeleteDocument"];
	/** IAM actions required for the DeleteInventory API call. */
	static readonly DELETE_INVENTORY: string[] = ["ssm:DeleteInventory"];
	/** IAM actions required for the DeleteMaintenanceWindow API call. */
	static readonly DELETE_MAINTENANCE_WINDOW: string[] = ["ssm:DeleteMaintenanceWindow"];
	/** IAM actions required for the DeleteOpsItem API call. */
	static readonly DELETE_OPS_ITEM: string[] = ["ssm:DeleteOpsItem"];
	/** IAM actions required for the DeleteOpsMetadata API call. */
	static readonly DELETE_OPS_METADATA: string[] = ["ssm:DeleteOpsMetadata"];
	/** IAM actions required for the DeleteParameter API call. */
	static readonly DELETE_PARAMETER: string[] = ["ssm:DeleteParameter"];
	/** IAM actions required for the DeleteParameters API call. */
	static readonly DELETE_PARAMETERS: string[] = ["ssm:DeleteParameters"];
	/** IAM actions required for the DeletePatchBaseline API call. */
	static readonly DELETE_PATCH_BASELINE: string[] = ["ssm:DeletePatchBaseline"];
	/** IAM actions required for the DeleteResourceDataSync API call. */
	static readonly DELETE_RESOURCE_DATA_SYNC: string[] = ["ssm:DeleteResourceDataSync"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = ["ssm:DeleteResourcePolicy"];
	/** IAM actions required for the DeregisterManagedInstance API call. */
	static readonly DEREGISTER_MANAGED_INSTANCE: string[] = ["ssm:DeregisterManagedInstance"];
	/** IAM actions required for the DeregisterPatchBaselineForPatchGroup API call. */
	static readonly DEREGISTER_PATCH_BASELINE_FOR_PATCH_GROUP: string[] = ["ssm:DeregisterPatchBaselineForPatchGroup"];
	/** IAM actions required for the DeregisterTargetFromMaintenanceWindow API call. */
	static readonly DEREGISTER_TARGET_FROM_MAINTENANCE_WINDOW: string[] = ["ssm:DeregisterTargetFromMaintenanceWindow"];
	/** IAM actions required for the DeregisterTaskFromMaintenanceWindow API call. */
	static readonly DEREGISTER_TASK_FROM_MAINTENANCE_WINDOW: string[] = ["ssm:DeregisterTaskFromMaintenanceWindow"];
	/** IAM actions required for the DescribeActivations API call. */
	static readonly DESCRIBE_ACTIVATIONS: string[] = ["ssm:DescribeActivations"];
	/** IAM actions required for the DescribeAssociation API call. */
	static readonly DESCRIBE_ASSOCIATION: string[] = ["ssm:DescribeAssociation"];
	/** IAM actions required for the DescribeAssociationExecutionTargets API call. */
	static readonly DESCRIBE_ASSOCIATION_EXECUTION_TARGETS: string[] = ["ssm:DescribeAssociationExecutionTargets"];
	/** IAM actions required for the DescribeAssociationExecutions API call. */
	static readonly DESCRIBE_ASSOCIATION_EXECUTIONS: string[] = ["ssm:DescribeAssociationExecutions"];
	/** IAM actions required for the DescribeAutomationExecutions API call. */
	static readonly DESCRIBE_AUTOMATION_EXECUTIONS: string[] = ["ssm:DescribeAutomationExecutions"];
	/** IAM actions required for the DescribeAutomationStepExecutions API call. */
	static readonly DESCRIBE_AUTOMATION_STEP_EXECUTIONS: string[] = ["ssm:DescribeAutomationStepExecutions", "iam:PassRole"];
	/** IAM actions required for the DescribeAvailablePatches API call. */
	static readonly DESCRIBE_AVAILABLE_PATCHES: string[] = ["ssm:DescribeAvailablePatches"];
	/** IAM actions required for the DescribeDocument API call. */
	static readonly DESCRIBE_DOCUMENT: string[] = ["ssm:DescribeDocument"];
	/** IAM actions required for the DescribeDocumentPermission API call. */
	static readonly DESCRIBE_DOCUMENT_PERMISSION: string[] = ["ssm:DescribeDocumentPermission"];
	/** IAM actions required for the DescribeEffectiveInstanceAssociations API call. */
	static readonly DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS: string[] = ["ssm:DescribeEffectiveInstanceAssociations"];
	/** IAM actions required for the DescribeEffectivePatchesForPatchBaseline API call. */
	static readonly DESCRIBE_EFFECTIVE_PATCHES_FOR_PATCH_BASELINE: string[] = ["ssm:DescribeEffectivePatchesForPatchBaseline"];
	/** IAM actions required for the DescribeInstanceAssociationsStatus API call. */
	static readonly DESCRIBE_INSTANCE_ASSOCIATIONS_STATUS: string[] = ["ssm:DescribeInstanceAssociationsStatus"];
	/** IAM actions required for the DescribeInstanceInformation API call. */
	static readonly DESCRIBE_INSTANCE_INFORMATION: string[] = ["ssm:DescribeInstanceInformation"];
	/** IAM actions required for the DescribeInstancePatchStates API call. */
	static readonly DESCRIBE_INSTANCE_PATCH_STATES: string[] = ["ssm:DescribeInstancePatchStates"];
	/** IAM actions required for the DescribeInstancePatchStatesForPatchGroup API call. */
	static readonly DESCRIBE_INSTANCE_PATCH_STATES_FOR_PATCH_GROUP: string[] = ["ssm:DescribeInstancePatchStatesForPatchGroup"];
	/** IAM actions required for the DescribeInstancePatches API call. */
	static readonly DESCRIBE_INSTANCE_PATCHES: string[] = ["ssm:DescribeInstancePatches"];
	/** IAM actions required for the DescribeInstanceProperties API call. */
	static readonly DESCRIBE_INSTANCE_PROPERTIES: string[] = ["ssm:DescribeInstanceProperties"];
	/** IAM actions required for the DescribeInventoryDeletions API call. */
	static readonly DESCRIBE_INVENTORY_DELETIONS: string[] = ["ssm:DescribeInventoryDeletions"];
	/** IAM actions required for the DescribeMaintenanceWindowExecutionTaskInvocations API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATIONS: string[] = ["ssm:DescribeMaintenanceWindowExecutionTaskInvocations"];
	/** IAM actions required for the DescribeMaintenanceWindowExecutionTasks API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_EXECUTION_TASKS: string[] = ["ssm:DescribeMaintenanceWindowExecutionTasks"];
	/** IAM actions required for the DescribeMaintenanceWindowExecutions API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_EXECUTIONS: string[] = ["ssm:DescribeMaintenanceWindowExecutions"];
	/** IAM actions required for the DescribeMaintenanceWindowSchedule API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_SCHEDULE: string[] = ["ssm:DescribeMaintenanceWindowSchedule"];
	/** IAM actions required for the DescribeMaintenanceWindowTargets API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_TARGETS: string[] = ["ssm:DescribeMaintenanceWindowTargets"];
	/** IAM actions required for the DescribeMaintenanceWindowTasks API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOW_TASKS: string[] = ["ssm:DescribeMaintenanceWindowTasks"];
	/** IAM actions required for the DescribeMaintenanceWindows API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOWS: string[] = ["ssm:DescribeMaintenanceWindows"];
	/** IAM actions required for the DescribeMaintenanceWindowsForTarget API call. */
	static readonly DESCRIBE_MAINTENANCE_WINDOWS_FOR_TARGET: string[] = ["ssm:DescribeMaintenanceWindowsForTarget"];
	/** IAM actions required for the DescribeOpsItems API call. */
	static readonly DESCRIBE_OPS_ITEMS: string[] = ["ssm:DescribeOpsItems"];
	/** IAM actions required for the DescribeParameters API call. */
	static readonly DESCRIBE_PARAMETERS: string[] = ["ssm:DescribeParameters"];
	/** IAM actions required for the DescribePatchBaselines API call. */
	static readonly DESCRIBE_PATCH_BASELINES: string[] = ["ssm:DescribePatchBaselines"];
	/** IAM actions required for the DescribePatchGroupState API call. */
	static readonly DESCRIBE_PATCH_GROUP_STATE: string[] = ["ssm:DescribePatchGroupState"];
	/** IAM actions required for the DescribePatchGroups API call. */
	static readonly DESCRIBE_PATCH_GROUPS: string[] = ["ssm:DescribePatchGroups"];
	/** IAM actions required for the DescribePatchProperties API call. */
	static readonly DESCRIBE_PATCH_PROPERTIES: string[] = ["ssm:DescribePatchProperties"];
	/** IAM actions required for the DescribeSessions API call. */
	static readonly DESCRIBE_SESSIONS: string[] = ["ssm:DescribeSessions"];
	/** IAM actions required for the DisassociateOpsItemRelatedItem API call. */
	static readonly DISASSOCIATE_OPS_ITEM_RELATED_ITEM: string[] = ["ssm:DisassociateOpsItemRelatedItem"];
	/** IAM actions required for the GetAccessToken API call. */
	static readonly GET_ACCESS_TOKEN: string[] = ["ssm:GetAccessToken"];
	/** IAM actions required for the GetAutomationExecution API call. */
	static readonly GET_AUTOMATION_EXECUTION: string[] = ["ssm:GetAutomationExecution", "iam:PassRole"];
	/** IAM actions required for the GetCalendarState API call. */
	static readonly GET_CALENDAR_STATE: string[] = ["ssm:GetCalendarState"];
	/** IAM actions required for the GetCloudConnector API call. */
	static readonly GET_CLOUD_CONNECTOR: string[] = ["ssm:GetCloudConnector"];
	/** IAM actions required for the GetCommandInvocation API call. */
	static readonly GET_COMMAND_INVOCATION: string[] = ["ssm:GetCommandInvocation"];
	/** IAM actions required for the GetConnectionStatus API call. */
	static readonly GET_CONNECTION_STATUS: string[] = ["ssm:GetConnectionStatus"];
	/** IAM actions required for the GetDefaultPatchBaseline API call. */
	static readonly GET_DEFAULT_PATCH_BASELINE: string[] = ["ssm:GetDefaultPatchBaseline"];
	/** IAM actions required for the GetDeployablePatchSnapshotForInstance API call. */
	static readonly GET_DEPLOYABLE_PATCH_SNAPSHOT_FOR_INSTANCE: string[] = ["ssm:GetDeployablePatchSnapshotForInstance"];
	/** IAM actions required for the GetDocument API call. */
	static readonly GET_DOCUMENT: string[] = ["ssm:GetDocument"];
	/** IAM actions required for the GetExecutionPreview API call. */
	static readonly GET_EXECUTION_PREVIEW: string[] = ["ssm:GetExecutionPreview"];
	/** IAM actions required for the GetInventory API call. */
	static readonly GET_INVENTORY: string[] = ["ssm:GetInventory"];
	/** IAM actions required for the GetInventorySchema API call. */
	static readonly GET_INVENTORY_SCHEMA: string[] = ["ssm:GetInventorySchema"];
	/** IAM actions required for the GetMaintenanceWindow API call. */
	static readonly GET_MAINTENANCE_WINDOW: string[] = ["ssm:GetMaintenanceWindow"];
	/** IAM actions required for the GetMaintenanceWindowExecution API call. */
	static readonly GET_MAINTENANCE_WINDOW_EXECUTION: string[] = ["ssm:GetMaintenanceWindowExecution"];
	/** IAM actions required for the GetMaintenanceWindowExecutionTask API call. */
	static readonly GET_MAINTENANCE_WINDOW_EXECUTION_TASK: string[] = ["ssm:GetMaintenanceWindowExecutionTask"];
	/** IAM actions required for the GetMaintenanceWindowExecutionTaskInvocation API call. */
	static readonly GET_MAINTENANCE_WINDOW_EXECUTION_TASK_INVOCATION: string[] = ["ssm:GetMaintenanceWindowExecutionTaskInvocation"];
	/** IAM actions required for the GetMaintenanceWindowTask API call. */
	static readonly GET_MAINTENANCE_WINDOW_TASK: string[] = ["ssm:GetMaintenanceWindowTask"];
	/** IAM actions required for the GetOpsItem API call. */
	static readonly GET_OPS_ITEM: string[] = ["ssm:GetOpsItem"];
	/** IAM actions required for the GetOpsMetadata API call. */
	static readonly GET_OPS_METADATA: string[] = ["ssm:GetOpsMetadata"];
	/** IAM actions required for the GetOpsSummary API call. */
	static readonly GET_OPS_SUMMARY: string[] = ["ssm:GetOpsSummary"];
	/** IAM actions required for the GetParameter API call. */
	static readonly GET_PARAMETER: string[] = ["ssm:GetParameter"];
	/** IAM actions required for the GetParameterHistory API call. */
	static readonly GET_PARAMETER_HISTORY: string[] = ["ssm:GetParameterHistory"];
	/** IAM actions required for the GetParameters API call. */
	static readonly GET_PARAMETERS: string[] = ["ssm:GetParameters"];
	/** IAM actions required for the GetParametersByPath API call. */
	static readonly GET_PARAMETERS_BY_PATH: string[] = ["ssm:GetParametersByPath"];
	/** IAM actions required for the GetPatchBaseline API call. */
	static readonly GET_PATCH_BASELINE: string[] = ["ssm:GetPatchBaseline"];
	/** IAM actions required for the GetPatchBaselineForPatchGroup API call. */
	static readonly GET_PATCH_BASELINE_FOR_PATCH_GROUP: string[] = ["ssm:GetPatchBaselineForPatchGroup"];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly GET_RESOURCE_POLICIES: string[] = ["ssm:GetResourcePolicies"];
	/** IAM actions required for the GetServiceSetting API call. */
	static readonly GET_SERVICE_SETTING: string[] = ["ssm:GetServiceSetting"];
	/** IAM actions required for the LabelParameterVersion API call. */
	static readonly LABEL_PARAMETER_VERSION: string[] = ["ssm:LabelParameterVersion"];
	/** IAM actions required for the ListAssociationVersions API call. */
	static readonly LIST_ASSOCIATION_VERSIONS: string[] = ["ssm:ListAssociationVersions"];
	/** IAM actions required for the ListAssociations API call. */
	static readonly LIST_ASSOCIATIONS: string[] = ["ssm:ListAssociations"];
	/** IAM actions required for the ListCloudConnectors API call. */
	static readonly LIST_CLOUD_CONNECTORS: string[] = ["ssm:ListCloudConnectors"];
	/** IAM actions required for the ListCommandInvocations API call. */
	static readonly LIST_COMMAND_INVOCATIONS: string[] = ["ssm:ListCommandInvocations"];
	/** IAM actions required for the ListCommands API call. */
	static readonly LIST_COMMANDS: string[] = ["ssm:ListCommands"];
	/** IAM actions required for the ListComplianceItems API call. */
	static readonly LIST_COMPLIANCE_ITEMS: string[] = ["ssm:ListComplianceItems"];
	/** IAM actions required for the ListComplianceSummaries API call. */
	static readonly LIST_COMPLIANCE_SUMMARIES: string[] = ["ssm:ListComplianceSummaries"];
	/** IAM actions required for the ListDocumentMetadataHistory API call. */
	static readonly LIST_DOCUMENT_METADATA_HISTORY: string[] = ["ssm:ListDocumentMetadataHistory"];
	/** IAM actions required for the ListDocumentVersions API call. */
	static readonly LIST_DOCUMENT_VERSIONS: string[] = ["ssm:ListDocumentVersions"];
	/** IAM actions required for the ListDocuments API call. */
	static readonly LIST_DOCUMENTS: string[] = ["ssm:ListDocuments"];
	/** IAM actions required for the ListInventoryEntries API call. */
	static readonly LIST_INVENTORY_ENTRIES: string[] = ["ssm:ListInventoryEntries"];
	/** IAM actions required for the ListNodes API call. */
	static readonly LIST_NODES: string[] = ["ssm:ListNodes"];
	/** IAM actions required for the ListNodesSummary API call. */
	static readonly LIST_NODES_SUMMARY: string[] = ["ssm:ListNodesSummary"];
	/** IAM actions required for the ListOpsItemEvents API call. */
	static readonly LIST_OPS_ITEM_EVENTS: string[] = ["ssm:ListOpsItemEvents"];
	/** IAM actions required for the ListOpsItemRelatedItems API call. */
	static readonly LIST_OPS_ITEM_RELATED_ITEMS: string[] = ["ssm:ListOpsItemRelatedItems"];
	/** IAM actions required for the ListOpsMetadata API call. */
	static readonly LIST_OPS_METADATA: string[] = ["ssm:ListOpsMetadata"];
	/** IAM actions required for the ListResourceComplianceSummaries API call. */
	static readonly LIST_RESOURCE_COMPLIANCE_SUMMARIES: string[] = ["ssm:ListResourceComplianceSummaries"];
	/** IAM actions required for the ListResourceDataSync API call. */
	static readonly LIST_RESOURCE_DATA_SYNC: string[] = ["ssm:ListResourceDataSync"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["ssm:ListTagsForResource"];
	/** IAM actions required for the ModifyDocumentPermission API call. */
	static readonly MODIFY_DOCUMENT_PERMISSION: string[] = ["ssm:ModifyDocumentPermission"];
	/** IAM actions required for the PutComplianceItems API call. */
	static readonly PUT_COMPLIANCE_ITEMS: string[] = ["ssm:PutComplianceItems"];
	/** IAM actions required for the PutInventory API call. */
	static readonly PUT_INVENTORY: string[] = ["ssm:PutInventory"];
	/** IAM actions required for the PutParameter API call. */
	static readonly PUT_PARAMETER: string[] = ["ssm:AddTagsToResource", "ssm:PutParameter"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["ssm:PutResourcePolicy"];
	/** IAM actions required for the RegisterDefaultPatchBaseline API call. */
	static readonly REGISTER_DEFAULT_PATCH_BASELINE: string[] = ["ssm:RegisterDefaultPatchBaseline"];
	/** IAM actions required for the RegisterPatchBaselineForPatchGroup API call. */
	static readonly REGISTER_PATCH_BASELINE_FOR_PATCH_GROUP: string[] = ["ssm:RegisterPatchBaselineForPatchGroup"];
	/** IAM actions required for the RegisterTargetWithMaintenanceWindow API call. */
	static readonly REGISTER_TARGET_WITH_MAINTENANCE_WINDOW: string[] = ["ssm:RegisterTargetWithMaintenanceWindow"];
	/** IAM actions required for the RegisterTaskWithMaintenanceWindow API call. */
	static readonly REGISTER_TASK_WITH_MAINTENANCE_WINDOW: string[] = ["iam:PassRole", "ssm:RegisterTaskWithMaintenanceWindow"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly REMOVE_TAGS_FROM_RESOURCE: string[] = ["ssm:RemoveTagsFromResource"];
	/** IAM actions required for the ResetServiceSetting API call. */
	static readonly RESET_SERVICE_SETTING: string[] = ["ssm:ResetServiceSetting"];
	/** IAM actions required for the ResumeSession API call. */
	static readonly RESUME_SESSION: string[] = ["ssm:ResumeSession"];
	/** IAM actions required for the SendAutomationSignal API call. */
	static readonly SEND_AUTOMATION_SIGNAL: string[] = ["ssm:SendAutomationSignal"];
	/** IAM actions required for the SendCommand API call. */
	static readonly SEND_COMMAND: string[] = ["iam:PassRole", "ssm:SendCommand"];
	/** IAM actions required for the StartAccessRequest API call. */
	static readonly START_ACCESS_REQUEST: string[] = ["ssm:AddTagsToResource", "ssm:StartAccessRequest"];
	/** IAM actions required for the StartAssociationsOnce API call. */
	static readonly START_ASSOCIATIONS_ONCE: string[] = ["ssm:StartAssociationsOnce"];
	/** IAM actions required for the StartAutomationExecution API call. */
	static readonly START_AUTOMATION_EXECUTION: string[] = ["ssm:AddTagsToResource", "iam:PassRole", "ssm:StartAutomationExecution"];
	/** IAM actions required for the StartChangeRequestExecution API call. */
	static readonly START_CHANGE_REQUEST_EXECUTION: string[] = ["iam:PassRole", "ssm:StartChangeRequestExecution"];
	/** IAM actions required for the StartExecutionPreview API call. */
	static readonly START_EXECUTION_PREVIEW: string[] = ["ssm:StartExecutionPreview"];
	/** IAM actions required for the StartSession API call. */
	static readonly START_SESSION: string[] = ["ssm:StartSession"];
	/** IAM actions required for the StopAutomationExecution API call. */
	static readonly STOP_AUTOMATION_EXECUTION: string[] = ["ssm:StopAutomationExecution"];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TERMINATE_SESSION: string[] = ["ssm:TerminateSession"];
	/** IAM actions required for the UnlabelParameterVersion API call. */
	static readonly UNLABEL_PARAMETER_VERSION: string[] = ["ssm:UnlabelParameterVersion"];
	/** IAM actions required for the UpdateAssociation API call. */
	static readonly UPDATE_ASSOCIATION: string[] = ["iam:PassRole", "ssm:UpdateAssociation"];
	/** IAM actions required for the UpdateAssociationStatus API call. */
	static readonly UPDATE_ASSOCIATION_STATUS: string[] = ["ssm:UpdateAssociationStatus"];
	/** IAM actions required for the UpdateCloudConnector API call. */
	static readonly UPDATE_CLOUD_CONNECTOR: string[] = ["ssm:UpdateCloudConnector"];
	/** IAM actions required for the UpdateDocument API call. */
	static readonly UPDATE_DOCUMENT: string[] = ["iam:PassRole", "ssm:UpdateDocument"];
	/** IAM actions required for the UpdateDocumentDefaultVersion API call. */
	static readonly UPDATE_DOCUMENT_DEFAULT_VERSION: string[] = ["ssm:UpdateDocumentDefaultVersion"];
	/** IAM actions required for the UpdateDocumentMetadata API call. */
	static readonly UPDATE_DOCUMENT_METADATA: string[] = ["ssm:UpdateDocumentMetadata"];
	/** IAM actions required for the UpdateMaintenanceWindow API call. */
	static readonly UPDATE_MAINTENANCE_WINDOW: string[] = ["ssm:UpdateMaintenanceWindow"];
	/** IAM actions required for the UpdateMaintenanceWindowTarget API call. */
	static readonly UPDATE_MAINTENANCE_WINDOW_TARGET: string[] = ["ssm:UpdateMaintenanceWindowTarget"];
	/** IAM actions required for the UpdateMaintenanceWindowTask API call. */
	static readonly UPDATE_MAINTENANCE_WINDOW_TASK: string[] = ["iam:PassRole", "ssm:UpdateMaintenanceWindowTask"];
	/** IAM actions required for the UpdateManagedInstanceRole API call. */
	static readonly UPDATE_MANAGED_INSTANCE_ROLE: string[] = ["iam:PassRole", "ssm:UpdateManagedInstanceRole"];
	/** IAM actions required for the UpdateOpsItem API call. */
	static readonly UPDATE_OPS_ITEM: string[] = ["ssm:UpdateOpsItem"];
	/** IAM actions required for the UpdateOpsMetadata API call. */
	static readonly UPDATE_OPS_METADATA: string[] = ["ssm:UpdateOpsMetadata"];
	/** IAM actions required for the UpdatePatchBaseline API call. */
	static readonly UPDATE_PATCH_BASELINE: string[] = ["ssm:UpdatePatchBaseline"];
	/** IAM actions required for the UpdateResourceDataSync API call. */
	static readonly UPDATE_RESOURCE_DATA_SYNC: string[] = ["ssm:UpdateResourceDataSync"];
	/** IAM actions required for the UpdateServiceSetting API call. */
	static readonly UPDATE_SERVICE_SETTING: string[] = ["iam:PassRole", "ssm:UpdateServiceSetting"];
	/** IAM actions required for the ValidateCloudConnector API call. */
	static readonly VALIDATE_CLOUD_CONNECTOR: string[] = ["ssm:ValidateCloudConnector"];
}

/**
 * Condition key constants and builders for ssm.
 */
export class SSMConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly ADD_TAGS_TO_RESOURCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateActivation action. */
	static readonly CREATE_ACTIVATION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAssociation action. */
	static readonly CREATE_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateAssociationBatch action. */
	static readonly CREATE_ASSOCIATION_BATCH_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateCloudConnector action. */
	static readonly CREATE_CLOUD_CONNECTOR_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateDocument action. */
	static readonly CREATE_DOCUMENT_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "ssm:DocumentType"];
	/** Condition keys applicable to the CreateMaintenanceWindow action. */
	static readonly CREATE_MAINTENANCE_WINDOW_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateOpsItem action. */
	static readonly CREATE_OPS_ITEM_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateOpsMetadata action. */
	static readonly CREATE_OPS_METADATA_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreatePatchBaseline action. */
	static readonly CREATE_PATCH_BASELINE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateResourceDataSync action. */
	static readonly CREATE_RESOURCE_DATA_SYNC_CONDITION_KEYS: string[] = ["ssm:SyncType"];
	/** Condition keys applicable to the DeleteAssociation action. */
	static readonly DELETE_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteCloudConnector action. */
	static readonly DELETE_CLOUD_CONNECTOR_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteDocument action. */
	static readonly DELETE_DOCUMENT_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the DeleteParameter action. */
	static readonly DELETE_PARAMETER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteParameters action. */
	static readonly DELETE_PARAMETERS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteResourceDataSync action. */
	static readonly DELETE_RESOURCE_DATA_SYNC_CONDITION_KEYS: string[] = ["ssm:SyncType"];
	/** Condition keys applicable to the DeregisterManagedInstance action. */
	static readonly DEREGISTER_MANAGED_INSTANCE_CONDITION_KEYS: string[] = ["ssm:resourceTag/tag-key"];
	/** Condition keys applicable to the DescribeAssociation action. */
	static readonly DESCRIBE_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeAssociationExecutionTargets action. */
	static readonly DESCRIBE_ASSOCIATION_EXECUTION_TARGETS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeAssociationExecutions action. */
	static readonly DESCRIBE_ASSOCIATION_EXECUTIONS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeDocument action. */
	static readonly DESCRIBE_DOCUMENT_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the DescribeDocumentPermission action. */
	static readonly DESCRIBE_DOCUMENT_PERMISSION_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the DescribeEffectiveInstanceAssociations action. */
	static readonly DESCRIBE_EFFECTIVE_INSTANCE_ASSOCIATIONS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeInstanceAssociationsStatus action. */
	static readonly DESCRIBE_INSTANCE_ASSOCIATIONS_STATUS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeInstancePatchStates action. */
	static readonly DESCRIBE_INSTANCE_PATCH_STATES_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "ssm:resourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeInstancePatches action. */
	static readonly DESCRIBE_INSTANCE_PATCHES_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "ssm:resourceTag/${TagKey}"];
	/** Condition keys applicable to the GetAutomationExecution action. */
	static readonly GET_AUTOMATION_EXECUTION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetCloudConnector action. */
	static readonly GET_CLOUD_CONNECTOR_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetConnectionStatus action. */
	static readonly GET_CONNECTION_STATUS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "ssm:resourceTag/${TagKey}"];
	/** Condition keys applicable to the GetDocument action. */
	static readonly GET_DOCUMENT_CONDITION_KEYS: string[] = ["ssm:DocumentCategories", "ssm:DocumentType"];
	/** Condition keys applicable to the GetParameter action. */
	static readonly GET_PARAMETER_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetParameterHistory action. */
	static readonly GET_PARAMETER_HISTORY_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetParameters action. */
	static readonly GET_PARAMETERS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetParametersByPath action. */
	static readonly GET_PARAMETERS_BY_PATH_CONDITION_KEYS: string[] = ["ssm:Recursive"];
	/** Condition keys applicable to the LabelParameterVersion action. */
	static readonly LABEL_PARAMETER_VERSION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListAssociationVersions action. */
	static readonly LIST_ASSOCIATION_VERSIONS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListDocumentMetadataHistory action. */
	static readonly LIST_DOCUMENT_METADATA_HISTORY_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the ListDocumentVersions action. */
	static readonly LIST_DOCUMENT_VERSIONS_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the ListInstanceAssociations action. */
	static readonly LIST_INSTANCE_ASSOCIATIONS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListResourceDataSync action. */
	static readonly LIST_RESOURCE_DATA_SYNC_CONDITION_KEYS: string[] = ["ssm:SyncType"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ModifyDocumentPermission action. */
	static readonly MODIFY_DOCUMENT_PERMISSION_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the PutComplianceItems action. */
	static readonly PUT_COMPLIANCE_ITEMS_CONDITION_KEYS: string[] = ["ec2:SourceInstanceARN", "ssm:SourceInstanceARN"];
	/** Condition keys applicable to the PutInventory action. */
	static readonly PUT_INVENTORY_CONDITION_KEYS: string[] = ["ssm:InventoryTypeName"];
	/** Condition keys applicable to the PutParameter action. */
	static readonly PUT_PARAMETER_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys", "ssm:Overwrite", "ssm:Policies"];
	/** Condition keys applicable to the RegisterManagedInstance action. */
	static readonly REGISTER_MANAGED_INSTANCE_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly REMOVE_TAGS_FROM_RESOURCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the ResumeSession action. */
	static readonly RESUME_SESSION_CONDITION_KEYS: string[] = ["ssm:resourceTag/aws:ssmmessages:session-id", "ssm:resourceTag/aws:ssmmessages:target-id"];
	/** Condition keys applicable to the SendAutomationSignal action. */
	static readonly SEND_AUTOMATION_SIGNAL_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the SendCommand action. */
	static readonly SEND_COMMAND_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "ssm:resourceTag/${TagKey}"];
	/** Condition keys applicable to the StartAccessRequest action. */
	static readonly START_ACCESS_REQUEST_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the StartAssociationsOnce action. */
	static readonly START_ASSOCIATIONS_ONCE_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the StartAutomationExecution action. */
	static readonly START_AUTOMATION_EXECUTION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "ssm:DocumentVersion"];
	/** Condition keys applicable to the StartChangeRequestExecution action. */
	static readonly START_CHANGE_REQUEST_EXECUTION_CONDITION_KEYS: string[] = ["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys", "ssm:AutoApprove", "ssm:DocumentVersion"];
	/** Condition keys applicable to the StartSession action. */
	static readonly START_SESSION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "ssm:AccessRequestId", "ssm:SessionDocumentAccessCheck", "ssm:resourceTag/${TagKey}"];
	/** Condition keys applicable to the StopAutomationExecution action. */
	static readonly STOP_AUTOMATION_EXECUTION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the TerminateSession action. */
	static readonly TERMINATE_SESSION_CONDITION_KEYS: string[] = ["ssm:resourceTag/aws:ssmmessages:session-id", "ssm:resourceTag/aws:ssmmessages:target-id"];
	/** Condition keys applicable to the UnlabelParameterVersion action. */
	static readonly UNLABEL_PARAMETER_VERSION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateAssociation action. */
	static readonly UPDATE_ASSOCIATION_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateAssociationStatus action. */
	static readonly UPDATE_ASSOCIATION_STATUS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "ec2:SourceInstanceARN", "ssm:SourceInstanceARN"];
	/** Condition keys applicable to the UpdateCloudConnector action. */
	static readonly UPDATE_CLOUD_CONNECTOR_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateDocument action. */
	static readonly UPDATE_DOCUMENT_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the UpdateDocumentDefaultVersion action. */
	static readonly UPDATE_DOCUMENT_DEFAULT_VERSION_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the UpdateDocumentMetadata action. */
	static readonly UPDATE_DOCUMENT_METADATA_CONDITION_KEYS: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the UpdateInstanceAssociationStatus action. */
	static readonly UPDATE_INSTANCE_ASSOCIATION_STATUS_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}", "ec2:SourceInstanceARN", "ssm:SourceInstanceARN"];
	/** Condition keys applicable to the UpdateInstanceInformation action. */
	static readonly UPDATE_INSTANCE_INFORMATION_CONDITION_KEYS: string[] = ["ec2:SourceInstanceARN", "ssm:SourceInstanceARN"];
	/** Condition keys applicable to the UpdateManagedInstanceRole action. */
	static readonly UPDATE_MANAGED_INSTANCE_ROLE_CONDITION_KEYS: string[] = ["ssm:resourceTag/tag-key"];
	/** Condition keys applicable to the UpdateResourceDataSync action. */
	static readonly UPDATE_RESOURCE_DATA_SYNC_CONDITION_KEYS: string[] = ["ssm:SyncType"];
	/** Condition keys applicable to the ValidateCloudConnector action. */
	static readonly VALIDATE_CLOUD_CONNECTOR_CONDITION_KEYS: string[] = ["aws:ResourceTag/${TagKey}"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: ec2:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ec2:SourceInstanceARN";
	/** Condition key: ssm:AccessRequestId (String) */
	static readonly ACCESS_REQUEST_ID = "ssm:AccessRequestId";
	/** Condition key: ssm:AutoApprove (Bool) */
	static readonly AUTO_APPROVE = "ssm:AutoApprove";
	/** Condition key: ssm:DocumentCategories (ArrayOfString) */
	static readonly DOCUMENT_CATEGORIES = "ssm:DocumentCategories";
	/** Condition key: ssm:DocumentType (String) */
	static readonly DOCUMENT_TYPE = "ssm:DocumentType";
	/** Condition key: ssm:DocumentVersion (ArrayOfString) */
	static readonly DOCUMENT_VERSION = "ssm:DocumentVersion";
	/** Condition key: ssm:InventoryTypeName (ArrayOfString) */
	static readonly INVENTORY_TYPE_NAME = "ssm:InventoryTypeName";
	/** Condition key: ssm:Overwrite (String) */
	static readonly OVERWRITE = "ssm:Overwrite";
	/** Condition key: ssm:Policies (String) */
	static readonly POLICIES = "ssm:Policies";
	/** Condition key: ssm:Recursive (String) */
	static readonly RECURSIVE = "ssm:Recursive";
	/** Condition key: ssm:SessionDocumentAccessCheck (Bool) */
	static readonly SESSION_DOCUMENT_ACCESS_CHECK = "ssm:SessionDocumentAccessCheck";
	/** Condition key: ssm:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ssm:SourceInstanceARN";
	/** Condition key: ssm:SyncType (String) */
	static readonly SYNC_TYPE = "ssm:SyncType";
	/** Condition key: ssm:resourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "ssm:resourceTag/${TagKey}";
	/** Condition key: ssm:resourceTag/aws:ssmmessages:session-id (String) */
	static readonly RESOURCE_TAG/AWS:SSMMESSAGES:SESSION_ID = "ssm:resourceTag/aws:ssmmessages:session-id";
	/** Condition key: ssm:resourceTag/aws:ssmmessages:target-id (String) */
	static readonly RESOURCE_TAG/AWS:SSMMESSAGES:TARGET_ID = "ssm:resourceTag/aws:ssmmessages:target-id";
	/** Condition key: ssm:resourceTag/tag-key (String) */
	static readonly RESOURCE_TAG/TAG_KEY = "ssm:resourceTag/tag-key";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}

	/**
	 * Generates a condition block for `ssm:AccessRequestId`.
	 */
	static accessRequestId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:AccessRequestId": value } };
	}

	/**
	 * Generates a condition block for `ssm:AutoApprove`.
	 */
	static autoApprove(value: boolean): Record<string, Record<string, boolean>> {
		return { "Bool": { "ssm:AutoApprove": value } };
	}

	/**
	 * Generates a condition block for `ssm:DocumentCategories`.
	 */
	static documentCategories(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ssm:DocumentCategories": values } };
	}

	/**
	 * Generates a condition block for `ssm:DocumentType`.
	 */
	static documentType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:DocumentType": value } };
	}

	/**
	 * Generates a condition block for `ssm:DocumentVersion`.
	 */
	static documentVersion(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ssm:DocumentVersion": values } };
	}

	/**
	 * Generates a condition block for `ssm:InventoryTypeName`.
	 */
	static inventoryTypeName(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ssm:InventoryTypeName": values } };
	}

	/**
	 * Generates a condition block for `ssm:Overwrite`.
	 */
	static overwrite(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:Overwrite": value } };
	}

	/**
	 * Generates a condition block for `ssm:Policies`.
	 */
	static policies(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:Policies": value } };
	}

	/**
	 * Generates a condition block for `ssm:Recursive`.
	 */
	static recursive(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:Recursive": value } };
	}

	/**
	 * Generates a condition block for `ssm:SessionDocumentAccessCheck`.
	 */
	static sessionDocumentAccessCheck(value: boolean): Record<string, Record<string, boolean>> {
		return { "Bool": { "ssm:SessionDocumentAccessCheck": value } };
	}

	/**
	 * Generates a condition block for `ssm:SourceInstanceARN`.
	 */
	static sourceInstanceARN(value: string): Record<string, Record<string, string>> {
		return { "ArnEquals": { "ssm:SourceInstanceARN": value } };
	}

	/**
	 * Generates a condition block for `ssm:SyncType`.
	 */
	static syncType(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:SyncType": value } };
	}

	/**
	 * Generates a condition block for `ssm:resourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:resourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `ssm:resourceTag/aws:ssmmessages:session-id`.
	 */
	static resourceTag/aws:ssmmessages:sessionId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:resourceTag/aws:ssmmessages:session-id": value } };
	}

	/**
	 * Generates a condition block for `ssm:resourceTag/aws:ssmmessages:target-id`.
	 */
	static resourceTag/aws:ssmmessages:targetId(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:resourceTag/aws:ssmmessages:target-id": value } };
	}

	/**
	 * Generates a condition block for `ssm:resourceTag/tag-key`.
	 */
	static resourceTag/tagKey(value: string): Record<string, Record<string, string>> {
		return { "StringEquals": { "ssm:resourceTag/tag-key": value } };
	}

}
