// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/events.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the events service.
 */
export class EventsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "events";

	/** [Write] events:ActivateEventSource */
	static readonly ACTIVATE_EVENT_SOURCE = "events:ActivateEventSource";
	/** [Write] events:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"events:AllowVendedLogDeliveryForResource";
	/** [Write] events:CancelReplay */
	static readonly CANCEL_REPLAY = "events:CancelReplay";
	/** [Write] events:CreateApiDestination */
	static readonly CREATE_API_DESTINATION = "events:CreateApiDestination";
	/** [Write] events:CreateArchive */
	static readonly CREATE_ARCHIVE = "events:CreateArchive";
	/** [Write] events:CreateConnection */
	static readonly CREATE_CONNECTION = "events:CreateConnection";
	/** [Write] events:CreateEndpoint */
	static readonly CREATE_ENDPOINT = "events:CreateEndpoint";
	/** [Write] events:CreateEventBus */
	static readonly CREATE_EVENT_BUS = "events:CreateEventBus";
	/** [Write] events:CreatePartnerEventSource */
	static readonly CREATE_PARTNER_EVENT_SOURCE =
		"events:CreatePartnerEventSource";
	/** [Write] events:DeactivateEventSource */
	static readonly DEACTIVATE_EVENT_SOURCE = "events:DeactivateEventSource";
	/** [Write] events:DeauthorizeConnection */
	static readonly DEAUTHORIZE_CONNECTION = "events:DeauthorizeConnection";
	/** [Write] events:DeleteApiDestination */
	static readonly DELETE_API_DESTINATION = "events:DeleteApiDestination";
	/** [Write] events:DeleteArchive */
	static readonly DELETE_ARCHIVE = "events:DeleteArchive";
	/** [Write] events:DeleteConnection */
	static readonly DELETE_CONNECTION = "events:DeleteConnection";
	/** [Write] events:DeleteEndpoint */
	static readonly DELETE_ENDPOINT = "events:DeleteEndpoint";
	/** [Write] events:DeleteEventBus */
	static readonly DELETE_EVENT_BUS = "events:DeleteEventBus";
	/** [Write] events:DeletePartnerEventSource */
	static readonly DELETE_PARTNER_EVENT_SOURCE =
		"events:DeletePartnerEventSource";
	/** [Write] events:DeleteRule */
	static readonly DELETE_RULE = "events:DeleteRule";
	/** [Read] events:DescribeApiDestination */
	static readonly DESCRIBE_API_DESTINATION = "events:DescribeApiDestination";
	/** [Read] events:DescribeArchive */
	static readonly DESCRIBE_ARCHIVE = "events:DescribeArchive";
	/** [Read] events:DescribeConnection */
	static readonly DESCRIBE_CONNECTION = "events:DescribeConnection";
	/** [Read] events:DescribeEndpoint */
	static readonly DESCRIBE_ENDPOINT = "events:DescribeEndpoint";
	/** [Read] events:DescribeEventBus */
	static readonly DESCRIBE_EVENT_BUS = "events:DescribeEventBus";
	/** [Read] events:DescribeEventSource */
	static readonly DESCRIBE_EVENT_SOURCE = "events:DescribeEventSource";
	/** [Read] events:DescribePartnerEventSource */
	static readonly DESCRIBE_PARTNER_EVENT_SOURCE =
		"events:DescribePartnerEventSource";
	/** [Read] events:DescribeReplay */
	static readonly DESCRIBE_REPLAY = "events:DescribeReplay";
	/** [Read] events:DescribeRule */
	static readonly DESCRIBE_RULE = "events:DescribeRule";
	/** [Write] events:DisableRule */
	static readonly DISABLE_RULE = "events:DisableRule";
	/** [Write] events:EnableRule */
	static readonly ENABLE_RULE = "events:EnableRule";
	/** [Write] events:InvokeApiDestination */
	static readonly INVOKE_API_DESTINATION = "events:InvokeApiDestination";
	/** [List] events:ListApiDestinations */
	static readonly LIST_API_DESTINATIONS = "events:ListApiDestinations";
	/** [List] events:ListArchives */
	static readonly LIST_ARCHIVES = "events:ListArchives";
	/** [List] events:ListConnections */
	static readonly LIST_CONNECTIONS = "events:ListConnections";
	/** [List] events:ListEndpoints */
	static readonly LIST_ENDPOINTS = "events:ListEndpoints";
	/** [List] events:ListEventBuses */
	static readonly LIST_EVENT_BUSES = "events:ListEventBuses";
	/** [List] events:ListEventSources */
	static readonly LIST_EVENT_SOURCES = "events:ListEventSources";
	/** [List] events:ListPartnerEventSourceAccounts */
	static readonly LIST_PARTNER_EVENT_SOURCE_ACCOUNTS =
		"events:ListPartnerEventSourceAccounts";
	/** [List] events:ListPartnerEventSources */
	static readonly LIST_PARTNER_EVENT_SOURCES = "events:ListPartnerEventSources";
	/** [List] events:ListReplays */
	static readonly LIST_REPLAYS = "events:ListReplays";
	/** [List] events:ListRuleNamesByTarget */
	static readonly LIST_RULE_NAMES_BY_TARGET = "events:ListRuleNamesByTarget";
	/** [List] events:ListRules */
	static readonly LIST_RULES = "events:ListRules";
	/** [List] events:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "events:ListTagsForResource";
	/** [List] events:ListTargetsByRule */
	static readonly LIST_TARGETS_BY_RULE = "events:ListTargetsByRule";
	/** [Write] events:PutEvents */
	static readonly PUT_EVENTS = "events:PutEvents";
	/** [Write] events:PutPartnerEvents */
	static readonly PUT_PARTNER_EVENTS = "events:PutPartnerEvents";
	/** [PermissionManagement] events:PutPermission */
	static readonly PUT_PERMISSION = "events:PutPermission";
	/** [Write] events:PutRule */
	static readonly PUT_RULE = "events:PutRule";
	/** [Write] events:PutTargets */
	static readonly PUT_TARGETS = "events:PutTargets";
	/** [PermissionManagement] events:RemovePermission */
	static readonly REMOVE_PERMISSION = "events:RemovePermission";
	/** [Write] events:RemoveTargets */
	static readonly REMOVE_TARGETS = "events:RemoveTargets";
	/** [Write] events:RetrieveConnectionCredentials */
	static readonly RETRIEVE_CONNECTION_CREDENTIALS =
		"events:RetrieveConnectionCredentials";
	/** [Write] events:StartReplay */
	static readonly START_REPLAY = "events:StartReplay";
	/** [Tagging] events:TagResource */
	static readonly TAG_RESOURCE = "events:TagResource";
	/** [Read] events:TestEventPattern */
	static readonly TEST_EVENT_PATTERN = "events:TestEventPattern";
	/** [Tagging] events:UntagResource */
	static readonly UNTAG_RESOURCE = "events:UntagResource";
	/** [Write] events:UpdateApiDestination */
	static readonly UPDATE_API_DESTINATION = "events:UpdateApiDestination";
	/** [Write] events:UpdateArchive */
	static readonly UPDATE_ARCHIVE = "events:UpdateArchive";
	/** [Write] events:UpdateConnection */
	static readonly UPDATE_CONNECTION = "events:UpdateConnection";
	/** [Write] events:UpdateEndpoint */
	static readonly UPDATE_ENDPOINT = "events:UpdateEndpoint";
	/** [Write] events:UpdateEventBus */
	static readonly UPDATE_EVENT_BUS = "events:UpdateEventBus";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EventsActions.DESCRIBE_API_DESTINATION,
		EventsActions.DESCRIBE_ARCHIVE,
		EventsActions.DESCRIBE_CONNECTION,
		EventsActions.DESCRIBE_ENDPOINT,
		EventsActions.DESCRIBE_EVENT_BUS,
		EventsActions.DESCRIBE_EVENT_SOURCE,
		EventsActions.DESCRIBE_PARTNER_EVENT_SOURCE,
		EventsActions.DESCRIBE_REPLAY,
		EventsActions.DESCRIBE_RULE,
		EventsActions.TEST_EVENT_PATTERN,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EventsActions.ACTIVATE_EVENT_SOURCE,
		EventsActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
		EventsActions.CANCEL_REPLAY,
		EventsActions.CREATE_API_DESTINATION,
		EventsActions.CREATE_ARCHIVE,
		EventsActions.CREATE_CONNECTION,
		EventsActions.CREATE_ENDPOINT,
		EventsActions.CREATE_EVENT_BUS,
		EventsActions.CREATE_PARTNER_EVENT_SOURCE,
		EventsActions.DEACTIVATE_EVENT_SOURCE,
		EventsActions.DEAUTHORIZE_CONNECTION,
		EventsActions.DELETE_API_DESTINATION,
		EventsActions.DELETE_ARCHIVE,
		EventsActions.DELETE_CONNECTION,
		EventsActions.DELETE_ENDPOINT,
		EventsActions.DELETE_EVENT_BUS,
		EventsActions.DELETE_PARTNER_EVENT_SOURCE,
		EventsActions.DELETE_RULE,
		EventsActions.DISABLE_RULE,
		EventsActions.ENABLE_RULE,
		EventsActions.INVOKE_API_DESTINATION,
		EventsActions.PUT_EVENTS,
		EventsActions.PUT_PARTNER_EVENTS,
		EventsActions.PUT_RULE,
		EventsActions.PUT_TARGETS,
		EventsActions.REMOVE_TARGETS,
		EventsActions.RETRIEVE_CONNECTION_CREDENTIALS,
		EventsActions.START_REPLAY,
		EventsActions.UPDATE_API_DESTINATION,
		EventsActions.UPDATE_ARCHIVE,
		EventsActions.UPDATE_CONNECTION,
		EventsActions.UPDATE_ENDPOINT,
		EventsActions.UPDATE_EVENT_BUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		EventsActions.LIST_API_DESTINATIONS,
		EventsActions.LIST_ARCHIVES,
		EventsActions.LIST_CONNECTIONS,
		EventsActions.LIST_ENDPOINTS,
		EventsActions.LIST_EVENT_BUSES,
		EventsActions.LIST_EVENT_SOURCES,
		EventsActions.LIST_PARTNER_EVENT_SOURCE_ACCOUNTS,
		EventsActions.LIST_PARTNER_EVENT_SOURCES,
		EventsActions.LIST_REPLAYS,
		EventsActions.LIST_RULE_NAMES_BY_TARGET,
		EventsActions.LIST_RULES,
		EventsActions.LIST_TAGS_FOR_RESOURCE,
		EventsActions.LIST_TARGETS_BY_RULE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		EventsActions.PUT_PERMISSION,
		EventsActions.REMOVE_PERMISSION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EventsActions.TAG_RESOURCE,
		EventsActions.UNTAG_RESOURCE,
	];
}

const AliasArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):alias/(?<alias>[^:/?]+)$",
);
const APIDestinationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):api-destination/(?<apiDestinationName>[^:/?]+)$",
);
const ArchiveArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):archive/(?<archiveName>[^:/?]+)$",
);
const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):connection/(?<connectionName>[^:/?]+)$",
);
const CreateSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target/create-snapshot$",
);
const EndpointArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):endpoint/(?<endpointName>[^:/?]+)$",
);
const EventBusArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):event-bus/(?<eventBusName>[^:/?]+)$",
);
const EventSourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*)::event-source/(?<eventSourceName>[^:/?]+)$",
);
const KeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):key/(?<keyId>[^:/?]+)$",
);
const RebootInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target/reboot-instance$",
);
const ReplayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):replay/(?<replayName>[^:/?]+)$",
);
const RuleOnCustomEventBusArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):rule/(?<eventBusName>[^:/?]+)/(?<ruleName>[^:/?]+)$",
);
const RuleOnDefaultEventBusArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):rule/(?<ruleName>[^:/?]+)$",
);
const StopInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target/stop-instance$",
);
const TerminateInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target/terminate-instance$",
);

/**
 * ARN builders, validators, and parsers for events resources.
 */
export class EventsResources {
	/**
	 * Builds an ARN for the alias resource.
	 */
	static alias(props: {
		/** The Alias component of the ARN. */
		readonly alias: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kms:${props.region ?? "*"}:${props.account ?? "*"}:alias/${props.alias}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the alias resource.
	 */
	static isValidAliasArn(arn: string): boolean {
		return AliasArnRegex.test(arn);
	}

	/**
	 * Parses a alias ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAliasArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		alias: string;
	} {
		const match = AliasArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid alias ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			alias: match.groups!.alias,
		};
	}

	/**
	 * Builds an ARN for the api-destination resource.
	 */
	static apiDestination(props: {
		/** The ApiDestinationName component of the ARN. */
		readonly apiDestinationName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:api-destination/${props.apiDestinationName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the api-destination resource.
	 */
	static isValidAPIDestinationArn(arn: string): boolean {
		return APIDestinationArnRegex.test(arn);
	}

	/**
	 * Parses a api-destination ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIDestinationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		apiDestinationName: string;
	} {
		const match = APIDestinationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid api-destination ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			apiDestinationName: match.groups!.apiDestinationName,
		};
	}

	/**
	 * Builds an ARN for the archive resource.
	 */
	static archive(props: {
		/** The ArchiveName component of the ARN. */
		readonly archiveName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:archive/${props.archiveName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the archive resource.
	 */
	static isValidArchiveArn(arn: string): boolean {
		return ArchiveArnRegex.test(arn);
	}

	/**
	 * Parses a archive ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseArchiveArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		archiveName: string;
	} {
		const match = ArchiveArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid archive ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			archiveName: match.groups!.archiveName,
		};
	}

	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: {
		/** The ConnectionName component of the ARN. */
		readonly connectionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:connection/${props.connectionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionName: string;
	} {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionName: match.groups!.connectionName,
		};
	}

	/**
	 * Builds an ARN for the create-snapshot resource.
	 */
	static createSnapshot(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:target/create-snapshot`;
	}

	/**
	 * Validates whether a string is a valid ARN for the create-snapshot resource.
	 */
	static isValidCreateSnapshotArn(arn: string): boolean {
		return CreateSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a create-snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCreateSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = CreateSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid create-snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the endpoint resource.
	 */
	static endpoint(props: {
		/** The EndpointName component of the ARN. */
		readonly endpointName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:endpoint/${props.endpointName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpoint resource.
	 */
	static isValidEndpointArn(arn: string): boolean {
		return EndpointArnRegex.test(arn);
	}

	/**
	 * Parses a endpoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		endpointName: string;
	} {
		const match = EndpointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			endpointName: match.groups!.endpointName,
		};
	}

	/**
	 * Builds an ARN for the event-bus resource.
	 */
	static eventBus(props: {
		/** The EventBusName component of the ARN. */
		readonly eventBusName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:event-bus/${props.eventBusName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-bus resource.
	 */
	static isValidEventBusArn(arn: string): boolean {
		return EventBusArnRegex.test(arn);
	}

	/**
	 * Parses a event-bus ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventBusArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventBusName: string;
	} {
		const match = EventBusArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-bus ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventBusName: match.groups!.eventBusName,
		};
	}

	/**
	 * Builds an ARN for the event-source resource.
	 */
	static eventSource(props: {
		/** The EventSourceName component of the ARN. */
		readonly eventSourceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}::event-source/${props.eventSourceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the event-source resource.
	 */
	static isValidEventSourceArn(arn: string): boolean {
		return EventSourceArnRegex.test(arn);
	}

	/**
	 * Parses a event-source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEventSourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventSourceName: string;
	} {
		const match = EventSourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid event-source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventSourceName: match.groups!.eventSourceName,
		};
	}

	/**
	 * Builds an ARN for the key resource.
	 */
	static key(props: {
		/** The KeyId component of the ARN. */
		readonly keyId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:kms:${props.region ?? "*"}:${props.account ?? "*"}:key/${props.keyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the key resource.
	 */
	static isValidKeyArn(arn: string): boolean {
		return KeyArnRegex.test(arn);
	}

	/**
	 * Parses a key ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		keyId: string;
	} {
		const match = KeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid key ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			keyId: match.groups!.keyId,
		};
	}

	/**
	 * Builds an ARN for the reboot-instance resource.
	 */
	static rebootInstance(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:target/reboot-instance`;
	}

	/**
	 * Validates whether a string is a valid ARN for the reboot-instance resource.
	 */
	static isValidRebootInstanceArn(arn: string): boolean {
		return RebootInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a reboot-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRebootInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = RebootInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid reboot-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the replay resource.
	 */
	static replay(props: {
		/** The ReplayName component of the ARN. */
		readonly replayName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:replay/${props.replayName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the replay resource.
	 */
	static isValidReplayArn(arn: string): boolean {
		return ReplayArnRegex.test(arn);
	}

	/**
	 * Parses a replay ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseReplayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		replayName: string;
	} {
		const match = ReplayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid replay ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			replayName: match.groups!.replayName,
		};
	}

	/**
	 * Builds an ARN for the rule-on-custom-event-bus resource.
	 */
	static ruleOnCustomEventBus(props: {
		/** The EventBusName component of the ARN. */
		readonly eventBusName: string;
		/** The RuleName component of the ARN. */
		readonly ruleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:rule/${props.eventBusName}/${props.ruleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule-on-custom-event-bus resource.
	 */
	static isValidRuleOnCustomEventBusArn(arn: string): boolean {
		return RuleOnCustomEventBusArnRegex.test(arn);
	}

	/**
	 * Parses a rule-on-custom-event-bus ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleOnCustomEventBusArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		eventBusName: string;
		ruleName: string;
	} {
		const match = RuleOnCustomEventBusArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule-on-custom-event-bus ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			eventBusName: match.groups!.eventBusName,
			ruleName: match.groups!.ruleName,
		};
	}

	/**
	 * Builds an ARN for the rule-on-default-event-bus resource.
	 */
	static ruleOnDefaultEventBus(props: {
		/** The RuleName component of the ARN. */
		readonly ruleName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:rule/${props.ruleName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the rule-on-default-event-bus resource.
	 */
	static isValidRuleOnDefaultEventBusArn(arn: string): boolean {
		return RuleOnDefaultEventBusArnRegex.test(arn);
	}

	/**
	 * Parses a rule-on-default-event-bus ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRuleOnDefaultEventBusArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		ruleName: string;
	} {
		const match = RuleOnDefaultEventBusArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid rule-on-default-event-bus ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			ruleName: match.groups!.ruleName,
		};
	}

	/**
	 * Builds an ARN for the stop-instance resource.
	 */
	static stopInstance(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:target/stop-instance`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stop-instance resource.
	 */
	static isValidStopInstanceArn(arn: string): boolean {
		return StopInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a stop-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStopInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = StopInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stop-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the terminate-instance resource.
	 */
	static terminateInstance(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:events:${props.region ?? "*"}:${props.account ?? "*"}:target/terminate-instance`;
	}

	/**
	 * Validates whether a string is a valid ARN for the terminate-instance resource.
	 */
	static isValidTerminateInstanceArn(arn: string): boolean {
		return TerminateInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a terminate-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTerminateInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
		const match = TerminateInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid terminate-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for events.
 */
export class EventsOperations {
	/** IAM actions required for the ActivateEventSource API call. */
	static readonly ACTIVATE_EVENT_SOURCE: string[] = [
		"events:ActivateEventSource",
	];
	/** IAM actions required for the CancelReplay API call. */
	static readonly CANCEL_REPLAY: string[] = ["events:CancelReplay"];
	/** IAM actions required for the CreateApiDestination API call. */
	static readonly CREATE_API_DESTINATION: string[] = [
		"events:CreateApiDestination",
	];
	/** IAM actions required for the CreateArchive API call. */
	static readonly CREATE_ARCHIVE: string[] = ["events:CreateArchive"];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = ["events:CreateConnection"];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CREATE_ENDPOINT: string[] = [
		"events:CreateEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEventBus API call. */
	static readonly CREATE_EVENT_BUS: string[] = [
		"events:CreateEventBus",
		"events:TagResource",
	];
	/** IAM actions required for the CreatePartnerEventSource API call. */
	static readonly CREATE_PARTNER_EVENT_SOURCE: string[] = [
		"events:CreatePartnerEventSource",
	];
	/** IAM actions required for the DeactivateEventSource API call. */
	static readonly DEACTIVATE_EVENT_SOURCE: string[] = [
		"events:DeactivateEventSource",
	];
	/** IAM actions required for the DeauthorizeConnection API call. */
	static readonly DEAUTHORIZE_CONNECTION: string[] = [
		"events:DeauthorizeConnection",
	];
	/** IAM actions required for the DeleteApiDestination API call. */
	static readonly DELETE_API_DESTINATION: string[] = [
		"events:DeleteApiDestination",
	];
	/** IAM actions required for the DeleteArchive API call. */
	static readonly DELETE_ARCHIVE: string[] = ["events:DeleteArchive"];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = ["events:DeleteConnection"];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DELETE_ENDPOINT: string[] = ["events:DeleteEndpoint"];
	/** IAM actions required for the DeleteEventBus API call. */
	static readonly DELETE_EVENT_BUS: string[] = ["events:DeleteEventBus"];
	/** IAM actions required for the DeletePartnerEventSource API call. */
	static readonly DELETE_PARTNER_EVENT_SOURCE: string[] = [
		"events:DeletePartnerEventSource",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DELETE_RULE: string[] = ["events:DeleteRule"];
	/** IAM actions required for the DescribeApiDestination API call. */
	static readonly DESCRIBE_API_DESTINATION: string[] = [
		"events:DescribeApiDestination",
	];
	/** IAM actions required for the DescribeArchive API call. */
	static readonly DESCRIBE_ARCHIVE: string[] = ["events:DescribeArchive"];
	/** IAM actions required for the DescribeConnection API call. */
	static readonly DESCRIBE_CONNECTION: string[] = ["events:DescribeConnection"];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DESCRIBE_ENDPOINT: string[] = ["events:DescribeEndpoint"];
	/** IAM actions required for the DescribeEventBus API call. */
	static readonly DESCRIBE_EVENT_BUS: string[] = ["events:DescribeEventBus"];
	/** IAM actions required for the DescribeEventSource API call. */
	static readonly DESCRIBE_EVENT_SOURCE: string[] = [
		"events:DescribeEventSource",
	];
	/** IAM actions required for the DescribePartnerEventSource API call. */
	static readonly DESCRIBE_PARTNER_EVENT_SOURCE: string[] = [
		"events:DescribePartnerEventSource",
	];
	/** IAM actions required for the DescribeReplay API call. */
	static readonly DESCRIBE_REPLAY: string[] = ["events:DescribeReplay"];
	/** IAM actions required for the DescribeRule API call. */
	static readonly DESCRIBE_RULE: string[] = ["events:DescribeRule"];
	/** IAM actions required for the DisableRule API call. */
	static readonly DISABLE_RULE: string[] = ["events:DisableRule"];
	/** IAM actions required for the EnableRule API call. */
	static readonly ENABLE_RULE: string[] = ["events:EnableRule"];
	/** IAM actions required for the ListApiDestinations API call. */
	static readonly LIST_API_DESTINATIONS: string[] = [
		"events:ListApiDestinations",
	];
	/** IAM actions required for the ListArchives API call. */
	static readonly LIST_ARCHIVES: string[] = ["events:ListArchives"];
	/** IAM actions required for the ListConnections API call. */
	static readonly LIST_CONNECTIONS: string[] = ["events:ListConnections"];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly LIST_ENDPOINTS: string[] = ["events:ListEndpoints"];
	/** IAM actions required for the ListEventBuses API call. */
	static readonly LIST_EVENT_BUSES: string[] = ["events:ListEventBuses"];
	/** IAM actions required for the ListEventSources API call. */
	static readonly LIST_EVENT_SOURCES: string[] = ["events:ListEventSources"];
	/** IAM actions required for the ListPartnerEventSourceAccounts API call. */
	static readonly LIST_PARTNER_EVENT_SOURCE_ACCOUNTS: string[] = [
		"events:ListPartnerEventSourceAccounts",
	];
	/** IAM actions required for the ListPartnerEventSources API call. */
	static readonly LIST_PARTNER_EVENT_SOURCES: string[] = [
		"events:ListPartnerEventSources",
	];
	/** IAM actions required for the ListReplays API call. */
	static readonly LIST_REPLAYS: string[] = ["events:ListReplays"];
	/** IAM actions required for the ListRuleNamesByTarget API call. */
	static readonly LIST_RULE_NAMES_BY_TARGET: string[] = [
		"events:ListRuleNamesByTarget",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly LIST_RULES: string[] = ["events:ListRules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"events:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetsByRule API call. */
	static readonly LIST_TARGETS_BY_RULE: string[] = ["events:ListTargetsByRule"];
	/** IAM actions required for the PutEvents API call. */
	static readonly PUT_EVENTS: string[] = ["events:PutEvents"];
	/** IAM actions required for the PutPartnerEvents API call. */
	static readonly PUT_PARTNER_EVENTS: string[] = ["events:PutPartnerEvents"];
	/** IAM actions required for the PutPermission API call. */
	static readonly PUT_PERMISSION: string[] = ["events:PutPermission"];
	/** IAM actions required for the PutRule API call. */
	static readonly PUT_RULE: string[] = [
		"iam:PassRole",
		"events:PutRule",
		"events:TagResource",
	];
	/** IAM actions required for the PutTargets API call. */
	static readonly PUT_TARGETS: string[] = ["iam:PassRole", "events:PutTargets"];
	/** IAM actions required for the RemovePermission API call. */
	static readonly REMOVE_PERMISSION: string[] = ["events:RemovePermission"];
	/** IAM actions required for the RemoveTargets API call. */
	static readonly REMOVE_TARGETS: string[] = ["events:RemoveTargets"];
	/** IAM actions required for the StartReplay API call. */
	static readonly START_REPLAY: string[] = ["events:StartReplay"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["events:TagResource"];
	/** IAM actions required for the TestEventPattern API call. */
	static readonly TEST_EVENT_PATTERN: string[] = ["events:TestEventPattern"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["events:UntagResource"];
	/** IAM actions required for the UpdateApiDestination API call. */
	static readonly UPDATE_API_DESTINATION: string[] = [
		"events:UpdateApiDestination",
	];
	/** IAM actions required for the UpdateArchive API call. */
	static readonly UPDATE_ARCHIVE: string[] = ["events:UpdateArchive"];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UPDATE_CONNECTION: string[] = ["events:UpdateConnection"];
	/** IAM actions required for the UpdateEndpoint API call. */
	static readonly UPDATE_ENDPOINT: string[] = [
		"iam:PassRole",
		"events:UpdateEndpoint",
	];
	/** IAM actions required for the UpdateEventBus API call. */
	static readonly UPDATE_EVENT_BUS: string[] = ["events:UpdateEventBus"];
}

/**
 * Condition key constants and builders for events.
 */
export class EventsConditions {
	/** Condition keys applicable to the CreateEndpoint action. */
	static readonly CREATE_ENDPOINT_CONDITION_KEYS: string[] = [
		"events:EventBusArn",
	];
	/** Condition keys applicable to the CreateEventBus action. */
	static readonly CREATE_EVENT_BUS_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DELETE_RULE_CONDITION_KEYS: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the DescribeRule action. */
	static readonly DESCRIBE_RULE_CONDITION_KEYS: string[] = [
		"events:creatorAccount",
	];
	/** Condition keys applicable to the DisableRule action. */
	static readonly DISABLE_RULE_CONDITION_KEYS: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the EnableRule action. */
	static readonly ENABLE_RULE_CONDITION_KEYS: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"events:creatorAccount",
	];
	/** Condition keys applicable to the ListTargetsByRule action. */
	static readonly LIST_TARGETS_BY_RULE_CONDITION_KEYS: string[] = [
		"events:creatorAccount",
	];
	/** Condition keys applicable to the PutEvents action. */
	static readonly PUT_EVENTS_CONDITION_KEYS: string[] = [
		"events:detail-type",
		"events:eventBusInvocation",
		"events:source",
	];
	/** Condition keys applicable to the PutRule action. */
	static readonly PUT_RULE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"events:ManagedBy",
		"events:creatorAccount",
		"events:detail-type",
		"events:detail.eventTypeCode",
		"events:detail.service",
		"events:detail.userIdentity.principalId",
		"events:source",
	];
	/** Condition keys applicable to the PutTargets action. */
	static readonly PUT_TARGETS_CONDITION_KEYS: string[] = [
		"events:ManagedBy",
		"events:TargetArn",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the RemoveTargets action. */
	static readonly REMOVE_TARGETS_CONDITION_KEYS: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:TagKeys",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the UpdateEndpoint action. */
	static readonly UPDATE_ENDPOINT_CONDITION_KEYS: string[] = [
		"events:EventBusArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: events:EventBusArn (ArrayOfARN) */
	static readonly EVENT_BUS_ARN = "events:EventBusArn";
	/** Condition key: events:ManagedBy (String) */
	static readonly MANAGED_BY = "events:ManagedBy";
	/** Condition key: events:TargetArn (ArrayOfARN) */
	static readonly TARGET_ARN = "events:TargetArn";
	/** Condition key: events:creatorAccount (String) */
	static readonly CREATOR_ACCOUNT = "events:creatorAccount";
	/** Condition key: events:detail-type (ArrayOfString) */
	static readonly DETAIL_TYPE = "events:detail-type";
	/** Condition key: events:detail.eventTypeCode (String) */
	static readonly DETAIL_EVENT_TYPE_CODE = "events:detail.eventTypeCode";
	/** Condition key: events:detail.service (String) */
	static readonly DETAIL_SERVICE = "events:detail.service";
	/** Condition key: events:detail.userIdentity.principalId (String) */
	static readonly DETAIL_USER_IDENTITY_PRINCIPAL_ID =
		"events:detail.userIdentity.principalId";
	/** Condition key: events:eventBusInvocation (String) */
	static readonly EVENT_BUS_INVOCATION = "events:eventBusInvocation";
	/** Condition key: events:source (ArrayOfString) */
	static readonly SOURCE = "events:source";

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

	/**
	 * Generates a condition block for `events:EventBusArn`.
	 */
	static eventBusARN(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "events:EventBusArn": values } };
	}

	/**
	 * Generates a condition block for `events:ManagedBy`.
	 */
	static managedBy(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "events:ManagedBy": value } };
	}

	/**
	 * Generates a condition block for `events:TargetArn`.
	 */
	static targetARN(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "events:TargetArn": values } };
	}

	/**
	 * Generates a condition block for `events:creatorAccount`.
	 */
	static creatorAccount(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "events:creatorAccount": value } };
	}

	/**
	 * Generates a condition block for `events:detail-type`.
	 */
	static detailType(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "events:detail-type": values } };
	}

	/**
	 * Generates a condition block for `events:detail.eventTypeCode`.
	 */
	static detailEventTypeCode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "events:detail.eventTypeCode": value } };
	}

	/**
	 * Generates a condition block for `events:detail.service`.
	 */
	static detailService(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "events:detail.service": value } };
	}

	/**
	 * Generates a condition block for `events:detail.userIdentity.principalId`.
	 */
	static detailUserIdentityPrincipalId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "events:detail.userIdentity.principalId": value },
		};
	}

	/**
	 * Generates a condition block for `events:eventBusInvocation`.
	 */
	static eventBusInvocation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "events:eventBusInvocation": value } };
	}

	/**
	 * Generates a condition block for `events:source`.
	 */
	static source(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "events:source": values } };
	}
}
