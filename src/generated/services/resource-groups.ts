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
	static readonly ASSOCIATE_RESOURCE = "resource-groups:AssociateResource";
	/** [Write] resource-groups:CancelTagSyncTask */
	static readonly CANCEL_TAG_SYNC_TASK = "resource-groups:CancelTagSyncTask";
	/** [Write] resource-groups:CreateGroup */
	static readonly CREATE_GROUP = "resource-groups:CreateGroup";
	/** [Write] resource-groups:DeleteGroup */
	static readonly DELETE_GROUP = "resource-groups:DeleteGroup";
	/** [Write] resource-groups:DeleteGroupPolicy */
	static readonly DELETE_GROUP_POLICY = "resource-groups:DeleteGroupPolicy";
	/** [Write] resource-groups:DisassociateResource */
	static readonly DISASSOCIATE_RESOURCE =
		"resource-groups:DisassociateResource";
	/** [Read] resource-groups:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "resource-groups:GetAccountSettings";
	/** [Read] resource-groups:GetGroup */
	static readonly GET_GROUP = "resource-groups:GetGroup";
	/** [Read] resource-groups:GetGroupConfiguration */
	static readonly GET_GROUP_CONFIGURATION =
		"resource-groups:GetGroupConfiguration";
	/** [Read] resource-groups:GetGroupPolicy */
	static readonly GET_GROUP_POLICY = "resource-groups:GetGroupPolicy";
	/** [Read] resource-groups:GetGroupQuery */
	static readonly GET_GROUP_QUERY = "resource-groups:GetGroupQuery";
	/** [Read] resource-groups:GetTagSyncTask */
	static readonly GET_TAG_SYNC_TASK = "resource-groups:GetTagSyncTask";
	/** [Read] resource-groups:GetTags */
	static readonly GET_TAGS = "resource-groups:GetTags";
	/** [Write] resource-groups:GroupResources */
	static readonly GROUP_RESOURCES = "resource-groups:GroupResources";
	/** [List] resource-groups:ListGroupResources */
	static readonly LIST_GROUP_RESOURCES = "resource-groups:ListGroupResources";
	/** [List] resource-groups:ListGroupingStatuses */
	static readonly LIST_GROUPING_STATUSES =
		"resource-groups:ListGroupingStatuses";
	/** [List] resource-groups:ListGroups */
	static readonly LIST_GROUPS = "resource-groups:ListGroups";
	/** [List] resource-groups:ListResourceTypes */
	static readonly LIST_RESOURCE_TYPES = "resource-groups:ListResourceTypes";
	/** [List] resource-groups:ListTagSyncTasks */
	static readonly LIST_TAG_SYNC_TASKS = "resource-groups:ListTagSyncTasks";
	/** [Write] resource-groups:PutGroupConfiguration */
	static readonly PUT_GROUP_CONFIGURATION =
		"resource-groups:PutGroupConfiguration";
	/** [Write] resource-groups:PutGroupPolicy */
	static readonly PUT_GROUP_POLICY = "resource-groups:PutGroupPolicy";
	/** [List] resource-groups:SearchResources */
	static readonly SEARCH_RESOURCES = "resource-groups:SearchResources";
	/** [Write] resource-groups:StartTagSyncTask */
	static readonly START_TAG_SYNC_TASK = "resource-groups:StartTagSyncTask";
	/** [Tagging] resource-groups:Tag */
	static readonly TAG = "resource-groups:Tag";
	/** [Write] resource-groups:UngroupResources */
	static readonly UNGROUP_RESOURCES = "resource-groups:UngroupResources";
	/** [Tagging] resource-groups:Untag */
	static readonly UNTAG = "resource-groups:Untag";
	/** [Write] resource-groups:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS =
		"resource-groups:UpdateAccountSettings";
	/** [Write] resource-groups:UpdateGroup */
	static readonly UPDATE_GROUP = "resource-groups:UpdateGroup";
	/** [Write] resource-groups:UpdateGroupQuery */
	static readonly UPDATE_GROUP_QUERY = "resource-groups:UpdateGroupQuery";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ResourceGroupsActions.GET_ACCOUNT_SETTINGS,
		ResourceGroupsActions.GET_GROUP,
		ResourceGroupsActions.GET_GROUP_CONFIGURATION,
		ResourceGroupsActions.GET_GROUP_POLICY,
		ResourceGroupsActions.GET_GROUP_QUERY,
		ResourceGroupsActions.GET_TAG_SYNC_TASK,
		ResourceGroupsActions.GET_TAGS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ResourceGroupsActions.ASSOCIATE_RESOURCE,
		ResourceGroupsActions.CANCEL_TAG_SYNC_TASK,
		ResourceGroupsActions.CREATE_GROUP,
		ResourceGroupsActions.DELETE_GROUP,
		ResourceGroupsActions.DELETE_GROUP_POLICY,
		ResourceGroupsActions.DISASSOCIATE_RESOURCE,
		ResourceGroupsActions.GROUP_RESOURCES,
		ResourceGroupsActions.PUT_GROUP_CONFIGURATION,
		ResourceGroupsActions.PUT_GROUP_POLICY,
		ResourceGroupsActions.START_TAG_SYNC_TASK,
		ResourceGroupsActions.UNGROUP_RESOURCES,
		ResourceGroupsActions.UPDATE_ACCOUNT_SETTINGS,
		ResourceGroupsActions.UPDATE_GROUP,
		ResourceGroupsActions.UPDATE_GROUP_QUERY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ResourceGroupsActions.LIST_GROUP_RESOURCES,
		ResourceGroupsActions.LIST_GROUPING_STATUSES,
		ResourceGroupsActions.LIST_GROUPS,
		ResourceGroupsActions.LIST_RESOURCE_TYPES,
		ResourceGroupsActions.LIST_TAG_SYNC_TASKS,
		ResourceGroupsActions.SEARCH_RESOURCES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ResourceGroupsActions.TAG,
		ResourceGroupsActions.UNTAG,
	];
}

const GroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resource-groups:(?<region>[^:]*):(?<account>[^:]*):group/(?<groupName>[^:/?]+)$",
);
const TagSyncTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):resource-groups:(?<region>[^:]*):(?<account>[^:]*):group/(?<groupName>[^:/?]+)/tag-sync-task/(?<taskId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for resource-groups resources.
 */
export class ResourceGroupsResources {
	/**
	 * Builds an ARN for the group resource.
	 */
	static group(props: {
		/** The GroupName component of the ARN. */
		readonly groupName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupName: string;
	} {
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
	static tagSyncTask(props: {
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
	}): string {
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
	static parseTagSyncTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		groupName: string;
		taskId: string;
	} {
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
	static readonly CANCEL_TAG_SYNC_TASK: string[] = [
		"resource-groups:CancelTagSyncTask",
		"resource-groups:DeleteGroup",
	];
	/** IAM actions required for the CreateGroup API call. */
	static readonly CREATE_GROUP: string[] = [
		"resource-groups:CreateGroup",
		"resource-groups:Tag",
	];
	/** IAM actions required for the DeleteGroup API call. */
	static readonly DELETE_GROUP: string[] = ["resource-groups:DeleteGroup"];
	/** IAM actions required for the GetAccountSettings API call. */
	static readonly GET_ACCOUNT_SETTINGS: string[] = [
		"resource-groups:GetAccountSettings",
	];
	/** IAM actions required for the GetGroup API call. */
	static readonly GET_GROUP: string[] = ["resource-groups:GetGroup"];
	/** IAM actions required for the GetGroupConfiguration API call. */
	static readonly GET_GROUP_CONFIGURATION: string[] = [
		"resource-groups:GetGroupConfiguration",
	];
	/** IAM actions required for the GetGroupQuery API call. */
	static readonly GET_GROUP_QUERY: string[] = ["resource-groups:GetGroupQuery"];
	/** IAM actions required for the GetTagSyncTask API call. */
	static readonly GET_TAG_SYNC_TASK: string[] = [
		"resource-groups:GetTagSyncTask",
	];
	/** IAM actions required for the GetTags API call. */
	static readonly GET_TAGS: string[] = ["resource-groups:GetTags"];
	/** IAM actions required for the GroupResources API call. */
	static readonly GROUP_RESOURCES: string[] = [
		"resource-groups:GroupResources",
	];
	/** IAM actions required for the ListGroupResources API call. */
	static readonly LIST_GROUP_RESOURCES: string[] = [
		"resource-groups:ListGroupResources",
	];
	/** IAM actions required for the ListGroupingStatuses API call. */
	static readonly LIST_GROUPING_STATUSES: string[] = [
		"resource-groups:ListGroupingStatuses",
	];
	/** IAM actions required for the ListGroups API call. */
	static readonly LIST_GROUPS: string[] = ["resource-groups:ListGroups"];
	/** IAM actions required for the ListTagSyncTasks API call. */
	static readonly LIST_TAG_SYNC_TASKS: string[] = [
		"resource-groups:ListTagSyncTasks",
	];
	/** IAM actions required for the PutGroupConfiguration API call. */
	static readonly PUT_GROUP_CONFIGURATION: string[] = [
		"resource-groups:PutGroupConfiguration",
	];
	/** IAM actions required for the SearchResources API call. */
	static readonly SEARCH_RESOURCES: string[] = [
		"resource-groups:SearchResources",
	];
	/** IAM actions required for the StartTagSyncTask API call. */
	static readonly START_TAG_SYNC_TASK: string[] = [
		"resource-groups:CreateGroup",
		"iam:PassRole",
		"resource-groups:StartTagSyncTask",
	];
	/** IAM actions required for the Tag API call. */
	static readonly TAG: string[] = ["resource-groups:Tag"];
	/** IAM actions required for the UngroupResources API call. */
	static readonly UNGROUP_RESOURCES: string[] = [
		"resource-groups:UngroupResources",
	];
	/** IAM actions required for the Untag API call. */
	static readonly UNTAG: string[] = ["resource-groups:Untag"];
	/** IAM actions required for the UpdateAccountSettings API call. */
	static readonly UPDATE_ACCOUNT_SETTINGS: string[] = [
		"resource-groups:UpdateAccountSettings",
	];
	/** IAM actions required for the UpdateGroup API call. */
	static readonly UPDATE_GROUP: string[] = ["resource-groups:UpdateGroup"];
	/** IAM actions required for the UpdateGroupQuery API call. */
	static readonly UPDATE_GROUP_QUERY: string[] = [
		"resource-groups:UpdateGroupQuery",
	];
}

/**
 * Condition key constants and builders for resource-groups.
 */
export class ResourceGroupsConditions {
	/** Condition keys applicable to the CreateGroup action. */
	static readonly CREATE_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Tag action. */
	static readonly TAG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the Untag action. */
	static readonly UNTAG_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
