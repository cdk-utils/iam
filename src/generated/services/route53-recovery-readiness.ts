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
	static readonly CreateCell = "route53-recovery-readiness:CreateCell";
	/** [Write] route53-recovery-readiness:CreateCrossAccountAuthorization */
	static readonly CreateCrossAccountAuthorization =
		"route53-recovery-readiness:CreateCrossAccountAuthorization";
	/** [Write] route53-recovery-readiness:CreateReadinessCheck */
	static readonly CreateReadinessCheck =
		"route53-recovery-readiness:CreateReadinessCheck";
	/** [Write] route53-recovery-readiness:CreateRecoveryGroup */
	static readonly CreateRecoveryGroup =
		"route53-recovery-readiness:CreateRecoveryGroup";
	/** [Write] route53-recovery-readiness:CreateResourceSet */
	static readonly CreateResourceSet =
		"route53-recovery-readiness:CreateResourceSet";
	/** [Write] route53-recovery-readiness:DeleteCell */
	static readonly DeleteCell = "route53-recovery-readiness:DeleteCell";
	/** [Write] route53-recovery-readiness:DeleteCrossAccountAuthorization */
	static readonly DeleteCrossAccountAuthorization =
		"route53-recovery-readiness:DeleteCrossAccountAuthorization";
	/** [Write] route53-recovery-readiness:DeleteReadinessCheck */
	static readonly DeleteReadinessCheck =
		"route53-recovery-readiness:DeleteReadinessCheck";
	/** [Write] route53-recovery-readiness:DeleteRecoveryGroup */
	static readonly DeleteRecoveryGroup =
		"route53-recovery-readiness:DeleteRecoveryGroup";
	/** [Write] route53-recovery-readiness:DeleteResourceSet */
	static readonly DeleteResourceSet =
		"route53-recovery-readiness:DeleteResourceSet";
	/** [Read] route53-recovery-readiness:GetArchitectureRecommendations */
	static readonly actionGetArchitectureRecommendations =
		"route53-recovery-readiness:GetArchitectureRecommendations";
	/** [Read] route53-recovery-readiness:GetCell */
	static readonly actionGetCell = "route53-recovery-readiness:GetCell";
	/** [Read] route53-recovery-readiness:GetCellReadinessSummary */
	static readonly actionGetCellReadinessSummary =
		"route53-recovery-readiness:GetCellReadinessSummary";
	/** [Read] route53-recovery-readiness:GetReadinessCheck */
	static readonly actionGetReadinessCheck =
		"route53-recovery-readiness:GetReadinessCheck";
	/** [Read] route53-recovery-readiness:GetReadinessCheckResourceStatus */
	static readonly actionGetReadinessCheckResourceStatus =
		"route53-recovery-readiness:GetReadinessCheckResourceStatus";
	/** [Read] route53-recovery-readiness:GetReadinessCheckStatus */
	static readonly actionGetReadinessCheckStatus =
		"route53-recovery-readiness:GetReadinessCheckStatus";
	/** [Read] route53-recovery-readiness:GetRecoveryGroup */
	static readonly actionGetRecoveryGroup =
		"route53-recovery-readiness:GetRecoveryGroup";
	/** [Read] route53-recovery-readiness:GetRecoveryGroupReadinessSummary */
	static readonly actionGetRecoveryGroupReadinessSummary =
		"route53-recovery-readiness:GetRecoveryGroupReadinessSummary";
	/** [Read] route53-recovery-readiness:GetResourceSet */
	static readonly actionGetResourceSet =
		"route53-recovery-readiness:GetResourceSet";
	/** [Read] route53-recovery-readiness:ListCells */
	static readonly ListCells = "route53-recovery-readiness:ListCells";
	/** [Read] route53-recovery-readiness:ListCrossAccountAuthorizations */
	static readonly ListCrossAccountAuthorizations =
		"route53-recovery-readiness:ListCrossAccountAuthorizations";
	/** [Read] route53-recovery-readiness:ListReadinessChecks */
	static readonly ListReadinessChecks =
		"route53-recovery-readiness:ListReadinessChecks";
	/** [Read] route53-recovery-readiness:ListRecoveryGroups */
	static readonly ListRecoveryGroups =
		"route53-recovery-readiness:ListRecoveryGroups";
	/** [Read] route53-recovery-readiness:ListResourceSets */
	static readonly ListResourceSets =
		"route53-recovery-readiness:ListResourceSets";
	/** [Read] route53-recovery-readiness:ListRules */
	static readonly ListRules = "route53-recovery-readiness:ListRules";
	/** [Read] route53-recovery-readiness:ListTagsForResources */
	static readonly ListTagsForResources =
		"route53-recovery-readiness:ListTagsForResources";
	/** [Tagging] route53-recovery-readiness:TagResource */
	static readonly TagResource = "route53-recovery-readiness:TagResource";
	/** [Tagging] route53-recovery-readiness:UntagResource */
	static readonly UntagResource = "route53-recovery-readiness:UntagResource";
	/** [Write] route53-recovery-readiness:UpdateCell */
	static readonly UpdateCell = "route53-recovery-readiness:UpdateCell";
	/** [Write] route53-recovery-readiness:UpdateReadinessCheck */
	static readonly UpdateReadinessCheck =
		"route53-recovery-readiness:UpdateReadinessCheck";
	/** [Write] route53-recovery-readiness:UpdateRecoveryGroup */
	static readonly UpdateRecoveryGroup =
		"route53-recovery-readiness:UpdateRecoveryGroup";
	/** [Write] route53-recovery-readiness:UpdateResourceSet */
	static readonly UpdateResourceSet =
		"route53-recovery-readiness:UpdateResourceSet";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Route53RecoveryReadinessActions.actionGetArchitectureRecommendations,
		Route53RecoveryReadinessActions.actionGetCell,
		Route53RecoveryReadinessActions.actionGetCellReadinessSummary,
		Route53RecoveryReadinessActions.actionGetReadinessCheck,
		Route53RecoveryReadinessActions.actionGetReadinessCheckResourceStatus,
		Route53RecoveryReadinessActions.actionGetReadinessCheckStatus,
		Route53RecoveryReadinessActions.actionGetRecoveryGroup,
		Route53RecoveryReadinessActions.actionGetRecoveryGroupReadinessSummary,
		Route53RecoveryReadinessActions.actionGetResourceSet,
		Route53RecoveryReadinessActions.ListCells,
		Route53RecoveryReadinessActions.ListCrossAccountAuthorizations,
		Route53RecoveryReadinessActions.ListReadinessChecks,
		Route53RecoveryReadinessActions.ListRecoveryGroups,
		Route53RecoveryReadinessActions.ListResourceSets,
		Route53RecoveryReadinessActions.ListRules,
		Route53RecoveryReadinessActions.ListTagsForResources,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Route53RecoveryReadinessActions.CreateCell,
		Route53RecoveryReadinessActions.CreateCrossAccountAuthorization,
		Route53RecoveryReadinessActions.CreateReadinessCheck,
		Route53RecoveryReadinessActions.CreateRecoveryGroup,
		Route53RecoveryReadinessActions.CreateResourceSet,
		Route53RecoveryReadinessActions.DeleteCell,
		Route53RecoveryReadinessActions.DeleteCrossAccountAuthorization,
		Route53RecoveryReadinessActions.DeleteReadinessCheck,
		Route53RecoveryReadinessActions.DeleteRecoveryGroup,
		Route53RecoveryReadinessActions.DeleteResourceSet,
		Route53RecoveryReadinessActions.UpdateCell,
		Route53RecoveryReadinessActions.UpdateReadinessCheck,
		Route53RecoveryReadinessActions.UpdateRecoveryGroup,
		Route53RecoveryReadinessActions.UpdateResourceSet,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Route53RecoveryReadinessActions.TagResource,
		Route53RecoveryReadinessActions.UntagResource,
	];
}

