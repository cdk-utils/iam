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
	static readonly AssociateDefaultView =
		"resource-explorer-2:AssociateDefaultView";
	/** [Read] resource-explorer-2:BatchGetView */
	static readonly BatchGetView = "resource-explorer-2:BatchGetView";
	/** [Write] resource-explorer-2:CreateIndex */
	static readonly CreateIndex = "resource-explorer-2:CreateIndex";
	/** [Write] resource-explorer-2:CreateManagedView */
	static readonly CreateManagedView = "resource-explorer-2:CreateManagedView";
	/** [Write] resource-explorer-2:CreateResourceExplorerSetup */
	static readonly CreateResourceExplorerSetup =
		"resource-explorer-2:CreateResourceExplorerSetup";
	/** [Write] resource-explorer-2:CreateStreamingAccessForService */
	static readonly CreateStreamingAccessForService =
		"resource-explorer-2:CreateStreamingAccessForService";
	/** [Write] resource-explorer-2:CreateView */
	static readonly CreateView = "resource-explorer-2:CreateView";
	/** [Write] resource-explorer-2:DeleteIndex */
	static readonly DeleteIndex = "resource-explorer-2:DeleteIndex";
	/** [Write] resource-explorer-2:DeleteResourceExplorerSetup */
	static readonly DeleteResourceExplorerSetup =
		"resource-explorer-2:DeleteResourceExplorerSetup";
	/** [PermissionManagement] resource-explorer-2:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"resource-explorer-2:DeleteResourcePolicy";
	/** [Write] resource-explorer-2:DeleteStreamingAccessForService */
	static readonly DeleteStreamingAccessForService =
		"resource-explorer-2:DeleteStreamingAccessForService";
	/** [Write] resource-explorer-2:DeleteView */
	static readonly DeleteView = "resource-explorer-2:DeleteView";
	/** [Write] resource-explorer-2:DisassociateDefaultView */
	static readonly DisassociateDefaultView =
		"resource-explorer-2:DisassociateDefaultView";
	/** [Read] resource-explorer-2:GetAccountLevelServiceConfiguration */
	static readonly actionGetAccountLevelServiceConfiguration =
		"resource-explorer-2:GetAccountLevelServiceConfiguration";
	/** [Read] resource-explorer-2:GetDefaultView */
	static readonly actionGetDefaultView = "resource-explorer-2:GetDefaultView";
	/** [Read] resource-explorer-2:GetIndex */
	static readonly actionGetIndex = "resource-explorer-2:GetIndex";
	/** [Read] resource-explorer-2:GetManagedView */
	static readonly actionGetManagedView = "resource-explorer-2:GetManagedView";
	/** [Read] resource-explorer-2:GetResourceExplorerSetup */
	static readonly actionGetResourceExplorerSetup =
		"resource-explorer-2:GetResourceExplorerSetup";
	/** [Read] resource-explorer-2:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"resource-explorer-2:GetResourcePolicy";
	/** [Read] resource-explorer-2:GetServiceIndex */
	static readonly actionGetServiceIndex = "resource-explorer-2:GetServiceIndex";
	/** [Read] resource-explorer-2:GetServiceView */
	static readonly actionGetServiceView = "resource-explorer-2:GetServiceView";
	/** [Read] resource-explorer-2:GetView */
	static readonly actionGetView = "resource-explorer-2:GetView";
	/** [List] resource-explorer-2:ListIndexes */
	static readonly ListIndexes = "resource-explorer-2:ListIndexes";
	/** [List] resource-explorer-2:ListIndexesForMembers */
	static readonly ListIndexesForMembers =
		"resource-explorer-2:ListIndexesForMembers";
	/** [List] resource-explorer-2:ListManagedViews */
	static readonly ListManagedViews = "resource-explorer-2:ListManagedViews";
	/** [List] resource-explorer-2:ListServiceIndexes */
	static readonly ListServiceIndexes = "resource-explorer-2:ListServiceIndexes";
	/** [List] resource-explorer-2:ListServiceViews */
	static readonly ListServiceViews = "resource-explorer-2:ListServiceViews";
	/** [List] resource-explorer-2:ListStreamingAccessForServices */
	static readonly ListStreamingAccessForServices =
		"resource-explorer-2:ListStreamingAccessForServices";
	/** [List] resource-explorer-2:ListSupportedResourceTypes */
	static readonly ListSupportedResourceTypes =
		"resource-explorer-2:ListSupportedResourceTypes";
	/** [Read] resource-explorer-2:ListTagsForResource */
	static readonly ListTagsForResource =
		"resource-explorer-2:ListTagsForResource";
	/** [List] resource-explorer-2:ListViews */
	static readonly ListViews = "resource-explorer-2:ListViews";
	/** [PermissionManagement] resource-explorer-2:PutResourcePolicy */
	static readonly PutResourcePolicy = "resource-explorer-2:PutResourcePolicy";
	/** [Read] resource-explorer-2:Search */
	static readonly Search = "resource-explorer-2:Search";
	/** [Tagging] resource-explorer-2:TagResource */
	static readonly TagResource = "resource-explorer-2:TagResource";
	/** [Tagging] resource-explorer-2:UntagResource */
	static readonly UntagResource = "resource-explorer-2:UntagResource";
	/** [Write] resource-explorer-2:UpdateIndexType */
	static readonly UpdateIndexType = "resource-explorer-2:UpdateIndexType";
	/** [Write] resource-explorer-2:UpdateView */
	static readonly UpdateView = "resource-explorer-2:UpdateView";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ResourceExplorer2Actions.BatchGetView,
		ResourceExplorer2Actions.actionGetAccountLevelServiceConfiguration,
		ResourceExplorer2Actions.actionGetDefaultView,
		ResourceExplorer2Actions.actionGetIndex,
		ResourceExplorer2Actions.actionGetManagedView,
		ResourceExplorer2Actions.actionGetResourceExplorerSetup,
		ResourceExplorer2Actions.actionGetResourcePolicy,
		ResourceExplorer2Actions.actionGetServiceIndex,
		ResourceExplorer2Actions.actionGetServiceView,
		ResourceExplorer2Actions.actionGetView,
		ResourceExplorer2Actions.ListTagsForResource,
		ResourceExplorer2Actions.Search,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ResourceExplorer2Actions.AssociateDefaultView,
		ResourceExplorer2Actions.CreateIndex,
		ResourceExplorer2Actions.CreateManagedView,
		ResourceExplorer2Actions.CreateResourceExplorerSetup,
		ResourceExplorer2Actions.CreateStreamingAccessForService,
		ResourceExplorer2Actions.CreateView,
		ResourceExplorer2Actions.DeleteIndex,
		ResourceExplorer2Actions.DeleteResourceExplorerSetup,
		ResourceExplorer2Actions.DeleteStreamingAccessForService,
		ResourceExplorer2Actions.DeleteView,
		ResourceExplorer2Actions.DisassociateDefaultView,
		ResourceExplorer2Actions.UpdateIndexType,
		ResourceExplorer2Actions.UpdateView,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ResourceExplorer2Actions.ListIndexes,
		ResourceExplorer2Actions.ListIndexesForMembers,
		ResourceExplorer2Actions.ListManagedViews,
		ResourceExplorer2Actions.ListServiceIndexes,
		ResourceExplorer2Actions.ListServiceViews,
		ResourceExplorer2Actions.ListStreamingAccessForServices,
		ResourceExplorer2Actions.ListSupportedResourceTypes,
		ResourceExplorer2Actions.ListViews,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ResourceExplorer2Actions.DeleteResourcePolicy,
		ResourceExplorer2Actions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ResourceExplorer2Actions.TagResource,
		ResourceExplorer2Actions.UntagResource,
	];
}

