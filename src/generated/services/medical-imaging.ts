// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/medical-imaging.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the medical-imaging service.
 */
export class MedicalImagingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "medical-imaging";

	/** [Write] medical-imaging:CopyImageSet */
	static readonly CopyImageSet = "medical-imaging:CopyImageSet";
	/** [Write] medical-imaging:CreateDatastore */
	static readonly CreateDatastore = "medical-imaging:CreateDatastore";
	/** [Write] medical-imaging:DeleteDatastore */
	static readonly DeleteDatastore = "medical-imaging:DeleteDatastore";
	/** [Write] medical-imaging:DeleteImageSet */
	static readonly DeleteImageSet = "medical-imaging:DeleteImageSet";
	/** [Read] medical-imaging:GetDICOMBulkdata */
	static readonly actionGetDICOMBulkdata = "medical-imaging:GetDICOMBulkdata";
	/** [Read] medical-imaging:GetDICOMImportJob */
	static readonly actionGetDICOMImportJob = "medical-imaging:GetDICOMImportJob";
	/** [Read] medical-imaging:GetDICOMInstance */
	static readonly actionGetDICOMInstance = "medical-imaging:GetDICOMInstance";
	/** [Read] medical-imaging:GetDICOMInstanceFrames */
	static readonly actionGetDICOMInstanceFrames =
		"medical-imaging:GetDICOMInstanceFrames";
	/** [Read] medical-imaging:GetDICOMInstanceMetadata */
	static readonly actionGetDICOMInstanceMetadata =
		"medical-imaging:GetDICOMInstanceMetadata";
	/** [Read] medical-imaging:GetDICOMSeriesMetadata */
	static readonly actionGetDICOMSeriesMetadata =
		"medical-imaging:GetDICOMSeriesMetadata";
	/** [Read] medical-imaging:GetDatastore */
	static readonly actionGetDatastore = "medical-imaging:GetDatastore";
	/** [Read] medical-imaging:GetImageFrame */
	static readonly actionGetImageFrame = "medical-imaging:GetImageFrame";
	/** [Read] medical-imaging:GetImageSet */
	static readonly actionGetImageSet = "medical-imaging:GetImageSet";
	/** [Read] medical-imaging:GetImageSetMetadata */
	static readonly actionGetImageSetMetadata =
		"medical-imaging:GetImageSetMetadata";
	/** [List] medical-imaging:ListDICOMImportJobs */
	static readonly ListDICOMImportJobs = "medical-imaging:ListDICOMImportJobs";
	/** [List] medical-imaging:ListDatastores */
	static readonly ListDatastores = "medical-imaging:ListDatastores";
	/** [List] medical-imaging:ListImageSetVersions */
	static readonly ListImageSetVersions = "medical-imaging:ListImageSetVersions";
	/** [List] medical-imaging:ListTagsForResource */
	static readonly ListTagsForResource = "medical-imaging:ListTagsForResource";
	/** [Read] medical-imaging:SearchDICOMInstances */
	static readonly SearchDICOMInstances = "medical-imaging:SearchDICOMInstances";
	/** [Read] medical-imaging:SearchDICOMSeries */
	static readonly SearchDICOMSeries = "medical-imaging:SearchDICOMSeries";
	/** [Read] medical-imaging:SearchDICOMStudies */
	static readonly SearchDICOMStudies = "medical-imaging:SearchDICOMStudies";
	/** [Read] medical-imaging:SearchImageSets */
	static readonly SearchImageSets = "medical-imaging:SearchImageSets";
	/** [Write] medical-imaging:StartDICOMImportJob */
	static readonly StartDICOMImportJob = "medical-imaging:StartDICOMImportJob";
	/** [Write] medical-imaging:StoreDICOM */
	static readonly StoreDICOM = "medical-imaging:StoreDICOM";
	/** [Write] medical-imaging:StoreDICOMStudy */
	static readonly StoreDICOMStudy = "medical-imaging:StoreDICOMStudy";
	/** [Tagging] medical-imaging:TagResource */
	static readonly TagResource = "medical-imaging:TagResource";
	/** [Tagging] medical-imaging:UntagResource */
	static readonly UntagResource = "medical-imaging:UntagResource";
	/** [Write] medical-imaging:UpdateImageSetMetadata */
	static readonly UpdateImageSetMetadata =
		"medical-imaging:UpdateImageSetMetadata";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MedicalImagingActions.actionGetDICOMBulkdata,
		MedicalImagingActions.actionGetDICOMImportJob,
		MedicalImagingActions.actionGetDICOMInstance,
		MedicalImagingActions.actionGetDICOMInstanceFrames,
		MedicalImagingActions.actionGetDICOMInstanceMetadata,
		MedicalImagingActions.actionGetDICOMSeriesMetadata,
		MedicalImagingActions.actionGetDatastore,
		MedicalImagingActions.actionGetImageFrame,
		MedicalImagingActions.actionGetImageSet,
		MedicalImagingActions.actionGetImageSetMetadata,
		MedicalImagingActions.SearchDICOMInstances,
		MedicalImagingActions.SearchDICOMSeries,
		MedicalImagingActions.SearchDICOMStudies,
		MedicalImagingActions.SearchImageSets,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MedicalImagingActions.CopyImageSet,
		MedicalImagingActions.CreateDatastore,
		MedicalImagingActions.DeleteDatastore,
		MedicalImagingActions.DeleteImageSet,
		MedicalImagingActions.StartDICOMImportJob,
		MedicalImagingActions.StoreDICOM,
		MedicalImagingActions.StoreDICOMStudy,
		MedicalImagingActions.UpdateImageSetMetadata,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MedicalImagingActions.ListDICOMImportJobs,
		MedicalImagingActions.ListDatastores,
		MedicalImagingActions.ListImageSetVersions,
		MedicalImagingActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MedicalImagingActions.TagResource,
		MedicalImagingActions.UntagResource,
	];
}

