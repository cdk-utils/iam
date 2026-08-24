// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rds.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rds service.
 */
export class RDSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rds";

	/** [Write] rds:AddRoleToDBCluster */
	static readonly AddRoleToDBCluster = "rds:AddRoleToDBCluster";
	/** [Write] rds:AddRoleToDBInstance */
	static readonly AddRoleToDBInstance = "rds:AddRoleToDBInstance";
	/** [Write] rds:AddSourceIdentifierToSubscription */
	static readonly AddSourceIdentifierToSubscription =
		"rds:AddSourceIdentifierToSubscription";
	/** [Tagging] rds:AddTagsToResource */
	static readonly AddTagsToResource = "rds:AddTagsToResource";
	/** [Write] rds:ApplyPendingMaintenanceAction */
	static readonly ApplyPendingMaintenanceAction =
		"rds:ApplyPendingMaintenanceAction";
	/** [PermissionManagement] rds:AuthorizeDBSecurityGroupIngress */
	static readonly AuthorizeDBSecurityGroupIngress =
		"rds:AuthorizeDBSecurityGroupIngress";
	/** [Write] rds:BacktrackDBCluster */
	static readonly BacktrackDBCluster = "rds:BacktrackDBCluster";
	/** [Write] rds:CancelExportTask */
	static readonly CancelExportTask = "rds:CancelExportTask";
	/** [Write] rds:CopyCustomDBEngineVersion */
	static readonly CopyCustomDBEngineVersion = "rds:CopyCustomDBEngineVersion";
	/** [Write] rds:CopyDBClusterParameterGroup */
	static readonly CopyDBClusterParameterGroup =
		"rds:CopyDBClusterParameterGroup";
	/** [Write] rds:CopyDBClusterSnapshot */
	static readonly CopyDBClusterSnapshot = "rds:CopyDBClusterSnapshot";
	/** [Write] rds:CopyDBParameterGroup */
	static readonly CopyDBParameterGroup = "rds:CopyDBParameterGroup";
	/** [Write] rds:CopyDBSnapshot */
	static readonly CopyDBSnapshot = "rds:CopyDBSnapshot";
	/** [Write] rds:CopyOptionGroup */
	static readonly CopyOptionGroup = "rds:CopyOptionGroup";
	/** [Write] rds:CreateBlueGreenDeployment */
	static readonly CreateBlueGreenDeployment = "rds:CreateBlueGreenDeployment";
	/** [Write] rds:CreateCustomDBEngineVersion */
	static readonly CreateCustomDBEngineVersion =
		"rds:CreateCustomDBEngineVersion";
	/** [Write] rds:CreateDBCluster */
	static readonly CreateDBCluster = "rds:CreateDBCluster";
	/** [Write] rds:CreateDBClusterEndpoint */
	static readonly CreateDBClusterEndpoint = "rds:CreateDBClusterEndpoint";
	/** [Write] rds:CreateDBClusterParameterGroup */
	static readonly CreateDBClusterParameterGroup =
		"rds:CreateDBClusterParameterGroup";
	/** [Write] rds:CreateDBClusterSnapshot */
	static readonly CreateDBClusterSnapshot = "rds:CreateDBClusterSnapshot";
	/** [Write] rds:CreateDBInstance */
	static readonly CreateDBInstance = "rds:CreateDBInstance";
	/** [Write] rds:CreateDBInstanceReadReplica */
	static readonly CreateDBInstanceReadReplica =
		"rds:CreateDBInstanceReadReplica";
	/** [Write] rds:CreateDBParameterGroup */
	static readonly CreateDBParameterGroup = "rds:CreateDBParameterGroup";
	/** [Write] rds:CreateDBProxy */
	static readonly CreateDBProxy = "rds:CreateDBProxy";
	/** [Write] rds:CreateDBProxyEndpoint */
	static readonly CreateDBProxyEndpoint = "rds:CreateDBProxyEndpoint";
	/** [Write] rds:CreateDBSecurityGroup */
	static readonly CreateDBSecurityGroup = "rds:CreateDBSecurityGroup";
	/** [Write] rds:CreateDBShardGroup */
	static readonly CreateDBShardGroup = "rds:CreateDBShardGroup";
	/** [Write] rds:CreateDBSnapshot */
	static readonly CreateDBSnapshot = "rds:CreateDBSnapshot";
	/** [Write] rds:CreateDBSubnetGroup */
	static readonly CreateDBSubnetGroup = "rds:CreateDBSubnetGroup";
	/** [Write] rds:CreateEventSubscription */
	static readonly CreateEventSubscription = "rds:CreateEventSubscription";
	/** [Write] rds:CreateGlobalCluster */
	static readonly CreateGlobalCluster = "rds:CreateGlobalCluster";
	/** [Write] rds:CreateIntegration */
	static readonly CreateIntegration = "rds:CreateIntegration";
	/** [Write] rds:CreateOptionGroup */
	static readonly CreateOptionGroup = "rds:CreateOptionGroup";
	/** [Write] rds:CreateTenantDatabase */
	static readonly CreateTenantDatabase = "rds:CreateTenantDatabase";
	/** [Write] rds:CrossRegionCommunication */
	static readonly CrossRegionCommunication = "rds:CrossRegionCommunication";
	/** [Write] rds:DeleteBlueGreenDeployment */
	static readonly DeleteBlueGreenDeployment = "rds:DeleteBlueGreenDeployment";
	/** [Write] rds:DeleteCustomDBEngineVersion */
	static readonly DeleteCustomDBEngineVersion =
		"rds:DeleteCustomDBEngineVersion";
	/** [Write] rds:DeleteDBCluster */
	static readonly DeleteDBCluster = "rds:DeleteDBCluster";
	/** [Write] rds:DeleteDBClusterAutomatedBackup */
	static readonly DeleteDBClusterAutomatedBackup =
		"rds:DeleteDBClusterAutomatedBackup";
	/** [Write] rds:DeleteDBClusterEndpoint */
	static readonly DeleteDBClusterEndpoint = "rds:DeleteDBClusterEndpoint";
	/** [Write] rds:DeleteDBClusterParameterGroup */
	static readonly DeleteDBClusterParameterGroup =
		"rds:DeleteDBClusterParameterGroup";
	/** [Write] rds:DeleteDBClusterSnapshot */
	static readonly DeleteDBClusterSnapshot = "rds:DeleteDBClusterSnapshot";
	/** [Write] rds:DeleteDBInstance */
	static readonly DeleteDBInstance = "rds:DeleteDBInstance";
	/** [Write] rds:DeleteDBInstanceAutomatedBackup */
	static readonly DeleteDBInstanceAutomatedBackup =
		"rds:DeleteDBInstanceAutomatedBackup";
	/** [Write] rds:DeleteDBParameterGroup */
	static readonly DeleteDBParameterGroup = "rds:DeleteDBParameterGroup";
	/** [Write] rds:DeleteDBProxy */
	static readonly DeleteDBProxy = "rds:DeleteDBProxy";
	/** [Write] rds:DeleteDBProxyEndpoint */
	static readonly DeleteDBProxyEndpoint = "rds:DeleteDBProxyEndpoint";
	/** [Write] rds:DeleteDBSecurityGroup */
	static readonly DeleteDBSecurityGroup = "rds:DeleteDBSecurityGroup";
	/** [Write] rds:DeleteDBShardGroup */
	static readonly DeleteDBShardGroup = "rds:DeleteDBShardGroup";
	/** [Write] rds:DeleteDBSnapshot */
	static readonly DeleteDBSnapshot = "rds:DeleteDBSnapshot";
	/** [Write] rds:DeleteDBSubnetGroup */
	static readonly DeleteDBSubnetGroup = "rds:DeleteDBSubnetGroup";
	/** [Write] rds:DeleteEventSubscription */
	static readonly DeleteEventSubscription = "rds:DeleteEventSubscription";
	/** [Write] rds:DeleteGlobalCluster */
	static readonly DeleteGlobalCluster = "rds:DeleteGlobalCluster";
	/** [Write] rds:DeleteIntegration */
	static readonly DeleteIntegration = "rds:DeleteIntegration";
	/** [Write] rds:DeleteOptionGroup */
	static readonly DeleteOptionGroup = "rds:DeleteOptionGroup";
	/** [Write] rds:DeleteTenantDatabase */
	static readonly DeleteTenantDatabase = "rds:DeleteTenantDatabase";
	/** [Write] rds:DeregisterDBProxyTargets */
	static readonly DeregisterDBProxyTargets = "rds:DeregisterDBProxyTargets";
	/** [List] rds:DescribeAccountAttributes */
	static readonly DescribeAccountAttributes = "rds:DescribeAccountAttributes";
	/** [List] rds:DescribeBlueGreenDeployments */
	static readonly DescribeBlueGreenDeployments =
		"rds:DescribeBlueGreenDeployments";
	/** [List] rds:DescribeCertificates */
	static readonly DescribeCertificates = "rds:DescribeCertificates";
	/** [List] rds:DescribeDBClusterAutomatedBackups */
	static readonly DescribeDBClusterAutomatedBackups =
		"rds:DescribeDBClusterAutomatedBackups";
	/** [List] rds:DescribeDBClusterBacktracks */
	static readonly DescribeDBClusterBacktracks =
		"rds:DescribeDBClusterBacktracks";
	/** [List] rds:DescribeDBClusterEndpoints */
	static readonly DescribeDBClusterEndpoints = "rds:DescribeDBClusterEndpoints";
	/** [List] rds:DescribeDBClusterParameterGroups */
	static readonly DescribeDBClusterParameterGroups =
		"rds:DescribeDBClusterParameterGroups";
	/** [List] rds:DescribeDBClusterParameters */
	static readonly DescribeDBClusterParameters =
		"rds:DescribeDBClusterParameters";
	/** [List] rds:DescribeDBClusterSnapshotAttributes */
	static readonly DescribeDBClusterSnapshotAttributes =
		"rds:DescribeDBClusterSnapshotAttributes";
	/** [List] rds:DescribeDBClusterSnapshots */
	static readonly DescribeDBClusterSnapshots = "rds:DescribeDBClusterSnapshots";
	/** [List] rds:DescribeDBClusters */
	static readonly DescribeDBClusters = "rds:DescribeDBClusters";
	/** [List] rds:DescribeDBEngineVersions */
	static readonly DescribeDBEngineVersions = "rds:DescribeDBEngineVersions";
	/** [List] rds:DescribeDBInstanceAutomatedBackups */
	static readonly DescribeDBInstanceAutomatedBackups =
		"rds:DescribeDBInstanceAutomatedBackups";
	/** [List] rds:DescribeDBInstances */
	static readonly DescribeDBInstances = "rds:DescribeDBInstances";
	/** [List] rds:DescribeDBLogFiles */
	static readonly DescribeDBLogFiles = "rds:DescribeDBLogFiles";
	/** [List] rds:DescribeDBMajorEngineVersions */
	static readonly DescribeDBMajorEngineVersions =
		"rds:DescribeDBMajorEngineVersions";
	/** [List] rds:DescribeDBParameterGroups */
	static readonly DescribeDBParameterGroups = "rds:DescribeDBParameterGroups";
	/** [List] rds:DescribeDBParameters */
	static readonly DescribeDBParameters = "rds:DescribeDBParameters";
	/** [List] rds:DescribeDBProxies */
	static readonly DescribeDBProxies = "rds:DescribeDBProxies";
	/** [List] rds:DescribeDBProxyEndpoints */
	static readonly DescribeDBProxyEndpoints = "rds:DescribeDBProxyEndpoints";
	/** [List] rds:DescribeDBProxyTargetGroups */
	static readonly DescribeDBProxyTargetGroups =
		"rds:DescribeDBProxyTargetGroups";
	/** [List] rds:DescribeDBProxyTargets */
	static readonly DescribeDBProxyTargets = "rds:DescribeDBProxyTargets";
	/** [List] rds:DescribeDBRecommendations */
	static readonly DescribeDBRecommendations = "rds:DescribeDBRecommendations";
	/** [List] rds:DescribeDBSecurityGroups */
	static readonly DescribeDBSecurityGroups = "rds:DescribeDBSecurityGroups";
	/** [List] rds:DescribeDBShardGroups */
	static readonly DescribeDBShardGroups = "rds:DescribeDBShardGroups";
	/** [List] rds:DescribeDBSnapshotAttributes */
	static readonly DescribeDBSnapshotAttributes =
		"rds:DescribeDBSnapshotAttributes";
	/** [List] rds:DescribeDBSnapshotTenantDatabases */
	static readonly DescribeDBSnapshotTenantDatabases =
		"rds:DescribeDBSnapshotTenantDatabases";
	/** [List] rds:DescribeDBSnapshots */
	static readonly DescribeDBSnapshots = "rds:DescribeDBSnapshots";
	/** [List] rds:DescribeDBSubnetGroups */
	static readonly DescribeDBSubnetGroups = "rds:DescribeDBSubnetGroups";
	/** [List] rds:DescribeEngineDefaultClusterParameters */
	static readonly DescribeEngineDefaultClusterParameters =
		"rds:DescribeEngineDefaultClusterParameters";
	/** [List] rds:DescribeEngineDefaultParameters */
	static readonly DescribeEngineDefaultParameters =
		"rds:DescribeEngineDefaultParameters";
	/** [List] rds:DescribeEventCategories */
	static readonly DescribeEventCategories = "rds:DescribeEventCategories";
	/** [List] rds:DescribeEventSubscriptions */
	static readonly DescribeEventSubscriptions = "rds:DescribeEventSubscriptions";
	/** [List] rds:DescribeEvents */
	static readonly DescribeEvents = "rds:DescribeEvents";
	/** [List] rds:DescribeExportTasks */
	static readonly DescribeExportTasks = "rds:DescribeExportTasks";
	/** [List] rds:DescribeGlobalClusters */
	static readonly DescribeGlobalClusters = "rds:DescribeGlobalClusters";
	/** [List] rds:DescribeIntegrations */
	static readonly DescribeIntegrations = "rds:DescribeIntegrations";
	/** [List] rds:DescribeOptionGroupOptions */
	static readonly DescribeOptionGroupOptions = "rds:DescribeOptionGroupOptions";
	/** [List] rds:DescribeOptionGroups */
	static readonly DescribeOptionGroups = "rds:DescribeOptionGroups";
	/** [List] rds:DescribeOrderableDBInstanceOptions */
	static readonly DescribeOrderableDBInstanceOptions =
		"rds:DescribeOrderableDBInstanceOptions";
	/** [List] rds:DescribePendingMaintenanceActions */
	static readonly DescribePendingMaintenanceActions =
		"rds:DescribePendingMaintenanceActions";
	/** [Read] rds:DescribeRecommendationGroups */
	static readonly DescribeRecommendationGroups =
		"rds:DescribeRecommendationGroups";
	/** [Read] rds:DescribeRecommendations */
	static readonly DescribeRecommendations = "rds:DescribeRecommendations";
	/** [List] rds:DescribeReservedDBInstances */
	static readonly DescribeReservedDBInstances =
		"rds:DescribeReservedDBInstances";
	/** [List] rds:DescribeReservedDBInstancesOfferings */
	static readonly DescribeReservedDBInstancesOfferings =
		"rds:DescribeReservedDBInstancesOfferings";
	/** [List] rds:DescribeSourceRegions */
	static readonly DescribeSourceRegions = "rds:DescribeSourceRegions";
	/** [List] rds:DescribeTenantDatabases */
	static readonly DescribeTenantDatabases = "rds:DescribeTenantDatabases";
	/** [List] rds:DescribeValidDBInstanceModifications */
	static readonly DescribeValidDBInstanceModifications =
		"rds:DescribeValidDBInstanceModifications";
	/** [Write] rds:DisableHttpEndpoint */
	static readonly DisableHttpEndpoint = "rds:DisableHttpEndpoint";
	/** [Read] rds:DownloadCompleteDBLogFile */
	static readonly DownloadCompleteDBLogFile = "rds:DownloadCompleteDBLogFile";
	/** [Read] rds:DownloadDBLogFilePortion */
	static readonly DownloadDBLogFilePortion = "rds:DownloadDBLogFilePortion";
	/** [Write] rds:EnableHttpEndpoint */
	static readonly EnableHttpEndpoint = "rds:EnableHttpEndpoint";
	/** [Write] rds:FailoverDBCluster */
	static readonly FailoverDBCluster = "rds:FailoverDBCluster";
	/** [Write] rds:FailoverGlobalCluster */
	static readonly FailoverGlobalCluster = "rds:FailoverGlobalCluster";
	/** [Read] rds:ListTagsForResource */
	static readonly ListTagsForResource = "rds:ListTagsForResource";
	/** [Write] rds:ModifyActivityStream */
	static readonly ModifyActivityStream = "rds:ModifyActivityStream";
	/** [Write] rds:ModifyCertificates */
	static readonly ModifyCertificates = "rds:ModifyCertificates";
	/** [Write] rds:ModifyCurrentDBClusterCapacity */
	static readonly ModifyCurrentDBClusterCapacity =
		"rds:ModifyCurrentDBClusterCapacity";
	/** [Write] rds:ModifyCustomDBEngineVersion */
	static readonly ModifyCustomDBEngineVersion =
		"rds:ModifyCustomDBEngineVersion";
	/** [Write] rds:ModifyDBCluster */
	static readonly ModifyDBCluster = "rds:ModifyDBCluster";
	/** [Write] rds:ModifyDBClusterEndpoint */
	static readonly ModifyDBClusterEndpoint = "rds:ModifyDBClusterEndpoint";
	/** [Write] rds:ModifyDBClusterParameterGroup */
	static readonly ModifyDBClusterParameterGroup =
		"rds:ModifyDBClusterParameterGroup";
	/** [Write] rds:ModifyDBClusterSnapshotAttribute */
	static readonly ModifyDBClusterSnapshotAttribute =
		"rds:ModifyDBClusterSnapshotAttribute";
	/** [Write] rds:ModifyDBInstance */
	static readonly ModifyDBInstance = "rds:ModifyDBInstance";
	/** [Write] rds:ModifyDBParameterGroup */
	static readonly ModifyDBParameterGroup = "rds:ModifyDBParameterGroup";
	/** [Write] rds:ModifyDBProxy */
	static readonly ModifyDBProxy = "rds:ModifyDBProxy";
	/** [Write] rds:ModifyDBProxyEndpoint */
	static readonly ModifyDBProxyEndpoint = "rds:ModifyDBProxyEndpoint";
	/** [Write] rds:ModifyDBProxyTargetGroup */
	static readonly ModifyDBProxyTargetGroup = "rds:ModifyDBProxyTargetGroup";
	/** [Write] rds:ModifyDBRecommendation */
	static readonly ModifyDBRecommendation = "rds:ModifyDBRecommendation";
	/** [Write] rds:ModifyDBShardGroup */
	static readonly ModifyDBShardGroup = "rds:ModifyDBShardGroup";
	/** [Write] rds:ModifyDBSnapshot */
	static readonly ModifyDBSnapshot = "rds:ModifyDBSnapshot";
	/** [Write] rds:ModifyDBSnapshotAttribute */
	static readonly ModifyDBSnapshotAttribute = "rds:ModifyDBSnapshotAttribute";
	/** [Write] rds:ModifyDBSubnetGroup */
	static readonly ModifyDBSubnetGroup = "rds:ModifyDBSubnetGroup";
	/** [Write] rds:ModifyEventSubscription */
	static readonly ModifyEventSubscription = "rds:ModifyEventSubscription";
	/** [Write] rds:ModifyGlobalCluster */
	static readonly ModifyGlobalCluster = "rds:ModifyGlobalCluster";
	/** [Write] rds:ModifyIntegration */
	static readonly ModifyIntegration = "rds:ModifyIntegration";
	/** [Write] rds:ModifyOptionGroup */
	static readonly ModifyOptionGroup = "rds:ModifyOptionGroup";
	/** [Write] rds:ModifyRecommendation */
	static readonly ModifyRecommendation = "rds:ModifyRecommendation";
	/** [Write] rds:ModifyTenantDatabase */
	static readonly ModifyTenantDatabase = "rds:ModifyTenantDatabase";
	/** [Write] rds:PromoteReadReplica */
	static readonly PromoteReadReplica = "rds:PromoteReadReplica";
	/** [Write] rds:PromoteReadReplicaDBCluster */
	static readonly PromoteReadReplicaDBCluster =
		"rds:PromoteReadReplicaDBCluster";
	/** [Write] rds:PurchaseReservedDBInstancesOffering */
	static readonly PurchaseReservedDBInstancesOffering =
		"rds:PurchaseReservedDBInstancesOffering";
	/** [Write] rds:RebootDBCluster */
	static readonly RebootDBCluster = "rds:RebootDBCluster";
	/** [Write] rds:RebootDBInstance */
	static readonly RebootDBInstance = "rds:RebootDBInstance";
	/** [Write] rds:RebootDBShardGroup */
	static readonly RebootDBShardGroup = "rds:RebootDBShardGroup";
	/** [Write] rds:RegisterDBProxyTargets */
	static readonly RegisterDBProxyTargets = "rds:RegisterDBProxyTargets";
	/** [Write] rds:RemoveFromGlobalCluster */
	static readonly RemoveFromGlobalCluster = "rds:RemoveFromGlobalCluster";
	/** [Write] rds:RemoveRoleFromDBCluster */
	static readonly RemoveRoleFromDBCluster = "rds:RemoveRoleFromDBCluster";
	/** [Write] rds:RemoveRoleFromDBInstance */
	static readonly RemoveRoleFromDBInstance = "rds:RemoveRoleFromDBInstance";
	/** [Write] rds:RemoveSourceIdentifierFromSubscription */
	static readonly RemoveSourceIdentifierFromSubscription =
		"rds:RemoveSourceIdentifierFromSubscription";
	/** [Tagging] rds:RemoveTagsFromResource */
	static readonly RemoveTagsFromResource = "rds:RemoveTagsFromResource";
	/** [Write] rds:ResetDBClusterParameterGroup */
	static readonly ResetDBClusterParameterGroup =
		"rds:ResetDBClusterParameterGroup";
	/** [Write] rds:ResetDBParameterGroup */
	static readonly ResetDBParameterGroup = "rds:ResetDBParameterGroup";
	/** [Write] rds:RestoreDBClusterFromS3 */
	static readonly RestoreDBClusterFromS3 = "rds:RestoreDBClusterFromS3";
	/** [Write] rds:RestoreDBClusterFromSnapshot */
	static readonly RestoreDBClusterFromSnapshot =
		"rds:RestoreDBClusterFromSnapshot";
	/** [Write] rds:RestoreDBClusterToPointInTime */
	static readonly RestoreDBClusterToPointInTime =
		"rds:RestoreDBClusterToPointInTime";
	/** [Write] rds:RestoreDBInstanceFromDBSnapshot */
	static readonly RestoreDBInstanceFromDBSnapshot =
		"rds:RestoreDBInstanceFromDBSnapshot";
	/** [Write] rds:RestoreDBInstanceFromS3 */
	static readonly RestoreDBInstanceFromS3 = "rds:RestoreDBInstanceFromS3";
	/** [Write] rds:RestoreDBInstanceToPointInTime */
	static readonly RestoreDBInstanceToPointInTime =
		"rds:RestoreDBInstanceToPointInTime";
	/** [Write] rds:RevokeDBSecurityGroupIngress */
	static readonly RevokeDBSecurityGroupIngress =
		"rds:RevokeDBSecurityGroupIngress";
	/** [Write] rds:StartActivityStream */
	static readonly StartActivityStream = "rds:StartActivityStream";
	/** [Write] rds:StartDBCluster */
	static readonly StartDBCluster = "rds:StartDBCluster";
	/** [Write] rds:StartDBInstance */
	static readonly StartDBInstance = "rds:StartDBInstance";
	/** [Write] rds:StartDBInstanceAutomatedBackupsReplication */
	static readonly StartDBInstanceAutomatedBackupsReplication =
		"rds:StartDBInstanceAutomatedBackupsReplication";
	/** [Write] rds:StartExportTask */
	static readonly StartExportTask = "rds:StartExportTask";
	/** [Write] rds:StopActivityStream */
	static readonly StopActivityStream = "rds:StopActivityStream";
	/** [Write] rds:StopDBCluster */
	static readonly StopDBCluster = "rds:StopDBCluster";
	/** [Write] rds:StopDBInstance */
	static readonly StopDBInstance = "rds:StopDBInstance";
	/** [Write] rds:StopDBInstanceAutomatedBackupsReplication */
	static readonly StopDBInstanceAutomatedBackupsReplication =
		"rds:StopDBInstanceAutomatedBackupsReplication";
	/** [Write] rds:SwitchoverBlueGreenDeployment */
	static readonly SwitchoverBlueGreenDeployment =
		"rds:SwitchoverBlueGreenDeployment";
	/** [Write] rds:SwitchoverGlobalCluster */
	static readonly SwitchoverGlobalCluster = "rds:SwitchoverGlobalCluster";
	/** [Write] rds:SwitchoverReadReplica */
	static readonly SwitchoverReadReplica = "rds:SwitchoverReadReplica";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RDSActions.DescribeRecommendationGroups,
		RDSActions.DescribeRecommendations,
		RDSActions.DownloadCompleteDBLogFile,
		RDSActions.DownloadDBLogFilePortion,
		RDSActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RDSActions.AddRoleToDBCluster,
		RDSActions.AddRoleToDBInstance,
		RDSActions.AddSourceIdentifierToSubscription,
		RDSActions.ApplyPendingMaintenanceAction,
		RDSActions.BacktrackDBCluster,
		RDSActions.CancelExportTask,
		RDSActions.CopyCustomDBEngineVersion,
		RDSActions.CopyDBClusterParameterGroup,
		RDSActions.CopyDBClusterSnapshot,
		RDSActions.CopyDBParameterGroup,
		RDSActions.CopyDBSnapshot,
		RDSActions.CopyOptionGroup,
		RDSActions.CreateBlueGreenDeployment,
		RDSActions.CreateCustomDBEngineVersion,
		RDSActions.CreateDBCluster,
		RDSActions.CreateDBClusterEndpoint,
		RDSActions.CreateDBClusterParameterGroup,
		RDSActions.CreateDBClusterSnapshot,
		RDSActions.CreateDBInstance,
		RDSActions.CreateDBInstanceReadReplica,
		RDSActions.CreateDBParameterGroup,
		RDSActions.CreateDBProxy,
		RDSActions.CreateDBProxyEndpoint,
		RDSActions.CreateDBSecurityGroup,
		RDSActions.CreateDBShardGroup,
		RDSActions.CreateDBSnapshot,
		RDSActions.CreateDBSubnetGroup,
		RDSActions.CreateEventSubscription,
		RDSActions.CreateGlobalCluster,
		RDSActions.CreateIntegration,
		RDSActions.CreateOptionGroup,
		RDSActions.CreateTenantDatabase,
		RDSActions.CrossRegionCommunication,
		RDSActions.DeleteBlueGreenDeployment,
		RDSActions.DeleteCustomDBEngineVersion,
		RDSActions.DeleteDBCluster,
		RDSActions.DeleteDBClusterAutomatedBackup,
		RDSActions.DeleteDBClusterEndpoint,
		RDSActions.DeleteDBClusterParameterGroup,
		RDSActions.DeleteDBClusterSnapshot,
		RDSActions.DeleteDBInstance,
		RDSActions.DeleteDBInstanceAutomatedBackup,
		RDSActions.DeleteDBParameterGroup,
		RDSActions.DeleteDBProxy,
		RDSActions.DeleteDBProxyEndpoint,
		RDSActions.DeleteDBSecurityGroup,
		RDSActions.DeleteDBShardGroup,
		RDSActions.DeleteDBSnapshot,
		RDSActions.DeleteDBSubnetGroup,
		RDSActions.DeleteEventSubscription,
		RDSActions.DeleteGlobalCluster,
		RDSActions.DeleteIntegration,
		RDSActions.DeleteOptionGroup,
		RDSActions.DeleteTenantDatabase,
		RDSActions.DeregisterDBProxyTargets,
		RDSActions.DisableHttpEndpoint,
		RDSActions.EnableHttpEndpoint,
		RDSActions.FailoverDBCluster,
		RDSActions.FailoverGlobalCluster,
		RDSActions.ModifyActivityStream,
		RDSActions.ModifyCertificates,
		RDSActions.ModifyCurrentDBClusterCapacity,
		RDSActions.ModifyCustomDBEngineVersion,
		RDSActions.ModifyDBCluster,
		RDSActions.ModifyDBClusterEndpoint,
		RDSActions.ModifyDBClusterParameterGroup,
		RDSActions.ModifyDBClusterSnapshotAttribute,
		RDSActions.ModifyDBInstance,
		RDSActions.ModifyDBParameterGroup,
		RDSActions.ModifyDBProxy,
		RDSActions.ModifyDBProxyEndpoint,
		RDSActions.ModifyDBProxyTargetGroup,
		RDSActions.ModifyDBRecommendation,
		RDSActions.ModifyDBShardGroup,
		RDSActions.ModifyDBSnapshot,
		RDSActions.ModifyDBSnapshotAttribute,
		RDSActions.ModifyDBSubnetGroup,
		RDSActions.ModifyEventSubscription,
		RDSActions.ModifyGlobalCluster,
		RDSActions.ModifyIntegration,
		RDSActions.ModifyOptionGroup,
		RDSActions.ModifyRecommendation,
		RDSActions.ModifyTenantDatabase,
		RDSActions.PromoteReadReplica,
		RDSActions.PromoteReadReplicaDBCluster,
		RDSActions.PurchaseReservedDBInstancesOffering,
		RDSActions.RebootDBCluster,
		RDSActions.RebootDBInstance,
		RDSActions.RebootDBShardGroup,
		RDSActions.RegisterDBProxyTargets,
		RDSActions.RemoveFromGlobalCluster,
		RDSActions.RemoveRoleFromDBCluster,
		RDSActions.RemoveRoleFromDBInstance,
		RDSActions.RemoveSourceIdentifierFromSubscription,
		RDSActions.ResetDBClusterParameterGroup,
		RDSActions.ResetDBParameterGroup,
		RDSActions.RestoreDBClusterFromS3,
		RDSActions.RestoreDBClusterFromSnapshot,
		RDSActions.RestoreDBClusterToPointInTime,
		RDSActions.RestoreDBInstanceFromDBSnapshot,
		RDSActions.RestoreDBInstanceFromS3,
		RDSActions.RestoreDBInstanceToPointInTime,
		RDSActions.RevokeDBSecurityGroupIngress,
		RDSActions.StartActivityStream,
		RDSActions.StartDBCluster,
		RDSActions.StartDBInstance,
		RDSActions.StartDBInstanceAutomatedBackupsReplication,
		RDSActions.StartExportTask,
		RDSActions.StopActivityStream,
		RDSActions.StopDBCluster,
		RDSActions.StopDBInstance,
		RDSActions.StopDBInstanceAutomatedBackupsReplication,
		RDSActions.SwitchoverBlueGreenDeployment,
		RDSActions.SwitchoverGlobalCluster,
		RDSActions.SwitchoverReadReplica,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RDSActions.DescribeAccountAttributes,
		RDSActions.DescribeBlueGreenDeployments,
		RDSActions.DescribeCertificates,
		RDSActions.DescribeDBClusterAutomatedBackups,
		RDSActions.DescribeDBClusterBacktracks,
		RDSActions.DescribeDBClusterEndpoints,
		RDSActions.DescribeDBClusterParameterGroups,
		RDSActions.DescribeDBClusterParameters,
		RDSActions.DescribeDBClusterSnapshotAttributes,
		RDSActions.DescribeDBClusterSnapshots,
		RDSActions.DescribeDBClusters,
		RDSActions.DescribeDBEngineVersions,
		RDSActions.DescribeDBInstanceAutomatedBackups,
		RDSActions.DescribeDBInstances,
		RDSActions.DescribeDBLogFiles,
		RDSActions.DescribeDBMajorEngineVersions,
		RDSActions.DescribeDBParameterGroups,
		RDSActions.DescribeDBParameters,
		RDSActions.DescribeDBProxies,
		RDSActions.DescribeDBProxyEndpoints,
		RDSActions.DescribeDBProxyTargetGroups,
		RDSActions.DescribeDBProxyTargets,
		RDSActions.DescribeDBRecommendations,
		RDSActions.DescribeDBSecurityGroups,
		RDSActions.DescribeDBShardGroups,
		RDSActions.DescribeDBSnapshotAttributes,
		RDSActions.DescribeDBSnapshotTenantDatabases,
		RDSActions.DescribeDBSnapshots,
		RDSActions.DescribeDBSubnetGroups,
		RDSActions.DescribeEngineDefaultClusterParameters,
		RDSActions.DescribeEngineDefaultParameters,
		RDSActions.DescribeEventCategories,
		RDSActions.DescribeEventSubscriptions,
		RDSActions.DescribeEvents,
		RDSActions.DescribeExportTasks,
		RDSActions.DescribeGlobalClusters,
		RDSActions.DescribeIntegrations,
		RDSActions.DescribeOptionGroupOptions,
		RDSActions.DescribeOptionGroups,
		RDSActions.DescribeOrderableDBInstanceOptions,
		RDSActions.DescribePendingMaintenanceActions,
		RDSActions.DescribeReservedDBInstances,
		RDSActions.DescribeReservedDBInstancesOfferings,
		RDSActions.DescribeSourceRegions,
		RDSActions.DescribeTenantDatabases,
		RDSActions.DescribeValidDBInstanceModifications,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		RDSActions.AuthorizeDBSecurityGroupIngress,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RDSActions.AddTagsToResource,
		RDSActions.RemoveTagsFromResource,
	];
}

