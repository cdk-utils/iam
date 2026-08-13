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
	static readonly ConfigureLogs = "mediapackage-vod:ConfigureLogs";
	/** [Write] mediapackage-vod:CreateAsset */
	static readonly CreateAsset = "mediapackage-vod:CreateAsset";
	/** [Write] mediapackage-vod:CreatePackagingConfiguration */
	static readonly CreatePackagingConfiguration =
		"mediapackage-vod:CreatePackagingConfiguration";
	/** [Write] mediapackage-vod:CreatePackagingGroup */
	static readonly CreatePackagingGroup =
		"mediapackage-vod:CreatePackagingGroup";
	/** [Write] mediapackage-vod:DeleteAsset */
	static readonly DeleteAsset = "mediapackage-vod:DeleteAsset";
	/** [Write] mediapackage-vod:DeletePackagingConfiguration */
	static readonly DeletePackagingConfiguration =
		"mediapackage-vod:DeletePackagingConfiguration";
	/** [Write] mediapackage-vod:DeletePackagingGroup */
	static readonly DeletePackagingGroup =
		"mediapackage-vod:DeletePackagingGroup";
	/** [Read] mediapackage-vod:DescribeAsset */
	static readonly DescribeAsset = "mediapackage-vod:DescribeAsset";
	/** [Read] mediapackage-vod:DescribePackagingConfiguration */
	static readonly DescribePackagingConfiguration =
		"mediapackage-vod:DescribePackagingConfiguration";
	/** [Read] mediapackage-vod:DescribePackagingGroup */
	static readonly DescribePackagingGroup =
		"mediapackage-vod:DescribePackagingGroup";
	/** [List] mediapackage-vod:ListAssets */
	static readonly ListAssets = "mediapackage-vod:ListAssets";
	/** [List] mediapackage-vod:ListPackagingConfigurations */
	static readonly ListPackagingConfigurations =
		"mediapackage-vod:ListPackagingConfigurations";
	/** [List] mediapackage-vod:ListPackagingGroups */
	static readonly ListPackagingGroups = "mediapackage-vod:ListPackagingGroups";
	/** [Read] mediapackage-vod:ListTagsForResource */
	static readonly ListTagsForResource = "mediapackage-vod:ListTagsForResource";
	/** [Tagging] mediapackage-vod:TagResource */
	static readonly TagResource = "mediapackage-vod:TagResource";
	/** [Tagging] mediapackage-vod:UntagResource */
	static readonly UntagResource = "mediapackage-vod:UntagResource";
	/** [Write] mediapackage-vod:UpdatePackagingGroup */
	static readonly UpdatePackagingGroup =
		"mediapackage-vod:UpdatePackagingGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MediapackageVodActions.DescribeAsset,
		MediapackageVodActions.DescribePackagingConfiguration,
		MediapackageVodActions.DescribePackagingGroup,
		MediapackageVodActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MediapackageVodActions.ConfigureLogs,
		MediapackageVodActions.CreateAsset,
		MediapackageVodActions.CreatePackagingConfiguration,
		MediapackageVodActions.CreatePackagingGroup,
		MediapackageVodActions.DeleteAsset,
		MediapackageVodActions.DeletePackagingConfiguration,
		MediapackageVodActions.DeletePackagingGroup,
		MediapackageVodActions.UpdatePackagingGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MediapackageVodActions.ListAssets,
		MediapackageVodActions.ListPackagingConfigurations,
		MediapackageVodActions.ListPackagingGroups,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MediapackageVodActions.TagResource,
		MediapackageVodActions.UntagResource,
	];
}

/**
 * Properties for building a assets ARN.
 */
export interface MediapackageVodAssetsArnProps {
	/** The AssetIdentifier component of the ARN. */
	readonly assetIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a assets ARN.
 */
export interface MediapackageVodAssetsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssetIdentifier component. */
	readonly assetIdentifier: string;
}

/**
 * Properties for building a packaging-configurations ARN.
 */
export interface MediapackageVodPackagingConfigurationsArnProps {
	/** The PackagingConfigurationIdentifier component of the ARN. */
	readonly packagingConfigurationIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a packaging-configurations ARN.
 */
export interface MediapackageVodPackagingConfigurationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PackagingConfigurationIdentifier component. */
	readonly packagingConfigurationIdentifier: string;
}

/**
 * Properties for building a packaging-groups ARN.
 */
export interface MediapackageVodPackagingGroupsArnProps {
	/** The PackagingGroupIdentifier component of the ARN. */
	readonly packagingGroupIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a packaging-groups ARN.
 */
export interface MediapackageVodPackagingGroupsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PackagingGroupIdentifier component. */
	readonly packagingGroupIdentifier: string;
}

