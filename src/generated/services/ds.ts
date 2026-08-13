// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ds.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ds service.
 */
export class DsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ds";

	/** [Write] ds:AcceptSharedDirectory */
	static readonly ACCEPT_SHARED_DIRECTORY = "ds:AcceptSharedDirectory";
	/** [PermissionManagement] ds:AccessDSData */
	static readonly ACCESS_DS_DATA = "ds:AccessDSData";
	/** [Write] ds:AddIpRoutes */
	static readonly ADD_IP_ROUTES = "ds:AddIpRoutes";
	/** [Write] ds:AddRegion */
	static readonly ADD_REGION = "ds:AddRegion";
	/** [Tagging] ds:AddTagsToResource */
	static readonly ADD_TAGS_TO_RESOURCE = "ds:AddTagsToResource";
	/** [Write] ds:AuthorizeApplication */
	static readonly AUTHORIZE_APPLICATION = "ds:AuthorizeApplication";
	/** [Write] ds:CancelSchemaExtension */
	static readonly CANCEL_SCHEMA_EXTENSION = "ds:CancelSchemaExtension";
	/** [Read] ds:CheckAlias */
	static readonly CHECK_ALIAS = "ds:CheckAlias";
	/** [Write] ds:ConnectDirectory */
	static readonly CONNECT_DIRECTORY = "ds:ConnectDirectory";
	/** [Write] ds:CreateAlias */
	static readonly CREATE_ALIAS = "ds:CreateAlias";
	/** [Write] ds:CreateComputer */
	static readonly CREATE_COMPUTER = "ds:CreateComputer";
	/** [Write] ds:CreateConditionalForwarder */
	static readonly CREATE_CONDITIONAL_FORWARDER =
		"ds:CreateConditionalForwarder";
	/** [Write] ds:CreateDirectory */
	static readonly CREATE_DIRECTORY = "ds:CreateDirectory";
	/** [Write] ds:CreateHybridAD */
	static readonly CREATE_HYBRID_AD = "ds:CreateHybridAD";
	/** [Write] ds:CreateIdentityPoolDirectory */
	static readonly CREATE_IDENTITY_POOL_DIRECTORY =
		"ds:CreateIdentityPoolDirectory";
	/** [Write] ds:CreateLogSubscription */
	static readonly CREATE_LOG_SUBSCRIPTION = "ds:CreateLogSubscription";
	/** [Write] ds:CreateMicrosoftAD */
	static readonly CREATE_MICROSOFT_AD = "ds:CreateMicrosoftAD";
	/** [Write] ds:CreateSnapshot */
	static readonly CREATE_SNAPSHOT = "ds:CreateSnapshot";
	/** [Write] ds:CreateTrust */
	static readonly CREATE_TRUST = "ds:CreateTrust";
	/** [Write] ds:DeleteADAssessment */
	static readonly DELETE_AD_ASSESSMENT = "ds:DeleteADAssessment";
	/** [Write] ds:DeleteConditionalForwarder */
	static readonly DELETE_CONDITIONAL_FORWARDER =
		"ds:DeleteConditionalForwarder";
	/** [Write] ds:DeleteDirectory */
	static readonly DELETE_DIRECTORY = "ds:DeleteDirectory";
	/** [Write] ds:DeleteLogSubscription */
	static readonly DELETE_LOG_SUBSCRIPTION = "ds:DeleteLogSubscription";
	/** [Write] ds:DeleteSnapshot */
	static readonly DELETE_SNAPSHOT = "ds:DeleteSnapshot";
	/** [Write] ds:DeleteTrust */
	static readonly DELETE_TRUST = "ds:DeleteTrust";
	/** [Write] ds:DeregisterCertificate */
	static readonly DEREGISTER_CERTIFICATE = "ds:DeregisterCertificate";
	/** [Write] ds:DeregisterEventTopic */
	static readonly DEREGISTER_EVENT_TOPIC = "ds:DeregisterEventTopic";
	/** [Read] ds:DescribeADAssessment */
	static readonly DESCRIBE_AD_ASSESSMENT = "ds:DescribeADAssessment";
	/** [Read] ds:DescribeCAEnrollmentPolicy */
	static readonly DESCRIBE_CA_ENROLLMENT_POLICY =
		"ds:DescribeCAEnrollmentPolicy";
	/** [Read] ds:DescribeCertificate */
	static readonly DESCRIBE_CERTIFICATE = "ds:DescribeCertificate";
	/** [Read] ds:DescribeClientAuthenticationSettings */
	static readonly DESCRIBE_CLIENT_AUTHENTICATION_SETTINGS =
		"ds:DescribeClientAuthenticationSettings";
	/** [Read] ds:DescribeConditionalForwarders */
	static readonly DESCRIBE_CONDITIONAL_FORWARDERS =
		"ds:DescribeConditionalForwarders";
	/** [List] ds:DescribeDirectories */
	static readonly DESCRIBE_DIRECTORIES = "ds:DescribeDirectories";
	/** [Read] ds:DescribeDirectoryDataAccess */
	static readonly DESCRIBE_DIRECTORY_DATA_ACCESS =
		"ds:DescribeDirectoryDataAccess";
	/** [Read] ds:DescribeDomainControllers */
	static readonly DESCRIBE_DOMAIN_CONTROLLERS = "ds:DescribeDomainControllers";
	/** [Read] ds:DescribeEventTopics */
	static readonly DESCRIBE_EVENT_TOPICS = "ds:DescribeEventTopics";
	/** [Read] ds:DescribeHybridADUpdate */
	static readonly DESCRIBE_HYBRID_AD_UPDATE = "ds:DescribeHybridADUpdate";
	/** [Read] ds:DescribeLDAPSSettings */
	static readonly DESCRIBE_LDAPS_SETTINGS = "ds:DescribeLDAPSSettings";
	/** [Read] ds:DescribeRegions */
	static readonly DESCRIBE_REGIONS = "ds:DescribeRegions";
	/** [Read] ds:DescribeSettings */
	static readonly DESCRIBE_SETTINGS = "ds:DescribeSettings";
	/** [Read] ds:DescribeSharedDirectories */
	static readonly DESCRIBE_SHARED_DIRECTORIES = "ds:DescribeSharedDirectories";
	/** [Read] ds:DescribeSnapshots */
	static readonly DESCRIBE_SNAPSHOTS = "ds:DescribeSnapshots";
	/** [Read] ds:DescribeTrusts */
	static readonly DESCRIBE_TRUSTS = "ds:DescribeTrusts";
	/** [Read] ds:DescribeUpdateDirectory */
	static readonly DESCRIBE_UPDATE_DIRECTORY = "ds:DescribeUpdateDirectory";
	/** [Write] ds:DisableCAEnrollmentPolicy */
	static readonly DISABLE_CA_ENROLLMENT_POLICY = "ds:DisableCAEnrollmentPolicy";
	/** [Write] ds:DisableClientAuthentication */
	static readonly DISABLE_CLIENT_AUTHENTICATION =
		"ds:DisableClientAuthentication";
	/** [Write] ds:DisableDirectoryDataAccess */
	static readonly DISABLE_DIRECTORY_DATA_ACCESS =
		"ds:DisableDirectoryDataAccess";
	/** [Write] ds:DisableLDAPS */
	static readonly DISABLE_LDAPS = "ds:DisableLDAPS";
	/** [Write] ds:DisableRadius */
	static readonly DISABLE_RADIUS = "ds:DisableRadius";
	/** [Write] ds:DisableRoleAccess */
	static readonly DISABLE_ROLE_ACCESS = "ds:DisableRoleAccess";
	/** [Write] ds:DisableSso */
	static readonly DISABLE_SSO = "ds:DisableSso";
	/** [Write] ds:EnableCAEnrollmentPolicy */
	static readonly ENABLE_CA_ENROLLMENT_POLICY = "ds:EnableCAEnrollmentPolicy";
	/** [Write] ds:EnableClientAuthentication */
	static readonly ENABLE_CLIENT_AUTHENTICATION =
		"ds:EnableClientAuthentication";
	/** [Write] ds:EnableDirectoryDataAccess */
	static readonly ENABLE_DIRECTORY_DATA_ACCESS = "ds:EnableDirectoryDataAccess";
	/** [Write] ds:EnableLDAPS */
	static readonly ENABLE_LDAPS = "ds:EnableLDAPS";
	/** [Write] ds:EnableRadius */
	static readonly ENABLE_RADIUS = "ds:EnableRadius";
	/** [Write] ds:EnableRoleAccess */
	static readonly ENABLE_ROLE_ACCESS = "ds:EnableRoleAccess";
	/** [Write] ds:EnableSso */
	static readonly ENABLE_SSO = "ds:EnableSso";
	/** [Read] ds:GetAuthorizedApplicationDetails */
	static readonly GET_AUTHORIZED_APPLICATION_DETAILS =
		"ds:GetAuthorizedApplicationDetails";
	/** [Read] ds:GetDirectoryLimits */
	static readonly GET_DIRECTORY_LIMITS = "ds:GetDirectoryLimits";
	/** [Read] ds:GetSnapshotLimits */
	static readonly GET_SNAPSHOT_LIMITS = "ds:GetSnapshotLimits";
	/** [List] ds:ListADAssessments */
	static readonly LIST_AD_ASSESSMENTS = "ds:ListADAssessments";
	/** [Read] ds:ListAuthorizedApplications */
	static readonly LIST_AUTHORIZED_APPLICATIONS =
		"ds:ListAuthorizedApplications";
	/** [List] ds:ListCertificates */
	static readonly LIST_CERTIFICATES = "ds:ListCertificates";
	/** [Read] ds:ListIpRoutes */
	static readonly LIST_IP_ROUTES = "ds:ListIpRoutes";
	/** [Read] ds:ListLogSubscriptions */
	static readonly LIST_LOG_SUBSCRIPTIONS = "ds:ListLogSubscriptions";
	/** [List] ds:ListSchemaExtensions */
	static readonly LIST_SCHEMA_EXTENSIONS = "ds:ListSchemaExtensions";
	/** [Read] ds:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ds:ListTagsForResource";
	/** [Write] ds:RegisterCertificate */
	static readonly REGISTER_CERTIFICATE = "ds:RegisterCertificate";
	/** [Write] ds:RegisterEventTopic */
	static readonly REGISTER_EVENT_TOPIC = "ds:RegisterEventTopic";
	/** [Write] ds:RejectSharedDirectory */
	static readonly REJECT_SHARED_DIRECTORY = "ds:RejectSharedDirectory";
	/** [Write] ds:RemoveIpRoutes */
	static readonly REMOVE_IP_ROUTES = "ds:RemoveIpRoutes";
	/** [Write] ds:RemoveRegion */
	static readonly REMOVE_REGION = "ds:RemoveRegion";
	/** [Tagging] ds:RemoveTagsFromResource */
	static readonly REMOVE_TAGS_FROM_RESOURCE = "ds:RemoveTagsFromResource";
	/** [Write] ds:ResetUserPassword */
	static readonly RESET_USER_PASSWORD = "ds:ResetUserPassword";
	/** [Write] ds:RestoreFromSnapshot */
	static readonly RESTORE_FROM_SNAPSHOT = "ds:RestoreFromSnapshot";
	/** [Write] ds:ShareDirectory */
	static readonly SHARE_DIRECTORY = "ds:ShareDirectory";
	/** [Write] ds:StartADAssessment */
	static readonly START_AD_ASSESSMENT = "ds:StartADAssessment";
	/** [Write] ds:StartSchemaExtension */
	static readonly START_SCHEMA_EXTENSION = "ds:StartSchemaExtension";
	/** [Write] ds:UnauthorizeApplication */
	static readonly UNAUTHORIZE_APPLICATION = "ds:UnauthorizeApplication";
	/** [Write] ds:UnshareDirectory */
	static readonly UNSHARE_DIRECTORY = "ds:UnshareDirectory";
	/** [Write] ds:UpdateAuthorizedApplication */
	static readonly UPDATE_AUTHORIZED_APPLICATION =
		"ds:UpdateAuthorizedApplication";
	/** [Write] ds:UpdateConditionalForwarder */
	static readonly UPDATE_CONDITIONAL_FORWARDER =
		"ds:UpdateConditionalForwarder";
	/** [Write] ds:UpdateDirectory */
	static readonly UPDATE_DIRECTORY = "ds:UpdateDirectory";
	/** [Write] ds:UpdateDirectorySetup */
	static readonly UPDATE_DIRECTORY_SETUP = "ds:UpdateDirectorySetup";
	/** [Write] ds:UpdateHybridAD */
	static readonly UPDATE_HYBRID_AD = "ds:UpdateHybridAD";
	/** [Write] ds:UpdateNumberOfDomainControllers */
	static readonly UPDATE_NUMBER_OF_DOMAIN_CONTROLLERS =
		"ds:UpdateNumberOfDomainControllers";
	/** [Write] ds:UpdateRadius */
	static readonly UPDATE_RADIUS = "ds:UpdateRadius";
	/** [Write] ds:UpdateSettings */
	static readonly UPDATE_SETTINGS = "ds:UpdateSettings";
	/** [Write] ds:UpdateTrust */
	static readonly UPDATE_TRUST = "ds:UpdateTrust";
	/** [Read] ds:VerifyTrust */
	static readonly VERIFY_TRUST = "ds:VerifyTrust";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DsActions.CHECK_ALIAS,
		DsActions.DESCRIBE_AD_ASSESSMENT,
		DsActions.DESCRIBE_CA_ENROLLMENT_POLICY,
		DsActions.DESCRIBE_CERTIFICATE,
		DsActions.DESCRIBE_CLIENT_AUTHENTICATION_SETTINGS,
		DsActions.DESCRIBE_CONDITIONAL_FORWARDERS,
		DsActions.DESCRIBE_DIRECTORY_DATA_ACCESS,
		DsActions.DESCRIBE_DOMAIN_CONTROLLERS,
		DsActions.DESCRIBE_EVENT_TOPICS,
		DsActions.DESCRIBE_HYBRID_AD_UPDATE,
		DsActions.DESCRIBE_LDAPS_SETTINGS,
		DsActions.DESCRIBE_REGIONS,
		DsActions.DESCRIBE_SETTINGS,
		DsActions.DESCRIBE_SHARED_DIRECTORIES,
		DsActions.DESCRIBE_SNAPSHOTS,
		DsActions.DESCRIBE_TRUSTS,
		DsActions.DESCRIBE_UPDATE_DIRECTORY,
		DsActions.GET_AUTHORIZED_APPLICATION_DETAILS,
		DsActions.GET_DIRECTORY_LIMITS,
		DsActions.GET_SNAPSHOT_LIMITS,
		DsActions.LIST_AUTHORIZED_APPLICATIONS,
		DsActions.LIST_IP_ROUTES,
		DsActions.LIST_LOG_SUBSCRIPTIONS,
		DsActions.LIST_TAGS_FOR_RESOURCE,
		DsActions.VERIFY_TRUST,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DsActions.ACCEPT_SHARED_DIRECTORY,
		DsActions.ADD_IP_ROUTES,
		DsActions.ADD_REGION,
		DsActions.AUTHORIZE_APPLICATION,
		DsActions.CANCEL_SCHEMA_EXTENSION,
		DsActions.CONNECT_DIRECTORY,
		DsActions.CREATE_ALIAS,
		DsActions.CREATE_COMPUTER,
		DsActions.CREATE_CONDITIONAL_FORWARDER,
		DsActions.CREATE_DIRECTORY,
		DsActions.CREATE_HYBRID_AD,
		DsActions.CREATE_IDENTITY_POOL_DIRECTORY,
		DsActions.CREATE_LOG_SUBSCRIPTION,
		DsActions.CREATE_MICROSOFT_AD,
		DsActions.CREATE_SNAPSHOT,
		DsActions.CREATE_TRUST,
		DsActions.DELETE_AD_ASSESSMENT,
		DsActions.DELETE_CONDITIONAL_FORWARDER,
		DsActions.DELETE_DIRECTORY,
		DsActions.DELETE_LOG_SUBSCRIPTION,
		DsActions.DELETE_SNAPSHOT,
		DsActions.DELETE_TRUST,
		DsActions.DEREGISTER_CERTIFICATE,
		DsActions.DEREGISTER_EVENT_TOPIC,
		DsActions.DISABLE_CA_ENROLLMENT_POLICY,
		DsActions.DISABLE_CLIENT_AUTHENTICATION,
		DsActions.DISABLE_DIRECTORY_DATA_ACCESS,
		DsActions.DISABLE_LDAPS,
		DsActions.DISABLE_RADIUS,
		DsActions.DISABLE_ROLE_ACCESS,
		DsActions.DISABLE_SSO,
		DsActions.ENABLE_CA_ENROLLMENT_POLICY,
		DsActions.ENABLE_CLIENT_AUTHENTICATION,
		DsActions.ENABLE_DIRECTORY_DATA_ACCESS,
		DsActions.ENABLE_LDAPS,
		DsActions.ENABLE_RADIUS,
		DsActions.ENABLE_ROLE_ACCESS,
		DsActions.ENABLE_SSO,
		DsActions.REGISTER_CERTIFICATE,
		DsActions.REGISTER_EVENT_TOPIC,
		DsActions.REJECT_SHARED_DIRECTORY,
		DsActions.REMOVE_IP_ROUTES,
		DsActions.REMOVE_REGION,
		DsActions.RESET_USER_PASSWORD,
		DsActions.RESTORE_FROM_SNAPSHOT,
		DsActions.SHARE_DIRECTORY,
		DsActions.START_AD_ASSESSMENT,
		DsActions.START_SCHEMA_EXTENSION,
		DsActions.UNAUTHORIZE_APPLICATION,
		DsActions.UNSHARE_DIRECTORY,
		DsActions.UPDATE_AUTHORIZED_APPLICATION,
		DsActions.UPDATE_CONDITIONAL_FORWARDER,
		DsActions.UPDATE_DIRECTORY,
		DsActions.UPDATE_DIRECTORY_SETUP,
		DsActions.UPDATE_HYBRID_AD,
		DsActions.UPDATE_NUMBER_OF_DOMAIN_CONTROLLERS,
		DsActions.UPDATE_RADIUS,
		DsActions.UPDATE_SETTINGS,
		DsActions.UPDATE_TRUST,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DsActions.DESCRIBE_DIRECTORIES,
		DsActions.LIST_AD_ASSESSMENTS,
		DsActions.LIST_CERTIFICATES,
		DsActions.LIST_SCHEMA_EXTENSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		DsActions.ACCESS_DS_DATA,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DsActions.ADD_TAGS_TO_RESOURCE,
		DsActions.REMOVE_TAGS_FROM_RESOURCE,
	];
}

const DirectoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ds:(?<region>[^:]*):(?<account>[^:]*):directory/(?<directoryId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ds resources.
 */
export class DsResources {
	/**
	 * Builds an ARN for the directory resource.
	 */
	static directory(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ds:${props.region ?? "*"}:${props.account ?? "*"}:directory/${props.directoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the directory resource.
	 */
	static isValidDirectoryArn(arn: string): boolean {
		return DirectoryArnRegex.test(arn);
	}

	/**
	 * Parses a directory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDirectoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		directoryId: string;
	} {
		const match = DirectoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid directory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ds.
 */
export class DsOperations {
	/** IAM actions required for the AcceptSharedDirectory API call. */
	static readonly ACCEPT_SHARED_DIRECTORY: string[] = [
		"ds:AcceptSharedDirectory",
	];
	/** IAM actions required for the AddIpRoutes API call. */
	static readonly ADD_IP_ROUTES: string[] = ["ds:AddIpRoutes"];
	/** IAM actions required for the AddRegion API call. */
	static readonly ADD_REGION: string[] = ["ds:AddRegion"];
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly ADD_TAGS_TO_RESOURCE: string[] = ["ds:AddTagsToResource"];
	/** IAM actions required for the CancelSchemaExtension API call. */
	static readonly CANCEL_SCHEMA_EXTENSION: string[] = [
		"ds:CancelSchemaExtension",
	];
	/** IAM actions required for the ConnectDirectory API call. */
	static readonly CONNECT_DIRECTORY: string[] = [
		"ds:AddTagsToResource",
		"ds:ConnectDirectory",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CREATE_ALIAS: string[] = ["ds:CreateAlias"];
	/** IAM actions required for the CreateComputer API call. */
	static readonly CREATE_COMPUTER: string[] = ["ds:CreateComputer"];
	/** IAM actions required for the CreateConditionalForwarder API call. */
	static readonly CREATE_CONDITIONAL_FORWARDER: string[] = [
		"ds:CreateConditionalForwarder",
	];
	/** IAM actions required for the CreateDirectory API call. */
	static readonly CREATE_DIRECTORY: string[] = [
		"ds:AddTagsToResource",
		"ds:CreateDirectory",
	];
	/** IAM actions required for the CreateHybridAD API call. */
	static readonly CREATE_HYBRID_AD: string[] = [
		"ds:AddTagsToResource",
		"ds:CreateHybridAD",
	];
	/** IAM actions required for the CreateLogSubscription API call. */
	static readonly CREATE_LOG_SUBSCRIPTION: string[] = [
		"ds:CreateLogSubscription",
	];
	/** IAM actions required for the CreateMicrosoftAD API call. */
	static readonly CREATE_MICROSOFT_AD: string[] = [
		"ds:AddTagsToResource",
		"ds:CreateMicrosoftAD",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CREATE_SNAPSHOT: string[] = ["ds:CreateSnapshot"];
	/** IAM actions required for the CreateTrust API call. */
	static readonly CREATE_TRUST: string[] = ["ds:CreateTrust"];
	/** IAM actions required for the DeleteADAssessment API call. */
	static readonly DELETE_AD_ASSESSMENT: string[] = ["ds:DeleteADAssessment"];
	/** IAM actions required for the DeleteConditionalForwarder API call. */
	static readonly DELETE_CONDITIONAL_FORWARDER: string[] = [
		"ds:DeleteConditionalForwarder",
	];
	/** IAM actions required for the DeleteDirectory API call. */
	static readonly DELETE_DIRECTORY: string[] = ["ds:DeleteDirectory"];
	/** IAM actions required for the DeleteLogSubscription API call. */
	static readonly DELETE_LOG_SUBSCRIPTION: string[] = [
		"ds:DeleteLogSubscription",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DELETE_SNAPSHOT: string[] = ["ds:DeleteSnapshot"];
	/** IAM actions required for the DeleteTrust API call. */
	static readonly DELETE_TRUST: string[] = ["ds:DeleteTrust"];
	/** IAM actions required for the DeregisterCertificate API call. */
	static readonly DEREGISTER_CERTIFICATE: string[] = [
		"ds:DeregisterCertificate",
	];
	/** IAM actions required for the DeregisterEventTopic API call. */
	static readonly DEREGISTER_EVENT_TOPIC: string[] = [
		"ds:DeregisterEventTopic",
	];
	/** IAM actions required for the DescribeADAssessment API call. */
	static readonly DESCRIBE_AD_ASSESSMENT: string[] = [
		"ds:DescribeADAssessment",
	];
	/** IAM actions required for the DescribeCAEnrollmentPolicy API call. */
	static readonly DESCRIBE_CA_ENROLLMENT_POLICY: string[] = [
		"ds:DescribeCAEnrollmentPolicy",
	];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DESCRIBE_CERTIFICATE: string[] = ["ds:DescribeCertificate"];
	/** IAM actions required for the DescribeClientAuthenticationSettings API call. */
	static readonly DESCRIBE_CLIENT_AUTHENTICATION_SETTINGS: string[] = [
		"ds:DescribeClientAuthenticationSettings",
	];
	/** IAM actions required for the DescribeConditionalForwarders API call. */
	static readonly DESCRIBE_CONDITIONAL_FORWARDERS: string[] = [
		"ds:DescribeConditionalForwarders",
	];
	/** IAM actions required for the DescribeDirectories API call. */
	static readonly DESCRIBE_DIRECTORIES: string[] = ["ds:DescribeDirectories"];
	/** IAM actions required for the DescribeDirectoryDataAccess API call. */
	static readonly DESCRIBE_DIRECTORY_DATA_ACCESS: string[] = [
		"ds:DescribeDirectoryDataAccess",
	];
	/** IAM actions required for the DescribeDomainControllers API call. */
	static readonly DESCRIBE_DOMAIN_CONTROLLERS: string[] = [
		"ds:DescribeDomainControllers",
	];
	/** IAM actions required for the DescribeEventTopics API call. */
	static readonly DESCRIBE_EVENT_TOPICS: string[] = ["ds:DescribeEventTopics"];
	/** IAM actions required for the DescribeHybridADUpdate API call. */
	static readonly DESCRIBE_HYBRID_AD_UPDATE: string[] = [
		"ds:DescribeHybridADUpdate",
	];
	/** IAM actions required for the DescribeLDAPSSettings API call. */
	static readonly DESCRIBE_LDAPS_SETTINGS: string[] = [
		"ds:DescribeLDAPSSettings",
	];
	/** IAM actions required for the DescribeRegions API call. */
	static readonly DESCRIBE_REGIONS: string[] = ["ds:DescribeRegions"];
	/** IAM actions required for the DescribeSettings API call. */
	static readonly DESCRIBE_SETTINGS: string[] = ["ds:DescribeSettings"];
	/** IAM actions required for the DescribeSharedDirectories API call. */
	static readonly DESCRIBE_SHARED_DIRECTORIES: string[] = [
		"ds:DescribeSharedDirectories",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DESCRIBE_SNAPSHOTS: string[] = ["ds:DescribeSnapshots"];
	/** IAM actions required for the DescribeTrusts API call. */
	static readonly DESCRIBE_TRUSTS: string[] = ["ds:DescribeTrusts"];
	/** IAM actions required for the DescribeUpdateDirectory API call. */
	static readonly DESCRIBE_UPDATE_DIRECTORY: string[] = [
		"ds:DescribeUpdateDirectory",
	];
	/** IAM actions required for the DisableCAEnrollmentPolicy API call. */
	static readonly DISABLE_CA_ENROLLMENT_POLICY: string[] = [
		"ds:DisableCAEnrollmentPolicy",
	];
	/** IAM actions required for the DisableClientAuthentication API call. */
	static readonly DISABLE_CLIENT_AUTHENTICATION: string[] = [
		"ds:DisableClientAuthentication",
	];
	/** IAM actions required for the DisableDirectoryDataAccess API call. */
	static readonly DISABLE_DIRECTORY_DATA_ACCESS: string[] = [
		"ds:DisableDirectoryDataAccess",
	];
	/** IAM actions required for the DisableLDAPS API call. */
	static readonly DISABLE_LDAPS: string[] = ["ds:DisableLDAPS"];
	/** IAM actions required for the DisableRadius API call. */
	static readonly DISABLE_RADIUS: string[] = ["ds:DisableRadius"];
	/** IAM actions required for the DisableSso API call. */
	static readonly DISABLE_SSO: string[] = ["ds:DisableSso"];
	/** IAM actions required for the EnableCAEnrollmentPolicy API call. */
	static readonly ENABLE_CA_ENROLLMENT_POLICY: string[] = [
		"ds:EnableCAEnrollmentPolicy",
	];
	/** IAM actions required for the EnableClientAuthentication API call. */
	static readonly ENABLE_CLIENT_AUTHENTICATION: string[] = [
		"ds:EnableClientAuthentication",
	];
	/** IAM actions required for the EnableDirectoryDataAccess API call. */
	static readonly ENABLE_DIRECTORY_DATA_ACCESS: string[] = [
		"ds:EnableDirectoryDataAccess",
	];
	/** IAM actions required for the EnableLDAPS API call. */
	static readonly ENABLE_LDAPS: string[] = ["ds:EnableLDAPS"];
	/** IAM actions required for the EnableRadius API call. */
	static readonly ENABLE_RADIUS: string[] = ["ds:EnableRadius"];
	/** IAM actions required for the EnableSso API call. */
	static readonly ENABLE_SSO: string[] = ["ds:EnableSso"];
	/** IAM actions required for the GetDirectoryLimits API call. */
	static readonly GET_DIRECTORY_LIMITS: string[] = ["ds:GetDirectoryLimits"];
	/** IAM actions required for the GetSnapshotLimits API call. */
	static readonly GET_SNAPSHOT_LIMITS: string[] = ["ds:GetSnapshotLimits"];
	/** IAM actions required for the ListADAssessments API call. */
	static readonly LIST_AD_ASSESSMENTS: string[] = ["ds:ListADAssessments"];
	/** IAM actions required for the ListCertificates API call. */
	static readonly LIST_CERTIFICATES: string[] = ["ds:ListCertificates"];
	/** IAM actions required for the ListIpRoutes API call. */
	static readonly LIST_IP_ROUTES: string[] = ["ds:ListIpRoutes"];
	/** IAM actions required for the ListLogSubscriptions API call. */
	static readonly LIST_LOG_SUBSCRIPTIONS: string[] = [
		"ds:ListLogSubscriptions",
	];
	/** IAM actions required for the ListSchemaExtensions API call. */
	static readonly LIST_SCHEMA_EXTENSIONS: string[] = [
		"ds:ListSchemaExtensions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = ["ds:ListTagsForResource"];
	/** IAM actions required for the RegisterCertificate API call. */
	static readonly REGISTER_CERTIFICATE: string[] = ["ds:RegisterCertificate"];
	/** IAM actions required for the RegisterEventTopic API call. */
	static readonly REGISTER_EVENT_TOPIC: string[] = ["ds:RegisterEventTopic"];
	/** IAM actions required for the RejectSharedDirectory API call. */
	static readonly REJECT_SHARED_DIRECTORY: string[] = [
		"ds:RejectSharedDirectory",
	];
	/** IAM actions required for the RemoveIpRoutes API call. */
	static readonly REMOVE_IP_ROUTES: string[] = ["ds:RemoveIpRoutes"];
	/** IAM actions required for the RemoveRegion API call. */
	static readonly REMOVE_REGION: string[] = ["ds:RemoveRegion"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly REMOVE_TAGS_FROM_RESOURCE: string[] = [
		"ds:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetUserPassword API call. */
	static readonly RESET_USER_PASSWORD: string[] = ["ds:ResetUserPassword"];
	/** IAM actions required for the RestoreFromSnapshot API call. */
	static readonly RESTORE_FROM_SNAPSHOT: string[] = ["ds:RestoreFromSnapshot"];
	/** IAM actions required for the ShareDirectory API call. */
	static readonly SHARE_DIRECTORY: string[] = ["ds:ShareDirectory"];
	/** IAM actions required for the StartADAssessment API call. */
	static readonly START_AD_ASSESSMENT: string[] = ["ds:StartADAssessment"];
	/** IAM actions required for the StartSchemaExtension API call. */
	static readonly START_SCHEMA_EXTENSION: string[] = [
		"ds:StartSchemaExtension",
	];
	/** IAM actions required for the UnshareDirectory API call. */
	static readonly UNSHARE_DIRECTORY: string[] = ["ds:UnshareDirectory"];
	/** IAM actions required for the UpdateConditionalForwarder API call. */
	static readonly UPDATE_CONDITIONAL_FORWARDER: string[] = [
		"ds:UpdateConditionalForwarder",
	];
	/** IAM actions required for the UpdateDirectorySetup API call. */
	static readonly UPDATE_DIRECTORY_SETUP: string[] = [
		"ds:UpdateDirectorySetup",
	];
	/** IAM actions required for the UpdateHybridAD API call. */
	static readonly UPDATE_HYBRID_AD: string[] = ["ds:UpdateHybridAD"];
	/** IAM actions required for the UpdateNumberOfDomainControllers API call. */
	static readonly UPDATE_NUMBER_OF_DOMAIN_CONTROLLERS: string[] = [
		"ds:UpdateNumberOfDomainControllers",
	];
	/** IAM actions required for the UpdateRadius API call. */
	static readonly UPDATE_RADIUS: string[] = ["ds:UpdateRadius"];
	/** IAM actions required for the UpdateSettings API call. */
	static readonly UPDATE_SETTINGS: string[] = ["ds:UpdateSettings"];
	/** IAM actions required for the UpdateTrust API call. */
	static readonly UPDATE_TRUST: string[] = ["ds:UpdateTrust"];
	/** IAM actions required for the VerifyTrust API call. */
	static readonly VERIFY_TRUST: string[] = ["ds:VerifyTrust"];
}

/**
 * Condition key constants and builders for ds.
 */
export class DsConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly ADD_TAGS_TO_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ConnectDirectory action. */
	static readonly CONNECT_DIRECTORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDirectory action. */
	static readonly CREATE_DIRECTORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHybridAD action. */
	static readonly CREATE_HYBRID_AD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIdentityPoolDirectory action. */
	static readonly CREATE_IDENTITY_POOL_DIRECTORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMicrosoftAD action. */
	static readonly CREATE_MICROSOFT_AD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly REMOVE_TAGS_FROM_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
}
