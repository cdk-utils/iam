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
	static readonly AssociateFaces = "rekognition:AssociateFaces";
	/** [Read] rekognition:CompareFaces */
	static readonly CompareFaces = "rekognition:CompareFaces";
	/** [Write] rekognition:CopyProjectVersion */
	static readonly CopyProjectVersion = "rekognition:CopyProjectVersion";
	/** [Write] rekognition:CreateCollection */
	static readonly CreateCollection = "rekognition:CreateCollection";
	/** [Write] rekognition:CreateDataset */
	static readonly CreateDataset = "rekognition:CreateDataset";
	/** [Write] rekognition:CreateFaceLivenessSession */
	static readonly CreateFaceLivenessSession =
		"rekognition:CreateFaceLivenessSession";
	/** [Write] rekognition:CreateProject */
	static readonly CreateProject = "rekognition:CreateProject";
	/** [Write] rekognition:CreateProjectVersion */
	static readonly CreateProjectVersion = "rekognition:CreateProjectVersion";
	/** [Write] rekognition:CreateStreamProcessor */
	static readonly CreateStreamProcessor = "rekognition:CreateStreamProcessor";
	/** [Write] rekognition:CreateUser */
	static readonly CreateUser = "rekognition:CreateUser";
	/** [Write] rekognition:DeleteCollection */
	static readonly DeleteCollection = "rekognition:DeleteCollection";
	/** [Write] rekognition:DeleteDataset */
	static readonly DeleteDataset = "rekognition:DeleteDataset";
	/** [Write] rekognition:DeleteFaces */
	static readonly DeleteFaces = "rekognition:DeleteFaces";
	/** [Write] rekognition:DeleteProject */
	static readonly DeleteProject = "rekognition:DeleteProject";
	/** [Write] rekognition:DeleteProjectPolicy */
	static readonly DeleteProjectPolicy = "rekognition:DeleteProjectPolicy";
	/** [Write] rekognition:DeleteProjectVersion */
	static readonly DeleteProjectVersion = "rekognition:DeleteProjectVersion";
	/** [Write] rekognition:DeleteStreamProcessor */
	static readonly DeleteStreamProcessor = "rekognition:DeleteStreamProcessor";
	/** [Write] rekognition:DeleteUser */
	static readonly DeleteUser = "rekognition:DeleteUser";
	/** [Read] rekognition:DescribeCollection */
	static readonly DescribeCollection = "rekognition:DescribeCollection";
	/** [Read] rekognition:DescribeDataset */
	static readonly DescribeDataset = "rekognition:DescribeDataset";
	/** [Read] rekognition:DescribeProjectVersions */
	static readonly DescribeProjectVersions =
		"rekognition:DescribeProjectVersions";
	/** [Read] rekognition:DescribeProjects */
	static readonly DescribeProjects = "rekognition:DescribeProjects";
	/** [Read] rekognition:DescribeStreamProcessor */
	static readonly DescribeStreamProcessor =
		"rekognition:DescribeStreamProcessor";
	/** [Read] rekognition:DetectCustomLabels */
	static readonly DetectCustomLabels = "rekognition:DetectCustomLabels";
	/** [Read] rekognition:DetectFaces */
	static readonly DetectFaces = "rekognition:DetectFaces";
	/** [Read] rekognition:DetectLabels */
	static readonly DetectLabels = "rekognition:DetectLabels";
	/** [Read] rekognition:DetectModerationLabels */
	static readonly DetectModerationLabels = "rekognition:DetectModerationLabels";
	/** [Read] rekognition:DetectProtectiveEquipment */
	static readonly DetectProtectiveEquipment =
		"rekognition:DetectProtectiveEquipment";
	/** [Read] rekognition:DetectText */
	static readonly DetectText = "rekognition:DetectText";
	/** [Write] rekognition:DisassociateFaces */
	static readonly DisassociateFaces = "rekognition:DisassociateFaces";
	/** [Write] rekognition:DistributeDatasetEntries */
	static readonly DistributeDatasetEntries =
		"rekognition:DistributeDatasetEntries";
	/** [Read] rekognition:GetCelebrityInfo */
	static readonly actionGetCelebrityInfo = "rekognition:GetCelebrityInfo";
	/** [Read] rekognition:GetCelebrityRecognition */
	static readonly actionGetCelebrityRecognition =
		"rekognition:GetCelebrityRecognition";
	/** [Read] rekognition:GetContentModeration */
	static readonly actionGetContentModeration =
		"rekognition:GetContentModeration";
	/** [Read] rekognition:GetFaceDetection */
	static readonly actionGetFaceDetection = "rekognition:GetFaceDetection";
	/** [Read] rekognition:GetFaceLivenessSessionResults */
	static readonly actionGetFaceLivenessSessionResults =
		"rekognition:GetFaceLivenessSessionResults";
	/** [Read] rekognition:GetFaceSearch */
	static readonly actionGetFaceSearch = "rekognition:GetFaceSearch";
	/** [Read] rekognition:GetLabelDetection */
	static readonly actionGetLabelDetection = "rekognition:GetLabelDetection";
	/** [Read] rekognition:GetMediaAnalysisJob */
	static readonly actionGetMediaAnalysisJob = "rekognition:GetMediaAnalysisJob";
	/** [Read] rekognition:GetPersonTracking */
	static readonly actionGetPersonTracking = "rekognition:GetPersonTracking";
	/** [Read] rekognition:GetSegmentDetection */
	static readonly actionGetSegmentDetection = "rekognition:GetSegmentDetection";
	/** [Read] rekognition:GetTextDetection */
	static readonly actionGetTextDetection = "rekognition:GetTextDetection";
	/** [Write] rekognition:IndexFaces */
	static readonly IndexFaces = "rekognition:IndexFaces";
	/** [Read] rekognition:ListCollections */
	static readonly ListCollections = "rekognition:ListCollections";
	/** [Read] rekognition:ListDatasetEntries */
	static readonly ListDatasetEntries = "rekognition:ListDatasetEntries";
	/** [Read] rekognition:ListDatasetLabels */
	static readonly ListDatasetLabels = "rekognition:ListDatasetLabels";
	/** [Read] rekognition:ListFaces */
	static readonly ListFaces = "rekognition:ListFaces";
	/** [Read] rekognition:ListMediaAnalysisJobs */
	static readonly ListMediaAnalysisJobs = "rekognition:ListMediaAnalysisJobs";
	/** [Read] rekognition:ListProjectPolicies */
	static readonly ListProjectPolicies = "rekognition:ListProjectPolicies";
	/** [List] rekognition:ListStreamProcessors */
	static readonly ListStreamProcessors = "rekognition:ListStreamProcessors";
	/** [Read] rekognition:ListTagsForResource */
	static readonly ListTagsForResource = "rekognition:ListTagsForResource";
	/** [Read] rekognition:ListUsers */
	static readonly ListUsers = "rekognition:ListUsers";
	/** [Write] rekognition:PutProjectPolicy */
	static readonly PutProjectPolicy = "rekognition:PutProjectPolicy";
	/** [Read] rekognition:RecognizeCelebrities */
	static readonly RecognizeCelebrities = "rekognition:RecognizeCelebrities";
	/** [Read] rekognition:SearchFaces */
	static readonly SearchFaces = "rekognition:SearchFaces";
	/** [Read] rekognition:SearchFacesByImage */
	static readonly SearchFacesByImage = "rekognition:SearchFacesByImage";
	/** [Read] rekognition:SearchUsers */
	static readonly SearchUsers = "rekognition:SearchUsers";
	/** [Read] rekognition:SearchUsersByImage */
	static readonly SearchUsersByImage = "rekognition:SearchUsersByImage";
	/** [Write] rekognition:StartCelebrityRecognition */
	static readonly StartCelebrityRecognition =
		"rekognition:StartCelebrityRecognition";
	/** [Write] rekognition:StartContentModeration */
	static readonly StartContentModeration = "rekognition:StartContentModeration";
	/** [Write] rekognition:StartFaceDetection */
	static readonly StartFaceDetection = "rekognition:StartFaceDetection";
	/** [Write] rekognition:StartFaceLivenessSession */
	static readonly StartFaceLivenessSession =
		"rekognition:StartFaceLivenessSession";
	/** [Write] rekognition:StartFaceSearch */
	static readonly StartFaceSearch = "rekognition:StartFaceSearch";
	/** [Write] rekognition:StartLabelDetection */
	static readonly StartLabelDetection = "rekognition:StartLabelDetection";
	/** [Write] rekognition:StartMediaAnalysisJob */
	static readonly StartMediaAnalysisJob = "rekognition:StartMediaAnalysisJob";
	/** [Write] rekognition:StartPersonTracking */
	static readonly StartPersonTracking = "rekognition:StartPersonTracking";
	/** [Write] rekognition:StartProjectVersion */
	static readonly StartProjectVersion = "rekognition:StartProjectVersion";
	/** [Write] rekognition:StartSegmentDetection */
	static readonly StartSegmentDetection = "rekognition:StartSegmentDetection";
	/** [Write] rekognition:StartStreamProcessor */
	static readonly StartStreamProcessor = "rekognition:StartStreamProcessor";
	/** [Write] rekognition:StartTextDetection */
	static readonly StartTextDetection = "rekognition:StartTextDetection";
	/** [Write] rekognition:StopProjectVersion */
	static readonly StopProjectVersion = "rekognition:StopProjectVersion";
	/** [Write] rekognition:StopStreamProcessor */
	static readonly StopStreamProcessor = "rekognition:StopStreamProcessor";
	/** [Tagging] rekognition:TagResource */
	static readonly TagResource = "rekognition:TagResource";
	/** [Tagging] rekognition:UntagResource */
	static readonly UntagResource = "rekognition:UntagResource";
	/** [Write] rekognition:UpdateDatasetEntries */
	static readonly UpdateDatasetEntries = "rekognition:UpdateDatasetEntries";
	/** [Write] rekognition:UpdateStreamProcessor */
	static readonly UpdateStreamProcessor = "rekognition:UpdateStreamProcessor";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RekognitionActions.CompareFaces,
		RekognitionActions.DescribeCollection,
		RekognitionActions.DescribeDataset,
		RekognitionActions.DescribeProjectVersions,
		RekognitionActions.DescribeProjects,
		RekognitionActions.DescribeStreamProcessor,
		RekognitionActions.DetectCustomLabels,
		RekognitionActions.DetectFaces,
		RekognitionActions.DetectLabels,
		RekognitionActions.DetectModerationLabels,
		RekognitionActions.DetectProtectiveEquipment,
		RekognitionActions.DetectText,
		RekognitionActions.actionGetCelebrityInfo,
		RekognitionActions.actionGetCelebrityRecognition,
		RekognitionActions.actionGetContentModeration,
		RekognitionActions.actionGetFaceDetection,
		RekognitionActions.actionGetFaceLivenessSessionResults,
		RekognitionActions.actionGetFaceSearch,
		RekognitionActions.actionGetLabelDetection,
		RekognitionActions.actionGetMediaAnalysisJob,
		RekognitionActions.actionGetPersonTracking,
		RekognitionActions.actionGetSegmentDetection,
		RekognitionActions.actionGetTextDetection,
		RekognitionActions.ListCollections,
		RekognitionActions.ListDatasetEntries,
		RekognitionActions.ListDatasetLabels,
		RekognitionActions.ListFaces,
		RekognitionActions.ListMediaAnalysisJobs,
		RekognitionActions.ListProjectPolicies,
		RekognitionActions.ListTagsForResource,
		RekognitionActions.ListUsers,
		RekognitionActions.RecognizeCelebrities,
		RekognitionActions.SearchFaces,
		RekognitionActions.SearchFacesByImage,
		RekognitionActions.SearchUsers,
		RekognitionActions.SearchUsersByImage,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RekognitionActions.AssociateFaces,
		RekognitionActions.CopyProjectVersion,
		RekognitionActions.CreateCollection,
		RekognitionActions.CreateDataset,
		RekognitionActions.CreateFaceLivenessSession,
		RekognitionActions.CreateProject,
		RekognitionActions.CreateProjectVersion,
		RekognitionActions.CreateStreamProcessor,
		RekognitionActions.CreateUser,
		RekognitionActions.DeleteCollection,
		RekognitionActions.DeleteDataset,
		RekognitionActions.DeleteFaces,
		RekognitionActions.DeleteProject,
		RekognitionActions.DeleteProjectPolicy,
		RekognitionActions.DeleteProjectVersion,
		RekognitionActions.DeleteStreamProcessor,
		RekognitionActions.DeleteUser,
		RekognitionActions.DisassociateFaces,
		RekognitionActions.DistributeDatasetEntries,
		RekognitionActions.IndexFaces,
		RekognitionActions.PutProjectPolicy,
		RekognitionActions.StartCelebrityRecognition,
		RekognitionActions.StartContentModeration,
		RekognitionActions.StartFaceDetection,
		RekognitionActions.StartFaceLivenessSession,
		RekognitionActions.StartFaceSearch,
		RekognitionActions.StartLabelDetection,
		RekognitionActions.StartMediaAnalysisJob,
		RekognitionActions.StartPersonTracking,
		RekognitionActions.StartProjectVersion,
		RekognitionActions.StartSegmentDetection,
		RekognitionActions.StartStreamProcessor,
		RekognitionActions.StartTextDetection,
		RekognitionActions.StopProjectVersion,
		RekognitionActions.StopStreamProcessor,
		RekognitionActions.UpdateDatasetEntries,
		RekognitionActions.UpdateStreamProcessor,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RekognitionActions.ListStreamProcessors,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RekognitionActions.TagResource,
		RekognitionActions.UntagResource,
	];
}

