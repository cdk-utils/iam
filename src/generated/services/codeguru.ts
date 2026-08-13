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
	static readonly actionGetCodeGuruFreeTrialSummary =
		"codeguru:GetCodeGuruFreeTrialSummary";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeguruActions.actionGetCodeGuruFreeTrialSummary,
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
