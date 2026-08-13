// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/profile.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the profile service.
 */
export class ProfileActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "profile";

	/** [Write] profile:AddProfileKey */
	static readonly AddProfileKey = "profile:AddProfileKey";
	/** [Read] profile:BatchGetCalculatedAttributeForProfile */
	static readonly BatchGetCalculatedAttributeForProfile =
		"profile:BatchGetCalculatedAttributeForProfile";
	/** [Read] profile:BatchGetProfile */
	static readonly BatchGetProfile = "profile:BatchGetProfile";
	/** [Write] profile:CreateCalculatedAttributeDefinition */
	static readonly CreateCalculatedAttributeDefinition =
		"profile:CreateCalculatedAttributeDefinition";
	/** [Write] profile:CreateDomain */
	static readonly CreateDomain = "profile:CreateDomain";
	/** [Write] profile:CreateDomainLayout */
	static readonly CreateDomainLayout = "profile:CreateDomainLayout";
	/** [Write] profile:CreateEventStream */
	static readonly CreateEventStream = "profile:CreateEventStream";
	/** [Write] profile:CreateEventTrigger */
	static readonly CreateEventTrigger = "profile:CreateEventTrigger";
	/** [Write] profile:CreateIntegrationWorkflow */
	static readonly CreateIntegrationWorkflow =
		"profile:CreateIntegrationWorkflow";
	/** [Write] profile:CreateProfile */
	static readonly CreateProfile = "profile:CreateProfile";
	/** [Write] profile:CreateRecommender */
	static readonly CreateRecommender = "profile:CreateRecommender";
	/** [Write] profile:CreateRecommenderFilter */
	static readonly CreateRecommenderFilter = "profile:CreateRecommenderFilter";
	/** [Write] profile:CreateRecommenderSchema */
	static readonly CreateRecommenderSchema = "profile:CreateRecommenderSchema";
	/** [Write] profile:CreateSegmentDefinition */
	static readonly CreateSegmentDefinition = "profile:CreateSegmentDefinition";
	/** [Write] profile:CreateSegmentEstimate */
	static readonly CreateSegmentEstimate = "profile:CreateSegmentEstimate";
	/** [Write] profile:CreateSegmentSnapshot */
	static readonly CreateSegmentSnapshot = "profile:CreateSegmentSnapshot";
	/** [Write] profile:CreateSnapshot */
	static readonly CreateSnapshot = "profile:CreateSnapshot";
	/** [Write] profile:CreateUploadJob */
	static readonly CreateUploadJob = "profile:CreateUploadJob";
	/** [Write] profile:DeleteCalculatedAttributeDefinition */
	static readonly DeleteCalculatedAttributeDefinition =
		"profile:DeleteCalculatedAttributeDefinition";
	/** [Write] profile:DeleteDomain */
	static readonly DeleteDomain = "profile:DeleteDomain";
	/** [Write] profile:DeleteDomainLayout */
	static readonly DeleteDomainLayout = "profile:DeleteDomainLayout";
	/** [Write] profile:DeleteDomainObjectType */
	static readonly DeleteDomainObjectType = "profile:DeleteDomainObjectType";
	/** [Write] profile:DeleteEventStream */
	static readonly DeleteEventStream = "profile:DeleteEventStream";
	/** [Write] profile:DeleteEventTrigger */
	static readonly DeleteEventTrigger = "profile:DeleteEventTrigger";
	/** [Write] profile:DeleteIntegration */
	static readonly DeleteIntegration = "profile:DeleteIntegration";
	/** [Write] profile:DeleteProfile */
	static readonly DeleteProfile = "profile:DeleteProfile";
	/** [Write] profile:DeleteProfileKey */
	static readonly DeleteProfileKey = "profile:DeleteProfileKey";
	/** [Write] profile:DeleteProfileObject */
	static readonly DeleteProfileObject = "profile:DeleteProfileObject";
	/** [Write] profile:DeleteProfileObjectType */
	static readonly DeleteProfileObjectType = "profile:DeleteProfileObjectType";
	/** [Write] profile:DeleteRecommender */
	static readonly DeleteRecommender = "profile:DeleteRecommender";
	/** [Write] profile:DeleteRecommenderFilter */
	static readonly DeleteRecommenderFilter = "profile:DeleteRecommenderFilter";
	/** [Write] profile:DeleteRecommenderSchema */
	static readonly DeleteRecommenderSchema = "profile:DeleteRecommenderSchema";
	/** [Write] profile:DeleteSegmentDefinition */
	static readonly DeleteSegmentDefinition = "profile:DeleteSegmentDefinition";
	/** [Write] profile:DeleteWorkflow */
	static readonly DeleteWorkflow = "profile:DeleteWorkflow";
	/** [Read] profile:DetectProfileObjectType */
	static readonly DetectProfileObjectType = "profile:DetectProfileObjectType";
	/** [Read] profile:GetAutoMergingPreview */
	static readonly actionGetAutoMergingPreview = "profile:GetAutoMergingPreview";
	/** [Read] profile:GetCalculatedAttributeDefinition */
	static readonly actionGetCalculatedAttributeDefinition =
		"profile:GetCalculatedAttributeDefinition";
	/** [Read] profile:GetCalculatedAttributeForProfile */
	static readonly actionGetCalculatedAttributeForProfile =
		"profile:GetCalculatedAttributeForProfile";
	/** [Read] profile:GetDomain */
	static readonly actionGetDomain = "profile:GetDomain";
	/** [Read] profile:GetDomainLayout */
	static readonly actionGetDomainLayout = "profile:GetDomainLayout";
	/** [Read] profile:GetDomainObjectType */
	static readonly actionGetDomainObjectType = "profile:GetDomainObjectType";
	/** [Read] profile:GetEventStream */
	static readonly actionGetEventStream = "profile:GetEventStream";
	/** [Read] profile:GetEventTrigger */
	static readonly actionGetEventTrigger = "profile:GetEventTrigger";
	/** [Read] profile:GetIdentityResolutionJob */
	static readonly actionGetIdentityResolutionJob =
		"profile:GetIdentityResolutionJob";
	/** [Read] profile:GetIntegration */
	static readonly actionGetIntegration = "profile:GetIntegration";
	/** [List] profile:GetMatches */
	static readonly actionGetMatches = "profile:GetMatches";
	/** [Read] profile:GetObjectTypeAttributeStatistics */
	static readonly actionGetObjectTypeAttributeStatistics =
		"profile:GetObjectTypeAttributeStatistics";
	/** [Read] profile:GetProfileHistoryRecord */
	static readonly actionGetProfileHistoryRecord =
		"profile:GetProfileHistoryRecord";
	/** [Read] profile:GetProfileInsights */
	static readonly actionGetProfileInsights = "profile:GetProfileInsights";
	/** [Read] profile:GetProfileObjectType */
	static readonly actionGetProfileObjectType = "profile:GetProfileObjectType";
	/** [Read] profile:GetProfileObjectTypeTemplate */
	static readonly actionGetProfileObjectTypeTemplate =
		"profile:GetProfileObjectTypeTemplate";
	/** [Read] profile:GetProfileRecommendations */
	static readonly actionGetProfileRecommendations =
		"profile:GetProfileRecommendations";
	/** [Read] profile:GetRecommender */
	static readonly actionGetRecommender = "profile:GetRecommender";
	/** [Read] profile:GetRecommenderFilter */
	static readonly actionGetRecommenderFilter = "profile:GetRecommenderFilter";
	/** [Read] profile:GetRecommenderSchema */
	static readonly actionGetRecommenderSchema = "profile:GetRecommenderSchema";
	/** [Read] profile:GetSegmentDefinition */
	static readonly actionGetSegmentDefinition = "profile:GetSegmentDefinition";
	/** [Read] profile:GetSegmentEstimate */
	static readonly actionGetSegmentEstimate = "profile:GetSegmentEstimate";
	/** [Read] profile:GetSegmentMembership */
	static readonly actionGetSegmentMembership = "profile:GetSegmentMembership";
	/** [Read] profile:GetSegmentSnapshot */
	static readonly actionGetSegmentSnapshot = "profile:GetSegmentSnapshot";
	/** [List] profile:GetSimilarProfiles */
	static readonly actionGetSimilarProfiles = "profile:GetSimilarProfiles";
	/** [Read] profile:GetSnapshot */
	static readonly actionGetSnapshot = "profile:GetSnapshot";
	/** [Read] profile:GetUploadJob */
	static readonly actionGetUploadJob = "profile:GetUploadJob";
	/** [Read] profile:GetUploadJobPath */
	static readonly actionGetUploadJobPath = "profile:GetUploadJobPath";
	/** [Read] profile:GetWorkflow */
	static readonly actionGetWorkflow = "profile:GetWorkflow";
	/** [Read] profile:GetWorkflowSteps */
	static readonly actionGetWorkflowSteps = "profile:GetWorkflowSteps";
	/** [List] profile:ListAccountIntegrations */
	static readonly ListAccountIntegrations = "profile:ListAccountIntegrations";
	/** [List] profile:ListCalculatedAttributeDefinitions */
	static readonly ListCalculatedAttributeDefinitions =
		"profile:ListCalculatedAttributeDefinitions";
	/** [List] profile:ListCalculatedAttributesForProfile */
	static readonly ListCalculatedAttributesForProfile =
		"profile:ListCalculatedAttributesForProfile";
	/** [List] profile:ListDomainLayouts */
	static readonly ListDomainLayouts = "profile:ListDomainLayouts";
	/** [List] profile:ListDomainObjectTypes */
	static readonly ListDomainObjectTypes = "profile:ListDomainObjectTypes";
	/** [List] profile:ListDomainObjects */
	static readonly ListDomainObjects = "profile:ListDomainObjects";
	/** [List] profile:ListDomains */
	static readonly ListDomains = "profile:ListDomains";
	/** [List] profile:ListEventStreams */
	static readonly ListEventStreams = "profile:ListEventStreams";
	/** [List] profile:ListEventTriggers */
	static readonly ListEventTriggers = "profile:ListEventTriggers";
	/** [List] profile:ListIdentityResolutionJobs */
	static readonly ListIdentityResolutionJobs =
		"profile:ListIdentityResolutionJobs";
	/** [List] profile:ListIntegrations */
	static readonly ListIntegrations = "profile:ListIntegrations";
	/** [List] profile:ListObjectTypeAttributeValues */
	static readonly ListObjectTypeAttributeValues =
		"profile:ListObjectTypeAttributeValues";
	/** [List] profile:ListObjectTypeAttributes */
	static readonly ListObjectTypeAttributes = "profile:ListObjectTypeAttributes";
	/** [List] profile:ListProfileAttributeValues */
	static readonly ListProfileAttributeValues =
		"profile:ListProfileAttributeValues";
	/** [List] profile:ListProfileHistoryRecords */
	static readonly ListProfileHistoryRecords =
		"profile:ListProfileHistoryRecords";
	/** [List] profile:ListProfileObjectTypeTemplates */
	static readonly ListProfileObjectTypeTemplates =
		"profile:ListProfileObjectTypeTemplates";
	/** [List] profile:ListProfileObjectTypes */
	static readonly ListProfileObjectTypes = "profile:ListProfileObjectTypes";
	/** [List] profile:ListProfileObjects */
	static readonly ListProfileObjects = "profile:ListProfileObjects";
	/** [List] profile:ListRecommenderFilters */
	static readonly ListRecommenderFilters = "profile:ListRecommenderFilters";
	/** [List] profile:ListRecommenderRecipes */
	static readonly ListRecommenderRecipes = "profile:ListRecommenderRecipes";
	/** [List] profile:ListRecommenderSchemas */
	static readonly ListRecommenderSchemas = "profile:ListRecommenderSchemas";
	/** [List] profile:ListRecommenders */
	static readonly ListRecommenders = "profile:ListRecommenders";
	/** [List] profile:ListRuleBasedMatches */
	static readonly ListRuleBasedMatches = "profile:ListRuleBasedMatches";
	/** [List] profile:ListSegmentDefinitions */
	static readonly ListSegmentDefinitions = "profile:ListSegmentDefinitions";
	/** [Read] profile:ListTagsForResource */
	static readonly ListTagsForResource = "profile:ListTagsForResource";
	/** [List] profile:ListUploadJobs */
	static readonly ListUploadJobs = "profile:ListUploadJobs";
	/** [List] profile:ListWorkflows */
	static readonly ListWorkflows = "profile:ListWorkflows";
	/** [Write] profile:MergeProfiles */
	static readonly MergeProfiles = "profile:MergeProfiles";
	/** [Write] profile:PutDomainObjectType */
	static readonly PutDomainObjectType = "profile:PutDomainObjectType";
	/** [Write] profile:PutIntegration */
	static readonly PutIntegration = "profile:PutIntegration";
	/** [Write] profile:PutProfileObject */
	static readonly PutProfileObject = "profile:PutProfileObject";
	/** [Write] profile:PutProfileObjectType */
	static readonly PutProfileObjectType = "profile:PutProfileObjectType";
	/** [Read] profile:SearchProfiles */
	static readonly SearchProfiles = "profile:SearchProfiles";
	/** [Write] profile:StartRecommender */
	static readonly StartRecommender = "profile:StartRecommender";
	/** [Write] profile:StartUploadJob */
	static readonly StartUploadJob = "profile:StartUploadJob";
	/** [Write] profile:StopRecommender */
	static readonly StopRecommender = "profile:StopRecommender";
	/** [Write] profile:StopUploadJob */
	static readonly StopUploadJob = "profile:StopUploadJob";
	/** [Tagging] profile:TagResource */
	static readonly TagResource = "profile:TagResource";
	/** [Tagging] profile:UntagResource */
	static readonly UntagResource = "profile:UntagResource";
	/** [Write] profile:UpdateCalculatedAttributeDefinition */
	static readonly UpdateCalculatedAttributeDefinition =
		"profile:UpdateCalculatedAttributeDefinition";
	/** [Write] profile:UpdateDomain */
	static readonly UpdateDomain = "profile:UpdateDomain";
	/** [Write] profile:UpdateDomainLayout */
	static readonly UpdateDomainLayout = "profile:UpdateDomainLayout";
	/** [Write] profile:UpdateEventTrigger */
	static readonly UpdateEventTrigger = "profile:UpdateEventTrigger";
	/** [Write] profile:UpdateProfile */
	static readonly UpdateProfile = "profile:UpdateProfile";
	/** [Write] profile:UpdateRecommender */
	static readonly UpdateRecommender = "profile:UpdateRecommender";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ProfileActions.BatchGetCalculatedAttributeForProfile,
		ProfileActions.BatchGetProfile,
		ProfileActions.DetectProfileObjectType,
		ProfileActions.actionGetAutoMergingPreview,
		ProfileActions.actionGetCalculatedAttributeDefinition,
		ProfileActions.actionGetCalculatedAttributeForProfile,
		ProfileActions.actionGetDomain,
		ProfileActions.actionGetDomainLayout,
		ProfileActions.actionGetDomainObjectType,
		ProfileActions.actionGetEventStream,
		ProfileActions.actionGetEventTrigger,
		ProfileActions.actionGetIdentityResolutionJob,
		ProfileActions.actionGetIntegration,
		ProfileActions.actionGetObjectTypeAttributeStatistics,
		ProfileActions.actionGetProfileHistoryRecord,
		ProfileActions.actionGetProfileInsights,
		ProfileActions.actionGetProfileObjectType,
		ProfileActions.actionGetProfileObjectTypeTemplate,
		ProfileActions.actionGetProfileRecommendations,
		ProfileActions.actionGetRecommender,
		ProfileActions.actionGetRecommenderFilter,
		ProfileActions.actionGetRecommenderSchema,
		ProfileActions.actionGetSegmentDefinition,
		ProfileActions.actionGetSegmentEstimate,
		ProfileActions.actionGetSegmentMembership,
		ProfileActions.actionGetSegmentSnapshot,
		ProfileActions.actionGetSnapshot,
		ProfileActions.actionGetUploadJob,
		ProfileActions.actionGetUploadJobPath,
		ProfileActions.actionGetWorkflow,
		ProfileActions.actionGetWorkflowSteps,
		ProfileActions.ListTagsForResource,
		ProfileActions.SearchProfiles,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ProfileActions.AddProfileKey,
		ProfileActions.CreateCalculatedAttributeDefinition,
		ProfileActions.CreateDomain,
		ProfileActions.CreateDomainLayout,
		ProfileActions.CreateEventStream,
		ProfileActions.CreateEventTrigger,
		ProfileActions.CreateIntegrationWorkflow,
		ProfileActions.CreateProfile,
		ProfileActions.CreateRecommender,
		ProfileActions.CreateRecommenderFilter,
		ProfileActions.CreateRecommenderSchema,
		ProfileActions.CreateSegmentDefinition,
		ProfileActions.CreateSegmentEstimate,
		ProfileActions.CreateSegmentSnapshot,
		ProfileActions.CreateSnapshot,
		ProfileActions.CreateUploadJob,
		ProfileActions.DeleteCalculatedAttributeDefinition,
		ProfileActions.DeleteDomain,
		ProfileActions.DeleteDomainLayout,
		ProfileActions.DeleteDomainObjectType,
		ProfileActions.DeleteEventStream,
		ProfileActions.DeleteEventTrigger,
		ProfileActions.DeleteIntegration,
		ProfileActions.DeleteProfile,
		ProfileActions.DeleteProfileKey,
		ProfileActions.DeleteProfileObject,
		ProfileActions.DeleteProfileObjectType,
		ProfileActions.DeleteRecommender,
		ProfileActions.DeleteRecommenderFilter,
		ProfileActions.DeleteRecommenderSchema,
		ProfileActions.DeleteSegmentDefinition,
		ProfileActions.DeleteWorkflow,
		ProfileActions.MergeProfiles,
		ProfileActions.PutDomainObjectType,
		ProfileActions.PutIntegration,
		ProfileActions.PutProfileObject,
		ProfileActions.PutProfileObjectType,
		ProfileActions.StartRecommender,
		ProfileActions.StartUploadJob,
		ProfileActions.StopRecommender,
		ProfileActions.StopUploadJob,
		ProfileActions.UpdateCalculatedAttributeDefinition,
		ProfileActions.UpdateDomain,
		ProfileActions.UpdateDomainLayout,
		ProfileActions.UpdateEventTrigger,
		ProfileActions.UpdateProfile,
		ProfileActions.UpdateRecommender,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ProfileActions.actionGetMatches,
		ProfileActions.actionGetSimilarProfiles,
		ProfileActions.ListAccountIntegrations,
		ProfileActions.ListCalculatedAttributeDefinitions,
		ProfileActions.ListCalculatedAttributesForProfile,
		ProfileActions.ListDomainLayouts,
		ProfileActions.ListDomainObjectTypes,
		ProfileActions.ListDomainObjects,
		ProfileActions.ListDomains,
		ProfileActions.ListEventStreams,
		ProfileActions.ListEventTriggers,
		ProfileActions.ListIdentityResolutionJobs,
		ProfileActions.ListIntegrations,
		ProfileActions.ListObjectTypeAttributeValues,
		ProfileActions.ListObjectTypeAttributes,
		ProfileActions.ListProfileAttributeValues,
		ProfileActions.ListProfileHistoryRecords,
		ProfileActions.ListProfileObjectTypeTemplates,
		ProfileActions.ListProfileObjectTypes,
		ProfileActions.ListProfileObjects,
		ProfileActions.ListRecommenderFilters,
		ProfileActions.ListRecommenderRecipes,
		ProfileActions.ListRecommenderSchemas,
		ProfileActions.ListRecommenders,
		ProfileActions.ListRuleBasedMatches,
		ProfileActions.ListSegmentDefinitions,
		ProfileActions.ListUploadJobs,
		ProfileActions.ListWorkflows,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ProfileActions.TagResource,
		ProfileActions.UntagResource,
	];
}

