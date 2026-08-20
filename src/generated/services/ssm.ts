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
	static readonly AddTagsToResource = "ssm:AddTagsToResource";
	/** [Write] ssm:AssociateOpsItemRelatedItem */
	static readonly AssociateOpsItemRelatedItem =
		"ssm:AssociateOpsItemRelatedItem";
	/** [Write] ssm:CancelCommand */
	static readonly CancelCommand = "ssm:CancelCommand";
	/** [Write] ssm:CancelMaintenanceWindowExecution */
	static readonly CancelMaintenanceWindowExecution =
		"ssm:CancelMaintenanceWindowExecution";
	/** [Write] ssm:CreateActivation */
	static readonly CreateActivation = "ssm:CreateActivation";
	/** [Write] ssm:CreateAssociation */
	static readonly CreateAssociation = "ssm:CreateAssociation";
	/** [Write] ssm:CreateAssociationBatch */
	static readonly CreateAssociationBatch = "ssm:CreateAssociationBatch";
	/** [Write] ssm:CreateCloudConnector */
	static readonly CreateCloudConnector = "ssm:CreateCloudConnector";
	/** [Write] ssm:CreateDocument */
	static readonly CreateDocument = "ssm:CreateDocument";
	/** [Write] ssm:CreateMaintenanceWindow */
	static readonly CreateMaintenanceWindow = "ssm:CreateMaintenanceWindow";
	/** [Write] ssm:CreateOpsItem */
	static readonly CreateOpsItem = "ssm:CreateOpsItem";
	/** [Write] ssm:CreateOpsMetadata */
	static readonly CreateOpsMetadata = "ssm:CreateOpsMetadata";
	/** [Write] ssm:CreatePatchBaseline */
	static readonly CreatePatchBaseline = "ssm:CreatePatchBaseline";
	/** [Write] ssm:CreateResourceDataSync */
	static readonly CreateResourceDataSync = "ssm:CreateResourceDataSync";
	/** [Write] ssm:DeleteActivation */
	static readonly DeleteActivation = "ssm:DeleteActivation";
	/** [Write] ssm:DeleteAssociation */
	static readonly DeleteAssociation = "ssm:DeleteAssociation";
	/** [Write] ssm:DeleteCloudConnector */
	static readonly DeleteCloudConnector = "ssm:DeleteCloudConnector";
	/** [Write] ssm:DeleteDocument */
	static readonly DeleteDocument = "ssm:DeleteDocument";
	/** [Write] ssm:DeleteInventory */
	static readonly DeleteInventory = "ssm:DeleteInventory";
	/** [Write] ssm:DeleteMaintenanceWindow */
	static readonly DeleteMaintenanceWindow = "ssm:DeleteMaintenanceWindow";
	/** [Write] ssm:DeleteOpsItem */
	static readonly DeleteOpsItem = "ssm:DeleteOpsItem";
	/** [Write] ssm:DeleteOpsMetadata */
	static readonly DeleteOpsMetadata = "ssm:DeleteOpsMetadata";
	/** [Write] ssm:DeleteParameter */
	static readonly DeleteParameter = "ssm:DeleteParameter";
	/** [Write] ssm:DeleteParameters */
	static readonly DeleteParameters = "ssm:DeleteParameters";
	/** [Write] ssm:DeletePatchBaseline */
	static readonly DeletePatchBaseline = "ssm:DeletePatchBaseline";
	/** [Write] ssm:DeleteResourceDataSync */
	static readonly DeleteResourceDataSync = "ssm:DeleteResourceDataSync";
	/** [PermissionManagement] ssm:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "ssm:DeleteResourcePolicy";
	/** [Write] ssm:DeregisterManagedInstance */
	static readonly DeregisterManagedInstance = "ssm:DeregisterManagedInstance";
	/** [Write] ssm:DeregisterPatchBaselineForPatchGroup */
	static readonly DeregisterPatchBaselineForPatchGroup =
		"ssm:DeregisterPatchBaselineForPatchGroup";
	/** [Write] ssm:DeregisterTargetFromMaintenanceWindow */
	static readonly DeregisterTargetFromMaintenanceWindow =
		"ssm:DeregisterTargetFromMaintenanceWindow";
	/** [Write] ssm:DeregisterTaskFromMaintenanceWindow */
	static readonly DeregisterTaskFromMaintenanceWindow =
		"ssm:DeregisterTaskFromMaintenanceWindow";
	/** [Read] ssm:DescribeActivations */
	static readonly DescribeActivations = "ssm:DescribeActivations";
	/** [Read] ssm:DescribeAssociation */
	static readonly DescribeAssociation = "ssm:DescribeAssociation";
	/** [Read] ssm:DescribeAssociationExecutionTargets */
	static readonly DescribeAssociationExecutionTargets =
		"ssm:DescribeAssociationExecutionTargets";
	/** [Read] ssm:DescribeAssociationExecutions */
	static readonly DescribeAssociationExecutions =
		"ssm:DescribeAssociationExecutions";
	/** [Read] ssm:DescribeAutomationExecutions */
	static readonly DescribeAutomationExecutions =
		"ssm:DescribeAutomationExecutions";
	/** [Read] ssm:DescribeAutomationStepExecutions */
	static readonly DescribeAutomationStepExecutions =
		"ssm:DescribeAutomationStepExecutions";
	/** [Read] ssm:DescribeAvailablePatches */
	static readonly DescribeAvailablePatches = "ssm:DescribeAvailablePatches";
	/** [Read] ssm:DescribeDocument */
	static readonly DescribeDocument = "ssm:DescribeDocument";
	/** [Read] ssm:DescribeDocumentParameters */
	static readonly DescribeDocumentParameters = "ssm:DescribeDocumentParameters";
	/** [Read] ssm:DescribeDocumentPermission */
	static readonly DescribeDocumentPermission = "ssm:DescribeDocumentPermission";
	/** [Read] ssm:DescribeEffectiveInstanceAssociations */
	static readonly DescribeEffectiveInstanceAssociations =
		"ssm:DescribeEffectiveInstanceAssociations";
	/** [Read] ssm:DescribeEffectivePatchesForPatchBaseline */
	static readonly DescribeEffectivePatchesForPatchBaseline =
		"ssm:DescribeEffectivePatchesForPatchBaseline";
	/** [Read] ssm:DescribeInstanceAssociationsStatus */
	static readonly DescribeInstanceAssociationsStatus =
		"ssm:DescribeInstanceAssociationsStatus";
	/** [Read] ssm:DescribeInstanceInformation */
	static readonly DescribeInstanceInformation =
		"ssm:DescribeInstanceInformation";
	/** [Read] ssm:DescribeInstancePatchStates */
	static readonly DescribeInstancePatchStates =
		"ssm:DescribeInstancePatchStates";
	/** [Read] ssm:DescribeInstancePatchStatesForPatchGroup */
	static readonly DescribeInstancePatchStatesForPatchGroup =
		"ssm:DescribeInstancePatchStatesForPatchGroup";
	/** [Read] ssm:DescribeInstancePatches */
	static readonly DescribeInstancePatches = "ssm:DescribeInstancePatches";
	/** [Read] ssm:DescribeInstanceProperties */
	static readonly DescribeInstanceProperties = "ssm:DescribeInstanceProperties";
	/** [Read] ssm:DescribeInventoryDeletions */
	static readonly DescribeInventoryDeletions = "ssm:DescribeInventoryDeletions";
	/** [List] ssm:DescribeMaintenanceWindowExecutionTaskInvocations */
	static readonly DescribeMaintenanceWindowExecutionTaskInvocations =
		"ssm:DescribeMaintenanceWindowExecutionTaskInvocations";
	/** [List] ssm:DescribeMaintenanceWindowExecutionTasks */
	static readonly DescribeMaintenanceWindowExecutionTasks =
		"ssm:DescribeMaintenanceWindowExecutionTasks";
	/** [List] ssm:DescribeMaintenanceWindowExecutions */
	static readonly DescribeMaintenanceWindowExecutions =
		"ssm:DescribeMaintenanceWindowExecutions";
	/** [List] ssm:DescribeMaintenanceWindowSchedule */
	static readonly DescribeMaintenanceWindowSchedule =
		"ssm:DescribeMaintenanceWindowSchedule";
	/** [List] ssm:DescribeMaintenanceWindowTargets */
	static readonly DescribeMaintenanceWindowTargets =
		"ssm:DescribeMaintenanceWindowTargets";
	/** [List] ssm:DescribeMaintenanceWindowTasks */
	static readonly DescribeMaintenanceWindowTasks =
		"ssm:DescribeMaintenanceWindowTasks";
	/** [List] ssm:DescribeMaintenanceWindows */
	static readonly DescribeMaintenanceWindows = "ssm:DescribeMaintenanceWindows";
	/** [List] ssm:DescribeMaintenanceWindowsForTarget */
	static readonly DescribeMaintenanceWindowsForTarget =
		"ssm:DescribeMaintenanceWindowsForTarget";
	/** [Read] ssm:DescribeOpsItems */
	static readonly DescribeOpsItems = "ssm:DescribeOpsItems";
	/** [List] ssm:DescribeParameters */
	static readonly DescribeParameters = "ssm:DescribeParameters";
	/** [List] ssm:DescribePatchBaselines */
	static readonly DescribePatchBaselines = "ssm:DescribePatchBaselines";
	/** [List] ssm:DescribePatchGroupState */
	static readonly DescribePatchGroupState = "ssm:DescribePatchGroupState";
	/** [List] ssm:DescribePatchGroups */
	static readonly DescribePatchGroups = "ssm:DescribePatchGroups";
	/** [List] ssm:DescribePatchProperties */
	static readonly DescribePatchProperties = "ssm:DescribePatchProperties";
	/** [List] ssm:DescribeSessions */
	static readonly DescribeSessions = "ssm:DescribeSessions";
	/** [Write] ssm:DisassociateOpsItemRelatedItem */
	static readonly DisassociateOpsItemRelatedItem =
		"ssm:DisassociateOpsItemRelatedItem";
	/** [Read] ssm:ExecuteAPI */
	static readonly ExecuteAPI = "ssm:ExecuteAPI";
	/** [Read] ssm:GetAccessToken */
	static readonly actionGetAccessToken = "ssm:GetAccessToken";
	/** [Read] ssm:GetAutomationExecution */
	static readonly actionGetAutomationExecution = "ssm:GetAutomationExecution";
	/** [Read] ssm:GetCalendar */
	static readonly actionGetCalendar = "ssm:GetCalendar";
	/** [Read] ssm:GetCalendarState */
	static readonly actionGetCalendarState = "ssm:GetCalendarState";
	/** [Read] ssm:GetCloudConnector */
	static readonly actionGetCloudConnector = "ssm:GetCloudConnector";
	/** [Read] ssm:GetCommandInvocation */
	static readonly actionGetCommandInvocation = "ssm:GetCommandInvocation";
	/** [Read] ssm:GetConnectionStatus */
	static readonly actionGetConnectionStatus = "ssm:GetConnectionStatus";
	/** [Read] ssm:GetDefaultPatchBaseline */
	static readonly actionGetDefaultPatchBaseline = "ssm:GetDefaultPatchBaseline";
	/** [Read] ssm:GetDeployablePatchSnapshotForInstance */
	static readonly actionGetDeployablePatchSnapshotForInstance =
		"ssm:GetDeployablePatchSnapshotForInstance";
	/** [Read] ssm:GetDocument */
	static readonly actionGetDocument = "ssm:GetDocument";
	/** [Read] ssm:GetExecutionPreview */
	static readonly actionGetExecutionPreview = "ssm:GetExecutionPreview";
	/** [Read] ssm:GetInventory */
	static readonly actionGetInventory = "ssm:GetInventory";
	/** [Read] ssm:GetInventorySchema */
	static readonly actionGetInventorySchema = "ssm:GetInventorySchema";
	/** [Read] ssm:GetMaintenanceWindow */
	static readonly actionGetMaintenanceWindow = "ssm:GetMaintenanceWindow";
	/** [Read] ssm:GetMaintenanceWindowExecution */
	static readonly actionGetMaintenanceWindowExecution =
		"ssm:GetMaintenanceWindowExecution";
	/** [Read] ssm:GetMaintenanceWindowExecutionTask */
	static readonly actionGetMaintenanceWindowExecutionTask =
		"ssm:GetMaintenanceWindowExecutionTask";
	/** [Read] ssm:GetMaintenanceWindowExecutionTaskInvocation */
	static readonly actionGetMaintenanceWindowExecutionTaskInvocation =
		"ssm:GetMaintenanceWindowExecutionTaskInvocation";
	/** [Read] ssm:GetMaintenanceWindowTask */
	static readonly actionGetMaintenanceWindowTask =
		"ssm:GetMaintenanceWindowTask";
	/** [Read] ssm:GetManifest */
	static readonly actionGetManifest = "ssm:GetManifest";
	/** [Read] ssm:GetOpsItem */
	static readonly actionGetOpsItem = "ssm:GetOpsItem";
	/** [Read] ssm:GetOpsMetadata */
	static readonly actionGetOpsMetadata = "ssm:GetOpsMetadata";
	/** [Read] ssm:GetOpsSummary */
	static readonly actionGetOpsSummary = "ssm:GetOpsSummary";
	/** [Read] ssm:GetParameter */
	static readonly actionGetParameter = "ssm:GetParameter";
	/** [Read] ssm:GetParameterHistory */
	static readonly actionGetParameterHistory = "ssm:GetParameterHistory";
	/** [Read] ssm:GetParameters */
	static readonly actionGetParameters = "ssm:GetParameters";
	/** [Read] ssm:GetParametersByPath */
	static readonly actionGetParametersByPath = "ssm:GetParametersByPath";
	/** [Read] ssm:GetPatchBaseline */
	static readonly actionGetPatchBaseline = "ssm:GetPatchBaseline";
	/** [Read] ssm:GetPatchBaselineForPatchGroup */
	static readonly actionGetPatchBaselineForPatchGroup =
		"ssm:GetPatchBaselineForPatchGroup";
	/** [List] ssm:GetResourcePolicies */
	static readonly actionGetResourcePolicies = "ssm:GetResourcePolicies";
	/** [Read] ssm:GetServiceSetting */
	static readonly actionGetServiceSetting = "ssm:GetServiceSetting";
	/** [Write] ssm:LabelParameterVersion */
	static readonly LabelParameterVersion = "ssm:LabelParameterVersion";
	/** [List] ssm:ListAssociationVersions */
	static readonly ListAssociationVersions = "ssm:ListAssociationVersions";
	/** [List] ssm:ListAssociations */
	static readonly ListAssociations = "ssm:ListAssociations";
	/** [List] ssm:ListCloudConnectors */
	static readonly ListCloudConnectors = "ssm:ListCloudConnectors";
	/** [List] ssm:ListCommandInvocations */
	static readonly ListCommandInvocations = "ssm:ListCommandInvocations";
	/** [List] ssm:ListCommands */
	static readonly ListCommands = "ssm:ListCommands";
	/** [List] ssm:ListComplianceItems */
	static readonly ListComplianceItems = "ssm:ListComplianceItems";
	/** [List] ssm:ListComplianceSummaries */
	static readonly ListComplianceSummaries = "ssm:ListComplianceSummaries";
	/** [List] ssm:ListDocumentMetadataHistory */
	static readonly ListDocumentMetadataHistory =
		"ssm:ListDocumentMetadataHistory";
	/** [List] ssm:ListDocumentVersions */
	static readonly ListDocumentVersions = "ssm:ListDocumentVersions";
	/** [List] ssm:ListDocuments */
	static readonly ListDocuments = "ssm:ListDocuments";
	/** [List] ssm:ListInstanceAssociations */
	static readonly ListInstanceAssociations = "ssm:ListInstanceAssociations";
	/** [List] ssm:ListInventoryEntries */
	static readonly ListInventoryEntries = "ssm:ListInventoryEntries";
	/** [List] ssm:ListNodes */
	static readonly ListNodes = "ssm:ListNodes";
	/** [List] ssm:ListNodesSummary */
	static readonly ListNodesSummary = "ssm:ListNodesSummary";
	/** [List] ssm:ListOpsItemEvents */
	static readonly ListOpsItemEvents = "ssm:ListOpsItemEvents";
	/** [List] ssm:ListOpsItemRelatedItems */
	static readonly ListOpsItemRelatedItems = "ssm:ListOpsItemRelatedItems";
	/** [List] ssm:ListOpsMetadata */
	static readonly ListOpsMetadata = "ssm:ListOpsMetadata";
	/** [List] ssm:ListResourceComplianceSummaries */
	static readonly ListResourceComplianceSummaries =
		"ssm:ListResourceComplianceSummaries";
	/** [List] ssm:ListResourceDataSync */
	static readonly ListResourceDataSync = "ssm:ListResourceDataSync";
	/** [List] ssm:ListTagsForResource */
	static readonly ListTagsForResource = "ssm:ListTagsForResource";
	/** [PermissionManagement] ssm:ModifyDocumentPermission */
	static readonly ModifyDocumentPermission = "ssm:ModifyDocumentPermission";
	/** [Write] ssm:PutCalendar */
	static readonly PutCalendar = "ssm:PutCalendar";
	/** [Write] ssm:PutComplianceItems */
	static readonly PutComplianceItems = "ssm:PutComplianceItems";
	/** [Read] ssm:PutConfigurePackageResult */
	static readonly PutConfigurePackageResult = "ssm:PutConfigurePackageResult";
	/** [Write] ssm:PutInventory */
	static readonly PutInventory = "ssm:PutInventory";
	/** [Write] ssm:PutParameter */
	static readonly PutParameter = "ssm:PutParameter";
	/** [PermissionManagement] ssm:PutResourcePolicy */
	static readonly PutResourcePolicy = "ssm:PutResourcePolicy";
	/** [Write] ssm:RegisterDefaultPatchBaseline */
	static readonly RegisterDefaultPatchBaseline =
		"ssm:RegisterDefaultPatchBaseline";
	/** [Write] ssm:RegisterManagedInstance */
	static readonly RegisterManagedInstance = "ssm:RegisterManagedInstance";
	/** [Write] ssm:RegisterPatchBaselineForPatchGroup */
	static readonly RegisterPatchBaselineForPatchGroup =
		"ssm:RegisterPatchBaselineForPatchGroup";
	/** [Write] ssm:RegisterTargetWithMaintenanceWindow */
	static readonly RegisterTargetWithMaintenanceWindow =
		"ssm:RegisterTargetWithMaintenanceWindow";
	/** [Write] ssm:RegisterTaskWithMaintenanceWindow */
	static readonly RegisterTaskWithMaintenanceWindow =
		"ssm:RegisterTaskWithMaintenanceWindow";
	/** [Tagging] ssm:RemoveTagsFromResource */
	static readonly RemoveTagsFromResource = "ssm:RemoveTagsFromResource";
	/** [Write] ssm:RequestManagedInstanceRoleToken */
	static readonly RequestManagedInstanceRoleToken =
		"ssm:RequestManagedInstanceRoleToken";
	/** [Write] ssm:ResetServiceSetting */
	static readonly ResetServiceSetting = "ssm:ResetServiceSetting";
	/** [Write] ssm:ResumeSession */
	static readonly ResumeSession = "ssm:ResumeSession";
	/** [Write] ssm:SendAutomationSignal */
	static readonly SendAutomationSignal = "ssm:SendAutomationSignal";
	/** [Write] ssm:SendCommand */
	static readonly SendCommand = "ssm:SendCommand";
	/** [Write] ssm:StartAccessRequest */
	static readonly StartAccessRequest = "ssm:StartAccessRequest";
	/** [Write] ssm:StartAssociationsOnce */
	static readonly StartAssociationsOnce = "ssm:StartAssociationsOnce";
	/** [Write] ssm:StartAutomationExecution */
	static readonly StartAutomationExecution = "ssm:StartAutomationExecution";
	/** [Write] ssm:StartChangeRequestExecution */
	static readonly StartChangeRequestExecution =
		"ssm:StartChangeRequestExecution";
	/** [Read] ssm:StartExecutionPreview */
	static readonly StartExecutionPreview = "ssm:StartExecutionPreview";
	/** [Write] ssm:StartSession */
	static readonly StartSession = "ssm:StartSession";
	/** [Write] ssm:StopAutomationExecution */
	static readonly StopAutomationExecution = "ssm:StopAutomationExecution";
	/** [Write] ssm:TerminateSession */
	static readonly TerminateSession = "ssm:TerminateSession";
	/** [Write] ssm:UnlabelParameterVersion */
	static readonly UnlabelParameterVersion = "ssm:UnlabelParameterVersion";
	/** [Write] ssm:UpdateAssociation */
	static readonly UpdateAssociation = "ssm:UpdateAssociation";
	/** [Write] ssm:UpdateAssociationStatus */
	static readonly UpdateAssociationStatus = "ssm:UpdateAssociationStatus";
	/** [Write] ssm:UpdateCloudConnector */
	static readonly UpdateCloudConnector = "ssm:UpdateCloudConnector";
	/** [Write] ssm:UpdateDocument */
	static readonly UpdateDocument = "ssm:UpdateDocument";
	/** [Write] ssm:UpdateDocumentDefaultVersion */
	static readonly UpdateDocumentDefaultVersion =
		"ssm:UpdateDocumentDefaultVersion";
	/** [Write] ssm:UpdateDocumentMetadata */
	static readonly UpdateDocumentMetadata = "ssm:UpdateDocumentMetadata";
	/** [Write] ssm:UpdateInstanceAssociationStatus */
	static readonly UpdateInstanceAssociationStatus =
		"ssm:UpdateInstanceAssociationStatus";
	/** [Write] ssm:UpdateInstanceInformation */
	static readonly UpdateInstanceInformation = "ssm:UpdateInstanceInformation";
	/** [Write] ssm:UpdateMaintenanceWindow */
	static readonly UpdateMaintenanceWindow = "ssm:UpdateMaintenanceWindow";
	/** [Write] ssm:UpdateMaintenanceWindowTarget */
	static readonly UpdateMaintenanceWindowTarget =
		"ssm:UpdateMaintenanceWindowTarget";
	/** [Write] ssm:UpdateMaintenanceWindowTask */
	static readonly UpdateMaintenanceWindowTask =
		"ssm:UpdateMaintenanceWindowTask";
	/** [Write] ssm:UpdateManagedInstancePublicKey */
	static readonly UpdateManagedInstancePublicKey =
		"ssm:UpdateManagedInstancePublicKey";
	/** [Write] ssm:UpdateManagedInstanceRole */
	static readonly UpdateManagedInstanceRole = "ssm:UpdateManagedInstanceRole";
	/** [Write] ssm:UpdateOpsItem */
	static readonly UpdateOpsItem = "ssm:UpdateOpsItem";
	/** [Write] ssm:UpdateOpsMetadata */
	static readonly UpdateOpsMetadata = "ssm:UpdateOpsMetadata";
	/** [Write] ssm:UpdatePatchBaseline */
	static readonly UpdatePatchBaseline = "ssm:UpdatePatchBaseline";
	/** [Write] ssm:UpdateResourceDataSync */
	static readonly UpdateResourceDataSync = "ssm:UpdateResourceDataSync";
	/** [Write] ssm:UpdateServiceSetting */
	static readonly UpdateServiceSetting = "ssm:UpdateServiceSetting";
	/** [Read] ssm:ValidateCloudConnector */
	static readonly ValidateCloudConnector = "ssm:ValidateCloudConnector";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSMActions.DescribeActivations,
		SSMActions.DescribeAssociation,
		SSMActions.DescribeAssociationExecutionTargets,
		SSMActions.DescribeAssociationExecutions,
		SSMActions.DescribeAutomationExecutions,
		SSMActions.DescribeAutomationStepExecutions,
		SSMActions.DescribeAvailablePatches,
		SSMActions.DescribeDocument,
		SSMActions.DescribeDocumentParameters,
		SSMActions.DescribeDocumentPermission,
		SSMActions.DescribeEffectiveInstanceAssociations,
		SSMActions.DescribeEffectivePatchesForPatchBaseline,
		SSMActions.DescribeInstanceAssociationsStatus,
		SSMActions.DescribeInstanceInformation,
		SSMActions.DescribeInstancePatchStates,
		SSMActions.DescribeInstancePatchStatesForPatchGroup,
		SSMActions.DescribeInstancePatches,
		SSMActions.DescribeInstanceProperties,
		SSMActions.DescribeInventoryDeletions,
		SSMActions.DescribeOpsItems,
		SSMActions.ExecuteAPI,
		SSMActions.actionGetAccessToken,
		SSMActions.actionGetAutomationExecution,
		SSMActions.actionGetCalendar,
		SSMActions.actionGetCalendarState,
		SSMActions.actionGetCloudConnector,
		SSMActions.actionGetCommandInvocation,
		SSMActions.actionGetConnectionStatus,
		SSMActions.actionGetDefaultPatchBaseline,
		SSMActions.actionGetDeployablePatchSnapshotForInstance,
		SSMActions.actionGetDocument,
		SSMActions.actionGetExecutionPreview,
		SSMActions.actionGetInventory,
		SSMActions.actionGetInventorySchema,
		SSMActions.actionGetMaintenanceWindow,
		SSMActions.actionGetMaintenanceWindowExecution,
		SSMActions.actionGetMaintenanceWindowExecutionTask,
		SSMActions.actionGetMaintenanceWindowExecutionTaskInvocation,
		SSMActions.actionGetMaintenanceWindowTask,
		SSMActions.actionGetManifest,
		SSMActions.actionGetOpsItem,
		SSMActions.actionGetOpsMetadata,
		SSMActions.actionGetOpsSummary,
		SSMActions.actionGetParameter,
		SSMActions.actionGetParameterHistory,
		SSMActions.actionGetParameters,
		SSMActions.actionGetParametersByPath,
		SSMActions.actionGetPatchBaseline,
		SSMActions.actionGetPatchBaselineForPatchGroup,
		SSMActions.actionGetServiceSetting,
		SSMActions.PutConfigurePackageResult,
		SSMActions.StartExecutionPreview,
		SSMActions.ValidateCloudConnector,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSMActions.AssociateOpsItemRelatedItem,
		SSMActions.CancelCommand,
		SSMActions.CancelMaintenanceWindowExecution,
		SSMActions.CreateActivation,
		SSMActions.CreateAssociation,
		SSMActions.CreateAssociationBatch,
		SSMActions.CreateCloudConnector,
		SSMActions.CreateDocument,
		SSMActions.CreateMaintenanceWindow,
		SSMActions.CreateOpsItem,
		SSMActions.CreateOpsMetadata,
		SSMActions.CreatePatchBaseline,
		SSMActions.CreateResourceDataSync,
		SSMActions.DeleteActivation,
		SSMActions.DeleteAssociation,
		SSMActions.DeleteCloudConnector,
		SSMActions.DeleteDocument,
		SSMActions.DeleteInventory,
		SSMActions.DeleteMaintenanceWindow,
		SSMActions.DeleteOpsItem,
		SSMActions.DeleteOpsMetadata,
		SSMActions.DeleteParameter,
		SSMActions.DeleteParameters,
		SSMActions.DeletePatchBaseline,
		SSMActions.DeleteResourceDataSync,
		SSMActions.DeregisterManagedInstance,
		SSMActions.DeregisterPatchBaselineForPatchGroup,
		SSMActions.DeregisterTargetFromMaintenanceWindow,
		SSMActions.DeregisterTaskFromMaintenanceWindow,
		SSMActions.DisassociateOpsItemRelatedItem,
		SSMActions.LabelParameterVersion,
		SSMActions.PutCalendar,
		SSMActions.PutComplianceItems,
		SSMActions.PutInventory,
		SSMActions.PutParameter,
		SSMActions.RegisterDefaultPatchBaseline,
		SSMActions.RegisterManagedInstance,
		SSMActions.RegisterPatchBaselineForPatchGroup,
		SSMActions.RegisterTargetWithMaintenanceWindow,
		SSMActions.RegisterTaskWithMaintenanceWindow,
		SSMActions.RequestManagedInstanceRoleToken,
		SSMActions.ResetServiceSetting,
		SSMActions.ResumeSession,
		SSMActions.SendAutomationSignal,
		SSMActions.SendCommand,
		SSMActions.StartAccessRequest,
		SSMActions.StartAssociationsOnce,
		SSMActions.StartAutomationExecution,
		SSMActions.StartChangeRequestExecution,
		SSMActions.StartSession,
		SSMActions.StopAutomationExecution,
		SSMActions.TerminateSession,
		SSMActions.UnlabelParameterVersion,
		SSMActions.UpdateAssociation,
		SSMActions.UpdateAssociationStatus,
		SSMActions.UpdateCloudConnector,
		SSMActions.UpdateDocument,
		SSMActions.UpdateDocumentDefaultVersion,
		SSMActions.UpdateDocumentMetadata,
		SSMActions.UpdateInstanceAssociationStatus,
		SSMActions.UpdateInstanceInformation,
		SSMActions.UpdateMaintenanceWindow,
		SSMActions.UpdateMaintenanceWindowTarget,
		SSMActions.UpdateMaintenanceWindowTask,
		SSMActions.UpdateManagedInstancePublicKey,
		SSMActions.UpdateManagedInstanceRole,
		SSMActions.UpdateOpsItem,
		SSMActions.UpdateOpsMetadata,
		SSMActions.UpdatePatchBaseline,
		SSMActions.UpdateResourceDataSync,
		SSMActions.UpdateServiceSetting,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SSMActions.DescribeMaintenanceWindowExecutionTaskInvocations,
		SSMActions.DescribeMaintenanceWindowExecutionTasks,
		SSMActions.DescribeMaintenanceWindowExecutions,
		SSMActions.DescribeMaintenanceWindowSchedule,
		SSMActions.DescribeMaintenanceWindowTargets,
		SSMActions.DescribeMaintenanceWindowTasks,
		SSMActions.DescribeMaintenanceWindows,
		SSMActions.DescribeMaintenanceWindowsForTarget,
		SSMActions.DescribeParameters,
		SSMActions.DescribePatchBaselines,
		SSMActions.DescribePatchGroupState,
		SSMActions.DescribePatchGroups,
		SSMActions.DescribePatchProperties,
		SSMActions.DescribeSessions,
		SSMActions.actionGetResourcePolicies,
		SSMActions.ListAssociationVersions,
		SSMActions.ListAssociations,
		SSMActions.ListCloudConnectors,
		SSMActions.ListCommandInvocations,
		SSMActions.ListCommands,
		SSMActions.ListComplianceItems,
		SSMActions.ListComplianceSummaries,
		SSMActions.ListDocumentMetadataHistory,
		SSMActions.ListDocumentVersions,
		SSMActions.ListDocuments,
		SSMActions.ListInstanceAssociations,
		SSMActions.ListInventoryEntries,
		SSMActions.ListNodes,
		SSMActions.ListNodesSummary,
		SSMActions.ListOpsItemEvents,
		SSMActions.ListOpsItemRelatedItems,
		SSMActions.ListOpsMetadata,
		SSMActions.ListResourceComplianceSummaries,
		SSMActions.ListResourceDataSync,
		SSMActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SSMActions.DeleteResourcePolicy,
		SSMActions.ModifyDocumentPermission,
		SSMActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SSMActions.AddTagsToResource,
		SSMActions.RemoveTagsFromResource,
	];
}

