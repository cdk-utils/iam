// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/fms.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the fms service.
 */
export class FmsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "fms";

	/** [Write] fms:AssociateAdminAccount */
	static readonly AssociateAdminAccount = "fms:AssociateAdminAccount";
	/** [Write] fms:AssociateThirdPartyFirewall */
	static readonly AssociateThirdPartyFirewall =
		"fms:AssociateThirdPartyFirewall";
	/** [Write] fms:BatchAssociateResource */
	static readonly BatchAssociateResource = "fms:BatchAssociateResource";
	/** [Write] fms:BatchDisassociateResource */
	static readonly BatchDisassociateResource = "fms:BatchDisassociateResource";
	/** [Write] fms:DeleteAppsList */
	static readonly DeleteAppsList = "fms:DeleteAppsList";
	/** [Write] fms:DeleteNotificationChannel */
	static readonly DeleteNotificationChannel = "fms:DeleteNotificationChannel";
	/** [Write] fms:DeletePolicy */
	static readonly DeletePolicy = "fms:DeletePolicy";
	/** [Write] fms:DeleteProtocolsList */
	static readonly DeleteProtocolsList = "fms:DeleteProtocolsList";
	/** [Write] fms:DeleteResourceSet */
	static readonly DeleteResourceSet = "fms:DeleteResourceSet";
	/** [Write] fms:DisassociateAdminAccount */
	static readonly DisassociateAdminAccount = "fms:DisassociateAdminAccount";
	/** [Write] fms:DisassociateThirdPartyFirewall */
	static readonly DisassociateThirdPartyFirewall =
		"fms:DisassociateThirdPartyFirewall";
	/** [Read] fms:GetAdminAccount */
	static readonly actionGetAdminAccount = "fms:GetAdminAccount";
	/** [Read] fms:GetAdminScope */
	static readonly actionGetAdminScope = "fms:GetAdminScope";
	/** [Read] fms:GetAppsList */
	static readonly actionGetAppsList = "fms:GetAppsList";
	/** [Read] fms:GetComplianceDetail */
	static readonly actionGetComplianceDetail = "fms:GetComplianceDetail";
	/** [Read] fms:GetNotificationChannel */
	static readonly actionGetNotificationChannel = "fms:GetNotificationChannel";
	/** [Read] fms:GetPolicy */
	static readonly actionGetPolicy = "fms:GetPolicy";
	/** [Read] fms:GetProtectionStatus */
	static readonly actionGetProtectionStatus = "fms:GetProtectionStatus";
	/** [Read] fms:GetProtocolsList */
	static readonly actionGetProtocolsList = "fms:GetProtocolsList";
	/** [Read] fms:GetResourceSet */
	static readonly actionGetResourceSet = "fms:GetResourceSet";
	/** [Read] fms:GetThirdPartyFirewallAssociationStatus */
	static readonly actionGetThirdPartyFirewallAssociationStatus =
		"fms:GetThirdPartyFirewallAssociationStatus";
	/** [Read] fms:GetViolationDetails */
	static readonly actionGetViolationDetails = "fms:GetViolationDetails";
	/** [List] fms:ListAdminAccountsForOrganization */
	static readonly ListAdminAccountsForOrganization =
		"fms:ListAdminAccountsForOrganization";
	/** [List] fms:ListAdminsManagingAccount */
	static readonly ListAdminsManagingAccount = "fms:ListAdminsManagingAccount";
	/** [List] fms:ListAppsLists */
	static readonly ListAppsLists = "fms:ListAppsLists";
	/** [List] fms:ListComplianceStatus */
	static readonly ListComplianceStatus = "fms:ListComplianceStatus";
	/** [List] fms:ListDiscoveredResources */
	static readonly ListDiscoveredResources = "fms:ListDiscoveredResources";
	/** [List] fms:ListMemberAccounts */
	static readonly ListMemberAccounts = "fms:ListMemberAccounts";
	/** [List] fms:ListPolicies */
	static readonly ListPolicies = "fms:ListPolicies";
	/** [List] fms:ListProtocolsLists */
	static readonly ListProtocolsLists = "fms:ListProtocolsLists";
	/** [List] fms:ListResourceSetResources */
	static readonly ListResourceSetResources = "fms:ListResourceSetResources";
	/** [List] fms:ListResourceSets */
	static readonly ListResourceSets = "fms:ListResourceSets";
	/** [Read] fms:ListTagsForResource */
	static readonly ListTagsForResource = "fms:ListTagsForResource";
	/** [List] fms:ListThirdPartyFirewallFirewallPolicies */
	static readonly ListThirdPartyFirewallFirewallPolicies =
		"fms:ListThirdPartyFirewallFirewallPolicies";
	/** [Write] fms:PutAdminAccount */
	static readonly PutAdminAccount = "fms:PutAdminAccount";
	/** [Write] fms:PutAppsList */
	static readonly PutAppsList = "fms:PutAppsList";
	/** [Write] fms:PutNotificationChannel */
	static readonly PutNotificationChannel = "fms:PutNotificationChannel";
	/** [Write] fms:PutPolicy */
	static readonly PutPolicy = "fms:PutPolicy";
	/** [Write] fms:PutProtocolsList */
	static readonly PutProtocolsList = "fms:PutProtocolsList";
	/** [Write] fms:PutResourceSet */
	static readonly PutResourceSet = "fms:PutResourceSet";
	/** [Tagging] fms:TagResource */
	static readonly TagResource = "fms:TagResource";
	/** [Tagging] fms:UntagResource */
	static readonly UntagResource = "fms:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FmsActions.actionGetAdminAccount,
		FmsActions.actionGetAdminScope,
		FmsActions.actionGetAppsList,
		FmsActions.actionGetComplianceDetail,
		FmsActions.actionGetNotificationChannel,
		FmsActions.actionGetPolicy,
		FmsActions.actionGetProtectionStatus,
		FmsActions.actionGetProtocolsList,
		FmsActions.actionGetResourceSet,
		FmsActions.actionGetThirdPartyFirewallAssociationStatus,
		FmsActions.actionGetViolationDetails,
		FmsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		FmsActions.AssociateAdminAccount,
		FmsActions.AssociateThirdPartyFirewall,
		FmsActions.BatchAssociateResource,
		FmsActions.BatchDisassociateResource,
		FmsActions.DeleteAppsList,
		FmsActions.DeleteNotificationChannel,
		FmsActions.DeletePolicy,
		FmsActions.DeleteProtocolsList,
		FmsActions.DeleteResourceSet,
		FmsActions.DisassociateAdminAccount,
		FmsActions.DisassociateThirdPartyFirewall,
		FmsActions.PutAdminAccount,
		FmsActions.PutAppsList,
		FmsActions.PutNotificationChannel,
		FmsActions.PutPolicy,
		FmsActions.PutProtocolsList,
		FmsActions.PutResourceSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		FmsActions.ListAdminAccountsForOrganization,
		FmsActions.ListAdminsManagingAccount,
		FmsActions.ListAppsLists,
		FmsActions.ListComplianceStatus,
		FmsActions.ListDiscoveredResources,
		FmsActions.ListMemberAccounts,
		FmsActions.ListPolicies,
		FmsActions.ListProtocolsLists,
		FmsActions.ListResourceSetResources,
		FmsActions.ListResourceSets,
		FmsActions.ListThirdPartyFirewallFirewallPolicies,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		FmsActions.TagResource,
		FmsActions.UntagResource,
	];
}

