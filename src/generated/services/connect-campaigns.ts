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
	static readonly CREATE_CAMPAIGN = "connect-campaigns:CreateCampaign";
	/** [Write] connect-campaigns:DeleteCampaign */
	static readonly DELETE_CAMPAIGN = "connect-campaigns:DeleteCampaign";
	/** [Write] connect-campaigns:DeleteCampaignChannelSubtypeConfig */
	static readonly DELETE_CAMPAIGN_CHANNEL_SUBTYPE_CONFIG =
		"connect-campaigns:DeleteCampaignChannelSubtypeConfig";
	/** [Write] connect-campaigns:DeleteCampaignCommunicationLimits */
	static readonly DELETE_CAMPAIGN_COMMUNICATION_LIMITS =
		"connect-campaigns:DeleteCampaignCommunicationLimits";
	/** [Write] connect-campaigns:DeleteCampaignCommunicationTime */
	static readonly DELETE_CAMPAIGN_COMMUNICATION_TIME =
		"connect-campaigns:DeleteCampaignCommunicationTime";
	/** [Write] connect-campaigns:DeleteCampaignEntryLimits */
	static readonly DELETE_CAMPAIGN_ENTRY_LIMITS =
		"connect-campaigns:DeleteCampaignEntryLimits";
	/** [Write] connect-campaigns:DeleteConnectInstanceConfig */
	static readonly DELETE_CONNECT_INSTANCE_CONFIG =
		"connect-campaigns:DeleteConnectInstanceConfig";
	/** [Write] connect-campaigns:DeleteConnectInstanceIntegration */
	static readonly DELETE_CONNECT_INSTANCE_INTEGRATION =
		"connect-campaigns:DeleteConnectInstanceIntegration";
	/** [Write] connect-campaigns:DeleteInstanceOnboardingJob */
	static readonly DELETE_INSTANCE_ONBOARDING_JOB =
		"connect-campaigns:DeleteInstanceOnboardingJob";
	/** [Read] connect-campaigns:DescribeCampaign */
	static readonly DESCRIBE_CAMPAIGN = "connect-campaigns:DescribeCampaign";
	/** [Read] connect-campaigns:GetCampaignState */
	static readonly GET_CAMPAIGN_STATE = "connect-campaigns:GetCampaignState";
	/** [Read] connect-campaigns:GetCampaignStateBatch */
	static readonly GET_CAMPAIGN_STATE_BATCH =
		"connect-campaigns:GetCampaignStateBatch";
	/** [Read] connect-campaigns:GetConnectInstanceConfig */
	static readonly GET_CONNECT_INSTANCE_CONFIG =
		"connect-campaigns:GetConnectInstanceConfig";
	/** [Read] connect-campaigns:GetInstanceCommunicationLimits */
	static readonly GET_INSTANCE_COMMUNICATION_LIMITS =
		"connect-campaigns:GetInstanceCommunicationLimits";
	/** [Read] connect-campaigns:GetInstanceOnboardingJobStatus */
	static readonly GET_INSTANCE_ONBOARDING_JOB_STATUS =
		"connect-campaigns:GetInstanceOnboardingJobStatus";
	/** [List] connect-campaigns:ListCampaigns */
	static readonly LIST_CAMPAIGNS = "connect-campaigns:ListCampaigns";
	/** [List] connect-campaigns:ListConnectInstanceIntegrations */
	static readonly LIST_CONNECT_INSTANCE_INTEGRATIONS =
		"connect-campaigns:ListConnectInstanceIntegrations";
	/** [Read] connect-campaigns:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"connect-campaigns:ListTagsForResource";
	/** [Write] connect-campaigns:PauseCampaign */
	static readonly PAUSE_CAMPAIGN = "connect-campaigns:PauseCampaign";
	/** [Write] connect-campaigns:PutConnectInstanceIntegration */
	static readonly PUT_CONNECT_INSTANCE_INTEGRATION =
		"connect-campaigns:PutConnectInstanceIntegration";
	/** [Write] connect-campaigns:PutDialRequestBatch */
	static readonly PUT_DIAL_REQUEST_BATCH =
		"connect-campaigns:PutDialRequestBatch";
	/** [Write] connect-campaigns:PutInstanceCommunicationLimits */
	static readonly PUT_INSTANCE_COMMUNICATION_LIMITS =
		"connect-campaigns:PutInstanceCommunicationLimits";
	/** [Write] connect-campaigns:PutOutboundRequestBatch */
	static readonly PUT_OUTBOUND_REQUEST_BATCH =
		"connect-campaigns:PutOutboundRequestBatch";
	/** [Write] connect-campaigns:PutProfileOutboundRequestBatch */
	static readonly PUT_PROFILE_OUTBOUND_REQUEST_BATCH =
		"connect-campaigns:PutProfileOutboundRequestBatch";
	/** [Write] connect-campaigns:ResumeCampaign */
	static readonly RESUME_CAMPAIGN = "connect-campaigns:ResumeCampaign";
	/** [Write] connect-campaigns:StartCampaign */
	static readonly START_CAMPAIGN = "connect-campaigns:StartCampaign";
	/** [Write] connect-campaigns:StartInstanceOnboardingJob */
	static readonly START_INSTANCE_ONBOARDING_JOB =
		"connect-campaigns:StartInstanceOnboardingJob";
	/** [Write] connect-campaigns:StopCampaign */
	static readonly STOP_CAMPAIGN = "connect-campaigns:StopCampaign";
	/** [Tagging] connect-campaigns:TagResource */
	static readonly TAG_RESOURCE = "connect-campaigns:TagResource";
	/** [Tagging] connect-campaigns:UntagResource */
	static readonly UNTAG_RESOURCE = "connect-campaigns:UntagResource";
	/** [Write] connect-campaigns:UpdateCampaignChannelSubtypeConfig */
	static readonly UPDATE_CAMPAIGN_CHANNEL_SUBTYPE_CONFIG =
		"connect-campaigns:UpdateCampaignChannelSubtypeConfig";
	/** [Write] connect-campaigns:UpdateCampaignCommunicationLimits */
	static readonly UPDATE_CAMPAIGN_COMMUNICATION_LIMITS =
		"connect-campaigns:UpdateCampaignCommunicationLimits";
	/** [Write] connect-campaigns:UpdateCampaignCommunicationTime */
	static readonly UPDATE_CAMPAIGN_COMMUNICATION_TIME =
		"connect-campaigns:UpdateCampaignCommunicationTime";
	/** [Write] connect-campaigns:UpdateCampaignDialerConfig */
	static readonly UPDATE_CAMPAIGN_DIALER_CONFIG =
		"connect-campaigns:UpdateCampaignDialerConfig";
	/** [Write] connect-campaigns:UpdateCampaignEntryLimits */
	static readonly UPDATE_CAMPAIGN_ENTRY_LIMITS =
		"connect-campaigns:UpdateCampaignEntryLimits";
	/** [Write] connect-campaigns:UpdateCampaignFlowAssociation */
	static readonly UPDATE_CAMPAIGN_FLOW_ASSOCIATION =
		"connect-campaigns:UpdateCampaignFlowAssociation";
	/** [Write] connect-campaigns:UpdateCampaignName */
	static readonly UPDATE_CAMPAIGN_NAME = "connect-campaigns:UpdateCampaignName";
	/** [Write] connect-campaigns:UpdateCampaignOutboundCallConfig */
	static readonly UPDATE_CAMPAIGN_OUTBOUND_CALL_CONFIG =
		"connect-campaigns:UpdateCampaignOutboundCallConfig";
	/** [Write] connect-campaigns:UpdateCampaignSchedule */
	static readonly UPDATE_CAMPAIGN_SCHEDULE =
		"connect-campaigns:UpdateCampaignSchedule";
	/** [Write] connect-campaigns:UpdateCampaignSource */
	static readonly UPDATE_CAMPAIGN_SOURCE =
		"connect-campaigns:UpdateCampaignSource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ConnectCampaignsActions.DESCRIBE_CAMPAIGN,
		ConnectCampaignsActions.GET_CAMPAIGN_STATE,
		ConnectCampaignsActions.GET_CAMPAIGN_STATE_BATCH,
		ConnectCampaignsActions.GET_CONNECT_INSTANCE_CONFIG,
		ConnectCampaignsActions.GET_INSTANCE_COMMUNICATION_LIMITS,
		ConnectCampaignsActions.GET_INSTANCE_ONBOARDING_JOB_STATUS,
		ConnectCampaignsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ConnectCampaignsActions.CREATE_CAMPAIGN,
		ConnectCampaignsActions.DELETE_CAMPAIGN,
		ConnectCampaignsActions.DELETE_CAMPAIGN_CHANNEL_SUBTYPE_CONFIG,
		ConnectCampaignsActions.DELETE_CAMPAIGN_COMMUNICATION_LIMITS,
		ConnectCampaignsActions.DELETE_CAMPAIGN_COMMUNICATION_TIME,
		ConnectCampaignsActions.DELETE_CAMPAIGN_ENTRY_LIMITS,
		ConnectCampaignsActions.DELETE_CONNECT_INSTANCE_CONFIG,
		ConnectCampaignsActions.DELETE_CONNECT_INSTANCE_INTEGRATION,
		ConnectCampaignsActions.DELETE_INSTANCE_ONBOARDING_JOB,
		ConnectCampaignsActions.PAUSE_CAMPAIGN,
		ConnectCampaignsActions.PUT_CONNECT_INSTANCE_INTEGRATION,
		ConnectCampaignsActions.PUT_DIAL_REQUEST_BATCH,
		ConnectCampaignsActions.PUT_INSTANCE_COMMUNICATION_LIMITS,
		ConnectCampaignsActions.PUT_OUTBOUND_REQUEST_BATCH,
		ConnectCampaignsActions.PUT_PROFILE_OUTBOUND_REQUEST_BATCH,
		ConnectCampaignsActions.RESUME_CAMPAIGN,
		ConnectCampaignsActions.START_CAMPAIGN,
		ConnectCampaignsActions.START_INSTANCE_ONBOARDING_JOB,
		ConnectCampaignsActions.STOP_CAMPAIGN,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_CHANNEL_SUBTYPE_CONFIG,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_COMMUNICATION_LIMITS,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_COMMUNICATION_TIME,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_DIALER_CONFIG,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_ENTRY_LIMITS,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_FLOW_ASSOCIATION,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_NAME,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_OUTBOUND_CALL_CONFIG,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_SCHEDULE,
		ConnectCampaignsActions.UPDATE_CAMPAIGN_SOURCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ConnectCampaignsActions.LIST_CAMPAIGNS,
		ConnectCampaignsActions.LIST_CONNECT_INSTANCE_INTEGRATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ConnectCampaignsActions.TAG_RESOURCE,
		ConnectCampaignsActions.UNTAG_RESOURCE,
	];
}

const CampaignArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):connect-campaigns:(?<region>[^:]*):(?<account>[^:]*):campaign/(?<campaignId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for connect-campaigns resources.
 */
export class ConnectCampaignsResources {
	/**
	 * Builds an ARN for the campaign resource.
	 */
	static campaign(props: {
		/** The CampaignId component of the ARN. */
		readonly campaignId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCampaignArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		campaignId: string;
	} {
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
	static readonly CREATE_CAMPAIGN: string[] = [
		"connect-campaigns:CreateCampaign",
		"connect-campaigns:TagResource",
	];
	/** IAM actions required for the DeleteCampaign API call. */
	static readonly DELETE_CAMPAIGN: string[] = [
		"connect-campaigns:DeleteCampaign",
	];
	/** IAM actions required for the DeleteCampaignChannelSubtypeConfig API call. */
	static readonly DELETE_CAMPAIGN_CHANNEL_SUBTYPE_CONFIG: string[] = [
		"connect-campaigns:DeleteCampaignChannelSubtypeConfig",
	];
	/** IAM actions required for the DeleteCampaignCommunicationLimits API call. */
	static readonly DELETE_CAMPAIGN_COMMUNICATION_LIMITS: string[] = [
		"connect-campaigns:DeleteCampaignCommunicationLimits",
	];
	/** IAM actions required for the DeleteCampaignCommunicationTime API call. */
	static readonly DELETE_CAMPAIGN_COMMUNICATION_TIME: string[] = [
		"connect-campaigns:DeleteCampaignCommunicationTime",
	];
	/** IAM actions required for the DeleteCampaignEntryLimits API call. */
	static readonly DELETE_CAMPAIGN_ENTRY_LIMITS: string[] = [
		"connect-campaigns:DeleteCampaignEntryLimits",
	];
	/** IAM actions required for the DeleteConnectInstanceConfig API call. */
	static readonly DELETE_CONNECT_INSTANCE_CONFIG: string[] = [
		"connect-campaigns:DeleteConnectInstanceConfig",
	];
	/** IAM actions required for the DeleteConnectInstanceIntegration API call. */
	static readonly DELETE_CONNECT_INSTANCE_INTEGRATION: string[] = [
		"connect-campaigns:DeleteConnectInstanceIntegration",
	];
	/** IAM actions required for the DeleteInstanceOnboardingJob API call. */
	static readonly DELETE_INSTANCE_ONBOARDING_JOB: string[] = [
		"connect-campaigns:DeleteInstanceOnboardingJob",
	];
	/** IAM actions required for the DescribeCampaign API call. */
	static readonly DESCRIBE_CAMPAIGN: string[] = [
		"connect-campaigns:DescribeCampaign",
	];
	/** IAM actions required for the GetCampaignState API call. */
	static readonly GET_CAMPAIGN_STATE: string[] = [
		"connect-campaigns:GetCampaignState",
	];
	/** IAM actions required for the GetCampaignStateBatch API call. */
	static readonly GET_CAMPAIGN_STATE_BATCH: string[] = [
		"connect-campaigns:GetCampaignStateBatch",
	];
	/** IAM actions required for the GetConnectInstanceConfig API call. */
	static readonly GET_CONNECT_INSTANCE_CONFIG: string[] = [
		"connect-campaigns:GetConnectInstanceConfig",
	];
	/** IAM actions required for the GetInstanceCommunicationLimits API call. */
	static readonly GET_INSTANCE_COMMUNICATION_LIMITS: string[] = [
		"connect-campaigns:GetInstanceCommunicationLimits",
	];
	/** IAM actions required for the GetInstanceOnboardingJobStatus API call. */
	static readonly GET_INSTANCE_ONBOARDING_JOB_STATUS: string[] = [
		"connect-campaigns:GetInstanceOnboardingJobStatus",
	];
	/** IAM actions required for the ListCampaigns API call. */
	static readonly LIST_CAMPAIGNS: string[] = [
		"connect-campaigns:ListCampaigns",
	];
	/** IAM actions required for the ListConnectInstanceIntegrations API call. */
	static readonly LIST_CONNECT_INSTANCE_INTEGRATIONS: string[] = [
		"connect-campaigns:ListConnectInstanceIntegrations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"connect-campaigns:ListTagsForResource",
	];
	/** IAM actions required for the PauseCampaign API call. */
	static readonly PAUSE_CAMPAIGN: string[] = [
		"connect-campaigns:PauseCampaign",
	];
	/** IAM actions required for the PutConnectInstanceIntegration API call. */
	static readonly PUT_CONNECT_INSTANCE_INTEGRATION: string[] = [
		"connect-campaigns:PutConnectInstanceIntegration",
	];
	/** IAM actions required for the PutDialRequestBatch API call. */
	static readonly PUT_DIAL_REQUEST_BATCH: string[] = [
		"connect-campaigns:PutDialRequestBatch",
	];
	/** IAM actions required for the PutInstanceCommunicationLimits API call. */
	static readonly PUT_INSTANCE_COMMUNICATION_LIMITS: string[] = [
		"connect-campaigns:PutInstanceCommunicationLimits",
	];
	/** IAM actions required for the PutOutboundRequestBatch API call. */
	static readonly PUT_OUTBOUND_REQUEST_BATCH: string[] = [
		"connect-campaigns:PutOutboundRequestBatch",
	];
	/** IAM actions required for the PutProfileOutboundRequestBatch API call. */
	static readonly PUT_PROFILE_OUTBOUND_REQUEST_BATCH: string[] = [
		"connect-campaigns:PutProfileOutboundRequestBatch",
	];
	/** IAM actions required for the ResumeCampaign API call. */
	static readonly RESUME_CAMPAIGN: string[] = [
		"connect-campaigns:ResumeCampaign",
	];
	/** IAM actions required for the StartCampaign API call. */
	static readonly START_CAMPAIGN: string[] = [
		"connect-campaigns:StartCampaign",
	];
	/** IAM actions required for the StartInstanceOnboardingJob API call. */
	static readonly START_INSTANCE_ONBOARDING_JOB: string[] = [
		"connect-campaigns:StartInstanceOnboardingJob",
	];
	/** IAM actions required for the StopCampaign API call. */
	static readonly STOP_CAMPAIGN: string[] = ["connect-campaigns:StopCampaign"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["connect-campaigns:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"connect-campaigns:UntagResource",
	];
	/** IAM actions required for the UpdateCampaignChannelSubtypeConfig API call. */
	static readonly UPDATE_CAMPAIGN_CHANNEL_SUBTYPE_CONFIG: string[] = [
		"connect-campaigns:UpdateCampaignChannelSubtypeConfig",
	];
	/** IAM actions required for the UpdateCampaignCommunicationLimits API call. */
	static readonly UPDATE_CAMPAIGN_COMMUNICATION_LIMITS: string[] = [
		"connect-campaigns:UpdateCampaignCommunicationLimits",
	];
	/** IAM actions required for the UpdateCampaignCommunicationTime API call. */
	static readonly UPDATE_CAMPAIGN_COMMUNICATION_TIME: string[] = [
		"connect-campaigns:UpdateCampaignCommunicationTime",
	];
	/** IAM actions required for the UpdateCampaignDialerConfig API call. */
	static readonly UPDATE_CAMPAIGN_DIALER_CONFIG: string[] = [
		"connect-campaigns:UpdateCampaignDialerConfig",
	];
	/** IAM actions required for the UpdateCampaignEntryLimits API call. */
	static readonly UPDATE_CAMPAIGN_ENTRY_LIMITS: string[] = [
		"connect-campaigns:UpdateCampaignEntryLimits",
	];
	/** IAM actions required for the UpdateCampaignFlowAssociation API call. */
	static readonly UPDATE_CAMPAIGN_FLOW_ASSOCIATION: string[] = [
		"connect-campaigns:UpdateCampaignFlowAssociation",
	];
	/** IAM actions required for the UpdateCampaignName API call. */
	static readonly UPDATE_CAMPAIGN_NAME: string[] = [
		"connect-campaigns:UpdateCampaignName",
	];
	/** IAM actions required for the UpdateCampaignOutboundCallConfig API call. */
	static readonly UPDATE_CAMPAIGN_OUTBOUND_CALL_CONFIG: string[] = [
		"connect-campaigns:UpdateCampaignOutboundCallConfig",
	];
	/** IAM actions required for the UpdateCampaignSchedule API call. */
	static readonly UPDATE_CAMPAIGN_SCHEDULE: string[] = [
		"connect-campaigns:UpdateCampaignSchedule",
	];
	/** IAM actions required for the UpdateCampaignSource API call. */
	static readonly UPDATE_CAMPAIGN_SOURCE: string[] = [
		"connect-campaigns:UpdateCampaignSource",
	];
}

/**
 * Condition key constants and builders for connect-campaigns.
 */
export class ConnectCampaignsConditions {
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CREATE_CAMPAIGN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeCampaign action. */
	static readonly DESCRIBE_CAMPAIGN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCampaignState action. */
	static readonly GET_CAMPAIGN_STATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the GetCampaignStateBatch action. */
	static readonly GET_CAMPAIGN_STATE_BATCH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the ListCampaigns action. */
	static readonly LIST_CAMPAIGNS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
