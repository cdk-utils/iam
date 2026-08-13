// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/workspaces-instances.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the workspaces-instances service.
 */
export class WorkspacesInstancesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "workspaces-instances";

	/** [Write] workspaces-instances:AssociateVolume */
	static readonly ASSOCIATE_VOLUME = "workspaces-instances:AssociateVolume";
	/** [Write] workspaces-instances:CreateVolume */
	static readonly CREATE_VOLUME = "workspaces-instances:CreateVolume";
	/** [Write] workspaces-instances:CreateWorkspaceInstance */
	static readonly CREATE_WORKSPACE_INSTANCE =
		"workspaces-instances:CreateWorkspaceInstance";
	/** [Write] workspaces-instances:DeleteVolume */
	static readonly DELETE_VOLUME = "workspaces-instances:DeleteVolume";
	/** [Write] workspaces-instances:DeleteWorkspaceInstance */
	static readonly DELETE_WORKSPACE_INSTANCE =
		"workspaces-instances:DeleteWorkspaceInstance";
	/** [Write] workspaces-instances:DisassociateVolume */
	static readonly DISASSOCIATE_VOLUME =
		"workspaces-instances:DisassociateVolume";
	/** [Read] workspaces-instances:GetWorkspaceInstance */
	static readonly GET_WORKSPACE_INSTANCE =
		"workspaces-instances:GetWorkspaceInstance";
	/** [List] workspaces-instances:ListInstanceTypes */
	static readonly LIST_INSTANCE_TYPES =
		"workspaces-instances:ListInstanceTypes";
	/** [List] workspaces-instances:ListRegions */
	static readonly LIST_REGIONS = "workspaces-instances:ListRegions";
	/** [List] workspaces-instances:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"workspaces-instances:ListTagsForResource";
	/** [List] workspaces-instances:ListWorkspaceInstances */
	static readonly LIST_WORKSPACE_INSTANCES =
		"workspaces-instances:ListWorkspaceInstances";
	/** [Tagging] workspaces-instances:TagResource */
	static readonly TAG_RESOURCE = "workspaces-instances:TagResource";
	/** [Tagging] workspaces-instances:UntagResource */
	static readonly UNTAG_RESOURCE = "workspaces-instances:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WorkspacesInstancesActions.GET_WORKSPACE_INSTANCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WorkspacesInstancesActions.ASSOCIATE_VOLUME,
		WorkspacesInstancesActions.CREATE_VOLUME,
		WorkspacesInstancesActions.CREATE_WORKSPACE_INSTANCE,
		WorkspacesInstancesActions.DELETE_VOLUME,
		WorkspacesInstancesActions.DELETE_WORKSPACE_INSTANCE,
		WorkspacesInstancesActions.DISASSOCIATE_VOLUME,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		WorkspacesInstancesActions.LIST_INSTANCE_TYPES,
		WorkspacesInstancesActions.LIST_REGIONS,
		WorkspacesInstancesActions.LIST_TAGS_FOR_RESOURCE,
		WorkspacesInstancesActions.LIST_WORKSPACE_INSTANCES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		WorkspacesInstancesActions.TAG_RESOURCE,
		WorkspacesInstancesActions.UNTAG_RESOURCE,
	];
}

const VolumeIdArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):volume/(?<volumeId>[^:/?]+)$",
);
const WorkspaceInstanceIdArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):workspaces-instances:(?<region>[^:]*):(?<account>[^:]*):workspaceinstance/(?<workspaceInstanceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for workspaces-instances resources.
 */
export class WorkspacesInstancesResources {
	/**
	 * Builds an ARN for the VolumeId resource.
	 */
	static volumeId(props: {
		/** The VolumeId component of the ARN. */
		readonly volumeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}:${props.account ?? "*"}:volume/${props.volumeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VolumeId resource.
	 */
	static isValidVolumeIdArn(arn: string): boolean {
		return VolumeIdArnRegex.test(arn);
	}

	/**
	 * Parses a VolumeId ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVolumeIdArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		volumeId: string;
	} {
		const match = VolumeIdArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VolumeId ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			volumeId: match.groups!.volumeId,
		};
	}

	/**
	 * Builds an ARN for the WorkspaceInstanceId resource.
	 */
	static workspaceInstanceId(props: {
		/** The WorkspaceInstanceId component of the ARN. */
		readonly workspaceInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:workspaces-instances:${props.region ?? "*"}:${props.account ?? "*"}:workspaceinstance/${props.workspaceInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the WorkspaceInstanceId resource.
	 */
	static isValidWorkspaceInstanceIdArn(arn: string): boolean {
		return WorkspaceInstanceIdArnRegex.test(arn);
	}

	/**
	 * Parses a WorkspaceInstanceId ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceInstanceIdArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceInstanceId: string;
	} {
		const match = WorkspaceInstanceIdArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid WorkspaceInstanceId ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceInstanceId: match.groups!.workspaceInstanceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for workspaces-instances.
 */
export class WorkspacesInstancesOperations {
	/** IAM actions required for the AssociateVolume API call. */
	static readonly ASSOCIATE_VOLUME: string[] = [
		"workspaces-instances:AssociateVolume",
	];
	/** IAM actions required for the CreateVolume API call. */
	static readonly CREATE_VOLUME: string[] = [
		"workspaces-instances:CreateVolume",
	];
	/** IAM actions required for the CreateWorkspaceInstance API call. */
	static readonly CREATE_WORKSPACE_INSTANCE: string[] = [
		"workspaces-instances:CreateWorkspaceInstance",
		"workspaces-instances:TagResource",
	];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DELETE_VOLUME: string[] = [
		"workspaces-instances:DeleteVolume",
	];
	/** IAM actions required for the DeleteWorkspaceInstance API call. */
	static readonly DELETE_WORKSPACE_INSTANCE: string[] = [
		"workspaces-instances:DeleteWorkspaceInstance",
	];
	/** IAM actions required for the DisassociateVolume API call. */
	static readonly DISASSOCIATE_VOLUME: string[] = [
		"workspaces-instances:DisassociateVolume",
	];
	/** IAM actions required for the GetWorkspaceInstance API call. */
	static readonly GET_WORKSPACE_INSTANCE: string[] = [
		"workspaces-instances:GetWorkspaceInstance",
	];
	/** IAM actions required for the ListInstanceTypes API call. */
	static readonly LIST_INSTANCE_TYPES: string[] = [
		"workspaces-instances:ListInstanceTypes",
	];
	/** IAM actions required for the ListRegions API call. */
	static readonly LIST_REGIONS: string[] = ["workspaces-instances:ListRegions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"workspaces-instances:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkspaceInstances API call. */
	static readonly LIST_WORKSPACE_INSTANCES: string[] = [
		"workspaces-instances:ListWorkspaceInstances",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["workspaces-instances:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"workspaces-instances:UntagResource",
	];
}

/**
 * Condition key constants and builders for workspaces-instances.
 */
export class WorkspacesInstancesConditions {
	/** Condition keys applicable to the CreateWorkspaceInstance action. */
	static readonly CREATE_WORKSPACE_INSTANCE_CONDITION_KEYS: string[] = [
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
