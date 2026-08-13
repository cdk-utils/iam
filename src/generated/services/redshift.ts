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
	static readonly AcceptReservedNodeExchange =
		"redshift:AcceptReservedNodeExchange";
	/** [Write] redshift:AddPartner */
	static readonly AddPartner = "redshift:AddPartner";
	/** [Write] redshift:AssociateDataShareConsumer */
	static readonly AssociateDataShareConsumer =
		"redshift:AssociateDataShareConsumer";
	/** [Write] redshift:AuthorizeClusterSecurityGroupIngress */
	static readonly AuthorizeClusterSecurityGroupIngress =
		"redshift:AuthorizeClusterSecurityGroupIngress";
	/** [PermissionManagement] redshift:AuthorizeDataShare */
	static readonly AuthorizeDataShare = "redshift:AuthorizeDataShare";
	/** [PermissionManagement] redshift:AuthorizeEndpointAccess */
	static readonly AuthorizeEndpointAccess = "redshift:AuthorizeEndpointAccess";
	/** [Write] redshift:AuthorizeInboundIntegration */
	static readonly AuthorizeInboundIntegration =
		"redshift:AuthorizeInboundIntegration";
	/** [PermissionManagement] redshift:AuthorizeSnapshotAccess */
	static readonly AuthorizeSnapshotAccess = "redshift:AuthorizeSnapshotAccess";
	/** [Write] redshift:BatchDeleteClusterSnapshots */
	static readonly BatchDeleteClusterSnapshots =
		"redshift:BatchDeleteClusterSnapshots";
	/** [Write] redshift:BatchModifyClusterSnapshots */
	static readonly BatchModifyClusterSnapshots =
		"redshift:BatchModifyClusterSnapshots";
	/** [Write] redshift:CancelQuery */
	static readonly CancelQuery = "redshift:CancelQuery";
	/** [Write] redshift:CancelQuerySession */
	static readonly CancelQuerySession = "redshift:CancelQuerySession";
	/** [Write] redshift:CancelResize */
	static readonly CancelResize = "redshift:CancelResize";
	/** [Write] redshift:CopyClusterSnapshot */
	static readonly CopyClusterSnapshot = "redshift:CopyClusterSnapshot";
	/** [Write] redshift:CreateAuthenticationProfile */
	static readonly CreateAuthenticationProfile =
		"redshift:CreateAuthenticationProfile";
	/** [Write] redshift:CreateCluster */
	static readonly CreateCluster = "redshift:CreateCluster";
	/** [Write] redshift:CreateClusterParameterGroup */
	static readonly CreateClusterParameterGroup =
		"redshift:CreateClusterParameterGroup";
	/** [Write] redshift:CreateClusterSecurityGroup */
	static readonly CreateClusterSecurityGroup =
		"redshift:CreateClusterSecurityGroup";
	/** [Write] redshift:CreateClusterSnapshot */
	static readonly CreateClusterSnapshot = "redshift:CreateClusterSnapshot";
	/** [Write] redshift:CreateClusterSubnetGroup */
	static readonly CreateClusterSubnetGroup =
		"redshift:CreateClusterSubnetGroup";
	/** [PermissionManagement] redshift:CreateClusterUser */
	static readonly CreateClusterUser = "redshift:CreateClusterUser";
	/** [Write] redshift:CreateCustomDomainAssociation */
	static readonly CreateCustomDomainAssociation =
		"redshift:CreateCustomDomainAssociation";
	/** [Write] redshift:CreateEndpointAccess */
	static readonly CreateEndpointAccess = "redshift:CreateEndpointAccess";
	/** [Write] redshift:CreateEventSubscription */
	static readonly CreateEventSubscription = "redshift:CreateEventSubscription";
	/** [Write] redshift:CreateHsmClientCertificate */
	static readonly CreateHsmClientCertificate =
		"redshift:CreateHsmClientCertificate";
	/** [Write] redshift:CreateHsmConfiguration */
	static readonly CreateHsmConfiguration = "redshift:CreateHsmConfiguration";
	/** [Write] redshift:CreateInboundIntegration */
	static readonly CreateInboundIntegration =
		"redshift:CreateInboundIntegration";
	/** [Write] redshift:CreateIntegration */
	static readonly CreateIntegration = "redshift:CreateIntegration";
	/** [Write] redshift:CreateQev2IdcApplication */
	static readonly CreateQev2IdcApplication =
		"redshift:CreateQev2IdcApplication";
	/** [Write] redshift:CreateRedshiftIdcApplication */
	static readonly CreateRedshiftIdcApplication =
		"redshift:CreateRedshiftIdcApplication";
	/** [Write] redshift:CreateSavedQuery */
	static readonly CreateSavedQuery = "redshift:CreateSavedQuery";
	/** [Write] redshift:CreateScheduledAction */
	static readonly CreateScheduledAction = "redshift:CreateScheduledAction";
	/** [PermissionManagement] redshift:CreateSnapshotCopyGrant */
	static readonly CreateSnapshotCopyGrant = "redshift:CreateSnapshotCopyGrant";
	/** [Write] redshift:CreateSnapshotSchedule */
	static readonly CreateSnapshotSchedule = "redshift:CreateSnapshotSchedule";
	/** [Tagging] redshift:CreateTags */
	static readonly CreateTags = "redshift:CreateTags";
	/** [Write] redshift:CreateUsageLimit */
	static readonly CreateUsageLimit = "redshift:CreateUsageLimit";
	/** [PermissionManagement] redshift:DeauthorizeDataShare */
	static readonly DeauthorizeDataShare = "redshift:DeauthorizeDataShare";
	/** [Write] redshift:DeleteAuthenticationProfile */
	static readonly DeleteAuthenticationProfile =
		"redshift:DeleteAuthenticationProfile";
	/** [Write] redshift:DeleteCluster */
	static readonly DeleteCluster = "redshift:DeleteCluster";
	/** [Write] redshift:DeleteClusterParameterGroup */
	static readonly DeleteClusterParameterGroup =
		"redshift:DeleteClusterParameterGroup";
	/** [Write] redshift:DeleteClusterSecurityGroup */
	static readonly DeleteClusterSecurityGroup =
		"redshift:DeleteClusterSecurityGroup";
	/** [Write] redshift:DeleteClusterSnapshot */
	static readonly DeleteClusterSnapshot = "redshift:DeleteClusterSnapshot";
	/** [Write] redshift:DeleteClusterSubnetGroup */
	static readonly DeleteClusterSubnetGroup =
		"redshift:DeleteClusterSubnetGroup";
	/** [Write] redshift:DeleteCustomDomainAssociation */
	static readonly DeleteCustomDomainAssociation =
		"redshift:DeleteCustomDomainAssociation";
	/** [Write] redshift:DeleteEndpointAccess */
	static readonly DeleteEndpointAccess = "redshift:DeleteEndpointAccess";
	/** [Write] redshift:DeleteEventSubscription */
	static readonly DeleteEventSubscription = "redshift:DeleteEventSubscription";
	/** [Write] redshift:DeleteHsmClientCertificate */
	static readonly DeleteHsmClientCertificate =
		"redshift:DeleteHsmClientCertificate";
	/** [Write] redshift:DeleteHsmConfiguration */
	static readonly DeleteHsmConfiguration = "redshift:DeleteHsmConfiguration";
	/** [Write] redshift:DeleteIntegration */
	static readonly DeleteIntegration = "redshift:DeleteIntegration";
	/** [Write] redshift:DeletePartner */
	static readonly DeletePartner = "redshift:DeletePartner";
	/** [Write] redshift:DeleteQev2IdcApplication */
	static readonly DeleteQev2IdcApplication =
		"redshift:DeleteQev2IdcApplication";
	/** [Write] redshift:DeleteRedshiftIdcApplication */
	static readonly DeleteRedshiftIdcApplication =
		"redshift:DeleteRedshiftIdcApplication";
	/** [PermissionManagement] redshift:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "redshift:DeleteResourcePolicy";
	/** [Write] redshift:DeleteSavedQueries */
	static readonly DeleteSavedQueries = "redshift:DeleteSavedQueries";
	/** [Write] redshift:DeleteScheduledAction */
	static readonly DeleteScheduledAction = "redshift:DeleteScheduledAction";
	/** [Write] redshift:DeleteSnapshotCopyGrant */
	static readonly DeleteSnapshotCopyGrant = "redshift:DeleteSnapshotCopyGrant";
	/** [Write] redshift:DeleteSnapshotSchedule */
	static readonly DeleteSnapshotSchedule = "redshift:DeleteSnapshotSchedule";
	/** [Tagging] redshift:DeleteTags */
	static readonly DeleteTags = "redshift:DeleteTags";
	/** [Write] redshift:DeleteUsageLimit */
	static readonly DeleteUsageLimit = "redshift:DeleteUsageLimit";
	/** [Write] redshift:DeregisterNamespace */
	static readonly DeregisterNamespace = "redshift:DeregisterNamespace";
	/** [Read] redshift:DescribeAccountAttributes */
	static readonly DescribeAccountAttributes =
		"redshift:DescribeAccountAttributes";
	/** [Read] redshift:DescribeAuthenticationProfiles */
	static readonly DescribeAuthenticationProfiles =
		"redshift:DescribeAuthenticationProfiles";
	/** [Read] redshift:DescribeAutonomicsDenylist */
	static readonly DescribeAutonomicsDenylist =
		"redshift:DescribeAutonomicsDenylist";
	/** [List] redshift:DescribeClusterDbRevisions */
	static readonly DescribeClusterDbRevisions =
		"redshift:DescribeClusterDbRevisions";
	/** [Read] redshift:DescribeClusterParameterGroups */
	static readonly DescribeClusterParameterGroups =
		"redshift:DescribeClusterParameterGroups";
	/** [Read] redshift:DescribeClusterParameters */
	static readonly DescribeClusterParameters =
		"redshift:DescribeClusterParameters";
	/** [Read] redshift:DescribeClusterSecurityGroups */
	static readonly DescribeClusterSecurityGroups =
		"redshift:DescribeClusterSecurityGroups";
	/** [Read] redshift:DescribeClusterSnapshots */
	static readonly DescribeClusterSnapshots =
		"redshift:DescribeClusterSnapshots";
	/** [Read] redshift:DescribeClusterSubnetGroups */
	static readonly DescribeClusterSubnetGroups =
		"redshift:DescribeClusterSubnetGroups";
	/** [List] redshift:DescribeClusterTracks */
	static readonly DescribeClusterTracks = "redshift:DescribeClusterTracks";
	/** [Read] redshift:DescribeClusterVersions */
	static readonly DescribeClusterVersions = "redshift:DescribeClusterVersions";
	/** [List] redshift:DescribeClusters */
	static readonly DescribeClusters = "redshift:DescribeClusters";
	/** [List] redshift:DescribeCustomDomainAssociations */
	static readonly DescribeCustomDomainAssociations =
		"redshift:DescribeCustomDomainAssociations";
	/** [Read] redshift:DescribeDataShares */
	static readonly DescribeDataShares = "redshift:DescribeDataShares";
	/** [Read] redshift:DescribeDataSharesForConsumer */
	static readonly DescribeDataSharesForConsumer =
		"redshift:DescribeDataSharesForConsumer";
	/** [Read] redshift:DescribeDataSharesForProducer */
	static readonly DescribeDataSharesForProducer =
		"redshift:DescribeDataSharesForProducer";
	/** [Read] redshift:DescribeDefaultClusterParameters */
	static readonly DescribeDefaultClusterParameters =
		"redshift:DescribeDefaultClusterParameters";
	/** [Read] redshift:DescribeEndpointAccess */
	static readonly DescribeEndpointAccess = "redshift:DescribeEndpointAccess";
	/** [List] redshift:DescribeEndpointAuthorization */
	static readonly DescribeEndpointAuthorization =
		"redshift:DescribeEndpointAuthorization";
	/** [Read] redshift:DescribeEventCategories */
	static readonly DescribeEventCategories = "redshift:DescribeEventCategories";
	/** [Read] redshift:DescribeEventSubscriptions */
	static readonly DescribeEventSubscriptions =
		"redshift:DescribeEventSubscriptions";
	/** [List] redshift:DescribeEvents */
	static readonly DescribeEvents = "redshift:DescribeEvents";
	/** [Read] redshift:DescribeHsmClientCertificates */
	static readonly DescribeHsmClientCertificates =
		"redshift:DescribeHsmClientCertificates";
	/** [Read] redshift:DescribeHsmConfigurations */
	static readonly DescribeHsmConfigurations =
		"redshift:DescribeHsmConfigurations";
	/** [List] redshift:DescribeInboundIntegrations */
	static readonly DescribeInboundIntegrations =
		"redshift:DescribeInboundIntegrations";
	/** [List] redshift:DescribeIntegrations */
	static readonly DescribeIntegrations = "redshift:DescribeIntegrations";
	/** [Read] redshift:DescribeLoggingStatus */
	static readonly DescribeLoggingStatus = "redshift:DescribeLoggingStatus";
	/** [List] redshift:DescribeNodeConfigurationOptions */
	static readonly DescribeNodeConfigurationOptions =
		"redshift:DescribeNodeConfigurationOptions";
	/** [Read] redshift:DescribeOrderableClusterOptions */
	static readonly DescribeOrderableClusterOptions =
		"redshift:DescribeOrderableClusterOptions";
	/** [Read] redshift:DescribePartners */
	static readonly DescribePartners = "redshift:DescribePartners";
	/** [List] redshift:DescribeQev2IdcApplications */
	static readonly DescribeQev2IdcApplications =
		"redshift:DescribeQev2IdcApplications";
	/** [Read] redshift:DescribeQuery */
	static readonly DescribeQuery = "redshift:DescribeQuery";
	/** [List] redshift:DescribeRedshiftIdcApplications */
	static readonly DescribeRedshiftIdcApplications =
		"redshift:DescribeRedshiftIdcApplications";
	/** [Read] redshift:DescribeReservedNodeExchangeStatus */
	static readonly DescribeReservedNodeExchangeStatus =
		"redshift:DescribeReservedNodeExchangeStatus";
	/** [Read] redshift:DescribeReservedNodeOfferings */
	static readonly DescribeReservedNodeOfferings =
		"redshift:DescribeReservedNodeOfferings";
	/** [Read] redshift:DescribeReservedNodes */
	static readonly DescribeReservedNodes = "redshift:DescribeReservedNodes";
	/** [Read] redshift:DescribeResize */
	static readonly DescribeResize = "redshift:DescribeResize";
	/** [Read] redshift:DescribeSavedQueries */
	static readonly DescribeSavedQueries = "redshift:DescribeSavedQueries";
	/** [Read] redshift:DescribeScheduledActions */
	static readonly DescribeScheduledActions =
		"redshift:DescribeScheduledActions";
	/** [Read] redshift:DescribeSnapshotCopyGrants */
	static readonly DescribeSnapshotCopyGrants =
		"redshift:DescribeSnapshotCopyGrants";
	/** [Read] redshift:DescribeSnapshotSchedules */
	static readonly DescribeSnapshotSchedules =
		"redshift:DescribeSnapshotSchedules";
	/** [Read] redshift:DescribeStorage */
	static readonly DescribeStorage = "redshift:DescribeStorage";
	/** [Read] redshift:DescribeTable */
	static readonly DescribeTable = "redshift:DescribeTable";
	/** [Read] redshift:DescribeTableRestoreStatus */
	static readonly DescribeTableRestoreStatus =
		"redshift:DescribeTableRestoreStatus";
	/** [Read] redshift:DescribeTags */
	static readonly DescribeTags = "redshift:DescribeTags";
	/** [Read] redshift:DescribeUsageLimits */
	static readonly DescribeUsageLimits = "redshift:DescribeUsageLimits";
	/** [Write] redshift:DisableLogging */
	static readonly DisableLogging = "redshift:DisableLogging";
	/** [Write] redshift:DisableSnapshotCopy */
	static readonly DisableSnapshotCopy = "redshift:DisableSnapshotCopy";
	/** [Write] redshift:DisassociateDataShareConsumer */
	static readonly DisassociateDataShareConsumer =
		"redshift:DisassociateDataShareConsumer";
	/** [Write] redshift:EnableLogging */
	static readonly EnableLogging = "redshift:EnableLogging";
	/** [Write] redshift:EnableSnapshotCopy */
	static readonly EnableSnapshotCopy = "redshift:EnableSnapshotCopy";
	/** [Write] redshift:ExecuteQuery */
	static readonly ExecuteQuery = "redshift:ExecuteQuery";
	/** [Write] redshift:FailoverPrimaryCompute */
	static readonly FailoverPrimaryCompute = "redshift:FailoverPrimaryCompute";
	/** [Read] redshift:FetchResults */
	static readonly FetchResults = "redshift:FetchResults";
	/** [Write] redshift:GetClusterCredentials */
	static readonly actionGetClusterCredentials =
		"redshift:GetClusterCredentials";
	/** [Write] redshift:GetClusterCredentialsWithIAM */
	static readonly actionGetClusterCredentialsWithIAM =
		"redshift:GetClusterCredentialsWithIAM";
	/** [Read] redshift:GetIdentityCenterAuthToken */
	static readonly actionGetIdentityCenterAuthToken =
		"redshift:GetIdentityCenterAuthToken";
	/** [Read] redshift:GetReservedNodeExchangeConfigurationOptions */
	static readonly actionGetReservedNodeExchangeConfigurationOptions =
		"redshift:GetReservedNodeExchangeConfigurationOptions";
	/** [Read] redshift:GetReservedNodeExchangeOfferings */
	static readonly actionGetReservedNodeExchangeOfferings =
		"redshift:GetReservedNodeExchangeOfferings";
	/** [Read] redshift:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "redshift:GetResourcePolicy";
	/** [PermissionManagement] redshift:JoinGroup */
	static readonly JoinGroup = "redshift:JoinGroup";
	/** [List] redshift:ListDatabases */
	static readonly ListDatabases = "redshift:ListDatabases";
	/** [List] redshift:ListRecommendations */
	static readonly ListRecommendations = "redshift:ListRecommendations";
	/** [List] redshift:ListSavedQueries */
	static readonly ListSavedQueries = "redshift:ListSavedQueries";
	/** [List] redshift:ListSchemas */
	static readonly ListSchemas = "redshift:ListSchemas";
	/** [List] redshift:ListTables */
	static readonly ListTables = "redshift:ListTables";
	/** [Write] redshift:ModifyAquaConfiguration */
	static readonly ModifyAquaConfiguration = "redshift:ModifyAquaConfiguration";
	/** [Write] redshift:ModifyAuthenticationProfile */
	static readonly ModifyAuthenticationProfile =
		"redshift:ModifyAuthenticationProfile";
	/** [Write] redshift:ModifyAutonomicsDenylist */
	static readonly ModifyAutonomicsDenylist =
		"redshift:ModifyAutonomicsDenylist";
	/** [Write] redshift:ModifyCluster */
	static readonly ModifyCluster = "redshift:ModifyCluster";
	/** [Write] redshift:ModifyClusterDbRevision */
	static readonly ModifyClusterDbRevision = "redshift:ModifyClusterDbRevision";
	/** [PermissionManagement] redshift:ModifyClusterIamRoles */
	static readonly ModifyClusterIamRoles = "redshift:ModifyClusterIamRoles";
	/** [Write] redshift:ModifyClusterMaintenance */
	static readonly ModifyClusterMaintenance =
		"redshift:ModifyClusterMaintenance";
	/** [Write] redshift:ModifyClusterParameterGroup */
	static readonly ModifyClusterParameterGroup =
		"redshift:ModifyClusterParameterGroup";
	/** [Write] redshift:ModifyClusterSnapshot */
	static readonly ModifyClusterSnapshot = "redshift:ModifyClusterSnapshot";
	/** [Write] redshift:ModifyClusterSnapshotSchedule */
	static readonly ModifyClusterSnapshotSchedule =
		"redshift:ModifyClusterSnapshotSchedule";
	/** [Write] redshift:ModifyClusterSubnetGroup */
	static readonly ModifyClusterSubnetGroup =
		"redshift:ModifyClusterSubnetGroup";
	/** [Write] redshift:ModifyCustomDomainAssociation */
	static readonly ModifyCustomDomainAssociation =
		"redshift:ModifyCustomDomainAssociation";
	/** [Write] redshift:ModifyEndpointAccess */
	static readonly ModifyEndpointAccess = "redshift:ModifyEndpointAccess";
	/** [Write] redshift:ModifyEventSubscription */
	static readonly ModifyEventSubscription = "redshift:ModifyEventSubscription";
	/** [Write] redshift:ModifyIntegration */
	static readonly ModifyIntegration = "redshift:ModifyIntegration";
	/** [Write] redshift:ModifyQev2IdcApplication */
	static readonly ModifyQev2IdcApplication =
		"redshift:ModifyQev2IdcApplication";
	/** [Write] redshift:ModifyRedshiftIdcApplication */
	static readonly ModifyRedshiftIdcApplication =
		"redshift:ModifyRedshiftIdcApplication";
	/** [Write] redshift:ModifySavedQuery */
	static readonly ModifySavedQuery = "redshift:ModifySavedQuery";
	/** [Write] redshift:ModifyScheduledAction */
	static readonly ModifyScheduledAction = "redshift:ModifyScheduledAction";
	/** [Write] redshift:ModifySnapshotCopyRetentionPeriod */
	static readonly ModifySnapshotCopyRetentionPeriod =
		"redshift:ModifySnapshotCopyRetentionPeriod";
	/** [Write] redshift:ModifySnapshotSchedule */
	static readonly ModifySnapshotSchedule = "redshift:ModifySnapshotSchedule";
	/** [Write] redshift:ModifyUsageLimit */
	static readonly ModifyUsageLimit = "redshift:ModifyUsageLimit";
	/** [Write] redshift:PauseCluster */
	static readonly PauseCluster = "redshift:PauseCluster";
	/** [Write] redshift:PurchaseReservedNodeOffering */
	static readonly PurchaseReservedNodeOffering =
		"redshift:PurchaseReservedNodeOffering";
	/** [PermissionManagement] redshift:PutResourcePolicy */
	static readonly PutResourcePolicy = "redshift:PutResourcePolicy";
	/** [Write] redshift:RebootCluster */
	static readonly RebootCluster = "redshift:RebootCluster";
	/** [Write] redshift:RegisterNamespace */
	static readonly RegisterNamespace = "redshift:RegisterNamespace";
	/** [PermissionManagement] redshift:RejectDataShare */
	static readonly RejectDataShare = "redshift:RejectDataShare";
	/** [Write] redshift:ResetClusterParameterGroup */
	static readonly ResetClusterParameterGroup =
		"redshift:ResetClusterParameterGroup";
	/** [Write] redshift:ResizeCluster */
	static readonly ResizeCluster = "redshift:ResizeCluster";
	/** [Write] redshift:RestoreFromClusterSnapshot */
	static readonly RestoreFromClusterSnapshot =
		"redshift:RestoreFromClusterSnapshot";
	/** [Write] redshift:RestoreTableFromClusterSnapshot */
	static readonly RestoreTableFromClusterSnapshot =
		"redshift:RestoreTableFromClusterSnapshot";
	/** [Write] redshift:ResumeCluster */
	static readonly ResumeCluster = "redshift:ResumeCluster";
	/** [Write] redshift:RevokeClusterSecurityGroupIngress */
	static readonly RevokeClusterSecurityGroupIngress =
		"redshift:RevokeClusterSecurityGroupIngress";
	/** [PermissionManagement] redshift:RevokeEndpointAccess */
	static readonly RevokeEndpointAccess = "redshift:RevokeEndpointAccess";
	/** [PermissionManagement] redshift:RevokeSnapshotAccess */
	static readonly RevokeSnapshotAccess = "redshift:RevokeSnapshotAccess";
	/** [Write] redshift:RotateEncryptionKey */
	static readonly RotateEncryptionKey = "redshift:RotateEncryptionKey";
	/** [Write] redshift:UpdatePartnerStatus */
	static readonly UpdatePartnerStatus = "redshift:UpdatePartnerStatus";
	/** [List] redshift:ViewQueriesFromConsole */
	static readonly ViewQueriesFromConsole = "redshift:ViewQueriesFromConsole";
	/** [List] redshift:ViewQueriesInConsole */
	static readonly ViewQueriesInConsole = "redshift:ViewQueriesInConsole";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RedshiftActions.DescribeAccountAttributes,
		RedshiftActions.DescribeAuthenticationProfiles,
		RedshiftActions.DescribeAutonomicsDenylist,
		RedshiftActions.DescribeClusterParameterGroups,
		RedshiftActions.DescribeClusterParameters,
		RedshiftActions.DescribeClusterSecurityGroups,
		RedshiftActions.DescribeClusterSnapshots,
		RedshiftActions.DescribeClusterSubnetGroups,
		RedshiftActions.DescribeClusterVersions,
		RedshiftActions.DescribeDataShares,
		RedshiftActions.DescribeDataSharesForConsumer,
		RedshiftActions.DescribeDataSharesForProducer,
		RedshiftActions.DescribeDefaultClusterParameters,
		RedshiftActions.DescribeEndpointAccess,
		RedshiftActions.DescribeEventCategories,
		RedshiftActions.DescribeEventSubscriptions,
		RedshiftActions.DescribeHsmClientCertificates,
		RedshiftActions.DescribeHsmConfigurations,
		RedshiftActions.DescribeLoggingStatus,
		RedshiftActions.DescribeOrderableClusterOptions,
		RedshiftActions.DescribePartners,
		RedshiftActions.DescribeQuery,
		RedshiftActions.DescribeReservedNodeExchangeStatus,
		RedshiftActions.DescribeReservedNodeOfferings,
		RedshiftActions.DescribeReservedNodes,
		RedshiftActions.DescribeResize,
		RedshiftActions.DescribeSavedQueries,
		RedshiftActions.DescribeScheduledActions,
		RedshiftActions.DescribeSnapshotCopyGrants,
		RedshiftActions.DescribeSnapshotSchedules,
		RedshiftActions.DescribeStorage,
		RedshiftActions.DescribeTable,
		RedshiftActions.DescribeTableRestoreStatus,
		RedshiftActions.DescribeTags,
		RedshiftActions.DescribeUsageLimits,
		RedshiftActions.FetchResults,
		RedshiftActions.actionGetIdentityCenterAuthToken,
		RedshiftActions.actionGetReservedNodeExchangeConfigurationOptions,
		RedshiftActions.actionGetReservedNodeExchangeOfferings,
		RedshiftActions.actionGetResourcePolicy,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RedshiftActions.AcceptReservedNodeExchange,
		RedshiftActions.AddPartner,
		RedshiftActions.AssociateDataShareConsumer,
		RedshiftActions.AuthorizeClusterSecurityGroupIngress,
		RedshiftActions.AuthorizeInboundIntegration,
		RedshiftActions.BatchDeleteClusterSnapshots,
		RedshiftActions.BatchModifyClusterSnapshots,
		RedshiftActions.CancelQuery,
		RedshiftActions.CancelQuerySession,
		RedshiftActions.CancelResize,
		RedshiftActions.CopyClusterSnapshot,
		RedshiftActions.CreateAuthenticationProfile,
		RedshiftActions.CreateCluster,
		RedshiftActions.CreateClusterParameterGroup,
		RedshiftActions.CreateClusterSecurityGroup,
		RedshiftActions.CreateClusterSnapshot,
		RedshiftActions.CreateClusterSubnetGroup,
		RedshiftActions.CreateCustomDomainAssociation,
		RedshiftActions.CreateEndpointAccess,
		RedshiftActions.CreateEventSubscription,
		RedshiftActions.CreateHsmClientCertificate,
		RedshiftActions.CreateHsmConfiguration,
		RedshiftActions.CreateInboundIntegration,
		RedshiftActions.CreateIntegration,
		RedshiftActions.CreateQev2IdcApplication,
		RedshiftActions.CreateRedshiftIdcApplication,
		RedshiftActions.CreateSavedQuery,
		RedshiftActions.CreateScheduledAction,
		RedshiftActions.CreateSnapshotSchedule,
		RedshiftActions.CreateUsageLimit,
		RedshiftActions.DeleteAuthenticationProfile,
		RedshiftActions.DeleteCluster,
		RedshiftActions.DeleteClusterParameterGroup,
		RedshiftActions.DeleteClusterSecurityGroup,
		RedshiftActions.DeleteClusterSnapshot,
		RedshiftActions.DeleteClusterSubnetGroup,
		RedshiftActions.DeleteCustomDomainAssociation,
		RedshiftActions.DeleteEndpointAccess,
		RedshiftActions.DeleteEventSubscription,
		RedshiftActions.DeleteHsmClientCertificate,
		RedshiftActions.DeleteHsmConfiguration,
		RedshiftActions.DeleteIntegration,
		RedshiftActions.DeletePartner,
		RedshiftActions.DeleteQev2IdcApplication,
		RedshiftActions.DeleteRedshiftIdcApplication,
		RedshiftActions.DeleteSavedQueries,
		RedshiftActions.DeleteScheduledAction,
		RedshiftActions.DeleteSnapshotCopyGrant,
		RedshiftActions.DeleteSnapshotSchedule,
		RedshiftActions.DeleteUsageLimit,
		RedshiftActions.DeregisterNamespace,
		RedshiftActions.DisableLogging,
		RedshiftActions.DisableSnapshotCopy,
		RedshiftActions.DisassociateDataShareConsumer,
		RedshiftActions.EnableLogging,
		RedshiftActions.EnableSnapshotCopy,
		RedshiftActions.ExecuteQuery,
		RedshiftActions.FailoverPrimaryCompute,
		RedshiftActions.actionGetClusterCredentials,
		RedshiftActions.actionGetClusterCredentialsWithIAM,
		RedshiftActions.ModifyAquaConfiguration,
		RedshiftActions.ModifyAuthenticationProfile,
		RedshiftActions.ModifyAutonomicsDenylist,
		RedshiftActions.ModifyCluster,
		RedshiftActions.ModifyClusterDbRevision,
		RedshiftActions.ModifyClusterMaintenance,
		RedshiftActions.ModifyClusterParameterGroup,
		RedshiftActions.ModifyClusterSnapshot,
		RedshiftActions.ModifyClusterSnapshotSchedule,
		RedshiftActions.ModifyClusterSubnetGroup,
		RedshiftActions.ModifyCustomDomainAssociation,
		RedshiftActions.ModifyEndpointAccess,
		RedshiftActions.ModifyEventSubscription,
		RedshiftActions.ModifyIntegration,
		RedshiftActions.ModifyQev2IdcApplication,
		RedshiftActions.ModifyRedshiftIdcApplication,
		RedshiftActions.ModifySavedQuery,
		RedshiftActions.ModifyScheduledAction,
		RedshiftActions.ModifySnapshotCopyRetentionPeriod,
		RedshiftActions.ModifySnapshotSchedule,
		RedshiftActions.ModifyUsageLimit,
		RedshiftActions.PauseCluster,
		RedshiftActions.PurchaseReservedNodeOffering,
		RedshiftActions.RebootCluster,
		RedshiftActions.RegisterNamespace,
		RedshiftActions.ResetClusterParameterGroup,
		RedshiftActions.ResizeCluster,
		RedshiftActions.RestoreFromClusterSnapshot,
		RedshiftActions.RestoreTableFromClusterSnapshot,
		RedshiftActions.ResumeCluster,
		RedshiftActions.RevokeClusterSecurityGroupIngress,
		RedshiftActions.RotateEncryptionKey,
		RedshiftActions.UpdatePartnerStatus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RedshiftActions.DescribeClusterDbRevisions,
		RedshiftActions.DescribeClusterTracks,
		RedshiftActions.DescribeClusters,
		RedshiftActions.DescribeCustomDomainAssociations,
		RedshiftActions.DescribeEndpointAuthorization,
		RedshiftActions.DescribeEvents,
		RedshiftActions.DescribeInboundIntegrations,
		RedshiftActions.DescribeIntegrations,
		RedshiftActions.DescribeNodeConfigurationOptions,
		RedshiftActions.DescribeQev2IdcApplications,
		RedshiftActions.DescribeRedshiftIdcApplications,
		RedshiftActions.ListDatabases,
		RedshiftActions.ListRecommendations,
		RedshiftActions.ListSavedQueries,
		RedshiftActions.ListSchemas,
		RedshiftActions.ListTables,
		RedshiftActions.ViewQueriesFromConsole,
		RedshiftActions.ViewQueriesInConsole,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		RedshiftActions.AuthorizeDataShare,
		RedshiftActions.AuthorizeEndpointAccess,
		RedshiftActions.AuthorizeSnapshotAccess,
		RedshiftActions.CreateClusterUser,
		RedshiftActions.CreateSnapshotCopyGrant,
		RedshiftActions.DeauthorizeDataShare,
		RedshiftActions.DeleteResourcePolicy,
		RedshiftActions.JoinGroup,
		RedshiftActions.ModifyClusterIamRoles,
		RedshiftActions.PutResourcePolicy,
		RedshiftActions.RejectDataShare,
		RedshiftActions.RevokeEndpointAccess,
		RedshiftActions.RevokeSnapshotAccess,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RedshiftActions.CreateTags,
		RedshiftActions.DeleteTags,
	];
}

