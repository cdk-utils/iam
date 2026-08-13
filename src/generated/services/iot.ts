// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iot.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iot service.
 */
export class IotActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iot";

	/** [Write] iot:AcceptCertificateTransfer */
	static readonly AcceptCertificateTransfer = "iot:AcceptCertificateTransfer";
	/** [Write] iot:AddThingToBillingGroup */
	static readonly AddThingToBillingGroup = "iot:AddThingToBillingGroup";
	/** [Write] iot:AddThingToThingGroup */
	static readonly AddThingToThingGroup = "iot:AddThingToThingGroup";
	/** [Write] iot:AssociateSbomWithPackageVersion */
	static readonly AssociateSbomWithPackageVersion =
		"iot:AssociateSbomWithPackageVersion";
	/** [Write] iot:AssociateTargetsWithJob */
	static readonly AssociateTargetsWithJob = "iot:AssociateTargetsWithJob";
	/** [PermissionManagement] iot:AttachPolicy */
	static readonly AttachPolicy = "iot:AttachPolicy";
	/** [PermissionManagement] iot:AttachPrincipalPolicy */
	static readonly AttachPrincipalPolicy = "iot:AttachPrincipalPolicy";
	/** [Write] iot:AttachSecurityProfile */
	static readonly AttachSecurityProfile = "iot:AttachSecurityProfile";
	/** [Write] iot:AttachThingPrincipal */
	static readonly AttachThingPrincipal = "iot:AttachThingPrincipal";
	/** [Write] iot:CancelAuditMitigationActionsTask */
	static readonly CancelAuditMitigationActionsTask =
		"iot:CancelAuditMitigationActionsTask";
	/** [Write] iot:CancelAuditTask */
	static readonly CancelAuditTask = "iot:CancelAuditTask";
	/** [Write] iot:CancelCertificateTransfer */
	static readonly CancelCertificateTransfer = "iot:CancelCertificateTransfer";
	/** [Write] iot:CancelDetectMitigationActionsTask */
	static readonly CancelDetectMitigationActionsTask =
		"iot:CancelDetectMitigationActionsTask";
	/** [Write] iot:CancelJob */
	static readonly CancelJob = "iot:CancelJob";
	/** [Write] iot:CancelJobExecution */
	static readonly CancelJobExecution = "iot:CancelJobExecution";
	/** [Write] iot:ClearDefaultAuthorizer */
	static readonly ClearDefaultAuthorizer = "iot:ClearDefaultAuthorizer";
	/** [Write] iot:CloseTunnel */
	static readonly CloseTunnel = "iot:CloseTunnel";
	/** [Write] iot:ConfirmTopicRuleDestination */
	static readonly ConfirmTopicRuleDestination =
		"iot:ConfirmTopicRuleDestination";
	/** [Write] iot:Connect */
	static readonly Connect = "iot:Connect";
	/** [Write] iot:CreateAuditSuppression */
	static readonly CreateAuditSuppression = "iot:CreateAuditSuppression";
	/** [Write] iot:CreateAuthorizer */
	static readonly CreateAuthorizer = "iot:CreateAuthorizer";
	/** [Write] iot:CreateBillingGroup */
	static readonly CreateBillingGroup = "iot:CreateBillingGroup";
	/** [Write] iot:CreateCertificateFromCsr */
	static readonly CreateCertificateFromCsr = "iot:CreateCertificateFromCsr";
	/** [Write] iot:CreateCertificateProvider */
	static readonly CreateCertificateProvider = "iot:CreateCertificateProvider";
	/** [Write] iot:CreateCommand */
	static readonly CreateCommand = "iot:CreateCommand";
	/** [Write] iot:CreateCustomMetric */
	static readonly CreateCustomMetric = "iot:CreateCustomMetric";
	/** [Write] iot:CreateDimension */
	static readonly CreateDimension = "iot:CreateDimension";
	/** [Write] iot:CreateDomainConfiguration */
	static readonly CreateDomainConfiguration = "iot:CreateDomainConfiguration";
	/** [Write] iot:CreateDynamicThingGroup */
	static readonly CreateDynamicThingGroup = "iot:CreateDynamicThingGroup";
	/** [Write] iot:CreateFleetMetric */
	static readonly CreateFleetMetric = "iot:CreateFleetMetric";
	/** [Write] iot:CreateJob */
	static readonly CreateJob = "iot:CreateJob";
	/** [Write] iot:CreateJobTemplate */
	static readonly CreateJobTemplate = "iot:CreateJobTemplate";
	/** [Write] iot:CreateKeysAndCertificate */
	static readonly CreateKeysAndCertificate = "iot:CreateKeysAndCertificate";
	/** [Write] iot:CreateMitigationAction */
	static readonly CreateMitigationAction = "iot:CreateMitigationAction";
	/** [Write] iot:CreateOTAUpdate */
	static readonly CreateOTAUpdate = "iot:CreateOTAUpdate";
	/** [Write] iot:CreatePackage */
	static readonly CreatePackage = "iot:CreatePackage";
	/** [Write] iot:CreatePackageVersion */
	static readonly CreatePackageVersion = "iot:CreatePackageVersion";
	/** [PermissionManagement] iot:CreatePolicy */
	static readonly CreatePolicy = "iot:CreatePolicy";
	/** [PermissionManagement] iot:CreatePolicyVersion */
	static readonly CreatePolicyVersion = "iot:CreatePolicyVersion";
	/** [Write] iot:CreateProvisioningClaim */
	static readonly CreateProvisioningClaim = "iot:CreateProvisioningClaim";
	/** [Write] iot:CreateProvisioningTemplate */
	static readonly CreateProvisioningTemplate = "iot:CreateProvisioningTemplate";
	/** [Write] iot:CreateProvisioningTemplateVersion */
	static readonly CreateProvisioningTemplateVersion =
		"iot:CreateProvisioningTemplateVersion";
	/** [Write] iot:CreateRoleAlias */
	static readonly CreateRoleAlias = "iot:CreateRoleAlias";
	/** [Write] iot:CreateScheduledAudit */
	static readonly CreateScheduledAudit = "iot:CreateScheduledAudit";
	/** [Write] iot:CreateSecurityProfile */
	static readonly CreateSecurityProfile = "iot:CreateSecurityProfile";
	/** [Write] iot:CreateStream */
	static readonly CreateStream = "iot:CreateStream";
	/** [Write] iot:CreateThing */
	static readonly CreateThing = "iot:CreateThing";
	/** [Write] iot:CreateThingGroup */
	static readonly CreateThingGroup = "iot:CreateThingGroup";
	/** [Write] iot:CreateThingType */
	static readonly CreateThingType = "iot:CreateThingType";
	/** [Write] iot:CreateTopicRule */
	static readonly CreateTopicRule = "iot:CreateTopicRule";
	/** [Write] iot:CreateTopicRuleDestination */
	static readonly CreateTopicRuleDestination = "iot:CreateTopicRuleDestination";
	/** [Write] iot:DeleteAccountAuditConfiguration */
	static readonly DeleteAccountAuditConfiguration =
		"iot:DeleteAccountAuditConfiguration";
	/** [Write] iot:DeleteAuditSuppression */
	static readonly DeleteAuditSuppression = "iot:DeleteAuditSuppression";
	/** [Write] iot:DeleteAuthorizer */
	static readonly DeleteAuthorizer = "iot:DeleteAuthorizer";
	/** [Write] iot:DeleteBillingGroup */
	static readonly DeleteBillingGroup = "iot:DeleteBillingGroup";
	/** [Write] iot:DeleteCACertificate */
	static readonly DeleteCACertificate = "iot:DeleteCACertificate";
	/** [Write] iot:DeleteCertificate */
	static readonly DeleteCertificate = "iot:DeleteCertificate";
	/** [Write] iot:DeleteCertificateProvider */
	static readonly DeleteCertificateProvider = "iot:DeleteCertificateProvider";
	/** [Write] iot:DeleteCommand */
	static readonly DeleteCommand = "iot:DeleteCommand";
	/** [Write] iot:DeleteCommandExecution */
	static readonly DeleteCommandExecution = "iot:DeleteCommandExecution";
	/** [Write] iot:DeleteConnection */
	static readonly DeleteConnection = "iot:DeleteConnection";
	/** [Write] iot:DeleteCustomMetric */
	static readonly DeleteCustomMetric = "iot:DeleteCustomMetric";
	/** [Write] iot:DeleteDimension */
	static readonly DeleteDimension = "iot:DeleteDimension";
	/** [Write] iot:DeleteDomainConfiguration */
	static readonly DeleteDomainConfiguration = "iot:DeleteDomainConfiguration";
	/** [Write] iot:DeleteDynamicThingGroup */
	static readonly DeleteDynamicThingGroup = "iot:DeleteDynamicThingGroup";
	/** [Write] iot:DeleteFleetMetric */
	static readonly DeleteFleetMetric = "iot:DeleteFleetMetric";
	/** [Write] iot:DeleteJob */
	static readonly DeleteJob = "iot:DeleteJob";
	/** [Write] iot:DeleteJobExecution */
	static readonly DeleteJobExecution = "iot:DeleteJobExecution";
	/** [Write] iot:DeleteJobTemplate */
	static readonly DeleteJobTemplate = "iot:DeleteJobTemplate";
	/** [Write] iot:DeleteMitigationAction */
	static readonly DeleteMitigationAction = "iot:DeleteMitigationAction";
	/** [Write] iot:DeleteOTAUpdate */
	static readonly DeleteOTAUpdate = "iot:DeleteOTAUpdate";
	/** [Write] iot:DeletePackage */
	static readonly DeletePackage = "iot:DeletePackage";
	/** [Write] iot:DeletePackageVersion */
	static readonly DeletePackageVersion = "iot:DeletePackageVersion";
	/** [PermissionManagement] iot:DeletePolicy */
	static readonly DeletePolicy = "iot:DeletePolicy";
	/** [PermissionManagement] iot:DeletePolicyVersion */
	static readonly DeletePolicyVersion = "iot:DeletePolicyVersion";
	/** [Write] iot:DeleteProvisioningTemplate */
	static readonly DeleteProvisioningTemplate = "iot:DeleteProvisioningTemplate";
	/** [Write] iot:DeleteProvisioningTemplateVersion */
	static readonly DeleteProvisioningTemplateVersion =
		"iot:DeleteProvisioningTemplateVersion";
	/** [Write] iot:DeleteRegistrationCode */
	static readonly DeleteRegistrationCode = "iot:DeleteRegistrationCode";
	/** [Write] iot:DeleteRoleAlias */
	static readonly DeleteRoleAlias = "iot:DeleteRoleAlias";
	/** [Write] iot:DeleteScheduledAudit */
	static readonly DeleteScheduledAudit = "iot:DeleteScheduledAudit";
	/** [Write] iot:DeleteSecurityProfile */
	static readonly DeleteSecurityProfile = "iot:DeleteSecurityProfile";
	/** [Write] iot:DeleteStream */
	static readonly DeleteStream = "iot:DeleteStream";
	/** [Write] iot:DeleteThing */
	static readonly DeleteThing = "iot:DeleteThing";
	/** [Write] iot:DeleteThingGroup */
	static readonly DeleteThingGroup = "iot:DeleteThingGroup";
	/** [Write] iot:DeleteThingShadow */
	static readonly DeleteThingShadow = "iot:DeleteThingShadow";
	/** [Write] iot:DeleteThingType */
	static readonly DeleteThingType = "iot:DeleteThingType";
	/** [Write] iot:DeleteTopicRule */
	static readonly DeleteTopicRule = "iot:DeleteTopicRule";
	/** [Write] iot:DeleteTopicRuleDestination */
	static readonly DeleteTopicRuleDestination = "iot:DeleteTopicRuleDestination";
	/** [Write] iot:DeleteV2LoggingLevel */
	static readonly DeleteV2LoggingLevel = "iot:DeleteV2LoggingLevel";
	/** [Write] iot:DeprecateThingType */
	static readonly DeprecateThingType = "iot:DeprecateThingType";
	/** [Read] iot:DescribeAccountAuditConfiguration */
	static readonly DescribeAccountAuditConfiguration =
		"iot:DescribeAccountAuditConfiguration";
	/** [Read] iot:DescribeAuditFinding */
	static readonly DescribeAuditFinding = "iot:DescribeAuditFinding";
	/** [Read] iot:DescribeAuditMitigationActionsTask */
	static readonly DescribeAuditMitigationActionsTask =
		"iot:DescribeAuditMitigationActionsTask";
	/** [Read] iot:DescribeAuditSuppression */
	static readonly DescribeAuditSuppression = "iot:DescribeAuditSuppression";
	/** [Read] iot:DescribeAuditTask */
	static readonly DescribeAuditTask = "iot:DescribeAuditTask";
	/** [Read] iot:DescribeAuthorizer */
	static readonly DescribeAuthorizer = "iot:DescribeAuthorizer";
	/** [Read] iot:DescribeBillingGroup */
	static readonly DescribeBillingGroup = "iot:DescribeBillingGroup";
	/** [Read] iot:DescribeCACertificate */
	static readonly DescribeCACertificate = "iot:DescribeCACertificate";
	/** [Read] iot:DescribeCertificate */
	static readonly DescribeCertificate = "iot:DescribeCertificate";
	/** [Read] iot:DescribeCertificateProvider */
	static readonly DescribeCertificateProvider =
		"iot:DescribeCertificateProvider";
	/** [Read] iot:DescribeCustomMetric */
	static readonly DescribeCustomMetric = "iot:DescribeCustomMetric";
	/** [Read] iot:DescribeDefaultAuthorizer */
	static readonly DescribeDefaultAuthorizer = "iot:DescribeDefaultAuthorizer";
	/** [Read] iot:DescribeDetectMitigationActionsTask */
	static readonly DescribeDetectMitigationActionsTask =
		"iot:DescribeDetectMitigationActionsTask";
	/** [Read] iot:DescribeDimension */
	static readonly DescribeDimension = "iot:DescribeDimension";
	/** [Read] iot:DescribeDomainConfiguration */
	static readonly DescribeDomainConfiguration =
		"iot:DescribeDomainConfiguration";
	/** [Read] iot:DescribeEncryptionConfiguration */
	static readonly DescribeEncryptionConfiguration =
		"iot:DescribeEncryptionConfiguration";
	/** [Read] iot:DescribeEndpoint */
	static readonly DescribeEndpoint = "iot:DescribeEndpoint";
	/** [Read] iot:DescribeEventConfigurations */
	static readonly DescribeEventConfigurations =
		"iot:DescribeEventConfigurations";
	/** [Read] iot:DescribeFleetMetric */
	static readonly DescribeFleetMetric = "iot:DescribeFleetMetric";
	/** [Read] iot:DescribeIndex */
	static readonly DescribeIndex = "iot:DescribeIndex";
	/** [Read] iot:DescribeJob */
	static readonly DescribeJob = "iot:DescribeJob";
	/** [Read] iot:DescribeJobExecution */
	static readonly DescribeJobExecution = "iot:DescribeJobExecution";
	/** [Read] iot:DescribeJobTemplate */
	static readonly DescribeJobTemplate = "iot:DescribeJobTemplate";
	/** [Read] iot:DescribeManagedJobTemplate */
	static readonly DescribeManagedJobTemplate = "iot:DescribeManagedJobTemplate";
	/** [Read] iot:DescribeMitigationAction */
	static readonly DescribeMitigationAction = "iot:DescribeMitigationAction";
	/** [Read] iot:DescribeProvisioningTemplate */
	static readonly DescribeProvisioningTemplate =
		"iot:DescribeProvisioningTemplate";
	/** [Read] iot:DescribeProvisioningTemplateVersion */
	static readonly DescribeProvisioningTemplateVersion =
		"iot:DescribeProvisioningTemplateVersion";
	/** [Read] iot:DescribeRoleAlias */
	static readonly DescribeRoleAlias = "iot:DescribeRoleAlias";
	/** [Read] iot:DescribeScheduledAudit */
	static readonly DescribeScheduledAudit = "iot:DescribeScheduledAudit";
	/** [Read] iot:DescribeSecurityProfile */
	static readonly DescribeSecurityProfile = "iot:DescribeSecurityProfile";
	/** [Read] iot:DescribeStream */
	static readonly DescribeStream = "iot:DescribeStream";
	/** [Read] iot:DescribeThing */
	static readonly DescribeThing = "iot:DescribeThing";
	/** [Read] iot:DescribeThingGroup */
	static readonly DescribeThingGroup = "iot:DescribeThingGroup";
	/** [Read] iot:DescribeThingRegistrationTask */
	static readonly DescribeThingRegistrationTask =
		"iot:DescribeThingRegistrationTask";
	/** [Read] iot:DescribeThingType */
	static readonly DescribeThingType = "iot:DescribeThingType";
	/** [Read] iot:DescribeTunnel */
	static readonly DescribeTunnel = "iot:DescribeTunnel";
	/** [PermissionManagement] iot:DetachPolicy */
	static readonly DetachPolicy = "iot:DetachPolicy";
	/** [PermissionManagement] iot:DetachPrincipalPolicy */
	static readonly DetachPrincipalPolicy = "iot:DetachPrincipalPolicy";
	/** [Write] iot:DetachSecurityProfile */
	static readonly DetachSecurityProfile = "iot:DetachSecurityProfile";
	/** [Write] iot:DetachThingPrincipal */
	static readonly DetachThingPrincipal = "iot:DetachThingPrincipal";
	/** [Write] iot:DisableTopicRule */
	static readonly DisableTopicRule = "iot:DisableTopicRule";
	/** [Write] iot:DisassociateSbomFromPackageVersion */
	static readonly DisassociateSbomFromPackageVersion =
		"iot:DisassociateSbomFromPackageVersion";
	/** [Write] iot:EnableTopicRule */
	static readonly EnableTopicRule = "iot:EnableTopicRule";
	/** [List] iot:GetBehaviorModelTrainingSummaries */
	static readonly actionGetBehaviorModelTrainingSummaries =
		"iot:GetBehaviorModelTrainingSummaries";
	/** [Read] iot:GetBucketsAggregation */
	static readonly actionGetBucketsAggregation = "iot:GetBucketsAggregation";
	/** [Read] iot:GetCardinality */
	static readonly actionGetCardinality = "iot:GetCardinality";
	/** [Read] iot:GetCommand */
	static readonly actionGetCommand = "iot:GetCommand";
	/** [Read] iot:GetCommandExecution */
	static readonly actionGetCommandExecution = "iot:GetCommandExecution";
	/** [Write] iot:GetConnection */
	static readonly actionGetConnection = "iot:GetConnection";
	/** [Read] iot:GetEffectivePolicies */
	static readonly actionGetEffectivePolicies = "iot:GetEffectivePolicies";
	/** [Read] iot:GetIndexingConfiguration */
	static readonly actionGetIndexingConfiguration =
		"iot:GetIndexingConfiguration";
	/** [Read] iot:GetJobDocument */
	static readonly actionGetJobDocument = "iot:GetJobDocument";
	/** [Read] iot:GetLoggingOptions */
	static readonly actionGetLoggingOptions = "iot:GetLoggingOptions";
	/** [Read] iot:GetOTAUpdate */
	static readonly actionGetOTAUpdate = "iot:GetOTAUpdate";
	/** [Read] iot:GetPackage */
	static readonly actionGetPackage = "iot:GetPackage";
	/** [Read] iot:GetPackageConfiguration */
	static readonly actionGetPackageConfiguration = "iot:GetPackageConfiguration";
	/** [Read] iot:GetPackageVersion */
	static readonly actionGetPackageVersion = "iot:GetPackageVersion";
	/** [Read] iot:GetPercentiles */
	static readonly actionGetPercentiles = "iot:GetPercentiles";
	/** [Read] iot:GetPolicy */
	static readonly actionGetPolicy = "iot:GetPolicy";
	/** [Read] iot:GetPolicyVersion */
	static readonly actionGetPolicyVersion = "iot:GetPolicyVersion";
	/** [Read] iot:GetRegistrationCode */
	static readonly actionGetRegistrationCode = "iot:GetRegistrationCode";
	/** [Read] iot:GetRetainedMessage */
	static readonly actionGetRetainedMessage = "iot:GetRetainedMessage";
	/** [Read] iot:GetStatistics */
	static readonly actionGetStatistics = "iot:GetStatistics";
	/** [Read] iot:GetThingConnectivityData */
	static readonly actionGetThingConnectivityData =
		"iot:GetThingConnectivityData";
	/** [Read] iot:GetThingShadow */
	static readonly actionGetThingShadow = "iot:GetThingShadow";
	/** [Read] iot:GetTopicRule */
	static readonly actionGetTopicRule = "iot:GetTopicRule";
	/** [Read] iot:GetTopicRuleDestination */
	static readonly actionGetTopicRuleDestination = "iot:GetTopicRuleDestination";
	/** [Read] iot:GetV2LoggingOptions */
	static readonly actionGetV2LoggingOptions = "iot:GetV2LoggingOptions";
	/** [List] iot:ListActiveViolations */
	static readonly ListActiveViolations = "iot:ListActiveViolations";
	/** [List] iot:ListAttachedPolicies */
	static readonly ListAttachedPolicies = "iot:ListAttachedPolicies";
	/** [List] iot:ListAuditFindings */
	static readonly ListAuditFindings = "iot:ListAuditFindings";
	/** [List] iot:ListAuditMitigationActionsExecutions */
	static readonly ListAuditMitigationActionsExecutions =
		"iot:ListAuditMitigationActionsExecutions";
	/** [List] iot:ListAuditMitigationActionsTasks */
	static readonly ListAuditMitigationActionsTasks =
		"iot:ListAuditMitigationActionsTasks";
	/** [List] iot:ListAuditSuppressions */
	static readonly ListAuditSuppressions = "iot:ListAuditSuppressions";
	/** [List] iot:ListAuditTasks */
	static readonly ListAuditTasks = "iot:ListAuditTasks";
	/** [List] iot:ListAuthorizers */
	static readonly ListAuthorizers = "iot:ListAuthorizers";
	/** [List] iot:ListBillingGroups */
	static readonly ListBillingGroups = "iot:ListBillingGroups";
	/** [List] iot:ListCACertificates */
	static readonly ListCACertificates = "iot:ListCACertificates";
	/** [List] iot:ListCertificateProviders */
	static readonly ListCertificateProviders = "iot:ListCertificateProviders";
	/** [List] iot:ListCertificates */
	static readonly ListCertificates = "iot:ListCertificates";
	/** [List] iot:ListCertificatesByCA */
	static readonly ListCertificatesByCA = "iot:ListCertificatesByCA";
	/** [List] iot:ListCommandExecutions */
	static readonly ListCommandExecutions = "iot:ListCommandExecutions";
	/** [List] iot:ListCommands */
	static readonly ListCommands = "iot:ListCommands";
	/** [List] iot:ListCustomMetrics */
	static readonly ListCustomMetrics = "iot:ListCustomMetrics";
	/** [List] iot:ListDetectMitigationActionsExecutions */
	static readonly ListDetectMitigationActionsExecutions =
		"iot:ListDetectMitigationActionsExecutions";
	/** [List] iot:ListDetectMitigationActionsTasks */
	static readonly ListDetectMitigationActionsTasks =
		"iot:ListDetectMitigationActionsTasks";
	/** [List] iot:ListDimensions */
	static readonly ListDimensions = "iot:ListDimensions";
	/** [List] iot:ListDomainConfigurations */
	static readonly ListDomainConfigurations = "iot:ListDomainConfigurations";
	/** [List] iot:ListFleetMetrics */
	static readonly ListFleetMetrics = "iot:ListFleetMetrics";
	/** [List] iot:ListIndices */
	static readonly ListIndices = "iot:ListIndices";
	/** [List] iot:ListJobExecutionsForJob */
	static readonly ListJobExecutionsForJob = "iot:ListJobExecutionsForJob";
	/** [List] iot:ListJobExecutionsForThing */
	static readonly ListJobExecutionsForThing = "iot:ListJobExecutionsForThing";
	/** [List] iot:ListJobTemplates */
	static readonly ListJobTemplates = "iot:ListJobTemplates";
	/** [List] iot:ListJobs */
	static readonly ListJobs = "iot:ListJobs";
	/** [List] iot:ListManagedJobTemplates */
	static readonly ListManagedJobTemplates = "iot:ListManagedJobTemplates";
	/** [List] iot:ListMetricValues */
	static readonly ListMetricValues = "iot:ListMetricValues";
	/** [List] iot:ListMitigationActions */
	static readonly ListMitigationActions = "iot:ListMitigationActions";
	/** [List] iot:ListNamedShadowsForThing */
	static readonly ListNamedShadowsForThing = "iot:ListNamedShadowsForThing";
	/** [List] iot:ListOTAUpdates */
	static readonly ListOTAUpdates = "iot:ListOTAUpdates";
	/** [List] iot:ListOutgoingCertificates */
	static readonly ListOutgoingCertificates = "iot:ListOutgoingCertificates";
	/** [List] iot:ListPackageVersions */
	static readonly ListPackageVersions = "iot:ListPackageVersions";
	/** [List] iot:ListPackages */
	static readonly ListPackages = "iot:ListPackages";
	/** [List] iot:ListPolicies */
	static readonly ListPolicies = "iot:ListPolicies";
	/** [List] iot:ListPolicyPrincipals */
	static readonly ListPolicyPrincipals = "iot:ListPolicyPrincipals";
	/** [List] iot:ListPolicyVersions */
	static readonly ListPolicyVersions = "iot:ListPolicyVersions";
	/** [List] iot:ListPrincipalPolicies */
	static readonly ListPrincipalPolicies = "iot:ListPrincipalPolicies";
	/** [List] iot:ListPrincipalThings */
	static readonly ListPrincipalThings = "iot:ListPrincipalThings";
	/** [List] iot:ListPrincipalThingsV2 */
	static readonly ListPrincipalThingsV2 = "iot:ListPrincipalThingsV2";
	/** [List] iot:ListProvisioningTemplateVersions */
	static readonly ListProvisioningTemplateVersions =
		"iot:ListProvisioningTemplateVersions";
	/** [List] iot:ListProvisioningTemplates */
	static readonly ListProvisioningTemplates = "iot:ListProvisioningTemplates";
	/** [List] iot:ListRelatedResourcesForAuditFinding */
	static readonly ListRelatedResourcesForAuditFinding =
		"iot:ListRelatedResourcesForAuditFinding";
	/** [List] iot:ListRetainedMessages */
	static readonly ListRetainedMessages = "iot:ListRetainedMessages";
	/** [List] iot:ListRoleAliases */
	static readonly ListRoleAliases = "iot:ListRoleAliases";
	/** [List] iot:ListSbomValidationResults */
	static readonly ListSbomValidationResults = "iot:ListSbomValidationResults";
	/** [List] iot:ListScheduledAudits */
	static readonly ListScheduledAudits = "iot:ListScheduledAudits";
	/** [List] iot:ListSecurityProfiles */
	static readonly ListSecurityProfiles = "iot:ListSecurityProfiles";
	/** [List] iot:ListSecurityProfilesForTarget */
	static readonly ListSecurityProfilesForTarget =
		"iot:ListSecurityProfilesForTarget";
	/** [List] iot:ListStreams */
	static readonly ListStreams = "iot:ListStreams";
	/** [Write] iot:ListSubscriptions */
	static readonly ListSubscriptions = "iot:ListSubscriptions";
	/** [Read] iot:ListTagsForResource */
	static readonly ListTagsForResource = "iot:ListTagsForResource";
	/** [List] iot:ListTargetsForPolicy */
	static readonly ListTargetsForPolicy = "iot:ListTargetsForPolicy";
	/** [List] iot:ListTargetsForSecurityProfile */
	static readonly ListTargetsForSecurityProfile =
		"iot:ListTargetsForSecurityProfile";
	/** [List] iot:ListThingGroups */
	static readonly ListThingGroups = "iot:ListThingGroups";
	/** [List] iot:ListThingGroupsForThing */
	static readonly ListThingGroupsForThing = "iot:ListThingGroupsForThing";
	/** [List] iot:ListThingPrincipals */
	static readonly ListThingPrincipals = "iot:ListThingPrincipals";
	/** [List] iot:ListThingPrincipalsV2 */
	static readonly ListThingPrincipalsV2 = "iot:ListThingPrincipalsV2";
	/** [List] iot:ListThingRegistrationTaskReports */
	static readonly ListThingRegistrationTaskReports =
		"iot:ListThingRegistrationTaskReports";
	/** [List] iot:ListThingRegistrationTasks */
	static readonly ListThingRegistrationTasks = "iot:ListThingRegistrationTasks";
	/** [List] iot:ListThingTypes */
	static readonly ListThingTypes = "iot:ListThingTypes";
	/** [List] iot:ListThings */
	static readonly ListThings = "iot:ListThings";
	/** [List] iot:ListThingsInBillingGroup */
	static readonly ListThingsInBillingGroup = "iot:ListThingsInBillingGroup";
	/** [List] iot:ListThingsInThingGroup */
	static readonly ListThingsInThingGroup = "iot:ListThingsInThingGroup";
	/** [List] iot:ListTopicRuleDestinations */
	static readonly ListTopicRuleDestinations = "iot:ListTopicRuleDestinations";
	/** [List] iot:ListTopicRules */
	static readonly ListTopicRules = "iot:ListTopicRules";
	/** [List] iot:ListTunnels */
	static readonly ListTunnels = "iot:ListTunnels";
	/** [List] iot:ListV2LoggingLevels */
	static readonly ListV2LoggingLevels = "iot:ListV2LoggingLevels";
	/** [List] iot:ListViolationEvents */
	static readonly ListViolationEvents = "iot:ListViolationEvents";
	/** [Write] iot:OpenTunnel */
	static readonly OpenTunnel = "iot:OpenTunnel";
	/** [Write] iot:Publish */
	static readonly Publish = "iot:Publish";
	/** [Write] iot:PutVerificationStateOnViolation */
	static readonly PutVerificationStateOnViolation =
		"iot:PutVerificationStateOnViolation";
	/** [Write] iot:Receive */
	static readonly Receive = "iot:Receive";
	/** [Write] iot:RegisterCACertificate */
	static readonly RegisterCACertificate = "iot:RegisterCACertificate";
	/** [Write] iot:RegisterCertificate */
	static readonly RegisterCertificate = "iot:RegisterCertificate";
	/** [Write] iot:RegisterCertificateWithoutCA */
	static readonly RegisterCertificateWithoutCA =
		"iot:RegisterCertificateWithoutCA";
	/** [Write] iot:RegisterThing */
	static readonly RegisterThing = "iot:RegisterThing";
	/** [Write] iot:RejectCertificateTransfer */
	static readonly RejectCertificateTransfer = "iot:RejectCertificateTransfer";
	/** [Write] iot:RemoveThingFromBillingGroup */
	static readonly RemoveThingFromBillingGroup =
		"iot:RemoveThingFromBillingGroup";
	/** [Write] iot:RemoveThingFromThingGroup */
	static readonly RemoveThingFromThingGroup = "iot:RemoveThingFromThingGroup";
	/** [Write] iot:ReplaceTopicRule */
	static readonly ReplaceTopicRule = "iot:ReplaceTopicRule";
	/** [Write] iot:RetainPublish */
	static readonly RetainPublish = "iot:RetainPublish";
	/** [Write] iot:RotateTunnelAccessToken */
	static readonly RotateTunnelAccessToken = "iot:RotateTunnelAccessToken";
	/** [Read] iot:SearchIndex */
	static readonly SearchIndex = "iot:SearchIndex";
	/** [Write] iot:SendDirectMessage */
	static readonly SendDirectMessage = "iot:SendDirectMessage";
	/** [PermissionManagement] iot:SetDefaultAuthorizer */
	static readonly actionSetDefaultAuthorizer = "iot:SetDefaultAuthorizer";
	/** [PermissionManagement] iot:SetDefaultPolicyVersion */
	static readonly actionSetDefaultPolicyVersion = "iot:SetDefaultPolicyVersion";
	/** [Write] iot:SetLoggingOptions */
	static readonly actionSetLoggingOptions = "iot:SetLoggingOptions";
	/** [Write] iot:SetV2LoggingLevel */
	static readonly actionSetV2LoggingLevel = "iot:SetV2LoggingLevel";
	/** [Write] iot:SetV2LoggingOptions */
	static readonly actionSetV2LoggingOptions = "iot:SetV2LoggingOptions";
	/** [Write] iot:StartAuditMitigationActionsTask */
	static readonly StartAuditMitigationActionsTask =
		"iot:StartAuditMitigationActionsTask";
	/** [Write] iot:StartCommandExecution */
	static readonly StartCommandExecution = "iot:StartCommandExecution";
	/** [Write] iot:StartDetectMitigationActionsTask */
	static readonly StartDetectMitigationActionsTask =
		"iot:StartDetectMitigationActionsTask";
	/** [Write] iot:StartOnDemandAuditTask */
	static readonly StartOnDemandAuditTask = "iot:StartOnDemandAuditTask";
	/** [Write] iot:StartThingRegistrationTask */
	static readonly StartThingRegistrationTask = "iot:StartThingRegistrationTask";
	/** [Write] iot:StopThingRegistrationTask */
	static readonly StopThingRegistrationTask = "iot:StopThingRegistrationTask";
	/** [Write] iot:Subscribe */
	static readonly Subscribe = "iot:Subscribe";
	/** [Tagging] iot:TagResource */
	static readonly TagResource = "iot:TagResource";
	/** [Read] iot:TestAuthorization */
	static readonly TestAuthorization = "iot:TestAuthorization";
	/** [Read] iot:TestInvokeAuthorizer */
	static readonly TestInvokeAuthorizer = "iot:TestInvokeAuthorizer";
	/** [Write] iot:TransferCertificate */
	static readonly TransferCertificate = "iot:TransferCertificate";
	/** [Tagging] iot:UntagResource */
	static readonly UntagResource = "iot:UntagResource";
	/** [Write] iot:UpdateAccountAuditConfiguration */
	static readonly UpdateAccountAuditConfiguration =
		"iot:UpdateAccountAuditConfiguration";
	/** [Write] iot:UpdateAuditSuppression */
	static readonly UpdateAuditSuppression = "iot:UpdateAuditSuppression";
	/** [Write] iot:UpdateAuthorizer */
	static readonly UpdateAuthorizer = "iot:UpdateAuthorizer";
	/** [Write] iot:UpdateBillingGroup */
	static readonly UpdateBillingGroup = "iot:UpdateBillingGroup";
	/** [Write] iot:UpdateCACertificate */
	static readonly UpdateCACertificate = "iot:UpdateCACertificate";
	/** [Write] iot:UpdateCertificate */
	static readonly UpdateCertificate = "iot:UpdateCertificate";
	/** [Write] iot:UpdateCertificateProvider */
	static readonly UpdateCertificateProvider = "iot:UpdateCertificateProvider";
	/** [Write] iot:UpdateCommand */
	static readonly UpdateCommand = "iot:UpdateCommand";
	/** [Write] iot:UpdateCustomMetric */
	static readonly UpdateCustomMetric = "iot:UpdateCustomMetric";
	/** [Write] iot:UpdateDimension */
	static readonly UpdateDimension = "iot:UpdateDimension";
	/** [Write] iot:UpdateDomainConfiguration */
	static readonly UpdateDomainConfiguration = "iot:UpdateDomainConfiguration";
	/** [Write] iot:UpdateDynamicThingGroup */
	static readonly UpdateDynamicThingGroup = "iot:UpdateDynamicThingGroup";
	/** [Write] iot:UpdateEncryptionConfiguration */
	static readonly UpdateEncryptionConfiguration =
		"iot:UpdateEncryptionConfiguration";
	/** [Write] iot:UpdateEventConfigurations */
	static readonly UpdateEventConfigurations = "iot:UpdateEventConfigurations";
	/** [Write] iot:UpdateFleetMetric */
	static readonly UpdateFleetMetric = "iot:UpdateFleetMetric";
	/** [Write] iot:UpdateIndexingConfiguration */
	static readonly UpdateIndexingConfiguration =
		"iot:UpdateIndexingConfiguration";
	/** [Write] iot:UpdateJob */
	static readonly UpdateJob = "iot:UpdateJob";
	/** [Write] iot:UpdateMitigationAction */
	static readonly UpdateMitigationAction = "iot:UpdateMitigationAction";
	/** [Write] iot:UpdatePackage */
	static readonly UpdatePackage = "iot:UpdatePackage";
	/** [Write] iot:UpdatePackageConfiguration */
	static readonly UpdatePackageConfiguration = "iot:UpdatePackageConfiguration";
	/** [Write] iot:UpdatePackageVersion */
	static readonly UpdatePackageVersion = "iot:UpdatePackageVersion";
	/** [Write] iot:UpdateProvisioningTemplate */
	static readonly UpdateProvisioningTemplate = "iot:UpdateProvisioningTemplate";
	/** [Write] iot:UpdateRoleAlias */
	static readonly UpdateRoleAlias = "iot:UpdateRoleAlias";
	/** [Write] iot:UpdateScheduledAudit */
	static readonly UpdateScheduledAudit = "iot:UpdateScheduledAudit";
	/** [Write] iot:UpdateSecurityProfile */
	static readonly UpdateSecurityProfile = "iot:UpdateSecurityProfile";
	/** [Write] iot:UpdateStream */
	static readonly UpdateStream = "iot:UpdateStream";
	/** [Write] iot:UpdateThing */
	static readonly UpdateThing = "iot:UpdateThing";
	/** [Write] iot:UpdateThingGroup */
	static readonly UpdateThingGroup = "iot:UpdateThingGroup";
	/** [Write] iot:UpdateThingGroupsForThing */
	static readonly UpdateThingGroupsForThing = "iot:UpdateThingGroupsForThing";
	/** [Write] iot:UpdateThingShadow */
	static readonly UpdateThingShadow = "iot:UpdateThingShadow";
	/** [Write] iot:UpdateThingType */
	static readonly UpdateThingType = "iot:UpdateThingType";
	/** [Write] iot:UpdateTopicRuleDestination */
	static readonly UpdateTopicRuleDestination = "iot:UpdateTopicRuleDestination";
	/** [Read] iot:ValidateSecurityProfileBehaviors */
	static readonly ValidateSecurityProfileBehaviors =
		"iot:ValidateSecurityProfileBehaviors";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotActions.DescribeAccountAuditConfiguration,
		IotActions.DescribeAuditFinding,
		IotActions.DescribeAuditMitigationActionsTask,
		IotActions.DescribeAuditSuppression,
		IotActions.DescribeAuditTask,
		IotActions.DescribeAuthorizer,
		IotActions.DescribeBillingGroup,
		IotActions.DescribeCACertificate,
		IotActions.DescribeCertificate,
		IotActions.DescribeCertificateProvider,
		IotActions.DescribeCustomMetric,
		IotActions.DescribeDefaultAuthorizer,
		IotActions.DescribeDetectMitigationActionsTask,
		IotActions.DescribeDimension,
		IotActions.DescribeDomainConfiguration,
		IotActions.DescribeEncryptionConfiguration,
		IotActions.DescribeEndpoint,
		IotActions.DescribeEventConfigurations,
		IotActions.DescribeFleetMetric,
		IotActions.DescribeIndex,
		IotActions.DescribeJob,
		IotActions.DescribeJobExecution,
		IotActions.DescribeJobTemplate,
		IotActions.DescribeManagedJobTemplate,
		IotActions.DescribeMitigationAction,
		IotActions.DescribeProvisioningTemplate,
		IotActions.DescribeProvisioningTemplateVersion,
		IotActions.DescribeRoleAlias,
		IotActions.DescribeScheduledAudit,
		IotActions.DescribeSecurityProfile,
		IotActions.DescribeStream,
		IotActions.DescribeThing,
		IotActions.DescribeThingGroup,
		IotActions.DescribeThingRegistrationTask,
		IotActions.DescribeThingType,
		IotActions.DescribeTunnel,
		IotActions.actionGetBucketsAggregation,
		IotActions.actionGetCardinality,
		IotActions.actionGetCommand,
		IotActions.actionGetCommandExecution,
		IotActions.actionGetEffectivePolicies,
		IotActions.actionGetIndexingConfiguration,
		IotActions.actionGetJobDocument,
		IotActions.actionGetLoggingOptions,
		IotActions.actionGetOTAUpdate,
		IotActions.actionGetPackage,
		IotActions.actionGetPackageConfiguration,
		IotActions.actionGetPackageVersion,
		IotActions.actionGetPercentiles,
		IotActions.actionGetPolicy,
		IotActions.actionGetPolicyVersion,
		IotActions.actionGetRegistrationCode,
		IotActions.actionGetRetainedMessage,
		IotActions.actionGetStatistics,
		IotActions.actionGetThingConnectivityData,
		IotActions.actionGetThingShadow,
		IotActions.actionGetTopicRule,
		IotActions.actionGetTopicRuleDestination,
		IotActions.actionGetV2LoggingOptions,
		IotActions.ListTagsForResource,
		IotActions.SearchIndex,
		IotActions.TestAuthorization,
		IotActions.TestInvokeAuthorizer,
		IotActions.ValidateSecurityProfileBehaviors,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotActions.AcceptCertificateTransfer,
		IotActions.AddThingToBillingGroup,
		IotActions.AddThingToThingGroup,
		IotActions.AssociateSbomWithPackageVersion,
		IotActions.AssociateTargetsWithJob,
		IotActions.AttachSecurityProfile,
		IotActions.AttachThingPrincipal,
		IotActions.CancelAuditMitigationActionsTask,
		IotActions.CancelAuditTask,
		IotActions.CancelCertificateTransfer,
		IotActions.CancelDetectMitigationActionsTask,
		IotActions.CancelJob,
		IotActions.CancelJobExecution,
		IotActions.ClearDefaultAuthorizer,
		IotActions.CloseTunnel,
		IotActions.ConfirmTopicRuleDestination,
		IotActions.Connect,
		IotActions.CreateAuditSuppression,
		IotActions.CreateAuthorizer,
		IotActions.CreateBillingGroup,
		IotActions.CreateCertificateFromCsr,
		IotActions.CreateCertificateProvider,
		IotActions.CreateCommand,
		IotActions.CreateCustomMetric,
		IotActions.CreateDimension,
		IotActions.CreateDomainConfiguration,
		IotActions.CreateDynamicThingGroup,
		IotActions.CreateFleetMetric,
		IotActions.CreateJob,
		IotActions.CreateJobTemplate,
		IotActions.CreateKeysAndCertificate,
		IotActions.CreateMitigationAction,
		IotActions.CreateOTAUpdate,
		IotActions.CreatePackage,
		IotActions.CreatePackageVersion,
		IotActions.CreateProvisioningClaim,
		IotActions.CreateProvisioningTemplate,
		IotActions.CreateProvisioningTemplateVersion,
		IotActions.CreateRoleAlias,
		IotActions.CreateScheduledAudit,
		IotActions.CreateSecurityProfile,
		IotActions.CreateStream,
		IotActions.CreateThing,
		IotActions.CreateThingGroup,
		IotActions.CreateThingType,
		IotActions.CreateTopicRule,
		IotActions.CreateTopicRuleDestination,
		IotActions.DeleteAccountAuditConfiguration,
		IotActions.DeleteAuditSuppression,
		IotActions.DeleteAuthorizer,
		IotActions.DeleteBillingGroup,
		IotActions.DeleteCACertificate,
		IotActions.DeleteCertificate,
		IotActions.DeleteCertificateProvider,
		IotActions.DeleteCommand,
		IotActions.DeleteCommandExecution,
		IotActions.DeleteConnection,
		IotActions.DeleteCustomMetric,
		IotActions.DeleteDimension,
		IotActions.DeleteDomainConfiguration,
		IotActions.DeleteDynamicThingGroup,
		IotActions.DeleteFleetMetric,
		IotActions.DeleteJob,
		IotActions.DeleteJobExecution,
		IotActions.DeleteJobTemplate,
		IotActions.DeleteMitigationAction,
		IotActions.DeleteOTAUpdate,
		IotActions.DeletePackage,
		IotActions.DeletePackageVersion,
		IotActions.DeleteProvisioningTemplate,
		IotActions.DeleteProvisioningTemplateVersion,
		IotActions.DeleteRegistrationCode,
		IotActions.DeleteRoleAlias,
		IotActions.DeleteScheduledAudit,
		IotActions.DeleteSecurityProfile,
		IotActions.DeleteStream,
		IotActions.DeleteThing,
		IotActions.DeleteThingGroup,
		IotActions.DeleteThingShadow,
		IotActions.DeleteThingType,
		IotActions.DeleteTopicRule,
		IotActions.DeleteTopicRuleDestination,
		IotActions.DeleteV2LoggingLevel,
		IotActions.DeprecateThingType,
		IotActions.DetachSecurityProfile,
		IotActions.DetachThingPrincipal,
		IotActions.DisableTopicRule,
		IotActions.DisassociateSbomFromPackageVersion,
		IotActions.EnableTopicRule,
		IotActions.actionGetConnection,
		IotActions.ListSubscriptions,
		IotActions.OpenTunnel,
		IotActions.Publish,
		IotActions.PutVerificationStateOnViolation,
		IotActions.Receive,
		IotActions.RegisterCACertificate,
		IotActions.RegisterCertificate,
		IotActions.RegisterCertificateWithoutCA,
		IotActions.RegisterThing,
		IotActions.RejectCertificateTransfer,
		IotActions.RemoveThingFromBillingGroup,
		IotActions.RemoveThingFromThingGroup,
		IotActions.ReplaceTopicRule,
		IotActions.RetainPublish,
		IotActions.RotateTunnelAccessToken,
		IotActions.SendDirectMessage,
		IotActions.actionSetLoggingOptions,
		IotActions.actionSetV2LoggingLevel,
		IotActions.actionSetV2LoggingOptions,
		IotActions.StartAuditMitigationActionsTask,
		IotActions.StartCommandExecution,
		IotActions.StartDetectMitigationActionsTask,
		IotActions.StartOnDemandAuditTask,
		IotActions.StartThingRegistrationTask,
		IotActions.StopThingRegistrationTask,
		IotActions.Subscribe,
		IotActions.TransferCertificate,
		IotActions.UpdateAccountAuditConfiguration,
		IotActions.UpdateAuditSuppression,
		IotActions.UpdateAuthorizer,
		IotActions.UpdateBillingGroup,
		IotActions.UpdateCACertificate,
		IotActions.UpdateCertificate,
		IotActions.UpdateCertificateProvider,
		IotActions.UpdateCommand,
		IotActions.UpdateCustomMetric,
		IotActions.UpdateDimension,
		IotActions.UpdateDomainConfiguration,
		IotActions.UpdateDynamicThingGroup,
		IotActions.UpdateEncryptionConfiguration,
		IotActions.UpdateEventConfigurations,
		IotActions.UpdateFleetMetric,
		IotActions.UpdateIndexingConfiguration,
		IotActions.UpdateJob,
		IotActions.UpdateMitigationAction,
		IotActions.UpdatePackage,
		IotActions.UpdatePackageConfiguration,
		IotActions.UpdatePackageVersion,
		IotActions.UpdateProvisioningTemplate,
		IotActions.UpdateRoleAlias,
		IotActions.UpdateScheduledAudit,
		IotActions.UpdateSecurityProfile,
		IotActions.UpdateStream,
		IotActions.UpdateThing,
		IotActions.UpdateThingGroup,
		IotActions.UpdateThingGroupsForThing,
		IotActions.UpdateThingShadow,
		IotActions.UpdateThingType,
		IotActions.UpdateTopicRuleDestination,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IotActions.actionGetBehaviorModelTrainingSummaries,
		IotActions.ListActiveViolations,
		IotActions.ListAttachedPolicies,
		IotActions.ListAuditFindings,
		IotActions.ListAuditMitigationActionsExecutions,
		IotActions.ListAuditMitigationActionsTasks,
		IotActions.ListAuditSuppressions,
		IotActions.ListAuditTasks,
		IotActions.ListAuthorizers,
		IotActions.ListBillingGroups,
		IotActions.ListCACertificates,
		IotActions.ListCertificateProviders,
		IotActions.ListCertificates,
		IotActions.ListCertificatesByCA,
		IotActions.ListCommandExecutions,
		IotActions.ListCommands,
		IotActions.ListCustomMetrics,
		IotActions.ListDetectMitigationActionsExecutions,
		IotActions.ListDetectMitigationActionsTasks,
		IotActions.ListDimensions,
		IotActions.ListDomainConfigurations,
		IotActions.ListFleetMetrics,
		IotActions.ListIndices,
		IotActions.ListJobExecutionsForJob,
		IotActions.ListJobExecutionsForThing,
		IotActions.ListJobTemplates,
		IotActions.ListJobs,
		IotActions.ListManagedJobTemplates,
		IotActions.ListMetricValues,
		IotActions.ListMitigationActions,
		IotActions.ListNamedShadowsForThing,
		IotActions.ListOTAUpdates,
		IotActions.ListOutgoingCertificates,
		IotActions.ListPackageVersions,
		IotActions.ListPackages,
		IotActions.ListPolicies,
		IotActions.ListPolicyPrincipals,
		IotActions.ListPolicyVersions,
		IotActions.ListPrincipalPolicies,
		IotActions.ListPrincipalThings,
		IotActions.ListPrincipalThingsV2,
		IotActions.ListProvisioningTemplateVersions,
		IotActions.ListProvisioningTemplates,
		IotActions.ListRelatedResourcesForAuditFinding,
		IotActions.ListRetainedMessages,
		IotActions.ListRoleAliases,
		IotActions.ListSbomValidationResults,
		IotActions.ListScheduledAudits,
		IotActions.ListSecurityProfiles,
		IotActions.ListSecurityProfilesForTarget,
		IotActions.ListStreams,
		IotActions.ListTargetsForPolicy,
		IotActions.ListTargetsForSecurityProfile,
		IotActions.ListThingGroups,
		IotActions.ListThingGroupsForThing,
		IotActions.ListThingPrincipals,
		IotActions.ListThingPrincipalsV2,
		IotActions.ListThingRegistrationTaskReports,
		IotActions.ListThingRegistrationTasks,
		IotActions.ListThingTypes,
		IotActions.ListThings,
		IotActions.ListThingsInBillingGroup,
		IotActions.ListThingsInThingGroup,
		IotActions.ListTopicRuleDestinations,
		IotActions.ListTopicRules,
		IotActions.ListTunnels,
		IotActions.ListV2LoggingLevels,
		IotActions.ListViolationEvents,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		IotActions.AttachPolicy,
		IotActions.AttachPrincipalPolicy,
		IotActions.CreatePolicy,
		IotActions.CreatePolicyVersion,
		IotActions.DeletePolicy,
		IotActions.DeletePolicyVersion,
		IotActions.DetachPolicy,
		IotActions.DetachPrincipalPolicy,
		IotActions.actionSetDefaultAuthorizer,
		IotActions.actionSetDefaultPolicyVersion,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IotActions.TagResource,
		IotActions.UntagResource,
	];
}

