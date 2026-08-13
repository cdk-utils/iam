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
	static readonly BatchAddChannelRoleToAccessors =
		"repostspace:BatchAddChannelRoleToAccessors";
	/** [Write] repostspace:BatchAddRole */
	static readonly BatchAddRole = "repostspace:BatchAddRole";
	/** [Write] repostspace:BatchRemoveChannelRoleFromAccessors */
	static readonly BatchRemoveChannelRoleFromAccessors =
		"repostspace:BatchRemoveChannelRoleFromAccessors";
	/** [Write] repostspace:BatchRemoveRole */
	static readonly BatchRemoveRole = "repostspace:BatchRemoveRole";
	/** [Write] repostspace:CreateChannel */
	static readonly CreateChannel = "repostspace:CreateChannel";
	/** [Write] repostspace:CreateSpace */
	static readonly CreateSpace = "repostspace:CreateSpace";
	/** [Write] repostspace:DeleteSpace */
	static readonly DeleteSpace = "repostspace:DeleteSpace";
	/** [Write] repostspace:DeregisterAdmin */
	static readonly DeregisterAdmin = "repostspace:DeregisterAdmin";
	/** [Read] repostspace:GetChannel */
	static readonly actionGetChannel = "repostspace:GetChannel";
	/** [Read] repostspace:GetSpace */
	static readonly actionGetSpace = "repostspace:GetSpace";
	/** [Read] repostspace:ListChannels */
	static readonly ListChannels = "repostspace:ListChannels";
	/** [Read] repostspace:ListSpaces */
	static readonly ListSpaces = "repostspace:ListSpaces";
	/** [Read] repostspace:ListTagsForResource */
	static readonly ListTagsForResource = "repostspace:ListTagsForResource";
	/** [Write] repostspace:RegisterAdmin */
	static readonly RegisterAdmin = "repostspace:RegisterAdmin";
	/** [Write] repostspace:SendInvites */
	static readonly SendInvites = "repostspace:SendInvites";
	/** [Tagging] repostspace:TagResource */
	static readonly TagResource = "repostspace:TagResource";
	/** [Tagging] repostspace:UntagResource */
	static readonly UntagResource = "repostspace:UntagResource";
	/** [Write] repostspace:UpdateChannel */
	static readonly UpdateChannel = "repostspace:UpdateChannel";
	/** [Write] repostspace:UpdateSpace */
	static readonly UpdateSpace = "repostspace:UpdateSpace";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RepostspaceActions.actionGetChannel,
		RepostspaceActions.actionGetSpace,
		RepostspaceActions.ListChannels,
		RepostspaceActions.ListSpaces,
		RepostspaceActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RepostspaceActions.BatchAddChannelRoleToAccessors,
		RepostspaceActions.BatchAddRole,
		RepostspaceActions.BatchRemoveChannelRoleFromAccessors,
		RepostspaceActions.BatchRemoveRole,
		RepostspaceActions.CreateChannel,
		RepostspaceActions.CreateSpace,
		RepostspaceActions.DeleteSpace,
		RepostspaceActions.DeregisterAdmin,
		RepostspaceActions.RegisterAdmin,
		RepostspaceActions.SendInvites,
		RepostspaceActions.UpdateChannel,
		RepostspaceActions.UpdateSpace,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RepostspaceActions.TagResource,
		RepostspaceActions.UntagResource,
	];
}

/**
 * Properties for building a space ARN.
 */
export interface RepostspaceSpaceArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a space ARN.
 */
export interface RepostspaceSpaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const SpaceArnRegex =
	/^arn:(?<partition>[^:]+):repostspace:(?<region>[^:]*):(?<account>[^:]*):space\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for repostspace resources.
 */
export class RepostspaceResources {
	/**
	 * Builds an ARN for the space resource.
	 */
	static space(props: RepostspaceSpaceArnProps): string {
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
	static parseSpaceArn(arn: string): RepostspaceSpaceArnComponents {
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
	static readonly BatchAddChannelRoleToAccessors: string[] = [
		"repostspace:BatchAddChannelRoleToAccessors",
	];
	/** IAM actions required for the BatchAddRole API call. */
	static readonly BatchAddRole: string[] = ["repostspace:BatchAddRole"];
	/** IAM actions required for the BatchRemoveChannelRoleFromAccessors API call. */
	static readonly BatchRemoveChannelRoleFromAccessors: string[] = [
		"repostspace:BatchRemoveChannelRoleFromAccessors",
	];
	/** IAM actions required for the BatchRemoveRole API call. */
	static readonly BatchRemoveRole: string[] = ["repostspace:BatchRemoveRole"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = ["repostspace:CreateChannel"];
	/** IAM actions required for the CreateSpace API call. */
	static readonly CreateSpace: string[] = [
		"repostspace:CreateSpace",
		"iam:PassRole",
		"repostspace:TagResource",
	];
	/** IAM actions required for the DeleteSpace API call. */
	static readonly DeleteSpace: string[] = ["repostspace:DeleteSpace"];
	/** IAM actions required for the DeregisterAdmin API call. */
	static readonly DeregisterAdmin: string[] = ["repostspace:DeregisterAdmin"];
	/** IAM actions required for the GetChannel API call. */
	static readonly opGetChannel: string[] = ["repostspace:GetChannel"];
	/** IAM actions required for the GetSpace API call. */
	static readonly opGetSpace: string[] = ["repostspace:GetSpace"];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["repostspace:ListChannels"];
	/** IAM actions required for the ListSpaces API call. */
	static readonly ListSpaces: string[] = ["repostspace:ListSpaces"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"repostspace:ListTagsForResource",
	];
	/** IAM actions required for the RegisterAdmin API call. */
	static readonly RegisterAdmin: string[] = ["repostspace:RegisterAdmin"];
	/** IAM actions required for the SendInvites API call. */
	static readonly SendInvites: string[] = ["repostspace:SendInvites"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["repostspace:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["repostspace:UntagResource"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["repostspace:UpdateChannel"];
	/** IAM actions required for the UpdateSpace API call. */
	static readonly UpdateSpace: string[] = [
		"iam:PassRole",
		"repostspace:UpdateSpace",
	];
}

/**
 * Condition key constants and builders for repostspace.
 */
export class RepostspaceConditions {
	/** Condition keys applicable to the CreateSpace action. */
	static readonly CreateSpaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
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
