// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appfabric.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appfabric service.
 */
export class AppfabricActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appfabric";

	/** [Write] appfabric:BatchGetUserAccessTasks */
	static readonly BatchGetUserAccessTasks = "appfabric:BatchGetUserAccessTasks";
	/** [Write] appfabric:ConnectAppAuthorization */
	static readonly ConnectAppAuthorization = "appfabric:ConnectAppAuthorization";
	/** [Write] appfabric:CreateAppAuthorization */
	static readonly CreateAppAuthorization = "appfabric:CreateAppAuthorization";
	/** [Write] appfabric:CreateAppBundle */
	static readonly CreateAppBundle = "appfabric:CreateAppBundle";
	/** [Write] appfabric:CreateIngestion */
	static readonly CreateIngestion = "appfabric:CreateIngestion";
	/** [Write] appfabric:CreateIngestionDestination */
	static readonly CreateIngestionDestination =
		"appfabric:CreateIngestionDestination";
	/** [Write] appfabric:DeleteAppAuthorization */
	static readonly DeleteAppAuthorization = "appfabric:DeleteAppAuthorization";
	/** [Write] appfabric:DeleteAppBundle */
	static readonly DeleteAppBundle = "appfabric:DeleteAppBundle";
	/** [Write] appfabric:DeleteIngestion */
	static readonly DeleteIngestion = "appfabric:DeleteIngestion";
	/** [Write] appfabric:DeleteIngestionDestination */
	static readonly DeleteIngestionDestination =
		"appfabric:DeleteIngestionDestination";
	/** [Read] appfabric:GetAppAuthorization */
	static readonly actionGetAppAuthorization = "appfabric:GetAppAuthorization";
	/** [Read] appfabric:GetAppBundle */
	static readonly actionGetAppBundle = "appfabric:GetAppBundle";
	/** [Read] appfabric:GetIngestion */
	static readonly actionGetIngestion = "appfabric:GetIngestion";
	/** [Read] appfabric:GetIngestionDestination */
	static readonly actionGetIngestionDestination =
		"appfabric:GetIngestionDestination";
	/** [List] appfabric:ListAppAuthorizations */
	static readonly ListAppAuthorizations = "appfabric:ListAppAuthorizations";
	/** [List] appfabric:ListAppBundles */
	static readonly ListAppBundles = "appfabric:ListAppBundles";
	/** [List] appfabric:ListIngestionDestinations */
	static readonly ListIngestionDestinations =
		"appfabric:ListIngestionDestinations";
	/** [List] appfabric:ListIngestions */
	static readonly ListIngestions = "appfabric:ListIngestions";
	/** [Read] appfabric:ListTagsForResource */
	static readonly ListTagsForResource = "appfabric:ListTagsForResource";
	/** [Write] appfabric:StartIngestion */
	static readonly StartIngestion = "appfabric:StartIngestion";
	/** [Write] appfabric:StartUserAccessTasks */
	static readonly StartUserAccessTasks = "appfabric:StartUserAccessTasks";
	/** [Write] appfabric:StopIngestion */
	static readonly StopIngestion = "appfabric:StopIngestion";
	/** [Tagging] appfabric:TagResource */
	static readonly TagResource = "appfabric:TagResource";
	/** [Tagging] appfabric:UntagResource */
	static readonly UntagResource = "appfabric:UntagResource";
	/** [Write] appfabric:UpdateAppAuthorization */
	static readonly UpdateAppAuthorization = "appfabric:UpdateAppAuthorization";
	/** [Write] appfabric:UpdateIngestionDestination */
	static readonly UpdateIngestionDestination =
		"appfabric:UpdateIngestionDestination";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppfabricActions.actionGetAppAuthorization,
		AppfabricActions.actionGetAppBundle,
		AppfabricActions.actionGetIngestion,
		AppfabricActions.actionGetIngestionDestination,
		AppfabricActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppfabricActions.BatchGetUserAccessTasks,
		AppfabricActions.ConnectAppAuthorization,
		AppfabricActions.CreateAppAuthorization,
		AppfabricActions.CreateAppBundle,
		AppfabricActions.CreateIngestion,
		AppfabricActions.CreateIngestionDestination,
		AppfabricActions.DeleteAppAuthorization,
		AppfabricActions.DeleteAppBundle,
		AppfabricActions.DeleteIngestion,
		AppfabricActions.DeleteIngestionDestination,
		AppfabricActions.StartIngestion,
		AppfabricActions.StartUserAccessTasks,
		AppfabricActions.StopIngestion,
		AppfabricActions.UpdateAppAuthorization,
		AppfabricActions.UpdateIngestionDestination,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppfabricActions.ListAppAuthorizations,
		AppfabricActions.ListAppBundles,
		AppfabricActions.ListIngestionDestinations,
		AppfabricActions.ListIngestions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AppfabricActions.TagResource,
		AppfabricActions.UntagResource,
	];
}

