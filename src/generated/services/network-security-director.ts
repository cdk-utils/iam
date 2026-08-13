// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/network-security-director.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the network-security-director service.
 */
export class NetworkSecurityDirectorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "network-security-director";

	/** [Read] network-security-director:GetFinding */
	static readonly GET_FINDING = "network-security-director:GetFinding";
	/** [Read] network-security-director:GetResource */
	static readonly GET_RESOURCE = "network-security-director:GetResource";
	/** [List] network-security-director:ListAccountSummaries */
	static readonly LIST_ACCOUNT_SUMMARIES =
		"network-security-director:ListAccountSummaries";
	/** [List] network-security-director:ListFindings */
	static readonly LIST_FINDINGS = "network-security-director:ListFindings";
	/** [List] network-security-director:ListInsights */
	static readonly LIST_INSIGHTS = "network-security-director:ListInsights";
	/** [List] network-security-director:ListRemediations */
	static readonly LIST_REMEDIATIONS =
		"network-security-director:ListRemediations";
	/** [List] network-security-director:ListResources */
	static readonly LIST_RESOURCES = "network-security-director:ListResources";
	/** [Write] network-security-director:UpdateFinding */
	static readonly UPDATE_FINDING = "network-security-director:UpdateFinding";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NetworkSecurityDirectorActions.GET_FINDING,
		NetworkSecurityDirectorActions.GET_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NetworkSecurityDirectorActions.UPDATE_FINDING,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NetworkSecurityDirectorActions.LIST_ACCOUNT_SUMMARIES,
		NetworkSecurityDirectorActions.LIST_FINDINGS,
		NetworkSecurityDirectorActions.LIST_INSIGHTS,
		NetworkSecurityDirectorActions.LIST_REMEDIATIONS,
		NetworkSecurityDirectorActions.LIST_RESOURCES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
