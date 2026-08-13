// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/resource-explorer-2.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the resource-explorer-2 service.
 */
export class ResourceExplorer2Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "resource-explorer-2";

	/** [Write] resource-explorer-2:AssociateDefaultView */
	static readonly ASSOCIATE_DEFAULT_VIEW =
		"resource-explorer-2:AssociateDefaultView";
	/** [Read] resource-explorer-2:BatchGetView */
	static readonly BATCH_GET_VIEW = "resource-explorer-2:BatchGetView";
	/** [Write] resource-explorer-2:CreateIndex */
	static readonly CREATE_INDEX = "resource-explorer-2:CreateIndex";
	/** [Write] resource-explorer-2:CreateManagedView */
	static readonly CREATE_MANAGED_VIEW = "resource-explorer-2:CreateManagedView";
	/** [Write] resource-explorer-2:CreateResourceExplorerSetup */
	static readonly CREATE_RESOURCE_EXPLORER_SETUP =
		"resource-explorer-2:CreateResourceExplorerSetup";
	/** [Write] resource-explorer-2:CreateStreamingAccessForService */
	static readonly CREATE_STREAMING_ACCESS_FOR_SERVICE =
		"resource-explorer-2:CreateStreamingAccessForService";
	/** [Write] resource-explorer-2:CreateView */
	static readonly CREATE_VIEW = "resource-explorer-2:CreateView";
	/** [Write] resource-explorer-2:DeleteIndex */
	static readonly DELETE_INDEX = "resource-explorer-2:DeleteIndex";
	/** [Write] resource-explorer-2:DeleteResourceExplorerSetup */
	static readonly DELETE_RESOURCE_EXPLORER_SETUP =
		"resource-explorer-2:DeleteResourceExplorerSetup";
	/** [PermissionManagement] resource-explorer-2:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"resource-explorer-2:DeleteResourcePolicy";
	/** [Write] resource-explorer-2:DeleteStreamingAccessForService */
	static readonly DELETE_STREAMING_ACCESS_FOR_SERVICE =
		"resource-explorer-2:DeleteStreamingAccessForService";
	/** [Write] resource-explorer-2:DeleteView */
	static readonly DELETE_VIEW = "resource-explorer-2:DeleteView";
	/** [Write] resource-explorer-2:DisassociateDefaultView */
	static readonly DISASSOCIATE_DEFAULT_VIEW =
		"resource-explorer-2:DisassociateDefaultView";
	/** [Read] resource-explorer-2:GetAccountLevelServiceConfiguration */
	static readonly GET_ACCOUNT_LEVEL_SERVICE_CONFIGURATION =
		"resource-explorer-2:GetAccountLevelServiceConfiguration";
	/** [Read] resource-explorer-2:GetDefaultView */
	static readonly GET_DEFAULT_VIEW = "resource-explorer-2:GetDefaultView";
	/** [Read] resource-explorer-2:GetIndex */
	static readonly GET_INDEX = "resource-explorer-2:GetIndex";
	/** [Read] resource-explorer-2:GetManagedView */
	static readonly GET_MANAGED_VIEW = "resource-explorer-2:GetManagedView";
	/** [Read] resource-explorer-2:GetResourceExplorerSetup */
	static readonly GET_RESOURCE_EXPLORER_SETUP =
		"resource-explorer-2:GetResourceExplorerSetup";
	/** [Read] resource-explorer-2:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "resource-explorer-2:GetResourcePolicy";
	/** [Read] resource-explorer-2:GetServiceIndex */
	static readonly GET_SERVICE_INDEX = "resource-explorer-2:GetServiceIndex";
	/** [Read] resource-explorer-2:GetServiceView */
	static readonly GET_SERVICE_VIEW = "resource-explorer-2:GetServiceView";
	/** [Read] resource-explorer-2:GetView */
	static readonly GET_VIEW = "resource-explorer-2:GetView";
	/** [List] resource-explorer-2:ListIndexes */
	static readonly LIST_INDEXES = "resource-explorer-2:ListIndexes";
	/** [List] resource-explorer-2:ListIndexesForMembers */
	static readonly LIST_INDEXES_FOR_MEMBERS =
		"resource-explorer-2:ListIndexesForMembers";
	/** [List] resource-explorer-2:ListManagedViews */
	static readonly LIST_MANAGED_VIEWS = "resource-explorer-2:ListManagedViews";
	/** [List] resource-explorer-2:ListServiceIndexes */
	static readonly LIST_SERVICE_INDEXES =
		"resource-explorer-2:ListServiceIndexes";
	/** [List] resource-explorer-2:ListServiceViews */
	static readonly LIST_SERVICE_VIEWS = "resource-explorer-2:ListServiceViews";
	/** [List] resource-explorer-2:ListStreamingAccessForServices */
	static readonly LIST_STREAMING_ACCESS_FOR_SERVICES =
		"resource-explorer-2:ListStreamingAccessForServices";
	/** [List] resource-explorer-2:ListSupportedResourceTypes */
	static readonly LIST_SUPPORTED_RESOURCE_TYPES =
		"resource-explorer-2:ListSupportedResourceTypes";
	/** [Read] resource-explorer-2:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"resource-explorer-2:ListTagsForResource";
	/** [List] resource-explorer-2:ListViews */
	static readonly LIST_VIEWS = "resource-explorer-2:ListViews";
	/** [PermissionManagement] resource-explorer-2:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "resource-explorer-2:PutResourcePolicy";
	/** [Read] resource-explorer-2:Search */
	static readonly SEARCH = "resource-explorer-2:Search";
	/** [Tagging] resource-explorer-2:TagResource */
	static readonly TAG_RESOURCE = "resource-explorer-2:TagResource";
	/** [Tagging] resource-explorer-2:UntagResource */
	static readonly UNTAG_RESOURCE = "resource-explorer-2:UntagResource";
	/** [Write] resource-explorer-2:UpdateIndexType */
	static readonly UPDATE_INDEX_TYPE = "resource-explorer-2:UpdateIndexType";
	/** [Write] resource-explorer-2:UpdateView */
	static readonly UPDATE_VIEW = "resource-explorer-2:UpdateView";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ResourceExplorer2Actions.BATCH_GET_VIEW,
		ResourceExplorer2Actions.GET_ACCOUNT_LEVEL_SERVICE_CONFIGURATION,
		ResourceExplorer2Actions.GET_DEFAULT_VIEW,
		ResourceExplorer2Actions.GET_INDEX,
		ResourceExplorer2Actions.GET_MANAGED_VIEW,
		ResourceExplorer2Actions.GET_RESOURCE_EXPLORER_SETUP,
		ResourceExplorer2Actions.GET_RESOURCE_POLICY,
		ResourceExplorer2Actions.GET_SERVICE_INDEX,
		ResourceExplorer2Actions.GET_SERVICE_VIEW,
		ResourceExplorer2Actions.GET_VIEW,
		ResourceExplorer2Actions.LIST_TAGS_FOR_RESOURCE,
		ResourceExplorer2Actions.SEARCH,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ResourceExplorer2Actions.ASSOCIATE_DEFAULT_VIEW,
		ResourceExplorer2Actions.CREATE_INDEX,
		ResourceExplorer2Actions.CREATE_MANAGED_VIEW,
		ResourceExplorer2Actions.CREATE_RESOURCE_EXPLORER_SETUP,
		ResourceExplorer2Actions.CREATE_STREAMING_ACCESS_FOR_SERVICE,
		ResourceExplorer2Actions.CREATE_VIEW,
		ResourceExplorer2Actions.DELETE_INDEX,
		ResourceExplorer2Actions.DELETE_RESOURCE_EXPLORER_SETUP,
		ResourceExplorer2Actions.DELETE_STREAMING_ACCESS_FOR_SERVICE,
		ResourceExplorer2Actions.DELETE_VIEW,
		ResourceExplorer2Actions.DISASSOCIATE_DEFAULT_VIEW,
		ResourceExplorer2Actions.UPDATE_INDEX_TYPE,
		ResourceExplorer2Actions.UPDATE_VIEW,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ResourceExplorer2Actions.LIST_INDEXES,
		ResourceExplorer2Actions.LIST_INDEXES_FOR_MEMBERS,
		ResourceExplorer2Actions.LIST_MANAGED_VIEWS,
		ResourceExplorer2Actions.LIST_SERVICE_INDEXES,
		ResourceExplorer2Actions.LIST_SERVICE_VIEWS,
		ResourceExplorer2Actions.LIST_STREAMING_ACCESS_FOR_SERVICES,
		ResourceExplorer2Actions.LIST_SUPPORTED_RESOURCE_TYPES,
		ResourceExplorer2Actions.LIST_VIEWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ResourceExplorer2Actions.DELETE_RESOURCE_POLICY,
		ResourceExplorer2Actions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ResourceExplorer2Actions.TAG_RESOURCE,
		ResourceExplorer2Actions.UNTAG_RESOURCE,
	];
}

const IndexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resource-explorer-2:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexUuid>[^:/?]+)$",
);
const ManagedViewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resource-explorer-2:(?<region>[^:]*):(?<account>[^:]*):managed-view/(?<managedViewName>[^:/?]+)/(?<managedViewUuid>[^:/?]+)$",
);
const ViewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resource-explorer-2:(?<region>[^:]*):(?<account>[^:]*):view/(?<viewName>[^:/?]+)/(?<viewUuid>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for resource-explorer-2 resources.
 */
export class ResourceExplorer2Resources {
	/**
	 * Builds an ARN for the index resource.
	 */
	static index(props: {
		/** The IndexUuid component of the ARN. */
		readonly indexUuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resource-explorer-2:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexUuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the index resource.
	 */
	static isValidIndexArn(arn: string): boolean {
		return IndexArnRegex.test(arn);
	}

	/**
	 * Parses a index ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIndexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexUuid: string;
	} {
		const match = IndexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid index ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexUuid: match.groups!.indexUuid,
		};
	}

	/**
	 * Builds an ARN for the managed-view resource.
	 */
	static managedView(props: {
		/** The ManagedViewName component of the ARN. */
		readonly managedViewName: string;
		/** The ManagedViewUuid component of the ARN. */
		readonly managedViewUuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resource-explorer-2:${props.region ?? "*"}:${props.account ?? "*"}:managed-view/${props.managedViewName}/${props.managedViewUuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managed-view resource.
	 */
	static isValidManagedViewArn(arn: string): boolean {
		return ManagedViewArnRegex.test(arn);
	}

	/**
	 * Parses a managed-view ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedViewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		managedViewName: string;
		managedViewUuid: string;
	} {
		const match = ManagedViewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managed-view ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			managedViewName: match.groups!.managedViewName,
			managedViewUuid: match.groups!.managedViewUuid,
		};
	}

	/**
	 * Builds an ARN for the view resource.
	 */
	static view(props: {
		/** The ViewName component of the ARN. */
		readonly viewName: string;
		/** The ViewUuid component of the ARN. */
		readonly viewUuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:resource-explorer-2:${props.region ?? "*"}:${props.account ?? "*"}:view/${props.viewName}/${props.viewUuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the view resource.
	 */
	static isValidViewArn(arn: string): boolean {
		return ViewArnRegex.test(arn);
	}

	/**
	 * Parses a view ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseViewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		viewName: string;
		viewUuid: string;
	} {
		const match = ViewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid view ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			viewName: match.groups!.viewName,
			viewUuid: match.groups!.viewUuid,
		};
	}
}

/**
 * API operation to required IAM actions mapping for resource-explorer-2.
 */
export class ResourceExplorer2Operations {
	/** IAM actions required for the AssociateDefaultView API call. */
	static readonly ASSOCIATE_DEFAULT_VIEW: string[] = [
		"resource-explorer-2:AssociateDefaultView",
	];
	/** IAM actions required for the BatchGetView API call. */
	static readonly BATCH_GET_VIEW: string[] = [
		"resource-explorer-2:BatchGetView",
		"resource-explorer-2:GetView",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CREATE_INDEX: string[] = [
		"resource-explorer-2:CreateIndex",
		"resource-explorer-2:TagResource",
	];
	/** IAM actions required for the CreateResourceExplorerSetup API call. */
	static readonly CREATE_RESOURCE_EXPLORER_SETUP: string[] = [
		"resource-explorer-2:CreateResourceExplorerSetup",
	];
	/** IAM actions required for the CreateView API call. */
	static readonly CREATE_VIEW: string[] = [
		"resource-explorer-2:CreateView",
		"resource-explorer-2:TagResource",
	];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DELETE_INDEX: string[] = ["resource-explorer-2:DeleteIndex"];
	/** IAM actions required for the DeleteResourceExplorerSetup API call. */
	static readonly DELETE_RESOURCE_EXPLORER_SETUP: string[] = [
		"resource-explorer-2:DeleteResourceExplorerSetup",
	];
	/** IAM actions required for the DeleteView API call. */
	static readonly DELETE_VIEW: string[] = ["resource-explorer-2:DeleteView"];
	/** IAM actions required for the DisassociateDefaultView API call. */
	static readonly DISASSOCIATE_DEFAULT_VIEW: string[] = [
		"resource-explorer-2:DisassociateDefaultView",
	];
	/** IAM actions required for the GetAccountLevelServiceConfiguration API call. */
	static readonly GET_ACCOUNT_LEVEL_SERVICE_CONFIGURATION: string[] = [
		"resource-explorer-2:GetAccountLevelServiceConfiguration",
	];
	/** IAM actions required for the GetDefaultView API call. */
	static readonly GET_DEFAULT_VIEW: string[] = [
		"resource-explorer-2:GetDefaultView",
	];
	/** IAM actions required for the GetIndex API call. */
	static readonly GET_INDEX: string[] = ["resource-explorer-2:GetIndex"];
	/** IAM actions required for the GetManagedView API call. */
	static readonly GET_MANAGED_VIEW: string[] = [
		"resource-explorer-2:GetManagedView",
	];
	/** IAM actions required for the GetResourceExplorerSetup API call. */
	static readonly GET_RESOURCE_EXPLORER_SETUP: string[] = [
		"resource-explorer-2:GetResourceExplorerSetup",
	];
	/** IAM actions required for the GetServiceIndex API call. */
	static readonly GET_SERVICE_INDEX: string[] = [
		"resource-explorer-2:GetServiceIndex",
	];
	/** IAM actions required for the GetServiceView API call. */
	static readonly GET_SERVICE_VIEW: string[] = [
		"resource-explorer-2:GetServiceView",
	];
	/** IAM actions required for the GetView API call. */
	static readonly GET_VIEW: string[] = ["resource-explorer-2:GetView"];
	/** IAM actions required for the ListIndexes API call. */
	static readonly LIST_INDEXES: string[] = ["resource-explorer-2:ListIndexes"];
	/** IAM actions required for the ListIndexesForMembers API call. */
	static readonly LIST_INDEXES_FOR_MEMBERS: string[] = [
		"resource-explorer-2:ListIndexesForMembers",
	];
	/** IAM actions required for the ListManagedViews API call. */
	static readonly LIST_MANAGED_VIEWS: string[] = [
		"resource-explorer-2:ListManagedViews",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly LIST_RESOURCES: string[] = ["resource-explorer-2:Search"];
	/** IAM actions required for the ListServiceIndexes API call. */
	static readonly LIST_SERVICE_INDEXES: string[] = [
		"resource-explorer-2:ListServiceIndexes",
	];
	/** IAM actions required for the ListServiceViews API call. */
	static readonly LIST_SERVICE_VIEWS: string[] = [
		"resource-explorer-2:ListServiceViews",
	];
	/** IAM actions required for the ListStreamingAccessForServices API call. */
	static readonly LIST_STREAMING_ACCESS_FOR_SERVICES: string[] = [
		"resource-explorer-2:ListStreamingAccessForServices",
	];
	/** IAM actions required for the ListSupportedResourceTypes API call. */
	static readonly LIST_SUPPORTED_RESOURCE_TYPES: string[] = [
		"resource-explorer-2:ListSupportedResourceTypes",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"resource-explorer-2:ListTagsForResource",
	];
	/** IAM actions required for the ListViews API call. */
	static readonly LIST_VIEWS: string[] = ["resource-explorer-2:ListViews"];
	/** IAM actions required for the Search API call. */
	static readonly SEARCH: string[] = ["resource-explorer-2:Search"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["resource-explorer-2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"resource-explorer-2:UntagResource",
	];
	/** IAM actions required for the UpdateIndexType API call. */
	static readonly UPDATE_INDEX_TYPE: string[] = [
		"resource-explorer-2:UpdateIndexType",
	];
	/** IAM actions required for the UpdateView API call. */
	static readonly UPDATE_VIEW: string[] = ["resource-explorer-2:UpdateView"];
}

/**
 * Condition key constants and builders for resource-explorer-2.
 */
export class ResourceExplorer2Conditions {
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CREATE_INDEX_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateView action. */
	static readonly CREATE_VIEW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Search action. */
	static readonly SEARCH_CONDITION_KEYS: string[] = [
		"resource-explorer-2:Operation",
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
	/** Condition key: resource-explorer-2:Operation (String) */
	static readonly OPERATION = "resource-explorer-2:Operation";

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

	/**
	 * Generates a condition block for `resource-explorer-2:Operation`.
	 */
	static operation(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "resource-explorer-2:Operation": value } };
	}
}
