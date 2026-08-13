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
	static readonly ACCEPT_PRIMARY_EMAIL_UPDATE =
		"account:AcceptPrimaryEmailUpdate";
	/** [Write] account:CloseAccount */
	static readonly CLOSE_ACCOUNT = "account:CloseAccount";
	/** [Write] account:DeleteAlternateContact */
	static readonly DELETE_ALTERNATE_CONTACT = "account:DeleteAlternateContact";
	/** [Write] account:DisableRegion */
	static readonly DISABLE_REGION = "account:DisableRegion";
	/** [Write] account:EnableRegion */
	static readonly ENABLE_REGION = "account:EnableRegion";
	/** [Read] account:GetAccountInformation */
	static readonly GET_ACCOUNT_INFORMATION = "account:GetAccountInformation";
	/** [Read] account:GetAlternateContact */
	static readonly GET_ALTERNATE_CONTACT = "account:GetAlternateContact";
	/** [Read] account:GetContactInformation */
	static readonly GET_CONTACT_INFORMATION = "account:GetContactInformation";
	/** [Read] account:GetGovCloudAccountInformation */
	static readonly GET_GOV_CLOUD_ACCOUNT_INFORMATION =
		"account:GetGovCloudAccountInformation";
	/** [Read] account:GetPrimaryEmail */
	static readonly GET_PRIMARY_EMAIL = "account:GetPrimaryEmail";
	/** [Read] account:GetPrimaryEmailUpdateStatus */
	static readonly GET_PRIMARY_EMAIL_UPDATE_STATUS =
		"account:GetPrimaryEmailUpdateStatus";
	/** [Read] account:GetRegionOptStatus */
	static readonly GET_REGION_OPT_STATUS = "account:GetRegionOptStatus";
	/** [List] account:ListRegions */
	static readonly LIST_REGIONS = "account:ListRegions";
	/** [Write] account:PutAccountName */
	static readonly PUT_ACCOUNT_NAME = "account:PutAccountName";
	/** [Write] account:PutAlternateContact */
	static readonly PUT_ALTERNATE_CONTACT = "account:PutAlternateContact";
	/** [Write] account:PutContactInformation */
	static readonly PUT_CONTACT_INFORMATION = "account:PutContactInformation";
	/** [Write] account:StartPrimaryEmailUpdate */
	static readonly START_PRIMARY_EMAIL_UPDATE =
		"account:StartPrimaryEmailUpdate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AccountActions.GET_ACCOUNT_INFORMATION,
		AccountActions.GET_ALTERNATE_CONTACT,
		AccountActions.GET_CONTACT_INFORMATION,
		AccountActions.GET_GOV_CLOUD_ACCOUNT_INFORMATION,
		AccountActions.GET_PRIMARY_EMAIL,
		AccountActions.GET_PRIMARY_EMAIL_UPDATE_STATUS,
		AccountActions.GET_REGION_OPT_STATUS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AccountActions.ACCEPT_PRIMARY_EMAIL_UPDATE,
		AccountActions.CLOSE_ACCOUNT,
		AccountActions.DELETE_ALTERNATE_CONTACT,
		AccountActions.DISABLE_REGION,
		AccountActions.ENABLE_REGION,
		AccountActions.PUT_ACCOUNT_NAME,
		AccountActions.PUT_ALTERNATE_CONTACT,
		AccountActions.PUT_CONTACT_INFORMATION,
		AccountActions.START_PRIMARY_EMAIL_UPDATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [AccountActions.LIST_REGIONS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const AccountArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):account::(?<account>[^:]*):account$",
);
const AccountInOrganizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):account::(?<managementAccountId>[^:/?]+):account/o-(?<organizationId>[^:/?]+)/(?<memberAccountId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for account resources.
 */
export class AccountResources {
	/**
	 * Builds an ARN for the account resource.
	 */
	static account(props: {
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAccountArn(arn: string): { partition: string; account: string } {
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
	static accountInOrganization(props: {
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
	}): string {
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
	static parseAccountInOrganizationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		managementAccountId: string;
		organizationId: string;
		memberAccountId: string;
	} {
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
	static readonly ACCEPT_PRIMARY_EMAIL_UPDATE: string[] = [
		"account:AcceptPrimaryEmailUpdate",
		"iam:UpdateAccountEmailAddress",
	];
	/** IAM actions required for the DeleteAlternateContact API call. */
	static readonly DELETE_ALTERNATE_CONTACT: string[] = [
		"account:DeleteAlternateContact",
	];
	/** IAM actions required for the DisableRegion API call. */
	static readonly DISABLE_REGION: string[] = ["account:DisableRegion"];
	/** IAM actions required for the EnableRegion API call. */
	static readonly ENABLE_REGION: string[] = ["account:EnableRegion"];
	/** IAM actions required for the GetAccountInformation API call. */
	static readonly GET_ACCOUNT_INFORMATION: string[] = [
		"account:GetAccountInformation",
	];
	/** IAM actions required for the GetAlternateContact API call. */
	static readonly GET_ALTERNATE_CONTACT: string[] = [
		"account:GetAlternateContact",
	];
	/** IAM actions required for the GetContactInformation API call. */
	static readonly GET_CONTACT_INFORMATION: string[] = [
		"account:GetContactInformation",
	];
	/** IAM actions required for the GetGovCloudAccountInformation API call. */
	static readonly GET_GOV_CLOUD_ACCOUNT_INFORMATION: string[] = [
		"account:GetGovCloudAccountInformation",
	];
	/** IAM actions required for the GetPrimaryEmail API call. */
	static readonly GET_PRIMARY_EMAIL: string[] = ["account:GetPrimaryEmail"];
	/** IAM actions required for the GetPrimaryEmailUpdateStatus API call. */
	static readonly GET_PRIMARY_EMAIL_UPDATE_STATUS: string[] = [
		"account:GetPrimaryEmailUpdateStatus",
	];
	/** IAM actions required for the GetRegionOptStatus API call. */
	static readonly GET_REGION_OPT_STATUS: string[] = [
		"account:GetRegionOptStatus",
	];
	/** IAM actions required for the ListRegions API call. */
	static readonly LIST_REGIONS: string[] = ["account:ListRegions"];
	/** IAM actions required for the PutAccountName API call. */
	static readonly PUT_ACCOUNT_NAME: string[] = [
		"account:PutAccountName",
		"iam:UpdateAccountName",
	];
	/** IAM actions required for the PutAlternateContact API call. */
	static readonly PUT_ALTERNATE_CONTACT: string[] = [
		"account:PutAlternateContact",
	];
	/** IAM actions required for the PutContactInformation API call. */
	static readonly PUT_CONTACT_INFORMATION: string[] = [
		"account:PutContactInformation",
	];
	/** IAM actions required for the StartPrimaryEmailUpdate API call. */
	static readonly START_PRIMARY_EMAIL_UPDATE: string[] = [
		"account:StartPrimaryEmailUpdate",
		"iam:UpdateAccountEmailAddress",
	];
}

/**
 * Condition key constants and builders for account.
 */
export class AccountConditions {
	/** Condition keys applicable to the AcceptPrimaryEmailUpdate action. */
	static readonly ACCEPT_PRIMARY_EMAIL_UPDATE_CONDITION_KEYS: string[] = [
		"account:EmailTargetDomain",
	];
	/** Condition keys applicable to the DeleteAlternateContact action. */
	static readonly DELETE_ALTERNATE_CONTACT_CONDITION_KEYS: string[] = [
		"account:AlternateContactTypes",
	];
	/** Condition keys applicable to the DisableRegion action. */
	static readonly DISABLE_REGION_CONDITION_KEYS: string[] = [
		"account:TargetRegion",
	];
	/** Condition keys applicable to the EnableRegion action. */
	static readonly ENABLE_REGION_CONDITION_KEYS: string[] = [
		"account:TargetRegion",
	];
	/** Condition keys applicable to the GetAlternateContact action. */
	static readonly GET_ALTERNATE_CONTACT_CONDITION_KEYS: string[] = [
		"account:AlternateContactTypes",
	];
	/** Condition keys applicable to the GetRegionOptStatus action. */
	static readonly GET_REGION_OPT_STATUS_CONDITION_KEYS: string[] = [
		"account:TargetRegion",
	];
	/** Condition keys applicable to the PutAlternateContact action. */
	static readonly PUT_ALTERNATE_CONTACT_CONDITION_KEYS: string[] = [
		"account:AlternateContactTypes",
	];
	/** Condition keys applicable to the StartPrimaryEmailUpdate action. */
	static readonly START_PRIMARY_EMAIL_UPDATE_CONDITION_KEYS: string[] = [
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
