// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/healthlake.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the healthlake service.
 */
export class HealthLakeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "healthlake";

	/** [Write] healthlake:CancelFHIRExportJobWithDelete */
	static readonly CancelFHIRExportJobWithDelete =
		"healthlake:CancelFHIRExportJobWithDelete";
	/** [Write] healthlake:ConfirmAttributionList */
	static readonly ConfirmAttributionList = "healthlake:ConfirmAttributionList";
	/** [Write] healthlake:CreateDataTransformationProfile */
	static readonly CreateDataTransformationProfile =
		"healthlake:CreateDataTransformationProfile";
	/** [Write] healthlake:CreateFHIRDatastore */
	static readonly CreateFHIRDatastore = "healthlake:CreateFHIRDatastore";
	/** [Write] healthlake:CreateResource */
	static readonly CreateResource = "healthlake:CreateResource";
	/** [Write] healthlake:DeleteDataTransformationProfile */
	static readonly DeleteDataTransformationProfile =
		"healthlake:DeleteDataTransformationProfile";
	/** [Write] healthlake:DeleteFHIRDatastore */
	static readonly DeleteFHIRDatastore = "healthlake:DeleteFHIRDatastore";
	/** [Write] healthlake:DeleteResource */
	static readonly DeleteResource = "healthlake:DeleteResource";
	/** [Read] healthlake:DescribeDataTransformationJob */
	static readonly DescribeDataTransformationJob =
		"healthlake:DescribeDataTransformationJob";
	/** [Read] healthlake:DescribeFHIRBulkDeleteJob */
	static readonly DescribeFHIRBulkDeleteJob =
		"healthlake:DescribeFHIRBulkDeleteJob";
	/** [Read] healthlake:DescribeFHIRBulkMemberMatchJob */
	static readonly DescribeFHIRBulkMemberMatchJob =
		"healthlake:DescribeFHIRBulkMemberMatchJob";
	/** [Read] healthlake:DescribeFHIRDatastore */
	static readonly DescribeFHIRDatastore = "healthlake:DescribeFHIRDatastore";
	/** [Read] healthlake:DescribeFHIRExportJob */
	static readonly DescribeFHIRExportJob = "healthlake:DescribeFHIRExportJob";
	/** [Read] healthlake:DescribeFHIRExportJobWithGet */
	static readonly DescribeFHIRExportJobWithGet =
		"healthlake:DescribeFHIRExportJobWithGet";
	/** [Read] healthlake:DescribeFHIRImportJob */
	static readonly DescribeFHIRImportJob = "healthlake:DescribeFHIRImportJob";
	/** [Read] healthlake:ExpandValueSetWithGet */
	static readonly ExpandValueSetWithGet = "healthlake:ExpandValueSetWithGet";
	/** [Read] healthlake:ExpandValueSetWithPost */
	static readonly ExpandValueSetWithPost = "healthlake:ExpandValueSetWithPost";
	/** [Write] healthlake:GenerateDocumentWithGet */
	static readonly GenerateDocumentWithGet =
		"healthlake:GenerateDocumentWithGet";
	/** [Write] healthlake:GenerateDocumentWithPost */
	static readonly GenerateDocumentWithPost =
		"healthlake:GenerateDocumentWithPost";
	/** [Read] healthlake:GetCapabilities */
	static readonly actionGetCapabilities = "healthlake:GetCapabilities";
	/** [Read] healthlake:GetDataTransformationProfile */
	static readonly actionGetDataTransformationProfile =
		"healthlake:GetDataTransformationProfile";
	/** [Read] healthlake:GetExportedFile */
	static readonly actionGetExportedFile = "healthlake:GetExportedFile";
	/** [Read] healthlake:GetHistoryByResourceId */
	static readonly actionGetHistoryByResourceId =
		"healthlake:GetHistoryByResourceId";
	/** [Read] healthlake:InquirePreAuthClaim */
	static readonly InquirePreAuthClaim = "healthlake:InquirePreAuthClaim";
	/** [List] healthlake:ListDataTransformationJobs */
	static readonly ListDataTransformationJobs =
		"healthlake:ListDataTransformationJobs";
	/** [List] healthlake:ListDataTransformationProfileVersions */
	static readonly ListDataTransformationProfileVersions =
		"healthlake:ListDataTransformationProfileVersions";
	/** [List] healthlake:ListDataTransformationProfiles */
	static readonly ListDataTransformationProfiles =
		"healthlake:ListDataTransformationProfiles";
	/** [List] healthlake:ListFHIRDatastores */
	static readonly ListFHIRDatastores = "healthlake:ListFHIRDatastores";
	/** [List] healthlake:ListFHIRExportJobs */
	static readonly ListFHIRExportJobs = "healthlake:ListFHIRExportJobs";
	/** [List] healthlake:ListFHIRImportJobs */
	static readonly ListFHIRImportJobs = "healthlake:ListFHIRImportJobs";
	/** [List] healthlake:ListTagsForResource */
	static readonly ListTagsForResource = "healthlake:ListTagsForResource";
	/** [Read] healthlake:LookupCodeSystemWithGet */
	static readonly LookupCodeSystemWithGet =
		"healthlake:LookupCodeSystemWithGet";
	/** [Read] healthlake:LookupCodeSystemWithPost */
	static readonly LookupCodeSystemWithPost =
		"healthlake:LookupCodeSystemWithPost";
	/** [Write] healthlake:MemberAdd */
	static readonly MemberAdd = "healthlake:MemberAdd";
	/** [Write] healthlake:MemberMatch */
	static readonly MemberMatch = "healthlake:MemberMatch";
	/** [Write] healthlake:MemberRemove */
	static readonly MemberRemove = "healthlake:MemberRemove";
	/** [Write] healthlake:PatchResource */
	static readonly PatchResource = "healthlake:PatchResource";
	/** [Write] healthlake:ProcessBundle */
	static readonly ProcessBundle = "healthlake:ProcessBundle";
	/** [Write] healthlake:PublishDataTransformationProfile */
	static readonly PublishDataTransformationProfile =
		"healthlake:PublishDataTransformationProfile";
	/** [Read] healthlake:QuestionnairePackage */
	static readonly QuestionnairePackage = "healthlake:QuestionnairePackage";
	/** [Read] healthlake:ReadResource */
	static readonly ReadResource = "healthlake:ReadResource";
	/** [Write] healthlake:RestoreFHIRDatastore */
	static readonly RestoreFHIRDatastore = "healthlake:RestoreFHIRDatastore";
	/** [Write] healthlake:RetrieveAttributionStatus */
	static readonly RetrieveAttributionStatus =
		"healthlake:RetrieveAttributionStatus";
	/** [Read] healthlake:SearchEverything */
	static readonly SearchEverything = "healthlake:SearchEverything";
	/** [Read] healthlake:SearchWithGet */
	static readonly SearchWithGet = "healthlake:SearchWithGet";
	/** [Read] healthlake:SearchWithPost */
	static readonly SearchWithPost = "healthlake:SearchWithPost";
	/** [Write] healthlake:StartDataTransformationJob */
	static readonly StartDataTransformationJob =
		"healthlake:StartDataTransformationJob";
	/** [Write] healthlake:StartFHIRBulkDeleteJob */
	static readonly StartFHIRBulkDeleteJob = "healthlake:StartFHIRBulkDeleteJob";
	/** [Write] healthlake:StartFHIRBulkMemberMatchJob */
	static readonly StartFHIRBulkMemberMatchJob =
		"healthlake:StartFHIRBulkMemberMatchJob";
	/** [Write] healthlake:StartFHIRExportJob */
	static readonly StartFHIRExportJob = "healthlake:StartFHIRExportJob";
	/** [Write] healthlake:StartFHIRExportJobWithGet */
	static readonly StartFHIRExportJobWithGet =
		"healthlake:StartFHIRExportJobWithGet";
	/** [Write] healthlake:StartFHIRExportJobWithPost */
	static readonly StartFHIRExportJobWithPost =
		"healthlake:StartFHIRExportJobWithPost";
	/** [Write] healthlake:StartFHIRImportJob */
	static readonly StartFHIRImportJob = "healthlake:StartFHIRImportJob";
	/** [Write] healthlake:SubmitPreAuthClaim */
	static readonly SubmitPreAuthClaim = "healthlake:SubmitPreAuthClaim";
	/** [Tagging] healthlake:TagResource */
	static readonly TagResource = "healthlake:TagResource";
	/** [Write] healthlake:TransformData */
	static readonly TransformData = "healthlake:TransformData";
	/** [Read] healthlake:TranslateConceptMapWithGet */
	static readonly TranslateConceptMapWithGet =
		"healthlake:TranslateConceptMapWithGet";
	/** [Read] healthlake:TranslateConceptMapWithPost */
	static readonly TranslateConceptMapWithPost =
		"healthlake:TranslateConceptMapWithPost";
	/** [Tagging] healthlake:UntagResource */
	static readonly UntagResource = "healthlake:UntagResource";
	/** [Write] healthlake:UpdateDataTransformationProfile */
	static readonly UpdateDataTransformationProfile =
		"healthlake:UpdateDataTransformationProfile";
	/** [Write] healthlake:UpdateFHIRDatastore */
	static readonly UpdateFHIRDatastore = "healthlake:UpdateFHIRDatastore";
	/** [Write] healthlake:UpdateProfileWithAgent */
	static readonly UpdateProfileWithAgent = "healthlake:UpdateProfileWithAgent";
	/** [Write] healthlake:UpdateResource */
	static readonly UpdateResource = "healthlake:UpdateResource";
	/** [Read] healthlake:ValidateResource */
	static readonly ValidateResource = "healthlake:ValidateResource";
	/** [Read] healthlake:ValidateSource */
	static readonly ValidateSource = "healthlake:ValidateSource";
	/** [Read] healthlake:VersionReadResource */
	static readonly VersionReadResource = "healthlake:VersionReadResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		HealthLakeActions.DescribeDataTransformationJob,
		HealthLakeActions.DescribeFHIRBulkDeleteJob,
		HealthLakeActions.DescribeFHIRBulkMemberMatchJob,
		HealthLakeActions.DescribeFHIRDatastore,
		HealthLakeActions.DescribeFHIRExportJob,
		HealthLakeActions.DescribeFHIRExportJobWithGet,
		HealthLakeActions.DescribeFHIRImportJob,
		HealthLakeActions.ExpandValueSetWithGet,
		HealthLakeActions.ExpandValueSetWithPost,
		HealthLakeActions.actionGetCapabilities,
		HealthLakeActions.actionGetDataTransformationProfile,
		HealthLakeActions.actionGetExportedFile,
		HealthLakeActions.actionGetHistoryByResourceId,
		HealthLakeActions.InquirePreAuthClaim,
		HealthLakeActions.LookupCodeSystemWithGet,
		HealthLakeActions.LookupCodeSystemWithPost,
		HealthLakeActions.QuestionnairePackage,
		HealthLakeActions.ReadResource,
		HealthLakeActions.SearchEverything,
		HealthLakeActions.SearchWithGet,
		HealthLakeActions.SearchWithPost,
		HealthLakeActions.TranslateConceptMapWithGet,
		HealthLakeActions.TranslateConceptMapWithPost,
		HealthLakeActions.ValidateResource,
		HealthLakeActions.ValidateSource,
		HealthLakeActions.VersionReadResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		HealthLakeActions.CancelFHIRExportJobWithDelete,
		HealthLakeActions.ConfirmAttributionList,
		HealthLakeActions.CreateDataTransformationProfile,
		HealthLakeActions.CreateFHIRDatastore,
		HealthLakeActions.CreateResource,
		HealthLakeActions.DeleteDataTransformationProfile,
		HealthLakeActions.DeleteFHIRDatastore,
		HealthLakeActions.DeleteResource,
		HealthLakeActions.GenerateDocumentWithGet,
		HealthLakeActions.GenerateDocumentWithPost,
		HealthLakeActions.MemberAdd,
		HealthLakeActions.MemberMatch,
		HealthLakeActions.MemberRemove,
		HealthLakeActions.PatchResource,
		HealthLakeActions.ProcessBundle,
		HealthLakeActions.PublishDataTransformationProfile,
		HealthLakeActions.RestoreFHIRDatastore,
		HealthLakeActions.RetrieveAttributionStatus,
		HealthLakeActions.StartDataTransformationJob,
		HealthLakeActions.StartFHIRBulkDeleteJob,
		HealthLakeActions.StartFHIRBulkMemberMatchJob,
		HealthLakeActions.StartFHIRExportJob,
		HealthLakeActions.StartFHIRExportJobWithGet,
		HealthLakeActions.StartFHIRExportJobWithPost,
		HealthLakeActions.StartFHIRImportJob,
		HealthLakeActions.SubmitPreAuthClaim,
		HealthLakeActions.TransformData,
		HealthLakeActions.UpdateDataTransformationProfile,
		HealthLakeActions.UpdateFHIRDatastore,
		HealthLakeActions.UpdateProfileWithAgent,
		HealthLakeActions.UpdateResource,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		HealthLakeActions.ListDataTransformationJobs,
		HealthLakeActions.ListDataTransformationProfileVersions,
		HealthLakeActions.ListDataTransformationProfiles,
		HealthLakeActions.ListFHIRDatastores,
		HealthLakeActions.ListFHIRExportJobs,
		HealthLakeActions.ListFHIRImportJobs,
		HealthLakeActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		HealthLakeActions.TagResource,
		HealthLakeActions.UntagResource,
	];
}

