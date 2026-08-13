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
	static readonly DescribeServices = "pricing:DescribeServices";
	/** [Read] pricing:GetAttributeValues */
	static readonly actionGetAttributeValues = "pricing:GetAttributeValues";
	/** [Read] pricing:GetPriceListFileUrl */
	static readonly actionGetPriceListFileUrl = "pricing:GetPriceListFileUrl";
	/** [Read] pricing:GetProducts */
	static readonly actionGetProducts = "pricing:GetProducts";
	/** [Read] pricing:ListPriceLists */
	static readonly ListPriceLists = "pricing:ListPriceLists";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PricingActions.DescribeServices,
		PricingActions.actionGetAttributeValues,
		PricingActions.actionGetPriceListFileUrl,
		PricingActions.actionGetProducts,
		PricingActions.ListPriceLists,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for pricing.
 */
export class PricingOperations {
	/** IAM actions required for the DescribeServices API call. */
	static readonly DescribeServices: string[] = ["pricing:DescribeServices"];
	/** IAM actions required for the GetAttributeValues API call. */
	static readonly opGetAttributeValues: string[] = [
		"pricing:GetAttributeValues",
	];
	/** IAM actions required for the GetPriceListFileUrl API call. */
	static readonly opGetPriceListFileUrl: string[] = [
		"pricing:GetPriceListFileUrl",
	];
	/** IAM actions required for the GetProducts API call. */
	static readonly opGetProducts: string[] = ["pricing:GetProducts"];
	/** IAM actions required for the ListPriceLists API call. */
	static readonly ListPriceLists: string[] = ["pricing:ListPriceLists"];
}