/**
 * Properties for building a calculated-attributes ARN.
 */
export interface ProfileCalculatedAttributesArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The CalculatedAttributeName component of the ARN. */
	readonly calculatedAttributeName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a calculated-attributes ARN.
 */
export interface ProfileCalculatedAttributesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The CalculatedAttributeName component. */
	readonly calculatedAttributeName: string;
}

/**
 * Properties for building a domain-object-types ARN.
 */
export interface ProfileDomainObjectTypesArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The ObjectTypeName component of the ARN. */
	readonly objectTypeName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domain-object-types ARN.
 */
export interface ProfileDomainObjectTypesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The ObjectTypeName component. */
	readonly objectTypeName: string;
}

/**
 * Properties for building a domains ARN.
 */
export interface ProfileDomainsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domains ARN.
 */
export interface ProfileDomainsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

/**
 * Properties for building a event-streams ARN.
 */
export interface ProfileEventStreamsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The EventStreamName component of the ARN. */
	readonly eventStreamName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-streams ARN.
 */
export interface ProfileEventStreamsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The EventStreamName component. */
	readonly eventStreamName: string;
}

/**
 * Properties for building a event-triggers ARN.
 */
export interface ProfileEventTriggersArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The EventTriggerName component of the ARN. */
	readonly eventTriggerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-triggers ARN.
 */
