// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/kendra.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the kendra service.
 */
export class KendraActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "kendra";

	/** [Write] kendra:AssociateEntitiesToExperience */
	static readonly ASSOCIATE_ENTITIES_TO_EXPERIENCE =
		"kendra:AssociateEntitiesToExperience";
	/** [Write] kendra:AssociatePersonasToEntities */
	static readonly ASSOCIATE_PERSONAS_TO_ENTITIES =
		"kendra:AssociatePersonasToEntities";
	/** [Write] kendra:BatchDeleteDocument */
	static readonly BATCH_DELETE_DOCUMENT = "kendra:BatchDeleteDocument";
	/** [Write] kendra:BatchDeleteFeaturedResultsSet */
	static readonly BATCH_DELETE_FEATURED_RESULTS_SET =
		"kendra:BatchDeleteFeaturedResultsSet";
	/** [Read] kendra:BatchGetDocumentStatus */
	static readonly BATCH_GET_DOCUMENT_STATUS = "kendra:BatchGetDocumentStatus";
	/** [Write] kendra:BatchPutDocument */
	static readonly BATCH_PUT_DOCUMENT = "kendra:BatchPutDocument";
	/** [Write] kendra:ClearQuerySuggestions */
	static readonly CLEAR_QUERY_SUGGESTIONS = "kendra:ClearQuerySuggestions";
	/** [Write] kendra:CreateAccessControlConfiguration */
	static readonly CREATE_ACCESS_CONTROL_CONFIGURATION =
		"kendra:CreateAccessControlConfiguration";
	/** [Write] kendra:CreateDataSource */
	static readonly CREATE_DATA_SOURCE = "kendra:CreateDataSource";
	/** [Write] kendra:CreateExperience */
	static readonly CREATE_EXPERIENCE = "kendra:CreateExperience";
	/** [Write] kendra:CreateFaq */
	static readonly CREATE_FAQ = "kendra:CreateFaq";
	/** [Write] kendra:CreateFeaturedResultsSet */
	static readonly CREATE_FEATURED_RESULTS_SET =
		"kendra:CreateFeaturedResultsSet";
	/** [Write] kendra:CreateIndex */
	static readonly CREATE_INDEX = "kendra:CreateIndex";
	/** [Write] kendra:CreateQuerySuggestionsBlockList */
	static readonly CREATE_QUERY_SUGGESTIONS_BLOCK_LIST =
		"kendra:CreateQuerySuggestionsBlockList";
	/** [Write] kendra:CreateThesaurus */
	static readonly CREATE_THESAURUS = "kendra:CreateThesaurus";
	/** [Write] kendra:DeleteAccessControlConfiguration */
	static readonly DELETE_ACCESS_CONTROL_CONFIGURATION =
		"kendra:DeleteAccessControlConfiguration";
	/** [Write] kendra:DeleteDataSource */
	static readonly DELETE_DATA_SOURCE = "kendra:DeleteDataSource";
	/** [Write] kendra:DeleteExperience */
	static readonly DELETE_EXPERIENCE = "kendra:DeleteExperience";
	/** [Write] kendra:DeleteFaq */
	static readonly DELETE_FAQ = "kendra:DeleteFaq";
	/** [Write] kendra:DeleteIndex */
	static readonly DELETE_INDEX = "kendra:DeleteIndex";
	/** [Write] kendra:DeletePrincipalMapping */
	static readonly DELETE_PRINCIPAL_MAPPING = "kendra:DeletePrincipalMapping";
	/** [Write] kendra:DeleteQuerySuggestionsBlockList */
	static readonly DELETE_QUERY_SUGGESTIONS_BLOCK_LIST =
		"kendra:DeleteQuerySuggestionsBlockList";
	/** [Write] kendra:DeleteThesaurus */
	static readonly DELETE_THESAURUS = "kendra:DeleteThesaurus";
	/** [Read] kendra:DescribeAccessControlConfiguration */
	static readonly DESCRIBE_ACCESS_CONTROL_CONFIGURATION =
		"kendra:DescribeAccessControlConfiguration";
	/** [Read] kendra:DescribeDataSource */
	static readonly DESCRIBE_DATA_SOURCE = "kendra:DescribeDataSource";
	/** [Read] kendra:DescribeExperience */
	static readonly DESCRIBE_EXPERIENCE = "kendra:DescribeExperience";
	/** [Read] kendra:DescribeFaq */
	static readonly DESCRIBE_FAQ = "kendra:DescribeFaq";
	/** [Read] kendra:DescribeFeaturedResultsSet */
	static readonly DESCRIBE_FEATURED_RESULTS_SET =
		"kendra:DescribeFeaturedResultsSet";
	/** [Read] kendra:DescribeIndex */
	static readonly DESCRIBE_INDEX = "kendra:DescribeIndex";
	/** [Read] kendra:DescribePrincipalMapping */
	static readonly DESCRIBE_PRINCIPAL_MAPPING =
		"kendra:DescribePrincipalMapping";
	/** [Read] kendra:DescribeQuerySuggestionsBlockList */
	static readonly DESCRIBE_QUERY_SUGGESTIONS_BLOCK_LIST =
		"kendra:DescribeQuerySuggestionsBlockList";
	/** [Read] kendra:DescribeQuerySuggestionsConfig */
	static readonly DESCRIBE_QUERY_SUGGESTIONS_CONFIG =
		"kendra:DescribeQuerySuggestionsConfig";
	/** [Read] kendra:DescribeThesaurus */
	static readonly DESCRIBE_THESAURUS = "kendra:DescribeThesaurus";
	/** [Write] kendra:DisassociateEntitiesFromExperience */
	static readonly DISASSOCIATE_ENTITIES_FROM_EXPERIENCE =
		"kendra:DisassociateEntitiesFromExperience";
	/** [Write] kendra:DisassociatePersonasFromEntities */
	static readonly DISASSOCIATE_PERSONAS_FROM_ENTITIES =
		"kendra:DisassociatePersonasFromEntities";
	/** [Read] kendra:GetQuerySuggestions */
	static readonly GET_QUERY_SUGGESTIONS = "kendra:GetQuerySuggestions";
	/** [Read] kendra:GetSnapshots */
	static readonly GET_SNAPSHOTS = "kendra:GetSnapshots";
	/** [List] kendra:ListAccessControlConfigurations */
	static readonly LIST_ACCESS_CONTROL_CONFIGURATIONS =
		"kendra:ListAccessControlConfigurations";
	/** [List] kendra:ListDataSourceSyncJobs */
	static readonly LIST_DATA_SOURCE_SYNC_JOBS = "kendra:ListDataSourceSyncJobs";
	/** [List] kendra:ListDataSources */
	static readonly LIST_DATA_SOURCES = "kendra:ListDataSources";
	/** [List] kendra:ListEntityPersonas */
	static readonly LIST_ENTITY_PERSONAS = "kendra:ListEntityPersonas";
	/** [List] kendra:ListExperienceEntities */
	static readonly LIST_EXPERIENCE_ENTITIES = "kendra:ListExperienceEntities";
	/** [List] kendra:ListExperiences */
	static readonly LIST_EXPERIENCES = "kendra:ListExperiences";
	/** [List] kendra:ListFaqs */
	static readonly LIST_FAQS = "kendra:ListFaqs";
	/** [List] kendra:ListFeaturedResultsSets */
	static readonly LIST_FEATURED_RESULTS_SETS = "kendra:ListFeaturedResultsSets";
	/** [List] kendra:ListGroupsOlderThanOrderingId */
	static readonly LIST_GROUPS_OLDER_THAN_ORDERING_ID =
		"kendra:ListGroupsOlderThanOrderingId";
	/** [List] kendra:ListIndices */
	static readonly LIST_INDICES = "kendra:ListIndices";
	/** [List] kendra:ListQuerySuggestionsBlockLists */
	static readonly LIST_QUERY_SUGGESTIONS_BLOCK_LISTS =
		"kendra:ListQuerySuggestionsBlockLists";
	/** [Read] kendra:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "kendra:ListTagsForResource";
	/** [List] kendra:ListThesauri */
	static readonly LIST_THESAURI = "kendra:ListThesauri";
	/** [Write] kendra:PutPrincipalMapping */
	static readonly PUT_PRINCIPAL_MAPPING = "kendra:PutPrincipalMapping";
	/** [Read] kendra:Query */
	static readonly QUERY = "kendra:Query";
	/** [Read] kendra:Retrieve */
	static readonly RETRIEVE = "kendra:Retrieve";
	/** [Write] kendra:StartDataSourceSyncJob */
	static readonly START_DATA_SOURCE_SYNC_JOB = "kendra:StartDataSourceSyncJob";
	/** [Write] kendra:StopDataSourceSyncJob */
	static readonly STOP_DATA_SOURCE_SYNC_JOB = "kendra:StopDataSourceSyncJob";
	/** [Write] kendra:SubmitFeedback */
	static readonly SUBMIT_FEEDBACK = "kendra:SubmitFeedback";
	/** [Tagging] kendra:TagResource */
	static readonly TAG_RESOURCE = "kendra:TagResource";
	/** [Tagging] kendra:UntagResource */
	static readonly UNTAG_RESOURCE = "kendra:UntagResource";
	/** [Write] kendra:UpdateAccessControlConfiguration */
	static readonly UPDATE_ACCESS_CONTROL_CONFIGURATION =
		"kendra:UpdateAccessControlConfiguration";
	/** [Write] kendra:UpdateDataSource */
	static readonly UPDATE_DATA_SOURCE = "kendra:UpdateDataSource";
	/** [Write] kendra:UpdateExperience */
	static readonly UPDATE_EXPERIENCE = "kendra:UpdateExperience";
	/** [Write] kendra:UpdateFeaturedResultsSet */
	static readonly UPDATE_FEATURED_RESULTS_SET =
		"kendra:UpdateFeaturedResultsSet";
	/** [Write] kendra:UpdateIndex */
	static readonly UPDATE_INDEX = "kendra:UpdateIndex";
	/** [Write] kendra:UpdateQuerySuggestionsBlockList */
	static readonly UPDATE_QUERY_SUGGESTIONS_BLOCK_LIST =
		"kendra:UpdateQuerySuggestionsBlockList";
	/** [Write] kendra:UpdateQuerySuggestionsConfig */
	static readonly UPDATE_QUERY_SUGGESTIONS_CONFIG =
		"kendra:UpdateQuerySuggestionsConfig";
	/** [Write] kendra:UpdateThesaurus */
	static readonly UPDATE_THESAURUS = "kendra:UpdateThesaurus";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		KendraActions.BATCH_GET_DOCUMENT_STATUS,
		KendraActions.DESCRIBE_ACCESS_CONTROL_CONFIGURATION,
		KendraActions.DESCRIBE_DATA_SOURCE,
		KendraActions.DESCRIBE_EXPERIENCE,
		KendraActions.DESCRIBE_FAQ,
		KendraActions.DESCRIBE_FEATURED_RESULTS_SET,
		KendraActions.DESCRIBE_INDEX,
		KendraActions.DESCRIBE_PRINCIPAL_MAPPING,
		KendraActions.DESCRIBE_QUERY_SUGGESTIONS_BLOCK_LIST,
		KendraActions.DESCRIBE_QUERY_SUGGESTIONS_CONFIG,
		KendraActions.DESCRIBE_THESAURUS,
		KendraActions.GET_QUERY_SUGGESTIONS,
		KendraActions.GET_SNAPSHOTS,
		KendraActions.LIST_TAGS_FOR_RESOURCE,
		KendraActions.QUERY,
		KendraActions.RETRIEVE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		KendraActions.ASSOCIATE_ENTITIES_TO_EXPERIENCE,
		KendraActions.ASSOCIATE_PERSONAS_TO_ENTITIES,
		KendraActions.BATCH_DELETE_DOCUMENT,
		KendraActions.BATCH_DELETE_FEATURED_RESULTS_SET,
		KendraActions.BATCH_PUT_DOCUMENT,
		KendraActions.CLEAR_QUERY_SUGGESTIONS,
		KendraActions.CREATE_ACCESS_CONTROL_CONFIGURATION,
		KendraActions.CREATE_DATA_SOURCE,
		KendraActions.CREATE_EXPERIENCE,
		KendraActions.CREATE_FAQ,
		KendraActions.CREATE_FEATURED_RESULTS_SET,
		KendraActions.CREATE_INDEX,
		KendraActions.CREATE_QUERY_SUGGESTIONS_BLOCK_LIST,
		KendraActions.CREATE_THESAURUS,
		KendraActions.DELETE_ACCESS_CONTROL_CONFIGURATION,
		KendraActions.DELETE_DATA_SOURCE,
		KendraActions.DELETE_EXPERIENCE,
		KendraActions.DELETE_FAQ,
		KendraActions.DELETE_INDEX,
		KendraActions.DELETE_PRINCIPAL_MAPPING,
		KendraActions.DELETE_QUERY_SUGGESTIONS_BLOCK_LIST,
		KendraActions.DELETE_THESAURUS,
		KendraActions.DISASSOCIATE_ENTITIES_FROM_EXPERIENCE,
		KendraActions.DISASSOCIATE_PERSONAS_FROM_ENTITIES,
		KendraActions.PUT_PRINCIPAL_MAPPING,
		KendraActions.START_DATA_SOURCE_SYNC_JOB,
		KendraActions.STOP_DATA_SOURCE_SYNC_JOB,
		KendraActions.SUBMIT_FEEDBACK,
		KendraActions.UPDATE_ACCESS_CONTROL_CONFIGURATION,
		KendraActions.UPDATE_DATA_SOURCE,
		KendraActions.UPDATE_EXPERIENCE,
		KendraActions.UPDATE_FEATURED_RESULTS_SET,
		KendraActions.UPDATE_INDEX,
		KendraActions.UPDATE_QUERY_SUGGESTIONS_BLOCK_LIST,
		KendraActions.UPDATE_QUERY_SUGGESTIONS_CONFIG,
		KendraActions.UPDATE_THESAURUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		KendraActions.LIST_ACCESS_CONTROL_CONFIGURATIONS,
		KendraActions.LIST_DATA_SOURCE_SYNC_JOBS,
		KendraActions.LIST_DATA_SOURCES,
		KendraActions.LIST_ENTITY_PERSONAS,
		KendraActions.LIST_EXPERIENCE_ENTITIES,
		KendraActions.LIST_EXPERIENCES,
		KendraActions.LIST_FAQS,
		KendraActions.LIST_FEATURED_RESULTS_SETS,
		KendraActions.LIST_GROUPS_OLDER_THAN_ORDERING_ID,
		KendraActions.LIST_INDICES,
		KendraActions.LIST_QUERY_SUGGESTIONS_BLOCK_LISTS,
		KendraActions.LIST_THESAURI,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		KendraActions.TAG_RESOURCE,
		KendraActions.UNTAG_RESOURCE,
	];
}

const AccessControlConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)/access-control-configuration/(?<accessControlConfigurationId>[^:/?]+)$",
);
const DataSourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)/data-source/(?<dataSourceId>[^:/?]+)$",
);
const ExperienceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)/experience/(?<experienceId>[^:/?]+)$",
);
const FaqArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)/faq/(?<faqId>[^:/?]+)$",
);
const FeaturedResultsSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)/featured-results-set/(?<featuredResultsSetId>[^:/?]+)$",
);
const IndexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)$",
);
const QuerySuggestionsBlockListArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)/query-suggestions-block-list/(?<querySuggestionsBlockListId>[^:/?]+)$",
);
const ThesaurusArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index/(?<indexId>[^:/?]+)/thesaurus/(?<thesaurusId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for kendra resources.
 */
export class KendraResources {
	/**
	 * Builds an ARN for the access-control-configuration resource.
	 */
	static accessControlConfiguration(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** The AccessControlConfigurationId component of the ARN. */
		readonly accessControlConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}/access-control-configuration/${props.accessControlConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-control-configuration resource.
	 */
	static isValidAccessControlConfigurationArn(arn: string): boolean {
		return AccessControlConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a access-control-configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessControlConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
		accessControlConfigurationId: string;
	} {
		const match = AccessControlConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-control-configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
			accessControlConfigurationId: match.groups!.accessControlConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the data-source resource.
	 */
	static dataSource(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** The DataSourceId component of the ARN. */
		readonly dataSourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}/data-source/${props.dataSourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-source resource.
	 */
	static isValidDataSourceArn(arn: string): boolean {
		return DataSourceArnRegex.test(arn);
	}

	/**
	 * Parses a data-source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
		dataSourceId: string;
	} {
		const match = DataSourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
			dataSourceId: match.groups!.dataSourceId,
		};
	}

	/**
	 * Builds an ARN for the experience resource.
	 */
	static experience(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** The ExperienceId component of the ARN. */
		readonly experienceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}/experience/${props.experienceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the experience resource.
	 */
	static isValidExperienceArn(arn: string): boolean {
		return ExperienceArnRegex.test(arn);
	}

	/**
	 * Parses a experience ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseExperienceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
		experienceId: string;
	} {
		const match = ExperienceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid experience ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
			experienceId: match.groups!.experienceId,
		};
	}

	/**
	 * Builds an ARN for the faq resource.
	 */
	static faq(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** The FaqId component of the ARN. */
		readonly faqId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}/faq/${props.faqId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the faq resource.
	 */
	static isValidFaqArn(arn: string): boolean {
		return FaqArnRegex.test(arn);
	}

	/**
	 * Parses a faq ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFaqArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
		faqId: string;
	} {
		const match = FaqArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid faq ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
			faqId: match.groups!.faqId,
		};
	}

	/**
	 * Builds an ARN for the featured-results-set resource.
	 */
	static featuredResultsSet(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** The FeaturedResultsSetId component of the ARN. */
		readonly featuredResultsSetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}/featured-results-set/${props.featuredResultsSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the featured-results-set resource.
	 */
	static isValidFeaturedResultsSetArn(arn: string): boolean {
		return FeaturedResultsSetArnRegex.test(arn);
	}

	/**
	 * Parses a featured-results-set ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFeaturedResultsSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
		featuredResultsSetId: string;
	} {
		const match = FeaturedResultsSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid featured-results-set ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
			featuredResultsSetId: match.groups!.featuredResultsSetId,
		};
	}

	/**
	 * Builds an ARN for the index resource.
	 */
	static index(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the index resource.
	 */
	static isValidIndexArn(arn: string): boolean {
		return IndexArnRegex.test(arn);
	}

	/**
	 * Parses a index ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIndexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
	} {
		const match = IndexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid index ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
		};
	}

	/**
	 * Builds an ARN for the query-suggestions-block-list resource.
	 */
	static querySuggestionsBlockList(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** The QuerySuggestionsBlockListId component of the ARN. */
		readonly querySuggestionsBlockListId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}/query-suggestions-block-list/${props.querySuggestionsBlockListId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the query-suggestions-block-list resource.
	 */
	static isValidQuerySuggestionsBlockListArn(arn: string): boolean {
		return QuerySuggestionsBlockListArnRegex.test(arn);
	}

	/**
	 * Parses a query-suggestions-block-list ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQuerySuggestionsBlockListArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
		querySuggestionsBlockListId: string;
	} {
		const match = QuerySuggestionsBlockListArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid query-suggestions-block-list ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
			querySuggestionsBlockListId: match.groups!.querySuggestionsBlockListId,
		};
	}

	/**
	 * Builds an ARN for the thesaurus resource.
	 */
	static thesaurus(props: {
		/** The IndexId component of the ARN. */
		readonly indexId: string;
		/** The ThesaurusId component of the ARN. */
		readonly thesaurusId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kendra:${props.region ?? "*"}:${props.account ?? "*"}:index/${props.indexId}/thesaurus/${props.thesaurusId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the thesaurus resource.
	 */
	static isValidThesaurusArn(arn: string): boolean {
		return ThesaurusArnRegex.test(arn);
	}

	/**
	 * Parses a thesaurus ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThesaurusArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexId: string;
		thesaurusId: string;
	} {
		const match = ThesaurusArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid thesaurus ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexId: match.groups!.indexId,
			thesaurusId: match.groups!.thesaurusId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for kendra.
 */
export class KendraOperations {
	/** IAM actions required for the AssociateEntitiesToExperience API call. */
	static readonly ASSOCIATE_ENTITIES_TO_EXPERIENCE: string[] = [
		"kendra:AssociateEntitiesToExperience",
	];
	/** IAM actions required for the AssociatePersonasToEntities API call. */
	static readonly ASSOCIATE_PERSONAS_TO_ENTITIES: string[] = [
		"kendra:AssociatePersonasToEntities",
	];
	/** IAM actions required for the BatchDeleteDocument API call. */
	static readonly BATCH_DELETE_DOCUMENT: string[] = [
		"kendra:BatchDeleteDocument",
	];
	/** IAM actions required for the BatchDeleteFeaturedResultsSet API call. */
	static readonly BATCH_DELETE_FEATURED_RESULTS_SET: string[] = [
		"kendra:BatchDeleteFeaturedResultsSet",
	];
	/** IAM actions required for the BatchGetDocumentStatus API call. */
	static readonly BATCH_GET_DOCUMENT_STATUS: string[] = [
		"kendra:BatchGetDocumentStatus",
	];
	/** IAM actions required for the BatchPutDocument API call. */
	static readonly BATCH_PUT_DOCUMENT: string[] = [
		"kendra:BatchPutDocument",
		"iam:PassRole",
	];
	/** IAM actions required for the ClearQuerySuggestions API call. */
	static readonly CLEAR_QUERY_SUGGESTIONS: string[] = [
		"kendra:ClearQuerySuggestions",
	];
	/** IAM actions required for the CreateAccessControlConfiguration API call. */
	static readonly CREATE_ACCESS_CONTROL_CONFIGURATION: string[] = [
		"kendra:CreateAccessControlConfiguration",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CREATE_DATA_SOURCE: string[] = [
		"kendra:CreateDataSource",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateExperience API call. */
	static readonly CREATE_EXPERIENCE: string[] = [
		"kendra:CreateExperience",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateFaq API call. */
	static readonly CREATE_FAQ: string[] = [
		"kendra:CreateFaq",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateFeaturedResultsSet API call. */
	static readonly CREATE_FEATURED_RESULTS_SET: string[] = [
		"kendra:CreateFeaturedResultsSet",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CREATE_INDEX: string[] = [
		"kendra:CreateIndex",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateQuerySuggestionsBlockList API call. */
	static readonly CREATE_QUERY_SUGGESTIONS_BLOCK_LIST: string[] = [
		"kendra:CreateQuerySuggestionsBlockList",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateThesaurus API call. */
	static readonly CREATE_THESAURUS: string[] = [
		"kendra:CreateThesaurus",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the DeleteAccessControlConfiguration API call. */
	static readonly DELETE_ACCESS_CONTROL_CONFIGURATION: string[] = [
		"kendra:DeleteAccessControlConfiguration",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DELETE_DATA_SOURCE: string[] = ["kendra:DeleteDataSource"];
	/** IAM actions required for the DeleteExperience API call. */
	static readonly DELETE_EXPERIENCE: string[] = ["kendra:DeleteExperience"];
	/** IAM actions required for the DeleteFaq API call. */
	static readonly DELETE_FAQ: string[] = ["kendra:DeleteFaq"];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DELETE_INDEX: string[] = ["kendra:DeleteIndex"];
	/** IAM actions required for the DeletePrincipalMapping API call. */
	static readonly DELETE_PRINCIPAL_MAPPING: string[] = [
		"kendra:DeletePrincipalMapping",
	];
	/** IAM actions required for the DeleteQuerySuggestionsBlockList API call. */
	static readonly DELETE_QUERY_SUGGESTIONS_BLOCK_LIST: string[] = [
		"kendra:DeleteQuerySuggestionsBlockList",
	];
	/** IAM actions required for the DeleteThesaurus API call. */
	static readonly DELETE_THESAURUS: string[] = ["kendra:DeleteThesaurus"];
	/** IAM actions required for the DescribeAccessControlConfiguration API call. */
	static readonly DESCRIBE_ACCESS_CONTROL_CONFIGURATION: string[] = [
		"kendra:DescribeAccessControlConfiguration",
	];
	/** IAM actions required for the DescribeDataSource API call. */
	static readonly DESCRIBE_DATA_SOURCE: string[] = [
		"kendra:DescribeDataSource",
	];
	/** IAM actions required for the DescribeExperience API call. */
	static readonly DESCRIBE_EXPERIENCE: string[] = ["kendra:DescribeExperience"];
	/** IAM actions required for the DescribeFaq API call. */
	static readonly DESCRIBE_FAQ: string[] = ["kendra:DescribeFaq"];
	/** IAM actions required for the DescribeFeaturedResultsSet API call. */
	static readonly DESCRIBE_FEATURED_RESULTS_SET: string[] = [
		"kendra:DescribeFeaturedResultsSet",
	];
	/** IAM actions required for the DescribeIndex API call. */
	static readonly DESCRIBE_INDEX: string[] = ["kendra:DescribeIndex"];
	/** IAM actions required for the DescribePrincipalMapping API call. */
	static readonly DESCRIBE_PRINCIPAL_MAPPING: string[] = [
		"kendra:DescribePrincipalMapping",
	];
	/** IAM actions required for the DescribeQuerySuggestionsBlockList API call. */
	static readonly DESCRIBE_QUERY_SUGGESTIONS_BLOCK_LIST: string[] = [
		"kendra:DescribeQuerySuggestionsBlockList",
	];
	/** IAM actions required for the DescribeQuerySuggestionsConfig API call. */
	static readonly DESCRIBE_QUERY_SUGGESTIONS_CONFIG: string[] = [
		"kendra:DescribeQuerySuggestionsConfig",
	];
	/** IAM actions required for the DescribeThesaurus API call. */
	static readonly DESCRIBE_THESAURUS: string[] = ["kendra:DescribeThesaurus"];
	/** IAM actions required for the DisassociateEntitiesFromExperience API call. */
	static readonly DISASSOCIATE_ENTITIES_FROM_EXPERIENCE: string[] = [
		"kendra:DisassociateEntitiesFromExperience",
	];
	/** IAM actions required for the DisassociatePersonasFromEntities API call. */
	static readonly DISASSOCIATE_PERSONAS_FROM_ENTITIES: string[] = [
		"kendra:DisassociatePersonasFromEntities",
	];
	/** IAM actions required for the GetQuerySuggestions API call. */
	static readonly GET_QUERY_SUGGESTIONS: string[] = [
		"kendra:GetQuerySuggestions",
	];
	/** IAM actions required for the GetSnapshots API call. */
	static readonly GET_SNAPSHOTS: string[] = ["kendra:GetSnapshots"];
	/** IAM actions required for the ListAccessControlConfigurations API call. */
	static readonly LIST_ACCESS_CONTROL_CONFIGURATIONS: string[] = [
		"kendra:ListAccessControlConfigurations",
	];
	/** IAM actions required for the ListDataSourceSyncJobs API call. */
	static readonly LIST_DATA_SOURCE_SYNC_JOBS: string[] = [
		"kendra:ListDataSourceSyncJobs",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly LIST_DATA_SOURCES: string[] = ["kendra:ListDataSources"];
	/** IAM actions required for the ListEntityPersonas API call. */
	static readonly LIST_ENTITY_PERSONAS: string[] = [
		"kendra:ListEntityPersonas",
	];
	/** IAM actions required for the ListExperienceEntities API call. */
	static readonly LIST_EXPERIENCE_ENTITIES: string[] = [
		"kendra:ListExperienceEntities",
	];
	/** IAM actions required for the ListExperiences API call. */
	static readonly LIST_EXPERIENCES: string[] = ["kendra:ListExperiences"];
	/** IAM actions required for the ListFaqs API call. */
	static readonly LIST_FAQS: string[] = ["kendra:ListFaqs"];
	/** IAM actions required for the ListFeaturedResultsSets API call. */
	static readonly LIST_FEATURED_RESULTS_SETS: string[] = [
		"kendra:ListFeaturedResultsSets",
	];
	/** IAM actions required for the ListGroupsOlderThanOrderingId API call. */
	static readonly LIST_GROUPS_OLDER_THAN_ORDERING_ID: string[] = [
		"kendra:ListGroupsOlderThanOrderingId",
	];
	/** IAM actions required for the ListIndices API call. */
	static readonly LIST_INDICES: string[] = ["kendra:ListIndices"];
	/** IAM actions required for the ListQuerySuggestionsBlockLists API call. */
	static readonly LIST_QUERY_SUGGESTIONS_BLOCK_LISTS: string[] = [
		"kendra:ListQuerySuggestionsBlockLists",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"kendra:ListTagsForResource",
	];
	/** IAM actions required for the ListThesauri API call. */
	static readonly LIST_THESAURI: string[] = ["kendra:ListThesauri"];
	/** IAM actions required for the PutPrincipalMapping API call. */
	static readonly PUT_PRINCIPAL_MAPPING: string[] = [
		"iam:PassRole",
		"kendra:PutPrincipalMapping",
	];
	/** IAM actions required for the Query API call. */
	static readonly QUERY: string[] = ["kendra:Query"];
	/** IAM actions required for the Retrieve API call. */
	static readonly RETRIEVE: string[] = ["kendra:Retrieve"];
	/** IAM actions required for the StartDataSourceSyncJob API call. */
	static readonly START_DATA_SOURCE_SYNC_JOB: string[] = [
		"kendra:StartDataSourceSyncJob",
	];
	/** IAM actions required for the StopDataSourceSyncJob API call. */
	static readonly STOP_DATA_SOURCE_SYNC_JOB: string[] = [
		"kendra:StopDataSourceSyncJob",
	];
	/** IAM actions required for the SubmitFeedback API call. */
	static readonly SUBMIT_FEEDBACK: string[] = ["kendra:SubmitFeedback"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["kendra:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["kendra:UntagResource"];
	/** IAM actions required for the UpdateAccessControlConfiguration API call. */
	static readonly UPDATE_ACCESS_CONTROL_CONFIGURATION: string[] = [
		"kendra:UpdateAccessControlConfiguration",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UPDATE_DATA_SOURCE: string[] = [
		"iam:PassRole",
		"kendra:UpdateDataSource",
	];
	/** IAM actions required for the UpdateExperience API call. */
	static readonly UPDATE_EXPERIENCE: string[] = [
		"iam:PassRole",
		"kendra:UpdateExperience",
	];
	/** IAM actions required for the UpdateFeaturedResultsSet API call. */
	static readonly UPDATE_FEATURED_RESULTS_SET: string[] = [
		"kendra:UpdateFeaturedResultsSet",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UPDATE_INDEX: string[] = [
		"iam:PassRole",
		"kendra:UpdateIndex",
	];
	/** IAM actions required for the UpdateQuerySuggestionsBlockList API call. */
	static readonly UPDATE_QUERY_SUGGESTIONS_BLOCK_LIST: string[] = [
		"iam:PassRole",
		"kendra:UpdateQuerySuggestionsBlockList",
	];
	/** IAM actions required for the UpdateQuerySuggestionsConfig API call. */
	static readonly UPDATE_QUERY_SUGGESTIONS_CONFIG: string[] = [
		"kendra:UpdateQuerySuggestionsConfig",
	];
	/** IAM actions required for the UpdateThesaurus API call. */
	static readonly UPDATE_THESAURUS: string[] = [
		"iam:PassRole",
		"kendra:UpdateThesaurus",
	];
}

/**
 * Condition key constants and builders for kendra.
 */
export class KendraConditions {
	/** Condition keys applicable to the CreateDataSource action. */
	static readonly CREATE_DATA_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFaq action. */
	static readonly CREATE_FAQ_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeaturedResultsSet action. */
	static readonly CREATE_FEATURED_RESULTS_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CREATE_INDEX_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQuerySuggestionsBlockList action. */
	static readonly CREATE_QUERY_SUGGESTIONS_BLOCK_LIST_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateThesaurus action. */
	static readonly CREATE_THESAURUS_CONDITION_KEYS: string[] = [
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
