// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/controltower.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the controltower service.
 */
export class ControltowerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "controltower";

	/** [Write] controltower:CreateLandingZone */
	static readonly CreateLandingZone = "controltower:CreateLandingZone";
	/** [Write] controltower:CreateManagedAccount */
	static readonly CreateManagedAccount = "controltower:CreateManagedAccount";
	/** [Write] controltower:DeleteLandingZone */
	static readonly DeleteLandingZone = "controltower:DeleteLandingZone";
	/** [Write] controltower:DeregisterManagedAccount */
	static readonly DeregisterManagedAccount =
		"controltower:DeregisterManagedAccount";
	/** [Write] controltower:DeregisterOrganizationalUnit */
	static readonly DeregisterOrganizationalUnit =
		"controltower:DeregisterOrganizationalUnit";
	/** [Read] controltower:DescribeAccountFactoryConfig */
	static readonly DescribeAccountFactoryConfig =
		"controltower:DescribeAccountFactoryConfig";
	/** [Read] controltower:DescribeCoreService */
	static readonly DescribeCoreService = "controltower:DescribeCoreService";
	/** [Read] controltower:DescribeGuardrail */
	static readonly DescribeGuardrail = "controltower:DescribeGuardrail";
	/** [Read] controltower:DescribeGuardrailForTarget */
	static readonly DescribeGuardrailForTarget =
		"controltower:DescribeGuardrailForTarget";
	/** [Read] controltower:DescribeLandingZoneConfiguration */
	static readonly DescribeLandingZoneConfiguration =
		"controltower:DescribeLandingZoneConfiguration";
	/** [Read] controltower:DescribeManagedAccount */
	static readonly DescribeManagedAccount =
		"controltower:DescribeManagedAccount";
	/** [Read] controltower:DescribeManagedOrganizationalUnit */
	static readonly DescribeManagedOrganizationalUnit =
		"controltower:DescribeManagedOrganizationalUnit";
	/** [Read] controltower:DescribeRegisterOrganizationalUnitOperation */
	static readonly DescribeRegisterOrganizationalUnitOperation =
		"controltower:DescribeRegisterOrganizationalUnitOperation";
	/** [Read] controltower:DescribeSingleSignOn */
	static readonly DescribeSingleSignOn = "controltower:DescribeSingleSignOn";
	/** [Write] controltower:DisableBaseline */
	static readonly DisableBaseline = "controltower:DisableBaseline";
	/** [Write] controltower:DisableControl */
	static readonly DisableControl = "controltower:DisableControl";
	/** [Write] controltower:DisableGuardrail */
	static readonly DisableGuardrail = "controltower:DisableGuardrail";
	/** [Write] controltower:EnableBaseline */
	static readonly EnableBaseline = "controltower:EnableBaseline";
	/** [Write] controltower:EnableControl */
	static readonly EnableControl = "controltower:EnableControl";
	/** [Write] controltower:EnableGuardrail */
	static readonly EnableGuardrail = "controltower:EnableGuardrail";
	/** [Read] controltower:GetAccountInfo */
	static readonly actionGetAccountInfo = "controltower:GetAccountInfo";
	/** [Read] controltower:GetAvailableUpdates */
	static readonly actionGetAvailableUpdates =
		"controltower:GetAvailableUpdates";
	/** [Read] controltower:GetBaseline */
	static readonly actionGetBaseline = "controltower:GetBaseline";
	/** [Read] controltower:GetBaselineOperation */
	static readonly actionGetBaselineOperation =
		"controltower:GetBaselineOperation";
	/** [Read] controltower:GetControlOperation */
	static readonly actionGetControlOperation =
		"controltower:GetControlOperation";
	/** [Read] controltower:GetEnabledBaseline */
	static readonly actionGetEnabledBaseline = "controltower:GetEnabledBaseline";
	/** [Read] controltower:GetEnabledControl */
	static readonly actionGetEnabledControl = "controltower:GetEnabledControl";
	/** [Read] controltower:GetGuardrailComplianceStatus */
	static readonly actionGetGuardrailComplianceStatus =
		"controltower:GetGuardrailComplianceStatus";
	/** [Read] controltower:GetHomeRegion */
	static readonly actionGetHomeRegion = "controltower:GetHomeRegion";
	/** [Read] controltower:GetLandingZone */
	static readonly actionGetLandingZone = "controltower:GetLandingZone";
	/** [Read] controltower:GetLandingZoneDriftStatus */
	static readonly actionGetLandingZoneDriftStatus =
		"controltower:GetLandingZoneDriftStatus";
	/** [Read] controltower:GetLandingZoneOperation */
	static readonly actionGetLandingZoneOperation =
		"controltower:GetLandingZoneOperation";
	/** [Read] controltower:GetLandingZoneStatus */
	static readonly actionGetLandingZoneStatus =
		"controltower:GetLandingZoneStatus";
	/** [List] controltower:ListBaselines */
	static readonly ListBaselines = "controltower:ListBaselines";
	/** [List] controltower:ListControlOperations */
	static readonly ListControlOperations = "controltower:ListControlOperations";
	/** [List] controltower:ListDirectoryGroups */
	static readonly ListDirectoryGroups = "controltower:ListDirectoryGroups";
	/** [Read] controltower:ListDriftDetails */
	static readonly ListDriftDetails = "controltower:ListDriftDetails";
	/** [List] controltower:ListEnabledBaselines */
	static readonly ListEnabledBaselines = "controltower:ListEnabledBaselines";
	/** [List] controltower:ListEnabledControls */
	static readonly ListEnabledControls = "controltower:ListEnabledControls";
	/** [List] controltower:ListEnabledGuardrails */
	static readonly ListEnabledGuardrails = "controltower:ListEnabledGuardrails";
	/** [List] controltower:ListExtendGovernancePrecheckDetails */
	static readonly ListExtendGovernancePrecheckDetails =
		"controltower:ListExtendGovernancePrecheckDetails";
	/** [Read] controltower:ListExternalConfigRuleCompliance */
	static readonly ListExternalConfigRuleCompliance =
		"controltower:ListExternalConfigRuleCompliance";
	/** [List] controltower:ListGuardrailViolations */
	static readonly ListGuardrailViolations =
		"controltower:ListGuardrailViolations";
	/** [List] controltower:ListGuardrails */
	static readonly ListGuardrails = "controltower:ListGuardrails";
	/** [List] controltower:ListGuardrailsForTarget */
	static readonly ListGuardrailsForTarget =
		"controltower:ListGuardrailsForTarget";
	/** [List] controltower:ListLandingZoneOperations */
	static readonly ListLandingZoneOperations =
		"controltower:ListLandingZoneOperations";
	/** [List] controltower:ListLandingZones */
	static readonly ListLandingZones = "controltower:ListLandingZones";
	/** [List] controltower:ListManagedAccounts */
	static readonly ListManagedAccounts = "controltower:ListManagedAccounts";
	/** [List] controltower:ListManagedAccountsForGuardrail */
	static readonly ListManagedAccountsForGuardrail =
		"controltower:ListManagedAccountsForGuardrail";
	/** [List] controltower:ListManagedAccountsForParent */
	static readonly ListManagedAccountsForParent =
		"controltower:ListManagedAccountsForParent";
	/** [List] controltower:ListManagedOrganizationalUnits */
	static readonly ListManagedOrganizationalUnits =
		"controltower:ListManagedOrganizationalUnits";
	/** [List] controltower:ListManagedOrganizationalUnitsForGuardrail */
	static readonly ListManagedOrganizationalUnitsForGuardrail =
		"controltower:ListManagedOrganizationalUnitsForGuardrail";
	/** [Read] controltower:ListTagsForResource */
	static readonly ListTagsForResource = "controltower:ListTagsForResource";
	/** [Write] controltower:ManageOrganizationalUnit */
	static readonly ManageOrganizationalUnit =
		"controltower:ManageOrganizationalUnit";
	/** [Read] controltower:PerformPreLaunchChecks */
	static readonly PerformPreLaunchChecks =
		"controltower:PerformPreLaunchChecks";
	/** [Write] controltower:ResetEnabledBaseline */
	static readonly ResetEnabledBaseline = "controltower:ResetEnabledBaseline";
	/** [Write] controltower:ResetEnabledControl */
	static readonly ResetEnabledControl = "controltower:ResetEnabledControl";
	/** [Write] controltower:ResetLandingZone */
	static readonly ResetLandingZone = "controltower:ResetLandingZone";
	/** [Write] controltower:SetupLandingZone */
	static readonly SetupLandingZone = "controltower:SetupLandingZone";
	/** [Tagging] controltower:TagResource */
	static readonly TagResource = "controltower:TagResource";
	/** [Tagging] controltower:UntagResource */
	static readonly UntagResource = "controltower:UntagResource";
	/** [Write] controltower:UpdateAccountFactoryConfig */
	static readonly UpdateAccountFactoryConfig =
		"controltower:UpdateAccountFactoryConfig";
	/** [Write] controltower:UpdateEnabledBaseline */
	static readonly UpdateEnabledBaseline = "controltower:UpdateEnabledBaseline";
	/** [Write] controltower:UpdateEnabledControl */
	static readonly UpdateEnabledControl = "controltower:UpdateEnabledControl";
	/** [Write] controltower:UpdateLandingZone */
	static readonly UpdateLandingZone = "controltower:UpdateLandingZone";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ControltowerActions.DescribeAccountFactoryConfig,
		ControltowerActions.DescribeCoreService,
		ControltowerActions.DescribeGuardrail,
		ControltowerActions.DescribeGuardrailForTarget,
		ControltowerActions.DescribeLandingZoneConfiguration,
		ControltowerActions.DescribeManagedAccount,
		ControltowerActions.DescribeManagedOrganizationalUnit,
		ControltowerActions.DescribeRegisterOrganizationalUnitOperation,
		ControltowerActions.DescribeSingleSignOn,
		ControltowerActions.actionGetAccountInfo,
		ControltowerActions.actionGetAvailableUpdates,
		ControltowerActions.actionGetBaseline,
		ControltowerActions.actionGetBaselineOperation,
		ControltowerActions.actionGetControlOperation,
		ControltowerActions.actionGetEnabledBaseline,
		ControltowerActions.actionGetEnabledControl,
		ControltowerActions.actionGetGuardrailComplianceStatus,
		ControltowerActions.actionGetHomeRegion,
		ControltowerActions.actionGetLandingZone,
		ControltowerActions.actionGetLandingZoneDriftStatus,
		ControltowerActions.actionGetLandingZoneOperation,
		ControltowerActions.actionGetLandingZoneStatus,
		ControltowerActions.ListDriftDetails,
		ControltowerActions.ListExternalConfigRuleCompliance,
		ControltowerActions.ListTagsForResource,
		ControltowerActions.PerformPreLaunchChecks,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ControltowerActions.CreateLandingZone,
		ControltowerActions.CreateManagedAccount,
		ControltowerActions.DeleteLandingZone,
		ControltowerActions.DeregisterManagedAccount,
		ControltowerActions.DeregisterOrganizationalUnit,
		ControltowerActions.DisableBaseline,
		ControltowerActions.DisableControl,
		ControltowerActions.DisableGuardrail,
		ControltowerActions.EnableBaseline,
		ControltowerActions.EnableControl,
		ControltowerActions.EnableGuardrail,
		ControltowerActions.ManageOrganizationalUnit,
		ControltowerActions.ResetEnabledBaseline,
		ControltowerActions.ResetEnabledControl,
		ControltowerActions.ResetLandingZone,
		ControltowerActions.SetupLandingZone,
		ControltowerActions.UpdateAccountFactoryConfig,
		ControltowerActions.UpdateEnabledBaseline,
		ControltowerActions.UpdateEnabledControl,
		ControltowerActions.UpdateLandingZone,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ControltowerActions.ListBaselines,
		ControltowerActions.ListControlOperations,
		ControltowerActions.ListDirectoryGroups,
		ControltowerActions.ListEnabledBaselines,
		ControltowerActions.ListEnabledControls,
		ControltowerActions.ListEnabledGuardrails,
		ControltowerActions.ListExtendGovernancePrecheckDetails,
		ControltowerActions.ListGuardrailViolations,
		ControltowerActions.ListGuardrails,
		ControltowerActions.ListGuardrailsForTarget,
		ControltowerActions.ListLandingZoneOperations,
		ControltowerActions.ListLandingZones,
		ControltowerActions.ListManagedAccounts,
		ControltowerActions.ListManagedAccountsForGuardrail,
		ControltowerActions.ListManagedAccountsForParent,
		ControltowerActions.ListManagedOrganizationalUnits,
		ControltowerActions.ListManagedOrganizationalUnitsForGuardrail,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ControltowerActions.TagResource,
		ControltowerActions.UntagResource,
	];
}

