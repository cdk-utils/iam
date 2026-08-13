// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bcm-pricing-calculator.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bcm-pricing-calculator service.
 */
export class BcmPricingCalculatorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bcm-pricing-calculator";

	/** [Write] bcm-pricing-calculator:CreateBillEstimate */
	static readonly CreateBillEstimate =
		"bcm-pricing-calculator:CreateBillEstimate";
	/** [Write] bcm-pricing-calculator:CreateBillScenario */
	static readonly CreateBillScenario =
		"bcm-pricing-calculator:CreateBillScenario";
	/** [Write] bcm-pricing-calculator:CreateBillScenarioCommitmentModification */
	static readonly CreateBillScenarioCommitmentModification =
		"bcm-pricing-calculator:CreateBillScenarioCommitmentModification";
	/** [Write] bcm-pricing-calculator:CreateBillScenarioUsageModification */
	static readonly CreateBillScenarioUsageModification =
		"bcm-pricing-calculator:CreateBillScenarioUsageModification";
	/** [Write] bcm-pricing-calculator:CreateWorkloadEstimate */
	static readonly CreateWorkloadEstimate =
		"bcm-pricing-calculator:CreateWorkloadEstimate";
	/** [Write] bcm-pricing-calculator:CreateWorkloadEstimateUsage */
	static readonly CreateWorkloadEstimateUsage =
		"bcm-pricing-calculator:CreateWorkloadEstimateUsage";
	/** [Write] bcm-pricing-calculator:DeleteBillEstimate */
	static readonly DeleteBillEstimate =
		"bcm-pricing-calculator:DeleteBillEstimate";
	/** [Write] bcm-pricing-calculator:DeleteBillScenario */
	static readonly DeleteBillScenario =
		"bcm-pricing-calculator:DeleteBillScenario";
	/** [Write] bcm-pricing-calculator:DeleteBillScenarioCommitmentModification */
	static readonly DeleteBillScenarioCommitmentModification =
		"bcm-pricing-calculator:DeleteBillScenarioCommitmentModification";
	/** [Write] bcm-pricing-calculator:DeleteBillScenarioUsageModification */
	static readonly DeleteBillScenarioUsageModification =
		"bcm-pricing-calculator:DeleteBillScenarioUsageModification";
	/** [Write] bcm-pricing-calculator:DeleteWorkloadEstimate */
	static readonly DeleteWorkloadEstimate =
		"bcm-pricing-calculator:DeleteWorkloadEstimate";
	/** [Write] bcm-pricing-calculator:DeleteWorkloadEstimateUsage */
	static readonly DeleteWorkloadEstimateUsage =
		"bcm-pricing-calculator:DeleteWorkloadEstimateUsage";
	/** [Read] bcm-pricing-calculator:GetBillEstimate */
	static readonly actionGetBillEstimate =
		"bcm-pricing-calculator:GetBillEstimate";
	/** [Read] bcm-pricing-calculator:GetBillScenario */
	static readonly actionGetBillScenario =
		"bcm-pricing-calculator:GetBillScenario";
	/** [Read] bcm-pricing-calculator:GetPreferences */
	static readonly actionGetPreferences =
		"bcm-pricing-calculator:GetPreferences";
	/** [Read] bcm-pricing-calculator:GetWorkloadEstimate */
	static readonly actionGetWorkloadEstimate =
		"bcm-pricing-calculator:GetWorkloadEstimate";
	/** [List] bcm-pricing-calculator:ListBillEstimateCommitments */
	static readonly ListBillEstimateCommitments =
		"bcm-pricing-calculator:ListBillEstimateCommitments";
	/** [List] bcm-pricing-calculator:ListBillEstimateInputCommitmentModifications */
	static readonly ListBillEstimateInputCommitmentModifications =
		"bcm-pricing-calculator:ListBillEstimateInputCommitmentModifications";
	/** [List] bcm-pricing-calculator:ListBillEstimateInputUsageModifications */
	static readonly ListBillEstimateInputUsageModifications =
		"bcm-pricing-calculator:ListBillEstimateInputUsageModifications";
	/** [List] bcm-pricing-calculator:ListBillEstimateLineItems */
	static readonly ListBillEstimateLineItems =
		"bcm-pricing-calculator:ListBillEstimateLineItems";
	/** [List] bcm-pricing-calculator:ListBillEstimates */
	static readonly ListBillEstimates =
		"bcm-pricing-calculator:ListBillEstimates";
	/** [List] bcm-pricing-calculator:ListBillScenarioCommitmentModifications */
	static readonly ListBillScenarioCommitmentModifications =
		"bcm-pricing-calculator:ListBillScenarioCommitmentModifications";
	/** [List] bcm-pricing-calculator:ListBillScenarioUsageModifications */
	static readonly ListBillScenarioUsageModifications =
		"bcm-pricing-calculator:ListBillScenarioUsageModifications";
	/** [List] bcm-pricing-calculator:ListBillScenarios */
	static readonly ListBillScenarios =
		"bcm-pricing-calculator:ListBillScenarios";
	/** [Tagging] bcm-pricing-calculator:ListTagsForResource */
	static readonly ListTagsForResource =
		"bcm-pricing-calculator:ListTagsForResource";
	/** [List] bcm-pricing-calculator:ListWorkloadEstimateUsage */
	static readonly ListWorkloadEstimateUsage =
		"bcm-pricing-calculator:ListWorkloadEstimateUsage";
	/** [List] bcm-pricing-calculator:ListWorkloadEstimates */
	static readonly ListWorkloadEstimates =
		"bcm-pricing-calculator:ListWorkloadEstimates";
	/** [Tagging] bcm-pricing-calculator:TagResource */
	static readonly TagResource = "bcm-pricing-calculator:TagResource";
	/** [Tagging] bcm-pricing-calculator:UntagResource */
	static readonly UntagResource = "bcm-pricing-calculator:UntagResource";
	/** [Write] bcm-pricing-calculator:UpdateBillEstimate */
	static readonly UpdateBillEstimate =
		"bcm-pricing-calculator:UpdateBillEstimate";
	/** [Write] bcm-pricing-calculator:UpdateBillScenario */
	static readonly UpdateBillScenario =
		"bcm-pricing-calculator:UpdateBillScenario";
	/** [Write] bcm-pricing-calculator:UpdateBillScenarioCommitmentModification */
	static readonly UpdateBillScenarioCommitmentModification =
		"bcm-pricing-calculator:UpdateBillScenarioCommitmentModification";
	/** [Write] bcm-pricing-calculator:UpdateBillScenarioUsageModification */
	static readonly UpdateBillScenarioUsageModification =
		"bcm-pricing-calculator:UpdateBillScenarioUsageModification";
	/** [Write] bcm-pricing-calculator:UpdatePreferences */
	static readonly UpdatePreferences =
		"bcm-pricing-calculator:UpdatePreferences";
	/** [Write] bcm-pricing-calculator:UpdateWorkloadEstimate */
	static readonly UpdateWorkloadEstimate =
		"bcm-pricing-calculator:UpdateWorkloadEstimate";
	/** [Write] bcm-pricing-calculator:UpdateWorkloadEstimateUsage */
	static readonly UpdateWorkloadEstimateUsage =
		"bcm-pricing-calculator:UpdateWorkloadEstimateUsage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BcmPricingCalculatorActions.actionGetBillEstimate,
		BcmPricingCalculatorActions.actionGetBillScenario,
		BcmPricingCalculatorActions.actionGetPreferences,
		BcmPricingCalculatorActions.actionGetWorkloadEstimate,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BcmPricingCalculatorActions.CreateBillEstimate,
		BcmPricingCalculatorActions.CreateBillScenario,
		BcmPricingCalculatorActions.CreateBillScenarioCommitmentModification,
		BcmPricingCalculatorActions.CreateBillScenarioUsageModification,
		BcmPricingCalculatorActions.CreateWorkloadEstimate,
		BcmPricingCalculatorActions.CreateWorkloadEstimateUsage,
		BcmPricingCalculatorActions.DeleteBillEstimate,
		BcmPricingCalculatorActions.DeleteBillScenario,
		BcmPricingCalculatorActions.DeleteBillScenarioCommitmentModification,
		BcmPricingCalculatorActions.DeleteBillScenarioUsageModification,
		BcmPricingCalculatorActions.DeleteWorkloadEstimate,
		BcmPricingCalculatorActions.DeleteWorkloadEstimateUsage,
		BcmPricingCalculatorActions.UpdateBillEstimate,
		BcmPricingCalculatorActions.UpdateBillScenario,
		BcmPricingCalculatorActions.UpdateBillScenarioCommitmentModification,
		BcmPricingCalculatorActions.UpdateBillScenarioUsageModification,
		BcmPricingCalculatorActions.UpdatePreferences,
		BcmPricingCalculatorActions.UpdateWorkloadEstimate,
		BcmPricingCalculatorActions.UpdateWorkloadEstimateUsage,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BcmPricingCalculatorActions.ListBillEstimateCommitments,
		BcmPricingCalculatorActions.ListBillEstimateInputCommitmentModifications,
		BcmPricingCalculatorActions.ListBillEstimateInputUsageModifications,
		BcmPricingCalculatorActions.ListBillEstimateLineItems,
		BcmPricingCalculatorActions.ListBillEstimates,
		BcmPricingCalculatorActions.ListBillScenarioCommitmentModifications,
		BcmPricingCalculatorActions.ListBillScenarioUsageModifications,
		BcmPricingCalculatorActions.ListBillScenarios,
		BcmPricingCalculatorActions.ListWorkloadEstimateUsage,
		BcmPricingCalculatorActions.ListWorkloadEstimates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BcmPricingCalculatorActions.ListTagsForResource,
		BcmPricingCalculatorActions.TagResource,
		BcmPricingCalculatorActions.UntagResource,
	];
}

