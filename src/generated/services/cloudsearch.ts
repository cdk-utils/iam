// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudsearch.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudsearch service.
 */
export class CloudSearchActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudsearch";

	/** [Tagging] cloudsearch:AddTags */
	static readonly ADD_TAGS = "cloudsearch:AddTags";
	/** [Write] cloudsearch:BuildSuggesters */
	static readonly BUILD_SUGGESTERS = "cloudsearch:BuildSuggesters";
	/** [Write] cloudsearch:CreateDomain */
	static readonly CREATE_DOMAIN = "cloudsearch:CreateDomain";
	/** [Write] cloudsearch:DefineAnalysisScheme */
	static readonly DEFINE_ANALYSIS_SCHEME = "cloudsearch:DefineAnalysisScheme";
	/** [Write] cloudsearch:DefineExpression */
	static readonly DEFINE_EXPRESSION = "cloudsearch:DefineExpression";
	/** [Write] cloudsearch:DefineIndexField */
	static readonly DEFINE_INDEX_FIELD = "cloudsearch:DefineIndexField";
	/** [Write] cloudsearch:DefineSuggester */
	static readonly DEFINE_SUGGESTER = "cloudsearch:DefineSuggester";
	/** [Write] cloudsearch:DeleteAnalysisScheme */
	static readonly DELETE_ANALYSIS_SCHEME = "cloudsearch:DeleteAnalysisScheme";
	/** [Write] cloudsearch:DeleteDomain */
	static readonly DELETE_DOMAIN = "cloudsearch:DeleteDomain";
	/** [Write] cloudsearch:DeleteExpression */
	static readonly DELETE_EXPRESSION = "cloudsearch:DeleteExpression";
	/** [Write] cloudsearch:DeleteIndexField */
	static readonly DELETE_INDEX_FIELD = "cloudsearch:DeleteIndexField";
	/** [Write] cloudsearch:DeleteSuggester */
	static readonly DELETE_SUGGESTER = "cloudsearch:DeleteSuggester";
	/** [Read] cloudsearch:DescribeAnalysisSchemes */
	static readonly DESCRIBE_ANALYSIS_SCHEMES =
		"cloudsearch:DescribeAnalysisSchemes";
	/** [Read] cloudsearch:DescribeAvailabilityOptions */
	static readonly DESCRIBE_AVAILABILITY_OPTIONS =
		"cloudsearch:DescribeAvailabilityOptions";
	/** [Read] cloudsearch:DescribeDomainEndpointOptions */
	static readonly DESCRIBE_DOMAIN_ENDPOINT_OPTIONS =
		"cloudsearch:DescribeDomainEndpointOptions";
	/** [List] cloudsearch:DescribeDomains */
	static readonly DESCRIBE_DOMAINS = "cloudsearch:DescribeDomains";
	/** [Read] cloudsearch:DescribeExpressions */
	static readonly DESCRIBE_EXPRESSIONS = "cloudsearch:DescribeExpressions";
	/** [Read] cloudsearch:DescribeIndexFields */
	static readonly DESCRIBE_INDEX_FIELDS = "cloudsearch:DescribeIndexFields";
	/** [Read] cloudsearch:DescribeScalingParameters */
	static readonly DESCRIBE_SCALING_PARAMETERS =
		"cloudsearch:DescribeScalingParameters";
	/** [Read] cloudsearch:DescribeServiceAccessPolicies */
	static readonly DESCRIBE_SERVICE_ACCESS_POLICIES =
		"cloudsearch:DescribeServiceAccessPolicies";
	/** [Read] cloudsearch:DescribeSuggesters */
	static readonly DESCRIBE_SUGGESTERS = "cloudsearch:DescribeSuggesters";
	/** [Write] cloudsearch:IndexDocuments */
	static readonly INDEX_DOCUMENTS = "cloudsearch:IndexDocuments";
	/** [List] cloudsearch:ListDomainNames */
	static readonly LIST_DOMAIN_NAMES = "cloudsearch:ListDomainNames";
	/** [Read] cloudsearch:ListTags */
	static readonly LIST_TAGS = "cloudsearch:ListTags";
	/** [Tagging] cloudsearch:RemoveTags */
	static readonly REMOVE_TAGS = "cloudsearch:RemoveTags";
	/** [Write] cloudsearch:UpdateAvailabilityOptions */
	static readonly UPDATE_AVAILABILITY_OPTIONS =
		"cloudsearch:UpdateAvailabilityOptions";
	/** [Write] cloudsearch:UpdateDomainEndpointOptions */
	static readonly UPDATE_DOMAIN_ENDPOINT_OPTIONS =
		"cloudsearch:UpdateDomainEndpointOptions";
	/** [Write] cloudsearch:UpdateScalingParameters */
	static readonly UPDATE_SCALING_PARAMETERS =
		"cloudsearch:UpdateScalingParameters";
	/** [PermissionManagement] cloudsearch:UpdateServiceAccessPolicies */
	static readonly UPDATE_SERVICE_ACCESS_POLICIES =
		"cloudsearch:UpdateServiceAccessPolicies";
	/** [Write] cloudsearch:document */
	static readonly DOCUMENT = "cloudsearch:document";
	/** [Read] cloudsearch:search */
	static readonly SEARCH = "cloudsearch:search";
	/** [Read] cloudsearch:suggest */
	static readonly SUGGEST = "cloudsearch:suggest";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CloudSearchActions.DESCRIBE_ANALYSIS_SCHEMES,
		CloudSearchActions.DESCRIBE_AVAILABILITY_OPTIONS,
		CloudSearchActions.DESCRIBE_DOMAIN_ENDPOINT_OPTIONS,
		CloudSearchActions.DESCRIBE_EXPRESSIONS,
		CloudSearchActions.DESCRIBE_INDEX_FIELDS,
		CloudSearchActions.DESCRIBE_SCALING_PARAMETERS,
		CloudSearchActions.DESCRIBE_SERVICE_ACCESS_POLICIES,
		CloudSearchActions.DESCRIBE_SUGGESTERS,
		CloudSearchActions.LIST_TAGS,
		CloudSearchActions.SEARCH,
		CloudSearchActions.SUGGEST,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CloudSearchActions.BUILD_SUGGESTERS,
		CloudSearchActions.CREATE_DOMAIN,
		CloudSearchActions.DEFINE_ANALYSIS_SCHEME,
		CloudSearchActions.DEFINE_EXPRESSION,
		CloudSearchActions.DEFINE_INDEX_FIELD,
		CloudSearchActions.DEFINE_SUGGESTER,
		CloudSearchActions.DELETE_ANALYSIS_SCHEME,
		CloudSearchActions.DELETE_DOMAIN,
		CloudSearchActions.DELETE_EXPRESSION,
		CloudSearchActions.DELETE_INDEX_FIELD,
		CloudSearchActions.DELETE_SUGGESTER,
		CloudSearchActions.INDEX_DOCUMENTS,
		CloudSearchActions.UPDATE_AVAILABILITY_OPTIONS,
		CloudSearchActions.UPDATE_DOMAIN_ENDPOINT_OPTIONS,
		CloudSearchActions.UPDATE_SCALING_PARAMETERS,
		CloudSearchActions.DOCUMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CloudSearchActions.DESCRIBE_DOMAINS,
		CloudSearchActions.LIST_DOMAIN_NAMES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		CloudSearchActions.UPDATE_SERVICE_ACCESS_POLICIES,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CloudSearchActions.ADD_TAGS,
		CloudSearchActions.REMOVE_TAGS,
	];
}

