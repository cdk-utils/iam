// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/health-agent.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the health-agent service.
 */
export class HealthAgentActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "health-agent";

	/** [Write] health-agent:ActivateSubscription */
	static readonly ActivateSubscription = "health-agent:ActivateSubscription";
	/** [Write] health-agent:CancelAppointment */
	static readonly CancelAppointment = "health-agent:CancelAppointment";
	/** [Write] health-agent:CreateAgent */
	static readonly CreateAgent = "health-agent:CreateAgent";
	/** [Write] health-agent:CreateDomain */
	static readonly CreateDomain = "health-agent:CreateDomain";
	/** [Write] health-agent:CreateIntegration */
	static readonly CreateIntegration = "health-agent:CreateIntegration";
	/** [Write] health-agent:CreateSession */
	static readonly CreateSession = "health-agent:CreateSession";
	/** [Write] health-agent:CreateSubscription */
	static readonly CreateSubscription = "health-agent:CreateSubscription";
	/** [Write] health-agent:DeactivateSubscription */
	static readonly DeactivateSubscription =
		"health-agent:DeactivateSubscription";
	/** [Write] health-agent:DeleteAgent */
	static readonly DeleteAgent = "health-agent:DeleteAgent";
	/** [Write] health-agent:DeleteDomain */
	static readonly DeleteDomain = "health-agent:DeleteDomain";
	/** [Write] health-agent:DeleteIntegration */
	static readonly DeleteIntegration = "health-agent:DeleteIntegration";
	/** [Read] health-agent:GetAgent */
	static readonly actionGetAgent = "health-agent:GetAgent";
	/** [Read] health-agent:GetCareTeamProvider */
	static readonly actionGetCareTeamProvider =
		"health-agent:GetCareTeamProvider";
	/** [Read] health-agent:GetDomain */
	static readonly actionGetDomain = "health-agent:GetDomain";
	/** [Read] health-agent:GetDomainAnalytics */
	static readonly actionGetDomainAnalytics = "health-agent:GetDomainAnalytics";
	/** [Read] health-agent:GetIntegration */
	static readonly actionGetIntegration = "health-agent:GetIntegration";
	/** [Read] health-agent:GetMedicalScribeListeningSession */
	static readonly actionGetMedicalScribeListeningSession =
		"health-agent:GetMedicalScribeListeningSession";
	/** [Read] health-agent:GetPatient */
	static readonly actionGetPatient = "health-agent:GetPatient";
	/** [Read] health-agent:GetPatientInsightsJob */
	static readonly actionGetPatientInsightsJob =
		"health-agent:GetPatientInsightsJob";
	/** [Read] health-agent:GetPractitioner */
	static readonly actionGetPractitioner = "health-agent:GetPractitioner";
	/** [Read] health-agent:GetSessionContext */
	static readonly actionGetSessionContext = "health-agent:GetSessionContext";
	/** [Read] health-agent:GetSubscription */
	static readonly actionGetSubscription = "health-agent:GetSubscription";
	/** [Write] health-agent:InvokeAgent */
	static readonly InvokeAgent = "health-agent:InvokeAgent";
	/** [List] health-agent:ListAgents */
	static readonly ListAgents = "health-agent:ListAgents";
	/** [Read] health-agent:ListAppointmentSlots */
	static readonly ListAppointmentSlots = "health-agent:ListAppointmentSlots";
	/** [List] health-agent:ListDomains */
	static readonly ListDomains = "health-agent:ListDomains";
	/** [List] health-agent:ListIntegrations */
	static readonly ListIntegrations = "health-agent:ListIntegrations";
	/** [Read] health-agent:ListPatientAppointments */
	static readonly ListPatientAppointments =
		"health-agent:ListPatientAppointments";
	/** [Read] health-agent:ListPatientInsuranceCoverages */
	static readonly ListPatientInsuranceCoverages =
		"health-agent:ListPatientInsuranceCoverages";
	/** [Read] health-agent:ListPatientMedications */
	static readonly ListPatientMedications =
		"health-agent:ListPatientMedications";
	/** [Read] health-agent:ListProviders */
	static readonly ListProviders = "health-agent:ListProviders";
	/** [List] health-agent:ListSessionRecords */
	static readonly ListSessionRecords = "health-agent:ListSessionRecords";
	/** [List] health-agent:ListSubscriptions */
	static readonly ListSubscriptions = "health-agent:ListSubscriptions";
	/** [List] health-agent:ListTagsForResource */
	static readonly ListTagsForResource = "health-agent:ListTagsForResource";
	/** [Read] health-agent:MatchPatient */
	static readonly MatchPatient = "health-agent:MatchPatient";
	/** [Write] health-agent:PublishAgent */
	static readonly PublishAgent = "health-agent:PublishAgent";
	/** [Write] health-agent:RescheduleAppointment */
	static readonly RescheduleAppointment = "health-agent:RescheduleAppointment";
	/** [Write] health-agent:ResetPassword */
	static readonly ResetPassword = "health-agent:ResetPassword";
	/** [Write] health-agent:ScheduleAppointment */
	static readonly ScheduleAppointment = "health-agent:ScheduleAppointment";
	/** [Write] health-agent:StartMedicalScribeListeningSession */
	static readonly StartMedicalScribeListeningSession =
		"health-agent:StartMedicalScribeListeningSession";
	/** [Write] health-agent:StartPatientInsightsJob */
	static readonly StartPatientInsightsJob =
		"health-agent:StartPatientInsightsJob";
	/** [Write] health-agent:SubmitMedicationRenewal */
	static readonly SubmitMedicationRenewal =
		"health-agent:SubmitMedicationRenewal";
	/** [Tagging] health-agent:TagResource */
	static readonly TagResource = "health-agent:TagResource";
	/** [Tagging] health-agent:UntagResource */
	static readonly UntagResource = "health-agent:UntagResource";
	/** [Write] health-agent:UpdateAgent */
	static readonly UpdateAgent = "health-agent:UpdateAgent";
	/** [Write] health-agent:UpdateIntegration */
	static readonly UpdateIntegration = "health-agent:UpdateIntegration";
	/** [Write] health-agent:UpdateSession */
	static readonly UpdateSession = "health-agent:UpdateSession";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		HealthAgentActions.actionGetAgent,
		HealthAgentActions.actionGetCareTeamProvider,
		HealthAgentActions.actionGetDomain,
		HealthAgentActions.actionGetDomainAnalytics,
		HealthAgentActions.actionGetIntegration,
		HealthAgentActions.actionGetMedicalScribeListeningSession,
		HealthAgentActions.actionGetPatient,
		HealthAgentActions.actionGetPatientInsightsJob,
		HealthAgentActions.actionGetPractitioner,
		HealthAgentActions.actionGetSessionContext,
		HealthAgentActions.actionGetSubscription,
		HealthAgentActions.ListAppointmentSlots,
		HealthAgentActions.ListPatientAppointments,
		HealthAgentActions.ListPatientInsuranceCoverages,
		HealthAgentActions.ListPatientMedications,
		HealthAgentActions.ListProviders,
		HealthAgentActions.MatchPatient,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		HealthAgentActions.ActivateSubscription,
		HealthAgentActions.CancelAppointment,
		HealthAgentActions.CreateAgent,
		HealthAgentActions.CreateDomain,
		HealthAgentActions.CreateIntegration,
		HealthAgentActions.CreateSession,
		HealthAgentActions.CreateSubscription,
		HealthAgentActions.DeactivateSubscription,
		HealthAgentActions.DeleteAgent,
		HealthAgentActions.DeleteDomain,
		HealthAgentActions.DeleteIntegration,
		HealthAgentActions.InvokeAgent,
		HealthAgentActions.PublishAgent,
		HealthAgentActions.RescheduleAppointment,
		HealthAgentActions.ResetPassword,
		HealthAgentActions.ScheduleAppointment,
		HealthAgentActions.StartMedicalScribeListeningSession,
		HealthAgentActions.StartPatientInsightsJob,
		HealthAgentActions.SubmitMedicationRenewal,
		HealthAgentActions.UpdateAgent,
		HealthAgentActions.UpdateIntegration,
		HealthAgentActions.UpdateSession,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		HealthAgentActions.ListAgents,
		HealthAgentActions.ListDomains,
		HealthAgentActions.ListIntegrations,
		HealthAgentActions.ListSessionRecords,
		HealthAgentActions.ListSubscriptions,
		HealthAgentActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		HealthAgentActions.TagResource,
		HealthAgentActions.UntagResource,
	];
}

