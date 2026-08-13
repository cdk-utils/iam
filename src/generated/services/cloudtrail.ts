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
	static readonly AddTags = "cloudtrail:AddTags";
	/** [Write] cloudtrail:CancelQuery */
	static readonly CancelQuery = "cloudtrail:CancelQuery";
	/** [Write] cloudtrail:CreateChannel */
	static readonly CreateChannel = "cloudtrail:CreateChannel";
	/** [Write] cloudtrail:CreateDashboard */
	static readonly CreateDashboard = "cloudtrail:CreateDashboard";
	/** [Write] cloudtrail:CreateEventDataStore */
	static readonly CreateEventDataStore = "cloudtrail:CreateEventDataStore";
	/** [Write] cloudtrail:CreateServiceLinkedChannel */
	static readonly CreateServiceLinkedChannel =
		"cloudtrail:CreateServiceLinkedChannel";
	/** [Write] cloudtrail:CreateTrail */
	static readonly CreateTrail = "cloudtrail:CreateTrail";
	/** [Write] cloudtrail:DeleteChannel */
	static readonly DeleteChannel = "cloudtrail:DeleteChannel";
	/** [Write] cloudtrail:DeleteDashboard */
	static readonly DeleteDashboard = "cloudtrail:DeleteDashboard";
	/** [Write] cloudtrail:DeleteEventDataStore */
	static readonly DeleteEventDataStore = "cloudtrail:DeleteEventDataStore";
	/** [Write] cloudtrail:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "cloudtrail:DeleteResourcePolicy";
	/** [Write] cloudtrail:DeleteServiceLinkedChannel */
	static readonly DeleteServiceLinkedChannel =
		"cloudtrail:DeleteServiceLinkedChannel";
	/** [Write] cloudtrail:DeleteTrail */
	static readonly DeleteTrail = "cloudtrail:DeleteTrail";
	/** [Write] cloudtrail:DeregisterOrganizationDelegatedAdmin */
	static readonly DeregisterOrganizationDelegatedAdmin =
		"cloudtrail:DeregisterOrganizationDelegatedAdmin";
	/** [Read] cloudtrail:DescribeQuery */
	static readonly DescribeQuery = "cloudtrail:DescribeQuery";
	/** [Read] cloudtrail:DescribeTrails */
	static readonly DescribeTrails = "cloudtrail:DescribeTrails";
	/** [Write] cloudtrail:DisableFederation */
	static readonly DisableFederation = "cloudtrail:DisableFederation";
	/** [Write] cloudtrail:EnableFederation */
	static readonly EnableFederation = "cloudtrail:EnableFederation";
	/** [Write] cloudtrail:GenerateQuery */
	static readonly GenerateQuery = "cloudtrail:GenerateQuery";
	/** [Read] cloudtrail:GenerateQueryResultsSummary */
	static readonly GenerateQueryResultsSummary =
		"cloudtrail:GenerateQueryResultsSummary";
	/** [Read] cloudtrail:GetChannel */
	static readonly actionGetChannel = "cloudtrail:GetChannel";
	/** [Read] cloudtrail:GetDashboard */
	static readonly actionGetDashboard = "cloudtrail:GetDashboard";
	/** [Read] cloudtrail:GetEventConfiguration */
	static readonly actionGetEventConfiguration =
		"cloudtrail:GetEventConfiguration";
	/** [Read] cloudtrail:GetEventDataStore */
	static readonly actionGetEventDataStore = "cloudtrail:GetEventDataStore";
	/** [Read] cloudtrail:GetEventDataStoreData */
	static readonly actionGetEventDataStoreData =
		"cloudtrail:GetEventDataStoreData";
	/** [Read] cloudtrail:GetEventSelectors */
	static readonly actionGetEventSelectors = "cloudtrail:GetEventSelectors";
	/** [Read] cloudtrail:GetImport */
	static readonly actionGetImport = "cloudtrail:GetImport";
	/** [Read] cloudtrail:GetInsightSelectors */
	static readonly actionGetInsightSelectors = "cloudtrail:GetInsightSelectors";
	/** [Read] cloudtrail:GetQueryResults */
	static readonly actionGetQueryResults = "cloudtrail:GetQueryResults";
	/** [Read] cloudtrail:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "cloudtrail:GetResourcePolicy";
	/** [Read] cloudtrail:GetServiceLinkedChannel */
	static readonly actionGetServiceLinkedChannel =
		"cloudtrail:GetServiceLinkedChannel";
	/** [Read] cloudtrail:GetTrail */
	static readonly actionGetTrail = "cloudtrail:GetTrail";
	/** [Read] cloudtrail:GetTrailStatus */
	static readonly actionGetTrailStatus = "cloudtrail:GetTrailStatus";
	/** [List] cloudtrail:ListChannels */
	static readonly ListChannels = "cloudtrail:ListChannels";
	/** [List] cloudtrail:ListDashboards */
	static readonly ListDashboards = "cloudtrail:ListDashboards";
	/** [List] cloudtrail:ListEventDataStores */
	static readonly ListEventDataStores = "cloudtrail:ListEventDataStores";
	/** [Read] cloudtrail:ListImportFailures */
	static readonly ListImportFailures = "cloudtrail:ListImportFailures";
	/** [List] cloudtrail:ListImports */
	static readonly ListImports = "cloudtrail:ListImports";
	/** [List] cloudtrail:ListInsightsData */
	static readonly ListInsightsData = "cloudtrail:ListInsightsData";
	/** [Read] cloudtrail:ListPublicKeys */
	static readonly ListPublicKeys = "cloudtrail:ListPublicKeys";
	/** [List] cloudtrail:ListQueries */
	static readonly ListQueries = "cloudtrail:ListQueries";
	/** [List] cloudtrail:ListServiceLinkedChannels */
	static readonly ListServiceLinkedChannels =
		"cloudtrail:ListServiceLinkedChannels";
	/** [Read] cloudtrail:ListTags */
	static readonly ListTags = "cloudtrail:ListTags";
	/** [List] cloudtrail:ListTrails */
	static readonly ListTrails = "cloudtrail:ListTrails";
	/** [Read] cloudtrail:LookupEvents */
	static readonly LookupEvents = "cloudtrail:LookupEvents";
	/** [Write] cloudtrail:PutEventConfiguration */
	static readonly PutEventConfiguration = "cloudtrail:PutEventConfiguration";
	/** [Write] cloudtrail:PutEventSelectors */
	static readonly PutEventSelectors = "cloudtrail:PutEventSelectors";
	/** [Write] cloudtrail:PutInsightSelectors */
	static readonly PutInsightSelectors = "cloudtrail:PutInsightSelectors";
	/** [Write] cloudtrail:PutResourcePolicy */
	static readonly PutResourcePolicy = "cloudtrail:PutResourcePolicy";
	/** [Write] cloudtrail:RegisterOrganizationDelegatedAdmin */
	static readonly RegisterOrganizationDelegatedAdmin =
		"cloudtrail:RegisterOrganizationDelegatedAdmin";
	/** [Tagging] cloudtrail:RemoveTags */
	static readonly RemoveTags = "cloudtrail:RemoveTags";
	/** [Write] cloudtrail:RestoreEventDataStore */
	static readonly RestoreEventDataStore = "cloudtrail:RestoreEventDataStore";
	/** [Read] cloudtrail:SearchSampleQueries */
	static readonly SearchSampleQueries = "cloudtrail:SearchSampleQueries";
	/** [Write] cloudtrail:StartDashboardRefresh */
	static readonly StartDashboardRefresh = "cloudtrail:StartDashboardRefresh";
	/** [Write] cloudtrail:StartEventDataStoreIngestion */
	static readonly StartEventDataStoreIngestion =
		"cloudtrail:StartEventDataStoreIngestion";
	/** [Write] cloudtrail:StartImport */
	static readonly StartImport = "cloudtrail:StartImport";
	/** [Write] cloudtrail:StartLogging */
	static readonly StartLogging = "cloudtrail:StartLogging";
	/** [Write] cloudtrail:StartQuery */
	static readonly StartQuery = "cloudtrail:StartQuery";
	/** [Write] cloudtrail:StopEventDataStoreIngestion */
	static readonly StopEventDataStoreIngestion =
		"cloudtrail:StopEventDataStoreIngestion";
	/** [Write] cloudtrail:StopImport */
	static readonly StopImport = "cloudtrail:StopImport";
	/** [Write] cloudtrail:StopLogging */
	static readonly StopLogging = "cloudtrail:StopLogging";
	/** [Write] cloudtrail:UpdateChannel */
	static readonly UpdateChannel = "cloudtrail:UpdateChannel";
	/** [Write] cloudtrail:UpdateDashboard */
	static readonly UpdateDashboard = "cloudtrail:UpdateDashboard";
	/** [Write] cloudtrail:UpdateEventDataStore */
	static readonly UpdateEventDataStore = "cloudtrail:UpdateEventDataStore";
	/** [Write] cloudtrail:UpdateServiceLinkedChannel */
	static readonly UpdateServiceLinkedChannel =
		"cloudtrail:UpdateServiceLinkedChannel";
	/** [Write] cloudtrail:UpdateTrail */
	static readonly UpdateTrail = "cloudtrail:UpdateTrail";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CloudTrailActions.DescribeQuery,
		CloudTrailActions.DescribeTrails,
		CloudTrailActions.GenerateQueryResultsSummary,
		CloudTrailActions.actionGetChannel,
		CloudTrailActions.actionGetDashboard,
		CloudTrailActions.actionGetEventConfiguration,
		CloudTrailActions.actionGetEventDataStore,
		CloudTrailActions.actionGetEventDataStoreData,
		CloudTrailActions.actionGetEventSelectors,
		CloudTrailActions.actionGetImport,
		CloudTrailActions.actionGetInsightSelectors,
		CloudTrailActions.actionGetQueryResults,
		CloudTrailActions.actionGetResourcePolicy,
		CloudTrailActions.actionGetServiceLinkedChannel,
		CloudTrailActions.actionGetTrail,
		CloudTrailActions.actionGetTrailStatus,
		CloudTrailActions.ListImportFailures,
		CloudTrailActions.ListPublicKeys,
		CloudTrailActions.ListTags,
		CloudTrailActions.LookupEvents,
		CloudTrailActions.SearchSampleQueries,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CloudTrailActions.CancelQuery,
		CloudTrailActions.CreateChannel,
		CloudTrailActions.CreateDashboard,
		CloudTrailActions.CreateEventDataStore,
		CloudTrailActions.CreateServiceLinkedChannel,
		CloudTrailActions.CreateTrail,
		CloudTrailActions.DeleteChannel,
		CloudTrailActions.DeleteDashboard,
		CloudTrailActions.DeleteEventDataStore,
		CloudTrailActions.DeleteResourcePolicy,
		CloudTrailActions.DeleteServiceLinkedChannel,
		CloudTrailActions.DeleteTrail,
		CloudTrailActions.DeregisterOrganizationDelegatedAdmin,
		CloudTrailActions.DisableFederation,
		CloudTrailActions.EnableFederation,
		CloudTrailActions.GenerateQuery,
		CloudTrailActions.PutEventConfiguration,
		CloudTrailActions.PutEventSelectors,
		CloudTrailActions.PutInsightSelectors,
		CloudTrailActions.PutResourcePolicy,
		CloudTrailActions.RegisterOrganizationDelegatedAdmin,
		CloudTrailActions.RestoreEventDataStore,
		CloudTrailActions.StartDashboardRefresh,
		CloudTrailActions.StartEventDataStoreIngestion,
		CloudTrailActions.StartImport,
		CloudTrailActions.StartLogging,
		CloudTrailActions.StartQuery,
		CloudTrailActions.StopEventDataStoreIngestion,
		CloudTrailActions.StopImport,
		CloudTrailActions.StopLogging,
		CloudTrailActions.UpdateChannel,
		CloudTrailActions.UpdateDashboard,
		CloudTrailActions.UpdateEventDataStore,
		CloudTrailActions.UpdateServiceLinkedChannel,
		CloudTrailActions.UpdateTrail,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CloudTrailActions.ListChannels,
		CloudTrailActions.ListDashboards,
		CloudTrailActions.ListEventDataStores,
		CloudTrailActions.ListImports,
		CloudTrailActions.ListInsightsData,
		CloudTrailActions.ListQueries,
		CloudTrailActions.ListServiceLinkedChannels,
		CloudTrailActions.ListTrails,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CloudTrailActions.AddTags,
		CloudTrailActions.RemoveTags,
	];
}

