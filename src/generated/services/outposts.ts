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
	static readonly CancelCapacityTask = "outposts:CancelCapacityTask";
	/** [Write] outposts:CancelOrder */
	static readonly CancelOrder = "outposts:CancelOrder";
	/** [Write] outposts:CreateOrder */
	static readonly CreateOrder = "outposts:CreateOrder";
	/** [Write] outposts:CreateOutpost */
	static readonly CreateOutpost = "outposts:CreateOutpost";
	/** [Write] outposts:CreatePrivateConnectivityConfig */
	static readonly CreatePrivateConnectivityConfig =
		"outposts:CreatePrivateConnectivityConfig";
	/** [Write] outposts:CreateQuote */
	static readonly CreateQuote = "outposts:CreateQuote";
	/** [Write] outposts:CreateRenewal */
	static readonly CreateRenewal = "outposts:CreateRenewal";
	/** [Write] outposts:CreateSite */
	static readonly CreateSite = "outposts:CreateSite";
	/** [Write] outposts:DeleteOutpost */
	static readonly DeleteOutpost = "outposts:DeleteOutpost";
	/** [Write] outposts:DeleteQuote */
	static readonly DeleteQuote = "outposts:DeleteQuote";
	/** [Write] outposts:DeleteSite */
	static readonly DeleteSite = "outposts:DeleteSite";
	/** [Read] outposts:GetCapacityTask */
	static readonly actionGetCapacityTask = "outposts:GetCapacityTask";
	/** [Read] outposts:GetCatalogItem */
	static readonly actionGetCatalogItem = "outposts:GetCatalogItem";
	/** [Read] outposts:GetConnection */
	static readonly actionGetConnection = "outposts:GetConnection";
	/** [Read] outposts:GetOrder */
	static readonly actionGetOrder = "outposts:GetOrder";
	/** [Read] outposts:GetOutpost */
	static readonly actionGetOutpost = "outposts:GetOutpost";
	/** [Read] outposts:GetOutpostBillingInformation */
	static readonly actionGetOutpostBillingInformation =
		"outposts:GetOutpostBillingInformation";
	/** [Read] outposts:GetOutpostInstanceTypes */
	static readonly actionGetOutpostInstanceTypes =
		"outposts:GetOutpostInstanceTypes";
	/** [Read] outposts:GetOutpostSupportedInstanceTypes */
	static readonly actionGetOutpostSupportedInstanceTypes =
		"outposts:GetOutpostSupportedInstanceTypes";
	/** [Read] outposts:GetPrivateConnectivityConfig */
	static readonly actionGetPrivateConnectivityConfig =
		"outposts:GetPrivateConnectivityConfig";
	/** [Read] outposts:GetQuote */
	static readonly actionGetQuote = "outposts:GetQuote";
	/** [Read] outposts:GetRenewalPricing */
	static readonly actionGetRenewalPricing = "outposts:GetRenewalPricing";
	/** [Read] outposts:GetSite */
	static readonly actionGetSite = "outposts:GetSite";
	/** [Read] outposts:GetSiteAddress */
	static readonly actionGetSiteAddress = "outposts:GetSiteAddress";
	/** [List] outposts:ListAssetInstances */
	static readonly ListAssetInstances = "outposts:ListAssetInstances";
	/** [List] outposts:ListAssets */
	static readonly ListAssets = "outposts:ListAssets";
	/** [List] outposts:ListBlockingInstancesForCapacityTask */
	static readonly ListBlockingInstancesForCapacityTask =
		"outposts:ListBlockingInstancesForCapacityTask";
	/** [List] outposts:ListCapacityTasks */
	static readonly ListCapacityTasks = "outposts:ListCapacityTasks";
	/** [List] outposts:ListCatalogItems */
	static readonly ListCatalogItems = "outposts:ListCatalogItems";
	/** [List] outposts:ListOrderableInstanceTypes */
	static readonly ListOrderableInstanceTypes =
		"outposts:ListOrderableInstanceTypes";
	/** [List] outposts:ListOrders */
	static readonly ListOrders = "outposts:ListOrders";
	/** [List] outposts:ListOutposts */
	static readonly ListOutposts = "outposts:ListOutposts";
	/** [List] outposts:ListQuotes */
	static readonly ListQuotes = "outposts:ListQuotes";
	/** [List] outposts:ListSites */
	static readonly ListSites = "outposts:ListSites";
	/** [Read] outposts:ListTagsForResource */
	static readonly ListTagsForResource = "outposts:ListTagsForResource";
	/** [Write] outposts:StartCapacityTask */
	static readonly StartCapacityTask = "outposts:StartCapacityTask";
	/** [Write] outposts:StartConnection */
	static readonly StartConnection = "outposts:StartConnection";
	/** [Tagging] outposts:TagResource */
	static readonly TagResource = "outposts:TagResource";
	/** [Tagging] outposts:UntagResource */
	static readonly UntagResource = "outposts:UntagResource";
	/** [Write] outposts:UpdateOutpost */
	static readonly UpdateOutpost = "outposts:UpdateOutpost";
	/** [Write] outposts:UpdateQuote */
	static readonly UpdateQuote = "outposts:UpdateQuote";
	/** [Write] outposts:UpdateSite */
	static readonly UpdateSite = "outposts:UpdateSite";
	/** [Write] outposts:UpdateSiteAddress */
	static readonly UpdateSiteAddress = "outposts:UpdateSiteAddress";
	/** [Write] outposts:UpdateSiteRackPhysicalProperties */
	static readonly UpdateSiteRackPhysicalProperties =
		"outposts:UpdateSiteRackPhysicalProperties";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		OutpostsActions.actionGetCapacityTask,
		OutpostsActions.actionGetCatalogItem,
		OutpostsActions.actionGetConnection,
		OutpostsActions.actionGetOrder,
		OutpostsActions.actionGetOutpost,
		OutpostsActions.actionGetOutpostBillingInformation,
		OutpostsActions.actionGetOutpostInstanceTypes,
		OutpostsActions.actionGetOutpostSupportedInstanceTypes,
		OutpostsActions.actionGetPrivateConnectivityConfig,
		OutpostsActions.actionGetQuote,
		OutpostsActions.actionGetRenewalPricing,
		OutpostsActions.actionGetSite,
		OutpostsActions.actionGetSiteAddress,
		OutpostsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		OutpostsActions.CancelCapacityTask,
		OutpostsActions.CancelOrder,
		OutpostsActions.CreateOrder,
		OutpostsActions.CreateOutpost,
		OutpostsActions.CreatePrivateConnectivityConfig,
		OutpostsActions.CreateQuote,
		OutpostsActions.CreateRenewal,
		OutpostsActions.CreateSite,
		OutpostsActions.DeleteOutpost,
		OutpostsActions.DeleteQuote,
		OutpostsActions.DeleteSite,
		OutpostsActions.StartCapacityTask,
		OutpostsActions.StartConnection,
		OutpostsActions.UpdateOutpost,
		OutpostsActions.UpdateQuote,
		OutpostsActions.UpdateSite,
		OutpostsActions.UpdateSiteAddress,
		OutpostsActions.UpdateSiteRackPhysicalProperties,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		OutpostsActions.ListAssetInstances,
		OutpostsActions.ListAssets,
		OutpostsActions.ListBlockingInstancesForCapacityTask,
		OutpostsActions.ListCapacityTasks,
		OutpostsActions.ListCatalogItems,
		OutpostsActions.ListOrderableInstanceTypes,
		OutpostsActions.ListOrders,
		OutpostsActions.ListOutposts,
		OutpostsActions.ListQuotes,
		OutpostsActions.ListSites,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		OutpostsActions.TagResource,
		OutpostsActions.UntagResource,
	];
}