/**
 * Properties for building a collection ARN.
 */
export interface RekognitionCollectionArnProps {
	/** The CollectionId component of the ARN. */
	readonly collectionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a collection ARN.
 */
export interface RekognitionCollectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CollectionId component. */
	readonly collectionId: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface RekognitionDatasetArnProps {
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
}

/**
 * Parsed components of a dataset ARN.
 */
export interface RekognitionDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
	/** The DatasetType component. */
	readonly datasetType: string;
	/** The CreationTimestamp component. */
	readonly creationTimestamp: string;
}

/**
 * Properties for building a project ARN.
 */
export interface RekognitionProjectArnProps {
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
}

/**
 * Parsed components of a project ARN.
 */
export interface RekognitionProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
	/** The CreationTimestamp component. */
	readonly creationTimestamp: string;
}

/**
 * Properties for building a projectversion ARN.
 */
export interface RekognitionProjectversionArnProps {
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
}

/**
 * Parsed components of a projectversion ARN.
 */
export interface RekognitionProjectversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectName component. */
	readonly projectName: string;
	/** The VersionName component. */
	readonly versionName: string;
	/** The CreationTimestamp component. */
	readonly creationTimestamp: string;
}

/**
 * Properties for building a streamprocessor ARN.
 */
export interface RekognitionStreamprocessorArnProps {
	/** The StreamprocessorId component of the ARN. */
	readonly streamprocessorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a streamprocessor ARN.
 */
export interface RekognitionStreamprocessorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamprocessorId component. */
	readonly streamprocessorId: string;
}

