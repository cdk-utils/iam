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
	static readonly CANCEL_FHIR_EXPORT_JOB_WITH_DELETE =
		"healthlake:CancelFHIRExportJobWithDelete";
	/** [Write] healthlake:ConfirmAttributionList */
	static readonly CONFIRM_ATTRIBUTION_LIST =
		"healthlake:ConfirmAttributionList";
	/** [Write] healthlake:CreateDataTransformationProfile */
	static readonly CREATE_DATA_TRANSFORMATION_PROFILE =
		"healthlake:CreateDataTransformationProfile";
	/** [Write] healthlake:CreateFHIRDatastore */
	static readonly CREATE_FHIR_DATASTORE = "healthlake:CreateFHIRDatastore";
	/** [Write] healthlake:CreateResource */
	static readonly CREATE_RESOURCE = "healthlake:CreateResource";
	/** [Write] healthlake:DeleteDataTransformationProfile */
	static readonly DELETE_DATA_TRANSFORMATION_PROFILE =
		"healthlake:DeleteDataTransformationProfile";
	/** [Write] healthlake:DeleteFHIRDatastore */
	static readonly DELETE_FHIR_DATASTORE = "healthlake:DeleteFHIRDatastore";
	/** [Write] healthlake:DeleteResource */
	static readonly DELETE_RESOURCE = "healthlake:DeleteResource";
	/** [Read] healthlake:DescribeDataTransformationJob */
	static readonly DESCRIBE_DATA_TRANSFORMATION_JOB =
		"healthlake:DescribeDataTransformationJob";
	/** [Read] healthlake:DescribeFHIRBulkDeleteJob */
	static readonly DESCRIBE_FHIR_BULK_DELETE_JOB =
		"healthlake:DescribeFHIRBulkDeleteJob";
	/** [Read] healthlake:DescribeFHIRBulkMemberMatchJob */
	static readonly DESCRIBE_FHIR_BULK_MEMBER_MATCH_JOB =
		"healthlake:DescribeFHIRBulkMemberMatchJob";
	/** [Read] healthlake:DescribeFHIRDatastore */
	static readonly DESCRIBE_FHIR_DATASTORE = "healthlake:DescribeFHIRDatastore";
	/** [Read] healthlake:DescribeFHIRExportJob */
	static readonly DESCRIBE_FHIR_EXPORT_JOB = "healthlake:DescribeFHIRExportJob";
	/** [Read] healthlake:DescribeFHIRExportJobWithGet */
	static readonly DESCRIBE_FHIR_EXPORT_JOB_WITH_GET =
		"healthlake:DescribeFHIRExportJobWithGet";
	/** [Read] healthlake:DescribeFHIRImportJob */
	static readonly DESCRIBE_FHIR_IMPORT_JOB = "healthlake:DescribeFHIRImportJob";
	/** [Read] healthlake:ExpandValueSetWithGet */
	static readonly EXPAND_VALUE_SET_WITH_GET =
		"healthlake:ExpandValueSetWithGet";
	/** [Read] healthlake:ExpandValueSetWithPost */
	static readonly EXPAND_VALUE_SET_WITH_POST =
		"healthlake:ExpandValueSetWithPost";
	/** [Write] healthlake:GenerateDocumentWithGet */
	static readonly GENERATE_DOCUMENT_WITH_GET =
		"healthlake:GenerateDocumentWithGet";
	/** [Write] healthlake:GenerateDocumentWithPost */
	static readonly GENERATE_DOCUMENT_WITH_POST =
		"healthlake:GenerateDocumentWithPost";
	/** [Read] healthlake:GetCapabilities */
	static readonly GET_CAPABILITIES = "healthlake:GetCapabilities";
	/** [Read] healthlake:GetDataTransformationProfile */
	static readonly GET_DATA_TRANSFORMATION_PROFILE =
		"healthlake:GetDataTransformationProfile";
	/** [Read] healthlake:GetExportedFile */
	static readonly GET_EXPORTED_FILE = "healthlake:GetExportedFile";
	/** [Read] healthlake:GetHistoryByResourceId */
	static readonly GET_HISTORY_BY_RESOURCE_ID =
		"healthlake:GetHistoryByResourceId";
	/** [Read] healthlake:InquirePreAuthClaim */
	static readonly INQUIRE_PRE_AUTH_CLAIM = "healthlake:InquirePreAuthClaim";
	/** [List] healthlake:ListDataTransformationJobs */
	static readonly LIST_DATA_TRANSFORMATION_JOBS =
		"healthlake:ListDataTransformationJobs";
	/** [List] healthlake:ListDataTransformationProfileVersions */
	static readonly LIST_DATA_TRANSFORMATION_PROFILE_VERSIONS =
		"healthlake:ListDataTransformationProfileVersions";
	/** [List] healthlake:ListDataTransformationProfiles */
	static readonly LIST_DATA_TRANSFORMATION_PROFILES =
		"healthlake:ListDataTransformationProfiles";
	/** [List] healthlake:ListFHIRDatastores */
	static readonly LIST_FHIR_DATASTORES = "healthlake:ListFHIRDatastores";
	/** [List] healthlake:ListFHIRExportJobs */
	static readonly LIST_FHIR_EXPORT_JOBS = "healthlake:ListFHIRExportJobs";
	/** [List] healthlake:ListFHIRImportJobs */
	static readonly LIST_FHIR_IMPORT_JOBS = "healthlake:ListFHIRImportJobs";
	/** [List] healthlake:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "healthlake:ListTagsForResource";
	/** [Read] healthlake:LookupCodeSystemWithGet */
	static readonly LOOKUP_CODE_SYSTEM_WITH_GET =
		"healthlake:LookupCodeSystemWithGet";
	/** [Read] healthlake:LookupCodeSystemWithPost */
	static readonly LOOKUP_CODE_SYSTEM_WITH_POST =
		"healthlake:LookupCodeSystemWithPost";
	/** [Write] healthlake:MemberAdd */
	static readonly MEMBER_ADD = "healthlake:MemberAdd";
	/** [Write] healthlake:MemberMatch */
	static readonly MEMBER_MATCH = "healthlake:MemberMatch";
	/** [Write] healthlake:MemberRemove */
	static readonly MEMBER_REMOVE = "healthlake:MemberRemove";
	/** [Write] healthlake:PatchResource */
	static readonly PATCH_RESOURCE = "healthlake:PatchResource";
	/** [Write] healthlake:ProcessBundle */
	static readonly PROCESS_BUNDLE = "healthlake:ProcessBundle";
	/** [Write] healthlake:PublishDataTransformationProfile */
	static readonly PUBLISH_DATA_TRANSFORMATION_PROFILE =
		"healthlake:PublishDataTransformationProfile";
	/** [Read] healthlake:QuestionnairePackage */
	static readonly QUESTIONNAIRE_PACKAGE = "healthlake:QuestionnairePackage";
	/** [Read] healthlake:ReadResource */
	static readonly READ_RESOURCE = "healthlake:ReadResource";
	/** [Write] healthlake:RetrieveAttributionStatus */
	static readonly RETRIEVE_ATTRIBUTION_STATUS =
		"healthlake:RetrieveAttributionStatus";
	/** [Read] healthlake:SearchEverything */
	static readonly SEARCH_EVERYTHING = "healthlake:SearchEverything";
	/** [Read] healthlake:SearchWithGet */
	static readonly SEARCH_WITH_GET = "healthlake:SearchWithGet";
	/** [Read] healthlake:SearchWithPost */
	static readonly SEARCH_WITH_POST = "healthlake:SearchWithPost";
	/** [Write] healthlake:StartDataTransformationJob */
	static readonly START_DATA_TRANSFORMATION_JOB =
		"healthlake:StartDataTransformationJob";
	/** [Write] healthlake:StartFHIRBulkDeleteJob */
	static readonly START_FHIR_BULK_DELETE_JOB =
		"healthlake:StartFHIRBulkDeleteJob";
	/** [Write] healthlake:StartFHIRBulkMemberMatchJob */
	static readonly START_FHIR_BULK_MEMBER_MATCH_JOB =
		"healthlake:StartFHIRBulkMemberMatchJob";
	/** [Write] healthlake:StartFHIRExportJob */
	static readonly START_FHIR_EXPORT_JOB = "healthlake:StartFHIRExportJob";
	/** [Write] healthlake:StartFHIRExportJobWithGet */
	static readonly START_FHIR_EXPORT_JOB_WITH_GET =
		"healthlake:StartFHIRExportJobWithGet";
	/** [Write] healthlake:StartFHIRExportJobWithPost */
	static readonly START_FHIR_EXPORT_JOB_WITH_POST =
		"healthlake:StartFHIRExportJobWithPost";
	/** [Write] healthlake:StartFHIRImportJob */
	static readonly START_FHIR_IMPORT_JOB = "healthlake:StartFHIRImportJob";
	/** [Write] healthlake:SubmitPreAuthClaim */
	static readonly SUBMIT_PRE_AUTH_CLAIM = "healthlake:SubmitPreAuthClaim";
	/** [Tagging] healthlake:TagResource */
	static readonly TAG_RESOURCE = "healthlake:TagResource";
	/** [Write] healthlake:TransformData */
	static readonly TRANSFORM_DATA = "healthlake:TransformData";
	/** [Tagging] healthlake:UntagResource */
	static readonly UNTAG_RESOURCE = "healthlake:UntagResource";
	/** [Write] healthlake:UpdateDataTransformationProfile */
	static readonly UPDATE_DATA_TRANSFORMATION_PROFILE =
		"healthlake:UpdateDataTransformationProfile";
	/** [Write] healthlake:UpdateFHIRDatastore */
	static readonly UPDATE_FHIR_DATASTORE = "healthlake:UpdateFHIRDatastore";
	/** [Write] healthlake:UpdateProfileWithAgent */
	static readonly UPDATE_PROFILE_WITH_AGENT =
		"healthlake:UpdateProfileWithAgent";
	/** [Write] healthlake:UpdateResource */
	static readonly UPDATE_RESOURCE = "healthlake:UpdateResource";
	/** [Read] healthlake:ValidateResource */
	static readonly VALIDATE_RESOURCE = "healthlake:ValidateResource";
	/** [Read] healthlake:ValidateSource */
	static readonly VALIDATE_SOURCE = "healthlake:ValidateSource";
	/** [Read] healthlake:VersionReadResource */
	static readonly VERSION_READ_RESOURCE = "healthlake:VersionReadResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		HealthLakeActions.DESCRIBE_DATA_TRANSFORMATION_JOB,
		HealthLakeActions.DESCRIBE_FHIR_BULK_DELETE_JOB,
		HealthLakeActions.DESCRIBE_FHIR_BULK_MEMBER_MATCH_JOB,
		HealthLakeActions.DESCRIBE_FHIR_DATASTORE,
		HealthLakeActions.DESCRIBE_FHIR_EXPORT_JOB,
		HealthLakeActions.DESCRIBE_FHIR_EXPORT_JOB_WITH_GET,
		HealthLakeActions.DESCRIBE_FHIR_IMPORT_JOB,
		HealthLakeActions.EXPAND_VALUE_SET_WITH_GET,
		HealthLakeActions.EXPAND_VALUE_SET_WITH_POST,
		HealthLakeActions.GET_CAPABILITIES,
		HealthLakeActions.GET_DATA_TRANSFORMATION_PROFILE,
		HealthLakeActions.GET_EXPORTED_FILE,
		HealthLakeActions.GET_HISTORY_BY_RESOURCE_ID,
		HealthLakeActions.INQUIRE_PRE_AUTH_CLAIM,
		HealthLakeActions.LOOKUP_CODE_SYSTEM_WITH_GET,
		HealthLakeActions.LOOKUP_CODE_SYSTEM_WITH_POST,
		HealthLakeActions.QUESTIONNAIRE_PACKAGE,
		HealthLakeActions.READ_RESOURCE,
		HealthLakeActions.SEARCH_EVERYTHING,
		HealthLakeActions.SEARCH_WITH_GET,
		HealthLakeActions.SEARCH_WITH_POST,
		HealthLakeActions.VALIDATE_RESOURCE,
		HealthLakeActions.VALIDATE_SOURCE,
		HealthLakeActions.VERSION_READ_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		HealthLakeActions.CANCEL_FHIR_EXPORT_JOB_WITH_DELETE,
		HealthLakeActions.CONFIRM_ATTRIBUTION_LIST,
		HealthLakeActions.CREATE_DATA_TRANSFORMATION_PROFILE,
		HealthLakeActions.CREATE_FHIR_DATASTORE,
		HealthLakeActions.CREATE_RESOURCE,
		HealthLakeActions.DELETE_DATA_TRANSFORMATION_PROFILE,
		HealthLakeActions.DELETE_FHIR_DATASTORE,
		HealthLakeActions.DELETE_RESOURCE,
		HealthLakeActions.GENERATE_DOCUMENT_WITH_GET,
		HealthLakeActions.GENERATE_DOCUMENT_WITH_POST,
		HealthLakeActions.MEMBER_ADD,
		HealthLakeActions.MEMBER_MATCH,
		HealthLakeActions.MEMBER_REMOVE,
		HealthLakeActions.PATCH_RESOURCE,
		HealthLakeActions.PROCESS_BUNDLE,
		HealthLakeActions.PUBLISH_DATA_TRANSFORMATION_PROFILE,
		HealthLakeActions.RETRIEVE_ATTRIBUTION_STATUS,
		HealthLakeActions.START_DATA_TRANSFORMATION_JOB,
		HealthLakeActions.START_FHIR_BULK_DELETE_JOB,
		HealthLakeActions.START_FHIR_BULK_MEMBER_MATCH_JOB,
		HealthLakeActions.START_FHIR_EXPORT_JOB,
		HealthLakeActions.START_FHIR_EXPORT_JOB_WITH_GET,
		HealthLakeActions.START_FHIR_EXPORT_JOB_WITH_POST,
		HealthLakeActions.START_FHIR_IMPORT_JOB,
		HealthLakeActions.SUBMIT_PRE_AUTH_CLAIM,
		HealthLakeActions.TRANSFORM_DATA,
		HealthLakeActions.UPDATE_DATA_TRANSFORMATION_PROFILE,
		HealthLakeActions.UPDATE_FHIR_DATASTORE,
		HealthLakeActions.UPDATE_PROFILE_WITH_AGENT,
		HealthLakeActions.UPDATE_RESOURCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		HealthLakeActions.LIST_DATA_TRANSFORMATION_JOBS,
		HealthLakeActions.LIST_DATA_TRANSFORMATION_PROFILE_VERSIONS,
		HealthLakeActions.LIST_DATA_TRANSFORMATION_PROFILES,
		HealthLakeActions.LIST_FHIR_DATASTORES,
		HealthLakeActions.LIST_FHIR_EXPORT_JOBS,
		HealthLakeActions.LIST_FHIR_IMPORT_JOBS,
		HealthLakeActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		HealthLakeActions.TAG_RESOURCE,
		HealthLakeActions.UNTAG_RESOURCE,
	];
}

const DataTransformationProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):healthlake:(?<region>[^:]*):(?<account>[^:]*):dataTransformationProfile/(?<profileId>[^:/?]+)$",
);
const DatastoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):healthlake:(?<region>[^:]*):(?<account>[^:]*):datastore/fhir/(?<datastoreId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for healthlake resources.
 */
export class HealthLakeResources {
	/**
	 * Builds an ARN for the dataTransformationProfile resource.
	 */
	static dataTransformationProfile(props: {
		/** The ProfileId component of the ARN. */
		readonly profileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDataTransformationProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profileId: string;
	} {
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
}

/**
 * API operation to required IAM actions mapping for healthlake.
 */
export class HealthLakeOperations {
	/** IAM actions required for the CreateDataTransformationProfile API call. */
	static readonly CREATE_DATA_TRANSFORMATION_PROFILE: string[] = [
		"healthlake:CreateDataTransformationProfile",
		"healthlake:TagResource",
	];
	/** IAM actions required for the CreateFHIRDatastore API call. */
	static readonly CREATE_FHIR_DATASTORE: string[] = [
		"healthlake:CreateFHIRDatastore",
		"healthlake:TagResource",
	];
	/** IAM actions required for the DeleteDataTransformationProfile API call. */
	static readonly DELETE_DATA_TRANSFORMATION_PROFILE: string[] = [
		"healthlake:DeleteDataTransformationProfile",
	];
	/** IAM actions required for the DeleteFHIRDatastore API call. */
	static readonly DELETE_FHIR_DATASTORE: string[] = [
		"healthlake:DeleteFHIRDatastore",
	];
	/** IAM actions required for the DescribeDataTransformationJob API call. */
	static readonly DESCRIBE_DATA_TRANSFORMATION_JOB: string[] = [
		"healthlake:DescribeDataTransformationJob",
	];
	/** IAM actions required for the DescribeFHIRDatastore API call. */
	static readonly DESCRIBE_FHIR_DATASTORE: string[] = [
		"healthlake:DescribeFHIRDatastore",
	];
	/** IAM actions required for the DescribeFHIRExportJob API call. */
	static readonly DESCRIBE_FHIR_EXPORT_JOB: string[] = [
		"healthlake:DescribeFHIRExportJob",
	];
	/** IAM actions required for the DescribeFHIRImportJob API call. */
	static readonly DESCRIBE_FHIR_IMPORT_JOB: string[] = [
		"healthlake:DescribeFHIRImportJob",
	];
	/** IAM actions required for the GetDataTransformationProfile API call. */
	static readonly GET_DATA_TRANSFORMATION_PROFILE: string[] = [
		"healthlake:GetDataTransformationProfile",
	];
	/** IAM actions required for the ListDataTransformationJobs API call. */
	static readonly LIST_DATA_TRANSFORMATION_JOBS: string[] = [
		"healthlake:ListDataTransformationJobs",
	];
	/** IAM actions required for the ListDataTransformationProfileVersions API call. */
	static readonly LIST_DATA_TRANSFORMATION_PROFILE_VERSIONS: string[] = [
		"healthlake:ListDataTransformationProfileVersions",
	];
	/** IAM actions required for the ListDataTransformationProfiles API call. */
	static readonly LIST_DATA_TRANSFORMATION_PROFILES: string[] = [
		"healthlake:ListDataTransformationProfiles",
	];
	/** IAM actions required for the ListFHIRDatastores API call. */
	static readonly LIST_FHIR_DATASTORES: string[] = [
		"healthlake:ListFHIRDatastores",
	];
	/** IAM actions required for the ListFHIRExportJobs API call. */
	static readonly LIST_FHIR_EXPORT_JOBS: string[] = [
		"healthlake:ListFHIRExportJobs",
	];
	/** IAM actions required for the ListFHIRImportJobs API call. */
	static readonly LIST_FHIR_IMPORT_JOBS: string[] = [
		"healthlake:ListFHIRImportJobs",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"healthlake:ListTagsForResource",
	];
	/** IAM actions required for the PublishDataTransformationProfile API call. */
	static readonly PUBLISH_DATA_TRANSFORMATION_PROFILE: string[] = [
		"healthlake:PublishDataTransformationProfile",
	];
	/** IAM actions required for the StartDataTransformationJob API call. */
	static readonly START_DATA_TRANSFORMATION_JOB: string[] = [
		"iam:PassRole",
		"healthlake:StartDataTransformationJob",
	];
	/** IAM actions required for the StartFHIRExportJob API call. */
	static readonly START_FHIR_EXPORT_JOB: string[] = [
		"iam:PassRole",
		"healthlake:StartFHIRExportJob",
	];
	/** IAM actions required for the StartFHIRImportJob API call. */
	static readonly START_FHIR_IMPORT_JOB: string[] = [
		"iam:PassRole",
		"healthlake:StartFHIRImportJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["healthlake:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["healthlake:UntagResource"];
	/** IAM actions required for the UpdateDataTransformationProfile API call. */
	static readonly UPDATE_DATA_TRANSFORMATION_PROFILE: string[] = [
		"healthlake:UpdateDataTransformationProfile",
	];
	/** IAM actions required for the UpdateFHIRDatastore API call. */
	static readonly UPDATE_FHIR_DATASTORE: string[] = [
		"healthlake:UpdateFHIRDatastore",
	];
	/** IAM actions required for the UpdateProfileWithAgent API call. */
	static readonly UPDATE_PROFILE_WITH_AGENT: string[] = [
		"healthlake:UpdateProfileWithAgent",
	];
}

/**
 * Condition key constants and builders for healthlake.
 */
export class HealthLakeConditions {
	/** Condition keys applicable to the CreateDataTransformationProfile action. */
	static readonly CREATE_DATA_TRANSFORMATION_PROFILE_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:ResourceTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateFHIRDatastore action. */
	static readonly CREATE_FHIR_DATASTORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
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