/**
 * Properties for building a datastore ARN.
 */
export interface MedicalImagingDatastoreArnProps {
	/** The DatastoreId component of the ARN. */
	readonly datastoreId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a datastore ARN.
 */
export interface MedicalImagingDatastoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatastoreId component. */
	readonly datastoreId: string;
}

/**
 * Properties for building a imageset ARN.
 */
export interface MedicalImagingImagesetArnProps {
	/** The DatastoreId component of the ARN. */
	readonly datastoreId: string;
	/** The ImageSetId component of the ARN. */
	readonly imageSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a imageset ARN.
 */
export interface MedicalImagingImagesetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatastoreId component. */
	readonly datastoreId: string;
	/** The ImageSetId component. */
	readonly imageSetId: string;
}

const DatastoreArnRegex =
	/^arn:(?<partition>[^:]+):medical-imaging:(?<region>[^:]*):(?<account>[^:]*):datastore\/(?<datastoreId>[^:/?]+)$/;
const ImagesetArnRegex =
	/^arn:(?<partition>[^:]+):medical-imaging:(?<region>[^:]*):(?<account>[^:]*):datastore\/(?<datastoreId>[^:/?]+)\/imageset\/(?<imageSetId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for medical-imaging resources.
 */
export class MedicalImagingResources {
	/**
	 * Builds an ARN for the datastore resource.
	 */
	static datastore(props: MedicalImagingDatastoreArnProps): string {
		return `arn:${props.partition ?? "aws"}:medical-imaging:${props.region ?? "*"}:${props.account ?? "*"}:datastore/${props.datastoreId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the datastore resource.
	 */
	static isValidDatastoreArn(arn: string): boolean {
		return DatastoreArnRegex.test(arn);
	}

	/**
	 * Parses a datastore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatastoreArn(arn: string): MedicalImagingDatastoreArnComponents {
		const match = DatastoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid datastore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datastoreId: match.groups!.datastoreId,
		};
	}

	/**
	 * Builds an ARN for the imageset resource.
	 */
	static imageset(props: MedicalImagingImagesetArnProps): string {
		return `arn:${props.partition ?? "aws"}:medical-imaging:${props.region ?? "*"}:${props.account ?? "*"}:datastore/${props.datastoreId}/imageset/${props.imageSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the imageset resource.
	 */
	static isValidImagesetArn(arn: string): boolean {
		return ImagesetArnRegex.test(arn);
	}

	/**
	 * Parses a imageset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseImagesetArn(arn: string): MedicalImagingImagesetArnComponents {
		const match = ImagesetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid imageset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			datastoreId: match.groups!.datastoreId,
			imageSetId: match.groups!.imageSetId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for medical-imaging.
 */
export class MedicalImagingOperations {
	/** IAM actions required for the CopyImageSet API call. */
	static readonly CopyImageSet: string[] = ["medical-imaging:CopyImageSet"];
	/** IAM actions required for the CreateDatastore API call. */
	static readonly CreateDatastore: string[] = [
		"medical-imaging:CreateDatastore",
		"medical-imaging:TagResource",
	];
	/** IAM actions required for the DeleteDatastore API call. */
	static readonly DeleteDatastore: string[] = [
		"medical-imaging:DeleteDatastore",
	];
	/** IAM actions required for the DeleteImageSet API call. */
	static readonly DeleteImageSet: string[] = ["medical-imaging:DeleteImageSet"];
	/** IAM actions required for the GetDICOMImportJob API call. */
	static readonly opGetDICOMImportJob: string[] = [
		"medical-imaging:GetDICOMImportJob",
	];
	/** IAM actions required for the GetDatastore API call. */
	static readonly opGetDatastore: string[] = ["medical-imaging:GetDatastore"];
	/** IAM actions required for the GetImageFrame API call. */
	static readonly opGetImageFrame: string[] = ["medical-imaging:GetImageFrame"];
	/** IAM actions required for the GetImageSet API call. */
	static readonly opGetImageSet: string[] = ["medical-imaging:GetImageSet"];
	/** IAM actions required for the GetImageSetMetadata API call. */
	static readonly opGetImageSetMetadata: string[] = [
		"medical-imaging:GetImageSetMetadata",
	];
	/** IAM actions required for the ListDICOMImportJobs API call. */
	static readonly ListDICOMImportJobs: string[] = [
		"medical-imaging:ListDICOMImportJobs",
	];
	/** IAM actions required for the ListDatastores API call. */
	static readonly ListDatastores: string[] = ["medical-imaging:ListDatastores"];
	/** IAM actions required for the ListImageSetVersions API call. */
	static readonly ListImageSetVersions: string[] = [
		"medical-imaging:ListImageSetVersions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"medical-imaging:ListTagsForResource",
	];
	/** IAM actions required for the SearchImageSets API call. */
	static readonly SearchImageSets: string[] = [
		"medical-imaging:SearchImageSets",
	];
	/** IAM actions required for the StartDICOMImportJob API call. */
	static readonly StartDICOMImportJob: string[] = [
		"iam:PassRole",
		"medical-imaging:StartDICOMImportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["medical-imaging:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["medical-imaging:UntagResource"];
	/** IAM actions required for the UpdateImageSetMetadata API call. */
	static readonly UpdateImageSetMetadata: string[] = [
		"medical-imaging:UpdateImageSetMetadata",
	];
}

/**
 * Condition key constants and builders for medical-imaging.
 */
export class MedicalImagingConditions {
	/** Condition keys applicable to the CreateDatastore action. */
	static readonly CreateDatastoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDICOMBulkdata action. */
	static readonly actionGetDICOMBulkdataConditionKeys: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMInstance action. */
	static readonly actionGetDICOMInstanceConditionKeys: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMInstanceFrames action. */
	static readonly actionGetDICOMInstanceFramesConditionKeys: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMInstanceMetadata action. */
	static readonly actionGetDICOMInstanceMetadataConditionKeys: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMSeriesMetadata action. */
	static readonly actionGetDICOMSeriesMetadataConditionKeys: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the SearchDICOMInstances action. */
	static readonly SearchDICOMInstancesConditionKeys: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the SearchDICOMSeries action. */
	static readonly SearchDICOMSeriesConditionKeys: string[] = [
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the StoreDICOMStudy action. */
	static readonly StoreDICOMStudyConditionKeys: string[] = [
		"medical-imaging:StudyInstanceUID",
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
	/** Condition key: medical-imaging:SeriesInstanceUID (String) */
	static readonly SERIES_INSTANCE_UID = "medical-imaging:SeriesInstanceUID";
	/** Condition key: medical-imaging:StudyInstanceUID (String) */
	static readonly STUDY_INSTANCE_UID = "medical-imaging:StudyInstanceUID";

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
	 * Generates a condition block for `medical-imaging:SeriesInstanceUID`.
	 */
	static seriesInstanceUid(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "medical-imaging:SeriesInstanceUID": value } };
	}

	/**
	 * Generates a condition block for `medical-imaging:StudyInstanceUID`.
	 */
	static studyInstanceUid(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "medical-imaging:StudyInstanceUID": value } };
	}
}
