// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iottwinmaker.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iottwinmaker service.
 */
export class IottwinmakerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iottwinmaker";

	/** [Write] iottwinmaker:BatchPutPropertyValues */
	static readonly BatchPutPropertyValues =
		"iottwinmaker:BatchPutPropertyValues";
	/** [Write] iottwinmaker:CancelMetadataTransferJob */
	static readonly CancelMetadataTransferJob =
		"iottwinmaker:CancelMetadataTransferJob";
	/** [Write] iottwinmaker:CreateComponentType */
	static readonly CreateComponentType = "iottwinmaker:CreateComponentType";
	/** [Write] iottwinmaker:CreateEntity */
	static readonly CreateEntity = "iottwinmaker:CreateEntity";
	/** [Write] iottwinmaker:CreateMetadataTransferJob */
	static readonly CreateMetadataTransferJob =
		"iottwinmaker:CreateMetadataTransferJob";
	/** [Write] iottwinmaker:CreateScene */
	static readonly CreateScene = "iottwinmaker:CreateScene";
	/** [Write] iottwinmaker:CreateSyncJob */
	static readonly CreateSyncJob = "iottwinmaker:CreateSyncJob";
	/** [Write] iottwinmaker:CreateWorkspace */
	static readonly CreateWorkspace = "iottwinmaker:CreateWorkspace";
	/** [Write] iottwinmaker:DeleteComponentType */
	static readonly DeleteComponentType = "iottwinmaker:DeleteComponentType";
	/** [Write] iottwinmaker:DeleteEntity */
	static readonly DeleteEntity = "iottwinmaker:DeleteEntity";
	/** [Write] iottwinmaker:DeleteScene */
	static readonly DeleteScene = "iottwinmaker:DeleteScene";
	/** [Write] iottwinmaker:DeleteSyncJob */
	static readonly DeleteSyncJob = "iottwinmaker:DeleteSyncJob";
	/** [Write] iottwinmaker:DeleteWorkspace */
	static readonly DeleteWorkspace = "iottwinmaker:DeleteWorkspace";
	/** [Read] iottwinmaker:ExecuteQuery */
	static readonly ExecuteQuery = "iottwinmaker:ExecuteQuery";
	/** [Read] iottwinmaker:GetComponentType */
	static readonly actionGetComponentType = "iottwinmaker:GetComponentType";
	/** [Read] iottwinmaker:GetEntity */
	static readonly actionGetEntity = "iottwinmaker:GetEntity";
	/** [Read] iottwinmaker:GetMetadataTransferJob */
	static readonly actionGetMetadataTransferJob =
		"iottwinmaker:GetMetadataTransferJob";
	/** [Read] iottwinmaker:GetPricingPlan */
	static readonly actionGetPricingPlan = "iottwinmaker:GetPricingPlan";
	/** [Read] iottwinmaker:GetPropertyValue */
	static readonly actionGetPropertyValue = "iottwinmaker:GetPropertyValue";
	/** [Read] iottwinmaker:GetPropertyValueHistory */
	static readonly actionGetPropertyValueHistory =
		"iottwinmaker:GetPropertyValueHistory";
	/** [Read] iottwinmaker:GetScene */
	static readonly actionGetScene = "iottwinmaker:GetScene";
	/** [Read] iottwinmaker:GetSyncJob */
	static readonly actionGetSyncJob = "iottwinmaker:GetSyncJob";
	/** [Read] iottwinmaker:GetWorkspace */
	static readonly actionGetWorkspace = "iottwinmaker:GetWorkspace";
	/** [List] iottwinmaker:ListComponentTypes */
	static readonly ListComponentTypes = "iottwinmaker:ListComponentTypes";
	/** [List] iottwinmaker:ListComponents */
	static readonly ListComponents = "iottwinmaker:ListComponents";
	/** [List] iottwinmaker:ListEntities */
	static readonly ListEntities = "iottwinmaker:ListEntities";
	/** [List] iottwinmaker:ListMetadataTransferJobs */
	static readonly ListMetadataTransferJobs =
		"iottwinmaker:ListMetadataTransferJobs";
	/** [List] iottwinmaker:ListProperties */
	static readonly ListProperties = "iottwinmaker:ListProperties";
	/** [List] iottwinmaker:ListScenes */
	static readonly ListScenes = "iottwinmaker:ListScenes";
	/** [List] iottwinmaker:ListSyncJobs */
	static readonly ListSyncJobs = "iottwinmaker:ListSyncJobs";
	/** [List] iottwinmaker:ListSyncResources */
	static readonly ListSyncResources = "iottwinmaker:ListSyncResources";
	/** [List] iottwinmaker:ListTagsForResource */
	static readonly ListTagsForResource = "iottwinmaker:ListTagsForResource";
	/** [List] iottwinmaker:ListWorkspaces */
	static readonly ListWorkspaces = "iottwinmaker:ListWorkspaces";
	/** [Tagging] iottwinmaker:TagResource */
	static readonly TagResource = "iottwinmaker:TagResource";
	/** [Tagging] iottwinmaker:UntagResource */
	static readonly UntagResource = "iottwinmaker:UntagResource";
	/** [Write] iottwinmaker:UpdateComponentType */
	static readonly UpdateComponentType = "iottwinmaker:UpdateComponentType";
	/** [Write] iottwinmaker:UpdateEntity */
	static readonly UpdateEntity = "iottwinmaker:UpdateEntity";
	/** [Write] iottwinmaker:UpdatePricingPlan */
	static readonly UpdatePricingPlan = "iottwinmaker:UpdatePricingPlan";
	/** [Write] iottwinmaker:UpdateScene */
	static readonly UpdateScene = "iottwinmaker:UpdateScene";
	/** [Write] iottwinmaker:UpdateWorkspace */
	static readonly UpdateWorkspace = "iottwinmaker:UpdateWorkspace";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IottwinmakerActions.ExecuteQuery,
		IottwinmakerActions.actionGetComponentType,
		IottwinmakerActions.actionGetEntity,
		IottwinmakerActions.actionGetMetadataTransferJob,
		IottwinmakerActions.actionGetPricingPlan,
		IottwinmakerActions.actionGetPropertyValue,
		IottwinmakerActions.actionGetPropertyValueHistory,
		IottwinmakerActions.actionGetScene,
		IottwinmakerActions.actionGetSyncJob,
		IottwinmakerActions.actionGetWorkspace,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IottwinmakerActions.BatchPutPropertyValues,
		IottwinmakerActions.CancelMetadataTransferJob,
		IottwinmakerActions.CreateComponentType,
		IottwinmakerActions.CreateEntity,
		IottwinmakerActions.CreateMetadataTransferJob,
		IottwinmakerActions.CreateScene,
		IottwinmakerActions.CreateSyncJob,
		IottwinmakerActions.CreateWorkspace,
		IottwinmakerActions.DeleteComponentType,
		IottwinmakerActions.DeleteEntity,
		IottwinmakerActions.DeleteScene,
		IottwinmakerActions.DeleteSyncJob,
		IottwinmakerActions.DeleteWorkspace,
		IottwinmakerActions.UpdateComponentType,
		IottwinmakerActions.UpdateEntity,
		IottwinmakerActions.UpdatePricingPlan,
		IottwinmakerActions.UpdateScene,
		IottwinmakerActions.UpdateWorkspace,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IottwinmakerActions.ListComponentTypes,
		IottwinmakerActions.ListComponents,
		IottwinmakerActions.ListEntities,
		IottwinmakerActions.ListMetadataTransferJobs,
		IottwinmakerActions.ListProperties,
		IottwinmakerActions.ListScenes,
		IottwinmakerActions.ListSyncJobs,
		IottwinmakerActions.ListSyncResources,
		IottwinmakerActions.ListTagsForResource,
		IottwinmakerActions.ListWorkspaces,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IottwinmakerActions.TagResource,
		IottwinmakerActions.UntagResource,
	];
}

