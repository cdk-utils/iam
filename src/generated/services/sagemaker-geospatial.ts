// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sagemaker-geospatial.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sagemaker-geospatial service.
 */
export class SagemakerGeospatialActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sagemaker-geospatial";

	/** [Write] sagemaker-geospatial:DeleteEarthObservationJob */
	static readonly DELETE_EARTH_OBSERVATION_JOB =
		"sagemaker-geospatial:DeleteEarthObservationJob";
	/** [Write] sagemaker-geospatial:DeleteVectorEnrichmentJob */
	static readonly DELETE_VECTOR_ENRICHMENT_JOB =
		"sagemaker-geospatial:DeleteVectorEnrichmentJob";
	/** [Write] sagemaker-geospatial:ExportEarthObservationJob */
	static readonly EXPORT_EARTH_OBSERVATION_JOB =
		"sagemaker-geospatial:ExportEarthObservationJob";
	/** [Write] sagemaker-geospatial:ExportVectorEnrichmentJob */
	static readonly EXPORT_VECTOR_ENRICHMENT_JOB =
		"sagemaker-geospatial:ExportVectorEnrichmentJob";
	/** [Read] sagemaker-geospatial:GetEarthObservationJob */
	static readonly GET_EARTH_OBSERVATION_JOB =
		"sagemaker-geospatial:GetEarthObservationJob";
	/** [Read] sagemaker-geospatial:GetRasterDataCollection */
	static readonly GET_RASTER_DATA_COLLECTION =
		"sagemaker-geospatial:GetRasterDataCollection";
	/** [Read] sagemaker-geospatial:GetTile */
	static readonly GET_TILE = "sagemaker-geospatial:GetTile";
	/** [Read] sagemaker-geospatial:GetVectorEnrichmentJob */
	static readonly GET_VECTOR_ENRICHMENT_JOB =
		"sagemaker-geospatial:GetVectorEnrichmentJob";
	/** [List] sagemaker-geospatial:ListEarthObservationJobs */
	static readonly LIST_EARTH_OBSERVATION_JOBS =
		"sagemaker-geospatial:ListEarthObservationJobs";
	/** [List] sagemaker-geospatial:ListRasterDataCollections */
	static readonly LIST_RASTER_DATA_COLLECTIONS =
		"sagemaker-geospatial:ListRasterDataCollections";
	/** [List] sagemaker-geospatial:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"sagemaker-geospatial:ListTagsForResource";
	/** [List] sagemaker-geospatial:ListVectorEnrichmentJobs */
	static readonly LIST_VECTOR_ENRICHMENT_JOBS =
		"sagemaker-geospatial:ListVectorEnrichmentJobs";
	/** [Read] sagemaker-geospatial:SearchRasterDataCollection */
	static readonly SEARCH_RASTER_DATA_COLLECTION =
		"sagemaker-geospatial:SearchRasterDataCollection";
	/** [Write] sagemaker-geospatial:StartEarthObservationJob */
	static readonly START_EARTH_OBSERVATION_JOB =
		"sagemaker-geospatial:StartEarthObservationJob";
	/** [Write] sagemaker-geospatial:StartVectorEnrichmentJob */
	static readonly START_VECTOR_ENRICHMENT_JOB =
		"sagemaker-geospatial:StartVectorEnrichmentJob";
	/** [Write] sagemaker-geospatial:StopEarthObservationJob */
	static readonly STOP_EARTH_OBSERVATION_JOB =
		"sagemaker-geospatial:StopEarthObservationJob";
	/** [Write] sagemaker-geospatial:StopVectorEnrichmentJob */
	static readonly STOP_VECTOR_ENRICHMENT_JOB =
		"sagemaker-geospatial:StopVectorEnrichmentJob";
	/** [Tagging] sagemaker-geospatial:TagResource */
	static readonly TAG_RESOURCE = "sagemaker-geospatial:TagResource";
	/** [Tagging] sagemaker-geospatial:UntagResource */
	static readonly UNTAG_RESOURCE = "sagemaker-geospatial:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SagemakerGeospatialActions.GET_EARTH_OBSERVATION_JOB,
		SagemakerGeospatialActions.GET_RASTER_DATA_COLLECTION,
		SagemakerGeospatialActions.GET_TILE,
		SagemakerGeospatialActions.GET_VECTOR_ENRICHMENT_JOB,
		SagemakerGeospatialActions.SEARCH_RASTER_DATA_COLLECTION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SagemakerGeospatialActions.DELETE_EARTH_OBSERVATION_JOB,
		SagemakerGeospatialActions.DELETE_VECTOR_ENRICHMENT_JOB,
		SagemakerGeospatialActions.EXPORT_EARTH_OBSERVATION_JOB,
		SagemakerGeospatialActions.EXPORT_VECTOR_ENRICHMENT_JOB,
		SagemakerGeospatialActions.START_EARTH_OBSERVATION_JOB,
		SagemakerGeospatialActions.START_VECTOR_ENRICHMENT_JOB,
		SagemakerGeospatialActions.STOP_EARTH_OBSERVATION_JOB,
		SagemakerGeospatialActions.STOP_VECTOR_ENRICHMENT_JOB,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SagemakerGeospatialActions.LIST_EARTH_OBSERVATION_JOBS,
		SagemakerGeospatialActions.LIST_RASTER_DATA_COLLECTIONS,
		SagemakerGeospatialActions.LIST_TAGS_FOR_RESOURCE,
		SagemakerGeospatialActions.LIST_VECTOR_ENRICHMENT_JOBS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SagemakerGeospatialActions.TAG_RESOURCE,
		SagemakerGeospatialActions.UNTAG_RESOURCE,
	];
}

const EarthObservationJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker-geospatial:(?<region>[^:]*):(?<account>[^:]*):earth-observation-job/(?<jobId>[^:/?]+)$",
);
const RasterDataCollectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker-geospatial:(?<region>[^:]*):(?<account>[^:]*):raster-data-collection/(?<collectionId>[^:/?]+)$",
);
const VectorEnrichmentJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):sagemaker-geospatial:(?<region>[^:]*):(?<account>[^:]*):vector-enrichment-job/(?<jobId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for sagemaker-geospatial resources.
 */
export class SagemakerGeospatialResources {
	/**
	 * Builds an ARN for the EarthObservationJob resource.
	 */
	static earthObservationJob(props: {
		/** The JobID component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker-geospatial:${props.region ?? "*"}:${props.account ?? "*"}:earth-observation-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the EarthObservationJob resource.
	 */
	static isValidEarthObservationJobArn(arn: string): boolean {
		return EarthObservationJobArnRegex.test(arn);
	}

	/**
	 * Parses a EarthObservationJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEarthObservationJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
		const match = EarthObservationJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid EarthObservationJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the RasterDataCollection resource.
	 */
	static rasterDataCollection(props: {
		/** The CollectionID component of the ARN. */
		readonly collectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker-geospatial:${props.region ?? "*"}:${props.account ?? "*"}:raster-data-collection/${props.collectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RasterDataCollection resource.
	 */
	static isValidRasterDataCollectionArn(arn: string): boolean {
		return RasterDataCollectionArnRegex.test(arn);
	}

	/**
	 * Parses a RasterDataCollection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRasterDataCollectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		collectionId: string;
	} {
		const match = RasterDataCollectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RasterDataCollection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			collectionId: match.groups!.collectionId,
		};
	}

	/**
	 * Builds an ARN for the VectorEnrichmentJob resource.
	 */
	static vectorEnrichmentJob(props: {
		/** The JobID component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:sagemaker-geospatial:${props.region ?? "*"}:${props.account ?? "*"}:vector-enrichment-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the VectorEnrichmentJob resource.
	 */
	static isValidVectorEnrichmentJobArn(arn: string): boolean {
		return VectorEnrichmentJobArnRegex.test(arn);
	}

	/**
	 * Parses a VectorEnrichmentJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVectorEnrichmentJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
		const match = VectorEnrichmentJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid VectorEnrichmentJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sagemaker-geospatial.
 */
export class SagemakerGeospatialOperations {
	/** IAM actions required for the DeleteEarthObservationJob API call. */
	static readonly DELETE_EARTH_OBSERVATION_JOB: string[] = [
		"sagemaker-geospatial:DeleteEarthObservationJob",
	];
	/** IAM actions required for the DeleteVectorEnrichmentJob API call. */
	static readonly DELETE_VECTOR_ENRICHMENT_JOB: string[] = [
		"sagemaker-geospatial:DeleteVectorEnrichmentJob",
	];
	/** IAM actions required for the ExportEarthObservationJob API call. */
	static readonly EXPORT_EARTH_OBSERVATION_JOB: string[] = [
		"sagemaker-geospatial:ExportEarthObservationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the ExportVectorEnrichmentJob API call. */
	static readonly EXPORT_VECTOR_ENRICHMENT_JOB: string[] = [
		"sagemaker-geospatial:ExportVectorEnrichmentJob",
		"iam:PassRole",
	];
	/** IAM actions required for the GetEarthObservationJob API call. */
	static readonly GET_EARTH_OBSERVATION_JOB: string[] = [
		"sagemaker-geospatial:GetEarthObservationJob",
	];
	/** IAM actions required for the GetRasterDataCollection API call. */
	static readonly GET_RASTER_DATA_COLLECTION: string[] = [
		"sagemaker-geospatial:GetRasterDataCollection",
	];
	/** IAM actions required for the GetTile API call. */
	static readonly GET_TILE: string[] = [
		"sagemaker-geospatial:GetTile",
		"iam:PassRole",
	];
	/** IAM actions required for the GetVectorEnrichmentJob API call. */
	static readonly GET_VECTOR_ENRICHMENT_JOB: string[] = [
		"sagemaker-geospatial:GetVectorEnrichmentJob",
	];
	/** IAM actions required for the ListEarthObservationJobs API call. */
	static readonly LIST_EARTH_OBSERVATION_JOBS: string[] = [
		"sagemaker-geospatial:ListEarthObservationJobs",
	];
	/** IAM actions required for the ListRasterDataCollections API call. */
	static readonly LIST_RASTER_DATA_COLLECTIONS: string[] = [
		"sagemaker-geospatial:ListRasterDataCollections",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"sagemaker-geospatial:ListTagsForResource",
	];
	/** IAM actions required for the ListVectorEnrichmentJobs API call. */
	static readonly LIST_VECTOR_ENRICHMENT_JOBS: string[] = [
		"sagemaker-geospatial:ListVectorEnrichmentJobs",
	];
	/** IAM actions required for the SearchRasterDataCollection API call. */
	static readonly SEARCH_RASTER_DATA_COLLECTION: string[] = [
		"sagemaker-geospatial:SearchRasterDataCollection",
	];
	/** IAM actions required for the StartEarthObservationJob API call. */
	static readonly START_EARTH_OBSERVATION_JOB: string[] = [
		"iam:PassRole",
		"sagemaker-geospatial:StartEarthObservationJob",
		"sagemaker-geospatial:TagResource",
	];
	/** IAM actions required for the StartVectorEnrichmentJob API call. */
	static readonly START_VECTOR_ENRICHMENT_JOB: string[] = [
		"iam:PassRole",
		"sagemaker-geospatial:StartVectorEnrichmentJob",
		"sagemaker-geospatial:TagResource",
	];
	/** IAM actions required for the StopEarthObservationJob API call. */
	static readonly STOP_EARTH_OBSERVATION_JOB: string[] = [
		"sagemaker-geospatial:StopEarthObservationJob",
	];
	/** IAM actions required for the StopVectorEnrichmentJob API call. */
	static readonly STOP_VECTOR_ENRICHMENT_JOB: string[] = [
		"sagemaker-geospatial:StopVectorEnrichmentJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["sagemaker-geospatial:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"sagemaker-geospatial:UntagResource",
	];
}

/**
 * Condition key constants and builders for sagemaker-geospatial.
 */
export class SagemakerGeospatialConditions {
	/** Condition keys applicable to the DeleteEarthObservationJob action. */
	static readonly DELETE_EARTH_OBSERVATION_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectorEnrichmentJob action. */
	static readonly DELETE_VECTOR_ENRICHMENT_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ExportEarthObservationJob action. */
	static readonly EXPORT_EARTH_OBSERVATION_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ExportVectorEnrichmentJob action. */
	static readonly EXPORT_VECTOR_ENRICHMENT_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEarthObservationJob action. */
	static readonly GET_EARTH_OBSERVATION_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRasterDataCollection action. */
	static readonly GET_RASTER_DATA_COLLECTION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectorEnrichmentJob action. */
	static readonly GET_VECTOR_ENRICHMENT_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartEarthObservationJob action. */
	static readonly START_EARTH_OBSERVATION_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartVectorEnrichmentJob action. */
	static readonly START_VECTOR_ENRICHMENT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StopEarthObservationJob action. */
	static readonly STOP_EARTH_OBSERVATION_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopVectorEnrichmentJob action. */
	static readonly STOP_VECTOR_ENRICHMENT_JOB_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