/**
 * Properties for building a dataTransformationProfile ARN.
 */
export interface HealthLakeDataTransformationProfileArnProps {
	/** The ProfileId component of the ARN. */
	readonly profileId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dataTransformationProfile ARN.
 */
export interface HealthLakeDataTransformationProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfileId component. */
	readonly profileId: string;
}

/**
 * Properties for building a datastore ARN.
 */
export interface HealthLakeDatastoreArnProps {
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
export interface HealthLakeDatastoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DatastoreId component. */
	readonly datastoreId: string;
}

const DataTransformationProfileArnRegex =
	/^arn:(?<partition>[^:]+):healthlake:(?<region>[^:]*):(?<account>[^:]*):dataTransformationProfile\/(?<profileId>[^:/?]+)$/;
const DatastoreArnRegex =
	/^arn:(?<partition>[^:]+):healthlake:(?<region>[^:]*):(?<account>[^:]*):datastore\/fhir\/(?<datastoreId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for healthlake resources.
 */
export class HealthLakeResources {
	/**
	 * Builds an ARN for the dataTransformationProfile resource.
	 */
	static dataTransformationProfile(
		props: HealthLakeDataTransformationProfileArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:healthlake:${props.region ?? "*"}:${props.account ?? "*"}:dataTransformationProfile/${props.profileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataTransformationProfile resource.
	 */
	static isValidDataTransformationProfileArn(arn: string): boolean {
		return DataTransformationProfileArnRegex.test(arn);
	}

	/**
	 * Parses a dataTransformationProfile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataTransformationProfileArn(
		arn: string,
	): HealthLakeDataTransformationProfileArnComponents {
		const match = DataTransformationProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataTransformationProfile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileId: match.groups!.profileId,
		};
	}

	/**
	 * Builds an ARN for the datastore resource.
	 */
	static datastore(props: HealthLakeDatastoreArnProps): string {
		return `arn:${props.partition ?? "aws"}:healthlake:${props.region ?? "*"}:${props.account ?? "*"}:datastore/fhir/${props.datastoreId}`;
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
	static parseDatastoreArn(arn: string): HealthLakeDatastoreArnComponents {
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
}

/**
 * API operation to required IAM actions mapping for healthlake.
 */
export class HealthLakeOperations {
	/** IAM actions required for the CreateDataTransformationProfile API call. */
	static readonly CreateDataTransformationProfile: string[] = [
		"healthlake:CreateDataTransformationProfile",
		"healthlake:TagResource",
	];
	/** IAM actions required for the CreateFHIRDatastore API call. */
	static readonly CreateFHIRDatastore: string[] = [
		"healthlake:CreateFHIRDatastore",
		"healthlake:TagResource",
	];
	/** IAM actions required for the DeleteDataTransformationProfile API call. */
	static readonly DeleteDataTransformationProfile: string[] = [
		"healthlake:DeleteDataTransformationProfile",
	];
	/** IAM actions required for the DeleteFHIRDatastore API call. */
	static readonly DeleteFHIRDatastore: string[] = [
		"healthlake:DeleteFHIRDatastore",
	];
	/** IAM actions required for the DescribeDataTransformationJob API call. */
	static readonly DescribeDataTransformationJob: string[] = [
		"healthlake:DescribeDataTransformationJob",
	];
	/** IAM actions required for the DescribeFHIRDatastore API call. */
	static readonly DescribeFHIRDatastore: string[] = [
		"healthlake:DescribeFHIRDatastore",
	];
	/** IAM actions required for the DescribeFHIRExportJob API call. */
	static readonly DescribeFHIRExportJob: string[] = [
		"healthlake:DescribeFHIRExportJob",
	];
	/** IAM actions required for the DescribeFHIRImportJob API call. */
	static readonly DescribeFHIRImportJob: string[] = [
		"healthlake:DescribeFHIRImportJob",
	];
	/** IAM actions required for the GetDataTransformationProfile API call. */
	static readonly opGetDataTransformationProfile: string[] = [
		"healthlake:GetDataTransformationProfile",
	];
	/** IAM actions required for the ListDataTransformationJobs API call. */
	static readonly ListDataTransformationJobs: string[] = [
		"healthlake:ListDataTransformationJobs",
	];
	/** IAM actions required for the ListDataTransformationProfileVersions API call. */
	static readonly ListDataTransformationProfileVersions: string[] = [
		"healthlake:ListDataTransformationProfileVersions",
	];
	/** IAM actions required for the ListDataTransformationProfiles API call. */
	static readonly ListDataTransformationProfiles: string[] = [
		"healthlake:ListDataTransformationProfiles",
	];
	/** IAM actions required for the ListFHIRDatastores API call. */
	static readonly ListFHIRDatastores: string[] = [
		"healthlake:ListFHIRDatastores",
	];
	/** IAM actions required for the ListFHIRExportJobs API call. */
	static readonly ListFHIRExportJobs: string[] = [
		"healthlake:ListFHIRExportJobs",
	];
	/** IAM actions required for the ListFHIRImportJobs API call. */
	static readonly ListFHIRImportJobs: string[] = [
		"healthlake:ListFHIRImportJobs",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"healthlake:ListTagsForResource",
	];
	/** IAM actions required for the PublishDataTransformationProfile API call. */
	static readonly PublishDataTransformationProfile: string[] = [
		"healthlake:PublishDataTransformationProfile",
	];
	/** IAM actions required for the RestoreFHIRDatastore API call. */
	static readonly RestoreFHIRDatastore: string[] = [
		"healthlake:RestoreFHIRDatastore",
		"healthlake:TagResource",
	];
	/** IAM actions required for the StartDataTransformationJob API call. */
	static readonly StartDataTransformationJob: string[] = [
		"iam:PassRole",
		"healthlake:StartDataTransformationJob",
	];
	/** IAM actions required for the StartFHIRExportJob API call. */
	static readonly StartFHIRExportJob: string[] = [
		"iam:PassRole",
		"healthlake:StartFHIRExportJob",
	];
	/** IAM actions required for the StartFHIRImportJob API call. */
	static readonly StartFHIRImportJob: string[] = [
		"iam:PassRole",
		"healthlake:StartFHIRImportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["healthlake:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["healthlake:UntagResource"];
	/** IAM actions required for the UpdateDataTransformationProfile API call. */
	static readonly UpdateDataTransformationProfile: string[] = [
		"healthlake:UpdateDataTransformationProfile",
	];
	/** IAM actions required for the UpdateFHIRDatastore API call. */
	static readonly UpdateFHIRDatastore: string[] = [
		"healthlake:UpdateFHIRDatastore",
	];
	/** IAM actions required for the UpdateProfileWithAgent API call. */
	static readonly UpdateProfileWithAgent: string[] = [
		"healthlake:UpdateProfileWithAgent",
	];
}

/**
 * Condition key constants and builders for healthlake.
 */
export class HealthLakeConditions {
	/** Condition keys applicable to the CreateDataTransformationProfile action. */
	static readonly CreateDataTransformationProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFHIRDatastore action. */
	static readonly CreateFHIRDatastoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RestoreFHIRDatastore action. */
	static readonly RestoreFHIRDatastoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
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
