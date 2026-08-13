// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/organizations.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the organizations service.
 */
export class OrganizationsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "organizations";

	/** [Write] organizations:AcceptHandshake */
	static readonly AcceptHandshake = "organizations:AcceptHandshake";
	/** [PermissionManagement] organizations:AttachPolicy */
	static readonly AttachPolicy = "organizations:AttachPolicy";
	/** [Write] organizations:CancelHandshake */
	static readonly CancelHandshake = "organizations:CancelHandshake";
	/** [Write] organizations:CloseAccount */
	static readonly CloseAccount = "organizations:CloseAccount";
	/** [Write] organizations:CreateAccount */
	static readonly CreateAccount = "organizations:CreateAccount";
	/** [Write] organizations:CreateGovCloudAccount */
	static readonly CreateGovCloudAccount = "organizations:CreateGovCloudAccount";
	/** [Write] organizations:CreateOrganization */
	static readonly CreateOrganization = "organizations:CreateOrganization";
	/** [Write] organizations:CreateOrganizationalUnit */
	static readonly CreateOrganizationalUnit =
		"organizations:CreateOrganizationalUnit";
	/** [Write] organizations:CreatePolicy */
	static readonly CreatePolicy = "organizations:CreatePolicy";
	/** [Write] organizations:DeclineHandshake */
	static readonly DeclineHandshake = "organizations:DeclineHandshake";
	/** [Write] organizations:DeleteOrganization */
	static readonly DeleteOrganization = "organizations:DeleteOrganization";
	/** [Write] organizations:DeleteOrganizationalUnit */
	static readonly DeleteOrganizationalUnit =
		"organizations:DeleteOrganizationalUnit";
	/** [Write] organizations:DeletePolicy */
	static readonly DeletePolicy = "organizations:DeletePolicy";
	/** [PermissionManagement] organizations:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "organizations:DeleteResourcePolicy";
	/** [Write] organizations:DeregisterDelegatedAdministrator */
	static readonly DeregisterDelegatedAdministrator =
		"organizations:DeregisterDelegatedAdministrator";
	/** [Read] organizations:DescribeAccount */
	static readonly DescribeAccount = "organizations:DescribeAccount";
	/** [Read] organizations:DescribeCreateAccountStatus */
	static readonly DescribeCreateAccountStatus =
		"organizations:DescribeCreateAccountStatus";
	/** [Read] organizations:DescribeEffectivePolicy */
	static readonly DescribeEffectivePolicy =
		"organizations:DescribeEffectivePolicy";
	/** [Read] organizations:DescribeHandshake */
	static readonly DescribeHandshake = "organizations:DescribeHandshake";
	/** [Read] organizations:DescribeOrganization */
	static readonly DescribeOrganization = "organizations:DescribeOrganization";
	/** [Read] organizations:DescribeOrganizationalUnit */
	static readonly DescribeOrganizationalUnit =
		"organizations:DescribeOrganizationalUnit";
	/** [Read] organizations:DescribePolicy */
	static readonly DescribePolicy = "organizations:DescribePolicy";
	/** [Read] organizations:DescribeResourcePolicy */
	static readonly DescribeResourcePolicy =
		"organizations:DescribeResourcePolicy";
	/** [Read] organizations:DescribeResponsibilityTransfer */
	static readonly DescribeResponsibilityTransfer =
		"organizations:DescribeResponsibilityTransfer";
	/** [PermissionManagement] organizations:DetachPolicy */
	static readonly DetachPolicy = "organizations:DetachPolicy";
	/** [Write] organizations:DisableAWSServiceAccess */
	static readonly DisableAWSServiceAccess =
		"organizations:DisableAWSServiceAccess";
	/** [Write] organizations:DisablePolicyType */
	static readonly DisablePolicyType = "organizations:DisablePolicyType";
	/** [Write] organizations:EnableAWSServiceAccess */
	static readonly EnableAWSServiceAccess =
		"organizations:EnableAWSServiceAccess";
	/** [Write] organizations:EnableAllFeatures */
	static readonly EnableAllFeatures = "organizations:EnableAllFeatures";
	/** [Write] organizations:EnablePolicyType */
	static readonly EnablePolicyType = "organizations:EnablePolicyType";
	/** [Write] organizations:InviteAccountToOrganization */
	static readonly InviteAccountToOrganization =
		"organizations:InviteAccountToOrganization";
	/** [Write] organizations:InviteOrganizationToTransferResponsibility */
	static readonly InviteOrganizationToTransferResponsibility =
		"organizations:InviteOrganizationToTransferResponsibility";
	/** [Write] organizations:LeaveOrganization */
	static readonly LeaveOrganization = "organizations:LeaveOrganization";
	/** [List] organizations:ListAWSServiceAccessForOrganization */
	static readonly ListAWSServiceAccessForOrganization =
		"organizations:ListAWSServiceAccessForOrganization";
	/** [List] organizations:ListAccounts */
	static readonly ListAccounts = "organizations:ListAccounts";
	/** [List] organizations:ListAccountsForParent */
	static readonly ListAccountsForParent = "organizations:ListAccountsForParent";
	/** [List] organizations:ListAccountsWithInvalidEffectivePolicy */
	static readonly ListAccountsWithInvalidEffectivePolicy =
		"organizations:ListAccountsWithInvalidEffectivePolicy";
	/** [List] organizations:ListChildren */
	static readonly ListChildren = "organizations:ListChildren";
	/** [List] organizations:ListCreateAccountStatus */
	static readonly ListCreateAccountStatus =
		"organizations:ListCreateAccountStatus";
	/** [List] organizations:ListDelegatedAdministrators */
	static readonly ListDelegatedAdministrators =
		"organizations:ListDelegatedAdministrators";
	/** [List] organizations:ListDelegatedServicesForAccount */
	static readonly ListDelegatedServicesForAccount =
		"organizations:ListDelegatedServicesForAccount";
	/** [List] organizations:ListEffectivePolicyValidationErrors */
	static readonly ListEffectivePolicyValidationErrors =
		"organizations:ListEffectivePolicyValidationErrors";
	/** [List] organizations:ListHandshakesForAccount */
	static readonly ListHandshakesForAccount =
		"organizations:ListHandshakesForAccount";
	/** [List] organizations:ListHandshakesForOrganization */
	static readonly ListHandshakesForOrganization =
		"organizations:ListHandshakesForOrganization";
	/** [List] organizations:ListInboundResponsibilityTransfers */
	static readonly ListInboundResponsibilityTransfers =
		"organizations:ListInboundResponsibilityTransfers";
	/** [List] organizations:ListOrganizationalUnitsForParent */
	static readonly ListOrganizationalUnitsForParent =
		"organizations:ListOrganizationalUnitsForParent";
	/** [List] organizations:ListOutboundResponsibilityTransfers */
	static readonly ListOutboundResponsibilityTransfers =
		"organizations:ListOutboundResponsibilityTransfers";
	/** [List] organizations:ListParents */
	static readonly ListParents = "organizations:ListParents";
	/** [List] organizations:ListPolicies */
	static readonly ListPolicies = "organizations:ListPolicies";
	/** [List] organizations:ListPoliciesForTarget */
	static readonly ListPoliciesForTarget = "organizations:ListPoliciesForTarget";
	/** [List] organizations:ListRoots */
	static readonly ListRoots = "organizations:ListRoots";
	/** [List] organizations:ListTagsForResource */
	static readonly ListTagsForResource = "organizations:ListTagsForResource";
	/** [List] organizations:ListTargetsForPolicy */
	static readonly ListTargetsForPolicy = "organizations:ListTargetsForPolicy";
	/** [Write] organizations:MoveAccount */
	static readonly MoveAccount = "organizations:MoveAccount";
	/** [PermissionManagement] organizations:PutResourcePolicy */
	static readonly PutResourcePolicy = "organizations:PutResourcePolicy";
	/** [Write] organizations:RegisterDelegatedAdministrator */
	static readonly RegisterDelegatedAdministrator =
		"organizations:RegisterDelegatedAdministrator";
	/** [Write] organizations:RemoveAccountFromOrganization */
	static readonly RemoveAccountFromOrganization =
		"organizations:RemoveAccountFromOrganization";
	/** [Tagging] organizations:TagResource */
	static readonly TagResource = "organizations:TagResource";
	/** [Write] organizations:TerminateResponsibilityTransfer */
	static readonly TerminateResponsibilityTransfer =
		"organizations:TerminateResponsibilityTransfer";
	/** [Tagging] organizations:UntagResource */
	static readonly UntagResource = "organizations:UntagResource";
	/** [Write] organizations:UpdateOrganizationalUnit */
	static readonly UpdateOrganizationalUnit =
		"organizations:UpdateOrganizationalUnit";
	/** [PermissionManagement] organizations:UpdatePolicy */
	static readonly UpdatePolicy = "organizations:UpdatePolicy";
	/** [Write] organizations:UpdateResponsibilityTransfer */
	static readonly UpdateResponsibilityTransfer =
		"organizations:UpdateResponsibilityTransfer";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OrganizationsActions.DescribeAccount,
		OrganizationsActions.DescribeCreateAccountStatus,
		OrganizationsActions.DescribeEffectivePolicy,
		OrganizationsActions.DescribeHandshake,
		OrganizationsActions.DescribeOrganization,
		OrganizationsActions.DescribeOrganizationalUnit,
		OrganizationsActions.DescribePolicy,
		OrganizationsActions.DescribeResourcePolicy,
		OrganizationsActions.DescribeResponsibilityTransfer,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OrganizationsActions.AcceptHandshake,
		OrganizationsActions.CancelHandshake,
		OrganizationsActions.CloseAccount,
		OrganizationsActions.CreateAccount,
		OrganizationsActions.CreateGovCloudAccount,
		OrganizationsActions.CreateOrganization,
		OrganizationsActions.CreateOrganizationalUnit,
		OrganizationsActions.CreatePolicy,
		OrganizationsActions.DeclineHandshake,
		OrganizationsActions.DeleteOrganization,
		OrganizationsActions.DeleteOrganizationalUnit,
		OrganizationsActions.DeletePolicy,
		OrganizationsActions.DeregisterDelegatedAdministrator,
		OrganizationsActions.DisableAWSServiceAccess,
		OrganizationsActions.DisablePolicyType,
		OrganizationsActions.EnableAWSServiceAccess,
		OrganizationsActions.EnableAllFeatures,
		OrganizationsActions.EnablePolicyType,
		OrganizationsActions.InviteAccountToOrganization,
		OrganizationsActions.InviteOrganizationToTransferResponsibility,
		OrganizationsActions.LeaveOrganization,
		OrganizationsActions.MoveAccount,
		OrganizationsActions.RegisterDelegatedAdministrator,
		OrganizationsActions.RemoveAccountFromOrganization,
		OrganizationsActions.TerminateResponsibilityTransfer,
		OrganizationsActions.UpdateOrganizationalUnit,
		OrganizationsActions.UpdateResponsibilityTransfer,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OrganizationsActions.ListAWSServiceAccessForOrganization,
		OrganizationsActions.ListAccounts,
		OrganizationsActions.ListAccountsForParent,
		OrganizationsActions.ListAccountsWithInvalidEffectivePolicy,
		OrganizationsActions.ListChildren,
		OrganizationsActions.ListCreateAccountStatus,
		OrganizationsActions.ListDelegatedAdministrators,
		OrganizationsActions.ListDelegatedServicesForAccount,
		OrganizationsActions.ListEffectivePolicyValidationErrors,
		OrganizationsActions.ListHandshakesForAccount,
		OrganizationsActions.ListHandshakesForOrganization,
		OrganizationsActions.ListInboundResponsibilityTransfers,
		OrganizationsActions.ListOrganizationalUnitsForParent,
		OrganizationsActions.ListOutboundResponsibilityTransfers,
		OrganizationsActions.ListParents,
		OrganizationsActions.ListPolicies,
		OrganizationsActions.ListPoliciesForTarget,
		OrganizationsActions.ListRoots,
		OrganizationsActions.ListTagsForResource,
		OrganizationsActions.ListTargetsForPolicy,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		OrganizationsActions.AttachPolicy,
		OrganizationsActions.DeleteResourcePolicy,
		OrganizationsActions.DetachPolicy,
		OrganizationsActions.PutResourcePolicy,
		OrganizationsActions.UpdatePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OrganizationsActions.TagResource,
		OrganizationsActions.UntagResource,
	];
}

