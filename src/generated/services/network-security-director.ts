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
	static readonly actionGetFinding = "network-security-director:GetFinding";
	/** [Read] network-security-director:GetResource */
	static readonly actionGetResource = "network-security-director:GetResource";
	/** [List] network-security-director:ListAccountSummaries */
	static readonly ListAccountSummaries =
		"network-security-director:ListAccountSummaries";
	/** [List] network-security-director:ListFindings */
	static readonly ListFindings = "network-security-director:ListFindings";
	/** [List] network-security-director:ListInsights */
	static readonly ListInsights = "network-security-director:ListInsights";
	/** [List] network-security-director:ListRemediations */
	static readonly ListRemediations =
		"network-security-director:ListRemediations";
	/** [List] network-security-director:ListResources */
	static readonly ListResources = "network-security-director:ListResources";
	/** [Write] network-security-director:UpdateFinding */
	static readonly UpdateFinding = "network-security-director:UpdateFinding";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NetworkSecurityDirectorActions.actionGetFinding,
		NetworkSecurityDirectorActions.actionGetResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NetworkSecurityDirectorActions.UpdateFinding,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NetworkSecurityDirectorActions.ListAccountSummaries,
		NetworkSecurityDirectorActions.ListFindings,
		NetworkSecurityDirectorActions.ListInsights,
		NetworkSecurityDirectorActions.ListRemediations,
		NetworkSecurityDirectorActions.ListResources,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
