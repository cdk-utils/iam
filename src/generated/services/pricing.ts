// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/pricing.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the pricing service.
 */
export class PricingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "pricing";

	/** [Read] pricing:DescribeServices */
	static readonly DESCRIBE_SERVICES = "pricing:DescribeServices";
	/** [Read] pricing:GetAttributeValues */
	static readonly GET_ATTRIBUTE_VALUES = "pricing:GetAttributeValues";
	/** [Read] pricing:GetPriceListFileUrl */
	static readonly GET_PRICE_LIST_FILE_URL = "pricing:GetPriceListFileUrl";
	/** [Read] pricing:GetProducts */
	static readonly GET_PRODUCTS = "pricing:GetProducts";
	/** [Read] pricing:ListPriceLists */
	static readonly LIST_PRICE_LISTS = "pricing:ListPriceLists";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PricingActions.DESCRIBE_SERVICES,
		PricingActions.GET_ATTRIBUTE_VALUES,
		PricingActions.GET_PRICE_LIST_FILE_URL,
		PricingActions.GET_PRODUCTS,
		PricingActions.LIST_PRICE_LISTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for pricing.
 */
export class PricingOperations {
	/** IAM actions required for the DescribeServices API call. */
	static readonly DESCRIBE_SERVICES: string[] = ["pricing:DescribeServices"];
	/** IAM actions required for the GetAttributeValues API call. */
	static readonly GET_ATTRIBUTE_VALUES: string[] = [
		"pricing:GetAttributeValues",
	];
	/** IAM actions required for the GetPriceListFileUrl API call. */
	static readonly GET_PRICE_LIST_FILE_URL: string[] = [
		"pricing:GetPriceListFileUrl",
	];
	/** IAM actions required for the GetProducts API call. */
	static readonly GET_PRODUCTS: string[] = ["pricing:GetProducts"];
	/** IAM actions required for the ListPriceLists API call. */
	static readonly LIST_PRICE_LISTS: string[] = ["pricing:ListPriceLists"];
}