/**
 * Properties for building a cell ARN.
 */
export interface Route53RecoveryReadinessCellArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cell ARN.
 */
export interface Route53RecoveryReadinessCellArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a readinesscheck ARN.
 */
export interface Route53RecoveryReadinessReadinesscheckArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a readinesscheck ARN.
 */
export interface Route53RecoveryReadinessReadinesscheckArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a recoverygroup ARN.
 */
export interface Route53RecoveryReadinessRecoverygroupArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recoverygroup ARN.
 */
export interface Route53RecoveryReadinessRecoverygroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a resourceset ARN.
 */
export interface Route53RecoveryReadinessResourcesetArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a resourceset ARN.
 */
export interface Route53RecoveryReadinessResourcesetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const CellArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):cell\/(?<resourceId>[^:/?]+)$/;
const ReadinesscheckArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):readiness-check\/(?<resourceId>[^:/?]+)$/;
const RecoverygroupArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):recovery-group\/(?<resourceId>[^:/?]+)$/;
const ResourcesetArnRegex =
	/^arn:(?<partition>[^:]+):route53-recovery-readiness::(?<account>[^:]*):resource-set\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for route53-recovery-readiness resources.
 */
export class Route53RecoveryReadinessResources {
	/**
	 * Builds an ARN for the cell resource.
	 */
	static cell(props: Route53RecoveryReadinessCellArnProps): string {
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
	static parseCellArn(arn: string): Route53RecoveryReadinessCellArnComponents {
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
	static readinesscheck(
		props: Route53RecoveryReadinessReadinesscheckArnProps,
	): string {
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
	static parseReadinesscheckArn(
		arn: string,
	): Route53RecoveryReadinessReadinesscheckArnComponents {
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
	static recoverygroup(
		props: Route53RecoveryReadinessRecoverygroupArnProps,
	): string {
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
	static parseRecoverygroupArn(
		arn: string,
	): Route53RecoveryReadinessRecoverygroupArnComponents {
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
	static resourceset(
		props: Route53RecoveryReadinessResourcesetArnProps,
	): string {
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
	static parseResourcesetArn(
		arn: string,
	): Route53RecoveryReadinessResourcesetArnComponents {
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
	static readonly CreateCell: string[] = [
		"route53-recovery-readiness:CreateCell",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the CreateCrossAccountAuthorization API call. */
	static readonly CreateCrossAccountAuthorization: string[] = [
		"route53-recovery-readiness:CreateCrossAccountAuthorization",
	];
	/** IAM actions required for the CreateReadinessCheck API call. */
	static readonly CreateReadinessCheck: string[] = [
		"route53-recovery-readiness:CreateReadinessCheck",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the CreateRecoveryGroup API call. */
	static readonly CreateRecoveryGroup: string[] = [
		"route53-recovery-readiness:CreateRecoveryGroup",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the CreateResourceSet API call. */
	static readonly CreateResourceSet: string[] = [
		"route53-recovery-readiness:CreateResourceSet",
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the DeleteCell API call. */
	static readonly DeleteCell: string[] = [
		"route53-recovery-readiness:DeleteCell",
	];
	/** IAM actions required for the DeleteCrossAccountAuthorization API call. */
	static readonly DeleteCrossAccountAuthorization: string[] = [
		"route53-recovery-readiness:DeleteCrossAccountAuthorization",
	];
	/** IAM actions required for the DeleteReadinessCheck API call. */
	static readonly DeleteReadinessCheck: string[] = [
		"route53-recovery-readiness:DeleteReadinessCheck",
	];
	/** IAM actions required for the DeleteRecoveryGroup API call. */
	static readonly DeleteRecoveryGroup: string[] = [
		"route53-recovery-readiness:DeleteRecoveryGroup",
	];
	/** IAM actions required for the DeleteResourceSet API call. */
	static readonly DeleteResourceSet: string[] = [
		"route53-recovery-readiness:DeleteResourceSet",
	];
	/** IAM actions required for the GetArchitectureRecommendations API call. */
	static readonly opGetArchitectureRecommendations: string[] = [
		"route53-recovery-readiness:GetArchitectureRecommendations",
	];
	/** IAM actions required for the GetCell API call. */
	static readonly opGetCell: string[] = ["route53-recovery-readiness:GetCell"];
	/** IAM actions required for the GetCellReadinessSummary API call. */
	static readonly opGetCellReadinessSummary: string[] = [
		"route53-recovery-readiness:GetCellReadinessSummary",
	];
	/** IAM actions required for the GetReadinessCheck API call. */
	static readonly opGetReadinessCheck: string[] = [
		"route53-recovery-readiness:GetReadinessCheck",
	];
	/** IAM actions required for the GetReadinessCheckResourceStatus API call. */
	static readonly opGetReadinessCheckResourceStatus: string[] = [
		"route53-recovery-readiness:GetReadinessCheckResourceStatus",
	];
	/** IAM actions required for the GetReadinessCheckStatus API call. */
	static readonly opGetReadinessCheckStatus: string[] = [
		"route53-recovery-readiness:GetReadinessCheckStatus",
	];
	/** IAM actions required for the GetRecoveryGroup API call. */
	static readonly opGetRecoveryGroup: string[] = [
		"route53-recovery-readiness:GetRecoveryGroup",
	];
	/** IAM actions required for the GetRecoveryGroupReadinessSummary API call. */
	static readonly opGetRecoveryGroupReadinessSummary: string[] = [
		"route53-recovery-readiness:GetRecoveryGroupReadinessSummary",
	];
	/** IAM actions required for the GetResourceSet API call. */
	static readonly opGetResourceSet: string[] = [
		"route53-recovery-readiness:GetResourceSet",
	];
	/** IAM actions required for the ListCells API call. */
	static readonly ListCells: string[] = [
		"route53-recovery-readiness:ListCells",
	];
	/** IAM actions required for the ListCrossAccountAuthorizations API call. */
	static readonly ListCrossAccountAuthorizations: string[] = [
		"route53-recovery-readiness:ListCrossAccountAuthorizations",
	];
	/** IAM actions required for the ListReadinessChecks API call. */
	static readonly ListReadinessChecks: string[] = [
		"route53-recovery-readiness:ListReadinessChecks",
	];
	/** IAM actions required for the ListRecoveryGroups API call. */
	static readonly ListRecoveryGroups: string[] = [
		"route53-recovery-readiness:ListRecoveryGroups",
	];
	/** IAM actions required for the ListResourceSets API call. */
	static readonly ListResourceSets: string[] = [
		"route53-recovery-readiness:ListResourceSets",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = [
		"route53-recovery-readiness:ListRules",
	];
	/** IAM actions required for the ListTagsForResources API call. */
	static readonly ListTagsForResources: string[] = [
		"route53-recovery-readiness:ListTagsForResources",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"route53-recovery-readiness:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"route53-recovery-readiness:UntagResource",
	];
	/** IAM actions required for the UpdateCell API call. */
	static readonly UpdateCell: string[] = [
		"route53-recovery-readiness:UpdateCell",
	];
	/** IAM actions required for the UpdateReadinessCheck API call. */
	static readonly UpdateReadinessCheck: string[] = [
		"route53-recovery-readiness:UpdateReadinessCheck",
	];
	/** IAM actions required for the UpdateRecoveryGroup API call. */
	static readonly UpdateRecoveryGroup: string[] = [
		"route53-recovery-readiness:UpdateRecoveryGroup",
	];
	/** IAM actions required for the UpdateResourceSet API call. */
	static readonly UpdateResourceSet: string[] = [
		"route53-recovery-readiness:UpdateResourceSet",
	];
}

/**
 * Condition key constants and builders for route53-recovery-readiness.
 */
export class Route53RecoveryReadinessConditions {
	/** Condition keys applicable to the CreateCell action. */
	static readonly CreateCellConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateReadinessCheck action. */
	static readonly CreateReadinessCheckConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecoveryGroup action. */
	static readonly CreateRecoveryGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResourceSet action. */
	static readonly CreateResourceSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCell action. */
	static readonly UpdateCellConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateReadinessCheck action. */
	static readonly UpdateReadinessCheckConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateRecoveryGroup action. */
	static readonly UpdateRecoveryGroupConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateResourceSet action. */
	static readonly UpdateResourceSetConditionKeys: string[] = ["aws:TagKeys"];

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
