// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/inspector2.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the inspector2 service.
 */
export class Inspector2Actions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "inspector2";

	/** [Write] inspector2:AssociateMember */
	static readonly AssociateMember = "inspector2:AssociateMember";
	/** [Write] inspector2:BatchAssociateCodeSecurityScanConfiguration */
	static readonly BatchAssociateCodeSecurityScanConfiguration =
		"inspector2:BatchAssociateCodeSecurityScanConfiguration";
	/** [Write] inspector2:BatchDisassociateCodeSecurityScanConfiguration */
	static readonly BatchDisassociateCodeSecurityScanConfiguration =
		"inspector2:BatchDisassociateCodeSecurityScanConfiguration";
	/** [Read] inspector2:BatchGetAccountStatus */
	static readonly BatchGetAccountStatus = "inspector2:BatchGetAccountStatus";
	/** [Read] inspector2:BatchGetCodeSnippet */
	static readonly BatchGetCodeSnippet = "inspector2:BatchGetCodeSnippet";
	/** [Read] inspector2:BatchGetFindingDetails */
	static readonly BatchGetFindingDetails = "inspector2:BatchGetFindingDetails";
	/** [Read] inspector2:BatchGetFreeTrialInfo */
	static readonly BatchGetFreeTrialInfo = "inspector2:BatchGetFreeTrialInfo";
	/** [Read] inspector2:BatchGetMemberEc2DeepInspectionStatus */
	static readonly BatchGetMemberEc2DeepInspectionStatus =
		"inspector2:BatchGetMemberEc2DeepInspectionStatus";
	/** [Write] inspector2:BatchUpdateMemberEc2DeepInspectionStatus */
	static readonly BatchUpdateMemberEc2DeepInspectionStatus =
		"inspector2:BatchUpdateMemberEc2DeepInspectionStatus";
	/** [Write] inspector2:CancelFindingsReport */
	static readonly CancelFindingsReport = "inspector2:CancelFindingsReport";
	/** [Write] inspector2:CancelSbomExport */
	static readonly CancelSbomExport = "inspector2:CancelSbomExport";
	/** [Write] inspector2:CreateCisScanConfiguration */
	static readonly CreateCisScanConfiguration =
		"inspector2:CreateCisScanConfiguration";
	/** [Write] inspector2:CreateCodeSecurityIntegration */
	static readonly CreateCodeSecurityIntegration =
		"inspector2:CreateCodeSecurityIntegration";
	/** [Write] inspector2:CreateCodeSecurityScanConfiguration */
	static readonly CreateCodeSecurityScanConfiguration =
		"inspector2:CreateCodeSecurityScanConfiguration";
	/** [Write] inspector2:CreateConnector */
	static readonly CreateConnector = "inspector2:CreateConnector";
	/** [Write] inspector2:CreateFilter */
	static readonly CreateFilter = "inspector2:CreateFilter";
	/** [Write] inspector2:CreateFindingsReport */
	static readonly CreateFindingsReport = "inspector2:CreateFindingsReport";
	/** [Write] inspector2:CreateSbomExport */
	static readonly CreateSbomExport = "inspector2:CreateSbomExport";
	/** [Write] inspector2:DeleteCisScanConfiguration */
	static readonly DeleteCisScanConfiguration =
		"inspector2:DeleteCisScanConfiguration";
	/** [Write] inspector2:DeleteCodeSecurityIntegration */
	static readonly DeleteCodeSecurityIntegration =
		"inspector2:DeleteCodeSecurityIntegration";
	/** [Write] inspector2:DeleteCodeSecurityScanConfiguration */
	static readonly DeleteCodeSecurityScanConfiguration =
		"inspector2:DeleteCodeSecurityScanConfiguration";
	/** [Write] inspector2:DeleteConnector */
	static readonly DeleteConnector = "inspector2:DeleteConnector";
	/** [Write] inspector2:DeleteFilter */
	static readonly DeleteFilter = "inspector2:DeleteFilter";
	/** [Read] inspector2:DescribeOrganizationConfiguration */
	static readonly DescribeOrganizationConfiguration =
		"inspector2:DescribeOrganizationConfiguration";
	/** [Write] inspector2:Disable */
	static readonly Disable = "inspector2:Disable";
	/** [Write] inspector2:DisableDelegatedAdminAccount */
	static readonly DisableDelegatedAdminAccount =
		"inspector2:DisableDelegatedAdminAccount";
	/** [Write] inspector2:DisassociateMember */
	static readonly DisassociateMember = "inspector2:DisassociateMember";
	/** [Write] inspector2:Enable */
	static readonly Enable = "inspector2:Enable";
	/** [Write] inspector2:EnableDelegatedAdminAccount */
	static readonly EnableDelegatedAdminAccount =
		"inspector2:EnableDelegatedAdminAccount";
	/** [Read] inspector2:GetCisScanReport */
	static readonly actionGetCisScanReport = "inspector2:GetCisScanReport";
	/** [List] inspector2:GetCisScanResultDetails */
	static readonly actionGetCisScanResultDetails =
		"inspector2:GetCisScanResultDetails";
	/** [Read] inspector2:GetClustersForImage */
	static readonly actionGetClustersForImage = "inspector2:GetClustersForImage";
	/** [Read] inspector2:GetCodeSecurityIntegration */
	static readonly actionGetCodeSecurityIntegration =
		"inspector2:GetCodeSecurityIntegration";
	/** [Read] inspector2:GetCodeSecurityScan */
	static readonly actionGetCodeSecurityScan = "inspector2:GetCodeSecurityScan";
	/** [Read] inspector2:GetCodeSecurityScanConfiguration */
	static readonly actionGetCodeSecurityScanConfiguration =
		"inspector2:GetCodeSecurityScanConfiguration";
	/** [Read] inspector2:GetConfiguration */
	static readonly actionGetConfiguration = "inspector2:GetConfiguration";
	/** [Read] inspector2:GetDelegatedAdminAccount */
	static readonly actionGetDelegatedAdminAccount =
		"inspector2:GetDelegatedAdminAccount";
	/** [Read] inspector2:GetEc2DeepInspectionConfiguration */
	static readonly actionGetEc2DeepInspectionConfiguration =
		"inspector2:GetEc2DeepInspectionConfiguration";
	/** [Read] inspector2:GetEncryptionKey */
	static readonly actionGetEncryptionKey = "inspector2:GetEncryptionKey";
	/** [Read] inspector2:GetFindingsReportStatus */
	static readonly actionGetFindingsReportStatus =
		"inspector2:GetFindingsReportStatus";
	/** [Read] inspector2:GetMember */
	static readonly actionGetMember = "inspector2:GetMember";
	/** [Read] inspector2:GetSbomExport */
	static readonly actionGetSbomExport = "inspector2:GetSbomExport";
	/** [List] inspector2:ListAccountPermissions */
	static readonly ListAccountPermissions = "inspector2:ListAccountPermissions";
	/** [List] inspector2:ListCisScanConfigurations */
	static readonly ListCisScanConfigurations =
		"inspector2:ListCisScanConfigurations";
	/** [List] inspector2:ListCisScanResultsAggregatedByChecks */
	static readonly ListCisScanResultsAggregatedByChecks =
		"inspector2:ListCisScanResultsAggregatedByChecks";
	/** [List] inspector2:ListCisScanResultsAggregatedByTargetResource */
	static readonly ListCisScanResultsAggregatedByTargetResource =
		"inspector2:ListCisScanResultsAggregatedByTargetResource";
	/** [List] inspector2:ListCisScans */
	static readonly ListCisScans = "inspector2:ListCisScans";
	/** [List] inspector2:ListCodeSecurityIntegrations */
	static readonly ListCodeSecurityIntegrations =
		"inspector2:ListCodeSecurityIntegrations";
	/** [List] inspector2:ListCodeSecurityScanConfigurationAssociations */
	static readonly ListCodeSecurityScanConfigurationAssociations =
		"inspector2:ListCodeSecurityScanConfigurationAssociations";
	/** [List] inspector2:ListCodeSecurityScanConfigurations */
	static readonly ListCodeSecurityScanConfigurations =
		"inspector2:ListCodeSecurityScanConfigurations";
	/** [List] inspector2:ListConnectorScanConfigurations */
	static readonly ListConnectorScanConfigurations =
		"inspector2:ListConnectorScanConfigurations";
	/** [List] inspector2:ListConnectors */
	static readonly ListConnectors = "inspector2:ListConnectors";
	/** [List] inspector2:ListCoverage */
	static readonly ListCoverage = "inspector2:ListCoverage";
	/** [List] inspector2:ListCoverageStatistics */
	static readonly ListCoverageStatistics = "inspector2:ListCoverageStatistics";
	/** [List] inspector2:ListDelegatedAdminAccounts */
	static readonly ListDelegatedAdminAccounts =
		"inspector2:ListDelegatedAdminAccounts";
	/** [List] inspector2:ListFilters */
	static readonly ListFilters = "inspector2:ListFilters";
	/** [List] inspector2:ListFindingAggregations */
	static readonly ListFindingAggregations =
		"inspector2:ListFindingAggregations";
	/** [List] inspector2:ListFindings */
	static readonly ListFindings = "inspector2:ListFindings";
	/** [List] inspector2:ListMembers */
	static readonly ListMembers = "inspector2:ListMembers";
	/** [Read] inspector2:ListTagsForResource */
	static readonly ListTagsForResource = "inspector2:ListTagsForResource";
	/** [List] inspector2:ListUsageTotals */
	static readonly ListUsageTotals = "inspector2:ListUsageTotals";
	/** [Write] inspector2:ResetEncryptionKey */
	static readonly ResetEncryptionKey = "inspector2:ResetEncryptionKey";
	/** [Read] inspector2:SearchVulnerabilities */
	static readonly SearchVulnerabilities = "inspector2:SearchVulnerabilities";
	/** [Write] inspector2:SendCisSessionHealth */
	static readonly SendCisSessionHealth = "inspector2:SendCisSessionHealth";
	/** [Write] inspector2:SendCisSessionTelemetry */
	static readonly SendCisSessionTelemetry =
		"inspector2:SendCisSessionTelemetry";
	/** [Write] inspector2:StartCisSession */
	static readonly StartCisSession = "inspector2:StartCisSession";
	/** [Write] inspector2:StartCodeSecurityScan */
	static readonly StartCodeSecurityScan = "inspector2:StartCodeSecurityScan";
	/** [Write] inspector2:StopCisSession */
	static readonly StopCisSession = "inspector2:StopCisSession";
	/** [Tagging] inspector2:TagResource */
	static readonly TagResource = "inspector2:TagResource";
	/** [Tagging] inspector2:UntagResource */
	static readonly UntagResource = "inspector2:UntagResource";
	/** [Write] inspector2:UpdateCisScanConfiguration */
	static readonly UpdateCisScanConfiguration =
		"inspector2:UpdateCisScanConfiguration";
	/** [Write] inspector2:UpdateCodeSecurityIntegration */
	static readonly UpdateCodeSecurityIntegration =
		"inspector2:UpdateCodeSecurityIntegration";
	/** [Write] inspector2:UpdateCodeSecurityScanConfiguration */
	static readonly UpdateCodeSecurityScanConfiguration =
		"inspector2:UpdateCodeSecurityScanConfiguration";
	/** [Write] inspector2:UpdateConfiguration */
	static readonly UpdateConfiguration = "inspector2:UpdateConfiguration";
	/** [Write] inspector2:UpdateConnector */
	static readonly UpdateConnector = "inspector2:UpdateConnector";
	/** [Write] inspector2:UpdateConnectorScanConfiguration */
	static readonly UpdateConnectorScanConfiguration =
		"inspector2:UpdateConnectorScanConfiguration";
	/** [Write] inspector2:UpdateEc2DeepInspectionConfiguration */
	static readonly UpdateEc2DeepInspectionConfiguration =
		"inspector2:UpdateEc2DeepInspectionConfiguration";
	/** [Write] inspector2:UpdateEncryptionKey */
	static readonly UpdateEncryptionKey = "inspector2:UpdateEncryptionKey";
	/** [Write] inspector2:UpdateFilter */
	static readonly UpdateFilter = "inspector2:UpdateFilter";
	/** [Write] inspector2:UpdateOrgEc2DeepInspectionConfiguration */
	static readonly UpdateOrgEc2DeepInspectionConfiguration =
		"inspector2:UpdateOrgEc2DeepInspectionConfiguration";
	/** [Write] inspector2:UpdateOrganizationConfiguration */
	static readonly UpdateOrganizationConfiguration =
		"inspector2:UpdateOrganizationConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Inspector2Actions.BatchGetAccountStatus,
		Inspector2Actions.BatchGetCodeSnippet,
		Inspector2Actions.BatchGetFindingDetails,
		Inspector2Actions.BatchGetFreeTrialInfo,
		Inspector2Actions.BatchGetMemberEc2DeepInspectionStatus,
		Inspector2Actions.DescribeOrganizationConfiguration,
		Inspector2Actions.actionGetCisScanReport,
		Inspector2Actions.actionGetClustersForImage,
		Inspector2Actions.actionGetCodeSecurityIntegration,
		Inspector2Actions.actionGetCodeSecurityScan,
		Inspector2Actions.actionGetCodeSecurityScanConfiguration,
		Inspector2Actions.actionGetConfiguration,
		Inspector2Actions.actionGetDelegatedAdminAccount,
		Inspector2Actions.actionGetEc2DeepInspectionConfiguration,
		Inspector2Actions.actionGetEncryptionKey,
		Inspector2Actions.actionGetFindingsReportStatus,
		Inspector2Actions.actionGetMember,
		Inspector2Actions.actionGetSbomExport,
		Inspector2Actions.ListTagsForResource,
		Inspector2Actions.SearchVulnerabilities,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Inspector2Actions.AssociateMember,
		Inspector2Actions.BatchAssociateCodeSecurityScanConfiguration,
		Inspector2Actions.BatchDisassociateCodeSecurityScanConfiguration,
		Inspector2Actions.BatchUpdateMemberEc2DeepInspectionStatus,
		Inspector2Actions.CancelFindingsReport,
		Inspector2Actions.CancelSbomExport,
		Inspector2Actions.CreateCisScanConfiguration,
		Inspector2Actions.CreateCodeSecurityIntegration,
		Inspector2Actions.CreateCodeSecurityScanConfiguration,
		Inspector2Actions.CreateConnector,
		Inspector2Actions.CreateFilter,
		Inspector2Actions.CreateFindingsReport,
		Inspector2Actions.CreateSbomExport,
		Inspector2Actions.DeleteCisScanConfiguration,
		Inspector2Actions.DeleteCodeSecurityIntegration,
		Inspector2Actions.DeleteCodeSecurityScanConfiguration,
		Inspector2Actions.DeleteConnector,
		Inspector2Actions.DeleteFilter,
		Inspector2Actions.Disable,
		Inspector2Actions.DisableDelegatedAdminAccount,
		Inspector2Actions.DisassociateMember,
		Inspector2Actions.Enable,
		Inspector2Actions.EnableDelegatedAdminAccount,
		Inspector2Actions.ResetEncryptionKey,
		Inspector2Actions.SendCisSessionHealth,
		Inspector2Actions.SendCisSessionTelemetry,
		Inspector2Actions.StartCisSession,
		Inspector2Actions.StartCodeSecurityScan,
		Inspector2Actions.StopCisSession,
		Inspector2Actions.UpdateCisScanConfiguration,
		Inspector2Actions.UpdateCodeSecurityIntegration,
		Inspector2Actions.UpdateCodeSecurityScanConfiguration,
		Inspector2Actions.UpdateConfiguration,
		Inspector2Actions.UpdateConnector,
		Inspector2Actions.UpdateConnectorScanConfiguration,
		Inspector2Actions.UpdateEc2DeepInspectionConfiguration,
		Inspector2Actions.UpdateEncryptionKey,
		Inspector2Actions.UpdateFilter,
		Inspector2Actions.UpdateOrgEc2DeepInspectionConfiguration,
		Inspector2Actions.UpdateOrganizationConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Inspector2Actions.actionGetCisScanResultDetails,
		Inspector2Actions.ListAccountPermissions,
		Inspector2Actions.ListCisScanConfigurations,
		Inspector2Actions.ListCisScanResultsAggregatedByChecks,
		Inspector2Actions.ListCisScanResultsAggregatedByTargetResource,
		Inspector2Actions.ListCisScans,
		Inspector2Actions.ListCodeSecurityIntegrations,
		Inspector2Actions.ListCodeSecurityScanConfigurationAssociations,
		Inspector2Actions.ListCodeSecurityScanConfigurations,
		Inspector2Actions.ListConnectorScanConfigurations,
		Inspector2Actions.ListConnectors,
		Inspector2Actions.ListCoverage,
		Inspector2Actions.ListCoverageStatistics,
		Inspector2Actions.ListDelegatedAdminAccounts,
		Inspector2Actions.ListFilters,
		Inspector2Actions.ListFindingAggregations,
		Inspector2Actions.ListFindings,
		Inspector2Actions.ListMembers,
		Inspector2Actions.ListUsageTotals,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Inspector2Actions.TagResource,
		Inspector2Actions.UntagResource,
	];
}