const CollectionArnRegex =
	/^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):collection\/(?<collectionId>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)\/dataset\/(?<datasetType>[^:/?]+)\/(?<creationTimestamp>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)\/(?<creationTimestamp>[^:/?]+)$/;
const ProjectversionArnRegex =
	/^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectName>[^:/?]+)\/version\/(?<versionName>[^:/?]+)\/(?<creationTimestamp>[^:/?]+)$/;
const StreamprocessorArnRegex =
	/^arn:(?<partition>[^:]+):rekognition:(?<region>[^:]*):(?<account>[^:]*):streamprocessor\/(?<streamprocessorId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for rekognition resources.
 */
export class RekognitionResources {
	/**
	 * Builds an ARN for the collection resource.
	 */
	static collection(props: RekognitionCollectionArnProps): string {
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
	static parseCollectionArn(arn: string): RekognitionCollectionArnComponents {
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
	static dataset(props: RekognitionDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): RekognitionDatasetArnComponents {
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
	static project(props: RekognitionProjectArnProps): string {
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
	static parseProjectArn(arn: string): RekognitionProjectArnComponents {
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
	static projectversion(props: RekognitionProjectversionArnProps): string {
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
	static parseProjectversionArn(
		arn: string,
	): RekognitionProjectversionArnComponents {
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
	static streamprocessor(props: RekognitionStreamprocessorArnProps): string {
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
	static parseStreamprocessorArn(
		arn: string,
	): RekognitionStreamprocessorArnComponents {
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
	static readonly AssociateFaces: string[] = ["rekognition:AssociateFaces"];
	/** IAM actions required for the CompareFaces API call. */
	static readonly CompareFaces: string[] = ["rekognition:CompareFaces"];
	/** IAM actions required for the CopyProjectVersion API call. */
	static readonly CopyProjectVersion: string[] = [
		"rekognition:CopyProjectVersion",
		"rekognition:CreateProjectVersion",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateCollection API call. */
	static readonly CreateCollection: string[] = [
		"rekognition:CreateCollection",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [
		"rekognition:CreateDataset",
		"rekognition:ListDatasetEntries",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateFaceLivenessSession API call. */
	static readonly CreateFaceLivenessSession: string[] = [
		"rekognition:CreateFaceLivenessSession",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [
		"rekognition:CreateProject",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateProjectVersion API call. */
	static readonly CreateProjectVersion: string[] = [
		"rekognition:CreateProjectVersion",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateStreamProcessor API call. */
	static readonly CreateStreamProcessor: string[] = [
		"rekognition:CreateStreamProcessor",
		"iam:PassRole",
		"rekognition:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = ["rekognition:CreateUser"];
	/** IAM actions required for the DeleteCollection API call. */
	static readonly DeleteCollection: string[] = ["rekognition:DeleteCollection"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["rekognition:DeleteDataset"];
	/** IAM actions required for the DeleteFaces API call. */
	static readonly DeleteFaces: string[] = ["rekognition:DeleteFaces"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = ["rekognition:DeleteProject"];
	/** IAM actions required for the DeleteProjectPolicy API call. */
	static readonly DeleteProjectPolicy: string[] = [
		"rekognition:DeleteProjectPolicy",
	];
	/** IAM actions required for the DeleteProjectVersion API call. */
	static readonly DeleteProjectVersion: string[] = [
		"rekognition:DeleteProjectVersion",
	];
	/** IAM actions required for the DeleteStreamProcessor API call. */
	static readonly DeleteStreamProcessor: string[] = [
		"rekognition:DeleteStreamProcessor",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["rekognition:DeleteUser"];
	/** IAM actions required for the DescribeCollection API call. */
	static readonly DescribeCollection: string[] = [
		"rekognition:DescribeCollection",
	];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = ["rekognition:DescribeDataset"];
	/** IAM actions required for the DescribeProjectVersions API call. */
	static readonly DescribeProjectVersions: string[] = [
		"rekognition:DescribeProjectVersions",
	];
	/** IAM actions required for the DescribeProjects API call. */
	static readonly DescribeProjects: string[] = ["rekognition:DescribeProjects"];
	/** IAM actions required for the DescribeStreamProcessor API call. */
	static readonly DescribeStreamProcessor: string[] = [
		"rekognition:DescribeStreamProcessor",
	];
	/** IAM actions required for the DetectCustomLabels API call. */
	static readonly DetectCustomLabels: string[] = [
		"rekognition:DetectCustomLabels",
	];
	/** IAM actions required for the DetectFaces API call. */
	static readonly DetectFaces: string[] = ["rekognition:DetectFaces"];
	/** IAM actions required for the DetectLabels API call. */
	static readonly DetectLabels: string[] = ["rekognition:DetectLabels"];
	/** IAM actions required for the DetectModerationLabels API call. */
	static readonly DetectModerationLabels: string[] = [
		"rekognition:DetectModerationLabels",
	];
	/** IAM actions required for the DetectProtectiveEquipment API call. */
	static readonly DetectProtectiveEquipment: string[] = [
		"rekognition:DetectProtectiveEquipment",
	];
	/** IAM actions required for the DetectText API call. */
	static readonly DetectText: string[] = ["rekognition:DetectText"];
	/** IAM actions required for the DisassociateFaces API call. */
	static readonly DisassociateFaces: string[] = [
		"rekognition:DisassociateFaces",
	];
	/** IAM actions required for the DistributeDatasetEntries API call. */
	static readonly DistributeDatasetEntries: string[] = [
		"rekognition:DistributeDatasetEntries",
	];
	/** IAM actions required for the GetCelebrityInfo API call. */
	static readonly opGetCelebrityInfo: string[] = [
		"rekognition:GetCelebrityInfo",
	];
	/** IAM actions required for the GetCelebrityRecognition API call. */
	static readonly opGetCelebrityRecognition: string[] = [
		"rekognition:GetCelebrityRecognition",
	];
	/** IAM actions required for the GetContentModeration API call. */
	static readonly opGetContentModeration: string[] = [
		"rekognition:GetContentModeration",
	];
	/** IAM actions required for the GetFaceDetection API call. */
	static readonly opGetFaceDetection: string[] = [
		"rekognition:GetFaceDetection",
	];
	/** IAM actions required for the GetFaceLivenessSessionResults API call. */
	static readonly opGetFaceLivenessSessionResults: string[] = [
		"rekognition:GetFaceLivenessSessionResults",
	];
	/** IAM actions required for the GetFaceSearch API call. */
	static readonly opGetFaceSearch: string[] = ["rekognition:GetFaceSearch"];
	/** IAM actions required for the GetLabelDetection API call. */
	static readonly opGetLabelDetection: string[] = [
		"rekognition:GetLabelDetection",
	];
	/** IAM actions required for the GetMediaAnalysisJob API call. */
	static readonly opGetMediaAnalysisJob: string[] = [
		"rekognition:GetMediaAnalysisJob",
	];
	/** IAM actions required for the GetPersonTracking API call. */
	static readonly opGetPersonTracking: string[] = [
		"rekognition:GetPersonTracking",
	];
	/** IAM actions required for the GetSegmentDetection API call. */
	static readonly opGetSegmentDetection: string[] = [
		"rekognition:GetSegmentDetection",
	];
	/** IAM actions required for the GetTextDetection API call. */
	static readonly opGetTextDetection: string[] = [
		"rekognition:GetTextDetection",
	];
	/** IAM actions required for the IndexFaces API call. */
	static readonly IndexFaces: string[] = ["rekognition:IndexFaces"];
	/** IAM actions required for the ListCollections API call. */
	static readonly ListCollections: string[] = ["rekognition:ListCollections"];
	/** IAM actions required for the ListDatasetEntries API call. */
	static readonly ListDatasetEntries: string[] = [
		"rekognition:ListDatasetEntries",
	];
	/** IAM actions required for the ListDatasetLabels API call. */
	static readonly ListDatasetLabels: string[] = [
		"rekognition:ListDatasetLabels",
	];
	/** IAM actions required for the ListFaces API call. */
	static readonly ListFaces: string[] = ["rekognition:ListFaces"];
	/** IAM actions required for the ListMediaAnalysisJobs API call. */
	static readonly ListMediaAnalysisJobs: string[] = [
		"rekognition:ListMediaAnalysisJobs",
	];
	/** IAM actions required for the ListProjectPolicies API call. */
	static readonly ListProjectPolicies: string[] = [
		"rekognition:ListProjectPolicies",
	];
	/** IAM actions required for the ListStreamProcessors API call. */
	static readonly ListStreamProcessors: string[] = [
		"rekognition:ListStreamProcessors",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"rekognition:ListTagsForResource",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["rekognition:ListUsers"];
	/** IAM actions required for the PutProjectPolicy API call. */
	static readonly PutProjectPolicy: string[] = ["rekognition:PutProjectPolicy"];
	/** IAM actions required for the RecognizeCelebrities API call. */
	static readonly RecognizeCelebrities: string[] = [
		"rekognition:RecognizeCelebrities",
	];
	/** IAM actions required for the SearchFaces API call. */
	static readonly SearchFaces: string[] = ["rekognition:SearchFaces"];
	/** IAM actions required for the SearchFacesByImage API call. */
	static readonly SearchFacesByImage: string[] = [
		"rekognition:SearchFacesByImage",
	];
	/** IAM actions required for the SearchUsers API call. */
	static readonly SearchUsers: string[] = ["rekognition:SearchUsers"];
	/** IAM actions required for the SearchUsersByImage API call. */
	static readonly SearchUsersByImage: string[] = [
		"rekognition:SearchUsersByImage",
	];
	/** IAM actions required for the StartCelebrityRecognition API call. */
	static readonly StartCelebrityRecognition: string[] = [
		"iam:PassRole",
		"rekognition:StartCelebrityRecognition",
	];
	/** IAM actions required for the StartContentModeration API call. */
	static readonly StartContentModeration: string[] = [
		"iam:PassRole",
		"rekognition:StartContentModeration",
	];
	/** IAM actions required for the StartFaceDetection API call. */
	static readonly StartFaceDetection: string[] = [
		"iam:PassRole",
		"rekognition:StartFaceDetection",
	];
	/** IAM actions required for the StartFaceSearch API call. */
	static readonly StartFaceSearch: string[] = [
		"iam:PassRole",
		"rekognition:StartFaceSearch",
	];
	/** IAM actions required for the StartLabelDetection API call. */
	static readonly StartLabelDetection: string[] = [
		"iam:PassRole",
		"rekognition:StartLabelDetection",
	];
	/** IAM actions required for the StartMediaAnalysisJob API call. */
	static readonly StartMediaAnalysisJob: string[] = [
		"rekognition:StartMediaAnalysisJob",
	];
	/** IAM actions required for the StartPersonTracking API call. */
	static readonly StartPersonTracking: string[] = [
		"iam:PassRole",
		"rekognition:StartPersonTracking",
	];
	/** IAM actions required for the StartProjectVersion API call. */
	static readonly StartProjectVersion: string[] = [
		"rekognition:StartProjectVersion",
	];
	/** IAM actions required for the StartSegmentDetection API call. */
	static readonly StartSegmentDetection: string[] = [
		"iam:PassRole",
		"rekognition:StartSegmentDetection",
	];
	/** IAM actions required for the StartStreamProcessor API call. */
	static readonly StartStreamProcessor: string[] = [
		"rekognition:StartStreamProcessor",
	];
	/** IAM actions required for the StartTextDetection API call. */
	static readonly StartTextDetection: string[] = [
		"iam:PassRole",
		"rekognition:StartTextDetection",
	];
	/** IAM actions required for the StopProjectVersion API call. */
	static readonly StopProjectVersion: string[] = [
		"rekognition:StopProjectVersion",
	];
	/** IAM actions required for the StopStreamProcessor API call. */
	static readonly StopStreamProcessor: string[] = [
		"rekognition:StopStreamProcessor",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["rekognition:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["rekognition:UntagResource"];
	/** IAM actions required for the UpdateDatasetEntries API call. */
	static readonly UpdateDatasetEntries: string[] = [
		"rekognition:UpdateDatasetEntries",
	];
	/** IAM actions required for the UpdateStreamProcessor API call. */
	static readonly UpdateStreamProcessor: string[] = [
		"rekognition:UpdateStreamProcessor",
	];
}

/**
 * Condition key constants and builders for rekognition.
 */
export class RekognitionConditions {
	/** Condition keys applicable to the CopyProjectVersion action. */
	static readonly CopyProjectVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCollection action. */
	static readonly CreateCollectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProjectVersion action. */
	static readonly CreateProjectVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamProcessor action. */
	static readonly CreateStreamProcessorConditionKeys: string[] = [
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
