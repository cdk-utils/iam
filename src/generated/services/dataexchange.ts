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
	static readonly AcceptDataGrant = "dataexchange:AcceptDataGrant";
	/** [Write] dataexchange:CancelJob */
	static readonly CancelJob = "dataexchange:CancelJob";
	/** [Write] dataexchange:CreateAsset */
	static readonly CreateAsset = "dataexchange:CreateAsset";
	/** [Write] dataexchange:CreateDataGrant */
	static readonly CreateDataGrant = "dataexchange:CreateDataGrant";
	/** [Write] dataexchange:CreateDataSet */
	static readonly CreateDataSet = "dataexchange:CreateDataSet";
	/** [Write] dataexchange:CreateEventAction */
	static readonly CreateEventAction = "dataexchange:CreateEventAction";
	/** [Write] dataexchange:CreateJob */
	static readonly CreateJob = "dataexchange:CreateJob";
	/** [Write] dataexchange:CreateRevision */
	static readonly CreateRevision = "dataexchange:CreateRevision";
	/** [Write] dataexchange:DeleteAsset */
	static readonly DeleteAsset = "dataexchange:DeleteAsset";
	/** [Write] dataexchange:DeleteDataGrant */
	static readonly DeleteDataGrant = "dataexchange:DeleteDataGrant";
	/** [Write] dataexchange:DeleteDataSet */
	static readonly DeleteDataSet = "dataexchange:DeleteDataSet";
	/** [Write] dataexchange:DeleteEventAction */
	static readonly DeleteEventAction = "dataexchange:DeleteEventAction";
	/** [Write] dataexchange:DeleteRevision */
	static readonly DeleteRevision = "dataexchange:DeleteRevision";
	/** [Read] dataexchange:GetAsset */
	static readonly actionGetAsset = "dataexchange:GetAsset";
	/** [Read] dataexchange:GetDataGrant */
	static readonly actionGetDataGrant = "dataexchange:GetDataGrant";
	/** [Read] dataexchange:GetDataSet */
	static readonly actionGetDataSet = "dataexchange:GetDataSet";
	/** [Read] dataexchange:GetEventAction */
	static readonly actionGetEventAction = "dataexchange:GetEventAction";
	/** [Read] dataexchange:GetJob */
	static readonly actionGetJob = "dataexchange:GetJob";
	/** [Read] dataexchange:GetReceivedDataGrant */
	static readonly actionGetReceivedDataGrant =
		"dataexchange:GetReceivedDataGrant";
	/** [Read] dataexchange:GetRevision */
	static readonly actionGetRevision = "dataexchange:GetRevision";
	/** [List] dataexchange:ListDataGrants */
	static readonly ListDataGrants = "dataexchange:ListDataGrants";
	/** [List] dataexchange:ListDataSetRevisions */
	static readonly ListDataSetRevisions = "dataexchange:ListDataSetRevisions";
	/** [List] dataexchange:ListDataSets */
	static readonly ListDataSets = "dataexchange:ListDataSets";
	/** [List] dataexchange:ListEventActions */
	static readonly ListEventActions = "dataexchange:ListEventActions";
	/** [List] dataexchange:ListJobs */
	static readonly ListJobs = "dataexchange:ListJobs";
	/** [List] dataexchange:ListReceivedDataGrants */
	static readonly ListReceivedDataGrants =
		"dataexchange:ListReceivedDataGrants";
	/** [List] dataexchange:ListRevisionAssets */
	static readonly ListRevisionAssets = "dataexchange:ListRevisionAssets";
	/** [List] dataexchange:ListTagsForResource */
	static readonly ListTagsForResource = "dataexchange:ListTagsForResource";
	/** [Write] dataexchange:PublishDataSet */
	static readonly PublishDataSet = "dataexchange:PublishDataSet";
	/** [Write] dataexchange:PublishToDataGrant */
	static readonly PublishToDataGrant = "dataexchange:PublishToDataGrant";
	/** [Write] dataexchange:RevokeRevision */
	static readonly RevokeRevision = "dataexchange:RevokeRevision";
	/** [Write] dataexchange:SendApiAsset */
	static readonly SendApiAsset = "dataexchange:SendApiAsset";
	/** [Write] dataexchange:SendDataSetNotification */
	static readonly SendDataSetNotification =
		"dataexchange:SendDataSetNotification";
	/** [Write] dataexchange:StartJob */
	static readonly StartJob = "dataexchange:StartJob";
	/** [Tagging] dataexchange:TagResource */
	static readonly TagResource = "dataexchange:TagResource";
	/** [Tagging] dataexchange:UntagResource */
	static readonly UntagResource = "dataexchange:UntagResource";
	/** [Write] dataexchange:UpdateAsset */
	static readonly UpdateAsset = "dataexchange:UpdateAsset";
	/** [Write] dataexchange:UpdateDataSet */
	static readonly UpdateDataSet = "dataexchange:UpdateDataSet";
	/** [Write] dataexchange:UpdateEventAction */
	static readonly UpdateEventAction = "dataexchange:UpdateEventAction";
	/** [Write] dataexchange:UpdateRevision */
	static readonly UpdateRevision = "dataexchange:UpdateRevision";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DataexchangeActions.actionGetAsset,
		DataexchangeActions.actionGetDataGrant,
		DataexchangeActions.actionGetDataSet,
		DataexchangeActions.actionGetEventAction,
		DataexchangeActions.actionGetJob,
		DataexchangeActions.actionGetReceivedDataGrant,
		DataexchangeActions.actionGetRevision,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DataexchangeActions.AcceptDataGrant,
		DataexchangeActions.CancelJob,
		DataexchangeActions.CreateAsset,
		DataexchangeActions.CreateDataGrant,
		DataexchangeActions.CreateDataSet,
		DataexchangeActions.CreateEventAction,
		DataexchangeActions.CreateJob,
		DataexchangeActions.CreateRevision,
		DataexchangeActions.DeleteAsset,
		DataexchangeActions.DeleteDataGrant,
		DataexchangeActions.DeleteDataSet,
		DataexchangeActions.DeleteEventAction,
		DataexchangeActions.DeleteRevision,
		DataexchangeActions.PublishDataSet,
		DataexchangeActions.PublishToDataGrant,
		DataexchangeActions.RevokeRevision,
		DataexchangeActions.SendApiAsset,
		DataexchangeActions.SendDataSetNotification,
		DataexchangeActions.StartJob,
		DataexchangeActions.UpdateAsset,
		DataexchangeActions.UpdateDataSet,
		DataexchangeActions.UpdateEventAction,
		DataexchangeActions.UpdateRevision,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DataexchangeActions.ListDataGrants,
		DataexchangeActions.ListDataSetRevisions,
		DataexchangeActions.ListDataSets,
		DataexchangeActions.ListEventActions,
		DataexchangeActions.ListJobs,
		DataexchangeActions.ListReceivedDataGrants,
		DataexchangeActions.ListRevisionAssets,
		DataexchangeActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DataexchangeActions.TagResource,
		DataexchangeActions.UntagResource,
	];
}

