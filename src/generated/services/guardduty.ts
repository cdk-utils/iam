// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/guardduty.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the guardduty service.
 */
export class GuardDutyActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "guardduty";

	/** [Write] guardduty:AcceptAdministratorInvitation */
	static readonly AcceptAdministratorInvitation =
		"guardduty:AcceptAdministratorInvitation";
	/** [Write] guardduty:AcceptInvitation */
	static readonly AcceptInvitation = "guardduty:AcceptInvitation";
	/** [Write] guardduty:ArchiveFindings */
	static readonly ArchiveFindings = "guardduty:ArchiveFindings";
	/** [Write] guardduty:CreateCustomDetectionRuleAssociation */
	static readonly CreateCustomDetectionRuleAssociation =
		"guardduty:CreateCustomDetectionRuleAssociation";
	/** [Write] guardduty:CreateCustomDetectionRuleOrgConfiguration */
	static readonly CreateCustomDetectionRuleOrgConfiguration =
		"guardduty:CreateCustomDetectionRuleOrgConfiguration";
	/** [Write] guardduty:CreateDetector */
	static readonly CreateDetector = "guardduty:CreateDetector";
	/** [Write] guardduty:CreateFilter */
	static readonly CreateFilter = "guardduty:CreateFilter";
	/** [Write] guardduty:CreateIPSet */
	static readonly CreateIPSet = "guardduty:CreateIPSet";
	/** [Write] guardduty:CreateInvestigation */
	static readonly CreateInvestigation = "guardduty:CreateInvestigation";
	/** [Write] guardduty:CreateMalwareProtectionPlan */
	static readonly CreateMalwareProtectionPlan =
		"guardduty:CreateMalwareProtectionPlan";
	/** [Write] guardduty:CreateMembers */
	static readonly CreateMembers = "guardduty:CreateMembers";
	/** [Write] guardduty:CreatePublishingDestination */
	static readonly CreatePublishingDestination =
		"guardduty:CreatePublishingDestination";
	/** [Write] guardduty:CreateSampleFindings */
	static readonly CreateSampleFindings = "guardduty:CreateSampleFindings";
	/** [Write] guardduty:CreateThreatEntitySet */
	static readonly CreateThreatEntitySet = "guardduty:CreateThreatEntitySet";
	/** [Write] guardduty:CreateThreatIntelSet */
	static readonly CreateThreatIntelSet = "guardduty:CreateThreatIntelSet";
	/** [Write] guardduty:CreateTrustedEntitySet */
	static readonly CreateTrustedEntitySet = "guardduty:CreateTrustedEntitySet";
	/** [Write] guardduty:DeclineInvitations */
	static readonly DeclineInvitations = "guardduty:DeclineInvitations";
	/** [Write] guardduty:DeleteCustomDetectionRuleAssociation */
	static readonly DeleteCustomDetectionRuleAssociation =
		"guardduty:DeleteCustomDetectionRuleAssociation";
	/** [Write] guardduty:DeleteCustomDetectionRuleOrgConfiguration */
	static readonly DeleteCustomDetectionRuleOrgConfiguration =
		"guardduty:DeleteCustomDetectionRuleOrgConfiguration";
	/** [Write] guardduty:DeleteDetector */
	static readonly DeleteDetector = "guardduty:DeleteDetector";
	/** [Write] guardduty:DeleteFilter */
	static readonly DeleteFilter = "guardduty:DeleteFilter";
	/** [Write] guardduty:DeleteIPSet */
	static readonly DeleteIPSet = "guardduty:DeleteIPSet";
	/** [Write] guardduty:DeleteInvitations */
	static readonly DeleteInvitations = "guardduty:DeleteInvitations";
	/** [Write] guardduty:DeleteMalwareProtectionPlan */
	static readonly DeleteMalwareProtectionPlan =
		"guardduty:DeleteMalwareProtectionPlan";
	/** [Write] guardduty:DeleteMembers */
	static readonly DeleteMembers = "guardduty:DeleteMembers";
	/** [Write] guardduty:DeletePublishingDestination */
	static readonly DeletePublishingDestination =
		"guardduty:DeletePublishingDestination";
	/** [Write] guardduty:DeleteThreatEntitySet */
	static readonly DeleteThreatEntitySet = "guardduty:DeleteThreatEntitySet";
	/** [Write] guardduty:DeleteThreatIntelSet */
	static readonly DeleteThreatIntelSet = "guardduty:DeleteThreatIntelSet";
	/** [Write] guardduty:DeleteTrustedEntitySet */
	static readonly DeleteTrustedEntitySet = "guardduty:DeleteTrustedEntitySet";
	/** [Read] guardduty:DescribeMalwareScans */
	static readonly DescribeMalwareScans = "guardduty:DescribeMalwareScans";
	/** [Read] guardduty:DescribeOrganizationConfiguration */
	static readonly DescribeOrganizationConfiguration =
		"guardduty:DescribeOrganizationConfiguration";
	/** [Read] guardduty:DescribePublishingDestination */
	static readonly DescribePublishingDestination =
		"guardduty:DescribePublishingDestination";
	/** [Write] guardduty:DisableOrganizationAdminAccount */
	static readonly DisableOrganizationAdminAccount =
		"guardduty:DisableOrganizationAdminAccount";
	/** [Write] guardduty:DisassociateFromAdministratorAccount */
	static readonly DisassociateFromAdministratorAccount =
		"guardduty:DisassociateFromAdministratorAccount";
	/** [Write] guardduty:DisassociateFromMasterAccount */
	static readonly DisassociateFromMasterAccount =
		"guardduty:DisassociateFromMasterAccount";
	/** [Write] guardduty:DisassociateMembers */
	static readonly DisassociateMembers = "guardduty:DisassociateMembers";
	/** [Write] guardduty:EnableOrganizationAdminAccount */
	static readonly EnableOrganizationAdminAccount =
		"guardduty:EnableOrganizationAdminAccount";
	/** [Read] guardduty:GetAdministratorAccount */
	static readonly actionGetAdministratorAccount =
		"guardduty:GetAdministratorAccount";
	/** [Read] guardduty:GetCoverageStatistics */
	static readonly actionGetCoverageStatistics =
		"guardduty:GetCoverageStatistics";
	/** [Read] guardduty:GetCustomDetectionRule */
	static readonly actionGetCustomDetectionRule =
		"guardduty:GetCustomDetectionRule";
	/** [Read] guardduty:GetCustomDetectionRuleAssociation */
	static readonly actionGetCustomDetectionRuleAssociation =
		"guardduty:GetCustomDetectionRuleAssociation";
	/** [Read] guardduty:GetCustomDetectionRuleOrgConfiguration */
	static readonly actionGetCustomDetectionRuleOrgConfiguration =
		"guardduty:GetCustomDetectionRuleOrgConfiguration";
	/** [Read] guardduty:GetDetector */
	static readonly actionGetDetector = "guardduty:GetDetector";
	/** [Read] guardduty:GetFilter */
	static readonly actionGetFilter = "guardduty:GetFilter";
	/** [Read] guardduty:GetFindings */
	static readonly actionGetFindings = "guardduty:GetFindings";
	/** [Read] guardduty:GetFindingsStatistics */
	static readonly actionGetFindingsStatistics =
		"guardduty:GetFindingsStatistics";
	/** [Read] guardduty:GetIPSet */
	static readonly actionGetIPSet = "guardduty:GetIPSet";
	/** [Read] guardduty:GetInvestigation */
	static readonly actionGetInvestigation = "guardduty:GetInvestigation";
	/** [Read] guardduty:GetInvitationsCount */
	static readonly actionGetInvitationsCount = "guardduty:GetInvitationsCount";
	/** [Read] guardduty:GetMalwareProtectionPlan */
	static readonly actionGetMalwareProtectionPlan =
		"guardduty:GetMalwareProtectionPlan";
	/** [Read] guardduty:GetMalwareScan */
	static readonly actionGetMalwareScan = "guardduty:GetMalwareScan";
	/** [Read] guardduty:GetMalwareScanSettings */
	static readonly actionGetMalwareScanSettings =
		"guardduty:GetMalwareScanSettings";
	/** [Read] guardduty:GetMasterAccount */
	static readonly actionGetMasterAccount = "guardduty:GetMasterAccount";
	/** [Read] guardduty:GetMemberDetectors */
	static readonly actionGetMemberDetectors = "guardduty:GetMemberDetectors";
	/** [Read] guardduty:GetMembers */
	static readonly actionGetMembers = "guardduty:GetMembers";
	/** [Read] guardduty:GetOrganizationStatistics */
	static readonly actionGetOrganizationStatistics =
		"guardduty:GetOrganizationStatistics";
	/** [Read] guardduty:GetRemainingFreeTrialDays */
	static readonly actionGetRemainingFreeTrialDays =
		"guardduty:GetRemainingFreeTrialDays";
	/** [Read] guardduty:GetThreatEntitySet */
	static readonly actionGetThreatEntitySet = "guardduty:GetThreatEntitySet";
	/** [Read] guardduty:GetThreatIntelSet */
	static readonly actionGetThreatIntelSet = "guardduty:GetThreatIntelSet";
	/** [Read] guardduty:GetTrustedEntitySet */
	static readonly actionGetTrustedEntitySet = "guardduty:GetTrustedEntitySet";
	/** [Read] guardduty:GetUsageStatistics */
	static readonly actionGetUsageStatistics = "guardduty:GetUsageStatistics";
	/** [Write] guardduty:InviteMembers */
	static readonly InviteMembers = "guardduty:InviteMembers";
	/** [List] guardduty:ListCoverage */
	static readonly ListCoverage = "guardduty:ListCoverage";
	/** [List] guardduty:ListCustomDetectionRuleAssociations */
	static readonly ListCustomDetectionRuleAssociations =
		"guardduty:ListCustomDetectionRuleAssociations";
	/** [List] guardduty:ListCustomDetectionRuleOrgConfigurations */
	static readonly ListCustomDetectionRuleOrgConfigurations =
		"guardduty:ListCustomDetectionRuleOrgConfigurations";
	/** [List] guardduty:ListCustomDetectionRules */
	static readonly ListCustomDetectionRules =
		"guardduty:ListCustomDetectionRules";
	/** [List] guardduty:ListDetectors */
	static readonly ListDetectors = "guardduty:ListDetectors";
	/** [List] guardduty:ListFilters */
	static readonly ListFilters = "guardduty:ListFilters";
	/** [List] guardduty:ListFindings */
	static readonly ListFindings = "guardduty:ListFindings";
	/** [List] guardduty:ListIPSets */
	static readonly ListIPSets = "guardduty:ListIPSets";
	/** [List] guardduty:ListInvestigations */
	static readonly ListInvestigations = "guardduty:ListInvestigations";
	/** [List] guardduty:ListInvitations */
	static readonly ListInvitations = "guardduty:ListInvitations";
	/** [List] guardduty:ListMalwareProtectionPlans */
	static readonly ListMalwareProtectionPlans =
		"guardduty:ListMalwareProtectionPlans";
	/** [List] guardduty:ListMalwareScans */
	static readonly ListMalwareScans = "guardduty:ListMalwareScans";
	/** [List] guardduty:ListMembers */
	static readonly ListMembers = "guardduty:ListMembers";
	/** [List] guardduty:ListOrganizationAdminAccounts */
	static readonly ListOrganizationAdminAccounts =
		"guardduty:ListOrganizationAdminAccounts";
	/** [List] guardduty:ListPublishingDestinations */
	static readonly ListPublishingDestinations =
		"guardduty:ListPublishingDestinations";
	/** [Read] guardduty:ListTagsForResource */
	static readonly ListTagsForResource = "guardduty:ListTagsForResource";
	/** [List] guardduty:ListThreatEntitySets */
	static readonly ListThreatEntitySets = "guardduty:ListThreatEntitySets";
	/** [List] guardduty:ListThreatIntelSets */
	static readonly ListThreatIntelSets = "guardduty:ListThreatIntelSets";
	/** [List] guardduty:ListTrustedEntitySets */
	static readonly ListTrustedEntitySets = "guardduty:ListTrustedEntitySets";
	/** [Write] guardduty:SendObjectMalwareScan */
	static readonly SendObjectMalwareScan = "guardduty:SendObjectMalwareScan";
	/** [Write] guardduty:SendSecurityTelemetry */
	static readonly SendSecurityTelemetry = "guardduty:SendSecurityTelemetry";
	/** [Write] guardduty:StartMalwareScan */
	static readonly StartMalwareScan = "guardduty:StartMalwareScan";
	/** [Write] guardduty:StartMonitoringMembers */
	static readonly StartMonitoringMembers = "guardduty:StartMonitoringMembers";
	/** [Write] guardduty:StopMonitoringMembers */
	static readonly StopMonitoringMembers = "guardduty:StopMonitoringMembers";
	/** [Tagging] guardduty:TagResource */
	static readonly TagResource = "guardduty:TagResource";
	/** [Write] guardduty:UnarchiveFindings */
	static readonly UnarchiveFindings = "guardduty:UnarchiveFindings";
	/** [Tagging] guardduty:UntagResource */
	static readonly UntagResource = "guardduty:UntagResource";
	/** [Write] guardduty:UpdateCustomDetectionRuleAssociation */
	static readonly UpdateCustomDetectionRuleAssociation =
		"guardduty:UpdateCustomDetectionRuleAssociation";
	/** [Write] guardduty:UpdateCustomDetectionRuleOrgConfiguration */
	static readonly UpdateCustomDetectionRuleOrgConfiguration =
		"guardduty:UpdateCustomDetectionRuleOrgConfiguration";
	/** [Write] guardduty:UpdateDetector */
	static readonly UpdateDetector = "guardduty:UpdateDetector";
	/** [Write] guardduty:UpdateFilter */
	static readonly UpdateFilter = "guardduty:UpdateFilter";
	/** [Write] guardduty:UpdateFindingsFeedback */
	static readonly UpdateFindingsFeedback = "guardduty:UpdateFindingsFeedback";
	/** [Write] guardduty:UpdateIPSet */
	static readonly UpdateIPSet = "guardduty:UpdateIPSet";
	/** [Write] guardduty:UpdateMalwareProtectionPlan */
	static readonly UpdateMalwareProtectionPlan =
		"guardduty:UpdateMalwareProtectionPlan";
	/** [Write] guardduty:UpdateMalwareScanSettings */
	static readonly UpdateMalwareScanSettings =
		"guardduty:UpdateMalwareScanSettings";
	/** [Write] guardduty:UpdateMemberDetectors */
	static readonly UpdateMemberDetectors = "guardduty:UpdateMemberDetectors";
	/** [Write] guardduty:UpdateOrganizationConfiguration */
	static readonly UpdateOrganizationConfiguration =
		"guardduty:UpdateOrganizationConfiguration";
	/** [Write] guardduty:UpdatePublishingDestination */
	static readonly UpdatePublishingDestination =
		"guardduty:UpdatePublishingDestination";
	/** [Write] guardduty:UpdateThreatEntitySet */
	static readonly UpdateThreatEntitySet = "guardduty:UpdateThreatEntitySet";
	/** [Write] guardduty:UpdateThreatIntelSet */
	static readonly UpdateThreatIntelSet = "guardduty:UpdateThreatIntelSet";
	/** [Write] guardduty:UpdateTrustedEntitySet */
	static readonly UpdateTrustedEntitySet = "guardduty:UpdateTrustedEntitySet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GuardDutyActions.DescribeMalwareScans,
		GuardDutyActions.DescribeOrganizationConfiguration,
		GuardDutyActions.DescribePublishingDestination,
		GuardDutyActions.actionGetAdministratorAccount,
		GuardDutyActions.actionGetCoverageStatistics,
		GuardDutyActions.actionGetCustomDetectionRule,
		GuardDutyActions.actionGetCustomDetectionRuleAssociation,
		GuardDutyActions.actionGetCustomDetectionRuleOrgConfiguration,
		GuardDutyActions.actionGetDetector,
		GuardDutyActions.actionGetFilter,
		GuardDutyActions.actionGetFindings,
		GuardDutyActions.actionGetFindingsStatistics,
		GuardDutyActions.actionGetIPSet,
		GuardDutyActions.actionGetInvestigation,
		GuardDutyActions.actionGetInvitationsCount,
		GuardDutyActions.actionGetMalwareProtectionPlan,
		GuardDutyActions.actionGetMalwareScan,
		GuardDutyActions.actionGetMalwareScanSettings,
		GuardDutyActions.actionGetMasterAccount,
		GuardDutyActions.actionGetMemberDetectors,
		GuardDutyActions.actionGetMembers,
		GuardDutyActions.actionGetOrganizationStatistics,
		GuardDutyActions.actionGetRemainingFreeTrialDays,
		GuardDutyActions.actionGetThreatEntitySet,
		GuardDutyActions.actionGetThreatIntelSet,
		GuardDutyActions.actionGetTrustedEntitySet,
		GuardDutyActions.actionGetUsageStatistics,
		GuardDutyActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GuardDutyActions.AcceptAdministratorInvitation,
		GuardDutyActions.AcceptInvitation,
		GuardDutyActions.ArchiveFindings,
		GuardDutyActions.CreateCustomDetectionRuleAssociation,
		GuardDutyActions.CreateCustomDetectionRuleOrgConfiguration,
		GuardDutyActions.CreateDetector,
		GuardDutyActions.CreateFilter,
		GuardDutyActions.CreateIPSet,
		GuardDutyActions.CreateInvestigation,
		GuardDutyActions.CreateMalwareProtectionPlan,
		GuardDutyActions.CreateMembers,
		GuardDutyActions.CreatePublishingDestination,
		GuardDutyActions.CreateSampleFindings,
		GuardDutyActions.CreateThreatEntitySet,
		GuardDutyActions.CreateThreatIntelSet,
		GuardDutyActions.CreateTrustedEntitySet,
		GuardDutyActions.DeclineInvitations,
		GuardDutyActions.DeleteCustomDetectionRuleAssociation,
		GuardDutyActions.DeleteCustomDetectionRuleOrgConfiguration,
		GuardDutyActions.DeleteDetector,
		GuardDutyActions.DeleteFilter,
		GuardDutyActions.DeleteIPSet,
		GuardDutyActions.DeleteInvitations,
		GuardDutyActions.DeleteMalwareProtectionPlan,
		GuardDutyActions.DeleteMembers,
		GuardDutyActions.DeletePublishingDestination,
		GuardDutyActions.DeleteThreatEntitySet,
		GuardDutyActions.DeleteThreatIntelSet,
		GuardDutyActions.DeleteTrustedEntitySet,
		GuardDutyActions.DisableOrganizationAdminAccount,
		GuardDutyActions.DisassociateFromAdministratorAccount,
		GuardDutyActions.DisassociateFromMasterAccount,
		GuardDutyActions.DisassociateMembers,
		GuardDutyActions.EnableOrganizationAdminAccount,
		GuardDutyActions.InviteMembers,
		GuardDutyActions.SendObjectMalwareScan,
		GuardDutyActions.SendSecurityTelemetry,
		GuardDutyActions.StartMalwareScan,
		GuardDutyActions.StartMonitoringMembers,
		GuardDutyActions.StopMonitoringMembers,
		GuardDutyActions.UnarchiveFindings,
		GuardDutyActions.UpdateCustomDetectionRuleAssociation,
		GuardDutyActions.UpdateCustomDetectionRuleOrgConfiguration,
		GuardDutyActions.UpdateDetector,
		GuardDutyActions.UpdateFilter,
		GuardDutyActions.UpdateFindingsFeedback,
		GuardDutyActions.UpdateIPSet,
		GuardDutyActions.UpdateMalwareProtectionPlan,
		GuardDutyActions.UpdateMalwareScanSettings,
		GuardDutyActions.UpdateMemberDetectors,
		GuardDutyActions.UpdateOrganizationConfiguration,
		GuardDutyActions.UpdatePublishingDestination,
		GuardDutyActions.UpdateThreatEntitySet,
		GuardDutyActions.UpdateThreatIntelSet,
		GuardDutyActions.UpdateTrustedEntitySet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GuardDutyActions.ListCoverage,
		GuardDutyActions.ListCustomDetectionRuleAssociations,
		GuardDutyActions.ListCustomDetectionRuleOrgConfigurations,
		GuardDutyActions.ListCustomDetectionRules,
		GuardDutyActions.ListDetectors,
		GuardDutyActions.ListFilters,
		GuardDutyActions.ListFindings,
		GuardDutyActions.ListIPSets,
		GuardDutyActions.ListInvestigations,
		GuardDutyActions.ListInvitations,
		GuardDutyActions.ListMalwareProtectionPlans,
		GuardDutyActions.ListMalwareScans,
		GuardDutyActions.ListMembers,
		GuardDutyActions.ListOrganizationAdminAccounts,
		GuardDutyActions.ListPublishingDestinations,
		GuardDutyActions.ListThreatEntitySets,
		GuardDutyActions.ListThreatIntelSets,
		GuardDutyActions.ListTrustedEntitySets,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GuardDutyActions.TagResource,
		GuardDutyActions.UntagResource,
	];
}