/**
 * Properties for building a cluster ARN.
 */
export interface RedshiftClusterArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
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
export interface RedshiftClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

/**
 * Properties for building a datashare ARN.
 */
export interface RedshiftDatashareArnProps {
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
}

/**
 * Parsed components of a datashare ARN.
 */
export interface RedshiftDatashareArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProducerClusterNamespace component. */
	readonly producerClusterNamespace: string;
	/** The DataShareName component. */
	readonly dataShareName: string;
}

/**
 * Properties for building a dbgroup ARN.
 */
export interface RedshiftDbgroupArnProps {
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
}

/**
 * Parsed components of a dbgroup ARN.
 */
export interface RedshiftDbgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The DbGroup component. */
	readonly dbGroup: string;
}

/**
 * Properties for building a dbname ARN.
 */
export interface RedshiftDbnameArnProps {
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
}

/**
 * Parsed components of a dbname ARN.
 */
export interface RedshiftDbnameArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The DbName component. */
	readonly dbName: string;
}

/**
 * Properties for building a dbuser ARN.
 */
export interface RedshiftDbuserArnProps {
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
}

/**
 * Parsed components of a dbuser ARN.
 */
export interface RedshiftDbuserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The DbUser component. */
	readonly dbUser: string;
}

/**
 * Properties for building a eventsubscription ARN.
 */
