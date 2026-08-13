// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/redshift.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the redshift service.
 */
export class RedshiftActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "redshift";

	/** [Write] redshift:AcceptReservedNodeExchange */
	static readonly ACCEPT_RESERVED_NODE_EXCHANGE =
		"redshift:AcceptReservedNodeExchange";
	/** [Write] redshift:AddPartner */
	static readonly ADD_PARTNER = "redshift:AddPartner";
	/** [Write] redshift:AssociateDataShareConsumer */
	static readonly ASSOCIATE_DATA_SHARE_CONSUMER =
		"redshift:AssociateDataShareConsumer";
	/** [Write] redshift:AuthorizeClusterSecurityGroupIngress */
	static readonly AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS =
		"redshift:AuthorizeClusterSecurityGroupIngress";
	/** [PermissionManagement] redshift:AuthorizeDataShare */
	static readonly AUTHORIZE_DATA_SHARE = "redshift:AuthorizeDataShare";
	/** [PermissionManagement] redshift:AuthorizeEndpointAccess */
	static readonly AUTHORIZE_ENDPOINT_ACCESS =
		"redshift:AuthorizeEndpointAccess";
	/** [Write] redshift:AuthorizeInboundIntegration */
	static readonly AUTHORIZE_INBOUND_INTEGRATION =
		"redshift:AuthorizeInboundIntegration";
	/** [PermissionManagement] redshift:AuthorizeSnapshotAccess */
	static readonly AUTHORIZE_SNAPSHOT_ACCESS =
		"redshift:AuthorizeSnapshotAccess";
	/** [Write] redshift:BatchDeleteClusterSnapshots */
	static readonly BATCH_DELETE_CLUSTER_SNAPSHOTS =
		"redshift:BatchDeleteClusterSnapshots";
	/** [Write] redshift:BatchModifyClusterSnapshots */
	static readonly BATCH_MODIFY_CLUSTER_SNAPSHOTS =
		"redshift:BatchModifyClusterSnapshots";
	/** [Write] redshift:CancelQuery */
	static readonly CANCEL_QUERY = "redshift:CancelQuery";
	/** [Write] redshift:CancelQuerySession */
	static readonly CANCEL_QUERY_SESSION = "redshift:CancelQuerySession";
	/** [Write] redshift:CancelResize */
	static readonly CANCEL_RESIZE = "redshift:CancelResize";
	/** [Write] redshift:CopyClusterSnapshot */
	static readonly COPY_CLUSTER_SNAPSHOT = "redshift:CopyClusterSnapshot";
	/** [Write] redshift:CreateAuthenticationProfile */
	static readonly CREATE_AUTHENTICATION_PROFILE =
		"redshift:CreateAuthenticationProfile";
	/** [Write] redshift:CreateCluster */
	static readonly CREATE_CLUSTER = "redshift:CreateCluster";
	/** [Write] redshift:CreateClusterParameterGroup */
	static readonly CREATE_CLUSTER_PARAMETER_GROUP =
		"redshift:CreateClusterParameterGroup";
	/** [Write] redshift:CreateClusterSecurityGroup */
	static readonly CREATE_CLUSTER_SECURITY_GROUP =
		"redshift:CreateClusterSecurityGroup";
	/** [Write] redshift:CreateClusterSnapshot */
	static readonly CREATE_CLUSTER_SNAPSHOT = "redshift:CreateClusterSnapshot";
	/** [Write] redshift:CreateClusterSubnetGroup */
	static readonly CREATE_CLUSTER_SUBNET_GROUP =
		"redshift:CreateClusterSubnetGroup";
	/** [PermissionManagement] redshift:CreateClusterUser */
	static readonly CREATE_CLUSTER_USER = "redshift:CreateClusterUser";
	/** [Write] redshift:CreateCustomDomainAssociation */
	static readonly CREATE_CUSTOM_DOMAIN_ASSOCIATION =
		"redshift:CreateCustomDomainAssociation";
	/** [Write] redshift:CreateEndpointAccess */
	static readonly CREATE_ENDPOINT_ACCESS = "redshift:CreateEndpointAccess";
	/** [Write] redshift:CreateEventSubscription */
	static readonly CREATE_EVENT_SUBSCRIPTION =
		"redshift:CreateEventSubscription";
	/** [Write] redshift:CreateHsmClientCertificate */
	static readonly CREATE_HSM_CLIENT_CERTIFICATE =
		"redshift:CreateHsmClientCertificate";
	/** [Write] redshift:CreateHsmConfiguration */
	static readonly CREATE_HSM_CONFIGURATION = "redshift:CreateHsmConfiguration";
	/** [Write] redshift:CreateInboundIntegration */
	static readonly CREATE_INBOUND_INTEGRATION =
		"redshift:CreateInboundIntegration";
	/** [Write] redshift:CreateIntegration */
	static readonly CREATE_INTEGRATION = "redshift:CreateIntegration";
	/** [Write] redshift:CreateQev2IdcApplication */
	static readonly CREATE_QEV2_IDC_APPLICATION =
		"redshift:CreateQev2IdcApplication";
	/** [Write] redshift:CreateRedshiftIdcApplication */
	static readonly CREATE_REDSHIFT_IDC_APPLICATION =
		"redshift:CreateRedshiftIdcApplication";
	/** [Write] redshift:CreateSavedQuery */
	static readonly CREATE_SAVED_QUERY = "redshift:CreateSavedQuery";
	/** [Write] redshift:CreateScheduledAction */
	static readonly CREATE_SCHEDULED_ACTION = "redshift:CreateScheduledAction";
	/** [PermissionManagement] redshift:CreateSnapshotCopyGrant */
	static readonly CREATE_SNAPSHOT_COPY_GRANT =
		"redshift:CreateSnapshotCopyGrant";
	/** [Write] redshift:CreateSnapshotSchedule */
	static readonly CREATE_SNAPSHOT_SCHEDULE = "redshift:CreateSnapshotSchedule";
	/** [Tagging] redshift:CreateTags */
	static readonly CREATE_TAGS = "redshift:CreateTags";
	/** [Write] redshift:CreateUsageLimit */
	static readonly CREATE_USAGE_LIMIT = "redshift:CreateUsageLimit";
	/** [PermissionManagement] redshift:DeauthorizeDataShare */
	static readonly DEAUTHORIZE_DATA_SHARE = "redshift:DeauthorizeDataShare";
	/** [Write] redshift:DeleteAuthenticationProfile */
	static readonly DELETE_AUTHENTICATION_PROFILE =
		"redshift:DeleteAuthenticationProfile";
	/** [Write] redshift:DeleteCluster */
	static readonly DELETE_CLUSTER = "redshift:DeleteCluster";
	/** [Write] redshift:DeleteClusterParameterGroup */
	static readonly DELETE_CLUSTER_PARAMETER_GROUP =
		"redshift:DeleteClusterParameterGroup";
	/** [Write] redshift:DeleteClusterSecurityGroup */
	static readonly DELETE_CLUSTER_SECURITY_GROUP =
		"redshift:DeleteClusterSecurityGroup";
	/** [Write] redshift:DeleteClusterSnapshot */
	static readonly DELETE_CLUSTER_SNAPSHOT = "redshift:DeleteClusterSnapshot";
	/** [Write] redshift:DeleteClusterSubnetGroup */
	static readonly DELETE_CLUSTER_SUBNET_GROUP =
		"redshift:DeleteClusterSubnetGroup";
	/** [Write] redshift:DeleteCustomDomainAssociation */
	static readonly DELETE_CUSTOM_DOMAIN_ASSOCIATION =
		"redshift:DeleteCustomDomainAssociation";
	/** [Write] redshift:DeleteEndpointAccess */
	static readonly DELETE_ENDPOINT_ACCESS = "redshift:DeleteEndpointAccess";
	/** [Write] redshift:DeleteEventSubscription */
	static readonly DELETE_EVENT_SUBSCRIPTION =
		"redshift:DeleteEventSubscription";
	/** [Write] redshift:DeleteHsmClientCertificate */
	static readonly DELETE_HSM_CLIENT_CERTIFICATE =
		"redshift:DeleteHsmClientCertificate";
	/** [Write] redshift:DeleteHsmConfiguration */
	static readonly DELETE_HSM_CONFIGURATION = "redshift:DeleteHsmConfiguration";
	/** [Write] redshift:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "redshift:DeleteIntegration";
	/** [Write] redshift:DeletePartner */
	static readonly DELETE_PARTNER = "redshift:DeletePartner";
	/** [Write] redshift:DeleteQev2IdcApplication */
	static readonly DELETE_QEV2_IDC_APPLICATION =
		"redshift:DeleteQev2IdcApplication";
	/** [Write] redshift:DeleteRedshiftIdcApplication */
	static readonly DELETE_REDSHIFT_IDC_APPLICATION =
		"redshift:DeleteRedshiftIdcApplication";
	/** [PermissionManagement] redshift:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "redshift:DeleteResourcePolicy";
	/** [Write] redshift:DeleteSavedQueries */
	static readonly DELETE_SAVED_QUERIES = "redshift:DeleteSavedQueries";
	/** [Write] redshift:DeleteScheduledAction */
	static readonly DELETE_SCHEDULED_ACTION = "redshift:DeleteScheduledAction";
	/** [Write] redshift:DeleteSnapshotCopyGrant */
	static readonly DELETE_SNAPSHOT_COPY_GRANT =
		"redshift:DeleteSnapshotCopyGrant";
	/** [Write] redshift:DeleteSnapshotSchedule */
	static readonly DELETE_SNAPSHOT_SCHEDULE = "redshift:DeleteSnapshotSchedule";
	/** [Tagging] redshift:DeleteTags */
	static readonly DELETE_TAGS = "redshift:DeleteTags";
	/** [Write] redshift:DeleteUsageLimit */
	static readonly DELETE_USAGE_LIMIT = "redshift:DeleteUsageLimit";
	/** [Write] redshift:DeregisterNamespace */
	static readonly DEREGISTER_NAMESPACE = "redshift:DeregisterNamespace";
	/** [Read] redshift:DescribeAccountAttributes */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES =
		"redshift:DescribeAccountAttributes";
	/** [Read] redshift:DescribeAuthenticationProfiles */
	static readonly DESCRIBE_AUTHENTICATION_PROFILES =
		"redshift:DescribeAuthenticationProfiles";
	/** [Read] redshift:DescribeAutonomicsDenylist */
	static readonly DESCRIBE_AUTONOMICS_DENYLIST =
		"redshift:DescribeAutonomicsDenylist";
	/** [List] redshift:DescribeClusterDbRevisions */
	static readonly DESCRIBE_CLUSTER_DB_REVISIONS =
		"redshift:DescribeClusterDbRevisions";
	/** [Read] redshift:DescribeClusterParameterGroups */
	static readonly DESCRIBE_CLUSTER_PARAMETER_GROUPS =
		"redshift:DescribeClusterParameterGroups";
	/** [Read] redshift:DescribeClusterParameters */
	static readonly DESCRIBE_CLUSTER_PARAMETERS =
		"redshift:DescribeClusterParameters";
	/** [Read] redshift:DescribeClusterSecurityGroups */
	static readonly DESCRIBE_CLUSTER_SECURITY_GROUPS =
		"redshift:DescribeClusterSecurityGroups";
	/** [Read] redshift:DescribeClusterSnapshots */
	static readonly DESCRIBE_CLUSTER_SNAPSHOTS =
		"redshift:DescribeClusterSnapshots";
	/** [Read] redshift:DescribeClusterSubnetGroups */
	static readonly DESCRIBE_CLUSTER_SUBNET_GROUPS =
		"redshift:DescribeClusterSubnetGroups";
	/** [List] redshift:DescribeClusterTracks */
	static readonly DESCRIBE_CLUSTER_TRACKS = "redshift:DescribeClusterTracks";
	/** [Read] redshift:DescribeClusterVersions */
	static readonly DESCRIBE_CLUSTER_VERSIONS =
		"redshift:DescribeClusterVersions";
	/** [List] redshift:DescribeClusters */
	static readonly DESCRIBE_CLUSTERS = "redshift:DescribeClusters";
	/** [List] redshift:DescribeCustomDomainAssociations */
	static readonly DESCRIBE_CUSTOM_DOMAIN_ASSOCIATIONS =
		"redshift:DescribeCustomDomainAssociations";
	/** [Read] redshift:DescribeDataShares */
	static readonly DESCRIBE_DATA_SHARES = "redshift:DescribeDataShares";
	/** [Read] redshift:DescribeDataSharesForConsumer */
	static readonly DESCRIBE_DATA_SHARES_FOR_CONSUMER =
		"redshift:DescribeDataSharesForConsumer";
	/** [Read] redshift:DescribeDataSharesForProducer */
	static readonly DESCRIBE_DATA_SHARES_FOR_PRODUCER =
		"redshift:DescribeDataSharesForProducer";
	/** [Read] redshift:DescribeDefaultClusterParameters */
	static readonly DESCRIBE_DEFAULT_CLUSTER_PARAMETERS =
		"redshift:DescribeDefaultClusterParameters";
	/** [Read] redshift:DescribeEndpointAccess */
	static readonly DESCRIBE_ENDPOINT_ACCESS = "redshift:DescribeEndpointAccess";
	/** [List] redshift:DescribeEndpointAuthorization */
	static readonly DESCRIBE_ENDPOINT_AUTHORIZATION =
		"redshift:DescribeEndpointAuthorization";
	/** [Read] redshift:DescribeEventCategories */
	static readonly DESCRIBE_EVENT_CATEGORIES =
		"redshift:DescribeEventCategories";
	/** [Read] redshift:DescribeEventSubscriptions */
	static readonly DESCRIBE_EVENT_SUBSCRIPTIONS =
		"redshift:DescribeEventSubscriptions";
	/** [List] redshift:DescribeEvents */
	static readonly DESCRIBE_EVENTS = "redshift:DescribeEvents";
	/** [Read] redshift:DescribeHsmClientCertificates */
	static readonly DESCRIBE_HSM_CLIENT_CERTIFICATES =
		"redshift:DescribeHsmClientCertificates";
	/** [Read] redshift:DescribeHsmConfigurations */
	static readonly DESCRIBE_HSM_CONFIGURATIONS =
		"redshift:DescribeHsmConfigurations";
	/** [List] redshift:DescribeInboundIntegrations */
	static readonly DESCRIBE_INBOUND_INTEGRATIONS =
		"redshift:DescribeInboundIntegrations";
	/** [List] redshift:DescribeIntegrations */
	static readonly DESCRIBE_INTEGRATIONS = "redshift:DescribeIntegrations";
	/** [Read] redshift:DescribeLoggingStatus */
	static readonly DESCRIBE_LOGGING_STATUS = "redshift:DescribeLoggingStatus";
	/** [List] redshift:DescribeNodeConfigurationOptions */
	static readonly DESCRIBE_NODE_CONFIGURATION_OPTIONS =
		"redshift:DescribeNodeConfigurationOptions";
	/** [Read] redshift:DescribeOrderableClusterOptions */
	static readonly DESCRIBE_ORDERABLE_CLUSTER_OPTIONS =
		"redshift:DescribeOrderableClusterOptions";
	/** [Read] redshift:DescribePartners */
	static readonly DESCRIBE_PARTNERS = "redshift:DescribePartners";
	/** [List] redshift:DescribeQev2IdcApplications */
	static readonly DESCRIBE_QEV2_IDC_APPLICATIONS =
		"redshift:DescribeQev2IdcApplications";
	/** [Read] redshift:DescribeQuery */
	static readonly DESCRIBE_QUERY = "redshift:DescribeQuery";
	/** [List] redshift:DescribeRedshiftIdcApplications */
	static readonly DESCRIBE_REDSHIFT_IDC_APPLICATIONS =
		"redshift:DescribeRedshiftIdcApplications";
	/** [Read] redshift:DescribeReservedNodeExchangeStatus */
	static readonly DESCRIBE_RESERVED_NODE_EXCHANGE_STATUS =
		"redshift:DescribeReservedNodeExchangeStatus";
	/** [Read] redshift:DescribeReservedNodeOfferings */
	static readonly DESCRIBE_RESERVED_NODE_OFFERINGS =
		"redshift:DescribeReservedNodeOfferings";
	/** [Read] redshift:DescribeReservedNodes */
	static readonly DESCRIBE_RESERVED_NODES = "redshift:DescribeReservedNodes";
	/** [Read] redshift:DescribeResize */
	static readonly DESCRIBE_RESIZE = "redshift:DescribeResize";
	/** [Read] redshift:DescribeSavedQueries */
	static readonly DESCRIBE_SAVED_QUERIES = "redshift:DescribeSavedQueries";
	/** [Read] redshift:DescribeScheduledActions */
	static readonly DESCRIBE_SCHEDULED_ACTIONS =
		"redshift:DescribeScheduledActions";
	/** [Read] redshift:DescribeSnapshotCopyGrants */
	static readonly DESCRIBE_SNAPSHOT_COPY_GRANTS =
		"redshift:DescribeSnapshotCopyGrants";
	/** [Read] redshift:DescribeSnapshotSchedules */
	static readonly DESCRIBE_SNAPSHOT_SCHEDULES =
		"redshift:DescribeSnapshotSchedules";
	/** [Read] redshift:DescribeStorage */
	static readonly DESCRIBE_STORAGE = "redshift:DescribeStorage";
	/** [Read] redshift:DescribeTable */
	static readonly DESCRIBE_TABLE = "redshift:DescribeTable";
	/** [Read] redshift:DescribeTableRestoreStatus */
	static readonly DESCRIBE_TABLE_RESTORE_STATUS =
		"redshift:DescribeTableRestoreStatus";
	/** [Read] redshift:DescribeTags */
	static readonly DESCRIBE_TAGS = "redshift:DescribeTags";
	/** [Read] redshift:DescribeUsageLimits */
	static readonly DESCRIBE_USAGE_LIMITS = "redshift:DescribeUsageLimits";
	/** [Write] redshift:DisableLogging */
	static readonly DISABLE_LOGGING = "redshift:DisableLogging";
	/** [Write] redshift:DisableSnapshotCopy */
	static readonly DISABLE_SNAPSHOT_COPY = "redshift:DisableSnapshotCopy";
	/** [Write] redshift:DisassociateDataShareConsumer */
	static readonly DISASSOCIATE_DATA_SHARE_CONSUMER =
		"redshift:DisassociateDataShareConsumer";
	/** [Write] redshift:EnableLogging */
	static readonly ENABLE_LOGGING = "redshift:EnableLogging";
	/** [Write] redshift:EnableSnapshotCopy */
	static readonly ENABLE_SNAPSHOT_COPY = "redshift:EnableSnapshotCopy";
	/** [Write] redshift:ExecuteQuery */
	static readonly EXECUTE_QUERY = "redshift:ExecuteQuery";
	/** [Write] redshift:FailoverPrimaryCompute */
	static readonly FAILOVER_PRIMARY_COMPUTE = "redshift:FailoverPrimaryCompute";
	/** [Read] redshift:FetchResults */
	static readonly FETCH_RESULTS = "redshift:FetchResults";
	/** [Write] redshift:GetClusterCredentials */
	static readonly GET_CLUSTER_CREDENTIALS = "redshift:GetClusterCredentials";
	/** [Write] redshift:GetClusterCredentialsWithIAM */
	static readonly GET_CLUSTER_CREDENTIALS_WITH_IAM =
		"redshift:GetClusterCredentialsWithIAM";
	/** [Read] redshift:GetIdentityCenterAuthToken */
	static readonly GET_IDENTITY_CENTER_AUTH_TOKEN =
		"redshift:GetIdentityCenterAuthToken";
	/** [Read] redshift:GetReservedNodeExchangeConfigurationOptions */
	static readonly GET_RESERVED_NODE_EXCHANGE_CONFIGURATION_OPTIONS =
		"redshift:GetReservedNodeExchangeConfigurationOptions";
	/** [Read] redshift:GetReservedNodeExchangeOfferings */
	static readonly GET_RESERVED_NODE_EXCHANGE_OFFERINGS =
		"redshift:GetReservedNodeExchangeOfferings";
	/** [Read] redshift:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "redshift:GetResourcePolicy";
	/** [PermissionManagement] redshift:JoinGroup */
	static readonly JOIN_GROUP = "redshift:JoinGroup";
	/** [List] redshift:ListDatabases */
	static readonly LIST_DATABASES = "redshift:ListDatabases";
	/** [List] redshift:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS = "redshift:ListRecommendations";
	/** [List] redshift:ListSavedQueries */
	static readonly LIST_SAVED_QUERIES = "redshift:ListSavedQueries";
	/** [List] redshift:ListSchemas */
	static readonly LIST_SCHEMAS = "redshift:ListSchemas";
	/** [List] redshift:ListTables */
	static readonly LIST_TABLES = "redshift:ListTables";
	/** [Write] redshift:ModifyAquaConfiguration */
	static readonly MODIFY_AQUA_CONFIGURATION =
		"redshift:ModifyAquaConfiguration";
	/** [Write] redshift:ModifyAuthenticationProfile */
	static readonly MODIFY_AUTHENTICATION_PROFILE =
		"redshift:ModifyAuthenticationProfile";
	/** [Write] redshift:ModifyAutonomicsDenylist */
	static readonly MODIFY_AUTONOMICS_DENYLIST =
		"redshift:ModifyAutonomicsDenylist";
	/** [Write] redshift:ModifyCluster */
	static readonly MODIFY_CLUSTER = "redshift:ModifyCluster";
	/** [Write] redshift:ModifyClusterDbRevision */
	static readonly MODIFY_CLUSTER_DB_REVISION =
		"redshift:ModifyClusterDbRevision";
	/** [PermissionManagement] redshift:ModifyClusterIamRoles */
	static readonly MODIFY_CLUSTER_IAM_ROLES = "redshift:ModifyClusterIamRoles";
	/** [Write] redshift:ModifyClusterMaintenance */
	static readonly MODIFY_CLUSTER_MAINTENANCE =
		"redshift:ModifyClusterMaintenance";
	/** [Write] redshift:ModifyClusterParameterGroup */
	static readonly MODIFY_CLUSTER_PARAMETER_GROUP =
		"redshift:ModifyClusterParameterGroup";
	/** [Write] redshift:ModifyClusterSnapshot */
	static readonly MODIFY_CLUSTER_SNAPSHOT = "redshift:ModifyClusterSnapshot";
	/** [Write] redshift:ModifyClusterSnapshotSchedule */
	static readonly MODIFY_CLUSTER_SNAPSHOT_SCHEDULE =
		"redshift:ModifyClusterSnapshotSchedule";
	/** [Write] redshift:ModifyClusterSubnetGroup */
	static readonly MODIFY_CLUSTER_SUBNET_GROUP =
		"redshift:ModifyClusterSubnetGroup";
	/** [Write] redshift:ModifyCustomDomainAssociation */
	static readonly MODIFY_CUSTOM_DOMAIN_ASSOCIATION =
		"redshift:ModifyCustomDomainAssociation";
	/** [Write] redshift:ModifyEndpointAccess */
	static readonly MODIFY_ENDPOINT_ACCESS = "redshift:ModifyEndpointAccess";
	/** [Write] redshift:ModifyEventSubscription */
	static readonly MODIFY_EVENT_SUBSCRIPTION =
		"redshift:ModifyEventSubscription";
	/** [Write] redshift:ModifyIntegration */
	static readonly MODIFY_INTEGRATION = "redshift:ModifyIntegration";
	/** [Write] redshift:ModifyQev2IdcApplication */
	static readonly MODIFY_QEV2_IDC_APPLICATION =
		"redshift:ModifyQev2IdcApplication";
	/** [Write] redshift:ModifyRedshiftIdcApplication */
	static readonly MODIFY_REDSHIFT_IDC_APPLICATION =
		"redshift:ModifyRedshiftIdcApplication";
	/** [Write] redshift:ModifySavedQuery */
	static readonly MODIFY_SAVED_QUERY = "redshift:ModifySavedQuery";
	/** [Write] redshift:ModifyScheduledAction */
	static readonly MODIFY_SCHEDULED_ACTION = "redshift:ModifyScheduledAction";
	/** [Write] redshift:ModifySnapshotCopyRetentionPeriod */
	static readonly MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD =
		"redshift:ModifySnapshotCopyRetentionPeriod";
	/** [Write] redshift:ModifySnapshotSchedule */
	static readonly MODIFY_SNAPSHOT_SCHEDULE = "redshift:ModifySnapshotSchedule";
	/** [Write] redshift:ModifyUsageLimit */
	static readonly MODIFY_USAGE_LIMIT = "redshift:ModifyUsageLimit";
	/** [Write] redshift:PauseCluster */
	static readonly PAUSE_CLUSTER = "redshift:PauseCluster";
	/** [Write] redshift:PurchaseReservedNodeOffering */
	static readonly PURCHASE_RESERVED_NODE_OFFERING =
		"redshift:PurchaseReservedNodeOffering";
	/** [PermissionManagement] redshift:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "redshift:PutResourcePolicy";
	/** [Write] redshift:RebootCluster */
	static readonly REBOOT_CLUSTER = "redshift:RebootCluster";
	/** [Write] redshift:RegisterNamespace */
	static readonly REGISTER_NAMESPACE = "redshift:RegisterNamespace";
	/** [PermissionManagement] redshift:RejectDataShare */
	static readonly REJECT_DATA_SHARE = "redshift:RejectDataShare";
	/** [Write] redshift:ResetClusterParameterGroup */
	static readonly RESET_CLUSTER_PARAMETER_GROUP =
		"redshift:ResetClusterParameterGroup";
	/** [Write] redshift:ResizeCluster */
	static readonly RESIZE_CLUSTER = "redshift:ResizeCluster";
	/** [Write] redshift:RestoreFromClusterSnapshot */
	static readonly RESTORE_FROM_CLUSTER_SNAPSHOT =
		"redshift:RestoreFromClusterSnapshot";
	/** [Write] redshift:RestoreTableFromClusterSnapshot */
	static readonly RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT =
		"redshift:RestoreTableFromClusterSnapshot";
	/** [Write] redshift:ResumeCluster */
	static readonly RESUME_CLUSTER = "redshift:ResumeCluster";
	/** [Write] redshift:RevokeClusterSecurityGroupIngress */
	static readonly REVOKE_CLUSTER_SECURITY_GROUP_INGRESS =
		"redshift:RevokeClusterSecurityGroupIngress";
	/** [PermissionManagement] redshift:RevokeEndpointAccess */
	static readonly REVOKE_ENDPOINT_ACCESS = "redshift:RevokeEndpointAccess";
	/** [PermissionManagement] redshift:RevokeSnapshotAccess */
	static readonly REVOKE_SNAPSHOT_ACCESS = "redshift:RevokeSnapshotAccess";
	/** [Write] redshift:RotateEncryptionKey */
	static readonly ROTATE_ENCRYPTION_KEY = "redshift:RotateEncryptionKey";
	/** [Write] redshift:UpdatePartnerStatus */
	static readonly UPDATE_PARTNER_STATUS = "redshift:UpdatePartnerStatus";
	/** [List] redshift:ViewQueriesFromConsole */
	static readonly VIEW_QUERIES_FROM_CONSOLE = "redshift:ViewQueriesFromConsole";
	/** [List] redshift:ViewQueriesInConsole */
	static readonly VIEW_QUERIES_IN_CONSOLE = "redshift:ViewQueriesInConsole";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RedshiftActions.DESCRIBE_ACCOUNT_ATTRIBUTES,
		RedshiftActions.DESCRIBE_AUTHENTICATION_PROFILES,
		RedshiftActions.DESCRIBE_AUTONOMICS_DENYLIST,
		RedshiftActions.DESCRIBE_CLUSTER_PARAMETER_GROUPS,
		RedshiftActions.DESCRIBE_CLUSTER_PARAMETERS,
		RedshiftActions.DESCRIBE_CLUSTER_SECURITY_GROUPS,
		RedshiftActions.DESCRIBE_CLUSTER_SNAPSHOTS,
		RedshiftActions.DESCRIBE_CLUSTER_SUBNET_GROUPS,
		RedshiftActions.DESCRIBE_CLUSTER_VERSIONS,
		RedshiftActions.DESCRIBE_DATA_SHARES,
		RedshiftActions.DESCRIBE_DATA_SHARES_FOR_CONSUMER,
		RedshiftActions.DESCRIBE_DATA_SHARES_FOR_PRODUCER,
		RedshiftActions.DESCRIBE_DEFAULT_CLUSTER_PARAMETERS,
		RedshiftActions.DESCRIBE_ENDPOINT_ACCESS,
		RedshiftActions.DESCRIBE_EVENT_CATEGORIES,
		RedshiftActions.DESCRIBE_EVENT_SUBSCRIPTIONS,
		RedshiftActions.DESCRIBE_HSM_CLIENT_CERTIFICATES,
		RedshiftActions.DESCRIBE_HSM_CONFIGURATIONS,
		RedshiftActions.DESCRIBE_LOGGING_STATUS,
		RedshiftActions.DESCRIBE_ORDERABLE_CLUSTER_OPTIONS,
		RedshiftActions.DESCRIBE_PARTNERS,
		RedshiftActions.DESCRIBE_QUERY,
		RedshiftActions.DESCRIBE_RESERVED_NODE_EXCHANGE_STATUS,
		RedshiftActions.DESCRIBE_RESERVED_NODE_OFFERINGS,
		RedshiftActions.DESCRIBE_RESERVED_NODES,
		RedshiftActions.DESCRIBE_RESIZE,
		RedshiftActions.DESCRIBE_SAVED_QUERIES,
		RedshiftActions.DESCRIBE_SCHEDULED_ACTIONS,
		RedshiftActions.DESCRIBE_SNAPSHOT_COPY_GRANTS,
		RedshiftActions.DESCRIBE_SNAPSHOT_SCHEDULES,
		RedshiftActions.DESCRIBE_STORAGE,
		RedshiftActions.DESCRIBE_TABLE,
		RedshiftActions.DESCRIBE_TABLE_RESTORE_STATUS,
		RedshiftActions.DESCRIBE_TAGS,
		RedshiftActions.DESCRIBE_USAGE_LIMITS,
		RedshiftActions.FETCH_RESULTS,
		RedshiftActions.GET_IDENTITY_CENTER_AUTH_TOKEN,
		RedshiftActions.GET_RESERVED_NODE_EXCHANGE_CONFIGURATION_OPTIONS,
		RedshiftActions.GET_RESERVED_NODE_EXCHANGE_OFFERINGS,
		RedshiftActions.GET_RESOURCE_POLICY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RedshiftActions.ACCEPT_RESERVED_NODE_EXCHANGE,
		RedshiftActions.ADD_PARTNER,
		RedshiftActions.ASSOCIATE_DATA_SHARE_CONSUMER,
		RedshiftActions.AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS,
		RedshiftActions.AUTHORIZE_INBOUND_INTEGRATION,
		RedshiftActions.BATCH_DELETE_CLUSTER_SNAPSHOTS,
		RedshiftActions.BATCH_MODIFY_CLUSTER_SNAPSHOTS,
		RedshiftActions.CANCEL_QUERY,
		RedshiftActions.CANCEL_QUERY_SESSION,
		RedshiftActions.CANCEL_RESIZE,
		RedshiftActions.COPY_CLUSTER_SNAPSHOT,
		RedshiftActions.CREATE_AUTHENTICATION_PROFILE,
		RedshiftActions.CREATE_CLUSTER,
		RedshiftActions.CREATE_CLUSTER_PARAMETER_GROUP,
		RedshiftActions.CREATE_CLUSTER_SECURITY_GROUP,
		RedshiftActions.CREATE_CLUSTER_SNAPSHOT,
		RedshiftActions.CREATE_CLUSTER_SUBNET_GROUP,
		RedshiftActions.CREATE_CUSTOM_DOMAIN_ASSOCIATION,
		RedshiftActions.CREATE_ENDPOINT_ACCESS,
		RedshiftActions.CREATE_EVENT_SUBSCRIPTION,
		RedshiftActions.CREATE_HSM_CLIENT_CERTIFICATE,
		RedshiftActions.CREATE_HSM_CONFIGURATION,
		RedshiftActions.CREATE_INBOUND_INTEGRATION,
		RedshiftActions.CREATE_INTEGRATION,
		RedshiftActions.CREATE_QEV2_IDC_APPLICATION,
		RedshiftActions.CREATE_REDSHIFT_IDC_APPLICATION,
		RedshiftActions.CREATE_SAVED_QUERY,
		RedshiftActions.CREATE_SCHEDULED_ACTION,
		RedshiftActions.CREATE_SNAPSHOT_SCHEDULE,
		RedshiftActions.CREATE_USAGE_LIMIT,
		RedshiftActions.DELETE_AUTHENTICATION_PROFILE,
		RedshiftActions.DELETE_CLUSTER,
		RedshiftActions.DELETE_CLUSTER_PARAMETER_GROUP,
		RedshiftActions.DELETE_CLUSTER_SECURITY_GROUP,
		RedshiftActions.DELETE_CLUSTER_SNAPSHOT,
		RedshiftActions.DELETE_CLUSTER_SUBNET_GROUP,
		RedshiftActions.DELETE_CUSTOM_DOMAIN_ASSOCIATION,
		RedshiftActions.DELETE_ENDPOINT_ACCESS,
		RedshiftActions.DELETE_EVENT_SUBSCRIPTION,
		RedshiftActions.DELETE_HSM_CLIENT_CERTIFICATE,
		RedshiftActions.DELETE_HSM_CONFIGURATION,
		RedshiftActions.DELETE_INTEGRATION,
		RedshiftActions.DELETE_PARTNER,
		RedshiftActions.DELETE_QEV2_IDC_APPLICATION,
		RedshiftActions.DELETE_REDSHIFT_IDC_APPLICATION,
		RedshiftActions.DELETE_SAVED_QUERIES,
		RedshiftActions.DELETE_SCHEDULED_ACTION,
		RedshiftActions.DELETE_SNAPSHOT_COPY_GRANT,
		RedshiftActions.DELETE_SNAPSHOT_SCHEDULE,
		RedshiftActions.DELETE_USAGE_LIMIT,
		RedshiftActions.DEREGISTER_NAMESPACE,
		RedshiftActions.DISABLE_LOGGING,
		RedshiftActions.DISABLE_SNAPSHOT_COPY,
		RedshiftActions.DISASSOCIATE_DATA_SHARE_CONSUMER,
		RedshiftActions.ENABLE_LOGGING,
		RedshiftActions.ENABLE_SNAPSHOT_COPY,
		RedshiftActions.EXECUTE_QUERY,
		RedshiftActions.FAILOVER_PRIMARY_COMPUTE,
		RedshiftActions.GET_CLUSTER_CREDENTIALS,
		RedshiftActions.GET_CLUSTER_CREDENTIALS_WITH_IAM,
		RedshiftActions.MODIFY_AQUA_CONFIGURATION,
		RedshiftActions.MODIFY_AUTHENTICATION_PROFILE,
		RedshiftActions.MODIFY_AUTONOMICS_DENYLIST,
		RedshiftActions.MODIFY_CLUSTER,
		RedshiftActions.MODIFY_CLUSTER_DB_REVISION,
		RedshiftActions.MODIFY_CLUSTER_MAINTENANCE,
		RedshiftActions.MODIFY_CLUSTER_PARAMETER_GROUP,
		RedshiftActions.MODIFY_CLUSTER_SNAPSHOT,
		RedshiftActions.MODIFY_CLUSTER_SNAPSHOT_SCHEDULE,
		RedshiftActions.MODIFY_CLUSTER_SUBNET_GROUP,
		RedshiftActions.MODIFY_CUSTOM_DOMAIN_ASSOCIATION,
		RedshiftActions.MODIFY_ENDPOINT_ACCESS,
		RedshiftActions.MODIFY_EVENT_SUBSCRIPTION,
		RedshiftActions.MODIFY_INTEGRATION,
		RedshiftActions.MODIFY_QEV2_IDC_APPLICATION,
		RedshiftActions.MODIFY_REDSHIFT_IDC_APPLICATION,
		RedshiftActions.MODIFY_SAVED_QUERY,
		RedshiftActions.MODIFY_SCHEDULED_ACTION,
		RedshiftActions.MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD,
		RedshiftActions.MODIFY_SNAPSHOT_SCHEDULE,
		RedshiftActions.MODIFY_USAGE_LIMIT,
		RedshiftActions.PAUSE_CLUSTER,
		RedshiftActions.PURCHASE_RESERVED_NODE_OFFERING,
		RedshiftActions.REBOOT_CLUSTER,
		RedshiftActions.REGISTER_NAMESPACE,
		RedshiftActions.RESET_CLUSTER_PARAMETER_GROUP,
		RedshiftActions.RESIZE_CLUSTER,
		RedshiftActions.RESTORE_FROM_CLUSTER_SNAPSHOT,
		RedshiftActions.RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT,
		RedshiftActions.RESUME_CLUSTER,
		RedshiftActions.REVOKE_CLUSTER_SECURITY_GROUP_INGRESS,
		RedshiftActions.ROTATE_ENCRYPTION_KEY,
		RedshiftActions.UPDATE_PARTNER_STATUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RedshiftActions.DESCRIBE_CLUSTER_DB_REVISIONS,
		RedshiftActions.DESCRIBE_CLUSTER_TRACKS,
		RedshiftActions.DESCRIBE_CLUSTERS,
		RedshiftActions.DESCRIBE_CUSTOM_DOMAIN_ASSOCIATIONS,
		RedshiftActions.DESCRIBE_ENDPOINT_AUTHORIZATION,
		RedshiftActions.DESCRIBE_EVENTS,
		RedshiftActions.DESCRIBE_INBOUND_INTEGRATIONS,
		RedshiftActions.DESCRIBE_INTEGRATIONS,
		RedshiftActions.DESCRIBE_NODE_CONFIGURATION_OPTIONS,
		RedshiftActions.DESCRIBE_QEV2_IDC_APPLICATIONS,
		RedshiftActions.DESCRIBE_REDSHIFT_IDC_APPLICATIONS,
		RedshiftActions.LIST_DATABASES,
		RedshiftActions.LIST_RECOMMENDATIONS,
		RedshiftActions.LIST_SAVED_QUERIES,
		RedshiftActions.LIST_SCHEMAS,
		RedshiftActions.LIST_TABLES,
		RedshiftActions.VIEW_QUERIES_FROM_CONSOLE,
		RedshiftActions.VIEW_QUERIES_IN_CONSOLE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		RedshiftActions.AUTHORIZE_DATA_SHARE,
		RedshiftActions.AUTHORIZE_ENDPOINT_ACCESS,
		RedshiftActions.AUTHORIZE_SNAPSHOT_ACCESS,
		RedshiftActions.CREATE_CLUSTER_USER,
		RedshiftActions.CREATE_SNAPSHOT_COPY_GRANT,
		RedshiftActions.DEAUTHORIZE_DATA_SHARE,
		RedshiftActions.DELETE_RESOURCE_POLICY,
		RedshiftActions.JOIN_GROUP,
		RedshiftActions.MODIFY_CLUSTER_IAM_ROLES,
		RedshiftActions.PUT_RESOURCE_POLICY,
		RedshiftActions.REJECT_DATA_SHARE,
		RedshiftActions.REVOKE_ENDPOINT_ACCESS,
		RedshiftActions.REVOKE_SNAPSHOT_ACCESS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RedshiftActions.CREATE_TAGS,
		RedshiftActions.DELETE_TAGS,
	];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<clusterName>[^:/?]+)$",
);
const DatashareArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):datashare:(?<producerClusterNamespace>[^:/?]+)/(?<dataShareName>[^:/?]+)$",
);
const DbgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):dbgroup:(?<clusterName>[^:/?]+)/(?<dbGroup>[^:/?]+)$",
);
const DbnameArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):dbname:(?<clusterName>[^:/?]+)/(?<dbName>[^:/?]+)$",
);
const DbuserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):dbuser:(?<clusterName>[^:/?]+)/(?<dbUser>[^:/?]+)$",
);
const EventsubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):eventsubscription:(?<eventSubscriptionName>[^:/?]+)$",
);
const HsmclientcertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):hsmclientcertificate:(?<hsmClientCertificateId>[^:/?]+)$",
);
const HsmconfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):hsmconfiguration:(?<hsmConfigurationId>[^:/?]+)$",
);
const IntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):integration:(?<integrationIdentifier>[^:/?]+)$",
);
const NamespaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):namespace:(?<clusterNamespace>[^:/?]+)$",
);
const ParametergroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):parametergroup:(?<parameterGroupName>[^:/?]+)$",
);
const Qev2idcapplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):qev2idcapplication:(?<qev2IdcApplicationId>[^:/?]+)$",
);
const RedshiftidcapplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):redshiftidcapplication:(?<redshiftIdcApplicationId>[^:/?]+)$",
);
const SecuritygroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):securitygroup:(?<securityGroupName>[^:/?]+)/ec2securitygroup/(?<owner>[^:/?]+)/(?<ec2SecurityGroupId>[^:/?]+)$",
);
const SecuritygroupingressCidrArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):securitygroupingress:(?<securityGroupName>[^:/?]+)/cidrip/(?<ipRange>[^:/?]+)$",
);
const SecuritygroupingressEc2securitygroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):securitygroupingress:(?<securityGroupName>[^:/?]+)/ec2securitygroup/(?<owner>[^:/?]+)/(?<ece2SecuritygroupId>[^:/?]+)$",
);
const SnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):snapshot:(?<clusterName>[^:/?]+)/(?<snapshotName>[^:/?]+)$",
);
const SnapshotcopygrantArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):snapshotcopygrant:(?<snapshotCopyGrantName>[^:/?]+)$",
);
const SnapshotscheduleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):snapshotschedule:(?<scheduleIdentifier>[^:/?]+)$",
);
const SubnetgroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):subnetgroup:(?<subnetGroupName>[^:/?]+)$",
);
const UsagelimitArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):usagelimit:(?<usageLimitId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for redshift resources.
 */
export class RedshiftResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:cluster:${props.clusterName}`;
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
		clusterName: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}

	/**
	 * Builds an ARN for the datashare resource.
	 */
	static datashare(props: {
		/** The ProducerClusterNamespace component of the ARN. */
		readonly producerClusterNamespace: string;
		/** The DataShareName component of the ARN. */
		readonly dataShareName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:datashare:${props.producerClusterNamespace}/${props.dataShareName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datashare resource.
	 */
	static isValidDatashareArn(arn: string): boolean {
		return DatashareArnRegex.test(arn);
	}

	/**
	 * Parses a datashare ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatashareArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		producerClusterNamespace: string;
		dataShareName: string;
	} {
		const match = DatashareArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datashare ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			producerClusterNamespace: match.groups!.producerClusterNamespace,
			dataShareName: match.groups!.dataShareName,
		};
	}

	/**
	 * Builds an ARN for the dbgroup resource.
	 */
	static dbgroup(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The DbGroup component of the ARN. */
		readonly dbGroup: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:dbgroup:${props.clusterName}/${props.dbGroup}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dbgroup resource.
	 */
	static isValidDbgroupArn(arn: string): boolean {
		return DbgroupArnRegex.test(arn);
	}

	/**
	 * Parses a dbgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDbgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		dbGroup: string;
	} {
		const match = DbgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dbgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			dbGroup: match.groups!.dbGroup,
		};
	}

	/**
	 * Builds an ARN for the dbname resource.
	 */
	static dbname(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The DbName component of the ARN. */
		readonly dbName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:dbname:${props.clusterName}/${props.dbName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dbname resource.
	 */
	static isValidDbnameArn(arn: string): boolean {
		return DbnameArnRegex.test(arn);
	}

	/**
	 * Parses a dbname ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDbnameArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		dbName: string;
	} {
		const match = DbnameArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dbname ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			dbName: match.groups!.dbName,
		};
	}

	/**
	 * Builds an ARN for the dbuser resource.
	 */
	static dbuser(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The DbUser component of the ARN. */
		readonly dbUser: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:dbuser:${props.clusterName}/${props.dbUser}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dbuser resource.
	 */
	static isValidDbuserArn(arn: string): boolean {
		return DbuserArnRegex.test(arn);
	}

	/**
	 * Parses a dbuser ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDbuserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		dbUser: string;
	} {
		const match = DbuserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dbuser ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			dbUser: match.groups!.dbUser,
		};
	}

	/**
	 * Builds an ARN for the eventsubscription resource.
	 */
	static eventsubscription(props: {
		/** The EventSubscriptionName component of the ARN. */
		readonly eventSubscriptionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:eventsubscription:${props.eventSubscriptionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eventsubscription resource.
	 */
	static isValidEventsubscriptionArn(arn: string): boolean {
		return EventsubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a eventsubscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventsubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventSubscriptionName: string;
	} {
		const match = EventsubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eventsubscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventSubscriptionName: match.groups!.eventSubscriptionName,
		};
	}

	/**
	 * Builds an ARN for the hsmclientcertificate resource.
	 */
	static hsmclientcertificate(props: {
		/** The HSMClientCertificateId component of the ARN. */
		readonly hsmClientCertificateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:hsmclientcertificate:${props.hsmClientCertificateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hsmclientcertificate resource.
	 */
	static isValidHsmclientcertificateArn(arn: string): boolean {
		return HsmclientcertificateArnRegex.test(arn);
	}

	/**
	 * Parses a hsmclientcertificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHsmclientcertificateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hsmClientCertificateId: string;
	} {
		const match = HsmclientcertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hsmclientcertificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hsmClientCertificateId: match.groups!.hsmClientCertificateId,
		};
	}

	/**
	 * Builds an ARN for the hsmconfiguration resource.
	 */
	static hsmconfiguration(props: {
		/** The HSMConfigurationId component of the ARN. */
		readonly hsmConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:hsmconfiguration:${props.hsmConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hsmconfiguration resource.
	 */
	static isValidHsmconfigurationArn(arn: string): boolean {
		return HsmconfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a hsmconfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHsmconfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hsmConfigurationId: string;
	} {
		const match = HsmconfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hsmconfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hsmConfigurationId: match.groups!.hsmConfigurationId,
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
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:integration:${props.integrationIdentifier}`;
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
	 * Builds an ARN for the namespace resource.
	 */
	static namespace(props: {
		/** The ClusterNamespace component of the ARN. */
		readonly clusterNamespace: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:namespace:${props.clusterNamespace}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the namespace resource.
	 */
	static isValidNamespaceArn(arn: string): boolean {
		return NamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a namespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNamespaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterNamespace: string;
	} {
		const match = NamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid namespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterNamespace: match.groups!.clusterNamespace,
		};
	}

	/**
	 * Builds an ARN for the parametergroup resource.
	 */
	static parametergroup(props: {
		/** The ParameterGroupName component of the ARN. */
		readonly parameterGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:parametergroup:${props.parameterGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the parametergroup resource.
	 */
	static isValidParametergroupArn(arn: string): boolean {
		return ParametergroupArnRegex.test(arn);
	}

	/**
	 * Parses a parametergroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseParametergroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		parameterGroupName: string;
	} {
		const match = ParametergroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid parametergroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			parameterGroupName: match.groups!.parameterGroupName,
		};
	}

	/**
	 * Builds an ARN for the qev2idcapplication resource.
	 */
	static qev2idcapplication(props: {
		/** The Qev2IdcApplicationId component of the ARN. */
		readonly qev2IdcApplicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:qev2idcapplication:${props.qev2IdcApplicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the qev2idcapplication resource.
	 */
	static isValidQev2idcapplicationArn(arn: string): boolean {
		return Qev2idcapplicationArnRegex.test(arn);
	}

	/**
	 * Parses a qev2idcapplication ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQev2idcapplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		qev2IdcApplicationId: string;
	} {
		const match = Qev2idcapplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid qev2idcapplication ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			qev2IdcApplicationId: match.groups!.qev2IdcApplicationId,
		};
	}

	/**
	 * Builds an ARN for the redshiftidcapplication resource.
	 */
	static redshiftidcapplication(props: {
		/** The RedshiftIdcApplicationId component of the ARN. */
		readonly redshiftIdcApplicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:redshiftidcapplication:${props.redshiftIdcApplicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the redshiftidcapplication resource.
	 */
	static isValidRedshiftidcapplicationArn(arn: string): boolean {
		return RedshiftidcapplicationArnRegex.test(arn);
	}

	/**
	 * Parses a redshiftidcapplication ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRedshiftidcapplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		redshiftIdcApplicationId: string;
	} {
		const match = RedshiftidcapplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid redshiftidcapplication ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			redshiftIdcApplicationId: match.groups!.redshiftIdcApplicationId,
		};
	}

	/**
	 * Builds an ARN for the securitygroup resource.
	 */
	static securitygroup(props: {
		/** The SecurityGroupName component of the ARN. */
		readonly securityGroupName: string;
		/** The Owner component of the ARN. */
		readonly owner: string;
		/** The Ec2SecurityGroupId component of the ARN. */
		readonly ec2SecurityGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:securitygroup:${props.securityGroupName}/ec2securitygroup/${props.owner}/${props.ec2SecurityGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the securitygroup resource.
	 */
	static isValidSecuritygroupArn(arn: string): boolean {
		return SecuritygroupArnRegex.test(arn);
	}

	/**
	 * Parses a securitygroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecuritygroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		securityGroupName: string;
		owner: string;
		ec2SecurityGroupId: string;
	} {
		const match = SecuritygroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid securitygroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			securityGroupName: match.groups!.securityGroupName,
			owner: match.groups!.owner,
			ec2SecurityGroupId: match.groups!.ec2SecurityGroupId,
		};
	}

	/**
	 * Builds an ARN for the securitygroupingress-cidr resource.
	 */
	static securitygroupingressCidr(props: {
		/** The SecurityGroupName component of the ARN. */
		readonly securityGroupName: string;
		/** The IpRange component of the ARN. */
		readonly ipRange: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:securitygroupingress:${props.securityGroupName}/cidrip/${props.ipRange}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the securitygroupingress-cidr resource.
	 */
	static isValidSecuritygroupingressCidrArn(arn: string): boolean {
		return SecuritygroupingressCidrArnRegex.test(arn);
	}

	/**
	 * Parses a securitygroupingress-cidr ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecuritygroupingressCidrArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		securityGroupName: string;
		ipRange: string;
	} {
		const match = SecuritygroupingressCidrArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid securitygroupingress-cidr ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			securityGroupName: match.groups!.securityGroupName,
			ipRange: match.groups!.ipRange,
		};
	}

	/**
	 * Builds an ARN for the securitygroupingress-ec2securitygroup resource.
	 */
	static securitygroupingressEc2securitygroup(props: {
		/** The SecurityGroupName component of the ARN. */
		readonly securityGroupName: string;
		/** The Owner component of the ARN. */
		readonly owner: string;
		/** The Ece2SecuritygroupId component of the ARN. */
		readonly ece2SecuritygroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:securitygroupingress:${props.securityGroupName}/ec2securitygroup/${props.owner}/${props.ece2SecuritygroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the securitygroupingress-ec2securitygroup resource.
	 */
	static isValidSecuritygroupingressEc2securitygroupArn(arn: string): boolean {
		return SecuritygroupingressEc2securitygroupArnRegex.test(arn);
	}

	/**
	 * Parses a securitygroupingress-ec2securitygroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecuritygroupingressEc2securitygroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		securityGroupName: string;
		owner: string;
		ece2SecuritygroupId: string;
	} {
		const match = SecuritygroupingressEc2securitygroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid securitygroupingress-ec2securitygroup ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			securityGroupName: match.groups!.securityGroupName,
			owner: match.groups!.owner,
			ece2SecuritygroupId: match.groups!.ece2SecuritygroupId,
		};
	}

	/**
	 * Builds an ARN for the snapshot resource.
	 */
	static snapshot(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The SnapshotName component of the ARN. */
		readonly snapshotName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:snapshot:${props.clusterName}/${props.snapshotName}`;
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
		clusterName: string;
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
			clusterName: match.groups!.clusterName,
			snapshotName: match.groups!.snapshotName,
		};
	}

	/**
	 * Builds an ARN for the snapshotcopygrant resource.
	 */
	static snapshotcopygrant(props: {
		/** The SnapshotCopyGrantName component of the ARN. */
		readonly snapshotCopyGrantName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:snapshotcopygrant:${props.snapshotCopyGrantName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshotcopygrant resource.
	 */
	static isValidSnapshotcopygrantArn(arn: string): boolean {
		return SnapshotcopygrantArnRegex.test(arn);
	}

	/**
	 * Parses a snapshotcopygrant ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotcopygrantArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		snapshotCopyGrantName: string;
	} {
		const match = SnapshotcopygrantArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshotcopygrant ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			snapshotCopyGrantName: match.groups!.snapshotCopyGrantName,
		};
	}

	/**
	 * Builds an ARN for the snapshotschedule resource.
	 */
	static snapshotschedule(props: {
		/** The ScheduleIdentifier component of the ARN. */
		readonly scheduleIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:snapshotschedule:${props.scheduleIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshotschedule resource.
	 */
	static isValidSnapshotscheduleArn(arn: string): boolean {
		return SnapshotscheduleArnRegex.test(arn);
	}

	/**
	 * Parses a snapshotschedule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotscheduleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scheduleIdentifier: string;
	} {
		const match = SnapshotscheduleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshotschedule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scheduleIdentifier: match.groups!.scheduleIdentifier,
		};
	}

	/**
	 * Builds an ARN for the subnetgroup resource.
	 */
	static subnetgroup(props: {
		/** The SubnetGroupName component of the ARN. */
		readonly subnetGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:subnetgroup:${props.subnetGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subnetgroup resource.
	 */
	static isValidSubnetgroupArn(arn: string): boolean {
		return SubnetgroupArnRegex.test(arn);
	}

	/**
	 * Parses a subnetgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubnetgroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		subnetGroupName: string;
	} {
		const match = SubnetgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subnetgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			subnetGroupName: match.groups!.subnetGroupName,
		};
	}

	/**
	 * Builds an ARN for the usagelimit resource.
	 */
	static usagelimit(props: {
		/** The UsageLimitId component of the ARN. */
		readonly usageLimitId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:redshift:${props.region ?? "*"}:${props.account ?? "*"}:usagelimit:${props.usageLimitId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the usagelimit resource.
	 */
	static isValidUsagelimitArn(arn: string): boolean {
		return UsagelimitArnRegex.test(arn);
	}

	/**
	 * Parses a usagelimit ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUsagelimitArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		usageLimitId: string;
	} {
		const match = UsagelimitArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid usagelimit ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			usageLimitId: match.groups!.usageLimitId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for redshift.
 */
export class RedshiftOperations {
	/** IAM actions required for the AcceptReservedNodeExchange API call. */
	static readonly ACCEPT_RESERVED_NODE_EXCHANGE: string[] = [
		"redshift:AcceptReservedNodeExchange",
	];
	/** IAM actions required for the AddPartner API call. */
	static readonly ADD_PARTNER: string[] = [
		"redshift:AddPartner",
		"redshift:DeletePartner",
	];
	/** IAM actions required for the AssociateDataShareConsumer API call. */
	static readonly ASSOCIATE_DATA_SHARE_CONSUMER: string[] = [
		"redshift:AssociateDataShareConsumer",
	];
	/** IAM actions required for the AuthorizeClusterSecurityGroupIngress API call. */
	static readonly AUTHORIZE_CLUSTER_SECURITY_GROUP_INGRESS: string[] = [
		"redshift:AuthorizeClusterSecurityGroupIngress",
	];
	/** IAM actions required for the AuthorizeDataShare API call. */
	static readonly AUTHORIZE_DATA_SHARE: string[] = [
		"redshift:AuthorizeDataShare",
	];
	/** IAM actions required for the AuthorizeEndpointAccess API call. */
	static readonly AUTHORIZE_ENDPOINT_ACCESS: string[] = [
		"redshift:AuthorizeEndpointAccess",
	];
	/** IAM actions required for the AuthorizeSnapshotAccess API call. */
	static readonly AUTHORIZE_SNAPSHOT_ACCESS: string[] = [
		"redshift:AuthorizeSnapshotAccess",
	];
	/** IAM actions required for the BatchDeleteClusterSnapshots API call. */
	static readonly BATCH_DELETE_CLUSTER_SNAPSHOTS: string[] = [
		"redshift:BatchDeleteClusterSnapshots",
	];
	/** IAM actions required for the BatchModifyClusterSnapshots API call. */
	static readonly BATCH_MODIFY_CLUSTER_SNAPSHOTS: string[] = [
		"redshift:BatchModifyClusterSnapshots",
	];
	/** IAM actions required for the CancelResize API call. */
	static readonly CANCEL_RESIZE: string[] = ["redshift:CancelResize"];
	/** IAM actions required for the CopyClusterSnapshot API call. */
	static readonly COPY_CLUSTER_SNAPSHOT: string[] = [
		"redshift:CopyClusterSnapshot",
	];
	/** IAM actions required for the CreateAuthenticationProfile API call. */
	static readonly CREATE_AUTHENTICATION_PROFILE: string[] = [
		"redshift:CreateAuthenticationProfile",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"redshift:AssociateDataShareConsumer",
		"redshift:CreateCluster",
		"redshift:CreateTags",
		"iam:PassRole",
		"redshift:RegisterNamespace",
	];
	/** IAM actions required for the CreateClusterParameterGroup API call. */
	static readonly CREATE_CLUSTER_PARAMETER_GROUP: string[] = [
		"redshift:CreateClusterParameterGroup",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateClusterSecurityGroup API call. */
	static readonly CREATE_CLUSTER_SECURITY_GROUP: string[] = [
		"redshift:CreateClusterSecurityGroup",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateClusterSnapshot API call. */
	static readonly CREATE_CLUSTER_SNAPSHOT: string[] = [
		"redshift:CreateClusterSnapshot",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateClusterSubnetGroup API call. */
	static readonly CREATE_CLUSTER_SUBNET_GROUP: string[] = [
		"redshift:CreateClusterSubnetGroup",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateCustomDomainAssociation API call. */
	static readonly CREATE_CUSTOM_DOMAIN_ASSOCIATION: string[] = [
		"redshift:CreateCustomDomainAssociation",
	];
	/** IAM actions required for the CreateEndpointAccess API call. */
	static readonly CREATE_ENDPOINT_ACCESS: string[] = [
		"redshift:CreateEndpointAccess",
	];
	/** IAM actions required for the CreateEventSubscription API call. */
	static readonly CREATE_EVENT_SUBSCRIPTION: string[] = [
		"redshift:CreateEventSubscription",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateHsmClientCertificate API call. */
	static readonly CREATE_HSM_CLIENT_CERTIFICATE: string[] = [
		"redshift:CreateHsmClientCertificate",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateHsmConfiguration API call. */
	static readonly CREATE_HSM_CONFIGURATION: string[] = [
		"redshift:CreateHsmConfiguration",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CREATE_INTEGRATION: string[] = [
		"redshift:CreateIntegration",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateQev2IdcApplication API call. */
	static readonly CREATE_QEV2_IDC_APPLICATION: string[] = [
		"redshift:CreateQev2IdcApplication",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateRedshiftIdcApplication API call. */
	static readonly CREATE_REDSHIFT_IDC_APPLICATION: string[] = [
		"redshift:CreateRedshiftIdcApplication",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateScheduledAction API call. */
	static readonly CREATE_SCHEDULED_ACTION: string[] = [
		"redshift:CreateScheduledAction",
		"iam:PassRole",
		"redshift:PauseCluster",
		"redshift:ResizeCluster",
		"redshift:ResumeCluster",
	];
	/** IAM actions required for the CreateSnapshotCopyGrant API call. */
	static readonly CREATE_SNAPSHOT_COPY_GRANT: string[] = [
		"redshift:CreateSnapshotCopyGrant",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateSnapshotSchedule API call. */
	static readonly CREATE_SNAPSHOT_SCHEDULE: string[] = [
		"redshift:CreateSnapshotSchedule",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CREATE_TAGS: string[] = [
		"redshift:CreateTags",
		"redshift:DeleteTags",
	];
	/** IAM actions required for the CreateUsageLimit API call. */
	static readonly CREATE_USAGE_LIMIT: string[] = [
		"redshift:CreateTags",
		"redshift:CreateUsageLimit",
	];
	/** IAM actions required for the DeauthorizeDataShare API call. */
	static readonly DEAUTHORIZE_DATA_SHARE: string[] = [
		"redshift:DeauthorizeDataShare",
	];
	/** IAM actions required for the DeleteAuthenticationProfile API call. */
	static readonly DELETE_AUTHENTICATION_PROFILE: string[] = [
		"redshift:DeleteAuthenticationProfile",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = [
		"redshift:CreateClusterSnapshot",
		"redshift:DeleteCluster",
	];
	/** IAM actions required for the DeleteClusterParameterGroup API call. */
	static readonly DELETE_CLUSTER_PARAMETER_GROUP: string[] = [
		"redshift:DeleteClusterParameterGroup",
	];
	/** IAM actions required for the DeleteClusterSecurityGroup API call. */
	static readonly DELETE_CLUSTER_SECURITY_GROUP: string[] = [
		"redshift:DeleteClusterSecurityGroup",
	];
	/** IAM actions required for the DeleteClusterSnapshot API call. */
	static readonly DELETE_CLUSTER_SNAPSHOT: string[] = [
		"redshift:DeleteClusterSnapshot",
	];
	/** IAM actions required for the DeleteClusterSubnetGroup API call. */
	static readonly DELETE_CLUSTER_SUBNET_GROUP: string[] = [
		"redshift:DeleteClusterSubnetGroup",
	];
	/** IAM actions required for the DeleteCustomDomainAssociation API call. */
	static readonly DELETE_CUSTOM_DOMAIN_ASSOCIATION: string[] = [
		"redshift:DeleteCustomDomainAssociation",
	];
	/** IAM actions required for the DeleteEndpointAccess API call. */
	static readonly DELETE_ENDPOINT_ACCESS: string[] = [
		"redshift:DeleteEndpointAccess",
	];
	/** IAM actions required for the DeleteEventSubscription API call. */
	static readonly DELETE_EVENT_SUBSCRIPTION: string[] = [
		"redshift:DeleteEventSubscription",
	];
	/** IAM actions required for the DeleteHsmClientCertificate API call. */
	static readonly DELETE_HSM_CLIENT_CERTIFICATE: string[] = [
		"redshift:DeleteHsmClientCertificate",
	];
	/** IAM actions required for the DeleteHsmConfiguration API call. */
	static readonly DELETE_HSM_CONFIGURATION: string[] = [
		"redshift:DeleteHsmConfiguration",
	];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DELETE_INTEGRATION: string[] = ["redshift:DeleteIntegration"];
	/** IAM actions required for the DeletePartner API call. */
	static readonly DELETE_PARTNER: string[] = ["redshift:DeletePartner"];
	/** IAM actions required for the DeleteQev2IdcApplication API call. */
	static readonly DELETE_QEV2_IDC_APPLICATION: string[] = [
		"redshift:DeleteQev2IdcApplication",
	];
	/** IAM actions required for the DeleteRedshiftIdcApplication API call. */
	static readonly DELETE_REDSHIFT_IDC_APPLICATION: string[] = [
		"redshift:DeleteRedshiftIdcApplication",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"redshift:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteScheduledAction API call. */
	static readonly DELETE_SCHEDULED_ACTION: string[] = [
		"redshift:DeleteScheduledAction",
	];
	/** IAM actions required for the DeleteSnapshotCopyGrant API call. */
	static readonly DELETE_SNAPSHOT_COPY_GRANT: string[] = [
		"redshift:DeleteSnapshotCopyGrant",
	];
	/** IAM actions required for the DeleteSnapshotSchedule API call. */
	static readonly DELETE_SNAPSHOT_SCHEDULE: string[] = [
		"redshift:DeleteSnapshotSchedule",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["redshift:DeleteTags"];
	/** IAM actions required for the DeleteUsageLimit API call. */
	static readonly DELETE_USAGE_LIMIT: string[] = ["redshift:DeleteUsageLimit"];
	/** IAM actions required for the DeregisterNamespace API call. */
	static readonly DEREGISTER_NAMESPACE: string[] = [
		"redshift:DeregisterNamespace",
	];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DESCRIBE_ACCOUNT_ATTRIBUTES: string[] = [
		"redshift:DescribeAccountAttributes",
	];
	/** IAM actions required for the DescribeAuthenticationProfiles API call. */
	static readonly DESCRIBE_AUTHENTICATION_PROFILES: string[] = [
		"redshift:DescribeAuthenticationProfiles",
	];
	/** IAM actions required for the DescribeClusterDbRevisions API call. */
	static readonly DESCRIBE_CLUSTER_DB_REVISIONS: string[] = [
		"redshift:DescribeClusterDbRevisions",
	];
	/** IAM actions required for the DescribeClusterParameterGroups API call. */
	static readonly DESCRIBE_CLUSTER_PARAMETER_GROUPS: string[] = [
		"redshift:DescribeClusterParameterGroups",
	];
	/** IAM actions required for the DescribeClusterParameters API call. */
	static readonly DESCRIBE_CLUSTER_PARAMETERS: string[] = [
		"redshift:DescribeClusterParameters",
	];
	/** IAM actions required for the DescribeClusterSecurityGroups API call. */
	static readonly DESCRIBE_CLUSTER_SECURITY_GROUPS: string[] = [
		"redshift:DescribeClusterSecurityGroups",
	];
	/** IAM actions required for the DescribeClusterSnapshots API call. */
	static readonly DESCRIBE_CLUSTER_SNAPSHOTS: string[] = [
		"redshift:DescribeClusterSnapshots",
	];
	/** IAM actions required for the DescribeClusterSubnetGroups API call. */
	static readonly DESCRIBE_CLUSTER_SUBNET_GROUPS: string[] = [
		"redshift:DescribeClusterSubnetGroups",
	];
	/** IAM actions required for the DescribeClusterTracks API call. */
	static readonly DESCRIBE_CLUSTER_TRACKS: string[] = [
		"redshift:DescribeClusterTracks",
	];
	/** IAM actions required for the DescribeClusterVersions API call. */
	static readonly DESCRIBE_CLUSTER_VERSIONS: string[] = [
		"redshift:DescribeClusterVersions",
	];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DESCRIBE_CLUSTERS: string[] = ["redshift:DescribeClusters"];
	/** IAM actions required for the DescribeCustomDomainAssociations API call. */
	static readonly DESCRIBE_CUSTOM_DOMAIN_ASSOCIATIONS: string[] = [
		"redshift:DescribeCustomDomainAssociations",
	];
	/** IAM actions required for the DescribeDataShares API call. */
	static readonly DESCRIBE_DATA_SHARES: string[] = [
		"redshift:DescribeDataShares",
	];
	/** IAM actions required for the DescribeDataSharesForConsumer API call. */
	static readonly DESCRIBE_DATA_SHARES_FOR_CONSUMER: string[] = [
		"redshift:DescribeDataSharesForConsumer",
	];
	/** IAM actions required for the DescribeDataSharesForProducer API call. */
	static readonly DESCRIBE_DATA_SHARES_FOR_PRODUCER: string[] = [
		"redshift:DescribeDataSharesForProducer",
	];
	/** IAM actions required for the DescribeDefaultClusterParameters API call. */
	static readonly DESCRIBE_DEFAULT_CLUSTER_PARAMETERS: string[] = [
		"redshift:DescribeDefaultClusterParameters",
	];
	/** IAM actions required for the DescribeEndpointAccess API call. */
	static readonly DESCRIBE_ENDPOINT_ACCESS: string[] = [
		"redshift:DescribeEndpointAccess",
	];
	/** IAM actions required for the DescribeEndpointAuthorization API call. */
	static readonly DESCRIBE_ENDPOINT_AUTHORIZATION: string[] = [
		"redshift:DescribeEndpointAuthorization",
	];
	/** IAM actions required for the DescribeEventCategories API call. */
	static readonly DESCRIBE_EVENT_CATEGORIES: string[] = [
		"redshift:DescribeEventCategories",
	];
	/** IAM actions required for the DescribeEventSubscriptions API call. */
	static readonly DESCRIBE_EVENT_SUBSCRIPTIONS: string[] = [
		"redshift:DescribeEventSubscriptions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DESCRIBE_EVENTS: string[] = ["redshift:DescribeEvents"];
	/** IAM actions required for the DescribeHsmClientCertificates API call. */
	static readonly DESCRIBE_HSM_CLIENT_CERTIFICATES: string[] = [
		"redshift:DescribeHsmClientCertificates",
	];
	/** IAM actions required for the DescribeHsmConfigurations API call. */
	static readonly DESCRIBE_HSM_CONFIGURATIONS: string[] = [
		"redshift:DescribeHsmConfigurations",
	];
	/** IAM actions required for the DescribeInboundIntegrations API call. */
	static readonly DESCRIBE_INBOUND_INTEGRATIONS: string[] = [
		"redshift:DescribeInboundIntegrations",
	];
	/** IAM actions required for the DescribeIntegrations API call. */
	static readonly DESCRIBE_INTEGRATIONS: string[] = [
		"redshift:DescribeIntegrations",
	];
	/** IAM actions required for the DescribeLoggingStatus API call. */
	static readonly DESCRIBE_LOGGING_STATUS: string[] = [
		"redshift:DescribeLoggingStatus",
	];
	/** IAM actions required for the DescribeNodeConfigurationOptions API call. */
	static readonly DESCRIBE_NODE_CONFIGURATION_OPTIONS: string[] = [
		"redshift:DescribeNodeConfigurationOptions",
	];
	/** IAM actions required for the DescribeOrderableClusterOptions API call. */
	static readonly DESCRIBE_ORDERABLE_CLUSTER_OPTIONS: string[] = [
		"redshift:DescribeOrderableClusterOptions",
	];
	/** IAM actions required for the DescribePartners API call. */
	static readonly DESCRIBE_PARTNERS: string[] = ["redshift:DescribePartners"];
	/** IAM actions required for the DescribeQev2IdcApplications API call. */
	static readonly DESCRIBE_QEV2_IDC_APPLICATIONS: string[] = [
		"redshift:DescribeQev2IdcApplications",
	];
	/** IAM actions required for the DescribeRedshiftIdcApplications API call. */
	static readonly DESCRIBE_REDSHIFT_IDC_APPLICATIONS: string[] = [
		"redshift:DescribeRedshiftIdcApplications",
	];
	/** IAM actions required for the DescribeReservedNodeExchangeStatus API call. */
	static readonly DESCRIBE_RESERVED_NODE_EXCHANGE_STATUS: string[] = [
		"redshift:DescribeReservedNodeExchangeStatus",
	];
	/** IAM actions required for the DescribeReservedNodeOfferings API call. */
	static readonly DESCRIBE_RESERVED_NODE_OFFERINGS: string[] = [
		"redshift:DescribeReservedNodeOfferings",
	];
	/** IAM actions required for the DescribeReservedNodes API call. */
	static readonly DESCRIBE_RESERVED_NODES: string[] = [
		"redshift:DescribeReservedNodes",
	];
	/** IAM actions required for the DescribeResize API call. */
	static readonly DESCRIBE_RESIZE: string[] = ["redshift:DescribeResize"];
	/** IAM actions required for the DescribeScheduledActions API call. */
	static readonly DESCRIBE_SCHEDULED_ACTIONS: string[] = [
		"redshift:DescribeScheduledActions",
	];
	/** IAM actions required for the DescribeSnapshotCopyGrants API call. */
	static readonly DESCRIBE_SNAPSHOT_COPY_GRANTS: string[] = [
		"redshift:DescribeSnapshotCopyGrants",
	];
	/** IAM actions required for the DescribeSnapshotSchedules API call. */
	static readonly DESCRIBE_SNAPSHOT_SCHEDULES: string[] = [
		"redshift:DescribeSnapshotSchedules",
	];
	/** IAM actions required for the DescribeStorage API call. */
	static readonly DESCRIBE_STORAGE: string[] = ["redshift:DescribeStorage"];
	/** IAM actions required for the DescribeTableRestoreStatus API call. */
	static readonly DESCRIBE_TABLE_RESTORE_STATUS: string[] = [
		"redshift:DescribeTableRestoreStatus",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DESCRIBE_TAGS: string[] = ["redshift:DescribeTags"];
	/** IAM actions required for the DescribeUsageLimits API call. */
	static readonly DESCRIBE_USAGE_LIMITS: string[] = [
		"redshift:DescribeUsageLimits",
	];
	/** IAM actions required for the DisableLogging API call. */
	static readonly DISABLE_LOGGING: string[] = ["redshift:DisableLogging"];
	/** IAM actions required for the DisableSnapshotCopy API call. */
	static readonly DISABLE_SNAPSHOT_COPY: string[] = [
		"redshift:DisableSnapshotCopy",
	];
	/** IAM actions required for the DisassociateDataShareConsumer API call. */
	static readonly DISASSOCIATE_DATA_SHARE_CONSUMER: string[] = [
		"redshift:DisassociateDataShareConsumer",
	];
	/** IAM actions required for the EnableLogging API call. */
	static readonly ENABLE_LOGGING: string[] = ["redshift:EnableLogging"];
	/** IAM actions required for the EnableSnapshotCopy API call. */
	static readonly ENABLE_SNAPSHOT_COPY: string[] = [
		"redshift:EnableSnapshotCopy",
	];
	/** IAM actions required for the FailoverPrimaryCompute API call. */
	static readonly FAILOVER_PRIMARY_COMPUTE: string[] = [
		"redshift:FailoverPrimaryCompute",
	];
	/** IAM actions required for the GetClusterCredentials API call. */
	static readonly GET_CLUSTER_CREDENTIALS: string[] = [
		"redshift:CreateClusterUser",
		"redshift:GetClusterCredentials",
		"redshift:JoinGroup",
	];
	/** IAM actions required for the GetClusterCredentialsWithIAM API call. */
	static readonly GET_CLUSTER_CREDENTIALS_WITH_IAM: string[] = [
		"redshift:GetClusterCredentialsWithIAM",
	];
	/** IAM actions required for the GetIdentityCenterAuthToken API call. */
	static readonly GET_IDENTITY_CENTER_AUTH_TOKEN: string[] = [
		"redshift:GetIdentityCenterAuthToken",
	];
	/** IAM actions required for the GetReservedNodeExchangeConfigurationOptions API call. */
	static readonly GET_RESERVED_NODE_EXCHANGE_CONFIGURATION_OPTIONS: string[] = [
		"redshift:GetReservedNodeExchangeConfigurationOptions",
	];
	/** IAM actions required for the GetReservedNodeExchangeOfferings API call. */
	static readonly GET_RESERVED_NODE_EXCHANGE_OFFERINGS: string[] = [
		"redshift:GetReservedNodeExchangeOfferings",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"redshift:GetResourcePolicy",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = [
		"redshift:ListRecommendations",
		"redshift:ViewQueriesInConsole",
	];
	/** IAM actions required for the ModifyAquaConfiguration API call. */
	static readonly MODIFY_AQUA_CONFIGURATION: string[] = [
		"redshift:ModifyAquaConfiguration",
	];
	/** IAM actions required for the ModifyAuthenticationProfile API call. */
	static readonly MODIFY_AUTHENTICATION_PROFILE: string[] = [
		"redshift:ModifyAuthenticationProfile",
	];
	/** IAM actions required for the ModifyCluster API call. */
	static readonly MODIFY_CLUSTER: string[] = ["redshift:ModifyCluster"];
	/** IAM actions required for the ModifyClusterDbRevision API call. */
	static readonly MODIFY_CLUSTER_DB_REVISION: string[] = [
		"redshift:ModifyClusterDbRevision",
	];
	/** IAM actions required for the ModifyClusterIamRoles API call. */
	static readonly MODIFY_CLUSTER_IAM_ROLES: string[] = [
		"redshift:ModifyClusterIamRoles",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyClusterMaintenance API call. */
	static readonly MODIFY_CLUSTER_MAINTENANCE: string[] = [
		"redshift:ModifyClusterMaintenance",
	];
	/** IAM actions required for the ModifyClusterParameterGroup API call. */
	static readonly MODIFY_CLUSTER_PARAMETER_GROUP: string[] = [
		"redshift:ModifyClusterParameterGroup",
	];
	/** IAM actions required for the ModifyClusterSnapshot API call. */
	static readonly MODIFY_CLUSTER_SNAPSHOT: string[] = [
		"redshift:ModifyClusterSnapshot",
	];
	/** IAM actions required for the ModifyClusterSnapshotSchedule API call. */
	static readonly MODIFY_CLUSTER_SNAPSHOT_SCHEDULE: string[] = [
		"redshift:ModifyClusterSnapshotSchedule",
	];
	/** IAM actions required for the ModifyClusterSubnetGroup API call. */
	static readonly MODIFY_CLUSTER_SUBNET_GROUP: string[] = [
		"redshift:ModifyClusterSubnetGroup",
	];
	/** IAM actions required for the ModifyCustomDomainAssociation API call. */
	static readonly MODIFY_CUSTOM_DOMAIN_ASSOCIATION: string[] = [
		"redshift:ModifyCustomDomainAssociation",
	];
	/** IAM actions required for the ModifyEndpointAccess API call. */
	static readonly MODIFY_ENDPOINT_ACCESS: string[] = [
		"redshift:ModifyEndpointAccess",
	];
	/** IAM actions required for the ModifyEventSubscription API call. */
	static readonly MODIFY_EVENT_SUBSCRIPTION: string[] = [
		"redshift:ModifyEventSubscription",
	];
	/** IAM actions required for the ModifyIntegration API call. */
	static readonly MODIFY_INTEGRATION: string[] = ["redshift:ModifyIntegration"];
	/** IAM actions required for the ModifyLakehouseConfiguration API call. */
	static readonly MODIFY_LAKEHOUSE_CONFIGURATION: string[] = [
		"redshift:AssociateDataShareConsumer",
		"redshift:DeregisterNamespace",
		"iam:PassRole",
		"redshift:RegisterNamespace",
	];
	/** IAM actions required for the ModifyQev2IdcApplication API call. */
	static readonly MODIFY_QEV2_IDC_APPLICATION: string[] = [
		"redshift:ModifyQev2IdcApplication",
	];
	/** IAM actions required for the ModifyRedshiftIdcApplication API call. */
	static readonly MODIFY_REDSHIFT_IDC_APPLICATION: string[] = [
		"redshift:ModifyRedshiftIdcApplication",
	];
	/** IAM actions required for the ModifyScheduledAction API call. */
	static readonly MODIFY_SCHEDULED_ACTION: string[] = [
		"redshift:ModifyScheduledAction",
		"iam:PassRole",
		"redshift:PauseCluster",
		"redshift:ResizeCluster",
		"redshift:ResumeCluster",
	];
	/** IAM actions required for the ModifySnapshotCopyRetentionPeriod API call. */
	static readonly MODIFY_SNAPSHOT_COPY_RETENTION_PERIOD: string[] = [
		"redshift:ModifySnapshotCopyRetentionPeriod",
	];
	/** IAM actions required for the ModifySnapshotSchedule API call. */
	static readonly MODIFY_SNAPSHOT_SCHEDULE: string[] = [
		"redshift:ModifySnapshotSchedule",
	];
	/** IAM actions required for the ModifyUsageLimit API call. */
	static readonly MODIFY_USAGE_LIMIT: string[] = ["redshift:ModifyUsageLimit"];
	/** IAM actions required for the PauseCluster API call. */
	static readonly PAUSE_CLUSTER: string[] = ["redshift:PauseCluster"];
	/** IAM actions required for the PurchaseReservedNodeOffering API call. */
	static readonly PURCHASE_RESERVED_NODE_OFFERING: string[] = [
		"redshift:PurchaseReservedNodeOffering",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"redshift:PutResourcePolicy",
	];
	/** IAM actions required for the RebootCluster API call. */
	static readonly REBOOT_CLUSTER: string[] = ["redshift:RebootCluster"];
	/** IAM actions required for the RegisterNamespace API call. */
	static readonly REGISTER_NAMESPACE: string[] = ["redshift:RegisterNamespace"];
	/** IAM actions required for the RejectDataShare API call. */
	static readonly REJECT_DATA_SHARE: string[] = ["redshift:RejectDataShare"];
	/** IAM actions required for the ResetClusterParameterGroup API call. */
	static readonly RESET_CLUSTER_PARAMETER_GROUP: string[] = [
		"redshift:ResetClusterParameterGroup",
	];
	/** IAM actions required for the ResizeCluster API call. */
	static readonly RESIZE_CLUSTER: string[] = ["redshift:ResizeCluster"];
	/** IAM actions required for the RestoreFromClusterSnapshot API call. */
	static readonly RESTORE_FROM_CLUSTER_SNAPSHOT: string[] = [
		"redshift:AssociateDataShareConsumer",
		"iam:PassRole",
		"redshift:RegisterNamespace",
		"redshift:RestoreFromClusterSnapshot",
	];
	/** IAM actions required for the RestoreTableFromClusterSnapshot API call. */
	static readonly RESTORE_TABLE_FROM_CLUSTER_SNAPSHOT: string[] = [
		"redshift:RestoreTableFromClusterSnapshot",
	];
	/** IAM actions required for the ResumeCluster API call. */
	static readonly RESUME_CLUSTER: string[] = ["redshift:ResumeCluster"];
	/** IAM actions required for the RevokeClusterSecurityGroupIngress API call. */
	static readonly REVOKE_CLUSTER_SECURITY_GROUP_INGRESS: string[] = [
		"redshift:RevokeClusterSecurityGroupIngress",
	];
	/** IAM actions required for the RevokeEndpointAccess API call. */
	static readonly REVOKE_ENDPOINT_ACCESS: string[] = [
		"redshift:RevokeEndpointAccess",
	];
	/** IAM actions required for the RevokeSnapshotAccess API call. */
	static readonly REVOKE_SNAPSHOT_ACCESS: string[] = [
		"redshift:RevokeSnapshotAccess",
	];
	/** IAM actions required for the RotateEncryptionKey API call. */
	static readonly ROTATE_ENCRYPTION_KEY: string[] = [
		"redshift:RotateEncryptionKey",
	];
	/** IAM actions required for the UpdatePartnerStatus API call. */
	static readonly UPDATE_PARTNER_STATUS: string[] = [
		"redshift:UpdatePartnerStatus",
	];
}

/**
 * Condition key constants and builders for redshift.
 */
export class RedshiftConditions {
	/** Condition keys applicable to the AssociateDataShareConsumer action. */
	static readonly ASSOCIATE_DATA_SHARE_CONSUMER_CONDITION_KEYS: string[] = [
		"redshift:AllowWrites",
		"redshift:ConsumerArn",
	];
	/** Condition keys applicable to the AuthorizeDataShare action. */
	static readonly AUTHORIZE_DATA_SHARE_CONDITION_KEYS: string[] = [
		"redshift:AllowWrites",
		"redshift:ConsumerIdentifier",
	];
	/** Condition keys applicable to the CopyClusterSnapshot action. */
	static readonly COPY_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterParameterGroup action. */
	static readonly CREATE_CLUSTER_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSecurityGroup action. */
	static readonly CREATE_CLUSTER_SECURITY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSnapshot action. */
	static readonly CREATE_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSubnetGroup action. */
	static readonly CREATE_CLUSTER_SUBNET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterUser action. */
	static readonly CREATE_CLUSTER_USER_CONDITION_KEYS: string[] = [
		"redshift:DbUser",
	];
	/** Condition keys applicable to the CreateEventSubscription action. */
	static readonly CREATE_EVENT_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHsmClientCertificate action. */
	static readonly CREATE_HSM_CLIENT_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHsmConfiguration action. */
	static readonly CREATE_HSM_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CREATE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"redshift:IntegrationSourceArn",
		"redshift:IntegrationTargetArn",
	];
	/** Condition keys applicable to the CreateSnapshotCopyGrant action. */
	static readonly CREATE_SNAPSHOT_COPY_GRANT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshotSchedule action. */
	static readonly CREATE_SNAPSHOT_SCHEDULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CREATE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUsageLimit action. */
	static readonly CREATE_USAGE_LIMIT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeauthorizeDataShare action. */
	static readonly DEAUTHORIZE_DATA_SHARE_CONDITION_KEYS: string[] = [
		"redshift:ConsumerIdentifier",
	];
	/** Condition keys applicable to the DeleteIntegration action. */
	static readonly DELETE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the DescribeInboundIntegrations action. */
	static readonly DESCRIBE_INBOUND_INTEGRATIONS_CONDITION_KEYS: string[] = [
		"redshift:InboundIntegrationArn",
	];
	/** Condition keys applicable to the DescribeIntegrations action. */
	static readonly DESCRIBE_INTEGRATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateDataShareConsumer action. */
	static readonly DISASSOCIATE_DATA_SHARE_CONSUMER_CONDITION_KEYS: string[] = [
		"redshift:ConsumerArn",
	];
	/** Condition keys applicable to the GetClusterCredentials action. */
	static readonly GET_CLUSTER_CREDENTIALS_CONDITION_KEYS: string[] = [
		"redshift:DbName",
		"redshift:DbUser",
		"redshift:DurationSeconds",
	];
	/** Condition keys applicable to the GetClusterCredentialsWithIAM action. */
	static readonly GET_CLUSTER_CREDENTIALS_WITH_IAM_CONDITION_KEYS: string[] = [
		"redshift:DbName",
		"redshift:DurationSeconds",
	];
	/** Condition keys applicable to the ModifyIntegration action. */
	static readonly MODIFY_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreFromClusterSnapshot action. */
	static readonly RESTORE_FROM_CLUSTER_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: redshift:AllowWrites (Bool) */
	static readonly ALLOW_WRITES = "redshift:AllowWrites";
	/** Condition key: redshift:ConsumerArn (ARN) */
	static readonly CONSUMER_ARN = "redshift:ConsumerArn";
	/** Condition key: redshift:ConsumerIdentifier (String) */
	static readonly CONSUMER_IDENTIFIER = "redshift:ConsumerIdentifier";
	/** Condition key: redshift:DbName (String) */
	static readonly DB_NAME = "redshift:DbName";
	/** Condition key: redshift:DbUser (String) */
	static readonly DB_USER = "redshift:DbUser";
	/** Condition key: redshift:DurationSeconds (String) */
	static readonly DURATION_SECONDS = "redshift:DurationSeconds";
	/** Condition key: redshift:InboundIntegrationArn (ARN) */
	static readonly INBOUND_INTEGRATION_ARN = "redshift:InboundIntegrationArn";
	/** Condition key: redshift:IntegrationSourceArn (ARN) */
	static readonly INTEGRATION_SOURCE_ARN = "redshift:IntegrationSourceArn";
	/** Condition key: redshift:IntegrationTargetArn (ARN) */
	static readonly INTEGRATION_TARGET_ARN = "redshift:IntegrationTargetArn";

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
	 * Generates a condition block for `redshift:AllowWrites`.
	 */
	static allowWrites(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "redshift:AllowWrites": value } };
	}

	/**
	 * Generates a condition block for `redshift:ConsumerArn`.
	 */
	static consumerARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "redshift:ConsumerArn": value } };
	}

	/**
	 * Generates a condition block for `redshift:ConsumerIdentifier`.
	 */
	static consumerIdentifier(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift:ConsumerIdentifier": value } };
	}

	/**
	 * Generates a condition block for `redshift:DbName`.
	 */
	static dbName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift:DbName": value } };
	}

	/**
	 * Generates a condition block for `redshift:DbUser`.
	 */
	static dbUser(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift:DbUser": value } };
	}

	/**
	 * Generates a condition block for `redshift:DurationSeconds`.
	 */
	static durationSeconds(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift:DurationSeconds": value } };
	}

	/**
	 * Generates a condition block for `redshift:InboundIntegrationArn`.
	 */
	static inboundIntegrationARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "redshift:InboundIntegrationArn": value } };
	}

	/**
	 * Generates a condition block for `redshift:IntegrationSourceArn`.
	 */
	static integrationSourceARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "redshift:IntegrationSourceArn": value } };
	}

	/**
	 * Generates a condition block for `redshift:IntegrationTargetArn`.
	 */
	static integrationTargetARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "redshift:IntegrationTargetArn": value } };
	}
}
