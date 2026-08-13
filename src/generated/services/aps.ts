// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aps.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aps service.
 */
export class ApsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aps";

	/** [Write] aps:CreateAlertManagerAlerts */
	static readonly CREATE_ALERT_MANAGER_ALERTS = "aps:CreateAlertManagerAlerts";
	/** [Write] aps:CreateAlertManagerDefinition */
	static readonly CREATE_ALERT_MANAGER_DEFINITION =
		"aps:CreateAlertManagerDefinition";
	/** [Write] aps:CreateAnomalyDetector */
	static readonly CREATE_ANOMALY_DETECTOR = "aps:CreateAnomalyDetector";
	/** [Write] aps:CreateLoggingConfiguration */
	static readonly CREATE_LOGGING_CONFIGURATION =
		"aps:CreateLoggingConfiguration";
	/** [Write] aps:CreateQueryLoggingConfiguration */
	static readonly CREATE_QUERY_LOGGING_CONFIGURATION =
		"aps:CreateQueryLoggingConfiguration";
	/** [Write] aps:CreateRuleGroupsNamespace */
	static readonly CREATE_RULE_GROUPS_NAMESPACE =
		"aps:CreateRuleGroupsNamespace";
	/** [Write] aps:CreateScraper */
	static readonly CREATE_SCRAPER = "aps:CreateScraper";
	/** [Write] aps:CreateWorkspace */
	static readonly CREATE_WORKSPACE = "aps:CreateWorkspace";
	/** [Write] aps:DeleteAlertManagerDefinition */
	static readonly DELETE_ALERT_MANAGER_DEFINITION =
		"aps:DeleteAlertManagerDefinition";
	/** [Write] aps:DeleteAlertManagerSilence */
	static readonly DELETE_ALERT_MANAGER_SILENCE =
		"aps:DeleteAlertManagerSilence";
	/** [Write] aps:DeleteAnomalyDetector */
	static readonly DELETE_ANOMALY_DETECTOR = "aps:DeleteAnomalyDetector";
	/** [Write] aps:DeleteLoggingConfiguration */
	static readonly DELETE_LOGGING_CONFIGURATION =
		"aps:DeleteLoggingConfiguration";
	/** [Write] aps:DeleteQueryLoggingConfiguration */
	static readonly DELETE_QUERY_LOGGING_CONFIGURATION =
		"aps:DeleteQueryLoggingConfiguration";
	/** [Write] aps:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "aps:DeleteResourcePolicy";
	/** [Write] aps:DeleteRuleGroupsNamespace */
	static readonly DELETE_RULE_GROUPS_NAMESPACE =
		"aps:DeleteRuleGroupsNamespace";
	/** [Write] aps:DeleteScraper */
	static readonly DELETE_SCRAPER = "aps:DeleteScraper";
	/** [Write] aps:DeleteScraperLoggingConfiguration */
	static readonly DELETE_SCRAPER_LOGGING_CONFIGURATION =
		"aps:DeleteScraperLoggingConfiguration";
	/** [Write] aps:DeleteWorkspace */
	static readonly DELETE_WORKSPACE = "aps:DeleteWorkspace";
	/** [Read] aps:DescribeAlertManagerDefinition */
	static readonly DESCRIBE_ALERT_MANAGER_DEFINITION =
		"aps:DescribeAlertManagerDefinition";
	/** [Read] aps:DescribeAnomalyDetector */
	static readonly DESCRIBE_ANOMALY_DETECTOR = "aps:DescribeAnomalyDetector";
	/** [Read] aps:DescribeLoggingConfiguration */
	static readonly DESCRIBE_LOGGING_CONFIGURATION =
		"aps:DescribeLoggingConfiguration";
	/** [Read] aps:DescribeQueryLoggingConfiguration */
	static readonly DESCRIBE_QUERY_LOGGING_CONFIGURATION =
		"aps:DescribeQueryLoggingConfiguration";
	/** [Read] aps:DescribeResourcePolicy */
	static readonly DESCRIBE_RESOURCE_POLICY = "aps:DescribeResourcePolicy";
	/** [Read] aps:DescribeRuleGroupsNamespace */
	static readonly DESCRIBE_RULE_GROUPS_NAMESPACE =
		"aps:DescribeRuleGroupsNamespace";
	/** [Read] aps:DescribeScraper */
	static readonly DESCRIBE_SCRAPER = "aps:DescribeScraper";
	/** [Read] aps:DescribeScraperLoggingConfiguration */
	static readonly DESCRIBE_SCRAPER_LOGGING_CONFIGURATION =
		"aps:DescribeScraperLoggingConfiguration";
	/** [Read] aps:DescribeWorkspace */
	static readonly DESCRIBE_WORKSPACE = "aps:DescribeWorkspace";
	/** [Read] aps:DescribeWorkspaceConfiguration */
	static readonly DESCRIBE_WORKSPACE_CONFIGURATION =
		"aps:DescribeWorkspaceConfiguration";
	/** [Read] aps:GetAlertManagerSilence */
	static readonly GET_ALERT_MANAGER_SILENCE = "aps:GetAlertManagerSilence";
	/** [Read] aps:GetAlertManagerStatus */
	static readonly GET_ALERT_MANAGER_STATUS = "aps:GetAlertManagerStatus";
	/** [Read] aps:GetDefaultScraperConfiguration */
	static readonly GET_DEFAULT_SCRAPER_CONFIGURATION =
		"aps:GetDefaultScraperConfiguration";
	/** [Read] aps:GetLabels */
	static readonly GET_LABELS = "aps:GetLabels";
	/** [Read] aps:GetMetricMetadata */
	static readonly GET_METRIC_METADATA = "aps:GetMetricMetadata";
	/** [Read] aps:GetSeries */
	static readonly GET_SERIES = "aps:GetSeries";
	/** [Read] aps:ListAlertManagerAlertGroups */
	static readonly LIST_ALERT_MANAGER_ALERT_GROUPS =
		"aps:ListAlertManagerAlertGroups";
	/** [Read] aps:ListAlertManagerAlerts */
	static readonly LIST_ALERT_MANAGER_ALERTS = "aps:ListAlertManagerAlerts";
	/** [Read] aps:ListAlertManagerReceivers */
	static readonly LIST_ALERT_MANAGER_RECEIVERS =
		"aps:ListAlertManagerReceivers";
	/** [Read] aps:ListAlertManagerSilences */
	static readonly LIST_ALERT_MANAGER_SILENCES = "aps:ListAlertManagerSilences";
	/** [Read] aps:ListAlerts */
	static readonly LIST_ALERTS = "aps:ListAlerts";
	/** [List] aps:ListAnomalyDetectors */
	static readonly LIST_ANOMALY_DETECTORS = "aps:ListAnomalyDetectors";
	/** [List] aps:ListRuleGroupsNamespaces */
	static readonly LIST_RULE_GROUPS_NAMESPACES = "aps:ListRuleGroupsNamespaces";
	/** [Read] aps:ListRules */
	static readonly LIST_RULES = "aps:ListRules";
	/** [List] aps:ListScrapers */
	static readonly LIST_SCRAPERS = "aps:ListScrapers";
	/** [Read] aps:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "aps:ListTagsForResource";
	/** [List] aps:ListWorkspaces */
	static readonly LIST_WORKSPACES = "aps:ListWorkspaces";
	/** [Read] aps:PreviewAnomalyDetector */
	static readonly PREVIEW_ANOMALY_DETECTOR = "aps:PreviewAnomalyDetector";
	/** [Write] aps:PutAlertManagerDefinition */
	static readonly PUT_ALERT_MANAGER_DEFINITION =
		"aps:PutAlertManagerDefinition";
	/** [Write] aps:PutAlertManagerSilences */
	static readonly PUT_ALERT_MANAGER_SILENCES = "aps:PutAlertManagerSilences";
	/** [Write] aps:PutAnomalyDetector */
	static readonly PUT_ANOMALY_DETECTOR = "aps:PutAnomalyDetector";
	/** [Write] aps:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "aps:PutResourcePolicy";
	/** [Write] aps:PutRuleGroupsNamespace */
	static readonly PUT_RULE_GROUPS_NAMESPACE = "aps:PutRuleGroupsNamespace";
	/** [Read] aps:QueryMetrics */
	static readonly QUERY_METRICS = "aps:QueryMetrics";
	/** [Write] aps:RemoteWrite */
	static readonly REMOTE_WRITE = "aps:RemoteWrite";
	/** [Tagging] aps:TagResource */
	static readonly TAG_RESOURCE = "aps:TagResource";
	/** [Tagging] aps:UntagResource */
	static readonly UNTAG_RESOURCE = "aps:UntagResource";
	/** [Write] aps:UpdateLoggingConfiguration */
	static readonly UPDATE_LOGGING_CONFIGURATION =
		"aps:UpdateLoggingConfiguration";
	/** [Write] aps:UpdateQueryLoggingConfiguration */
	static readonly UPDATE_QUERY_LOGGING_CONFIGURATION =
		"aps:UpdateQueryLoggingConfiguration";
	/** [Write] aps:UpdateScraper */
	static readonly UPDATE_SCRAPER = "aps:UpdateScraper";
	/** [Write] aps:UpdateScraperLoggingConfiguration */
	static readonly UPDATE_SCRAPER_LOGGING_CONFIGURATION =
		"aps:UpdateScraperLoggingConfiguration";
	/** [Write] aps:UpdateWorkspaceAlias */
	static readonly UPDATE_WORKSPACE_ALIAS = "aps:UpdateWorkspaceAlias";
	/** [Write] aps:UpdateWorkspaceConfiguration */
	static readonly UPDATE_WORKSPACE_CONFIGURATION =
		"aps:UpdateWorkspaceConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApsActions.DESCRIBE_ALERT_MANAGER_DEFINITION,
		ApsActions.DESCRIBE_ANOMALY_DETECTOR,
		ApsActions.DESCRIBE_LOGGING_CONFIGURATION,
		ApsActions.DESCRIBE_QUERY_LOGGING_CONFIGURATION,
		ApsActions.DESCRIBE_RESOURCE_POLICY,
		ApsActions.DESCRIBE_RULE_GROUPS_NAMESPACE,
		ApsActions.DESCRIBE_SCRAPER,
		ApsActions.DESCRIBE_SCRAPER_LOGGING_CONFIGURATION,
		ApsActions.DESCRIBE_WORKSPACE,
		ApsActions.DESCRIBE_WORKSPACE_CONFIGURATION,
		ApsActions.GET_ALERT_MANAGER_SILENCE,
		ApsActions.GET_ALERT_MANAGER_STATUS,
		ApsActions.GET_DEFAULT_SCRAPER_CONFIGURATION,
		ApsActions.GET_LABELS,
		ApsActions.GET_METRIC_METADATA,
		ApsActions.GET_SERIES,
		ApsActions.LIST_ALERT_MANAGER_ALERT_GROUPS,
		ApsActions.LIST_ALERT_MANAGER_ALERTS,
		ApsActions.LIST_ALERT_MANAGER_RECEIVERS,
		ApsActions.LIST_ALERT_MANAGER_SILENCES,
		ApsActions.LIST_ALERTS,
		ApsActions.LIST_RULES,
		ApsActions.LIST_TAGS_FOR_RESOURCE,
		ApsActions.PREVIEW_ANOMALY_DETECTOR,
		ApsActions.QUERY_METRICS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApsActions.CREATE_ALERT_MANAGER_ALERTS,
		ApsActions.CREATE_ALERT_MANAGER_DEFINITION,
		ApsActions.CREATE_ANOMALY_DETECTOR,
		ApsActions.CREATE_LOGGING_CONFIGURATION,
		ApsActions.CREATE_QUERY_LOGGING_CONFIGURATION,
		ApsActions.CREATE_RULE_GROUPS_NAMESPACE,
		ApsActions.CREATE_SCRAPER,
		ApsActions.CREATE_WORKSPACE,
		ApsActions.DELETE_ALERT_MANAGER_DEFINITION,
		ApsActions.DELETE_ALERT_MANAGER_SILENCE,
		ApsActions.DELETE_ANOMALY_DETECTOR,
		ApsActions.DELETE_LOGGING_CONFIGURATION,
		ApsActions.DELETE_QUERY_LOGGING_CONFIGURATION,
		ApsActions.DELETE_RESOURCE_POLICY,
		ApsActions.DELETE_RULE_GROUPS_NAMESPACE,
		ApsActions.DELETE_SCRAPER,
		ApsActions.DELETE_SCRAPER_LOGGING_CONFIGURATION,
		ApsActions.DELETE_WORKSPACE,
		ApsActions.PUT_ALERT_MANAGER_DEFINITION,
		ApsActions.PUT_ALERT_MANAGER_SILENCES,
		ApsActions.PUT_ANOMALY_DETECTOR,
		ApsActions.PUT_RESOURCE_POLICY,
		ApsActions.PUT_RULE_GROUPS_NAMESPACE,
		ApsActions.REMOTE_WRITE,
		ApsActions.UPDATE_LOGGING_CONFIGURATION,
		ApsActions.UPDATE_QUERY_LOGGING_CONFIGURATION,
		ApsActions.UPDATE_SCRAPER,
		ApsActions.UPDATE_SCRAPER_LOGGING_CONFIGURATION,
		ApsActions.UPDATE_WORKSPACE_ALIAS,
		ApsActions.UPDATE_WORKSPACE_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ApsActions.LIST_ANOMALY_DETECTORS,
		ApsActions.LIST_RULE_GROUPS_NAMESPACES,
		ApsActions.LIST_SCRAPERS,
		ApsActions.LIST_WORKSPACES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ApsActions.TAG_RESOURCE,
		ApsActions.UNTAG_RESOURCE,
	];
}

const AnomalydetectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):anomalydetector/(?<workspaceId>[^:/?]+)/(?<anomalyDetectorId>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterName>[^:/?]+)$",
);
const RulegroupsnamespaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):rulegroupsnamespace/(?<workspaceId>[^:/?]+)/(?<namespace>[^:/?]+)$",
);
const ScraperArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):scraper/(?<scraperId>[^:/?]+)$",
);
const WorkspaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):workspace/(?<workspaceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for aps resources.
 */
export class ApsResources {
	/**
	 * Builds an ARN for the anomalydetector resource.
	 */
	static anomalydetector(props: {
		/** The WorkspaceId component of the ARN. */
		readonly workspaceId: string;
		/** The AnomalyDetectorId component of the ARN. */
		readonly anomalyDetectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aps:${props.region ?? "*"}:${props.account ?? "*"}:anomalydetector/${props.workspaceId}/${props.anomalyDetectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the anomalydetector resource.
	 */
	static isValidAnomalydetectorArn(arn: string): boolean {
		return AnomalydetectorArnRegex.test(arn);
	}

	/**
	 * Parses a anomalydetector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAnomalydetectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
		anomalyDetectorId: string;
	} {
		const match = AnomalydetectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid anomalydetector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
			anomalyDetectorId: match.groups!.anomalyDetectorId,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}

	/**
	 * Builds an ARN for the rulegroupsnamespace resource.
	 */
	static rulegroupsnamespace(props: {
		/** The WorkspaceId component of the ARN. */
		readonly workspaceId: string;
		/** The Namespace component of the ARN. */
		readonly namespace: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aps:${props.region ?? "*"}:${props.account ?? "*"}:rulegroupsnamespace/${props.workspaceId}/${props.namespace}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rulegroupsnamespace resource.
	 */
	static isValidRulegroupsnamespaceArn(arn: string): boolean {
		return RulegroupsnamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a rulegroupsnamespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRulegroupsnamespaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
		namespace: string;
	} {
		const match = RulegroupsnamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rulegroupsnamespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
			namespace: match.groups!.namespace,
		};
	}

	/**
	 * Builds an ARN for the scraper resource.
	 */
	static scraper(props: {
		/** The ScraperId component of the ARN. */
		readonly scraperId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aps:${props.region ?? "*"}:${props.account ?? "*"}:scraper/${props.scraperId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the scraper resource.
	 */
	static isValidScraperArn(arn: string): boolean {
		return ScraperArnRegex.test(arn);
	}

	/**
	 * Parses a scraper ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScraperArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scraperId: string;
	} {
		const match = ScraperArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid scraper ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scraperId: match.groups!.scraperId,
		};
	}

	/**
	 * Builds an ARN for the workspace resource.
	 */
	static workspace(props: {
		/** The WorkspaceId component of the ARN. */
		readonly workspaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aps:${props.region ?? "*"}:${props.account ?? "*"}:workspace/${props.workspaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workspace resource.
	 */
	static isValidWorkspaceArn(arn: string): boolean {
		return WorkspaceArnRegex.test(arn);
	}

	/**
	 * Parses a workspace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkspaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workspaceId: string;
	} {
		const match = WorkspaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workspace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for aps.
 */
export class ApsOperations {
	/** IAM actions required for the CreateAlertManagerDefinition API call. */
	static readonly CREATE_ALERT_MANAGER_DEFINITION: string[] = [
		"aps:CreateAlertManagerDefinition",
	];
	/** IAM actions required for the CreateAnomalyDetector API call. */
	static readonly CREATE_ANOMALY_DETECTOR: string[] = [
		"aps:CreateAnomalyDetector",
		"aps:TagResource",
	];
	/** IAM actions required for the CreateLoggingConfiguration API call. */
	static readonly CREATE_LOGGING_CONFIGURATION: string[] = [
		"aps:CreateLoggingConfiguration",
	];
	/** IAM actions required for the CreateQueryLoggingConfiguration API call. */
	static readonly CREATE_QUERY_LOGGING_CONFIGURATION: string[] = [
		"aps:CreateQueryLoggingConfiguration",
	];
	/** IAM actions required for the CreateRuleGroupsNamespace API call. */
	static readonly CREATE_RULE_GROUPS_NAMESPACE: string[] = [
		"aps:CreateRuleGroupsNamespace",
		"aps:TagResource",
	];
	/** IAM actions required for the CreateScraper API call. */
	static readonly CREATE_SCRAPER: string[] = [
		"aps:CreateScraper",
		"iam:PassRole",
		"aps:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CREATE_WORKSPACE: string[] = [
		"aps:CreateWorkspace",
		"aps:TagResource",
	];
	/** IAM actions required for the DeleteAlertManagerDefinition API call. */
	static readonly DELETE_ALERT_MANAGER_DEFINITION: string[] = [
		"aps:DeleteAlertManagerDefinition",
	];
	/** IAM actions required for the DeleteAnomalyDetector API call. */
	static readonly DELETE_ANOMALY_DETECTOR: string[] = [
		"aps:DeleteAnomalyDetector",
	];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DELETE_LOGGING_CONFIGURATION: string[] = [
		"aps:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeleteQueryLoggingConfiguration API call. */
	static readonly DELETE_QUERY_LOGGING_CONFIGURATION: string[] = [
		"aps:DeleteQueryLoggingConfiguration",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"aps:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRuleGroupsNamespace API call. */
	static readonly DELETE_RULE_GROUPS_NAMESPACE: string[] = [
		"aps:DeleteRuleGroupsNamespace",
	];
	/** IAM actions required for the DeleteScraper API call. */
	static readonly DELETE_SCRAPER: string[] = ["aps:DeleteScraper"];
	/** IAM actions required for the DeleteScraperLoggingConfiguration API call. */
	static readonly DELETE_SCRAPER_LOGGING_CONFIGURATION: string[] = [
		"aps:DeleteScraperLoggingConfiguration",
	];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DELETE_WORKSPACE: string[] = ["aps:DeleteWorkspace"];
	/** IAM actions required for the DescribeAlertManagerDefinition API call. */
	static readonly DESCRIBE_ALERT_MANAGER_DEFINITION: string[] = [
		"aps:DescribeAlertManagerDefinition",
	];
	/** IAM actions required for the DescribeAnomalyDetector API call. */
	static readonly DESCRIBE_ANOMALY_DETECTOR: string[] = [
		"aps:DescribeAnomalyDetector",
	];
	/** IAM actions required for the DescribeLoggingConfiguration API call. */
	static readonly DESCRIBE_LOGGING_CONFIGURATION: string[] = [
		"aps:DescribeLoggingConfiguration",
	];
	/** IAM actions required for the DescribeQueryLoggingConfiguration API call. */
	static readonly DESCRIBE_QUERY_LOGGING_CONFIGURATION: string[] = [
		"aps:DescribeQueryLoggingConfiguration",
	];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DESCRIBE_RESOURCE_POLICY: string[] = [
		"aps:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeRuleGroupsNamespace API call. */
	static readonly DESCRIBE_RULE_GROUPS_NAMESPACE: string[] = [
		"aps:DescribeRuleGroupsNamespace",
	];
	/** IAM actions required for the DescribeScraper API call. */
	static readonly DESCRIBE_SCRAPER: string[] = ["aps:DescribeScraper"];
	/** IAM actions required for the DescribeScraperLoggingConfiguration API call. */
	static readonly DESCRIBE_SCRAPER_LOGGING_CONFIGURATION: string[] = [
		"aps:DescribeScraperLoggingConfiguration",
	];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DESCRIBE_WORKSPACE: string[] = ["aps:DescribeWorkspace"];
	/** IAM actions required for the DescribeWorkspaceConfiguration API call. */
	static readonly DESCRIBE_WORKSPACE_CONFIGURATION: string[] = [
		"aps:DescribeWorkspaceConfiguration",
	];
	/** IAM actions required for the GetDefaultScraperConfiguration API call. */
	static readonly GET_DEFAULT_SCRAPER_CONFIGURATION: string[] = [
		"aps:GetDefaultScraperConfiguration",
	];
	/** IAM actions required for the ListAnomalyDetectors API call. */
	static readonly LIST_ANOMALY_DETECTORS: string[] = [
		"aps:ListAnomalyDetectors",
	];
	/** IAM actions required for the ListRuleGroupsNamespaces API call. */
	static readonly LIST_RULE_GROUPS_NAMESPACES: string[] = [
		"aps:ListRuleGroupsNamespaces",
	];
	/** IAM actions required for the ListScrapers API call. */
	static readonly LIST_SCRAPERS: string[] = ["aps:ListScrapers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"aps:ListTagsForResource",
	];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly LIST_WORKSPACES: string[] = ["aps:ListWorkspaces"];
	/** IAM actions required for the PutAlertManagerDefinition API call. */
	static readonly PUT_ALERT_MANAGER_DEFINITION: string[] = [
		"aps:PutAlertManagerDefinition",
	];
	/** IAM actions required for the PutAnomalyDetector API call. */
	static readonly PUT_ANOMALY_DETECTOR: string[] = ["aps:PutAnomalyDetector"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = ["aps:PutResourcePolicy"];
	/** IAM actions required for the PutRuleGroupsNamespace API call. */
	static readonly PUT_RULE_GROUPS_NAMESPACE: string[] = [
		"aps:PutRuleGroupsNamespace",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["aps:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["aps:UntagResource"];
	/** IAM actions required for the UpdateLoggingConfiguration API call. */
	static readonly UPDATE_LOGGING_CONFIGURATION: string[] = [
		"aps:UpdateLoggingConfiguration",
	];
	/** IAM actions required for the UpdateQueryLoggingConfiguration API call. */
	static readonly UPDATE_QUERY_LOGGING_CONFIGURATION: string[] = [
		"aps:UpdateQueryLoggingConfiguration",
	];
	/** IAM actions required for the UpdateScraper API call. */
	static readonly UPDATE_SCRAPER: string[] = [
		"iam:PassRole",
		"aps:UpdateScraper",
	];
	/** IAM actions required for the UpdateScraperLoggingConfiguration API call. */
	static readonly UPDATE_SCRAPER_LOGGING_CONFIGURATION: string[] = [
		"aps:UpdateScraperLoggingConfiguration",
	];
	/** IAM actions required for the UpdateWorkspaceAlias API call. */
	static readonly UPDATE_WORKSPACE_ALIAS: string[] = [
		"aps:UpdateWorkspaceAlias",
	];
	/** IAM actions required for the UpdateWorkspaceConfiguration API call. */
	static readonly UPDATE_WORKSPACE_CONFIGURATION: string[] = [
		"aps:UpdateWorkspaceConfiguration",
	];
}

/**
 * Condition key constants and builders for aps.
 */
export class ApsConditions {
	/** Condition keys applicable to the CreateAlertManagerAlerts action. */
	static readonly CREATE_ALERT_MANAGER_ALERTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAlertManagerDefinition action. */
	static readonly CREATE_ALERT_MANAGER_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAnomalyDetector action. */
	static readonly CREATE_ANOMALY_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoggingConfiguration action. */
	static readonly CREATE_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateQueryLoggingConfiguration action. */
	static readonly CREATE_QUERY_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the CreateRuleGroupsNamespace action. */
	static readonly CREATE_RULE_GROUPS_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScraper action. */
	static readonly CREATE_SCRAPER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CREATE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAlertManagerDefinition action. */
	static readonly DELETE_ALERT_MANAGER_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAlertManagerSilence action. */
	static readonly DELETE_ALERT_MANAGER_SILENCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAnomalyDetector action. */
	static readonly DELETE_ANOMALY_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteLoggingConfiguration action. */
	static readonly DELETE_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteQueryLoggingConfiguration action. */
	static readonly DELETE_QUERY_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DELETE_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRuleGroupsNamespace action. */
	static readonly DELETE_RULE_GROUPS_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteScraper action. */
	static readonly DELETE_SCRAPER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteScraperLoggingConfiguration action. */
	static readonly DELETE_SCRAPER_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteWorkspace action. */
	static readonly DELETE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAlertManagerDefinition action. */
	static readonly DESCRIBE_ALERT_MANAGER_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAnomalyDetector action. */
	static readonly DESCRIBE_ANOMALY_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeLoggingConfiguration action. */
	static readonly DESCRIBE_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeQueryLoggingConfiguration action. */
	static readonly DESCRIBE_QUERY_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeResourcePolicy action. */
	static readonly DESCRIBE_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeRuleGroupsNamespace action. */
	static readonly DESCRIBE_RULE_GROUPS_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeScraper action. */
	static readonly DESCRIBE_SCRAPER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeScraperLoggingConfiguration action. */
	static readonly DESCRIBE_SCRAPER_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DescribeWorkspace action. */
	static readonly DESCRIBE_WORKSPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeWorkspaceConfiguration action. */
	static readonly DESCRIBE_WORKSPACE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAlertManagerSilence action. */
	static readonly GET_ALERT_MANAGER_SILENCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAlertManagerStatus action. */
	static readonly GET_ALERT_MANAGER_STATUS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLabels action. */
	static readonly GET_LABELS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetMetricMetadata action. */
	static readonly GET_METRIC_METADATA_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSeries action. */
	static readonly GET_SERIES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerAlertGroups action. */
	static readonly LIST_ALERT_MANAGER_ALERT_GROUPS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerAlerts action. */
	static readonly LIST_ALERT_MANAGER_ALERTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerReceivers action. */
	static readonly LIST_ALERT_MANAGER_RECEIVERS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerSilences action. */
	static readonly LIST_ALERT_MANAGER_SILENCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlerts action. */
	static readonly LIST_ALERTS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAnomalyDetectors action. */
	static readonly LIST_ANOMALY_DETECTORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRuleGroupsNamespaces action. */
	static readonly LIST_RULE_GROUPS_NAMESPACES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRules action. */
	static readonly LIST_RULES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PreviewAnomalyDetector action. */
	static readonly PREVIEW_ANOMALY_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAlertManagerDefinition action. */
	static readonly PUT_ALERT_MANAGER_DEFINITION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAlertManagerSilences action. */
	static readonly PUT_ALERT_MANAGER_SILENCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAnomalyDetector action. */
	static readonly PUT_ANOMALY_DETECTOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PUT_RESOURCE_POLICY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutRuleGroupsNamespace action. */
	static readonly PUT_RULE_GROUPS_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the QueryMetrics action. */
	static readonly QUERY_METRICS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RemoteWrite action. */
	static readonly REMOTE_WRITE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateLoggingConfiguration action. */
	static readonly UPDATE_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateQueryLoggingConfiguration action. */
	static readonly UPDATE_QUERY_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateScraper action. */
	static readonly UPDATE_SCRAPER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateScraperLoggingConfiguration action. */
	static readonly UPDATE_SCRAPER_LOGGING_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateWorkspaceAlias action. */
	static readonly UPDATE_WORKSPACE_ALIAS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkspaceConfiguration action. */
	static readonly UPDATE_WORKSPACE_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
