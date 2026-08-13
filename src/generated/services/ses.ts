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
	static readonly AllowVendedLogDeliveryForResource =
		"ses:AllowVendedLogDeliveryForResource";
	/** [Read] ses:BatchGetMetricData */
	static readonly BatchGetMetricData = "ses:BatchGetMetricData";
	/** [Write] ses:CancelExportJob */
	static readonly CancelExportJob = "ses:CancelExportJob";
	/** [Write] ses:CloneReceiptRuleSet */
	static readonly CloneReceiptRuleSet = "ses:CloneReceiptRuleSet";
	/** [Write] ses:CreateAddonInstance */
	static readonly CreateAddonInstance = "ses:CreateAddonInstance";
	/** [Write] ses:CreateAddonSubscription */
	static readonly CreateAddonSubscription = "ses:CreateAddonSubscription";
	/** [Write] ses:CreateAddressList */
	static readonly CreateAddressList = "ses:CreateAddressList";
	/** [Write] ses:CreateAddressListImportJob */
	static readonly CreateAddressListImportJob = "ses:CreateAddressListImportJob";
	/** [Write] ses:CreateArchive */
	static readonly CreateArchive = "ses:CreateArchive";
	/** [Write] ses:CreateConfigurationSet */
	static readonly CreateConfigurationSet = "ses:CreateConfigurationSet";
	/** [Write] ses:CreateConfigurationSetEventDestination */
	static readonly CreateConfigurationSetEventDestination =
		"ses:CreateConfigurationSetEventDestination";
	/** [Write] ses:CreateConfigurationSetTrackingOptions */
	static readonly CreateConfigurationSetTrackingOptions =
		"ses:CreateConfigurationSetTrackingOptions";
	/** [Write] ses:CreateContact */
	static readonly CreateContact = "ses:CreateContact";
	/** [Write] ses:CreateContactList */
	static readonly CreateContactList = "ses:CreateContactList";
	/** [Write] ses:CreateCustomVerificationEmailTemplate */
	static readonly CreateCustomVerificationEmailTemplate =
		"ses:CreateCustomVerificationEmailTemplate";
	/** [Write] ses:CreateDedicatedIpPool */
	static readonly CreateDedicatedIpPool = "ses:CreateDedicatedIpPool";
	/** [Write] ses:CreateDeliverabilityTestReport */
	static readonly CreateDeliverabilityTestReport =
		"ses:CreateDeliverabilityTestReport";
	/** [Write] ses:CreateEmailIdentity */
	static readonly CreateEmailIdentity = "ses:CreateEmailIdentity";
	/** [PermissionManagement] ses:CreateEmailIdentityPolicy */
	static readonly CreateEmailIdentityPolicy = "ses:CreateEmailIdentityPolicy";
	/** [Write] ses:CreateEmailTemplate */
	static readonly CreateEmailTemplate = "ses:CreateEmailTemplate";
	/** [Write] ses:CreateExportJob */
	static readonly CreateExportJob = "ses:CreateExportJob";
	/** [Write] ses:CreateImportJob */
	static readonly CreateImportJob = "ses:CreateImportJob";
	/** [Write] ses:CreateIngressPoint */
	static readonly CreateIngressPoint = "ses:CreateIngressPoint";
	/** [Write] ses:CreateMultiRegionEndpoint */
	static readonly CreateMultiRegionEndpoint = "ses:CreateMultiRegionEndpoint";
	/** [Write] ses:CreateReceiptFilter */
	static readonly CreateReceiptFilter = "ses:CreateReceiptFilter";
	/** [Write] ses:CreateReceiptRule */
	static readonly CreateReceiptRule = "ses:CreateReceiptRule";
	/** [Write] ses:CreateReceiptRuleSet */
	static readonly CreateReceiptRuleSet = "ses:CreateReceiptRuleSet";
	/** [Write] ses:CreateRelay */
	static readonly CreateRelay = "ses:CreateRelay";
	/** [Write] ses:CreateRuleSet */
	static readonly CreateRuleSet = "ses:CreateRuleSet";
	/** [Write] ses:CreateTemplate */
	static readonly CreateTemplate = "ses:CreateTemplate";
	/** [Write] ses:CreateTenant */
	static readonly CreateTenant = "ses:CreateTenant";
	/** [Write] ses:CreateTenantResourceAssociation */
	static readonly CreateTenantResourceAssociation =
		"ses:CreateTenantResourceAssociation";
	/** [Write] ses:CreateTrafficPolicy */
	static readonly CreateTrafficPolicy = "ses:CreateTrafficPolicy";
	/** [Write] ses:DeleteAddonInstance */
	static readonly DeleteAddonInstance = "ses:DeleteAddonInstance";
	/** [Write] ses:DeleteAddonSubscription */
	static readonly DeleteAddonSubscription = "ses:DeleteAddonSubscription";
	/** [Write] ses:DeleteAddressList */
	static readonly DeleteAddressList = "ses:DeleteAddressList";
	/** [Write] ses:DeleteArchive */
	static readonly DeleteArchive = "ses:DeleteArchive";
	/** [Write] ses:DeleteConfigurationSet */
	static readonly DeleteConfigurationSet = "ses:DeleteConfigurationSet";
	/** [Write] ses:DeleteConfigurationSetEventDestination */
	static readonly DeleteConfigurationSetEventDestination =
		"ses:DeleteConfigurationSetEventDestination";
	/** [Write] ses:DeleteConfigurationSetTrackingOptions */
	static readonly DeleteConfigurationSetTrackingOptions =
		"ses:DeleteConfigurationSetTrackingOptions";
	/** [Write] ses:DeleteContact */
	static readonly DeleteContact = "ses:DeleteContact";
	/** [Write] ses:DeleteContactList */
	static readonly DeleteContactList = "ses:DeleteContactList";
	/** [Write] ses:DeleteCustomVerificationEmailTemplate */
	static readonly DeleteCustomVerificationEmailTemplate =
		"ses:DeleteCustomVerificationEmailTemplate";
	/** [Write] ses:DeleteDedicatedIpPool */
	static readonly DeleteDedicatedIpPool = "ses:DeleteDedicatedIpPool";
	/** [Write] ses:DeleteEmailIdentity */
	static readonly DeleteEmailIdentity = "ses:DeleteEmailIdentity";
	/** [PermissionManagement] ses:DeleteEmailIdentityPolicy */
	static readonly DeleteEmailIdentityPolicy = "ses:DeleteEmailIdentityPolicy";
	/** [Write] ses:DeleteEmailTemplate */
	static readonly DeleteEmailTemplate = "ses:DeleteEmailTemplate";
	/** [Write] ses:DeleteIdentity */
	static readonly DeleteIdentity = "ses:DeleteIdentity";
	/** [PermissionManagement] ses:DeleteIdentityPolicy */
	static readonly DeleteIdentityPolicy = "ses:DeleteIdentityPolicy";
	/** [Write] ses:DeleteIngressPoint */
	static readonly DeleteIngressPoint = "ses:DeleteIngressPoint";
	/** [Write] ses:DeleteMultiRegionEndpoint */
	static readonly DeleteMultiRegionEndpoint = "ses:DeleteMultiRegionEndpoint";
	/** [Write] ses:DeleteReceiptFilter */
	static readonly DeleteReceiptFilter = "ses:DeleteReceiptFilter";
	/** [Write] ses:DeleteReceiptRule */
	static readonly DeleteReceiptRule = "ses:DeleteReceiptRule";
	/** [Write] ses:DeleteReceiptRuleSet */
	static readonly DeleteReceiptRuleSet = "ses:DeleteReceiptRuleSet";
	/** [Write] ses:DeleteRelay */
	static readonly DeleteRelay = "ses:DeleteRelay";
	/** [Write] ses:DeleteRuleSet */
	static readonly DeleteRuleSet = "ses:DeleteRuleSet";
	/** [Write] ses:DeleteSuppressedDestination */
	static readonly DeleteSuppressedDestination =
		"ses:DeleteSuppressedDestination";
	/** [Write] ses:DeleteTemplate */
	static readonly DeleteTemplate = "ses:DeleteTemplate";
	/** [Write] ses:DeleteTenant */
	static readonly DeleteTenant = "ses:DeleteTenant";
	/** [Write] ses:DeleteTenantResourceAssociation */
	static readonly DeleteTenantResourceAssociation =
		"ses:DeleteTenantResourceAssociation";
	/** [Write] ses:DeleteTrafficPolicy */
	static readonly DeleteTrafficPolicy = "ses:DeleteTrafficPolicy";
	/** [Write] ses:DeleteVerifiedEmailAddress */
	static readonly DeleteVerifiedEmailAddress = "ses:DeleteVerifiedEmailAddress";
	/** [Write] ses:DeregisterMemberFromAddressList */
	static readonly DeregisterMemberFromAddressList =
		"ses:DeregisterMemberFromAddressList";
	/** [Read] ses:DescribeActiveReceiptRuleSet */
	static readonly DescribeActiveReceiptRuleSet =
		"ses:DescribeActiveReceiptRuleSet";
	/** [Read] ses:DescribeConfigurationSet */
	static readonly DescribeConfigurationSet = "ses:DescribeConfigurationSet";
	/** [Read] ses:DescribeReceiptRule */
	static readonly DescribeReceiptRule = "ses:DescribeReceiptRule";
	/** [Read] ses:DescribeReceiptRuleSet */
	static readonly DescribeReceiptRuleSet = "ses:DescribeReceiptRuleSet";
	/** [Read] ses:GetAccount */
	static readonly actionGetAccount = "ses:GetAccount";
	/** [Read] ses:GetAccountSendingEnabled */
	static readonly actionGetAccountSendingEnabled =
		"ses:GetAccountSendingEnabled";
	/** [Read] ses:GetAddonInstance */
	static readonly actionGetAddonInstance = "ses:GetAddonInstance";
	/** [Read] ses:GetAddonSubscription */
	static readonly actionGetAddonSubscription = "ses:GetAddonSubscription";
	/** [Read] ses:GetAddressList */
	static readonly actionGetAddressList = "ses:GetAddressList";
	/** [Read] ses:GetAddressListImportJob */
	static readonly actionGetAddressListImportJob = "ses:GetAddressListImportJob";
	/** [Read] ses:GetArchive */
	static readonly actionGetArchive = "ses:GetArchive";
	/** [Read] ses:GetArchiveExport */
	static readonly actionGetArchiveExport = "ses:GetArchiveExport";
	/** [Read] ses:GetArchiveMessage */
	static readonly actionGetArchiveMessage = "ses:GetArchiveMessage";
	/** [Read] ses:GetArchiveMessageContent */
	static readonly actionGetArchiveMessageContent =
		"ses:GetArchiveMessageContent";
	/** [Read] ses:GetArchiveSearch */
	static readonly actionGetArchiveSearch = "ses:GetArchiveSearch";
	/** [Read] ses:GetArchiveSearchResults */
	static readonly actionGetArchiveSearchResults = "ses:GetArchiveSearchResults";
	/** [Read] ses:GetBlacklistReports */
	static readonly actionGetBlacklistReports = "ses:GetBlacklistReports";
	/** [Read] ses:GetConfigurationSet */
	static readonly actionGetConfigurationSet = "ses:GetConfigurationSet";
	/** [Read] ses:GetConfigurationSetEventDestinations */
	static readonly actionGetConfigurationSetEventDestinations =
		"ses:GetConfigurationSetEventDestinations";
	/** [Read] ses:GetContact */
	static readonly actionGetContact = "ses:GetContact";
	/** [Read] ses:GetContactList */
	static readonly actionGetContactList = "ses:GetContactList";
	/** [Read] ses:GetCustomVerificationEmailTemplate */
	static readonly actionGetCustomVerificationEmailTemplate =
		"ses:GetCustomVerificationEmailTemplate";
	/** [Read] ses:GetDedicatedIp */
	static readonly actionGetDedicatedIp = "ses:GetDedicatedIp";
	/** [Read] ses:GetDedicatedIpPool */
	static readonly actionGetDedicatedIpPool = "ses:GetDedicatedIpPool";
	/** [Read] ses:GetDedicatedIps */
	static readonly actionGetDedicatedIps = "ses:GetDedicatedIps";
	/** [Read] ses:GetDeliverabilityDashboardOptions */
	static readonly actionGetDeliverabilityDashboardOptions =
		"ses:GetDeliverabilityDashboardOptions";
	/** [Read] ses:GetDeliverabilityTestReport */
	static readonly actionGetDeliverabilityTestReport =
		"ses:GetDeliverabilityTestReport";
	/** [Read] ses:GetDomainDeliverabilityCampaign */
	static readonly actionGetDomainDeliverabilityCampaign =
		"ses:GetDomainDeliverabilityCampaign";
	/** [Read] ses:GetDomainStatisticsReport */
	static readonly actionGetDomainStatisticsReport =
		"ses:GetDomainStatisticsReport";
	/** [Read] ses:GetEmailAddressInsights */
	static readonly actionGetEmailAddressInsights = "ses:GetEmailAddressInsights";
	/** [Read] ses:GetEmailIdentity */
	static readonly actionGetEmailIdentity = "ses:GetEmailIdentity";
	/** [Read] ses:GetEmailIdentityPolicies */
	static readonly actionGetEmailIdentityPolicies =
		"ses:GetEmailIdentityPolicies";
	/** [Read] ses:GetEmailTemplate */
	static readonly actionGetEmailTemplate = "ses:GetEmailTemplate";
	/** [Read] ses:GetExportJob */
	static readonly actionGetExportJob = "ses:GetExportJob";
	/** [Read] ses:GetIdentityDkimAttributes */
	static readonly actionGetIdentityDkimAttributes =
		"ses:GetIdentityDkimAttributes";
	/** [Read] ses:GetIdentityMailFromDomainAttributes */
	static readonly actionGetIdentityMailFromDomainAttributes =
		"ses:GetIdentityMailFromDomainAttributes";
	/** [Read] ses:GetIdentityNotificationAttributes */
	static readonly actionGetIdentityNotificationAttributes =
		"ses:GetIdentityNotificationAttributes";
	/** [Read] ses:GetIdentityPolicies */
	static readonly actionGetIdentityPolicies = "ses:GetIdentityPolicies";
	/** [Read] ses:GetIdentityVerificationAttributes */
	static readonly actionGetIdentityVerificationAttributes =
		"ses:GetIdentityVerificationAttributes";
	/** [Read] ses:GetImportJob */
	static readonly actionGetImportJob = "ses:GetImportJob";
	/** [Read] ses:GetIngressPoint */
	static readonly actionGetIngressPoint = "ses:GetIngressPoint";
	/** [Read] ses:GetMemberOfAddressList */
	static readonly actionGetMemberOfAddressList = "ses:GetMemberOfAddressList";
	/** [Read] ses:GetMessageInsights */
	static readonly actionGetMessageInsights = "ses:GetMessageInsights";
	/** [Read] ses:GetMultiRegionEndpoint */
	static readonly actionGetMultiRegionEndpoint = "ses:GetMultiRegionEndpoint";
	/** [Read] ses:GetRelay */
	static readonly actionGetRelay = "ses:GetRelay";
	/** [Read] ses:GetReputationEntity */
	static readonly actionGetReputationEntity = "ses:GetReputationEntity";
	/** [Read] ses:GetRuleSet */
	static readonly actionGetRuleSet = "ses:GetRuleSet";
	/** [Read] ses:GetSendQuota */
	static readonly actionGetSendQuota = "ses:GetSendQuota";
	/** [Read] ses:GetSendStatistics */
	static readonly actionGetSendStatistics = "ses:GetSendStatistics";
	/** [Read] ses:GetSuppressedDestination */
	static readonly actionGetSuppressedDestination =
		"ses:GetSuppressedDestination";
	/** [Read] ses:GetTemplate */
	static readonly actionGetTemplate = "ses:GetTemplate";
	/** [Read] ses:GetTenant */
	static readonly actionGetTenant = "ses:GetTenant";
	/** [Read] ses:GetTrafficPolicy */
	static readonly actionGetTrafficPolicy = "ses:GetTrafficPolicy";
	/** [List] ses:ListAddonInstances */
	static readonly ListAddonInstances = "ses:ListAddonInstances";
	/** [List] ses:ListAddonSubscriptions */
	static readonly ListAddonSubscriptions = "ses:ListAddonSubscriptions";
	/** [List] ses:ListAddressListImportJobs */
	static readonly ListAddressListImportJobs = "ses:ListAddressListImportJobs";
	/** [List] ses:ListAddressLists */
	static readonly ListAddressLists = "ses:ListAddressLists";
	/** [List] ses:ListArchiveExports */
	static readonly ListArchiveExports = "ses:ListArchiveExports";
	/** [List] ses:ListArchiveSearches */
	static readonly ListArchiveSearches = "ses:ListArchiveSearches";
	/** [List] ses:ListArchives */
	static readonly ListArchives = "ses:ListArchives";
	/** [List] ses:ListConfigurationSets */
	static readonly ListConfigurationSets = "ses:ListConfigurationSets";
	/** [List] ses:ListContactLists */
	static readonly ListContactLists = "ses:ListContactLists";
	/** [List] ses:ListContacts */
	static readonly ListContacts = "ses:ListContacts";
	/** [List] ses:ListCustomVerificationEmailTemplates */
	static readonly ListCustomVerificationEmailTemplates =
		"ses:ListCustomVerificationEmailTemplates";
	/** [List] ses:ListDedicatedIpPools */
	static readonly ListDedicatedIpPools = "ses:ListDedicatedIpPools";
	/** [List] ses:ListDeliverabilityTestReports */
	static readonly ListDeliverabilityTestReports =
		"ses:ListDeliverabilityTestReports";
	/** [Read] ses:ListDomainDeliverabilityCampaigns */
	static readonly ListDomainDeliverabilityCampaigns =
		"ses:ListDomainDeliverabilityCampaigns";
	/** [List] ses:ListEmailIdentities */
	static readonly ListEmailIdentities = "ses:ListEmailIdentities";
	/** [List] ses:ListEmailTemplates */
	static readonly ListEmailTemplates = "ses:ListEmailTemplates";
	/** [List] ses:ListExportJobs */
	static readonly ListExportJobs = "ses:ListExportJobs";
	/** [List] ses:ListIdentities */
	static readonly ListIdentities = "ses:ListIdentities";
	/** [List] ses:ListIdentityPolicies */
	static readonly ListIdentityPolicies = "ses:ListIdentityPolicies";
	/** [List] ses:ListImportJobs */
	static readonly ListImportJobs = "ses:ListImportJobs";
	/** [List] ses:ListIngressPoints */
	static readonly ListIngressPoints = "ses:ListIngressPoints";
	/** [List] ses:ListMembersOfAddressList */
	static readonly ListMembersOfAddressList = "ses:ListMembersOfAddressList";
	/** [List] ses:ListMultiRegionEndpoints */
	static readonly ListMultiRegionEndpoints = "ses:ListMultiRegionEndpoints";
	/** [Read] ses:ListReceiptFilters */
	static readonly ListReceiptFilters = "ses:ListReceiptFilters";
	/** [Read] ses:ListReceiptRuleSets */
	static readonly ListReceiptRuleSets = "ses:ListReceiptRuleSets";
	/** [Read] ses:ListRecommendations */
	static readonly ListRecommendations = "ses:ListRecommendations";
	/** [List] ses:ListRelays */
	static readonly ListRelays = "ses:ListRelays";
	/** [List] ses:ListReputationEntities */
	static readonly ListReputationEntities = "ses:ListReputationEntities";
	/** [List] ses:ListResourceTenants */
	static readonly ListResourceTenants = "ses:ListResourceTenants";
	/** [List] ses:ListRuleSets */
	static readonly ListRuleSets = "ses:ListRuleSets";
	/** [Read] ses:ListSuppressedDestinations */
	static readonly ListSuppressedDestinations = "ses:ListSuppressedDestinations";
	/** [Read] ses:ListTagsForResource */
	static readonly ListTagsForResource = "ses:ListTagsForResource";
	/** [List] ses:ListTemplates */
	static readonly ListTemplates = "ses:ListTemplates";
	/** [List] ses:ListTenantResources */
	static readonly ListTenantResources = "ses:ListTenantResources";
	/** [List] ses:ListTenants */
	static readonly ListTenants = "ses:ListTenants";
	/** [List] ses:ListTrafficPolicies */
	static readonly ListTrafficPolicies = "ses:ListTrafficPolicies";
	/** [Read] ses:ListVerifiedEmailAddresses */
	static readonly ListVerifiedEmailAddresses = "ses:ListVerifiedEmailAddresses";
	/** [Write] ses:PutAccountDedicatedIpWarmupAttributes */
	static readonly PutAccountDedicatedIpWarmupAttributes =
		"ses:PutAccountDedicatedIpWarmupAttributes";
	/** [Write] ses:PutAccountDetails */
	static readonly PutAccountDetails = "ses:PutAccountDetails";
	/** [Write] ses:PutAccountPricingAttributes */
	static readonly PutAccountPricingAttributes =
		"ses:PutAccountPricingAttributes";
	/** [Write] ses:PutAccountSendingAttributes */
	static readonly PutAccountSendingAttributes =
		"ses:PutAccountSendingAttributes";
	/** [Write] ses:PutAccountSuppressionAttributes */
	static readonly PutAccountSuppressionAttributes =
		"ses:PutAccountSuppressionAttributes";
	/** [Write] ses:PutAccountVdmAttributes */
	static readonly PutAccountVdmAttributes = "ses:PutAccountVdmAttributes";
	/** [Write] ses:PutConfigurationSetArchivingOptions */
	static readonly PutConfigurationSetArchivingOptions =
		"ses:PutConfigurationSetArchivingOptions";
	/** [Write] ses:PutConfigurationSetDeliveryOptions */
	static readonly PutConfigurationSetDeliveryOptions =
		"ses:PutConfigurationSetDeliveryOptions";
	/** [Write] ses:PutConfigurationSetReputationOptions */
	static readonly PutConfigurationSetReputationOptions =
		"ses:PutConfigurationSetReputationOptions";
	/** [Write] ses:PutConfigurationSetSendingOptions */
	static readonly PutConfigurationSetSendingOptions =
		"ses:PutConfigurationSetSendingOptions";
	/** [Write] ses:PutConfigurationSetSuppressionOptions */
	static readonly PutConfigurationSetSuppressionOptions =
		"ses:PutConfigurationSetSuppressionOptions";
	/** [Write] ses:PutConfigurationSetTrackingOptions */
	static readonly PutConfigurationSetTrackingOptions =
		"ses:PutConfigurationSetTrackingOptions";
	/** [Write] ses:PutConfigurationSetVdmOptions */
	static readonly PutConfigurationSetVdmOptions =
		"ses:PutConfigurationSetVdmOptions";
	/** [Write] ses:PutDedicatedIpInPool */
	static readonly PutDedicatedIpInPool = "ses:PutDedicatedIpInPool";
	/** [Write] ses:PutDedicatedIpPoolScalingAttributes */
	static readonly PutDedicatedIpPoolScalingAttributes =
		"ses:PutDedicatedIpPoolScalingAttributes";
	/** [Write] ses:PutDedicatedIpWarmupAttributes */
	static readonly PutDedicatedIpWarmupAttributes =
		"ses:PutDedicatedIpWarmupAttributes";
	/** [Write] ses:PutDeliverabilityDashboardOption */
	static readonly PutDeliverabilityDashboardOption =
		"ses:PutDeliverabilityDashboardOption";
	/** [Write] ses:PutEmailIdentityConfigurationSetAttributes */
	static readonly PutEmailIdentityConfigurationSetAttributes =
		"ses:PutEmailIdentityConfigurationSetAttributes";
	/** [Write] ses:PutEmailIdentityDkimAttributes */
	static readonly PutEmailIdentityDkimAttributes =
		"ses:PutEmailIdentityDkimAttributes";
	/** [Write] ses:PutEmailIdentityDkimSigningAttributes */
	static readonly PutEmailIdentityDkimSigningAttributes =
		"ses:PutEmailIdentityDkimSigningAttributes";
	/** [Write] ses:PutEmailIdentityFeedbackAttributes */
	static readonly PutEmailIdentityFeedbackAttributes =
		"ses:PutEmailIdentityFeedbackAttributes";
	/** [Write] ses:PutEmailIdentityMailFromAttributes */
	static readonly PutEmailIdentityMailFromAttributes =
		"ses:PutEmailIdentityMailFromAttributes";
	/** [PermissionManagement] ses:PutIdentityPolicy */
	static readonly PutIdentityPolicy = "ses:PutIdentityPolicy";
	/** [Write] ses:PutSuppressedDestination */
	static readonly PutSuppressedDestination = "ses:PutSuppressedDestination";
	/** [Write] ses:PutTenantSuppressionAttributes */
	static readonly PutTenantSuppressionAttributes =
		"ses:PutTenantSuppressionAttributes";
	/** [Write] ses:RegisterMemberToAddressList */
	static readonly RegisterMemberToAddressList =
		"ses:RegisterMemberToAddressList";
	/** [Write] ses:ReorderReceiptRuleSet */
	static readonly ReorderReceiptRuleSet = "ses:ReorderReceiptRuleSet";
	/** [PermissionManagement] ses:ReplicateEmailIdentityDkimSigningKey */
	static readonly ReplicateEmailIdentityDkimSigningKey =
		"ses:ReplicateEmailIdentityDkimSigningKey";
	/** [Write] ses:SendBounce */
	static readonly SendBounce = "ses:SendBounce";
	/** [Write] ses:SendBulkEmail */
	static readonly SendBulkEmail = "ses:SendBulkEmail";
	/** [Write] ses:SendBulkTemplatedEmail */
	static readonly SendBulkTemplatedEmail = "ses:SendBulkTemplatedEmail";
	/** [Write] ses:SendCustomVerificationEmail */
	static readonly SendCustomVerificationEmail =
		"ses:SendCustomVerificationEmail";
	/** [Write] ses:SendEmail */
	static readonly SendEmail = "ses:SendEmail";
	/** [Write] ses:SendRawEmail */
	static readonly SendRawEmail = "ses:SendRawEmail";
	/** [Write] ses:SendTemplatedEmail */
	static readonly SendTemplatedEmail = "ses:SendTemplatedEmail";
	/** [Write] ses:SetActiveReceiptRuleSet */
	static readonly actionSetActiveReceiptRuleSet = "ses:SetActiveReceiptRuleSet";
	/** [Write] ses:SetIdentityDkimEnabled */
	static readonly actionSetIdentityDkimEnabled = "ses:SetIdentityDkimEnabled";
	/** [Write] ses:SetIdentityFeedbackForwardingEnabled */
	static readonly actionSetIdentityFeedbackForwardingEnabled =
		"ses:SetIdentityFeedbackForwardingEnabled";
	/** [Write] ses:SetIdentityHeadersInNotificationsEnabled */
	static readonly actionSetIdentityHeadersInNotificationsEnabled =
		"ses:SetIdentityHeadersInNotificationsEnabled";
	/** [Write] ses:SetIdentityMailFromDomain */
	static readonly actionSetIdentityMailFromDomain =
		"ses:SetIdentityMailFromDomain";
	/** [Write] ses:SetIdentityNotificationTopic */
	static readonly actionSetIdentityNotificationTopic =
		"ses:SetIdentityNotificationTopic";
	/** [Write] ses:SetReceiptRulePosition */
	static readonly actionSetReceiptRulePosition = "ses:SetReceiptRulePosition";
	/** [Write] ses:StartAddressListImportJob */
	static readonly StartAddressListImportJob = "ses:StartAddressListImportJob";
	/** [Write] ses:StartArchiveExport */
	static readonly StartArchiveExport = "ses:StartArchiveExport";
	/** [Write] ses:StartArchiveSearch */
	static readonly StartArchiveSearch = "ses:StartArchiveSearch";
	/** [Write] ses:StopAddressListImportJob */
	static readonly StopAddressListImportJob = "ses:StopAddressListImportJob";
	/** [Write] ses:StopArchiveExport */
	static readonly StopArchiveExport = "ses:StopArchiveExport";
	/** [Write] ses:StopArchiveSearch */
	static readonly StopArchiveSearch = "ses:StopArchiveSearch";
	/** [Tagging] ses:TagResource */
	static readonly TagResource = "ses:TagResource";
	/** [Write] ses:TestRenderEmailTemplate */
	static readonly TestRenderEmailTemplate = "ses:TestRenderEmailTemplate";
	/** [Write] ses:TestRenderTemplate */
	static readonly TestRenderTemplate = "ses:TestRenderTemplate";
	/** [Tagging] ses:UntagResource */
	static readonly UntagResource = "ses:UntagResource";
	/** [Write] ses:UpdateAccountSendingEnabled */
	static readonly UpdateAccountSendingEnabled =
		"ses:UpdateAccountSendingEnabled";
	/** [Write] ses:UpdateArchive */
	static readonly UpdateArchive = "ses:UpdateArchive";
	/** [Write] ses:UpdateConfigurationSetEventDestination */
	static readonly UpdateConfigurationSetEventDestination =
		"ses:UpdateConfigurationSetEventDestination";
	/** [Write] ses:UpdateConfigurationSetReputationMetricsEnabled */
	static readonly UpdateConfigurationSetReputationMetricsEnabled =
		"ses:UpdateConfigurationSetReputationMetricsEnabled";
	/** [Write] ses:UpdateConfigurationSetSendingEnabled */
	static readonly UpdateConfigurationSetSendingEnabled =
		"ses:UpdateConfigurationSetSendingEnabled";
	/** [Write] ses:UpdateConfigurationSetTrackingOptions */
	static readonly UpdateConfigurationSetTrackingOptions =
		"ses:UpdateConfigurationSetTrackingOptions";
	/** [Write] ses:UpdateContact */
	static readonly UpdateContact = "ses:UpdateContact";
	/** [Write] ses:UpdateContactList */
	static readonly UpdateContactList = "ses:UpdateContactList";
	/** [Write] ses:UpdateCustomVerificationEmailTemplate */
	static readonly UpdateCustomVerificationEmailTemplate =
		"ses:UpdateCustomVerificationEmailTemplate";
	/** [PermissionManagement] ses:UpdateEmailIdentityPolicy */
	static readonly UpdateEmailIdentityPolicy = "ses:UpdateEmailIdentityPolicy";
	/** [Write] ses:UpdateEmailTemplate */
	static readonly UpdateEmailTemplate = "ses:UpdateEmailTemplate";
	/** [Write] ses:UpdateIngressPoint */
	static readonly UpdateIngressPoint = "ses:UpdateIngressPoint";
	/** [Write] ses:UpdateReceiptRule */
	static readonly UpdateReceiptRule = "ses:UpdateReceiptRule";
	/** [Write] ses:UpdateRelay */
	static readonly UpdateRelay = "ses:UpdateRelay";
	/** [Write] ses:UpdateReputationEntityCustomerManagedStatus */
	static readonly UpdateReputationEntityCustomerManagedStatus =
		"ses:UpdateReputationEntityCustomerManagedStatus";
	/** [Write] ses:UpdateReputationEntityPolicy */
	static readonly UpdateReputationEntityPolicy =
		"ses:UpdateReputationEntityPolicy";
	/** [Write] ses:UpdateRuleSet */
	static readonly UpdateRuleSet = "ses:UpdateRuleSet";
	/** [Write] ses:UpdateTemplate */
	static readonly UpdateTemplate = "ses:UpdateTemplate";
	/** [Write] ses:UpdateTrafficPolicy */
	static readonly UpdateTrafficPolicy = "ses:UpdateTrafficPolicy";
	/** [Write] ses:VerifyDomainDkim */
	static readonly VerifyDomainDkim = "ses:VerifyDomainDkim";
	/** [Write] ses:VerifyDomainIdentity */
	static readonly VerifyDomainIdentity = "ses:VerifyDomainIdentity";
	/** [Write] ses:VerifyEmailAddress */
	static readonly VerifyEmailAddress = "ses:VerifyEmailAddress";
	/** [Write] ses:VerifyEmailIdentity */
	static readonly VerifyEmailIdentity = "ses:VerifyEmailIdentity";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SesActions.BatchGetMetricData,
		SesActions.DescribeActiveReceiptRuleSet,
		SesActions.DescribeConfigurationSet,
		SesActions.DescribeReceiptRule,
		SesActions.DescribeReceiptRuleSet,
		SesActions.actionGetAccount,
		SesActions.actionGetAccountSendingEnabled,
		SesActions.actionGetAddonInstance,
		SesActions.actionGetAddonSubscription,
		SesActions.actionGetAddressList,
		SesActions.actionGetAddressListImportJob,
		SesActions.actionGetArchive,
		SesActions.actionGetArchiveExport,
		SesActions.actionGetArchiveMessage,
		SesActions.actionGetArchiveMessageContent,
		SesActions.actionGetArchiveSearch,
		SesActions.actionGetArchiveSearchResults,
		SesActions.actionGetBlacklistReports,
		SesActions.actionGetConfigurationSet,
		SesActions.actionGetConfigurationSetEventDestinations,
		SesActions.actionGetContact,
		SesActions.actionGetContactList,
		SesActions.actionGetCustomVerificationEmailTemplate,
		SesActions.actionGetDedicatedIp,
		SesActions.actionGetDedicatedIpPool,
		SesActions.actionGetDedicatedIps,
		SesActions.actionGetDeliverabilityDashboardOptions,
		SesActions.actionGetDeliverabilityTestReport,
		SesActions.actionGetDomainDeliverabilityCampaign,
		SesActions.actionGetDomainStatisticsReport,
		SesActions.actionGetEmailAddressInsights,
		SesActions.actionGetEmailIdentity,
		SesActions.actionGetEmailIdentityPolicies,
		SesActions.actionGetEmailTemplate,
		SesActions.actionGetExportJob,
		SesActions.actionGetIdentityDkimAttributes,
		SesActions.actionGetIdentityMailFromDomainAttributes,
		SesActions.actionGetIdentityNotificationAttributes,
		SesActions.actionGetIdentityPolicies,
		SesActions.actionGetIdentityVerificationAttributes,
		SesActions.actionGetImportJob,
		SesActions.actionGetIngressPoint,
		SesActions.actionGetMemberOfAddressList,
		SesActions.actionGetMessageInsights,
		SesActions.actionGetMultiRegionEndpoint,
		SesActions.actionGetRelay,
		SesActions.actionGetReputationEntity,
		SesActions.actionGetRuleSet,
		SesActions.actionGetSendQuota,
		SesActions.actionGetSendStatistics,
		SesActions.actionGetSuppressedDestination,
		SesActions.actionGetTemplate,
		SesActions.actionGetTenant,
		SesActions.actionGetTrafficPolicy,
		SesActions.ListDomainDeliverabilityCampaigns,
		SesActions.ListReceiptFilters,
		SesActions.ListReceiptRuleSets,
		SesActions.ListRecommendations,
		SesActions.ListSuppressedDestinations,
		SesActions.ListTagsForResource,
		SesActions.ListVerifiedEmailAddresses,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SesActions.CancelExportJob,
		SesActions.CloneReceiptRuleSet,
		SesActions.CreateAddonInstance,
		SesActions.CreateAddonSubscription,
		SesActions.CreateAddressList,
		SesActions.CreateAddressListImportJob,
		SesActions.CreateArchive,
		SesActions.CreateConfigurationSet,
		SesActions.CreateConfigurationSetEventDestination,
		SesActions.CreateConfigurationSetTrackingOptions,
		SesActions.CreateContact,
		SesActions.CreateContactList,
		SesActions.CreateCustomVerificationEmailTemplate,
		SesActions.CreateDedicatedIpPool,
		SesActions.CreateDeliverabilityTestReport,
		SesActions.CreateEmailIdentity,
		SesActions.CreateEmailTemplate,
		SesActions.CreateExportJob,
		SesActions.CreateImportJob,
		SesActions.CreateIngressPoint,
		SesActions.CreateMultiRegionEndpoint,
		SesActions.CreateReceiptFilter,
		SesActions.CreateReceiptRule,
		SesActions.CreateReceiptRuleSet,
		SesActions.CreateRelay,
		SesActions.CreateRuleSet,
		SesActions.CreateTemplate,
		SesActions.CreateTenant,
		SesActions.CreateTenantResourceAssociation,
		SesActions.CreateTrafficPolicy,
		SesActions.DeleteAddonInstance,
		SesActions.DeleteAddonSubscription,
		SesActions.DeleteAddressList,
		SesActions.DeleteArchive,
		SesActions.DeleteConfigurationSet,
		SesActions.DeleteConfigurationSetEventDestination,
		SesActions.DeleteConfigurationSetTrackingOptions,
		SesActions.DeleteContact,
		SesActions.DeleteContactList,
		SesActions.DeleteCustomVerificationEmailTemplate,
		SesActions.DeleteDedicatedIpPool,
		SesActions.DeleteEmailIdentity,
		SesActions.DeleteEmailTemplate,
		SesActions.DeleteIdentity,
		SesActions.DeleteIngressPoint,
		SesActions.DeleteMultiRegionEndpoint,
		SesActions.DeleteReceiptFilter,
		SesActions.DeleteReceiptRule,
		SesActions.DeleteReceiptRuleSet,
		SesActions.DeleteRelay,
		SesActions.DeleteRuleSet,
		SesActions.DeleteSuppressedDestination,
		SesActions.DeleteTemplate,
		SesActions.DeleteTenant,
		SesActions.DeleteTenantResourceAssociation,
		SesActions.DeleteTrafficPolicy,
		SesActions.DeleteVerifiedEmailAddress,
		SesActions.DeregisterMemberFromAddressList,
		SesActions.PutAccountDedicatedIpWarmupAttributes,
		SesActions.PutAccountDetails,
		SesActions.PutAccountPricingAttributes,
		SesActions.PutAccountSendingAttributes,
		SesActions.PutAccountSuppressionAttributes,
		SesActions.PutAccountVdmAttributes,
		SesActions.PutConfigurationSetArchivingOptions,
		SesActions.PutConfigurationSetDeliveryOptions,
		SesActions.PutConfigurationSetReputationOptions,
		SesActions.PutConfigurationSetSendingOptions,
		SesActions.PutConfigurationSetSuppressionOptions,
		SesActions.PutConfigurationSetTrackingOptions,
		SesActions.PutConfigurationSetVdmOptions,
		SesActions.PutDedicatedIpInPool,
		SesActions.PutDedicatedIpPoolScalingAttributes,
		SesActions.PutDedicatedIpWarmupAttributes,
		SesActions.PutDeliverabilityDashboardOption,
		SesActions.PutEmailIdentityConfigurationSetAttributes,
		SesActions.PutEmailIdentityDkimAttributes,
		SesActions.PutEmailIdentityDkimSigningAttributes,
		SesActions.PutEmailIdentityFeedbackAttributes,
		SesActions.PutEmailIdentityMailFromAttributes,
		SesActions.PutSuppressedDestination,
		SesActions.PutTenantSuppressionAttributes,
		SesActions.RegisterMemberToAddressList,
		SesActions.ReorderReceiptRuleSet,
		SesActions.SendBounce,
		SesActions.SendBulkEmail,
		SesActions.SendBulkTemplatedEmail,
		SesActions.SendCustomVerificationEmail,
		SesActions.SendEmail,
		SesActions.SendRawEmail,
		SesActions.SendTemplatedEmail,
		SesActions.actionSetActiveReceiptRuleSet,
		SesActions.actionSetIdentityDkimEnabled,
		SesActions.actionSetIdentityFeedbackForwardingEnabled,
		SesActions.actionSetIdentityHeadersInNotificationsEnabled,
		SesActions.actionSetIdentityMailFromDomain,
		SesActions.actionSetIdentityNotificationTopic,
		SesActions.actionSetReceiptRulePosition,
		SesActions.StartAddressListImportJob,
		SesActions.StartArchiveExport,
		SesActions.StartArchiveSearch,
		SesActions.StopAddressListImportJob,
		SesActions.StopArchiveExport,
		SesActions.StopArchiveSearch,
		SesActions.TestRenderEmailTemplate,
		SesActions.TestRenderTemplate,
		SesActions.UpdateAccountSendingEnabled,
		SesActions.UpdateArchive,
		SesActions.UpdateConfigurationSetEventDestination,
		SesActions.UpdateConfigurationSetReputationMetricsEnabled,
		SesActions.UpdateConfigurationSetSendingEnabled,
		SesActions.UpdateConfigurationSetTrackingOptions,
		SesActions.UpdateContact,
		SesActions.UpdateContactList,
		SesActions.UpdateCustomVerificationEmailTemplate,
		SesActions.UpdateEmailTemplate,
		SesActions.UpdateIngressPoint,
		SesActions.UpdateReceiptRule,
		SesActions.UpdateRelay,
		SesActions.UpdateReputationEntityCustomerManagedStatus,
		SesActions.UpdateReputationEntityPolicy,
		SesActions.UpdateRuleSet,
		SesActions.UpdateTemplate,
		SesActions.UpdateTrafficPolicy,
		SesActions.VerifyDomainDkim,
		SesActions.VerifyDomainIdentity,
		SesActions.VerifyEmailAddress,
		SesActions.VerifyEmailIdentity,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SesActions.ListAddonInstances,
		SesActions.ListAddonSubscriptions,
		SesActions.ListAddressListImportJobs,
		SesActions.ListAddressLists,
		SesActions.ListArchiveExports,
		SesActions.ListArchiveSearches,
		SesActions.ListArchives,
		SesActions.ListConfigurationSets,
		SesActions.ListContactLists,
		SesActions.ListContacts,
		SesActions.ListCustomVerificationEmailTemplates,
		SesActions.ListDedicatedIpPools,
		SesActions.ListDeliverabilityTestReports,
		SesActions.ListEmailIdentities,
		SesActions.ListEmailTemplates,
		SesActions.ListExportJobs,
		SesActions.ListIdentities,
		SesActions.ListIdentityPolicies,
		SesActions.ListImportJobs,
		SesActions.ListIngressPoints,
		SesActions.ListMembersOfAddressList,
		SesActions.ListMultiRegionEndpoints,
		SesActions.ListRelays,
		SesActions.ListReputationEntities,
		SesActions.ListResourceTenants,
		SesActions.ListRuleSets,
		SesActions.ListTemplates,
		SesActions.ListTenantResources,
		SesActions.ListTenants,
		SesActions.ListTrafficPolicies,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SesActions.AllowVendedLogDeliveryForResource,
		SesActions.CreateEmailIdentityPolicy,
		SesActions.DeleteEmailIdentityPolicy,
		SesActions.DeleteIdentityPolicy,
		SesActions.PutIdentityPolicy,
		SesActions.ReplicateEmailIdentityDkimSigningKey,
		SesActions.UpdateEmailIdentityPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SesActions.TagResource,
		SesActions.UntagResource,
	];
}