/**
 * Properties for building a componentType ARN.
 */
export interface IottwinmakerComponentTypeArnProps {
	/** The WorkspaceId component of the ARN. */
	readonly workspaceId: string;
	/** The ComponentTypeId component of the ARN. */
	readonly componentTypeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a componentType ARN.
 */
export interface IottwinmakerComponentTypeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
	/** The ComponentTypeId component. */
	readonly componentTypeId: string;
}

/**
 * Properties for building a entity ARN.
 */
export interface IottwinmakerEntityArnProps {
	/** The WorkspaceId component of the ARN. */
	readonly workspaceId: string;
	/** The EntityId component of the ARN. */
	readonly entityId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a entity ARN.
 */
export interface IottwinmakerEntityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
	/** The EntityId component. */
	readonly entityId: string;
}

/**
 * Properties for building a metadataTransferJob ARN.
 */
export interface IottwinmakerMetadataTransferJobArnProps {
	/** The MetadataTransferJobId component of the ARN. */
	readonly metadataTransferJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a metadataTransferJob ARN.
 */
export interface IottwinmakerMetadataTransferJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MetadataTransferJobId component. */
	readonly metadataTransferJobId: string;
}

/**
 * Properties for building a scene ARN.
 */
export interface IottwinmakerSceneArnProps {
	/** The WorkspaceId component of the ARN. */
	readonly workspaceId: string;
	/** The SceneId component of the ARN. */
	readonly sceneId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scene ARN.
 */
export interface IottwinmakerSceneArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
	/** The SceneId component. */
	readonly sceneId: string;
}

