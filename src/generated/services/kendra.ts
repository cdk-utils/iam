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
	static readonly AssociateEntitiesToExperience =
		"kendra:AssociateEntitiesToExperience";
	/** [Write] kendra:AssociatePersonasToEntities */
	static readonly AssociatePersonasToEntities =
		"kendra:AssociatePersonasToEntities";
	/** [Write] kendra:BatchDeleteDocument */
	static readonly BatchDeleteDocument = "kendra:BatchDeleteDocument";
	/** [Write] kendra:BatchDeleteFeaturedResultsSet */
	static readonly BatchDeleteFeaturedResultsSet =
		"kendra:BatchDeleteFeaturedResultsSet";
	/** [Read] kendra:BatchGetDocumentStatus */
	static readonly BatchGetDocumentStatus = "kendra:BatchGetDocumentStatus";
	/** [Write] kendra:BatchPutDocument */
	static readonly BatchPutDocument = "kendra:BatchPutDocument";
	/** [Write] kendra:ClearQuerySuggestions */
	static readonly ClearQuerySuggestions = "kendra:ClearQuerySuggestions";
	/** [Write] kendra:CreateAccessControlConfiguration */
	static readonly CreateAccessControlConfiguration =
		"kendra:CreateAccessControlConfiguration";
	/** [Write] kendra:CreateDataSource */
	static readonly CreateDataSource = "kendra:CreateDataSource";
	/** [Write] kendra:CreateExperience */
	static readonly CreateExperience = "kendra:CreateExperience";
	/** [Write] kendra:CreateFaq */
	static readonly CreateFaq = "kendra:CreateFaq";
	/** [Write] kendra:CreateFeaturedResultsSet */
	static readonly CreateFeaturedResultsSet = "kendra:CreateFeaturedResultsSet";
	/** [Write] kendra:CreateIndex */
	static readonly CreateIndex = "kendra:CreateIndex";
	/** [Write] kendra:CreateQuerySuggestionsBlockList */
	static readonly CreateQuerySuggestionsBlockList =
		"kendra:CreateQuerySuggestionsBlockList";
	/** [Write] kendra:CreateThesaurus */
	static readonly CreateThesaurus = "kendra:CreateThesaurus";
	/** [Write] kendra:DeleteAccessControlConfiguration */
	static readonly DeleteAccessControlConfiguration =
		"kendra:DeleteAccessControlConfiguration";
	/** [Write] kendra:DeleteDataSource */
	static readonly DeleteDataSource = "kendra:DeleteDataSource";
	/** [Write] kendra:DeleteExperience */
	static readonly DeleteExperience = "kendra:DeleteExperience";
	/** [Write] kendra:DeleteFaq */
	static readonly DeleteFaq = "kendra:DeleteFaq";
	/** [Write] kendra:DeleteIndex */
	static readonly DeleteIndex = "kendra:DeleteIndex";
	/** [Write] kendra:DeletePrincipalMapping */
	static readonly DeletePrincipalMapping = "kendra:DeletePrincipalMapping";
	/** [Write] kendra:DeleteQuerySuggestionsBlockList */
	static readonly DeleteQuerySuggestionsBlockList =
		"kendra:DeleteQuerySuggestionsBlockList";
	/** [Write] kendra:DeleteThesaurus */
	static readonly DeleteThesaurus = "kendra:DeleteThesaurus";
	/** [Read] kendra:DescribeAccessControlConfiguration */
	static readonly DescribeAccessControlConfiguration =
		"kendra:DescribeAccessControlConfiguration";
	/** [Read] kendra:DescribeDataSource */
	static readonly DescribeDataSource = "kendra:DescribeDataSource";
	/** [Read] kendra:DescribeExperience */
	static readonly DescribeExperience = "kendra:DescribeExperience";
	/** [Read] kendra:DescribeFaq */
	static readonly DescribeFaq = "kendra:DescribeFaq";
	/** [Read] kendra:DescribeFeaturedResultsSet */
	static readonly DescribeFeaturedResultsSet =
		"kendra:DescribeFeaturedResultsSet";
	/** [Read] kendra:DescribeIndex */
	static readonly DescribeIndex = "kendra:DescribeIndex";
	/** [Read] kendra:DescribePrincipalMapping */
	static readonly DescribePrincipalMapping = "kendra:DescribePrincipalMapping";
	/** [Read] kendra:DescribeQuerySuggestionsBlockList */
	static readonly DescribeQuerySuggestionsBlockList =
		"kendra:DescribeQuerySuggestionsBlockList";
	/** [Read] kendra:DescribeQuerySuggestionsConfig */
	static readonly DescribeQuerySuggestionsConfig =
		"kendra:DescribeQuerySuggestionsConfig";
	/** [Read] kendra:DescribeThesaurus */
	static readonly DescribeThesaurus = "kendra:DescribeThesaurus";
	/** [Write] kendra:DisassociateEntitiesFromExperience */
	static readonly DisassociateEntitiesFromExperience =
		"kendra:DisassociateEntitiesFromExperience";
	/** [Write] kendra:DisassociatePersonasFromEntities */
	static readonly DisassociatePersonasFromEntities =
		"kendra:DisassociatePersonasFromEntities";
	/** [Read] kendra:GetQuerySuggestions */
	static readonly actionGetQuerySuggestions = "kendra:GetQuerySuggestions";
	/** [Read] kendra:GetSnapshots */
	static readonly actionGetSnapshots = "kendra:GetSnapshots";
	/** [List] kendra:ListAccessControlConfigurations */
	static readonly ListAccessControlConfigurations =
		"kendra:ListAccessControlConfigurations";
	/** [List] kendra:ListDataSourceSyncJobs */
	static readonly ListDataSourceSyncJobs = "kendra:ListDataSourceSyncJobs";
	/** [List] kendra:ListDataSources */
	static readonly ListDataSources = "kendra:ListDataSources";
	/** [List] kendra:ListEntityPersonas */
	static readonly ListEntityPersonas = "kendra:ListEntityPersonas";
	/** [List] kendra:ListExperienceEntities */
	static readonly ListExperienceEntities = "kendra:ListExperienceEntities";
	/** [List] kendra:ListExperiences */
	static readonly ListExperiences = "kendra:ListExperiences";
	/** [List] kendra:ListFaqs */
	static readonly ListFaqs = "kendra:ListFaqs";
	/** [List] kendra:ListFeaturedResultsSets */
	static readonly ListFeaturedResultsSets = "kendra:ListFeaturedResultsSets";
	/** [List] kendra:ListGroupsOlderThanOrderingId */
	static readonly ListGroupsOlderThanOrderingId =
		"kendra:ListGroupsOlderThanOrderingId";
	/** [List] kendra:ListIndices */
	static readonly ListIndices = "kendra:ListIndices";
	/** [List] kendra:ListQuerySuggestionsBlockLists */
	static readonly ListQuerySuggestionsBlockLists =
		"kendra:ListQuerySuggestionsBlockLists";
	/** [Read] kendra:ListTagsForResource */
	static readonly ListTagsForResource = "kendra:ListTagsForResource";
	/** [List] kendra:ListThesauri */
	static readonly ListThesauri = "kendra:ListThesauri";
	/** [Write] kendra:PutPrincipalMapping */
	static readonly PutPrincipalMapping = "kendra:PutPrincipalMapping";
	/** [Read] kendra:Query */
	static readonly Query = "kendra:Query";
	/** [Read] kendra:Retrieve */
	static readonly Retrieve = "kendra:Retrieve";
	/** [Write] kendra:StartDataSourceSyncJob */
	static readonly StartDataSourceSyncJob = "kendra:StartDataSourceSyncJob";
	/** [Write] kendra:StopDataSourceSyncJob */
	static readonly StopDataSourceSyncJob = "kendra:StopDataSourceSyncJob";
	/** [Write] kendra:SubmitFeedback */
	static readonly SubmitFeedback = "kendra:SubmitFeedback";
	/** [Tagging] kendra:TagResource */
	static readonly TagResource = "kendra:TagResource";
	/** [Tagging] kendra:UntagResource */
	static readonly UntagResource = "kendra:UntagResource";
	/** [Write] kendra:UpdateAccessControlConfiguration */
	static readonly UpdateAccessControlConfiguration =
		"kendra:UpdateAccessControlConfiguration";
	/** [Write] kendra:UpdateDataSource */
	static readonly UpdateDataSource = "kendra:UpdateDataSource";
	/** [Write] kendra:UpdateExperience */
	static readonly UpdateExperience = "kendra:UpdateExperience";
	/** [Write] kendra:UpdateFeaturedResultsSet */
	static readonly UpdateFeaturedResultsSet = "kendra:UpdateFeaturedResultsSet";
	/** [Write] kendra:UpdateIndex */
	static readonly UpdateIndex = "kendra:UpdateIndex";
	/** [Write] kendra:UpdateQuerySuggestionsBlockList */
	static readonly UpdateQuerySuggestionsBlockList =
		"kendra:UpdateQuerySuggestionsBlockList";
	/** [Write] kendra:UpdateQuerySuggestionsConfig */
	static readonly UpdateQuerySuggestionsConfig =
		"kendra:UpdateQuerySuggestionsConfig";
	/** [Write] kendra:UpdateThesaurus */
	static readonly UpdateThesaurus = "kendra:UpdateThesaurus";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		KendraActions.BatchGetDocumentStatus,
		KendraActions.DescribeAccessControlConfiguration,
		KendraActions.DescribeDataSource,
		KendraActions.DescribeExperience,
		KendraActions.DescribeFaq,
		KendraActions.DescribeFeaturedResultsSet,
		KendraActions.DescribeIndex,
		KendraActions.DescribePrincipalMapping,
		KendraActions.DescribeQuerySuggestionsBlockList,
		KendraActions.DescribeQuerySuggestionsConfig,
		KendraActions.DescribeThesaurus,
		KendraActions.actionGetQuerySuggestions,
		KendraActions.actionGetSnapshots,
		KendraActions.ListTagsForResource,
		KendraActions.Query,
		KendraActions.Retrieve,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		KendraActions.AssociateEntitiesToExperience,
		KendraActions.AssociatePersonasToEntities,
		KendraActions.BatchDeleteDocument,
		KendraActions.BatchDeleteFeaturedResultsSet,
		KendraActions.BatchPutDocument,
		KendraActions.ClearQuerySuggestions,
		KendraActions.CreateAccessControlConfiguration,
		KendraActions.CreateDataSource,
		KendraActions.CreateExperience,
		KendraActions.CreateFaq,
		KendraActions.CreateFeaturedResultsSet,
		KendraActions.CreateIndex,
		KendraActions.CreateQuerySuggestionsBlockList,
		KendraActions.CreateThesaurus,
		KendraActions.DeleteAccessControlConfiguration,
		KendraActions.DeleteDataSource,
		KendraActions.DeleteExperience,
		KendraActions.DeleteFaq,
		KendraActions.DeleteIndex,
		KendraActions.DeletePrincipalMapping,
		KendraActions.DeleteQuerySuggestionsBlockList,
		KendraActions.DeleteThesaurus,
		KendraActions.DisassociateEntitiesFromExperience,
		KendraActions.DisassociatePersonasFromEntities,
		KendraActions.PutPrincipalMapping,
		KendraActions.StartDataSourceSyncJob,
		KendraActions.StopDataSourceSyncJob,
		KendraActions.SubmitFeedback,
		KendraActions.UpdateAccessControlConfiguration,
		KendraActions.UpdateDataSource,
		KendraActions.UpdateExperience,
		KendraActions.UpdateFeaturedResultsSet,
		KendraActions.UpdateIndex,
		KendraActions.UpdateQuerySuggestionsBlockList,
		KendraActions.UpdateQuerySuggestionsConfig,
		KendraActions.UpdateThesaurus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		KendraActions.ListAccessControlConfigurations,
		KendraActions.ListDataSourceSyncJobs,
		KendraActions.ListDataSources,
		KendraActions.ListEntityPersonas,
		KendraActions.ListExperienceEntities,
		KendraActions.ListExperiences,
		KendraActions.ListFaqs,
		KendraActions.ListFeaturedResultsSets,
		KendraActions.ListGroupsOlderThanOrderingId,
		KendraActions.ListIndices,
		KendraActions.ListQuerySuggestionsBlockLists,
		KendraActions.ListThesauri,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		KendraActions.TagResource,
		KendraActions.UntagResource,
	];
}

