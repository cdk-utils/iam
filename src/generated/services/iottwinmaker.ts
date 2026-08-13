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
	static readonly BATCH_PUT_PROPERTY_VALUES =
		"iottwinmaker:BatchPutPropertyValues";
	/** [Write] iottwinmaker:CancelMetadataTransferJob */
	static readonly CANCEL_METADATA_TRANSFER_JOB =
		"iottwinmaker:CancelMetadataTransferJob";
	/** [Write] iottwinmaker:CreateComponentType */
	static readonly CREATE_COMPONENT_TYPE = "iottwinmaker:CreateComponentType";
	/** [Write] iottwinmaker:CreateEntity */
	static readonly CREATE_ENTITY = "iottwinmaker:CreateEntity";
	/** [Write] iottwinmaker:CreateMetadataTransferJob */
	static readonly CREATE_METADATA_TRANSFER_JOB =
		"iottwinmaker:CreateMetadataTransferJob";
	/** [Write] iottwinmaker:CreateScene */
	static readonly CREATE_SCENE = "iottwinmaker:CreateScene";
	/** [Write] iottwinmaker:CreateSyncJob */
	static readonly CREATE_SYNC_JOB = "iottwinmaker:CreateSyncJob";
	/** [Write] iottwinmaker:CreateWorkspace */
	static readonly CREATE_WORKSPACE = "iottwinmaker:CreateWorkspace";
	/** [Write] iottwinmaker:DeleteComponentType */
	static readonly DELETE_COMPONENT_TYPE = "iottwinmaker:DeleteComponentType";
	/** [Write] iottwinmaker:DeleteEntity */
	static readonly DELETE_ENTITY = "iottwinmaker:DeleteEntity";
	/** [Write] iottwinmaker:DeleteScene */
	static readonly DELETE_SCENE = "iottwinmaker:DeleteScene";
	/** [Write] iottwinmaker:DeleteSyncJob */
	static readonly DELETE_SYNC_JOB = "iottwinmaker:DeleteSyncJob";
	/** [Write] iottwinmaker:DeleteWorkspace */
	static readonly DELETE_WORKSPACE = "iottwinmaker:DeleteWorkspace";
	/** [Read] iottwinmaker:ExecuteQuery */
	static readonly EXECUTE_QUERY = "iottwinmaker:ExecuteQuery";
	/** [Read] iottwinmaker:GetComponentType */
	static readonly GET_COMPONENT_TYPE = "iottwinmaker:GetComponentType";
	/** [Read] iottwinmaker:GetEntity */
	static readonly GET_ENTITY = "iottwinmaker:GetEntity";
	/** [Read] iottwinmaker:GetMetadataTransferJob */
	static readonly GET_METADATA_TRANSFER_JOB =
		"iottwinmaker:GetMetadataTransferJob";
	/** [Read] iottwinmaker:GetPricingPlan */
	static readonly GET_PRICING_PLAN = "iottwinmaker:GetPricingPlan";
	/** [Read] iottwinmaker:GetPropertyValue */
	static readonly GET_PROPERTY_VALUE = "iottwinmaker:GetPropertyValue";
	/** [Read] iottwinmaker:GetPropertyValueHistory */
	static readonly GET_PROPERTY_VALUE_HISTORY =
		"iottwinmaker:GetPropertyValueHistory";
	/** [Read] iottwinmaker:GetScene */
	static readonly GET_SCENE = "iottwinmaker:GetScene";
	/** [Read] iottwinmaker:GetSyncJob */
	static readonly GET_SYNC_JOB = "iottwinmaker:GetSyncJob";
	/** [Read] iottwinmaker:GetWorkspace */
	static readonly GET_WORKSPACE = "iottwinmaker:GetWorkspace";
	/** [List] iottwinmaker:ListComponentTypes */
	static readonly LIST_COMPONENT_TYPES = "iottwinmaker:ListComponentTypes";
	/** [List] iottwinmaker:ListComponents */
	static readonly LIST_COMPONENTS = "iottwinmaker:ListComponents";
	/** [List] iottwinmaker:ListEntities */
	static readonly LIST_ENTITIES = "iottwinmaker:ListEntities";
	/** [List] iottwinmaker:ListMetadataTransferJobs */
	static readonly LIST_METADATA_TRANSFER_JOBS =
		"iottwinmaker:ListMetadataTransferJobs";
	/** [List] iottwinmaker:ListProperties */
	static readonly LIST_PROPERTIES = "iottwinmaker:ListProperties";
	/** [List] iottwinmaker:ListScenes */
	static readonly LIST_SCENES = "iottwinmaker:ListScenes";
	/** [List] iottwinmaker:ListSyncJobs */
	static readonly LIST_SYNC_JOBS = "iottwinmaker:ListSyncJobs";
	/** [List] iottwinmaker:ListSyncResources */
	static readonly LIST_SYNC_RESOURCES = "iottwinmaker:ListSyncResources";
	/** [List] iottwinmaker:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "iottwinmaker:ListTagsForResource";
	/** [List] iottwinmaker:ListWorkspaces */
	static readonly LIST_WORKSPACES = "iottwinmaker:ListWorkspaces";
	/** [Tagging] iottwinmaker:TagResource */
	static readonly TAG_RESOURCE = "iottwinmaker:TagResource";
	/** [Tagging] iottwinmaker:UntagResource */
	static readonly UNTAG_RESOURCE = "iottwinmaker:UntagResource";
	/** [Write] iottwinmaker:UpdateComponentType */
	static readonly UPDATE_COMPONENT_TYPE = "iottwinmaker:UpdateComponentType";
	/** [Write] iottwinmaker:UpdateEntity */
	static readonly UPDATE_ENTITY = "iottwinmaker:UpdateEntity";
	/** [Write] iottwinmaker:UpdatePricingPlan */
	static readonly UPDATE_PRICING_PLAN = "iottwinmaker:UpdatePricingPlan";
	/** [Write] iottwinmaker:UpdateScene */
	static readonly UPDATE_SCENE = "iottwinmaker:UpdateScene";
	/** [Write] iottwinmaker:UpdateWorkspace */
	static readonly UPDATE_WORKSPACE = "iottwinmaker:UpdateWorkspace";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IottwinmakerActions.EXECUTE_QUERY,
		IottwinmakerActions.GET_COMPONENT_TYPE,
		IottwinmakerActions.GET_ENTITY,
		IottwinmakerActions.GET_METADATA_TRANSFER_JOB,
		IottwinmakerActions.GET_PRICING_PLAN,
		IottwinmakerActions.GET_PROPERTY_VALUE,
		IottwinmakerActions.GET_PROPERTY_VALUE_HISTORY,
		IottwinmakerActions.GET_SCENE,
		IottwinmakerActions.GET_SYNC_JOB,
		IottwinmakerActions.GET_WORKSPACE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IottwinmakerActions.BATCH_PUT_PROPERTY_VALUES,
		IottwinmakerActions.CANCEL_METADATA_TRANSFER_JOB,
		IottwinmakerActions.CREATE_COMPONENT_TYPE,
		IottwinmakerActions.CREATE_ENTITY,
		IottwinmakerActions.CREATE_METADATA_TRANSFER_JOB,
		IottwinmakerActions.CREATE_SCENE,
		IottwinmakerActions.CREATE_SYNC_JOB,
		IottwinmakerActions.CREATE_WORKSPACE,
		IottwinmakerActions.DELETE_COMPONENT_TYPE,
		IottwinmakerActions.DELETE_ENTITY,
		IottwinmakerActions.DELETE_SCENE,
		IottwinmakerActions.DELETE_SYNC_JOB,
		IottwinmakerActions.DELETE_WORKSPACE,
		IottwinmakerActions.UPDATE_COMPONENT_TYPE,
		IottwinmakerActions.UPDATE_ENTITY,
		IottwinmakerActions.UPDATE_PRICING_PLAN,
		IottwinmakerActions.UPDATE_SCENE,
		IottwinmakerActions.UPDATE_WORKSPACE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IottwinmakerActions.LIST_COMPONENT_TYPES,
		IottwinmakerActions.LIST_COMPONENTS,
		IottwinmakerActions.LIST_ENTITIES,
		IottwinmakerActions.LIST_METADATA_TRANSFER_JOBS,
		IottwinmakerActions.LIST_PROPERTIES,
		IottwinmakerActions.LIST_SCENES,
		IottwinmakerActions.LIST_SYNC_JOBS,
		IottwinmakerActions.LIST_SYNC_RESOURCES,
		IottwinmakerActions.LIST_TAGS_FOR_RESOURCE,
		IottwinmakerActions.LIST_WORKSPACES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IottwinmakerActions.TAG_RESOURCE,
		IottwinmakerActions.UNTAG_RESOURCE,
	];
}

const ComponentTypeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceId>[^:/?]+)/component-type/(?<componentTypeId>[^:/?]+)$",
);
const EntityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceId>[^:/?]+)/entity/(?<entityId>[^:/?]+)$",
);
const MetadataTransferJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):metadata-transfer-job/(?<metadataTransferJobId>[^:/?]+)$",
);
const SceneArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceId>[^:/?]+)/scene/(?<sceneId>[^:/?]+)$",
);
const SyncJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceId>[^:/?]+)/sync-job/(?<syncJobId>[^:/?]+)$",
);
const WorkspaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iottwinmaker:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iottwinmaker resources.
 */
export class IottwinmakerResources {
	/**
	 * Builds an ARN for the componentType resource.
	 */
	static componentType(props: {
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
	}): string {
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
	static parseComponentTypeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
		componentTypeId: string;
	} {
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
	static entity(props: {
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
	}): string {
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
	static parseEntityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
		entityId: string;
	} {
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
	static metadataTransferJob(props: {
		/** The MetadataTransferJobId component of the ARN. */
		readonly metadataTransferJobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMetadataTransferJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		metadataTransferJobId: string;
	} {
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
	static scene(props: {
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
	}): string {
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
	static parseSceneArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
		sceneId: string;
	} {
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
	static syncJob(props: {
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
	}): string {
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
	static parseSyncJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
		syncJobId: string;
	} {
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
	static workspace(props: {
		/** The WorkspaceId component of the ARN. */
		readonly workspaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkspaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
	} {
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
	static readonly BATCH_PUT_PROPERTY_VALUES: string[] = [
		"iottwinmaker:BatchPutPropertyValues",
	];
	/** IAM actions required for the CancelMetadataTransferJob API call. */
	static readonly CANCEL_METADATA_TRANSFER_JOB: string[] = [
		"iottwinmaker:CancelMetadataTransferJob",
	];
	/** IAM actions required for the CreateComponentType API call. */
	static readonly CREATE_COMPONENT_TYPE: string[] = [
		"iottwinmaker:CreateComponentType",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateEntity API call. */
	static readonly CREATE_ENTITY: string[] = [
		"iottwinmaker:CreateEntity",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateMetadataTransferJob API call. */
	static readonly CREATE_METADATA_TRANSFER_JOB: string[] = [
		"iottwinmaker:CreateMetadataTransferJob",
	];
	/** IAM actions required for the CreateScene API call. */
	static readonly CREATE_SCENE: string[] = [
		"iottwinmaker:CreateScene",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateSyncJob API call. */
	static readonly CREATE_SYNC_JOB: string[] = [
		"iottwinmaker:CreateSyncJob",
		"iam:PassRole",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CREATE_WORKSPACE: string[] = [
		"iottwinmaker:CreateWorkspace",
		"iam:PassRole",
		"iottwinmaker:TagResource",
	];
	/** IAM actions required for the DeleteComponentType API call. */
	static readonly DELETE_COMPONENT_TYPE: string[] = [
		"iottwinmaker:DeleteComponentType",
	];
	/** IAM actions required for the DeleteEntity API call. */
	static readonly DELETE_ENTITY: string[] = ["iottwinmaker:DeleteEntity"];
	/** IAM actions required for the DeleteScene API call. */
	static readonly DELETE_SCENE: string[] = ["iottwinmaker:DeleteScene"];
	/** IAM actions required for the DeleteSyncJob API call. */
	static readonly DELETE_SYNC_JOB: string[] = ["iottwinmaker:DeleteSyncJob"];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DELETE_WORKSPACE: string[] = ["iottwinmaker:DeleteWorkspace"];
	/** IAM actions required for the ExecuteQuery API call. */
	static readonly EXECUTE_QUERY: string[] = ["iottwinmaker:ExecuteQuery"];
	/** IAM actions required for the GetComponentType API call. */
	static readonly GET_COMPONENT_TYPE: string[] = [
		"iottwinmaker:GetComponentType",
	];
	/** IAM actions required for the GetEntity API call. */
	static readonly GET_ENTITY: string[] = ["iottwinmaker:GetEntity"];
	/** IAM actions required for the GetMetadataTransferJob API call. */
	static readonly GET_METADATA_TRANSFER_JOB: string[] = [
		"iottwinmaker:GetMetadataTransferJob",
	];
	/** IAM actions required for the GetPricingPlan API call. */
	static readonly GET_PRICING_PLAN: string[] = ["iottwinmaker:GetPricingPlan"];
	/** IAM actions required for the GetPropertyValue API call. */
	static readonly GET_PROPERTY_VALUE: string[] = [
		"iottwinmaker:GetPropertyValue",
	];
	/** IAM actions required for the GetPropertyValueHistory API call. */
	static readonly GET_PROPERTY_VALUE_HISTORY: string[] = [
		"iottwinmaker:GetPropertyValueHistory",
	];
	/** IAM actions required for the GetScene API call. */
	static readonly GET_SCENE: string[] = ["iottwinmaker:GetScene"];
	/** IAM actions required for the GetSyncJob API call. */
	static readonly GET_SYNC_JOB: string[] = ["iottwinmaker:GetSyncJob"];
	/** IAM actions required for the GetWorkspace API call. */
	static readonly GET_WORKSPACE: string[] = ["iottwinmaker:GetWorkspace"];
	/** IAM actions required for the ListComponentTypes API call. */
	static readonly LIST_COMPONENT_TYPES: string[] = [
		"iottwinmaker:ListComponentTypes",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly LIST_COMPONENTS: string[] = ["iottwinmaker:ListComponents"];
	/** IAM actions required for the ListEntities API call. */
	static readonly LIST_ENTITIES: string[] = ["iottwinmaker:ListEntities"];
	/** IAM actions required for the ListMetadataTransferJobs API call. */
	static readonly LIST_METADATA_TRANSFER_JOBS: string[] = [
		"iottwinmaker:ListMetadataTransferJobs",
	];
	/** IAM actions required for the ListProperties API call. */
	static readonly LIST_PROPERTIES: string[] = ["iottwinmaker:ListProperties"];
	/** IAM actions required for the ListScenes API call. */
	static readonly LIST_SCENES: string[] = ["iottwinmaker:ListScenes"];
	/** IAM actions required for the ListSyncJobs API call. */
	static readonly LIST_SYNC_JOBS: string[] = ["iottwinmaker:ListSyncJobs"];
	/** IAM actions required for the ListSyncResources API call. */
	static readonly LIST_SYNC_RESOURCES: string[] = [
		"iottwinmaker:ListSyncResources",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"iottwinmaker:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly LIST_WORKSPACES: string[] = ["iottwinmaker:ListWorkspaces"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["iottwinmaker:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["iottwinmaker:UntagResource"];
	/** IAM actions required for the UpdateComponentType API call. */
	static readonly UPDATE_COMPONENT_TYPE: string[] = [
		"iottwinmaker:UpdateComponentType",
	];
	/** IAM actions required for the UpdateEntity API call. */
	static readonly UPDATE_ENTITY: string[] = ["iottwinmaker:UpdateEntity"];
	/** IAM actions required for the UpdatePricingPlan API call. */
	static readonly UPDATE_PRICING_PLAN: string[] = [
		"iottwinmaker:UpdatePricingPlan",
	];
	/** IAM actions required for the UpdateScene API call. */
	static readonly UPDATE_SCENE: string[] = ["iottwinmaker:UpdateScene"];
	/** IAM actions required for the UpdateWorkspace API call. */
	static readonly UPDATE_WORKSPACE: string[] = [
		"iam:PassRole",
		"iottwinmaker:UpdateWorkspace",
	];
}

/**
 * Condition key constants and builders for iottwinmaker.
 */
export class IottwinmakerConditions {
	/** Condition keys applicable to the CreateComponentType action. */
	static readonly CREATE_COMPONENT_TYPE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEntity action. */
	static readonly CREATE_ENTITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScene action. */
	static readonly CREATE_SCENE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSyncJob action. */
	static readonly CREATE_SYNC_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CREATE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