/**
 * Properties for building a account ARN.
 */
export interface OrganizationsAccountArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The AccountId component of the ARN. */
	readonly accountId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a account ARN.
 */
export interface OrganizationsAccountArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The AccountId component. */
	readonly accountId: string;
}

/**
 * Properties for building a awspolicy ARN.
 */
export interface OrganizationsAwspolicyArnProps {
	/** The PolicyType component of the ARN. */
	readonly policyType: string;
	/** The PolicyId component of the ARN. */
	readonly policyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a awspolicy ARN.
 */
export interface OrganizationsAwspolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PolicyType component. */
	readonly policyType: string;
	/** The PolicyId component. */
	readonly policyId: string;
}

/**
 * Properties for building a handshake ARN.
 */
export interface OrganizationsHandshakeArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The HandshakeType component of the ARN. */
	readonly handshakeType: string;
	/** The HandshakeId component of the ARN. */
	readonly handshakeId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a handshake ARN.
 */
export interface OrganizationsHandshakeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The HandshakeType component. */
	readonly handshakeType: string;
	/** The HandshakeId component. */
	readonly handshakeId: string;
}

/**
 * Properties for building a organization ARN.
 */
export interface OrganizationsOrganizationArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a organization ARN.
 */
export interface OrganizationsOrganizationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
}

