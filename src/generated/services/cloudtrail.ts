// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cloudtrail.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cloudtrail service.
 */
export class CloudTrailActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cloudtrail";

	/** [Tagging] cloudtrail:AddTags */
	static readonly ADD_TAGS = "cloudtrail:AddTags";
	/** [Write] cloudtrail:CancelQuery */
	static readonly CANCEL_QUERY = "cloudtrail:CancelQuery";
	/** [Write] cloudtrail:CreateChannel */
	static readonly CREATE_CHANNEL = "cloudtrail:CreateChannel";
	/** [Write] cloudtrail:CreateDashboard */
	static readonly CREATE_DASHBOARD = "cloudtrail:CreateDashboard";
	/** [Write] cloudtrail:CreateEventDataStore */
	static readonly CREATE_EVENT_DATA_STORE = "cloudtrail:CreateEventDataStore";
	/** [Write] cloudtrail:CreateServiceLinkedChannel */
	static readonly CREATE_SERVICE_LINKED_CHANNEL =
		"cloudtrail:CreateServiceLinkedChannel";
	/** [Write] cloudtrail:CreateTrail */
	static readonly CREATE_TRAIL = "cloudtrail:CreateTrail";
	/** [Write] cloudtrail:DeleteChannel */
	static readonly DELETE_CHANNEL = "cloudtrail:DeleteChannel";
	/** [Write] cloudtrail:DeleteDashboard */
	static readonly DELETE_DASHBOARD = "cloudtrail:DeleteDashboard";
	/** [Write] cloudtrail:DeleteEventDataStore */
	static readonly DELETE_EVENT_DATA_STORE = "cloudtrail:DeleteEventDataStore";
	/** [Write] cloudtrail:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "cloudtrail:DeleteResourcePolicy";
	/** [Write] cloudtrail:DeleteServiceLinkedChannel */
	static readonly DELETE_SERVICE_LINKED_CHANNEL =
		"cloudtrail:DeleteServiceLinkedChannel";
	/** [Write] cloudtrail:DeleteTrail */
	static readonly DELETE_TRAIL = "cloudtrail:DeleteTrail";
	/** [Write] cloudtrail:DeregisterOrganizationDelegatedAdmin */
	static readonly DEREGISTER_ORGANIZATION_DELEGATED_ADMIN =
		"cloudtrail:DeregisterOrganizationDelegatedAdmin";
	/** [Read] cloudtrail:DescribeQuery */
	static readonly DESCRIBE_QUERY = "cloudtrail:DescribeQuery";
	/** [Read] cloudtrail:DescribeTrails */
	static readonly DESCRIBE_TRAILS = "cloudtrail:DescribeTrails";
	/** [Write] cloudtrail:DisableFederation */
	static readonly DISABLE_FEDERATION = "cloudtrail:DisableFederation";
	/** [Write] cloudtrail:EnableFederation */
	static readonly ENABLE_FEDERATION = "cloudtrail:EnableFederation";
	/** [Write] cloudtrail:GenerateQuery */
	static readonly GENERATE_QUERY = "cloudtrail:GenerateQuery";
	/** [Read] cloudtrail:GenerateQueryResultsSummary */
	static readonly GENERATE_QUERY_RESULTS_SUMMARY =
		"cloudtrail:GenerateQueryResultsSummary";
	/** [Read] cloudtrail:GetChannel */
	static readonly GET_CHANNEL = "cloudtrail:GetChannel";
	/** [Read] cloudtrail:GetDashboard */
	static readonly GET_DASHBOARD = "cloudtrail:GetDashboard";
	/** [Read] cloudtrail:GetEventConfiguration */
	static readonly GET_EVENT_CONFIGURATION = "cloudtrail:GetEventConfiguration";
	/** [Read] cloudtrail:GetEventDataStore */
	static readonly GET_EVENT_DATA_STORE = "cloudtrail:GetEventDataStore";
	/** [Read] cloudtrail:GetEventDataStoreData */
	static readonly GET_EVENT_DATA_STORE_DATA =
		"cloudtrail:GetEventDataStoreData";
	/** [Read] cloudtrail:GetEventSelectors */
	static readonly GET_EVENT_SELECTORS = "cloudtrail:GetEventSelectors";
	/** [Read] cloudtrail:GetImport */
	static readonly GET_IMPORT = "cloudtrail:GetImport";
	/** [Read] cloudtrail:GetInsightSelectors */
	static readonly GET_INSIGHT_SELECTORS = "cloudtrail:GetInsightSelectors";
	/** [Read] cloudtrail:GetQueryResults */
	static readonly GET_QUERY_RESULTS = "cloudtrail:GetQueryResults";
	/** [Read] cloudtrail:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "cloudtrail:GetResourcePolicy";
	/** [Read] cloudtrail:GetServiceLinkedChannel */
	static readonly GET_SERVICE_LINKED_CHANNEL =
		"cloudtrail:GetServiceLinkedChannel";
	/** [Read] cloudtrail:GetTrail */
	static readonly GET_TRAIL = "cloudtrail:GetTrail";
	/** [Read] cloudtrail:GetTrailStatus */
	static readonly GET_TRAIL_STATUS = "cloudtrail:GetTrailStatus";
	/** [List] cloudtrail:ListChannels */
	static readonly LIST_CHANNELS = "cloudtrail:ListChannels";
	/** [List] cloudtrail:ListDashboards */
	static readonly LIST_DASHBOARDS = "cloudtrail:ListDashboards";
	/** [List] cloudtrail:ListEventDataStores */
	static readonly LIST_EVENT_DATA_STORES = "cloudtrail:ListEventDataStores";
	/** [Read] cloudtrail:ListImportFailures */
	static readonly LIST_IMPORT_FAILURES = "cloudtrail:ListImportFailures";
	/** [List] cloudtrail:ListImports */
	static readonly LIST_IMPORTS = "cloudtrail:ListImports";
	/** [List] cloudtrail:ListInsightsData */
	static readonly LIST_INSIGHTS_DATA = "cloudtrail:ListInsightsData";
	/** [Read] cloudtrail:ListPublicKeys */
	static readonly LIST_PUBLIC_KEYS = "cloudtrail:ListPublicKeys";
	/** [List] cloudtrail:ListQueries */
	static readonly LIST_QUERIES = "cloudtrail:ListQueries";
	/** [List] cloudtrail:ListServiceLinkedChannels */
	static readonly LIST_SERVICE_LINKED_CHANNELS =
		"cloudtrail:ListServiceLinkedChannels";
	/** [Read] cloudtrail:ListTags */
	static readonly LIST_TAGS = "cloudtrail:ListTags";
	/** [List] cloudtrail:ListTrails */
	static readonly LIST_TRAILS = "cloudtrail:ListTrails";
	/** [Read] cloudtrail:LookupEvents */
	static readonly LOOKUP_EVENTS = "cloudtrail:LookupEvents";
	/** [Write] cloudtrail:PutEventConfiguration */
	static readonly PUT_EVENT_CONFIGURATION = "cloudtrail:PutEventConfiguration";
	/** [Write] cloudtrail:PutEventSelectors */
	static readonly PUT_EVENT_SELECTORS = "cloudtrail:PutEventSelectors";
	/** [Write] cloudtrail:PutInsightSelectors */
	static readonly PUT_INSIGHT_SELECTORS = "cloudtrail:PutInsightSelectors";
	/** [Write] cloudtrail:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "cloudtrail:PutResourcePolicy";
	/** [Write] cloudtrail:RegisterOrganizationDelegatedAdmin */
	static readonly REGISTER_ORGANIZATION_DELEGATED_ADMIN =
		"cloudtrail:RegisterOrganizationDelegatedAdmin";
	/** [Tagging] cloudtrail:RemoveTags */
	static readonly REMOVE_TAGS = "cloudtrail:RemoveTags";
	/** [Write] cloudtrail:RestoreEventDataStore */
	static readonly RESTORE_EVENT_DATA_STORE = "cloudtrail:RestoreEventDataStore";
	/** [Read] cloudtrail:SearchSampleQueries */
	static readonly SEARCH_SAMPLE_QUERIES = "cloudtrail:SearchSampleQueries";
	/** [Write] cloudtrail:StartDashboardRefresh */
	static readonly START_DASHBOARD_REFRESH = "cloudtrail:StartDashboardRefresh";
	/** [Write] cloudtrail:StartEventDataStoreIngestion */
	static readonly START_EVENT_DATA_STORE_INGESTION =
		"cloudtrail:StartEventDataStoreIngestion";
	/** [Write] cloudtrail:StartImport */
	static readonly START_IMPORT = "cloudtrail:StartImport";
	/** [Write] cloudtrail:StartLogging */
	static readonly START_LOGGING = "cloudtrail:StartLogging";
	/** [Write] cloudtrail:StartQuery */
	static readonly START_QUERY = "cloudtrail:StartQuery";
	/** [Write] cloudtrail:StopEventDataStoreIngestion */
	static readonly STOP_EVENT_DATA_STORE_INGESTION =
		"cloudtrail:StopEventDataStoreIngestion";
	/** [Write] cloudtrail:StopImport */
	static readonly STOP_IMPORT = "cloudtrail:StopImport";
	/** [Write] cloudtrail:StopLogging */
	static readonly STOP_LOGGING = "cloudtrail:StopLogging";
	/** [Write] cloudtrail:UpdateChannel */
	static readonly UPDATE_CHANNEL = "cloudtrail:UpdateChannel";
	/** [Write] cloudtrail:UpdateDashboard */
	static readonly UPDATE_DASHBOARD = "cloudtrail:UpdateDashboard";
	/** [Write] cloudtrail:UpdateEventDataStore */
	static readonly UPDATE_EVENT_DATA_STORE = "cloudtrail:UpdateEventDataStore";
	/** [Write] cloudtrail:UpdateServiceLinkedChannel */
	static readonly UPDATE_SERVICE_LINKED_CHANNEL =
		"cloudtrail:UpdateServiceLinkedChannel";
	/** [Write] cloudtrail:UpdateTrail */
	static readonly UPDATE_TRAIL = "cloudtrail:UpdateTrail";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CloudTrailActions.DESCRIBE_QUERY,
		CloudTrailActions.DESCRIBE_TRAILS,
		CloudTrailActions.GENERATE_QUERY_RESULTS_SUMMARY,
		CloudTrailActions.GET_CHANNEL,
		CloudTrailActions.GET_DASHBOARD,
		CloudTrailActions.GET_EVENT_CONFIGURATION,
		CloudTrailActions.GET_EVENT_DATA_STORE,
		CloudTrailActions.GET_EVENT_DATA_STORE_DATA,
		CloudTrailActions.GET_EVENT_SELECTORS,
		CloudTrailActions.GET_IMPORT,
		CloudTrailActions.GET_INSIGHT_SELECTORS,
		CloudTrailActions.GET_QUERY_RESULTS,
		CloudTrailActions.GET_RESOURCE_POLICY,
		CloudTrailActions.GET_SERVICE_LINKED_CHANNEL,
		CloudTrailActions.GET_TRAIL,
		CloudTrailActions.GET_TRAIL_STATUS,
		CloudTrailActions.LIST_IMPORT_FAILURES,
		CloudTrailActions.LIST_PUBLIC_KEYS,
		CloudTrailActions.LIST_TAGS,
		CloudTrailActions.LOOKUP_EVENTS,
		CloudTrailActions.SEARCH_SAMPLE_QUERIES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CloudTrailActions.CANCEL_QUERY,
		CloudTrailActions.CREATE_CHANNEL,
		CloudTrailActions.CREATE_DASHBOARD,
		CloudTrailActions.CREATE_EVENT_DATA_STORE,
		CloudTrailActions.CREATE_SERVICE_LINKED_CHANNEL,
		CloudTrailActions.CREATE_TRAIL,
		CloudTrailActions.DELETE_CHANNEL,
		CloudTrailActions.DELETE_DASHBOARD,
		CloudTrailActions.DELETE_EVENT_DATA_STORE,
		CloudTrailActions.DELETE_RESOURCE_POLICY,
		CloudTrailActions.DELETE_SERVICE_LINKED_CHANNEL,
		CloudTrailActions.DELETE_TRAIL,
		CloudTrailActions.DEREGISTER_ORGANIZATION_DELEGATED_ADMIN,
		CloudTrailActions.DISABLE_FEDERATION,
		CloudTrailActions.ENABLE_FEDERATION,
		CloudTrailActions.GENERATE_QUERY,
		CloudTrailActions.PUT_EVENT_CONFIGURATION,
		CloudTrailActions.PUT_EVENT_SELECTORS,
		CloudTrailActions.PUT_INSIGHT_SELECTORS,
		CloudTrailActions.PUT_RESOURCE_POLICY,
		CloudTrailActions.REGISTER_ORGANIZATION_DELEGATED_ADMIN,
		CloudTrailActions.RESTORE_EVENT_DATA_STORE,
		CloudTrailActions.START_DASHBOARD_REFRESH,
		CloudTrailActions.START_EVENT_DATA_STORE_INGESTION,
		CloudTrailActions.START_IMPORT,
		CloudTrailActions.START_LOGGING,
		CloudTrailActions.START_QUERY,
		CloudTrailActions.STOP_EVENT_DATA_STORE_INGESTION,
		CloudTrailActions.STOP_IMPORT,
		CloudTrailActions.STOP_LOGGING,
		CloudTrailActions.UPDATE_CHANNEL,
		CloudTrailActions.UPDATE_DASHBOARD,
		CloudTrailActions.UPDATE_EVENT_DATA_STORE,
		CloudTrailActions.UPDATE_SERVICE_LINKED_CHANNEL,
		CloudTrailActions.UPDATE_TRAIL,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CloudTrailActions.LIST_CHANNELS,
		CloudTrailActions.LIST_DASHBOARDS,
		CloudTrailActions.LIST_EVENT_DATA_STORES,
		CloudTrailActions.LIST_IMPORTS,
		CloudTrailActions.LIST_INSIGHTS_DATA,
		CloudTrailActions.LIST_QUERIES,
		CloudTrailActions.LIST_SERVICE_LINKED_CHANNELS,
		CloudTrailActions.LIST_TRAILS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CloudTrailActions.ADD_TAGS,
		CloudTrailActions.REMOVE_TAGS,
	];
}

