// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/outposts.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the outposts service.
 */
export class OutpostsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "outposts";

	/** [Write] outposts:CancelCapacityTask */
	static readonly CANCEL_CAPACITY_TASK = "outposts:CancelCapacityTask";
	/** [Write] outposts:CancelOrder */
	static readonly CANCEL_ORDER = "outposts:CancelOrder";
	/** [Write] outposts:CreateOrder */
	static readonly CREATE_ORDER = "outposts:CreateOrder";
	/** [Write] outposts:CreateOutpost */
	static readonly CREATE_OUTPOST = "outposts:CreateOutpost";
	/** [Write] outposts:CreatePrivateConnectivityConfig */
	static readonly CREATE_PRIVATE_CONNECTIVITY_CONFIG =
		"outposts:CreatePrivateConnectivityConfig";
	/** [Write] outposts:CreateQuote */
	static readonly CREATE_QUOTE = "outposts:CreateQuote";
	/** [Write] outposts:CreateRenewal */
	static readonly CREATE_RENEWAL = "outposts:CreateRenewal";
	/** [Write] outposts:CreateSite */
	static readonly CREATE_SITE = "outposts:CreateSite";
	/** [Write] outposts:DeleteOutpost */
	static readonly DELETE_OUTPOST = "outposts:DeleteOutpost";
	/** [Write] outposts:DeleteQuote */
	static readonly DELETE_QUOTE = "outposts:DeleteQuote";
	/** [Write] outposts:DeleteSite */
	static readonly DELETE_SITE = "outposts:DeleteSite";
	/** [Read] outposts:GetCapacityTask */
	static readonly GET_CAPACITY_TASK = "outposts:GetCapacityTask";
	/** [Read] outposts:GetCatalogItem */
	static readonly GET_CATALOG_ITEM = "outposts:GetCatalogItem";
	/** [Read] outposts:GetConnection */
	static readonly GET_CONNECTION = "outposts:GetConnection";
	/** [Read] outposts:GetOrder */
	static readonly GET_ORDER = "outposts:GetOrder";
	/** [Read] outposts:GetOutpost */
	static readonly GET_OUTPOST = "outposts:GetOutpost";
	/** [Read] outposts:GetOutpostBillingInformation */
	static readonly GET_OUTPOST_BILLING_INFORMATION =
		"outposts:GetOutpostBillingInformation";
	/** [Read] outposts:GetOutpostInstanceTypes */
	static readonly GET_OUTPOST_INSTANCE_TYPES =
		"outposts:GetOutpostInstanceTypes";
	/** [Read] outposts:GetOutpostSupportedInstanceTypes */
	static readonly GET_OUTPOST_SUPPORTED_INSTANCE_TYPES =
		"outposts:GetOutpostSupportedInstanceTypes";
	/** [Read] outposts:GetPrivateConnectivityConfig */
	static readonly GET_PRIVATE_CONNECTIVITY_CONFIG =
		"outposts:GetPrivateConnectivityConfig";
	/** [Read] outposts:GetQuote */
	static readonly GET_QUOTE = "outposts:GetQuote";
	/** [Read] outposts:GetRenewalPricing */
	static readonly GET_RENEWAL_PRICING = "outposts:GetRenewalPricing";
	/** [Read] outposts:GetSite */
	static readonly GET_SITE = "outposts:GetSite";
	/** [Read] outposts:GetSiteAddress */
	static readonly GET_SITE_ADDRESS = "outposts:GetSiteAddress";
	/** [List] outposts:ListAssetInstances */
	static readonly LIST_ASSET_INSTANCES = "outposts:ListAssetInstances";
	/** [List] outposts:ListAssets */
	static readonly LIST_ASSETS = "outposts:ListAssets";
	/** [List] outposts:ListBlockingInstancesForCapacityTask */
	static readonly LIST_BLOCKING_INSTANCES_FOR_CAPACITY_TASK =
		"outposts:ListBlockingInstancesForCapacityTask";
	/** [List] outposts:ListCapacityTasks */
	static readonly LIST_CAPACITY_TASKS = "outposts:ListCapacityTasks";
	/** [List] outposts:ListCatalogItems */
	static readonly LIST_CATALOG_ITEMS = "outposts:ListCatalogItems";
	/** [List] outposts:ListOrderableInstanceTypes */
	static readonly LIST_ORDERABLE_INSTANCE_TYPES =
		"outposts:ListOrderableInstanceTypes";
	/** [List] outposts:ListOrders */
	static readonly LIST_ORDERS = "outposts:ListOrders";
	/** [List] outposts:ListOutposts */
	static readonly LIST_OUTPOSTS = "outposts:ListOutposts";
	/** [List] outposts:ListQuotes */
	static readonly LIST_QUOTES = "outposts:ListQuotes";
	/** [List] outposts:ListSites */
	static readonly LIST_SITES = "outposts:ListSites";
	/** [Read] outposts:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "outposts:ListTagsForResource";
	/** [Write] outposts:StartCapacityTask */
	static readonly START_CAPACITY_TASK = "outposts:StartCapacityTask";
	/** [Write] outposts:StartConnection */
	static readonly START_CONNECTION = "outposts:StartConnection";
	/** [Tagging] outposts:TagResource */
	static readonly TAG_RESOURCE = "outposts:TagResource";
	/** [Tagging] outposts:UntagResource */
	static readonly UNTAG_RESOURCE = "outposts:UntagResource";
	/** [Write] outposts:UpdateOutpost */
	static readonly UPDATE_OUTPOST = "outposts:UpdateOutpost";
	/** [Write] outposts:UpdateQuote */
	static readonly UPDATE_QUOTE = "outposts:UpdateQuote";
	/** [Write] outposts:UpdateSite */
	static readonly UPDATE_SITE = "outposts:UpdateSite";
	/** [Write] outposts:UpdateSiteAddress */
	static readonly UPDATE_SITE_ADDRESS = "outposts:UpdateSiteAddress";
	/** [Write] outposts:UpdateSiteRackPhysicalProperties */
	static readonly UPDATE_SITE_RACK_PHYSICAL_PROPERTIES =
		"outposts:UpdateSiteRackPhysicalProperties";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		OutpostsActions.GET_CAPACITY_TASK,
		OutpostsActions.GET_CATALOG_ITEM,
		OutpostsActions.GET_CONNECTION,
		OutpostsActions.GET_ORDER,
		OutpostsActions.GET_OUTPOST,
		OutpostsActions.GET_OUTPOST_BILLING_INFORMATION,
		OutpostsActions.GET_OUTPOST_INSTANCE_TYPES,
		OutpostsActions.GET_OUTPOST_SUPPORTED_INSTANCE_TYPES,
		OutpostsActions.GET_PRIVATE_CONNECTIVITY_CONFIG,
		OutpostsActions.GET_QUOTE,
		OutpostsActions.GET_RENEWAL_PRICING,
		OutpostsActions.GET_SITE,
		OutpostsActions.GET_SITE_ADDRESS,
		OutpostsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		OutpostsActions.CANCEL_CAPACITY_TASK,
		OutpostsActions.CANCEL_ORDER,
		OutpostsActions.CREATE_ORDER,
		OutpostsActions.CREATE_OUTPOST,
		OutpostsActions.CREATE_PRIVATE_CONNECTIVITY_CONFIG,
		OutpostsActions.CREATE_QUOTE,
		OutpostsActions.CREATE_RENEWAL,
		OutpostsActions.CREATE_SITE,
		OutpostsActions.DELETE_OUTPOST,
		OutpostsActions.DELETE_QUOTE,
		OutpostsActions.DELETE_SITE,
		OutpostsActions.START_CAPACITY_TASK,
		OutpostsActions.START_CONNECTION,
		OutpostsActions.UPDATE_OUTPOST,
		OutpostsActions.UPDATE_QUOTE,
		OutpostsActions.UPDATE_SITE,
		OutpostsActions.UPDATE_SITE_ADDRESS,
		OutpostsActions.UPDATE_SITE_RACK_PHYSICAL_PROPERTIES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		OutpostsActions.LIST_ASSET_INSTANCES,
		OutpostsActions.LIST_ASSETS,
		OutpostsActions.LIST_BLOCKING_INSTANCES_FOR_CAPACITY_TASK,
		OutpostsActions.LIST_CAPACITY_TASKS,
		OutpostsActions.LIST_CATALOG_ITEMS,
		OutpostsActions.LIST_ORDERABLE_INSTANCE_TYPES,
		OutpostsActions.LIST_ORDERS,
		OutpostsActions.LIST_OUTPOSTS,
		OutpostsActions.LIST_QUOTES,
		OutpostsActions.LIST_SITES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		OutpostsActions.TAG_RESOURCE,
		OutpostsActions.UNTAG_RESOURCE,
	];
}

const OutpostArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):outposts:(?<region>[^:]*):(?<account>[^:]*):outpost/(?<outpostId>[^:/?]+)$",
);
const SiteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):outposts:(?<region>[^:]*):(?<account>[^:]*):site/(?<siteId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for outposts resources.
 */
export class OutpostsResources {
	/**
	 * Builds an ARN for the outpost resource.
	 */
	static outpost(props: {
		/** The OutpostId component of the ARN. */
		readonly outpostId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:outposts:${props.region ?? "*"}:${props.account ?? "*"}:outpost/${props.outpostId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the outpost resource.
	 */
	static isValidOutpostArn(arn: string): boolean {
		return OutpostArnRegex.test(arn);
	}

	/**
	 * Parses a outpost ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOutpostArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		outpostId: string;
	} {
		const match = OutpostArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid outpost ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			outpostId: match.groups!.outpostId,
		};
	}

	/**
	 * Builds an ARN for the site resource.
	 */
	static site(props: {
		/** The SiteId component of the ARN. */
		readonly siteId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:outposts:${props.region ?? "*"}:${props.account ?? "*"}:site/${props.siteId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the site resource.
	 */
	static isValidSiteArn(arn: string): boolean {
		return SiteArnRegex.test(arn);
	}

	/**
	 * Parses a site ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSiteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		siteId: string;
	} {
		const match = SiteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid site ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			siteId: match.groups!.siteId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for outposts.
 */
export class OutpostsOperations {
	/** IAM actions required for the CancelCapacityTask API call. */
	static readonly CANCEL_CAPACITY_TASK: string[] = [
		"outposts:CancelCapacityTask",
	];
	/** IAM actions required for the CancelOrder API call. */
	static readonly CANCEL_ORDER: string[] = ["outposts:CancelOrder"];
	/** IAM actions required for the CreateOrder API call. */
	static readonly CREATE_ORDER: string[] = ["outposts:CreateOrder"];
	/** IAM actions required for the CreateOutpost API call. */
	static readonly CREATE_OUTPOST: string[] = [
		"outposts:CreateOutpost",
		"outposts:TagResource",
	];
	/** IAM actions required for the CreateQuote API call. */
	static readonly CREATE_QUOTE: string[] = ["outposts:CreateQuote"];
	/** IAM actions required for the CreateRenewal API call. */
	static readonly CREATE_RENEWAL: string[] = ["outposts:CreateRenewal"];
	/** IAM actions required for the CreateSite API call. */
	static readonly CREATE_SITE: string[] = [
		"outposts:CreateSite",
		"outposts:TagResource",
	];
	/** IAM actions required for the DeleteOutpost API call. */
	static readonly DELETE_OUTPOST: string[] = ["outposts:DeleteOutpost"];
	/** IAM actions required for the DeleteQuote API call. */
	static readonly DELETE_QUOTE: string[] = ["outposts:DeleteQuote"];
	/** IAM actions required for the DeleteSite API call. */
	static readonly DELETE_SITE: string[] = ["outposts:DeleteSite"];
	/** IAM actions required for the GetCapacityTask API call. */
	static readonly GET_CAPACITY_TASK: string[] = ["outposts:GetCapacityTask"];
	/** IAM actions required for the GetCatalogItem API call. */
	static readonly GET_CATALOG_ITEM: string[] = ["outposts:GetCatalogItem"];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = ["outposts:GetConnection"];
	/** IAM actions required for the GetOrder API call. */
	static readonly GET_ORDER: string[] = ["outposts:GetOrder"];
	/** IAM actions required for the GetOutpost API call. */
	static readonly GET_OUTPOST: string[] = ["outposts:GetOutpost"];
	/** IAM actions required for the GetOutpostBillingInformation API call. */
	static readonly GET_OUTPOST_BILLING_INFORMATION: string[] = [
		"outposts:GetOutpostBillingInformation",
	];
	/** IAM actions required for the GetOutpostInstanceTypes API call. */
	static readonly GET_OUTPOST_INSTANCE_TYPES: string[] = [
		"outposts:GetOutpostInstanceTypes",
	];
	/** IAM actions required for the GetOutpostSupportedInstanceTypes API call. */
	static readonly GET_OUTPOST_SUPPORTED_INSTANCE_TYPES: string[] = [
		"outposts:GetOutpostSupportedInstanceTypes",
	];
	/** IAM actions required for the GetQuote API call. */
	static readonly GET_QUOTE: string[] = ["outposts:GetQuote"];
	/** IAM actions required for the GetRenewalPricing API call. */
	static readonly GET_RENEWAL_PRICING: string[] = [
		"outposts:GetRenewalPricing",
	];
	/** IAM actions required for the GetSite API call. */
	static readonly GET_SITE: string[] = ["outposts:GetSite"];
	/** IAM actions required for the GetSiteAddress API call. */
	static readonly GET_SITE_ADDRESS: string[] = ["outposts:GetSiteAddress"];
	/** IAM actions required for the ListAssetInstances API call. */
	static readonly LIST_ASSET_INSTANCES: string[] = [
		"outposts:ListAssetInstances",
	];
	/** IAM actions required for the ListAssets API call. */
	static readonly LIST_ASSETS: string[] = ["outposts:ListAssets"];
	/** IAM actions required for the ListBlockingInstancesForCapacityTask API call. */
	static readonly LIST_BLOCKING_INSTANCES_FOR_CAPACITY_TASK: string[] = [
		"outposts:ListBlockingInstancesForCapacityTask",
	];
	/** IAM actions required for the ListCapacityTasks API call. */
	static readonly LIST_CAPACITY_TASKS: string[] = [
		"outposts:ListCapacityTasks",
	];
	/** IAM actions required for the ListCatalogItems API call. */
	static readonly LIST_CATALOG_ITEMS: string[] = ["outposts:ListCatalogItems"];
	/** IAM actions required for the ListOrderableInstanceTypes API call. */
	static readonly LIST_ORDERABLE_INSTANCE_TYPES: string[] = [
		"outposts:ListOrderableInstanceTypes",
	];
	/** IAM actions required for the ListOrders API call. */
	static readonly LIST_ORDERS: string[] = ["outposts:ListOrders"];
	/** IAM actions required for the ListOutposts API call. */
	static readonly LIST_OUTPOSTS: string[] = ["outposts:ListOutposts"];
	/** IAM actions required for the ListQuotes API call. */
	static readonly LIST_QUOTES: string[] = ["outposts:ListQuotes"];
	/** IAM actions required for the ListSites API call. */
	static readonly LIST_SITES: string[] = ["outposts:ListSites"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"outposts:ListTagsForResource",
	];
	/** IAM actions required for the StartCapacityTask API call. */
	static readonly START_CAPACITY_TASK: string[] = [
		"outposts:StartCapacityTask",
	];
	/** IAM actions required for the StartConnection API call. */
	static readonly START_CONNECTION: string[] = ["outposts:StartConnection"];
	/** IAM actions required for the StartOutpostDecommission API call. */
	static readonly START_OUTPOST_DECOMMISSION: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["outposts:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["outposts:UntagResource"];
	/** IAM actions required for the UpdateOutpost API call. */
	static readonly UPDATE_OUTPOST: string[] = ["outposts:UpdateOutpost"];
	/** IAM actions required for the UpdateQuote API call. */
	static readonly UPDATE_QUOTE: string[] = ["outposts:UpdateQuote"];
	/** IAM actions required for the UpdateSite API call. */
	static readonly UPDATE_SITE: string[] = ["outposts:UpdateSite"];
	/** IAM actions required for the UpdateSiteAddress API call. */
	static readonly UPDATE_SITE_ADDRESS: string[] = [
		"outposts:UpdateSiteAddress",
	];
	/** IAM actions required for the UpdateSiteRackPhysicalProperties API call. */
	static readonly UPDATE_SITE_RACK_PHYSICAL_PROPERTIES: string[] = [
		"outposts:UpdateSiteRackPhysicalProperties",
	];
}

/**
 * Condition key constants and builders for outposts.
 */
export class OutpostsConditions {
	/** Condition keys applicable to the CreateOutpost action. */
	static readonly CREATE_OUTPOST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSite action. */
	static readonly CREATE_SITE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
