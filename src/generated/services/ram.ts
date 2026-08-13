// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ram.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ram service.
 */
export class RamActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ram";

	/** [Write] ram:AcceptResourceShareInvitation */
	static readonly ACCEPT_RESOURCE_SHARE_INVITATION =
		"ram:AcceptResourceShareInvitation";
	/** [Write] ram:AssociateResourceShare */
	static readonly ASSOCIATE_RESOURCE_SHARE = "ram:AssociateResourceShare";
	/** [Write] ram:AssociateResourceSharePermission */
	static readonly ASSOCIATE_RESOURCE_SHARE_PERMISSION =
		"ram:AssociateResourceSharePermission";
	/** [Write] ram:CreatePermission */
	static readonly CREATE_PERMISSION = "ram:CreatePermission";
	/** [Write] ram:CreatePermissionVersion */
	static readonly CREATE_PERMISSION_VERSION = "ram:CreatePermissionVersion";
	/** [Write] ram:CreateResourceShare */
	static readonly CREATE_RESOURCE_SHARE = "ram:CreateResourceShare";
	/** [Write] ram:DeletePermission */
	static readonly DELETE_PERMISSION = "ram:DeletePermission";
	/** [Write] ram:DeletePermissionVersion */
	static readonly DELETE_PERMISSION_VERSION = "ram:DeletePermissionVersion";
	/** [Write] ram:DeleteResourceShare */
	static readonly DELETE_RESOURCE_SHARE = "ram:DeleteResourceShare";
	/** [Write] ram:DisassociateResourceShare */
	static readonly DISASSOCIATE_RESOURCE_SHARE = "ram:DisassociateResourceShare";
	/** [Write] ram:DisassociateResourceSharePermission */
	static readonly DISASSOCIATE_RESOURCE_SHARE_PERMISSION =
		"ram:DisassociateResourceSharePermission";
	/** [PermissionManagement] ram:EnableSharingWithAwsOrganization */
	static readonly ENABLE_SHARING_WITH_AWS_ORGANIZATION =
		"ram:EnableSharingWithAwsOrganization";
	/** [Read] ram:GetPermission */
	static readonly GET_PERMISSION = "ram:GetPermission";
	/** [Read] ram:GetResourcePolicies */
	static readonly GET_RESOURCE_POLICIES = "ram:GetResourcePolicies";
	/** [Read] ram:GetResourceShareAssociations */
	static readonly GET_RESOURCE_SHARE_ASSOCIATIONS =
		"ram:GetResourceShareAssociations";
	/** [Read] ram:GetResourceShareInvitations */
	static readonly GET_RESOURCE_SHARE_INVITATIONS =
		"ram:GetResourceShareInvitations";
	/** [Read] ram:GetResourceShares */
	static readonly GET_RESOURCE_SHARES = "ram:GetResourceShares";
	/** [Read] ram:ListPendingInvitationResources */
	static readonly LIST_PENDING_INVITATION_RESOURCES =
		"ram:ListPendingInvitationResources";
	/** [List] ram:ListPermissionAssociations */
	static readonly LIST_PERMISSION_ASSOCIATIONS =
		"ram:ListPermissionAssociations";
	/** [List] ram:ListPermissionVersions */
	static readonly LIST_PERMISSION_VERSIONS = "ram:ListPermissionVersions";
	/** [List] ram:ListPermissions */
	static readonly LIST_PERMISSIONS = "ram:ListPermissions";
	/** [List] ram:ListPrincipals */
	static readonly LIST_PRINCIPALS = "ram:ListPrincipals";
	/** [List] ram:ListReplacePermissionAssociationsWork */
	static readonly LIST_REPLACE_PERMISSION_ASSOCIATIONS_WORK =
		"ram:ListReplacePermissionAssociationsWork";
	/** [List] ram:ListResourceSharePermissions */
	static readonly LIST_RESOURCE_SHARE_PERMISSIONS =
		"ram:ListResourceSharePermissions";
	/** [List] ram:ListResourceTypes */
	static readonly LIST_RESOURCE_TYPES = "ram:ListResourceTypes";
	/** [List] ram:ListResources */
	static readonly LIST_RESOURCES = "ram:ListResources";
	/** [List] ram:ListSourceAssociations */
	static readonly LIST_SOURCE_ASSOCIATIONS = "ram:ListSourceAssociations";
	/** [Write] ram:PromotePermissionCreatedFromPolicy */
	static readonly PROMOTE_PERMISSION_CREATED_FROM_POLICY =
		"ram:PromotePermissionCreatedFromPolicy";
	/** [Write] ram:PromoteResourceShareCreatedFromPolicy */
	static readonly PROMOTE_RESOURCE_SHARE_CREATED_FROM_POLICY =
		"ram:PromoteResourceShareCreatedFromPolicy";
	/** [Write] ram:RejectResourceShareInvitation */
	static readonly REJECT_RESOURCE_SHARE_INVITATION =
		"ram:RejectResourceShareInvitation";
	/** [Write] ram:ReplacePermissionAssociations */
	static readonly REPLACE_PERMISSION_ASSOCIATIONS =
		"ram:ReplacePermissionAssociations";
	/** [Write] ram:SetDefaultPermissionVersion */
	static readonly SET_DEFAULT_PERMISSION_VERSION =
		"ram:SetDefaultPermissionVersion";
	/** [Tagging] ram:TagResource */
	static readonly TAG_RESOURCE = "ram:TagResource";
	/** [Tagging] ram:UntagResource */
	static readonly UNTAG_RESOURCE = "ram:UntagResource";
	/** [Write] ram:UpdateResourceShare */
	static readonly UPDATE_RESOURCE_SHARE = "ram:UpdateResourceShare";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RamActions.GET_PERMISSION,
		RamActions.GET_RESOURCE_POLICIES,
		RamActions.GET_RESOURCE_SHARE_ASSOCIATIONS,
		RamActions.GET_RESOURCE_SHARE_INVITATIONS,
		RamActions.GET_RESOURCE_SHARES,
		RamActions.LIST_PENDING_INVITATION_RESOURCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RamActions.ACCEPT_RESOURCE_SHARE_INVITATION,
		RamActions.ASSOCIATE_RESOURCE_SHARE,
		RamActions.ASSOCIATE_RESOURCE_SHARE_PERMISSION,
		RamActions.CREATE_PERMISSION,
		RamActions.CREATE_PERMISSION_VERSION,
		RamActions.CREATE_RESOURCE_SHARE,
		RamActions.DELETE_PERMISSION,
		RamActions.DELETE_PERMISSION_VERSION,
		RamActions.DELETE_RESOURCE_SHARE,
		RamActions.DISASSOCIATE_RESOURCE_SHARE,
		RamActions.DISASSOCIATE_RESOURCE_SHARE_PERMISSION,
		RamActions.PROMOTE_PERMISSION_CREATED_FROM_POLICY,
		RamActions.PROMOTE_RESOURCE_SHARE_CREATED_FROM_POLICY,
		RamActions.REJECT_RESOURCE_SHARE_INVITATION,
		RamActions.REPLACE_PERMISSION_ASSOCIATIONS,
		RamActions.SET_DEFAULT_PERMISSION_VERSION,
		RamActions.UPDATE_RESOURCE_SHARE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RamActions.LIST_PERMISSION_ASSOCIATIONS,
		RamActions.LIST_PERMISSION_VERSIONS,
		RamActions.LIST_PERMISSIONS,
		RamActions.LIST_PRINCIPALS,
		RamActions.LIST_REPLACE_PERMISSION_ASSOCIATIONS_WORK,
		RamActions.LIST_RESOURCE_SHARE_PERMISSIONS,
		RamActions.LIST_RESOURCE_TYPES,
		RamActions.LIST_RESOURCES,
		RamActions.LIST_SOURCE_ASSOCIATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		RamActions.ENABLE_SHARING_WITH_AWS_ORGANIZATION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RamActions.TAG_RESOURCE,
		RamActions.UNTAG_RESOURCE,
	];
}

const CustomerManagedPermissionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ram:(?<region>[^:]*):(?<account>[^:]*):permission/(?<resourcePath>[^:/?]+)$",
);
const PermissionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ram::(?<account>[^:]*):permission/(?<resourcePath>[^:/?]+)$",
);
const ResourceShareArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ram:(?<region>[^:]*):(?<account>[^:]*):resource-share/(?<resourcePath>[^:/?]+)$",
);
const ResourceShareInvitationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ram:(?<region>[^:]*):(?<account>[^:]*):resource-share-invitation/(?<resourcePath>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ram resources.
 */
export class RamResources {
	/**
	 * Builds an ARN for the customer-managed-permission resource.
	 */
	static customerManagedPermission(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ram:${props.region ?? "*"}:${props.account ?? "*"}:permission/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the customer-managed-permission resource.
	 */
	static isValidCustomerManagedPermissionArn(arn: string): boolean {
		return CustomerManagedPermissionArnRegex.test(arn);
	}

	/**
	 * Parses a customer-managed-permission ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCustomerManagedPermissionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = CustomerManagedPermissionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid customer-managed-permission ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the permission resource.
	 */
	static permission(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ram::${props.account ?? "*"}:permission/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the permission resource.
	 */
	static isValidPermissionArn(arn: string): boolean {
		return PermissionArnRegex.test(arn);
	}

	/**
	 * Parses a permission ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePermissionArn(arn: string): {
		partition: string;
		account: string;
		resourcePath: string;
	} {
		const match = PermissionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid permission ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the resource-share resource.
	 */
	static resourceShare(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ram:${props.region ?? "*"}:${props.account ?? "*"}:resource-share/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resource-share resource.
	 */
	static isValidResourceShareArn(arn: string): boolean {
		return ResourceShareArnRegex.test(arn);
	}

	/**
	 * Parses a resource-share ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceShareArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = ResourceShareArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resource-share ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}

	/**
	 * Builds an ARN for the resource-share-invitation resource.
	 */
	static resourceShareInvitation(props: {
		/** The ResourcePath component of the ARN. */
		readonly resourcePath: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ram:${props.region ?? "*"}:${props.account ?? "*"}:resource-share-invitation/${props.resourcePath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resource-share-invitation resource.
	 */
	static isValidResourceShareInvitationArn(arn: string): boolean {
		return ResourceShareInvitationArnRegex.test(arn);
	}

	/**
	 * Parses a resource-share-invitation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceShareInvitationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourcePath: string;
	} {
		const match = ResourceShareInvitationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resource-share-invitation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourcePath: match.groups!.resourcePath,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ram.
 */
export class RamOperations {
	/** IAM actions required for the AcceptResourceShareInvitation API call. */
	static readonly ACCEPT_RESOURCE_SHARE_INVITATION: string[] = [
		"ram:AcceptResourceShareInvitation",
	];
	/** IAM actions required for the AssociateResourceShare API call. */
	static readonly ASSOCIATE_RESOURCE_SHARE: string[] = [
		"ram:AssociateResourceShare",
	];
	/** IAM actions required for the AssociateResourceSharePermission API call. */
	static readonly ASSOCIATE_RESOURCE_SHARE_PERMISSION: string[] = [
		"ram:AssociateResourceSharePermission",
	];
	/** IAM actions required for the CreatePermission API call. */
	static readonly CREATE_PERMISSION: string[] = [
		"ram:CreatePermission",
		"ram:TagResource",
	];
	/** IAM actions required for the CreatePermissionVersion API call. */
	static readonly CREATE_PERMISSION_VERSION: string[] = [
		"ram:CreatePermissionVersion",
	];
	/** IAM actions required for the CreateResourceShare API call. */
	static readonly CREATE_RESOURCE_SHARE: string[] = [
		"ram:CreateResourceShare",
		"ram:TagResource",
	];
	/** IAM actions required for the DeletePermission API call. */
	static readonly DELETE_PERMISSION: string[] = ["ram:DeletePermission"];
	/** IAM actions required for the DeletePermissionVersion API call. */
	static readonly DELETE_PERMISSION_VERSION: string[] = [
		"ram:DeletePermissionVersion",
	];
	/** IAM actions required for the DeleteResourceShare API call. */
	static readonly DELETE_RESOURCE_SHARE: string[] = ["ram:DeleteResourceShare"];
	/** IAM actions required for the DisassociateResourceShare API call. */
	static readonly DISASSOCIATE_RESOURCE_SHARE: string[] = [
		"ram:DisassociateResourceShare",
	];
	/** IAM actions required for the DisassociateResourceSharePermission API call. */
	static readonly DISASSOCIATE_RESOURCE_SHARE_PERMISSION: string[] = [
		"ram:DisassociateResourceSharePermission",
	];
	/** IAM actions required for the EnableSharingWithAwsOrganization API call. */
	static readonly ENABLE_SHARING_WITH_AWS_ORGANIZATION: string[] = [
		"ram:EnableSharingWithAwsOrganization",
	];
	/** IAM actions required for the GetPermission API call. */
	static readonly GET_PERMISSION: string[] = ["ram:GetPermission"];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly GET_RESOURCE_POLICIES: string[] = ["ram:GetResourcePolicies"];
	/** IAM actions required for the GetResourceShareAssociations API call. */
	static readonly GET_RESOURCE_SHARE_ASSOCIATIONS: string[] = [
		"ram:GetResourceShareAssociations",
	];
	/** IAM actions required for the GetResourceShareInvitations API call. */
	static readonly GET_RESOURCE_SHARE_INVITATIONS: string[] = [
		"ram:GetResourceShareInvitations",
	];
	/** IAM actions required for the GetResourceShares API call. */
	static readonly GET_RESOURCE_SHARES: string[] = ["ram:GetResourceShares"];
	/** IAM actions required for the ListPendingInvitationResources API call. */
	static readonly LIST_PENDING_INVITATION_RESOURCES: string[] = [
		"ram:ListPendingInvitationResources",
	];
	/** IAM actions required for the ListPermissionAssociations API call. */
	static readonly LIST_PERMISSION_ASSOCIATIONS: string[] = [
		"ram:ListPermissionAssociations",
	];
	/** IAM actions required for the ListPermissionVersions API call. */
	static readonly LIST_PERMISSION_VERSIONS: string[] = [
		"ram:ListPermissionVersions",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly LIST_PERMISSIONS: string[] = ["ram:ListPermissions"];
	/** IAM actions required for the ListPrincipals API call. */
	static readonly LIST_PRINCIPALS: string[] = ["ram:ListPrincipals"];
	/** IAM actions required for the ListReplacePermissionAssociationsWork API call. */
	static readonly LIST_REPLACE_PERMISSION_ASSOCIATIONS_WORK: string[] = [
		"ram:ListReplacePermissionAssociationsWork",
	];
	/** IAM actions required for the ListResourceSharePermissions API call. */
	static readonly LIST_RESOURCE_SHARE_PERMISSIONS: string[] = [
		"ram:ListResourceSharePermissions",
	];
	/** IAM actions required for the ListResourceTypes API call. */
	static readonly LIST_RESOURCE_TYPES: string[] = ["ram:ListResourceTypes"];
	/** IAM actions required for the ListResources API call. */
	static readonly LIST_RESOURCES: string[] = ["ram:ListResources"];
	/** IAM actions required for the ListSourceAssociations API call. */
	static readonly LIST_SOURCE_ASSOCIATIONS: string[] = [
		"ram:ListSourceAssociations",
	];
	/** IAM actions required for the PromotePermissionCreatedFromPolicy API call. */
	static readonly PROMOTE_PERMISSION_CREATED_FROM_POLICY: string[] = [
		"ram:PromotePermissionCreatedFromPolicy",
	];
	/** IAM actions required for the PromoteResourceShareCreatedFromPolicy API call. */
	static readonly PROMOTE_RESOURCE_SHARE_CREATED_FROM_POLICY: string[] = [
		"ram:PromoteResourceShareCreatedFromPolicy",
	];
	/** IAM actions required for the RejectResourceShareInvitation API call. */
	static readonly REJECT_RESOURCE_SHARE_INVITATION: string[] = [
		"ram:RejectResourceShareInvitation",
	];
	/** IAM actions required for the ReplacePermissionAssociations API call. */
	static readonly REPLACE_PERMISSION_ASSOCIATIONS: string[] = [
		"ram:ReplacePermissionAssociations",
	];
	/** IAM actions required for the SetDefaultPermissionVersion API call. */
	static readonly SET_DEFAULT_PERMISSION_VERSION: string[] = [
		"ram:SetDefaultPermissionVersion",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ram:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ram:UntagResource"];
	/** IAM actions required for the UpdateResourceShare API call. */
	static readonly UPDATE_RESOURCE_SHARE: string[] = ["ram:UpdateResourceShare"];
}

/**
 * Condition key constants and builders for ram.
 */
export class RamConditions {
	/** Condition keys applicable to the AcceptResourceShareInvitation action. */
	static readonly ACCEPT_RESOURCE_SHARE_INVITATION_CONDITION_KEYS: string[] = [
		"ram:ResourceShareName",
		"ram:ShareOwnerAccountId",
	];
	/** Condition keys applicable to the AssociateResourceShare action. */
	static readonly ASSOCIATE_RESOURCE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:Principal",
		"ram:RequestedResourceType",
		"ram:ResourceArn",
		"ram:ResourceShareName",
		"ram:ResourceTag/${TagKey}",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];
	/** Condition keys applicable to the CreatePermission action. */
	static readonly CREATE_PERMISSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the CreatePermissionVersion action. */
	static readonly CREATE_PERMISSION_VERSION_CONDITION_KEYS: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the CreateResourceShare action. */
	static readonly CREATE_RESOURCE_SHARE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"ram:AllowsExternalPrincipals",
		"ram:Principal",
		"ram:RequestedAllowsExternalPrincipals",
		"ram:RequestedResourceType",
		"ram:ResourceArn",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];
	/** Condition keys applicable to the DeletePermission action. */
	static readonly DELETE_PERMISSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the DeletePermissionVersion action. */
	static readonly DELETE_PERMISSION_VERSION_CONDITION_KEYS: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the DeleteResourceShare action. */
	static readonly DELETE_RESOURCE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:ResourceShareName",
		"ram:ResourceTag/${TagKey}",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];
	/** Condition keys applicable to the DisassociateResourceShare action. */
	static readonly DISASSOCIATE_RESOURCE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:Principal",
		"ram:RequestedResourceType",
		"ram:ResourceArn",
		"ram:ResourceShareName",
		"ram:ResourceTag/${TagKey}",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];
	/** Condition keys applicable to the GetPermission action. */
	static readonly GET_PERMISSION_CONDITION_KEYS: string[] = [
		"ram:PermissionArn",
	];
	/** Condition keys applicable to the GetResourceShares action. */
	static readonly GET_RESOURCE_SHARES_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListPendingInvitationResources action. */
	static readonly LIST_PENDING_INVITATION_RESOURCES_CONDITION_KEYS: string[] = [
		"ram:ResourceShareName",
	];
	/** Condition keys applicable to the ListPermissionAssociations action. */
	static readonly LIST_PERMISSION_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the ListResourceSharePermissions action. */
	static readonly LIST_RESOURCE_SHARE_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:ResourceShareName",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];
	/** Condition keys applicable to the PromotePermissionCreatedFromPolicy action. */
	static readonly PROMOTE_PERMISSION_CREATED_FROM_POLICY_CONDITION_KEYS: string[] =
		["ram:PermissionArn", "ram:PermissionResourceType"];
	/** Condition keys applicable to the RejectResourceShareInvitation action. */
	static readonly REJECT_RESOURCE_SHARE_INVITATION_CONDITION_KEYS: string[] = [
		"ram:ResourceShareName",
		"ram:ShareOwnerAccountId",
	];
	/** Condition keys applicable to the ReplacePermissionAssociations action. */
	static readonly REPLACE_PERMISSION_ASSOCIATIONS_CONDITION_KEYS: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the SetDefaultPermissionVersion action. */
	static readonly SET_DEFAULT_PERMISSION_VERSION_CONDITION_KEYS: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateResourceShare action. */
	static readonly UPDATE_RESOURCE_SHARE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:RequestedAllowsExternalPrincipals",
		"ram:ResourceShareName",
		"ram:ResourceTag/${TagKey}",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: ram:AllowsExternalPrincipals (Bool) */
	static readonly ALLOWS_EXTERNAL_PRINCIPALS = "ram:AllowsExternalPrincipals";
	/** Condition key: ram:PermissionArn (ARN) */
	static readonly PERMISSION_ARN = "ram:PermissionArn";
	/** Condition key: ram:PermissionResourceType (String) */
	static readonly PERMISSION_RESOURCE_TYPE = "ram:PermissionResourceType";
	/** Condition key: ram:Principal (String) */
	static readonly PRINCIPAL = "ram:Principal";
	/** Condition key: ram:RequestedAllowsExternalPrincipals (Bool) */
	static readonly REQUESTED_ALLOWS_EXTERNAL_PRINCIPALS =
		"ram:RequestedAllowsExternalPrincipals";
	/** Condition key: ram:RequestedResourceType (String) */
	static readonly REQUESTED_RESOURCE_TYPE = "ram:RequestedResourceType";
	/** Condition key: ram:ResourceArn (ARN) */
	static readonly RESOURCE_ARN = "ram:ResourceArn";
	/** Condition key: ram:ResourceShareName (String) */
	static readonly RESOURCE_SHARE_NAME = "ram:ResourceShareName";
	/** Condition key: ram:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "ram:ResourceTag/${TagKey}";
	/** Condition key: ram:RetainSharingOnAccountLeaveOrganization (Bool) */
	static readonly RETAIN_SHARING_ON_ACCOUNT_LEAVE_ORGANIZATION =
		"ram:RetainSharingOnAccountLeaveOrganization";
	/** Condition key: ram:ShareOwnerAccountId (String) */
	static readonly SHARE_OWNER_ACCOUNT_ID = "ram:ShareOwnerAccountId";

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
	 * Generates a condition block for `ram:AllowsExternalPrincipals`.
	 */
	static allowsExternalPrincipals(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "ram:AllowsExternalPrincipals": value } };
	}

	/**
	 * Generates a condition block for `ram:PermissionArn`.
	 */
	static permissionARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ram:PermissionArn": value } };
	}

	/**
	 * Generates a condition block for `ram:PermissionResourceType`.
	 */
	static permissionResourceType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ram:PermissionResourceType": value } };
	}

	/**
	 * Generates a condition block for `ram:Principal`.
	 */
	static principal(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ram:Principal": value } };
	}

	/**
	 * Generates a condition block for `ram:RequestedAllowsExternalPrincipals`.
	 */
	static requestedAllowsExternalPrincipals(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "ram:RequestedAllowsExternalPrincipals": value } };
	}

	/**
	 * Generates a condition block for `ram:RequestedResourceType`.
	 */
	static requestedResourceType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ram:RequestedResourceType": value } };
	}

	/**
	 * Generates a condition block for `ram:ResourceArn`.
	 */
	static resourceARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ram:ResourceArn": value } };
	}

	/**
	 * Generates a condition block for `ram:ResourceShareName`.
	 */
	static resourceShareName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ram:ResourceShareName": value } };
	}

	/**
	 * Generates a condition block for `ram:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ram:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `ram:RetainSharingOnAccountLeaveOrganization`.
	 */
	static retainSharingOnAccountLeaveOrganization(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "ram:RetainSharingOnAccountLeaveOrganization": value } };
	}

	/**
	 * Generates a condition block for `ram:ShareOwnerAccountId`.
	 */
	static shareOwnerAccountId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "ram:ShareOwnerAccountId": value } };
	}
}