export interface ProfileEventTriggersArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The EventTriggerName component. */
	readonly eventTriggerName: string;
}

/**
 * Properties for building a integrations ARN.
 */
export interface ProfileIntegrationsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The Uri component of the ARN. */
	readonly uri: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a integrations ARN.
 */
export interface ProfileIntegrationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The Uri component. */
	readonly uri: string;
}

/**
 * Properties for building a layouts ARN.
 */
export interface ProfileLayoutsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The LayoutDefinitionName component of the ARN. */
	readonly layoutDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a layouts ARN.
 */
export interface ProfileLayoutsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The LayoutDefinitionName component. */
	readonly layoutDefinitionName: string;
}

/**
 * Properties for building a object-types ARN.
 */
export interface ProfileObjectTypesArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The ObjectTypeName component of the ARN. */
	readonly objectTypeName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a object-types ARN.
 */
export interface ProfileObjectTypesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The ObjectTypeName component. */
	readonly objectTypeName: string;
}

/**
 * Properties for building a recommender-filters ARN.
 */
export interface ProfileRecommenderFiltersArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The RecommenderFilterName component of the ARN. */
	readonly recommenderFilterName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recommender-filters ARN.
 */
export interface ProfileRecommenderFiltersArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The RecommenderFilterName component. */
	readonly recommenderFilterName: string;
}