/**
 * Properties for building a authorizer ARN.
 */
export interface IotAuthorizerArnProps {
	/** The AuthorizerName component of the ARN. */
	readonly authorizerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a authorizer ARN.
 */
export interface IotAuthorizerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AuthorizerName component. */
	readonly authorizerName: string;
}

/**
 * Properties for building a billinggroup ARN.
 */
export interface IotBillinggroupArnProps {
	/** The BillingGroupName component of the ARN. */
	readonly billingGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a billinggroup ARN.
 */
export interface IotBillinggroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BillingGroupName component. */
	readonly billingGroupName: string;
}

/**
 * Properties for building a cacert ARN.
 */
export interface IotCacertArnProps {
	/** The CACertificate component of the ARN. */
	readonly caCertificate: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cacert ARN.
 */
export interface IotCacertArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CACertificate component. */
	readonly caCertificate: string;
}

/**
 * Properties for building a cert ARN.
 */
export interface IotCertArnProps {
	/** The Certificate component of the ARN. */
	readonly certificate: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cert ARN.
 */
export interface IotCertArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Certificate component. */
	readonly certificate: string;
}

/**
 * Properties for building a certificateprovider ARN.
 */
export interface IotCertificateproviderArnProps {
	/** The CertificateProviderName component of the ARN. */
	readonly certificateProviderName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a certificateprovider ARN.
 */
export interface IotCertificateproviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CertificateProviderName component. */
	readonly certificateProviderName: string;
}

