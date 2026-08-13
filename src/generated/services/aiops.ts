// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/aiops.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the aiops service.
 */
export class AiopsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "aiops";

	/** [Write] aiops:CreateInvestigation */
	static readonly CREATE_INVESTIGATION = "aiops:CreateInvestigation";
	/** [Write] aiops:CreateInvestigationEvent */
	static readonly CREATE_INVESTIGATION_EVENT = "aiops:CreateInvestigationEvent";
	/** [Write] aiops:CreateInvestigationGroup */
	static readonly CREATE_INVESTIGATION_GROUP = "aiops:CreateInvestigationGroup";
	/** [Write] aiops:CreateInvestigationResource */
	static readonly CREATE_INVESTIGATION_RESOURCE =
		"aiops:CreateInvestigationResource";
	/** [Write] aiops:CreateReport */
	static readonly CREATE_REPORT = "aiops:CreateReport";
	/** [Write] aiops:DeleteInvestigation */
	static readonly DELETE_INVESTIGATION = "aiops:DeleteInvestigation";
	/** [Write] aiops:DeleteInvestigationGroup */
	static readonly DELETE_INVESTIGATION_GROUP = "aiops:DeleteInvestigationGroup";
	/** [Write] aiops:DeleteInvestigationGroupPolicy */
	static readonly DELETE_INVESTIGATION_GROUP_POLICY =
		"aiops:DeleteInvestigationGroupPolicy";
	/** [Write] aiops:GenerateReport */
	static readonly GENERATE_REPORT = "aiops:GenerateReport";
	/** [List] aiops:GetEphemeralInvestigationResults */
	static readonly GET_EPHEMERAL_INVESTIGATION_RESULTS =
		"aiops:GetEphemeralInvestigationResults";
	/** [Read] aiops:GetFact */
	static readonly GET_FACT = "aiops:GetFact";
	/** [Read] aiops:GetFactVersions */
	static readonly GET_FACT_VERSIONS = "aiops:GetFactVersions";
	/** [Read] aiops:GetInvestigation */
	static readonly GET_INVESTIGATION = "aiops:GetInvestigation";
	/** [Read] aiops:GetInvestigationEvent */
	static readonly GET_INVESTIGATION_EVENT = "aiops:GetInvestigationEvent";
	/** [Read] aiops:GetInvestigationGroup */
	static readonly GET_INVESTIGATION_GROUP = "aiops:GetInvestigationGroup";
	/** [Read] aiops:GetInvestigationGroupPolicy */
	static readonly GET_INVESTIGATION_GROUP_POLICY =
		"aiops:GetInvestigationGroupPolicy";
	/** [Read] aiops:GetInvestigationResource */
	static readonly GET_INVESTIGATION_RESOURCE = "aiops:GetInvestigationResource";
	/** [Read] aiops:GetReport */
	static readonly GET_REPORT = "aiops:GetReport";
	/** [List] aiops:ListFacts */
	static readonly LIST_FACTS = "aiops:ListFacts";
	/** [List] aiops:ListInvestigationEvents */
	static readonly LIST_INVESTIGATION_EVENTS = "aiops:ListInvestigationEvents";
	/** [List] aiops:ListInvestigationGroups */
	static readonly LIST_INVESTIGATION_GROUPS = "aiops:ListInvestigationGroups";
	/** [List] aiops:ListInvestigations */
	static readonly LIST_INVESTIGATIONS = "aiops:ListInvestigations";
	/** [List] aiops:ListReports */
	static readonly LIST_REPORTS = "aiops:ListReports";
	/** [List] aiops:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "aiops:ListTagsForResource";
	/** [Write] aiops:PutFact */
	static readonly PUT_FACT = "aiops:PutFact";
	/** [Write] aiops:PutInvestigationGroupPolicy */
	static readonly PUT_INVESTIGATION_GROUP_POLICY =
		"aiops:PutInvestigationGroupPolicy";
	/** [Tagging] aiops:TagResource */
	static readonly TAG_RESOURCE = "aiops:TagResource";
	/** [Tagging] aiops:UntagResource */
	static readonly UNTAG_RESOURCE = "aiops:UntagResource";
	/** [Write] aiops:UpdateInvestigation */
	static readonly UPDATE_INVESTIGATION = "aiops:UpdateInvestigation";
	/** [Write] aiops:UpdateInvestigationEvent */
	static readonly UPDATE_INVESTIGATION_EVENT = "aiops:UpdateInvestigationEvent";
	/** [Write] aiops:UpdateInvestigationGroup */
	static readonly UPDATE_INVESTIGATION_GROUP = "aiops:UpdateInvestigationGroup";
	/** [Write] aiops:UpdateReport */
	static readonly UPDATE_REPORT = "aiops:UpdateReport";
	/** [Read] aiops:ValidateInvestigationGroup */
	static readonly VALIDATE_INVESTIGATION_GROUP =
		"aiops:ValidateInvestigationGroup";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AiopsActions.GET_FACT,
		AiopsActions.GET_FACT_VERSIONS,
		AiopsActions.GET_INVESTIGATION,
		AiopsActions.GET_INVESTIGATION_EVENT,
		AiopsActions.GET_INVESTIGATION_GROUP,
		AiopsActions.GET_INVESTIGATION_GROUP_POLICY,
		AiopsActions.GET_INVESTIGATION_RESOURCE,
		AiopsActions.GET_REPORT,
		AiopsActions.VALIDATE_INVESTIGATION_GROUP,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AiopsActions.CREATE_INVESTIGATION,
		AiopsActions.CREATE_INVESTIGATION_EVENT,
		AiopsActions.CREATE_INVESTIGATION_GROUP,
		AiopsActions.CREATE_INVESTIGATION_RESOURCE,
		AiopsActions.CREATE_REPORT,
		AiopsActions.DELETE_INVESTIGATION,
		AiopsActions.DELETE_INVESTIGATION_GROUP,
		AiopsActions.DELETE_INVESTIGATION_GROUP_POLICY,
		AiopsActions.GENERATE_REPORT,
		AiopsActions.PUT_FACT,
		AiopsActions.PUT_INVESTIGATION_GROUP_POLICY,
		AiopsActions.UPDATE_INVESTIGATION,
		AiopsActions.UPDATE_INVESTIGATION_EVENT,
		AiopsActions.UPDATE_INVESTIGATION_GROUP,
		AiopsActions.UPDATE_REPORT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AiopsActions.GET_EPHEMERAL_INVESTIGATION_RESULTS,
		AiopsActions.LIST_FACTS,
		AiopsActions.LIST_INVESTIGATION_EVENTS,
		AiopsActions.LIST_INVESTIGATION_GROUPS,
		AiopsActions.LIST_INVESTIGATIONS,
		AiopsActions.LIST_REPORTS,
		AiopsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AiopsActions.TAG_RESOURCE,
		AiopsActions.UNTAG_RESOURCE,
	];
}

const InvestigationGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):aiops:(?<region>[^:]*):(?<account>[^:]*):investigation-group/(?<investigationGroupId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for aiops resources.
 */
export class AiopsResources {
	/**
	 * Builds an ARN for the investigation-group resource.
	 */
	static investigationGroup(props: {
		/** The InvestigationGroupId component of the ARN. */
		readonly investigationGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:aiops:${props.region ?? "*"}:${props.account ?? "*"}:investigation-group/${props.investigationGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the investigation-group resource.
	 */
	static isValidInvestigationGroupArn(arn: string): boolean {
		return InvestigationGroupArnRegex.test(arn);
	}

	/**
	 * Parses a investigation-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInvestigationGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		investigationGroupId: string;
	} {
		const match = InvestigationGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid investigation-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			investigationGroupId: match.groups!.investigationGroupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for aiops.
 */
export class AiopsOperations {
	/** IAM actions required for the CreateInvestigationGroup API call. */
	static readonly CREATE_INVESTIGATION_GROUP: string[] = [
		"aiops:CreateInvestigationGroup",
		"iam:PassRole",
		"aiops:TagResource",
	];
	/** IAM actions required for the DeleteInvestigationGroup API call. */
	static readonly DELETE_INVESTIGATION_GROUP: string[] = [
		"aiops:DeleteInvestigationGroup",
	];
	/** IAM actions required for the DeleteInvestigationGroupPolicy API call. */
	static readonly DELETE_INVESTIGATION_GROUP_POLICY: string[] = [
		"aiops:DeleteInvestigationGroupPolicy",
	];
	/** IAM actions required for the GetInvestigationGroup API call. */
	static readonly GET_INVESTIGATION_GROUP: string[] = [
		"aiops:GetInvestigationGroup",
	];
	/** IAM actions required for the GetInvestigationGroupPolicy API call. */
	static readonly GET_INVESTIGATION_GROUP_POLICY: string[] = [
		"aiops:GetInvestigationGroupPolicy",
	];
	/** IAM actions required for the ListInvestigationGroups API call. */
	static readonly LIST_INVESTIGATION_GROUPS: string[] = [
		"aiops:ListInvestigationGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"aiops:ListTagsForResource",
	];
	/** IAM actions required for the PutInvestigationGroupPolicy API call. */
	static readonly PUT_INVESTIGATION_GROUP_POLICY: string[] = [
		"aiops:PutInvestigationGroupPolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["aiops:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["aiops:UntagResource"];
	/** IAM actions required for the UpdateInvestigationGroup API call. */
	static readonly UPDATE_INVESTIGATION_GROUP: string[] = [
		"iam:PassRole",
		"aiops:UpdateInvestigationGroup",
	];
}

/**
 * Condition key constants and builders for aiops.
 */
export class AiopsConditions {
	/** Condition keys applicable to the CreateInvestigationGroup action. */
	static readonly CREATE_INVESTIGATION_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
