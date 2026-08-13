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
	static readonly AcceptResourceShareInvitation =
		"ram:AcceptResourceShareInvitation";
	/** [Write] ram:AssociateResourceShare */
	static readonly AssociateResourceShare = "ram:AssociateResourceShare";
	/** [Write] ram:AssociateResourceSharePermission */
	static readonly AssociateResourceSharePermission =
		"ram:AssociateResourceSharePermission";
	/** [Write] ram:CreatePermission */
	static readonly CreatePermission = "ram:CreatePermission";
	/** [Write] ram:CreatePermissionVersion */
	static readonly CreatePermissionVersion = "ram:CreatePermissionVersion";
	/** [Write] ram:CreateResourceShare */
	static readonly CreateResourceShare = "ram:CreateResourceShare";
	/** [Write] ram:DeletePermission */
	static readonly DeletePermission = "ram:DeletePermission";
	/** [Write] ram:DeletePermissionVersion */
	static readonly DeletePermissionVersion = "ram:DeletePermissionVersion";
	/** [Write] ram:DeleteResourceShare */
	static readonly DeleteResourceShare = "ram:DeleteResourceShare";
	/** [Write] ram:DisassociateResourceShare */
	static readonly DisassociateResourceShare = "ram:DisassociateResourceShare";
	/** [Write] ram:DisassociateResourceSharePermission */
	static readonly DisassociateResourceSharePermission =
		"ram:DisassociateResourceSharePermission";
	/** [PermissionManagement] ram:EnableSharingWithAwsOrganization */
	static readonly EnableSharingWithAwsOrganization =
		"ram:EnableSharingWithAwsOrganization";
	/** [Read] ram:GetPermission */
	static readonly actionGetPermission = "ram:GetPermission";
	/** [Read] ram:GetResourcePolicies */
	static readonly actionGetResourcePolicies = "ram:GetResourcePolicies";
	/** [Read] ram:GetResourceShareAssociations */
	static readonly actionGetResourceShareAssociations =
		"ram:GetResourceShareAssociations";
	/** [Read] ram:GetResourceShareInvitations */
	static readonly actionGetResourceShareInvitations =
		"ram:GetResourceShareInvitations";
	/** [Read] ram:GetResourceShares */
	static readonly actionGetResourceShares = "ram:GetResourceShares";
	/** [Read] ram:ListPendingInvitationResources */
	static readonly ListPendingInvitationResources =
		"ram:ListPendingInvitationResources";
	/** [List] ram:ListPermissionAssociations */
	static readonly ListPermissionAssociations = "ram:ListPermissionAssociations";
	/** [List] ram:ListPermissionVersions */
	static readonly ListPermissionVersions = "ram:ListPermissionVersions";
	/** [List] ram:ListPermissions */
	static readonly ListPermissions = "ram:ListPermissions";
	/** [List] ram:ListPrincipals */
	static readonly ListPrincipals = "ram:ListPrincipals";
	/** [List] ram:ListReplacePermissionAssociationsWork */
	static readonly ListReplacePermissionAssociationsWork =
		"ram:ListReplacePermissionAssociationsWork";
	/** [List] ram:ListResourceSharePermissions */
	static readonly ListResourceSharePermissions =
		"ram:ListResourceSharePermissions";
	/** [List] ram:ListResourceTypes */
	static readonly ListResourceTypes = "ram:ListResourceTypes";
	/** [List] ram:ListResources */
	static readonly ListResources = "ram:ListResources";
	/** [List] ram:ListSourceAssociations */
	static readonly ListSourceAssociations = "ram:ListSourceAssociations";
	/** [Write] ram:PromotePermissionCreatedFromPolicy */
	static readonly PromotePermissionCreatedFromPolicy =
		"ram:PromotePermissionCreatedFromPolicy";
	/** [Write] ram:PromoteResourceShareCreatedFromPolicy */
	static readonly PromoteResourceShareCreatedFromPolicy =
		"ram:PromoteResourceShareCreatedFromPolicy";
	/** [Write] ram:RejectResourceShareInvitation */
	static readonly RejectResourceShareInvitation =
		"ram:RejectResourceShareInvitation";
	/** [Write] ram:ReplacePermissionAssociations */
	static readonly ReplacePermissionAssociations =
		"ram:ReplacePermissionAssociations";
	/** [Write] ram:SetDefaultPermissionVersion */
	static readonly actionSetDefaultPermissionVersion =
		"ram:SetDefaultPermissionVersion";
	/** [Tagging] ram:TagResource */
	static readonly TagResource = "ram:TagResource";
	/** [Tagging] ram:UntagResource */
	static readonly UntagResource = "ram:UntagResource";
	/** [Write] ram:UpdateResourceShare */
	static readonly UpdateResourceShare = "ram:UpdateResourceShare";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RamActions.actionGetPermission,
		RamActions.actionGetResourcePolicies,
		RamActions.actionGetResourceShareAssociations,
		RamActions.actionGetResourceShareInvitations,
		RamActions.actionGetResourceShares,
		RamActions.ListPendingInvitationResources,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RamActions.AcceptResourceShareInvitation,
		RamActions.AssociateResourceShare,
		RamActions.AssociateResourceSharePermission,
		RamActions.CreatePermission,
		RamActions.CreatePermissionVersion,
		RamActions.CreateResourceShare,
		RamActions.DeletePermission,
		RamActions.DeletePermissionVersion,
		RamActions.DeleteResourceShare,
		RamActions.DisassociateResourceShare,
		RamActions.DisassociateResourceSharePermission,
		RamActions.PromotePermissionCreatedFromPolicy,
		RamActions.PromoteResourceShareCreatedFromPolicy,
		RamActions.RejectResourceShareInvitation,
		RamActions.ReplacePermissionAssociations,
		RamActions.actionSetDefaultPermissionVersion,
		RamActions.UpdateResourceShare,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RamActions.ListPermissionAssociations,
		RamActions.ListPermissionVersions,
		RamActions.ListPermissions,
		RamActions.ListPrincipals,
		RamActions.ListReplacePermissionAssociationsWork,
		RamActions.ListResourceSharePermissions,
		RamActions.ListResourceTypes,
		RamActions.ListResources,
		RamActions.ListSourceAssociations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		RamActions.EnableSharingWithAwsOrganization,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RamActions.TagResource,
		RamActions.UntagResource,
	];
}

