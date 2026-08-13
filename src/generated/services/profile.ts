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
	static readonly ADD_PROFILE_KEY = "profile:AddProfileKey";
	/** [Read] profile:BatchGetCalculatedAttributeForProfile */
	static readonly BATCH_GET_CALCULATED_ATTRIBUTE_FOR_PROFILE =
		"profile:BatchGetCalculatedAttributeForProfile";
	/** [Read] profile:BatchGetProfile */
	static readonly BATCH_GET_PROFILE = "profile:BatchGetProfile";
	/** [Write] profile:CreateCalculatedAttributeDefinition */
	static readonly CREATE_CALCULATED_ATTRIBUTE_DEFINITION =
		"profile:CreateCalculatedAttributeDefinition";
	/** [Write] profile:CreateDomain */
	static readonly CREATE_DOMAIN = "profile:CreateDomain";
	/** [Write] profile:CreateDomainLayout */
	static readonly CREATE_DOMAIN_LAYOUT = "profile:CreateDomainLayout";
	/** [Write] profile:CreateEventStream */
	static readonly CREATE_EVENT_STREAM = "profile:CreateEventStream";
	/** [Write] profile:CreateEventTrigger */
	static readonly CREATE_EVENT_TRIGGER = "profile:CreateEventTrigger";
	/** [Write] profile:CreateIntegrationWorkflow */
	static readonly CREATE_INTEGRATION_WORKFLOW =
		"profile:CreateIntegrationWorkflow";
	/** [Write] profile:CreateProfile */
	static readonly CREATE_PROFILE = "profile:CreateProfile";
	/** [Write] profile:CreateRecommender */
	static readonly CREATE_RECOMMENDER = "profile:CreateRecommender";
	/** [Write] profile:CreateRecommenderFilter */
	static readonly CREATE_RECOMMENDER_FILTER = "profile:CreateRecommenderFilter";
	/** [Write] profile:CreateRecommenderSchema */
	static readonly CREATE_RECOMMENDER_SCHEMA = "profile:CreateRecommenderSchema";
	/** [Write] profile:CreateSegmentDefinition */
	static readonly CREATE_SEGMENT_DEFINITION = "profile:CreateSegmentDefinition";
	/** [Write] profile:CreateSegmentEstimate */
	static readonly CREATE_SEGMENT_ESTIMATE = "profile:CreateSegmentEstimate";
	/** [Write] profile:CreateSegmentSnapshot */
	static readonly CREATE_SEGMENT_SNAPSHOT = "profile:CreateSegmentSnapshot";
	/** [Write] profile:CreateSnapshot */
	static readonly CREATE_SNAPSHOT = "profile:CreateSnapshot";
	/** [Write] profile:CreateUploadJob */
	static readonly CREATE_UPLOAD_JOB = "profile:CreateUploadJob";
	/** [Write] profile:DeleteCalculatedAttributeDefinition */
	static readonly DELETE_CALCULATED_ATTRIBUTE_DEFINITION =
		"profile:DeleteCalculatedAttributeDefinition";
	/** [Write] profile:DeleteDomain */
	static readonly DELETE_DOMAIN = "profile:DeleteDomain";
	/** [Write] profile:DeleteDomainLayout */
	static readonly DELETE_DOMAIN_LAYOUT = "profile:DeleteDomainLayout";
	/** [Write] profile:DeleteDomainObjectType */
	static readonly DELETE_DOMAIN_OBJECT_TYPE = "profile:DeleteDomainObjectType";
	/** [Write] profile:DeleteEventStream */
	static readonly DELETE_EVENT_STREAM = "profile:DeleteEventStream";
	/** [Write] profile:DeleteEventTrigger */
	static readonly DELETE_EVENT_TRIGGER = "profile:DeleteEventTrigger";
	/** [Write] profile:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "profile:DeleteIntegration";
	/** [Write] profile:DeleteProfile */
	static readonly DELETE_PROFILE = "profile:DeleteProfile";
	/** [Write] profile:DeleteProfileKey */
	static readonly DELETE_PROFILE_KEY = "profile:DeleteProfileKey";
	/** [Write] profile:DeleteProfileObject */
	static readonly DELETE_PROFILE_OBJECT = "profile:DeleteProfileObject";
	/** [Write] profile:DeleteProfileObjectType */
	static readonly DELETE_PROFILE_OBJECT_TYPE =
		"profile:DeleteProfileObjectType";
	/** [Write] profile:DeleteRecommender */
	static readonly DELETE_RECOMMENDER = "profile:DeleteRecommender";
	/** [Write] profile:DeleteRecommenderFilter */
	static readonly DELETE_RECOMMENDER_FILTER = "profile:DeleteRecommenderFilter";
	/** [Write] profile:DeleteRecommenderSchema */
	static readonly DELETE_RECOMMENDER_SCHEMA = "profile:DeleteRecommenderSchema";
	/** [Write] profile:DeleteSegmentDefinition */
	static readonly DELETE_SEGMENT_DEFINITION = "profile:DeleteSegmentDefinition";
	/** [Write] profile:DeleteWorkflow */
	static readonly DELETE_WORKFLOW = "profile:DeleteWorkflow";
	/** [Read] profile:DetectProfileObjectType */
	static readonly DETECT_PROFILE_OBJECT_TYPE =
		"profile:DetectProfileObjectType";
	/** [Read] profile:GetAutoMergingPreview */
	static readonly GET_AUTO_MERGING_PREVIEW = "profile:GetAutoMergingPreview";
	/** [Read] profile:GetCalculatedAttributeDefinition */
	static readonly GET_CALCULATED_ATTRIBUTE_DEFINITION =
		"profile:GetCalculatedAttributeDefinition";
	/** [Read] profile:GetCalculatedAttributeForProfile */
	static readonly GET_CALCULATED_ATTRIBUTE_FOR_PROFILE =
		"profile:GetCalculatedAttributeForProfile";
	/** [Read] profile:GetDomain */
	static readonly GET_DOMAIN = "profile:GetDomain";
	/** [Read] profile:GetDomainLayout */
	static readonly GET_DOMAIN_LAYOUT = "profile:GetDomainLayout";
	/** [Read] profile:GetDomainObjectType */
	static readonly GET_DOMAIN_OBJECT_TYPE = "profile:GetDomainObjectType";
	/** [Read] profile:GetEventStream */
	static readonly GET_EVENT_STREAM = "profile:GetEventStream";
	/** [Read] profile:GetEventTrigger */
	static readonly GET_EVENT_TRIGGER = "profile:GetEventTrigger";
	/** [Read] profile:GetIdentityResolutionJob */
	static readonly GET_IDENTITY_RESOLUTION_JOB =
		"profile:GetIdentityResolutionJob";
	/** [Read] profile:GetIntegration */
	static readonly GET_INTEGRATION = "profile:GetIntegration";
	/** [List] profile:GetMatches */
	static readonly GET_MATCHES = "profile:GetMatches";
	/** [Read] profile:GetObjectTypeAttributeStatistics */
	static readonly GET_OBJECT_TYPE_ATTRIBUTE_STATISTICS =
		"profile:GetObjectTypeAttributeStatistics";
	/** [Read] profile:GetProfileHistoryRecord */
	static readonly GET_PROFILE_HISTORY_RECORD =
		"profile:GetProfileHistoryRecord";
	/** [Read] profile:GetProfileInsights */
	static readonly GET_PROFILE_INSIGHTS = "profile:GetProfileInsights";
	/** [Read] profile:GetProfileObjectType */
	static readonly GET_PROFILE_OBJECT_TYPE = "profile:GetProfileObjectType";
	/** [Read] profile:GetProfileObjectTypeTemplate */
	static readonly GET_PROFILE_OBJECT_TYPE_TEMPLATE =
		"profile:GetProfileObjectTypeTemplate";
	/** [Read] profile:GetProfileRecommendations */
	static readonly GET_PROFILE_RECOMMENDATIONS =
		"profile:GetProfileRecommendations";
	/** [Read] profile:GetRecommender */
	static readonly GET_RECOMMENDER = "profile:GetRecommender";
	/** [Read] profile:GetRecommenderFilter */
	static readonly GET_RECOMMENDER_FILTER = "profile:GetRecommenderFilter";
	/** [Read] profile:GetRecommenderSchema */
	static readonly GET_RECOMMENDER_SCHEMA = "profile:GetRecommenderSchema";
	/** [Read] profile:GetSegmentDefinition */
	static readonly GET_SEGMENT_DEFINITION = "profile:GetSegmentDefinition";
	/** [Read] profile:GetSegmentEstimate */
	static readonly GET_SEGMENT_ESTIMATE = "profile:GetSegmentEstimate";
	/** [Read] profile:GetSegmentMembership */
	static readonly GET_SEGMENT_MEMBERSHIP = "profile:GetSegmentMembership";
	/** [Read] profile:GetSegmentSnapshot */
	static readonly GET_SEGMENT_SNAPSHOT = "profile:GetSegmentSnapshot";
	/** [List] profile:GetSimilarProfiles */
	static readonly GET_SIMILAR_PROFILES = "profile:GetSimilarProfiles";
	/** [Read] profile:GetSnapshot */
	static readonly GET_SNAPSHOT = "profile:GetSnapshot";
	/** [Read] profile:GetUploadJob */
	static readonly GET_UPLOAD_JOB = "profile:GetUploadJob";
	/** [Read] profile:GetUploadJobPath */
	static readonly GET_UPLOAD_JOB_PATH = "profile:GetUploadJobPath";
	/** [Read] profile:GetWorkflow */
	static readonly GET_WORKFLOW = "profile:GetWorkflow";
	/** [Read] profile:GetWorkflowSteps */
	static readonly GET_WORKFLOW_STEPS = "profile:GetWorkflowSteps";
	/** [List] profile:ListAccountIntegrations */
	static readonly LIST_ACCOUNT_INTEGRATIONS = "profile:ListAccountIntegrations";
	/** [List] profile:ListCalculatedAttributeDefinitions */
	static readonly LIST_CALCULATED_ATTRIBUTE_DEFINITIONS =
		"profile:ListCalculatedAttributeDefinitions";
	/** [List] profile:ListCalculatedAttributesForProfile */
	static readonly LIST_CALCULATED_ATTRIBUTES_FOR_PROFILE =
		"profile:ListCalculatedAttributesForProfile";
	/** [List] profile:ListDomainLayouts */
	static readonly LIST_DOMAIN_LAYOUTS = "profile:ListDomainLayouts";
	/** [List] profile:ListDomainObjectTypes */
	static readonly LIST_DOMAIN_OBJECT_TYPES = "profile:ListDomainObjectTypes";
	/** [List] profile:ListDomainObjects */
	static readonly LIST_DOMAIN_OBJECTS = "profile:ListDomainObjects";
	/** [List] profile:ListDomains */
	static readonly LIST_DOMAINS = "profile:ListDomains";
	/** [List] profile:ListEventStreams */
	static readonly LIST_EVENT_STREAMS = "profile:ListEventStreams";
	/** [List] profile:ListEventTriggers */
	static readonly LIST_EVENT_TRIGGERS = "profile:ListEventTriggers";
	/** [List] profile:ListIdentityResolutionJobs */
	static readonly LIST_IDENTITY_RESOLUTION_JOBS =
		"profile:ListIdentityResolutionJobs";
	/** [List] profile:ListIntegrations */
	static readonly LIST_INTEGRATIONS = "profile:ListIntegrations";
	/** [List] profile:ListObjectTypeAttributeValues */
	static readonly LIST_OBJECT_TYPE_ATTRIBUTE_VALUES =
		"profile:ListObjectTypeAttributeValues";
	/** [List] profile:ListObjectTypeAttributes */
	static readonly LIST_OBJECT_TYPE_ATTRIBUTES =
		"profile:ListObjectTypeAttributes";
	/** [List] profile:ListProfileAttributeValues */
	static readonly LIST_PROFILE_ATTRIBUTE_VALUES =
		"profile:ListProfileAttributeValues";
	/** [List] profile:ListProfileHistoryRecords */
	static readonly LIST_PROFILE_HISTORY_RECORDS =
		"profile:ListProfileHistoryRecords";
	/** [List] profile:ListProfileObjectTypeTemplates */
	static readonly LIST_PROFILE_OBJECT_TYPE_TEMPLATES =
		"profile:ListProfileObjectTypeTemplates";
	/** [List] profile:ListProfileObjectTypes */
	static readonly LIST_PROFILE_OBJECT_TYPES = "profile:ListProfileObjectTypes";
	/** [List] profile:ListProfileObjects */
	static readonly LIST_PROFILE_OBJECTS = "profile:ListProfileObjects";
	/** [List] profile:ListRecommenderFilters */
	static readonly LIST_RECOMMENDER_FILTERS = "profile:ListRecommenderFilters";
	/** [List] profile:ListRecommenderRecipes */
	static readonly LIST_RECOMMENDER_RECIPES = "profile:ListRecommenderRecipes";
	/** [List] profile:ListRecommenderSchemas */
	static readonly LIST_RECOMMENDER_SCHEMAS = "profile:ListRecommenderSchemas";
	/** [List] profile:ListRecommenders */
	static readonly LIST_RECOMMENDERS = "profile:ListRecommenders";
	/** [List] profile:ListRuleBasedMatches */
	static readonly LIST_RULE_BASED_MATCHES = "profile:ListRuleBasedMatches";
	/** [List] profile:ListSegmentDefinitions */
	static readonly LIST_SEGMENT_DEFINITIONS = "profile:ListSegmentDefinitions";
	/** [Read] profile:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "profile:ListTagsForResource";
	/** [List] profile:ListUploadJobs */
	static readonly LIST_UPLOAD_JOBS = "profile:ListUploadJobs";
	/** [List] profile:ListWorkflows */
	static readonly LIST_WORKFLOWS = "profile:ListWorkflows";
	/** [Write] profile:MergeProfiles */
	static readonly MERGE_PROFILES = "profile:MergeProfiles";
	/** [Write] profile:PutDomainObjectType */
	static readonly PUT_DOMAIN_OBJECT_TYPE = "profile:PutDomainObjectType";
	/** [Write] profile:PutIntegration */
	static readonly PUT_INTEGRATION = "profile:PutIntegration";
	/** [Write] profile:PutProfileObject */
	static readonly PUT_PROFILE_OBJECT = "profile:PutProfileObject";
	/** [Write] profile:PutProfileObjectType */
	static readonly PUT_PROFILE_OBJECT_TYPE = "profile:PutProfileObjectType";
	/** [Read] profile:SearchProfiles */
	static readonly SEARCH_PROFILES = "profile:SearchProfiles";
	/** [Write] profile:StartRecommender */
	static readonly START_RECOMMENDER = "profile:StartRecommender";
	/** [Write] profile:StartUploadJob */
	static readonly START_UPLOAD_JOB = "profile:StartUploadJob";
	/** [Write] profile:StopRecommender */
	static readonly STOP_RECOMMENDER = "profile:StopRecommender";
	/** [Write] profile:StopUploadJob */
	static readonly STOP_UPLOAD_JOB = "profile:StopUploadJob";
	/** [Tagging] profile:TagResource */
	static readonly TAG_RESOURCE = "profile:TagResource";
	/** [Tagging] profile:UntagResource */
	static readonly UNTAG_RESOURCE = "profile:UntagResource";
	/** [Write] profile:UpdateCalculatedAttributeDefinition */
	static readonly UPDATE_CALCULATED_ATTRIBUTE_DEFINITION =
		"profile:UpdateCalculatedAttributeDefinition";
	/** [Write] profile:UpdateDomain */
	static readonly UPDATE_DOMAIN = "profile:UpdateDomain";
	/** [Write] profile:UpdateDomainLayout */
	static readonly UPDATE_DOMAIN_LAYOUT = "profile:UpdateDomainLayout";
	/** [Write] profile:UpdateEventTrigger */
	static readonly UPDATE_EVENT_TRIGGER = "profile:UpdateEventTrigger";
	/** [Write] profile:UpdateProfile */
	static readonly UPDATE_PROFILE = "profile:UpdateProfile";
	/** [Write] profile:UpdateRecommender */
	static readonly UPDATE_RECOMMENDER = "profile:UpdateRecommender";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ProfileActions.BATCH_GET_CALCULATED_ATTRIBUTE_FOR_PROFILE,
		ProfileActions.BATCH_GET_PROFILE,
		ProfileActions.DETECT_PROFILE_OBJECT_TYPE,
		ProfileActions.GET_AUTO_MERGING_PREVIEW,
		ProfileActions.GET_CALCULATED_ATTRIBUTE_DEFINITION,
		ProfileActions.GET_CALCULATED_ATTRIBUTE_FOR_PROFILE,
		ProfileActions.GET_DOMAIN,
		ProfileActions.GET_DOMAIN_LAYOUT,
		ProfileActions.GET_DOMAIN_OBJECT_TYPE,
		ProfileActions.GET_EVENT_STREAM,
		ProfileActions.GET_EVENT_TRIGGER,
		ProfileActions.GET_IDENTITY_RESOLUTION_JOB,
		ProfileActions.GET_INTEGRATION,
		ProfileActions.GET_OBJECT_TYPE_ATTRIBUTE_STATISTICS,
		ProfileActions.GET_PROFILE_HISTORY_RECORD,
		ProfileActions.GET_PROFILE_INSIGHTS,
		ProfileActions.GET_PROFILE_OBJECT_TYPE,
		ProfileActions.GET_PROFILE_OBJECT_TYPE_TEMPLATE,
		ProfileActions.GET_PROFILE_RECOMMENDATIONS,
		ProfileActions.GET_RECOMMENDER,
		ProfileActions.GET_RECOMMENDER_FILTER,
		ProfileActions.GET_RECOMMENDER_SCHEMA,
		ProfileActions.GET_SEGMENT_DEFINITION,
		ProfileActions.GET_SEGMENT_ESTIMATE,
		ProfileActions.GET_SEGMENT_MEMBERSHIP,
		ProfileActions.GET_SEGMENT_SNAPSHOT,
		ProfileActions.GET_SNAPSHOT,
		ProfileActions.GET_UPLOAD_JOB,
		ProfileActions.GET_UPLOAD_JOB_PATH,
		ProfileActions.GET_WORKFLOW,
		ProfileActions.GET_WORKFLOW_STEPS,
		ProfileActions.LIST_TAGS_FOR_RESOURCE,
		ProfileActions.SEARCH_PROFILES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ProfileActions.ADD_PROFILE_KEY,
		ProfileActions.CREATE_CALCULATED_ATTRIBUTE_DEFINITION,
		ProfileActions.CREATE_DOMAIN,
		ProfileActions.CREATE_DOMAIN_LAYOUT,
		ProfileActions.CREATE_EVENT_STREAM,
		ProfileActions.CREATE_EVENT_TRIGGER,
		ProfileActions.CREATE_INTEGRATION_WORKFLOW,
		ProfileActions.CREATE_PROFILE,
		ProfileActions.CREATE_RECOMMENDER,
		ProfileActions.CREATE_RECOMMENDER_FILTER,
		ProfileActions.CREATE_RECOMMENDER_SCHEMA,
		ProfileActions.CREATE_SEGMENT_DEFINITION,
		ProfileActions.CREATE_SEGMENT_ESTIMATE,
		ProfileActions.CREATE_SEGMENT_SNAPSHOT,
		ProfileActions.CREATE_SNAPSHOT,
		ProfileActions.CREATE_UPLOAD_JOB,
		ProfileActions.DELETE_CALCULATED_ATTRIBUTE_DEFINITION,
		ProfileActions.DELETE_DOMAIN,
		ProfileActions.DELETE_DOMAIN_LAYOUT,
		ProfileActions.DELETE_DOMAIN_OBJECT_TYPE,
		ProfileActions.DELETE_EVENT_STREAM,
		ProfileActions.DELETE_EVENT_TRIGGER,
		ProfileActions.DELETE_INTEGRATION,
		ProfileActions.DELETE_PROFILE,
		ProfileActions.DELETE_PROFILE_KEY,
		ProfileActions.DELETE_PROFILE_OBJECT,
		ProfileActions.DELETE_PROFILE_OBJECT_TYPE,
		ProfileActions.DELETE_RECOMMENDER,
		ProfileActions.DELETE_RECOMMENDER_FILTER,
		ProfileActions.DELETE_RECOMMENDER_SCHEMA,
		ProfileActions.DELETE_SEGMENT_DEFINITION,
		ProfileActions.DELETE_WORKFLOW,
		ProfileActions.MERGE_PROFILES,
		ProfileActions.PUT_DOMAIN_OBJECT_TYPE,
		ProfileActions.PUT_INTEGRATION,
		ProfileActions.PUT_PROFILE_OBJECT,
		ProfileActions.PUT_PROFILE_OBJECT_TYPE,
		ProfileActions.START_RECOMMENDER,
		ProfileActions.START_UPLOAD_JOB,
		ProfileActions.STOP_RECOMMENDER,
		ProfileActions.STOP_UPLOAD_JOB,
		ProfileActions.UPDATE_CALCULATED_ATTRIBUTE_DEFINITION,
		ProfileActions.UPDATE_DOMAIN,
		ProfileActions.UPDATE_DOMAIN_LAYOUT,
		ProfileActions.UPDATE_EVENT_TRIGGER,
		ProfileActions.UPDATE_PROFILE,
		ProfileActions.UPDATE_RECOMMENDER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ProfileActions.GET_MATCHES,
		ProfileActions.GET_SIMILAR_PROFILES,
		ProfileActions.LIST_ACCOUNT_INTEGRATIONS,
		ProfileActions.LIST_CALCULATED_ATTRIBUTE_DEFINITIONS,
		ProfileActions.LIST_CALCULATED_ATTRIBUTES_FOR_PROFILE,
		ProfileActions.LIST_DOMAIN_LAYOUTS,
		ProfileActions.LIST_DOMAIN_OBJECT_TYPES,
		ProfileActions.LIST_DOMAIN_OBJECTS,
		ProfileActions.LIST_DOMAINS,
		ProfileActions.LIST_EVENT_STREAMS,
		ProfileActions.LIST_EVENT_TRIGGERS,
		ProfileActions.LIST_IDENTITY_RESOLUTION_JOBS,
		ProfileActions.LIST_INTEGRATIONS,
		ProfileActions.LIST_OBJECT_TYPE_ATTRIBUTE_VALUES,
		ProfileActions.LIST_OBJECT_TYPE_ATTRIBUTES,
		ProfileActions.LIST_PROFILE_ATTRIBUTE_VALUES,
		ProfileActions.LIST_PROFILE_HISTORY_RECORDS,
		ProfileActions.LIST_PROFILE_OBJECT_TYPE_TEMPLATES,
		ProfileActions.LIST_PROFILE_OBJECT_TYPES,
		ProfileActions.LIST_PROFILE_OBJECTS,
		ProfileActions.LIST_RECOMMENDER_FILTERS,
		ProfileActions.LIST_RECOMMENDER_RECIPES,
		ProfileActions.LIST_RECOMMENDER_SCHEMAS,
		ProfileActions.LIST_RECOMMENDERS,
		ProfileActions.LIST_RULE_BASED_MATCHES,
		ProfileActions.LIST_SEGMENT_DEFINITIONS,
		ProfileActions.LIST_UPLOAD_JOBS,
		ProfileActions.LIST_WORKFLOWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ProfileActions.TAG_RESOURCE,
		ProfileActions.UNTAG_RESOURCE,
	];
}

const CalculatedAttributesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/calculated-attributes/(?<calculatedAttributeName>[^:/?]+)$",
);
const DomainObjectTypesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/domain-object-types/(?<objectTypeName>[^:/?]+)$",
);
const DomainsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)$",
);
const EventStreamsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/event-streams/(?<eventStreamName>[^:/?]+)$",
);
const EventTriggersArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/event-triggers/(?<eventTriggerName>[^:/?]+)$",
);
const IntegrationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/integrations/(?<uri>[^:/?]+)$",
);
const LayoutsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/layouts/(?<layoutDefinitionName>[^:/?]+)$",
);
const ObjectTypesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/object-types/(?<objectTypeName>[^:/?]+)$",
);
const RecommenderFiltersArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/recommender-filters/(?<recommenderFilterName>[^:/?]+)$",
);
const RecommenderSchemasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/recommender-schemas/(?<recommenderSchemaName>[^:/?]+)$",
);
const RecommendersArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/recommenders/(?<recommenderTypeName>[^:/?]+)$",
);
const SegmentDefinitionsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):profile:(?<region>[^:]*):(?<account>[^:]*):domains/(?<domainName>[^:/?]+)/segment-definitions/(?<segmentDefinitionName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for profile resources.
 */
export class ProfileResources {
	/**
	 * Builds an ARN for the calculated-attributes resource.
	 */
	static calculatedAttributes(props: {
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
	}): string {
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
	static parseCalculatedAttributesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		calculatedAttributeName: string;
	} {
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
	static domainObjectTypes(props: {
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
	}): string {
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
	static parseDomainObjectTypesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		objectTypeName: string;
	} {
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
	static domains(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
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
	static eventStreams(props: {
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
	}): string {
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
	static parseEventStreamsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		eventStreamName: string;
	} {
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
	static eventTriggers(props: {
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
	}): string {
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
	static parseEventTriggersArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		eventTriggerName: string;
	} {
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
	static integrations(props: {
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
	}): string {
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
	static parseIntegrationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		uri: string;
	} {
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
	static layouts(props: {
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
	}): string {
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
	static parseLayoutsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		layoutDefinitionName: string;
	} {
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
	static objectTypes(props: {
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
	}): string {
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
	static parseObjectTypesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		objectTypeName: string;
	} {
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
	static recommenderFilters(props: {
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
	}): string {
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
	static parseRecommenderFiltersArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		recommenderFilterName: string;
	} {
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
	static recommenderSchemas(props: {
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
	}): string {
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
	static parseRecommenderSchemasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		recommenderSchemaName: string;
	} {
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
	static recommenders(props: {
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
	}): string {
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
	static parseRecommendersArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		recommenderTypeName: string;
	} {
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
	static segmentDefinitions(props: {
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
	}): string {
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
	static parseSegmentDefinitionsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
		segmentDefinitionName: string;
	} {
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
	static readonly ADD_PROFILE_KEY: string[] = ["profile:AddProfileKey"];
	/** IAM actions required for the BatchGetCalculatedAttributeForProfile API call. */
	static readonly BATCH_GET_CALCULATED_ATTRIBUTE_FOR_PROFILE: string[] = [
		"profile:BatchGetCalculatedAttributeForProfile",
	];
	/** IAM actions required for the BatchGetProfile API call. */
	static readonly BATCH_GET_PROFILE: string[] = ["profile:BatchGetProfile"];
	/** IAM actions required for the BatchPutProfileObject API call. */
	static readonly BATCH_PUT_PROFILE_OBJECT: string[] = [];
	/** IAM actions required for the CreateCalculatedAttributeDefinition API call. */
	static readonly CREATE_CALCULATED_ATTRIBUTE_DEFINITION: string[] = [
		"profile:CreateCalculatedAttributeDefinition",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [
		"profile:CreateDomain",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateDomainLayout API call. */
	static readonly CREATE_DOMAIN_LAYOUT: string[] = [
		"profile:CreateDomainLayout",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateEventStream API call. */
	static readonly CREATE_EVENT_STREAM: string[] = [
		"profile:CreateEventStream",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateEventTrigger API call. */
	static readonly CREATE_EVENT_TRIGGER: string[] = [
		"profile:CreateEventTrigger",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateIntegrationWorkflow API call. */
	static readonly CREATE_INTEGRATION_WORKFLOW: string[] = [
		"profile:CreateIntegrationWorkflow",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CREATE_PROFILE: string[] = ["profile:CreateProfile"];
	/** IAM actions required for the CreateRecommender API call. */
	static readonly CREATE_RECOMMENDER: string[] = ["profile:CreateRecommender"];
	/** IAM actions required for the CreateRecommenderFilter API call. */
	static readonly CREATE_RECOMMENDER_FILTER: string[] = [
		"profile:CreateRecommenderFilter",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateRecommenderSchema API call. */
	static readonly CREATE_RECOMMENDER_SCHEMA: string[] = [
		"profile:CreateRecommenderSchema",
	];
	/** IAM actions required for the CreateSegmentDefinition API call. */
	static readonly CREATE_SEGMENT_DEFINITION: string[] = [
		"profile:CreateSegmentDefinition",
		"profile:TagResource",
	];
	/** IAM actions required for the CreateSegmentEstimate API call. */
	static readonly CREATE_SEGMENT_ESTIMATE: string[] = [
		"profile:CreateSegmentEstimate",
	];
	/** IAM actions required for the CreateSegmentSnapshot API call. */
	static readonly CREATE_SEGMENT_SNAPSHOT: string[] = [
		"profile:CreateSegmentSnapshot",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateUploadJob API call. */
	static readonly CREATE_UPLOAD_JOB: string[] = ["profile:CreateUploadJob"];
	/** IAM actions required for the DeleteCalculatedAttributeDefinition API call. */
	static readonly DELETE_CALCULATED_ATTRIBUTE_DEFINITION: string[] = [
		"profile:DeleteCalculatedAttributeDefinition",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["profile:DeleteDomain"];
	/** IAM actions required for the DeleteDomainLayout API call. */
	static readonly DELETE_DOMAIN_LAYOUT: string[] = [
		"profile:DeleteDomainLayout",
	];
	/** IAM actions required for the DeleteDomainObjectType API call. */
	static readonly DELETE_DOMAIN_OBJECT_TYPE: string[] = [
		"profile:DeleteDomainObjectType",
	];
	/** IAM actions required for the DeleteEventStream API call. */
	static readonly DELETE_EVENT_STREAM: string[] = ["profile:DeleteEventStream"];
	/** IAM actions required for the DeleteEventTrigger API call. */
	static readonly DELETE_EVENT_TRIGGER: string[] = [
		"profile:DeleteEventTrigger",
	];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DELETE_INTEGRATION: string[] = ["profile:DeleteIntegration"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DELETE_PROFILE: string[] = ["profile:DeleteProfile"];
	/** IAM actions required for the DeleteProfileKey API call. */
	static readonly DELETE_PROFILE_KEY: string[] = ["profile:DeleteProfileKey"];
	/** IAM actions required for the DeleteProfileObject API call. */
	static readonly DELETE_PROFILE_OBJECT: string[] = [
		"profile:DeleteProfileObject",
	];
	/** IAM actions required for the DeleteProfileObjectType API call. */
	static readonly DELETE_PROFILE_OBJECT_TYPE: string[] = [
		"profile:DeleteProfileObjectType",
	];
	/** IAM actions required for the DeleteRecommender API call. */
	static readonly DELETE_RECOMMENDER: string[] = ["profile:DeleteRecommender"];
	/** IAM actions required for the DeleteRecommenderFilter API call. */
	static readonly DELETE_RECOMMENDER_FILTER: string[] = [
		"profile:DeleteRecommenderFilter",
	];
	/** IAM actions required for the DeleteRecommenderSchema API call. */
	static readonly DELETE_RECOMMENDER_SCHEMA: string[] = [
		"profile:DeleteRecommenderSchema",
	];
	/** IAM actions required for the DeleteSegmentDefinition API call. */
	static readonly DELETE_SEGMENT_DEFINITION: string[] = [
		"profile:DeleteSegmentDefinition",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DELETE_WORKFLOW: string[] = ["profile:DeleteWorkflow"];
	/** IAM actions required for the DetectProfileObjectType API call. */
	static readonly DETECT_PROFILE_OBJECT_TYPE: string[] = [
		"profile:DetectProfileObjectType",
	];
	/** IAM actions required for the GetAutoMergingPreview API call. */
	static readonly GET_AUTO_MERGING_PREVIEW: string[] = [
		"profile:GetAutoMergingPreview",
	];
	/** IAM actions required for the GetCalculatedAttributeDefinition API call. */
	static readonly GET_CALCULATED_ATTRIBUTE_DEFINITION: string[] = [
		"profile:GetCalculatedAttributeDefinition",
	];
	/** IAM actions required for the GetCalculatedAttributeForProfile API call. */
	static readonly GET_CALCULATED_ATTRIBUTE_FOR_PROFILE: string[] = [
		"profile:GetCalculatedAttributeForProfile",
	];
	/** IAM actions required for the GetDomain API call. */
	static readonly GET_DOMAIN: string[] = ["profile:GetDomain"];
	/** IAM actions required for the GetDomainLayout API call. */
	static readonly GET_DOMAIN_LAYOUT: string[] = ["profile:GetDomainLayout"];
	/** IAM actions required for the GetDomainObjectType API call. */
	static readonly GET_DOMAIN_OBJECT_TYPE: string[] = [
		"profile:GetDomainObjectType",
	];
	/** IAM actions required for the GetEventStream API call. */
	static readonly GET_EVENT_STREAM: string[] = ["profile:GetEventStream"];
	/** IAM actions required for the GetEventTrigger API call. */
	static readonly GET_EVENT_TRIGGER: string[] = ["profile:GetEventTrigger"];
	/** IAM actions required for the GetIdentityResolutionJob API call. */
	static readonly GET_IDENTITY_RESOLUTION_JOB: string[] = [
		"profile:GetIdentityResolutionJob",
	];
	/** IAM actions required for the GetIntegration API call. */
	static readonly GET_INTEGRATION: string[] = ["profile:GetIntegration"];
	/** IAM actions required for the GetMatches API call. */
	static readonly GET_MATCHES: string[] = ["profile:GetMatches"];
	/** IAM actions required for the GetObjectTypeAttributeStatistics API call. */
	static readonly GET_OBJECT_TYPE_ATTRIBUTE_STATISTICS: string[] = [
		"profile:GetObjectTypeAttributeStatistics",
	];
	/** IAM actions required for the GetProfileHistoryRecord API call. */
	static readonly GET_PROFILE_HISTORY_RECORD: string[] = [
		"profile:GetProfileHistoryRecord",
	];
	/** IAM actions required for the GetProfileObjectType API call. */
	static readonly GET_PROFILE_OBJECT_TYPE: string[] = [
		"profile:GetProfileObjectType",
	];
	/** IAM actions required for the GetProfileObjectTypeTemplate API call. */
	static readonly GET_PROFILE_OBJECT_TYPE_TEMPLATE: string[] = [
		"profile:GetProfileObjectTypeTemplate",
	];
	/** IAM actions required for the GetProfileRecommendations API call. */
	static readonly GET_PROFILE_RECOMMENDATIONS: string[] = [
		"profile:GetProfileRecommendations",
	];
	/** IAM actions required for the GetRecommender API call. */
	static readonly GET_RECOMMENDER: string[] = ["profile:GetRecommender"];
	/** IAM actions required for the GetRecommenderFilter API call. */
	static readonly GET_RECOMMENDER_FILTER: string[] = [
		"profile:GetRecommenderFilter",
	];
	/** IAM actions required for the GetRecommenderSchema API call. */
	static readonly GET_RECOMMENDER_SCHEMA: string[] = [
		"profile:GetRecommenderSchema",
	];
	/** IAM actions required for the GetSegmentDefinition API call. */
	static readonly GET_SEGMENT_DEFINITION: string[] = [
		"profile:GetSegmentDefinition",
	];
	/** IAM actions required for the GetSegmentEstimate API call. */
	static readonly GET_SEGMENT_ESTIMATE: string[] = [
		"profile:GetSegmentEstimate",
	];
	/** IAM actions required for the GetSegmentMembership API call. */
	static readonly GET_SEGMENT_MEMBERSHIP: string[] = [
		"profile:GetSegmentMembership",
	];
	/** IAM actions required for the GetSegmentSnapshot API call. */
	static readonly GET_SEGMENT_SNAPSHOT: string[] = [
		"profile:GetSegmentSnapshot",
	];
	/** IAM actions required for the GetSimilarProfiles API call. */
	static readonly GET_SIMILAR_PROFILES: string[] = [
		"profile:GetSimilarProfiles",
	];
	/** IAM actions required for the GetUploadJob API call. */
	static readonly GET_UPLOAD_JOB: string[] = ["profile:GetUploadJob"];
	/** IAM actions required for the GetUploadJobPath API call. */
	static readonly GET_UPLOAD_JOB_PATH: string[] = ["profile:GetUploadJobPath"];
	/** IAM actions required for the GetWorkflow API call. */
	static readonly GET_WORKFLOW: string[] = ["profile:GetWorkflow"];
	/** IAM actions required for the GetWorkflowSteps API call. */
	static readonly GET_WORKFLOW_STEPS: string[] = ["profile:GetWorkflowSteps"];
	/** IAM actions required for the ListAccountIntegrations API call. */
	static readonly LIST_ACCOUNT_INTEGRATIONS: string[] = [
		"profile:ListAccountIntegrations",
	];
	/** IAM actions required for the ListCalculatedAttributeDefinitions API call. */
	static readonly LIST_CALCULATED_ATTRIBUTE_DEFINITIONS: string[] = [
		"profile:ListCalculatedAttributeDefinitions",
	];
	/** IAM actions required for the ListCalculatedAttributesForProfile API call. */
	static readonly LIST_CALCULATED_ATTRIBUTES_FOR_PROFILE: string[] = [
		"profile:ListCalculatedAttributesForProfile",
	];
	/** IAM actions required for the ListDomainLayouts API call. */
	static readonly LIST_DOMAIN_LAYOUTS: string[] = ["profile:ListDomainLayouts"];
	/** IAM actions required for the ListDomainObjectTypes API call. */
	static readonly LIST_DOMAIN_OBJECT_TYPES: string[] = [
		"profile:ListDomainObjectTypes",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["profile:ListDomains"];
	/** IAM actions required for the ListEventStreams API call. */
	static readonly LIST_EVENT_STREAMS: string[] = ["profile:ListEventStreams"];
	/** IAM actions required for the ListEventTriggers API call. */
	static readonly LIST_EVENT_TRIGGERS: string[] = ["profile:ListEventTriggers"];
	/** IAM actions required for the ListIdentityResolutionJobs API call. */
	static readonly LIST_IDENTITY_RESOLUTION_JOBS: string[] = [
		"profile:ListIdentityResolutionJobs",
	];
	/** IAM actions required for the ListIntegrations API call. */
	static readonly LIST_INTEGRATIONS: string[] = ["profile:ListIntegrations"];
	/** IAM actions required for the ListObjectTypeAttributeValues API call. */
	static readonly LIST_OBJECT_TYPE_ATTRIBUTE_VALUES: string[] = [
		"profile:ListObjectTypeAttributeValues",
	];
	/** IAM actions required for the ListObjectTypeAttributes API call. */
	static readonly LIST_OBJECT_TYPE_ATTRIBUTES: string[] = [
		"profile:ListObjectTypeAttributes",
	];
	/** IAM actions required for the ListProfileAttributeValues API call. */
	static readonly LIST_PROFILE_ATTRIBUTE_VALUES: string[] = [
		"profile:ListProfileAttributeValues",
	];
	/** IAM actions required for the ListProfileHistoryRecords API call. */
	static readonly LIST_PROFILE_HISTORY_RECORDS: string[] = [
		"profile:ListProfileHistoryRecords",
	];
	/** IAM actions required for the ListProfileObjectTypeTemplates API call. */
	static readonly LIST_PROFILE_OBJECT_TYPE_TEMPLATES: string[] = [
		"profile:ListProfileObjectTypeTemplates",
	];
	/** IAM actions required for the ListProfileObjectTypes API call. */
	static readonly LIST_PROFILE_OBJECT_TYPES: string[] = [
		"profile:ListProfileObjectTypes",
	];
	/** IAM actions required for the ListProfileObjects API call. */
	static readonly LIST_PROFILE_OBJECTS: string[] = [
		"profile:ListProfileObjects",
	];
	/** IAM actions required for the ListRecommenderFilters API call. */
	static readonly LIST_RECOMMENDER_FILTERS: string[] = [
		"profile:ListRecommenderFilters",
	];
	/** IAM actions required for the ListRecommenderRecipes API call. */
	static readonly LIST_RECOMMENDER_RECIPES: string[] = [
		"profile:ListRecommenderRecipes",
	];
	/** IAM actions required for the ListRecommenderSchemas API call. */
	static readonly LIST_RECOMMENDER_SCHEMAS: string[] = [
		"profile:ListRecommenderSchemas",
	];
	/** IAM actions required for the ListRecommenders API call. */
	static readonly LIST_RECOMMENDERS: string[] = ["profile:ListRecommenders"];
	/** IAM actions required for the ListRuleBasedMatches API call. */
	static readonly LIST_RULE_BASED_MATCHES: string[] = [
		"profile:ListRuleBasedMatches",
	];
	/** IAM actions required for the ListSegmentDefinitions API call. */
	static readonly LIST_SEGMENT_DEFINITIONS: string[] = [
		"profile:ListSegmentDefinitions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"profile:ListTagsForResource",
	];
	/** IAM actions required for the ListUploadJobs API call. */
	static readonly LIST_UPLOAD_JOBS: string[] = ["profile:ListUploadJobs"];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = ["profile:ListWorkflows"];
	/** IAM actions required for the MergeProfiles API call. */
	static readonly MERGE_PROFILES: string[] = ["profile:MergeProfiles"];
	/** IAM actions required for the PutDomainObjectType API call. */
	static readonly PUT_DOMAIN_OBJECT_TYPE: string[] = [
		"profile:PutDomainObjectType",
		"profile:TagResource",
	];
	/** IAM actions required for the PutIntegration API call. */
	static readonly PUT_INTEGRATION: string[] = [
		"profile:PutIntegration",
		"profile:TagResource",
	];
	/** IAM actions required for the PutProfileObject API call. */
	static readonly PUT_PROFILE_OBJECT: string[] = ["profile:PutProfileObject"];
	/** IAM actions required for the PutProfileObjectType API call. */
	static readonly PUT_PROFILE_OBJECT_TYPE: string[] = [
		"profile:PutProfileObjectType",
		"profile:TagResource",
	];
	/** IAM actions required for the SearchProfiles API call. */
	static readonly SEARCH_PROFILES: string[] = ["profile:SearchProfiles"];
	/** IAM actions required for the StartRecommender API call. */
	static readonly START_RECOMMENDER: string[] = ["profile:StartRecommender"];
	/** IAM actions required for the StartUploadJob API call. */
	static readonly START_UPLOAD_JOB: string[] = ["profile:StartUploadJob"];
	/** IAM actions required for the StopRecommender API call. */
	static readonly STOP_RECOMMENDER: string[] = ["profile:StopRecommender"];
	/** IAM actions required for the StopUploadJob API call. */
	static readonly STOP_UPLOAD_JOB: string[] = ["profile:StopUploadJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["profile:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["profile:UntagResource"];
	/** IAM actions required for the UpdateCalculatedAttributeDefinition API call. */
	static readonly UPDATE_CALCULATED_ATTRIBUTE_DEFINITION: string[] = [
		"profile:UpdateCalculatedAttributeDefinition",
	];
	/** IAM actions required for the UpdateDomain API call. */
	static readonly UPDATE_DOMAIN: string[] = ["profile:UpdateDomain"];
	/** IAM actions required for the UpdateDomainLayout API call. */
	static readonly UPDATE_DOMAIN_LAYOUT: string[] = [
		"profile:UpdateDomainLayout",
	];
	/** IAM actions required for the UpdateEventTrigger API call. */
	static readonly UPDATE_EVENT_TRIGGER: string[] = [
		"profile:UpdateEventTrigger",
	];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UPDATE_PROFILE: string[] = ["profile:UpdateProfile"];
	/** IAM actions required for the UpdateRecommender API call. */
	static readonly UPDATE_RECOMMENDER: string[] = ["profile:UpdateRecommender"];
}

/**
 * Condition key constants and builders for profile.
 */
export class ProfileConditions {
	/** Condition keys applicable to the CreateRecommenderFilter action. */
	static readonly CREATE_RECOMMENDER_FILTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRecommenderSchema action. */
	static readonly CREATE_RECOMMENDER_SCHEMA_CONDITION_KEYS: string[] = [
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
