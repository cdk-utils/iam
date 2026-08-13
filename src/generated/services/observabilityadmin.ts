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
	static readonly CreateCentralizationRuleForOrganization =
		"observabilityadmin:CreateCentralizationRuleForOrganization";
	/** [Write] observabilityadmin:CreateS3TableIntegration */
	static readonly CreateS3TableIntegration =
		"observabilityadmin:CreateS3TableIntegration";
	/** [Write] observabilityadmin:CreateTelemetryPipeline */
	static readonly CreateTelemetryPipeline =
		"observabilityadmin:CreateTelemetryPipeline";
	/** [Write] observabilityadmin:CreateTelemetryRule */
	static readonly CreateTelemetryRule =
		"observabilityadmin:CreateTelemetryRule";
	/** [Write] observabilityadmin:CreateTelemetryRuleForOrganization */
	static readonly CreateTelemetryRuleForOrganization =
		"observabilityadmin:CreateTelemetryRuleForOrganization";
	/** [Write] observabilityadmin:DeleteCentralizationRuleForOrganization */
	static readonly DeleteCentralizationRuleForOrganization =
		"observabilityadmin:DeleteCentralizationRuleForOrganization";
	/** [Write] observabilityadmin:DeleteS3TableIntegration */
	static readonly DeleteS3TableIntegration =
		"observabilityadmin:DeleteS3TableIntegration";
	/** [Write] observabilityadmin:DeleteTelemetryPipeline */
	static readonly DeleteTelemetryPipeline =
		"observabilityadmin:DeleteTelemetryPipeline";
	/** [Write] observabilityadmin:DeleteTelemetryRule */
	static readonly DeleteTelemetryRule =
		"observabilityadmin:DeleteTelemetryRule";
	/** [Write] observabilityadmin:DeleteTelemetryRuleForOrganization */
	static readonly DeleteTelemetryRuleForOrganization =
		"observabilityadmin:DeleteTelemetryRuleForOrganization";
	/** [Read] observabilityadmin:GetCentralizationRuleForOrganization */
	static readonly actionGetCentralizationRuleForOrganization =
		"observabilityadmin:GetCentralizationRuleForOrganization";
	/** [Read] observabilityadmin:GetS3TableIntegration */
	static readonly actionGetS3TableIntegration =
		"observabilityadmin:GetS3TableIntegration";
	/** [Read] observabilityadmin:GetTelemetryEnrichmentStatus */
	static readonly actionGetTelemetryEnrichmentStatus =
		"observabilityadmin:GetTelemetryEnrichmentStatus";
	/** [Read] observabilityadmin:GetTelemetryEvaluationStatus */
	static readonly actionGetTelemetryEvaluationStatus =
		"observabilityadmin:GetTelemetryEvaluationStatus";
	/** [Read] observabilityadmin:GetTelemetryEvaluationStatusForOrganization */
	static readonly actionGetTelemetryEvaluationStatusForOrganization =
		"observabilityadmin:GetTelemetryEvaluationStatusForOrganization";
	/** [Read] observabilityadmin:GetTelemetryPipeline */
	static readonly actionGetTelemetryPipeline =
		"observabilityadmin:GetTelemetryPipeline";
	/** [Read] observabilityadmin:GetTelemetryRule */
	static readonly actionGetTelemetryRule =
		"observabilityadmin:GetTelemetryRule";
	/** [Read] observabilityadmin:GetTelemetryRuleForOrganization */
	static readonly actionGetTelemetryRuleForOrganization =
		"observabilityadmin:GetTelemetryRuleForOrganization";
	/** [List] observabilityadmin:ListCentralizationRulesForOrganization */
	static readonly ListCentralizationRulesForOrganization =
		"observabilityadmin:ListCentralizationRulesForOrganization";
	/** [Read] observabilityadmin:ListResourceTelemetry */
	static readonly ListResourceTelemetry =
		"observabilityadmin:ListResourceTelemetry";
	/** [Read] observabilityadmin:ListResourceTelemetryForOrganization */
	static readonly ListResourceTelemetryForOrganization =
		"observabilityadmin:ListResourceTelemetryForOrganization";
	/** [List] observabilityadmin:ListS3TableIntegrations */
	static readonly ListS3TableIntegrations =
		"observabilityadmin:ListS3TableIntegrations";
	/** [List] observabilityadmin:ListTagsForResource */
	static readonly ListTagsForResource =
		"observabilityadmin:ListTagsForResource";
	/** [List] observabilityadmin:ListTelemetryPipelines */
	static readonly ListTelemetryPipelines =
		"observabilityadmin:ListTelemetryPipelines";
	/** [List] observabilityadmin:ListTelemetryRules */
	static readonly ListTelemetryRules = "observabilityadmin:ListTelemetryRules";
	/** [List] observabilityadmin:ListTelemetryRulesForOrganization */
	static readonly ListTelemetryRulesForOrganization =
		"observabilityadmin:ListTelemetryRulesForOrganization";
	/** [Write] observabilityadmin:StartTelemetryEnrichment */
	static readonly StartTelemetryEnrichment =
		"observabilityadmin:StartTelemetryEnrichment";
	/** [Write] observabilityadmin:StartTelemetryEvaluation */
	static readonly StartTelemetryEvaluation =
		"observabilityadmin:StartTelemetryEvaluation";
	/** [Write] observabilityadmin:StartTelemetryEvaluationForOrganization */
	static readonly StartTelemetryEvaluationForOrganization =
		"observabilityadmin:StartTelemetryEvaluationForOrganization";
	/** [Write] observabilityadmin:StopTelemetryEnrichment */
	static readonly StopTelemetryEnrichment =
		"observabilityadmin:StopTelemetryEnrichment";
	/** [Write] observabilityadmin:StopTelemetryEvaluation */
	static readonly StopTelemetryEvaluation =
		"observabilityadmin:StopTelemetryEvaluation";
	/** [Write] observabilityadmin:StopTelemetryEvaluationForOrganization */
	static readonly StopTelemetryEvaluationForOrganization =
		"observabilityadmin:StopTelemetryEvaluationForOrganization";
	/** [Tagging] observabilityadmin:TagResource */
	static readonly TagResource = "observabilityadmin:TagResource";
	/** [Read] observabilityadmin:TestTelemetryPipeline */
	static readonly TestTelemetryPipeline =
		"observabilityadmin:TestTelemetryPipeline";
	/** [Tagging] observabilityadmin:UntagResource */
	static readonly UntagResource = "observabilityadmin:UntagResource";
	/** [Write] observabilityadmin:UpdateCentralizationRuleForOrganization */
	static readonly UpdateCentralizationRuleForOrganization =
		"observabilityadmin:UpdateCentralizationRuleForOrganization";
	/** [Write] observabilityadmin:UpdateTelemetryPipeline */
	static readonly UpdateTelemetryPipeline =
		"observabilityadmin:UpdateTelemetryPipeline";
	/** [Write] observabilityadmin:UpdateTelemetryRule */
	static readonly UpdateTelemetryRule =
		"observabilityadmin:UpdateTelemetryRule";
	/** [Write] observabilityadmin:UpdateTelemetryRuleForOrganization */
	static readonly UpdateTelemetryRuleForOrganization =
		"observabilityadmin:UpdateTelemetryRuleForOrganization";
	/** [Read] observabilityadmin:ValidateTelemetryPipelineConfiguration */
	static readonly ValidateTelemetryPipelineConfiguration =
		"observabilityadmin:ValidateTelemetryPipelineConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ObservabilityadminActions.actionGetCentralizationRuleForOrganization,
		ObservabilityadminActions.actionGetS3TableIntegration,
		ObservabilityadminActions.actionGetTelemetryEnrichmentStatus,
		ObservabilityadminActions.actionGetTelemetryEvaluationStatus,
		ObservabilityadminActions.actionGetTelemetryEvaluationStatusForOrganization,
		ObservabilityadminActions.actionGetTelemetryPipeline,
		ObservabilityadminActions.actionGetTelemetryRule,
		ObservabilityadminActions.actionGetTelemetryRuleForOrganization,
		ObservabilityadminActions.ListResourceTelemetry,
		ObservabilityadminActions.ListResourceTelemetryForOrganization,
		ObservabilityadminActions.TestTelemetryPipeline,
		ObservabilityadminActions.ValidateTelemetryPipelineConfiguration,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ObservabilityadminActions.CreateCentralizationRuleForOrganization,
		ObservabilityadminActions.CreateS3TableIntegration,
		ObservabilityadminActions.CreateTelemetryPipeline,
		ObservabilityadminActions.CreateTelemetryRule,
		ObservabilityadminActions.CreateTelemetryRuleForOrganization,
		ObservabilityadminActions.DeleteCentralizationRuleForOrganization,
		ObservabilityadminActions.DeleteS3TableIntegration,
		ObservabilityadminActions.DeleteTelemetryPipeline,
		ObservabilityadminActions.DeleteTelemetryRule,
		ObservabilityadminActions.DeleteTelemetryRuleForOrganization,
		ObservabilityadminActions.StartTelemetryEnrichment,
		ObservabilityadminActions.StartTelemetryEvaluation,
		ObservabilityadminActions.StartTelemetryEvaluationForOrganization,
		ObservabilityadminActions.StopTelemetryEnrichment,
		ObservabilityadminActions.StopTelemetryEvaluation,
		ObservabilityadminActions.StopTelemetryEvaluationForOrganization,
		ObservabilityadminActions.UpdateCentralizationRuleForOrganization,
		ObservabilityadminActions.UpdateTelemetryPipeline,
		ObservabilityadminActions.UpdateTelemetryRule,
		ObservabilityadminActions.UpdateTelemetryRuleForOrganization,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ObservabilityadminActions.ListCentralizationRulesForOrganization,
		ObservabilityadminActions.ListS3TableIntegrations,
		ObservabilityadminActions.ListTagsForResource,
		ObservabilityadminActions.ListTelemetryPipelines,
		ObservabilityadminActions.ListTelemetryRules,
		ObservabilityadminActions.ListTelemetryRulesForOrganization,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ObservabilityadminActions.TagResource,
		ObservabilityadminActions.UntagResource,
	];
}

