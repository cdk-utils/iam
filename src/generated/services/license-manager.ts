// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/license-manager.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the license-manager service.
 */
export class LicenseManagerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "license-manager";

	/** [Write] license-manager:AcceptGrant */
	static readonly ACCEPT_GRANT = "license-manager:AcceptGrant";
	/** [Write] license-manager:CheckInLicense */
	static readonly CHECK_IN_LICENSE = "license-manager:CheckInLicense";
	/** [Write] license-manager:CheckoutBorrowLicense */
	static readonly CHECKOUT_BORROW_LICENSE =
		"license-manager:CheckoutBorrowLicense";
	/** [Write] license-manager:CheckoutLicense */
	static readonly CHECKOUT_LICENSE = "license-manager:CheckoutLicense";
	/** [Write] license-manager:CreateGrant */
	static readonly CREATE_GRANT = "license-manager:CreateGrant";
	/** [Write] license-manager:CreateGrantVersion */
	static readonly CREATE_GRANT_VERSION = "license-manager:CreateGrantVersion";
	/** [Write] license-manager:CreateLicense */
	static readonly CREATE_LICENSE = "license-manager:CreateLicense";
	/** [Write] license-manager:CreateLicenseAssetGroup */
	static readonly CREATE_LICENSE_ASSET_GROUP =
		"license-manager:CreateLicenseAssetGroup";
	/** [Write] license-manager:CreateLicenseAssetRuleset */
	static readonly CREATE_LICENSE_ASSET_RULESET =
		"license-manager:CreateLicenseAssetRuleset";
	/** [Write] license-manager:CreateLicenseConfiguration */
	static readonly CREATE_LICENSE_CONFIGURATION =
		"license-manager:CreateLicenseConfiguration";
	/** [Write] license-manager:CreateLicenseConversionTaskForResource */
	static readonly CREATE_LICENSE_CONVERSION_TASK_FOR_RESOURCE =
		"license-manager:CreateLicenseConversionTaskForResource";
	/** [Write] license-manager:CreateLicenseManagerReportGenerator */
	static readonly CREATE_LICENSE_MANAGER_REPORT_GENERATOR =
		"license-manager:CreateLicenseManagerReportGenerator";
	/** [Write] license-manager:CreateLicenseVersion */
	static readonly CREATE_LICENSE_VERSION =
		"license-manager:CreateLicenseVersion";
	/** [Write] license-manager:CreateToken */
	static readonly CREATE_TOKEN = "license-manager:CreateToken";
	/** [Write] license-manager:DeleteGrant */
	static readonly DELETE_GRANT = "license-manager:DeleteGrant";
	/** [Write] license-manager:DeleteLicense */
	static readonly DELETE_LICENSE = "license-manager:DeleteLicense";
	/** [Write] license-manager:DeleteLicenseAssetGroup */
	static readonly DELETE_LICENSE_ASSET_GROUP =
		"license-manager:DeleteLicenseAssetGroup";
	/** [Write] license-manager:DeleteLicenseAssetRuleset */
	static readonly DELETE_LICENSE_ASSET_RULESET =
		"license-manager:DeleteLicenseAssetRuleset";
	/** [Write] license-manager:DeleteLicenseConfiguration */
	static readonly DELETE_LICENSE_CONFIGURATION =
		"license-manager:DeleteLicenseConfiguration";
	/** [Write] license-manager:DeleteLicenseManagerReportGenerator */
	static readonly DELETE_LICENSE_MANAGER_REPORT_GENERATOR =
		"license-manager:DeleteLicenseManagerReportGenerator";
	/** [Write] license-manager:DeleteToken */
	static readonly DELETE_TOKEN = "license-manager:DeleteToken";
	/** [Write] license-manager:ExtendLicenseConsumption */
	static readonly EXTEND_LICENSE_CONSUMPTION =
		"license-manager:ExtendLicenseConsumption";
	/** [Read] license-manager:GetAccessToken */
	static readonly GET_ACCESS_TOKEN = "license-manager:GetAccessToken";
	/** [Read] license-manager:GetGrant */
	static readonly GET_GRANT = "license-manager:GetGrant";
	/** [Read] license-manager:GetLicense */
	static readonly GET_LICENSE = "license-manager:GetLicense";
	/** [Read] license-manager:GetLicenseAssetGroup */
	static readonly GET_LICENSE_ASSET_GROUP =
		"license-manager:GetLicenseAssetGroup";
	/** [Read] license-manager:GetLicenseAssetRuleset */
	static readonly GET_LICENSE_ASSET_RULESET =
		"license-manager:GetLicenseAssetRuleset";
	/** [Read] license-manager:GetLicenseConfiguration */
	static readonly GET_LICENSE_CONFIGURATION =
		"license-manager:GetLicenseConfiguration";
	/** [Read] license-manager:GetLicenseConversionTask */
	static readonly GET_LICENSE_CONVERSION_TASK =
		"license-manager:GetLicenseConversionTask";
	/** [Read] license-manager:GetLicenseManagerReportGenerator */
	static readonly GET_LICENSE_MANAGER_REPORT_GENERATOR =
		"license-manager:GetLicenseManagerReportGenerator";
	/** [Read] license-manager:GetLicenseUsage */
	static readonly GET_LICENSE_USAGE = "license-manager:GetLicenseUsage";
	/** [List] license-manager:GetServiceSettings */
	static readonly GET_SERVICE_SETTINGS = "license-manager:GetServiceSettings";
	/** [List] license-manager:ListAssetsForLicenseAssetGroup */
	static readonly LIST_ASSETS_FOR_LICENSE_ASSET_GROUP =
		"license-manager:ListAssetsForLicenseAssetGroup";
	/** [List] license-manager:ListAssociationsForLicenseConfiguration */
	static readonly LIST_ASSOCIATIONS_FOR_LICENSE_CONFIGURATION =
		"license-manager:ListAssociationsForLicenseConfiguration";
	/** [List] license-manager:ListDistributedGrants */
	static readonly LIST_DISTRIBUTED_GRANTS =
		"license-manager:ListDistributedGrants";
	/** [List] license-manager:ListFailuresForLicenseConfigurationOperations */
	static readonly LIST_FAILURES_FOR_LICENSE_CONFIGURATION_OPERATIONS =
		"license-manager:ListFailuresForLicenseConfigurationOperations";
	/** [List] license-manager:ListLicenseAssetGroups */
	static readonly LIST_LICENSE_ASSET_GROUPS =
		"license-manager:ListLicenseAssetGroups";
	/** [List] license-manager:ListLicenseAssetRulesets */
	static readonly LIST_LICENSE_ASSET_RULESETS =
		"license-manager:ListLicenseAssetRulesets";
	/** [List] license-manager:ListLicenseConfigurations */
	static readonly LIST_LICENSE_CONFIGURATIONS =
		"license-manager:ListLicenseConfigurations";
	/** [List] license-manager:ListLicenseConfigurationsForOrganization */
	static readonly LIST_LICENSE_CONFIGURATIONS_FOR_ORGANIZATION =
		"license-manager:ListLicenseConfigurationsForOrganization";
	/** [List] license-manager:ListLicenseConversionTasks */
	static readonly LIST_LICENSE_CONVERSION_TASKS =
		"license-manager:ListLicenseConversionTasks";
	/** [List] license-manager:ListLicenseManagerReportGenerators */
	static readonly LIST_LICENSE_MANAGER_REPORT_GENERATORS =
		"license-manager:ListLicenseManagerReportGenerators";
	/** [List] license-manager:ListLicenseSpecificationsForResource */
	static readonly LIST_LICENSE_SPECIFICATIONS_FOR_RESOURCE =
		"license-manager:ListLicenseSpecificationsForResource";
	/** [List] license-manager:ListLicenseVersions */
	static readonly LIST_LICENSE_VERSIONS = "license-manager:ListLicenseVersions";
	/** [Read] license-manager:ListLicenses */
	static readonly LIST_LICENSES = "license-manager:ListLicenses";
	/** [List] license-manager:ListReceivedGrants */
	static readonly LIST_RECEIVED_GRANTS = "license-manager:ListReceivedGrants";
	/** [List] license-manager:ListReceivedGrantsForOrganization */
	static readonly LIST_RECEIVED_GRANTS_FOR_ORGANIZATION =
		"license-manager:ListReceivedGrantsForOrganization";
	/** [List] license-manager:ListReceivedLicenses */
	static readonly LIST_RECEIVED_LICENSES =
		"license-manager:ListReceivedLicenses";
	/** [List] license-manager:ListReceivedLicensesForOrganization */
	static readonly LIST_RECEIVED_LICENSES_FOR_ORGANIZATION =
		"license-manager:ListReceivedLicensesForOrganization";
	/** [List] license-manager:ListResourceInventory */
	static readonly LIST_RESOURCE_INVENTORY =
		"license-manager:ListResourceInventory";
	/** [Read] license-manager:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"license-manager:ListTagsForResource";
	/** [List] license-manager:ListTokens */
	static readonly LIST_TOKENS = "license-manager:ListTokens";
	/** [List] license-manager:ListUsageForLicenseConfiguration */
	static readonly LIST_USAGE_FOR_LICENSE_CONFIGURATION =
		"license-manager:ListUsageForLicenseConfiguration";
	/** [Write] license-manager:RejectGrant */
	static readonly REJECT_GRANT = "license-manager:RejectGrant";
	/** [Tagging] license-manager:TagResource */
	static readonly TAG_RESOURCE = "license-manager:TagResource";
	/** [Tagging] license-manager:UntagResource */
	static readonly UNTAG_RESOURCE = "license-manager:UntagResource";
	/** [Write] license-manager:UpdateLicenseAssetGroup */
	static readonly UPDATE_LICENSE_ASSET_GROUP =
		"license-manager:UpdateLicenseAssetGroup";
	/** [Write] license-manager:UpdateLicenseAssetRuleset */
	static readonly UPDATE_LICENSE_ASSET_RULESET =
		"license-manager:UpdateLicenseAssetRuleset";
	/** [Write] license-manager:UpdateLicenseConfiguration */
	static readonly UPDATE_LICENSE_CONFIGURATION =
		"license-manager:UpdateLicenseConfiguration";
	/** [Write] license-manager:UpdateLicenseManagerReportGenerator */
	static readonly UPDATE_LICENSE_MANAGER_REPORT_GENERATOR =
		"license-manager:UpdateLicenseManagerReportGenerator";
	/** [Write] license-manager:UpdateLicenseSpecificationsForResource */
	static readonly UPDATE_LICENSE_SPECIFICATIONS_FOR_RESOURCE =
		"license-manager:UpdateLicenseSpecificationsForResource";
	/** [PermissionManagement] license-manager:UpdateServiceSettings */
	static readonly UPDATE_SERVICE_SETTINGS =
		"license-manager:UpdateServiceSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		LicenseManagerActions.GET_ACCESS_TOKEN,
		LicenseManagerActions.GET_GRANT,
		LicenseManagerActions.GET_LICENSE,
		LicenseManagerActions.GET_LICENSE_ASSET_GROUP,
		LicenseManagerActions.GET_LICENSE_ASSET_RULESET,
		LicenseManagerActions.GET_LICENSE_CONFIGURATION,
		LicenseManagerActions.GET_LICENSE_CONVERSION_TASK,
		LicenseManagerActions.GET_LICENSE_MANAGER_REPORT_GENERATOR,
		LicenseManagerActions.GET_LICENSE_USAGE,
		LicenseManagerActions.LIST_LICENSES,
		LicenseManagerActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		LicenseManagerActions.ACCEPT_GRANT,
		LicenseManagerActions.CHECK_IN_LICENSE,
		LicenseManagerActions.CHECKOUT_BORROW_LICENSE,
		LicenseManagerActions.CHECKOUT_LICENSE,
		LicenseManagerActions.CREATE_GRANT,
		LicenseManagerActions.CREATE_GRANT_VERSION,
		LicenseManagerActions.CREATE_LICENSE,
		LicenseManagerActions.CREATE_LICENSE_ASSET_GROUP,
		LicenseManagerActions.CREATE_LICENSE_ASSET_RULESET,
		LicenseManagerActions.CREATE_LICENSE_CONFIGURATION,
		LicenseManagerActions.CREATE_LICENSE_CONVERSION_TASK_FOR_RESOURCE,
		LicenseManagerActions.CREATE_LICENSE_MANAGER_REPORT_GENERATOR,
		LicenseManagerActions.CREATE_LICENSE_VERSION,
		LicenseManagerActions.CREATE_TOKEN,
		LicenseManagerActions.DELETE_GRANT,
		LicenseManagerActions.DELETE_LICENSE,
		LicenseManagerActions.DELETE_LICENSE_ASSET_GROUP,
		LicenseManagerActions.DELETE_LICENSE_ASSET_RULESET,
		LicenseManagerActions.DELETE_LICENSE_CONFIGURATION,
		LicenseManagerActions.DELETE_LICENSE_MANAGER_REPORT_GENERATOR,
		LicenseManagerActions.DELETE_TOKEN,
		LicenseManagerActions.EXTEND_LICENSE_CONSUMPTION,
		LicenseManagerActions.REJECT_GRANT,
		LicenseManagerActions.UPDATE_LICENSE_ASSET_GROUP,
		LicenseManagerActions.UPDATE_LICENSE_ASSET_RULESET,
		LicenseManagerActions.UPDATE_LICENSE_CONFIGURATION,
		LicenseManagerActions.UPDATE_LICENSE_MANAGER_REPORT_GENERATOR,
		LicenseManagerActions.UPDATE_LICENSE_SPECIFICATIONS_FOR_RESOURCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		LicenseManagerActions.GET_SERVICE_SETTINGS,
		LicenseManagerActions.LIST_ASSETS_FOR_LICENSE_ASSET_GROUP,
		LicenseManagerActions.LIST_ASSOCIATIONS_FOR_LICENSE_CONFIGURATION,
		LicenseManagerActions.LIST_DISTRIBUTED_GRANTS,
		LicenseManagerActions.LIST_FAILURES_FOR_LICENSE_CONFIGURATION_OPERATIONS,
		LicenseManagerActions.LIST_LICENSE_ASSET_GROUPS,
		LicenseManagerActions.LIST_LICENSE_ASSET_RULESETS,
		LicenseManagerActions.LIST_LICENSE_CONFIGURATIONS,
		LicenseManagerActions.LIST_LICENSE_CONFIGURATIONS_FOR_ORGANIZATION,
		LicenseManagerActions.LIST_LICENSE_CONVERSION_TASKS,
		LicenseManagerActions.LIST_LICENSE_MANAGER_REPORT_GENERATORS,
		LicenseManagerActions.LIST_LICENSE_SPECIFICATIONS_FOR_RESOURCE,
		LicenseManagerActions.LIST_LICENSE_VERSIONS,
		LicenseManagerActions.LIST_RECEIVED_GRANTS,
		LicenseManagerActions.LIST_RECEIVED_GRANTS_FOR_ORGANIZATION,
		LicenseManagerActions.LIST_RECEIVED_LICENSES,
		LicenseManagerActions.LIST_RECEIVED_LICENSES_FOR_ORGANIZATION,
		LicenseManagerActions.LIST_RESOURCE_INVENTORY,
		LicenseManagerActions.LIST_TOKENS,
		LicenseManagerActions.LIST_USAGE_FOR_LICENSE_CONFIGURATION,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		LicenseManagerActions.UPDATE_SERVICE_SETTINGS,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		LicenseManagerActions.TAG_RESOURCE,
		LicenseManagerActions.UNTAG_RESOURCE,
	];
}

const GrantArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager::(?<account>[^:]*):grant:(?<grantId>[^:/?]+)$",
);
const LicenseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager::(?<account>[^:]*):license:(?<licenseId>[^:/?]+)$",
);
const LicenseAssetGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):license-asset-group:(?<licenseAssetGroupId>[^:/?]+)$",
);
const LicenseAssetRulesetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):license-asset-ruleset:(?<licenseAssetRulesetId>[^:/?]+)$",
);
const LicenseConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):license-configuration:(?<licenseConfigurationId>[^:/?]+)$",
);
const ReportGeneratorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):report-generator:(?<reportGeneratorId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for license-manager resources.
 */
export class LicenseManagerResources {
	/**
	 * Builds an ARN for the grant resource.
	 */
	static grant(props: {
		/** The GrantId component of the ARN. */
		readonly grantId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:license-manager::${props.account ?? "*"}:grant:${props.grantId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the grant resource.
	 */
	static isValidGrantArn(arn: string): boolean {
		return GrantArnRegex.test(arn);
	}

	/**
	 * Parses a grant ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGrantArn(arn: string): {
		partition: string;
		account: string;
		grantId: string;
	} {
		const match = GrantArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid grant ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			grantId: match.groups!.grantId,
		};
	}

	/**
	 * Builds an ARN for the license resource.
	 */
	static license(props: {
		/** The LicenseId component of the ARN. */
		readonly licenseId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:license-manager::${props.account ?? "*"}:license:${props.licenseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the license resource.
	 */
	static isValidLicenseArn(arn: string): boolean {
		return LicenseArnRegex.test(arn);
	}

	/**
	 * Parses a license ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLicenseArn(arn: string): {
		partition: string;
		account: string;
		licenseId: string;
	} {
		const match = LicenseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid license ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			licenseId: match.groups!.licenseId,
		};
	}

	/**
	 * Builds an ARN for the license-asset-group resource.
	 */
	static licenseAssetGroup(props: {
		/** The LicenseAssetGroupId component of the ARN. */
		readonly licenseAssetGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:license-manager:${props.region ?? "*"}:${props.account ?? "*"}:license-asset-group:${props.licenseAssetGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the license-asset-group resource.
	 */
	static isValidLicenseAssetGroupArn(arn: string): boolean {
		return LicenseAssetGroupArnRegex.test(arn);
	}

	/**
	 * Parses a license-asset-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLicenseAssetGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		licenseAssetGroupId: string;
	} {
		const match = LicenseAssetGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid license-asset-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			licenseAssetGroupId: match.groups!.licenseAssetGroupId,
		};
	}

	/**
	 * Builds an ARN for the license-asset-ruleset resource.
	 */
	static licenseAssetRuleset(props: {
		/** The LicenseAssetRulesetId component of the ARN. */
		readonly licenseAssetRulesetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:license-manager:${props.region ?? "*"}:${props.account ?? "*"}:license-asset-ruleset:${props.licenseAssetRulesetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the license-asset-ruleset resource.
	 */
	static isValidLicenseAssetRulesetArn(arn: string): boolean {
		return LicenseAssetRulesetArnRegex.test(arn);
	}

	/**
	 * Parses a license-asset-ruleset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLicenseAssetRulesetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		licenseAssetRulesetId: string;
	} {
		const match = LicenseAssetRulesetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid license-asset-ruleset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			licenseAssetRulesetId: match.groups!.licenseAssetRulesetId,
		};
	}

	/**
	 * Builds an ARN for the license-configuration resource.
	 */
	static licenseConfiguration(props: {
		/** The LicenseConfigurationId component of the ARN. */
		readonly licenseConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:license-manager:${props.region ?? "*"}:${props.account ?? "*"}:license-configuration:${props.licenseConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the license-configuration resource.
	 */
	static isValidLicenseConfigurationArn(arn: string): boolean {
		return LicenseConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a license-configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLicenseConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		licenseConfigurationId: string;
	} {
		const match = LicenseConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid license-configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			licenseConfigurationId: match.groups!.licenseConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the report-generator resource.
	 */
	static reportGenerator(props: {
		/** The ReportGeneratorId component of the ARN. */
		readonly reportGeneratorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:license-manager:${props.region ?? "*"}:${props.account ?? "*"}:report-generator:${props.reportGeneratorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the report-generator resource.
	 */
	static isValidReportGeneratorArn(arn: string): boolean {
		return ReportGeneratorArnRegex.test(arn);
	}

	/**
	 * Parses a report-generator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReportGeneratorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reportGeneratorId: string;
	} {
		const match = ReportGeneratorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid report-generator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reportGeneratorId: match.groups!.reportGeneratorId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for license-manager.
 */
export class LicenseManagerOperations {
	/** IAM actions required for the AcceptGrant API call. */
	static readonly ACCEPT_GRANT: string[] = ["license-manager:AcceptGrant"];
	/** IAM actions required for the CheckInLicense API call. */
	static readonly CHECK_IN_LICENSE: string[] = [
		"license-manager:CheckInLicense",
	];
	/** IAM actions required for the CheckoutBorrowLicense API call. */
	static readonly CHECKOUT_BORROW_LICENSE: string[] = [
		"license-manager:CheckoutBorrowLicense",
	];
	/** IAM actions required for the CheckoutLicense API call. */
	static readonly CHECKOUT_LICENSE: string[] = [
		"license-manager:CheckoutLicense",
	];
	/** IAM actions required for the CreateGrant API call. */
	static readonly CREATE_GRANT: string[] = [
		"license-manager:CreateGrant",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateGrantVersion API call. */
	static readonly CREATE_GRANT_VERSION: string[] = [
		"license-manager:CreateGrantVersion",
	];
	/** IAM actions required for the CreateLicense API call. */
	static readonly CREATE_LICENSE: string[] = [
		"license-manager:CreateLicense",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseAssetGroup API call. */
	static readonly CREATE_LICENSE_ASSET_GROUP: string[] = [
		"license-manager:CreateLicenseAssetGroup",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseAssetRuleset API call. */
	static readonly CREATE_LICENSE_ASSET_RULESET: string[] = [
		"license-manager:CreateLicenseAssetRuleset",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseConfiguration API call. */
	static readonly CREATE_LICENSE_CONFIGURATION: string[] = [
		"license-manager:CreateLicenseConfiguration",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseConversionTaskForResource API call. */
	static readonly CREATE_LICENSE_CONVERSION_TASK_FOR_RESOURCE: string[] = [
		"license-manager:CreateLicenseConversionTaskForResource",
	];
	/** IAM actions required for the CreateLicenseManagerReportGenerator API call. */
	static readonly CREATE_LICENSE_MANAGER_REPORT_GENERATOR: string[] = [
		"license-manager:CreateLicenseManagerReportGenerator",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseVersion API call. */
	static readonly CREATE_LICENSE_VERSION: string[] = [
		"license-manager:CreateLicenseVersion",
	];
	/** IAM actions required for the CreateToken API call. */
	static readonly CREATE_TOKEN: string[] = ["license-manager:CreateToken"];
	/** IAM actions required for the DeleteGrant API call. */
	static readonly DELETE_GRANT: string[] = ["license-manager:DeleteGrant"];
	/** IAM actions required for the DeleteLicense API call. */
	static readonly DELETE_LICENSE: string[] = ["license-manager:DeleteLicense"];
	/** IAM actions required for the DeleteLicenseAssetGroup API call. */
	static readonly DELETE_LICENSE_ASSET_GROUP: string[] = [
		"license-manager:DeleteLicenseAssetGroup",
	];
	/** IAM actions required for the DeleteLicenseAssetRuleset API call. */
	static readonly DELETE_LICENSE_ASSET_RULESET: string[] = [
		"license-manager:DeleteLicenseAssetRuleset",
	];
	/** IAM actions required for the DeleteLicenseConfiguration API call. */
	static readonly DELETE_LICENSE_CONFIGURATION: string[] = [
		"license-manager:DeleteLicenseConfiguration",
	];
	/** IAM actions required for the DeleteLicenseManagerReportGenerator API call. */
	static readonly DELETE_LICENSE_MANAGER_REPORT_GENERATOR: string[] = [
		"license-manager:DeleteLicenseManagerReportGenerator",
	];
	/** IAM actions required for the DeleteToken API call. */
	static readonly DELETE_TOKEN: string[] = ["license-manager:DeleteToken"];
	/** IAM actions required for the ExtendLicenseConsumption API call. */
	static readonly EXTEND_LICENSE_CONSUMPTION: string[] = [
		"license-manager:ExtendLicenseConsumption",
	];
	/** IAM actions required for the GetAccessToken API call. */
	static readonly GET_ACCESS_TOKEN: string[] = [
		"license-manager:GetAccessToken",
	];
	/** IAM actions required for the GetGrant API call. */
	static readonly GET_GRANT: string[] = ["license-manager:GetGrant"];
	/** IAM actions required for the GetLicense API call. */
	static readonly GET_LICENSE: string[] = ["license-manager:GetLicense"];
	/** IAM actions required for the GetLicenseAssetGroup API call. */
	static readonly GET_LICENSE_ASSET_GROUP: string[] = [
		"license-manager:GetLicenseAssetGroup",
	];
	/** IAM actions required for the GetLicenseAssetRuleset API call. */
	static readonly GET_LICENSE_ASSET_RULESET: string[] = [
		"license-manager:GetLicenseAssetRuleset",
	];
	/** IAM actions required for the GetLicenseConfiguration API call. */
	static readonly GET_LICENSE_CONFIGURATION: string[] = [
		"license-manager:GetLicenseConfiguration",
	];
	/** IAM actions required for the GetLicenseConversionTask API call. */
	static readonly GET_LICENSE_CONVERSION_TASK: string[] = [
		"license-manager:GetLicenseConversionTask",
	];
	/** IAM actions required for the GetLicenseManagerReportGenerator API call. */
	static readonly GET_LICENSE_MANAGER_REPORT_GENERATOR: string[] = [
		"license-manager:GetLicenseManagerReportGenerator",
	];
	/** IAM actions required for the GetLicenseUsage API call. */
	static readonly GET_LICENSE_USAGE: string[] = [
		"license-manager:GetLicenseUsage",
	];
	/** IAM actions required for the GetServiceSettings API call. */
	static readonly GET_SERVICE_SETTINGS: string[] = [
		"license-manager:GetServiceSettings",
	];
	/** IAM actions required for the ListAssetsForLicenseAssetGroup API call. */
	static readonly LIST_ASSETS_FOR_LICENSE_ASSET_GROUP: string[] = [
		"license-manager:ListAssetsForLicenseAssetGroup",
	];
	/** IAM actions required for the ListAssociationsForLicenseConfiguration API call. */
	static readonly LIST_ASSOCIATIONS_FOR_LICENSE_CONFIGURATION: string[] = [
		"license-manager:ListAssociationsForLicenseConfiguration",
	];
	/** IAM actions required for the ListDistributedGrants API call. */
	static readonly LIST_DISTRIBUTED_GRANTS: string[] = [
		"license-manager:ListDistributedGrants",
	];
	/** IAM actions required for the ListFailuresForLicenseConfigurationOperations API call. */
	static readonly LIST_FAILURES_FOR_LICENSE_CONFIGURATION_OPERATIONS: string[] =
		["license-manager:ListFailuresForLicenseConfigurationOperations"];
	/** IAM actions required for the ListLicenseAssetGroups API call. */
	static readonly LIST_LICENSE_ASSET_GROUPS: string[] = [
		"license-manager:ListLicenseAssetGroups",
	];
	/** IAM actions required for the ListLicenseAssetRulesets API call. */
	static readonly LIST_LICENSE_ASSET_RULESETS: string[] = [
		"license-manager:ListLicenseAssetRulesets",
	];
	/** IAM actions required for the ListLicenseConfigurations API call. */
	static readonly LIST_LICENSE_CONFIGURATIONS: string[] = [
		"license-manager:ListLicenseConfigurations",
	];
	/** IAM actions required for the ListLicenseConfigurationsForOrganization API call. */
	static readonly LIST_LICENSE_CONFIGURATIONS_FOR_ORGANIZATION: string[] = [
		"license-manager:ListLicenseConfigurationsForOrganization",
	];
	/** IAM actions required for the ListLicenseConversionTasks API call. */
	static readonly LIST_LICENSE_CONVERSION_TASKS: string[] = [
		"license-manager:ListLicenseConversionTasks",
	];
	/** IAM actions required for the ListLicenseManagerReportGenerators API call. */
	static readonly LIST_LICENSE_MANAGER_REPORT_GENERATORS: string[] = [
		"license-manager:ListLicenseManagerReportGenerators",
	];
	/** IAM actions required for the ListLicenseSpecificationsForResource API call. */
	static readonly LIST_LICENSE_SPECIFICATIONS_FOR_RESOURCE: string[] = [
		"license-manager:ListLicenseSpecificationsForResource",
	];
	/** IAM actions required for the ListLicenseVersions API call. */
	static readonly LIST_LICENSE_VERSIONS: string[] = [
		"license-manager:ListLicenseVersions",
	];
	/** IAM actions required for the ListLicenses API call. */
	static readonly LIST_LICENSES: string[] = ["license-manager:ListLicenses"];
	/** IAM actions required for the ListReceivedGrants API call. */
	static readonly LIST_RECEIVED_GRANTS: string[] = [
		"license-manager:ListReceivedGrants",
	];
	/** IAM actions required for the ListReceivedGrantsForOrganization API call. */
	static readonly LIST_RECEIVED_GRANTS_FOR_ORGANIZATION: string[] = [
		"license-manager:ListReceivedGrantsForOrganization",
	];
	/** IAM actions required for the ListReceivedLicenses API call. */
	static readonly LIST_RECEIVED_LICENSES: string[] = [
		"license-manager:ListReceivedLicenses",
	];
	/** IAM actions required for the ListReceivedLicensesForOrganization API call. */
	static readonly LIST_RECEIVED_LICENSES_FOR_ORGANIZATION: string[] = [
		"license-manager:ListReceivedLicensesForOrganization",
	];
	/** IAM actions required for the ListResourceInventory API call. */
	static readonly LIST_RESOURCE_INVENTORY: string[] = [
		"license-manager:ListResourceInventory",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"license-manager:ListTagsForResource",
	];
	/** IAM actions required for the ListTokens API call. */
	static readonly LIST_TOKENS: string[] = ["license-manager:ListTokens"];
	/** IAM actions required for the ListUsageForLicenseConfiguration API call. */
	static readonly LIST_USAGE_FOR_LICENSE_CONFIGURATION: string[] = [
		"license-manager:ListUsageForLicenseConfiguration",
	];
	/** IAM actions required for the RejectGrant API call. */
	static readonly REJECT_GRANT: string[] = ["license-manager:RejectGrant"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["license-manager:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["license-manager:UntagResource"];
	/** IAM actions required for the UpdateLicenseAssetGroup API call. */
	static readonly UPDATE_LICENSE_ASSET_GROUP: string[] = [
		"license-manager:UpdateLicenseAssetGroup",
	];
	/** IAM actions required for the UpdateLicenseAssetRuleset API call. */
	static readonly UPDATE_LICENSE_ASSET_RULESET: string[] = [
		"license-manager:UpdateLicenseAssetRuleset",
	];
	/** IAM actions required for the UpdateLicenseConfiguration API call. */
	static readonly UPDATE_LICENSE_CONFIGURATION: string[] = [
		"license-manager:UpdateLicenseConfiguration",
	];
	/** IAM actions required for the UpdateLicenseManagerReportGenerator API call. */
	static readonly UPDATE_LICENSE_MANAGER_REPORT_GENERATOR: string[] = [
		"license-manager:UpdateLicenseManagerReportGenerator",
	];
	/** IAM actions required for the UpdateLicenseSpecificationsForResource API call. */
	static readonly UPDATE_LICENSE_SPECIFICATIONS_FOR_RESOURCE: string[] = [
		"license-manager:UpdateLicenseSpecificationsForResource",
	];
	/** IAM actions required for the UpdateServiceSettings API call. */
	static readonly UPDATE_SERVICE_SETTINGS: string[] = [
		"license-manager:UpdateServiceSettings",
	];
}

/**
 * Condition key constants and builders for license-manager.
 */
export class LicenseManagerConditions {
	/** Condition keys applicable to the CreateGrant action. */
	static readonly CREATE_GRANT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicense action. */
	static readonly CREATE_LICENSE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseAssetGroup action. */
	static readonly CREATE_LICENSE_ASSET_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseAssetRuleset action. */
	static readonly CREATE_LICENSE_ASSET_RULESET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseConfiguration action. */
	static readonly CREATE_LICENSE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseManagerReportGenerator action. */
	static readonly CREATE_LICENSE_MANAGER_REPORT_GENERATOR_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
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
	/** Condition key: license-manager:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "license-manager:ResourceTag/${TagKey}";

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
	 * Generates a condition block for `license-manager:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "license-manager:ResourceTag/${TagKey}": value } };
	}
}
