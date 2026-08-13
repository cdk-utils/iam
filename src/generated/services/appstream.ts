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
	static readonly AssociateAppBlockBuilderAppBlock =
		"appstream:AssociateAppBlockBuilderAppBlock";
	/** [Write] appstream:AssociateApplicationFleet */
	static readonly AssociateApplicationFleet =
		"appstream:AssociateApplicationFleet";
	/** [Write] appstream:AssociateApplicationToEntitlement */
	static readonly AssociateApplicationToEntitlement =
		"appstream:AssociateApplicationToEntitlement";
	/** [Write] appstream:AssociateFleet */
	static readonly AssociateFleet = "appstream:AssociateFleet";
	/** [Write] appstream:AssociateSoftwareToImageBuilder */
	static readonly AssociateSoftwareToImageBuilder =
		"appstream:AssociateSoftwareToImageBuilder";
	/** [Write] appstream:BatchAssociateUserStack */
	static readonly BatchAssociateUserStack = "appstream:BatchAssociateUserStack";
	/** [Write] appstream:BatchDisassociateUserStack */
	static readonly BatchDisassociateUserStack =
		"appstream:BatchDisassociateUserStack";
	/** [Write] appstream:CopyImage */
	static readonly CopyImage = "appstream:CopyImage";
	/** [Write] appstream:CreateAppBlock */
	static readonly CreateAppBlock = "appstream:CreateAppBlock";
	/** [Write] appstream:CreateAppBlockBuilder */
	static readonly CreateAppBlockBuilder = "appstream:CreateAppBlockBuilder";
	/** [Write] appstream:CreateAppBlockBuilderStreamingURL */
	static readonly CreateAppBlockBuilderStreamingURL =
		"appstream:CreateAppBlockBuilderStreamingURL";
	/** [Write] appstream:CreateApplication */
	static readonly CreateApplication = "appstream:CreateApplication";
	/** [Write] appstream:CreateDirectoryConfig */
	static readonly CreateDirectoryConfig = "appstream:CreateDirectoryConfig";
	/** [Write] appstream:CreateEntitlement */
	static readonly CreateEntitlement = "appstream:CreateEntitlement";
	/** [Write] appstream:CreateExportImageTask */
	static readonly CreateExportImageTask = "appstream:CreateExportImageTask";
	/** [Write] appstream:CreateFleet */
	static readonly CreateFleet = "appstream:CreateFleet";
	/** [Write] appstream:CreateImageBuilder */
	static readonly CreateImageBuilder = "appstream:CreateImageBuilder";
	/** [Write] appstream:CreateImageBuilderStreamingURL */
	static readonly CreateImageBuilderStreamingURL =
		"appstream:CreateImageBuilderStreamingURL";
	/** [Write] appstream:CreateImportedImage */
	static readonly CreateImportedImage = "appstream:CreateImportedImage";
	/** [Write] appstream:CreateStack */
	static readonly CreateStack = "appstream:CreateStack";
	/** [Write] appstream:CreateStreamingURL */
	static readonly CreateStreamingURL = "appstream:CreateStreamingURL";
	/** [Write] appstream:CreateThemeForStack */
	static readonly CreateThemeForStack = "appstream:CreateThemeForStack";
	/** [Write] appstream:CreateUpdatedImage */
	static readonly CreateUpdatedImage = "appstream:CreateUpdatedImage";
	/** [Write] appstream:CreateUsageReportSubscription */
	static readonly CreateUsageReportSubscription =
		"appstream:CreateUsageReportSubscription";
	/** [Write] appstream:CreateUser */
	static readonly CreateUser = "appstream:CreateUser";
	/** [Write] appstream:DeleteAppBlock */
	static readonly DeleteAppBlock = "appstream:DeleteAppBlock";
	/** [Write] appstream:DeleteAppBlockBuilder */
	static readonly DeleteAppBlockBuilder = "appstream:DeleteAppBlockBuilder";
	/** [Write] appstream:DeleteApplication */
	static readonly DeleteApplication = "appstream:DeleteApplication";
	/** [Write] appstream:DeleteDirectoryConfig */
	static readonly DeleteDirectoryConfig = "appstream:DeleteDirectoryConfig";
	/** [Write] appstream:DeleteEntitlement */
	static readonly DeleteEntitlement = "appstream:DeleteEntitlement";
	/** [Write] appstream:DeleteFleet */
	static readonly DeleteFleet = "appstream:DeleteFleet";
	/** [Write] appstream:DeleteImage */
	static readonly DeleteImage = "appstream:DeleteImage";
	/** [Write] appstream:DeleteImageBuilder */
	static readonly DeleteImageBuilder = "appstream:DeleteImageBuilder";
	/** [Write] appstream:DeleteImagePermissions */
	static readonly DeleteImagePermissions = "appstream:DeleteImagePermissions";
	/** [Write] appstream:DeleteStack */
	static readonly DeleteStack = "appstream:DeleteStack";
	/** [Write] appstream:DeleteThemeForStack */
	static readonly DeleteThemeForStack = "appstream:DeleteThemeForStack";
	/** [Write] appstream:DeleteUsageReportSubscription */
	static readonly DeleteUsageReportSubscription =
		"appstream:DeleteUsageReportSubscription";
	/** [Write] appstream:DeleteUser */
	static readonly DeleteUser = "appstream:DeleteUser";
	/** [List] appstream:DescribeAppBlockBuilderAppBlockAssociations */
	static readonly DescribeAppBlockBuilderAppBlockAssociations =
		"appstream:DescribeAppBlockBuilderAppBlockAssociations";
	/** [List] appstream:DescribeAppBlockBuilders */
	static readonly DescribeAppBlockBuilders =
		"appstream:DescribeAppBlockBuilders";
	/** [List] appstream:DescribeAppBlocks */
	static readonly DescribeAppBlocks = "appstream:DescribeAppBlocks";
	/** [List] appstream:DescribeAppLicenseUsage */
	static readonly DescribeAppLicenseUsage = "appstream:DescribeAppLicenseUsage";
	/** [List] appstream:DescribeApplicationFleetAssociations */
	static readonly DescribeApplicationFleetAssociations =
		"appstream:DescribeApplicationFleetAssociations";
	/** [List] appstream:DescribeApplications */
	static readonly DescribeApplications = "appstream:DescribeApplications";
	/** [List] appstream:DescribeDirectoryConfigs */
	static readonly DescribeDirectoryConfigs =
		"appstream:DescribeDirectoryConfigs";
	/** [List] appstream:DescribeEntitlements */
	static readonly DescribeEntitlements = "appstream:DescribeEntitlements";
	/** [List] appstream:DescribeFleets */
	static readonly DescribeFleets = "appstream:DescribeFleets";
	/** [List] appstream:DescribeImageBuilders */
	static readonly DescribeImageBuilders = "appstream:DescribeImageBuilders";
	/** [Read] appstream:DescribeImagePermissions */
	static readonly DescribeImagePermissions =
		"appstream:DescribeImagePermissions";
	/** [List] appstream:DescribeImages */
	static readonly DescribeImages = "appstream:DescribeImages";
	/** [List] appstream:DescribeSessions */
	static readonly DescribeSessions = "appstream:DescribeSessions";
	/** [List] appstream:DescribeSoftwareAssociations */
	static readonly DescribeSoftwareAssociations =
		"appstream:DescribeSoftwareAssociations";
	/** [List] appstream:DescribeStacks */
	static readonly DescribeStacks = "appstream:DescribeStacks";
	/** [Read] appstream:DescribeThemeForStack */
	static readonly DescribeThemeForStack = "appstream:DescribeThemeForStack";
	/** [List] appstream:DescribeUsageReportSubscriptions */
	static readonly DescribeUsageReportSubscriptions =
		"appstream:DescribeUsageReportSubscriptions";
	/** [List] appstream:DescribeUserStackAssociations */
	static readonly DescribeUserStackAssociations =
		"appstream:DescribeUserStackAssociations";
	/** [List] appstream:DescribeUsers */
	static readonly DescribeUsers = "appstream:DescribeUsers";
	/** [Write] appstream:DisableUser */
	static readonly DisableUser = "appstream:DisableUser";
	/** [Write] appstream:DisassociateAppBlockBuilderAppBlock */
	static readonly DisassociateAppBlockBuilderAppBlock =
		"appstream:DisassociateAppBlockBuilderAppBlock";
	/** [Write] appstream:DisassociateApplicationFleet */
	static readonly DisassociateApplicationFleet =
		"appstream:DisassociateApplicationFleet";
	/** [Write] appstream:DisassociateApplicationFromEntitlement */
	static readonly DisassociateApplicationFromEntitlement =
		"appstream:DisassociateApplicationFromEntitlement";
	/** [Write] appstream:DisassociateFleet */
	static readonly DisassociateFleet = "appstream:DisassociateFleet";
	/** [Write] appstream:DisassociateSoftwareFromImageBuilder */
	static readonly DisassociateSoftwareFromImageBuilder =
		"appstream:DisassociateSoftwareFromImageBuilder";
	/** [Write] appstream:EnableUser */
	static readonly EnableUser = "appstream:EnableUser";
	/** [Write] appstream:ExpireSession */
	static readonly ExpireSession = "appstream:ExpireSession";
	/** [Read] appstream:GetExportImageTask */
	static readonly actionGetExportImageTask = "appstream:GetExportImageTask";
	/** [Read] appstream:ListAssociatedFleets */
	static readonly ListAssociatedFleets = "appstream:ListAssociatedFleets";
	/** [Read] appstream:ListAssociatedStacks */
	static readonly ListAssociatedStacks = "appstream:ListAssociatedStacks";
	/** [List] appstream:ListEntitledApplications */
	static readonly ListEntitledApplications =
		"appstream:ListEntitledApplications";
	/** [List] appstream:ListExportImageTasks */
	static readonly ListExportImageTasks = "appstream:ListExportImageTasks";
	/** [Read] appstream:ListTagsForResource */
	static readonly ListTagsForResource = "appstream:ListTagsForResource";
	/** [Write] appstream:StartAppBlockBuilder */
	static readonly StartAppBlockBuilder = "appstream:StartAppBlockBuilder";
	/** [Write] appstream:StartFleet */
	static readonly StartFleet = "appstream:StartFleet";
	/** [Write] appstream:StartImageBuilder */
	static readonly StartImageBuilder = "appstream:StartImageBuilder";
	/** [Write] appstream:StartSoftwareDeploymentToImageBuilder */
	static readonly StartSoftwareDeploymentToImageBuilder =
		"appstream:StartSoftwareDeploymentToImageBuilder";
	/** [Write] appstream:StopAppBlockBuilder */
	static readonly StopAppBlockBuilder = "appstream:StopAppBlockBuilder";
	/** [Write] appstream:StopFleet */
	static readonly StopFleet = "appstream:StopFleet";
	/** [Write] appstream:StopImageBuilder */
	static readonly StopImageBuilder = "appstream:StopImageBuilder";
	/** [Write] appstream:Stream */
	static readonly Stream = "appstream:Stream";
	/** [Tagging] appstream:TagResource */
	static readonly TagResource = "appstream:TagResource";
	/** [Tagging] appstream:UntagResource */
	static readonly UntagResource = "appstream:UntagResource";
	/** [Write] appstream:UpdateAppBlockBuilder */
	static readonly UpdateAppBlockBuilder = "appstream:UpdateAppBlockBuilder";
	/** [Write] appstream:UpdateApplication */
	static readonly UpdateApplication = "appstream:UpdateApplication";
	/** [Write] appstream:UpdateDirectoryConfig */
	static readonly UpdateDirectoryConfig = "appstream:UpdateDirectoryConfig";
	/** [Write] appstream:UpdateEntitlement */
	static readonly UpdateEntitlement = "appstream:UpdateEntitlement";
	/** [Write] appstream:UpdateFleet */
	static readonly UpdateFleet = "appstream:UpdateFleet";
	/** [Write] appstream:UpdateImagePermissions */
	static readonly UpdateImagePermissions = "appstream:UpdateImagePermissions";
	/** [Write] appstream:UpdateStack */
	static readonly UpdateStack = "appstream:UpdateStack";
	/** [Write] appstream:UpdateThemeForStack */
	static readonly UpdateThemeForStack = "appstream:UpdateThemeForStack";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppstreamActions.DescribeImagePermissions,
		AppstreamActions.DescribeThemeForStack,
		AppstreamActions.actionGetExportImageTask,
		AppstreamActions.ListAssociatedFleets,
		AppstreamActions.ListAssociatedStacks,
		AppstreamActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppstreamActions.AssociateAppBlockBuilderAppBlock,
		AppstreamActions.AssociateApplicationFleet,
		AppstreamActions.AssociateApplicationToEntitlement,
		AppstreamActions.AssociateFleet,
		AppstreamActions.AssociateSoftwareToImageBuilder,
		AppstreamActions.BatchAssociateUserStack,
		AppstreamActions.BatchDisassociateUserStack,
		AppstreamActions.CopyImage,
		AppstreamActions.CreateAppBlock,
		AppstreamActions.CreateAppBlockBuilder,
		AppstreamActions.CreateAppBlockBuilderStreamingURL,
		AppstreamActions.CreateApplication,
		AppstreamActions.CreateDirectoryConfig,
		AppstreamActions.CreateEntitlement,
		AppstreamActions.CreateExportImageTask,
		AppstreamActions.CreateFleet,
		AppstreamActions.CreateImageBuilder,
		AppstreamActions.CreateImageBuilderStreamingURL,
		AppstreamActions.CreateImportedImage,
		AppstreamActions.CreateStack,
		AppstreamActions.CreateStreamingURL,
		AppstreamActions.CreateThemeForStack,
		AppstreamActions.CreateUpdatedImage,
		AppstreamActions.CreateUsageReportSubscription,
		AppstreamActions.CreateUser,
		AppstreamActions.DeleteAppBlock,
		AppstreamActions.DeleteAppBlockBuilder,
		AppstreamActions.DeleteApplication,
		AppstreamActions.DeleteDirectoryConfig,
		AppstreamActions.DeleteEntitlement,
		AppstreamActions.DeleteFleet,
		AppstreamActions.DeleteImage,
		AppstreamActions.DeleteImageBuilder,
		AppstreamActions.DeleteImagePermissions,
		AppstreamActions.DeleteStack,
		AppstreamActions.DeleteThemeForStack,
		AppstreamActions.DeleteUsageReportSubscription,
		AppstreamActions.DeleteUser,
		AppstreamActions.DisableUser,
		AppstreamActions.DisassociateAppBlockBuilderAppBlock,
		AppstreamActions.DisassociateApplicationFleet,
		AppstreamActions.DisassociateApplicationFromEntitlement,
		AppstreamActions.DisassociateFleet,
		AppstreamActions.DisassociateSoftwareFromImageBuilder,
		AppstreamActions.EnableUser,
		AppstreamActions.ExpireSession,
		AppstreamActions.StartAppBlockBuilder,
		AppstreamActions.StartFleet,
		AppstreamActions.StartImageBuilder,
		AppstreamActions.StartSoftwareDeploymentToImageBuilder,
		AppstreamActions.StopAppBlockBuilder,
		AppstreamActions.StopFleet,
		AppstreamActions.StopImageBuilder,
		AppstreamActions.Stream,
		AppstreamActions.UpdateAppBlockBuilder,
		AppstreamActions.UpdateApplication,
		AppstreamActions.UpdateDirectoryConfig,
		AppstreamActions.UpdateEntitlement,
		AppstreamActions.UpdateFleet,
		AppstreamActions.UpdateImagePermissions,
		AppstreamActions.UpdateStack,
		AppstreamActions.UpdateThemeForStack,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppstreamActions.DescribeAppBlockBuilderAppBlockAssociations,
		AppstreamActions.DescribeAppBlockBuilders,
		AppstreamActions.DescribeAppBlocks,
		AppstreamActions.DescribeAppLicenseUsage,
		AppstreamActions.DescribeApplicationFleetAssociations,
		AppstreamActions.DescribeApplications,
		AppstreamActions.DescribeDirectoryConfigs,
		AppstreamActions.DescribeEntitlements,
		AppstreamActions.DescribeFleets,
		AppstreamActions.DescribeImageBuilders,
		AppstreamActions.DescribeImages,
		AppstreamActions.DescribeSessions,
		AppstreamActions.DescribeSoftwareAssociations,
		AppstreamActions.DescribeStacks,
		AppstreamActions.DescribeUsageReportSubscriptions,
		AppstreamActions.DescribeUserStackAssociations,
		AppstreamActions.DescribeUsers,
		AppstreamActions.ListEntitledApplications,
		AppstreamActions.ListExportImageTasks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AppstreamActions.TagResource,
		AppstreamActions.UntagResource,
	];
}

