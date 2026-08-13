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
	static readonly ACCEPT_CERTIFICATE_TRANSFER = "iot:AcceptCertificateTransfer";
	/** [Write] iot:AddThingToBillingGroup */
	static readonly ADD_THING_TO_BILLING_GROUP = "iot:AddThingToBillingGroup";
	/** [Write] iot:AddThingToThingGroup */
	static readonly ADD_THING_TO_THING_GROUP = "iot:AddThingToThingGroup";
	/** [Write] iot:AssociateSbomWithPackageVersion */
	static readonly ASSOCIATE_SBOM_WITH_PACKAGE_VERSION =
		"iot:AssociateSbomWithPackageVersion";
	/** [Write] iot:AssociateTargetsWithJob */
	static readonly ASSOCIATE_TARGETS_WITH_JOB = "iot:AssociateTargetsWithJob";
	/** [PermissionManagement] iot:AttachPolicy */
	static readonly ATTACH_POLICY = "iot:AttachPolicy";
	/** [PermissionManagement] iot:AttachPrincipalPolicy */
	static readonly ATTACH_PRINCIPAL_POLICY = "iot:AttachPrincipalPolicy";
	/** [Write] iot:AttachSecurityProfile */
	static readonly ATTACH_SECURITY_PROFILE = "iot:AttachSecurityProfile";
	/** [Write] iot:AttachThingPrincipal */
	static readonly ATTACH_THING_PRINCIPAL = "iot:AttachThingPrincipal";
	/** [Write] iot:CancelAuditMitigationActionsTask */
	static readonly CANCEL_AUDIT_MITIGATION_ACTIONS_TASK =
		"iot:CancelAuditMitigationActionsTask";
	/** [Write] iot:CancelAuditTask */
	static readonly CANCEL_AUDIT_TASK = "iot:CancelAuditTask";
	/** [Write] iot:CancelCertificateTransfer */
	static readonly CANCEL_CERTIFICATE_TRANSFER = "iot:CancelCertificateTransfer";
	/** [Write] iot:CancelDetectMitigationActionsTask */
	static readonly CANCEL_DETECT_MITIGATION_ACTIONS_TASK =
		"iot:CancelDetectMitigationActionsTask";
	/** [Write] iot:CancelJob */
	static readonly CANCEL_JOB = "iot:CancelJob";
	/** [Write] iot:CancelJobExecution */
	static readonly CANCEL_JOB_EXECUTION = "iot:CancelJobExecution";
	/** [Write] iot:ClearDefaultAuthorizer */
	static readonly CLEAR_DEFAULT_AUTHORIZER = "iot:ClearDefaultAuthorizer";
	/** [Write] iot:CloseTunnel */
	static readonly CLOSE_TUNNEL = "iot:CloseTunnel";
	/** [Write] iot:ConfirmTopicRuleDestination */
	static readonly CONFIRM_TOPIC_RULE_DESTINATION =
		"iot:ConfirmTopicRuleDestination";
	/** [Write] iot:Connect */
	static readonly CONNECT = "iot:Connect";
	/** [Write] iot:CreateAuditSuppression */
	static readonly CREATE_AUDIT_SUPPRESSION = "iot:CreateAuditSuppression";
	/** [Write] iot:CreateAuthorizer */
	static readonly CREATE_AUTHORIZER = "iot:CreateAuthorizer";
	/** [Write] iot:CreateBillingGroup */
	static readonly CREATE_BILLING_GROUP = "iot:CreateBillingGroup";
	/** [Write] iot:CreateCertificateFromCsr */
	static readonly CREATE_CERTIFICATE_FROM_CSR = "iot:CreateCertificateFromCsr";
	/** [Write] iot:CreateCertificateProvider */
	static readonly CREATE_CERTIFICATE_PROVIDER = "iot:CreateCertificateProvider";
	/** [Write] iot:CreateCommand */
	static readonly CREATE_COMMAND = "iot:CreateCommand";
	/** [Write] iot:CreateCustomMetric */
	static readonly CREATE_CUSTOM_METRIC = "iot:CreateCustomMetric";
	/** [Write] iot:CreateDimension */
	static readonly CREATE_DIMENSION = "iot:CreateDimension";
	/** [Write] iot:CreateDomainConfiguration */
	static readonly CREATE_DOMAIN_CONFIGURATION = "iot:CreateDomainConfiguration";
	/** [Write] iot:CreateDynamicThingGroup */
	static readonly CREATE_DYNAMIC_THING_GROUP = "iot:CreateDynamicThingGroup";
	/** [Write] iot:CreateFleetMetric */
	static readonly CREATE_FLEET_METRIC = "iot:CreateFleetMetric";
	/** [Write] iot:CreateJob */
	static readonly CREATE_JOB = "iot:CreateJob";
	/** [Write] iot:CreateJobTemplate */
	static readonly CREATE_JOB_TEMPLATE = "iot:CreateJobTemplate";
	/** [Write] iot:CreateKeysAndCertificate */
	static readonly CREATE_KEYS_AND_CERTIFICATE = "iot:CreateKeysAndCertificate";
	/** [Write] iot:CreateMitigationAction */
	static readonly CREATE_MITIGATION_ACTION = "iot:CreateMitigationAction";
	/** [Write] iot:CreateOTAUpdate */
	static readonly CREATE_OTA_UPDATE = "iot:CreateOTAUpdate";
	/** [Write] iot:CreatePackage */
	static readonly CREATE_PACKAGE = "iot:CreatePackage";
	/** [Write] iot:CreatePackageVersion */
	static readonly CREATE_PACKAGE_VERSION = "iot:CreatePackageVersion";
	/** [PermissionManagement] iot:CreatePolicy */
	static readonly CREATE_POLICY = "iot:CreatePolicy";
	/** [PermissionManagement] iot:CreatePolicyVersion */
	static readonly CREATE_POLICY_VERSION = "iot:CreatePolicyVersion";
	/** [Write] iot:CreateProvisioningClaim */
	static readonly CREATE_PROVISIONING_CLAIM = "iot:CreateProvisioningClaim";
	/** [Write] iot:CreateProvisioningTemplate */
	static readonly CREATE_PROVISIONING_TEMPLATE =
		"iot:CreateProvisioningTemplate";
	/** [Write] iot:CreateProvisioningTemplateVersion */
	static readonly CREATE_PROVISIONING_TEMPLATE_VERSION =
		"iot:CreateProvisioningTemplateVersion";
	/** [Write] iot:CreateRoleAlias */
	static readonly CREATE_ROLE_ALIAS = "iot:CreateRoleAlias";
	/** [Write] iot:CreateScheduledAudit */
	static readonly CREATE_SCHEDULED_AUDIT = "iot:CreateScheduledAudit";
	/** [Write] iot:CreateSecurityProfile */
	static readonly CREATE_SECURITY_PROFILE = "iot:CreateSecurityProfile";
	/** [Write] iot:CreateStream */
	static readonly CREATE_STREAM = "iot:CreateStream";
	/** [Write] iot:CreateThing */
	static readonly CREATE_THING = "iot:CreateThing";
	/** [Write] iot:CreateThingGroup */
	static readonly CREATE_THING_GROUP = "iot:CreateThingGroup";
	/** [Write] iot:CreateThingType */
	static readonly CREATE_THING_TYPE = "iot:CreateThingType";
	/** [Write] iot:CreateTopicRule */
	static readonly CREATE_TOPIC_RULE = "iot:CreateTopicRule";
	/** [Write] iot:CreateTopicRuleDestination */
	static readonly CREATE_TOPIC_RULE_DESTINATION =
		"iot:CreateTopicRuleDestination";
	/** [Write] iot:DeleteAccountAuditConfiguration */
	static readonly DELETE_ACCOUNT_AUDIT_CONFIGURATION =
		"iot:DeleteAccountAuditConfiguration";
	/** [Write] iot:DeleteAuditSuppression */
	static readonly DELETE_AUDIT_SUPPRESSION = "iot:DeleteAuditSuppression";
	/** [Write] iot:DeleteAuthorizer */
	static readonly DELETE_AUTHORIZER = "iot:DeleteAuthorizer";
	/** [Write] iot:DeleteBillingGroup */
	static readonly DELETE_BILLING_GROUP = "iot:DeleteBillingGroup";
	/** [Write] iot:DeleteCACertificate */
	static readonly DELETE_CA_CERTIFICATE = "iot:DeleteCACertificate";
	/** [Write] iot:DeleteCertificate */
	static readonly DELETE_CERTIFICATE = "iot:DeleteCertificate";
	/** [Write] iot:DeleteCertificateProvider */
	static readonly DELETE_CERTIFICATE_PROVIDER = "iot:DeleteCertificateProvider";
	/** [Write] iot:DeleteCommand */
	static readonly DELETE_COMMAND = "iot:DeleteCommand";
	/** [Write] iot:DeleteCommandExecution */
	static readonly DELETE_COMMAND_EXECUTION = "iot:DeleteCommandExecution";
	/** [Write] iot:DeleteConnection */
	static readonly DELETE_CONNECTION = "iot:DeleteConnection";
	/** [Write] iot:DeleteCustomMetric */
	static readonly DELETE_CUSTOM_METRIC = "iot:DeleteCustomMetric";
	/** [Write] iot:DeleteDimension */
	static readonly DELETE_DIMENSION = "iot:DeleteDimension";
	/** [Write] iot:DeleteDomainConfiguration */
	static readonly DELETE_DOMAIN_CONFIGURATION = "iot:DeleteDomainConfiguration";
	/** [Write] iot:DeleteDynamicThingGroup */
	static readonly DELETE_DYNAMIC_THING_GROUP = "iot:DeleteDynamicThingGroup";
	/** [Write] iot:DeleteFleetMetric */
	static readonly DELETE_FLEET_METRIC = "iot:DeleteFleetMetric";
	/** [Write] iot:DeleteJob */
	static readonly DELETE_JOB = "iot:DeleteJob";
	/** [Write] iot:DeleteJobExecution */
	static readonly DELETE_JOB_EXECUTION = "iot:DeleteJobExecution";
	/** [Write] iot:DeleteJobTemplate */
	static readonly DELETE_JOB_TEMPLATE = "iot:DeleteJobTemplate";
	/** [Write] iot:DeleteMitigationAction */
	static readonly DELETE_MITIGATION_ACTION = "iot:DeleteMitigationAction";
	/** [Write] iot:DeleteOTAUpdate */
	static readonly DELETE_OTA_UPDATE = "iot:DeleteOTAUpdate";
	/** [Write] iot:DeletePackage */
	static readonly DELETE_PACKAGE = "iot:DeletePackage";
	/** [Write] iot:DeletePackageVersion */
	static readonly DELETE_PACKAGE_VERSION = "iot:DeletePackageVersion";
	/** [PermissionManagement] iot:DeletePolicy */
	static readonly DELETE_POLICY = "iot:DeletePolicy";
	/** [PermissionManagement] iot:DeletePolicyVersion */
	static readonly DELETE_POLICY_VERSION = "iot:DeletePolicyVersion";
	/** [Write] iot:DeleteProvisioningTemplate */
	static readonly DELETE_PROVISIONING_TEMPLATE =
		"iot:DeleteProvisioningTemplate";
	/** [Write] iot:DeleteProvisioningTemplateVersion */
	static readonly DELETE_PROVISIONING_TEMPLATE_VERSION =
		"iot:DeleteProvisioningTemplateVersion";
	/** [Write] iot:DeleteRegistrationCode */
	static readonly DELETE_REGISTRATION_CODE = "iot:DeleteRegistrationCode";
	/** [Write] iot:DeleteRoleAlias */
	static readonly DELETE_ROLE_ALIAS = "iot:DeleteRoleAlias";
	/** [Write] iot:DeleteScheduledAudit */
	static readonly DELETE_SCHEDULED_AUDIT = "iot:DeleteScheduledAudit";
	/** [Write] iot:DeleteSecurityProfile */
	static readonly DELETE_SECURITY_PROFILE = "iot:DeleteSecurityProfile";
	/** [Write] iot:DeleteStream */
	static readonly DELETE_STREAM = "iot:DeleteStream";
	/** [Write] iot:DeleteThing */
	static readonly DELETE_THING = "iot:DeleteThing";
	/** [Write] iot:DeleteThingGroup */
	static readonly DELETE_THING_GROUP = "iot:DeleteThingGroup";
	/** [Write] iot:DeleteThingShadow */
	static readonly DELETE_THING_SHADOW = "iot:DeleteThingShadow";
	/** [Write] iot:DeleteThingType */
	static readonly DELETE_THING_TYPE = "iot:DeleteThingType";
	/** [Write] iot:DeleteTopicRule */
	static readonly DELETE_TOPIC_RULE = "iot:DeleteTopicRule";
	/** [Write] iot:DeleteTopicRuleDestination */
	static readonly DELETE_TOPIC_RULE_DESTINATION =
		"iot:DeleteTopicRuleDestination";
	/** [Write] iot:DeleteV2LoggingLevel */
	static readonly DELETE_V2_LOGGING_LEVEL = "iot:DeleteV2LoggingLevel";
	/** [Write] iot:DeprecateThingType */
	static readonly DEPRECATE_THING_TYPE = "iot:DeprecateThingType";
	/** [Read] iot:DescribeAccountAuditConfiguration */
	static readonly DESCRIBE_ACCOUNT_AUDIT_CONFIGURATION =
		"iot:DescribeAccountAuditConfiguration";
	/** [Read] iot:DescribeAuditFinding */
	static readonly DESCRIBE_AUDIT_FINDING = "iot:DescribeAuditFinding";
	/** [Read] iot:DescribeAuditMitigationActionsTask */
	static readonly DESCRIBE_AUDIT_MITIGATION_ACTIONS_TASK =
		"iot:DescribeAuditMitigationActionsTask";
	/** [Read] iot:DescribeAuditSuppression */
	static readonly DESCRIBE_AUDIT_SUPPRESSION = "iot:DescribeAuditSuppression";
	/** [Read] iot:DescribeAuditTask */
	static readonly DESCRIBE_AUDIT_TASK = "iot:DescribeAuditTask";
	/** [Read] iot:DescribeAuthorizer */
	static readonly DESCRIBE_AUTHORIZER = "iot:DescribeAuthorizer";
	/** [Read] iot:DescribeBillingGroup */
	static readonly DESCRIBE_BILLING_GROUP = "iot:DescribeBillingGroup";
	/** [Read] iot:DescribeCACertificate */
	static readonly DESCRIBE_CA_CERTIFICATE = "iot:DescribeCACertificate";
	/** [Read] iot:DescribeCertificate */
	static readonly DESCRIBE_CERTIFICATE = "iot:DescribeCertificate";
	/** [Read] iot:DescribeCertificateProvider */
	static readonly DESCRIBE_CERTIFICATE_PROVIDER =
		"iot:DescribeCertificateProvider";
	/** [Read] iot:DescribeCustomMetric */
	static readonly DESCRIBE_CUSTOM_METRIC = "iot:DescribeCustomMetric";
	/** [Read] iot:DescribeDefaultAuthorizer */
	static readonly DESCRIBE_DEFAULT_AUTHORIZER = "iot:DescribeDefaultAuthorizer";
	/** [Read] iot:DescribeDetectMitigationActionsTask */
	static readonly DESCRIBE_DETECT_MITIGATION_ACTIONS_TASK =
		"iot:DescribeDetectMitigationActionsTask";
	/** [Read] iot:DescribeDimension */
	static readonly DESCRIBE_DIMENSION = "iot:DescribeDimension";
	/** [Read] iot:DescribeDomainConfiguration */
	static readonly DESCRIBE_DOMAIN_CONFIGURATION =
		"iot:DescribeDomainConfiguration";
	/** [Read] iot:DescribeEncryptionConfiguration */
	static readonly DESCRIBE_ENCRYPTION_CONFIGURATION =
		"iot:DescribeEncryptionConfiguration";
	/** [Read] iot:DescribeEndpoint */
	static readonly DESCRIBE_ENDPOINT = "iot:DescribeEndpoint";
	/** [Read] iot:DescribeEventConfigurations */
	static readonly DESCRIBE_EVENT_CONFIGURATIONS =
		"iot:DescribeEventConfigurations";
	/** [Read] iot:DescribeFleetMetric */
	static readonly DESCRIBE_FLEET_METRIC = "iot:DescribeFleetMetric";
	/** [Read] iot:DescribeIndex */
	static readonly DESCRIBE_INDEX = "iot:DescribeIndex";
	/** [Read] iot:DescribeJob */
	static readonly DESCRIBE_JOB = "iot:DescribeJob";
	/** [Read] iot:DescribeJobExecution */
	static readonly DESCRIBE_JOB_EXECUTION = "iot:DescribeJobExecution";
	/** [Read] iot:DescribeJobTemplate */
	static readonly DESCRIBE_JOB_TEMPLATE = "iot:DescribeJobTemplate";
	/** [Read] iot:DescribeManagedJobTemplate */
	static readonly DESCRIBE_MANAGED_JOB_TEMPLATE =
		"iot:DescribeManagedJobTemplate";
	/** [Read] iot:DescribeMitigationAction */
	static readonly DESCRIBE_MITIGATION_ACTION = "iot:DescribeMitigationAction";
	/** [Read] iot:DescribeProvisioningTemplate */
	static readonly DESCRIBE_PROVISIONING_TEMPLATE =
		"iot:DescribeProvisioningTemplate";
	/** [Read] iot:DescribeProvisioningTemplateVersion */
	static readonly DESCRIBE_PROVISIONING_TEMPLATE_VERSION =
		"iot:DescribeProvisioningTemplateVersion";
	/** [Read] iot:DescribeRoleAlias */
	static readonly DESCRIBE_ROLE_ALIAS = "iot:DescribeRoleAlias";
	/** [Read] iot:DescribeScheduledAudit */
	static readonly DESCRIBE_SCHEDULED_AUDIT = "iot:DescribeScheduledAudit";
	/** [Read] iot:DescribeSecurityProfile */
	static readonly DESCRIBE_SECURITY_PROFILE = "iot:DescribeSecurityProfile";
	/** [Read] iot:DescribeStream */
	static readonly DESCRIBE_STREAM = "iot:DescribeStream";
	/** [Read] iot:DescribeThing */
	static readonly DESCRIBE_THING = "iot:DescribeThing";
	/** [Read] iot:DescribeThingGroup */
	static readonly DESCRIBE_THING_GROUP = "iot:DescribeThingGroup";
	/** [Read] iot:DescribeThingRegistrationTask */
	static readonly DESCRIBE_THING_REGISTRATION_TASK =
		"iot:DescribeThingRegistrationTask";
	/** [Read] iot:DescribeThingType */
	static readonly DESCRIBE_THING_TYPE = "iot:DescribeThingType";
	/** [Read] iot:DescribeTunnel */
	static readonly DESCRIBE_TUNNEL = "iot:DescribeTunnel";
	/** [PermissionManagement] iot:DetachPolicy */
	static readonly DETACH_POLICY = "iot:DetachPolicy";
	/** [PermissionManagement] iot:DetachPrincipalPolicy */
	static readonly DETACH_PRINCIPAL_POLICY = "iot:DetachPrincipalPolicy";
	/** [Write] iot:DetachSecurityProfile */
	static readonly DETACH_SECURITY_PROFILE = "iot:DetachSecurityProfile";
	/** [Write] iot:DetachThingPrincipal */
	static readonly DETACH_THING_PRINCIPAL = "iot:DetachThingPrincipal";
	/** [Write] iot:DisableTopicRule */
	static readonly DISABLE_TOPIC_RULE = "iot:DisableTopicRule";
	/** [Write] iot:DisassociateSbomFromPackageVersion */
	static readonly DISASSOCIATE_SBOM_FROM_PACKAGE_VERSION =
		"iot:DisassociateSbomFromPackageVersion";
	/** [Write] iot:EnableTopicRule */
	static readonly ENABLE_TOPIC_RULE = "iot:EnableTopicRule";
	/** [List] iot:GetBehaviorModelTrainingSummaries */
	static readonly GET_BEHAVIOR_MODEL_TRAINING_SUMMARIES =
		"iot:GetBehaviorModelTrainingSummaries";
	/** [Read] iot:GetBucketsAggregation */
	static readonly GET_BUCKETS_AGGREGATION = "iot:GetBucketsAggregation";
	/** [Read] iot:GetCardinality */
	static readonly GET_CARDINALITY = "iot:GetCardinality";
	/** [Read] iot:GetCommand */
	static readonly GET_COMMAND = "iot:GetCommand";
	/** [Read] iot:GetCommandExecution */
	static readonly GET_COMMAND_EXECUTION = "iot:GetCommandExecution";
	/** [Write] iot:GetConnection */
	static readonly GET_CONNECTION = "iot:GetConnection";
	/** [Read] iot:GetEffectivePolicies */
	static readonly GET_EFFECTIVE_POLICIES = "iot:GetEffectivePolicies";
	/** [Read] iot:GetIndexingConfiguration */
	static readonly GET_INDEXING_CONFIGURATION = "iot:GetIndexingConfiguration";
	/** [Read] iot:GetJobDocument */
	static readonly GET_JOB_DOCUMENT = "iot:GetJobDocument";
	/** [Read] iot:GetLoggingOptions */
	static readonly GET_LOGGING_OPTIONS = "iot:GetLoggingOptions";
	/** [Read] iot:GetOTAUpdate */
	static readonly GET_OTA_UPDATE = "iot:GetOTAUpdate";
	/** [Read] iot:GetPackage */
	static readonly GET_PACKAGE = "iot:GetPackage";
	/** [Read] iot:GetPackageConfiguration */
	static readonly GET_PACKAGE_CONFIGURATION = "iot:GetPackageConfiguration";
	/** [Read] iot:GetPackageVersion */
	static readonly GET_PACKAGE_VERSION = "iot:GetPackageVersion";
	/** [Read] iot:GetPercentiles */
	static readonly GET_PERCENTILES = "iot:GetPercentiles";
	/** [Read] iot:GetPolicy */
	static readonly GET_POLICY = "iot:GetPolicy";
	/** [Read] iot:GetPolicyVersion */
	static readonly GET_POLICY_VERSION = "iot:GetPolicyVersion";
	/** [Read] iot:GetRegistrationCode */
	static readonly GET_REGISTRATION_CODE = "iot:GetRegistrationCode";
	/** [Read] iot:GetRetainedMessage */
	static readonly GET_RETAINED_MESSAGE = "iot:GetRetainedMessage";
	/** [Read] iot:GetStatistics */
	static readonly GET_STATISTICS = "iot:GetStatistics";
	/** [Read] iot:GetThingConnectivityData */
	static readonly GET_THING_CONNECTIVITY_DATA = "iot:GetThingConnectivityData";
	/** [Read] iot:GetThingShadow */
	static readonly GET_THING_SHADOW = "iot:GetThingShadow";
	/** [Read] iot:GetTopicRule */
	static readonly GET_TOPIC_RULE = "iot:GetTopicRule";
	/** [Read] iot:GetTopicRuleDestination */
	static readonly GET_TOPIC_RULE_DESTINATION = "iot:GetTopicRuleDestination";
	/** [Read] iot:GetV2LoggingOptions */
	static readonly GET_V2_LOGGING_OPTIONS = "iot:GetV2LoggingOptions";
	/** [List] iot:ListActiveViolations */
	static readonly LIST_ACTIVE_VIOLATIONS = "iot:ListActiveViolations";
	/** [List] iot:ListAttachedPolicies */
	static readonly LIST_ATTACHED_POLICIES = "iot:ListAttachedPolicies";
	/** [List] iot:ListAuditFindings */
	static readonly LIST_AUDIT_FINDINGS = "iot:ListAuditFindings";
	/** [List] iot:ListAuditMitigationActionsExecutions */
	static readonly LIST_AUDIT_MITIGATION_ACTIONS_EXECUTIONS =
		"iot:ListAuditMitigationActionsExecutions";
	/** [List] iot:ListAuditMitigationActionsTasks */
	static readonly LIST_AUDIT_MITIGATION_ACTIONS_TASKS =
		"iot:ListAuditMitigationActionsTasks";
	/** [List] iot:ListAuditSuppressions */
	static readonly LIST_AUDIT_SUPPRESSIONS = "iot:ListAuditSuppressions";
	/** [List] iot:ListAuditTasks */
	static readonly LIST_AUDIT_TASKS = "iot:ListAuditTasks";
	/** [List] iot:ListAuthorizers */
	static readonly LIST_AUTHORIZERS = "iot:ListAuthorizers";
	/** [List] iot:ListBillingGroups */
	static readonly LIST_BILLING_GROUPS = "iot:ListBillingGroups";
	/** [List] iot:ListCACertificates */
	static readonly LIST_CA_CERTIFICATES = "iot:ListCACertificates";
	/** [List] iot:ListCertificateProviders */
	static readonly LIST_CERTIFICATE_PROVIDERS = "iot:ListCertificateProviders";
	/** [List] iot:ListCertificates */
	static readonly LIST_CERTIFICATES = "iot:ListCertificates";
	/** [List] iot:ListCertificatesByCA */
	static readonly LIST_CERTIFICATES_BY_CA = "iot:ListCertificatesByCA";
	/** [List] iot:ListCommandExecutions */
	static readonly LIST_COMMAND_EXECUTIONS = "iot:ListCommandExecutions";
	/** [List] iot:ListCommands */
	static readonly LIST_COMMANDS = "iot:ListCommands";
	/** [List] iot:ListCustomMetrics */
	static readonly LIST_CUSTOM_METRICS = "iot:ListCustomMetrics";
	/** [List] iot:ListDetectMitigationActionsExecutions */
	static readonly LIST_DETECT_MITIGATION_ACTIONS_EXECUTIONS =
		"iot:ListDetectMitigationActionsExecutions";
	/** [List] iot:ListDetectMitigationActionsTasks */
	static readonly LIST_DETECT_MITIGATION_ACTIONS_TASKS =
		"iot:ListDetectMitigationActionsTasks";
	/** [List] iot:ListDimensions */
	static readonly LIST_DIMENSIONS = "iot:ListDimensions";
	/** [List] iot:ListDomainConfigurations */
	static readonly LIST_DOMAIN_CONFIGURATIONS = "iot:ListDomainConfigurations";
	/** [List] iot:ListFleetMetrics */
	static readonly LIST_FLEET_METRICS = "iot:ListFleetMetrics";
	/** [List] iot:ListIndices */
	static readonly LIST_INDICES = "iot:ListIndices";
	/** [List] iot:ListJobExecutionsForJob */
	static readonly LIST_JOB_EXECUTIONS_FOR_JOB = "iot:ListJobExecutionsForJob";
	/** [List] iot:ListJobExecutionsForThing */
	static readonly LIST_JOB_EXECUTIONS_FOR_THING =
		"iot:ListJobExecutionsForThing";
	/** [List] iot:ListJobTemplates */
	static readonly LIST_JOB_TEMPLATES = "iot:ListJobTemplates";
	/** [List] iot:ListJobs */
	static readonly LIST_JOBS = "iot:ListJobs";
	/** [List] iot:ListManagedJobTemplates */
	static readonly LIST_MANAGED_JOB_TEMPLATES = "iot:ListManagedJobTemplates";
	/** [List] iot:ListMetricValues */
	static readonly LIST_METRIC_VALUES = "iot:ListMetricValues";
	/** [List] iot:ListMitigationActions */
	static readonly LIST_MITIGATION_ACTIONS = "iot:ListMitigationActions";
	/** [List] iot:ListNamedShadowsForThing */
	static readonly LIST_NAMED_SHADOWS_FOR_THING = "iot:ListNamedShadowsForThing";
	/** [List] iot:ListOTAUpdates */
	static readonly LIST_OTA_UPDATES = "iot:ListOTAUpdates";
	/** [List] iot:ListOutgoingCertificates */
	static readonly LIST_OUTGOING_CERTIFICATES = "iot:ListOutgoingCertificates";
	/** [List] iot:ListPackageVersions */
	static readonly LIST_PACKAGE_VERSIONS = "iot:ListPackageVersions";
	/** [List] iot:ListPackages */
	static readonly LIST_PACKAGES = "iot:ListPackages";
	/** [List] iot:ListPolicies */
	static readonly LIST_POLICIES = "iot:ListPolicies";
	/** [List] iot:ListPolicyPrincipals */
	static readonly LIST_POLICY_PRINCIPALS = "iot:ListPolicyPrincipals";
	/** [List] iot:ListPolicyVersions */
	static readonly LIST_POLICY_VERSIONS = "iot:ListPolicyVersions";
	/** [List] iot:ListPrincipalPolicies */
	static readonly LIST_PRINCIPAL_POLICIES = "iot:ListPrincipalPolicies";
	/** [List] iot:ListPrincipalThings */
	static readonly LIST_PRINCIPAL_THINGS = "iot:ListPrincipalThings";
	/** [List] iot:ListPrincipalThingsV2 */
	static readonly LIST_PRINCIPAL_THINGS_V2 = "iot:ListPrincipalThingsV2";
	/** [List] iot:ListProvisioningTemplateVersions */
	static readonly LIST_PROVISIONING_TEMPLATE_VERSIONS =
		"iot:ListProvisioningTemplateVersions";
	/** [List] iot:ListProvisioningTemplates */
	static readonly LIST_PROVISIONING_TEMPLATES = "iot:ListProvisioningTemplates";
	/** [List] iot:ListRelatedResourcesForAuditFinding */
	static readonly LIST_RELATED_RESOURCES_FOR_AUDIT_FINDING =
		"iot:ListRelatedResourcesForAuditFinding";
	/** [List] iot:ListRetainedMessages */
	static readonly LIST_RETAINED_MESSAGES = "iot:ListRetainedMessages";
	/** [List] iot:ListRoleAliases */
	static readonly LIST_ROLE_ALIASES = "iot:ListRoleAliases";
	/** [List] iot:ListSbomValidationResults */
	static readonly LIST_SBOM_VALIDATION_RESULTS =
		"iot:ListSbomValidationResults";
	/** [List] iot:ListScheduledAudits */
	static readonly LIST_SCHEDULED_AUDITS = "iot:ListScheduledAudits";
	/** [List] iot:ListSecurityProfiles */
	static readonly LIST_SECURITY_PROFILES = "iot:ListSecurityProfiles";
	/** [List] iot:ListSecurityProfilesForTarget */
	static readonly LIST_SECURITY_PROFILES_FOR_TARGET =
		"iot:ListSecurityProfilesForTarget";
	/** [List] iot:ListStreams */
	static readonly LIST_STREAMS = "iot:ListStreams";
	/** [Write] iot:ListSubscriptions */
	static readonly LIST_SUBSCRIPTIONS = "iot:ListSubscriptions";
	/** [Read] iot:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "iot:ListTagsForResource";
	/** [List] iot:ListTargetsForPolicy */
	static readonly LIST_TARGETS_FOR_POLICY = "iot:ListTargetsForPolicy";
	/** [List] iot:ListTargetsForSecurityProfile */
	static readonly LIST_TARGETS_FOR_SECURITY_PROFILE =
		"iot:ListTargetsForSecurityProfile";
	/** [List] iot:ListThingGroups */
	static readonly LIST_THING_GROUPS = "iot:ListThingGroups";
	/** [List] iot:ListThingGroupsForThing */
	static readonly LIST_THING_GROUPS_FOR_THING = "iot:ListThingGroupsForThing";
	/** [List] iot:ListThingPrincipals */
	static readonly LIST_THING_PRINCIPALS = "iot:ListThingPrincipals";
	/** [List] iot:ListThingPrincipalsV2 */
	static readonly LIST_THING_PRINCIPALS_V2 = "iot:ListThingPrincipalsV2";
	/** [List] iot:ListThingRegistrationTaskReports */
	static readonly LIST_THING_REGISTRATION_TASK_REPORTS =
		"iot:ListThingRegistrationTaskReports";
	/** [List] iot:ListThingRegistrationTasks */
	static readonly LIST_THING_REGISTRATION_TASKS =
		"iot:ListThingRegistrationTasks";
	/** [List] iot:ListThingTypes */
	static readonly LIST_THING_TYPES = "iot:ListThingTypes";
	/** [List] iot:ListThings */
	static readonly LIST_THINGS = "iot:ListThings";
	/** [List] iot:ListThingsInBillingGroup */
	static readonly LIST_THINGS_IN_BILLING_GROUP = "iot:ListThingsInBillingGroup";
	/** [List] iot:ListThingsInThingGroup */
	static readonly LIST_THINGS_IN_THING_GROUP = "iot:ListThingsInThingGroup";
	/** [List] iot:ListTopicRuleDestinations */
	static readonly LIST_TOPIC_RULE_DESTINATIONS =
		"iot:ListTopicRuleDestinations";
	/** [List] iot:ListTopicRules */
	static readonly LIST_TOPIC_RULES = "iot:ListTopicRules";
	/** [List] iot:ListTunnels */
	static readonly LIST_TUNNELS = "iot:ListTunnels";
	/** [List] iot:ListV2LoggingLevels */
	static readonly LIST_V2_LOGGING_LEVELS = "iot:ListV2LoggingLevels";
	/** [List] iot:ListViolationEvents */
	static readonly LIST_VIOLATION_EVENTS = "iot:ListViolationEvents";
	/** [Write] iot:OpenTunnel */
	static readonly OPEN_TUNNEL = "iot:OpenTunnel";
	/** [Write] iot:Publish */
	static readonly PUBLISH = "iot:Publish";
	/** [Write] iot:PutVerificationStateOnViolation */
	static readonly PUT_VERIFICATION_STATE_ON_VIOLATION =
		"iot:PutVerificationStateOnViolation";
	/** [Write] iot:Receive */
	static readonly RECEIVE = "iot:Receive";
	/** [Write] iot:RegisterCACertificate */
	static readonly REGISTER_CA_CERTIFICATE = "iot:RegisterCACertificate";
	/** [Write] iot:RegisterCertificate */
	static readonly REGISTER_CERTIFICATE = "iot:RegisterCertificate";
	/** [Write] iot:RegisterCertificateWithoutCA */
	static readonly REGISTER_CERTIFICATE_WITHOUT_CA =
		"iot:RegisterCertificateWithoutCA";
	/** [Write] iot:RegisterThing */
	static readonly REGISTER_THING = "iot:RegisterThing";
	/** [Write] iot:RejectCertificateTransfer */
	static readonly REJECT_CERTIFICATE_TRANSFER = "iot:RejectCertificateTransfer";
	/** [Write] iot:RemoveThingFromBillingGroup */
	static readonly REMOVE_THING_FROM_BILLING_GROUP =
		"iot:RemoveThingFromBillingGroup";
	/** [Write] iot:RemoveThingFromThingGroup */
	static readonly REMOVE_THING_FROM_THING_GROUP =
		"iot:RemoveThingFromThingGroup";
	/** [Write] iot:ReplaceTopicRule */
	static readonly REPLACE_TOPIC_RULE = "iot:ReplaceTopicRule";
	/** [Write] iot:RetainPublish */
	static readonly RETAIN_PUBLISH = "iot:RetainPublish";
	/** [Write] iot:RotateTunnelAccessToken */
	static readonly ROTATE_TUNNEL_ACCESS_TOKEN = "iot:RotateTunnelAccessToken";
	/** [Read] iot:SearchIndex */
	static readonly SEARCH_INDEX = "iot:SearchIndex";
	/** [Write] iot:SendDirectMessage */
	static readonly SEND_DIRECT_MESSAGE = "iot:SendDirectMessage";
	/** [PermissionManagement] iot:SetDefaultAuthorizer */
	static readonly SET_DEFAULT_AUTHORIZER = "iot:SetDefaultAuthorizer";
	/** [PermissionManagement] iot:SetDefaultPolicyVersion */
	static readonly SET_DEFAULT_POLICY_VERSION = "iot:SetDefaultPolicyVersion";
	/** [Write] iot:SetLoggingOptions */
	static readonly SET_LOGGING_OPTIONS = "iot:SetLoggingOptions";
	/** [Write] iot:SetV2LoggingLevel */
	static readonly SET_V2_LOGGING_LEVEL = "iot:SetV2LoggingLevel";
	/** [Write] iot:SetV2LoggingOptions */
	static readonly SET_V2_LOGGING_OPTIONS = "iot:SetV2LoggingOptions";
	/** [Write] iot:StartAuditMitigationActionsTask */
	static readonly START_AUDIT_MITIGATION_ACTIONS_TASK =
		"iot:StartAuditMitigationActionsTask";
	/** [Write] iot:StartCommandExecution */
	static readonly START_COMMAND_EXECUTION = "iot:StartCommandExecution";
	/** [Write] iot:StartDetectMitigationActionsTask */
	static readonly START_DETECT_MITIGATION_ACTIONS_TASK =
		"iot:StartDetectMitigationActionsTask";
	/** [Write] iot:StartOnDemandAuditTask */
	static readonly START_ON_DEMAND_AUDIT_TASK = "iot:StartOnDemandAuditTask";
	/** [Write] iot:StartThingRegistrationTask */
	static readonly START_THING_REGISTRATION_TASK =
		"iot:StartThingRegistrationTask";
	/** [Write] iot:StopThingRegistrationTask */
	static readonly STOP_THING_REGISTRATION_TASK =
		"iot:StopThingRegistrationTask";
	/** [Write] iot:Subscribe */
	static readonly SUBSCRIBE = "iot:Subscribe";
	/** [Tagging] iot:TagResource */
	static readonly TAG_RESOURCE = "iot:TagResource";
	/** [Read] iot:TestAuthorization */
	static readonly TEST_AUTHORIZATION = "iot:TestAuthorization";
	/** [Read] iot:TestInvokeAuthorizer */
	static readonly TEST_INVOKE_AUTHORIZER = "iot:TestInvokeAuthorizer";
	/** [Write] iot:TransferCertificate */
	static readonly TRANSFER_CERTIFICATE = "iot:TransferCertificate";
	/** [Tagging] iot:UntagResource */
	static readonly UNTAG_RESOURCE = "iot:UntagResource";
	/** [Write] iot:UpdateAccountAuditConfiguration */
	static readonly UPDATE_ACCOUNT_AUDIT_CONFIGURATION =
		"iot:UpdateAccountAuditConfiguration";
	/** [Write] iot:UpdateAuditSuppression */
	static readonly UPDATE_AUDIT_SUPPRESSION = "iot:UpdateAuditSuppression";
	/** [Write] iot:UpdateAuthorizer */
	static readonly UPDATE_AUTHORIZER = "iot:UpdateAuthorizer";
	/** [Write] iot:UpdateBillingGroup */
	static readonly UPDATE_BILLING_GROUP = "iot:UpdateBillingGroup";
	/** [Write] iot:UpdateCACertificate */
	static readonly UPDATE_CA_CERTIFICATE = "iot:UpdateCACertificate";
	/** [Write] iot:UpdateCertificate */
	static readonly UPDATE_CERTIFICATE = "iot:UpdateCertificate";
	/** [Write] iot:UpdateCertificateProvider */
	static readonly UPDATE_CERTIFICATE_PROVIDER = "iot:UpdateCertificateProvider";
	/** [Write] iot:UpdateCommand */
	static readonly UPDATE_COMMAND = "iot:UpdateCommand";
	/** [Write] iot:UpdateCustomMetric */
	static readonly UPDATE_CUSTOM_METRIC = "iot:UpdateCustomMetric";
	/** [Write] iot:UpdateDimension */
	static readonly UPDATE_DIMENSION = "iot:UpdateDimension";
	/** [Write] iot:UpdateDomainConfiguration */
	static readonly UPDATE_DOMAIN_CONFIGURATION = "iot:UpdateDomainConfiguration";
	/** [Write] iot:UpdateDynamicThingGroup */
	static readonly UPDATE_DYNAMIC_THING_GROUP = "iot:UpdateDynamicThingGroup";
	/** [Write] iot:UpdateEncryptionConfiguration */
	static readonly UPDATE_ENCRYPTION_CONFIGURATION =
		"iot:UpdateEncryptionConfiguration";
	/** [Write] iot:UpdateEventConfigurations */
	static readonly UPDATE_EVENT_CONFIGURATIONS = "iot:UpdateEventConfigurations";
	/** [Write] iot:UpdateFleetMetric */
	static readonly UPDATE_FLEET_METRIC = "iot:UpdateFleetMetric";
	/** [Write] iot:UpdateIndexingConfiguration */
	static readonly UPDATE_INDEXING_CONFIGURATION =
		"iot:UpdateIndexingConfiguration";
	/** [Write] iot:UpdateJob */
	static readonly UPDATE_JOB = "iot:UpdateJob";
	/** [Write] iot:UpdateMitigationAction */
	static readonly UPDATE_MITIGATION_ACTION = "iot:UpdateMitigationAction";
	/** [Write] iot:UpdatePackage */
	static readonly UPDATE_PACKAGE = "iot:UpdatePackage";
	/** [Write] iot:UpdatePackageConfiguration */
	static readonly UPDATE_PACKAGE_CONFIGURATION =
		"iot:UpdatePackageConfiguration";
	/** [Write] iot:UpdatePackageVersion */
	static readonly UPDATE_PACKAGE_VERSION = "iot:UpdatePackageVersion";
	/** [Write] iot:UpdateProvisioningTemplate */
	static readonly UPDATE_PROVISIONING_TEMPLATE =
		"iot:UpdateProvisioningTemplate";
	/** [Write] iot:UpdateRoleAlias */
	static readonly UPDATE_ROLE_ALIAS = "iot:UpdateRoleAlias";
	/** [Write] iot:UpdateScheduledAudit */
	static readonly UPDATE_SCHEDULED_AUDIT = "iot:UpdateScheduledAudit";
	/** [Write] iot:UpdateSecurityProfile */
	static readonly UPDATE_SECURITY_PROFILE = "iot:UpdateSecurityProfile";
	/** [Write] iot:UpdateStream */
	static readonly UPDATE_STREAM = "iot:UpdateStream";
	/** [Write] iot:UpdateThing */
	static readonly UPDATE_THING = "iot:UpdateThing";
	/** [Write] iot:UpdateThingGroup */
	static readonly UPDATE_THING_GROUP = "iot:UpdateThingGroup";
	/** [Write] iot:UpdateThingGroupsForThing */
	static readonly UPDATE_THING_GROUPS_FOR_THING =
		"iot:UpdateThingGroupsForThing";
	/** [Write] iot:UpdateThingShadow */
	static readonly UPDATE_THING_SHADOW = "iot:UpdateThingShadow";
	/** [Write] iot:UpdateThingType */
	static readonly UPDATE_THING_TYPE = "iot:UpdateThingType";
	/** [Write] iot:UpdateTopicRuleDestination */
	static readonly UPDATE_TOPIC_RULE_DESTINATION =
		"iot:UpdateTopicRuleDestination";
	/** [Read] iot:ValidateSecurityProfileBehaviors */
	static readonly VALIDATE_SECURITY_PROFILE_BEHAVIORS =
		"iot:ValidateSecurityProfileBehaviors";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotActions.DESCRIBE_ACCOUNT_AUDIT_CONFIGURATION,
		IotActions.DESCRIBE_AUDIT_FINDING,
		IotActions.DESCRIBE_AUDIT_MITIGATION_ACTIONS_TASK,
		IotActions.DESCRIBE_AUDIT_SUPPRESSION,
		IotActions.DESCRIBE_AUDIT_TASK,
		IotActions.DESCRIBE_AUTHORIZER,
		IotActions.DESCRIBE_BILLING_GROUP,
		IotActions.DESCRIBE_CA_CERTIFICATE,
		IotActions.DESCRIBE_CERTIFICATE,
		IotActions.DESCRIBE_CERTIFICATE_PROVIDER,
		IotActions.DESCRIBE_CUSTOM_METRIC,
		IotActions.DESCRIBE_DEFAULT_AUTHORIZER,
		IotActions.DESCRIBE_DETECT_MITIGATION_ACTIONS_TASK,
		IotActions.DESCRIBE_DIMENSION,
		IotActions.DESCRIBE_DOMAIN_CONFIGURATION,
		IotActions.DESCRIBE_ENCRYPTION_CONFIGURATION,
		IotActions.DESCRIBE_ENDPOINT,
		IotActions.DESCRIBE_EVENT_CONFIGURATIONS,
		IotActions.DESCRIBE_FLEET_METRIC,
		IotActions.DESCRIBE_INDEX,
		IotActions.DESCRIBE_JOB,
		IotActions.DESCRIBE_JOB_EXECUTION,
		IotActions.DESCRIBE_JOB_TEMPLATE,
		IotActions.DESCRIBE_MANAGED_JOB_TEMPLATE,
		IotActions.DESCRIBE_MITIGATION_ACTION,
		IotActions.DESCRIBE_PROVISIONING_TEMPLATE,
		IotActions.DESCRIBE_PROVISIONING_TEMPLATE_VERSION,
		IotActions.DESCRIBE_ROLE_ALIAS,
		IotActions.DESCRIBE_SCHEDULED_AUDIT,
		IotActions.DESCRIBE_SECURITY_PROFILE,
		IotActions.DESCRIBE_STREAM,
		IotActions.DESCRIBE_THING,
		IotActions.DESCRIBE_THING_GROUP,
		IotActions.DESCRIBE_THING_REGISTRATION_TASK,
		IotActions.DESCRIBE_THING_TYPE,
		IotActions.DESCRIBE_TUNNEL,
		IotActions.GET_BUCKETS_AGGREGATION,
		IotActions.GET_CARDINALITY,
		IotActions.GET_COMMAND,
		IotActions.GET_COMMAND_EXECUTION,
		IotActions.GET_EFFECTIVE_POLICIES,
		IotActions.GET_INDEXING_CONFIGURATION,
		IotActions.GET_JOB_DOCUMENT,
		IotActions.GET_LOGGING_OPTIONS,
		IotActions.GET_OTA_UPDATE,
		IotActions.GET_PACKAGE,
		IotActions.GET_PACKAGE_CONFIGURATION,
		IotActions.GET_PACKAGE_VERSION,
		IotActions.GET_PERCENTILES,
		IotActions.GET_POLICY,
		IotActions.GET_POLICY_VERSION,
		IotActions.GET_REGISTRATION_CODE,
		IotActions.GET_RETAINED_MESSAGE,
		IotActions.GET_STATISTICS,
		IotActions.GET_THING_CONNECTIVITY_DATA,
		IotActions.GET_THING_SHADOW,
		IotActions.GET_TOPIC_RULE,
		IotActions.GET_TOPIC_RULE_DESTINATION,
		IotActions.GET_V2_LOGGING_OPTIONS,
		IotActions.LIST_TAGS_FOR_RESOURCE,
		IotActions.SEARCH_INDEX,
		IotActions.TEST_AUTHORIZATION,
		IotActions.TEST_INVOKE_AUTHORIZER,
		IotActions.VALIDATE_SECURITY_PROFILE_BEHAVIORS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotActions.ACCEPT_CERTIFICATE_TRANSFER,
		IotActions.ADD_THING_TO_BILLING_GROUP,
		IotActions.ADD_THING_TO_THING_GROUP,
		IotActions.ASSOCIATE_SBOM_WITH_PACKAGE_VERSION,
		IotActions.ASSOCIATE_TARGETS_WITH_JOB,
		IotActions.ATTACH_SECURITY_PROFILE,
		IotActions.ATTACH_THING_PRINCIPAL,
		IotActions.CANCEL_AUDIT_MITIGATION_ACTIONS_TASK,
		IotActions.CANCEL_AUDIT_TASK,
		IotActions.CANCEL_CERTIFICATE_TRANSFER,
		IotActions.CANCEL_DETECT_MITIGATION_ACTIONS_TASK,
		IotActions.CANCEL_JOB,
		IotActions.CANCEL_JOB_EXECUTION,
		IotActions.CLEAR_DEFAULT_AUTHORIZER,
		IotActions.CLOSE_TUNNEL,
		IotActions.CONFIRM_TOPIC_RULE_DESTINATION,
		IotActions.CONNECT,
		IotActions.CREATE_AUDIT_SUPPRESSION,
		IotActions.CREATE_AUTHORIZER,
		IotActions.CREATE_BILLING_GROUP,
		IotActions.CREATE_CERTIFICATE_FROM_CSR,
		IotActions.CREATE_CERTIFICATE_PROVIDER,
		IotActions.CREATE_COMMAND,
		IotActions.CREATE_CUSTOM_METRIC,
		IotActions.CREATE_DIMENSION,
		IotActions.CREATE_DOMAIN_CONFIGURATION,
		IotActions.CREATE_DYNAMIC_THING_GROUP,
		IotActions.CREATE_FLEET_METRIC,
		IotActions.CREATE_JOB,
		IotActions.CREATE_JOB_TEMPLATE,
		IotActions.CREATE_KEYS_AND_CERTIFICATE,
		IotActions.CREATE_MITIGATION_ACTION,
		IotActions.CREATE_OTA_UPDATE,
		IotActions.CREATE_PACKAGE,
		IotActions.CREATE_PACKAGE_VERSION,
		IotActions.CREATE_PROVISIONING_CLAIM,
		IotActions.CREATE_PROVISIONING_TEMPLATE,
		IotActions.CREATE_PROVISIONING_TEMPLATE_VERSION,
		IotActions.CREATE_ROLE_ALIAS,
		IotActions.CREATE_SCHEDULED_AUDIT,
		IotActions.CREATE_SECURITY_PROFILE,
		IotActions.CREATE_STREAM,
		IotActions.CREATE_THING,
		IotActions.CREATE_THING_GROUP,
		IotActions.CREATE_THING_TYPE,
		IotActions.CREATE_TOPIC_RULE,
		IotActions.CREATE_TOPIC_RULE_DESTINATION,
		IotActions.DELETE_ACCOUNT_AUDIT_CONFIGURATION,
		IotActions.DELETE_AUDIT_SUPPRESSION,
		IotActions.DELETE_AUTHORIZER,
		IotActions.DELETE_BILLING_GROUP,
		IotActions.DELETE_CA_CERTIFICATE,
		IotActions.DELETE_CERTIFICATE,
		IotActions.DELETE_CERTIFICATE_PROVIDER,
		IotActions.DELETE_COMMAND,
		IotActions.DELETE_COMMAND_EXECUTION,
		IotActions.DELETE_CONNECTION,
		IotActions.DELETE_CUSTOM_METRIC,
		IotActions.DELETE_DIMENSION,
		IotActions.DELETE_DOMAIN_CONFIGURATION,
		IotActions.DELETE_DYNAMIC_THING_GROUP,
		IotActions.DELETE_FLEET_METRIC,
		IotActions.DELETE_JOB,
		IotActions.DELETE_JOB_EXECUTION,
		IotActions.DELETE_JOB_TEMPLATE,
		IotActions.DELETE_MITIGATION_ACTION,
		IotActions.DELETE_OTA_UPDATE,
		IotActions.DELETE_PACKAGE,
		IotActions.DELETE_PACKAGE_VERSION,
		IotActions.DELETE_PROVISIONING_TEMPLATE,
		IotActions.DELETE_PROVISIONING_TEMPLATE_VERSION,
		IotActions.DELETE_REGISTRATION_CODE,
		IotActions.DELETE_ROLE_ALIAS,
		IotActions.DELETE_SCHEDULED_AUDIT,
		IotActions.DELETE_SECURITY_PROFILE,
		IotActions.DELETE_STREAM,
		IotActions.DELETE_THING,
		IotActions.DELETE_THING_GROUP,
		IotActions.DELETE_THING_SHADOW,
		IotActions.DELETE_THING_TYPE,
		IotActions.DELETE_TOPIC_RULE,
		IotActions.DELETE_TOPIC_RULE_DESTINATION,
		IotActions.DELETE_V2_LOGGING_LEVEL,
		IotActions.DEPRECATE_THING_TYPE,
		IotActions.DETACH_SECURITY_PROFILE,
		IotActions.DETACH_THING_PRINCIPAL,
		IotActions.DISABLE_TOPIC_RULE,
		IotActions.DISASSOCIATE_SBOM_FROM_PACKAGE_VERSION,
		IotActions.ENABLE_TOPIC_RULE,
		IotActions.GET_CONNECTION,
		IotActions.LIST_SUBSCRIPTIONS,
		IotActions.OPEN_TUNNEL,
		IotActions.PUBLISH,
		IotActions.PUT_VERIFICATION_STATE_ON_VIOLATION,
		IotActions.RECEIVE,
		IotActions.REGISTER_CA_CERTIFICATE,
		IotActions.REGISTER_CERTIFICATE,
		IotActions.REGISTER_CERTIFICATE_WITHOUT_CA,
		IotActions.REGISTER_THING,
		IotActions.REJECT_CERTIFICATE_TRANSFER,
		IotActions.REMOVE_THING_FROM_BILLING_GROUP,
		IotActions.REMOVE_THING_FROM_THING_GROUP,
		IotActions.REPLACE_TOPIC_RULE,
		IotActions.RETAIN_PUBLISH,
		IotActions.ROTATE_TUNNEL_ACCESS_TOKEN,
		IotActions.SEND_DIRECT_MESSAGE,
		IotActions.SET_LOGGING_OPTIONS,
		IotActions.SET_V2_LOGGING_LEVEL,
		IotActions.SET_V2_LOGGING_OPTIONS,
		IotActions.START_AUDIT_MITIGATION_ACTIONS_TASK,
		IotActions.START_COMMAND_EXECUTION,
		IotActions.START_DETECT_MITIGATION_ACTIONS_TASK,
		IotActions.START_ON_DEMAND_AUDIT_TASK,
		IotActions.START_THING_REGISTRATION_TASK,
		IotActions.STOP_THING_REGISTRATION_TASK,
		IotActions.SUBSCRIBE,
		IotActions.TRANSFER_CERTIFICATE,
		IotActions.UPDATE_ACCOUNT_AUDIT_CONFIGURATION,
		IotActions.UPDATE_AUDIT_SUPPRESSION,
		IotActions.UPDATE_AUTHORIZER,
		IotActions.UPDATE_BILLING_GROUP,
		IotActions.UPDATE_CA_CERTIFICATE,
		IotActions.UPDATE_CERTIFICATE,
		IotActions.UPDATE_CERTIFICATE_PROVIDER,
		IotActions.UPDATE_COMMAND,
		IotActions.UPDATE_CUSTOM_METRIC,
		IotActions.UPDATE_DIMENSION,
		IotActions.UPDATE_DOMAIN_CONFIGURATION,
		IotActions.UPDATE_DYNAMIC_THING_GROUP,
		IotActions.UPDATE_ENCRYPTION_CONFIGURATION,
		IotActions.UPDATE_EVENT_CONFIGURATIONS,
		IotActions.UPDATE_FLEET_METRIC,
		IotActions.UPDATE_INDEXING_CONFIGURATION,
		IotActions.UPDATE_JOB,
		IotActions.UPDATE_MITIGATION_ACTION,
		IotActions.UPDATE_PACKAGE,
		IotActions.UPDATE_PACKAGE_CONFIGURATION,
		IotActions.UPDATE_PACKAGE_VERSION,
		IotActions.UPDATE_PROVISIONING_TEMPLATE,
		IotActions.UPDATE_ROLE_ALIAS,
		IotActions.UPDATE_SCHEDULED_AUDIT,
		IotActions.UPDATE_SECURITY_PROFILE,
		IotActions.UPDATE_STREAM,
		IotActions.UPDATE_THING,
		IotActions.UPDATE_THING_GROUP,
		IotActions.UPDATE_THING_GROUPS_FOR_THING,
		IotActions.UPDATE_THING_SHADOW,
		IotActions.UPDATE_THING_TYPE,
		IotActions.UPDATE_TOPIC_RULE_DESTINATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IotActions.GET_BEHAVIOR_MODEL_TRAINING_SUMMARIES,
		IotActions.LIST_ACTIVE_VIOLATIONS,
		IotActions.LIST_ATTACHED_POLICIES,
		IotActions.LIST_AUDIT_FINDINGS,
		IotActions.LIST_AUDIT_MITIGATION_ACTIONS_EXECUTIONS,
		IotActions.LIST_AUDIT_MITIGATION_ACTIONS_TASKS,
		IotActions.LIST_AUDIT_SUPPRESSIONS,
		IotActions.LIST_AUDIT_TASKS,
		IotActions.LIST_AUTHORIZERS,
		IotActions.LIST_BILLING_GROUPS,
		IotActions.LIST_CA_CERTIFICATES,
		IotActions.LIST_CERTIFICATE_PROVIDERS,
		IotActions.LIST_CERTIFICATES,
		IotActions.LIST_CERTIFICATES_BY_CA,
		IotActions.LIST_COMMAND_EXECUTIONS,
		IotActions.LIST_COMMANDS,
		IotActions.LIST_CUSTOM_METRICS,
		IotActions.LIST_DETECT_MITIGATION_ACTIONS_EXECUTIONS,
		IotActions.LIST_DETECT_MITIGATION_ACTIONS_TASKS,
		IotActions.LIST_DIMENSIONS,
		IotActions.LIST_DOMAIN_CONFIGURATIONS,
		IotActions.LIST_FLEET_METRICS,
		IotActions.LIST_INDICES,
		IotActions.LIST_JOB_EXECUTIONS_FOR_JOB,
		IotActions.LIST_JOB_EXECUTIONS_FOR_THING,
		IotActions.LIST_JOB_TEMPLATES,
		IotActions.LIST_JOBS,
		IotActions.LIST_MANAGED_JOB_TEMPLATES,
		IotActions.LIST_METRIC_VALUES,
		IotActions.LIST_MITIGATION_ACTIONS,
		IotActions.LIST_NAMED_SHADOWS_FOR_THING,
		IotActions.LIST_OTA_UPDATES,
		IotActions.LIST_OUTGOING_CERTIFICATES,
		IotActions.LIST_PACKAGE_VERSIONS,
		IotActions.LIST_PACKAGES,
		IotActions.LIST_POLICIES,
		IotActions.LIST_POLICY_PRINCIPALS,
		IotActions.LIST_POLICY_VERSIONS,
		IotActions.LIST_PRINCIPAL_POLICIES,
		IotActions.LIST_PRINCIPAL_THINGS,
		IotActions.LIST_PRINCIPAL_THINGS_V2,
		IotActions.LIST_PROVISIONING_TEMPLATE_VERSIONS,
		IotActions.LIST_PROVISIONING_TEMPLATES,
		IotActions.LIST_RELATED_RESOURCES_FOR_AUDIT_FINDING,
		IotActions.LIST_RETAINED_MESSAGES,
		IotActions.LIST_ROLE_ALIASES,
		IotActions.LIST_SBOM_VALIDATION_RESULTS,
		IotActions.LIST_SCHEDULED_AUDITS,
		IotActions.LIST_SECURITY_PROFILES,
		IotActions.LIST_SECURITY_PROFILES_FOR_TARGET,
		IotActions.LIST_STREAMS,
		IotActions.LIST_TARGETS_FOR_POLICY,
		IotActions.LIST_TARGETS_FOR_SECURITY_PROFILE,
		IotActions.LIST_THING_GROUPS,
		IotActions.LIST_THING_GROUPS_FOR_THING,
		IotActions.LIST_THING_PRINCIPALS,
		IotActions.LIST_THING_PRINCIPALS_V2,
		IotActions.LIST_THING_REGISTRATION_TASK_REPORTS,
		IotActions.LIST_THING_REGISTRATION_TASKS,
		IotActions.LIST_THING_TYPES,
		IotActions.LIST_THINGS,
		IotActions.LIST_THINGS_IN_BILLING_GROUP,
		IotActions.LIST_THINGS_IN_THING_GROUP,
		IotActions.LIST_TOPIC_RULE_DESTINATIONS,
		IotActions.LIST_TOPIC_RULES,
		IotActions.LIST_TUNNELS,
		IotActions.LIST_V2_LOGGING_LEVELS,
		IotActions.LIST_VIOLATION_EVENTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		IotActions.ATTACH_POLICY,
		IotActions.ATTACH_PRINCIPAL_POLICY,
		IotActions.CREATE_POLICY,
		IotActions.CREATE_POLICY_VERSION,
		IotActions.DELETE_POLICY,
		IotActions.DELETE_POLICY_VERSION,
		IotActions.DETACH_POLICY,
		IotActions.DETACH_PRINCIPAL_POLICY,
		IotActions.SET_DEFAULT_AUTHORIZER,
		IotActions.SET_DEFAULT_POLICY_VERSION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IotActions.TAG_RESOURCE,
		IotActions.UNTAG_RESOURCE,
	];
}

const AuthorizerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):authorizer/(?<authorizerName>[^:/?]+)$",
);
const BillinggroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):billinggroup/(?<billingGroupName>[^:/?]+)$",
);
const CacertArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):cacert/(?<caCertificate>[^:/?]+)$",
);
const CertArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):cert/(?<certificate>[^:/?]+)$",
);
const CertificateproviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):certificateprovider/(?<certificateProviderName>[^:/?]+)$",
);
const ClientArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):client/(?<clientId>[^:/?]+)$",
);
const CommandArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):command/(?<commandId>[^:/?]+)$",
);
const CustommetricArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):custommetric/(?<metricName>[^:/?]+)$",
);
const DestinationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):ruledestination/(?<destinationType>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const DimensionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):dimension/(?<dimensionName>[^:/?]+)$",
);
const DomainconfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):domainconfiguration/(?<domainConfigurationName>[^:/?]+)/(?<id>[^:/?]+)$",
);
const DynamicthinggroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thinggroup/(?<thingGroupName>[^:/?]+)$",
);
const FleetmetricArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):fleetmetric/(?<fleetMetricName>[^:/?]+)$",
);
const IndexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexName>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobId>[^:/?]+)$",
);
const JobtemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):jobtemplate/(?<jobTemplateId>[^:/?]+)$",
);
const MitigationactionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):mitigationaction/(?<mitigationActionName>[^:/?]+)$",
);
const OtaupdateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):otaupdate/(?<otaUpdateId>[^:/?]+)$",
);
const PackageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):package/(?<packageName>[^:/?]+)$",
);
const PackageversionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):package/(?<packageName>[^:/?]+)/version/(?<versionName>[^:/?]+)$",
);
const PolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):policy/(?<policyName>[^:/?]+)$",
);
const ProvisioningtemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):provisioningtemplate/(?<provisioningTemplate>[^:/?]+)$",
);
const RolealiasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):rolealias/(?<roleAlias>[^:/?]+)$",
);
const RuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):rule/(?<ruleName>[^:/?]+)$",
);
const ScheduledauditArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):scheduledaudit/(?<scheduleName>[^:/?]+)$",
);
const SecurityprofileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):securityprofile/(?<securityProfileName>[^:/?]+)$",
);
const StreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):stream/(?<streamId>[^:/?]+)$",
);
const ThingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thing/(?<thingName>[^:/?]+)$",
);
const ThinggroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thinggroup/(?<thingGroupName>[^:/?]+)$",
);
const ThingtypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):thingtype/(?<thingTypeName>[^:/?]+)$",
);
const TopicArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):topic/(?<topicName>[^:/?]+)$",
);
const TopicfilterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):topicfilter/(?<topicFilter>[^:/?]+)$",
);
const TunnelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iot:(?<region>[^:]*):(?<account>[^:]*):tunnel/(?<tunnelId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iot resources.
 */
export class IotResources {
	/**
	 * Builds an ARN for the authorizer resource.
	 */
	static authorizer(props: {
		/** The AuthorizerName component of the ARN. */
		readonly authorizerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAuthorizerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		authorizerName: string;
	} {
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
	static billinggroup(props: {
		/** The BillingGroupName component of the ARN. */
		readonly billingGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBillinggroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		billingGroupName: string;
	} {
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
	static cacert(props: {
		/** The CACertificate component of the ARN. */
		readonly caCertificate: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCacertArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		caCertificate: string;
	} {
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
	static cert(props: {
		/** The Certificate component of the ARN. */
		readonly certificate: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCertArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		certificate: string;
	} {
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
	static certificateprovider(props: {
		/** The CertificateProviderName component of the ARN. */
		readonly certificateProviderName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCertificateproviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		certificateProviderName: string;
	} {
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
	static client(props: {
		/** The ClientId component of the ARN. */
		readonly clientId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClientArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clientId: string;
	} {
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
	static command(props: {
		/** The CommandId component of the ARN. */
		readonly commandId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCommandArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		commandId: string;
	} {
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
	static custommetric(props: {
		/** The MetricName component of the ARN. */
		readonly metricName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCustommetricArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		metricName: string;
	} {
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
	static destination(props: {
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
	}): string {
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
	static parseDestinationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		destinationType: string;
		uuid: string;
	} {
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
	static dimension(props: {
		/** The DimensionName component of the ARN. */
		readonly dimensionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDimensionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dimensionName: string;
	} {
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
	static domainconfiguration(props: {
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
	}): string {
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
	static parseDomainconfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainConfigurationName: string;
		id: string;
	} {
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
	static dynamicthinggroup(props: {
		/** The ThingGroupName component of the ARN. */
		readonly thingGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDynamicthinggroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingGroupName: string;
	} {
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
	static fleetmetric(props: {
		/** The FleetMetricName component of the ARN. */
		readonly fleetMetricName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFleetmetricArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fleetMetricName: string;
	} {
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
	static index(props: {
		/** The IndexName component of the ARN. */
		readonly indexName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseIndexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexName: string;
	} {
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
	static job(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static jobtemplate(props: {
		/** The JobTemplateId component of the ARN. */
		readonly jobTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobtemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobTemplateId: string;
	} {
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
	static mitigationaction(props: {
		/** The MitigationActionName component of the ARN. */
		readonly mitigationActionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMitigationactionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		mitigationActionName: string;
	} {
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
	static otaupdate(props: {
		/** The OtaUpdateId component of the ARN. */
		readonly otaUpdateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOtaupdateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		otaUpdateId: string;
	} {
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
	static package(props: {
		/** The PackageName component of the ARN. */
		readonly packageName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePackageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		packageName: string;
	} {
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
	static packageversion(props: {
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
	}): string {
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
	static parsePackageversionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		packageName: string;
		versionName: string;
	} {
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
	static policy(props: {
		/** The PolicyName component of the ARN. */
		readonly policyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		policyName: string;
	} {
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
	static provisioningtemplate(props: {
		/** The ProvisioningTemplate component of the ARN. */
		readonly provisioningTemplate: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProvisioningtemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		provisioningTemplate: string;
	} {
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
	static rolealias(props: {
		/** The RoleAlias component of the ARN. */
		readonly roleAlias: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRolealiasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		roleAlias: string;
	} {
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
	static rule(props: {
		/** The RuleName component of the ARN. */
		readonly ruleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ruleName: string;
	} {
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
	static scheduledaudit(props: {
		/** The ScheduleName component of the ARN. */
		readonly scheduleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseScheduledauditArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scheduleName: string;
	} {
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
	static securityprofile(props: {
		/** The SecurityProfileName component of the ARN. */
		readonly securityProfileName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSecurityprofileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		securityProfileName: string;
	} {
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
	static stream(props: {
		/** The StreamId component of the ARN. */
		readonly streamId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamId: string;
	} {
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
	static thing(props: {
		/** The ThingName component of the ARN. */
		readonly thingName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseThingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingName: string;
	} {
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
	static thinggroup(props: {
		/** The ThingGroupName component of the ARN. */
		readonly thingGroupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseThinggroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingGroupName: string;
	} {
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
	static thingtype(props: {
		/** The ThingTypeName component of the ARN. */
		readonly thingTypeName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseThingtypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		thingTypeName: string;
	} {
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
	static topic(props: {
		/** The TopicName component of the ARN. */
		readonly topicName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTopicArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		topicName: string;
	} {
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
	static topicfilter(props: {
		/** The TopicFilter component of the ARN. */
		readonly topicFilter: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTopicfilterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		topicFilter: string;
	} {
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
	static tunnel(props: {
		/** The TunnelId component of the ARN. */
		readonly tunnelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTunnelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		tunnelId: string;
	} {
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
	static readonly ACCEPT_CERTIFICATE_TRANSFER: string[] = [
		"iot:AcceptCertificateTransfer",
	];
	/** IAM actions required for the AddThingToBillingGroup API call. */
	static readonly ADD_THING_TO_BILLING_GROUP: string[] = [
		"iot:AddThingToBillingGroup",
	];
	/** IAM actions required for the AddThingToThingGroup API call. */
	static readonly ADD_THING_TO_THING_GROUP: string[] = [
		"iot:AddThingToThingGroup",
	];
	/** IAM actions required for the AssociateSbomWithPackageVersion API call. */
	static readonly ASSOCIATE_SBOM_WITH_PACKAGE_VERSION: string[] = [
		"iot:AssociateSbomWithPackageVersion",
	];
	/** IAM actions required for the AssociateTargetsWithJob API call. */
	static readonly ASSOCIATE_TARGETS_WITH_JOB: string[] = [
		"iot:AssociateTargetsWithJob",
	];
	/** IAM actions required for the AttachPolicy API call. */
	static readonly ATTACH_POLICY: string[] = ["iot:AttachPolicy"];
	/** IAM actions required for the AttachPrincipalPolicy API call. */
	static readonly ATTACH_PRINCIPAL_POLICY: string[] = [
		"iot:AttachPrincipalPolicy",
	];
	/** IAM actions required for the AttachSecurityProfile API call. */
	static readonly ATTACH_SECURITY_PROFILE: string[] = [
		"iot:AttachSecurityProfile",
	];
	/** IAM actions required for the AttachThingPrincipal API call. */
	static readonly ATTACH_THING_PRINCIPAL: string[] = [
		"iot:AttachThingPrincipal",
	];
	/** IAM actions required for the CancelAuditMitigationActionsTask API call. */
	static readonly CANCEL_AUDIT_MITIGATION_ACTIONS_TASK: string[] = [
		"iot:CancelAuditMitigationActionsTask",
	];
	/** IAM actions required for the CancelAuditTask API call. */
	static readonly CANCEL_AUDIT_TASK: string[] = ["iot:CancelAuditTask"];
	/** IAM actions required for the CancelCertificateTransfer API call. */
	static readonly CANCEL_CERTIFICATE_TRANSFER: string[] = [
		"iot:CancelCertificateTransfer",
	];
	/** IAM actions required for the CancelDetectMitigationActionsTask API call. */
	static readonly CANCEL_DETECT_MITIGATION_ACTIONS_TASK: string[] = [
		"iot:CancelDetectMitigationActionsTask",
	];
	/** IAM actions required for the CancelJob API call. */
	static readonly CANCEL_JOB: string[] = ["iot:CancelJob"];
	/** IAM actions required for the CancelJobExecution API call. */
	static readonly CANCEL_JOB_EXECUTION: string[] = ["iot:CancelJobExecution"];
	/** IAM actions required for the ClearDefaultAuthorizer API call. */
	static readonly CLEAR_DEFAULT_AUTHORIZER: string[] = [
		"iot:ClearDefaultAuthorizer",
	];
	/** IAM actions required for the CloseTunnel API call. */
	static readonly CLOSE_TUNNEL: string[] = ["iot:CloseTunnel"];
	/** IAM actions required for the ConfirmTopicRuleDestination API call. */
	static readonly CONFIRM_TOPIC_RULE_DESTINATION: string[] = [];
	/** IAM actions required for the CreateAuditSuppression API call. */
	static readonly CREATE_AUDIT_SUPPRESSION: string[] = [
		"iot:CreateAuditSuppression",
	];
	/** IAM actions required for the CreateAuthorizer API call. */
	static readonly CREATE_AUTHORIZER: string[] = [
		"iot:CreateAuthorizer",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateBillingGroup API call. */
	static readonly CREATE_BILLING_GROUP: string[] = [
		"iot:CreateBillingGroup",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateCertificateFromCsr API call. */
	static readonly CREATE_CERTIFICATE_FROM_CSR: string[] = [
		"iot:CreateCertificateFromCsr",
	];
	/** IAM actions required for the CreateCertificateProvider API call. */
	static readonly CREATE_CERTIFICATE_PROVIDER: string[] = [
		"iot:CreateCertificateProvider",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateCommand API call. */
	static readonly CREATE_COMMAND: string[] = [
		"iot:CreateCommand",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateCustomMetric API call. */
	static readonly CREATE_CUSTOM_METRIC: string[] = [
		"iot:CreateCustomMetric",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateDimension API call. */
	static readonly CREATE_DIMENSION: string[] = [
		"iot:CreateDimension",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateDomainConfiguration API call. */
	static readonly CREATE_DOMAIN_CONFIGURATION: string[] = [
		"iot:CreateDomainConfiguration",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateDynamicThingGroup API call. */
	static readonly CREATE_DYNAMIC_THING_GROUP: string[] = [
		"iot:CreateDynamicThingGroup",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateFleetMetric API call. */
	static readonly CREATE_FLEET_METRIC: string[] = [
		"iot:CreateFleetMetric",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [
		"iot:CreateJob",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateJobTemplate API call. */
	static readonly CREATE_JOB_TEMPLATE: string[] = [
		"iot:CreateJobTemplate",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateKeysAndCertificate API call. */
	static readonly CREATE_KEYS_AND_CERTIFICATE: string[] = [
		"iot:CreateKeysAndCertificate",
	];
	/** IAM actions required for the CreateMitigationAction API call. */
	static readonly CREATE_MITIGATION_ACTION: string[] = [
		"iot:CreateMitigationAction",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateOTAUpdate API call. */
	static readonly CREATE_OTA_UPDATE: string[] = [
		"iot:CreateOTAUpdate",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePackage API call. */
	static readonly CREATE_PACKAGE: string[] = [
		"iot:CreatePackage",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePackageVersion API call. */
	static readonly CREATE_PACKAGE_VERSION: string[] = [
		"iot:CreatePackageVersion",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CREATE_POLICY: string[] = [
		"iot:CreatePolicy",
		"iot:TagResource",
	];
	/** IAM actions required for the CreatePolicyVersion API call. */
	static readonly CREATE_POLICY_VERSION: string[] = ["iot:CreatePolicyVersion"];
	/** IAM actions required for the CreateProvisioningClaim API call. */
	static readonly CREATE_PROVISIONING_CLAIM: string[] = [
		"iot:CreateProvisioningClaim",
	];
	/** IAM actions required for the CreateProvisioningTemplate API call. */
	static readonly CREATE_PROVISIONING_TEMPLATE: string[] = [
		"iot:CreateProvisioningTemplate",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateProvisioningTemplateVersion API call. */
	static readonly CREATE_PROVISIONING_TEMPLATE_VERSION: string[] = [
		"iot:CreateProvisioningTemplateVersion",
	];
	/** IAM actions required for the CreateRoleAlias API call. */
	static readonly CREATE_ROLE_ALIAS: string[] = [
		"iot:CreateRoleAlias",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateScheduledAudit API call. */
	static readonly CREATE_SCHEDULED_AUDIT: string[] = [
		"iot:CreateScheduledAudit",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateSecurityProfile API call. */
	static readonly CREATE_SECURITY_PROFILE: string[] = [
		"iot:CreateSecurityProfile",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateStream API call. */
	static readonly CREATE_STREAM: string[] = [
		"iot:CreateStream",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateThing API call. */
	static readonly CREATE_THING: string[] = ["iot:CreateThing"];
	/** IAM actions required for the CreateThingGroup API call. */
	static readonly CREATE_THING_GROUP: string[] = [
		"iot:CreateThingGroup",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateThingType API call. */
	static readonly CREATE_THING_TYPE: string[] = [
		"iot:CreateThingType",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateTopicRule API call. */
	static readonly CREATE_TOPIC_RULE: string[] = [
		"iot:CreateTopicRule",
		"iam:PassRole",
		"iot:TagResource",
	];
	/** IAM actions required for the CreateTopicRuleDestination API call. */
	static readonly CREATE_TOPIC_RULE_DESTINATION: string[] = [
		"iot:CreateTopicRuleDestination",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteAccountAuditConfiguration API call. */
	static readonly DELETE_ACCOUNT_AUDIT_CONFIGURATION: string[] = [
		"iot:DeleteAccountAuditConfiguration",
	];
	/** IAM actions required for the DeleteAuditSuppression API call. */
	static readonly DELETE_AUDIT_SUPPRESSION: string[] = [
		"iot:DeleteAuditSuppression",
	];
	/** IAM actions required for the DeleteAuthorizer API call. */
	static readonly DELETE_AUTHORIZER: string[] = ["iot:DeleteAuthorizer"];
	/** IAM actions required for the DeleteBillingGroup API call. */
	static readonly DELETE_BILLING_GROUP: string[] = ["iot:DeleteBillingGroup"];
	/** IAM actions required for the DeleteCACertificate API call. */
	static readonly DELETE_CA_CERTIFICATE: string[] = ["iot:DeleteCACertificate"];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DELETE_CERTIFICATE: string[] = ["iot:DeleteCertificate"];
	/** IAM actions required for the DeleteCertificateProvider API call. */
	static readonly DELETE_CERTIFICATE_PROVIDER: string[] = [
		"iot:DeleteCertificateProvider",
	];
	/** IAM actions required for the DeleteCommand API call. */
	static readonly DELETE_COMMAND: string[] = ["iot:DeleteCommand"];
	/** IAM actions required for the DeleteCommandExecution API call. */
	static readonly DELETE_COMMAND_EXECUTION: string[] = [
		"iot:DeleteCommandExecution",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = [];
	/** IAM actions required for the DeleteCustomMetric API call. */
	static readonly DELETE_CUSTOM_METRIC: string[] = ["iot:DeleteCustomMetric"];
	/** IAM actions required for the DeleteDimension API call. */
	static readonly DELETE_DIMENSION: string[] = ["iot:DeleteDimension"];
	/** IAM actions required for the DeleteDomainConfiguration API call. */
	static readonly DELETE_DOMAIN_CONFIGURATION: string[] = [
		"iot:DeleteDomainConfiguration",
	];
	/** IAM actions required for the DeleteDynamicThingGroup API call. */
	static readonly DELETE_DYNAMIC_THING_GROUP: string[] = [
		"iot:DeleteDynamicThingGroup",
	];
	/** IAM actions required for the DeleteFleetMetric API call. */
	static readonly DELETE_FLEET_METRIC: string[] = ["iot:DeleteFleetMetric"];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DELETE_JOB: string[] = ["iot:DeleteJob"];
	/** IAM actions required for the DeleteJobExecution API call. */
	static readonly DELETE_JOB_EXECUTION: string[] = ["iot:DeleteJobExecution"];
	/** IAM actions required for the DeleteJobTemplate API call. */
	static readonly DELETE_JOB_TEMPLATE: string[] = ["iot:DeleteJobTemplate"];
	/** IAM actions required for the DeleteMitigationAction API call. */
	static readonly DELETE_MITIGATION_ACTION: string[] = [
		"iot:DeleteMitigationAction",
	];
	/** IAM actions required for the DeleteOTAUpdate API call. */
	static readonly DELETE_OTA_UPDATE: string[] = ["iot:DeleteOTAUpdate"];
	/** IAM actions required for the DeletePackage API call. */
	static readonly DELETE_PACKAGE: string[] = ["iot:DeletePackage"];
	/** IAM actions required for the DeletePackageVersion API call. */
	static readonly DELETE_PACKAGE_VERSION: string[] = [
		"iot:DeletePackageVersion",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["iot:DeletePolicy"];
	/** IAM actions required for the DeletePolicyVersion API call. */
	static readonly DELETE_POLICY_VERSION: string[] = ["iot:DeletePolicyVersion"];
	/** IAM actions required for the DeleteProvisioningTemplate API call. */
	static readonly DELETE_PROVISIONING_TEMPLATE: string[] = [
		"iot:DeleteProvisioningTemplate",
	];
	/** IAM actions required for the DeleteProvisioningTemplateVersion API call. */
	static readonly DELETE_PROVISIONING_TEMPLATE_VERSION: string[] = [
		"iot:DeleteProvisioningTemplateVersion",
	];
	/** IAM actions required for the DeleteRegistrationCode API call. */
	static readonly DELETE_REGISTRATION_CODE: string[] = [
		"iot:DeleteRegistrationCode",
	];
	/** IAM actions required for the DeleteRoleAlias API call. */
	static readonly DELETE_ROLE_ALIAS: string[] = ["iot:DeleteRoleAlias"];
	/** IAM actions required for the DeleteScheduledAudit API call. */
	static readonly DELETE_SCHEDULED_AUDIT: string[] = [
		"iot:DeleteScheduledAudit",
	];
	/** IAM actions required for the DeleteSecurityProfile API call. */
	static readonly DELETE_SECURITY_PROFILE: string[] = [
		"iot:DeleteSecurityProfile",
	];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DELETE_STREAM: string[] = ["iot:DeleteStream"];
	/** IAM actions required for the DeleteThing API call. */
	static readonly DELETE_THING: string[] = ["iot:DeleteThing"];
	/** IAM actions required for the DeleteThingGroup API call. */
	static readonly DELETE_THING_GROUP: string[] = ["iot:DeleteThingGroup"];
	/** IAM actions required for the DeleteThingShadow API call. */
	static readonly DELETE_THING_SHADOW: string[] = [];
	/** IAM actions required for the DeleteThingType API call. */
	static readonly DELETE_THING_TYPE: string[] = ["iot:DeleteThingType"];
	/** IAM actions required for the DeleteTopicRule API call. */
	static readonly DELETE_TOPIC_RULE: string[] = ["iot:DeleteTopicRule"];
	/** IAM actions required for the DeleteTopicRuleDestination API call. */
	static readonly DELETE_TOPIC_RULE_DESTINATION: string[] = [
		"iot:DeleteTopicRuleDestination",
	];
	/** IAM actions required for the DeleteV2LoggingLevel API call. */
	static readonly DELETE_V2_LOGGING_LEVEL: string[] = [
		"iot:DeleteV2LoggingLevel",
	];
	/** IAM actions required for the DeprecateThingType API call. */
	static readonly DEPRECATE_THING_TYPE: string[] = ["iot:DeprecateThingType"];
	/** IAM actions required for the DescribeAccountAuditConfiguration API call. */
	static readonly DESCRIBE_ACCOUNT_AUDIT_CONFIGURATION: string[] = [
		"iot:DescribeAccountAuditConfiguration",
	];
	/** IAM actions required for the DescribeAuditFinding API call. */
	static readonly DESCRIBE_AUDIT_FINDING: string[] = [
		"iot:DescribeAuditFinding",
	];
	/** IAM actions required for the DescribeAuditMitigationActionsTask API call. */
	static readonly DESCRIBE_AUDIT_MITIGATION_ACTIONS_TASK: string[] = [
		"iot:DescribeAuditMitigationActionsTask",
	];
	/** IAM actions required for the DescribeAuditSuppression API call. */
	static readonly DESCRIBE_AUDIT_SUPPRESSION: string[] = [
		"iot:DescribeAuditSuppression",
	];
	/** IAM actions required for the DescribeAuditTask API call. */
	static readonly DESCRIBE_AUDIT_TASK: string[] = ["iot:DescribeAuditTask"];
	/** IAM actions required for the DescribeAuthorizer API call. */
	static readonly DESCRIBE_AUTHORIZER: string[] = ["iot:DescribeAuthorizer"];
	/** IAM actions required for the DescribeBillingGroup API call. */
	static readonly DESCRIBE_BILLING_GROUP: string[] = [
		"iot:DescribeBillingGroup",
	];
	/** IAM actions required for the DescribeCACertificate API call. */
	static readonly DESCRIBE_CA_CERTIFICATE: string[] = [
		"iot:DescribeCACertificate",
	];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DESCRIBE_CERTIFICATE: string[] = ["iot:DescribeCertificate"];
	/** IAM actions required for the DescribeCertificateProvider API call. */
	static readonly DESCRIBE_CERTIFICATE_PROVIDER: string[] = [
		"iot:DescribeCertificateProvider",
	];
	/** IAM actions required for the DescribeCustomMetric API call. */
	static readonly DESCRIBE_CUSTOM_METRIC: string[] = [
		"iot:DescribeCustomMetric",
	];
	/** IAM actions required for the DescribeDefaultAuthorizer API call. */
	static readonly DESCRIBE_DEFAULT_AUTHORIZER: string[] = [
		"iot:DescribeDefaultAuthorizer",
	];
	/** IAM actions required for the DescribeDetectMitigationActionsTask API call. */
	static readonly DESCRIBE_DETECT_MITIGATION_ACTIONS_TASK: string[] = [
		"iot:DescribeDetectMitigationActionsTask",
	];
	/** IAM actions required for the DescribeDimension API call. */
	static readonly DESCRIBE_DIMENSION: string[] = ["iot:DescribeDimension"];
	/** IAM actions required for the DescribeDomainConfiguration API call. */
	static readonly DESCRIBE_DOMAIN_CONFIGURATION: string[] = [
		"iot:DescribeDomainConfiguration",
	];
	/** IAM actions required for the DescribeEncryptionConfiguration API call. */
	static readonly DESCRIBE_ENCRYPTION_CONFIGURATION: string[] = [
		"iot:DescribeEncryptionConfiguration",
	];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DESCRIBE_ENDPOINT: string[] = ["iot:DescribeEndpoint"];
	/** IAM actions required for the DescribeEventConfigurations API call. */
	static readonly DESCRIBE_EVENT_CONFIGURATIONS: string[] = [
		"iot:DescribeEventConfigurations",
	];
	/** IAM actions required for the DescribeFleetMetric API call. */
	static readonly DESCRIBE_FLEET_METRIC: string[] = ["iot:DescribeFleetMetric"];
	/** IAM actions required for the DescribeIndex API call. */
	static readonly DESCRIBE_INDEX: string[] = ["iot:DescribeIndex"];
	/** IAM actions required for the DescribeJob API call. */
	static readonly DESCRIBE_JOB: string[] = ["iot:DescribeJob"];
	/** IAM actions required for the DescribeJobExecution API call. */
	static readonly DESCRIBE_JOB_EXECUTION: string[] = [
		"iot:DescribeJobExecution",
	];
	/** IAM actions required for the DescribeJobTemplate API call. */
	static readonly DESCRIBE_JOB_TEMPLATE: string[] = ["iot:DescribeJobTemplate"];
	/** IAM actions required for the DescribeManagedJobTemplate API call. */
	static readonly DESCRIBE_MANAGED_JOB_TEMPLATE: string[] = [
		"iot:DescribeManagedJobTemplate",
	];
	/** IAM actions required for the DescribeMitigationAction API call. */
	static readonly DESCRIBE_MITIGATION_ACTION: string[] = [
		"iot:DescribeMitigationAction",
	];
	/** IAM actions required for the DescribeProvisioningTemplate API call. */
	static readonly DESCRIBE_PROVISIONING_TEMPLATE: string[] = [
		"iot:DescribeProvisioningTemplate",
	];
	/** IAM actions required for the DescribeProvisioningTemplateVersion API call. */
	static readonly DESCRIBE_PROVISIONING_TEMPLATE_VERSION: string[] = [
		"iot:DescribeProvisioningTemplateVersion",
	];
	/** IAM actions required for the DescribeRoleAlias API call. */
	static readonly DESCRIBE_ROLE_ALIAS: string[] = ["iot:DescribeRoleAlias"];
	/** IAM actions required for the DescribeScheduledAudit API call. */
	static readonly DESCRIBE_SCHEDULED_AUDIT: string[] = [
		"iot:DescribeScheduledAudit",
	];
	/** IAM actions required for the DescribeSecurityProfile API call. */
	static readonly DESCRIBE_SECURITY_PROFILE: string[] = [
		"iot:DescribeSecurityProfile",
	];
	/** IAM actions required for the DescribeStream API call. */
	static readonly DESCRIBE_STREAM: string[] = ["iot:DescribeStream"];
	/** IAM actions required for the DescribeThing API call. */
	static readonly DESCRIBE_THING: string[] = ["iot:DescribeThing"];
	/** IAM actions required for the DescribeThingGroup API call. */
	static readonly DESCRIBE_THING_GROUP: string[] = ["iot:DescribeThingGroup"];
	/** IAM actions required for the DescribeThingRegistrationTask API call. */
	static readonly DESCRIBE_THING_REGISTRATION_TASK: string[] = [
		"iot:DescribeThingRegistrationTask",
	];
	/** IAM actions required for the DescribeThingType API call. */
	static readonly DESCRIBE_THING_TYPE: string[] = ["iot:DescribeThingType"];
	/** IAM actions required for the DescribeTunnel API call. */
	static readonly DESCRIBE_TUNNEL: string[] = ["iot:DescribeTunnel"];
	/** IAM actions required for the DetachPolicy API call. */
	static readonly DETACH_POLICY: string[] = ["iot:DetachPolicy"];
	/** IAM actions required for the DetachPrincipalPolicy API call. */
	static readonly DETACH_PRINCIPAL_POLICY: string[] = [
		"iot:DetachPrincipalPolicy",
	];
	/** IAM actions required for the DetachSecurityProfile API call. */
	static readonly DETACH_SECURITY_PROFILE: string[] = [
		"iot:DetachSecurityProfile",
	];
	/** IAM actions required for the DetachThingPrincipal API call. */
	static readonly DETACH_THING_PRINCIPAL: string[] = [
		"iot:DetachThingPrincipal",
	];
	/** IAM actions required for the DisableTopicRule API call. */
	static readonly DISABLE_TOPIC_RULE: string[] = ["iot:DisableTopicRule"];
	/** IAM actions required for the DisassociateSbomFromPackageVersion API call. */
	static readonly DISASSOCIATE_SBOM_FROM_PACKAGE_VERSION: string[] = [
		"iot:DisassociateSbomFromPackageVersion",
	];
	/** IAM actions required for the EnableTopicRule API call. */
	static readonly ENABLE_TOPIC_RULE: string[] = ["iot:EnableTopicRule"];
	/** IAM actions required for the GetBehaviorModelTrainingSummaries API call. */
	static readonly GET_BEHAVIOR_MODEL_TRAINING_SUMMARIES: string[] = [
		"iot:GetBehaviorModelTrainingSummaries",
	];
	/** IAM actions required for the GetBucketsAggregation API call. */
	static readonly GET_BUCKETS_AGGREGATION: string[] = [
		"iot:GetBucketsAggregation",
	];
	/** IAM actions required for the GetCardinality API call. */
	static readonly GET_CARDINALITY: string[] = ["iot:GetCardinality"];
	/** IAM actions required for the GetCommand API call. */
	static readonly GET_COMMAND: string[] = ["iot:GetCommand"];
	/** IAM actions required for the GetCommandExecution API call. */
	static readonly GET_COMMAND_EXECUTION: string[] = ["iot:GetCommandExecution"];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = [];
	/** IAM actions required for the GetEffectivePolicies API call. */
	static readonly GET_EFFECTIVE_POLICIES: string[] = [
		"iot:GetEffectivePolicies",
	];
	/** IAM actions required for the GetIndexingConfiguration API call. */
	static readonly GET_INDEXING_CONFIGURATION: string[] = [
		"iot:GetIndexingConfiguration",
	];
	/** IAM actions required for the GetJobDocument API call. */
	static readonly GET_JOB_DOCUMENT: string[] = ["iot:GetJobDocument"];
	/** IAM actions required for the GetLoggingOptions API call. */
	static readonly GET_LOGGING_OPTIONS: string[] = ["iot:GetLoggingOptions"];
	/** IAM actions required for the GetOTAUpdate API call. */
	static readonly GET_OTA_UPDATE: string[] = ["iot:GetOTAUpdate"];
	/** IAM actions required for the GetPackage API call. */
	static readonly GET_PACKAGE: string[] = ["iot:GetPackage"];
	/** IAM actions required for the GetPackageConfiguration API call. */
	static readonly GET_PACKAGE_CONFIGURATION: string[] = [
		"iot:GetPackageConfiguration",
	];
	/** IAM actions required for the GetPackageVersion API call. */
	static readonly GET_PACKAGE_VERSION: string[] = ["iot:GetPackageVersion"];
	/** IAM actions required for the GetPercentiles API call. */
	static readonly GET_PERCENTILES: string[] = ["iot:GetPercentiles"];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["iot:GetPolicy"];
	/** IAM actions required for the GetPolicyVersion API call. */
	static readonly GET_POLICY_VERSION: string[] = ["iot:GetPolicyVersion"];
	/** IAM actions required for the GetRegistrationCode API call. */
	static readonly GET_REGISTRATION_CODE: string[] = ["iot:GetRegistrationCode"];
	/** IAM actions required for the GetRetainedMessage API call. */
	static readonly GET_RETAINED_MESSAGE: string[] = [];
	/** IAM actions required for the GetStatistics API call. */
	static readonly GET_STATISTICS: string[] = ["iot:GetStatistics"];
	/** IAM actions required for the GetThingConnectivityData API call. */
	static readonly GET_THING_CONNECTIVITY_DATA: string[] = [
		"iot:GetThingConnectivityData",
	];
	/** IAM actions required for the GetThingShadow API call. */
	static readonly GET_THING_SHADOW: string[] = [];
	/** IAM actions required for the GetTopicRule API call. */
	static readonly GET_TOPIC_RULE: string[] = ["iot:GetTopicRule"];
	/** IAM actions required for the GetTopicRuleDestination API call. */
	static readonly GET_TOPIC_RULE_DESTINATION: string[] = [
		"iot:GetTopicRuleDestination",
	];
	/** IAM actions required for the GetV2LoggingOptions API call. */
	static readonly GET_V2_LOGGING_OPTIONS: string[] = [
		"iot:GetV2LoggingOptions",
	];
	/** IAM actions required for the ListActiveViolations API call. */
	static readonly LIST_ACTIVE_VIOLATIONS: string[] = [
		"iot:ListActiveViolations",
	];
	/** IAM actions required for the ListAttachedPolicies API call. */
	static readonly LIST_ATTACHED_POLICIES: string[] = [
		"iot:ListAttachedPolicies",
	];
	/** IAM actions required for the ListAuditFindings API call. */
	static readonly LIST_AUDIT_FINDINGS: string[] = ["iot:ListAuditFindings"];
	/** IAM actions required for the ListAuditMitigationActionsExecutions API call. */
	static readonly LIST_AUDIT_MITIGATION_ACTIONS_EXECUTIONS: string[] = [
		"iot:ListAuditMitigationActionsExecutions",
	];
	/** IAM actions required for the ListAuditMitigationActionsTasks API call. */
	static readonly LIST_AUDIT_MITIGATION_ACTIONS_TASKS: string[] = [
		"iot:ListAuditMitigationActionsTasks",
	];
	/** IAM actions required for the ListAuditSuppressions API call. */
	static readonly LIST_AUDIT_SUPPRESSIONS: string[] = [
		"iot:ListAuditSuppressions",
	];
	/** IAM actions required for the ListAuditTasks API call. */
	static readonly LIST_AUDIT_TASKS: string[] = ["iot:ListAuditTasks"];
	/** IAM actions required for the ListAuthorizers API call. */
	static readonly LIST_AUTHORIZERS: string[] = ["iot:ListAuthorizers"];
	/** IAM actions required for the ListBillingGroups API call. */
	static readonly LIST_BILLING_GROUPS: string[] = ["iot:ListBillingGroups"];
	/** IAM actions required for the ListCACertificates API call. */
	static readonly LIST_CA_CERTIFICATES: string[] = ["iot:ListCACertificates"];
	/** IAM actions required for the ListCertificateProviders API call. */
	static readonly LIST_CERTIFICATE_PROVIDERS: string[] = [
		"iot:ListCertificateProviders",
	];
	/** IAM actions required for the ListCertificates API call. */
	static readonly LIST_CERTIFICATES: string[] = ["iot:ListCertificates"];
	/** IAM actions required for the ListCertificatesByCA API call. */
	static readonly LIST_CERTIFICATES_BY_CA: string[] = [
		"iot:ListCertificatesByCA",
	];
	/** IAM actions required for the ListCommandExecutions API call. */
	static readonly LIST_COMMAND_EXECUTIONS: string[] = [
		"iot:ListCommandExecutions",
	];
	/** IAM actions required for the ListCommands API call. */
	static readonly LIST_COMMANDS: string[] = ["iot:ListCommands"];
	/** IAM actions required for the ListCustomMetrics API call. */
	static readonly LIST_CUSTOM_METRICS: string[] = ["iot:ListCustomMetrics"];
	/** IAM actions required for the ListDetectMitigationActionsExecutions API call. */
	static readonly LIST_DETECT_MITIGATION_ACTIONS_EXECUTIONS: string[] = [
		"iot:ListDetectMitigationActionsExecutions",
	];
	/** IAM actions required for the ListDetectMitigationActionsTasks API call. */
	static readonly LIST_DETECT_MITIGATION_ACTIONS_TASKS: string[] = [
		"iot:ListDetectMitigationActionsTasks",
	];
	/** IAM actions required for the ListDimensions API call. */
	static readonly LIST_DIMENSIONS: string[] = ["iot:ListDimensions"];
	/** IAM actions required for the ListDomainConfigurations API call. */
	static readonly LIST_DOMAIN_CONFIGURATIONS: string[] = [
		"iot:ListDomainConfigurations",
	];
	/** IAM actions required for the ListFleetMetrics API call. */
	static readonly LIST_FLEET_METRICS: string[] = ["iot:ListFleetMetrics"];
	/** IAM actions required for the ListIndices API call. */
	static readonly LIST_INDICES: string[] = ["iot:ListIndices"];
	/** IAM actions required for the ListJobExecutionsForJob API call. */
	static readonly LIST_JOB_EXECUTIONS_FOR_JOB: string[] = [
		"iot:ListJobExecutionsForJob",
	];
	/** IAM actions required for the ListJobExecutionsForThing API call. */
	static readonly LIST_JOB_EXECUTIONS_FOR_THING: string[] = [
		"iot:ListJobExecutionsForThing",
	];
	/** IAM actions required for the ListJobTemplates API call. */
	static readonly LIST_JOB_TEMPLATES: string[] = ["iot:ListJobTemplates"];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["iot:ListJobs"];
	/** IAM actions required for the ListManagedJobTemplates API call. */
	static readonly LIST_MANAGED_JOB_TEMPLATES: string[] = [
		"iot:ListManagedJobTemplates",
	];
	/** IAM actions required for the ListMetricValues API call. */
	static readonly LIST_METRIC_VALUES: string[] = ["iot:ListMetricValues"];
	/** IAM actions required for the ListMitigationActions API call. */
	static readonly LIST_MITIGATION_ACTIONS: string[] = [
		"iot:ListMitigationActions",
	];
	/** IAM actions required for the ListNamedShadowsForThing API call. */
	static readonly LIST_NAMED_SHADOWS_FOR_THING: string[] = [];
	/** IAM actions required for the ListOTAUpdates API call. */
	static readonly LIST_OTA_UPDATES: string[] = ["iot:ListOTAUpdates"];
	/** IAM actions required for the ListOutgoingCertificates API call. */
	static readonly LIST_OUTGOING_CERTIFICATES: string[] = [
		"iot:ListOutgoingCertificates",
	];
	/** IAM actions required for the ListPackageVersions API call. */
	static readonly LIST_PACKAGE_VERSIONS: string[] = ["iot:ListPackageVersions"];
	/** IAM actions required for the ListPackages API call. */
	static readonly LIST_PACKAGES: string[] = ["iot:ListPackages"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = ["iot:ListPolicies"];
	/** IAM actions required for the ListPolicyPrincipals API call. */
	static readonly LIST_POLICY_PRINCIPALS: string[] = [
		"iot:ListPolicyPrincipals",
	];
	/** IAM actions required for the ListPolicyVersions API call. */
	static readonly LIST_POLICY_VERSIONS: string[] = ["iot:ListPolicyVersions"];
	/** IAM actions required for the ListPrincipalPolicies API call. */
	static readonly LIST_PRINCIPAL_POLICIES: string[] = [
		"iot:ListPrincipalPolicies",
	];
	/** IAM actions required for the ListPrincipalThings API call. */
	static readonly LIST_PRINCIPAL_THINGS: string[] = ["iot:ListPrincipalThings"];
	/** IAM actions required for the ListPrincipalThingsV2 API call. */
	static readonly LIST_PRINCIPAL_THINGS_V2: string[] = [
		"iot:ListPrincipalThingsV2",
	];
	/** IAM actions required for the ListProvisioningTemplateVersions API call. */
	static readonly LIST_PROVISIONING_TEMPLATE_VERSIONS: string[] = [
		"iot:ListProvisioningTemplateVersions",
	];
	/** IAM actions required for the ListProvisioningTemplates API call. */
	static readonly LIST_PROVISIONING_TEMPLATES: string[] = [
		"iot:ListProvisioningTemplates",
	];
	/** IAM actions required for the ListRelatedResourcesForAuditFinding API call. */
	static readonly LIST_RELATED_RESOURCES_FOR_AUDIT_FINDING: string[] = [
		"iot:ListRelatedResourcesForAuditFinding",
	];
	/** IAM actions required for the ListRetainedMessages API call. */
	static readonly LIST_RETAINED_MESSAGES: string[] = [];
	/** IAM actions required for the ListRoleAliases API call. */
	static readonly LIST_ROLE_ALIASES: string[] = ["iot:ListRoleAliases"];
	/** IAM actions required for the ListSbomValidationResults API call. */
	static readonly LIST_SBOM_VALIDATION_RESULTS: string[] = [
		"iot:ListSbomValidationResults",
	];
	/** IAM actions required for the ListScheduledAudits API call. */
	static readonly LIST_SCHEDULED_AUDITS: string[] = ["iot:ListScheduledAudits"];
	/** IAM actions required for the ListSecurityProfiles API call. */
	static readonly LIST_SECURITY_PROFILES: string[] = [
		"iot:ListSecurityProfiles",
	];
	/** IAM actions required for the ListSecurityProfilesForTarget API call. */
	static readonly LIST_SECURITY_PROFILES_FOR_TARGET: string[] = [
		"iot:ListSecurityProfilesForTarget",
	];
	/** IAM actions required for the ListStreams API call. */
	static readonly LIST_STREAMS: string[] = ["iot:ListStreams"];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly LIST_SUBSCRIPTIONS: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"iot:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetsForPolicy API call. */
	static readonly LIST_TARGETS_FOR_POLICY: string[] = [
		"iot:ListTargetsForPolicy",
	];
	/** IAM actions required for the ListTargetsForSecurityProfile API call. */
	static readonly LIST_TARGETS_FOR_SECURITY_PROFILE: string[] = [
		"iot:ListTargetsForSecurityProfile",
	];
	/** IAM actions required for the ListThingGroups API call. */
	static readonly LIST_THING_GROUPS: string[] = ["iot:ListThingGroups"];
	/** IAM actions required for the ListThingGroupsForThing API call. */
	static readonly LIST_THING_GROUPS_FOR_THING: string[] = [
		"iot:ListThingGroupsForThing",
	];
	/** IAM actions required for the ListThingPrincipals API call. */
	static readonly LIST_THING_PRINCIPALS: string[] = ["iot:ListThingPrincipals"];
	/** IAM actions required for the ListThingPrincipalsV2 API call. */
	static readonly LIST_THING_PRINCIPALS_V2: string[] = [
		"iot:ListThingPrincipalsV2",
	];
	/** IAM actions required for the ListThingRegistrationTaskReports API call. */
	static readonly LIST_THING_REGISTRATION_TASK_REPORTS: string[] = [
		"iot:ListThingRegistrationTaskReports",
	];
	/** IAM actions required for the ListThingRegistrationTasks API call. */
	static readonly LIST_THING_REGISTRATION_TASKS: string[] = [
		"iot:ListThingRegistrationTasks",
	];
	/** IAM actions required for the ListThingTypes API call. */
	static readonly LIST_THING_TYPES: string[] = ["iot:ListThingTypes"];
	/** IAM actions required for the ListThings API call. */
	static readonly LIST_THINGS: string[] = ["iot:ListThings"];
	/** IAM actions required for the ListThingsInBillingGroup API call. */
	static readonly LIST_THINGS_IN_BILLING_GROUP: string[] = [
		"iot:ListThingsInBillingGroup",
	];
	/** IAM actions required for the ListThingsInThingGroup API call. */
	static readonly LIST_THINGS_IN_THING_GROUP: string[] = [
		"iot:ListThingsInThingGroup",
	];
	/** IAM actions required for the ListTopicRuleDestinations API call. */
	static readonly LIST_TOPIC_RULE_DESTINATIONS: string[] = [
		"iot:ListTopicRuleDestinations",
	];
	/** IAM actions required for the ListTopicRules API call. */
	static readonly LIST_TOPIC_RULES: string[] = ["iot:ListTopicRules"];
	/** IAM actions required for the ListTunnels API call. */
	static readonly LIST_TUNNELS: string[] = ["iot:ListTunnels"];
	/** IAM actions required for the ListV2LoggingLevels API call. */
	static readonly LIST_V2_LOGGING_LEVELS: string[] = [
		"iot:ListV2LoggingLevels",
	];
	/** IAM actions required for the ListViolationEvents API call. */
	static readonly LIST_VIOLATION_EVENTS: string[] = ["iot:ListViolationEvents"];
	/** IAM actions required for the OpenTunnel API call. */
	static readonly OPEN_TUNNEL: string[] = ["iot:OpenTunnel"];
	/** IAM actions required for the Publish API call. */
	static readonly PUBLISH: string[] = [];
	/** IAM actions required for the PutVerificationStateOnViolation API call. */
	static readonly PUT_VERIFICATION_STATE_ON_VIOLATION: string[] = [
		"iot:PutVerificationStateOnViolation",
	];
	/** IAM actions required for the RegisterCACertificate API call. */
	static readonly REGISTER_CA_CERTIFICATE: string[] = [
		"iam:PassRole",
		"iot:RegisterCACertificate",
		"iot:TagResource",
	];
	/** IAM actions required for the RegisterCertificate API call. */
	static readonly REGISTER_CERTIFICATE: string[] = ["iot:RegisterCertificate"];
	/** IAM actions required for the RegisterCertificateWithoutCA API call. */
	static readonly REGISTER_CERTIFICATE_WITHOUT_CA: string[] = [
		"iot:RegisterCertificateWithoutCA",
	];
	/** IAM actions required for the RegisterThing API call. */
	static readonly REGISTER_THING: string[] = ["iot:RegisterThing"];
	/** IAM actions required for the RejectCertificateTransfer API call. */
	static readonly REJECT_CERTIFICATE_TRANSFER: string[] = [
		"iot:RejectCertificateTransfer",
	];
	/** IAM actions required for the RemoveThingFromBillingGroup API call. */
	static readonly REMOVE_THING_FROM_BILLING_GROUP: string[] = [
		"iot:RemoveThingFromBillingGroup",
	];
	/** IAM actions required for the RemoveThingFromThingGroup API call. */
	static readonly REMOVE_THING_FROM_THING_GROUP: string[] = [
		"iot:RemoveThingFromThingGroup",
	];
	/** IAM actions required for the ReplaceTopicRule API call. */
	static readonly REPLACE_TOPIC_RULE: string[] = [
		"iam:PassRole",
		"iot:ReplaceTopicRule",
	];
	/** IAM actions required for the RotateTunnelAccessToken API call. */
	static readonly ROTATE_TUNNEL_ACCESS_TOKEN: string[] = [
		"iot:RotateTunnelAccessToken",
	];
	/** IAM actions required for the SearchIndex API call. */
	static readonly SEARCH_INDEX: string[] = ["iot:SearchIndex"];
	/** IAM actions required for the SendDirectMessage API call. */
	static readonly SEND_DIRECT_MESSAGE: string[] = [];
	/** IAM actions required for the SetDefaultAuthorizer API call. */
	static readonly SET_DEFAULT_AUTHORIZER: string[] = [
		"iot:SetDefaultAuthorizer",
	];
	/** IAM actions required for the SetDefaultPolicyVersion API call. */
	static readonly SET_DEFAULT_POLICY_VERSION: string[] = [
		"iot:SetDefaultPolicyVersion",
	];
	/** IAM actions required for the SetLoggingOptions API call. */
	static readonly SET_LOGGING_OPTIONS: string[] = [
		"iam:PassRole",
		"iot:SetLoggingOptions",
	];
	/** IAM actions required for the SetV2LoggingLevel API call. */
	static readonly SET_V2_LOGGING_LEVEL: string[] = ["iot:SetV2LoggingLevel"];
	/** IAM actions required for the SetV2LoggingOptions API call. */
	static readonly SET_V2_LOGGING_OPTIONS: string[] = [
		"iam:PassRole",
		"iot:SetV2LoggingOptions",
	];
	/** IAM actions required for the StartAuditMitigationActionsTask API call. */
	static readonly START_AUDIT_MITIGATION_ACTIONS_TASK: string[] = [
		"iot:StartAuditMitigationActionsTask",
	];
	/** IAM actions required for the StartDetectMitigationActionsTask API call. */
	static readonly START_DETECT_MITIGATION_ACTIONS_TASK: string[] = [
		"iot:StartDetectMitigationActionsTask",
	];
	/** IAM actions required for the StartOnDemandAuditTask API call. */
	static readonly START_ON_DEMAND_AUDIT_TASK: string[] = [
		"iot:StartOnDemandAuditTask",
	];
	/** IAM actions required for the StartThingRegistrationTask API call. */
	static readonly START_THING_REGISTRATION_TASK: string[] = [
		"iam:PassRole",
		"iot:StartThingRegistrationTask",
	];
	/** IAM actions required for the StopThingRegistrationTask API call. */
	static readonly STOP_THING_REGISTRATION_TASK: string[] = [
		"iot:StopThingRegistrationTask",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["iot:TagResource"];
	/** IAM actions required for the TestAuthorization API call. */
	static readonly TEST_AUTHORIZATION: string[] = ["iot:TestAuthorization"];
	/** IAM actions required for the TestInvokeAuthorizer API call. */
	static readonly TEST_INVOKE_AUTHORIZER: string[] = [
		"iot:TestInvokeAuthorizer",
	];
	/** IAM actions required for the TransferCertificate API call. */
	static readonly TRANSFER_CERTIFICATE: string[] = ["iot:TransferCertificate"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["iot:UntagResource"];
	/** IAM actions required for the UpdateAccountAuditConfiguration API call. */
	static readonly UPDATE_ACCOUNT_AUDIT_CONFIGURATION: string[] = [
		"iam:PassRole",
		"iot:UpdateAccountAuditConfiguration",
	];
	/** IAM actions required for the UpdateAuditSuppression API call. */
	static readonly UPDATE_AUDIT_SUPPRESSION: string[] = [
		"iot:UpdateAuditSuppression",
	];
	/** IAM actions required for the UpdateAuthorizer API call. */
	static readonly UPDATE_AUTHORIZER: string[] = ["iot:UpdateAuthorizer"];
	/** IAM actions required for the UpdateBillingGroup API call. */
	static readonly UPDATE_BILLING_GROUP: string[] = ["iot:UpdateBillingGroup"];
	/** IAM actions required for the UpdateCACertificate API call. */
	static readonly UPDATE_CA_CERTIFICATE: string[] = [
		"iam:PassRole",
		"iot:UpdateCACertificate",
	];
	/** IAM actions required for the UpdateCertificate API call. */
	static readonly UPDATE_CERTIFICATE: string[] = ["iot:UpdateCertificate"];
	/** IAM actions required for the UpdateCertificateProvider API call. */
	static readonly UPDATE_CERTIFICATE_PROVIDER: string[] = [
		"iot:UpdateCertificateProvider",
	];
	/** IAM actions required for the UpdateCommand API call. */
	static readonly UPDATE_COMMAND: string[] = ["iot:UpdateCommand"];
	/** IAM actions required for the UpdateCustomMetric API call. */
	static readonly UPDATE_CUSTOM_METRIC: string[] = ["iot:UpdateCustomMetric"];
	/** IAM actions required for the UpdateDimension API call. */
	static readonly UPDATE_DIMENSION: string[] = ["iot:UpdateDimension"];
	/** IAM actions required for the UpdateDomainConfiguration API call. */
	static readonly UPDATE_DOMAIN_CONFIGURATION: string[] = [
		"iot:UpdateDomainConfiguration",
	];
	/** IAM actions required for the UpdateDynamicThingGroup API call. */
	static readonly UPDATE_DYNAMIC_THING_GROUP: string[] = [
		"iot:UpdateDynamicThingGroup",
	];
	/** IAM actions required for the UpdateEncryptionConfiguration API call. */
	static readonly UPDATE_ENCRYPTION_CONFIGURATION: string[] = [
		"iam:PassRole",
		"iot:UpdateEncryptionConfiguration",
	];
	/** IAM actions required for the UpdateEventConfigurations API call. */
	static readonly UPDATE_EVENT_CONFIGURATIONS: string[] = [
		"iot:UpdateEventConfigurations",
	];
	/** IAM actions required for the UpdateFleetMetric API call. */
	static readonly UPDATE_FLEET_METRIC: string[] = ["iot:UpdateFleetMetric"];
	/** IAM actions required for the UpdateIndexingConfiguration API call. */
	static readonly UPDATE_INDEXING_CONFIGURATION: string[] = [
		"iot:UpdateIndexingConfiguration",
	];
	/** IAM actions required for the UpdateJob API call. */
	static readonly UPDATE_JOB: string[] = ["iam:PassRole", "iot:UpdateJob"];
	/** IAM actions required for the UpdateMitigationAction API call. */
	static readonly UPDATE_MITIGATION_ACTION: string[] = [
		"iam:PassRole",
		"iot:UpdateMitigationAction",
	];
	/** IAM actions required for the UpdatePackage API call. */
	static readonly UPDATE_PACKAGE: string[] = ["iot:UpdatePackage"];
	/** IAM actions required for the UpdatePackageConfiguration API call. */
	static readonly UPDATE_PACKAGE_CONFIGURATION: string[] = [
		"iam:PassRole",
		"iot:UpdatePackageConfiguration",
	];
	/** IAM actions required for the UpdatePackageVersion API call. */
	static readonly UPDATE_PACKAGE_VERSION: string[] = [
		"iot:UpdatePackageVersion",
	];
	/** IAM actions required for the UpdateProvisioningTemplate API call. */
	static readonly UPDATE_PROVISIONING_TEMPLATE: string[] = [
		"iam:PassRole",
		"iot:UpdateProvisioningTemplate",
	];
	/** IAM actions required for the UpdateRoleAlias API call. */
	static readonly UPDATE_ROLE_ALIAS: string[] = [
		"iam:PassRole",
		"iot:UpdateRoleAlias",
	];
	/** IAM actions required for the UpdateScheduledAudit API call. */
	static readonly UPDATE_SCHEDULED_AUDIT: string[] = [
		"iot:UpdateScheduledAudit",
	];
	/** IAM actions required for the UpdateSecurityProfile API call. */
	static readonly UPDATE_SECURITY_PROFILE: string[] = [
		"iam:PassRole",
		"iot:UpdateSecurityProfile",
	];
	/** IAM actions required for the UpdateStream API call. */
	static readonly UPDATE_STREAM: string[] = [
		"iam:PassRole",
		"iot:UpdateStream",
	];
	/** IAM actions required for the UpdateThing API call. */
	static readonly UPDATE_THING: string[] = ["iot:UpdateThing"];
	/** IAM actions required for the UpdateThingGroup API call. */
	static readonly UPDATE_THING_GROUP: string[] = ["iot:UpdateThingGroup"];
	/** IAM actions required for the UpdateThingGroupsForThing API call. */
	static readonly UPDATE_THING_GROUPS_FOR_THING: string[] = [
		"iot:UpdateThingGroupsForThing",
	];
	/** IAM actions required for the UpdateThingShadow API call. */
	static readonly UPDATE_THING_SHADOW: string[] = [];
	/** IAM actions required for the UpdateThingType API call. */
	static readonly UPDATE_THING_TYPE: string[] = ["iot:UpdateThingType"];
	/** IAM actions required for the UpdateTopicRuleDestination API call. */
	static readonly UPDATE_TOPIC_RULE_DESTINATION: string[] = [
		"iot:UpdateTopicRuleDestination",
	];
	/** IAM actions required for the ValidateSecurityProfileBehaviors API call. */
	static readonly VALIDATE_SECURITY_PROFILE_BEHAVIORS: string[] = [
		"iot:ValidateSecurityProfileBehaviors",
	];
}

/**
 * Condition key constants and builders for iot.
 */
export class IotConditions {
	/** Condition keys applicable to the AttachThingPrincipal action. */
	static readonly ATTACH_THING_PRINCIPAL_CONDITION_KEYS: string[] = [
		"iot:thingArn",
	];
	/** Condition keys applicable to the CloseTunnel action. */
	static readonly CLOSE_TUNNEL_CONDITION_KEYS: string[] = ["iot:Delete"];
	/** Condition keys applicable to the CreateAuthorizer action. */
	static readonly CREATE_AUTHORIZER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBillingGroup action. */
	static readonly CREATE_BILLING_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCertificateProvider action. */
	static readonly CREATE_CERTIFICATE_PROVIDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCommand action. */
	static readonly CREATE_COMMAND_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomMetric action. */
	static readonly CREATE_CUSTOM_METRIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDimension action. */
	static readonly CREATE_DIMENSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDomainConfiguration action. */
	static readonly CREATE_DOMAIN_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iot:DomainName",
	];
	/** Condition keys applicable to the CreateDynamicThingGroup action. */
	static readonly CREATE_DYNAMIC_THING_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleetMetric action. */
	static readonly CREATE_FLEET_METRIC_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJobTemplate action. */
	static readonly CREATE_JOB_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMitigationAction action. */
	static readonly CREATE_MITIGATION_ACTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOTAUpdate action. */
	static readonly CREATE_OTA_UPDATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackage action. */
	static readonly CREATE_PACKAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackageVersion action. */
	static readonly CREATE_PACKAGE_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicy action. */
	static readonly CREATE_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProvisioningTemplate action. */
	static readonly CREATE_PROVISIONING_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoleAlias action. */
	static readonly CREATE_ROLE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScheduledAudit action. */
	static readonly CREATE_SCHEDULED_AUDIT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSecurityProfile action. */
	static readonly CREATE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStream action. */
	static readonly CREATE_STREAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThingGroup action. */
	static readonly CREATE_THING_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThingType action. */
	static readonly CREATE_THING_TYPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTopicRule action. */
	static readonly CREATE_TOPIC_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DetachThingPrincipal action. */
	static readonly DETACH_THING_PRINCIPAL_CONDITION_KEYS: string[] = [
		"iot:thingArn",
	];
	/** Condition keys applicable to the GetConnection action. */
	static readonly GET_CONNECTION_CONDITION_KEYS: string[] = [
		"iot:IncludeSocketInformation",
	];
	/** Condition keys applicable to the GetThingConnectivityData action. */
	static readonly GET_THING_CONNECTIVITY_DATA_CONDITION_KEYS: string[] = [
		"iot:IncludeSocketInformation",
	];
	/** Condition keys applicable to the OpenTunnel action. */
	static readonly OPEN_TUNNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iot:ThingGroupArn",
		"iot:TunnelDestinationService",
	];
	/** Condition keys applicable to the RegisterCACertificate action. */
	static readonly REGISTER_CA_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RotateTunnelAccessToken action. */
	static readonly ROTATE_TUNNEL_ACCESS_TOKEN_CONDITION_KEYS: string[] = [
		"iot:ClientMode",
		"iot:ThingGroupArn",
		"iot:TunnelDestinationService",
	];
	/** Condition keys applicable to the SendDirectMessage action. */
	static readonly SEND_DIRECT_MESSAGE_CONDITION_KEYS: string[] = ["iot:Topic"];
	/** Condition keys applicable to the StartCommandExecution action. */
	static readonly START_COMMAND_EXECUTION_CONDITION_KEYS: string[] = [
		"iot:CommandExecutionParameterBoolean/${CommandParameterName}",
		"iot:CommandExecutionParameterNumber/${CommandParameterName}",
		"iot:CommandExecutionParameterString/${CommandParameterName}",
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
