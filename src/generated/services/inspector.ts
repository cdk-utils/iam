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
	static readonly AddAttributesToFindings = "inspector:AddAttributesToFindings";
	/** [Write] inspector:CreateAssessmentTarget */
	static readonly CreateAssessmentTarget = "inspector:CreateAssessmentTarget";
	/** [Write] inspector:CreateAssessmentTemplate */
	static readonly CreateAssessmentTemplate =
		"inspector:CreateAssessmentTemplate";
	/** [Write] inspector:CreateExclusionsPreview */
	static readonly CreateExclusionsPreview = "inspector:CreateExclusionsPreview";
	/** [Write] inspector:CreateResourceGroup */
	static readonly CreateResourceGroup = "inspector:CreateResourceGroup";
	/** [Write] inspector:DeleteAssessmentRun */
	static readonly DeleteAssessmentRun = "inspector:DeleteAssessmentRun";
	/** [Write] inspector:DeleteAssessmentTarget */
	static readonly DeleteAssessmentTarget = "inspector:DeleteAssessmentTarget";
	/** [Write] inspector:DeleteAssessmentTemplate */
	static readonly DeleteAssessmentTemplate =
		"inspector:DeleteAssessmentTemplate";
	/** [Read] inspector:DescribeAssessmentRuns */
	static readonly DescribeAssessmentRuns = "inspector:DescribeAssessmentRuns";
	/** [Read] inspector:DescribeAssessmentTargets */
	static readonly DescribeAssessmentTargets =
		"inspector:DescribeAssessmentTargets";
	/** [Read] inspector:DescribeAssessmentTemplates */
	static readonly DescribeAssessmentTemplates =
		"inspector:DescribeAssessmentTemplates";
	/** [Read] inspector:DescribeCrossAccountAccessRole */
	static readonly DescribeCrossAccountAccessRole =
		"inspector:DescribeCrossAccountAccessRole";
	/** [Read] inspector:DescribeExclusions */
	static readonly DescribeExclusions = "inspector:DescribeExclusions";
	/** [Read] inspector:DescribeFindings */
	static readonly DescribeFindings = "inspector:DescribeFindings";
	/** [Read] inspector:DescribeResourceGroups */
	static readonly DescribeResourceGroups = "inspector:DescribeResourceGroups";
	/** [Read] inspector:DescribeRulesPackages */
	static readonly DescribeRulesPackages = "inspector:DescribeRulesPackages";
	/** [Read] inspector:GetAssessmentReport */
	static readonly actionGetAssessmentReport = "inspector:GetAssessmentReport";
	/** [Read] inspector:GetExclusionsPreview */
	static readonly actionGetExclusionsPreview = "inspector:GetExclusionsPreview";
	/** [Read] inspector:GetTelemetryMetadata */
	static readonly actionGetTelemetryMetadata = "inspector:GetTelemetryMetadata";
	/** [List] inspector:ListAssessmentRunAgents */
	static readonly ListAssessmentRunAgents = "inspector:ListAssessmentRunAgents";
	/** [List] inspector:ListAssessmentRuns */
	static readonly ListAssessmentRuns = "inspector:ListAssessmentRuns";
	/** [List] inspector:ListAssessmentTargets */
	static readonly ListAssessmentTargets = "inspector:ListAssessmentTargets";
	/** [List] inspector:ListAssessmentTemplates */
	static readonly ListAssessmentTemplates = "inspector:ListAssessmentTemplates";
	/** [List] inspector:ListEventSubscriptions */
	static readonly ListEventSubscriptions = "inspector:ListEventSubscriptions";
	/** [List] inspector:ListExclusions */
	static readonly ListExclusions = "inspector:ListExclusions";
	/** [List] inspector:ListFindings */
	static readonly ListFindings = "inspector:ListFindings";
	/** [List] inspector:ListRulesPackages */
	static readonly ListRulesPackages = "inspector:ListRulesPackages";
	/** [Read] inspector:ListTagsForResource */
	static readonly ListTagsForResource = "inspector:ListTagsForResource";
	/** [Read] inspector:PreviewAgents */
	static readonly PreviewAgents = "inspector:PreviewAgents";
	/** [Write] inspector:RegisterCrossAccountAccessRole */
	static readonly RegisterCrossAccountAccessRole =
		"inspector:RegisterCrossAccountAccessRole";
	/** [Write] inspector:RemoveAttributesFromFindings */
	static readonly RemoveAttributesFromFindings =
		"inspector:RemoveAttributesFromFindings";
	/** [Tagging] inspector:SetTagsForResource */
	static readonly actionSetTagsForResource = "inspector:SetTagsForResource";
	/** [Write] inspector:StartAssessmentRun */
	static readonly StartAssessmentRun = "inspector:StartAssessmentRun";
	/** [Write] inspector:StopAssessmentRun */
	static readonly StopAssessmentRun = "inspector:StopAssessmentRun";
	/** [Write] inspector:SubscribeToEvent */
	static readonly SubscribeToEvent = "inspector:SubscribeToEvent";
	/** [Write] inspector:UnsubscribeFromEvent */
	static readonly UnsubscribeFromEvent = "inspector:UnsubscribeFromEvent";
	/** [Write] inspector:UpdateAssessmentTarget */
	static readonly UpdateAssessmentTarget = "inspector:UpdateAssessmentTarget";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		InspectorActions.DescribeAssessmentRuns,
		InspectorActions.DescribeAssessmentTargets,
		InspectorActions.DescribeAssessmentTemplates,
		InspectorActions.DescribeCrossAccountAccessRole,
		InspectorActions.DescribeExclusions,
		InspectorActions.DescribeFindings,
		InspectorActions.DescribeResourceGroups,
		InspectorActions.DescribeRulesPackages,
		InspectorActions.actionGetAssessmentReport,
		InspectorActions.actionGetExclusionsPreview,
		InspectorActions.actionGetTelemetryMetadata,
		InspectorActions.ListTagsForResource,
		InspectorActions.PreviewAgents,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		InspectorActions.AddAttributesToFindings,
		InspectorActions.CreateAssessmentTarget,
		InspectorActions.CreateAssessmentTemplate,
		InspectorActions.CreateExclusionsPreview,
		InspectorActions.CreateResourceGroup,
		InspectorActions.DeleteAssessmentRun,
		InspectorActions.DeleteAssessmentTarget,
		InspectorActions.DeleteAssessmentTemplate,
		InspectorActions.RegisterCrossAccountAccessRole,
		InspectorActions.RemoveAttributesFromFindings,
		InspectorActions.StartAssessmentRun,
		InspectorActions.StopAssessmentRun,
		InspectorActions.SubscribeToEvent,
		InspectorActions.UnsubscribeFromEvent,
		InspectorActions.UpdateAssessmentTarget,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		InspectorActions.ListAssessmentRunAgents,
		InspectorActions.ListAssessmentRuns,
		InspectorActions.ListAssessmentTargets,
		InspectorActions.ListAssessmentTemplates,
		InspectorActions.ListEventSubscriptions,
		InspectorActions.ListExclusions,
		InspectorActions.ListFindings,
		InspectorActions.ListRulesPackages,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		InspectorActions.actionSetTagsForResource,
	];
}

