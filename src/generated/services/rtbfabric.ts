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
	static readonly AcceptLink = "rtbfabric:AcceptLink";
	/** [Write] rtbfabric:AssociateCertificate */
	static readonly AssociateCertificate = "rtbfabric:AssociateCertificate";
	/** [Write] rtbfabric:CreateInboundExternalLink */
	static readonly CreateInboundExternalLink =
		"rtbfabric:CreateInboundExternalLink";
	/** [Write] rtbfabric:CreateLink */
	static readonly CreateLink = "rtbfabric:CreateLink";
	/** [Write] rtbfabric:CreateLinkRoutingRule */
	static readonly CreateLinkRoutingRule = "rtbfabric:CreateLinkRoutingRule";
	/** [Write] rtbfabric:CreateOutboundExternalLink */
	static readonly CreateOutboundExternalLink =
		"rtbfabric:CreateOutboundExternalLink";
	/** [Write] rtbfabric:CreateRequesterGateway */
	static readonly CreateRequesterGateway = "rtbfabric:CreateRequesterGateway";
	/** [Write] rtbfabric:CreateResponderGateway */
	static readonly CreateResponderGateway = "rtbfabric:CreateResponderGateway";
	/** [Write] rtbfabric:DeleteInboundExternalLink */
	static readonly DeleteInboundExternalLink =
		"rtbfabric:DeleteInboundExternalLink";
	/** [Write] rtbfabric:DeleteLink */
	static readonly DeleteLink = "rtbfabric:DeleteLink";
	/** [Write] rtbfabric:DeleteLinkRoutingRule */
	static readonly DeleteLinkRoutingRule = "rtbfabric:DeleteLinkRoutingRule";
	/** [Write] rtbfabric:DeleteOutboundExternalLink */
	static readonly DeleteOutboundExternalLink =
		"rtbfabric:DeleteOutboundExternalLink";
	/** [Write] rtbfabric:DeleteRequesterGateway */
	static readonly DeleteRequesterGateway = "rtbfabric:DeleteRequesterGateway";
	/** [Write] rtbfabric:DeleteResponderGateway */
	static readonly DeleteResponderGateway = "rtbfabric:DeleteResponderGateway";
	/** [Write] rtbfabric:DisassociateCertificate */
	static readonly DisassociateCertificate = "rtbfabric:DisassociateCertificate";
	/** [Read] rtbfabric:GetCertificateAssociation */
	static readonly actionGetCertificateAssociation =
		"rtbfabric:GetCertificateAssociation";
	/** [Read] rtbfabric:GetInboundExternalLink */
	static readonly actionGetInboundExternalLink =
		"rtbfabric:GetInboundExternalLink";
	/** [Read] rtbfabric:GetLink */
	static readonly actionGetLink = "rtbfabric:GetLink";
	/** [Read] rtbfabric:GetLinkRoutingRule */
	static readonly actionGetLinkRoutingRule = "rtbfabric:GetLinkRoutingRule";
	/** [Read] rtbfabric:GetOutboundExternalLink */
	static readonly actionGetOutboundExternalLink =
		"rtbfabric:GetOutboundExternalLink";
	/** [Read] rtbfabric:GetRequesterGateway */
	static readonly actionGetRequesterGateway = "rtbfabric:GetRequesterGateway";
	/** [Read] rtbfabric:GetResponderGateway */
	static readonly actionGetResponderGateway = "rtbfabric:GetResponderGateway";
	/** [List] rtbfabric:ListCertificateAssociations */
	static readonly ListCertificateAssociations =
		"rtbfabric:ListCertificateAssociations";
	/** [List] rtbfabric:ListLinkRoutingRules */
	static readonly ListLinkRoutingRules = "rtbfabric:ListLinkRoutingRules";
	/** [List] rtbfabric:ListLinks */
	static readonly ListLinks = "rtbfabric:ListLinks";
	/** [List] rtbfabric:ListRequesterGateways */
	static readonly ListRequesterGateways = "rtbfabric:ListRequesterGateways";
	/** [List] rtbfabric:ListResponderGateways */
	static readonly ListResponderGateways = "rtbfabric:ListResponderGateways";
	/** [Read] rtbfabric:ListTagsForResource */
	static readonly ListTagsForResource = "rtbfabric:ListTagsForResource";
	/** [Write] rtbfabric:RejectLink */
	static readonly RejectLink = "rtbfabric:RejectLink";
	/** [Tagging] rtbfabric:TagResource */
	static readonly TagResource = "rtbfabric:TagResource";
	/** [Tagging] rtbfabric:UntagResource */
	static readonly UntagResource = "rtbfabric:UntagResource";
	/** [Write] rtbfabric:UpdateLink */
	static readonly UpdateLink = "rtbfabric:UpdateLink";
	/** [Write] rtbfabric:UpdateLinkModuleFlow */
	static readonly UpdateLinkModuleFlow = "rtbfabric:UpdateLinkModuleFlow";
	/** [Write] rtbfabric:UpdateLinkRoutingRule */
	static readonly UpdateLinkRoutingRule = "rtbfabric:UpdateLinkRoutingRule";
	/** [Write] rtbfabric:UpdateRequesterGateway */
	static readonly UpdateRequesterGateway = "rtbfabric:UpdateRequesterGateway";
	/** [Write] rtbfabric:UpdateResponderGateway */
	static readonly UpdateResponderGateway = "rtbfabric:UpdateResponderGateway";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RtbfabricActions.actionGetCertificateAssociation,
		RtbfabricActions.actionGetInboundExternalLink,
		RtbfabricActions.actionGetLink,
		RtbfabricActions.actionGetLinkRoutingRule,
		RtbfabricActions.actionGetOutboundExternalLink,
		RtbfabricActions.actionGetRequesterGateway,
		RtbfabricActions.actionGetResponderGateway,
		RtbfabricActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RtbfabricActions.AcceptLink,
		RtbfabricActions.AssociateCertificate,
		RtbfabricActions.CreateInboundExternalLink,
		RtbfabricActions.CreateLink,
		RtbfabricActions.CreateLinkRoutingRule,
		RtbfabricActions.CreateOutboundExternalLink,
		RtbfabricActions.CreateRequesterGateway,
		RtbfabricActions.CreateResponderGateway,
		RtbfabricActions.DeleteInboundExternalLink,
		RtbfabricActions.DeleteLink,
		RtbfabricActions.DeleteLinkRoutingRule,
		RtbfabricActions.DeleteOutboundExternalLink,
		RtbfabricActions.DeleteRequesterGateway,
		RtbfabricActions.DeleteResponderGateway,
		RtbfabricActions.DisassociateCertificate,
		RtbfabricActions.RejectLink,
		RtbfabricActions.UpdateLink,
		RtbfabricActions.UpdateLinkModuleFlow,
		RtbfabricActions.UpdateLinkRoutingRule,
		RtbfabricActions.UpdateRequesterGateway,
		RtbfabricActions.UpdateResponderGateway,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RtbfabricActions.ListCertificateAssociations,
		RtbfabricActions.ListLinkRoutingRules,
		RtbfabricActions.ListLinks,
		RtbfabricActions.ListRequesterGateways,
		RtbfabricActions.ListResponderGateways,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RtbfabricActions.TagResource,
		RtbfabricActions.UntagResource,
	];
}

