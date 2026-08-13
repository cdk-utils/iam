// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/managedblockchain.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the managedblockchain service.
 */
export class ManagedblockchainActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "managedblockchain";

	/** [Write] managedblockchain:CreateAccessor */
	static readonly CreateAccessor = "managedblockchain:CreateAccessor";
	/** [Write] managedblockchain:CreateMember */
	static readonly CreateMember = "managedblockchain:CreateMember";
	/** [Write] managedblockchain:CreateNetwork */
	static readonly CreateNetwork = "managedblockchain:CreateNetwork";
	/** [Write] managedblockchain:CreateNode */
	static readonly CreateNode = "managedblockchain:CreateNode";
	/** [Write] managedblockchain:CreateProposal */
	static readonly CreateProposal = "managedblockchain:CreateProposal";
	/** [Write] managedblockchain:DeleteAccessor */
	static readonly DeleteAccessor = "managedblockchain:DeleteAccessor";
	/** [Write] managedblockchain:DeleteMember */
	static readonly DeleteMember = "managedblockchain:DeleteMember";
	/** [Write] managedblockchain:DeleteNode */
	static readonly DeleteNode = "managedblockchain:DeleteNode";
	/** [PermissionManagement] managedblockchain:GET */
	static readonly GET = "managedblockchain:GET";
	/** [Read] managedblockchain:GetAccessor */
	static readonly actionGetAccessor = "managedblockchain:GetAccessor";
	/** [Read] managedblockchain:GetMember */
	static readonly actionGetMember = "managedblockchain:GetMember";
	/** [Read] managedblockchain:GetNetwork */
	static readonly actionGetNetwork = "managedblockchain:GetNetwork";
	/** [Read] managedblockchain:GetNode */
	static readonly actionGetNode = "managedblockchain:GetNode";
	/** [Read] managedblockchain:GetProposal */
	static readonly actionGetProposal = "managedblockchain:GetProposal";
	/** [PermissionManagement] managedblockchain:Invoke */
	static readonly Invoke = "managedblockchain:Invoke";
	/** [Read] managedblockchain:InvokeRpcBitcoinMainnet */
	static readonly InvokeRpcBitcoinMainnet =
		"managedblockchain:InvokeRpcBitcoinMainnet";
	/** [Read] managedblockchain:InvokeRpcBitcoinTestnet */
	static readonly InvokeRpcBitcoinTestnet =
		"managedblockchain:InvokeRpcBitcoinTestnet";
	/** [Read] managedblockchain:InvokeRpcPolygonMainnet */
	static readonly InvokeRpcPolygonMainnet =
		"managedblockchain:InvokeRpcPolygonMainnet";
	/** [Read] managedblockchain:InvokeRpcPolygonMumbaiTestnet */
	static readonly InvokeRpcPolygonMumbaiTestnet =
		"managedblockchain:InvokeRpcPolygonMumbaiTestnet";
	/** [List] managedblockchain:ListAccessors */
	static readonly ListAccessors = "managedblockchain:ListAccessors";
	/** [List] managedblockchain:ListInvitations */
	static readonly ListInvitations = "managedblockchain:ListInvitations";
	/** [List] managedblockchain:ListMembers */
	static readonly ListMembers = "managedblockchain:ListMembers";
	/** [List] managedblockchain:ListNetworks */
	static readonly ListNetworks = "managedblockchain:ListNetworks";
	/** [List] managedblockchain:ListNodes */
	static readonly ListNodes = "managedblockchain:ListNodes";
	/** [Read] managedblockchain:ListProposalVotes */
	static readonly ListProposalVotes = "managedblockchain:ListProposalVotes";
	/** [List] managedblockchain:ListProposals */
	static readonly ListProposals = "managedblockchain:ListProposals";
	/** [Read] managedblockchain:ListTagsForResource */
	static readonly ListTagsForResource = "managedblockchain:ListTagsForResource";
	/** [PermissionManagement] managedblockchain:POST */
	static readonly POST = "managedblockchain:POST";
	/** [Write] managedblockchain:RejectInvitation */
	static readonly RejectInvitation = "managedblockchain:RejectInvitation";
	/** [Tagging] managedblockchain:TagResource */
	static readonly TagResource = "managedblockchain:TagResource";
	/** [Tagging] managedblockchain:UntagResource */
	static readonly UntagResource = "managedblockchain:UntagResource";
	/** [Write] managedblockchain:UpdateMember */
	static readonly UpdateMember = "managedblockchain:UpdateMember";
	/** [Write] managedblockchain:UpdateNode */
	static readonly UpdateNode = "managedblockchain:UpdateNode";
	/** [Write] managedblockchain:VoteOnProposal */
	static readonly VoteOnProposal = "managedblockchain:VoteOnProposal";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ManagedblockchainActions.actionGetAccessor,
		ManagedblockchainActions.actionGetMember,
		ManagedblockchainActions.actionGetNetwork,
		ManagedblockchainActions.actionGetNode,
		ManagedblockchainActions.actionGetProposal,
		ManagedblockchainActions.InvokeRpcBitcoinMainnet,
		ManagedblockchainActions.InvokeRpcBitcoinTestnet,
		ManagedblockchainActions.InvokeRpcPolygonMainnet,
		ManagedblockchainActions.InvokeRpcPolygonMumbaiTestnet,
		ManagedblockchainActions.ListProposalVotes,
		ManagedblockchainActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ManagedblockchainActions.CreateAccessor,
		ManagedblockchainActions.CreateMember,
		ManagedblockchainActions.CreateNetwork,
		ManagedblockchainActions.CreateNode,
		ManagedblockchainActions.CreateProposal,
		ManagedblockchainActions.DeleteAccessor,
		ManagedblockchainActions.DeleteMember,
		ManagedblockchainActions.DeleteNode,
		ManagedblockchainActions.RejectInvitation,
		ManagedblockchainActions.UpdateMember,
		ManagedblockchainActions.UpdateNode,
		ManagedblockchainActions.VoteOnProposal,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ManagedblockchainActions.ListAccessors,
		ManagedblockchainActions.ListInvitations,
		ManagedblockchainActions.ListMembers,
		ManagedblockchainActions.ListNetworks,
		ManagedblockchainActions.ListNodes,
		ManagedblockchainActions.ListProposals,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ManagedblockchainActions.GET,
		ManagedblockchainActions.Invoke,
		ManagedblockchainActions.POST,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ManagedblockchainActions.TagResource,
		ManagedblockchainActions.UntagResource,
	];
}