/**
 * Properties for building a customdetectionrule ARN.
 */
export interface GuardDutyCustomdetectionruleArnProps {
	/** The RuleId component of the ARN. */
	readonly ruleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customdetectionrule ARN.
 */
export interface GuardDutyCustomdetectionruleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleId component. */
	readonly ruleId: string;
}

/**
 * Properties for building a customdetectionruleassociation ARN.
 */
export interface GuardDutyCustomdetectionruleassociationArnProps {
	/** The RuleId component of the ARN. */
	readonly ruleId: string;
	/** The AssociationId component of the ARN. */
	readonly associationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customdetectionruleassociation ARN.
 */
export interface GuardDutyCustomdetectionruleassociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleId component. */
	readonly ruleId: string;
	/** The AssociationId component. */
	readonly associationId: string;
}

/**
 * Properties for building a detector ARN.
 */
export interface GuardDutyDetectorArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a detector ARN.
 */
export interface GuardDutyDetectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
}

/**
 * Properties for building a filter ARN.
 */
export interface GuardDutyFilterArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** The FilterName component of the ARN. */
	readonly filterName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a filter ARN.
 */
export interface GuardDutyFilterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
	/** The FilterName component. */
	readonly filterName: string;
}

/**
 * Properties for building a ipset ARN.
 */
