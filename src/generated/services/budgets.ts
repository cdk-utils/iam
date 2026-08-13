// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/budgets.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the budgets service.
 */
export class BudgetsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "budgets";

	/** [Write] budgets:CreateBudgetAction */
	static readonly CreateBudgetAction = "budgets:CreateBudgetAction";
	/** [Write] budgets:DeleteBudgetAction */
	static readonly DeleteBudgetAction = "budgets:DeleteBudgetAction";
	/** [Read] budgets:DescribeBudgetAction */
	static readonly DescribeBudgetAction = "budgets:DescribeBudgetAction";
	/** [Read] budgets:DescribeBudgetActionHistories */
	static readonly DescribeBudgetActionHistories =
		"budgets:DescribeBudgetActionHistories";
	/** [Read] budgets:DescribeBudgetActionsForAccount */
	static readonly DescribeBudgetActionsForAccount =
		"budgets:DescribeBudgetActionsForAccount";
	/** [Read] budgets:DescribeBudgetActionsForBudget */
	static readonly DescribeBudgetActionsForBudget =
		"budgets:DescribeBudgetActionsForBudget";
	/** [Write] budgets:ExecuteBudgetAction */
	static readonly ExecuteBudgetAction = "budgets:ExecuteBudgetAction";
	/** [Read] budgets:ListTagsForResource */
	static readonly ListTagsForResource = "budgets:ListTagsForResource";
	/** [Write] budgets:ModifyBudget */
	static readonly ModifyBudget = "budgets:ModifyBudget";
	/** [Tagging] budgets:TagResource */
	static readonly TagResource = "budgets:TagResource";
	/** [Tagging] budgets:UntagResource */
	static readonly UntagResource = "budgets:UntagResource";
	/** [Write] budgets:UpdateBudgetAction */
	static readonly UpdateBudgetAction = "budgets:UpdateBudgetAction";
	/** [Read] budgets:ViewBudget */
	static readonly ViewBudget = "budgets:ViewBudget";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BudgetsActions.DescribeBudgetAction,
		BudgetsActions.DescribeBudgetActionHistories,
		BudgetsActions.DescribeBudgetActionsForAccount,
		BudgetsActions.DescribeBudgetActionsForBudget,
		BudgetsActions.ListTagsForResource,
		BudgetsActions.ViewBudget,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BudgetsActions.CreateBudgetAction,
		BudgetsActions.DeleteBudgetAction,
		BudgetsActions.ExecuteBudgetAction,
		BudgetsActions.ModifyBudget,
		BudgetsActions.UpdateBudgetAction,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BudgetsActions.TagResource,
		BudgetsActions.UntagResource,
	];
}

/**
 * Properties for building a budget ARN.
 */
export interface BudgetsBudgetArnProps {
	/** The BudgetName component of the ARN. */
	readonly budgetName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a budget ARN.
 */
export interface BudgetsBudgetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BudgetName component. */
	readonly budgetName: string;
}

/**
 * Properties for building a budgetAction ARN.
 */
export interface BudgetsBudgetActionArnProps {
	/** The BudgetName component of the ARN. */
	readonly budgetName: string;
	/** The ActionId component of the ARN. */
	readonly actionId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a budgetAction ARN.
 */
export interface BudgetsBudgetActionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BudgetName component. */
	readonly budgetName: string;
	/** The ActionId component. */
	readonly actionId: string;
}

const BudgetArnRegex =
	/^arn:(?<partition>[^:]+):budgets::(?<account>[^:]*):budget\/(?<budgetName>[^:/?]+)$/;