/**
 * Properties for building a client ARN.
 */
export interface IotClientArnProps {
	/** The ClientId component of the ARN. */
	readonly clientId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a client ARN.
 */
export interface IotClientArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClientId component. */
	readonly clientId: string;
}

/**
 * Properties for building a command ARN.
 */
export interface IotCommandArnProps {
	/** The CommandId component of the ARN. */
	readonly commandId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a command ARN.
 */
export interface IotCommandArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CommandId component. */
	readonly commandId: string;
}

/**
 * Properties for building a custommetric ARN.
 */
export interface IotCustommetricArnProps {
	/** The MetricName component of the ARN. */
	readonly metricName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a custommetric ARN.
 */
export interface IotCustommetricArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MetricName component. */
	readonly metricName: string;
}

/**
 * Properties for building a destination ARN.
 */
export interface IotDestinationArnProps {
	/** The DestinationType component of the ARN. */
	readonly destinationType: string;
	/** The Uuid component of the ARN. */
	readonly uuid: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a destination ARN.
 */
export interface IotDestinationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DestinationType component. */
	readonly destinationType: string;
	/** The Uuid component. */
	readonly uuid: string;
}

/**
 * Properties for building a dimension ARN.
 */
export interface IotDimensionArnProps {
	/** The DimensionName component of the ARN. */
	readonly dimensionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dimension ARN.
 */
export interface IotDimensionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DimensionName component. */
	readonly dimensionName: string;
}

