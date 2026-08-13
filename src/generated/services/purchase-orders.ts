// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/purchase-orders.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the purchase-orders service.
 */
export class PurchaseOrdersActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "purchase-orders";

	/** [Write] purchase-orders:AddPurchaseOrder */
	static readonly ADD_PURCHASE_ORDER = "purchase-orders:AddPurchaseOrder";
	/** [Write] purchase-orders:DeletePurchaseOrder */
	static readonly DELETE_PURCHASE_ORDER = "purchase-orders:DeletePurchaseOrder";
	/** [Read] purchase-orders:GetConsoleActionSetEnforced */
	static readonly GET_CONSOLE_ACTION_SET_ENFORCED =
		"purchase-orders:GetConsoleActionSetEnforced";
	/** [Read] purchase-orders:GetPurchaseOrder */
	static readonly GET_PURCHASE_ORDER = "purchase-orders:GetPurchaseOrder";
	/** [List] purchase-orders:ListPurchaseOrderInvoices */
	static readonly LIST_PURCHASE_ORDER_INVOICES =
		"purchase-orders:ListPurchaseOrderInvoices";
	/** [List] purchase-orders:ListPurchaseOrders */
	static readonly LIST_PURCHASE_ORDERS = "purchase-orders:ListPurchaseOrders";
	/** [Read] purchase-orders:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"purchase-orders:ListTagsForResource";
	/** [Write] purchase-orders:ModifyPurchaseOrders */
	static readonly MODIFY_PURCHASE_ORDERS =
		"purchase-orders:ModifyPurchaseOrders";
	/** [Tagging] purchase-orders:TagResource */
	static readonly TAG_RESOURCE = "purchase-orders:TagResource";
	/** [Tagging] purchase-orders:UntagResource */
	static readonly UNTAG_RESOURCE = "purchase-orders:UntagResource";
	/** [Write] purchase-orders:UpdateConsoleActionSetEnforced */
	static readonly UPDATE_CONSOLE_ACTION_SET_ENFORCED =
		"purchase-orders:UpdateConsoleActionSetEnforced";
	/** [Write] purchase-orders:UpdatePurchaseOrder */
	static readonly UPDATE_PURCHASE_ORDER = "purchase-orders:UpdatePurchaseOrder";
	/** [Write] purchase-orders:UpdatePurchaseOrderStatus */
	static readonly UPDATE_PURCHASE_ORDER_STATUS =
		"purchase-orders:UpdatePurchaseOrderStatus";
	/** [Read] purchase-orders:ViewPurchaseOrders */
	static readonly VIEW_PURCHASE_ORDERS = "purchase-orders:ViewPurchaseOrders";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PurchaseOrdersActions.GET_CONSOLE_ACTION_SET_ENFORCED,
		PurchaseOrdersActions.GET_PURCHASE_ORDER,
		PurchaseOrdersActions.LIST_TAGS_FOR_RESOURCE,
		PurchaseOrdersActions.VIEW_PURCHASE_ORDERS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PurchaseOrdersActions.ADD_PURCHASE_ORDER,
		PurchaseOrdersActions.DELETE_PURCHASE_ORDER,
		PurchaseOrdersActions.MODIFY_PURCHASE_ORDERS,
		PurchaseOrdersActions.UPDATE_CONSOLE_ACTION_SET_ENFORCED,
		PurchaseOrdersActions.UPDATE_PURCHASE_ORDER,
		PurchaseOrdersActions.UPDATE_PURCHASE_ORDER_STATUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PurchaseOrdersActions.LIST_PURCHASE_ORDER_INVOICES,
		PurchaseOrdersActions.LIST_PURCHASE_ORDERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PurchaseOrdersActions.TAG_RESOURCE,
		PurchaseOrdersActions.UNTAG_RESOURCE,
	];
}

const PurchaseOrderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):purchase-orders::(?<account>[^:]*):purchase-order/(?<resourceName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for purchase-orders resources.
 */
export class PurchaseOrdersResources {
	/**
	 * Builds an ARN for the purchase-order resource.
	 */
	static purchaseOrder(props: {
		/** The ResourceName component of the ARN. */
		readonly resourceName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:purchase-orders::${props.account ?? "*"}:purchase-order/${props.resourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the purchase-order resource.
	 */
	static isValidPurchaseOrderArn(arn: string): boolean {
		return PurchaseOrderArnRegex.test(arn);
	}

	/**
	 * Parses a purchase-order ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePurchaseOrderArn(arn: string): {
		partition: string;
		account: string;
		resourceName: string;
	} {
		const match = PurchaseOrderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid purchase-order ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceName: match.groups!.resourceName,
		};
	}
}

/**
 * Condition key constants and builders for purchase-orders.
 */
export class PurchaseOrdersConditions {
	/** Condition keys applicable to the AddPurchaseOrder action. */
	static readonly ADD_PURCHASE_ORDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeletePurchaseOrder action. */
	static readonly DELETE_PURCHASE_ORDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPurchaseOrder action. */
	static readonly GET_PURCHASE_ORDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPurchaseOrderInvoices action. */
	static readonly LIST_PURCHASE_ORDER_INVOICES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyPurchaseOrders action. */
	static readonly MODIFY_PURCHASE_ORDERS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePurchaseOrder action. */
	static readonly UPDATE_PURCHASE_ORDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePurchaseOrderStatus action. */
	static readonly UPDATE_PURCHASE_ORDER_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ViewPurchaseOrders action. */
	static readonly VIEW_PURCHASE_ORDERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
