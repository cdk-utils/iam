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
	static readonly AddPurchaseOrder = "purchase-orders:AddPurchaseOrder";
	/** [Write] purchase-orders:DeletePurchaseOrder */
	static readonly DeletePurchaseOrder = "purchase-orders:DeletePurchaseOrder";
	/** [Read] purchase-orders:GetConsoleActionSetEnforced */
	static readonly actionGetConsoleActionSetEnforced =
		"purchase-orders:GetConsoleActionSetEnforced";
	/** [Read] purchase-orders:GetPurchaseOrder */
	static readonly actionGetPurchaseOrder = "purchase-orders:GetPurchaseOrder";
	/** [List] purchase-orders:ListPurchaseOrderInvoices */
	static readonly ListPurchaseOrderInvoices =
		"purchase-orders:ListPurchaseOrderInvoices";
	/** [List] purchase-orders:ListPurchaseOrders */
	static readonly ListPurchaseOrders = "purchase-orders:ListPurchaseOrders";
	/** [Read] purchase-orders:ListTagsForResource */
	static readonly ListTagsForResource = "purchase-orders:ListTagsForResource";
	/** [Write] purchase-orders:ModifyPurchaseOrders */
	static readonly ModifyPurchaseOrders = "purchase-orders:ModifyPurchaseOrders";
	/** [Tagging] purchase-orders:TagResource */
	static readonly TagResource = "purchase-orders:TagResource";
	/** [Tagging] purchase-orders:UntagResource */
	static readonly UntagResource = "purchase-orders:UntagResource";
	/** [Write] purchase-orders:UpdateConsoleActionSetEnforced */
	static readonly UpdateConsoleActionSetEnforced =
		"purchase-orders:UpdateConsoleActionSetEnforced";
	/** [Write] purchase-orders:UpdatePurchaseOrder */
	static readonly UpdatePurchaseOrder = "purchase-orders:UpdatePurchaseOrder";
	/** [Write] purchase-orders:UpdatePurchaseOrderStatus */
	static readonly UpdatePurchaseOrderStatus =
		"purchase-orders:UpdatePurchaseOrderStatus";
	/** [Read] purchase-orders:ViewPurchaseOrders */
	static readonly ViewPurchaseOrders = "purchase-orders:ViewPurchaseOrders";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PurchaseOrdersActions.actionGetConsoleActionSetEnforced,
		PurchaseOrdersActions.actionGetPurchaseOrder,
		PurchaseOrdersActions.ListTagsForResource,
		PurchaseOrdersActions.ViewPurchaseOrders,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PurchaseOrdersActions.AddPurchaseOrder,
		PurchaseOrdersActions.DeletePurchaseOrder,
		PurchaseOrdersActions.ModifyPurchaseOrders,
		PurchaseOrdersActions.UpdateConsoleActionSetEnforced,
		PurchaseOrdersActions.UpdatePurchaseOrder,
		PurchaseOrdersActions.UpdatePurchaseOrderStatus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PurchaseOrdersActions.ListPurchaseOrderInvoices,
		PurchaseOrdersActions.ListPurchaseOrders,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PurchaseOrdersActions.TagResource,
		PurchaseOrdersActions.UntagResource,
	];
}

/**
 * Properties for building a purchase-order ARN.
 */
export interface PurchaseOrdersPurchaseOrderArnProps {
	/** The ResourceName component of the ARN. */
	readonly resourceName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a purchase-order ARN.
 */
export interface PurchaseOrdersPurchaseOrderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceName component. */
	readonly resourceName: string;
}

const PurchaseOrderArnRegex =
	/^arn:(?<partition>[^:]+):purchase-orders::(?<account>[^:]*):purchase-order\/(?<resourceName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for purchase-orders resources.
 */
export class PurchaseOrdersResources {
	/**
	 * Builds an ARN for the purchase-order resource.
	 */
	static purchaseOrder(props: PurchaseOrdersPurchaseOrderArnProps): string {
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
	static parsePurchaseOrderArn(
		arn: string,
	): PurchaseOrdersPurchaseOrderArnComponents {
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
	static readonly AddPurchaseOrderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeletePurchaseOrder action. */
	static readonly DeletePurchaseOrderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetPurchaseOrder action. */
	static readonly actionGetPurchaseOrderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListPurchaseOrderInvoices action. */
	static readonly ListPurchaseOrderInvoicesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ModifyPurchaseOrders action. */
	static readonly ModifyPurchaseOrdersConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePurchaseOrder action. */
	static readonly UpdatePurchaseOrderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdatePurchaseOrderStatus action. */
	static readonly UpdatePurchaseOrderStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ViewPurchaseOrders action. */
	static readonly ViewPurchaseOrdersConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
