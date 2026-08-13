// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/connect-campaigns.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the connect-campaigns service.
 */
export class ConnectCampaignsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "connect-campaigns";

	/** [Write] connect-campaigns:CreateCampaign */
	static readonly CreateCampaign = "connect-campaigns:CreateCampaign";
	/** [Write] connect-campaigns:DeleteCampaign */
	static readonly DeleteCampaign = "connect-campaigns:DeleteCampaign";
	/** [Write] connect-campaigns:DeleteCampaignChannelSubtypeConfig */
	static readonly DeleteCampaignChannelSubtypeConfig =
		"connect-campaigns:DeleteCampaignChannelSubtypeConfig";
	/** [Write] connect-campaigns:DeleteCampaignCommunicationLimits */
	static readonly DeleteCampaignCommunicationLimits =
		"connect-campaigns:DeleteCampaignCommunicationLimits";
	/** [Write] connect-campaigns:DeleteCampaignCommunicationTime */
	static readonly DeleteCampaignCommunicationTime =
		"connect-campaigns:DeleteCampaignCommunicationTime";
	/** [Write] connect-campaigns:DeleteCampaignEntryLimits */
	static readonly DeleteCampaignEntryLimits =
		"connect-campaigns:DeleteCampaignEntryLimits";
	/** [Write] connect-campaigns:DeleteConnectInstanceConfig */
	static readonly DeleteConnectInstanceConfig =
		"connect-campaigns:DeleteConnectInstanceConfig";
	/** [Write] connect-campaigns:DeleteConnectInstanceIntegration */
	static readonly DeleteConnectInstanceIntegration =
		"connect-campaigns:DeleteConnectInstanceIntegration";
	/** [Write] connect-campaigns:DeleteInstanceOnboardingJob */
	static readonly DeleteInstanceOnboardingJob =
		"connect-campaigns:DeleteInstanceOnboardingJob";
	/** [Read] connect-campaigns:DescribeCampaign */
	static readonly DescribeCampaign = "connect-campaigns:DescribeCampaign";
	/** [Read] connect-campaigns:GetCampaignState */
	static readonly actionGetCampaignState = "connect-campaigns:GetCampaignState";
	/** [Read] connect-campaigns:GetCampaignStateBatch */
	static readonly actionGetCampaignStateBatch =
		"connect-campaigns:GetCampaignStateBatch";
	/** [Read] connect-campaigns:GetConnectInstanceConfig */
	static readonly actionGetConnectInstanceConfig =
		"connect-campaigns:GetConnectInstanceConfig";
	/** [Read] connect-campaigns:GetInstanceCommunicationLimits */
	static readonly actionGetInstanceCommunicationLimits =
		"connect-campaigns:GetInstanceCommunicationLimits";
	/** [Read] connect-campaigns:GetInstanceOnboardingJobStatus */
	static readonly actionGetInstanceOnboardingJobStatus =
		"connect-campaigns:GetInstanceOnboardingJobStatus";
	/** [List] connect-campaigns:ListCampaigns */
	static readonly ListCampaigns = "connect-campaigns:ListCampaigns";
	/** [List] connect-campaigns:ListConnectInstanceIntegrations */
	static readonly ListConnectInstanceIntegrations =
		"connect-campaigns:ListConnectInstanceIntegrations";
	/** [Read] connect-campaigns:ListTagsForResource */
	static readonly ListTagsForResource = "connect-campaigns:ListTagsForResource";
	/** [Write] connect-campaigns:PauseCampaign */
	static readonly PauseCampaign = "connect-campaigns:PauseCampaign";
	/** [Write] connect-campaigns:PutConnectInstanceIntegration */
	static readonly PutConnectInstanceIntegration =
		"connect-campaigns:PutConnectInstanceIntegration";
	/** [Write] connect-campaigns:PutDialRequestBatch */
	static readonly PutDialRequestBatch = "connect-campaigns:PutDialRequestBatch";
	/** [Write] connect-campaigns:PutInstanceCommunicationLimits */
	static readonly PutInstanceCommunicationLimits =
		"connect-campaigns:PutInstanceCommunicationLimits";
	/** [Write] connect-campaigns:PutOutboundRequestBatch */
	static readonly PutOutboundRequestBatch =
		"connect-campaigns:PutOutboundRequestBatch";
	/** [Write] connect-campaigns:PutProfileOutboundRequestBatch */
	static readonly PutProfileOutboundRequestBatch =
		"connect-campaigns:PutProfileOutboundRequestBatch";
	/** [Write] connect-campaigns:ResumeCampaign */
	static readonly ResumeCampaign = "connect-campaigns:ResumeCampaign";
	/** [Write] connect-campaigns:StartCampaign */
	static readonly StartCampaign = "connect-campaigns:StartCampaign";
	/** [Write] connect-campaigns:StartInstanceOnboardingJob */
	static readonly StartInstanceOnboardingJob =
		"connect-campaigns:StartInstanceOnboardingJob";
	/** [Write] connect-campaigns:StopCampaign */
	static readonly StopCampaign = "connect-campaigns:StopCampaign";
	/** [Tagging] connect-campaigns:TagResource */
	static readonly TagResource = "connect-campaigns:TagResource";
	/** [Tagging] connect-campaigns:UntagResource */
	static readonly UntagResource = "connect-campaigns:UntagResource";
	/** [Write] connect-campaigns:UpdateCampaignChannelSubtypeConfig */
	static readonly UpdateCampaignChannelSubtypeConfig =
		"connect-campaigns:UpdateCampaignChannelSubtypeConfig";
	/** [Write] connect-campaigns:UpdateCampaignCommunicationLimits */
	static readonly UpdateCampaignCommunicationLimits =
		"connect-campaigns:UpdateCampaignCommunicationLimits";
	/** [Write] connect-campaigns:UpdateCampaignCommunicationTime */
	static readonly UpdateCampaignCommunicationTime =
		"connect-campaigns:UpdateCampaignCommunicationTime";
	/** [Write] connect-campaigns:UpdateCampaignDialerConfig */
	static readonly UpdateCampaignDialerConfig =
		"connect-campaigns:UpdateCampaignDialerConfig";
	/** [Write] connect-campaigns:UpdateCampaignEntryLimits */
	static readonly UpdateCampaignEntryLimits =
		"connect-campaigns:UpdateCampaignEntryLimits";
	/** [Write] connect-campaigns:UpdateCampaignFlowAssociation */
	static readonly UpdateCampaignFlowAssociation =
		"connect-campaigns:UpdateCampaignFlowAssociation";
	/** [Write] connect-campaigns:UpdateCampaignName */
	static readonly UpdateCampaignName = "connect-campaigns:UpdateCampaignName";
	/** [Write] connect-campaigns:UpdateCampaignOutboundCallConfig */
	static readonly UpdateCampaignOutboundCallConfig =
		"connect-campaigns:UpdateCampaignOutboundCallConfig";
	/** [Write] connect-campaigns:UpdateCampaignSchedule */
	static readonly UpdateCampaignSchedule =
		"connect-campaigns:UpdateCampaignSchedule";
	/** [Write] connect-campaigns:UpdateCampaignSource */
	static readonly UpdateCampaignSource =
		"connect-campaigns:UpdateCampaignSource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ConnectCampaignsActions.DescribeCampaign,
		ConnectCampaignsActions.actionGetCampaignState,
		ConnectCampaignsActions.actionGetCampaignStateBatch,
		ConnectCampaignsActions.actionGetConnectInstanceConfig,
		ConnectCampaignsActions.actionGetInstanceCommunicationLimits,
		ConnectCampaignsActions.actionGetInstanceOnboardingJobStatus,
		ConnectCampaignsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ConnectCampaignsActions.CreateCampaign,
		ConnectCampaignsActions.DeleteCampaign,
		ConnectCampaignsActions.DeleteCampaignChannelSubtypeConfig,
		ConnectCampaignsActions.DeleteCampaignCommunicationLimits,
		ConnectCampaignsActions.DeleteCampaignCommunicationTime,
		ConnectCampaignsActions.DeleteCampaignEntryLimits,
		ConnectCampaignsActions.DeleteConnectInstanceConfig,
		ConnectCampaignsActions.DeleteConnectInstanceIntegration,
		ConnectCampaignsActions.DeleteInstanceOnboardingJob,
		ConnectCampaignsActions.PauseCampaign,
		ConnectCampaignsActions.PutConnectInstanceIntegration,
		ConnectCampaignsActions.PutDialRequestBatch,
		ConnectCampaignsActions.PutInstanceCommunicationLimits,
		ConnectCampaignsActions.PutOutboundRequestBatch,
		ConnectCampaignsActions.PutProfileOutboundRequestBatch,
		ConnectCampaignsActions.ResumeCampaign,
		ConnectCampaignsActions.StartCampaign,
		ConnectCampaignsActions.StartInstanceOnboardingJob,
		ConnectCampaignsActions.StopCampaign,
		ConnectCampaignsActions.UpdateCampaignChannelSubtypeConfig,
		ConnectCampaignsActions.UpdateCampaignCommunicationLimits,
		ConnectCampaignsActions.UpdateCampaignCommunicationTime,
		ConnectCampaignsActions.UpdateCampaignDialerConfig,
		ConnectCampaignsActions.UpdateCampaignEntryLimits,
		ConnectCampaignsActions.UpdateCampaignFlowAssociation,
		ConnectCampaignsActions.UpdateCampaignName,
		ConnectCampaignsActions.UpdateCampaignOutboundCallConfig,
		ConnectCampaignsActions.UpdateCampaignSchedule,
		ConnectCampaignsActions.UpdateCampaignSource,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ConnectCampaignsActions.ListCampaigns,
		ConnectCampaignsActions.ListConnectInstanceIntegrations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ConnectCampaignsActions.TagResource,
		ConnectCampaignsActions.UntagResource,
	];
}