/**
 * Properties for building a syncJob ARN.
 */
export interface IottwinmakerSyncJobArnProps {
	/** The WorkspaceId component of the ARN. */
	readonly workspaceId: string;
	/** The SyncJobId component of the ARN. */
	readonly syncJobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a syncJob ARN.
 */
export interface IottwinmakerSyncJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
	/** The SyncJobId component. */
	readonly syncJobId: string;
}

/**
 * Properties for building a workspace ARN.
 */
export interface IottwinmakerWorkspaceArnProps {
	/** The WorkspaceId component of the ARN. */
	readonly workspaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspace ARN.
 */
export interface IottwinmakerWorkspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
}

const ComponentTypeArnRegex =
	/^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceId>[^:/?]+)\/component-type\/(?<componentTypeId>[^:/?]+)$/;
const EntityArnRegex =
	/^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceId>[^:/?]+)\/entity\/(?<entityId>[^:/?]+)$/;
const MetadataTransferJobArnRegex =
	/^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):metadata-transfer-job\/(?<metadataTransferJobId>[^:/?]+)$/;
const SceneArnRegex =
	/^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceId>[^:/?]+)\/scene\/(?<sceneId>[^:/?]+)$/;
const SyncJobArnRegex =
	/^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceId>[^:/?]+)\/sync-job\/(?<syncJobId>[^:/?]+)$/;
const WorkspaceArnRegex =
	/^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iottwinmaker resources.
 */