const AssetsArnRegex =
	/^arn:(?<partition>[^:]+):mediapackage-vod:(?<region>[^:]*):(?<account>[^:]*):assets\/(?<assetIdentifier>[^:/?]+)$/;
const PackagingConfigurationsArnRegex =
	/^arn:(?<partition>[^:]+):mediapackage-vod:(?<region>[^:]*):(?<account>[^:]*):packaging-configurations\/(?<packagingConfigurationIdentifier>[^:/?]+)$/;
const PackagingGroupsArnRegex =
	/^arn:(?<partition>[^:]+):mediapackage-vod:(?<region>[^:]*):(?<account>[^:]*):packaging-groups\/(?<packagingGroupIdentifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mediapackage-vod resources.
 */
export class MediapackageVodResources {
	/**
	 * Builds an ARN for the assets resource.
	 */
	static assets(props: MediapackageVodAssetsArnProps): string {
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
	static parseAssetsArn(arn: string): MediapackageVodAssetsArnComponents {
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
	static packagingConfigurations(
		props: MediapackageVodPackagingConfigurationsArnProps,
	): string {
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
	static parsePackagingConfigurationsArn(
		arn: string,
	): MediapackageVodPackagingConfigurationsArnComponents {
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
	static packagingGroups(
		props: MediapackageVodPackagingGroupsArnProps,
	): string {
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
	static parsePackagingGroupsArn(
		arn: string,
	): MediapackageVodPackagingGroupsArnComponents {
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
	static readonly ConfigureLogs: string[] = ["mediapackage-vod:ConfigureLogs"];
	/** IAM actions required for the CreateAsset API call. */
	static readonly CreateAsset: string[] = [
		"mediapackage-vod:CreateAsset",
		"iam:PassRole",
		"mediapackage-vod:TagResource",
	];
	/** IAM actions required for the CreatePackagingConfiguration API call. */
	static readonly CreatePackagingConfiguration: string[] = [
		"mediapackage-vod:CreatePackagingConfiguration",
		"iam:PassRole",
		"mediapackage-vod:TagResource",
	];
	/** IAM actions required for the CreatePackagingGroup API call. */
	static readonly CreatePackagingGroup: string[] = [
		"mediapackage-vod:CreatePackagingGroup",
		"iam:PassRole",
		"mediapackage-vod:TagResource",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DeleteAsset: string[] = ["mediapackage-vod:DeleteAsset"];
	/** IAM actions required for the DeletePackagingConfiguration API call. */
	static readonly DeletePackagingConfiguration: string[] = [
		"mediapackage-vod:DeletePackagingConfiguration",
	];
	/** IAM actions required for the DeletePackagingGroup API call. */
	static readonly DeletePackagingGroup: string[] = [
		"mediapackage-vod:DeletePackagingGroup",
	];
	/** IAM actions required for the DescribeAsset API call. */
	static readonly DescribeAsset: string[] = ["mediapackage-vod:DescribeAsset"];
	/** IAM actions required for the DescribePackagingConfiguration API call. */
	static readonly DescribePackagingConfiguration: string[] = [
		"mediapackage-vod:DescribePackagingConfiguration",
	];
	/** IAM actions required for the DescribePackagingGroup API call. */
	static readonly DescribePackagingGroup: string[] = [
		"mediapackage-vod:DescribePackagingGroup",
	];
	/** IAM actions required for the ListAssets API call. */
	static readonly ListAssets: string[] = ["mediapackage-vod:ListAssets"];
	/** IAM actions required for the ListPackagingConfigurations API call. */
	static readonly ListPackagingConfigurations: string[] = [
		"mediapackage-vod:ListPackagingConfigurations",
	];
	/** IAM actions required for the ListPackagingGroups API call. */
	static readonly ListPackagingGroups: string[] = [
		"mediapackage-vod:ListPackagingGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"mediapackage-vod:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mediapackage-vod:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mediapackage-vod:UntagResource"];
	/** IAM actions required for the UpdatePackagingGroup API call. */
	static readonly UpdatePackagingGroup: string[] = [
		"iam:PassRole",
		"mediapackage-vod:UpdatePackagingGroup",
	];
}

/**
 * Condition key constants and builders for mediapackage-vod.
 */
export class MediapackageVodConditions {
	/** Condition keys applicable to the CreateAsset action. */
	static readonly CreateAssetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackagingConfiguration action. */
	static readonly CreatePackagingConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePackagingGroup action. */
	static readonly CreatePackagingGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