/**
 * Properties for building a campaign ARN.
 */
export interface ConnectCampaignsCampaignArnProps {
	/** The CampaignId component of the ARN. */
	readonly campaignId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a campaign ARN.
 */
export interface ConnectCampaignsCampaignArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CampaignId component. */
	readonly campaignId: string;
}

const CampaignArnRegex =
	/^arn:(?<partition>[^:]+):connect-campaigns:(?<region>[^:]*):(?<account>[^:]*):campaign\/(?<campaignId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for connect-campaigns resources.
 */
export class ConnectCampaignsResources {
	/**
	 * Builds an ARN for the campaign resource.
	 */
	static campaign(props: ConnectCampaignsCampaignArnProps): string {
		return `arn:${props.partition ?? "aws"}:connect-campaigns:${props.region ?? "*"}:${props.account ?? "*"}:campaign/${props.campaignId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the campaign resource.
	 */
	static isValidCampaignArn(arn: string): boolean {
		return CampaignArnRegex.test(arn);
	}

	/**
	 * Parses a campaign ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCampaignArn(arn: string): ConnectCampaignsCampaignArnComponents {
		const match = CampaignArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid campaign ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			campaignId: match.groups!.campaignId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for connect-campaigns.
 */
export class ConnectCampaignsOperations {
	/** IAM actions required for the CreateCampaign API call. */
	static readonly CreateCampaign: string[] = [
		"connect-campaigns:CreateCampaign",
		"connect-campaigns:TagResource",
	];
	/** IAM actions required for the DeleteCampaign API call. */
	static readonly DeleteCampaign: string[] = [
		"connect-campaigns:DeleteCampaign",
	];
	/** IAM actions required for the DeleteCampaignChannelSubtypeConfig API call. */
	static readonly DeleteCampaignChannelSubtypeConfig: string[] = [
		"connect-campaigns:DeleteCampaignChannelSubtypeConfig",
	];
	/** IAM actions required for the DeleteCampaignCommunicationLimits API call. */
	static readonly DeleteCampaignCommunicationLimits: string[] = [
		"connect-campaigns:DeleteCampaignCommunicationLimits",
	];
	/** IAM actions required for the DeleteCampaignCommunicationTime API call. */
	static readonly DeleteCampaignCommunicationTime: string[] = [
		"connect-campaigns:DeleteCampaignCommunicationTime",
	];
	/** IAM actions required for the DeleteCampaignEntryLimits API call. */
	static readonly DeleteCampaignEntryLimits: string[] = [
		"connect-campaigns:DeleteCampaignEntryLimits",
	];
	/** IAM actions required for the DeleteConnectInstanceConfig API call. */
	static readonly DeleteConnectInstanceConfig: string[] = [
		"connect-campaigns:DeleteConnectInstanceConfig",
	];
	/** IAM actions required for the DeleteConnectInstanceIntegration API call. */
	static readonly DeleteConnectInstanceIntegration: string[] = [
		"connect-campaigns:DeleteConnectInstanceIntegration",
	];
	/** IAM actions required for the DeleteInstanceOnboardingJob API call. */
	static readonly DeleteInstanceOnboardingJob: string[] = [
		"connect-campaigns:DeleteInstanceOnboardingJob",
	];
	/** IAM actions required for the DescribeCampaign API call. */
	static readonly DescribeCampaign: string[] = [
		"connect-campaigns:DescribeCampaign",
	];
	/** IAM actions required for the GetCampaignState API call. */
	static readonly opGetCampaignState: string[] = [
		"connect-campaigns:GetCampaignState",
	];
	/** IAM actions required for the GetCampaignStateBatch API call. */
	static readonly opGetCampaignStateBatch: string[] = [
		"connect-campaigns:GetCampaignStateBatch",
	];
	/** IAM actions required for the GetConnectInstanceConfig API call. */
	static readonly opGetConnectInstanceConfig: string[] = [
		"connect-campaigns:GetConnectInstanceConfig",
	];
	/** IAM actions required for the GetInstanceCommunicationLimits API call. */
	static readonly opGetInstanceCommunicationLimits: string[] = [
		"connect-campaigns:GetInstanceCommunicationLimits",
	];
	/** IAM actions required for the GetInstanceOnboardingJobStatus API call. */
	static readonly opGetInstanceOnboardingJobStatus: string[] = [
		"connect-campaigns:GetInstanceOnboardingJobStatus",
	];
	/** IAM actions required for the ListCampaigns API call. */
	static readonly ListCampaigns: string[] = ["connect-campaigns:ListCampaigns"];
	/** IAM actions required for the ListConnectInstanceIntegrations API call. */
	static readonly ListConnectInstanceIntegrations: string[] = [
		"connect-campaigns:ListConnectInstanceIntegrations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"connect-campaigns:ListTagsForResource",
	];
	/** IAM actions required for the PauseCampaign API call. */
	static readonly PauseCampaign: string[] = ["connect-campaigns:PauseCampaign"];
	/** IAM actions required for the PutConnectInstanceIntegration API call. */
	static readonly PutConnectInstanceIntegration: string[] = [
		"connect-campaigns:PutConnectInstanceIntegration",
	];
	/** IAM actions required for the PutDialRequestBatch API call. */
	static readonly PutDialRequestBatch: string[] = [
		"connect-campaigns:PutDialRequestBatch",
	];
	/** IAM actions required for the PutInstanceCommunicationLimits API call. */
	static readonly PutInstanceCommunicationLimits: string[] = [
		"connect-campaigns:PutInstanceCommunicationLimits",
	];
	/** IAM actions required for the PutOutboundRequestBatch API call. */
	static readonly PutOutboundRequestBatch: string[] = [
		"connect-campaigns:PutOutboundRequestBatch",
	];
	/** IAM actions required for the PutProfileOutboundRequestBatch API call. */
	static readonly PutProfileOutboundRequestBatch: string[] = [
		"connect-campaigns:PutProfileOutboundRequestBatch",
	];
	/** IAM actions required for the ResumeCampaign API call. */
	static readonly ResumeCampaign: string[] = [
		"connect-campaigns:ResumeCampaign",
	];
	/** IAM actions required for the StartCampaign API call. */
	static readonly StartCampaign: string[] = ["connect-campaigns:StartCampaign"];
	/** IAM actions required for the StartInstanceOnboardingJob API call. */
	static readonly StartInstanceOnboardingJob: string[] = [
		"connect-campaigns:StartInstanceOnboardingJob",
	];
	/** IAM actions required for the StopCampaign API call. */
	static readonly StopCampaign: string[] = ["connect-campaigns:StopCampaign"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["connect-campaigns:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["connect-campaigns:UntagResource"];
	/** IAM actions required for the UpdateCampaignChannelSubtypeConfig API call. */
	static readonly UpdateCampaignChannelSubtypeConfig: string[] = [
		"connect-campaigns:UpdateCampaignChannelSubtypeConfig",
	];
	/** IAM actions required for the UpdateCampaignCommunicationLimits API call. */
	static readonly UpdateCampaignCommunicationLimits: string[] = [
		"connect-campaigns:UpdateCampaignCommunicationLimits",
	];
	/** IAM actions required for the UpdateCampaignCommunicationTime API call. */
	static readonly UpdateCampaignCommunicationTime: string[] = [
		"connect-campaigns:UpdateCampaignCommunicationTime",
	];
	/** IAM actions required for the UpdateCampaignDialerConfig API call. */
	static readonly UpdateCampaignDialerConfig: string[] = [
		"connect-campaigns:UpdateCampaignDialerConfig",
	];
	/** IAM actions required for the UpdateCampaignEntryLimits API call. */
	static readonly UpdateCampaignEntryLimits: string[] = [
		"connect-campaigns:UpdateCampaignEntryLimits",
	];
	/** IAM actions required for the UpdateCampaignFlowAssociation API call. */
	static readonly UpdateCampaignFlowAssociation: string[] = [
		"connect-campaigns:UpdateCampaignFlowAssociation",
	];
	/** IAM actions required for the UpdateCampaignName API call. */
	static readonly UpdateCampaignName: string[] = [
		"connect-campaigns:UpdateCampaignName",
	];
	/** IAM actions required for the UpdateCampaignOutboundCallConfig API call. */
	static readonly UpdateCampaignOutboundCallConfig: string[] = [
		"connect-campaigns:UpdateCampaignOutboundCallConfig",
	];
	/** IAM actions required for the UpdateCampaignSchedule API call. */
	static readonly UpdateCampaignSchedule: string[] = [
		"connect-campaigns:UpdateCampaignSchedule",
	];
	/** IAM actions required for the UpdateCampaignSource API call. */
	static readonly UpdateCampaignSource: string[] = [
		"connect-campaigns:UpdateCampaignSource",
	];
}

/**
 * Condition key constants and builders for connect-campaigns.
 */
export class ConnectCampaignsConditions {
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CreateCampaignConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeCampaign action. */
	static readonly DescribeCampaignConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCampaignState action. */
	static readonly actionGetCampaignStateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCampaignStateBatch action. */
	static readonly actionGetCampaignStateBatchConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCampaigns action. */
	static readonly ListCampaignsConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
