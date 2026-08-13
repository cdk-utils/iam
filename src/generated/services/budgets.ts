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
	static readonly CREATE_BUDGET_ACTION = "budgets:CreateBudgetAction";
	/** [Write] budgets:DeleteBudgetAction */
	static readonly DELETE_BUDGET_ACTION = "budgets:DeleteBudgetAction";
	/** [Read] budgets:DescribeBudgetAction */
	static readonly DESCRIBE_BUDGET_ACTION = "budgets:DescribeBudgetAction";
	/** [Read] budgets:DescribeBudgetActionHistories */
	static readonly DESCRIBE_BUDGET_ACTION_HISTORIES =
		"budgets:DescribeBudgetActionHistories";
	/** [Read] budgets:DescribeBudgetActionsForAccount */
	static readonly DESCRIBE_BUDGET_ACTIONS_FOR_ACCOUNT =
		"budgets:DescribeBudgetActionsForAccount";
	/** [Read] budgets:DescribeBudgetActionsForBudget */
	static readonly DESCRIBE_BUDGET_ACTIONS_FOR_BUDGET =
		"budgets:DescribeBudgetActionsForBudget";
	/** [Write] budgets:ExecuteBudgetAction */
	static readonly EXECUTE_BUDGET_ACTION = "budgets:ExecuteBudgetAction";
	/** [Read] budgets:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "budgets:ListTagsForResource";
	/** [Write] budgets:ModifyBudget */
	static readonly MODIFY_BUDGET = "budgets:ModifyBudget";
	/** [Tagging] budgets:TagResource */
	static readonly TAG_RESOURCE = "budgets:TagResource";
	/** [Tagging] budgets:UntagResource */
	static readonly UNTAG_RESOURCE = "budgets:UntagResource";
	/** [Write] budgets:UpdateBudgetAction */
	static readonly UPDATE_BUDGET_ACTION = "budgets:UpdateBudgetAction";
	/** [Read] budgets:ViewBudget */
	static readonly VIEW_BUDGET = "budgets:ViewBudget";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BudgetsActions.DESCRIBE_BUDGET_ACTION,
		BudgetsActions.DESCRIBE_BUDGET_ACTION_HISTORIES,
		BudgetsActions.DESCRIBE_BUDGET_ACTIONS_FOR_ACCOUNT,
		BudgetsActions.DESCRIBE_BUDGET_ACTIONS_FOR_BUDGET,
		BudgetsActions.LIST_TAGS_FOR_RESOURCE,
		BudgetsActions.VIEW_BUDGET,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BudgetsActions.CREATE_BUDGET_ACTION,
		BudgetsActions.DELETE_BUDGET_ACTION,
		BudgetsActions.EXECUTE_BUDGET_ACTION,
		BudgetsActions.MODIFY_BUDGET,
		BudgetsActions.UPDATE_BUDGET_ACTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BudgetsActions.TAG_RESOURCE,
		BudgetsActions.UNTAG_RESOURCE,
	];
}

const BudgetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):budgets::(?<account>[^:]*):budget/(?<budgetName>[^:/?]+)$",
);
const BudgetActionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):budgets::(?<account>[^:]*):budget/(?<budgetName>[^:/?]+)/action/(?<actionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for budgets resources.
 */
export class BudgetsResources {
	/**
	 * Builds an ARN for the budget resource.
	 */
	static budget(props: {
		/** The BudgetName component of the ARN. */
		readonly budgetName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBudgetArn(arn: string): {
		partition: string;
		account: string;
		budgetName: string;
	} {
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
	static budgetAction(props: {
		/** The BudgetName component of the ARN. */
		readonly budgetName: string;
		/** The ActionId component of the ARN. */
		readonly actionId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseBudgetActionArn(arn: string): {
		partition: string;
		account: string;
		budgetName: string;
		actionId: string;
	} {
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
	static readonly CREATE_BUDGET: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
		"budgets:TagResource",
	];
	/** IAM actions required for the CreateBudgetAction API call. */
	static readonly CREATE_BUDGET_ACTION: string[] = [
		"budgets:CreateBudgetAction",
		"aws-portal:ModifyBilling",
		"iam:PassRole",
		"budgets:TagResource",
	];
	/** IAM actions required for the CreateNotification API call. */
	static readonly CREATE_NOTIFICATION: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the CreateSubscriber API call. */
	static readonly CREATE_SUBSCRIBER: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DeleteBudget API call. */
	static readonly DELETE_BUDGET: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DeleteBudgetAction API call. */
	static readonly DELETE_BUDGET_ACTION: string[] = [
		"budgets:DeleteBudgetAction",
		"aws-portal:ModifyBilling",
	];
	/** IAM actions required for the DeleteNotification API call. */
	static readonly DELETE_NOTIFICATION: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DeleteSubscriber API call. */
	static readonly DELETE_SUBSCRIBER: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the DescribeBudget API call. */
	static readonly DESCRIBE_BUDGET: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeBudgetAction API call. */
	static readonly DESCRIBE_BUDGET_ACTION: string[] = [
		"budgets:DescribeBudgetAction",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetActionHistories API call. */
	static readonly DESCRIBE_BUDGET_ACTION_HISTORIES: string[] = [
		"budgets:DescribeBudgetActionHistories",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetActionsForAccount API call. */
	static readonly DESCRIBE_BUDGET_ACTIONS_FOR_ACCOUNT: string[] = [
		"budgets:DescribeBudgetActionsForAccount",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetActionsForBudget API call. */
	static readonly DESCRIBE_BUDGET_ACTIONS_FOR_BUDGET: string[] = [
		"budgets:DescribeBudgetActionsForBudget",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DescribeBudgetNotificationsForAccount API call. */
	static readonly DESCRIBE_BUDGET_NOTIFICATIONS_FOR_ACCOUNT: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeBudgetPerformanceHistory API call. */
	static readonly DESCRIBE_BUDGET_PERFORMANCE_HISTORY: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeBudgets API call. */
	static readonly DESCRIBE_BUDGETS: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeNotificationsForBudget API call. */
	static readonly DESCRIBE_NOTIFICATIONS_FOR_BUDGET: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the DescribeSubscribersForNotification API call. */
	static readonly DESCRIBE_SUBSCRIBERS_FOR_NOTIFICATION: string[] = [
		"aws-portal:ViewBilling",
		"budgets:ViewBudget",
	];
	/** IAM actions required for the ExecuteBudgetAction API call. */
	static readonly EXECUTE_BUDGET_ACTION: string[] = [
		"budgets:ExecuteBudgetAction",
		"aws-portal:ModifyBilling",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"budgets:ListTagsForResource",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:UntagResource",
	];
	/** IAM actions required for the UpdateBudget API call. */
	static readonly UPDATE_BUDGET: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the UpdateBudgetAction API call. */
	static readonly UPDATE_BUDGET_ACTION: string[] = [
		"aws-portal:ModifyBilling",
		"iam:PassRole",
		"budgets:UpdateBudgetAction",
	];
	/** IAM actions required for the UpdateNotification API call. */
	static readonly UPDATE_NOTIFICATION: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
	/** IAM actions required for the UpdateSubscriber API call. */
	static readonly UPDATE_SUBSCRIBER: string[] = [
		"aws-portal:ModifyBilling",
		"budgets:ModifyBudget",
	];
}

/**
 * Condition key constants and builders for budgets.
 */
export class BudgetsConditions {
	/** Condition keys applicable to the CreateBudgetAction action. */
	static readonly CREATE_BUDGET_ACTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