/**
 * Properties for building a bill-estimate ARN.
 */
export interface BcmPricingCalculatorBillEstimateArnProps {
	/** The BillEstimateId component of the ARN. */
	readonly billEstimateId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a bill-estimate ARN.
 */
export interface BcmPricingCalculatorBillEstimateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BillEstimateId component. */
	readonly billEstimateId: string;
}

/**
 * Properties for building a bill-scenario ARN.
 */
export interface BcmPricingCalculatorBillScenarioArnProps {
	/** The BillScenarioId component of the ARN. */
	readonly billScenarioId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a bill-scenario ARN.
 */
export interface BcmPricingCalculatorBillScenarioArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BillScenarioId component. */
	readonly billScenarioId: string;
}

/**
 * Properties for building a workload-estimate ARN.
 */
export interface BcmPricingCalculatorWorkloadEstimateArnProps {
	/** The WorkloadEstimateId component of the ARN. */
	readonly workloadEstimateId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workload-estimate ARN.
 */
export interface BcmPricingCalculatorWorkloadEstimateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkloadEstimateId component. */
	readonly workloadEstimateId: string;
}

const BillEstimateArnRegex =
	/^arn:(?<partition>[^:]+):bcm-pricing-calculator::(?<account>[^:]*):bill-estimate\/(?<billEstimateId>[^:/?]+)$/;
