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
	static readonly ADD_ROLE_TO_DB_CLUSTER = "rds:AddRoleToDBCluster";
	/** [Write] rds:AddRoleToDBInstance */
	static readonly ADD_ROLE_TO_DB_INSTANCE = "rds:AddRoleToDBInstance";
	/** [Write] rds:AddSourceIdentifierToSubscription */
	static readonly ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION =
		"rds:AddSourceIdentifierToSubscription";
	/** [Tagging] rds:AddTagsToResource */
	static readonly ADD_TAGS_TO_RESOURCE = "rds:AddTagsToResource";
	/** [Write] rds:ApplyPendingMaintenanceAction */
	static readonly APPLY_PENDING_MAINTENANCE_ACTION =
		"rds:ApplyPendingMaintenanceAction";
	/** [PermissionManagement] rds:AuthorizeDBSecurityGroupIngress */
	static readonly AUTHORIZE_DB_SECURITY_GROUP_INGRESS =
		"rds:AuthorizeDBSecurityGroupIngress";
	/** [Write] rds:BacktrackDBCluster */
	static readonly BACKTRACK_DB_CLUSTER = "rds:BacktrackDBCluster";
	/** [Write] rds:CancelExportTask */
	static readonly CANCEL_EXPORT_TASK = "rds:CancelExportTask";
	/** [Write] rds:CopyCustomDBEngineVersion */
	static readonly COPY_CUSTOM_DB_ENGINE_VERSION =
		"rds:CopyCustomDBEngineVersion";
	/** [Write] rds:CopyDBClusterParameterGroup */
	static readonly COPY_DB_CLUSTER_PARAMETER_GROUP =
		"rds:CopyDBClusterParameterGroup";
	/** [Write] rds:CopyDBClusterSnapshot */
	static readonly COPY_DB_CLUSTER_SNAPSHOT = "rds:CopyDBClusterSnapshot";
	/** [Write] rds:CopyDBParameterGroup */
	static readonly COPY_DB_PARAMETER_GROUP = "rds:CopyDBParameterGroup";
	/** [Write] rds:CopyDBSnapshot */
	static readonly COPY_DB_SNAPSHOT = "rds:CopyDBSnapshot";
	/** [Write] rds:CopyOptionGroup */
	static readonly COPY_OPTION_GROUP = "rds:CopyOptionGroup";
	/** [Write] rds:CreateBlueGreenDeployment */
	static readonly CREATE_BLUE_GREEN_DEPLOYMENT =
		"rds:CreateBlueGreenDeployment";
	/** [Write] rds:CreateCustomDBEngineVersion */
	static readonly CREATE_CUSTOM_DB_ENGINE_VERSION =
		"rds:CreateCustomDBEngineVersion";
	/** [Write] rds:CreateDBCluster */
	static readonly CREATE_DB_CLUSTER = "rds:CreateDBCluster";
	/** [Write] rds:CreateDBClusterEndpoint */
	static readonly CREATE_DB_CLUSTER_ENDPOINT = "rds:CreateDBClusterEndpoint";
	/** [Write] rds:CreateDBClusterParameterGroup */
	static readonly CREATE_DB_CLUSTER_PARAMETER_GROUP =
		"rds:CreateDBClusterParameterGroup";
	/** [Write] rds:CreateDBClusterSnapshot */
	static readonly CREATE_DB_CLUSTER_SNAPSHOT = "rds:CreateDBClusterSnapshot";
	/** [Write] rds:CreateDBInstance */
	static readonly CREATE_DB_INSTANCE = "rds:CreateDBInstance";
	/** [Write] rds:CreateDBInstanceReadReplica */
	static readonly CREATE_DB_INSTANCE_READ_REPLICA =
		"rds:CreateDBInstanceReadReplica";
	/** [Write] rds:CreateDBParameterGroup */
	static readonly CREATE_DB_PARAMETER_GROUP = "rds:CreateDBParameterGroup";
	/** [Write] rds:CreateDBProxy */
	static readonly CREATE_DB_PROXY = "rds:CreateDBProxy";
	/** [Write] rds:CreateDBProxyEndpoint */
	static readonly CREATE_DB_PROXY_ENDPOINT = "rds:CreateDBProxyEndpoint";
	/** [Write] rds:CreateDBSecurityGroup */
	static readonly CREATE_DB_SECURITY_GROUP = "rds:CreateDBSecurityGroup";
	/** [Write] rds:CreateDBShardGroup */
	static readonly CREATE_DB_SHARD_GROUP = "rds:CreateDBShardGroup";
	/** [Write] rds:CreateDBSnapshot */
	static readonly CREATE_DB_SNAPSHOT = "rds:CreateDBSnapshot";
	/** [Write] rds:CreateDBSubnetGroup */
	static readonly CREATE_DB_SUBNET_GROUP = "rds:CreateDBSubnetGroup";
	/** [Write] rds:CreateEventSubscription */
	static readonly CREATE_EVENT_SUBSCRIPTION = "rds:CreateEventSubscription";
	/** [Write] rds:CreateGlobalCluster */
	static readonly CREATE_GLOBAL_CLUSTER = "rds:CreateGlobalCluster";
	/** [Write] rds:CreateIntegration */
	static readonly CREATE_INTEGRATION = "rds:CreateIntegration";
	/** [Write] rds:CreateOptionGroup */
	static readonly CREATE_OPTION_GROUP = "rds:CreateOptionGroup";
	/** [Write] rds:CreateTenantDatabase */
	static readonly CREATE_TENANT_DATABASE = "rds:CreateTenantDatabase";
	/** [Write] rds:CrossRegionCommunication */
	static readonly CROSS_REGION_COMMUNICATION = "rds:CrossRegionCommunication";
	/** [Write] rds:DeleteBlueGreenDeployment */
	static readonly DELETE_BLUE_GREEN_DEPLOYMENT =
		"rds:DeleteBlueGreenDeployment";
	/** [Write] rds:DeleteCustomDBEngineVersion */
	static readonly DELETE_CUSTOM_DB_ENGINE_VERSION =
		"rds:DeleteCustomDBEngineVersion";
	/** [Write] rds:DeleteDBCluster */
	static readonly DELETE_DB_CLUSTER = "rds:DeleteDBCluster";
	/** [Write] rds:DeleteDBClusterAutomatedBackup */
	static readonly DELETE_DB_CLUSTER_AUTOMATED_BACKUP =
		"rds:DeleteDBClusterAutomatedBackup";
	/** [Write] rds:DeleteDBClusterEndpoint */
	static readonly DELETE_DB_CLUSTER_ENDPOINT = "rds:DeleteDBClusterEndpoint";
	/** [Write] rds:DeleteDBClusterParameterGroup */
	static readonly DELETE_DB_CLUSTER_PARAMETER_GROUP =
		"rds:DeleteDBClusterParameterGroup";
	/** [Write] rds:DeleteDBClusterSnapshot */
	static readonly DELETE_DB_CLUSTER_SNAPSHOT = "rds:DeleteDBClusterSnapshot";
	/** [Write] rds:DeleteDBInstance */
	static readonly DELETE_DB_INSTANCE = "rds:DeleteDBInstance";
	/** [Write] rds:DeleteDBInstanceAutomatedBackup */
	static readonly DELETE_DB_INSTANCE_AUTOMATED_BACKUP =
		"rds:DeleteDBInstanceAutomatedBackup";
	/** [Write] rds:DeleteDBParameterGroup */
	static readonly DELETE_DB_PARAMETER_GROUP = "rds:DeleteDBParameterGroup";
	/** [Write] rds:DeleteDBProxy */
	static readonly DELETE_DB_PROXY = "rds:DeleteDBProxy";
	/** [Write] rds:DeleteDBProxyEndpoint */
	static readonly DELETE_DB_PROXY_ENDPOINT = "rds:DeleteDBProxyEndpoint";
	/** [Write] rds:DeleteDBSecurityGroup */
	static readonly DELETE_DB_SECURITY_GROUP = "rds:DeleteDBSecurityGroup";
	/** [Write] rds:DeleteDBShardGroup */
	static readonly DELETE_DB_SHARD_GROUP = "rds:DeleteDBShardGroup";
	/** [Write] rds:DeleteDBSnapshot */
	static readonly DELETE_DB_SNAPSHOT = "rds:DeleteDBSnapshot";
	/** [Write] rds:DeleteDBSubnetGroup */
	static readonly DELETE_DB_SUBNET_GROUP = "rds:DeleteDBSubnetGroup";
	/** [Write] rds:DeleteEventSubscription */
	static readonly DELETE_EVENT_SUBSCRIPTION = "rds:DeleteEventSubscription";
	/** [Write] rds:DeleteGlobalCluster */
	static readonly DELETE_GLOBAL_CLUSTER = "rds:DeleteGlobalCluster";
	/** [Write] rds:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "rds:DeleteIntegration";
	/** [Write] rds:DeleteOptionGroup */
	static readonly DELETE_OPTION_GROUP = "rds:DeleteOptionGroup";
	/** [Write] rds:DeleteTenantDatabase */
	static readonly DELETE_TENANT_DATABASE = "rds:DeleteTenantDatabase";
	/** [Write] rds:DeregisterDBProxyTargets */
	static readonly DEREGISTER_DB_PROXY_TARGETS = "rds:DeregisterDBProxyTargets";
	/** [List] rds:DescribeAccountAttributes */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES = "rds:DescribeAccountAttributes";
	/** [List] rds:DescribeBlueGreenDeployments */
	static readonly DESCRIBE_BLUE_GREEN_DEPLOYMENTS =
		"rds:DescribeBlueGreenDeployments";
	/** [List] rds:DescribeCertificates */
	static readonly DESCRIBE_CERTIFICATES = "rds:DescribeCertificates";
	/** [List] rds:DescribeDBClusterAutomatedBackups */
	static readonly DESCRIBE_DB_CLUSTER_AUTOMATED_BACKUPS =
		"rds:DescribeDBClusterAutomatedBackups";
	/** [List] rds:DescribeDBClusterBacktracks */
	static readonly DESCRIBE_DB_CLUSTER_BACKTRACKS =
		"rds:DescribeDBClusterBacktracks";
	/** [List] rds:DescribeDBClusterEndpoints */
	static readonly DESCRIBE_DB_CLUSTER_ENDPOINTS =
		"rds:DescribeDBClusterEndpoints";
	/** [List] rds:DescribeDBClusterParameterGroups */
	static readonly DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS =
		"rds:DescribeDBClusterParameterGroups";
	/** [List] rds:DescribeDBClusterParameters */
	static readonly DESCRIBE_DB_CLUSTER_PARAMETERS =
		"rds:DescribeDBClusterParameters";
	/** [List] rds:DescribeDBClusterSnapshotAttributes */
	static readonly DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES =
		"rds:DescribeDBClusterSnapshotAttributes";
	/** [List] rds:DescribeDBClusterSnapshots */
	static readonly DESCRIBE_DB_CLUSTER_SNAPSHOTS =
		"rds:DescribeDBClusterSnapshots";
	/** [List] rds:DescribeDBClusters */
	static readonly DESCRIBE_DB_CLUSTERS = "rds:DescribeDBClusters";
	/** [List] rds:DescribeDBEngineVersions */
	static readonly DESCRIBE_DB_ENGINE_VERSIONS = "rds:DescribeDBEngineVersions";
	/** [List] rds:DescribeDBInstanceAutomatedBackups */
	static readonly DESCRIBE_DB_INSTANCE_AUTOMATED_BACKUPS =
		"rds:DescribeDBInstanceAutomatedBackups";
	/** [List] rds:DescribeDBInstances */
	static readonly DESCRIBE_DB_INSTANCES = "rds:DescribeDBInstances";
	/** [List] rds:DescribeDBLogFiles */
	static readonly DESCRIBE_DB_LOG_FILES = "rds:DescribeDBLogFiles";
	/** [List] rds:DescribeDBMajorEngineVersions */
	static readonly DESCRIBE_DB_MAJOR_ENGINE_VERSIONS =
		"rds:DescribeDBMajorEngineVersions";
	/** [List] rds:DescribeDBParameterGroups */
	static readonly DESCRIBE_DB_PARAMETER_GROUPS =
		"rds:DescribeDBParameterGroups";
	/** [List] rds:DescribeDBParameters */
	static readonly DESCRIBE_DB_PARAMETERS = "rds:DescribeDBParameters";
	/** [List] rds:DescribeDBProxies */
	static readonly DESCRIBE_DB_PROXIES = "rds:DescribeDBProxies";
	/** [List] rds:DescribeDBProxyEndpoints */
	static readonly DESCRIBE_DB_PROXY_ENDPOINTS = "rds:DescribeDBProxyEndpoints";
	/** [List] rds:DescribeDBProxyTargetGroups */
	static readonly DESCRIBE_DB_PROXY_TARGET_GROUPS =
		"rds:DescribeDBProxyTargetGroups";
	/** [List] rds:DescribeDBProxyTargets */
	static readonly DESCRIBE_DB_PROXY_TARGETS = "rds:DescribeDBProxyTargets";
	/** [List] rds:DescribeDBRecommendations */
	static readonly DESCRIBE_DB_RECOMMENDATIONS = "rds:DescribeDBRecommendations";
	/** [List] rds:DescribeDBSecurityGroups */
	static readonly DESCRIBE_DB_SECURITY_GROUPS = "rds:DescribeDBSecurityGroups";
	/** [List] rds:DescribeDBShardGroups */
	static readonly DESCRIBE_DB_SHARD_GROUPS = "rds:DescribeDBShardGroups";
	/** [List] rds:DescribeDBSnapshotAttributes */
	static readonly DESCRIBE_DB_SNAPSHOT_ATTRIBUTES =
		"rds:DescribeDBSnapshotAttributes";
	/** [List] rds:DescribeDBSnapshotTenantDatabases */
	static readonly DESCRIBE_DB_SNAPSHOT_TENANT_DATABASES =
		"rds:DescribeDBSnapshotTenantDatabases";
	/** [List] rds:DescribeDBSnapshots */
	static readonly DESCRIBE_DB_SNAPSHOTS = "rds:DescribeDBSnapshots";
	/** [List] rds:DescribeDBSubnetGroups */
	static readonly DESCRIBE_DB_SUBNET_GROUPS = "rds:DescribeDBSubnetGroups";
	/** [List] rds:DescribeEngineDefaultClusterParameters */
	static readonly DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS =
		"rds:DescribeEngineDefaultClusterParameters";
	/** [List] rds:DescribeEngineDefaultParameters */
	static readonly DESCRIBE_ENGINE_DEFAULT_PARAMETERS =
		"rds:DescribeEngineDefaultParameters";
	/** [List] rds:DescribeEventCategories */
	static readonly DESCRIBE_EVENT_CATEGORIES = "rds:DescribeEventCategories";
	/** [List] rds:DescribeEventSubscriptions */
	static readonly DESCRIBE_EVENT_SUBSCRIPTIONS =
		"rds:DescribeEventSubscriptions";
	/** [List] rds:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "rds:DescribeEvents";
	/** [List] rds:DescribeExportTasks */
	static readonly DESCRIBE_EXPORT_TASKS = "rds:DescribeExportTasks";
	/** [List] rds:DescribeGlobalClusters */
	static readonly DESCRIBE_GLOBAL_CLUSTERS = "rds:DescribeGlobalClusters";
	/** [List] rds:DescribeIntegrations */
	static readonly DESCRIBE_INTEGRATIONS = "rds:DescribeIntegrations";
	/** [List] rds:DescribeOptionGroupOptions */
	static readonly DESCRIBE_OPTION_GROUP_OPTIONS =
		"rds:DescribeOptionGroupOptions";
	/** [List] rds:DescribeOptionGroups */
	static readonly DESCRIBE_OPTION_GROUPS = "rds:DescribeOptionGroups";
	/** [List] rds:DescribeOrderableDBInstanceOptions */
	static readonly DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS =
		"rds:DescribeOrderableDBInstanceOptions";
	/** [List] rds:DescribePendingMaintenanceActions */
	static readonly DESCRIBE_PENDING_MAINTENANCE_ACTIONS =
		"rds:DescribePendingMaintenanceActions";
	/** [Read] rds:DescribeRecommendationGroups */
	static readonly DESCRIBE_RECOMMENDATION_GROUPS =
		"rds:DescribeRecommendationGroups";
	/** [Read] rds:DescribeRecommendations */
	static readonly DESCRIBE_RECOMMENDATIONS = "rds:DescribeRecommendations";
	/** [List] rds:DescribeReservedDBInstances */
	static readonly DESCRIBE_RESERVED_DB_INSTANCES =
		"rds:DescribeReservedDBInstances";
	/** [List] rds:DescribeReservedDBInstancesOfferings */
	static readonly DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS =
		"rds:DescribeReservedDBInstancesOfferings";
	/** [List] rds:DescribeSourceRegions */
	static readonly DESCRIBE_SOURCE_REGIONS = "rds:DescribeSourceRegions";
	/** [List] rds:DescribeTenantDatabases */
	static readonly DESCRIBE_TENANT_DATABASES = "rds:DescribeTenantDatabases";
	/** [List] rds:DescribeValidDBInstanceModifications */
	static readonly DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS =
		"rds:DescribeValidDBInstanceModifications";
	/** [Write] rds:DisableHttpEndpoint */
	static readonly DISABLE_HTTP_ENDPOINT = "rds:DisableHttpEndpoint";
	/** [Read] rds:DownloadCompleteDBLogFile */
	static readonly DOWNLOAD_COMPLETE_DB_LOG_FILE =
		"rds:DownloadCompleteDBLogFile";
	/** [Read] rds:DownloadDBLogFilePortion */
	static readonly DOWNLOAD_DB_LOG_FILE_PORTION = "rds:DownloadDBLogFilePortion";
	/** [Write] rds:EnableHttpEndpoint */
	static readonly ENABLE_HTTP_ENDPOINT = "rds:EnableHttpEndpoint";
	/** [Write] rds:FailoverDBCluster */
	static readonly FAILOVER_DB_CLUSTER = "rds:FailoverDBCluster";
	/** [Write] rds:FailoverGlobalCluster */
	static readonly FAILOVER_GLOBAL_CLUSTER = "rds:FailoverGlobalCluster";
	/** [Read] rds:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "rds:ListTagsForResource";
	/** [Write] rds:ModifyActivityStream */
	static readonly MODIFY_ACTIVITY_STREAM = "rds:ModifyActivityStream";
	/** [Write] rds:ModifyCertificates */
	static readonly MODIFY_CERTIFICATES = "rds:ModifyCertificates";
	/** [Write] rds:ModifyCurrentDBClusterCapacity */
	static readonly MODIFY_CURRENT_DB_CLUSTER_CAPACITY =
		"rds:ModifyCurrentDBClusterCapacity";
	/** [Write] rds:ModifyCustomDBEngineVersion */
	static readonly MODIFY_CUSTOM_DB_ENGINE_VERSION =
		"rds:ModifyCustomDBEngineVersion";
	/** [Write] rds:ModifyDBCluster */
	static readonly MODIFY_DB_CLUSTER = "rds:ModifyDBCluster";
	/** [Write] rds:ModifyDBClusterEndpoint */
	static readonly MODIFY_DB_CLUSTER_ENDPOINT = "rds:ModifyDBClusterEndpoint";
	/** [Write] rds:ModifyDBClusterParameterGroup */
	static readonly MODIFY_DB_CLUSTER_PARAMETER_GROUP =
		"rds:ModifyDBClusterParameterGroup";
	/** [Write] rds:ModifyDBClusterSnapshotAttribute */
	static readonly MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE =
		"rds:ModifyDBClusterSnapshotAttribute";
	/** [Write] rds:ModifyDBInstance */
	static readonly MODIFY_DB_INSTANCE = "rds:ModifyDBInstance";
	/** [Write] rds:ModifyDBParameterGroup */
	static readonly MODIFY_DB_PARAMETER_GROUP = "rds:ModifyDBParameterGroup";
	/** [Write] rds:ModifyDBProxy */
	static readonly MODIFY_DB_PROXY = "rds:ModifyDBProxy";
	/** [Write] rds:ModifyDBProxyEndpoint */
	static readonly MODIFY_DB_PROXY_ENDPOINT = "rds:ModifyDBProxyEndpoint";
	/** [Write] rds:ModifyDBProxyTargetGroup */
	static readonly MODIFY_DB_PROXY_TARGET_GROUP = "rds:ModifyDBProxyTargetGroup";
	/** [Write] rds:ModifyDBRecommendation */
	static readonly MODIFY_DB_RECOMMENDATION = "rds:ModifyDBRecommendation";
	/** [Write] rds:ModifyDBShardGroup */
	static readonly MODIFY_DB_SHARD_GROUP = "rds:ModifyDBShardGroup";
	/** [Write] rds:ModifyDBSnapshot */
	static readonly MODIFY_DB_SNAPSHOT = "rds:ModifyDBSnapshot";
	/** [Write] rds:ModifyDBSnapshotAttribute */
	static readonly MODIFY_DB_SNAPSHOT_ATTRIBUTE =
		"rds:ModifyDBSnapshotAttribute";
	/** [Write] rds:ModifyDBSubnetGroup */
	static readonly MODIFY_DB_SUBNET_GROUP = "rds:ModifyDBSubnetGroup";
	/** [Write] rds:ModifyEventSubscription */
	static readonly MODIFY_EVENT_SUBSCRIPTION = "rds:ModifyEventSubscription";
	/** [Write] rds:ModifyGlobalCluster */
	static readonly MODIFY_GLOBAL_CLUSTER = "rds:ModifyGlobalCluster";
	/** [Write] rds:ModifyIntegration */
	static readonly MODIFY_INTEGRATION = "rds:ModifyIntegration";
	/** [Write] rds:ModifyOptionGroup */
	static readonly MODIFY_OPTION_GROUP = "rds:ModifyOptionGroup";
	/** [Write] rds:ModifyRecommendation */
	static readonly MODIFY_RECOMMENDATION = "rds:ModifyRecommendation";
	/** [Write] rds:ModifyTenantDatabase */
	static readonly MODIFY_TENANT_DATABASE = "rds:ModifyTenantDatabase";
	/** [Write] rds:PromoteReadReplica */
	static readonly PROMOTE_READ_REPLICA = "rds:PromoteReadReplica";
	/** [Write] rds:PromoteReadReplicaDBCluster */
	static readonly PROMOTE_READ_REPLICA_DB_CLUSTER =
		"rds:PromoteReadReplicaDBCluster";
	/** [Write] rds:PurchaseReservedDBInstancesOffering */
	static readonly PURCHASE_RESERVED_DB_INSTANCES_OFFERING =
		"rds:PurchaseReservedDBInstancesOffering";
	/** [Write] rds:RebootDBCluster */
	static readonly REBOOT_DB_CLUSTER = "rds:RebootDBCluster";
	/** [Write] rds:RebootDBInstance */
	static readonly REBOOT_DB_INSTANCE = "rds:RebootDBInstance";
	/** [Write] rds:RebootDBShardGroup */
	static readonly REBOOT_DB_SHARD_GROUP = "rds:RebootDBShardGroup";
	/** [Write] rds:RegisterDBProxyTargets */
	static readonly REGISTER_DB_PROXY_TARGETS = "rds:RegisterDBProxyTargets";
	/** [Write] rds:RemoveFromGlobalCluster */
	static readonly REMOVE_FROM_GLOBAL_CLUSTER = "rds:RemoveFromGlobalCluster";
	/** [Write] rds:RemoveRoleFromDBCluster */
	static readonly REMOVE_ROLE_FROM_DB_CLUSTER = "rds:RemoveRoleFromDBCluster";
	/** [Write] rds:RemoveRoleFromDBInstance */
	static readonly REMOVE_ROLE_FROM_DB_INSTANCE = "rds:RemoveRoleFromDBInstance";
	/** [Write] rds:RemoveSourceIdentifierFromSubscription */
	static readonly REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION =
		"rds:RemoveSourceIdentifierFromSubscription";
	/** [Tagging] rds:RemoveTagsFromResource */
	static readonly REMOVE_TAGS_FROM_RESOURCE = "rds:RemoveTagsFromResource";
	/** [Write] rds:ResetDBClusterParameterGroup */
	static readonly RESET_DB_CLUSTER_PARAMETER_GROUP =
		"rds:ResetDBClusterParameterGroup";
	/** [Write] rds:ResetDBParameterGroup */
	static readonly RESET_DB_PARAMETER_GROUP = "rds:ResetDBParameterGroup";
	/** [Write] rds:RestoreDBClusterFromS3 */
	static readonly RESTORE_DB_CLUSTER_FROM_S3 = "rds:RestoreDBClusterFromS3";
	/** [Write] rds:RestoreDBClusterFromSnapshot */
	static readonly RESTORE_DB_CLUSTER_FROM_SNAPSHOT =
		"rds:RestoreDBClusterFromSnapshot";
	/** [Write] rds:RestoreDBClusterToPointInTime */
	static readonly RESTORE_DB_CLUSTER_TO_POINT_IN_TIME =
		"rds:RestoreDBClusterToPointInTime";
	/** [Write] rds:RestoreDBInstanceFromDBSnapshot */
	static readonly RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT =
		"rds:RestoreDBInstanceFromDBSnapshot";
	/** [Write] rds:RestoreDBInstanceFromS3 */
	static readonly RESTORE_DB_INSTANCE_FROM_S3 = "rds:RestoreDBInstanceFromS3";
	/** [Write] rds:RestoreDBInstanceToPointInTime */
	static readonly RESTORE_DB_INSTANCE_TO_POINT_IN_TIME =
		"rds:RestoreDBInstanceToPointInTime";
	/** [Write] rds:RevokeDBSecurityGroupIngress */
	static readonly REVOKE_DB_SECURITY_GROUP_INGRESS =
		"rds:RevokeDBSecurityGroupIngress";
	/** [Write] rds:StartActivityStream */
	static readonly START_ACTIVITY_STREAM = "rds:StartActivityStream";
	/** [Write] rds:StartDBCluster */
	static readonly START_DB_CLUSTER = "rds:StartDBCluster";
	/** [Write] rds:StartDBInstance */
	static readonly START_DB_INSTANCE = "rds:StartDBInstance";
	/** [Write] rds:StartDBInstanceAutomatedBackupsReplication */
	static readonly START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION =
		"rds:StartDBInstanceAutomatedBackupsReplication";
	/** [Write] rds:StartExportTask */
	static readonly START_EXPORT_TASK = "rds:StartExportTask";
	/** [Write] rds:StopActivityStream */
	static readonly STOP_ACTIVITY_STREAM = "rds:StopActivityStream";
	/** [Write] rds:StopDBCluster */
	static readonly STOP_DB_CLUSTER = "rds:StopDBCluster";
	/** [Write] rds:StopDBInstance */
	static readonly STOP_DB_INSTANCE = "rds:StopDBInstance";
	/** [Write] rds:StopDBInstanceAutomatedBackupsReplication */
	static readonly STOP_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION =
		"rds:StopDBInstanceAutomatedBackupsReplication";
	/** [Write] rds:SwitchoverBlueGreenDeployment */
	static readonly SWITCHOVER_BLUE_GREEN_DEPLOYMENT =
		"rds:SwitchoverBlueGreenDeployment";
	/** [Write] rds:SwitchoverGlobalCluster */
	static readonly SWITCHOVER_GLOBAL_CLUSTER = "rds:SwitchoverGlobalCluster";
	/** [Write] rds:SwitchoverReadReplica */
	static readonly SWITCHOVER_READ_REPLICA = "rds:SwitchoverReadReplica";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RDSActions.DESCRIBE_RECOMMENDATION_GROUPS,
		RDSActions.DESCRIBE_RECOMMENDATIONS,
		RDSActions.DOWNLOAD_COMPLETE_DB_LOG_FILE,
		RDSActions.DOWNLOAD_DB_LOG_FILE_PORTION,
		RDSActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RDSActions.ADD_ROLE_TO_DB_CLUSTER,
		RDSActions.ADD_ROLE_TO_DB_INSTANCE,
		RDSActions.ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION,
		RDSActions.APPLY_PENDING_MAINTENANCE_ACTION,
		RDSActions.BACKTRACK_DB_CLUSTER,
		RDSActions.CANCEL_EXPORT_TASK,
		RDSActions.COPY_CUSTOM_DB_ENGINE_VERSION,
		RDSActions.COPY_DB_CLUSTER_PARAMETER_GROUP,
		RDSActions.COPY_DB_CLUSTER_SNAPSHOT,
		RDSActions.COPY_DB_PARAMETER_GROUP,
		RDSActions.COPY_DB_SNAPSHOT,
		RDSActions.COPY_OPTION_GROUP,
		RDSActions.CREATE_BLUE_GREEN_DEPLOYMENT,
		RDSActions.CREATE_CUSTOM_DB_ENGINE_VERSION,
		RDSActions.CREATE_DB_CLUSTER,
		RDSActions.CREATE_DB_CLUSTER_ENDPOINT,
		RDSActions.CREATE_DB_CLUSTER_PARAMETER_GROUP,
		RDSActions.CREATE_DB_CLUSTER_SNAPSHOT,
		RDSActions.CREATE_DB_INSTANCE,
		RDSActions.CREATE_DB_INSTANCE_READ_REPLICA,
		RDSActions.CREATE_DB_PARAMETER_GROUP,
		RDSActions.CREATE_DB_PROXY,
		RDSActions.CREATE_DB_PROXY_ENDPOINT,
		RDSActions.CREATE_DB_SECURITY_GROUP,
		RDSActions.CREATE_DB_SHARD_GROUP,
		RDSActions.CREATE_DB_SNAPSHOT,
		RDSActions.CREATE_DB_SUBNET_GROUP,
		RDSActions.CREATE_EVENT_SUBSCRIPTION,
		RDSActions.CREATE_GLOBAL_CLUSTER,
		RDSActions.CREATE_INTEGRATION,
		RDSActions.CREATE_OPTION_GROUP,
		RDSActions.CREATE_TENANT_DATABASE,
		RDSActions.CROSS_REGION_COMMUNICATION,
		RDSActions.DELETE_BLUE_GREEN_DEPLOYMENT,
		RDSActions.DELETE_CUSTOM_DB_ENGINE_VERSION,
		RDSActions.DELETE_DB_CLUSTER,
		RDSActions.DELETE_DB_CLUSTER_AUTOMATED_BACKUP,
		RDSActions.DELETE_DB_CLUSTER_ENDPOINT,
		RDSActions.DELETE_DB_CLUSTER_PARAMETER_GROUP,
		RDSActions.DELETE_DB_CLUSTER_SNAPSHOT,
		RDSActions.DELETE_DB_INSTANCE,
		RDSActions.DELETE_DB_INSTANCE_AUTOMATED_BACKUP,
		RDSActions.DELETE_DB_PARAMETER_GROUP,
		RDSActions.DELETE_DB_PROXY,
		RDSActions.DELETE_DB_PROXY_ENDPOINT,
		RDSActions.DELETE_DB_SECURITY_GROUP,
		RDSActions.DELETE_DB_SHARD_GROUP,
		RDSActions.DELETE_DB_SNAPSHOT,
		RDSActions.DELETE_DB_SUBNET_GROUP,
		RDSActions.DELETE_EVENT_SUBSCRIPTION,
		RDSActions.DELETE_GLOBAL_CLUSTER,
		RDSActions.DELETE_INTEGRATION,
		RDSActions.DELETE_OPTION_GROUP,
		RDSActions.DELETE_TENANT_DATABASE,
		RDSActions.DEREGISTER_DB_PROXY_TARGETS,
		RDSActions.DISABLE_HTTP_ENDPOINT,
		RDSActions.ENABLE_HTTP_ENDPOINT,
		RDSActions.FAILOVER_DB_CLUSTER,
		RDSActions.FAILOVER_GLOBAL_CLUSTER,
		RDSActions.MODIFY_ACTIVITY_STREAM,
		RDSActions.MODIFY_CERTIFICATES,
		RDSActions.MODIFY_CURRENT_DB_CLUSTER_CAPACITY,
		RDSActions.MODIFY_CUSTOM_DB_ENGINE_VERSION,
		RDSActions.MODIFY_DB_CLUSTER,
		RDSActions.MODIFY_DB_CLUSTER_ENDPOINT,
		RDSActions.MODIFY_DB_CLUSTER_PARAMETER_GROUP,
		RDSActions.MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE,
		RDSActions.MODIFY_DB_INSTANCE,
		RDSActions.MODIFY_DB_PARAMETER_GROUP,
		RDSActions.MODIFY_DB_PROXY,
		RDSActions.MODIFY_DB_PROXY_ENDPOINT,
		RDSActions.MODIFY_DB_PROXY_TARGET_GROUP,
		RDSActions.MODIFY_DB_RECOMMENDATION,
		RDSActions.MODIFY_DB_SHARD_GROUP,
		RDSActions.MODIFY_DB_SNAPSHOT,
		RDSActions.MODIFY_DB_SNAPSHOT_ATTRIBUTE,
		RDSActions.MODIFY_DB_SUBNET_GROUP,
		RDSActions.MODIFY_EVENT_SUBSCRIPTION,
		RDSActions.MODIFY_GLOBAL_CLUSTER,
		RDSActions.MODIFY_INTEGRATION,
		RDSActions.MODIFY_OPTION_GROUP,
		RDSActions.MODIFY_RECOMMENDATION,
		RDSActions.MODIFY_TENANT_DATABASE,
		RDSActions.PROMOTE_READ_REPLICA,
		RDSActions.PROMOTE_READ_REPLICA_DB_CLUSTER,
		RDSActions.PURCHASE_RESERVED_DB_INSTANCES_OFFERING,
		RDSActions.REBOOT_DB_CLUSTER,
		RDSActions.REBOOT_DB_INSTANCE,
		RDSActions.REBOOT_DB_SHARD_GROUP,
		RDSActions.REGISTER_DB_PROXY_TARGETS,
		RDSActions.REMOVE_FROM_GLOBAL_CLUSTER,
		RDSActions.REMOVE_ROLE_FROM_DB_CLUSTER,
		RDSActions.REMOVE_ROLE_FROM_DB_INSTANCE,
		RDSActions.REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION,
		RDSActions.RESET_DB_CLUSTER_PARAMETER_GROUP,
		RDSActions.RESET_DB_PARAMETER_GROUP,
		RDSActions.RESTORE_DB_CLUSTER_FROM_S3,
		RDSActions.RESTORE_DB_CLUSTER_FROM_SNAPSHOT,
		RDSActions.RESTORE_DB_CLUSTER_TO_POINT_IN_TIME,
		RDSActions.RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT,
		RDSActions.RESTORE_DB_INSTANCE_FROM_S3,
		RDSActions.RESTORE_DB_INSTANCE_TO_POINT_IN_TIME,
		RDSActions.REVOKE_DB_SECURITY_GROUP_INGRESS,
		RDSActions.START_ACTIVITY_STREAM,
		RDSActions.START_DB_CLUSTER,
		RDSActions.START_DB_INSTANCE,
		RDSActions.START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION,
		RDSActions.START_EXPORT_TASK,
		RDSActions.STOP_ACTIVITY_STREAM,
		RDSActions.STOP_DB_CLUSTER,
		RDSActions.STOP_DB_INSTANCE,
		RDSActions.STOP_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION,
		RDSActions.SWITCHOVER_BLUE_GREEN_DEPLOYMENT,
		RDSActions.SWITCHOVER_GLOBAL_CLUSTER,
		RDSActions.SWITCHOVER_READ_REPLICA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RDSActions.DESCRIBE_ACCOUNT_ATTRIBUTES,
		RDSActions.DESCRIBE_BLUE_GREEN_DEPLOYMENTS,
		RDSActions.DESCRIBE_CERTIFICATES,
		RDSActions.DESCRIBE_DB_CLUSTER_AUTOMATED_BACKUPS,
		RDSActions.DESCRIBE_DB_CLUSTER_BACKTRACKS,
		RDSActions.DESCRIBE_DB_CLUSTER_ENDPOINTS,
		RDSActions.DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS,
		RDSActions.DESCRIBE_DB_CLUSTER_PARAMETERS,
		RDSActions.DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES,
		RDSActions.DESCRIBE_DB_CLUSTER_SNAPSHOTS,
		RDSActions.DESCRIBE_DB_CLUSTERS,
		RDSActions.DESCRIBE_DB_ENGINE_VERSIONS,
		RDSActions.DESCRIBE_DB_INSTANCE_AUTOMATED_BACKUPS,
		RDSActions.DESCRIBE_DB_INSTANCES,
		RDSActions.DESCRIBE_DB_LOG_FILES,
		RDSActions.DESCRIBE_DB_MAJOR_ENGINE_VERSIONS,
		RDSActions.DESCRIBE_DB_PARAMETER_GROUPS,
		RDSActions.DESCRIBE_DB_PARAMETERS,
		RDSActions.DESCRIBE_DB_PROXIES,
		RDSActions.DESCRIBE_DB_PROXY_ENDPOINTS,
		RDSActions.DESCRIBE_DB_PROXY_TARGET_GROUPS,
		RDSActions.DESCRIBE_DB_PROXY_TARGETS,
		RDSActions.DESCRIBE_DB_RECOMMENDATIONS,
		RDSActions.DESCRIBE_DB_SECURITY_GROUPS,
		RDSActions.DESCRIBE_DB_SHARD_GROUPS,
		RDSActions.DESCRIBE_DB_SNAPSHOT_ATTRIBUTES,
		RDSActions.DESCRIBE_DB_SNAPSHOT_TENANT_DATABASES,
		RDSActions.DESCRIBE_DB_SNAPSHOTS,
		RDSActions.DESCRIBE_DB_SUBNET_GROUPS,
		RDSActions.DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS,
		RDSActions.DESCRIBE_ENGINE_DEFAULT_PARAMETERS,
		RDSActions.DESCRIBE_EVENT_CATEGORIES,
		RDSActions.DESCRIBE_EVENT_SUBSCRIPTIONS,
		RDSActions.DESCRIBE_EVENTS,
		RDSActions.DESCRIBE_EXPORT_TASKS,
		RDSActions.DESCRIBE_GLOBAL_CLUSTERS,
		RDSActions.DESCRIBE_INTEGRATIONS,
		RDSActions.DESCRIBE_OPTION_GROUP_OPTIONS,
		RDSActions.DESCRIBE_OPTION_GROUPS,
		RDSActions.DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS,
		RDSActions.DESCRIBE_PENDING_MAINTENANCE_ACTIONS,
		RDSActions.DESCRIBE_RESERVED_DB_INSTANCES,
		RDSActions.DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS,
		RDSActions.DESCRIBE_SOURCE_REGIONS,
		RDSActions.DESCRIBE_TENANT_DATABASES,
		RDSActions.DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		RDSActions.AUTHORIZE_DB_SECURITY_GROUP_INGRESS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RDSActions.ADD_TAGS_TO_RESOURCE,
		RDSActions.REMOVE_TAGS_FROM_RESOURCE,
	];
}

const AutoBackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):auto-backup:(?<dbInstanceAutomatedBackupId>[^:/?]+)$",
);
const CevArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cev:(?<engine>[^:/?]+)/(?<engineVersion>[^:/?]+)/(?<customDBEngineVersionId>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<dbClusterInstanceName>[^:/?]+)$",
);
const ClusterAutoBackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-auto-backup:(?<dbClusterAutomatedBackupId>[^:/?]+)$",
);
const ClusterEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-endpoint:(?<dbClusterEndpoint>[^:/?]+)$",
);
const ClusterPgArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-pg:(?<clusterParameterGroupName>[^:/?]+)$",
);
const ClusterSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):cluster-snapshot:(?<clusterSnapshotName>[^:/?]+)$",
);
const DBArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):db:(?<dbInstanceName>[^:/?]+)$",
);
const DeploymentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):deployment:(?<blueGreenDeploymentIdentifier>[^:/?]+)$",
);
const EsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):es:(?<subscriptionName>[^:/?]+)$",
);
const GlobalClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds::(?<account>[^:]*):global-cluster:(?<globalCluster>[^:/?]+)$",
);
const IntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):integration:(?<integrationIdentifier>[^:/?]+)$",
);
const OgArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):og:(?<optionGroupName>[^:/?]+)$",
);
const PgArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):pg:(?<parameterGroupName>[^:/?]+)$",
);
const ProxyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):db-proxy:(?<dbProxyId>[^:/?]+)$",
);
const ProxyEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):db-proxy-endpoint:(?<dbProxyEndpointId>[^:/?]+)$",
);
const RiArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):ri:(?<reservedDBInstanceName>[^:/?]+)$",
);
const SecgrpArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):secgrp:(?<securityGroupName>[^:/?]+)$",
);
const ShardgrpArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):shard-group:(?<dbShardGroupResourceId>[^:/?]+)$",
);
const SnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):snapshot:(?<snapshotName>[^:/?]+)$",
);
const SnapshotTenantDatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):snapshot-tenant-database:(?<snapshotName>[^:/?]+):(?<tenantResourceId>[^:/?]+)$",
);
const SubgrpArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):subgrp:(?<subnetGroupName>[^:/?]+)$",
);
const TargetGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):target-group:(?<targetGroupId>[^:/?]+)$",
);
const TenantDatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rds:(?<region>[^:]*):(?<account>[^:]*):tenant-database:(?<tenantResourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for rds resources.
 */
export class RDSResources {
	/**
	 * Builds an ARN for the auto-backup resource.
	 */
	static autoBackup(props: {
		/** The DbInstanceAutomatedBackupId component of the ARN. */
		readonly dbInstanceAutomatedBackupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAutoBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbInstanceAutomatedBackupId: string;
	} {
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
	static cev(props: {
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
	}): string {
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
	static parseCevArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		engine: string;
		engineVersion: string;
		customDBEngineVersionId: string;
	} {
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
	static cluster(props: {
		/** The DbClusterInstanceName component of the ARN. */
		readonly dbClusterInstanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbClusterInstanceName: string;
	} {
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
	static clusterAutoBackup(props: {
		/** The DbClusterAutomatedBackupId component of the ARN. */
		readonly dbClusterAutomatedBackupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterAutoBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbClusterAutomatedBackupId: string;
	} {
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
	static clusterEndpoint(props: {
		/** The DbClusterEndpoint component of the ARN. */
		readonly dbClusterEndpoint: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbClusterEndpoint: string;
	} {
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
	static clusterPg(props: {
		/** The ClusterParameterGroupName component of the ARN. */
		readonly clusterParameterGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterPgArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterParameterGroupName: string;
	} {
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
	static clusterSnapshot(props: {
		/** The ClusterSnapshotName component of the ARN. */
		readonly clusterSnapshotName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterSnapshotName: string;
	} {
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
	static db(props: {
		/** The DbInstanceName component of the ARN. */
		readonly dbInstanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDBArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbInstanceName: string;
	} {
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
	static deployment(props: {
		/** The BlueGreenDeploymentIdentifier component of the ARN. */
		readonly blueGreenDeploymentIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDeploymentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		blueGreenDeploymentIdentifier: string;
	} {
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
	static es(props: {
		/** The SubscriptionName component of the ARN. */
		readonly subscriptionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subscriptionName: string;
	} {
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
	static globalCluster(props: {
		/** The GlobalCluster component of the ARN. */
		readonly globalCluster: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGlobalClusterArn(arn: string): {
		partition: string;
		account: string;
		globalCluster: string;
	} {
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
	static integration(props: {
		/** The IntegrationIdentifier component of the ARN. */
		readonly integrationIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		integrationIdentifier: string;
	} {
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
	static og(props: {
		/** The OptionGroupName component of the ARN. */
		readonly optionGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOgArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		optionGroupName: string;
	} {
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
	static pg(props: {
		/** The ParameterGroupName component of the ARN. */
		readonly parameterGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePgArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		parameterGroupName: string;
	} {
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
	static proxy(props: {
		/** The DbProxyId component of the ARN. */
		readonly dbProxyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProxyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbProxyId: string;
	} {
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
	static proxyEndpoint(props: {
		/** The DbProxyEndpointId component of the ARN. */
		readonly dbProxyEndpointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProxyEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbProxyEndpointId: string;
	} {
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
	static ri(props: {
		/** The ReservedDbInstanceName component of the ARN. */
		readonly reservedDBInstanceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRiArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reservedDBInstanceName: string;
	} {
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
	static secgrp(props: {
		/** The SecurityGroupName component of the ARN. */
		readonly securityGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSecgrpArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		securityGroupName: string;
	} {
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
	static shardgrp(props: {
		/** The DbShardGroupResourceId component of the ARN. */
		readonly dbShardGroupResourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseShardgrpArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbShardGroupResourceId: string;
	} {
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
	static snapshot(props: {
		/** The SnapshotName component of the ARN. */
		readonly snapshotName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		snapshotName: string;
	} {
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
	static snapshotTenantDatabase(props: {
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
	}): string {
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
	static parseSnapshotTenantDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		snapshotName: string;
		tenantResourceId: string;
	} {
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
	static subgrp(props: {
		/** The SubnetGroupName component of the ARN. */
		readonly subnetGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSubgrpArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subnetGroupName: string;
	} {
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
	static targetGroup(props: {
		/** The TargetGroupId component of the ARN. */
		readonly targetGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTargetGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		targetGroupId: string;
	} {
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
	static tenantDatabase(props: {
		/** The TenantResourceId component of the ARN. */
		readonly tenantResourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTenantDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tenantResourceId: string;
	} {
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
	static readonly ADD_ROLE_TO_DB_CLUSTER: string[] = [
		"rds:AddRoleToDBCluster",
		"iam:PassRole",
	];
	/** IAM actions required for the AddRoleToDBInstance API call. */
	static readonly ADD_ROLE_TO_DB_INSTANCE: string[] = [
		"rds:AddRoleToDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the AddSourceIdentifierToSubscription API call. */
	static readonly ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION: string[] = [
		"rds:AddSourceIdentifierToSubscription",
	];
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly ADD_TAGS_TO_RESOURCE: string[] = ["rds:AddTagsToResource"];
	/** IAM actions required for the ApplyPendingMaintenanceAction API call. */
	static readonly APPLY_PENDING_MAINTENANCE_ACTION: string[] = [
		"rds:ApplyPendingMaintenanceAction",
	];
	/** IAM actions required for the AuthorizeDBSecurityGroupIngress API call. */
	static readonly AUTHORIZE_DB_SECURITY_GROUP_INGRESS: string[] = [
		"rds:AuthorizeDBSecurityGroupIngress",
	];
	/** IAM actions required for the BacktrackDBCluster API call. */
	static readonly BACKTRACK_DB_CLUSTER: string[] = ["rds:BacktrackDBCluster"];
	/** IAM actions required for the CancelExportTask API call. */
	static readonly CANCEL_EXPORT_TASK: string[] = ["rds:CancelExportTask"];
	/** IAM actions required for the CopyDBClusterParameterGroup API call. */
	static readonly COPY_DB_CLUSTER_PARAMETER_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyDBClusterParameterGroup",
	];
	/** IAM actions required for the CopyDBClusterSnapshot API call. */
	static readonly COPY_DB_CLUSTER_SNAPSHOT: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyDBClusterSnapshot",
	];
	/** IAM actions required for the CopyDBParameterGroup API call. */
	static readonly COPY_DB_PARAMETER_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyDBParameterGroup",
	];
	/** IAM actions required for the CopyDBSnapshot API call. */
	static readonly COPY_DB_SNAPSHOT: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyCustomDBEngineVersion",
		"rds:CopyDBSnapshot",
	];
	/** IAM actions required for the CopyOptionGroup API call. */
	static readonly COPY_OPTION_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CopyOptionGroup",
	];
	/** IAM actions required for the CreateBlueGreenDeployment API call. */
	static readonly CREATE_BLUE_GREEN_DEPLOYMENT: string[] = [
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
	static readonly CREATE_CUSTOM_DB_ENGINE_VERSION: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateCustomDBEngineVersion",
	];
	/** IAM actions required for the CreateDBCluster API call. */
	static readonly CREATE_DB_CLUSTER: string[] = [
		"rds:AddRoleToDBCluster",
		"rds:AddTagsToResource",
		"rds:CreateDBCluster",
		"rds:CreateDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBClusterEndpoint API call. */
	static readonly CREATE_DB_CLUSTER_ENDPOINT: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterEndpoint",
	];
	/** IAM actions required for the CreateDBClusterParameterGroup API call. */
	static readonly CREATE_DB_CLUSTER_PARAMETER_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterParameterGroup",
	];
	/** IAM actions required for the CreateDBClusterSnapshot API call. */
	static readonly CREATE_DB_CLUSTER_SNAPSHOT: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterSnapshot",
	];
	/** IAM actions required for the CreateDBInstance API call. */
	static readonly CREATE_DB_INSTANCE: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBInstance",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBInstanceReadReplica API call. */
	static readonly CREATE_DB_INSTANCE_READ_REPLICA: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBInstanceReadReplica",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBParameterGroup API call. */
	static readonly CREATE_DB_PARAMETER_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBParameterGroup",
	];
	/** IAM actions required for the CreateDBProxy API call. */
	static readonly CREATE_DB_PROXY: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBProxy",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateDBProxyEndpoint API call. */
	static readonly CREATE_DB_PROXY_ENDPOINT: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBProxyEndpoint",
	];
	/** IAM actions required for the CreateDBSecurityGroup API call. */
	static readonly CREATE_DB_SECURITY_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSecurityGroup",
	];
	/** IAM actions required for the CreateDBShardGroup API call. */
	static readonly CREATE_DB_SHARD_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBShardGroup",
	];
	/** IAM actions required for the CreateDBSnapshot API call. */
	static readonly CREATE_DB_SNAPSHOT: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
	];
	/** IAM actions required for the CreateDBSubnetGroup API call. */
	static readonly CREATE_DB_SUBNET_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSubnetGroup",
	];
	/** IAM actions required for the CreateEventSubscription API call. */
	static readonly CREATE_EVENT_SUBSCRIPTION: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateEventSubscription",
	];
	/** IAM actions required for the CreateGlobalCluster API call. */
	static readonly CREATE_GLOBAL_CLUSTER: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateGlobalCluster",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CREATE_INTEGRATION: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateIntegration",
	];
	/** IAM actions required for the CreateOptionGroup API call. */
	static readonly CREATE_OPTION_GROUP: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateOptionGroup",
	];
	/** IAM actions required for the CreateTenantDatabase API call. */
	static readonly CREATE_TENANT_DATABASE: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateTenantDatabase",
	];
	/** IAM actions required for the DeleteBlueGreenDeployment API call. */
	static readonly DELETE_BLUE_GREEN_DEPLOYMENT: string[] = [
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
	static readonly DELETE_CUSTOM_DB_ENGINE_VERSION: string[] = [
		"rds:DeleteCustomDBEngineVersion",
	];
	/** IAM actions required for the DeleteDBCluster API call. */
	static readonly DELETE_DB_CLUSTER: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBClusterSnapshot",
		"rds:DeleteDBCluster",
		"rds:DeleteDBInstance",
	];
	/** IAM actions required for the DeleteDBClusterAutomatedBackup API call. */
	static readonly DELETE_DB_CLUSTER_AUTOMATED_BACKUP: string[] = [
		"rds:DeleteDBClusterAutomatedBackup",
	];
	/** IAM actions required for the DeleteDBClusterEndpoint API call. */
	static readonly DELETE_DB_CLUSTER_ENDPOINT: string[] = [
		"rds:DeleteDBClusterEndpoint",
	];
	/** IAM actions required for the DeleteDBClusterParameterGroup API call. */
	static readonly DELETE_DB_CLUSTER_PARAMETER_GROUP: string[] = [
		"rds:DeleteDBClusterParameterGroup",
	];
	/** IAM actions required for the DeleteDBClusterSnapshot API call. */
	static readonly DELETE_DB_CLUSTER_SNAPSHOT: string[] = [
		"rds:DeleteDBClusterSnapshot",
	];
	/** IAM actions required for the DeleteDBInstance API call. */
	static readonly DELETE_DB_INSTANCE: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
		"rds:DeleteDBInstance",
		"rds:DeleteTenantDatabase",
	];
	/** IAM actions required for the DeleteDBInstanceAutomatedBackup API call. */
	static readonly DELETE_DB_INSTANCE_AUTOMATED_BACKUP: string[] = [
		"rds:DeleteDBInstanceAutomatedBackup",
	];
	/** IAM actions required for the DeleteDBParameterGroup API call. */
	static readonly DELETE_DB_PARAMETER_GROUP: string[] = [
		"rds:DeleteDBParameterGroup",
	];
	/** IAM actions required for the DeleteDBProxy API call. */
	static readonly DELETE_DB_PROXY: string[] = ["rds:DeleteDBProxy"];
	/** IAM actions required for the DeleteDBProxyEndpoint API call. */
	static readonly DELETE_DB_PROXY_ENDPOINT: string[] = [
		"rds:DeleteDBProxyEndpoint",
	];
	/** IAM actions required for the DeleteDBSecurityGroup API call. */
	static readonly DELETE_DB_SECURITY_GROUP: string[] = [
		"rds:DeleteDBSecurityGroup",
	];
	/** IAM actions required for the DeleteDBShardGroup API call. */
	static readonly DELETE_DB_SHARD_GROUP: string[] = ["rds:DeleteDBShardGroup"];
	/** IAM actions required for the DeleteDBSnapshot API call. */
	static readonly DELETE_DB_SNAPSHOT: string[] = ["rds:DeleteDBSnapshot"];
	/** IAM actions required for the DeleteDBSubnetGroup API call. */
	static readonly DELETE_DB_SUBNET_GROUP: string[] = [
		"rds:DeleteDBSubnetGroup",
	];
	/** IAM actions required for the DeleteEventSubscription API call. */
	static readonly DELETE_EVENT_SUBSCRIPTION: string[] = [
		"rds:DeleteEventSubscription",
	];
	/** IAM actions required for the DeleteGlobalCluster API call. */
	static readonly DELETE_GLOBAL_CLUSTER: string[] = ["rds:DeleteGlobalCluster"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DELETE_INTEGRATION: string[] = ["rds:DeleteIntegration"];
	/** IAM actions required for the DeleteOptionGroup API call. */
	static readonly DELETE_OPTION_GROUP: string[] = ["rds:DeleteOptionGroup"];
	/** IAM actions required for the DeleteTenantDatabase API call. */
	static readonly DELETE_TENANT_DATABASE: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
		"rds:DeleteTenantDatabase",
	];
	/** IAM actions required for the DeregisterDBProxyTargets API call. */
	static readonly DEREGISTER_DB_PROXY_TARGETS: string[] = [
		"rds:DeregisterDBProxyTargets",
	];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES: string[] = [
		"rds:DescribeAccountAttributes",
	];
	/** IAM actions required for the DescribeBlueGreenDeployments API call. */
	static readonly DESCRIBE_BLUE_GREEN_DEPLOYMENTS: string[] = [
		"rds:DescribeBlueGreenDeployments",
	];
	/** IAM actions required for the DescribeCertificates API call. */
	static readonly DESCRIBE_CERTIFICATES: string[] = [
		"rds:DescribeCertificates",
	];
	/** IAM actions required for the DescribeDBClusterAutomatedBackups API call. */
	static readonly DESCRIBE_DB_CLUSTER_AUTOMATED_BACKUPS: string[] = [
		"rds:DescribeDBClusterAutomatedBackups",
	];
	/** IAM actions required for the DescribeDBClusterBacktracks API call. */
	static readonly DESCRIBE_DB_CLUSTER_BACKTRACKS: string[] = [
		"rds:DescribeDBClusterBacktracks",
	];
	/** IAM actions required for the DescribeDBClusterEndpoints API call. */
	static readonly DESCRIBE_DB_CLUSTER_ENDPOINTS: string[] = [
		"rds:DescribeDBClusterEndpoints",
	];
	/** IAM actions required for the DescribeDBClusterParameterGroups API call. */
	static readonly DESCRIBE_DB_CLUSTER_PARAMETER_GROUPS: string[] = [
		"rds:DescribeDBClusterParameterGroups",
	];
	/** IAM actions required for the DescribeDBClusterParameters API call. */
	static readonly DESCRIBE_DB_CLUSTER_PARAMETERS: string[] = [
		"rds:DescribeDBClusterParameters",
	];
	/** IAM actions required for the DescribeDBClusterSnapshotAttributes API call. */
	static readonly DESCRIBE_DB_CLUSTER_SNAPSHOT_ATTRIBUTES: string[] = [
		"rds:DescribeDBClusterSnapshotAttributes",
	];
	/** IAM actions required for the DescribeDBClusterSnapshots API call. */
	static readonly DESCRIBE_DB_CLUSTER_SNAPSHOTS: string[] = [
		"rds:DescribeDBClusterSnapshots",
	];
	/** IAM actions required for the DescribeDBClusters API call. */
	static readonly DESCRIBE_DB_CLUSTERS: string[] = ["rds:DescribeDBClusters"];
	/** IAM actions required for the DescribeDBEngineVersions API call. */
	static readonly DESCRIBE_DB_ENGINE_VERSIONS: string[] = [
		"rds:DescribeDBEngineVersions",
	];
	/** IAM actions required for the DescribeDBInstanceAutomatedBackups API call. */
	static readonly DESCRIBE_DB_INSTANCE_AUTOMATED_BACKUPS: string[] = [
		"rds:DescribeDBInstanceAutomatedBackups",
	];
	/** IAM actions required for the DescribeDBInstances API call. */
	static readonly DESCRIBE_DB_INSTANCES: string[] = ["rds:DescribeDBInstances"];
	/** IAM actions required for the DescribeDBLogFiles API call. */
	static readonly DESCRIBE_DB_LOG_FILES: string[] = ["rds:DescribeDBLogFiles"];
	/** IAM actions required for the DescribeDBMajorEngineVersions API call. */
	static readonly DESCRIBE_DB_MAJOR_ENGINE_VERSIONS: string[] = [
		"rds:DescribeDBMajorEngineVersions",
	];
	/** IAM actions required for the DescribeDBParameterGroups API call. */
	static readonly DESCRIBE_DB_PARAMETER_GROUPS: string[] = [
		"rds:DescribeDBParameterGroups",
	];
	/** IAM actions required for the DescribeDBParameters API call. */
	static readonly DESCRIBE_DB_PARAMETERS: string[] = [
		"rds:DescribeDBParameters",
	];
	/** IAM actions required for the DescribeDBProxies API call. */
	static readonly DESCRIBE_DB_PROXIES: string[] = ["rds:DescribeDBProxies"];
	/** IAM actions required for the DescribeDBProxyEndpoints API call. */
	static readonly DESCRIBE_DB_PROXY_ENDPOINTS: string[] = [
		"rds:DescribeDBProxyEndpoints",
	];
	/** IAM actions required for the DescribeDBProxyTargetGroups API call. */
	static readonly DESCRIBE_DB_PROXY_TARGET_GROUPS: string[] = [
		"rds:DescribeDBProxyTargetGroups",
	];
	/** IAM actions required for the DescribeDBProxyTargets API call. */
	static readonly DESCRIBE_DB_PROXY_TARGETS: string[] = [
		"rds:DescribeDBProxyTargets",
	];
	/** IAM actions required for the DescribeDBRecommendations API call. */
	static readonly DESCRIBE_DB_RECOMMENDATIONS: string[] = [
		"rds:DescribeDBRecommendations",
	];
	/** IAM actions required for the DescribeDBSecurityGroups API call. */
	static readonly DESCRIBE_DB_SECURITY_GROUPS: string[] = [
		"rds:DescribeDBSecurityGroups",
	];
	/** IAM actions required for the DescribeDBShardGroups API call. */
	static readonly DESCRIBE_DB_SHARD_GROUPS: string[] = [
		"rds:DescribeDBShardGroups",
	];
	/** IAM actions required for the DescribeDBSnapshotAttributes API call. */
	static readonly DESCRIBE_DB_SNAPSHOT_ATTRIBUTES: string[] = [
		"rds:DescribeDBSnapshotAttributes",
	];
	/** IAM actions required for the DescribeDBSnapshotTenantDatabases API call. */
	static readonly DESCRIBE_DB_SNAPSHOT_TENANT_DATABASES: string[] = [
		"rds:DescribeDBSnapshotTenantDatabases",
	];
	/** IAM actions required for the DescribeDBSnapshots API call. */
	static readonly DESCRIBE_DB_SNAPSHOTS: string[] = ["rds:DescribeDBSnapshots"];
	/** IAM actions required for the DescribeDBSubnetGroups API call. */
	static readonly DESCRIBE_DB_SUBNET_GROUPS: string[] = [
		"rds:DescribeDBSubnetGroups",
	];
	/** IAM actions required for the DescribeEngineDefaultClusterParameters API call. */
	static readonly DESCRIBE_ENGINE_DEFAULT_CLUSTER_PARAMETERS: string[] = [
		"rds:DescribeEngineDefaultClusterParameters",
	];
	/** IAM actions required for the DescribeEngineDefaultParameters API call. */
	static readonly DESCRIBE_ENGINE_DEFAULT_PARAMETERS: string[] = [
		"rds:DescribeEngineDefaultParameters",
	];
	/** IAM actions required for the DescribeEventCategories API call. */
	static readonly DESCRIBE_EVENT_CATEGORIES: string[] = [
		"rds:DescribeEventCategories",
	];
	/** IAM actions required for the DescribeEventSubscriptions API call. */
	static readonly DESCRIBE_EVENT_SUBSCRIPTIONS: string[] = [
		"rds:DescribeEventSubscriptions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["rds:DescribeEvents"];
	/** IAM actions required for the DescribeExportTasks API call. */
	static readonly DESCRIBE_EXPORT_TASKS: string[] = ["rds:DescribeExportTasks"];
	/** IAM actions required for the DescribeGlobalClusters API call. */
	static readonly DESCRIBE_GLOBAL_CLUSTERS: string[] = [
		"rds:DescribeGlobalClusters",
	];
	/** IAM actions required for the DescribeIntegrations API call. */
	static readonly DESCRIBE_INTEGRATIONS: string[] = [
		"rds:DescribeIntegrations",
	];
	/** IAM actions required for the DescribeOptionGroupOptions API call. */
	static readonly DESCRIBE_OPTION_GROUP_OPTIONS: string[] = [
		"rds:DescribeOptionGroupOptions",
	];
	/** IAM actions required for the DescribeOptionGroups API call. */
	static readonly DESCRIBE_OPTION_GROUPS: string[] = [
		"rds:DescribeOptionGroups",
	];
	/** IAM actions required for the DescribeOrderableDBInstanceOptions API call. */
	static readonly DESCRIBE_ORDERABLE_DB_INSTANCE_OPTIONS: string[] = [
		"rds:DescribeOrderableDBInstanceOptions",
	];
	/** IAM actions required for the DescribePendingMaintenanceActions API call. */
	static readonly DESCRIBE_PENDING_MAINTENANCE_ACTIONS: string[] = [
		"rds:DescribePendingMaintenanceActions",
	];
	/** IAM actions required for the DescribeReservedDBInstances API call. */
	static readonly DESCRIBE_RESERVED_DB_INSTANCES: string[] = [
		"rds:DescribeReservedDBInstances",
	];
	/** IAM actions required for the DescribeReservedDBInstancesOfferings API call. */
	static readonly DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS: string[] = [
		"rds:DescribeReservedDBInstancesOfferings",
	];
	/** IAM actions required for the DescribeServerlessV2PlatformVersions API call. */
	static readonly DESCRIBE_SERVERLESS_V2_PLATFORM_VERSIONS: string[] = [];
	/** IAM actions required for the DescribeSourceRegions API call. */
	static readonly DESCRIBE_SOURCE_REGIONS: string[] = [
		"rds:DescribeSourceRegions",
	];
	/** IAM actions required for the DescribeTenantDatabases API call. */
	static readonly DESCRIBE_TENANT_DATABASES: string[] = [
		"rds:DescribeTenantDatabases",
	];
	/** IAM actions required for the DescribeValidDBInstanceModifications API call. */
	static readonly DESCRIBE_VALID_DB_INSTANCE_MODIFICATIONS: string[] = [
		"rds:DescribeValidDBInstanceModifications",
	];
	/** IAM actions required for the DisableHttpEndpoint API call. */
	static readonly DISABLE_HTTP_ENDPOINT: string[] = ["rds:DisableHttpEndpoint"];
	/** IAM actions required for the DownloadDBLogFilePortion API call. */
	static readonly DOWNLOAD_DB_LOG_FILE_PORTION: string[] = [
		"rds:DownloadDBLogFilePortion",
	];
	/** IAM actions required for the EnableHttpEndpoint API call. */
	static readonly ENABLE_HTTP_ENDPOINT: string[] = ["rds:EnableHttpEndpoint"];
	/** IAM actions required for the FailoverDBCluster API call. */
	static readonly FAILOVER_DB_CLUSTER: string[] = ["rds:FailoverDBCluster"];
	/** IAM actions required for the FailoverGlobalCluster API call. */
	static readonly FAILOVER_GLOBAL_CLUSTER: string[] = [
		"rds:FailoverGlobalCluster",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"rds:ListTagsForResource",
	];
	/** IAM actions required for the ModifyActivityStream API call. */
	static readonly MODIFY_ACTIVITY_STREAM: string[] = [
		"rds:ModifyActivityStream",
	];
	/** IAM actions required for the ModifyCertificates API call. */
	static readonly MODIFY_CERTIFICATES: string[] = ["rds:ModifyCertificates"];
	/** IAM actions required for the ModifyCurrentDBClusterCapacity API call. */
	static readonly MODIFY_CURRENT_DB_CLUSTER_CAPACITY: string[] = [
		"rds:ModifyCurrentDBClusterCapacity",
	];
	/** IAM actions required for the ModifyCustomDBEngineVersion API call. */
	static readonly MODIFY_CUSTOM_DB_ENGINE_VERSION: string[] = [
		"rds:ModifyCustomDBEngineVersion",
	];
	/** IAM actions required for the ModifyDBCluster API call. */
	static readonly MODIFY_DB_CLUSTER: string[] = [
		"rds:ModifyDBCluster",
		"rds:ModifyDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDBClusterEndpoint API call. */
	static readonly MODIFY_DB_CLUSTER_ENDPOINT: string[] = [
		"rds:ModifyDBClusterEndpoint",
	];
	/** IAM actions required for the ModifyDBClusterParameterGroup API call. */
	static readonly MODIFY_DB_CLUSTER_PARAMETER_GROUP: string[] = [
		"rds:ModifyDBClusterParameterGroup",
	];
	/** IAM actions required for the ModifyDBClusterSnapshotAttribute API call. */
	static readonly MODIFY_DB_CLUSTER_SNAPSHOT_ATTRIBUTE: string[] = [
		"rds:ModifyDBClusterSnapshotAttribute",
	];
	/** IAM actions required for the ModifyDBInstance API call. */
	static readonly MODIFY_DB_INSTANCE: string[] = [
		"rds:AddTagsToResource",
		"rds:ModifyDBInstance",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDBParameterGroup API call. */
	static readonly MODIFY_DB_PARAMETER_GROUP: string[] = [
		"rds:ModifyDBParameterGroup",
	];
	/** IAM actions required for the ModifyDBProxy API call. */
	static readonly MODIFY_DB_PROXY: string[] = [
		"rds:ModifyDBProxy",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyDBProxyEndpoint API call. */
	static readonly MODIFY_DB_PROXY_ENDPOINT: string[] = [
		"rds:ModifyDBProxyEndpoint",
	];
	/** IAM actions required for the ModifyDBProxyTargetGroup API call. */
	static readonly MODIFY_DB_PROXY_TARGET_GROUP: string[] = [
		"rds:ModifyDBProxyTargetGroup",
	];
	/** IAM actions required for the ModifyDBRecommendation API call. */
	static readonly MODIFY_DB_RECOMMENDATION: string[] = [
		"rds:ModifyDBRecommendation",
	];
	/** IAM actions required for the ModifyDBShardGroup API call. */
	static readonly MODIFY_DB_SHARD_GROUP: string[] = ["rds:ModifyDBShardGroup"];
	/** IAM actions required for the ModifyDBSnapshot API call. */
	static readonly MODIFY_DB_SNAPSHOT: string[] = ["rds:ModifyDBSnapshot"];
	/** IAM actions required for the ModifyDBSnapshotAttribute API call. */
	static readonly MODIFY_DB_SNAPSHOT_ATTRIBUTE: string[] = [
		"rds:ModifyDBSnapshotAttribute",
	];
	/** IAM actions required for the ModifyDBSubnetGroup API call. */
	static readonly MODIFY_DB_SUBNET_GROUP: string[] = [
		"rds:ModifyDBSubnetGroup",
	];
	/** IAM actions required for the ModifyEventSubscription API call. */
	static readonly MODIFY_EVENT_SUBSCRIPTION: string[] = [
		"rds:ModifyEventSubscription",
	];
	/** IAM actions required for the ModifyGlobalCluster API call. */
	static readonly MODIFY_GLOBAL_CLUSTER: string[] = ["rds:ModifyGlobalCluster"];
	/** IAM actions required for the ModifyIntegration API call. */
	static readonly MODIFY_INTEGRATION: string[] = ["rds:ModifyIntegration"];
	/** IAM actions required for the ModifyOptionGroup API call. */
	static readonly MODIFY_OPTION_GROUP: string[] = [
		"rds:ModifyOptionGroup",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyTenantDatabase API call. */
	static readonly MODIFY_TENANT_DATABASE: string[] = [
		"rds:ModifyTenantDatabase",
	];
	/** IAM actions required for the PromoteReadReplica API call. */
	static readonly PROMOTE_READ_REPLICA: string[] = [
		"rds:AddTagsToResource",
		"rds:PromoteReadReplica",
	];
	/** IAM actions required for the PromoteReadReplicaDBCluster API call. */
	static readonly PROMOTE_READ_REPLICA_DB_CLUSTER: string[] = [
		"rds:PromoteReadReplicaDBCluster",
	];
	/** IAM actions required for the PurchaseReservedDBInstancesOffering API call. */
	static readonly PURCHASE_RESERVED_DB_INSTANCES_OFFERING: string[] = [
		"rds:AddTagsToResource",
		"rds:PurchaseReservedDBInstancesOffering",
	];
	/** IAM actions required for the RebootDBCluster API call. */
	static readonly REBOOT_DB_CLUSTER: string[] = [
		"rds:RebootDBCluster",
		"rds:RebootDBInstance",
	];
	/** IAM actions required for the RebootDBInstance API call. */
	static readonly REBOOT_DB_INSTANCE: string[] = ["rds:RebootDBInstance"];
	/** IAM actions required for the RebootDBShardGroup API call. */
	static readonly REBOOT_DB_SHARD_GROUP: string[] = ["rds:RebootDBShardGroup"];
	/** IAM actions required for the RegisterDBProxyTargets API call. */
	static readonly REGISTER_DB_PROXY_TARGETS: string[] = [
		"rds:RegisterDBProxyTargets",
	];
	/** IAM actions required for the RemoveFromGlobalCluster API call. */
	static readonly REMOVE_FROM_GLOBAL_CLUSTER: string[] = [
		"rds:RemoveFromGlobalCluster",
	];
	/** IAM actions required for the RemoveRoleFromDBCluster API call. */
	static readonly REMOVE_ROLE_FROM_DB_CLUSTER: string[] = [
		"iam:PassRole",
		"rds:RemoveRoleFromDBCluster",
	];
	/** IAM actions required for the RemoveRoleFromDBInstance API call. */
	static readonly REMOVE_ROLE_FROM_DB_INSTANCE: string[] = [
		"iam:PassRole",
		"rds:RemoveRoleFromDBInstance",
	];
	/** IAM actions required for the RemoveSourceIdentifierFromSubscription API call. */
	static readonly REMOVE_SOURCE_IDENTIFIER_FROM_SUBSCRIPTION: string[] = [
		"rds:RemoveSourceIdentifierFromSubscription",
	];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly REMOVE_TAGS_FROM_RESOURCE: string[] = [
		"rds:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetDBClusterParameterGroup API call. */
	static readonly RESET_DB_CLUSTER_PARAMETER_GROUP: string[] = [
		"rds:ResetDBClusterParameterGroup",
	];
	/** IAM actions required for the ResetDBParameterGroup API call. */
	static readonly RESET_DB_PARAMETER_GROUP: string[] = [
		"rds:ResetDBParameterGroup",
	];
	/** IAM actions required for the RestoreDBClusterFromS3 API call. */
	static readonly RESTORE_DB_CLUSTER_FROM_S3: string[] = [
		"rds:AddRoleToDBCluster",
		"rds:AddTagsToResource",
		"iam:PassRole",
		"rds:RestoreDBClusterFromS3",
	];
	/** IAM actions required for the RestoreDBClusterFromSnapshot API call. */
	static readonly RESTORE_DB_CLUSTER_FROM_SNAPSHOT: string[] = [
		"rds:AddRoleToDBCluster",
		"rds:AddTagsToResource",
		"rds:CreateDBInstance",
		"iam:PassRole",
		"rds:RestoreDBClusterFromSnapshot",
	];
	/** IAM actions required for the RestoreDBClusterToPointInTime API call. */
	static readonly RESTORE_DB_CLUSTER_TO_POINT_IN_TIME: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBInstance",
		"iam:PassRole",
		"rds:RestoreDBClusterToPointInTime",
	];
	/** IAM actions required for the RestoreDBInstanceFromDBSnapshot API call. */
	static readonly RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
		"rds:RestoreDBInstanceFromDBSnapshot",
	];
	/** IAM actions required for the RestoreDBInstanceFromS3 API call. */
	static readonly RESTORE_DB_INSTANCE_FROM_S3: string[] = [
		"rds:AddTagsToResource",
		"iam:PassRole",
		"rds:RestoreDBInstanceFromS3",
	];
	/** IAM actions required for the RestoreDBInstanceToPointInTime API call. */
	static readonly RESTORE_DB_INSTANCE_TO_POINT_IN_TIME: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateTenantDatabase",
		"iam:PassRole",
		"rds:RestoreDBInstanceToPointInTime",
	];
	/** IAM actions required for the RevokeDBSecurityGroupIngress API call. */
	static readonly REVOKE_DB_SECURITY_GROUP_INGRESS: string[] = [
		"rds:RevokeDBSecurityGroupIngress",
	];
	/** IAM actions required for the StartActivityStream API call. */
	static readonly START_ACTIVITY_STREAM: string[] = ["rds:StartActivityStream"];
	/** IAM actions required for the StartDBCluster API call. */
	static readonly START_DB_CLUSTER: string[] = ["rds:StartDBCluster"];
	/** IAM actions required for the StartDBInstance API call. */
	static readonly START_DB_INSTANCE: string[] = ["rds:StartDBInstance"];
	/** IAM actions required for the StartDBInstanceAutomatedBackupsReplication API call. */
	static readonly START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION: string[] = [
		"rds:AddTagsToResource",
		"rds:StartDBInstanceAutomatedBackupsReplication",
	];
	/** IAM actions required for the StartExportTask API call. */
	static readonly START_EXPORT_TASK: string[] = [
		"iam:PassRole",
		"rds:StartExportTask",
	];
	/** IAM actions required for the StopActivityStream API call. */
	static readonly STOP_ACTIVITY_STREAM: string[] = ["rds:StopActivityStream"];
	/** IAM actions required for the StopDBCluster API call. */
	static readonly STOP_DB_CLUSTER: string[] = ["rds:StopDBCluster"];
	/** IAM actions required for the StopDBInstance API call. */
	static readonly STOP_DB_INSTANCE: string[] = [
		"rds:AddTagsToResource",
		"rds:CreateDBSnapshot",
		"rds:StopDBInstance",
	];
	/** IAM actions required for the StopDBInstanceAutomatedBackupsReplication API call. */
	static readonly STOP_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION: string[] = [
		"rds:StopDBInstanceAutomatedBackupsReplication",
	];
	/** IAM actions required for the SwitchoverBlueGreenDeployment API call. */
	static readonly SWITCHOVER_BLUE_GREEN_DEPLOYMENT: string[] = [
		"rds:ModifyDBCluster",
		"rds:ModifyDBInstance",
		"rds:ModifyGlobalCluster",
		"rds:PromoteReadReplica",
		"rds:PromoteReadReplicaDBCluster",
		"rds:SwitchoverBlueGreenDeployment",
	];
	/** IAM actions required for the SwitchoverGlobalCluster API call. */
	static readonly SWITCHOVER_GLOBAL_CLUSTER: string[] = [
		"rds:SwitchoverGlobalCluster",
	];
	/** IAM actions required for the SwitchoverReadReplica API call. */
	static readonly SWITCHOVER_READ_REPLICA: string[] = [
		"rds:SwitchoverReadReplica",
	];
}

/**
 * Condition key constants and builders for rds.
 */
export class RDSConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly ADD_TAGS_TO_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:TagsFromRequest",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBClusterParameterGroup action. */
	static readonly COPY_DB_CLUSTER_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBClusterSnapshot action. */
	static readonly COPY_DB_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBParameterGroup action. */
	static readonly COPY_DB_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyDBSnapshot action. */
	static readonly COPY_DB_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:CopyOptionGroup",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CopyOptionGroup action. */
	static readonly COPY_OPTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateBlueGreenDeployment action. */
	static readonly CREATE_BLUE_GREEN_DEPLOYMENT_CONDITION_KEYS: string[] = [
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
	static readonly CREATE_CUSTOM_DB_ENGINE_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBCluster action. */
	static readonly CREATE_DB_CLUSTER_CONDITION_KEYS: string[] = [
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
	static readonly CREATE_DB_CLUSTER_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:EndpointType",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBClusterParameterGroup action. */
	static readonly CREATE_DB_CLUSTER_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBClusterSnapshot action. */
	static readonly CREATE_DB_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBInstance action. */
	static readonly CREATE_DB_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:BackupTarget",
		"rds:ManageMasterUserPassword",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBInstanceReadReplica action. */
	static readonly CREATE_DB_INSTANCE_READ_REPLICA_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBParameterGroup action. */
	static readonly CREATE_DB_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBProxy action. */
	static readonly CREATE_DB_PROXY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDBProxyEndpoint action. */
	static readonly CREATE_DB_PROXY_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDBSecurityGroup action. */
	static readonly CREATE_DB_SECURITY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBShardGroup action. */
	static readonly CREATE_DB_SHARD_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBSnapshot action. */
	static readonly CREATE_DB_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:BackupTarget",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDBSubnetGroup action. */
	static readonly CREATE_DB_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateEventSubscription action. */
	static readonly CREATE_EVENT_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateGlobalCluster action. */
	static readonly CREATE_GLOBAL_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CREATE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateOptionGroup action. */
	static readonly CREATE_OPTION_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the CreateTenantDatabase action. */
	static readonly CREATE_TENANT_DATABASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:ManageMasterUserPassword",
		"rds:TenantDatabaseName",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteBlueGreenDeployment action. */
	static readonly DELETE_BLUE_GREEN_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeIntegrations action. */
	static readonly DESCRIBE_INTEGRATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyDBCluster action. */
	static readonly MODIFY_DB_CLUSTER_CONDITION_KEYS: string[] = [
		"rds:DatabaseClass",
		"rds:ManageMasterUserPassword",
		"rds:Piops",
		"rds:StorageSize",
	];
	/** Condition keys applicable to the ModifyDBInstance action. */
	static readonly MODIFY_DB_INSTANCE_CONDITION_KEYS: string[] = [
		"rds:ManageMasterUserPassword",
	];
	/** Condition keys applicable to the ModifyTenantDatabase action. */
	static readonly MODIFY_TENANT_DATABASE_CONDITION_KEYS: string[] = [
		"rds:ManageMasterUserPassword",
		"rds:TenantDatabaseName",
	];
	/** Condition keys applicable to the PurchaseReservedDBInstancesOffering action. */
	static readonly PURCHASE_RESERVED_DB_INSTANCES_OFFERING_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "rds:req-tag/${TagKey}"];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly REMOVE_TAGS_FROM_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBClusterFromS3 action. */
	static readonly RESTORE_DB_CLUSTER_FROM_S3_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:DatabaseEngine",
		"rds:DatabaseName",
		"rds:ManageMasterUserPassword",
		"rds:StorageEncrypted",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBClusterFromSnapshot action. */
	static readonly RESTORE_DB_CLUSTER_FROM_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:DatabaseClass",
		"rds:Piops",
		"rds:StorageSize",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBClusterToPointInTime action. */
	static readonly RESTORE_DB_CLUSTER_TO_POINT_IN_TIME_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"rds:DatabaseClass",
			"rds:Piops",
			"rds:StorageSize",
			"rds:req-tag/${TagKey}",
		];
	/** Condition keys applicable to the RestoreDBInstanceFromDBSnapshot action. */
	static readonly RESTORE_DB_INSTANCE_FROM_DB_SNAPSHOT_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"rds:BackupTarget",
			"rds:ManageMasterUserPassword",
			"rds:PubliclyAccessible",
			"rds:req-tag/${TagKey}",
		];
	/** Condition keys applicable to the RestoreDBInstanceFromS3 action. */
	static readonly RESTORE_DB_INSTANCE_FROM_S3_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"rds:ManageMasterUserPassword",
		"rds:PubliclyAccessible",
		"rds:req-tag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreDBInstanceToPointInTime action. */
	static readonly RESTORE_DB_INSTANCE_TO_POINT_IN_TIME_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"rds:BackupTarget",
			"rds:ManageMasterUserPassword",
			"rds:PubliclyAccessible",
			"rds:req-tag/${TagKey}",
		];
	/** Condition keys applicable to the StartDBInstanceAutomatedBackupsReplication action. */
	static readonly START_DB_INSTANCE_AUTOMATED_BACKUPS_REPLICATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "rds:req-tag/${TagKey}"];
	/** Condition keys applicable to the SwitchoverBlueGreenDeployment action. */
	static readonly SWITCHOVER_BLUE_GREEN_DEPLOYMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