/**
 * Properties for building a Agent ARN.
 */
export interface HealthAgentAgentArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** The AgentId component of the ARN. */
	readonly agentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Agent ARN.
 */
export interface HealthAgentAgentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The AgentId component. */
	readonly agentId: string;
}

/**
 * Properties for building a Domain ARN.
 */
export interface HealthAgentDomainArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Domain ARN.
 */
export interface HealthAgentDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
}

/**
 * Properties for building a Integration ARN.
 */
export interface HealthAgentIntegrationArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
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
 * Parsed components of a Integration ARN.
 */
export interface HealthAgentIntegrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The IntegrationId component. */
	readonly integrationId: string;
}

/**
 * Properties for building a PatientInsightsJob ARN.
 */
export interface HealthAgentPatientInsightsJobArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a PatientInsightsJob ARN.
 */
export interface HealthAgentPatientInsightsJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a Session ARN.
 */
export interface HealthAgentSessionArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Session ARN.
 */
export interface HealthAgentSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

/**
 * Properties for building a Subscription ARN.
 */
export interface HealthAgentSubscriptionArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** The SubscriptionId component of the ARN. */
	readonly subscriptionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Subscription ARN.
 */
export interface HealthAgentSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The SubscriptionId component. */
	readonly subscriptionId: string;
}

const AgentArnRegex =
	/^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/agent\/(?<agentId>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)$/;
const IntegrationArnRegex =
	/^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/integration\/(?<integrationId>[^:/?]+)$/;
