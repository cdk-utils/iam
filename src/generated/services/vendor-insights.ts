// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/vendor-insights.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the vendor-insights service.
 */
export class VendorInsightsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "vendor-insights";

	/** [Write] vendor-insights:ActivateSecurityProfile */
	static readonly ActivateSecurityProfile =
		"vendor-insights:ActivateSecurityProfile";
	/** [Write] vendor-insights:AssociateDataSource */
	static readonly AssociateDataSource = "vendor-insights:AssociateDataSource";
	/** [Write] vendor-insights:CreateDataSource */
	static readonly CreateDataSource = "vendor-insights:CreateDataSource";
	/** [Write] vendor-insights:CreateSecurityProfile */
	static readonly CreateSecurityProfile =
		"vendor-insights:CreateSecurityProfile";
	/** [Write] vendor-insights:DeactivateSecurityProfile */
	static readonly DeactivateSecurityProfile =
		"vendor-insights:DeactivateSecurityProfile";
	/** [Write] vendor-insights:DeleteDataSource */
	static readonly DeleteDataSource = "vendor-insights:DeleteDataSource";
	/** [Write] vendor-insights:DisassociateDataSource */
	static readonly DisassociateDataSource =
		"vendor-insights:DisassociateDataSource";
	/** [Read] vendor-insights:GetDataSource */
	static readonly actionGetDataSource = "vendor-insights:GetDataSource";
	/** [Read] vendor-insights:GetEntitledSecurityProfileSnapshot */
	static readonly actionGetEntitledSecurityProfileSnapshot =
		"vendor-insights:GetEntitledSecurityProfileSnapshot";
	/** [Read] vendor-insights:GetProfileAccessTerms */
	static readonly actionGetProfileAccessTerms =
		"vendor-insights:GetProfileAccessTerms";
	/** [Read] vendor-insights:GetSecurityProfile */
	static readonly actionGetSecurityProfile =
		"vendor-insights:GetSecurityProfile";
	/** [Read] vendor-insights:GetSecurityProfileSnapshot */
	static readonly actionGetSecurityProfileSnapshot =
		"vendor-insights:GetSecurityProfileSnapshot";
	/** [List] vendor-insights:ListDataSources */
	static readonly ListDataSources = "vendor-insights:ListDataSources";
	/** [List] vendor-insights:ListEntitledSecurityProfileSnapshots */
	static readonly ListEntitledSecurityProfileSnapshots =
		"vendor-insights:ListEntitledSecurityProfileSnapshots";
	/** [List] vendor-insights:ListEntitledSecurityProfiles */
	static readonly ListEntitledSecurityProfiles =
		"vendor-insights:ListEntitledSecurityProfiles";
	/** [List] vendor-insights:ListSecurityProfileSnapshots */
	static readonly ListSecurityProfileSnapshots =
		"vendor-insights:ListSecurityProfileSnapshots";
	/** [List] vendor-insights:ListSecurityProfiles */
	static readonly ListSecurityProfiles = "vendor-insights:ListSecurityProfiles";
	/** [Read] vendor-insights:ListTagsForResource */
	static readonly ListTagsForResource = "vendor-insights:ListTagsForResource";
	/** [Tagging] vendor-insights:TagResource */
	static readonly TagResource = "vendor-insights:TagResource";
	/** [Tagging] vendor-insights:UntagResource */
	static readonly UntagResource = "vendor-insights:UntagResource";
	/** [Write] vendor-insights:UpdateDataSource */
	static readonly UpdateDataSource = "vendor-insights:UpdateDataSource";
	/** [Write] vendor-insights:UpdateSecurityProfile */
	static readonly UpdateSecurityProfile =
		"vendor-insights:UpdateSecurityProfile";
	/** [Write] vendor-insights:UpdateSecurityProfileSnapshotCreationConfiguration */
	static readonly UpdateSecurityProfileSnapshotCreationConfiguration =
		"vendor-insights:UpdateSecurityProfileSnapshotCreationConfiguration";
	/** [Write] vendor-insights:UpdateSecurityProfileSnapshotReleaseConfiguration */
	static readonly UpdateSecurityProfileSnapshotReleaseConfiguration =
		"vendor-insights:UpdateSecurityProfileSnapshotReleaseConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		VendorInsightsActions.actionGetDataSource,
		VendorInsightsActions.actionGetEntitledSecurityProfileSnapshot,
		VendorInsightsActions.actionGetProfileAccessTerms,
		VendorInsightsActions.actionGetSecurityProfile,
		VendorInsightsActions.actionGetSecurityProfileSnapshot,
		VendorInsightsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		VendorInsightsActions.ActivateSecurityProfile,
		VendorInsightsActions.AssociateDataSource,
		VendorInsightsActions.CreateDataSource,
		VendorInsightsActions.CreateSecurityProfile,
		VendorInsightsActions.DeactivateSecurityProfile,
		VendorInsightsActions.DeleteDataSource,
		VendorInsightsActions.DisassociateDataSource,
		VendorInsightsActions.UpdateDataSource,
		VendorInsightsActions.UpdateSecurityProfile,
		VendorInsightsActions.UpdateSecurityProfileSnapshotCreationConfiguration,
		VendorInsightsActions.UpdateSecurityProfileSnapshotReleaseConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		VendorInsightsActions.ListDataSources,
		VendorInsightsActions.ListEntitledSecurityProfileSnapshots,
		VendorInsightsActions.ListEntitledSecurityProfiles,
		VendorInsightsActions.ListSecurityProfileSnapshots,
		VendorInsightsActions.ListSecurityProfiles,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		VendorInsightsActions.TagResource,
		VendorInsightsActions.UntagResource,
	];
}

