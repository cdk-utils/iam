// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/resource-groups.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the resource-groups service.
 */
export class ResourceGroupsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "resource-groups";

	/** [Write] resource-groups:AssociateResource */
	static readonly AssociateResource = "resource-groups:AssociateResource";
	/** [Write] resource-groups:CancelTagSyncTask */
	static readonly CancelTagSyncTask = "resource-groups:CancelTagSyncTask";
	/** [Write] resource-groups:CreateGroup */
	static readonly CreateGroup = "resource-groups:CreateGroup";
	/** [Write] resource-groups:DeleteGroup */
	static readonly DeleteGroup = "resource-groups:DeleteGroup";
	/** [Write] resource-groups:DeleteGroupPolicy */
	static readonly DeleteGroupPolicy = "resource-groups:DeleteGroupPolicy";
	/** [Write] resource-groups:DisassociateResource */
	static readonly DisassociateResource = "resource-groups:DisassociateResource";
	/** [Read] resource-groups:GetAccountSettings */
	static readonly actionGetAccountSettings =
		"resource-groups:GetAccountSettings";
	/** [Read] resource-groups:GetGroup */
	static readonly actionGetGroup = "resource-groups:GetGroup";
	/** [Read] resource-groups:GetGroupConfiguration */
	static readonly actionGetGroupConfiguration =
		"resource-groups:GetGroupConfiguration";
	/** [Read] resource-groups:GetGroupPolicy */
	static readonly actionGetGroupPolicy = "resource-groups:GetGroupPolicy";
	/** [Read] resource-groups:GetGroupQuery */
	static readonly actionGetGroupQuery = "resource-groups:GetGroupQuery";
	/** [Read] resource-groups:GetTagSyncTask */
	static readonly actionGetTagSyncTask = "resource-groups:GetTagSyncTask";
	/** [Read] resource-groups:GetTags */
	static readonly actionGetTags = "resource-groups:GetTags";
	/** [Write] resource-groups:GroupResources */
	static readonly GroupResources = "resource-groups:GroupResources";
	/** [List] resource-groups:ListGroupResources */
	static readonly ListGroupResources = "resource-groups:ListGroupResources";
	/** [List] resource-groups:ListGroupingStatuses */
	static readonly ListGroupingStatuses = "resource-groups:ListGroupingStatuses";
	/** [List] resource-groups:ListGroups */
	static readonly ListGroups = "resource-groups:ListGroups";
	/** [List] resource-groups:ListResourceTypes */
	static readonly ListResourceTypes = "resource-groups:ListResourceTypes";
	/** [List] resource-groups:ListTagSyncTasks */
	static readonly ListTagSyncTasks = "resource-groups:ListTagSyncTasks";
	/** [Write] resource-groups:PutGroupConfiguration */
	static readonly PutGroupConfiguration =
		"resource-groups:PutGroupConfiguration";
	/** [Write] resource-groups:PutGroupPolicy */
	static readonly PutGroupPolicy = "resource-groups:PutGroupPolicy";
	/** [List] resource-groups:SearchResources */
	static readonly SearchResources = "resource-groups:SearchResources";
	/** [Write] resource-groups:StartTagSyncTask */
	static readonly StartTagSyncTask = "resource-groups:StartTagSyncTask";
	/** [Tagging] resource-groups:Tag */
	static readonly Tag = "resource-groups:Tag";
	/** [Write] resource-groups:UngroupResources */
	static readonly UngroupResources = "resource-groups:UngroupResources";
	/** [Tagging] resource-groups:Untag */
	static readonly Untag = "resource-groups:Untag";
	/** [Write] resource-groups:UpdateAccountSettings */
	static readonly UpdateAccountSettings =
		"resource-groups:UpdateAccountSettings";
	/** [Write] resource-groups:UpdateGroup */
	static readonly UpdateGroup = "resource-groups:UpdateGroup";
	/** [Write] resource-groups:UpdateGroupQuery */
	static readonly UpdateGroupQuery = "resource-groups:UpdateGroupQuery";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ResourceGroupsActions.actionGetAccountSettings,
		ResourceGroupsActions.actionGetGroup,
		ResourceGroupsActions.actionGetGroupConfiguration,
		ResourceGroupsActions.actionGetGroupPolicy,
		ResourceGroupsActions.actionGetGroupQuery,
		ResourceGroupsActions.actionGetTagSyncTask,
		ResourceGroupsActions.actionGetTags,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ResourceGroupsActions.AssociateResource,
		ResourceGroupsActions.CancelTagSyncTask,
		ResourceGroupsActions.CreateGroup,
		ResourceGroupsActions.DeleteGroup,
		ResourceGroupsActions.DeleteGroupPolicy,
		ResourceGroupsActions.DisassociateResource,
		ResourceGroupsActions.GroupResources,
		ResourceGroupsActions.PutGroupConfiguration,
		ResourceGroupsActions.PutGroupPolicy,
		ResourceGroupsActions.StartTagSyncTask,
		ResourceGroupsActions.UngroupResources,
		ResourceGroupsActions.UpdateAccountSettings,
		ResourceGroupsActions.UpdateGroup,
		ResourceGroupsActions.UpdateGroupQuery,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ResourceGroupsActions.ListGroupResources,
		ResourceGroupsActions.ListGroupingStatuses,
		ResourceGroupsActions.ListGroups,
		ResourceGroupsActions.ListResourceTypes,
		ResourceGroupsActions.ListTagSyncTasks,
		ResourceGroupsActions.SearchResources,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ResourceGroupsActions.Tag,
		ResourceGroupsActions.Untag,
	];
}

/**
 * Properties for building a group ARN.
 */
export interface ResourceGroupsGroupArnProps {
	/** The GroupName component of the ARN. */
	readonly groupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a group ARN.
 */
export interface ResourceGroupsGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupName component. */
	readonly groupName: string;
}

