// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/notifications.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the notifications service.
 */
export class NotificationsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "notifications";

	/** [Write] notifications:AssociateChannel */
	static readonly ASSOCIATE_CHANNEL = "notifications:AssociateChannel";
	/** [Write] notifications:AssociateManagedNotificationAccountContact */
	static readonly ASSOCIATE_MANAGED_NOTIFICATION_ACCOUNT_CONTACT =
		"notifications:AssociateManagedNotificationAccountContact";
	/** [Write] notifications:AssociateManagedNotificationAdditionalChannel */
	static readonly ASSOCIATE_MANAGED_NOTIFICATION_ADDITIONAL_CHANNEL =
		"notifications:AssociateManagedNotificationAdditionalChannel";
	/** [Write] notifications:AssociateOrganizationalUnit */
	static readonly ASSOCIATE_ORGANIZATIONAL_UNIT =
		"notifications:AssociateOrganizationalUnit";
	/** [Write] notifications:CreateEventRule */
	static readonly CREATE_EVENT_RULE = "notifications:CreateEventRule";
	/** [Write] notifications:CreateNotificationConfiguration */
	static readonly CREATE_NOTIFICATION_CONFIGURATION =
		"notifications:CreateNotificationConfiguration";
	/** [Write] notifications:DeleteEventRule */
	static readonly DELETE_EVENT_RULE = "notifications:DeleteEventRule";
	/** [Write] notifications:DeleteNotificationConfiguration */
	static readonly DELETE_NOTIFICATION_CONFIGURATION =
		"notifications:DeleteNotificationConfiguration";
	/** [Write] notifications:DeregisterNotificationHub */
	static readonly DEREGISTER_NOTIFICATION_HUB =
		"notifications:DeregisterNotificationHub";
	/** [PermissionManagement] notifications:DisableNotificationsAccessForOrganization */
	static readonly DISABLE_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION =
		"notifications:DisableNotificationsAccessForOrganization";
	/** [Write] notifications:DisassociateChannel */
	static readonly DISASSOCIATE_CHANNEL = "notifications:DisassociateChannel";
	/** [Write] notifications:DisassociateManagedNotificationAccountContact */
	static readonly DISASSOCIATE_MANAGED_NOTIFICATION_ACCOUNT_CONTACT =
		"notifications:DisassociateManagedNotificationAccountContact";
	/** [Write] notifications:DisassociateManagedNotificationAdditionalChannel */
	static readonly DISASSOCIATE_MANAGED_NOTIFICATION_ADDITIONAL_CHANNEL =
		"notifications:DisassociateManagedNotificationAdditionalChannel";
	/** [Write] notifications:DisassociateOrganizationalUnit */
	static readonly DISASSOCIATE_ORGANIZATIONAL_UNIT =
		"notifications:DisassociateOrganizationalUnit";
	/** [PermissionManagement] notifications:EnableNotificationsAccessForOrganization */
	static readonly ENABLE_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION =
		"notifications:EnableNotificationsAccessForOrganization";
	/** [Read] notifications:GetEventRule */
	static readonly GET_EVENT_RULE = "notifications:GetEventRule";
	/** [Read] notifications:GetFeatureOptInStatus */
	static readonly GET_FEATURE_OPT_IN_STATUS =
		"notifications:GetFeatureOptInStatus";
	/** [Read] notifications:GetManagedNotificationChildEvent */
	static readonly GET_MANAGED_NOTIFICATION_CHILD_EVENT =
		"notifications:GetManagedNotificationChildEvent";
	/** [Read] notifications:GetManagedNotificationConfiguration */
	static readonly GET_MANAGED_NOTIFICATION_CONFIGURATION =
		"notifications:GetManagedNotificationConfiguration";
	/** [Read] notifications:GetManagedNotificationEvent */
	static readonly GET_MANAGED_NOTIFICATION_EVENT =
		"notifications:GetManagedNotificationEvent";
	/** [Read] notifications:GetNotificationConfiguration */
	static readonly GET_NOTIFICATION_CONFIGURATION =
		"notifications:GetNotificationConfiguration";
	/** [Read] notifications:GetNotificationEvent */
	static readonly GET_NOTIFICATION_EVENT = "notifications:GetNotificationEvent";
	/** [Read] notifications:GetNotificationsAccessForOrganization */
	static readonly GET_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION =
		"notifications:GetNotificationsAccessForOrganization";
	/** [List] notifications:ListChannels */
	static readonly LIST_CHANNELS = "notifications:ListChannels";
	/** [List] notifications:ListEventRules */
	static readonly LIST_EVENT_RULES = "notifications:ListEventRules";
	/** [List] notifications:ListManagedNotificationChannelAssociations */
	static readonly LIST_MANAGED_NOTIFICATION_CHANNEL_ASSOCIATIONS =
		"notifications:ListManagedNotificationChannelAssociations";
	/** [List] notifications:ListManagedNotificationChildEvents */
	static readonly LIST_MANAGED_NOTIFICATION_CHILD_EVENTS =
		"notifications:ListManagedNotificationChildEvents";
	/** [List] notifications:ListManagedNotificationConfigurations */
	static readonly LIST_MANAGED_NOTIFICATION_CONFIGURATIONS =
		"notifications:ListManagedNotificationConfigurations";
	/** [List] notifications:ListManagedNotificationEvents */
	static readonly LIST_MANAGED_NOTIFICATION_EVENTS =
		"notifications:ListManagedNotificationEvents";
	/** [List] notifications:ListMemberAccounts */
	static readonly LIST_MEMBER_ACCOUNTS = "notifications:ListMemberAccounts";
	/** [List] notifications:ListNotificationConfigurations */
	static readonly LIST_NOTIFICATION_CONFIGURATIONS =
		"notifications:ListNotificationConfigurations";
	/** [List] notifications:ListNotificationEvents */
	static readonly LIST_NOTIFICATION_EVENTS =
		"notifications:ListNotificationEvents";
	/** [List] notifications:ListNotificationHubs */
	static readonly LIST_NOTIFICATION_HUBS = "notifications:ListNotificationHubs";
	/** [List] notifications:ListOrganizationalUnits */
	static readonly LIST_ORGANIZATIONAL_UNITS =
		"notifications:ListOrganizationalUnits";
	/** [List] notifications:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "notifications:ListTagsForResource";
	/** [Write] notifications:PutFeatureOptInStatus */
	static readonly PUT_FEATURE_OPT_IN_STATUS =
		"notifications:PutFeatureOptInStatus";
	/** [Write] notifications:RegisterNotificationHub */
	static readonly REGISTER_NOTIFICATION_HUB =
		"notifications:RegisterNotificationHub";
	/** [Tagging] notifications:TagResource */
	static readonly TAG_RESOURCE = "notifications:TagResource";
	/** [Tagging] notifications:UntagResource */
	static readonly UNTAG_RESOURCE = "notifications:UntagResource";
	/** [Write] notifications:UpdateEventRule */
	static readonly UPDATE_EVENT_RULE = "notifications:UpdateEventRule";
	/** [Write] notifications:UpdateNotificationConfiguration */
	static readonly UPDATE_NOTIFICATION_CONFIGURATION =
		"notifications:UpdateNotificationConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		NotificationsActions.GET_EVENT_RULE,
		NotificationsActions.GET_FEATURE_OPT_IN_STATUS,
		NotificationsActions.GET_MANAGED_NOTIFICATION_CHILD_EVENT,
		NotificationsActions.GET_MANAGED_NOTIFICATION_CONFIGURATION,
		NotificationsActions.GET_MANAGED_NOTIFICATION_EVENT,
		NotificationsActions.GET_NOTIFICATION_CONFIGURATION,
		NotificationsActions.GET_NOTIFICATION_EVENT,
		NotificationsActions.GET_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		NotificationsActions.ASSOCIATE_CHANNEL,
		NotificationsActions.ASSOCIATE_MANAGED_NOTIFICATION_ACCOUNT_CONTACT,
		NotificationsActions.ASSOCIATE_MANAGED_NOTIFICATION_ADDITIONAL_CHANNEL,
		NotificationsActions.ASSOCIATE_ORGANIZATIONAL_UNIT,
		NotificationsActions.CREATE_EVENT_RULE,
		NotificationsActions.CREATE_NOTIFICATION_CONFIGURATION,
		NotificationsActions.DELETE_EVENT_RULE,
		NotificationsActions.DELETE_NOTIFICATION_CONFIGURATION,
		NotificationsActions.DEREGISTER_NOTIFICATION_HUB,
		NotificationsActions.DISASSOCIATE_CHANNEL,
		NotificationsActions.DISASSOCIATE_MANAGED_NOTIFICATION_ACCOUNT_CONTACT,
		NotificationsActions.DISASSOCIATE_MANAGED_NOTIFICATION_ADDITIONAL_CHANNEL,
		NotificationsActions.DISASSOCIATE_ORGANIZATIONAL_UNIT,
		NotificationsActions.PUT_FEATURE_OPT_IN_STATUS,
		NotificationsActions.REGISTER_NOTIFICATION_HUB,
		NotificationsActions.UPDATE_EVENT_RULE,
		NotificationsActions.UPDATE_NOTIFICATION_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		NotificationsActions.LIST_CHANNELS,
		NotificationsActions.LIST_EVENT_RULES,
		NotificationsActions.LIST_MANAGED_NOTIFICATION_CHANNEL_ASSOCIATIONS,
		NotificationsActions.LIST_MANAGED_NOTIFICATION_CHILD_EVENTS,
		NotificationsActions.LIST_MANAGED_NOTIFICATION_CONFIGURATIONS,
		NotificationsActions.LIST_MANAGED_NOTIFICATION_EVENTS,
		NotificationsActions.LIST_MEMBER_ACCOUNTS,
		NotificationsActions.LIST_NOTIFICATION_CONFIGURATIONS,
		NotificationsActions.LIST_NOTIFICATION_EVENTS,
		NotificationsActions.LIST_NOTIFICATION_HUBS,
		NotificationsActions.LIST_ORGANIZATIONAL_UNITS,
		NotificationsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		NotificationsActions.DISABLE_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION,
		NotificationsActions.ENABLE_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		NotificationsActions.TAG_RESOURCE,
		NotificationsActions.UNTAG_RESOURCE,
	];
}

const EventRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):configuration/(?<notificationConfigurationId>[^:/?]+)/rule/(?<eventRuleId>[^:/?]+)$",
);
const ManagedNotificationChildEventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):managed-notification-configuration/category/(?<category>[^:/?]+)/sub-category/(?<subcategory>[^:/?]+)/event/(?<notificationEventId>[^:/?]+)/child-event/(?<notificationChildEventId>[^:/?]+)$",
);
const ManagedNotificationConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):managed-notification-configuration/category/(?<category>[^:/?]+)/sub-category/(?<subcategory>[^:/?]+)$",
);
const ManagedNotificationEventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):managed-notification-configuration/category/(?<category>[^:/?]+)/sub-category/(?<subcategory>[^:/?]+)/event/(?<notificationEventId>[^:/?]+)$",
);
const NotificationConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):configuration/(?<notificationConfigurationId>[^:/?]+)$",
);
const NotificationEventArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):notifications:(?<region>[^:]*):(?<account>[^:]*):configuration/(?<notificationConfigurationId>[^:/?]+)/event/(?<notificationEventId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for notifications resources.
 */
export class NotificationsResources {
	/**
	 * Builds an ARN for the EventRule resource.
	 */
	static eventRule(props: {
		/** The NotificationConfigurationId component of the ARN. */
		readonly notificationConfigurationId: string;
		/** The EventRuleId component of the ARN. */
		readonly eventRuleId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:notifications::${props.account ?? "*"}:configuration/${props.notificationConfigurationId}/rule/${props.eventRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the EventRule resource.
	 */
	static isValidEventRuleArn(arn: string): boolean {
		return EventRuleArnRegex.test(arn);
	}

	/**
	 * Parses a EventRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventRuleArn(arn: string): {
		partition: string;
		account: string;
		notificationConfigurationId: string;
		eventRuleId: string;
	} {
		const match = EventRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid EventRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			notificationConfigurationId: match.groups!.notificationConfigurationId,
			eventRuleId: match.groups!.eventRuleId,
		};
	}

	/**
	 * Builds an ARN for the ManagedNotificationChildEvent resource.
	 */
	static managedNotificationChildEvent(props: {
		/** The Category component of the ARN. */
		readonly category: string;
		/** The Subcategory component of the ARN. */
		readonly subcategory: string;
		/** The NotificationEventId component of the ARN. */
		readonly notificationEventId: string;
		/** The NotificationChildEventId component of the ARN. */
		readonly notificationChildEventId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:notifications::${props.account ?? "*"}:managed-notification-configuration/category/${props.category}/sub-category/${props.subcategory}/event/${props.notificationEventId}/child-event/${props.notificationChildEventId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ManagedNotificationChildEvent resource.
	 */
	static isValidManagedNotificationChildEventArn(arn: string): boolean {
		return ManagedNotificationChildEventArnRegex.test(arn);
	}

	/**
	 * Parses a ManagedNotificationChildEvent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedNotificationChildEventArn(arn: string): {
		partition: string;
		account: string;
		category: string;
		subcategory: string;
		notificationEventId: string;
		notificationChildEventId: string;
	} {
		const match = ManagedNotificationChildEventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ManagedNotificationChildEvent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			category: match.groups!.category,
			subcategory: match.groups!.subcategory,
			notificationEventId: match.groups!.notificationEventId,
			notificationChildEventId: match.groups!.notificationChildEventId,
		};
	}

	/**
	 * Builds an ARN for the ManagedNotificationConfiguration resource.
	 */
	static managedNotificationConfiguration(props: {
		/** The Category component of the ARN. */
		readonly category: string;
		/** The Subcategory component of the ARN. */
		readonly subcategory: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:notifications::${props.account ?? "*"}:managed-notification-configuration/category/${props.category}/sub-category/${props.subcategory}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ManagedNotificationConfiguration resource.
	 */
	static isValidManagedNotificationConfigurationArn(arn: string): boolean {
		return ManagedNotificationConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a ManagedNotificationConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedNotificationConfigurationArn(arn: string): {
		partition: string;
		account: string;
		category: string;
		subcategory: string;
	} {
		const match = ManagedNotificationConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ManagedNotificationConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			category: match.groups!.category,
			subcategory: match.groups!.subcategory,
		};
	}

	/**
	 * Builds an ARN for the ManagedNotificationEvent resource.
	 */
	static managedNotificationEvent(props: {
		/** The Category component of the ARN. */
		readonly category: string;
		/** The Subcategory component of the ARN. */
		readonly subcategory: string;
		/** The NotificationEventId component of the ARN. */
		readonly notificationEventId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:notifications::${props.account ?? "*"}:managed-notification-configuration/category/${props.category}/sub-category/${props.subcategory}/event/${props.notificationEventId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ManagedNotificationEvent resource.
	 */
	static isValidManagedNotificationEventArn(arn: string): boolean {
		return ManagedNotificationEventArnRegex.test(arn);
	}

	/**
	 * Parses a ManagedNotificationEvent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedNotificationEventArn(arn: string): {
		partition: string;
		account: string;
		category: string;
		subcategory: string;
		notificationEventId: string;
	} {
		const match = ManagedNotificationEventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ManagedNotificationEvent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			category: match.groups!.category,
			subcategory: match.groups!.subcategory,
			notificationEventId: match.groups!.notificationEventId,
		};
	}

	/**
	 * Builds an ARN for the NotificationConfiguration resource.
	 */
	static notificationConfiguration(props: {
		/** The NotificationConfigurationId component of the ARN. */
		readonly notificationConfigurationId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:notifications::${props.account ?? "*"}:configuration/${props.notificationConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the NotificationConfiguration resource.
	 */
	static isValidNotificationConfigurationArn(arn: string): boolean {
		return NotificationConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a NotificationConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotificationConfigurationArn(arn: string): {
		partition: string;
		account: string;
		notificationConfigurationId: string;
	} {
		const match = NotificationConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid NotificationConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			notificationConfigurationId: match.groups!.notificationConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the NotificationEvent resource.
	 */
	static notificationEvent(props: {
		/** The NotificationConfigurationId component of the ARN. */
		readonly notificationConfigurationId: string;
		/** The NotificationEventId component of the ARN. */
		readonly notificationEventId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:notifications:${props.region ?? "*"}:${props.account ?? "*"}:configuration/${props.notificationConfigurationId}/event/${props.notificationEventId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the NotificationEvent resource.
	 */
	static isValidNotificationEventArn(arn: string): boolean {
		return NotificationEventArnRegex.test(arn);
	}

	/**
	 * Parses a NotificationEvent ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNotificationEventArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		notificationConfigurationId: string;
		notificationEventId: string;
	} {
		const match = NotificationEventArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid NotificationEvent ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			notificationConfigurationId: match.groups!.notificationConfigurationId,
			notificationEventId: match.groups!.notificationEventId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for notifications.
 */
export class NotificationsOperations {
	/** IAM actions required for the AssociateChannel API call. */
	static readonly ASSOCIATE_CHANNEL: string[] = [
		"notifications:AssociateChannel",
	];
	/** IAM actions required for the AssociateManagedNotificationAccountContact API call. */
	static readonly ASSOCIATE_MANAGED_NOTIFICATION_ACCOUNT_CONTACT: string[] = [
		"notifications:AssociateManagedNotificationAccountContact",
	];
	/** IAM actions required for the AssociateManagedNotificationAdditionalChannel API call. */
	static readonly ASSOCIATE_MANAGED_NOTIFICATION_ADDITIONAL_CHANNEL: string[] =
		["notifications:AssociateManagedNotificationAdditionalChannel"];
	/** IAM actions required for the AssociateOrganizationalUnit API call. */
	static readonly ASSOCIATE_ORGANIZATIONAL_UNIT: string[] = [
		"notifications:AssociateOrganizationalUnit",
	];
	/** IAM actions required for the CreateEventRule API call. */
	static readonly CREATE_EVENT_RULE: string[] = [
		"notifications:CreateEventRule",
	];
	/** IAM actions required for the CreateNotificationConfiguration API call. */
	static readonly CREATE_NOTIFICATION_CONFIGURATION: string[] = [
		"notifications:CreateNotificationConfiguration",
		"notifications:TagResource",
	];
	/** IAM actions required for the DeleteEventRule API call. */
	static readonly DELETE_EVENT_RULE: string[] = [
		"notifications:DeleteEventRule",
	];
	/** IAM actions required for the DeleteNotificationConfiguration API call. */
	static readonly DELETE_NOTIFICATION_CONFIGURATION: string[] = [
		"notifications:DeleteNotificationConfiguration",
	];
	/** IAM actions required for the DeregisterNotificationHub API call. */
	static readonly DEREGISTER_NOTIFICATION_HUB: string[] = [
		"notifications:DeregisterNotificationHub",
	];
	/** IAM actions required for the DisableNotificationsAccessForOrganization API call. */
	static readonly DISABLE_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION: string[] = [
		"notifications:DisableNotificationsAccessForOrganization",
	];
	/** IAM actions required for the DisassociateChannel API call. */
	static readonly DISASSOCIATE_CHANNEL: string[] = [
		"notifications:DisassociateChannel",
	];
	/** IAM actions required for the DisassociateManagedNotificationAccountContact API call. */
	static readonly DISASSOCIATE_MANAGED_NOTIFICATION_ACCOUNT_CONTACT: string[] =
		["notifications:DisassociateManagedNotificationAccountContact"];
	/** IAM actions required for the DisassociateManagedNotificationAdditionalChannel API call. */
	static readonly DISASSOCIATE_MANAGED_NOTIFICATION_ADDITIONAL_CHANNEL: string[] =
		["notifications:DisassociateManagedNotificationAdditionalChannel"];
	/** IAM actions required for the DisassociateOrganizationalUnit API call. */
	static readonly DISASSOCIATE_ORGANIZATIONAL_UNIT: string[] = [
		"notifications:DisassociateOrganizationalUnit",
	];
	/** IAM actions required for the EnableNotificationsAccessForOrganization API call. */
	static readonly ENABLE_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION: string[] = [
		"notifications:EnableNotificationsAccessForOrganization",
	];
	/** IAM actions required for the GetEventRule API call. */
	static readonly GET_EVENT_RULE: string[] = ["notifications:GetEventRule"];
	/** IAM actions required for the GetManagedNotificationChildEvent API call. */
	static readonly GET_MANAGED_NOTIFICATION_CHILD_EVENT: string[] = [
		"notifications:GetManagedNotificationChildEvent",
	];
	/** IAM actions required for the GetManagedNotificationConfiguration API call. */
	static readonly GET_MANAGED_NOTIFICATION_CONFIGURATION: string[] = [
		"notifications:GetManagedNotificationConfiguration",
	];
	/** IAM actions required for the GetManagedNotificationEvent API call. */
	static readonly GET_MANAGED_NOTIFICATION_EVENT: string[] = [
		"notifications:GetManagedNotificationEvent",
	];
	/** IAM actions required for the GetNotificationConfiguration API call. */
	static readonly GET_NOTIFICATION_CONFIGURATION: string[] = [
		"notifications:GetNotificationConfiguration",
	];
	/** IAM actions required for the GetNotificationEvent API call. */
	static readonly GET_NOTIFICATION_EVENT: string[] = [
		"notifications:GetNotificationEvent",
	];
	/** IAM actions required for the GetNotificationsAccessForOrganization API call. */
	static readonly GET_NOTIFICATIONS_ACCESS_FOR_ORGANIZATION: string[] = [
		"notifications:GetNotificationsAccessForOrganization",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly LIST_CHANNELS: string[] = ["notifications:ListChannels"];
	/** IAM actions required for the ListEventRules API call. */
	static readonly LIST_EVENT_RULES: string[] = ["notifications:ListEventRules"];
	/** IAM actions required for the ListManagedNotificationChannelAssociations API call. */
	static readonly LIST_MANAGED_NOTIFICATION_CHANNEL_ASSOCIATIONS: string[] = [
		"notifications:ListManagedNotificationChannelAssociations",
	];
	/** IAM actions required for the ListManagedNotificationChildEvents API call. */
	static readonly LIST_MANAGED_NOTIFICATION_CHILD_EVENTS: string[] = [
		"notifications:ListManagedNotificationChildEvents",
	];
	/** IAM actions required for the ListManagedNotificationConfigurations API call. */
	static readonly LIST_MANAGED_NOTIFICATION_CONFIGURATIONS: string[] = [
		"notifications:ListManagedNotificationConfigurations",
	];
	/** IAM actions required for the ListManagedNotificationEvents API call. */
	static readonly LIST_MANAGED_NOTIFICATION_EVENTS: string[] = [
		"notifications:ListManagedNotificationEvents",
	];
	/** IAM actions required for the ListMemberAccounts API call. */
	static readonly LIST_MEMBER_ACCOUNTS: string[] = [
		"notifications:ListMemberAccounts",
	];
	/** IAM actions required for the ListNotificationConfigurations API call. */
	static readonly LIST_NOTIFICATION_CONFIGURATIONS: string[] = [
		"notifications:ListNotificationConfigurations",
	];
	/** IAM actions required for the ListNotificationEvents API call. */
	static readonly LIST_NOTIFICATION_EVENTS: string[] = [
		"notifications:ListNotificationEvents",
	];
	/** IAM actions required for the ListNotificationHubs API call. */
	static readonly LIST_NOTIFICATION_HUBS: string[] = [
		"notifications:ListNotificationHubs",
	];
	/** IAM actions required for the ListOrganizationalUnits API call. */
	static readonly LIST_ORGANIZATIONAL_UNITS: string[] = [
		"notifications:ListOrganizationalUnits",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"notifications:ListTagsForResource",
	];
	/** IAM actions required for the RegisterNotificationHub API call. */
	static readonly REGISTER_NOTIFICATION_HUB: string[] = [
		"notifications:RegisterNotificationHub",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["notifications:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["notifications:UntagResource"];
	/** IAM actions required for the UpdateEventRule API call. */
	static readonly UPDATE_EVENT_RULE: string[] = [
		"notifications:UpdateEventRule",
	];
	/** IAM actions required for the UpdateNotificationConfiguration API call. */
	static readonly UPDATE_NOTIFICATION_CONFIGURATION: string[] = [
		"notifications:UpdateNotificationConfiguration",
	];
}

/**
 * Condition key constants and builders for notifications.
 */
export class NotificationsConditions {
	/** Condition keys applicable to the CreateNotificationConfiguration action. */
	static readonly CREATE_NOTIFICATION_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