/**
 * Properties for building a DataSource ARN.
 */
export interface VendorInsightsDataSourceArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DataSource ARN.
 */
export interface VendorInsightsDataSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a SecurityProfile ARN.
 */
export interface VendorInsightsSecurityProfileArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a SecurityProfile ARN.
 */
export interface VendorInsightsSecurityProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const DataSourceArnRegex =
	/^arn:(?<partition>[^:]+):vendor-insights:::data-source:(?<resourceId>[^:/?]+)$/;
const SecurityProfileArnRegex =
	/^arn:(?<partition>[^:]+):vendor-insights:::security-profile:(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for vendor-insights resources.
 */
export class VendorInsightsResources {
	/**
	 * Builds an ARN for the DataSource resource.
	 */
	static dataSource(props: VendorInsightsDataSourceArnProps): string {
		return `arn:${props.partition ?? "aws"}:vendor-insights:::data-source:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DataSource resource.
	 */
	static isValidDataSourceArn(arn: string): boolean {
		return DataSourceArnRegex.test(arn);
	}

	/**
	 * Parses a DataSource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataSourceArn(
		arn: string,
	): VendorInsightsDataSourceArnComponents {
		const match = DataSourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DataSource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the SecurityProfile resource.
	 */
	static securityProfile(props: VendorInsightsSecurityProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:vendor-insights:::security-profile:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SecurityProfile resource.
	 */
	static isValidSecurityProfileArn(arn: string): boolean {
		return SecurityProfileArnRegex.test(arn);
	}

	/**
	 * Parses a SecurityProfile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSecurityProfileArn(
		arn: string,
	): VendorInsightsSecurityProfileArnComponents {
		const match = SecurityProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SecurityProfile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * Condition key constants and builders for vendor-insights.
 */
export class VendorInsightsConditions {
	/** Condition keys applicable to the ActivateSecurityProfile action. */
	static readonly ActivateSecurityProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateDataSource action. */
	static readonly AssociateDataSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDataSource action. */
	static readonly CreateDataSourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSecurityProfile action. */
	static readonly CreateSecurityProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeactivateSecurityProfile action. */
	static readonly DeactivateSecurityProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDataSource action. */
	static readonly DeleteDataSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateDataSource action. */
	static readonly DisassociateDataSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDataSource action. */
	static readonly actionGetDataSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSecurityProfile action. */
	static readonly actionGetSecurityProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSecurityProfileSnapshot action. */
	static readonly actionGetSecurityProfileSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSecurityProfileSnapshots action. */
	static readonly ListSecurityProfileSnapshotsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateDataSource action. */
	static readonly UpdateDataSourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSecurityProfile action. */
	static readonly UpdateSecurityProfileConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSecurityProfileSnapshotCreationConfiguration action. */
	static readonly UpdateSecurityProfileSnapshotCreationConfigurationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateSecurityProfileSnapshotReleaseConfiguration action. */
	static readonly UpdateSecurityProfileSnapshotReleaseConfigurationConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `aws:RequestTag/${TagKey}`.
	 */
	static requestTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:RequestTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}

	/**
	 * Generates a condition block for `aws:TagKeys`.
	 */
	static tagKeys(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "aws:TagKeys": values } };
	}
}
