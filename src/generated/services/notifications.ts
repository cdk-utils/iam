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
	static readonly AssociateChannel = "notifications:AssociateChannel";
	/** [Write] notifications:AssociateManagedNotificationAccountContact */
	static readonly AssociateManagedNotificationAccountContact =
		"notifications:AssociateManagedNotificationAccountContact";
	/** [Write] notifications:AssociateManagedNotificationAdditionalChannel */
	static readonly AssociateManagedNotificationAdditionalChannel =
		"notifications:AssociateManagedNotificationAdditionalChannel";
	/** [Write] notifications:AssociateOrganizationalUnit */
	static readonly AssociateOrganizationalUnit =
		"notifications:AssociateOrganizationalUnit";
	/** [Write] notifications:CreateEventRule */
	static readonly CreateEventRule = "notifications:CreateEventRule";
	/** [Write] notifications:CreateNotificationConfiguration */
	static readonly CreateNotificationConfiguration =
		"notifications:CreateNotificationConfiguration";
	/** [Write] notifications:DeleteEventRule */
	static readonly DeleteEventRule = "notifications:DeleteEventRule";
	/** [Write] notifications:DeleteNotificationConfiguration */
	static readonly DeleteNotificationConfiguration =
		"notifications:DeleteNotificationConfiguration";
	/** [Write] notifications:DeregisterNotificationHub */
	static readonly DeregisterNotificationHub =
		"notifications:DeregisterNotificationHub";
	/** [PermissionManagement] notifications:DisableNotificationsAccessForOrganization */
	static readonly DisableNotificationsAccessForOrganization =
		"notifications:DisableNotificationsAccessForOrganization";
	/** [Write] notifications:DisassociateChannel */
	static readonly DisassociateChannel = "notifications:DisassociateChannel";
	/** [Write] notifications:DisassociateManagedNotificationAccountContact */
	static readonly DisassociateManagedNotificationAccountContact =
		"notifications:DisassociateManagedNotificationAccountContact";
	/** [Write] notifications:DisassociateManagedNotificationAdditionalChannel */
	static readonly DisassociateManagedNotificationAdditionalChannel =
		"notifications:DisassociateManagedNotificationAdditionalChannel";
	/** [Write] notifications:DisassociateOrganizationalUnit */
	static readonly DisassociateOrganizationalUnit =
		"notifications:DisassociateOrganizationalUnit";
	/** [PermissionManagement] notifications:EnableNotificationsAccessForOrganization */
	static readonly EnableNotificationsAccessForOrganization =
		"notifications:EnableNotificationsAccessForOrganization";
	/** [Read] notifications:GetEventRule */
	static readonly actionGetEventRule = "notifications:GetEventRule";
	/** [Read] notifications:GetFeatureOptInStatus */
	static readonly actionGetFeatureOptInStatus =
		"notifications:GetFeatureOptInStatus";
	/** [Read] notifications:GetManagedNotificationChildEvent */
	static readonly actionGetManagedNotificationChildEvent =
		"notifications:GetManagedNotificationChildEvent";
	/** [Read] notifications:GetManagedNotificationConfiguration */
	static readonly actionGetManagedNotificationConfiguration =
		"notifications:GetManagedNotificationConfiguration";
	/** [Read] notifications:GetManagedNotificationEvent */
	static readonly actionGetManagedNotificationEvent =
		"notifications:GetManagedNotificationEvent";
	/** [Read] notifications:GetNotificationConfiguration */
	static readonly actionGetNotificationConfiguration =
		"notifications:GetNotificationConfiguration";
	/** [Read] notifications:GetNotificationEvent */
	static readonly actionGetNotificationEvent =
		"notifications:GetNotificationEvent";
	/** [Read] notifications:GetNotificationsAccessForOrganization */
	static readonly actionGetNotificationsAccessForOrganization =
		"notifications:GetNotificationsAccessForOrganization";
	/** [List] notifications:ListChannels */
	static readonly ListChannels = "notifications:ListChannels";
	/** [List] notifications:ListEventRules */
	static readonly ListEventRules = "notifications:ListEventRules";
	/** [List] notifications:ListManagedNotificationChannelAssociations */
	static readonly ListManagedNotificationChannelAssociations =
		"notifications:ListManagedNotificationChannelAssociations";
	/** [List] notifications:ListManagedNotificationChildEvents */
	static readonly ListManagedNotificationChildEvents =
		"notifications:ListManagedNotificationChildEvents";
	/** [List] notifications:ListManagedNotificationConfigurations */
	static readonly ListManagedNotificationConfigurations =
		"notifications:ListManagedNotificationConfigurations";
	/** [List] notifications:ListManagedNotificationEvents */
	static readonly ListManagedNotificationEvents =
		"notifications:ListManagedNotificationEvents";
	/** [List] notifications:ListMemberAccounts */
	static readonly ListMemberAccounts = "notifications:ListMemberAccounts";
	/** [List] notifications:ListNotificationConfigurations */
	static readonly ListNotificationConfigurations =
		"notifications:ListNotificationConfigurations";
	/** [List] notifications:ListNotificationEvents */
	static readonly ListNotificationEvents =
		"notifications:ListNotificationEvents";
	/** [List] notifications:ListNotificationHubs */
	static readonly ListNotificationHubs = "notifications:ListNotificationHubs";
	/** [List] notifications:ListOrganizationalUnits */
	static readonly ListOrganizationalUnits =
		"notifications:ListOrganizationalUnits";
	/** [List] notifications:ListTagsForResource */
	static readonly ListTagsForResource = "notifications:ListTagsForResource";
	/** [Write] notifications:PutFeatureOptInStatus */
	static readonly PutFeatureOptInStatus = "notifications:PutFeatureOptInStatus";
	/** [Write] notifications:RegisterNotificationHub */
	static readonly RegisterNotificationHub =
		"notifications:RegisterNotificationHub";
	/** [Tagging] notifications:TagResource */
	static readonly TagResource = "notifications:TagResource";
	/** [Tagging] notifications:UntagResource */
	static readonly UntagResource = "notifications:UntagResource";
	/** [Write] notifications:UpdateEventRule */
	static readonly UpdateEventRule = "notifications:UpdateEventRule";
	/** [Write] notifications:UpdateNotificationConfiguration */
	static readonly UpdateNotificationConfiguration =
		"notifications:UpdateNotificationConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		NotificationsActions.actionGetEventRule,
		NotificationsActions.actionGetFeatureOptInStatus,
		NotificationsActions.actionGetManagedNotificationChildEvent,
		NotificationsActions.actionGetManagedNotificationConfiguration,
		NotificationsActions.actionGetManagedNotificationEvent,
		NotificationsActions.actionGetNotificationConfiguration,
		NotificationsActions.actionGetNotificationEvent,
		NotificationsActions.actionGetNotificationsAccessForOrganization,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		NotificationsActions.AssociateChannel,
		NotificationsActions.AssociateManagedNotificationAccountContact,
		NotificationsActions.AssociateManagedNotificationAdditionalChannel,
		NotificationsActions.AssociateOrganizationalUnit,
		NotificationsActions.CreateEventRule,
		NotificationsActions.CreateNotificationConfiguration,
		NotificationsActions.DeleteEventRule,
		NotificationsActions.DeleteNotificationConfiguration,
		NotificationsActions.DeregisterNotificationHub,
		NotificationsActions.DisassociateChannel,
		NotificationsActions.DisassociateManagedNotificationAccountContact,
		NotificationsActions.DisassociateManagedNotificationAdditionalChannel,
		NotificationsActions.DisassociateOrganizationalUnit,
		NotificationsActions.PutFeatureOptInStatus,
		NotificationsActions.RegisterNotificationHub,
		NotificationsActions.UpdateEventRule,
		NotificationsActions.UpdateNotificationConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		NotificationsActions.ListChannels,
		NotificationsActions.ListEventRules,
		NotificationsActions.ListManagedNotificationChannelAssociations,
		NotificationsActions.ListManagedNotificationChildEvents,
		NotificationsActions.ListManagedNotificationConfigurations,
		NotificationsActions.ListManagedNotificationEvents,
		NotificationsActions.ListMemberAccounts,
		NotificationsActions.ListNotificationConfigurations,
		NotificationsActions.ListNotificationEvents,
		NotificationsActions.ListNotificationHubs,
		NotificationsActions.ListOrganizationalUnits,
		NotificationsActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		NotificationsActions.DisableNotificationsAccessForOrganization,
		NotificationsActions.EnableNotificationsAccessForOrganization,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		NotificationsActions.TagResource,
		NotificationsActions.UntagResource,
	];
}