const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):channel/(?<channelId>[^:/?]+)$",
);
const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):dashboard/(?<dashboardName>[^:/?]+)$",
);
const EventdatastoreArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):eventdatastore/(?<eventDataStoreId>[^:/?]+)$",
);
const TrailArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):trail/(?<trailName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cloudtrail resources.
 */
export class CloudTrailResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The ChannelId component of the ARN. */
		readonly channelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudtrail:${props.region ?? "*"}:${props.account ?? "*"}:channel/${props.channelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelId: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelId: match.groups!.channelId,
		};
	}

	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: {
		/** The DashboardName component of the ARN. */
		readonly dashboardName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudtrail:${props.region ?? "*"}:${props.account ?? "*"}:dashboard/${props.dashboardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dashboardName: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dashboardName: match.groups!.dashboardName,
		};
	}

	/**
	 * Builds an ARN for the eventdatastore resource.
	 */
	static eventdatastore(props: {
		/** The EventDataStoreId component of the ARN. */
		readonly eventDataStoreId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudtrail:${props.region ?? "*"}:${props.account ?? "*"}:eventdatastore/${props.eventDataStoreId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eventdatastore resource.
	 */
	static isValidEventdatastoreArn(arn: string): boolean {
		return EventdatastoreArnRegex.test(arn);
	}

	/**
	 * Parses a eventdatastore ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventdatastoreArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventDataStoreId: string;
	} {
		const match = EventdatastoreArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eventdatastore ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventDataStoreId: match.groups!.eventDataStoreId,
		};
	}

	/**
	 * Builds an ARN for the trail resource.
	 */
	static trail(props: {
		/** The TrailName component of the ARN. */
		readonly trailName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cloudtrail:${props.region ?? "*"}:${props.account ?? "*"}:trail/${props.trailName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the trail resource.
	 */
	static isValidTrailArn(arn: string): boolean {
		return TrailArnRegex.test(arn);
	}

	/**
	 * Parses a trail ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrailArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trailName: string;
	} {
		const match = TrailArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid trail ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trailName: match.groups!.trailName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cloudtrail.
 */
export class CloudTrailOperations {
	/** IAM actions required for the AddTags API call. */
	static readonly ADD_TAGS: string[] = ["cloudtrail:AddTags"];
	/** IAM actions required for the CancelQuery API call. */
	static readonly CANCEL_QUERY: string[] = ["cloudtrail:CancelQuery"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateChannel",
	];
	/** IAM actions required for the CreateDashboard API call. */
	static readonly CREATE_DASHBOARD: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateDashboard",
		"cloudtrail:StartDashboardRefresh",
		"cloudtrail:StartQuery",
	];
	/** IAM actions required for the CreateEventDataStore API call. */
	static readonly CREATE_EVENT_DATA_STORE: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateEventDataStore",
	];
	/** IAM actions required for the CreateTrail API call. */
	static readonly CREATE_TRAIL: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateTrail",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["cloudtrail:DeleteChannel"];
	/** IAM actions required for the DeleteDashboard API call. */
	static readonly DELETE_DASHBOARD: string[] = ["cloudtrail:DeleteDashboard"];
	/** IAM actions required for the DeleteEventDataStore API call. */
	static readonly DELETE_EVENT_DATA_STORE: string[] = [
		"cloudtrail:DeleteEventDataStore",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"cloudtrail:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteTrail API call. */
	static readonly DELETE_TRAIL: string[] = ["cloudtrail:DeleteTrail"];
	/** IAM actions required for the DeregisterOrganizationDelegatedAdmin API call. */
	static readonly DEREGISTER_ORGANIZATION_DELEGATED_ADMIN: string[] = [
		"cloudtrail:DeregisterOrganizationDelegatedAdmin",
	];
	/** IAM actions required for the DescribeQuery API call. */
	static readonly DESCRIBE_QUERY: string[] = ["cloudtrail:DescribeQuery"];
	/** IAM actions required for the DescribeTrails API call. */
	static readonly DESCRIBE_TRAILS: string[] = ["cloudtrail:DescribeTrails"];
	/** IAM actions required for the DisableFederation API call. */
	static readonly DISABLE_FEDERATION: string[] = [
		"cloudtrail:DisableFederation",
	];
	/** IAM actions required for the EnableFederation API call. */
	static readonly ENABLE_FEDERATION: string[] = [
		"cloudtrail:EnableFederation",
		"iam:PassRole",
	];
	/** IAM actions required for the GenerateQuery API call. */
	static readonly GENERATE_QUERY: string[] = ["cloudtrail:GenerateQuery"];
	/** IAM actions required for the GetChannel API call. */
	static readonly GET_CHANNEL: string[] = ["cloudtrail:GetChannel"];
	/** IAM actions required for the GetDashboard API call. */
	static readonly GET_DASHBOARD: string[] = ["cloudtrail:GetDashboard"];
	/** IAM actions required for the GetEventConfiguration API call. */
	static readonly GET_EVENT_CONFIGURATION: string[] = [
		"cloudtrail:GetEventConfiguration",
	];
	/** IAM actions required for the GetEventDataStore API call. */
	static readonly GET_EVENT_DATA_STORE: string[] = [
		"cloudtrail:GetEventDataStore",
	];
	/** IAM actions required for the GetEventSelectors API call. */
	static readonly GET_EVENT_SELECTORS: string[] = [
		"cloudtrail:GetEventSelectors",
	];
	/** IAM actions required for the GetImport API call. */
	static readonly GET_IMPORT: string[] = ["cloudtrail:GetImport"];
	/** IAM actions required for the GetInsightSelectors API call. */
	static readonly GET_INSIGHT_SELECTORS: string[] = [
		"cloudtrail:GetInsightSelectors",
	];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly GET_QUERY_RESULTS: string[] = ["cloudtrail:GetQueryResults"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"cloudtrail:GetResourcePolicy",
	];
	/** IAM actions required for the GetTrail API call. */
	static readonly GET_TRAIL: string[] = ["cloudtrail:GetTrail"];
	/** IAM actions required for the GetTrailStatus API call. */
	static readonly GET_TRAIL_STATUS: string[] = ["cloudtrail:GetTrailStatus"];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["cloudtrail:ListChannels"];
	/** IAM actions required for the ListDashboards API call. */
	static readonly LIST_DASHBOARDS: string[] = ["cloudtrail:ListDashboards"];
	/** IAM actions required for the ListEventDataStores API call. */
	static readonly LIST_EVENT_DATA_STORES: string[] = [
		"cloudtrail:ListEventDataStores",
	];
	/** IAM actions required for the ListImportFailures API call. */
	static readonly LIST_IMPORT_FAILURES: string[] = [
		"cloudtrail:ListImportFailures",
	];
	/** IAM actions required for the ListImports API call. */
	static readonly LIST_IMPORTS: string[] = ["cloudtrail:ListImports"];
	/** IAM actions required for the ListInsightsData API call. */
	static readonly LIST_INSIGHTS_DATA: string[] = [
		"cloudtrail:ListInsightsData",
	];
	/** IAM actions required for the ListInsightsMetricData API call. */
	static readonly LIST_INSIGHTS_METRIC_DATA: string[] = [
		"cloudtrail:ListInsightsData",
		"cloudtrail:LookupEvents",
	];
	/** IAM actions required for the ListPublicKeys API call. */
	static readonly LIST_PUBLIC_KEYS: string[] = ["cloudtrail:ListPublicKeys"];
	/** IAM actions required for the ListQueries API call. */
	static readonly LIST_QUERIES: string[] = ["cloudtrail:ListQueries"];
	/** IAM actions required for the ListTags API call. */
	static readonly LIST_TAGS: string[] = ["cloudtrail:ListTags"];
	/** IAM actions required for the ListTrails API call. */
	static readonly LIST_TRAILS: string[] = ["cloudtrail:ListTrails"];
	/** IAM actions required for the LookupEvents API call. */
	static readonly LOOKUP_EVENTS: string[] = ["cloudtrail:LookupEvents"];
	/** IAM actions required for the PutEventConfiguration API call. */
	static readonly PUT_EVENT_CONFIGURATION: string[] = [
		"cloudtrail:PutEventConfiguration",
	];
	/** IAM actions required for the PutEventSelectors API call. */
	static readonly PUT_EVENT_SELECTORS: string[] = [
		"cloudtrail:PutEventSelectors",
	];
	/** IAM actions required for the PutInsightSelectors API call. */
	static readonly PUT_INSIGHT_SELECTORS: string[] = [
		"cloudtrail:PutInsightSelectors",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"cloudtrail:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterOrganizationDelegatedAdmin API call. */
	static readonly REGISTER_ORGANIZATION_DELEGATED_ADMIN: string[] = [
		"cloudtrail:RegisterOrganizationDelegatedAdmin",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly REMOVE_TAGS: string[] = ["cloudtrail:RemoveTags"];
	/** IAM actions required for the RestoreEventDataStore API call. */
	static readonly RESTORE_EVENT_DATA_STORE: string[] = [
		"cloudtrail:RestoreEventDataStore",
	];
	/** IAM actions required for the SearchSampleQueries API call. */
	static readonly SEARCH_SAMPLE_QUERIES: string[] = [
		"cloudtrail:SearchSampleQueries",
	];
	/** IAM actions required for the StartDashboardRefresh API call. */
	static readonly START_DASHBOARD_REFRESH: string[] = [
		"cloudtrail:StartDashboardRefresh",
		"cloudtrail:StartQuery",
	];
	/** IAM actions required for the StartEventDataStoreIngestion API call. */
	static readonly START_EVENT_DATA_STORE_INGESTION: string[] = [
		"cloudtrail:StartEventDataStoreIngestion",
	];
	/** IAM actions required for the StartImport API call. */
	static readonly START_IMPORT: string[] = [
		"iam:PassRole",
		"cloudtrail:StartImport",
	];
	/** IAM actions required for the StartLogging API call. */
	static readonly START_LOGGING: string[] = ["cloudtrail:StartLogging"];
	/** IAM actions required for the StartQuery API call. */
	static readonly START_QUERY: string[] = ["cloudtrail:StartQuery"];
	/** IAM actions required for the StopEventDataStoreIngestion API call. */
	static readonly STOP_EVENT_DATA_STORE_INGESTION: string[] = [
		"cloudtrail:StopEventDataStoreIngestion",
	];
	/** IAM actions required for the StopImport API call. */
	static readonly STOP_IMPORT: string[] = ["cloudtrail:StopImport"];
	/** IAM actions required for the StopLogging API call. */
	static readonly STOP_LOGGING: string[] = ["cloudtrail:StopLogging"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = ["cloudtrail:UpdateChannel"];
	/** IAM actions required for the UpdateDashboard API call. */
	static readonly UPDATE_DASHBOARD: string[] = [
		"cloudtrail:StartDashboardRefresh",
		"cloudtrail:StartQuery",
		"cloudtrail:UpdateDashboard",
	];
	/** IAM actions required for the UpdateEventDataStore API call. */
	static readonly UPDATE_EVENT_DATA_STORE: string[] = [
		"cloudtrail:UpdateEventDataStore",
	];
	/** IAM actions required for the UpdateTrail API call. */
	static readonly UPDATE_TRAIL: string[] = [
		"iam:PassRole",
		"cloudtrail:UpdateTrail",
	];
}

/**
 * Condition key constants and builders for cloudtrail.
 */
export class CloudTrailConditions {
	/** Condition keys applicable to the AddTags action. */
	static readonly ADD_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDashboard action. */
	static readonly CREATE_DASHBOARD_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventDataStore action. */
	static readonly CREATE_EVENT_DATA_STORE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrail action. */
	static readonly CREATE_TRAIL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly REMOVE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