const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudsearch:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloudsearch resources.
 */
export class CloudSearchResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainName component of the ARN. */
		readonly domainName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudsearch:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainName: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainName: match.groups!.domainName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudsearch.
 */
export class CloudSearchOperations {
	/** IAM actions required for the BuildSuggesters API call. */
	static readonly BUILD_SUGGESTERS: string[] = ["cloudsearch:BuildSuggesters"];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = ["cloudsearch:CreateDomain"];
	/** IAM actions required for the DefineAnalysisScheme API call. */
	static readonly DEFINE_ANALYSIS_SCHEME: string[] = [
		"cloudsearch:DefineAnalysisScheme",
	];
	/** IAM actions required for the DefineExpression API call. */
	static readonly DEFINE_EXPRESSION: string[] = [
		"cloudsearch:DefineExpression",
	];
	/** IAM actions required for the DefineIndexField API call. */
	static readonly DEFINE_INDEX_FIELD: string[] = [
		"cloudsearch:DefineIndexField",
	];
	/** IAM actions required for the DefineRankExpression API call. */
	static readonly DEFINE_RANK_EXPRESSION: string[] = [];
	/** IAM actions required for the DefineSuggester API call. */
	static readonly DEFINE_SUGGESTER: string[] = ["cloudsearch:DefineSuggester"];
	/** IAM actions required for the DeleteAnalysisScheme API call. */
	static readonly DELETE_ANALYSIS_SCHEME: string[] = [
		"cloudsearch:DeleteAnalysisScheme",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["cloudsearch:DeleteDomain"];
	/** IAM actions required for the DeleteExpression API call. */
	static readonly DELETE_EXPRESSION: string[] = [
		"cloudsearch:DeleteExpression",
	];
	/** IAM actions required for the DeleteIndexField API call. */
	static readonly DELETE_INDEX_FIELD: string[] = [
		"cloudsearch:DeleteIndexField",
	];
	/** IAM actions required for the DeleteRankExpression API call. */
	static readonly DELETE_RANK_EXPRESSION: string[] = [];
	/** IAM actions required for the DeleteSuggester API call. */
	static readonly DELETE_SUGGESTER: string[] = ["cloudsearch:DeleteSuggester"];
	/** IAM actions required for the DescribeAnalysisSchemes API call. */
	static readonly DESCRIBE_ANALYSIS_SCHEMES: string[] = [
		"cloudsearch:DescribeAnalysisSchemes",
	];
	/** IAM actions required for the DescribeAvailabilityOptions API call. */
	static readonly DESCRIBE_AVAILABILITY_OPTIONS: string[] = [
		"cloudsearch:DescribeAvailabilityOptions",
	];
	/** IAM actions required for the DescribeDefaultSearchField API call. */
	static readonly DESCRIBE_DEFAULT_SEARCH_FIELD: string[] = [];
	/** IAM actions required for the DescribeDomainEndpointOptions API call. */
	static readonly DESCRIBE_DOMAIN_ENDPOINT_OPTIONS: string[] = [
		"cloudsearch:DescribeDomainEndpointOptions",
	];
	/** IAM actions required for the DescribeDomains API call. */
	static readonly DESCRIBE_DOMAINS: string[] = ["cloudsearch:DescribeDomains"];
	/** IAM actions required for the DescribeExpressions API call. */
	static readonly DESCRIBE_EXPRESSIONS: string[] = [
		"cloudsearch:DescribeExpressions",
	];
	/** IAM actions required for the DescribeIndexFields API call. */
	static readonly DESCRIBE_INDEX_FIELDS: string[] = [
		"cloudsearch:DescribeIndexFields",
	];
	/** IAM actions required for the DescribeRankExpressions API call. */
	static readonly DESCRIBE_RANK_EXPRESSIONS: string[] = [];
	/** IAM actions required for the DescribeScalingParameters API call. */
	static readonly DESCRIBE_SCALING_PARAMETERS: string[] = [
		"cloudsearch:DescribeScalingParameters",
	];
	/** IAM actions required for the DescribeServiceAccessPolicies API call. */
	static readonly DESCRIBE_SERVICE_ACCESS_POLICIES: string[] = [
		"cloudsearch:DescribeServiceAccessPolicies",
	];
	/** IAM actions required for the DescribeStemmingOptions API call. */
	static readonly DESCRIBE_STEMMING_OPTIONS: string[] = [];
	/** IAM actions required for the DescribeStopwordOptions API call. */
	static readonly DESCRIBE_STOPWORD_OPTIONS: string[] = [];
	/** IAM actions required for the DescribeSuggesters API call. */
	static readonly DESCRIBE_SUGGESTERS: string[] = [
		"cloudsearch:DescribeSuggesters",
	];
	/** IAM actions required for the DescribeSynonymOptions API call. */
	static readonly DESCRIBE_SYNONYM_OPTIONS: string[] = [];
	/** IAM actions required for the IndexDocuments API call. */
	static readonly INDEX_DOCUMENTS: string[] = ["cloudsearch:IndexDocuments"];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly LIST_DOMAIN_NAMES: string[] = ["cloudsearch:ListDomainNames"];
	/** IAM actions required for the Search API call. */
	static readonly SEARCH: string[] = [];
	/** IAM actions required for the Suggest API call. */
	static readonly SUGGEST: string[] = [];
	/** IAM actions required for the UpdateAvailabilityOptions API call. */
	static readonly UPDATE_AVAILABILITY_OPTIONS: string[] = [
		"cloudsearch:UpdateAvailabilityOptions",
	];
	/** IAM actions required for the UpdateDefaultSearchField API call. */
	static readonly UPDATE_DEFAULT_SEARCH_FIELD: string[] = [];
	/** IAM actions required for the UpdateDomainEndpointOptions API call. */
	static readonly UPDATE_DOMAIN_ENDPOINT_OPTIONS: string[] = [
		"cloudsearch:UpdateDomainEndpointOptions",
	];
	/** IAM actions required for the UpdateScalingParameters API call. */
	static readonly UPDATE_SCALING_PARAMETERS: string[] = [
		"cloudsearch:UpdateScalingParameters",
	];
	/** IAM actions required for the UpdateServiceAccessPolicies API call. */
	static readonly UPDATE_SERVICE_ACCESS_POLICIES: string[] = [
		"cloudsearch:UpdateServiceAccessPolicies",
	];
	/** IAM actions required for the UpdateStemmingOptions API call. */
	static readonly UPDATE_STEMMING_OPTIONS: string[] = [];
	/** IAM actions required for the UpdateStopwordOptions API call. */
	static readonly UPDATE_STOPWORD_OPTIONS: string[] = [];
	/** IAM actions required for the UpdateSynonymOptions API call. */
	static readonly UPDATE_SYNONYM_OPTIONS: string[] = [];
	/** IAM actions required for the UploadDocuments API call. */
	static readonly UPLOAD_DOCUMENTS: string[] = [];
}
