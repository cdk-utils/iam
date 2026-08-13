// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rtbfabric.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rtbfabric service.
 */
export class RtbfabricActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rtbfabric";

	/** [Write] rtbfabric:AcceptLink */
	static readonly ACCEPT_LINK = "rtbfabric:AcceptLink";
	/** [Write] rtbfabric:AssociateCertificate */
	static readonly ASSOCIATE_CERTIFICATE = "rtbfabric:AssociateCertificate";
	/** [Write] rtbfabric:CreateInboundExternalLink */
	static readonly CREATE_INBOUND_EXTERNAL_LINK =
		"rtbfabric:CreateInboundExternalLink";
	/** [Write] rtbfabric:CreateLink */
	static readonly CREATE_LINK = "rtbfabric:CreateLink";
	/** [Write] rtbfabric:CreateLinkRoutingRule */
	static readonly CREATE_LINK_ROUTING_RULE = "rtbfabric:CreateLinkRoutingRule";
	/** [Write] rtbfabric:CreateOutboundExternalLink */
	static readonly CREATE_OUTBOUND_EXTERNAL_LINK =
		"rtbfabric:CreateOutboundExternalLink";
	/** [Write] rtbfabric:CreateRequesterGateway */
	static readonly CREATE_REQUESTER_GATEWAY = "rtbfabric:CreateRequesterGateway";
	/** [Write] rtbfabric:CreateResponderGateway */
	static readonly CREATE_RESPONDER_GATEWAY = "rtbfabric:CreateResponderGateway";
	/** [Write] rtbfabric:DeleteInboundExternalLink */
	static readonly DELETE_INBOUND_EXTERNAL_LINK =
		"rtbfabric:DeleteInboundExternalLink";
	/** [Write] rtbfabric:DeleteLink */
	static readonly DELETE_LINK = "rtbfabric:DeleteLink";
	/** [Write] rtbfabric:DeleteLinkRoutingRule */
	static readonly DELETE_LINK_ROUTING_RULE = "rtbfabric:DeleteLinkRoutingRule";
	/** [Write] rtbfabric:DeleteOutboundExternalLink */
	static readonly DELETE_OUTBOUND_EXTERNAL_LINK =
		"rtbfabric:DeleteOutboundExternalLink";
	/** [Write] rtbfabric:DeleteRequesterGateway */
	static readonly DELETE_REQUESTER_GATEWAY = "rtbfabric:DeleteRequesterGateway";
	/** [Write] rtbfabric:DeleteResponderGateway */
	static readonly DELETE_RESPONDER_GATEWAY = "rtbfabric:DeleteResponderGateway";
	/** [Write] rtbfabric:DisassociateCertificate */
	static readonly DISASSOCIATE_CERTIFICATE =
		"rtbfabric:DisassociateCertificate";
	/** [Read] rtbfabric:GetCertificateAssociation */
	static readonly GET_CERTIFICATE_ASSOCIATION =
		"rtbfabric:GetCertificateAssociation";
	/** [Read] rtbfabric:GetInboundExternalLink */
	static readonly GET_INBOUND_EXTERNAL_LINK =
		"rtbfabric:GetInboundExternalLink";
	/** [Read] rtbfabric:GetLink */
	static readonly GET_LINK = "rtbfabric:GetLink";
	/** [Read] rtbfabric:GetLinkRoutingRule */
	static readonly GET_LINK_ROUTING_RULE = "rtbfabric:GetLinkRoutingRule";
	/** [Read] rtbfabric:GetOutboundExternalLink */
	static readonly GET_OUTBOUND_EXTERNAL_LINK =
		"rtbfabric:GetOutboundExternalLink";
	/** [Read] rtbfabric:GetRequesterGateway */
	static readonly GET_REQUESTER_GATEWAY = "rtbfabric:GetRequesterGateway";
	/** [Read] rtbfabric:GetResponderGateway */
	static readonly GET_RESPONDER_GATEWAY = "rtbfabric:GetResponderGateway";
	/** [List] rtbfabric:ListCertificateAssociations */
	static readonly LIST_CERTIFICATE_ASSOCIATIONS =
		"rtbfabric:ListCertificateAssociations";
	/** [List] rtbfabric:ListLinkRoutingRules */
	static readonly LIST_LINK_ROUTING_RULES = "rtbfabric:ListLinkRoutingRules";
	/** [List] rtbfabric:ListLinks */
	static readonly LIST_LINKS = "rtbfabric:ListLinks";
	/** [List] rtbfabric:ListRequesterGateways */
	static readonly LIST_REQUESTER_GATEWAYS = "rtbfabric:ListRequesterGateways";
	/** [List] rtbfabric:ListResponderGateways */
	static readonly LIST_RESPONDER_GATEWAYS = "rtbfabric:ListResponderGateways";
	/** [Read] rtbfabric:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "rtbfabric:ListTagsForResource";
	/** [Write] rtbfabric:RejectLink */
	static readonly REJECT_LINK = "rtbfabric:RejectLink";
	/** [Tagging] rtbfabric:TagResource */
	static readonly TAG_RESOURCE = "rtbfabric:TagResource";
	/** [Tagging] rtbfabric:UntagResource */
	static readonly UNTAG_RESOURCE = "rtbfabric:UntagResource";
	/** [Write] rtbfabric:UpdateLink */
	static readonly UPDATE_LINK = "rtbfabric:UpdateLink";
	/** [Write] rtbfabric:UpdateLinkModuleFlow */
	static readonly UPDATE_LINK_MODULE_FLOW = "rtbfabric:UpdateLinkModuleFlow";
	/** [Write] rtbfabric:UpdateLinkRoutingRule */
	static readonly UPDATE_LINK_ROUTING_RULE = "rtbfabric:UpdateLinkRoutingRule";
	/** [Write] rtbfabric:UpdateRequesterGateway */
	static readonly UPDATE_REQUESTER_GATEWAY = "rtbfabric:UpdateRequesterGateway";
	/** [Write] rtbfabric:UpdateResponderGateway */
	static readonly UPDATE_RESPONDER_GATEWAY = "rtbfabric:UpdateResponderGateway";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RtbfabricActions.GET_CERTIFICATE_ASSOCIATION,
		RtbfabricActions.GET_INBOUND_EXTERNAL_LINK,
		RtbfabricActions.GET_LINK,
		RtbfabricActions.GET_LINK_ROUTING_RULE,
		RtbfabricActions.GET_OUTBOUND_EXTERNAL_LINK,
		RtbfabricActions.GET_REQUESTER_GATEWAY,
		RtbfabricActions.GET_RESPONDER_GATEWAY,
		RtbfabricActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RtbfabricActions.ACCEPT_LINK,
		RtbfabricActions.ASSOCIATE_CERTIFICATE,
		RtbfabricActions.CREATE_INBOUND_EXTERNAL_LINK,
		RtbfabricActions.CREATE_LINK,
		RtbfabricActions.CREATE_LINK_ROUTING_RULE,
		RtbfabricActions.CREATE_OUTBOUND_EXTERNAL_LINK,
		RtbfabricActions.CREATE_REQUESTER_GATEWAY,
		RtbfabricActions.CREATE_RESPONDER_GATEWAY,
		RtbfabricActions.DELETE_INBOUND_EXTERNAL_LINK,
		RtbfabricActions.DELETE_LINK,
		RtbfabricActions.DELETE_LINK_ROUTING_RULE,
		RtbfabricActions.DELETE_OUTBOUND_EXTERNAL_LINK,
		RtbfabricActions.DELETE_REQUESTER_GATEWAY,
		RtbfabricActions.DELETE_RESPONDER_GATEWAY,
		RtbfabricActions.DISASSOCIATE_CERTIFICATE,
		RtbfabricActions.REJECT_LINK,
		RtbfabricActions.UPDATE_LINK,
		RtbfabricActions.UPDATE_LINK_MODULE_FLOW,
		RtbfabricActions.UPDATE_LINK_ROUTING_RULE,
		RtbfabricActions.UPDATE_REQUESTER_GATEWAY,
		RtbfabricActions.UPDATE_RESPONDER_GATEWAY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RtbfabricActions.LIST_CERTIFICATE_ASSOCIATIONS,
		RtbfabricActions.LIST_LINK_ROUTING_RULES,
		RtbfabricActions.LIST_LINKS,
		RtbfabricActions.LIST_REQUESTER_GATEWAYS,
		RtbfabricActions.LIST_RESPONDER_GATEWAYS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RtbfabricActions.TAG_RESOURCE,
		RtbfabricActions.UNTAG_RESOURCE,
	];
}

const InboundExternalLinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)/link/(?<linkId>[^:/?]+)$",
);
const LinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)/link/(?<linkId>[^:/?]+)$",
);
const LinkRoutingRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)/link/(?<linkId>[^:/?]+)/routing-rule/(?<ruleId>[^:/?]+)$",
);
const OutboundExternalLinkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)/link/(?<linkId>[^:/?]+)$",
);
const RequesterGatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)$",
);
const ResponderGatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for rtbfabric resources.
 */
export class RtbfabricResources {
	/**
	 * Builds an ARN for the InboundExternalLink resource.
	 */
	static inboundExternalLink(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** The LinkId component of the ARN. */
		readonly linkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rtbfabric:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}/link/${props.linkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the InboundExternalLink resource.
	 */
	static isValidInboundExternalLinkArn(arn: string): boolean {
		return InboundExternalLinkArnRegex.test(arn);
	}

	/**
	 * Parses a InboundExternalLink ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInboundExternalLinkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		linkId: string;
	} {
		const match = InboundExternalLinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid InboundExternalLink ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			linkId: match.groups!.linkId,
		};
	}

	/**
	 * Builds an ARN for the Link resource.
	 */
	static link(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** The LinkId component of the ARN. */
		readonly linkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rtbfabric:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}/link/${props.linkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Link resource.
	 */
	static isValidLinkArn(arn: string): boolean {
		return LinkArnRegex.test(arn);
	}

	/**
	 * Parses a Link ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLinkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		linkId: string;
	} {
		const match = LinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Link ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			linkId: match.groups!.linkId,
		};
	}

	/**
	 * Builds an ARN for the LinkRoutingRule resource.
	 */
	static linkRoutingRule(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** The LinkId component of the ARN. */
		readonly linkId: string;
		/** The RuleId component of the ARN. */
		readonly ruleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rtbfabric:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}/link/${props.linkId}/routing-rule/${props.ruleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the LinkRoutingRule resource.
	 */
	static isValidLinkRoutingRuleArn(arn: string): boolean {
		return LinkRoutingRuleArnRegex.test(arn);
	}

	/**
	 * Parses a LinkRoutingRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLinkRoutingRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		linkId: string;
		ruleId: string;
	} {
		const match = LinkRoutingRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid LinkRoutingRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			linkId: match.groups!.linkId,
			ruleId: match.groups!.ruleId,
		};
	}

	/**
	 * Builds an ARN for the OutboundExternalLink resource.
	 */
	static outboundExternalLink(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** The LinkId component of the ARN. */
		readonly linkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rtbfabric:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}/link/${props.linkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OutboundExternalLink resource.
	 */
	static isValidOutboundExternalLinkArn(arn: string): boolean {
		return OutboundExternalLinkArnRegex.test(arn);
	}

	/**
	 * Parses a OutboundExternalLink ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOutboundExternalLinkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
		linkId: string;
	} {
		const match = OutboundExternalLinkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OutboundExternalLink ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
			linkId: match.groups!.linkId,
		};
	}

	/**
	 * Builds an ARN for the RequesterGateway resource.
	 */
	static requesterGateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rtbfabric:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RequesterGateway resource.
	 */
	static isValidRequesterGatewayArn(arn: string): boolean {
		return RequesterGatewayArnRegex.test(arn);
	}

	/**
	 * Parses a RequesterGateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRequesterGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
	} {
		const match = RequesterGatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RequesterGateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
		};
	}

	/**
	 * Builds an ARN for the ResponderGateway resource.
	 */
	static responderGateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rtbfabric:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ResponderGateway resource.
	 */
	static isValidResponderGatewayArn(arn: string): boolean {
		return ResponderGatewayArnRegex.test(arn);
	}

	/**
	 * Parses a ResponderGateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResponderGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
	} {
		const match = ResponderGatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ResponderGateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for rtbfabric.
 */
export class RtbfabricOperations {
	/** IAM actions required for the AcceptLink API call. */
	static readonly ACCEPT_LINK: string[] = ["rtbfabric:AcceptLink"];
	/** IAM actions required for the AssociateCertificate API call. */
	static readonly ASSOCIATE_CERTIFICATE: string[] = [
		"rtbfabric:AssociateCertificate",
	];
	/** IAM actions required for the CreateInboundExternalLink API call. */
	static readonly CREATE_INBOUND_EXTERNAL_LINK: string[] = [
		"rtbfabric:CreateInboundExternalLink",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateLink API call. */
	static readonly CREATE_LINK: string[] = [
		"rtbfabric:CreateLink",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateLinkRoutingRule API call. */
	static readonly CREATE_LINK_ROUTING_RULE: string[] = [
		"rtbfabric:CreateLinkRoutingRule",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateOutboundExternalLink API call. */
	static readonly CREATE_OUTBOUND_EXTERNAL_LINK: string[] = [
		"rtbfabric:CreateOutboundExternalLink",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateRequesterGateway API call. */
	static readonly CREATE_REQUESTER_GATEWAY: string[] = [
		"rtbfabric:CreateRequesterGateway",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateResponderGateway API call. */
	static readonly CREATE_RESPONDER_GATEWAY: string[] = [
		"rtbfabric:CreateResponderGateway",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the DeleteInboundExternalLink API call. */
	static readonly DELETE_INBOUND_EXTERNAL_LINK: string[] = [
		"rtbfabric:DeleteInboundExternalLink",
	];
	/** IAM actions required for the DeleteLink API call. */
	static readonly DELETE_LINK: string[] = ["rtbfabric:DeleteLink"];
	/** IAM actions required for the DeleteLinkRoutingRule API call. */
	static readonly DELETE_LINK_ROUTING_RULE: string[] = [
		"rtbfabric:DeleteLinkRoutingRule",
	];
	/** IAM actions required for the DeleteOutboundExternalLink API call. */
	static readonly DELETE_OUTBOUND_EXTERNAL_LINK: string[] = [
		"rtbfabric:DeleteOutboundExternalLink",
	];
	/** IAM actions required for the DeleteRequesterGateway API call. */
	static readonly DELETE_REQUESTER_GATEWAY: string[] = [
		"rtbfabric:DeleteRequesterGateway",
	];
	/** IAM actions required for the DeleteResponderGateway API call. */
	static readonly DELETE_RESPONDER_GATEWAY: string[] = [
		"rtbfabric:DeleteResponderGateway",
	];
	/** IAM actions required for the DisassociateCertificate API call. */
	static readonly DISASSOCIATE_CERTIFICATE: string[] = [
		"rtbfabric:DisassociateCertificate",
	];
	/** IAM actions required for the GetCertificateAssociation API call. */
	static readonly GET_CERTIFICATE_ASSOCIATION: string[] = [
		"rtbfabric:GetCertificateAssociation",
	];
	/** IAM actions required for the GetInboundExternalLink API call. */
	static readonly GET_INBOUND_EXTERNAL_LINK: string[] = [
		"rtbfabric:GetInboundExternalLink",
	];
	/** IAM actions required for the GetLink API call. */
	static readonly GET_LINK: string[] = ["rtbfabric:GetLink"];
	/** IAM actions required for the GetLinkRoutingRule API call. */
	static readonly GET_LINK_ROUTING_RULE: string[] = [
		"rtbfabric:GetLinkRoutingRule",
	];
	/** IAM actions required for the GetOutboundExternalLink API call. */
	static readonly GET_OUTBOUND_EXTERNAL_LINK: string[] = [
		"rtbfabric:GetOutboundExternalLink",
	];
	/** IAM actions required for the GetRequesterGateway API call. */
	static readonly GET_REQUESTER_GATEWAY: string[] = [
		"rtbfabric:GetRequesterGateway",
	];
	/** IAM actions required for the GetResponderGateway API call. */
	static readonly GET_RESPONDER_GATEWAY: string[] = [
		"rtbfabric:GetResponderGateway",
	];
	/** IAM actions required for the ListCertificateAssociations API call. */
	static readonly LIST_CERTIFICATE_ASSOCIATIONS: string[] = [
		"rtbfabric:ListCertificateAssociations",
	];
	/** IAM actions required for the ListLinkRoutingRules API call. */
	static readonly LIST_LINK_ROUTING_RULES: string[] = [
		"rtbfabric:ListLinkRoutingRules",
	];
	/** IAM actions required for the ListLinks API call. */
	static readonly LIST_LINKS: string[] = ["rtbfabric:ListLinks"];
	/** IAM actions required for the ListRequesterGateways API call. */
	static readonly LIST_REQUESTER_GATEWAYS: string[] = [
		"rtbfabric:ListRequesterGateways",
	];
	/** IAM actions required for the ListResponderGateways API call. */
	static readonly LIST_RESPONDER_GATEWAYS: string[] = [
		"rtbfabric:ListResponderGateways",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"rtbfabric:ListTagsForResource",
	];
	/** IAM actions required for the RejectLink API call. */
	static readonly REJECT_LINK: string[] = ["rtbfabric:RejectLink"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["rtbfabric:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["rtbfabric:UntagResource"];
	/** IAM actions required for the UpdateLink API call. */
	static readonly UPDATE_LINK: string[] = ["rtbfabric:UpdateLink"];
	/** IAM actions required for the UpdateLinkModuleFlow API call. */
	static readonly UPDATE_LINK_MODULE_FLOW: string[] = [
		"rtbfabric:UpdateLinkModuleFlow",
	];
	/** IAM actions required for the UpdateLinkRoutingRule API call. */
	static readonly UPDATE_LINK_ROUTING_RULE: string[] = [
		"rtbfabric:UpdateLinkRoutingRule",
	];
	/** IAM actions required for the UpdateRequesterGateway API call. */
	static readonly UPDATE_REQUESTER_GATEWAY: string[] = [
		"rtbfabric:UpdateRequesterGateway",
	];
	/** IAM actions required for the UpdateResponderGateway API call. */
	static readonly UPDATE_RESPONDER_GATEWAY: string[] = [
		"rtbfabric:UpdateResponderGateway",
	];
}

/**
 * Condition key constants and builders for rtbfabric.
 */
export class RtbfabricConditions {
	/** Condition keys applicable to the CreateInboundExternalLink action. */
	static readonly CREATE_INBOUND_EXTERNAL_LINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLink action. */
	static readonly CREATE_LINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLinkRoutingRule action. */
	static readonly CREATE_LINK_ROUTING_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOutboundExternalLink action. */
	static readonly CREATE_OUTBOUND_EXTERNAL_LINK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRequesterGateway action. */
	static readonly CREATE_REQUESTER_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResponderGateway action. */
	static readonly CREATE_RESPONDER_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
	/** Condition key: rtbfabric:InboundExternalLinkGatewayId (String) */
	static readonly INBOUND_EXTERNAL_LINK_GATEWAY_ID =
		"rtbfabric:InboundExternalLinkGatewayId";
	/** Condition key: rtbfabric:InboundExternalLinkLinkId (String) */
	static readonly INBOUND_EXTERNAL_LINK_LINK_ID =
		"rtbfabric:InboundExternalLinkLinkId";
	/** Condition key: rtbfabric:LinkLinkId (String) */
	static readonly LINK_LINK_ID = "rtbfabric:LinkLinkId";
	/** Condition key: rtbfabric:LinkRoutingRuleRuleId (String) */
	static readonly LINK_ROUTING_RULE_RULE_ID = "rtbfabric:LinkRoutingRuleRuleId";
	/** Condition key: rtbfabric:OutboundExternalLinkLinkId (String) */
	static readonly OUTBOUND_EXTERNAL_LINK_LINK_ID =
		"rtbfabric:OutboundExternalLinkLinkId";
	/** Condition key: rtbfabric:RequesterGatewayGatewayId (String) */
	static readonly REQUESTER_GATEWAY_GATEWAY_ID =
		"rtbfabric:RequesterGatewayGatewayId";
	/** Condition key: rtbfabric:ResponderGatewayGatewayId (String) */
	static readonly RESPONDER_GATEWAY_GATEWAY_ID =
		"rtbfabric:ResponderGatewayGatewayId";

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
	 * Generates a condition block for `rtbfabric:InboundExternalLinkGatewayId`.
	 */
	static inboundExternalLinkGatewayId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "rtbfabric:InboundExternalLinkGatewayId": value },
		};
	}

	/**
	 * Generates a condition block for `rtbfabric:InboundExternalLinkLinkId`.
	 */
	static inboundExternalLinkLinkId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rtbfabric:InboundExternalLinkLinkId": value } };
	}

	/**
	 * Generates a condition block for `rtbfabric:LinkLinkId`.
	 */
	static linkLinkId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "rtbfabric:LinkLinkId": value } };
	}

	/**
	 * Generates a condition block for `rtbfabric:LinkRoutingRuleRuleId`.
	 */
	static linkRoutingRuleRuleId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rtbfabric:LinkRoutingRuleRuleId": value } };
	}

	/**
	 * Generates a condition block for `rtbfabric:OutboundExternalLinkLinkId`.
	 */
	static outboundExternalLinkLinkId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rtbfabric:OutboundExternalLinkLinkId": value } };
	}

	/**
	 * Generates a condition block for `rtbfabric:RequesterGatewayGatewayId`.
	 */
	static requesterGatewayGatewayId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rtbfabric:RequesterGatewayGatewayId": value } };
	}

	/**
	 * Generates a condition block for `rtbfabric:ResponderGatewayGatewayId`.
	 */
	static responderGatewayGatewayId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "rtbfabric:ResponderGatewayGatewayId": value } };
	}
}