/**
 * Properties for building a channel ARN.
 */
export interface CloudTrailChannelArnProps {
	/** The ChannelId component of the ARN. */
	readonly channelId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a channel ARN.
 */
export interface CloudTrailChannelArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ChannelId component. */
	readonly channelId: string;
}

/**
 * Properties for building a dashboard ARN.
 */
export interface CloudTrailDashboardArnProps {
	/** The DashboardName component of the ARN. */
	readonly dashboardName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dashboard ARN.
 */
export interface CloudTrailDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DashboardName component. */
	readonly dashboardName: string;
}

/**
 * Properties for building a eventdatastore ARN.
 */
export interface CloudTrailEventdatastoreArnProps {
	/** The EventDataStoreId component of the ARN. */
	readonly eventDataStoreId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a eventdatastore ARN.
 */
export interface CloudTrailEventdatastoreArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventDataStoreId component. */
	readonly eventDataStoreId: string;
}

/**
 * Properties for building a trail ARN.
 */
export interface CloudTrailTrailArnProps {
	/** The TrailName component of the ARN. */
	readonly trailName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a trail ARN.
 */
export interface CloudTrailTrailArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrailName component. */
	readonly trailName: string;
}

const ChannelArnRegex =
	/^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):channel\/(?<channelId>[^:/?]+)$/;
