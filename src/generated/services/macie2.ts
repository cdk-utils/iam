// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/macie2.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the macie2 service.
 */
export class Macie2Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "macie2";

	/** [Write] macie2:AcceptInvitation */
	static readonly ACCEPT_INVITATION = "macie2:AcceptInvitation";
	/** [Read] macie2:BatchGetCustomDataIdentifiers */
	static readonly BATCH_GET_CUSTOM_DATA_IDENTIFIERS =
		"macie2:BatchGetCustomDataIdentifiers";
	/** [Write] macie2:BatchUpdateAutomatedDiscoveryAccounts */
	static readonly BATCH_UPDATE_AUTOMATED_DISCOVERY_ACCOUNTS =
		"macie2:BatchUpdateAutomatedDiscoveryAccounts";
	/** [Write] macie2:CreateAllowList */
	static readonly CREATE_ALLOW_LIST = "macie2:CreateAllowList";
	/** [Write] macie2:CreateClassificationJob */
	static readonly CREATE_CLASSIFICATION_JOB = "macie2:CreateClassificationJob";
	/** [Write] macie2:CreateCustomDataIdentifier */
	static readonly CREATE_CUSTOM_DATA_IDENTIFIER =
		"macie2:CreateCustomDataIdentifier";
	/** [Write] macie2:CreateFindingsFilter */
	static readonly CREATE_FINDINGS_FILTER = "macie2:CreateFindingsFilter";
	/** [Write] macie2:CreateInvitations */
	static readonly CREATE_INVITATIONS = "macie2:CreateInvitations";
	/** [Write] macie2:CreateMember */
	static readonly CREATE_MEMBER = "macie2:CreateMember";
	/** [Write] macie2:CreateSampleFindings */
	static readonly CREATE_SAMPLE_FINDINGS = "macie2:CreateSampleFindings";
	/** [Write] macie2:DeclineInvitations */
	static readonly DECLINE_INVITATIONS = "macie2:DeclineInvitations";
	/** [Write] macie2:DeleteAllowList */
	static readonly DELETE_ALLOW_LIST = "macie2:DeleteAllowList";
	/** [Write] macie2:DeleteCustomDataIdentifier */
	static readonly DELETE_CUSTOM_DATA_IDENTIFIER =
		"macie2:DeleteCustomDataIdentifier";
	/** [Write] macie2:DeleteFindingsFilter */
	static readonly DELETE_FINDINGS_FILTER = "macie2:DeleteFindingsFilter";
	/** [Write] macie2:DeleteInvitations */
	static readonly DELETE_INVITATIONS = "macie2:DeleteInvitations";
	/** [Write] macie2:DeleteMember */
	static readonly DELETE_MEMBER = "macie2:DeleteMember";
	/** [Read] macie2:DescribeBuckets */
	static readonly DESCRIBE_BUCKETS = "macie2:DescribeBuckets";
	/** [Read] macie2:DescribeClassificationJob */
	static readonly DESCRIBE_CLASSIFICATION_JOB =
		"macie2:DescribeClassificationJob";
	/** [Read] macie2:DescribeOrganizationConfiguration */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION =
		"macie2:DescribeOrganizationConfiguration";
	/** [Write] macie2:DisableMacie */
	static readonly DISABLE_MACIE = "macie2:DisableMacie";
	/** [Write] macie2:DisableOrganizationAdminAccount */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"macie2:DisableOrganizationAdminAccount";
	/** [Write] macie2:DisassociateFromAdministratorAccount */
	static readonly DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT =
		"macie2:DisassociateFromAdministratorAccount";
	/** [Write] macie2:DisassociateFromMasterAccount */
	static readonly DISASSOCIATE_FROM_MASTER_ACCOUNT =
		"macie2:DisassociateFromMasterAccount";
	/** [Write] macie2:DisassociateMember */
	static readonly DISASSOCIATE_MEMBER = "macie2:DisassociateMember";
	/** [Write] macie2:EnableMacie */
	static readonly ENABLE_MACIE = "macie2:EnableMacie";
	/** [Write] macie2:EnableOrganizationAdminAccount */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"macie2:EnableOrganizationAdminAccount";
	/** [Read] macie2:GetAdministratorAccount */
	static readonly GET_ADMINISTRATOR_ACCOUNT = "macie2:GetAdministratorAccount";
	/** [Read] macie2:GetAllowList */
	static readonly GET_ALLOW_LIST = "macie2:GetAllowList";
	/** [Read] macie2:GetAutomatedDiscoveryConfiguration */
	static readonly GET_AUTOMATED_DISCOVERY_CONFIGURATION =
		"macie2:GetAutomatedDiscoveryConfiguration";
	/** [Read] macie2:GetBucketStatistics */
	static readonly GET_BUCKET_STATISTICS = "macie2:GetBucketStatistics";
	/** [Read] macie2:GetClassificationExportConfiguration */
	static readonly GET_CLASSIFICATION_EXPORT_CONFIGURATION =
		"macie2:GetClassificationExportConfiguration";
	/** [Read] macie2:GetClassificationScope */
	static readonly GET_CLASSIFICATION_SCOPE = "macie2:GetClassificationScope";
	/** [Read] macie2:GetCustomDataIdentifier */
	static readonly GET_CUSTOM_DATA_IDENTIFIER = "macie2:GetCustomDataIdentifier";
	/** [Read] macie2:GetFindingStatistics */
	static readonly GET_FINDING_STATISTICS = "macie2:GetFindingStatistics";
	/** [Read] macie2:GetFindings */
	static readonly GET_FINDINGS = "macie2:GetFindings";
	/** [Read] macie2:GetFindingsFilter */
	static readonly GET_FINDINGS_FILTER = "macie2:GetFindingsFilter";
	/** [Read] macie2:GetFindingsPublicationConfiguration */
	static readonly GET_FINDINGS_PUBLICATION_CONFIGURATION =
		"macie2:GetFindingsPublicationConfiguration";
	/** [Read] macie2:GetInvitationsCount */
	static readonly GET_INVITATIONS_COUNT = "macie2:GetInvitationsCount";
	/** [Read] macie2:GetMacieSession */
	static readonly GET_MACIE_SESSION = "macie2:GetMacieSession";
	/** [Read] macie2:GetMasterAccount */
	static readonly GET_MASTER_ACCOUNT = "macie2:GetMasterAccount";
	/** [Read] macie2:GetMember */
	static readonly GET_MEMBER = "macie2:GetMember";
	/** [Read] macie2:GetResourceProfile */
	static readonly GET_RESOURCE_PROFILE = "macie2:GetResourceProfile";
	/** [Read] macie2:GetRevealConfiguration */
	static readonly GET_REVEAL_CONFIGURATION = "macie2:GetRevealConfiguration";
	/** [Read] macie2:GetSensitiveDataOccurrences */
	static readonly GET_SENSITIVE_DATA_OCCURRENCES =
		"macie2:GetSensitiveDataOccurrences";
	/** [Read] macie2:GetSensitiveDataOccurrencesAvailability */
	static readonly GET_SENSITIVE_DATA_OCCURRENCES_AVAILABILITY =
		"macie2:GetSensitiveDataOccurrencesAvailability";
	/** [Read] macie2:GetSensitivityInspectionTemplate */
	static readonly GET_SENSITIVITY_INSPECTION_TEMPLATE =
		"macie2:GetSensitivityInspectionTemplate";
	/** [Read] macie2:GetUsageStatistics */
	static readonly GET_USAGE_STATISTICS = "macie2:GetUsageStatistics";
	/** [Read] macie2:GetUsageTotals */
	static readonly GET_USAGE_TOTALS = "macie2:GetUsageTotals";
	/** [List] macie2:ListAllowLists */
	static readonly LIST_ALLOW_LISTS = "macie2:ListAllowLists";
	/** [List] macie2:ListAutomatedDiscoveryAccounts */
	static readonly LIST_AUTOMATED_DISCOVERY_ACCOUNTS =
		"macie2:ListAutomatedDiscoveryAccounts";
	/** [List] macie2:ListClassificationJobs */
	static readonly LIST_CLASSIFICATION_JOBS = "macie2:ListClassificationJobs";
	/** [List] macie2:ListClassificationScopes */
	static readonly LIST_CLASSIFICATION_SCOPES =
		"macie2:ListClassificationScopes";
	/** [List] macie2:ListCustomDataIdentifiers */
	static readonly LIST_CUSTOM_DATA_IDENTIFIERS =
		"macie2:ListCustomDataIdentifiers";
	/** [List] macie2:ListFindings */
	static readonly LIST_FINDINGS = "macie2:ListFindings";
	/** [List] macie2:ListFindingsFilters */
	static readonly LIST_FINDINGS_FILTERS = "macie2:ListFindingsFilters";
	/** [List] macie2:ListInvitations */
	static readonly LIST_INVITATIONS = "macie2:ListInvitations";
	/** [List] macie2:ListManagedDataIdentifiers */
	static readonly LIST_MANAGED_DATA_IDENTIFIERS =
		"macie2:ListManagedDataIdentifiers";
	/** [List] macie2:ListMembers */
	static readonly LIST_MEMBERS = "macie2:ListMembers";
	/** [List] macie2:ListOrganizationAdminAccounts */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNTS =
		"macie2:ListOrganizationAdminAccounts";
	/** [List] macie2:ListResourceProfileArtifacts */
	static readonly LIST_RESOURCE_PROFILE_ARTIFACTS =
		"macie2:ListResourceProfileArtifacts";
	/** [List] macie2:ListResourceProfileDetections */
	static readonly LIST_RESOURCE_PROFILE_DETECTIONS =
		"macie2:ListResourceProfileDetections";
	/** [List] macie2:ListSensitivityInspectionTemplates */
	static readonly LIST_SENSITIVITY_INSPECTION_TEMPLATES =
		"macie2:ListSensitivityInspectionTemplates";
	/** [Read] macie2:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "macie2:ListTagsForResource";
	/** [Write] macie2:PutClassificationExportConfiguration */
	static readonly PUT_CLASSIFICATION_EXPORT_CONFIGURATION =
		"macie2:PutClassificationExportConfiguration";
	/** [Write] macie2:PutFindingsPublicationConfiguration */
	static readonly PUT_FINDINGS_PUBLICATION_CONFIGURATION =
		"macie2:PutFindingsPublicationConfiguration";
	/** [Read] macie2:SearchResources */
	static readonly SEARCH_RESOURCES = "macie2:SearchResources";
	/** [Tagging] macie2:TagResource */
	static readonly TAG_RESOURCE = "macie2:TagResource";
	/** [Write] macie2:TestCustomDataIdentifier */
	static readonly TEST_CUSTOM_DATA_IDENTIFIER =
		"macie2:TestCustomDataIdentifier";
	/** [Tagging] macie2:UntagResource */
	static readonly UNTAG_RESOURCE = "macie2:UntagResource";
	/** [Write] macie2:UpdateAllowList */
	static readonly UPDATE_ALLOW_LIST = "macie2:UpdateAllowList";
	/** [Write] macie2:UpdateAutomatedDiscoveryConfiguration */
	static readonly UPDATE_AUTOMATED_DISCOVERY_CONFIGURATION =
		"macie2:UpdateAutomatedDiscoveryConfiguration";
	/** [Write] macie2:UpdateClassificationJob */
	static readonly UPDATE_CLASSIFICATION_JOB = "macie2:UpdateClassificationJob";
	/** [Write] macie2:UpdateClassificationScope */
	static readonly UPDATE_CLASSIFICATION_SCOPE =
		"macie2:UpdateClassificationScope";
	/** [Write] macie2:UpdateFindingsFilter */
	static readonly UPDATE_FINDINGS_FILTER = "macie2:UpdateFindingsFilter";
	/** [Write] macie2:UpdateMacieSession */
	static readonly UPDATE_MACIE_SESSION = "macie2:UpdateMacieSession";
	/** [Write] macie2:UpdateMemberSession */
	static readonly UPDATE_MEMBER_SESSION = "macie2:UpdateMemberSession";
	/** [Write] macie2:UpdateOrganizationConfiguration */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION =
		"macie2:UpdateOrganizationConfiguration";
	/** [Write] macie2:UpdateResourceProfile */
	static readonly UPDATE_RESOURCE_PROFILE = "macie2:UpdateResourceProfile";
	/** [Write] macie2:UpdateResourceProfileDetections */
	static readonly UPDATE_RESOURCE_PROFILE_DETECTIONS =
		"macie2:UpdateResourceProfileDetections";
	/** [Write] macie2:UpdateRevealConfiguration */
	static readonly UPDATE_REVEAL_CONFIGURATION =
		"macie2:UpdateRevealConfiguration";
	/** [Write] macie2:UpdateSensitivityInspectionTemplate */
	static readonly UPDATE_SENSITIVITY_INSPECTION_TEMPLATE =
		"macie2:UpdateSensitivityInspectionTemplate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Macie2Actions.BATCH_GET_CUSTOM_DATA_IDENTIFIERS,
		Macie2Actions.DESCRIBE_BUCKETS,
		Macie2Actions.DESCRIBE_CLASSIFICATION_JOB,
		Macie2Actions.DESCRIBE_ORGANIZATION_CONFIGURATION,
		Macie2Actions.GET_ADMINISTRATOR_ACCOUNT,
		Macie2Actions.GET_ALLOW_LIST,
		Macie2Actions.GET_AUTOMATED_DISCOVERY_CONFIGURATION,
		Macie2Actions.GET_BUCKET_STATISTICS,
		Macie2Actions.GET_CLASSIFICATION_EXPORT_CONFIGURATION,
		Macie2Actions.GET_CLASSIFICATION_SCOPE,
		Macie2Actions.GET_CUSTOM_DATA_IDENTIFIER,
		Macie2Actions.GET_FINDING_STATISTICS,
		Macie2Actions.GET_FINDINGS,
		Macie2Actions.GET_FINDINGS_FILTER,
		Macie2Actions.GET_FINDINGS_PUBLICATION_CONFIGURATION,
		Macie2Actions.GET_INVITATIONS_COUNT,
		Macie2Actions.GET_MACIE_SESSION,
		Macie2Actions.GET_MASTER_ACCOUNT,
		Macie2Actions.GET_MEMBER,
		Macie2Actions.GET_RESOURCE_PROFILE,
		Macie2Actions.GET_REVEAL_CONFIGURATION,
		Macie2Actions.GET_SENSITIVE_DATA_OCCURRENCES,
		Macie2Actions.GET_SENSITIVE_DATA_OCCURRENCES_AVAILABILITY,
		Macie2Actions.GET_SENSITIVITY_INSPECTION_TEMPLATE,
		Macie2Actions.GET_USAGE_STATISTICS,
		Macie2Actions.GET_USAGE_TOTALS,
		Macie2Actions.LIST_TAGS_FOR_RESOURCE,
		Macie2Actions.SEARCH_RESOURCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Macie2Actions.ACCEPT_INVITATION,
		Macie2Actions.BATCH_UPDATE_AUTOMATED_DISCOVERY_ACCOUNTS,
		Macie2Actions.CREATE_ALLOW_LIST,
		Macie2Actions.CREATE_CLASSIFICATION_JOB,
		Macie2Actions.CREATE_CUSTOM_DATA_IDENTIFIER,
		Macie2Actions.CREATE_FINDINGS_FILTER,
		Macie2Actions.CREATE_INVITATIONS,
		Macie2Actions.CREATE_MEMBER,
		Macie2Actions.CREATE_SAMPLE_FINDINGS,
		Macie2Actions.DECLINE_INVITATIONS,
		Macie2Actions.DELETE_ALLOW_LIST,
		Macie2Actions.DELETE_CUSTOM_DATA_IDENTIFIER,
		Macie2Actions.DELETE_FINDINGS_FILTER,
		Macie2Actions.DELETE_INVITATIONS,
		Macie2Actions.DELETE_MEMBER,
		Macie2Actions.DISABLE_MACIE,
		Macie2Actions.DISABLE_ORGANIZATION_ADMIN_ACCOUNT,
		Macie2Actions.DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT,
		Macie2Actions.DISASSOCIATE_FROM_MASTER_ACCOUNT,
		Macie2Actions.DISASSOCIATE_MEMBER,
		Macie2Actions.ENABLE_MACIE,
		Macie2Actions.ENABLE_ORGANIZATION_ADMIN_ACCOUNT,
		Macie2Actions.PUT_CLASSIFICATION_EXPORT_CONFIGURATION,
		Macie2Actions.PUT_FINDINGS_PUBLICATION_CONFIGURATION,
		Macie2Actions.TEST_CUSTOM_DATA_IDENTIFIER,
		Macie2Actions.UPDATE_ALLOW_LIST,
		Macie2Actions.UPDATE_AUTOMATED_DISCOVERY_CONFIGURATION,
		Macie2Actions.UPDATE_CLASSIFICATION_JOB,
		Macie2Actions.UPDATE_CLASSIFICATION_SCOPE,
		Macie2Actions.UPDATE_FINDINGS_FILTER,
		Macie2Actions.UPDATE_MACIE_SESSION,
		Macie2Actions.UPDATE_MEMBER_SESSION,
		Macie2Actions.UPDATE_ORGANIZATION_CONFIGURATION,
		Macie2Actions.UPDATE_RESOURCE_PROFILE,
		Macie2Actions.UPDATE_RESOURCE_PROFILE_DETECTIONS,
		Macie2Actions.UPDATE_REVEAL_CONFIGURATION,
		Macie2Actions.UPDATE_SENSITIVITY_INSPECTION_TEMPLATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Macie2Actions.LIST_ALLOW_LISTS,
		Macie2Actions.LIST_AUTOMATED_DISCOVERY_ACCOUNTS,
		Macie2Actions.LIST_CLASSIFICATION_JOBS,
		Macie2Actions.LIST_CLASSIFICATION_SCOPES,
		Macie2Actions.LIST_CUSTOM_DATA_IDENTIFIERS,
		Macie2Actions.LIST_FINDINGS,
		Macie2Actions.LIST_FINDINGS_FILTERS,
		Macie2Actions.LIST_INVITATIONS,
		Macie2Actions.LIST_MANAGED_DATA_IDENTIFIERS,
		Macie2Actions.LIST_MEMBERS,
		Macie2Actions.LIST_ORGANIZATION_ADMIN_ACCOUNTS,
		Macie2Actions.LIST_RESOURCE_PROFILE_ARTIFACTS,
		Macie2Actions.LIST_RESOURCE_PROFILE_DETECTIONS,
		Macie2Actions.LIST_SENSITIVITY_INSPECTION_TEMPLATES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Macie2Actions.TAG_RESOURCE,
		Macie2Actions.UNTAG_RESOURCE,
	];
}

const AllowListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):allow-list/(?<resourceId>[^:/?]+)$",
);
const ClassificationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):classification-job/(?<resourceId>[^:/?]+)$",
);
const CustomDataIdentifierArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):custom-data-identifier/(?<resourceId>[^:/?]+)$",
);
const FindingsFilterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):findings-filter/(?<resourceId>[^:/?]+)$",
);
const MemberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):member/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for macie2 resources.
 */
export class Macie2Resources {
	/**
	 * Builds an ARN for the AllowList resource.
	 */
	static allowList(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:macie2:${props.region ?? "*"}:${props.account ?? "*"}:allow-list/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the AllowList resource.
	 */
	static isValidAllowListArn(arn: string): boolean {
		return AllowListArnRegex.test(arn);
	}

	/**
	 * Parses a AllowList ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAllowListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = AllowListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid AllowList ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the ClassificationJob resource.
	 */
	static classificationJob(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:macie2:${props.region ?? "*"}:${props.account ?? "*"}:classification-job/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ClassificationJob resource.
	 */
	static isValidClassificationJobArn(arn: string): boolean {
		return ClassificationJobArnRegex.test(arn);
	}

	/**
	 * Parses a ClassificationJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClassificationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ClassificationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ClassificationJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the CustomDataIdentifier resource.
	 */
	static customDataIdentifier(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:macie2:${props.region ?? "*"}:${props.account ?? "*"}:custom-data-identifier/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the CustomDataIdentifier resource.
	 */
	static isValidCustomDataIdentifierArn(arn: string): boolean {
		return CustomDataIdentifierArnRegex.test(arn);
	}

	/**
	 * Parses a CustomDataIdentifier ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomDataIdentifierArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = CustomDataIdentifierArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid CustomDataIdentifier ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the FindingsFilter resource.
	 */
	static findingsFilter(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:macie2:${props.region ?? "*"}:${props.account ?? "*"}:findings-filter/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the FindingsFilter resource.
	 */
	static isValidFindingsFilterArn(arn: string): boolean {
		return FindingsFilterArnRegex.test(arn);
	}

	/**
	 * Parses a FindingsFilter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFindingsFilterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = FindingsFilterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid FindingsFilter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the Member resource.
	 */
	static member(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:macie2:${props.region ?? "*"}:${props.account ?? "*"}:member/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Member resource.
	 */
	static isValidMemberArn(arn: string): boolean {
		return MemberArnRegex.test(arn);
	}

	/**
	 * Parses a Member ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMemberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = MemberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Member ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for macie2.
 */
export class Macie2Operations {
	/** IAM actions required for the AcceptInvitation API call. */
	static readonly ACCEPT_INVITATION: string[] = ["macie2:AcceptInvitation"];
	/** IAM actions required for the BatchGetCustomDataIdentifiers API call. */
	static readonly BATCH_GET_CUSTOM_DATA_IDENTIFIERS: string[] = [
		"macie2:BatchGetCustomDataIdentifiers",
	];
	/** IAM actions required for the BatchUpdateAutomatedDiscoveryAccounts API call. */
	static readonly BATCH_UPDATE_AUTOMATED_DISCOVERY_ACCOUNTS: string[] = [
		"macie2:BatchUpdateAutomatedDiscoveryAccounts",
	];
	/** IAM actions required for the CreateAllowList API call. */
	static readonly CREATE_ALLOW_LIST: string[] = [
		"macie2:CreateAllowList",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateClassificationJob API call. */
	static readonly CREATE_CLASSIFICATION_JOB: string[] = [
		"macie2:CreateClassificationJob",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateCustomDataIdentifier API call. */
	static readonly CREATE_CUSTOM_DATA_IDENTIFIER: string[] = [
		"macie2:CreateCustomDataIdentifier",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateFindingsFilter API call. */
	static readonly CREATE_FINDINGS_FILTER: string[] = [
		"macie2:CreateFindingsFilter",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateInvitations API call. */
	static readonly CREATE_INVITATIONS: string[] = ["macie2:CreateInvitations"];
	/** IAM actions required for the CreateMember API call. */
	static readonly CREATE_MEMBER: string[] = [
		"macie2:CreateMember",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateSampleFindings API call. */
	static readonly CREATE_SAMPLE_FINDINGS: string[] = [
		"macie2:CreateSampleFindings",
	];
	/** IAM actions required for the DeclineInvitations API call. */
	static readonly DECLINE_INVITATIONS: string[] = ["macie2:DeclineInvitations"];
	/** IAM actions required for the DeleteAllowList API call. */
	static readonly DELETE_ALLOW_LIST: string[] = ["macie2:DeleteAllowList"];
	/** IAM actions required for the DeleteCustomDataIdentifier API call. */
	static readonly DELETE_CUSTOM_DATA_IDENTIFIER: string[] = [
		"macie2:DeleteCustomDataIdentifier",
	];
	/** IAM actions required for the DeleteFindingsFilter API call. */
	static readonly DELETE_FINDINGS_FILTER: string[] = [
		"macie2:DeleteFindingsFilter",
	];
	/** IAM actions required for the DeleteInvitations API call. */
	static readonly DELETE_INVITATIONS: string[] = ["macie2:DeleteInvitations"];
	/** IAM actions required for the DeleteMember API call. */
	static readonly DELETE_MEMBER: string[] = ["macie2:DeleteMember"];
	/** IAM actions required for the DescribeBuckets API call. */
	static readonly DESCRIBE_BUCKETS: string[] = ["macie2:DescribeBuckets"];
	/** IAM actions required for the DescribeClassificationJob API call. */
	static readonly DESCRIBE_CLASSIFICATION_JOB: string[] = [
		"macie2:DescribeClassificationJob",
	];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION: string[] = [
		"macie2:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DisableMacie API call. */
	static readonly DISABLE_MACIE: string[] = ["macie2:DisableMacie"];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"macie2:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateFromAdministratorAccount API call. */
	static readonly DISASSOCIATE_FROM_ADMINISTRATOR_ACCOUNT: string[] = [
		"macie2:DisassociateFromAdministratorAccount",
	];
	/** IAM actions required for the DisassociateFromMasterAccount API call. */
	static readonly DISASSOCIATE_FROM_MASTER_ACCOUNT: string[] = [
		"macie2:DisassociateFromMasterAccount",
	];
	/** IAM actions required for the DisassociateMember API call. */
	static readonly DISASSOCIATE_MEMBER: string[] = ["macie2:DisassociateMember"];
	/** IAM actions required for the EnableMacie API call. */
	static readonly ENABLE_MACIE: string[] = ["macie2:EnableMacie"];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"macie2:EnableOrganizationAdminAccount",
	];
	/** IAM actions required for the GetAdministratorAccount API call. */
	static readonly GET_ADMINISTRATOR_ACCOUNT: string[] = [
		"macie2:GetAdministratorAccount",
	];
	/** IAM actions required for the GetAllowList API call. */
	static readonly GET_ALLOW_LIST: string[] = ["macie2:GetAllowList"];
	/** IAM actions required for the GetAutomatedDiscoveryConfiguration API call. */
	static readonly GET_AUTOMATED_DISCOVERY_CONFIGURATION: string[] = [
		"macie2:GetAutomatedDiscoveryConfiguration",
	];
	/** IAM actions required for the GetBucketStatistics API call. */
	static readonly GET_BUCKET_STATISTICS: string[] = [
		"macie2:GetBucketStatistics",
	];
	/** IAM actions required for the GetClassificationExportConfiguration API call. */
	static readonly GET_CLASSIFICATION_EXPORT_CONFIGURATION: string[] = [
		"macie2:GetClassificationExportConfiguration",
	];
	/** IAM actions required for the GetClassificationScope API call. */
	static readonly GET_CLASSIFICATION_SCOPE: string[] = [
		"macie2:GetClassificationScope",
	];
	/** IAM actions required for the GetCustomDataIdentifier API call. */
	static readonly GET_CUSTOM_DATA_IDENTIFIER: string[] = [
		"macie2:GetCustomDataIdentifier",
	];
	/** IAM actions required for the GetFindingStatistics API call. */
	static readonly GET_FINDING_STATISTICS: string[] = [
		"macie2:GetFindingStatistics",
	];
	/** IAM actions required for the GetFindings API call. */
	static readonly GET_FINDINGS: string[] = ["macie2:GetFindings"];
	/** IAM actions required for the GetFindingsFilter API call. */
	static readonly GET_FINDINGS_FILTER: string[] = ["macie2:GetFindingsFilter"];
	/** IAM actions required for the GetFindingsPublicationConfiguration API call. */
	static readonly GET_FINDINGS_PUBLICATION_CONFIGURATION: string[] = [
		"macie2:GetFindingsPublicationConfiguration",
	];
	/** IAM actions required for the GetInvitationsCount API call. */
	static readonly GET_INVITATIONS_COUNT: string[] = [
		"macie2:GetInvitationsCount",
	];
	/** IAM actions required for the GetMacieSession API call. */
	static readonly GET_MACIE_SESSION: string[] = ["macie2:GetMacieSession"];
	/** IAM actions required for the GetMasterAccount API call. */
	static readonly GET_MASTER_ACCOUNT: string[] = ["macie2:GetMasterAccount"];
	/** IAM actions required for the GetMember API call. */
	static readonly GET_MEMBER: string[] = ["macie2:GetMember"];
	/** IAM actions required for the GetResourceProfile API call. */
	static readonly GET_RESOURCE_PROFILE: string[] = [
		"macie2:GetResourceProfile",
	];
	/** IAM actions required for the GetRevealConfiguration API call. */
	static readonly GET_REVEAL_CONFIGURATION: string[] = [
		"macie2:GetRevealConfiguration",
	];
	/** IAM actions required for the GetSensitiveDataOccurrences API call. */
	static readonly GET_SENSITIVE_DATA_OCCURRENCES: string[] = [
		"macie2:GetSensitiveDataOccurrences",
	];
	/** IAM actions required for the GetSensitiveDataOccurrencesAvailability API call. */
	static readonly GET_SENSITIVE_DATA_OCCURRENCES_AVAILABILITY: string[] = [
		"macie2:GetSensitiveDataOccurrencesAvailability",
	];
	/** IAM actions required for the GetSensitivityInspectionTemplate API call. */
	static readonly GET_SENSITIVITY_INSPECTION_TEMPLATE: string[] = [
		"macie2:GetSensitivityInspectionTemplate",
	];
	/** IAM actions required for the GetUsageStatistics API call. */
	static readonly GET_USAGE_STATISTICS: string[] = [
		"macie2:GetUsageStatistics",
	];
	/** IAM actions required for the GetUsageTotals API call. */
	static readonly GET_USAGE_TOTALS: string[] = ["macie2:GetUsageTotals"];
	/** IAM actions required for the ListAllowLists API call. */
	static readonly LIST_ALLOW_LISTS: string[] = ["macie2:ListAllowLists"];
	/** IAM actions required for the ListAutomatedDiscoveryAccounts API call. */
	static readonly LIST_AUTOMATED_DISCOVERY_ACCOUNTS: string[] = [
		"macie2:ListAutomatedDiscoveryAccounts",
	];
	/** IAM actions required for the ListClassificationJobs API call. */
	static readonly LIST_CLASSIFICATION_JOBS: string[] = [
		"macie2:ListClassificationJobs",
	];
	/** IAM actions required for the ListClassificationScopes API call. */
	static readonly LIST_CLASSIFICATION_SCOPES: string[] = [
		"macie2:ListClassificationScopes",
	];
	/** IAM actions required for the ListCustomDataIdentifiers API call. */
	static readonly LIST_CUSTOM_DATA_IDENTIFIERS: string[] = [
		"macie2:ListCustomDataIdentifiers",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly LIST_FINDINGS: string[] = ["macie2:ListFindings"];
	/** IAM actions required for the ListFindingsFilters API call. */
	static readonly LIST_FINDINGS_FILTERS: string[] = [
		"macie2:ListFindingsFilters",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly LIST_INVITATIONS: string[] = ["macie2:ListInvitations"];
	/** IAM actions required for the ListManagedDataIdentifiers API call. */
	static readonly LIST_MANAGED_DATA_IDENTIFIERS: string[] = [
		"macie2:ListManagedDataIdentifiers",
	];
	/** IAM actions required for the ListMembers API call. */
	static readonly LIST_MEMBERS: string[] = ["macie2:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNTS: string[] = [
		"macie2:ListOrganizationAdminAccounts",
	];
	/** IAM actions required for the ListResourceProfileArtifacts API call. */
	static readonly LIST_RESOURCE_PROFILE_ARTIFACTS: string[] = [
		"macie2:ListResourceProfileArtifacts",
	];
	/** IAM actions required for the ListResourceProfileDetections API call. */
	static readonly LIST_RESOURCE_PROFILE_DETECTIONS: string[] = [
		"macie2:ListResourceProfileDetections",
	];
	/** IAM actions required for the ListSensitivityInspectionTemplates API call. */
	static readonly LIST_SENSITIVITY_INSPECTION_TEMPLATES: string[] = [
		"macie2:ListSensitivityInspectionTemplates",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"macie2:ListTagsForResource",
	];
	/** IAM actions required for the PutClassificationExportConfiguration API call. */
	static readonly PUT_CLASSIFICATION_EXPORT_CONFIGURATION: string[] = [
		"macie2:PutClassificationExportConfiguration",
	];
	/** IAM actions required for the PutFindingsPublicationConfiguration API call. */
	static readonly PUT_FINDINGS_PUBLICATION_CONFIGURATION: string[] = [
		"macie2:PutFindingsPublicationConfiguration",
	];
	/** IAM actions required for the SearchResources API call. */
	static readonly SEARCH_RESOURCES: string[] = ["macie2:SearchResources"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["macie2:TagResource"];
	/** IAM actions required for the TestCustomDataIdentifier API call. */
	static readonly TEST_CUSTOM_DATA_IDENTIFIER: string[] = [
		"macie2:TestCustomDataIdentifier",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["macie2:UntagResource"];
	/** IAM actions required for the UpdateAllowList API call. */
	static readonly UPDATE_ALLOW_LIST: string[] = ["macie2:UpdateAllowList"];
	/** IAM actions required for the UpdateAutomatedDiscoveryConfiguration API call. */
	static readonly UPDATE_AUTOMATED_DISCOVERY_CONFIGURATION: string[] = [
		"macie2:UpdateAutomatedDiscoveryConfiguration",
	];
	/** IAM actions required for the UpdateClassificationJob API call. */
	static readonly UPDATE_CLASSIFICATION_JOB: string[] = [
		"macie2:UpdateClassificationJob",
	];
	/** IAM actions required for the UpdateClassificationScope API call. */
	static readonly UPDATE_CLASSIFICATION_SCOPE: string[] = [
		"macie2:UpdateClassificationScope",
	];
	/** IAM actions required for the UpdateFindingsFilter API call. */
	static readonly UPDATE_FINDINGS_FILTER: string[] = [
		"macie2:UpdateFindingsFilter",
	];
	/** IAM actions required for the UpdateMacieSession API call. */
	static readonly UPDATE_MACIE_SESSION: string[] = [
		"macie2:UpdateMacieSession",
	];
	/** IAM actions required for the UpdateMemberSession API call. */
	static readonly UPDATE_MEMBER_SESSION: string[] = [
		"macie2:UpdateMemberSession",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION: string[] = [
		"macie2:UpdateOrganizationConfiguration",
	];
	/** IAM actions required for the UpdateResourceProfile API call. */
	static readonly UPDATE_RESOURCE_PROFILE: string[] = [
		"macie2:UpdateResourceProfile",
	];
	/** IAM actions required for the UpdateResourceProfileDetections API call. */
	static readonly UPDATE_RESOURCE_PROFILE_DETECTIONS: string[] = [
		"macie2:UpdateResourceProfileDetections",
	];
	/** IAM actions required for the UpdateRevealConfiguration API call. */
	static readonly UPDATE_REVEAL_CONFIGURATION: string[] = [
		"iam:PassRole",
		"macie2:UpdateRevealConfiguration",
	];
	/** IAM actions required for the UpdateSensitivityInspectionTemplate API call. */
	static readonly UPDATE_SENSITIVITY_INSPECTION_TEMPLATE: string[] = [
		"macie2:UpdateSensitivityInspectionTemplate",
	];
}

/**
 * Condition key constants and builders for macie2.
 */
export class Macie2Conditions {
	/** Condition keys applicable to the CreateAllowList action. */
	static readonly CREATE_ALLOW_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClassificationJob action. */
	static readonly CREATE_CLASSIFICATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomDataIdentifier action. */
	static readonly CREATE_CUSTOM_DATA_IDENTIFIER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFindingsFilter action. */
	static readonly CREATE_FINDINGS_FILTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMember action. */
	static readonly CREATE_MEMBER_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateClassificationJob action. */
	static readonly UPDATE_CLASSIFICATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateFindingsFilter action. */
	static readonly UPDATE_FINDINGS_FILTER_CONDITION_KEYS: string[] = [
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