/**
 * Properties for building a applications-list ARN.
 */
export interface FmsApplicationsListArnProps {
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
 * Parsed components of a applications-list ARN.
 */
export interface FmsApplicationsListArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a policy ARN.
 */
export interface FmsPolicyArnProps {
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
 * Parsed components of a policy ARN.
 */
export interface FmsPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a protocols-list ARN.
 */
export interface FmsProtocolsListArnProps {
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
 * Parsed components of a protocols-list ARN.
 */
export interface FmsProtocolsListArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a resource-set ARN.
 */
export interface FmsResourceSetArnProps {
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
 * Parsed components of a resource-set ARN.
 */
export interface FmsResourceSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Id component. */
	readonly id: string;
}

const ApplicationsListArnRegex =
	/^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):applications-list\/(?<id>[^:/?]+)$/;
const PolicyArnRegex =
	/^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):policy\/(?<id>[^:/?]+)$/;
const ProtocolsListArnRegex =
	/^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):protocols-list\/(?<id>[^:/?]+)$/;
const ResourceSetArnRegex =
	/^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):resource-set\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for fms resources.
 */
export class FmsResources {
	/**
	 * Builds an ARN for the applications-list resource.
	 */
	static applicationsList(props: FmsApplicationsListArnProps): string {
		return `arn:${props.partition ?? "aws"}:fms:${props.region ?? "*"}:${props.account ?? "*"}:applications-list/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the applications-list resource.
	 */
	static isValidApplicationsListArn(arn: string): boolean {
		return ApplicationsListArnRegex.test(arn);
	}

	/**
	 * Parses a applications-list ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationsListArn(
		arn: string,
	): FmsApplicationsListArnComponents {
		const match = ApplicationsListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid applications-list ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: FmsPolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:fms:${props.region ?? "*"}:${props.account ?? "*"}:policy/${props.id}`;
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
	static parsePolicyArn(arn: string): FmsPolicyArnComponents {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the protocols-list resource.
	 */
	static protocolsList(props: FmsProtocolsListArnProps): string {
		return `arn:${props.partition ?? "aws"}:fms:${props.region ?? "*"}:${props.account ?? "*"}:protocols-list/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the protocols-list resource.
	 */
	static isValidProtocolsListArn(arn: string): boolean {
		return ProtocolsListArnRegex.test(arn);
	}

	/**
	 * Parses a protocols-list ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProtocolsListArn(arn: string): FmsProtocolsListArnComponents {
		const match = ProtocolsListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid protocols-list ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the resource-set resource.
	 */
	static resourceSet(props: FmsResourceSetArnProps): string {
		return `arn:${props.partition ?? "aws"}:fms:${props.region ?? "*"}:${props.account ?? "*"}:resource-set/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resource-set resource.
	 */
	static isValidResourceSetArn(arn: string): boolean {
		return ResourceSetArnRegex.test(arn);
	}

	/**
	 * Parses a resource-set ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceSetArn(arn: string): FmsResourceSetArnComponents {
		const match = ResourceSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resource-set ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for fms.
 */
export class FmsOperations {
	/** IAM actions required for the AssociateAdminAccount API call. */
	static readonly AssociateAdminAccount: string[] = [
		"fms:AssociateAdminAccount",
	];
	/** IAM actions required for the AssociateThirdPartyFirewall API call. */
	static readonly AssociateThirdPartyFirewall: string[] = [
		"fms:AssociateThirdPartyFirewall",
	];
	/** IAM actions required for the BatchAssociateResource API call. */
	static readonly BatchAssociateResource: string[] = [
		"fms:BatchAssociateResource",
	];
	/** IAM actions required for the BatchDisassociateResource API call. */
	static readonly BatchDisassociateResource: string[] = [
		"fms:BatchDisassociateResource",
	];
	/** IAM actions required for the DeleteAppsList API call. */
	static readonly DeleteAppsList: string[] = ["fms:DeleteAppsList"];
	/** IAM actions required for the DeleteNotificationChannel API call. */
	static readonly DeleteNotificationChannel: string[] = [
		"fms:DeleteNotificationChannel",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["fms:DeletePolicy"];
	/** IAM actions required for the DeleteProtocolsList API call. */
	static readonly DeleteProtocolsList: string[] = ["fms:DeleteProtocolsList"];
	/** IAM actions required for the DeleteResourceSet API call. */
	static readonly DeleteResourceSet: string[] = ["fms:DeleteResourceSet"];
	/** IAM actions required for the DisassociateAdminAccount API call. */
	static readonly DisassociateAdminAccount: string[] = [
		"fms:DisassociateAdminAccount",
	];
	/** IAM actions required for the DisassociateThirdPartyFirewall API call. */
	static readonly DisassociateThirdPartyFirewall: string[] = [
		"fms:DisassociateThirdPartyFirewall",
	];
	/** IAM actions required for the GetAdminAccount API call. */
	static readonly opGetAdminAccount: string[] = ["fms:GetAdminAccount"];
	/** IAM actions required for the GetAdminScope API call. */
	static readonly opGetAdminScope: string[] = ["fms:GetAdminScope"];
	/** IAM actions required for the GetAppsList API call. */
	static readonly opGetAppsList: string[] = ["fms:GetAppsList"];
	/** IAM actions required for the GetComplianceDetail API call. */
	static readonly opGetComplianceDetail: string[] = ["fms:GetComplianceDetail"];
	/** IAM actions required for the GetNotificationChannel API call. */
	static readonly opGetNotificationChannel: string[] = [
		"fms:GetNotificationChannel",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["fms:GetPolicy"];
	/** IAM actions required for the GetProtectionStatus API call. */
	static readonly opGetProtectionStatus: string[] = ["fms:GetProtectionStatus"];
	/** IAM actions required for the GetProtocolsList API call. */
	static readonly opGetProtocolsList: string[] = ["fms:GetProtocolsList"];
	/** IAM actions required for the GetResourceSet API call. */
	static readonly opGetResourceSet: string[] = ["fms:GetResourceSet"];
	/** IAM actions required for the GetThirdPartyFirewallAssociationStatus API call. */
	static readonly opGetThirdPartyFirewallAssociationStatus: string[] = [
		"fms:GetThirdPartyFirewallAssociationStatus",
	];
	/** IAM actions required for the GetViolationDetails API call. */
	static readonly opGetViolationDetails: string[] = ["fms:GetViolationDetails"];
	/** IAM actions required for the ListAdminAccountsForOrganization API call. */
	static readonly ListAdminAccountsForOrganization: string[] = [
		"fms:ListAdminAccountsForOrganization",
	];
	/** IAM actions required for the ListAdminsManagingAccount API call. */
	static readonly ListAdminsManagingAccount: string[] = [
		"fms:ListAdminsManagingAccount",
	];
	/** IAM actions required for the ListAppsLists API call. */
	static readonly ListAppsLists: string[] = ["fms:ListAppsLists"];
	/** IAM actions required for the ListComplianceStatus API call. */
	static readonly ListComplianceStatus: string[] = ["fms:ListComplianceStatus"];
	/** IAM actions required for the ListDiscoveredResources API call. */
	static readonly ListDiscoveredResources: string[] = [
		"fms:ListDiscoveredResources",
	];
	/** IAM actions required for the ListMemberAccounts API call. */
	static readonly ListMemberAccounts: string[] = ["fms:ListMemberAccounts"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = ["fms:ListPolicies"];
	/** IAM actions required for the ListProtocolsLists API call. */
	static readonly ListProtocolsLists: string[] = ["fms:ListProtocolsLists"];
	/** IAM actions required for the ListResourceSetResources API call. */
	static readonly ListResourceSetResources: string[] = [
		"fms:ListResourceSetResources",
	];
	/** IAM actions required for the ListResourceSets API call. */
	static readonly ListResourceSets: string[] = ["fms:ListResourceSets"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["fms:ListTagsForResource"];
	/** IAM actions required for the ListThirdPartyFirewallFirewallPolicies API call. */
	static readonly ListThirdPartyFirewallFirewallPolicies: string[] = [
		"fms:ListThirdPartyFirewallFirewallPolicies",
	];
	/** IAM actions required for the PutAdminAccount API call. */
	static readonly PutAdminAccount: string[] = ["fms:PutAdminAccount"];
	/** IAM actions required for the PutAppsList API call. */
	static readonly PutAppsList: string[] = [
		"fms:PutAppsList",
		"fms:TagResource",
	];
	/** IAM actions required for the PutNotificationChannel API call. */
	static readonly PutNotificationChannel: string[] = [
		"iam:PassRole",
		"fms:PutNotificationChannel",
	];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PutPolicy: string[] = ["fms:PutPolicy", "fms:TagResource"];
	/** IAM actions required for the PutProtocolsList API call. */
	static readonly PutProtocolsList: string[] = [
		"fms:PutProtocolsList",
		"fms:TagResource",
	];
	/** IAM actions required for the PutResourceSet API call. */
	static readonly PutResourceSet: string[] = [
		"fms:PutResourceSet",
		"fms:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["fms:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["fms:UntagResource"];
}

/**
 * Condition key constants and builders for fms.
 */
export class FmsConditions {
	/** Condition keys applicable to the DeletePolicy action. */
	static readonly DeletePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceSet action. */
	static readonly DeleteResourceSetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAppsList action. */
	static readonly PutAppsListConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutPolicy action. */
	static readonly PutPolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutProtocolsList action. */
	static readonly PutProtocolsListConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutResourceSet action. */
	static readonly PutResourceSetConditionKeys: string[] = [
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