/**
 * Properties for building a association ARN.
 */
export interface SSMAssociationArnProps {
	/** The AssociationId component of the ARN. */
	readonly associationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a association ARN.
 */
export interface SSMAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssociationId component. */
	readonly associationId: string;
}

/**
 * Properties for building a automation-definition ARN.
 */
export interface SSMAutomationDefinitionArnProps {
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
}

/**
 * Parsed components of a automation-definition ARN.
 */
export interface SSMAutomationDefinitionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutomationDefinitionName component. */
	readonly automationDefinitionName: string;
	/** The VersionId component. */
	readonly versionId: string;
}

/**
 * Properties for building a automation-execution ARN.
 */
export interface SSMAutomationExecutionArnProps {
	/** The AutomationExecutionId component of the ARN. */
	readonly automationExecutionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a automation-execution ARN.
 */
export interface SSMAutomationExecutionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutomationExecutionId component. */
	readonly automationExecutionId: string;
}

/**
 * Properties for building a bucket ARN.
 */
export interface SSMBucketArnProps {
	/** The BucketName component of the ARN. */
	readonly bucketName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a bucket ARN.
 */
export interface SSMBucketArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BucketName component. */
	readonly bucketName: string;
}

/**
 * Properties for building a cloud-connector ARN.
 */
export interface SSMCloudConnectorArnProps {
	/** The CloudConnectorId component of the ARN. */
	readonly cloudConnectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cloud-connector ARN.
 */
export interface SSMCloudConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CloudConnectorId component. */
	readonly cloudConnectorId: string;
}