const DashboardArnRegex =
	/^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):dashboard\/(?<dashboardName>[^:/?]+)$/;
const EventdatastoreArnRegex =
	/^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):eventdatastore\/(?<eventDataStoreId>[^:/?]+)$/;
const TrailArnRegex =
	/^arn:(?<partition>[^:]+):cloudtrail:(?<region>[^:]*):(?<account>[^:]*):trail\/(?<trailName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cloudtrail resources.
 */
export class CloudTrailResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: CloudTrailChannelArnProps): string {
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
	static parseChannelArn(arn: string): CloudTrailChannelArnComponents {
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
	static dashboard(props: CloudTrailDashboardArnProps): string {
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
	static parseDashboardArn(arn: string): CloudTrailDashboardArnComponents {
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
	static eventdatastore(props: CloudTrailEventdatastoreArnProps): string {
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
	static parseEventdatastoreArn(
		arn: string,
	): CloudTrailEventdatastoreArnComponents {
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
	static trail(props: CloudTrailTrailArnProps): string {
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
	static parseTrailArn(arn: string): CloudTrailTrailArnComponents {
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
	static readonly AddTags: string[] = ["cloudtrail:AddTags"];
	/** IAM actions required for the CancelQuery API call. */
	static readonly CancelQuery: string[] = ["cloudtrail:CancelQuery"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CreateChannel: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateChannel",
	];
	/** IAM actions required for the CreateDashboard API call. */
	static readonly CreateDashboard: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateDashboard",
		"cloudtrail:StartDashboardRefresh",
		"cloudtrail:StartQuery",
	];
	/** IAM actions required for the CreateEventDataStore API call. */
	static readonly CreateEventDataStore: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateEventDataStore",
	];
	/** IAM actions required for the CreateTrail API call. */
	static readonly CreateTrail: string[] = [
		"cloudtrail:AddTags",
		"cloudtrail:CreateTrail",
		"iam:PassRole",
	];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DeleteChannel: string[] = ["cloudtrail:DeleteChannel"];
	/** IAM actions required for the DeleteDashboard API call. */
	static readonly DeleteDashboard: string[] = ["cloudtrail:DeleteDashboard"];
	/** IAM actions required for the DeleteEventDataStore API call. */
	static readonly DeleteEventDataStore: string[] = [
		"cloudtrail:DeleteEventDataStore",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"cloudtrail:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteTrail API call. */
	static readonly DeleteTrail: string[] = ["cloudtrail:DeleteTrail"];
	/** IAM actions required for the DeregisterOrganizationDelegatedAdmin API call. */
	static readonly DeregisterOrganizationDelegatedAdmin: string[] = [
		"cloudtrail:DeregisterOrganizationDelegatedAdmin",
	];
	/** IAM actions required for the DescribeQuery API call. */
	static readonly DescribeQuery: string[] = ["cloudtrail:DescribeQuery"];
	/** IAM actions required for the DescribeTrails API call. */
	static readonly DescribeTrails: string[] = ["cloudtrail:DescribeTrails"];
	/** IAM actions required for the DisableFederation API call. */
	static readonly DisableFederation: string[] = [
		"cloudtrail:DisableFederation",
	];
	/** IAM actions required for the EnableFederation API call. */
	static readonly EnableFederation: string[] = [
		"cloudtrail:EnableFederation",
		"iam:PassRole",
	];
	/** IAM actions required for the GenerateQuery API call. */
	static readonly GenerateQuery: string[] = ["cloudtrail:GenerateQuery"];
	/** IAM actions required for the GetChannel API call. */
	static readonly opGetChannel: string[] = ["cloudtrail:GetChannel"];
	/** IAM actions required for the GetDashboard API call. */
	static readonly opGetDashboard: string[] = ["cloudtrail:GetDashboard"];
	/** IAM actions required for the GetEventConfiguration API call. */
	static readonly opGetEventConfiguration: string[] = [
		"cloudtrail:GetEventConfiguration",
	];
	/** IAM actions required for the GetEventDataStore API call. */
	static readonly opGetEventDataStore: string[] = [
		"cloudtrail:GetEventDataStore",
	];
	/** IAM actions required for the GetEventSelectors API call. */
	static readonly opGetEventSelectors: string[] = [
		"cloudtrail:GetEventSelectors",
	];
	/** IAM actions required for the GetImport API call. */
	static readonly opGetImport: string[] = ["cloudtrail:GetImport"];
	/** IAM actions required for the GetInsightSelectors API call. */
	static readonly opGetInsightSelectors: string[] = [
		"cloudtrail:GetInsightSelectors",
	];
	/** IAM actions required for the GetQueryResults API call. */
	static readonly opGetQueryResults: string[] = ["cloudtrail:GetQueryResults"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"cloudtrail:GetResourcePolicy",
	];
	/** IAM actions required for the GetTrail API call. */
	static readonly opGetTrail: string[] = ["cloudtrail:GetTrail"];
	/** IAM actions required for the GetTrailStatus API call. */
	static readonly opGetTrailStatus: string[] = ["cloudtrail:GetTrailStatus"];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["cloudtrail:ListChannels"];
	/** IAM actions required for the ListDashboards API call. */
	static readonly ListDashboards: string[] = ["cloudtrail:ListDashboards"];
	/** IAM actions required for the ListEventDataStores API call. */
	static readonly ListEventDataStores: string[] = [
		"cloudtrail:ListEventDataStores",
	];
	/** IAM actions required for the ListImportFailures API call. */
	static readonly ListImportFailures: string[] = [
		"cloudtrail:ListImportFailures",
	];
	/** IAM actions required for the ListImports API call. */
	static readonly ListImports: string[] = ["cloudtrail:ListImports"];
	/** IAM actions required for the ListInsightsData API call. */
	static readonly ListInsightsData: string[] = ["cloudtrail:ListInsightsData"];
	/** IAM actions required for the ListInsightsMetricData API call. */
	static readonly ListInsightsMetricData: string[] = [
		"cloudtrail:ListInsightsData",
		"cloudtrail:LookupEvents",
	];
	/** IAM actions required for the ListPublicKeys API call. */
	static readonly ListPublicKeys: string[] = ["cloudtrail:ListPublicKeys"];
	/** IAM actions required for the ListQueries API call. */
	static readonly ListQueries: string[] = ["cloudtrail:ListQueries"];
	/** IAM actions required for the ListTags API call. */
	static readonly ListTags: string[] = ["cloudtrail:ListTags"];
	/** IAM actions required for the ListTrails API call. */
	static readonly ListTrails: string[] = ["cloudtrail:ListTrails"];
	/** IAM actions required for the LookupEvents API call. */
	static readonly LookupEvents: string[] = ["cloudtrail:LookupEvents"];
	/** IAM actions required for the PutEventConfiguration API call. */
	static readonly PutEventConfiguration: string[] = [
		"cloudtrail:PutEventConfiguration",
	];
	/** IAM actions required for the PutEventSelectors API call. */
	static readonly PutEventSelectors: string[] = [
		"cloudtrail:PutEventSelectors",
	];
	/** IAM actions required for the PutInsightSelectors API call. */
	static readonly PutInsightSelectors: string[] = [
		"cloudtrail:PutInsightSelectors",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"cloudtrail:PutResourcePolicy",
	];
	/** IAM actions required for the RegisterOrganizationDelegatedAdmin API call. */
	static readonly RegisterOrganizationDelegatedAdmin: string[] = [
		"cloudtrail:RegisterOrganizationDelegatedAdmin",
	];
	/** IAM actions required for the RemoveTags API call. */
	static readonly RemoveTags: string[] = ["cloudtrail:RemoveTags"];
	/** IAM actions required for the RestoreEventDataStore API call. */
	static readonly RestoreEventDataStore: string[] = [
		"cloudtrail:RestoreEventDataStore",
	];
	/** IAM actions required for the SearchSampleQueries API call. */
	static readonly SearchSampleQueries: string[] = [
		"cloudtrail:SearchSampleQueries",
	];
	/** IAM actions required for the StartDashboardRefresh API call. */
	static readonly StartDashboardRefresh: string[] = [
		"cloudtrail:StartDashboardRefresh",
		"cloudtrail:StartQuery",
	];
	/** IAM actions required for the StartEventDataStoreIngestion API call. */
	static readonly StartEventDataStoreIngestion: string[] = [
		"cloudtrail:StartEventDataStoreIngestion",
	];
	/** IAM actions required for the StartImport API call. */
	static readonly StartImport: string[] = [
		"iam:PassRole",
		"cloudtrail:StartImport",
	];
	/** IAM actions required for the StartLogging API call. */
	static readonly StartLogging: string[] = ["cloudtrail:StartLogging"];
	/** IAM actions required for the StartQuery API call. */
	static readonly StartQuery: string[] = ["cloudtrail:StartQuery"];
	/** IAM actions required for the StopEventDataStoreIngestion API call. */
	static readonly StopEventDataStoreIngestion: string[] = [
		"cloudtrail:StopEventDataStoreIngestion",
	];
	/** IAM actions required for the StopImport API call. */
	static readonly StopImport: string[] = ["cloudtrail:StopImport"];
	/** IAM actions required for the StopLogging API call. */
	static readonly StopLogging: string[] = ["cloudtrail:StopLogging"];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UpdateChannel: string[] = ["cloudtrail:UpdateChannel"];
	/** IAM actions required for the UpdateDashboard API call. */
	static readonly UpdateDashboard: string[] = [
		"cloudtrail:StartDashboardRefresh",
		"cloudtrail:StartQuery",
		"cloudtrail:UpdateDashboard",
	];
	/** IAM actions required for the UpdateEventDataStore API call. */
	static readonly UpdateEventDataStore: string[] = [
		"cloudtrail:UpdateEventDataStore",
	];
	/** IAM actions required for the UpdateTrail API call. */
	static readonly UpdateTrail: string[] = [
		"iam:PassRole",
		"cloudtrail:UpdateTrail",
	];
}

/**
 * Condition key constants and builders for cloudtrail.
 */
export class CloudTrailConditions {
	/** Condition keys applicable to the AddTags action. */
	static readonly AddTagsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CreateChannelConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDashboard action. */
	static readonly CreateDashboardConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventDataStore action. */
	static readonly CreateEventDataStoreConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTrail action. */
	static readonly CreateTrailConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RemoveTags action. */
	static readonly RemoveTagsConditionKeys: string[] = ["aws:TagKeys"];

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