/**
 * Properties for building a appauthorization ARN.
 */
export interface AppfabricAppauthorizationArnProps {
	/** The AppbundleId component of the ARN. */
	readonly appbundleId: string;
	/** The AppAuthorizationIdentifier component of the ARN. */
	readonly appAuthorizationIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a appauthorization ARN.
 */
export interface AppfabricAppauthorizationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppbundleId component. */
	readonly appbundleId: string;
	/** The AppAuthorizationIdentifier component. */
	readonly appAuthorizationIdentifier: string;
}

/**
 * Properties for building a appbundle ARN.
 */
export interface AppfabricAppbundleArnProps {
	/** The AppBundleIdentifier component of the ARN. */
	readonly appBundleIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a appbundle ARN.
 */
export interface AppfabricAppbundleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppBundleIdentifier component. */
	readonly appBundleIdentifier: string;
}

/**
 * Properties for building a ingestion ARN.
 */
export interface AppfabricIngestionArnProps {
	/** The AppbundleId component of the ARN. */
	readonly appbundleId: string;
	/** The IngestionIdentifier component of the ARN. */
	readonly ingestionIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ingestion ARN.
 */
export interface AppfabricIngestionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppbundleId component. */
	readonly appbundleId: string;
	/** The IngestionIdentifier component. */
	readonly ingestionIdentifier: string;
}

/**
 * Properties for building a ingestiondestination ARN.
 */
export interface AppfabricIngestiondestinationArnProps {
	/** The AppbundleId component of the ARN. */
	readonly appbundleId: string;
	/** The IngestionIdentifier component of the ARN. */
	readonly ingestionIdentifier: string;
	/** The IngestionDestinationIdentifier component of the ARN. */
	readonly ingestionDestinationIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ingestiondestination ARN.
 */
export interface AppfabricIngestiondestinationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppbundleId component. */
	readonly appbundleId: string;
	/** The IngestionIdentifier component. */
	readonly ingestionIdentifier: string;
	/** The IngestionDestinationIdentifier component. */
	readonly ingestionDestinationIdentifier: string;
}

const AppauthorizationArnRegex =
	/^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle\/(?<appbundleId>[^:/?]+)\/appauthorization\/(?<appAuthorizationIdentifier>[^:/?]+)$/;
const AppbundleArnRegex =
	/^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle\/(?<appBundleIdentifier>[^:/?]+)$/;
const IngestionArnRegex =
	/^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle\/(?<appbundleId>[^:/?]+)\/ingestion\/(?<ingestionIdentifier>[^:/?]+)$/;
