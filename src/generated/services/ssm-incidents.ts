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
	static readonly BatchGetIncidentFindings =
		"ssm-incidents:BatchGetIncidentFindings";
	/** [Write] ssm-incidents:CreateReplicationSet */
	static readonly CreateReplicationSet = "ssm-incidents:CreateReplicationSet";
	/** [Write] ssm-incidents:CreateResponsePlan */
	static readonly CreateResponsePlan = "ssm-incidents:CreateResponsePlan";
	/** [Write] ssm-incidents:CreateTimelineEvent */
	static readonly CreateTimelineEvent = "ssm-incidents:CreateTimelineEvent";
	/** [Write] ssm-incidents:DeleteIncidentRecord */
	static readonly DeleteIncidentRecord = "ssm-incidents:DeleteIncidentRecord";
	/** [Write] ssm-incidents:DeleteReplicationSet */
	static readonly DeleteReplicationSet = "ssm-incidents:DeleteReplicationSet";
	/** [PermissionManagement] ssm-incidents:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "ssm-incidents:DeleteResourcePolicy";
	/** [Write] ssm-incidents:DeleteResponsePlan */
	static readonly DeleteResponsePlan = "ssm-incidents:DeleteResponsePlan";
	/** [Write] ssm-incidents:DeleteTimelineEvent */
	static readonly DeleteTimelineEvent = "ssm-incidents:DeleteTimelineEvent";
	/** [Read] ssm-incidents:GetIncidentRecord */
	static readonly actionGetIncidentRecord = "ssm-incidents:GetIncidentRecord";
	/** [Read] ssm-incidents:GetReplicationSet */
	static readonly actionGetReplicationSet = "ssm-incidents:GetReplicationSet";
	/** [Read] ssm-incidents:GetResourcePolicies */
	static readonly actionGetResourcePolicies =
		"ssm-incidents:GetResourcePolicies";
	/** [Read] ssm-incidents:GetResponsePlan */
	static readonly actionGetResponsePlan = "ssm-incidents:GetResponsePlan";
	/** [Read] ssm-incidents:GetTimelineEvent */
	static readonly actionGetTimelineEvent = "ssm-incidents:GetTimelineEvent";
	/** [List] ssm-incidents:ListIncidentFindings */
	static readonly ListIncidentFindings = "ssm-incidents:ListIncidentFindings";
	/** [List] ssm-incidents:ListIncidentRecords */
	static readonly ListIncidentRecords = "ssm-incidents:ListIncidentRecords";
	/** [List] ssm-incidents:ListRelatedItems */
	static readonly ListRelatedItems = "ssm-incidents:ListRelatedItems";
	/** [List] ssm-incidents:ListReplicationSets */
	static readonly ListReplicationSets = "ssm-incidents:ListReplicationSets";
	/** [List] ssm-incidents:ListResponsePlans */
	static readonly ListResponsePlans = "ssm-incidents:ListResponsePlans";
	/** [Read] ssm-incidents:ListTagsForResource */
	static readonly ListTagsForResource = "ssm-incidents:ListTagsForResource";
	/** [List] ssm-incidents:ListTimelineEvents */
	static readonly ListTimelineEvents = "ssm-incidents:ListTimelineEvents";
	/** [PermissionManagement] ssm-incidents:PutResourcePolicy */
	static readonly PutResourcePolicy = "ssm-incidents:PutResourcePolicy";
	/** [Write] ssm-incidents:StartIncident */
	static readonly StartIncident = "ssm-incidents:StartIncident";
	/** [Tagging] ssm-incidents:TagResource */
	static readonly TagResource = "ssm-incidents:TagResource";
	/** [Tagging] ssm-incidents:UntagResource */
	static readonly UntagResource = "ssm-incidents:UntagResource";
	/** [Write] ssm-incidents:UpdateDeletionProtection */
	static readonly UpdateDeletionProtection =
		"ssm-incidents:UpdateDeletionProtection";
	/** [Write] ssm-incidents:UpdateIncidentRecord */
	static readonly UpdateIncidentRecord = "ssm-incidents:UpdateIncidentRecord";
	/** [Write] ssm-incidents:UpdateRelatedItems */
	static readonly UpdateRelatedItems = "ssm-incidents:UpdateRelatedItems";
	/** [Write] ssm-incidents:UpdateReplicationSet */
	static readonly UpdateReplicationSet = "ssm-incidents:UpdateReplicationSet";
	/** [Write] ssm-incidents:UpdateResponsePlan */
	static readonly UpdateResponsePlan = "ssm-incidents:UpdateResponsePlan";
	/** [Write] ssm-incidents:UpdateTimelineEvent */
	static readonly UpdateTimelineEvent = "ssm-incidents:UpdateTimelineEvent";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSMIncidentsActions.BatchGetIncidentFindings,
		SSMIncidentsActions.actionGetIncidentRecord,
		SSMIncidentsActions.actionGetReplicationSet,
		SSMIncidentsActions.actionGetResourcePolicies,
		SSMIncidentsActions.actionGetResponsePlan,
		SSMIncidentsActions.actionGetTimelineEvent,
		SSMIncidentsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSMIncidentsActions.CreateReplicationSet,
		SSMIncidentsActions.CreateResponsePlan,
		SSMIncidentsActions.CreateTimelineEvent,
		SSMIncidentsActions.DeleteIncidentRecord,
		SSMIncidentsActions.DeleteReplicationSet,
		SSMIncidentsActions.DeleteResponsePlan,
		SSMIncidentsActions.DeleteTimelineEvent,
		SSMIncidentsActions.StartIncident,
		SSMIncidentsActions.UpdateDeletionProtection,
		SSMIncidentsActions.UpdateIncidentRecord,
		SSMIncidentsActions.UpdateRelatedItems,
		SSMIncidentsActions.UpdateReplicationSet,
		SSMIncidentsActions.UpdateResponsePlan,
		SSMIncidentsActions.UpdateTimelineEvent,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SSMIncidentsActions.ListIncidentFindings,
		SSMIncidentsActions.ListIncidentRecords,
		SSMIncidentsActions.ListRelatedItems,
		SSMIncidentsActions.ListReplicationSets,
		SSMIncidentsActions.ListResponsePlans,
		SSMIncidentsActions.ListTimelineEvents,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SSMIncidentsActions.DeleteResourcePolicy,
		SSMIncidentsActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SSMIncidentsActions.TagResource,
		SSMIncidentsActions.UntagResource,
	];
}