export interface RedshiftEventsubscriptionArnProps {
	/** The EventSubscriptionName component of the ARN. */
	readonly eventSubscriptionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a eventsubscription ARN.
 */
export interface RedshiftEventsubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventSubscriptionName component. */
	readonly eventSubscriptionName: string;
}

/**
 * Properties for building a hsmclientcertificate ARN.
 */
export interface RedshiftHsmclientcertificateArnProps {
	/** The HSMClientCertificateId component of the ARN. */
	readonly hsmClientCertificateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hsmclientcertificate ARN.
 */
export interface RedshiftHsmclientcertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HSMClientCertificateId component. */
	readonly hsmClientCertificateId: string;
}

/**
 * Properties for building a hsmconfiguration ARN.
 */
export interface RedshiftHsmconfigurationArnProps {
	/** The HSMConfigurationId component of the ARN. */
	readonly hsmConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hsmconfiguration ARN.
 */
export interface RedshiftHsmconfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HSMConfigurationId component. */
	readonly hsmConfigurationId: string;
}

/**
 * Properties for building a integration ARN.
 */
export interface RedshiftIntegrationArnProps {
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
export interface RedshiftIntegrationArnComponents {
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
 * Properties for building a namespace ARN.
 */
export interface RedshiftNamespaceArnProps {
	/** The ClusterNamespace component of the ARN. */
	readonly clusterNamespace: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a namespace ARN.
 */
export interface RedshiftNamespaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterNamespace component. */
	readonly clusterNamespace: string;
}

/**
 * Properties for building a parametergroup ARN.
 */
export interface RedshiftParametergroupArnProps {
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
 * Parsed components of a parametergroup ARN.
 */
export interface RedshiftParametergroupArnComponents {
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
 * Properties for building a qev2idcapplication ARN.
 */
export interface RedshiftQev2idcapplicationArnProps {
	/** The Qev2IdcApplicationId component of the ARN. */
	readonly qev2IdcApplicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a qev2idcapplication ARN.
 */
export interface RedshiftQev2idcapplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Qev2IdcApplicationId component. */
	readonly qev2IdcApplicationId: string;
}

/**
 * Properties for building a redshiftidcapplication ARN.
 */
export interface RedshiftRedshiftidcapplicationArnProps {
	/** The RedshiftIdcApplicationId component of the ARN. */
	readonly redshiftIdcApplicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a redshiftidcapplication ARN.
 */
export interface RedshiftRedshiftidcapplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RedshiftIdcApplicationId component. */
	readonly redshiftIdcApplicationId: string;
}

/**
 * Properties for building a securitygroup ARN.
 */
export interface RedshiftSecuritygroupArnProps {
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
}

/**
 * Parsed components of a securitygroup ARN.
 */
export interface RedshiftSecuritygroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SecurityGroupName component. */
	readonly securityGroupName: string;
	/** The Owner component. */
	readonly owner: string;
	/** The Ec2SecurityGroupId component. */
	readonly ec2SecurityGroupId: string;
}

/**
 * Properties for building a securitygroupingress-cidr ARN.
 */
export interface RedshiftSecuritygroupingressCidrArnProps {
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
}

/**
 * Parsed components of a securitygroupingress-cidr ARN.
 */
export interface RedshiftSecuritygroupingressCidrArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SecurityGroupName component. */
	readonly securityGroupName: string;
	/** The IpRange component. */
	readonly ipRange: string;
}

/**
 * Properties for building a securitygroupingress-ec2securitygroup ARN.
 */
export interface RedshiftSecuritygroupingressEc2securitygroupArnProps {
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
}

/**
 * Parsed components of a securitygroupingress-ec2securitygroup ARN.
 */
export interface RedshiftSecuritygroupingressEc2securitygroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SecurityGroupName component. */
	readonly securityGroupName: string;
	/** The Owner component. */
	readonly owner: string;
	/** The Ece2SecuritygroupId component. */
	readonly ece2SecuritygroupId: string;
}

/**
 * Properties for building a snapshot ARN.
 */
export interface RedshiftSnapshotArnProps {
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
}

/**
 * Parsed components of a snapshot ARN.
 */
export interface RedshiftSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The SnapshotName component. */
	readonly snapshotName: string;
}

