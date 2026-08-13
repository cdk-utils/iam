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
	static readonly AcceptInvitation = "macie2:AcceptInvitation";
	/** [Read] macie2:BatchGetCustomDataIdentifiers */
	static readonly BatchGetCustomDataIdentifiers =
		"macie2:BatchGetCustomDataIdentifiers";
	/** [Write] macie2:BatchUpdateAutomatedDiscoveryAccounts */
	static readonly BatchUpdateAutomatedDiscoveryAccounts =
		"macie2:BatchUpdateAutomatedDiscoveryAccounts";
	/** [Write] macie2:CreateAllowList */
	static readonly CreateAllowList = "macie2:CreateAllowList";
	/** [Write] macie2:CreateClassificationJob */
	static readonly CreateClassificationJob = "macie2:CreateClassificationJob";
	/** [Write] macie2:CreateCustomDataIdentifier */
	static readonly CreateCustomDataIdentifier =
		"macie2:CreateCustomDataIdentifier";
	/** [Write] macie2:CreateFindingsFilter */
	static readonly CreateFindingsFilter = "macie2:CreateFindingsFilter";
	/** [Write] macie2:CreateInvitations */
	static readonly CreateInvitations = "macie2:CreateInvitations";
	/** [Write] macie2:CreateMember */
	static readonly CreateMember = "macie2:CreateMember";
	/** [Write] macie2:CreateSampleFindings */
	static readonly CreateSampleFindings = "macie2:CreateSampleFindings";
	/** [Write] macie2:DeclineInvitations */
	static readonly DeclineInvitations = "macie2:DeclineInvitations";
	/** [Write] macie2:DeleteAllowList */
	static readonly DeleteAllowList = "macie2:DeleteAllowList";
	/** [Write] macie2:DeleteCustomDataIdentifier */
	static readonly DeleteCustomDataIdentifier =
		"macie2:DeleteCustomDataIdentifier";
	/** [Write] macie2:DeleteFindingsFilter */
	static readonly DeleteFindingsFilter = "macie2:DeleteFindingsFilter";
	/** [Write] macie2:DeleteInvitations */
	static readonly DeleteInvitations = "macie2:DeleteInvitations";
	/** [Write] macie2:DeleteMember */
	static readonly DeleteMember = "macie2:DeleteMember";
	/** [Read] macie2:DescribeBuckets */
	static readonly DescribeBuckets = "macie2:DescribeBuckets";
	/** [Read] macie2:DescribeClassificationJob */
	static readonly DescribeClassificationJob =
		"macie2:DescribeClassificationJob";
	/** [Read] macie2:DescribeOrganizationConfiguration */
	static readonly DescribeOrganizationConfiguration =
		"macie2:DescribeOrganizationConfiguration";
	/** [Write] macie2:DisableMacie */
	static readonly DisableMacie = "macie2:DisableMacie";
	/** [Write] macie2:DisableOrganizationAdminAccount */
	static readonly DisableOrganizationAdminAccount =
		"macie2:DisableOrganizationAdminAccount";
	/** [Write] macie2:DisassociateFromAdministratorAccount */
	static readonly DisassociateFromAdministratorAccount =
		"macie2:DisassociateFromAdministratorAccount";
	/** [Write] macie2:DisassociateFromMasterAccount */
	static readonly DisassociateFromMasterAccount =
		"macie2:DisassociateFromMasterAccount";
	/** [Write] macie2:DisassociateMember */
	static readonly DisassociateMember = "macie2:DisassociateMember";
	/** [Write] macie2:EnableMacie */
	static readonly EnableMacie = "macie2:EnableMacie";
	/** [Write] macie2:EnableOrganizationAdminAccount */
	static readonly EnableOrganizationAdminAccount =
		"macie2:EnableOrganizationAdminAccount";
	/** [Read] macie2:GetAdministratorAccount */
	static readonly actionGetAdministratorAccount =
		"macie2:GetAdministratorAccount";
	/** [Read] macie2:GetAllowList */
	static readonly actionGetAllowList = "macie2:GetAllowList";
	/** [Read] macie2:GetAutomatedDiscoveryConfiguration */
	static readonly actionGetAutomatedDiscoveryConfiguration =
		"macie2:GetAutomatedDiscoveryConfiguration";
	/** [Read] macie2:GetBucketStatistics */
	static readonly actionGetBucketStatistics = "macie2:GetBucketStatistics";
	/** [Read] macie2:GetClassificationExportConfiguration */
	static readonly actionGetClassificationExportConfiguration =
		"macie2:GetClassificationExportConfiguration";
	/** [Read] macie2:GetClassificationScope */
	static readonly actionGetClassificationScope =
		"macie2:GetClassificationScope";
	/** [Read] macie2:GetCustomDataIdentifier */
	static readonly actionGetCustomDataIdentifier =
		"macie2:GetCustomDataIdentifier";
	/** [Read] macie2:GetFindingStatistics */
	static readonly actionGetFindingStatistics = "macie2:GetFindingStatistics";
	/** [Read] macie2:GetFindings */
	static readonly actionGetFindings = "macie2:GetFindings";
	/** [Read] macie2:GetFindingsFilter */
	static readonly actionGetFindingsFilter = "macie2:GetFindingsFilter";
	/** [Read] macie2:GetFindingsPublicationConfiguration */
	static readonly actionGetFindingsPublicationConfiguration =
		"macie2:GetFindingsPublicationConfiguration";
	/** [Read] macie2:GetInvitationsCount */
	static readonly actionGetInvitationsCount = "macie2:GetInvitationsCount";
	/** [Read] macie2:GetMacieSession */
	static readonly actionGetMacieSession = "macie2:GetMacieSession";
	/** [Read] macie2:GetMasterAccount */
	static readonly actionGetMasterAccount = "macie2:GetMasterAccount";
	/** [Read] macie2:GetMember */
	static readonly actionGetMember = "macie2:GetMember";
	/** [Read] macie2:GetResourceProfile */
	static readonly actionGetResourceProfile = "macie2:GetResourceProfile";
	/** [Read] macie2:GetRevealConfiguration */
	static readonly actionGetRevealConfiguration =
		"macie2:GetRevealConfiguration";
	/** [Read] macie2:GetSensitiveDataOccurrences */
	static readonly actionGetSensitiveDataOccurrences =
		"macie2:GetSensitiveDataOccurrences";
	/** [Read] macie2:GetSensitiveDataOccurrencesAvailability */
	static readonly actionGetSensitiveDataOccurrencesAvailability =
		"macie2:GetSensitiveDataOccurrencesAvailability";
	/** [Read] macie2:GetSensitivityInspectionTemplate */
	static readonly actionGetSensitivityInspectionTemplate =
		"macie2:GetSensitivityInspectionTemplate";
	/** [Read] macie2:GetUsageStatistics */
	static readonly actionGetUsageStatistics = "macie2:GetUsageStatistics";
	/** [Read] macie2:GetUsageTotals */
	static readonly actionGetUsageTotals = "macie2:GetUsageTotals";
	/** [List] macie2:ListAllowLists */
	static readonly ListAllowLists = "macie2:ListAllowLists";
	/** [List] macie2:ListAutomatedDiscoveryAccounts */
	static readonly ListAutomatedDiscoveryAccounts =
		"macie2:ListAutomatedDiscoveryAccounts";
	/** [List] macie2:ListClassificationJobs */
	static readonly ListClassificationJobs = "macie2:ListClassificationJobs";
	/** [List] macie2:ListClassificationScopes */
	static readonly ListClassificationScopes = "macie2:ListClassificationScopes";
	/** [List] macie2:ListCustomDataIdentifiers */
	static readonly ListCustomDataIdentifiers =
		"macie2:ListCustomDataIdentifiers";
	/** [List] macie2:ListFindings */
	static readonly ListFindings = "macie2:ListFindings";
	/** [List] macie2:ListFindingsFilters */
	static readonly ListFindingsFilters = "macie2:ListFindingsFilters";
	/** [List] macie2:ListInvitations */
	static readonly ListInvitations = "macie2:ListInvitations";
	/** [List] macie2:ListManagedDataIdentifiers */
	static readonly ListManagedDataIdentifiers =
		"macie2:ListManagedDataIdentifiers";
	/** [List] macie2:ListMembers */
	static readonly ListMembers = "macie2:ListMembers";
	/** [List] macie2:ListOrganizationAdminAccounts */
	static readonly ListOrganizationAdminAccounts =
		"macie2:ListOrganizationAdminAccounts";
	/** [List] macie2:ListResourceProfileArtifacts */
	static readonly ListResourceProfileArtifacts =
		"macie2:ListResourceProfileArtifacts";
	/** [List] macie2:ListResourceProfileDetections */
	static readonly ListResourceProfileDetections =
		"macie2:ListResourceProfileDetections";
	/** [List] macie2:ListSensitivityInspectionTemplates */
	static readonly ListSensitivityInspectionTemplates =
		"macie2:ListSensitivityInspectionTemplates";
	/** [Read] macie2:ListTagsForResource */
	static readonly ListTagsForResource = "macie2:ListTagsForResource";
	/** [Write] macie2:PutClassificationExportConfiguration */
	static readonly PutClassificationExportConfiguration =
		"macie2:PutClassificationExportConfiguration";
	/** [Write] macie2:PutFindingsPublicationConfiguration */
	static readonly PutFindingsPublicationConfiguration =
		"macie2:PutFindingsPublicationConfiguration";
	/** [Read] macie2:SearchResources */
	static readonly SearchResources = "macie2:SearchResources";
	/** [Tagging] macie2:TagResource */
	static readonly TagResource = "macie2:TagResource";
	/** [Write] macie2:TestCustomDataIdentifier */
	static readonly TestCustomDataIdentifier = "macie2:TestCustomDataIdentifier";
	/** [Tagging] macie2:UntagResource */
	static readonly UntagResource = "macie2:UntagResource";
	/** [Write] macie2:UpdateAllowList */
	static readonly UpdateAllowList = "macie2:UpdateAllowList";
	/** [Write] macie2:UpdateAutomatedDiscoveryConfiguration */
	static readonly UpdateAutomatedDiscoveryConfiguration =
		"macie2:UpdateAutomatedDiscoveryConfiguration";
	/** [Write] macie2:UpdateClassificationJob */
	static readonly UpdateClassificationJob = "macie2:UpdateClassificationJob";
	/** [Write] macie2:UpdateClassificationScope */
	static readonly UpdateClassificationScope =
		"macie2:UpdateClassificationScope";
	/** [Write] macie2:UpdateFindingsFilter */
	static readonly UpdateFindingsFilter = "macie2:UpdateFindingsFilter";
	/** [Write] macie2:UpdateMacieSession */
	static readonly UpdateMacieSession = "macie2:UpdateMacieSession";
	/** [Write] macie2:UpdateMemberSession */
	static readonly UpdateMemberSession = "macie2:UpdateMemberSession";
	/** [Write] macie2:UpdateOrganizationConfiguration */
	static readonly UpdateOrganizationConfiguration =
		"macie2:UpdateOrganizationConfiguration";
	/** [Write] macie2:UpdateResourceProfile */
	static readonly UpdateResourceProfile = "macie2:UpdateResourceProfile";
	/** [Write] macie2:UpdateResourceProfileDetections */
	static readonly UpdateResourceProfileDetections =
		"macie2:UpdateResourceProfileDetections";
	/** [Write] macie2:UpdateRevealConfiguration */
	static readonly UpdateRevealConfiguration =
		"macie2:UpdateRevealConfiguration";
	/** [Write] macie2:UpdateSensitivityInspectionTemplate */
	static readonly UpdateSensitivityInspectionTemplate =
		"macie2:UpdateSensitivityInspectionTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Macie2Actions.BatchGetCustomDataIdentifiers,
		Macie2Actions.DescribeBuckets,
		Macie2Actions.DescribeClassificationJob,
		Macie2Actions.DescribeOrganizationConfiguration,
		Macie2Actions.actionGetAdministratorAccount,
		Macie2Actions.actionGetAllowList,
		Macie2Actions.actionGetAutomatedDiscoveryConfiguration,
		Macie2Actions.actionGetBucketStatistics,
		Macie2Actions.actionGetClassificationExportConfiguration,
		Macie2Actions.actionGetClassificationScope,
		Macie2Actions.actionGetCustomDataIdentifier,
		Macie2Actions.actionGetFindingStatistics,
		Macie2Actions.actionGetFindings,
		Macie2Actions.actionGetFindingsFilter,
		Macie2Actions.actionGetFindingsPublicationConfiguration,
		Macie2Actions.actionGetInvitationsCount,
		Macie2Actions.actionGetMacieSession,
		Macie2Actions.actionGetMasterAccount,
		Macie2Actions.actionGetMember,
		Macie2Actions.actionGetResourceProfile,
		Macie2Actions.actionGetRevealConfiguration,
		Macie2Actions.actionGetSensitiveDataOccurrences,
		Macie2Actions.actionGetSensitiveDataOccurrencesAvailability,
		Macie2Actions.actionGetSensitivityInspectionTemplate,
		Macie2Actions.actionGetUsageStatistics,
		Macie2Actions.actionGetUsageTotals,
		Macie2Actions.ListTagsForResource,
		Macie2Actions.SearchResources,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Macie2Actions.AcceptInvitation,
		Macie2Actions.BatchUpdateAutomatedDiscoveryAccounts,
		Macie2Actions.CreateAllowList,
		Macie2Actions.CreateClassificationJob,
		Macie2Actions.CreateCustomDataIdentifier,
		Macie2Actions.CreateFindingsFilter,
		Macie2Actions.CreateInvitations,
		Macie2Actions.CreateMember,
		Macie2Actions.CreateSampleFindings,
		Macie2Actions.DeclineInvitations,
		Macie2Actions.DeleteAllowList,
		Macie2Actions.DeleteCustomDataIdentifier,
		Macie2Actions.DeleteFindingsFilter,
		Macie2Actions.DeleteInvitations,
		Macie2Actions.DeleteMember,
		Macie2Actions.DisableMacie,
		Macie2Actions.DisableOrganizationAdminAccount,
		Macie2Actions.DisassociateFromAdministratorAccount,
		Macie2Actions.DisassociateFromMasterAccount,
		Macie2Actions.DisassociateMember,
		Macie2Actions.EnableMacie,
		Macie2Actions.EnableOrganizationAdminAccount,
		Macie2Actions.PutClassificationExportConfiguration,
		Macie2Actions.PutFindingsPublicationConfiguration,
		Macie2Actions.TestCustomDataIdentifier,
		Macie2Actions.UpdateAllowList,
		Macie2Actions.UpdateAutomatedDiscoveryConfiguration,
		Macie2Actions.UpdateClassificationJob,
		Macie2Actions.UpdateClassificationScope,
		Macie2Actions.UpdateFindingsFilter,
		Macie2Actions.UpdateMacieSession,
		Macie2Actions.UpdateMemberSession,
		Macie2Actions.UpdateOrganizationConfiguration,
		Macie2Actions.UpdateResourceProfile,
		Macie2Actions.UpdateResourceProfileDetections,
		Macie2Actions.UpdateRevealConfiguration,
		Macie2Actions.UpdateSensitivityInspectionTemplate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Macie2Actions.ListAllowLists,
		Macie2Actions.ListAutomatedDiscoveryAccounts,
		Macie2Actions.ListClassificationJobs,
		Macie2Actions.ListClassificationScopes,
		Macie2Actions.ListCustomDataIdentifiers,
		Macie2Actions.ListFindings,
		Macie2Actions.ListFindingsFilters,
		Macie2Actions.ListInvitations,
		Macie2Actions.ListManagedDataIdentifiers,
		Macie2Actions.ListMembers,
		Macie2Actions.ListOrganizationAdminAccounts,
		Macie2Actions.ListResourceProfileArtifacts,
		Macie2Actions.ListResourceProfileDetections,
		Macie2Actions.ListSensitivityInspectionTemplates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Macie2Actions.TagResource,
		Macie2Actions.UntagResource,
	];
}

