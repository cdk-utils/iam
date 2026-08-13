// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/detective.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the detective service.
 */
export class DetectiveActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "detective";

	/** [Write] detective:AcceptInvitation */
	static readonly AcceptInvitation = "detective:AcceptInvitation";
	/** [Read] detective:BatchGetGraphMemberDatasources */
	static readonly BatchGetGraphMemberDatasources =
		"detective:BatchGetGraphMemberDatasources";
	/** [Read] detective:BatchGetMembershipDatasources */
	static readonly BatchGetMembershipDatasources =
		"detective:BatchGetMembershipDatasources";
	/** [Write] detective:CreateGraph */
	static readonly CreateGraph = "detective:CreateGraph";
	/** [Write] detective:CreateMembers */
	static readonly CreateMembers = "detective:CreateMembers";
	/** [Write] detective:DeleteGraph */
	static readonly DeleteGraph = "detective:DeleteGraph";
	/** [Write] detective:DeleteMembers */
	static readonly DeleteMembers = "detective:DeleteMembers";
	/** [Read] detective:DescribeOrganizationConfiguration */
	static readonly DescribeOrganizationConfiguration =
		"detective:DescribeOrganizationConfiguration";
	/** [Write] detective:DisableOrganizationAdminAccount */
	static readonly DisableOrganizationAdminAccount =
		"detective:DisableOrganizationAdminAccount";
	/** [Write] detective:DisassociateMembership */
	static readonly DisassociateMembership = "detective:DisassociateMembership";
	/** [Write] detective:EnableOrganizationAdminAccount */
	static readonly EnableOrganizationAdminAccount =
		"detective:EnableOrganizationAdminAccount";
	/** [Read] detective:GetFreeTrialEligibility */
	static readonly actionGetFreeTrialEligibility =
		"detective:GetFreeTrialEligibility";
	/** [Read] detective:GetGraphIngestState */
	static readonly actionGetGraphIngestState = "detective:GetGraphIngestState";
	/** [Read] detective:GetInvestigation */
	static readonly actionGetInvestigation = "detective:GetInvestigation";
	/** [Read] detective:GetMembers */
	static readonly actionGetMembers = "detective:GetMembers";
	/** [Read] detective:GetPricingInformation */
	static readonly actionGetPricingInformation =
		"detective:GetPricingInformation";
	/** [Read] detective:GetUsageInformation */
	static readonly actionGetUsageInformation = "detective:GetUsageInformation";
	/** [Read] detective:InvokeAssistant */
	static readonly InvokeAssistant = "detective:InvokeAssistant";
	/** [List] detective:ListDatasourcePackages */
	static readonly ListDatasourcePackages = "detective:ListDatasourcePackages";
	/** [List] detective:ListGraphs */
	static readonly ListGraphs = "detective:ListGraphs";
	/** [List] detective:ListHighDegreeEntities */
	static readonly ListHighDegreeEntities = "detective:ListHighDegreeEntities";
	/** [List] detective:ListIndicators */
	static readonly ListIndicators = "detective:ListIndicators";
	/** [List] detective:ListInvestigations */
	static readonly ListInvestigations = "detective:ListInvestigations";
	/** [List] detective:ListInvitations */
	static readonly ListInvitations = "detective:ListInvitations";
	/** [List] detective:ListMembers */
	static readonly ListMembers = "detective:ListMembers";
	/** [List] detective:ListOrganizationAdminAccount */
	static readonly ListOrganizationAdminAccount =
		"detective:ListOrganizationAdminAccount";
	/** [List] detective:ListTagsForResource */
	static readonly ListTagsForResource = "detective:ListTagsForResource";
	/** [Write] detective:RejectInvitation */
	static readonly RejectInvitation = "detective:RejectInvitation";
	/** [Read] detective:SearchGraph */
	static readonly SearchGraph = "detective:SearchGraph";
	/** [Write] detective:StartInvestigation */
	static readonly StartInvestigation = "detective:StartInvestigation";
	/** [Write] detective:StartMonitoringMember */
	static readonly StartMonitoringMember = "detective:StartMonitoringMember";
	/** [Tagging] detective:TagResource */
	static readonly TagResource = "detective:TagResource";
	/** [Tagging] detective:UntagResource */
	static readonly UntagResource = "detective:UntagResource";
	/** [Write] detective:UpdateDatasourcePackages */
	static readonly UpdateDatasourcePackages =
		"detective:UpdateDatasourcePackages";
	/** [Write] detective:UpdateInvestigationState */
	static readonly UpdateInvestigationState =
		"detective:UpdateInvestigationState";
	/** [Write] detective:UpdateOrganizationConfiguration */
	static readonly UpdateOrganizationConfiguration =
		"detective:UpdateOrganizationConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DetectiveActions.BatchGetGraphMemberDatasources,
		DetectiveActions.BatchGetMembershipDatasources,
		DetectiveActions.DescribeOrganizationConfiguration,
		DetectiveActions.actionGetFreeTrialEligibility,
		DetectiveActions.actionGetGraphIngestState,
		DetectiveActions.actionGetInvestigation,
		DetectiveActions.actionGetMembers,
		DetectiveActions.actionGetPricingInformation,
		DetectiveActions.actionGetUsageInformation,
		DetectiveActions.InvokeAssistant,
		DetectiveActions.SearchGraph,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DetectiveActions.AcceptInvitation,
		DetectiveActions.CreateGraph,
		DetectiveActions.CreateMembers,
		DetectiveActions.DeleteGraph,
		DetectiveActions.DeleteMembers,
		DetectiveActions.DisableOrganizationAdminAccount,
		DetectiveActions.DisassociateMembership,
		DetectiveActions.EnableOrganizationAdminAccount,
		DetectiveActions.RejectInvitation,
		DetectiveActions.StartInvestigation,
		DetectiveActions.StartMonitoringMember,
		DetectiveActions.UpdateDatasourcePackages,
		DetectiveActions.UpdateInvestigationState,
		DetectiveActions.UpdateOrganizationConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DetectiveActions.ListDatasourcePackages,
		DetectiveActions.ListGraphs,
		DetectiveActions.ListHighDegreeEntities,
		DetectiveActions.ListIndicators,
		DetectiveActions.ListInvestigations,
		DetectiveActions.ListInvitations,
		DetectiveActions.ListMembers,
		DetectiveActions.ListOrganizationAdminAccount,
		DetectiveActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DetectiveActions.TagResource,
		DetectiveActions.UntagResource,
	];
}