/**
 * API operation to required IAM actions mapping for inspector.
 */
export class InspectorOperations {
	/** IAM actions required for the AddAttributesToFindings API call. */
	static readonly AddAttributesToFindings: string[] = [
		"inspector:AddAttributesToFindings",
	];
	/** IAM actions required for the AttachAssessmentAndRulesPackage API call. */
	static readonly AttachAssessmentAndRulesPackage: string[] = [];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [];
	/** IAM actions required for the CreateAssessment API call. */
	static readonly CreateAssessment: string[] = [];
	/** IAM actions required for the CreateAssessmentTarget API call. */
	static readonly CreateAssessmentTarget: string[] = [
		"inspector:CreateAssessmentTarget",
	];
	/** IAM actions required for the CreateAssessmentTemplate API call. */
	static readonly CreateAssessmentTemplate: string[] = [
		"inspector:CreateAssessmentTemplate",
	];
	/** IAM actions required for the CreateExclusionsPreview API call. */
	static readonly CreateExclusionsPreview: string[] = [
		"inspector:CreateExclusionsPreview",
	];
	/** IAM actions required for the CreateResourceGroup API call. */
	static readonly CreateResourceGroup: string[] = [
		"inspector:CreateResourceGroup",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [];
	/** IAM actions required for the DeleteAssessment API call. */
	static readonly DeleteAssessment: string[] = [];
	/** IAM actions required for the DeleteAssessmentRun API call. */
	static readonly DeleteAssessmentRun: string[] = [
		"inspector:DeleteAssessmentRun",
	];
	/** IAM actions required for the DeleteAssessmentTarget API call. */
	static readonly DeleteAssessmentTarget: string[] = [
		"inspector:DeleteAssessmentTarget",
	];
	/** IAM actions required for the DeleteAssessmentTemplate API call. */
	static readonly DeleteAssessmentTemplate: string[] = [
		"inspector:DeleteAssessmentTemplate",
	];
	/** IAM actions required for the DeleteRun API call. */
	static readonly DeleteRun: string[] = [];
	/** IAM actions required for the DescribeApplication API call. */
	static readonly DescribeApplication: string[] = [];
	/** IAM actions required for the DescribeAssessment API call. */
	static readonly DescribeAssessment: string[] = [];
	/** IAM actions required for the DescribeAssessmentRuns API call. */
	static readonly DescribeAssessmentRuns: string[] = [
		"inspector:DescribeAssessmentRuns",
	];
	/** IAM actions required for the DescribeAssessmentTargets API call. */
	static readonly DescribeAssessmentTargets: string[] = [
		"inspector:DescribeAssessmentTargets",
	];
	/** IAM actions required for the DescribeAssessmentTemplates API call. */
	static readonly DescribeAssessmentTemplates: string[] = [
		"inspector:DescribeAssessmentTemplates",
	];
	/** IAM actions required for the DescribeCrossAccountAccessRole API call. */
	static readonly DescribeCrossAccountAccessRole: string[] = [
		"inspector:DescribeCrossAccountAccessRole",
	];
	/** IAM actions required for the DescribeExclusions API call. */
	static readonly DescribeExclusions: string[] = [
		"inspector:DescribeExclusions",
	];
	/** IAM actions required for the DescribeFinding API call. */
	static readonly DescribeFinding: string[] = [];
	/** IAM actions required for the DescribeFindings API call. */
	static readonly DescribeFindings: string[] = ["inspector:DescribeFindings"];
	/** IAM actions required for the DescribeResourceGroup API call. */
	static readonly DescribeResourceGroup: string[] = [];
	/** IAM actions required for the DescribeResourceGroups API call. */
	static readonly DescribeResourceGroups: string[] = [
		"inspector:DescribeResourceGroups",
	];
	/** IAM actions required for the DescribeRulesPackage API call. */
	static readonly DescribeRulesPackage: string[] = [];
	/** IAM actions required for the DescribeRulesPackages API call. */
	static readonly DescribeRulesPackages: string[] = [
		"inspector:DescribeRulesPackages",
	];
	/** IAM actions required for the DescribeRun API call. */
	static readonly DescribeRun: string[] = [];
	/** IAM actions required for the DetachAssessmentAndRulesPackage API call. */
	static readonly DetachAssessmentAndRulesPackage: string[] = [];
	/** IAM actions required for the GetAssessmentReport API call. */
	static readonly opGetAssessmentReport: string[] = [
		"inspector:GetAssessmentReport",
	];
	/** IAM actions required for the GetAssessmentTelemetry API call. */
	static readonly opGetAssessmentTelemetry: string[] = [];
	/** IAM actions required for the GetExclusionsPreview API call. */
	static readonly opGetExclusionsPreview: string[] = [
		"inspector:GetExclusionsPreview",
	];
	/** IAM actions required for the GetTelemetryMetadata API call. */
	static readonly opGetTelemetryMetadata: string[] = [
		"inspector:GetTelemetryMetadata",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [];
	/** IAM actions required for the ListAssessmentAgents API call. */
	static readonly ListAssessmentAgents: string[] = [];
	/** IAM actions required for the ListAssessmentRunAgents API call. */
	static readonly ListAssessmentRunAgents: string[] = [
		"inspector:ListAssessmentRunAgents",
	];
	/** IAM actions required for the ListAssessmentRuns API call. */
	static readonly ListAssessmentRuns: string[] = [
		"inspector:ListAssessmentRuns",
	];
	/** IAM actions required for the ListAssessmentTargets API call. */
	static readonly ListAssessmentTargets: string[] = [
		"inspector:ListAssessmentTargets",
	];
	/** IAM actions required for the ListAssessmentTemplates API call. */
	static readonly ListAssessmentTemplates: string[] = [
		"inspector:ListAssessmentTemplates",
	];
	/** IAM actions required for the ListAssessments API call. */
	static readonly ListAssessments: string[] = [];
	/** IAM actions required for the ListAttachedAssessments API call. */
	static readonly ListAttachedAssessments: string[] = [];
	/** IAM actions required for the ListAttachedRulesPackages API call. */
	static readonly ListAttachedRulesPackages: string[] = [];
	/** IAM actions required for the ListEventSubscriptions API call. */
	static readonly ListEventSubscriptions: string[] = [
		"inspector:ListEventSubscriptions",
	];
	/** IAM actions required for the ListExclusions API call. */
	static readonly ListExclusions: string[] = ["inspector:ListExclusions"];
	/** IAM actions required for the ListFindings API call. */
	static readonly ListFindings: string[] = ["inspector:ListFindings"];
	/** IAM actions required for the ListRulesPackages API call. */
	static readonly ListRulesPackages: string[] = ["inspector:ListRulesPackages"];
	/** IAM actions required for the ListRuns API call. */
	static readonly ListRuns: string[] = [];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"inspector:ListTagsForResource",
	];
	/** IAM actions required for the LocalizeText API call. */
	static readonly LocalizeText: string[] = [];
	/** IAM actions required for the PreviewAgents API call. */
	static readonly PreviewAgents: string[] = ["inspector:PreviewAgents"];
	/** IAM actions required for the PreviewAgentsForResourceGroup API call. */
	static readonly PreviewAgentsForResourceGroup: string[] = [];
	/** IAM actions required for the RegisterCrossAccountAccessRole API call. */
	static readonly RegisterCrossAccountAccessRole: string[] = [
		"iam:PassRole",
		"inspector:RegisterCrossAccountAccessRole",
	];
	/** IAM actions required for the RemoveAttributesFromFindings API call. */
	static readonly RemoveAttributesFromFindings: string[] = [
		"inspector:RemoveAttributesFromFindings",
	];
	/** IAM actions required for the RunAssessment API call. */
	static readonly RunAssessment: string[] = [];
	/** IAM actions required for the SetTagsForResource API call. */
	static readonly opSetTagsForResource: string[] = [
		"inspector:SetTagsForResource",
	];
	/** IAM actions required for the StartAssessmentRun API call. */
	static readonly StartAssessmentRun: string[] = [
		"inspector:StartAssessmentRun",
	];
	/** IAM actions required for the StartDataCollection API call. */
	static readonly StartDataCollection: string[] = [];
	/** IAM actions required for the StopAssessmentRun API call. */
	static readonly StopAssessmentRun: string[] = ["inspector:StopAssessmentRun"];
	/** IAM actions required for the StopDataCollection API call. */
	static readonly StopDataCollection: string[] = [];
	/** IAM actions required for the SubscribeToEvent API call. */
	static readonly SubscribeToEvent: string[] = ["inspector:SubscribeToEvent"];
	/** IAM actions required for the UnsubscribeFromEvent API call. */
	static readonly UnsubscribeFromEvent: string[] = [
		"inspector:UnsubscribeFromEvent",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [];
	/** IAM actions required for the UpdateAssessment API call. */
	static readonly UpdateAssessment: string[] = [];
	/** IAM actions required for the UpdateAssessmentTarget API call. */
	static readonly UpdateAssessmentTarget: string[] = [
		"inspector:UpdateAssessmentTarget",
	];
}
