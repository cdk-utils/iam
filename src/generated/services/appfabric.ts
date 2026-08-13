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
	static readonly BATCH_GET_USER_ACCESS_TASKS =
		"appfabric:BatchGetUserAccessTasks";
	/** [Write] appfabric:ConnectAppAuthorization */
	static readonly CONNECT_APP_AUTHORIZATION =
		"appfabric:ConnectAppAuthorization";
	/** [Write] appfabric:CreateAppAuthorization */
	static readonly CREATE_APP_AUTHORIZATION = "appfabric:CreateAppAuthorization";
	/** [Write] appfabric:CreateAppBundle */
	static readonly CREATE_APP_BUNDLE = "appfabric:CreateAppBundle";
	/** [Write] appfabric:CreateIngestion */
	static readonly CREATE_INGESTION = "appfabric:CreateIngestion";
	/** [Write] appfabric:CreateIngestionDestination */
	static readonly CREATE_INGESTION_DESTINATION =
		"appfabric:CreateIngestionDestination";
	/** [Write] appfabric:DeleteAppAuthorization */
	static readonly DELETE_APP_AUTHORIZATION = "appfabric:DeleteAppAuthorization";
	/** [Write] appfabric:DeleteAppBundle */
	static readonly DELETE_APP_BUNDLE = "appfabric:DeleteAppBundle";
	/** [Write] appfabric:DeleteIngestion */
	static readonly DELETE_INGESTION = "appfabric:DeleteIngestion";
	/** [Write] appfabric:DeleteIngestionDestination */
	static readonly DELETE_INGESTION_DESTINATION =
		"appfabric:DeleteIngestionDestination";
	/** [Read] appfabric:GetAppAuthorization */
	static readonly GET_APP_AUTHORIZATION = "appfabric:GetAppAuthorization";
	/** [Read] appfabric:GetAppBundle */
	static readonly GET_APP_BUNDLE = "appfabric:GetAppBundle";
	/** [Read] appfabric:GetIngestion */
	static readonly GET_INGESTION = "appfabric:GetIngestion";
	/** [Read] appfabric:GetIngestionDestination */
	static readonly GET_INGESTION_DESTINATION =
		"appfabric:GetIngestionDestination";
	/** [List] appfabric:ListAppAuthorizations */
	static readonly LIST_APP_AUTHORIZATIONS = "appfabric:ListAppAuthorizations";
	/** [List] appfabric:ListAppBundles */
	static readonly LIST_APP_BUNDLES = "appfabric:ListAppBundles";
	/** [List] appfabric:ListIngestionDestinations */
	static readonly LIST_INGESTION_DESTINATIONS =
		"appfabric:ListIngestionDestinations";
	/** [List] appfabric:ListIngestions */
	static readonly LIST_INGESTIONS = "appfabric:ListIngestions";
	/** [Read] appfabric:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "appfabric:ListTagsForResource";
	/** [Write] appfabric:StartIngestion */
	static readonly START_INGESTION = "appfabric:StartIngestion";
	/** [Write] appfabric:StartUserAccessTasks */
	static readonly START_USER_ACCESS_TASKS = "appfabric:StartUserAccessTasks";
	/** [Write] appfabric:StopIngestion */
	static readonly STOP_INGESTION = "appfabric:StopIngestion";
	/** [Tagging] appfabric:TagResource */
	static readonly TAG_RESOURCE = "appfabric:TagResource";
	/** [Tagging] appfabric:UntagResource */
	static readonly UNTAG_RESOURCE = "appfabric:UntagResource";
	/** [Write] appfabric:UpdateAppAuthorization */
	static readonly UPDATE_APP_AUTHORIZATION = "appfabric:UpdateAppAuthorization";
	/** [Write] appfabric:UpdateIngestionDestination */
	static readonly UPDATE_INGESTION_DESTINATION =
		"appfabric:UpdateIngestionDestination";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppfabricActions.GET_APP_AUTHORIZATION,
		AppfabricActions.GET_APP_BUNDLE,
		AppfabricActions.GET_INGESTION,
		AppfabricActions.GET_INGESTION_DESTINATION,
		AppfabricActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppfabricActions.BATCH_GET_USER_ACCESS_TASKS,
		AppfabricActions.CONNECT_APP_AUTHORIZATION,
		AppfabricActions.CREATE_APP_AUTHORIZATION,
		AppfabricActions.CREATE_APP_BUNDLE,
		AppfabricActions.CREATE_INGESTION,
		AppfabricActions.CREATE_INGESTION_DESTINATION,
		AppfabricActions.DELETE_APP_AUTHORIZATION,
		AppfabricActions.DELETE_APP_BUNDLE,
		AppfabricActions.DELETE_INGESTION,
		AppfabricActions.DELETE_INGESTION_DESTINATION,
		AppfabricActions.START_INGESTION,
		AppfabricActions.START_USER_ACCESS_TASKS,
		AppfabricActions.STOP_INGESTION,
		AppfabricActions.UPDATE_APP_AUTHORIZATION,
		AppfabricActions.UPDATE_INGESTION_DESTINATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppfabricActions.LIST_APP_AUTHORIZATIONS,
		AppfabricActions.LIST_APP_BUNDLES,
		AppfabricActions.LIST_INGESTION_DESTINATIONS,
		AppfabricActions.LIST_INGESTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AppfabricActions.TAG_RESOURCE,
		AppfabricActions.UNTAG_RESOURCE,
	];
}

const AppauthorizationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle/(?<appbundleId>[^:/?]+)/appauthorization/(?<appAuthorizationIdentifier>[^:/?]+)$",
);
const AppbundleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle/(?<appBundleIdentifier>[^:/?]+)$",
);
const IngestionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle/(?<appbundleId>[^:/?]+)/ingestion/(?<ingestionIdentifier>[^:/?]+)$",
);
const IngestiondestinationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appfabric:(?<region>[^:]*):(?<account>[^:]*):appbundle/(?<appbundleId>[^:/?]+)/ingestion/(?<ingestionIdentifier>[^:/?]+)/ingestiondestination/(?<ingestionDestinationIdentifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appfabric resources.
 */
export class AppfabricResources {
	/**
	 * Builds an ARN for the appauthorization resource.
	 */
	static appauthorization(props: {
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
	}): string {
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
	static parseAppauthorizationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appbundleId: string;
		appAuthorizationIdentifier: string;
	} {
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
	static appbundle(props: {
		/** The AppBundleIdentifier component of the ARN. */
		readonly appBundleIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAppbundleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appBundleIdentifier: string;
	} {
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
	static ingestion(props: {
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
	}): string {
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
	static parseIngestionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appbundleId: string;
		ingestionIdentifier: string;
	} {
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
	static ingestiondestination(props: {
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
	}): string {
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
	static parseIngestiondestinationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appbundleId: string;
		ingestionIdentifier: string;
		ingestionDestinationIdentifier: string;
	} {
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
	static readonly BATCH_GET_USER_ACCESS_TASKS: string[] = [
		"appfabric:BatchGetUserAccessTasks",
	];
	/** IAM actions required for the ConnectAppAuthorization API call. */
	static readonly CONNECT_APP_AUTHORIZATION: string[] = [
		"appfabric:ConnectAppAuthorization",
	];
	/** IAM actions required for the CreateAppAuthorization API call. */
	static readonly CREATE_APP_AUTHORIZATION: string[] = [
		"appfabric:CreateAppAuthorization",
		"appfabric:TagResource",
	];
	/** IAM actions required for the CreateAppBundle API call. */
	static readonly CREATE_APP_BUNDLE: string[] = [
		"appfabric:CreateAppBundle",
		"appfabric:TagResource",
	];
	/** IAM actions required for the CreateIngestion API call. */
	static readonly CREATE_INGESTION: string[] = [
		"appfabric:CreateIngestion",
		"appfabric:TagResource",
	];
	/** IAM actions required for the CreateIngestionDestination API call. */
	static readonly CREATE_INGESTION_DESTINATION: string[] = [
		"appfabric:CreateIngestionDestination",
		"appfabric:TagResource",
	];
	/** IAM actions required for the DeleteAppAuthorization API call. */
	static readonly DELETE_APP_AUTHORIZATION: string[] = [
		"appfabric:DeleteAppAuthorization",
	];
	/** IAM actions required for the DeleteAppBundle API call. */
	static readonly DELETE_APP_BUNDLE: string[] = ["appfabric:DeleteAppBundle"];
	/** IAM actions required for the DeleteIngestion API call. */
	static readonly DELETE_INGESTION: string[] = ["appfabric:DeleteIngestion"];
	/** IAM actions required for the DeleteIngestionDestination API call. */
	static readonly DELETE_INGESTION_DESTINATION: string[] = [
		"appfabric:DeleteIngestionDestination",
	];
	/** IAM actions required for the GetAppAuthorization API call. */
	static readonly GET_APP_AUTHORIZATION: string[] = [
		"appfabric:GetAppAuthorization",
	];
	/** IAM actions required for the GetAppBundle API call. */
	static readonly GET_APP_BUNDLE: string[] = ["appfabric:GetAppBundle"];
	/** IAM actions required for the GetIngestion API call. */
	static readonly GET_INGESTION: string[] = ["appfabric:GetIngestion"];
	/** IAM actions required for the GetIngestionDestination API call. */
	static readonly GET_INGESTION_DESTINATION: string[] = [
		"appfabric:GetIngestionDestination",
	];
	/** IAM actions required for the ListAppAuthorizations API call. */
	static readonly LIST_APP_AUTHORIZATIONS: string[] = [
		"appfabric:ListAppAuthorizations",
	];
	/** IAM actions required for the ListAppBundles API call. */
	static readonly LIST_APP_BUNDLES: string[] = ["appfabric:ListAppBundles"];
	/** IAM actions required for the ListIngestionDestinations API call. */
	static readonly LIST_INGESTION_DESTINATIONS: string[] = [
		"appfabric:ListIngestionDestinations",
	];
	/** IAM actions required for the ListIngestions API call. */
	static readonly LIST_INGESTIONS: string[] = ["appfabric:ListIngestions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"appfabric:ListTagsForResource",
	];
	/** IAM actions required for the StartIngestion API call. */
	static readonly START_INGESTION: string[] = ["appfabric:StartIngestion"];
	/** IAM actions required for the StartUserAccessTasks API call. */
	static readonly START_USER_ACCESS_TASKS: string[] = [
		"appfabric:StartUserAccessTasks",
	];
	/** IAM actions required for the StopIngestion API call. */
	static readonly STOP_INGESTION: string[] = ["appfabric:StopIngestion"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["appfabric:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["appfabric:UntagResource"];
	/** IAM actions required for the UpdateAppAuthorization API call. */
	static readonly UPDATE_APP_AUTHORIZATION: string[] = [
		"appfabric:UpdateAppAuthorization",
	];
	/** IAM actions required for the UpdateIngestionDestination API call. */
	static readonly UPDATE_INGESTION_DESTINATION: string[] = [
		"appfabric:UpdateIngestionDestination",
	];
}

/**
 * Condition key constants and builders for appfabric.
 */
export class AppfabricConditions {
	/** Condition keys applicable to the CreateAppAuthorization action. */
	static readonly CREATE_APP_AUTHORIZATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAppBundle action. */
	static readonly CREATE_APP_BUNDLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIngestion action. */
	static readonly CREATE_INGESTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIngestionDestination action. */
	static readonly CREATE_INGESTION_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetAppAuthorization action. */
	static readonly GET_APP_AUTHORIZATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAppBundle action. */
	static readonly GET_APP_BUNDLE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIngestion action. */
	static readonly GET_INGESTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIngestionDestination action. */
	static readonly GET_INGESTION_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateAppAuthorization action. */
	static readonly UPDATE_APP_AUTHORIZATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateIngestionDestination action. */
	static readonly UPDATE_INGESTION_DESTINATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