/**
 * Properties for building a organization-centralization-rule ARN.
 */
export interface ObservabilityadminOrganizationCentralizationRuleArnProps {
	/** The CentralizationRuleName component of the ARN. */
	readonly centralizationRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a organization-centralization-rule ARN.
 */
export interface ObservabilityadminOrganizationCentralizationRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CentralizationRuleName component. */
	readonly centralizationRuleName: string;
}

/**
 * Properties for building a organization-telemetry-rule ARN.
 */
export interface ObservabilityadminOrganizationTelemetryRuleArnProps {
	/** The TelemetryRuleName component of the ARN. */
	readonly telemetryRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a organization-telemetry-rule ARN.
 */
export interface ObservabilityadminOrganizationTelemetryRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TelemetryRuleName component. */
	readonly telemetryRuleName: string;
}

/**
 * Properties for building a s3tableintegration ARN.
 */
export interface ObservabilityadminS3tableintegrationArnProps {
	/** The S3TableIntegrationIdentifier component of the ARN. */
	readonly s3TableIntegrationIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a s3tableintegration ARN.
 */
export interface ObservabilityadminS3tableintegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The S3TableIntegrationIdentifier component. */
	readonly s3TableIntegrationIdentifier: string;
}

/**
 * Properties for building a telemetry-pipeline ARN.
 */