/**
 * Properties for building a Baseline ARN.
 */
export interface ControltowerBaselineArnProps {
	/** The BaselineId component of the ARN. */
	readonly baselineId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Baseline ARN.
 */
export interface ControltowerBaselineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BaselineId component. */
	readonly baselineId: string;
}

/**
 * Properties for building a EnabledBaseline ARN.
 */
export interface ControltowerEnabledBaselineArnProps {
	/** The EnabledBaselineId component of the ARN. */
	readonly enabledBaselineId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a EnabledBaseline ARN.
 */
export interface ControltowerEnabledBaselineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnabledBaselineId component. */
	readonly enabledBaselineId: string;
}

/**
 * Properties for building a EnabledControl ARN.
 */
export interface ControltowerEnabledControlArnProps {
	/** The EnabledControlId component of the ARN. */
	readonly enabledControlId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a EnabledControl ARN.
 */
export interface ControltowerEnabledControlArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnabledControlId component. */
	readonly enabledControlId: string;
}

/**
 * Properties for building a LandingZone ARN.
 */
export interface ControltowerLandingZoneArnProps {
	/** The LandingZoneId component of the ARN. */
	readonly landingZoneId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a LandingZone ARN.
 */
export interface ControltowerLandingZoneArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LandingZoneId component. */
	readonly landingZoneId: string;
}