/**
 * Properties for building a access-control-configuration ARN.
 */
export interface KendraAccessControlConfigurationArnProps {
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
}

/**
 * Parsed components of a access-control-configuration ARN.
 */
export interface KendraAccessControlConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The AccessControlConfigurationId component. */
	readonly accessControlConfigurationId: string;
}

/**
 * Properties for building a data-source ARN.
 */
export interface KendraDataSourceArnProps {
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
}

/**
 * Parsed components of a data-source ARN.
 */
export interface KendraDataSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The DataSourceId component. */
	readonly dataSourceId: string;
}

/**
 * Properties for building a experience ARN.
 */
export interface KendraExperienceArnProps {
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
}

/**
 * Parsed components of a experience ARN.
 */
export interface KendraExperienceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The ExperienceId component. */
	readonly experienceId: string;
}

/**
 * Properties for building a faq ARN.
 */
export interface KendraFaqArnProps {
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
}

/**
 * Parsed components of a faq ARN.
 */
export interface KendraFaqArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The FaqId component. */
	readonly faqId: string;
}

/**
 * Properties for building a featured-results-set ARN.
 */
export interface KendraFeaturedResultsSetArnProps {
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
}

/**
 * Parsed components of a featured-results-set ARN.
 */
export interface KendraFeaturedResultsSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The FeaturedResultsSetId component. */
	readonly featuredResultsSetId: string;
}

