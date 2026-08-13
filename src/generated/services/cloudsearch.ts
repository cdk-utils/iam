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
	static readonly AddTags = "cloudsearch:AddTags";
	/** [Write] cloudsearch:BuildSuggesters */
	static readonly BuildSuggesters = "cloudsearch:BuildSuggesters";
	/** [Write] cloudsearch:CreateDomain */
	static readonly CreateDomain = "cloudsearch:CreateDomain";
	/** [Write] cloudsearch:DefineAnalysisScheme */
	static readonly DefineAnalysisScheme = "cloudsearch:DefineAnalysisScheme";
	/** [Write] cloudsearch:DefineExpression */
	static readonly DefineExpression = "cloudsearch:DefineExpression";
	/** [Write] cloudsearch:DefineIndexField */
	static readonly DefineIndexField = "cloudsearch:DefineIndexField";
	/** [Write] cloudsearch:DefineSuggester */
	static readonly DefineSuggester = "cloudsearch:DefineSuggester";
	/** [Write] cloudsearch:DeleteAnalysisScheme */
	static readonly DeleteAnalysisScheme = "cloudsearch:DeleteAnalysisScheme";
	/** [Write] cloudsearch:DeleteDomain */
	static readonly DeleteDomain = "cloudsearch:DeleteDomain";
	/** [Write] cloudsearch:DeleteExpression */
	static readonly DeleteExpression = "cloudsearch:DeleteExpression";
	/** [Write] cloudsearch:DeleteIndexField */
	static readonly DeleteIndexField = "cloudsearch:DeleteIndexField";
	/** [Write] cloudsearch:DeleteSuggester */
	static readonly DeleteSuggester = "cloudsearch:DeleteSuggester";
	/** [Read] cloudsearch:DescribeAnalysisSchemes */
	static readonly DescribeAnalysisSchemes =
		"cloudsearch:DescribeAnalysisSchemes";
	/** [Read] cloudsearch:DescribeAvailabilityOptions */
	static readonly DescribeAvailabilityOptions =
		"cloudsearch:DescribeAvailabilityOptions";
	/** [Read] cloudsearch:DescribeDomainEndpointOptions */
	static readonly DescribeDomainEndpointOptions =
		"cloudsearch:DescribeDomainEndpointOptions";
	/** [List] cloudsearch:DescribeDomains */
	static readonly DescribeDomains = "cloudsearch:DescribeDomains";
	/** [Read] cloudsearch:DescribeExpressions */
	static readonly DescribeExpressions = "cloudsearch:DescribeExpressions";
	/** [Read] cloudsearch:DescribeIndexFields */
	static readonly DescribeIndexFields = "cloudsearch:DescribeIndexFields";
	/** [Read] cloudsearch:DescribeScalingParameters */
	static readonly DescribeScalingParameters =
		"cloudsearch:DescribeScalingParameters";
	/** [Read] cloudsearch:DescribeServiceAccessPolicies */
	static readonly DescribeServiceAccessPolicies =
		"cloudsearch:DescribeServiceAccessPolicies";
	/** [Read] cloudsearch:DescribeSuggesters */
	static readonly DescribeSuggesters = "cloudsearch:DescribeSuggesters";
	/** [Write] cloudsearch:IndexDocuments */
	static readonly IndexDocuments = "cloudsearch:IndexDocuments";
	/** [List] cloudsearch:ListDomainNames */
	static readonly ListDomainNames = "cloudsearch:ListDomainNames";
	/** [Read] cloudsearch:ListTags */
	static readonly ListTags = "cloudsearch:ListTags";
	/** [Tagging] cloudsearch:RemoveTags */
	static readonly RemoveTags = "cloudsearch:RemoveTags";
	/** [Write] cloudsearch:UpdateAvailabilityOptions */
	static readonly UpdateAvailabilityOptions =
		"cloudsearch:UpdateAvailabilityOptions";
	/** [Write] cloudsearch:UpdateDomainEndpointOptions */
	static readonly UpdateDomainEndpointOptions =
		"cloudsearch:UpdateDomainEndpointOptions";
	/** [Write] cloudsearch:UpdateScalingParameters */
	static readonly UpdateScalingParameters =
		"cloudsearch:UpdateScalingParameters";
	/** [PermissionManagement] cloudsearch:UpdateServiceAccessPolicies */
	static readonly UpdateServiceAccessPolicies =
		"cloudsearch:UpdateServiceAccessPolicies";
	/** [Write] cloudsearch:document */
	static readonly document = "cloudsearch:document";
	/** [Read] cloudsearch:search */
	static readonly search = "cloudsearch:search";
	/** [Read] cloudsearch:suggest */
	static readonly suggest = "cloudsearch:suggest";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudSearchActions.DescribeAnalysisSchemes,
		CloudSearchActions.DescribeAvailabilityOptions,
		CloudSearchActions.DescribeDomainEndpointOptions,
		CloudSearchActions.DescribeExpressions,
		CloudSearchActions.DescribeIndexFields,
		CloudSearchActions.DescribeScalingParameters,
		CloudSearchActions.DescribeServiceAccessPolicies,
		CloudSearchActions.DescribeSuggesters,
		CloudSearchActions.ListTags,
		CloudSearchActions.search,
		CloudSearchActions.suggest,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudSearchActions.BuildSuggesters,
		CloudSearchActions.CreateDomain,
		CloudSearchActions.DefineAnalysisScheme,
		CloudSearchActions.DefineExpression,
		CloudSearchActions.DefineIndexField,
		CloudSearchActions.DefineSuggester,
		CloudSearchActions.DeleteAnalysisScheme,
		CloudSearchActions.DeleteDomain,
		CloudSearchActions.DeleteExpression,
		CloudSearchActions.DeleteIndexField,
		CloudSearchActions.DeleteSuggester,
		CloudSearchActions.IndexDocuments,
		CloudSearchActions.UpdateAvailabilityOptions,
		CloudSearchActions.UpdateDomainEndpointOptions,
		CloudSearchActions.UpdateScalingParameters,
		CloudSearchActions.document,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CloudSearchActions.DescribeDomains,
		CloudSearchActions.ListDomainNames,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		CloudSearchActions.UpdateServiceAccessPolicies,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CloudSearchActions.AddTags,
		CloudSearchActions.RemoveTags,
	];
}

