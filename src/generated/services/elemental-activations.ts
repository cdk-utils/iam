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
	static readonly COMPLETE_ACCOUNT_REGISTRATION =
		"elemental-activations:CompleteAccountRegistration";
	/** [Write] elemental-activations:CompleteFileUpload */
	static readonly COMPLETE_FILE_UPLOAD =
		"elemental-activations:CompleteFileUpload";
	/** [Write] elemental-activations:ConfirmAccount */
	static readonly CONFIRM_ACCOUNT = "elemental-activations:ConfirmAccount";
	/** [Read] elemental-activations:DownloadKickstart */
	static readonly DOWNLOAD_KICKSTART =
		"elemental-activations:DownloadKickstart";
	/** [Read] elemental-activations:DownloadSoftware */
	static readonly DOWNLOAD_SOFTWARE = "elemental-activations:DownloadSoftware";
	/** [Write] elemental-activations:GenerateLicense */
	static readonly GENERATE_LICENSE = "elemental-activations:GenerateLicense";
	/** [Write] elemental-activations:GenerateLicenses */
	static readonly GENERATE_LICENSES = "elemental-activations:GenerateLicenses";
	/** [Read] elemental-activations:GetArtifactGroupSoftwareVersions */
	static readonly GET_ARTIFACT_GROUP_SOFTWARE_VERSIONS =
		"elemental-activations:GetArtifactGroupSoftwareVersions";
	/** [Read] elemental-activations:GetAsset */
	static readonly GET_ASSET = "elemental-activations:GetAsset";
	/** [Read] elemental-activations:GetAssets */
	static readonly GET_ASSETS = "elemental-activations:GetAssets";
	/** [Read] elemental-activations:GetProductAdvisories */
	static readonly GET_PRODUCT_ADVISORIES =
		"elemental-activations:GetProductAdvisories";
	/** [Read] elemental-activations:GetSoftwareVersions */
	static readonly GET_SOFTWARE_VERSIONS =
		"elemental-activations:GetSoftwareVersions";
	/** [Write] elemental-activations:StartFileUpload */
	static readonly START_FILE_UPLOAD = "elemental-activations:StartFileUpload";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElementalActivationsActions.DOWNLOAD_KICKSTART,
		ElementalActivationsActions.DOWNLOAD_SOFTWARE,
		ElementalActivationsActions.GET_ARTIFACT_GROUP_SOFTWARE_VERSIONS,
		ElementalActivationsActions.GET_ASSET,
		ElementalActivationsActions.GET_ASSETS,
		ElementalActivationsActions.GET_PRODUCT_ADVISORIES,
		ElementalActivationsActions.GET_SOFTWARE_VERSIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElementalActivationsActions.COMPLETE_ACCOUNT_REGISTRATION,
		ElementalActivationsActions.COMPLETE_FILE_UPLOAD,
		ElementalActivationsActions.CONFIRM_ACCOUNT,
		ElementalActivationsActions.GENERATE_LICENSE,
		ElementalActivationsActions.GENERATE_LICENSES,
		ElementalActivationsActions.START_FILE_UPLOAD,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}