const BillScenarioArnRegex =
	/^arn:(?<partition>[^:]+):bcm-pricing-calculator::(?<account>[^:]*):bill-scenario\/(?<billScenarioId>[^:/?]+)$/;
const WorkloadEstimateArnRegex =
	/^arn:(?<partition>[^:]+):bcm-pricing-calculator::(?<account>[^:]*):workload-estimate\/(?<workloadEstimateId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bcm-pricing-calculator resources.
 */
export class BcmPricingCalculatorResources {
	/**
	 * Builds an ARN for the bill-estimate resource.
	 */
	static billEstimate(props: BcmPricingCalculatorBillEstimateArnProps): string {
		return `arn:${props.partition ?? "aws"}:bcm-pricing-calculator::${props.account ?? "*"}:bill-estimate/${props.billEstimateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bill-estimate resource.
	 */
	static isValidBillEstimateArn(arn: string): boolean {
		return BillEstimateArnRegex.test(arn);
	}

	/**
	 * Parses a bill-estimate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillEstimateArn(
		arn: string,
	): BcmPricingCalculatorBillEstimateArnComponents {
		const match = BillEstimateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bill-estimate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			billEstimateId: match.groups!.billEstimateId,
		};
	}

	/**
	 * Builds an ARN for the bill-scenario resource.
	 */
	static billScenario(props: BcmPricingCalculatorBillScenarioArnProps): string {
		return `arn:${props.partition ?? "aws"}:bcm-pricing-calculator::${props.account ?? "*"}:bill-scenario/${props.billScenarioId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bill-scenario resource.
	 */
	static isValidBillScenarioArn(arn: string): boolean {
		return BillScenarioArnRegex.test(arn);
	}

	/**
	 * Parses a bill-scenario ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillScenarioArn(
		arn: string,
	): BcmPricingCalculatorBillScenarioArnComponents {
		const match = BillScenarioArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bill-scenario ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			billScenarioId: match.groups!.billScenarioId,
		};
	}

	/**
	 * Builds an ARN for the workload-estimate resource.
	 */
	static workloadEstimate(
		props: BcmPricingCalculatorWorkloadEstimateArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:bcm-pricing-calculator::${props.account ?? "*"}:workload-estimate/${props.workloadEstimateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workload-estimate resource.
	 */
	static isValidWorkloadEstimateArn(arn: string): boolean {
		return WorkloadEstimateArnRegex.test(arn);
	}

	/**
	 * Parses a workload-estimate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkloadEstimateArn(
		arn: string,
	): BcmPricingCalculatorWorkloadEstimateArnComponents {
		const match = WorkloadEstimateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workload-estimate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			workloadEstimateId: match.groups!.workloadEstimateId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for bcm-pricing-calculator.
 */
export class BcmPricingCalculatorOperations {
	/** IAM actions required for the BatchCreateBillScenarioCommitmentModification API call. */
	static readonly BatchCreateBillScenarioCommitmentModification: string[] = [
		"bcm-pricing-calculator:CreateBillScenarioCommitmentModification",
	];
	/** IAM actions required for the BatchCreateBillScenarioUsageModification API call. */
	static readonly BatchCreateBillScenarioUsageModification: string[] = [
		"bcm-pricing-calculator:CreateBillScenarioUsageModification",
	];
	/** IAM actions required for the BatchCreateWorkloadEstimateUsage API call. */
	static readonly BatchCreateWorkloadEstimateUsage: string[] = [
		"bcm-pricing-calculator:CreateWorkloadEstimateUsage",
	];
	/** IAM actions required for the BatchDeleteBillScenarioCommitmentModification API call. */
	static readonly BatchDeleteBillScenarioCommitmentModification: string[] = [
		"bcm-pricing-calculator:DeleteBillScenarioCommitmentModification",
	];
	/** IAM actions required for the BatchDeleteBillScenarioUsageModification API call. */
	static readonly BatchDeleteBillScenarioUsageModification: string[] = [
		"bcm-pricing-calculator:DeleteBillScenarioUsageModification",
	];
	/** IAM actions required for the BatchDeleteWorkloadEstimateUsage API call. */
	static readonly BatchDeleteWorkloadEstimateUsage: string[] = [
		"bcm-pricing-calculator:DeleteWorkloadEstimateUsage",
	];
	/** IAM actions required for the BatchUpdateBillScenarioCommitmentModification API call. */
	static readonly BatchUpdateBillScenarioCommitmentModification: string[] = [
		"bcm-pricing-calculator:UpdateBillScenarioCommitmentModification",
	];
	/** IAM actions required for the BatchUpdateBillScenarioUsageModification API call. */
	static readonly BatchUpdateBillScenarioUsageModification: string[] = [
		"bcm-pricing-calculator:UpdateBillScenarioUsageModification",
	];
	/** IAM actions required for the BatchUpdateWorkloadEstimateUsage API call. */
	static readonly BatchUpdateWorkloadEstimateUsage: string[] = [
		"bcm-pricing-calculator:UpdateWorkloadEstimateUsage",
	];
	/** IAM actions required for the CreateBillEstimate API call. */
	static readonly CreateBillEstimate: string[] = [
		"bcm-pricing-calculator:CreateBillEstimate",
		"bcm-pricing-calculator:TagResource",
	];
	/** IAM actions required for the CreateBillScenario API call. */
	static readonly CreateBillScenario: string[] = [
		"bcm-pricing-calculator:CreateBillScenario",
		"bcm-pricing-calculator:TagResource",
	];
	/** IAM actions required for the CreateWorkloadEstimate API call. */
	static readonly CreateWorkloadEstimate: string[] = [
		"bcm-pricing-calculator:CreateWorkloadEstimate",
		"bcm-pricing-calculator:TagResource",
	];
	/** IAM actions required for the DeleteBillEstimate API call. */
	static readonly DeleteBillEstimate: string[] = [
		"bcm-pricing-calculator:DeleteBillEstimate",
	];
	/** IAM actions required for the DeleteBillScenario API call. */
	static readonly DeleteBillScenario: string[] = [
		"bcm-pricing-calculator:DeleteBillScenario",
	];
	/** IAM actions required for the DeleteWorkloadEstimate API call. */
	static readonly DeleteWorkloadEstimate: string[] = [
		"bcm-pricing-calculator:DeleteWorkloadEstimate",
	];
	/** IAM actions required for the GetBillEstimate API call. */
	static readonly opGetBillEstimate: string[] = [
		"bcm-pricing-calculator:GetBillEstimate",
	];
	/** IAM actions required for the GetBillScenario API call. */
	static readonly opGetBillScenario: string[] = [
		"bcm-pricing-calculator:GetBillScenario",
	];
	/** IAM actions required for the GetPreferences API call. */
	static readonly opGetPreferences: string[] = [
		"bcm-pricing-calculator:GetPreferences",
	];
	/** IAM actions required for the GetWorkloadEstimate API call. */
	static readonly opGetWorkloadEstimate: string[] = [
		"bcm-pricing-calculator:GetWorkloadEstimate",
	];
	/** IAM actions required for the ListBillEstimateCommitments API call. */
	static readonly ListBillEstimateCommitments: string[] = [
		"bcm-pricing-calculator:ListBillEstimateCommitments",
	];
	/** IAM actions required for the ListBillEstimateInputCommitmentModifications API call. */
	static readonly ListBillEstimateInputCommitmentModifications: string[] = [
		"bcm-pricing-calculator:ListBillEstimateInputCommitmentModifications",
	];
	/** IAM actions required for the ListBillEstimateInputUsageModifications API call. */
	static readonly ListBillEstimateInputUsageModifications: string[] = [
		"bcm-pricing-calculator:ListBillEstimateInputUsageModifications",
	];
	/** IAM actions required for the ListBillEstimateLineItems API call. */
	static readonly ListBillEstimateLineItems: string[] = [
		"bcm-pricing-calculator:ListBillEstimateLineItems",
	];
	/** IAM actions required for the ListBillEstimates API call. */
	static readonly ListBillEstimates: string[] = [
		"bcm-pricing-calculator:ListBillEstimates",
	];
	/** IAM actions required for the ListBillScenarioCommitmentModifications API call. */
	static readonly ListBillScenarioCommitmentModifications: string[] = [
		"bcm-pricing-calculator:ListBillScenarioCommitmentModifications",
	];
	/** IAM actions required for the ListBillScenarioUsageModifications API call. */
	static readonly ListBillScenarioUsageModifications: string[] = [
		"bcm-pricing-calculator:ListBillScenarioUsageModifications",
	];
	/** IAM actions required for the ListBillScenarios API call. */
	static readonly ListBillScenarios: string[] = [
		"bcm-pricing-calculator:ListBillScenarios",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"bcm-pricing-calculator:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkloadEstimateUsage API call. */
	static readonly ListWorkloadEstimateUsage: string[] = [
		"bcm-pricing-calculator:ListWorkloadEstimateUsage",
	];
	/** IAM actions required for the ListWorkloadEstimates API call. */
	static readonly ListWorkloadEstimates: string[] = [
		"bcm-pricing-calculator:ListWorkloadEstimates",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"bcm-pricing-calculator:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"bcm-pricing-calculator:UntagResource",
	];
	/** IAM actions required for the UpdateBillEstimate API call. */
	static readonly UpdateBillEstimate: string[] = [
		"bcm-pricing-calculator:UpdateBillEstimate",
	];
	/** IAM actions required for the UpdateBillScenario API call. */
	static readonly UpdateBillScenario: string[] = [
		"bcm-pricing-calculator:UpdateBillScenario",
	];
	/** IAM actions required for the UpdatePreferences API call. */
	static readonly UpdatePreferences: string[] = [
		"bcm-pricing-calculator:UpdatePreferences",
	];
	/** IAM actions required for the UpdateWorkloadEstimate API call. */
	static readonly UpdateWorkloadEstimate: string[] = [
		"bcm-pricing-calculator:UpdateWorkloadEstimate",
	];
}

/**
 * Condition key constants and builders for bcm-pricing-calculator.
 */
export class BcmPricingCalculatorConditions {
	/** Condition keys applicable to the CreateBillScenario action. */
	static readonly CreateBillScenarioConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkloadEstimate action. */
	static readonly CreateWorkloadEstimateConditionKeys: string[] = [
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
