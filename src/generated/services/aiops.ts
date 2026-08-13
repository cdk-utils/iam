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
	static readonly CreateInvestigation = "aiops:CreateInvestigation";
	/** [Write] aiops:CreateInvestigationEvent */
	static readonly CreateInvestigationEvent = "aiops:CreateInvestigationEvent";
	/** [Write] aiops:CreateInvestigationGroup */
	static readonly CreateInvestigationGroup = "aiops:CreateInvestigationGroup";
	/** [Write] aiops:CreateInvestigationResource */
	static readonly CreateInvestigationResource =
		"aiops:CreateInvestigationResource";
	/** [Write] aiops:CreateReport */
	static readonly CreateReport = "aiops:CreateReport";
	/** [Write] aiops:DeleteInvestigation */
	static readonly DeleteInvestigation = "aiops:DeleteInvestigation";
	/** [Write] aiops:DeleteInvestigationGroup */
	static readonly DeleteInvestigationGroup = "aiops:DeleteInvestigationGroup";
	/** [Write] aiops:DeleteInvestigationGroupPolicy */
	static readonly DeleteInvestigationGroupPolicy =
		"aiops:DeleteInvestigationGroupPolicy";
	/** [Write] aiops:GenerateReport */
	static readonly GenerateReport = "aiops:GenerateReport";
	/** [List] aiops:GetEphemeralInvestigationResults */
	static readonly actionGetEphemeralInvestigationResults =
		"aiops:GetEphemeralInvestigationResults";
	/** [Read] aiops:GetFact */
	static readonly actionGetFact = "aiops:GetFact";
	/** [Read] aiops:GetFactVersions */
	static readonly actionGetFactVersions = "aiops:GetFactVersions";
	/** [Read] aiops:GetInvestigation */
	static readonly actionGetInvestigation = "aiops:GetInvestigation";
	/** [Read] aiops:GetInvestigationEvent */
	static readonly actionGetInvestigationEvent = "aiops:GetInvestigationEvent";
	/** [Read] aiops:GetInvestigationGroup */
	static readonly actionGetInvestigationGroup = "aiops:GetInvestigationGroup";
	/** [Read] aiops:GetInvestigationGroupPolicy */
	static readonly actionGetInvestigationGroupPolicy =
		"aiops:GetInvestigationGroupPolicy";
	/** [Read] aiops:GetInvestigationResource */
	static readonly actionGetInvestigationResource =
		"aiops:GetInvestigationResource";
	/** [Read] aiops:GetReport */
	static readonly actionGetReport = "aiops:GetReport";
	/** [List] aiops:ListFacts */
	static readonly ListFacts = "aiops:ListFacts";
	/** [List] aiops:ListInvestigationEvents */
	static readonly ListInvestigationEvents = "aiops:ListInvestigationEvents";
	/** [List] aiops:ListInvestigationGroups */
	static readonly ListInvestigationGroups = "aiops:ListInvestigationGroups";
	/** [List] aiops:ListInvestigations */
	static readonly ListInvestigations = "aiops:ListInvestigations";
	/** [List] aiops:ListReports */
	static readonly ListReports = "aiops:ListReports";
	/** [List] aiops:ListTagsForResource */
	static readonly ListTagsForResource = "aiops:ListTagsForResource";
	/** [Write] aiops:PutFact */
	static readonly PutFact = "aiops:PutFact";
	/** [Write] aiops:PutInvestigationGroupPolicy */
	static readonly PutInvestigationGroupPolicy =
		"aiops:PutInvestigationGroupPolicy";
	/** [Tagging] aiops:TagResource */
	static readonly TagResource = "aiops:TagResource";
	/** [Tagging] aiops:UntagResource */
	static readonly UntagResource = "aiops:UntagResource";
	/** [Write] aiops:UpdateInvestigation */
	static readonly UpdateInvestigation = "aiops:UpdateInvestigation";
	/** [Write] aiops:UpdateInvestigationEvent */
	static readonly UpdateInvestigationEvent = "aiops:UpdateInvestigationEvent";
	/** [Write] aiops:UpdateInvestigationGroup */
	static readonly UpdateInvestigationGroup = "aiops:UpdateInvestigationGroup";
	/** [Write] aiops:UpdateReport */
	static readonly UpdateReport = "aiops:UpdateReport";
	/** [Read] aiops:ValidateInvestigationGroup */
	static readonly ValidateInvestigationGroup =
		"aiops:ValidateInvestigationGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AiopsActions.actionGetFact,
		AiopsActions.actionGetFactVersions,
		AiopsActions.actionGetInvestigation,
		AiopsActions.actionGetInvestigationEvent,
		AiopsActions.actionGetInvestigationGroup,
		AiopsActions.actionGetInvestigationGroupPolicy,
		AiopsActions.actionGetInvestigationResource,
		AiopsActions.actionGetReport,
		AiopsActions.ValidateInvestigationGroup,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AiopsActions.CreateInvestigation,
		AiopsActions.CreateInvestigationEvent,
		AiopsActions.CreateInvestigationGroup,
		AiopsActions.CreateInvestigationResource,
		AiopsActions.CreateReport,
		AiopsActions.DeleteInvestigation,
		AiopsActions.DeleteInvestigationGroup,
		AiopsActions.DeleteInvestigationGroupPolicy,
		AiopsActions.GenerateReport,
		AiopsActions.PutFact,
		AiopsActions.PutInvestigationGroupPolicy,
		AiopsActions.UpdateInvestigation,
		AiopsActions.UpdateInvestigationEvent,
		AiopsActions.UpdateInvestigationGroup,
		AiopsActions.UpdateReport,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AiopsActions.actionGetEphemeralInvestigationResults,
		AiopsActions.ListFacts,
		AiopsActions.ListInvestigationEvents,
		AiopsActions.ListInvestigationGroups,
		AiopsActions.ListInvestigations,
		AiopsActions.ListReports,
		AiopsActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AiopsActions.TagResource,
		AiopsActions.UntagResource,
	];
}