const IngestiondestinationArnRegex =
	/^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle\/(?<appbundleId>[^:/?]+)\/ingestion\/(?<ingestionIdentifier>[^:/?]+)\/ingestiondestination\/(?<ingestionDestinationIdentifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appfabric resources.
 */
export class AppfabricResources {
	/**
	 * Builds an ARN for the appauthorization resource.
	 */
	static appauthorization(props: AppfabricAppauthorizationArnProps): string {
		return `arn:${props.partition ?? "aws"}:appfabric:${props.region ?? "*"}:${props.account ?? "*"}:appbundle/${props.appbundleId}/appauthorization/${props.appAuthorizationIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the appauthorization resource.
	 */
	static isValidAppauthorizationArn(arn: string): boolean {
		return AppauthorizationArnRegex.test(arn);
	}

	/**
	 * Parses a appauthorization ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppauthorizationArn(
		arn: string,
	): AppfabricAppauthorizationArnComponents {
		const match = AppauthorizationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid appauthorization ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appbundleId: match.groups!.appbundleId,
			appAuthorizationIdentifier: match.groups!.appAuthorizationIdentifier,
		};
	}

	/**
	 * Builds an ARN for the appbundle resource.
	 */
	static appbundle(props: AppfabricAppbundleArnProps): string {
		return `arn:${props.partition ?? "aws"}:appfabric:${props.region ?? "*"}:${props.account ?? "*"}:appbundle/${props.appBundleIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the appbundle resource.
	 */
	static isValidAppbundleArn(arn: string): boolean {
		return AppbundleArnRegex.test(arn);
	}

	/**
	 * Parses a appbundle ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppbundleArn(arn: string): AppfabricAppbundleArnComponents {
		const match = AppbundleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid appbundle ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appBundleIdentifier: match.groups!.appBundleIdentifier,
		};
	}

	/**
	 * Builds an ARN for the ingestion resource.
	 */
	static ingestion(props: AppfabricIngestionArnProps): string {
		return `arn:${props.partition ?? "aws"}:appfabric:${props.region ?? "*"}:${props.account ?? "*"}:appbundle/${props.appbundleId}/ingestion/${props.ingestionIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ingestion resource.
	 */
	static isValidIngestionArn(arn: string): boolean {
		return IngestionArnRegex.test(arn);
	}

	/**
	 * Parses a ingestion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIngestionArn(arn: string): AppfabricIngestionArnComponents {
		const match = IngestionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ingestion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appbundleId: match.groups!.appbundleId,
			ingestionIdentifier: match.groups!.ingestionIdentifier,
		};
	}

	/**
	 * Builds an ARN for the ingestiondestination resource.
	 */
	static ingestiondestination(
		props: AppfabricIngestiondestinationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:appfabric:${props.region ?? "*"}:${props.account ?? "*"}:appbundle/${props.appbundleId}/ingestion/${props.ingestionIdentifier}/ingestiondestination/${props.ingestionDestinationIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ingestiondestination resource.
	 */
	static isValidIngestiondestinationArn(arn: string): boolean {
		return IngestiondestinationArnRegex.test(arn);
	}

	/**
	 * Parses a ingestiondestination ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIngestiondestinationArn(
		arn: string,
	): AppfabricIngestiondestinationArnComponents {
		const match = IngestiondestinationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ingestiondestination ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appbundleId: match.groups!.appbundleId,
			ingestionIdentifier: match.groups!.ingestionIdentifier,
			ingestionDestinationIdentifier:
				match.groups!.ingestionDestinationIdentifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for appfabric.
 */
export class AppfabricOperations {
	/** IAM actions required for the BatchGetUserAccessTasks API call. */
	static readonly BatchGetUserAccessTasks: string[] = [
		"appfabric:BatchGetUserAccessTasks",
	];
	/** IAM actions required for the ConnectAppAuthorization API call. */
	static readonly ConnectAppAuthorization: string[] = [
		"appfabric:ConnectAppAuthorization",
	];
	/** IAM actions required for the CreateAppAuthorization API call. */
	static readonly CreateAppAuthorization: string[] = [
		"appfabric:CreateAppAuthorization",
		"appfabric:TagResource",
	];
	/** IAM actions required for the CreateAppBundle API call. */
	static readonly CreateAppBundle: string[] = [
		"appfabric:CreateAppBundle",
		"appfabric:TagResource",
	];
	/** IAM actions required for the CreateIngestion API call. */
	static readonly CreateIngestion: string[] = [
		"appfabric:CreateIngestion",
		"appfabric:TagResource",
	];
	/** IAM actions required for the CreateIngestionDestination API call. */
	static readonly CreateIngestionDestination: string[] = [
		"appfabric:CreateIngestionDestination",
		"appfabric:TagResource",
	];
	/** IAM actions required for the DeleteAppAuthorization API call. */
	static readonly DeleteAppAuthorization: string[] = [
		"appfabric:DeleteAppAuthorization",
	];
	/** IAM actions required for the DeleteAppBundle API call. */
	static readonly DeleteAppBundle: string[] = ["appfabric:DeleteAppBundle"];
	/** IAM actions required for the DeleteIngestion API call. */
	static readonly DeleteIngestion: string[] = ["appfabric:DeleteIngestion"];
	/** IAM actions required for the DeleteIngestionDestination API call. */
	static readonly DeleteIngestionDestination: string[] = [
		"appfabric:DeleteIngestionDestination",
	];
	/** IAM actions required for the GetAppAuthorization API call. */
	static readonly opGetAppAuthorization: string[] = [
		"appfabric:GetAppAuthorization",
	];
	/** IAM actions required for the GetAppBundle API call. */
	static readonly opGetAppBundle: string[] = ["appfabric:GetAppBundle"];
	/** IAM actions required for the GetIngestion API call. */
	static readonly opGetIngestion: string[] = ["appfabric:GetIngestion"];
	/** IAM actions required for the GetIngestionDestination API call. */
	static readonly opGetIngestionDestination: string[] = [
		"appfabric:GetIngestionDestination",
	];
	/** IAM actions required for the ListAppAuthorizations API call. */
	static readonly ListAppAuthorizations: string[] = [
		"appfabric:ListAppAuthorizations",
	];
	/** IAM actions required for the ListAppBundles API call. */
	static readonly ListAppBundles: string[] = ["appfabric:ListAppBundles"];
	/** IAM actions required for the ListIngestionDestinations API call. */
	static readonly ListIngestionDestinations: string[] = [
		"appfabric:ListIngestionDestinations",
	];
	/** IAM actions required for the ListIngestions API call. */
	static readonly ListIngestions: string[] = ["appfabric:ListIngestions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"appfabric:ListTagsForResource",
	];
	/** IAM actions required for the StartIngestion API call. */
	static readonly StartIngestion: string[] = ["appfabric:StartIngestion"];
	/** IAM actions required for the StartUserAccessTasks API call. */
	static readonly StartUserAccessTasks: string[] = [
		"appfabric:StartUserAccessTasks",
	];
	/** IAM actions required for the StopIngestion API call. */
	static readonly StopIngestion: string[] = ["appfabric:StopIngestion"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["appfabric:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["appfabric:UntagResource"];
	/** IAM actions required for the UpdateAppAuthorization API call. */
	static readonly UpdateAppAuthorization: string[] = [
		"appfabric:UpdateAppAuthorization",
	];
	/** IAM actions required for the UpdateIngestionDestination API call. */
	static readonly UpdateIngestionDestination: string[] = [
		"appfabric:UpdateIngestionDestination",
	];
}

/**
 * Condition key constants and builders for appfabric.
 */
export class AppfabricConditions {
	/** Condition keys applicable to the CreateAppAuthorization action. */
	static readonly CreateAppAuthorizationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppBundle action. */
	static readonly CreateAppBundleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIngestion action. */
	static readonly CreateIngestionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIngestionDestination action. */
	static readonly CreateIngestionDestinationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAppAuthorization action. */
	static readonly actionGetAppAuthorizationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAppBundle action. */
	static readonly actionGetAppBundleConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIngestion action. */
	static readonly actionGetIngestionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIngestionDestination action. */
	static readonly actionGetIngestionDestinationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAppAuthorization action. */
	static readonly UpdateAppAuthorizationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateIngestionDestination action. */
	static readonly UpdateIngestionDestinationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