/**
 * Properties for building a EventRule ARN.
 */
export interface NotificationsEventRuleArnProps {
	/** The NotificationConfigurationId component of the ARN. */
	readonly notificationConfigurationId: string;
	/** The EventRuleId component of the ARN. */
	readonly eventRuleId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a EventRule ARN.
 */
export interface NotificationsEventRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NotificationConfigurationId component. */
	readonly notificationConfigurationId: string;
	/** The EventRuleId component. */
	readonly eventRuleId: string;
}

/**
 * Properties for building a ManagedNotificationChildEvent ARN.
 */
export interface NotificationsManagedNotificationChildEventArnProps {
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
}

/**
 * Parsed components of a ManagedNotificationChildEvent ARN.
 */
export interface NotificationsManagedNotificationChildEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Category component. */
	readonly category: string;
	/** The Subcategory component. */
	readonly subcategory: string;
	/** The NotificationEventId component. */
	readonly notificationEventId: string;
	/** The NotificationChildEventId component. */
	readonly notificationChildEventId: string;
}

/**
 * Properties for building a ManagedNotificationConfiguration ARN.
 */
export interface NotificationsManagedNotificationConfigurationArnProps {
	/** The Category component of the ARN. */
	readonly category: string;
	/** The Subcategory component of the ARN. */
	readonly subcategory: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ManagedNotificationConfiguration ARN.
 */
export interface NotificationsManagedNotificationConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Category component. */
	readonly category: string;
	/** The Subcategory component. */
	readonly subcategory: string;
}