/**
 * Properties for building a incident-record ARN.
 */
export interface SSMIncidentsIncidentRecordArnProps {
	/** The ResponsePlan component of the ARN. */
	readonly responsePlan: string;
	/** The IncidentRecord component of the ARN. */
	readonly incidentRecord: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a incident-record ARN.
 */
export interface SSMIncidentsIncidentRecordArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResponsePlan component. */
	readonly responsePlan: string;
	/** The IncidentRecord component. */
	readonly incidentRecord: string;
}

/**
 * Properties for building a replication-set ARN.
 */
export interface SSMIncidentsReplicationSetArnProps {
	/** The ReplicationSet component of the ARN. */
	readonly replicationSet: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a replication-set ARN.
 */
export interface SSMIncidentsReplicationSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReplicationSet component. */
	readonly replicationSet: string;
}

/**
 * Properties for building a response-plan ARN.
 */
export interface SSMIncidentsResponsePlanArnProps {
	/** The ResponsePlan component of the ARN. */
	readonly responsePlan: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a response-plan ARN.
 */
export interface SSMIncidentsResponsePlanArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResponsePlan component. */
	readonly responsePlan: string;
}

const IncidentRecordArnRegex =
	/^arn:(?<partition>[^:]+):ssm-incidents::(?<account>[^:]*):incident-record\/(?<responsePlan>[^:/?]+)\/(?<incidentRecord>[^:/?]+)$/;
const ReplicationSetArnRegex =
	/^arn:(?<partition>[^:]+):ssm-incidents::(?<account>[^:]*):replication-set\/(?<replicationSet>[^:/?]+)$/;