/**
 * Properties for building a outpost ARN.
 */
export interface OutpostsOutpostArnProps {
	/** The OutpostId component of the ARN. */
	readonly outpostId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a outpost ARN.
 */
export interface OutpostsOutpostArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OutpostId component. */
	readonly outpostId: string;
}

/**
 * Properties for building a site ARN.
 */
export interface OutpostsSiteArnProps {
	/** The SiteId component of the ARN. */
	readonly siteId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a site ARN.
 */
export interface OutpostsSiteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SiteId component. */
	readonly siteId: string;
}

const OutpostArnRegex =
	/^arn:(?<partition>[^:]+):outposts:(?<region>[^:]*):(?<account>[^:]*):outpost\/(?<outpostId>[^:/?]+)$/;
const SiteArnRegex =
	/^arn:(?<partition>[^:]+):outposts:(?<region>[^:]*):(?<account>[^:]*):site\/(?<siteId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for outposts resources.
 */
export class OutpostsResources {
	/**
	 * Builds an ARN for the outpost resource.
	 */
	static outpost(props: OutpostsOutpostArnProps): string {
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
	static parseOutpostArn(arn: string): OutpostsOutpostArnComponents {
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
	static site(props: OutpostsSiteArnProps): string {
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
	static parseSiteArn(arn: string): OutpostsSiteArnComponents {
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
	static readonly CancelCapacityTask: string[] = [
		"outposts:CancelCapacityTask",
	];
	/** IAM actions required for the CancelOrder API call. */
	static readonly CancelOrder: string[] = ["outposts:CancelOrder"];
	/** IAM actions required for the CreateOrder API call. */
	static readonly CreateOrder: string[] = ["outposts:CreateOrder"];
	/** IAM actions required for the CreateOutpost API call. */
	static readonly CreateOutpost: string[] = [
		"outposts:CreateOutpost",
		"outposts:TagResource",
	];
	/** IAM actions required for the CreateQuote API call. */
	static readonly CreateQuote: string[] = ["outposts:CreateQuote"];
	/** IAM actions required for the CreateRenewal API call. */
	static readonly CreateRenewal: string[] = ["outposts:CreateRenewal"];
	/** IAM actions required for the CreateSite API call. */
	static readonly CreateSite: string[] = [
		"outposts:CreateSite",
		"outposts:TagResource",
	];
	/** IAM actions required for the DeleteOutpost API call. */
	static readonly DeleteOutpost: string[] = ["outposts:DeleteOutpost"];
	/** IAM actions required for the DeleteQuote API call. */
	static readonly DeleteQuote: string[] = ["outposts:DeleteQuote"];
	/** IAM actions required for the DeleteSite API call. */
	static readonly DeleteSite: string[] = ["outposts:DeleteSite"];
	/** IAM actions required for the GetCapacityTask API call. */
	static readonly opGetCapacityTask: string[] = ["outposts:GetCapacityTask"];
	/** IAM actions required for the GetCatalogItem API call. */
	static readonly opGetCatalogItem: string[] = ["outposts:GetCatalogItem"];
	/** IAM actions required for the GetConnection API call. */
	static readonly opGetConnection: string[] = ["outposts:GetConnection"];
	/** IAM actions required for the GetOrder API call. */
	static readonly opGetOrder: string[] = ["outposts:GetOrder"];
	/** IAM actions required for the GetOutpost API call. */
	static readonly opGetOutpost: string[] = ["outposts:GetOutpost"];
	/** IAM actions required for the GetOutpostBillingInformation API call. */
	static readonly opGetOutpostBillingInformation: string[] = [
		"outposts:GetOutpostBillingInformation",
	];
	/** IAM actions required for the GetOutpostInstanceTypes API call. */
	static readonly opGetOutpostInstanceTypes: string[] = [
		"outposts:GetOutpostInstanceTypes",
	];
	/** IAM actions required for the GetOutpostSupportedInstanceTypes API call. */
	static readonly opGetOutpostSupportedInstanceTypes: string[] = [
		"outposts:GetOutpostSupportedInstanceTypes",
	];
	/** IAM actions required for the GetQuote API call. */
	static readonly opGetQuote: string[] = ["outposts:GetQuote"];
	/** IAM actions required for the GetRenewalPricing API call. */
	static readonly opGetRenewalPricing: string[] = [
		"outposts:GetRenewalPricing",
	];
	/** IAM actions required for the GetSite API call. */
	static readonly opGetSite: string[] = ["outposts:GetSite"];
	/** IAM actions required for the GetSiteAddress API call. */
	static readonly opGetSiteAddress: string[] = ["outposts:GetSiteAddress"];
	/** IAM actions required for the ListAssetInstances API call. */
	static readonly ListAssetInstances: string[] = [
		"outposts:ListAssetInstances",
	];
	/** IAM actions required for the ListAssets API call. */
	static readonly ListAssets: string[] = ["outposts:ListAssets"];
	/** IAM actions required for the ListBlockingInstancesForCapacityTask API call. */
	static readonly ListBlockingInstancesForCapacityTask: string[] = [
		"outposts:ListBlockingInstancesForCapacityTask",
	];
	/** IAM actions required for the ListCapacityTasks API call. */
	static readonly ListCapacityTasks: string[] = ["outposts:ListCapacityTasks"];
	/** IAM actions required for the ListCatalogItems API call. */
	static readonly ListCatalogItems: string[] = ["outposts:ListCatalogItems"];
	/** IAM actions required for the ListOrderableInstanceTypes API call. */
	static readonly ListOrderableInstanceTypes: string[] = [
		"outposts:ListOrderableInstanceTypes",
	];
	/** IAM actions required for the ListOrders API call. */
	static readonly ListOrders: string[] = ["outposts:ListOrders"];
	/** IAM actions required for the ListOutposts API call. */
	static readonly ListOutposts: string[] = ["outposts:ListOutposts"];
	/** IAM actions required for the ListQuotes API call. */
	static readonly ListQuotes: string[] = ["outposts:ListQuotes"];
	/** IAM actions required for the ListSites API call. */
	static readonly ListSites: string[] = ["outposts:ListSites"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"outposts:ListTagsForResource",
	];
	/** IAM actions required for the StartCapacityTask API call. */
	static readonly StartCapacityTask: string[] = ["outposts:StartCapacityTask"];
	/** IAM actions required for the StartConnection API call. */
	static readonly StartConnection: string[] = ["outposts:StartConnection"];
	/** IAM actions required for the StartOutpostDecommission API call. */
	static readonly StartOutpostDecommission: string[] = [];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["outposts:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["outposts:UntagResource"];
	/** IAM actions required for the UpdateOutpost API call. */
	static readonly UpdateOutpost: string[] = ["outposts:UpdateOutpost"];
	/** IAM actions required for the UpdateQuote API call. */
	static readonly UpdateQuote: string[] = ["outposts:UpdateQuote"];
	/** IAM actions required for the UpdateSite API call. */
	static readonly UpdateSite: string[] = ["outposts:UpdateSite"];
	/** IAM actions required for the UpdateSiteAddress API call. */
	static readonly UpdateSiteAddress: string[] = ["outposts:UpdateSiteAddress"];
	/** IAM actions required for the UpdateSiteRackPhysicalProperties API call. */
	static readonly UpdateSiteRackPhysicalProperties: string[] = [
		"outposts:UpdateSiteRackPhysicalProperties",
	];
}

/**
 * Condition key constants and builders for outposts.
 */
export class OutpostsConditions {
	/** Condition keys applicable to the CreateOutpost action. */
	static readonly CreateOutpostConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSite action. */
	static readonly CreateSiteConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