/**
 * Properties for building a auto-backup ARN.
 */
export interface RDSAutoBackupArnProps {
	/** The DbInstanceAutomatedBackupId component of the ARN. */
	readonly dbInstanceAutomatedBackupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a auto-backup ARN.
 */
export interface RDSAutoBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbInstanceAutomatedBackupId component. */
	readonly dbInstanceAutomatedBackupId: string;
}

/**
 * Properties for building a cev ARN.
 */
export interface RDSCevArnProps {
	/** The Engine component of the ARN. */
	readonly engine: string;
	/** The EngineVersion component of the ARN. */
	readonly engineVersion: string;
	/** The CustomDbEngineVersionId component of the ARN. */
	readonly customDBEngineVersionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cev ARN.
 */
export interface RDSCevArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Engine component. */
	readonly engine: string;
	/** The EngineVersion component. */
	readonly engineVersion: string;
	/** The CustomDbEngineVersionId component. */
	readonly customDBEngineVersionId: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface RDSClusterArnProps {
	/** The DbClusterInstanceName component of the ARN. */
	readonly dbClusterInstanceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface RDSClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbClusterInstanceName component. */
	readonly dbClusterInstanceName: string;
}

/**
 * Properties for building a cluster-auto-backup ARN.
 */
export interface RDSClusterAutoBackupArnProps {
	/** The DbClusterAutomatedBackupId component of the ARN. */
	readonly dbClusterAutomatedBackupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster-auto-backup ARN.
 */
export interface RDSClusterAutoBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbClusterAutomatedBackupId component. */
	readonly dbClusterAutomatedBackupId: string;
}

/**
 * Properties for building a cluster-endpoint ARN.
 */
export interface RDSClusterEndpointArnProps {
	/** The DbClusterEndpoint component of the ARN. */
	readonly dbClusterEndpoint: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster-endpoint ARN.
 */
export interface RDSClusterEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbClusterEndpoint component. */
	readonly dbClusterEndpoint: string;
}

/**
 * Properties for building a cluster-pg ARN.
 */
export interface RDSClusterPgArnProps {
	/** The ClusterParameterGroupName component of the ARN. */
	readonly clusterParameterGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster-pg ARN.
 */
export interface RDSClusterPgArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterParameterGroupName component. */
	readonly clusterParameterGroupName: string;
}

/**
 * Properties for building a cluster-snapshot ARN.
 */
export interface RDSClusterSnapshotArnProps {
	/** The ClusterSnapshotName component of the ARN. */
	readonly clusterSnapshotName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster-snapshot ARN.
 */
export interface RDSClusterSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterSnapshotName component. */
	readonly clusterSnapshotName: string;
}

/**
 * Properties for building a db ARN.
 */
export interface RDSDBArnProps {
	/** The DbInstanceName component of the ARN. */
	readonly dbInstanceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a db ARN.
 */
export interface RDSDBArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbInstanceName component. */
	readonly dbInstanceName: string;
}

/**
 * Properties for building a deployment ARN.
 */
export interface RDSDeploymentArnProps {
	/** The BlueGreenDeploymentIdentifier component of the ARN. */
	readonly blueGreenDeploymentIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deployment ARN.
 */
export interface RDSDeploymentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BlueGreenDeploymentIdentifier component. */
	readonly blueGreenDeploymentIdentifier: string;
}

/**
 * Properties for building a es ARN.
 */
export interface RDSEsArnProps {
	/** The SubscriptionName component of the ARN. */
	readonly subscriptionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a es ARN.
 */
export interface RDSEsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubscriptionName component. */
	readonly subscriptionName: string;
}

/**
 * Properties for building a global-cluster ARN.
 */
export interface RDSGlobalClusterArnProps {
	/** The GlobalCluster component of the ARN. */
	readonly globalCluster: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a global-cluster ARN.
 */
export interface RDSGlobalClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GlobalCluster component. */
	readonly globalCluster: string;
}

/**
 * Properties for building a integration ARN.
 */
export interface RDSIntegrationArnProps {
	/** The IntegrationIdentifier component of the ARN. */
	readonly integrationIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a integration ARN.
 */
export interface RDSIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IntegrationIdentifier component. */
	readonly integrationIdentifier: string;
}

/**
 * Properties for building a og ARN.
 */
export interface RDSOgArnProps {
	/** The OptionGroupName component of the ARN. */
	readonly optionGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a og ARN.
 */
export interface RDSOgArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OptionGroupName component. */
	readonly optionGroupName: string;
}

/**
 * Properties for building a pg ARN.
 */
export interface RDSPgArnProps {
	/** The ParameterGroupName component of the ARN. */
	readonly parameterGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a pg ARN.
 */
export interface RDSPgArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ParameterGroupName component. */
	readonly parameterGroupName: string;
}

/**
 * Properties for building a proxy ARN.
 */
export interface RDSProxyArnProps {
	/** The DbProxyId component of the ARN. */
	readonly dbProxyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a proxy ARN.
 */
export interface RDSProxyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbProxyId component. */
	readonly dbProxyId: string;
}

/**
 * Properties for building a proxy-endpoint ARN.
 */
export interface RDSProxyEndpointArnProps {
	/** The DbProxyEndpointId component of the ARN. */
	readonly dbProxyEndpointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a proxy-endpoint ARN.
 */
export interface RDSProxyEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbProxyEndpointId component. */
	readonly dbProxyEndpointId: string;
}

/**
 * Properties for building a ri ARN.
 */
export interface RDSRiArnProps {
	/** The ReservedDbInstanceName component of the ARN. */
	readonly reservedDBInstanceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ri ARN.
 */
export interface RDSRiArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReservedDbInstanceName component. */
	readonly reservedDBInstanceName: string;
}

/**
 * Properties for building a secgrp ARN.
 */
export interface RDSSecgrpArnProps {
	/** The SecurityGroupName component of the ARN. */
	readonly securityGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a secgrp ARN.
 */
export interface RDSSecgrpArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SecurityGroupName component. */
	readonly securityGroupName: string;
}

/**
 * Properties for building a shardgrp ARN.
 */
export interface RDSShardgrpArnProps {
	/** The DbShardGroupResourceId component of the ARN. */
	readonly dbShardGroupResourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a shardgrp ARN.
 */
export interface RDSShardgrpArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbShardGroupResourceId component. */
	readonly dbShardGroupResourceId: string;
}

/**
 * Properties for building a snapshot ARN.
 */
export interface RDSSnapshotArnProps {
	/** The SnapshotName component of the ARN. */
	readonly snapshotName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a snapshot ARN.
 */
export interface RDSSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SnapshotName component. */
	readonly snapshotName: string;
}

/**
 * Properties for building a snapshot-tenant-database ARN.
 */
export interface RDSSnapshotTenantDatabaseArnProps {
	/** The SnapshotName component of the ARN. */
	readonly snapshotName: string;
	/** The TenantResourceId component of the ARN. */
	readonly tenantResourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a snapshot-tenant-database ARN.
 */
export interface RDSSnapshotTenantDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SnapshotName component. */
	readonly snapshotName: string;
	/** The TenantResourceId component. */
	readonly tenantResourceId: string;
}

/**
 * Properties for building a subgrp ARN.
 */
export interface RDSSubgrpArnProps {
	/** The SubnetGroupName component of the ARN. */
	readonly subnetGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subgrp ARN.
 */
export interface RDSSubgrpArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubnetGroupName component. */
	readonly subnetGroupName: string;
}

/**
 * Properties for building a target-group ARN.
 */
export interface RDSTargetGroupArnProps {
	/** The TargetGroupId component of the ARN. */
	readonly targetGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a target-group ARN.
 */
export interface RDSTargetGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TargetGroupId component. */
	readonly targetGroupId: string;
}

/**
 * Properties for building a tenant-database ARN.
 */
export interface RDSTenantDatabaseArnProps {
	/** The TenantResourceId component of the ARN. */
	readonly tenantResourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tenant-database ARN.
 */
export interface RDSTenantDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TenantResourceId component. */
	readonly tenantResourceId: string;
}

const AutoBackupArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):auto-backup:(?<dbInstanceAutomatedBackupId>[^:/?]+)$/;
const CevArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cev:(?<engine>[^:/?]+)\/(?<engineVersion>[^:/?]+)\/(?<customDBEngineVersionId>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<dbClusterInstanceName>[^:/?]+)$/;
const ClusterAutoBackupArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-auto-backup:(?<dbClusterAutomatedBackupId>[^:/?]+)$/;
const ClusterEndpointArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-endpoint:(?<dbClusterEndpoint>[^:/?]+)$/;
const ClusterPgArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-pg:(?<clusterParameterGroupName>[^:/?]+)$/;
const ClusterSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-snapshot:(?<clusterSnapshotName>[^:/?]+)$/;
const DBArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):db:(?<dbInstanceName>[^:/?]+)$/;
const DeploymentArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):deployment:(?<blueGreenDeploymentIdentifier>[^:/?]+)$/;
const EsArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):es:(?<subscriptionName>[^:/?]+)$/;
const GlobalClusterArnRegex =
	/^arn:(?<partition>[^:]+):rds::(?<account>[^:]*):global-cluster:(?<globalCluster>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):integration:(?<integrationIdentifier>[^:/?]+)$/;
const OgArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):og:(?<optionGroupName>[^:/?]+)$/;
const PgArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):pg:(?<parameterGroupName>[^:/?]+)$/;
const ProxyArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):db-proxy:(?<dbProxyId>[^:/?]+)$/;
const ProxyEndpointArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):db-proxy-endpoint:(?<dbProxyEndpointId>[^:/?]+)$/;
const RiArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):ri:(?<reservedDBInstanceName>[^:/?]+)$/;
const SecgrpArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):secgrp:(?<securityGroupName>[^:/?]+)$/;
const ShardgrpArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):shard-group:(?<dbShardGroupResourceId>[^:/?]+)$/;
const SnapshotArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):snapshot:(?<snapshotName>[^:/?]+)$/;
const SnapshotTenantDatabaseArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):snapshot-tenant-database:(?<snapshotName>[^:/?]+):(?<tenantResourceId>[^:/?]+)$/;
const SubgrpArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):subgrp:(?<subnetGroupName>[^:/?]+)$/;
const TargetGroupArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):target-group:(?<targetGroupId>[^:/?]+)$/;
const TenantDatabaseArnRegex =
	/^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):tenant-database:(?<tenantResourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rds resources.
 */
export class RDSResources {
	/**
	 * Builds an ARN for the auto-backup resource.
	 */
	static autoBackup(props: RDSAutoBackupArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:auto-backup:${props.dbInstanceAutomatedBackupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the auto-backup resource.
	 */
	static isValidAutoBackupArn(arn: string): boolean {
		return AutoBackupArnRegex.test(arn);
	}

	/**
	 * Parses a auto-backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutoBackupArn(arn: string): RDSAutoBackupArnComponents {
		const match = AutoBackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid auto-backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbInstanceAutomatedBackupId: match.groups!.dbInstanceAutomatedBackupId,
		};
	}

	/**
	 * Builds an ARN for the cev resource.
	 */
	static cev(props: RDSCevArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:cev:${props.engine}/${props.engineVersion}/${props.customDBEngineVersionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cev resource.
	 */
	static isValidCevArn(arn: string): boolean {
		return CevArnRegex.test(arn);
	}

	/**
	 * Parses a cev ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCevArn(arn: string): RDSCevArnComponents {
		const match = CevArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cev ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			engine: match.groups!.engine,
			engineVersion: match.groups!.engineVersion,
			customDBEngineVersionId: match.groups!.customDBEngineVersionId,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: RDSClusterArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:cluster:${props.dbClusterInstanceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): RDSClusterArnComponents {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbClusterInstanceName: match.groups!.dbClusterInstanceName,
		};
	}

	/**
	 * Builds an ARN for the cluster-auto-backup resource.
	 */
	static clusterAutoBackup(props: RDSClusterAutoBackupArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:cluster-auto-backup:${props.dbClusterAutomatedBackupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster-auto-backup resource.
	 */
	static isValidClusterAutoBackupArn(arn: string): boolean {
		return ClusterAutoBackupArnRegex.test(arn);
	}

	/**
	 * Parses a cluster-auto-backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterAutoBackupArn(
		arn: string,
	): RDSClusterAutoBackupArnComponents {
		const match = ClusterAutoBackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster-auto-backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbClusterAutomatedBackupId: match.groups!.dbClusterAutomatedBackupId,
		};
	}

	/**
	 * Builds an ARN for the cluster-endpoint resource.
	 */
	static clusterEndpoint(props: RDSClusterEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:cluster-endpoint:${props.dbClusterEndpoint}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster-endpoint resource.
	 */
	static isValidClusterEndpointArn(arn: string): boolean {
		return ClusterEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a cluster-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterEndpointArn(arn: string): RDSClusterEndpointArnComponents {
		const match = ClusterEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbClusterEndpoint: match.groups!.dbClusterEndpoint,
		};
	}

	/**
	 * Builds an ARN for the cluster-pg resource.
	 */
	static clusterPg(props: RDSClusterPgArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:cluster-pg:${props.clusterParameterGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster-pg resource.
	 */
	static isValidClusterPgArn(arn: string): boolean {
		return ClusterPgArnRegex.test(arn);
	}

	/**
	 * Parses a cluster-pg ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterPgArn(arn: string): RDSClusterPgArnComponents {
		const match = ClusterPgArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster-pg ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterParameterGroupName: match.groups!.clusterParameterGroupName,
		};
	}

	/**
	 * Builds an ARN for the cluster-snapshot resource.
	 */
	static clusterSnapshot(props: RDSClusterSnapshotArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:cluster-snapshot:${props.clusterSnapshotName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster-snapshot resource.
	 */
	static isValidClusterSnapshotArn(arn: string): boolean {
		return ClusterSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a cluster-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterSnapshotArn(arn: string): RDSClusterSnapshotArnComponents {
		const match = ClusterSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterSnapshotName: match.groups!.clusterSnapshotName,
		};
	}

	/**
	 * Builds an ARN for the db resource.
	 */
	static db(props: RDSDBArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:db:${props.dbInstanceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the db resource.
	 */
	static isValidDBArn(arn: string): boolean {
		return DBArnRegex.test(arn);
	}

	/**
	 * Parses a db ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDBArn(arn: string): RDSDBArnComponents {
		const match = DBArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid db ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbInstanceName: match.groups!.dbInstanceName,
		};
	}

	/**
	 * Builds an ARN for the deployment resource.
	 */
	static deployment(props: RDSDeploymentArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:deployment:${props.blueGreenDeploymentIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deployment resource.
	 */
	static isValidDeploymentArn(arn: string): boolean {
		return DeploymentArnRegex.test(arn);
	}

	/**
	 * Parses a deployment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeploymentArn(arn: string): RDSDeploymentArnComponents {
		const match = DeploymentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deployment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			blueGreenDeploymentIdentifier:
				match.groups!.blueGreenDeploymentIdentifier,
		};
	}

	/**
	 * Builds an ARN for the es resource.
	 */
	static es(props: RDSEsArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:es:${props.subscriptionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the es resource.
	 */
	static isValidEsArn(arn: string): boolean {
		return EsArnRegex.test(arn);
	}

	/**
	 * Parses a es ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEsArn(arn: string): RDSEsArnComponents {
		const match = EsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid es ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subscriptionName: match.groups!.subscriptionName,
		};
	}

	/**
	 * Builds an ARN for the global-cluster resource.
	 */
	static globalCluster(props: RDSGlobalClusterArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds::${props.account ?? "*"}:global-cluster:${props.globalCluster}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the global-cluster resource.
	 */
	static isValidGlobalClusterArn(arn: string): boolean {
		return GlobalClusterArnRegex.test(arn);
	}

	/**
	 * Parses a global-cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGlobalClusterArn(arn: string): RDSGlobalClusterArnComponents {
		const match = GlobalClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid global-cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			globalCluster: match.groups!.globalCluster,
		};
	}

	/**
	 * Builds an ARN for the integration resource.
	 */
	static integration(props: RDSIntegrationArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:integration:${props.integrationIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the integration resource.
	 */
	static isValidIntegrationArn(arn: string): boolean {
		return IntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationArn(arn: string): RDSIntegrationArnComponents {
		const match = IntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			integrationIdentifier: match.groups!.integrationIdentifier,
		};
	}

	/**
	 * Builds an ARN for the og resource.
	 */
	static og(props: RDSOgArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:og:${props.optionGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the og resource.
	 */
	static isValidOgArn(arn: string): boolean {
		return OgArnRegex.test(arn);
	}

	/**
	 * Parses a og ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOgArn(arn: string): RDSOgArnComponents {
		const match = OgArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid og ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			optionGroupName: match.groups!.optionGroupName,
		};
	}

	/**
	 * Builds an ARN for the pg resource.
	 */
	static pg(props: RDSPgArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:pg:${props.parameterGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the pg resource.
	 */
	static isValidPgArn(arn: string): boolean {
		return PgArnRegex.test(arn);
	}

	/**
	 * Parses a pg ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePgArn(arn: string): RDSPgArnComponents {
		const match = PgArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid pg ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			parameterGroupName: match.groups!.parameterGroupName,
		};
	}

	/**
	 * Builds an ARN for the proxy resource.
	 */
	static proxy(props: RDSProxyArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:db-proxy:${props.dbProxyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the proxy resource.
	 */
	static isValidProxyArn(arn: string): boolean {
		return ProxyArnRegex.test(arn);
	}

	/**
	 * Parses a proxy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProxyArn(arn: string): RDSProxyArnComponents {
		const match = ProxyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid proxy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbProxyId: match.groups!.dbProxyId,
		};
	}

	/**
	 * Builds an ARN for the proxy-endpoint resource.
	 */
	static proxyEndpoint(props: RDSProxyEndpointArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:db-proxy-endpoint:${props.dbProxyEndpointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the proxy-endpoint resource.
	 */
	static isValidProxyEndpointArn(arn: string): boolean {
		return ProxyEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a proxy-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProxyEndpointArn(arn: string): RDSProxyEndpointArnComponents {
		const match = ProxyEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid proxy-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbProxyEndpointId: match.groups!.dbProxyEndpointId,
		};
	}

	/**
	 * Builds an ARN for the ri resource.
	 */
	static ri(props: RDSRiArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:ri:${props.reservedDBInstanceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ri resource.
	 */
	static isValidRiArn(arn: string): boolean {
		return RiArnRegex.test(arn);
	}

	/**
	 * Parses a ri ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRiArn(arn: string): RDSRiArnComponents {
		const match = RiArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ri ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reservedDBInstanceName: match.groups!.reservedDBInstanceName,
		};
	}

	/**
	 * Builds an ARN for the secgrp resource.
	 */
	static secgrp(props: RDSSecgrpArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:secgrp:${props.securityGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the secgrp resource.
	 */
	static isValidSecgrpArn(arn: string): boolean {
		return SecgrpArnRegex.test(arn);
	}

	/**
	 * Parses a secgrp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecgrpArn(arn: string): RDSSecgrpArnComponents {
		const match = SecgrpArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid secgrp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			securityGroupName: match.groups!.securityGroupName,
		};
	}

	/**
	 * Builds an ARN for the shardgrp resource.
	 */
	static shardgrp(props: RDSShardgrpArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:shard-group:${props.dbShardGroupResourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the shardgrp resource.
	 */
	static isValidShardgrpArn(arn: string): boolean {
		return ShardgrpArnRegex.test(arn);
	}

	/**
	 * Parses a shardgrp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseShardgrpArn(arn: string): RDSShardgrpArnComponents {
		const match = ShardgrpArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid shardgrp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbShardGroupResourceId: match.groups!.dbShardGroupResourceId,
		};
	}

	/**
	 * Builds an ARN for the snapshot resource.
	 */
	static snapshot(props: RDSSnapshotArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:snapshot:${props.snapshotName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshot resource.
	 */
	static isValidSnapshotArn(arn: string): boolean {
		return SnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotArn(arn: string): RDSSnapshotArnComponents {
		const match = SnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			snapshotName: match.groups!.snapshotName,
		};
	}

	/**
	 * Builds an ARN for the snapshot-tenant-database resource.
	 */
	static snapshotTenantDatabase(
		props: RDSSnapshotTenantDatabaseArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:snapshot-tenant-database:${props.snapshotName}:${props.tenantResourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshot-tenant-database resource.
	 */
	static isValidSnapshotTenantDatabaseArn(arn: string): boolean {
		return SnapshotTenantDatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a snapshot-tenant-database ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotTenantDatabaseArn(
		arn: string,
	): RDSSnapshotTenantDatabaseArnComponents {
		const match = SnapshotTenantDatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshot-tenant-database ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			snapshotName: match.groups!.snapshotName,
			tenantResourceId: match.groups!.tenantResourceId,
		};
	}

	/**
	 * Builds an ARN for the subgrp resource.
	 */
	static subgrp(props: RDSSubgrpArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:subgrp:${props.subnetGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subgrp resource.
	 */
	static isValidSubgrpArn(arn: string): boolean {
		return SubgrpArnRegex.test(arn);
	}

	/**
	 * Parses a subgrp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubgrpArn(arn: string): RDSSubgrpArnComponents {
		const match = SubgrpArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subgrp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subnetGroupName: match.groups!.subnetGroupName,
		};
	}

	/**
	 * Builds an ARN for the target-group resource.
	 */
	static targetGroup(props: RDSTargetGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:target-group:${props.targetGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the target-group resource.
	 */
	static isValidTargetGroupArn(arn: string): boolean {
		return TargetGroupArnRegex.test(arn);
	}

	/**
	 * Parses a target-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTargetGroupArn(arn: string): RDSTargetGroupArnComponents {
		const match = TargetGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid target-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			targetGroupId: match.groups!.targetGroupId,
		};
	}

	/**
	 * Builds an ARN for the tenant-database resource.
	 */
	static tenantDatabase(props: RDSTenantDatabaseArnProps): string {
		return `arn:${props.partition ?? "aws"}:rds:${props.region ?? "*"}:${props.account ?? "*"}:tenant-database:${props.tenantResourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tenant-database resource.
	 */
	static isValidTenantDatabaseArn(arn: string): boolean {
		return TenantDatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a tenant-database ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTenantDatabaseArn(arn: string): RDSTenantDatabaseArnComponents {
		const match = TenantDatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tenant-database ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tenantResourceId: match.groups!.tenantResourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for rds.
 */
export class RDSOperations {
	/** IAM actions required for the AddRoleToDBCluster API call. */
	static readonly AddRoleToDBCluster: string[] = [
		"rds:AddRoleToDBCluster",
		"iam:PassRole",
	];
	/** IAM actions required for the AddRoleToDBInstance API call. */
	static readonly AddRoleToDBInstance: string[] = [
		"rds:AddRoleToDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the AddSourceIdentifierToSubscription API call. */
	static readonly AddSourceIdentifierToSubscription: string[] = [
		"rds:AddSourceIdentifierToSubscription",
	];
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly AddTagsToResource: string[] = ["rds:AddTagsToResource"];
	/** IAM actions required for the ApplyPendingMaintenanceAction API call. */
	static readonly ApplyPendingMaintenanceAction: string[] = [
		"rds:ApplyPendingMaintenanceAction",
	];
	/** IAM actions required for the AuthorizeDBSecurityGroupIngress API call. */
	static readonly AuthorizeDBSecurityGroupIngress: string[] = [
		"rds:AuthorizeDBSecurityGroupIngress",
	];
	/** IAM actions required for the BacktrackDBCluster API call. */
	static readonly BacktrackDBCluster: string[] = ["rds:BacktrackDBCluster"];
	/** IAM actions required for the CancelExportTask API call. */
	static readonly CancelExportTask: string[] = ["rds:CancelExportTask"];
	/** IAM actions required for the CopyDBClusterParameterGroup API call. */
	static readonly CopyDBClusterParameterGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyDBClusterParameterGroup",
	];
	/** IAM actions required for the CopyDBClusterSnapshot API call. */
	static readonly CopyDBClusterSnapshot: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyDBClusterSnapshot",
	];
	/** IAM actions required for the CopyDBParameterGroup API call. */
	static readonly CopyDBParameterGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyDBParameterGroup",
	];
	/** IAM actions required for the CopyDBSnapshot API call. */
	static readonly CopyDBSnapshot: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyCustomDBEngineVersion",
		"rds:CopyDBSnapshot",
	];
	/** IAM actions required for the CopyOptionGroup API call. */
	static readonly CopyOptionGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyOptionGroup",
	];
	/** IAM actions required for the CreateBlueGreenDeployment API call. */
	static readonly CreateBlueGreenDeployment: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateBlueGreenDeployment",
		"rds:CreateDBCluster",
		"rds:CreateDBClusterEndpoint",
		"rds:CreateDBInstance",
		"rds:CreateDBInstanceReadReplica",
		"rds:CreateGlobalCluster",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateCustomDBEngineVersion API call. */
	static readonly CreateCustomDBEngineVersion: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateCustomDBEngineVersion",
	];
	/** IAM actions required for the CreateDBCluster API call. */
	static readonly CreateDBCluster: string[] = [
		"rds:AddRoleToDBCluster",
		"rds:AddTagsToResource",
		"rds:CreateDBCluster",
		"rds:CreateDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBClusterEndpoint API call. */
	static readonly CreateDBClusterEndpoint: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterEndpoint",
	];
	/** IAM actions required for the CreateDBClusterParameterGroup API call. */
	static readonly CreateDBClusterParameterGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterParameterGroup",
	];
	/** IAM actions required for the CreateDBClusterSnapshot API call. */
	static readonly CreateDBClusterSnapshot: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterSnapshot",
	];
	/** IAM actions required for the CreateDBInstance API call. */
	static readonly CreateDBInstance: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBInstance",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBInstanceReadReplica API call. */
	static readonly CreateDBInstanceReadReplica: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBInstanceReadReplica",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBParameterGroup API call. */
	static readonly CreateDBParameterGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBParameterGroup",
	];
	/** IAM actions required for the CreateDBProxy API call. */
	static readonly CreateDBProxy: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBProxy",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBProxyEndpoint API call. */
	static readonly CreateDBProxyEndpoint: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBProxyEndpoint",
	];
	/** IAM actions required for the CreateDBSecurityGroup API call. */
	static readonly CreateDBSecurityGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSecurityGroup",
	];
	/** IAM actions required for the CreateDBShardGroup API call. */
	static readonly CreateDBShardGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBShardGroup",
	];
	/** IAM actions required for the CreateDBSnapshot API call. */
	static readonly CreateDBSnapshot: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
	];
	/** IAM actions required for the CreateDBSubnetGroup API call. */
	static readonly CreateDBSubnetGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSubnetGroup",
	];
	/** IAM actions required for the CreateEventSubscription API call. */
	static readonly CreateEventSubscription: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateEventSubscription",
	];
	/** IAM actions required for the CreateGlobalCluster API call. */
	static readonly CreateGlobalCluster: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateGlobalCluster",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CreateIntegration: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateIntegration",
	];
	/** IAM actions required for the CreateOptionGroup API call. */
	static readonly CreateOptionGroup: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateOptionGroup",
	];
	/** IAM actions required for the CreateTenantDatabase API call. */
	static readonly CreateTenantDatabase: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateTenantDatabase",
	];
	/** IAM actions required for the DeleteBlueGreenDeployment API call. */
	static readonly DeleteBlueGreenDeployment: string[] = [
		"rds:DeleteBlueGreenDeployment",
		"rds:DeleteDBCluster",
		"rds:DeleteDBClusterEndpoint",
		"rds:DeleteDBInstance",
		"rds:DeleteGlobalCluster",
		"rds:PromoteReadReplica",
		"rds:PromoteReadReplicaDBCluster",
		"rds:RemoveFromGlobalCluster",
	];
	/** IAM actions required for the DeleteCustomDBEngineVersion API call. */
	static readonly DeleteCustomDBEngineVersion: string[] = [
		"rds:DeleteCustomDBEngineVersion",
	];
	/** IAM actions required for the DeleteDBCluster API call. */
	static readonly DeleteDBCluster: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterSnapshot",
		"rds:DeleteDBCluster",
		"rds:DeleteDBInstance",
	];
	/** IAM actions required for the DeleteDBClusterAutomatedBackup API call. */
	static readonly DeleteDBClusterAutomatedBackup: string[] = [
		"rds:DeleteDBClusterAutomatedBackup",
	];
	/** IAM actions required for the DeleteDBClusterEndpoint API call. */
	static readonly DeleteDBClusterEndpoint: string[] = [
		"rds:DeleteDBClusterEndpoint",
	];
	/** IAM actions required for the DeleteDBClusterParameterGroup API call. */
	static readonly DeleteDBClusterParameterGroup: string[] = [
		"rds:DeleteDBClusterParameterGroup",
	];
	/** IAM actions required for the DeleteDBClusterSnapshot API call. */
	static readonly DeleteDBClusterSnapshot: string[] = [
		"rds:DeleteDBClusterSnapshot",
	];
	/** IAM actions required for the DeleteDBInstance API call. */
	static readonly DeleteDBInstance: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
		"rds:DeleteDBInstance",
		"rds:DeleteTenantDatabase",
	];
	/** IAM actions required for the DeleteDBInstanceAutomatedBackup API call. */
	static readonly DeleteDBInstanceAutomatedBackup: string[] = [
		"rds:DeleteDBInstanceAutomatedBackup",
	];
	/** IAM actions required for the DeleteDBParameterGroup API call. */
	static readonly DeleteDBParameterGroup: string[] = [
		"rds:DeleteDBParameterGroup",
	];
	/** IAM actions required for the DeleteDBProxy API call. */
	static readonly DeleteDBProxy: string[] = ["rds:DeleteDBProxy"];
	/** IAM actions required for the DeleteDBProxyEndpoint API call. */
	static readonly DeleteDBProxyEndpoint: string[] = [
		"rds:DeleteDBProxyEndpoint",
	];
	/** IAM actions required for the DeleteDBSecurityGroup API call. */
	static readonly DeleteDBSecurityGroup: string[] = [
		"rds:DeleteDBSecurityGroup",
	];
	/** IAM actions required for the DeleteDBShardGroup API call. */
	static readonly DeleteDBShardGroup: string[] = ["rds:DeleteDBShardGroup"];
	/** IAM actions required for the DeleteDBSnapshot API call. */
	static readonly DeleteDBSnapshot: string[] = ["rds:DeleteDBSnapshot"];
	/** IAM actions required for the DeleteDBSubnetGroup API call. */
	static readonly DeleteDBSubnetGroup: string[] = ["rds:DeleteDBSubnetGroup"];
	/** IAM actions required for the DeleteEventSubscription API call. */
	static readonly DeleteEventSubscription: string[] = [
		"rds:DeleteEventSubscription",
	];
	/** IAM actions required for the DeleteGlobalCluster API call. */
	static readonly DeleteGlobalCluster: string[] = ["rds:DeleteGlobalCluster"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = ["rds:DeleteIntegration"];
	/** IAM actions required for the DeleteOptionGroup API call. */
	static readonly DeleteOptionGroup: string[] = ["rds:DeleteOptionGroup"];
	/** IAM actions required for the DeleteTenantDatabase API call. */
	static readonly DeleteTenantDatabase: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
		"rds:DeleteTenantDatabase",
	];
	/** IAM actions required for the DeregisterDBProxyTargets API call. */
	static readonly DeregisterDBProxyTargets: string[] = [
		"rds:DeregisterDBProxyTargets",
	];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DescribeAccountAttributes: string[] = [
		"rds:DescribeAccountAttributes",
	];
	/** IAM actions required for the DescribeBlueGreenDeployments API call. */
	static readonly DescribeBlueGreenDeployments: string[] = [
		"rds:DescribeBlueGreenDeployments",
	];
	/** IAM actions required for the DescribeCertificates API call. */
	static readonly DescribeCertificates: string[] = ["rds:DescribeCertificates"];
	/** IAM actions required for the DescribeDBClusterAutomatedBackups API call. */
	static readonly DescribeDBClusterAutomatedBackups: string[] = [
		"rds:DescribeDBClusterAutomatedBackups",
	];
	/** IAM actions required for the DescribeDBClusterBacktracks API call. */
	static readonly DescribeDBClusterBacktracks: string[] = [
		"rds:DescribeDBClusterBacktracks",
	];
	/** IAM actions required for the DescribeDBClusterEndpoints API call. */
	static readonly DescribeDBClusterEndpoints: string[] = [
		"rds:DescribeDBClusterEndpoints",
	];
	/** IAM actions required for the DescribeDBClusterParameterGroups API call. */
	static readonly DescribeDBClusterParameterGroups: string[] = [
		"rds:DescribeDBClusterParameterGroups",
	];
	/** IAM actions required for the DescribeDBClusterParameters API call. */
	static readonly DescribeDBClusterParameters: string[] = [
		"rds:DescribeDBClusterParameters",
	];
	/** IAM actions required for the DescribeDBClusterSnapshotAttributes API call. */
	static readonly DescribeDBClusterSnapshotAttributes: string[] = [
		"rds:DescribeDBClusterSnapshotAttributes",
	];
	/** IAM actions required for the DescribeDBClusterSnapshots API call. */
	static readonly DescribeDBClusterSnapshots: string[] = [
		"rds:DescribeDBClusterSnapshots",
	];
	/** IAM actions required for the DescribeDBClusters API call. */
	static readonly DescribeDBClusters: string[] = ["rds:DescribeDBClusters"];
	/** IAM actions required for the DescribeDBEngineVersions API call. */
	static readonly DescribeDBEngineVersions: string[] = [
		"rds:DescribeDBEngineVersions",
	];
	/** IAM actions required for the DescribeDBInstanceAutomatedBackups API call. */
	static readonly DescribeDBInstanceAutomatedBackups: string[] = [
		"rds:DescribeDBInstanceAutomatedBackups",
	];
	/** IAM actions required for the DescribeDBInstances API call. */
	static readonly DescribeDBInstances: string[] = ["rds:DescribeDBInstances"];
	/** IAM actions required for the DescribeDBLogFiles API call. */
	static readonly DescribeDBLogFiles: string[] = ["rds:DescribeDBLogFiles"];
	/** IAM actions required for the DescribeDBMajorEngineVersions API call. */
	static readonly DescribeDBMajorEngineVersions: string[] = [
		"rds:DescribeDBMajorEngineVersions",
	];
	/** IAM actions required for the DescribeDBParameterGroups API call. */
	static readonly DescribeDBParameterGroups: string[] = [
		"rds:DescribeDBParameterGroups",
	];
	/** IAM actions required for the DescribeDBParameters API call. */
	static readonly DescribeDBParameters: string[] = ["rds:DescribeDBParameters"];
	/** IAM actions required for the DescribeDBProxies API call. */
	static readonly DescribeDBProxies: string[] = ["rds:DescribeDBProxies"];
	/** IAM actions required for the DescribeDBProxyEndpoints API call. */
	static readonly DescribeDBProxyEndpoints: string[] = [
		"rds:DescribeDBProxyEndpoints",
	];
	/** IAM actions required for the DescribeDBProxyTargetGroups API call. */
	static readonly DescribeDBProxyTargetGroups: string[] = [
		"rds:DescribeDBProxyTargetGroups",
	];
	/** IAM actions required for the DescribeDBProxyTargets API call. */
	static readonly DescribeDBProxyTargets: string[] = [
		"rds:DescribeDBProxyTargets",
	];
	/** IAM actions required for the DescribeDBRecommendations API call. */
	static readonly DescribeDBRecommendations: string[] = [
		"rds:DescribeDBRecommendations",
	];
	/** IAM actions required for the DescribeDBSecurityGroups API call. */
	static readonly DescribeDBSecurityGroups: string[] = [
		"rds:DescribeDBSecurityGroups",
	];
	/** IAM actions required for the DescribeDBShardGroups API call. */
	static readonly DescribeDBShardGroups: string[] = [
		"rds:DescribeDBShardGroups",
	];
	/** IAM actions required for the DescribeDBSnapshotAttributes API call. */
	static readonly DescribeDBSnapshotAttributes: string[] = [
		"rds:DescribeDBSnapshotAttributes",
	];
	/** IAM actions required for the DescribeDBSnapshotTenantDatabases API call. */
	static readonly DescribeDBSnapshotTenantDatabases: string[] = [
		"rds:DescribeDBSnapshotTenantDatabases",
	];
	/** IAM actions required for the DescribeDBSnapshots API call. */
	static readonly DescribeDBSnapshots: string[] = ["rds:DescribeDBSnapshots"];
	/** IAM actions required for the DescribeDBSubnetGroups API call. */
	static readonly DescribeDBSubnetGroups: string[] = [
		"rds:DescribeDBSubnetGroups",
	];
	/** IAM actions required for the DescribeEngineDefaultClusterParameters API call. */
	static readonly DescribeEngineDefaultClusterParameters: string[] = [
		"rds:DescribeEngineDefaultClusterParameters",
	];
	/** IAM actions required for the DescribeEngineDefaultParameters API call. */
	static readonly DescribeEngineDefaultParameters: string[] = [
		"rds:DescribeEngineDefaultParameters",
	];
	/** IAM actions required for the DescribeEventCategories API call. */
	static readonly DescribeEventCategories: string[] = [
		"rds:DescribeEventCategories",
	];
	/** IAM actions required for the DescribeEventSubscriptions API call. */
	static readonly DescribeEventSubscriptions: string[] = [
		"rds:DescribeEventSubscriptions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["rds:DescribeEvents"];
	/** IAM actions required for the DescribeExportTasks API call. */
	static readonly DescribeExportTasks: string[] = ["rds:DescribeExportTasks"];
	/** IAM actions required for the DescribeGlobalClusters API call. */
	static readonly DescribeGlobalClusters: string[] = [
		"rds:DescribeGlobalClusters",
	];
	/** IAM actions required for the DescribeIntegrations API call. */
	static readonly DescribeIntegrations: string[] = ["rds:DescribeIntegrations"];
	/** IAM actions required for the DescribeOptionGroupOptions API call. */
	static readonly DescribeOptionGroupOptions: string[] = [
		"rds:DescribeOptionGroupOptions",
	];
	/** IAM actions required for the DescribeOptionGroups API call. */
	static readonly DescribeOptionGroups: string[] = ["rds:DescribeOptionGroups"];
	/** IAM actions required for the DescribeOrderableDBInstanceOptions API call. */
	static readonly DescribeOrderableDBInstanceOptions: string[] = [
		"rds:DescribeOrderableDBInstanceOptions",
	];
	/** IAM actions required for the DescribePendingMaintenanceActions API call. */
	static readonly DescribePendingMaintenanceActions: string[] = [
		"rds:DescribePendingMaintenanceActions",
	];
	/** IAM actions required for the DescribeReservedDBInstances API call. */
	static readonly DescribeReservedDBInstances: string[] = [
		"rds:DescribeReservedDBInstances",
	];
	/** IAM actions required for the DescribeReservedDBInstancesOfferings API call. */
	static readonly DescribeReservedDBInstancesOfferings: string[] = [
		"rds:DescribeReservedDBInstancesOfferings",
	];
	/** IAM actions required for the DescribeServerlessV2PlatformVersions API call. */
	static readonly DescribeServerlessV2PlatformVersions: string[] = [];
	/** IAM actions required for the DescribeSourceRegions API call. */
	static readonly DescribeSourceRegions: string[] = [
		"rds:DescribeSourceRegions",
	];
	/** IAM actions required for the DescribeTenantDatabases API call. */
	static readonly DescribeTenantDatabases: string[] = [
		"rds:DescribeTenantDatabases",
	];
	/** IAM actions required for the DescribeValidDBInstanceModifications API call. */
	static readonly DescribeValidDBInstanceModifications: string[] = [
		"rds:DescribeValidDBInstanceModifications",
	];
	/** IAM actions required for the DisableHttpEndpoint API call. */
	static readonly DisableHttpEndpoint: string[] = ["rds:DisableHttpEndpoint"];
	/** IAM actions required for the DownloadDBLogFilePortion API call. */
	static readonly DownloadDBLogFilePortion: string[] = [
		"rds:DownloadDBLogFilePortion",
	];
	/** IAM actions required for the EnableHttpEndpoint API call. */
	static readonly EnableHttpEndpoint: string[] = ["rds:EnableHttpEndpoint"];
	/** IAM actions required for the FailoverDBCluster API call. */
	static readonly FailoverDBCluster: string[] = ["rds:FailoverDBCluster"];
	/** IAM actions required for the FailoverGlobalCluster API call. */
	static readonly FailoverGlobalCluster: string[] = [
		"rds:FailoverGlobalCluster",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["rds:ListTagsForResource"];
	/** IAM actions required for the ModifyActivityStream API call. */
	static readonly ModifyActivityStream: string[] = ["rds:ModifyActivityStream"];
	/** IAM actions required for the ModifyCertificates API call. */
	static readonly ModifyCertificates: string[] = ["rds:ModifyCertificates"];
	/** IAM actions required for the ModifyCurrentDBClusterCapacity API call. */
	static readonly ModifyCurrentDBClusterCapacity: string[] = [
		"rds:ModifyCurrentDBClusterCapacity",
	];
	/** IAM actions required for the ModifyCustomDBEngineVersion API call. */
	static readonly ModifyCustomDBEngineVersion: string[] = [
		"rds:ModifyCustomDBEngineVersion",
	];
	/** IAM actions required for the ModifyDBCluster API call. */
	static readonly ModifyDBCluster: string[] = [
		"rds:ModifyDBCluster",
		"rds:ModifyDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDBClusterEndpoint API call. */
	static readonly ModifyDBClusterEndpoint: string[] = [
		"rds:ModifyDBClusterEndpoint",
	];
	/** IAM actions required for the ModifyDBClusterParameterGroup API call. */
	static readonly ModifyDBClusterParameterGroup: string[] = [
		"rds:ModifyDBClusterParameterGroup",
	];
	/** IAM actions required for the ModifyDBClusterSnapshotAttribute API call. */
	static readonly ModifyDBClusterSnapshotAttribute: string[] = [
		"rds:ModifyDBClusterSnapshotAttribute",
	];
	/** IAM actions required for the ModifyDBInstance API call. */
	static readonly ModifyDBInstance: string[] = [
		"rds:AddTagsToResource",
		"rds:ModifyDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDBParameterGroup API call. */
	static readonly ModifyDBParameterGroup: string[] = [
		"rds:ModifyDBParameterGroup",
	];
	/** IAM actions required for the ModifyDBProxy API call. */
	static readonly ModifyDBProxy: string[] = [
		"rds:ModifyDBProxy",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDBProxyEndpoint API call. */
	static readonly ModifyDBProxyEndpoint: string[] = [
		"rds:ModifyDBProxyEndpoint",
	];
	/** IAM actions required for the ModifyDBProxyTargetGroup API call. */
	static readonly ModifyDBProxyTargetGroup: string[] = [
		"rds:ModifyDBProxyTargetGroup",
	];
	/** IAM actions required for the ModifyDBRecommendation API call. */
	static readonly ModifyDBRecommendation: string[] = [
		"rds:ModifyDBRecommendation",
	];
	/** IAM actions required for the ModifyDBShardGroup API call. */
	static readonly ModifyDBShardGroup: string[] = ["rds:ModifyDBShardGroup"];
	/** IAM actions required for the ModifyDBSnapshot API call. */
	static readonly ModifyDBSnapshot: string[] = ["rds:ModifyDBSnapshot"];
	/** IAM actions required for the ModifyDBSnapshotAttribute API call. */
	static readonly ModifyDBSnapshotAttribute: string[] = [
		"rds:ModifyDBSnapshotAttribute",
	];
	/** IAM actions required for the ModifyDBSubnetGroup API call. */
	static readonly ModifyDBSubnetGroup: string[] = ["rds:ModifyDBSubnetGroup"];
	/** IAM actions required for the ModifyEventSubscription API call. */
	static readonly ModifyEventSubscription: string[] = [
		"rds:ModifyEventSubscription",
	];
	/** IAM actions required for the ModifyGlobalCluster API call. */
	static readonly ModifyGlobalCluster: string[] = ["rds:ModifyGlobalCluster"];
	/** IAM actions required for the ModifyIntegration API call. */
	static readonly ModifyIntegration: string[] = ["rds:ModifyIntegration"];
	/** IAM actions required for the ModifyOptionGroup API call. */
	static readonly ModifyOptionGroup: string[] = [
		"rds:ModifyOptionGroup",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyTenantDatabase API call. */
	static readonly ModifyTenantDatabase: string[] = ["rds:ModifyTenantDatabase"];
	/** IAM actions required for the PromoteReadReplica API call. */
	static readonly PromoteReadReplica: string[] = [
		"rds:AddTagsToResource",
		"rds:PromoteReadReplica",
	];
	/** IAM actions required for the PromoteReadReplicaDBCluster API call. */
	static readonly PromoteReadReplicaDBCluster: string[] = [
		"rds:PromoteReadReplicaDBCluster",
	];
	/** IAM actions required for the PurchaseReservedDBInstancesOffering API call. */
	static readonly PurchaseReservedDBInstancesOffering: string[] = [
		"rds:AddTagsToResource",
		"rds:PurchaseReservedDBInstancesOffering",
	];
	/** IAM actions required for the RebootDBCluster API call. */
	static readonly RebootDBCluster: string[] = [
		"rds:RebootDBCluster",
		"rds:RebootDBInstance",
	];
	/** IAM actions required for the RebootDBInstance API call. */
	static readonly RebootDBInstance: string[] = ["rds:RebootDBInstance"];
	/** IAM actions required for the RebootDBShardGroup API call. */
	static readonly RebootDBShardGroup: string[] = ["rds:RebootDBShardGroup"];
	/** IAM actions required for the RegisterDBProxyTargets API call. */
	static readonly RegisterDBProxyTargets: string[] = [
		"rds:RegisterDBProxyTargets",
	];
	/** IAM actions required for the RemoveFromGlobalCluster API call. */
	static readonly RemoveFromGlobalCluster: string[] = [
		"rds:RemoveFromGlobalCluster",
	];
	/** IAM actions required for the RemoveRoleFromDBCluster API call. */
	static readonly RemoveRoleFromDBCluster: string[] = [
		"iam:PassRole",
		"rds:RemoveRoleFromDBCluster",
	];
	/** IAM actions required for the RemoveRoleFromDBInstance API call. */
	static readonly RemoveRoleFromDBInstance: string[] = [
		"iam:PassRole",
		"rds:RemoveRoleFromDBInstance",
	];
	/** IAM actions required for the RemoveSourceIdentifierFromSubscription API call. */
	static readonly RemoveSourceIdentifierFromSubscription: string[] = [
		"rds:RemoveSourceIdentifierFromSubscription",
	];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly RemoveTagsFromResource: string[] = [
		"rds:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetDBClusterParameterGroup API call. */
	static readonly ResetDBClusterParameterGroup: string[] = [
		"rds:ResetDBClusterParameterGroup",
	];
	/** IAM actions required for the ResetDBParameterGroup API call. */
	static readonly ResetDBParameterGroup: string[] = [
		"rds:ResetDBParameterGroup",
	];
	/** IAM actions required for the RestoreDBClusterFromS3 API call. */
	static readonly RestoreDBClusterFromS3: string[] = [
		"rds:AddRoleToDBCluster",
		"rds:AddTagsToResource",
		"iam:PassRole",
		"rds:RestoreDBClusterFromS3",
	];
	/** IAM actions required for the RestoreDBClusterFromSnapshot API call. */
	static readonly RestoreDBClusterFromSnapshot: string[] = [
		"rds:AddRoleToDBCluster",
		"rds:AddTagsToResource",
		"rds:CreateDBInstance",
		"iam:PassRole",
		"rds:RestoreDBClusterFromSnapshot",
	];
	/** IAM actions required for the RestoreDBClusterToPointInTime API call. */
	static readonly RestoreDBClusterToPointInTime: string[] = [
		"rds:AddRoleToDBCluster",
		"rds:AddTagsToResource",
		"rds:CreateDBInstance",
		"iam:PassRole",
		"rds:RestoreDBClusterToPointInTime",
	];
	/** IAM actions required for the RestoreDBInstanceFromDBSnapshot API call. */
	static readonly RestoreDBInstanceFromDBSnapshot: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
		"rds:RestoreDBInstanceFromDBSnapshot",
	];
	/** IAM actions required for the RestoreDBInstanceFromS3 API call. */
	static readonly RestoreDBInstanceFromS3: string[] = [
		"rds:AddTagsToResource",
		"iam:PassRole",
		"rds:RestoreDBInstanceFromS3",
	];
	/** IAM actions required for the RestoreDBInstanceToPointInTime API call. */
	static readonly RestoreDBInstanceToPointInTime: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
		"rds:RestoreDBInstanceToPointInTime",
	];
	/** IAM actions required for the RevokeDBSecurityGroupIngress API call. */
	static readonly RevokeDBSecurityGroupIngress: string[] = [
		"rds:RevokeDBSecurityGroupIngress",
	];
	/** IAM actions required for the StartActivityStream API call. */
	static readonly StartActivityStream: string[] = ["rds:StartActivityStream"];
	/** IAM actions required for the StartDBCluster API call. */
	static readonly StartDBCluster: string[] = ["rds:StartDBCluster"];
	/** IAM actions required for the StartDBInstance API call. */
	static readonly StartDBInstance: string[] = ["rds:StartDBInstance"];
	/** IAM actions required for the StartDBInstanceAutomatedBackupsReplication API call. */
	static readonly StartDBInstanceAutomatedBackupsReplication: string[] = [
		"rds:AddTagsToResource",
		"rds:StartDBInstanceAutomatedBackupsReplication",
	];
	/** IAM actions required for the StartExportTask API call. */
	static readonly StartExportTask: string[] = [
		"iam:PassRole",
		"rds:StartExportTask",
	];
	/** IAM actions required for the StopActivityStream API call. */
	static readonly StopActivityStream: string[] = ["rds:StopActivityStream"];
	/** IAM actions required for the StopDBCluster API call. */
	static readonly StopDBCluster: string[] = ["rds:StopDBCluster"];
	/** IAM actions required for the StopDBInstance API call. */
	static readonly StopDBInstance: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
		"rds:StopDBInstance",
	];
	/** IAM actions required for the StopDBInstanceAutomatedBackupsReplication API call. */
	static readonly StopDBInstanceAutomatedBackupsReplication: string[] = [
		"rds:StopDBInstanceAutomatedBackupsReplication",
	];
	/** IAM actions required for the SwitchoverBlueGreenDeployment API call. */
	static readonly SwitchoverBlueGreenDeployment: string[] = [
		"rds:ModifyDBCluster",
		"rds:ModifyDBInstance",
		"rds:ModifyGlobalCluster",
		"rds:PromoteReadReplica",
		"rds:PromoteReadReplicaDBCluster",
		"rds:SwitchoverBlueGreenDeployment",
	];
	/** IAM actions required for the SwitchoverGlobalCluster API call. */
	static readonly SwitchoverGlobalCluster: string[] = [
		"rds:SwitchoverGlobalCluster",
	];
	/** IAM actions required for the SwitchoverReadReplica API call. */
	static readonly SwitchoverReadReplica: string[] = [
		"rds:SwitchoverReadReplica",
	];
}

/**
 * Condition key constants and builders for rds.
 */
export class RDSConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly AddTagsToResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:TagsFromRequest",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBClusterParameterGroup action. */
	static readonly CopyDBClusterParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBClusterSnapshot action. */
	static readonly CopyDBClusterSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBParameterGroup action. */
	static readonly CopyDBParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBSnapshot action. */
	static readonly CopyDBSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:CopyOptionGroup",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyOptionGroup action. */
	static readonly CopyOptionGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateBlueGreenDeployment action. */
	static readonly CreateBlueGreenDeploymentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"rds:DatabaseClass",
		"rds:DatabaseEngine",
		"rds:DatabaseName",
		"rds:MultiAz",
		"rds:Piops",
		"rds:StorageEncrypted",
		"rds:StorageSize",
		"rds:Vpc",
		"rds:cluster-pg-tag/${TagKey}",
		"rds:cluster-tag/${TagKey}",
		"rds:db-tag/${TagKey}",
		"rds:pg-tag/${TagKey}",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateCustomDBEngineVersion action. */
	static readonly CreateCustomDBEngineVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBCluster action. */
	static readonly CreateDBClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:DatabaseClass",
		"rds:DatabaseEngine",
		"rds:DatabaseName",
		"rds:ManageMasterUserPassword",
		"rds:Piops",
		"rds:StorageEncrypted",
		"rds:StorageSize",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBClusterEndpoint action. */
	static readonly CreateDBClusterEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:EndpointType",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBClusterParameterGroup action. */
	static readonly CreateDBClusterParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBClusterSnapshot action. */
	static readonly CreateDBClusterSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBInstance action. */
	static readonly CreateDBInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:BackupTarget",
		"rds:ManageMasterUserPassword",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBInstanceReadReplica action. */
	static readonly CreateDBInstanceReadReplicaConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBParameterGroup action. */
	static readonly CreateDBParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBProxy action. */
	static readonly CreateDBProxyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDBProxyEndpoint action. */
	static readonly CreateDBProxyEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDBSecurityGroup action. */
	static readonly CreateDBSecurityGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBShardGroup action. */
	static readonly CreateDBShardGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBSnapshot action. */
	static readonly CreateDBSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:BackupTarget",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBSubnetGroup action. */
	static readonly CreateDBSubnetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEventSubscription action. */
	static readonly CreateEventSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateGlobalCluster action. */
	static readonly CreateGlobalClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CreateIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateOptionGroup action. */
	static readonly CreateOptionGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateTenantDatabase action. */
	static readonly CreateTenantDatabaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:ManageMasterUserPassword",
		"rds:TenantDatabaseName",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteBlueGreenDeployment action. */
	static readonly DeleteBlueGreenDeploymentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeIntegrations action. */
	static readonly DescribeIntegrationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyDBCluster action. */
	static readonly ModifyDBClusterConditionKeys: string[] = [
		"rds:DatabaseClass",
		"rds:ManageMasterUserPassword",
		"rds:Piops",
		"rds:StorageSize",
	];
	/** Condition keys applicable to the ModifyDBInstance action. */
	static readonly ModifyDBInstanceConditionKeys: string[] = [
		"rds:ManageMasterUserPassword",
	];
	/** Condition keys applicable to the ModifyTenantDatabase action. */
	static readonly ModifyTenantDatabaseConditionKeys: string[] = [
		"rds:ManageMasterUserPassword",
		"rds:TenantDatabaseName",
	];
	/** Condition keys applicable to the PurchaseReservedDBInstancesOffering action. */
	static readonly PurchaseReservedDBInstancesOfferingConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly RemoveTagsFromResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBClusterFromS3 action. */
	static readonly RestoreDBClusterFromS3ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:DatabaseEngine",
		"rds:DatabaseName",
		"rds:ManageMasterUserPassword",
		"rds:StorageEncrypted",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBClusterFromSnapshot action. */
	static readonly RestoreDBClusterFromSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:DatabaseClass",
		"rds:Piops",
		"rds:StorageSize",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBClusterToPointInTime action. */
	static readonly RestoreDBClusterToPointInTimeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:DatabaseClass",
		"rds:Piops",
		"rds:StorageSize",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBInstanceFromDBSnapshot action. */
	static readonly RestoreDBInstanceFromDBSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:BackupTarget",
		"rds:ManageMasterUserPassword",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBInstanceFromS3 action. */
	static readonly RestoreDBInstanceFromS3ConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:ManageMasterUserPassword",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBInstanceToPointInTime action. */
	static readonly RestoreDBInstanceToPointInTimeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:BackupTarget",
		"rds:ManageMasterUserPassword",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the StartDBInstanceAutomatedBackupsReplication action. */
	static readonly StartDBInstanceAutomatedBackupsReplicationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "rds:req-tag/${TagKey}"];
	/** Condition keys applicable to the SwitchoverBlueGreenDeployment action. */
	static readonly SwitchoverBlueGreenDeploymentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: rds:BackupTarget (String) */
	static readonly BACKUP_TARGET = "rds:BackupTarget";
	/** Condition key: rds:CopyOptionGroup (Bool) */
	static readonly COPY_OPTION_GROUP = "rds:CopyOptionGroup";
	/** Condition key: rds:DatabaseClass (String) */
	static readonly DATABASE_CLASS = "rds:DatabaseClass";
	/** Condition key: rds:DatabaseEngine (String) */
	static readonly DATABASE_ENGINE = "rds:DatabaseEngine";
	/** Condition key: rds:DatabaseName (String) */
	static readonly DATABASE_NAME = "rds:DatabaseName";
	/** Condition key: rds:EndpointType (String) */
	static readonly ENDPOINT_TYPE = "rds:EndpointType";
	/** Condition key: rds:ManageMasterUserPassword (Bool) */
	static readonly MANAGE_MASTER_USER_PASSWORD = "rds:ManageMasterUserPassword";
	/** Condition key: rds:MultiAz (Bool) */
	static readonly MULTI_AZ = "rds:MultiAz";
	/** Condition key: rds:Piops (Numeric) */
	static readonly PIOPS = "rds:Piops";
	/** Condition key: rds:PubliclyAccessible (Bool) */
	static readonly PUBLICLY_ACCESSIBLE = "rds:PubliclyAccessible";
	/** Condition key: rds:StorageEncrypted (Bool) */
	static readonly STORAGE_ENCRYPTED = "rds:StorageEncrypted";
	/** Condition key: rds:StorageSize (Numeric) */
	static readonly STORAGE_SIZE = "rds:StorageSize";
	/** Condition key: rds:TagsFromRequest (Bool) */
	static readonly TAGS_FROM_REQUEST = "rds:TagsFromRequest";
	/** Condition key: rds:TenantDatabaseName (String) */
	static readonly TENANT_DATABASE_NAME = "rds:TenantDatabaseName";
	/** Condition key: rds:Vpc (Bool) */
	static readonly VPC = "rds:Vpc";
	/** Condition key: rds:cluster-pg-tag/${TagKey} (String) */
	static readonly CLUSTER_PG_TAG = "rds:cluster-pg-tag/${TagKey}";
	/** Condition key: rds:cluster-snapshot-tag/${TagKey} (String) */
	static readonly CLUSTER_SNAPSHOT_TAG = "rds:cluster-snapshot-tag/${TagKey}";
	/** Condition key: rds:cluster-tag/${TagKey} (String) */
	static readonly CLUSTER_TAG = "rds:cluster-tag/${TagKey}";
	/** Condition key: rds:db-tag/${TagKey} (String) */
	static readonly DB_TAG = "rds:db-tag/${TagKey}";
	/** Condition key: rds:es-tag/${TagKey} (String) */
	static readonly ES_TAG = "rds:es-tag/${TagKey}";
	/** Condition key: rds:og-tag/${TagKey} (String) */
	static readonly OG_TAG = "rds:og-tag/${TagKey}";
	/** Condition key: rds:pg-tag/${TagKey} (String) */
	static readonly PG_TAG = "rds:pg-tag/${TagKey}";
	/** Condition key: rds:req-tag/${TagKey} (String) */
	static readonly REQ_TAG = "rds:req-tag/${TagKey}";
	/** Condition key: rds:ri-tag/${TagKey} (String) */
	static readonly RI_TAG = "rds:ri-tag/${TagKey}";
	/** Condition key: rds:secgrp-tag/${TagKey} (String) */
	static readonly SECGRP_TAG = "rds:secgrp-tag/${TagKey}";
	/** Condition key: rds:snapshot-tag/${TagKey} (String) */
	static readonly SNAPSHOT_TAG = "rds:snapshot-tag/${TagKey}";
	/** Condition key: rds:subgrp-tag/${TagKey} (String) */
	static readonly SUBGRP_TAG = "rds:subgrp-tag/${TagKey}";

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
	 * Generates a condition block for `rds:BackupTarget`.
	 */
	static backupTarget(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:BackupTarget": value } };
	}

	/**
	 * Generates a condition block for `rds:CopyOptionGroup`.
	 */
	static copyOptionGroup(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "rds:CopyOptionGroup": value } };
	}

	/**
	 * Generates a condition block for `rds:DatabaseClass`.
	 */
	static databaseClass(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:DatabaseClass": value } };
	}

	/**
	 * Generates a condition block for `rds:DatabaseEngine`.
	 */
	static databaseEngine(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:DatabaseEngine": value } };
	}

	/**
	 * Generates a condition block for `rds:DatabaseName`.
	 */
	static databaseName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:DatabaseName": value } };
	}

	/**
	 * Generates a condition block for `rds:EndpointType`.
	 */
	static endpointType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:EndpointType": value } };
	}

	/**
	 * Generates a condition block for `rds:ManageMasterUserPassword`.
	 */
	static manageMasterUserPassword(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "rds:ManageMasterUserPassword": value } };
	}

	/**
	 * Generates a condition block for `rds:MultiAz`.
	 */
	static multiAz(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "rds:MultiAz": value } };
	}

	/**
	 * Generates a condition block for `rds:Piops`.
	 */
	static piops(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "rds:Piops": value } };
	}

	/**
	 * Generates a condition block for `rds:PubliclyAccessible`.
	 */
	static publiclyAccessible(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "rds:PubliclyAccessible": value } };
	}

	/**
	 * Generates a condition block for `rds:StorageEncrypted`.
	 */
	static storageEncrypted(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "rds:StorageEncrypted": value } };
	}

	/**
	 * Generates a condition block for `rds:StorageSize`.
	 */
	static storageSize(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "rds:StorageSize": value } };
	}

	/**
	 * Generates a condition block for `rds:TagsFromRequest`.
	 */
	static tagsFromRequest(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "rds:TagsFromRequest": value } };
	}

	/**
	 * Generates a condition block for `rds:TenantDatabaseName`.
	 */
	static tenantDatabaseName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:TenantDatabaseName": value } };
	}

	/**
	 * Generates a condition block for `rds:Vpc`.
	 */
	static vpc(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "rds:Vpc": value } };
	}

	/**
	 * Generates a condition block for `rds:cluster-pg-tag/${TagKey}`.
	 */
	static clusterPgTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:cluster-pg-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:cluster-snapshot-tag/${TagKey}`.
	 */
	static clusterSnapshotTag(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:cluster-snapshot-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:cluster-tag/${TagKey}`.
	 */
	static clusterTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:cluster-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:db-tag/${TagKey}`.
	 */
	static dbTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:db-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:es-tag/${TagKey}`.
	 */
	static esTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:es-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:og-tag/${TagKey}`.
	 */
	static ogTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:og-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:pg-tag/${TagKey}`.
	 */
	static pgTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:pg-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:req-tag/${TagKey}`.
	 */
	static reqTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:req-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:ri-tag/${TagKey}`.
	 */
	static riTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:ri-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:secgrp-tag/${TagKey}`.
	 */
	static secgrpTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:secgrp-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:snapshot-tag/${TagKey}`.
	 */
	static snapshotTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:snapshot-tag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `rds:subgrp-tag/${TagKey}`.
	 */
	static subgrpTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rds:subgrp-tag/${TagKey}": value } };
	}
}