/**
 * Properties for building a snapshotcopygrant ARN.
 */
export interface RedshiftSnapshotcopygrantArnProps {
	/** The SnapshotCopyGrantName component of the ARN. */
	readonly snapshotCopyGrantName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a snapshotcopygrant ARN.
 */
export interface RedshiftSnapshotcopygrantArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SnapshotCopyGrantName component. */
	readonly snapshotCopyGrantName: string;
}

/**
 * Properties for building a snapshotschedule ARN.
 */
export interface RedshiftSnapshotscheduleArnProps {
	/** The ScheduleIdentifier component of the ARN. */
	readonly scheduleIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a snapshotschedule ARN.
 */
export interface RedshiftSnapshotscheduleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScheduleIdentifier component. */
	readonly scheduleIdentifier: string;
}

/**
 * Properties for building a subnetgroup ARN.
 */
export interface RedshiftSubnetgroupArnProps {
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
 * Parsed components of a subnetgroup ARN.
 */
export interface RedshiftSubnetgroupArnComponents {
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
 * Properties for building a usagelimit ARN.
 */
export interface RedshiftUsagelimitArnProps {
	/** The UsageLimitId component of the ARN. */
	readonly usageLimitId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a usagelimit ARN.
 */
export interface RedshiftUsagelimitArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UsageLimitId component. */
	readonly usageLimitId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<clusterName>[^:/?]+)$/;
const DatashareArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):datashare:(?<producerClusterNamespace>[^:/?]+)\/(?<dataShareName>[^:/?]+)$/;
const DbgroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):dbgroup:(?<clusterName>[^:/?]+)\/(?<dbGroup>[^:/?]+)$/;
const DbnameArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):dbname:(?<clusterName>[^:/?]+)\/(?<dbName>[^:/?]+)$/;
const DbuserArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):dbuser:(?<clusterName>[^:/?]+)\/(?<dbUser>[^:/?]+)$/;
const EventsubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):eventsubscription:(?<eventSubscriptionName>[^:/?]+)$/;
const HsmclientcertificateArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):hsmclientcertificate:(?<hsmClientCertificateId>[^:/?]+)$/;
const HsmconfigurationArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):hsmconfiguration:(?<hsmConfigurationId>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):integration:(?<integrationIdentifier>[^:/?]+)$/;
const NamespaceArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):namespace:(?<clusterNamespace>[^:/?]+)$/;
const ParametergroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):parametergroup:(?<parameterGroupName>[^:/?]+)$/;
const Qev2idcapplicationArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):qev2idcapplication:(?<qev2IdcApplicationId>[^:/?]+)$/;
const RedshiftidcapplicationArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):redshiftidcapplication:(?<redshiftIdcApplicationId>[^:/?]+)$/;
const SecuritygroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):securitygroup:(?<securityGroupName>[^:/?]+)\/ec2securitygroup\/(?<owner>[^:/?]+)\/(?<ec2SecurityGroupId>[^:/?]+)$/;
const SecuritygroupingressCidrArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):securitygroupingress:(?<securityGroupName>[^:/?]+)\/cidrip\/(?<ipRange>[^:/?]+)$/;
const SecuritygroupingressEc2securitygroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):securitygroupingress:(?<securityGroupName>[^:/?]+)\/ec2securitygroup\/(?<owner>[^:/?]+)\/(?<ece2SecuritygroupId>[^:/?]+)$/;
const SnapshotArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):snapshot:(?<clusterName>[^:/?]+)\/(?<snapshotName>[^:/?]+)$/;
const SnapshotcopygrantArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):snapshotcopygrant:(?<snapshotCopyGrantName>[^:/?]+)$/;
const SnapshotscheduleArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):snapshotschedule:(?<scheduleIdentifier>[^:/?]+)$/;
const SubnetgroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):subnetgroup:(?<subnetGroupName>[^:/?]+)$/;
const UsagelimitArnRegex =
	/^arn:(?<partition>[^:]+):redshift:(?<region>[^:]*):(?<account>[^:]*):usagelimit:(?<usageLimitId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for redshift resources.
 */
export class RedshiftResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: RedshiftClusterArnProps): string {
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
	static parseClusterArn(arn: string): RedshiftClusterArnComponents {
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
	static datashare(props: RedshiftDatashareArnProps): string {
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
	static parseDatashareArn(arn: string): RedshiftDatashareArnComponents {
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
	static dbgroup(props: RedshiftDbgroupArnProps): string {
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
	static parseDbgroupArn(arn: string): RedshiftDbgroupArnComponents {
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
	static dbname(props: RedshiftDbnameArnProps): string {
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
	static parseDbnameArn(arn: string): RedshiftDbnameArnComponents {
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
	static dbuser(props: RedshiftDbuserArnProps): string {
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
	static parseDbuserArn(arn: string): RedshiftDbuserArnComponents {
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
	static eventsubscription(props: RedshiftEventsubscriptionArnProps): string {
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
	static parseEventsubscriptionArn(
		arn: string,
	): RedshiftEventsubscriptionArnComponents {
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
	static hsmclientcertificate(
		props: RedshiftHsmclientcertificateArnProps,
	): string {
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
	static parseHsmclientcertificateArn(
		arn: string,
	): RedshiftHsmclientcertificateArnComponents {
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
	static hsmconfiguration(props: RedshiftHsmconfigurationArnProps): string {
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
	static parseHsmconfigurationArn(
		arn: string,
	): RedshiftHsmconfigurationArnComponents {
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
	static integration(props: RedshiftIntegrationArnProps): string {
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
	static parseIntegrationArn(arn: string): RedshiftIntegrationArnComponents {
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
	static namespace(props: RedshiftNamespaceArnProps): string {
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
	static parseNamespaceArn(arn: string): RedshiftNamespaceArnComponents {
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
	static parametergroup(props: RedshiftParametergroupArnProps): string {
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
	static parseParametergroupArn(
		arn: string,
	): RedshiftParametergroupArnComponents {
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
	static qev2idcapplication(props: RedshiftQev2idcapplicationArnProps): string {
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
	static parseQev2idcapplicationArn(
		arn: string,
	): RedshiftQev2idcapplicationArnComponents {
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
	static redshiftidcapplication(
		props: RedshiftRedshiftidcapplicationArnProps,
	): string {
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
	static parseRedshiftidcapplicationArn(
		arn: string,
	): RedshiftRedshiftidcapplicationArnComponents {
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
	static securitygroup(props: RedshiftSecuritygroupArnProps): string {
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
	static parseSecuritygroupArn(
		arn: string,
	): RedshiftSecuritygroupArnComponents {
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
	static securitygroupingressCidr(
		props: RedshiftSecuritygroupingressCidrArnProps,
	): string {
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
	static parseSecuritygroupingressCidrArn(
		arn: string,
	): RedshiftSecuritygroupingressCidrArnComponents {
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
	static securitygroupingressEc2securitygroup(
		props: RedshiftSecuritygroupingressEc2securitygroupArnProps,
	): string {
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
	static parseSecuritygroupingressEc2securitygroupArn(
		arn: string,
	): RedshiftSecuritygroupingressEc2securitygroupArnComponents {
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
	static snapshot(props: RedshiftSnapshotArnProps): string {
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
	static parseSnapshotArn(arn: string): RedshiftSnapshotArnComponents {
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
	static snapshotcopygrant(props: RedshiftSnapshotcopygrantArnProps): string {
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
	static parseSnapshotcopygrantArn(
		arn: string,
	): RedshiftSnapshotcopygrantArnComponents {
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
	static snapshotschedule(props: RedshiftSnapshotscheduleArnProps): string {
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
	static parseSnapshotscheduleArn(
		arn: string,
	): RedshiftSnapshotscheduleArnComponents {
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
	static subnetgroup(props: RedshiftSubnetgroupArnProps): string {
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
	static parseSubnetgroupArn(arn: string): RedshiftSubnetgroupArnComponents {
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
	static usagelimit(props: RedshiftUsagelimitArnProps): string {
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
	static parseUsagelimitArn(arn: string): RedshiftUsagelimitArnComponents {
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
	static readonly AcceptReservedNodeExchange: string[] = [
		"redshift:AcceptReservedNodeExchange",
	];
	/** IAM actions required for the AddPartner API call. */
	static readonly AddPartner: string[] = [
		"redshift:AddPartner",
		"redshift:DeletePartner",
	];
	/** IAM actions required for the AssociateDataShareConsumer API call. */
	static readonly AssociateDataShareConsumer: string[] = [
		"redshift:AssociateDataShareConsumer",
	];
	/** IAM actions required for the AuthorizeClusterSecurityGroupIngress API call. */
	static readonly AuthorizeClusterSecurityGroupIngress: string[] = [
		"redshift:AuthorizeClusterSecurityGroupIngress",
	];
	/** IAM actions required for the AuthorizeDataShare API call. */
	static readonly AuthorizeDataShare: string[] = [
		"redshift:AuthorizeDataShare",
	];
	/** IAM actions required for the AuthorizeEndpointAccess API call. */
	static readonly AuthorizeEndpointAccess: string[] = [
		"redshift:AuthorizeEndpointAccess",
	];
	/** IAM actions required for the AuthorizeSnapshotAccess API call. */
	static readonly AuthorizeSnapshotAccess: string[] = [
		"redshift:AuthorizeSnapshotAccess",
	];
	/** IAM actions required for the BatchDeleteClusterSnapshots API call. */
	static readonly BatchDeleteClusterSnapshots: string[] = [
		"redshift:BatchDeleteClusterSnapshots",
	];
	/** IAM actions required for the BatchModifyClusterSnapshots API call. */
	static readonly BatchModifyClusterSnapshots: string[] = [
		"redshift:BatchModifyClusterSnapshots",
	];
	/** IAM actions required for the CancelResize API call. */
	static readonly CancelResize: string[] = ["redshift:CancelResize"];
	/** IAM actions required for the CopyClusterSnapshot API call. */
	static readonly CopyClusterSnapshot: string[] = [
		"redshift:CopyClusterSnapshot",
	];
	/** IAM actions required for the CreateAuthenticationProfile API call. */
	static readonly CreateAuthenticationProfile: string[] = [
		"redshift:CreateAuthenticationProfile",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"redshift:AssociateDataShareConsumer",
		"redshift:CreateCluster",
		"redshift:CreateTags",
		"iam:PassRole",
		"redshift:RegisterNamespace",
	];
	/** IAM actions required for the CreateClusterParameterGroup API call. */
	static readonly CreateClusterParameterGroup: string[] = [
		"redshift:CreateClusterParameterGroup",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateClusterSecurityGroup API call. */
	static readonly CreateClusterSecurityGroup: string[] = [
		"redshift:CreateClusterSecurityGroup",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateClusterSnapshot API call. */
	static readonly CreateClusterSnapshot: string[] = [
		"redshift:CreateClusterSnapshot",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateClusterSubnetGroup API call. */
	static readonly CreateClusterSubnetGroup: string[] = [
		"redshift:CreateClusterSubnetGroup",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateCustomDomainAssociation API call. */
	static readonly CreateCustomDomainAssociation: string[] = [
		"redshift:CreateCustomDomainAssociation",
	];
	/** IAM actions required for the CreateEndpointAccess API call. */
	static readonly CreateEndpointAccess: string[] = [
		"redshift:CreateEndpointAccess",
	];
	/** IAM actions required for the CreateEventSubscription API call. */
	static readonly CreateEventSubscription: string[] = [
		"redshift:CreateEventSubscription",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateHsmClientCertificate API call. */
	static readonly CreateHsmClientCertificate: string[] = [
		"redshift:CreateHsmClientCertificate",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateHsmConfiguration API call. */
	static readonly CreateHsmConfiguration: string[] = [
		"redshift:CreateHsmConfiguration",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CreateIntegration: string[] = [
		"redshift:CreateIntegration",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateQev2IdcApplication API call. */
	static readonly CreateQev2IdcApplication: string[] = [
		"redshift:CreateQev2IdcApplication",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateRedshiftIdcApplication API call. */
	static readonly CreateRedshiftIdcApplication: string[] = [
		"redshift:CreateRedshiftIdcApplication",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateScheduledAction API call. */
	static readonly CreateScheduledAction: string[] = [
		"redshift:CreateScheduledAction",
		"iam:PassRole",
		"redshift:PauseCluster",
		"redshift:ResizeCluster",
		"redshift:ResumeCluster",
	];
	/** IAM actions required for the CreateSnapshotCopyGrant API call. */
	static readonly CreateSnapshotCopyGrant: string[] = [
		"redshift:CreateSnapshotCopyGrant",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateSnapshotSchedule API call. */
	static readonly CreateSnapshotSchedule: string[] = [
		"redshift:CreateSnapshotSchedule",
		"redshift:CreateTags",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CreateTags: string[] = [
		"redshift:CreateTags",
		"redshift:DeleteTags",
	];
	/** IAM actions required for the CreateUsageLimit API call. */
	static readonly CreateUsageLimit: string[] = [
		"redshift:CreateTags",
		"redshift:CreateUsageLimit",
	];
	/** IAM actions required for the DeauthorizeDataShare API call. */
	static readonly DeauthorizeDataShare: string[] = [
		"redshift:DeauthorizeDataShare",
	];
	/** IAM actions required for the DeleteAuthenticationProfile API call. */
	static readonly DeleteAuthenticationProfile: string[] = [
		"redshift:DeleteAuthenticationProfile",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = [
		"redshift:CreateClusterSnapshot",
		"redshift:DeleteCluster",
	];
	/** IAM actions required for the DeleteClusterParameterGroup API call. */
	static readonly DeleteClusterParameterGroup: string[] = [
		"redshift:DeleteClusterParameterGroup",
	];
	/** IAM actions required for the DeleteClusterSecurityGroup API call. */
	static readonly DeleteClusterSecurityGroup: string[] = [
		"redshift:DeleteClusterSecurityGroup",
	];
	/** IAM actions required for the DeleteClusterSnapshot API call. */
	static readonly DeleteClusterSnapshot: string[] = [
		"redshift:DeleteClusterSnapshot",
	];
	/** IAM actions required for the DeleteClusterSubnetGroup API call. */
	static readonly DeleteClusterSubnetGroup: string[] = [
		"redshift:DeleteClusterSubnetGroup",
	];
	/** IAM actions required for the DeleteCustomDomainAssociation API call. */
	static readonly DeleteCustomDomainAssociation: string[] = [
		"redshift:DeleteCustomDomainAssociation",
	];
	/** IAM actions required for the DeleteEndpointAccess API call. */
	static readonly DeleteEndpointAccess: string[] = [
		"redshift:DeleteEndpointAccess",
	];
	/** IAM actions required for the DeleteEventSubscription API call. */
	static readonly DeleteEventSubscription: string[] = [
		"redshift:DeleteEventSubscription",
	];
	/** IAM actions required for the DeleteHsmClientCertificate API call. */
	static readonly DeleteHsmClientCertificate: string[] = [
		"redshift:DeleteHsmClientCertificate",
	];
	/** IAM actions required for the DeleteHsmConfiguration API call. */
	static readonly DeleteHsmConfiguration: string[] = [
		"redshift:DeleteHsmConfiguration",
	];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = ["redshift:DeleteIntegration"];
	/** IAM actions required for the DeletePartner API call. */
	static readonly DeletePartner: string[] = ["redshift:DeletePartner"];
	/** IAM actions required for the DeleteQev2IdcApplication API call. */
	static readonly DeleteQev2IdcApplication: string[] = [
		"redshift:DeleteQev2IdcApplication",
	];
	/** IAM actions required for the DeleteRedshiftIdcApplication API call. */
	static readonly DeleteRedshiftIdcApplication: string[] = [
		"redshift:DeleteRedshiftIdcApplication",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"redshift:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteScheduledAction API call. */
	static readonly DeleteScheduledAction: string[] = [
		"redshift:DeleteScheduledAction",
	];
	/** IAM actions required for the DeleteSnapshotCopyGrant API call. */
	static readonly DeleteSnapshotCopyGrant: string[] = [
		"redshift:DeleteSnapshotCopyGrant",
	];
	/** IAM actions required for the DeleteSnapshotSchedule API call. */
	static readonly DeleteSnapshotSchedule: string[] = [
		"redshift:DeleteSnapshotSchedule",
	];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DeleteTags: string[] = ["redshift:DeleteTags"];
	/** IAM actions required for the DeleteUsageLimit API call. */
	static readonly DeleteUsageLimit: string[] = ["redshift:DeleteUsageLimit"];
	/** IAM actions required for the DeregisterNamespace API call. */
	static readonly DeregisterNamespace: string[] = [
		"redshift:DeregisterNamespace",
	];
	/** IAM actions required for the DescribeAccountAttributes API call. */
	static readonly DescribeAccountAttributes: string[] = [
		"redshift:DescribeAccountAttributes",
	];
	/** IAM actions required for the DescribeAuthenticationProfiles API call. */
	static readonly DescribeAuthenticationProfiles: string[] = [
		"redshift:DescribeAuthenticationProfiles",
	];
	/** IAM actions required for the DescribeClusterDbRevisions API call. */
	static readonly DescribeClusterDbRevisions: string[] = [
		"redshift:DescribeClusterDbRevisions",
	];
	/** IAM actions required for the DescribeClusterParameterGroups API call. */
	static readonly DescribeClusterParameterGroups: string[] = [
		"redshift:DescribeClusterParameterGroups",
	];
	/** IAM actions required for the DescribeClusterParameters API call. */
	static readonly DescribeClusterParameters: string[] = [
		"redshift:DescribeClusterParameters",
	];
	/** IAM actions required for the DescribeClusterSecurityGroups API call. */
	static readonly DescribeClusterSecurityGroups: string[] = [
		"redshift:DescribeClusterSecurityGroups",
	];
	/** IAM actions required for the DescribeClusterSnapshots API call. */
	static readonly DescribeClusterSnapshots: string[] = [
		"redshift:DescribeClusterSnapshots",
	];
	/** IAM actions required for the DescribeClusterSubnetGroups API call. */
	static readonly DescribeClusterSubnetGroups: string[] = [
		"redshift:DescribeClusterSubnetGroups",
	];
	/** IAM actions required for the DescribeClusterTracks API call. */
	static readonly DescribeClusterTracks: string[] = [
		"redshift:DescribeClusterTracks",
	];
	/** IAM actions required for the DescribeClusterVersions API call. */
	static readonly DescribeClusterVersions: string[] = [
		"redshift:DescribeClusterVersions",
	];
	/** IAM actions required for the DescribeClusters API call. */
	static readonly DescribeClusters: string[] = ["redshift:DescribeClusters"];
	/** IAM actions required for the DescribeCustomDomainAssociations API call. */
	static readonly DescribeCustomDomainAssociations: string[] = [
		"redshift:DescribeCustomDomainAssociations",
	];
	/** IAM actions required for the DescribeDataShares API call. */
	static readonly DescribeDataShares: string[] = [
		"redshift:DescribeDataShares",
	];
	/** IAM actions required for the DescribeDataSharesForConsumer API call. */
	static readonly DescribeDataSharesForConsumer: string[] = [
		"redshift:DescribeDataSharesForConsumer",
	];
	/** IAM actions required for the DescribeDataSharesForProducer API call. */
	static readonly DescribeDataSharesForProducer: string[] = [
		"redshift:DescribeDataSharesForProducer",
	];
	/** IAM actions required for the DescribeDefaultClusterParameters API call. */
	static readonly DescribeDefaultClusterParameters: string[] = [
		"redshift:DescribeDefaultClusterParameters",
	];
	/** IAM actions required for the DescribeEndpointAccess API call. */
	static readonly DescribeEndpointAccess: string[] = [
		"redshift:DescribeEndpointAccess",
	];
	/** IAM actions required for the DescribeEndpointAuthorization API call. */
	static readonly DescribeEndpointAuthorization: string[] = [
		"redshift:DescribeEndpointAuthorization",
	];
	/** IAM actions required for the DescribeEventCategories API call. */
	static readonly DescribeEventCategories: string[] = [
		"redshift:DescribeEventCategories",
	];
	/** IAM actions required for the DescribeEventSubscriptions API call. */
	static readonly DescribeEventSubscriptions: string[] = [
		"redshift:DescribeEventSubscriptions",
	];
	/** IAM actions required for the DescribeEvents API call. */
	static readonly DescribeEvents: string[] = ["redshift:DescribeEvents"];
	/** IAM actions required for the DescribeHsmClientCertificates API call. */
	static readonly DescribeHsmClientCertificates: string[] = [
		"redshift:DescribeHsmClientCertificates",
	];
	/** IAM actions required for the DescribeHsmConfigurations API call. */
	static readonly DescribeHsmConfigurations: string[] = [
		"redshift:DescribeHsmConfigurations",
	];
	/** IAM actions required for the DescribeInboundIntegrations API call. */
	static readonly DescribeInboundIntegrations: string[] = [
		"redshift:DescribeInboundIntegrations",
	];
	/** IAM actions required for the DescribeIntegrations API call. */
	static readonly DescribeIntegrations: string[] = [
		"redshift:DescribeIntegrations",
	];
	/** IAM actions required for the DescribeLoggingStatus API call. */
	static readonly DescribeLoggingStatus: string[] = [
		"redshift:DescribeLoggingStatus",
	];
	/** IAM actions required for the DescribeNodeConfigurationOptions API call. */
	static readonly DescribeNodeConfigurationOptions: string[] = [
		"redshift:DescribeNodeConfigurationOptions",
	];
	/** IAM actions required for the DescribeOrderableClusterOptions API call. */
	static readonly DescribeOrderableClusterOptions: string[] = [
		"redshift:DescribeOrderableClusterOptions",
	];
	/** IAM actions required for the DescribePartners API call. */
	static readonly DescribePartners: string[] = ["redshift:DescribePartners"];
	/** IAM actions required for the DescribeQev2IdcApplications API call. */
	static readonly DescribeQev2IdcApplications: string[] = [
		"redshift:DescribeQev2IdcApplications",
	];
	/** IAM actions required for the DescribeRedshiftIdcApplications API call. */
	static readonly DescribeRedshiftIdcApplications: string[] = [
		"redshift:DescribeRedshiftIdcApplications",
	];
	/** IAM actions required for the DescribeReservedNodeExchangeStatus API call. */
	static readonly DescribeReservedNodeExchangeStatus: string[] = [
		"redshift:DescribeReservedNodeExchangeStatus",
	];
	/** IAM actions required for the DescribeReservedNodeOfferings API call. */
	static readonly DescribeReservedNodeOfferings: string[] = [
		"redshift:DescribeReservedNodeOfferings",
	];
	/** IAM actions required for the DescribeReservedNodes API call. */
	static readonly DescribeReservedNodes: string[] = [
		"redshift:DescribeReservedNodes",
	];
	/** IAM actions required for the DescribeResize API call. */
	static readonly DescribeResize: string[] = ["redshift:DescribeResize"];
	/** IAM actions required for the DescribeScheduledActions API call. */
	static readonly DescribeScheduledActions: string[] = [
		"redshift:DescribeScheduledActions",
	];
	/** IAM actions required for the DescribeSnapshotCopyGrants API call. */
	static readonly DescribeSnapshotCopyGrants: string[] = [
		"redshift:DescribeSnapshotCopyGrants",
	];
	/** IAM actions required for the DescribeSnapshotSchedules API call. */
	static readonly DescribeSnapshotSchedules: string[] = [
		"redshift:DescribeSnapshotSchedules",
	];
	/** IAM actions required for the DescribeStorage API call. */
	static readonly DescribeStorage: string[] = ["redshift:DescribeStorage"];
	/** IAM actions required for the DescribeTableRestoreStatus API call. */
	static readonly DescribeTableRestoreStatus: string[] = [
		"redshift:DescribeTableRestoreStatus",
	];
	/** IAM actions required for the DescribeTags API call. */
	static readonly DescribeTags: string[] = ["redshift:DescribeTags"];
	/** IAM actions required for the DescribeUsageLimits API call. */
	static readonly DescribeUsageLimits: string[] = [
		"redshift:DescribeUsageLimits",
	];
	/** IAM actions required for the DisableLogging API call. */
	static readonly DisableLogging: string[] = ["redshift:DisableLogging"];
	/** IAM actions required for the DisableSnapshotCopy API call. */
	static readonly DisableSnapshotCopy: string[] = [
		"redshift:DisableSnapshotCopy",
	];
	/** IAM actions required for the DisassociateDataShareConsumer API call. */
	static readonly DisassociateDataShareConsumer: string[] = [
		"redshift:DisassociateDataShareConsumer",
	];
	/** IAM actions required for the EnableLogging API call. */
	static readonly EnableLogging: string[] = ["redshift:EnableLogging"];
	/** IAM actions required for the EnableSnapshotCopy API call. */
	static readonly EnableSnapshotCopy: string[] = [
		"redshift:EnableSnapshotCopy",
	];
	/** IAM actions required for the FailoverPrimaryCompute API call. */
	static readonly FailoverPrimaryCompute: string[] = [
		"redshift:FailoverPrimaryCompute",
	];
	/** IAM actions required for the GetClusterCredentials API call. */
	static readonly opGetClusterCredentials: string[] = [
		"redshift:CreateClusterUser",
		"redshift:GetClusterCredentials",
		"redshift:JoinGroup",
	];
	/** IAM actions required for the GetClusterCredentialsWithIAM API call. */
	static readonly opGetClusterCredentialsWithIAM: string[] = [
		"redshift:GetClusterCredentialsWithIAM",
	];
	/** IAM actions required for the GetIdentityCenterAuthToken API call. */
	static readonly opGetIdentityCenterAuthToken: string[] = [
		"redshift:GetIdentityCenterAuthToken",
	];
	/** IAM actions required for the GetReservedNodeExchangeConfigurationOptions API call. */
	static readonly opGetReservedNodeExchangeConfigurationOptions: string[] = [
		"redshift:GetReservedNodeExchangeConfigurationOptions",
	];
	/** IAM actions required for the GetReservedNodeExchangeOfferings API call. */
	static readonly opGetReservedNodeExchangeOfferings: string[] = [
		"redshift:GetReservedNodeExchangeOfferings",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"redshift:GetResourcePolicy",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = [
		"redshift:ListRecommendations",
		"redshift:ViewQueriesInConsole",
	];
	/** IAM actions required for the ModifyAquaConfiguration API call. */
	static readonly ModifyAquaConfiguration: string[] = [
		"redshift:ModifyAquaConfiguration",
	];
	/** IAM actions required for the ModifyAuthenticationProfile API call. */
	static readonly ModifyAuthenticationProfile: string[] = [
		"redshift:ModifyAuthenticationProfile",
	];
	/** IAM actions required for the ModifyCluster API call. */
	static readonly ModifyCluster: string[] = ["redshift:ModifyCluster"];
	/** IAM actions required for the ModifyClusterDbRevision API call. */
	static readonly ModifyClusterDbRevision: string[] = [
		"redshift:ModifyClusterDbRevision",
	];
	/** IAM actions required for the ModifyClusterIamRoles API call. */
	static readonly ModifyClusterIamRoles: string[] = [
		"redshift:ModifyClusterIamRoles",
		"iam:PassRole",
	];
	/** IAM actions required for the ModifyClusterMaintenance API call. */
	static readonly ModifyClusterMaintenance: string[] = [
		"redshift:ModifyClusterMaintenance",
	];
	/** IAM actions required for the ModifyClusterParameterGroup API call. */
	static readonly ModifyClusterParameterGroup: string[] = [
		"redshift:ModifyClusterParameterGroup",
	];
	/** IAM actions required for the ModifyClusterSnapshot API call. */
	static readonly ModifyClusterSnapshot: string[] = [
		"redshift:ModifyClusterSnapshot",
	];
	/** IAM actions required for the ModifyClusterSnapshotSchedule API call. */
	static readonly ModifyClusterSnapshotSchedule: string[] = [
		"redshift:ModifyClusterSnapshotSchedule",
	];
	/** IAM actions required for the ModifyClusterSubnetGroup API call. */
	static readonly ModifyClusterSubnetGroup: string[] = [
		"redshift:ModifyClusterSubnetGroup",
	];
	/** IAM actions required for the ModifyCustomDomainAssociation API call. */
	static readonly ModifyCustomDomainAssociation: string[] = [
		"redshift:ModifyCustomDomainAssociation",
	];
	/** IAM actions required for the ModifyEndpointAccess API call. */
	static readonly ModifyEndpointAccess: string[] = [
		"redshift:ModifyEndpointAccess",
	];
	/** IAM actions required for the ModifyEventSubscription API call. */
	static readonly ModifyEventSubscription: string[] = [
		"redshift:ModifyEventSubscription",
	];
	/** IAM actions required for the ModifyIntegration API call. */
	static readonly ModifyIntegration: string[] = ["redshift:ModifyIntegration"];
	/** IAM actions required for the ModifyLakehouseConfiguration API call. */
	static readonly ModifyLakehouseConfiguration: string[] = [
		"redshift:AssociateDataShareConsumer",
		"redshift:DeregisterNamespace",
		"iam:PassRole",
		"redshift:RegisterNamespace",
	];
	/** IAM actions required for the ModifyQev2IdcApplication API call. */
	static readonly ModifyQev2IdcApplication: string[] = [
		"redshift:ModifyQev2IdcApplication",
	];
	/** IAM actions required for the ModifyRedshiftIdcApplication API call. */
	static readonly ModifyRedshiftIdcApplication: string[] = [
		"redshift:ModifyRedshiftIdcApplication",
	];
	/** IAM actions required for the ModifyScheduledAction API call. */
	static readonly ModifyScheduledAction: string[] = [
		"redshift:ModifyScheduledAction",
		"iam:PassRole",
		"redshift:PauseCluster",
		"redshift:ResizeCluster",
		"redshift:ResumeCluster",
	];
	/** IAM actions required for the ModifySnapshotCopyRetentionPeriod API call. */
	static readonly ModifySnapshotCopyRetentionPeriod: string[] = [
		"redshift:ModifySnapshotCopyRetentionPeriod",
	];
	/** IAM actions required for the ModifySnapshotSchedule API call. */
	static readonly ModifySnapshotSchedule: string[] = [
		"redshift:ModifySnapshotSchedule",
	];
	/** IAM actions required for the ModifyUsageLimit API call. */
	static readonly ModifyUsageLimit: string[] = ["redshift:ModifyUsageLimit"];
	/** IAM actions required for the PauseCluster API call. */
	static readonly PauseCluster: string[] = ["redshift:PauseCluster"];
	/** IAM actions required for the PurchaseReservedNodeOffering API call. */
	static readonly PurchaseReservedNodeOffering: string[] = [
		"redshift:PurchaseReservedNodeOffering",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["redshift:PutResourcePolicy"];
	/** IAM actions required for the RebootCluster API call. */
	static readonly RebootCluster: string[] = ["redshift:RebootCluster"];
	/** IAM actions required for the RegisterNamespace API call. */
	static readonly RegisterNamespace: string[] = ["redshift:RegisterNamespace"];
	/** IAM actions required for the RejectDataShare API call. */
	static readonly RejectDataShare: string[] = ["redshift:RejectDataShare"];
	/** IAM actions required for the ResetClusterParameterGroup API call. */
	static readonly ResetClusterParameterGroup: string[] = [
		"redshift:ResetClusterParameterGroup",
	];
	/** IAM actions required for the ResizeCluster API call. */
	static readonly ResizeCluster: string[] = ["redshift:ResizeCluster"];
	/** IAM actions required for the RestoreFromClusterSnapshot API call. */
	static readonly RestoreFromClusterSnapshot: string[] = [
		"redshift:AssociateDataShareConsumer",
		"iam:PassRole",
		"redshift:RegisterNamespace",
		"redshift:RestoreFromClusterSnapshot",
	];
	/** IAM actions required for the RestoreTableFromClusterSnapshot API call. */
	static readonly RestoreTableFromClusterSnapshot: string[] = [
		"redshift:RestoreTableFromClusterSnapshot",
	];
	/** IAM actions required for the ResumeCluster API call. */
	static readonly ResumeCluster: string[] = ["redshift:ResumeCluster"];
	/** IAM actions required for the RevokeClusterSecurityGroupIngress API call. */
	static readonly RevokeClusterSecurityGroupIngress: string[] = [
		"redshift:RevokeClusterSecurityGroupIngress",
	];
	/** IAM actions required for the RevokeEndpointAccess API call. */
	static readonly RevokeEndpointAccess: string[] = [
		"redshift:RevokeEndpointAccess",
	];
	/** IAM actions required for the RevokeSnapshotAccess API call. */
	static readonly RevokeSnapshotAccess: string[] = [
		"redshift:RevokeSnapshotAccess",
	];
	/** IAM actions required for the RotateEncryptionKey API call. */
	static readonly RotateEncryptionKey: string[] = [
		"redshift:RotateEncryptionKey",
	];
	/** IAM actions required for the UpdatePartnerStatus API call. */
	static readonly UpdatePartnerStatus: string[] = [
		"redshift:UpdatePartnerStatus",
	];
}

/**
 * Condition key constants and builders for redshift.
 */
export class RedshiftConditions {
	/** Condition keys applicable to the AssociateDataShareConsumer action. */
	static readonly AssociateDataShareConsumerConditionKeys: string[] = [
		"redshift:AllowWrites",
		"redshift:ConsumerArn",
	];
	/** Condition keys applicable to the AuthorizeDataShare action. */
	static readonly AuthorizeDataShareConditionKeys: string[] = [
		"redshift:AllowWrites",
		"redshift:ConsumerIdentifier",
	];
	/** Condition keys applicable to the CopyClusterSnapshot action. */
	static readonly CopyClusterSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterParameterGroup action. */
	static readonly CreateClusterParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSecurityGroup action. */
	static readonly CreateClusterSecurityGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSnapshot action. */
	static readonly CreateClusterSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterSubnetGroup action. */
	static readonly CreateClusterSubnetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClusterUser action. */
	static readonly CreateClusterUserConditionKeys: string[] = [
		"redshift:DbUser",
	];
	/** Condition keys applicable to the CreateEventSubscription action. */
	static readonly CreateEventSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHsmClientCertificate action. */
	static readonly CreateHsmClientCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHsmConfiguration action. */
	static readonly CreateHsmConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CreateIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"redshift:IntegrationSourceArn",
		"redshift:IntegrationTargetArn",
	];
	/** Condition keys applicable to the CreateSnapshotCopyGrant action. */
	static readonly CreateSnapshotCopyGrantConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshotSchedule action. */
	static readonly CreateSnapshotScheduleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CreateTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUsageLimit action. */
	static readonly CreateUsageLimitConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeauthorizeDataShare action. */
	static readonly DeauthorizeDataShareConditionKeys: string[] = [
		"redshift:ConsumerIdentifier",
	];
	/** Condition keys applicable to the DeleteIntegration action. */
	static readonly DeleteIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DeleteTagsConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the DescribeInboundIntegrations action. */
	static readonly DescribeInboundIntegrationsConditionKeys: string[] = [
		"redshift:InboundIntegrationArn",
	];
	/** Condition keys applicable to the DescribeIntegrations action. */
	static readonly DescribeIntegrationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateDataShareConsumer action. */
	static readonly DisassociateDataShareConsumerConditionKeys: string[] = [
		"redshift:ConsumerArn",
	];
	/** Condition keys applicable to the GetClusterCredentials action. */
	static readonly actionGetClusterCredentialsConditionKeys: string[] = [
		"redshift:DbName",
		"redshift:DbUser",
		"redshift:DurationSeconds",
	];
	/** Condition keys applicable to the GetClusterCredentialsWithIAM action. */
	static readonly actionGetClusterCredentialsWithIAMConditionKeys: string[] = [
		"redshift:DbName",
		"redshift:DurationSeconds",
	];
	/** Condition keys applicable to the ModifyIntegration action. */
	static readonly ModifyIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreFromClusterSnapshot action. */
	static readonly RestoreFromClusterSnapshotConditionKeys: string[] = [
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