/**
 * Properties for building a InboundExternalLink ARN.
 */
export interface RtbfabricInboundExternalLinkArnProps {
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
}

/**
 * Parsed components of a InboundExternalLink ARN.
 */
export interface RtbfabricInboundExternalLinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The LinkId component. */
	readonly linkId: string;
}

/**
 * Properties for building a Link ARN.
 */
export interface RtbfabricLinkArnProps {
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
}

/**
 * Parsed components of a Link ARN.
 */
export interface RtbfabricLinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The LinkId component. */
	readonly linkId: string;
}

/**
 * Properties for building a LinkRoutingRule ARN.
 */
export interface RtbfabricLinkRoutingRuleArnProps {
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
}

/**
 * Parsed components of a LinkRoutingRule ARN.
 */
export interface RtbfabricLinkRoutingRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The LinkId component. */
	readonly linkId: string;
	/** The RuleId component. */
	readonly ruleId: string;
}

/**
 * Properties for building a OutboundExternalLink ARN.
 */
export interface RtbfabricOutboundExternalLinkArnProps {
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
}

/**
 * Parsed components of a OutboundExternalLink ARN.
 */
export interface RtbfabricOutboundExternalLinkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
	/** The LinkId component. */
	readonly linkId: string;
}

/**
 * Properties for building a RequesterGateway ARN.
 */
export interface RtbfabricRequesterGatewayArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RequesterGateway ARN.
 */
export interface RtbfabricRequesterGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
}

/**
 * Properties for building a ResponderGateway ARN.
 */
export interface RtbfabricResponderGatewayArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ResponderGateway ARN.
 */
export interface RtbfabricResponderGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
}

const InboundExternalLinkArnRegex =
	/^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)\/link\/(?<linkId>[^:/?]+)$/;
const LinkArnRegex =
	/^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)\/link\/(?<linkId>[^:/?]+)$/;
const LinkRoutingRuleArnRegex =
	/^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)\/link\/(?<linkId>[^:/?]+)\/routing-rule\/(?<ruleId>[^:/?]+)$/;
const OutboundExternalLinkArnRegex =
	/^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)\/link\/(?<linkId>[^:/?]+)$/;
const RequesterGatewayArnRegex =
	/^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)$/;
const ResponderGatewayArnRegex =
	/^arn:(?<partition>[^:]+):rtbfabric:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rtbfabric resources.
 */
export class RtbfabricResources {
	/**
	 * Builds an ARN for the InboundExternalLink resource.
	 */
	static inboundExternalLink(
		props: RtbfabricInboundExternalLinkArnProps,
	): string {
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
	static parseInboundExternalLinkArn(
		arn: string,
	): RtbfabricInboundExternalLinkArnComponents {
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
	static link(props: RtbfabricLinkArnProps): string {
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
	static parseLinkArn(arn: string): RtbfabricLinkArnComponents {
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
	static linkRoutingRule(props: RtbfabricLinkRoutingRuleArnProps): string {
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
	static parseLinkRoutingRuleArn(
		arn: string,
	): RtbfabricLinkRoutingRuleArnComponents {
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
	static outboundExternalLink(
		props: RtbfabricOutboundExternalLinkArnProps,
	): string {
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
	static parseOutboundExternalLinkArn(
		arn: string,
	): RtbfabricOutboundExternalLinkArnComponents {
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
	static requesterGateway(props: RtbfabricRequesterGatewayArnProps): string {
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
	static parseRequesterGatewayArn(
		arn: string,
	): RtbfabricRequesterGatewayArnComponents {
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
	static responderGateway(props: RtbfabricResponderGatewayArnProps): string {
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
	static parseResponderGatewayArn(
		arn: string,
	): RtbfabricResponderGatewayArnComponents {
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
	static readonly AcceptLink: string[] = ["rtbfabric:AcceptLink"];
	/** IAM actions required for the AssociateCertificate API call. */
	static readonly AssociateCertificate: string[] = [
		"rtbfabric:AssociateCertificate",
	];
	/** IAM actions required for the CreateInboundExternalLink API call. */
	static readonly CreateInboundExternalLink: string[] = [
		"rtbfabric:CreateInboundExternalLink",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateLink API call. */
	static readonly CreateLink: string[] = [
		"rtbfabric:CreateLink",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateLinkRoutingRule API call. */
	static readonly CreateLinkRoutingRule: string[] = [
		"rtbfabric:CreateLinkRoutingRule",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateOutboundExternalLink API call. */
	static readonly CreateOutboundExternalLink: string[] = [
		"rtbfabric:CreateOutboundExternalLink",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateRequesterGateway API call. */
	static readonly CreateRequesterGateway: string[] = [
		"rtbfabric:CreateRequesterGateway",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the CreateResponderGateway API call. */
	static readonly CreateResponderGateway: string[] = [
		"rtbfabric:CreateResponderGateway",
		"rtbfabric:TagResource",
	];
	/** IAM actions required for the DeleteInboundExternalLink API call. */
	static readonly DeleteInboundExternalLink: string[] = [
		"rtbfabric:DeleteInboundExternalLink",
	];
	/** IAM actions required for the DeleteLink API call. */
	static readonly DeleteLink: string[] = ["rtbfabric:DeleteLink"];
	/** IAM actions required for the DeleteLinkRoutingRule API call. */
	static readonly DeleteLinkRoutingRule: string[] = [
		"rtbfabric:DeleteLinkRoutingRule",
	];
	/** IAM actions required for the DeleteOutboundExternalLink API call. */
	static readonly DeleteOutboundExternalLink: string[] = [
		"rtbfabric:DeleteOutboundExternalLink",
	];
	/** IAM actions required for the DeleteRequesterGateway API call. */
	static readonly DeleteRequesterGateway: string[] = [
		"rtbfabric:DeleteRequesterGateway",
	];
	/** IAM actions required for the DeleteResponderGateway API call. */
	static readonly DeleteResponderGateway: string[] = [
		"rtbfabric:DeleteResponderGateway",
	];
	/** IAM actions required for the DisassociateCertificate API call. */
	static readonly DisassociateCertificate: string[] = [
		"rtbfabric:DisassociateCertificate",
	];
	/** IAM actions required for the GetCertificateAssociation API call. */
	static readonly opGetCertificateAssociation: string[] = [
		"rtbfabric:GetCertificateAssociation",
	];
	/** IAM actions required for the GetInboundExternalLink API call. */
	static readonly opGetInboundExternalLink: string[] = [
		"rtbfabric:GetInboundExternalLink",
	];
	/** IAM actions required for the GetLink API call. */
	static readonly opGetLink: string[] = ["rtbfabric:GetLink"];
	/** IAM actions required for the GetLinkRoutingRule API call. */
	static readonly opGetLinkRoutingRule: string[] = [
		"rtbfabric:GetLinkRoutingRule",
	];
	/** IAM actions required for the GetOutboundExternalLink API call. */
	static readonly opGetOutboundExternalLink: string[] = [
		"rtbfabric:GetOutboundExternalLink",
	];
	/** IAM actions required for the GetRequesterGateway API call. */
	static readonly opGetRequesterGateway: string[] = [
		"rtbfabric:GetRequesterGateway",
	];
	/** IAM actions required for the GetResponderGateway API call. */
	static readonly opGetResponderGateway: string[] = [
		"rtbfabric:GetResponderGateway",
	];
	/** IAM actions required for the ListCertificateAssociations API call. */
	static readonly ListCertificateAssociations: string[] = [
		"rtbfabric:ListCertificateAssociations",
	];
	/** IAM actions required for the ListLinkRoutingRules API call. */
	static readonly ListLinkRoutingRules: string[] = [
		"rtbfabric:ListLinkRoutingRules",
	];
	/** IAM actions required for the ListLinks API call. */
	static readonly ListLinks: string[] = ["rtbfabric:ListLinks"];
	/** IAM actions required for the ListRequesterGateways API call. */
	static readonly ListRequesterGateways: string[] = [
		"rtbfabric:ListRequesterGateways",
	];
	/** IAM actions required for the ListResponderGateways API call. */
	static readonly ListResponderGateways: string[] = [
		"rtbfabric:ListResponderGateways",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"rtbfabric:ListTagsForResource",
	];
	/** IAM actions required for the RejectLink API call. */
	static readonly RejectLink: string[] = ["rtbfabric:RejectLink"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["rtbfabric:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["rtbfabric:UntagResource"];
	/** IAM actions required for the UpdateLink API call. */
	static readonly UpdateLink: string[] = ["rtbfabric:UpdateLink"];
	/** IAM actions required for the UpdateLinkModuleFlow API call. */
	static readonly UpdateLinkModuleFlow: string[] = [
		"rtbfabric:UpdateLinkModuleFlow",
	];
	/** IAM actions required for the UpdateLinkRoutingRule API call. */
	static readonly UpdateLinkRoutingRule: string[] = [
		"rtbfabric:UpdateLinkRoutingRule",
	];
	/** IAM actions required for the UpdateRequesterGateway API call. */
	static readonly UpdateRequesterGateway: string[] = [
		"rtbfabric:UpdateRequesterGateway",
	];
	/** IAM actions required for the UpdateResponderGateway API call. */
	static readonly UpdateResponderGateway: string[] = [
		"rtbfabric:UpdateResponderGateway",
	];
}

/**
 * Condition key constants and builders for rtbfabric.
 */
export class RtbfabricConditions {
	/** Condition keys applicable to the CreateInboundExternalLink action. */
	static readonly CreateInboundExternalLinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLink action. */
	static readonly CreateLinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLinkRoutingRule action. */
	static readonly CreateLinkRoutingRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateOutboundExternalLink action. */
	static readonly CreateOutboundExternalLinkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRequesterGateway action. */
	static readonly CreateRequesterGatewayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResponderGateway action. */
	static readonly CreateResponderGatewayConditionKeys: string[] = [
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