/**
 * Properties for building a CIS Scan Configuration ARN.
 */
export interface Inspector2CisScanConfigurationArnProps {
	/** The OwnerId component of the ARN. */
	readonly ownerId: string;
	/** The CISScanConfigurationId component of the ARN. */
	readonly cisScanConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a CIS Scan Configuration ARN.
 */
export interface Inspector2CisScanConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OwnerId component. */
	readonly ownerId: string;
	/** The CISScanConfigurationId component. */
	readonly cisScanConfigurationId: string;
}

/**
 * Properties for building a Code Security Integration ARN.
 */
export interface Inspector2CodeSecurityIntegrationArnProps {
	/** The CodeSecurityIntegrationId component of the ARN. */
	readonly codeSecurityIntegrationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Code Security Integration ARN.
 */
export interface Inspector2CodeSecurityIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CodeSecurityIntegrationId component. */
	readonly codeSecurityIntegrationId: string;
}

/**
 * Properties for building a Code Security Scan Configuration ARN.
 */
export interface Inspector2CodeSecurityScanConfigurationArnProps {
	/** The OwnerId component of the ARN. */
	readonly ownerId: string;
	/** The CodeSecurityScanConfigurationId component of the ARN. */
	readonly codeSecurityScanConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Code Security Scan Configuration ARN.
 */
export interface Inspector2CodeSecurityScanConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OwnerId component. */
	readonly ownerId: string;
	/** The CodeSecurityScanConfigurationId component. */
	readonly codeSecurityScanConfigurationId: string;
}

