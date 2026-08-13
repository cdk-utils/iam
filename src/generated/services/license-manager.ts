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
	static readonly AcceptGrant = "license-manager:AcceptGrant";
	/** [Write] license-manager:CheckInLicense */
	static readonly CheckInLicense = "license-manager:CheckInLicense";
	/** [Write] license-manager:CheckoutBorrowLicense */
	static readonly CheckoutBorrowLicense =
		"license-manager:CheckoutBorrowLicense";
	/** [Write] license-manager:CheckoutLicense */
	static readonly CheckoutLicense = "license-manager:CheckoutLicense";
	/** [Write] license-manager:CreateGrant */
	static readonly CreateGrant = "license-manager:CreateGrant";
	/** [Write] license-manager:CreateGrantVersion */
	static readonly CreateGrantVersion = "license-manager:CreateGrantVersion";
	/** [Write] license-manager:CreateLicense */
	static readonly CreateLicense = "license-manager:CreateLicense";
	/** [Write] license-manager:CreateLicenseAssetGroup */
	static readonly CreateLicenseAssetGroup =
		"license-manager:CreateLicenseAssetGroup";
	/** [Write] license-manager:CreateLicenseAssetRuleset */
	static readonly CreateLicenseAssetRuleset =
		"license-manager:CreateLicenseAssetRuleset";
	/** [Write] license-manager:CreateLicenseConfiguration */
	static readonly CreateLicenseConfiguration =
		"license-manager:CreateLicenseConfiguration";
	/** [Write] license-manager:CreateLicenseConversionTaskForResource */
	static readonly CreateLicenseConversionTaskForResource =
		"license-manager:CreateLicenseConversionTaskForResource";
	/** [Write] license-manager:CreateLicenseManagerReportGenerator */
	static readonly CreateLicenseManagerReportGenerator =
		"license-manager:CreateLicenseManagerReportGenerator";
	/** [Write] license-manager:CreateLicenseVersion */
	static readonly CreateLicenseVersion = "license-manager:CreateLicenseVersion";
	/** [Write] license-manager:CreateToken */
	static readonly CreateToken = "license-manager:CreateToken";
	/** [Write] license-manager:DeleteGrant */
	static readonly DeleteGrant = "license-manager:DeleteGrant";
	/** [Write] license-manager:DeleteLicense */
	static readonly DeleteLicense = "license-manager:DeleteLicense";
	/** [Write] license-manager:DeleteLicenseAssetGroup */
	static readonly DeleteLicenseAssetGroup =
		"license-manager:DeleteLicenseAssetGroup";
	/** [Write] license-manager:DeleteLicenseAssetRuleset */
	static readonly DeleteLicenseAssetRuleset =
		"license-manager:DeleteLicenseAssetRuleset";
	/** [Write] license-manager:DeleteLicenseConfiguration */
	static readonly DeleteLicenseConfiguration =
		"license-manager:DeleteLicenseConfiguration";
	/** [Write] license-manager:DeleteLicenseManagerReportGenerator */
	static readonly DeleteLicenseManagerReportGenerator =
		"license-manager:DeleteLicenseManagerReportGenerator";
	/** [Write] license-manager:DeleteToken */
	static readonly DeleteToken = "license-manager:DeleteToken";
	/** [Write] license-manager:ExtendLicenseConsumption */
	static readonly ExtendLicenseConsumption =
		"license-manager:ExtendLicenseConsumption";
	/** [Read] license-manager:GetAccessToken */
	static readonly actionGetAccessToken = "license-manager:GetAccessToken";
	/** [Read] license-manager:GetGrant */
	static readonly actionGetGrant = "license-manager:GetGrant";
	/** [Read] license-manager:GetLicense */
	static readonly actionGetLicense = "license-manager:GetLicense";
	/** [Read] license-manager:GetLicenseAssetGroup */
	static readonly actionGetLicenseAssetGroup =
		"license-manager:GetLicenseAssetGroup";
	/** [Read] license-manager:GetLicenseAssetRuleset */
	static readonly actionGetLicenseAssetRuleset =
		"license-manager:GetLicenseAssetRuleset";
	/** [Read] license-manager:GetLicenseConfiguration */
	static readonly actionGetLicenseConfiguration =
		"license-manager:GetLicenseConfiguration";
	/** [Read] license-manager:GetLicenseConversionTask */
	static readonly actionGetLicenseConversionTask =
		"license-manager:GetLicenseConversionTask";
	/** [Read] license-manager:GetLicenseManagerReportGenerator */
	static readonly actionGetLicenseManagerReportGenerator =
		"license-manager:GetLicenseManagerReportGenerator";
	/** [Read] license-manager:GetLicenseUsage */
	static readonly actionGetLicenseUsage = "license-manager:GetLicenseUsage";
	/** [List] license-manager:GetServiceSettings */
	static readonly actionGetServiceSettings =
		"license-manager:GetServiceSettings";
	/** [List] license-manager:ListAssetsForLicenseAssetGroup */
	static readonly ListAssetsForLicenseAssetGroup =
		"license-manager:ListAssetsForLicenseAssetGroup";
	/** [List] license-manager:ListAssociationsForLicenseConfiguration */
	static readonly ListAssociationsForLicenseConfiguration =
		"license-manager:ListAssociationsForLicenseConfiguration";
	/** [List] license-manager:ListDistributedGrants */
	static readonly ListDistributedGrants =
		"license-manager:ListDistributedGrants";
	/** [List] license-manager:ListFailuresForLicenseConfigurationOperations */
	static readonly ListFailuresForLicenseConfigurationOperations =
		"license-manager:ListFailuresForLicenseConfigurationOperations";
	/** [List] license-manager:ListLicenseAssetGroups */
	static readonly ListLicenseAssetGroups =
		"license-manager:ListLicenseAssetGroups";
	/** [List] license-manager:ListLicenseAssetRulesets */
	static readonly ListLicenseAssetRulesets =
		"license-manager:ListLicenseAssetRulesets";
	/** [List] license-manager:ListLicenseConfigurations */
	static readonly ListLicenseConfigurations =
		"license-manager:ListLicenseConfigurations";
	/** [List] license-manager:ListLicenseConfigurationsForOrganization */
	static readonly ListLicenseConfigurationsForOrganization =
		"license-manager:ListLicenseConfigurationsForOrganization";
	/** [List] license-manager:ListLicenseConversionTasks */
	static readonly ListLicenseConversionTasks =
		"license-manager:ListLicenseConversionTasks";
	/** [List] license-manager:ListLicenseManagerReportGenerators */
	static readonly ListLicenseManagerReportGenerators =
		"license-manager:ListLicenseManagerReportGenerators";
	/** [List] license-manager:ListLicenseSpecificationsForResource */
	static readonly ListLicenseSpecificationsForResource =
		"license-manager:ListLicenseSpecificationsForResource";
	/** [List] license-manager:ListLicenseVersions */
	static readonly ListLicenseVersions = "license-manager:ListLicenseVersions";
	/** [Read] license-manager:ListLicenses */
	static readonly ListLicenses = "license-manager:ListLicenses";
	/** [List] license-manager:ListReceivedGrants */
	static readonly ListReceivedGrants = "license-manager:ListReceivedGrants";
	/** [List] license-manager:ListReceivedGrantsForOrganization */
	static readonly ListReceivedGrantsForOrganization =
		"license-manager:ListReceivedGrantsForOrganization";
	/** [List] license-manager:ListReceivedLicenses */
	static readonly ListReceivedLicenses = "license-manager:ListReceivedLicenses";
	/** [List] license-manager:ListReceivedLicensesForOrganization */
	static readonly ListReceivedLicensesForOrganization =
		"license-manager:ListReceivedLicensesForOrganization";
	/** [List] license-manager:ListResourceInventory */
	static readonly ListResourceInventory =
		"license-manager:ListResourceInventory";
	/** [Read] license-manager:ListTagsForResource */
	static readonly ListTagsForResource = "license-manager:ListTagsForResource";
	/** [List] license-manager:ListTokens */
	static readonly ListTokens = "license-manager:ListTokens";
	/** [List] license-manager:ListUsageForLicenseConfiguration */
	static readonly ListUsageForLicenseConfiguration =
		"license-manager:ListUsageForLicenseConfiguration";
	/** [Write] license-manager:RejectGrant */
	static readonly RejectGrant = "license-manager:RejectGrant";
	/** [Tagging] license-manager:TagResource */
	static readonly TagResource = "license-manager:TagResource";
	/** [Tagging] license-manager:UntagResource */
	static readonly UntagResource = "license-manager:UntagResource";
	/** [Write] license-manager:UpdateLicenseAssetGroup */
	static readonly UpdateLicenseAssetGroup =
		"license-manager:UpdateLicenseAssetGroup";
	/** [Write] license-manager:UpdateLicenseAssetRuleset */
	static readonly UpdateLicenseAssetRuleset =
		"license-manager:UpdateLicenseAssetRuleset";
	/** [Write] license-manager:UpdateLicenseConfiguration */
	static readonly UpdateLicenseConfiguration =
		"license-manager:UpdateLicenseConfiguration";
	/** [Write] license-manager:UpdateLicenseManagerReportGenerator */
	static readonly UpdateLicenseManagerReportGenerator =
		"license-manager:UpdateLicenseManagerReportGenerator";
	/** [Write] license-manager:UpdateLicenseSpecificationsForResource */
	static readonly UpdateLicenseSpecificationsForResource =
		"license-manager:UpdateLicenseSpecificationsForResource";
	/** [PermissionManagement] license-manager:UpdateServiceSettings */
	static readonly UpdateServiceSettings =
		"license-manager:UpdateServiceSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		LicenseManagerActions.actionGetAccessToken,
		LicenseManagerActions.actionGetGrant,
		LicenseManagerActions.actionGetLicense,
		LicenseManagerActions.actionGetLicenseAssetGroup,
		LicenseManagerActions.actionGetLicenseAssetRuleset,
		LicenseManagerActions.actionGetLicenseConfiguration,
		LicenseManagerActions.actionGetLicenseConversionTask,
		LicenseManagerActions.actionGetLicenseManagerReportGenerator,
		LicenseManagerActions.actionGetLicenseUsage,
		LicenseManagerActions.ListLicenses,
		LicenseManagerActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		LicenseManagerActions.AcceptGrant,
		LicenseManagerActions.CheckInLicense,
		LicenseManagerActions.CheckoutBorrowLicense,
		LicenseManagerActions.CheckoutLicense,
		LicenseManagerActions.CreateGrant,
		LicenseManagerActions.CreateGrantVersion,
		LicenseManagerActions.CreateLicense,
		LicenseManagerActions.CreateLicenseAssetGroup,
		LicenseManagerActions.CreateLicenseAssetRuleset,
		LicenseManagerActions.CreateLicenseConfiguration,
		LicenseManagerActions.CreateLicenseConversionTaskForResource,
		LicenseManagerActions.CreateLicenseManagerReportGenerator,
		LicenseManagerActions.CreateLicenseVersion,
		LicenseManagerActions.CreateToken,
		LicenseManagerActions.DeleteGrant,
		LicenseManagerActions.DeleteLicense,
		LicenseManagerActions.DeleteLicenseAssetGroup,
		LicenseManagerActions.DeleteLicenseAssetRuleset,
		LicenseManagerActions.DeleteLicenseConfiguration,
		LicenseManagerActions.DeleteLicenseManagerReportGenerator,
		LicenseManagerActions.DeleteToken,
		LicenseManagerActions.ExtendLicenseConsumption,
		LicenseManagerActions.RejectGrant,
		LicenseManagerActions.UpdateLicenseAssetGroup,
		LicenseManagerActions.UpdateLicenseAssetRuleset,
		LicenseManagerActions.UpdateLicenseConfiguration,
		LicenseManagerActions.UpdateLicenseManagerReportGenerator,
		LicenseManagerActions.UpdateLicenseSpecificationsForResource,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		LicenseManagerActions.actionGetServiceSettings,
		LicenseManagerActions.ListAssetsForLicenseAssetGroup,
		LicenseManagerActions.ListAssociationsForLicenseConfiguration,
		LicenseManagerActions.ListDistributedGrants,
		LicenseManagerActions.ListFailuresForLicenseConfigurationOperations,
		LicenseManagerActions.ListLicenseAssetGroups,
		LicenseManagerActions.ListLicenseAssetRulesets,
		LicenseManagerActions.ListLicenseConfigurations,
		LicenseManagerActions.ListLicenseConfigurationsForOrganization,
		LicenseManagerActions.ListLicenseConversionTasks,
		LicenseManagerActions.ListLicenseManagerReportGenerators,
		LicenseManagerActions.ListLicenseSpecificationsForResource,
		LicenseManagerActions.ListLicenseVersions,
		LicenseManagerActions.ListReceivedGrants,
		LicenseManagerActions.ListReceivedGrantsForOrganization,
		LicenseManagerActions.ListReceivedLicenses,
		LicenseManagerActions.ListReceivedLicensesForOrganization,
		LicenseManagerActions.ListResourceInventory,
		LicenseManagerActions.ListTokens,
		LicenseManagerActions.ListUsageForLicenseConfiguration,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		LicenseManagerActions.UpdateServiceSettings,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		LicenseManagerActions.TagResource,
		LicenseManagerActions.UntagResource,
	];
}