/**
 * Properties for building a document ARN.
 */
export interface SSMDocumentArnProps {
	/** The DocumentName component of the ARN. */
	readonly documentName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a document ARN.
 */
export interface SSMDocumentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DocumentName component. */
	readonly documentName: string;
}

/**
 * Properties for building a iam-role ARN.
 */
export interface SSMIAMRoleArnProps {
	/** The RoleName component of the ARN. */
	readonly roleName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a iam-role ARN.
 */
export interface SSMIAMRoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RoleName component. */
	readonly roleName: string;
}

/**
 * Properties for building a instance ARN.
 */
export interface SSMInstanceArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance ARN.
 */
export interface SSMInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a maintenancewindow ARN.
 */
export interface SSMMaintenancewindowArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a maintenancewindow ARN.
 */
export interface SSMMaintenancewindowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a managed-instance ARN.
 */
export interface SSMManagedInstanceArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a managed-instance ARN.
 */
export interface SSMManagedInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a managed-instance-inventory ARN.
 */
export interface SSMManagedInstanceInventoryArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a managed-instance-inventory ARN.
 */
export interface SSMManagedInstanceInventoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a opsitem ARN.
 */
export interface SSMOpsitemArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a opsitem ARN.
 */
export interface SSMOpsitemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a opsitemgroup ARN.
 */