/**
 * Properties for building a Connector ARN.
 */
export interface Inspector2ConnectorArnProps {
	/** The ConnectorId component of the ARN. */
	readonly connectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Connector ARN.
 */
export interface Inspector2ConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
}

/**
 * Properties for building a Filter ARN.
 */
export interface Inspector2FilterArnProps {
	/** The OwnerId component of the ARN. */
	readonly ownerId: string;
	/** The FilterId component of the ARN. */
	readonly filterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Filter ARN.
 */
export interface Inspector2FilterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OwnerId component. */
	readonly ownerId: string;
	/** The FilterId component. */
	readonly filterId: string;
}

/**
 * Properties for building a Finding ARN.
 */
export interface Inspector2FindingArnProps {
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
 * Parsed components of a Finding ARN.
 */
export interface Inspector2FindingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FindingId component. */
	readonly findingId: string;
}

const CisScanConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):owner\/(?<ownerId>[^:/?]+)\/cis-configuration\/(?<cisScanConfigurationId>[^:/?]+)$/;
const CodeSecurityIntegrationArnRegex =
	/^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):codesecurity-integration\/(?<codeSecurityIntegrationId>[^:/?]+)$/;
const CodeSecurityScanConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):owner\/(?<ownerId>[^:/?]+)\/codesecurity-configuration\/(?<codeSecurityScanConfigurationId>[^:/?]+)$/;
const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)$/;
const FilterArnRegex =
	/^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):owner\/(?<ownerId>[^:/?]+)\/filter\/(?<filterId>[^:/?]+)$/;
