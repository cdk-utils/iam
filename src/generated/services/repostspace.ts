// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/repostspace.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the repostspace service.
 */
export class RepostspaceActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "repostspace";

	/** [Write] repostspace:BatchAddChannelRoleToAccessors */
	static readonly BATCH_ADD_CHANNEL_ROLE_TO_ACCESSORS =
		"repostspace:BatchAddChannelRoleToAccessors";
	/** [Write] repostspace:BatchAddRole */
	static readonly BATCH_ADD_ROLE = "repostspace:BatchAddRole";
	/** [Write] repostspace:BatchRemoveChannelRoleFromAccessors */
	static readonly BATCH_REMOVE_CHANNEL_ROLE_FROM_ACCESSORS =
		"repostspace:BatchRemoveChannelRoleFromAccessors";
	/** [Write] repostspace:BatchRemoveRole */
	static readonly BATCH_REMOVE_ROLE = "repostspace:BatchRemoveRole";
	/** [Write] repostspace:CreateChannel */
	static readonly CREATE_CHANNEL = "repostspace:CreateChannel";
	/** [Write] repostspace:CreateSpace */
	static readonly CREATE_SPACE = "repostspace:CreateSpace";
	/** [Write] repostspace:DeleteSpace */
	static readonly DELETE_SPACE = "repostspace:DeleteSpace";
	/** [Write] repostspace:DeregisterAdmin */
	static readonly DEREGISTER_ADMIN = "repostspace:DeregisterAdmin";
	/** [Read] repostspace:GetChannel */
	static readonly GET_CHANNEL = "repostspace:GetChannel";
	/** [Read] repostspace:GetSpace */
	static readonly GET_SPACE = "repostspace:GetSpace";
	/** [Read] repostspace:ListChannels */
	static readonly LIST_CHANNELS = "repostspace:ListChannels";
	/** [Read] repostspace:ListSpaces */
	static readonly LIST_SPACES = "repostspace:ListSpaces";
	/** [Read] repostspace:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "repostspace:ListTagsForResource";
	/** [Write] repostspace:RegisterAdmin */
	static readonly REGISTER_ADMIN = "repostspace:RegisterAdmin";
	/** [Write] repostspace:SendInvites */
	static readonly SEND_INVITES = "repostspace:SendInvites";
	/** [Tagging] repostspace:TagResource */
	static readonly TAG_RESOURCE = "repostspace:TagResource";
	/** [Tagging] repostspace:UntagResource */
	static readonly UNTAG_RESOURCE = "repostspace:UntagResource";
	/** [Write] repostspace:UpdateChannel */
	static readonly UPDATE_CHANNEL = "repostspace:UpdateChannel";
	/** [Write] repostspace:UpdateSpace */
	static readonly UPDATE_SPACE = "repostspace:UpdateSpace";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RepostspaceActions.GET_CHANNEL,
		RepostspaceActions.GET_SPACE,
		RepostspaceActions.LIST_CHANNELS,
		RepostspaceActions.LIST_SPACES,
		RepostspaceActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RepostspaceActions.BATCH_ADD_CHANNEL_ROLE_TO_ACCESSORS,
		RepostspaceActions.BATCH_ADD_ROLE,
		RepostspaceActions.BATCH_REMOVE_CHANNEL_ROLE_FROM_ACCESSORS,
		RepostspaceActions.BATCH_REMOVE_ROLE,
		RepostspaceActions.CREATE_CHANNEL,
		RepostspaceActions.CREATE_SPACE,
		RepostspaceActions.DELETE_SPACE,
		RepostspaceActions.DEREGISTER_ADMIN,
		RepostspaceActions.REGISTER_ADMIN,
		RepostspaceActions.SEND_INVITES,
		RepostspaceActions.UPDATE_CHANNEL,
		RepostspaceActions.UPDATE_SPACE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RepostspaceActions.TAG_RESOURCE,
		RepostspaceActions.UNTAG_RESOURCE,
	];
}

const SpaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):repostspace:(?<region>[^:]*):(?<account>[^:]*):space/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for repostspace resources.
 */
export class RepostspaceResources {
	/**
	 * Builds an ARN for the space resource.
	 */
	static space(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:repostspace:${props.region ?? "*"}:${props.account ?? "*"}:space/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the space resource.
	 */
	static isValidSpaceArn(arn: string): boolean {
		return SpaceArnRegex.test(arn);
	}

	/**
	 * Parses a space ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSpaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = SpaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid space ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for repostspace.
 */
export class RepostspaceOperations {
	/** IAM actions required for the BatchAddChannelRoleToAccessors API call. */
	static readonly BATCH_ADD_CHANNEL_ROLE_TO_ACCESSORS: string[] = [
		"repostspace:BatchAddChannelRoleToAccessors",
	];
	/** IAM actions required for the BatchAddRole API call. */
	static readonly BATCH_ADD_ROLE: string[] = ["repostspace:BatchAddRole"];
	/** IAM actions required for the BatchRemoveChannelRoleFromAccessors API call. */
	static readonly BATCH_REMOVE_CHANNEL_ROLE_FROM_ACCESSORS: string[] = [
		"repostspace:BatchRemoveChannelRoleFromAccessors",
	];
	/** IAM actions required for the BatchRemoveRole API call. */
	static readonly BATCH_REMOVE_ROLE: string[] = ["repostspace:BatchRemoveRole"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = ["repostspace:CreateChannel"];
	/** IAM actions required for the CreateSpace API call. */
	static readonly CREATE_SPACE: string[] = [
		"repostspace:CreateSpace",
		"iam:PassRole",
		"repostspace:TagResource",
	];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DELETE_SPACE: string[] = ["repostspace:DeleteSpace"];
	/** IAM actions required for the DeregisterAdmin API call. */
	static readonly DEREGISTER_ADMIN: string[] = ["repostspace:DeregisterAdmin"];
	/** IAM actions required for the GetChannel API call. */
	static readonly GET_CHANNEL: string[] = ["repostspace:GetChannel"];
	/** IAM actions required for the GetSpace API call. */
	static readonly GET_SPACE: string[] = ["repostspace:GetSpace"];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["repostspace:ListChannels"];
	/** IAM actions required for the ListSpaces API call. */
	static readonly LIST_SPACES: string[] = ["repostspace:ListSpaces"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"repostspace:ListTagsForResource",
	];
	/** IAM actions required for the RegisterAdmin API call. */
	static readonly REGISTER_ADMIN: string[] = ["repostspace:RegisterAdmin"];
	/** IAM actions required for the SendInvites API call. */
	static readonly SEND_INVITES: string[] = ["repostspace:SendInvites"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["repostspace:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["repostspace:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["repostspace:UpdateChannel"];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UPDATE_SPACE: string[] = [
		"iam:PassRole",
		"repostspace:UpdateSpace",
	];
}

/**
 * Condition key constants and builders for repostspace.
 */
export class RepostspaceConditions {
	/** Condition keys applicable to the CreateSpace action. */
	static readonly CREATE_SPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
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