/**
 * Properties for building a customer-managed-permission ARN.
 */
export interface RamCustomerManagedPermissionArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a customer-managed-permission ARN.
 */
export interface RamCustomerManagedPermissionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a permission ARN.
 */
export interface RamPermissionArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a permission ARN.
 */
export interface RamPermissionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a resource-share ARN.
 */
export interface RamResourceShareArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a resource-share ARN.
 */
export interface RamResourceShareArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

/**
 * Properties for building a resource-share-invitation ARN.
 */
export interface RamResourceShareInvitationArnProps {
	/** The ResourcePath component of the ARN. */
	readonly resourcePath: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a resource-share-invitation ARN.
 */
export interface RamResourceShareInvitationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourcePath component. */
	readonly resourcePath: string;
}

const CustomerManagedPermissionArnRegex =
	/^arn:(?<partition>[^:]+):ram:(?<region>[^:]*):(?<account>[^:]*):permission\/(?<resourcePath>[^:/?]+)$/;
const PermissionArnRegex =
	/^arn:(?<partition>[^:]+):ram::(?<account>[^:]*):permission\/(?<resourcePath>[^:/?]+)$/;
const ResourceShareArnRegex =
	/^arn:(?<partition>[^:]+):ram:(?<region>[^:]*):(?<account>[^:]*):resource-share\/(?<resourcePath>[^:/?]+)$/;