/**
 * Properties for building a assets ARN.
 */
export interface DataexchangeAssetsArnProps {
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
}

/**
 * Parsed components of a assets ARN.
 */
export interface DataexchangeAssetsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSetId component. */
	readonly dataSetId: string;
	/** The RevisionId component. */
	readonly revisionId: string;
	/** The AssetId component. */
	readonly assetId: string;
}

/**
 * Properties for building a data-grants ARN.
 */
export interface DataexchangeDataGrantsArnProps {
	/** The DataGrantId component of the ARN. */
	readonly dataGrantId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-grants ARN.
 */
export interface DataexchangeDataGrantsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataGrantId component. */
	readonly dataGrantId: string;
}

/**
 * Properties for building a data-sets ARN.
 */
export interface DataexchangeDataSetsArnProps {
	/** The DataSetId component of the ARN. */
	readonly dataSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a data-sets ARN.
 */
export interface DataexchangeDataSetsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSetId component. */
	readonly dataSetId: string;
}

/**
 * Properties for building a entitled-assets ARN.
 */
export interface DataexchangeEntitledAssetsArnProps {
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
}

/**
 * Parsed components of a entitled-assets ARN.
 */
export interface DataexchangeEntitledAssetsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSetId component. */
	readonly dataSetId: string;
	/** The RevisionId component. */
	readonly revisionId: string;
	/** The AssetId component. */
	readonly assetId: string;
}

/**
 * Properties for building a entitled-data-sets ARN.
 */
export interface DataexchangeEntitledDataSetsArnProps {
	/** The DataSetId component of the ARN. */
	readonly dataSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a entitled-data-sets ARN.
 */
export interface DataexchangeEntitledDataSetsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSetId component. */
	readonly dataSetId: string;
}

/**
 * Properties for building a entitled-revisions ARN.
 */
export interface DataexchangeEntitledRevisionsArnProps {
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
}

/**
 * Parsed components of a entitled-revisions ARN.
 */
export interface DataexchangeEntitledRevisionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSetId component. */
	readonly dataSetId: string;
	/** The RevisionId component. */
	readonly revisionId: string;
}

/**
 * Properties for building a event-actions ARN.
 */
