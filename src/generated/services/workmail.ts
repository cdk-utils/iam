// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/workmail.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the workmail service.
 */
export class WorkMailActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "workmail";

	/** [Write] workmail:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"workmail:AllowVendedLogDeliveryForResource";
	/** [Write] workmail:AssociateDelegateToResource */
	static readonly AssociateDelegateToResource =
		"workmail:AssociateDelegateToResource";
	/** [Write] workmail:AssociateMemberToGroup */
	static readonly AssociateMemberToGroup = "workmail:AssociateMemberToGroup";
	/** [Write] workmail:AssumeImpersonationRole */
	static readonly AssumeImpersonationRole = "workmail:AssumeImpersonationRole";
	/** [Write] workmail:CancelMailboxExportJob */
	static readonly CancelMailboxExportJob = "workmail:CancelMailboxExportJob";
	/** [Write] workmail:CreateAlias */
	static readonly CreateAlias = "workmail:CreateAlias";
	/** [Write] workmail:CreateAvailabilityConfiguration */
	static readonly CreateAvailabilityConfiguration =
		"workmail:CreateAvailabilityConfiguration";
	/** [Write] workmail:CreateGroup */
	static readonly CreateGroup = "workmail:CreateGroup";
	/** [Write] workmail:CreateIdentityCenterApplication */
	static readonly CreateIdentityCenterApplication =
		"workmail:CreateIdentityCenterApplication";
	/** [Write] workmail:CreateImpersonationRole */
	static readonly CreateImpersonationRole = "workmail:CreateImpersonationRole";
	/** [Write] workmail:CreateInboundMailFlowRule */
	static readonly CreateInboundMailFlowRule =
		"workmail:CreateInboundMailFlowRule";
	/** [Write] workmail:CreateMailDomain */
	static readonly CreateMailDomain = "workmail:CreateMailDomain";
	/** [Write] workmail:CreateMobileDeviceAccessRule */
	static readonly CreateMobileDeviceAccessRule =
		"workmail:CreateMobileDeviceAccessRule";
	/** [Write] workmail:CreateOrganization */
	static readonly CreateOrganization = "workmail:CreateOrganization";
	/** [Write] workmail:CreateOutboundMailFlowRule */
	static readonly CreateOutboundMailFlowRule =
		"workmail:CreateOutboundMailFlowRule";
	/** [Write] workmail:CreateResource */
	static readonly CreateResource = "workmail:CreateResource";
	/** [Write] workmail:CreateSmtpGateway */
	static readonly CreateSmtpGateway = "workmail:CreateSmtpGateway";
	/** [Write] workmail:CreateUser */
	static readonly CreateUser = "workmail:CreateUser";
	/** [Write] workmail:DeleteAccessControlRule */
	static readonly DeleteAccessControlRule = "workmail:DeleteAccessControlRule";
	/** [Write] workmail:DeleteAlias */
	static readonly DeleteAlias = "workmail:DeleteAlias";
	/** [Write] workmail:DeleteAvailabilityConfiguration */
	static readonly DeleteAvailabilityConfiguration =
		"workmail:DeleteAvailabilityConfiguration";
	/** [Write] workmail:DeleteEmailMonitoringConfiguration */
	static readonly DeleteEmailMonitoringConfiguration =
		"workmail:DeleteEmailMonitoringConfiguration";
	/** [Write] workmail:DeleteGroup */
	static readonly DeleteGroup = "workmail:DeleteGroup";
	/** [Write] workmail:DeleteIdentityCenterApplication */
	static readonly DeleteIdentityCenterApplication =
		"workmail:DeleteIdentityCenterApplication";
	/** [Write] workmail:DeleteIdentityProviderConfiguration */
	static readonly DeleteIdentityProviderConfiguration =
		"workmail:DeleteIdentityProviderConfiguration";
	/** [Write] workmail:DeleteImpersonationRole */
	static readonly DeleteImpersonationRole = "workmail:DeleteImpersonationRole";
	/** [Write] workmail:DeleteInboundMailFlowRule */
	static readonly DeleteInboundMailFlowRule =
		"workmail:DeleteInboundMailFlowRule";
	/** [Write] workmail:DeleteMailDomain */
	static readonly DeleteMailDomain = "workmail:DeleteMailDomain";
	/** [Write] workmail:DeleteMailboxPermissions */
	static readonly DeleteMailboxPermissions =
		"workmail:DeleteMailboxPermissions";
	/** [Write] workmail:DeleteMobileDevice */
	static readonly DeleteMobileDevice = "workmail:DeleteMobileDevice";
	/** [Write] workmail:DeleteMobileDeviceAccessOverride */
	static readonly DeleteMobileDeviceAccessOverride =
		"workmail:DeleteMobileDeviceAccessOverride";
	/** [Write] workmail:DeleteMobileDeviceAccessRule */
	static readonly DeleteMobileDeviceAccessRule =
		"workmail:DeleteMobileDeviceAccessRule";
	/** [Write] workmail:DeleteOrganization */
	static readonly DeleteOrganization = "workmail:DeleteOrganization";
	/** [Write] workmail:DeleteOutboundMailFlowRule */
	static readonly DeleteOutboundMailFlowRule =
		"workmail:DeleteOutboundMailFlowRule";
	/** [Write] workmail:DeletePersonalAccessToken */
	static readonly DeletePersonalAccessToken =
		"workmail:DeletePersonalAccessToken";
	/** [Write] workmail:DeleteResource */
	static readonly DeleteResource = "workmail:DeleteResource";
	/** [Write] workmail:DeleteRetentionPolicy */
	static readonly DeleteRetentionPolicy = "workmail:DeleteRetentionPolicy";
	/** [Write] workmail:DeleteSmtpGateway */
	static readonly DeleteSmtpGateway = "workmail:DeleteSmtpGateway";
	/** [Write] workmail:DeleteUser */
	static readonly DeleteUser = "workmail:DeleteUser";
	/** [Write] workmail:DeliverToMailbox */
	static readonly DeliverToMailbox = "workmail:DeliverToMailbox";
	/** [Write] workmail:DeregisterFromWorkMail */
	static readonly DeregisterFromWorkMail = "workmail:DeregisterFromWorkMail";
	/** [Write] workmail:DeregisterMailDomain */
	static readonly DeregisterMailDomain = "workmail:DeregisterMailDomain";
	/** [Read] workmail:DescribeEmailMonitoringConfiguration */
	static readonly DescribeEmailMonitoringConfiguration =
		"workmail:DescribeEmailMonitoringConfiguration";
	/** [Read] workmail:DescribeEntity */
	static readonly DescribeEntity = "workmail:DescribeEntity";
	/** [List] workmail:DescribeGroup */
	static readonly DescribeGroup = "workmail:DescribeGroup";
	/** [Read] workmail:DescribeIdentityProviderConfiguration */
	static readonly DescribeIdentityProviderConfiguration =
		"workmail:DescribeIdentityProviderConfiguration";
	/** [Read] workmail:DescribeInboundDmarcSettings */
	static readonly DescribeInboundDmarcSettings =
		"workmail:DescribeInboundDmarcSettings";
	/** [Read] workmail:DescribeInboundMailFlowRule */
	static readonly DescribeInboundMailFlowRule =
		"workmail:DescribeInboundMailFlowRule";
	/** [List] workmail:DescribeMailDomains */
	static readonly DescribeMailDomains = "workmail:DescribeMailDomains";
	/** [Read] workmail:DescribeMailboxExportJob */
	static readonly DescribeMailboxExportJob =
		"workmail:DescribeMailboxExportJob";
	/** [List] workmail:DescribeOrganization */
	static readonly DescribeOrganization = "workmail:DescribeOrganization";
	/** [Read] workmail:DescribeOutboundMailFlowRule */
	static readonly DescribeOutboundMailFlowRule =
		"workmail:DescribeOutboundMailFlowRule";
	/** [List] workmail:DescribeResource */
	static readonly DescribeResource = "workmail:DescribeResource";
	/** [Read] workmail:DescribeSmtpGateway */
	static readonly DescribeSmtpGateway = "workmail:DescribeSmtpGateway";
	/** [List] workmail:DescribeUser */
	static readonly DescribeUser = "workmail:DescribeUser";
	/** [Write] workmail:DisassociateDelegateFromResource */
	static readonly DisassociateDelegateFromResource =
		"workmail:DisassociateDelegateFromResource";
	/** [Write] workmail:DisassociateMemberFromGroup */
	static readonly DisassociateMemberFromGroup =
		"workmail:DisassociateMemberFromGroup";
	/** [Write] workmail:EnableMailDomain */
	static readonly EnableMailDomain = "workmail:EnableMailDomain";
	/** [Read] workmail:GetAccessControlEffect */
	static readonly actionGetAccessControlEffect =
		"workmail:GetAccessControlEffect";
	/** [Read] workmail:GetDefaultRetentionPolicy */
	static readonly actionGetDefaultRetentionPolicy =
		"workmail:GetDefaultRetentionPolicy";
	/** [Read] workmail:GetImpersonationRole */
	static readonly actionGetImpersonationRole = "workmail:GetImpersonationRole";
	/** [Read] workmail:GetImpersonationRoleEffect */
	static readonly actionGetImpersonationRoleEffect =
		"workmail:GetImpersonationRoleEffect";
	/** [Read] workmail:GetJournalingRules */
	static readonly actionGetJournalingRules = "workmail:GetJournalingRules";
	/** [Read] workmail:GetMailDomain */
	static readonly actionGetMailDomain = "workmail:GetMailDomain";
	/** [Read] workmail:GetMailDomainDetails */
	static readonly actionGetMailDomainDetails = "workmail:GetMailDomainDetails";
	/** [Read] workmail:GetMailboxDetails */
	static readonly actionGetMailboxDetails = "workmail:GetMailboxDetails";
	/** [Read] workmail:GetMobileDeviceAccessEffect */
	static readonly actionGetMobileDeviceAccessEffect =
		"workmail:GetMobileDeviceAccessEffect";
	/** [Read] workmail:GetMobileDeviceAccessOverride */
	static readonly actionGetMobileDeviceAccessOverride =
		"workmail:GetMobileDeviceAccessOverride";
	/** [Read] workmail:GetMobileDeviceDetails */
	static readonly actionGetMobileDeviceDetails =
		"workmail:GetMobileDeviceDetails";
	/** [Read] workmail:GetMobileDevicesForUser */
	static readonly actionGetMobileDevicesForUser =
		"workmail:GetMobileDevicesForUser";
	/** [Read] workmail:GetMobilePolicyDetails */
	static readonly actionGetMobilePolicyDetails =
		"workmail:GetMobilePolicyDetails";
	/** [Read] workmail:GetPersonalAccessTokenMetadata */
	static readonly actionGetPersonalAccessTokenMetadata =
		"workmail:GetPersonalAccessTokenMetadata";
	/** [Read] workmail:ListAccessControlRules */
	static readonly ListAccessControlRules = "workmail:ListAccessControlRules";
	/** [List] workmail:ListAliases */
	static readonly ListAliases = "workmail:ListAliases";
	/** [Read] workmail:ListAvailabilityConfigurations */
	static readonly ListAvailabilityConfigurations =
		"workmail:ListAvailabilityConfigurations";
	/** [List] workmail:ListGroupMembers */
	static readonly ListGroupMembers = "workmail:ListGroupMembers";
	/** [List] workmail:ListGroups */
	static readonly ListGroups = "workmail:ListGroups";
	/** [List] workmail:ListGroupsForEntity */
	static readonly ListGroupsForEntity = "workmail:ListGroupsForEntity";
	/** [List] workmail:ListImpersonationRoles */
	static readonly ListImpersonationRoles = "workmail:ListImpersonationRoles";
	/** [List] workmail:ListInboundMailFlowRules */
	static readonly ListInboundMailFlowRules =
		"workmail:ListInboundMailFlowRules";
	/** [List] workmail:ListMailDomains */
	static readonly ListMailDomains = "workmail:ListMailDomains";
	/** [List] workmail:ListMailboxExportJobs */
	static readonly ListMailboxExportJobs = "workmail:ListMailboxExportJobs";
	/** [List] workmail:ListMailboxPermissions */
	static readonly ListMailboxPermissions = "workmail:ListMailboxPermissions";
	/** [Read] workmail:ListMobileDeviceAccessOverrides */
	static readonly ListMobileDeviceAccessOverrides =
		"workmail:ListMobileDeviceAccessOverrides";
	/** [Read] workmail:ListMobileDeviceAccessRules */
	static readonly ListMobileDeviceAccessRules =
		"workmail:ListMobileDeviceAccessRules";
	/** [List] workmail:ListOrganizations */
	static readonly ListOrganizations = "workmail:ListOrganizations";
	/** [List] workmail:ListOutboundMailFlowRules */
	static readonly ListOutboundMailFlowRules =
		"workmail:ListOutboundMailFlowRules";
	/** [List] workmail:ListPersonalAccessTokens */
	static readonly ListPersonalAccessTokens =
		"workmail:ListPersonalAccessTokens";
	/** [List] workmail:ListResourceDelegates */
	static readonly ListResourceDelegates = "workmail:ListResourceDelegates";
	/** [List] workmail:ListResources */
	static readonly ListResources = "workmail:ListResources";
	/** [List] workmail:ListSmtpGateways */
	static readonly ListSmtpGateways = "workmail:ListSmtpGateways";
	/** [List] workmail:ListTagsForResource */
	static readonly ListTagsForResource = "workmail:ListTagsForResource";
	/** [List] workmail:ListUsers */
	static readonly ListUsers = "workmail:ListUsers";
	/** [Write] workmail:PutAccessControlRule */
	static readonly PutAccessControlRule = "workmail:PutAccessControlRule";
	/** [Write] workmail:PutEmailMonitoringConfiguration */
	static readonly PutEmailMonitoringConfiguration =
		"workmail:PutEmailMonitoringConfiguration";
	/** [Write] workmail:PutIdentityProviderConfiguration */
	static readonly PutIdentityProviderConfiguration =
		"workmail:PutIdentityProviderConfiguration";
	/** [Write] workmail:PutInboundDmarcSettings */
	static readonly PutInboundDmarcSettings = "workmail:PutInboundDmarcSettings";
	/** [Write] workmail:PutMailboxPermissions */
	static readonly PutMailboxPermissions = "workmail:PutMailboxPermissions";
	/** [Write] workmail:PutMobileDeviceAccessOverride */
	static readonly PutMobileDeviceAccessOverride =
		"workmail:PutMobileDeviceAccessOverride";
	/** [Write] workmail:PutRetentionPolicy */
	static readonly PutRetentionPolicy = "workmail:PutRetentionPolicy";
	/** [Write] workmail:RegisterMailDomain */
	static readonly RegisterMailDomain = "workmail:RegisterMailDomain";
	/** [Write] workmail:RegisterToWorkMail */
	static readonly RegisterToWorkMail = "workmail:RegisterToWorkMail";
	/** [Write] workmail:ResetPassword */
	static readonly ResetPassword = "workmail:ResetPassword";
	/** [Read] workmail:SearchMembers */
	static readonly SearchMembers = "workmail:SearchMembers";
	/** [Write] workmail:SetDefaultMailDomain */
	static readonly actionSetDefaultMailDomain = "workmail:SetDefaultMailDomain";
	/** [Write] workmail:SetJournalingRules */
	static readonly actionSetJournalingRules = "workmail:SetJournalingRules";
	/** [Write] workmail:SetMobilePolicyDetails */
	static readonly actionSetMobilePolicyDetails =
		"workmail:SetMobilePolicyDetails";
	/** [Write] workmail:StartMailboxExportJob */
	static readonly StartMailboxExportJob = "workmail:StartMailboxExportJob";
	/** [Tagging] workmail:TagResource */
	static readonly TagResource = "workmail:TagResource";
	/** [Read] workmail:TestAvailabilityConfiguration */
	static readonly TestAvailabilityConfiguration =
		"workmail:TestAvailabilityConfiguration";
	/** [Write] workmail:TestInboundMailFlowRules */
	static readonly TestInboundMailFlowRules =
		"workmail:TestInboundMailFlowRules";
	/** [Write] workmail:TestOutboundMailFlowRules */
	static readonly TestOutboundMailFlowRules =
		"workmail:TestOutboundMailFlowRules";
	/** [Tagging] workmail:UntagResource */
	static readonly UntagResource = "workmail:UntagResource";
	/** [Write] workmail:UpdateAvailabilityConfiguration */
	static readonly UpdateAvailabilityConfiguration =
		"workmail:UpdateAvailabilityConfiguration";
	/** [Write] workmail:UpdateDefaultMailDomain */
	static readonly UpdateDefaultMailDomain = "workmail:UpdateDefaultMailDomain";
	/** [Write] workmail:UpdateGroup */
	static readonly UpdateGroup = "workmail:UpdateGroup";
	/** [Write] workmail:UpdateImpersonationRole */
	static readonly UpdateImpersonationRole = "workmail:UpdateImpersonationRole";
	/** [Write] workmail:UpdateInboundMailFlowRule */
	static readonly UpdateInboundMailFlowRule =
		"workmail:UpdateInboundMailFlowRule";
	/** [Write] workmail:UpdateMailboxQuota */
	static readonly UpdateMailboxQuota = "workmail:UpdateMailboxQuota";
	/** [Write] workmail:UpdateMobileDeviceAccessRule */
	static readonly UpdateMobileDeviceAccessRule =
		"workmail:UpdateMobileDeviceAccessRule";
	/** [Write] workmail:UpdateOutboundMailFlowRule */
	static readonly UpdateOutboundMailFlowRule =
		"workmail:UpdateOutboundMailFlowRule";
	/** [Write] workmail:UpdatePrimaryEmailAddress */
	static readonly UpdatePrimaryEmailAddress =
		"workmail:UpdatePrimaryEmailAddress";
	/** [Write] workmail:UpdateResource */
	static readonly UpdateResource = "workmail:UpdateResource";
	/** [Write] workmail:UpdateSmtpGateway */
	static readonly UpdateSmtpGateway = "workmail:UpdateSmtpGateway";
	/** [Write] workmail:UpdateUser */
	static readonly UpdateUser = "workmail:UpdateUser";
	/** [Write] workmail:WipeMobileDevice */
	static readonly WipeMobileDevice = "workmail:WipeMobileDevice";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WorkMailActions.DescribeEmailMonitoringConfiguration,
		WorkMailActions.DescribeEntity,
		WorkMailActions.DescribeIdentityProviderConfiguration,
		WorkMailActions.DescribeInboundDmarcSettings,
		WorkMailActions.DescribeInboundMailFlowRule,
		WorkMailActions.DescribeMailboxExportJob,
		WorkMailActions.DescribeOutboundMailFlowRule,
		WorkMailActions.DescribeSmtpGateway,
		WorkMailActions.actionGetAccessControlEffect,
		WorkMailActions.actionGetDefaultRetentionPolicy,
		WorkMailActions.actionGetImpersonationRole,
		WorkMailActions.actionGetImpersonationRoleEffect,
		WorkMailActions.actionGetJournalingRules,
		WorkMailActions.actionGetMailDomain,
		WorkMailActions.actionGetMailDomainDetails,
		WorkMailActions.actionGetMailboxDetails,
		WorkMailActions.actionGetMobileDeviceAccessEffect,
		WorkMailActions.actionGetMobileDeviceAccessOverride,
		WorkMailActions.actionGetMobileDeviceDetails,
		WorkMailActions.actionGetMobileDevicesForUser,
		WorkMailActions.actionGetMobilePolicyDetails,
		WorkMailActions.actionGetPersonalAccessTokenMetadata,
		WorkMailActions.ListAccessControlRules,
		WorkMailActions.ListAvailabilityConfigurations,
		WorkMailActions.ListMobileDeviceAccessOverrides,
		WorkMailActions.ListMobileDeviceAccessRules,
		WorkMailActions.SearchMembers,
		WorkMailActions.TestAvailabilityConfiguration,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WorkMailActions.AllowVendedLogDeliveryForResource,
		WorkMailActions.AssociateDelegateToResource,
		WorkMailActions.AssociateMemberToGroup,
		WorkMailActions.AssumeImpersonationRole,
		WorkMailActions.CancelMailboxExportJob,
		WorkMailActions.CreateAlias,
		WorkMailActions.CreateAvailabilityConfiguration,
		WorkMailActions.CreateGroup,
		WorkMailActions.CreateIdentityCenterApplication,
		WorkMailActions.CreateImpersonationRole,
		WorkMailActions.CreateInboundMailFlowRule,
		WorkMailActions.CreateMailDomain,
		WorkMailActions.CreateMobileDeviceAccessRule,
		WorkMailActions.CreateOrganization,
		WorkMailActions.CreateOutboundMailFlowRule,
		WorkMailActions.CreateResource,
		WorkMailActions.CreateSmtpGateway,
		WorkMailActions.CreateUser,
		WorkMailActions.DeleteAccessControlRule,
		WorkMailActions.DeleteAlias,
		WorkMailActions.DeleteAvailabilityConfiguration,
		WorkMailActions.DeleteEmailMonitoringConfiguration,
		WorkMailActions.DeleteGroup,
		WorkMailActions.DeleteIdentityCenterApplication,
		WorkMailActions.DeleteIdentityProviderConfiguration,
		WorkMailActions.DeleteImpersonationRole,
		WorkMailActions.DeleteInboundMailFlowRule,
		WorkMailActions.DeleteMailDomain,
		WorkMailActions.DeleteMailboxPermissions,
		WorkMailActions.DeleteMobileDevice,
		WorkMailActions.DeleteMobileDeviceAccessOverride,
		WorkMailActions.DeleteMobileDeviceAccessRule,
		WorkMailActions.DeleteOrganization,
		WorkMailActions.DeleteOutboundMailFlowRule,
		WorkMailActions.DeletePersonalAccessToken,
		WorkMailActions.DeleteResource,
		WorkMailActions.DeleteRetentionPolicy,
		WorkMailActions.DeleteSmtpGateway,
		WorkMailActions.DeleteUser,
		WorkMailActions.DeliverToMailbox,
		WorkMailActions.DeregisterFromWorkMail,
		WorkMailActions.DeregisterMailDomain,
		WorkMailActions.DisassociateDelegateFromResource,
		WorkMailActions.DisassociateMemberFromGroup,
		WorkMailActions.EnableMailDomain,
		WorkMailActions.PutAccessControlRule,
		WorkMailActions.PutEmailMonitoringConfiguration,
		WorkMailActions.PutIdentityProviderConfiguration,
		WorkMailActions.PutInboundDmarcSettings,
		WorkMailActions.PutMailboxPermissions,
		WorkMailActions.PutMobileDeviceAccessOverride,
		WorkMailActions.PutRetentionPolicy,
		WorkMailActions.RegisterMailDomain,
		WorkMailActions.RegisterToWorkMail,
		WorkMailActions.ResetPassword,
		WorkMailActions.actionSetDefaultMailDomain,
		WorkMailActions.actionSetJournalingRules,
		WorkMailActions.actionSetMobilePolicyDetails,
		WorkMailActions.StartMailboxExportJob,
		WorkMailActions.TestInboundMailFlowRules,
		WorkMailActions.TestOutboundMailFlowRules,
		WorkMailActions.UpdateAvailabilityConfiguration,
		WorkMailActions.UpdateDefaultMailDomain,
		WorkMailActions.UpdateGroup,
		WorkMailActions.UpdateImpersonationRole,
		WorkMailActions.UpdateInboundMailFlowRule,
		WorkMailActions.UpdateMailboxQuota,
		WorkMailActions.UpdateMobileDeviceAccessRule,
		WorkMailActions.UpdateOutboundMailFlowRule,
		WorkMailActions.UpdatePrimaryEmailAddress,
		WorkMailActions.UpdateResource,
		WorkMailActions.UpdateSmtpGateway,
		WorkMailActions.UpdateUser,
		WorkMailActions.WipeMobileDevice,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WorkMailActions.DescribeGroup,
		WorkMailActions.DescribeMailDomains,
		WorkMailActions.DescribeOrganization,
		WorkMailActions.DescribeResource,
		WorkMailActions.DescribeUser,
		WorkMailActions.ListAliases,
		WorkMailActions.ListGroupMembers,
		WorkMailActions.ListGroups,
		WorkMailActions.ListGroupsForEntity,
		WorkMailActions.ListImpersonationRoles,
		WorkMailActions.ListInboundMailFlowRules,
		WorkMailActions.ListMailDomains,
		WorkMailActions.ListMailboxExportJobs,
		WorkMailActions.ListMailboxPermissions,
		WorkMailActions.ListOrganizations,
		WorkMailActions.ListOutboundMailFlowRules,
		WorkMailActions.ListPersonalAccessTokens,
		WorkMailActions.ListResourceDelegates,
		WorkMailActions.ListResources,
		WorkMailActions.ListSmtpGateways,
		WorkMailActions.ListTagsForResource,
		WorkMailActions.ListUsers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WorkMailActions.TagResource,
		WorkMailActions.UntagResource,
	];
}

