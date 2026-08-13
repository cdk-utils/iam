// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssm-incidents.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ssm-incidents service.
 */
export class SSMIncidentsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssm-incidents";

	/** [Read] ssm-incidents:BatchGetIncidentFindings */
	static readonly BATCH_GET_INCIDENT_FINDINGS =
		"ssm-incidents:BatchGetIncidentFindings";
	/** [Write] ssm-incidents:CreateReplicationSet */
	static readonly CREATE_REPLICATION_SET = "ssm-incidents:CreateReplicationSet";
	/** [Write] ssm-incidents:CreateResponsePlan */
	static readonly CREATE_RESPONSE_PLAN = "ssm-incidents:CreateResponsePlan";
	/** [Write] ssm-incidents:CreateTimelineEvent */
	static readonly CREATE_TIMELINE_EVENT = "ssm-incidents:CreateTimelineEvent";
	/** [Write] ssm-incidents:DeleteIncidentRecord */
	static readonly DELETE_INCIDENT_RECORD = "ssm-incidents:DeleteIncidentRecord";
	/** [Write] ssm-incidents:DeleteReplicationSet */
	static readonly DELETE_REPLICATION_SET = "ssm-incidents:DeleteReplicationSet";
	/** [PermissionManagement] ssm-incidents:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "ssm-incidents:DeleteResourcePolicy";
	/** [Write] ssm-incidents:DeleteResponsePlan */
	static readonly DELETE_RESPONSE_PLAN = "ssm-incidents:DeleteResponsePlan";
	/** [Write] ssm-incidents:DeleteTimelineEvent */
	static readonly DELETE_TIMELINE_EVENT = "ssm-incidents:DeleteTimelineEvent";
	/** [Read] ssm-incidents:GetIncidentRecord */
	static readonly GET_INCIDENT_RECORD = "ssm-incidents:GetIncidentRecord";
	/** [Read] ssm-incidents:GetReplicationSet */
	static readonly GET_REPLICATION_SET = "ssm-incidents:GetReplicationSet";
	/** [Read] ssm-incidents:GetResourcePolicies */
	static readonly GET_RESOURCE_POLICIES = "ssm-incidents:GetResourcePolicies";
	/** [Read] ssm-incidents:GetResponsePlan */
	static readonly GET_RESPONSE_PLAN = "ssm-incidents:GetResponsePlan";
	/** [Read] ssm-incidents:GetTimelineEvent */
	static readonly GET_TIMELINE_EVENT = "ssm-incidents:GetTimelineEvent";
	/** [List] ssm-incidents:ListIncidentFindings */
	static readonly LIST_INCIDENT_FINDINGS = "ssm-incidents:ListIncidentFindings";
	/** [List] ssm-incidents:ListIncidentRecords */
	static readonly LIST_INCIDENT_RECORDS = "ssm-incidents:ListIncidentRecords";
	/** [List] ssm-incidents:ListRelatedItems */
	static readonly LIST_RELATED_ITEMS = "ssm-incidents:ListRelatedItems";
	/** [List] ssm-incidents:ListReplicationSets */
	static readonly LIST_REPLICATION_SETS = "ssm-incidents:ListReplicationSets";
	/** [List] ssm-incidents:ListResponsePlans */
	static readonly LIST_RESPONSE_PLANS = "ssm-incidents:ListResponsePlans";
	/** [Read] ssm-incidents:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ssm-incidents:ListTagsForResource";
	/** [List] ssm-incidents:ListTimelineEvents */
	static readonly LIST_TIMELINE_EVENTS = "ssm-incidents:ListTimelineEvents";
	/** [PermissionManagement] ssm-incidents:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "ssm-incidents:PutResourcePolicy";
	/** [Write] ssm-incidents:StartIncident */
	static readonly START_INCIDENT = "ssm-incidents:StartIncident";
	/** [Tagging] ssm-incidents:TagResource */
	static readonly TAG_RESOURCE = "ssm-incidents:TagResource";
	/** [Tagging] ssm-incidents:UntagResource */
	static readonly UNTAG_RESOURCE = "ssm-incidents:UntagResource";
	/** [Write] ssm-incidents:UpdateDeletionProtection */
	static readonly UPDATE_DELETION_PROTECTION =
		"ssm-incidents:UpdateDeletionProtection";
	/** [Write] ssm-incidents:UpdateIncidentRecord */
	static readonly UPDATE_INCIDENT_RECORD = "ssm-incidents:UpdateIncidentRecord";
	/** [Write] ssm-incidents:UpdateRelatedItems */
	static readonly UPDATE_RELATED_ITEMS = "ssm-incidents:UpdateRelatedItems";
	/** [Write] ssm-incidents:UpdateReplicationSet */
	static readonly UPDATE_REPLICATION_SET = "ssm-incidents:UpdateReplicationSet";
	/** [Write] ssm-incidents:UpdateResponsePlan */
	static readonly UPDATE_RESPONSE_PLAN = "ssm-incidents:UpdateResponsePlan";
	/** [Write] ssm-incidents:UpdateTimelineEvent */
	static readonly UPDATE_TIMELINE_EVENT = "ssm-incidents:UpdateTimelineEvent";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SSMIncidentsActions.BATCH_GET_INCIDENT_FINDINGS,
		SSMIncidentsActions.GET_INCIDENT_RECORD,
		SSMIncidentsActions.GET_REPLICATION_SET,
		SSMIncidentsActions.GET_RESOURCE_POLICIES,
		SSMIncidentsActions.GET_RESPONSE_PLAN,
		SSMIncidentsActions.GET_TIMELINE_EVENT,
		SSMIncidentsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SSMIncidentsActions.CREATE_REPLICATION_SET,
		SSMIncidentsActions.CREATE_RESPONSE_PLAN,
		SSMIncidentsActions.CREATE_TIMELINE_EVENT,
		SSMIncidentsActions.DELETE_INCIDENT_RECORD,
		SSMIncidentsActions.DELETE_REPLICATION_SET,
		SSMIncidentsActions.DELETE_RESPONSE_PLAN,
		SSMIncidentsActions.DELETE_TIMELINE_EVENT,
		SSMIncidentsActions.START_INCIDENT,
		SSMIncidentsActions.UPDATE_DELETION_PROTECTION,
		SSMIncidentsActions.UPDATE_INCIDENT_RECORD,
		SSMIncidentsActions.UPDATE_RELATED_ITEMS,
		SSMIncidentsActions.UPDATE_REPLICATION_SET,
		SSMIncidentsActions.UPDATE_RESPONSE_PLAN,
		SSMIncidentsActions.UPDATE_TIMELINE_EVENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SSMIncidentsActions.LIST_INCIDENT_FINDINGS,
		SSMIncidentsActions.LIST_INCIDENT_RECORDS,
		SSMIncidentsActions.LIST_RELATED_ITEMS,
		SSMIncidentsActions.LIST_REPLICATION_SETS,
		SSMIncidentsActions.LIST_RESPONSE_PLANS,
		SSMIncidentsActions.LIST_TIMELINE_EVENTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SSMIncidentsActions.DELETE_RESOURCE_POLICY,
		SSMIncidentsActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SSMIncidentsActions.TAG_RESOURCE,
		SSMIncidentsActions.UNTAG_RESOURCE,
	];
}

const IncidentRecordArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-incidents::(?<account>[^:]*):incident-record/(?<responsePlan>[^:/?]+)/(?<incidentRecord>[^:/?]+)$",
);
const ReplicationSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-incidents::(?<account>[^:]*):replication-set/(?<replicationSet>[^:/?]+)$",
);
const ResponsePlanArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-incidents::(?<account>[^:]*):response-plan/(?<responsePlan>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ssm-incidents resources.
 */
export class SSMIncidentsResources {
	/**
	 * Builds an ARN for the incident-record resource.
	 */
	static incidentRecord(props: {
		/** The ResponsePlan component of the ARN. */
		readonly responsePlan: string;
		/** The IncidentRecord component of the ARN. */
		readonly incidentRecord: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-incidents::${props.account ?? "*"}:incident-record/${props.responsePlan}/${props.incidentRecord}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the incident-record resource.
	 */
	static isValidIncidentRecordArn(arn: string): boolean {
		return IncidentRecordArnRegex.test(arn);
	}

	/**
	 * Parses a incident-record ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIncidentRecordArn(arn: string): {
		partition: string;
		account: string;
		responsePlan: string;
		incidentRecord: string;
	} {
		const match = IncidentRecordArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid incident-record ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			responsePlan: match.groups!.responsePlan,
			incidentRecord: match.groups!.incidentRecord,
		};
	}

	/**
	 * Builds an ARN for the replication-set resource.
	 */
	static replicationSet(props: {
		/** The ReplicationSet component of the ARN. */
		readonly replicationSet: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-incidents::${props.account ?? "*"}:replication-set/${props.replicationSet}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the replication-set resource.
	 */
	static isValidReplicationSetArn(arn: string): boolean {
		return ReplicationSetArnRegex.test(arn);
	}

	/**
	 * Parses a replication-set ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplicationSetArn(arn: string): {
		partition: string;
		account: string;
		replicationSet: string;
	} {
		const match = ReplicationSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid replication-set ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			replicationSet: match.groups!.replicationSet,
		};
	}

	/**
	 * Builds an ARN for the response-plan resource.
	 */
	static responsePlan(props: {
		/** The ResponsePlan component of the ARN. */
		readonly responsePlan: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:ssm-incidents::${props.account ?? "*"}:response-plan/${props.responsePlan}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the response-plan resource.
	 */
	static isValidResponsePlanArn(arn: string): boolean {
		return ResponsePlanArnRegex.test(arn);
	}

	/**
	 * Parses a response-plan ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResponsePlanArn(arn: string): {
		partition: string;
		account: string;
		responsePlan: string;
	} {
		const match = ResponsePlanArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid response-plan ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			responsePlan: match.groups!.responsePlan,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ssm-incidents.
 */
export class SSMIncidentsOperations {
	/** IAM actions required for the BatchGetIncidentFindings API call. */
	static readonly BATCH_GET_INCIDENT_FINDINGS: string[] = [
		"ssm-incidents:BatchGetIncidentFindings",
	];
	/** IAM actions required for the CreateReplicationSet API call. */
	static readonly CREATE_REPLICATION_SET: string[] = [
		"ssm-incidents:CreateReplicationSet",
		"ssm-incidents:TagResource",
	];
	/** IAM actions required for the CreateResponsePlan API call. */
	static readonly CREATE_RESPONSE_PLAN: string[] = [
		"ssm-incidents:CreateResponsePlan",
		"iam:PassRole",
		"ssm-incidents:TagResource",
	];
	/** IAM actions required for the CreateTimelineEvent API call. */
	static readonly CREATE_TIMELINE_EVENT: string[] = [
		"ssm-incidents:CreateTimelineEvent",
	];
	/** IAM actions required for the DeleteIncidentRecord API call. */
	static readonly DELETE_INCIDENT_RECORD: string[] = [
		"ssm-incidents:DeleteIncidentRecord",
	];
	/** IAM actions required for the DeleteReplicationSet API call. */
	static readonly DELETE_REPLICATION_SET: string[] = [
		"ssm-incidents:DeleteReplicationSet",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"ssm-incidents:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteResponsePlan API call. */
	static readonly DELETE_RESPONSE_PLAN: string[] = [
		"ssm-incidents:DeleteResponsePlan",
	];
	/** IAM actions required for the DeleteTimelineEvent API call. */
	static readonly DELETE_TIMELINE_EVENT: string[] = [
		"ssm-incidents:DeleteTimelineEvent",
	];
	/** IAM actions required for the GetIncidentRecord API call. */
	static readonly GET_INCIDENT_RECORD: string[] = [
		"ssm-incidents:GetIncidentRecord",
	];
	/** IAM actions required for the GetReplicationSet API call. */
	static readonly GET_REPLICATION_SET: string[] = [
		"ssm-incidents:GetReplicationSet",
	];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly GET_RESOURCE_POLICIES: string[] = [
		"ssm-incidents:GetResourcePolicies",
	];
	/** IAM actions required for the GetResponsePlan API call. */
	static readonly GET_RESPONSE_PLAN: string[] = [
		"ssm-incidents:GetResponsePlan",
	];
	/** IAM actions required for the GetTimelineEvent API call. */
	static readonly GET_TIMELINE_EVENT: string[] = [
		"ssm-incidents:GetTimelineEvent",
	];
	/** IAM actions required for the ListIncidentFindings API call. */
	static readonly LIST_INCIDENT_FINDINGS: string[] = [
		"ssm-incidents:ListIncidentFindings",
	];
	/** IAM actions required for the ListIncidentRecords API call. */
	static readonly LIST_INCIDENT_RECORDS: string[] = [
		"ssm-incidents:ListIncidentRecords",
	];
	/** IAM actions required for the ListRelatedItems API call. */
	static readonly LIST_RELATED_ITEMS: string[] = [
		"ssm-incidents:ListRelatedItems",
	];
	/** IAM actions required for the ListReplicationSets API call. */
	static readonly LIST_REPLICATION_SETS: string[] = [
		"ssm-incidents:ListReplicationSets",
	];
	/** IAM actions required for the ListResponsePlans API call. */
	static readonly LIST_RESPONSE_PLANS: string[] = [
		"ssm-incidents:ListResponsePlans",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ssm-incidents:ListTagsForResource",
	];
	/** IAM actions required for the ListTimelineEvents API call. */
	static readonly LIST_TIMELINE_EVENTS: string[] = [
		"ssm-incidents:ListTimelineEvents",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"ssm-incidents:PutResourcePolicy",
	];
	/** IAM actions required for the StartIncident API call. */
	static readonly START_INCIDENT: string[] = ["ssm-incidents:StartIncident"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ssm-incidents:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ssm-incidents:UntagResource"];
	/** IAM actions required for the UpdateDeletionProtection API call. */
	static readonly UPDATE_DELETION_PROTECTION: string[] = [
		"ssm-incidents:UpdateDeletionProtection",
	];
	/** IAM actions required for the UpdateIncidentRecord API call. */
	static readonly UPDATE_INCIDENT_RECORD: string[] = [
		"ssm-incidents:UpdateIncidentRecord",
	];
	/** IAM actions required for the UpdateRelatedItems API call. */
	static readonly UPDATE_RELATED_ITEMS: string[] = [
		"ssm-incidents:UpdateRelatedItems",
	];
	/** IAM actions required for the UpdateReplicationSet API call. */
	static readonly UPDATE_REPLICATION_SET: string[] = [
		"ssm-incidents:UpdateReplicationSet",
	];
	/** IAM actions required for the UpdateResponsePlan API call. */
	static readonly UPDATE_RESPONSE_PLAN: string[] = [
		"iam:PassRole",
		"ssm-incidents:TagResource",
		"ssm-incidents:UpdateResponsePlan",
	];
	/** IAM actions required for the UpdateTimelineEvent API call. */
	static readonly UPDATE_TIMELINE_EVENT: string[] = [
		"ssm-incidents:UpdateTimelineEvent",
	];
}

/**
 * Condition key constants and builders for ssm-incidents.
 */
export class SSMIncidentsConditions {
	/** Condition keys applicable to the CreateReplicationSet action. */
	static readonly CREATE_REPLICATION_SET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResponsePlan action. */
	static readonly CREATE_RESPONSE_PLAN_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateResponsePlan action. */
	static readonly UPDATE_RESPONSE_PLAN_CONDITION_KEYS: string[] = [
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