const BudgetActionArnRegex =
	/^arn:(?<partition>[^:]+):budgets::(?<account>[^:]*):budget\/(?<budgetName>[^:/?]+)\/action\/(?<actionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for budgets resources.
 */
export class BudgetsResources {
	/**
	 * Builds an ARN for the budget resource.
	 */
	static budget(props: BudgetsBudgetArnProps): string {
		return `arn:${props.partition ?? "aws"}:budgets::${props.account ?? "*"}:budget/${props.budgetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the budget resource.
	 */
	static isValidBudgetArn(arn: string): boolean {
		return BudgetArnRegex.test(arn);
	}

	/**
	 * Parses a budget ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBudgetArn(arn: string): BudgetsBudgetArnComponents {
		const match = BudgetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid budget ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			budgetName: match.groups!.budgetName,
		};
	}

	/**
	 * Builds an ARN for the budgetAction resource.
	 */
	static budgetAction(props: BudgetsBudgetActionArnProps): string {
		return `arn:${props.partition ?? "aws"}:budgets::${props.account ?? "*"}:budget/${props.budgetName}/action/${props.actionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the budgetAction resource.
	 */
	static isValidBudgetActionArn(arn: string): boolean {
		return BudgetActionArnRegex.test(arn);
	}

	/**
	 * Parses a budgetAction ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBudgetActionArn(arn: string): BudgetsBudgetActionArnComponents {
		const match = BudgetActionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid budgetAction ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			budgetName: match.groups!.budgetName,
			actionId: match.groups!.actionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for budgets.
 */
export class BudgetsOperations {
	/** IAM actions required for the CreateBudget API call. */
	static readonly CreateBudget: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
		"budgets:TagResource",
	];
	/** IAM actions required for the CreateBudgetAction API call. */
	static readonly CreateBudgetAction: string[] = [
		"budgets:CreateBudgetAction",
		"aws-portal:ModifyBilling",
		"iam:PassRole",
		"budgets:TagResource",
	];
	/** IAM actions required for the CreateNotification API call. */
	static readonly CreateNotification: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the CreateSubscriber API call. */
	static readonly CreateSubscriber: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DeleteBudget API call. */
	static readonly DeleteBudget: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DeleteBudgetAction API call. */
	static readonly DeleteBudgetAction: string[] = [
		"budgets:DeleteBudgetAction",
		"aws-portal:ModifyBilling",
	];
	/** IAM actions required for the DeleteNotification API call. */
	static readonly DeleteNotification: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DeleteSubscriber API call. */
	static readonly DeleteSubscriber: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DescribeBudget API call. */
	static readonly DescribeBudget: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeBudgetAction API call. */
	static readonly DescribeBudgetAction: string[] = [
		"budgets:DescribeBudgetAction",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetActionHistories API call. */
	static readonly DescribeBudgetActionHistories: string[] = [
		"budgets:DescribeBudgetActionHistories",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetActionsForAccount API call. */
	static readonly DescribeBudgetActionsForAccount: string[] = [
		"budgets:DescribeBudgetActionsForAccount",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetActionsForBudget API call. */
	static readonly DescribeBudgetActionsForBudget: string[] = [
		"budgets:DescribeBudgetActionsForBudget",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetNotificationsForAccount API call. */
	static readonly DescribeBudgetNotificationsForAccount: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeBudgetPerformanceHistory API call. */
	static readonly DescribeBudgetPerformanceHistory: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeBudgets API call. */
	static readonly DescribeBudgets: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeNotificationsForBudget API call. */
	static readonly DescribeNotificationsForBudget: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeSubscribersForNotification API call. */
	static readonly DescribeSubscribersForNotification: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the ExecuteBudgetAction API call. */
	static readonly ExecuteBudgetAction: string[] = [
		"budgets:ExecuteBudgetAction",
		"aws-portal:ModifyBilling",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"budgets:ListTagsForResource",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:UntagResource",
	];
	/** IAM actions required for the UpdateBudget API call. */
	static readonly UpdateBudget: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the UpdateBudgetAction API call. */
	static readonly UpdateBudgetAction: string[] = [
		"aws-portal:ModifyBilling",
		"iam:PassRole",
		"budgets:UpdateBudgetAction",
	];
	/** IAM actions required for the UpdateNotification API call. */
	static readonly UpdateNotification: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the UpdateSubscriber API call. */
	static readonly UpdateSubscriber: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
}

/**
 * Condition key constants and builders for budgets.
 */
export class BudgetsConditions {
	/** Condition keys applicable to the CreateBudgetAction action. */
	static readonly CreateBudgetActionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
