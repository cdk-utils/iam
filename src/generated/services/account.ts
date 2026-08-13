// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/account.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the account service.
 */
export class AccountActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "account";

	/** [Write] account:AcceptPrimaryEmailUpdate */
	static readonly AcceptPrimaryEmailUpdate = "account:AcceptPrimaryEmailUpdate";
	/** [Write] account:CloseAccount */
	static readonly CloseAccount = "account:CloseAccount";
	/** [Write] account:DeleteAlternateContact */
	static readonly DeleteAlternateContact = "account:DeleteAlternateContact";
	/** [Write] account:DisableRegion */
	static readonly DisableRegion = "account:DisableRegion";
	/** [Write] account:EnableRegion */
	static readonly EnableRegion = "account:EnableRegion";
	/** [Read] account:GetAccountInformation */
	static readonly actionGetAccountInformation = "account:GetAccountInformation";
	/** [Read] account:GetAlternateContact */
	static readonly actionGetAlternateContact = "account:GetAlternateContact";
	/** [Read] account:GetContactInformation */
	static readonly actionGetContactInformation = "account:GetContactInformation";
	/** [Read] account:GetGovCloudAccountInformation */
	static readonly actionGetGovCloudAccountInformation =
		"account:GetGovCloudAccountInformation";
	/** [Read] account:GetPrimaryEmail */
	static readonly actionGetPrimaryEmail = "account:GetPrimaryEmail";
	/** [Read] account:GetPrimaryEmailUpdateStatus */
	static readonly actionGetPrimaryEmailUpdateStatus =
		"account:GetPrimaryEmailUpdateStatus";
	/** [Read] account:GetRegionOptStatus */
	static readonly actionGetRegionOptStatus = "account:GetRegionOptStatus";
	/** [List] account:ListRegions */
	static readonly ListRegions = "account:ListRegions";
	/** [Write] account:PutAccountName */
	static readonly PutAccountName = "account:PutAccountName";
	/** [Write] account:PutAlternateContact */
	static readonly PutAlternateContact = "account:PutAlternateContact";
	/** [Write] account:PutContactInformation */
	static readonly PutContactInformation = "account:PutContactInformation";
	/** [Write] account:StartPrimaryEmailUpdate */
	static readonly StartPrimaryEmailUpdate = "account:StartPrimaryEmailUpdate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AccountActions.actionGetAccountInformation,
		AccountActions.actionGetAlternateContact,
		AccountActions.actionGetContactInformation,
		AccountActions.actionGetGovCloudAccountInformation,
		AccountActions.actionGetPrimaryEmail,
		AccountActions.actionGetPrimaryEmailUpdateStatus,
		AccountActions.actionGetRegionOptStatus,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AccountActions.AcceptPrimaryEmailUpdate,
		AccountActions.CloseAccount,
		AccountActions.DeleteAlternateContact,
		AccountActions.DisableRegion,
		AccountActions.EnableRegion,
		AccountActions.PutAccountName,
		AccountActions.PutAlternateContact,
		AccountActions.PutContactInformation,
		AccountActions.StartPrimaryEmailUpdate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [AccountActions.ListRegions];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a account ARN.
 */
