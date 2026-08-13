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
	static readonly ACTIVATE_SECURITY_PROFILE =
		"vendor-insights:ActivateSecurityProfile";
	/** [Write] vendor-insights:AssociateDataSource */
	static readonly ASSOCIATE_DATA_SOURCE = "vendor-insights:AssociateDataSource";
	/** [Write] vendor-insights:CreateDataSource */
	static readonly CREATE_DATA_SOURCE = "vendor-insights:CreateDataSource";
	/** [Write] vendor-insights:CreateSecurityProfile */
	static readonly CREATE_SECURITY_PROFILE =
		"vendor-insights:CreateSecurityProfile";
	/** [Write] vendor-insights:DeactivateSecurityProfile */
	static readonly DEACTIVATE_SECURITY_PROFILE =
		"vendor-insights:DeactivateSecurityProfile";
	/** [Write] vendor-insights:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "vendor-insights:DeleteDataSource";
	/** [Write] vendor-insights:DisassociateDataSource */
	static readonly DISASSOCIATE_DATA_SOURCE =
		"vendor-insights:DisassociateDataSource";
	/** [Read] vendor-insights:GetDataSource */
	static readonly GET_DATA_SOURCE = "vendor-insights:GetDataSource";
	/** [Read] vendor-insights:GetEntitledSecurityProfileSnapshot */
	static readonly GET_ENTITLED_SECURITY_PROFILE_SNAPSHOT =
		"vendor-insights:GetEntitledSecurityProfileSnapshot";
	/** [Read] vendor-insights:GetProfileAccessTerms */
	static readonly GET_PROFILE_ACCESS_TERMS =
		"vendor-insights:GetProfileAccessTerms";
	/** [Read] vendor-insights:GetSecurityProfile */
	static readonly GET_SECURITY_PROFILE = "vendor-insights:GetSecurityProfile";
	/** [Read] vendor-insights:GetSecurityProfileSnapshot */
	static readonly GET_SECURITY_PROFILE_SNAPSHOT =
		"vendor-insights:GetSecurityProfileSnapshot";
	/** [List] vendor-insights:ListDataSources */
	static readonly LIST_DATA_SOURCES = "vendor-insights:ListDataSources";
	/** [List] vendor-insights:ListEntitledSecurityProfileSnapshots */
	static readonly LIST_ENTITLED_SECURITY_PROFILE_SNAPSHOTS =
		"vendor-insights:ListEntitledSecurityProfileSnapshots";
	/** [List] vendor-insights:ListEntitledSecurityProfiles */
	static readonly LIST_ENTITLED_SECURITY_PROFILES =
		"vendor-insights:ListEntitledSecurityProfiles";
	/** [List] vendor-insights:ListSecurityProfileSnapshots */
	static readonly LIST_SECURITY_PROFILE_SNAPSHOTS =
		"vendor-insights:ListSecurityProfileSnapshots";
	/** [List] vendor-insights:ListSecurityProfiles */
	static readonly LIST_SECURITY_PROFILES =
		"vendor-insights:ListSecurityProfiles";
	/** [Read] vendor-insights:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"vendor-insights:ListTagsForResource";
	/** [Tagging] vendor-insights:TagResource */
	static readonly TAG_RESOURCE = "vendor-insights:TagResource";
	/** [Tagging] vendor-insights:UntagResource */
	static readonly UNTAG_RESOURCE = "vendor-insights:UntagResource";
	/** [Write] vendor-insights:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "vendor-insights:UpdateDataSource";
	/** [Write] vendor-insights:UpdateSecurityProfile */
	static readonly UPDATE_SECURITY_PROFILE =
		"vendor-insights:UpdateSecurityProfile";
	/** [Write] vendor-insights:UpdateSecurityProfileSnapshotCreationConfiguration */
	static readonly UPDATE_SECURITY_PROFILE_SNAPSHOT_CREATION_CONFIGURATION =
		"vendor-insights:UpdateSecurityProfileSnapshotCreationConfiguration";
	/** [Write] vendor-insights:UpdateSecurityProfileSnapshotReleaseConfiguration */
	static readonly UPDATE_SECURITY_PROFILE_SNAPSHOT_RELEASE_CONFIGURATION =
		"vendor-insights:UpdateSecurityProfileSnapshotReleaseConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		VendorInsightsActions.GET_DATA_SOURCE,
		VendorInsightsActions.GET_ENTITLED_SECURITY_PROFILE_SNAPSHOT,
		VendorInsightsActions.GET_PROFILE_ACCESS_TERMS,
		VendorInsightsActions.GET_SECURITY_PROFILE,
		VendorInsightsActions.GET_SECURITY_PROFILE_SNAPSHOT,
		VendorInsightsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		VendorInsightsActions.ACTIVATE_SECURITY_PROFILE,
		VendorInsightsActions.ASSOCIATE_DATA_SOURCE,
		VendorInsightsActions.CREATE_DATA_SOURCE,
		VendorInsightsActions.CREATE_SECURITY_PROFILE,
		VendorInsightsActions.DEACTIVATE_SECURITY_PROFILE,
		VendorInsightsActions.DELETE_DATA_SOURCE,
		VendorInsightsActions.DISASSOCIATE_DATA_SOURCE,
		VendorInsightsActions.UPDATE_DATA_SOURCE,
		VendorInsightsActions.UPDATE_SECURITY_PROFILE,
		VendorInsightsActions.UPDATE_SECURITY_PROFILE_SNAPSHOT_CREATION_CONFIGURATION,
		VendorInsightsActions.UPDATE_SECURITY_PROFILE_SNAPSHOT_RELEASE_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		VendorInsightsActions.LIST_DATA_SOURCES,
		VendorInsightsActions.LIST_ENTITLED_SECURITY_PROFILE_SNAPSHOTS,
		VendorInsightsActions.LIST_ENTITLED_SECURITY_PROFILES,
		VendorInsightsActions.LIST_SECURITY_PROFILE_SNAPSHOTS,
		VendorInsightsActions.LIST_SECURITY_PROFILES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		VendorInsightsActions.TAG_RESOURCE,
		VendorInsightsActions.UNTAG_RESOURCE,
	];
}

const DataSourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vendor-insights:::data-source:(?<resourceId>[^:/?]+)$",
);
const SecurityProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):vendor-insights:::security-profile:(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for vendor-insights resources.
 */
export class VendorInsightsResources {
	/**
	 * Builds an ARN for the DataSource resource.
	 */
	static dataSource(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDataSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static securityProfile(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSecurityProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly ACTIVATE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateDataSource action. */
	static readonly ASSOCIATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateDataSource action. */
	static readonly CREATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSecurityProfile action. */
	static readonly CREATE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeactivateSecurityProfile action. */
	static readonly DEACTIVATE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteDataSource action. */
	static readonly DELETE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateDataSource action. */
	static readonly DISASSOCIATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetDataSource action. */
	static readonly GET_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSecurityProfile action. */
	static readonly GET_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSecurityProfileSnapshot action. */
	static readonly GET_SECURITY_PROFILE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSecurityProfileSnapshots action. */
	static readonly LIST_SECURITY_PROFILE_SNAPSHOTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateDataSource action. */
	static readonly UPDATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSecurityProfile action. */
	static readonly UPDATE_SECURITY_PROFILE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateSecurityProfileSnapshotCreationConfiguration action. */
	static readonly UPDATE_SECURITY_PROFILE_SNAPSHOT_CREATION_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateSecurityProfileSnapshotReleaseConfiguration action. */
	static readonly UPDATE_SECURITY_PROFILE_SNAPSHOT_RELEASE_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
