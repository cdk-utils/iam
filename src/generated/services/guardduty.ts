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
	static readonly ACCEPT_ADMINISTRATOR_INVITATION =
		"guardduty:AcceptAdministratorInvitation";
	/** [Write] guardduty:AcceptInvitation */
	static readonly ACCEPT_INVITATION = "guardduty:AcceptInvitation";
	/** [Write] guardduty:ArchiveFindings */
	static readonly ARCHIVE_FINDINGS = "guardduty:ArchiveFindings";
	/** [Write] guardduty:CreateDetector */
	static readonly CREATE_DETECTOR = "guardduty:CreateDetector";
	/** [Write] guardduty:CreateFilter */
	static readonly CREATE_FILTER = "guardduty:CreateFilter";
	/** [Write] guardduty:CreateIPSet */
	static readonly CREATE_IP_SET = "guardduty:CreateIPSet";
	/** [Write] guardduty:CreateInvestigation */
	static readonly CREATE_INVESTIGATION = "guardduty:CreateInvestigation";
	/** [Write] guardduty:CreateMalwareProtectionPlan */
	static readonly CREATE_MALWARE_PROTECTION_PLAN =
		"guardduty:CreateMalwareProtectionPlan";
	/** [Write] guardduty:CreateMembers */
	static readonly CREATE_MEMBERS = "guardduty:CreateMembers";
	/** [Write] guardduty:CreatePublishingDestination */
	static readonly CREATE_PUBLISHING_DESTINATION =
		"guardduty:CreatePublishingDestination";
	/** [Write] guardduty:CreateSampleFindings */
	static readonly CREATE_SAMPLE_FINDINGS = "guardduty:CreateSampleFindings";
	/** [Write] guardduty:CreateThreatEntitySet */
	static readonly CREATE_THREAT_ENTITY_SET = "guardduty:CreateThreatEntitySet";
	/** [Write] guardduty:CreateThreatIntelSet */
	static readonly CREATE_THREAT_INTEL_SET = "guardduty:CreateThreatIntelSet";
	/** [Write] guardduty:CreateTrustedEntitySet */
	static readonly CREATE_TRUSTED_ENTITY_SET =
		"guardduty:CreateTrustedEntitySet";
	/** [Write] guardduty:DeclineInvitations */
	static readonly DECLINE_INVITATIONS = "guardduty:DeclineInvitations";
	/** [Write] guardduty:DeleteDetector */
	static readonly DELETE_DETECTOR = "guardduty:DeleteDetector";
	/** [Write] guardduty:DeleteFilter */
	static readonly DELETE_FILTER = "guardduty:DeleteFilter";
	/** [Write] guardduty:DeleteIPSet */
	static readonly DELETE_IP_SET = "guardduty:DeleteIPSet";
	/** [Write] guardduty:DeleteInvitations */
	static readonly DELETE_INVITATIONS = "guardduty:DeleteInvitations";
	/** [Write] guardduty:DeleteMalwareProtectionPlan */
	static readonly DELETE_MALWARE_PROTECTION_PLAN =
		"guardduty:DeleteMalwareProtectionPlan";
	/** [Write] guardduty:DeleteMembers */
	static readonly DELETE_MEMBERS = "guardduty:DeleteMembers";
	/** [Write] guardduty:DeletePublishingDestination */
	static readonly DELETE_PUBLISHING_DESTINATION =
		"guardduty:DeletePublishingDestination";
	/** [Write] guardduty:DeleteThreatEntitySet */
	static readonly DELETE_THREAT_ENTITY_SET = "guardduty:DeleteThreatEntitySet";
	/** [Write] guardduty:DeleteThreatIntelSet */
	static readonly DELETE_THREAT_INTEL_SET = "guardduty:DeleteThreatIntelSet";
	/** [Write] guardduty:DeleteTrustedEntitySet */
	static readonly DELETE_TRUSTED_ENTITY_SET =
		"guardduty:DeleteTrustedEntitySet";
	/** [Read] guardduty:DescribeMalwareScans */
	static readonly DESCRIBE_MALWARE_SCANS = "guardduty:DescribeMalwareScans";
	/** [Read] guardduty:DescribeOrganizationConfiguration */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION =
		"guardduty:DescribeOrganizationConfiguration";
	/** [Read] guardduty:DescribePublishingDestination */
	static readonly DESCRIBE_PUBLISHING_DESTINATION =
		"guardduty:DescribePublishingDestination";
	/** [Write] guardduty:DisableOrganizationAdminAccount */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"guardduty:DisableOrganizationAdminAccount";
	/** [Write] guardduty:DisassociateFromAdministratorAccount */
	static readonly DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT =
		"guardduty:DisassociateFromAdministratorAccount";
	/** [Write] guardduty:DisassociateFromMasterAccount */
	static readonly DISASSOCIATE_FROM_MASTER_ACCOUNT =
		"guardduty:DisassociateFromMasterAccount";
	/** [Write] guardduty:DisassociateMembers */
	static readonly DISASSOCIATE_MEMBERS = "guardduty:DisassociateMembers";
	/** [Write] guardduty:EnableOrganizationAdminAccount */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"guardduty:EnableOrganizationAdminAccount";
	/** [Read] guardduty:GetAdministratorAccount */
	static readonly GET_ADMINISTRATOR_ACCOUNT =
		"guardduty:GetAdministratorAccount";
	/** [Read] guardduty:GetCoverageStatistics */
	static readonly GET_COVERAGE_STATISTICS = "guardduty:GetCoverageStatistics";
	/** [Read] guardduty:GetDetector */
	static readonly GET_DETECTOR = "guardduty:GetDetector";
	/** [Read] guardduty:GetFilter */
	static readonly GET_FILTER = "guardduty:GetFilter";
	/** [Read] guardduty:GetFindings */
	static readonly GET_FINDINGS = "guardduty:GetFindings";
	/** [Read] guardduty:GetFindingsStatistics */
	static readonly GET_FINDINGS_STATISTICS = "guardduty:GetFindingsStatistics";
	/** [Read] guardduty:GetIPSet */
	static readonly GET_IP_SET = "guardduty:GetIPSet";
	/** [Read] guardduty:GetInvestigation */
	static readonly GET_INVESTIGATION = "guardduty:GetInvestigation";
	/** [Read] guardduty:GetInvitationsCount */
	static readonly GET_INVITATIONS_COUNT = "guardduty:GetInvitationsCount";
	/** [Read] guardduty:GetMalwareProtectionPlan */
	static readonly GET_MALWARE_PROTECTION_PLAN =
		"guardduty:GetMalwareProtectionPlan";
	/** [Read] guardduty:GetMalwareScan */
	static readonly GET_MALWARE_SCAN = "guardduty:GetMalwareScan";
	/** [Read] guardduty:GetMalwareScanSettings */
	static readonly GET_MALWARE_SCAN_SETTINGS =
		"guardduty:GetMalwareScanSettings";
	/** [Read] guardduty:GetMasterAccount */
	static readonly GET_MASTER_ACCOUNT = "guardduty:GetMasterAccount";
	/** [Read] guardduty:GetMemberDetectors */
	static readonly GET_MEMBER_DETECTORS = "guardduty:GetMemberDetectors";
	/** [Read] guardduty:GetMembers */
	static readonly GET_MEMBERS = "guardduty:GetMembers";
	/** [Read] guardduty:GetOrganizationStatistics */
	static readonly GET_ORGANIZATION_STATISTICS =
		"guardduty:GetOrganizationStatistics";
	/** [Read] guardduty:GetRemainingFreeTrialDays */
	static readonly GET_REMAINING_FREE_TRIAL_DAYS =
		"guardduty:GetRemainingFreeTrialDays";
	/** [Read] guardduty:GetThreatEntitySet */
	static readonly GET_THREAT_ENTITY_SET = "guardduty:GetThreatEntitySet";
	/** [Read] guardduty:GetThreatIntelSet */
	static readonly GET_THREAT_INTEL_SET = "guardduty:GetThreatIntelSet";
	/** [Read] guardduty:GetTrustedEntitySet */
	static readonly GET_TRUSTED_ENTITY_SET = "guardduty:GetTrustedEntitySet";
	/** [Read] guardduty:GetUsageStatistics */
	static readonly GET_USAGE_STATISTICS = "guardduty:GetUsageStatistics";
	/** [Write] guardduty:InviteMembers */
	static readonly INVITE_MEMBERS = "guardduty:InviteMembers";
	/** [List] guardduty:ListCoverage */
	static readonly LIST_COVERAGE = "guardduty:ListCoverage";
	/** [List] guardduty:ListDetectors */
	static readonly LIST_DETECTORS = "guardduty:ListDetectors";
	/** [List] guardduty:ListFilters */
	static readonly LIST_FILTERS = "guardduty:ListFilters";
	/** [List] guardduty:ListFindings */
	static readonly LIST_FINDINGS = "guardduty:ListFindings";
	/** [List] guardduty:ListIPSets */
	static readonly LIST_IP_SETS = "guardduty:ListIPSets";
	/** [List] guardduty:ListInvestigations */
	static readonly LIST_INVESTIGATIONS = "guardduty:ListInvestigations";
	/** [List] guardduty:ListInvitations */
	static readonly LIST_INVITATIONS = "guardduty:ListInvitations";
	/** [List] guardduty:ListMalwareProtectionPlans */
	static readonly LIST_MALWARE_PROTECTION_PLANS =
		"guardduty:ListMalwareProtectionPlans";
	/** [List] guardduty:ListMalwareScans */
	static readonly LIST_MALWARE_SCANS = "guardduty:ListMalwareScans";
	/** [List] guardduty:ListMembers */
	static readonly LIST_MEMBERS = "guardduty:ListMembers";
	/** [List] guardduty:ListOrganizationAdminAccounts */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNTS =
		"guardduty:ListOrganizationAdminAccounts";
	/** [List] guardduty:ListPublishingDestinations */
	static readonly LIST_PUBLISHING_DESTINATIONS =
		"guardduty:ListPublishingDestinations";
	/** [Read] guardduty:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "guardduty:ListTagsForResource";
	/** [List] guardduty:ListThreatEntitySets */
	static readonly LIST_THREAT_ENTITY_SETS = "guardduty:ListThreatEntitySets";
	/** [List] guardduty:ListThreatIntelSets */
	static readonly LIST_THREAT_INTEL_SETS = "guardduty:ListThreatIntelSets";
	/** [List] guardduty:ListTrustedEntitySets */
	static readonly LIST_TRUSTED_ENTITY_SETS = "guardduty:ListTrustedEntitySets";
	/** [Write] guardduty:SendObjectMalwareScan */
	static readonly SEND_OBJECT_MALWARE_SCAN = "guardduty:SendObjectMalwareScan";
	/** [Write] guardduty:SendSecurityTelemetry */
	static readonly SEND_SECURITY_TELEMETRY = "guardduty:SendSecurityTelemetry";
	/** [Write] guardduty:StartMalwareScan */
	static readonly START_MALWARE_SCAN = "guardduty:StartMalwareScan";
	/** [Write] guardduty:StartMonitoringMembers */
	static readonly START_MONITORING_MEMBERS = "guardduty:StartMonitoringMembers";
	/** [Write] guardduty:StopMonitoringMembers */
	static readonly STOP_MONITORING_MEMBERS = "guardduty:StopMonitoringMembers";
	/** [Tagging] guardduty:TagResource */
	static readonly TAG_RESOURCE = "guardduty:TagResource";
	/** [Write] guardduty:UnarchiveFindings */
	static readonly UNARCHIVE_FINDINGS = "guardduty:UnarchiveFindings";
	/** [Tagging] guardduty:UntagResource */
	static readonly UNTAG_RESOURCE = "guardduty:UntagResource";
	/** [Write] guardduty:UpdateDetector */
	static readonly UPDATE_DETECTOR = "guardduty:UpdateDetector";
	/** [Write] guardduty:UpdateFilter */
	static readonly UPDATE_FILTER = "guardduty:UpdateFilter";
	/** [Write] guardduty:UpdateFindingsFeedback */
	static readonly UPDATE_FINDINGS_FEEDBACK = "guardduty:UpdateFindingsFeedback";
	/** [Write] guardduty:UpdateIPSet */
	static readonly UPDATE_IP_SET = "guardduty:UpdateIPSet";
	/** [Write] guardduty:UpdateMalwareProtectionPlan */
	static readonly UPDATE_MALWARE_PROTECTION_PLAN =
		"guardduty:UpdateMalwareProtectionPlan";
	/** [Write] guardduty:UpdateMalwareScanSettings */
	static readonly UPDATE_MALWARE_SCAN_SETTINGS =
		"guardduty:UpdateMalwareScanSettings";
	/** [Write] guardduty:UpdateMemberDetectors */
	static readonly UPDATE_MEMBER_DETECTORS = "guardduty:UpdateMemberDetectors";
	/** [Write] guardduty:UpdateOrganizationConfiguration */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION =
		"guardduty:UpdateOrganizationConfiguration";
	/** [Write] guardduty:UpdatePublishingDestination */
	static readonly UPDATE_PUBLISHING_DESTINATION =
		"guardduty:UpdatePublishingDestination";
	/** [Write] guardduty:UpdateThreatEntitySet */
	static readonly UPDATE_THREAT_ENTITY_SET = "guardduty:UpdateThreatEntitySet";
	/** [Write] guardduty:UpdateThreatIntelSet */
	static readonly UPDATE_THREAT_INTEL_SET = "guardduty:UpdateThreatIntelSet";
	/** [Write] guardduty:UpdateTrustedEntitySet */
	static readonly UPDATE_TRUSTED_ENTITY_SET =
		"guardduty:UpdateTrustedEntitySet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GuardDutyActions.DESCRIBE_MALWARE_SCANS,
		GuardDutyActions.DESCRIBE_ORGANIZATION_CONFIGURATION,
		GuardDutyActions.DESCRIBE_PUBLISHING_DESTINATION,
		GuardDutyActions.GET_ADMINISTRATOR_ACCOUNT,
		GuardDutyActions.GET_COVERAGE_STATISTICS,
		GuardDutyActions.GET_DETECTOR,
		GuardDutyActions.GET_FILTER,
		GuardDutyActions.GET_FINDINGS,
		GuardDutyActions.GET_FINDINGS_STATISTICS,
		GuardDutyActions.GET_IP_SET,
		GuardDutyActions.GET_INVESTIGATION,
		GuardDutyActions.GET_INVITATIONS_COUNT,
		GuardDutyActions.GET_MALWARE_PROTECTION_PLAN,
		GuardDutyActions.GET_MALWARE_SCAN,
		GuardDutyActions.GET_MALWARE_SCAN_SETTINGS,
		GuardDutyActions.GET_MASTER_ACCOUNT,
		GuardDutyActions.GET_MEMBER_DETECTORS,
		GuardDutyActions.GET_MEMBERS,
		GuardDutyActions.GET_ORGANIZATION_STATISTICS,
		GuardDutyActions.GET_REMAINING_FREE_TRIAL_DAYS,
		GuardDutyActions.GET_THREAT_ENTITY_SET,
		GuardDutyActions.GET_THREAT_INTEL_SET,
		GuardDutyActions.GET_TRUSTED_ENTITY_SET,
		GuardDutyActions.GET_USAGE_STATISTICS,
		GuardDutyActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GuardDutyActions.ACCEPT_ADMINISTRATOR_INVITATION,
		GuardDutyActions.ACCEPT_INVITATION,
		GuardDutyActions.ARCHIVE_FINDINGS,
		GuardDutyActions.CREATE_DETECTOR,
		GuardDutyActions.CREATE_FILTER,
		GuardDutyActions.CREATE_IP_SET,
		GuardDutyActions.CREATE_INVESTIGATION,
		GuardDutyActions.CREATE_MALWARE_PROTECTION_PLAN,
		GuardDutyActions.CREATE_MEMBERS,
		GuardDutyActions.CREATE_PUBLISHING_DESTINATION,
		GuardDutyActions.CREATE_SAMPLE_FINDINGS,
		GuardDutyActions.CREATE_THREAT_ENTITY_SET,
		GuardDutyActions.CREATE_THREAT_INTEL_SET,
		GuardDutyActions.CREATE_TRUSTED_ENTITY_SET,
		GuardDutyActions.DECLINE_INVITATIONS,
		GuardDutyActions.DELETE_DETECTOR,
		GuardDutyActions.DELETE_FILTER,
		GuardDutyActions.DELETE_IP_SET,
		GuardDutyActions.DELETE_INVITATIONS,
		GuardDutyActions.DELETE_MALWARE_PROTECTION_PLAN,
		GuardDutyActions.DELETE_MEMBERS,
		GuardDutyActions.DELETE_PUBLISHING_DESTINATION,
		GuardDutyActions.DELETE_THREAT_ENTITY_SET,
		GuardDutyActions.DELETE_THREAT_INTEL_SET,
		GuardDutyActions.DELETE_TRUSTED_ENTITY_SET,
		GuardDutyActions.DISABLE_ORGANIZATION_ADMIN_ACCOUNT,
		GuardDutyActions.DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT,
		GuardDutyActions.DISASSOCIATE_FROM_MASTER_ACCOUNT,
		GuardDutyActions.DISASSOCIATE_MEMBERS,
		GuardDutyActions.ENABLE_ORGANIZATION_ADMIN_ACCOUNT,
		GuardDutyActions.INVITE_MEMBERS,
		GuardDutyActions.SEND_OBJECT_MALWARE_SCAN,
		GuardDutyActions.SEND_SECURITY_TELEMETRY,
		GuardDutyActions.START_MALWARE_SCAN,
		GuardDutyActions.START_MONITORING_MEMBERS,
		GuardDutyActions.STOP_MONITORING_MEMBERS,
		GuardDutyActions.UNARCHIVE_FINDINGS,
		GuardDutyActions.UPDATE_DETECTOR,
		GuardDutyActions.UPDATE_FILTER,
		GuardDutyActions.UPDATE_FINDINGS_FEEDBACK,
		GuardDutyActions.UPDATE_IP_SET,
		GuardDutyActions.UPDATE_MALWARE_PROTECTION_PLAN,
		GuardDutyActions.UPDATE_MALWARE_SCAN_SETTINGS,
		GuardDutyActions.UPDATE_MEMBER_DETECTORS,
		GuardDutyActions.UPDATE_ORGANIZATION_CONFIGURATION,
		GuardDutyActions.UPDATE_PUBLISHING_DESTINATION,
		GuardDutyActions.UPDATE_THREAT_ENTITY_SET,
		GuardDutyActions.UPDATE_THREAT_INTEL_SET,
		GuardDutyActions.UPDATE_TRUSTED_ENTITY_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GuardDutyActions.LIST_COVERAGE,
		GuardDutyActions.LIST_DETECTORS,
		GuardDutyActions.LIST_FILTERS,
		GuardDutyActions.LIST_FINDINGS,
		GuardDutyActions.LIST_IP_SETS,
		GuardDutyActions.LIST_INVESTIGATIONS,
		GuardDutyActions.LIST_INVITATIONS,
		GuardDutyActions.LIST_MALWARE_PROTECTION_PLANS,
		GuardDutyActions.LIST_MALWARE_SCANS,
		GuardDutyActions.LIST_MEMBERS,
		GuardDutyActions.LIST_ORGANIZATION_ADMIN_ACCOUNTS,
		GuardDutyActions.LIST_PUBLISHING_DESTINATIONS,
		GuardDutyActions.LIST_THREAT_ENTITY_SETS,
		GuardDutyActions.LIST_THREAT_INTEL_SETS,
		GuardDutyActions.LIST_TRUSTED_ENTITY_SETS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GuardDutyActions.TAG_RESOURCE,
		GuardDutyActions.UNTAG_RESOURCE,
	];
}

const DetectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector/(?<detectorId>[^:/?]+)$",
);
const FilterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector/(?<detectorId>[^:/?]+)/filter/(?<filterName>[^:/?]+)$",
);
const IpsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector/(?<detectorId>[^:/?]+)/ipset/(?<ipSetId>[^:/?]+)$",
);
const MalwareprotectionplanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):malware-protection-plan/(?<malwareProtectionPlanId>[^:/?]+)$",
);
const PublishingDestinationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector/(?<detectorId>[^:/?]+)/publishingdestination/(?<publishingDestinationId>[^:/?]+)$",
);
const ThreatentitysetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector/(?<detectorId>[^:/?]+)/threatentityset/(?<threatEntitySetId>[^:/?]+)$",
);
const ThreatintelsetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector/(?<detectorId>[^:/?]+)/threatintelset/(?<threatIntelSetId>[^:/?]+)$",
);
const TrustedentitysetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):guardduty:(?<region>[^:]*):(?<account>[^:]*):detector/(?<detectorId>[^:/?]+)/trustedentityset/(?<trustedEntitySetId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for guardduty resources.
 */
export class GuardDutyResources {
	/**
	 * Builds an ARN for the detector resource.
	 */
	static detector(props: {
		/** The DetectorId component of the ARN. */
		readonly detectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDetectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
	} {
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
	static filter(props: {
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
	}): string {
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
	static parseFilterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
		filterName: string;
	} {
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
	static ipset(props: {
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
	}): string {
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
	static parseIpsetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
		ipSetId: string;
	} {
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
	static malwareprotectionplan(props: {
		/** The MalwareProtectionPlanId component of the ARN. */
		readonly malwareProtectionPlanId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMalwareprotectionplanArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		malwareProtectionPlanId: string;
	} {
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
	static publishingDestination(props: {
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
	}): string {
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
	static parsePublishingDestinationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
		publishingDestinationId: string;
	} {
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
	static threatentityset(props: {
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
	}): string {
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
	static parseThreatentitysetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
		threatEntitySetId: string;
	} {
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
	static threatintelset(props: {
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
	}): string {
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
	static parseThreatintelsetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
		threatIntelSetId: string;
	} {
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
	static trustedentityset(props: {
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
	}): string {
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
	static parseTrustedentitysetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		detectorId: string;
		trustedEntitySetId: string;
	} {
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
	static readonly ACCEPT_ADMINISTRATOR_INVITATION: string[] = [
		"guardduty:AcceptAdministratorInvitation",
	];
	/** IAM actions required for the AcceptInvitation API call. */
	static readonly ACCEPT_INVITATION: string[] = ["guardduty:AcceptInvitation"];
	/** IAM actions required for the ArchiveFindings API call. */
	static readonly ARCHIVE_FINDINGS: string[] = ["guardduty:ArchiveFindings"];
	/** IAM actions required for the CreateDetector API call. */
	static readonly CREATE_DETECTOR: string[] = [
		"guardduty:CreateDetector",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateFilter API call. */
	static readonly CREATE_FILTER: string[] = [
		"guardduty:CreateFilter",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateIPSet API call. */
	static readonly CREATE_IP_SET: string[] = [
		"guardduty:CreateIPSet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateInvestigation API call. */
	static readonly CREATE_INVESTIGATION: string[] = [
		"guardduty:CreateInvestigation",
	];
	/** IAM actions required for the CreateMalwareProtectionPlan API call. */
	static readonly CREATE_MALWARE_PROTECTION_PLAN: string[] = [
		"guardduty:CreateMalwareProtectionPlan",
		"iam:PassRole",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateMembers API call. */
	static readonly CREATE_MEMBERS: string[] = ["guardduty:CreateMembers"];
	/** IAM actions required for the CreatePublishingDestination API call. */
	static readonly CREATE_PUBLISHING_DESTINATION: string[] = [
		"guardduty:CreatePublishingDestination",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateSampleFindings API call. */
	static readonly CREATE_SAMPLE_FINDINGS: string[] = [
		"guardduty:CreateSampleFindings",
	];
	/** IAM actions required for the CreateThreatEntitySet API call. */
	static readonly CREATE_THREAT_ENTITY_SET: string[] = [
		"guardduty:CreateThreatEntitySet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateThreatIntelSet API call. */
	static readonly CREATE_THREAT_INTEL_SET: string[] = [
		"guardduty:CreateThreatIntelSet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the CreateTrustedEntitySet API call. */
	static readonly CREATE_TRUSTED_ENTITY_SET: string[] = [
		"guardduty:CreateTrustedEntitySet",
		"guardduty:TagResource",
	];
	/** IAM actions required for the DeclineInvitations API call. */
	static readonly DECLINE_INVITATIONS: string[] = [
		"guardduty:DeclineInvitations",
	];
	/** IAM actions required for the DeleteDetector API call. */
	static readonly DELETE_DETECTOR: string[] = ["guardduty:DeleteDetector"];
	/** IAM actions required for the DeleteFilter API call. */
	static readonly DELETE_FILTER: string[] = ["guardduty:DeleteFilter"];
	/** IAM actions required for the DeleteIPSet API call. */
	static readonly DELETE_IP_SET: string[] = ["guardduty:DeleteIPSet"];
	/** IAM actions required for the DeleteInvitations API call. */
	static readonly DELETE_INVITATIONS: string[] = [
		"guardduty:DeleteInvitations",
	];
	/** IAM actions required for the DeleteMalwareProtectionPlan API call. */
	static readonly DELETE_MALWARE_PROTECTION_PLAN: string[] = [
		"guardduty:DeleteMalwareProtectionPlan",
	];
	/** IAM actions required for the DeleteMembers API call. */
	static readonly DELETE_MEMBERS: string[] = ["guardduty:DeleteMembers"];
	/** IAM actions required for the DeletePublishingDestination API call. */
	static readonly DELETE_PUBLISHING_DESTINATION: string[] = [
		"guardduty:DeletePublishingDestination",
	];
	/** IAM actions required for the DeleteThreatEntitySet API call. */
	static readonly DELETE_THREAT_ENTITY_SET: string[] = [
		"guardduty:DeleteThreatEntitySet",
	];
	/** IAM actions required for the DeleteThreatIntelSet API call. */
	static readonly DELETE_THREAT_INTEL_SET: string[] = [
		"guardduty:DeleteThreatIntelSet",
	];
	/** IAM actions required for the DeleteTrustedEntitySet API call. */
	static readonly DELETE_TRUSTED_ENTITY_SET: string[] = [
		"guardduty:DeleteTrustedEntitySet",
	];
	/** IAM actions required for the DescribeMalwareScans API call. */
	static readonly DESCRIBE_MALWARE_SCANS: string[] = [
		"guardduty:DescribeMalwareScans",
	];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION: string[] = [
		"guardduty:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DescribePublishingDestination API call. */
	static readonly DESCRIBE_PUBLISHING_DESTINATION: string[] = [
		"guardduty:DescribePublishingDestination",
	];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"guardduty:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateFromAdministratorAccount API call. */
	static readonly DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT: string[] = [
		"guardduty:DisassociateFromAdministratorAccount",
	];
	/** IAM actions required for the DisassociateFromMasterAccount API call. */
	static readonly DISASSOCIATE_FROM_MASTER_ACCOUNT: string[] = [
		"guardduty:DisassociateFromMasterAccount",
	];
	/** IAM actions required for the DisassociateMembers API call. */
	static readonly DISASSOCIATE_MEMBERS: string[] = [
		"guardduty:DisassociateMembers",
	];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"guardduty:EnableOrganizationAdminAccount",
	];
	/** IAM actions required for the GetAdministratorAccount API call. */
	static readonly GET_ADMINISTRATOR_ACCOUNT: string[] = [
		"guardduty:GetAdministratorAccount",
	];
	/** IAM actions required for the GetCoverageStatistics API call. */
	static readonly GET_COVERAGE_STATISTICS: string[] = [
		"guardduty:GetCoverageStatistics",
	];
	/** IAM actions required for the GetDetector API call. */
	static readonly GET_DETECTOR: string[] = ["guardduty:GetDetector"];
	/** IAM actions required for the GetFilter API call. */
	static readonly GET_FILTER: string[] = ["guardduty:GetFilter"];
	/** IAM actions required for the GetFindings API call. */
	static readonly GET_FINDINGS: string[] = ["guardduty:GetFindings"];
	/** IAM actions required for the GetFindingsStatistics API call. */
	static readonly GET_FINDINGS_STATISTICS: string[] = [
		"guardduty:GetFindingsStatistics",
	];
	/** IAM actions required for the GetIPSet API call. */
	static readonly GET_IP_SET: string[] = ["guardduty:GetIPSet"];
	/** IAM actions required for the GetInvestigation API call. */
	static readonly GET_INVESTIGATION: string[] = ["guardduty:GetInvestigation"];
	/** IAM actions required for the GetInvitationsCount API call. */
	static readonly GET_INVITATIONS_COUNT: string[] = [
		"guardduty:GetInvitationsCount",
	];
	/** IAM actions required for the GetMalwareProtectionPlan API call. */
	static readonly GET_MALWARE_PROTECTION_PLAN: string[] = [
		"guardduty:GetMalwareProtectionPlan",
	];
	/** IAM actions required for the GetMalwareScan API call. */
	static readonly GET_MALWARE_SCAN: string[] = ["guardduty:GetMalwareScan"];
	/** IAM actions required for the GetMalwareScanSettings API call. */
	static readonly GET_MALWARE_SCAN_SETTINGS: string[] = [
		"guardduty:GetMalwareScanSettings",
	];
	/** IAM actions required for the GetMasterAccount API call. */
	static readonly GET_MASTER_ACCOUNT: string[] = ["guardduty:GetMasterAccount"];
	/** IAM actions required for the GetMemberDetectors API call. */
	static readonly GET_MEMBER_DETECTORS: string[] = [
		"guardduty:GetMemberDetectors",
	];
	/** IAM actions required for the GetMembers API call. */
	static readonly GET_MEMBERS: string[] = ["guardduty:GetMembers"];
	/** IAM actions required for the GetOrganizationStatistics API call. */
	static readonly GET_ORGANIZATION_STATISTICS: string[] = [
		"guardduty:GetOrganizationStatistics",
	];
	/** IAM actions required for the GetRemainingFreeTrialDays API call. */
	static readonly GET_REMAINING_FREE_TRIAL_DAYS: string[] = [
		"guardduty:GetRemainingFreeTrialDays",
	];
	/** IAM actions required for the GetThreatEntitySet API call. */
	static readonly GET_THREAT_ENTITY_SET: string[] = [
		"guardduty:GetThreatEntitySet",
	];
	/** IAM actions required for the GetThreatIntelSet API call. */
	static readonly GET_THREAT_INTEL_SET: string[] = [
		"guardduty:GetThreatIntelSet",
	];
	/** IAM actions required for the GetTrustedEntitySet API call. */
	static readonly GET_TRUSTED_ENTITY_SET: string[] = [
		"guardduty:GetTrustedEntitySet",
	];
	/** IAM actions required for the GetUsageStatistics API call. */
	static readonly GET_USAGE_STATISTICS: string[] = [
		"guardduty:GetUsageStatistics",
	];
	/** IAM actions required for the InviteMembers API call. */
	static readonly INVITE_MEMBERS: string[] = ["guardduty:InviteMembers"];
	/** IAM actions required for the ListCoverage API call. */
	static readonly LIST_COVERAGE: string[] = ["guardduty:ListCoverage"];
	/** IAM actions required for the ListDetectors API call. */
	static readonly LIST_DETECTORS: string[] = ["guardduty:ListDetectors"];
	/** IAM actions required for the ListFilters API call. */
	static readonly LIST_FILTERS: string[] = ["guardduty:ListFilters"];
	/** IAM actions required for the ListFindings API call. */
	static readonly LIST_FINDINGS: string[] = ["guardduty:ListFindings"];
	/** IAM actions required for the ListIPSets API call. */
	static readonly LIST_IP_SETS: string[] = ["guardduty:ListIPSets"];
	/** IAM actions required for the ListInvestigations API call. */
	static readonly LIST_INVESTIGATIONS: string[] = [
		"guardduty:ListInvestigations",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly LIST_INVITATIONS: string[] = ["guardduty:ListInvitations"];
	/** IAM actions required for the ListMalwareProtectionPlans API call. */
	static readonly LIST_MALWARE_PROTECTION_PLANS: string[] = [
		"guardduty:ListMalwareProtectionPlans",
	];
	/** IAM actions required for the ListMalwareScans API call. */
	static readonly LIST_MALWARE_SCANS: string[] = ["guardduty:ListMalwareScans"];
	/** IAM actions required for the ListMembers API call. */
	static readonly LIST_MEMBERS: string[] = ["guardduty:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNTS: string[] = [
		"guardduty:ListOrganizationAdminAccounts",
	];
	/** IAM actions required for the ListPublishingDestinations API call. */
	static readonly LIST_PUBLISHING_DESTINATIONS: string[] = [
		"guardduty:ListPublishingDestinations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"guardduty:ListTagsForResource",
	];
	/** IAM actions required for the ListThreatEntitySets API call. */
	static readonly LIST_THREAT_ENTITY_SETS: string[] = [
		"guardduty:ListThreatEntitySets",
	];
	/** IAM actions required for the ListThreatIntelSets API call. */
	static readonly LIST_THREAT_INTEL_SETS: string[] = [
		"guardduty:ListThreatIntelSets",
	];
	/** IAM actions required for the ListTrustedEntitySets API call. */
	static readonly LIST_TRUSTED_ENTITY_SETS: string[] = [
		"guardduty:ListTrustedEntitySets",
	];
	/** IAM actions required for the SendObjectMalwareScan API call. */
	static readonly SEND_OBJECT_MALWARE_SCAN: string[] = [
		"guardduty:SendObjectMalwareScan",
	];
	/** IAM actions required for the StartMalwareScan API call. */
	static readonly START_MALWARE_SCAN: string[] = [
		"iam:PassRole",
		"guardduty:StartMalwareScan",
	];
	/** IAM actions required for the StartMonitoringMembers API call. */
	static readonly START_MONITORING_MEMBERS: string[] = [
		"guardduty:StartMonitoringMembers",
	];
	/** IAM actions required for the StopMonitoringMembers API call. */
	static readonly STOP_MONITORING_MEMBERS: string[] = [
		"guardduty:StopMonitoringMembers",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["guardduty:TagResource"];
	/** IAM actions required for the UnarchiveFindings API call. */
	static readonly UNARCHIVE_FINDINGS: string[] = [
		"guardduty:UnarchiveFindings",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["guardduty:UntagResource"];
	/** IAM actions required for the UpdateDetector API call. */
	static readonly UPDATE_DETECTOR: string[] = ["guardduty:UpdateDetector"];
	/** IAM actions required for the UpdateFilter API call. */
	static readonly UPDATE_FILTER: string[] = ["guardduty:UpdateFilter"];
	/** IAM actions required for the UpdateFindingsFeedback API call. */
	static readonly UPDATE_FINDINGS_FEEDBACK: string[] = [
		"guardduty:UpdateFindingsFeedback",
	];
	/** IAM actions required for the UpdateIPSet API call. */
	static readonly UPDATE_IP_SET: string[] = ["guardduty:UpdateIPSet"];
	/** IAM actions required for the UpdateMalwareProtectionPlan API call. */
	static readonly UPDATE_MALWARE_PROTECTION_PLAN: string[] = [
		"iam:PassRole",
		"guardduty:UpdateMalwareProtectionPlan",
	];
	/** IAM actions required for the UpdateMalwareScanSettings API call. */
	static readonly UPDATE_MALWARE_SCAN_SETTINGS: string[] = [
		"guardduty:UpdateMalwareScanSettings",
	];
	/** IAM actions required for the UpdateMemberDetectors API call. */
	static readonly UPDATE_MEMBER_DETECTORS: string[] = [
		"guardduty:UpdateMemberDetectors",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION: string[] = [
		"guardduty:UpdateOrganizationConfiguration",
	];
	/** IAM actions required for the UpdatePublishingDestination API call. */
	static readonly UPDATE_PUBLISHING_DESTINATION: string[] = [
		"guardduty:UpdatePublishingDestination",
	];
	/** IAM actions required for the UpdateThreatEntitySet API call. */
	static readonly UPDATE_THREAT_ENTITY_SET: string[] = [
		"guardduty:UpdateThreatEntitySet",
	];
	/** IAM actions required for the UpdateThreatIntelSet API call. */
	static readonly UPDATE_THREAT_INTEL_SET: string[] = [
		"guardduty:UpdateThreatIntelSet",
	];
	/** IAM actions required for the UpdateTrustedEntitySet API call. */
	static readonly UPDATE_TRUSTED_ENTITY_SET: string[] = [
		"guardduty:UpdateTrustedEntitySet",
	];
}

/**
 * Condition key constants and builders for guardduty.
 */
export class GuardDutyConditions {
	/** Condition keys applicable to the CreateDetector action. */
	static readonly CREATE_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFilter action. */
	static readonly CREATE_FILTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIPSet action. */
	static readonly CREATE_IP_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMalwareProtectionPlan action. */
	static readonly CREATE_MALWARE_PROTECTION_PLAN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePublishingDestination action. */
	static readonly CREATE_PUBLISHING_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThreatEntitySet action. */
	static readonly CREATE_THREAT_ENTITY_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThreatIntelSet action. */
	static readonly CREATE_THREAT_INTEL_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrustedEntitySet action. */
	static readonly CREATE_TRUSTED_ENTITY_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