/**
 * Properties for building a ManagedNotificationEvent ARN.
 */
export interface NotificationsManagedNotificationEventArnProps {
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
}

/**
 * Parsed components of a ManagedNotificationEvent ARN.
 */
export interface NotificationsManagedNotificationEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Category component. */
	readonly category: string;
	/** The Subcategory component. */
	readonly subcategory: string;
	/** The NotificationEventId component. */
	readonly notificationEventId: string;
}

/**
 * Properties for building a NotificationConfiguration ARN.
 */
export interface NotificationsNotificationConfigurationArnProps {
	/** The NotificationConfigurationId component of the ARN. */
	readonly notificationConfigurationId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a NotificationConfiguration ARN.
 */
export interface NotificationsNotificationConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NotificationConfigurationId component. */
	readonly notificationConfigurationId: string;
}

/**
 * Properties for building a NotificationEvent ARN.
 */
export interface NotificationsNotificationEventArnProps {
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
}

/**
 * Parsed components of a NotificationEvent ARN.
 */
export interface NotificationsNotificationEventArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NotificationConfigurationId component. */
	readonly notificationConfigurationId: string;
	/** The NotificationEventId component. */
	readonly notificationEventId: string;
}

const EventRuleArnRegex =
	/^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):configuration\/(?<notificationConfigurationId>[^:/?]+)\/rule\/(?<eventRuleId>[^:/?]+)$/;
const ManagedNotificationChildEventArnRegex =
	/^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):managed-notification-configuration\/category\/(?<category>[^:/?]+)\/sub-category\/(?<subcategory>[^:/?]+)\/event\/(?<notificationEventId>[^:/?]+)\/child-event\/(?<notificationChildEventId>[^:/?]+)$/;
const ManagedNotificationConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):managed-notification-configuration\/category\/(?<category>[^:/?]+)\/sub-category\/(?<subcategory>[^:/?]+)$/;
const ManagedNotificationEventArnRegex =
	/^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):managed-notification-configuration\/category\/(?<category>[^:/?]+)\/sub-category\/(?<subcategory>[^:/?]+)\/event\/(?<notificationEventId>[^:/?]+)$/;
const NotificationConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):notifications::(?<account>[^:]*):configuration\/(?<notificationConfigurationId>[^:/?]+)$/;
const NotificationEventArnRegex =
	/^arn:(?<partition>[^:]+):notifications:(?<region>[^:]*):(?<account>[^:]*):configuration\/(?<notificationConfigurationId>[^:/?]+)\/event\/(?<notificationEventId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for notifications resources.
 */
export class NotificationsResources {
	/**
	 * Builds an ARN for the EventRule resource.
	 */
	static eventRule(props: NotificationsEventRuleArnProps): string {
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
	static parseEventRuleArn(arn: string): NotificationsEventRuleArnComponents {
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
	static managedNotificationChildEvent(
		props: NotificationsManagedNotificationChildEventArnProps,
	): string {
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
	static parseManagedNotificationChildEventArn(
		arn: string,
	): NotificationsManagedNotificationChildEventArnComponents {
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
	static managedNotificationConfiguration(
		props: NotificationsManagedNotificationConfigurationArnProps,
	): string {
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
	static parseManagedNotificationConfigurationArn(
		arn: string,
	): NotificationsManagedNotificationConfigurationArnComponents {
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
	static managedNotificationEvent(
		props: NotificationsManagedNotificationEventArnProps,
	): string {
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
	static parseManagedNotificationEventArn(
		arn: string,
	): NotificationsManagedNotificationEventArnComponents {
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
	static notificationConfiguration(
		props: NotificationsNotificationConfigurationArnProps,
	): string {
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
	static parseNotificationConfigurationArn(
		arn: string,
	): NotificationsNotificationConfigurationArnComponents {
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
	static notificationEvent(
		props: NotificationsNotificationEventArnProps,
	): string {
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
	static parseNotificationEventArn(
		arn: string,
	): NotificationsNotificationEventArnComponents {
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
	static readonly AssociateChannel: string[] = [
		"notifications:AssociateChannel",
	];
	/** IAM actions required for the AssociateManagedNotificationAccountContact API call. */
	static readonly AssociateManagedNotificationAccountContact: string[] = [
		"notifications:AssociateManagedNotificationAccountContact",
	];
	/** IAM actions required for the AssociateManagedNotificationAdditionalChannel API call. */
	static readonly AssociateManagedNotificationAdditionalChannel: string[] = [
		"notifications:AssociateManagedNotificationAdditionalChannel",
	];
	/** IAM actions required for the AssociateOrganizationalUnit API call. */
	static readonly AssociateOrganizationalUnit: string[] = [
		"notifications:AssociateOrganizationalUnit",
	];
	/** IAM actions required for the CreateEventRule API call. */
	static readonly CreateEventRule: string[] = ["notifications:CreateEventRule"];
	/** IAM actions required for the CreateNotificationConfiguration API call. */
	static readonly CreateNotificationConfiguration: string[] = [
		"notifications:CreateNotificationConfiguration",
		"notifications:TagResource",
	];
	/** IAM actions required for the DeleteEventRule API call. */
	static readonly DeleteEventRule: string[] = ["notifications:DeleteEventRule"];
	/** IAM actions required for the DeleteNotificationConfiguration API call. */
	static readonly DeleteNotificationConfiguration: string[] = [
		"notifications:DeleteNotificationConfiguration",
	];
	/** IAM actions required for the DeregisterNotificationHub API call. */
	static readonly DeregisterNotificationHub: string[] = [
		"notifications:DeregisterNotificationHub",
	];
	/** IAM actions required for the DisableNotificationsAccessForOrganization API call. */
	static readonly DisableNotificationsAccessForOrganization: string[] = [
		"notifications:DisableNotificationsAccessForOrganization",
	];
	/** IAM actions required for the DisassociateChannel API call. */
	static readonly DisassociateChannel: string[] = [
		"notifications:DisassociateChannel",
	];
	/** IAM actions required for the DisassociateManagedNotificationAccountContact API call. */
	static readonly DisassociateManagedNotificationAccountContact: string[] = [
		"notifications:DisassociateManagedNotificationAccountContact",
	];
	/** IAM actions required for the DisassociateManagedNotificationAdditionalChannel API call. */
	static readonly DisassociateManagedNotificationAdditionalChannel: string[] = [
		"notifications:DisassociateManagedNotificationAdditionalChannel",
	];
	/** IAM actions required for the DisassociateOrganizationalUnit API call. */
	static readonly DisassociateOrganizationalUnit: string[] = [
		"notifications:DisassociateOrganizationalUnit",
	];
	/** IAM actions required for the EnableNotificationsAccessForOrganization API call. */
	static readonly EnableNotificationsAccessForOrganization: string[] = [
		"notifications:EnableNotificationsAccessForOrganization",
	];
	/** IAM actions required for the GetEventRule API call. */
	static readonly opGetEventRule: string[] = ["notifications:GetEventRule"];
	/** IAM actions required for the GetManagedNotificationChildEvent API call. */
	static readonly opGetManagedNotificationChildEvent: string[] = [
		"notifications:GetManagedNotificationChildEvent",
	];
	/** IAM actions required for the GetManagedNotificationConfiguration API call. */
	static readonly opGetManagedNotificationConfiguration: string[] = [
		"notifications:GetManagedNotificationConfiguration",
	];
	/** IAM actions required for the GetManagedNotificationEvent API call. */
	static readonly opGetManagedNotificationEvent: string[] = [
		"notifications:GetManagedNotificationEvent",
	];
	/** IAM actions required for the GetNotificationConfiguration API call. */
	static readonly opGetNotificationConfiguration: string[] = [
		"notifications:GetNotificationConfiguration",
	];
	/** IAM actions required for the GetNotificationEvent API call. */
	static readonly opGetNotificationEvent: string[] = [
		"notifications:GetNotificationEvent",
	];
	/** IAM actions required for the GetNotificationsAccessForOrganization API call. */
	static readonly opGetNotificationsAccessForOrganization: string[] = [
		"notifications:GetNotificationsAccessForOrganization",
	];
	/** IAM actions required for the ListChannels API call. */
	static readonly ListChannels: string[] = ["notifications:ListChannels"];
	/** IAM actions required for the ListEventRules API call. */
	static readonly ListEventRules: string[] = ["notifications:ListEventRules"];
	/** IAM actions required for the ListManagedNotificationChannelAssociations API call. */
	static readonly ListManagedNotificationChannelAssociations: string[] = [
		"notifications:ListManagedNotificationChannelAssociations",
	];
	/** IAM actions required for the ListManagedNotificationChildEvents API call. */
	static readonly ListManagedNotificationChildEvents: string[] = [
		"notifications:ListManagedNotificationChildEvents",
	];
	/** IAM actions required for the ListManagedNotificationConfigurations API call. */
	static readonly ListManagedNotificationConfigurations: string[] = [
		"notifications:ListManagedNotificationConfigurations",
	];
	/** IAM actions required for the ListManagedNotificationEvents API call. */
	static readonly ListManagedNotificationEvents: string[] = [
		"notifications:ListManagedNotificationEvents",
	];
	/** IAM actions required for the ListMemberAccounts API call. */
	static readonly ListMemberAccounts: string[] = [
		"notifications:ListMemberAccounts",
	];
	/** IAM actions required for the ListNotificationConfigurations API call. */
	static readonly ListNotificationConfigurations: string[] = [
		"notifications:ListNotificationConfigurations",
	];
	/** IAM actions required for the ListNotificationEvents API call. */
	static readonly ListNotificationEvents: string[] = [
		"notifications:ListNotificationEvents",
	];
	/** IAM actions required for the ListNotificationHubs API call. */
	static readonly ListNotificationHubs: string[] = [
		"notifications:ListNotificationHubs",
	];
	/** IAM actions required for the ListOrganizationalUnits API call. */
	static readonly ListOrganizationalUnits: string[] = [
		"notifications:ListOrganizationalUnits",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"notifications:ListTagsForResource",
	];
	/** IAM actions required for the RegisterNotificationHub API call. */
	static readonly RegisterNotificationHub: string[] = [
		"notifications:RegisterNotificationHub",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["notifications:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["notifications:UntagResource"];
	/** IAM actions required for the UpdateEventRule API call. */
	static readonly UpdateEventRule: string[] = ["notifications:UpdateEventRule"];
	/** IAM actions required for the UpdateNotificationConfiguration API call. */
	static readonly UpdateNotificationConfiguration: string[] = [
		"notifications:UpdateNotificationConfiguration",
	];
}

/**
 * Condition key constants and builders for notifications.
 */
export class NotificationsConditions {
	/** Condition keys applicable to the CreateNotificationConfiguration action. */
	static readonly CreateNotificationConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
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