/**
 * Properties for building a addon-instance ARN.
 */
export interface SesAddonInstanceArnProps {
	/** The AddonInstanceId component of the ARN. */
	readonly addonInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a addon-instance ARN.
 */
export interface SesAddonInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AddonInstanceId component. */
	readonly addonInstanceId: string;
}

/**
 * Properties for building a addon-subscription ARN.
 */
export interface SesAddonSubscriptionArnProps {
	/** The AddonSubscriptionId component of the ARN. */
	readonly addonSubscriptionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a addon-subscription ARN.
 */
export interface SesAddonSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AddonSubscriptionId component. */
	readonly addonSubscriptionId: string;
}

/**
 * Properties for building a configuration-set ARN.
 */
export interface SesConfigurationSetArnProps {
	/** The ConfigurationSetName component of the ARN. */
	readonly configurationSetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a configuration-set ARN.
 */
export interface SesConfigurationSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConfigurationSetName component. */
	readonly configurationSetName: string;
}

/**
 * Properties for building a contact-list ARN.
 */
export interface SesContactListArnProps {
	/** The ContactListName component of the ARN. */
	readonly contactListName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a contact-list ARN.
 */
export interface SesContactListArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContactListName component. */
	readonly contactListName: string;
}

/**
 * Properties for building a custom-verification-email-template ARN.
 */
export interface SesCustomVerificationEmailTemplateArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a custom-verification-email-template ARN.
 */
export interface SesCustomVerificationEmailTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
}

/**
 * Properties for building a dedicated-ip-pool ARN.
 */
export interface SesDedicatedIPPoolArnProps {
	/** The DedicatedIPPool component of the ARN. */
	readonly dedicatedIPPool: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dedicated-ip-pool ARN.
 */
export interface SesDedicatedIPPoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DedicatedIPPool component. */
	readonly dedicatedIPPool: string;
}

/**
 * Properties for building a deliverability-test-report ARN.
 */
export interface SesDeliverabilityTestReportArnProps {
	/** The ReportId component of the ARN. */
	readonly reportId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a deliverability-test-report ARN.
 */
export interface SesDeliverabilityTestReportArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReportId component. */
	readonly reportId: string;
}

/**
 * Properties for building a export-job ARN.
 */
export interface SesExportJobArnProps {
	/** The ExportJobId component of the ARN. */
	readonly exportJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a export-job ARN.
 */
export interface SesExportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ExportJobId component. */
	readonly exportJobId: string;
}

/**
 * Properties for building a identity ARN.
 */
export interface SesIdentityArnProps {
	/** The IdentityName component of the ARN. */
	readonly identityName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a identity ARN.
 */
export interface SesIdentityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityName component. */
	readonly identityName: string;
}