/**
 * Properties for building a investigation-group ARN.
 */
export interface AiopsInvestigationGroupArnProps {
	/** The InvestigationGroupId component of the ARN. */
	readonly investigationGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a investigation-group ARN.
 */
export interface AiopsInvestigationGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InvestigationGroupId component. */
	readonly investigationGroupId: string;
}

const InvestigationGroupArnRegex =
	/^arn:(?<partition>[^:]+):aiops:(?<region>[^:]*):(?<account>[^:]*):investigation-group\/(?<investigationGroupId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for aiops resources.
 */
export class AiopsResources {
	/**
	 * Builds an ARN for the investigation-group resource.
	 */
	static investigationGroup(props: AiopsInvestigationGroupArnProps): string {
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
	static parseInvestigationGroupArn(
		arn: string,
	): AiopsInvestigationGroupArnComponents {
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
	static readonly CreateInvestigationGroup: string[] = [
		"aiops:CreateInvestigationGroup",
		"iam:PassRole",
		"aiops:TagResource",
	];
	/** IAM actions required for the DeleteInvestigationGroup API call. */
	static readonly DeleteInvestigationGroup: string[] = [
		"aiops:DeleteInvestigationGroup",
	];
	/** IAM actions required for the DeleteInvestigationGroupPolicy API call. */
	static readonly DeleteInvestigationGroupPolicy: string[] = [
		"aiops:DeleteInvestigationGroupPolicy",
	];
	/** IAM actions required for the GetInvestigationGroup API call. */
	static readonly opGetInvestigationGroup: string[] = [
		"aiops:GetInvestigationGroup",
	];
	/** IAM actions required for the GetInvestigationGroupPolicy API call. */
	static readonly opGetInvestigationGroupPolicy: string[] = [
		"aiops:GetInvestigationGroupPolicy",
	];
	/** IAM actions required for the ListInvestigationGroups API call. */
	static readonly ListInvestigationGroups: string[] = [
		"aiops:ListInvestigationGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["aiops:ListTagsForResource"];
	/** IAM actions required for the PutInvestigationGroupPolicy API call. */
	static readonly PutInvestigationGroupPolicy: string[] = [
		"aiops:PutInvestigationGroupPolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["aiops:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["aiops:UntagResource"];
	/** IAM actions required for the UpdateInvestigationGroup API call. */
	static readonly UpdateInvestigationGroup: string[] = [
		"iam:PassRole",
		"aiops:UpdateInvestigationGroup",
	];
}

/**
 * Condition key constants and builders for aiops.
 */
export class AiopsConditions {
	/** Condition keys applicable to the CreateInvestigationGroup action. */
	static readonly CreateInvestigationGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
