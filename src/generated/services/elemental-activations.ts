// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elemental-activations.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elemental-activations service.
 */
export class ElementalActivationsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elemental-activations";

	/** [Write] elemental-activations:CompleteAccountRegistration */
	static readonly CompleteAccountRegistration =
		"elemental-activations:CompleteAccountRegistration";
	/** [Write] elemental-activations:CompleteFileUpload */
	static readonly CompleteFileUpload =
		"elemental-activations:CompleteFileUpload";
	/** [Write] elemental-activations:ConfirmAccount */
	static readonly ConfirmAccount = "elemental-activations:ConfirmAccount";
	/** [Read] elemental-activations:DownloadKickstart */
	static readonly DownloadKickstart = "elemental-activations:DownloadKickstart";
	/** [Read] elemental-activations:DownloadSoftware */
	static readonly DownloadSoftware = "elemental-activations:DownloadSoftware";
	/** [Write] elemental-activations:GenerateLicense */
	static readonly GenerateLicense = "elemental-activations:GenerateLicense";
	/** [Write] elemental-activations:GenerateLicenses */
	static readonly GenerateLicenses = "elemental-activations:GenerateLicenses";
	/** [Read] elemental-activations:GetArtifactGroupSoftwareVersions */
	static readonly actionGetArtifactGroupSoftwareVersions =
		"elemental-activations:GetArtifactGroupSoftwareVersions";
	/** [Read] elemental-activations:GetAsset */
	static readonly actionGetAsset = "elemental-activations:GetAsset";
	/** [Read] elemental-activations:GetAssets */
	static readonly actionGetAssets = "elemental-activations:GetAssets";
	/** [Read] elemental-activations:GetProductAdvisories */
	static readonly actionGetProductAdvisories =
		"elemental-activations:GetProductAdvisories";
	/** [Read] elemental-activations:GetSoftwareVersions */
	static readonly actionGetSoftwareVersions =
		"elemental-activations:GetSoftwareVersions";
	/** [Write] elemental-activations:StartFileUpload */
	static readonly StartFileUpload = "elemental-activations:StartFileUpload";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElementalActivationsActions.DownloadKickstart,
		ElementalActivationsActions.DownloadSoftware,
		ElementalActivationsActions.actionGetArtifactGroupSoftwareVersions,
		ElementalActivationsActions.actionGetAsset,
		ElementalActivationsActions.actionGetAssets,
		ElementalActivationsActions.actionGetProductAdvisories,
		ElementalActivationsActions.actionGetSoftwareVersions,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElementalActivationsActions.CompleteAccountRegistration,
		ElementalActivationsActions.CompleteFileUpload,
		ElementalActivationsActions.ConfirmAccount,
		ElementalActivationsActions.GenerateLicense,
		ElementalActivationsActions.GenerateLicenses,
		ElementalActivationsActions.StartFileUpload,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}