/**
 * Properties for building a index ARN.
 */
export interface ResourceExplorer2IndexArnProps {
	/** The IndexUuid component of the ARN. */
	readonly indexUuid: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a index ARN.
 */
export interface ResourceExplorer2IndexArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexUuid component. */
	readonly indexUuid: string;
}

/**
 * Properties for building a managed-view ARN.
 */
export interface ResourceExplorer2ManagedViewArnProps {
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
}

/**
 * Parsed components of a managed-view ARN.
 */
export interface ResourceExplorer2ManagedViewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ManagedViewName component. */
	readonly managedViewName: string;
	/** The ManagedViewUuid component. */
	readonly managedViewUuid: string;
}

/**
 * Properties for building a view ARN.
 */
export interface ResourceExplorer2ViewArnProps {
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
}

/**
 * Parsed components of a view ARN.
 */
export interface ResourceExplorer2ViewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ViewName component. */
	readonly viewName: string;
	/** The ViewUuid component. */
	readonly viewUuid: string;
}

const IndexArnRegex =
	/^arn:(?<partition>[^:]+):resource-explorer-2:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexUuid>[^:/?]+)$/;
const ManagedViewArnRegex =
	/^arn:(?<partition>[^:]+):resource-explorer-2:(?<region>[^:]*):(?<account>[^:]*):managed-view\/(?<managedViewName>[^:/?]+)\/(?<managedViewUuid>[^:/?]+)$/;