/**
 * Properties for building a app-block ARN.
 */
export interface AppstreamAppBlockArnProps {
	/** The AppBlockName component of the ARN. */
	readonly appBlockName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a app-block ARN.
 */
export interface AppstreamAppBlockArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppBlockName component. */
	readonly appBlockName: string;
}

/**
 * Properties for building a app-block-builder ARN.
 */
export interface AppstreamAppBlockBuilderArnProps {
	/** The AppBlockBuilderName component of the ARN. */
	readonly appBlockBuilderName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a app-block-builder ARN.
 */
export interface AppstreamAppBlockBuilderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppBlockBuilderName component. */
	readonly appBlockBuilderName: string;
}

/**
 * Properties for building a application ARN.
 */
export interface AppstreamApplicationArnProps {
	/** The ApplicationName component of the ARN. */
	readonly applicationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface AppstreamApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationName component. */
	readonly applicationName: string;
}

/**
 * Properties for building a fleet ARN.
 */
export interface AppstreamFleetArnProps {
	/** The FleetName component of the ARN. */
	readonly fleetName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fleet ARN.
 */
export interface AppstreamFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetName component. */
	readonly fleetName: string;
}

/**
 * Properties for building a image ARN.
 */
export interface AppstreamImageArnProps {
	/** The ImageName component of the ARN. */
	readonly imageName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a image ARN.
 */
export interface AppstreamImageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageName component. */
	readonly imageName: string;
}