export interface ObservabilityadminTelemetryPipelineArnProps {
	/** The TelemetryPipelineIdentifier component of the ARN. */
	readonly telemetryPipelineIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a telemetry-pipeline ARN.
 */
export interface ObservabilityadminTelemetryPipelineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TelemetryPipelineIdentifier component. */
	readonly telemetryPipelineIdentifier: string;
}

/**
 * Properties for building a telemetry-rule ARN.
 */
export interface ObservabilityadminTelemetryRuleArnProps {
	/** The TelemetryRuleName component of the ARN. */
	readonly telemetryRuleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a telemetry-rule ARN.
 */
export interface ObservabilityadminTelemetryRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TelemetryRuleName component. */
	readonly telemetryRuleName: string;
}

const OrganizationCentralizationRuleArnRegex =
	/^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):organization-centralization-rule\/(?<centralizationRuleName>[^:/?]+)$/;
const OrganizationTelemetryRuleArnRegex =
	/^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):organization-telemetry-rule\/(?<telemetryRuleName>[^:/?]+)$/;
const S3tableintegrationArnRegex =
	/^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):s3tableintegration\/(?<s3TableIntegrationIdentifier>[^:/?]+)$/;
const TelemetryPipelineArnRegex =
	/^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):telemetry-pipeline\/(?<telemetryPipelineIdentifier>[^:/?]+)$/;