/**
 * Properties for building a index ARN.
 */
export interface KendraIndexArnProps {
	/** The IndexId component of the ARN. */
	readonly indexId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a index ARN.
 */
export interface KendraIndexArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
}

/**
 * Properties for building a query-suggestions-block-list ARN.
 */
export interface KendraQuerySuggestionsBlockListArnProps {
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
}

/**
 * Parsed components of a query-suggestions-block-list ARN.
 */
export interface KendraQuerySuggestionsBlockListArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The QuerySuggestionsBlockListId component. */
	readonly querySuggestionsBlockListId: string;
}

/**
 * Properties for building a thesaurus ARN.
 */
export interface KendraThesaurusArnProps {
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
}

/**
 * Parsed components of a thesaurus ARN.
 */
export interface KendraThesaurusArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexId component. */
	readonly indexId: string;
	/** The ThesaurusId component. */
	readonly thesaurusId: string;
}

const AccessControlConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)\/access-control-configuration\/(?<accessControlConfigurationId>[^:/?]+)$/;
const DataSourceArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)\/data-source\/(?<dataSourceId>[^:/?]+)$/;
const ExperienceArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)\/experience\/(?<experienceId>[^:/?]+)$/;
const FaqArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)\/faq\/(?<faqId>[^:/?]+)$/;
const FeaturedResultsSetArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)\/featured-results-set\/(?<featuredResultsSetId>[^:/?]+)$/;
const IndexArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)$/;
const QuerySuggestionsBlockListArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)\/query-suggestions-block-list\/(?<querySuggestionsBlockListId>[^:/?]+)$/;
const ThesaurusArnRegex =
	/^arn:(?<partition>[^:]+):kendra:(?<region>[^:]*):(?<account>[^:]*):index\/(?<indexId>[^:/?]+)\/thesaurus\/(?<thesaurusId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for kendra resources.
 */
export class KendraResources {
	/**
	 * Builds an ARN for the access-control-configuration resource.
	 */
	static accessControlConfiguration(
		props: KendraAccessControlConfigurationArnProps,
	): string {
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
	static parseAccessControlConfigurationArn(
		arn: string,
	): KendraAccessControlConfigurationArnComponents {
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
	static dataSource(props: KendraDataSourceArnProps): string {
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
	static parseDataSourceArn(arn: string): KendraDataSourceArnComponents {
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
	static experience(props: KendraExperienceArnProps): string {
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
	static parseExperienceArn(arn: string): KendraExperienceArnComponents {
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
	static faq(props: KendraFaqArnProps): string {
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
	static parseFaqArn(arn: string): KendraFaqArnComponents {
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
	static featuredResultsSet(props: KendraFeaturedResultsSetArnProps): string {
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
	static parseFeaturedResultsSetArn(
		arn: string,
	): KendraFeaturedResultsSetArnComponents {
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
	static index(props: KendraIndexArnProps): string {
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
	static parseIndexArn(arn: string): KendraIndexArnComponents {
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
	static querySuggestionsBlockList(
		props: KendraQuerySuggestionsBlockListArnProps,
	): string {
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
	static parseQuerySuggestionsBlockListArn(
		arn: string,
	): KendraQuerySuggestionsBlockListArnComponents {
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
	static thesaurus(props: KendraThesaurusArnProps): string {
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
	static parseThesaurusArn(arn: string): KendraThesaurusArnComponents {
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
	static readonly AssociateEntitiesToExperience: string[] = [
		"kendra:AssociateEntitiesToExperience",
	];
	/** IAM actions required for the AssociatePersonasToEntities API call. */
	static readonly AssociatePersonasToEntities: string[] = [
		"kendra:AssociatePersonasToEntities",
	];
	/** IAM actions required for the BatchDeleteDocument API call. */
	static readonly BatchDeleteDocument: string[] = [
		"kendra:BatchDeleteDocument",
	];
	/** IAM actions required for the BatchDeleteFeaturedResultsSet API call. */
	static readonly BatchDeleteFeaturedResultsSet: string[] = [
		"kendra:BatchDeleteFeaturedResultsSet",
	];
	/** IAM actions required for the BatchGetDocumentStatus API call. */
	static readonly BatchGetDocumentStatus: string[] = [
		"kendra:BatchGetDocumentStatus",
	];
	/** IAM actions required for the BatchPutDocument API call. */
	static readonly BatchPutDocument: string[] = [
		"kendra:BatchPutDocument",
		"iam:PassRole",
	];
	/** IAM actions required for the ClearQuerySuggestions API call. */
	static readonly ClearQuerySuggestions: string[] = [
		"kendra:ClearQuerySuggestions",
	];
	/** IAM actions required for the CreateAccessControlConfiguration API call. */
	static readonly CreateAccessControlConfiguration: string[] = [
		"kendra:CreateAccessControlConfiguration",
	];
	/** IAM actions required for the CreateDataSource API call. */
	static readonly CreateDataSource: string[] = [
		"kendra:CreateDataSource",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateExperience API call. */
	static readonly CreateExperience: string[] = [
		"kendra:CreateExperience",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateFaq API call. */
	static readonly CreateFaq: string[] = [
		"kendra:CreateFaq",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateFeaturedResultsSet API call. */
	static readonly CreateFeaturedResultsSet: string[] = [
		"kendra:CreateFeaturedResultsSet",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CreateIndex: string[] = [
		"kendra:CreateIndex",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateQuerySuggestionsBlockList API call. */
	static readonly CreateQuerySuggestionsBlockList: string[] = [
		"kendra:CreateQuerySuggestionsBlockList",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the CreateThesaurus API call. */
	static readonly CreateThesaurus: string[] = [
		"kendra:CreateThesaurus",
		"iam:PassRole",
		"kendra:TagResource",
	];
	/** IAM actions required for the DeleteAccessControlConfiguration API call. */
	static readonly DeleteAccessControlConfiguration: string[] = [
		"kendra:DeleteAccessControlConfiguration",
	];
	/** IAM actions required for the DeleteDataSource API call. */
	static readonly DeleteDataSource: string[] = ["kendra:DeleteDataSource"];
	/** IAM actions required for the DeleteExperience API call. */
	static readonly DeleteExperience: string[] = ["kendra:DeleteExperience"];
	/** IAM actions required for the DeleteFaq API call. */
	static readonly DeleteFaq: string[] = ["kendra:DeleteFaq"];
	/** IAM actions required for the DeleteIndex API call. */
	static readonly DeleteIndex: string[] = ["kendra:DeleteIndex"];
	/** IAM actions required for the DeletePrincipalMapping API call. */
	static readonly DeletePrincipalMapping: string[] = [
		"kendra:DeletePrincipalMapping",
	];
	/** IAM actions required for the DeleteQuerySuggestionsBlockList API call. */
	static readonly DeleteQuerySuggestionsBlockList: string[] = [
		"kendra:DeleteQuerySuggestionsBlockList",
	];
	/** IAM actions required for the DeleteThesaurus API call. */
	static readonly DeleteThesaurus: string[] = ["kendra:DeleteThesaurus"];
	/** IAM actions required for the DescribeAccessControlConfiguration API call. */
	static readonly DescribeAccessControlConfiguration: string[] = [
		"kendra:DescribeAccessControlConfiguration",
	];
	/** IAM actions required for the DescribeDataSource API call. */
	static readonly DescribeDataSource: string[] = ["kendra:DescribeDataSource"];
	/** IAM actions required for the DescribeExperience API call. */
	static readonly DescribeExperience: string[] = ["kendra:DescribeExperience"];
	/** IAM actions required for the DescribeFaq API call. */
	static readonly DescribeFaq: string[] = ["kendra:DescribeFaq"];
	/** IAM actions required for the DescribeFeaturedResultsSet API call. */
	static readonly DescribeFeaturedResultsSet: string[] = [
		"kendra:DescribeFeaturedResultsSet",
	];
	/** IAM actions required for the DescribeIndex API call. */
	static readonly DescribeIndex: string[] = ["kendra:DescribeIndex"];
	/** IAM actions required for the DescribePrincipalMapping API call. */
	static readonly DescribePrincipalMapping: string[] = [
		"kendra:DescribePrincipalMapping",
	];
	/** IAM actions required for the DescribeQuerySuggestionsBlockList API call. */
	static readonly DescribeQuerySuggestionsBlockList: string[] = [
		"kendra:DescribeQuerySuggestionsBlockList",
	];
	/** IAM actions required for the DescribeQuerySuggestionsConfig API call. */
	static readonly DescribeQuerySuggestionsConfig: string[] = [
		"kendra:DescribeQuerySuggestionsConfig",
	];
	/** IAM actions required for the DescribeThesaurus API call. */
	static readonly DescribeThesaurus: string[] = ["kendra:DescribeThesaurus"];
	/** IAM actions required for the DisassociateEntitiesFromExperience API call. */
	static readonly DisassociateEntitiesFromExperience: string[] = [
		"kendra:DisassociateEntitiesFromExperience",
	];
	/** IAM actions required for the DisassociatePersonasFromEntities API call. */
	static readonly DisassociatePersonasFromEntities: string[] = [
		"kendra:DisassociatePersonasFromEntities",
	];
	/** IAM actions required for the GetQuerySuggestions API call. */
	static readonly opGetQuerySuggestions: string[] = [
		"kendra:GetQuerySuggestions",
	];
	/** IAM actions required for the GetSnapshots API call. */
	static readonly opGetSnapshots: string[] = ["kendra:GetSnapshots"];
	/** IAM actions required for the ListAccessControlConfigurations API call. */
	static readonly ListAccessControlConfigurations: string[] = [
		"kendra:ListAccessControlConfigurations",
	];
	/** IAM actions required for the ListDataSourceSyncJobs API call. */
	static readonly ListDataSourceSyncJobs: string[] = [
		"kendra:ListDataSourceSyncJobs",
	];
	/** IAM actions required for the ListDataSources API call. */
	static readonly ListDataSources: string[] = ["kendra:ListDataSources"];
	/** IAM actions required for the ListEntityPersonas API call. */
	static readonly ListEntityPersonas: string[] = ["kendra:ListEntityPersonas"];
	/** IAM actions required for the ListExperienceEntities API call. */
	static readonly ListExperienceEntities: string[] = [
		"kendra:ListExperienceEntities",
	];
	/** IAM actions required for the ListExperiences API call. */
	static readonly ListExperiences: string[] = ["kendra:ListExperiences"];
	/** IAM actions required for the ListFaqs API call. */
	static readonly ListFaqs: string[] = ["kendra:ListFaqs"];
	/** IAM actions required for the ListFeaturedResultsSets API call. */
	static readonly ListFeaturedResultsSets: string[] = [
		"kendra:ListFeaturedResultsSets",
	];
	/** IAM actions required for the ListGroupsOlderThanOrderingId API call. */
	static readonly ListGroupsOlderThanOrderingId: string[] = [
		"kendra:ListGroupsOlderThanOrderingId",
	];
	/** IAM actions required for the ListIndices API call. */
	static readonly ListIndices: string[] = ["kendra:ListIndices"];
	/** IAM actions required for the ListQuerySuggestionsBlockLists API call. */
	static readonly ListQuerySuggestionsBlockLists: string[] = [
		"kendra:ListQuerySuggestionsBlockLists",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"kendra:ListTagsForResource",
	];
	/** IAM actions required for the ListThesauri API call. */
	static readonly ListThesauri: string[] = ["kendra:ListThesauri"];
	/** IAM actions required for the PutPrincipalMapping API call. */
	static readonly PutPrincipalMapping: string[] = [
		"iam:PassRole",
		"kendra:PutPrincipalMapping",
	];
	/** IAM actions required for the Query API call. */
	static readonly Query: string[] = ["kendra:Query"];
	/** IAM actions required for the Retrieve API call. */
	static readonly Retrieve: string[] = ["kendra:Retrieve"];
	/** IAM actions required for the StartDataSourceSyncJob API call. */
	static readonly StartDataSourceSyncJob: string[] = [
		"kendra:StartDataSourceSyncJob",
	];
	/** IAM actions required for the StopDataSourceSyncJob API call. */
	static readonly StopDataSourceSyncJob: string[] = [
		"kendra:StopDataSourceSyncJob",
	];
	/** IAM actions required for the SubmitFeedback API call. */
	static readonly SubmitFeedback: string[] = ["kendra:SubmitFeedback"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["kendra:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["kendra:UntagResource"];
	/** IAM actions required for the UpdateAccessControlConfiguration API call. */
	static readonly UpdateAccessControlConfiguration: string[] = [
		"kendra:UpdateAccessControlConfiguration",
	];
	/** IAM actions required for the UpdateDataSource API call. */
	static readonly UpdateDataSource: string[] = [
		"iam:PassRole",
		"kendra:UpdateDataSource",
	];
	/** IAM actions required for the UpdateExperience API call. */
	static readonly UpdateExperience: string[] = [
		"iam:PassRole",
		"kendra:UpdateExperience",
	];
	/** IAM actions required for the UpdateFeaturedResultsSet API call. */
	static readonly UpdateFeaturedResultsSet: string[] = [
		"kendra:UpdateFeaturedResultsSet",
	];
	/** IAM actions required for the UpdateIndex API call. */
	static readonly UpdateIndex: string[] = [
		"iam:PassRole",
		"kendra:UpdateIndex",
	];
	/** IAM actions required for the UpdateQuerySuggestionsBlockList API call. */
	static readonly UpdateQuerySuggestionsBlockList: string[] = [
		"iam:PassRole",
		"kendra:UpdateQuerySuggestionsBlockList",
	];
	/** IAM actions required for the UpdateQuerySuggestionsConfig API call. */
	static readonly UpdateQuerySuggestionsConfig: string[] = [
		"kendra:UpdateQuerySuggestionsConfig",
	];
	/** IAM actions required for the UpdateThesaurus API call. */
	static readonly UpdateThesaurus: string[] = [
		"iam:PassRole",
		"kendra:UpdateThesaurus",
	];
}

/**
 * Condition key constants and builders for kendra.
 */
export class KendraConditions {
	/** Condition keys applicable to the CreateDataSource action. */
	static readonly CreateDataSourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFaq action. */
	static readonly CreateFaqConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFeaturedResultsSet action. */
	static readonly CreateFeaturedResultsSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIndex action. */
	static readonly CreateIndexConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateQuerySuggestionsBlockList action. */
	static readonly CreateQuerySuggestionsBlockListConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateThesaurus action. */
	static readonly CreateThesaurusConditionKeys: string[] = [
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