/**
 * Properties for building a domainconfiguration ARN.
 */
export interface IotDomainconfigurationArnProps {
	/** The DomainConfigurationName component of the ARN. */
	readonly domainConfigurationName: string;
	/** The Id component of the ARN. */
	readonly id: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domainconfiguration ARN.
 */
export interface IotDomainconfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainConfigurationName component. */
	readonly domainConfigurationName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a dynamicthinggroup ARN.
 */
export interface IotDynamicthinggroupArnProps {
	/** The ThingGroupName component of the ARN. */
	readonly thingGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dynamicthinggroup ARN.
 */
export interface IotDynamicthinggroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingGroupName component. */
	readonly thingGroupName: string;
}

/**
 * Properties for building a fleetmetric ARN.
 */
export interface IotFleetmetricArnProps {
	/** The FleetMetricName component of the ARN. */
	readonly fleetMetricName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fleetmetric ARN.
 */
export interface IotFleetmetricArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetMetricName component. */
	readonly fleetMetricName: string;
}

/**
 * Properties for building a index ARN.
 */
export interface IotIndexArnProps {
	/** The IndexName component of the ARN. */
	readonly indexName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a index ARN.
 */
export interface IotIndexArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexName component. */
	readonly indexName: string;
}

/**
 * Properties for building a job ARN.
 */
export interface IotJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface IotJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a jobtemplate ARN.
 */
export interface IotJobtemplateArnProps {
	/** The JobTemplateId component of the ARN. */
	readonly jobTemplateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a jobtemplate ARN.
 */
export interface IotJobtemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobTemplateId component. */
	readonly jobTemplateId: string;
}

/**
 * Properties for building a mitigationaction ARN.
 */
export interface IotMitigationactionArnProps {
	/** The MitigationActionName component of the ARN. */
	readonly mitigationActionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a mitigationaction ARN.
 */
export interface IotMitigationactionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MitigationActionName component. */
	readonly mitigationActionName: string;
}

/**
 * Properties for building a otaupdate ARN.
 */
export interface IotOtaupdateArnProps {
	/** The OtaUpdateId component of the ARN. */
	readonly otaUpdateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a otaupdate ARN.
 */
export interface IotOtaupdateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OtaUpdateId component. */
	readonly otaUpdateId: string;
}

/**
 * Properties for building a package ARN.
 */
export interface IotPackageArnProps {
	/** The PackageName component of the ARN. */
	readonly packageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a package ARN.
 */
export interface IotPackageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PackageName component. */
	readonly packageName: string;
}

/**
 * Properties for building a packageversion ARN.
 */
export interface IotPackageversionArnProps {
	/** The PackageName component of the ARN. */
	readonly packageName: string;
	/** The VersionName component of the ARN. */
	readonly versionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a packageversion ARN.
 */
export interface IotPackageversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PackageName component. */
	readonly packageName: string;
	/** The VersionName component. */
	readonly versionName: string;
}

/**
 * Properties for building a policy ARN.
 */
export interface IotPolicyArnProps {
	/** The PolicyName component of the ARN. */
	readonly policyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy ARN.
 */
export interface IotPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyName component. */
	readonly policyName: string;
}

/**
 * Properties for building a provisioningtemplate ARN.
 */
export interface IotProvisioningtemplateArnProps {
	/** The ProvisioningTemplate component of the ARN. */
	readonly provisioningTemplate: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a provisioningtemplate ARN.
 */
export interface IotProvisioningtemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProvisioningTemplate component. */
	readonly provisioningTemplate: string;
}

/**
 * Properties for building a rolealias ARN.
 */
export interface IotRolealiasArnProps {
	/** The RoleAlias component of the ARN. */
	readonly roleAlias: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rolealias ARN.
 */
export interface IotRolealiasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RoleAlias component. */
	readonly roleAlias: string;
}

/**
 * Properties for building a rule ARN.
 */
export interface IotRuleArnProps {
	/** The RuleName component of the ARN. */
	readonly ruleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rule ARN.
 */
export interface IotRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleName component. */
	readonly ruleName: string;
}

/**
 * Properties for building a scheduledaudit ARN.
 */
export interface IotScheduledauditArnProps {
	/** The ScheduleName component of the ARN. */
	readonly scheduleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scheduledaudit ARN.
 */
export interface IotScheduledauditArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScheduleName component. */
	readonly scheduleName: string;
}

/**
 * Properties for building a securityprofile ARN.
 */
export interface IotSecurityprofileArnProps {
	/** The SecurityProfileName component of the ARN. */
	readonly securityProfileName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a securityprofile ARN.
 */
export interface IotSecurityprofileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SecurityProfileName component. */
	readonly securityProfileName: string;
}

/**
 * Properties for building a stream ARN.
 */
export interface IotStreamArnProps {
	/** The StreamId component of the ARN. */
	readonly streamId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stream ARN.
 */
export interface IotStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamId component. */
	readonly streamId: string;
}

/**
 * Properties for building a thing ARN.
 */
export interface IotThingArnProps {
	/** The ThingName component of the ARN. */
	readonly thingName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a thing ARN.
 */
export interface IotThingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingName component. */
	readonly thingName: string;
}

/**
 * Properties for building a thinggroup ARN.
 */
export interface IotThinggroupArnProps {
	/** The ThingGroupName component of the ARN. */
	readonly thingGroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a thinggroup ARN.
 */
export interface IotThinggroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingGroupName component. */
	readonly thingGroupName: string;
}

/**
 * Properties for building a thingtype ARN.
 */
export interface IotThingtypeArnProps {
	/** The ThingTypeName component of the ARN. */
	readonly thingTypeName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a thingtype ARN.
 */
export interface IotThingtypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ThingTypeName component. */
	readonly thingTypeName: string;
}

/**
 * Properties for building a topic ARN.
 */
export interface IotTopicArnProps {
	/** The TopicName component of the ARN. */
	readonly topicName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a topic ARN.
 */
export interface IotTopicArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TopicName component. */
	readonly topicName: string;
}

/**
 * Properties for building a topicfilter ARN.
 */
export interface IotTopicfilterArnProps {
	/** The TopicFilter component of the ARN. */
	readonly topicFilter: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a topicfilter ARN.
 */
export interface IotTopicfilterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TopicFilter component. */
	readonly topicFilter: string;
}

/**
 * Properties for building a tunnel ARN.
 */
export interface IotTunnelArnProps {
	/** The TunnelId component of the ARN. */
	readonly tunnelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tunnel ARN.
 */
export interface IotTunnelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TunnelId component. */
	readonly tunnelId: string;
}

const AuthorizerArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):authorizer\/(?<authorizerName>[^:/?]+)$/;
const BillinggroupArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):billinggroup\/(?<billingGroupName>[^:/?]+)$/;
const CacertArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):cacert\/(?<caCertificate>[^:/?]+)$/;
const CertArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):cert\/(?<certificate>[^:/?]+)$/;
const CertificateproviderArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):certificateprovider\/(?<certificateProviderName>[^:/?]+)$/;
const ClientArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):client\/(?<clientId>[^:/?]+)$/;
const CommandArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):command\/(?<commandId>[^:/?]+)$/;
const CustommetricArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):custommetric\/(?<metricName>[^:/?]+)$/;
const DestinationArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):ruledestination\/(?<destinationType>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const DimensionArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):dimension\/(?<dimensionName>[^:/?]+)$/;
const DomainconfigurationArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):domainconfiguration\/(?<domainConfigurationName>[^:/?]+)\/(?<id>[^:/?]+)$/;
const DynamicthinggroupArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thinggroup\/(?<thingGroupName>[^:/?]+)$/;
const FleetmetricArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):fleetmetric\/(?<fleetMetricName>[^:/?]+)$/;
const IndexArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexName>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const JobtemplateArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):jobtemplate\/(?<jobTemplateId>[^:/?]+)$/;
const MitigationactionArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):mitigationaction\/(?<mitigationActionName>[^:/?]+)$/;
const OtaupdateArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):otaupdate\/(?<otaUpdateId>[^:/?]+)$/;
const PackageArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):package\/(?<packageName>[^:/?]+)$/;
const PackageversionArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):package\/(?<packageName>[^:/?]+)\/version\/(?<versionName>[^:/?]+)$/;
const PolicyArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):policy\/(?<policyName>[^:/?]+)$/;
const ProvisioningtemplateArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):provisioningtemplate\/(?<provisioningTemplate>[^:/?]+)$/;
const RolealiasArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):rolealias\/(?<roleAlias>[^:/?]+)$/;
const RuleArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):rule\/(?<ruleName>[^:/?]+)$/;
const ScheduledauditArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):scheduledaudit\/(?<scheduleName>[^:/?]+)$/;
const SecurityprofileArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):securityprofile\/(?<securityProfileName>[^:/?]+)$/;
const StreamArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):stream\/(?<streamId>[^:/?]+)$/;
const ThingArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thing\/(?<thingName>[^:/?]+)$/;
const ThinggroupArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thinggroup\/(?<thingGroupName>[^:/?]+)$/;
const ThingtypeArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thingtype\/(?<thingTypeName>[^:/?]+)$/;
const TopicArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):topic\/(?<topicName>[^:/?]+)$/;
const TopicfilterArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):topicfilter\/(?<topicFilter>[^:/?]+)$/;
const TunnelArnRegex =
	/^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):tunnel\/(?<tunnelId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iot resources.
 */
export class IotResources {
	/**
	 * Builds an ARN for the authorizer resource.
	 */
	static authorizer(props: IotAuthorizerArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:authorizer/${props.authorizerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the authorizer resource.
	 */
	static isValidAuthorizerArn(arn: string): boolean {
		return AuthorizerArnRegex.test(arn);
	}

	/**
	 * Parses a authorizer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAuthorizerArn(arn: string): IotAuthorizerArnComponents {
		const match = AuthorizerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid authorizer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			authorizerName: match.groups!.authorizerName,
		};
	}

	/**
	 * Builds an ARN for the billinggroup resource.
	 */
	static billinggroup(props: IotBillinggroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:billinggroup/${props.billingGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the billinggroup resource.
	 */
	static isValidBillinggroupArn(arn: string): boolean {
		return BillinggroupArnRegex.test(arn);
	}

	/**
	 * Parses a billinggroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillinggroupArn(arn: string): IotBillinggroupArnComponents {
		const match = BillinggroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid billinggroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			billingGroupName: match.groups!.billingGroupName,
		};
	}

	/**
	 * Builds an ARN for the cacert resource.
	 */
	static cacert(props: IotCacertArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:cacert/${props.caCertificate}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cacert resource.
	 */
	static isValidCacertArn(arn: string): boolean {
		return CacertArnRegex.test(arn);
	}

	/**
	 * Parses a cacert ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCacertArn(arn: string): IotCacertArnComponents {
		const match = CacertArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cacert ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			caCertificate: match.groups!.caCertificate,
		};
	}

	/**
	 * Builds an ARN for the cert resource.
	 */
	static cert(props: IotCertArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:cert/${props.certificate}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cert resource.
	 */
	static isValidCertArn(arn: string): boolean {
		return CertArnRegex.test(arn);
	}

	/**
	 * Parses a cert ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertArn(arn: string): IotCertArnComponents {
		const match = CertArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cert ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			certificate: match.groups!.certificate,
		};
	}

	/**
	 * Builds an ARN for the certificateprovider resource.
	 */
	static certificateprovider(props: IotCertificateproviderArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:certificateprovider/${props.certificateProviderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the certificateprovider resource.
	 */
	static isValidCertificateproviderArn(arn: string): boolean {
		return CertificateproviderArnRegex.test(arn);
	}

	/**
	 * Parses a certificateprovider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateproviderArn(
		arn: string,
	): IotCertificateproviderArnComponents {
		const match = CertificateproviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid certificateprovider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			certificateProviderName: match.groups!.certificateProviderName,
		};
	}

	/**
	 * Builds an ARN for the client resource.
	 */
	static client(props: IotClientArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:client/${props.clientId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the client resource.
	 */
	static isValidClientArn(arn: string): boolean {
		return ClientArnRegex.test(arn);
	}

	/**
	 * Parses a client ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClientArn(arn: string): IotClientArnComponents {
		const match = ClientArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid client ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clientId: match.groups!.clientId,
		};
	}

	/**
	 * Builds an ARN for the command resource.
	 */
	static command(props: IotCommandArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:command/${props.commandId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the command resource.
	 */
	static isValidCommandArn(arn: string): boolean {
		return CommandArnRegex.test(arn);
	}

	/**
	 * Parses a command ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCommandArn(arn: string): IotCommandArnComponents {
		const match = CommandArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid command ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			commandId: match.groups!.commandId,
		};
	}

	/**
	 * Builds an ARN for the custommetric resource.
	 */
	static custommetric(props: IotCustommetricArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:custommetric/${props.metricName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the custommetric resource.
	 */
	static isValidCustommetricArn(arn: string): boolean {
		return CustommetricArnRegex.test(arn);
	}

	/**
	 * Parses a custommetric ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustommetricArn(arn: string): IotCustommetricArnComponents {
		const match = CustommetricArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid custommetric ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			metricName: match.groups!.metricName,
		};
	}

	/**
	 * Builds an ARN for the destination resource.
	 */
	static destination(props: IotDestinationArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:ruledestination/${props.destinationType}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the destination resource.
	 */
	static isValidDestinationArn(arn: string): boolean {
		return DestinationArnRegex.test(arn);
	}

	/**
	 * Parses a destination ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDestinationArn(arn: string): IotDestinationArnComponents {
		const match = DestinationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid destination ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			destinationType: match.groups!.destinationType,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the dimension resource.
	 */
	static dimension(props: IotDimensionArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:dimension/${props.dimensionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dimension resource.
	 */
	static isValidDimensionArn(arn: string): boolean {
		return DimensionArnRegex.test(arn);
	}

	/**
	 * Parses a dimension ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDimensionArn(arn: string): IotDimensionArnComponents {
		const match = DimensionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dimension ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dimensionName: match.groups!.dimensionName,
		};
	}

	/**
	 * Builds an ARN for the domainconfiguration resource.
	 */
	static domainconfiguration(props: IotDomainconfigurationArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:domainconfiguration/${props.domainConfigurationName}/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domainconfiguration resource.
	 */
	static isValidDomainconfigurationArn(arn: string): boolean {
		return DomainconfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a domainconfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainconfigurationArn(
		arn: string,
	): IotDomainconfigurationArnComponents {
		const match = DomainconfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domainconfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainConfigurationName: match.groups!.domainConfigurationName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the dynamicthinggroup resource.
	 */
	static dynamicthinggroup(props: IotDynamicthinggroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:thinggroup/${props.thingGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dynamicthinggroup resource.
	 */
	static isValidDynamicthinggroupArn(arn: string): boolean {
		return DynamicthinggroupArnRegex.test(arn);
	}

	/**
	 * Parses a dynamicthinggroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDynamicthinggroupArn(
		arn: string,
	): IotDynamicthinggroupArnComponents {
		const match = DynamicthinggroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dynamicthinggroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingGroupName: match.groups!.thingGroupName,
		};
	}

	/**
	 * Builds an ARN for the fleetmetric resource.
	 */
	static fleetmetric(props: IotFleetmetricArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:fleetmetric/${props.fleetMetricName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fleetmetric resource.
	 */
	static isValidFleetmetricArn(arn: string): boolean {
		return FleetmetricArnRegex.test(arn);
	}

	/**
	 * Parses a fleetmetric ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFleetmetricArn(arn: string): IotFleetmetricArnComponents {
		const match = FleetmetricArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fleetmetric ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fleetMetricName: match.groups!.fleetMetricName,
		};
	}

	/**
	 * Builds an ARN for the index resource.
	 */
	static index(props: IotIndexArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the index resource.
	 */
	static isValidIndexArn(arn: string): boolean {
		return IndexArnRegex.test(arn);
	}

	/**
	 * Parses a index ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIndexArn(arn: string): IotIndexArnComponents {
		const match = IndexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid index ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexName: match.groups!.indexName,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: IotJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): IotJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the jobtemplate resource.
	 */
	static jobtemplate(props: IotJobtemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:jobtemplate/${props.jobTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the jobtemplate resource.
	 */
	static isValidJobtemplateArn(arn: string): boolean {
		return JobtemplateArnRegex.test(arn);
	}

	/**
	 * Parses a jobtemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobtemplateArn(arn: string): IotJobtemplateArnComponents {
		const match = JobtemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid jobtemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobTemplateId: match.groups!.jobTemplateId,
		};
	}

	/**
	 * Builds an ARN for the mitigationaction resource.
	 */
	static mitigationaction(props: IotMitigationactionArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:mitigationaction/${props.mitigationActionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the mitigationaction resource.
	 */
	static isValidMitigationactionArn(arn: string): boolean {
		return MitigationactionArnRegex.test(arn);
	}

	/**
	 * Parses a mitigationaction ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMitigationactionArn(
		arn: string,
	): IotMitigationactionArnComponents {
		const match = MitigationactionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid mitigationaction ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			mitigationActionName: match.groups!.mitigationActionName,
		};
	}

	/**
	 * Builds an ARN for the otaupdate resource.
	 */
	static otaupdate(props: IotOtaupdateArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:otaupdate/${props.otaUpdateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the otaupdate resource.
	 */
	static isValidOtaupdateArn(arn: string): boolean {
		return OtaupdateArnRegex.test(arn);
	}

	/**
	 * Parses a otaupdate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOtaupdateArn(arn: string): IotOtaupdateArnComponents {
		const match = OtaupdateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid otaupdate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			otaUpdateId: match.groups!.otaUpdateId,
		};
	}

	/**
	 * Builds an ARN for the package resource.
	 */
	static package(props: IotPackageArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:package/${props.packageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the package resource.
	 */
	static isValidPackageArn(arn: string): boolean {
		return PackageArnRegex.test(arn);
	}

	/**
	 * Parses a package ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackageArn(arn: string): IotPackageArnComponents {
		const match = PackageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid package ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			packageName: match.groups!.packageName,
		};
	}

	/**
	 * Builds an ARN for the packageversion resource.
	 */
	static packageversion(props: IotPackageversionArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:package/${props.packageName}/version/${props.versionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the packageversion resource.
	 */
	static isValidPackageversionArn(arn: string): boolean {
		return PackageversionArnRegex.test(arn);
	}

	/**
	 * Parses a packageversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackageversionArn(arn: string): IotPackageversionArnComponents {
		const match = PackageversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid packageversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			packageName: match.groups!.packageName,
			versionName: match.groups!.versionName,
		};
	}

	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: IotPolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:policy/${props.policyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the policy resource.
	 */
	static isValidPolicyArn(arn: string): boolean {
		return PolicyArnRegex.test(arn);
	}

	/**
	 * Parses a policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePolicyArn(arn: string): IotPolicyArnComponents {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyName: match.groups!.policyName,
		};
	}

	/**
	 * Builds an ARN for the provisioningtemplate resource.
	 */
	static provisioningtemplate(props: IotProvisioningtemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:provisioningtemplate/${props.provisioningTemplate}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the provisioningtemplate resource.
	 */
	static isValidProvisioningtemplateArn(arn: string): boolean {
		return ProvisioningtemplateArnRegex.test(arn);
	}

	/**
	 * Parses a provisioningtemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProvisioningtemplateArn(
		arn: string,
	): IotProvisioningtemplateArnComponents {
		const match = ProvisioningtemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid provisioningtemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			provisioningTemplate: match.groups!.provisioningTemplate,
		};
	}

	/**
	 * Builds an ARN for the rolealias resource.
	 */
	static rolealias(props: IotRolealiasArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:rolealias/${props.roleAlias}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rolealias resource.
	 */
	static isValidRolealiasArn(arn: string): boolean {
		return RolealiasArnRegex.test(arn);
	}

	/**
	 * Parses a rolealias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRolealiasArn(arn: string): IotRolealiasArnComponents {
		const match = RolealiasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rolealias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			roleAlias: match.groups!.roleAlias,
		};
	}

	/**
	 * Builds an ARN for the rule resource.
	 */
	static rule(props: IotRuleArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:rule/${props.ruleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule resource.
	 */
	static isValidRuleArn(arn: string): boolean {
		return RuleArnRegex.test(arn);
	}

	/**
	 * Parses a rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleArn(arn: string): IotRuleArnComponents {
		const match = RuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ruleName: match.groups!.ruleName,
		};
	}

	/**
	 * Builds an ARN for the scheduledaudit resource.
	 */
	static scheduledaudit(props: IotScheduledauditArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:scheduledaudit/${props.scheduleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scheduledaudit resource.
	 */
	static isValidScheduledauditArn(arn: string): boolean {
		return ScheduledauditArnRegex.test(arn);
	}

	/**
	 * Parses a scheduledaudit ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScheduledauditArn(arn: string): IotScheduledauditArnComponents {
		const match = ScheduledauditArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scheduledaudit ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scheduleName: match.groups!.scheduleName,
		};
	}

	/**
	 * Builds an ARN for the securityprofile resource.
	 */
	static securityprofile(props: IotSecurityprofileArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:securityprofile/${props.securityProfileName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the securityprofile resource.
	 */
	static isValidSecurityprofileArn(arn: string): boolean {
		return SecurityprofileArnRegex.test(arn);
	}

	/**
	 * Parses a securityprofile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecurityprofileArn(arn: string): IotSecurityprofileArnComponents {
		const match = SecurityprofileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid securityprofile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			securityProfileName: match.groups!.securityProfileName,
		};
	}

	/**
	 * Builds an ARN for the stream resource.
	 */
	static stream(props: IotStreamArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:stream/${props.streamId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stream resource.
	 */
	static isValidStreamArn(arn: string): boolean {
		return StreamArnRegex.test(arn);
	}

	/**
	 * Parses a stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamArn(arn: string): IotStreamArnComponents {
		const match = StreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamId: match.groups!.streamId,
		};
	}

	/**
	 * Builds an ARN for the thing resource.
	 */
	static thing(props: IotThingArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:thing/${props.thingName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the thing resource.
	 */
	static isValidThingArn(arn: string): boolean {
		return ThingArnRegex.test(arn);
	}

	/**
	 * Parses a thing ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThingArn(arn: string): IotThingArnComponents {
		const match = ThingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid thing ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingName: match.groups!.thingName,
		};
	}

	/**
	 * Builds an ARN for the thinggroup resource.
	 */
	static thinggroup(props: IotThinggroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:thinggroup/${props.thingGroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the thinggroup resource.
	 */
	static isValidThinggroupArn(arn: string): boolean {
		return ThinggroupArnRegex.test(arn);
	}

	/**
	 * Parses a thinggroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThinggroupArn(arn: string): IotThinggroupArnComponents {
		const match = ThinggroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid thinggroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingGroupName: match.groups!.thingGroupName,
		};
	}

	/**
	 * Builds an ARN for the thingtype resource.
	 */
	static thingtype(props: IotThingtypeArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:thingtype/${props.thingTypeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the thingtype resource.
	 */
	static isValidThingtypeArn(arn: string): boolean {
		return ThingtypeArnRegex.test(arn);
	}

	/**
	 * Parses a thingtype ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThingtypeArn(arn: string): IotThingtypeArnComponents {
		const match = ThingtypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid thingtype ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			thingTypeName: match.groups!.thingTypeName,
		};
	}

	/**
	 * Builds an ARN for the topic resource.
	 */
	static topic(props: IotTopicArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:topic/${props.topicName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the topic resource.
	 */
	static isValidTopicArn(arn: string): boolean {
		return TopicArnRegex.test(arn);
	}

	/**
	 * Parses a topic ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTopicArn(arn: string): IotTopicArnComponents {
		const match = TopicArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid topic ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			topicName: match.groups!.topicName,
		};
	}

	/**
	 * Builds an ARN for the topicfilter resource.
	 */
	static topicfilter(props: IotTopicfilterArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:topicfilter/${props.topicFilter}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the topicfilter resource.
	 */
	static isValidTopicfilterArn(arn: string): boolean {
		return TopicfilterArnRegex.test(arn);
	}

	/**
	 * Parses a topicfilter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTopicfilterArn(arn: string): IotTopicfilterArnComponents {
		const match = TopicfilterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid topicfilter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			topicFilter: match.groups!.topicFilter,
		};
	}

	/**
	 * Builds an ARN for the tunnel resource.
	 */
	static tunnel(props: IotTunnelArnProps): string {
		return `arn:${props.partition ?? "aws"}:iot:${props.region ?? "*"}:${props.account ?? "*"}:tunnel/${props.tunnelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tunnel resource.
	 */
	static isValidTunnelArn(arn: string): boolean {
		return TunnelArnRegex.test(arn);
	}

	/**
	 * Parses a tunnel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTunnelArn(arn: string): IotTunnelArnComponents {
		const match = TunnelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tunnel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			tunnelId: match.groups!.tunnelId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for iot.
 */
export class IotOperations {
	/** IAM actions required for the AcceptCertificateTransfer API call. */
	static readonly AcceptCertificateTransfer: string[] = [
		"iot:AcceptCertificateTransfer",
	];
	/** IAM actions required for the AddThingToBillingGroup API call. */
	static readonly AddThingToBillingGroup: string[] = [
		"iot:AddThingToBillingGroup",
	];
	/** IAM actions required for the AddThingToThingGroup API call. */
	static readonly AddThingToThingGroup: string[] = ["iot:AddThingToThingGroup"];
	/** IAM actions required for the AssociateSbomWithPackageVersion API call. */
	static readonly AssociateSbomWithPackageVersion: string[] = [
		"iot:AssociateSbomWithPackageVersion",
	];
	/** IAM actions required for the AssociateTargetsWithJob API call. */
	static readonly AssociateTargetsWithJob: string[] = [
		"iot:AssociateTargetsWithJob",
	];
	/** IAM actions required for the AttachPolicy API call. */
	static readonly AttachPolicy: string[] = ["iot:AttachPolicy"];
	/** IAM actions required for the AttachPrincipalPolicy API call. */
	static readonly AttachPrincipalPolicy: string[] = [
		"iot:AttachPrincipalPolicy",
	];
	/** IAM actions required for the AttachSecurityProfile API call. */
	static readonly AttachSecurityProfile: string[] = [
		"iot:AttachSecurityProfile",
	];
	/** IAM actions required for the AttachThingPrincipal API call. */
	static readonly AttachThingPrincipal: string[] = ["iot:AttachThingPrincipal"];
	/** IAM actions required for the CancelAuditMitigationActionsTask API call. */
	static readonly CancelAuditMitigationActionsTask: string[] = [
		"iot:CancelAuditMitigationActionsTask",
	];
	/** IAM actions required for the CancelAuditTask API call. */
	static readonly CancelAuditTask: string[] = ["iot:CancelAuditTask"];
	/** IAM actions required for the CancelCertificateTransfer API call. */
	static readonly CancelCertificateTransfer: string[] = [
		"iot:CancelCertificateTransfer",
	];
	/** IAM actions required for the CancelDetectMitigationActionsTask API call. */
	static readonly CancelDetectMitigationActionsTask: string[] = [
		"iot:CancelDetectMitigationActionsTask",
	];
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = ["iot:CancelJob"];
	/** IAM actions required for the CancelJobExecution API call. */
	static readonly CancelJobExecution: string[] = ["iot:CancelJobExecution"];
	/** IAM actions required for the ClearDefaultAuthorizer API call. */
	static readonly ClearDefaultAuthorizer: string[] = [
		"iot:ClearDefaultAuthorizer",
	];
	/** IAM actions required for the CloseTunnel API call. */
	static readonly CloseTunnel: string[] = ["iot:CloseTunnel"];
	/** IAM actions required for the ConfirmTopicRuleDestination API call. */
	static readonly ConfirmTopicRuleDestination: string[] = [];
	/** IAM actions required for the CreateAuditSuppression API call. */
	static readonly CreateAuditSuppression: string[] = [
		"iot:CreateAuditSuppression",
	];
	/** IAM actions required for the CreateAuthorizer API call. */
	static readonly CreateAuthorizer: string[] = [
		"iot:CreateAuthorizer",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateBillingGroup API call. */
	static readonly CreateBillingGroup: string[] = [
		"iot:CreateBillingGroup",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateCertificateFromCsr API call. */
	static readonly CreateCertificateFromCsr: string[] = [
		"iot:CreateCertificateFromCsr",
	];
	/** IAM actions required for the CreateCertificateProvider API call. */
	static readonly CreateCertificateProvider: string[] = [
		"iot:CreateCertificateProvider",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateCommand API call. */
	static readonly CreateCommand: string[] = [
		"iot:CreateCommand",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateCustomMetric API call. */
	static readonly CreateCustomMetric: string[] = [
		"iot:CreateCustomMetric",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateDimension API call. */
	static readonly CreateDimension: string[] = [
		"iot:CreateDimension",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateDomainConfiguration API call. */
	static readonly CreateDomainConfiguration: string[] = [
		"iot:CreateDomainConfiguration",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateDynamicThingGroup API call. */
	static readonly CreateDynamicThingGroup: string[] = [
		"iot:CreateDynamicThingGroup",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateFleetMetric API call. */
	static readonly CreateFleetMetric: string[] = [
		"iot:CreateFleetMetric",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [
		"iot:CreateJob",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateJobTemplate API call. */
	static readonly CreateJobTemplate: string[] = [
		"iot:CreateJobTemplate",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateKeysAndCertificate API call. */
	static readonly CreateKeysAndCertificate: string[] = [
		"iot:CreateKeysAndCertificate",
	];
	/** IAM actions required for the CreateMitigationAction API call. */
	static readonly CreateMitigationAction: string[] = [
		"iot:CreateMitigationAction",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateOTAUpdate API call. */
	static readonly CreateOTAUpdate: string[] = [
		"iot:CreateOTAUpdate",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePackage API call. */
	static readonly CreatePackage: string[] = [
		"iot:CreatePackage",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePackageVersion API call. */
	static readonly CreatePackageVersion: string[] = [
		"iot:CreatePackageVersion",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CreatePolicy: string[] = [
		"iot:CreatePolicy",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePolicyVersion API call. */
	static readonly CreatePolicyVersion: string[] = ["iot:CreatePolicyVersion"];
	/** IAM actions required for the CreateProvisioningClaim API call. */
	static readonly CreateProvisioningClaim: string[] = [
		"iot:CreateProvisioningClaim",
	];
	/** IAM actions required for the CreateProvisioningTemplate API call. */
	static readonly CreateProvisioningTemplate: string[] = [
		"iot:CreateProvisioningTemplate",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateProvisioningTemplateVersion API call. */
	static readonly CreateProvisioningTemplateVersion: string[] = [
		"iot:CreateProvisioningTemplateVersion",
	];
	/** IAM actions required for the CreateRoleAlias API call. */
	static readonly CreateRoleAlias: string[] = [
		"iot:CreateRoleAlias",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateScheduledAudit API call. */
	static readonly CreateScheduledAudit: string[] = [
		"iot:CreateScheduledAudit",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateSecurityProfile API call. */
	static readonly CreateSecurityProfile: string[] = [
		"iot:CreateSecurityProfile",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateStream API call. */
	static readonly CreateStream: string[] = [
		"iot:CreateStream",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateThing API call. */
	static readonly CreateThing: string[] = ["iot:CreateThing"];
	/** IAM actions required for the CreateThingGroup API call. */
	static readonly CreateThingGroup: string[] = [
		"iot:CreateThingGroup",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateThingType API call. */
	static readonly CreateThingType: string[] = [
		"iot:CreateThingType",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateTopicRule API call. */
	static readonly CreateTopicRule: string[] = [
		"iot:CreateTopicRule",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateTopicRuleDestination API call. */
	static readonly CreateTopicRuleDestination: string[] = [
		"iot:CreateTopicRuleDestination",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteAccountAuditConfiguration API call. */
	static readonly DeleteAccountAuditConfiguration: string[] = [
		"iot:DeleteAccountAuditConfiguration",
	];
	/** IAM actions required for the DeleteAuditSuppression API call. */
	static readonly DeleteAuditSuppression: string[] = [
		"iot:DeleteAuditSuppression",
	];
	/** IAM actions required for the DeleteAuthorizer API call. */
	static readonly DeleteAuthorizer: string[] = ["iot:DeleteAuthorizer"];
	/** IAM actions required for the DeleteBillingGroup API call. */
	static readonly DeleteBillingGroup: string[] = ["iot:DeleteBillingGroup"];
	/** IAM actions required for the DeleteCACertificate API call. */
	static readonly DeleteCACertificate: string[] = ["iot:DeleteCACertificate"];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DeleteCertificate: string[] = ["iot:DeleteCertificate"];
	/** IAM actions required for the DeleteCertificateProvider API call. */
	static readonly DeleteCertificateProvider: string[] = [
		"iot:DeleteCertificateProvider",
	];
	/** IAM actions required for the DeleteCommand API call. */
	static readonly DeleteCommand: string[] = ["iot:DeleteCommand"];
	/** IAM actions required for the DeleteCommandExecution API call. */
	static readonly DeleteCommandExecution: string[] = [
		"iot:DeleteCommandExecution",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = [];
	/** IAM actions required for the DeleteCustomMetric API call. */
	static readonly DeleteCustomMetric: string[] = ["iot:DeleteCustomMetric"];
	/** IAM actions required for the DeleteDimension API call. */
	static readonly DeleteDimension: string[] = ["iot:DeleteDimension"];
	/** IAM actions required for the DeleteDomainConfiguration API call. */
	static readonly DeleteDomainConfiguration: string[] = [
		"iot:DeleteDomainConfiguration",
	];
	/** IAM actions required for the DeleteDynamicThingGroup API call. */
	static readonly DeleteDynamicThingGroup: string[] = [
		"iot:DeleteDynamicThingGroup",
	];
	/** IAM actions required for the DeleteFleetMetric API call. */
	static readonly DeleteFleetMetric: string[] = ["iot:DeleteFleetMetric"];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DeleteJob: string[] = ["iot:DeleteJob"];
	/** IAM actions required for the DeleteJobExecution API call. */
	static readonly DeleteJobExecution: string[] = ["iot:DeleteJobExecution"];
	/** IAM actions required for the DeleteJobTemplate API call. */
	static readonly DeleteJobTemplate: string[] = ["iot:DeleteJobTemplate"];
	/** IAM actions required for the DeleteMitigationAction API call. */
	static readonly DeleteMitigationAction: string[] = [
		"iot:DeleteMitigationAction",
	];
	/** IAM actions required for the DeleteOTAUpdate API call. */
	static readonly DeleteOTAUpdate: string[] = ["iot:DeleteOTAUpdate"];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DeletePackage: string[] = ["iot:DeletePackage"];
	/** IAM actions required for the DeletePackageVersion API call. */
	static readonly DeletePackageVersion: string[] = ["iot:DeletePackageVersion"];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["iot:DeletePolicy"];
	/** IAM actions required for the DeletePolicyVersion API call. */
	static readonly DeletePolicyVersion: string[] = ["iot:DeletePolicyVersion"];
	/** IAM actions required for the DeleteProvisioningTemplate API call. */
	static readonly DeleteProvisioningTemplate: string[] = [
		"iot:DeleteProvisioningTemplate",
	];
	/** IAM actions required for the DeleteProvisioningTemplateVersion API call. */
	static readonly DeleteProvisioningTemplateVersion: string[] = [
		"iot:DeleteProvisioningTemplateVersion",
	];
	/** IAM actions required for the DeleteRegistrationCode API call. */
	static readonly DeleteRegistrationCode: string[] = [
		"iot:DeleteRegistrationCode",
	];
	/** IAM actions required for the DeleteRoleAlias API call. */
	static readonly DeleteRoleAlias: string[] = ["iot:DeleteRoleAlias"];
	/** IAM actions required for the DeleteScheduledAudit API call. */
	static readonly DeleteScheduledAudit: string[] = ["iot:DeleteScheduledAudit"];
	/** IAM actions required for the DeleteSecurityProfile API call. */
	static readonly DeleteSecurityProfile: string[] = [
		"iot:DeleteSecurityProfile",
	];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DeleteStream: string[] = ["iot:DeleteStream"];
	/** IAM actions required for the DeleteThing API call. */
	static readonly DeleteThing: string[] = ["iot:DeleteThing"];
	/** IAM actions required for the DeleteThingGroup API call. */
	static readonly DeleteThingGroup: string[] = ["iot:DeleteThingGroup"];
	/** IAM actions required for the DeleteThingShadow API call. */
	static readonly DeleteThingShadow: string[] = [];
	/** IAM actions required for the DeleteThingType API call. */
	static readonly DeleteThingType: string[] = ["iot:DeleteThingType"];
	/** IAM actions required for the DeleteTopicRule API call. */
	static readonly DeleteTopicRule: string[] = ["iot:DeleteTopicRule"];
	/** IAM actions required for the DeleteTopicRuleDestination API call. */
	static readonly DeleteTopicRuleDestination: string[] = [
		"iot:DeleteTopicRuleDestination",
	];
	/** IAM actions required for the DeleteV2LoggingLevel API call. */
	static readonly DeleteV2LoggingLevel: string[] = ["iot:DeleteV2LoggingLevel"];
	/** IAM actions required for the DeprecateThingType API call. */
	static readonly DeprecateThingType: string[] = ["iot:DeprecateThingType"];
	/** IAM actions required for the DescribeAccountAuditConfiguration API call. */
	static readonly DescribeAccountAuditConfiguration: string[] = [
		"iot:DescribeAccountAuditConfiguration",
	];
	/** IAM actions required for the DescribeAuditFinding API call. */
	static readonly DescribeAuditFinding: string[] = ["iot:DescribeAuditFinding"];
	/** IAM actions required for the DescribeAuditMitigationActionsTask API call. */
	static readonly DescribeAuditMitigationActionsTask: string[] = [
		"iot:DescribeAuditMitigationActionsTask",
	];
	/** IAM actions required for the DescribeAuditSuppression API call. */
	static readonly DescribeAuditSuppression: string[] = [
		"iot:DescribeAuditSuppression",
	];
	/** IAM actions required for the DescribeAuditTask API call. */
	static readonly DescribeAuditTask: string[] = ["iot:DescribeAuditTask"];
	/** IAM actions required for the DescribeAuthorizer API call. */
	static readonly DescribeAuthorizer: string[] = ["iot:DescribeAuthorizer"];
	/** IAM actions required for the DescribeBillingGroup API call. */
	static readonly DescribeBillingGroup: string[] = ["iot:DescribeBillingGroup"];
	/** IAM actions required for the DescribeCACertificate API call. */
	static readonly DescribeCACertificate: string[] = [
		"iot:DescribeCACertificate",
	];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DescribeCertificate: string[] = ["iot:DescribeCertificate"];
	/** IAM actions required for the DescribeCertificateProvider API call. */
	static readonly DescribeCertificateProvider: string[] = [
		"iot:DescribeCertificateProvider",
	];
	/** IAM actions required for the DescribeCustomMetric API call. */
	static readonly DescribeCustomMetric: string[] = ["iot:DescribeCustomMetric"];
	/** IAM actions required for the DescribeDefaultAuthorizer API call. */
	static readonly DescribeDefaultAuthorizer: string[] = [
		"iot:DescribeDefaultAuthorizer",
	];
	/** IAM actions required for the DescribeDetectMitigationActionsTask API call. */
	static readonly DescribeDetectMitigationActionsTask: string[] = [
		"iot:DescribeDetectMitigationActionsTask",
	];
	/** IAM actions required for the DescribeDimension API call. */
	static readonly DescribeDimension: string[] = ["iot:DescribeDimension"];
	/** IAM actions required for the DescribeDomainConfiguration API call. */
	static readonly DescribeDomainConfiguration: string[] = [
		"iot:DescribeDomainConfiguration",
	];
	/** IAM actions required for the DescribeEncryptionConfiguration API call. */
	static readonly DescribeEncryptionConfiguration: string[] = [
		"iot:DescribeEncryptionConfiguration",
	];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DescribeEndpoint: string[] = ["iot:DescribeEndpoint"];
	/** IAM actions required for the DescribeEventConfigurations API call. */
	static readonly DescribeEventConfigurations: string[] = [
		"iot:DescribeEventConfigurations",
	];
	/** IAM actions required for the DescribeFleetMetric API call. */
	static readonly DescribeFleetMetric: string[] = ["iot:DescribeFleetMetric"];
	/** IAM actions required for the DescribeIndex API call. */
	static readonly DescribeIndex: string[] = ["iot:DescribeIndex"];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DescribeJob: string[] = ["iot:DescribeJob"];
	/** IAM actions required for the DescribeJobExecution API call. */
	static readonly DescribeJobExecution: string[] = ["iot:DescribeJobExecution"];
	/** IAM actions required for the DescribeJobTemplate API call. */
	static readonly DescribeJobTemplate: string[] = ["iot:DescribeJobTemplate"];
	/** IAM actions required for the DescribeManagedJobTemplate API call. */
	static readonly DescribeManagedJobTemplate: string[] = [
		"iot:DescribeManagedJobTemplate",
	];
	/** IAM actions required for the DescribeMitigationAction API call. */
	static readonly DescribeMitigationAction: string[] = [
		"iot:DescribeMitigationAction",
	];
	/** IAM actions required for the DescribeProvisioningTemplate API call. */
	static readonly DescribeProvisioningTemplate: string[] = [
		"iot:DescribeProvisioningTemplate",
	];
	/** IAM actions required for the DescribeProvisioningTemplateVersion API call. */
	static readonly DescribeProvisioningTemplateVersion: string[] = [
		"iot:DescribeProvisioningTemplateVersion",
	];
	/** IAM actions required for the DescribeRoleAlias API call. */
	static readonly DescribeRoleAlias: string[] = ["iot:DescribeRoleAlias"];
	/** IAM actions required for the DescribeScheduledAudit API call. */
	static readonly DescribeScheduledAudit: string[] = [
		"iot:DescribeScheduledAudit",
	];
	/** IAM actions required for the DescribeSecurityProfile API call. */
	static readonly DescribeSecurityProfile: string[] = [
		"iot:DescribeSecurityProfile",
	];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DescribeStream: string[] = ["iot:DescribeStream"];
	/** IAM actions required for the DescribeThing API call. */
	static readonly DescribeThing: string[] = ["iot:DescribeThing"];
	/** IAM actions required for the DescribeThingGroup API call. */
	static readonly DescribeThingGroup: string[] = ["iot:DescribeThingGroup"];
	/** IAM actions required for the DescribeThingRegistrationTask API call. */
	static readonly DescribeThingRegistrationTask: string[] = [
		"iot:DescribeThingRegistrationTask",
	];
	/** IAM actions required for the DescribeThingType API call. */
	static readonly DescribeThingType: string[] = ["iot:DescribeThingType"];
	/** IAM actions required for the DescribeTunnel API call. */
	static readonly DescribeTunnel: string[] = ["iot:DescribeTunnel"];
	/** IAM actions required for the DetachPolicy API call. */
	static readonly DetachPolicy: string[] = ["iot:DetachPolicy"];
	/** IAM actions required for the DetachPrincipalPolicy API call. */
	static readonly DetachPrincipalPolicy: string[] = [
		"iot:DetachPrincipalPolicy",
	];
	/** IAM actions required for the DetachSecurityProfile API call. */
	static readonly DetachSecurityProfile: string[] = [
		"iot:DetachSecurityProfile",
	];
	/** IAM actions required for the DetachThingPrincipal API call. */
	static readonly DetachThingPrincipal: string[] = ["iot:DetachThingPrincipal"];
	/** IAM actions required for the DisableTopicRule API call. */
	static readonly DisableTopicRule: string[] = ["iot:DisableTopicRule"];
	/** IAM actions required for the DisassociateSbomFromPackageVersion API call. */
	static readonly DisassociateSbomFromPackageVersion: string[] = [
		"iot:DisassociateSbomFromPackageVersion",
	];
	/** IAM actions required for the EnableTopicRule API call. */
	static readonly EnableTopicRule: string[] = ["iot:EnableTopicRule"];
	/** IAM actions required for the GetBehaviorModelTrainingSummaries API call. */
	static readonly opGetBehaviorModelTrainingSummaries: string[] = [
		"iot:GetBehaviorModelTrainingSummaries",
	];
	/** IAM actions required for the GetBucketsAggregation API call. */
	static readonly opGetBucketsAggregation: string[] = [
		"iot:GetBucketsAggregation",
	];
	/** IAM actions required for the GetCardinality API call. */
	static readonly opGetCardinality: string[] = ["iot:GetCardinality"];
	/** IAM actions required for the GetCommand API call. */
	static readonly opGetCommand: string[] = ["iot:GetCommand"];
	/** IAM actions required for the GetCommandExecution API call. */
	static readonly opGetCommandExecution: string[] = ["iot:GetCommandExecution"];
	/** IAM actions required for the GetConnection API call. */
	static readonly opGetConnection: string[] = [];
	/** IAM actions required for the GetEffectivePolicies API call. */
	static readonly opGetEffectivePolicies: string[] = [
		"iot:GetEffectivePolicies",
	];
	/** IAM actions required for the GetIndexingConfiguration API call. */
	static readonly opGetIndexingConfiguration: string[] = [
		"iot:GetIndexingConfiguration",
	];
	/** IAM actions required for the GetJobDocument API call. */
	static readonly opGetJobDocument: string[] = ["iot:GetJobDocument"];
	/** IAM actions required for the GetLoggingOptions API call. */
	static readonly opGetLoggingOptions: string[] = ["iot:GetLoggingOptions"];
	/** IAM actions required for the GetOTAUpdate API call. */
	static readonly opGetOTAUpdate: string[] = ["iot:GetOTAUpdate"];
	/** IAM actions required for the GetPackage API call. */
	static readonly opGetPackage: string[] = ["iot:GetPackage"];
	/** IAM actions required for the GetPackageConfiguration API call. */
	static readonly opGetPackageConfiguration: string[] = [
		"iot:GetPackageConfiguration",
	];
	/** IAM actions required for the GetPackageVersion API call. */
	static readonly opGetPackageVersion: string[] = ["iot:GetPackageVersion"];
	/** IAM actions required for the GetPercentiles API call. */
	static readonly opGetPercentiles: string[] = ["iot:GetPercentiles"];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["iot:GetPolicy"];
	/** IAM actions required for the GetPolicyVersion API call. */
	static readonly opGetPolicyVersion: string[] = ["iot:GetPolicyVersion"];
	/** IAM actions required for the GetRegistrationCode API call. */
	static readonly opGetRegistrationCode: string[] = ["iot:GetRegistrationCode"];
	/** IAM actions required for the GetRetainedMessage API call. */
	static readonly opGetRetainedMessage: string[] = [];
	/** IAM actions required for the GetStatistics API call. */
	static readonly opGetStatistics: string[] = ["iot:GetStatistics"];
	/** IAM actions required for the GetThingConnectivityData API call. */
	static readonly opGetThingConnectivityData: string[] = [
		"iot:GetThingConnectivityData",
	];
	/** IAM actions required for the GetThingShadow API call. */
	static readonly opGetThingShadow: string[] = [];
	/** IAM actions required for the GetTopicRule API call. */
	static readonly opGetTopicRule: string[] = ["iot:GetTopicRule"];
	/** IAM actions required for the GetTopicRuleDestination API call. */
	static readonly opGetTopicRuleDestination: string[] = [
		"iot:GetTopicRuleDestination",
	];
	/** IAM actions required for the GetV2LoggingOptions API call. */
	static readonly opGetV2LoggingOptions: string[] = ["iot:GetV2LoggingOptions"];
	/** IAM actions required for the ListActiveViolations API call. */
	static readonly ListActiveViolations: string[] = ["iot:ListActiveViolations"];
	/** IAM actions required for the ListAttachedPolicies API call. */
	static readonly ListAttachedPolicies: string[] = ["iot:ListAttachedPolicies"];
	/** IAM actions required for the ListAuditFindings API call. */
	static readonly ListAuditFindings: string[] = ["iot:ListAuditFindings"];
	/** IAM actions required for the ListAuditMitigationActionsExecutions API call. */
	static readonly ListAuditMitigationActionsExecutions: string[] = [
		"iot:ListAuditMitigationActionsExecutions",
	];
	/** IAM actions required for the ListAuditMitigationActionsTasks API call. */
	static readonly ListAuditMitigationActionsTasks: string[] = [
		"iot:ListAuditMitigationActionsTasks",
	];
	/** IAM actions required for the ListAuditSuppressions API call. */
	static readonly ListAuditSuppressions: string[] = [
		"iot:ListAuditSuppressions",
	];
	/** IAM actions required for the ListAuditTasks API call. */
	static readonly ListAuditTasks: string[] = ["iot:ListAuditTasks"];
	/** IAM actions required for the ListAuthorizers API call. */
	static readonly ListAuthorizers: string[] = ["iot:ListAuthorizers"];
	/** IAM actions required for the ListBillingGroups API call. */
	static readonly ListBillingGroups: string[] = ["iot:ListBillingGroups"];
	/** IAM actions required for the ListCACertificates API call. */
	static readonly ListCACertificates: string[] = ["iot:ListCACertificates"];
	/** IAM actions required for the ListCertificateProviders API call. */
	static readonly ListCertificateProviders: string[] = [
		"iot:ListCertificateProviders",
	];
	/** IAM actions required for the ListCertificates API call. */
	static readonly ListCertificates: string[] = ["iot:ListCertificates"];
	/** IAM actions required for the ListCertificatesByCA API call. */
	static readonly ListCertificatesByCA: string[] = ["iot:ListCertificatesByCA"];
	/** IAM actions required for the ListCommandExecutions API call. */
	static readonly ListCommandExecutions: string[] = [
		"iot:ListCommandExecutions",
	];
	/** IAM actions required for the ListCommands API call. */
	static readonly ListCommands: string[] = ["iot:ListCommands"];
	/** IAM actions required for the ListCustomMetrics API call. */
	static readonly ListCustomMetrics: string[] = ["iot:ListCustomMetrics"];
	/** IAM actions required for the ListDetectMitigationActionsExecutions API call. */
	static readonly ListDetectMitigationActionsExecutions: string[] = [
		"iot:ListDetectMitigationActionsExecutions",
	];
	/** IAM actions required for the ListDetectMitigationActionsTasks API call. */
	static readonly ListDetectMitigationActionsTasks: string[] = [
		"iot:ListDetectMitigationActionsTasks",
	];
	/** IAM actions required for the ListDimensions API call. */
	static readonly ListDimensions: string[] = ["iot:ListDimensions"];
	/** IAM actions required for the ListDomainConfigurations API call. */
	static readonly ListDomainConfigurations: string[] = [
		"iot:ListDomainConfigurations",
	];
	/** IAM actions required for the ListFleetMetrics API call. */
	static readonly ListFleetMetrics: string[] = ["iot:ListFleetMetrics"];
	/** IAM actions required for the ListIndices API call. */
	static readonly ListIndices: string[] = ["iot:ListIndices"];
	/** IAM actions required for the ListJobExecutionsForJob API call. */
	static readonly ListJobExecutionsForJob: string[] = [
		"iot:ListJobExecutionsForJob",
	];
	/** IAM actions required for the ListJobExecutionsForThing API call. */
	static readonly ListJobExecutionsForThing: string[] = [
		"iot:ListJobExecutionsForThing",
	];
	/** IAM actions required for the ListJobTemplates API call. */
	static readonly ListJobTemplates: string[] = ["iot:ListJobTemplates"];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["iot:ListJobs"];
	/** IAM actions required for the ListManagedJobTemplates API call. */
	static readonly ListManagedJobTemplates: string[] = [
		"iot:ListManagedJobTemplates",
	];
	/** IAM actions required for the ListMetricValues API call. */
	static readonly ListMetricValues: string[] = ["iot:ListMetricValues"];
	/** IAM actions required for the ListMitigationActions API call. */
	static readonly ListMitigationActions: string[] = [
		"iot:ListMitigationActions",
	];
	/** IAM actions required for the ListNamedShadowsForThing API call. */
	static readonly ListNamedShadowsForThing: string[] = [];
	/** IAM actions required for the ListOTAUpdates API call. */
	static readonly ListOTAUpdates: string[] = ["iot:ListOTAUpdates"];
	/** IAM actions required for the ListOutgoingCertificates API call. */
	static readonly ListOutgoingCertificates: string[] = [
		"iot:ListOutgoingCertificates",
	];
	/** IAM actions required for the ListPackageVersions API call. */
	static readonly ListPackageVersions: string[] = ["iot:ListPackageVersions"];
	/** IAM actions required for the ListPackages API call. */
	static readonly ListPackages: string[] = ["iot:ListPackages"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = ["iot:ListPolicies"];
	/** IAM actions required for the ListPolicyPrincipals API call. */
	static readonly ListPolicyPrincipals: string[] = ["iot:ListPolicyPrincipals"];
	/** IAM actions required for the ListPolicyVersions API call. */
	static readonly ListPolicyVersions: string[] = ["iot:ListPolicyVersions"];
	/** IAM actions required for the ListPrincipalPolicies API call. */
	static readonly ListPrincipalPolicies: string[] = [
		"iot:ListPrincipalPolicies",
	];
	/** IAM actions required for the ListPrincipalThings API call. */
	static readonly ListPrincipalThings: string[] = ["iot:ListPrincipalThings"];
	/** IAM actions required for the ListPrincipalThingsV2 API call. */
	static readonly ListPrincipalThingsV2: string[] = [
		"iot:ListPrincipalThingsV2",
	];
	/** IAM actions required for the ListProvisioningTemplateVersions API call. */
	static readonly ListProvisioningTemplateVersions: string[] = [
		"iot:ListProvisioningTemplateVersions",
	];
	/** IAM actions required for the ListProvisioningTemplates API call. */
	static readonly ListProvisioningTemplates: string[] = [
		"iot:ListProvisioningTemplates",
	];
	/** IAM actions required for the ListRelatedResourcesForAuditFinding API call. */
	static readonly ListRelatedResourcesForAuditFinding: string[] = [
		"iot:ListRelatedResourcesForAuditFinding",
	];
	/** IAM actions required for the ListRetainedMessages API call. */
	static readonly ListRetainedMessages: string[] = [];
	/** IAM actions required for the ListRoleAliases API call. */
	static readonly ListRoleAliases: string[] = ["iot:ListRoleAliases"];
	/** IAM actions required for the ListSbomValidationResults API call. */
	static readonly ListSbomValidationResults: string[] = [
		"iot:ListSbomValidationResults",
	];
	/** IAM actions required for the ListScheduledAudits API call. */
	static readonly ListScheduledAudits: string[] = ["iot:ListScheduledAudits"];
	/** IAM actions required for the ListSecurityProfiles API call. */
	static readonly ListSecurityProfiles: string[] = ["iot:ListSecurityProfiles"];
	/** IAM actions required for the ListSecurityProfilesForTarget API call. */
	static readonly ListSecurityProfilesForTarget: string[] = [
		"iot:ListSecurityProfilesForTarget",
	];
	/** IAM actions required for the ListStreams API call. */
	static readonly ListStreams: string[] = ["iot:ListStreams"];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly ListSubscriptions: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["iot:ListTagsForResource"];
	/** IAM actions required for the ListTargetsForPolicy API call. */
	static readonly ListTargetsForPolicy: string[] = ["iot:ListTargetsForPolicy"];
	/** IAM actions required for the ListTargetsForSecurityProfile API call. */
	static readonly ListTargetsForSecurityProfile: string[] = [
		"iot:ListTargetsForSecurityProfile",
	];
	/** IAM actions required for the ListThingGroups API call. */
	static readonly ListThingGroups: string[] = ["iot:ListThingGroups"];
	/** IAM actions required for the ListThingGroupsForThing API call. */
	static readonly ListThingGroupsForThing: string[] = [
		"iot:ListThingGroupsForThing",
	];
	/** IAM actions required for the ListThingPrincipals API call. */
	static readonly ListThingPrincipals: string[] = ["iot:ListThingPrincipals"];
	/** IAM actions required for the ListThingPrincipalsV2 API call. */
	static readonly ListThingPrincipalsV2: string[] = [
		"iot:ListThingPrincipalsV2",
	];
	/** IAM actions required for the ListThingRegistrationTaskReports API call. */
	static readonly ListThingRegistrationTaskReports: string[] = [
		"iot:ListThingRegistrationTaskReports",
	];
	/** IAM actions required for the ListThingRegistrationTasks API call. */
	static readonly ListThingRegistrationTasks: string[] = [
		"iot:ListThingRegistrationTasks",
	];
	/** IAM actions required for the ListThingTypes API call. */
	static readonly ListThingTypes: string[] = ["iot:ListThingTypes"];
	/** IAM actions required for the ListThings API call. */
	static readonly ListThings: string[] = ["iot:ListThings"];
	/** IAM actions required for the ListThingsInBillingGroup API call. */
	static readonly ListThingsInBillingGroup: string[] = [
		"iot:ListThingsInBillingGroup",
	];
	/** IAM actions required for the ListThingsInThingGroup API call. */
	static readonly ListThingsInThingGroup: string[] = [
		"iot:ListThingsInThingGroup",
	];
	/** IAM actions required for the ListTopicRuleDestinations API call. */
	static readonly ListTopicRuleDestinations: string[] = [
		"iot:ListTopicRuleDestinations",
	];
	/** IAM actions required for the ListTopicRules API call. */
	static readonly ListTopicRules: string[] = ["iot:ListTopicRules"];
	/** IAM actions required for the ListTunnels API call. */
	static readonly ListTunnels: string[] = ["iot:ListTunnels"];
	/** IAM actions required for the ListV2LoggingLevels API call. */
	static readonly ListV2LoggingLevels: string[] = ["iot:ListV2LoggingLevels"];
	/** IAM actions required for the ListViolationEvents API call. */
	static readonly ListViolationEvents: string[] = ["iot:ListViolationEvents"];
	/** IAM actions required for the OpenTunnel API call. */
	static readonly OpenTunnel: string[] = ["iot:OpenTunnel"];
	/** IAM actions required for the Publish API call. */
	static readonly Publish: string[] = [];
	/** IAM actions required for the PutVerificationStateOnViolation API call. */
	static readonly PutVerificationStateOnViolation: string[] = [
		"iot:PutVerificationStateOnViolation",
	];
	/** IAM actions required for the RegisterCACertificate API call. */
	static readonly RegisterCACertificate: string[] = [
		"iam:PassRole",
		"iot:RegisterCACertificate",
		"iot:TagResource",
	];
	/** IAM actions required for the RegisterCertificate API call. */
	static readonly RegisterCertificate: string[] = ["iot:RegisterCertificate"];
	/** IAM actions required for the RegisterCertificateWithoutCA API call. */
	static readonly RegisterCertificateWithoutCA: string[] = [
		"iot:RegisterCertificateWithoutCA",
	];
	/** IAM actions required for the RegisterThing API call. */
	static readonly RegisterThing: string[] = ["iot:RegisterThing"];
	/** IAM actions required for the RejectCertificateTransfer API call. */
	static readonly RejectCertificateTransfer: string[] = [
		"iot:RejectCertificateTransfer",
	];
	/** IAM actions required for the RemoveThingFromBillingGroup API call. */
	static readonly RemoveThingFromBillingGroup: string[] = [
		"iot:RemoveThingFromBillingGroup",
	];
	/** IAM actions required for the RemoveThingFromThingGroup API call. */
	static readonly RemoveThingFromThingGroup: string[] = [
		"iot:RemoveThingFromThingGroup",
	];
	/** IAM actions required for the ReplaceTopicRule API call. */
	static readonly ReplaceTopicRule: string[] = [
		"iam:PassRole",
		"iot:ReplaceTopicRule",
	];
	/** IAM actions required for the RotateTunnelAccessToken API call. */
	static readonly RotateTunnelAccessToken: string[] = [
		"iot:RotateTunnelAccessToken",
	];
	/** IAM actions required for the SearchIndex API call. */
	static readonly SearchIndex: string[] = ["iot:SearchIndex"];
	/** IAM actions required for the SendDirectMessage API call. */
	static readonly SendDirectMessage: string[] = [];
	/** IAM actions required for the SetDefaultAuthorizer API call. */
	static readonly opSetDefaultAuthorizer: string[] = [
		"iot:SetDefaultAuthorizer",
	];
	/** IAM actions required for the SetDefaultPolicyVersion API call. */
	static readonly opSetDefaultPolicyVersion: string[] = [
		"iot:SetDefaultPolicyVersion",
	];
	/** IAM actions required for the SetLoggingOptions API call. */
	static readonly opSetLoggingOptions: string[] = [
		"iam:PassRole",
		"iot:SetLoggingOptions",
	];
	/** IAM actions required for the SetV2LoggingLevel API call. */
	static readonly opSetV2LoggingLevel: string[] = ["iot:SetV2LoggingLevel"];
	/** IAM actions required for the SetV2LoggingOptions API call. */
	static readonly opSetV2LoggingOptions: string[] = [
		"iam:PassRole",
		"iot:SetV2LoggingOptions",
	];
	/** IAM actions required for the StartAuditMitigationActionsTask API call. */
	static readonly StartAuditMitigationActionsTask: string[] = [
		"iot:StartAuditMitigationActionsTask",
	];
	/** IAM actions required for the StartDetectMitigationActionsTask API call. */
	static readonly StartDetectMitigationActionsTask: string[] = [
		"iot:StartDetectMitigationActionsTask",
	];
	/** IAM actions required for the StartOnDemandAuditTask API call. */
	static readonly StartOnDemandAuditTask: string[] = [
		"iot:StartOnDemandAuditTask",
	];
	/** IAM actions required for the StartThingRegistrationTask API call. */
	static readonly StartThingRegistrationTask: string[] = [
		"iam:PassRole",
		"iot:StartThingRegistrationTask",
	];
	/** IAM actions required for the StopThingRegistrationTask API call. */
	static readonly StopThingRegistrationTask: string[] = [
		"iot:StopThingRegistrationTask",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["iot:TagResource"];
	/** IAM actions required for the TestAuthorization API call. */
	static readonly TestAuthorization: string[] = ["iot:TestAuthorization"];
	/** IAM actions required for the TestInvokeAuthorizer API call. */
	static readonly TestInvokeAuthorizer: string[] = ["iot:TestInvokeAuthorizer"];
	/** IAM actions required for the TransferCertificate API call. */
	static readonly TransferCertificate: string[] = ["iot:TransferCertificate"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["iot:UntagResource"];
	/** IAM actions required for the UpdateAccountAuditConfiguration API call. */
	static readonly UpdateAccountAuditConfiguration: string[] = [
		"iam:PassRole",
		"iot:UpdateAccountAuditConfiguration",
	];
	/** IAM actions required for the UpdateAuditSuppression API call. */
	static readonly UpdateAuditSuppression: string[] = [
		"iot:UpdateAuditSuppression",
	];
	/** IAM actions required for the UpdateAuthorizer API call. */
	static readonly UpdateAuthorizer: string[] = ["iot:UpdateAuthorizer"];
	/** IAM actions required for the UpdateBillingGroup API call. */
	static readonly UpdateBillingGroup: string[] = ["iot:UpdateBillingGroup"];
	/** IAM actions required for the UpdateCACertificate API call. */
	static readonly UpdateCACertificate: string[] = [
		"iam:PassRole",
		"iot:UpdateCACertificate",
	];
	/** IAM actions required for the UpdateCertificate API call. */
	static readonly UpdateCertificate: string[] = ["iot:UpdateCertificate"];
	/** IAM actions required for the UpdateCertificateProvider API call. */
	static readonly UpdateCertificateProvider: string[] = [
		"iot:UpdateCertificateProvider",
	];
	/** IAM actions required for the UpdateCommand API call. */
	static readonly UpdateCommand: string[] = ["iot:UpdateCommand"];
	/** IAM actions required for the UpdateCustomMetric API call. */
	static readonly UpdateCustomMetric: string[] = ["iot:UpdateCustomMetric"];
	/** IAM actions required for the UpdateDimension API call. */
	static readonly UpdateDimension: string[] = ["iot:UpdateDimension"];
	/** IAM actions required for the UpdateDomainConfiguration API call. */
	static readonly UpdateDomainConfiguration: string[] = [
		"iot:UpdateDomainConfiguration",
	];
	/** IAM actions required for the UpdateDynamicThingGroup API call. */
	static readonly UpdateDynamicThingGroup: string[] = [
		"iot:UpdateDynamicThingGroup",
	];
	/** IAM actions required for the UpdateEncryptionConfiguration API call. */
	static readonly UpdateEncryptionConfiguration: string[] = [
		"iam:PassRole",
		"iot:UpdateEncryptionConfiguration",
	];
	/** IAM actions required for the UpdateEventConfigurations API call. */
	static readonly UpdateEventConfigurations: string[] = [
		"iot:UpdateEventConfigurations",
	];
	/** IAM actions required for the UpdateFleetMetric API call. */
	static readonly UpdateFleetMetric: string[] = ["iot:UpdateFleetMetric"];
	/** IAM actions required for the UpdateIndexingConfiguration API call. */
	static readonly UpdateIndexingConfiguration: string[] = [
		"iot:UpdateIndexingConfiguration",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UpdateJob: string[] = ["iam:PassRole", "iot:UpdateJob"];
	/** IAM actions required for the UpdateMitigationAction API call. */
	static readonly UpdateMitigationAction: string[] = [
		"iam:PassRole",
		"iot:UpdateMitigationAction",
	];
	/** IAM actions required for the UpdatePackage API call. */
	static readonly UpdatePackage: string[] = ["iot:UpdatePackage"];
	/** IAM actions required for the UpdatePackageConfiguration API call. */
	static readonly UpdatePackageConfiguration: string[] = [
		"iam:PassRole",
		"iot:UpdatePackageConfiguration",
	];
	/** IAM actions required for the UpdatePackageVersion API call. */
	static readonly UpdatePackageVersion: string[] = ["iot:UpdatePackageVersion"];
	/** IAM actions required for the UpdateProvisioningTemplate API call. */
	static readonly UpdateProvisioningTemplate: string[] = [
		"iam:PassRole",
		"iot:UpdateProvisioningTemplate",
	];
	/** IAM actions required for the UpdateRoleAlias API call. */
	static readonly UpdateRoleAlias: string[] = [
		"iam:PassRole",
		"iot:UpdateRoleAlias",
	];
	/** IAM actions required for the UpdateScheduledAudit API call. */
	static readonly UpdateScheduledAudit: string[] = ["iot:UpdateScheduledAudit"];
	/** IAM actions required for the UpdateSecurityProfile API call. */
	static readonly UpdateSecurityProfile: string[] = [
		"iam:PassRole",
		"iot:UpdateSecurityProfile",
	];
	/** IAM actions required for the UpdateStream API call. */
	static readonly UpdateStream: string[] = ["iam:PassRole", "iot:UpdateStream"];
	/** IAM actions required for the UpdateThing API call. */
	static readonly UpdateThing: string[] = ["iot:UpdateThing"];
	/** IAM actions required for the UpdateThingGroup API call. */
	static readonly UpdateThingGroup: string[] = ["iot:UpdateThingGroup"];
	/** IAM actions required for the UpdateThingGroupsForThing API call. */
	static readonly UpdateThingGroupsForThing: string[] = [
		"iot:UpdateThingGroupsForThing",
	];
	/** IAM actions required for the UpdateThingShadow API call. */
	static readonly UpdateThingShadow: string[] = [];
	/** IAM actions required for the UpdateThingType API call. */
	static readonly UpdateThingType: string[] = ["iot:UpdateThingType"];
	/** IAM actions required for the UpdateTopicRuleDestination API call. */
	static readonly UpdateTopicRuleDestination: string[] = [
		"iot:UpdateTopicRuleDestination",
	];
	/** IAM actions required for the ValidateSecurityProfileBehaviors API call. */
	static readonly ValidateSecurityProfileBehaviors: string[] = [
		"iot:ValidateSecurityProfileBehaviors",
	];
}

/**
 * Condition key constants and builders for iot.
 */
export class IotConditions {
	/** Condition keys applicable to the AttachThingPrincipal action. */
	static readonly AttachThingPrincipalConditionKeys: string[] = [
		"iot:thingArn",
	];
	/** Condition keys applicable to the CloseTunnel action. */
	static readonly CloseTunnelConditionKeys: string[] = ["iot:Delete"];
	/** Condition keys applicable to the CreateAuthorizer action. */
	static readonly CreateAuthorizerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBillingGroup action. */
	static readonly CreateBillingGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCertificateProvider action. */
	static readonly CreateCertificateProviderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCommand action. */
	static readonly CreateCommandConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomMetric action. */
	static readonly CreateCustomMetricConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDimension action. */
	static readonly CreateDimensionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomainConfiguration action. */
	static readonly CreateDomainConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iot:DomainName",
	];
	/** Condition keys applicable to the CreateDynamicThingGroup action. */
	static readonly CreateDynamicThingGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleetMetric action. */
	static readonly CreateFleetMetricConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJobTemplate action. */
	static readonly CreateJobTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMitigationAction action. */
	static readonly CreateMitigationActionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOTAUpdate action. */
	static readonly CreateOTAUpdateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackage action. */
	static readonly CreatePackageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackageVersion action. */
	static readonly CreatePackageVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicy action. */
	static readonly CreatePolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProvisioningTemplate action. */
	static readonly CreateProvisioningTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoleAlias action. */
	static readonly CreateRoleAliasConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScheduledAudit action. */
	static readonly CreateScheduledAuditConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSecurityProfile action. */
	static readonly CreateSecurityProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStream action. */
	static readonly CreateStreamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThingGroup action. */
	static readonly CreateThingGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThingType action. */
	static readonly CreateThingTypeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTopicRule action. */
	static readonly CreateTopicRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DetachThingPrincipal action. */
	static readonly DetachThingPrincipalConditionKeys: string[] = [
		"iot:thingArn",
	];
	/** Condition keys applicable to the GetConnection action. */
	static readonly actionGetConnectionConditionKeys: string[] = [
		"iot:IncludeSocketInformation",
	];
	/** Condition keys applicable to the GetThingConnectivityData action. */
	static readonly actionGetThingConnectivityDataConditionKeys: string[] = [
		"iot:IncludeSocketInformation",
	];
	/** Condition keys applicable to the OpenTunnel action. */
	static readonly OpenTunnelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iot:ThingGroupArn",
		"iot:TunnelDestinationService",
	];
	/** Condition keys applicable to the RegisterCACertificate action. */
	static readonly RegisterCACertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RotateTunnelAccessToken action. */
	static readonly RotateTunnelAccessTokenConditionKeys: string[] = [
		"iot:ClientMode",
		"iot:ThingGroupArn",
		"iot:TunnelDestinationService",
	];
	/** Condition keys applicable to the SendDirectMessage action. */
	static readonly SendDirectMessageConditionKeys: string[] = ["iot:Topic"];
	/** Condition keys applicable to the StartCommandExecution action. */
	static readonly StartCommandExecutionConditionKeys: string[] = [
		"iot:CommandExecutionParameterBoolean/${CommandParameterName}",
		"iot:CommandExecutionParameterNumber/${CommandParameterName}",
		"iot:CommandExecutionParameterString/${CommandParameterName}",
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
	/** Condition key: iot:ClientMode (String) */
	static readonly CLIENT_MODE = "iot:ClientMode";
	/** Condition key: iot:CommandExecutionParameterBoolean/${CommandParameterName} (Bool) */
	static readonly COMMAND_EXECUTION_PARAMETER_BOOLEAN =
		"iot:CommandExecutionParameterBoolean/${CommandParameterName}";
	/** Condition key: iot:CommandExecutionParameterNumber/${CommandParameterName} (Numeric) */
	static readonly COMMAND_EXECUTION_PARAMETER_NUMBER =
		"iot:CommandExecutionParameterNumber/${CommandParameterName}";
	/** Condition key: iot:CommandExecutionParameterString/${CommandParameterName} (String) */
	static readonly COMMAND_EXECUTION_PARAMETER_STRING =
		"iot:CommandExecutionParameterString/${CommandParameterName}";
	/** Condition key: iot:Delete (Bool) */
	static readonly DELETE = "iot:Delete";
	/** Condition key: iot:DomainName (String) */
	static readonly DOMAIN_NAME = "iot:DomainName";
	/** Condition key: iot:IncludeSocketInformation (Bool) */
	static readonly INCLUDE_SOCKET_INFORMATION = "iot:IncludeSocketInformation";
	/** Condition key: iot:ThingGroupArn (ArrayOfARN) */
	static readonly THING_GROUP_ARN = "iot:ThingGroupArn";
	/** Condition key: iot:Topic (String) */
	static readonly TOPIC = "iot:Topic";
	/** Condition key: iot:TunnelDestinationService (ArrayOfString) */
	static readonly TUNNEL_DESTINATION_SERVICE = "iot:TunnelDestinationService";
	/** Condition key: iot:thingArn (ARN) */
	static readonly THING_ARN = "iot:thingArn";

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
	 * Generates a condition block for `iot:ClientMode`.
	 */
	static clientMode(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iot:ClientMode": value } };
	}

	/**
	 * Generates a condition block for `iot:CommandExecutionParameterBoolean/${CommandParameterName}`.
	 */
	static commandExecutionParameterBoolean(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return {
			Bool: {
				"iot:CommandExecutionParameterBoolean/${CommandParameterName}": value,
			},
		};
	}

	/**
	 * Generates a condition block for `iot:CommandExecutionParameterNumber/${CommandParameterName}`.
	 */
	static commandExecutionParameterNumber(
		value: number,
	): Record<string, Record<string, number>> {
		return {
			NumericEquals: {
				"iot:CommandExecutionParameterNumber/${CommandParameterName}": value,
			},
		};
	}

	/**
	 * Generates a condition block for `iot:CommandExecutionParameterString/${CommandParameterName}`.
	 */
	static commandExecutionParameterString(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"iot:CommandExecutionParameterString/${CommandParameterName}": value,
			},
		};
	}

	/**
	 * Generates a condition block for `iot:Delete`.
	 */
	static delete(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "iot:Delete": value } };
	}

	/**
	 * Generates a condition block for `iot:DomainName`.
	 */
	static domainName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iot:DomainName": value } };
	}

	/**
	 * Generates a condition block for `iot:IncludeSocketInformation`.
	 */
	static includeSocketInformation(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "iot:IncludeSocketInformation": value } };
	}

	/**
	 * Generates a condition block for `iot:ThingGroupArn`.
	 */
	static thingGroupARN(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "iot:ThingGroupArn": values } };
	}

	/**
	 * Generates a condition block for `iot:Topic`.
	 */
	static topic(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iot:Topic": value } };
	}

	/**
	 * Generates a condition block for `iot:TunnelDestinationService`.
	 */
	static tunnelDestinationService(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "iot:TunnelDestinationService": values },
		};
	}

	/**
	 * Generates a condition block for `iot:thingArn`.
	 */
	static thingARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "iot:thingArn": value } };
	}
}