const ResponsePlanArnRegex =
	/^arn:(?<partition>[^:]+):ssm-incidents::(?<account>[^:]*):response-plan\/(?<responsePlan>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ssm-incidents resources.
 */
export class SSMIncidentsResources {
	/**
	 * Builds an ARN for the incident-record resource.
	 */
	static incidentRecord(props: SSMIncidentsIncidentRecordArnProps): string {
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
	static parseIncidentRecordArn(
		arn: string,
	): SSMIncidentsIncidentRecordArnComponents {
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
	static replicationSet(props: SSMIncidentsReplicationSetArnProps): string {
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
	static parseReplicationSetArn(
		arn: string,
	): SSMIncidentsReplicationSetArnComponents {
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
	static responsePlan(props: SSMIncidentsResponsePlanArnProps): string {
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
	static parseResponsePlanArn(
		arn: string,
	): SSMIncidentsResponsePlanArnComponents {
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
	static readonly BatchGetIncidentFindings: string[] = [
		"ssm-incidents:BatchGetIncidentFindings",
	];
	/** IAM actions required for the CreateReplicationSet API call. */
	static readonly CreateReplicationSet: string[] = [
		"ssm-incidents:CreateReplicationSet",
		"ssm-incidents:TagResource",
	];
	/** IAM actions required for the CreateResponsePlan API call. */
	static readonly CreateResponsePlan: string[] = [
		"ssm-incidents:CreateResponsePlan",
		"iam:PassRole",
		"ssm-incidents:TagResource",
	];
	/** IAM actions required for the CreateTimelineEvent API call. */
	static readonly CreateTimelineEvent: string[] = [
		"ssm-incidents:CreateTimelineEvent",
	];
	/** IAM actions required for the DeleteIncidentRecord API call. */
	static readonly DeleteIncidentRecord: string[] = [
		"ssm-incidents:DeleteIncidentRecord",
	];
	/** IAM actions required for the DeleteReplicationSet API call. */
	static readonly DeleteReplicationSet: string[] = [
		"ssm-incidents:DeleteReplicationSet",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"ssm-incidents:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteResponsePlan API call. */
	static readonly DeleteResponsePlan: string[] = [
		"ssm-incidents:DeleteResponsePlan",
	];
	/** IAM actions required for the DeleteTimelineEvent API call. */
	static readonly DeleteTimelineEvent: string[] = [
		"ssm-incidents:DeleteTimelineEvent",
	];
	/** IAM actions required for the GetIncidentRecord API call. */
	static readonly opGetIncidentRecord: string[] = [
		"ssm-incidents:GetIncidentRecord",
	];
	/** IAM actions required for the GetReplicationSet API call. */
	static readonly opGetReplicationSet: string[] = [
		"ssm-incidents:GetReplicationSet",
	];
	/** IAM actions required for the GetResourcePolicies API call. */
	static readonly opGetResourcePolicies: string[] = [
		"ssm-incidents:GetResourcePolicies",
	];
	/** IAM actions required for the GetResponsePlan API call. */
	static readonly opGetResponsePlan: string[] = [
		"ssm-incidents:GetResponsePlan",
	];
	/** IAM actions required for the GetTimelineEvent API call. */
	static readonly opGetTimelineEvent: string[] = [
		"ssm-incidents:GetTimelineEvent",
	];
	/** IAM actions required for the ListIncidentFindings API call. */
	static readonly ListIncidentFindings: string[] = [
		"ssm-incidents:ListIncidentFindings",
	];
	/** IAM actions required for the ListIncidentRecords API call. */
	static readonly ListIncidentRecords: string[] = [
		"ssm-incidents:ListIncidentRecords",
	];
	/** IAM actions required for the ListRelatedItems API call. */
	static readonly ListRelatedItems: string[] = [
		"ssm-incidents:ListRelatedItems",
	];
	/** IAM actions required for the ListReplicationSets API call. */
	static readonly ListReplicationSets: string[] = [
		"ssm-incidents:ListReplicationSets",
	];
	/** IAM actions required for the ListResponsePlans API call. */
	static readonly ListResponsePlans: string[] = [
		"ssm-incidents:ListResponsePlans",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"ssm-incidents:ListTagsForResource",
	];
	/** IAM actions required for the ListTimelineEvents API call. */
	static readonly ListTimelineEvents: string[] = [
		"ssm-incidents:ListTimelineEvents",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"ssm-incidents:PutResourcePolicy",
	];
	/** IAM actions required for the StartIncident API call. */
	static readonly StartIncident: string[] = ["ssm-incidents:StartIncident"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ssm-incidents:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ssm-incidents:UntagResource"];
	/** IAM actions required for the UpdateDeletionProtection API call. */
	static readonly UpdateDeletionProtection: string[] = [
		"ssm-incidents:UpdateDeletionProtection",
	];
	/** IAM actions required for the UpdateIncidentRecord API call. */
	static readonly UpdateIncidentRecord: string[] = [
		"ssm-incidents:UpdateIncidentRecord",
	];
	/** IAM actions required for the UpdateRelatedItems API call. */
	static readonly UpdateRelatedItems: string[] = [
		"ssm-incidents:UpdateRelatedItems",
	];
	/** IAM actions required for the UpdateReplicationSet API call. */
	static readonly UpdateReplicationSet: string[] = [
		"ssm-incidents:UpdateReplicationSet",
	];
	/** IAM actions required for the UpdateResponsePlan API call. */
	static readonly UpdateResponsePlan: string[] = [
		"iam:PassRole",
		"ssm-incidents:TagResource",
		"ssm-incidents:UpdateResponsePlan",
	];
	/** IAM actions required for the UpdateTimelineEvent API call. */
	static readonly UpdateTimelineEvent: string[] = [
		"ssm-incidents:UpdateTimelineEvent",
	];
}

/**
 * Condition key constants and builders for ssm-incidents.
 */
export class SSMIncidentsConditions {
	/** Condition keys applicable to the CreateReplicationSet action. */
	static readonly CreateReplicationSetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateResponsePlan action. */
	static readonly CreateResponsePlanConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateResponsePlan action. */
	static readonly UpdateResponsePlanConditionKeys: string[] = [
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