/**
 * Properties for building a organizationalunit ARN.
 */
export interface OrganizationsOrganizationalunitArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The OrganizationalUnitId component of the ARN. */
	readonly organizationalUnitId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a organizationalunit ARN.
 */
export interface OrganizationsOrganizationalunitArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The OrganizationalUnitId component. */
	readonly organizationalUnitId: string;
}

/**
 * Properties for building a policy ARN.
 */
export interface OrganizationsPolicyArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The PolicyType component of the ARN. */
	readonly policyType: string;
	/** The PolicyId component of the ARN. */
	readonly policyId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a policy ARN.
 */
export interface OrganizationsPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The PolicyType component. */
	readonly policyType: string;
	/** The PolicyId component. */
	readonly policyId: string;
}

/**
 * Properties for building a resourcepolicy ARN.
 */
export interface OrganizationsResourcepolicyArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The ResourcePolicyId component of the ARN. */
	readonly resourcePolicyId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a resourcepolicy ARN.
 */
export interface OrganizationsResourcepolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The ResourcePolicyId component. */
	readonly resourcePolicyId: string;
}

/**
 * Properties for building a responsibilitytransfer ARN.
 */
export interface OrganizationsResponsibilitytransferArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The TransferType component of the ARN. */
	readonly transferType: string;
	/** The TransferDirection component of the ARN. */
	readonly transferDirection: string;
	/** The ResponsibilityTransferId component of the ARN. */
	readonly responsibilityTransferId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a responsibilitytransfer ARN.
 */
export interface OrganizationsResponsibilitytransferArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The TransferType component. */
	readonly transferType: string;
	/** The TransferDirection component. */
	readonly transferDirection: string;
	/** The ResponsibilityTransferId component. */
	readonly responsibilityTransferId: string;
}

/**
 * Properties for building a root ARN.
 */
export interface OrganizationsRootArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The RootId component of the ARN. */
	readonly rootId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a root ARN.
 */
export interface OrganizationsRootArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The RootId component. */
	readonly rootId: string;
}

const AccountArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):account\/o-(?<organizationId>[^:/?]+)\/(?<accountId>[^:/?]+)$/;
const AwspolicyArnRegex =
	/^arn:(?<partition>[^:]+):organizations::aws:policy\/(?<policyType>[^:/?]+)\/p-(?<policyId>[^:/?]+)$/;
const HandshakeArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):handshake\/o-(?<organizationId>[^:/?]+)\/(?<handshakeType>[^:/?]+)\/h-(?<handshakeId>[^:/?]+)$/;
const OrganizationArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):organization\/o-(?<organizationId>[^:/?]+)$/;
const OrganizationalunitArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):ou\/o-(?<organizationId>[^:/?]+)\/ou-(?<organizationalUnitId>[^:/?]+)$/;
const PolicyArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):policy\/o-(?<organizationId>[^:/?]+)\/(?<policyType>[^:/?]+)\/p-(?<policyId>[^:/?]+)$/;
const ResourcepolicyArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):resourcepolicy\/o-(?<organizationId>[^:/?]+)\/rp-(?<resourcePolicyId>[^:/?]+)$/;
const ResponsibilitytransferArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):transfer\/o-(?<organizationId>[^:/?]+)\/(?<transferType>[^:/?]+)\/(?<transferDirection>[^:/?]+)\/rt-(?<responsibilityTransferId>[^:/?]+)$/;
const RootArnRegex =
	/^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):root\/o-(?<organizationId>[^:/?]+)\/r-(?<rootId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for organizations resources.
 */
export class OrganizationsResources {
	/**
	 * Builds an ARN for the account resource.
	 */
	static account(props: OrganizationsAccountArnProps): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:account/o-${props.organizationId}/${props.accountId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the account resource.
	 */
	static isValidAccountArn(arn: string): boolean {
		return AccountArnRegex.test(arn);
	}

	/**
	 * Parses a account ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccountArn(arn: string): OrganizationsAccountArnComponents {
		const match = AccountArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid account ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			accountId: match.groups!.accountId,
		};
	}

	/**
	 * Builds an ARN for the awspolicy resource.
	 */
	static awspolicy(props: OrganizationsAwspolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:organizations::aws:policy/${props.policyType}/p-${props.policyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the awspolicy resource.
	 */
	static isValidAwspolicyArn(arn: string): boolean {
		return AwspolicyArnRegex.test(arn);
	}

	/**
	 * Parses a awspolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAwspolicyArn(arn: string): OrganizationsAwspolicyArnComponents {
		const match = AwspolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid awspolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			policyType: match.groups!.policyType,
			policyId: match.groups!.policyId,
		};
	}

	/**
	 * Builds an ARN for the handshake resource.
	 */
	static handshake(props: OrganizationsHandshakeArnProps): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:handshake/o-${props.organizationId}/${props.handshakeType}/h-${props.handshakeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the handshake resource.
	 */
	static isValidHandshakeArn(arn: string): boolean {
		return HandshakeArnRegex.test(arn);
	}

	/**
	 * Parses a handshake ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHandshakeArn(arn: string): OrganizationsHandshakeArnComponents {
		const match = HandshakeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid handshake ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			handshakeType: match.groups!.handshakeType,
			handshakeId: match.groups!.handshakeId,
		};
	}

	/**
	 * Builds an ARN for the organization resource.
	 */
	static organization(props: OrganizationsOrganizationArnProps): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:organization/o-${props.organizationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organization resource.
	 */
	static isValidOrganizationArn(arn: string): boolean {
		return OrganizationArnRegex.test(arn);
	}

	/**
	 * Parses a organization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationArn(
		arn: string,
	): OrganizationsOrganizationArnComponents {
		const match = OrganizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
		};
	}

	/**
	 * Builds an ARN for the organizationalunit resource.
	 */
	static organizationalunit(
		props: OrganizationsOrganizationalunitArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:ou/o-${props.organizationId}/ou-${props.organizationalUnitId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organizationalunit resource.
	 */
	static isValidOrganizationalunitArn(arn: string): boolean {
		return OrganizationalunitArnRegex.test(arn);
	}

	/**
	 * Parses a organizationalunit ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationalunitArn(
		arn: string,
	): OrganizationsOrganizationalunitArnComponents {
		const match = OrganizationalunitArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organizationalunit ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			organizationalUnitId: match.groups!.organizationalUnitId,
		};
	}

	/**
	 * Builds an ARN for the policy resource.
	 */
	static policy(props: OrganizationsPolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:policy/o-${props.organizationId}/${props.policyType}/p-${props.policyId}`;
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
	static parsePolicyArn(arn: string): OrganizationsPolicyArnComponents {
		const match = PolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			policyType: match.groups!.policyType,
			policyId: match.groups!.policyId,
		};
	}

	/**
	 * Builds an ARN for the resourcepolicy resource.
	 */
	static resourcepolicy(props: OrganizationsResourcepolicyArnProps): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:resourcepolicy/o-${props.organizationId}/rp-${props.resourcePolicyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resourcepolicy resource.
	 */
	static isValidResourcepolicyArn(arn: string): boolean {
		return ResourcepolicyArnRegex.test(arn);
	}

	/**
	 * Parses a resourcepolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourcepolicyArn(
		arn: string,
	): OrganizationsResourcepolicyArnComponents {
		const match = ResourcepolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resourcepolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			resourcePolicyId: match.groups!.resourcePolicyId,
		};
	}

	/**
	 * Builds an ARN for the responsibilitytransfer resource.
	 */
	static responsibilitytransfer(
		props: OrganizationsResponsibilitytransferArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:transfer/o-${props.organizationId}/${props.transferType}/${props.transferDirection}/rt-${props.responsibilityTransferId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the responsibilitytransfer resource.
	 */
	static isValidResponsibilitytransferArn(arn: string): boolean {
		return ResponsibilitytransferArnRegex.test(arn);
	}

	/**
	 * Parses a responsibilitytransfer ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResponsibilitytransferArn(
		arn: string,
	): OrganizationsResponsibilitytransferArnComponents {
		const match = ResponsibilitytransferArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid responsibilitytransfer ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			transferType: match.groups!.transferType,
			transferDirection: match.groups!.transferDirection,
			responsibilityTransferId: match.groups!.responsibilityTransferId,
		};
	}

	/**
	 * Builds an ARN for the root resource.
	 */
	static root(props: OrganizationsRootArnProps): string {
		return `arn:${props.partition ?? "aws"}:organizations::${props.account ?? "*"}:root/o-${props.organizationId}/r-${props.rootId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the root resource.
	 */
	static isValidRootArn(arn: string): boolean {
		return RootArnRegex.test(arn);
	}

	/**
	 * Parses a root ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRootArn(arn: string): OrganizationsRootArnComponents {
		const match = RootArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid root ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			rootId: match.groups!.rootId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for organizations.
 */
export class OrganizationsOperations {
	/** IAM actions required for the AcceptHandshake API call. */
	static readonly AcceptHandshake: string[] = [
		"organizations:AcceptHandshake",
		"organizations:LeaveOrganization",
	];
	/** IAM actions required for the AttachPolicy API call. */
	static readonly AttachPolicy: string[] = ["organizations:AttachPolicy"];
	/** IAM actions required for the CancelHandshake API call. */
	static readonly CancelHandshake: string[] = ["organizations:CancelHandshake"];
	/** IAM actions required for the CloseAccount API call. */
	static readonly CloseAccount: string[] = ["organizations:CloseAccount"];
	/** IAM actions required for the CreateAccount API call. */
	static readonly CreateAccount: string[] = [
		"organizations:CreateAccount",
		"organizations:TagResource",
	];
	/** IAM actions required for the CreateGovCloudAccount API call. */
	static readonly CreateGovCloudAccount: string[] = [
		"organizations:CreateGovCloudAccount",
		"organizations:TagResource",
	];
	/** IAM actions required for the CreateOrganization API call. */
	static readonly CreateOrganization: string[] = [
		"organizations:CreateOrganization",
	];
	/** IAM actions required for the CreateOrganizationalUnit API call. */
	static readonly CreateOrganizationalUnit: string[] = [
		"organizations:CreateOrganizationalUnit",
		"organizations:TagResource",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CreatePolicy: string[] = [
		"organizations:CreatePolicy",
		"organizations:TagResource",
	];
	/** IAM actions required for the DeclineHandshake API call. */
	static readonly DeclineHandshake: string[] = [
		"organizations:DeclineHandshake",
	];
	/** IAM actions required for the DeleteOrganization API call. */
	static readonly DeleteOrganization: string[] = [
		"organizations:DeleteOrganization",
	];
	/** IAM actions required for the DeleteOrganizationalUnit API call. */
	static readonly DeleteOrganizationalUnit: string[] = [
		"organizations:DeleteOrganizationalUnit",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DeletePolicy: string[] = ["organizations:DeletePolicy"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"organizations:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeregisterDelegatedAdministrator API call. */
	static readonly DeregisterDelegatedAdministrator: string[] = [
		"organizations:DeregisterDelegatedAdministrator",
	];
	/** IAM actions required for the DescribeAccount API call. */
	static readonly DescribeAccount: string[] = ["organizations:DescribeAccount"];
	/** IAM actions required for the DescribeCreateAccountStatus API call. */
	static readonly DescribeCreateAccountStatus: string[] = [
		"organizations:DescribeCreateAccountStatus",
	];
	/** IAM actions required for the DescribeEffectivePolicy API call. */
	static readonly DescribeEffectivePolicy: string[] = [
		"organizations:DescribeEffectivePolicy",
	];
	/** IAM actions required for the DescribeHandshake API call. */
	static readonly DescribeHandshake: string[] = [
		"organizations:DescribeHandshake",
	];
	/** IAM actions required for the DescribeOrganization API call. */
	static readonly DescribeOrganization: string[] = [
		"organizations:DescribeOrganization",
	];
	/** IAM actions required for the DescribeOrganizationalUnit API call. */
	static readonly DescribeOrganizationalUnit: string[] = [
		"organizations:DescribeOrganizationalUnit",
	];
	/** IAM actions required for the DescribePolicy API call. */
	static readonly DescribePolicy: string[] = ["organizations:DescribePolicy"];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DescribeResourcePolicy: string[] = [
		"organizations:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeResponsibilityTransfer API call. */
	static readonly DescribeResponsibilityTransfer: string[] = [
		"organizations:DescribeResponsibilityTransfer",
	];
	/** IAM actions required for the DetachPolicy API call. */
	static readonly DetachPolicy: string[] = ["organizations:DetachPolicy"];
	/** IAM actions required for the DisableAWSServiceAccess API call. */
	static readonly DisableAWSServiceAccess: string[] = [
		"organizations:DisableAWSServiceAccess",
	];
	/** IAM actions required for the DisablePolicyType API call. */
	static readonly DisablePolicyType: string[] = [
		"organizations:DisablePolicyType",
	];
	/** IAM actions required for the EnableAWSServiceAccess API call. */
	static readonly EnableAWSServiceAccess: string[] = [
		"organizations:EnableAWSServiceAccess",
	];
	/** IAM actions required for the EnableAllFeatures API call. */
	static readonly EnableAllFeatures: string[] = [
		"organizations:EnableAllFeatures",
	];
	/** IAM actions required for the EnablePolicyType API call. */
	static readonly EnablePolicyType: string[] = [
		"organizations:EnablePolicyType",
	];
	/** IAM actions required for the InviteAccountToOrganization API call. */
	static readonly InviteAccountToOrganization: string[] = [
		"organizations:InviteAccountToOrganization",
		"organizations:TagResource",
	];
	/** IAM actions required for the InviteOrganizationToTransferResponsibility API call. */
	static readonly InviteOrganizationToTransferResponsibility: string[] = [
		"organizations:InviteOrganizationToTransferResponsibility",
		"organizations:TagResource",
	];
	/** IAM actions required for the LeaveOrganization API call. */
	static readonly LeaveOrganization: string[] = [
		"organizations:LeaveOrganization",
	];
	/** IAM actions required for the ListAWSServiceAccessForOrganization API call. */
	static readonly ListAWSServiceAccessForOrganization: string[] = [
		"organizations:ListAWSServiceAccessForOrganization",
	];
	/** IAM actions required for the ListAccounts API call. */
	static readonly ListAccounts: string[] = ["organizations:ListAccounts"];
	/** IAM actions required for the ListAccountsForParent API call. */
	static readonly ListAccountsForParent: string[] = [
		"organizations:ListAccountsForParent",
	];
	/** IAM actions required for the ListAccountsWithInvalidEffectivePolicy API call. */
	static readonly ListAccountsWithInvalidEffectivePolicy: string[] = [
		"organizations:ListAccountsWithInvalidEffectivePolicy",
	];
	/** IAM actions required for the ListChildren API call. */
	static readonly ListChildren: string[] = ["organizations:ListChildren"];
	/** IAM actions required for the ListCreateAccountStatus API call. */
	static readonly ListCreateAccountStatus: string[] = [
		"organizations:ListCreateAccountStatus",
	];
	/** IAM actions required for the ListDelegatedAdministrators API call. */
	static readonly ListDelegatedAdministrators: string[] = [
		"organizations:ListDelegatedAdministrators",
	];
	/** IAM actions required for the ListDelegatedServicesForAccount API call. */
	static readonly ListDelegatedServicesForAccount: string[] = [
		"organizations:ListDelegatedServicesForAccount",
	];
	/** IAM actions required for the ListEffectivePolicyValidationErrors API call. */
	static readonly ListEffectivePolicyValidationErrors: string[] = [
		"organizations:ListEffectivePolicyValidationErrors",
	];
	/** IAM actions required for the ListHandshakesForAccount API call. */
	static readonly ListHandshakesForAccount: string[] = [
		"organizations:ListHandshakesForAccount",
	];
	/** IAM actions required for the ListHandshakesForOrganization API call. */
	static readonly ListHandshakesForOrganization: string[] = [
		"organizations:ListHandshakesForOrganization",
	];
	/** IAM actions required for the ListInboundResponsibilityTransfers API call. */
	static readonly ListInboundResponsibilityTransfers: string[] = [
		"organizations:ListInboundResponsibilityTransfers",
	];
	/** IAM actions required for the ListOrganizationalUnitsForParent API call. */
	static readonly ListOrganizationalUnitsForParent: string[] = [
		"organizations:ListOrganizationalUnitsForParent",
	];
	/** IAM actions required for the ListOutboundResponsibilityTransfers API call. */
	static readonly ListOutboundResponsibilityTransfers: string[] = [
		"organizations:ListOutboundResponsibilityTransfers",
	];
	/** IAM actions required for the ListParents API call. */
	static readonly ListParents: string[] = ["organizations:ListParents"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = ["organizations:ListPolicies"];
	/** IAM actions required for the ListPoliciesForTarget API call. */
	static readonly ListPoliciesForTarget: string[] = [
		"organizations:ListPoliciesForTarget",
	];
	/** IAM actions required for the ListRoots API call. */
	static readonly ListRoots: string[] = ["organizations:ListRoots"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"organizations:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetsForPolicy API call. */
	static readonly ListTargetsForPolicy: string[] = [
		"organizations:ListTargetsForPolicy",
	];
	/** IAM actions required for the MoveAccount API call. */
	static readonly MoveAccount: string[] = ["organizations:MoveAccount"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"organizations:PutResourcePolicy",
		"organizations:TagResource",
	];
	/** IAM actions required for the RegisterDelegatedAdministrator API call. */
	static readonly RegisterDelegatedAdministrator: string[] = [
		"organizations:RegisterDelegatedAdministrator",
	];
	/** IAM actions required for the RemoveAccountFromOrganization API call. */
	static readonly RemoveAccountFromOrganization: string[] = [
		"organizations:RemoveAccountFromOrganization",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["organizations:TagResource"];
	/** IAM actions required for the TerminateResponsibilityTransfer API call. */
	static readonly TerminateResponsibilityTransfer: string[] = [
		"organizations:TerminateResponsibilityTransfer",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["organizations:UntagResource"];
	/** IAM actions required for the UpdateOrganizationalUnit API call. */
	static readonly UpdateOrganizationalUnit: string[] = [
		"organizations:UpdateOrganizationalUnit",
	];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UpdatePolicy: string[] = ["organizations:UpdatePolicy"];
	/** IAM actions required for the UpdateResponsibilityTransfer API call. */
	static readonly UpdateResponsibilityTransfer: string[] = [
		"organizations:UpdateResponsibilityTransfer",
	];
}

/**
 * Condition key constants and builders for organizations.
 */
export class OrganizationsConditions {
	/** Condition keys applicable to the AttachPolicy action. */
	static readonly AttachPolicyConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the CreateAccount action. */
	static readonly CreateAccountConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGovCloudAccount action. */
	static readonly CreateGovCloudAccountConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOrganizationalUnit action. */
	static readonly CreateOrganizationalUnitConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicy action. */
	static readonly CreatePolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DeletePolicy action. */
	static readonly DeletePolicyConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DeregisterDelegatedAdministrator action. */
	static readonly DeregisterDelegatedAdministratorConditionKeys: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the DescribeEffectivePolicy action. */
	static readonly DescribeEffectivePolicyConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DescribePolicy action. */
	static readonly DescribePolicyConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DescribeResponsibilityTransfer action. */
	static readonly DescribeResponsibilityTransferConditionKeys: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];
	/** Condition keys applicable to the DetachPolicy action. */
	static readonly DetachPolicyConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DisableAWSServiceAccess action. */
	static readonly DisableAWSServiceAccessConditionKeys: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the DisablePolicyType action. */
	static readonly DisablePolicyTypeConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the EnableAWSServiceAccess action. */
	static readonly EnableAWSServiceAccessConditionKeys: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the EnablePolicyType action. */
	static readonly EnablePolicyTypeConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the InviteAccountToOrganization action. */
	static readonly InviteAccountToOrganizationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InviteOrganizationToTransferResponsibility action. */
	static readonly InviteOrganizationToTransferResponsibilityConditionKeys: string[] =
		["organizations:TransferDirection", "organizations:TransferType"];
	/** Condition keys applicable to the ListAccountsWithInvalidEffectivePolicy action. */
	static readonly ListAccountsWithInvalidEffectivePolicyConditionKeys: string[] =
		["organizations:PolicyType"];
	/** Condition keys applicable to the ListDelegatedAdministrators action. */
	static readonly ListDelegatedAdministratorsConditionKeys: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the ListEffectivePolicyValidationErrors action. */
	static readonly ListEffectivePolicyValidationErrorsConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the ListInboundResponsibilityTransfers action. */
	static readonly ListInboundResponsibilityTransfersConditionKeys: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];
	/** Condition keys applicable to the ListOutboundResponsibilityTransfers action. */
	static readonly ListOutboundResponsibilityTransfersConditionKeys: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];
	/** Condition keys applicable to the ListPolicies action. */
	static readonly ListPoliciesConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the ListPoliciesForTarget action. */
	static readonly ListPoliciesForTargetConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the ListTargetsForPolicy action. */
	static readonly ListTargetsForPolicyConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PutResourcePolicyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterDelegatedAdministrator action. */
	static readonly RegisterDelegatedAdministratorConditionKeys: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the TerminateResponsibilityTransfer action. */
	static readonly TerminateResponsibilityTransferConditionKeys: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the UpdatePolicy action. */
	static readonly UpdatePolicyConditionKeys: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the UpdateResponsibilityTransfer action. */
	static readonly UpdateResponsibilityTransferConditionKeys: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: organizations:PolicyType (String) */
	static readonly POLICY_TYPE = "organizations:PolicyType";
	/** Condition key: organizations:ServicePrincipal (String) */
	static readonly SERVICE_PRINCIPAL = "organizations:ServicePrincipal";
	/** Condition key: organizations:TransferDirection (String) */
	static readonly TRANSFER_DIRECTION = "organizations:TransferDirection";
	/** Condition key: organizations:TransferType (String) */
	static readonly TRANSFER_TYPE = "organizations:TransferType";

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
	 * Generates a condition block for `organizations:PolicyType`.
	 */
	static policyType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "organizations:PolicyType": value } };
	}

	/**
	 * Generates a condition block for `organizations:ServicePrincipal`.
	 */
	static servicePrincipal(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "organizations:ServicePrincipal": value } };
	}

	/**
	 * Generates a condition block for `organizations:TransferDirection`.
	 */
	static transferDirection(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "organizations:TransferDirection": value } };
	}

	/**
	 * Generates a condition block for `organizations:TransferType`.
	 */
	static transferType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "organizations:TransferType": value } };
	}
}
