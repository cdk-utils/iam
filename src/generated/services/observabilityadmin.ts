// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/observabilityadmin.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the observabilityadmin service.
 */
export class ObservabilityadminActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "observabilityadmin";

	/** [Write] observabilityadmin:CreateCentralizationRuleForOrganization */
	static readonly CREATE_CENTRALIZATION_RULE_FOR_ORGANIZATION =
		"observabilityadmin:CreateCentralizationRuleForOrganization";
	/** [Write] observabilityadmin:CreateS3TableIntegration */
	static readonly CREATE_S3_TABLE_INTEGRATION =
		"observabilityadmin:CreateS3TableIntegration";
	/** [Write] observabilityadmin:CreateTelemetryPipeline */
	static readonly CREATE_TELEMETRY_PIPELINE =
		"observabilityadmin:CreateTelemetryPipeline";
	/** [Write] observabilityadmin:CreateTelemetryRule */
	static readonly CREATE_TELEMETRY_RULE =
		"observabilityadmin:CreateTelemetryRule";
	/** [Write] observabilityadmin:CreateTelemetryRuleForOrganization */
	static readonly CREATE_TELEMETRY_RULE_FOR_ORGANIZATION =
		"observabilityadmin:CreateTelemetryRuleForOrganization";
	/** [Write] observabilityadmin:DeleteCentralizationRuleForOrganization */
	static readonly DELETE_CENTRALIZATION_RULE_FOR_ORGANIZATION =
		"observabilityadmin:DeleteCentralizationRuleForOrganization";
	/** [Write] observabilityadmin:DeleteS3TableIntegration */
	static readonly DELETE_S3_TABLE_INTEGRATION =
		"observabilityadmin:DeleteS3TableIntegration";
	/** [Write] observabilityadmin:DeleteTelemetryPipeline */
	static readonly DELETE_TELEMETRY_PIPELINE =
		"observabilityadmin:DeleteTelemetryPipeline";
	/** [Write] observabilityadmin:DeleteTelemetryRule */
	static readonly DELETE_TELEMETRY_RULE =
		"observabilityadmin:DeleteTelemetryRule";
	/** [Write] observabilityadmin:DeleteTelemetryRuleForOrganization */
	static readonly DELETE_TELEMETRY_RULE_FOR_ORGANIZATION =
		"observabilityadmin:DeleteTelemetryRuleForOrganization";
	/** [Read] observabilityadmin:GetCentralizationRuleForOrganization */
	static readonly GET_CENTRALIZATION_RULE_FOR_ORGANIZATION =
		"observabilityadmin:GetCentralizationRuleForOrganization";
	/** [Read] observabilityadmin:GetS3TableIntegration */
	static readonly GET_S3_TABLE_INTEGRATION =
		"observabilityadmin:GetS3TableIntegration";
	/** [Read] observabilityadmin:GetTelemetryEnrichmentStatus */
	static readonly GET_TELEMETRY_ENRICHMENT_STATUS =
		"observabilityadmin:GetTelemetryEnrichmentStatus";
	/** [Read] observabilityadmin:GetTelemetryEvaluationStatus */
	static readonly GET_TELEMETRY_EVALUATION_STATUS =
		"observabilityadmin:GetTelemetryEvaluationStatus";
	/** [Read] observabilityadmin:GetTelemetryEvaluationStatusForOrganization */
	static readonly GET_TELEMETRY_EVALUATION_STATUS_FOR_ORGANIZATION =
		"observabilityadmin:GetTelemetryEvaluationStatusForOrganization";
	/** [Read] observabilityadmin:GetTelemetryPipeline */
	static readonly GET_TELEMETRY_PIPELINE =
		"observabilityadmin:GetTelemetryPipeline";
	/** [Read] observabilityadmin:GetTelemetryRule */
	static readonly GET_TELEMETRY_RULE = "observabilityadmin:GetTelemetryRule";
	/** [Read] observabilityadmin:GetTelemetryRuleForOrganization */
	static readonly GET_TELEMETRY_RULE_FOR_ORGANIZATION =
		"observabilityadmin:GetTelemetryRuleForOrganization";
	/** [List] observabilityadmin:ListCentralizationRulesForOrganization */
	static readonly LIST_CENTRALIZATION_RULES_FOR_ORGANIZATION =
		"observabilityadmin:ListCentralizationRulesForOrganization";
	/** [Read] observabilityadmin:ListResourceTelemetry */
	static readonly LIST_RESOURCE_TELEMETRY =
		"observabilityadmin:ListResourceTelemetry";
	/** [Read] observabilityadmin:ListResourceTelemetryForOrganization */
	static readonly LIST_RESOURCE_TELEMETRY_FOR_ORGANIZATION =
		"observabilityadmin:ListResourceTelemetryForOrganization";
	/** [List] observabilityadmin:ListS3TableIntegrations */
	static readonly LIST_S3_TABLE_INTEGRATIONS =
		"observabilityadmin:ListS3TableIntegrations";
	/** [List] observabilityadmin:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"observabilityadmin:ListTagsForResource";
	/** [List] observabilityadmin:ListTelemetryPipelines */
	static readonly LIST_TELEMETRY_PIPELINES =
		"observabilityadmin:ListTelemetryPipelines";
	/** [List] observabilityadmin:ListTelemetryRules */
	static readonly LIST_TELEMETRY_RULES =
		"observabilityadmin:ListTelemetryRules";
	/** [List] observabilityadmin:ListTelemetryRulesForOrganization */
	static readonly LIST_TELEMETRY_RULES_FOR_ORGANIZATION =
		"observabilityadmin:ListTelemetryRulesForOrganization";
	/** [Write] observabilityadmin:StartTelemetryEnrichment */
	static readonly START_TELEMETRY_ENRICHMENT =
		"observabilityadmin:StartTelemetryEnrichment";
	/** [Write] observabilityadmin:StartTelemetryEvaluation */
	static readonly START_TELEMETRY_EVALUATION =
		"observabilityadmin:StartTelemetryEvaluation";
	/** [Write] observabilityadmin:StartTelemetryEvaluationForOrganization */
	static readonly START_TELEMETRY_EVALUATION_FOR_ORGANIZATION =
		"observabilityadmin:StartTelemetryEvaluationForOrganization";
	/** [Write] observabilityadmin:StopTelemetryEnrichment */
	static readonly STOP_TELEMETRY_ENRICHMENT =
		"observabilityadmin:StopTelemetryEnrichment";
	/** [Write] observabilityadmin:StopTelemetryEvaluation */
	static readonly STOP_TELEMETRY_EVALUATION =
		"observabilityadmin:StopTelemetryEvaluation";
	/** [Write] observabilityadmin:StopTelemetryEvaluationForOrganization */
	static readonly STOP_TELEMETRY_EVALUATION_FOR_ORGANIZATION =
		"observabilityadmin:StopTelemetryEvaluationForOrganization";
	/** [Tagging] observabilityadmin:TagResource */
	static readonly TAG_RESOURCE = "observabilityadmin:TagResource";
	/** [Read] observabilityadmin:TestTelemetryPipeline */
	static readonly TEST_TELEMETRY_PIPELINE =
		"observabilityadmin:TestTelemetryPipeline";
	/** [Tagging] observabilityadmin:UntagResource */
	static readonly UNTAG_RESOURCE = "observabilityadmin:UntagResource";
	/** [Write] observabilityadmin:UpdateCentralizationRuleForOrganization */
	static readonly UPDATE_CENTRALIZATION_RULE_FOR_ORGANIZATION =
		"observabilityadmin:UpdateCentralizationRuleForOrganization";
	/** [Write] observabilityadmin:UpdateTelemetryPipeline */
	static readonly UPDATE_TELEMETRY_PIPELINE =
		"observabilityadmin:UpdateTelemetryPipeline";
	/** [Write] observabilityadmin:UpdateTelemetryRule */
	static readonly UPDATE_TELEMETRY_RULE =
		"observabilityadmin:UpdateTelemetryRule";
	/** [Write] observabilityadmin:UpdateTelemetryRuleForOrganization */
	static readonly UPDATE_TELEMETRY_RULE_FOR_ORGANIZATION =
		"observabilityadmin:UpdateTelemetryRuleForOrganization";
	/** [Read] observabilityadmin:ValidateTelemetryPipelineConfiguration */
	static readonly VALIDATE_TELEMETRY_PIPELINE_CONFIGURATION =
		"observabilityadmin:ValidateTelemetryPipelineConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ObservabilityadminActions.GET_CENTRALIZATION_RULE_FOR_ORGANIZATION,
		ObservabilityadminActions.GET_S3_TABLE_INTEGRATION,
		ObservabilityadminActions.GET_TELEMETRY_ENRICHMENT_STATUS,
		ObservabilityadminActions.GET_TELEMETRY_EVALUATION_STATUS,
		ObservabilityadminActions.GET_TELEMETRY_EVALUATION_STATUS_FOR_ORGANIZATION,
		ObservabilityadminActions.GET_TELEMETRY_PIPELINE,
		ObservabilityadminActions.GET_TELEMETRY_RULE,
		ObservabilityadminActions.GET_TELEMETRY_RULE_FOR_ORGANIZATION,
		ObservabilityadminActions.LIST_RESOURCE_TELEMETRY,
		ObservabilityadminActions.LIST_RESOURCE_TELEMETRY_FOR_ORGANIZATION,
		ObservabilityadminActions.TEST_TELEMETRY_PIPELINE,
		ObservabilityadminActions.VALIDATE_TELEMETRY_PIPELINE_CONFIGURATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ObservabilityadminActions.CREATE_CENTRALIZATION_RULE_FOR_ORGANIZATION,
		ObservabilityadminActions.CREATE_S3_TABLE_INTEGRATION,
		ObservabilityadminActions.CREATE_TELEMETRY_PIPELINE,
		ObservabilityadminActions.CREATE_TELEMETRY_RULE,
		ObservabilityadminActions.CREATE_TELEMETRY_RULE_FOR_ORGANIZATION,
		ObservabilityadminActions.DELETE_CENTRALIZATION_RULE_FOR_ORGANIZATION,
		ObservabilityadminActions.DELETE_S3_TABLE_INTEGRATION,
		ObservabilityadminActions.DELETE_TELEMETRY_PIPELINE,
		ObservabilityadminActions.DELETE_TELEMETRY_RULE,
		ObservabilityadminActions.DELETE_TELEMETRY_RULE_FOR_ORGANIZATION,
		ObservabilityadminActions.START_TELEMETRY_ENRICHMENT,
		ObservabilityadminActions.START_TELEMETRY_EVALUATION,
		ObservabilityadminActions.START_TELEMETRY_EVALUATION_FOR_ORGANIZATION,
		ObservabilityadminActions.STOP_TELEMETRY_ENRICHMENT,
		ObservabilityadminActions.STOP_TELEMETRY_EVALUATION,
		ObservabilityadminActions.STOP_TELEMETRY_EVALUATION_FOR_ORGANIZATION,
		ObservabilityadminActions.UPDATE_CENTRALIZATION_RULE_FOR_ORGANIZATION,
		ObservabilityadminActions.UPDATE_TELEMETRY_PIPELINE,
		ObservabilityadminActions.UPDATE_TELEMETRY_RULE,
		ObservabilityadminActions.UPDATE_TELEMETRY_RULE_FOR_ORGANIZATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ObservabilityadminActions.LIST_CENTRALIZATION_RULES_FOR_ORGANIZATION,
		ObservabilityadminActions.LIST_S3_TABLE_INTEGRATIONS,
		ObservabilityadminActions.LIST_TAGS_FOR_RESOURCE,
		ObservabilityadminActions.LIST_TELEMETRY_PIPELINES,
		ObservabilityadminActions.LIST_TELEMETRY_RULES,
		ObservabilityadminActions.LIST_TELEMETRY_RULES_FOR_ORGANIZATION,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ObservabilityadminActions.TAG_RESOURCE,
		ObservabilityadminActions.UNTAG_RESOURCE,
	];
}

const OrganizationCentralizationRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):organization-centralization-rule/(?<centralizationRuleName>[^:/?]+)$",
);
const OrganizationTelemetryRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):organization-telemetry-rule/(?<telemetryRuleName>[^:/?]+)$",
);
const S3tableintegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):s3tableintegration/(?<s3TableIntegrationIdentifier>[^:/?]+)$",
);
const TelemetryPipelineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):telemetry-pipeline/(?<telemetryPipelineIdentifier>[^:/?]+)$",
);
const TelemetryRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):telemetry-rule/(?<telemetryRuleName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for observabilityadmin resources.
 */
export class ObservabilityadminResources {
	/**
	 * Builds an ARN for the organization-centralization-rule resource.
	 */
	static organizationCentralizationRule(props: {
		/** The CentralizationRuleName component of the ARN. */
		readonly centralizationRuleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:observabilityadmin:${props.region ?? "*"}:${props.account ?? "*"}:organization-centralization-rule/${props.centralizationRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organization-centralization-rule resource.
	 */
	static isValidOrganizationCentralizationRuleArn(arn: string): boolean {
		return OrganizationCentralizationRuleArnRegex.test(arn);
	}

	/**
	 * Parses a organization-centralization-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationCentralizationRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		centralizationRuleName: string;
	} {
		const match = OrganizationCentralizationRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organization-centralization-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			centralizationRuleName: match.groups!.centralizationRuleName,
		};
	}

	/**
	 * Builds an ARN for the organization-telemetry-rule resource.
	 */
	static organizationTelemetryRule(props: {
		/** The TelemetryRuleName component of the ARN. */
		readonly telemetryRuleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:observabilityadmin:${props.region ?? "*"}:${props.account ?? "*"}:organization-telemetry-rule/${props.telemetryRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the organization-telemetry-rule resource.
	 */
	static isValidOrganizationTelemetryRuleArn(arn: string): boolean {
		return OrganizationTelemetryRuleArnRegex.test(arn);
	}

	/**
	 * Parses a organization-telemetry-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationTelemetryRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		telemetryRuleName: string;
	} {
		const match = OrganizationTelemetryRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid organization-telemetry-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			telemetryRuleName: match.groups!.telemetryRuleName,
		};
	}

	/**
	 * Builds an ARN for the s3tableintegration resource.
	 */
	static s3tableintegration(props: {
		/** The S3TableIntegrationIdentifier component of the ARN. */
		readonly s3TableIntegrationIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:observabilityadmin:${props.region ?? "*"}:${props.account ?? "*"}:s3tableintegration/${props.s3TableIntegrationIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the s3tableintegration resource.
	 */
	static isValidS3tableintegrationArn(arn: string): boolean {
		return S3tableintegrationArnRegex.test(arn);
	}

	/**
	 * Parses a s3tableintegration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseS3tableintegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		s3TableIntegrationIdentifier: string;
	} {
		const match = S3tableintegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid s3tableintegration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			s3TableIntegrationIdentifier: match.groups!.s3TableIntegrationIdentifier,
		};
	}

	/**
	 * Builds an ARN for the telemetry-pipeline resource.
	 */
	static telemetryPipeline(props: {
		/** The TelemetryPipelineIdentifier component of the ARN. */
		readonly telemetryPipelineIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:observabilityadmin:${props.region ?? "*"}:${props.account ?? "*"}:telemetry-pipeline/${props.telemetryPipelineIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the telemetry-pipeline resource.
	 */
	static isValidTelemetryPipelineArn(arn: string): boolean {
		return TelemetryPipelineArnRegex.test(arn);
	}

	/**
	 * Parses a telemetry-pipeline ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTelemetryPipelineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		telemetryPipelineIdentifier: string;
	} {
		const match = TelemetryPipelineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid telemetry-pipeline ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			telemetryPipelineIdentifier: match.groups!.telemetryPipelineIdentifier,
		};
	}

	/**
	 * Builds an ARN for the telemetry-rule resource.
	 */
	static telemetryRule(props: {
		/** The TelemetryRuleName component of the ARN. */
		readonly telemetryRuleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:observabilityadmin:${props.region ?? "*"}:${props.account ?? "*"}:telemetry-rule/${props.telemetryRuleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the telemetry-rule resource.
	 */
	static isValidTelemetryRuleArn(arn: string): boolean {
		return TelemetryRuleArnRegex.test(arn);
	}

	/**
	 * Parses a telemetry-rule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTelemetryRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		telemetryRuleName: string;
	} {
		const match = TelemetryRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid telemetry-rule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			telemetryRuleName: match.groups!.telemetryRuleName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for observabilityadmin.
 */
export class ObservabilityadminOperations {
	/** IAM actions required for the CreateCentralizationRuleForOrganization API call. */
	static readonly CREATE_CENTRALIZATION_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:CreateCentralizationRuleForOrganization",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateS3TableIntegration API call. */
	static readonly CREATE_S3_TABLE_INTEGRATION: string[] = [
		"observabilityadmin:CreateS3TableIntegration",
		"iam:PassRole",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateTelemetryPipeline API call. */
	static readonly CREATE_TELEMETRY_PIPELINE: string[] = [
		"observabilityadmin:CreateTelemetryPipeline",
		"iam:PassRole",
		"cloudwatch:PutPipelineRule",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateTelemetryRule API call. */
	static readonly CREATE_TELEMETRY_RULE: string[] = [
		"observabilityadmin:CreateTelemetryRule",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateTelemetryRuleForOrganization API call. */
	static readonly CREATE_TELEMETRY_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:CreateTelemetryRuleForOrganization",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the DeleteCentralizationRuleForOrganization API call. */
	static readonly DELETE_CENTRALIZATION_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:DeleteCentralizationRuleForOrganization",
	];
	/** IAM actions required for the DeleteS3TableIntegration API call. */
	static readonly DELETE_S3_TABLE_INTEGRATION: string[] = [
		"observabilityadmin:DeleteS3TableIntegration",
	];
	/** IAM actions required for the DeleteTelemetryPipeline API call. */
	static readonly DELETE_TELEMETRY_PIPELINE: string[] = [
		"cloudwatch:DeletePipelineRule",
		"observabilityadmin:DeleteTelemetryPipeline",
	];
	/** IAM actions required for the DeleteTelemetryRule API call. */
	static readonly DELETE_TELEMETRY_RULE: string[] = [
		"observabilityadmin:DeleteTelemetryRule",
	];
	/** IAM actions required for the DeleteTelemetryRuleForOrganization API call. */
	static readonly DELETE_TELEMETRY_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:DeleteTelemetryRuleForOrganization",
	];
	/** IAM actions required for the GetCentralizationRuleForOrganization API call. */
	static readonly GET_CENTRALIZATION_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:GetCentralizationRuleForOrganization",
	];
	/** IAM actions required for the GetS3TableIntegration API call. */
	static readonly GET_S3_TABLE_INTEGRATION: string[] = [
		"observabilityadmin:GetS3TableIntegration",
	];
	/** IAM actions required for the GetTelemetryEnrichmentStatus API call. */
	static readonly GET_TELEMETRY_ENRICHMENT_STATUS: string[] = [
		"observabilityadmin:GetTelemetryEnrichmentStatus",
	];
	/** IAM actions required for the GetTelemetryEvaluationStatus API call. */
	static readonly GET_TELEMETRY_EVALUATION_STATUS: string[] = [
		"observabilityadmin:GetTelemetryEvaluationStatus",
	];
	/** IAM actions required for the GetTelemetryEvaluationStatusForOrganization API call. */
	static readonly GET_TELEMETRY_EVALUATION_STATUS_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:GetTelemetryEvaluationStatusForOrganization",
	];
	/** IAM actions required for the GetTelemetryPipeline API call. */
	static readonly GET_TELEMETRY_PIPELINE: string[] = [
		"observabilityadmin:GetTelemetryPipeline",
	];
	/** IAM actions required for the GetTelemetryRule API call. */
	static readonly GET_TELEMETRY_RULE: string[] = [
		"observabilityadmin:GetTelemetryRule",
	];
	/** IAM actions required for the GetTelemetryRuleForOrganization API call. */
	static readonly GET_TELEMETRY_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:GetTelemetryRuleForOrganization",
	];
	/** IAM actions required for the ListCentralizationRulesForOrganization API call. */
	static readonly LIST_CENTRALIZATION_RULES_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:ListCentralizationRulesForOrganization",
	];
	/** IAM actions required for the ListResourceTelemetry API call. */
	static readonly LIST_RESOURCE_TELEMETRY: string[] = [
		"observabilityadmin:ListResourceTelemetry",
	];
	/** IAM actions required for the ListResourceTelemetryForOrganization API call. */
	static readonly LIST_RESOURCE_TELEMETRY_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:ListResourceTelemetryForOrganization",
	];
	/** IAM actions required for the ListS3TableIntegrations API call. */
	static readonly LIST_S3_TABLE_INTEGRATIONS: string[] = [
		"observabilityadmin:ListS3TableIntegrations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"observabilityadmin:ListTagsForResource",
	];
	/** IAM actions required for the ListTelemetryPipelines API call. */
	static readonly LIST_TELEMETRY_PIPELINES: string[] = [
		"observabilityadmin:ListTelemetryPipelines",
	];
	/** IAM actions required for the ListTelemetryRules API call. */
	static readonly LIST_TELEMETRY_RULES: string[] = [
		"observabilityadmin:ListTelemetryRules",
	];
	/** IAM actions required for the ListTelemetryRulesForOrganization API call. */
	static readonly LIST_TELEMETRY_RULES_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:ListTelemetryRulesForOrganization",
	];
	/** IAM actions required for the StartTelemetryEnrichment API call. */
	static readonly START_TELEMETRY_ENRICHMENT: string[] = [
		"observabilityadmin:StartTelemetryEnrichment",
	];
	/** IAM actions required for the StartTelemetryEvaluation API call. */
	static readonly START_TELEMETRY_EVALUATION: string[] = [
		"observabilityadmin:StartTelemetryEvaluation",
	];
	/** IAM actions required for the StartTelemetryEvaluationForOrganization API call. */
	static readonly START_TELEMETRY_EVALUATION_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:StartTelemetryEvaluationForOrganization",
	];
	/** IAM actions required for the StopTelemetryEnrichment API call. */
	static readonly STOP_TELEMETRY_ENRICHMENT: string[] = [
		"observabilityadmin:StopTelemetryEnrichment",
	];
	/** IAM actions required for the StopTelemetryEvaluation API call. */
	static readonly STOP_TELEMETRY_EVALUATION: string[] = [
		"observabilityadmin:StopTelemetryEvaluation",
	];
	/** IAM actions required for the StopTelemetryEvaluationForOrganization API call. */
	static readonly STOP_TELEMETRY_EVALUATION_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:StopTelemetryEvaluationForOrganization",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["observabilityadmin:TagResource"];
	/** IAM actions required for the TestTelemetryPipeline API call. */
	static readonly TEST_TELEMETRY_PIPELINE: string[] = [
		"observabilityadmin:TestTelemetryPipeline",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"observabilityadmin:UntagResource",
	];
	/** IAM actions required for the UpdateCentralizationRuleForOrganization API call. */
	static readonly UPDATE_CENTRALIZATION_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:UpdateCentralizationRuleForOrganization",
	];
	/** IAM actions required for the UpdateTelemetryPipeline API call. */
	static readonly UPDATE_TELEMETRY_PIPELINE: string[] = [
		"iam:PassRole",
		"cloudwatch:PutPipelineRule",
		"observabilityadmin:UpdateTelemetryPipeline",
	];
	/** IAM actions required for the UpdateTelemetryRule API call. */
	static readonly UPDATE_TELEMETRY_RULE: string[] = [
		"observabilityadmin:UpdateTelemetryRule",
	];
	/** IAM actions required for the UpdateTelemetryRuleForOrganization API call. */
	static readonly UPDATE_TELEMETRY_RULE_FOR_ORGANIZATION: string[] = [
		"observabilityadmin:UpdateTelemetryRuleForOrganization",
	];
	/** IAM actions required for the ValidateTelemetryPipelineConfiguration API call. */
	static readonly VALIDATE_TELEMETRY_PIPELINE_CONFIGURATION: string[] = [
		"observabilityadmin:ValidateTelemetryPipelineConfiguration",
	];
}

/**
 * Condition key constants and builders for observabilityadmin.
 */
export class ObservabilityadminConditions {
	/** Condition keys applicable to the CreateCentralizationRuleForOrganization action. */
	static readonly CREATE_CENTRALIZATION_RULE_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"observabilityadmin:CentralizationBackupRegion",
			"observabilityadmin:CentralizationDestinationAccount",
			"observabilityadmin:CentralizationDestinationRegion",
			"observabilityadmin:CentralizationRuleName",
			"observabilityadmin:CentralizationSourceId",
			"observabilityadmin:CentralizationSourceRegions",
		];
	/** Condition keys applicable to the CreateS3TableIntegration action. */
	static readonly CREATE_S3_TABLE_INTEGRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTelemetryPipeline action. */
	static readonly CREATE_TELEMETRY_PIPELINE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"observabilityadmin:SourceType",
	];
	/** Condition keys applicable to the CreateTelemetryRule action. */
	static readonly CREATE_TELEMETRY_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the CreateTelemetryRuleForOrganization action. */
	static readonly CREATE_TELEMETRY_RULE_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"observabilityadmin:TargetRegions",
		];
	/** Condition keys applicable to the DeleteCentralizationRuleForOrganization action. */
	static readonly DELETE_CENTRALIZATION_RULE_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		["observabilityadmin:CentralizationRuleName"];
	/** Condition keys applicable to the GetCentralizationRuleForOrganization action. */
	static readonly GET_CENTRALIZATION_RULE_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		["observabilityadmin:CentralizationRuleName"];
	/** Condition keys applicable to the ListResourceTelemetry action. */
	static readonly LIST_RESOURCE_TELEMETRY_CONDITION_KEYS: string[] = [
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the ListResourceTelemetryForOrganization action. */
	static readonly LIST_RESOURCE_TELEMETRY_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		["observabilityadmin:TargetRegions"];
	/** Condition keys applicable to the StartTelemetryEvaluation action. */
	static readonly START_TELEMETRY_EVALUATION_CONDITION_KEYS: string[] = [
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the StartTelemetryEvaluationForOrganization action. */
	static readonly START_TELEMETRY_EVALUATION_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		["observabilityadmin:TargetRegions"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCentralizationRuleForOrganization action. */
	static readonly UPDATE_CENTRALIZATION_RULE_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		[
			"observabilityadmin:CentralizationBackupRegion",
			"observabilityadmin:CentralizationDestinationAccount",
			"observabilityadmin:CentralizationDestinationRegion",
			"observabilityadmin:CentralizationRuleName",
			"observabilityadmin:CentralizationSourceId",
			"observabilityadmin:CentralizationSourceRegions",
		];
	/** Condition keys applicable to the UpdateTelemetryRule action. */
	static readonly UPDATE_TELEMETRY_RULE_CONDITION_KEYS: string[] = [
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the UpdateTelemetryRuleForOrganization action. */
	static readonly UPDATE_TELEMETRY_RULE_FOR_ORGANIZATION_CONDITION_KEYS: string[] =
		["observabilityadmin:TargetRegions"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: observabilityadmin:CentralizationBackupRegion (String) */
	static readonly CENTRALIZATION_BACKUP_REGION =
		"observabilityadmin:CentralizationBackupRegion";
	/** Condition key: observabilityadmin:CentralizationDestinationAccount (String) */
	static readonly CENTRALIZATION_DESTINATION_ACCOUNT =
		"observabilityadmin:CentralizationDestinationAccount";
	/** Condition key: observabilityadmin:CentralizationDestinationRegion (String) */
	static readonly CENTRALIZATION_DESTINATION_REGION =
		"observabilityadmin:CentralizationDestinationRegion";
	/** Condition key: observabilityadmin:CentralizationRuleName (String) */
	static readonly CENTRALIZATION_RULE_NAME =
		"observabilityadmin:CentralizationRuleName";
	/** Condition key: observabilityadmin:CentralizationSourceId (ArrayOfString) */
	static readonly CENTRALIZATION_SOURCE_ID =
		"observabilityadmin:CentralizationSourceId";
	/** Condition key: observabilityadmin:CentralizationSourceRegions (ArrayOfString) */
	static readonly CENTRALIZATION_SOURCE_REGIONS =
		"observabilityadmin:CentralizationSourceRegions";
	/** Condition key: observabilityadmin:SourceType (String) */
	static readonly SOURCE_TYPE = "observabilityadmin:SourceType";
	/** Condition key: observabilityadmin:TargetRegions (String) */
	static readonly TARGET_REGIONS = "observabilityadmin:TargetRegions";

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

	/**
	 * Generates a condition block for `observabilityadmin:CentralizationBackupRegion`.
	 */
	static centralizationBackupRegion(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "observabilityadmin:CentralizationBackupRegion": value },
		};
	}

	/**
	 * Generates a condition block for `observabilityadmin:CentralizationDestinationAccount`.
	 */
	static centralizationDestinationAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"observabilityadmin:CentralizationDestinationAccount": value,
			},
		};
	}

	/**
	 * Generates a condition block for `observabilityadmin:CentralizationDestinationRegion`.
	 */
	static centralizationDestinationRegion(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"observabilityadmin:CentralizationDestinationRegion": value,
			},
		};
	}

	/**
	 * Generates a condition block for `observabilityadmin:CentralizationRuleName`.
	 */
	static centralizationRuleName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "observabilityadmin:CentralizationRuleName": value },
		};
	}

	/**
	 * Generates a condition block for `observabilityadmin:CentralizationSourceId`.
	 */
	static centralizationSourceId(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"observabilityadmin:CentralizationSourceId": values,
			},
		};
	}

	/**
	 * Generates a condition block for `observabilityadmin:CentralizationSourceRegions`.
	 */
	static centralizationSourceRegions(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"observabilityadmin:CentralizationSourceRegions": values,
			},
		};
	}

	/**
	 * Generates a condition block for `observabilityadmin:SourceType`.
	 */
	static sourceType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "observabilityadmin:SourceType": value } };
	}

	/**
	 * Generates a condition block for `observabilityadmin:TargetRegions`.
	 */
	static targetRegions(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "observabilityadmin:TargetRegions": value } };
	}
}
