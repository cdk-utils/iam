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
	static readonly AssociateVolume = "workspaces-instances:AssociateVolume";
	/** [Write] workspaces-instances:CreateVolume */
	static readonly CreateVolume = "workspaces-instances:CreateVolume";
	/** [Write] workspaces-instances:CreateWorkspaceInstance */
	static readonly CreateWorkspaceInstance =
		"workspaces-instances:CreateWorkspaceInstance";
	/** [Write] workspaces-instances:DeleteVolume */
	static readonly DeleteVolume = "workspaces-instances:DeleteVolume";
	/** [Write] workspaces-instances:DeleteWorkspaceInstance */
	static readonly DeleteWorkspaceInstance =
		"workspaces-instances:DeleteWorkspaceInstance";
	/** [Write] workspaces-instances:DisassociateVolume */
	static readonly DisassociateVolume =
		"workspaces-instances:DisassociateVolume";
	/** [Read] workspaces-instances:GetWorkspaceInstance */
	static readonly actionGetWorkspaceInstance =
		"workspaces-instances:GetWorkspaceInstance";
	/** [List] workspaces-instances:ListInstanceTypes */
	static readonly ListInstanceTypes = "workspaces-instances:ListInstanceTypes";
	/** [List] workspaces-instances:ListRegions */
	static readonly ListRegions = "workspaces-instances:ListRegions";
	/** [List] workspaces-instances:ListTagsForResource */
	static readonly ListTagsForResource =
		"workspaces-instances:ListTagsForResource";
	/** [List] workspaces-instances:ListWorkspaceInstances */
	static readonly ListWorkspaceInstances =
		"workspaces-instances:ListWorkspaceInstances";
	/** [Tagging] workspaces-instances:TagResource */
	static readonly TagResource = "workspaces-instances:TagResource";
	/** [Tagging] workspaces-instances:UntagResource */
	static readonly UntagResource = "workspaces-instances:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WorkspacesInstancesActions.actionGetWorkspaceInstance,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WorkspacesInstancesActions.AssociateVolume,
		WorkspacesInstancesActions.CreateVolume,
		WorkspacesInstancesActions.CreateWorkspaceInstance,
		WorkspacesInstancesActions.DeleteVolume,
		WorkspacesInstancesActions.DeleteWorkspaceInstance,
		WorkspacesInstancesActions.DisassociateVolume,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WorkspacesInstancesActions.ListInstanceTypes,
		WorkspacesInstancesActions.ListRegions,
		WorkspacesInstancesActions.ListTagsForResource,
		WorkspacesInstancesActions.ListWorkspaceInstances,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WorkspacesInstancesActions.TagResource,
		WorkspacesInstancesActions.UntagResource,
	];
}

/**
 * Properties for building a VolumeId ARN.
 */
export interface WorkspacesInstancesVolumeIdArnProps {
	/** The VolumeId component of the ARN. */
	readonly volumeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a VolumeId ARN.
 */
export interface WorkspacesInstancesVolumeIdArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VolumeId component. */
	readonly volumeId: string;
}

/**
 * Properties for building a WorkspaceInstanceId ARN.
 */
export interface WorkspacesInstancesWorkspaceInstanceIdArnProps {
	/** The WorkspaceInstanceId component of the ARN. */
	readonly workspaceInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a WorkspaceInstanceId ARN.
 */
export interface WorkspacesInstancesWorkspaceInstanceIdArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceInstanceId component. */
	readonly workspaceInstanceId: string;
}

const VolumeIdArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*):(?<account>[^:]*):volume\/(?<volumeId>[^:/?]+)$/;
const WorkspaceInstanceIdArnRegex =
	/^arn:(?<partition>[^:]+):workspaces-instances:(?<region>[^:]*):(?<account>[^:]*):workspaceinstance\/(?<workspaceInstanceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for workspaces-instances resources.
 */
export class WorkspacesInstancesResources {
	/**
	 * Builds an ARN for the VolumeId resource.
	 */
	static volumeId(props: WorkspacesInstancesVolumeIdArnProps): string {
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
	static parseVolumeIdArn(
		arn: string,
	): WorkspacesInstancesVolumeIdArnComponents {
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
	static workspaceInstanceId(
		props: WorkspacesInstancesWorkspaceInstanceIdArnProps,
	): string {
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
	static parseWorkspaceInstanceIdArn(
		arn: string,
	): WorkspacesInstancesWorkspaceInstanceIdArnComponents {
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
	static readonly AssociateVolume: string[] = [
		"workspaces-instances:AssociateVolume",
	];
	/** IAM actions required for the CreateVolume API call. */
	static readonly CreateVolume: string[] = [
		"workspaces-instances:CreateVolume",
	];
	/** IAM actions required for the CreateWorkspaceInstance API call. */
	static readonly CreateWorkspaceInstance: string[] = [
		"workspaces-instances:CreateWorkspaceInstance",
		"workspaces-instances:TagResource",
	];
	/** IAM actions required for the DeleteVolume API call. */
	static readonly DeleteVolume: string[] = [
		"workspaces-instances:DeleteVolume",
	];
	/** IAM actions required for the DeleteWorkspaceInstance API call. */
	static readonly DeleteWorkspaceInstance: string[] = [
		"workspaces-instances:DeleteWorkspaceInstance",
	];
	/** IAM actions required for the DisassociateVolume API call. */
	static readonly DisassociateVolume: string[] = [
		"workspaces-instances:DisassociateVolume",
	];
	/** IAM actions required for the GetWorkspaceInstance API call. */
	static readonly opGetWorkspaceInstance: string[] = [
		"workspaces-instances:GetWorkspaceInstance",
	];
	/** IAM actions required for the ListInstanceTypes API call. */
	static readonly ListInstanceTypes: string[] = [
		"workspaces-instances:ListInstanceTypes",
	];
	/** IAM actions required for the ListRegions API call. */
	static readonly ListRegions: string[] = ["workspaces-instances:ListRegions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"workspaces-instances:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkspaceInstances API call. */
	static readonly ListWorkspaceInstances: string[] = [
		"workspaces-instances:ListWorkspaceInstances",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["workspaces-instances:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"workspaces-instances:UntagResource",
	];
}

/**
 * Condition key constants and builders for workspaces-instances.
 */
export class WorkspacesInstancesConditions {
	/** Condition keys applicable to the CreateWorkspaceInstance action. */
	static readonly CreateWorkspaceInstanceConditionKeys: string[] = [
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
