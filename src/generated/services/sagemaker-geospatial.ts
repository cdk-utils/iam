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
	static readonly DeleteEarthObservationJob =
		"sagemaker-geospatial:DeleteEarthObservationJob";
	/** [Write] sagemaker-geospatial:DeleteVectorEnrichmentJob */
	static readonly DeleteVectorEnrichmentJob =
		"sagemaker-geospatial:DeleteVectorEnrichmentJob";
	/** [Write] sagemaker-geospatial:ExportEarthObservationJob */
	static readonly ExportEarthObservationJob =
		"sagemaker-geospatial:ExportEarthObservationJob";
	/** [Write] sagemaker-geospatial:ExportVectorEnrichmentJob */
	static readonly ExportVectorEnrichmentJob =
		"sagemaker-geospatial:ExportVectorEnrichmentJob";
	/** [Read] sagemaker-geospatial:GetEarthObservationJob */
	static readonly actionGetEarthObservationJob =
		"sagemaker-geospatial:GetEarthObservationJob";
	/** [Read] sagemaker-geospatial:GetRasterDataCollection */
	static readonly actionGetRasterDataCollection =
		"sagemaker-geospatial:GetRasterDataCollection";
	/** [Read] sagemaker-geospatial:GetTile */
	static readonly actionGetTile = "sagemaker-geospatial:GetTile";
	/** [Read] sagemaker-geospatial:GetVectorEnrichmentJob */
	static readonly actionGetVectorEnrichmentJob =
		"sagemaker-geospatial:GetVectorEnrichmentJob";
	/** [List] sagemaker-geospatial:ListEarthObservationJobs */
	static readonly ListEarthObservationJobs =
		"sagemaker-geospatial:ListEarthObservationJobs";
	/** [List] sagemaker-geospatial:ListRasterDataCollections */
	static readonly ListRasterDataCollections =
		"sagemaker-geospatial:ListRasterDataCollections";
	/** [List] sagemaker-geospatial:ListTagsForResource */
	static readonly ListTagsForResource =
		"sagemaker-geospatial:ListTagsForResource";
	/** [List] sagemaker-geospatial:ListVectorEnrichmentJobs */
	static readonly ListVectorEnrichmentJobs =
		"sagemaker-geospatial:ListVectorEnrichmentJobs";
	/** [Read] sagemaker-geospatial:SearchRasterDataCollection */
	static readonly SearchRasterDataCollection =
		"sagemaker-geospatial:SearchRasterDataCollection";
	/** [Write] sagemaker-geospatial:StartEarthObservationJob */
	static readonly StartEarthObservationJob =
		"sagemaker-geospatial:StartEarthObservationJob";
	/** [Write] sagemaker-geospatial:StartVectorEnrichmentJob */
	static readonly StartVectorEnrichmentJob =
		"sagemaker-geospatial:StartVectorEnrichmentJob";
	/** [Write] sagemaker-geospatial:StopEarthObservationJob */
	static readonly StopEarthObservationJob =
		"sagemaker-geospatial:StopEarthObservationJob";
	/** [Write] sagemaker-geospatial:StopVectorEnrichmentJob */
	static readonly StopVectorEnrichmentJob =
		"sagemaker-geospatial:StopVectorEnrichmentJob";
	/** [Tagging] sagemaker-geospatial:TagResource */
	static readonly TagResource = "sagemaker-geospatial:TagResource";
	/** [Tagging] sagemaker-geospatial:UntagResource */
	static readonly UntagResource = "sagemaker-geospatial:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SagemakerGeospatialActions.actionGetEarthObservationJob,
		SagemakerGeospatialActions.actionGetRasterDataCollection,
		SagemakerGeospatialActions.actionGetTile,
		SagemakerGeospatialActions.actionGetVectorEnrichmentJob,
		SagemakerGeospatialActions.SearchRasterDataCollection,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SagemakerGeospatialActions.DeleteEarthObservationJob,
		SagemakerGeospatialActions.DeleteVectorEnrichmentJob,
		SagemakerGeospatialActions.ExportEarthObservationJob,
		SagemakerGeospatialActions.ExportVectorEnrichmentJob,
		SagemakerGeospatialActions.StartEarthObservationJob,
		SagemakerGeospatialActions.StartVectorEnrichmentJob,
		SagemakerGeospatialActions.StopEarthObservationJob,
		SagemakerGeospatialActions.StopVectorEnrichmentJob,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SagemakerGeospatialActions.ListEarthObservationJobs,
		SagemakerGeospatialActions.ListRasterDataCollections,
		SagemakerGeospatialActions.ListTagsForResource,
		SagemakerGeospatialActions.ListVectorEnrichmentJobs,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SagemakerGeospatialActions.TagResource,
		SagemakerGeospatialActions.UntagResource,
	];
}