const ViewArnRegex =
	/^arn:(?<partition>[^:]+):resource-explorer-2:(?<region>[^:]*):(?<account>[^:]*):view\/(?<viewName>[^:/?]+)\/(?<viewUuid>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for resource-explorer-2 resources.
 */
export class ResourceExplorer2Resources {
	/**
	 * Builds an ARN for the index resource.
	 */
	static index(props: ResourceExplorer2IndexArnProps): string {
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
	static parseIndexArn(arn: string): ResourceExplorer2IndexArnComponents {
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
	static managedView(props: ResourceExplorer2ManagedViewArnProps): string {
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
	static parseManagedViewArn(
		arn: string,
	): ResourceExplorer2ManagedViewArnComponents {
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
	static view(props: ResourceExplorer2ViewArnProps): string {
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
	static parseViewArn(arn: string): ResourceExplorer2ViewArnComponents {
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
	static readonly AssociateDefaultView: string[] = [
		"resource-explorer-2:AssociateDefaultView",
	];
	/** IAM actions required for the BatchGetView API call. */
	static readonly BatchGetView: string[] = [
		"resource-explorer-2:BatchGetView",
		"resource-explorer-2:GetView",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CreateIndex: string[] = [
		"resource-explorer-2:CreateIndex",
		"resource-explorer-2:TagResource",
	];
	/** IAM actions required for the CreateResourceExplorerSetup API call. */
	static readonly CreateResourceExplorerSetup: string[] = [
		"resource-explorer-2:CreateResourceExplorerSetup",
	];
	/** IAM actions required for the CreateView API call. */
	static readonly CreateView: string[] = [
		"resource-explorer-2:CreateView",
		"resource-explorer-2:TagResource",
	];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DeleteIndex: string[] = ["resource-explorer-2:DeleteIndex"];
	/** IAM actions required for the DeleteResourceExplorerSetup API call. */
	static readonly DeleteResourceExplorerSetup: string[] = [
		"resource-explorer-2:DeleteResourceExplorerSetup",
	];
	/** IAM actions required for the DeleteView API call. */
	static readonly DeleteView: string[] = ["resource-explorer-2:DeleteView"];
	/** IAM actions required for the DisassociateDefaultView API call. */
	static readonly DisassociateDefaultView: string[] = [
		"resource-explorer-2:DisassociateDefaultView",
	];
	/** IAM actions required for the GetAccountLevelServiceConfiguration API call. */
	static readonly opGetAccountLevelServiceConfiguration: string[] = [
		"resource-explorer-2:GetAccountLevelServiceConfiguration",
	];
	/** IAM actions required for the GetDefaultView API call. */
	static readonly opGetDefaultView: string[] = [
		"resource-explorer-2:GetDefaultView",
	];
	/** IAM actions required for the GetIndex API call. */
	static readonly opGetIndex: string[] = ["resource-explorer-2:GetIndex"];
	/** IAM actions required for the GetManagedView API call. */
	static readonly opGetManagedView: string[] = [
		"resource-explorer-2:GetManagedView",
	];
	/** IAM actions required for the GetResourceExplorerSetup API call. */
	static readonly opGetResourceExplorerSetup: string[] = [
		"resource-explorer-2:GetResourceExplorerSetup",
	];
	/** IAM actions required for the GetServiceIndex API call. */
	static readonly opGetServiceIndex: string[] = [
		"resource-explorer-2:GetServiceIndex",
	];
	/** IAM actions required for the GetServiceView API call. */
	static readonly opGetServiceView: string[] = [
		"resource-explorer-2:GetServiceView",
	];
	/** IAM actions required for the GetView API call. */
	static readonly opGetView: string[] = ["resource-explorer-2:GetView"];
	/** IAM actions required for the ListIndexes API call. */
	static readonly ListIndexes: string[] = ["resource-explorer-2:ListIndexes"];
	/** IAM actions required for the ListIndexesForMembers API call. */
	static readonly ListIndexesForMembers: string[] = [
		"resource-explorer-2:ListIndexesForMembers",
	];
	/** IAM actions required for the ListManagedViews API call. */
	static readonly ListManagedViews: string[] = [
		"resource-explorer-2:ListManagedViews",
	];
	/** IAM actions required for the ListResources API call. */
	static readonly ListResources: string[] = ["resource-explorer-2:Search"];
	/** IAM actions required for the ListServiceIndexes API call. */
	static readonly ListServiceIndexes: string[] = [
		"resource-explorer-2:ListServiceIndexes",
	];
	/** IAM actions required for the ListServiceViews API call. */
	static readonly ListServiceViews: string[] = [
		"resource-explorer-2:ListServiceViews",
	];
	/** IAM actions required for the ListStreamingAccessForServices API call. */
	static readonly ListStreamingAccessForServices: string[] = [
		"resource-explorer-2:ListStreamingAccessForServices",
	];
	/** IAM actions required for the ListSupportedResourceTypes API call. */
	static readonly ListSupportedResourceTypes: string[] = [
		"resource-explorer-2:ListSupportedResourceTypes",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"resource-explorer-2:ListTagsForResource",
	];
	/** IAM actions required for the ListViews API call. */
	static readonly ListViews: string[] = ["resource-explorer-2:ListViews"];
	/** IAM actions required for the Search API call. */
	static readonly Search: string[] = ["resource-explorer-2:Search"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["resource-explorer-2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"resource-explorer-2:UntagResource",
	];
	/** IAM actions required for the UpdateIndexType API call. */
	static readonly UpdateIndexType: string[] = [
		"resource-explorer-2:UpdateIndexType",
	];
	/** IAM actions required for the UpdateView API call. */
	static readonly UpdateView: string[] = ["resource-explorer-2:UpdateView"];
}

/**
 * Condition key constants and builders for resource-explorer-2.
 */
export class ResourceExplorer2Conditions {
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CreateIndexConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateView action. */
	static readonly CreateViewConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Search action. */
	static readonly SearchConditionKeys: string[] = [
		"resource-explorer-2:Operation",
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