const BaselineArnRegex =
	/^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*)::baseline\/(?<baselineId>[^:/?]+)$/;
const EnabledBaselineArnRegex =
	/^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*):(?<account>[^:]*):enabledbaseline\/(?<enabledBaselineId>[^:/?]+)$/;
const EnabledControlArnRegex =
	/^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*):(?<account>[^:]*):enabledcontrol\/(?<enabledControlId>[^:/?]+)$/;
const LandingZoneArnRegex =
	/^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*):(?<account>[^:]*):landingzone\/(?<landingZoneId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for controltower resources.
 */
export class ControltowerResources {
	/**
	 * Builds an ARN for the Baseline resource.
	 */
	static baseline(props: ControltowerBaselineArnProps): string {
		return `arn:${props.partition ?? "aws"}:controltower:${props.region ?? "*"}::baseline/${props.baselineId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Baseline resource.
	 */
	static isValidBaselineArn(arn: string): boolean {
		return BaselineArnRegex.test(arn);
	}

	/**
	 * Parses a Baseline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBaselineArn(arn: string): ControltowerBaselineArnComponents {
		const match = BaselineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Baseline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			baselineId: match.groups!.baselineId,
		};
	}

	/**
	 * Builds an ARN for the EnabledBaseline resource.
	 */
	static enabledBaseline(props: ControltowerEnabledBaselineArnProps): string {
		return `arn:${props.partition ?? "aws"}:controltower:${props.region ?? "*"}:${props.account ?? "*"}:enabledbaseline/${props.enabledBaselineId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the EnabledBaseline resource.
	 */
	static isValidEnabledBaselineArn(arn: string): boolean {
		return EnabledBaselineArnRegex.test(arn);
	}

	/**
	 * Parses a EnabledBaseline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnabledBaselineArn(
		arn: string,
	): ControltowerEnabledBaselineArnComponents {
		const match = EnabledBaselineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid EnabledBaseline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			enabledBaselineId: match.groups!.enabledBaselineId,
		};
	}

	/**
	 * Builds an ARN for the EnabledControl resource.
	 */
	static enabledControl(props: ControltowerEnabledControlArnProps): string {
		return `arn:${props.partition ?? "aws"}:controltower:${props.region ?? "*"}:${props.account ?? "*"}:enabledcontrol/${props.enabledControlId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the EnabledControl resource.
	 */
	static isValidEnabledControlArn(arn: string): boolean {
		return EnabledControlArnRegex.test(arn);
	}

	/**
	 * Parses a EnabledControl ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnabledControlArn(
		arn: string,
	): ControltowerEnabledControlArnComponents {
		const match = EnabledControlArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid EnabledControl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			enabledControlId: match.groups!.enabledControlId,
		};
	}

	/**
	 * Builds an ARN for the LandingZone resource.
	 */
	static landingZone(props: ControltowerLandingZoneArnProps): string {
		return `arn:${props.partition ?? "aws"}:controltower:${props.region ?? "*"}:${props.account ?? "*"}:landingzone/${props.landingZoneId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the LandingZone resource.
	 */
	static isValidLandingZoneArn(arn: string): boolean {
		return LandingZoneArnRegex.test(arn);
	}

	/**
	 * Parses a LandingZone ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLandingZoneArn(
		arn: string,
	): ControltowerLandingZoneArnComponents {
		const match = LandingZoneArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid LandingZone ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			landingZoneId: match.groups!.landingZoneId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for controltower.
 */
export class ControltowerOperations {
	/** IAM actions required for the CreateLandingZone API call. */
	static readonly CreateLandingZone: string[] = [
		"controltower:CreateLandingZone",
		"controltower:PerformPreLaunchChecks",
		"controltower:SetupLandingZone",
		"controltower:TagResource",
	];
	/** IAM actions required for the DeleteLandingZone API call. */
	static readonly DeleteLandingZone: string[] = [
		"controltower:DeleteLandingZone",
	];
	/** IAM actions required for the DisableBaseline API call. */
	static readonly DisableBaseline: string[] = [
		"controltower:DeregisterOrganizationalUnit",
		"controltower:DisableBaseline",
	];
	/** IAM actions required for the DisableControl API call. */
	static readonly DisableControl: string[] = [
		"controltower:DisableControl",
		"controltower:DisableGuardrail",
	];
	/** IAM actions required for the EnableBaseline API call. */
	static readonly EnableBaseline: string[] = [
		"controltower:EnableBaseline",
		"controltower:ManageOrganizationalUnit",
		"controltower:TagResource",
	];
	/** IAM actions required for the EnableControl API call. */
	static readonly EnableControl: string[] = [
		"controltower:EnableControl",
		"controltower:EnableGuardrail",
		"controltower:TagResource",
	];
	/** IAM actions required for the GetBaseline API call. */
	static readonly opGetBaseline: string[] = ["controltower:GetBaseline"];
	/** IAM actions required for the GetBaselineOperation API call. */
	static readonly opGetBaselineOperation: string[] = [
		"controltower:DescribeRegisterOrganizationalUnitOperation",
		"controltower:GetBaselineOperation",
	];
	/** IAM actions required for the GetControlOperation API call. */
	static readonly opGetControlOperation: string[] = [
		"controltower:GetControlOperation",
	];
	/** IAM actions required for the GetEnabledBaseline API call. */
	static readonly opGetEnabledBaseline: string[] = [
		"controltower:DescribeManagedAccount",
		"controltower:DescribeManagedOrganizationalUnit",
		"controltower:GetEnabledBaseline",
	];
	/** IAM actions required for the GetEnabledControl API call. */
	static readonly opGetEnabledControl: string[] = [
		"controltower:DescribeGuardrailForTarget",
		"controltower:GetEnabledControl",
	];
	/** IAM actions required for the GetLandingZone API call. */
	static readonly opGetLandingZone: string[] = [
		"controltower:DescribeLandingZoneConfiguration",
		"controltower:GetAvailableUpdates",
		"controltower:GetLandingZone",
		"controltower:GetLandingZoneDriftStatus",
		"controltower:GetLandingZoneStatus",
	];
	/** IAM actions required for the GetLandingZoneOperation API call. */
	static readonly opGetLandingZoneOperation: string[] = [
		"controltower:GetLandingZoneOperation",
		"controltower:GetLandingZoneStatus",
	];
	/** IAM actions required for the ListBaselines API call. */
	static readonly ListBaselines: string[] = ["controltower:ListBaselines"];
	/** IAM actions required for the ListControlOperations API call. */
	static readonly ListControlOperations: string[] = [
		"controltower:ListControlOperations",
	];
	/** IAM actions required for the ListEnabledBaselines API call. */
	static readonly ListEnabledBaselines: string[] = [
		"controltower:ListEnabledBaselines",
		"controltower:ListManagedAccounts",
		"controltower:ListManagedOrganizationalUnits",
	];
	/** IAM actions required for the ListEnabledControls API call. */
	static readonly ListEnabledControls: string[] = [
		"controltower:ListEnabledControls",
		"controltower:ListGuardrailsForTarget",
	];
	/** IAM actions required for the ListLandingZoneOperations API call. */
	static readonly ListLandingZoneOperations: string[] = [
		"controltower:GetLandingZoneStatus",
		"controltower:ListLandingZoneOperations",
	];
	/** IAM actions required for the ListLandingZones API call. */
	static readonly ListLandingZones: string[] = [
		"controltower:GetHomeRegion",
		"controltower:ListLandingZones",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"controltower:ListTagsForResource",
	];
	/** IAM actions required for the ResetEnabledBaseline API call. */
	static readonly ResetEnabledBaseline: string[] = [
		"controltower:ManageOrganizationalUnit",
		"controltower:ResetEnabledBaseline",
	];
	/** IAM actions required for the ResetEnabledControl API call. */
	static readonly ResetEnabledControl: string[] = [
		"controltower:ResetEnabledControl",
	];
	/** IAM actions required for the ResetLandingZone API call. */
	static readonly ResetLandingZone: string[] = [
		"controltower:ResetLandingZone",
		"controltower:SetupLandingZone",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["controltower:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["controltower:UntagResource"];
	/** IAM actions required for the UpdateEnabledBaseline API call. */
	static readonly UpdateEnabledBaseline: string[] = [
		"controltower:ManageOrganizationalUnit",
		"controltower:UpdateEnabledBaseline",
	];
	/** IAM actions required for the UpdateEnabledControl API call. */
	static readonly UpdateEnabledControl: string[] = [
		"controltower:UpdateEnabledControl",
	];
	/** IAM actions required for the UpdateLandingZone API call. */
	static readonly UpdateLandingZone: string[] = [
		"controltower:SetupLandingZone",
		"controltower:UpdateLandingZone",
	];
}

/**
 * Condition key constants and builders for controltower.
 */
export class ControltowerConditions {
	/** Condition keys applicable to the CreateLandingZone action. */
	static readonly CreateLandingZoneConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableBaseline action. */
	static readonly EnableBaselineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableControl action. */
	static readonly EnableControlConditionKeys: string[] = [
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