export interface AccountAccountArnProps {
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a account ARN.
 */
export interface AccountAccountArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a accountInOrganization ARN.
 */
export interface AccountAccountInOrganizationArnProps {
	/** The ManagementAccountId component of the ARN. */
	readonly managementAccountId: string;
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The MemberAccountId component of the ARN. */
	readonly memberAccountId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a accountInOrganization ARN.
 */
export interface AccountAccountInOrganizationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ManagementAccountId component. */
	readonly managementAccountId: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The MemberAccountId component. */
	readonly memberAccountId: string;
}

const AccountArnRegex =
	/^arn:(?<partition>[^:]+):account::(?<account>[^:]*):account$/;
const AccountInOrganizationArnRegex =
	/^arn:(?<partition>[^:]+):account::(?<managementAccountId>[^:/?]+):account\/o-(?<organizationId>[^:/?]+)\/(?<memberAccountId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for account resources.
 */
export class AccountResources {
	/**
	 * Builds an ARN for the account resource.
	 */
	static account(props: AccountAccountArnProps): string {
		return `arn:${props.partition ?? "aws"}:account::${props.account ?? "*"}:account`;
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
	static parseAccountArn(arn: string): AccountAccountArnComponents {
		const match = AccountArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid account ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the accountInOrganization resource.
	 */
	static accountInOrganization(
		props: AccountAccountInOrganizationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:account::${props.managementAccountId}:account/o-${props.organizationId}/${props.memberAccountId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accountInOrganization resource.
	 */
	static isValidAccountInOrganizationArn(arn: string): boolean {
		return AccountInOrganizationArnRegex.test(arn);
	}

	/**
	 * Parses a accountInOrganization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccountInOrganizationArn(
		arn: string,
	): AccountAccountInOrganizationArnComponents {
		const match = AccountInOrganizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accountInOrganization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			managementAccountId: match.groups!.managementAccountId,
			organizationId: match.groups!.organizationId,
			memberAccountId: match.groups!.memberAccountId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for account.
 */
export class AccountOperations {
	/** IAM actions required for the AcceptPrimaryEmailUpdate API call. */
	static readonly AcceptPrimaryEmailUpdate: string[] = [
		"account:AcceptPrimaryEmailUpdate",
		"iam:UpdateAccountEmailAddress",
	];
	/** IAM actions required for the DeleteAlternateContact API call. */
	static readonly DeleteAlternateContact: string[] = [
		"account:DeleteAlternateContact",
	];
	/** IAM actions required for the DisableRegion API call. */
	static readonly DisableRegion: string[] = ["account:DisableRegion"];
	/** IAM actions required for the EnableRegion API call. */
	static readonly EnableRegion: string[] = ["account:EnableRegion"];
	/** IAM actions required for the GetAccountInformation API call. */
	static readonly opGetAccountInformation: string[] = [
		"account:GetAccountInformation",
	];
	/** IAM actions required for the GetAlternateContact API call. */
	static readonly opGetAlternateContact: string[] = [
		"account:GetAlternateContact",
	];
	/** IAM actions required for the GetContactInformation API call. */
	static readonly opGetContactInformation: string[] = [
		"account:GetContactInformation",
	];
	/** IAM actions required for the GetGovCloudAccountInformation API call. */
	static readonly opGetGovCloudAccountInformation: string[] = [
		"account:GetGovCloudAccountInformation",
	];
	/** IAM actions required for the GetPrimaryEmail API call. */
	static readonly opGetPrimaryEmail: string[] = ["account:GetPrimaryEmail"];
	/** IAM actions required for the GetPrimaryEmailUpdateStatus API call. */
	static readonly opGetPrimaryEmailUpdateStatus: string[] = [
		"account:GetPrimaryEmailUpdateStatus",
	];
	/** IAM actions required for the GetRegionOptStatus API call. */
	static readonly opGetRegionOptStatus: string[] = [
		"account:GetRegionOptStatus",
	];
	/** IAM actions required for the ListRegions API call. */
	static readonly ListRegions: string[] = ["account:ListRegions"];
	/** IAM actions required for the PutAccountName API call. */
	static readonly PutAccountName: string[] = [
		"account:PutAccountName",
		"iam:UpdateAccountName",
	];
	/** IAM actions required for the PutAlternateContact API call. */
	static readonly PutAlternateContact: string[] = [
		"account:PutAlternateContact",
	];
	/** IAM actions required for the PutContactInformation API call. */
	static readonly PutContactInformation: string[] = [
		"account:PutContactInformation",
	];
	/** IAM actions required for the StartPrimaryEmailUpdate API call. */
	static readonly StartPrimaryEmailUpdate: string[] = [
		"account:StartPrimaryEmailUpdate",
		"iam:UpdateAccountEmailAddress",
	];
}

/**
 * Condition key constants and builders for account.
 */
export class AccountConditions {
	/** Condition keys applicable to the AcceptPrimaryEmailUpdate action. */
	static readonly AcceptPrimaryEmailUpdateConditionKeys: string[] = [
		"account:EmailTargetDomain",
	];
	/** Condition keys applicable to the DeleteAlternateContact action. */
	static readonly DeleteAlternateContactConditionKeys: string[] = [
		"account:AlternateContactTypes",
	];
	/** Condition keys applicable to the DisableRegion action. */
	static readonly DisableRegionConditionKeys: string[] = [
		"account:TargetRegion",
	];
	/** Condition keys applicable to the EnableRegion action. */
	static readonly EnableRegionConditionKeys: string[] = [
		"account:TargetRegion",
	];
	/** Condition keys applicable to the GetAlternateContact action. */
	static readonly actionGetAlternateContactConditionKeys: string[] = [
		"account:AlternateContactTypes",
	];
	/** Condition keys applicable to the GetRegionOptStatus action. */
	static readonly actionGetRegionOptStatusConditionKeys: string[] = [
		"account:TargetRegion",
	];
	/** Condition keys applicable to the PutAlternateContact action. */
	static readonly PutAlternateContactConditionKeys: string[] = [
		"account:AlternateContactTypes",
	];
	/** Condition keys applicable to the StartPrimaryEmailUpdate action. */
	static readonly StartPrimaryEmailUpdateConditionKeys: string[] = [
		"account:EmailTargetDomain",
	];

	/** Condition key: account:AccountResourceOrgPaths (ArrayOfString) */
	static readonly ACCOUNT_RESOURCE_ORG_PATHS =
		"account:AccountResourceOrgPaths";
	/** Condition key: account:AccountResourceOrgTags/${TagKey} (String) */
	static readonly ACCOUNT_RESOURCE_ORG_TAGS =
		"account:AccountResourceOrgTags/${TagKey}";
	/** Condition key: account:AlternateContactTypes (ArrayOfString) */
	static readonly ALTERNATE_CONTACT_TYPES = "account:AlternateContactTypes";
	/** Condition key: account:EmailTargetDomain (String) */
	static readonly EMAIL_TARGET_DOMAIN = "account:EmailTargetDomain";
	/** Condition key: account:TargetRegion (String) */
	static readonly TARGET_REGION = "account:TargetRegion";

	/**
	 * Generates a condition block for `account:AccountResourceOrgPaths`.
	 */
	static accountResourceOrgPaths(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"account:AccountResourceOrgPaths": values,
			},
		};
	}

	/**
	 * Generates a condition block for `account:AccountResourceOrgTags/${TagKey}`.
	 */
	static accountResourceOrgTags(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "account:AccountResourceOrgTags/${TagKey}": value },
		};
	}

	/**
	 * Generates a condition block for `account:AlternateContactTypes`.
	 */
	static alternateContactTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "account:AlternateContactTypes": values },
		};
	}

	/**
	 * Generates a condition block for `account:EmailTargetDomain`.
	 */
	static emailTargetDomain(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "account:EmailTargetDomain": value } };
	}

	/**
	 * Generates a condition block for `account:TargetRegion`.
	 */
	static targetRegion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "account:TargetRegion": value } };
	}
}
