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
	static readonly ACCEPT_INVITATION = "detective:AcceptInvitation";
	/** [Read] detective:BatchGetGraphMemberDatasources */
	static readonly BATCH_GET_GRAPH_MEMBER_DATASOURCES =
		"detective:BatchGetGraphMemberDatasources";
	/** [Read] detective:BatchGetMembershipDatasources */
	static readonly BATCH_GET_MEMBERSHIP_DATASOURCES =
		"detective:BatchGetMembershipDatasources";
	/** [Write] detective:CreateGraph */
	static readonly CREATE_GRAPH = "detective:CreateGraph";
	/** [Write] detective:CreateMembers */
	static readonly CREATE_MEMBERS = "detective:CreateMembers";
	/** [Write] detective:DeleteGraph */
	static readonly DELETE_GRAPH = "detective:DeleteGraph";
	/** [Write] detective:DeleteMembers */
	static readonly DELETE_MEMBERS = "detective:DeleteMembers";
	/** [Read] detective:DescribeOrganizationConfiguration */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION =
		"detective:DescribeOrganizationConfiguration";
	/** [Write] detective:DisableOrganizationAdminAccount */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"detective:DisableOrganizationAdminAccount";
	/** [Write] detective:DisassociateMembership */
	static readonly DISASSOCIATE_MEMBERSHIP = "detective:DisassociateMembership";
	/** [Write] detective:EnableOrganizationAdminAccount */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT =
		"detective:EnableOrganizationAdminAccount";
	/** [Read] detective:GetFreeTrialEligibility */
	static readonly GET_FREE_TRIAL_ELIGIBILITY =
		"detective:GetFreeTrialEligibility";
	/** [Read] detective:GetGraphIngestState */
	static readonly GET_GRAPH_INGEST_STATE = "detective:GetGraphIngestState";
	/** [Read] detective:GetInvestigation */
	static readonly GET_INVESTIGATION = "detective:GetInvestigation";
	/** [Read] detective:GetMembers */
	static readonly GET_MEMBERS = "detective:GetMembers";
	/** [Read] detective:GetPricingInformation */
	static readonly GET_PRICING_INFORMATION = "detective:GetPricingInformation";
	/** [Read] detective:GetUsageInformation */
	static readonly GET_USAGE_INFORMATION = "detective:GetUsageInformation";
	/** [Read] detective:InvokeAssistant */
	static readonly INVOKE_ASSISTANT = "detective:InvokeAssistant";
	/** [List] detective:ListDatasourcePackages */
	static readonly LIST_DATASOURCE_PACKAGES = "detective:ListDatasourcePackages";
	/** [List] detective:ListGraphs */
	static readonly LIST_GRAPHS = "detective:ListGraphs";
	/** [List] detective:ListHighDegreeEntities */
	static readonly LIST_HIGH_DEGREE_ENTITIES =
		"detective:ListHighDegreeEntities";
	/** [List] detective:ListIndicators */
	static readonly LIST_INDICATORS = "detective:ListIndicators";
	/** [List] detective:ListInvestigations */
	static readonly LIST_INVESTIGATIONS = "detective:ListInvestigations";
	/** [List] detective:ListInvitations */
	static readonly LIST_INVITATIONS = "detective:ListInvitations";
	/** [List] detective:ListMembers */
	static readonly LIST_MEMBERS = "detective:ListMembers";
	/** [List] detective:ListOrganizationAdminAccount */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNT =
		"detective:ListOrganizationAdminAccount";
	/** [List] detective:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "detective:ListTagsForResource";
	/** [Write] detective:RejectInvitation */
	static readonly REJECT_INVITATION = "detective:RejectInvitation";
	/** [Read] detective:SearchGraph */
	static readonly SEARCH_GRAPH = "detective:SearchGraph";
	/** [Write] detective:StartInvestigation */
	static readonly START_INVESTIGATION = "detective:StartInvestigation";
	/** [Write] detective:StartMonitoringMember */
	static readonly START_MONITORING_MEMBER = "detective:StartMonitoringMember";
	/** [Tagging] detective:TagResource */
	static readonly TAG_RESOURCE = "detective:TagResource";
	/** [Tagging] detective:UntagResource */
	static readonly UNTAG_RESOURCE = "detective:UntagResource";
	/** [Write] detective:UpdateDatasourcePackages */
	static readonly UPDATE_DATASOURCE_PACKAGES =
		"detective:UpdateDatasourcePackages";
	/** [Write] detective:UpdateInvestigationState */
	static readonly UPDATE_INVESTIGATION_STATE =
		"detective:UpdateInvestigationState";
	/** [Write] detective:UpdateOrganizationConfiguration */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION =
		"detective:UpdateOrganizationConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DetectiveActions.BATCH_GET_GRAPH_MEMBER_DATASOURCES,
		DetectiveActions.BATCH_GET_MEMBERSHIP_DATASOURCES,
		DetectiveActions.DESCRIBE_ORGANIZATION_CONFIGURATION,
		DetectiveActions.GET_FREE_TRIAL_ELIGIBILITY,
		DetectiveActions.GET_GRAPH_INGEST_STATE,
		DetectiveActions.GET_INVESTIGATION,
		DetectiveActions.GET_MEMBERS,
		DetectiveActions.GET_PRICING_INFORMATION,
		DetectiveActions.GET_USAGE_INFORMATION,
		DetectiveActions.INVOKE_ASSISTANT,
		DetectiveActions.SEARCH_GRAPH,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DetectiveActions.ACCEPT_INVITATION,
		DetectiveActions.CREATE_GRAPH,
		DetectiveActions.CREATE_MEMBERS,
		DetectiveActions.DELETE_GRAPH,
		DetectiveActions.DELETE_MEMBERS,
		DetectiveActions.DISABLE_ORGANIZATION_ADMIN_ACCOUNT,
		DetectiveActions.DISASSOCIATE_MEMBERSHIP,
		DetectiveActions.ENABLE_ORGANIZATION_ADMIN_ACCOUNT,
		DetectiveActions.REJECT_INVITATION,
		DetectiveActions.START_INVESTIGATION,
		DetectiveActions.START_MONITORING_MEMBER,
		DetectiveActions.UPDATE_DATASOURCE_PACKAGES,
		DetectiveActions.UPDATE_INVESTIGATION_STATE,
		DetectiveActions.UPDATE_ORGANIZATION_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DetectiveActions.LIST_DATASOURCE_PACKAGES,
		DetectiveActions.LIST_GRAPHS,
		DetectiveActions.LIST_HIGH_DEGREE_ENTITIES,
		DetectiveActions.LIST_INDICATORS,
		DetectiveActions.LIST_INVESTIGATIONS,
		DetectiveActions.LIST_INVITATIONS,
		DetectiveActions.LIST_MEMBERS,
		DetectiveActions.LIST_ORGANIZATION_ADMIN_ACCOUNT,
		DetectiveActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DetectiveActions.TAG_RESOURCE,
		DetectiveActions.UNTAG_RESOURCE,
	];
}

const GraphArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):detective:(?<region>[^:]*):(?<account>[^:]*):graph:(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for detective resources.
 */
export class DetectiveResources {
	/**
	 * Builds an ARN for the Graph resource.
	 */
	static graph(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGraphArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly ACCEPT_INVITATION: string[] = ["detective:AcceptInvitation"];
	/** IAM actions required for the BatchGetGraphMemberDatasources API call. */
	static readonly BATCH_GET_GRAPH_MEMBER_DATASOURCES: string[] = [
		"detective:BatchGetGraphMemberDatasources",
	];
	/** IAM actions required for the BatchGetMembershipDatasources API call. */
	static readonly BATCH_GET_MEMBERSHIP_DATASOURCES: string[] = [
		"detective:BatchGetMembershipDatasources",
	];
	/** IAM actions required for the CreateGraph API call. */
	static readonly CREATE_GRAPH: string[] = [
		"detective:CreateGraph",
		"detective:TagResource",
	];
	/** IAM actions required for the CreateMembers API call. */
	static readonly CREATE_MEMBERS: string[] = ["detective:CreateMembers"];
	/** IAM actions required for the DeleteGraph API call. */
	static readonly DELETE_GRAPH: string[] = ["detective:DeleteGraph"];
	/** IAM actions required for the DeleteMembers API call. */
	static readonly DELETE_MEMBERS: string[] = ["detective:DeleteMembers"];
	/** IAM actions required for the DescribeOrganizationConfiguration API call. */
	static readonly DESCRIBE_ORGANIZATION_CONFIGURATION: string[] = [
		"detective:DescribeOrganizationConfiguration",
	];
	/** IAM actions required for the DisableOrganizationAdminAccount API call. */
	static readonly DISABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"detective:DisableOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateMembership API call. */
	static readonly DISASSOCIATE_MEMBERSHIP: string[] = [
		"detective:DisassociateMembership",
	];
	/** IAM actions required for the EnableOrganizationAdminAccount API call. */
	static readonly ENABLE_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"iam:CreateServiceLinkedRole",
		"organizations:EnableAWSServiceAccess",
		"detective:EnableOrganizationAdminAccount",
		"organizations:RegisterDelegatedAdministrator",
	];
	/** IAM actions required for the GetInvestigation API call. */
	static readonly GET_INVESTIGATION: string[] = ["detective:GetInvestigation"];
	/** IAM actions required for the GetMembers API call. */
	static readonly GET_MEMBERS: string[] = ["detective:GetMembers"];
	/** IAM actions required for the ListDatasourcePackages API call. */
	static readonly LIST_DATASOURCE_PACKAGES: string[] = [
		"detective:ListDatasourcePackages",
	];
	/** IAM actions required for the ListGraphs API call. */
	static readonly LIST_GRAPHS: string[] = ["detective:ListGraphs"];
	/** IAM actions required for the ListIndicators API call. */
	static readonly LIST_INDICATORS: string[] = ["detective:ListIndicators"];
	/** IAM actions required for the ListInvestigations API call. */
	static readonly LIST_INVESTIGATIONS: string[] = [
		"detective:ListInvestigations",
	];
	/** IAM actions required for the ListInvitations API call. */
	static readonly LIST_INVITATIONS: string[] = ["detective:ListInvitations"];
	/** IAM actions required for the ListMembers API call. */
	static readonly LIST_MEMBERS: string[] = ["detective:ListMembers"];
	/** IAM actions required for the ListOrganizationAdminAccounts API call. */
	static readonly LIST_ORGANIZATION_ADMIN_ACCOUNTS: string[] = [
		"detective:ListOrganizationAdminAccount",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"detective:ListTagsForResource",
	];
	/** IAM actions required for the RejectInvitation API call. */
	static readonly REJECT_INVITATION: string[] = ["detective:RejectInvitation"];
	/** IAM actions required for the StartInvestigation API call. */
	static readonly START_INVESTIGATION: string[] = [
		"detective:StartInvestigation",
	];
	/** IAM actions required for the StartMonitoringMember API call. */
	static readonly START_MONITORING_MEMBER: string[] = [
		"detective:StartMonitoringMember",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["detective:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["detective:UntagResource"];
	/** IAM actions required for the UpdateDatasourcePackages API call. */
	static readonly UPDATE_DATASOURCE_PACKAGES: string[] = [
		"detective:UpdateDatasourcePackages",
	];
	/** IAM actions required for the UpdateInvestigationState API call. */
	static readonly UPDATE_INVESTIGATION_STATE: string[] = [
		"detective:UpdateInvestigationState",
	];
	/** IAM actions required for the UpdateOrganizationConfiguration API call. */
	static readonly UPDATE_ORGANIZATION_CONFIGURATION: string[] = [
		"detective:UpdateOrganizationConfiguration",
	];
}

/**
 * Condition key constants and builders for detective.
 */
export class DetectiveConditions {
	/** Condition keys applicable to the CreateGraph action. */
	static readonly CREATE_GRAPH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