/**
 * Properties for building a AllowList ARN.
 */
export interface Macie2AllowListArnProps {
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
 * Parsed components of a AllowList ARN.
 */
export interface Macie2AllowListArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a ClassificationJob ARN.
 */
export interface Macie2ClassificationJobArnProps {
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
 * Parsed components of a ClassificationJob ARN.
 */
export interface Macie2ClassificationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a CustomDataIdentifier ARN.
 */
export interface Macie2CustomDataIdentifierArnProps {
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
 * Parsed components of a CustomDataIdentifier ARN.
 */
export interface Macie2CustomDataIdentifierArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a FindingsFilter ARN.
 */
export interface Macie2FindingsFilterArnProps {
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
 * Parsed components of a FindingsFilter ARN.
 */
export interface Macie2FindingsFilterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a Member ARN.
 */
export interface Macie2MemberArnProps {
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
 * Parsed components of a Member ARN.
 */
export interface Macie2MemberArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const AllowListArnRegex =
	/^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):allow-list\/(?<resourceId>[^:/?]+)$/;
const ClassificationJobArnRegex =
	/^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):classification-job\/(?<resourceId>[^:/?]+)$/;
const CustomDataIdentifierArnRegex =
	/^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):custom-data-identifier\/(?<resourceId>[^:/?]+)$/;
const FindingsFilterArnRegex =
	/^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):findings-filter\/(?<resourceId>[^:/?]+)$/;
const MemberArnRegex =
	/^arn:(?<partition>[^:]+):macie2:(?<region>[^:]*):(?<account>[^:]*):member\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for macie2 resources.
 */
export class Macie2Resources {
	/**
	 * Builds an ARN for the AllowList resource.
	 */
	static allowList(props: Macie2AllowListArnProps): string {
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
	static parseAllowListArn(arn: string): Macie2AllowListArnComponents {
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
	static classificationJob(props: Macie2ClassificationJobArnProps): string {
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
	static parseClassificationJobArn(
		arn: string,
	): Macie2ClassificationJobArnComponents {
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
	static customDataIdentifier(
		props: Macie2CustomDataIdentifierArnProps,
	): string {
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
	static parseCustomDataIdentifierArn(
		arn: string,
	): Macie2CustomDataIdentifierArnComponents {
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
	static findingsFilter(props: Macie2FindingsFilterArnProps): string {
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
	static parseFindingsFilterArn(
		arn: string,
	): Macie2FindingsFilterArnComponents {
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
	static member(props: Macie2MemberArnProps): string {
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
	static parseMemberArn(arn: string): Macie2MemberArnComponents {
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
	static readonly AcceptInvitation: string[] = ["macie2:AcceptInvitation"];
	/** IAM actions required for the BatchGetCustomDataIdentifiers API call. */
	static readonly BatchGetCustomDataIdentifiers: string[] = [
		"macie2:BatchGetCustomDataIdentifiers",
	];
	/** IAM actions required for the BatchUpdateAutomatedDiscoveryAccounts API call. */
	static readonly BatchUpdateAutomatedDiscoveryAccounts: string[] = [
		"macie2:BatchUpdateAutomatedDiscoveryAccounts",
	];
	/** IAM actions required for the CreateAllowList API call. */
	static readonly CreateAllowList: string[] = [
		"macie2:CreateAllowList",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateClassificationJob API call. */
	static readonly CreateClassificationJob: string[] = [
		"macie2:CreateClassificationJob",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateCustomDataIdentifier API call. */
	static readonly CreateCustomDataIdentifier: string[] = [
		"macie2:CreateCustomDataIdentifier",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateFindingsFilter API call. */
	static readonly CreateFindingsFilter: string[] = [
		"macie2:CreateFindingsFilter",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateInvitations API call. */
	static readonly CreateInvitations: string[] = ["macie2:CreateInvitations"];
	/** IAM actions required for the CreateMember API call. */
	static readonly CreateMember: string[] = [
		"macie2:CreateMember",
		"macie2:TagResource",
	];
	/** IAM actions required for the CreateSampleFindings API call. */
	static readonly CreateSampleFindings: string[] = [
		"macie2:CreateSampleFindings",
	];
	/** IAM actions required for the DeclineInvitations API call. */
	static readonly DeclineInvitations: string[] = ["macie2:DeclineInvitations"];
	/** IAM actions required for the DeleteAllowList API call. */
	static readonly DeleteAllowList: string[] = ["macie2:DeleteAllowList"];
	/** IAM actions required for the DeleteCustomDataIdentifier API call. */
	static readonly DeleteCustomDataIdentifier: string[] = [
		"macie2:DeleteCustomDataIdentifier",
	];
	/** IAM actions required for the DeleteFindingsFilter API call. */
	static readonly DeleteFindingsFilter: string[] = [
		"macie2:DeleteFindingsFilter",
	];
	/** IAM actions required for the DeleteInvitations API call. */
	static readonly DeleteInvitations: string[] = ["macie2:DeleteInvitations"];
	/** IAM actions required for the DeleteMember API call. */
	static readonly DeleteMember: string[] = ["macie2:DeleteMember"];
	/** IAM actions required for the DescribeBuckets API call. */
	static readonly DescribeBuckets: string[] = ["macie2:DescribeBuckets"];
	/** IAM actions required for the DescribeClassificationJob API call. */
	static readonly DescribeClassificationJob: string[] = [
		"macie2:DescribeClassificationJob",
	];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DescribeOrganizationConfiguration: string[] = [
		"macie2:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DisableMacie API call. */
	static readonly DisableMacie: string[] = ["macie2:DisableMacie"];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DisableOrganizationAdminAccount: string[] = [
		"macie2:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateFromAdministratorAccount API call. */
	static readonly DisassociateFromAdministratorAccount: string[] = [
		"macie2:DisassociateFromAdministratorAccount",
	];
	/** IAM actions required for the DisassociateFromMasterAccount API call. */
	static readonly DisassociateFromMasterAccount: string[] = [
		"macie2:DisassociateFromMasterAccount",
	];
	/** IAM actions required for the DisassociateMember API call. */
	static readonly DisassociateMember: string[] = ["macie2:DisassociateMember"];
	/** IAM actions required for the EnableMacie API call. */
	static readonly EnableMacie: string[] = ["macie2:EnableMacie"];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly EnableOrganizationAdminAccount: string[] = [
		"macie2:EnableOrganizationAdminAccount",
	];
	/** IAM actions required for the GetAdministratorAccount API call. */
	static readonly opGetAdministratorAccount: string[] = [
		"macie2:GetAdministratorAccount",
	];
	/** IAM actions required for the GetAllowList API call. */
	static readonly opGetAllowList: string[] = ["macie2:GetAllowList"];
	/** IAM actions required for the GetAutomatedDiscoveryConfiguration API call. */
	static readonly opGetAutomatedDiscoveryConfiguration: string[] = [
		"macie2:GetAutomatedDiscoveryConfiguration",
	];
	/** IAM actions required for the GetBucketStatistics API call. */
	static readonly opGetBucketStatistics: string[] = [
		"macie2:GetBucketStatistics",
	];
	/** IAM actions required for the GetClassificationExportConfiguration API call. */
	static readonly opGetClassificationExportConfiguration: string[] = [
		"macie2:GetClassificationExportConfiguration",
	];
	/** IAM actions required for the GetClassificationScope API call. */
	static readonly opGetClassificationScope: string[] = [
		"macie2:GetClassificationScope",
	];
	/** IAM actions required for the GetCustomDataIdentifier API call. */
	static readonly opGetCustomDataIdentifier: string[] = [
		"macie2:GetCustomDataIdentifier",
	];
	/** IAM actions required for the GetFindingStatistics API call. */
	static readonly opGetFindingStatistics: string[] = [
		"macie2:GetFindingStatistics",
	];
	/** IAM actions required for the GetFindings API call. */
	static readonly opGetFindings: string[] = ["macie2:GetFindings"];
	/** IAM actions required for the GetFindingsFilter API call. */
	static readonly opGetFindingsFilter: string[] = ["macie2:GetFindingsFilter"];
	/** IAM actions required for the GetFindingsPublicationConfiguration API call. */
	static readonly opGetFindingsPublicationConfiguration: string[] = [
		"macie2:GetFindingsPublicationConfiguration",
	];
	/** IAM actions required for the GetInvitationsCount API call. */
	static readonly opGetInvitationsCount: string[] = [
		"macie2:GetInvitationsCount",
	];
	/** IAM actions required for the GetMacieSession API call. */
	static readonly opGetMacieSession: string[] = ["macie2:GetMacieSession"];
	/** IAM actions required for the GetMasterAccount API call. */
	static readonly opGetMasterAccount: string[] = ["macie2:GetMasterAccount"];
	/** IAM actions required for the GetMember API call. */
	static readonly opGetMember: string[] = ["macie2:GetMember"];
	/** IAM actions required for the GetResourceProfile API call. */
	static readonly opGetResourceProfile: string[] = [
		"macie2:GetResourceProfile",
	];
	/** IAM actions required for the GetRevealConfiguration API call. */
	static readonly opGetRevealConfiguration: string[] = [
		"macie2:GetRevealConfiguration",
	];
	/** IAM actions required for the GetSensitiveDataOccurrences API call. */
	static readonly opGetSensitiveDataOccurrences: string[] = [
		"macie2:GetSensitiveDataOccurrences",
	];
	/** IAM actions required for the GetSensitiveDataOccurrencesAvailability API call. */
	static readonly opGetSensitiveDataOccurrencesAvailability: string[] = [
		"macie2:GetSensitiveDataOccurrencesAvailability",
	];
	/** IAM actions required for the GetSensitivityInspectionTemplate API call. */
	static readonly opGetSensitivityInspectionTemplate: string[] = [
		"macie2:GetSensitivityInspectionTemplate",
	];
	/** IAM actions required for the GetUsageStatistics API call. */
	static readonly opGetUsageStatistics: string[] = [
		"macie2:GetUsageStatistics",
	];
	/** IAM actions required for the GetUsageTotals API call. */
	static readonly opGetUsageTotals: string[] = ["macie2:GetUsageTotals"];
	/** IAM actions required for the ListAllowLists API call. */
	static readonly ListAllowLists: string[] = ["macie2:ListAllowLists"];
	/** IAM actions required for the ListAutomatedDiscoveryAccounts API call. */
	static readonly ListAutomatedDiscoveryAccounts: string[] = [
		"macie2:ListAutomatedDiscoveryAccounts",
	];
	/** IAM actions required for the ListClassificationJobs API call. */
	static readonly ListClassificationJobs: string[] = [
		"macie2:ListClassificationJobs",
	];
	/** IAM actions required for the ListClassificationScopes API call. */
	static readonly ListClassificationScopes: string[] = [
		"macie2:ListClassificationScopes",
	];
	/** IAM actions required for the ListCustomDataIdentifiers API call. */
	static readonly ListCustomDataIdentifiers: string[] = [
		"macie2:ListCustomDataIdentifiers",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly ListFindings: string[] = ["macie2:ListFindings"];
	/** IAM actions required for the ListFindingsFilters API call. */
	static readonly ListFindingsFilters: string[] = [
		"macie2:ListFindingsFilters",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly ListInvitations: string[] = ["macie2:ListInvitations"];
	/** IAM actions required for the ListManagedDataIdentifiers API call. */
	static readonly ListManagedDataIdentifiers: string[] = [
		"macie2:ListManagedDataIdentifiers",
	];
	/** IAM actions required for the ListMembers API call. */
	static readonly ListMembers: string[] = ["macie2:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly ListOrganizationAdminAccounts: string[] = [
		"macie2:ListOrganizationAdminAccounts",
	];
	/** IAM actions required for the ListResourceProfileArtifacts API call. */
	static readonly ListResourceProfileArtifacts: string[] = [
		"macie2:ListResourceProfileArtifacts",
	];
	/** IAM actions required for the ListResourceProfileDetections API call. */
	static readonly ListResourceProfileDetections: string[] = [
		"macie2:ListResourceProfileDetections",
	];
	/** IAM actions required for the ListSensitivityInspectionTemplates API call. */
	static readonly ListSensitivityInspectionTemplates: string[] = [
		"macie2:ListSensitivityInspectionTemplates",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"macie2:ListTagsForResource",
	];
	/** IAM actions required for the PutClassificationExportConfiguration API call. */
	static readonly PutClassificationExportConfiguration: string[] = [
		"macie2:PutClassificationExportConfiguration",
	];
	/** IAM actions required for the PutFindingsPublicationConfiguration API call. */
	static readonly PutFindingsPublicationConfiguration: string[] = [
		"macie2:PutFindingsPublicationConfiguration",
	];
	/** IAM actions required for the SearchResources API call. */
	static readonly SearchResources: string[] = ["macie2:SearchResources"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["macie2:TagResource"];
	/** IAM actions required for the TestCustomDataIdentifier API call. */
	static readonly TestCustomDataIdentifier: string[] = [
		"macie2:TestCustomDataIdentifier",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["macie2:UntagResource"];
	/** IAM actions required for the UpdateAllowList API call. */
	static readonly UpdateAllowList: string[] = ["macie2:UpdateAllowList"];
	/** IAM actions required for the UpdateAutomatedDiscoveryConfiguration API call. */
	static readonly UpdateAutomatedDiscoveryConfiguration: string[] = [
		"macie2:UpdateAutomatedDiscoveryConfiguration",
	];
	/** IAM actions required for the UpdateClassificationJob API call. */
	static readonly UpdateClassificationJob: string[] = [
		"macie2:UpdateClassificationJob",
	];
	/** IAM actions required for the UpdateClassificationScope API call. */
	static readonly UpdateClassificationScope: string[] = [
		"macie2:UpdateClassificationScope",
	];
	/** IAM actions required for the UpdateFindingsFilter API call. */
	static readonly UpdateFindingsFilter: string[] = [
		"macie2:UpdateFindingsFilter",
	];
	/** IAM actions required for the UpdateMacieSession API call. */
	static readonly UpdateMacieSession: string[] = ["macie2:UpdateMacieSession"];
	/** IAM actions required for the UpdateMemberSession API call. */
	static readonly UpdateMemberSession: string[] = [
		"macie2:UpdateMemberSession",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UpdateOrganizationConfiguration: string[] = [
		"macie2:UpdateOrganizationConfiguration",
	];
	/** IAM actions required for the UpdateResourceProfile API call. */
	static readonly UpdateResourceProfile: string[] = [
		"macie2:UpdateResourceProfile",
	];
	/** IAM actions required for the UpdateResourceProfileDetections API call. */
	static readonly UpdateResourceProfileDetections: string[] = [
		"macie2:UpdateResourceProfileDetections",
	];
	/** IAM actions required for the UpdateRevealConfiguration API call. */
	static readonly UpdateRevealConfiguration: string[] = [
		"iam:PassRole",
		"macie2:UpdateRevealConfiguration",
	];
	/** IAM actions required for the UpdateSensitivityInspectionTemplate API call. */
	static readonly UpdateSensitivityInspectionTemplate: string[] = [
		"macie2:UpdateSensitivityInspectionTemplate",
	];
}

/**
 * Condition key constants and builders for macie2.
 */
export class Macie2Conditions {
	/** Condition keys applicable to the CreateAllowList action. */
	static readonly CreateAllowListConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateClassificationJob action. */
	static readonly CreateClassificationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomDataIdentifier action. */
	static readonly CreateCustomDataIdentifierConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFindingsFilter action. */
	static readonly CreateFindingsFilterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMember action. */
	static readonly CreateMemberConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateClassificationJob action. */
	static readonly UpdateClassificationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateFindingsFilter action. */
	static readonly UpdateFindingsFilterConditionKeys: string[] = [
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