/**
 * Properties for building a tagSyncTask ARN.
 */
export interface ResourceGroupsTagSyncTaskArnProps {
	/** The GroupName component of the ARN. */
	readonly groupName: string;
	/** The TaskId component of the ARN. */
	readonly taskId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tagSyncTask ARN.
 */
export interface ResourceGroupsTagSyncTaskArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GroupName component. */
	readonly groupName: string;
	/** The TaskId component. */
	readonly taskId: string;
}

const GroupArnRegex =
	/^arn:(?<partition>[^:]+):resource-groups:(?<region>[^:]*):(?<account>[^:]*):group\/(?<groupName>[^:/?]+)$/;
const TagSyncTaskArnRegex =
	/^arn:(?<partition>[^:]+):resource-groups:(?<region>[^:]*):(?<account>[^:]*):group\/(?<groupName>[^:/?]+)\/tag-sync-task\/(?<taskId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for resource-groups resources.
 */
export class ResourceGroupsResources {
	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: ResourceGroupsGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:resource-groups:${props.region ?? "*"}:${props.account ?? "*"}:group/${props.groupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the group resource.
	 */
	static isValidGroupArn(arn: string): boolean {
		return GroupArnRegex.test(arn);
	}

	/**
	 * Parses a group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGroupArn(arn: string): ResourceGroupsGroupArnComponents {
		const match = GroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupName: match.groups!.groupName,
		};
	}

	/**
	 * Builds an ARN for the tagSyncTask resource.
	 */
	static tagSyncTask(props: ResourceGroupsTagSyncTaskArnProps): string {
		return `arn:${props.partition ?? "aws"}:resource-groups:${props.region ?? "*"}:${props.account ?? "*"}:group/${props.groupName}/tag-sync-task/${props.taskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tagSyncTask resource.
	 */
	static isValidTagSyncTaskArn(arn: string): boolean {
		return TagSyncTaskArnRegex.test(arn);
	}

	/**
	 * Parses a tagSyncTask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTagSyncTaskArn(
		arn: string,
	): ResourceGroupsTagSyncTaskArnComponents {
		const match = TagSyncTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tagSyncTask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			groupName: match.groups!.groupName,
			taskId: match.groups!.taskId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for resource-groups.
 */
export class ResourceGroupsOperations {
	/** IAM actions required for the CancelTagSyncTask API call. */
	static readonly CancelTagSyncTask: string[] = [
		"resource-groups:CancelTagSyncTask",
		"resource-groups:DeleteGroup",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CreateGroup: string[] = [
		"resource-groups:CreateGroup",
		"resource-groups:Tag",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DeleteGroup: string[] = ["resource-groups:DeleteGroup"];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly opGetAccountSettings: string[] = [
		"resource-groups:GetAccountSettings",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly opGetGroup: string[] = ["resource-groups:GetGroup"];
	/** IAM actions required for the GetGroupConfiguration API call. */
	static readonly opGetGroupConfiguration: string[] = [
		"resource-groups:GetGroupConfiguration",
	];
	/** IAM actions required for the GetGroupQuery API call. */
	static readonly opGetGroupQuery: string[] = ["resource-groups:GetGroupQuery"];
	/** IAM actions required for the GetTagSyncTask API call. */
	static readonly opGetTagSyncTask: string[] = [
		"resource-groups:GetTagSyncTask",
	];
	/** IAM actions required for the GetTags API call. */
	static readonly opGetTags: string[] = ["resource-groups:GetTags"];
	/** IAM actions required for the GroupResources API call. */
	static readonly GroupResources: string[] = ["resource-groups:GroupResources"];
	/** IAM actions required for the ListGroupResources API call. */
	static readonly ListGroupResources: string[] = [
		"resource-groups:ListGroupResources",
	];
	/** IAM actions required for the ListGroupingStatuses API call. */
	static readonly ListGroupingStatuses: string[] = [
		"resource-groups:ListGroupingStatuses",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly ListGroups: string[] = ["resource-groups:ListGroups"];
	/** IAM actions required for the ListTagSyncTasks API call. */
	static readonly ListTagSyncTasks: string[] = [
		"resource-groups:ListTagSyncTasks",
	];
	/** IAM actions required for the PutGroupConfiguration API call. */
	static readonly PutGroupConfiguration: string[] = [
		"resource-groups:PutGroupConfiguration",
	];
	/** IAM actions required for the SearchResources API call. */
	static readonly SearchResources: string[] = [
		"resource-groups:SearchResources",
	];
	/** IAM actions required for the StartTagSyncTask API call. */
	static readonly StartTagSyncTask: string[] = [
		"resource-groups:CreateGroup",
		"iam:PassRole",
		"resource-groups:StartTagSyncTask",
	];
	/** IAM actions required for the Tag API call. */
	static readonly Tag: string[] = ["resource-groups:Tag"];
	/** IAM actions required for the UngroupResources API call. */
	static readonly UngroupResources: string[] = [
		"resource-groups:UngroupResources",
	];
	/** IAM actions required for the Untag API call. */
	static readonly Untag: string[] = ["resource-groups:Untag"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UpdateAccountSettings: string[] = [
		"resource-groups:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UpdateGroup: string[] = ["resource-groups:UpdateGroup"];
	/** IAM actions required for the UpdateGroupQuery API call. */
	static readonly UpdateGroupQuery: string[] = [
		"resource-groups:UpdateGroupQuery",
	];
}

/**
 * Condition key constants and builders for resource-groups.
 */
export class ResourceGroupsConditions {
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CreateGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Tag action. */
	static readonly TagConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Untag action. */
	static readonly UntagConditionKeys: string[] = ["aws:TagKeys"];

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
