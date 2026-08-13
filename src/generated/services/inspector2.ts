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
	static readonly ASSOCIATE_MEMBER = "inspector2:AssociateMember";
	/** [Write] inspector2:BatchAssociateCodeSecurityScanConfiguration */
	static readonly BATCH_ASSOCIATE_CODE_SECURITY_SCAN_CONFIGURATION =
		"inspector2:BatchAssociateCodeSecurityScanConfiguration";
	/** [Write] inspector2:BatchDisassociateCodeSecurityScanConfiguration */
	static readonly BATCH_DISASSOCIATE_CODE_SECURITY_SCAN_CONFIGURATION =
		"inspector2:BatchDisassociateCodeSecurityScanConfiguration";
	/** [Read] inspector2:BatchGetAccountStatus */
	static readonly BATCH_GET_ACCOUNT_STATUS = "inspector2:BatchGetAccountStatus";
	/** [Read] inspector2:BatchGetCodeSnippet */
	static readonly BATCH_GET_CODE_SNIPPET = "inspector2:BatchGetCodeSnippet";
	/** [Read] inspector2:BatchGetFindingDetails */
	static readonly BATCH_GET_FINDING_DETAILS =
		"inspector2:BatchGetFindingDetails";
	/** [Read] inspector2:BatchGetFreeTrialInfo */
	static readonly BATCH_GET_FREE_TRIAL_INFO =
		"inspector2:BatchGetFreeTrialInfo";
	/** [Read] inspector2:BatchGetMemberEc2DeepInspectionStatus */
	static readonly BATCH_GET_MEMBER_EC2_DEEP_INSPECTION_STATUS =
		"inspector2:BatchGetMemberEc2DeepInspectionStatus";
	/** [Write] inspector2:BatchUpdateMemberEc2DeepInspectionStatus */
	static readonly BATCH_UPDATE_MEMBER_EC2_DEEP_INSPECTION_STATUS =
		"inspector2:BatchUpdateMemberEc2DeepInspectionStatus";
	/** [Write] inspector2:CancelFindingsReport */
	static readonly CANCEL_FINDINGS_REPORT = "inspector2:CancelFindingsReport";
	/** [Write] inspector2:CancelSbomExport */
	static readonly CANCEL_SBOM_EXPORT = "inspector2:CancelSbomExport";
	/** [Write] inspector2:CreateCisScanConfiguration */
	static readonly CREATE_CIS_SCAN_CONFIGURATION =
		"inspector2:CreateCisScanConfiguration";
	/** [Write] inspector2:CreateCodeSecurityIntegration */
	static readonly CREATE_CODE_SECURITY_INTEGRATION =
		"inspector2:CreateCodeSecurityIntegration";
	/** [Write] inspector2:CreateCodeSecurityScanConfiguration */
	static readonly CREATE_CODE_SECURITY_SCAN_CONFIGURATION =
		"inspector2:CreateCodeSecurityScanConfiguration";
	/** [Write] inspector2:CreateConnector */
	static readonly CREATE_CONNECTOR = "inspector2:CreateConnector";
	/** [Write] inspector2:CreateFilter */
	static readonly CREATE_FILTER = "inspector2:CreateFilter";
	/** [Write] inspector2:CreateFindingsReport */
	static readonly CREATE_FINDINGS_REPORT = "inspector2:CreateFindingsReport";
	/** [Write] inspector2:CreateSbomExport */
	static readonly CREATE_SBOM_EXPORT = "inspector2:CreateSbomExport";
	/** [Write] inspector2:DeleteCisScanConfiguration */
	static readonly DELETE_CIS_SCAN_CONFIGURATION =
		"inspector2:DeleteCisScanConfiguration";
	/** [Write] inspector2:DeleteCodeSecurityIntegration */
	static readonly DELETE_CODE_SECURITY_INTEGRATION =
		"inspector2:DeleteCodeSecurityIntegration";
	/** [Write] inspector2:DeleteCodeSecurityScanConfiguration */
	static readonly DELETE_CODE_SECURITY_SCAN_CONFIGURATION =
		"inspector2:DeleteCodeSecurityScanConfiguration";
	/** [Write] inspector2:DeleteConnector */
	static readonly DELETE_CONNECTOR = "inspector2:DeleteConnector";
	/** [Write] inspector2:DeleteFilter */
	static readonly DELETE_FILTER = "inspector2:DeleteFilter";
	/** [Read] inspector2:DescribeOrganizationConfiguration */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION =
		"inspector2:DescribeOrganizationConfiguration";
	/** [Write] inspector2:Disable */
	static readonly DISABLE = "inspector2:Disable";
	/** [Write] inspector2:DisableDelegatedAdminAccount */
	static readonly DISABLE_DELEGATED_ADMIN_ACCOUNT =
		"inspector2:DisableDelegatedAdminAccount";
	/** [Write] inspector2:DisassociateMember */
	static readonly DISASSOCIATE_MEMBER = "inspector2:DisassociateMember";
	/** [Write] inspector2:Enable */
	static readonly ENABLE = "inspector2:Enable";
	/** [Write] inspector2:EnableDelegatedAdminAccount */
	static readonly ENABLE_DELEGATED_ADMIN_ACCOUNT =
		"inspector2:EnableDelegatedAdminAccount";
	/** [Read] inspector2:GetCisScanReport */
	static readonly GET_CIS_SCAN_REPORT = "inspector2:GetCisScanReport";
	/** [List] inspector2:GetCisScanResultDetails */
	static readonly GET_CIS_SCAN_RESULT_DETAILS =
		"inspector2:GetCisScanResultDetails";
	/** [Read] inspector2:GetClustersForImage */
	static readonly GET_CLUSTERS_FOR_IMAGE = "inspector2:GetClustersForImage";
	/** [Read] inspector2:GetCodeSecurityIntegration */
	static readonly GET_CODE_SECURITY_INTEGRATION =
		"inspector2:GetCodeSecurityIntegration";
	/** [Read] inspector2:GetCodeSecurityScan */
	static readonly GET_CODE_SECURITY_SCAN = "inspector2:GetCodeSecurityScan";
	/** [Read] inspector2:GetCodeSecurityScanConfiguration */
	static readonly GET_CODE_SECURITY_SCAN_CONFIGURATION =
		"inspector2:GetCodeSecurityScanConfiguration";
	/** [Read] inspector2:GetConfiguration */
	static readonly GET_CONFIGURATION = "inspector2:GetConfiguration";
	/** [Read] inspector2:GetDelegatedAdminAccount */
	static readonly GET_DELEGATED_ADMIN_ACCOUNT =
		"inspector2:GetDelegatedAdminAccount";
	/** [Read] inspector2:GetEc2DeepInspectionConfiguration */
	static readonly GET_EC2_DEEP_INSPECTION_CONFIGURATION =
		"inspector2:GetEc2DeepInspectionConfiguration";
	/** [Read] inspector2:GetEncryptionKey */
	static readonly GET_ENCRYPTION_KEY = "inspector2:GetEncryptionKey";
	/** [Read] inspector2:GetFindingsReportStatus */
	static readonly GET_FINDINGS_REPORT_STATUS =
		"inspector2:GetFindingsReportStatus";
	/** [Read] inspector2:GetMember */
	static readonly GET_MEMBER = "inspector2:GetMember";
	/** [Read] inspector2:GetSbomExport */
	static readonly GET_SBOM_EXPORT = "inspector2:GetSbomExport";
	/** [List] inspector2:ListAccountPermissions */
	static readonly LIST_ACCOUNT_PERMISSIONS =
		"inspector2:ListAccountPermissions";
	/** [List] inspector2:ListCisScanConfigurations */
	static readonly LIST_CIS_SCAN_CONFIGURATIONS =
		"inspector2:ListCisScanConfigurations";
	/** [List] inspector2:ListCisScanResultsAggregatedByChecks */
	static readonly LIST_CIS_SCAN_RESULTS_AGGREGATED_BY_CHECKS =
		"inspector2:ListCisScanResultsAggregatedByChecks";
	/** [List] inspector2:ListCisScanResultsAggregatedByTargetResource */
	static readonly LIST_CIS_SCAN_RESULTS_AGGREGATED_BY_TARGET_RESOURCE =
		"inspector2:ListCisScanResultsAggregatedByTargetResource";
	/** [List] inspector2:ListCisScans */
	static readonly LIST_CIS_SCANS = "inspector2:ListCisScans";
	/** [List] inspector2:ListCodeSecurityIntegrations */
	static readonly LIST_CODE_SECURITY_INTEGRATIONS =
		"inspector2:ListCodeSecurityIntegrations";
	/** [List] inspector2:ListCodeSecurityScanConfigurationAssociations */
	static readonly LIST_CODE_SECURITY_SCAN_CONFIGURATION_ASSOCIATIONS =
		"inspector2:ListCodeSecurityScanConfigurationAssociations";
	/** [List] inspector2:ListCodeSecurityScanConfigurations */
	static readonly LIST_CODE_SECURITY_SCAN_CONFIGURATIONS =
		"inspector2:ListCodeSecurityScanConfigurations";
	/** [List] inspector2:ListConnectorScanConfigurations */
	static readonly LIST_CONNECTOR_SCAN_CONFIGURATIONS =
		"inspector2:ListConnectorScanConfigurations";
	/** [List] inspector2:ListConnectors */
	static readonly LIST_CONNECTORS = "inspector2:ListConnectors";
	/** [List] inspector2:ListCoverage */
	static readonly LIST_COVERAGE = "inspector2:ListCoverage";
	/** [List] inspector2:ListCoverageStatistics */
	static readonly LIST_COVERAGE_STATISTICS =
		"inspector2:ListCoverageStatistics";
	/** [List] inspector2:ListDelegatedAdminAccounts */
	static readonly LIST_DELEGATED_ADMIN_ACCOUNTS =
		"inspector2:ListDelegatedAdminAccounts";
	/** [List] inspector2:ListFilters */
	static readonly LIST_FILTERS = "inspector2:ListFilters";
	/** [List] inspector2:ListFindingAggregations */
	static readonly LIST_FINDING_AGGREGATIONS =
		"inspector2:ListFindingAggregations";
	/** [List] inspector2:ListFindings */
	static readonly LIST_FINDINGS = "inspector2:ListFindings";
	/** [List] inspector2:ListMembers */
	static readonly LIST_MEMBERS = "inspector2:ListMembers";
	/** [Read] inspector2:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "inspector2:ListTagsForResource";
	/** [List] inspector2:ListUsageTotals */
	static readonly LIST_USAGE_TOTALS = "inspector2:ListUsageTotals";
	/** [Write] inspector2:ResetEncryptionKey */
	static readonly RESET_ENCRYPTION_KEY = "inspector2:ResetEncryptionKey";
	/** [Read] inspector2:SearchVulnerabilities */
	static readonly SEARCH_VULNERABILITIES = "inspector2:SearchVulnerabilities";
	/** [Write] inspector2:SendCisSessionHealth */
	static readonly SEND_CIS_SESSION_HEALTH = "inspector2:SendCisSessionHealth";
	/** [Write] inspector2:SendCisSessionTelemetry */
	static readonly SEND_CIS_SESSION_TELEMETRY =
		"inspector2:SendCisSessionTelemetry";
	/** [Write] inspector2:StartCisSession */
	static readonly START_CIS_SESSION = "inspector2:StartCisSession";
	/** [Write] inspector2:StartCodeSecurityScan */
	static readonly START_CODE_SECURITY_SCAN = "inspector2:StartCodeSecurityScan";
	/** [Write] inspector2:StopCisSession */
	static readonly STOP_CIS_SESSION = "inspector2:StopCisSession";
	/** [Tagging] inspector2:TagResource */
	static readonly TAG_RESOURCE = "inspector2:TagResource";
	/** [Tagging] inspector2:UntagResource */
	static readonly UNTAG_RESOURCE = "inspector2:UntagResource";
	/** [Write] inspector2:UpdateCisScanConfiguration */
	static readonly UPDATE_CIS_SCAN_CONFIGURATION =
		"inspector2:UpdateCisScanConfiguration";
	/** [Write] inspector2:UpdateCodeSecurityIntegration */
	static readonly UPDATE_CODE_SECURITY_INTEGRATION =
		"inspector2:UpdateCodeSecurityIntegration";
	/** [Write] inspector2:UpdateCodeSecurityScanConfiguration */
	static readonly UPDATE_CODE_SECURITY_SCAN_CONFIGURATION =
		"inspector2:UpdateCodeSecurityScanConfiguration";
	/** [Write] inspector2:UpdateConfiguration */
	static readonly UPDATE_CONFIGURATION = "inspector2:UpdateConfiguration";
	/** [Write] inspector2:UpdateConnector */
	static readonly UPDATE_CONNECTOR = "inspector2:UpdateConnector";
	/** [Write] inspector2:UpdateConnectorScanConfiguration */
	static readonly UPDATE_CONNECTOR_SCAN_CONFIGURATION =
		"inspector2:UpdateConnectorScanConfiguration";
	/** [Write] inspector2:UpdateEc2DeepInspectionConfiguration */
	static readonly UPDATE_EC2_DEEP_INSPECTION_CONFIGURATION =
		"inspector2:UpdateEc2DeepInspectionConfiguration";
	/** [Write] inspector2:UpdateEncryptionKey */
	static readonly UPDATE_ENCRYPTION_KEY = "inspector2:UpdateEncryptionKey";
	/** [Write] inspector2:UpdateFilter */
	static readonly UPDATE_FILTER = "inspector2:UpdateFilter";
	/** [Write] inspector2:UpdateOrgEc2DeepInspectionConfiguration */
	static readonly UPDATE_ORG_EC2_DEEP_INSPECTION_CONFIGURATION =
		"inspector2:UpdateOrgEc2DeepInspectionConfiguration";
	/** [Write] inspector2:UpdateOrganizationConfiguration */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION =
		"inspector2:UpdateOrganizationConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Inspector2Actions.BATCH_GET_ACCOUNT_STATUS,
		Inspector2Actions.BATCH_GET_CODE_SNIPPET,
		Inspector2Actions.BATCH_GET_FINDING_DETAILS,
		Inspector2Actions.BATCH_GET_FREE_TRIAL_INFO,
		Inspector2Actions.BATCH_GET_MEMBER_EC2_DEEP_INSPECTION_STATUS,
		Inspector2Actions.DESCRIBE_ORGANIZATION_CONFIGURATION,
		Inspector2Actions.GET_CIS_SCAN_REPORT,
		Inspector2Actions.GET_CLUSTERS_FOR_IMAGE,
		Inspector2Actions.GET_CODE_SECURITY_INTEGRATION,
		Inspector2Actions.GET_CODE_SECURITY_SCAN,
		Inspector2Actions.GET_CODE_SECURITY_SCAN_CONFIGURATION,
		Inspector2Actions.GET_CONFIGURATION,
		Inspector2Actions.GET_DELEGATED_ADMIN_ACCOUNT,
		Inspector2Actions.GET_EC2_DEEP_INSPECTION_CONFIGURATION,
		Inspector2Actions.GET_ENCRYPTION_KEY,
		Inspector2Actions.GET_FINDINGS_REPORT_STATUS,
		Inspector2Actions.GET_MEMBER,
		Inspector2Actions.GET_SBOM_EXPORT,
		Inspector2Actions.LIST_TAGS_FOR_RESOURCE,
		Inspector2Actions.SEARCH_VULNERABILITIES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Inspector2Actions.ASSOCIATE_MEMBER,
		Inspector2Actions.BATCH_ASSOCIATE_CODE_SECURITY_SCAN_CONFIGURATION,
		Inspector2Actions.BATCH_DISASSOCIATE_CODE_SECURITY_SCAN_CONFIGURATION,
		Inspector2Actions.BATCH_UPDATE_MEMBER_EC2_DEEP_INSPECTION_STATUS,
		Inspector2Actions.CANCEL_FINDINGS_REPORT,
		Inspector2Actions.CANCEL_SBOM_EXPORT,
		Inspector2Actions.CREATE_CIS_SCAN_CONFIGURATION,
		Inspector2Actions.CREATE_CODE_SECURITY_INTEGRATION,
		Inspector2Actions.CREATE_CODE_SECURITY_SCAN_CONFIGURATION,
		Inspector2Actions.CREATE_CONNECTOR,
		Inspector2Actions.CREATE_FILTER,
		Inspector2Actions.CREATE_FINDINGS_REPORT,
		Inspector2Actions.CREATE_SBOM_EXPORT,
		Inspector2Actions.DELETE_CIS_SCAN_CONFIGURATION,
		Inspector2Actions.DELETE_CODE_SECURITY_INTEGRATION,
		Inspector2Actions.DELETE_CODE_SECURITY_SCAN_CONFIGURATION,
		Inspector2Actions.DELETE_CONNECTOR,
		Inspector2Actions.DELETE_FILTER,
		Inspector2Actions.DISABLE,
		Inspector2Actions.DISABLE_DELEGATED_ADMIN_ACCOUNT,
		Inspector2Actions.DISASSOCIATE_MEMBER,
		Inspector2Actions.ENABLE,
		Inspector2Actions.ENABLE_DELEGATED_ADMIN_ACCOUNT,
		Inspector2Actions.RESET_ENCRYPTION_KEY,
		Inspector2Actions.SEND_CIS_SESSION_HEALTH,
		Inspector2Actions.SEND_CIS_SESSION_TELEMETRY,
		Inspector2Actions.START_CIS_SESSION,
		Inspector2Actions.START_CODE_SECURITY_SCAN,
		Inspector2Actions.STOP_CIS_SESSION,
		Inspector2Actions.UPDATE_CIS_SCAN_CONFIGURATION,
		Inspector2Actions.UPDATE_CODE_SECURITY_INTEGRATION,
		Inspector2Actions.UPDATE_CODE_SECURITY_SCAN_CONFIGURATION,
		Inspector2Actions.UPDATE_CONFIGURATION,
		Inspector2Actions.UPDATE_CONNECTOR,
		Inspector2Actions.UPDATE_CONNECTOR_SCAN_CONFIGURATION,
		Inspector2Actions.UPDATE_EC2_DEEP_INSPECTION_CONFIGURATION,
		Inspector2Actions.UPDATE_ENCRYPTION_KEY,
		Inspector2Actions.UPDATE_FILTER,
		Inspector2Actions.UPDATE_ORG_EC2_DEEP_INSPECTION_CONFIGURATION,
		Inspector2Actions.UPDATE_ORGANIZATION_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Inspector2Actions.GET_CIS_SCAN_RESULT_DETAILS,
		Inspector2Actions.LIST_ACCOUNT_PERMISSIONS,
		Inspector2Actions.LIST_CIS_SCAN_CONFIGURATIONS,
		Inspector2Actions.LIST_CIS_SCAN_RESULTS_AGGREGATED_BY_CHECKS,
		Inspector2Actions.LIST_CIS_SCAN_RESULTS_AGGREGATED_BY_TARGET_RESOURCE,
		Inspector2Actions.LIST_CIS_SCANS,
		Inspector2Actions.LIST_CODE_SECURITY_INTEGRATIONS,
		Inspector2Actions.LIST_CODE_SECURITY_SCAN_CONFIGURATION_ASSOCIATIONS,
		Inspector2Actions.LIST_CODE_SECURITY_SCAN_CONFIGURATIONS,
		Inspector2Actions.LIST_CONNECTOR_SCAN_CONFIGURATIONS,
		Inspector2Actions.LIST_CONNECTORS,
		Inspector2Actions.LIST_COVERAGE,
		Inspector2Actions.LIST_COVERAGE_STATISTICS,
		Inspector2Actions.LIST_DELEGATED_ADMIN_ACCOUNTS,
		Inspector2Actions.LIST_FILTERS,
		Inspector2Actions.LIST_FINDING_AGGREGATIONS,
		Inspector2Actions.LIST_FINDINGS,
		Inspector2Actions.LIST_MEMBERS,
		Inspector2Actions.LIST_USAGE_TOTALS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Inspector2Actions.TAG_RESOURCE,
		Inspector2Actions.UNTAG_RESOURCE,
	];
}

const CisScanConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):owner/(?<ownerId>[^:/?]+)/cis-configuration/(?<cisScanConfigurationId>[^:/?]+)$",
);
const CodeSecurityIntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):codesecurity-integration/(?<codeSecurityIntegrationId>[^:/?]+)$",
);
const CodeSecurityScanConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):owner/(?<ownerId>[^:/?]+)/codesecurity-configuration/(?<codeSecurityScanConfigurationId>[^:/?]+)$",
);
const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)$",
);
const FilterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):owner/(?<ownerId>[^:/?]+)/filter/(?<filterId>[^:/?]+)$",
);
const FindingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):inspector2:(?<region>[^:]*):(?<account>[^:]*):finding/(?<findingId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for inspector2 resources.
 */
export class Inspector2Resources {
	/**
	 * Builds an ARN for the CIS Scan Configuration resource.
	 */
	static cisScanConfiguration(props: {
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
	}): string {
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
	static parseCisScanConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ownerId: string;
		cisScanConfigurationId: string;
	} {
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
	static codeSecurityIntegration(props: {
		/** The CodeSecurityIntegrationId component of the ARN. */
		readonly codeSecurityIntegrationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCodeSecurityIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		codeSecurityIntegrationId: string;
	} {
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
	static codeSecurityScanConfiguration(props: {
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
	}): string {
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
	static parseCodeSecurityScanConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ownerId: string;
		codeSecurityScanConfigurationId: string;
	} {
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
	static connector(props: {
		/** The ConnectorId component of the ARN. */
		readonly connectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
	} {
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
	static filter(props: {
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
	}): string {
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
	static parseFilterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ownerId: string;
		filterId: string;
	} {
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
	static finding(props: {
		/** The FindingId component of the ARN. */
		readonly findingId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFindingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		findingId: string;
	} {
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
	static readonly ASSOCIATE_MEMBER: string[] = ["inspector2:AssociateMember"];
	/** IAM actions required for the BatchAssociateCodeSecurityScanConfiguration API call. */
	static readonly BATCH_ASSOCIATE_CODE_SECURITY_SCAN_CONFIGURATION: string[] = [
		"inspector2:BatchAssociateCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the BatchDisassociateCodeSecurityScanConfiguration API call. */
	static readonly BATCH_DISASSOCIATE_CODE_SECURITY_SCAN_CONFIGURATION: string[] =
		["inspector2:BatchDisassociateCodeSecurityScanConfiguration"];
	/** IAM actions required for the BatchGetAccountStatus API call. */
	static readonly BATCH_GET_ACCOUNT_STATUS: string[] = [
		"inspector2:BatchGetAccountStatus",
	];
	/** IAM actions required for the BatchGetCodeSnippet API call. */
	static readonly BATCH_GET_CODE_SNIPPET: string[] = [
		"inspector2:BatchGetCodeSnippet",
	];
	/** IAM actions required for the BatchGetFindingDetails API call. */
	static readonly BATCH_GET_FINDING_DETAILS: string[] = [
		"inspector2:BatchGetFindingDetails",
	];
	/** IAM actions required for the BatchGetFreeTrialInfo API call. */
	static readonly BATCH_GET_FREE_TRIAL_INFO: string[] = [
		"inspector2:BatchGetFreeTrialInfo",
	];
	/** IAM actions required for the BatchGetMemberEc2DeepInspectionStatus API call. */
	static readonly BATCH_GET_MEMBER_EC2_DEEP_INSPECTION_STATUS: string[] = [
		"inspector2:BatchGetMemberEc2DeepInspectionStatus",
	];
	/** IAM actions required for the BatchUpdateMemberEc2DeepInspectionStatus API call. */
	static readonly BATCH_UPDATE_MEMBER_EC2_DEEP_INSPECTION_STATUS: string[] = [
		"inspector2:BatchUpdateMemberEc2DeepInspectionStatus",
	];
	/** IAM actions required for the CancelFindingsReport API call. */
	static readonly CANCEL_FINDINGS_REPORT: string[] = [
		"inspector2:CancelFindingsReport",
	];
	/** IAM actions required for the CancelSbomExport API call. */
	static readonly CANCEL_SBOM_EXPORT: string[] = [
		"inspector2:CancelSbomExport",
	];
	/** IAM actions required for the CreateCisScanConfiguration API call. */
	static readonly CREATE_CIS_SCAN_CONFIGURATION: string[] = [
		"inspector2:CreateCisScanConfiguration",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateCodeSecurityIntegration API call. */
	static readonly CREATE_CODE_SECURITY_INTEGRATION: string[] = [
		"inspector2:CreateCodeSecurityIntegration",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateCodeSecurityScanConfiguration API call. */
	static readonly CREATE_CODE_SECURITY_SCAN_CONFIGURATION: string[] = [
		"inspector2:CreateCodeSecurityScanConfiguration",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CREATE_CONNECTOR: string[] = [
		"inspector2:CreateConnector",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateFilter API call. */
	static readonly CREATE_FILTER: string[] = [
		"inspector2:CreateFilter",
		"inspector2:TagResource",
	];
	/** IAM actions required for the CreateFindingsReport API call. */
	static readonly CREATE_FINDINGS_REPORT: string[] = [
		"inspector2:CreateFindingsReport",
	];
	/** IAM actions required for the CreateSbomExport API call. */
	static readonly CREATE_SBOM_EXPORT: string[] = [
		"inspector2:CreateSbomExport",
	];
	/** IAM actions required for the DeleteCisScanConfiguration API call. */
	static readonly DELETE_CIS_SCAN_CONFIGURATION: string[] = [
		"inspector2:DeleteCisScanConfiguration",
	];
	/** IAM actions required for the DeleteCodeSecurityIntegration API call. */
	static readonly DELETE_CODE_SECURITY_INTEGRATION: string[] = [
		"inspector2:DeleteCodeSecurityIntegration",
	];
	/** IAM actions required for the DeleteCodeSecurityScanConfiguration API call. */
	static readonly DELETE_CODE_SECURITY_SCAN_CONFIGURATION: string[] = [
		"inspector2:DeleteCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = ["inspector2:DeleteConnector"];
	/** IAM actions required for the DeleteFilter API call. */
	static readonly DELETE_FILTER: string[] = ["inspector2:DeleteFilter"];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION: string[] = [
		"inspector2:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the Disable API call. */
	static readonly DISABLE: string[] = ["inspector2:Disable"];
	/** IAM actions required for the DisableDelegatedAdminAccount API call. */
	static readonly DISABLE_DELEGATED_ADMIN_ACCOUNT: string[] = [
		"inspector2:DisableDelegatedAdminAccount",
	];
	/** IAM actions required for the DisassociateMember API call. */
	static readonly DISASSOCIATE_MEMBER: string[] = [
		"inspector2:DisassociateMember",
	];
	/** IAM actions required for the Enable API call. */
	static readonly ENABLE: string[] = ["inspector2:Enable"];
	/** IAM actions required for the EnableDelegatedAdminAccount API call. */
	static readonly ENABLE_DELEGATED_ADMIN_ACCOUNT: string[] = [
		"inspector2:EnableDelegatedAdminAccount",
	];
	/** IAM actions required for the GetCisScanReport API call. */
	static readonly GET_CIS_SCAN_REPORT: string[] = [
		"inspector2:GetCisScanReport",
	];
	/** IAM actions required for the GetCisScanResultDetails API call. */
	static readonly GET_CIS_SCAN_RESULT_DETAILS: string[] = [
		"inspector2:GetCisScanResultDetails",
	];
	/** IAM actions required for the GetClustersForImage API call. */
	static readonly GET_CLUSTERS_FOR_IMAGE: string[] = [
		"inspector2:GetClustersForImage",
	];
	/** IAM actions required for the GetCodeSecurityIntegration API call. */
	static readonly GET_CODE_SECURITY_INTEGRATION: string[] = [
		"inspector2:GetCodeSecurityIntegration",
	];
	/** IAM actions required for the GetCodeSecurityScan API call. */
	static readonly GET_CODE_SECURITY_SCAN: string[] = [
		"inspector2:GetCodeSecurityScan",
	];
	/** IAM actions required for the GetCodeSecurityScanConfiguration API call. */
	static readonly GET_CODE_SECURITY_SCAN_CONFIGURATION: string[] = [
		"inspector2:GetCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the GetConfiguration API call. */
	static readonly GET_CONFIGURATION: string[] = ["inspector2:GetConfiguration"];
	/** IAM actions required for the GetDelegatedAdminAccount API call. */
	static readonly GET_DELEGATED_ADMIN_ACCOUNT: string[] = [
		"inspector2:GetDelegatedAdminAccount",
	];
	/** IAM actions required for the GetEc2DeepInspectionConfiguration API call. */
	static readonly GET_EC2_DEEP_INSPECTION_CONFIGURATION: string[] = [
		"inspector2:GetEc2DeepInspectionConfiguration",
	];
	/** IAM actions required for the GetEncryptionKey API call. */
	static readonly GET_ENCRYPTION_KEY: string[] = [
		"inspector2:GetEncryptionKey",
	];
	/** IAM actions required for the GetFindingsReportStatus API call. */
	static readonly GET_FINDINGS_REPORT_STATUS: string[] = [
		"inspector2:GetFindingsReportStatus",
	];
	/** IAM actions required for the GetMember API call. */
	static readonly GET_MEMBER: string[] = ["inspector2:GetMember"];
	/** IAM actions required for the GetSbomExport API call. */
	static readonly GET_SBOM_EXPORT: string[] = ["inspector2:GetSbomExport"];
	/** IAM actions required for the ListAccountPermissions API call. */
	static readonly LIST_ACCOUNT_PERMISSIONS: string[] = [
		"inspector2:ListAccountPermissions",
	];
	/** IAM actions required for the ListCisScanConfigurations API call. */
	static readonly LIST_CIS_SCAN_CONFIGURATIONS: string[] = [
		"inspector2:ListCisScanConfigurations",
	];
	/** IAM actions required for the ListCisScanResultsAggregatedByChecks API call. */
	static readonly LIST_CIS_SCAN_RESULTS_AGGREGATED_BY_CHECKS: string[] = [
		"inspector2:ListCisScanResultsAggregatedByChecks",
	];
	/** IAM actions required for the ListCisScanResultsAggregatedByTargetResource API call. */
	static readonly LIST_CIS_SCAN_RESULTS_AGGREGATED_BY_TARGET_RESOURCE: string[] =
		["inspector2:ListCisScanResultsAggregatedByTargetResource"];
	/** IAM actions required for the ListCisScans API call. */
	static readonly LIST_CIS_SCANS: string[] = ["inspector2:ListCisScans"];
	/** IAM actions required for the ListCodeSecurityIntegrations API call. */
	static readonly LIST_CODE_SECURITY_INTEGRATIONS: string[] = [
		"inspector2:ListCodeSecurityIntegrations",
	];
	/** IAM actions required for the ListCodeSecurityScanConfigurationAssociations API call. */
	static readonly LIST_CODE_SECURITY_SCAN_CONFIGURATION_ASSOCIATIONS: string[] =
		["inspector2:ListCodeSecurityScanConfigurationAssociations"];
	/** IAM actions required for the ListCodeSecurityScanConfigurations API call. */
	static readonly LIST_CODE_SECURITY_SCAN_CONFIGURATIONS: string[] = [
		"inspector2:ListCodeSecurityScanConfigurations",
	];
	/** IAM actions required for the ListConnectorScanConfigurations API call. */
	static readonly LIST_CONNECTOR_SCAN_CONFIGURATIONS: string[] = [
		"inspector2:ListConnectorScanConfigurations",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = ["inspector2:ListConnectors"];
	/** IAM actions required for the ListCoverage API call. */
	static readonly LIST_COVERAGE: string[] = ["inspector2:ListCoverage"];
	/** IAM actions required for the ListCoverageStatistics API call. */
	static readonly LIST_COVERAGE_STATISTICS: string[] = [
		"inspector2:ListCoverageStatistics",
	];
	/** IAM actions required for the ListDelegatedAdminAccounts API call. */
	static readonly LIST_DELEGATED_ADMIN_ACCOUNTS: string[] = [
		"inspector2:ListDelegatedAdminAccounts",
	];
	/** IAM actions required for the ListFilters API call. */
	static readonly LIST_FILTERS: string[] = ["inspector2:ListFilters"];
	/** IAM actions required for the ListFindingAggregations API call. */
	static readonly LIST_FINDING_AGGREGATIONS: string[] = [
		"inspector2:ListFindingAggregations",
	];
	/** IAM actions required for the ListFindings API call. */
	static readonly LIST_FINDINGS: string[] = ["inspector2:ListFindings"];
	/** IAM actions required for the ListMembers API call. */
	static readonly LIST_MEMBERS: string[] = ["inspector2:ListMembers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"inspector2:ListTagsForResource",
	];
	/** IAM actions required for the ListUsageTotals API call. */
	static readonly LIST_USAGE_TOTALS: string[] = ["inspector2:ListUsageTotals"];
	/** IAM actions required for the ResetEncryptionKey API call. */
	static readonly RESET_ENCRYPTION_KEY: string[] = [
		"inspector2:ResetEncryptionKey",
	];
	/** IAM actions required for the SearchVulnerabilities API call. */
	static readonly SEARCH_VULNERABILITIES: string[] = [
		"inspector2:SearchVulnerabilities",
	];
	/** IAM actions required for the SendCisSessionHealth API call. */
	static readonly SEND_CIS_SESSION_HEALTH: string[] = [
		"inspector2:SendCisSessionHealth",
	];
	/** IAM actions required for the SendCisSessionTelemetry API call. */
	static readonly SEND_CIS_SESSION_TELEMETRY: string[] = [
		"inspector2:SendCisSessionTelemetry",
	];
	/** IAM actions required for the StartCisSession API call. */
	static readonly START_CIS_SESSION: string[] = ["inspector2:StartCisSession"];
	/** IAM actions required for the StartCodeSecurityScan API call. */
	static readonly START_CODE_SECURITY_SCAN: string[] = [
		"inspector2:StartCodeSecurityScan",
	];
	/** IAM actions required for the StopCisSession API call. */
	static readonly STOP_CIS_SESSION: string[] = ["inspector2:StopCisSession"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["inspector2:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["inspector2:UntagResource"];
	/** IAM actions required for the UpdateCisScanConfiguration API call. */
	static readonly UPDATE_CIS_SCAN_CONFIGURATION: string[] = [
		"inspector2:UpdateCisScanConfiguration",
	];
	/** IAM actions required for the UpdateCodeSecurityIntegration API call. */
	static readonly UPDATE_CODE_SECURITY_INTEGRATION: string[] = [
		"inspector2:UpdateCodeSecurityIntegration",
	];
	/** IAM actions required for the UpdateCodeSecurityScanConfiguration API call. */
	static readonly UPDATE_CODE_SECURITY_SCAN_CONFIGURATION: string[] = [
		"inspector2:UpdateCodeSecurityScanConfiguration",
	];
	/** IAM actions required for the UpdateConfiguration API call. */
	static readonly UPDATE_CONFIGURATION: string[] = [
		"inspector2:UpdateConfiguration",
	];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UPDATE_CONNECTOR: string[] = ["inspector2:UpdateConnector"];
	/** IAM actions required for the UpdateConnectorScanConfiguration API call. */
	static readonly UPDATE_CONNECTOR_SCAN_CONFIGURATION: string[] = [
		"inspector2:UpdateConnectorScanConfiguration",
	];
	/** IAM actions required for the UpdateEc2DeepInspectionConfiguration API call. */
	static readonly UPDATE_EC2_DEEP_INSPECTION_CONFIGURATION: string[] = [
		"inspector2:UpdateEc2DeepInspectionConfiguration",
	];
	/** IAM actions required for the UpdateEncryptionKey API call. */
	static readonly UPDATE_ENCRYPTION_KEY: string[] = [
		"inspector2:UpdateEncryptionKey",
	];
	/** IAM actions required for the UpdateFilter API call. */
	static readonly UPDATE_FILTER: string[] = ["inspector2:UpdateFilter"];
	/** IAM actions required for the UpdateOrgEc2DeepInspectionConfiguration API call. */
	static readonly UPDATE_ORG_EC2_DEEP_INSPECTION_CONFIGURATION: string[] = [
		"inspector2:UpdateOrgEc2DeepInspectionConfiguration",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION: string[] = [
		"inspector2:UpdateOrganizationConfiguration",
	];
}

/**
 * Condition key constants and builders for inspector2.
 */
export class Inspector2Conditions {
	/** Condition keys applicable to the CreateCisScanConfiguration action. */
	static readonly CREATE_CIS_SCAN_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeSecurityIntegration action. */
	static readonly CREATE_CODE_SECURITY_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeSecurityScanConfiguration action. */
	static readonly CREATE_CODE_SECURITY_SCAN_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CREATE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFilter action. */
	static readonly CREATE_FILTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteCisScanConfiguration action. */
	static readonly DELETE_CIS_SCAN_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCisScanConfiguration action. */
	static readonly UPDATE_CIS_SCAN_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCodeSecurityIntegration action. */
	static readonly UPDATE_CODE_SECURITY_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateCodeSecurityScanConfiguration action. */
	static readonly UPDATE_CODE_SECURITY_SCAN_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the UpdateConnector action. */
	static readonly UPDATE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateFilter action. */
	static readonly UPDATE_FILTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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
