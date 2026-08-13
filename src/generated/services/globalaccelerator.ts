// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/globalaccelerator.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the globalaccelerator service.
 */
export class GlobalAcceleratorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "globalaccelerator";

	/** [Write] globalaccelerator:AddCustomRoutingEndpoints */
	static readonly AddCustomRoutingEndpoints =
		"globalaccelerator:AddCustomRoutingEndpoints";
	/** [Write] globalaccelerator:AddEndpoints */
	static readonly AddEndpoints = "globalaccelerator:AddEndpoints";
	/** [Write] globalaccelerator:AdvertiseByoipCidr */
	static readonly AdvertiseByoipCidr = "globalaccelerator:AdvertiseByoipCidr";
	/** [Write] globalaccelerator:AllowCustomRoutingTraffic */
	static readonly AllowCustomRoutingTraffic =
		"globalaccelerator:AllowCustomRoutingTraffic";
	/** [Write] globalaccelerator:CreateAccelerator */
	static readonly CreateAccelerator = "globalaccelerator:CreateAccelerator";
	/** [Write] globalaccelerator:CreateCrossAccountAttachment */
	static readonly CreateCrossAccountAttachment =
		"globalaccelerator:CreateCrossAccountAttachment";
	/** [Write] globalaccelerator:CreateCustomRoutingAccelerator */
	static readonly CreateCustomRoutingAccelerator =
		"globalaccelerator:CreateCustomRoutingAccelerator";
	/** [Write] globalaccelerator:CreateCustomRoutingEndpointGroup */
	static readonly CreateCustomRoutingEndpointGroup =
		"globalaccelerator:CreateCustomRoutingEndpointGroup";
	/** [Write] globalaccelerator:CreateCustomRoutingListener */
	static readonly CreateCustomRoutingListener =
		"globalaccelerator:CreateCustomRoutingListener";
	/** [Write] globalaccelerator:CreateEndpointGroup */
	static readonly CreateEndpointGroup = "globalaccelerator:CreateEndpointGroup";
	/** [Write] globalaccelerator:CreateListener */
	static readonly CreateListener = "globalaccelerator:CreateListener";
	/** [Write] globalaccelerator:DeleteAccelerator */
	static readonly DeleteAccelerator = "globalaccelerator:DeleteAccelerator";
	/** [Write] globalaccelerator:DeleteCrossAccountAttachment */
	static readonly DeleteCrossAccountAttachment =
		"globalaccelerator:DeleteCrossAccountAttachment";
	/** [Write] globalaccelerator:DeleteCustomRoutingAccelerator */
	static readonly DeleteCustomRoutingAccelerator =
		"globalaccelerator:DeleteCustomRoutingAccelerator";
	/** [Write] globalaccelerator:DeleteCustomRoutingEndpointGroup */
	static readonly DeleteCustomRoutingEndpointGroup =
		"globalaccelerator:DeleteCustomRoutingEndpointGroup";
	/** [Write] globalaccelerator:DeleteCustomRoutingListener */
	static readonly DeleteCustomRoutingListener =
		"globalaccelerator:DeleteCustomRoutingListener";
	/** [Write] globalaccelerator:DeleteEndpointGroup */
	static readonly DeleteEndpointGroup = "globalaccelerator:DeleteEndpointGroup";
	/** [Write] globalaccelerator:DeleteListener */
	static readonly DeleteListener = "globalaccelerator:DeleteListener";
	/** [Write] globalaccelerator:DenyCustomRoutingTraffic */
	static readonly DenyCustomRoutingTraffic =
		"globalaccelerator:DenyCustomRoutingTraffic";
	/** [Write] globalaccelerator:DeprovisionByoipCidr */
	static readonly DeprovisionByoipCidr =
		"globalaccelerator:DeprovisionByoipCidr";
	/** [Read] globalaccelerator:DescribeAccelerator */
	static readonly DescribeAccelerator = "globalaccelerator:DescribeAccelerator";
	/** [Read] globalaccelerator:DescribeAcceleratorAttributes */
	static readonly DescribeAcceleratorAttributes =
		"globalaccelerator:DescribeAcceleratorAttributes";
	/** [Read] globalaccelerator:DescribeCrossAccountAttachment */
	static readonly DescribeCrossAccountAttachment =
		"globalaccelerator:DescribeCrossAccountAttachment";
	/** [Read] globalaccelerator:DescribeCustomRoutingAccelerator */
	static readonly DescribeCustomRoutingAccelerator =
		"globalaccelerator:DescribeCustomRoutingAccelerator";
	/** [Read] globalaccelerator:DescribeCustomRoutingAcceleratorAttributes */
	static readonly DescribeCustomRoutingAcceleratorAttributes =
		"globalaccelerator:DescribeCustomRoutingAcceleratorAttributes";
	/** [Read] globalaccelerator:DescribeCustomRoutingEndpointGroup */
	static readonly DescribeCustomRoutingEndpointGroup =
		"globalaccelerator:DescribeCustomRoutingEndpointGroup";
	/** [Read] globalaccelerator:DescribeCustomRoutingListener */
	static readonly DescribeCustomRoutingListener =
		"globalaccelerator:DescribeCustomRoutingListener";
	/** [Read] globalaccelerator:DescribeEndpointGroup */
	static readonly DescribeEndpointGroup =
		"globalaccelerator:DescribeEndpointGroup";
	/** [Read] globalaccelerator:DescribeListener */
	static readonly DescribeListener = "globalaccelerator:DescribeListener";
	/** [List] globalaccelerator:ListAccelerators */
	static readonly ListAccelerators = "globalaccelerator:ListAccelerators";
	/** [List] globalaccelerator:ListByoipCidrs */
	static readonly ListByoipCidrs = "globalaccelerator:ListByoipCidrs";
	/** [List] globalaccelerator:ListCrossAccountAttachments */
	static readonly ListCrossAccountAttachments =
		"globalaccelerator:ListCrossAccountAttachments";
	/** [List] globalaccelerator:ListCrossAccountResourceAccounts */
	static readonly ListCrossAccountResourceAccounts =
		"globalaccelerator:ListCrossAccountResourceAccounts";
	/** [List] globalaccelerator:ListCrossAccountResources */
	static readonly ListCrossAccountResources =
		"globalaccelerator:ListCrossAccountResources";
	/** [List] globalaccelerator:ListCustomRoutingAccelerators */
	static readonly ListCustomRoutingAccelerators =
		"globalaccelerator:ListCustomRoutingAccelerators";
	/** [List] globalaccelerator:ListCustomRoutingEndpointGroups */
	static readonly ListCustomRoutingEndpointGroups =
		"globalaccelerator:ListCustomRoutingEndpointGroups";
	/** [List] globalaccelerator:ListCustomRoutingListeners */
	static readonly ListCustomRoutingListeners =
		"globalaccelerator:ListCustomRoutingListeners";
	/** [List] globalaccelerator:ListCustomRoutingPortMappings */
	static readonly ListCustomRoutingPortMappings =
		"globalaccelerator:ListCustomRoutingPortMappings";
	/** [List] globalaccelerator:ListCustomRoutingPortMappingsByDestination */
	static readonly ListCustomRoutingPortMappingsByDestination =
		"globalaccelerator:ListCustomRoutingPortMappingsByDestination";
	/** [List] globalaccelerator:ListEndpointGroups */
	static readonly ListEndpointGroups = "globalaccelerator:ListEndpointGroups";
	/** [List] globalaccelerator:ListListeners */
	static readonly ListListeners = "globalaccelerator:ListListeners";
	/** [Read] globalaccelerator:ListTagsForResource */
	static readonly ListTagsForResource = "globalaccelerator:ListTagsForResource";
	/** [Write] globalaccelerator:ProvisionByoipCidr */
	static readonly ProvisionByoipCidr = "globalaccelerator:ProvisionByoipCidr";
	/** [Write] globalaccelerator:RemoveCustomRoutingEndpoints */
	static readonly RemoveCustomRoutingEndpoints =
		"globalaccelerator:RemoveCustomRoutingEndpoints";
	/** [Write] globalaccelerator:RemoveEndpoints */
	static readonly RemoveEndpoints = "globalaccelerator:RemoveEndpoints";
	/** [Tagging] globalaccelerator:TagResource */
	static readonly TagResource = "globalaccelerator:TagResource";
	/** [Tagging] globalaccelerator:UntagResource */
	static readonly UntagResource = "globalaccelerator:UntagResource";
	/** [Write] globalaccelerator:UpdateAccelerator */
	static readonly UpdateAccelerator = "globalaccelerator:UpdateAccelerator";
	/** [Write] globalaccelerator:UpdateAcceleratorAttributes */
	static readonly UpdateAcceleratorAttributes =
		"globalaccelerator:UpdateAcceleratorAttributes";
	/** [Write] globalaccelerator:UpdateCrossAccountAttachment */
	static readonly UpdateCrossAccountAttachment =
		"globalaccelerator:UpdateCrossAccountAttachment";
	/** [Write] globalaccelerator:UpdateCustomRoutingAccelerator */
	static readonly UpdateCustomRoutingAccelerator =
		"globalaccelerator:UpdateCustomRoutingAccelerator";
	/** [Write] globalaccelerator:UpdateCustomRoutingAcceleratorAttributes */
	static readonly UpdateCustomRoutingAcceleratorAttributes =
		"globalaccelerator:UpdateCustomRoutingAcceleratorAttributes";
	/** [Write] globalaccelerator:UpdateCustomRoutingListener */
	static readonly UpdateCustomRoutingListener =
		"globalaccelerator:UpdateCustomRoutingListener";
	/** [Write] globalaccelerator:UpdateEndpointGroup */
	static readonly UpdateEndpointGroup = "globalaccelerator:UpdateEndpointGroup";
	/** [Write] globalaccelerator:UpdateListener */
	static readonly UpdateListener = "globalaccelerator:UpdateListener";
	/** [Write] globalaccelerator:WithdrawByoipCidr */
	static readonly WithdrawByoipCidr = "globalaccelerator:WithdrawByoipCidr";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GlobalAcceleratorActions.DescribeAccelerator,
		GlobalAcceleratorActions.DescribeAcceleratorAttributes,
		GlobalAcceleratorActions.DescribeCrossAccountAttachment,
		GlobalAcceleratorActions.DescribeCustomRoutingAccelerator,
		GlobalAcceleratorActions.DescribeCustomRoutingAcceleratorAttributes,
		GlobalAcceleratorActions.DescribeCustomRoutingEndpointGroup,
		GlobalAcceleratorActions.DescribeCustomRoutingListener,
		GlobalAcceleratorActions.DescribeEndpointGroup,
		GlobalAcceleratorActions.DescribeListener,
		GlobalAcceleratorActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GlobalAcceleratorActions.AddCustomRoutingEndpoints,
		GlobalAcceleratorActions.AddEndpoints,
		GlobalAcceleratorActions.AdvertiseByoipCidr,
		GlobalAcceleratorActions.AllowCustomRoutingTraffic,
		GlobalAcceleratorActions.CreateAccelerator,
		GlobalAcceleratorActions.CreateCrossAccountAttachment,
		GlobalAcceleratorActions.CreateCustomRoutingAccelerator,
		GlobalAcceleratorActions.CreateCustomRoutingEndpointGroup,
		GlobalAcceleratorActions.CreateCustomRoutingListener,
		GlobalAcceleratorActions.CreateEndpointGroup,
		GlobalAcceleratorActions.CreateListener,
		GlobalAcceleratorActions.DeleteAccelerator,
		GlobalAcceleratorActions.DeleteCrossAccountAttachment,
		GlobalAcceleratorActions.DeleteCustomRoutingAccelerator,
		GlobalAcceleratorActions.DeleteCustomRoutingEndpointGroup,
		GlobalAcceleratorActions.DeleteCustomRoutingListener,
		GlobalAcceleratorActions.DeleteEndpointGroup,
		GlobalAcceleratorActions.DeleteListener,
		GlobalAcceleratorActions.DenyCustomRoutingTraffic,
		GlobalAcceleratorActions.DeprovisionByoipCidr,
		GlobalAcceleratorActions.ProvisionByoipCidr,
		GlobalAcceleratorActions.RemoveCustomRoutingEndpoints,
		GlobalAcceleratorActions.RemoveEndpoints,
		GlobalAcceleratorActions.UpdateAccelerator,
		GlobalAcceleratorActions.UpdateAcceleratorAttributes,
		GlobalAcceleratorActions.UpdateCrossAccountAttachment,
		GlobalAcceleratorActions.UpdateCustomRoutingAccelerator,
		GlobalAcceleratorActions.UpdateCustomRoutingAcceleratorAttributes,
		GlobalAcceleratorActions.UpdateCustomRoutingListener,
		GlobalAcceleratorActions.UpdateEndpointGroup,
		GlobalAcceleratorActions.UpdateListener,
		GlobalAcceleratorActions.WithdrawByoipCidr,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GlobalAcceleratorActions.ListAccelerators,
		GlobalAcceleratorActions.ListByoipCidrs,
		GlobalAcceleratorActions.ListCrossAccountAttachments,
		GlobalAcceleratorActions.ListCrossAccountResourceAccounts,
		GlobalAcceleratorActions.ListCrossAccountResources,
		GlobalAcceleratorActions.ListCustomRoutingAccelerators,
		GlobalAcceleratorActions.ListCustomRoutingEndpointGroups,
		GlobalAcceleratorActions.ListCustomRoutingListeners,
		GlobalAcceleratorActions.ListCustomRoutingPortMappings,
		GlobalAcceleratorActions.ListCustomRoutingPortMappingsByDestination,
		GlobalAcceleratorActions.ListEndpointGroups,
		GlobalAcceleratorActions.ListListeners,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GlobalAcceleratorActions.TagResource,
		GlobalAcceleratorActions.UntagResource,
	];
}