export interface SSMOpsitemgroupArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a opsitemgroup ARN.
 */
export interface SSMOpsitemgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a opsmetadata ARN.
 */
export interface SSMOpsmetadataArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a opsmetadata ARN.
 */
export interface SSMOpsmetadataArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a parameter ARN.
 */
export interface SSMParameterArnProps {
	/** The ParameterNameWithoutLeadingSlash component of the ARN. */
	readonly parameterNameWithoutLeadingSlash: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a parameter ARN.
 */
export interface SSMParameterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ParameterNameWithoutLeadingSlash component. */
	readonly parameterNameWithoutLeadingSlash: string;
}

/**
 * Properties for building a patchbaseline ARN.
 */
export interface SSMPatchbaselineArnProps {
	/** The PatchBaselineIdResourceId component of the ARN. */
	readonly patchBaselineIdResourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a patchbaseline ARN.
 */
export interface SSMPatchbaselineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PatchBaselineIdResourceId component. */
	readonly patchBaselineIdResourceId: string;
}

/**
 * Properties for building a resourcedatasync ARN.
 */
export interface SSMResourcedatasyncArnProps {
	/** The SyncName component of the ARN. */
	readonly syncName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a resourcedatasync ARN.
 */
export interface SSMResourcedatasyncArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SyncName component. */
	readonly syncName: string;
}

/**
 * Properties for building a servicesetting ARN.
 */
export interface SSMServicesettingArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a servicesetting ARN.
 */
export interface SSMServicesettingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a session ARN.
 */
export interface SSMSessionArnProps {
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a session ARN.
 */
export interface SSMSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

/**
 * Properties for building a task ARN.
 */
export interface SSMTaskArnProps {
	/** The TaskId component of the ARN. */
	readonly taskId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a task ARN.
 */
export interface SSMTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TaskId component. */
	readonly taskId: string;
}

/**
 * Properties for building a windowtarget ARN.
 */
export interface SSMWindowtargetArnProps {
	/** The WindowTargetId component of the ARN. */
	readonly windowTargetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a windowtarget ARN.
 */
export interface SSMWindowtargetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WindowTargetId component. */
	readonly windowTargetId: string;
}

/**
 * Properties for building a windowtask ARN.
 */
export interface SSMWindowtaskArnProps {
	/** The WindowTaskId component of the ARN. */
	readonly windowTaskId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a windowtask ARN.
 */
export interface SSMWindowtaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WindowTaskId component. */
	readonly windowTaskId: string;
}

const AssociationArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):association\/(?<associationId>[^:/?]+)$/;
const AutomationDefinitionArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):automation-definition\/(?<automationDefinitionName>[^:/?]+):(?<versionId>[^:/?]+)$/;
const AutomationExecutionArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):automation-execution\/(?<automationExecutionId>[^:/?]+)$/;
const BucketArnRegex = /^arn:(?<partition>[^:]+):s3:::(?<bucketName>[^:/?]+)$/;
const CloudConnectorArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):cloud-connector\/(?<cloudConnectorId>[^:/?]+)$/;
const DocumentArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):document\/(?<documentName>[^:/?]+)$/;
const IAMRoleArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role\/(?<roleName>[^:/?]+)$/;
const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)$/;
const MaintenancewindowArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):maintenancewindow\/(?<resourceId>[^:/?]+)$/;
const ManagedInstanceArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):managed-instance\/(?<instanceId>[^:/?]+)$/;
const ManagedInstanceInventoryArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):managed-instance-inventory\/(?<instanceId>[^:/?]+)$/;
const OpsitemArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):opsitem\/(?<resourceId>[^:/?]+)$/;
const OpsitemgroupArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):opsitemgroup\/default$/;
const OpsmetadataArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):opsmetadata\/(?<resourceId>[^:/?]+)$/;
const ParameterArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):parameter\/(?<parameterNameWithoutLeadingSlash>[^:/?]+)$/;
const PatchbaselineArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):patchbaseline\/(?<patchBaselineIdResourceId>[^:/?]+)$/;
const ResourcedatasyncArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):resource-data-sync\/(?<syncName>[^:/?]+)$/;
const ServicesettingArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):servicesetting\/(?<resourceId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):session\/(?<sessionId>[^:/?]+)$/;
const TaskArnRegex =
	/^arn:(?<partition>[^:]+):ecs:(?<region>[^:]*):(?<account>[^:]*):task\/(?<taskId>[^:/?]+)$/;
const WindowtargetArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):windowtarget\/(?<windowTargetId>[^:/?]+)$/;
const WindowtaskArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):windowtask\/(?<windowTaskId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ssm resources.
 */
export class SSMResources {
	/**
	 * Builds an ARN for the association resource.
	 */
	static association(props: SSMAssociationArnProps): string {
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
	static parseAssociationArn(arn: string): SSMAssociationArnComponents {
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
	static automationDefinition(props: SSMAutomationDefinitionArnProps): string {
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
	static parseAutomationDefinitionArn(
		arn: string,
	): SSMAutomationDefinitionArnComponents {
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
	static automationExecution(props: SSMAutomationExecutionArnProps): string {
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
	static parseAutomationExecutionArn(
		arn: string,
	): SSMAutomationExecutionArnComponents {
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
	static bucket(props: SSMBucketArnProps): string {
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
	static parseBucketArn(arn: string): SSMBucketArnComponents {
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
	static cloudConnector(props: SSMCloudConnectorArnProps): string {
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
	static parseCloudConnectorArn(arn: string): SSMCloudConnectorArnComponents {
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
	static document(props: SSMDocumentArnProps): string {
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
	static parseDocumentArn(arn: string): SSMDocumentArnComponents {
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
	static iamRole(props: SSMIAMRoleArnProps): string {
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
	static parseIAMRoleArn(arn: string): SSMIAMRoleArnComponents {
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
	static instance(props: SSMInstanceArnProps): string {
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
	static parseInstanceArn(arn: string): SSMInstanceArnComponents {
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
	static maintenancewindow(props: SSMMaintenancewindowArnProps): string {
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
	static parseMaintenancewindowArn(
		arn: string,
	): SSMMaintenancewindowArnComponents {
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
	static managedInstance(props: SSMManagedInstanceArnProps): string {
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
	static parseManagedInstanceArn(arn: string): SSMManagedInstanceArnComponents {
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
	static managedInstanceInventory(
		props: SSMManagedInstanceInventoryArnProps,
	): string {
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
	static parseManagedInstanceInventoryArn(
		arn: string,
	): SSMManagedInstanceInventoryArnComponents {
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
	static opsitem(props: SSMOpsitemArnProps): string {
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
	static parseOpsitemArn(arn: string): SSMOpsitemArnComponents {
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
	static opsitemgroup(props: SSMOpsitemgroupArnProps): string {
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
	static parseOpsitemgroupArn(arn: string): SSMOpsitemgroupArnComponents {
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
	static opsmetadata(props: SSMOpsmetadataArnProps): string {
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
	static parseOpsmetadataArn(arn: string): SSMOpsmetadataArnComponents {
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
	static parameter(props: SSMParameterArnProps): string {
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
	static parseParameterArn(arn: string): SSMParameterArnComponents {
		const match = ParameterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid parameter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			parameterNameWithoutLeadingSlash:
				match.groups!.parameterNameWithoutLeadingSlash,
		};
	}

	/**
	 * Builds an ARN for the patchbaseline resource.
	 */
	static patchbaseline(props: SSMPatchbaselineArnProps): string {
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
	static parsePatchbaselineArn(arn: string): SSMPatchbaselineArnComponents {
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
	static resourcedatasync(props: SSMResourcedatasyncArnProps): string {
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
	static parseResourcedatasyncArn(
		arn: string,
	): SSMResourcedatasyncArnComponents {
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
	static servicesetting(props: SSMServicesettingArnProps): string {
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
	static parseServicesettingArn(arn: string): SSMServicesettingArnComponents {
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
	static session(props: SSMSessionArnProps): string {
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
	static parseSessionArn(arn: string): SSMSessionArnComponents {
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
	static task(props: SSMTaskArnProps): string {
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
	static parseTaskArn(arn: string): SSMTaskArnComponents {
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
	static windowtarget(props: SSMWindowtargetArnProps): string {
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
	static parseWindowtargetArn(arn: string): SSMWindowtargetArnComponents {
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
	static windowtask(props: SSMWindowtaskArnProps): string {
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
	static parseWindowtaskArn(arn: string): SSMWindowtaskArnComponents {
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
	static readonly AddTagsToResource: string[] = ["ssm:AddTagsToResource"];
	/** IAM actions required for the AssociateOpsItemRelatedItem API call. */
	static readonly AssociateOpsItemRelatedItem: string[] = [
		"ssm:AssociateOpsItemRelatedItem",
	];
	/** IAM actions required for the CancelCommand API call. */
	static readonly CancelCommand: string[] = ["ssm:CancelCommand"];
	/** IAM actions required for the CancelMaintenanceWindowExecution API call. */
	static readonly CancelMaintenanceWindowExecution: string[] = [
		"ssm:CancelMaintenanceWindowExecution",
	];
	/** IAM actions required for the CreateActivation API call. */
	static readonly CreateActivation: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreateActivation",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAssociation API call. */
	static readonly CreateAssociation: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreateAssociation",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAssociationBatch API call. */
	static readonly CreateAssociationBatch: string[] = [
		"ssm:CreateAssociation",
		"ssm:CreateAssociationBatch",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateCloudConnector API call. */
	static readonly CreateCloudConnector: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreateCloudConnector",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDocument API call. */
	static readonly CreateDocument: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreateDocument",
		"ssm:GetDocument",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateMaintenanceWindow API call. */
	static readonly CreateMaintenanceWindow: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreateMaintenanceWindow",
	];
	/** IAM actions required for the CreateOpsItem API call. */
	static readonly CreateOpsItem: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreateOpsItem",
	];
	/** IAM actions required for the CreateOpsMetadata API call. */
	static readonly CreateOpsMetadata: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreateOpsMetadata",
	];
	/** IAM actions required for the CreatePatchBaseline API call. */
	static readonly CreatePatchBaseline: string[] = [
		"ssm:AddTagsToResource",
		"ssm:CreatePatchBaseline",
	];
	/** IAM actions required for the CreateResourceDataSync API call. */
	static readonly CreateResourceDataSync: string[] = [
		"ssm:CreateResourceDataSync",
	];
	/** IAM actions required for the DeleteActivation API call. */
	static readonly DeleteActivation: string[] = ["ssm:DeleteActivation"];
	/** IAM actions required for the DeleteAssociation API call. */
	static readonly DeleteAssociation: string[] = ["ssm:DeleteAssociation"];
	/** IAM actions required for the DeleteCloudConnector API call. */
	static readonly DeleteCloudConnector: string[] = ["ssm:DeleteCloudConnector"];
	/** IAM actions required for the DeleteDocument API call. */
	static readonly DeleteDocument: string[] = ["ssm:DeleteDocument"];
	/** IAM actions required for the DeleteInventory API call. */
	static readonly DeleteInventory: string[] = ["ssm:DeleteInventory"];
	/** IAM actions required for the DeleteMaintenanceWindow API call. */
	static readonly DeleteMaintenanceWindow: string[] = [
		"ssm:DeleteMaintenanceWindow",
	];
	/** IAM actions required for the DeleteOpsItem API call. */
	static readonly DeleteOpsItem: string[] = ["ssm:DeleteOpsItem"];
	/** IAM actions required for the DeleteOpsMetadata API call. */
	static readonly DeleteOpsMetadata: string[] = ["ssm:DeleteOpsMetadata"];
	/** IAM actions required for the DeleteParameter API call. */
	static readonly DeleteParameter: string[] = ["ssm:DeleteParameter"];
	/** IAM actions required for the DeleteParameters API call. */
	static readonly DeleteParameters: string[] = ["ssm:DeleteParameters"];
	/** IAM actions required for the DeletePatchBaseline API call. */
	static readonly DeletePatchBaseline: string[] = ["ssm:DeletePatchBaseline"];
	/** IAM actions required for the DeleteResourceDataSync API call. */
	static readonly DeleteResourceDataSync: string[] = [
		"ssm:DeleteResourceDataSync",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = ["ssm:DeleteResourcePolicy"];
	/** IAM actions required for the DeregisterManagedInstance API call. */
	static readonly DeregisterManagedInstance: string[] = [
		"ssm:DeregisterManagedInstance",
	];
	/** IAM actions required for the DeregisterPatchBaselineForPatchGroup API call. */
	static readonly DeregisterPatchBaselineForPatchGroup: string[] = [
		"ssm:DeregisterPatchBaselineForPatchGroup",
	];
	/** IAM actions required for the DeregisterTargetFromMaintenanceWindow API call. */
	static readonly DeregisterTargetFromMaintenanceWindow: string[] = [
		"ssm:DeregisterTargetFromMaintenanceWindow",
	];
	/** IAM actions required for the DeregisterTaskFromMaintenanceWindow API call. */
	static readonly DeregisterTaskFromMaintenanceWindow: string[] = [
		"ssm:DeregisterTaskFromMaintenanceWindow",
	];
	/** IAM actions required for the DescribeActivations API call. */
	static readonly DescribeActivations: string[] = ["ssm:DescribeActivations"];
	/** IAM actions required for the DescribeAssociation API call. */
	static readonly DescribeAssociation: string[] = ["ssm:DescribeAssociation"];
	/** IAM actions required for the DescribeAssociationExecutionTargets API call. */
	static readonly DescribeAssociationExecutionTargets: string[] = [
		"ssm:DescribeAssociationExecutionTargets",
	];
	/** IAM actions required for the DescribeAssociationExecutions API call. */
	static readonly DescribeAssociationExecutions: string[] = [
		"ssm:DescribeAssociationExecutions",
	];
	/** IAM actions required for the DescribeAutomationExecutions API call. */
	static readonly DescribeAutomationExecutions: string[] = [
		"ssm:DescribeAutomationExecutions",
	];
	/** IAM actions required for the DescribeAutomationStepExecutions API call. */
	static readonly DescribeAutomationStepExecutions: string[] = [
		"ssm:DescribeAutomationStepExecutions",
		"iam:PassRole",
	];
	/** IAM actions required for the DescribeAvailablePatches API call. */
	static readonly DescribeAvailablePatches: string[] = [
		"ssm:DescribeAvailablePatches",
	];
	/** IAM actions required for the DescribeDocument API call. */
	static readonly DescribeDocument: string[] = ["ssm:DescribeDocument"];
	/** IAM actions required for the DescribeDocumentPermission API call. */
	static readonly DescribeDocumentPermission: string[] = [
		"ssm:DescribeDocumentPermission",
	];
	/** IAM actions required for the DescribeEffectiveInstanceAssociations API call. */
	static readonly DescribeEffectiveInstanceAssociations: string[] = [
		"ssm:DescribeEffectiveInstanceAssociations",
	];
	/** IAM actions required for the DescribeEffectivePatchesForPatchBaseline API call. */
	static readonly DescribeEffectivePatchesForPatchBaseline: string[] = [
		"ssm:DescribeEffectivePatchesForPatchBaseline",
	];
	/** IAM actions required for the DescribeInstanceAssociationsStatus API call. */
	static readonly DescribeInstanceAssociationsStatus: string[] = [
		"ssm:DescribeInstanceAssociationsStatus",
	];
	/** IAM actions required for the DescribeInstanceInformation API call. */
	static readonly DescribeInstanceInformation: string[] = [
		"ssm:DescribeInstanceInformation",
	];
	/** IAM actions required for the DescribeInstancePatchStates API call. */
	static readonly DescribeInstancePatchStates: string[] = [
		"ssm:DescribeInstancePatchStates",
	];
	/** IAM actions required for the DescribeInstancePatchStatesForPatchGroup API call. */
	static readonly DescribeInstancePatchStatesForPatchGroup: string[] = [
		"ssm:DescribeInstancePatchStatesForPatchGroup",
	];
	/** IAM actions required for the DescribeInstancePatches API call. */
	static readonly DescribeInstancePatches: string[] = [
		"ssm:DescribeInstancePatches",
	];
	/** IAM actions required for the DescribeInstanceProperties API call. */
	static readonly DescribeInstanceProperties: string[] = [
		"ssm:DescribeInstanceProperties",
	];
	/** IAM actions required for the DescribeInventoryDeletions API call. */
	static readonly DescribeInventoryDeletions: string[] = [
		"ssm:DescribeInventoryDeletions",
	];
	/** IAM actions required for the DescribeMaintenanceWindowExecutionTaskInvocations API call. */
	static readonly DescribeMaintenanceWindowExecutionTaskInvocations: string[] =
		["ssm:DescribeMaintenanceWindowExecutionTaskInvocations"];
	/** IAM actions required for the DescribeMaintenanceWindowExecutionTasks API call. */
	static readonly DescribeMaintenanceWindowExecutionTasks: string[] = [
		"ssm:DescribeMaintenanceWindowExecutionTasks",
	];
	/** IAM actions required for the DescribeMaintenanceWindowExecutions API call. */
	static readonly DescribeMaintenanceWindowExecutions: string[] = [
		"ssm:DescribeMaintenanceWindowExecutions",
	];
	/** IAM actions required for the DescribeMaintenanceWindowSchedule API call. */
	static readonly DescribeMaintenanceWindowSchedule: string[] = [
		"ssm:DescribeMaintenanceWindowSchedule",
	];
	/** IAM actions required for the DescribeMaintenanceWindowTargets API call. */
	static readonly DescribeMaintenanceWindowTargets: string[] = [
		"ssm:DescribeMaintenanceWindowTargets",
	];
	/** IAM actions required for the DescribeMaintenanceWindowTasks API call. */
	static readonly DescribeMaintenanceWindowTasks: string[] = [
		"ssm:DescribeMaintenanceWindowTasks",
	];
	/** IAM actions required for the DescribeMaintenanceWindows API call. */
	static readonly DescribeMaintenanceWindows: string[] = [
		"ssm:DescribeMaintenanceWindows",
	];
	/** IAM actions required for the DescribeMaintenanceWindowsForTarget API call. */
	static readonly DescribeMaintenanceWindowsForTarget: string[] = [
		"ssm:DescribeMaintenanceWindowsForTarget",
	];
	/** IAM actions required for the DescribeOpsItems API call. */
	static readonly DescribeOpsItems: string[] = ["ssm:DescribeOpsItems"];
	/** IAM actions required for the DescribeParameters API call. */
	static readonly DescribeParameters: string[] = ["ssm:DescribeParameters"];
	/** IAM actions required for the DescribePatchBaselines API call. */
	static readonly DescribePatchBaselines: string[] = [
		"ssm:DescribePatchBaselines",
	];
	/** IAM actions required for the DescribePatchGroupState API call. */
	static readonly DescribePatchGroupState: string[] = [
		"ssm:DescribePatchGroupState",
	];
	/** IAM actions required for the DescribePatchGroups API call. */
	static readonly DescribePatchGroups: string[] = ["ssm:DescribePatchGroups"];
	/** IAM actions required for the DescribePatchProperties API call. */
	static readonly DescribePatchProperties: string[] = [
		"ssm:DescribePatchProperties",
	];
	/** IAM actions required for the DescribeSessions API call. */
	static readonly DescribeSessions: string[] = ["ssm:DescribeSessions"];
	/** IAM actions required for the DisassociateOpsItemRelatedItem API call. */
	static readonly DisassociateOpsItemRelatedItem: string[] = [
		"ssm:DisassociateOpsItemRelatedItem",
	];
	/** IAM actions required for the GetAccessToken API call. */
	static readonly opGetAccessToken: string[] = ["ssm:GetAccessToken"];
	/** IAM actions required for the GetAutomationExecution API call. */
	static readonly opGetAutomationExecution: string[] = [
		"ssm:GetAutomationExecution",
		"iam:PassRole",
	];
	/** IAM actions required for the GetCalendarState API call. */
	static readonly opGetCalendarState: string[] = ["ssm:GetCalendarState"];
	/** IAM actions required for the GetCloudConnector API call. */
	static readonly opGetCloudConnector: string[] = ["ssm:GetCloudConnector"];
	/** IAM actions required for the GetCommandInvocation API call. */
	static readonly opGetCommandInvocation: string[] = [
		"ssm:GetCommandInvocation",
	];
	/** IAM actions required for the GetConnectionStatus API call. */
	static readonly opGetConnectionStatus: string[] = ["ssm:GetConnectionStatus"];
	/** IAM actions required for the GetDefaultPatchBaseline API call. */
	static readonly opGetDefaultPatchBaseline: string[] = [
		"ssm:GetDefaultPatchBaseline",
	];
	/** IAM actions required for the GetDeployablePatchSnapshotForInstance API call. */
	static readonly opGetDeployablePatchSnapshotForInstance: string[] = [
		"ssm:GetDeployablePatchSnapshotForInstance",
	];
	/** IAM actions required for the GetDocument API call. */
	static readonly opGetDocument: string[] = ["ssm:GetDocument"];
	/** IAM actions required for the GetExecutionPreview API call. */
	static readonly opGetExecutionPreview: string[] = ["ssm:GetExecutionPreview"];
	/** IAM actions required for the GetInventory API call. */
	static readonly opGetInventory: string[] = ["ssm:GetInventory"];
	/** IAM actions required for the GetInventorySchema API call. */
	static readonly opGetInventorySchema: string[] = ["ssm:GetInventorySchema"];
	/** IAM actions required for the GetMaintenanceWindow API call. */
	static readonly opGetMaintenanceWindow: string[] = [
		"ssm:GetMaintenanceWindow",
	];
	/** IAM actions required for the GetMaintenanceWindowExecution API call. */
	static readonly opGetMaintenanceWindowExecution: string[] = [
		"ssm:GetMaintenanceWindowExecution",
	];
	/** IAM actions required for the GetMaintenanceWindowExecutionTask API call. */
	static readonly opGetMaintenanceWindowExecutionTask: string[] = [
		"ssm:GetMaintenanceWindowExecutionTask",
	];
	/** IAM actions required for the GetMaintenanceWindowExecutionTaskInvocation API call. */
	static readonly opGetMaintenanceWindowExecutionTaskInvocation: string[] = [
		"ssm:GetMaintenanceWindowExecutionTaskInvocation",
	];
	/** IAM actions required for the GetMaintenanceWindowTask API call. */
	static readonly opGetMaintenanceWindowTask: string[] = [
		"ssm:GetMaintenanceWindowTask",
	];
	/** IAM actions required for the GetOpsItem API call. */
	static readonly opGetOpsItem: string[] = ["ssm:GetOpsItem"];
	/** IAM actions required for the GetOpsMetadata API call. */
	static readonly opGetOpsMetadata: string[] = ["ssm:GetOpsMetadata"];
	/** IAM actions required for the GetOpsSummary API call. */
	static readonly opGetOpsSummary: string[] = ["ssm:GetOpsSummary"];
	/** IAM actions required for the GetParameter API call. */
	static readonly opGetParameter: string[] = ["ssm:GetParameter"];
	/** IAM actions required for the GetParameterHistory API call. */
	static readonly opGetParameterHistory: string[] = ["ssm:GetParameterHistory"];
	/** IAM actions required for the GetParameters API call. */
	static readonly opGetParameters: string[] = ["ssm:GetParameters"];
	/** IAM actions required for the GetParametersByPath API call. */
	static readonly opGetParametersByPath: string[] = ["ssm:GetParametersByPath"];
	/** IAM actions required for the GetPatchBaseline API call. */
	static readonly opGetPatchBaseline: string[] = ["ssm:GetPatchBaseline"];
	/** IAM actions required for the GetPatchBaselineForPatchGroup API call. */
	static readonly opGetPatchBaselineForPatchGroup: string[] = [
		"ssm:GetPatchBaselineForPatchGroup",
	];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly opGetResourcePolicies: string[] = ["ssm:GetResourcePolicies"];
	/** IAM actions required for the GetServiceSetting API call. */
	static readonly opGetServiceSetting: string[] = ["ssm:GetServiceSetting"];
	/** IAM actions required for the LabelParameterVersion API call. */
	static readonly LabelParameterVersion: string[] = [
		"ssm:LabelParameterVersion",
	];
	/** IAM actions required for the ListAssociationVersions API call. */
	static readonly ListAssociationVersions: string[] = [
		"ssm:ListAssociationVersions",
	];
	/** IAM actions required for the ListAssociations API call. */
	static readonly ListAssociations: string[] = ["ssm:ListAssociations"];
	/** IAM actions required for the ListCloudConnectors API call. */
	static readonly ListCloudConnectors: string[] = ["ssm:ListCloudConnectors"];
	/** IAM actions required for the ListCommandInvocations API call. */
	static readonly ListCommandInvocations: string[] = [
		"ssm:ListCommandInvocations",
	];
	/** IAM actions required for the ListCommands API call. */
	static readonly ListCommands: string[] = ["ssm:ListCommands"];
	/** IAM actions required for the ListComplianceItems API call. */
	static readonly ListComplianceItems: string[] = ["ssm:ListComplianceItems"];
	/** IAM actions required for the ListComplianceSummaries API call. */
	static readonly ListComplianceSummaries: string[] = [
		"ssm:ListComplianceSummaries",
	];
	/** IAM actions required for the ListDocumentMetadataHistory API call. */
	static readonly ListDocumentMetadataHistory: string[] = [
		"ssm:ListDocumentMetadataHistory",
	];
	/** IAM actions required for the ListDocumentVersions API call. */
	static readonly ListDocumentVersions: string[] = ["ssm:ListDocumentVersions"];
	/** IAM actions required for the ListDocuments API call. */
	static readonly ListDocuments: string[] = ["ssm:ListDocuments"];
	/** IAM actions required for the ListInventoryEntries API call. */
	static readonly ListInventoryEntries: string[] = ["ssm:ListInventoryEntries"];
	/** IAM actions required for the ListNodes API call. */
	static readonly ListNodes: string[] = ["ssm:ListNodes"];
	/** IAM actions required for the ListNodesSummary API call. */
	static readonly ListNodesSummary: string[] = ["ssm:ListNodesSummary"];
	/** IAM actions required for the ListOpsItemEvents API call. */
	static readonly ListOpsItemEvents: string[] = ["ssm:ListOpsItemEvents"];
	/** IAM actions required for the ListOpsItemRelatedItems API call. */
	static readonly ListOpsItemRelatedItems: string[] = [
		"ssm:ListOpsItemRelatedItems",
	];
	/** IAM actions required for the ListOpsMetadata API call. */
	static readonly ListOpsMetadata: string[] = ["ssm:ListOpsMetadata"];
	/** IAM actions required for the ListResourceComplianceSummaries API call. */
	static readonly ListResourceComplianceSummaries: string[] = [
		"ssm:ListResourceComplianceSummaries",
	];
	/** IAM actions required for the ListResourceDataSync API call. */
	static readonly ListResourceDataSync: string[] = ["ssm:ListResourceDataSync"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["ssm:ListTagsForResource"];
	/** IAM actions required for the ModifyDocumentPermission API call. */
	static readonly ModifyDocumentPermission: string[] = [
		"ssm:ModifyDocumentPermission",
	];
	/** IAM actions required for the PutComplianceItems API call. */
	static readonly PutComplianceItems: string[] = ["ssm:PutComplianceItems"];
	/** IAM actions required for the PutInventory API call. */
	static readonly PutInventory: string[] = ["ssm:PutInventory"];
	/** IAM actions required for the PutParameter API call. */
	static readonly PutParameter: string[] = [
		"ssm:AddTagsToResource",
		"ssm:PutParameter",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["ssm:PutResourcePolicy"];
	/** IAM actions required for the RegisterDefaultPatchBaseline API call. */
	static readonly RegisterDefaultPatchBaseline: string[] = [
		"ssm:RegisterDefaultPatchBaseline",
	];
	/** IAM actions required for the RegisterPatchBaselineForPatchGroup API call. */
	static readonly RegisterPatchBaselineForPatchGroup: string[] = [
		"ssm:RegisterPatchBaselineForPatchGroup",
	];
	/** IAM actions required for the RegisterTargetWithMaintenanceWindow API call. */
	static readonly RegisterTargetWithMaintenanceWindow: string[] = [
		"ssm:RegisterTargetWithMaintenanceWindow",
	];
	/** IAM actions required for the RegisterTaskWithMaintenanceWindow API call. */
	static readonly RegisterTaskWithMaintenanceWindow: string[] = [
		"iam:PassRole",
		"ssm:RegisterTaskWithMaintenanceWindow",
	];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly RemoveTagsFromResource: string[] = [
		"ssm:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetServiceSetting API call. */
	static readonly ResetServiceSetting: string[] = ["ssm:ResetServiceSetting"];
	/** IAM actions required for the ResumeSession API call. */
	static readonly ResumeSession: string[] = ["ssm:ResumeSession"];
	/** IAM actions required for the SendAutomationSignal API call. */
	static readonly SendAutomationSignal: string[] = ["ssm:SendAutomationSignal"];
	/** IAM actions required for the SendCommand API call. */
	static readonly SendCommand: string[] = ["iam:PassRole", "ssm:SendCommand"];
	/** IAM actions required for the StartAccessRequest API call. */
	static readonly StartAccessRequest: string[] = [
		"ssm:AddTagsToResource",
		"ssm:StartAccessRequest",
	];
	/** IAM actions required for the StartAssociationsOnce API call. */
	static readonly StartAssociationsOnce: string[] = [
		"ssm:StartAssociationsOnce",
	];
	/** IAM actions required for the StartAutomationExecution API call. */
	static readonly StartAutomationExecution: string[] = [
		"ssm:AddTagsToResource",
		"iam:PassRole",
		"ssm:StartAutomationExecution",
	];
	/** IAM actions required for the StartChangeRequestExecution API call. */
	static readonly StartChangeRequestExecution: string[] = [
		"iam:PassRole",
		"ssm:StartChangeRequestExecution",
	];
	/** IAM actions required for the StartExecutionPreview API call. */
	static readonly StartExecutionPreview: string[] = [
		"ssm:StartExecutionPreview",
	];
	/** IAM actions required for the StartSession API call. */
	static readonly StartSession: string[] = ["ssm:StartSession"];
	/** IAM actions required for the StopAutomationExecution API call. */
	static readonly StopAutomationExecution: string[] = [
		"ssm:StopAutomationExecution",
	];
	/** IAM actions required for the TerminateSession API call. */
	static readonly TerminateSession: string[] = ["ssm:TerminateSession"];
	/** IAM actions required for the UnlabelParameterVersion API call. */
	static readonly UnlabelParameterVersion: string[] = [
		"ssm:UnlabelParameterVersion",
	];
	/** IAM actions required for the UpdateAssociation API call. */
	static readonly UpdateAssociation: string[] = [
		"iam:PassRole",
		"ssm:UpdateAssociation",
	];
	/** IAM actions required for the UpdateAssociationStatus API call. */
	static readonly UpdateAssociationStatus: string[] = [
		"ssm:UpdateAssociationStatus",
	];
	/** IAM actions required for the UpdateCloudConnector API call. */
	static readonly UpdateCloudConnector: string[] = ["ssm:UpdateCloudConnector"];
	/** IAM actions required for the UpdateDocument API call. */
	static readonly UpdateDocument: string[] = [
		"iam:PassRole",
		"ssm:UpdateDocument",
	];
	/** IAM actions required for the UpdateDocumentDefaultVersion API call. */
	static readonly UpdateDocumentDefaultVersion: string[] = [
		"ssm:UpdateDocumentDefaultVersion",
	];
	/** IAM actions required for the UpdateDocumentMetadata API call. */
	static readonly UpdateDocumentMetadata: string[] = [
		"ssm:UpdateDocumentMetadata",
	];
	/** IAM actions required for the UpdateMaintenanceWindow API call. */
	static readonly UpdateMaintenanceWindow: string[] = [
		"ssm:UpdateMaintenanceWindow",
	];
	/** IAM actions required for the UpdateMaintenanceWindowTarget API call. */
	static readonly UpdateMaintenanceWindowTarget: string[] = [
		"ssm:UpdateMaintenanceWindowTarget",
	];
	/** IAM actions required for the UpdateMaintenanceWindowTask API call. */
	static readonly UpdateMaintenanceWindowTask: string[] = [
		"iam:PassRole",
		"ssm:UpdateMaintenanceWindowTask",
	];
	/** IAM actions required for the UpdateManagedInstanceRole API call. */
	static readonly UpdateManagedInstanceRole: string[] = [
		"iam:PassRole",
		"ssm:UpdateManagedInstanceRole",
	];
	/** IAM actions required for the UpdateOpsItem API call. */
	static readonly UpdateOpsItem: string[] = ["ssm:UpdateOpsItem"];
	/** IAM actions required for the UpdateOpsMetadata API call. */
	static readonly UpdateOpsMetadata: string[] = ["ssm:UpdateOpsMetadata"];
	/** IAM actions required for the UpdatePatchBaseline API call. */
	static readonly UpdatePatchBaseline: string[] = ["ssm:UpdatePatchBaseline"];
	/** IAM actions required for the UpdateResourceDataSync API call. */
	static readonly UpdateResourceDataSync: string[] = [
		"ssm:UpdateResourceDataSync",
	];
	/** IAM actions required for the UpdateServiceSetting API call. */
	static readonly UpdateServiceSetting: string[] = [
		"iam:PassRole",
		"ssm:UpdateServiceSetting",
	];
	/** IAM actions required for the ValidateCloudConnector API call. */
	static readonly ValidateCloudConnector: string[] = [
		"ssm:ValidateCloudConnector",
	];
}

/**
 * Condition key constants and builders for ssm.
 */
export class SSMConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly AddTagsToResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateActivation action. */
	static readonly CreateActivationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssociation action. */
	static readonly CreateAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssociationBatch action. */
	static readonly CreateAssociationBatchConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCloudConnector action. */
	static readonly CreateCloudConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDocument action. */
	static readonly CreateDocumentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the CreateMaintenanceWindow action. */
	static readonly CreateMaintenanceWindowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOpsItem action. */
	static readonly CreateOpsItemConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOpsMetadata action. */
	static readonly CreateOpsMetadataConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePatchBaseline action. */
	static readonly CreatePatchBaselineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResourceDataSync action. */
	static readonly CreateResourceDataSyncConditionKeys: string[] = [
		"ssm:SyncType",
	];
	/** Condition keys applicable to the DeleteAssociation action. */
	static readonly DeleteAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteCloudConnector action. */
	static readonly DeleteCloudConnectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDocument action. */
	static readonly DeleteDocumentConditionKeys: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the DeleteParameter action. */
	static readonly DeleteParameterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteParameters action. */
	static readonly DeleteParametersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceDataSync action. */
	static readonly DeleteResourceDataSyncConditionKeys: string[] = [
		"ssm:SyncType",
	];
	/** Condition keys applicable to the DeregisterManagedInstance action. */
	static readonly DeregisterManagedInstanceConditionKeys: string[] = [
		"ssm:resourceTag/tag-key",
	];
	/** Condition keys applicable to the DescribeAssociation action. */
	static readonly DescribeAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAssociationExecutionTargets action. */
	static readonly DescribeAssociationExecutionTargetsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAssociationExecutions action. */
	static readonly DescribeAssociationExecutionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeDocument action. */
	static readonly DescribeDocumentConditionKeys: string[] = [
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the DescribeDocumentPermission action. */
	static readonly DescribeDocumentPermissionConditionKeys: string[] = [
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the DescribeEffectiveInstanceAssociations action. */
	static readonly DescribeEffectiveInstanceAssociationsConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeInstanceAssociationsStatus action. */
	static readonly DescribeInstanceAssociationsStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeInstancePatchStates action. */
	static readonly DescribeInstancePatchStatesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ssm:resourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeInstancePatches action. */
	static readonly DescribeInstancePatchesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ssm:resourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAutomationExecution action. */
	static readonly actionGetAutomationExecutionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCloudConnector action. */
	static readonly actionGetCloudConnectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConnectionStatus action. */
	static readonly actionGetConnectionStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ssm:resourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDocument action. */
	static readonly actionGetDocumentConditionKeys: string[] = [
		"ssm:DocumentCategories",
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the GetParameter action. */
	static readonly actionGetParameterConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetParameterHistory action. */
	static readonly actionGetParameterHistoryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetParameters action. */
	static readonly actionGetParametersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetParametersByPath action. */
	static readonly actionGetParametersByPathConditionKeys: string[] = [
		"ssm:Recursive",
	];
	/** Condition keys applicable to the LabelParameterVersion action. */
	static readonly LabelParameterVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAssociationVersions action. */
	static readonly ListAssociationVersionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListDocumentMetadataHistory action. */
	static readonly ListDocumentMetadataHistoryConditionKeys: string[] = [
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the ListDocumentVersions action. */
	static readonly ListDocumentVersionsConditionKeys: string[] = [
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the ListInstanceAssociations action. */
	static readonly ListInstanceAssociationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListResourceDataSync action. */
	static readonly ListResourceDataSyncConditionKeys: string[] = [
		"ssm:SyncType",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyDocumentPermission action. */
	static readonly ModifyDocumentPermissionConditionKeys: string[] = [
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the PutComplianceItems action. */
	static readonly PutComplianceItemsConditionKeys: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];
	/** Condition keys applicable to the PutInventory action. */
	static readonly PutInventoryConditionKeys: string[] = [
		"ssm:InventoryTypeName",
	];
	/** Condition keys applicable to the PutParameter action. */
	static readonly PutParameterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ssm:Overwrite",
		"ssm:Policies",
	];
	/** Condition keys applicable to the RegisterManagedInstance action. */
	static readonly RegisterManagedInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ssm:NodeAccountId",
		"ssm:NodeOrgId",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly RemoveTagsFromResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RequestManagedInstanceRoleToken action. */
	static readonly RequestManagedInstanceRoleTokenConditionKeys: string[] = [
		"ssm:NodeAccountId",
		"ssm:NodeOrgId",
	];
	/** Condition keys applicable to the ResumeSession action. */
	static readonly ResumeSessionConditionKeys: string[] = [
		"ssm:resourceTag/aws:ssmmessages:session-id",
		"ssm:resourceTag/aws:ssmmessages:target-id",
	];
	/** Condition keys applicable to the SendAutomationSignal action. */
	static readonly SendAutomationSignalConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the SendCommand action. */
	static readonly SendCommandConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ssm:resourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartAccessRequest action. */
	static readonly StartAccessRequestConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartAssociationsOnce action. */
	static readonly StartAssociationsOnceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartAutomationExecution action. */
	static readonly StartAutomationExecutionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ssm:DocumentVersion",
	];
	/** Condition keys applicable to the StartChangeRequestExecution action. */
	static readonly StartChangeRequestExecutionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ssm:AutoApprove",
		"ssm:DocumentVersion",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly StartSessionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ssm:AccessRequestId",
		"ssm:SessionDocumentAccessCheck",
		"ssm:resourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopAutomationExecution action. */
	static readonly StopAutomationExecutionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TerminateSession action. */
	static readonly TerminateSessionConditionKeys: string[] = [
		"ssm:resourceTag/aws:ssmmessages:session-id",
		"ssm:resourceTag/aws:ssmmessages:target-id",
	];
	/** Condition keys applicable to the UnlabelParameterVersion action. */
	static readonly UnlabelParameterVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAssociation action. */
	static readonly UpdateAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateAssociationStatus action. */
	static readonly UpdateAssociationStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];
	/** Condition keys applicable to the UpdateCloudConnector action. */
	static readonly UpdateCloudConnectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateDocument action. */
	static readonly UpdateDocumentConditionKeys: string[] = ["ssm:DocumentType"];
	/** Condition keys applicable to the UpdateDocumentDefaultVersion action. */
	static readonly UpdateDocumentDefaultVersionConditionKeys: string[] = [
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the UpdateDocumentMetadata action. */
	static readonly UpdateDocumentMetadataConditionKeys: string[] = [
		"ssm:DocumentType",
	];
	/** Condition keys applicable to the UpdateInstanceAssociationStatus action. */
	static readonly UpdateInstanceAssociationStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];
	/** Condition keys applicable to the UpdateInstanceInformation action. */
	static readonly UpdateInstanceInformationConditionKeys: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];
	/** Condition keys applicable to the UpdateManagedInstancePublicKey action. */
	static readonly UpdateManagedInstancePublicKeyConditionKeys: string[] = [
		"ssm:NodeAccountId",
		"ssm:NodeOrgId",
	];
	/** Condition keys applicable to the UpdateManagedInstanceRole action. */
	static readonly UpdateManagedInstanceRoleConditionKeys: string[] = [
		"ssm:resourceTag/tag-key",
	];
	/** Condition keys applicable to the UpdateResourceDataSync action. */
	static readonly UpdateResourceDataSyncConditionKeys: string[] = [
		"ssm:SyncType",
	];
	/** Condition keys applicable to the ValidateCloudConnector action. */
	static readonly ValidateCloudConnectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
	/** Condition key: ssm:NodeAccountId (String) */
	static readonly NODE_ACCOUNT_ID = "ssm:NodeAccountId";
	/** Condition key: ssm:NodeOrgId (String) */
	static readonly NODE_ORG_ID = "ssm:NodeOrgId";
	/** Condition key: ssm:Overwrite (String) */
	static readonly OVERWRITE = "ssm:Overwrite";
	/** Condition key: ssm:Policies (String) */
	static readonly POLICIES = "ssm:Policies";
	/** Condition key: ssm:Recursive (String) */
	static readonly RECURSIVE = "ssm:Recursive";
	/** Condition key: ssm:SessionDocumentAccessCheck (Bool) */
	static readonly SESSION_DOCUMENT_ACCESS_CHECK =
		"ssm:SessionDocumentAccessCheck";
	/** Condition key: ssm:SyncType (String) */
	static readonly SYNC_TYPE = "ssm:SyncType";
	/** Condition key: ssm:resourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "ssm:resourceTag/${TagKey}";
	/** Condition key: ssm:resourceTag/aws:ssmmessages:session-id (String) */
	static readonly RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID =
		"ssm:resourceTag/aws:ssmmessages:session-id";
	/** Condition key: ssm:resourceTag/aws:ssmmessages:target-id (String) */
	static readonly RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID =
		"ssm:resourceTag/aws:ssmmessages:target-id";
	/** Condition key: ssm:resourceTag/tag-key (String) */
	static readonly RESOURCE_TAG_TAG_KEY = "ssm:resourceTag/tag-key";

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
	 * Generates a condition block for `ssm:AccessRequestId`.
	 */
	static accessRequestId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:AccessRequestId": value } };
	}

	/**
	 * Generates a condition block for `ssm:AutoApprove`.
	 */
	static autoApprove(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "ssm:AutoApprove": value } };
	}

	/**
	 * Generates a condition block for `ssm:DocumentCategories`.
	 */
	static documentCategories(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "ssm:DocumentCategories": values },
		};
	}

	/**
	 * Generates a condition block for `ssm:DocumentType`.
	 */
	static documentType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:DocumentType": value } };
	}

	/**
	 * Generates a condition block for `ssm:DocumentVersion`.
	 */
	static documentVersion(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ssm:DocumentVersion": values } };
	}

	/**
	 * Generates a condition block for `ssm:InventoryTypeName`.
	 */
	static inventoryTypeName(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ssm:InventoryTypeName": values } };
	}

	/**
	 * Generates a condition block for `ssm:NodeAccountId`.
	 */
	static nodeAccountId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:NodeAccountId": value } };
	}

	/**
	 * Generates a condition block for `ssm:NodeOrgId`.
	 */
	static nodeOrgId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:NodeOrgId": value } };
	}

	/**
	 * Generates a condition block for `ssm:Overwrite`.
	 */
	static overwrite(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:Overwrite": value } };
	}

	/**
	 * Generates a condition block for `ssm:Policies`.
	 */
	static policies(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:Policies": value } };
	}

	/**
	 * Generates a condition block for `ssm:Recursive`.
	 */
	static recursive(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:Recursive": value } };
	}

	/**
	 * Generates a condition block for `ssm:SessionDocumentAccessCheck`.
	 */
	static sessionDocumentAccessCheck(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "ssm:SessionDocumentAccessCheck": value } };
	}

	/**
	 * Generates a condition block for `ssm:SourceInstanceARN`.
	 */
	static sourceInstanceARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "ssm:SourceInstanceARN": value } };
	}

	/**
	 * Generates a condition block for `ssm:SyncType`.
	 */
	static syncType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:SyncType": value } };
	}

	/**
	 * Generates a condition block for `ssm:resourceTag/aws:ssmmessages:session-id`.
	 */
	static resourceTagAWSSsmmessagesSessionId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "ssm:resourceTag/aws:ssmmessages:session-id": value },
		};
	}

	/**
	 * Generates a condition block for `ssm:resourceTag/aws:ssmmessages:target-id`.
	 */
	static resourceTagAWSSsmmessagesTargetId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "ssm:resourceTag/aws:ssmmessages:target-id": value },
		};
	}

	/**
	 * Generates a condition block for `ssm:resourceTag/tag-key`.
	 */
	static resourceTagTagKey(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ssm:resourceTag/tag-key": value } };
	}
}