/**
 * Properties for building a accessor ARN.
 */
export interface ManagedblockchainAccessorArnProps {
	/** The AccessorId component of the ARN. */
	readonly accessorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a accessor ARN.
 */
export interface ManagedblockchainAccessorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessorId component. */
	readonly accessorId: string;
}

/**
 * Properties for building a invitation ARN.
 */
export interface ManagedblockchainInvitationArnProps {
	/** The InvitationId component of the ARN. */
	readonly invitationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a invitation ARN.
 */
export interface ManagedblockchainInvitationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InvitationId component. */
	readonly invitationId: string;
}

/**
 * Properties for building a member ARN.
 */
export interface ManagedblockchainMemberArnProps {
	/** The MemberId component of the ARN. */
	readonly memberId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a member ARN.
 */
export interface ManagedblockchainMemberArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MemberId component. */
	readonly memberId: string;
}

/**
 * Properties for building a network ARN.
 */
export interface ManagedblockchainNetworkArnProps {
	/** The NetworkId component of the ARN. */
	readonly networkId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a network ARN.
 */
export interface ManagedblockchainNetworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkId component. */
	readonly networkId: string;
}

/**
 * Properties for building a node ARN.
 */
export interface ManagedblockchainNodeArnProps {
	/** The NodeId component of the ARN. */
	readonly nodeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a node ARN.
 */
export interface ManagedblockchainNodeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NodeId component. */
	readonly nodeId: string;
}

/**
 * Properties for building a proposal ARN.
 */
export interface ManagedblockchainProposalArnProps {
	/** The ProposalId component of the ARN. */
	readonly proposalId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a proposal ARN.
 */
export interface ManagedblockchainProposalArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProposalId component. */
	readonly proposalId: string;
}

