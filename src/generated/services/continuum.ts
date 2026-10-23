// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/continuum.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the continuum service.
 */
export class ContinuumActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "continuum";

	/** [Write] continuum:AssociateCollector */
	static readonly AssociateCollector = "continuum:AssociateCollector";
	/** [Write] continuum:CreateCodeFinding */
	static readonly CreateCodeFinding = "continuum:CreateCodeFinding";
	/** [Write] continuum:CreateCodeScan */
	static readonly CreateCodeScan = "continuum:CreateCodeScan";
	/** [Write] continuum:CreateCollector */
	static readonly CreateCollector = "continuum:CreateCollector";
	/** [Write] continuum:CreateEnvironment */
	static readonly CreateEnvironment = "continuum:CreateEnvironment";
	/** [Write] continuum:CreateIntegration */
	static readonly CreateIntegration = "continuum:CreateIntegration";
	/** [Write] continuum:DeleteCollector */
	static readonly DeleteCollector = "continuum:DeleteCollector";
	/** [Write] continuum:DeleteEnvironment */
	static readonly DeleteEnvironment = "continuum:DeleteEnvironment";
	/** [Write] continuum:DeleteIntegration */
	static readonly DeleteIntegration = "continuum:DeleteIntegration";
	/** [Write] continuum:DisassociateCollector */
	static readonly DisassociateCollector = "continuum:DisassociateCollector";
	/** [Read] continuum:GetCodeFinding */
	static readonly actionGetCodeFinding = "continuum:GetCodeFinding";
	/** [Read] continuum:GetCodeIssue */
	static readonly actionGetCodeIssue = "continuum:GetCodeIssue";
	/** [Read] continuum:GetCodeIssueArtifact */
	static readonly actionGetCodeIssueArtifact = "continuum:GetCodeIssueArtifact";
	/** [Read] continuum:GetCodeScan */
	static readonly actionGetCodeScan = "continuum:GetCodeScan";
	/** [Read] continuum:GetCollector */
	static readonly actionGetCollector = "continuum:GetCollector";
	/** [Read] continuum:GetCollectorDataAccessAuthorization */
	static readonly actionGetCollectorDataAccessAuthorization =
		"continuum:GetCollectorDataAccessAuthorization";
	/** [Read] continuum:GetEnvironment */
	static readonly actionGetEnvironment = "continuum:GetEnvironment";
	/** [Read] continuum:GetIntegration */
	static readonly actionGetIntegration = "continuum:GetIntegration";
	/** [Read] continuum:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "continuum:GetResourcePolicy";
	/** [List] continuum:ListAssociatedCollectors */
	static readonly ListAssociatedCollectors =
		"continuum:ListAssociatedCollectors";
	/** [List] continuum:ListAssociatedEnvironments */
	static readonly ListAssociatedEnvironments =
		"continuum:ListAssociatedEnvironments";
	/** [List] continuum:ListCodeFindings */
	static readonly ListCodeFindings = "continuum:ListCodeFindings";
	/** [List] continuum:ListCodeIssueArtifacts */
	static readonly ListCodeIssueArtifacts = "continuum:ListCodeIssueArtifacts";
	/** [List] continuum:ListCodeIssues */
	static readonly ListCodeIssues = "continuum:ListCodeIssues";
	/** [List] continuum:ListCodeScans */
	static readonly ListCodeScans = "continuum:ListCodeScans";
	/** [List] continuum:ListCollectors */
	static readonly ListCollectors = "continuum:ListCollectors";
	/** [List] continuum:ListEnvironments */
	static readonly ListEnvironments = "continuum:ListEnvironments";
	/** [List] continuum:ListIntegrations */
	static readonly ListIntegrations = "continuum:ListIntegrations";
	/** [Write] continuum:PutResourcePolicy */
	static readonly PutResourcePolicy = "continuum:PutResourcePolicy";
	/** [Write] continuum:StartIntegrationAuthorization */
	static readonly StartIntegrationAuthorization =
		"continuum:StartIntegrationAuthorization";
	/** [Write] continuum:UpdateCollector */
	static readonly UpdateCollector = "continuum:UpdateCollector";
	/** [Write] continuum:UpdateEnvironment */
	static readonly UpdateEnvironment = "continuum:UpdateEnvironment";
	/** [Write] continuum:UpdateIntegration */
	static readonly UpdateIntegration = "continuum:UpdateIntegration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ContinuumActions.actionGetCodeFinding,
		ContinuumActions.actionGetCodeIssue,
		ContinuumActions.actionGetCodeIssueArtifact,
		ContinuumActions.actionGetCodeScan,
		ContinuumActions.actionGetCollector,
		ContinuumActions.actionGetCollectorDataAccessAuthorization,
		ContinuumActions.actionGetEnvironment,
		ContinuumActions.actionGetIntegration,
		ContinuumActions.actionGetResourcePolicy,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ContinuumActions.AssociateCollector,
		ContinuumActions.CreateCodeFinding,
		ContinuumActions.CreateCodeScan,
		ContinuumActions.CreateCollector,
		ContinuumActions.CreateEnvironment,
		ContinuumActions.CreateIntegration,
		ContinuumActions.DeleteCollector,
		ContinuumActions.DeleteEnvironment,
		ContinuumActions.DeleteIntegration,
		ContinuumActions.DisassociateCollector,
		ContinuumActions.PutResourcePolicy,
		ContinuumActions.StartIntegrationAuthorization,
		ContinuumActions.UpdateCollector,
		ContinuumActions.UpdateEnvironment,
		ContinuumActions.UpdateIntegration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ContinuumActions.ListAssociatedCollectors,
		ContinuumActions.ListAssociatedEnvironments,
		ContinuumActions.ListCodeFindings,
		ContinuumActions.ListCodeIssueArtifacts,
		ContinuumActions.ListCodeIssues,
		ContinuumActions.ListCodeScans,
		ContinuumActions.ListCollectors,
		ContinuumActions.ListEnvironments,
		ContinuumActions.ListIntegrations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a code-findings ARN.
 */
export interface ContinuumCodeFindingsArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** The FindingId component of the ARN. */
	readonly findingId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a code-findings ARN.
 */
export interface ContinuumCodeFindingsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The FindingId component. */
	readonly findingId: string;
}

/**
 * Properties for building a code-issues ARN.
 */
export interface ContinuumCodeIssuesArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** The IssueId component of the ARN. */
	readonly issueId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a code-issues ARN.
 */
export interface ContinuumCodeIssuesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The IssueId component. */
	readonly issueId: string;
}

/**
 * Properties for building a code-scans ARN.
 */
export interface ContinuumCodeScansArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** The ScanRunId component of the ARN. */
	readonly scanRunId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a code-scans ARN.
 */
export interface ContinuumCodeScansArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The ScanRunId component. */
	readonly scanRunId: string;
}

/**
 * Properties for building a collectors ARN.
 */
export interface ContinuumCollectorsArnProps {
	/** The CollectorId component of the ARN. */
	readonly collectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a collectors ARN.
 */
export interface ContinuumCollectorsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CollectorId component. */
	readonly collectorId: string;
}

/**
 * Properties for building a environments ARN.
 */
export interface ContinuumEnvironmentsArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environments ARN.
 */
export interface ContinuumEnvironmentsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

/**
 * Properties for building a integrations ARN.
 */