const TelemetryRuleArnRegex =
	/^arn:(?<partition>[^:]+):observabilityadmin:(?<region>[^:]*):(?<account>[^:]*):telemetry-rule\/(?<telemetryRuleName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for observabilityadmin resources.
 */
export class ObservabilityadminResources {
	/**
	 * Builds an ARN for the organization-centralization-rule resource.
	 */
	static organizationCentralizationRule(
		props: ObservabilityadminOrganizationCentralizationRuleArnProps,
	): string {
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
	static parseOrganizationCentralizationRuleArn(
		arn: string,
	): ObservabilityadminOrganizationCentralizationRuleArnComponents {
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
	static organizationTelemetryRule(
		props: ObservabilityadminOrganizationTelemetryRuleArnProps,
	): string {
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
	static parseOrganizationTelemetryRuleArn(
		arn: string,
	): ObservabilityadminOrganizationTelemetryRuleArnComponents {
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
	static s3tableintegration(
		props: ObservabilityadminS3tableintegrationArnProps,
	): string {
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
	static parseS3tableintegrationArn(
		arn: string,
	): ObservabilityadminS3tableintegrationArnComponents {
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
	static telemetryPipeline(
		props: ObservabilityadminTelemetryPipelineArnProps,
	): string {
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
	static parseTelemetryPipelineArn(
		arn: string,
	): ObservabilityadminTelemetryPipelineArnComponents {
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
	static telemetryRule(props: ObservabilityadminTelemetryRuleArnProps): string {
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
	static parseTelemetryRuleArn(
		arn: string,
	): ObservabilityadminTelemetryRuleArnComponents {
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
	static readonly CreateCentralizationRuleForOrganization: string[] = [
		"observabilityadmin:CreateCentralizationRuleForOrganization",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateS3TableIntegration API call. */
	static readonly CreateS3TableIntegration: string[] = [
		"observabilityadmin:CreateS3TableIntegration",
		"iam:PassRole",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateTelemetryPipeline API call. */
	static readonly CreateTelemetryPipeline: string[] = [
		"observabilityadmin:CreateTelemetryPipeline",
		"iam:PassRole",
		"cloudwatch:PutPipelineRule",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateTelemetryRule API call. */
	static readonly CreateTelemetryRule: string[] = [
		"observabilityadmin:CreateTelemetryRule",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the CreateTelemetryRuleForOrganization API call. */
	static readonly CreateTelemetryRuleForOrganization: string[] = [
		"observabilityadmin:CreateTelemetryRuleForOrganization",
		"observabilityadmin:TagResource",
	];
	/** IAM actions required for the DeleteCentralizationRuleForOrganization API call. */
	static readonly DeleteCentralizationRuleForOrganization: string[] = [
		"observabilityadmin:DeleteCentralizationRuleForOrganization",
	];
	/** IAM actions required for the DeleteS3TableIntegration API call. */
	static readonly DeleteS3TableIntegration: string[] = [
		"observabilityadmin:DeleteS3TableIntegration",
	];
	/** IAM actions required for the DeleteTelemetryPipeline API call. */
	static readonly DeleteTelemetryPipeline: string[] = [
		"cloudwatch:DeletePipelineRule",
		"observabilityadmin:DeleteTelemetryPipeline",
	];
	/** IAM actions required for the DeleteTelemetryRule API call. */
	static readonly DeleteTelemetryRule: string[] = [
		"observabilityadmin:DeleteTelemetryRule",
	];
	/** IAM actions required for the DeleteTelemetryRuleForOrganization API call. */
	static readonly DeleteTelemetryRuleForOrganization: string[] = [
		"observabilityadmin:DeleteTelemetryRuleForOrganization",
	];
	/** IAM actions required for the GetCentralizationRuleForOrganization API call. */
	static readonly opGetCentralizationRuleForOrganization: string[] = [
		"observabilityadmin:GetCentralizationRuleForOrganization",
	];
	/** IAM actions required for the GetS3TableIntegration API call. */
	static readonly opGetS3TableIntegration: string[] = [
		"observabilityadmin:GetS3TableIntegration",
	];
	/** IAM actions required for the GetTelemetryEnrichmentStatus API call. */
	static readonly opGetTelemetryEnrichmentStatus: string[] = [
		"observabilityadmin:GetTelemetryEnrichmentStatus",
	];
	/** IAM actions required for the GetTelemetryEvaluationStatus API call. */
	static readonly opGetTelemetryEvaluationStatus: string[] = [
		"observabilityadmin:GetTelemetryEvaluationStatus",
	];
	/** IAM actions required for the GetTelemetryEvaluationStatusForOrganization API call. */
	static readonly opGetTelemetryEvaluationStatusForOrganization: string[] = [
		"observabilityadmin:GetTelemetryEvaluationStatusForOrganization",
	];
	/** IAM actions required for the GetTelemetryPipeline API call. */
	static readonly opGetTelemetryPipeline: string[] = [
		"observabilityadmin:GetTelemetryPipeline",
	];
	/** IAM actions required for the GetTelemetryRule API call. */
	static readonly opGetTelemetryRule: string[] = [
		"observabilityadmin:GetTelemetryRule",
	];
	/** IAM actions required for the GetTelemetryRuleForOrganization API call. */
	static readonly opGetTelemetryRuleForOrganization: string[] = [
		"observabilityadmin:GetTelemetryRuleForOrganization",
	];
	/** IAM actions required for the ListCentralizationRulesForOrganization API call. */
	static readonly ListCentralizationRulesForOrganization: string[] = [
		"observabilityadmin:ListCentralizationRulesForOrganization",
	];
	/** IAM actions required for the ListResourceTelemetry API call. */
	static readonly ListResourceTelemetry: string[] = [
		"observabilityadmin:ListResourceTelemetry",
	];
	/** IAM actions required for the ListResourceTelemetryForOrganization API call. */
	static readonly ListResourceTelemetryForOrganization: string[] = [
		"observabilityadmin:ListResourceTelemetryForOrganization",
	];
	/** IAM actions required for the ListS3TableIntegrations API call. */
	static readonly ListS3TableIntegrations: string[] = [
		"observabilityadmin:ListS3TableIntegrations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"observabilityadmin:ListTagsForResource",
	];
	/** IAM actions required for the ListTelemetryPipelines API call. */
	static readonly ListTelemetryPipelines: string[] = [
		"observabilityadmin:ListTelemetryPipelines",
	];
	/** IAM actions required for the ListTelemetryRules API call. */
	static readonly ListTelemetryRules: string[] = [
		"observabilityadmin:ListTelemetryRules",
	];
	/** IAM actions required for the ListTelemetryRulesForOrganization API call. */
	static readonly ListTelemetryRulesForOrganization: string[] = [
		"observabilityadmin:ListTelemetryRulesForOrganization",
	];
	/** IAM actions required for the StartTelemetryEnrichment API call. */
	static readonly StartTelemetryEnrichment: string[] = [
		"observabilityadmin:StartTelemetryEnrichment",
	];
	/** IAM actions required for the StartTelemetryEvaluation API call. */
	static readonly StartTelemetryEvaluation: string[] = [
		"observabilityadmin:StartTelemetryEvaluation",
	];
	/** IAM actions required for the StartTelemetryEvaluationForOrganization API call. */
	static readonly StartTelemetryEvaluationForOrganization: string[] = [
		"observabilityadmin:StartTelemetryEvaluationForOrganization",
	];
	/** IAM actions required for the StopTelemetryEnrichment API call. */
	static readonly StopTelemetryEnrichment: string[] = [
		"observabilityadmin:StopTelemetryEnrichment",
	];
	/** IAM actions required for the StopTelemetryEvaluation API call. */
	static readonly StopTelemetryEvaluation: string[] = [
		"observabilityadmin:StopTelemetryEvaluation",
	];
	/** IAM actions required for the StopTelemetryEvaluationForOrganization API call. */
	static readonly StopTelemetryEvaluationForOrganization: string[] = [
		"observabilityadmin:StopTelemetryEvaluationForOrganization",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["observabilityadmin:TagResource"];
	/** IAM actions required for the TestTelemetryPipeline API call. */
	static readonly TestTelemetryPipeline: string[] = [
		"observabilityadmin:TestTelemetryPipeline",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"observabilityadmin:UntagResource",
	];
	/** IAM actions required for the UpdateCentralizationRuleForOrganization API call. */
	static readonly UpdateCentralizationRuleForOrganization: string[] = [
		"observabilityadmin:UpdateCentralizationRuleForOrganization",
	];
	/** IAM actions required for the UpdateTelemetryPipeline API call. */
	static readonly UpdateTelemetryPipeline: string[] = [
		"iam:PassRole",
		"cloudwatch:PutPipelineRule",
		"observabilityadmin:UpdateTelemetryPipeline",
	];
	/** IAM actions required for the UpdateTelemetryRule API call. */
	static readonly UpdateTelemetryRule: string[] = [
		"observabilityadmin:UpdateTelemetryRule",
	];
	/** IAM actions required for the UpdateTelemetryRuleForOrganization API call. */
	static readonly UpdateTelemetryRuleForOrganization: string[] = [
		"observabilityadmin:UpdateTelemetryRuleForOrganization",
	];
	/** IAM actions required for the ValidateTelemetryPipelineConfiguration API call. */
	static readonly ValidateTelemetryPipelineConfiguration: string[] = [
		"observabilityadmin:ValidateTelemetryPipelineConfiguration",
	];
}

/**
 * Condition key constants and builders for observabilityadmin.
 */
export class ObservabilityadminConditions {
	/** Condition keys applicable to the CreateCentralizationRuleForOrganization action. */
	static readonly CreateCentralizationRuleForOrganizationConditionKeys: string[] =
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
	static readonly CreateS3TableIntegrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTelemetryPipeline action. */
	static readonly CreateTelemetryPipelineConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"observabilityadmin:SourceType",
	];
	/** Condition keys applicable to the CreateTelemetryRule action. */
	static readonly CreateTelemetryRuleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the CreateTelemetryRuleForOrganization action. */
	static readonly CreateTelemetryRuleForOrganizationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the DeleteCentralizationRuleForOrganization action. */
	static readonly DeleteCentralizationRuleForOrganizationConditionKeys: string[] =
		["observabilityadmin:CentralizationRuleName"];
	/** Condition keys applicable to the GetCentralizationRuleForOrganization action. */
	static readonly actionGetCentralizationRuleForOrganizationConditionKeys: string[] =
		["observabilityadmin:CentralizationRuleName"];
	/** Condition keys applicable to the ListResourceTelemetry action. */
	static readonly ListResourceTelemetryConditionKeys: string[] = [
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the ListResourceTelemetryForOrganization action. */
	static readonly ListResourceTelemetryForOrganizationConditionKeys: string[] =
		["observabilityadmin:TargetRegions"];
	/** Condition keys applicable to the StartTelemetryEvaluation action. */
	static readonly StartTelemetryEvaluationConditionKeys: string[] = [
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the StartTelemetryEvaluationForOrganization action. */
	static readonly StartTelemetryEvaluationForOrganizationConditionKeys: string[] =
		["observabilityadmin:TargetRegions"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCentralizationRuleForOrganization action. */
	static readonly UpdateCentralizationRuleForOrganizationConditionKeys: string[] =
		[
			"observabilityadmin:CentralizationBackupRegion",
			"observabilityadmin:CentralizationDestinationAccount",
			"observabilityadmin:CentralizationDestinationRegion",
			"observabilityadmin:CentralizationRuleName",
			"observabilityadmin:CentralizationSourceId",
			"observabilityadmin:CentralizationSourceRegions",
		];
	/** Condition keys applicable to the UpdateTelemetryRule action. */
	static readonly UpdateTelemetryRuleConditionKeys: string[] = [
		"observabilityadmin:TargetRegions",
	];
	/** Condition keys applicable to the UpdateTelemetryRuleForOrganization action. */
	static readonly UpdateTelemetryRuleForOrganizationConditionKeys: string[] = [
		"observabilityadmin:TargetRegions",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
