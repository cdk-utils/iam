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
	static readonly CreateAlertManagerAlerts = "aps:CreateAlertManagerAlerts";
	/** [Write] aps:CreateAlertManagerDefinition */
	static readonly CreateAlertManagerDefinition =
		"aps:CreateAlertManagerDefinition";
	/** [Write] aps:CreateAnomalyDetector */
	static readonly CreateAnomalyDetector = "aps:CreateAnomalyDetector";
	/** [Write] aps:CreateLoggingConfiguration */
	static readonly CreateLoggingConfiguration = "aps:CreateLoggingConfiguration";
	/** [Write] aps:CreateQueryLoggingConfiguration */
	static readonly CreateQueryLoggingConfiguration =
		"aps:CreateQueryLoggingConfiguration";
	/** [Write] aps:CreateRuleGroupsNamespace */
	static readonly CreateRuleGroupsNamespace = "aps:CreateRuleGroupsNamespace";
	/** [Write] aps:CreateScraper */
	static readonly CreateScraper = "aps:CreateScraper";
	/** [Write] aps:CreateWorkspace */
	static readonly CreateWorkspace = "aps:CreateWorkspace";
	/** [Write] aps:DeleteAlertManagerDefinition */
	static readonly DeleteAlertManagerDefinition =
		"aps:DeleteAlertManagerDefinition";
	/** [Write] aps:DeleteAlertManagerSilence */
	static readonly DeleteAlertManagerSilence = "aps:DeleteAlertManagerSilence";
	/** [Write] aps:DeleteAnomalyDetector */
	static readonly DeleteAnomalyDetector = "aps:DeleteAnomalyDetector";
	/** [Write] aps:DeleteLoggingConfiguration */
	static readonly DeleteLoggingConfiguration = "aps:DeleteLoggingConfiguration";
	/** [Write] aps:DeleteQueryLoggingConfiguration */
	static readonly DeleteQueryLoggingConfiguration =
		"aps:DeleteQueryLoggingConfiguration";
	/** [Write] aps:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "aps:DeleteResourcePolicy";
	/** [Write] aps:DeleteRuleGroupsNamespace */
	static readonly DeleteRuleGroupsNamespace = "aps:DeleteRuleGroupsNamespace";
	/** [Write] aps:DeleteScraper */
	static readonly DeleteScraper = "aps:DeleteScraper";
	/** [Write] aps:DeleteScraperLoggingConfiguration */
	static readonly DeleteScraperLoggingConfiguration =
		"aps:DeleteScraperLoggingConfiguration";
	/** [Write] aps:DeleteWorkspace */
	static readonly DeleteWorkspace = "aps:DeleteWorkspace";
	/** [Read] aps:DescribeAlertManagerDefinition */
	static readonly DescribeAlertManagerDefinition =
		"aps:DescribeAlertManagerDefinition";
	/** [Read] aps:DescribeAnomalyDetector */
	static readonly DescribeAnomalyDetector = "aps:DescribeAnomalyDetector";
	/** [Read] aps:DescribeLoggingConfiguration */
	static readonly DescribeLoggingConfiguration =
		"aps:DescribeLoggingConfiguration";
	/** [Read] aps:DescribeQueryLoggingConfiguration */
	static readonly DescribeQueryLoggingConfiguration =
		"aps:DescribeQueryLoggingConfiguration";
	/** [Read] aps:DescribeResourcePolicy */
	static readonly DescribeResourcePolicy = "aps:DescribeResourcePolicy";
	/** [Read] aps:DescribeRuleGroupsNamespace */
	static readonly DescribeRuleGroupsNamespace =
		"aps:DescribeRuleGroupsNamespace";
	/** [Read] aps:DescribeScraper */
	static readonly DescribeScraper = "aps:DescribeScraper";
	/** [Read] aps:DescribeScraperLoggingConfiguration */
	static readonly DescribeScraperLoggingConfiguration =
		"aps:DescribeScraperLoggingConfiguration";
	/** [Read] aps:DescribeWorkspace */
	static readonly DescribeWorkspace = "aps:DescribeWorkspace";
	/** [Read] aps:DescribeWorkspaceConfiguration */
	static readonly DescribeWorkspaceConfiguration =
		"aps:DescribeWorkspaceConfiguration";
	/** [Read] aps:GetAlertManagerSilence */
	static readonly actionGetAlertManagerSilence = "aps:GetAlertManagerSilence";
	/** [Read] aps:GetAlertManagerStatus */
	static readonly actionGetAlertManagerStatus = "aps:GetAlertManagerStatus";
	/** [Read] aps:GetDefaultScraperConfiguration */
	static readonly actionGetDefaultScraperConfiguration =
		"aps:GetDefaultScraperConfiguration";
	/** [Read] aps:GetLabels */
	static readonly actionGetLabels = "aps:GetLabels";
	/** [Read] aps:GetMetricMetadata */
	static readonly actionGetMetricMetadata = "aps:GetMetricMetadata";
	/** [Read] aps:GetSeries */
	static readonly actionGetSeries = "aps:GetSeries";
	/** [Read] aps:ListAlertManagerAlertGroups */
	static readonly ListAlertManagerAlertGroups =
		"aps:ListAlertManagerAlertGroups";
	/** [Read] aps:ListAlertManagerAlerts */
	static readonly ListAlertManagerAlerts = "aps:ListAlertManagerAlerts";
	/** [Read] aps:ListAlertManagerReceivers */
	static readonly ListAlertManagerReceivers = "aps:ListAlertManagerReceivers";
	/** [Read] aps:ListAlertManagerSilences */
	static readonly ListAlertManagerSilences = "aps:ListAlertManagerSilences";
	/** [Read] aps:ListAlerts */
	static readonly ListAlerts = "aps:ListAlerts";
	/** [List] aps:ListAnomalyDetectors */
	static readonly ListAnomalyDetectors = "aps:ListAnomalyDetectors";
	/** [List] aps:ListRuleGroupsNamespaces */
	static readonly ListRuleGroupsNamespaces = "aps:ListRuleGroupsNamespaces";
	/** [Read] aps:ListRules */
	static readonly ListRules = "aps:ListRules";
	/** [List] aps:ListScrapers */
	static readonly ListScrapers = "aps:ListScrapers";
	/** [Read] aps:ListTagsForResource */
	static readonly ListTagsForResource = "aps:ListTagsForResource";
	/** [List] aps:ListWorkspaces */
	static readonly ListWorkspaces = "aps:ListWorkspaces";
	/** [Read] aps:PreviewAnomalyDetector */
	static readonly PreviewAnomalyDetector = "aps:PreviewAnomalyDetector";
	/** [Write] aps:PutAlertManagerDefinition */
	static readonly PutAlertManagerDefinition = "aps:PutAlertManagerDefinition";
	/** [Write] aps:PutAlertManagerSilences */
	static readonly PutAlertManagerSilences = "aps:PutAlertManagerSilences";
	/** [Write] aps:PutAnomalyDetector */
	static readonly PutAnomalyDetector = "aps:PutAnomalyDetector";
	/** [Write] aps:PutResourcePolicy */
	static readonly PutResourcePolicy = "aps:PutResourcePolicy";
	/** [Write] aps:PutRuleGroupsNamespace */
	static readonly PutRuleGroupsNamespace = "aps:PutRuleGroupsNamespace";
	/** [Read] aps:QueryMetrics */
	static readonly QueryMetrics = "aps:QueryMetrics";
	/** [Write] aps:RemoteWrite */
	static readonly RemoteWrite = "aps:RemoteWrite";
	/** [Tagging] aps:TagResource */
	static readonly TagResource = "aps:TagResource";
	/** [Tagging] aps:UntagResource */
	static readonly UntagResource = "aps:UntagResource";
	/** [Write] aps:UpdateLoggingConfiguration */
	static readonly UpdateLoggingConfiguration = "aps:UpdateLoggingConfiguration";
	/** [Write] aps:UpdateQueryLoggingConfiguration */
	static readonly UpdateQueryLoggingConfiguration =
		"aps:UpdateQueryLoggingConfiguration";
	/** [Write] aps:UpdateScraper */
	static readonly UpdateScraper = "aps:UpdateScraper";
	/** [Write] aps:UpdateScraperLoggingConfiguration */
	static readonly UpdateScraperLoggingConfiguration =
		"aps:UpdateScraperLoggingConfiguration";
	/** [Write] aps:UpdateWorkspaceAlias */
	static readonly UpdateWorkspaceAlias = "aps:UpdateWorkspaceAlias";
	/** [Write] aps:UpdateWorkspaceConfiguration */
	static readonly UpdateWorkspaceConfiguration =
		"aps:UpdateWorkspaceConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApsActions.DescribeAlertManagerDefinition,
		ApsActions.DescribeAnomalyDetector,
		ApsActions.DescribeLoggingConfiguration,
		ApsActions.DescribeQueryLoggingConfiguration,
		ApsActions.DescribeResourcePolicy,
		ApsActions.DescribeRuleGroupsNamespace,
		ApsActions.DescribeScraper,
		ApsActions.DescribeScraperLoggingConfiguration,
		ApsActions.DescribeWorkspace,
		ApsActions.DescribeWorkspaceConfiguration,
		ApsActions.actionGetAlertManagerSilence,
		ApsActions.actionGetAlertManagerStatus,
		ApsActions.actionGetDefaultScraperConfiguration,
		ApsActions.actionGetLabels,
		ApsActions.actionGetMetricMetadata,
		ApsActions.actionGetSeries,
		ApsActions.ListAlertManagerAlertGroups,
		ApsActions.ListAlertManagerAlerts,
		ApsActions.ListAlertManagerReceivers,
		ApsActions.ListAlertManagerSilences,
		ApsActions.ListAlerts,
		ApsActions.ListRules,
		ApsActions.ListTagsForResource,
		ApsActions.PreviewAnomalyDetector,
		ApsActions.QueryMetrics,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApsActions.CreateAlertManagerAlerts,
		ApsActions.CreateAlertManagerDefinition,
		ApsActions.CreateAnomalyDetector,
		ApsActions.CreateLoggingConfiguration,
		ApsActions.CreateQueryLoggingConfiguration,
		ApsActions.CreateRuleGroupsNamespace,
		ApsActions.CreateScraper,
		ApsActions.CreateWorkspace,
		ApsActions.DeleteAlertManagerDefinition,
		ApsActions.DeleteAlertManagerSilence,
		ApsActions.DeleteAnomalyDetector,
		ApsActions.DeleteLoggingConfiguration,
		ApsActions.DeleteQueryLoggingConfiguration,
		ApsActions.DeleteResourcePolicy,
		ApsActions.DeleteRuleGroupsNamespace,
		ApsActions.DeleteScraper,
		ApsActions.DeleteScraperLoggingConfiguration,
		ApsActions.DeleteWorkspace,
		ApsActions.PutAlertManagerDefinition,
		ApsActions.PutAlertManagerSilences,
		ApsActions.PutAnomalyDetector,
		ApsActions.PutResourcePolicy,
		ApsActions.PutRuleGroupsNamespace,
		ApsActions.RemoteWrite,
		ApsActions.UpdateLoggingConfiguration,
		ApsActions.UpdateQueryLoggingConfiguration,
		ApsActions.UpdateScraper,
		ApsActions.UpdateScraperLoggingConfiguration,
		ApsActions.UpdateWorkspaceAlias,
		ApsActions.UpdateWorkspaceConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApsActions.ListAnomalyDetectors,
		ApsActions.ListRuleGroupsNamespaces,
		ApsActions.ListScrapers,
		ApsActions.ListWorkspaces,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ApsActions.TagResource,
		ApsActions.UntagResource,
	];
}

