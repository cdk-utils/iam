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
	static readonly AcceptSharedDirectory = "ds:AcceptSharedDirectory";
	/** [PermissionManagement] ds:AccessDSData */
	static readonly AccessDSData = "ds:AccessDSData";
	/** [Write] ds:AddIpRoutes */
	static readonly AddIpRoutes = "ds:AddIpRoutes";
	/** [Write] ds:AddRegion */
	static readonly AddRegion = "ds:AddRegion";
	/** [Tagging] ds:AddTagsToResource */
	static readonly AddTagsToResource = "ds:AddTagsToResource";
	/** [Write] ds:AuthorizeApplication */
	static readonly AuthorizeApplication = "ds:AuthorizeApplication";
	/** [Write] ds:CancelSchemaExtension */
	static readonly CancelSchemaExtension = "ds:CancelSchemaExtension";
	/** [Read] ds:CheckAlias */
	static readonly CheckAlias = "ds:CheckAlias";
	/** [Write] ds:ConnectDirectory */
	static readonly ConnectDirectory = "ds:ConnectDirectory";
	/** [Write] ds:CreateAlias */
	static readonly CreateAlias = "ds:CreateAlias";
	/** [Write] ds:CreateComputer */
	static readonly CreateComputer = "ds:CreateComputer";
	/** [Write] ds:CreateConditionalForwarder */
	static readonly CreateConditionalForwarder = "ds:CreateConditionalForwarder";
	/** [Write] ds:CreateDirectory */
	static readonly CreateDirectory = "ds:CreateDirectory";
	/** [Write] ds:CreateHybridAD */
	static readonly CreateHybridAD = "ds:CreateHybridAD";
	/** [Write] ds:CreateIdentityPoolDirectory */
	static readonly CreateIdentityPoolDirectory =
		"ds:CreateIdentityPoolDirectory";
	/** [Write] ds:CreateLogSubscription */
	static readonly CreateLogSubscription = "ds:CreateLogSubscription";
	/** [Write] ds:CreateMicrosoftAD */
	static readonly CreateMicrosoftAD = "ds:CreateMicrosoftAD";
	/** [Write] ds:CreateSnapshot */
	static readonly CreateSnapshot = "ds:CreateSnapshot";
	/** [Write] ds:CreateTrust */
	static readonly CreateTrust = "ds:CreateTrust";
	/** [Write] ds:DeleteADAssessment */
	static readonly DeleteADAssessment = "ds:DeleteADAssessment";
	/** [Write] ds:DeleteConditionalForwarder */
	static readonly DeleteConditionalForwarder = "ds:DeleteConditionalForwarder";
	/** [Write] ds:DeleteDirectory */
	static readonly DeleteDirectory = "ds:DeleteDirectory";
	/** [Write] ds:DeleteLogSubscription */
	static readonly DeleteLogSubscription = "ds:DeleteLogSubscription";
	/** [Write] ds:DeleteSnapshot */
	static readonly DeleteSnapshot = "ds:DeleteSnapshot";
	/** [Write] ds:DeleteTrust */
	static readonly DeleteTrust = "ds:DeleteTrust";
	/** [Write] ds:DeregisterCertificate */
	static readonly DeregisterCertificate = "ds:DeregisterCertificate";
	/** [Write] ds:DeregisterEventTopic */
	static readonly DeregisterEventTopic = "ds:DeregisterEventTopic";
	/** [Read] ds:DescribeADAssessment */
	static readonly DescribeADAssessment = "ds:DescribeADAssessment";
	/** [Read] ds:DescribeCAEnrollmentPolicy */
	static readonly DescribeCAEnrollmentPolicy = "ds:DescribeCAEnrollmentPolicy";
	/** [Read] ds:DescribeCertificate */
	static readonly DescribeCertificate = "ds:DescribeCertificate";
	/** [Read] ds:DescribeClientAuthenticationSettings */
	static readonly DescribeClientAuthenticationSettings =
		"ds:DescribeClientAuthenticationSettings";
	/** [Read] ds:DescribeConditionalForwarders */
	static readonly DescribeConditionalForwarders =
		"ds:DescribeConditionalForwarders";
	/** [List] ds:DescribeDirectories */
	static readonly DescribeDirectories = "ds:DescribeDirectories";
	/** [Read] ds:DescribeDirectoryDataAccess */
	static readonly DescribeDirectoryDataAccess =
		"ds:DescribeDirectoryDataAccess";
	/** [Read] ds:DescribeDomainControllers */
	static readonly DescribeDomainControllers = "ds:DescribeDomainControllers";
	/** [Read] ds:DescribeEventTopics */
	static readonly DescribeEventTopics = "ds:DescribeEventTopics";
	/** [Read] ds:DescribeHybridADUpdate */
	static readonly DescribeHybridADUpdate = "ds:DescribeHybridADUpdate";
	/** [Read] ds:DescribeLDAPSSettings */
	static readonly DescribeLDAPSSettings = "ds:DescribeLDAPSSettings";
	/** [Read] ds:DescribeRegions */
	static readonly DescribeRegions = "ds:DescribeRegions";
	/** [Read] ds:DescribeSettings */
	static readonly DescribeSettings = "ds:DescribeSettings";
	/** [Read] ds:DescribeSharedDirectories */
	static readonly DescribeSharedDirectories = "ds:DescribeSharedDirectories";
	/** [Read] ds:DescribeSnapshots */
	static readonly DescribeSnapshots = "ds:DescribeSnapshots";
	/** [Read] ds:DescribeTrusts */
	static readonly DescribeTrusts = "ds:DescribeTrusts";
	/** [Read] ds:DescribeUpdateDirectory */
	static readonly DescribeUpdateDirectory = "ds:DescribeUpdateDirectory";
	/** [Write] ds:DisableCAEnrollmentPolicy */
	static readonly DisableCAEnrollmentPolicy = "ds:DisableCAEnrollmentPolicy";
	/** [Write] ds:DisableClientAuthentication */
	static readonly DisableClientAuthentication =
		"ds:DisableClientAuthentication";
	/** [Write] ds:DisableDirectoryDataAccess */
	static readonly DisableDirectoryDataAccess = "ds:DisableDirectoryDataAccess";
	/** [Write] ds:DisableLDAPS */
	static readonly DisableLDAPS = "ds:DisableLDAPS";
	/** [Write] ds:DisableRadius */
	static readonly DisableRadius = "ds:DisableRadius";
	/** [Write] ds:DisableRoleAccess */
	static readonly DisableRoleAccess = "ds:DisableRoleAccess";
	/** [Write] ds:DisableSso */
	static readonly DisableSso = "ds:DisableSso";
	/** [Write] ds:EnableCAEnrollmentPolicy */
	static readonly EnableCAEnrollmentPolicy = "ds:EnableCAEnrollmentPolicy";
	/** [Write] ds:EnableClientAuthentication */
	static readonly EnableClientAuthentication = "ds:EnableClientAuthentication";
	/** [Write] ds:EnableDirectoryDataAccess */
	static readonly EnableDirectoryDataAccess = "ds:EnableDirectoryDataAccess";
	/** [Write] ds:EnableLDAPS */
	static readonly EnableLDAPS = "ds:EnableLDAPS";
	/** [Write] ds:EnableRadius */
	static readonly EnableRadius = "ds:EnableRadius";
	/** [Write] ds:EnableRoleAccess */
	static readonly EnableRoleAccess = "ds:EnableRoleAccess";
	/** [Write] ds:EnableSso */
	static readonly EnableSso = "ds:EnableSso";
	/** [Read] ds:GetAuthorizedApplicationDetails */
	static readonly actionGetAuthorizedApplicationDetails =
		"ds:GetAuthorizedApplicationDetails";
	/** [Read] ds:GetDirectoryLimits */
	static readonly actionGetDirectoryLimits = "ds:GetDirectoryLimits";
	/** [Read] ds:GetSnapshotLimits */
	static readonly actionGetSnapshotLimits = "ds:GetSnapshotLimits";
	/** [List] ds:ListADAssessments */
	static readonly ListADAssessments = "ds:ListADAssessments";
	/** [Read] ds:ListAuthorizedApplications */
	static readonly ListAuthorizedApplications = "ds:ListAuthorizedApplications";
	/** [List] ds:ListCertificates */
	static readonly ListCertificates = "ds:ListCertificates";
	/** [Read] ds:ListIpRoutes */
	static readonly ListIpRoutes = "ds:ListIpRoutes";
	/** [Read] ds:ListLogSubscriptions */
	static readonly ListLogSubscriptions = "ds:ListLogSubscriptions";
	/** [List] ds:ListSchemaExtensions */
	static readonly ListSchemaExtensions = "ds:ListSchemaExtensions";
	/** [Read] ds:ListTagsForResource */
	static readonly ListTagsForResource = "ds:ListTagsForResource";
	/** [Write] ds:RegisterCertificate */
	static readonly RegisterCertificate = "ds:RegisterCertificate";
	/** [Write] ds:RegisterEventTopic */
	static readonly RegisterEventTopic = "ds:RegisterEventTopic";
	/** [Write] ds:RejectSharedDirectory */
	static readonly RejectSharedDirectory = "ds:RejectSharedDirectory";
	/** [Write] ds:RemoveIpRoutes */
	static readonly RemoveIpRoutes = "ds:RemoveIpRoutes";
	/** [Write] ds:RemoveRegion */
	static readonly RemoveRegion = "ds:RemoveRegion";
	/** [Tagging] ds:RemoveTagsFromResource */
	static readonly RemoveTagsFromResource = "ds:RemoveTagsFromResource";
	/** [Write] ds:ResetUserPassword */
	static readonly ResetUserPassword = "ds:ResetUserPassword";
	/** [Write] ds:RestoreFromSnapshot */
	static readonly RestoreFromSnapshot = "ds:RestoreFromSnapshot";
	/** [Write] ds:ShareDirectory */
	static readonly ShareDirectory = "ds:ShareDirectory";
	/** [Write] ds:StartADAssessment */
	static readonly StartADAssessment = "ds:StartADAssessment";
	/** [Write] ds:StartSchemaExtension */
	static readonly StartSchemaExtension = "ds:StartSchemaExtension";
	/** [Write] ds:UnauthorizeApplication */
	static readonly UnauthorizeApplication = "ds:UnauthorizeApplication";
	/** [Write] ds:UnshareDirectory */
	static readonly UnshareDirectory = "ds:UnshareDirectory";
	/** [Write] ds:UpdateAuthorizedApplication */
	static readonly UpdateAuthorizedApplication =
		"ds:UpdateAuthorizedApplication";
	/** [Write] ds:UpdateConditionalForwarder */
	static readonly UpdateConditionalForwarder = "ds:UpdateConditionalForwarder";
	/** [Write] ds:UpdateDirectory */
	static readonly UpdateDirectory = "ds:UpdateDirectory";
	/** [Write] ds:UpdateDirectorySetup */
	static readonly UpdateDirectorySetup = "ds:UpdateDirectorySetup";
	/** [Write] ds:UpdateHybridAD */
	static readonly UpdateHybridAD = "ds:UpdateHybridAD";
	/** [Write] ds:UpdateNumberOfDomainControllers */
	static readonly UpdateNumberOfDomainControllers =
		"ds:UpdateNumberOfDomainControllers";
	/** [Write] ds:UpdateRadius */
	static readonly UpdateRadius = "ds:UpdateRadius";
	/** [Write] ds:UpdateSettings */
	static readonly UpdateSettings = "ds:UpdateSettings";
	/** [Write] ds:UpdateTrust */
	static readonly UpdateTrust = "ds:UpdateTrust";
	/** [Read] ds:VerifyTrust */
	static readonly VerifyTrust = "ds:VerifyTrust";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DsActions.CheckAlias,
		DsActions.DescribeADAssessment,
		DsActions.DescribeCAEnrollmentPolicy,
		DsActions.DescribeCertificate,
		DsActions.DescribeClientAuthenticationSettings,
		DsActions.DescribeConditionalForwarders,
		DsActions.DescribeDirectoryDataAccess,
		DsActions.DescribeDomainControllers,
		DsActions.DescribeEventTopics,
		DsActions.DescribeHybridADUpdate,
		DsActions.DescribeLDAPSSettings,
		DsActions.DescribeRegions,
		DsActions.DescribeSettings,
		DsActions.DescribeSharedDirectories,
		DsActions.DescribeSnapshots,
		DsActions.DescribeTrusts,
		DsActions.DescribeUpdateDirectory,
		DsActions.actionGetAuthorizedApplicationDetails,
		DsActions.actionGetDirectoryLimits,
		DsActions.actionGetSnapshotLimits,
		DsActions.ListAuthorizedApplications,
		DsActions.ListIpRoutes,
		DsActions.ListLogSubscriptions,
		DsActions.ListTagsForResource,
		DsActions.VerifyTrust,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DsActions.AcceptSharedDirectory,
		DsActions.AddIpRoutes,
		DsActions.AddRegion,
		DsActions.AuthorizeApplication,
		DsActions.CancelSchemaExtension,
		DsActions.ConnectDirectory,
		DsActions.CreateAlias,
		DsActions.CreateComputer,
		DsActions.CreateConditionalForwarder,
		DsActions.CreateDirectory,
		DsActions.CreateHybridAD,
		DsActions.CreateIdentityPoolDirectory,
		DsActions.CreateLogSubscription,
		DsActions.CreateMicrosoftAD,
		DsActions.CreateSnapshot,
		DsActions.CreateTrust,
		DsActions.DeleteADAssessment,
		DsActions.DeleteConditionalForwarder,
		DsActions.DeleteDirectory,
		DsActions.DeleteLogSubscription,
		DsActions.DeleteSnapshot,
		DsActions.DeleteTrust,
		DsActions.DeregisterCertificate,
		DsActions.DeregisterEventTopic,
		DsActions.DisableCAEnrollmentPolicy,
		DsActions.DisableClientAuthentication,
		DsActions.DisableDirectoryDataAccess,
		DsActions.DisableLDAPS,
		DsActions.DisableRadius,
		DsActions.DisableRoleAccess,
		DsActions.DisableSso,
		DsActions.EnableCAEnrollmentPolicy,
		DsActions.EnableClientAuthentication,
		DsActions.EnableDirectoryDataAccess,
		DsActions.EnableLDAPS,
		DsActions.EnableRadius,
		DsActions.EnableRoleAccess,
		DsActions.EnableSso,
		DsActions.RegisterCertificate,
		DsActions.RegisterEventTopic,
		DsActions.RejectSharedDirectory,
		DsActions.RemoveIpRoutes,
		DsActions.RemoveRegion,
		DsActions.ResetUserPassword,
		DsActions.RestoreFromSnapshot,
		DsActions.ShareDirectory,
		DsActions.StartADAssessment,
		DsActions.StartSchemaExtension,
		DsActions.UnauthorizeApplication,
		DsActions.UnshareDirectory,
		DsActions.UpdateAuthorizedApplication,
		DsActions.UpdateConditionalForwarder,
		DsActions.UpdateDirectory,
		DsActions.UpdateDirectorySetup,
		DsActions.UpdateHybridAD,
		DsActions.UpdateNumberOfDomainControllers,
		DsActions.UpdateRadius,
		DsActions.UpdateSettings,
		DsActions.UpdateTrust,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DsActions.DescribeDirectories,
		DsActions.ListADAssessments,
		DsActions.ListCertificates,
		DsActions.ListSchemaExtensions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		DsActions.AccessDSData,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DsActions.AddTagsToResource,
		DsActions.RemoveTagsFromResource,
	];
}