export interface DataexchangeEventActionsArnProps {
	/** The EventActionId component of the ARN. */
	readonly eventActionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-actions ARN.
 */
export interface DataexchangeEventActionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventActionId component. */
	readonly eventActionId: string;
}

/**
 * Properties for building a jobs ARN.
 */
export interface DataexchangeJobsArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a jobs ARN.
 */
export interface DataexchangeJobsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a revisions ARN.
 */
export interface DataexchangeRevisionsArnProps {
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
}

/**
 * Parsed components of a revisions ARN.
 */
export interface DataexchangeRevisionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DataSetId component. */
	readonly dataSetId: string;
	/** The RevisionId component. */
	readonly revisionId: string;
}

const AssetsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-sets\/(?<dataSetId>[^:/?]+)\/revisions\/(?<revisionId>[^:/?]+)\/assets\/(?<assetId>[^:/?]+)$/;
const DataGrantsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-grants\/(?<dataGrantId>[^:/?]+)$/;
const DataSetsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-sets\/(?<dataSetId>[^:/?]+)$/;
const EntitledAssetsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*)::data-sets\/(?<dataSetId>[^:/?]+)\/revisions\/(?<revisionId>[^:/?]+)\/assets\/(?<assetId>[^:/?]+)$/;
const EntitledDataSetsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*)::data-sets\/(?<dataSetId>[^:/?]+)$/;
const EntitledRevisionsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*)::data-sets\/(?<dataSetId>[^:/?]+)\/revisions\/(?<revisionId>[^:/?]+)$/;
const EventActionsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):event-actions\/(?<eventActionId>[^:/?]+)$/;
const JobsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):jobs\/(?<jobId>[^:/?]+)$/;
const RevisionsArnRegex =
	/^arn:(?<partition>[^:]+):dataexchange:(?<region>[^:]*):(?<account>[^:]*):data-sets\/(?<dataSetId>[^:/?]+)\/revisions\/(?<revisionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for dataexchange resources.
 */
export class DataexchangeResources {
	/**
	 * Builds an ARN for the assets resource.
	 */
	static assets(props: DataexchangeAssetsArnProps): string {
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
	static parseAssetsArn(arn: string): DataexchangeAssetsArnComponents {
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
	static dataGrants(props: DataexchangeDataGrantsArnProps): string {
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
	static parseDataGrantsArn(arn: string): DataexchangeDataGrantsArnComponents {
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
	static dataSets(props: DataexchangeDataSetsArnProps): string {
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
	static parseDataSetsArn(arn: string): DataexchangeDataSetsArnComponents {
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
	static entitledAssets(props: DataexchangeEntitledAssetsArnProps): string {
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
	static parseEntitledAssetsArn(
		arn: string,
	): DataexchangeEntitledAssetsArnComponents {
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
	static entitledDataSets(props: DataexchangeEntitledDataSetsArnProps): string {
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
	static parseEntitledDataSetsArn(
		arn: string,
	): DataexchangeEntitledDataSetsArnComponents {
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
	static entitledRevisions(
		props: DataexchangeEntitledRevisionsArnProps,
	): string {
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
	static parseEntitledRevisionsArn(
		arn: string,
	): DataexchangeEntitledRevisionsArnComponents {
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
	static eventActions(props: DataexchangeEventActionsArnProps): string {
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
	static parseEventActionsArn(
		arn: string,
	): DataexchangeEventActionsArnComponents {
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
	static jobs(props: DataexchangeJobsArnProps): string {
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
	static parseJobsArn(arn: string): DataexchangeJobsArnComponents {
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
	static revisions(props: DataexchangeRevisionsArnProps): string {
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
	static parseRevisionsArn(arn: string): DataexchangeRevisionsArnComponents {
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
	static readonly AcceptDataGrant: string[] = [
		"dataexchange:AcceptDataGrant",
		"aws-marketplace:Subscribe",
	];
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = ["dataexchange:CancelJob"];
	/** IAM actions required for the CreateDataGrant API call. */
	static readonly CreateDataGrant: string[] = [
		"dataexchange:CreateDataGrant",
		"dataexchange:CreateJob",
		"dataexchange:PublishDataSet",
		"dataexchange:PublishToDataGrant",
		"dataexchange:StartJob",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the CreateDataSet API call. */
	static readonly CreateDataSet: string[] = [
		"dataexchange:CreateDataSet",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the CreateEventAction API call. */
	static readonly CreateEventAction: string[] = [
		"dataexchange:CreateEventAction",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the CreateJob API call. */
	static readonly CreateJob: string[] = [
		"dataexchange:CreateJob",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateRevision API call. */
	static readonly CreateRevision: string[] = [
		"dataexchange:CreateRevision",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the DeleteAsset API call. */
	static readonly DeleteAsset: string[] = ["dataexchange:DeleteAsset"];
	/** IAM actions required for the DeleteDataGrant API call. */
	static readonly DeleteDataGrant: string[] = ["dataexchange:DeleteDataGrant"];
	/** IAM actions required for the DeleteDataSet API call. */
	static readonly DeleteDataSet: string[] = ["dataexchange:DeleteDataSet"];
	/** IAM actions required for the DeleteEventAction API call. */
	static readonly DeleteEventAction: string[] = [
		"dataexchange:DeleteEventAction",
	];
	/** IAM actions required for the DeleteRevision API call. */
	static readonly DeleteRevision: string[] = ["dataexchange:DeleteRevision"];
	/** IAM actions required for the GetAsset API call. */
	static readonly opGetAsset: string[] = ["dataexchange:GetAsset"];
	/** IAM actions required for the GetDataGrant API call. */
	static readonly opGetDataGrant: string[] = [
		"dataexchange:GetDataGrant",
		"dataexchange:GetDataSet",
	];
	/** IAM actions required for the GetDataSet API call. */
	static readonly opGetDataSet: string[] = ["dataexchange:GetDataSet"];
	/** IAM actions required for the GetEventAction API call. */
	static readonly opGetEventAction: string[] = ["dataexchange:GetEventAction"];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["dataexchange:GetJob"];
	/** IAM actions required for the GetReceivedDataGrant API call. */
	static readonly opGetReceivedDataGrant: string[] = [
		"dataexchange:GetDataSet",
		"dataexchange:GetReceivedDataGrant",
	];
	/** IAM actions required for the GetRevision API call. */
	static readonly opGetRevision: string[] = ["dataexchange:GetRevision"];
	/** IAM actions required for the ListDataGrants API call. */
	static readonly ListDataGrants: string[] = [
		"dataexchange:ListDataGrants",
		"dataexchange:ListDataSets",
	];
	/** IAM actions required for the ListDataSetRevisions API call. */
	static readonly ListDataSetRevisions: string[] = [
		"dataexchange:ListDataSetRevisions",
	];
	/** IAM actions required for the ListDataSets API call. */
	static readonly ListDataSets: string[] = ["dataexchange:ListDataSets"];
	/** IAM actions required for the ListEventActions API call. */
	static readonly ListEventActions: string[] = [
		"dataexchange:ListEventActions",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["dataexchange:ListJobs"];
	/** IAM actions required for the ListReceivedDataGrants API call. */
	static readonly ListReceivedDataGrants: string[] = [
		"dataexchange:ListDataSets",
		"dataexchange:ListReceivedDataGrants",
	];
	/** IAM actions required for the ListRevisionAssets API call. */
	static readonly ListRevisionAssets: string[] = [
		"dataexchange:ListRevisionAssets",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"dataexchange:ListTagsForResource",
	];
	/** IAM actions required for the RevokeRevision API call. */
	static readonly RevokeRevision: string[] = ["dataexchange:RevokeRevision"];
	/** IAM actions required for the SendApiAsset API call. */
	static readonly SendApiAsset: string[] = ["dataexchange:SendApiAsset"];
	/** IAM actions required for the SendDataSetNotification API call. */
	static readonly SendDataSetNotification: string[] = [
		"dataexchange:SendDataSetNotification",
	];
	/** IAM actions required for the StartJob API call. */
	static readonly StartJob: string[] = [
		"dataexchange:CreateAsset",
		"dataexchange:StartJob",
		"dataexchange:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["dataexchange:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["dataexchange:UntagResource"];
	/** IAM actions required for the UpdateAsset API call. */
	static readonly UpdateAsset: string[] = ["dataexchange:UpdateAsset"];
	/** IAM actions required for the UpdateDataSet API call. */
	static readonly UpdateDataSet: string[] = ["dataexchange:UpdateDataSet"];
	/** IAM actions required for the UpdateEventAction API call. */
	static readonly UpdateEventAction: string[] = [
		"dataexchange:UpdateEventAction",
	];
	/** IAM actions required for the UpdateRevision API call. */
	static readonly UpdateRevision: string[] = [
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
	static readonly CreateAssetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataGrant action. */
	static readonly CreateDataGrantConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataSet action. */
	static readonly CreateDataSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventAction action. */
	static readonly CreateEventActionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateJob action. */
	static readonly CreateJobConditionKeys: string[] = ["dataexchange:JobType"];
	/** Condition keys applicable to the CreateRevision action. */
	static readonly CreateRevisionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PublishToDataGrant action. */
	static readonly PublishToDataGrantConditionKeys: string[] = [
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