const AccessorArnRegex =
	/^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):accessors\/(?<accessorId>[^:/?]+)$/;
const InvitationArnRegex =
	/^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):invitations\/(?<invitationId>[^:/?]+)$/;
const MemberArnRegex =
	/^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):members\/(?<memberId>[^:/?]+)$/;
const NetworkArnRegex =
	/^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*)::networks\/(?<networkId>[^:/?]+)$/;
const NodeArnRegex =
	/^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):nodes\/(?<nodeId>[^:/?]+)$/;
const ProposalArnRegex =
	/^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*)::proposals\/(?<proposalId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for managedblockchain resources.
 */
export class ManagedblockchainResources {
	/**
	 * Builds an ARN for the accessor resource.
	 */
	static accessor(props: ManagedblockchainAccessorArnProps): string {
		return `arn:${props.partition ?? "aws"}:managedblockchain:${props.region ?? "*"}:${props.account ?? "*"}:accessors/${props.accessorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the accessor resource.
	 */
	static isValidAccessorArn(arn: string): boolean {
		return AccessorArnRegex.test(arn);
	}

	/**
	 * Parses a accessor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessorArn(arn: string): ManagedblockchainAccessorArnComponents {
		const match = AccessorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid accessor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessorId: match.groups!.accessorId,
		};
	}

	/**
	 * Builds an ARN for the invitation resource.
	 */
	static invitation(props: ManagedblockchainInvitationArnProps): string {
		return `arn:${props.partition ?? "aws"}:managedblockchain:${props.region ?? "*"}:${props.account ?? "*"}:invitations/${props.invitationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the invitation resource.
	 */
	static isValidInvitationArn(arn: string): boolean {
		return InvitationArnRegex.test(arn);
	}

	/**
	 * Parses a invitation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInvitationArn(
		arn: string,
	): ManagedblockchainInvitationArnComponents {
		const match = InvitationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid invitation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			invitationId: match.groups!.invitationId,
		};
	}

	/**
	 * Builds an ARN for the member resource.
	 */
	static member(props: ManagedblockchainMemberArnProps): string {
		return `arn:${props.partition ?? "aws"}:managedblockchain:${props.region ?? "*"}:${props.account ?? "*"}:members/${props.memberId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the member resource.
	 */
	static isValidMemberArn(arn: string): boolean {
		return MemberArnRegex.test(arn);
	}

	/**
	 * Parses a member ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMemberArn(arn: string): ManagedblockchainMemberArnComponents {
		const match = MemberArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid member ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			memberId: match.groups!.memberId,
		};
	}

	/**
	 * Builds an ARN for the network resource.
	 */
	static network(props: ManagedblockchainNetworkArnProps): string {
		return `arn:${props.partition ?? "aws"}:managedblockchain:${props.region ?? "*"}::networks/${props.networkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network resource.
	 */
	static isValidNetworkArn(arn: string): boolean {
		return NetworkArnRegex.test(arn);
	}

	/**
	 * Parses a network ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkArn(arn: string): ManagedblockchainNetworkArnComponents {
		const match = NetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkId: match.groups!.networkId,
		};
	}

	/**
	 * Builds an ARN for the node resource.
	 */
	static node(props: ManagedblockchainNodeArnProps): string {
		return `arn:${props.partition ?? "aws"}:managedblockchain:${props.region ?? "*"}:${props.account ?? "*"}:nodes/${props.nodeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the node resource.
	 */
	static isValidNodeArn(arn: string): boolean {
		return NodeArnRegex.test(arn);
	}

	/**
	 * Parses a node ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNodeArn(arn: string): ManagedblockchainNodeArnComponents {
		const match = NodeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid node ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			nodeId: match.groups!.nodeId,
		};
	}

	/**
	 * Builds an ARN for the proposal resource.
	 */
	static proposal(props: ManagedblockchainProposalArnProps): string {
		return `arn:${props.partition ?? "aws"}:managedblockchain:${props.region ?? "*"}::proposals/${props.proposalId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the proposal resource.
	 */
	static isValidProposalArn(arn: string): boolean {
		return ProposalArnRegex.test(arn);
	}

	/**
	 * Parses a proposal ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProposalArn(arn: string): ManagedblockchainProposalArnComponents {
		const match = ProposalArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid proposal ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			proposalId: match.groups!.proposalId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for managedblockchain.
 */
export class ManagedblockchainOperations {
	/** IAM actions required for the CreateAccessor API call. */
	static readonly CreateAccessor: string[] = [
		"managedblockchain:CreateAccessor",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateMember API call. */
	static readonly CreateMember: string[] = [
		"managedblockchain:CreateMember",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateNetwork API call. */
	static readonly CreateNetwork: string[] = [
		"managedblockchain:CreateNetwork",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateNode API call. */
	static readonly CreateNode: string[] = [
		"managedblockchain:CreateNode",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateProposal API call. */
	static readonly CreateProposal: string[] = [
		"managedblockchain:CreateProposal",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the DeleteAccessor API call. */
	static readonly DeleteAccessor: string[] = [
		"managedblockchain:DeleteAccessor",
	];
	/** IAM actions required for the DeleteMember API call. */
	static readonly DeleteMember: string[] = ["managedblockchain:DeleteMember"];
	/** IAM actions required for the DeleteNode API call. */
	static readonly DeleteNode: string[] = ["managedblockchain:DeleteNode"];
	/** IAM actions required for the GetAccessor API call. */
	static readonly opGetAccessor: string[] = ["managedblockchain:GetAccessor"];
	/** IAM actions required for the GetMember API call. */
	static readonly opGetMember: string[] = ["managedblockchain:GetMember"];
	/** IAM actions required for the GetNetwork API call. */
	static readonly opGetNetwork: string[] = ["managedblockchain:GetNetwork"];
	/** IAM actions required for the GetNode API call. */
	static readonly opGetNode: string[] = ["managedblockchain:GetNode"];
	/** IAM actions required for the GetProposal API call. */
	static readonly opGetProposal: string[] = ["managedblockchain:GetProposal"];
	/** IAM actions required for the ListAccessors API call. */
	static readonly ListAccessors: string[] = ["managedblockchain:ListAccessors"];
	/** IAM actions required for the ListInvitations API call. */
	static readonly ListInvitations: string[] = [
		"managedblockchain:ListInvitations",
	];
	/** IAM actions required for the ListMembers API call. */
	static readonly ListMembers: string[] = ["managedblockchain:ListMembers"];
	/** IAM actions required for the ListNetworks API call. */
	static readonly ListNetworks: string[] = ["managedblockchain:ListNetworks"];
	/** IAM actions required for the ListNodes API call. */
	static readonly ListNodes: string[] = ["managedblockchain:ListNodes"];
	/** IAM actions required for the ListProposalVotes API call. */
	static readonly ListProposalVotes: string[] = [
		"managedblockchain:ListProposalVotes",
	];
	/** IAM actions required for the ListProposals API call. */
	static readonly ListProposals: string[] = ["managedblockchain:ListProposals"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"managedblockchain:ListTagsForResource",
	];
	/** IAM actions required for the RejectInvitation API call. */
	static readonly RejectInvitation: string[] = [
		"managedblockchain:RejectInvitation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["managedblockchain:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["managedblockchain:UntagResource"];
	/** IAM actions required for the UpdateMember API call. */
	static readonly UpdateMember: string[] = ["managedblockchain:UpdateMember"];
	/** IAM actions required for the UpdateNode API call. */
	static readonly UpdateNode: string[] = ["managedblockchain:UpdateNode"];
	/** IAM actions required for the VoteOnProposal API call. */
	static readonly VoteOnProposal: string[] = [
		"managedblockchain:VoteOnProposal",
	];
}

/**
 * Condition key constants and builders for managedblockchain.
 */
export class ManagedblockchainConditions {
	/** Condition keys applicable to the CreateAccessor action. */
	static readonly CreateAccessorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMember action. */
	static readonly CreateMemberConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetwork action. */
	static readonly CreateNetworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNode action. */
	static readonly CreateNodeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProposal action. */
	static readonly CreateProposalConditionKeys: string[] = [
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
