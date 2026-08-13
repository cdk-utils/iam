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
	static readonly CREATE_ACCESSOR = "managedblockchain:CreateAccessor";
	/** [Write] managedblockchain:CreateMember */
	static readonly CREATE_MEMBER = "managedblockchain:CreateMember";
	/** [Write] managedblockchain:CreateNetwork */
	static readonly CREATE_NETWORK = "managedblockchain:CreateNetwork";
	/** [Write] managedblockchain:CreateNode */
	static readonly CREATE_NODE = "managedblockchain:CreateNode";
	/** [Write] managedblockchain:CreateProposal */
	static readonly CREATE_PROPOSAL = "managedblockchain:CreateProposal";
	/** [Write] managedblockchain:DeleteAccessor */
	static readonly DELETE_ACCESSOR = "managedblockchain:DeleteAccessor";
	/** [Write] managedblockchain:DeleteMember */
	static readonly DELETE_MEMBER = "managedblockchain:DeleteMember";
	/** [Write] managedblockchain:DeleteNode */
	static readonly DELETE_NODE = "managedblockchain:DeleteNode";
	/** [PermissionManagement] managedblockchain:GET */
	static readonly GET = "managedblockchain:GET";
	/** [Read] managedblockchain:GetAccessor */
	static readonly GET_ACCESSOR = "managedblockchain:GetAccessor";
	/** [Read] managedblockchain:GetMember */
	static readonly GET_MEMBER = "managedblockchain:GetMember";
	/** [Read] managedblockchain:GetNetwork */
	static readonly GET_NETWORK = "managedblockchain:GetNetwork";
	/** [Read] managedblockchain:GetNode */
	static readonly GET_NODE = "managedblockchain:GetNode";
	/** [Read] managedblockchain:GetProposal */
	static readonly GET_PROPOSAL = "managedblockchain:GetProposal";
	/** [PermissionManagement] managedblockchain:Invoke */
	static readonly INVOKE = "managedblockchain:Invoke";
	/** [Read] managedblockchain:InvokeRpcBitcoinMainnet */
	static readonly INVOKE_RPC_BITCOIN_MAINNET =
		"managedblockchain:InvokeRpcBitcoinMainnet";
	/** [Read] managedblockchain:InvokeRpcBitcoinTestnet */
	static readonly INVOKE_RPC_BITCOIN_TESTNET =
		"managedblockchain:InvokeRpcBitcoinTestnet";
	/** [Read] managedblockchain:InvokeRpcPolygonMainnet */
	static readonly INVOKE_RPC_POLYGON_MAINNET =
		"managedblockchain:InvokeRpcPolygonMainnet";
	/** [Read] managedblockchain:InvokeRpcPolygonMumbaiTestnet */
	static readonly INVOKE_RPC_POLYGON_MUMBAI_TESTNET =
		"managedblockchain:InvokeRpcPolygonMumbaiTestnet";
	/** [List] managedblockchain:ListAccessors */
	static readonly LIST_ACCESSORS = "managedblockchain:ListAccessors";
	/** [List] managedblockchain:ListInvitations */
	static readonly LIST_INVITATIONS = "managedblockchain:ListInvitations";
	/** [List] managedblockchain:ListMembers */
	static readonly LIST_MEMBERS = "managedblockchain:ListMembers";
	/** [List] managedblockchain:ListNetworks */
	static readonly LIST_NETWORKS = "managedblockchain:ListNetworks";
	/** [List] managedblockchain:ListNodes */
	static readonly LIST_NODES = "managedblockchain:ListNodes";
	/** [Read] managedblockchain:ListProposalVotes */
	static readonly LIST_PROPOSAL_VOTES = "managedblockchain:ListProposalVotes";
	/** [List] managedblockchain:ListProposals */
	static readonly LIST_PROPOSALS = "managedblockchain:ListProposals";
	/** [Read] managedblockchain:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"managedblockchain:ListTagsForResource";
	/** [PermissionManagement] managedblockchain:POST */
	static readonly POST = "managedblockchain:POST";
	/** [Write] managedblockchain:RejectInvitation */
	static readonly REJECT_INVITATION = "managedblockchain:RejectInvitation";
	/** [Tagging] managedblockchain:TagResource */
	static readonly TAG_RESOURCE = "managedblockchain:TagResource";
	/** [Tagging] managedblockchain:UntagResource */
	static readonly UNTAG_RESOURCE = "managedblockchain:UntagResource";
	/** [Write] managedblockchain:UpdateMember */
	static readonly UPDATE_MEMBER = "managedblockchain:UpdateMember";
	/** [Write] managedblockchain:UpdateNode */
	static readonly UPDATE_NODE = "managedblockchain:UpdateNode";
	/** [Write] managedblockchain:VoteOnProposal */
	static readonly VOTE_ON_PROPOSAL = "managedblockchain:VoteOnProposal";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ManagedblockchainActions.GET_ACCESSOR,
		ManagedblockchainActions.GET_MEMBER,
		ManagedblockchainActions.GET_NETWORK,
		ManagedblockchainActions.GET_NODE,
		ManagedblockchainActions.GET_PROPOSAL,
		ManagedblockchainActions.INVOKE_RPC_BITCOIN_MAINNET,
		ManagedblockchainActions.INVOKE_RPC_BITCOIN_TESTNET,
		ManagedblockchainActions.INVOKE_RPC_POLYGON_MAINNET,
		ManagedblockchainActions.INVOKE_RPC_POLYGON_MUMBAI_TESTNET,
		ManagedblockchainActions.LIST_PROPOSAL_VOTES,
		ManagedblockchainActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ManagedblockchainActions.CREATE_ACCESSOR,
		ManagedblockchainActions.CREATE_MEMBER,
		ManagedblockchainActions.CREATE_NETWORK,
		ManagedblockchainActions.CREATE_NODE,
		ManagedblockchainActions.CREATE_PROPOSAL,
		ManagedblockchainActions.DELETE_ACCESSOR,
		ManagedblockchainActions.DELETE_MEMBER,
		ManagedblockchainActions.DELETE_NODE,
		ManagedblockchainActions.REJECT_INVITATION,
		ManagedblockchainActions.UPDATE_MEMBER,
		ManagedblockchainActions.UPDATE_NODE,
		ManagedblockchainActions.VOTE_ON_PROPOSAL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ManagedblockchainActions.LIST_ACCESSORS,
		ManagedblockchainActions.LIST_INVITATIONS,
		ManagedblockchainActions.LIST_MEMBERS,
		ManagedblockchainActions.LIST_NETWORKS,
		ManagedblockchainActions.LIST_NODES,
		ManagedblockchainActions.LIST_PROPOSALS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		ManagedblockchainActions.GET,
		ManagedblockchainActions.INVOKE,
		ManagedblockchainActions.POST,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ManagedblockchainActions.TAG_RESOURCE,
		ManagedblockchainActions.UNTAG_RESOURCE,
	];
}

const AccessorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):accessors/(?<accessorId>[^:/?]+)$",
);
const InvitationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):invitations/(?<invitationId>[^:/?]+)$",
);
const MemberArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):members/(?<memberId>[^:/?]+)$",
);
const NetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*)::networks/(?<networkId>[^:/?]+)$",
);
const NodeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*):(?<account>[^:]*):nodes/(?<nodeId>[^:/?]+)$",
);
const ProposalArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):managedblockchain:(?<region>[^:]*)::proposals/(?<proposalId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for managedblockchain resources.
 */
export class ManagedblockchainResources {
	/**
	 * Builds an ARN for the accessor resource.
	 */
	static accessor(props: {
		/** The AccessorId component of the ARN. */
		readonly accessorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAccessorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessorId: string;
	} {
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
	static invitation(props: {
		/** The InvitationId component of the ARN. */
		readonly invitationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseInvitationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		invitationId: string;
	} {
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
	static member(props: {
		/** The MemberId component of the ARN. */
		readonly memberId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMemberArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		memberId: string;
	} {
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
	static network(props: {
		/** The NetworkId component of the ARN. */
		readonly networkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseNetworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkId: string;
	} {
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
	static node(props: {
		/** The NodeId component of the ARN. */
		readonly nodeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseNodeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		nodeId: string;
	} {
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
	static proposal(props: {
		/** The ProposalId component of the ARN. */
		readonly proposalId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProposalArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		proposalId: string;
	} {
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
	static readonly CREATE_ACCESSOR: string[] = [
		"managedblockchain:CreateAccessor",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateMember API call. */
	static readonly CREATE_MEMBER: string[] = [
		"managedblockchain:CreateMember",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateNetwork API call. */
	static readonly CREATE_NETWORK: string[] = [
		"managedblockchain:CreateNetwork",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateNode API call. */
	static readonly CREATE_NODE: string[] = [
		"managedblockchain:CreateNode",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the CreateProposal API call. */
	static readonly CREATE_PROPOSAL: string[] = [
		"managedblockchain:CreateProposal",
		"managedblockchain:TagResource",
	];
	/** IAM actions required for the DeleteAccessor API call. */
	static readonly DELETE_ACCESSOR: string[] = [
		"managedblockchain:DeleteAccessor",
	];
	/** IAM actions required for the DeleteMember API call. */
	static readonly DELETE_MEMBER: string[] = ["managedblockchain:DeleteMember"];
	/** IAM actions required for the DeleteNode API call. */
	static readonly DELETE_NODE: string[] = ["managedblockchain:DeleteNode"];
	/** IAM actions required for the GetAccessor API call. */
	static readonly GET_ACCESSOR: string[] = ["managedblockchain:GetAccessor"];
	/** IAM actions required for the GetMember API call. */
	static readonly GET_MEMBER: string[] = ["managedblockchain:GetMember"];
	/** IAM actions required for the GetNetwork API call. */
	static readonly GET_NETWORK: string[] = ["managedblockchain:GetNetwork"];
	/** IAM actions required for the GetNode API call. */
	static readonly GET_NODE: string[] = ["managedblockchain:GetNode"];
	/** IAM actions required for the GetProposal API call. */
	static readonly GET_PROPOSAL: string[] = ["managedblockchain:GetProposal"];
	/** IAM actions required for the ListAccessors API call. */
	static readonly LIST_ACCESSORS: string[] = [
		"managedblockchain:ListAccessors",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly LIST_INVITATIONS: string[] = [
		"managedblockchain:ListInvitations",
	];
	/** IAM actions required for the ListMembers API call. */
	static readonly LIST_MEMBERS: string[] = ["managedblockchain:ListMembers"];
	/** IAM actions required for the ListNetworks API call. */
	static readonly LIST_NETWORKS: string[] = ["managedblockchain:ListNetworks"];
	/** IAM actions required for the ListNodes API call. */
	static readonly LIST_NODES: string[] = ["managedblockchain:ListNodes"];
	/** IAM actions required for the ListProposalVotes API call. */
	static readonly LIST_PROPOSAL_VOTES: string[] = [
		"managedblockchain:ListProposalVotes",
	];
	/** IAM actions required for the ListProposals API call. */
	static readonly LIST_PROPOSALS: string[] = [
		"managedblockchain:ListProposals",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"managedblockchain:ListTagsForResource",
	];
	/** IAM actions required for the RejectInvitation API call. */
	static readonly REJECT_INVITATION: string[] = [
		"managedblockchain:RejectInvitation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["managedblockchain:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"managedblockchain:UntagResource",
	];
	/** IAM actions required for the UpdateMember API call. */
	static readonly UPDATE_MEMBER: string[] = ["managedblockchain:UpdateMember"];
	/** IAM actions required for the UpdateNode API call. */
	static readonly UPDATE_NODE: string[] = ["managedblockchain:UpdateNode"];
	/** IAM actions required for the VoteOnProposal API call. */
	static readonly VOTE_ON_PROPOSAL: string[] = [
		"managedblockchain:VoteOnProposal",
	];
}

/**
 * Condition key constants and builders for managedblockchain.
 */
export class ManagedblockchainConditions {
	/** Condition keys applicable to the CreateAccessor action. */
	static readonly CREATE_ACCESSOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMember action. */
	static readonly CREATE_MEMBER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetwork action. */
	static readonly CREATE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNode action. */
	static readonly CREATE_NODE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProposal action. */
	static readonly CREATE_PROPOSAL_CONDITION_KEYS: string[] = [
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