const PatientInsightsJobArnRegex =
	/^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/patient-insights-job\/(?<jobId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/session\/(?<sessionId>[^:/?]+)$/;
const SubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/subscription\/(?<subscriptionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for health-agent resources.
 */
export class HealthAgentResources {
	/**
	 * Builds an ARN for the Agent resource.
	 */
	static agent(props: HealthAgentAgentArnProps): string {
		return `arn:${props.partition ?? "aws"}:health-agent:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/agent/${props.agentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Agent resource.
	 */
	static isValidAgentArn(arn: string): boolean {
		return AgentArnRegex.test(arn);
	}

	/**
	 * Parses a Agent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgentArn(arn: string): HealthAgentAgentArnComponents {
		const match = AgentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Agent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			agentId: match.groups!.agentId,
		};
	}

	/**
	 * Builds an ARN for the Domain resource.
	 */
	static domain(props: HealthAgentDomainArnProps): string {
		return `arn:${props.partition ?? "aws"}:health-agent:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a Domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): HealthAgentDomainArnComponents {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
		};
	}

	/**
	 * Builds an ARN for the Integration resource.
	 */
	static integration(props: HealthAgentIntegrationArnProps): string {
		return `arn:${props.partition ?? "aws"}:health-agent:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/integration/${props.integrationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Integration resource.
	 */
	static isValidIntegrationArn(arn: string): boolean {
		return IntegrationArnRegex.test(arn);
	}

	/**
	 * Parses a Integration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIntegrationArn(arn: string): HealthAgentIntegrationArnComponents {
		const match = IntegrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Integration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			integrationId: match.groups!.integrationId,
		};
	}

	/**
	 * Builds an ARN for the PatientInsightsJob resource.
	 */
	static patientInsightsJob(
		props: HealthAgentPatientInsightsJobArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:health-agent:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/patient-insights-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the PatientInsightsJob resource.
	 */
	static isValidPatientInsightsJobArn(arn: string): boolean {
		return PatientInsightsJobArnRegex.test(arn);
	}

	/**
	 * Parses a PatientInsightsJob ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePatientInsightsJobArn(
		arn: string,
	): HealthAgentPatientInsightsJobArnComponents {
		const match = PatientInsightsJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid PatientInsightsJob ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the Session resource.
	 */
	static session(props: HealthAgentSessionArnProps): string {
		return `arn:${props.partition ?? "aws"}:health-agent:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a Session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): HealthAgentSessionArnComponents {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			sessionId: match.groups!.sessionId,
		};
	}

	/**
	 * Builds an ARN for the Subscription resource.
	 */
	static subscription(props: HealthAgentSubscriptionArnProps): string {
		return `arn:${props.partition ?? "aws"}:health-agent:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/subscription/${props.subscriptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Subscription resource.
	 */
	static isValidSubscriptionArn(arn: string): boolean {
		return SubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a Subscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriptionArn(
		arn: string,
	): HealthAgentSubscriptionArnComponents {
		const match = SubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Subscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			subscriptionId: match.groups!.subscriptionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for health-agent.
 */
export class HealthAgentOperations {
	/** IAM actions required for the ActivateSubscription API call. */
	static readonly ActivateSubscription: string[] = [
		"health-agent:ActivateSubscription",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [
		"health-agent:CreateDomain",
		"iam:PassRole",
		"health-agent:TagResource",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CreateSubscription: string[] = [
		"health-agent:CreateSubscription",
	];
	/** IAM actions required for the DeactivateSubscription API call. */
	static readonly DeactivateSubscription: string[] = [
		"health-agent:DeactivateSubscription",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["health-agent:DeleteDomain"];
	/** IAM actions required for the GetDomain API call. */
	static readonly opGetDomain: string[] = ["health-agent:GetDomain"];
	/** IAM actions required for the GetMedicalScribeListeningSession API call. */
	static readonly opGetMedicalScribeListeningSession: string[] = [
		"health-agent:GetMedicalScribeListeningSession",
	];
	/** IAM actions required for the GetPatientInsightsJob API call. */
	static readonly opGetPatientInsightsJob: string[] = [
		"health-agent:GetPatientInsightsJob",
	];
	/** IAM actions required for the GetSubscription API call. */
	static readonly opGetSubscription: string[] = [
		"health-agent:GetSubscription",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["health-agent:ListDomains"];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly ListSubscriptions: string[] = [
		"health-agent:ListSubscriptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"health-agent:ListTagsForResource",
	];
	/** IAM actions required for the StartMedicalScribeListeningSession API call. */
	static readonly StartMedicalScribeListeningSession: string[] = [
		"health-agent:StartMedicalScribeListeningSession",
	];
	/** IAM actions required for the StartPatientInsightsJob API call. */
	static readonly StartPatientInsightsJob: string[] = [
		"health-agent:StartPatientInsightsJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["health-agent:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["health-agent:UntagResource"];
}

/**
 * Condition key constants and builders for health-agent.
 */
export class HealthAgentConditions {
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CreateDomainConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