/**
 * Properties for building a accelerator ARN.
 */
export interface GlobalAcceleratorAcceleratorArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a accelerator ARN.
 */
export interface GlobalAcceleratorAcceleratorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a attachment ARN.
 */
export interface GlobalAcceleratorAttachmentArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a attachment ARN.
 */
export interface GlobalAcceleratorAttachmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a endpointgroup ARN.
 */
export interface GlobalAcceleratorEndpointgroupArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** The ListenerId component of the ARN. */
	readonly listenerId: string;
	/** The EndpointGroupId component of the ARN. */
	readonly endpointGroupId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a endpointgroup ARN.
 */
export interface GlobalAcceleratorEndpointgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
	/** The ListenerId component. */
	readonly listenerId: string;
	/** The EndpointGroupId component. */
	readonly endpointGroupId: string;
}

/**
 * Properties for building a listener ARN.
 */
export interface GlobalAcceleratorListenerArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** The ListenerId component of the ARN. */
	readonly listenerId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a listener ARN.
 */
export interface GlobalAcceleratorListenerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
	/** The ListenerId component. */
	readonly listenerId: string;
}

const AcceleratorArnRegex =
	/^arn:(?<partition>[^:]+):globalaccelerator::(?<account>[^:]*):accelerator\/(?<resourceId>[^:/?]+)$/;
