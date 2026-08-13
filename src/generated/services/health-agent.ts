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
	static readonly ACTIVATE_SUBSCRIPTION = "health-agent:ActivateSubscription";
	/** [Write] health-agent:CancelAppointment */
	static readonly CANCEL_APPOINTMENT = "health-agent:CancelAppointment";
	/** [Write] health-agent:CreateAgent */
	static readonly CREATE_AGENT = "health-agent:CreateAgent";
	/** [Write] health-agent:CreateDomain */
	static readonly CREATE_DOMAIN = "health-agent:CreateDomain";
	/** [Write] health-agent:CreateIntegration */
	static readonly CREATE_INTEGRATION = "health-agent:CreateIntegration";
	/** [Write] health-agent:CreateSession */
	static readonly CREATE_SESSION = "health-agent:CreateSession";
	/** [Write] health-agent:CreateSubscription */
	static readonly CREATE_SUBSCRIPTION = "health-agent:CreateSubscription";
	/** [Write] health-agent:DeactivateSubscription */
	static readonly DEACTIVATE_SUBSCRIPTION =
		"health-agent:DeactivateSubscription";
	/** [Write] health-agent:DeleteAgent */
	static readonly DELETE_AGENT = "health-agent:DeleteAgent";
	/** [Write] health-agent:DeleteDomain */
	static readonly DELETE_DOMAIN = "health-agent:DeleteDomain";
	/** [Write] health-agent:DeleteIntegration */
	static readonly DELETE_INTEGRATION = "health-agent:DeleteIntegration";
	/** [Read] health-agent:GetAgent */
	static readonly GET_AGENT = "health-agent:GetAgent";
	/** [Read] health-agent:GetCareTeamProvider */
	static readonly GET_CARE_TEAM_PROVIDER = "health-agent:GetCareTeamProvider";
	/** [Read] health-agent:GetDomain */
	static readonly GET_DOMAIN = "health-agent:GetDomain";
	/** [Read] health-agent:GetDomainAnalytics */
	static readonly GET_DOMAIN_ANALYTICS = "health-agent:GetDomainAnalytics";
	/** [Read] health-agent:GetIntegration */
	static readonly GET_INTEGRATION = "health-agent:GetIntegration";
	/** [Read] health-agent:GetMedicalScribeListeningSession */
	static readonly GET_MEDICAL_SCRIBE_LISTENING_SESSION =
		"health-agent:GetMedicalScribeListeningSession";
	/** [Read] health-agent:GetPatient */
	static readonly GET_PATIENT = "health-agent:GetPatient";
	/** [Read] health-agent:GetPatientInsightsJob */
	static readonly GET_PATIENT_INSIGHTS_JOB =
		"health-agent:GetPatientInsightsJob";
	/** [Read] health-agent:GetPractitioner */
	static readonly GET_PRACTITIONER = "health-agent:GetPractitioner";
	/** [Read] health-agent:GetSessionContext */
	static readonly GET_SESSION_CONTEXT = "health-agent:GetSessionContext";
	/** [Read] health-agent:GetSubscription */
	static readonly GET_SUBSCRIPTION = "health-agent:GetSubscription";
	/** [Write] health-agent:InvokeAgent */
	static readonly INVOKE_AGENT = "health-agent:InvokeAgent";
	/** [List] health-agent:ListAgents */
	static readonly LIST_AGENTS = "health-agent:ListAgents";
	/** [Read] health-agent:ListAppointmentSlots */
	static readonly LIST_APPOINTMENT_SLOTS = "health-agent:ListAppointmentSlots";
	/** [List] health-agent:ListDomains */
	static readonly LIST_DOMAINS = "health-agent:ListDomains";
	/** [List] health-agent:ListIntegrations */
	static readonly LIST_INTEGRATIONS = "health-agent:ListIntegrations";
	/** [Read] health-agent:ListPatientAppointments */
	static readonly LIST_PATIENT_APPOINTMENTS =
		"health-agent:ListPatientAppointments";
	/** [Read] health-agent:ListPatientInsuranceCoverages */
	static readonly LIST_PATIENT_INSURANCE_COVERAGES =
		"health-agent:ListPatientInsuranceCoverages";
	/** [Read] health-agent:ListPatientMedications */
	static readonly LIST_PATIENT_MEDICATIONS =
		"health-agent:ListPatientMedications";
	/** [Read] health-agent:ListProviders */
	static readonly LIST_PROVIDERS = "health-agent:ListProviders";
	/** [List] health-agent:ListSessionRecords */
	static readonly LIST_SESSION_RECORDS = "health-agent:ListSessionRecords";
	/** [List] health-agent:ListSubscriptions */
	static readonly LIST_SUBSCRIPTIONS = "health-agent:ListSubscriptions";
	/** [List] health-agent:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "health-agent:ListTagsForResource";
	/** [Read] health-agent:MatchPatient */
	static readonly MATCH_PATIENT = "health-agent:MatchPatient";
	/** [Write] health-agent:PublishAgent */
	static readonly PUBLISH_AGENT = "health-agent:PublishAgent";
	/** [Write] health-agent:RescheduleAppointment */
	static readonly RESCHEDULE_APPOINTMENT = "health-agent:RescheduleAppointment";
	/** [Write] health-agent:ResetPassword */
	static readonly RESET_PASSWORD = "health-agent:ResetPassword";
	/** [Write] health-agent:ScheduleAppointment */
	static readonly SCHEDULE_APPOINTMENT = "health-agent:ScheduleAppointment";
	/** [Write] health-agent:StartMedicalScribeListeningSession */
	static readonly START_MEDICAL_SCRIBE_LISTENING_SESSION =
		"health-agent:StartMedicalScribeListeningSession";
	/** [Write] health-agent:StartPatientInsightsJob */
	static readonly START_PATIENT_INSIGHTS_JOB =
		"health-agent:StartPatientInsightsJob";
	/** [Write] health-agent:SubmitMedicationRenewal */
	static readonly SUBMIT_MEDICATION_RENEWAL =
		"health-agent:SubmitMedicationRenewal";
	/** [Tagging] health-agent:TagResource */
	static readonly TAG_RESOURCE = "health-agent:TagResource";
	/** [Tagging] health-agent:UntagResource */
	static readonly UNTAG_RESOURCE = "health-agent:UntagResource";
	/** [Write] health-agent:UpdateAgent */
	static readonly UPDATE_AGENT = "health-agent:UpdateAgent";
	/** [Write] health-agent:UpdateIntegration */
	static readonly UPDATE_INTEGRATION = "health-agent:UpdateIntegration";
	/** [Write] health-agent:UpdateSession */
	static readonly UPDATE_SESSION = "health-agent:UpdateSession";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		HealthAgentActions.GET_AGENT,
		HealthAgentActions.GET_CARE_TEAM_PROVIDER,
		HealthAgentActions.GET_DOMAIN,
		HealthAgentActions.GET_DOMAIN_ANALYTICS,
		HealthAgentActions.GET_INTEGRATION,
		HealthAgentActions.GET_MEDICAL_SCRIBE_LISTENING_SESSION,
		HealthAgentActions.GET_PATIENT,
		HealthAgentActions.GET_PATIENT_INSIGHTS_JOB,
		HealthAgentActions.GET_PRACTITIONER,
		HealthAgentActions.GET_SESSION_CONTEXT,
		HealthAgentActions.GET_SUBSCRIPTION,
		HealthAgentActions.LIST_APPOINTMENT_SLOTS,
		HealthAgentActions.LIST_PATIENT_APPOINTMENTS,
		HealthAgentActions.LIST_PATIENT_INSURANCE_COVERAGES,
		HealthAgentActions.LIST_PATIENT_MEDICATIONS,
		HealthAgentActions.LIST_PROVIDERS,
		HealthAgentActions.MATCH_PATIENT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		HealthAgentActions.ACTIVATE_SUBSCRIPTION,
		HealthAgentActions.CANCEL_APPOINTMENT,
		HealthAgentActions.CREATE_AGENT,
		HealthAgentActions.CREATE_DOMAIN,
		HealthAgentActions.CREATE_INTEGRATION,
		HealthAgentActions.CREATE_SESSION,
		HealthAgentActions.CREATE_SUBSCRIPTION,
		HealthAgentActions.DEACTIVATE_SUBSCRIPTION,
		HealthAgentActions.DELETE_AGENT,
		HealthAgentActions.DELETE_DOMAIN,
		HealthAgentActions.DELETE_INTEGRATION,
		HealthAgentActions.INVOKE_AGENT,
		HealthAgentActions.PUBLISH_AGENT,
		HealthAgentActions.RESCHEDULE_APPOINTMENT,
		HealthAgentActions.RESET_PASSWORD,
		HealthAgentActions.SCHEDULE_APPOINTMENT,
		HealthAgentActions.START_MEDICAL_SCRIBE_LISTENING_SESSION,
		HealthAgentActions.START_PATIENT_INSIGHTS_JOB,
		HealthAgentActions.SUBMIT_MEDICATION_RENEWAL,
		HealthAgentActions.UPDATE_AGENT,
		HealthAgentActions.UPDATE_INTEGRATION,
		HealthAgentActions.UPDATE_SESSION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		HealthAgentActions.LIST_AGENTS,
		HealthAgentActions.LIST_DOMAINS,
		HealthAgentActions.LIST_INTEGRATIONS,
		HealthAgentActions.LIST_SESSION_RECORDS,
		HealthAgentActions.LIST_SUBSCRIPTIONS,
		HealthAgentActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		HealthAgentActions.TAG_RESOURCE,
		HealthAgentActions.UNTAG_RESOURCE,
	];
}

const AgentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/agent/(?<agentId>[^:/?]+)$",
);
const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)$",
);
const IntegrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/integration/(?<integrationId>[^:/?]+)$",
);
const PatientInsightsJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/patient-insights-job/(?<jobId>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/session/(?<sessionId>[^:/?]+)$",
);
const SubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):health-agent:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/subscription/(?<subscriptionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for health-agent resources.
 */
export class HealthAgentResources {
	/**
	 * Builds an ARN for the Agent resource.
	 */
	static agent(props: {
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
	}): string {
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
	static parseAgentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		agentId: string;
	} {
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
	static domain(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
	} {
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
	static integration(props: {
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
	}): string {
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
	static parseIntegrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		integrationId: string;
	} {
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
	static patientInsightsJob(props: {
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
	}): string {
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
	static parsePatientInsightsJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		jobId: string;
	} {
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
	static session(props: {
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
	}): string {
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
	static parseSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		sessionId: string;
	} {
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
	static subscription(props: {
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
	}): string {
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
	static parseSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		subscriptionId: string;
	} {
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
	static readonly ACTIVATE_SUBSCRIPTION: string[] = [
		"health-agent:ActivateSubscription",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [
		"health-agent:CreateDomain",
		"iam:PassRole",
		"health-agent:TagResource",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CREATE_SUBSCRIPTION: string[] = [
		"health-agent:CreateSubscription",
	];
	/** IAM actions required for the DeactivateSubscription API call. */
	static readonly DEACTIVATE_SUBSCRIPTION: string[] = [
		"health-agent:DeactivateSubscription",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["health-agent:DeleteDomain"];
	/** IAM actions required for the GetDomain API call. */
	static readonly GET_DOMAIN: string[] = ["health-agent:GetDomain"];
	/** IAM actions required for the GetMedicalScribeListeningSession API call. */
	static readonly GET_MEDICAL_SCRIBE_LISTENING_SESSION: string[] = [
		"health-agent:GetMedicalScribeListeningSession",
	];
	/** IAM actions required for the GetPatientInsightsJob API call. */
	static readonly GET_PATIENT_INSIGHTS_JOB: string[] = [
		"health-agent:GetPatientInsightsJob",
	];
	/** IAM actions required for the GetSubscription API call. */
	static readonly GET_SUBSCRIPTION: string[] = ["health-agent:GetSubscription"];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["health-agent:ListDomains"];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly LIST_SUBSCRIPTIONS: string[] = [
		"health-agent:ListSubscriptions",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"health-agent:ListTagsForResource",
	];
	/** IAM actions required for the StartMedicalScribeListeningSession API call. */
	static readonly START_MEDICAL_SCRIBE_LISTENING_SESSION: string[] = [
		"health-agent:StartMedicalScribeListeningSession",
	];
	/** IAM actions required for the StartPatientInsightsJob API call. */
	static readonly START_PATIENT_INSIGHTS_JOB: string[] = [
		"health-agent:StartPatientInsightsJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["health-agent:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["health-agent:UntagResource"];
}

/**
 * Condition key constants and builders for health-agent.
 */
export class HealthAgentConditions {
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CREATE_DOMAIN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