const ResourceShareInvitationArnRegex =
	/^arn:(?<partition>[^:]+):ram:(?<region>[^:]*):(?<account>[^:]*):resource-share-invitation\/(?<resourcePath>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ram resources.
 */
export class RamResources {
	/**
	 * Builds an ARN for the customer-managed-permission resource.
	 */
	static customerManagedPermission(
		props: RamCustomerManagedPermissionArnProps,
	): string {
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
	static parseCustomerManagedPermissionArn(
		arn: string,
	): RamCustomerManagedPermissionArnComponents {
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
	static permission(props: RamPermissionArnProps): string {
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
	static parsePermissionArn(arn: string): RamPermissionArnComponents {
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
	static resourceShare(props: RamResourceShareArnProps): string {
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
	static parseResourceShareArn(arn: string): RamResourceShareArnComponents {
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
	static resourceShareInvitation(
		props: RamResourceShareInvitationArnProps,
	): string {
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
	static parseResourceShareInvitationArn(
		arn: string,
	): RamResourceShareInvitationArnComponents {
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
	static readonly AcceptResourceShareInvitation: string[] = [
		"ram:AcceptResourceShareInvitation",
	];
	/** IAM actions required for the AssociateResourceShare API call. */
	static readonly AssociateResourceShare: string[] = [
		"ram:AssociateResourceShare",
	];
	/** IAM actions required for the AssociateResourceSharePermission API call. */
	static readonly AssociateResourceSharePermission: string[] = [
		"ram:AssociateResourceSharePermission",
	];
	/** IAM actions required for the CreatePermission API call. */
	static readonly CreatePermission: string[] = [
		"ram:CreatePermission",
		"ram:TagResource",
	];
	/** IAM actions required for the CreatePermissionVersion API call. */
	static readonly CreatePermissionVersion: string[] = [
		"ram:CreatePermissionVersion",
	];
	/** IAM actions required for the CreateResourceShare API call. */
	static readonly CreateResourceShare: string[] = [
		"ram:CreateResourceShare",
		"ram:TagResource",
	];
	/** IAM actions required for the DeletePermission API call. */
	static readonly DeletePermission: string[] = ["ram:DeletePermission"];
	/** IAM actions required for the DeletePermissionVersion API call. */
	static readonly DeletePermissionVersion: string[] = [
		"ram:DeletePermissionVersion",
	];
	/** IAM actions required for the DeleteResourceShare API call. */
	static readonly DeleteResourceShare: string[] = ["ram:DeleteResourceShare"];
	/** IAM actions required for the DisassociateResourceShare API call. */
	static readonly DisassociateResourceShare: string[] = [
		"ram:DisassociateResourceShare",
	];
	/** IAM actions required for the DisassociateResourceSharePermission API call. */
	static readonly DisassociateResourceSharePermission: string[] = [
		"ram:DisassociateResourceSharePermission",
	];
	/** IAM actions required for the EnableSharingWithAwsOrganization API call. */
	static readonly EnableSharingWithAwsOrganization: string[] = [
		"ram:EnableSharingWithAwsOrganization",
	];
	/** IAM actions required for the GetPermission API call. */
	static readonly opGetPermission: string[] = ["ram:GetPermission"];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly opGetResourcePolicies: string[] = ["ram:GetResourcePolicies"];
	/** IAM actions required for the GetResourceShareAssociations API call. */
	static readonly opGetResourceShareAssociations: string[] = [
		"ram:GetResourceShareAssociations",
	];
	/** IAM actions required for the GetResourceShareInvitations API call. */
	static readonly opGetResourceShareInvitations: string[] = [
		"ram:GetResourceShareInvitations",
	];
	/** IAM actions required for the GetResourceShares API call. */
	static readonly opGetResourceShares: string[] = ["ram:GetResourceShares"];
	/** IAM actions required for the ListPendingInvitationResources API call. */
	static readonly ListPendingInvitationResources: string[] = [
		"ram:ListPendingInvitationResources",
	];
	/** IAM actions required for the ListPermissionAssociations API call. */
	static readonly ListPermissionAssociations: string[] = [
		"ram:ListPermissionAssociations",
	];
	/** IAM actions required for the ListPermissionVersions API call. */
	static readonly ListPermissionVersions: string[] = [
		"ram:ListPermissionVersions",
	];
	/** IAM actions required for the ListPermissions API call. */
	static readonly ListPermissions: string[] = ["ram:ListPermissions"];
	/** IAM actions required for the ListPrincipals API call. */
	static readonly ListPrincipals: string[] = ["ram:ListPrincipals"];
	/** IAM actions required for the ListReplacePermissionAssociationsWork API call. */
	static readonly ListReplacePermissionAssociationsWork: string[] = [
		"ram:ListReplacePermissionAssociationsWork",
	];
	/** IAM actions required for the ListResourceSharePermissions API call. */
	static readonly ListResourceSharePermissions: string[] = [
		"ram:ListResourceSharePermissions",
	];
	/** IAM actions required for the ListResourceTypes API call. */
	static readonly ListResourceTypes: string[] = ["ram:ListResourceTypes"];
	/** IAM actions required for the ListResources API call. */
	static readonly ListResources: string[] = ["ram:ListResources"];
	/** IAM actions required for the ListSourceAssociations API call. */
	static readonly ListSourceAssociations: string[] = [
		"ram:ListSourceAssociations",
	];
	/** IAM actions required for the PromotePermissionCreatedFromPolicy API call. */
	static readonly PromotePermissionCreatedFromPolicy: string[] = [
		"ram:PromotePermissionCreatedFromPolicy",
	];
	/** IAM actions required for the PromoteResourceShareCreatedFromPolicy API call. */
	static readonly PromoteResourceShareCreatedFromPolicy: string[] = [
		"ram:PromoteResourceShareCreatedFromPolicy",
	];
	/** IAM actions required for the RejectResourceShareInvitation API call. */
	static readonly RejectResourceShareInvitation: string[] = [
		"ram:RejectResourceShareInvitation",
	];
	/** IAM actions required for the ReplacePermissionAssociations API call. */
	static readonly ReplacePermissionAssociations: string[] = [
		"ram:ReplacePermissionAssociations",
	];
	/** IAM actions required for the SetDefaultPermissionVersion API call. */
	static readonly opSetDefaultPermissionVersion: string[] = [
		"ram:SetDefaultPermissionVersion",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ram:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ram:UntagResource"];
	/** IAM actions required for the UpdateResourceShare API call. */
	static readonly UpdateResourceShare: string[] = ["ram:UpdateResourceShare"];
}

/**
 * Condition key constants and builders for ram.
 */
export class RamConditions {
	/** Condition keys applicable to the AcceptResourceShareInvitation action. */
	static readonly AcceptResourceShareInvitationConditionKeys: string[] = [
		"ram:ResourceShareName",
		"ram:ShareOwnerAccountId",
	];
	/** Condition keys applicable to the AssociateResourceShare action. */
	static readonly AssociateResourceShareConditionKeys: string[] = [
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
	static readonly CreatePermissionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the CreatePermissionVersion action. */
	static readonly CreatePermissionVersionConditionKeys: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the CreateResourceShare action. */
	static readonly CreateResourceShareConditionKeys: string[] = [
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
	static readonly DeletePermissionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the DeletePermissionVersion action. */
	static readonly DeletePermissionVersionConditionKeys: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the DeleteResourceShare action. */
	static readonly DeleteResourceShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:ResourceShareName",
		"ram:ResourceTag/${TagKey}",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];
	/** Condition keys applicable to the DisassociateResourceShare action. */
	static readonly DisassociateResourceShareConditionKeys: string[] = [
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
	static readonly actionGetPermissionConditionKeys: string[] = [
		"ram:PermissionArn",
	];
	/** Condition keys applicable to the GetResourceShares action. */
	static readonly actionGetResourceSharesConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListPendingInvitationResources action. */
	static readonly ListPendingInvitationResourcesConditionKeys: string[] = [
		"ram:ResourceShareName",
	];
	/** Condition keys applicable to the ListPermissionAssociations action. */
	static readonly ListPermissionAssociationsConditionKeys: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the ListResourceSharePermissions action. */
	static readonly ListResourceSharePermissionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:ResourceShareName",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];
	/** Condition keys applicable to the PromotePermissionCreatedFromPolicy action. */
	static readonly PromotePermissionCreatedFromPolicyConditionKeys: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the RejectResourceShareInvitation action. */
	static readonly RejectResourceShareInvitationConditionKeys: string[] = [
		"ram:ResourceShareName",
		"ram:ShareOwnerAccountId",
	];
	/** Condition keys applicable to the ReplacePermissionAssociations action. */
	static readonly ReplacePermissionAssociationsConditionKeys: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the SetDefaultPermissionVersion action. */
	static readonly actionSetDefaultPermissionVersionConditionKeys: string[] = [
		"ram:PermissionArn",
		"ram:PermissionResourceType",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateResourceShare action. */
	static readonly UpdateResourceShareConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"ram:AllowsExternalPrincipals",
		"ram:RequestedAllowsExternalPrincipals",
		"ram:ResourceShareName",
		"ram:ResourceTag/${TagKey}",
		"ram:RetainSharingOnAccountLeaveOrganization",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
