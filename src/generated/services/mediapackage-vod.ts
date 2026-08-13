// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mediapackage-vod.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mediapackage-vod service.
 */
export class MediapackageVodActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mediapackage-vod";

	/** [Write] mediapackage-vod:ConfigureLogs */
	static readonly CONFIGURE_LOGS = "mediapackage-vod:ConfigureLogs";
	/** [Write] mediapackage-vod:CreateAsset */
	static readonly CREATE_ASSET = "mediapackage-vod:CreateAsset";
	/** [Write] mediapackage-vod:CreatePackagingConfiguration */
	static readonly CREATE_PACKAGING_CONFIGURATION =
		"mediapackage-vod:CreatePackagingConfiguration";
	/** [Write] mediapackage-vod:CreatePackagingGroup */
	static readonly CREATE_PACKAGING_GROUP =
		"mediapackage-vod:CreatePackagingGroup";
	/** [Write] mediapackage-vod:DeleteAsset */
	static readonly DELETE_ASSET = "mediapackage-vod:DeleteAsset";
	/** [Write] mediapackage-vod:DeletePackagingConfiguration */
	static readonly DELETE_PACKAGING_CONFIGURATION =
		"mediapackage-vod:DeletePackagingConfiguration";
	/** [Write] mediapackage-vod:DeletePackagingGroup */
	static readonly DELETE_PACKAGING_GROUP =
		"mediapackage-vod:DeletePackagingGroup";
	/** [Read] mediapackage-vod:DescribeAsset */
	static readonly DESCRIBE_ASSET = "mediapackage-vod:DescribeAsset";
	/** [Read] mediapackage-vod:DescribePackagingConfiguration */
	static readonly DESCRIBE_PACKAGING_CONFIGURATION =
		"mediapackage-vod:DescribePackagingConfiguration";
	/** [Read] mediapackage-vod:DescribePackagingGroup */
	static readonly DESCRIBE_PACKAGING_GROUP =
		"mediapackage-vod:DescribePackagingGroup";
	/** [List] mediapackage-vod:ListAssets */
	static readonly LIST_ASSETS = "mediapackage-vod:ListAssets";
	/** [List] mediapackage-vod:ListPackagingConfigurations */
	static readonly LIST_PACKAGING_CONFIGURATIONS =
		"mediapackage-vod:ListPackagingConfigurations";
	/** [List] mediapackage-vod:ListPackagingGroups */
	static readonly LIST_PACKAGING_GROUPS =
		"mediapackage-vod:ListPackagingGroups";
	/** [Read] mediapackage-vod:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"mediapackage-vod:ListTagsForResource";
	/** [Tagging] mediapackage-vod:TagResource */
	static readonly TAG_RESOURCE = "mediapackage-vod:TagResource";
	/** [Tagging] mediapackage-vod:UntagResource */
	static readonly UNTAG_RESOURCE = "mediapackage-vod:UntagResource";
	/** [Write] mediapackage-vod:UpdatePackagingGroup */
	static readonly UPDATE_PACKAGING_GROUP =
		"mediapackage-vod:UpdatePackagingGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MediapackageVodActions.DESCRIBE_ASSET,
		MediapackageVodActions.DESCRIBE_PACKAGING_CONFIGURATION,
		MediapackageVodActions.DESCRIBE_PACKAGING_GROUP,
		MediapackageVodActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediapackageVodActions.CONFIGURE_LOGS,
		MediapackageVodActions.CREATE_ASSET,
		MediapackageVodActions.CREATE_PACKAGING_CONFIGURATION,
		MediapackageVodActions.CREATE_PACKAGING_GROUP,
		MediapackageVodActions.DELETE_ASSET,
		MediapackageVodActions.DELETE_PACKAGING_CONFIGURATION,
		MediapackageVodActions.DELETE_PACKAGING_GROUP,
		MediapackageVodActions.UPDATE_PACKAGING_GROUP,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MediapackageVodActions.LIST_ASSETS,
		MediapackageVodActions.LIST_PACKAGING_CONFIGURATIONS,
		MediapackageVodActions.LIST_PACKAGING_GROUPS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MediapackageVodActions.TAG_RESOURCE,
		MediapackageVodActions.UNTAG_RESOURCE,
	];
}

const AssetsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackage-vod:(?<region>[^:]*):(?<account>[^:]*):assets/(?<assetIdentifier>[^:/?]+)$",
);
const PackagingConfigurationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackage-vod:(?<region>[^:]*):(?<account>[^:]*):packaging-configurations/(?<packagingConfigurationIdentifier>[^:/?]+)$",
);
const PackagingGroupsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mediapackage-vod:(?<region>[^:]*):(?<account>[^:]*):packaging-groups/(?<packagingGroupIdentifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mediapackage-vod resources.
 */
export class MediapackageVodResources {
	/**
	 * Builds an ARN for the assets resource.
	 */
	static assets(props: {
		/** The AssetIdentifier component of the ARN. */
		readonly assetIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackage-vod:${props.region ?? "*"}:${props.account ?? "*"}:assets/${props.assetIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assets resource.
	 */
	static isValidAssetsArn(arn: string): boolean {
		return AssetsArnRegex.test(arn);
	}

	/**
	 * Parses a assets ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssetsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		assetIdentifier: string;
	} {
		const match = AssetsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assets ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assetIdentifier: match.groups!.assetIdentifier,
		};
	}

	/**
	 * Builds an ARN for the packaging-configurations resource.
	 */
	static packagingConfigurations(props: {
		/** The PackagingConfigurationIdentifier component of the ARN. */
		readonly packagingConfigurationIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackage-vod:${props.region ?? "*"}:${props.account ?? "*"}:packaging-configurations/${props.packagingConfigurationIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the packaging-configurations resource.
	 */
	static isValidPackagingConfigurationsArn(arn: string): boolean {
		return PackagingConfigurationsArnRegex.test(arn);
	}

	/**
	 * Parses a packaging-configurations ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackagingConfigurationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		packagingConfigurationIdentifier: string;
	} {
		const match = PackagingConfigurationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid packaging-configurations ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			packagingConfigurationIdentifier:
				match.groups!.packagingConfigurationIdentifier,
		};
	}

	/**
	 * Builds an ARN for the packaging-groups resource.
	 */
	static packagingGroups(props: {
		/** The PackagingGroupIdentifier component of the ARN. */
		readonly packagingGroupIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mediapackage-vod:${props.region ?? "*"}:${props.account ?? "*"}:packaging-groups/${props.packagingGroupIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the packaging-groups resource.
	 */
	static isValidPackagingGroupsArn(arn: string): boolean {
		return PackagingGroupsArnRegex.test(arn);
	}

	/**
	 * Parses a packaging-groups ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePackagingGroupsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		packagingGroupIdentifier: string;
	} {
		const match = PackagingGroupsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid packaging-groups ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			packagingGroupIdentifier: match.groups!.packagingGroupIdentifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mediapackage-vod.
 */
export class MediapackageVodOperations {
	/** IAM actions required for the ConfigureLogs API call. */
	static readonly CONFIGURE_LOGS: string[] = ["mediapackage-vod:ConfigureLogs"];
	/** IAM actions required for the CreateAsset API call. */
	static readonly CREATE_ASSET: string[] = [
		"mediapackage-vod:CreateAsset",
		"iam:PassRole",
		"mediapackage-vod:TagResource",
	];
	/** IAM actions required for the CreatePackagingConfiguration API call. */
	static readonly CREATE_PACKAGING_CONFIGURATION: string[] = [
		"mediapackage-vod:CreatePackagingConfiguration",
		"iam:PassRole",
		"mediapackage-vod:TagResource",
	];
	/** IAM actions required for the CreatePackagingGroup API call. */
	static readonly CREATE_PACKAGING_GROUP: string[] = [
		"mediapackage-vod:CreatePackagingGroup",
		"iam:PassRole",
		"mediapackage-vod:TagResource",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DELETE_ASSET: string[] = ["mediapackage-vod:DeleteAsset"];
	/** IAM actions required for the DeletePackagingConfiguration API call. */
	static readonly DELETE_PACKAGING_CONFIGURATION: string[] = [
		"mediapackage-vod:DeletePackagingConfiguration",
	];
	/** IAM actions required for the DeletePackagingGroup API call. */
	static readonly DELETE_PACKAGING_GROUP: string[] = [
		"mediapackage-vod:DeletePackagingGroup",
	];
	/** IAM actions required for the DescribeAsset API call. */
	static readonly DESCRIBE_ASSET: string[] = ["mediapackage-vod:DescribeAsset"];
	/** IAM actions required for the DescribePackagingConfiguration API call. */
	static readonly DESCRIBE_PACKAGING_CONFIGURATION: string[] = [
		"mediapackage-vod:DescribePackagingConfiguration",
	];
	/** IAM actions required for the DescribePackagingGroup API call. */
	static readonly DESCRIBE_PACKAGING_GROUP: string[] = [
		"mediapackage-vod:DescribePackagingGroup",
	];
	/** IAM actions required for the ListAssets API call. */
	static readonly LIST_ASSETS: string[] = ["mediapackage-vod:ListAssets"];
	/** IAM actions required for the ListPackagingConfigurations API call. */
	static readonly LIST_PACKAGING_CONFIGURATIONS: string[] = [
		"mediapackage-vod:ListPackagingConfigurations",
	];
	/** IAM actions required for the ListPackagingGroups API call. */
	static readonly LIST_PACKAGING_GROUPS: string[] = [
		"mediapackage-vod:ListPackagingGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mediapackage-vod:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mediapackage-vod:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mediapackage-vod:UntagResource"];
	/** IAM actions required for the UpdatePackagingGroup API call. */
	static readonly UPDATE_PACKAGING_GROUP: string[] = [
		"iam:PassRole",
		"mediapackage-vod:UpdatePackagingGroup",
	];
}

/**
 * Condition key constants and builders for mediapackage-vod.
 */
export class MediapackageVodConditions {
	/** Condition keys applicable to the CreateAsset action. */
	static readonly CREATE_ASSET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackagingConfiguration action. */
	static readonly CREATE_PACKAGING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackagingGroup action. */
	static readonly CREATE_PACKAGING_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
