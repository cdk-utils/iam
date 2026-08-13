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
	static readonly actionGetCarbonFootprintSummary =
		"sustainability:GetCarbonFootprintSummary";
	/** [Read] sustainability:GetEstimatedCarbonEmissions */
	static readonly actionGetEstimatedCarbonEmissions =
		"sustainability:GetEstimatedCarbonEmissions";
	/** [Read] sustainability:GetEstimatedCarbonEmissionsDimensionValues */
	static readonly actionGetEstimatedCarbonEmissionsDimensionValues =
		"sustainability:GetEstimatedCarbonEmissionsDimensionValues";
	/** [Read] sustainability:GetEstimatedWaterAllocation */
	static readonly actionGetEstimatedWaterAllocation =
		"sustainability:GetEstimatedWaterAllocation";
	/** [Read] sustainability:GetEstimatedWaterAllocationDimensionValues */
	static readonly actionGetEstimatedWaterAllocationDimensionValues =
		"sustainability:GetEstimatedWaterAllocationDimensionValues";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SustainabilityActions.actionGetCarbonFootprintSummary,
		SustainabilityActions.actionGetEstimatedCarbonEmissions,
		SustainabilityActions.actionGetEstimatedCarbonEmissionsDimensionValues,
		SustainabilityActions.actionGetEstimatedWaterAllocation,
		SustainabilityActions.actionGetEstimatedWaterAllocationDimensionValues,
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
 * API operation to required IAM actions mapping for sustainability.
 */
export class SustainabilityOperations {
	/** IAM actions required for the GetEstimatedCarbonEmissions API call. */
	static readonly opGetEstimatedCarbonEmissions: string[] = [
		"sustainability:GetEstimatedCarbonEmissions",
	];
	/** IAM actions required for the GetEstimatedCarbonEmissionsDimensionValues API call. */
	static readonly opGetEstimatedCarbonEmissionsDimensionValues: string[] = [
		"sustainability:GetEstimatedCarbonEmissionsDimensionValues",
	];
	/** IAM actions required for the GetEstimatedWaterAllocation API call. */
	static readonly opGetEstimatedWaterAllocation: string[] = [
		"sustainability:GetEstimatedWaterAllocation",
	];
	/** IAM actions required for the GetEstimatedWaterAllocationDimensionValues API call. */
	static readonly opGetEstimatedWaterAllocationDimensionValues: string[] = [
		"sustainability:GetEstimatedWaterAllocationDimensionValues",
	];
}