/**
 * Properties for building a domain ARN.
 */
export interface CloudSearchDomainArnProps {
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
 * Parsed components of a domain ARN.
 */
export interface CloudSearchDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainName component. */
	readonly domainName: string;
}

const DomainArnRegex =
	/^arn:(?<partition>[^:]+):cloudsearch:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudsearch resources.
 */
export class CloudSearchResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: CloudSearchDomainArnProps): string {
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
	static parseDomainArn(arn: string): CloudSearchDomainArnComponents {
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
	static readonly BuildSuggesters: string[] = ["cloudsearch:BuildSuggesters"];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = ["cloudsearch:CreateDomain"];
	/** IAM actions required for the DefineAnalysisScheme API call. */
	static readonly DefineAnalysisScheme: string[] = [
		"cloudsearch:DefineAnalysisScheme",
	];
	/** IAM actions required for the DefineExpression API call. */
	static readonly DefineExpression: string[] = ["cloudsearch:DefineExpression"];
	/** IAM actions required for the DefineIndexField API call. */
	static readonly DefineIndexField: string[] = ["cloudsearch:DefineIndexField"];
	/** IAM actions required for the DefineRankExpression API call. */
	static readonly DefineRankExpression: string[] = [];
	/** IAM actions required for the DefineSuggester API call. */
	static readonly DefineSuggester: string[] = ["cloudsearch:DefineSuggester"];
	/** IAM actions required for the DeleteAnalysisScheme API call. */
	static readonly DeleteAnalysisScheme: string[] = [
		"cloudsearch:DeleteAnalysisScheme",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["cloudsearch:DeleteDomain"];
	/** IAM actions required for the DeleteExpression API call. */
	static readonly DeleteExpression: string[] = ["cloudsearch:DeleteExpression"];
	/** IAM actions required for the DeleteIndexField API call. */
	static readonly DeleteIndexField: string[] = ["cloudsearch:DeleteIndexField"];
	/** IAM actions required for the DeleteRankExpression API call. */
	static readonly DeleteRankExpression: string[] = [];
	/** IAM actions required for the DeleteSuggester API call. */
	static readonly DeleteSuggester: string[] = ["cloudsearch:DeleteSuggester"];
	/** IAM actions required for the DescribeAnalysisSchemes API call. */
	static readonly DescribeAnalysisSchemes: string[] = [
		"cloudsearch:DescribeAnalysisSchemes",
	];
	/** IAM actions required for the DescribeAvailabilityOptions API call. */
	static readonly DescribeAvailabilityOptions: string[] = [
		"cloudsearch:DescribeAvailabilityOptions",
	];
	/** IAM actions required for the DescribeDefaultSearchField API call. */
	static readonly DescribeDefaultSearchField: string[] = [];
	/** IAM actions required for the DescribeDomainEndpointOptions API call. */
	static readonly DescribeDomainEndpointOptions: string[] = [
		"cloudsearch:DescribeDomainEndpointOptions",
	];
	/** IAM actions required for the DescribeDomains API call. */
	static readonly DescribeDomains: string[] = ["cloudsearch:DescribeDomains"];
	/** IAM actions required for the DescribeExpressions API call. */
	static readonly DescribeExpressions: string[] = [
		"cloudsearch:DescribeExpressions",
	];
	/** IAM actions required for the DescribeIndexFields API call. */
	static readonly DescribeIndexFields: string[] = [
		"cloudsearch:DescribeIndexFields",
	];
	/** IAM actions required for the DescribeRankExpressions API call. */
	static readonly DescribeRankExpressions: string[] = [];
	/** IAM actions required for the DescribeScalingParameters API call. */
	static readonly DescribeScalingParameters: string[] = [
		"cloudsearch:DescribeScalingParameters",
	];
	/** IAM actions required for the DescribeServiceAccessPolicies API call. */
	static readonly DescribeServiceAccessPolicies: string[] = [
		"cloudsearch:DescribeServiceAccessPolicies",
	];
	/** IAM actions required for the DescribeStemmingOptions API call. */
	static readonly DescribeStemmingOptions: string[] = [];
	/** IAM actions required for the DescribeStopwordOptions API call. */
	static readonly DescribeStopwordOptions: string[] = [];
	/** IAM actions required for the DescribeSuggesters API call. */
	static readonly DescribeSuggesters: string[] = [
		"cloudsearch:DescribeSuggesters",
	];
	/** IAM actions required for the DescribeSynonymOptions API call. */
	static readonly DescribeSynonymOptions: string[] = [];
	/** IAM actions required for the IndexDocuments API call. */
	static readonly IndexDocuments: string[] = ["cloudsearch:IndexDocuments"];
	/** IAM actions required for the ListDomainNames API call. */
	static readonly ListDomainNames: string[] = ["cloudsearch:ListDomainNames"];
	/** IAM actions required for the Search API call. */
	static readonly Search: string[] = [];
	/** IAM actions required for the Suggest API call. */
	static readonly Suggest: string[] = [];
	/** IAM actions required for the UpdateAvailabilityOptions API call. */
	static readonly UpdateAvailabilityOptions: string[] = [
		"cloudsearch:UpdateAvailabilityOptions",
	];
	/** IAM actions required for the UpdateDefaultSearchField API call. */
	static readonly UpdateDefaultSearchField: string[] = [];
	/** IAM actions required for the UpdateDomainEndpointOptions API call. */
	static readonly UpdateDomainEndpointOptions: string[] = [
		"cloudsearch:UpdateDomainEndpointOptions",
	];
	/** IAM actions required for the UpdateScalingParameters API call. */
	static readonly UpdateScalingParameters: string[] = [
		"cloudsearch:UpdateScalingParameters",
	];
	/** IAM actions required for the UpdateServiceAccessPolicies API call. */
	static readonly UpdateServiceAccessPolicies: string[] = [
		"cloudsearch:UpdateServiceAccessPolicies",
	];
	/** IAM actions required for the UpdateStemmingOptions API call. */
	static readonly UpdateStemmingOptions: string[] = [];
	/** IAM actions required for the UpdateStopwordOptions API call. */
	static readonly UpdateStopwordOptions: string[] = [];
	/** IAM actions required for the UpdateSynonymOptions API call. */
	static readonly UpdateSynonymOptions: string[] = [];
	/** IAM actions required for the UploadDocuments API call. */
	static readonly UploadDocuments: string[] = [];
}
