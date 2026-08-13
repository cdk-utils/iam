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
	static readonly COPY_IMAGE_SET = "medical-imaging:CopyImageSet";
	/** [Write] medical-imaging:CreateDatastore */
	static readonly CREATE_DATASTORE = "medical-imaging:CreateDatastore";
	/** [Write] medical-imaging:DeleteDatastore */
	static readonly DELETE_DATASTORE = "medical-imaging:DeleteDatastore";
	/** [Write] medical-imaging:DeleteImageSet */
	static readonly DELETE_IMAGE_SET = "medical-imaging:DeleteImageSet";
	/** [Read] medical-imaging:GetDICOMBulkdata */
	static readonly GET_DICOM_BULKDATA = "medical-imaging:GetDICOMBulkdata";
	/** [Read] medical-imaging:GetDICOMImportJob */
	static readonly GET_DICOM_IMPORT_JOB = "medical-imaging:GetDICOMImportJob";
	/** [Read] medical-imaging:GetDICOMInstance */
	static readonly GET_DICOM_INSTANCE = "medical-imaging:GetDICOMInstance";
	/** [Read] medical-imaging:GetDICOMInstanceFrames */
	static readonly GET_DICOM_INSTANCE_FRAMES =
		"medical-imaging:GetDICOMInstanceFrames";
	/** [Read] medical-imaging:GetDICOMInstanceMetadata */
	static readonly GET_DICOM_INSTANCE_METADATA =
		"medical-imaging:GetDICOMInstanceMetadata";
	/** [Read] medical-imaging:GetDICOMSeriesMetadata */
	static readonly GET_DICOM_SERIES_METADATA =
		"medical-imaging:GetDICOMSeriesMetadata";
	/** [Read] medical-imaging:GetDatastore */
	static readonly GET_DATASTORE = "medical-imaging:GetDatastore";
	/** [Read] medical-imaging:GetImageFrame */
	static readonly GET_IMAGE_FRAME = "medical-imaging:GetImageFrame";
	/** [Read] medical-imaging:GetImageSet */
	static readonly GET_IMAGE_SET = "medical-imaging:GetImageSet";
	/** [Read] medical-imaging:GetImageSetMetadata */
	static readonly GET_IMAGE_SET_METADATA =
		"medical-imaging:GetImageSetMetadata";
	/** [List] medical-imaging:ListDICOMImportJobs */
	static readonly LIST_DICOM_IMPORT_JOBS =
		"medical-imaging:ListDICOMImportJobs";
	/** [List] medical-imaging:ListDatastores */
	static readonly LIST_DATASTORES = "medical-imaging:ListDatastores";
	/** [List] medical-imaging:ListImageSetVersions */
	static readonly LIST_IMAGE_SET_VERSIONS =
		"medical-imaging:ListImageSetVersions";
	/** [List] medical-imaging:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"medical-imaging:ListTagsForResource";
	/** [Read] medical-imaging:SearchDICOMInstances */
	static readonly SEARCH_DICOM_INSTANCES =
		"medical-imaging:SearchDICOMInstances";
	/** [Read] medical-imaging:SearchDICOMSeries */
	static readonly SEARCH_DICOM_SERIES = "medical-imaging:SearchDICOMSeries";
	/** [Read] medical-imaging:SearchDICOMStudies */
	static readonly SEARCH_DICOM_STUDIES = "medical-imaging:SearchDICOMStudies";
	/** [Read] medical-imaging:SearchImageSets */
	static readonly SEARCH_IMAGE_SETS = "medical-imaging:SearchImageSets";
	/** [Write] medical-imaging:StartDICOMImportJob */
	static readonly START_DICOM_IMPORT_JOB =
		"medical-imaging:StartDICOMImportJob";
	/** [Write] medical-imaging:StoreDICOM */
	static readonly STORE_DICOM = "medical-imaging:StoreDICOM";
	/** [Write] medical-imaging:StoreDICOMStudy */
	static readonly STORE_DICOM_STUDY = "medical-imaging:StoreDICOMStudy";
	/** [Tagging] medical-imaging:TagResource */
	static readonly TAG_RESOURCE = "medical-imaging:TagResource";
	/** [Tagging] medical-imaging:UntagResource */
	static readonly UNTAG_RESOURCE = "medical-imaging:UntagResource";
	/** [Write] medical-imaging:UpdateImageSetMetadata */
	static readonly UPDATE_IMAGE_SET_METADATA =
		"medical-imaging:UpdateImageSetMetadata";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MedicalImagingActions.GET_DICOM_BULKDATA,
		MedicalImagingActions.GET_DICOM_IMPORT_JOB,
		MedicalImagingActions.GET_DICOM_INSTANCE,
		MedicalImagingActions.GET_DICOM_INSTANCE_FRAMES,
		MedicalImagingActions.GET_DICOM_INSTANCE_METADATA,
		MedicalImagingActions.GET_DICOM_SERIES_METADATA,
		MedicalImagingActions.GET_DATASTORE,
		MedicalImagingActions.GET_IMAGE_FRAME,
		MedicalImagingActions.GET_IMAGE_SET,
		MedicalImagingActions.GET_IMAGE_SET_METADATA,
		MedicalImagingActions.SEARCH_DICOM_INSTANCES,
		MedicalImagingActions.SEARCH_DICOM_SERIES,
		MedicalImagingActions.SEARCH_DICOM_STUDIES,
		MedicalImagingActions.SEARCH_IMAGE_SETS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MedicalImagingActions.COPY_IMAGE_SET,
		MedicalImagingActions.CREATE_DATASTORE,
		MedicalImagingActions.DELETE_DATASTORE,
		MedicalImagingActions.DELETE_IMAGE_SET,
		MedicalImagingActions.START_DICOM_IMPORT_JOB,
		MedicalImagingActions.STORE_DICOM,
		MedicalImagingActions.STORE_DICOM_STUDY,
		MedicalImagingActions.UPDATE_IMAGE_SET_METADATA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MedicalImagingActions.LIST_DICOM_IMPORT_JOBS,
		MedicalImagingActions.LIST_DATASTORES,
		MedicalImagingActions.LIST_IMAGE_SET_VERSIONS,
		MedicalImagingActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MedicalImagingActions.TAG_RESOURCE,
		MedicalImagingActions.UNTAG_RESOURCE,
	];
}

const DatastoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medical-imaging:(?<region>[^:]*):(?<account>[^:]*):datastore/(?<datastoreId>[^:/?]+)$",
);
const ImagesetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medical-imaging:(?<region>[^:]*):(?<account>[^:]*):datastore/(?<datastoreId>[^:/?]+)/imageset/(?<imageSetId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for medical-imaging resources.
 */
export class MedicalImagingResources {
	/**
	 * Builds an ARN for the datastore resource.
	 */
	static datastore(props: {
		/** The DatastoreId component of the ARN. */
		readonly datastoreId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDatastoreArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datastoreId: string;
	} {
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
	static imageset(props: {
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
	}): string {
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
	static parseImagesetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		datastoreId: string;
		imageSetId: string;
	} {
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
	static readonly COPY_IMAGE_SET: string[] = ["medical-imaging:CopyImageSet"];
	/** IAM actions required for the CreateDatastore API call. */
	static readonly CREATE_DATASTORE: string[] = [
		"medical-imaging:CreateDatastore",
		"medical-imaging:TagResource",
	];
	/** IAM actions required for the DeleteDatastore API call. */
	static readonly DELETE_DATASTORE: string[] = [
		"medical-imaging:DeleteDatastore",
	];
	/** IAM actions required for the DeleteImageSet API call. */
	static readonly DELETE_IMAGE_SET: string[] = [
		"medical-imaging:DeleteImageSet",
	];
	/** IAM actions required for the GetDICOMImportJob API call. */
	static readonly GET_DICOM_IMPORT_JOB: string[] = [
		"medical-imaging:GetDICOMImportJob",
	];
	/** IAM actions required for the GetDatastore API call. */
	static readonly GET_DATASTORE: string[] = ["medical-imaging:GetDatastore"];
	/** IAM actions required for the GetImageFrame API call. */
	static readonly GET_IMAGE_FRAME: string[] = ["medical-imaging:GetImageFrame"];
	/** IAM actions required for the GetImageSet API call. */
	static readonly GET_IMAGE_SET: string[] = ["medical-imaging:GetImageSet"];
	/** IAM actions required for the GetImageSetMetadata API call. */
	static readonly GET_IMAGE_SET_METADATA: string[] = [
		"medical-imaging:GetImageSetMetadata",
	];
	/** IAM actions required for the ListDICOMImportJobs API call. */
	static readonly LIST_DICOM_IMPORT_JOBS: string[] = [
		"medical-imaging:ListDICOMImportJobs",
	];
	/** IAM actions required for the ListDatastores API call. */
	static readonly LIST_DATASTORES: string[] = [
		"medical-imaging:ListDatastores",
	];
	/** IAM actions required for the ListImageSetVersions API call. */
	static readonly LIST_IMAGE_SET_VERSIONS: string[] = [
		"medical-imaging:ListImageSetVersions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"medical-imaging:ListTagsForResource",
	];
	/** IAM actions required for the SearchImageSets API call. */
	static readonly SEARCH_IMAGE_SETS: string[] = [
		"medical-imaging:SearchImageSets",
	];
	/** IAM actions required for the StartDICOMImportJob API call. */
	static readonly START_DICOM_IMPORT_JOB: string[] = [
		"iam:PassRole",
		"medical-imaging:StartDICOMImportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["medical-imaging:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["medical-imaging:UntagResource"];
	/** IAM actions required for the UpdateImageSetMetadata API call. */
	static readonly UPDATE_IMAGE_SET_METADATA: string[] = [
		"medical-imaging:UpdateImageSetMetadata",
	];
}

/**
 * Condition key constants and builders for medical-imaging.
 */
export class MedicalImagingConditions {
	/** Condition keys applicable to the CreateDatastore action. */
	static readonly CREATE_DATASTORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDICOMBulkdata action. */
	static readonly GET_DICOM_BULKDATA_CONDITION_KEYS: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMInstance action. */
	static readonly GET_DICOM_INSTANCE_CONDITION_KEYS: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMInstanceFrames action. */
	static readonly GET_DICOM_INSTANCE_FRAMES_CONDITION_KEYS: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMInstanceMetadata action. */
	static readonly GET_DICOM_INSTANCE_METADATA_CONDITION_KEYS: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the GetDICOMSeriesMetadata action. */
	static readonly GET_DICOM_SERIES_METADATA_CONDITION_KEYS: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the SearchDICOMInstances action. */
	static readonly SEARCH_DICOM_INSTANCES_CONDITION_KEYS: string[] = [
		"medical-imaging:SeriesInstanceUID",
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the SearchDICOMSeries action. */
	static readonly SEARCH_DICOM_SERIES_CONDITION_KEYS: string[] = [
		"medical-imaging:StudyInstanceUID",
	];
	/** Condition keys applicable to the StoreDICOMStudy action. */
	static readonly STORE_DICOM_STUDY_CONDITION_KEYS: string[] = [
		"medical-imaging:StudyInstanceUID",
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
