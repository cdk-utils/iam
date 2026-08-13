// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/inspector.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the inspector service.
 */
export class InspectorActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "inspector";

	/** [Write] inspector:AddAttributesToFindings */
	static readonly ADD_ATTRIBUTES_TO_FINDINGS =
		"inspector:AddAttributesToFindings";
	/** [Write] inspector:CreateAssessmentTarget */
	static readonly CREATE_ASSESSMENT_TARGET = "inspector:CreateAssessmentTarget";
	/** [Write] inspector:CreateAssessmentTemplate */
	static readonly CREATE_ASSESSMENT_TEMPLATE =
		"inspector:CreateAssessmentTemplate";
	/** [Write] inspector:CreateExclusionsPreview */
	static readonly CREATE_EXCLUSIONS_PREVIEW =
		"inspector:CreateExclusionsPreview";
	/** [Write] inspector:CreateResourceGroup */
	static readonly CREATE_RESOURCE_GROUP = "inspector:CreateResourceGroup";
	/** [Write] inspector:DeleteAssessmentRun */
	static readonly DELETE_ASSESSMENT_RUN = "inspector:DeleteAssessmentRun";
	/** [Write] inspector:DeleteAssessmentTarget */
	static readonly DELETE_ASSESSMENT_TARGET = "inspector:DeleteAssessmentTarget";
	/** [Write] inspector:DeleteAssessmentTemplate */
	static readonly DELETE_ASSESSMENT_TEMPLATE =
		"inspector:DeleteAssessmentTemplate";
	/** [Read] inspector:DescribeAssessmentRuns */
	static readonly DESCRIBE_ASSESSMENT_RUNS = "inspector:DescribeAssessmentRuns";
	/** [Read] inspector:DescribeAssessmentTargets */
	static readonly DESCRIBE_ASSESSMENT_TARGETS =
		"inspector:DescribeAssessmentTargets";
	/** [Read] inspector:DescribeAssessmentTemplates */
	static readonly DESCRIBE_ASSESSMENT_TEMPLATES =
		"inspector:DescribeAssessmentTemplates";
	/** [Read] inspector:DescribeCrossAccountAccessRole */
	static readonly DESCRIBE_CROSS_ACCOUNT_ACCESS_ROLE =
		"inspector:DescribeCrossAccountAccessRole";
	/** [Read] inspector:DescribeExclusions */
	static readonly DESCRIBE_EXCLUSIONS = "inspector:DescribeExclusions";
	/** [Read] inspector:DescribeFindings */
	static readonly DESCRIBE_FINDINGS = "inspector:DescribeFindings";
	/** [Read] inspector:DescribeResourceGroups */
	static readonly DESCRIBE_RESOURCE_GROUPS = "inspector:DescribeResourceGroups";
	/** [Read] inspector:DescribeRulesPackages */
	static readonly DESCRIBE_RULES_PACKAGES = "inspector:DescribeRulesPackages";
	/** [Read] inspector:GetAssessmentReport */
	static readonly GET_ASSESSMENT_REPORT = "inspector:GetAssessmentReport";
	/** [Read] inspector:GetExclusionsPreview */
	static readonly GET_EXCLUSIONS_PREVIEW = "inspector:GetExclusionsPreview";
	/** [Read] inspector:GetTelemetryMetadata */
	static readonly GET_TELEMETRY_METADATA = "inspector:GetTelemetryMetadata";
	/** [List] inspector:ListAssessmentRunAgents */
	static readonly LIST_ASSESSMENT_RUN_AGENTS =
		"inspector:ListAssessmentRunAgents";
	/** [List] inspector:ListAssessmentRuns */
	static readonly LIST_ASSESSMENT_RUNS = "inspector:ListAssessmentRuns";
	/** [List] inspector:ListAssessmentTargets */
	static readonly LIST_ASSESSMENT_TARGETS = "inspector:ListAssessmentTargets";
	/** [List] inspector:ListAssessmentTemplates */
	static readonly LIST_ASSESSMENT_TEMPLATES =
		"inspector:ListAssessmentTemplates";
	/** [List] inspector:ListEventSubscriptions */
	static readonly LIST_EVENT_SUBSCRIPTIONS = "inspector:ListEventSubscriptions";
	/** [List] inspector:ListExclusions */
	static readonly LIST_EXCLUSIONS = "inspector:ListExclusions";
	/** [List] inspector:ListFindings */
	static readonly LIST_FINDINGS = "inspector:ListFindings";
	/** [List] inspector:ListRulesPackages */
	static readonly LIST_RULES_PACKAGES = "inspector:ListRulesPackages";
	/** [Read] inspector:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "inspector:ListTagsForResource";
	/** [Read] inspector:PreviewAgents */
	static readonly PREVIEW_AGENTS = "inspector:PreviewAgents";
	/** [Write] inspector:RegisterCrossAccountAccessRole */
	static readonly REGISTER_CROSS_ACCOUNT_ACCESS_ROLE =
		"inspector:RegisterCrossAccountAccessRole";
	/** [Write] inspector:RemoveAttributesFromFindings */
	static readonly REMOVE_ATTRIBUTES_FROM_FINDINGS =
		"inspector:RemoveAttributesFromFindings";
	/** [Tagging] inspector:SetTagsForResource */
	static readonly SET_TAGS_FOR_RESOURCE = "inspector:SetTagsForResource";
	/** [Write] inspector:StartAssessmentRun */
	static readonly START_ASSESSMENT_RUN = "inspector:StartAssessmentRun";
	/** [Write] inspector:StopAssessmentRun */
	static readonly STOP_ASSESSMENT_RUN = "inspector:StopAssessmentRun";
	/** [Write] inspector:SubscribeToEvent */
	static readonly SUBSCRIBE_TO_EVENT = "inspector:SubscribeToEvent";
	/** [Write] inspector:UnsubscribeFromEvent */
	static readonly UNSUBSCRIBE_FROM_EVENT = "inspector:UnsubscribeFromEvent";
	/** [Write] inspector:UpdateAssessmentTarget */
	static readonly UPDATE_ASSESSMENT_TARGET = "inspector:UpdateAssessmentTarget";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		InspectorActions.DESCRIBE_ASSESSMENT_RUNS,
		InspectorActions.DESCRIBE_ASSESSMENT_TARGETS,
		InspectorActions.DESCRIBE_ASSESSMENT_TEMPLATES,
		InspectorActions.DESCRIBE_CROSS_ACCOUNT_ACCESS_ROLE,
		InspectorActions.DESCRIBE_EXCLUSIONS,
		InspectorActions.DESCRIBE_FINDINGS,
		InspectorActions.DESCRIBE_RESOURCE_GROUPS,
		InspectorActions.DESCRIBE_RULES_PACKAGES,
		InspectorActions.GET_ASSESSMENT_REPORT,
		InspectorActions.GET_EXCLUSIONS_PREVIEW,
		InspectorActions.GET_TELEMETRY_METADATA,
		InspectorActions.LIST_TAGS_FOR_RESOURCE,
		InspectorActions.PREVIEW_AGENTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		InspectorActions.ADD_ATTRIBUTES_TO_FINDINGS,
		InspectorActions.CREATE_ASSESSMENT_TARGET,
		InspectorActions.CREATE_ASSESSMENT_TEMPLATE,
		InspectorActions.CREATE_EXCLUSIONS_PREVIEW,
		InspectorActions.CREATE_RESOURCE_GROUP,
		InspectorActions.DELETE_ASSESSMENT_RUN,
		InspectorActions.DELETE_ASSESSMENT_TARGET,
		InspectorActions.DELETE_ASSESSMENT_TEMPLATE,
		InspectorActions.REGISTER_CROSS_ACCOUNT_ACCESS_ROLE,
		InspectorActions.REMOVE_ATTRIBUTES_FROM_FINDINGS,
		InspectorActions.START_ASSESSMENT_RUN,
		InspectorActions.STOP_ASSESSMENT_RUN,
		InspectorActions.SUBSCRIBE_TO_EVENT,
		InspectorActions.UNSUBSCRIBE_FROM_EVENT,
		InspectorActions.UPDATE_ASSESSMENT_TARGET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		InspectorActions.LIST_ASSESSMENT_RUN_AGENTS,
		InspectorActions.LIST_ASSESSMENT_RUNS,
		InspectorActions.LIST_ASSESSMENT_TARGETS,
		InspectorActions.LIST_ASSESSMENT_TEMPLATES,
		InspectorActions.LIST_EVENT_SUBSCRIPTIONS,
		InspectorActions.LIST_EXCLUSIONS,
		InspectorActions.LIST_FINDINGS,
		InspectorActions.LIST_RULES_PACKAGES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		InspectorActions.SET_TAGS_FOR_RESOURCE,
	];
}

