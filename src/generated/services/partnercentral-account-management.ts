// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/partnercentral-account-management.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the partnercentral-account-management service.
 */
export class PartnercentralAccountManagementActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "partnercentral-account-management";

	/** [Write] partnercentral-account-management:AccessLegacyPartnerCentral */
	static readonly ACCESS_LEGACY_PARTNER_CENTRAL =
		"partnercentral-account-management:AccessLegacyPartnerCentral";
	/** [Write] partnercentral-account-management:AccessMarketingCentral */
	static readonly ACCESS_MARKETING_CENTRAL =
		"partnercentral-account-management:AccessMarketingCentral";
	/** [Write] partnercentral-account-management:AccessProServeTools */
	static readonly ACCESS_PRO_SERVE_TOOLS =
		"partnercentral-account-management:AccessProServeTools";
	/** [Write] partnercentral-account-management:AssociatePartnerAccount */
	static readonly ASSOCIATE_PARTNER_ACCOUNT =
		"partnercentral-account-management:AssociatePartnerAccount";
	/** [Write] partnercentral-account-management:AssociatePartnerUser */
	static readonly ASSOCIATE_PARTNER_USER =
		"partnercentral-account-management:AssociatePartnerUser";
	/** [Write] partnercentral-account-management:DisassociatePartnerUser */
	static readonly DISASSOCIATE_PARTNER_USER =
		"partnercentral-account-management:DisassociatePartnerUser";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PartnercentralAccountManagementActions.ACCESS_LEGACY_PARTNER_CENTRAL,
		PartnercentralAccountManagementActions.ACCESS_MARKETING_CENTRAL,
		PartnercentralAccountManagementActions.ACCESS_PRO_SERVE_TOOLS,
		PartnercentralAccountManagementActions.ASSOCIATE_PARTNER_ACCOUNT,
		PartnercentralAccountManagementActions.ASSOCIATE_PARTNER_USER,
		PartnercentralAccountManagementActions.DISASSOCIATE_PARTNER_USER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * Condition key constants and builders for partnercentral-account-management.
 */
export class PartnercentralAccountManagementConditions {
	/** Condition keys applicable to the AccessLegacyPartnerCentral action. */
	static readonly ACCESS_LEGACY_PARTNER_CENTRAL_CONDITION_KEYS: string[] = [
		"partnercentral-account-management:LegacyPartnerCentralRole",
	];
	/** Condition keys applicable to the AccessMarketingCentral action. */
	static readonly ACCESS_MARKETING_CENTRAL_CONDITION_KEYS: string[] = [
		"partnercentral-account-management:MarketingCentralRole",
	];
	/** Condition keys applicable to the AccessProServeTools action. */
	static readonly ACCESS_PRO_SERVE_TOOLS_CONDITION_KEYS: string[] = [
		"partnercentral-account-management:ProServeRole",
	];

	/** Condition key: partnercentral-account-management:LegacyPartnerCentralRole (ArrayOfString) */
	static readonly LEGACY_PARTNER_CENTRAL_ROLE =
		"partnercentral-account-management:LegacyPartnerCentralRole";
	/** Condition key: partnercentral-account-management:MarketingCentralRole (ArrayOfString) */
	static readonly MARKETING_CENTRAL_ROLE =
		"partnercentral-account-management:MarketingCentralRole";
	/** Condition key: partnercentral-account-management:ProServeRole (ArrayOfString) */
	static readonly PRO_SERVE_ROLE =
		"partnercentral-account-management:ProServeRole";

	/**
	 * Generates a condition block for `partnercentral-account-management:LegacyPartnerCentralRole`.
	 */
	static legacyPartnerCentralRole(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"partnercentral-account-management:LegacyPartnerCentralRole": values,
			},
		};
	}

	/**
	 * Generates a condition block for `partnercentral-account-management:MarketingCentralRole`.
	 */
	static marketingCentralRole(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"partnercentral-account-management:MarketingCentralRole": values,
			},
		};
	}

	/**
	 * Generates a condition block for `partnercentral-account-management:ProServeRole`.
	 */
	static proServeRole(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"partnercentral-account-management:ProServeRole": values,
			},
		};
	}
}