export class IottwinmakerResources {
	/**
	 * Builds an ARN for the componentType resource.
	 */
	static componentType(props: IottwinmakerComponentTypeArnProps): string {
		return `arn:${props.partition ?? "aws"}:iottwinmaker:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceId}/component-type/${props.componentTypeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the componentType resource.
	 */
	static isValidComponentTypeArn(arn: string): boolean {
		return ComponentTypeArnRegex.test(arn);
	}

	/**
	 * Parses a componentType ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComponentTypeArn(
		arn: string,
	): IottwinmakerComponentTypeArnComponents {
		const match = ComponentTypeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid componentType ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
			componentTypeId: match.groups!.componentTypeId,
		};
	}

	/**
	 * Builds an ARN for the entity resource.
	 */
	static entity(props: IottwinmakerEntityArnProps): string {
		return `arn:${props.partition ?? "aws"}:iottwinmaker:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceId}/entity/${props.entityId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entity resource.
	 */
	static isValidEntityArn(arn: string): boolean {
		return EntityArnRegex.test(arn);
	}

	/**
	 * Parses a entity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntityArn(arn: string): IottwinmakerEntityArnComponents {
		const match = EntityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
			entityId: match.groups!.entityId,
		};
	}

	/**
	 * Builds an ARN for the metadataTransferJob resource.
	 */
	static metadataTransferJob(
		props: IottwinmakerMetadataTransferJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:iottwinmaker:${props.region ?? "*"}:${props.account ?? "*"}:metadata-transfer-job/${props.metadataTransferJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the metadataTransferJob resource.
	 */
	static isValidMetadataTransferJobArn(arn: string): boolean {
		return MetadataTransferJobArnRegex.test(arn);
	}

	/**
	 * Parses a metadataTransferJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMetadataTransferJobArn(
		arn: string,
	): IottwinmakerMetadataTransferJobArnComponents {
		const match = MetadataTransferJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid metadataTransferJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			metadataTransferJobId: match.groups!.metadataTransferJobId,
		};
	}

	/**
	 * Builds an ARN for the scene resource.
	 */
	static scene(props: IottwinmakerSceneArnProps): string {
		return `arn:${props.partition ?? "aws"}:iottwinmaker:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceId}/scene/${props.sceneId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scene resource.
	 */
	static isValidSceneArn(arn: string): boolean {
		return SceneArnRegex.test(arn);
	}

	/**
	 * Parses a scene ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSceneArn(arn: string): IottwinmakerSceneArnComponents {
		const match = SceneArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scene ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
			sceneId: match.groups!.sceneId,
		};
	}

	/**
	 * Builds an ARN for the syncJob resource.
	 */
	static syncJob(props: IottwinmakerSyncJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:iottwinmaker:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceId}/sync-job/${props.syncJobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the syncJob resource.
	 */
	static isValidSyncJobArn(arn: string): boolean {
		return SyncJobArnRegex.test(arn);
	}

	/**
	 * Parses a syncJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSyncJobArn(arn: string): IottwinmakerSyncJobArnComponents {
		const match = SyncJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid syncJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
			syncJobId: match.groups!.syncJobId,
		};
	}

	/**
	 * Builds an ARN for the workspace resource.
	 */
	static workspace(props: IottwinmakerWorkspaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:iottwinmaker:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspace resource.
	 */
	static isValidWorkspaceArn(arn: string): boolean {
		return WorkspaceArnRegex.test(arn);
	}

	/**
	 * Parses a workspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceArn(arn: string): IottwinmakerWorkspaceArnComponents {
		const match = WorkspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for iottwinmaker.
 */
export class IottwinmakerOperations {
	/** IAM actions required for the BatchPutPropertyValues API call. */
	static readonly BatchPutPropertyValues: string[] = [
		"iottwinmaker:BatchPutPropertyValues",
	];
	/** IAM actions required for the CancelMetadataTransferJob API call. */
	static readonly CancelMetadataTransferJob: string[] = [
		"iottwinmaker:CancelMetadataTransferJob",
	];
	/** IAM actions required for the CreateComponentType API call. */
	static readonly CreateComponentType: string[] = [
		"iottwinmaker:CreateComponentType",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateEntity API call. */
	static readonly CreateEntity: string[] = [
		"iottwinmaker:CreateEntity",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateMetadataTransferJob API call. */
	static readonly CreateMetadataTransferJob: string[] = [
		"iottwinmaker:CreateMetadataTransferJob",
	];
	/** IAM actions required for the CreateScene API call. */
	static readonly CreateScene: string[] = [
		"iottwinmaker:CreateScene",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateSyncJob API call. */
	static readonly CreateSyncJob: string[] = [
		"iottwinmaker:CreateSyncJob",
		"iam:PassRole",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CreateWorkspace: string[] = [
		"iottwinmaker:CreateWorkspace",
		"iam:PassRole",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the DeleteComponentType API call. */
	static readonly DeleteComponentType: string[] = [
		"iottwinmaker:DeleteComponentType",
	];
	/** IAM actions required for the DeleteEntity API call. */
	static readonly DeleteEntity: string[] = ["iottwinmaker:DeleteEntity"];
	/** IAM actions required for the DeleteScene API call. */
	static readonly DeleteScene: string[] = ["iottwinmaker:DeleteScene"];
	/** IAM actions required for the DeleteSyncJob API call. */
	static readonly DeleteSyncJob: string[] = ["iottwinmaker:DeleteSyncJob"];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DeleteWorkspace: string[] = ["iottwinmaker:DeleteWorkspace"];
	/** IAM actions required for the ExecuteQuery API call. */
	static readonly ExecuteQuery: string[] = ["iottwinmaker:ExecuteQuery"];
	/** IAM actions required for the GetComponentType API call. */
	static readonly opGetComponentType: string[] = [
		"iottwinmaker:GetComponentType",
	];
	/** IAM actions required for the GetEntity API call. */
	static readonly opGetEntity: string[] = ["iottwinmaker:GetEntity"];
	/** IAM actions required for the GetMetadataTransferJob API call. */
	static readonly opGetMetadataTransferJob: string[] = [
		"iottwinmaker:GetMetadataTransferJob",
	];
	/** IAM actions required for the GetPricingPlan API call. */
	static readonly opGetPricingPlan: string[] = ["iottwinmaker:GetPricingPlan"];
	/** IAM actions required for the GetPropertyValue API call. */
	static readonly opGetPropertyValue: string[] = [
		"iottwinmaker:GetPropertyValue",
	];
	/** IAM actions required for the GetPropertyValueHistory API call. */
	static readonly opGetPropertyValueHistory: string[] = [
		"iottwinmaker:GetPropertyValueHistory",
	];
	/** IAM actions required for the GetScene API call. */
	static readonly opGetScene: string[] = ["iottwinmaker:GetScene"];
	/** IAM actions required for the GetSyncJob API call. */
	static readonly opGetSyncJob: string[] = ["iottwinmaker:GetSyncJob"];
	/** IAM actions required for the GetWorkspace API call. */
	static readonly opGetWorkspace: string[] = ["iottwinmaker:GetWorkspace"];
	/** IAM actions required for the ListComponentTypes API call. */
	static readonly ListComponentTypes: string[] = [
		"iottwinmaker:ListComponentTypes",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly ListComponents: string[] = ["iottwinmaker:ListComponents"];
	/** IAM actions required for the ListEntities API call. */
	static readonly ListEntities: string[] = ["iottwinmaker:ListEntities"];
	/** IAM actions required for the ListMetadataTransferJobs API call. */
	static readonly ListMetadataTransferJobs: string[] = [
		"iottwinmaker:ListMetadataTransferJobs",
	];
	/** IAM actions required for the ListProperties API call. */
	static readonly ListProperties: string[] = ["iottwinmaker:ListProperties"];
	/** IAM actions required for the ListScenes API call. */
	static readonly ListScenes: string[] = ["iottwinmaker:ListScenes"];
	/** IAM actions required for the ListSyncJobs API call. */
	static readonly ListSyncJobs: string[] = ["iottwinmaker:ListSyncJobs"];
	/** IAM actions required for the ListSyncResources API call. */
	static readonly ListSyncResources: string[] = [
		"iottwinmaker:ListSyncResources",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"iottwinmaker:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly ListWorkspaces: string[] = ["iottwinmaker:ListWorkspaces"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["iottwinmaker:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["iottwinmaker:UntagResource"];
	/** IAM actions required for the UpdateComponentType API call. */
	static readonly UpdateComponentType: string[] = [
		"iottwinmaker:UpdateComponentType",
	];
	/** IAM actions required for the UpdateEntity API call. */
	static readonly UpdateEntity: string[] = ["iottwinmaker:UpdateEntity"];
	/** IAM actions required for the UpdatePricingPlan API call. */
	static readonly UpdatePricingPlan: string[] = [
		"iottwinmaker:UpdatePricingPlan",
	];
	/** IAM actions required for the UpdateScene API call. */
	static readonly UpdateScene: string[] = ["iottwinmaker:UpdateScene"];
	/** IAM actions required for the UpdateWorkspace API call. */
	static readonly UpdateWorkspace: string[] = [
		"iam:PassRole",
		"iottwinmaker:UpdateWorkspace",
	];
}

/**
 * Condition key constants and builders for iottwinmaker.
 */
export class IottwinmakerConditions {
	/** Condition keys applicable to the CreateComponentType action. */
	static readonly CreateComponentTypeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEntity action. */
	static readonly CreateEntityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScene action. */
	static readonly CreateSceneConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSyncJob action. */
	static readonly CreateSyncJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CreateWorkspaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
	/** Condition key: iottwinmaker:destinationType (String) */
	static readonly DESTINATION_TYPE = "iottwinmaker:destinationType";
	/** Condition key: iottwinmaker:linkedServices (ArrayOfString) */
	static readonly LINKED_SERVICES = "iottwinmaker:linkedServices";
	/** Condition key: iottwinmaker:sourceType (String) */
	static readonly SOURCE_TYPE = "iottwinmaker:sourceType";

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
	 * Generates a condition block for `iottwinmaker:destinationType`.
	 */
	static destinationType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "iottwinmaker:destinationType": value } };
	}

	/**
	 * Generates a condition block for `iottwinmaker:linkedServices`.
	 */
	static linkedServices(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "iottwinmaker:linkedServices": values },
		};
	}

	/**
	 * Generates a condition block for `iottwinmaker:sourceType`.
	 */
	static sourceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "iottwinmaker:sourceType": value } };
	}
}
