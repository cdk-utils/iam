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
	static readonly ASSOCIATE_ADMIN_ACCOUNT = "fms:AssociateAdminAccount";
	/** [Write] fms:AssociateThirdPartyFirewall */
	static readonly ASSOCIATE_THIRD_PARTY_FIREWALL =
		"fms:AssociateThirdPartyFirewall";
	/** [Write] fms:BatchAssociateResource */
	static readonly BATCH_ASSOCIATE_RESOURCE = "fms:BatchAssociateResource";
	/** [Write] fms:BatchDisassociateResource */
	static readonly BATCH_DISASSOCIATE_RESOURCE = "fms:BatchDisassociateResource";
	/** [Write] fms:DeleteAppsList */
	static readonly DELETE_APPS_LIST = "fms:DeleteAppsList";
	/** [Write] fms:DeleteNotificationChannel */
	static readonly DELETE_NOTIFICATION_CHANNEL = "fms:DeleteNotificationChannel";
	/** [Write] fms:DeletePolicy */
	static readonly DELETE_POLICY = "fms:DeletePolicy";
	/** [Write] fms:DeleteProtocolsList */
	static readonly DELETE_PROTOCOLS_LIST = "fms:DeleteProtocolsList";
	/** [Write] fms:DeleteResourceSet */
	static readonly DELETE_RESOURCE_SET = "fms:DeleteResourceSet";
	/** [Write] fms:DisassociateAdminAccount */
	static readonly DISASSOCIATE_ADMIN_ACCOUNT = "fms:DisassociateAdminAccount";
	/** [Write] fms:DisassociateThirdPartyFirewall */
	static readonly DISASSOCIATE_THIRD_PARTY_FIREWALL =
		"fms:DisassociateThirdPartyFirewall";
	/** [Read] fms:GetAdminAccount */
	static readonly GET_ADMIN_ACCOUNT = "fms:GetAdminAccount";
	/** [Read] fms:GetAdminScope */
	static readonly GET_ADMIN_SCOPE = "fms:GetAdminScope";
	/** [Read] fms:GetAppsList */
	static readonly GET_APPS_LIST = "fms:GetAppsList";
	/** [Read] fms:GetComplianceDetail */
	static readonly GET_COMPLIANCE_DETAIL = "fms:GetComplianceDetail";
	/** [Read] fms:GetNotificationChannel */
	static readonly GET_NOTIFICATION_CHANNEL = "fms:GetNotificationChannel";
	/** [Read] fms:GetPolicy */
	static readonly GET_POLICY = "fms:GetPolicy";
	/** [Read] fms:GetProtectionStatus */
	static readonly GET_PROTECTION_STATUS = "fms:GetProtectionStatus";
	/** [Read] fms:GetProtocolsList */
	static readonly GET_PROTOCOLS_LIST = "fms:GetProtocolsList";
	/** [Read] fms:GetResourceSet */
	static readonly GET_RESOURCE_SET = "fms:GetResourceSet";
	/** [Read] fms:GetThirdPartyFirewallAssociationStatus */
	static readonly GET_THIRD_PARTY_FIREWALL_ASSOCIATION_STATUS =
		"fms:GetThirdPartyFirewallAssociationStatus";
	/** [Read] fms:GetViolationDetails */
	static readonly GET_VIOLATION_DETAILS = "fms:GetViolationDetails";
	/** [List] fms:ListAdminAccountsForOrganization */
	static readonly LIST_ADMIN_ACCOUNTS_FOR_ORGANIZATION =
		"fms:ListAdminAccountsForOrganization";
	/** [List] fms:ListAdminsManagingAccount */
	static readonly LIST_ADMINS_MANAGING_ACCOUNT =
		"fms:ListAdminsManagingAccount";
	/** [List] fms:ListAppsLists */
	static readonly LIST_APPS_LISTS = "fms:ListAppsLists";
	/** [List] fms:ListComplianceStatus */
	static readonly LIST_COMPLIANCE_STATUS = "fms:ListComplianceStatus";
	/** [List] fms:ListDiscoveredResources */
	static readonly LIST_DISCOVERED_RESOURCES = "fms:ListDiscoveredResources";
	/** [List] fms:ListMemberAccounts */
	static readonly LIST_MEMBER_ACCOUNTS = "fms:ListMemberAccounts";
	/** [List] fms:ListPolicies */
	static readonly LIST_POLICIES = "fms:ListPolicies";
	/** [List] fms:ListProtocolsLists */
	static readonly LIST_PROTOCOLS_LISTS = "fms:ListProtocolsLists";
	/** [List] fms:ListResourceSetResources */
	static readonly LIST_RESOURCE_SET_RESOURCES = "fms:ListResourceSetResources";
	/** [List] fms:ListResourceSets */
	static readonly LIST_RESOURCE_SETS = "fms:ListResourceSets";
	/** [Read] fms:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "fms:ListTagsForResource";
	/** [List] fms:ListThirdPartyFirewallFirewallPolicies */
	static readonly LIST_THIRD_PARTY_FIREWALL_FIREWALL_POLICIES =
		"fms:ListThirdPartyFirewallFirewallPolicies";
	/** [Write] fms:PutAdminAccount */
	static readonly PUT_ADMIN_ACCOUNT = "fms:PutAdminAccount";
	/** [Write] fms:PutAppsList */
	static readonly PUT_APPS_LIST = "fms:PutAppsList";
	/** [Write] fms:PutNotificationChannel */
	static readonly PUT_NOTIFICATION_CHANNEL = "fms:PutNotificationChannel";
	/** [Write] fms:PutPolicy */
	static readonly PUT_POLICY = "fms:PutPolicy";
	/** [Write] fms:PutProtocolsList */
	static readonly PUT_PROTOCOLS_LIST = "fms:PutProtocolsList";
	/** [Write] fms:PutResourceSet */
	static readonly PUT_RESOURCE_SET = "fms:PutResourceSet";
	/** [Tagging] fms:TagResource */
	static readonly TAG_RESOURCE = "fms:TagResource";
	/** [Tagging] fms:UntagResource */
	static readonly UNTAG_RESOURCE = "fms:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FmsActions.GET_ADMIN_ACCOUNT,
		FmsActions.GET_ADMIN_SCOPE,
		FmsActions.GET_APPS_LIST,
		FmsActions.GET_COMPLIANCE_DETAIL,
		FmsActions.GET_NOTIFICATION_CHANNEL,
		FmsActions.GET_POLICY,
		FmsActions.GET_PROTECTION_STATUS,
		FmsActions.GET_PROTOCOLS_LIST,
		FmsActions.GET_RESOURCE_SET,
		FmsActions.GET_THIRD_PARTY_FIREWALL_ASSOCIATION_STATUS,
		FmsActions.GET_VIOLATION_DETAILS,
		FmsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		FmsActions.ASSOCIATE_ADMIN_ACCOUNT,
		FmsActions.ASSOCIATE_THIRD_PARTY_FIREWALL,
		FmsActions.BATCH_ASSOCIATE_RESOURCE,
		FmsActions.BATCH_DISASSOCIATE_RESOURCE,
		FmsActions.DELETE_APPS_LIST,
		FmsActions.DELETE_NOTIFICATION_CHANNEL,
		FmsActions.DELETE_POLICY,
		FmsActions.DELETE_PROTOCOLS_LIST,
		FmsActions.DELETE_RESOURCE_SET,
		FmsActions.DISASSOCIATE_ADMIN_ACCOUNT,
		FmsActions.DISASSOCIATE_THIRD_PARTY_FIREWALL,
		FmsActions.PUT_ADMIN_ACCOUNT,
		FmsActions.PUT_APPS_LIST,
		FmsActions.PUT_NOTIFICATION_CHANNEL,
		FmsActions.PUT_POLICY,
		FmsActions.PUT_PROTOCOLS_LIST,
		FmsActions.PUT_RESOURCE_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		FmsActions.LIST_ADMIN_ACCOUNTS_FOR_ORGANIZATION,
		FmsActions.LIST_ADMINS_MANAGING_ACCOUNT,
		FmsActions.LIST_APPS_LISTS,
		FmsActions.LIST_COMPLIANCE_STATUS,
		FmsActions.LIST_DISCOVERED_RESOURCES,
		FmsActions.LIST_MEMBER_ACCOUNTS,
		FmsActions.LIST_POLICIES,
		FmsActions.LIST_PROTOCOLS_LISTS,
		FmsActions.LIST_RESOURCE_SET_RESOURCES,
		FmsActions.LIST_RESOURCE_SETS,
		FmsActions.LIST_THIRD_PARTY_FIREWALL_FIREWALL_POLICIES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		FmsActions.TAG_RESOURCE,
		FmsActions.UNTAG_RESOURCE,
	];
}

const ApplicationsListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):applications-list/(?<id>[^:/?]+)$",
);
const PolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):policy/(?<id>[^:/?]+)$",
);
const ProtocolsListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):protocols-list/(?<id>[^:/?]+)$",
);
const ResourceSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):fms:(?<region>[^:]*):(?<account>[^:]*):resource-set/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for fms resources.
 */
export class FmsResources {
	/**
	 * Builds an ARN for the applications-list resource.
	 */
	static applicationsList(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationsListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static policy(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static protocolsList(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProtocolsListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static resourceSet(props: {
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseResourceSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		id: string;
	} {
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
	static readonly ASSOCIATE_ADMIN_ACCOUNT: string[] = [
		"fms:AssociateAdminAccount",
	];
	/** IAM actions required for the AssociateThirdPartyFirewall API call. */
	static readonly ASSOCIATE_THIRD_PARTY_FIREWALL: string[] = [
		"fms:AssociateThirdPartyFirewall",
	];
	/** IAM actions required for the BatchAssociateResource API call. */
	static readonly BATCH_ASSOCIATE_RESOURCE: string[] = [
		"fms:BatchAssociateResource",
	];
	/** IAM actions required for the BatchDisassociateResource API call. */
	static readonly BATCH_DISASSOCIATE_RESOURCE: string[] = [
		"fms:BatchDisassociateResource",
	];
	/** IAM actions required for the DeleteAppsList API call. */
	static readonly DELETE_APPS_LIST: string[] = ["fms:DeleteAppsList"];
	/** IAM actions required for the DeleteNotificationChannel API call. */
	static readonly DELETE_NOTIFICATION_CHANNEL: string[] = [
		"fms:DeleteNotificationChannel",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["fms:DeletePolicy"];
	/** IAM actions required for the DeleteProtocolsList API call. */
	static readonly DELETE_PROTOCOLS_LIST: string[] = ["fms:DeleteProtocolsList"];
	/** IAM actions required for the DeleteResourceSet API call. */
	static readonly DELETE_RESOURCE_SET: string[] = ["fms:DeleteResourceSet"];
	/** IAM actions required for the DisassociateAdminAccount API call. */
	static readonly DISASSOCIATE_ADMIN_ACCOUNT: string[] = [
		"fms:DisassociateAdminAccount",
	];
	/** IAM actions required for the DisassociateThirdPartyFirewall API call. */
	static readonly DISASSOCIATE_THIRD_PARTY_FIREWALL: string[] = [
		"fms:DisassociateThirdPartyFirewall",
	];
	/** IAM actions required for the GetAdminAccount API call. */
	static readonly GET_ADMIN_ACCOUNT: string[] = ["fms:GetAdminAccount"];
	/** IAM actions required for the GetAdminScope API call. */
	static readonly GET_ADMIN_SCOPE: string[] = ["fms:GetAdminScope"];
	/** IAM actions required for the GetAppsList API call. */
	static readonly GET_APPS_LIST: string[] = ["fms:GetAppsList"];
	/** IAM actions required for the GetComplianceDetail API call. */
	static readonly GET_COMPLIANCE_DETAIL: string[] = ["fms:GetComplianceDetail"];
	/** IAM actions required for the GetNotificationChannel API call. */
	static readonly GET_NOTIFICATION_CHANNEL: string[] = [
		"fms:GetNotificationChannel",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["fms:GetPolicy"];
	/** IAM actions required for the GetProtectionStatus API call. */
	static readonly GET_PROTECTION_STATUS: string[] = ["fms:GetProtectionStatus"];
	/** IAM actions required for the GetProtocolsList API call. */
	static readonly GET_PROTOCOLS_LIST: string[] = ["fms:GetProtocolsList"];
	/** IAM actions required for the GetResourceSet API call. */
	static readonly GET_RESOURCE_SET: string[] = ["fms:GetResourceSet"];
	/** IAM actions required for the GetThirdPartyFirewallAssociationStatus API call. */
	static readonly GET_THIRD_PARTY_FIREWALL_ASSOCIATION_STATUS: string[] = [
		"fms:GetThirdPartyFirewallAssociationStatus",
	];
	/** IAM actions required for the GetViolationDetails API call. */
	static readonly GET_VIOLATION_DETAILS: string[] = ["fms:GetViolationDetails"];
	/** IAM actions required for the ListAdminAccountsForOrganization API call. */
	static readonly LIST_ADMIN_ACCOUNTS_FOR_ORGANIZATION: string[] = [
		"fms:ListAdminAccountsForOrganization",
	];
	/** IAM actions required for the ListAdminsManagingAccount API call. */
	static readonly LIST_ADMINS_MANAGING_ACCOUNT: string[] = [
		"fms:ListAdminsManagingAccount",
	];
	/** IAM actions required for the ListAppsLists API call. */
	static readonly LIST_APPS_LISTS: string[] = ["fms:ListAppsLists"];
	/** IAM actions required for the ListComplianceStatus API call. */
	static readonly LIST_COMPLIANCE_STATUS: string[] = [
		"fms:ListComplianceStatus",
	];
	/** IAM actions required for the ListDiscoveredResources API call. */
	static readonly LIST_DISCOVERED_RESOURCES: string[] = [
		"fms:ListDiscoveredResources",
	];
	/** IAM actions required for the ListMemberAccounts API call. */
	static readonly LIST_MEMBER_ACCOUNTS: string[] = ["fms:ListMemberAccounts"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = ["fms:ListPolicies"];
	/** IAM actions required for the ListProtocolsLists API call. */
	static readonly LIST_PROTOCOLS_LISTS: string[] = ["fms:ListProtocolsLists"];
	/** IAM actions required for the ListResourceSetResources API call. */
	static readonly LIST_RESOURCE_SET_RESOURCES: string[] = [
		"fms:ListResourceSetResources",
	];
	/** IAM actions required for the ListResourceSets API call. */
	static readonly LIST_RESOURCE_SETS: string[] = ["fms:ListResourceSets"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"fms:ListTagsForResource",
	];
	/** IAM actions required for the ListThirdPartyFirewallFirewallPolicies API call. */
	static readonly LIST_THIRD_PARTY_FIREWALL_FIREWALL_POLICIES: string[] = [
		"fms:ListThirdPartyFirewallFirewallPolicies",
	];
	/** IAM actions required for the PutAdminAccount API call. */
	static readonly PUT_ADMIN_ACCOUNT: string[] = ["fms:PutAdminAccount"];
	/** IAM actions required for the PutAppsList API call. */
	static readonly PUT_APPS_LIST: string[] = [
		"fms:PutAppsList",
		"fms:TagResource",
	];
	/** IAM actions required for the PutNotificationChannel API call. */
	static readonly PUT_NOTIFICATION_CHANNEL: string[] = [
		"iam:PassRole",
		"fms:PutNotificationChannel",
	];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PUT_POLICY: string[] = ["fms:PutPolicy", "fms:TagResource"];
	/** IAM actions required for the PutProtocolsList API call. */
	static readonly PUT_PROTOCOLS_LIST: string[] = [
		"fms:PutProtocolsList",
		"fms:TagResource",
	];
	/** IAM actions required for the PutResourceSet API call. */
	static readonly PUT_RESOURCE_SET: string[] = [
		"fms:PutResourceSet",
		"fms:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["fms:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["fms:UntagResource"];
}

/**
 * Condition key constants and builders for fms.
 */
export class FmsConditions {
	/** Condition keys applicable to the DeletePolicy action. */
	static readonly DELETE_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourceSet action. */
	static readonly DELETE_RESOURCE_SET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAppsList action. */
	static readonly PUT_APPS_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutPolicy action. */
	static readonly PUT_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutProtocolsList action. */
	static readonly PUT_PROTOCOLS_LIST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutResourceSet action. */
	static readonly PUT_RESOURCE_SET_CONDITION_KEYS: string[] = [
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
