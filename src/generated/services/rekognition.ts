// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/rekognition.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the rekognition service.
 */
export class RekognitionActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "rekognition";

	/** [Write] rekognition:AssociateFaces */
	static readonly ASSOCIATE_FACES = "rekognition:AssociateFaces";
	/** [Read] rekognition:CompareFaces */
	static readonly COMPARE_FACES = "rekognition:CompareFaces";
	/** [Write] rekognition:CopyProjectVersion */
	static readonly COPY_PROJECT_VERSION = "rekognition:CopyProjectVersion";
	/** [Write] rekognition:CreateCollection */
	static readonly CREATE_COLLECTION = "rekognition:CreateCollection";
	/** [Write] rekognition:CreateDataset */
	static readonly CREATE_DATASET = "rekognition:CreateDataset";
	/** [Write] rekognition:CreateFaceLivenessSession */
	static readonly CREATE_FACE_LIVENESS_SESSION =
		"rekognition:CreateFaceLivenessSession";
	/** [Write] rekognition:CreateProject */
	static readonly CREATE_PROJECT = "rekognition:CreateProject";
	/** [Write] rekognition:CreateProjectVersion */
	static readonly CREATE_PROJECT_VERSION = "rekognition:CreateProjectVersion";
	/** [Write] rekognition:CreateStreamProcessor */
	static readonly CREATE_STREAM_PROCESSOR = "rekognition:CreateStreamProcessor";
	/** [Write] rekognition:CreateUser */
	static readonly CREATE_USER = "rekognition:CreateUser";
	/** [Write] rekognition:DeleteCollection */
	static readonly DELETE_COLLECTION = "rekognition:DeleteCollection";
	/** [Write] rekognition:DeleteDataset */
	static readonly DELETE_DATASET = "rekognition:DeleteDataset";
	/** [Write] rekognition:DeleteFaces */
	static readonly DELETE_FACES = "rekognition:DeleteFaces";
	/** [Write] rekognition:DeleteProject */
	static readonly DELETE_PROJECT = "rekognition:DeleteProject";
	/** [Write] rekognition:DeleteProjectPolicy */
	static readonly DELETE_PROJECT_POLICY = "rekognition:DeleteProjectPolicy";
	/** [Write] rekognition:DeleteProjectVersion */
	static readonly DELETE_PROJECT_VERSION = "rekognition:DeleteProjectVersion";
	/** [Write] rekognition:DeleteStreamProcessor */
	static readonly DELETE_STREAM_PROCESSOR = "rekognition:DeleteStreamProcessor";
	/** [Write] rekognition:DeleteUser */
	static readonly DELETE_USER = "rekognition:DeleteUser";
	/** [Read] rekognition:DescribeCollection */
	static readonly DESCRIBE_COLLECTION = "rekognition:DescribeCollection";
	/** [Read] rekognition:DescribeDataset */
	static readonly DESCRIBE_DATASET = "rekognition:DescribeDataset";
	/** [Read] rekognition:DescribeProjectVersions */
	static readonly DESCRIBE_PROJECT_VERSIONS =
		"rekognition:DescribeProjectVersions";
	/** [Read] rekognition:DescribeProjects */
	static readonly DESCRIBE_PROJECTS = "rekognition:DescribeProjects";
	/** [Read] rekognition:DescribeStreamProcessor */
	static readonly DESCRIBE_STREAM_PROCESSOR =
		"rekognition:DescribeStreamProcessor";
	/** [Read] rekognition:DetectCustomLabels */
	static readonly DETECT_CUSTOM_LABELS = "rekognition:DetectCustomLabels";
	/** [Read] rekognition:DetectFaces */
	static readonly DETECT_FACES = "rekognition:DetectFaces";
	/** [Read] rekognition:DetectLabels */
	static readonly DETECT_LABELS = "rekognition:DetectLabels";
	/** [Read] rekognition:DetectModerationLabels */
	static readonly DETECT_MODERATION_LABELS =
		"rekognition:DetectModerationLabels";
	/** [Read] rekognition:DetectProtectiveEquipment */
	static readonly DETECT_PROTECTIVE_EQUIPMENT =
		"rekognition:DetectProtectiveEquipment";
	/** [Read] rekognition:DetectText */
	static readonly DETECT_TEXT = "rekognition:DetectText";
	/** [Write] rekognition:DisassociateFaces */
	static readonly DISASSOCIATE_FACES = "rekognition:DisassociateFaces";
	/** [Write] rekognition:DistributeDatasetEntries */
	static readonly DISTRIBUTE_DATASET_ENTRIES =
		"rekognition:DistributeDatasetEntries";
	/** [Read] rekognition:GetCelebrityInfo */
	static readonly GET_CELEBRITY_INFO = "rekognition:GetCelebrityInfo";
	/** [Read] rekognition:GetCelebrityRecognition */
	static readonly GET_CELEBRITY_RECOGNITION =
		"rekognition:GetCelebrityRecognition";
	/** [Read] rekognition:GetContentModeration */
	static readonly GET_CONTENT_MODERATION = "rekognition:GetContentModeration";
	/** [Read] rekognition:GetFaceDetection */
	static readonly GET_FACE_DETECTION = "rekognition:GetFaceDetection";
	/** [Read] rekognition:GetFaceLivenessSessionResults */
	static readonly GET_FACE_LIVENESS_SESSION_RESULTS =
		"rekognition:GetFaceLivenessSessionResults";
	/** [Read] rekognition:GetFaceSearch */
	static readonly GET_FACE_SEARCH = "rekognition:GetFaceSearch";
	/** [Read] rekognition:GetLabelDetection */
	static readonly GET_LABEL_DETECTION = "rekognition:GetLabelDetection";
	/** [Read] rekognition:GetMediaAnalysisJob */
	static readonly GET_MEDIA_ANALYSIS_JOB = "rekognition:GetMediaAnalysisJob";
	/** [Read] rekognition:GetPersonTracking */
	static readonly GET_PERSON_TRACKING = "rekognition:GetPersonTracking";
	/** [Read] rekognition:GetSegmentDetection */
	static readonly GET_SEGMENT_DETECTION = "rekognition:GetSegmentDetection";
	/** [Read] rekognition:GetTextDetection */
	static readonly GET_TEXT_DETECTION = "rekognition:GetTextDetection";
	/** [Write] rekognition:IndexFaces */
	static readonly INDEX_FACES = "rekognition:IndexFaces";
	/** [Read] rekognition:ListCollections */
	static readonly LIST_COLLECTIONS = "rekognition:ListCollections";
	/** [Read] rekognition:ListDatasetEntries */
	static readonly LIST_DATASET_ENTRIES = "rekognition:ListDatasetEntries";
	/** [Read] rekognition:ListDatasetLabels */
	static readonly LIST_DATASET_LABELS = "rekognition:ListDatasetLabels";
	/** [Read] rekognition:ListFaces */
	static readonly LIST_FACES = "rekognition:ListFaces";
	/** [Read] rekognition:ListMediaAnalysisJobs */
	static readonly LIST_MEDIA_ANALYSIS_JOBS =
		"rekognition:ListMediaAnalysisJobs";
	/** [Read] rekognition:ListProjectPolicies */
	static readonly LIST_PROJECT_POLICIES = "rekognition:ListProjectPolicies";
	/** [List] rekognition:ListStreamProcessors */
	static readonly LIST_STREAM_PROCESSORS = "rekognition:ListStreamProcessors";
	/** [Read] rekognition:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "rekognition:ListTagsForResource";
	/** [Read] rekognition:ListUsers */
	static readonly LIST_USERS = "rekognition:ListUsers";
	/** [Write] rekognition:PutProjectPolicy */
	static readonly PUT_PROJECT_POLICY = "rekognition:PutProjectPolicy";
	/** [Read] rekognition:RecognizeCelebrities */
	static readonly RECOGNIZE_CELEBRITIES = "rekognition:RecognizeCelebrities";
	/** [Read] rekognition:SearchFaces */
	static readonly SEARCH_FACES = "rekognition:SearchFaces";
	/** [Read] rekognition:SearchFacesByImage */
	static readonly SEARCH_FACES_BY_IMAGE = "rekognition:SearchFacesByImage";
	/** [Read] rekognition:SearchUsers */
	static readonly SEARCH_USERS = "rekognition:SearchUsers";
	/** [Read] rekognition:SearchUsersByImage */
	static readonly SEARCH_USERS_BY_IMAGE = "rekognition:SearchUsersByImage";
	/** [Write] rekognition:StartCelebrityRecognition */
	static readonly START_CELEBRITY_RECOGNITION =
		"rekognition:StartCelebrityRecognition";
	/** [Write] rekognition:StartContentModeration */
	static readonly START_CONTENT_MODERATION =
		"rekognition:StartContentModeration";
	/** [Write] rekognition:StartFaceDetection */
	static readonly START_FACE_DETECTION = "rekognition:StartFaceDetection";
	/** [Write] rekognition:StartFaceLivenessSession */
	static readonly START_FACE_LIVENESS_SESSION =
		"rekognition:StartFaceLivenessSession";
	/** [Write] rekognition:StartFaceSearch */
	static readonly START_FACE_SEARCH = "rekognition:StartFaceSearch";
	/** [Write] rekognition:StartLabelDetection */
	static readonly START_LABEL_DETECTION = "rekognition:StartLabelDetection";
	/** [Write] rekognition:StartMediaAnalysisJob */
	static readonly START_MEDIA_ANALYSIS_JOB =
		"rekognition:StartMediaAnalysisJob";
	/** [Write] rekognition:StartPersonTracking */
	static readonly START_PERSON_TRACKING = "rekognition:StartPersonTracking";
	/** [Write] rekognition:StartProjectVersion */
	static readonly START_PROJECT_VERSION = "rekognition:StartProjectVersion";
	/** [Write] rekognition:StartSegmentDetection */
	static readonly START_SEGMENT_DETECTION = "rekognition:StartSegmentDetection";
	/** [Write] rekognition:StartStreamProcessor */
	static readonly START_STREAM_PROCESSOR = "rekognition:StartStreamProcessor";
	/** [Write] rekognition:StartTextDetection */
	static readonly START_TEXT_DETECTION = "rekognition:StartTextDetection";
	/** [Write] rekognition:StopProjectVersion */
	static readonly STOP_PROJECT_VERSION = "rekognition:StopProjectVersion";
	/** [Write] rekognition:StopStreamProcessor */
	static readonly STOP_STREAM_PROCESSOR = "rekognition:StopStreamProcessor";
	/** [Tagging] rekognition:TagResource */
	static readonly TAG_RESOURCE = "rekognition:TagResource";
	/** [Tagging] rekognition:UntagResource */
	static readonly UNTAG_RESOURCE = "rekognition:UntagResource";
	/** [Write] rekognition:UpdateDatasetEntries */
	static readonly UPDATE_DATASET_ENTRIES = "rekognition:UpdateDatasetEntries";
	/** [Write] rekognition:UpdateStreamProcessor */
	static readonly UPDATE_STREAM_PROCESSOR = "rekognition:UpdateStreamProcessor";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RekognitionActions.COMPARE_FACES,
		RekognitionActions.DESCRIBE_COLLECTION,
		RekognitionActions.DESCRIBE_DATASET,
		RekognitionActions.DESCRIBE_PROJECT_VERSIONS,
		RekognitionActions.DESCRIBE_PROJECTS,
		RekognitionActions.DESCRIBE_STREAM_PROCESSOR,
		RekognitionActions.DETECT_CUSTOM_LABELS,
		RekognitionActions.DETECT_FACES,
		RekognitionActions.DETECT_LABELS,
		RekognitionActions.DETECT_MODERATION_LABELS,
		RekognitionActions.DETECT_PROTECTIVE_EQUIPMENT,
		RekognitionActions.DETECT_TEXT,
		RekognitionActions.GET_CELEBRITY_INFO,
		RekognitionActions.GET_CELEBRITY_RECOGNITION,
		RekognitionActions.GET_CONTENT_MODERATION,
		RekognitionActions.GET_FACE_DETECTION,
		RekognitionActions.GET_FACE_LIVENESS_SESSION_RESULTS,
		RekognitionActions.GET_FACE_SEARCH,
		RekognitionActions.GET_LABEL_DETECTION,
		RekognitionActions.GET_MEDIA_ANALYSIS_JOB,
		RekognitionActions.GET_PERSON_TRACKING,
		RekognitionActions.GET_SEGMENT_DETECTION,
		RekognitionActions.GET_TEXT_DETECTION,
		RekognitionActions.LIST_COLLECTIONS,
		RekognitionActions.LIST_DATASET_ENTRIES,
		RekognitionActions.LIST_DATASET_LABELS,
		RekognitionActions.LIST_FACES,
		RekognitionActions.LIST_MEDIA_ANALYSIS_JOBS,
		RekognitionActions.LIST_PROJECT_POLICIES,
		RekognitionActions.LIST_TAGS_FOR_RESOURCE,
		RekognitionActions.LIST_USERS,
		RekognitionActions.RECOGNIZE_CELEBRITIES,
		RekognitionActions.SEARCH_FACES,
		RekognitionActions.SEARCH_FACES_BY_IMAGE,
		RekognitionActions.SEARCH_USERS,
		RekognitionActions.SEARCH_USERS_BY_IMAGE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RekognitionActions.ASSOCIATE_FACES,
		RekognitionActions.COPY_PROJECT_VERSION,
		RekognitionActions.CREATE_COLLECTION,
		RekognitionActions.CREATE_DATASET,
		RekognitionActions.CREATE_FACE_LIVENESS_SESSION,
		RekognitionActions.CREATE_PROJECT,
		RekognitionActions.CREATE_PROJECT_VERSION,
		RekognitionActions.CREATE_STREAM_PROCESSOR,
		RekognitionActions.CREATE_USER,
		RekognitionActions.DELETE_COLLECTION,
		RekognitionActions.DELETE_DATASET,
		RekognitionActions.DELETE_FACES,
		RekognitionActions.DELETE_PROJECT,
		RekognitionActions.DELETE_PROJECT_POLICY,
		RekognitionActions.DELETE_PROJECT_VERSION,
		RekognitionActions.DELETE_STREAM_PROCESSOR,
		RekognitionActions.DELETE_USER,
		RekognitionActions.DISASSOCIATE_FACES,
		RekognitionActions.DISTRIBUTE_DATASET_ENTRIES,
		RekognitionActions.INDEX_FACES,
		RekognitionActions.PUT_PROJECT_POLICY,
		RekognitionActions.START_CELEBRITY_RECOGNITION,
		RekognitionActions.START_CONTENT_MODERATION,
		RekognitionActions.START_FACE_DETECTION,
		RekognitionActions.START_FACE_LIVENESS_SESSION,
		RekognitionActions.START_FACE_SEARCH,
		RekognitionActions.START_LABEL_DETECTION,
		RekognitionActions.START_MEDIA_ANALYSIS_JOB,
		RekognitionActions.START_PERSON_TRACKING,
		RekognitionActions.START_PROJECT_VERSION,
		RekognitionActions.START_SEGMENT_DETECTION,
		RekognitionActions.START_STREAM_PROCESSOR,
		RekognitionActions.START_TEXT_DETECTION,
		RekognitionActions.STOP_PROJECT_VERSION,
		RekognitionActions.STOP_STREAM_PROCESSOR,
		RekognitionActions.UPDATE_DATASET_ENTRIES,
		RekognitionActions.UPDATE_STREAM_PROCESSOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		RekognitionActions.LIST_STREAM_PROCESSORS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RekognitionActions.TAG_RESOURCE,
		RekognitionActions.UNTAG_RESOURCE,
	];
}

const CollectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):collection/(?<collectionId>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)/dataset/(?<datasetType>[^:/?]+)/(?<creationTimestamp>[^:/?]+)$",
);
const ProjectArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)/(?<creationTimestamp>[^:/?]+)$",
);
const ProjectversionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):project/(?<projectName>[^:/?]+)/version/(?<versionName>[^:/?]+)/(?<creationTimestamp>[^:/?]+)$",
);
const StreamprocessorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):streamprocessor/(?<streamprocessorId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for rekognition resources.
 */
export class RekognitionResources {
	/**
	 * Builds an ARN for the collection resource.
	 */
	static collection(props: {
		/** The CollectionId component of the ARN. */
		readonly collectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rekognition:${props.region ?? "*"}:${props.account ?? "*"}:collection/${props.collectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the collection resource.
	 */
	static isValidCollectionArn(arn: string): boolean {
		return CollectionArnRegex.test(arn);
	}

	/**
	 * Parses a collection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCollectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		collectionId: string;
	} {
		const match = CollectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid collection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			collectionId: match.groups!.collectionId,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** The DatasetType component of the ARN. */
		readonly datasetType: string;
		/** The CreationTimestamp component of the ARN. */
		readonly creationTimestamp: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rekognition:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}/dataset/${props.datasetType}/${props.creationTimestamp}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectName: string;
		datasetType: string;
		creationTimestamp: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
			datasetType: match.groups!.datasetType,
			creationTimestamp: match.groups!.creationTimestamp,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** The CreationTimestamp component of the ARN. */
		readonly creationTimestamp: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rekognition:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}/${props.creationTimestamp}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectName: string;
		creationTimestamp: string;
	} {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
			creationTimestamp: match.groups!.creationTimestamp,
		};
	}

	/**
	 * Builds an ARN for the projectversion resource.
	 */
	static projectversion(props: {
		/** The ProjectName component of the ARN. */
		readonly projectName: string;
		/** The VersionName component of the ARN. */
		readonly versionName: string;
		/** The CreationTimestamp component of the ARN. */
		readonly creationTimestamp: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rekognition:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectName}/version/${props.versionName}/${props.creationTimestamp}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the projectversion resource.
	 */
	static isValidProjectversionArn(arn: string): boolean {
		return ProjectversionArnRegex.test(arn);
	}

	/**
	 * Parses a projectversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectversionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		projectName: string;
		versionName: string;
		creationTimestamp: string;
	} {
		const match = ProjectversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid projectversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectName: match.groups!.projectName,
			versionName: match.groups!.versionName,
			creationTimestamp: match.groups!.creationTimestamp,
		};
	}

	/**
	 * Builds an ARN for the streamprocessor resource.
	 */
	static streamprocessor(props: {
		/** The StreamprocessorId component of the ARN. */
		readonly streamprocessorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:rekognition:${props.region ?? "*"}:${props.account ?? "*"}:streamprocessor/${props.streamprocessorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the streamprocessor resource.
	 */
	static isValidStreamprocessorArn(arn: string): boolean {
		return StreamprocessorArnRegex.test(arn);
	}

	/**
	 * Parses a streamprocessor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamprocessorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		streamprocessorId: string;
	} {
		const match = StreamprocessorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid streamprocessor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamprocessorId: match.groups!.streamprocessorId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for rekognition.
 */
export class RekognitionOperations {
	/** IAM actions required for the AssociateFaces API call. */
	static readonly ASSOCIATE_FACES: string[] = ["rekognition:AssociateFaces"];
	/** IAM actions required for the CompareFaces API call. */
	static readonly COMPARE_FACES: string[] = ["rekognition:CompareFaces"];
	/** IAM actions required for the CopyProjectVersion API call. */
	static readonly COPY_PROJECT_VERSION: string[] = [
		"rekognition:CopyProjectVersion",
		"rekognition:CreateProjectVersion",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateCollection API call. */
	static readonly CREATE_COLLECTION: string[] = [
		"rekognition:CreateCollection",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [
		"rekognition:CreateDataset",
		"rekognition:ListDatasetEntries",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateFaceLivenessSession API call. */
	static readonly CREATE_FACE_LIVENESS_SESSION: string[] = [
		"rekognition:CreateFaceLivenessSession",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CREATE_PROJECT: string[] = [
		"rekognition:CreateProject",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateProjectVersion API call. */
	static readonly CREATE_PROJECT_VERSION: string[] = [
		"rekognition:CreateProjectVersion",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateStreamProcessor API call. */
	static readonly CREATE_STREAM_PROCESSOR: string[] = [
		"rekognition:CreateStreamProcessor",
		"iam:PassRole",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = ["rekognition:CreateUser"];
	/** IAM actions required for the DeleteCollection API call. */
	static readonly DELETE_COLLECTION: string[] = [
		"rekognition:DeleteCollection",
	];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["rekognition:DeleteDataset"];
	/** IAM actions required for the DeleteFaces API call. */
	static readonly DELETE_FACES: string[] = ["rekognition:DeleteFaces"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DELETE_PROJECT: string[] = ["rekognition:DeleteProject"];
	/** IAM actions required for the DeleteProjectPolicy API call. */
	static readonly DELETE_PROJECT_POLICY: string[] = [
		"rekognition:DeleteProjectPolicy",
	];
	/** IAM actions required for the DeleteProjectVersion API call. */
	static readonly DELETE_PROJECT_VERSION: string[] = [
		"rekognition:DeleteProjectVersion",
	];
	/** IAM actions required for the DeleteStreamProcessor API call. */
	static readonly DELETE_STREAM_PROCESSOR: string[] = [
		"rekognition:DeleteStreamProcessor",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["rekognition:DeleteUser"];
	/** IAM actions required for the DescribeCollection API call. */
	static readonly DESCRIBE_COLLECTION: string[] = [
		"rekognition:DescribeCollection",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = ["rekognition:DescribeDataset"];
	/** IAM actions required for the DescribeProjectVersions API call. */
	static readonly DESCRIBE_PROJECT_VERSIONS: string[] = [
		"rekognition:DescribeProjectVersions",
	];
	/** IAM actions required for the DescribeProjects API call. */
	static readonly DESCRIBE_PROJECTS: string[] = [
		"rekognition:DescribeProjects",
	];
	/** IAM actions required for the DescribeStreamProcessor API call. */
	static readonly DESCRIBE_STREAM_PROCESSOR: string[] = [
		"rekognition:DescribeStreamProcessor",
	];
	/** IAM actions required for the DetectCustomLabels API call. */
	static readonly DETECT_CUSTOM_LABELS: string[] = [
		"rekognition:DetectCustomLabels",
	];
	/** IAM actions required for the DetectFaces API call. */
	static readonly DETECT_FACES: string[] = ["rekognition:DetectFaces"];
	/** IAM actions required for the DetectLabels API call. */
	static readonly DETECT_LABELS: string[] = ["rekognition:DetectLabels"];
	/** IAM actions required for the DetectModerationLabels API call. */
	static readonly DETECT_MODERATION_LABELS: string[] = [
		"rekognition:DetectModerationLabels",
	];
	/** IAM actions required for the DetectProtectiveEquipment API call. */
	static readonly DETECT_PROTECTIVE_EQUIPMENT: string[] = [
		"rekognition:DetectProtectiveEquipment",
	];
	/** IAM actions required for the DetectText API call. */
	static readonly DETECT_TEXT: string[] = ["rekognition:DetectText"];
	/** IAM actions required for the DisassociateFaces API call. */
	static readonly DISASSOCIATE_FACES: string[] = [
		"rekognition:DisassociateFaces",
	];
	/** IAM actions required for the DistributeDatasetEntries API call. */
	static readonly DISTRIBUTE_DATASET_ENTRIES: string[] = [
		"rekognition:DistributeDatasetEntries",
	];
	/** IAM actions required for the GetCelebrityInfo API call. */
	static readonly GET_CELEBRITY_INFO: string[] = [
		"rekognition:GetCelebrityInfo",
	];
	/** IAM actions required for the GetCelebrityRecognition API call. */
	static readonly GET_CELEBRITY_RECOGNITION: string[] = [
		"rekognition:GetCelebrityRecognition",
	];
	/** IAM actions required for the GetContentModeration API call. */
	static readonly GET_CONTENT_MODERATION: string[] = [
		"rekognition:GetContentModeration",
	];
	/** IAM actions required for the GetFaceDetection API call. */
	static readonly GET_FACE_DETECTION: string[] = [
		"rekognition:GetFaceDetection",
	];
	/** IAM actions required for the GetFaceLivenessSessionResults API call. */
	static readonly GET_FACE_LIVENESS_SESSION_RESULTS: string[] = [
		"rekognition:GetFaceLivenessSessionResults",
	];
	/** IAM actions required for the GetFaceSearch API call. */
	static readonly GET_FACE_SEARCH: string[] = ["rekognition:GetFaceSearch"];
	/** IAM actions required for the GetLabelDetection API call. */
	static readonly GET_LABEL_DETECTION: string[] = [
		"rekognition:GetLabelDetection",
	];
	/** IAM actions required for the GetMediaAnalysisJob API call. */
	static readonly GET_MEDIA_ANALYSIS_JOB: string[] = [
		"rekognition:GetMediaAnalysisJob",
	];
	/** IAM actions required for the GetPersonTracking API call. */
	static readonly GET_PERSON_TRACKING: string[] = [
		"rekognition:GetPersonTracking",
	];
	/** IAM actions required for the GetSegmentDetection API call. */
	static readonly GET_SEGMENT_DETECTION: string[] = [
		"rekognition:GetSegmentDetection",
	];
	/** IAM actions required for the GetTextDetection API call. */
	static readonly GET_TEXT_DETECTION: string[] = [
		"rekognition:GetTextDetection",
	];
	/** IAM actions required for the IndexFaces API call. */
	static readonly INDEX_FACES: string[] = ["rekognition:IndexFaces"];
	/** IAM actions required for the ListCollections API call. */
	static readonly LIST_COLLECTIONS: string[] = ["rekognition:ListCollections"];
	/** IAM actions required for the ListDatasetEntries API call. */
	static readonly LIST_DATASET_ENTRIES: string[] = [
		"rekognition:ListDatasetEntries",
	];
	/** IAM actions required for the ListDatasetLabels API call. */
	static readonly LIST_DATASET_LABELS: string[] = [
		"rekognition:ListDatasetLabels",
	];
	/** IAM actions required for the ListFaces API call. */
	static readonly LIST_FACES: string[] = ["rekognition:ListFaces"];
	/** IAM actions required for the ListMediaAnalysisJobs API call. */
	static readonly LIST_MEDIA_ANALYSIS_JOBS: string[] = [
		"rekognition:ListMediaAnalysisJobs",
	];
	/** IAM actions required for the ListProjectPolicies API call. */
	static readonly LIST_PROJECT_POLICIES: string[] = [
		"rekognition:ListProjectPolicies",
	];
	/** IAM actions required for the ListStreamProcessors API call. */
	static readonly LIST_STREAM_PROCESSORS: string[] = [
		"rekognition:ListStreamProcessors",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"rekognition:ListTagsForResource",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["rekognition:ListUsers"];
	/** IAM actions required for the PutProjectPolicy API call. */
	static readonly PUT_PROJECT_POLICY: string[] = [
		"rekognition:PutProjectPolicy",
	];
	/** IAM actions required for the RecognizeCelebrities API call. */
	static readonly RECOGNIZE_CELEBRITIES: string[] = [
		"rekognition:RecognizeCelebrities",
	];
	/** IAM actions required for the SearchFaces API call. */
	static readonly SEARCH_FACES: string[] = ["rekognition:SearchFaces"];
	/** IAM actions required for the SearchFacesByImage API call. */
	static readonly SEARCH_FACES_BY_IMAGE: string[] = [
		"rekognition:SearchFacesByImage",
	];
	/** IAM actions required for the SearchUsers API call. */
	static readonly SEARCH_USERS: string[] = ["rekognition:SearchUsers"];
	/** IAM actions required for the SearchUsersByImage API call. */
	static readonly SEARCH_USERS_BY_IMAGE: string[] = [
		"rekognition:SearchUsersByImage",
	];
	/** IAM actions required for the StartCelebrityRecognition API call. */
	static readonly START_CELEBRITY_RECOGNITION: string[] = [
		"iam:PassRole",
		"rekognition:StartCelebrityRecognition",
	];
	/** IAM actions required for the StartContentModeration API call. */
	static readonly START_CONTENT_MODERATION: string[] = [
		"iam:PassRole",
		"rekognition:StartContentModeration",
	];
	/** IAM actions required for the StartFaceDetection API call. */
	static readonly START_FACE_DETECTION: string[] = [
		"iam:PassRole",
		"rekognition:StartFaceDetection",
	];
	/** IAM actions required for the StartFaceSearch API call. */
	static readonly START_FACE_SEARCH: string[] = [
		"iam:PassRole",
		"rekognition:StartFaceSearch",
	];
	/** IAM actions required for the StartLabelDetection API call. */
	static readonly START_LABEL_DETECTION: string[] = [
		"iam:PassRole",
		"rekognition:StartLabelDetection",
	];
	/** IAM actions required for the StartMediaAnalysisJob API call. */
	static readonly START_MEDIA_ANALYSIS_JOB: string[] = [
		"rekognition:StartMediaAnalysisJob",
	];
	/** IAM actions required for the StartPersonTracking API call. */
	static readonly START_PERSON_TRACKING: string[] = [
		"iam:PassRole",
		"rekognition:StartPersonTracking",
	];
	/** IAM actions required for the StartProjectVersion API call. */
	static readonly START_PROJECT_VERSION: string[] = [
		"rekognition:StartProjectVersion",
	];
	/** IAM actions required for the StartSegmentDetection API call. */
	static readonly START_SEGMENT_DETECTION: string[] = [
		"iam:PassRole",
		"rekognition:StartSegmentDetection",
	];
	/** IAM actions required for the StartStreamProcessor API call. */
	static readonly START_STREAM_PROCESSOR: string[] = [
		"rekognition:StartStreamProcessor",
	];
	/** IAM actions required for the StartTextDetection API call. */
	static readonly START_TEXT_DETECTION: string[] = [
		"iam:PassRole",
		"rekognition:StartTextDetection",
	];
	/** IAM actions required for the StopProjectVersion API call. */
	static readonly STOP_PROJECT_VERSION: string[] = [
		"rekognition:StopProjectVersion",
	];
	/** IAM actions required for the StopStreamProcessor API call. */
	static readonly STOP_STREAM_PROCESSOR: string[] = [
		"rekognition:StopStreamProcessor",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["rekognition:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["rekognition:UntagResource"];
	/** IAM actions required for the UpdateDatasetEntries API call. */
	static readonly UPDATE_DATASET_ENTRIES: string[] = [
		"rekognition:UpdateDatasetEntries",
	];
	/** IAM actions required for the UpdateStreamProcessor API call. */
	static readonly UPDATE_STREAM_PROCESSOR: string[] = [
		"rekognition:UpdateStreamProcessor",
	];
}

/**
 * Condition key constants and builders for rekognition.
 */
export class RekognitionConditions {
	/** Condition keys applicable to the CopyProjectVersion action. */
	static readonly COPY_PROJECT_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCollection action. */
	static readonly CREATE_COLLECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CREATE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CREATE_PROJECT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProjectVersion action. */
	static readonly CREATE_PROJECT_VERSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamProcessor action. */
	static readonly CREATE_STREAM_PROCESSOR_CONDITION_KEYS: string[] = [
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
