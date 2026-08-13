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
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"workmail:AllowVendedLogDeliveryForResource";
	/** [Write] workmail:AssociateDelegateToResource */
	static readonly ASSOCIATE_DELEGATE_TO_RESOURCE =
		"workmail:AssociateDelegateToResource";
	/** [Write] workmail:AssociateMemberToGroup */
	static readonly ASSOCIATE_MEMBER_TO_GROUP = "workmail:AssociateMemberToGroup";
	/** [Write] workmail:AssumeImpersonationRole */
	static readonly ASSUME_IMPERSONATION_ROLE =
		"workmail:AssumeImpersonationRole";
	/** [Write] workmail:CancelMailboxExportJob */
	static readonly CANCEL_MAILBOX_EXPORT_JOB = "workmail:CancelMailboxExportJob";
	/** [Write] workmail:CreateAlias */
	static readonly CREATE_ALIAS = "workmail:CreateAlias";
	/** [Write] workmail:CreateAvailabilityConfiguration */
	static readonly CREATE_AVAILABILITY_CONFIGURATION =
		"workmail:CreateAvailabilityConfiguration";
	/** [Write] workmail:CreateGroup */
	static readonly CREATE_GROUP = "workmail:CreateGroup";
	/** [Write] workmail:CreateIdentityCenterApplication */
	static readonly CREATE_IDENTITY_CENTER_APPLICATION =
		"workmail:CreateIdentityCenterApplication";
	/** [Write] workmail:CreateImpersonationRole */
	static readonly CREATE_IMPERSONATION_ROLE =
		"workmail:CreateImpersonationRole";
	/** [Write] workmail:CreateInboundMailFlowRule */
	static readonly CREATE_INBOUND_MAIL_FLOW_RULE =
		"workmail:CreateInboundMailFlowRule";
	/** [Write] workmail:CreateMailDomain */
	static readonly CREATE_MAIL_DOMAIN = "workmail:CreateMailDomain";
	/** [Write] workmail:CreateMobileDeviceAccessRule */
	static readonly CREATE_MOBILE_DEVICE_ACCESS_RULE =
		"workmail:CreateMobileDeviceAccessRule";
	/** [Write] workmail:CreateOrganization */
	static readonly CREATE_ORGANIZATION = "workmail:CreateOrganization";
	/** [Write] workmail:CreateOutboundMailFlowRule */
	static readonly CREATE_OUTBOUND_MAIL_FLOW_RULE =
		"workmail:CreateOutboundMailFlowRule";
	/** [Write] workmail:CreateResource */
	static readonly CREATE_RESOURCE = "workmail:CreateResource";
	/** [Write] workmail:CreateSmtpGateway */
	static readonly CREATE_SMTP_GATEWAY = "workmail:CreateSmtpGateway";
	/** [Write] workmail:CreateUser */
	static readonly CREATE_USER = "workmail:CreateUser";
	/** [Write] workmail:DeleteAccessControlRule */
	static readonly DELETE_ACCESS_CONTROL_RULE =
		"workmail:DeleteAccessControlRule";
	/** [Write] workmail:DeleteAlias */
	static readonly DELETE_ALIAS = "workmail:DeleteAlias";
	/** [Write] workmail:DeleteAvailabilityConfiguration */
	static readonly DELETE_AVAILABILITY_CONFIGURATION =
		"workmail:DeleteAvailabilityConfiguration";
	/** [Write] workmail:DeleteEmailMonitoringConfiguration */
	static readonly DELETE_EMAIL_MONITORING_CONFIGURATION =
		"workmail:DeleteEmailMonitoringConfiguration";
	/** [Write] workmail:DeleteGroup */
	static readonly DELETE_GROUP = "workmail:DeleteGroup";
	/** [Write] workmail:DeleteIdentityCenterApplication */
	static readonly DELETE_IDENTITY_CENTER_APPLICATION =
		"workmail:DeleteIdentityCenterApplication";
	/** [Write] workmail:DeleteIdentityProviderConfiguration */
	static readonly DELETE_IDENTITY_PROVIDER_CONFIGURATION =
		"workmail:DeleteIdentityProviderConfiguration";
	/** [Write] workmail:DeleteImpersonationRole */
	static readonly DELETE_IMPERSONATION_ROLE =
		"workmail:DeleteImpersonationRole";
	/** [Write] workmail:DeleteInboundMailFlowRule */
	static readonly DELETE_INBOUND_MAIL_FLOW_RULE =
		"workmail:DeleteInboundMailFlowRule";
	/** [Write] workmail:DeleteMailDomain */
	static readonly DELETE_MAIL_DOMAIN = "workmail:DeleteMailDomain";
	/** [Write] workmail:DeleteMailboxPermissions */
	static readonly DELETE_MAILBOX_PERMISSIONS =
		"workmail:DeleteMailboxPermissions";
	/** [Write] workmail:DeleteMobileDevice */
	static readonly DELETE_MOBILE_DEVICE = "workmail:DeleteMobileDevice";
	/** [Write] workmail:DeleteMobileDeviceAccessOverride */
	static readonly DELETE_MOBILE_DEVICE_ACCESS_OVERRIDE =
		"workmail:DeleteMobileDeviceAccessOverride";
	/** [Write] workmail:DeleteMobileDeviceAccessRule */
	static readonly DELETE_MOBILE_DEVICE_ACCESS_RULE =
		"workmail:DeleteMobileDeviceAccessRule";
	/** [Write] workmail:DeleteOrganization */
	static readonly DELETE_ORGANIZATION = "workmail:DeleteOrganization";
	/** [Write] workmail:DeleteOutboundMailFlowRule */
	static readonly DELETE_OUTBOUND_MAIL_FLOW_RULE =
		"workmail:DeleteOutboundMailFlowRule";
	/** [Write] workmail:DeletePersonalAccessToken */
	static readonly DELETE_PERSONAL_ACCESS_TOKEN =
		"workmail:DeletePersonalAccessToken";
	/** [Write] workmail:DeleteResource */
	static readonly DELETE_RESOURCE = "workmail:DeleteResource";
	/** [Write] workmail:DeleteRetentionPolicy */
	static readonly DELETE_RETENTION_POLICY = "workmail:DeleteRetentionPolicy";
	/** [Write] workmail:DeleteSmtpGateway */
	static readonly DELETE_SMTP_GATEWAY = "workmail:DeleteSmtpGateway";
	/** [Write] workmail:DeleteUser */
	static readonly DELETE_USER = "workmail:DeleteUser";
	/** [Write] workmail:DeliverToMailbox */
	static readonly DELIVER_TO_MAILBOX = "workmail:DeliverToMailbox";
	/** [Write] workmail:DeregisterFromWorkMail */
	static readonly DEREGISTER_FROM_WORK_MAIL = "workmail:DeregisterFromWorkMail";
	/** [Write] workmail:DeregisterMailDomain */
	static readonly DEREGISTER_MAIL_DOMAIN = "workmail:DeregisterMailDomain";
	/** [Read] workmail:DescribeEmailMonitoringConfiguration */
	static readonly DESCRIBE_EMAIL_MONITORING_CONFIGURATION =
		"workmail:DescribeEmailMonitoringConfiguration";
	/** [Read] workmail:DescribeEntity */
	static readonly DESCRIBE_ENTITY = "workmail:DescribeEntity";
	/** [List] workmail:DescribeGroup */
	static readonly DESCRIBE_GROUP = "workmail:DescribeGroup";
	/** [Read] workmail:DescribeIdentityProviderConfiguration */
	static readonly DESCRIBE_IDENTITY_PROVIDER_CONFIGURATION =
		"workmail:DescribeIdentityProviderConfiguration";
	/** [Read] workmail:DescribeInboundDmarcSettings */
	static readonly DESCRIBE_INBOUND_DMARC_SETTINGS =
		"workmail:DescribeInboundDmarcSettings";
	/** [Read] workmail:DescribeInboundMailFlowRule */
	static readonly DESCRIBE_INBOUND_MAIL_FLOW_RULE =
		"workmail:DescribeInboundMailFlowRule";
	/** [List] workmail:DescribeMailDomains */
	static readonly DESCRIBE_MAIL_DOMAINS = "workmail:DescribeMailDomains";
	/** [Read] workmail:DescribeMailboxExportJob */
	static readonly DESCRIBE_MAILBOX_EXPORT_JOB =
		"workmail:DescribeMailboxExportJob";
	/** [List] workmail:DescribeOrganization */
	static readonly DESCRIBE_ORGANIZATION = "workmail:DescribeOrganization";
	/** [Read] workmail:DescribeOutboundMailFlowRule */
	static readonly DESCRIBE_OUTBOUND_MAIL_FLOW_RULE =
		"workmail:DescribeOutboundMailFlowRule";
	/** [List] workmail:DescribeResource */
	static readonly DESCRIBE_RESOURCE = "workmail:DescribeResource";
	/** [Read] workmail:DescribeSmtpGateway */
	static readonly DESCRIBE_SMTP_GATEWAY = "workmail:DescribeSmtpGateway";
	/** [List] workmail:DescribeUser */
	static readonly DESCRIBE_USER = "workmail:DescribeUser";
	/** [Write] workmail:DisassociateDelegateFromResource */
	static readonly DISASSOCIATE_DELEGATE_FROM_RESOURCE =
		"workmail:DisassociateDelegateFromResource";
	/** [Write] workmail:DisassociateMemberFromGroup */
	static readonly DISASSOCIATE_MEMBER_FROM_GROUP =
		"workmail:DisassociateMemberFromGroup";
	/** [Write] workmail:EnableMailDomain */
	static readonly ENABLE_MAIL_DOMAIN = "workmail:EnableMailDomain";
	/** [Read] workmail:GetAccessControlEffect */
	static readonly GET_ACCESS_CONTROL_EFFECT = "workmail:GetAccessControlEffect";
	/** [Read] workmail:GetDefaultRetentionPolicy */
	static readonly GET_DEFAULT_RETENTION_POLICY =
		"workmail:GetDefaultRetentionPolicy";
	/** [Read] workmail:GetImpersonationRole */
	static readonly GET_IMPERSONATION_ROLE = "workmail:GetImpersonationRole";
	/** [Read] workmail:GetImpersonationRoleEffect */
	static readonly GET_IMPERSONATION_ROLE_EFFECT =
		"workmail:GetImpersonationRoleEffect";
	/** [Read] workmail:GetJournalingRules */
	static readonly GET_JOURNALING_RULES = "workmail:GetJournalingRules";
	/** [Read] workmail:GetMailDomain */
	static readonly GET_MAIL_DOMAIN = "workmail:GetMailDomain";
	/** [Read] workmail:GetMailDomainDetails */
	static readonly GET_MAIL_DOMAIN_DETAILS = "workmail:GetMailDomainDetails";
	/** [Read] workmail:GetMailboxDetails */
	static readonly GET_MAILBOX_DETAILS = "workmail:GetMailboxDetails";
	/** [Read] workmail:GetMobileDeviceAccessEffect */
	static readonly GET_MOBILE_DEVICE_ACCESS_EFFECT =
		"workmail:GetMobileDeviceAccessEffect";
	/** [Read] workmail:GetMobileDeviceAccessOverride */
	static readonly GET_MOBILE_DEVICE_ACCESS_OVERRIDE =
		"workmail:GetMobileDeviceAccessOverride";
	/** [Read] workmail:GetMobileDeviceDetails */
	static readonly GET_MOBILE_DEVICE_DETAILS = "workmail:GetMobileDeviceDetails";
	/** [Read] workmail:GetMobileDevicesForUser */
	static readonly GET_MOBILE_DEVICES_FOR_USER =
		"workmail:GetMobileDevicesForUser";
	/** [Read] workmail:GetMobilePolicyDetails */
	static readonly GET_MOBILE_POLICY_DETAILS = "workmail:GetMobilePolicyDetails";
	/** [Read] workmail:GetPersonalAccessTokenMetadata */
	static readonly GET_PERSONAL_ACCESS_TOKEN_METADATA =
		"workmail:GetPersonalAccessTokenMetadata";
	/** [Read] workmail:ListAccessControlRules */
	static readonly LIST_ACCESS_CONTROL_RULES = "workmail:ListAccessControlRules";
	/** [List] workmail:ListAliases */
	static readonly LIST_ALIASES = "workmail:ListAliases";
	/** [Read] workmail:ListAvailabilityConfigurations */
	static readonly LIST_AVAILABILITY_CONFIGURATIONS =
		"workmail:ListAvailabilityConfigurations";
	/** [List] workmail:ListGroupMembers */
	static readonly LIST_GROUP_MEMBERS = "workmail:ListGroupMembers";
	/** [List] workmail:ListGroups */
	static readonly LIST_GROUPS = "workmail:ListGroups";
	/** [List] workmail:ListGroupsForEntity */
	static readonly LIST_GROUPS_FOR_ENTITY = "workmail:ListGroupsForEntity";
	/** [List] workmail:ListImpersonationRoles */
	static readonly LIST_IMPERSONATION_ROLES = "workmail:ListImpersonationRoles";
	/** [List] workmail:ListInboundMailFlowRules */
	static readonly LIST_INBOUND_MAIL_FLOW_RULES =
		"workmail:ListInboundMailFlowRules";
	/** [List] workmail:ListMailDomains */
	static readonly LIST_MAIL_DOMAINS = "workmail:ListMailDomains";
	/** [List] workmail:ListMailboxExportJobs */
	static readonly LIST_MAILBOX_EXPORT_JOBS = "workmail:ListMailboxExportJobs";
	/** [List] workmail:ListMailboxPermissions */
	static readonly LIST_MAILBOX_PERMISSIONS = "workmail:ListMailboxPermissions";
	/** [Read] workmail:ListMobileDeviceAccessOverrides */
	static readonly LIST_MOBILE_DEVICE_ACCESS_OVERRIDES =
		"workmail:ListMobileDeviceAccessOverrides";
	/** [Read] workmail:ListMobileDeviceAccessRules */
	static readonly LIST_MOBILE_DEVICE_ACCESS_RULES =
		"workmail:ListMobileDeviceAccessRules";
	/** [List] workmail:ListOrganizations */
	static readonly LIST_ORGANIZATIONS = "workmail:ListOrganizations";
	/** [List] workmail:ListOutboundMailFlowRules */
	static readonly LIST_OUTBOUND_MAIL_FLOW_RULES =
		"workmail:ListOutboundMailFlowRules";
	/** [List] workmail:ListPersonalAccessTokens */
	static readonly LIST_PERSONAL_ACCESS_TOKENS =
		"workmail:ListPersonalAccessTokens";
	/** [List] workmail:ListResourceDelegates */
	static readonly LIST_RESOURCE_DELEGATES = "workmail:ListResourceDelegates";
	/** [List] workmail:ListResources */
	static readonly LIST_RESOURCES = "workmail:ListResources";
	/** [List] workmail:ListSmtpGateways */
	static readonly LIST_SMTP_GATEWAYS = "workmail:ListSmtpGateways";
	/** [List] workmail:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "workmail:ListTagsForResource";
	/** [List] workmail:ListUsers */
	static readonly LIST_USERS = "workmail:ListUsers";
	/** [Write] workmail:PutAccessControlRule */
	static readonly PUT_ACCESS_CONTROL_RULE = "workmail:PutAccessControlRule";
	/** [Write] workmail:PutEmailMonitoringConfiguration */
	static readonly PUT_EMAIL_MONITORING_CONFIGURATION =
		"workmail:PutEmailMonitoringConfiguration";
	/** [Write] workmail:PutIdentityProviderConfiguration */
	static readonly PUT_IDENTITY_PROVIDER_CONFIGURATION =
		"workmail:PutIdentityProviderConfiguration";
	/** [Write] workmail:PutInboundDmarcSettings */
	static readonly PUT_INBOUND_DMARC_SETTINGS =
		"workmail:PutInboundDmarcSettings";
	/** [Write] workmail:PutMailboxPermissions */
	static readonly PUT_MAILBOX_PERMISSIONS = "workmail:PutMailboxPermissions";
	/** [Write] workmail:PutMobileDeviceAccessOverride */
	static readonly PUT_MOBILE_DEVICE_ACCESS_OVERRIDE =
		"workmail:PutMobileDeviceAccessOverride";
	/** [Write] workmail:PutRetentionPolicy */
	static readonly PUT_RETENTION_POLICY = "workmail:PutRetentionPolicy";
	/** [Write] workmail:RegisterMailDomain */
	static readonly REGISTER_MAIL_DOMAIN = "workmail:RegisterMailDomain";
	/** [Write] workmail:RegisterToWorkMail */
	static readonly REGISTER_TO_WORK_MAIL = "workmail:RegisterToWorkMail";
	/** [Write] workmail:ResetPassword */
	static readonly RESET_PASSWORD = "workmail:ResetPassword";
	/** [Read] workmail:SearchMembers */
	static readonly SEARCH_MEMBERS = "workmail:SearchMembers";
	/** [Write] workmail:SetDefaultMailDomain */
	static readonly SET_DEFAULT_MAIL_DOMAIN = "workmail:SetDefaultMailDomain";
	/** [Write] workmail:SetJournalingRules */
	static readonly SET_JOURNALING_RULES = "workmail:SetJournalingRules";
	/** [Write] workmail:SetMobilePolicyDetails */
	static readonly SET_MOBILE_POLICY_DETAILS = "workmail:SetMobilePolicyDetails";
	/** [Write] workmail:StartMailboxExportJob */
	static readonly START_MAILBOX_EXPORT_JOB = "workmail:StartMailboxExportJob";
	/** [Tagging] workmail:TagResource */
	static readonly TAG_RESOURCE = "workmail:TagResource";
	/** [Read] workmail:TestAvailabilityConfiguration */
	static readonly TEST_AVAILABILITY_CONFIGURATION =
		"workmail:TestAvailabilityConfiguration";
	/** [Write] workmail:TestInboundMailFlowRules */
	static readonly TEST_INBOUND_MAIL_FLOW_RULES =
		"workmail:TestInboundMailFlowRules";
	/** [Write] workmail:TestOutboundMailFlowRules */
	static readonly TEST_OUTBOUND_MAIL_FLOW_RULES =
		"workmail:TestOutboundMailFlowRules";
	/** [Tagging] workmail:UntagResource */
	static readonly UNTAG_RESOURCE = "workmail:UntagResource";
	/** [Write] workmail:UpdateAvailabilityConfiguration */
	static readonly UPDATE_AVAILABILITY_CONFIGURATION =
		"workmail:UpdateAvailabilityConfiguration";
	/** [Write] workmail:UpdateDefaultMailDomain */
	static readonly UPDATE_DEFAULT_MAIL_DOMAIN =
		"workmail:UpdateDefaultMailDomain";
	/** [Write] workmail:UpdateGroup */
	static readonly UPDATE_GROUP = "workmail:UpdateGroup";
	/** [Write] workmail:UpdateImpersonationRole */
	static readonly UPDATE_IMPERSONATION_ROLE =
		"workmail:UpdateImpersonationRole";
	/** [Write] workmail:UpdateInboundMailFlowRule */
	static readonly UPDATE_INBOUND_MAIL_FLOW_RULE =
		"workmail:UpdateInboundMailFlowRule";
	/** [Write] workmail:UpdateMailboxQuota */
	static readonly UPDATE_MAILBOX_QUOTA = "workmail:UpdateMailboxQuota";
	/** [Write] workmail:UpdateMobileDeviceAccessRule */
	static readonly UPDATE_MOBILE_DEVICE_ACCESS_RULE =
		"workmail:UpdateMobileDeviceAccessRule";
	/** [Write] workmail:UpdateOutboundMailFlowRule */
	static readonly UPDATE_OUTBOUND_MAIL_FLOW_RULE =
		"workmail:UpdateOutboundMailFlowRule";
	/** [Write] workmail:UpdatePrimaryEmailAddress */
	static readonly UPDATE_PRIMARY_EMAIL_ADDRESS =
		"workmail:UpdatePrimaryEmailAddress";
	/** [Write] workmail:UpdateResource */
	static readonly UPDATE_RESOURCE = "workmail:UpdateResource";
	/** [Write] workmail:UpdateSmtpGateway */
	static readonly UPDATE_SMTP_GATEWAY = "workmail:UpdateSmtpGateway";
	/** [Write] workmail:UpdateUser */
	static readonly UPDATE_USER = "workmail:UpdateUser";
	/** [Write] workmail:WipeMobileDevice */
	static readonly WIPE_MOBILE_DEVICE = "workmail:WipeMobileDevice";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WorkMailActions.DESCRIBE_EMAIL_MONITORING_CONFIGURATION,
		WorkMailActions.DESCRIBE_ENTITY,
		WorkMailActions.DESCRIBE_IDENTITY_PROVIDER_CONFIGURATION,
		WorkMailActions.DESCRIBE_INBOUND_DMARC_SETTINGS,
		WorkMailActions.DESCRIBE_INBOUND_MAIL_FLOW_RULE,
		WorkMailActions.DESCRIBE_MAILBOX_EXPORT_JOB,
		WorkMailActions.DESCRIBE_OUTBOUND_MAIL_FLOW_RULE,
		WorkMailActions.DESCRIBE_SMTP_GATEWAY,
		WorkMailActions.GET_ACCESS_CONTROL_EFFECT,
		WorkMailActions.GET_DEFAULT_RETENTION_POLICY,
		WorkMailActions.GET_IMPERSONATION_ROLE,
		WorkMailActions.GET_IMPERSONATION_ROLE_EFFECT,
		WorkMailActions.GET_JOURNALING_RULES,
		WorkMailActions.GET_MAIL_DOMAIN,
		WorkMailActions.GET_MAIL_DOMAIN_DETAILS,
		WorkMailActions.GET_MAILBOX_DETAILS,
		WorkMailActions.GET_MOBILE_DEVICE_ACCESS_EFFECT,
		WorkMailActions.GET_MOBILE_DEVICE_ACCESS_OVERRIDE,
		WorkMailActions.GET_MOBILE_DEVICE_DETAILS,
		WorkMailActions.GET_MOBILE_DEVICES_FOR_USER,
		WorkMailActions.GET_MOBILE_POLICY_DETAILS,
		WorkMailActions.GET_PERSONAL_ACCESS_TOKEN_METADATA,
		WorkMailActions.LIST_ACCESS_CONTROL_RULES,
		WorkMailActions.LIST_AVAILABILITY_CONFIGURATIONS,
		WorkMailActions.LIST_MOBILE_DEVICE_ACCESS_OVERRIDES,
		WorkMailActions.LIST_MOBILE_DEVICE_ACCESS_RULES,
		WorkMailActions.SEARCH_MEMBERS,
		WorkMailActions.TEST_AVAILABILITY_CONFIGURATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WorkMailActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
		WorkMailActions.ASSOCIATE_DELEGATE_TO_RESOURCE,
		WorkMailActions.ASSOCIATE_MEMBER_TO_GROUP,
		WorkMailActions.ASSUME_IMPERSONATION_ROLE,
		WorkMailActions.CANCEL_MAILBOX_EXPORT_JOB,
		WorkMailActions.CREATE_ALIAS,
		WorkMailActions.CREATE_AVAILABILITY_CONFIGURATION,
		WorkMailActions.CREATE_GROUP,
		WorkMailActions.CREATE_IDENTITY_CENTER_APPLICATION,
		WorkMailActions.CREATE_IMPERSONATION_ROLE,
		WorkMailActions.CREATE_INBOUND_MAIL_FLOW_RULE,
		WorkMailActions.CREATE_MAIL_DOMAIN,
		WorkMailActions.CREATE_MOBILE_DEVICE_ACCESS_RULE,
		WorkMailActions.CREATE_ORGANIZATION,
		WorkMailActions.CREATE_OUTBOUND_MAIL_FLOW_RULE,
		WorkMailActions.CREATE_RESOURCE,
		WorkMailActions.CREATE_SMTP_GATEWAY,
		WorkMailActions.CREATE_USER,
		WorkMailActions.DELETE_ACCESS_CONTROL_RULE,
		WorkMailActions.DELETE_ALIAS,
		WorkMailActions.DELETE_AVAILABILITY_CONFIGURATION,
		WorkMailActions.DELETE_EMAIL_MONITORING_CONFIGURATION,
		WorkMailActions.DELETE_GROUP,
		WorkMailActions.DELETE_IDENTITY_CENTER_APPLICATION,
		WorkMailActions.DELETE_IDENTITY_PROVIDER_CONFIGURATION,
		WorkMailActions.DELETE_IMPERSONATION_ROLE,
		WorkMailActions.DELETE_INBOUND_MAIL_FLOW_RULE,
		WorkMailActions.DELETE_MAIL_DOMAIN,
		WorkMailActions.DELETE_MAILBOX_PERMISSIONS,
		WorkMailActions.DELETE_MOBILE_DEVICE,
		WorkMailActions.DELETE_MOBILE_DEVICE_ACCESS_OVERRIDE,
		WorkMailActions.DELETE_MOBILE_DEVICE_ACCESS_RULE,
		WorkMailActions.DELETE_ORGANIZATION,
		WorkMailActions.DELETE_OUTBOUND_MAIL_FLOW_RULE,
		WorkMailActions.DELETE_PERSONAL_ACCESS_TOKEN,
		WorkMailActions.DELETE_RESOURCE,
		WorkMailActions.DELETE_RETENTION_POLICY,
		WorkMailActions.DELETE_SMTP_GATEWAY,
		WorkMailActions.DELETE_USER,
		WorkMailActions.DELIVER_TO_MAILBOX,
		WorkMailActions.DEREGISTER_FROM_WORK_MAIL,
		WorkMailActions.DEREGISTER_MAIL_DOMAIN,
		WorkMailActions.DISASSOCIATE_DELEGATE_FROM_RESOURCE,
		WorkMailActions.DISASSOCIATE_MEMBER_FROM_GROUP,
		WorkMailActions.ENABLE_MAIL_DOMAIN,
		WorkMailActions.PUT_ACCESS_CONTROL_RULE,
		WorkMailActions.PUT_EMAIL_MONITORING_CONFIGURATION,
		WorkMailActions.PUT_IDENTITY_PROVIDER_CONFIGURATION,
		WorkMailActions.PUT_INBOUND_DMARC_SETTINGS,
		WorkMailActions.PUT_MAILBOX_PERMISSIONS,
		WorkMailActions.PUT_MOBILE_DEVICE_ACCESS_OVERRIDE,
		WorkMailActions.PUT_RETENTION_POLICY,
		WorkMailActions.REGISTER_MAIL_DOMAIN,
		WorkMailActions.REGISTER_TO_WORK_MAIL,
		WorkMailActions.RESET_PASSWORD,
		WorkMailActions.SET_DEFAULT_MAIL_DOMAIN,
		WorkMailActions.SET_JOURNALING_RULES,
		WorkMailActions.SET_MOBILE_POLICY_DETAILS,
		WorkMailActions.START_MAILBOX_EXPORT_JOB,
		WorkMailActions.TEST_INBOUND_MAIL_FLOW_RULES,
		WorkMailActions.TEST_OUTBOUND_MAIL_FLOW_RULES,
		WorkMailActions.UPDATE_AVAILABILITY_CONFIGURATION,
		WorkMailActions.UPDATE_DEFAULT_MAIL_DOMAIN,
		WorkMailActions.UPDATE_GROUP,
		WorkMailActions.UPDATE_IMPERSONATION_ROLE,
		WorkMailActions.UPDATE_INBOUND_MAIL_FLOW_RULE,
		WorkMailActions.UPDATE_MAILBOX_QUOTA,
		WorkMailActions.UPDATE_MOBILE_DEVICE_ACCESS_RULE,
		WorkMailActions.UPDATE_OUTBOUND_MAIL_FLOW_RULE,
		WorkMailActions.UPDATE_PRIMARY_EMAIL_ADDRESS,
		WorkMailActions.UPDATE_RESOURCE,
		WorkMailActions.UPDATE_SMTP_GATEWAY,
		WorkMailActions.UPDATE_USER,
		WorkMailActions.WIPE_MOBILE_DEVICE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		WorkMailActions.DESCRIBE_GROUP,
		WorkMailActions.DESCRIBE_MAIL_DOMAINS,
		WorkMailActions.DESCRIBE_ORGANIZATION,
		WorkMailActions.DESCRIBE_RESOURCE,
		WorkMailActions.DESCRIBE_USER,
		WorkMailActions.LIST_ALIASES,
		WorkMailActions.LIST_GROUP_MEMBERS,
		WorkMailActions.LIST_GROUPS,
		WorkMailActions.LIST_GROUPS_FOR_ENTITY,
		WorkMailActions.LIST_IMPERSONATION_ROLES,
		WorkMailActions.LIST_INBOUND_MAIL_FLOW_RULES,
		WorkMailActions.LIST_MAIL_DOMAINS,
		WorkMailActions.LIST_MAILBOX_EXPORT_JOBS,
		WorkMailActions.LIST_MAILBOX_PERMISSIONS,
		WorkMailActions.LIST_ORGANIZATIONS,
		WorkMailActions.LIST_OUTBOUND_MAIL_FLOW_RULES,
		WorkMailActions.LIST_PERSONAL_ACCESS_TOKENS,
		WorkMailActions.LIST_RESOURCE_DELEGATES,
		WorkMailActions.LIST_RESOURCES,
		WorkMailActions.LIST_SMTP_GATEWAYS,
		WorkMailActions.LIST_TAGS_FOR_RESOURCE,
		WorkMailActions.LIST_USERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		WorkMailActions.TAG_RESOURCE,
		WorkMailActions.UNTAG_RESOURCE,
	];
}

const OrganizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workmail:(?<region>[^:]*):(?<account>[^:]*):organization/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for workmail resources.
 */
export class WorkMailResources {
	/**
	 * Builds an ARN for the organization resource.
	 */
	static organization(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOrganizationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly ASSOCIATE_DELEGATE_TO_RESOURCE: string[] = [
		"workmail:AssociateDelegateToResource",
	];
	/** IAM actions required for the AssociateMemberToGroup API call. */
	static readonly ASSOCIATE_MEMBER_TO_GROUP: string[] = [
		"workmail:AssociateMemberToGroup",
	];
	/** IAM actions required for the AssumeImpersonationRole API call. */
	static readonly ASSUME_IMPERSONATION_ROLE: string[] = [
		"workmail:AssumeImpersonationRole",
	];
	/** IAM actions required for the CancelMailboxExportJob API call. */
	static readonly CANCEL_MAILBOX_EXPORT_JOB: string[] = [
		"workmail:CancelMailboxExportJob",
	];
	/** IAM actions required for the CreateAlias API call. */
	static readonly CREATE_ALIAS: string[] = ["workmail:CreateAlias"];
	/** IAM actions required for the CreateAvailabilityConfiguration API call. */
	static readonly CREATE_AVAILABILITY_CONFIGURATION: string[] = [
		"workmail:CreateAvailabilityConfiguration",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = ["workmail:CreateGroup"];
	/** IAM actions required for the CreateIdentityCenterApplication API call. */
	static readonly CREATE_IDENTITY_CENTER_APPLICATION: string[] = [
		"workmail:CreateIdentityCenterApplication",
	];
	/** IAM actions required for the CreateImpersonationRole API call. */
	static readonly CREATE_IMPERSONATION_ROLE: string[] = [
		"workmail:CreateImpersonationRole",
	];
	/** IAM actions required for the CreateMobileDeviceAccessRule API call. */
	static readonly CREATE_MOBILE_DEVICE_ACCESS_RULE: string[] = [
		"workmail:CreateMobileDeviceAccessRule",
	];
	/** IAM actions required for the CreateOrganization API call. */
	static readonly CREATE_ORGANIZATION: string[] = [
		"workmail:CreateOrganization",
	];
	/** IAM actions required for the CreateResource API call. */
	static readonly CREATE_RESOURCE: string[] = ["workmail:CreateResource"];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = ["workmail:CreateUser"];
	/** IAM actions required for the DeleteAccessControlRule API call. */
	static readonly DELETE_ACCESS_CONTROL_RULE: string[] = [
		"workmail:DeleteAccessControlRule",
	];
	/** IAM actions required for the DeleteAlias API call. */
	static readonly DELETE_ALIAS: string[] = ["workmail:DeleteAlias"];
	/** IAM actions required for the DeleteAvailabilityConfiguration API call. */
	static readonly DELETE_AVAILABILITY_CONFIGURATION: string[] = [
		"workmail:DeleteAvailabilityConfiguration",
	];
	/** IAM actions required for the DeleteEmailMonitoringConfiguration API call. */
	static readonly DELETE_EMAIL_MONITORING_CONFIGURATION: string[] = [
		"workmail:DeleteEmailMonitoringConfiguration",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["workmail:DeleteGroup"];
	/** IAM actions required for the DeleteIdentityCenterApplication API call. */
	static readonly DELETE_IDENTITY_CENTER_APPLICATION: string[] = [
		"workmail:DeleteIdentityCenterApplication",
	];
	/** IAM actions required for the DeleteIdentityProviderConfiguration API call. */
	static readonly DELETE_IDENTITY_PROVIDER_CONFIGURATION: string[] = [
		"workmail:DeleteIdentityProviderConfiguration",
	];
	/** IAM actions required for the DeleteImpersonationRole API call. */
	static readonly DELETE_IMPERSONATION_ROLE: string[] = [
		"workmail:DeleteImpersonationRole",
	];
	/** IAM actions required for the DeleteMailboxPermissions API call. */
	static readonly DELETE_MAILBOX_PERMISSIONS: string[] = [
		"workmail:DeleteMailboxPermissions",
	];
	/** IAM actions required for the DeleteMobileDeviceAccessOverride API call. */
	static readonly DELETE_MOBILE_DEVICE_ACCESS_OVERRIDE: string[] = [
		"workmail:DeleteMobileDeviceAccessOverride",
	];
	/** IAM actions required for the DeleteMobileDeviceAccessRule API call. */
	static readonly DELETE_MOBILE_DEVICE_ACCESS_RULE: string[] = [
		"workmail:DeleteMobileDeviceAccessRule",
	];
	/** IAM actions required for the DeleteOrganization API call. */
	static readonly DELETE_ORGANIZATION: string[] = [
		"workmail:DeleteOrganization",
	];
	/** IAM actions required for the DeletePersonalAccessToken API call. */
	static readonly DELETE_PERSONAL_ACCESS_TOKEN: string[] = [
		"workmail:DeletePersonalAccessToken",
	];
	/** IAM actions required for the DeleteResource API call. */
	static readonly DELETE_RESOURCE: string[] = ["workmail:DeleteResource"];
	/** IAM actions required for the DeleteRetentionPolicy API call. */
	static readonly DELETE_RETENTION_POLICY: string[] = [
		"workmail:DeleteRetentionPolicy",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["workmail:DeleteUser"];
	/** IAM actions required for the DeregisterFromWorkMail API call. */
	static readonly DEREGISTER_FROM_WORK_MAIL: string[] = [
		"workmail:DeregisterFromWorkMail",
	];
	/** IAM actions required for the DeregisterMailDomain API call. */
	static readonly DEREGISTER_MAIL_DOMAIN: string[] = [
		"workmail:DeregisterMailDomain",
	];
	/** IAM actions required for the DescribeEmailMonitoringConfiguration API call. */
	static readonly DESCRIBE_EMAIL_MONITORING_CONFIGURATION: string[] = [
		"workmail:DescribeEmailMonitoringConfiguration",
	];
	/** IAM actions required for the DescribeEntity API call. */
	static readonly DESCRIBE_ENTITY: string[] = ["workmail:DescribeEntity"];
	/** IAM actions required for the DescribeGroup API call. */
	static readonly DESCRIBE_GROUP: string[] = ["workmail:DescribeGroup"];
	/** IAM actions required for the DescribeIdentityProviderConfiguration API call. */
	static readonly DESCRIBE_IDENTITY_PROVIDER_CONFIGURATION: string[] = [
		"workmail:DescribeIdentityProviderConfiguration",
	];
	/** IAM actions required for the DescribeInboundDmarcSettings API call. */
	static readonly DESCRIBE_INBOUND_DMARC_SETTINGS: string[] = [
		"workmail:DescribeInboundDmarcSettings",
	];
	/** IAM actions required for the DescribeMailboxExportJob API call. */
	static readonly DESCRIBE_MAILBOX_EXPORT_JOB: string[] = [
		"workmail:DescribeMailboxExportJob",
	];
	/** IAM actions required for the DescribeOrganization API call. */
	static readonly DESCRIBE_ORGANIZATION: string[] = [
		"workmail:DescribeOrganization",
	];
	/** IAM actions required for the DescribeResource API call. */
	static readonly DESCRIBE_RESOURCE: string[] = ["workmail:DescribeResource"];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DESCRIBE_USER: string[] = ["workmail:DescribeUser"];
	/** IAM actions required for the DisassociateDelegateFromResource API call. */
	static readonly DISASSOCIATE_DELEGATE_FROM_RESOURCE: string[] = [
		"workmail:DisassociateDelegateFromResource",
	];
	/** IAM actions required for the DisassociateMemberFromGroup API call. */
	static readonly DISASSOCIATE_MEMBER_FROM_GROUP: string[] = [
		"workmail:DisassociateMemberFromGroup",
	];
	/** IAM actions required for the GetAccessControlEffect API call. */
	static readonly GET_ACCESS_CONTROL_EFFECT: string[] = [
		"workmail:GetAccessControlEffect",
	];
	/** IAM actions required for the GetDefaultRetentionPolicy API call. */
	static readonly GET_DEFAULT_RETENTION_POLICY: string[] = [
		"workmail:GetDefaultRetentionPolicy",
	];
	/** IAM actions required for the GetImpersonationRole API call. */
	static readonly GET_IMPERSONATION_ROLE: string[] = [
		"workmail:GetImpersonationRole",
	];
	/** IAM actions required for the GetImpersonationRoleEffect API call. */
	static readonly GET_IMPERSONATION_ROLE_EFFECT: string[] = [
		"workmail:GetImpersonationRoleEffect",
	];
	/** IAM actions required for the GetMailDomain API call. */
	static readonly GET_MAIL_DOMAIN: string[] = ["workmail:GetMailDomain"];
	/** IAM actions required for the GetMailboxDetails API call. */
	static readonly GET_MAILBOX_DETAILS: string[] = [
		"workmail:GetMailboxDetails",
	];
	/** IAM actions required for the GetMobileDeviceAccessEffect API call. */
	static readonly GET_MOBILE_DEVICE_ACCESS_EFFECT: string[] = [
		"workmail:GetMobileDeviceAccessEffect",
	];
	/** IAM actions required for the GetMobileDeviceAccessOverride API call. */
	static readonly GET_MOBILE_DEVICE_ACCESS_OVERRIDE: string[] = [
		"workmail:GetMobileDeviceAccessOverride",
	];
	/** IAM actions required for the GetPersonalAccessTokenMetadata API call. */
	static readonly GET_PERSONAL_ACCESS_TOKEN_METADATA: string[] = [
		"workmail:GetPersonalAccessTokenMetadata",
	];
	/** IAM actions required for the ListAccessControlRules API call. */
	static readonly LIST_ACCESS_CONTROL_RULES: string[] = [
		"workmail:ListAccessControlRules",
	];
	/** IAM actions required for the ListAliases API call. */
	static readonly LIST_ALIASES: string[] = ["workmail:ListAliases"];
	/** IAM actions required for the ListAvailabilityConfigurations API call. */
	static readonly LIST_AVAILABILITY_CONFIGURATIONS: string[] = [
		"workmail:ListAvailabilityConfigurations",
	];
	/** IAM actions required for the ListGroupMembers API call. */
	static readonly LIST_GROUP_MEMBERS: string[] = ["workmail:ListGroupMembers"];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["workmail:ListGroups"];
	/** IAM actions required for the ListGroupsForEntity API call. */
	static readonly LIST_GROUPS_FOR_ENTITY: string[] = [
		"workmail:ListGroupsForEntity",
	];
	/** IAM actions required for the ListImpersonationRoles API call. */
	static readonly LIST_IMPERSONATION_ROLES: string[] = [
		"workmail:ListImpersonationRoles",
	];
	/** IAM actions required for the ListMailDomains API call. */
	static readonly LIST_MAIL_DOMAINS: string[] = ["workmail:ListMailDomains"];
	/** IAM actions required for the ListMailboxExportJobs API call. */
	static readonly LIST_MAILBOX_EXPORT_JOBS: string[] = [
		"workmail:ListMailboxExportJobs",
	];
	/** IAM actions required for the ListMailboxPermissions API call. */
	static readonly LIST_MAILBOX_PERMISSIONS: string[] = [
		"workmail:ListMailboxPermissions",
	];
	/** IAM actions required for the ListMobileDeviceAccessOverrides API call. */
	static readonly LIST_MOBILE_DEVICE_ACCESS_OVERRIDES: string[] = [
		"workmail:ListMobileDeviceAccessOverrides",
	];
	/** IAM actions required for the ListMobileDeviceAccessRules API call. */
	static readonly LIST_MOBILE_DEVICE_ACCESS_RULES: string[] = [
		"workmail:ListMobileDeviceAccessRules",
	];
	/** IAM actions required for the ListOrganizations API call. */
	static readonly LIST_ORGANIZATIONS: string[] = ["workmail:ListOrganizations"];
	/** IAM actions required for the ListPersonalAccessTokens API call. */
	static readonly LIST_PERSONAL_ACCESS_TOKENS: string[] = [
		"workmail:ListPersonalAccessTokens",
	];
	/** IAM actions required for the ListResourceDelegates API call. */
	static readonly LIST_RESOURCE_DELEGATES: string[] = [
		"workmail:ListResourceDelegates",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly LIST_RESOURCES: string[] = ["workmail:ListResources"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"workmail:ListTagsForResource",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["workmail:ListUsers"];
	/** IAM actions required for the PutAccessControlRule API call. */
	static readonly PUT_ACCESS_CONTROL_RULE: string[] = [
		"workmail:PutAccessControlRule",
	];
	/** IAM actions required for the PutEmailMonitoringConfiguration API call. */
	static readonly PUT_EMAIL_MONITORING_CONFIGURATION: string[] = [
		"iam:PassRole",
		"workmail:PutEmailMonitoringConfiguration",
	];
	/** IAM actions required for the PutIdentityProviderConfiguration API call. */
	static readonly PUT_IDENTITY_PROVIDER_CONFIGURATION: string[] = [
		"workmail:PutIdentityProviderConfiguration",
	];
	/** IAM actions required for the PutInboundDmarcSettings API call. */
	static readonly PUT_INBOUND_DMARC_SETTINGS: string[] = [
		"workmail:PutInboundDmarcSettings",
	];
	/** IAM actions required for the PutMailboxPermissions API call. */
	static readonly PUT_MAILBOX_PERMISSIONS: string[] = [
		"workmail:PutMailboxPermissions",
	];
	/** IAM actions required for the PutMobileDeviceAccessOverride API call. */
	static readonly PUT_MOBILE_DEVICE_ACCESS_OVERRIDE: string[] = [
		"workmail:PutMobileDeviceAccessOverride",
	];
	/** IAM actions required for the PutRetentionPolicy API call. */
	static readonly PUT_RETENTION_POLICY: string[] = [
		"workmail:PutRetentionPolicy",
	];
	/** IAM actions required for the RegisterMailDomain API call. */
	static readonly REGISTER_MAIL_DOMAIN: string[] = [
		"workmail:RegisterMailDomain",
	];
	/** IAM actions required for the RegisterToWorkMail API call. */
	static readonly REGISTER_TO_WORK_MAIL: string[] = [
		"workmail:RegisterToWorkMail",
	];
	/** IAM actions required for the ResetPassword API call. */
	static readonly RESET_PASSWORD: string[] = ["workmail:ResetPassword"];
	/** IAM actions required for the StartMailboxExportJob API call. */
	static readonly START_MAILBOX_EXPORT_JOB: string[] = [
		"iam:PassRole",
		"workmail:StartMailboxExportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["workmail:TagResource"];
	/** IAM actions required for the TestAvailabilityConfiguration API call. */
	static readonly TEST_AVAILABILITY_CONFIGURATION: string[] = [
		"workmail:TestAvailabilityConfiguration",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["workmail:UntagResource"];
	/** IAM actions required for the UpdateAvailabilityConfiguration API call. */
	static readonly UPDATE_AVAILABILITY_CONFIGURATION: string[] = [
		"workmail:UpdateAvailabilityConfiguration",
	];
	/** IAM actions required for the UpdateDefaultMailDomain API call. */
	static readonly UPDATE_DEFAULT_MAIL_DOMAIN: string[] = [
		"workmail:UpdateDefaultMailDomain",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = ["workmail:UpdateGroup"];
	/** IAM actions required for the UpdateImpersonationRole API call. */
	static readonly UPDATE_IMPERSONATION_ROLE: string[] = [
		"workmail:UpdateImpersonationRole",
	];
	/** IAM actions required for the UpdateMailboxQuota API call. */
	static readonly UPDATE_MAILBOX_QUOTA: string[] = [
		"workmail:UpdateMailboxQuota",
	];
	/** IAM actions required for the UpdateMobileDeviceAccessRule API call. */
	static readonly UPDATE_MOBILE_DEVICE_ACCESS_RULE: string[] = [
		"workmail:UpdateMobileDeviceAccessRule",
	];
	/** IAM actions required for the UpdatePrimaryEmailAddress API call. */
	static readonly UPDATE_PRIMARY_EMAIL_ADDRESS: string[] = [
		"workmail:UpdatePrimaryEmailAddress",
	];
	/** IAM actions required for the UpdateResource API call. */
	static readonly UPDATE_RESOURCE: string[] = ["workmail:UpdateResource"];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = ["workmail:UpdateUser"];
}

/**
 * Condition key constants and builders for workmail.
 */
export class WorkMailConditions {
	/** Condition keys applicable to the AssumeImpersonationRole action. */
	static readonly ASSUME_IMPERSONATION_ROLE_CONDITION_KEYS: string[] = [
		"workmail:ImpersonationRoleId",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