/**
 * Properties for building a anomalydetector ARN.
 */
export interface ApsAnomalydetectorArnProps {
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
}

/**
 * Parsed components of a anomalydetector ARN.
 */
export interface ApsAnomalydetectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
	/** The AnomalyDetectorId component. */
	readonly anomalyDetectorId: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface ApsClusterArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface ApsClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

/**
 * Properties for building a rulegroupsnamespace ARN.
 */
export interface ApsRulegroupsnamespaceArnProps {
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
}

/**
 * Parsed components of a rulegroupsnamespace ARN.
 */
export interface ApsRulegroupsnamespaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
	/** The Namespace component. */
	readonly namespace: string;
}

/**
 * Properties for building a scraper ARN.
 */
export interface ApsScraperArnProps {
	/** The ScraperId component of the ARN. */
	readonly scraperId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a scraper ARN.
 */
export interface ApsScraperArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ScraperId component. */
	readonly scraperId: string;
}

/**
 * Properties for building a workspace ARN.
 */
export interface ApsWorkspaceArnProps {
	/** The WorkspaceId component of the ARN. */
	readonly workspaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workspace ARN.
 */
export interface ApsWorkspaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
}

const AnomalydetectorArnRegex =
	/^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):anomalydetector\/(?<workspaceId>[^:/?]+)\/(?<anomalyDetectorId>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterName>[^:/?]+)$/;