/**
 * Properties for building a import-job ARN.
 */
export interface SesImportJobArnProps {
	/** The ImportJobId component of the ARN. */
	readonly importJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a import-job ARN.
 */
export interface SesImportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImportJobId component. */
	readonly importJobId: string;
}

/**
 * Properties for building a mailmanager-address-list ARN.
 */
export interface SesMailmanagerAddressListArnProps {
	/** The AddressListId component of the ARN. */
	readonly addressListId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mailmanager-address-list ARN.
 */
export interface SesMailmanagerAddressListArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AddressListId component. */
	readonly addressListId: string;
}

/**
 * Properties for building a mailmanager-archive ARN.
 */
export interface SesMailmanagerArchiveArnProps {
	/** The ArchiveId component of the ARN. */
	readonly archiveId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mailmanager-archive ARN.
 */
export interface SesMailmanagerArchiveArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ArchiveId component. */
	readonly archiveId: string;
}

/**
 * Properties for building a mailmanager-ingress-point ARN.
 */
export interface SesMailmanagerIngressPointArnProps {
	/** The IngressPointId component of the ARN. */
	readonly ingressPointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mailmanager-ingress-point ARN.
 */
export interface SesMailmanagerIngressPointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IngressPointId component. */
	readonly ingressPointId: string;
}

/**
 * Properties for building a mailmanager-rule-set ARN.
 */
export interface SesMailmanagerRuleSetArnProps {
	/** The RuleSetId component of the ARN. */
	readonly ruleSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mailmanager-rule-set ARN.
 */
export interface SesMailmanagerRuleSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleSetId component. */
	readonly ruleSetId: string;
}

/**
 * Properties for building a mailmanager-smtp-relay ARN.
 */
export interface SesMailmanagerSmtpRelayArnProps {
	/** The RelayId component of the ARN. */
	readonly relayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mailmanager-smtp-relay ARN.
 */
export interface SesMailmanagerSmtpRelayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RelayId component. */
	readonly relayId: string;
}

/**
 * Properties for building a mailmanager-traffic-policy ARN.
 */
export interface SesMailmanagerTrafficPolicyArnProps {
	/** The TrafficPolicyId component of the ARN. */
	readonly trafficPolicyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mailmanager-traffic-policy ARN.
 */
export interface SesMailmanagerTrafficPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrafficPolicyId component. */
	readonly trafficPolicyId: string;
}

/**
 * Properties for building a multi-region-endpoint ARN.
 */
export interface SesMultiRegionEndpointArnProps {
	/** The EndpointName component of the ARN. */
	readonly endpointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a multi-region-endpoint ARN.
 */
export interface SesMultiRegionEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EndpointName component. */
	readonly endpointName: string;
}

/**
 * Properties for building a reputation-policy ARN.
 */
export interface SesReputationPolicyArnProps {
	/** The ReputationPolicyName component of the ARN. */
	readonly reputationPolicyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reputation-policy ARN.
 */
export interface SesReputationPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReputationPolicyName component. */
	readonly reputationPolicyName: string;
}

/**
 * Properties for building a template ARN.
 */
export interface SesTemplateArnProps {
	/** The TemplateName component of the ARN. */
	readonly templateName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a template ARN.
 */
export interface SesTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TemplateName component. */
	readonly templateName: string;
}

/**
 * Properties for building a tenant ARN.
 */
export interface SesTenantArnProps {
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
}

/**
 * Parsed components of a tenant ARN.
 */
export interface SesTenantArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TenantName component. */
	readonly tenantName: string;
	/** The TenantId component. */
	readonly tenantId: string;
}

const AddonInstanceArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):addon-instance\/(?<addonInstanceId>[^:/?]+)$/;
const AddonSubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):addon-subscription\/(?<addonSubscriptionId>[^:/?]+)$/;
const ConfigurationSetArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):configuration-set\/(?<configurationSetName>[^:/?]+)$/;
const ContactListArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):contact-list\/(?<contactListName>[^:/?]+)$/;
const CustomVerificationEmailTemplateArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):custom-verification-email-template\/(?<templateName>[^:/?]+)$/;
const DedicatedIPPoolArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):dedicated-ip-pool\/(?<dedicatedIPPool>[^:/?]+)$/;
const DeliverabilityTestReportArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):deliverability-test-report\/(?<reportId>[^:/?]+)$/;
const ExportJobArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):export-job\/(?<exportJobId>[^:/?]+)$/;
const IdentityArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):identity\/(?<identityName>[^:/?]+)$/;
const ImportJobArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):import-job\/(?<importJobId>[^:/?]+)$/;
const MailmanagerAddressListArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-address-list\/(?<addressListId>[^:/?]+)$/;
const MailmanagerArchiveArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-archive\/(?<archiveId>[^:/?]+)$/;
const MailmanagerIngressPointArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-ingress-point\/(?<ingressPointId>[^:/?]+)$/;
const MailmanagerRuleSetArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-rule-set\/(?<ruleSetId>[^:/?]+)$/;
const MailmanagerSmtpRelayArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-smtp-relay\/(?<relayId>[^:/?]+)$/;
const MailmanagerTrafficPolicyArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):mailmanager-traffic-policy\/(?<trafficPolicyId>[^:/?]+)$/;
const MultiRegionEndpointArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):multi-region-endpoint\/(?<endpointName>[^:/?]+)$/;
const ReputationPolicyArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):aws:reputation-policy\/(?<reputationPolicyName>[^:/?]+)$/;
const TemplateArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):template\/(?<templateName>[^:/?]+)$/;
const TenantArnRegex =
	/^arn:(?<partition>[^:]+):ses:(?<region>[^:]*):(?<account>[^:]*):tenant\/(?<tenantName>[^:/?]+)\/(?<tenantId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ses resources.
 */
export class SesResources {
	/**
	 * Builds an ARN for the addon-instance resource.
	 */
	static addonInstance(props: SesAddonInstanceArnProps): string {
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
	static parseAddonInstanceArn(arn: string): SesAddonInstanceArnComponents {
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
	static addonSubscription(props: SesAddonSubscriptionArnProps): string {
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
	static parseAddonSubscriptionArn(
		arn: string,
	): SesAddonSubscriptionArnComponents {
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
	static configurationSet(props: SesConfigurationSetArnProps): string {
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
	static parseConfigurationSetArn(
		arn: string,
	): SesConfigurationSetArnComponents {
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
	static contactList(props: SesContactListArnProps): string {
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
	static parseContactListArn(arn: string): SesContactListArnComponents {
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
	static customVerificationEmailTemplate(
		props: SesCustomVerificationEmailTemplateArnProps,
	): string {
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
	static parseCustomVerificationEmailTemplateArn(
		arn: string,
	): SesCustomVerificationEmailTemplateArnComponents {
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
	static dedicatedIPPool(props: SesDedicatedIPPoolArnProps): string {
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
	static parseDedicatedIPPoolArn(arn: string): SesDedicatedIPPoolArnComponents {
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
	static deliverabilityTestReport(
		props: SesDeliverabilityTestReportArnProps,
	): string {
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
	static parseDeliverabilityTestReportArn(
		arn: string,
	): SesDeliverabilityTestReportArnComponents {
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
	static exportJob(props: SesExportJobArnProps): string {
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
	static parseExportJobArn(arn: string): SesExportJobArnComponents {
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
	static identity(props: SesIdentityArnProps): string {
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
	static parseIdentityArn(arn: string): SesIdentityArnComponents {
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
	static importJob(props: SesImportJobArnProps): string {
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
	static parseImportJobArn(arn: string): SesImportJobArnComponents {
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
	static mailmanagerAddressList(
		props: SesMailmanagerAddressListArnProps,
	): string {
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
	static parseMailmanagerAddressListArn(
		arn: string,
	): SesMailmanagerAddressListArnComponents {
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
	static mailmanagerArchive(props: SesMailmanagerArchiveArnProps): string {
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
	static parseMailmanagerArchiveArn(
		arn: string,
	): SesMailmanagerArchiveArnComponents {
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
	static mailmanagerIngressPoint(
		props: SesMailmanagerIngressPointArnProps,
	): string {
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
	static parseMailmanagerIngressPointArn(
		arn: string,
	): SesMailmanagerIngressPointArnComponents {
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
	static mailmanagerRuleSet(props: SesMailmanagerRuleSetArnProps): string {
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
	static parseMailmanagerRuleSetArn(
		arn: string,
	): SesMailmanagerRuleSetArnComponents {
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
	static mailmanagerSmtpRelay(props: SesMailmanagerSmtpRelayArnProps): string {
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
	static parseMailmanagerSmtpRelayArn(
		arn: string,
	): SesMailmanagerSmtpRelayArnComponents {
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
	static mailmanagerTrafficPolicy(
		props: SesMailmanagerTrafficPolicyArnProps,
	): string {
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
	static parseMailmanagerTrafficPolicyArn(
		arn: string,
	): SesMailmanagerTrafficPolicyArnComponents {
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
	static multiRegionEndpoint(props: SesMultiRegionEndpointArnProps): string {
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
	static parseMultiRegionEndpointArn(
		arn: string,
	): SesMultiRegionEndpointArnComponents {
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
	static reputationPolicy(props: SesReputationPolicyArnProps): string {
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
	static parseReputationPolicyArn(
		arn: string,
	): SesReputationPolicyArnComponents {
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
	static template(props: SesTemplateArnProps): string {
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
	static parseTemplateArn(arn: string): SesTemplateArnComponents {
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
	static tenant(props: SesTenantArnProps): string {
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
	static parseTenantArn(arn: string): SesTenantArnComponents {
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
	static readonly BatchGetMetricData: string[] = ["ses:BatchGetMetricData"];
	/** IAM actions required for the CancelExportJob API call. */
	static readonly CancelExportJob: string[] = ["ses:CancelExportJob"];
	/** IAM actions required for the CloneReceiptRuleSet API call. */
	static readonly CloneReceiptRuleSet: string[] = ["ses:CloneReceiptRuleSet"];
	/** IAM actions required for the CreateAddonInstance API call. */
	static readonly CreateAddonInstance: string[] = [
		"ses:CreateAddonInstance",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateAddonSubscription API call. */
	static readonly CreateAddonSubscription: string[] = [
		"ses:CreateAddonSubscription",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateAddressList API call. */
	static readonly CreateAddressList: string[] = [
		"ses:CreateAddressList",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateAddressListImportJob API call. */
	static readonly CreateAddressListImportJob: string[] = [
		"ses:CreateAddressListImportJob",
	];
	/** IAM actions required for the CreateArchive API call. */
	static readonly CreateArchive: string[] = [
		"ses:CreateArchive",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateConfigurationSet API call. */
	static readonly CreateConfigurationSet: string[] = [
		"ses:CreateConfigurationSet",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateConfigurationSetEventDestination API call. */
	static readonly CreateConfigurationSetEventDestination: string[] = [
		"ses:CreateConfigurationSetEventDestination",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateConfigurationSetTrackingOptions API call. */
	static readonly CreateConfigurationSetTrackingOptions: string[] = [
		"ses:CreateConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the CreateContact API call. */
	static readonly CreateContact: string[] = ["ses:CreateContact"];
	/** IAM actions required for the CreateContactList API call. */
	static readonly CreateContactList: string[] = [
		"ses:CreateContactList",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateCustomVerificationEmailTemplate API call. */
	static readonly CreateCustomVerificationEmailTemplate: string[] = [
		"ses:CreateCustomVerificationEmailTemplate",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateDedicatedIpPool API call. */
	static readonly CreateDedicatedIpPool: string[] = [
		"ses:CreateDedicatedIpPool",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateDeliverabilityTestReport API call. */
	static readonly CreateDeliverabilityTestReport: string[] = [
		"ses:CreateDeliverabilityTestReport",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateEmailIdentity API call. */
	static readonly CreateEmailIdentity: string[] = [
		"ses:CreateEmailIdentity",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateEmailIdentityPolicy API call. */
	static readonly CreateEmailIdentityPolicy: string[] = [
		"ses:CreateEmailIdentityPolicy",
	];
	/** IAM actions required for the CreateEmailTemplate API call. */
	static readonly CreateEmailTemplate: string[] = [
		"ses:CreateEmailTemplate",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateExportJob API call. */
	static readonly CreateExportJob: string[] = ["ses:CreateExportJob"];
	/** IAM actions required for the CreateImportJob API call. */
	static readonly CreateImportJob: string[] = ["ses:CreateImportJob"];
	/** IAM actions required for the CreateIngressPoint API call. */
	static readonly CreateIngressPoint: string[] = [
		"ses:CreateIngressPoint",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateMultiRegionEndpoint API call. */
	static readonly CreateMultiRegionEndpoint: string[] = [
		"ses:CreateMultiRegionEndpoint",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateReceiptFilter API call. */
	static readonly CreateReceiptFilter: string[] = ["ses:CreateReceiptFilter"];
	/** IAM actions required for the CreateReceiptRule API call. */
	static readonly CreateReceiptRule: string[] = [
		"ses:CreateReceiptRule",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateReceiptRuleSet API call. */
	static readonly CreateReceiptRuleSet: string[] = ["ses:CreateReceiptRuleSet"];
	/** IAM actions required for the CreateRelay API call. */
	static readonly CreateRelay: string[] = [
		"ses:CreateRelay",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateRuleSet API call. */
	static readonly CreateRuleSet: string[] = [
		"ses:CreateRuleSet",
		"iam:PassRole",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CreateTemplate: string[] = ["ses:CreateTemplate"];
	/** IAM actions required for the CreateTenant API call. */
	static readonly CreateTenant: string[] = [
		"ses:CreateTenant",
		"ses:TagResource",
	];
	/** IAM actions required for the CreateTenantResourceAssociation API call. */
	static readonly CreateTenantResourceAssociation: string[] = [
		"ses:CreateTenantResourceAssociation",
	];
	/** IAM actions required for the CreateTrafficPolicy API call. */
	static readonly CreateTrafficPolicy: string[] = [
		"ses:CreateTrafficPolicy",
		"ses:TagResource",
	];
	/** IAM actions required for the DeleteAddonInstance API call. */
	static readonly DeleteAddonInstance: string[] = ["ses:DeleteAddonInstance"];
	/** IAM actions required for the DeleteAddonSubscription API call. */
	static readonly DeleteAddonSubscription: string[] = [
		"ses:DeleteAddonSubscription",
	];
	/** IAM actions required for the DeleteAddressList API call. */
	static readonly DeleteAddressList: string[] = ["ses:DeleteAddressList"];
	/** IAM actions required for the DeleteArchive API call. */
	static readonly DeleteArchive: string[] = ["ses:DeleteArchive"];
	/** IAM actions required for the DeleteConfigurationSet API call. */
	static readonly DeleteConfigurationSet: string[] = [
		"ses:DeleteConfigurationSet",
	];
	/** IAM actions required for the DeleteConfigurationSetEventDestination API call. */
	static readonly DeleteConfigurationSetEventDestination: string[] = [
		"ses:DeleteConfigurationSetEventDestination",
	];
	/** IAM actions required for the DeleteConfigurationSetTrackingOptions API call. */
	static readonly DeleteConfigurationSetTrackingOptions: string[] = [
		"ses:DeleteConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the DeleteContact API call. */
	static readonly DeleteContact: string[] = ["ses:DeleteContact"];
	/** IAM actions required for the DeleteContactList API call. */
	static readonly DeleteContactList: string[] = ["ses:DeleteContactList"];
	/** IAM actions required for the DeleteCustomVerificationEmailTemplate API call. */
	static readonly DeleteCustomVerificationEmailTemplate: string[] = [
		"ses:DeleteCustomVerificationEmailTemplate",
	];
	/** IAM actions required for the DeleteDedicatedIpPool API call. */
	static readonly DeleteDedicatedIpPool: string[] = [
		"ses:DeleteDedicatedIpPool",
	];
	/** IAM actions required for the DeleteEmailIdentity API call. */
	static readonly DeleteEmailIdentity: string[] = ["ses:DeleteEmailIdentity"];
	/** IAM actions required for the DeleteEmailIdentityPolicy API call. */
	static readonly DeleteEmailIdentityPolicy: string[] = [
		"ses:DeleteEmailIdentityPolicy",
	];
	/** IAM actions required for the DeleteEmailTemplate API call. */
	static readonly DeleteEmailTemplate: string[] = ["ses:DeleteEmailTemplate"];
	/** IAM actions required for the DeleteIdentity API call. */
	static readonly DeleteIdentity: string[] = ["ses:DeleteIdentity"];
	/** IAM actions required for the DeleteIdentityPolicy API call. */
	static readonly DeleteIdentityPolicy: string[] = ["ses:DeleteIdentityPolicy"];
	/** IAM actions required for the DeleteIngressPoint API call. */
	static readonly DeleteIngressPoint: string[] = ["ses:DeleteIngressPoint"];
	/** IAM actions required for the DeleteMultiRegionEndpoint API call. */
	static readonly DeleteMultiRegionEndpoint: string[] = [
		"ses:DeleteMultiRegionEndpoint",
	];
	/** IAM actions required for the DeleteReceiptFilter API call. */
	static readonly DeleteReceiptFilter: string[] = ["ses:DeleteReceiptFilter"];
	/** IAM actions required for the DeleteReceiptRule API call. */
	static readonly DeleteReceiptRule: string[] = ["ses:DeleteReceiptRule"];
	/** IAM actions required for the DeleteReceiptRuleSet API call. */
	static readonly DeleteReceiptRuleSet: string[] = ["ses:DeleteReceiptRuleSet"];
	/** IAM actions required for the DeleteRelay API call. */
	static readonly DeleteRelay: string[] = ["ses:DeleteRelay"];
	/** IAM actions required for the DeleteRuleSet API call. */
	static readonly DeleteRuleSet: string[] = ["ses:DeleteRuleSet"];
	/** IAM actions required for the DeleteSuppressedDestination API call. */
	static readonly DeleteSuppressedDestination: string[] = [
		"ses:DeleteSuppressedDestination",
	];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DeleteTemplate: string[] = ["ses:DeleteTemplate"];
	/** IAM actions required for the DeleteTenant API call. */
	static readonly DeleteTenant: string[] = ["ses:DeleteTenant"];
	/** IAM actions required for the DeleteTenantResourceAssociation API call. */
	static readonly DeleteTenantResourceAssociation: string[] = [
		"ses:DeleteTenantResourceAssociation",
	];
	/** IAM actions required for the DeleteTrafficPolicy API call. */
	static readonly DeleteTrafficPolicy: string[] = ["ses:DeleteTrafficPolicy"];
	/** IAM actions required for the DeleteVerifiedEmailAddress API call. */
	static readonly DeleteVerifiedEmailAddress: string[] = [
		"ses:DeleteVerifiedEmailAddress",
	];
	/** IAM actions required for the DeregisterMemberFromAddressList API call. */
	static readonly DeregisterMemberFromAddressList: string[] = [
		"ses:DeregisterMemberFromAddressList",
	];
	/** IAM actions required for the DescribeActiveReceiptRuleSet API call. */
	static readonly DescribeActiveReceiptRuleSet: string[] = [
		"ses:DescribeActiveReceiptRuleSet",
	];
	/** IAM actions required for the DescribeConfigurationSet API call. */
	static readonly DescribeConfigurationSet: string[] = [
		"ses:DescribeConfigurationSet",
	];
	/** IAM actions required for the DescribeReceiptRule API call. */
	static readonly DescribeReceiptRule: string[] = ["ses:DescribeReceiptRule"];
	/** IAM actions required for the DescribeReceiptRuleSet API call. */
	static readonly DescribeReceiptRuleSet: string[] = [
		"ses:DescribeReceiptRuleSet",
	];
	/** IAM actions required for the GetAccount API call. */
	static readonly opGetAccount: string[] = ["ses:GetAccount"];
	/** IAM actions required for the GetAccountSendingEnabled API call. */
	static readonly opGetAccountSendingEnabled: string[] = [
		"ses:GetAccountSendingEnabled",
	];
	/** IAM actions required for the GetAddonInstance API call. */
	static readonly opGetAddonInstance: string[] = ["ses:GetAddonInstance"];
	/** IAM actions required for the GetAddonSubscription API call. */
	static readonly opGetAddonSubscription: string[] = [
		"ses:GetAddonSubscription",
	];
	/** IAM actions required for the GetAddressList API call. */
	static readonly opGetAddressList: string[] = ["ses:GetAddressList"];
	/** IAM actions required for the GetAddressListImportJob API call. */
	static readonly opGetAddressListImportJob: string[] = [
		"ses:GetAddressListImportJob",
	];
	/** IAM actions required for the GetArchive API call. */
	static readonly opGetArchive: string[] = ["ses:GetArchive"];
	/** IAM actions required for the GetArchiveExport API call. */
	static readonly opGetArchiveExport: string[] = ["ses:GetArchiveExport"];
	/** IAM actions required for the GetArchiveMessage API call. */
	static readonly opGetArchiveMessage: string[] = ["ses:GetArchiveMessage"];
	/** IAM actions required for the GetArchiveMessageContent API call. */
	static readonly opGetArchiveMessageContent: string[] = [
		"ses:GetArchiveMessageContent",
	];
	/** IAM actions required for the GetArchiveSearch API call. */
	static readonly opGetArchiveSearch: string[] = ["ses:GetArchiveSearch"];
	/** IAM actions required for the GetArchiveSearchResults API call. */
	static readonly opGetArchiveSearchResults: string[] = [
		"ses:GetArchiveSearchResults",
	];
	/** IAM actions required for the GetBlacklistReports API call. */
	static readonly opGetBlacklistReports: string[] = ["ses:GetBlacklistReports"];
	/** IAM actions required for the GetConfigurationSet API call. */
	static readonly opGetConfigurationSet: string[] = ["ses:GetConfigurationSet"];
	/** IAM actions required for the GetConfigurationSetEventDestinations API call. */
	static readonly opGetConfigurationSetEventDestinations: string[] = [
		"ses:GetConfigurationSetEventDestinations",
	];
	/** IAM actions required for the GetContact API call. */
	static readonly opGetContact: string[] = ["ses:GetContact"];
	/** IAM actions required for the GetContactList API call. */
	static readonly opGetContactList: string[] = ["ses:GetContactList"];
	/** IAM actions required for the GetCustomVerificationEmailTemplate API call. */
	static readonly opGetCustomVerificationEmailTemplate: string[] = [
		"ses:GetCustomVerificationEmailTemplate",
	];
	/** IAM actions required for the GetDedicatedIp API call. */
	static readonly opGetDedicatedIp: string[] = ["ses:GetDedicatedIp"];
	/** IAM actions required for the GetDedicatedIpPool API call. */
	static readonly opGetDedicatedIpPool: string[] = ["ses:GetDedicatedIpPool"];
	/** IAM actions required for the GetDedicatedIps API call. */
	static readonly opGetDedicatedIps: string[] = ["ses:GetDedicatedIps"];
	/** IAM actions required for the GetDeliverabilityDashboardOptions API call. */
	static readonly opGetDeliverabilityDashboardOptions: string[] = [
		"ses:GetDeliverabilityDashboardOptions",
	];
	/** IAM actions required for the GetDeliverabilityTestReport API call. */
	static readonly opGetDeliverabilityTestReport: string[] = [
		"ses:GetDeliverabilityTestReport",
	];
	/** IAM actions required for the GetDomainDeliverabilityCampaign API call. */
	static readonly opGetDomainDeliverabilityCampaign: string[] = [
		"ses:GetDomainDeliverabilityCampaign",
	];
	/** IAM actions required for the GetDomainStatisticsReport API call. */
	static readonly opGetDomainStatisticsReport: string[] = [
		"ses:GetDomainStatisticsReport",
	];
	/** IAM actions required for the GetEmailAddressInsights API call. */
	static readonly opGetEmailAddressInsights: string[] = [
		"ses:GetEmailAddressInsights",
	];
	/** IAM actions required for the GetEmailIdentity API call. */
	static readonly opGetEmailIdentity: string[] = ["ses:GetEmailIdentity"];
	/** IAM actions required for the GetEmailIdentityPolicies API call. */
	static readonly opGetEmailIdentityPolicies: string[] = [
		"ses:GetEmailIdentityPolicies",
	];
	/** IAM actions required for the GetEmailTemplate API call. */
	static readonly opGetEmailTemplate: string[] = ["ses:GetEmailTemplate"];
	/** IAM actions required for the GetExportJob API call. */
	static readonly opGetExportJob: string[] = ["ses:GetExportJob"];
	/** IAM actions required for the GetIdentityDkimAttributes API call. */
	static readonly opGetIdentityDkimAttributes: string[] = [
		"ses:GetIdentityDkimAttributes",
	];
	/** IAM actions required for the GetIdentityMailFromDomainAttributes API call. */
	static readonly opGetIdentityMailFromDomainAttributes: string[] = [
		"ses:GetIdentityMailFromDomainAttributes",
	];
	/** IAM actions required for the GetIdentityNotificationAttributes API call. */
	static readonly opGetIdentityNotificationAttributes: string[] = [
		"ses:GetIdentityNotificationAttributes",
	];
	/** IAM actions required for the GetIdentityPolicies API call. */
	static readonly opGetIdentityPolicies: string[] = ["ses:GetIdentityPolicies"];
	/** IAM actions required for the GetIdentityVerificationAttributes API call. */
	static readonly opGetIdentityVerificationAttributes: string[] = [
		"ses:GetIdentityVerificationAttributes",
	];
	/** IAM actions required for the GetImportJob API call. */
	static readonly opGetImportJob: string[] = ["ses:GetImportJob"];
	/** IAM actions required for the GetIngressPoint API call. */
	static readonly opGetIngressPoint: string[] = ["ses:GetIngressPoint"];
	/** IAM actions required for the GetMemberOfAddressList API call. */
	static readonly opGetMemberOfAddressList: string[] = [
		"ses:GetMemberOfAddressList",
	];
	/** IAM actions required for the GetMessageInsights API call. */
	static readonly opGetMessageInsights: string[] = ["ses:GetMessageInsights"];
	/** IAM actions required for the GetMultiRegionEndpoint API call. */
	static readonly opGetMultiRegionEndpoint: string[] = [
		"ses:GetMultiRegionEndpoint",
	];
	/** IAM actions required for the GetRelay API call. */
	static readonly opGetRelay: string[] = ["ses:GetRelay"];
	/** IAM actions required for the GetReputationEntity API call. */
	static readonly opGetReputationEntity: string[] = ["ses:GetReputationEntity"];
	/** IAM actions required for the GetRuleSet API call. */
	static readonly opGetRuleSet: string[] = ["ses:GetRuleSet"];
	/** IAM actions required for the GetSendQuota API call. */
	static readonly opGetSendQuota: string[] = ["ses:GetSendQuota"];
	/** IAM actions required for the GetSendStatistics API call. */
	static readonly opGetSendStatistics: string[] = ["ses:GetSendStatistics"];
	/** IAM actions required for the GetSuppressedDestination API call. */
	static readonly opGetSuppressedDestination: string[] = [
		"ses:GetSuppressedDestination",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly opGetTemplate: string[] = ["ses:GetTemplate"];
	/** IAM actions required for the GetTenant API call. */
	static readonly opGetTenant: string[] = ["ses:GetTenant"];
	/** IAM actions required for the GetTrafficPolicy API call. */
	static readonly opGetTrafficPolicy: string[] = ["ses:GetTrafficPolicy"];
	/** IAM actions required for the ListAddonInstances API call. */
	static readonly ListAddonInstances: string[] = ["ses:ListAddonInstances"];
	/** IAM actions required for the ListAddonSubscriptions API call. */
	static readonly ListAddonSubscriptions: string[] = [
		"ses:ListAddonSubscriptions",
	];
	/** IAM actions required for the ListAddressListImportJobs API call. */
	static readonly ListAddressListImportJobs: string[] = [
		"ses:ListAddressListImportJobs",
	];
	/** IAM actions required for the ListAddressLists API call. */
	static readonly ListAddressLists: string[] = ["ses:ListAddressLists"];
	/** IAM actions required for the ListArchiveExports API call. */
	static readonly ListArchiveExports: string[] = ["ses:ListArchiveExports"];
	/** IAM actions required for the ListArchiveSearches API call. */
	static readonly ListArchiveSearches: string[] = ["ses:ListArchiveSearches"];
	/** IAM actions required for the ListArchives API call. */
	static readonly ListArchives: string[] = ["ses:ListArchives"];
	/** IAM actions required for the ListConfigurationSets API call. */
	static readonly ListConfigurationSets: string[] = [
		"ses:ListConfigurationSets",
	];
	/** IAM actions required for the ListContactLists API call. */
	static readonly ListContactLists: string[] = ["ses:ListContactLists"];
	/** IAM actions required for the ListContacts API call. */
	static readonly ListContacts: string[] = ["ses:ListContacts"];
	/** IAM actions required for the ListCustomVerificationEmailTemplates API call. */
	static readonly ListCustomVerificationEmailTemplates: string[] = [
		"ses:ListCustomVerificationEmailTemplates",
	];
	/** IAM actions required for the ListDedicatedIpPools API call. */
	static readonly ListDedicatedIpPools: string[] = ["ses:ListDedicatedIpPools"];
	/** IAM actions required for the ListDeliverabilityTestReports API call. */
	static readonly ListDeliverabilityTestReports: string[] = [
		"ses:ListDeliverabilityTestReports",
	];
	/** IAM actions required for the ListDomainDeliverabilityCampaigns API call. */
	static readonly ListDomainDeliverabilityCampaigns: string[] = [
		"ses:ListDomainDeliverabilityCampaigns",
	];
	/** IAM actions required for the ListEmailIdentities API call. */
	static readonly ListEmailIdentities: string[] = ["ses:ListEmailIdentities"];
	/** IAM actions required for the ListEmailTemplates API call. */
	static readonly ListEmailTemplates: string[] = ["ses:ListEmailTemplates"];
	/** IAM actions required for the ListExportJobs API call. */
	static readonly ListExportJobs: string[] = ["ses:ListExportJobs"];
	/** IAM actions required for the ListIdentities API call. */
	static readonly ListIdentities: string[] = ["ses:ListIdentities"];
	/** IAM actions required for the ListIdentityPolicies API call. */
	static readonly ListIdentityPolicies: string[] = ["ses:ListIdentityPolicies"];
	/** IAM actions required for the ListImportJobs API call. */
	static readonly ListImportJobs: string[] = ["ses:ListImportJobs"];
	/** IAM actions required for the ListIngressPoints API call. */
	static readonly ListIngressPoints: string[] = ["ses:ListIngressPoints"];
	/** IAM actions required for the ListMembersOfAddressList API call. */
	static readonly ListMembersOfAddressList: string[] = [
		"ses:ListMembersOfAddressList",
	];
	/** IAM actions required for the ListMultiRegionEndpoints API call. */
	static readonly ListMultiRegionEndpoints: string[] = [
		"ses:ListMultiRegionEndpoints",
	];
	/** IAM actions required for the ListReceiptFilters API call. */
	static readonly ListReceiptFilters: string[] = ["ses:ListReceiptFilters"];
	/** IAM actions required for the ListReceiptRuleSets API call. */
	static readonly ListReceiptRuleSets: string[] = ["ses:ListReceiptRuleSets"];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = ["ses:ListRecommendations"];
	/** IAM actions required for the ListRelays API call. */
	static readonly ListRelays: string[] = ["ses:ListRelays"];
	/** IAM actions required for the ListReputationEntities API call. */
	static readonly ListReputationEntities: string[] = [
		"ses:ListReputationEntities",
	];
	/** IAM actions required for the ListResourceTenants API call. */
	static readonly ListResourceTenants: string[] = ["ses:ListResourceTenants"];
	/** IAM actions required for the ListRuleSets API call. */
	static readonly ListRuleSets: string[] = ["ses:ListRuleSets"];
	/** IAM actions required for the ListSuppressedDestinations API call. */
	static readonly ListSuppressedDestinations: string[] = [
		"ses:ListSuppressedDestinations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["ses:ListTagsForResource"];
	/** IAM actions required for the ListTemplates API call. */
	static readonly ListTemplates: string[] = ["ses:ListTemplates"];
	/** IAM actions required for the ListTenantResources API call. */
	static readonly ListTenantResources: string[] = ["ses:ListTenantResources"];
	/** IAM actions required for the ListTenants API call. */
	static readonly ListTenants: string[] = ["ses:ListTenants"];
	/** IAM actions required for the ListTrafficPolicies API call. */
	static readonly ListTrafficPolicies: string[] = ["ses:ListTrafficPolicies"];
	/** IAM actions required for the ListVerifiedEmailAddresses API call. */
	static readonly ListVerifiedEmailAddresses: string[] = [
		"ses:ListVerifiedEmailAddresses",
	];
	/** IAM actions required for the PutAccountDedicatedIpWarmupAttributes API call. */
	static readonly PutAccountDedicatedIpWarmupAttributes: string[] = [
		"ses:PutAccountDedicatedIpWarmupAttributes",
	];
	/** IAM actions required for the PutAccountDetails API call. */
	static readonly PutAccountDetails: string[] = ["ses:PutAccountDetails"];
	/** IAM actions required for the PutAccountPricingAttributes API call. */
	static readonly PutAccountPricingAttributes: string[] = [
		"ses:PutAccountPricingAttributes",
	];
	/** IAM actions required for the PutAccountSendingAttributes API call. */
	static readonly PutAccountSendingAttributes: string[] = [
		"ses:PutAccountSendingAttributes",
	];
	/** IAM actions required for the PutAccountSuppressionAttributes API call. */
	static readonly PutAccountSuppressionAttributes: string[] = [
		"ses:PutAccountSuppressionAttributes",
	];
	/** IAM actions required for the PutAccountVdmAttributes API call. */
	static readonly PutAccountVdmAttributes: string[] = [
		"ses:PutAccountVdmAttributes",
	];
	/** IAM actions required for the PutConfigurationSetArchivingOptions API call. */
	static readonly PutConfigurationSetArchivingOptions: string[] = [
		"ses:PutConfigurationSetArchivingOptions",
	];
	/** IAM actions required for the PutConfigurationSetDeliveryOptions API call. */
	static readonly PutConfigurationSetDeliveryOptions: string[] = [
		"ses:PutConfigurationSetDeliveryOptions",
	];
	/** IAM actions required for the PutConfigurationSetReputationOptions API call. */
	static readonly PutConfigurationSetReputationOptions: string[] = [
		"ses:PutConfigurationSetReputationOptions",
	];
	/** IAM actions required for the PutConfigurationSetSendingOptions API call. */
	static readonly PutConfigurationSetSendingOptions: string[] = [
		"ses:PutConfigurationSetSendingOptions",
	];
	/** IAM actions required for the PutConfigurationSetSuppressionOptions API call. */
	static readonly PutConfigurationSetSuppressionOptions: string[] = [
		"ses:PutConfigurationSetSuppressionOptions",
	];
	/** IAM actions required for the PutConfigurationSetTrackingOptions API call. */
	static readonly PutConfigurationSetTrackingOptions: string[] = [
		"ses:PutConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the PutConfigurationSetVdmOptions API call. */
	static readonly PutConfigurationSetVdmOptions: string[] = [
		"ses:PutConfigurationSetVdmOptions",
	];
	/** IAM actions required for the PutDedicatedIpInPool API call. */
	static readonly PutDedicatedIpInPool: string[] = ["ses:PutDedicatedIpInPool"];
	/** IAM actions required for the PutDedicatedIpPoolScalingAttributes API call. */
	static readonly PutDedicatedIpPoolScalingAttributes: string[] = [
		"ses:PutDedicatedIpPoolScalingAttributes",
	];
	/** IAM actions required for the PutDedicatedIpWarmupAttributes API call. */
	static readonly PutDedicatedIpWarmupAttributes: string[] = [
		"ses:PutDedicatedIpWarmupAttributes",
	];
	/** IAM actions required for the PutDeliverabilityDashboardOption API call. */
	static readonly PutDeliverabilityDashboardOption: string[] = [
		"ses:PutDeliverabilityDashboardOption",
	];
	/** IAM actions required for the PutEmailIdentityConfigurationSetAttributes API call. */
	static readonly PutEmailIdentityConfigurationSetAttributes: string[] = [
		"ses:PutEmailIdentityConfigurationSetAttributes",
	];
	/** IAM actions required for the PutEmailIdentityDkimAttributes API call. */
	static readonly PutEmailIdentityDkimAttributes: string[] = [
		"ses:PutEmailIdentityDkimAttributes",
	];
	/** IAM actions required for the PutEmailIdentityDkimSigningAttributes API call. */
	static readonly PutEmailIdentityDkimSigningAttributes: string[] = [
		"ses:PutEmailIdentityDkimSigningAttributes",
	];
	/** IAM actions required for the PutEmailIdentityFeedbackAttributes API call. */
	static readonly PutEmailIdentityFeedbackAttributes: string[] = [
		"ses:PutEmailIdentityFeedbackAttributes",
	];
	/** IAM actions required for the PutEmailIdentityMailFromAttributes API call. */
	static readonly PutEmailIdentityMailFromAttributes: string[] = [
		"ses:PutEmailIdentityMailFromAttributes",
	];
	/** IAM actions required for the PutIdentityPolicy API call. */
	static readonly PutIdentityPolicy: string[] = ["ses:PutIdentityPolicy"];
	/** IAM actions required for the PutSuppressedDestination API call. */
	static readonly PutSuppressedDestination: string[] = [
		"ses:PutSuppressedDestination",
	];
	/** IAM actions required for the PutTenantSuppressionAttributes API call. */
	static readonly PutTenantSuppressionAttributes: string[] = [
		"ses:PutTenantSuppressionAttributes",
	];
	/** IAM actions required for the RegisterMemberToAddressList API call. */
	static readonly RegisterMemberToAddressList: string[] = [
		"ses:RegisterMemberToAddressList",
	];
	/** IAM actions required for the ReorderReceiptRuleSet API call. */
	static readonly ReorderReceiptRuleSet: string[] = [
		"ses:ReorderReceiptRuleSet",
	];
	/** IAM actions required for the SendBounce API call. */
	static readonly SendBounce: string[] = [];
	/** IAM actions required for the SendBulkEmail API call. */
	static readonly SendBulkEmail: string[] = ["ses:SendBulkEmail"];
	/** IAM actions required for the SendBulkTemplatedEmail API call. */
	static readonly SendBulkTemplatedEmail: string[] = [];
	/** IAM actions required for the SendCustomVerificationEmail API call. */
	static readonly SendCustomVerificationEmail: string[] = [
		"ses:SendCustomVerificationEmail",
	];
	/** IAM actions required for the SendEmail API call. */
	static readonly SendEmail: string[] = [];
	/** IAM actions required for the SendRawEmail API call. */
	static readonly SendRawEmail: string[] = [];
	/** IAM actions required for the SendTemplatedEmail API call. */
	static readonly SendTemplatedEmail: string[] = [];
	/** IAM actions required for the SetActiveReceiptRuleSet API call. */
	static readonly opSetActiveReceiptRuleSet: string[] = [
		"ses:SetActiveReceiptRuleSet",
	];
	/** IAM actions required for the SetIdentityDkimEnabled API call. */
	static readonly opSetIdentityDkimEnabled: string[] = [
		"ses:SetIdentityDkimEnabled",
	];
	/** IAM actions required for the SetIdentityFeedbackForwardingEnabled API call. */
	static readonly opSetIdentityFeedbackForwardingEnabled: string[] = [
		"ses:SetIdentityFeedbackForwardingEnabled",
	];
	/** IAM actions required for the SetIdentityHeadersInNotificationsEnabled API call. */
	static readonly opSetIdentityHeadersInNotificationsEnabled: string[] = [
		"ses:SetIdentityHeadersInNotificationsEnabled",
	];
	/** IAM actions required for the SetIdentityMailFromDomain API call. */
	static readonly opSetIdentityMailFromDomain: string[] = [
		"ses:SetIdentityMailFromDomain",
	];
	/** IAM actions required for the SetIdentityNotificationTopic API call. */
	static readonly opSetIdentityNotificationTopic: string[] = [
		"ses:SetIdentityNotificationTopic",
	];
	/** IAM actions required for the SetReceiptRulePosition API call. */
	static readonly opSetReceiptRulePosition: string[] = [
		"ses:SetReceiptRulePosition",
	];
	/** IAM actions required for the StartAddressListImportJob API call. */
	static readonly StartAddressListImportJob: string[] = [
		"ses:StartAddressListImportJob",
	];
	/** IAM actions required for the StartArchiveExport API call. */
	static readonly StartArchiveExport: string[] = ["ses:StartArchiveExport"];
	/** IAM actions required for the StartArchiveSearch API call. */
	static readonly StartArchiveSearch: string[] = ["ses:StartArchiveSearch"];
	/** IAM actions required for the StopAddressListImportJob API call. */
	static readonly StopAddressListImportJob: string[] = [
		"ses:StopAddressListImportJob",
	];
	/** IAM actions required for the StopArchiveExport API call. */
	static readonly StopArchiveExport: string[] = ["ses:StopArchiveExport"];
	/** IAM actions required for the StopArchiveSearch API call. */
	static readonly StopArchiveSearch: string[] = ["ses:StopArchiveSearch"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ses:TagResource"];
	/** IAM actions required for the TestRenderEmailTemplate API call. */
	static readonly TestRenderEmailTemplate: string[] = [
		"ses:TestRenderEmailTemplate",
	];
	/** IAM actions required for the TestRenderTemplate API call. */
	static readonly TestRenderTemplate: string[] = ["ses:TestRenderTemplate"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ses:UntagResource"];
	/** IAM actions required for the UpdateAccountSendingEnabled API call. */
	static readonly UpdateAccountSendingEnabled: string[] = [
		"ses:UpdateAccountSendingEnabled",
	];
	/** IAM actions required for the UpdateArchive API call. */
	static readonly UpdateArchive: string[] = ["ses:UpdateArchive"];
	/** IAM actions required for the UpdateConfigurationSetEventDestination API call. */
	static readonly UpdateConfigurationSetEventDestination: string[] = [
		"iam:PassRole",
		"ses:UpdateConfigurationSetEventDestination",
	];
	/** IAM actions required for the UpdateConfigurationSetReputationMetricsEnabled API call. */
	static readonly UpdateConfigurationSetReputationMetricsEnabled: string[] = [
		"ses:UpdateConfigurationSetReputationMetricsEnabled",
	];
	/** IAM actions required for the UpdateConfigurationSetSendingEnabled API call. */
	static readonly UpdateConfigurationSetSendingEnabled: string[] = [
		"ses:UpdateConfigurationSetSendingEnabled",
	];
	/** IAM actions required for the UpdateConfigurationSetTrackingOptions API call. */
	static readonly UpdateConfigurationSetTrackingOptions: string[] = [
		"ses:UpdateConfigurationSetTrackingOptions",
	];
	/** IAM actions required for the UpdateContact API call. */
	static readonly UpdateContact: string[] = ["ses:UpdateContact"];
	/** IAM actions required for the UpdateContactList API call. */
	static readonly UpdateContactList: string[] = ["ses:UpdateContactList"];
	/** IAM actions required for the UpdateCustomVerificationEmailTemplate API call. */
	static readonly UpdateCustomVerificationEmailTemplate: string[] = [
		"ses:UpdateCustomVerificationEmailTemplate",
	];
	/** IAM actions required for the UpdateEmailIdentityPolicy API call. */
	static readonly UpdateEmailIdentityPolicy: string[] = [
		"ses:UpdateEmailIdentityPolicy",
	];
	/** IAM actions required for the UpdateEmailTemplate API call. */
	static readonly UpdateEmailTemplate: string[] = ["ses:UpdateEmailTemplate"];
	/** IAM actions required for the UpdateIngressPoint API call. */
	static readonly UpdateIngressPoint: string[] = ["ses:UpdateIngressPoint"];
	/** IAM actions required for the UpdateReceiptRule API call. */
	static readonly UpdateReceiptRule: string[] = [
		"iam:PassRole",
		"ses:UpdateReceiptRule",
	];
	/** IAM actions required for the UpdateRelay API call. */
	static readonly UpdateRelay: string[] = ["ses:UpdateRelay"];
	/** IAM actions required for the UpdateReputationEntityCustomerManagedStatus API call. */
	static readonly UpdateReputationEntityCustomerManagedStatus: string[] = [
		"ses:UpdateReputationEntityCustomerManagedStatus",
	];
	/** IAM actions required for the UpdateReputationEntityPolicy API call. */
	static readonly UpdateReputationEntityPolicy: string[] = [
		"ses:UpdateReputationEntityPolicy",
	];
	/** IAM actions required for the UpdateRuleSet API call. */
	static readonly UpdateRuleSet: string[] = [
		"iam:PassRole",
		"ses:UpdateRuleSet",
	];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UpdateTemplate: string[] = ["ses:UpdateTemplate"];
	/** IAM actions required for the UpdateTrafficPolicy API call. */
	static readonly UpdateTrafficPolicy: string[] = ["ses:UpdateTrafficPolicy"];
	/** IAM actions required for the VerifyDomainDkim API call. */
	static readonly VerifyDomainDkim: string[] = ["ses:VerifyDomainDkim"];
	/** IAM actions required for the VerifyDomainIdentity API call. */
	static readonly VerifyDomainIdentity: string[] = ["ses:VerifyDomainIdentity"];
	/** IAM actions required for the VerifyEmailAddress API call. */
	static readonly VerifyEmailAddress: string[] = ["ses:VerifyEmailAddress"];
	/** IAM actions required for the VerifyEmailIdentity API call. */
	static readonly VerifyEmailIdentity: string[] = ["ses:VerifyEmailIdentity"];
}

/**
 * Condition key constants and builders for ses.
 */
export class SesConditions {
	/** Condition keys applicable to the BatchGetMetricData action. */
	static readonly BatchGetMetricDataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CancelExportJob action. */
	static readonly CancelExportJobConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the CloneReceiptRuleSet action. */
	static readonly CloneReceiptRuleSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateAddonInstance action. */
	static readonly CreateAddonInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:AddonSubscriptionArn",
	];
	/** Condition keys applicable to the CreateAddonSubscription action. */
	static readonly CreateAddonSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAddressList action. */
	static readonly CreateAddressListConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateArchive action. */
	static readonly CreateArchiveConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConfigurationSet action. */
	static readonly CreateConfigurationSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateConfigurationSetEventDestination action. */
	static readonly CreateConfigurationSetEventDestinationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the CreateConfigurationSetTrackingOptions action. */
	static readonly CreateConfigurationSetTrackingOptionsConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the CreateContact action. */
	static readonly CreateContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateContactList action. */
	static readonly CreateContactListConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateCustomVerificationEmailTemplate action. */
	static readonly CreateCustomVerificationEmailTemplateConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys", "ses:ApiVersion"];
	/** Condition keys applicable to the CreateDedicatedIpPool action. */
	static readonly CreateDedicatedIpPoolConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateDeliverabilityTestReport action. */
	static readonly CreateDeliverabilityTestReportConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateEmailIdentity action. */
	static readonly CreateEmailIdentityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateEmailIdentityPolicy action. */
	static readonly CreateEmailIdentityPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateEmailTemplate action. */
	static readonly CreateEmailTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateExportJob action. */
	static readonly CreateExportJobConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the CreateImportJob action. */
	static readonly CreateImportJobConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the CreateIngressPoint action. */
	static readonly CreateIngressPointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:MailManagerRuleSetArn",
		"ses:MailManagerTrafficPolicyArn",
	];
	/** Condition keys applicable to the CreateMultiRegionEndpoint action. */
	static readonly CreateMultiRegionEndpointConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateReceiptFilter action. */
	static readonly CreateReceiptFilterConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateReceiptRule action. */
	static readonly CreateReceiptRuleConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the CreateReceiptRuleSet action. */
	static readonly CreateReceiptRuleSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateRelay action. */
	static readonly CreateRelayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRuleSet action. */
	static readonly CreateRuleSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplate action. */
	static readonly CreateTemplateConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the CreateTenant action. */
	static readonly CreateTenantConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateTenantResourceAssociation action. */
	static readonly CreateTenantResourceAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the CreateTrafficPolicy action. */
	static readonly CreateTrafficPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteConfigurationSet action. */
	static readonly DeleteConfigurationSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteConfigurationSetEventDestination action. */
	static readonly DeleteConfigurationSetEventDestinationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the DeleteConfigurationSetTrackingOptions action. */
	static readonly DeleteConfigurationSetTrackingOptionsConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the DeleteContact action. */
	static readonly DeleteContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteContactList action. */
	static readonly DeleteContactListConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteCustomVerificationEmailTemplate action. */
	static readonly DeleteCustomVerificationEmailTemplateConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the DeleteDedicatedIpPool action. */
	static readonly DeleteDedicatedIpPoolConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteEmailIdentity action. */
	static readonly DeleteEmailIdentityConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteEmailIdentityPolicy action. */
	static readonly DeleteEmailIdentityPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteEmailTemplate action. */
	static readonly DeleteEmailTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteIdentity action. */
	static readonly DeleteIdentityConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the DeleteIdentityPolicy action. */
	static readonly DeleteIdentityPolicyConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteMultiRegionEndpoint action. */
	static readonly DeleteMultiRegionEndpointConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteReceiptFilter action. */
	static readonly DeleteReceiptFilterConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteReceiptRule action. */
	static readonly DeleteReceiptRuleConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the DeleteReceiptRuleSet action. */
	static readonly DeleteReceiptRuleSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteSuppressedDestination action. */
	static readonly DeleteSuppressedDestinationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteTemplate action. */
	static readonly DeleteTemplateConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the DeleteTenant action. */
	static readonly DeleteTenantConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteTenantResourceAssociation action. */
	static readonly DeleteTenantResourceAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DeleteVerifiedEmailAddress action. */
	static readonly DeleteVerifiedEmailAddressConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeActiveReceiptRuleSet action. */
	static readonly DescribeActiveReceiptRuleSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeConfigurationSet action. */
	static readonly DescribeConfigurationSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeReceiptRule action. */
	static readonly DescribeReceiptRuleConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the DescribeReceiptRuleSet action. */
	static readonly DescribeReceiptRuleSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetAccount action. */
	static readonly actionGetAccountConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the GetAccountSendingEnabled action. */
	static readonly actionGetAccountSendingEnabledConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetBlacklistReports action. */
	static readonly actionGetBlacklistReportsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetConfigurationSet action. */
	static readonly actionGetConfigurationSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetConfigurationSetEventDestinations action. */
	static readonly actionGetConfigurationSetEventDestinationsConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the GetContact action. */
	static readonly actionGetContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetContactList action. */
	static readonly actionGetContactListConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetCustomVerificationEmailTemplate action. */
	static readonly actionGetCustomVerificationEmailTemplateConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the GetDedicatedIp action. */
	static readonly actionGetDedicatedIpConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDedicatedIpPool action. */
	static readonly actionGetDedicatedIpPoolConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDedicatedIps action. */
	static readonly actionGetDedicatedIpsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDeliverabilityDashboardOptions action. */
	static readonly actionGetDeliverabilityDashboardOptionsConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetDeliverabilityTestReport action. */
	static readonly actionGetDeliverabilityTestReportConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetDomainDeliverabilityCampaign action. */
	static readonly actionGetDomainDeliverabilityCampaignConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetDomainStatisticsReport action. */
	static readonly actionGetDomainStatisticsReportConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailAddressInsights action. */
	static readonly actionGetEmailAddressInsightsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailIdentity action. */
	static readonly actionGetEmailIdentityConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailIdentityPolicies action. */
	static readonly actionGetEmailIdentityPoliciesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetEmailTemplate action. */
	static readonly actionGetEmailTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetExportJob action. */
	static readonly actionGetExportJobConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the GetIdentityDkimAttributes action. */
	static readonly actionGetIdentityDkimAttributesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetIdentityMailFromDomainAttributes action. */
	static readonly actionGetIdentityMailFromDomainAttributesConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetIdentityNotificationAttributes action. */
	static readonly actionGetIdentityNotificationAttributesConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetIdentityPolicies action. */
	static readonly actionGetIdentityPoliciesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetIdentityVerificationAttributes action. */
	static readonly actionGetIdentityVerificationAttributesConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the GetImportJob action. */
	static readonly actionGetImportJobConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetMessageInsights action. */
	static readonly actionGetMessageInsightsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetMultiRegionEndpoint action. */
	static readonly actionGetMultiRegionEndpointConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetReputationEntity action. */
	static readonly actionGetReputationEntityConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetSendQuota action. */
	static readonly actionGetSendQuotaConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetSendStatistics action. */
	static readonly actionGetSendStatisticsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetSuppressedDestination action. */
	static readonly actionGetSuppressedDestinationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the GetTemplate action. */
	static readonly actionGetTemplateConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the GetTenant action. */
	static readonly actionGetTenantConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListConfigurationSets action. */
	static readonly ListConfigurationSetsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListContactLists action. */
	static readonly ListContactListsConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListContacts action. */
	static readonly ListContactsConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListCustomVerificationEmailTemplates action. */
	static readonly ListCustomVerificationEmailTemplatesConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the ListDedicatedIpPools action. */
	static readonly ListDedicatedIpPoolsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListDeliverabilityTestReports action. */
	static readonly ListDeliverabilityTestReportsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListDomainDeliverabilityCampaigns action. */
	static readonly ListDomainDeliverabilityCampaignsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListEmailIdentities action. */
	static readonly ListEmailIdentitiesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListEmailTemplates action. */
	static readonly ListEmailTemplatesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListExportJobs action. */
	static readonly ListExportJobsConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:ExportSourceType",
	];
	/** Condition keys applicable to the ListIdentities action. */
	static readonly ListIdentitiesConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListIdentityPolicies action. */
	static readonly ListIdentityPoliciesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListImportJobs action. */
	static readonly ListImportJobsConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListMultiRegionEndpoints action. */
	static readonly ListMultiRegionEndpointsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListReceiptFilters action. */
	static readonly ListReceiptFiltersConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListReceiptRuleSets action. */
	static readonly ListReceiptRuleSetsConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListRecommendations action. */
	static readonly ListRecommendationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListReputationEntities action. */
	static readonly ListReputationEntitiesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListResourceTenants action. */
	static readonly ListResourceTenantsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListSuppressedDestinations action. */
	static readonly ListSuppressedDestinationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListTemplates action. */
	static readonly ListTemplatesConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListTenantResources action. */
	static readonly ListTenantResourcesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ListTenants action. */
	static readonly ListTenantsConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the ListVerifiedEmailAddresses action. */
	static readonly ListVerifiedEmailAddressesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountDedicatedIpWarmupAttributes action. */
	static readonly PutAccountDedicatedIpWarmupAttributesConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the PutAccountDetails action. */
	static readonly PutAccountDetailsConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the PutAccountPricingAttributes action. */
	static readonly PutAccountPricingAttributesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountSendingAttributes action. */
	static readonly PutAccountSendingAttributesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountSuppressionAttributes action. */
	static readonly PutAccountSuppressionAttributesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutAccountVdmAttributes action. */
	static readonly PutAccountVdmAttributesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutConfigurationSetArchivingOptions action. */
	static readonly PutConfigurationSetArchivingOptionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutConfigurationSetDeliveryOptions action. */
	static readonly PutConfigurationSetDeliveryOptionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutConfigurationSetReputationOptions action. */
	static readonly PutConfigurationSetReputationOptionsConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetSendingOptions action. */
	static readonly PutConfigurationSetSendingOptionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutConfigurationSetSuppressionOptions action. */
	static readonly PutConfigurationSetSuppressionOptionsConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutConfigurationSetTrackingOptions action. */
	static readonly PutConfigurationSetTrackingOptionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutConfigurationSetVdmOptions action. */
	static readonly PutConfigurationSetVdmOptionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutDedicatedIpInPool action. */
	static readonly PutDedicatedIpInPoolConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutDedicatedIpPoolScalingAttributes action. */
	static readonly PutDedicatedIpPoolScalingAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutDedicatedIpWarmupAttributes action. */
	static readonly PutDedicatedIpWarmupAttributesConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutDeliverabilityDashboardOption action. */
	static readonly PutDeliverabilityDashboardOptionConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutEmailIdentityConfigurationSetAttributes action. */
	static readonly PutEmailIdentityConfigurationSetAttributesConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutEmailIdentityDkimAttributes action. */
	static readonly PutEmailIdentityDkimAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutEmailIdentityDkimSigningAttributes action. */
	static readonly PutEmailIdentityDkimSigningAttributesConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the PutEmailIdentityFeedbackAttributes action. */
	static readonly PutEmailIdentityFeedbackAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutEmailIdentityMailFromAttributes action. */
	static readonly PutEmailIdentityMailFromAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutIdentityPolicy action. */
	static readonly PutIdentityPolicyConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the PutSuppressedDestination action. */
	static readonly PutSuppressedDestinationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the PutTenantSuppressionAttributes action. */
	static readonly PutTenantSuppressionAttributesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ReorderReceiptRuleSet action. */
	static readonly ReorderReceiptRuleSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the ReplicateEmailIdentityDkimSigningKey action. */
	static readonly ReplicateEmailIdentityDkimSigningKeyConditionKeys: string[] =
		["ses:ReplicaRegion"];
	/** Condition keys applicable to the SendBounce action. */
	static readonly SendBounceConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:FromAddress",
	];
	/** Condition keys applicable to the SendBulkEmail action. */
	static readonly SendBulkEmailConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:MultiRegionEndpointId",
		"ses:TenantName",
	];
	/** Condition keys applicable to the SendBulkTemplatedEmail action. */
	static readonly SendBulkTemplatedEmailConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SendCustomVerificationEmail action. */
	static readonly SendCustomVerificationEmailConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SendEmail action. */
	static readonly SendEmailConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:MultiRegionEndpointId",
		"ses:Recipients",
		"ses:TenantName",
	];
	/** Condition keys applicable to the SendRawEmail action. */
	static readonly SendRawEmailConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SendTemplatedEmail action. */
	static readonly SendTemplatedEmailConditionKeys: string[] = [
		"ses:ApiVersion",
		"ses:FeedbackAddress",
		"ses:FromAddress",
		"ses:FromDisplayName",
		"ses:Recipients",
	];
	/** Condition keys applicable to the SetActiveReceiptRuleSet action. */
	static readonly actionSetActiveReceiptRuleSetConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetIdentityDkimEnabled action. */
	static readonly actionSetIdentityDkimEnabledConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetIdentityFeedbackForwardingEnabled action. */
	static readonly actionSetIdentityFeedbackForwardingEnabledConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the SetIdentityHeadersInNotificationsEnabled action. */
	static readonly actionSetIdentityHeadersInNotificationsEnabledConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the SetIdentityMailFromDomain action. */
	static readonly actionSetIdentityMailFromDomainConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetIdentityNotificationTopic action. */
	static readonly actionSetIdentityNotificationTopicConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the SetReceiptRulePosition action. */
	static readonly actionSetReceiptRulePositionConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the TestRenderEmailTemplate action. */
	static readonly TestRenderEmailTemplateConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the TestRenderTemplate action. */
	static readonly TestRenderTemplateConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateAccountSendingEnabled action. */
	static readonly UpdateAccountSendingEnabledConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateConfigurationSetEventDestination action. */
	static readonly UpdateConfigurationSetEventDestinationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the UpdateConfigurationSetReputationMetricsEnabled action. */
	static readonly UpdateConfigurationSetReputationMetricsEnabledConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the UpdateConfigurationSetSendingEnabled action. */
	static readonly UpdateConfigurationSetSendingEnabledConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the UpdateConfigurationSetTrackingOptions action. */
	static readonly UpdateConfigurationSetTrackingOptionsConditionKeys: string[] =
		["ses:ApiVersion"];
	/** Condition keys applicable to the UpdateContact action. */
	static readonly UpdateContactConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateContactList action. */
	static readonly UpdateContactListConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateCustomVerificationEmailTemplate action. */
	static readonly UpdateCustomVerificationEmailTemplateConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the UpdateEmailIdentityPolicy action. */
	static readonly UpdateEmailIdentityPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateEmailTemplate action. */
	static readonly UpdateEmailTemplateConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateIngressPoint action. */
	static readonly UpdateIngressPointConditionKeys: string[] = [
		"ses:MailManagerRuleSetArn",
		"ses:MailManagerTrafficPolicyArn",
	];
	/** Condition keys applicable to the UpdateReceiptRule action. */
	static readonly UpdateReceiptRuleConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the UpdateReputationEntityCustomerManagedStatus action. */
	static readonly UpdateReputationEntityCustomerManagedStatusConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}", "ses:ApiVersion"];
	/** Condition keys applicable to the UpdateReputationEntityPolicy action. */
	static readonly UpdateReputationEntityPolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the UpdateTemplate action. */
	static readonly UpdateTemplateConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the VerifyDomainDkim action. */
	static readonly VerifyDomainDkimConditionKeys: string[] = ["ses:ApiVersion"];
	/** Condition keys applicable to the VerifyDomainIdentity action. */
	static readonly VerifyDomainIdentityConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the VerifyEmailAddress action. */
	static readonly VerifyEmailAddressConditionKeys: string[] = [
		"ses:ApiVersion",
	];
	/** Condition keys applicable to the VerifyEmailIdentity action. */
	static readonly VerifyEmailIdentityConditionKeys: string[] = [
		"ses:ApiVersion",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