export interface ContinuumIntegrationsArnProps {
	/** The IntegrationId component of the ARN. */
	readonly integrationId: string;
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
export interface ContinuumIntegrationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

const CodeFindingsArnRegex =
	/^arn:(?<partition>[^:]+):continuum:(?<region>[^:]*):(?<account>[^:]*):environments\/(?<environmentId>[^:/?]+)\/code-findings\/(?<findingId>[^:/?]+)$/;
const CodeIssuesArnRegex =
	/^arn:(?<partition>[^:]+):continuum:(?<region>[^:]*):(?<account>[^:]*):environments\/(?<environmentId>[^:/?]+)\/code-issues\/(?<issueId>[^:/?]+)$/;
const CodeScansArnRegex =
	/^arn:(?<partition>[^:]+):continuum:(?<region>[^:]*):(?<account>[^:]*):environments\/(?<environmentId>[^:/?]+)\/code-scans\/(?<scanRunId>[^:/?]+)$/;
const CollectorsArnRegex =
	/^arn:(?<partition>[^:]+):continuum:(?<region>[^:]*):(?<account>[^:]*):collectors\/(?<collectorId>[^:/?]+)$/;
const EnvironmentsArnRegex =
	/^arn:(?<partition>[^:]+):continuum:(?<region>[^:]*):(?<account>[^:]*):environments\/(?<environmentId>[^:/?]+)$/;
const IntegrationsArnRegex =
	/^arn:(?<partition>[^:]+):continuum:(?<region>[^:]*):(?<account>[^:]*):integrations\/(?<integrationId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for continuum resources.
 */
export class ContinuumResources {
	/**
	 * Builds an ARN for the code-findings resource.
	 */
	static codeFindings(props: ContinuumCodeFindingsArnProps): string {
		return `arn:${props.partition ?? "aws"}:continuum:${props.region ?? "*"}:${props.account ?? "*"}:environments/${props.environmentId}/code-findings/${props.findingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the code-findings resource.
	 */
	static isValidCodeFindingsArn(arn: string): boolean {
		return CodeFindingsArnRegex.test(arn);
	}

	/**
	 * Parses a code-findings ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeFindingsArn(arn: string): ContinuumCodeFindingsArnComponents {
		const match = CodeFindingsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid code-findings ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			findingId: match.groups!.findingId,
		};
	}

	/**
	 * Builds an ARN for the code-issues resource.
	 */
	static codeIssues(props: ContinuumCodeIssuesArnProps): string {
		return `arn:${props.partition ?? "aws"}:continuum:${props.region ?? "*"}:${props.account ?? "*"}:environments/${props.environmentId}/code-issues/${props.issueId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the code-issues resource.
	 */
	static isValidCodeIssuesArn(arn: string): boolean {
		return CodeIssuesArnRegex.test(arn);
	}

	/**
	 * Parses a code-issues ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeIssuesArn(arn: string): ContinuumCodeIssuesArnComponents {
		const match = CodeIssuesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid code-issues ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			issueId: match.groups!.issueId,
		};
	}

	/**
	 * Builds an ARN for the code-scans resource.
	 */
	static codeScans(props: ContinuumCodeScansArnProps): string {
		return `arn:${props.partition ?? "aws"}:continuum:${props.region ?? "*"}:${props.account ?? "*"}:environments/${props.environmentId}/code-scans/${props.scanRunId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the code-scans resource.
	 */
	static isValidCodeScansArn(arn: string): boolean {
		return CodeScansArnRegex.test(arn);
	}

	/**
	 * Parses a code-scans ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeScansArn(arn: string): ContinuumCodeScansArnComponents {
		const match = CodeScansArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid code-scans ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			scanRunId: match.groups!.scanRunId,
		};
	}

	/**
	 * Builds an ARN for the collectors resource.
	 */
	static collectors(props: ContinuumCollectorsArnProps): string {
		return `arn:${props.partition ?? "aws"}:continuum:${props.region ?? "*"}:${props.account ?? "*"}:collectors/${props.collectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the collectors resource.
	 */
	static isValidCollectorsArn(arn: string): boolean {
		return CollectorsArnRegex.test(arn);
	}

	/**
	 * Parses a collectors ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCollectorsArn(arn: string): ContinuumCollectorsArnComponents {
		const match = CollectorsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid collectors ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			collectorId: match.groups!.collectorId,
		};
	}

	/**
	 * Builds an ARN for the environments resource.
	 */
	static environments(props: ContinuumEnvironmentsArnProps): string {
		return `arn:${props.partition ?? "aws"}:continuum:${props.region ?? "*"}:${props.account ?? "*"}:environments/${props.environmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environments resource.
	 */
	static isValidEnvironmentsArn(arn: string): boolean {
		return EnvironmentsArnRegex.test(arn);
	}

	/**
	 * Parses a environments ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentsArn(arn: string): ContinuumEnvironmentsArnComponents {
		const match = EnvironmentsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environments ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
		};
	}

	/**
	 * Builds an ARN for the integrations resource.
	 */
	static integrations(props: ContinuumIntegrationsArnProps): string {
		return `arn:${props.partition ?? "aws"}:continuum:${props.region ?? "*"}:${props.account ?? "*"}:integrations/${props.integrationId}`;
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
	static parseIntegrationsArn(arn: string): ContinuumIntegrationsArnComponents {
		const match = IntegrationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid integrations ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			integrationId: match.groups!.integrationId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for continuum.
 */
export class ContinuumOperations {
	/** IAM actions required for the AssociateCollector API call. */
	static readonly AssociateCollector: string[] = [];
	/** IAM actions required for the CreateCodeFinding API call. */
	static readonly CreateCodeFinding: string[] = [];
	/** IAM actions required for the CreateCodeScan API call. */
	static readonly CreateCodeScan: string[] = [];
	/** IAM actions required for the CreateCollector API call. */
	static readonly CreateCollector: string[] = [];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [];
	/** IAM actions required for the CreateIntegration API call. */
	static readonly CreateIntegration: string[] = [];
	/** IAM actions required for the DeleteCollector API call. */
	static readonly DeleteCollector: string[] = [];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = [];
	/** IAM actions required for the DeleteIntegration API call. */
	static readonly DeleteIntegration: string[] = [];
	/** IAM actions required for the DisassociateCollector API call. */
	static readonly DisassociateCollector: string[] = [];
	/** IAM actions required for the GetCodeFinding API call. */
	static readonly opGetCodeFinding: string[] = [];
	/** IAM actions required for the GetCodeIssue API call. */
	static readonly opGetCodeIssue: string[] = [];
	/** IAM actions required for the GetCodeIssueArtifact API call. */
	static readonly opGetCodeIssueArtifact: string[] = [];
	/** IAM actions required for the GetCodeScan API call. */
	static readonly opGetCodeScan: string[] = [];
	/** IAM actions required for the GetCollector API call. */
	static readonly opGetCollector: string[] = [];
	/** IAM actions required for the GetCollectorDataAccessAuthorization API call. */
	static readonly opGetCollectorDataAccessAuthorization: string[] = [];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = [];
	/** IAM actions required for the GetIntegration API call. */
	static readonly opGetIntegration: string[] = [];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [];
	/** IAM actions required for the ListAssociatedCollectors API call. */
	static readonly ListAssociatedCollectors: string[] = [];
	/** IAM actions required for the ListAssociatedEnvironments API call. */
	static readonly ListAssociatedEnvironments: string[] = [];
	/** IAM actions required for the ListCodeFindings API call. */
	static readonly ListCodeFindings: string[] = [];
	/** IAM actions required for the ListCodeIssueArtifacts API call. */
	static readonly ListCodeIssueArtifacts: string[] = [];
	/** IAM actions required for the ListCodeIssues API call. */
	static readonly ListCodeIssues: string[] = [];
	/** IAM actions required for the ListCodeScans API call. */
	static readonly ListCodeScans: string[] = [];
	/** IAM actions required for the ListCollectors API call. */
	static readonly ListCollectors: string[] = [];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = [];
	/** IAM actions required for the ListIntegrations API call. */
	static readonly ListIntegrations: string[] = [];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [];
	/** IAM actions required for the StartIntegrationAuthorization API call. */
	static readonly StartIntegrationAuthorization: string[] = [];
	/** IAM actions required for the UpdateCollector API call. */
	static readonly UpdateCollector: string[] = [];
	/** IAM actions required for the UpdateEnvironment API call. */
	static readonly UpdateEnvironment: string[] = [];
	/** IAM actions required for the UpdateIntegration API call. */
	static readonly UpdateIntegration: string[] = [];
}

/**
 * Condition key constants and builders for continuum.
 */
export class ContinuumConditions {
	/** Condition keys applicable to the AssociateCollector action. */
	static readonly AssociateCollectorConditionKeys: string[] = [
		"continuum:CollectorArn",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"continuum:RepositoryName",
	];
	/** Condition keys applicable to the CreateIntegration action. */
	static readonly CreateIntegrationConditionKeys: string[] = [
		"continuum:S3BucketName",
	];
	/** Condition keys applicable to the DisassociateCollector action. */
	static readonly DisassociateCollectorConditionKeys: string[] = [
		"continuum:CollectorArn",
	];
	/** Condition keys applicable to the GetCollectorDataAccessAuthorization action. */
	static readonly actionGetCollectorDataAccessAuthorizationConditionKeys: string[] =
		["continuum:EnvironmentArn"];
	/** Condition keys applicable to the UpdateEnvironment action. */
	static readonly UpdateEnvironmentConditionKeys: string[] = [
		"continuum:RepositoryName",
	];

	/** Condition key: continuum:CollectorArn (ArrayOfARN) */
	static readonly COLLECTOR_ARN = "continuum:CollectorArn";
	/** Condition key: continuum:EnvironmentArn (ARN) */
	static readonly ENVIRONMENT_ARN = "continuum:EnvironmentArn";
	/** Condition key: continuum:RepositoryName (ArrayOfString) */
	static readonly REPOSITORY_NAME = "continuum:RepositoryName";
	/** Condition key: continuum:S3BucketName (String) */
	static readonly S3_BUCKET_NAME = "continuum:S3BucketName";

	/**
	 * Generates a condition block for `continuum:CollectorArn`.
	 */
	static collectorARN(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "continuum:CollectorArn": values } };
	}

	/**
	 * Generates a condition block for `continuum:EnvironmentArn`.
	 */
	static environmentARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "continuum:EnvironmentArn": value } };
	}

	/**
	 * Generates a condition block for `continuum:RepositoryName`.
	 */
	static repositoryName(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "continuum:RepositoryName": values },
		};
	}

	/**
	 * Generates a condition block for `continuum:S3BucketName`.
	 */
	static s3BucketName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "continuum:S3BucketName": value } };
	}
}
