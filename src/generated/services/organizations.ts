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
	static readonly ACCEPT_HANDSHAKE = "organizations:AcceptHandshake";
	/** [PermissionManagement] organizations:AttachPolicy */
	static readonly ATTACH_POLICY = "organizations:AttachPolicy";
	/** [Write] organizations:CancelHandshake */
	static readonly CANCEL_HANDSHAKE = "organizations:CancelHandshake";
	/** [Write] organizations:CloseAccount */
	static readonly CLOSE_ACCOUNT = "organizations:CloseAccount";
	/** [Write] organizations:CreateAccount */
	static readonly CREATE_ACCOUNT = "organizations:CreateAccount";
	/** [Write] organizations:CreateGovCloudAccount */
	static readonly CREATE_GOV_CLOUD_ACCOUNT =
		"organizations:CreateGovCloudAccount";
	/** [Write] organizations:CreateOrganization */
	static readonly CREATE_ORGANIZATION = "organizations:CreateOrganization";
	/** [Write] organizations:CreateOrganizationalUnit */
	static readonly CREATE_ORGANIZATIONAL_UNIT =
		"organizations:CreateOrganizationalUnit";
	/** [Write] organizations:CreatePolicy */
	static readonly CREATE_POLICY = "organizations:CreatePolicy";
	/** [Write] organizations:DeclineHandshake */
	static readonly DECLINE_HANDSHAKE = "organizations:DeclineHandshake";
	/** [Write] organizations:DeleteOrganization */
	static readonly DELETE_ORGANIZATION = "organizations:DeleteOrganization";
	/** [Write] organizations:DeleteOrganizationalUnit */
	static readonly DELETE_ORGANIZATIONAL_UNIT =
		"organizations:DeleteOrganizationalUnit";
	/** [Write] organizations:DeletePolicy */
	static readonly DELETE_POLICY = "organizations:DeletePolicy";
	/** [PermissionManagement] organizations:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "organizations:DeleteResourcePolicy";
	/** [Write] organizations:DeregisterDelegatedAdministrator */
	static readonly DEREGISTER_DELEGATED_ADMINISTRATOR =
		"organizations:DeregisterDelegatedAdministrator";
	/** [Read] organizations:DescribeAccount */
	static readonly DESCRIBE_ACCOUNT = "organizations:DescribeAccount";
	/** [Read] organizations:DescribeCreateAccountStatus */
	static readonly DESCRIBE_CREATE_ACCOUNT_STATUS =
		"organizations:DescribeCreateAccountStatus";
	/** [Read] organizations:DescribeEffectivePolicy */
	static readonly DESCRIBE_EFFECTIVE_POLICY =
		"organizations:DescribeEffectivePolicy";
	/** [Read] organizations:DescribeHandshake */
	static readonly DESCRIBE_HANDSHAKE = "organizations:DescribeHandshake";
	/** [Read] organizations:DescribeOrganization */
	static readonly DESCRIBE_ORGANIZATION = "organizations:DescribeOrganization";
	/** [Read] organizations:DescribeOrganizationalUnit */
	static readonly DESCRIBE_ORGANIZATIONAL_UNIT =
		"organizations:DescribeOrganizationalUnit";
	/** [Read] organizations:DescribePolicy */
	static readonly DESCRIBE_POLICY = "organizations:DescribePolicy";
	/** [Read] organizations:DescribeResourcePolicy */
	static readonly DESCRIBE_RESOURCE_POLICY =
		"organizations:DescribeResourcePolicy";
	/** [Read] organizations:DescribeResponsibilityTransfer */
	static readonly DESCRIBE_RESPONSIBILITY_TRANSFER =
		"organizations:DescribeResponsibilityTransfer";
	/** [PermissionManagement] organizations:DetachPolicy */
	static readonly DETACH_POLICY = "organizations:DetachPolicy";
	/** [Write] organizations:DisableAWSServiceAccess */
	static readonly DISABLE_AWS_SERVICE_ACCESS =
		"organizations:DisableAWSServiceAccess";
	/** [Write] organizations:DisablePolicyType */
	static readonly DISABLE_POLICY_TYPE = "organizations:DisablePolicyType";
	/** [Write] organizations:EnableAWSServiceAccess */
	static readonly ENABLE_AWS_SERVICE_ACCESS =
		"organizations:EnableAWSServiceAccess";
	/** [Write] organizations:EnableAllFeatures */
	static readonly ENABLE_ALL_FEATURES = "organizations:EnableAllFeatures";
	/** [Write] organizations:EnablePolicyType */
	static readonly ENABLE_POLICY_TYPE = "organizations:EnablePolicyType";
	/** [Write] organizations:InviteAccountToOrganization */
	static readonly INVITE_ACCOUNT_TO_ORGANIZATION =
		"organizations:InviteAccountToOrganization";
	/** [Write] organizations:InviteOrganizationToTransferResponsibility */
	static readonly INVITE_ORGANIZATION_TO_TRANSFER_RESPONSIBILITY =
		"organizations:InviteOrganizationToTransferResponsibility";
	/** [Write] organizations:LeaveOrganization */
	static readonly LEAVE_ORGANIZATION = "organizations:LeaveOrganization";
	/** [List] organizations:ListAWSServiceAccessForOrganization */
	static readonly LIST_AWS_SERVICE_ACCESS_FOR_ORGANIZATION =
		"organizations:ListAWSServiceAccessForOrganization";
	/** [List] organizations:ListAccounts */
	static readonly LIST_ACCOUNTS = "organizations:ListAccounts";
	/** [List] organizations:ListAccountsForParent */
	static readonly LIST_ACCOUNTS_FOR_PARENT =
		"organizations:ListAccountsForParent";
	/** [List] organizations:ListAccountsWithInvalidEffectivePolicy */
	static readonly LIST_ACCOUNTS_WITH_INVALID_EFFECTIVE_POLICY =
		"organizations:ListAccountsWithInvalidEffectivePolicy";
	/** [List] organizations:ListChildren */
	static readonly LIST_CHILDREN = "organizations:ListChildren";
	/** [List] organizations:ListCreateAccountStatus */
	static readonly LIST_CREATE_ACCOUNT_STATUS =
		"organizations:ListCreateAccountStatus";
	/** [List] organizations:ListDelegatedAdministrators */
	static readonly LIST_DELEGATED_ADMINISTRATORS =
		"organizations:ListDelegatedAdministrators";
	/** [List] organizations:ListDelegatedServicesForAccount */
	static readonly LIST_DELEGATED_SERVICES_FOR_ACCOUNT =
		"organizations:ListDelegatedServicesForAccount";
	/** [List] organizations:ListEffectivePolicyValidationErrors */
	static readonly LIST_EFFECTIVE_POLICY_VALIDATION_ERRORS =
		"organizations:ListEffectivePolicyValidationErrors";
	/** [List] organizations:ListHandshakesForAccount */
	static readonly LIST_HANDSHAKES_FOR_ACCOUNT =
		"organizations:ListHandshakesForAccount";
	/** [List] organizations:ListHandshakesForOrganization */
	static readonly LIST_HANDSHAKES_FOR_ORGANIZATION =
		"organizations:ListHandshakesForOrganization";
	/** [List] organizations:ListInboundResponsibilityTransfers */
	static readonly LIST_INBOUND_RESPONSIBILITY_TRANSFERS =
		"organizations:ListInboundResponsibilityTransfers";
	/** [List] organizations:ListOrganizationalUnitsForParent */
	static readonly LIST_ORGANIZATIONAL_UNITS_FOR_PARENT =
		"organizations:ListOrganizationalUnitsForParent";
	/** [List] organizations:ListOutboundResponsibilityTransfers */
	static readonly LIST_OUTBOUND_RESPONSIBILITY_TRANSFERS =
		"organizations:ListOutboundResponsibilityTransfers";
	/** [List] organizations:ListParents */
	static readonly LIST_PARENTS = "organizations:ListParents";
	/** [List] organizations:ListPolicies */
	static readonly LIST_POLICIES = "organizations:ListPolicies";
	/** [List] organizations:ListPoliciesForTarget */
	static readonly LIST_POLICIES_FOR_TARGET =
		"organizations:ListPoliciesForTarget";
	/** [List] organizations:ListRoots */
	static readonly LIST_ROOTS = "organizations:ListRoots";
	/** [List] organizations:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "organizations:ListTagsForResource";
	/** [List] organizations:ListTargetsForPolicy */
	static readonly LIST_TARGETS_FOR_POLICY =
		"organizations:ListTargetsForPolicy";
	/** [Write] organizations:MoveAccount */
	static readonly MOVE_ACCOUNT = "organizations:MoveAccount";
	/** [PermissionManagement] organizations:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "organizations:PutResourcePolicy";
	/** [Write] organizations:RegisterDelegatedAdministrator */
	static readonly REGISTER_DELEGATED_ADMINISTRATOR =
		"organizations:RegisterDelegatedAdministrator";
	/** [Write] organizations:RemoveAccountFromOrganization */
	static readonly REMOVE_ACCOUNT_FROM_ORGANIZATION =
		"organizations:RemoveAccountFromOrganization";
	/** [Tagging] organizations:TagResource */
	static readonly TAG_RESOURCE = "organizations:TagResource";
	/** [Write] organizations:TerminateResponsibilityTransfer */
	static readonly TERMINATE_RESPONSIBILITY_TRANSFER =
		"organizations:TerminateResponsibilityTransfer";
	/** [Tagging] organizations:UntagResource */
	static readonly UNTAG_RESOURCE = "organizations:UntagResource";
	/** [Write] organizations:UpdateOrganizationalUnit */
	static readonly UPDATE_ORGANIZATIONAL_UNIT =
		"organizations:UpdateOrganizationalUnit";
	/** [PermissionManagement] organizations:UpdatePolicy */
	static readonly UPDATE_POLICY = "organizations:UpdatePolicy";
	/** [Write] organizations:UpdateResponsibilityTransfer */
	static readonly UPDATE_RESPONSIBILITY_TRANSFER =
		"organizations:UpdateResponsibilityTransfer";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OrganizationsActions.DESCRIBE_ACCOUNT,
		OrganizationsActions.DESCRIBE_CREATE_ACCOUNT_STATUS,
		OrganizationsActions.DESCRIBE_EFFECTIVE_POLICY,
		OrganizationsActions.DESCRIBE_HANDSHAKE,
		OrganizationsActions.DESCRIBE_ORGANIZATION,
		OrganizationsActions.DESCRIBE_ORGANIZATIONAL_UNIT,
		OrganizationsActions.DESCRIBE_POLICY,
		OrganizationsActions.DESCRIBE_RESOURCE_POLICY,
		OrganizationsActions.DESCRIBE_RESPONSIBILITY_TRANSFER,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OrganizationsActions.ACCEPT_HANDSHAKE,
		OrganizationsActions.CANCEL_HANDSHAKE,
		OrganizationsActions.CLOSE_ACCOUNT,
		OrganizationsActions.CREATE_ACCOUNT,
		OrganizationsActions.CREATE_GOV_CLOUD_ACCOUNT,
		OrganizationsActions.CREATE_ORGANIZATION,
		OrganizationsActions.CREATE_ORGANIZATIONAL_UNIT,
		OrganizationsActions.CREATE_POLICY,
		OrganizationsActions.DECLINE_HANDSHAKE,
		OrganizationsActions.DELETE_ORGANIZATION,
		OrganizationsActions.DELETE_ORGANIZATIONAL_UNIT,
		OrganizationsActions.DELETE_POLICY,
		OrganizationsActions.DEREGISTER_DELEGATED_ADMINISTRATOR,
		OrganizationsActions.DISABLE_AWS_SERVICE_ACCESS,
		OrganizationsActions.DISABLE_POLICY_TYPE,
		OrganizationsActions.ENABLE_AWS_SERVICE_ACCESS,
		OrganizationsActions.ENABLE_ALL_FEATURES,
		OrganizationsActions.ENABLE_POLICY_TYPE,
		OrganizationsActions.INVITE_ACCOUNT_TO_ORGANIZATION,
		OrganizationsActions.INVITE_ORGANIZATION_TO_TRANSFER_RESPONSIBILITY,
		OrganizationsActions.LEAVE_ORGANIZATION,
		OrganizationsActions.MOVE_ACCOUNT,
		OrganizationsActions.REGISTER_DELEGATED_ADMINISTRATOR,
		OrganizationsActions.REMOVE_ACCOUNT_FROM_ORGANIZATION,
		OrganizationsActions.TERMINATE_RESPONSIBILITY_TRANSFER,
		OrganizationsActions.UPDATE_ORGANIZATIONAL_UNIT,
		OrganizationsActions.UPDATE_RESPONSIBILITY_TRANSFER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OrganizationsActions.LIST_AWS_SERVICE_ACCESS_FOR_ORGANIZATION,
		OrganizationsActions.LIST_ACCOUNTS,
		OrganizationsActions.LIST_ACCOUNTS_FOR_PARENT,
		OrganizationsActions.LIST_ACCOUNTS_WITH_INVALID_EFFECTIVE_POLICY,
		OrganizationsActions.LIST_CHILDREN,
		OrganizationsActions.LIST_CREATE_ACCOUNT_STATUS,
		OrganizationsActions.LIST_DELEGATED_ADMINISTRATORS,
		OrganizationsActions.LIST_DELEGATED_SERVICES_FOR_ACCOUNT,
		OrganizationsActions.LIST_EFFECTIVE_POLICY_VALIDATION_ERRORS,
		OrganizationsActions.LIST_HANDSHAKES_FOR_ACCOUNT,
		OrganizationsActions.LIST_HANDSHAKES_FOR_ORGANIZATION,
		OrganizationsActions.LIST_INBOUND_RESPONSIBILITY_TRANSFERS,
		OrganizationsActions.LIST_ORGANIZATIONAL_UNITS_FOR_PARENT,
		OrganizationsActions.LIST_OUTBOUND_RESPONSIBILITY_TRANSFERS,
		OrganizationsActions.LIST_PARENTS,
		OrganizationsActions.LIST_POLICIES,
		OrganizationsActions.LIST_POLICIES_FOR_TARGET,
		OrganizationsActions.LIST_ROOTS,
		OrganizationsActions.LIST_TAGS_FOR_RESOURCE,
		OrganizationsActions.LIST_TARGETS_FOR_POLICY,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		OrganizationsActions.ATTACH_POLICY,
		OrganizationsActions.DELETE_RESOURCE_POLICY,
		OrganizationsActions.DETACH_POLICY,
		OrganizationsActions.PUT_RESOURCE_POLICY,
		OrganizationsActions.UPDATE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OrganizationsActions.TAG_RESOURCE,
		OrganizationsActions.UNTAG_RESOURCE,
	];
}

const AccountArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):account/o-(?<organizationId>[^:/?]+)/(?<accountId>[^:/?]+)$",
);
const AwspolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::aws:policy/(?<policyType>[^:/?]+)/p-(?<policyId>[^:/?]+)$",
);
const HandshakeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):handshake/o-(?<organizationId>[^:/?]+)/(?<handshakeType>[^:/?]+)/h-(?<handshakeId>[^:/?]+)$",
);
const OrganizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):organization/o-(?<organizationId>[^:/?]+)$",
);
const OrganizationalunitArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):ou/o-(?<organizationId>[^:/?]+)/ou-(?<organizationalUnitId>[^:/?]+)$",
);
const PolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):policy/o-(?<organizationId>[^:/?]+)/(?<policyType>[^:/?]+)/p-(?<policyId>[^:/?]+)$",
);
const ResourcepolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):resourcepolicy/o-(?<organizationId>[^:/?]+)/rp-(?<resourcePolicyId>[^:/?]+)$",
);
const ResponsibilitytransferArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):transfer/o-(?<organizationId>[^:/?]+)/(?<transferType>[^:/?]+)/(?<transferDirection>[^:/?]+)/rt-(?<responsibilityTransferId>[^:/?]+)$",
);
const RootArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):organizations::(?<account>[^:]*):root/o-(?<organizationId>[^:/?]+)/r-(?<rootId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for organizations resources.
 */
export class OrganizationsResources {
	/**
	 * Builds an ARN for the account resource.
	 */
	static account(props: {
		/** The OrganizationId component of the ARN. */
		readonly organizationId: string;
		/** The AccountId component of the ARN. */
		readonly accountId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAccountArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
		accountId: string;
	} {
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
	static awspolicy(props: {
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
	}): string {
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
	static parseAwspolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		policyType: string;
		policyId: string;
	} {
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
	static handshake(props: {
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
	}): string {
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
	static parseHandshakeArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
		handshakeType: string;
		handshakeId: string;
	} {
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
	static organization(props: {
		/** The OrganizationId component of the ARN. */
		readonly organizationId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOrganizationArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
	} {
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
	static organizationalunit(props: {
		/** The OrganizationId component of the ARN. */
		readonly organizationId: string;
		/** The OrganizationalUnitId component of the ARN. */
		readonly organizationalUnitId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseOrganizationalunitArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
		organizationalUnitId: string;
	} {
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
	static policy(props: {
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
	}): string {
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
	static parsePolicyArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
		policyType: string;
		policyId: string;
	} {
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
	static resourcepolicy(props: {
		/** The OrganizationId component of the ARN. */
		readonly organizationId: string;
		/** The ResourcePolicyId component of the ARN. */
		readonly resourcePolicyId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseResourcepolicyArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
		resourcePolicyId: string;
	} {
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
	static responsibilitytransfer(props: {
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
	}): string {
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
	static parseResponsibilitytransferArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
		transferType: string;
		transferDirection: string;
		responsibilityTransferId: string;
	} {
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
	static root(props: {
		/** The OrganizationId component of the ARN. */
		readonly organizationId: string;
		/** The RootId component of the ARN. */
		readonly rootId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRootArn(arn: string): {
		partition: string;
		account: string;
		organizationId: string;
		rootId: string;
	} {
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
	static readonly ACCEPT_HANDSHAKE: string[] = [
		"organizations:AcceptHandshake",
		"organizations:LeaveOrganization",
	];
	/** IAM actions required for the AttachPolicy API call. */
	static readonly ATTACH_POLICY: string[] = ["organizations:AttachPolicy"];
	/** IAM actions required for the CancelHandshake API call. */
	static readonly CANCEL_HANDSHAKE: string[] = [
		"organizations:CancelHandshake",
	];
	/** IAM actions required for the CloseAccount API call. */
	static readonly CLOSE_ACCOUNT: string[] = ["organizations:CloseAccount"];
	/** IAM actions required for the CreateAccount API call. */
	static readonly CREATE_ACCOUNT: string[] = [
		"organizations:CreateAccount",
		"organizations:TagResource",
	];
	/** IAM actions required for the CreateGovCloudAccount API call. */
	static readonly CREATE_GOV_CLOUD_ACCOUNT: string[] = [
		"organizations:CreateGovCloudAccount",
		"organizations:TagResource",
	];
	/** IAM actions required for the CreateOrganization API call. */
	static readonly CREATE_ORGANIZATION: string[] = [
		"organizations:CreateOrganization",
	];
	/** IAM actions required for the CreateOrganizationalUnit API call. */
	static readonly CREATE_ORGANIZATIONAL_UNIT: string[] = [
		"organizations:CreateOrganizationalUnit",
		"organizations:TagResource",
	];
	/** IAM actions required for the CreatePolicy API call. */
	static readonly CREATE_POLICY: string[] = [
		"organizations:CreatePolicy",
		"organizations:TagResource",
	];
	/** IAM actions required for the DeclineHandshake API call. */
	static readonly DECLINE_HANDSHAKE: string[] = [
		"organizations:DeclineHandshake",
	];
	/** IAM actions required for the DeleteOrganization API call. */
	static readonly DELETE_ORGANIZATION: string[] = [
		"organizations:DeleteOrganization",
	];
	/** IAM actions required for the DeleteOrganizationalUnit API call. */
	static readonly DELETE_ORGANIZATIONAL_UNIT: string[] = [
		"organizations:DeleteOrganizationalUnit",
	];
	/** IAM actions required for the DeletePolicy API call. */
	static readonly DELETE_POLICY: string[] = ["organizations:DeletePolicy"];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"organizations:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeregisterDelegatedAdministrator API call. */
	static readonly DEREGISTER_DELEGATED_ADMINISTRATOR: string[] = [
		"organizations:DeregisterDelegatedAdministrator",
	];
	/** IAM actions required for the DescribeAccount API call. */
	static readonly DESCRIBE_ACCOUNT: string[] = [
		"organizations:DescribeAccount",
	];
	/** IAM actions required for the DescribeCreateAccountStatus API call. */
	static readonly DESCRIBE_CREATE_ACCOUNT_STATUS: string[] = [
		"organizations:DescribeCreateAccountStatus",
	];
	/** IAM actions required for the DescribeEffectivePolicy API call. */
	static readonly DESCRIBE_EFFECTIVE_POLICY: string[] = [
		"organizations:DescribeEffectivePolicy",
	];
	/** IAM actions required for the DescribeHandshake API call. */
	static readonly DESCRIBE_HANDSHAKE: string[] = [
		"organizations:DescribeHandshake",
	];
	/** IAM actions required for the DescribeOrganization API call. */
	static readonly DESCRIBE_ORGANIZATION: string[] = [
		"organizations:DescribeOrganization",
	];
	/** IAM actions required for the DescribeOrganizationalUnit API call. */
	static readonly DESCRIBE_ORGANIZATIONAL_UNIT: string[] = [
		"organizations:DescribeOrganizationalUnit",
	];
	/** IAM actions required for the DescribePolicy API call. */
	static readonly DESCRIBE_POLICY: string[] = ["organizations:DescribePolicy"];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DESCRIBE_RESOURCE_POLICY: string[] = [
		"organizations:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeResponsibilityTransfer API call. */
	static readonly DESCRIBE_RESPONSIBILITY_TRANSFER: string[] = [
		"organizations:DescribeResponsibilityTransfer",
	];
	/** IAM actions required for the DetachPolicy API call. */
	static readonly DETACH_POLICY: string[] = ["organizations:DetachPolicy"];
	/** IAM actions required for the DisableAWSServiceAccess API call. */
	static readonly DISABLE_AWS_SERVICE_ACCESS: string[] = [
		"organizations:DisableAWSServiceAccess",
	];
	/** IAM actions required for the DisablePolicyType API call. */
	static readonly DISABLE_POLICY_TYPE: string[] = [
		"organizations:DisablePolicyType",
	];
	/** IAM actions required for the EnableAWSServiceAccess API call. */
	static readonly ENABLE_AWS_SERVICE_ACCESS: string[] = [
		"organizations:EnableAWSServiceAccess",
	];
	/** IAM actions required for the EnableAllFeatures API call. */
	static readonly ENABLE_ALL_FEATURES: string[] = [
		"organizations:EnableAllFeatures",
	];
	/** IAM actions required for the EnablePolicyType API call. */
	static readonly ENABLE_POLICY_TYPE: string[] = [
		"organizations:EnablePolicyType",
	];
	/** IAM actions required for the InviteAccountToOrganization API call. */
	static readonly INVITE_ACCOUNT_TO_ORGANIZATION: string[] = [
		"organizations:InviteAccountToOrganization",
		"organizations:TagResource",
	];
	/** IAM actions required for the InviteOrganizationToTransferResponsibility API call. */
	static readonly INVITE_ORGANIZATION_TO_TRANSFER_RESPONSIBILITY: string[] = [
		"organizations:InviteOrganizationToTransferResponsibility",
		"organizations:TagResource",
	];
	/** IAM actions required for the LeaveOrganization API call. */
	static readonly LEAVE_ORGANIZATION: string[] = [
		"organizations:LeaveOrganization",
	];
	/** IAM actions required for the ListAWSServiceAccessForOrganization API call. */
	static readonly LIST_AWS_SERVICE_ACCESS_FOR_ORGANIZATION: string[] = [
		"organizations:ListAWSServiceAccessForOrganization",
	];
	/** IAM actions required for the ListAccounts API call. */
	static readonly LIST_ACCOUNTS: string[] = ["organizations:ListAccounts"];
	/** IAM actions required for the ListAccountsForParent API call. */
	static readonly LIST_ACCOUNTS_FOR_PARENT: string[] = [
		"organizations:ListAccountsForParent",
	];
	/** IAM actions required for the ListAccountsWithInvalidEffectivePolicy API call. */
	static readonly LIST_ACCOUNTS_WITH_INVALID_EFFECTIVE_POLICY: string[] = [
		"organizations:ListAccountsWithInvalidEffectivePolicy",
	];
	/** IAM actions required for the ListChildren API call. */
	static readonly LIST_CHILDREN: string[] = ["organizations:ListChildren"];
	/** IAM actions required for the ListCreateAccountStatus API call. */
	static readonly LIST_CREATE_ACCOUNT_STATUS: string[] = [
		"organizations:ListCreateAccountStatus",
	];
	/** IAM actions required for the ListDelegatedAdministrators API call. */
	static readonly LIST_DELEGATED_ADMINISTRATORS: string[] = [
		"organizations:ListDelegatedAdministrators",
	];
	/** IAM actions required for the ListDelegatedServicesForAccount API call. */
	static readonly LIST_DELEGATED_SERVICES_FOR_ACCOUNT: string[] = [
		"organizations:ListDelegatedServicesForAccount",
	];
	/** IAM actions required for the ListEffectivePolicyValidationErrors API call. */
	static readonly LIST_EFFECTIVE_POLICY_VALIDATION_ERRORS: string[] = [
		"organizations:ListEffectivePolicyValidationErrors",
	];
	/** IAM actions required for the ListHandshakesForAccount API call. */
	static readonly LIST_HANDSHAKES_FOR_ACCOUNT: string[] = [
		"organizations:ListHandshakesForAccount",
	];
	/** IAM actions required for the ListHandshakesForOrganization API call. */
	static readonly LIST_HANDSHAKES_FOR_ORGANIZATION: string[] = [
		"organizations:ListHandshakesForOrganization",
	];
	/** IAM actions required for the ListInboundResponsibilityTransfers API call. */
	static readonly LIST_INBOUND_RESPONSIBILITY_TRANSFERS: string[] = [
		"organizations:ListInboundResponsibilityTransfers",
	];
	/** IAM actions required for the ListOrganizationalUnitsForParent API call. */
	static readonly LIST_ORGANIZATIONAL_UNITS_FOR_PARENT: string[] = [
		"organizations:ListOrganizationalUnitsForParent",
	];
	/** IAM actions required for the ListOutboundResponsibilityTransfers API call. */
	static readonly LIST_OUTBOUND_RESPONSIBILITY_TRANSFERS: string[] = [
		"organizations:ListOutboundResponsibilityTransfers",
	];
	/** IAM actions required for the ListParents API call. */
	static readonly LIST_PARENTS: string[] = ["organizations:ListParents"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = ["organizations:ListPolicies"];
	/** IAM actions required for the ListPoliciesForTarget API call. */
	static readonly LIST_POLICIES_FOR_TARGET: string[] = [
		"organizations:ListPoliciesForTarget",
	];
	/** IAM actions required for the ListRoots API call. */
	static readonly LIST_ROOTS: string[] = ["organizations:ListRoots"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"organizations:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetsForPolicy API call. */
	static readonly LIST_TARGETS_FOR_POLICY: string[] = [
		"organizations:ListTargetsForPolicy",
	];
	/** IAM actions required for the MoveAccount API call. */
	static readonly MOVE_ACCOUNT: string[] = ["organizations:MoveAccount"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"organizations:PutResourcePolicy",
		"organizations:TagResource",
	];
	/** IAM actions required for the RegisterDelegatedAdministrator API call. */
	static readonly REGISTER_DELEGATED_ADMINISTRATOR: string[] = [
		"organizations:RegisterDelegatedAdministrator",
	];
	/** IAM actions required for the RemoveAccountFromOrganization API call. */
	static readonly REMOVE_ACCOUNT_FROM_ORGANIZATION: string[] = [
		"organizations:RemoveAccountFromOrganization",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["organizations:TagResource"];
	/** IAM actions required for the TerminateResponsibilityTransfer API call. */
	static readonly TERMINATE_RESPONSIBILITY_TRANSFER: string[] = [
		"organizations:TerminateResponsibilityTransfer",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["organizations:UntagResource"];
	/** IAM actions required for the UpdateOrganizationalUnit API call. */
	static readonly UPDATE_ORGANIZATIONAL_UNIT: string[] = [
		"organizations:UpdateOrganizationalUnit",
	];
	/** IAM actions required for the UpdatePolicy API call. */
	static readonly UPDATE_POLICY: string[] = ["organizations:UpdatePolicy"];
	/** IAM actions required for the UpdateResponsibilityTransfer API call. */
	static readonly UPDATE_RESPONSIBILITY_TRANSFER: string[] = [
		"organizations:UpdateResponsibilityTransfer",
	];
}

/**
 * Condition key constants and builders for organizations.
 */
export class OrganizationsConditions {
	/** Condition keys applicable to the AttachPolicy action. */
	static readonly ATTACH_POLICY_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the CreateAccount action. */
	static readonly CREATE_ACCOUNT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateGovCloudAccount action. */
	static readonly CREATE_GOV_CLOUD_ACCOUNT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOrganizationalUnit action. */
	static readonly CREATE_ORGANIZATIONAL_UNIT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePolicy action. */
	static readonly CREATE_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DeletePolicy action. */
	static readonly DELETE_POLICY_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DeregisterDelegatedAdministrator action. */
	static readonly DEREGISTER_DELEGATED_ADMINISTRATOR_CONDITION_KEYS: string[] =
		["organizations:ServicePrincipal"];
	/** Condition keys applicable to the DescribeEffectivePolicy action. */
	static readonly DESCRIBE_EFFECTIVE_POLICY_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DescribePolicy action. */
	static readonly DESCRIBE_POLICY_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DescribeResponsibilityTransfer action. */
	static readonly DESCRIBE_RESPONSIBILITY_TRANSFER_CONDITION_KEYS: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];
	/** Condition keys applicable to the DetachPolicy action. */
	static readonly DETACH_POLICY_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the DisableAWSServiceAccess action. */
	static readonly DISABLE_AWS_SERVICE_ACCESS_CONDITION_KEYS: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the DisablePolicyType action. */
	static readonly DISABLE_POLICY_TYPE_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the EnableAWSServiceAccess action. */
	static readonly ENABLE_AWS_SERVICE_ACCESS_CONDITION_KEYS: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the EnablePolicyType action. */
	static readonly ENABLE_POLICY_TYPE_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the InviteAccountToOrganization action. */
	static readonly INVITE_ACCOUNT_TO_ORGANIZATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InviteOrganizationToTransferResponsibility action. */
	static readonly INVITE_ORGANIZATION_TO_TRANSFER_RESPONSIBILITY_CONDITION_KEYS: string[] =
		["organizations:TransferDirection", "organizations:TransferType"];
	/** Condition keys applicable to the ListAccountsWithInvalidEffectivePolicy action. */
	static readonly LIST_ACCOUNTS_WITH_INVALID_EFFECTIVE_POLICY_CONDITION_KEYS: string[] =
		["organizations:PolicyType"];
	/** Condition keys applicable to the ListDelegatedAdministrators action. */
	static readonly LIST_DELEGATED_ADMINISTRATORS_CONDITION_KEYS: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the ListEffectivePolicyValidationErrors action. */
	static readonly LIST_EFFECTIVE_POLICY_VALIDATION_ERRORS_CONDITION_KEYS: string[] =
		["organizations:PolicyType"];
	/** Condition keys applicable to the ListInboundResponsibilityTransfers action. */
	static readonly LIST_INBOUND_RESPONSIBILITY_TRANSFERS_CONDITION_KEYS: string[] =
		["organizations:TransferDirection", "organizations:TransferType"];
	/** Condition keys applicable to the ListOutboundResponsibilityTransfers action. */
	static readonly LIST_OUTBOUND_RESPONSIBILITY_TRANSFERS_CONDITION_KEYS: string[] =
		["organizations:TransferDirection", "organizations:TransferType"];
	/** Condition keys applicable to the ListPolicies action. */
	static readonly LIST_POLICIES_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the ListPoliciesForTarget action. */
	static readonly LIST_POLICIES_FOR_TARGET_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the ListTargetsForPolicy action. */
	static readonly LIST_TARGETS_FOR_POLICY_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PUT_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterDelegatedAdministrator action. */
	static readonly REGISTER_DELEGATED_ADMINISTRATOR_CONDITION_KEYS: string[] = [
		"organizations:ServicePrincipal",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the TerminateResponsibilityTransfer action. */
	static readonly TERMINATE_RESPONSIBILITY_TRANSFER_CONDITION_KEYS: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the UpdatePolicy action. */
	static readonly UPDATE_POLICY_CONDITION_KEYS: string[] = [
		"organizations:PolicyType",
	];
	/** Condition keys applicable to the UpdateResponsibilityTransfer action. */
	static readonly UPDATE_RESPONSIBILITY_TRANSFER_CONDITION_KEYS: string[] = [
		"organizations:TransferDirection",
		"organizations:TransferType",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
