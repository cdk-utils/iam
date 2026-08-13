// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appstream.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appstream service.
 */
export class AppstreamActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appstream";

	/** [Write] appstream:AssociateAppBlockBuilderAppBlock */
	static readonly ASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK =
		"appstream:AssociateAppBlockBuilderAppBlock";
	/** [Write] appstream:AssociateApplicationFleet */
	static readonly ASSOCIATE_APPLICATION_FLEET =
		"appstream:AssociateApplicationFleet";
	/** [Write] appstream:AssociateApplicationToEntitlement */
	static readonly ASSOCIATE_APPLICATION_TO_ENTITLEMENT =
		"appstream:AssociateApplicationToEntitlement";
	/** [Write] appstream:AssociateFleet */
	static readonly ASSOCIATE_FLEET = "appstream:AssociateFleet";
	/** [Write] appstream:AssociateSoftwareToImageBuilder */
	static readonly ASSOCIATE_SOFTWARE_TO_IMAGE_BUILDER =
		"appstream:AssociateSoftwareToImageBuilder";
	/** [Write] appstream:BatchAssociateUserStack */
	static readonly BATCH_ASSOCIATE_USER_STACK =
		"appstream:BatchAssociateUserStack";
	/** [Write] appstream:BatchDisassociateUserStack */
	static readonly BATCH_DISASSOCIATE_USER_STACK =
		"appstream:BatchDisassociateUserStack";
	/** [Write] appstream:CopyImage */
	static readonly COPY_IMAGE = "appstream:CopyImage";
	/** [Write] appstream:CreateAppBlock */
	static readonly CREATE_APP_BLOCK = "appstream:CreateAppBlock";
	/** [Write] appstream:CreateAppBlockBuilder */
	static readonly CREATE_APP_BLOCK_BUILDER = "appstream:CreateAppBlockBuilder";
	/** [Write] appstream:CreateAppBlockBuilderStreamingURL */
	static readonly CREATE_APP_BLOCK_BUILDER_STREAMING_URL =
		"appstream:CreateAppBlockBuilderStreamingURL";
	/** [Write] appstream:CreateApplication */
	static readonly CREATE_APPLICATION = "appstream:CreateApplication";
	/** [Write] appstream:CreateDirectoryConfig */
	static readonly CREATE_DIRECTORY_CONFIG = "appstream:CreateDirectoryConfig";
	/** [Write] appstream:CreateEntitlement */
	static readonly CREATE_ENTITLEMENT = "appstream:CreateEntitlement";
	/** [Write] appstream:CreateExportImageTask */
	static readonly CREATE_EXPORT_IMAGE_TASK = "appstream:CreateExportImageTask";
	/** [Write] appstream:CreateFleet */
	static readonly CREATE_FLEET = "appstream:CreateFleet";
	/** [Write] appstream:CreateImageBuilder */
	static readonly CREATE_IMAGE_BUILDER = "appstream:CreateImageBuilder";
	/** [Write] appstream:CreateImageBuilderStreamingURL */
	static readonly CREATE_IMAGE_BUILDER_STREAMING_URL =
		"appstream:CreateImageBuilderStreamingURL";
	/** [Write] appstream:CreateImportedImage */
	static readonly CREATE_IMPORTED_IMAGE = "appstream:CreateImportedImage";
	/** [Write] appstream:CreateStack */
	static readonly CREATE_STACK = "appstream:CreateStack";
	/** [Write] appstream:CreateStreamingURL */
	static readonly CREATE_STREAMING_URL = "appstream:CreateStreamingURL";
	/** [Write] appstream:CreateThemeForStack */
	static readonly CREATE_THEME_FOR_STACK = "appstream:CreateThemeForStack";
	/** [Write] appstream:CreateUpdatedImage */
	static readonly CREATE_UPDATED_IMAGE = "appstream:CreateUpdatedImage";
	/** [Write] appstream:CreateUsageReportSubscription */
	static readonly CREATE_USAGE_REPORT_SUBSCRIPTION =
		"appstream:CreateUsageReportSubscription";
	/** [Write] appstream:CreateUser */
	static readonly CREATE_USER = "appstream:CreateUser";
	/** [Write] appstream:DeleteAppBlock */
	static readonly DELETE_APP_BLOCK = "appstream:DeleteAppBlock";
	/** [Write] appstream:DeleteAppBlockBuilder */
	static readonly DELETE_APP_BLOCK_BUILDER = "appstream:DeleteAppBlockBuilder";
	/** [Write] appstream:DeleteApplication */
	static readonly DELETE_APPLICATION = "appstream:DeleteApplication";
	/** [Write] appstream:DeleteDirectoryConfig */
	static readonly DELETE_DIRECTORY_CONFIG = "appstream:DeleteDirectoryConfig";
	/** [Write] appstream:DeleteEntitlement */
	static readonly DELETE_ENTITLEMENT = "appstream:DeleteEntitlement";
	/** [Write] appstream:DeleteFleet */
	static readonly DELETE_FLEET = "appstream:DeleteFleet";
	/** [Write] appstream:DeleteImage */
	static readonly DELETE_IMAGE = "appstream:DeleteImage";
	/** [Write] appstream:DeleteImageBuilder */
	static readonly DELETE_IMAGE_BUILDER = "appstream:DeleteImageBuilder";
	/** [Write] appstream:DeleteImagePermissions */
	static readonly DELETE_IMAGE_PERMISSIONS = "appstream:DeleteImagePermissions";
	/** [Write] appstream:DeleteStack */
	static readonly DELETE_STACK = "appstream:DeleteStack";
	/** [Write] appstream:DeleteThemeForStack */
	static readonly DELETE_THEME_FOR_STACK = "appstream:DeleteThemeForStack";
	/** [Write] appstream:DeleteUsageReportSubscription */
	static readonly DELETE_USAGE_REPORT_SUBSCRIPTION =
		"appstream:DeleteUsageReportSubscription";
	/** [Write] appstream:DeleteUser */
	static readonly DELETE_USER = "appstream:DeleteUser";
	/** [List] appstream:DescribeAppBlockBuilderAppBlockAssociations */
	static readonly DESCRIBE_APP_BLOCK_BUILDER_APP_BLOCK_ASSOCIATIONS =
		"appstream:DescribeAppBlockBuilderAppBlockAssociations";
	/** [List] appstream:DescribeAppBlockBuilders */
	static readonly DESCRIBE_APP_BLOCK_BUILDERS =
		"appstream:DescribeAppBlockBuilders";
	/** [List] appstream:DescribeAppBlocks */
	static readonly DESCRIBE_APP_BLOCKS = "appstream:DescribeAppBlocks";
	/** [List] appstream:DescribeAppLicenseUsage */
	static readonly DESCRIBE_APP_LICENSE_USAGE =
		"appstream:DescribeAppLicenseUsage";
	/** [List] appstream:DescribeApplicationFleetAssociations */
	static readonly DESCRIBE_APPLICATION_FLEET_ASSOCIATIONS =
		"appstream:DescribeApplicationFleetAssociations";
	/** [List] appstream:DescribeApplications */
	static readonly DESCRIBE_APPLICATIONS = "appstream:DescribeApplications";
	/** [List] appstream:DescribeDirectoryConfigs */
	static readonly DESCRIBE_DIRECTORY_CONFIGS =
		"appstream:DescribeDirectoryConfigs";
	/** [List] appstream:DescribeEntitlements */
	static readonly DESCRIBE_ENTITLEMENTS = "appstream:DescribeEntitlements";
	/** [List] appstream:DescribeFleets */
	static readonly DESCRIBE_FLEETS = "appstream:DescribeFleets";
	/** [List] appstream:DescribeImageBuilders */
	static readonly DESCRIBE_IMAGE_BUILDERS = "appstream:DescribeImageBuilders";
	/** [Read] appstream:DescribeImagePermissions */
	static readonly DESCRIBE_IMAGE_PERMISSIONS =
		"appstream:DescribeImagePermissions";
	/** [List] appstream:DescribeImages */
	static readonly DESCRIBE_IMAGES = "appstream:DescribeImages";
	/** [List] appstream:DescribeSessions */
	static readonly DESCRIBE_SESSIONS = "appstream:DescribeSessions";
	/** [List] appstream:DescribeSoftwareAssociations */
	static readonly DESCRIBE_SOFTWARE_ASSOCIATIONS =
		"appstream:DescribeSoftwareAssociations";
	/** [List] appstream:DescribeStacks */
	static readonly DESCRIBE_STACKS = "appstream:DescribeStacks";
	/** [Read] appstream:DescribeThemeForStack */
	static readonly DESCRIBE_THEME_FOR_STACK = "appstream:DescribeThemeForStack";
	/** [List] appstream:DescribeUsageReportSubscriptions */
	static readonly DESCRIBE_USAGE_REPORT_SUBSCRIPTIONS =
		"appstream:DescribeUsageReportSubscriptions";
	/** [List] appstream:DescribeUserStackAssociations */
	static readonly DESCRIBE_USER_STACK_ASSOCIATIONS =
		"appstream:DescribeUserStackAssociations";
	/** [List] appstream:DescribeUsers */
	static readonly DESCRIBE_USERS = "appstream:DescribeUsers";
	/** [Write] appstream:DisableUser */
	static readonly DISABLE_USER = "appstream:DisableUser";
	/** [Write] appstream:DisassociateAppBlockBuilderAppBlock */
	static readonly DISASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK =
		"appstream:DisassociateAppBlockBuilderAppBlock";
	/** [Write] appstream:DisassociateApplicationFleet */
	static readonly DISASSOCIATE_APPLICATION_FLEET =
		"appstream:DisassociateApplicationFleet";
	/** [Write] appstream:DisassociateApplicationFromEntitlement */
	static readonly DISASSOCIATE_APPLICATION_FROM_ENTITLEMENT =
		"appstream:DisassociateApplicationFromEntitlement";
	/** [Write] appstream:DisassociateFleet */
	static readonly DISASSOCIATE_FLEET = "appstream:DisassociateFleet";
	/** [Write] appstream:DisassociateSoftwareFromImageBuilder */
	static readonly DISASSOCIATE_SOFTWARE_FROM_IMAGE_BUILDER =
		"appstream:DisassociateSoftwareFromImageBuilder";
	/** [Write] appstream:EnableUser */
	static readonly ENABLE_USER = "appstream:EnableUser";
	/** [Write] appstream:ExpireSession */
	static readonly EXPIRE_SESSION = "appstream:ExpireSession";
	/** [Read] appstream:GetExportImageTask */
	static readonly GET_EXPORT_IMAGE_TASK = "appstream:GetExportImageTask";
	/** [Read] appstream:ListAssociatedFleets */
	static readonly LIST_ASSOCIATED_FLEETS = "appstream:ListAssociatedFleets";
	/** [Read] appstream:ListAssociatedStacks */
	static readonly LIST_ASSOCIATED_STACKS = "appstream:ListAssociatedStacks";
	/** [List] appstream:ListEntitledApplications */
	static readonly LIST_ENTITLED_APPLICATIONS =
		"appstream:ListEntitledApplications";
	/** [List] appstream:ListExportImageTasks */
	static readonly LIST_EXPORT_IMAGE_TASKS = "appstream:ListExportImageTasks";
	/** [Read] appstream:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "appstream:ListTagsForResource";
	/** [Write] appstream:StartAppBlockBuilder */
	static readonly START_APP_BLOCK_BUILDER = "appstream:StartAppBlockBuilder";
	/** [Write] appstream:StartFleet */
	static readonly START_FLEET = "appstream:StartFleet";
	/** [Write] appstream:StartImageBuilder */
	static readonly START_IMAGE_BUILDER = "appstream:StartImageBuilder";
	/** [Write] appstream:StartSoftwareDeploymentToImageBuilder */
	static readonly START_SOFTWARE_DEPLOYMENT_TO_IMAGE_BUILDER =
		"appstream:StartSoftwareDeploymentToImageBuilder";
	/** [Write] appstream:StopAppBlockBuilder */
	static readonly STOP_APP_BLOCK_BUILDER = "appstream:StopAppBlockBuilder";
	/** [Write] appstream:StopFleet */
	static readonly STOP_FLEET = "appstream:StopFleet";
	/** [Write] appstream:StopImageBuilder */
	static readonly STOP_IMAGE_BUILDER = "appstream:StopImageBuilder";
	/** [Write] appstream:Stream */
	static readonly STREAM = "appstream:Stream";
	/** [Tagging] appstream:TagResource */
	static readonly TAG_RESOURCE = "appstream:TagResource";
	/** [Tagging] appstream:UntagResource */
	static readonly UNTAG_RESOURCE = "appstream:UntagResource";
	/** [Write] appstream:UpdateAppBlockBuilder */
	static readonly UPDATE_APP_BLOCK_BUILDER = "appstream:UpdateAppBlockBuilder";
	/** [Write] appstream:UpdateApplication */
	static readonly UPDATE_APPLICATION = "appstream:UpdateApplication";
	/** [Write] appstream:UpdateDirectoryConfig */
	static readonly UPDATE_DIRECTORY_CONFIG = "appstream:UpdateDirectoryConfig";
	/** [Write] appstream:UpdateEntitlement */
	static readonly UPDATE_ENTITLEMENT = "appstream:UpdateEntitlement";
	/** [Write] appstream:UpdateFleet */
	static readonly UPDATE_FLEET = "appstream:UpdateFleet";
	/** [Write] appstream:UpdateImagePermissions */
	static readonly UPDATE_IMAGE_PERMISSIONS = "appstream:UpdateImagePermissions";
	/** [Write] appstream:UpdateStack */
	static readonly UPDATE_STACK = "appstream:UpdateStack";
	/** [Write] appstream:UpdateThemeForStack */
	static readonly UPDATE_THEME_FOR_STACK = "appstream:UpdateThemeForStack";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppstreamActions.DESCRIBE_IMAGE_PERMISSIONS,
		AppstreamActions.DESCRIBE_THEME_FOR_STACK,
		AppstreamActions.GET_EXPORT_IMAGE_TASK,
		AppstreamActions.LIST_ASSOCIATED_FLEETS,
		AppstreamActions.LIST_ASSOCIATED_STACKS,
		AppstreamActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppstreamActions.ASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK,
		AppstreamActions.ASSOCIATE_APPLICATION_FLEET,
		AppstreamActions.ASSOCIATE_APPLICATION_TO_ENTITLEMENT,
		AppstreamActions.ASSOCIATE_FLEET,
		AppstreamActions.ASSOCIATE_SOFTWARE_TO_IMAGE_BUILDER,
		AppstreamActions.BATCH_ASSOCIATE_USER_STACK,
		AppstreamActions.BATCH_DISASSOCIATE_USER_STACK,
		AppstreamActions.COPY_IMAGE,
		AppstreamActions.CREATE_APP_BLOCK,
		AppstreamActions.CREATE_APP_BLOCK_BUILDER,
		AppstreamActions.CREATE_APP_BLOCK_BUILDER_STREAMING_URL,
		AppstreamActions.CREATE_APPLICATION,
		AppstreamActions.CREATE_DIRECTORY_CONFIG,
		AppstreamActions.CREATE_ENTITLEMENT,
		AppstreamActions.CREATE_EXPORT_IMAGE_TASK,
		AppstreamActions.CREATE_FLEET,
		AppstreamActions.CREATE_IMAGE_BUILDER,
		AppstreamActions.CREATE_IMAGE_BUILDER_STREAMING_URL,
		AppstreamActions.CREATE_IMPORTED_IMAGE,
		AppstreamActions.CREATE_STACK,
		AppstreamActions.CREATE_STREAMING_URL,
		AppstreamActions.CREATE_THEME_FOR_STACK,
		AppstreamActions.CREATE_UPDATED_IMAGE,
		AppstreamActions.CREATE_USAGE_REPORT_SUBSCRIPTION,
		AppstreamActions.CREATE_USER,
		AppstreamActions.DELETE_APP_BLOCK,
		AppstreamActions.DELETE_APP_BLOCK_BUILDER,
		AppstreamActions.DELETE_APPLICATION,
		AppstreamActions.DELETE_DIRECTORY_CONFIG,
		AppstreamActions.DELETE_ENTITLEMENT,
		AppstreamActions.DELETE_FLEET,
		AppstreamActions.DELETE_IMAGE,
		AppstreamActions.DELETE_IMAGE_BUILDER,
		AppstreamActions.DELETE_IMAGE_PERMISSIONS,
		AppstreamActions.DELETE_STACK,
		AppstreamActions.DELETE_THEME_FOR_STACK,
		AppstreamActions.DELETE_USAGE_REPORT_SUBSCRIPTION,
		AppstreamActions.DELETE_USER,
		AppstreamActions.DISABLE_USER,
		AppstreamActions.DISASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK,
		AppstreamActions.DISASSOCIATE_APPLICATION_FLEET,
		AppstreamActions.DISASSOCIATE_APPLICATION_FROM_ENTITLEMENT,
		AppstreamActions.DISASSOCIATE_FLEET,
		AppstreamActions.DISASSOCIATE_SOFTWARE_FROM_IMAGE_BUILDER,
		AppstreamActions.ENABLE_USER,
		AppstreamActions.EXPIRE_SESSION,
		AppstreamActions.START_APP_BLOCK_BUILDER,
		AppstreamActions.START_FLEET,
		AppstreamActions.START_IMAGE_BUILDER,
		AppstreamActions.START_SOFTWARE_DEPLOYMENT_TO_IMAGE_BUILDER,
		AppstreamActions.STOP_APP_BLOCK_BUILDER,
		AppstreamActions.STOP_FLEET,
		AppstreamActions.STOP_IMAGE_BUILDER,
		AppstreamActions.STREAM,
		AppstreamActions.UPDATE_APP_BLOCK_BUILDER,
		AppstreamActions.UPDATE_APPLICATION,
		AppstreamActions.UPDATE_DIRECTORY_CONFIG,
		AppstreamActions.UPDATE_ENTITLEMENT,
		AppstreamActions.UPDATE_FLEET,
		AppstreamActions.UPDATE_IMAGE_PERMISSIONS,
		AppstreamActions.UPDATE_STACK,
		AppstreamActions.UPDATE_THEME_FOR_STACK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppstreamActions.DESCRIBE_APP_BLOCK_BUILDER_APP_BLOCK_ASSOCIATIONS,
		AppstreamActions.DESCRIBE_APP_BLOCK_BUILDERS,
		AppstreamActions.DESCRIBE_APP_BLOCKS,
		AppstreamActions.DESCRIBE_APP_LICENSE_USAGE,
		AppstreamActions.DESCRIBE_APPLICATION_FLEET_ASSOCIATIONS,
		AppstreamActions.DESCRIBE_APPLICATIONS,
		AppstreamActions.DESCRIBE_DIRECTORY_CONFIGS,
		AppstreamActions.DESCRIBE_ENTITLEMENTS,
		AppstreamActions.DESCRIBE_FLEETS,
		AppstreamActions.DESCRIBE_IMAGE_BUILDERS,
		AppstreamActions.DESCRIBE_IMAGES,
		AppstreamActions.DESCRIBE_SESSIONS,
		AppstreamActions.DESCRIBE_SOFTWARE_ASSOCIATIONS,
		AppstreamActions.DESCRIBE_STACKS,
		AppstreamActions.DESCRIBE_USAGE_REPORT_SUBSCRIPTIONS,
		AppstreamActions.DESCRIBE_USER_STACK_ASSOCIATIONS,
		AppstreamActions.DESCRIBE_USERS,
		AppstreamActions.LIST_ENTITLED_APPLICATIONS,
		AppstreamActions.LIST_EXPORT_IMAGE_TASKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AppstreamActions.TAG_RESOURCE,
		AppstreamActions.UNTAG_RESOURCE,
	];
}

const AppBlockArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):app-block/(?<appBlockName>[^:/?]+)$",
);
const AppBlockBuilderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):app-block-builder/(?<appBlockBuilderName>[^:/?]+)$",
);
const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationName>[^:/?]+)$",
);
const FleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):fleet/(?<fleetName>[^:/?]+)$",
);
const ImageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):image/(?<imageName>[^:/?]+)$",
);
const ImageBuilderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):image-builder/(?<imageBuilderName>[^:/?]+)$",
);
const StackArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):stack/(?<stackName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appstream resources.
 */
export class AppstreamResources {
	/**
	 * Builds an ARN for the app-block resource.
	 */
	static appBlock(props: {
		/** The AppBlockName component of the ARN. */
		readonly appBlockName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appstream:${props.region ?? "*"}:${props.account ?? "*"}:app-block/${props.appBlockName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app-block resource.
	 */
	static isValidAppBlockArn(arn: string): boolean {
		return AppBlockArnRegex.test(arn);
	}

	/**
	 * Parses a app-block ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppBlockArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appBlockName: string;
	} {
		const match = AppBlockArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app-block ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appBlockName: match.groups!.appBlockName,
		};
	}

	/**
	 * Builds an ARN for the app-block-builder resource.
	 */
	static appBlockBuilder(props: {
		/** The AppBlockBuilderName component of the ARN. */
		readonly appBlockBuilderName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appstream:${props.region ?? "*"}:${props.account ?? "*"}:app-block-builder/${props.appBlockBuilderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the app-block-builder resource.
	 */
	static isValidAppBlockBuilderArn(arn: string): boolean {
		return AppBlockBuilderArnRegex.test(arn);
	}

	/**
	 * Parses a app-block-builder ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppBlockBuilderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appBlockBuilderName: string;
	} {
		const match = AppBlockBuilderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid app-block-builder ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appBlockBuilderName: match.groups!.appBlockBuilderName,
		};
	}

	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationName component of the ARN. */
		readonly applicationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appstream:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationName: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationName: match.groups!.applicationName,
		};
	}

	/**
	 * Builds an ARN for the fleet resource.
	 */
	static fleet(props: {
		/** The FleetName component of the ARN. */
		readonly fleetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appstream:${props.region ?? "*"}:${props.account ?? "*"}:fleet/${props.fleetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fleet resource.
	 */
	static isValidFleetArn(arn: string): boolean {
		return FleetArnRegex.test(arn);
	}

	/**
	 * Parses a fleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFleetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fleetName: string;
	} {
		const match = FleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fleetName: match.groups!.fleetName,
		};
	}

	/**
	 * Builds an ARN for the image resource.
	 */
	static image(props: {
		/** The ImageName component of the ARN. */
		readonly imageName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appstream:${props.region ?? "*"}:${props.account ?? "*"}:image/${props.imageName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the image resource.
	 */
	static isValidImageArn(arn: string): boolean {
		return ImageArnRegex.test(arn);
	}

	/**
	 * Parses a image ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageName: string;
	} {
		const match = ImageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid image ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageName: match.groups!.imageName,
		};
	}

	/**
	 * Builds an ARN for the image-builder resource.
	 */
	static imageBuilder(props: {
		/** The ImageBuilderName component of the ARN. */
		readonly imageBuilderName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appstream:${props.region ?? "*"}:${props.account ?? "*"}:image-builder/${props.imageBuilderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the image-builder resource.
	 */
	static isValidImageBuilderArn(arn: string): boolean {
		return ImageBuilderArnRegex.test(arn);
	}

	/**
	 * Parses a image-builder ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImageBuilderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		imageBuilderName: string;
	} {
		const match = ImageBuilderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid image-builder ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			imageBuilderName: match.groups!.imageBuilderName,
		};
	}

	/**
	 * Builds an ARN for the stack resource.
	 */
	static stack(props: {
		/** The StackName component of the ARN. */
		readonly stackName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:appstream:${props.region ?? "*"}:${props.account ?? "*"}:stack/${props.stackName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stack resource.
	 */
	static isValidStackArn(arn: string): boolean {
		return StackArnRegex.test(arn);
	}

	/**
	 * Parses a stack ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStackArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stackName: string;
	} {
		const match = StackArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stack ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stackName: match.groups!.stackName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for appstream.
 */
export class AppstreamOperations {
	/** IAM actions required for the AssociateAppBlockBuilderAppBlock API call. */
	static readonly ASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK: string[] = [];
	/** IAM actions required for the AssociateApplicationFleet API call. */
	static readonly ASSOCIATE_APPLICATION_FLEET: string[] = [
		"appstream:AssociateApplicationFleet",
	];
	/** IAM actions required for the AssociateApplicationToEntitlement API call. */
	static readonly ASSOCIATE_APPLICATION_TO_ENTITLEMENT: string[] = [];
	/** IAM actions required for the AssociateFleet API call. */
	static readonly ASSOCIATE_FLEET: string[] = ["appstream:AssociateFleet"];
	/** IAM actions required for the AssociateSoftwareToImageBuilder API call. */
	static readonly ASSOCIATE_SOFTWARE_TO_IMAGE_BUILDER: string[] = [];
	/** IAM actions required for the BatchAssociateUserStack API call. */
	static readonly BATCH_ASSOCIATE_USER_STACK: string[] = [
		"appstream:BatchAssociateUserStack",
	];
	/** IAM actions required for the BatchDisassociateUserStack API call. */
	static readonly BATCH_DISASSOCIATE_USER_STACK: string[] = [
		"appstream:BatchDisassociateUserStack",
	];
	/** IAM actions required for the CopyImage API call. */
	static readonly COPY_IMAGE: string[] = ["appstream:CopyImage"];
	/** IAM actions required for the CreateAppBlock API call. */
	static readonly CREATE_APP_BLOCK: string[] = ["appstream:CreateAppBlock"];
	/** IAM actions required for the CreateAppBlockBuilder API call. */
	static readonly CREATE_APP_BLOCK_BUILDER: string[] = [];
	/** IAM actions required for the CreateAppBlockBuilderStreamingURL API call. */
	static readonly CREATE_APP_BLOCK_BUILDER_STREAMING_URL: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"appstream:CreateApplication",
	];
	/** IAM actions required for the CreateDirectoryConfig API call. */
	static readonly CREATE_DIRECTORY_CONFIG: string[] = [
		"appstream:CreateDirectoryConfig",
	];
	/** IAM actions required for the CreateEntitlement API call. */
	static readonly CREATE_ENTITLEMENT: string[] = [
		"appstream:CreateEntitlement",
	];
	/** IAM actions required for the CreateExportImageTask API call. */
	static readonly CREATE_EXPORT_IMAGE_TASK: string[] = [];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CREATE_FLEET: string[] = [
		"appstream:CreateFleet",
		"iam:PassRole",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateImageBuilder API call. */
	static readonly CREATE_IMAGE_BUILDER: string[] = [
		"appstream:CreateImageBuilder",
		"iam:PassRole",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateImageBuilderStreamingURL API call. */
	static readonly CREATE_IMAGE_BUILDER_STREAMING_URL: string[] = [
		"appstream:CreateImageBuilderStreamingURL",
	];
	/** IAM actions required for the CreateImportedImage API call. */
	static readonly CREATE_IMPORTED_IMAGE: string[] = [];
	/** IAM actions required for the CreateStack API call. */
	static readonly CREATE_STACK: string[] = [
		"appstream:CreateStack",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateStreamingURL API call. */
	static readonly CREATE_STREAMING_URL: string[] = [
		"appstream:CreateStreamingURL",
	];
	/** IAM actions required for the CreateThemeForStack API call. */
	static readonly CREATE_THEME_FOR_STACK: string[] = [];
	/** IAM actions required for the CreateUpdatedImage API call. */
	static readonly CREATE_UPDATED_IMAGE: string[] = [
		"appstream:CreateUpdatedImage",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateUsageReportSubscription API call. */
	static readonly CREATE_USAGE_REPORT_SUBSCRIPTION: string[] = [
		"appstream:CreateUsageReportSubscription",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = ["appstream:CreateUser"];
	/** IAM actions required for the DeleteAppBlock API call. */
	static readonly DELETE_APP_BLOCK: string[] = [];
	/** IAM actions required for the DeleteAppBlockBuilder API call. */
	static readonly DELETE_APP_BLOCK_BUILDER: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"appstream:DeleteApplication",
	];
	/** IAM actions required for the DeleteDirectoryConfig API call. */
	static readonly DELETE_DIRECTORY_CONFIG: string[] = [
		"appstream:DeleteDirectoryConfig",
	];
	/** IAM actions required for the DeleteEntitlement API call. */
	static readonly DELETE_ENTITLEMENT: string[] = [
		"appstream:DeleteEntitlement",
	];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DELETE_FLEET: string[] = ["appstream:DeleteFleet"];
	/** IAM actions required for the DeleteImage API call. */
	static readonly DELETE_IMAGE: string[] = ["appstream:DeleteImage"];
	/** IAM actions required for the DeleteImageBuilder API call. */
	static readonly DELETE_IMAGE_BUILDER: string[] = [
		"appstream:DeleteImageBuilder",
	];
	/** IAM actions required for the DeleteImagePermissions API call. */
	static readonly DELETE_IMAGE_PERMISSIONS: string[] = [
		"appstream:DeleteImagePermissions",
	];
	/** IAM actions required for the DeleteStack API call. */
	static readonly DELETE_STACK: string[] = ["appstream:DeleteStack"];
	/** IAM actions required for the DeleteThemeForStack API call. */
	static readonly DELETE_THEME_FOR_STACK: string[] = [];
	/** IAM actions required for the DeleteUsageReportSubscription API call. */
	static readonly DELETE_USAGE_REPORT_SUBSCRIPTION: string[] = [
		"appstream:DeleteUsageReportSubscription",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["appstream:DeleteUser"];
	/** IAM actions required for the DescribeAppBlockBuilderAppBlockAssociations API call. */
	static readonly DESCRIBE_APP_BLOCK_BUILDER_APP_BLOCK_ASSOCIATIONS: string[] =
		["appstream:DescribeAppBlockBuilderAppBlockAssociations"];
	/** IAM actions required for the DescribeAppBlockBuilders API call. */
	static readonly DESCRIBE_APP_BLOCK_BUILDERS: string[] = [
		"appstream:DescribeAppBlockBuilders",
	];
	/** IAM actions required for the DescribeAppBlocks API call. */
	static readonly DESCRIBE_APP_BLOCKS: string[] = [
		"appstream:DescribeAppBlocks",
	];
	/** IAM actions required for the DescribeAppLicenseUsage API call. */
	static readonly DESCRIBE_APP_LICENSE_USAGE: string[] = [];
	/** IAM actions required for the DescribeApplicationFleetAssociations API call. */
	static readonly DESCRIBE_APPLICATION_FLEET_ASSOCIATIONS: string[] = [
		"appstream:DescribeApplicationFleetAssociations",
	];
	/** IAM actions required for the DescribeApplications API call. */
	static readonly DESCRIBE_APPLICATIONS: string[] = [
		"appstream:DescribeApplications",
	];
	/** IAM actions required for the DescribeDirectoryConfigs API call. */
	static readonly DESCRIBE_DIRECTORY_CONFIGS: string[] = [
		"appstream:DescribeDirectoryConfigs",
	];
	/** IAM actions required for the DescribeEntitlements API call. */
	static readonly DESCRIBE_ENTITLEMENTS: string[] = [
		"appstream:DescribeEntitlements",
	];
	/** IAM actions required for the DescribeFleets API call. */
	static readonly DESCRIBE_FLEETS: string[] = ["appstream:DescribeFleets"];
	/** IAM actions required for the DescribeImageBuilders API call. */
	static readonly DESCRIBE_IMAGE_BUILDERS: string[] = [
		"appstream:DescribeImageBuilders",
	];
	/** IAM actions required for the DescribeImagePermissions API call. */
	static readonly DESCRIBE_IMAGE_PERMISSIONS: string[] = [
		"appstream:DescribeImagePermissions",
	];
	/** IAM actions required for the DescribeImages API call. */
	static readonly DESCRIBE_IMAGES: string[] = ["appstream:DescribeImages"];
	/** IAM actions required for the DescribeSessions API call. */
	static readonly DESCRIBE_SESSIONS: string[] = ["appstream:DescribeSessions"];
	/** IAM actions required for the DescribeSoftwareAssociations API call. */
	static readonly DESCRIBE_SOFTWARE_ASSOCIATIONS: string[] = [];
	/** IAM actions required for the DescribeStacks API call. */
	static readonly DESCRIBE_STACKS: string[] = ["appstream:DescribeStacks"];
	/** IAM actions required for the DescribeThemeForStack API call. */
	static readonly DESCRIBE_THEME_FOR_STACK: string[] = [
		"appstream:DescribeThemeForStack",
	];
	/** IAM actions required for the DescribeUsageReportSubscriptions API call. */
	static readonly DESCRIBE_USAGE_REPORT_SUBSCRIPTIONS: string[] = [
		"appstream:DescribeUsageReportSubscriptions",
	];
	/** IAM actions required for the DescribeUserStackAssociations API call. */
	static readonly DESCRIBE_USER_STACK_ASSOCIATIONS: string[] = [
		"appstream:DescribeUserStackAssociations",
	];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DESCRIBE_USERS: string[] = ["appstream:DescribeUsers"];
	/** IAM actions required for the DisableUser API call. */
	static readonly DISABLE_USER: string[] = ["appstream:DisableUser"];
	/** IAM actions required for the DisassociateAppBlockBuilderAppBlock API call. */
	static readonly DISASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK: string[] = [];
	/** IAM actions required for the DisassociateApplicationFleet API call. */
	static readonly DISASSOCIATE_APPLICATION_FLEET: string[] = [
		"appstream:DisassociateApplicationFleet",
	];
	/** IAM actions required for the DisassociateApplicationFromEntitlement API call. */
	static readonly DISASSOCIATE_APPLICATION_FROM_ENTITLEMENT: string[] = [
		"appstream:DisassociateApplicationFromEntitlement",
	];
	/** IAM actions required for the DisassociateFleet API call. */
	static readonly DISASSOCIATE_FLEET: string[] = [
		"appstream:DisassociateFleet",
	];
	/** IAM actions required for the DisassociateSoftwareFromImageBuilder API call. */
	static readonly DISASSOCIATE_SOFTWARE_FROM_IMAGE_BUILDER: string[] = [];
	/** IAM actions required for the DrainSessionInstance API call. */
	static readonly DRAIN_SESSION_INSTANCE: string[] = [];
	/** IAM actions required for the EnableUser API call. */
	static readonly ENABLE_USER: string[] = ["appstream:EnableUser"];
	/** IAM actions required for the ExpireSession API call. */
	static readonly EXPIRE_SESSION: string[] = ["appstream:ExpireSession"];
	/** IAM actions required for the GetExportImageTask API call. */
	static readonly GET_EXPORT_IMAGE_TASK: string[] = [];
	/** IAM actions required for the ListAssociatedFleets API call. */
	static readonly LIST_ASSOCIATED_FLEETS: string[] = [
		"appstream:ListAssociatedFleets",
	];
	/** IAM actions required for the ListAssociatedStacks API call. */
	static readonly LIST_ASSOCIATED_STACKS: string[] = [
		"appstream:ListAssociatedStacks",
	];
	/** IAM actions required for the ListEntitledApplications API call. */
	static readonly LIST_ENTITLED_APPLICATIONS: string[] = [
		"appstream:ListEntitledApplications",
	];
	/** IAM actions required for the ListExportImageTasks API call. */
	static readonly LIST_EXPORT_IMAGE_TASKS: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"appstream:ListTagsForResource",
	];
	/** IAM actions required for the StartAppBlockBuilder API call. */
	static readonly START_APP_BLOCK_BUILDER: string[] = [];
	/** IAM actions required for the StartFleet API call. */
	static readonly START_FLEET: string[] = ["appstream:StartFleet"];
	/** IAM actions required for the StartImageBuilder API call. */
	static readonly START_IMAGE_BUILDER: string[] = [
		"appstream:StartImageBuilder",
	];
	/** IAM actions required for the StartSoftwareDeploymentToImageBuilder API call. */
	static readonly START_SOFTWARE_DEPLOYMENT_TO_IMAGE_BUILDER: string[] = [];
	/** IAM actions required for the StopAppBlockBuilder API call. */
	static readonly STOP_APP_BLOCK_BUILDER: string[] = [];
	/** IAM actions required for the StopFleet API call. */
	static readonly STOP_FLEET: string[] = ["appstream:StopFleet"];
	/** IAM actions required for the StopImageBuilder API call. */
	static readonly STOP_IMAGE_BUILDER: string[] = ["appstream:StopImageBuilder"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["appstream:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["appstream:UntagResource"];
	/** IAM actions required for the UpdateAppBlockBuilder API call. */
	static readonly UPDATE_APP_BLOCK_BUILDER: string[] = [];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [];
	/** IAM actions required for the UpdateDirectoryConfig API call. */
	static readonly UPDATE_DIRECTORY_CONFIG: string[] = [
		"appstream:UpdateDirectoryConfig",
	];
	/** IAM actions required for the UpdateEntitlement API call. */
	static readonly UPDATE_ENTITLEMENT: string[] = [
		"appstream:UpdateEntitlement",
	];
	/** IAM actions required for the UpdateFleet API call. */
	static readonly UPDATE_FLEET: string[] = [
		"iam:PassRole",
		"appstream:UpdateFleet",
	];
	/** IAM actions required for the UpdateImagePermissions API call. */
	static readonly UPDATE_IMAGE_PERMISSIONS: string[] = [
		"appstream:UpdateImagePermissions",
	];
	/** IAM actions required for the UpdateStack API call. */
	static readonly UPDATE_STACK: string[] = ["appstream:UpdateStack"];
	/** IAM actions required for the UpdateThemeForStack API call. */
	static readonly UPDATE_THEME_FOR_STACK: string[] = [];
}

/**
 * Condition key constants and builders for appstream.
 */
export class AppstreamConditions {
	/** Condition keys applicable to the AssociateAppBlockBuilderAppBlock action. */
	static readonly ASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the AssociateApplicationFleet action. */
	static readonly ASSOCIATE_APPLICATION_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateFleet action. */
	static readonly ASSOCIATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateSoftwareToImageBuilder action. */
	static readonly ASSOCIATE_SOFTWARE_TO_IMAGE_BUILDER_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the BatchAssociateUserStack action. */
	static readonly BATCH_ASSOCIATE_USER_STACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the BatchDisassociateUserStack action. */
	static readonly BATCH_DISASSOCIATE_USER_STACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopyImage action. */
	static readonly COPY_IMAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAppBlock action. */
	static readonly CREATE_APP_BLOCK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppBlockBuilder action. */
	static readonly CREATE_APP_BLOCK_BUILDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppBlockBuilderStreamingURL action. */
	static readonly CREATE_APP_BLOCK_BUILDER_STREAMING_URL_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExportImageTask action. */
	static readonly CREATE_EXPORT_IMAGE_TASK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CREATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImageBuilder action. */
	static readonly CREATE_IMAGE_BUILDER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImageBuilderStreamingURL action. */
	static readonly CREATE_IMAGE_BUILDER_STREAMING_URL_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateImportedImage action. */
	static readonly CREATE_IMPORTED_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStack action. */
	static readonly CREATE_STACK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingURL action. */
	static readonly CREATE_STREAMING_URL_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateUpdatedImage action. */
	static readonly CREATE_UPDATED_IMAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAppBlock action. */
	static readonly DELETE_APP_BLOCK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAppBlockBuilder action. */
	static readonly DELETE_APP_BLOCK_BUILDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DELETE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteFleet action. */
	static readonly DELETE_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteImage action. */
	static readonly DELETE_IMAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteImageBuilder action. */
	static readonly DELETE_IMAGE_BUILDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteImagePermissions action. */
	static readonly DELETE_IMAGE_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteStack action. */
	static readonly DELETE_STACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateAppBlockBuilderAppBlock action. */
	static readonly DISASSOCIATE_APP_BLOCK_BUILDER_APP_BLOCK_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DisassociateApplicationFleet action. */
	static readonly DISASSOCIATE_APPLICATION_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateFleet action. */
	static readonly DISASSOCIATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateSoftwareFromImageBuilder action. */
	static readonly DISASSOCIATE_SOFTWARE_FROM_IMAGE_BUILDER_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the StartAppBlockBuilder action. */
	static readonly START_APP_BLOCK_BUILDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartFleet action. */
	static readonly START_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartImageBuilder action. */
	static readonly START_IMAGE_BUILDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSoftwareDeploymentToImageBuilder action. */
	static readonly START_SOFTWARE_DEPLOYMENT_TO_IMAGE_BUILDER_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the StopAppBlockBuilder action. */
	static readonly STOP_APP_BLOCK_BUILDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopFleet action. */
	static readonly STOP_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopImageBuilder action. */
	static readonly STOP_IMAGE_BUILDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the Stream action. */
	static readonly STREAM_CONDITION_KEYS: string[] = ["appstream:userId"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAppBlockBuilder action. */
	static readonly UPDATE_APP_BLOCK_BUILDER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UPDATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateFleet action. */
	static readonly UPDATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateImagePermissions action. */
	static readonly UPDATE_IMAGE_PERMISSIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateStack action. */
	static readonly UPDATE_STACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: appstream:userId (String) */
	static readonly USER_ID = "appstream:userId";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `appstream:userId`.
	 */
	static userId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "appstream:userId": value } };
	}

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