/**
 * Properties for building a directory ARN.
 */
export interface DsDirectoryArnProps {
	/** The DirectoryId component of the ARN. */
	readonly directoryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a directory ARN.
 */
export interface DsDirectoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
}

const DirectoryArnRegex =
	/^arn:(?<partition>[^:]+):ds:(?<region>[^:]*):(?<account>[^:]*):directory\/(?<directoryId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ds resources.
 */
export class DsResources {
	/**
	 * Builds an ARN for the directory resource.
	 */
	static directory(props: DsDirectoryArnProps): string {
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
	static parseDirectoryArn(arn: string): DsDirectoryArnComponents {
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
	static readonly AcceptSharedDirectory: string[] = [
		"ds:AcceptSharedDirectory",
	];
	/** IAM actions required for the AddIpRoutes API call. */
	static readonly AddIpRoutes: string[] = ["ds:AddIpRoutes"];
	/** IAM actions required for the AddRegion API call. */
	static readonly AddRegion: string[] = ["ds:AddRegion"];
	/** IAM actions required for the AddTagsToResource API call. */
	static readonly AddTagsToResource: string[] = ["ds:AddTagsToResource"];
	/** IAM actions required for the CancelSchemaExtension API call. */
	static readonly CancelSchemaExtension: string[] = [
		"ds:CancelSchemaExtension",
	];
	/** IAM actions required for the ConnectDirectory API call. */
	static readonly ConnectDirectory: string[] = [
		"ds:AddTagsToResource",
		"ds:ConnectDirectory",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CreateAlias: string[] = ["ds:CreateAlias"];
	/** IAM actions required for the CreateComputer API call. */
	static readonly CreateComputer: string[] = ["ds:CreateComputer"];
	/** IAM actions required for the CreateConditionalForwarder API call. */
	static readonly CreateConditionalForwarder: string[] = [
		"ds:CreateConditionalForwarder",
	];
	/** IAM actions required for the CreateDirectory API call. */
	static readonly CreateDirectory: string[] = [
		"ds:AddTagsToResource",
		"ds:CreateDirectory",
	];
	/** IAM actions required for the CreateHybridAD API call. */
	static readonly CreateHybridAD: string[] = [
		"ds:AddTagsToResource",
		"ds:CreateHybridAD",
	];
	/** IAM actions required for the CreateLogSubscription API call. */
	static readonly CreateLogSubscription: string[] = [
		"ds:CreateLogSubscription",
	];
	/** IAM actions required for the CreateMicrosoftAD API call. */
	static readonly CreateMicrosoftAD: string[] = [
		"ds:AddTagsToResource",
		"ds:CreateMicrosoftAD",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CreateSnapshot: string[] = ["ds:CreateSnapshot"];
	/** IAM actions required for the CreateTrust API call. */
	static readonly CreateTrust: string[] = ["ds:CreateTrust"];
	/** IAM actions required for the DeleteADAssessment API call. */
	static readonly DeleteADAssessment: string[] = ["ds:DeleteADAssessment"];
	/** IAM actions required for the DeleteConditionalForwarder API call. */
	static readonly DeleteConditionalForwarder: string[] = [
		"ds:DeleteConditionalForwarder",
	];
	/** IAM actions required for the DeleteDirectory API call. */
	static readonly DeleteDirectory: string[] = ["ds:DeleteDirectory"];
	/** IAM actions required for the DeleteLogSubscription API call. */
	static readonly DeleteLogSubscription: string[] = [
		"ds:DeleteLogSubscription",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DeleteSnapshot: string[] = ["ds:DeleteSnapshot"];
	/** IAM actions required for the DeleteTrust API call. */
	static readonly DeleteTrust: string[] = ["ds:DeleteTrust"];
	/** IAM actions required for the DeregisterCertificate API call. */
	static readonly DeregisterCertificate: string[] = [
		"ds:DeregisterCertificate",
	];
	/** IAM actions required for the DeregisterEventTopic API call. */
	static readonly DeregisterEventTopic: string[] = ["ds:DeregisterEventTopic"];
	/** IAM actions required for the DescribeADAssessment API call. */
	static readonly DescribeADAssessment: string[] = ["ds:DescribeADAssessment"];
	/** IAM actions required for the DescribeCAEnrollmentPolicy API call. */
	static readonly DescribeCAEnrollmentPolicy: string[] = [
		"ds:DescribeCAEnrollmentPolicy",
	];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DescribeCertificate: string[] = ["ds:DescribeCertificate"];
	/** IAM actions required for the DescribeClientAuthenticationSettings API call. */
	static readonly DescribeClientAuthenticationSettings: string[] = [
		"ds:DescribeClientAuthenticationSettings",
	];
	/** IAM actions required for the DescribeConditionalForwarders API call. */
	static readonly DescribeConditionalForwarders: string[] = [
		"ds:DescribeConditionalForwarders",
	];
	/** IAM actions required for the DescribeDirectories API call. */
	static readonly DescribeDirectories: string[] = ["ds:DescribeDirectories"];
	/** IAM actions required for the DescribeDirectoryDataAccess API call. */
	static readonly DescribeDirectoryDataAccess: string[] = [
		"ds:DescribeDirectoryDataAccess",
	];
	/** IAM actions required for the DescribeDomainControllers API call. */
	static readonly DescribeDomainControllers: string[] = [
		"ds:DescribeDomainControllers",
	];
	/** IAM actions required for the DescribeEventTopics API call. */
	static readonly DescribeEventTopics: string[] = ["ds:DescribeEventTopics"];
	/** IAM actions required for the DescribeHybridADUpdate API call. */
	static readonly DescribeHybridADUpdate: string[] = [
		"ds:DescribeHybridADUpdate",
	];
	/** IAM actions required for the DescribeLDAPSSettings API call. */
	static readonly DescribeLDAPSSettings: string[] = [
		"ds:DescribeLDAPSSettings",
	];
	/** IAM actions required for the DescribeRegions API call. */
	static readonly DescribeRegions: string[] = ["ds:DescribeRegions"];
	/** IAM actions required for the DescribeSettings API call. */
	static readonly DescribeSettings: string[] = ["ds:DescribeSettings"];
	/** IAM actions required for the DescribeSharedDirectories API call. */
	static readonly DescribeSharedDirectories: string[] = [
		"ds:DescribeSharedDirectories",
	];
	/** IAM actions required for the DescribeSnapshots API call. */
	static readonly DescribeSnapshots: string[] = ["ds:DescribeSnapshots"];
	/** IAM actions required for the DescribeTrusts API call. */
	static readonly DescribeTrusts: string[] = ["ds:DescribeTrusts"];
	/** IAM actions required for the DescribeUpdateDirectory API call. */
	static readonly DescribeUpdateDirectory: string[] = [
		"ds:DescribeUpdateDirectory",
	];
	/** IAM actions required for the DisableCAEnrollmentPolicy API call. */
	static readonly DisableCAEnrollmentPolicy: string[] = [
		"ds:DisableCAEnrollmentPolicy",
	];
	/** IAM actions required for the DisableClientAuthentication API call. */
	static readonly DisableClientAuthentication: string[] = [
		"ds:DisableClientAuthentication",
	];
	/** IAM actions required for the DisableDirectoryDataAccess API call. */
	static readonly DisableDirectoryDataAccess: string[] = [
		"ds:DisableDirectoryDataAccess",
	];
	/** IAM actions required for the DisableLDAPS API call. */
	static readonly DisableLDAPS: string[] = ["ds:DisableLDAPS"];
	/** IAM actions required for the DisableRadius API call. */
	static readonly DisableRadius: string[] = ["ds:DisableRadius"];
	/** IAM actions required for the DisableSso API call. */
	static readonly DisableSso: string[] = ["ds:DisableSso"];
	/** IAM actions required for the EnableCAEnrollmentPolicy API call. */
	static readonly EnableCAEnrollmentPolicy: string[] = [
		"ds:EnableCAEnrollmentPolicy",
	];
	/** IAM actions required for the EnableClientAuthentication API call. */
	static readonly EnableClientAuthentication: string[] = [
		"ds:EnableClientAuthentication",
	];
	/** IAM actions required for the EnableDirectoryDataAccess API call. */
	static readonly EnableDirectoryDataAccess: string[] = [
		"ds:EnableDirectoryDataAccess",
	];
	/** IAM actions required for the EnableLDAPS API call. */
	static readonly EnableLDAPS: string[] = ["ds:EnableLDAPS"];
	/** IAM actions required for the EnableRadius API call. */
	static readonly EnableRadius: string[] = ["ds:EnableRadius"];
	/** IAM actions required for the EnableSso API call. */
	static readonly EnableSso: string[] = ["ds:EnableSso"];
	/** IAM actions required for the GetDirectoryLimits API call. */
	static readonly opGetDirectoryLimits: string[] = ["ds:GetDirectoryLimits"];
	/** IAM actions required for the GetSnapshotLimits API call. */
	static readonly opGetSnapshotLimits: string[] = ["ds:GetSnapshotLimits"];
	/** IAM actions required for the ListADAssessments API call. */
	static readonly ListADAssessments: string[] = ["ds:ListADAssessments"];
	/** IAM actions required for the ListCertificates API call. */
	static readonly ListCertificates: string[] = ["ds:ListCertificates"];
	/** IAM actions required for the ListIpRoutes API call. */
	static readonly ListIpRoutes: string[] = ["ds:ListIpRoutes"];
	/** IAM actions required for the ListLogSubscriptions API call. */
	static readonly ListLogSubscriptions: string[] = ["ds:ListLogSubscriptions"];
	/** IAM actions required for the ListSchemaExtensions API call. */
	static readonly ListSchemaExtensions: string[] = ["ds:ListSchemaExtensions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["ds:ListTagsForResource"];
	/** IAM actions required for the RegisterCertificate API call. */
	static readonly RegisterCertificate: string[] = ["ds:RegisterCertificate"];
	/** IAM actions required for the RegisterEventTopic API call. */
	static readonly RegisterEventTopic: string[] = ["ds:RegisterEventTopic"];
	/** IAM actions required for the RejectSharedDirectory API call. */
	static readonly RejectSharedDirectory: string[] = [
		"ds:RejectSharedDirectory",
	];
	/** IAM actions required for the RemoveIpRoutes API call. */
	static readonly RemoveIpRoutes: string[] = ["ds:RemoveIpRoutes"];
	/** IAM actions required for the RemoveRegion API call. */
	static readonly RemoveRegion: string[] = ["ds:RemoveRegion"];
	/** IAM actions required for the RemoveTagsFromResource API call. */
	static readonly RemoveTagsFromResource: string[] = [
		"ds:RemoveTagsFromResource",
	];
	/** IAM actions required for the ResetUserPassword API call. */
	static readonly ResetUserPassword: string[] = ["ds:ResetUserPassword"];
	/** IAM actions required for the RestoreFromSnapshot API call. */
	static readonly RestoreFromSnapshot: string[] = ["ds:RestoreFromSnapshot"];
	/** IAM actions required for the ShareDirectory API call. */
	static readonly ShareDirectory: string[] = ["ds:ShareDirectory"];
	/** IAM actions required for the StartADAssessment API call. */
	static readonly StartADAssessment: string[] = ["ds:StartADAssessment"];
	/** IAM actions required for the StartSchemaExtension API call. */
	static readonly StartSchemaExtension: string[] = ["ds:StartSchemaExtension"];
	/** IAM actions required for the UnshareDirectory API call. */
	static readonly UnshareDirectory: string[] = ["ds:UnshareDirectory"];
	/** IAM actions required for the UpdateConditionalForwarder API call. */
	static readonly UpdateConditionalForwarder: string[] = [
		"ds:UpdateConditionalForwarder",
	];
	/** IAM actions required for the UpdateDirectorySetup API call. */
	static readonly UpdateDirectorySetup: string[] = ["ds:UpdateDirectorySetup"];
	/** IAM actions required for the UpdateHybridAD API call. */
	static readonly UpdateHybridAD: string[] = ["ds:UpdateHybridAD"];
	/** IAM actions required for the UpdateNumberOfDomainControllers API call. */
	static readonly UpdateNumberOfDomainControllers: string[] = [
		"ds:UpdateNumberOfDomainControllers",
	];
	/** IAM actions required for the UpdateRadius API call. */
	static readonly UpdateRadius: string[] = ["ds:UpdateRadius"];
	/** IAM actions required for the UpdateSettings API call. */
	static readonly UpdateSettings: string[] = ["ds:UpdateSettings"];
	/** IAM actions required for the UpdateTrust API call. */
	static readonly UpdateTrust: string[] = ["ds:UpdateTrust"];
	/** IAM actions required for the VerifyTrust API call. */
	static readonly VerifyTrust: string[] = ["ds:VerifyTrust"];
}

/**
 * Condition key constants and builders for ds.
 */
export class DsConditions {
	/** Condition keys applicable to the AddTagsToResource action. */
	static readonly AddTagsToResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ConnectDirectory action. */
	static readonly ConnectDirectoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDirectory action. */
	static readonly CreateDirectoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateHybridAD action. */
	static readonly CreateHybridADConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIdentityPoolDirectory action. */
	static readonly CreateIdentityPoolDirectoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMicrosoftAD action. */
	static readonly CreateMicrosoftADConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTagsFromResource action. */
	static readonly RemoveTagsFromResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
