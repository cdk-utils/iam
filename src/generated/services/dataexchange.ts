// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/dataexchange.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the dataexchange service.
 */
export class DataexchangeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "dataexchange";

	/** [Write] dataexchange:AcceptDataGrant */
	static readonly ACCEPT_DATA_GRANT = "dataexchange:AcceptDataGrant";
	/** [Write] dataexchange:CancelJob */
	static readonly CANCEL_JOB = "dataexchange:CancelJob";
	/** [Write] dataexchange:CreateAsset */
	static readonly CREATE_ASSET = "dataexchange:CreateAsset";
	/** [Write] dataexchange:CreateDataGrant */
	static readonly CREATE_DATA_GRANT = "dataexchange:CreateDataGrant";
	/** [Write] dataexchange:CreateDataSet */
	static readonly CREATE_DATA_SET = "dataexchange:CreateDataSet";
	/** [Write] dataexchange:CreateEventAction */
	static readonly CREATE_EVENT_ACTION = "dataexchange:CreateEventAction";
	/** [Write] dataexchange:CreateJob */
	static readonly CREATE_JOB = "dataexchange:CreateJob";
	/** [Write] dataexchange:CreateRevision */
	static readonly CREATE_REVISION = "dataexchange:CreateRevision";
	/** [Write] dataexchange:DeleteAsset */
	static readonly DELETE_ASSET = "dataexchange:DeleteAsset";
	/** [Write] dataexchange:DeleteDataGrant */
	static readonly DELETE_DATA_GRANT = "dataexchange:DeleteDataGrant";
	/** [Write] dataexchange:DeleteDataSet */
	static readonly DELETE_DATA_SET = "dataexchange:DeleteDataSet";
	/** [Write] dataexchange:DeleteEventAction */
	static readonly DELETE_EVENT_ACTION = "dataexchange:DeleteEventAction";
	/** [Write] dataexchange:DeleteRevision */
	static readonly DELETE_REVISION = "dataexchange:DeleteRevision";
	/** [Read] dataexchange:GetAsset */
	static readonly GET_ASSET = "dataexchange:GetAsset";
	/** [Read] dataexchange:GetDataGrant */
	static readonly GET_DATA_GRANT = "dataexchange:GetDataGrant";
	/** [Read] dataexchange:GetDataSet */
	static readonly GET_DATA_SET = "dataexchange:GetDataSet";
	/** [Read] dataexchange:GetEventAction */
	static readonly GET_EVENT_ACTION = "dataexchange:GetEventAction";
	/** [Read] dataexchange:GetJob */
	static readonly GET_JOB = "dataexchange:GetJob";
	/** [Read] dataexchange:GetReceivedDataGrant */
	static readonly GET_RECEIVED_DATA_GRANT = "dataexchange:GetReceivedDataGrant";
	/** [Read] dataexchange:GetRevision */
	static readonly GET_REVISION = "dataexchange:GetRevision";
	/** [List] dataexchange:ListDataGrants */
	static readonly LIST_DATA_GRANTS = "dataexchange:ListDataGrants";
	/** [List] dataexchange:ListDataSetRevisions */
	static readonly LIST_DATA_SET_REVISIONS = "dataexchange:ListDataSetRevisions";
	/** [List] dataexchange:ListDataSets */
	static readonly LIST_DATA_SETS = "dataexchange:ListDataSets";
	/** [List] dataexchange:ListEventActions */
	static readonly LIST_EVENT_ACTIONS = "dataexchange:ListEventActions";
	/** [List] dataexchange:ListJobs */
	static readonly LIST_JOBS = "dataexchange:ListJobs";
	/** [List] dataexchange:ListReceivedDataGrants */
	static readonly LIST_RECEIVED_DATA_GRANTS =
		"dataexchange:ListReceivedDataGrants";
	/** [List] dataexchange:ListRevisionAssets */
	static readonly LIST_REVISION_ASSETS = "dataexchange:ListRevisionAssets";
	/** [List] dataexchange:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "dataexchange:ListTagsForResource";
	/** [Write] dataexchange:PublishDataSet */
	static readonly PUBLISH_DATA_SET = "dataexchange:PublishDataSet";
	/** [Write] dataexchange:PublishToDataGrant */
	static readonly PUBLISH_TO_DATA_GRANT = "dataexchange:PublishToDataGrant";
	/** [Write] dataexchange:RevokeRevision */
	static readonly REVOKE_REVISION = "dataexchange:RevokeRevision";
	/** [Write] dataexchange:SendApiAsset */
	static readonly SEND_API_ASSET = "dataexchange:SendApiAsset";
	/** [Write] dataexchange:SendDataSetNotification */
	static readonly SEND_DATA_SET_NOTIFICATION =
		"dataexchange:SendDataSetNotification";
	/** [Write] dataexchange:StartJob */
	static readonly START_JOB = "dataexchange:StartJob";
	/** [Tagging] dataexchange:TagResource */
	static readonly TAG_RESOURCE = "dataexchange:TagResource";
	/** [Tagging] dataexchange:UntagResource */
	static readonly UNTAG_RESOURCE = "dataexchange:UntagResource";
	/** [Write] dataexchange:UpdateAsset */
	static readonly UPDATE_ASSET = "dataexchange:UpdateAsset";
	/** [Write] dataexchange:UpdateDataSet */
	static readonly UPDATE_DATA_SET = "dataexchange:UpdateDataSet";
	/** [Write] dataexchange:UpdateEventAction */
	static readonly UPDATE_EVENT_ACTION = "dataexchange:UpdateEventAction";
	/** [Write] dataexchange:UpdateRevision */
	static readonly UPDATE_REVISION = "dataexchange:UpdateRevision";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DataexchangeActions.GET_ASSET,
		DataexchangeActions.GET_DATA_GRANT,
		DataexchangeActions.GET_DATA_SET,
		DataexchangeActions.GET_EVENT_ACTION,
		DataexchangeActions.GET_JOB,
		DataexchangeActions.GET_RECEIVED_DATA_GRANT,
		DataexchangeActions.GET_REVISION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DataexchangeActions.ACCEPT_DATA_GRANT,
		DataexchangeActions.CANCEL_JOB,
		DataexchangeActions.CREATE_ASSET,
		DataexchangeActions.CREATE_DATA_GRANT,
		DataexchangeActions.CREATE_DATA_SET,
		DataexchangeActions.CREATE_EVENT_ACTION,
		DataexchangeActions.CREATE_JOB,
		DataexchangeActions.CREATE_REVISION,
		DataexchangeActions.DELETE_ASSET,
		DataexchangeActions.DELETE_DATA_GRANT,
		DataexchangeActions.DELETE_DATA_SET,
		DataexchangeActions.DELETE_EVENT_ACTION,
		DataexchangeActions.DELETE_REVISION,
		DataexchangeActions.PUBLISH_DATA_SET,
		DataexchangeActions.PUBLISH_TO_DATA_GRANT,
		DataexchangeActions.REVOKE_REVISION,
		DataexchangeActions.SEND_API_ASSET,
		DataexchangeActions.SEND_DATA_SET_NOTIFICATION,
		DataexchangeActions.START_JOB,
		DataexchangeActions.UPDATE_ASSET,
		DataexchangeActions.UPDATE_DATA_SET,
		DataexchangeActions.UPDATE_EVENT_ACTION,
		DataexchangeActions.UPDATE_REVISION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DataexchangeActions.LIST_DATA_GRANTS,
		DataexchangeActions.LIST_DATA_SET_REVISIONS,
		DataexchangeActions.LIST_DATA_SETS,
		DataexchangeActions.LIST_EVENT_ACTIONS,
		DataexchangeActions.LIST_JOBS,
		DataexchangeActions.LIST_RECEIVED_DATA_GRANTS,
		DataexchangeActions.LIST_REVISION_ASSETS,
		DataexchangeActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DataexchangeActions.TAG_RESOURCE,
		DataexchangeActions.UNTAG_RESOURCE,
	];
}

const AssetsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-sets/(?<dataSetId>[^:/?]+)/revisions/(?<revisionId>[^:/?]+)/assets/(?<assetId>[^:/?]+)$",
);
const DataGrantsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-grants/(?<dataGrantId>[^:/?]+)$",
);
const DataSetsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-sets/(?<dataSetId>[^:/?]+)$",
);
const EntitledAssetsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*)::data-sets/(?<dataSetId>[^:/?]+)/revisions/(?<revisionId>[^:/?]+)/assets/(?<assetId>[^:/?]+)$",
);
const EntitledDataSetsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*)::data-sets/(?<dataSetId>[^:/?]+)$",
);
const EntitledRevisionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*)::data-sets/(?<dataSetId>[^:/?]+)/revisions/(?<revisionId>[^:/?]+)$",
);
const EventActionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):event-actions/(?<eventActionId>[^:/?]+)$",
);
const JobsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):jobs/(?<jobId>[^:/?]+)$",
);
const RevisionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-sets/(?<dataSetId>[^:/?]+)/revisions/(?<revisionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for dataexchange resources.
 */
export class DataexchangeResources {
	/**
	 * Builds an ARN for the assets resource.
	 */
	static assets(props: {
		/** The DataSetId component of the ARN. */
		readonly dataSetId: string;
		/** The RevisionId component of the ARN. */
		readonly revisionId: string;
		/** The AssetId component of the ARN. */
		readonly assetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}:${props.account ?? "*"}:data-sets/${props.dataSetId}/revisions/${props.revisionId}/assets/${props.assetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assets resource.
	 */
	static isValidAssetsArn(arn: string): boolean {
		return AssetsArnRegex.test(arn);
	}

	/**
	 * Parses a assets ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssetsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataSetId: string;
		revisionId: string;
		assetId: string;
	} {
		const match = AssetsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assets ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataSetId: match.groups!.dataSetId,
			revisionId: match.groups!.revisionId,
			assetId: match.groups!.assetId,
		};
	}

	/**
	 * Builds an ARN for the data-grants resource.
	 */
	static dataGrants(props: {
		/** The DataGrantId component of the ARN. */
		readonly dataGrantId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}:${props.account ?? "*"}:data-grants/${props.dataGrantId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-grants resource.
	 */
	static isValidDataGrantsArn(arn: string): boolean {
		return DataGrantsArnRegex.test(arn);
	}

	/**
	 * Parses a data-grants ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataGrantsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataGrantId: string;
	} {
		const match = DataGrantsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-grants ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataGrantId: match.groups!.dataGrantId,
		};
	}

	/**
	 * Builds an ARN for the data-sets resource.
	 */
	static dataSets(props: {
		/** The DataSetId component of the ARN. */
		readonly dataSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}:${props.account ?? "*"}:data-sets/${props.dataSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-sets resource.
	 */
	static isValidDataSetsArn(arn: string): boolean {
		return DataSetsArnRegex.test(arn);
	}

	/**
	 * Parses a data-sets ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataSetsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataSetId: string;
	} {
		const match = DataSetsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-sets ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataSetId: match.groups!.dataSetId,
		};
	}

	/**
	 * Builds an ARN for the entitled-assets resource.
	 */
	static entitledAssets(props: {
		/** The DataSetId component of the ARN. */
		readonly dataSetId: string;
		/** The RevisionId component of the ARN. */
		readonly revisionId: string;
		/** The AssetId component of the ARN. */
		readonly assetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}::data-sets/${props.dataSetId}/revisions/${props.revisionId}/assets/${props.assetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entitled-assets resource.
	 */
	static isValidEntitledAssetsArn(arn: string): boolean {
		return EntitledAssetsArnRegex.test(arn);
	}

	/**
	 * Parses a entitled-assets ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntitledAssetsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataSetId: string;
		revisionId: string;
		assetId: string;
	} {
		const match = EntitledAssetsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entitled-assets ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataSetId: match.groups!.dataSetId,
			revisionId: match.groups!.revisionId,
			assetId: match.groups!.assetId,
		};
	}

	/**
	 * Builds an ARN for the entitled-data-sets resource.
	 */
	static entitledDataSets(props: {
		/** The DataSetId component of the ARN. */
		readonly dataSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}::data-sets/${props.dataSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entitled-data-sets resource.
	 */
	static isValidEntitledDataSetsArn(arn: string): boolean {
		return EntitledDataSetsArnRegex.test(arn);
	}

	/**
	 * Parses a entitled-data-sets ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntitledDataSetsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataSetId: string;
	} {
		const match = EntitledDataSetsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entitled-data-sets ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataSetId: match.groups!.dataSetId,
		};
	}

	/**
	 * Builds an ARN for the entitled-revisions resource.
	 */
	static entitledRevisions(props: {
		/** The DataSetId component of the ARN. */
		readonly dataSetId: string;
		/** The RevisionId component of the ARN. */
		readonly revisionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}::data-sets/${props.dataSetId}/revisions/${props.revisionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the entitled-revisions resource.
	 */
	static isValidEntitledRevisionsArn(arn: string): boolean {
		return EntitledRevisionsArnRegex.test(arn);
	}

	/**
	 * Parses a entitled-revisions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEntitledRevisionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataSetId: string;
		revisionId: string;
	} {
		const match = EntitledRevisionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid entitled-revisions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataSetId: match.groups!.dataSetId,
			revisionId: match.groups!.revisionId,
		};
	}

	/**
	 * Builds an ARN for the event-actions resource.
	 */
	static eventActions(props: {
		/** The EventActionId component of the ARN. */
		readonly eventActionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}:${props.account ?? "*"}:event-actions/${props.eventActionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-actions resource.
	 */
	static isValidEventActionsArn(arn: string): boolean {
		return EventActionsArnRegex.test(arn);
	}

	/**
	 * Parses a event-actions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventActionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventActionId: string;
	} {
		const match = EventActionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-actions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventActionId: match.groups!.eventActionId,
		};
	}

	/**
	 * Builds an ARN for the jobs resource.
	 */
	static jobs(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}:${props.account ?? "*"}:jobs/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the jobs resource.
	 */
	static isValidJobsArn(arn: string): boolean {
		return JobsArnRegex.test(arn);
	}

	/**
	 * Parses a jobs ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
		const match = JobsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid jobs ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the revisions resource.
	 */
	static revisions(props: {
		/** The DataSetId component of the ARN. */
		readonly dataSetId: string;
		/** The RevisionId component of the ARN. */
		readonly revisionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dataexchange:${props.region ?? "*"}:${props.account ?? "*"}:data-sets/${props.dataSetId}/revisions/${props.revisionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the revisions resource.
	 */
	static isValidRevisionsArn(arn: string): boolean {
		return RevisionsArnRegex.test(arn);
	}

	/**
	 * Parses a revisions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRevisionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dataSetId: string;
		revisionId: string;
	} {
		const match = RevisionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid revisions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dataSetId: match.groups!.dataSetId,
			revisionId: match.groups!.revisionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for dataexchange.
 */
export class DataexchangeOperations {
	/** IAM actions required for the AcceptDataGrant API call. */
	static readonly ACCEPT_DATA_GRANT: string[] = [
		"dataexchange:AcceptDataGrant",
		"aws-marketplace:Subscribe",
	];
	/** IAM actions required for the CancelJob API call. */
	static readonly CANCEL_JOB: string[] = ["dataexchange:CancelJob"];
	/** IAM actions required for the CreateDataGrant API call. */
	static readonly CREATE_DATA_GRANT: string[] = [
		"dataexchange:CreateDataGrant",
		"dataexchange:CreateJob",
		"dataexchange:PublishDataSet",
		"dataexchange:PublishToDataGrant",
		"dataexchange:StartJob",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the CreateDataSet API call. */
	static readonly CREATE_DATA_SET: string[] = [
		"dataexchange:CreateDataSet",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the CreateEventAction API call. */
	static readonly CREATE_EVENT_ACTION: string[] = [
		"dataexchange:CreateEventAction",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CREATE_JOB: string[] = [
		"dataexchange:CreateJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRevision API call. */
	static readonly CREATE_REVISION: string[] = [
		"dataexchange:CreateRevision",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DELETE_ASSET: string[] = ["dataexchange:DeleteAsset"];
	/** IAM actions required for the DeleteDataGrant API call. */
	static readonly DELETE_DATA_GRANT: string[] = [
		"dataexchange:DeleteDataGrant",
	];
	/** IAM actions required for the DeleteDataSet API call. */
	static readonly DELETE_DATA_SET: string[] = ["dataexchange:DeleteDataSet"];
	/** IAM actions required for the DeleteEventAction API call. */
	static readonly DELETE_EVENT_ACTION: string[] = [
		"dataexchange:DeleteEventAction",
	];
	/** IAM actions required for the DeleteRevision API call. */
	static readonly DELETE_REVISION: string[] = ["dataexchange:DeleteRevision"];
	/** IAM actions required for the GetAsset API call. */
	static readonly GET_ASSET: string[] = ["dataexchange:GetAsset"];
	/** IAM actions required for the GetDataGrant API call. */
	static readonly GET_DATA_GRANT: string[] = [
		"dataexchange:GetDataGrant",
		"dataexchange:GetDataSet",
	];
	/** IAM actions required for the GetDataSet API call. */
	static readonly GET_DATA_SET: string[] = ["dataexchange:GetDataSet"];
	/** IAM actions required for the GetEventAction API call. */
	static readonly GET_EVENT_ACTION: string[] = ["dataexchange:GetEventAction"];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["dataexchange:GetJob"];
	/** IAM actions required for the GetReceivedDataGrant API call. */
	static readonly GET_RECEIVED_DATA_GRANT: string[] = [
		"dataexchange:GetDataSet",
		"dataexchange:GetReceivedDataGrant",
	];
	/** IAM actions required for the GetRevision API call. */
	static readonly GET_REVISION: string[] = ["dataexchange:GetRevision"];
	/** IAM actions required for the ListDataGrants API call. */
	static readonly LIST_DATA_GRANTS: string[] = [
		"dataexchange:ListDataGrants",
		"dataexchange:ListDataSets",
	];
	/** IAM actions required for the ListDataSetRevisions API call. */
	static readonly LIST_DATA_SET_REVISIONS: string[] = [
		"dataexchange:ListDataSetRevisions",
	];
	/** IAM actions required for the ListDataSets API call. */
	static readonly LIST_DATA_SETS: string[] = ["dataexchange:ListDataSets"];
	/** IAM actions required for the ListEventActions API call. */
	static readonly LIST_EVENT_ACTIONS: string[] = [
		"dataexchange:ListEventActions",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["dataexchange:ListJobs"];
	/** IAM actions required for the ListReceivedDataGrants API call. */
	static readonly LIST_RECEIVED_DATA_GRANTS: string[] = [
		"dataexchange:ListDataSets",
		"dataexchange:ListReceivedDataGrants",
	];
	/** IAM actions required for the ListRevisionAssets API call. */
	static readonly LIST_REVISION_ASSETS: string[] = [
		"dataexchange:ListRevisionAssets",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"dataexchange:ListTagsForResource",
	];
	/** IAM actions required for the RevokeRevision API call. */
	static readonly REVOKE_REVISION: string[] = ["dataexchange:RevokeRevision"];
	/** IAM actions required for the SendApiAsset API call. */
	static readonly SEND_API_ASSET: string[] = ["dataexchange:SendApiAsset"];
	/** IAM actions required for the SendDataSetNotification API call. */
	static readonly SEND_DATA_SET_NOTIFICATION: string[] = [
		"dataexchange:SendDataSetNotification",
	];
	/** IAM actions required for the StartJob API call. */
	static readonly START_JOB: string[] = [
		"dataexchange:CreateAsset",
		"dataexchange:StartJob",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["dataexchange:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["dataexchange:UntagResource"];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UPDATE_ASSET: string[] = ["dataexchange:UpdateAsset"];
	/** IAM actions required for the UpdateDataSet API call. */
	static readonly UPDATE_DATA_SET: string[] = ["dataexchange:UpdateDataSet"];
	/** IAM actions required for the UpdateEventAction API call. */
	static readonly UPDATE_EVENT_ACTION: string[] = [
		"dataexchange:UpdateEventAction",
	];
	/** IAM actions required for the UpdateRevision API call. */
	static readonly UPDATE_REVISION: string[] = [
		"dataexchange:PublishDataSet",
		"dataexchange:PublishToDataGrant",
		"dataexchange:UpdateRevision",
	];
}

/**
 * Condition key constants and builders for dataexchange.
 */
export class DataexchangeConditions {
	/** Condition keys applicable to the CreateAsset action. */
	static readonly CREATE_ASSET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataGrant action. */
	static readonly CREATE_DATA_GRANT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataSet action. */
	static readonly CREATE_DATA_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventAction action. */
	static readonly CREATE_EVENT_ACTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CREATE_JOB_CONDITION_KEYS: string[] = [
		"dataexchange:JobType",
	];
	/** Condition keys applicable to the CreateRevision action. */
	static readonly CREATE_REVISION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PublishToDataGrant action. */
	static readonly PUBLISH_TO_DATA_GRANT_CONDITION_KEYS: string[] = [
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
	/** Condition key: dataexchange:JobType (String) */
	static readonly JOB_TYPE = "dataexchange:JobType";

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
	 * Generates a condition block for `dataexchange:JobType`.
	 */
	static jobType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dataexchange:JobType": value } };
	}
}