/**
 * Properties for building a Graph ARN.
 */
export interface DetectiveGraphArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Graph ARN.
 */
export interface DetectiveGraphArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const GraphArnRegex =
	/^arn:(?<partition>[^:]+):detective:(?<region>[^:]*):(?<account>[^:]*):graph:(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for detective resources.
 */
export class DetectiveResources {
	/**
	 * Builds an ARN for the Graph resource.
	 */
	static graph(props: DetectiveGraphArnProps): string {
		return `arn:${props.partition ?? "aws"}:detective:${props.region ?? "*"}:${props.account ?? "*"}:graph:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Graph resource.
	 */
	static isValidGraphArn(arn: string): boolean {
		return GraphArnRegex.test(arn);
	}

	/**
	 * Parses a Graph ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGraphArn(arn: string): DetectiveGraphArnComponents {
		const match = GraphArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Graph ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for detective.
 */
export class DetectiveOperations {
	/** IAM actions required for the AcceptInvitation API call. */
	static readonly AcceptInvitation: string[] = ["detective:AcceptInvitation"];
	/** IAM actions required for the BatchGetGraphMemberDatasources API call. */
	static readonly BatchGetGraphMemberDatasources: string[] = [
		"detective:BatchGetGraphMemberDatasources",
	];
	/** IAM actions required for the BatchGetMembershipDatasources API call. */
	static readonly BatchGetMembershipDatasources: string[] = [
		"detective:BatchGetMembershipDatasources",
	];
	/** IAM actions required for the CreateGraph API call. */
	static readonly CreateGraph: string[] = [
		"detective:CreateGraph",
		"detective:TagResource",
	];
	/** IAM actions required for the CreateMembers API call. */
	static readonly CreateMembers: string[] = ["detective:CreateMembers"];
	/** IAM actions required for the DeleteGraph API call. */
	static readonly DeleteGraph: string[] = ["detective:DeleteGraph"];
	/** IAM actions required for the DeleteMembers API call. */
	static readonly DeleteMembers: string[] = ["detective:DeleteMembers"];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DescribeOrganizationConfiguration: string[] = [
		"detective:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DisableOrganizationAdminAccount: string[] = [
		"detective:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateMembership API call. */
	static readonly DisassociateMembership: string[] = [
		"detective:DisassociateMembership",
	];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly EnableOrganizationAdminAccount: string[] = [
		"iam:CreateServiceLinkedRole",
		"organizations:EnableAWSServiceAccess",
		"detective:EnableOrganizationAdminAccount",
		"organizations:RegisterDelegatedAdministrator",
	];
	/** IAM actions required for the GetInvestigation API call. */
	static readonly opGetInvestigation: string[] = ["detective:GetInvestigation"];
	/** IAM actions required for the GetMembers API call. */
	static readonly opGetMembers: string[] = ["detective:GetMembers"];
	/** IAM actions required for the ListDatasourcePackages API call. */
	static readonly ListDatasourcePackages: string[] = [
		"detective:ListDatasourcePackages",
	];
	/** IAM actions required for the ListGraphs API call. */
	static readonly ListGraphs: string[] = ["detective:ListGraphs"];
	/** IAM actions required for the ListIndicators API call. */
	static readonly ListIndicators: string[] = ["detective:ListIndicators"];
	/** IAM actions required for the ListInvestigations API call. */
	static readonly ListInvestigations: string[] = [
		"detective:ListInvestigations",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly ListInvitations: string[] = ["detective:ListInvitations"];
	/** IAM actions required for the ListMembers API call. */
	static readonly ListMembers: string[] = ["detective:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly ListOrganizationAdminAccounts: string[] = [
		"detective:ListOrganizationAdminAccount",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"detective:ListTagsForResource",
	];
	/** IAM actions required for the RejectInvitation API call. */
	static readonly RejectInvitation: string[] = ["detective:RejectInvitation"];
	/** IAM actions required for the StartInvestigation API call. */
	static readonly StartInvestigation: string[] = [
		"detective:StartInvestigation",
	];
	/** IAM actions required for the StartMonitoringMember API call. */
	static readonly StartMonitoringMember: string[] = [
		"detective:StartMonitoringMember",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["detective:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["detective:UntagResource"];
	/** IAM actions required for the UpdateDatasourcePackages API call. */
	static readonly UpdateDatasourcePackages: string[] = [
		"detective:UpdateDatasourcePackages",
	];
	/** IAM actions required for the UpdateInvestigationState API call. */
	static readonly UpdateInvestigationState: string[] = [
		"detective:UpdateInvestigationState",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UpdateOrganizationConfiguration: string[] = [
		"detective:UpdateOrganizationConfiguration",
	];
}

/**
 * Condition key constants and builders for detective.
 */
export class DetectiveConditions {
	/** Condition keys applicable to the CreateGraph action. */
	static readonly CreateGraphConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
