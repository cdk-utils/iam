// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/medialive.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the medialive service.
 */
export class MediaLiveActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "medialive";

	/** [Write] medialive:AcceptInputDeviceTransfer */
	static readonly ACCEPT_INPUT_DEVICE_TRANSFER =
		"medialive:AcceptInputDeviceTransfer";
	/** [Write] medialive:BatchDelete */
	static readonly BATCH_DELETE = "medialive:BatchDelete";
	/** [Write] medialive:BatchStart */
	static readonly BATCH_START = "medialive:BatchStart";
	/** [Write] medialive:BatchStop */
	static readonly BATCH_STOP = "medialive:BatchStop";
	/** [Write] medialive:BatchUpdateSchedule */
	static readonly BATCH_UPDATE_SCHEDULE = "medialive:BatchUpdateSchedule";
	/** [Write] medialive:CancelInputDeviceTransfer */
	static readonly CANCEL_INPUT_DEVICE_TRANSFER =
		"medialive:CancelInputDeviceTransfer";
	/** [Write] medialive:ClaimDevice */
	static readonly CLAIM_DEVICE = "medialive:ClaimDevice";
	/** [Write] medialive:CreateChannel */
	static readonly CREATE_CHANNEL = "medialive:CreateChannel";
	/** [Write] medialive:CreateChannelPlacementGroup */
	static readonly CREATE_CHANNEL_PLACEMENT_GROUP =
		"medialive:CreateChannelPlacementGroup";
	/** [Write] medialive:CreateCloudWatchAlarmTemplate */
	static readonly CREATE_CLOUD_WATCH_ALARM_TEMPLATE =
		"medialive:CreateCloudWatchAlarmTemplate";
	/** [Write] medialive:CreateCloudWatchAlarmTemplateGroup */
	static readonly CREATE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP =
		"medialive:CreateCloudWatchAlarmTemplateGroup";
	/** [Write] medialive:CreateCluster */
	static readonly CREATE_CLUSTER = "medialive:CreateCluster";
	/** [Write] medialive:CreateEventBridgeRuleTemplate */
	static readonly CREATE_EVENT_BRIDGE_RULE_TEMPLATE =
		"medialive:CreateEventBridgeRuleTemplate";
	/** [Write] medialive:CreateEventBridgeRuleTemplateGroup */
	static readonly CREATE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP =
		"medialive:CreateEventBridgeRuleTemplateGroup";
	/** [Write] medialive:CreateInput */
	static readonly CREATE_INPUT = "medialive:CreateInput";
	/** [Write] medialive:CreateInputSecurityGroup */
	static readonly CREATE_INPUT_SECURITY_GROUP =
		"medialive:CreateInputSecurityGroup";
	/** [Write] medialive:CreateMultiplex */
	static readonly CREATE_MULTIPLEX = "medialive:CreateMultiplex";
	/** [Write] medialive:CreateMultiplexProgram */
	static readonly CREATE_MULTIPLEX_PROGRAM = "medialive:CreateMultiplexProgram";
	/** [Write] medialive:CreateNetwork */
	static readonly CREATE_NETWORK = "medialive:CreateNetwork";
	/** [Write] medialive:CreateNode */
	static readonly CREATE_NODE = "medialive:CreateNode";
	/** [Write] medialive:CreateNodeRegistrationScript */
	static readonly CREATE_NODE_REGISTRATION_SCRIPT =
		"medialive:CreateNodeRegistrationScript";
	/** [Write] medialive:CreatePartnerInput */
	static readonly CREATE_PARTNER_INPUT = "medialive:CreatePartnerInput";
	/** [Write] medialive:CreateSdiSource */
	static readonly CREATE_SDI_SOURCE = "medialive:CreateSdiSource";
	/** [Write] medialive:CreateSignalMap */
	static readonly CREATE_SIGNAL_MAP = "medialive:CreateSignalMap";
	/** [Tagging] medialive:CreateTags */
	static readonly CREATE_TAGS = "medialive:CreateTags";
	/** [Write] medialive:DeleteChannel */
	static readonly DELETE_CHANNEL = "medialive:DeleteChannel";
	/** [Write] medialive:DeleteChannelPlacementGroup */
	static readonly DELETE_CHANNEL_PLACEMENT_GROUP =
		"medialive:DeleteChannelPlacementGroup";
	/** [Write] medialive:DeleteCloudWatchAlarmTemplate */
	static readonly DELETE_CLOUD_WATCH_ALARM_TEMPLATE =
		"medialive:DeleteCloudWatchAlarmTemplate";
	/** [Write] medialive:DeleteCloudWatchAlarmTemplateGroup */
	static readonly DELETE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP =
		"medialive:DeleteCloudWatchAlarmTemplateGroup";
	/** [Write] medialive:DeleteCluster */
	static readonly DELETE_CLUSTER = "medialive:DeleteCluster";
	/** [Write] medialive:DeleteEventBridgeRuleTemplate */
	static readonly DELETE_EVENT_BRIDGE_RULE_TEMPLATE =
		"medialive:DeleteEventBridgeRuleTemplate";
	/** [Write] medialive:DeleteEventBridgeRuleTemplateGroup */
	static readonly DELETE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP =
		"medialive:DeleteEventBridgeRuleTemplateGroup";
	/** [Write] medialive:DeleteInput */
	static readonly DELETE_INPUT = "medialive:DeleteInput";
	/** [Write] medialive:DeleteInputSecurityGroup */
	static readonly DELETE_INPUT_SECURITY_GROUP =
		"medialive:DeleteInputSecurityGroup";
	/** [Write] medialive:DeleteMultiplex */
	static readonly DELETE_MULTIPLEX = "medialive:DeleteMultiplex";
	/** [Write] medialive:DeleteMultiplexProgram */
	static readonly DELETE_MULTIPLEX_PROGRAM = "medialive:DeleteMultiplexProgram";
	/** [Write] medialive:DeleteNetwork */
	static readonly DELETE_NETWORK = "medialive:DeleteNetwork";
	/** [Write] medialive:DeleteNode */
	static readonly DELETE_NODE = "medialive:DeleteNode";
	/** [Write] medialive:DeleteReservation */
	static readonly DELETE_RESERVATION = "medialive:DeleteReservation";
	/** [Write] medialive:DeleteSchedule */
	static readonly DELETE_SCHEDULE = "medialive:DeleteSchedule";
	/** [Write] medialive:DeleteSdiSource */
	static readonly DELETE_SDI_SOURCE = "medialive:DeleteSdiSource";
	/** [Write] medialive:DeleteSignalMap */
	static readonly DELETE_SIGNAL_MAP = "medialive:DeleteSignalMap";
	/** [Tagging] medialive:DeleteTags */
	static readonly DELETE_TAGS = "medialive:DeleteTags";
	/** [Read] medialive:DescribeAccountConfiguration */
	static readonly DESCRIBE_ACCOUNT_CONFIGURATION =
		"medialive:DescribeAccountConfiguration";
	/** [Read] medialive:DescribeChannel */
	static readonly DESCRIBE_CHANNEL = "medialive:DescribeChannel";
	/** [Read] medialive:DescribeChannelPlacementGroup */
	static readonly DESCRIBE_CHANNEL_PLACEMENT_GROUP =
		"medialive:DescribeChannelPlacementGroup";
	/** [Read] medialive:DescribeCluster */
	static readonly DESCRIBE_CLUSTER = "medialive:DescribeCluster";
	/** [Read] medialive:DescribeInput */
	static readonly DESCRIBE_INPUT = "medialive:DescribeInput";
	/** [Read] medialive:DescribeInputDevice */
	static readonly DESCRIBE_INPUT_DEVICE = "medialive:DescribeInputDevice";
	/** [Read] medialive:DescribeInputDeviceThumbnail */
	static readonly DESCRIBE_INPUT_DEVICE_THUMBNAIL =
		"medialive:DescribeInputDeviceThumbnail";
	/** [Read] medialive:DescribeInputSecurityGroup */
	static readonly DESCRIBE_INPUT_SECURITY_GROUP =
		"medialive:DescribeInputSecurityGroup";
	/** [Read] medialive:DescribeMultiplex */
	static readonly DESCRIBE_MULTIPLEX = "medialive:DescribeMultiplex";
	/** [Read] medialive:DescribeMultiplexProgram */
	static readonly DESCRIBE_MULTIPLEX_PROGRAM =
		"medialive:DescribeMultiplexProgram";
	/** [Read] medialive:DescribeNetwork */
	static readonly DESCRIBE_NETWORK = "medialive:DescribeNetwork";
	/** [Read] medialive:DescribeNode */
	static readonly DESCRIBE_NODE = "medialive:DescribeNode";
	/** [Read] medialive:DescribeOffering */
	static readonly DESCRIBE_OFFERING = "medialive:DescribeOffering";
	/** [Read] medialive:DescribeReservation */
	static readonly DESCRIBE_RESERVATION = "medialive:DescribeReservation";
	/** [Read] medialive:DescribeSchedule */
	static readonly DESCRIBE_SCHEDULE = "medialive:DescribeSchedule";
	/** [Read] medialive:DescribeSdiSource */
	static readonly DESCRIBE_SDI_SOURCE = "medialive:DescribeSdiSource";
	/** [Read] medialive:DescribeThumbnails */
	static readonly DESCRIBE_THUMBNAILS = "medialive:DescribeThumbnails";
	/** [Read] medialive:GetCloudWatchAlarmTemplate */
	static readonly GET_CLOUD_WATCH_ALARM_TEMPLATE =
		"medialive:GetCloudWatchAlarmTemplate";
	/** [Read] medialive:GetCloudWatchAlarmTemplateGroup */
	static readonly GET_CLOUD_WATCH_ALARM_TEMPLATE_GROUP =
		"medialive:GetCloudWatchAlarmTemplateGroup";
	/** [Read] medialive:GetEventBridgeRuleTemplate */
	static readonly GET_EVENT_BRIDGE_RULE_TEMPLATE =
		"medialive:GetEventBridgeRuleTemplate";
	/** [Read] medialive:GetEventBridgeRuleTemplateGroup */
	static readonly GET_EVENT_BRIDGE_RULE_TEMPLATE_GROUP =
		"medialive:GetEventBridgeRuleTemplateGroup";
	/** [Read] medialive:GetSignalMap */
	static readonly GET_SIGNAL_MAP = "medialive:GetSignalMap";
	/** [List] medialive:ListAlerts */
	static readonly LIST_ALERTS = "medialive:ListAlerts";
	/** [List] medialive:ListChannelPlacementGroups */
	static readonly LIST_CHANNEL_PLACEMENT_GROUPS =
		"medialive:ListChannelPlacementGroups";
	/** [List] medialive:ListChannels */
	static readonly LIST_CHANNELS = "medialive:ListChannels";
	/** [List] medialive:ListCloudWatchAlarmTemplateGroups */
	static readonly LIST_CLOUD_WATCH_ALARM_TEMPLATE_GROUPS =
		"medialive:ListCloudWatchAlarmTemplateGroups";
	/** [List] medialive:ListCloudWatchAlarmTemplates */
	static readonly LIST_CLOUD_WATCH_ALARM_TEMPLATES =
		"medialive:ListCloudWatchAlarmTemplates";
	/** [List] medialive:ListClusterAlerts */
	static readonly LIST_CLUSTER_ALERTS = "medialive:ListClusterAlerts";
	/** [List] medialive:ListClusters */
	static readonly LIST_CLUSTERS = "medialive:ListClusters";
	/** [List] medialive:ListEventBridgeRuleTemplateGroups */
	static readonly LIST_EVENT_BRIDGE_RULE_TEMPLATE_GROUPS =
		"medialive:ListEventBridgeRuleTemplateGroups";
	/** [List] medialive:ListEventBridgeRuleTemplates */
	static readonly LIST_EVENT_BRIDGE_RULE_TEMPLATES =
		"medialive:ListEventBridgeRuleTemplates";
	/** [List] medialive:ListInputDeviceTransfers */
	static readonly LIST_INPUT_DEVICE_TRANSFERS =
		"medialive:ListInputDeviceTransfers";
	/** [List] medialive:ListInputDevices */
	static readonly LIST_INPUT_DEVICES = "medialive:ListInputDevices";
	/** [List] medialive:ListInputSecurityGroups */
	static readonly LIST_INPUT_SECURITY_GROUPS =
		"medialive:ListInputSecurityGroups";
	/** [List] medialive:ListInputs */
	static readonly LIST_INPUTS = "medialive:ListInputs";
	/** [List] medialive:ListMultiplexAlerts */
	static readonly LIST_MULTIPLEX_ALERTS = "medialive:ListMultiplexAlerts";
	/** [List] medialive:ListMultiplexPrograms */
	static readonly LIST_MULTIPLEX_PROGRAMS = "medialive:ListMultiplexPrograms";
	/** [List] medialive:ListMultiplexes */
	static readonly LIST_MULTIPLEXES = "medialive:ListMultiplexes";
	/** [List] medialive:ListNetworks */
	static readonly LIST_NETWORKS = "medialive:ListNetworks";
	/** [List] medialive:ListNodes */
	static readonly LIST_NODES = "medialive:ListNodes";
	/** [List] medialive:ListOfferings */
	static readonly LIST_OFFERINGS = "medialive:ListOfferings";
	/** [List] medialive:ListReservations */
	static readonly LIST_RESERVATIONS = "medialive:ListReservations";
	/** [List] medialive:ListSdiSources */
	static readonly LIST_SDI_SOURCES = "medialive:ListSdiSources";
	/** [List] medialive:ListSignalMaps */
	static readonly LIST_SIGNAL_MAPS = "medialive:ListSignalMaps";
	/** [List] medialive:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "medialive:ListTagsForResource";
	/** [List] medialive:ListVersions */
	static readonly LIST_VERSIONS = "medialive:ListVersions";
	/** [Write] medialive:PollAnywhere */
	static readonly POLL_ANYWHERE = "medialive:PollAnywhere";
	/** [Write] medialive:PurchaseOffering */
	static readonly PURCHASE_OFFERING = "medialive:PurchaseOffering";
	/** [Write] medialive:RebootInputDevice */
	static readonly REBOOT_INPUT_DEVICE = "medialive:RebootInputDevice";
	/** [Write] medialive:RejectInputDeviceTransfer */
	static readonly REJECT_INPUT_DEVICE_TRANSFER =
		"medialive:RejectInputDeviceTransfer";
	/** [Write] medialive:RestartChannelPipelines */
	static readonly RESTART_CHANNEL_PIPELINES =
		"medialive:RestartChannelPipelines";
	/** [Write] medialive:StartChannel */
	static readonly START_CHANNEL = "medialive:StartChannel";
	/** [Write] medialive:StartDeleteMonitorDeployment */
	static readonly START_DELETE_MONITOR_DEPLOYMENT =
		"medialive:StartDeleteMonitorDeployment";
	/** [Write] medialive:StartInputDevice */
	static readonly START_INPUT_DEVICE = "medialive:StartInputDevice";
	/** [Write] medialive:StartInputDeviceMaintenanceWindow */
	static readonly START_INPUT_DEVICE_MAINTENANCE_WINDOW =
		"medialive:StartInputDeviceMaintenanceWindow";
	/** [Write] medialive:StartMonitorDeployment */
	static readonly START_MONITOR_DEPLOYMENT = "medialive:StartMonitorDeployment";
	/** [Write] medialive:StartMultiplex */
	static readonly START_MULTIPLEX = "medialive:StartMultiplex";
	/** [Write] medialive:StartUpdateSignalMap */
	static readonly START_UPDATE_SIGNAL_MAP = "medialive:StartUpdateSignalMap";
	/** [Write] medialive:StopChannel */
	static readonly STOP_CHANNEL = "medialive:StopChannel";
	/** [Write] medialive:StopInputDevice */
	static readonly STOP_INPUT_DEVICE = "medialive:StopInputDevice";
	/** [Write] medialive:StopMultiplex */
	static readonly STOP_MULTIPLEX = "medialive:StopMultiplex";
	/** [Write] medialive:SubmitAnywhereStateChange */
	static readonly SUBMIT_ANYWHERE_STATE_CHANGE =
		"medialive:SubmitAnywhereStateChange";
	/** [Write] medialive:TransferInputDevice */
	static readonly TRANSFER_INPUT_DEVICE = "medialive:TransferInputDevice";
	/** [Write] medialive:UpdateAccountConfiguration */
	static readonly UPDATE_ACCOUNT_CONFIGURATION =
		"medialive:UpdateAccountConfiguration";
	/** [Write] medialive:UpdateChannel */
	static readonly UPDATE_CHANNEL = "medialive:UpdateChannel";
	/** [Write] medialive:UpdateChannelClass */
	static readonly UPDATE_CHANNEL_CLASS = "medialive:UpdateChannelClass";
	/** [Write] medialive:UpdateChannelPlacementGroup */
	static readonly UPDATE_CHANNEL_PLACEMENT_GROUP =
		"medialive:UpdateChannelPlacementGroup";
	/** [Write] medialive:UpdateCloudWatchAlarmTemplate */
	static readonly UPDATE_CLOUD_WATCH_ALARM_TEMPLATE =
		"medialive:UpdateCloudWatchAlarmTemplate";
	/** [Write] medialive:UpdateCloudWatchAlarmTemplateGroup */
	static readonly UPDATE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP =
		"medialive:UpdateCloudWatchAlarmTemplateGroup";
	/** [Write] medialive:UpdateCluster */
	static readonly UPDATE_CLUSTER = "medialive:UpdateCluster";
	/** [Write] medialive:UpdateEventBridgeRuleTemplate */
	static readonly UPDATE_EVENT_BRIDGE_RULE_TEMPLATE =
		"medialive:UpdateEventBridgeRuleTemplate";
	/** [Write] medialive:UpdateEventBridgeRuleTemplateGroup */
	static readonly UPDATE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP =
		"medialive:UpdateEventBridgeRuleTemplateGroup";
	/** [Write] medialive:UpdateInput */
	static readonly UPDATE_INPUT = "medialive:UpdateInput";
	/** [Write] medialive:UpdateInputDevice */
	static readonly UPDATE_INPUT_DEVICE = "medialive:UpdateInputDevice";
	/** [Write] medialive:UpdateInputSecurityGroup */
	static readonly UPDATE_INPUT_SECURITY_GROUP =
		"medialive:UpdateInputSecurityGroup";
	/** [Write] medialive:UpdateMultiplex */
	static readonly UPDATE_MULTIPLEX = "medialive:UpdateMultiplex";
	/** [Write] medialive:UpdateMultiplexProgram */
	static readonly UPDATE_MULTIPLEX_PROGRAM = "medialive:UpdateMultiplexProgram";
	/** [Write] medialive:UpdateNetwork */
	static readonly UPDATE_NETWORK = "medialive:UpdateNetwork";
	/** [Write] medialive:UpdateNode */
	static readonly UPDATE_NODE = "medialive:UpdateNode";
	/** [Write] medialive:UpdateNodeState */
	static readonly UPDATE_NODE_STATE = "medialive:UpdateNodeState";
	/** [Write] medialive:UpdateReservation */
	static readonly UPDATE_RESERVATION = "medialive:UpdateReservation";
	/** [Write] medialive:UpdateSdiSource */
	static readonly UPDATE_SDI_SOURCE = "medialive:UpdateSdiSource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MediaLiveActions.DESCRIBE_ACCOUNT_CONFIGURATION,
		MediaLiveActions.DESCRIBE_CHANNEL,
		MediaLiveActions.DESCRIBE_CHANNEL_PLACEMENT_GROUP,
		MediaLiveActions.DESCRIBE_CLUSTER,
		MediaLiveActions.DESCRIBE_INPUT,
		MediaLiveActions.DESCRIBE_INPUT_DEVICE,
		MediaLiveActions.DESCRIBE_INPUT_DEVICE_THUMBNAIL,
		MediaLiveActions.DESCRIBE_INPUT_SECURITY_GROUP,
		MediaLiveActions.DESCRIBE_MULTIPLEX,
		MediaLiveActions.DESCRIBE_MULTIPLEX_PROGRAM,
		MediaLiveActions.DESCRIBE_NETWORK,
		MediaLiveActions.DESCRIBE_NODE,
		MediaLiveActions.DESCRIBE_OFFERING,
		MediaLiveActions.DESCRIBE_RESERVATION,
		MediaLiveActions.DESCRIBE_SCHEDULE,
		MediaLiveActions.DESCRIBE_SDI_SOURCE,
		MediaLiveActions.DESCRIBE_THUMBNAILS,
		MediaLiveActions.GET_CLOUD_WATCH_ALARM_TEMPLATE,
		MediaLiveActions.GET_CLOUD_WATCH_ALARM_TEMPLATE_GROUP,
		MediaLiveActions.GET_EVENT_BRIDGE_RULE_TEMPLATE,
		MediaLiveActions.GET_EVENT_BRIDGE_RULE_TEMPLATE_GROUP,
		MediaLiveActions.GET_SIGNAL_MAP,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MediaLiveActions.ACCEPT_INPUT_DEVICE_TRANSFER,
		MediaLiveActions.BATCH_DELETE,
		MediaLiveActions.BATCH_START,
		MediaLiveActions.BATCH_STOP,
		MediaLiveActions.BATCH_UPDATE_SCHEDULE,
		MediaLiveActions.CANCEL_INPUT_DEVICE_TRANSFER,
		MediaLiveActions.CLAIM_DEVICE,
		MediaLiveActions.CREATE_CHANNEL,
		MediaLiveActions.CREATE_CHANNEL_PLACEMENT_GROUP,
		MediaLiveActions.CREATE_CLOUD_WATCH_ALARM_TEMPLATE,
		MediaLiveActions.CREATE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP,
		MediaLiveActions.CREATE_CLUSTER,
		MediaLiveActions.CREATE_EVENT_BRIDGE_RULE_TEMPLATE,
		MediaLiveActions.CREATE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP,
		MediaLiveActions.CREATE_INPUT,
		MediaLiveActions.CREATE_INPUT_SECURITY_GROUP,
		MediaLiveActions.CREATE_MULTIPLEX,
		MediaLiveActions.CREATE_MULTIPLEX_PROGRAM,
		MediaLiveActions.CREATE_NETWORK,
		MediaLiveActions.CREATE_NODE,
		MediaLiveActions.CREATE_NODE_REGISTRATION_SCRIPT,
		MediaLiveActions.CREATE_PARTNER_INPUT,
		MediaLiveActions.CREATE_SDI_SOURCE,
		MediaLiveActions.CREATE_SIGNAL_MAP,
		MediaLiveActions.DELETE_CHANNEL,
		MediaLiveActions.DELETE_CHANNEL_PLACEMENT_GROUP,
		MediaLiveActions.DELETE_CLOUD_WATCH_ALARM_TEMPLATE,
		MediaLiveActions.DELETE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP,
		MediaLiveActions.DELETE_CLUSTER,
		MediaLiveActions.DELETE_EVENT_BRIDGE_RULE_TEMPLATE,
		MediaLiveActions.DELETE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP,
		MediaLiveActions.DELETE_INPUT,
		MediaLiveActions.DELETE_INPUT_SECURITY_GROUP,
		MediaLiveActions.DELETE_MULTIPLEX,
		MediaLiveActions.DELETE_MULTIPLEX_PROGRAM,
		MediaLiveActions.DELETE_NETWORK,
		MediaLiveActions.DELETE_NODE,
		MediaLiveActions.DELETE_RESERVATION,
		MediaLiveActions.DELETE_SCHEDULE,
		MediaLiveActions.DELETE_SDI_SOURCE,
		MediaLiveActions.DELETE_SIGNAL_MAP,
		MediaLiveActions.POLL_ANYWHERE,
		MediaLiveActions.PURCHASE_OFFERING,
		MediaLiveActions.REBOOT_INPUT_DEVICE,
		MediaLiveActions.REJECT_INPUT_DEVICE_TRANSFER,
		MediaLiveActions.RESTART_CHANNEL_PIPELINES,
		MediaLiveActions.START_CHANNEL,
		MediaLiveActions.START_DELETE_MONITOR_DEPLOYMENT,
		MediaLiveActions.START_INPUT_DEVICE,
		MediaLiveActions.START_INPUT_DEVICE_MAINTENANCE_WINDOW,
		MediaLiveActions.START_MONITOR_DEPLOYMENT,
		MediaLiveActions.START_MULTIPLEX,
		MediaLiveActions.START_UPDATE_SIGNAL_MAP,
		MediaLiveActions.STOP_CHANNEL,
		MediaLiveActions.STOP_INPUT_DEVICE,
		MediaLiveActions.STOP_MULTIPLEX,
		MediaLiveActions.SUBMIT_ANYWHERE_STATE_CHANGE,
		MediaLiveActions.TRANSFER_INPUT_DEVICE,
		MediaLiveActions.UPDATE_ACCOUNT_CONFIGURATION,
		MediaLiveActions.UPDATE_CHANNEL,
		MediaLiveActions.UPDATE_CHANNEL_CLASS,
		MediaLiveActions.UPDATE_CHANNEL_PLACEMENT_GROUP,
		MediaLiveActions.UPDATE_CLOUD_WATCH_ALARM_TEMPLATE,
		MediaLiveActions.UPDATE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP,
		MediaLiveActions.UPDATE_CLUSTER,
		MediaLiveActions.UPDATE_EVENT_BRIDGE_RULE_TEMPLATE,
		MediaLiveActions.UPDATE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP,
		MediaLiveActions.UPDATE_INPUT,
		MediaLiveActions.UPDATE_INPUT_DEVICE,
		MediaLiveActions.UPDATE_INPUT_SECURITY_GROUP,
		MediaLiveActions.UPDATE_MULTIPLEX,
		MediaLiveActions.UPDATE_MULTIPLEX_PROGRAM,
		MediaLiveActions.UPDATE_NETWORK,
		MediaLiveActions.UPDATE_NODE,
		MediaLiveActions.UPDATE_NODE_STATE,
		MediaLiveActions.UPDATE_RESERVATION,
		MediaLiveActions.UPDATE_SDI_SOURCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MediaLiveActions.LIST_ALERTS,
		MediaLiveActions.LIST_CHANNEL_PLACEMENT_GROUPS,
		MediaLiveActions.LIST_CHANNELS,
		MediaLiveActions.LIST_CLOUD_WATCH_ALARM_TEMPLATE_GROUPS,
		MediaLiveActions.LIST_CLOUD_WATCH_ALARM_TEMPLATES,
		MediaLiveActions.LIST_CLUSTER_ALERTS,
		MediaLiveActions.LIST_CLUSTERS,
		MediaLiveActions.LIST_EVENT_BRIDGE_RULE_TEMPLATE_GROUPS,
		MediaLiveActions.LIST_EVENT_BRIDGE_RULE_TEMPLATES,
		MediaLiveActions.LIST_INPUT_DEVICE_TRANSFERS,
		MediaLiveActions.LIST_INPUT_DEVICES,
		MediaLiveActions.LIST_INPUT_SECURITY_GROUPS,
		MediaLiveActions.LIST_INPUTS,
		MediaLiveActions.LIST_MULTIPLEX_ALERTS,
		MediaLiveActions.LIST_MULTIPLEX_PROGRAMS,
		MediaLiveActions.LIST_MULTIPLEXES,
		MediaLiveActions.LIST_NETWORKS,
		MediaLiveActions.LIST_NODES,
		MediaLiveActions.LIST_OFFERINGS,
		MediaLiveActions.LIST_RESERVATIONS,
		MediaLiveActions.LIST_SDI_SOURCES,
		MediaLiveActions.LIST_SIGNAL_MAPS,
		MediaLiveActions.LIST_TAGS_FOR_RESOURCE,
		MediaLiveActions.LIST_VERSIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MediaLiveActions.CREATE_TAGS,
		MediaLiveActions.DELETE_TAGS,
	];
}

const ChannelArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):channel:(?<channelId>[^:/?]+)$",
);
const ChannelPlacementGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):channelPlacementGroup:(?<clusterId>[^:/?]+)/(?<channelPlacementGroupId>[^:/?]+)$",
);
const CloudwatchAlarmTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):cloudwatch-alarm-template:(?<cloudWatchAlarmTemplateId>[^:/?]+)$",
);
const CloudwatchAlarmTemplateGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):cloudwatch-alarm-template-group:(?<cloudWatchAlarmTemplateGroupId>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):cluster:(?<clusterId>[^:/?]+)$",
);
const EventbridgeRuleTemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):eventbridge-rule-template:(?<eventBridgeRuleTemplateId>[^:/?]+)$",
);
const EventbridgeRuleTemplateGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):eventbridge-rule-template-group:(?<eventBridgeRuleTemplateGroupId>[^:/?]+)$",
);
const InputArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):input:(?<inputId>[^:/?]+)$",
);
const InputDeviceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):inputDevice:(?<deviceId>[^:/?]+)$",
);
const InputSecurityGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):inputSecurityGroup:(?<inputSecurityGroupId>[^:/?]+)$",
);
const MultiplexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):multiplex:(?<multiplexId>[^:/?]+)$",
);
const NetworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):network:(?<networkId>[^:/?]+)$",
);
const NodeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):node:(?<clusterId>[^:/?]+)/(?<nodeId>[^:/?]+)$",
);
const OfferingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):offering:(?<offeringId>[^:/?]+)$",
);
const ReservationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):reservation:(?<reservationId>[^:/?]+)$",
);
const SdiSourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):sdiSource:(?<sdiSourceId>[^:/?]+)$",
);
const SignalMapArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):medialive:(?<region>[^:]*):(?<account>[^:]*):signal-map:(?<signalMapId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for medialive resources.
 */
export class MediaLiveResources {
	/**
	 * Builds an ARN for the channel resource.
	 */
	static channel(props: {
		/** The ChannelId component of the ARN. */
		readonly channelId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:channel:${props.channelId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel resource.
	 */
	static isValidChannelArn(arn: string): boolean {
		return ChannelArnRegex.test(arn);
	}

	/**
	 * Parses a channel ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		channelId: string;
	} {
		const match = ChannelArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			channelId: match.groups!.channelId,
		};
	}

	/**
	 * Builds an ARN for the channel-placement-group resource.
	 */
	static channelPlacementGroup(props: {
		/** The ClusterId component of the ARN. */
		readonly clusterId: string;
		/** The ChannelPlacementGroupId component of the ARN. */
		readonly channelPlacementGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:channelPlacementGroup:${props.clusterId}/${props.channelPlacementGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the channel-placement-group resource.
	 */
	static isValidChannelPlacementGroupArn(arn: string): boolean {
		return ChannelPlacementGroupArnRegex.test(arn);
	}

	/**
	 * Parses a channel-placement-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelPlacementGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterId: string;
		channelPlacementGroupId: string;
	} {
		const match = ChannelPlacementGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid channel-placement-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterId: match.groups!.clusterId,
			channelPlacementGroupId: match.groups!.channelPlacementGroupId,
		};
	}

	/**
	 * Builds an ARN for the cloudwatch-alarm-template resource.
	 */
	static cloudwatchAlarmTemplate(props: {
		/** The CloudWatchAlarmTemplateId component of the ARN. */
		readonly cloudWatchAlarmTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:cloudwatch-alarm-template:${props.cloudWatchAlarmTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cloudwatch-alarm-template resource.
	 */
	static isValidCloudwatchAlarmTemplateArn(arn: string): boolean {
		return CloudwatchAlarmTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a cloudwatch-alarm-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCloudwatchAlarmTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cloudWatchAlarmTemplateId: string;
	} {
		const match = CloudwatchAlarmTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cloudwatch-alarm-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudWatchAlarmTemplateId: match.groups!.cloudWatchAlarmTemplateId,
		};
	}

	/**
	 * Builds an ARN for the cloudwatch-alarm-template-group resource.
	 */
	static cloudwatchAlarmTemplateGroup(props: {
		/** The CloudWatchAlarmTemplateGroupId component of the ARN. */
		readonly cloudWatchAlarmTemplateGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:cloudwatch-alarm-template-group:${props.cloudWatchAlarmTemplateGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cloudwatch-alarm-template-group resource.
	 */
	static isValidCloudwatchAlarmTemplateGroupArn(arn: string): boolean {
		return CloudwatchAlarmTemplateGroupArnRegex.test(arn);
	}

	/**
	 * Parses a cloudwatch-alarm-template-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCloudwatchAlarmTemplateGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		cloudWatchAlarmTemplateGroupId: string;
	} {
		const match = CloudwatchAlarmTemplateGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cloudwatch-alarm-template-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			cloudWatchAlarmTemplateGroupId:
				match.groups!.cloudWatchAlarmTemplateGroupId,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterId component of the ARN. */
		readonly clusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:cluster:${props.clusterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterId: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterId: match.groups!.clusterId,
		};
	}

	/**
	 * Builds an ARN for the eventbridge-rule-template resource.
	 */
	static eventbridgeRuleTemplate(props: {
		/** The EventBridgeRuleTemplateId component of the ARN. */
		readonly eventBridgeRuleTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:eventbridge-rule-template:${props.eventBridgeRuleTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eventbridge-rule-template resource.
	 */
	static isValidEventbridgeRuleTemplateArn(arn: string): boolean {
		return EventbridgeRuleTemplateArnRegex.test(arn);
	}

	/**
	 * Parses a eventbridge-rule-template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventbridgeRuleTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventBridgeRuleTemplateId: string;
	} {
		const match = EventbridgeRuleTemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eventbridge-rule-template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventBridgeRuleTemplateId: match.groups!.eventBridgeRuleTemplateId,
		};
	}

	/**
	 * Builds an ARN for the eventbridge-rule-template-group resource.
	 */
	static eventbridgeRuleTemplateGroup(props: {
		/** The EventBridgeRuleTemplateGroupId component of the ARN. */
		readonly eventBridgeRuleTemplateGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:eventbridge-rule-template-group:${props.eventBridgeRuleTemplateGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eventbridge-rule-template-group resource.
	 */
	static isValidEventbridgeRuleTemplateGroupArn(arn: string): boolean {
		return EventbridgeRuleTemplateGroupArnRegex.test(arn);
	}

	/**
	 * Parses a eventbridge-rule-template-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventbridgeRuleTemplateGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventBridgeRuleTemplateGroupId: string;
	} {
		const match = EventbridgeRuleTemplateGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eventbridge-rule-template-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventBridgeRuleTemplateGroupId:
				match.groups!.eventBridgeRuleTemplateGroupId,
		};
	}

	/**
	 * Builds an ARN for the input resource.
	 */
	static input(props: {
		/** The InputId component of the ARN. */
		readonly inputId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:input:${props.inputId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the input resource.
	 */
	static isValidInputArn(arn: string): boolean {
		return InputArnRegex.test(arn);
	}

	/**
	 * Parses a input ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInputArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		inputId: string;
	} {
		const match = InputArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid input ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			inputId: match.groups!.inputId,
		};
	}

	/**
	 * Builds an ARN for the input-device resource.
	 */
	static inputDevice(props: {
		/** The DeviceId component of the ARN. */
		readonly deviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:inputDevice:${props.deviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the input-device resource.
	 */
	static isValidInputDeviceArn(arn: string): boolean {
		return InputDeviceArnRegex.test(arn);
	}

	/**
	 * Parses a input-device ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInputDeviceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		deviceId: string;
	} {
		const match = InputDeviceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid input-device ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			deviceId: match.groups!.deviceId,
		};
	}

	/**
	 * Builds an ARN for the input-security-group resource.
	 */
	static inputSecurityGroup(props: {
		/** The InputSecurityGroupId component of the ARN. */
		readonly inputSecurityGroupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:inputSecurityGroup:${props.inputSecurityGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the input-security-group resource.
	 */
	static isValidInputSecurityGroupArn(arn: string): boolean {
		return InputSecurityGroupArnRegex.test(arn);
	}

	/**
	 * Parses a input-security-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInputSecurityGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		inputSecurityGroupId: string;
	} {
		const match = InputSecurityGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid input-security-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			inputSecurityGroupId: match.groups!.inputSecurityGroupId,
		};
	}

	/**
	 * Builds an ARN for the multiplex resource.
	 */
	static multiplex(props: {
		/** The MultiplexId component of the ARN. */
		readonly multiplexId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:multiplex:${props.multiplexId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the multiplex resource.
	 */
	static isValidMultiplexArn(arn: string): boolean {
		return MultiplexArnRegex.test(arn);
	}

	/**
	 * Parses a multiplex ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMultiplexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		multiplexId: string;
	} {
		const match = MultiplexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid multiplex ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			multiplexId: match.groups!.multiplexId,
		};
	}

	/**
	 * Builds an ARN for the network resource.
	 */
	static network(props: {
		/** The NetworkId component of the ARN. */
		readonly networkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:network:${props.networkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network resource.
	 */
	static isValidNetworkArn(arn: string): boolean {
		return NetworkArnRegex.test(arn);
	}

	/**
	 * Parses a network ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkId: string;
	} {
		const match = NetworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkId: match.groups!.networkId,
		};
	}

	/**
	 * Builds an ARN for the node resource.
	 */
	static node(props: {
		/** The ClusterId component of the ARN. */
		readonly clusterId: string;
		/** The NodeId component of the ARN. */
		readonly nodeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:node:${props.clusterId}/${props.nodeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the node resource.
	 */
	static isValidNodeArn(arn: string): boolean {
		return NodeArnRegex.test(arn);
	}

	/**
	 * Parses a node ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNodeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterId: string;
		nodeId: string;
	} {
		const match = NodeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid node ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterId: match.groups!.clusterId,
			nodeId: match.groups!.nodeId,
		};
	}

	/**
	 * Builds an ARN for the offering resource.
	 */
	static offering(props: {
		/** The OfferingId component of the ARN. */
		readonly offeringId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:offering:${props.offeringId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the offering resource.
	 */
	static isValidOfferingArn(arn: string): boolean {
		return OfferingArnRegex.test(arn);
	}

	/**
	 * Parses a offering ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOfferingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		offeringId: string;
	} {
		const match = OfferingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid offering ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			offeringId: match.groups!.offeringId,
		};
	}

	/**
	 * Builds an ARN for the reservation resource.
	 */
	static reservation(props: {
		/** The ReservationId component of the ARN. */
		readonly reservationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:reservation:${props.reservationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reservation resource.
	 */
	static isValidReservationArn(arn: string): boolean {
		return ReservationArnRegex.test(arn);
	}

	/**
	 * Parses a reservation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReservationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		reservationId: string;
	} {
		const match = ReservationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reservation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			reservationId: match.groups!.reservationId,
		};
	}

	/**
	 * Builds an ARN for the sdi-source resource.
	 */
	static sdiSource(props: {
		/** The SdiSourceId component of the ARN. */
		readonly sdiSourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:sdiSource:${props.sdiSourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the sdi-source resource.
	 */
	static isValidSdiSourceArn(arn: string): boolean {
		return SdiSourceArnRegex.test(arn);
	}

	/**
	 * Parses a sdi-source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSdiSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sdiSourceId: string;
	} {
		const match = SdiSourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid sdi-source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sdiSourceId: match.groups!.sdiSourceId,
		};
	}

	/**
	 * Builds an ARN for the signal-map resource.
	 */
	static signalMap(props: {
		/** The SignalMapId component of the ARN. */
		readonly signalMapId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:medialive:${props.region ?? "*"}:${props.account ?? "*"}:signal-map:${props.signalMapId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the signal-map resource.
	 */
	static isValidSignalMapArn(arn: string): boolean {
		return SignalMapArnRegex.test(arn);
	}

	/**
	 * Parses a signal-map ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSignalMapArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		signalMapId: string;
	} {
		const match = SignalMapArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid signal-map ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			signalMapId: match.groups!.signalMapId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for medialive.
 */
export class MediaLiveOperations {
	/** IAM actions required for the AcceptInputDeviceTransfer API call. */
	static readonly ACCEPT_INPUT_DEVICE_TRANSFER: string[] = [
		"medialive:AcceptInputDeviceTransfer",
	];
	/** IAM actions required for the BatchDelete API call. */
	static readonly BATCH_DELETE: string[] = ["medialive:BatchDelete"];
	/** IAM actions required for the BatchStart API call. */
	static readonly BATCH_START: string[] = ["medialive:BatchStart"];
	/** IAM actions required for the BatchStop API call. */
	static readonly BATCH_STOP: string[] = ["medialive:BatchStop"];
	/** IAM actions required for the BatchUpdateSchedule API call. */
	static readonly BATCH_UPDATE_SCHEDULE: string[] = [
		"medialive:BatchUpdateSchedule",
	];
	/** IAM actions required for the CancelInputDeviceTransfer API call. */
	static readonly CANCEL_INPUT_DEVICE_TRANSFER: string[] = [
		"medialive:CancelInputDeviceTransfer",
	];
	/** IAM actions required for the ClaimDevice API call. */
	static readonly CLAIM_DEVICE: string[] = ["medialive:ClaimDevice"];
	/** IAM actions required for the CreateChannel API call. */
	static readonly CREATE_CHANNEL: string[] = [
		"medialive:CreateChannel",
		"medialive:CreateTags",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateChannelPlacementGroup API call. */
	static readonly CREATE_CHANNEL_PLACEMENT_GROUP: string[] = [
		"medialive:CreateChannelPlacementGroup",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateCloudWatchAlarmTemplate API call. */
	static readonly CREATE_CLOUD_WATCH_ALARM_TEMPLATE: string[] = [
		"medialive:CreateCloudWatchAlarmTemplate",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateCloudWatchAlarmTemplateGroup API call. */
	static readonly CREATE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP: string[] = [
		"medialive:CreateCloudWatchAlarmTemplateGroup",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"medialive:CreateCluster",
		"medialive:CreateTags",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEventBridgeRuleTemplate API call. */
	static readonly CREATE_EVENT_BRIDGE_RULE_TEMPLATE: string[] = [
		"medialive:CreateEventBridgeRuleTemplate",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateEventBridgeRuleTemplateGroup API call. */
	static readonly CREATE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP: string[] = [
		"medialive:CreateEventBridgeRuleTemplateGroup",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateInput API call. */
	static readonly CREATE_INPUT: string[] = [
		"medialive:CreateInput",
		"medialive:CreateTags",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateInputSecurityGroup API call. */
	static readonly CREATE_INPUT_SECURITY_GROUP: string[] = [
		"medialive:CreateInputSecurityGroup",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateMultiplex API call. */
	static readonly CREATE_MULTIPLEX: string[] = [
		"medialive:CreateMultiplex",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateMultiplexProgram API call. */
	static readonly CREATE_MULTIPLEX_PROGRAM: string[] = [
		"medialive:CreateMultiplexProgram",
	];
	/** IAM actions required for the CreateNetwork API call. */
	static readonly CREATE_NETWORK: string[] = [
		"medialive:CreateNetwork",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateNode API call. */
	static readonly CREATE_NODE: string[] = [
		"medialive:CreateNode",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateNodeRegistrationScript API call. */
	static readonly CREATE_NODE_REGISTRATION_SCRIPT: string[] = [
		"medialive:CreateNodeRegistrationScript",
	];
	/** IAM actions required for the CreatePartnerInput API call. */
	static readonly CREATE_PARTNER_INPUT: string[] = [
		"medialive:CreatePartnerInput",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateSdiSource API call. */
	static readonly CREATE_SDI_SOURCE: string[] = [
		"medialive:CreateSdiSource",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateSignalMap API call. */
	static readonly CREATE_SIGNAL_MAP: string[] = [
		"medialive:CreateSignalMap",
		"medialive:CreateTags",
	];
	/** IAM actions required for the CreateTags API call. */
	static readonly CREATE_TAGS: string[] = ["medialive:CreateTags"];
	/** IAM actions required for the DeleteChannel API call. */
	static readonly DELETE_CHANNEL: string[] = ["medialive:DeleteChannel"];
	/** IAM actions required for the DeleteChannelPlacementGroup API call. */
	static readonly DELETE_CHANNEL_PLACEMENT_GROUP: string[] = [
		"medialive:DeleteChannelPlacementGroup",
	];
	/** IAM actions required for the DeleteCloudWatchAlarmTemplate API call. */
	static readonly DELETE_CLOUD_WATCH_ALARM_TEMPLATE: string[] = [
		"medialive:DeleteCloudWatchAlarmTemplate",
	];
	/** IAM actions required for the DeleteCloudWatchAlarmTemplateGroup API call. */
	static readonly DELETE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP: string[] = [
		"medialive:DeleteCloudWatchAlarmTemplateGroup",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["medialive:DeleteCluster"];
	/** IAM actions required for the DeleteEventBridgeRuleTemplate API call. */
	static readonly DELETE_EVENT_BRIDGE_RULE_TEMPLATE: string[] = [
		"medialive:DeleteEventBridgeRuleTemplate",
	];
	/** IAM actions required for the DeleteEventBridgeRuleTemplateGroup API call. */
	static readonly DELETE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP: string[] = [
		"medialive:DeleteEventBridgeRuleTemplateGroup",
	];
	/** IAM actions required for the DeleteInput API call. */
	static readonly DELETE_INPUT: string[] = ["medialive:DeleteInput"];
	/** IAM actions required for the DeleteInputSecurityGroup API call. */
	static readonly DELETE_INPUT_SECURITY_GROUP: string[] = [
		"medialive:DeleteInputSecurityGroup",
	];
	/** IAM actions required for the DeleteMultiplex API call. */
	static readonly DELETE_MULTIPLEX: string[] = ["medialive:DeleteMultiplex"];
	/** IAM actions required for the DeleteMultiplexProgram API call. */
	static readonly DELETE_MULTIPLEX_PROGRAM: string[] = [
		"medialive:DeleteMultiplexProgram",
	];
	/** IAM actions required for the DeleteNetwork API call. */
	static readonly DELETE_NETWORK: string[] = ["medialive:DeleteNetwork"];
	/** IAM actions required for the DeleteNode API call. */
	static readonly DELETE_NODE: string[] = ["medialive:DeleteNode"];
	/** IAM actions required for the DeleteReservation API call. */
	static readonly DELETE_RESERVATION: string[] = [
		"medialive:DeleteReservation",
	];
	/** IAM actions required for the DeleteSchedule API call. */
	static readonly DELETE_SCHEDULE: string[] = ["medialive:DeleteSchedule"];
	/** IAM actions required for the DeleteSdiSource API call. */
	static readonly DELETE_SDI_SOURCE: string[] = ["medialive:DeleteSdiSource"];
	/** IAM actions required for the DeleteSignalMap API call. */
	static readonly DELETE_SIGNAL_MAP: string[] = ["medialive:DeleteSignalMap"];
	/** IAM actions required for the DeleteTags API call. */
	static readonly DELETE_TAGS: string[] = ["medialive:DeleteTags"];
	/** IAM actions required for the DescribeAccountConfiguration API call. */
	static readonly DESCRIBE_ACCOUNT_CONFIGURATION: string[] = [
		"medialive:DescribeAccountConfiguration",
	];
	/** IAM actions required for the DescribeChannel API call. */
	static readonly DESCRIBE_CHANNEL: string[] = ["medialive:DescribeChannel"];
	/** IAM actions required for the DescribeChannelPlacementGroup API call. */
	static readonly DESCRIBE_CHANNEL_PLACEMENT_GROUP: string[] = [
		"medialive:DescribeChannelPlacementGroup",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DESCRIBE_CLUSTER: string[] = ["medialive:DescribeCluster"];
	/** IAM actions required for the DescribeInput API call. */
	static readonly DESCRIBE_INPUT: string[] = ["medialive:DescribeInput"];
	/** IAM actions required for the DescribeInputDevice API call. */
	static readonly DESCRIBE_INPUT_DEVICE: string[] = [
		"medialive:DescribeInputDevice",
	];
	/** IAM actions required for the DescribeInputDeviceThumbnail API call. */
	static readonly DESCRIBE_INPUT_DEVICE_THUMBNAIL: string[] = [
		"medialive:DescribeInputDeviceThumbnail",
	];
	/** IAM actions required for the DescribeInputSecurityGroup API call. */
	static readonly DESCRIBE_INPUT_SECURITY_GROUP: string[] = [
		"medialive:DescribeInputSecurityGroup",
	];
	/** IAM actions required for the DescribeMultiplex API call. */
	static readonly DESCRIBE_MULTIPLEX: string[] = [
		"medialive:DescribeMultiplex",
	];
	/** IAM actions required for the DescribeMultiplexProgram API call. */
	static readonly DESCRIBE_MULTIPLEX_PROGRAM: string[] = [
		"medialive:DescribeMultiplexProgram",
	];
	/** IAM actions required for the DescribeNetwork API call. */
	static readonly DESCRIBE_NETWORK: string[] = ["medialive:DescribeNetwork"];
	/** IAM actions required for the DescribeNode API call. */
	static readonly DESCRIBE_NODE: string[] = ["medialive:DescribeNode"];
	/** IAM actions required for the DescribeOffering API call. */
	static readonly DESCRIBE_OFFERING: string[] = ["medialive:DescribeOffering"];
	/** IAM actions required for the DescribeReservation API call. */
	static readonly DESCRIBE_RESERVATION: string[] = [
		"medialive:DescribeReservation",
	];
	/** IAM actions required for the DescribeSchedule API call. */
	static readonly DESCRIBE_SCHEDULE: string[] = ["medialive:DescribeSchedule"];
	/** IAM actions required for the DescribeSdiSource API call. */
	static readonly DESCRIBE_SDI_SOURCE: string[] = [
		"medialive:DescribeSdiSource",
	];
	/** IAM actions required for the DescribeThumbnails API call. */
	static readonly DESCRIBE_THUMBNAILS: string[] = [
		"medialive:DescribeThumbnails",
	];
	/** IAM actions required for the GetCloudWatchAlarmTemplate API call. */
	static readonly GET_CLOUD_WATCH_ALARM_TEMPLATE: string[] = [
		"medialive:GetCloudWatchAlarmTemplate",
	];
	/** IAM actions required for the GetCloudWatchAlarmTemplateGroup API call. */
	static readonly GET_CLOUD_WATCH_ALARM_TEMPLATE_GROUP: string[] = [
		"medialive:GetCloudWatchAlarmTemplateGroup",
	];
	/** IAM actions required for the GetEventBridgeRuleTemplate API call. */
	static readonly GET_EVENT_BRIDGE_RULE_TEMPLATE: string[] = [
		"medialive:GetEventBridgeRuleTemplate",
	];
	/** IAM actions required for the GetEventBridgeRuleTemplateGroup API call. */
	static readonly GET_EVENT_BRIDGE_RULE_TEMPLATE_GROUP: string[] = [
		"medialive:GetEventBridgeRuleTemplateGroup",
	];
	/** IAM actions required for the GetSignalMap API call. */
	static readonly GET_SIGNAL_MAP: string[] = ["medialive:GetSignalMap"];
	/** IAM actions required for the ListAlerts API call. */
	static readonly LIST_ALERTS: string[] = ["medialive:ListAlerts"];
	/** IAM actions required for the ListChannelPlacementGroups API call. */
	static readonly LIST_CHANNEL_PLACEMENT_GROUPS: string[] = [
		"medialive:ListChannelPlacementGroups",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["medialive:ListChannels"];
	/** IAM actions required for the ListCloudWatchAlarmTemplateGroups API call. */
	static readonly LIST_CLOUD_WATCH_ALARM_TEMPLATE_GROUPS: string[] = [
		"medialive:ListCloudWatchAlarmTemplateGroups",
	];
	/** IAM actions required for the ListCloudWatchAlarmTemplates API call. */
	static readonly LIST_CLOUD_WATCH_ALARM_TEMPLATES: string[] = [
		"medialive:ListCloudWatchAlarmTemplates",
	];
	/** IAM actions required for the ListClusterAlerts API call. */
	static readonly LIST_CLUSTER_ALERTS: string[] = [
		"medialive:ListClusterAlerts",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["medialive:ListClusters"];
	/** IAM actions required for the ListEventBridgeRuleTemplateGroups API call. */
	static readonly LIST_EVENT_BRIDGE_RULE_TEMPLATE_GROUPS: string[] = [
		"medialive:ListEventBridgeRuleTemplateGroups",
	];
	/** IAM actions required for the ListEventBridgeRuleTemplates API call. */
	static readonly LIST_EVENT_BRIDGE_RULE_TEMPLATES: string[] = [
		"medialive:ListEventBridgeRuleTemplates",
	];
	/** IAM actions required for the ListInputDeviceTransfers API call. */
	static readonly LIST_INPUT_DEVICE_TRANSFERS: string[] = [
		"medialive:ListInputDeviceTransfers",
	];
	/** IAM actions required for the ListInputDevices API call. */
	static readonly LIST_INPUT_DEVICES: string[] = ["medialive:ListInputDevices"];
	/** IAM actions required for the ListInputSecurityGroups API call. */
	static readonly LIST_INPUT_SECURITY_GROUPS: string[] = [
		"medialive:ListInputSecurityGroups",
	];
	/** IAM actions required for the ListInputs API call. */
	static readonly LIST_INPUTS: string[] = ["medialive:ListInputs"];
	/** IAM actions required for the ListMultiplexAlerts API call. */
	static readonly LIST_MULTIPLEX_ALERTS: string[] = [
		"medialive:ListMultiplexAlerts",
	];
	/** IAM actions required for the ListMultiplexPrograms API call. */
	static readonly LIST_MULTIPLEX_PROGRAMS: string[] = [
		"medialive:ListMultiplexPrograms",
	];
	/** IAM actions required for the ListMultiplexes API call. */
	static readonly LIST_MULTIPLEXES: string[] = ["medialive:ListMultiplexes"];
	/** IAM actions required for the ListNetworks API call. */
	static readonly LIST_NETWORKS: string[] = ["medialive:ListNetworks"];
	/** IAM actions required for the ListNodes API call. */
	static readonly LIST_NODES: string[] = ["medialive:ListNodes"];
	/** IAM actions required for the ListOfferings API call. */
	static readonly LIST_OFFERINGS: string[] = ["medialive:ListOfferings"];
	/** IAM actions required for the ListReservations API call. */
	static readonly LIST_RESERVATIONS: string[] = ["medialive:ListReservations"];
	/** IAM actions required for the ListSdiSources API call. */
	static readonly LIST_SDI_SOURCES: string[] = ["medialive:ListSdiSources"];
	/** IAM actions required for the ListSignalMaps API call. */
	static readonly LIST_SIGNAL_MAPS: string[] = ["medialive:ListSignalMaps"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"medialive:ListTagsForResource",
	];
	/** IAM actions required for the ListVersions API call. */
	static readonly LIST_VERSIONS: string[] = ["medialive:ListVersions"];
	/** IAM actions required for the PurchaseOffering API call. */
	static readonly PURCHASE_OFFERING: string[] = [
		"medialive:CreateTags",
		"medialive:PurchaseOffering",
	];
	/** IAM actions required for the RebootInputDevice API call. */
	static readonly REBOOT_INPUT_DEVICE: string[] = [
		"medialive:RebootInputDevice",
	];
	/** IAM actions required for the RejectInputDeviceTransfer API call. */
	static readonly REJECT_INPUT_DEVICE_TRANSFER: string[] = [
		"medialive:RejectInputDeviceTransfer",
	];
	/** IAM actions required for the RestartChannelPipelines API call. */
	static readonly RESTART_CHANNEL_PIPELINES: string[] = [
		"medialive:RestartChannelPipelines",
	];
	/** IAM actions required for the StartChannel API call. */
	static readonly START_CHANNEL: string[] = ["medialive:StartChannel"];
	/** IAM actions required for the StartDeleteMonitorDeployment API call. */
	static readonly START_DELETE_MONITOR_DEPLOYMENT: string[] = [
		"medialive:StartDeleteMonitorDeployment",
	];
	/** IAM actions required for the StartInputDevice API call. */
	static readonly START_INPUT_DEVICE: string[] = ["medialive:StartInputDevice"];
	/** IAM actions required for the StartInputDeviceMaintenanceWindow API call. */
	static readonly START_INPUT_DEVICE_MAINTENANCE_WINDOW: string[] = [
		"medialive:StartInputDeviceMaintenanceWindow",
	];
	/** IAM actions required for the StartMonitorDeployment API call. */
	static readonly START_MONITOR_DEPLOYMENT: string[] = [
		"medialive:StartMonitorDeployment",
	];
	/** IAM actions required for the StartMultiplex API call. */
	static readonly START_MULTIPLEX: string[] = ["medialive:StartMultiplex"];
	/** IAM actions required for the StartUpdateSignalMap API call. */
	static readonly START_UPDATE_SIGNAL_MAP: string[] = [
		"medialive:StartUpdateSignalMap",
	];
	/** IAM actions required for the StopChannel API call. */
	static readonly STOP_CHANNEL: string[] = ["medialive:StopChannel"];
	/** IAM actions required for the StopInputDevice API call. */
	static readonly STOP_INPUT_DEVICE: string[] = ["medialive:StopInputDevice"];
	/** IAM actions required for the StopMultiplex API call. */
	static readonly STOP_MULTIPLEX: string[] = ["medialive:StopMultiplex"];
	/** IAM actions required for the TransferInputDevice API call. */
	static readonly TRANSFER_INPUT_DEVICE: string[] = [
		"medialive:TransferInputDevice",
	];
	/** IAM actions required for the UpdateAccountConfiguration API call. */
	static readonly UPDATE_ACCOUNT_CONFIGURATION: string[] = [
		"medialive:UpdateAccountConfiguration",
	];
	/** IAM actions required for the UpdateChannel API call. */
	static readonly UPDATE_CHANNEL: string[] = [
		"medialive:CreateTags",
		"iam:PassRole",
		"medialive:UpdateChannel",
	];
	/** IAM actions required for the UpdateChannelClass API call. */
	static readonly UPDATE_CHANNEL_CLASS: string[] = [
		"medialive:UpdateChannelClass",
	];
	/** IAM actions required for the UpdateChannelPlacementGroup API call. */
	static readonly UPDATE_CHANNEL_PLACEMENT_GROUP: string[] = [
		"medialive:UpdateChannelPlacementGroup",
	];
	/** IAM actions required for the UpdateCloudWatchAlarmTemplate API call. */
	static readonly UPDATE_CLOUD_WATCH_ALARM_TEMPLATE: string[] = [
		"medialive:UpdateCloudWatchAlarmTemplate",
	];
	/** IAM actions required for the UpdateCloudWatchAlarmTemplateGroup API call. */
	static readonly UPDATE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP: string[] = [
		"medialive:UpdateCloudWatchAlarmTemplateGroup",
	];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = ["medialive:UpdateCluster"];
	/** IAM actions required for the UpdateEventBridgeRuleTemplate API call. */
	static readonly UPDATE_EVENT_BRIDGE_RULE_TEMPLATE: string[] = [
		"medialive:UpdateEventBridgeRuleTemplate",
	];
	/** IAM actions required for the UpdateEventBridgeRuleTemplateGroup API call. */
	static readonly UPDATE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP: string[] = [
		"medialive:UpdateEventBridgeRuleTemplateGroup",
	];
	/** IAM actions required for the UpdateInput API call. */
	static readonly UPDATE_INPUT: string[] = [
		"iam:PassRole",
		"medialive:UpdateInput",
	];
	/** IAM actions required for the UpdateInputDevice API call. */
	static readonly UPDATE_INPUT_DEVICE: string[] = [
		"iam:PassRole",
		"medialive:UpdateInputDevice",
	];
	/** IAM actions required for the UpdateInputSecurityGroup API call. */
	static readonly UPDATE_INPUT_SECURITY_GROUP: string[] = [
		"medialive:CreateTags",
		"medialive:UpdateInputSecurityGroup",
	];
	/** IAM actions required for the UpdateMultiplex API call. */
	static readonly UPDATE_MULTIPLEX: string[] = ["medialive:UpdateMultiplex"];
	/** IAM actions required for the UpdateMultiplexProgram API call. */
	static readonly UPDATE_MULTIPLEX_PROGRAM: string[] = [
		"medialive:UpdateMultiplexProgram",
	];
	/** IAM actions required for the UpdateNetwork API call. */
	static readonly UPDATE_NETWORK: string[] = ["medialive:UpdateNetwork"];
	/** IAM actions required for the UpdateNode API call. */
	static readonly UPDATE_NODE: string[] = ["medialive:UpdateNode"];
	/** IAM actions required for the UpdateNodeState API call. */
	static readonly UPDATE_NODE_STATE: string[] = ["medialive:UpdateNodeState"];
	/** IAM actions required for the UpdateReservation API call. */
	static readonly UPDATE_RESERVATION: string[] = [
		"medialive:UpdateReservation",
	];
	/** IAM actions required for the UpdateSdiSource API call. */
	static readonly UPDATE_SDI_SOURCE: string[] = ["medialive:UpdateSdiSource"];
}

/**
 * Condition key constants and builders for medialive.
 */
export class MediaLiveConditions {
	/** Condition keys applicable to the CreateChannel action. */
	static readonly CREATE_CHANNEL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateChannelPlacementGroup action. */
	static readonly CREATE_CHANNEL_PLACEMENT_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCloudWatchAlarmTemplate action. */
	static readonly CREATE_CLOUD_WATCH_ALARM_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCloudWatchAlarmTemplateGroup action. */
	static readonly CREATE_CLOUD_WATCH_ALARM_TEMPLATE_GROUP_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventBridgeRuleTemplate action. */
	static readonly CREATE_EVENT_BRIDGE_RULE_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateEventBridgeRuleTemplateGroup action. */
	static readonly CREATE_EVENT_BRIDGE_RULE_TEMPLATE_GROUP_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateInput action. */
	static readonly CREATE_INPUT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInputSecurityGroup action. */
	static readonly CREATE_INPUT_SECURITY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMultiplex action. */
	static readonly CREATE_MULTIPLEX_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNetwork action. */
	static readonly CREATE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNode action. */
	static readonly CREATE_NODE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePartnerInput action. */
	static readonly CREATE_PARTNER_INPUT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSdiSource action. */
	static readonly CREATE_SDI_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSignalMap action. */
	static readonly CREATE_SIGNAL_MAP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTags action. */
	static readonly CREATE_TAGS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteTags action. */
	static readonly DELETE_TAGS_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the PurchaseOffering action. */
	static readonly PURCHASE_OFFERING_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateChannelPlacementGroup action. */
	static readonly UPDATE_CHANNEL_PLACEMENT_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UPDATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateInputSecurityGroup action. */
	static readonly UPDATE_INPUT_SECURITY_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNetwork action. */
	static readonly UPDATE_NETWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNode action. */
	static readonly UPDATE_NODE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateNodeState action. */
	static readonly UPDATE_NODE_STATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateSdiSource action. */
	static readonly UPDATE_SDI_SOURCE_CONDITION_KEYS: string[] = [
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