const AttachmentArnRegex =
	/^arn:(?<partition>[^:]+):globalaccelerator::(?<account>[^:]*):attachment\/(?<resourceId>[^:/?]+)$/;
const EndpointgroupArnRegex =
	/^arn:(?<partition>[^:]+):globalaccelerator::(?<account>[^:]*):accelerator\/(?<resourceId>[^:/?]+)\/listener\/(?<listenerId>[^:/?]+)\/endpoint-group\/(?<endpointGroupId>[^:/?]+)$/;
const ListenerArnRegex =
	/^arn:(?<partition>[^:]+):globalaccelerator::(?<account>[^:]*):accelerator\/(?<resourceId>[^:/?]+)\/listener\/(?<listenerId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for globalaccelerator resources.
 */
export class GlobalAcceleratorResources {
	/**
	 * Builds an ARN for the accelerator resource.
	 */
	static accelerator(props: GlobalAcceleratorAcceleratorArnProps): string {
		return `arn:${props.partition ?? "aws"}:globalaccelerator::${props.account ?? "*"}:accelerator/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accelerator resource.
	 */
	static isValidAcceleratorArn(arn: string): boolean {
		return AcceleratorArnRegex.test(arn);
	}

	/**
	 * Parses a accelerator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAcceleratorArn(
		arn: string,
	): GlobalAcceleratorAcceleratorArnComponents {
		const match = AcceleratorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accelerator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the attachment resource.
	 */
	static attachment(props: GlobalAcceleratorAttachmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:globalaccelerator::${props.account ?? "*"}:attachment/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the attachment resource.
	 */
	static isValidAttachmentArn(arn: string): boolean {
		return AttachmentArnRegex.test(arn);
	}

	/**
	 * Parses a attachment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAttachmentArn(
		arn: string,
	): GlobalAcceleratorAttachmentArnComponents {
		const match = AttachmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid attachment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the endpointgroup resource.
	 */
	static endpointgroup(props: GlobalAcceleratorEndpointgroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:globalaccelerator::${props.account ?? "*"}:accelerator/${props.resourceId}/listener/${props.listenerId}/endpoint-group/${props.endpointGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpointgroup resource.
	 */
	static isValidEndpointgroupArn(arn: string): boolean {
		return EndpointgroupArnRegex.test(arn);
	}

	/**
	 * Parses a endpointgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointgroupArn(
		arn: string,
	): GlobalAcceleratorEndpointgroupArnComponents {
		const match = EndpointgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpointgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
			listenerId: match.groups!.listenerId,
			endpointGroupId: match.groups!.endpointGroupId,
		};
	}

	/**
	 * Builds an ARN for the listener resource.
	 */
	static listener(props: GlobalAcceleratorListenerArnProps): string {
		return `arn:${props.partition ?? "aws"}:globalaccelerator::${props.account ?? "*"}:accelerator/${props.resourceId}/listener/${props.listenerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the listener resource.
	 */
	static isValidListenerArn(arn: string): boolean {
		return ListenerArnRegex.test(arn);
	}

	/**
	 * Parses a listener ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseListenerArn(arn: string): GlobalAcceleratorListenerArnComponents {
		const match = ListenerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid listener ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
			listenerId: match.groups!.listenerId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for globalaccelerator.
 */
export class GlobalAcceleratorOperations {
	/** IAM actions required for the AddCustomRoutingEndpoints API call. */
	static readonly AddCustomRoutingEndpoints: string[] = [
		"globalaccelerator:AddCustomRoutingEndpoints",
	];
	/** IAM actions required for the AddEndpoints API call. */
	static readonly AddEndpoints: string[] = [
		"globalaccelerator:AddEndpoints",
		"globalaccelerator:UpdateEndpointGroup",
	];
	/** IAM actions required for the AdvertiseByoipCidr API call. */
	static readonly AdvertiseByoipCidr: string[] = [
		"globalaccelerator:AdvertiseByoipCidr",
	];
	/** IAM actions required for the AllowCustomRoutingTraffic API call. */
	static readonly AllowCustomRoutingTraffic: string[] = [
		"globalaccelerator:AllowCustomRoutingTraffic",
	];
	/** IAM actions required for the CreateAccelerator API call. */
	static readonly CreateAccelerator: string[] = [
		"globalaccelerator:CreateAccelerator",
		"globalaccelerator:TagResource",
	];
	/** IAM actions required for the CreateCrossAccountAttachment API call. */
	static readonly CreateCrossAccountAttachment: string[] = [
		"globalaccelerator:CreateCrossAccountAttachment",
		"globalaccelerator:TagResource",
	];
	/** IAM actions required for the CreateCustomRoutingAccelerator API call. */
	static readonly CreateCustomRoutingAccelerator: string[] = [
		"globalaccelerator:CreateCustomRoutingAccelerator",
		"globalaccelerator:TagResource",
	];
	/** IAM actions required for the CreateCustomRoutingEndpointGroup API call. */
	static readonly CreateCustomRoutingEndpointGroup: string[] = [
		"globalaccelerator:CreateCustomRoutingEndpointGroup",
	];
	/** IAM actions required for the CreateCustomRoutingListener API call. */
	static readonly CreateCustomRoutingListener: string[] = [
		"globalaccelerator:CreateCustomRoutingListener",
	];
	/** IAM actions required for the CreateEndpointGroup API call. */
	static readonly CreateEndpointGroup: string[] = [
		"globalaccelerator:CreateEndpointGroup",
	];
	/** IAM actions required for the CreateListener API call. */
	static readonly CreateListener: string[] = [
		"globalaccelerator:CreateListener",
	];
	/** IAM actions required for the DeleteAccelerator API call. */
	static readonly DeleteAccelerator: string[] = [
		"globalaccelerator:DeleteAccelerator",
	];
	/** IAM actions required for the DeleteCrossAccountAttachment API call. */
	static readonly DeleteCrossAccountAttachment: string[] = [
		"globalaccelerator:DeleteCrossAccountAttachment",
	];
	/** IAM actions required for the DeleteCustomRoutingAccelerator API call. */
	static readonly DeleteCustomRoutingAccelerator: string[] = [
		"globalaccelerator:DeleteCustomRoutingAccelerator",
	];
	/** IAM actions required for the DeleteCustomRoutingEndpointGroup API call. */
	static readonly DeleteCustomRoutingEndpointGroup: string[] = [
		"globalaccelerator:DeleteCustomRoutingEndpointGroup",
	];
	/** IAM actions required for the DeleteCustomRoutingListener API call. */
	static readonly DeleteCustomRoutingListener: string[] = [
		"globalaccelerator:DeleteCustomRoutingListener",
	];
	/** IAM actions required for the DeleteEndpointGroup API call. */
	static readonly DeleteEndpointGroup: string[] = [
		"globalaccelerator:DeleteEndpointGroup",
	];
	/** IAM actions required for the DeleteListener API call. */
	static readonly DeleteListener: string[] = [
		"globalaccelerator:DeleteListener",
	];
	/** IAM actions required for the DenyCustomRoutingTraffic API call. */
	static readonly DenyCustomRoutingTraffic: string[] = [
		"globalaccelerator:DenyCustomRoutingTraffic",
	];
	/** IAM actions required for the DeprovisionByoipCidr API call. */
	static readonly DeprovisionByoipCidr: string[] = [
		"globalaccelerator:DeprovisionByoipCidr",
	];
	/** IAM actions required for the DescribeAccelerator API call. */
	static readonly DescribeAccelerator: string[] = [
		"globalaccelerator:DescribeAccelerator",
	];
	/** IAM actions required for the DescribeAcceleratorAttributes API call. */
	static readonly DescribeAcceleratorAttributes: string[] = [
		"globalaccelerator:DescribeAcceleratorAttributes",
	];
	/** IAM actions required for the DescribeCrossAccountAttachment API call. */
	static readonly DescribeCrossAccountAttachment: string[] = [
		"globalaccelerator:DescribeCrossAccountAttachment",
	];
	/** IAM actions required for the DescribeCustomRoutingAccelerator API call. */
	static readonly DescribeCustomRoutingAccelerator: string[] = [
		"globalaccelerator:DescribeCustomRoutingAccelerator",
	];
	/** IAM actions required for the DescribeCustomRoutingAcceleratorAttributes API call. */
	static readonly DescribeCustomRoutingAcceleratorAttributes: string[] = [
		"globalaccelerator:DescribeCustomRoutingAcceleratorAttributes",
	];
	/** IAM actions required for the DescribeCustomRoutingEndpointGroup API call. */
	static readonly DescribeCustomRoutingEndpointGroup: string[] = [
		"globalaccelerator:DescribeCustomRoutingEndpointGroup",
	];
	/** IAM actions required for the DescribeCustomRoutingListener API call. */
	static readonly DescribeCustomRoutingListener: string[] = [
		"globalaccelerator:DescribeCustomRoutingListener",
	];
	/** IAM actions required for the DescribeEndpointGroup API call. */
	static readonly DescribeEndpointGroup: string[] = [
		"globalaccelerator:DescribeEndpointGroup",
	];
	/** IAM actions required for the DescribeListener API call. */
	static readonly DescribeListener: string[] = [
		"globalaccelerator:DescribeListener",
	];
	/** IAM actions required for the ListAccelerators API call. */
	static readonly ListAccelerators: string[] = [
		"globalaccelerator:ListAccelerators",
	];
	/** IAM actions required for the ListByoipCidrs API call. */
	static readonly ListByoipCidrs: string[] = [
		"globalaccelerator:ListByoipCidrs",
	];
	/** IAM actions required for the ListCrossAccountAttachments API call. */
	static readonly ListCrossAccountAttachments: string[] = [
		"globalaccelerator:ListCrossAccountAttachments",
	];
	/** IAM actions required for the ListCrossAccountResourceAccounts API call. */
	static readonly ListCrossAccountResourceAccounts: string[] = [
		"globalaccelerator:ListCrossAccountResourceAccounts",
	];
	/** IAM actions required for the ListCrossAccountResources API call. */
	static readonly ListCrossAccountResources: string[] = [
		"globalaccelerator:ListCrossAccountResources",
	];
	/** IAM actions required for the ListCustomRoutingAccelerators API call. */
	static readonly ListCustomRoutingAccelerators: string[] = [
		"globalaccelerator:ListCustomRoutingAccelerators",
	];
	/** IAM actions required for the ListCustomRoutingEndpointGroups API call. */
	static readonly ListCustomRoutingEndpointGroups: string[] = [
		"globalaccelerator:ListCustomRoutingEndpointGroups",
	];
	/** IAM actions required for the ListCustomRoutingListeners API call. */
	static readonly ListCustomRoutingListeners: string[] = [
		"globalaccelerator:ListCustomRoutingListeners",
	];
	/** IAM actions required for the ListCustomRoutingPortMappings API call. */
	static readonly ListCustomRoutingPortMappings: string[] = [
		"globalaccelerator:ListCustomRoutingPortMappings",
	];
	/** IAM actions required for the ListCustomRoutingPortMappingsByDestination API call. */
	static readonly ListCustomRoutingPortMappingsByDestination: string[] = [
		"globalaccelerator:ListCustomRoutingPortMappingsByDestination",
	];
	/** IAM actions required for the ListEndpointGroups API call. */
	static readonly ListEndpointGroups: string[] = [
		"globalaccelerator:ListEndpointGroups",
	];
	/** IAM actions required for the ListListeners API call. */
	static readonly ListListeners: string[] = ["globalaccelerator:ListListeners"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"globalaccelerator:ListTagsForResource",
	];
	/** IAM actions required for the ProvisionByoipCidr API call. */
	static readonly ProvisionByoipCidr: string[] = [
		"globalaccelerator:ProvisionByoipCidr",
	];
	/** IAM actions required for the RemoveCustomRoutingEndpoints API call. */
	static readonly RemoveCustomRoutingEndpoints: string[] = [
		"globalaccelerator:RemoveCustomRoutingEndpoints",
	];
	/** IAM actions required for the RemoveEndpoints API call. */
	static readonly RemoveEndpoints: string[] = [
		"globalaccelerator:RemoveEndpoints",
		"globalaccelerator:UpdateEndpointGroup",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["globalaccelerator:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["globalaccelerator:UntagResource"];
	/** IAM actions required for the UpdateAccelerator API call. */
	static readonly UpdateAccelerator: string[] = [
		"globalaccelerator:UpdateAccelerator",
	];
	/** IAM actions required for the UpdateAcceleratorAttributes API call. */
	static readonly UpdateAcceleratorAttributes: string[] = [
		"globalaccelerator:UpdateAcceleratorAttributes",
	];
	/** IAM actions required for the UpdateCrossAccountAttachment API call. */
	static readonly UpdateCrossAccountAttachment: string[] = [
		"globalaccelerator:UpdateCrossAccountAttachment",
	];
	/** IAM actions required for the UpdateCustomRoutingAccelerator API call. */
	static readonly UpdateCustomRoutingAccelerator: string[] = [
		"globalaccelerator:UpdateCustomRoutingAccelerator",
	];
	/** IAM actions required for the UpdateCustomRoutingAcceleratorAttributes API call. */
	static readonly UpdateCustomRoutingAcceleratorAttributes: string[] = [
		"globalaccelerator:UpdateCustomRoutingAcceleratorAttributes",
	];
	/** IAM actions required for the UpdateCustomRoutingListener API call. */
	static readonly UpdateCustomRoutingListener: string[] = [
		"globalaccelerator:UpdateCustomRoutingListener",
	];
	/** IAM actions required for the UpdateEndpointGroup API call. */
	static readonly UpdateEndpointGroup: string[] = [
		"globalaccelerator:UpdateEndpointGroup",
	];
	/** IAM actions required for the UpdateListener API call. */
	static readonly UpdateListener: string[] = [
		"globalaccelerator:UpdateListener",
	];
	/** IAM actions required for the WithdrawByoipCidr API call. */
	static readonly WithdrawByoipCidr: string[] = [
		"globalaccelerator:WithdrawByoipCidr",
	];
}

/**
 * Condition key constants and builders for globalaccelerator.
 */
export class GlobalAcceleratorConditions {
	/** Condition keys applicable to the CreateAccelerator action. */
	static readonly CreateAcceleratorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCrossAccountAttachment action. */
	static readonly CreateCrossAccountAttachmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCustomRoutingAccelerator action. */
	static readonly CreateCustomRoutingAcceleratorConditionKeys: string[] = [
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