/**
 * Properties for building a EarthObservationJob ARN.
 */
export interface SagemakerGeospatialEarthObservationJobArnProps {
	/** The JobID component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a EarthObservationJob ARN.
 */
export interface SagemakerGeospatialEarthObservationJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobID component. */
	readonly jobId: string;
}

/**
 * Properties for building a RasterDataCollection ARN.
 */
export interface SagemakerGeospatialRasterDataCollectionArnProps {
	/** The CollectionID component of the ARN. */
	readonly collectionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RasterDataCollection ARN.
 */
export interface SagemakerGeospatialRasterDataCollectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CollectionID component. */
	readonly collectionId: string;
}

/**
 * Properties for building a VectorEnrichmentJob ARN.
 */
export interface SagemakerGeospatialVectorEnrichmentJobArnProps {
	/** The JobID component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a VectorEnrichmentJob ARN.
 */
export interface SagemakerGeospatialVectorEnrichmentJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobID component. */
	readonly jobId: string;
}

const EarthObservationJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker-geospatial:(?<region>[^:]*):(?<account>[^:]*):earth-observation-job\/(?<jobId>[^:/?]+)$/;
const RasterDataCollectionArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker-geospatial:(?<region>[^:]*):(?<account>[^:]*):raster-data-collection\/(?<collectionId>[^:/?]+)$/;
const VectorEnrichmentJobArnRegex =
	/^arn:(?<partition>[^:]+):sagemaker-geospatial:(?<region>[^:]*):(?<account>[^:]*):vector-enrichment-job\/(?<jobId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for sagemaker-geospatial resources.
 */
export class SagemakerGeospatialResources {
	/**
	 * Builds an ARN for the EarthObservationJob resource.
	 */
	static earthObservationJob(
		props: SagemakerGeospatialEarthObservationJobArnProps,
	): string {
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
	static parseEarthObservationJobArn(
		arn: string,
	): SagemakerGeospatialEarthObservationJobArnComponents {
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
	static rasterDataCollection(
		props: SagemakerGeospatialRasterDataCollectionArnProps,
	): string {
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
	static parseRasterDataCollectionArn(
		arn: string,
	): SagemakerGeospatialRasterDataCollectionArnComponents {
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
	static vectorEnrichmentJob(
		props: SagemakerGeospatialVectorEnrichmentJobArnProps,
	): string {
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
	static parseVectorEnrichmentJobArn(
		arn: string,
	): SagemakerGeospatialVectorEnrichmentJobArnComponents {
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
	static readonly DeleteEarthObservationJob: string[] = [
		"sagemaker-geospatial:DeleteEarthObservationJob",
	];
	/** IAM actions required for the DeleteVectorEnrichmentJob API call. */
	static readonly DeleteVectorEnrichmentJob: string[] = [
		"sagemaker-geospatial:DeleteVectorEnrichmentJob",
	];
	/** IAM actions required for the ExportEarthObservationJob API call. */
	static readonly ExportEarthObservationJob: string[] = [
		"sagemaker-geospatial:ExportEarthObservationJob",
		"iam:PassRole",
	];
	/** IAM actions required for the ExportVectorEnrichmentJob API call. */
	static readonly ExportVectorEnrichmentJob: string[] = [
		"sagemaker-geospatial:ExportVectorEnrichmentJob",
		"iam:PassRole",
	];
	/** IAM actions required for the GetEarthObservationJob API call. */
	static readonly opGetEarthObservationJob: string[] = [
		"sagemaker-geospatial:GetEarthObservationJob",
	];
	/** IAM actions required for the GetRasterDataCollection API call. */
	static readonly opGetRasterDataCollection: string[] = [
		"sagemaker-geospatial:GetRasterDataCollection",
	];
	/** IAM actions required for the GetTile API call. */
	static readonly opGetTile: string[] = [
		"sagemaker-geospatial:GetTile",
		"iam:PassRole",
	];
	/** IAM actions required for the GetVectorEnrichmentJob API call. */
	static readonly opGetVectorEnrichmentJob: string[] = [
		"sagemaker-geospatial:GetVectorEnrichmentJob",
	];
	/** IAM actions required for the ListEarthObservationJobs API call. */
	static readonly ListEarthObservationJobs: string[] = [
		"sagemaker-geospatial:ListEarthObservationJobs",
	];
	/** IAM actions required for the ListRasterDataCollections API call. */
	static readonly ListRasterDataCollections: string[] = [
		"sagemaker-geospatial:ListRasterDataCollections",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"sagemaker-geospatial:ListTagsForResource",
	];
	/** IAM actions required for the ListVectorEnrichmentJobs API call. */
	static readonly ListVectorEnrichmentJobs: string[] = [
		"sagemaker-geospatial:ListVectorEnrichmentJobs",
	];
	/** IAM actions required for the SearchRasterDataCollection API call. */
	static readonly SearchRasterDataCollection: string[] = [
		"sagemaker-geospatial:SearchRasterDataCollection",
	];
	/** IAM actions required for the StartEarthObservationJob API call. */
	static readonly StartEarthObservationJob: string[] = [
		"iam:PassRole",
		"sagemaker-geospatial:StartEarthObservationJob",
		"sagemaker-geospatial:TagResource",
	];
	/** IAM actions required for the StartVectorEnrichmentJob API call. */
	static readonly StartVectorEnrichmentJob: string[] = [
		"iam:PassRole",
		"sagemaker-geospatial:StartVectorEnrichmentJob",
		"sagemaker-geospatial:TagResource",
	];
	/** IAM actions required for the StopEarthObservationJob API call. */
	static readonly StopEarthObservationJob: string[] = [
		"sagemaker-geospatial:StopEarthObservationJob",
	];
	/** IAM actions required for the StopVectorEnrichmentJob API call. */
	static readonly StopVectorEnrichmentJob: string[] = [
		"sagemaker-geospatial:StopVectorEnrichmentJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["sagemaker-geospatial:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"sagemaker-geospatial:UntagResource",
	];
}

/**
 * Condition key constants and builders for sagemaker-geospatial.
 */
export class SagemakerGeospatialConditions {
	/** Condition keys applicable to the DeleteEarthObservationJob action. */
	static readonly DeleteEarthObservationJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteVectorEnrichmentJob action. */
	static readonly DeleteVectorEnrichmentJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ExportEarthObservationJob action. */
	static readonly ExportEarthObservationJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ExportVectorEnrichmentJob action. */
	static readonly ExportVectorEnrichmentJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetEarthObservationJob action. */
	static readonly actionGetEarthObservationJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRasterDataCollection action. */
	static readonly actionGetRasterDataCollectionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetVectorEnrichmentJob action. */
	static readonly actionGetVectorEnrichmentJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartEarthObservationJob action. */
	static readonly StartEarthObservationJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartVectorEnrichmentJob action. */
	static readonly StartVectorEnrichmentJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StopEarthObservationJob action. */
	static readonly StopEarthObservationJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StopVectorEnrichmentJob action. */
	static readonly StopVectorEnrichmentJobConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