export interface GuardDutyIpsetArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** The IPSetId component of the ARN. */
	readonly ipSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ipset ARN.
 */
export interface GuardDutyIpsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
	/** The IPSetId component. */
	readonly ipSetId: string;
}

/**
 * Properties for building a malwareprotectionplan ARN.
 */
export interface GuardDutyMalwareprotectionplanArnProps {
	/** The MalwareProtectionPlanId component of the ARN. */
	readonly malwareProtectionPlanId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a malwareprotectionplan ARN.
 */
export interface GuardDutyMalwareprotectionplanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MalwareProtectionPlanId component. */
	readonly malwareProtectionPlanId: string;
}

/**
 * Properties for building a publishingDestination ARN.
 */
export interface GuardDutyPublishingDestinationArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** The PublishingDestinationId component of the ARN. */
	readonly publishingDestinationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a publishingDestination ARN.
 */
export interface GuardDutyPublishingDestinationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
	/** The PublishingDestinationId component. */
	readonly publishingDestinationId: string;
}

/**
 * Properties for building a threatentityset ARN.
 */
export interface GuardDutyThreatentitysetArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** The ThreatEntitySetId component of the ARN. */
	readonly threatEntitySetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a threatentityset ARN.
 */
export interface GuardDutyThreatentitysetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
	/** The ThreatEntitySetId component. */
	readonly threatEntitySetId: string;
}