/**
 * Properties for building a grant ARN.
 */
export interface LicenseManagerGrantArnProps {
	/** The GrantId component of the ARN. */
	readonly grantId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a grant ARN.
 */
export interface LicenseManagerGrantArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GrantId component. */
	readonly grantId: string;
}

/**
 * Properties for building a license ARN.
 */
export interface LicenseManagerLicenseArnProps {
	/** The LicenseId component of the ARN. */
	readonly licenseId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a license ARN.
 */
export interface LicenseManagerLicenseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LicenseId component. */
	readonly licenseId: string;
}

/**
 * Properties for building a license-asset-group ARN.
 */
export interface LicenseManagerLicenseAssetGroupArnProps {
	/** The LicenseAssetGroupId component of the ARN. */
	readonly licenseAssetGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a license-asset-group ARN.
 */
export interface LicenseManagerLicenseAssetGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LicenseAssetGroupId component. */
	readonly licenseAssetGroupId: string;
}

/**
 * Properties for building a license-asset-ruleset ARN.
 */
export interface LicenseManagerLicenseAssetRulesetArnProps {
	/** The LicenseAssetRulesetId component of the ARN. */
	readonly licenseAssetRulesetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a license-asset-ruleset ARN.
 */
export interface LicenseManagerLicenseAssetRulesetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LicenseAssetRulesetId component. */
	readonly licenseAssetRulesetId: string;
}