const RulegroupsnamespaceArnRegex =
	/^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):rulegroupsnamespace\/(?<workspaceId>[^:/?]+)\/(?<namespace>[^:/?]+)$/;
const ScraperArnRegex =
	/^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):scraper\/(?<scraperId>[^:/?]+)$/;
const WorkspaceArnRegex =
	/^arn:(?<partition>[^:]+):aps:(?<region>[^:]*):(?<account>[^:]*):workspace\/(?<workspaceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for aps resources.
 */
export class ApsResources {
	/**
	 * Builds an ARN for the anomalydetector resource.
	 */
	static anomalydetector(props: ApsAnomalydetectorArnProps): string {
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
	static parseAnomalydetectorArn(arn: string): ApsAnomalydetectorArnComponents {
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
	static cluster(props: ApsClusterArnProps): string {
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
	static parseClusterArn(arn: string): ApsClusterArnComponents {
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
	static rulegroupsnamespace(props: ApsRulegroupsnamespaceArnProps): string {
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
	static parseRulegroupsnamespaceArn(
		arn: string,
	): ApsRulegroupsnamespaceArnComponents {
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
	static scraper(props: ApsScraperArnProps): string {
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
	static parseScraperArn(arn: string): ApsScraperArnComponents {
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
	static workspace(props: ApsWorkspaceArnProps): string {
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
	static parseWorkspaceArn(arn: string): ApsWorkspaceArnComponents {
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
	static readonly CreateAlertManagerDefinition: string[] = [
		"aps:CreateAlertManagerDefinition",
	];
	/** IAM actions required for the CreateAnomalyDetector API call. */
	static readonly CreateAnomalyDetector: string[] = [
		"aps:CreateAnomalyDetector",
		"aps:TagResource",
	];
	/** IAM actions required for the CreateLoggingConfiguration API call. */
	static readonly CreateLoggingConfiguration: string[] = [
		"aps:CreateLoggingConfiguration",
	];
	/** IAM actions required for the CreateQueryLoggingConfiguration API call. */
	static readonly CreateQueryLoggingConfiguration: string[] = [
		"aps:CreateQueryLoggingConfiguration",
	];
	/** IAM actions required for the CreateRuleGroupsNamespace API call. */
	static readonly CreateRuleGroupsNamespace: string[] = [
		"aps:CreateRuleGroupsNamespace",
		"aps:TagResource",
	];
	/** IAM actions required for the CreateScraper API call. */
	static readonly CreateScraper: string[] = [
		"aps:CreateScraper",
		"iam:PassRole",
		"aps:TagResource",
	];
	/** IAM actions required for the CreateWorkspace API call. */
	static readonly CreateWorkspace: string[] = [
		"aps:CreateWorkspace",
		"aps:TagResource",
	];
	/** IAM actions required for the DeleteAlertManagerDefinition API call. */
	static readonly DeleteAlertManagerDefinition: string[] = [
		"aps:DeleteAlertManagerDefinition",
	];
	/** IAM actions required for the DeleteAnomalyDetector API call. */
	static readonly DeleteAnomalyDetector: string[] = [
		"aps:DeleteAnomalyDetector",
	];
	/** IAM actions required for the DeleteLoggingConfiguration API call. */
	static readonly DeleteLoggingConfiguration: string[] = [
		"aps:DeleteLoggingConfiguration",
	];
	/** IAM actions required for the DeleteQueryLoggingConfiguration API call. */
	static readonly DeleteQueryLoggingConfiguration: string[] = [
		"aps:DeleteQueryLoggingConfiguration",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = ["aps:DeleteResourcePolicy"];
	/** IAM actions required for the DeleteRuleGroupsNamespace API call. */
	static readonly DeleteRuleGroupsNamespace: string[] = [
		"aps:DeleteRuleGroupsNamespace",
	];
	/** IAM actions required for the DeleteScraper API call. */
	static readonly DeleteScraper: string[] = ["aps:DeleteScraper"];
	/** IAM actions required for the DeleteScraperLoggingConfiguration API call. */
	static readonly DeleteScraperLoggingConfiguration: string[] = [
		"aps:DeleteScraperLoggingConfiguration",
	];
	/** IAM actions required for the DeleteWorkspace API call. */
	static readonly DeleteWorkspace: string[] = ["aps:DeleteWorkspace"];
	/** IAM actions required for the DescribeAlertManagerDefinition API call. */
	static readonly DescribeAlertManagerDefinition: string[] = [
		"aps:DescribeAlertManagerDefinition",
	];
	/** IAM actions required for the DescribeAnomalyDetector API call. */
	static readonly DescribeAnomalyDetector: string[] = [
		"aps:DescribeAnomalyDetector",
	];
	/** IAM actions required for the DescribeLoggingConfiguration API call. */
	static readonly DescribeLoggingConfiguration: string[] = [
		"aps:DescribeLoggingConfiguration",
	];
	/** IAM actions required for the DescribeQueryLoggingConfiguration API call. */
	static readonly DescribeQueryLoggingConfiguration: string[] = [
		"aps:DescribeQueryLoggingConfiguration",
	];
	/** IAM actions required for the DescribeResourcePolicy API call. */
	static readonly DescribeResourcePolicy: string[] = [
		"aps:DescribeResourcePolicy",
	];
	/** IAM actions required for the DescribeRuleGroupsNamespace API call. */
	static readonly DescribeRuleGroupsNamespace: string[] = [
		"aps:DescribeRuleGroupsNamespace",
	];
	/** IAM actions required for the DescribeScraper API call. */
	static readonly DescribeScraper: string[] = ["aps:DescribeScraper"];
	/** IAM actions required for the DescribeScraperLoggingConfiguration API call. */
	static readonly DescribeScraperLoggingConfiguration: string[] = [
		"aps:DescribeScraperLoggingConfiguration",
	];
	/** IAM actions required for the DescribeWorkspace API call. */
	static readonly DescribeWorkspace: string[] = ["aps:DescribeWorkspace"];
	/** IAM actions required for the DescribeWorkspaceConfiguration API call. */
	static readonly DescribeWorkspaceConfiguration: string[] = [
		"aps:DescribeWorkspaceConfiguration",
	];
	/** IAM actions required for the GetDefaultScraperConfiguration API call. */
	static readonly opGetDefaultScraperConfiguration: string[] = [
		"aps:GetDefaultScraperConfiguration",
	];
	/** IAM actions required for the ListAnomalyDetectors API call. */
	static readonly ListAnomalyDetectors: string[] = ["aps:ListAnomalyDetectors"];
	/** IAM actions required for the ListRuleGroupsNamespaces API call. */
	static readonly ListRuleGroupsNamespaces: string[] = [
		"aps:ListRuleGroupsNamespaces",
	];
	/** IAM actions required for the ListScrapers API call. */
	static readonly ListScrapers: string[] = ["aps:ListScrapers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["aps:ListTagsForResource"];
	/** IAM actions required for the ListWorkspaces API call. */
	static readonly ListWorkspaces: string[] = ["aps:ListWorkspaces"];
	/** IAM actions required for the PutAlertManagerDefinition API call. */
	static readonly PutAlertManagerDefinition: string[] = [
		"aps:PutAlertManagerDefinition",
	];
	/** IAM actions required for the PutAnomalyDetector API call. */
	static readonly PutAnomalyDetector: string[] = ["aps:PutAnomalyDetector"];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = ["aps:PutResourcePolicy"];
	/** IAM actions required for the PutRuleGroupsNamespace API call. */
	static readonly PutRuleGroupsNamespace: string[] = [
		"aps:PutRuleGroupsNamespace",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["aps:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["aps:UntagResource"];
	/** IAM actions required for the UpdateLoggingConfiguration API call. */
	static readonly UpdateLoggingConfiguration: string[] = [
		"aps:UpdateLoggingConfiguration",
	];
	/** IAM actions required for the UpdateQueryLoggingConfiguration API call. */
	static readonly UpdateQueryLoggingConfiguration: string[] = [
		"aps:UpdateQueryLoggingConfiguration",
	];
	/** IAM actions required for the UpdateScraper API call. */
	static readonly UpdateScraper: string[] = [
		"iam:PassRole",
		"aps:UpdateScraper",
	];
	/** IAM actions required for the UpdateScraperLoggingConfiguration API call. */
	static readonly UpdateScraperLoggingConfiguration: string[] = [
		"aps:UpdateScraperLoggingConfiguration",
	];
	/** IAM actions required for the UpdateWorkspaceAlias API call. */
	static readonly UpdateWorkspaceAlias: string[] = ["aps:UpdateWorkspaceAlias"];
	/** IAM actions required for the UpdateWorkspaceConfiguration API call. */
	static readonly UpdateWorkspaceConfiguration: string[] = [
		"aps:UpdateWorkspaceConfiguration",
	];
}

/**
 * Condition key constants and builders for aps.
 */
export class ApsConditions {
	/** Condition keys applicable to the CreateAlertManagerAlerts action. */
	static readonly CreateAlertManagerAlertsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAlertManagerDefinition action. */
	static readonly CreateAlertManagerDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateAnomalyDetector action. */
	static readonly CreateAnomalyDetectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateLoggingConfiguration action. */
	static readonly CreateLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateQueryLoggingConfiguration action. */
	static readonly CreateQueryLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreateRuleGroupsNamespace action. */
	static readonly CreateRuleGroupsNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateScraper action. */
	static readonly CreateScraperConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkspace action. */
	static readonly CreateWorkspaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAlertManagerDefinition action. */
	static readonly DeleteAlertManagerDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAlertManagerSilence action. */
	static readonly DeleteAlertManagerSilenceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteAnomalyDetector action. */
	static readonly DeleteAnomalyDetectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteLoggingConfiguration action. */
	static readonly DeleteLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteQueryLoggingConfiguration action. */
	static readonly DeleteQueryLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteResourcePolicy action. */
	static readonly DeleteResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRuleGroupsNamespace action. */
	static readonly DeleteRuleGroupsNamespaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteScraper action. */
	static readonly DeleteScraperConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteScraperLoggingConfiguration action. */
	static readonly DeleteScraperLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteWorkspace action. */
	static readonly DeleteWorkspaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAlertManagerDefinition action. */
	static readonly DescribeAlertManagerDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeAnomalyDetector action. */
	static readonly DescribeAnomalyDetectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeLoggingConfiguration action. */
	static readonly DescribeLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeQueryLoggingConfiguration action. */
	static readonly DescribeQueryLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeResourcePolicy action. */
	static readonly DescribeResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeRuleGroupsNamespace action. */
	static readonly DescribeRuleGroupsNamespaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeScraper action. */
	static readonly DescribeScraperConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeScraperLoggingConfiguration action. */
	static readonly DescribeScraperLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeWorkspace action. */
	static readonly DescribeWorkspaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeWorkspaceConfiguration action. */
	static readonly DescribeWorkspaceConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAlertManagerSilence action. */
	static readonly actionGetAlertManagerSilenceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetAlertManagerStatus action. */
	static readonly actionGetAlertManagerStatusConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetLabels action. */
	static readonly actionGetLabelsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetMetricMetadata action. */
	static readonly actionGetMetricMetadataConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSeries action. */
	static readonly actionGetSeriesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerAlertGroups action. */
	static readonly ListAlertManagerAlertGroupsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerAlerts action. */
	static readonly ListAlertManagerAlertsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerReceivers action. */
	static readonly ListAlertManagerReceiversConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlertManagerSilences action. */
	static readonly ListAlertManagerSilencesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAlerts action. */
	static readonly ListAlertsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListAnomalyDetectors action. */
	static readonly ListAnomalyDetectorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRuleGroupsNamespaces action. */
	static readonly ListRuleGroupsNamespacesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRules action. */
	static readonly ListRulesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PreviewAnomalyDetector action. */
	static readonly PreviewAnomalyDetectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAlertManagerDefinition action. */
	static readonly PutAlertManagerDefinitionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAlertManagerSilences action. */
	static readonly PutAlertManagerSilencesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutAnomalyDetector action. */
	static readonly PutAnomalyDetectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutResourcePolicy action. */
	static readonly PutResourcePolicyConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutRuleGroupsNamespace action. */
	static readonly PutRuleGroupsNamespaceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the QueryMetrics action. */
	static readonly QueryMetricsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RemoteWrite action. */
	static readonly RemoteWriteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateLoggingConfiguration action. */
	static readonly UpdateLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateQueryLoggingConfiguration action. */
	static readonly UpdateQueryLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateScraper action. */
	static readonly UpdateScraperConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateScraperLoggingConfiguration action. */
	static readonly UpdateScraperLoggingConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkspaceAlias action. */
	static readonly UpdateWorkspaceAliasConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateWorkspaceConfiguration action. */
	static readonly UpdateWorkspaceConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
