// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codeguru.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codeguru service.
 */
export class CodeguruActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codeguru";

	/** [Read] codeguru:GetCodeGuruFreeTrialSummary */
	static readonly GET_CODE_GURU_FREE_TRIAL_SUMMARY =
		"codeguru:GetCodeGuruFreeTrialSummary";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeguruActions.GET_CODE_GURU_FREE_TRIAL_SUMMARY,
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
