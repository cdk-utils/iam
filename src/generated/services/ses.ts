// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ses.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ses service.
 */
export class SesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ses";

	/** [PermissionManagement] ses:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"ses:AllowVendedLogDeliveryForResource";
	/** [Read] ses:BatchGetMetricData */
	static readonly BATCH_GET_METRIC_DATA = "ses:BatchGetMetricData";
	/** [Write] ses:CancelExportJob */
	static readonly CANCEL_EXPORT_JOB = "ses:CancelExportJob";
	/** [Write] ses:CloneReceiptRuleSet */
	static readonly CLONE_RECEIPT_RULE_SET = "ses:CloneReceiptRuleSet";
	/** [Write] ses:CreateAddonInstance */
	static readonly CREATE_ADDON_INSTANCE = "ses:CreateAddonInstance";
	/** [Write] ses:CreateAddonSubscription */
	static readonly CREATE_ADDON_SUBSCRIPTION = "ses:CreateAddonSubscription";
	/** [Write] ses:CreateAddressList */
	static readonly CREATE_ADDRESS_LIST = "ses:CreateAddressList";
	/** [Write] ses:CreateAddressListImportJob */
	static readonly CREATE_ADDRESS_LIST_IMPORT_JOB =
		"ses:CreateAddressListImportJob";
	/** [Write] ses:CreateArchive */
	static readonly CREATE_ARCHIVE = "ses:CreateArchive";
	/** [Write] ses:CreateConfigurationSet */
	static readonly CREATE_CONFIGURATION_SET = "ses:CreateConfigurationSet";
	/** [Write] ses:CreateConfigurationSetEventDestination */
	static readonly CREATE_CONFIGURATION_SET_EVENT_DESTINATION =
		"ses:CreateConfigurationSetEventDestination";
	/** [Write] ses:CreateConfigurationSetTrackingOptions */
	static readonly CREATE_CONFIGURATION_SET_TRACKING_OPTIONS =
		"ses:CreateConfigurationSetTrackingOptions";
	/** [Write] ses:CreateContact */
	static readonly CREATE_CONTACT = "ses:CreateContact";
	/** [Write] ses:CreateContactList */
	static readonly CREATE_CONTACT_LIST = "ses:CreateContactList";
	/** [Write] ses:CreateCustomVerificationEmailTemplate */
	static readonly CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE =
		"ses:CreateCustomVerificationEmailTemplate";
	/** [Write] ses:CreateDedicatedIpPool */
	static readonly CREATE_DEDICATED_IP_POOL = "ses:CreateDedicatedIpPool";
	/** [Write] ses:CreateDeliverabilityTestReport */
	static readonly CREATE_DELIVERABILITY_TEST_REPORT =
		"ses:CreateDeliverabilityTestReport";
	/** [Write] ses:CreateEmailIdentity */
	static readonly CREATE_EMAIL_IDENTITY = "ses:CreateEmailIdentity";
	/** [PermissionManagement] ses:CreateEmailIdentityPolicy */
	static readonly CREATE_EMAIL_IDENTITY_POLICY =
		"ses:CreateEmailIdentityPolicy";
	/** [Write] ses:CreateEmailTemplate */
	static readonly CREATE_EMAIL_TEMPLATE = "ses:CreateEmailTemplate";
	/** [Write] ses:CreateExportJob */
	static readonly CREATE_EXPORT_JOB = "ses:CreateExportJob";
	/** [Write] ses:CreateImportJob */
	static readonly CREATE_IMPORT_JOB = "ses:CreateImportJob";
	/** [Write] ses:CreateIngressPoint */
	static readonly CREATE_INGRESS_POINT = "ses:CreateIngressPoint";
	/** [Write] ses:CreateMultiRegionEndpoint */
	static readonly CREATE_MULTI_REGION_ENDPOINT =
		"ses:CreateMultiRegionEndpoint";
	/** [Write] ses:CreateReceiptFilter */
	static readonly CREATE_RECEIPT_FILTER = "ses:CreateReceiptFilter";
	/** [Write] ses:CreateReceiptRule */
	static readonly CREATE_RECEIPT_RULE = "ses:CreateReceiptRule";
	/** [Write] ses:CreateReceiptRuleSet */
	static readonly CREATE_RECEIPT_RULE_SET = "ses:CreateReceiptRuleSet";
	/** [Write] ses:CreateRelay */
	static readonly CREATE_RELAY = "ses:CreateRelay";
	/** [Write] ses:CreateRuleSet */
	static readonly CREATE_RULE_SET = "ses:CreateRuleSet";
	/** [Write] ses:CreateTemplate */
	static readonly CREATE_TEMPLATE = "ses:CreateTemplate";
	/** [Write] ses:CreateTenant */
	static readonly CREATE_TENANT = "ses:CreateTenant";
	/** [Write] ses:CreateTenantResourceAssociation */
	static readonly CREATE_TENANT_RESOURCE_ASSOCIATION =
		"ses:CreateTenantResourceAssociation";
	/** [Write] ses:CreateTrafficPolicy */
	static readonly CREATE_TRAFFIC_POLICY = "ses:CreateTrafficPolicy";
	/** [Write] ses:DeleteAddonInstance */
	static readonly DELETE_ADDON_INSTANCE = "ses:DeleteAddonInstance";
	/** [Write] ses:DeleteAddonSubscription */
	static readonly DELETE_ADDON_SUBSCRIPTION = "ses:DeleteAddonSubscription";
	/** [Write] ses:DeleteAddressList */
	static readonly DELETE_ADDRESS_LIST = "ses:DeleteAddressList";
	/** [Write] ses:DeleteArchive */
	static readonly DELETE_ARCHIVE = "ses:DeleteArchive";
	/** [Write] ses:DeleteConfigurationSet */
	static readonly DELETE_CONFIGURATION_SET = "ses:DeleteConfigurationSet";
	/** [Write] ses:DeleteConfigurationSetEventDestination */
	static readonly DELETE_CONFIGURATION_SET_EVENT_DESTINATION =
		"ses:DeleteConfigurationSetEventDestination";
	/** [Write] ses:DeleteConfigurationSetTrackingOptions */
	static readonly DELETE_CONFIGURATION_SET_TRACKING_OPTIONS =
		"ses:DeleteConfigurationSetTrackingOptions";
	/** [Write] ses:DeleteContact */
	static readonly DELETE_CONTACT = "ses:DeleteContact";
	/** [Write] ses:DeleteContactList */
	static readonly DELETE_CONTACT_LIST = "ses:DeleteContactList";
	/** [Write] ses:DeleteCustomVerificationEmailTemplate */
	static readonly DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE =
		"ses:DeleteCustomVerificationEmailTemplate";
	/** [Write] ses:DeleteDedicatedIpPool */
	static readonly DELETE_DEDICATED_IP_POOL = "ses:DeleteDedicatedIpPool";
	/** [Write] ses:DeleteEmailIdentity */
	static readonly DELETE_EMAIL_IDENTITY = "ses:DeleteEmailIdentity";
	/** [PermissionManagement] ses:DeleteEmailIdentityPolicy */
	static readonly DELETE_EMAIL_IDENTITY_POLICY =
		"ses:DeleteEmailIdentityPolicy";
	/** [Write] ses:DeleteEmailTemplate */
	static readonly DELETE_EMAIL_TEMPLATE = "ses:DeleteEmailTemplate";
	/** [Write] ses:DeleteIdentity */
	static readonly DELETE_IDENTITY = "ses:DeleteIdentity";
	/** [PermissionManagement] ses:DeleteIdentityPolicy */
	static readonly DELETE_IDENTITY_POLICY = "ses:DeleteIdentityPolicy";
	/** [Write] ses:DeleteIngressPoint */
	static readonly DELETE_INGRESS_POINT = "ses:DeleteIngressPoint";
	/** [Write] ses:DeleteMultiRegionEndpoint */
	static readonly DELETE_MULTI_REGION_ENDPOINT =
		"ses:DeleteMultiRegionEndpoint";
	/** [Write] ses:DeleteReceiptFilter */
	static readonly DELETE_RECEIPT_FILTER = "ses:DeleteReceiptFilter";
	/** [Write] ses:DeleteReceiptRule */
	static readonly DELETE_RECEIPT_RULE = "ses:DeleteReceiptRule";
	/** [Write] ses:DeleteReceiptRuleSet */
	static readonly DELETE_RECEIPT_RULE_SET = "ses:DeleteReceiptRuleSet";
	/** [Write] ses:DeleteRelay */
	static readonly DELETE_RELAY = "ses:DeleteRelay";
	/** [Write] ses:DeleteRuleSet */
	static readonly DELETE_RULE_SET = "ses:DeleteRuleSet";
	/** [Write] ses:DeleteSuppressedDestination */
	static readonly DELETE_SUPPRESSED_DESTINATION =
		"ses:DeleteSuppressedDestination";
	/** [Write] ses:DeleteTemplate */
	static readonly DELETE_TEMPLATE = "ses:DeleteTemplate";
	/** [Write] ses:DeleteTenant */
	static readonly DELETE_TENANT = "ses:DeleteTenant";
	/** [Write] ses:DeleteTenantResourceAssociation */
	static readonly DELETE_TENANT_RESOURCE_ASSOCIATION =
		"ses:DeleteTenantResourceAssociation";
	/** [Write] ses:DeleteTrafficPolicy */
	static readonly DELETE_TRAFFIC_POLICY = "ses:DeleteTrafficPolicy";
	/** [Write] ses:DeleteVerifiedEmailAddress */
	static readonly DELETE_VERIFIED_EMAIL_ADDRESS =
		"ses:DeleteVerifiedEmailAddress";
	/** [Write] ses:DeregisterMemberFromAddressList */
	static readonly DEREGISTER_MEMBER_FROM_ADDRESS_LIST =
		"ses:DeregisterMemberFromAddressList";
	/** [Read] ses:DescribeActiveReceiptRuleSet */
	static readonly DESCRIBE_ACTIVE_RECEIPT_RULE_SET =
		"ses:DescribeActiveReceiptRuleSet";
	/** [Read] ses:DescribeConfigurationSet */
	static readonly DESCRIBE_CONFIGURATION_SET = "ses:DescribeConfigurationSet";
	/** [Read] ses:DescribeReceiptRule */
	static readonly DESCRIBE_RECEIPT_RULE = "ses:DescribeReceiptRule";
	/** [Read] ses:DescribeReceiptRuleSet */
	static readonly DESCRIBE_RECEIPT_RULE_SET = "ses:DescribeReceiptRuleSet";
	/** [Read] ses:GetAccount */
	static readonly GET_ACCOUNT = "ses:GetAccount";
	/** [Read] ses:GetAccountSendingEnabled */
	static readonly GET_ACCOUNT_SENDING_ENABLED = "ses:GetAccountSendingEnabled";
	/** [Read] ses:GetAddonInstance */
	static readonly GET_ADDON_INSTANCE = "ses:GetAddonInstance";
	/** [Read] ses:GetAddonSubscription */
	static readonly GET_ADDON_SUBSCRIPTION = "ses:GetAddonSubscription";
	/** [Read] ses:GetAddressList */
	static readonly GET_ADDRESS_LIST = "ses:GetAddressList";
	/** [Read] ses:GetAddressListImportJob */
	static readonly GET_ADDRESS_LIST_IMPORT_JOB = "ses:GetAddressListImportJob";
	/** [Read] ses:GetArchive */
	static readonly GET_ARCHIVE = "ses:GetArchive";
	/** [Read] ses:GetArchiveExport */
	static readonly GET_ARCHIVE_EXPORT = "ses:GetArchiveExport";
	/** [Read] ses:GetArchiveMessage */
	static readonly GET_ARCHIVE_MESSAGE = "ses:GetArchiveMessage";
	/** [Read] ses:GetArchiveMessageContent */
	static readonly GET_ARCHIVE_MESSAGE_CONTENT = "ses:GetArchiveMessageContent";
	/** [Read] ses:GetArchiveSearch */
	static readonly GET_ARCHIVE_SEARCH = "ses:GetArchiveSearch";
	/** [Read] ses:GetArchiveSearchResults */
	static readonly GET_ARCHIVE_SEARCH_RESULTS = "ses:GetArchiveSearchResults";
	/** [Read] ses:GetBlacklistReports */
	static readonly GET_BLACKLIST_REPORTS = "ses:GetBlacklistReports";
	/** [Read] ses:GetConfigurationSet */
	static readonly GET_CONFIGURATION_SET = "ses:GetConfigurationSet";
	/** [Read] ses:GetConfigurationSetEventDestinations */
	static readonly GET_CONFIGURATION_SET_EVENT_DESTINATIONS =
		"ses:GetConfigurationSetEventDestinations";
	/** [Read] ses:GetContact */
	static readonly GET_CONTACT = "ses:GetContact";
	/** [Read] ses:GetContactList */
	static readonly GET_CONTACT_LIST = "ses:GetContactList";
	/** [Read] ses:GetCustomVerificationEmailTemplate */
	static readonly GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE =
		"ses:GetCustomVerificationEmailTemplate";
	/** [Read] ses:GetDedicatedIp */
	static readonly GET_DEDICATED_IP = "ses:GetDedicatedIp";
	/** [Read] ses:GetDedicatedIpPool */
	static readonly GET_DEDICATED_IP_POOL = "ses:GetDedicatedIpPool";
	/** [Read] ses:GetDedicatedIps */
	static readonly GET_DEDICATED_IPS = "ses:GetDedicatedIps";
	/** [Read] ses:GetDeliverabilityDashboardOptions */
	static readonly GET_DELIVERABILITY_DASHBOARD_OPTIONS =
		"ses:GetDeliverabilityDashboardOptions";
	/** [Read] ses:GetDeliverabilityTestReport */
	static readonly GET_DELIVERABILITY_TEST_REPORT =
		"ses:GetDeliverabilityTestReport";
	/** [Read] ses:GetDomainDeliverabilityCampaign */
	static readonly GET_DOMAIN_DELIVERABILITY_CAMPAIGN =
		"ses:GetDomainDeliverabilityCampaign";
	/** [Read] ses:GetDomainStatisticsReport */
	static readonly GET_DOMAIN_STATISTICS_REPORT =
		"ses:GetDomainStatisticsReport";
	/** [Read] ses:GetEmailAddressInsights */
	static readonly GET_EMAIL_ADDRESS_INSIGHTS = "ses:GetEmailAddressInsights";
	/** [Read] ses:GetEmailIdentity */
	static readonly GET_EMAIL_IDENTITY = "ses:GetEmailIdentity";
	/** [Read] ses:GetEmailIdentityPolicies */
	static readonly GET_EMAIL_IDENTITY_POLICIES = "ses:GetEmailIdentityPolicies";
	/** [Read] ses:GetEmailTemplate */
	static readonly GET_EMAIL_TEMPLATE = "ses:GetEmailTemplate";
	/** [Read] ses:GetExportJob */
	static readonly GET_EXPORT_JOB = "ses:GetExportJob";
	/** [Read] ses:GetIdentityDkimAttributes */
	static readonly GET_IDENTITY_DKIM_ATTRIBUTES =
		"ses:GetIdentityDkimAttributes";
	/** [Read] ses:GetIdentityMailFromDomainAttributes */
	static readonly GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES =
		"ses:GetIdentityMailFromDomainAttributes";
	/** [Read] ses:GetIdentityNotificationAttributes */
	static readonly GET_IDENTITY_NOTIFICATION_ATTRIBUTES =
		"ses:GetIdentityNotificationAttributes";
	/** [Read] ses:GetIdentityPolicies */
	static readonly GET_IDENTITY_POLICIES = "ses:GetIdentityPolicies";
	/** [Read] ses:GetIdentityVerificationAttributes */
	static readonly GET_IDENTITY_VERIFICATION_ATTRIBUTES =
		"ses:GetIdentityVerificationAttributes";
	/** [Read] ses:GetImportJob */
	static readonly GET_IMPORT_JOB = "ses:GetImportJob";
	/** [Read] ses:GetIngressPoint */
	static readonly GET_INGRESS_POINT = "ses:GetIngressPoint";
	/** [Read] ses:GetMemberOfAddressList */
	static readonly GET_MEMBER_OF_ADDRESS_LIST = "ses:GetMemberOfAddressList";
	/** [Read] ses:GetMessageInsights */
	static readonly GET_MESSAGE_INSIGHTS = "ses:GetMessageInsights";
	/** [Read] ses:GetMultiRegionEndpoint */
	static readonly GET_MULTI_REGION_ENDPOINT = "ses:GetMultiRegionEndpoint";
	/** [Read] ses:GetRelay */
	static readonly GET_RELAY = "ses:GetRelay";
	/** [Read] ses:GetReputationEntity */
	static readonly GET_REPUTATION_ENTITY = "ses:GetReputationEntity";
	/** [Read] ses:GetRuleSet */
	static readonly GET_RULE_SET = "ses:GetRuleSet";
	/** [Read] ses:GetSendQuota */
	static readonly GET_SEND_QUOTA = "ses:GetSendQuota";
	/** [Read] ses:GetSendStatistics */
	static readonly GET_SEND_STATISTICS = "ses:GetSendStatistics";
	/** [Read] ses:GetSuppressedDestination */
	static readonly GET_SUPPRESSED_DESTINATION = "ses:GetSuppressedDestination";
	/** [Read] ses:GetTemplate */
	static readonly GET_TEMPLATE = "ses:GetTemplate";
	/** [Read] ses:GetTenant */
	static readonly GET_TENANT = "ses:GetTenant";
	/** [Read] ses:GetTrafficPolicy */
	static readonly GET_TRAFFIC_POLICY = "ses:GetTrafficPolicy";
	/** [List] ses:ListAddonInstances */
	static readonly LIST_ADDON_INSTANCES = "ses:ListAddonInstances";
	/** [List] ses:ListAddonSubscriptions */
	static readonly LIST_ADDON_SUBSCRIPTIONS = "ses:ListAddonSubscriptions";
	/** [List] ses:ListAddressListImportJobs */
	static readonly LIST_ADDRESS_LIST_IMPORT_JOBS =
		"ses:ListAddressListImportJobs";
	/** [List] ses:ListAddressLists */
	static readonly LIST_ADDRESS_LISTS = "ses:ListAddressLists";
	/** [List] ses:ListArchiveExports */
	static readonly LIST_ARCHIVE_EXPORTS = "ses:ListArchiveExports";
	/** [List] ses:ListArchiveSearches */
	static readonly LIST_ARCHIVE_SEARCHES = "ses:ListArchiveSearches";
	/** [List] ses:ListArchives */
	static readonly LIST_ARCHIVES = "ses:ListArchives";
	/** [List] ses:ListConfigurationSets */
	static readonly LIST_CONFIGURATION_SETS = "ses:ListConfigurationSets";
	/** [List] ses:ListContactLists */
	static readonly LIST_CONTACT_LISTS = "ses:ListContactLists";
	/** [List] ses:ListContacts */
	static readonly LIST_CONTACTS = "ses:ListContacts";
	/** [List] ses:ListCustomVerificationEmailTemplates */
	static readonly LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES =
		"ses:ListCustomVerificationEmailTemplates";
	/** [List] ses:ListDedicatedIpPools */
	static readonly LIST_DEDICATED_IP_POOLS = "ses:ListDedicatedIpPools";
	/** [List] ses:ListDeliverabilityTestReports */
	static readonly LIST_DELIVERABILITY_TEST_REPORTS =
		"ses:ListDeliverabilityTestReports";
	/** [Read] ses:ListDomainDeliverabilityCampaigns */
	static readonly LIST_DOMAIN_DELIVERABILITY_CAMPAIGNS =
		"ses:ListDomainDeliverabilityCampaigns";
	/** [List] ses:ListEmailIdentities */
	static readonly LIST_EMAIL_IDENTITIES = "ses:ListEmailIdentities";
	/** [List] ses:ListEmailTemplates */
	static readonly LIST_EMAIL_TEMPLATES = "ses:ListEmailTemplates";
	/** [List] ses:ListExportJobs */
	static readonly LIST_EXPORT_JOBS = "ses:ListExportJobs";
	/** [List] ses:ListIdentities */
	static readonly LIST_IDENTITIES = "ses:ListIdentities";
	/** [List] ses:ListIdentityPolicies */
	static readonly LIST_IDENTITY_POLICIES = "ses:ListIdentityPolicies";
	/** [List] ses:ListImportJobs */
	static readonly LIST_IMPORT_JOBS = "ses:ListImportJobs";
	/** [List] ses:ListIngressPoints */
	static readonly LIST_INGRESS_POINTS = "ses:ListIngressPoints";
	/** [List] ses:ListMembersOfAddressList */
	static readonly LIST_MEMBERS_OF_ADDRESS_LIST = "ses:ListMembersOfAddressList";
	/** [List] ses:ListMultiRegionEndpoints */
	static readonly LIST_MULTI_REGION_ENDPOINTS = "ses:ListMultiRegionEndpoints";
	/** [Read] ses:ListReceiptFilters */
	static readonly LIST_RECEIPT_FILTERS = "ses:ListReceiptFilters";
	/** [Read] ses:ListReceiptRuleSets */
	static readonly LIST_RECEIPT_RULE_SETS = "ses:ListReceiptRuleSets";
	/** [Read] ses:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS = "ses:ListRecommendations";
	/** [List] ses:ListRelays */
	static readonly LIST_RELAYS = "ses:ListRelays";
	/** [List] ses:ListReputationEntities */
	static readonly LIST_REPUTATION_ENTITIES = "ses:ListReputationEntities";
	/** [List] ses:ListResourceTenants */
	static readonly LIST_RESOURCE_TENANTS = "ses:ListResourceTenants";
	/** [List] ses:ListRuleSets */
	static readonly LIST_RULE_SETS = "ses:ListRuleSets";
	/** [Read] ses:ListSuppressedDestinations */
	static readonly LIST_SUPPRESSED_DESTINATIONS =
		"ses:ListSuppressedDestinations";
	/** [Read] ses:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ses:ListTagsForResource";
	/** [List] ses:ListTemplates */
	static readonly LIST_TEMPLATES = "ses:ListTemplates";
	/** [List] ses:ListTenantResources */
	static readonly LIST_TENANT_RESOURCES = "ses:ListTenantResources";
	/** [List] ses:ListTenants */
	static readonly LIST_TENANTS = "ses:ListTenants";
	/** [List] ses:ListTrafficPolicies */
	static readonly LIST_TRAFFIC_POLICIES = "ses:ListTrafficPolicies";
	/** [Read] ses:ListVerifiedEmailAddresses */
	static readonly LIST_VERIFIED_EMAIL_ADDRESSES =
		"ses:ListVerifiedEmailAddresses";
	/** [Write] ses:PutAccountDedicatedIpWarmupAttributes */
	static readonly PUT_ACCOUNT_DEDICATED_IP_WARMUP_ATTRIBUTES =
		"ses:PutAccountDedicatedIpWarmupAttributes";
	/** [Write] ses:PutAccountDetails */
	static readonly PUT_ACCOUNT_DETAILS = "ses:PutAccountDetails";
	/** [Write] ses:PutAccountPricingAttributes */
	static readonly PUT_ACCOUNT_PRICING_ATTRIBUTES =
		"ses:PutAccountPricingAttributes";
	/** [Write] ses:PutAccountSendingAttributes */
	static readonly PUT_ACCOUNT_SENDING_ATTRIBUTES =
		"ses:PutAccountSendingAttributes";
	/** [Write] ses:PutAccountSuppressionAttributes */
	static readonly PUT_ACCOUNT_SUPPRESSION_ATTRIBUTES =
		"ses:PutAccountSuppressionAttributes";
	/** [Write] ses:PutAccountVdmAttributes */
	static readonly PUT_ACCOUNT_VDM_ATTRIBUTES = "ses:PutAccountVdmAttributes";
	/** [Write] ses:PutConfigurationSetArchivingOptions */
	static readonly PUT_CONFIGURATION_SET_ARCHIVING_OPTIONS =
		"ses:PutConfigurationSetArchivingOptions";
	/** [Write] ses:PutConfigurationSetDeliveryOptions */
	static readonly PUT_CONFIGURATION_SET_DELIVERY_OPTIONS =
		"ses:PutConfigurationSetDeliveryOptions";
	/** [Write] ses:PutConfigurationSetReputationOptions */
	static readonly PUT_CONFIGURATION_SET_REPUTATION_OPTIONS =
		"ses:PutConfigurationSetReputationOptions";
	/** [Write] ses:PutConfigurationSetSendingOptions */
	static readonly PUT_CONFIGURATION_SET_SENDING_OPTIONS =
		"ses:PutConfigurationSetSendingOptions";
	/** [Write] ses:PutConfigurationSetSuppressionOptions */
	static readonly PUT_CONFIGURATION_SET_SUPPRESSION_OPTIONS =
		"ses:PutConfigurationSetSuppressionOptions";
	/** [Write] ses:PutConfigurationSetTrackingOptions */
	static readonly PUT_CONFIGURATION_SET_TRACKING_OPTIONS =
		"ses:PutConfigurationSetTrackingOptions";
	/** [Write] ses:PutConfigurationSetVdmOptions */
	static readonly PUT_CONFIGURATION_SET_VDM_OPTIONS =
		"ses:PutConfigurationSetVdmOptions";
	/** [Write] ses:PutDedicatedIpInPool */
	static readonly PUT_DEDICATED_IP_IN_POOL = "ses:PutDedicatedIpInPool";
	/** [Write] ses:PutDedicatedIpPoolScalingAttributes */
	static readonly PUT_DEDICATED_IP_POOL_SCALING_ATTRIBUTES =
		"ses:PutDedicatedIpPoolScalingAttributes";
	/** [Write] ses:PutDedicatedIpWarmupAttributes */
	static readonly PUT_DEDICATED_IP_WARMUP_ATTRIBUTES =
		"ses:PutDedicatedIpWarmupAttributes";
	/** [Write] ses:PutDeliverabilityDashboardOption */
	static readonly PUT_DELIVERABILITY_DASHBOARD_OPTION =
		"ses:PutDeliverabilityDashboardOption";
	/** [Write] ses:PutEmailIdentityConfigurationSetAttributes */
	static readonly PUT_EMAIL_IDENTITY_CONFIGURATION_SET_ATTRIBUTES =
		"ses:PutEmailIdentityConfigurationSetAttributes";
	/** [Write] ses:PutEmailIdentityDkimAttributes */
	static readonly PUT_EMAIL_IDENTITY_DKIM_ATTRIBUTES =
		"ses:PutEmailIdentityDkimAttributes";
	/** [Write] ses:PutEmailIdentityDkimSigningAttributes */
	static readonly PUT_EMAIL_IDENTITY_DKIM_SIGNING_ATTRIBUTES =
		"ses:PutEmailIdentityDkimSigningAttributes";
	/** [Write] ses:PutEmailIdentityFeedbackAttributes */
	static readonly PUT_EMAIL_IDENTITY_FEEDBACK_ATTRIBUTES =
		"ses:PutEmailIdentityFeedbackAttributes";
	/** [Write] ses:PutEmailIdentityMailFromAttributes */
	static readonly PUT_EMAIL_IDENTITY_MAIL_FROM_ATTRIBUTES =
		"ses:PutEmailIdentityMailFromAttributes";
	/** [PermissionManagement] ses:PutIdentityPolicy */
	static readonly PUT_IDENTITY_POLICY = "ses:PutIdentityPolicy";
	/** [Write] ses:PutSuppressedDestination */
	static readonly PUT_SUPPRESSED_DESTINATION = "ses:PutSuppressedDestination";
	/** [Write] ses:PutTenantSuppressionAttributes */
	static readonly PUT_TENANT_SUPPRESSION_ATTRIBUTES =
		"ses:PutTenantSuppressionAttributes";
	/** [Write] ses:RegisterMemberToAddressList */
	static readonly REGISTER_MEMBER_TO_ADDRESS_LIST =
		"ses:RegisterMemberToAddressList";
	/** [Write] ses:ReorderReceiptRuleSet */
	static readonly REORDER_RECEIPT_RULE_SET = "ses:ReorderReceiptRuleSet";
	/** [PermissionManagement] ses:ReplicateEmailIdentityDkimSigningKey */
	static readonly REPLICATE_EMAIL_IDENTITY_DKIM_SIGNING_KEY =
		"ses:ReplicateEmailIdentityDkimSigningKey";
	/** [Write] ses:SendBounce */
	static readonly SEND_BOUNCE = "ses:SendBounce";
	/** [Write] ses:SendBulkEmail */
	static readonly SEND_BULK_EMAIL = "ses:SendBulkEmail";
	/** [Write] ses:SendBulkTemplatedEmail */
	static readonly SEND_BULK_TEMPLATED_EMAIL = "ses:SendBulkTemplatedEmail";
	/** [Write] ses:SendCustomVerificationEmail */
	static readonly SEND_CUSTOM_VERIFICATION_EMAIL =
		"ses:SendCustomVerificationEmail";
	/** [Write] ses:SendEmail */
	static readonly SEND_EMAIL = "ses:SendEmail";
	/** [Write] ses:SendRawEmail */
	static readonly SEND_RAW_EMAIL = "ses:SendRawEmail";
	/** [Write] ses:SendTemplatedEmail */
	static readonly SEND_TEMPLATED_EMAIL = "ses:SendTemplatedEmail";
	/** [Write] ses:SetActiveReceiptRuleSet */
	static readonly SET_ACTIVE_RECEIPT_RULE_SET = "ses:SetActiveReceiptRuleSet";
	/** [Write] ses:SetIdentityDkimEnabled */
	static readonly SET_IDENTITY_DKIM_ENABLED = "ses:SetIdentityDkimEnabled";
	/** [Write] ses:SetIdentityFeedbackForwardingEnabled */
	static readonly SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED =
		"ses:SetIdentityFeedbackForwardingEnabled";
	/** [Write] ses:SetIdentityHeadersInNotificationsEnabled */
	static readonly SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED =
		"ses:SetIdentityHeadersInNotificationsEnabled";
	/** [Write] ses:SetIdentityMailFromDomain */
	static readonly SET_IDENTITY_MAIL_FROM_DOMAIN =
		"ses:SetIdentityMailFromDomain";
	/** [Write] ses:SetIdentityNotificationTopic */
	static readonly SET_IDENTITY_NOTIFICATION_TOPIC =
		"ses:SetIdentityNotificationTopic";
	/** [Write] ses:SetReceiptRulePosition */
	static readonly SET_RECEIPT_RULE_POSITION = "ses:SetReceiptRulePosition";
	/** [Write] ses:StartAddressListImportJob */
	static readonly START_ADDRESS_LIST_IMPORT_JOB =
		"ses:StartAddressListImportJob";
	/** [Write] ses:StartArchiveExport */
	static readonly START_ARCHIVE_EXPORT = "ses:StartArchiveExport";
	/** [Write] ses:StartArchiveSearch */
	static readonly START_ARCHIVE_SEARCH = "ses:StartArchiveSearch";
	/** [Write] ses:StopAddressListImportJob */
	static readonly STOP_ADDRESS_LIST_IMPORT_JOB = "ses:StopAddressListImportJob";
	/** [Write] ses:StopArchiveExport */
	static readonly STOP_ARCHIVE_EXPORT = "ses:StopArchiveExport";
	/** [Write] ses:StopArchiveSearch */
	static readonly STOP_ARCHIVE_SEARCH = "ses:StopArchiveSearch";
	/** [Tagging] ses:TagResource */
	static readonly TAG_RESOURCE = "ses:TagResource";
	/** [Write] ses:TestRenderEmailTemplate */
	static readonly TEST_RENDER_EMAIL_TEMPLATE = "ses:TestRenderEmailTemplate";
	/** [Write] ses:TestRenderTemplate */
	static readonly TEST_RENDER_TEMPLATE = "ses:TestRenderTemplate";
	/** [Tagging] ses:UntagResource */
	static readonly UNTAG_RESOURCE = "ses:UntagResource";
	/** [Write] ses:UpdateAccountSendingEnabled */
	static readonly UPDATE_ACCOUNT_SENDING_ENABLED =
		"ses:UpdateAccountSendingEnabled";
	/** [Write] ses:UpdateArchive */
	static readonly UPDATE_ARCHIVE = "ses:UpdateArchive";
	/** [Write] ses:UpdateConfigurationSetEventDestination */
	static readonly UPDATE_CONFIGURATION_SET_EVENT_DESTINATION =
		"ses:UpdateConfigurationSetEventDestination";
	/** [Write] ses:UpdateConfigurationSetReputationMetricsEnabled */
	static readonly UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED =
		"ses:UpdateConfigurationSetReputationMetricsEnabled";
	/** [Write] ses:UpdateConfigurationSetSendingEnabled */
	static readonly UPDATE_CONFIGURATION_SET_SENDING_ENABLED =
		"ses:UpdateConfigurationSetSendingEnabled";
	/** [Write] ses:UpdateConfigurationSetTrackingOptions */
	static readonly UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS =
		"ses:UpdateConfigurationSetTrackingOptions";
	/** [Write] ses:UpdateContact */
	static readonly UPDATE_CONTACT = "ses:UpdateContact";
	/** [Write] ses:UpdateContactList */
	static readonly UPDATE_CONTACT_LIST = "ses:UpdateContactList";
	/** [Write] ses:UpdateCustomVerificationEmailTemplate */
	static readonly UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE =
		"ses:UpdateCustomVerificationEmailTemplate";
	/** [PermissionManagement] ses:UpdateEmailIdentityPolicy */
	static readonly UPDATE_EMAIL_IDENTITY_POLICY =
		"ses:UpdateEmailIdentityPolicy";
	/** [Write] ses:UpdateEmailTemplate */
	static readonly UPDATE_EMAIL_TEMPLATE = "ses:UpdateEmailTemplate";
	/** [Write] ses:UpdateIngressPoint */
	static readonly UPDATE_INGRESS_POINT = "ses:UpdateIngressPoint";
	/** [Write] ses:UpdateReceiptRule */
	static readonly UPDATE_RECEIPT_RULE = "ses:UpdateReceiptRule";
	/** [Write] ses:UpdateRelay */
	static readonly UPDATE_RELAY = "ses:UpdateRelay";
	/** [Write] ses:UpdateReputationEntityCustomerManagedStatus */
	static readonly UPDATE_REPUTATION_ENTITY_CUSTOMER_MANAGED_STATUS =
		"ses:UpdateReputationEntityCustomerManagedStatus";
	/** [Write] ses:UpdateReputationEntityPolicy */
	static readonly UPDATE_REPUTATION_ENTITY_POLICY =
		"ses:UpdateReputationEntityPolicy";
	/** [Write] ses:UpdateRuleSet */
	static readonly UPDATE_RULE_SET = "ses:UpdateRuleSet";
	/** [Write] ses:UpdateTemplate */
	static readonly UPDATE_TEMPLATE = "ses:UpdateTemplate";
	/** [Write] ses:UpdateTrafficPolicy */
	static readonly UPDATE_TRAFFIC_POLICY = "ses:UpdateTrafficPolicy";
	/** [Write] ses:VerifyDomainDkim */
	static readonly VERIFY_DOMAIN_DKIM = "ses:VerifyDomainDkim";
	/** [Write] ses:VerifyDomainIdentity */
	static readonly VERIFY_DOMAIN_IDENTITY = "ses:VerifyDomainIdentity";
	/** [Write] ses:VerifyEmailAddress */
	static readonly VERIFY_EMAIL_ADDRESS = "ses:VerifyEmailAddress";
	/** [Write] ses:VerifyEmailIdentity */
	static readonly VERIFY_EMAIL_IDENTITY = "ses:VerifyEmailIdentity";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SesActions.BATCH_GET_METRIC_DATA,
		SesActions.DESCRIBE_ACTIVE_RECEIPT_RULE_SET,
		SesActions.DESCRIBE_CONFIGURATION_SET,
		SesActions.DESCRIBE_RECEIPT_RULE,
		SesActions.DESCRIBE_RECEIPT_RULE_SET,
		SesActions.GET_ACCOUNT,
		SesActions.GET_ACCOUNT_SENDING_ENABLED,
		SesActions.GET_ADDON_INSTANCE,
		SesActions.GET_ADDON_SUBSCRIPTION,
		SesActions.GET_ADDRESS_LIST,
		SesActions.GET_ADDRESS_LIST_IMPORT_JOB,
		SesActions.GET_ARCHIVE,
		SesActions.GET_ARCHIVE_EXPORT,
		SesActions.GET_ARCHIVE_MESSAGE,
		SesActions.GET_ARCHIVE_MESSAGE_CONTENT,
		SesActions.GET_ARCHIVE_SEARCH,
		SesActions.GET_ARCHIVE_SEARCH_RESULTS,
		SesActions.GET_BLACKLIST_REPORTS,
		SesActions.GET_CONFIGURATION_SET,
		SesActions.GET_CONFIGURATION_SET_EVENT_DESTINATIONS,
		SesActions.GET_CONTACT,
		SesActions.GET_CONTACT_LIST,
		SesActions.GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE,
		SesActions.GET_DEDICATED_IP,
		SesActions.GET_DEDICATED_IP_POOL,
		SesActions.GET_DEDICATED_IPS,
		SesActions.GET_DELIVERABILITY_DASHBOARD_OPTIONS,
		SesActions.GET_DELIVERABILITY_TEST_REPORT,
		SesActions.GET_DOMAIN_DELIVERABILITY_CAMPAIGN,
		SesActions.GET_DOMAIN_STATISTICS_REPORT,
		SesActions.GET_EMAIL_ADDRESS_INSIGHTS,
		SesActions.GET_EMAIL_IDENTITY,
		SesActions.GET_EMAIL_IDENTITY_POLICIES,
		SesActions.GET_EMAIL_TEMPLATE,
		SesActions.GET_EXPORT_JOB,
		SesActions.GET_IDENTITY_DKIM_ATTRIBUTES,
		SesActions.GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES,
		SesActions.GET_IDENTITY_NOTIFICATION_ATTRIBUTES,
		SesActions.GET_IDENTITY_POLICIES,
		SesActions.GET_IDENTITY_VERIFICATION_ATTRIBUTES,
		SesActions.GET_IMPORT_JOB,
		SesActions.GET_INGRESS_POINT,
		SesActions.GET_MEMBER_OF_ADDRESS_LIST,
		SesActions.GET_MESSAGE_INSIGHTS,
		SesActions.GET_MULTI_REGION_ENDPOINT,
		SesActions.GET_RELAY,
		SesActions.GET_REPUTATION_ENTITY,
		SesActions.GET_RULE_SET,
		SesActions.GET_SEND_QUOTA,
		SesActions.GET_SEND_STATISTICS,
		SesActions.GET_SUPPRESSED_DESTINATION,
		SesActions.GET_TEMPLATE,
		SesActions.GET_TENANT,
		SesActions.GET_TRAFFIC_POLICY,
		SesActions.LIST_DOMAIN_DELIVERABILITY_CAMPAIGNS,
		SesActions.LIST_RECEIPT_FILTERS,
		SesActions.LIST_RECEIPT_RULE_SETS,
		SesActions.LIST_RECOMMENDATIONS,
		SesActions.LIST_SUPPRESSED_DESTINATIONS,
		SesActions.LIST_TAGS_FOR_RESOURCE,
		SesActions.LIST_VERIFIED_EMAIL_ADDRESSES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SesActions.CANCEL_EXPORT_JOB,
		SesActions.CLONE_RECEIPT_RULE_SET,
		SesActions.CREATE_ADDON_INSTANCE,
		SesActions.CREATE_ADDON_SUBSCRIPTION,
		SesActions.CREATE_ADDRESS_LIST,
		SesActions.CREATE_ADDRESS_LIST_IMPORT_JOB,
		SesActions.CREATE_ARCHIVE,
		SesActions.CREATE_CONFIGURATION_SET,
		SesActions.CREATE_CONFIGURATION_SET_EVENT_DESTINATION,
		SesActions.CREATE_CONFIGURATION_SET_TRACKING_OPTIONS,
		SesActions.CREATE_CONTACT,
		SesActions.CREATE_CONTACT_LIST,
		SesActions.CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE,
		SesActions.CREATE_DEDICATED_IP_POOL,
		SesActions.CREATE_DELIVERABILITY_TEST_REPORT,
		SesActions.CREATE_EMAIL_IDENTITY,
		SesActions.CREATE_EMAIL_TEMPLATE,
		SesActions.CREATE_EXPORT_JOB,
		SesActions.CREATE_IMPORT_JOB,
		SesActions.CREATE_INGRESS_POINT,
		SesActions.CREATE_MULTI_REGION_ENDPOINT,
		SesActions.CREATE_RECEIPT_FILTER,
		SesActions.CREATE_RECEIPT_RULE,
		SesActions.CREATE_RECEIPT_RULE_SET,
		SesActions.CREATE_RELAY,
		SesActions.CREATE_RULE_SET,
		SesActions.CREATE_TEMPLATE,
		SesActions.CREATE_TENANT,
		SesActions.CREATE_TENANT_RESOURCE_ASSOCIATION,
		SesActions.CREATE_TRAFFIC_POLICY,
		SesActions.DELETE_ADDON_INSTANCE,
		SesActions.DELETE_ADDON_SUBSCRIPTION,
		SesActions.DELETE_ADDRESS_LIST,
		SesActions.DELETE_ARCHIVE,
		SesActions.DELETE_CONFIGURATION_SET,
		SesActions.DELETE_CONFIGURATION_SET_EVENT_DESTINATION,
		SesActions.DELETE_CONFIGURATION_SET_TRACKING_OPTIONS,
		SesActions.DELETE_CONTACT,
		SesActions.DELETE_CONTACT_LIST,
		SesActions.DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE,
		SesActions.DELETE_DEDICATED_IP_POOL,
		SesActions.DELETE_EMAIL_IDENTITY,
		SesActions.DELETE_EMAIL_TEMPLATE,
		SesActions.DELETE_IDENTITY,
		SesActions.DELETE_INGRESS_POINT,
		SesActions.DELETE_MULTI_REGION_ENDPOINT,
		SesActions.DELETE_RECEIPT_FILTER,
		SesActions.DELETE_RECEIPT_RULE,
		SesActions.DELETE_RECEIPT_RULE_SET,
		SesActions.DELETE_RELAY,
		SesActions.DELETE_RULE_SET,
		SesActions.DELETE_SUPPRESSED_DESTINATION,
		SesActions.DELETE_TEMPLATE,
		SesActions.DELETE_TENANT,
		SesActions.DELETE_TENANT_RESOURCE_ASSOCIATION,
		SesActions.DELETE_TRAFFIC_POLICY,
		SesActions.DELETE_VERIFIED_EMAIL_ADDRESS,
		SesActions.DEREGISTER_MEMBER_FROM_ADDRESS_LIST,
		SesActions.PUT_ACCOUNT_DEDICATED_IP_WARMUP_ATTRIBUTES,
		SesActions.PUT_ACCOUNT_DETAILS,
		SesActions.PUT_ACCOUNT_PRICING_ATTRIBUTES,
		SesActions.PUT_ACCOUNT_SENDING_ATTRIBUTES,
		SesActions.PUT_ACCOUNT_SUPPRESSION_ATTRIBUTES,
		SesActions.PUT_ACCOUNT_VDM_ATTRIBUTES,
		SesActions.PUT_CONFIGURATION_SET_ARCHIVING_OPTIONS,
		SesActions.PUT_CONFIGURATION_SET_DELIVERY_OPTIONS,
		SesActions.PUT_CONFIGURATION_SET_REPUTATION_OPTIONS,
		SesActions.PUT_CONFIGURATION_SET_SENDING_OPTIONS,
		SesActions.PUT_CONFIGURATION_SET_SUPPRESSION_OPTIONS,
		SesActions.PUT_CONFIGURATION_SET_TRACKING_OPTIONS,
		SesActions.PUT_CONFIGURATION_SET_VDM_OPTIONS,
		SesActions.PUT_DEDICATED_IP_IN_POOL,
		SesActions.PUT_DEDICATED_IP_POOL_SCALING_ATTRIBUTES,
		SesActions.PUT_DEDICATED_IP_WARMUP_ATTRIBUTES,
		SesActions.PUT_DELIVERABILITY_DASHBOARD_OPTION,
		SesActions.PUT_EMAIL_IDENTITY_CONFIGURATION_SET_ATTRIBUTES,
		SesActions.PUT_EMAIL_IDENTITY_DKIM_ATTRIBUTES,
		SesActions.PUT_EMAIL_IDENTITY_DKIM_SIGNING_ATTRIBUTES,
		SesActions.PUT_EMAIL_IDENTITY_FEEDBACK_ATTRIBUTES,
		SesActions.PUT_EMAIL_IDENTITY_MAIL_FROM_ATTRIBUTES,
		SesActions.PUT_SUPPRESSED_DESTINATION,
		SesActions.PUT_TENANT_SUPPRESSION_ATTRIBUTES,
		SesActions.REGISTER_MEMBER_TO_ADDRESS_LIST,
		SesActions.REORDER_RECEIPT_RULE_SET,
		SesActions.SEND_BOUNCE,
		SesActions.SEND_BULK_EMAIL,
		SesActions.SEND_BULK_TEMPLATED_EMAIL,
		SesActions.SEND_CUSTOM_VERIFICATION_EMAIL,
		SesActions.SEND_EMAIL,
		SesActions.SEND_RAW_EMAIL,
		SesActions.SEND_TEMPLATED_EMAIL,
		SesActions.SET_ACTIVE_RECEIPT_RULE_SET,
		SesActions.SET_IDENTITY_DKIM_ENABLED,
		SesActions.SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED,
		SesActions.SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED,
		SesActions.SET_IDENTITY_MAIL_FROM_DOMAIN,
		SesActions.SET_IDENTITY_NOTIFICATION_TOPIC,
		SesActions.SET_RECEIPT_RULE_POSITION,
		SesActions.START_ADDRESS_LIST_IMPORT_JOB,
		SesActions.START_ARCHIVE_EXPORT,
		SesActions.START_ARCHIVE_SEARCH,
		SesActions.STOP_ADDRESS_LIST_IMPORT_JOB,
		SesActions.STOP_ARCHIVE_EXPORT,
		SesActions.STOP_ARCHIVE_SEARCH,
		SesActions.TEST_RENDER_EMAIL_TEMPLATE,
		SesActions.TEST_RENDER_TEMPLATE,
		SesActions.UPDATE_ACCOUNT_SENDING_ENABLED,
		SesActions.UPDATE_ARCHIVE,
		SesActions.UPDATE_CONFIGURATION_SET_EVENT_DESTINATION,
		SesActions.UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED,
		SesActions.UPDATE_CONFIGURATION_SET_SENDING_ENABLED,
		SesActions.UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS,
		SesActions.UPDATE_CONTACT,
		SesActions.UPDATE_CONTACT_LIST,
		SesActions.UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE,
		SesActions.UPDATE_EMAIL_TEMPLATE,
		SesActions.UPDATE_INGRESS_POINT,
		SesActions.UPDATE_RECEIPT_RULE,
		SesActions.UPDATE_RELAY,
		SesActions.UPDATE_REPUTATION_ENTITY_CUSTOMER_MANAGED_STATUS,
		SesActions.UPDATE_REPUTATION_ENTITY_POLICY,
		SesActions.UPDATE_RULE_SET,
		SesActions.UPDATE_TEMPLATE,
		SesActions.UPDATE_TRAFFIC_POLICY,
		SesActions.VERIFY_DOMAIN_DKIM,
		SesActions.VERIFY_DOMAIN_IDENTITY,
		SesActions.VERIFY_EMAIL_ADDRESS,
		SesActions.VERIFY_EMAIL_IDENTITY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SesActions.LIST_ADDON_INSTANCES,
		SesActions.LIST_ADDON_SUBSCRIPTIONS,
		SesActions.LIST_ADDRESS_LIST_IMPORT_JOBS,
		SesActions.LIST_ADDRESS_LISTS,
		SesActions.LIST_ARCHIVE_EXPORTS,
		SesActions.LIST_ARCHIVE_SEARCHES,
		SesActions.LIST_ARCHIVES,
		SesActions.LIST_CONFIGURATION_SETS,
		SesActions.LIST_CONTACT_LISTS,
		SesActions.LIST_CONTACTS,
		SesActions.LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES,
		SesActions.LIST_DEDICATED_IP_POOLS,
		SesActions.LIST_DELIVERABILITY_TEST_REPORTS,
		SesActions.LIST_EMAIL_IDENTITIES,
		SesActions.LIST_EMAIL_TEMPLATES,
		SesActions.LIST_EXPORT_JOBS,
		SesActions.LIST_IDENTITIES,
		SesActions.LIST_IDENTITY_POLICIES,
		SesActions.LIST_IMPORT_JOBS,
		SesActions.LIST_INGRESS_POINTS,
		SesActions.LIST_MEMBERS_OF_ADDRESS_LIST,
		SesActions.LIST_MULTI_REGION_ENDPOINTS,
		SesActions.LIST_RELAYS,
		SesActions.LIST_REPUTATION_ENTITIES,
		SesActions.LIST_RESOURCE_TENANTS,
		SesActions.LIST_RULE_SETS,
		SesActions.LIST_TEMPLATES,
		SesActions.LIST_TENANT_RESOURCES,
		SesActions.LIST_TENANTS,
		SesActions.LIST_TRAFFIC_POLICIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SesActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
		SesActions.CREATE_EMAIL_IDENTITY_POLICY,
		SesActions.DELETE_EMAIL_IDENTITY_POLICY,
		SesActions.DELETE_IDENTITY_POLICY,
		SesActions.PUT_IDENTITY_POLICY,
		SesActions.REPLICATE_EMAIL_IDENTITY_DKIM_SIGNING_KEY,
		SesActions.UPDATE_EMAIL_IDENTITY_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SesActions.TAG_RESOURCE,
		SesActions.UNTAG_RESOURCE,
	];
}

const AddonInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):addon-instance/(?<addonInstanceId>[^:/?]+)$",
);
const AddonSubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):addon-subscription/(?<addonSubscriptionId>[^:/?]+)$",
);
const ConfigurationSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):configuration-set/(?<configurationSetName>[^:/?]+)$",
);
const ContactListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):contact-list/(?<contactListName>[^:/?]+)$",
);
const CustomVerificationEmailTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):custom-verification-email-template/(?<templateName>[^:/?]+)$",
);
const DedicatedIPPoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):dedicated-ip-pool/(?<dedicatedIPPool>[^:/?]+)$",
);
const DeliverabilityTestReportArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):deliverability-test-report/(?<reportId>[^:/?]+)$",
);
const ExportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):export-job/(?<exportJobId>[^:/?]+)$",
);
const IdentityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):identity/(?<identityName>[^:/?]+)$",
);
const ImportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):import-job/(?<importJobId>[^:/?]+)$",
);
const MailmanagerAddressListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-address-list/(?<addressListId>[^:/?]+)$",
);
const MailmanagerArchiveArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-archive/(?<archiveId>[^:/?]+)$",
);
const MailmanagerIngressPointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-ingress-point/(?<ingressPointId>[^:/?]+)$",
);
const MailmanagerRuleSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-rule-set/(?<ruleSetId>[^:/?]+)$",
);
const MailmanagerSmtpRelayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-smtp-relay/(?<relayId>[^:/?]+)$",
);
const MailmanagerTrafficPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-traffic-policy/(?<trafficPolicyId>[^:/?]+)$",
);
const MultiRegionEndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):multi-region-endpoint/(?<endpointName>[^:/?]+)$",
);
const ReputationPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):aws:reputation-policy/(?<reputationPolicyName>[^:/?]+)$",
);
const TemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):template/(?<templateName>[^:/?]+)$",
);
const TenantArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):tenant/(?<tenantName>[^:/?]+)/(?<tenantId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ses resources.
 */
export class SesResources {
	/**
	 * Builds an ARN for the addon-instance resource.
	 */
	static addonInstance(props: {
		/** The AddonInstanceId component of the ARN. */
		readonly addonInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:addon-instance/${props.addonInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the addon-instance resource.
	 */
	static isValidAddonInstanceArn(arn: string): boolean {
		return AddonInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a addon-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAddonInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		addonInstanceId: string;
	} {
		const match = AddonInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid addon-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			addonInstanceId: match.groups!.addonInstanceId,
		};
	}

	/**
	 * Builds an ARN for the addon-subscription resource.
	 */
	static addonSubscription(props: {
		/** The AddonSubscriptionId component of the ARN. */
		readonly addonSubscriptionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:addon-subscription/${props.addonSubscriptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the addon-subscription resource.
	 */
	static isValidAddonSubscriptionArn(arn: string): boolean {
		return AddonSubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a addon-subscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAddonSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		addonSubscriptionId: string;
	} {
		const match = AddonSubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid addon-subscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			addonSubscriptionId: match.groups!.addonSubscriptionId,
		};
	}

	/**
	 * Builds an ARN for the configuration-set resource.
	 */
	static configurationSet(props: {
		/** The ConfigurationSetName component of the ARN. */
		readonly configurationSetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:configuration-set/${props.configurationSetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the configuration-set resource.
	 */
	static isValidConfigurationSetArn(arn: string): boolean {
		return ConfigurationSetArnRegex.test(arn);
	}

	/**
	 * Parses a configuration-set ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConfigurationSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		configurationSetName: string;
	} {
		const match = ConfigurationSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid configuration-set ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			configurationSetName: match.groups!.configurationSetName,
		};
	}

	/**
	 * Builds an ARN for the contact-list resource.
	 */
	static contactList(props: {
		/** The ContactListName component of the ARN. */
		readonly contactListName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:contact-list/${props.contactListName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the contact-list resource.
	 */
	static isValidContactListArn(arn: string): boolean {
		return ContactListArnRegex.test(arn);
	}

	/**
	 * Parses a contact-list ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContactListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		contactListName: string;
	} {
		const match = ContactListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid contact-list ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contactListName: match.groups!.contactListName,
		};
	}

	/**
	 * Builds an ARN for the custom-verification-email-template resource.
	 */
	static customVerificationEmailTemplate(props: {
		/** The TemplateName component of the ARN. */
		readonly templateName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:custom-verification-email-template/${props.templateName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the custom-verification-email-template resource.
	 */
	static isValidCustomVerificationEmailTemplateArn(arn: string): boolean {
		return CustomVerificationEmailTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a custom-verification-email-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomVerificationEmailTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
	} {
		const match = CustomVerificationEmailTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid custom-verification-email-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
		};
	}

	/**
	 * Builds an ARN for the dedicated-ip-pool resource.
	 */
	static dedicatedIPPool(props: {
		/** The DedicatedIPPool component of the ARN. */
		readonly dedicatedIPPool: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:dedicated-ip-pool/${props.dedicatedIPPool}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dedicated-ip-pool resource.
	 */
	static isValidDedicatedIPPoolArn(arn: string): boolean {
		return DedicatedIPPoolArnRegex.test(arn);
	}

	/**
	 * Parses a dedicated-ip-pool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDedicatedIPPoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dedicatedIPPool: string;
	} {
		const match = DedicatedIPPoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dedicated-ip-pool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dedicatedIPPool: match.groups!.dedicatedIPPool,
		};
	}

	/**
	 * Builds an ARN for the deliverability-test-report resource.
	 */
	static deliverabilityTestReport(props: {
		/** The ReportId component of the ARN. */
		readonly reportId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:deliverability-test-report/${props.reportId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the deliverability-test-report resource.
	 */
	static isValidDeliverabilityTestReportArn(arn: string): boolean {
		return DeliverabilityTestReportArnRegex.test(arn);
	}

	/**
	 * Parses a deliverability-test-report ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDeliverabilityTestReportArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reportId: string;
	} {
		const match = DeliverabilityTestReportArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid deliverability-test-report ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reportId: match.groups!.reportId,
		};
	}

	/**
	 * Builds an ARN for the export-job resource.
	 */
	static exportJob(props: {
		/** The ExportJobId component of the ARN. */
		readonly exportJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:export-job/${props.exportJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the export-job resource.
	 */
	static isValidExportJobArn(arn: string): boolean {
		return ExportJobArnRegex.test(arn);
	}

	/**
	 * Parses a export-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		exportJobId: string;
	} {
		const match = ExportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid export-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			exportJobId: match.groups!.exportJobId,
		};
	}

	/**
	 * Builds an ARN for the identity resource.
	 */
	static identity(props: {
		/** The IdentityName component of the ARN. */
		readonly identityName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:identity/${props.identityName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identity resource.
	 */
	static isValidIdentityArn(arn: string): boolean {
		return IdentityArnRegex.test(arn);
	}

	/**
	 * Parses a identity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identityName: string;
	} {
		const match = IdentityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identityName: match.groups!.identityName,
		};
	}

	/**
	 * Builds an ARN for the import-job resource.
	 */
	static importJob(props: {
		/** The ImportJobId component of the ARN. */
		readonly importJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:import-job/${props.importJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the import-job resource.
	 */
	static isValidImportJobArn(arn: string): boolean {
		return ImportJobArnRegex.test(arn);
	}

	/**
	 * Parses a import-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		importJobId: string;
	} {
		const match = ImportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid import-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			importJobId: match.groups!.importJobId,
		};
	}

	/**
	 * Builds an ARN for the mailmanager-address-list resource.
	 */
	static mailmanagerAddressList(props: {
		/** The AddressListId component of the ARN. */
		readonly addressListId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:mailmanager-address-list/${props.addressListId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mailmanager-address-list resource.
	 */
	static isValidMailmanagerAddressListArn(arn: string): boolean {
		return MailmanagerAddressListArnRegex.test(arn);
	}

	/**
	 * Parses a mailmanager-address-list ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMailmanagerAddressListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		addressListId: string;
	} {
		const match = MailmanagerAddressListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mailmanager-address-list ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			addressListId: match.groups!.addressListId,
		};
	}

	/**
	 * Builds an ARN for the mailmanager-archive resource.
	 */
	static mailmanagerArchive(props: {
		/** The ArchiveId component of the ARN. */
		readonly archiveId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:mailmanager-archive/${props.archiveId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mailmanager-archive resource.
	 */
	static isValidMailmanagerArchiveArn(arn: string): boolean {
		return MailmanagerArchiveArnRegex.test(arn);
	}

	/**
	 * Parses a mailmanager-archive ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMailmanagerArchiveArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		archiveId: string;
	} {
		const match = MailmanagerArchiveArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mailmanager-archive ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			archiveId: match.groups!.archiveId,
		};
	}

	/**
	 * Builds an ARN for the mailmanager-ingress-point resource.
	 */
	static mailmanagerIngressPoint(props: {
		/** The IngressPointId component of the ARN. */
		readonly ingressPointId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:mailmanager-ingress-point/${props.ingressPointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mailmanager-ingress-point resource.
	 */
	static isValidMailmanagerIngressPointArn(arn: string): boolean {
		return MailmanagerIngressPointArnRegex.test(arn);
	}

	/**
	 * Parses a mailmanager-ingress-point ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMailmanagerIngressPointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ingressPointId: string;
	} {
		const match = MailmanagerIngressPointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mailmanager-ingress-point ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ingressPointId: match.groups!.ingressPointId,
		};
	}

	/**
	 * Builds an ARN for the mailmanager-rule-set resource.
	 */
	static mailmanagerRuleSet(props: {
		/** The RuleSetId component of the ARN. */
		readonly ruleSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:mailmanager-rule-set/${props.ruleSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mailmanager-rule-set resource.
	 */
	static isValidMailmanagerRuleSetArn(arn: string): boolean {
		return MailmanagerRuleSetArnRegex.test(arn);
	}

	/**
	 * Parses a mailmanager-rule-set ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMailmanagerRuleSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ruleSetId: string;
	} {
		const match = MailmanagerRuleSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mailmanager-rule-set ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ruleSetId: match.groups!.ruleSetId,
		};
	}

	/**
	 * Builds an ARN for the mailmanager-smtp-relay resource.
	 */
	static mailmanagerSmtpRelay(props: {
		/** The RelayId component of the ARN. */
		readonly relayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:mailmanager-smtp-relay/${props.relayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mailmanager-smtp-relay resource.
	 */
	static isValidMailmanagerSmtpRelayArn(arn: string): boolean {
		return MailmanagerSmtpRelayArnRegex.test(arn);
	}

	/**
	 * Parses a mailmanager-smtp-relay ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMailmanagerSmtpRelayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		relayId: string;
	} {
		const match = MailmanagerSmtpRelayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mailmanager-smtp-relay ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			relayId: match.groups!.relayId,
		};
	}

	/**
	 * Builds an ARN for the mailmanager-traffic-policy resource.
	 */
	static mailmanagerTrafficPolicy(props: {
		/** The TrafficPolicyId component of the ARN. */
		readonly trafficPolicyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:mailmanager-traffic-policy/${props.trafficPolicyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mailmanager-traffic-policy resource.
	 */
	static isValidMailmanagerTrafficPolicyArn(arn: string): boolean {
		return MailmanagerTrafficPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a mailmanager-traffic-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMailmanagerTrafficPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trafficPolicyId: string;
	} {
		const match = MailmanagerTrafficPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mailmanager-traffic-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trafficPolicyId: match.groups!.trafficPolicyId,
		};
	}

	/**
	 * Builds an ARN for the multi-region-endpoint resource.
	 */
	static multiRegionEndpoint(props: {
		/** The EndpointName component of the ARN. */
		readonly endpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:multi-region-endpoint/${props.endpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the multi-region-endpoint resource.
	 */
	static isValidMultiRegionEndpointArn(arn: string): boolean {
		return MultiRegionEndpointArnRegex.test(arn);
	}

	/**
	 * Parses a multi-region-endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMultiRegionEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		endpointName: string;
	} {
		const match = MultiRegionEndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid multi-region-endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			endpointName: match.groups!.endpointName,
		};
	}

	/**
	 * Builds an ARN for the reputation-policy resource.
	 */
	static reputationPolicy(props: {
		/** The ReputationPolicyName component of the ARN. */
		readonly reputationPolicyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:aws:reputation-policy/${props.reputationPolicyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reputation-policy resource.
	 */
	static isValidReputationPolicyArn(arn: string): boolean {
		return ReputationPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a reputation-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReputationPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reputationPolicyName: string;
	} {
		const match = ReputationPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reputation-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reputationPolicyName: match.groups!.reputationPolicyName,
		};
	}

	/**
	 * Builds an ARN for the template resource.
	 */
	static template(props: {
		/** The TemplateName component of the ARN. */
		readonly templateName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:template/${props.templateName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the template resource.
	 */
	static isValidTemplateArn(arn: string): boolean {
		return TemplateArnRegex.test(arn);
	}

	/**
	 * Parses a template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		templateName: string;
	} {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			templateName: match.groups!.templateName,
		};
	}

	/**
	 * Builds an ARN for the tenant resource.
	 */
	static tenant(props: {
		/** The TenantName component of the ARN. */
		readonly tenantName: string;
		/** The TenantId component of the ARN. */
		readonly tenantId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ses:${props.region ?? "*"}:${props.account ?? "*"}:tenant/${props.tenantName}/${props.tenantId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tenant resource.
	 */
	static isValidTenantArn(arn: string): boolean {
		return TenantArnRegex.test(arn);
	}

	/**
	 * Parses a tenant ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTenantArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tenantName: string;
		tenantId: string;
	} {
		const match = TenantArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tenant ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tenantName: match.groups!.tenantName,
			tenantId: match.groups!.tenantId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ses.
 */
export class SesOperations {
	/** IAM actions required for the BatchGetMetricData API call. */
	static readonly BATCH_GET_METRIC_DATA: string[] = ["ses:BatchGetMetricData"];
	/** IAM actions required for the CancelExportJob API call. */
	static readonly CANCEL_EXPORT_JOB: string[] = ["ses:CancelExportJob"];
	/** IAM actions required for the CloneReceiptRuleSet API call. */
	static readonly CLONE_RECEIPT_RULE_SET: string[] = [
		"ses:CloneReceiptRuleSet",
	];
	/** IAM actions required for the CreateAddonInstance API call. */
	static readonly CREATE_ADDON_INSTANCE: string[] = [
		"ses:CreateAddonInstance",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateAddonSubscription API call. */
	static readonly CREATE_ADDON_SUBSCRIPTION: string[] = [
		"ses:CreateAddonSubscription",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateAddressList API call. */
	static readonly CREATE_ADDRESS_LIST: string[] = [
		"ses:CreateAddressList",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateAddressListImportJob API call. */
	static readonly CREATE_ADDRESS_LIST_IMPORT_JOB: string[] = [
		"ses:CreateAddressListImportJob",
	];
	/** IAM actions required for the CreateArchive API call. */
	static readonly CREATE_ARCHIVE: string[] = [
		"ses:CreateArchive",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateConfigurationSet API call. */
	static readonly CREATE_CONFIGURATION_SET: string[] = [
		"ses:CreateConfigurationSet",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateConfigurationSetEventDestination API call. */
	static readonly CREATE_CONFIGURATION_SET_EVENT_DESTINATION: string[] = [
		"ses:CreateConfigurationSetEventDestination",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateConfigurationSetTrackingOptions API call. */
	static readonly CREATE_CONFIGURATION_SET_TRACKING_OPTIONS: string[] = [
		"ses:CreateConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the CreateContact API call. */
	static readonly CREATE_CONTACT: string[] = ["ses:CreateContact"];
	/** IAM actions required for the CreateContactList API call. */
	static readonly CREATE_CONTACT_LIST: string[] = [
		"ses:CreateContactList",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateCustomVerificationEmailTemplate API call. */
	static readonly CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE: string[] = [
		"ses:CreateCustomVerificationEmailTemplate",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateDedicatedIpPool API call. */
	static readonly CREATE_DEDICATED_IP_POOL: string[] = [
		"ses:CreateDedicatedIpPool",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateDeliverabilityTestReport API call. */
	static readonly CREATE_DELIVERABILITY_TEST_REPORT: string[] = [
		"ses:CreateDeliverabilityTestReport",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateEmailIdentity API call. */
	static readonly CREATE_EMAIL_IDENTITY: string[] = [
		"ses:CreateEmailIdentity",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateEmailIdentityPolicy API call. */
	static readonly CREATE_EMAIL_IDENTITY_POLICY: string[] = [
		"ses:CreateEmailIdentityPolicy",
	];
	/** IAM actions required for the CreateEmailTemplate API call. */
	static readonly CREATE_EMAIL_TEMPLATE: string[] = [
		"ses:CreateEmailTemplate",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateExportJob API call. */
	static readonly CREATE_EXPORT_JOB: string[] = ["ses:CreateExportJob"];
	/** IAM actions required for the CreateImportJob API call. */
	static readonly CREATE_IMPORT_JOB: string[] = ["ses:CreateImportJob"];
	/** IAM actions required for the CreateIngressPoint API call. */
	static readonly CREATE_INGRESS_POINT: string[] = [
		"ses:CreateIngressPoint",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateMultiRegionEndpoint API call. */
	static readonly CREATE_MULTI_REGION_ENDPOINT: string[] = [
		"ses:CreateMultiRegionEndpoint",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateReceiptFilter API call. */
	static readonly CREATE_RECEIPT_FILTER: string[] = ["ses:CreateReceiptFilter"];
	/** IAM actions required for the CreateReceiptRule API call. */
	static readonly CREATE_RECEIPT_RULE: string[] = [
		"ses:CreateReceiptRule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateReceiptRuleSet API call. */
	static readonly CREATE_RECEIPT_RULE_SET: string[] = [
		"ses:CreateReceiptRuleSet",
	];
	/** IAM actions required for the CreateRelay API call. */
	static readonly CREATE_RELAY: string[] = [
		"ses:CreateRelay",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateRuleSet API call. */
	static readonly CREATE_RULE_SET: string[] = [
		"ses:CreateRuleSet",
		"iam:PassRole",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CREATE_TEMPLATE: string[] = ["ses:CreateTemplate"];
	/** IAM actions required for the CreateTenant API call. */
	static readonly CREATE_TENANT: string[] = [
		"ses:CreateTenant",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateTenantResourceAssociation API call. */
	static readonly CREATE_TENANT_RESOURCE_ASSOCIATION: string[] = [
		"ses:CreateTenantResourceAssociation",
	];
	/** IAM actions required for the CreateTrafficPolicy API call. */
	static readonly CREATE_TRAFFIC_POLICY: string[] = [
		"ses:CreateTrafficPolicy",
		"ses:TagResource",
	];
	/** IAM actions required for the DeleteAddonInstance API call. */
	static readonly DELETE_ADDON_INSTANCE: string[] = ["ses:DeleteAddonInstance"];
	/** IAM actions required for the DeleteAddonSubscription API call. */
	static readonly DELETE_ADDON_SUBSCRIPTION: string[] = [
		"ses:DeleteAddonSubscription",
	];
	/** IAM actions required for the DeleteAddressList API call. */
	static readonly DELETE_ADDRESS_LIST: string[] = ["ses:DeleteAddressList"];
	/** IAM actions required for the DeleteArchive API call. */
	static readonly DELETE_ARCHIVE: string[] = ["ses:DeleteArchive"];
	/** IAM actions required for the DeleteConfigurationSet API call. */
	static readonly DELETE_CONFIGURATION_SET: string[] = [
		"ses:DeleteConfigurationSet",
	];
	/** IAM actions required for the DeleteConfigurationSetEventDestination API call. */
	static readonly DELETE_CONFIGURATION_SET_EVENT_DESTINATION: string[] = [
		"ses:DeleteConfigurationSetEventDestination",
	];
	/** IAM actions required for the DeleteConfigurationSetTrackingOptions API call. */
	static readonly DELETE_CONFIGURATION_SET_TRACKING_OPTIONS: string[] = [
		"ses:DeleteConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the DeleteContact API call. */
	static readonly DELETE_CONTACT: string[] = ["ses:DeleteContact"];
	/** IAM actions required for the DeleteContactList API call. */
	static readonly DELETE_CONTACT_LIST: string[] = ["ses:DeleteContactList"];
	/** IAM actions required for the DeleteCustomVerificationEmailTemplate API call. */
	static readonly DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE: string[] = [
		"ses:DeleteCustomVerificationEmailTemplate",
	];
	/** IAM actions required for the DeleteDedicatedIpPool API call. */
	static readonly DELETE_DEDICATED_IP_POOL: string[] = [
		"ses:DeleteDedicatedIpPool",
	];
	/** IAM actions required for the DeleteEmailIdentity API call. */
	static readonly DELETE_EMAIL_IDENTITY: string[] = ["ses:DeleteEmailIdentity"];
	/** IAM actions required for the DeleteEmailIdentityPolicy API call. */
	static readonly DELETE_EMAIL_IDENTITY_POLICY: string[] = [
		"ses:DeleteEmailIdentityPolicy",
	];
	/** IAM actions required for the DeleteEmailTemplate API call. */
	static readonly DELETE_EMAIL_TEMPLATE: string[] = ["ses:DeleteEmailTemplate"];
	/** IAM actions required for the DeleteIdentity API call. */
	static readonly DELETE_IDENTITY: string[] = ["ses:DeleteIdentity"];
	/** IAM actions required for the DeleteIdentityPolicy API call. */
	static readonly DELETE_IDENTITY_POLICY: string[] = [
		"ses:DeleteIdentityPolicy",
	];
	/** IAM actions required for the DeleteIngressPoint API call. */
	static readonly DELETE_INGRESS_POINT: string[] = ["ses:DeleteIngressPoint"];
	/** IAM actions required for the DeleteMultiRegionEndpoint API call. */
	static readonly DELETE_MULTI_REGION_ENDPOINT: string[] = [
		"ses:DeleteMultiRegionEndpoint",
	];
	/** IAM actions required for the DeleteReceiptFilter API call. */
	static readonly DELETE_RECEIPT_FILTER: string[] = ["ses:DeleteReceiptFilter"];
	/** IAM actions required for the DeleteReceiptRule API call. */
	static readonly DELETE_RECEIPT_RULE: string[] = ["ses:DeleteReceiptRule"];
	/** IAM actions required for the DeleteReceiptRuleSet API call. */
	static readonly DELETE_RECEIPT_RULE_SET: string[] = [
		"ses:DeleteReceiptRuleSet",
	];
	/** IAM actions required for the DeleteRelay API call. */
	static readonly DELETE_RELAY: string[] = ["ses:DeleteRelay"];
	/** IAM actions required for the DeleteRuleSet API call. */
	static readonly DELETE_RULE_SET: string[] = ["ses:DeleteRuleSet"];
	/** IAM actions required for the DeleteSuppressedDestination API call. */
	static readonly DELETE_SUPPRESSED_DESTINATION: string[] = [
		"ses:DeleteSuppressedDestination",
	];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DELETE_TEMPLATE: string[] = ["ses:DeleteTemplate"];
	/** IAM actions required for the DeleteTenant API call. */
	static readonly DELETE_TENANT: string[] = ["ses:DeleteTenant"];
	/** IAM actions required for the DeleteTenantResourceAssociation API call. */
	static readonly DELETE_TENANT_RESOURCE_ASSOCIATION: string[] = [
		"ses:DeleteTenantResourceAssociation",
	];
	/** IAM actions required for the DeleteTrafficPolicy API call. */
	static readonly DELETE_TRAFFIC_POLICY: string[] = ["ses:DeleteTrafficPolicy"];
	/** IAM actions required for the DeleteVerifiedEmailAddress API call. */
	static readonly DELETE_VERIFIED_EMAIL_ADDRESS: string[] = [
		"ses:DeleteVerifiedEmailAddress",
	];
	/** IAM actions required for the DeregisterMemberFromAddressList API call. */
	static readonly DEREGISTER_MEMBER_FROM_ADDRESS_LIST: string[] = [
		"ses:DeregisterMemberFromAddressList",
	];
	/** IAM actions required for the DescribeActiveReceiptRuleSet API call. */
	static readonly DESCRIBE_ACTIVE_RECEIPT_RULE_SET: string[] = [
		"ses:DescribeActiveReceiptRuleSet",
	];
	/** IAM actions required for the DescribeConfigurationSet API call. */
	static readonly DESCRIBE_CONFIGURATION_SET: string[] = [
		"ses:DescribeConfigurationSet",
	];
	/** IAM actions required for the DescribeReceiptRule API call. */
	static readonly DESCRIBE_RECEIPT_RULE: string[] = ["ses:DescribeReceiptRule"];
	/** IAM actions required for the DescribeReceiptRuleSet API call. */
	static readonly DESCRIBE_RECEIPT_RULE_SET: string[] = [
		"ses:DescribeReceiptRuleSet",
	];
	/** IAM actions required for the GetAccount API call. */
	static readonly GET_ACCOUNT: string[] = ["ses:GetAccount"];
	/** IAM actions required for the GetAccountSendingEnabled API call. */
	static readonly GET_ACCOUNT_SENDING_ENABLED: string[] = [
		"ses:GetAccountSendingEnabled",
	];
	/** IAM actions required for the GetAddonInstance API call. */
	static readonly GET_ADDON_INSTANCE: string[] = ["ses:GetAddonInstance"];
	/** IAM actions required for the GetAddonSubscription API call. */
	static readonly GET_ADDON_SUBSCRIPTION: string[] = [
		"ses:GetAddonSubscription",
	];
	/** IAM actions required for the GetAddressList API call. */
	static readonly GET_ADDRESS_LIST: string[] = ["ses:GetAddressList"];
	/** IAM actions required for the GetAddressListImportJob API call. */
	static readonly GET_ADDRESS_LIST_IMPORT_JOB: string[] = [
		"ses:GetAddressListImportJob",
	];
	/** IAM actions required for the GetArchive API call. */
	static readonly GET_ARCHIVE: string[] = ["ses:GetArchive"];
	/** IAM actions required for the GetArchiveExport API call. */
	static readonly GET_ARCHIVE_EXPORT: string[] = ["ses:GetArchiveExport"];
	/** IAM actions required for the GetArchiveMessage API call. */
	static readonly GET_ARCHIVE_MESSAGE: string[] = ["ses:GetArchiveMessage"];
	/** IAM actions required for the GetArchiveMessageContent API call. */
	static readonly GET_ARCHIVE_MESSAGE_CONTENT: string[] = [
		"ses:GetArchiveMessageContent",
	];
	/** IAM actions required for the GetArchiveSearch API call. */
	static readonly GET_ARCHIVE_SEARCH: string[] = ["ses:GetArchiveSearch"];
	/** IAM actions required for the GetArchiveSearchResults API call. */
	static readonly GET_ARCHIVE_SEARCH_RESULTS: string[] = [
		"ses:GetArchiveSearchResults",
	];
	/** IAM actions required for the GetBlacklistReports API call. */
	static readonly GET_BLACKLIST_REPORTS: string[] = ["ses:GetBlacklistReports"];
	/** IAM actions required for the GetConfigurationSet API call. */
	static readonly GET_CONFIGURATION_SET: string[] = ["ses:GetConfigurationSet"];
	/** IAM actions required for the GetConfigurationSetEventDestinations API call. */
	static readonly GET_CONFIGURATION_SET_EVENT_DESTINATIONS: string[] = [
		"ses:GetConfigurationSetEventDestinations",
	];
	/** IAM actions required for the GetContact API call. */
	static readonly GET_CONTACT: string[] = ["ses:GetContact"];
	/** IAM actions required for the GetContactList API call. */
	static readonly GET_CONTACT_LIST: string[] = ["ses:GetContactList"];
	/** IAM actions required for the GetCustomVerificationEmailTemplate API call. */
	static readonly GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE: string[] = [
		"ses:GetCustomVerificationEmailTemplate",
	];
	/** IAM actions required for the GetDedicatedIp API call. */
	static readonly GET_DEDICATED_IP: string[] = ["ses:GetDedicatedIp"];
	/** IAM actions required for the GetDedicatedIpPool API call. */
	static readonly GET_DEDICATED_IP_POOL: string[] = ["ses:GetDedicatedIpPool"];
	/** IAM actions required for the GetDedicatedIps API call. */
	static readonly GET_DEDICATED_IPS: string[] = ["ses:GetDedicatedIps"];
	/** IAM actions required for the GetDeliverabilityDashboardOptions API call. */
	static readonly GET_DELIVERABILITY_DASHBOARD_OPTIONS: string[] = [
		"ses:GetDeliverabilityDashboardOptions",
	];
	/** IAM actions required for the GetDeliverabilityTestReport API call. */
	static readonly GET_DELIVERABILITY_TEST_REPORT: string[] = [
		"ses:GetDeliverabilityTestReport",
	];
	/** IAM actions required for the GetDomainDeliverabilityCampaign API call. */
	static readonly GET_DOMAIN_DELIVERABILITY_CAMPAIGN: string[] = [
		"ses:GetDomainDeliverabilityCampaign",
	];
	/** IAM actions required for the GetDomainStatisticsReport API call. */
	static readonly GET_DOMAIN_STATISTICS_REPORT: string[] = [
		"ses:GetDomainStatisticsReport",
	];
	/** IAM actions required for the GetEmailAddressInsights API call. */
	static readonly GET_EMAIL_ADDRESS_INSIGHTS: string[] = [
		"ses:GetEmailAddressInsights",
	];
	/** IAM actions required for the GetEmailIdentity API call. */
	static readonly GET_EMAIL_IDENTITY: string[] = ["ses:GetEmailIdentity"];
	/** IAM actions required for the GetEmailIdentityPolicies API call. */
	static readonly GET_EMAIL_IDENTITY_POLICIES: string[] = [
		"ses:GetEmailIdentityPolicies",
	];
	/** IAM actions required for the GetEmailTemplate API call. */
	static readonly GET_EMAIL_TEMPLATE: string[] = ["ses:GetEmailTemplate"];
	/** IAM actions required for the GetExportJob API call. */
	static readonly GET_EXPORT_JOB: string[] = ["ses:GetExportJob"];
	/** IAM actions required for the GetIdentityDkimAttributes API call. */
	static readonly GET_IDENTITY_DKIM_ATTRIBUTES: string[] = [
		"ses:GetIdentityDkimAttributes",
	];
	/** IAM actions required for the GetIdentityMailFromDomainAttributes API call. */
	static readonly GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES: string[] = [
		"ses:GetIdentityMailFromDomainAttributes",
	];
	/** IAM actions required for the GetIdentityNotificationAttributes API call. */
	static readonly GET_IDENTITY_NOTIFICATION_ATTRIBUTES: string[] = [
		"ses:GetIdentityNotificationAttributes",
	];
	/** IAM actions required for the GetIdentityPolicies API call. */
	static readonly GET_IDENTITY_POLICIES: string[] = ["ses:GetIdentityPolicies"];
	/** IAM actions required for the GetIdentityVerificationAttributes API call. */
	static readonly GET_IDENTITY_VERIFICATION_ATTRIBUTES: string[] = [
		"ses:GetIdentityVerificationAttributes",
	];
	/** IAM actions required for the GetImportJob API call. */
	static readonly GET_IMPORT_JOB: string[] = ["ses:GetImportJob"];
	/** IAM actions required for the GetIngressPoint API call. */
	static readonly GET_INGRESS_POINT: string[] = ["ses:GetIngressPoint"];
	/** IAM actions required for the GetMemberOfAddressList API call. */
	static readonly GET_MEMBER_OF_ADDRESS_LIST: string[] = [
		"ses:GetMemberOfAddressList",
	];
	/** IAM actions required for the GetMessageInsights API call. */
	static readonly GET_MESSAGE_INSIGHTS: string[] = ["ses:GetMessageInsights"];
	/** IAM actions required for the GetMultiRegionEndpoint API call. */
	static readonly GET_MULTI_REGION_ENDPOINT: string[] = [
		"ses:GetMultiRegionEndpoint",
	];
	/** IAM actions required for the GetRelay API call. */
	static readonly GET_RELAY: string[] = ["ses:GetRelay"];
	/** IAM actions required for the GetReputationEntity API call. */
	static readonly GET_REPUTATION_ENTITY: string[] = ["ses:GetReputationEntity"];
	/** IAM actions required for the GetRuleSet API call. */
	static readonly GET_RULE_SET: string[] = ["ses:GetRuleSet"];
	/** IAM actions required for the GetSendQuota API call. */
	static readonly GET_SEND_QUOTA: string[] = ["ses:GetSendQuota"];
	/** IAM actions required for the GetSendStatistics API call. */
	static readonly GET_SEND_STATISTICS: string[] = ["ses:GetSendStatistics"];
	/** IAM actions required for the GetSuppressedDestination API call. */
	static readonly GET_SUPPRESSED_DESTINATION: string[] = [
		"ses:GetSuppressedDestination",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly GET_TEMPLATE: string[] = ["ses:GetTemplate"];
	/** IAM actions required for the GetTenant API call. */
	static readonly GET_TENANT: string[] = ["ses:GetTenant"];
	/** IAM actions required for the GetTrafficPolicy API call. */
	static readonly GET_TRAFFIC_POLICY: string[] = ["ses:GetTrafficPolicy"];
	/** IAM actions required for the ListAddonInstances API call. */
	static readonly LIST_ADDON_INSTANCES: string[] = ["ses:ListAddonInstances"];
	/** IAM actions required for the ListAddonSubscriptions API call. */
	static readonly LIST_ADDON_SUBSCRIPTIONS: string[] = [
		"ses:ListAddonSubscriptions",
	];
	/** IAM actions required for the ListAddressListImportJobs API call. */
	static readonly LIST_ADDRESS_LIST_IMPORT_JOBS: string[] = [
		"ses:ListAddressListImportJobs",
	];
	/** IAM actions required for the ListAddressLists API call. */
	static readonly LIST_ADDRESS_LISTS: string[] = ["ses:ListAddressLists"];
	/** IAM actions required for the ListArchiveExports API call. */
	static readonly LIST_ARCHIVE_EXPORTS: string[] = ["ses:ListArchiveExports"];
	/** IAM actions required for the ListArchiveSearches API call. */
	static readonly LIST_ARCHIVE_SEARCHES: string[] = ["ses:ListArchiveSearches"];
	/** IAM actions required for the ListArchives API call. */
	static readonly LIST_ARCHIVES: string[] = ["ses:ListArchives"];
	/** IAM actions required for the ListConfigurationSets API call. */
	static readonly LIST_CONFIGURATION_SETS: string[] = [
		"ses:ListConfigurationSets",
	];
	/** IAM actions required for the ListContactLists API call. */
	static readonly LIST_CONTACT_LISTS: string[] = ["ses:ListContactLists"];
	/** IAM actions required for the ListContacts API call. */
	static readonly LIST_CONTACTS: string[] = ["ses:ListContacts"];
	/** IAM actions required for the ListCustomVerificationEmailTemplates API call. */
	static readonly LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES: string[] = [
		"ses:ListCustomVerificationEmailTemplates",
	];
	/** IAM actions required for the ListDedicatedIpPools API call. */
	static readonly LIST_DEDICATED_IP_POOLS: string[] = [
		"ses:ListDedicatedIpPools",
	];
	/** IAM actions required for the ListDeliverabilityTestReports API call. */
	static readonly LIST_DELIVERABILITY_TEST_REPORTS: string[] = [
		"ses:ListDeliverabilityTestReports",
	];
	/** IAM actions required for the ListDomainDeliverabilityCampaigns API call. */
	static readonly LIST_DOMAIN_DELIVERABILITY_CAMPAIGNS: string[] = [
		"ses:ListDomainDeliverabilityCampaigns",
	];
	/** IAM actions required for the ListEmailIdentities API call. */
	static readonly LIST_EMAIL_IDENTITIES: string[] = ["ses:ListEmailIdentities"];
	/** IAM actions required for the ListEmailTemplates API call. */
	static readonly LIST_EMAIL_TEMPLATES: string[] = ["ses:ListEmailTemplates"];
	/** IAM actions required for the ListExportJobs API call. */
	static readonly LIST_EXPORT_JOBS: string[] = ["ses:ListExportJobs"];
	/** IAM actions required for the ListIdentities API call. */
	static readonly LIST_IDENTITIES: string[] = ["ses:ListIdentities"];
	/** IAM actions required for the ListIdentityPolicies API call. */
	static readonly LIST_IDENTITY_POLICIES: string[] = [
		"ses:ListIdentityPolicies",
	];
	/** IAM actions required for the ListImportJobs API call. */
	static readonly LIST_IMPORT_JOBS: string[] = ["ses:ListImportJobs"];
	/** IAM actions required for the ListIngressPoints API call. */
	static readonly LIST_INGRESS_POINTS: string[] = ["ses:ListIngressPoints"];
	/** IAM actions required for the ListMembersOfAddressList API call. */
	static readonly LIST_MEMBERS_OF_ADDRESS_LIST: string[] = [
		"ses:ListMembersOfAddressList",
	];
	/** IAM actions required for the ListMultiRegionEndpoints API call. */
	static readonly LIST_MULTI_REGION_ENDPOINTS: string[] = [
		"ses:ListMultiRegionEndpoints",
	];
	/** IAM actions required for the ListReceiptFilters API call. */
	static readonly LIST_RECEIPT_FILTERS: string[] = ["ses:ListReceiptFilters"];
	/** IAM actions required for the ListReceiptRuleSets API call. */
	static readonly LIST_RECEIPT_RULE_SETS: string[] = [
		"ses:ListReceiptRuleSets",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = ["ses:ListRecommendations"];
	/** IAM actions required for the ListRelays API call. */
	static readonly LIST_RELAYS: string[] = ["ses:ListRelays"];
	/** IAM actions required for the ListReputationEntities API call. */
	static readonly LIST_REPUTATION_ENTITIES: string[] = [
		"ses:ListReputationEntities",
	];
	/** IAM actions required for the ListResourceTenants API call. */
	static readonly LIST_RESOURCE_TENANTS: string[] = ["ses:ListResourceTenants"];
	/** IAM actions required for the ListRuleSets API call. */
	static readonly LIST_RULE_SETS: string[] = ["ses:ListRuleSets"];
	/** IAM actions required for the ListSuppressedDestinations API call. */
	static readonly LIST_SUPPRESSED_DESTINATIONS: string[] = [
		"ses:ListSuppressedDestinations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ses:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly LIST_TEMPLATES: string[] = ["ses:ListTemplates"];
	/** IAM actions required for the ListTenantResources API call. */
	static readonly LIST_TENANT_RESOURCES: string[] = ["ses:ListTenantResources"];
	/** IAM actions required for the ListTenants API call. */
	static readonly LIST_TENANTS: string[] = ["ses:ListTenants"];
	/** IAM actions required for the ListTrafficPolicies API call. */
	static readonly LIST_TRAFFIC_POLICIES: string[] = ["ses:ListTrafficPolicies"];
	/** IAM actions required for the ListVerifiedEmailAddresses API call. */
	static readonly LIST_VERIFIED_EMAIL_ADDRESSES: string[] = [
		"ses:ListVerifiedEmailAddresses",
	];
	/** IAM actions required for the PutAccountDedicatedIpWarmupAttributes API call. */
	static readonly PUT_ACCOUNT_DEDICATED_IP_WARMUP_ATTRIBUTES: string[] = [
		"ses:PutAccountDedicatedIpWarmupAttributes",
	];
	/** IAM actions required for the PutAccountDetails API call. */
	static readonly PUT_ACCOUNT_DETAILS: string[] = ["ses:PutAccountDetails"];
	/** IAM actions required for the PutAccountPricingAttributes API call. */
	static readonly PUT_ACCOUNT_PRICING_ATTRIBUTES: string[] = [
		"ses:PutAccountPricingAttributes",
	];
	/** IAM actions required for the PutAccountSendingAttributes API call. */
	static readonly PUT_ACCOUNT_SENDING_ATTRIBUTES: string[] = [
		"ses:PutAccountSendingAttributes",
	];
	/** IAM actions required for the PutAccountSuppressionAttributes API call. */
	static readonly PUT_ACCOUNT_SUPPRESSION_ATTRIBUTES: string[] = [
		"ses:PutAccountSuppressionAttributes",
	];
	/** IAM actions required for the PutAccountVdmAttributes API call. */
	static readonly PUT_ACCOUNT_VDM_ATTRIBUTES: string[] = [
		"ses:PutAccountVdmAttributes",
	];
	/** IAM actions required for the PutConfigurationSetArchivingOptions API call. */
	static readonly PUT_CONFIGURATION_SET_ARCHIVING_OPTIONS: string[] = [
		"ses:PutConfigurationSetArchivingOptions",
	];
	/** IAM actions required for the PutConfigurationSetDeliveryOptions API call. */
	static readonly PUT_CONFIGURATION_SET_DELIVERY_OPTIONS: string[] = [
		"ses:PutConfigurationSetDeliveryOptions",
	];
	/** IAM actions required for the PutConfigurationSetReputationOptions API call. */
	static readonly PUT_CONFIGURATION_SET_REPUTATION_OPTIONS: string[] = [
		"ses:PutConfigurationSetReputationOptions",
	];
	/** IAM actions required for the PutConfigurationSetSendingOptions API call. */
	static readonly PUT_CONFIGURATION_SET_SENDING_OPTIONS: string[] = [
		"ses:PutConfigurationSetSendingOptions",
	];
	/** IAM actions required for the PutConfigurationSetSuppressionOptions API call. */
	static readonly PUT_CONFIGURATION_SET_SUPPRESSION_OPTIONS: string[] = [
		"ses:PutConfigurationSetSuppressionOptions",
	];
	/** IAM actions required for the PutConfigurationSetTrackingOptions API call. */
	static readonly PUT_CONFIGURATION_SET_TRACKING_OPTIONS: string[] = [
		"ses:PutConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the PutConfigurationSetVdmOptions API call. */
	static readonly PUT_CONFIGURATION_SET_VDM_OPTIONS: string[] = [
		"ses:PutConfigurationSetVdmOptions",
	];
	/** IAM actions required for the PutDedicatedIpInPool API call. */
	static readonly PUT_DEDICATED_IP_IN_POOL: string[] = [
		"ses:PutDedicatedIpInPool",
	];
	/** IAM actions required for the PutDedicatedIpPoolScalingAttributes API call. */
	static readonly PUT_DEDICATED_IP_POOL_SCALING_ATTRIBUTES: string[] = [
		"ses:PutDedicatedIpPoolScalingAttributes",
	];
	/** IAM actions required for the PutDedicatedIpWarmupAttributes API call. */
	static readonly PUT_DEDICATED_IP_WARMUP_ATTRIBUTES: string[] = [
		"ses:PutDedicatedIpWarmupAttributes",
	];
	/** IAM actions required for the PutDeliverabilityDashboardOption API call. */
	static readonly PUT_DELIVERABILITY_DASHBOARD_OPTION: string[] = [
		"ses:PutDeliverabilityDashboardOption",
	];
	/** IAM actions required for the PutEmailIdentityConfigurationSetAttributes API call. */
	static readonly PUT_EMAIL_IDENTITY_CONFIGURATION_SET_ATTRIBUTES: string[] = [
		"ses:PutEmailIdentityConfigurationSetAttributes",
	];
	/** IAM actions required for the PutEmailIdentityDkimAttributes API call. */
	static readonly PUT_EMAIL_IDENTITY_DKIM_ATTRIBUTES: string[] = [
		"ses:PutEmailIdentityDkimAttributes",
	];
	/** IAM actions required for the PutEmailIdentityDkimSigningAttributes API call. */
	static readonly PUT_EMAIL_IDENTITY_DKIM_SIGNING_ATTRIBUTES: string[] = [
		"ses:PutEmailIdentityDkimSigningAttributes",
	];
	/** IAM actions required for the PutEmailIdentityFeedbackAttributes API call. */
	static readonly PUT_EMAIL_IDENTITY_FEEDBACK_ATTRIBUTES: string[] = [
		"ses:PutEmailIdentityFeedbackAttributes",
	];
	/** IAM actions required for the PutEmailIdentityMailFromAttributes API call. */
	static readonly PUT_EMAIL_IDENTITY_MAIL_FROM_ATTRIBUTES: string[] = [
		"ses:PutEmailIdentityMailFromAttributes",
	];
	/** IAM actions required for the PutIdentityPolicy API call. */
	static readonly PUT_IDENTITY_POLICY: string[] = ["ses:PutIdentityPolicy"];
	/** IAM actions required for the PutSuppressedDestination API call. */
	static readonly PUT_SUPPRESSED_DESTINATION: string[] = [
		"ses:PutSuppressedDestination",
	];
	/** IAM actions required for the PutTenantSuppressionAttributes API call. */
	static readonly PUT_TENANT_SUPPRESSION_ATTRIBUTES: string[] = [
		"ses:PutTenantSuppressionAttributes",
	];
	/** IAM actions required for the RegisterMemberToAddressList API call. */
	static readonly REGISTER_MEMBER_TO_ADDRESS_LIST: string[] = [
		"ses:RegisterMemberToAddressList",
	];
	/** IAM actions required for the ReorderReceiptRuleSet API call. */
	static readonly REORDER_RECEIPT_RULE_SET: string[] = [
		"ses:ReorderReceiptRuleSet",
	];
	/** IAM actions required for the SendBounce API call. */
	static readonly SEND_BOUNCE: string[] = [];
	/** IAM actions required for the SendBulkEmail API call. */
	static readonly SEND_BULK_EMAIL: string[] = ["ses:SendBulkEmail"];
	/** IAM actions required for the SendBulkTemplatedEmail API call. */
	static readonly SEND_BULK_TEMPLATED_EMAIL: string[] = [];
	/** IAM actions required for the SendCustomVerificationEmail API call. */
	static readonly SEND_CUSTOM_VERIFICATION_EMAIL: string[] = [
		"ses:SendCustomVerificationEmail",
	];
	/** IAM actions required for the SendEmail API call. */
	static readonly SEND_EMAIL: string[] = [];
	/** IAM actions required for the SendRawEmail API call. */
	static readonly SEND_RAW_EMAIL: string[] = [];
	/** IAM actions required for the SendTemplatedEmail API call. */
	static readonly SEND_TEMPLATED_EMAIL: string[] = [];
	/** IAM actions required for the SetActiveReceiptRuleSet API call. */
	static readonly SET_ACTIVE_RECEIPT_RULE_SET: string[] = [
		"ses:SetActiveReceiptRuleSet",
	];
	/** IAM actions required for the SetIdentityDkimEnabled API call. */
	static readonly SET_IDENTITY_DKIM_ENABLED: string[] = [
		"ses:SetIdentityDkimEnabled",
	];
	/** IAM actions required for the SetIdentityFeedbackForwardingEnabled API call. */
	static readonly SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED: string[] = [
		"ses:SetIdentityFeedbackForwardingEnabled",
	];
	/** IAM actions required for the SetIdentityHeadersInNotificationsEnabled API call. */
	static readonly SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED: string[] = [
		"ses:SetIdentityHeadersInNotificationsEnabled",
	];
	/** IAM actions required for the SetIdentityMailFromDomain API call. */
	static readonly SET_IDENTITY_MAIL_FROM_DOMAIN: string[] = [
		"ses:SetIdentityMailFromDomain",
	];
	/** IAM actions required for the SetIdentityNotificationTopic API call. */
	static readonly SET_IDENTITY_NOTIFICATION_TOPIC: string[] = [
		"ses:SetIdentityNotificationTopic",
	];
	/** IAM actions required for the SetReceiptRulePosition API call. */
	static readonly SET_RECEIPT_RULE_POSITION: string[] = [
		"ses:SetReceiptRulePosition",
	];
	/** IAM actions required for the StartAddressListImportJob API call. */
	static readonly START_ADDRESS_LIST_IMPORT_JOB: string[] = [
		"ses:StartAddressListImportJob",
	];
	/** IAM actions required for the StartArchiveExport API call. */
	static readonly START_ARCHIVE_EXPORT: string[] = ["ses:StartArchiveExport"];
	/** IAM actions required for the StartArchiveSearch API call. */
	static readonly START_ARCHIVE_SEARCH: string[] = ["ses:StartArchiveSearch"];
	/** IAM actions required for the StopAddressListImportJob API call. */
	static readonly STOP_ADDRESS_LIST_IMPORT_JOB: string[] = [
		"ses:StopAddressListImportJob",
	];
	/** IAM actions required for the StopArchiveExport API call. */
	static readonly STOP_ARCHIVE_EXPORT: string[] = ["ses:StopArchiveExport"];
	/** IAM actions required for the StopArchiveSearch API call. */
	static readonly STOP_ARCHIVE_SEARCH: string[] = ["ses:StopArchiveSearch"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ses:TagResource"];
	/** IAM actions required for the TestRenderEmailTemplate API call. */
	static readonly TEST_RENDER_EMAIL_TEMPLATE: string[] = [
		"ses:TestRenderEmailTemplate",
	];
	/** IAM actions required for the TestRenderTemplate API call. */
	static readonly TEST_RENDER_TEMPLATE: string[] = ["ses:TestRenderTemplate"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ses:UntagResource"];
	/** IAM actions required for the UpdateAccountSendingEnabled API call. */
	static readonly UPDATE_ACCOUNT_SENDING_ENABLED: string[] = [
		"ses:UpdateAccountSendingEnabled",
	];
	/** IAM actions required for the UpdateArchive API call. */
	static readonly UPDATE_ARCHIVE: string[] = ["ses:UpdateArchive"];
	/** IAM actions required for the UpdateConfigurationSetEventDestination API call. */
	static readonly UPDATE_CONFIGURATION_SET_EVENT_DESTINATION: string[] = [
		"iam:PassRole",
		"ses:UpdateConfigurationSetEventDestination",
	];
	/** IAM actions required for the UpdateConfigurationSetReputationMetricsEnabled API call. */
	static readonly UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED: string[] =
		["ses:UpdateConfigurationSetReputationMetricsEnabled"];
	/** IAM actions required for the UpdateConfigurationSetSendingEnabled API call. */
	static readonly UPDATE_CONFIGURATION_SET_SENDING_ENABLED: string[] = [
		"ses:UpdateConfigurationSetSendingEnabled",
	];
	/** IAM actions required for the UpdateConfigurationSetTrackingOptions API call. */
	static readonly UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS: string[] = [
		"ses:UpdateConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UPDATE_CONTACT: string[] = ["ses:UpdateContact"];
	/** IAM actions required for the UpdateContactList API call. */
	static readonly UPDATE_CONTACT_LIST: string[] = ["ses:UpdateContactList"];
	/** IAM actions required for the UpdateCustomVerificationEmailTemplate API call. */
	static readonly UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE: string[] = [
		"ses:UpdateCustomVerificationEmailTemplate",
	];
	/** IAM actions required for the UpdateEmailIdentityPolicy API call. */
	static readonly UPDATE_EMAIL_IDENTITY_POLICY: string[] = [
		"ses:UpdateEmailIdentityPolicy",
	];
	/** IAM actions required for the UpdateEmailTemplate API call. */
	static readonly UPDATE_EMAIL_TEMPLATE: string[] = ["ses:UpdateEmailTemplate"];
	/** IAM actions required for the UpdateIngressPoint API call. */
	static readonly UPDATE_INGRESS_POINT: string[] = ["ses:UpdateIngressPoint"];
	/** IAM actions required for the UpdateReceiptRule API call. */
	static readonly UPDATE_RECEIPT_RULE: string[] = [
		"iam:PassRole",
		"ses:UpdateReceiptRule",
	];
	/** IAM actions required for the UpdateRelay API call. */
	static readonly UPDATE_RELAY: string[] = ["ses:UpdateRelay"];
	/** IAM actions required for the UpdateReputationEntityCustomerManagedStatus API call. */
	static readonly UPDATE_REPUTATION_ENTITY_CUSTOMER_MANAGED_STATUS: string[] = [
		"ses:UpdateReputationEntityCustomerManagedStatus",
	];
	/** IAM actions required for the UpdateReputationEntityPolicy API call. */
	static readonly UPDATE_REPUTATION_ENTITY_POLICY: string[] = [
		"ses:UpdateReputationEntityPolicy",
	];
	/** IAM actions required for the UpdateRuleSet API call. */
	static readonly UPDATE_RULE_SET: string[] = [
		"iam:PassRole",
		"ses:UpdateRuleSet",
	];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UPDATE_TEMPLATE: string[] = ["ses:UpdateTemplate"];
	/** IAM actions required for the UpdateTrafficPolicy API call. */
	static readonly UPDATE_TRAFFIC_POLICY: string[] = ["ses:UpdateTrafficPolicy"];
	/** IAM actions required for the VerifyDomainDkim API call. */
	static readonly VERIFY_DOMAIN_DKIM: string[] = ["ses:VerifyDomainDkim"];
	/** IAM actions required for the VerifyDomainIdentity API call. */
	static readonly VERIFY_DOMAIN_IDENTITY: string[] = [
		"ses:VerifyDomainIdentity",
	];
	/** IAM actions required for the VerifyEmailAddress API call. */
	static readonly VERIFY_EMAIL_ADDRESS: string[] = ["ses:VerifyEmailAddress"];
	/** IAM actions required for the VerifyEmailIdentity API call. */
	static readonly VERIFY_EMAIL_IDENTITY: string[] = ["ses:VerifyEmailIdentity"];
}

/**
 * Condition key constants and builders for ses.
 */
export class SesConditions {
	/** Condition keys applicable to the BatchGetMetricData action. */
	static readonly BATCH_GET_METRIC_DATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CancelExportJob action. */
	static readonly CANCEL_EXPORT_JOB_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the CloneReceiptRuleSet action. */
	static readonly CLONE_RECEIPT_RULE_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateAddonInstance action. */
	static readonly CREATE_ADDON_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:AddonSubscriptionArn",
	];
	/** Condition keys applicable to the CreateAddonSubscription action. */
	static readonly CREATE_ADDON_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAddressList action. */
	static readonly CREATE_ADDRESS_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateArchive action. */
	static readonly CREATE_ARCHIVE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfigurationSet action. */
	static readonly CREATE_CONFIGURATION_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateConfigurationSetEventDestination action. */
	static readonly CREATE_CONFIGURATION_SET_EVENT_DESTINATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the CreateConfigurationSetTrackingOptions action. */
	static readonly CREATE_CONFIGURATION_SET_TRACKING_OPTIONS_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the CreateContact action. */
	static readonly CREATE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateContactList action. */
	static readonly CREATE_CONTACT_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateCustomVerificationEmailTemplate action. */
	static readonly CREATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "ses:ApiVersion"];
	/** Condition keys applicable to the CreateDedicatedIpPool action. */
	static readonly CREATE_DEDICATED_IP_POOL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateDeliverabilityTestReport action. */
	static readonly CREATE_DELIVERABILITY_TEST_REPORT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateEmailIdentity action. */
	static readonly CREATE_EMAIL_IDENTITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateEmailIdentityPolicy action. */
	static readonly CREATE_EMAIL_IDENTITY_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateEmailTemplate action. */
	static readonly CREATE_EMAIL_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateExportJob action. */
	static readonly CREATE_EXPORT_JOB_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the CreateImportJob action. */
	static readonly CREATE_IMPORT_JOB_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateIngressPoint action. */
	static readonly CREATE_INGRESS_POINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:MailManagerRuleSetArn",
		"ses:MailManagerTrafficPolicyArn",
	];
	/** Condition keys applicable to the CreateMultiRegionEndpoint action. */
	static readonly CREATE_MULTI_REGION_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateReceiptFilter action. */
	static readonly CREATE_RECEIPT_FILTER_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateReceiptRule action. */
	static readonly CREATE_RECEIPT_RULE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateReceiptRuleSet action. */
	static readonly CREATE_RECEIPT_RULE_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateRelay action. */
	static readonly CREATE_RELAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRuleSet action. */
	static readonly CREATE_RULE_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplate action. */
	static readonly CREATE_TEMPLATE_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the CreateTenant action. */
	static readonly CREATE_TENANT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateTenantResourceAssociation action. */
	static readonly CREATE_TENANT_RESOURCE_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "ses:ApiVersion"];
	/** Condition keys applicable to the CreateTrafficPolicy action. */
	static readonly CREATE_TRAFFIC_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteConfigurationSet action. */
	static readonly DELETE_CONFIGURATION_SET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteConfigurationSetEventDestination action. */
	static readonly DELETE_CONFIGURATION_SET_EVENT_DESTINATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the DeleteConfigurationSetTrackingOptions action. */
	static readonly DELETE_CONFIGURATION_SET_TRACKING_OPTIONS_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the DeleteContact action. */
	static readonly DELETE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteContactList action. */
	static readonly DELETE_CONTACT_LIST_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteCustomVerificationEmailTemplate action. */
	static readonly DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the DeleteDedicatedIpPool action. */
	static readonly DELETE_DEDICATED_IP_POOL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteEmailIdentity action. */
	static readonly DELETE_EMAIL_IDENTITY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteEmailIdentityPolicy action. */
	static readonly DELETE_EMAIL_IDENTITY_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteEmailTemplate action. */
	static readonly DELETE_EMAIL_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteIdentity action. */
	static readonly DELETE_IDENTITY_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the DeleteIdentityPolicy action. */
	static readonly DELETE_IDENTITY_POLICY_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteMultiRegionEndpoint action. */
	static readonly DELETE_MULTI_REGION_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteReceiptFilter action. */
	static readonly DELETE_RECEIPT_FILTER_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteReceiptRule action. */
	static readonly DELETE_RECEIPT_RULE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteReceiptRuleSet action. */
	static readonly DELETE_RECEIPT_RULE_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteSuppressedDestination action. */
	static readonly DELETE_SUPPRESSED_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteTemplate action. */
	static readonly DELETE_TEMPLATE_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the DeleteTenant action. */
	static readonly DELETE_TENANT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteTenantResourceAssociation action. */
	static readonly DELETE_TENANT_RESOURCE_ASSOCIATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the DeleteVerifiedEmailAddress action. */
	static readonly DELETE_VERIFIED_EMAIL_ADDRESS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeActiveReceiptRuleSet action. */
	static readonly DESCRIBE_ACTIVE_RECEIPT_RULE_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeConfigurationSet action. */
	static readonly DESCRIBE_CONFIGURATION_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeReceiptRule action. */
	static readonly DESCRIBE_RECEIPT_RULE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeReceiptRuleSet action. */
	static readonly DESCRIBE_RECEIPT_RULE_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetAccount action. */
	static readonly GET_ACCOUNT_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the GetAccountSendingEnabled action. */
	static readonly GET_ACCOUNT_SENDING_ENABLED_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetBlacklistReports action. */
	static readonly GET_BLACKLIST_REPORTS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetConfigurationSet action. */
	static readonly GET_CONFIGURATION_SET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetConfigurationSetEventDestinations action. */
	static readonly GET_CONFIGURATION_SET_EVENT_DESTINATIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the GetContact action. */
	static readonly GET_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetContactList action. */
	static readonly GET_CONTACT_LIST_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetCustomVerificationEmailTemplate action. */
	static readonly GET_CUSTOM_VERIFICATION_EMAIL_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the GetDedicatedIp action. */
	static readonly GET_DEDICATED_IP_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDedicatedIpPool action. */
	static readonly GET_DEDICATED_IP_POOL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDedicatedIps action. */
	static readonly GET_DEDICATED_IPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDeliverabilityDashboardOptions action. */
	static readonly GET_DELIVERABILITY_DASHBOARD_OPTIONS_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetDeliverabilityTestReport action. */
	static readonly GET_DELIVERABILITY_TEST_REPORT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDomainDeliverabilityCampaign action. */
	static readonly GET_DOMAIN_DELIVERABILITY_CAMPAIGN_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetDomainStatisticsReport action. */
	static readonly GET_DOMAIN_STATISTICS_REPORT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailAddressInsights action. */
	static readonly GET_EMAIL_ADDRESS_INSIGHTS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailIdentity action. */
	static readonly GET_EMAIL_IDENTITY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailIdentityPolicies action. */
	static readonly GET_EMAIL_IDENTITY_POLICIES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailTemplate action. */
	static readonly GET_EMAIL_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetExportJob action. */
	static readonly GET_EXPORT_JOB_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the GetIdentityDkimAttributes action. */
	static readonly GET_IDENTITY_DKIM_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetIdentityMailFromDomainAttributes action. */
	static readonly GET_IDENTITY_MAIL_FROM_DOMAIN_ATTRIBUTES_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetIdentityNotificationAttributes action. */
	static readonly GET_IDENTITY_NOTIFICATION_ATTRIBUTES_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetIdentityPolicies action. */
	static readonly GET_IDENTITY_POLICIES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetIdentityVerificationAttributes action. */
	static readonly GET_IDENTITY_VERIFICATION_ATTRIBUTES_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetImportJob action. */
	static readonly GET_IMPORT_JOB_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the GetMessageInsights action. */
	static readonly GET_MESSAGE_INSIGHTS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetMultiRegionEndpoint action. */
	static readonly GET_MULTI_REGION_ENDPOINT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetReputationEntity action. */
	static readonly GET_REPUTATION_ENTITY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetSendQuota action. */
	static readonly GET_SEND_QUOTA_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the GetSendStatistics action. */
	static readonly GET_SEND_STATISTICS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetSuppressedDestination action. */
	static readonly GET_SUPPRESSED_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetTemplate action. */
	static readonly GET_TEMPLATE_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the GetTenant action. */
	static readonly GET_TENANT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListConfigurationSets action. */
	static readonly LIST_CONFIGURATION_SETS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListContactLists action. */
	static readonly LIST_CONTACT_LISTS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListContacts action. */
	static readonly LIST_CONTACTS_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListCustomVerificationEmailTemplates action. */
	static readonly LIST_CUSTOM_VERIFICATION_EMAIL_TEMPLATES_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the ListDedicatedIpPools action. */
	static readonly LIST_DEDICATED_IP_POOLS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListDeliverabilityTestReports action. */
	static readonly LIST_DELIVERABILITY_TEST_REPORTS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListDomainDeliverabilityCampaigns action. */
	static readonly LIST_DOMAIN_DELIVERABILITY_CAMPAIGNS_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the ListEmailIdentities action. */
	static readonly LIST_EMAIL_IDENTITIES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListEmailTemplates action. */
	static readonly LIST_EMAIL_TEMPLATES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListExportJobs action. */
	static readonly LIST_EXPORT_JOBS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the ListIdentities action. */
	static readonly LIST_IDENTITIES_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListIdentityPolicies action. */
	static readonly LIST_IDENTITY_POLICIES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListImportJobs action. */
	static readonly LIST_IMPORT_JOBS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListMultiRegionEndpoints action. */
	static readonly LIST_MULTI_REGION_ENDPOINTS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListReceiptFilters action. */
	static readonly LIST_RECEIPT_FILTERS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListReceiptRuleSets action. */
	static readonly LIST_RECEIPT_RULE_SETS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListRecommendations action. */
	static readonly LIST_RECOMMENDATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListReputationEntities action. */
	static readonly LIST_REPUTATION_ENTITIES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListResourceTenants action. */
	static readonly LIST_RESOURCE_TENANTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListSuppressedDestinations action. */
	static readonly LIST_SUPPRESSED_DESTINATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListTemplates action. */
	static readonly LIST_TEMPLATES_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListTenantResources action. */
	static readonly LIST_TENANT_RESOURCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListTenants action. */
	static readonly LIST_TENANTS_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListVerifiedEmailAddresses action. */
	static readonly LIST_VERIFIED_EMAIL_ADDRESSES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountDedicatedIpWarmupAttributes action. */
	static readonly PUT_ACCOUNT_DEDICATED_IP_WARMUP_ATTRIBUTES_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the PutAccountDetails action. */
	static readonly PUT_ACCOUNT_DETAILS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountPricingAttributes action. */
	static readonly PUT_ACCOUNT_PRICING_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountSendingAttributes action. */
	static readonly PUT_ACCOUNT_SENDING_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountSuppressionAttributes action. */
	static readonly PUT_ACCOUNT_SUPPRESSION_ATTRIBUTES_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the PutAccountVdmAttributes action. */
	static readonly PUT_ACCOUNT_VDM_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutConfigurationSetArchivingOptions action. */
	static readonly PUT_CONFIGURATION_SET_ARCHIVING_OPTIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetDeliveryOptions action. */
	static readonly PUT_CONFIGURATION_SET_DELIVERY_OPTIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetReputationOptions action. */
	static readonly PUT_CONFIGURATION_SET_REPUTATION_OPTIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetSendingOptions action. */
	static readonly PUT_CONFIGURATION_SET_SENDING_OPTIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetSuppressionOptions action. */
	static readonly PUT_CONFIGURATION_SET_SUPPRESSION_OPTIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetTrackingOptions action. */
	static readonly PUT_CONFIGURATION_SET_TRACKING_OPTIONS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetVdmOptions action. */
	static readonly PUT_CONFIGURATION_SET_VDM_OPTIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutDedicatedIpInPool action. */
	static readonly PUT_DEDICATED_IP_IN_POOL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutDedicatedIpPoolScalingAttributes action. */
	static readonly PUT_DEDICATED_IP_POOL_SCALING_ATTRIBUTES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutDedicatedIpWarmupAttributes action. */
	static readonly PUT_DEDICATED_IP_WARMUP_ATTRIBUTES_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the PutDeliverabilityDashboardOption action. */
	static readonly PUT_DELIVERABILITY_DASHBOARD_OPTION_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the PutEmailIdentityConfigurationSetAttributes action. */
	static readonly PUT_EMAIL_IDENTITY_CONFIGURATION_SET_ATTRIBUTES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutEmailIdentityDkimAttributes action. */
	static readonly PUT_EMAIL_IDENTITY_DKIM_ATTRIBUTES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutEmailIdentityDkimSigningAttributes action. */
	static readonly PUT_EMAIL_IDENTITY_DKIM_SIGNING_ATTRIBUTES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutEmailIdentityFeedbackAttributes action. */
	static readonly PUT_EMAIL_IDENTITY_FEEDBACK_ATTRIBUTES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutEmailIdentityMailFromAttributes action. */
	static readonly PUT_EMAIL_IDENTITY_MAIL_FROM_ATTRIBUTES_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutIdentityPolicy action. */
	static readonly PUT_IDENTITY_POLICY_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutSuppressedDestination action. */
	static readonly PUT_SUPPRESSED_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutTenantSuppressionAttributes action. */
	static readonly PUT_TENANT_SUPPRESSION_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ReorderReceiptRuleSet action. */
	static readonly REORDER_RECEIPT_RULE_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ReplicateEmailIdentityDkimSigningKey action. */
	static readonly REPLICATE_EMAIL_IDENTITY_DKIM_SIGNING_KEY_CONDITION_KEYS: string[] =
		["ses:ReplicaRegion"];
	/** Condition keys applicable to the SendBounce action. */
	static readonly SEND_BOUNCE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:FromAddress",
	];
	/** Condition keys applicable to the SendBulkEmail action. */
	static readonly SEND_BULK_EMAIL_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:MultiRegionEndpointId",
		"ses:TenantName",
	];
	/** Condition keys applicable to the SendBulkTemplatedEmail action. */
	static readonly SEND_BULK_TEMPLATED_EMAIL_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SendCustomVerificationEmail action. */
	static readonly SEND_CUSTOM_VERIFICATION_EMAIL_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SendEmail action. */
	static readonly SEND_EMAIL_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:MultiRegionEndpointId",
		"ses:Recipients",
		"ses:TenantName",
	];
	/** Condition keys applicable to the SendRawEmail action. */
	static readonly SEND_RAW_EMAIL_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SendTemplatedEmail action. */
	static readonly SEND_TEMPLATED_EMAIL_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SetActiveReceiptRuleSet action. */
	static readonly SET_ACTIVE_RECEIPT_RULE_SET_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetIdentityDkimEnabled action. */
	static readonly SET_IDENTITY_DKIM_ENABLED_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetIdentityFeedbackForwardingEnabled action. */
	static readonly SET_IDENTITY_FEEDBACK_FORWARDING_ENABLED_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the SetIdentityHeadersInNotificationsEnabled action. */
	static readonly SET_IDENTITY_HEADERS_IN_NOTIFICATIONS_ENABLED_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the SetIdentityMailFromDomain action. */
	static readonly SET_IDENTITY_MAIL_FROM_DOMAIN_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetIdentityNotificationTopic action. */
	static readonly SET_IDENTITY_NOTIFICATION_TOPIC_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetReceiptRulePosition action. */
	static readonly SET_RECEIPT_RULE_POSITION_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the TestRenderEmailTemplate action. */
	static readonly TEST_RENDER_EMAIL_TEMPLATE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the TestRenderTemplate action. */
	static readonly TEST_RENDER_TEMPLATE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateAccountSendingEnabled action. */
	static readonly UPDATE_ACCOUNT_SENDING_ENABLED_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateConfigurationSetEventDestination action. */
	static readonly UPDATE_CONFIGURATION_SET_EVENT_DESTINATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the UpdateConfigurationSetReputationMetricsEnabled action. */
	static readonly UPDATE_CONFIGURATION_SET_REPUTATION_METRICS_ENABLED_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the UpdateConfigurationSetSendingEnabled action. */
	static readonly UPDATE_CONFIGURATION_SET_SENDING_ENABLED_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the UpdateConfigurationSetTrackingOptions action. */
	static readonly UPDATE_CONFIGURATION_SET_TRACKING_OPTIONS_CONDITION_KEYS: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the UpdateContact action. */
	static readonly UPDATE_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateContactList action. */
	static readonly UPDATE_CONTACT_LIST_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateCustomVerificationEmailTemplate action. */
	static readonly UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the UpdateEmailIdentityPolicy action. */
	static readonly UPDATE_EMAIL_IDENTITY_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateEmailTemplate action. */
	static readonly UPDATE_EMAIL_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateIngressPoint action. */
	static readonly UPDATE_INGRESS_POINT_CONDITION_KEYS: string[] = [
		"ses:MailManagerRuleSetArn",
		"ses:MailManagerTrafficPolicyArn",
	];
	/** Condition keys applicable to the UpdateReceiptRule action. */
	static readonly UPDATE_RECEIPT_RULE_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateReputationEntityCustomerManagedStatus action. */
	static readonly UPDATE_REPUTATION_ENTITY_CUSTOMER_MANAGED_STATUS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the UpdateReputationEntityPolicy action. */
	static readonly UPDATE_REPUTATION_ENTITY_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateTemplate action. */
	static readonly UPDATE_TEMPLATE_CONDITION_KEYS: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the VerifyDomainDkim action. */
	static readonly VERIFY_DOMAIN_DKIM_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the VerifyDomainIdentity action. */
	static readonly VERIFY_DOMAIN_IDENTITY_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the VerifyEmailAddress action. */
	static readonly VERIFY_EMAIL_ADDRESS_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the VerifyEmailIdentity action. */
	static readonly VERIFY_EMAIL_IDENTITY_CONDITION_KEYS: string[] = [
		"ses:ApiVersion",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: ses:AddonSubscriptionArn (ARN) */
	static readonly ADDON_SUBSCRIPTION_ARN = "ses:AddonSubscriptionArn";
	/** Condition key: ses:ApiVersion (String) */
	static readonly API_VERSION = "ses:ApiVersion";
	/** Condition key: ses:ExportSourceType (String) */
	static readonly EXPORT_SOURCE_TYPE = "ses:ExportSourceType";
	/** Condition key: ses:FeedbackAddress (String) */
	static readonly FEEDBACK_ADDRESS = "ses:FeedbackAddress";
	/** Condition key: ses:FromAddress (String) */
	static readonly FROM_ADDRESS = "ses:FromAddress";
	/** Condition key: ses:FromDisplayName (String) */
	static readonly FROM_DISPLAY_NAME = "ses:FromDisplayName";
	/** Condition key: ses:MailManagerIngressPointType (String) */
	static readonly MAIL_MANAGER_INGRESS_POINT_TYPE =
		"ses:MailManagerIngressPointType";
	/** Condition key: ses:MailManagerRuleSetArn (ARN) */
	static readonly MAIL_MANAGER_RULE_SET_ARN = "ses:MailManagerRuleSetArn";
	/** Condition key: ses:MailManagerTrafficPolicyArn (ARN) */
	static readonly MAIL_MANAGER_TRAFFIC_POLICY_ARN =
		"ses:MailManagerTrafficPolicyArn";
	/** Condition key: ses:MultiRegionEndpointId (String) */
	static readonly MULTI_REGION_ENDPOINT_ID = "ses:MultiRegionEndpointId";
	/** Condition key: ses:Recipients (ArrayOfString) */
	static readonly RECIPIENTS = "ses:Recipients";
	/** Condition key: ses:ReplicaRegion (ArrayOfString) */
	static readonly REPLICA_REGION = "ses:ReplicaRegion";
	/** Condition key: ses:TenantName (String) */
	static readonly TENANT_NAME = "ses:TenantName";

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
	 * Generates a condition block for `ses:AddonSubscriptionArn`.
	 */
	static addonSubscriptionARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "ses:AddonSubscriptionArn": value } };
	}

	/**
	 * Generates a condition block for `ses:ApiVersion`.
	 */
	static apiVersion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:ApiVersion": value } };
	}

	/**
	 * Generates a condition block for `ses:ExportSourceType`.
	 */
	static exportSourceType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:ExportSourceType": value } };
	}

	/**
	 * Generates a condition block for `ses:FeedbackAddress`.
	 */
	static feedbackAddress(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:FeedbackAddress": value } };
	}

	/**
	 * Generates a condition block for `ses:FromAddress`.
	 */
	static fromAddress(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:FromAddress": value } };
	}

	/**
	 * Generates a condition block for `ses:FromDisplayName`.
	 */
	static fromDisplayName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:FromDisplayName": value } };
	}

	/**
	 * Generates a condition block for `ses:MailManagerIngressPointType`.
	 */
	static mailManagerIngressPointType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:MailManagerIngressPointType": value } };
	}

	/**
	 * Generates a condition block for `ses:MailManagerRuleSetArn`.
	 */
	static mailManagerRuleSetARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "ses:MailManagerRuleSetArn": value } };
	}

	/**
	 * Generates a condition block for `ses:MailManagerTrafficPolicyArn`.
	 */
	static mailManagerTrafficPolicyARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "ses:MailManagerTrafficPolicyArn": value } };
	}

	/**
	 * Generates a condition block for `ses:MultiRegionEndpointId`.
	 */
	static multiRegionEndpointId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:MultiRegionEndpointId": value } };
	}

	/**
	 * Generates a condition block for `ses:Recipients`.
	 */
	static recipients(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ses:Recipients": values } };
	}

	/**
	 * Generates a condition block for `ses:ReplicaRegion`.
	 */
	static replicaRegion(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "ses:ReplicaRegion": values } };
	}

	/**
	 * Generates a condition block for `ses:TenantName`.
	 */
	static tenantName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ses:TenantName": value } };
	}
}
