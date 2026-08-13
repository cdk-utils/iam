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
	static readonly CREATE_LANDING_ZONE = "controltower:CreateLandingZone";
	/** [Write] controltower:CreateManagedAccount */
	static readonly CREATE_MANAGED_ACCOUNT = "controltower:CreateManagedAccount";
	/** [Write] controltower:DeleteLandingZone */
	static readonly DELETE_LANDING_ZONE = "controltower:DeleteLandingZone";
	/** [Write] controltower:DeregisterManagedAccount */
	static readonly DEREGISTER_MANAGED_ACCOUNT =
		"controltower:DeregisterManagedAccount";
	/** [Write] controltower:DeregisterOrganizationalUnit */
	static readonly DEREGISTER_ORGANIZATIONAL_UNIT =
		"controltower:DeregisterOrganizationalUnit";
	/** [Read] controltower:DescribeAccountFactoryConfig */
	static readonly DESCRIBE_ACCOUNT_FACTORY_CONFIG =
		"controltower:DescribeAccountFactoryConfig";
	/** [Read] controltower:DescribeCoreService */
	static readonly DESCRIBE_CORE_SERVICE = "controltower:DescribeCoreService";
	/** [Read] controltower:DescribeGuardrail */
	static readonly DESCRIBE_GUARDRAIL = "controltower:DescribeGuardrail";
	/** [Read] controltower:DescribeGuardrailForTarget */
	static readonly DESCRIBE_GUARDRAIL_FOR_TARGET =
		"controltower:DescribeGuardrailForTarget";
	/** [Read] controltower:DescribeLandingZoneConfiguration */
	static readonly DESCRIBE_LANDING_ZONE_CONFIGURATION =
		"controltower:DescribeLandingZoneConfiguration";
	/** [Read] controltower:DescribeManagedAccount */
	static readonly DESCRIBE_MANAGED_ACCOUNT =
		"controltower:DescribeManagedAccount";
	/** [Read] controltower:DescribeManagedOrganizationalUnit */
	static readonly DESCRIBE_MANAGED_ORGANIZATIONAL_UNIT =
		"controltower:DescribeManagedOrganizationalUnit";
	/** [Read] controltower:DescribeRegisterOrganizationalUnitOperation */
	static readonly DESCRIBE_REGISTER_ORGANIZATIONAL_UNIT_OPERATION =
		"controltower:DescribeRegisterOrganizationalUnitOperation";
	/** [Read] controltower:DescribeSingleSignOn */
	static readonly DESCRIBE_SINGLE_SIGN_ON = "controltower:DescribeSingleSignOn";
	/** [Write] controltower:DisableBaseline */
	static readonly DISABLE_BASELINE = "controltower:DisableBaseline";
	/** [Write] controltower:DisableControl */
	static readonly DISABLE_CONTROL = "controltower:DisableControl";
	/** [Write] controltower:DisableGuardrail */
	static readonly DISABLE_GUARDRAIL = "controltower:DisableGuardrail";
	/** [Write] controltower:EnableBaseline */
	static readonly ENABLE_BASELINE = "controltower:EnableBaseline";
	/** [Write] controltower:EnableControl */
	static readonly ENABLE_CONTROL = "controltower:EnableControl";
	/** [Write] controltower:EnableGuardrail */
	static readonly ENABLE_GUARDRAIL = "controltower:EnableGuardrail";
	/** [Read] controltower:GetAccountInfo */
	static readonly GET_ACCOUNT_INFO = "controltower:GetAccountInfo";
	/** [Read] controltower:GetAvailableUpdates */
	static readonly GET_AVAILABLE_UPDATES = "controltower:GetAvailableUpdates";
	/** [Read] controltower:GetBaseline */
	static readonly GET_BASELINE = "controltower:GetBaseline";
	/** [Read] controltower:GetBaselineOperation */
	static readonly GET_BASELINE_OPERATION = "controltower:GetBaselineOperation";
	/** [Read] controltower:GetControlOperation */
	static readonly GET_CONTROL_OPERATION = "controltower:GetControlOperation";
	/** [Read] controltower:GetEnabledBaseline */
	static readonly GET_ENABLED_BASELINE = "controltower:GetEnabledBaseline";
	/** [Read] controltower:GetEnabledControl */
	static readonly GET_ENABLED_CONTROL = "controltower:GetEnabledControl";
	/** [Read] controltower:GetGuardrailComplianceStatus */
	static readonly GET_GUARDRAIL_COMPLIANCE_STATUS =
		"controltower:GetGuardrailComplianceStatus";
	/** [Read] controltower:GetHomeRegion */
	static readonly GET_HOME_REGION = "controltower:GetHomeRegion";
	/** [Read] controltower:GetLandingZone */
	static readonly GET_LANDING_ZONE = "controltower:GetLandingZone";
	/** [Read] controltower:GetLandingZoneDriftStatus */
	static readonly GET_LANDING_ZONE_DRIFT_STATUS =
		"controltower:GetLandingZoneDriftStatus";
	/** [Read] controltower:GetLandingZoneOperation */
	static readonly GET_LANDING_ZONE_OPERATION =
		"controltower:GetLandingZoneOperation";
	/** [Read] controltower:GetLandingZoneStatus */
	static readonly GET_LANDING_ZONE_STATUS = "controltower:GetLandingZoneStatus";
	/** [List] controltower:ListBaselines */
	static readonly LIST_BASELINES = "controltower:ListBaselines";
	/** [List] controltower:ListControlOperations */
	static readonly LIST_CONTROL_OPERATIONS =
		"controltower:ListControlOperations";
	/** [List] controltower:ListDirectoryGroups */
	static readonly LIST_DIRECTORY_GROUPS = "controltower:ListDirectoryGroups";
	/** [Read] controltower:ListDriftDetails */
	static readonly LIST_DRIFT_DETAILS = "controltower:ListDriftDetails";
	/** [List] controltower:ListEnabledBaselines */
	static readonly LIST_ENABLED_BASELINES = "controltower:ListEnabledBaselines";
	/** [List] controltower:ListEnabledControls */
	static readonly LIST_ENABLED_CONTROLS = "controltower:ListEnabledControls";
	/** [List] controltower:ListEnabledGuardrails */
	static readonly LIST_ENABLED_GUARDRAILS =
		"controltower:ListEnabledGuardrails";
	/** [List] controltower:ListExtendGovernancePrecheckDetails */
	static readonly LIST_EXTEND_GOVERNANCE_PRECHECK_DETAILS =
		"controltower:ListExtendGovernancePrecheckDetails";
	/** [Read] controltower:ListExternalConfigRuleCompliance */
	static readonly LIST_EXTERNAL_CONFIG_RULE_COMPLIANCE =
		"controltower:ListExternalConfigRuleCompliance";
	/** [List] controltower:ListGuardrailViolations */
	static readonly LIST_GUARDRAIL_VIOLATIONS =
		"controltower:ListGuardrailViolations";
	/** [List] controltower:ListGuardrails */
	static readonly LIST_GUARDRAILS = "controltower:ListGuardrails";
	/** [List] controltower:ListGuardrailsForTarget */
	static readonly LIST_GUARDRAILS_FOR_TARGET =
		"controltower:ListGuardrailsForTarget";
	/** [List] controltower:ListLandingZoneOperations */
	static readonly LIST_LANDING_ZONE_OPERATIONS =
		"controltower:ListLandingZoneOperations";
	/** [List] controltower:ListLandingZones */
	static readonly LIST_LANDING_ZONES = "controltower:ListLandingZones";
	/** [List] controltower:ListManagedAccounts */
	static readonly LIST_MANAGED_ACCOUNTS = "controltower:ListManagedAccounts";
	/** [List] controltower:ListManagedAccountsForGuardrail */
	static readonly LIST_MANAGED_ACCOUNTS_FOR_GUARDRAIL =
		"controltower:ListManagedAccountsForGuardrail";
	/** [List] controltower:ListManagedAccountsForParent */
	static readonly LIST_MANAGED_ACCOUNTS_FOR_PARENT =
		"controltower:ListManagedAccountsForParent";
	/** [List] controltower:ListManagedOrganizationalUnits */
	static readonly LIST_MANAGED_ORGANIZATIONAL_UNITS =
		"controltower:ListManagedOrganizationalUnits";
	/** [List] controltower:ListManagedOrganizationalUnitsForGuardrail */
	static readonly LIST_MANAGED_ORGANIZATIONAL_UNITS_FOR_GUARDRAIL =
		"controltower:ListManagedOrganizationalUnitsForGuardrail";
	/** [Read] controltower:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "controltower:ListTagsForResource";
	/** [Write] controltower:ManageOrganizationalUnit */
	static readonly MANAGE_ORGANIZATIONAL_UNIT =
		"controltower:ManageOrganizationalUnit";
	/** [Read] controltower:PerformPreLaunchChecks */
	static readonly PERFORM_PRE_LAUNCH_CHECKS =
		"controltower:PerformPreLaunchChecks";
	/** [Write] controltower:ResetEnabledBaseline */
	static readonly RESET_ENABLED_BASELINE = "controltower:ResetEnabledBaseline";
	/** [Write] controltower:ResetEnabledControl */
	static readonly RESET_ENABLED_CONTROL = "controltower:ResetEnabledControl";
	/** [Write] controltower:ResetLandingZone */
	static readonly RESET_LANDING_ZONE = "controltower:ResetLandingZone";
	/** [Write] controltower:SetupLandingZone */
	static readonly SETUP_LANDING_ZONE = "controltower:SetupLandingZone";
	/** [Tagging] controltower:TagResource */
	static readonly TAG_RESOURCE = "controltower:TagResource";
	/** [Tagging] controltower:UntagResource */
	static readonly UNTAG_RESOURCE = "controltower:UntagResource";
	/** [Write] controltower:UpdateAccountFactoryConfig */
	static readonly UPDATE_ACCOUNT_FACTORY_CONFIG =
		"controltower:UpdateAccountFactoryConfig";
	/** [Write] controltower:UpdateEnabledBaseline */
	static readonly UPDATE_ENABLED_BASELINE =
		"controltower:UpdateEnabledBaseline";
	/** [Write] controltower:UpdateEnabledControl */
	static readonly UPDATE_ENABLED_CONTROL = "controltower:UpdateEnabledControl";
	/** [Write] controltower:UpdateLandingZone */
	static readonly UPDATE_LANDING_ZONE = "controltower:UpdateLandingZone";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ControltowerActions.DESCRIBE_ACCOUNT_FACTORY_CONFIG,
		ControltowerActions.DESCRIBE_CORE_SERVICE,
		ControltowerActions.DESCRIBE_GUARDRAIL,
		ControltowerActions.DESCRIBE_GUARDRAIL_FOR_TARGET,
		ControltowerActions.DESCRIBE_LANDING_ZONE_CONFIGURATION,
		ControltowerActions.DESCRIBE_MANAGED_ACCOUNT,
		ControltowerActions.DESCRIBE_MANAGED_ORGANIZATIONAL_UNIT,
		ControltowerActions.DESCRIBE_REGISTER_ORGANIZATIONAL_UNIT_OPERATION,
		ControltowerActions.DESCRIBE_SINGLE_SIGN_ON,
		ControltowerActions.GET_ACCOUNT_INFO,
		ControltowerActions.GET_AVAILABLE_UPDATES,
		ControltowerActions.GET_BASELINE,
		ControltowerActions.GET_BASELINE_OPERATION,
		ControltowerActions.GET_CONTROL_OPERATION,
		ControltowerActions.GET_ENABLED_BASELINE,
		ControltowerActions.GET_ENABLED_CONTROL,
		ControltowerActions.GET_GUARDRAIL_COMPLIANCE_STATUS,
		ControltowerActions.GET_HOME_REGION,
		ControltowerActions.GET_LANDING_ZONE,
		ControltowerActions.GET_LANDING_ZONE_DRIFT_STATUS,
		ControltowerActions.GET_LANDING_ZONE_OPERATION,
		ControltowerActions.GET_LANDING_ZONE_STATUS,
		ControltowerActions.LIST_DRIFT_DETAILS,
		ControltowerActions.LIST_EXTERNAL_CONFIG_RULE_COMPLIANCE,
		ControltowerActions.LIST_TAGS_FOR_RESOURCE,
		ControltowerActions.PERFORM_PRE_LAUNCH_CHECKS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ControltowerActions.CREATE_LANDING_ZONE,
		ControltowerActions.CREATE_MANAGED_ACCOUNT,
		ControltowerActions.DELETE_LANDING_ZONE,
		ControltowerActions.DEREGISTER_MANAGED_ACCOUNT,
		ControltowerActions.DEREGISTER_ORGANIZATIONAL_UNIT,
		ControltowerActions.DISABLE_BASELINE,
		ControltowerActions.DISABLE_CONTROL,
		ControltowerActions.DISABLE_GUARDRAIL,
		ControltowerActions.ENABLE_BASELINE,
		ControltowerActions.ENABLE_CONTROL,
		ControltowerActions.ENABLE_GUARDRAIL,
		ControltowerActions.MANAGE_ORGANIZATIONAL_UNIT,
		ControltowerActions.RESET_ENABLED_BASELINE,
		ControltowerActions.RESET_ENABLED_CONTROL,
		ControltowerActions.RESET_LANDING_ZONE,
		ControltowerActions.SETUP_LANDING_ZONE,
		ControltowerActions.UPDATE_ACCOUNT_FACTORY_CONFIG,
		ControltowerActions.UPDATE_ENABLED_BASELINE,
		ControltowerActions.UPDATE_ENABLED_CONTROL,
		ControltowerActions.UPDATE_LANDING_ZONE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ControltowerActions.LIST_BASELINES,
		ControltowerActions.LIST_CONTROL_OPERATIONS,
		ControltowerActions.LIST_DIRECTORY_GROUPS,
		ControltowerActions.LIST_ENABLED_BASELINES,
		ControltowerActions.LIST_ENABLED_CONTROLS,
		ControltowerActions.LIST_ENABLED_GUARDRAILS,
		ControltowerActions.LIST_EXTEND_GOVERNANCE_PRECHECK_DETAILS,
		ControltowerActions.LIST_GUARDRAIL_VIOLATIONS,
		ControltowerActions.LIST_GUARDRAILS,
		ControltowerActions.LIST_GUARDRAILS_FOR_TARGET,
		ControltowerActions.LIST_LANDING_ZONE_OPERATIONS,
		ControltowerActions.LIST_LANDING_ZONES,
		ControltowerActions.LIST_MANAGED_ACCOUNTS,
		ControltowerActions.LIST_MANAGED_ACCOUNTS_FOR_GUARDRAIL,
		ControltowerActions.LIST_MANAGED_ACCOUNTS_FOR_PARENT,
		ControltowerActions.LIST_MANAGED_ORGANIZATIONAL_UNITS,
		ControltowerActions.LIST_MANAGED_ORGANIZATIONAL_UNITS_FOR_GUARDRAIL,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ControltowerActions.TAG_RESOURCE,
		ControltowerActions.UNTAG_RESOURCE,
	];
}

const BaselineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*)::baseline/(?<baselineId>[^:/?]+)$",
);
const EnabledBaselineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*):(?<account>[^:]*):enabledbaseline/(?<enabledBaselineId>[^:/?]+)$",
);
const EnabledControlArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*):(?<account>[^:]*):enabledcontrol/(?<enabledControlId>[^:/?]+)$",
);
const LandingZoneArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controltower:(?<region>[^:]*):(?<account>[^:]*):landingzone/(?<landingZoneId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for controltower resources.
 */
export class ControltowerResources {
	/**
	 * Builds an ARN for the Baseline resource.
	 */
	static baseline(props: {
		/** The BaselineId component of the ARN. */
		readonly baselineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBaselineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		baselineId: string;
	} {
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
	static enabledBaseline(props: {
		/** The EnabledBaselineId component of the ARN. */
		readonly enabledBaselineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnabledBaselineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		enabledBaselineId: string;
	} {
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
	static enabledControl(props: {
		/** The EnabledControlId component of the ARN. */
		readonly enabledControlId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnabledControlArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		enabledControlId: string;
	} {
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
	static landingZone(props: {
		/** The LandingZoneId component of the ARN. */
		readonly landingZoneId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLandingZoneArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		landingZoneId: string;
	} {
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
	static readonly CREATE_LANDING_ZONE: string[] = [
		"controltower:CreateLandingZone",
		"controltower:PerformPreLaunchChecks",
		"controltower:SetupLandingZone",
		"controltower:TagResource",
	];
	/** IAM actions required for the DeleteLandingZone API call. */
	static readonly DELETE_LANDING_ZONE: string[] = [
		"controltower:DeleteLandingZone",
	];
	/** IAM actions required for the DisableBaseline API call. */
	static readonly DISABLE_BASELINE: string[] = [
		"controltower:DeregisterOrganizationalUnit",
		"controltower:DisableBaseline",
	];
	/** IAM actions required for the DisableControl API call. */
	static readonly DISABLE_CONTROL: string[] = [
		"controltower:DisableControl",
		"controltower:DisableGuardrail",
	];
	/** IAM actions required for the EnableBaseline API call. */
	static readonly ENABLE_BASELINE: string[] = [
		"controltower:EnableBaseline",
		"controltower:ManageOrganizationalUnit",
		"controltower:TagResource",
	];
	/** IAM actions required for the EnableControl API call. */
	static readonly ENABLE_CONTROL: string[] = [
		"controltower:EnableControl",
		"controltower:EnableGuardrail",
		"controltower:TagResource",
	];
	/** IAM actions required for the GetBaseline API call. */
	static readonly GET_BASELINE: string[] = ["controltower:GetBaseline"];
	/** IAM actions required for the GetBaselineOperation API call. */
	static readonly GET_BASELINE_OPERATION: string[] = [
		"controltower:DescribeRegisterOrganizationalUnitOperation",
		"controltower:GetBaselineOperation",
	];
	/** IAM actions required for the GetControlOperation API call. */
	static readonly GET_CONTROL_OPERATION: string[] = [
		"controltower:GetControlOperation",
	];
	/** IAM actions required for the GetEnabledBaseline API call. */
	static readonly GET_ENABLED_BASELINE: string[] = [
		"controltower:DescribeManagedAccount",
		"controltower:DescribeManagedOrganizationalUnit",
		"controltower:GetEnabledBaseline",
	];
	/** IAM actions required for the GetEnabledControl API call. */
	static readonly GET_ENABLED_CONTROL: string[] = [
		"controltower:DescribeGuardrailForTarget",
		"controltower:GetEnabledControl",
	];
	/** IAM actions required for the GetLandingZone API call. */
	static readonly GET_LANDING_ZONE: string[] = [
		"controltower:DescribeLandingZoneConfiguration",
		"controltower:GetAvailableUpdates",
		"controltower:GetLandingZone",
		"controltower:GetLandingZoneDriftStatus",
		"controltower:GetLandingZoneStatus",
	];
	/** IAM actions required for the GetLandingZoneOperation API call. */
	static readonly GET_LANDING_ZONE_OPERATION: string[] = [
		"controltower:GetLandingZoneOperation",
		"controltower:GetLandingZoneStatus",
	];
	/** IAM actions required for the ListBaselines API call. */
	static readonly LIST_BASELINES: string[] = ["controltower:ListBaselines"];
	/** IAM actions required for the ListControlOperations API call. */
	static readonly LIST_CONTROL_OPERATIONS: string[] = [
		"controltower:ListControlOperations",
	];
	/** IAM actions required for the ListEnabledBaselines API call. */
	static readonly LIST_ENABLED_BASELINES: string[] = [
		"controltower:ListEnabledBaselines",
		"controltower:ListManagedAccounts",
		"controltower:ListManagedOrganizationalUnits",
	];
	/** IAM actions required for the ListEnabledControls API call. */
	static readonly LIST_ENABLED_CONTROLS: string[] = [
		"controltower:ListEnabledControls",
		"controltower:ListGuardrailsForTarget",
	];
	/** IAM actions required for the ListLandingZoneOperations API call. */
	static readonly LIST_LANDING_ZONE_OPERATIONS: string[] = [
		"controltower:GetLandingZoneStatus",
		"controltower:ListLandingZoneOperations",
	];
	/** IAM actions required for the ListLandingZones API call. */
	static readonly LIST_LANDING_ZONES: string[] = [
		"controltower:GetHomeRegion",
		"controltower:ListLandingZones",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"controltower:ListTagsForResource",
	];
	/** IAM actions required for the ResetEnabledBaseline API call. */
	static readonly RESET_ENABLED_BASELINE: string[] = [
		"controltower:ManageOrganizationalUnit",
		"controltower:ResetEnabledBaseline",
	];
	/** IAM actions required for the ResetEnabledControl API call. */
	static readonly RESET_ENABLED_CONTROL: string[] = [
		"controltower:ResetEnabledControl",
	];
	/** IAM actions required for the ResetLandingZone API call. */
	static readonly RESET_LANDING_ZONE: string[] = [
		"controltower:ResetLandingZone",
		"controltower:SetupLandingZone",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["controltower:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["controltower:UntagResource"];
	/** IAM actions required for the UpdateEnabledBaseline API call. */
	static readonly UPDATE_ENABLED_BASELINE: string[] = [
		"controltower:ManageOrganizationalUnit",
		"controltower:UpdateEnabledBaseline",
	];
	/** IAM actions required for the UpdateEnabledControl API call. */
	static readonly UPDATE_ENABLED_CONTROL: string[] = [
		"controltower:UpdateEnabledControl",
	];
	/** IAM actions required for the UpdateLandingZone API call. */
	static readonly UPDATE_LANDING_ZONE: string[] = [
		"controltower:SetupLandingZone",
		"controltower:UpdateLandingZone",
	];
}

/**
 * Condition key constants and builders for controltower.
 */
export class ControltowerConditions {
	/** Condition keys applicable to the CreateLandingZone action. */
	static readonly CREATE_LANDING_ZONE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableBaseline action. */
	static readonly ENABLE_BASELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the EnableControl action. */
	static readonly ENABLE_CONTROL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
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