/**
 * Properties for building a image-builder ARN.
 */
export interface AppstreamImageBuilderArnProps {
	/** The ImageBuilderName component of the ARN. */
	readonly imageBuilderName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a image-builder ARN.
 */
export interface AppstreamImageBuilderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ImageBuilderName component. */
	readonly imageBuilderName: string;
}

/**
 * Properties for building a stack ARN.
 */
export interface AppstreamStackArnProps {
	/** The StackName component of the ARN. */
	readonly stackName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stack ARN.
 */
export interface AppstreamStackArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StackName component. */
	readonly stackName: string;
}

const AppBlockArnRegex =
	/^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):app-block\/(?<appBlockName>[^:/?]+)$/;
const AppBlockBuilderArnRegex =
	/^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):app-block-builder\/(?<appBlockBuilderName>[^:/?]+)$/;
const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationName>[^:/?]+)$/;
const FleetArnRegex =
	/^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):fleet\/(?<fleetName>[^:/?]+)$/;
const ImageArnRegex =
	/^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):image\/(?<imageName>[^:/?]+)$/;
const ImageBuilderArnRegex =
	/^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):image-builder\/(?<imageBuilderName>[^:/?]+)$/;
const StackArnRegex =
	/^arn:(?<partition>[^:]+):appstream:(?<region>[^:]*):(?<account>[^:]*):stack\/(?<stackName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appstream resources.
 */
export class AppstreamResources {
	/**
	 * Builds an ARN for the app-block resource.
	 */
	static appBlock(props: AppstreamAppBlockArnProps): string {
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
	static parseAppBlockArn(arn: string): AppstreamAppBlockArnComponents {
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
	static appBlockBuilder(props: AppstreamAppBlockBuilderArnProps): string {
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
	static parseAppBlockBuilderArn(
		arn: string,
	): AppstreamAppBlockBuilderArnComponents {
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
	static application(props: AppstreamApplicationArnProps): string {
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
	static parseApplicationArn(arn: string): AppstreamApplicationArnComponents {
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
	static fleet(props: AppstreamFleetArnProps): string {
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
	static parseFleetArn(arn: string): AppstreamFleetArnComponents {
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
	static image(props: AppstreamImageArnProps): string {
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
	static parseImageArn(arn: string): AppstreamImageArnComponents {
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
	static imageBuilder(props: AppstreamImageBuilderArnProps): string {
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
	static parseImageBuilderArn(arn: string): AppstreamImageBuilderArnComponents {
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
	static stack(props: AppstreamStackArnProps): string {
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
	static parseStackArn(arn: string): AppstreamStackArnComponents {
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
	static readonly AssociateAppBlockBuilderAppBlock: string[] = [];
	/** IAM actions required for the AssociateApplicationFleet API call. */
	static readonly AssociateApplicationFleet: string[] = [
		"appstream:AssociateApplicationFleet",
	];
	/** IAM actions required for the AssociateApplicationToEntitlement API call. */
	static readonly AssociateApplicationToEntitlement: string[] = [];
	/** IAM actions required for the AssociateFleet API call. */
	static readonly AssociateFleet: string[] = ["appstream:AssociateFleet"];
	/** IAM actions required for the AssociateSoftwareToImageBuilder API call. */
	static readonly AssociateSoftwareToImageBuilder: string[] = [];
	/** IAM actions required for the BatchAssociateUserStack API call. */
	static readonly BatchAssociateUserStack: string[] = [
		"appstream:BatchAssociateUserStack",
	];
	/** IAM actions required for the BatchDisassociateUserStack API call. */
	static readonly BatchDisassociateUserStack: string[] = [
		"appstream:BatchDisassociateUserStack",
	];
	/** IAM actions required for the CopyImage API call. */
	static readonly CopyImage: string[] = ["appstream:CopyImage"];
	/** IAM actions required for the CreateAppBlock API call. */
	static readonly CreateAppBlock: string[] = ["appstream:CreateAppBlock"];
	/** IAM actions required for the CreateAppBlockBuilder API call. */
	static readonly CreateAppBlockBuilder: string[] = [];
	/** IAM actions required for the CreateAppBlockBuilderStreamingURL API call. */
	static readonly CreateAppBlockBuilderStreamingURL: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = ["appstream:CreateApplication"];
	/** IAM actions required for the CreateDirectoryConfig API call. */
	static readonly CreateDirectoryConfig: string[] = [
		"appstream:CreateDirectoryConfig",
	];
	/** IAM actions required for the CreateEntitlement API call. */
	static readonly CreateEntitlement: string[] = ["appstream:CreateEntitlement"];
	/** IAM actions required for the CreateExportImageTask API call. */
	static readonly CreateExportImageTask: string[] = [];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CreateFleet: string[] = [
		"appstream:CreateFleet",
		"iam:PassRole",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateImageBuilder API call. */
	static readonly CreateImageBuilder: string[] = [
		"appstream:CreateImageBuilder",
		"iam:PassRole",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateImageBuilderStreamingURL API call. */
	static readonly CreateImageBuilderStreamingURL: string[] = [
		"appstream:CreateImageBuilderStreamingURL",
	];
	/** IAM actions required for the CreateImportedImage API call. */
	static readonly CreateImportedImage: string[] = [];
	/** IAM actions required for the CreateStack API call. */
	static readonly CreateStack: string[] = [
		"appstream:CreateStack",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateStreamingURL API call. */
	static readonly CreateStreamingURL: string[] = [
		"appstream:CreateStreamingURL",
	];
	/** IAM actions required for the CreateThemeForStack API call. */
	static readonly CreateThemeForStack: string[] = [];
	/** IAM actions required for the CreateUpdatedImage API call. */
	static readonly CreateUpdatedImage: string[] = [
		"appstream:CreateUpdatedImage",
		"appstream:TagResource",
	];
	/** IAM actions required for the CreateUsageReportSubscription API call. */
	static readonly CreateUsageReportSubscription: string[] = [
		"appstream:CreateUsageReportSubscription",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = ["appstream:CreateUser"];
	/** IAM actions required for the DeleteAppBlock API call. */
	static readonly DeleteAppBlock: string[] = [];
	/** IAM actions required for the DeleteAppBlockBuilder API call. */
	static readonly DeleteAppBlockBuilder: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = ["appstream:DeleteApplication"];
	/** IAM actions required for the DeleteDirectoryConfig API call. */
	static readonly DeleteDirectoryConfig: string[] = [
		"appstream:DeleteDirectoryConfig",
	];
	/** IAM actions required for the DeleteEntitlement API call. */
	static readonly DeleteEntitlement: string[] = ["appstream:DeleteEntitlement"];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DeleteFleet: string[] = ["appstream:DeleteFleet"];
	/** IAM actions required for the DeleteImage API call. */
	static readonly DeleteImage: string[] = ["appstream:DeleteImage"];
	/** IAM actions required for the DeleteImageBuilder API call. */
	static readonly DeleteImageBuilder: string[] = [
		"appstream:DeleteImageBuilder",
	];
	/** IAM actions required for the DeleteImagePermissions API call. */
	static readonly DeleteImagePermissions: string[] = [
		"appstream:DeleteImagePermissions",
	];
	/** IAM actions required for the DeleteStack API call. */
	static readonly DeleteStack: string[] = ["appstream:DeleteStack"];
	/** IAM actions required for the DeleteThemeForStack API call. */
	static readonly DeleteThemeForStack: string[] = [];
	/** IAM actions required for the DeleteUsageReportSubscription API call. */
	static readonly DeleteUsageReportSubscription: string[] = [
		"appstream:DeleteUsageReportSubscription",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["appstream:DeleteUser"];
	/** IAM actions required for the DescribeAppBlockBuilderAppBlockAssociations API call. */
	static readonly DescribeAppBlockBuilderAppBlockAssociations: string[] = [
		"appstream:DescribeAppBlockBuilderAppBlockAssociations",
	];
	/** IAM actions required for the DescribeAppBlockBuilders API call. */
	static readonly DescribeAppBlockBuilders: string[] = [
		"appstream:DescribeAppBlockBuilders",
	];
	/** IAM actions required for the DescribeAppBlocks API call. */
	static readonly DescribeAppBlocks: string[] = ["appstream:DescribeAppBlocks"];
	/** IAM actions required for the DescribeAppLicenseUsage API call. */
	static readonly DescribeAppLicenseUsage: string[] = [];
	/** IAM actions required for the DescribeApplicationFleetAssociations API call. */
	static readonly DescribeApplicationFleetAssociations: string[] = [
		"appstream:DescribeApplicationFleetAssociations",
	];
	/** IAM actions required for the DescribeApplications API call. */
	static readonly DescribeApplications: string[] = [
		"appstream:DescribeApplications",
	];
	/** IAM actions required for the DescribeDirectoryConfigs API call. */
	static readonly DescribeDirectoryConfigs: string[] = [
		"appstream:DescribeDirectoryConfigs",
	];
	/** IAM actions required for the DescribeEntitlements API call. */
	static readonly DescribeEntitlements: string[] = [
		"appstream:DescribeEntitlements",
	];
	/** IAM actions required for the DescribeFleets API call. */
	static readonly DescribeFleets: string[] = ["appstream:DescribeFleets"];
	/** IAM actions required for the DescribeImageBuilders API call. */
	static readonly DescribeImageBuilders: string[] = [
		"appstream:DescribeImageBuilders",
	];
	/** IAM actions required for the DescribeImagePermissions API call. */
	static readonly DescribeImagePermissions: string[] = [
		"appstream:DescribeImagePermissions",
	];
	/** IAM actions required for the DescribeImages API call. */
	static readonly DescribeImages: string[] = ["appstream:DescribeImages"];
	/** IAM actions required for the DescribeSessions API call. */
	static readonly DescribeSessions: string[] = ["appstream:DescribeSessions"];
	/** IAM actions required for the DescribeSoftwareAssociations API call. */
	static readonly DescribeSoftwareAssociations: string[] = [];
	/** IAM actions required for the DescribeStacks API call. */
	static readonly DescribeStacks: string[] = ["appstream:DescribeStacks"];
	/** IAM actions required for the DescribeThemeForStack API call. */
	static readonly DescribeThemeForStack: string[] = [
		"appstream:DescribeThemeForStack",
	];
	/** IAM actions required for the DescribeUsageReportSubscriptions API call. */
	static readonly DescribeUsageReportSubscriptions: string[] = [
		"appstream:DescribeUsageReportSubscriptions",
	];
	/** IAM actions required for the DescribeUserStackAssociations API call. */
	static readonly DescribeUserStackAssociations: string[] = [
		"appstream:DescribeUserStackAssociations",
	];
	/** IAM actions required for the DescribeUsers API call. */
	static readonly DescribeUsers: string[] = ["appstream:DescribeUsers"];
	/** IAM actions required for the DisableUser API call. */
	static readonly DisableUser: string[] = ["appstream:DisableUser"];
	/** IAM actions required for the DisassociateAppBlockBuilderAppBlock API call. */
	static readonly DisassociateAppBlockBuilderAppBlock: string[] = [];
	/** IAM actions required for the DisassociateApplicationFleet API call. */
	static readonly DisassociateApplicationFleet: string[] = [
		"appstream:DisassociateApplicationFleet",
	];
	/** IAM actions required for the DisassociateApplicationFromEntitlement API call. */
	static readonly DisassociateApplicationFromEntitlement: string[] = [
		"appstream:DisassociateApplicationFromEntitlement",
	];
	/** IAM actions required for the DisassociateFleet API call. */
	static readonly DisassociateFleet: string[] = ["appstream:DisassociateFleet"];
	/** IAM actions required for the DisassociateSoftwareFromImageBuilder API call. */
	static readonly DisassociateSoftwareFromImageBuilder: string[] = [];
	/** IAM actions required for the DrainSessionInstance API call. */
	static readonly DrainSessionInstance: string[] = [];
	/** IAM actions required for the EnableUser API call. */
	static readonly EnableUser: string[] = ["appstream:EnableUser"];
	/** IAM actions required for the ExpireSession API call. */
	static readonly ExpireSession: string[] = ["appstream:ExpireSession"];
	/** IAM actions required for the GetExportImageTask API call. */
	static readonly opGetExportImageTask: string[] = [];
	/** IAM actions required for the ListAssociatedFleets API call. */
	static readonly ListAssociatedFleets: string[] = [
		"appstream:ListAssociatedFleets",
	];
	/** IAM actions required for the ListAssociatedStacks API call. */
	static readonly ListAssociatedStacks: string[] = [
		"appstream:ListAssociatedStacks",
	];
	/** IAM actions required for the ListEntitledApplications API call. */
	static readonly ListEntitledApplications: string[] = [
		"appstream:ListEntitledApplications",
	];
	/** IAM actions required for the ListExportImageTasks API call. */
	static readonly ListExportImageTasks: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"appstream:ListTagsForResource",
	];
	/** IAM actions required for the StartAppBlockBuilder API call. */
	static readonly StartAppBlockBuilder: string[] = [];
	/** IAM actions required for the StartFleet API call. */
	static readonly StartFleet: string[] = ["appstream:StartFleet"];
	/** IAM actions required for the StartImageBuilder API call. */
	static readonly StartImageBuilder: string[] = ["appstream:StartImageBuilder"];
	/** IAM actions required for the StartSoftwareDeploymentToImageBuilder API call. */
	static readonly StartSoftwareDeploymentToImageBuilder: string[] = [];
	/** IAM actions required for the StopAppBlockBuilder API call. */
	static readonly StopAppBlockBuilder: string[] = [];
	/** IAM actions required for the StopFleet API call. */
	static readonly StopFleet: string[] = ["appstream:StopFleet"];
	/** IAM actions required for the StopImageBuilder API call. */
	static readonly StopImageBuilder: string[] = ["appstream:StopImageBuilder"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["appstream:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["appstream:UntagResource"];
	/** IAM actions required for the UpdateAppBlockBuilder API call. */
	static readonly UpdateAppBlockBuilder: string[] = [];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [];
	/** IAM actions required for the UpdateDirectoryConfig API call. */
	static readonly UpdateDirectoryConfig: string[] = [
		"appstream:UpdateDirectoryConfig",
	];
	/** IAM actions required for the UpdateEntitlement API call. */
	static readonly UpdateEntitlement: string[] = ["appstream:UpdateEntitlement"];
	/** IAM actions required for the UpdateFleet API call. */
	static readonly UpdateFleet: string[] = [
		"iam:PassRole",
		"appstream:UpdateFleet",
	];
	/** IAM actions required for the UpdateImagePermissions API call. */
	static readonly UpdateImagePermissions: string[] = [
		"appstream:UpdateImagePermissions",
	];
	/** IAM actions required for the UpdateStack API call. */
	static readonly UpdateStack: string[] = ["appstream:UpdateStack"];
	/** IAM actions required for the UpdateThemeForStack API call. */
	static readonly UpdateThemeForStack: string[] = [];
}

/**
 * Condition key constants and builders for appstream.
 */
export class AppstreamConditions {
	/** Condition keys applicable to the AssociateAppBlockBuilderAppBlock action. */
	static readonly AssociateAppBlockBuilderAppBlockConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateApplicationFleet action. */
	static readonly AssociateApplicationFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateFleet action. */
	static readonly AssociateFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the AssociateSoftwareToImageBuilder action. */
	static readonly AssociateSoftwareToImageBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the BatchAssociateUserStack action. */
	static readonly BatchAssociateUserStackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the BatchDisassociateUserStack action. */
	static readonly BatchDisassociateUserStackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CopyImage action. */
	static readonly CopyImageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAppBlock action. */
	static readonly CreateAppBlockConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppBlockBuilder action. */
	static readonly CreateAppBlockBuilderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppBlockBuilderStreamingURL action. */
	static readonly CreateAppBlockBuilderStreamingURLConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateExportImageTask action. */
	static readonly CreateExportImageTaskConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CreateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImageBuilder action. */
	static readonly CreateImageBuilderConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateImageBuilderStreamingURL action. */
	static readonly CreateImageBuilderStreamingURLConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateImportedImage action. */
	static readonly CreateImportedImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStack action. */
	static readonly CreateStackConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamingURL action. */
	static readonly CreateStreamingURLConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateUpdatedImage action. */
	static readonly CreateUpdatedImageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAppBlock action. */
	static readonly DeleteAppBlockConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAppBlockBuilder action. */
	static readonly DeleteAppBlockBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DeleteApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteFleet action. */
	static readonly DeleteFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteImage action. */
	static readonly DeleteImageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteImageBuilder action. */
	static readonly DeleteImageBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteImagePermissions action. */
	static readonly DeleteImagePermissionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteStack action. */
	static readonly DeleteStackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateAppBlockBuilderAppBlock action. */
	static readonly DisassociateAppBlockBuilderAppBlockConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateApplicationFleet action. */
	static readonly DisassociateApplicationFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateFleet action. */
	static readonly DisassociateFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateSoftwareFromImageBuilder action. */
	static readonly DisassociateSoftwareFromImageBuilderConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the StartAppBlockBuilder action. */
	static readonly StartAppBlockBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartFleet action. */
	static readonly StartFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartImageBuilder action. */
	static readonly StartImageBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSoftwareDeploymentToImageBuilder action. */
	static readonly StartSoftwareDeploymentToImageBuilderConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the StopAppBlockBuilder action. */
	static readonly StopAppBlockBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopFleet action. */
	static readonly StopFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopImageBuilder action. */
	static readonly StopImageBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the Stream action. */
	static readonly StreamConditionKeys: string[] = ["appstream:userId"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAppBlockBuilder action. */
	static readonly UpdateAppBlockBuilderConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateApplication action. */
	static readonly UpdateApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateFleet action. */
	static readonly UpdateFleetConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateImagePermissions action. */
	static readonly UpdateImagePermissionsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateStack action. */
	static readonly UpdateStackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: appstream:userId (String) */
	static readonly USER_ID = "appstream:userId";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