/**
 * Properties for building a organization ARN.
 */
export interface WorkMailOrganizationArnProps {
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
 * Parsed components of a organization ARN.
 */
export interface WorkMailOrganizationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const OrganizationArnRegex =
	/^arn:(?<partition>[^:]+):workmail:(?<region>[^:]*):(?<account>[^:]*):organization\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for workmail resources.
 */
export class WorkMailResources {
	/**
	 * Builds an ARN for the organization resource.
	 */
	static organization(props: WorkMailOrganizationArnProps): string {
		return `arn:${props.partition ?? "aws"}:workmail:${props.region ?? "*"}:${props.account ?? "*"}:organization/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organization resource.
	 */
	static isValidOrganizationArn(arn: string): boolean {
		return OrganizationArnRegex.test(arn);
	}

	/**
	 * Parses a organization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationArn(arn: string): WorkMailOrganizationArnComponents {
		const match = OrganizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for workmail.
 */
export class WorkMailOperations {
	/** IAM actions required for the AssociateDelegateToResource API call. */
	static readonly AssociateDelegateToResource: string[] = [
		"workmail:AssociateDelegateToResource",
	];
	/** IAM actions required for the AssociateMemberToGroup API call. */
	static readonly AssociateMemberToGroup: string[] = [
		"workmail:AssociateMemberToGroup",
	];
	/** IAM actions required for the AssumeImpersonationRole API call. */
	static readonly AssumeImpersonationRole: string[] = [
		"workmail:AssumeImpersonationRole",
	];
	/** IAM actions required for the CancelMailboxExportJob API call. */
	static readonly CancelMailboxExportJob: string[] = [
		"workmail:CancelMailboxExportJob",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CreateAlias: string[] = ["workmail:CreateAlias"];
	/** IAM actions required for the CreateAvailabilityConfiguration API call. */
	static readonly CreateAvailabilityConfiguration: string[] = [
		"workmail:CreateAvailabilityConfiguration",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CreateGroup: string[] = ["workmail:CreateGroup"];
	/** IAM actions required for the CreateIdentityCenterApplication API call. */
	static readonly CreateIdentityCenterApplication: string[] = [
		"workmail:CreateIdentityCenterApplication",
	];
	/** IAM actions required for the CreateImpersonationRole API call. */
	static readonly CreateImpersonationRole: string[] = [
		"workmail:CreateImpersonationRole",
	];
	/** IAM actions required for the CreateMobileDeviceAccessRule API call. */
	static readonly CreateMobileDeviceAccessRule: string[] = [
		"workmail:CreateMobileDeviceAccessRule",
	];
	/** IAM actions required for the CreateOrganization API call. */
	static readonly CreateOrganization: string[] = [
		"workmail:CreateOrganization",
	];
	/** IAM actions required for the CreateResource API call. */
	static readonly CreateResource: string[] = ["workmail:CreateResource"];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = ["workmail:CreateUser"];
	/** IAM actions required for the DeleteAccessControlRule API call. */
	static readonly DeleteAccessControlRule: string[] = [
		"workmail:DeleteAccessControlRule",
	];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DeleteAlias: string[] = ["workmail:DeleteAlias"];
	/** IAM actions required for the DeleteAvailabilityConfiguration API call. */
	static readonly DeleteAvailabilityConfiguration: string[] = [
		"workmail:DeleteAvailabilityConfiguration",
	];
	/** IAM actions required for the DeleteEmailMonitoringConfiguration API call. */
	static readonly DeleteEmailMonitoringConfiguration: string[] = [
		"workmail:DeleteEmailMonitoringConfiguration",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = ["workmail:DeleteGroup"];
	/** IAM actions required for the DeleteIdentityCenterApplication API call. */
	static readonly DeleteIdentityCenterApplication: string[] = [
		"workmail:DeleteIdentityCenterApplication",
	];
	/** IAM actions required for the DeleteIdentityProviderConfiguration API call. */
	static readonly DeleteIdentityProviderConfiguration: string[] = [
		"workmail:DeleteIdentityProviderConfiguration",
	];
	/** IAM actions required for the DeleteImpersonationRole API call. */
	static readonly DeleteImpersonationRole: string[] = [
		"workmail:DeleteImpersonationRole",
	];
	/** IAM actions required for the DeleteMailboxPermissions API call. */
	static readonly DeleteMailboxPermissions: string[] = [
		"workmail:DeleteMailboxPermissions",
	];
	/** IAM actions required for the DeleteMobileDeviceAccessOverride API call. */
	static readonly DeleteMobileDeviceAccessOverride: string[] = [
		"workmail:DeleteMobileDeviceAccessOverride",
	];
	/** IAM actions required for the DeleteMobileDeviceAccessRule API call. */
	static readonly DeleteMobileDeviceAccessRule: string[] = [
		"workmail:DeleteMobileDeviceAccessRule",
	];
	/** IAM actions required for the DeleteOrganization API call. */
	static readonly DeleteOrganization: string[] = [
		"workmail:DeleteOrganization",
	];
	/** IAM actions required for the DeletePersonalAccessToken API call. */
	static readonly DeletePersonalAccessToken: string[] = [
		"workmail:DeletePersonalAccessToken",
	];
	/** IAM actions required for the DeleteResource API call. */
	static readonly DeleteResource: string[] = ["workmail:DeleteResource"];
	/** IAM actions required for the DeleteRetentionPolicy API call. */
	static readonly DeleteRetentionPolicy: string[] = [
		"workmail:DeleteRetentionPolicy",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["workmail:DeleteUser"];
	/** IAM actions required for the DeregisterFromWorkMail API call. */
	static readonly DeregisterFromWorkMail: string[] = [
		"workmail:DeregisterFromWorkMail",
	];
	/** IAM actions required for the DeregisterMailDomain API call. */
	static readonly DeregisterMailDomain: string[] = [
		"workmail:DeregisterMailDomain",
	];
	/** IAM actions required for the DescribeEmailMonitoringConfiguration API call. */
	static readonly DescribeEmailMonitoringConfiguration: string[] = [
		"workmail:DescribeEmailMonitoringConfiguration",
	];
	/** IAM actions required for the DescribeEntity API call. */
	static readonly DescribeEntity: string[] = ["workmail:DescribeEntity"];
	/** IAM actions required for the DescribeGroup API call. */
	static readonly DescribeGroup: string[] = ["workmail:DescribeGroup"];
	/** IAM actions required for the DescribeIdentityProviderConfiguration API call. */
	static readonly DescribeIdentityProviderConfiguration: string[] = [
		"workmail:DescribeIdentityProviderConfiguration",
	];
	/** IAM actions required for the DescribeInboundDmarcSettings API call. */
	static readonly DescribeInboundDmarcSettings: string[] = [
		"workmail:DescribeInboundDmarcSettings",
	];
	/** IAM actions required for the DescribeMailboxExportJob API call. */
	static readonly DescribeMailboxExportJob: string[] = [
		"workmail:DescribeMailboxExportJob",
	];
	/** IAM actions required for the DescribeOrganization API call. */
	static readonly DescribeOrganization: string[] = [
		"workmail:DescribeOrganization",
	];
	/** IAM actions required for the DescribeResource API call. */
	static readonly DescribeResource: string[] = ["workmail:DescribeResource"];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DescribeUser: string[] = ["workmail:DescribeUser"];
	/** IAM actions required for the DisassociateDelegateFromResource API call. */
	static readonly DisassociateDelegateFromResource: string[] = [
		"workmail:DisassociateDelegateFromResource",
	];
	/** IAM actions required for the DisassociateMemberFromGroup API call. */
	static readonly DisassociateMemberFromGroup: string[] = [
		"workmail:DisassociateMemberFromGroup",
	];
	/** IAM actions required for the GetAccessControlEffect API call. */
	static readonly opGetAccessControlEffect: string[] = [
		"workmail:GetAccessControlEffect",
	];
	/** IAM actions required for the GetDefaultRetentionPolicy API call. */
	static readonly opGetDefaultRetentionPolicy: string[] = [
		"workmail:GetDefaultRetentionPolicy",
	];
	/** IAM actions required for the GetImpersonationRole API call. */
	static readonly opGetImpersonationRole: string[] = [
		"workmail:GetImpersonationRole",
	];
	/** IAM actions required for the GetImpersonationRoleEffect API call. */
	static readonly opGetImpersonationRoleEffect: string[] = [
		"workmail:GetImpersonationRoleEffect",
	];
	/** IAM actions required for the GetMailDomain API call. */
	static readonly opGetMailDomain: string[] = ["workmail:GetMailDomain"];
	/** IAM actions required for the GetMailboxDetails API call. */
	static readonly opGetMailboxDetails: string[] = [
		"workmail:GetMailboxDetails",
	];
	/** IAM actions required for the GetMobileDeviceAccessEffect API call. */
	static readonly opGetMobileDeviceAccessEffect: string[] = [
		"workmail:GetMobileDeviceAccessEffect",
	];
	/** IAM actions required for the GetMobileDeviceAccessOverride API call. */
	static readonly opGetMobileDeviceAccessOverride: string[] = [
		"workmail:GetMobileDeviceAccessOverride",
	];
	/** IAM actions required for the GetPersonalAccessTokenMetadata API call. */
	static readonly opGetPersonalAccessTokenMetadata: string[] = [
		"workmail:GetPersonalAccessTokenMetadata",
	];
	/** IAM actions required for the ListAccessControlRules API call. */
	static readonly ListAccessControlRules: string[] = [
		"workmail:ListAccessControlRules",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly ListAliases: string[] = ["workmail:ListAliases"];
	/** IAM actions required for the ListAvailabilityConfigurations API call. */
	static readonly ListAvailabilityConfigurations: string[] = [
		"workmail:ListAvailabilityConfigurations",
	];
	/** IAM actions required for the ListGroupMembers API call. */
	static readonly ListGroupMembers: string[] = ["workmail:ListGroupMembers"];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = ["workmail:ListGroups"];
	/** IAM actions required for the ListGroupsForEntity API call. */
	static readonly ListGroupsForEntity: string[] = [
		"workmail:ListGroupsForEntity",
	];
	/** IAM actions required for the ListImpersonationRoles API call. */
	static readonly ListImpersonationRoles: string[] = [
		"workmail:ListImpersonationRoles",
	];
	/** IAM actions required for the ListMailDomains API call. */
	static readonly ListMailDomains: string[] = ["workmail:ListMailDomains"];
	/** IAM actions required for the ListMailboxExportJobs API call. */
	static readonly ListMailboxExportJobs: string[] = [
		"workmail:ListMailboxExportJobs",
	];
	/** IAM actions required for the ListMailboxPermissions API call. */
	static readonly ListMailboxPermissions: string[] = [
		"workmail:ListMailboxPermissions",
	];
	/** IAM actions required for the ListMobileDeviceAccessOverrides API call. */
	static readonly ListMobileDeviceAccessOverrides: string[] = [
		"workmail:ListMobileDeviceAccessOverrides",
	];
	/** IAM actions required for the ListMobileDeviceAccessRules API call. */
	static readonly ListMobileDeviceAccessRules: string[] = [
		"workmail:ListMobileDeviceAccessRules",
	];
	/** IAM actions required for the ListOrganizations API call. */
	static readonly ListOrganizations: string[] = ["workmail:ListOrganizations"];
	/** IAM actions required for the ListPersonalAccessTokens API call. */
	static readonly ListPersonalAccessTokens: string[] = [
		"workmail:ListPersonalAccessTokens",
	];
	/** IAM actions required for the ListResourceDelegates API call. */
	static readonly ListResourceDelegates: string[] = [
		"workmail:ListResourceDelegates",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly ListResources: string[] = ["workmail:ListResources"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"workmail:ListTagsForResource",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["workmail:ListUsers"];
	/** IAM actions required for the PutAccessControlRule API call. */
	static readonly PutAccessControlRule: string[] = [
		"workmail:PutAccessControlRule",
	];
	/** IAM actions required for the PutEmailMonitoringConfiguration API call. */
	static readonly PutEmailMonitoringConfiguration: string[] = [
		"iam:PassRole",
		"workmail:PutEmailMonitoringConfiguration",
	];
	/** IAM actions required for the PutIdentityProviderConfiguration API call. */
	static readonly PutIdentityProviderConfiguration: string[] = [
		"workmail:PutIdentityProviderConfiguration",
	];
	/** IAM actions required for the PutInboundDmarcSettings API call. */
	static readonly PutInboundDmarcSettings: string[] = [
		"workmail:PutInboundDmarcSettings",
	];
	/** IAM actions required for the PutMailboxPermissions API call. */
	static readonly PutMailboxPermissions: string[] = [
		"workmail:PutMailboxPermissions",
	];
	/** IAM actions required for the PutMobileDeviceAccessOverride API call. */
	static readonly PutMobileDeviceAccessOverride: string[] = [
		"workmail:PutMobileDeviceAccessOverride",
	];
	/** IAM actions required for the PutRetentionPolicy API call. */
	static readonly PutRetentionPolicy: string[] = [
		"workmail:PutRetentionPolicy",
	];
	/** IAM actions required for the RegisterMailDomain API call. */
	static readonly RegisterMailDomain: string[] = [
		"workmail:RegisterMailDomain",
	];
	/** IAM actions required for the RegisterToWorkMail API call. */
	static readonly RegisterToWorkMail: string[] = [
		"workmail:RegisterToWorkMail",
	];
	/** IAM actions required for the ResetPassword API call. */
	static readonly ResetPassword: string[] = ["workmail:ResetPassword"];
	/** IAM actions required for the StartMailboxExportJob API call. */
	static readonly StartMailboxExportJob: string[] = [
		"iam:PassRole",
		"workmail:StartMailboxExportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["workmail:TagResource"];
	/** IAM actions required for the TestAvailabilityConfiguration API call. */
	static readonly TestAvailabilityConfiguration: string[] = [
		"workmail:TestAvailabilityConfiguration",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["workmail:UntagResource"];
	/** IAM actions required for the UpdateAvailabilityConfiguration API call. */
	static readonly UpdateAvailabilityConfiguration: string[] = [
		"workmail:UpdateAvailabilityConfiguration",
	];
	/** IAM actions required for the UpdateDefaultMailDomain API call. */
	static readonly UpdateDefaultMailDomain: string[] = [
		"workmail:UpdateDefaultMailDomain",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UpdateGroup: string[] = ["workmail:UpdateGroup"];
	/** IAM actions required for the UpdateImpersonationRole API call. */
	static readonly UpdateImpersonationRole: string[] = [
		"workmail:UpdateImpersonationRole",
	];
	/** IAM actions required for the UpdateMailboxQuota API call. */
	static readonly UpdateMailboxQuota: string[] = [
		"workmail:UpdateMailboxQuota",
	];
	/** IAM actions required for the UpdateMobileDeviceAccessRule API call. */
	static readonly UpdateMobileDeviceAccessRule: string[] = [
		"workmail:UpdateMobileDeviceAccessRule",
	];
	/** IAM actions required for the UpdatePrimaryEmailAddress API call. */
	static readonly UpdatePrimaryEmailAddress: string[] = [
		"workmail:UpdatePrimaryEmailAddress",
	];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UpdateResource: string[] = ["workmail:UpdateResource"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = ["workmail:UpdateUser"];
}

/**
 * Condition key constants and builders for workmail.
 */
export class WorkMailConditions {
	/** Condition keys applicable to the AssumeImpersonationRole action. */
	static readonly AssumeImpersonationRoleConditionKeys: string[] = [
		"workmail:ImpersonationRoleId",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: workmail:ImpersonationRoleId (String) */
	static readonly IMPERSONATION_ROLE_ID = "workmail:ImpersonationRoleId";

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
	 * Generates a condition block for `workmail:ImpersonationRoleId`.
	 */
	static impersonationRoleId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "workmail:ImpersonationRoleId": value } };
	}
}