/**
 * Properties for building a license-configuration ARN.
 */
export interface LicenseManagerLicenseConfigurationArnProps {
	/** The LicenseConfigurationId component of the ARN. */
	readonly licenseConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a license-configuration ARN.
 */
export interface LicenseManagerLicenseConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LicenseConfigurationId component. */
	readonly licenseConfigurationId: string;
}

/**
 * Properties for building a report-generator ARN.
 */
export interface LicenseManagerReportGeneratorArnProps {
	/** The ReportGeneratorId component of the ARN. */
	readonly reportGeneratorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a report-generator ARN.
 */
export interface LicenseManagerReportGeneratorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReportGeneratorId component. */
	readonly reportGeneratorId: string;
}

const GrantArnRegex =
	/^arn:(?<partition>[^:]+):license-manager::(?<account>[^:]*):grant:(?<grantId>[^:/?]+)$/;
const LicenseArnRegex =
	/^arn:(?<partition>[^:]+):license-manager::(?<account>[^:]*):license:(?<licenseId>[^:/?]+)$/;
const LicenseAssetGroupArnRegex =
	/^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):license-asset-group:(?<licenseAssetGroupId>[^:/?]+)$/;
const LicenseAssetRulesetArnRegex =
	/^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):license-asset-ruleset:(?<licenseAssetRulesetId>[^:/?]+)$/;
const LicenseConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):license-configuration:(?<licenseConfigurationId>[^:/?]+)$/;
const ReportGeneratorArnRegex =
	/^arn:(?<partition>[^:]+):license-manager:(?<region>[^:]*):(?<account>[^:]*):report-generator:(?<reportGeneratorId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for license-manager resources.
 */
export class LicenseManagerResources {
	/**
	 * Builds an ARN for the grant resource.
	 */
	static grant(props: LicenseManagerGrantArnProps): string {
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
	static parseGrantArn(arn: string): LicenseManagerGrantArnComponents {
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
	static license(props: LicenseManagerLicenseArnProps): string {
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
	static parseLicenseArn(arn: string): LicenseManagerLicenseArnComponents {
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
	static licenseAssetGroup(
		props: LicenseManagerLicenseAssetGroupArnProps,
	): string {
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
	static parseLicenseAssetGroupArn(
		arn: string,
	): LicenseManagerLicenseAssetGroupArnComponents {
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
	static licenseAssetRuleset(
		props: LicenseManagerLicenseAssetRulesetArnProps,
	): string {
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
	static parseLicenseAssetRulesetArn(
		arn: string,
	): LicenseManagerLicenseAssetRulesetArnComponents {
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
	static licenseConfiguration(
		props: LicenseManagerLicenseConfigurationArnProps,
	): string {
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
	static parseLicenseConfigurationArn(
		arn: string,
	): LicenseManagerLicenseConfigurationArnComponents {
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
	static reportGenerator(props: LicenseManagerReportGeneratorArnProps): string {
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
	static parseReportGeneratorArn(
		arn: string,
	): LicenseManagerReportGeneratorArnComponents {
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
	static readonly AcceptGrant: string[] = ["license-manager:AcceptGrant"];
	/** IAM actions required for the CheckInLicense API call. */
	static readonly CheckInLicense: string[] = ["license-manager:CheckInLicense"];
	/** IAM actions required for the CheckoutBorrowLicense API call. */
	static readonly CheckoutBorrowLicense: string[] = [
		"license-manager:CheckoutBorrowLicense",
	];
	/** IAM actions required for the CheckoutLicense API call. */
	static readonly CheckoutLicense: string[] = [
		"license-manager:CheckoutLicense",
	];
	/** IAM actions required for the CreateGrant API call. */
	static readonly CreateGrant: string[] = [
		"license-manager:CreateGrant",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateGrantVersion API call. */
	static readonly CreateGrantVersion: string[] = [
		"license-manager:CreateGrantVersion",
	];
	/** IAM actions required for the CreateLicense API call. */
	static readonly CreateLicense: string[] = [
		"license-manager:CreateLicense",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseAssetGroup API call. */
	static readonly CreateLicenseAssetGroup: string[] = [
		"license-manager:CreateLicenseAssetGroup",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseAssetRuleset API call. */
	static readonly CreateLicenseAssetRuleset: string[] = [
		"license-manager:CreateLicenseAssetRuleset",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseConfiguration API call. */
	static readonly CreateLicenseConfiguration: string[] = [
		"license-manager:CreateLicenseConfiguration",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseConversionTaskForResource API call. */
	static readonly CreateLicenseConversionTaskForResource: string[] = [
		"license-manager:CreateLicenseConversionTaskForResource",
	];
	/** IAM actions required for the CreateLicenseManagerReportGenerator API call. */
	static readonly CreateLicenseManagerReportGenerator: string[] = [
		"license-manager:CreateLicenseManagerReportGenerator",
		"license-manager:TagResource",
	];
	/** IAM actions required for the CreateLicenseVersion API call. */
	static readonly CreateLicenseVersion: string[] = [
		"license-manager:CreateLicenseVersion",
	];
	/** IAM actions required for the CreateToken API call. */
	static readonly CreateToken: string[] = ["license-manager:CreateToken"];
	/** IAM actions required for the DeleteGrant API call. */
	static readonly DeleteGrant: string[] = ["license-manager:DeleteGrant"];
	/** IAM actions required for the DeleteLicense API call. */
	static readonly DeleteLicense: string[] = ["license-manager:DeleteLicense"];
	/** IAM actions required for the DeleteLicenseAssetGroup API call. */
	static readonly DeleteLicenseAssetGroup: string[] = [
		"license-manager:DeleteLicenseAssetGroup",
	];
	/** IAM actions required for the DeleteLicenseAssetRuleset API call. */
	static readonly DeleteLicenseAssetRuleset: string[] = [
		"license-manager:DeleteLicenseAssetRuleset",
	];
	/** IAM actions required for the DeleteLicenseConfiguration API call. */
	static readonly DeleteLicenseConfiguration: string[] = [
		"license-manager:DeleteLicenseConfiguration",
	];
	/** IAM actions required for the DeleteLicenseManagerReportGenerator API call. */
	static readonly DeleteLicenseManagerReportGenerator: string[] = [
		"license-manager:DeleteLicenseManagerReportGenerator",
	];
	/** IAM actions required for the DeleteToken API call. */
	static readonly DeleteToken: string[] = ["license-manager:DeleteToken"];
	/** IAM actions required for the ExtendLicenseConsumption API call. */
	static readonly ExtendLicenseConsumption: string[] = [
		"license-manager:ExtendLicenseConsumption",
	];
	/** IAM actions required for the GetAccessToken API call. */
	static readonly opGetAccessToken: string[] = [
		"license-manager:GetAccessToken",
	];
	/** IAM actions required for the GetGrant API call. */
	static readonly opGetGrant: string[] = ["license-manager:GetGrant"];
	/** IAM actions required for the GetLicense API call. */
	static readonly opGetLicense: string[] = ["license-manager:GetLicense"];
	/** IAM actions required for the GetLicenseAssetGroup API call. */
	static readonly opGetLicenseAssetGroup: string[] = [
		"license-manager:GetLicenseAssetGroup",
	];
	/** IAM actions required for the GetLicenseAssetRuleset API call. */
	static readonly opGetLicenseAssetRuleset: string[] = [
		"license-manager:GetLicenseAssetRuleset",
	];
	/** IAM actions required for the GetLicenseConfiguration API call. */
	static readonly opGetLicenseConfiguration: string[] = [
		"license-manager:GetLicenseConfiguration",
	];
	/** IAM actions required for the GetLicenseConversionTask API call. */
	static readonly opGetLicenseConversionTask: string[] = [
		"license-manager:GetLicenseConversionTask",
	];
	/** IAM actions required for the GetLicenseManagerReportGenerator API call. */
	static readonly opGetLicenseManagerReportGenerator: string[] = [
		"license-manager:GetLicenseManagerReportGenerator",
	];
	/** IAM actions required for the GetLicenseUsage API call. */
	static readonly opGetLicenseUsage: string[] = [
		"license-manager:GetLicenseUsage",
	];
	/** IAM actions required for the GetServiceSettings API call. */
	static readonly opGetServiceSettings: string[] = [
		"license-manager:GetServiceSettings",
	];
	/** IAM actions required for the ListAssetsForLicenseAssetGroup API call. */
	static readonly ListAssetsForLicenseAssetGroup: string[] = [
		"license-manager:ListAssetsForLicenseAssetGroup",
	];
	/** IAM actions required for the ListAssociationsForLicenseConfiguration API call. */
	static readonly ListAssociationsForLicenseConfiguration: string[] = [
		"license-manager:ListAssociationsForLicenseConfiguration",
	];
	/** IAM actions required for the ListDistributedGrants API call. */
	static readonly ListDistributedGrants: string[] = [
		"license-manager:ListDistributedGrants",
	];
	/** IAM actions required for the ListFailuresForLicenseConfigurationOperations API call. */
	static readonly ListFailuresForLicenseConfigurationOperations: string[] = [
		"license-manager:ListFailuresForLicenseConfigurationOperations",
	];
	/** IAM actions required for the ListLicenseAssetGroups API call. */
	static readonly ListLicenseAssetGroups: string[] = [
		"license-manager:ListLicenseAssetGroups",
	];
	/** IAM actions required for the ListLicenseAssetRulesets API call. */
	static readonly ListLicenseAssetRulesets: string[] = [
		"license-manager:ListLicenseAssetRulesets",
	];
	/** IAM actions required for the ListLicenseConfigurations API call. */
	static readonly ListLicenseConfigurations: string[] = [
		"license-manager:ListLicenseConfigurations",
	];
	/** IAM actions required for the ListLicenseConfigurationsForOrganization API call. */
	static readonly ListLicenseConfigurationsForOrganization: string[] = [
		"license-manager:ListLicenseConfigurationsForOrganization",
	];
	/** IAM actions required for the ListLicenseConversionTasks API call. */
	static readonly ListLicenseConversionTasks: string[] = [
		"license-manager:ListLicenseConversionTasks",
	];
	/** IAM actions required for the ListLicenseManagerReportGenerators API call. */
	static readonly ListLicenseManagerReportGenerators: string[] = [
		"license-manager:ListLicenseManagerReportGenerators",
	];
	/** IAM actions required for the ListLicenseSpecificationsForResource API call. */
	static readonly ListLicenseSpecificationsForResource: string[] = [
		"license-manager:ListLicenseSpecificationsForResource",
	];
	/** IAM actions required for the ListLicenseVersions API call. */
	static readonly ListLicenseVersions: string[] = [
		"license-manager:ListLicenseVersions",
	];
	/** IAM actions required for the ListLicenses API call. */
	static readonly ListLicenses: string[] = ["license-manager:ListLicenses"];
	/** IAM actions required for the ListReceivedGrants API call. */
	static readonly ListReceivedGrants: string[] = [
		"license-manager:ListReceivedGrants",
	];
	/** IAM actions required for the ListReceivedGrantsForOrganization API call. */
	static readonly ListReceivedGrantsForOrganization: string[] = [
		"license-manager:ListReceivedGrantsForOrganization",
	];
	/** IAM actions required for the ListReceivedLicenses API call. */
	static readonly ListReceivedLicenses: string[] = [
		"license-manager:ListReceivedLicenses",
	];
	/** IAM actions required for the ListReceivedLicensesForOrganization API call. */
	static readonly ListReceivedLicensesForOrganization: string[] = [
		"license-manager:ListReceivedLicensesForOrganization",
	];
	/** IAM actions required for the ListResourceInventory API call. */
	static readonly ListResourceInventory: string[] = [
		"license-manager:ListResourceInventory",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"license-manager:ListTagsForResource",
	];
	/** IAM actions required for the ListTokens API call. */
	static readonly ListTokens: string[] = ["license-manager:ListTokens"];
	/** IAM actions required for the ListUsageForLicenseConfiguration API call. */
	static readonly ListUsageForLicenseConfiguration: string[] = [
		"license-manager:ListUsageForLicenseConfiguration",
	];
	/** IAM actions required for the RejectGrant API call. */
	static readonly RejectGrant: string[] = ["license-manager:RejectGrant"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["license-manager:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["license-manager:UntagResource"];
	/** IAM actions required for the UpdateLicenseAssetGroup API call. */
	static readonly UpdateLicenseAssetGroup: string[] = [
		"license-manager:UpdateLicenseAssetGroup",
	];
	/** IAM actions required for the UpdateLicenseAssetRuleset API call. */
	static readonly UpdateLicenseAssetRuleset: string[] = [
		"license-manager:UpdateLicenseAssetRuleset",
	];
	/** IAM actions required for the UpdateLicenseConfiguration API call. */
	static readonly UpdateLicenseConfiguration: string[] = [
		"license-manager:UpdateLicenseConfiguration",
	];
	/** IAM actions required for the UpdateLicenseManagerReportGenerator API call. */
	static readonly UpdateLicenseManagerReportGenerator: string[] = [
		"license-manager:UpdateLicenseManagerReportGenerator",
	];
	/** IAM actions required for the UpdateLicenseSpecificationsForResource API call. */
	static readonly UpdateLicenseSpecificationsForResource: string[] = [
		"license-manager:UpdateLicenseSpecificationsForResource",
	];
	/** IAM actions required for the UpdateServiceSettings API call. */
	static readonly UpdateServiceSettings: string[] = [
		"license-manager:UpdateServiceSettings",
	];
}

/**
 * Condition key constants and builders for license-manager.
 */
export class LicenseManagerConditions {
	/** Condition keys applicable to the CreateGrant action. */
	static readonly CreateGrantConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicense action. */
	static readonly CreateLicenseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseAssetGroup action. */
	static readonly CreateLicenseAssetGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseAssetRuleset action. */
	static readonly CreateLicenseAssetRulesetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseConfiguration action. */
	static readonly CreateLicenseConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLicenseManagerReportGenerator action. */
	static readonly CreateLicenseManagerReportGeneratorConditionKeys: string[] = [
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
}