/**
 * Properties for building a threatintelset ARN.
 */
export interface GuardDutyThreatintelsetArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** The ThreatIntelSetId component of the ARN. */
	readonly threatIntelSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a threatintelset ARN.
 */
export interface GuardDutyThreatintelsetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
	/** The ThreatIntelSetId component. */
	readonly threatIntelSetId: string;
}

/**
 * Properties for building a trustedentityset ARN.
 */
export interface GuardDutyTrustedentitysetArnProps {
	/** The DetectorId component of the ARN. */
	readonly detectorId: string;
	/** The TrustedEntitySetId component of the ARN. */
	readonly trustedEntitySetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a trustedentityset ARN.
 */
export interface GuardDutyTrustedentitysetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DetectorId component. */
	readonly detectorId: string;
	/** The TrustedEntitySetId component. */
	readonly trustedEntitySetId: string;
}

const CustomdetectionruleArnRegex =
	/^arn:(?<partition>[^:]+):guardduty::aws:detection-rule\/custom\/(?<ruleId>[^:/?]+)$/;
const CustomdetectionruleassociationArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detection-rule\/custom\/(?<ruleId>[^:/?]+)\/association\/(?<associationId>[^:/?]+)$/;
const DetectorArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<detectorId>[^:/?]+)$/;
const FilterArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<detectorId>[^:/?]+)\/filter\/(?<filterName>[^:/?]+)$/;
const IpsetArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<detectorId>[^:/?]+)\/ipset\/(?<ipSetId>[^:/?]+)$/;
const MalwareprotectionplanArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):malware-protection-plan\/(?<malwareProtectionPlanId>[^:/?]+)$/;
const PublishingDestinationArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<detectorId>[^:/?]+)\/publishingdestination\/(?<publishingDestinationId>[^:/?]+)$/;
const ThreatentitysetArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<detectorId>[^:/?]+)\/threatentityset\/(?<threatEntitySetId>[^:/?]+)$/;
const ThreatintelsetArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<detectorId>[^:/?]+)\/threatintelset\/(?<threatIntelSetId>[^:/?]+)$/;
const TrustedentitysetArnRegex =
	/^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector\/(?<detectorId>[^:/?]+)\/trustedentityset\/(?<trustedEntitySetId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for guardduty resources.
 */
export class GuardDutyResources {
	/**
	 * Builds an ARN for the customdetectionrule resource.
	 */
	static customdetectionrule(
		props: GuardDutyCustomdetectionruleArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:guardduty::aws:detection-rule/custom/${props.ruleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customdetectionrule resource.
	 */
	static isValidCustomdetectionruleArn(arn: string): boolean {
		return CustomdetectionruleArnRegex.test(arn);
	}

	/**
	 * Parses a customdetectionrule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomdetectionruleArn(
		arn: string,
	): GuardDutyCustomdetectionruleArnComponents {
		const match = CustomdetectionruleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customdetectionrule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ruleId: match.groups!.ruleId,
		};
	}

	/**
	 * Builds an ARN for the customdetectionruleassociation resource.
	 */
	static customdetectionruleassociation(
		props: GuardDutyCustomdetectionruleassociationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detection-rule/custom/${props.ruleId}/association/${props.associationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customdetectionruleassociation resource.
	 */
	static isValidCustomdetectionruleassociationArn(arn: string): boolean {
		return CustomdetectionruleassociationArnRegex.test(arn);
	}

	/**
	 * Parses a customdetectionruleassociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomdetectionruleassociationArn(
		arn: string,
	): GuardDutyCustomdetectionruleassociationArnComponents {
		const match = CustomdetectionruleassociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customdetectionruleassociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ruleId: match.groups!.ruleId,
			associationId: match.groups!.associationId,
		};
	}

	/**
	 * Builds an ARN for the detector resource.
	 */
	static detector(props: GuardDutyDetectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.detectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the detector resource.
	 */
	static isValidDetectorArn(arn: string): boolean {
		return DetectorArnRegex.test(arn);
	}

	/**
	 * Parses a detector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDetectorArn(arn: string): GuardDutyDetectorArnComponents {
		const match = DetectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid detector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
		};
	}

	/**
	 * Builds an ARN for the filter resource.
	 */
	static filter(props: GuardDutyFilterArnProps): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.detectorId}/filter/${props.filterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the filter resource.
	 */
	static isValidFilterArn(arn: string): boolean {
		return FilterArnRegex.test(arn);
	}

	/**
	 * Parses a filter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFilterArn(arn: string): GuardDutyFilterArnComponents {
		const match = FilterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid filter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
			filterName: match.groups!.filterName,
		};
	}

	/**
	 * Builds an ARN for the ipset resource.
	 */
	static ipset(props: GuardDutyIpsetArnProps): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.detectorId}/ipset/${props.ipSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ipset resource.
	 */
	static isValidIpsetArn(arn: string): boolean {
		return IpsetArnRegex.test(arn);
	}

	/**
	 * Parses a ipset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIpsetArn(arn: string): GuardDutyIpsetArnComponents {
		const match = IpsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ipset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
			ipSetId: match.groups!.ipSetId,
		};
	}

	/**
	 * Builds an ARN for the malwareprotectionplan resource.
	 */
	static malwareprotectionplan(
		props: GuardDutyMalwareprotectionplanArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:malware-protection-plan/${props.malwareProtectionPlanId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the malwareprotectionplan resource.
	 */
	static isValidMalwareprotectionplanArn(arn: string): boolean {
		return MalwareprotectionplanArnRegex.test(arn);
	}

	/**
	 * Parses a malwareprotectionplan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMalwareprotectionplanArn(
		arn: string,
	): GuardDutyMalwareprotectionplanArnComponents {
		const match = MalwareprotectionplanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid malwareprotectionplan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			malwareProtectionPlanId: match.groups!.malwareProtectionPlanId,
		};
	}

	/**
	 * Builds an ARN for the publishingDestination resource.
	 */
	static publishingDestination(
		props: GuardDutyPublishingDestinationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.detectorId}/publishingdestination/${props.publishingDestinationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the publishingDestination resource.
	 */
	static isValidPublishingDestinationArn(arn: string): boolean {
		return PublishingDestinationArnRegex.test(arn);
	}

	/**
	 * Parses a publishingDestination ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePublishingDestinationArn(
		arn: string,
	): GuardDutyPublishingDestinationArnComponents {
		const match = PublishingDestinationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid publishingDestination ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
			publishingDestinationId: match.groups!.publishingDestinationId,
		};
	}

	/**
	 * Builds an ARN for the threatentityset resource.
	 */
	static threatentityset(props: GuardDutyThreatentitysetArnProps): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.detectorId}/threatentityset/${props.threatEntitySetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the threatentityset resource.
	 */
	static isValidThreatentitysetArn(arn: string): boolean {
		return ThreatentitysetArnRegex.test(arn);
	}

	/**
	 * Parses a threatentityset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThreatentitysetArn(
		arn: string,
	): GuardDutyThreatentitysetArnComponents {
		const match = ThreatentitysetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid threatentityset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
			threatEntitySetId: match.groups!.threatEntitySetId,
		};
	}

	/**
	 * Builds an ARN for the threatintelset resource.
	 */
	static threatintelset(props: GuardDutyThreatintelsetArnProps): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.detectorId}/threatintelset/${props.threatIntelSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the threatintelset resource.
	 */
	static isValidThreatintelsetArn(arn: string): boolean {
		return ThreatintelsetArnRegex.test(arn);
	}

	/**
	 * Parses a threatintelset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThreatintelsetArn(
		arn: string,
	): GuardDutyThreatintelsetArnComponents {
		const match = ThreatintelsetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid threatintelset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
			threatIntelSetId: match.groups!.threatIntelSetId,
		};
	}

	/**
	 * Builds an ARN for the trustedentityset resource.
	 */
	static trustedentityset(props: GuardDutyTrustedentitysetArnProps): string {
		return `arn:${props.partition ?? "aws"}:guardduty:${props.region ?? "*"}:${props.account ?? "*"}:detector/${props.detectorId}/trustedentityset/${props.trustedEntitySetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the trustedentityset resource.
	 */
	static isValidTrustedentitysetArn(arn: string): boolean {
		return TrustedentitysetArnRegex.test(arn);
	}

	/**
	 * Parses a trustedentityset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrustedentitysetArn(
		arn: string,
	): GuardDutyTrustedentitysetArnComponents {
		const match = TrustedentitysetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid trustedentityset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			detectorId: match.groups!.detectorId,
			trustedEntitySetId: match.groups!.trustedEntitySetId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for guardduty.
 */
export class GuardDutyOperations {
	/** IAM actions required for the AcceptAdministratorInvitation API call. */
	static readonly AcceptAdministratorInvitation: string[] = [
		"guardduty:AcceptAdministratorInvitation",
	];
	/** IAM actions required for the AcceptInvitation API call. */
	static readonly AcceptInvitation: string[] = ["guardduty:AcceptInvitation"];
	/** IAM actions required for the ArchiveFindings API call. */
	static readonly ArchiveFindings: string[] = ["guardduty:ArchiveFindings"];
	/** IAM actions required for the CreateCustomDetectionRuleAssociation API call. */
	static readonly CreateCustomDetectionRuleAssociation: string[] = [
		"guardduty:CreateCustomDetectionRuleAssociation",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateCustomDetectionRuleOrgConfiguration API call. */
	static readonly CreateCustomDetectionRuleOrgConfiguration: string[] = [
		"guardduty:CreateCustomDetectionRuleOrgConfiguration",
	];
	/** IAM actions required for the CreateDetector API call. */
	static readonly CreateDetector: string[] = [
		"guardduty:CreateDetector",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateFilter API call. */
	static readonly CreateFilter: string[] = [
		"guardduty:CreateFilter",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CreateIPSet: string[] = [
		"guardduty:CreateIPSet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateInvestigation API call. */
	static readonly CreateInvestigation: string[] = [
		"guardduty:CreateInvestigation",
	];
	/** IAM actions required for the CreateMalwareProtectionPlan API call. */
	static readonly CreateMalwareProtectionPlan: string[] = [
		"guardduty:CreateMalwareProtectionPlan",
		"iam:PassRole",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateMembers API call. */
	static readonly CreateMembers: string[] = ["guardduty:CreateMembers"];
	/** IAM actions required for the CreatePublishingDestination API call. */
	static readonly CreatePublishingDestination: string[] = [
		"guardduty:CreatePublishingDestination",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateSampleFindings API call. */
	static readonly CreateSampleFindings: string[] = [
		"guardduty:CreateSampleFindings",
	];
	/** IAM actions required for the CreateThreatEntitySet API call. */
	static readonly CreateThreatEntitySet: string[] = [
		"guardduty:CreateThreatEntitySet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateThreatIntelSet API call. */
	static readonly CreateThreatIntelSet: string[] = [
		"guardduty:CreateThreatIntelSet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateTrustedEntitySet API call. */
	static readonly CreateTrustedEntitySet: string[] = [
		"guardduty:CreateTrustedEntitySet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the DeclineInvitations API call. */
	static readonly DeclineInvitations: string[] = [
		"guardduty:DeclineInvitations",
	];
	/** IAM actions required for the DeleteCustomDetectionRuleAssociation API call. */
	static readonly DeleteCustomDetectionRuleAssociation: string[] = [
		"guardduty:DeleteCustomDetectionRuleAssociation",
	];
	/** IAM actions required for the DeleteCustomDetectionRuleOrgConfiguration API call. */
	static readonly DeleteCustomDetectionRuleOrgConfiguration: string[] = [
		"guardduty:DeleteCustomDetectionRuleOrgConfiguration",
	];
	/** IAM actions required for the DeleteDetector API call. */
	static readonly DeleteDetector: string[] = ["guardduty:DeleteDetector"];
	/** IAM actions required for the DeleteFilter API call. */
	static readonly DeleteFilter: string[] = ["guardduty:DeleteFilter"];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DeleteIPSet: string[] = ["guardduty:DeleteIPSet"];
	/** IAM actions required for the DeleteInvitations API call. */
	static readonly DeleteInvitations: string[] = ["guardduty:DeleteInvitations"];
	/** IAM actions required for the DeleteMalwareProtectionPlan API call. */
	static readonly DeleteMalwareProtectionPlan: string[] = [
		"guardduty:DeleteMalwareProtectionPlan",
	];
	/** IAM actions required for the DeleteMembers API call. */
	static readonly DeleteMembers: string[] = ["guardduty:DeleteMembers"];
	/** IAM actions required for the DeletePublishingDestination API call. */
	static readonly DeletePublishingDestination: string[] = [
		"guardduty:DeletePublishingDestination",
	];
	/** IAM actions required for the DeleteThreatEntitySet API call. */
	static readonly DeleteThreatEntitySet: string[] = [
		"guardduty:DeleteThreatEntitySet",
	];
	/** IAM actions required for the DeleteThreatIntelSet API call. */
	static readonly DeleteThreatIntelSet: string[] = [
		"guardduty:DeleteThreatIntelSet",
	];
	/** IAM actions required for the DeleteTrustedEntitySet API call. */
	static readonly DeleteTrustedEntitySet: string[] = [
		"guardduty:DeleteTrustedEntitySet",
	];
	/** IAM actions required for the DescribeMalwareScans API call. */
	static readonly DescribeMalwareScans: string[] = [
		"guardduty:DescribeMalwareScans",
	];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DescribeOrganizationConfiguration: string[] = [
		"guardduty:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DescribePublishingDestination API call. */
	static readonly DescribePublishingDestination: string[] = [
		"guardduty:DescribePublishingDestination",
	];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DisableOrganizationAdminAccount: string[] = [
		"guardduty:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateFromAdministratorAccount API call. */
	static readonly DisassociateFromAdministratorAccount: string[] = [
		"guardduty:DisassociateFromAdministratorAccount",
	];
	/** IAM actions required for the DisassociateFromMasterAccount API call. */
	static readonly DisassociateFromMasterAccount: string[] = [
		"guardduty:DisassociateFromMasterAccount",
	];
	/** IAM actions required for the DisassociateMembers API call. */
	static readonly DisassociateMembers: string[] = [
		"guardduty:DisassociateMembers",
	];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly EnableOrganizationAdminAccount: string[] = [
		"guardduty:EnableOrganizationAdminAccount",
	];
	/** IAM actions required for the GetAdministratorAccount API call. */
	static readonly opGetAdministratorAccount: string[] = [
		"guardduty:GetAdministratorAccount",
	];
	/** IAM actions required for the GetCoverageStatistics API call. */
	static readonly opGetCoverageStatistics: string[] = [
		"guardduty:GetCoverageStatistics",
	];
	/** IAM actions required for the GetCustomDetectionRule API call. */
	static readonly opGetCustomDetectionRule: string[] = [
		"guardduty:GetCustomDetectionRule",
	];
	/** IAM actions required for the GetCustomDetectionRuleAssociation API call. */
	static readonly opGetCustomDetectionRuleAssociation: string[] = [
		"guardduty:GetCustomDetectionRuleAssociation",
	];
	/** IAM actions required for the GetCustomDetectionRuleOrgConfiguration API call. */
	static readonly opGetCustomDetectionRuleOrgConfiguration: string[] = [
		"guardduty:GetCustomDetectionRuleOrgConfiguration",
	];
	/** IAM actions required for the GetDetector API call. */
	static readonly opGetDetector: string[] = ["guardduty:GetDetector"];
	/** IAM actions required for the GetFilter API call. */
	static readonly opGetFilter: string[] = ["guardduty:GetFilter"];
	/** IAM actions required for the GetFindings API call. */
	static readonly opGetFindings: string[] = ["guardduty:GetFindings"];
	/** IAM actions required for the GetFindingsStatistics API call. */
	static readonly opGetFindingsStatistics: string[] = [
		"guardduty:GetFindingsStatistics",
	];
	/** IAM actions required for the GetIPSet API call. */
	static readonly opGetIPSet: string[] = ["guardduty:GetIPSet"];
	/** IAM actions required for the GetInvestigation API call. */
	static readonly opGetInvestigation: string[] = ["guardduty:GetInvestigation"];
	/** IAM actions required for the GetInvitationsCount API call. */
	static readonly opGetInvitationsCount: string[] = [
		"guardduty:GetInvitationsCount",
	];
	/** IAM actions required for the GetMalwareProtectionPlan API call. */
	static readonly opGetMalwareProtectionPlan: string[] = [
		"guardduty:GetMalwareProtectionPlan",
	];
	/** IAM actions required for the GetMalwareScan API call. */
	static readonly opGetMalwareScan: string[] = ["guardduty:GetMalwareScan"];
	/** IAM actions required for the GetMalwareScanSettings API call. */
	static readonly opGetMalwareScanSettings: string[] = [
		"guardduty:GetMalwareScanSettings",
	];
	/** IAM actions required for the GetMasterAccount API call. */
	static readonly opGetMasterAccount: string[] = ["guardduty:GetMasterAccount"];
	/** IAM actions required for the GetMemberDetectors API call. */
	static readonly opGetMemberDetectors: string[] = [
		"guardduty:GetMemberDetectors",
	];
	/** IAM actions required for the GetMembers API call. */
	static readonly opGetMembers: string[] = ["guardduty:GetMembers"];
	/** IAM actions required for the GetOrganizationStatistics API call. */
	static readonly opGetOrganizationStatistics: string[] = [
		"guardduty:GetOrganizationStatistics",
	];
	/** IAM actions required for the GetRemainingFreeTrialDays API call. */
	static readonly opGetRemainingFreeTrialDays: string[] = [
		"guardduty:GetRemainingFreeTrialDays",
	];
	/** IAM actions required for the GetThreatEntitySet API call. */
	static readonly opGetThreatEntitySet: string[] = [
		"guardduty:GetThreatEntitySet",
	];
	/** IAM actions required for the GetThreatIntelSet API call. */
	static readonly opGetThreatIntelSet: string[] = [
		"guardduty:GetThreatIntelSet",
	];
	/** IAM actions required for the GetTrustedEntitySet API call. */
	static readonly opGetTrustedEntitySet: string[] = [
		"guardduty:GetTrustedEntitySet",
	];
	/** IAM actions required for the GetUsageStatistics API call. */
	static readonly opGetUsageStatistics: string[] = [
		"guardduty:GetUsageStatistics",
	];
	/** IAM actions required for the InviteMembers API call. */
	static readonly InviteMembers: string[] = ["guardduty:InviteMembers"];
	/** IAM actions required for the ListCoverage API call. */
	static readonly ListCoverage: string[] = ["guardduty:ListCoverage"];
	/** IAM actions required for the ListCustomDetectionRuleAssociations API call. */
	static readonly ListCustomDetectionRuleAssociations: string[] = [
		"guardduty:ListCustomDetectionRuleAssociations",
	];
	/** IAM actions required for the ListCustomDetectionRuleOrgConfigurations API call. */
	static readonly ListCustomDetectionRuleOrgConfigurations: string[] = [
		"guardduty:ListCustomDetectionRuleOrgConfigurations",
	];
	/** IAM actions required for the ListCustomDetectionRules API call. */
	static readonly ListCustomDetectionRules: string[] = [
		"guardduty:ListCustomDetectionRules",
	];
	/** IAM actions required for the ListDetectors API call. */
	static readonly ListDetectors: string[] = ["guardduty:ListDetectors"];
	/** IAM actions required for the ListFilters API call. */
	static readonly ListFilters: string[] = ["guardduty:ListFilters"];
	/** IAM actions required for the ListFindings API call. */
	static readonly ListFindings: string[] = ["guardduty:ListFindings"];
	/** IAM actions required for the ListIPSets API call. */
	static readonly ListIPSets: string[] = ["guardduty:ListIPSets"];
	/** IAM actions required for the ListInvestigations API call. */
	static readonly ListInvestigations: string[] = [
		"guardduty:ListInvestigations",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly ListInvitations: string[] = ["guardduty:ListInvitations"];
	/** IAM actions required for the ListMalwareProtectionPlans API call. */
	static readonly ListMalwareProtectionPlans: string[] = [
		"guardduty:ListMalwareProtectionPlans",
	];
	/** IAM actions required for the ListMalwareScans API call. */
	static readonly ListMalwareScans: string[] = ["guardduty:ListMalwareScans"];
	/** IAM actions required for the ListMembers API call. */
	static readonly ListMembers: string[] = ["guardduty:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly ListOrganizationAdminAccounts: string[] = [
		"guardduty:ListOrganizationAdminAccounts",
	];
	/** IAM actions required for the ListPublishingDestinations API call. */
	static readonly ListPublishingDestinations: string[] = [
		"guardduty:ListPublishingDestinations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"guardduty:ListTagsForResource",
	];
	/** IAM actions required for the ListThreatEntitySets API call. */
	static readonly ListThreatEntitySets: string[] = [
		"guardduty:ListThreatEntitySets",
	];
	/** IAM actions required for the ListThreatIntelSets API call. */
	static readonly ListThreatIntelSets: string[] = [
		"guardduty:ListThreatIntelSets",
	];
	/** IAM actions required for the ListTrustedEntitySets API call. */
	static readonly ListTrustedEntitySets: string[] = [
		"guardduty:ListTrustedEntitySets",
	];
	/** IAM actions required for the SendObjectMalwareScan API call. */
	static readonly SendObjectMalwareScan: string[] = [
		"guardduty:SendObjectMalwareScan",
	];
	/** IAM actions required for the StartMalwareScan API call. */
	static readonly StartMalwareScan: string[] = [
		"iam:PassRole",
		"guardduty:StartMalwareScan",
	];
	/** IAM actions required for the StartMonitoringMembers API call. */
	static readonly StartMonitoringMembers: string[] = [
		"guardduty:StartMonitoringMembers",
	];
	/** IAM actions required for the StopMonitoringMembers API call. */
	static readonly StopMonitoringMembers: string[] = [
		"guardduty:StopMonitoringMembers",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["guardduty:TagResource"];
	/** IAM actions required for the UnarchiveFindings API call. */
	static readonly UnarchiveFindings: string[] = ["guardduty:UnarchiveFindings"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["guardduty:UntagResource"];
	/** IAM actions required for the UpdateCustomDetectionRuleAssociation API call. */
	static readonly UpdateCustomDetectionRuleAssociation: string[] = [
		"guardduty:UpdateCustomDetectionRuleAssociation",
	];
	/** IAM actions required for the UpdateCustomDetectionRuleOrgConfiguration API call. */
	static readonly UpdateCustomDetectionRuleOrgConfiguration: string[] = [];
	/** IAM actions required for the UpdateDetector API call. */
	static readonly UpdateDetector: string[] = ["guardduty:UpdateDetector"];
	/** IAM actions required for the UpdateFilter API call. */
	static readonly UpdateFilter: string[] = ["guardduty:UpdateFilter"];
	/** IAM actions required for the UpdateFindingsFeedback API call. */
	static readonly UpdateFindingsFeedback: string[] = [
		"guardduty:UpdateFindingsFeedback",
	];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UpdateIPSet: string[] = ["guardduty:UpdateIPSet"];
	/** IAM actions required for the UpdateMalwareProtectionPlan API call. */
	static readonly UpdateMalwareProtectionPlan: string[] = [
		"iam:PassRole",
		"guardduty:UpdateMalwareProtectionPlan",
	];
	/** IAM actions required for the UpdateMalwareScanSettings API call. */
	static readonly UpdateMalwareScanSettings: string[] = [
		"guardduty:UpdateMalwareScanSettings",
	];
	/** IAM actions required for the UpdateMemberDetectors API call. */
	static readonly UpdateMemberDetectors: string[] = [
		"guardduty:UpdateMemberDetectors",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UpdateOrganizationConfiguration: string[] = [
		"guardduty:UpdateOrganizationConfiguration",
	];
	/** IAM actions required for the UpdatePublishingDestination API call. */
	static readonly UpdatePublishingDestination: string[] = [
		"guardduty:UpdatePublishingDestination",
	];
	/** IAM actions required for the UpdateThreatEntitySet API call. */
	static readonly UpdateThreatEntitySet: string[] = [
		"guardduty:UpdateThreatEntitySet",
	];
	/** IAM actions required for the UpdateThreatIntelSet API call. */
	static readonly UpdateThreatIntelSet: string[] = [
		"guardduty:UpdateThreatIntelSet",
	];
	/** IAM actions required for the UpdateTrustedEntitySet API call. */
	static readonly UpdateTrustedEntitySet: string[] = [
		"guardduty:UpdateTrustedEntitySet",
	];
}

/**
 * Condition key constants and builders for guardduty.
 */
export class GuardDutyConditions {
	/** Condition keys applicable to the CreateCustomDetectionRuleAssociation action. */
	static readonly CreateCustomDetectionRuleAssociationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateDetector action. */
	static readonly CreateDetectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFilter action. */
	static readonly CreateFilterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIPSet action. */
	static readonly CreateIPSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMalwareProtectionPlan action. */
	static readonly CreateMalwareProtectionPlanConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePublishingDestination action. */
	static readonly CreatePublishingDestinationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThreatEntitySet action. */
	static readonly CreateThreatEntitySetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThreatIntelSet action. */
	static readonly CreateThreatIntelSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrustedEntitySet action. */
	static readonly CreateTrustedEntitySetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