/**
 * Properties for building a recommender-schemas ARN.
 */
export interface ProfileRecommenderSchemasArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The RecommenderSchemaName component of the ARN. */
	readonly recommenderSchemaName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recommender-schemas ARN.
 */
export interface ProfileRecommenderSchemasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The RecommenderSchemaName component. */
	readonly recommenderSchemaName: string;
}

/**
 * Properties for building a recommenders ARN.
 */
export interface ProfileRecommendersArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The RecommenderTypeName component of the ARN. */
	readonly recommenderTypeName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recommenders ARN.
 */
export interface ProfileRecommendersArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The RecommenderTypeName component. */
	readonly recommenderTypeName: string;
}

/**
 * Properties for building a segment-definitions ARN.
 */
export interface ProfileSegmentDefinitionsArnProps {
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** The SegmentDefinitionName component of the ARN. */
	readonly segmentDefinitionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a segment-definitions ARN.
 */
export interface ProfileSegmentDefinitionsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
	/** The SegmentDefinitionName component. */
	readonly segmentDefinitionName: string;
}

const CalculatedAttributesArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/calculated-attributes\/(?<calculatedAttributeName>[^:/?]+)$/;
const DomainObjectTypesArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/domain-object-types\/(?<objectTypeName>[^:/?]+)$/;
const DomainsArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)$/;
const EventStreamsArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/event-streams\/(?<eventStreamName>[^:/?]+)$/;
const EventTriggersArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/event-triggers\/(?<eventTriggerName>[^:/?]+)$/;
const IntegrationsArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/integrations\/(?<uri>[^:/?]+)$/;
const LayoutsArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/layouts\/(?<layoutDefinitionName>[^:/?]+)$/;
const ObjectTypesArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/object-types\/(?<objectTypeName>[^:/?]+)$/;
const RecommenderFiltersArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/recommender-filters\/(?<recommenderFilterName>[^:/?]+)$/;
const RecommenderSchemasArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/recommender-schemas\/(?<recommenderSchemaName>[^:/?]+)$/;
const RecommendersArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/recommenders\/(?<recommenderTypeName>[^:/?]+)$/;
const SegmentDefinitionsArnRegex =
	/^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains\/(?<domainName>[^:/?]+)\/segment-definitions\/(?<segmentDefinitionName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for profile resources.
 */
export class ProfileResources {
	/**
	 * Builds an ARN for the calculated-attributes resource.
	 */
	static calculatedAttributes(
		props: ProfileCalculatedAttributesArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/calculated-attributes/${props.calculatedAttributeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the calculated-attributes resource.
	 */
	static isValidCalculatedAttributesArn(arn: string): boolean {
		return CalculatedAttributesArnRegex.test(arn);
	}

	/**
	 * Parses a calculated-attributes ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCalculatedAttributesArn(
		arn: string,
	): ProfileCalculatedAttributesArnComponents {
		const match = CalculatedAttributesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid calculated-attributes ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			calculatedAttributeName: match.groups!.calculatedAttributeName,
		};
	}

	/**
	 * Builds an ARN for the domain-object-types resource.
	 */
	static domainObjectTypes(props: ProfileDomainObjectTypesArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/domain-object-types/${props.objectTypeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain-object-types resource.
	 */
	static isValidDomainObjectTypesArn(arn: string): boolean {
		return DomainObjectTypesArnRegex.test(arn);
	}

	/**
	 * Parses a domain-object-types ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainObjectTypesArn(
		arn: string,
	): ProfileDomainObjectTypesArnComponents {
		const match = DomainObjectTypesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain-object-types ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			objectTypeName: match.groups!.objectTypeName,
		};
	}

	/**
	 * Builds an ARN for the domains resource.
	 */
	static domains(props: ProfileDomainsArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domains resource.
	 */
	static isValidDomainsArn(arn: string): boolean {
		return DomainsArnRegex.test(arn);
	}

	/**
	 * Parses a domains ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainsArn(arn: string): ProfileDomainsArnComponents {
		const match = DomainsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domains ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the event-streams resource.
	 */
	static eventStreams(props: ProfileEventStreamsArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/event-streams/${props.eventStreamName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-streams resource.
	 */
	static isValidEventStreamsArn(arn: string): boolean {
		return EventStreamsArnRegex.test(arn);
	}

	/**
	 * Parses a event-streams ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventStreamsArn(arn: string): ProfileEventStreamsArnComponents {
		const match = EventStreamsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-streams ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			eventStreamName: match.groups!.eventStreamName,
		};
	}

	/**
	 * Builds an ARN for the event-triggers resource.
	 */
	static eventTriggers(props: ProfileEventTriggersArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/event-triggers/${props.eventTriggerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-triggers resource.
	 */
	static isValidEventTriggersArn(arn: string): boolean {
		return EventTriggersArnRegex.test(arn);
	}

	/**
	 * Parses a event-triggers ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventTriggersArn(arn: string): ProfileEventTriggersArnComponents {
		const match = EventTriggersArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-triggers ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			eventTriggerName: match.groups!.eventTriggerName,
		};
	}

	/**
	 * Builds an ARN for the integrations resource.
	 */
	static integrations(props: ProfileIntegrationsArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/integrations/${props.uri}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the integrations resource.
	 */
	static isValidIntegrationsArn(arn: string): boolean {
		return IntegrationsArnRegex.test(arn);
	}

	/**
	 * Parses a integrations ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationsArn(arn: string): ProfileIntegrationsArnComponents {
		const match = IntegrationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid integrations ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			uri: match.groups!.uri,
		};
	}

	/**
	 * Builds an ARN for the layouts resource.
	 */
	static layouts(props: ProfileLayoutsArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/layouts/${props.layoutDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the layouts resource.
	 */
	static isValidLayoutsArn(arn: string): boolean {
		return LayoutsArnRegex.test(arn);
	}

	/**
	 * Parses a layouts ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLayoutsArn(arn: string): ProfileLayoutsArnComponents {
		const match = LayoutsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid layouts ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			layoutDefinitionName: match.groups!.layoutDefinitionName,
		};
	}

	/**
	 * Builds an ARN for the object-types resource.
	 */
	static objectTypes(props: ProfileObjectTypesArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/object-types/${props.objectTypeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the object-types resource.
	 */
	static isValidObjectTypesArn(arn: string): boolean {
		return ObjectTypesArnRegex.test(arn);
	}

	/**
	 * Parses a object-types ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseObjectTypesArn(arn: string): ProfileObjectTypesArnComponents {
		const match = ObjectTypesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid object-types ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			objectTypeName: match.groups!.objectTypeName,
		};
	}

	/**
	 * Builds an ARN for the recommender-filters resource.
	 */
	static recommenderFilters(props: ProfileRecommenderFiltersArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/recommender-filters/${props.recommenderFilterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommender-filters resource.
	 */
	static isValidRecommenderFiltersArn(arn: string): boolean {
		return RecommenderFiltersArnRegex.test(arn);
	}

	/**
	 * Parses a recommender-filters ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommenderFiltersArn(
		arn: string,
	): ProfileRecommenderFiltersArnComponents {
		const match = RecommenderFiltersArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommender-filters ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			recommenderFilterName: match.groups!.recommenderFilterName,
		};
	}

	/**
	 * Builds an ARN for the recommender-schemas resource.
	 */
	static recommenderSchemas(props: ProfileRecommenderSchemasArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/recommender-schemas/${props.recommenderSchemaName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommender-schemas resource.
	 */
	static isValidRecommenderSchemasArn(arn: string): boolean {
		return RecommenderSchemasArnRegex.test(arn);
	}

	/**
	 * Parses a recommender-schemas ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommenderSchemasArn(
		arn: string,
	): ProfileRecommenderSchemasArnComponents {
		const match = RecommenderSchemasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommender-schemas ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			recommenderSchemaName: match.groups!.recommenderSchemaName,
		};
	}

	/**
	 * Builds an ARN for the recommenders resource.
	 */
	static recommenders(props: ProfileRecommendersArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/recommenders/${props.recommenderTypeName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recommenders resource.
	 */
	static isValidRecommendersArn(arn: string): boolean {
		return RecommendersArnRegex.test(arn);
	}

	/**
	 * Parses a recommenders ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecommendersArn(arn: string): ProfileRecommendersArnComponents {
		const match = RecommendersArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recommenders ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			recommenderTypeName: match.groups!.recommenderTypeName,
		};
	}

	/**
	 * Builds an ARN for the segment-definitions resource.
	 */
	static segmentDefinitions(props: ProfileSegmentDefinitionsArnProps): string {
		return `arn:${props.partition ?? "aws"}:profile:${props.region ?? "*"}:${props.account ?? "*"}:domains/${props.domainName}/segment-definitions/${props.segmentDefinitionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the segment-definitions resource.
	 */
	static isValidSegmentDefinitionsArn(arn: string): boolean {
		return SegmentDefinitionsArnRegex.test(arn);
	}

	/**
	 * Parses a segment-definitions ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSegmentDefinitionsArn(
		arn: string,
	): ProfileSegmentDefinitionsArnComponents {
		const match = SegmentDefinitionsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid segment-definitions ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
			segmentDefinitionName: match.groups!.segmentDefinitionName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for profile.
 */
export class ProfileOperations {
	/** IAM actions required for the AddProfileKey API call. */
	static readonly AddProfileKey: string[] = ["profile:AddProfileKey"];
	/** IAM actions required for the BatchGetCalculatedAttributeForProfile API call. */
	static readonly BatchGetCalculatedAttributeForProfile: string[] = [
		"profile:BatchGetCalculatedAttributeForProfile",
	];
	/** IAM actions required for the BatchGetProfile API call. */
	static readonly BatchGetProfile: string[] = ["profile:BatchGetProfile"];
	/** IAM actions required for the BatchPutProfileObject API call. */
	static readonly BatchPutProfileObject: string[] = [];
	/** IAM actions required for the CreateCalculatedAttributeDefinition API call. */
	static readonly CreateCalculatedAttributeDefinition: string[] = [
		"profile:CreateCalculatedAttributeDefinition",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [
		"profile:CreateDomain",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateDomainLayout API call. */
	static readonly CreateDomainLayout: string[] = [
		"profile:CreateDomainLayout",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateEventStream API call. */
	static readonly CreateEventStream: string[] = [
		"profile:CreateEventStream",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateEventTrigger API call. */
	static readonly CreateEventTrigger: string[] = [
		"profile:CreateEventTrigger",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateIntegrationWorkflow API call. */
	static readonly CreateIntegrationWorkflow: string[] = [
		"profile:CreateIntegrationWorkflow",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CreateProfile: string[] = ["profile:CreateProfile"];
	/** IAM actions required for the CreateRecommender API call. */
	static readonly CreateRecommender: string[] = ["profile:CreateRecommender"];
	/** IAM actions required for the CreateRecommenderFilter API call. */
	static readonly CreateRecommenderFilter: string[] = [
		"profile:CreateRecommenderFilter",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateRecommenderSchema API call. */
	static readonly CreateRecommenderSchema: string[] = [
		"profile:CreateRecommenderSchema",
	];
	/** IAM actions required for the CreateSegmentDefinition API call. */
	static readonly CreateSegmentDefinition: string[] = [
		"profile:CreateSegmentDefinition",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateSegmentEstimate API call. */
	static readonly CreateSegmentEstimate: string[] = [
		"profile:CreateSegmentEstimate",
	];
	/** IAM actions required for the CreateSegmentSnapshot API call. */
	static readonly CreateSegmentSnapshot: string[] = [
		"profile:CreateSegmentSnapshot",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateUploadJob API call. */
	static readonly CreateUploadJob: string[] = ["profile:CreateUploadJob"];
	/** IAM actions required for the DeleteCalculatedAttributeDefinition API call. */
	static readonly DeleteCalculatedAttributeDefinition: string[] = [
		"profile:DeleteCalculatedAttributeDefinition",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["profile:DeleteDomain"];
	/** IAM actions required for the DeleteDomainLayout API call. */
	static readonly DeleteDomainLayout: string[] = ["profile:DeleteDomainLayout"];
	/** IAM actions required for the DeleteDomainObjectType API call. */
	static readonly DeleteDomainObjectType: string[] = [
		"profile:DeleteDomainObjectType",
	];
	/** IAM actions required for the DeleteEventStream API call. */
	static readonly DeleteEventStream: string[] = ["profile:DeleteEventStream"];
	/** IAM actions required for the DeleteEventTrigger API call. */
	static readonly DeleteEventTrigger: string[] = ["profile:DeleteEventTrigger"];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = ["profile:DeleteIntegration"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DeleteProfile: string[] = ["profile:DeleteProfile"];
	/** IAM actions required for the DeleteProfileKey API call. */
	static readonly DeleteProfileKey: string[] = ["profile:DeleteProfileKey"];
	/** IAM actions required for the DeleteProfileObject API call. */
	static readonly DeleteProfileObject: string[] = [
		"profile:DeleteProfileObject",
	];
	/** IAM actions required for the DeleteProfileObjectType API call. */
	static readonly DeleteProfileObjectType: string[] = [
		"profile:DeleteProfileObjectType",
	];
	/** IAM actions required for the DeleteRecommender API call. */
	static readonly DeleteRecommender: string[] = ["profile:DeleteRecommender"];
	/** IAM actions required for the DeleteRecommenderFilter API call. */
	static readonly DeleteRecommenderFilter: string[] = [
		"profile:DeleteRecommenderFilter",
	];
	/** IAM actions required for the DeleteRecommenderSchema API call. */
	static readonly DeleteRecommenderSchema: string[] = [
		"profile:DeleteRecommenderSchema",
	];
	/** IAM actions required for the DeleteSegmentDefinition API call. */
	static readonly DeleteSegmentDefinition: string[] = [
		"profile:DeleteSegmentDefinition",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DeleteWorkflow: string[] = ["profile:DeleteWorkflow"];
	/** IAM actions required for the DetectProfileObjectType API call. */
	static readonly DetectProfileObjectType: string[] = [
		"profile:DetectProfileObjectType",
	];
	/** IAM actions required for the GetAutoMergingPreview API call. */
	static readonly opGetAutoMergingPreview: string[] = [
		"profile:GetAutoMergingPreview",
	];
	/** IAM actions required for the GetCalculatedAttributeDefinition API call. */
	static readonly opGetCalculatedAttributeDefinition: string[] = [
		"profile:GetCalculatedAttributeDefinition",
	];
	/** IAM actions required for the GetCalculatedAttributeForProfile API call. */
	static readonly opGetCalculatedAttributeForProfile: string[] = [
		"profile:GetCalculatedAttributeForProfile",
	];
	/** IAM actions required for the GetDomain API call. */
	static readonly opGetDomain: string[] = ["profile:GetDomain"];
	/** IAM actions required for the GetDomainLayout API call. */
	static readonly opGetDomainLayout: string[] = ["profile:GetDomainLayout"];
	/** IAM actions required for the GetDomainObjectType API call. */
	static readonly opGetDomainObjectType: string[] = [
		"profile:GetDomainObjectType",
	];
	/** IAM actions required for the GetEventStream API call. */
	static readonly opGetEventStream: string[] = ["profile:GetEventStream"];
	/** IAM actions required for the GetEventTrigger API call. */
	static readonly opGetEventTrigger: string[] = ["profile:GetEventTrigger"];
	/** IAM actions required for the GetIdentityResolutionJob API call. */
	static readonly opGetIdentityResolutionJob: string[] = [
		"profile:GetIdentityResolutionJob",
	];
	/** IAM actions required for the GetIntegration API call. */
	static readonly opGetIntegration: string[] = ["profile:GetIntegration"];
	/** IAM actions required for the GetMatches API call. */
	static readonly opGetMatches: string[] = ["profile:GetMatches"];
	/** IAM actions required for the GetObjectTypeAttributeStatistics API call. */
	static readonly opGetObjectTypeAttributeStatistics: string[] = [
		"profile:GetObjectTypeAttributeStatistics",
	];
	/** IAM actions required for the GetProfileHistoryRecord API call. */
	static readonly opGetProfileHistoryRecord: string[] = [
		"profile:GetProfileHistoryRecord",
	];
	/** IAM actions required for the GetProfileObjectType API call. */
	static readonly opGetProfileObjectType: string[] = [
		"profile:GetProfileObjectType",
	];
	/** IAM actions required for the GetProfileObjectTypeTemplate API call. */
	static readonly opGetProfileObjectTypeTemplate: string[] = [
		"profile:GetProfileObjectTypeTemplate",
	];
	/** IAM actions required for the GetProfileRecommendations API call. */
	static readonly opGetProfileRecommendations: string[] = [
		"profile:GetProfileRecommendations",
	];
	/** IAM actions required for the GetRecommender API call. */
	static readonly opGetRecommender: string[] = ["profile:GetRecommender"];
	/** IAM actions required for the GetRecommenderFilter API call. */
	static readonly opGetRecommenderFilter: string[] = [
		"profile:GetRecommenderFilter",
	];
	/** IAM actions required for the GetRecommenderSchema API call. */
	static readonly opGetRecommenderSchema: string[] = [
		"profile:GetRecommenderSchema",
	];
	/** IAM actions required for the GetSegmentDefinition API call. */
	static readonly opGetSegmentDefinition: string[] = [
		"profile:GetSegmentDefinition",
	];
	/** IAM actions required for the GetSegmentEstimate API call. */
	static readonly opGetSegmentEstimate: string[] = [
		"profile:GetSegmentEstimate",
	];
	/** IAM actions required for the GetSegmentMembership API call. */
	static readonly opGetSegmentMembership: string[] = [
		"profile:GetSegmentMembership",
	];
	/** IAM actions required for the GetSegmentSnapshot API call. */
	static readonly opGetSegmentSnapshot: string[] = [
		"profile:GetSegmentSnapshot",
	];
	/** IAM actions required for the GetSimilarProfiles API call. */
	static readonly opGetSimilarProfiles: string[] = [
		"profile:GetSimilarProfiles",
	];
	/** IAM actions required for the GetUploadJob API call. */
	static readonly opGetUploadJob: string[] = ["profile:GetUploadJob"];
	/** IAM actions required for the GetUploadJobPath API call. */
	static readonly opGetUploadJobPath: string[] = ["profile:GetUploadJobPath"];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly opGetWorkflow: string[] = ["profile:GetWorkflow"];
	/** IAM actions required for the GetWorkflowSteps API call. */
	static readonly opGetWorkflowSteps: string[] = ["profile:GetWorkflowSteps"];
	/** IAM actions required for the ListAccountIntegrations API call. */
	static readonly ListAccountIntegrations: string[] = [
		"profile:ListAccountIntegrations",
	];
	/** IAM actions required for the ListCalculatedAttributeDefinitions API call. */
	static readonly ListCalculatedAttributeDefinitions: string[] = [
		"profile:ListCalculatedAttributeDefinitions",
	];
	/** IAM actions required for the ListCalculatedAttributesForProfile API call. */
	static readonly ListCalculatedAttributesForProfile: string[] = [
		"profile:ListCalculatedAttributesForProfile",
	];
	/** IAM actions required for the ListDomainLayouts API call. */
	static readonly ListDomainLayouts: string[] = ["profile:ListDomainLayouts"];
	/** IAM actions required for the ListDomainObjectTypes API call. */
	static readonly ListDomainObjectTypes: string[] = [
		"profile:ListDomainObjectTypes",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["profile:ListDomains"];
	/** IAM actions required for the ListEventStreams API call. */
	static readonly ListEventStreams: string[] = ["profile:ListEventStreams"];
	/** IAM actions required for the ListEventTriggers API call. */
	static readonly ListEventTriggers: string[] = ["profile:ListEventTriggers"];
	/** IAM actions required for the ListIdentityResolutionJobs API call. */
	static readonly ListIdentityResolutionJobs: string[] = [
		"profile:ListIdentityResolutionJobs",
	];
	/** IAM actions required for the ListIntegrations API call. */
	static readonly ListIntegrations: string[] = ["profile:ListIntegrations"];
	/** IAM actions required for the ListObjectTypeAttributeValues API call. */
	static readonly ListObjectTypeAttributeValues: string[] = [
		"profile:ListObjectTypeAttributeValues",
	];
	/** IAM actions required for the ListObjectTypeAttributes API call. */
	static readonly ListObjectTypeAttributes: string[] = [
		"profile:ListObjectTypeAttributes",
	];
	/** IAM actions required for the ListProfileAttributeValues API call. */
	static readonly ListProfileAttributeValues: string[] = [
		"profile:ListProfileAttributeValues",
	];
	/** IAM actions required for the ListProfileHistoryRecords API call. */
	static readonly ListProfileHistoryRecords: string[] = [
		"profile:ListProfileHistoryRecords",
	];
	/** IAM actions required for the ListProfileObjectTypeTemplates API call. */
	static readonly ListProfileObjectTypeTemplates: string[] = [
		"profile:ListProfileObjectTypeTemplates",
	];
	/** IAM actions required for the ListProfileObjectTypes API call. */
	static readonly ListProfileObjectTypes: string[] = [
		"profile:ListProfileObjectTypes",
	];
	/** IAM actions required for the ListProfileObjects API call. */
	static readonly ListProfileObjects: string[] = ["profile:ListProfileObjects"];
	/** IAM actions required for the ListRecommenderFilters API call. */
	static readonly ListRecommenderFilters: string[] = [
		"profile:ListRecommenderFilters",
	];
	/** IAM actions required for the ListRecommenderRecipes API call. */
	static readonly ListRecommenderRecipes: string[] = [
		"profile:ListRecommenderRecipes",
	];
	/** IAM actions required for the ListRecommenderSchemas API call. */
	static readonly ListRecommenderSchemas: string[] = [
		"profile:ListRecommenderSchemas",
	];
	/** IAM actions required for the ListRecommenders API call. */
	static readonly ListRecommenders: string[] = ["profile:ListRecommenders"];
	/** IAM actions required for the ListRuleBasedMatches API call. */
	static readonly ListRuleBasedMatches: string[] = [
		"profile:ListRuleBasedMatches",
	];
	/** IAM actions required for the ListSegmentDefinitions API call. */
	static readonly ListSegmentDefinitions: string[] = [
		"profile:ListSegmentDefinitions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"profile:ListTagsForResource",
	];
	/** IAM actions required for the ListUploadJobs API call. */
	static readonly ListUploadJobs: string[] = ["profile:ListUploadJobs"];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = ["profile:ListWorkflows"];
	/** IAM actions required for the MergeProfiles API call. */
	static readonly MergeProfiles: string[] = ["profile:MergeProfiles"];
	/** IAM actions required for the PutDomainObjectType API call. */
	static readonly PutDomainObjectType: string[] = [
		"profile:PutDomainObjectType",
		"profile:TagResource",
	];
	/** IAM actions required for the PutIntegration API call. */
	static readonly PutIntegration: string[] = [
		"profile:PutIntegration",
		"profile:TagResource",
	];
	/** IAM actions required for the PutProfileObject API call. */
	static readonly PutProfileObject: string[] = ["profile:PutProfileObject"];
	/** IAM actions required for the PutProfileObjectType API call. */
	static readonly PutProfileObjectType: string[] = [
		"profile:PutProfileObjectType",
		"profile:TagResource",
	];
	/** IAM actions required for the SearchProfiles API call. */
	static readonly SearchProfiles: string[] = ["profile:SearchProfiles"];
	/** IAM actions required for the StartRecommender API call. */
	static readonly StartRecommender: string[] = ["profile:StartRecommender"];
	/** IAM actions required for the StartUploadJob API call. */
	static readonly StartUploadJob: string[] = ["profile:StartUploadJob"];
	/** IAM actions required for the StopRecommender API call. */
	static readonly StopRecommender: string[] = ["profile:StopRecommender"];
	/** IAM actions required for the StopUploadJob API call. */
	static readonly StopUploadJob: string[] = ["profile:StopUploadJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["profile:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["profile:UntagResource"];
	/** IAM actions required for the UpdateCalculatedAttributeDefinition API call. */
	static readonly UpdateCalculatedAttributeDefinition: string[] = [
		"profile:UpdateCalculatedAttributeDefinition",
	];
	/** IAM actions required for the UpdateDomain API call. */
	static readonly UpdateDomain: string[] = ["profile:UpdateDomain"];
	/** IAM actions required for the UpdateDomainLayout API call. */
	static readonly UpdateDomainLayout: string[] = ["profile:UpdateDomainLayout"];
	/** IAM actions required for the UpdateEventTrigger API call. */
	static readonly UpdateEventTrigger: string[] = ["profile:UpdateEventTrigger"];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UpdateProfile: string[] = ["profile:UpdateProfile"];
	/** IAM actions required for the UpdateRecommender API call. */
	static readonly UpdateRecommender: string[] = ["profile:UpdateRecommender"];
}

/**
 * Condition key constants and builders for profile.
 */
export class ProfileConditions {
	/** Condition keys applicable to the CreateRecommenderFilter action. */
	static readonly CreateRecommenderFilterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecommenderSchema action. */
	static readonly CreateRecommenderSchemaConditionKeys: string[] = [
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