const FindingArnRegex =
	/^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):finding\/(?<findingId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for inspector2 resources.
 */
export class Inspector2Resources {
	/**
	 * Builds an ARN for the CIS Scan Configuration resource.
	 */
	static cisScanConfiguration(
		props: Inspector2CisScanConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:inspector2:${props.region ?? "*"}:${props.account ?? "*"}:owner/${props.ownerId}/cis-configuration/${props.cisScanConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the CIS Scan Configuration resource.
	 */
	static isValidCisScanConfigurationArn(arn: string): boolean {
		return CisScanConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a CIS Scan Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCisScanConfigurationArn(
		arn: string,
	): Inspector2CisScanConfigurationArnComponents {
		const match = CisScanConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid CIS Scan Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ownerId: match.groups!.ownerId,
			cisScanConfigurationId: match.groups!.cisScanConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the Code Security Integration resource.
	 */
	static codeSecurityIntegration(
		props: Inspector2CodeSecurityIntegrationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:inspector2:${props.region ?? "*"}:${props.account ?? "*"}:codesecurity-integration/${props.codeSecurityIntegrationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Code Security Integration resource.
	 */
	static isValidCodeSecurityIntegrationArn(arn: string): boolean {
		return CodeSecurityIntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a Code Security Integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeSecurityIntegrationArn(
		arn: string,
	): Inspector2CodeSecurityIntegrationArnComponents {
		const match = CodeSecurityIntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Code Security Integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			codeSecurityIntegrationId: match.groups!.codeSecurityIntegrationId,
		};
	}

	/**
	 * Builds an ARN for the Code Security Scan Configuration resource.
	 */
	static codeSecurityScanConfiguration(
		props: Inspector2CodeSecurityScanConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:inspector2:${props.region ?? "*"}:${props.account ?? "*"}:owner/${props.ownerId}/codesecurity-configuration/${props.codeSecurityScanConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Code Security Scan Configuration resource.
	 */
	static isValidCodeSecurityScanConfigurationArn(arn: string): boolean {
		return CodeSecurityScanConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a Code Security Scan Configuration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeSecurityScanConfigurationArn(
		arn: string,
	): Inspector2CodeSecurityScanConfigurationArnComponents {
		const match = CodeSecurityScanConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Code Security Scan Configuration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ownerId: match.groups!.ownerId,
			codeSecurityScanConfigurationId:
				match.groups!.codeSecurityScanConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the Connector resource.
	 */
	static connector(props: Inspector2ConnectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:inspector2:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a Connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(arn: string): Inspector2ConnectorArnComponents {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
		};
	}

	/**
	 * Builds an ARN for the Filter resource.
	 */
	static filter(props: Inspector2FilterArnProps): string {
		return `arn:${props.partition ?? "aws"}:inspector2:${props.region ?? "*"}:${props.account ?? "*"}:owner/${props.ownerId}/filter/${props.filterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Filter resource.
	 */
	static isValidFilterArn(arn: string): boolean {
		return FilterArnRegex.test(arn);
	}

	/**
	 * Parses a Filter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFilterArn(arn: string): Inspector2FilterArnComponents {
		const match = FilterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Filter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ownerId: match.groups!.ownerId,
			filterId: match.groups!.filterId,
		};
	}

	/**
	 * Builds an ARN for the Finding resource.
	 */
	static finding(props: Inspector2FindingArnProps): string {
		return `arn:${props.partition ?? "aws"}:inspector2:${props.region ?? "*"}:${props.account ?? "*"}:finding/${props.findingId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Finding resource.
	 */
	static isValidFindingArn(arn: string): boolean {
		return FindingArnRegex.test(arn);
	}

	/**
	 * Parses a Finding ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFindingArn(arn: string): Inspector2FindingArnComponents {
		const match = FindingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Finding ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			findingId: match.groups!.findingId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for inspector2.
 */
export class Inspector2Operations {
	/** IAM actions required for the AssociateMember API call. */
	static readonly AssociateMember: string[] = ["inspector2:AssociateMember"];
	/** IAM actions required for the BatchAssociateCodeSecurityScanConfiguration API call. */
	static readonly BatchAssociateCodeSecurityScanConfiguration: string[] = [
		"inspector2:BatchAssociateCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the BatchDisassociateCodeSecurityScanConfiguration API call. */
	static readonly BatchDisassociateCodeSecurityScanConfiguration: string[] = [
		"inspector2:BatchDisassociateCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the BatchGetAccountStatus API call. */
	static readonly BatchGetAccountStatus: string[] = [
		"inspector2:BatchGetAccountStatus",
	];
	/** IAM actions required for the BatchGetCodeSnippet API call. */
	static readonly BatchGetCodeSnippet: string[] = [
		"inspector2:BatchGetCodeSnippet",
	];
	/** IAM actions required for the BatchGetFindingDetails API call. */
	static readonly BatchGetFindingDetails: string[] = [
		"inspector2:BatchGetFindingDetails",
	];
	/** IAM actions required for the BatchGetFreeTrialInfo API call. */
	static readonly BatchGetFreeTrialInfo: string[] = [
		"inspector2:BatchGetFreeTrialInfo",
	];
	/** IAM actions required for the BatchGetMemberEc2DeepInspectionStatus API call. */
	static readonly BatchGetMemberEc2DeepInspectionStatus: string[] = [
		"inspector2:BatchGetMemberEc2DeepInspectionStatus",
	];
	/** IAM actions required for the BatchUpdateMemberEc2DeepInspectionStatus API call. */
	static readonly BatchUpdateMemberEc2DeepInspectionStatus: string[] = [
		"inspector2:BatchUpdateMemberEc2DeepInspectionStatus",
	];
	/** IAM actions required for the CancelFindingsReport API call. */
	static readonly CancelFindingsReport: string[] = [
		"inspector2:CancelFindingsReport",
	];
	/** IAM actions required for the CancelSbomExport API call. */
	static readonly CancelSbomExport: string[] = ["inspector2:CancelSbomExport"];
	/** IAM actions required for the CreateCisScanConfiguration API call. */
	static readonly CreateCisScanConfiguration: string[] = [
		"inspector2:CreateCisScanConfiguration",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateCodeSecurityIntegration API call. */
	static readonly CreateCodeSecurityIntegration: string[] = [
		"inspector2:CreateCodeSecurityIntegration",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateCodeSecurityScanConfiguration API call. */
	static readonly CreateCodeSecurityScanConfiguration: string[] = [
		"inspector2:CreateCodeSecurityScanConfiguration",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CreateConnector: string[] = [
		"inspector2:CreateConnector",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateFilter API call. */
	static readonly CreateFilter: string[] = [
		"inspector2:CreateFilter",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateFindingsReport API call. */
	static readonly CreateFindingsReport: string[] = [
		"inspector2:CreateFindingsReport",
	];
	/** IAM actions required for the CreateSbomExport API call. */
	static readonly CreateSbomExport: string[] = ["inspector2:CreateSbomExport"];
	/** IAM actions required for the DeleteCisScanConfiguration API call. */
	static readonly DeleteCisScanConfiguration: string[] = [
		"inspector2:DeleteCisScanConfiguration",
	];
	/** IAM actions required for the DeleteCodeSecurityIntegration API call. */
	static readonly DeleteCodeSecurityIntegration: string[] = [
		"inspector2:DeleteCodeSecurityIntegration",
	];
	/** IAM actions required for the DeleteCodeSecurityScanConfiguration API call. */
	static readonly DeleteCodeSecurityScanConfiguration: string[] = [
		"inspector2:DeleteCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = ["inspector2:DeleteConnector"];
	/** IAM actions required for the DeleteFilter API call. */
	static readonly DeleteFilter: string[] = ["inspector2:DeleteFilter"];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DescribeOrganizationConfiguration: string[] = [
		"inspector2:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the Disable API call. */
	static readonly Disable: string[] = ["inspector2:Disable"];
	/** IAM actions required for the DisableDelegatedAdminAccount API call. */
	static readonly DisableDelegatedAdminAccount: string[] = [
		"inspector2:DisableDelegatedAdminAccount",
	];
	/** IAM actions required for the DisassociateMember API call. */
	static readonly DisassociateMember: string[] = [
		"inspector2:DisassociateMember",
	];
	/** IAM actions required for the Enable API call. */
	static readonly Enable: string[] = ["inspector2:Enable"];
	/** IAM actions required for the EnableDelegatedAdminAccount API call. */
	static readonly EnableDelegatedAdminAccount: string[] = [
		"inspector2:EnableDelegatedAdminAccount",
	];
	/** IAM actions required for the GetCisScanReport API call. */
	static readonly opGetCisScanReport: string[] = [
		"inspector2:GetCisScanReport",
	];
	/** IAM actions required for the GetCisScanResultDetails API call. */
	static readonly opGetCisScanResultDetails: string[] = [
		"inspector2:GetCisScanResultDetails",
	];
	/** IAM actions required for the GetClustersForImage API call. */
	static readonly opGetClustersForImage: string[] = [
		"inspector2:GetClustersForImage",
	];
	/** IAM actions required for the GetCodeSecurityIntegration API call. */
	static readonly opGetCodeSecurityIntegration: string[] = [
		"inspector2:GetCodeSecurityIntegration",
	];
	/** IAM actions required for the GetCodeSecurityScan API call. */
	static readonly opGetCodeSecurityScan: string[] = [
		"inspector2:GetCodeSecurityScan",
	];
	/** IAM actions required for the GetCodeSecurityScanConfiguration API call. */
	static readonly opGetCodeSecurityScanConfiguration: string[] = [
		"inspector2:GetCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly opGetConfiguration: string[] = [
		"inspector2:GetConfiguration",
	];
	/** IAM actions required for the GetDelegatedAdminAccount API call. */
	static readonly opGetDelegatedAdminAccount: string[] = [
		"inspector2:GetDelegatedAdminAccount",
	];
	/** IAM actions required for the GetEc2DeepInspectionConfiguration API call. */
	static readonly opGetEc2DeepInspectionConfiguration: string[] = [
		"inspector2:GetEc2DeepInspectionConfiguration",
	];
	/** IAM actions required for the GetEncryptionKey API call. */
	static readonly opGetEncryptionKey: string[] = [
		"inspector2:GetEncryptionKey",
	];
	/** IAM actions required for the GetFindingsReportStatus API call. */
	static readonly opGetFindingsReportStatus: string[] = [
		"inspector2:GetFindingsReportStatus",
	];
	/** IAM actions required for the GetMember API call. */
	static readonly opGetMember: string[] = ["inspector2:GetMember"];
	/** IAM actions required for the GetSbomExport API call. */
	static readonly opGetSbomExport: string[] = ["inspector2:GetSbomExport"];
	/** IAM actions required for the ListAccountPermissions API call. */
	static readonly ListAccountPermissions: string[] = [
		"inspector2:ListAccountPermissions",
	];
	/** IAM actions required for the ListCisScanConfigurations API call. */
	static readonly ListCisScanConfigurations: string[] = [
		"inspector2:ListCisScanConfigurations",
	];
	/** IAM actions required for the ListCisScanResultsAggregatedByChecks API call. */
	static readonly ListCisScanResultsAggregatedByChecks: string[] = [
		"inspector2:ListCisScanResultsAggregatedByChecks",
	];
	/** IAM actions required for the ListCisScanResultsAggregatedByTargetResource API call. */
	static readonly ListCisScanResultsAggregatedByTargetResource: string[] = [
		"inspector2:ListCisScanResultsAggregatedByTargetResource",
	];
	/** IAM actions required for the ListCisScans API call. */
	static readonly ListCisScans: string[] = ["inspector2:ListCisScans"];
	/** IAM actions required for the ListCodeSecurityIntegrations API call. */
	static readonly ListCodeSecurityIntegrations: string[] = [
		"inspector2:ListCodeSecurityIntegrations",
	];
	/** IAM actions required for the ListCodeSecurityScanConfigurationAssociations API call. */
	static readonly ListCodeSecurityScanConfigurationAssociations: string[] = [
		"inspector2:ListCodeSecurityScanConfigurationAssociations",
	];
	/** IAM actions required for the ListCodeSecurityScanConfigurations API call. */
	static readonly ListCodeSecurityScanConfigurations: string[] = [
		"inspector2:ListCodeSecurityScanConfigurations",
	];
	/** IAM actions required for the ListConnectorScanConfigurations API call. */
	static readonly ListConnectorScanConfigurations: string[] = [
		"inspector2:ListConnectorScanConfigurations",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = ["inspector2:ListConnectors"];
	/** IAM actions required for the ListCoverage API call. */
	static readonly ListCoverage: string[] = ["inspector2:ListCoverage"];
	/** IAM actions required for the ListCoverageStatistics API call. */
	static readonly ListCoverageStatistics: string[] = [
		"inspector2:ListCoverageStatistics",
	];
	/** IAM actions required for the ListDelegatedAdminAccounts API call. */
	static readonly ListDelegatedAdminAccounts: string[] = [
		"inspector2:ListDelegatedAdminAccounts",
	];
	/** IAM actions required for the ListFilters API call. */
	static readonly ListFilters: string[] = ["inspector2:ListFilters"];
	/** IAM actions required for the ListFindingAggregations API call. */
	static readonly ListFindingAggregations: string[] = [
		"inspector2:ListFindingAggregations",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly ListFindings: string[] = ["inspector2:ListFindings"];
	/** IAM actions required for the ListMembers API call. */
	static readonly ListMembers: string[] = ["inspector2:ListMembers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"inspector2:ListTagsForResource",
	];
	/** IAM actions required for the ListUsageTotals API call. */
	static readonly ListUsageTotals: string[] = ["inspector2:ListUsageTotals"];
	/** IAM actions required for the ResetEncryptionKey API call. */
	static readonly ResetEncryptionKey: string[] = [
		"inspector2:ResetEncryptionKey",
	];
	/** IAM actions required for the SearchVulnerabilities API call. */
	static readonly SearchVulnerabilities: string[] = [
		"inspector2:SearchVulnerabilities",
	];
	/** IAM actions required for the SendCisSessionHealth API call. */
	static readonly SendCisSessionHealth: string[] = [
		"inspector2:SendCisSessionHealth",
	];
	/** IAM actions required for the SendCisSessionTelemetry API call. */
	static readonly SendCisSessionTelemetry: string[] = [
		"inspector2:SendCisSessionTelemetry",
	];
	/** IAM actions required for the StartCisSession API call. */
	static readonly StartCisSession: string[] = ["inspector2:StartCisSession"];
	/** IAM actions required for the StartCodeSecurityScan API call. */
	static readonly StartCodeSecurityScan: string[] = [
		"inspector2:StartCodeSecurityScan",
	];
	/** IAM actions required for the StopCisSession API call. */
	static readonly StopCisSession: string[] = ["inspector2:StopCisSession"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["inspector2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["inspector2:UntagResource"];
	/** IAM actions required for the UpdateCisScanConfiguration API call. */
	static readonly UpdateCisScanConfiguration: string[] = [
		"inspector2:UpdateCisScanConfiguration",
	];
	/** IAM actions required for the UpdateCodeSecurityIntegration API call. */
	static readonly UpdateCodeSecurityIntegration: string[] = [
		"inspector2:UpdateCodeSecurityIntegration",
	];
	/** IAM actions required for the UpdateCodeSecurityScanConfiguration API call. */
	static readonly UpdateCodeSecurityScanConfiguration: string[] = [
		"inspector2:UpdateCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the UpdateConfiguration API call. */
	static readonly UpdateConfiguration: string[] = [
		"inspector2:UpdateConfiguration",
	];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UpdateConnector: string[] = ["inspector2:UpdateConnector"];
	/** IAM actions required for the UpdateConnectorScanConfiguration API call. */
	static readonly UpdateConnectorScanConfiguration: string[] = [
		"inspector2:UpdateConnectorScanConfiguration",
	];
	/** IAM actions required for the UpdateEc2DeepInspectionConfiguration API call. */
	static readonly UpdateEc2DeepInspectionConfiguration: string[] = [
		"inspector2:UpdateEc2DeepInspectionConfiguration",
	];
	/** IAM actions required for the UpdateEncryptionKey API call. */
	static readonly UpdateEncryptionKey: string[] = [
		"inspector2:UpdateEncryptionKey",
	];
	/** IAM actions required for the UpdateFilter API call. */
	static readonly UpdateFilter: string[] = ["inspector2:UpdateFilter"];
	/** IAM actions required for the UpdateOrgEc2DeepInspectionConfiguration API call. */
	static readonly UpdateOrgEc2DeepInspectionConfiguration: string[] = [
		"inspector2:UpdateOrgEc2DeepInspectionConfiguration",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UpdateOrganizationConfiguration: string[] = [
		"inspector2:UpdateOrganizationConfiguration",
	];
}

/**
 * Condition key constants and builders for inspector2.
 */
export class Inspector2Conditions {
	/** Condition keys applicable to the CreateCisScanConfiguration action. */
	static readonly CreateCisScanConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeSecurityIntegration action. */
	static readonly CreateCodeSecurityIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeSecurityScanConfiguration action. */
	static readonly CreateCodeSecurityScanConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CreateConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFilter action. */
	static readonly CreateFilterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCisScanConfiguration action. */
	static readonly DeleteCisScanConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCisScanConfiguration action. */
	static readonly UpdateCisScanConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCodeSecurityIntegration action. */
	static readonly UpdateCodeSecurityIntegrationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCodeSecurityScanConfiguration action. */
	static readonly UpdateCodeSecurityScanConfigurationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateConnector action. */
	static readonly UpdateConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateFilter action. */
	static readonly UpdateFilterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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