/**
 * API operation to required IAM actions mapping for inspector.
 */
export class InspectorOperations {
	/** IAM actions required for the AddAttributesToFindings API call. */
	static readonly ADD_ATTRIBUTES_TO_FINDINGS: string[] = [
		"inspector:AddAttributesToFindings",
	];
	/** IAM actions required for the AttachAssessmentAndRulesPackage API call. */
	static readonly ATTACH_ASSESSMENT_AND_RULES_PACKAGE: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [];
	/** IAM actions required for the CreateAssessment API call. */
	static readonly CREATE_ASSESSMENT: string[] = [];
	/** IAM actions required for the CreateAssessmentTarget API call. */
	static readonly CREATE_ASSESSMENT_TARGET: string[] = [
		"inspector:CreateAssessmentTarget",
	];
	/** IAM actions required for the CreateAssessmentTemplate API call. */
	static readonly CREATE_ASSESSMENT_TEMPLATE: string[] = [
		"inspector:CreateAssessmentTemplate",
	];
	/** IAM actions required for the CreateExclusionsPreview API call. */
	static readonly CREATE_EXCLUSIONS_PREVIEW: string[] = [
		"inspector:CreateExclusionsPreview",
	];
	/** IAM actions required for the CreateResourceGroup API call. */
	static readonly CREATE_RESOURCE_GROUP: string[] = [
		"inspector:CreateResourceGroup",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [];
	/** IAM actions required for the DeleteAssessment API call. */
	static readonly DELETE_ASSESSMENT: string[] = [];
	/** IAM actions required for the DeleteAssessmentRun API call. */
	static readonly DELETE_ASSESSMENT_RUN: string[] = [
		"inspector:DeleteAssessmentRun",
	];
	/** IAM actions required for the DeleteAssessmentTarget API call. */
	static readonly DELETE_ASSESSMENT_TARGET: string[] = [
		"inspector:DeleteAssessmentTarget",
	];
	/** IAM actions required for the DeleteAssessmentTemplate API call. */
	static readonly DELETE_ASSESSMENT_TEMPLATE: string[] = [
		"inspector:DeleteAssessmentTemplate",
	];
	/** IAM actions required for the DeleteRun API call. */
	static readonly DELETE_RUN: string[] = [];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DESCRIBE_APPLICATION: string[] = [];
	/** IAM actions required for the DescribeAssessment API call. */
	static readonly DESCRIBE_ASSESSMENT: string[] = [];
	/** IAM actions required for the DescribeAssessmentRuns API call. */
	static readonly DESCRIBE_ASSESSMENT_RUNS: string[] = [
		"inspector:DescribeAssessmentRuns",
	];
	/** IAM actions required for the DescribeAssessmentTargets API call. */
	static readonly DESCRIBE_ASSESSMENT_TARGETS: string[] = [
		"inspector:DescribeAssessmentTargets",
	];
	/** IAM actions required for the DescribeAssessmentTemplates API call. */
	static readonly DESCRIBE_ASSESSMENT_TEMPLATES: string[] = [
		"inspector:DescribeAssessmentTemplates",
	];
	/** IAM actions required for the DescribeCrossAccountAccessRole API call. */
	static readonly DESCRIBE_CROSS_ACCOUNT_ACCESS_ROLE: string[] = [
		"inspector:DescribeCrossAccountAccessRole",
	];
	/** IAM actions required for the DescribeExclusions API call. */
	static readonly DESCRIBE_EXCLUSIONS: string[] = [
		"inspector:DescribeExclusions",
	];
	/** IAM actions required for the DescribeFinding API call. */
	static readonly DESCRIBE_FINDING: string[] = [];
	/** IAM actions required for the DescribeFindings API call. */
	static readonly DESCRIBE_FINDINGS: string[] = ["inspector:DescribeFindings"];
	/** IAM actions required for the DescribeResourceGroup API call. */
	static readonly DESCRIBE_RESOURCE_GROUP: string[] = [];
	/** IAM actions required for the DescribeResourceGroups API call. */
	static readonly DESCRIBE_RESOURCE_GROUPS: string[] = [
		"inspector:DescribeResourceGroups",
	];
	/** IAM actions required for the DescribeRulesPackage API call. */
	static readonly DESCRIBE_RULES_PACKAGE: string[] = [];
	/** IAM actions required for the DescribeRulesPackages API call. */
	static readonly DESCRIBE_RULES_PACKAGES: string[] = [
		"inspector:DescribeRulesPackages",
	];
	/** IAM actions required for the DescribeRun API call. */
	static readonly DESCRIBE_RUN: string[] = [];
	/** IAM actions required for the DetachAssessmentAndRulesPackage API call. */
	static readonly DETACH_ASSESSMENT_AND_RULES_PACKAGE: string[] = [];
	/** IAM actions required for the GetAssessmentReport API call. */
	static readonly GET_ASSESSMENT_REPORT: string[] = [
		"inspector:GetAssessmentReport",
	];
	/** IAM actions required for the GetAssessmentTelemetry API call. */
	static readonly GET_ASSESSMENT_TELEMETRY: string[] = [];
	/** IAM actions required for the GetExclusionsPreview API call. */
	static readonly GET_EXCLUSIONS_PREVIEW: string[] = [
		"inspector:GetExclusionsPreview",
	];
	/** IAM actions required for the GetTelemetryMetadata API call. */
	static readonly GET_TELEMETRY_METADATA: string[] = [
		"inspector:GetTelemetryMetadata",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [];
	/** IAM actions required for the ListAssessmentAgents API call. */
	static readonly LIST_ASSESSMENT_AGENTS: string[] = [];
	/** IAM actions required for the ListAssessmentRunAgents API call. */
	static readonly LIST_ASSESSMENT_RUN_AGENTS: string[] = [
		"inspector:ListAssessmentRunAgents",
	];
	/** IAM actions required for the ListAssessmentRuns API call. */
	static readonly LIST_ASSESSMENT_RUNS: string[] = [
		"inspector:ListAssessmentRuns",
	];
	/** IAM actions required for the ListAssessmentTargets API call. */
	static readonly LIST_ASSESSMENT_TARGETS: string[] = [
		"inspector:ListAssessmentTargets",
	];
	/** IAM actions required for the ListAssessmentTemplates API call. */
	static readonly LIST_ASSESSMENT_TEMPLATES: string[] = [
		"inspector:ListAssessmentTemplates",
	];
	/** IAM actions required for the ListAssessments API call. */
	static readonly LIST_ASSESSMENTS: string[] = [];
	/** IAM actions required for the ListAttachedAssessments API call. */
	static readonly LIST_ATTACHED_ASSESSMENTS: string[] = [];
	/** IAM actions required for the ListAttachedRulesPackages API call. */
	static readonly LIST_ATTACHED_RULES_PACKAGES: string[] = [];
	/** IAM actions required for the ListEventSubscriptions API call. */
	static readonly LIST_EVENT_SUBSCRIPTIONS: string[] = [
		"inspector:ListEventSubscriptions",
	];
	/** IAM actions required for the ListExclusions API call. */
	static readonly LIST_EXCLUSIONS: string[] = ["inspector:ListExclusions"];
	/** IAM actions required for the ListFindings API call. */
	static readonly LIST_FINDINGS: string[] = ["inspector:ListFindings"];
	/** IAM actions required for the ListRulesPackages API call. */
	static readonly LIST_RULES_PACKAGES: string[] = [
		"inspector:ListRulesPackages",
	];
	/** IAM actions required for the ListRuns API call. */
	static readonly LIST_RUNS: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"inspector:ListTagsForResource",
	];
	/** IAM actions required for the LocalizeText API call. */
	static readonly LOCALIZE_TEXT: string[] = [];
	/** IAM actions required for the PreviewAgents API call. */
	static readonly PREVIEW_AGENTS: string[] = ["inspector:PreviewAgents"];
	/** IAM actions required for the PreviewAgentsForResourceGroup API call. */
	static readonly PREVIEW_AGENTS_FOR_RESOURCE_GROUP: string[] = [];
	/** IAM actions required for the RegisterCrossAccountAccessRole API call. */
	static readonly REGISTER_CROSS_ACCOUNT_ACCESS_ROLE: string[] = [
		"iam:PassRole",
		"inspector:RegisterCrossAccountAccessRole",
	];
	/** IAM actions required for the RemoveAttributesFromFindings API call. */
	static readonly REMOVE_ATTRIBUTES_FROM_FINDINGS: string[] = [
		"inspector:RemoveAttributesFromFindings",
	];
	/** IAM actions required for the RunAssessment API call. */
	static readonly RUN_ASSESSMENT: string[] = [];
	/** IAM actions required for the SetTagsForResource API call. */
	static readonly SET_TAGS_FOR_RESOURCE: string[] = [
		"inspector:SetTagsForResource",
	];
	/** IAM actions required for the StartAssessmentRun API call. */
	static readonly START_ASSESSMENT_RUN: string[] = [
		"inspector:StartAssessmentRun",
	];
	/** IAM actions required for the StartDataCollection API call. */
	static readonly START_DATA_COLLECTION: string[] = [];
	/** IAM actions required for the StopAssessmentRun API call. */
	static readonly STOP_ASSESSMENT_RUN: string[] = [
		"inspector:StopAssessmentRun",
	];
	/** IAM actions required for the StopDataCollection API call. */
	static readonly STOP_DATA_COLLECTION: string[] = [];
	/** IAM actions required for the SubscribeToEvent API call. */
	static readonly SUBSCRIBE_TO_EVENT: string[] = ["inspector:SubscribeToEvent"];
	/** IAM actions required for the UnsubscribeFromEvent API call. */
	static readonly UNSUBSCRIBE_FROM_EVENT: string[] = [
		"inspector:UnsubscribeFromEvent",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [];
	/** IAM actions required for the UpdateAssessment API call. */
	static readonly UPDATE_ASSESSMENT: string[] = [];
	/** IAM actions required for the UpdateAssessmentTarget API call. */
	static readonly UPDATE_ASSESSMENT_TARGET: string[] = [
		"inspector:UpdateAssessmentTarget",
	];
}
