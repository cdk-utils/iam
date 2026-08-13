// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sustainability.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sustainability service.
 */
export class SustainabilityActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sustainability";

	/** [Read] sustainability:GetCarbonFootprintSummary */
	static readonly GET_CARBON_FOOTPRINT_SUMMARY =
		"sustainability:GetCarbonFootprintSummary";
	/** [Read] sustainability:GetEstimatedCarbonEmissions */
	static readonly GET_ESTIMATED_CARBON_EMISSIONS =
		"sustainability:GetEstimatedCarbonEmissions";
	/** [Read] sustainability:GetEstimatedCarbonEmissionsDimensionValues */
	static readonly GET_ESTIMATED_CARBON_EMISSIONS_DIMENSION_VALUES =
		"sustainability:GetEstimatedCarbonEmissionsDimensionValues";
	/** [Read] sustainability:GetEstimatedWaterAllocation */
	static readonly GET_ESTIMATED_WATER_ALLOCATION =
		"sustainability:GetEstimatedWaterAllocation";
	/** [Read] sustainability:GetEstimatedWaterAllocationDimensionValues */
	static readonly GET_ESTIMATED_WATER_ALLOCATION_DIMENSION_VALUES =
		"sustainability:GetEstimatedWaterAllocationDimensionValues";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SustainabilityActions.GET_CARBON_FOOTPRINT_SUMMARY,
		SustainabilityActions.GET_ESTIMATED_CARBON_EMISSIONS,
		SustainabilityActions.GET_ESTIMATED_CARBON_EMISSIONS_DIMENSION_VALUES,
		SustainabilityActions.GET_ESTIMATED_WATER_ALLOCATION,
		SustainabilityActions.GET_ESTIMATED_WATER_ALLOCATION_DIMENSION_VALUES,
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
 * API operation to required IAM actions mapping for sustainability.
 */
export class SustainabilityOperations {
	/** IAM actions required for the GetEstimatedCarbonEmissions API call. */
	static readonly GET_ESTIMATED_CARBON_EMISSIONS: string[] = [
		"sustainability:GetEstimatedCarbonEmissions",
	];
	/** IAM actions required for the GetEstimatedCarbonEmissionsDimensionValues API call. */
	static readonly GET_ESTIMATED_CARBON_EMISSIONS_DIMENSION_VALUES: string[] = [
		"sustainability:GetEstimatedCarbonEmissionsDimensionValues",
	];
	/** IAM actions required for the GetEstimatedWaterAllocation API call. */
	static readonly GET_ESTIMATED_WATER_ALLOCATION: string[] = [
		"sustainability:GetEstimatedWaterAllocation",
	];
	/** IAM actions required for the GetEstimatedWaterAllocationDimensionValues API call. */
	static readonly GET_ESTIMATED_WATER_ALLOCATION_DIMENSION_VALUES: string[] = [
		"sustainability:GetEstimatedWaterAllocationDimensionValues",
	];
}
