// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/route53-recovery-readiness.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the route53-recovery-readiness service.
 */
export class Route53RecoveryReadinessActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "route53-recovery-readiness";

	/** [Write] route53-recovery-readiness:CreateCell */
	static readonly CREATE_CELL = "route53-recovery-readiness:CreateCell";
	/** [Write] route53-recovery-readiness:CreateCrossAccountAuthorization */
	static readonly CREATE_CROSS_ACCOUNT_AUTHORIZATION =
		"route53-recovery-readiness:CreateCrossAccountAuthorization";
	/** [Write] route53-recovery-readiness:CreateReadinessCheck */
	static readonly CREATE_READINESS_CHECK =
		"route53-recovery-readiness:CreateReadinessCheck";
	/** [Write] route53-recovery-readiness:CreateRecoveryGroup */
	static readonly CREATE_RECOVERY_GROUP =
		"route53-recovery-readiness:CreateRecoveryGroup";
	/** [Write] route53-recovery-readiness:CreateResourceSet */
	static readonly CREATE_RESOURCE_SET =
		"route53-recovery-readiness:CreateResourceSet";
	/** [Write] route53-recovery-readiness:DeleteCell */
	static readonly DELETE_CELL = "route53-recovery-readiness:DeleteCell";
	/** [Write] route53-recovery-readiness:DeleteCrossAccountAuthorization */
	static readonly DELETE_CROSS_ACCOUNT_AUTHORIZATION =
		"route53-recovery-readiness:DeleteCrossAccountAuthorization";
	/** [Write] route53-recovery-readiness:DeleteReadinessCheck */
	static readonly DELETE_READINESS_CHECK =
		"route53-recovery-readiness:DeleteReadinessCheck";
	/** [Write] route53-recovery-readiness:DeleteRecoveryGroup */
	static readonly DELETE_RECOVERY_GROUP =
		"route53-recovery-readiness:DeleteRecoveryGroup";
	/** [Write] route53-recovery-readiness:DeleteResourceSet */
	static readonly DELETE_RESOURCE_SET =
		"route53-recovery-readiness:DeleteResourceSet";
	/** [Read] route53-recovery-readiness:GetArchitectureRecommendations */
	static readonly GET_ARCHITECTURE_RECOMMENDATIONS =
		"route53-recovery-readiness:GetArchitectureRecommendations";
	/** [Read] route53-recovery-readiness:GetCell */
	static readonly GET_CELL = "route53-recovery-readiness:GetCell";
	/** [Read] route53-recovery-readiness:GetCellReadinessSummary */
	static readonly GET_CELL_READINESS_SUMMARY =
		"route53-recovery-readiness:GetCellReadinessSummary";
	/** [Read] route53-recovery-readiness:GetReadinessCheck */
	static readonly GET_READINESS_CHECK =
		"route53-recovery-readiness:GetReadinessCheck";
	/** [Read] route53-recovery-readiness:GetReadinessCheckResourceStatus */
	static readonly GET_READINESS_CHECK_RESOURCE_STATUS =
		"route53-recovery-readiness:GetReadinessCheckResourceStatus";
	/** [Read] route53-recovery-readiness:GetReadinessCheckStatus */
	static readonly GET_READINESS_CHECK_STATUS =
		"route53-recovery-readiness:GetReadinessCheckStatus";
	/** [Read] route53-recovery-readiness:GetRecoveryGroup */
	static readonly GET_RECOVERY_GROUP =
		"route53-recovery-readiness:GetRecoveryGroup";
	/** [Read] route53-recovery-readiness:GetRecoveryGroupReadinessSummary */
	static readonly GET_RECOVERY_GROUP_READINESS_SUMMARY =
		"route53-recovery-readiness:GetRecoveryGroupReadinessSummary";
	/** [Read] route53-recovery-readiness:GetResourceSet */
	static readonly GET_RESOURCE_SET =
		"route53-recovery-readiness:GetResourceSet";
	/** [Read] route53-recovery-readiness:ListCells */
	static readonly LIST_CELLS = "route53-recovery-readiness:ListCells";
	/** [Read] route53-recovery-readiness:ListCrossAccountAuthorizations */
	static readonly LIST_CROSS_ACCOUNT_AUTHORIZATIONS =
		"route53-recovery-readiness:ListCrossAccountAuthorizations";
	/** [Read] route53-recovery-readiness:ListReadinessChecks */
	static readonly LIST_READINESS_CHECKS =
		"route53-recovery-readiness:ListReadinessChecks";
	/** [Read] route53-recovery-readiness:ListRecoveryGroups */
	static readonly LIST_RECOVERY_GROUPS =
		"route53-recovery-readiness:ListRecoveryGroups";
	/** [Read] route53-recovery-readiness:ListResourceSets */
	static readonly LIST_RESOURCE_SETS =
		"route53-recovery-readiness:ListResourceSets";
	/** [Read] route53-recovery-readiness:ListRules */
	static readonly LIST_RULES = "route53-recovery-readiness:ListRules";
	/** [Read] route53-recovery-readiness:ListTagsForResources */
	static readonly LIST_TAGS_FOR_RESOURCES =
		"route53-recovery-readiness:ListTagsForResources";
	/** [Tagging] route53-recovery-readiness:TagResource */
	static readonly TAG_RESOURCE = "route53-recovery-readiness:TagResource";
	/** [Tagging] route53-recovery-readiness:UntagResource */
	static readonly UNTAG_RESOURCE = "route53-recovery-readiness:UntagResource";
	/** [Write] route53-recovery-readiness:UpdateCell */
	static readonly UPDATE_CELL = "route53-recovery-readiness:UpdateCell";
	/** [Write] route53-recovery-readiness:UpdateReadinessCheck */
	static readonly UPDATE_READINESS_CHECK =
		"route53-recovery-readiness:UpdateReadinessCheck";
	/** [Write] route53-recovery-readiness:UpdateRecoveryGroup */
	static readonly UPDATE_RECOVERY_GROUP =
		"route53-recovery-readiness:UpdateRecoveryGroup";
	/** [Write] route53-recovery-readiness:UpdateResourceSet */
	static readonly UPDATE_RESOURCE_SET =
		"route53-recovery-readiness:UpdateResourceSet";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Route53RecoveryReadinessActions.GET_ARCHITECTURE_RECOMMENDATIONS,
		Route53RecoveryReadinessActions.GET_CELL,
		Route53RecoveryReadinessActions.GET_CELL_READINESS_SUMMARY,
		Route53RecoveryReadinessActions.GET_READINESS_CHECK,
		Route53RecoveryReadinessActions.GET_READINESS_CHECK_RESOURCE_STATUS,
		Route53RecoveryReadinessActions.GET_READINESS_CHECK_STATUS,
		Route53RecoveryReadinessActions.GET_RECOVERY_GROUP,
		Route53RecoveryReadinessActions.GET_RECOVERY_GROUP_READINESS_SUMMARY,
		Route53RecoveryReadinessActions.GET_RESOURCE_SET,
		Route53RecoveryReadinessActions.LIST_CELLS,
		Route53RecoveryReadinessActions.LIST_CROSS_ACCOUNT_AUTHORIZATIONS,
		Route53RecoveryReadinessActions.LIST_READINESS_CHECKS,
		Route53RecoveryReadinessActions.LIST_RECOVERY_GROUPS,
		Route53RecoveryReadinessActions.LIST_RESOURCE_SETS,
		Route53RecoveryReadinessActions.LIST_RULES,
		Route53RecoveryReadinessActions.LIST_TAGS_FOR_RESOURCES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Route53RecoveryReadinessActions.CREATE_CELL,
		Route53RecoveryReadinessActions.CREATE_CROSS_ACCOUNT_AUTHORIZATION,
		Route53RecoveryReadinessActions.CREATE_READINESS_CHECK,
		Route53RecoveryReadinessActions.CREATE_RECOVERY_GROUP,
		Route53RecoveryReadinessActions.CREATE_RESOURCE_SET,
		Route53RecoveryReadinessActions.DELETE_CELL,
		Route53RecoveryReadinessActions.DELETE_CROSS_ACCOUNT_AUTHORIZATION,
		Route53RecoveryReadinessActions.DELETE_READINESS_CHECK,
		Route53RecoveryReadinessActions.DELETE_RECOVERY_GROUP,
		Route53RecoveryReadinessActions.DELETE_RESOURCE_SET,
		Route53RecoveryReadinessActions.UPDATE_CELL,
		Route53RecoveryReadinessActions.UPDATE_READINESS_CHECK,
		Route53RecoveryReadinessActions.UPDATE_RECOVERY_GROUP,
		Route53RecoveryReadinessActions.UPDATE_RESOURCE_SET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Route53RecoveryReadinessActions.TAG_RESOURCE,
		Route53RecoveryReadinessActions.UNTAG_RESOURCE,
	];
}

const CellArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):cell/(?<resourceId>[^:/?]+)$",
);
const ReadinesscheckArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):readiness-check/(?<resourceId>[^:/?]+)$",
);
const RecoverygroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):recovery-group/(?<resourceId>[^:/?]+)$",
);
const ResourcesetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):resource-set/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for route53-recovery-readiness resources.
 */
export class Route53RecoveryReadinessResources {
	/**
	 * Builds an ARN for the cell resource.
	 */
	static cell(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-readiness::${props.account ?? "*"}:cell/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cell resource.
	 */
	static isValidCellArn(arn: string): boolean {
		return CellArnRegex.test(arn);
	}

	/**
	 * Parses a cell ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCellArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = CellArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cell ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the readinesscheck resource.
	 */
	static readinesscheck(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-readiness::${props.account ?? "*"}:readiness-check/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the readinesscheck resource.
	 */
	static isValidReadinesscheckArn(arn: string): boolean {
		return ReadinesscheckArnRegex.test(arn);
	}

	/**
	 * Parses a readinesscheck ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReadinesscheckArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = ReadinesscheckArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid readinesscheck ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the recoverygroup resource.
	 */
	static recoverygroup(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-readiness::${props.account ?? "*"}:recovery-group/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recoverygroup resource.
	 */
	static isValidRecoverygroupArn(arn: string): boolean {
		return RecoverygroupArnRegex.test(arn);
	}

	/**
	 * Parses a recoverygroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecoverygroupArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = RecoverygroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recoverygroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the resourceset resource.
	 */
	static resourceset(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:route53-recovery-readiness::${props.account ?? "*"}:resource-set/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resourceset resource.
	 */
	static isValidResourcesetArn(arn: string): boolean {
		return ResourcesetArnRegex.test(arn);
	}

	/**
	 * Parses a resourceset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourcesetArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = ResourcesetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resourceset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for route53-recovery-readiness.
 */
export class Route53RecoveryReadinessOperations {
	/** IAM actions required for the CreateCell API call. */
	static readonly CREATE_CELL: string[] = [
		"route53-recovery-readiness:CreateCell",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the CreateCrossAccountAuthorization API call. */
	static readonly CREATE_CROSS_ACCOUNT_AUTHORIZATION: string[] = [
		"route53-recovery-readiness:CreateCrossAccountAuthorization",
	];
	/** IAM actions required for the CreateReadinessCheck API call. */
	static readonly CREATE_READINESS_CHECK: string[] = [
		"route53-recovery-readiness:CreateReadinessCheck",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the CreateRecoveryGroup API call. */
	static readonly CREATE_RECOVERY_GROUP: string[] = [
		"route53-recovery-readiness:CreateRecoveryGroup",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the CreateResourceSet API call. */
	static readonly CREATE_RESOURCE_SET: string[] = [
		"route53-recovery-readiness:CreateResourceSet",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the DeleteCell API call. */
	static readonly DELETE_CELL: string[] = [
		"route53-recovery-readiness:DeleteCell",
	];
	/** IAM actions required for the DeleteCrossAccountAuthorization API call. */
	static readonly DELETE_CROSS_ACCOUNT_AUTHORIZATION: string[] = [
		"route53-recovery-readiness:DeleteCrossAccountAuthorization",
	];
	/** IAM actions required for the DeleteReadinessCheck API call. */
	static readonly DELETE_READINESS_CHECK: string[] = [
		"route53-recovery-readiness:DeleteReadinessCheck",
	];
	/** IAM actions required for the DeleteRecoveryGroup API call. */
	static readonly DELETE_RECOVERY_GROUP: string[] = [
		"route53-recovery-readiness:DeleteRecoveryGroup",
	];
	/** IAM actions required for the DeleteResourceSet API call. */
	static readonly DELETE_RESOURCE_SET: string[] = [
		"route53-recovery-readiness:DeleteResourceSet",
	];
	/** IAM actions required for the GetArchitectureRecommendations API call. */
	static readonly GET_ARCHITECTURE_RECOMMENDATIONS: string[] = [
		"route53-recovery-readiness:GetArchitectureRecommendations",
	];
	/** IAM actions required for the GetCell API call. */
	static readonly GET_CELL: string[] = ["route53-recovery-readiness:GetCell"];
	/** IAM actions required for the GetCellReadinessSummary API call. */
	static readonly GET_CELL_READINESS_SUMMARY: string[] = [
		"route53-recovery-readiness:GetCellReadinessSummary",
	];
	/** IAM actions required for the GetReadinessCheck API call. */
	static readonly GET_READINESS_CHECK: string[] = [
		"route53-recovery-readiness:GetReadinessCheck",
	];
	/** IAM actions required for the GetReadinessCheckResourceStatus API call. */
	static readonly GET_READINESS_CHECK_RESOURCE_STATUS: string[] = [
		"route53-recovery-readiness:GetReadinessCheckResourceStatus",
	];
	/** IAM actions required for the GetReadinessCheckStatus API call. */
	static readonly GET_READINESS_CHECK_STATUS: string[] = [
		"route53-recovery-readiness:GetReadinessCheckStatus",
	];
	/** IAM actions required for the GetRecoveryGroup API call. */
	static readonly GET_RECOVERY_GROUP: string[] = [
		"route53-recovery-readiness:GetRecoveryGroup",
	];
	/** IAM actions required for the GetRecoveryGroupReadinessSummary API call. */
	static readonly GET_RECOVERY_GROUP_READINESS_SUMMARY: string[] = [
		"route53-recovery-readiness:GetRecoveryGroupReadinessSummary",
	];
	/** IAM actions required for the GetResourceSet API call. */
	static readonly GET_RESOURCE_SET: string[] = [
		"route53-recovery-readiness:GetResourceSet",
	];
	/** IAM actions required for the ListCells API call. */
	static readonly LIST_CELLS: string[] = [
		"route53-recovery-readiness:ListCells",
	];
	/** IAM actions required for the ListCrossAccountAuthorizations API call. */
	static readonly LIST_CROSS_ACCOUNT_AUTHORIZATIONS: string[] = [
		"route53-recovery-readiness:ListCrossAccountAuthorizations",
	];
	/** IAM actions required for the ListReadinessChecks API call. */
	static readonly LIST_READINESS_CHECKS: string[] = [
		"route53-recovery-readiness:ListReadinessChecks",
	];
	/** IAM actions required for the ListRecoveryGroups API call. */
	static readonly LIST_RECOVERY_GROUPS: string[] = [
		"route53-recovery-readiness:ListRecoveryGroups",
	];
	/** IAM actions required for the ListResourceSets API call. */
	static readonly LIST_RESOURCE_SETS: string[] = [
		"route53-recovery-readiness:ListResourceSets",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = [
		"route53-recovery-readiness:ListRules",
	];
	/** IAM actions required for the ListTagsForResources API call. */
	static readonly LIST_TAGS_FOR_RESOURCES: string[] = [
		"route53-recovery-readiness:ListTagsForResources",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"route53-recovery-readiness:UntagResource",
	];
	/** IAM actions required for the UpdateCell API call. */
	static readonly UPDATE_CELL: string[] = [
		"route53-recovery-readiness:UpdateCell",
	];
	/** IAM actions required for the UpdateReadinessCheck API call. */
	static readonly UPDATE_READINESS_CHECK: string[] = [
		"route53-recovery-readiness:UpdateReadinessCheck",
	];
	/** IAM actions required for the UpdateRecoveryGroup API call. */
	static readonly UPDATE_RECOVERY_GROUP: string[] = [
		"route53-recovery-readiness:UpdateRecoveryGroup",
	];
	/** IAM actions required for the UpdateResourceSet API call. */
	static readonly UPDATE_RESOURCE_SET: string[] = [
		"route53-recovery-readiness:UpdateResourceSet",
	];
}

/**
 * Condition key constants and builders for route53-recovery-readiness.
 */
export class Route53RecoveryReadinessConditions {
	/** Condition keys applicable to the CreateCell action. */
	static readonly CREATE_CELL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReadinessCheck action. */
	static readonly CREATE_READINESS_CHECK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecoveryGroup action. */
	static readonly CREATE_RECOVERY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResourceSet action. */
	static readonly CREATE_RESOURCE_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCell action. */
	static readonly UPDATE_CELL_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateReadinessCheck action. */
	static readonly UPDATE_READINESS_CHECK_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateRecoveryGroup action. */
	static readonly UPDATE_RECOVERY_GROUP_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateResourceSet action. */
	static readonly UPDATE_RESOURCE_SET_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
	];

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
