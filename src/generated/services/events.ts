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
	static readonly ActivateEventSource = "events:ActivateEventSource";
	/** [Write] events:AllowVendedLogDeliveryForResource */
	static readonly AllowVendedLogDeliveryForResource =
		"events:AllowVendedLogDeliveryForResource";
	/** [Write] events:CancelReplay */
	static readonly CancelReplay = "events:CancelReplay";
	/** [Write] events:CreateApiDestination */
	static readonly CreateApiDestination = "events:CreateApiDestination";
	/** [Write] events:CreateArchive */
	static readonly CreateArchive = "events:CreateArchive";
	/** [Write] events:CreateConnection */
	static readonly CreateConnection = "events:CreateConnection";
	/** [Write] events:CreateEndpoint */
	static readonly CreateEndpoint = "events:CreateEndpoint";
	/** [Write] events:CreateEventBus */
	static readonly CreateEventBus = "events:CreateEventBus";
	/** [Write] events:CreatePartnerEventSource */
	static readonly CreatePartnerEventSource = "events:CreatePartnerEventSource";
	/** [Write] events:DeactivateEventSource */
	static readonly DeactivateEventSource = "events:DeactivateEventSource";
	/** [Write] events:DeauthorizeConnection */
	static readonly DeauthorizeConnection = "events:DeauthorizeConnection";
	/** [Write] events:DeleteApiDestination */
	static readonly DeleteApiDestination = "events:DeleteApiDestination";
	/** [Write] events:DeleteArchive */
	static readonly DeleteArchive = "events:DeleteArchive";
	/** [Write] events:DeleteConnection */
	static readonly DeleteConnection = "events:DeleteConnection";
	/** [Write] events:DeleteEndpoint */
	static readonly DeleteEndpoint = "events:DeleteEndpoint";
	/** [Write] events:DeleteEventBus */
	static readonly DeleteEventBus = "events:DeleteEventBus";
	/** [Write] events:DeletePartnerEventSource */
	static readonly DeletePartnerEventSource = "events:DeletePartnerEventSource";
	/** [Write] events:DeleteRule */
	static readonly DeleteRule = "events:DeleteRule";
	/** [Read] events:DescribeApiDestination */
	static readonly DescribeApiDestination = "events:DescribeApiDestination";
	/** [Read] events:DescribeArchive */
	static readonly DescribeArchive = "events:DescribeArchive";
	/** [Read] events:DescribeConnection */
	static readonly DescribeConnection = "events:DescribeConnection";
	/** [Read] events:DescribeEndpoint */
	static readonly DescribeEndpoint = "events:DescribeEndpoint";
	/** [Read] events:DescribeEventBus */
	static readonly DescribeEventBus = "events:DescribeEventBus";
	/** [Read] events:DescribeEventSource */
	static readonly DescribeEventSource = "events:DescribeEventSource";
	/** [Read] events:DescribePartnerEventSource */
	static readonly DescribePartnerEventSource =
		"events:DescribePartnerEventSource";
	/** [Read] events:DescribeReplay */
	static readonly DescribeReplay = "events:DescribeReplay";
	/** [Read] events:DescribeRule */
	static readonly DescribeRule = "events:DescribeRule";
	/** [Write] events:DisableRule */
	static readonly DisableRule = "events:DisableRule";
	/** [Write] events:EnableRule */
	static readonly EnableRule = "events:EnableRule";
	/** [Write] events:InvokeApiDestination */
	static readonly InvokeApiDestination = "events:InvokeApiDestination";
	/** [List] events:ListApiDestinations */
	static readonly ListApiDestinations = "events:ListApiDestinations";
	/** [List] events:ListArchives */
	static readonly ListArchives = "events:ListArchives";
	/** [List] events:ListConnections */
	static readonly ListConnections = "events:ListConnections";
	/** [List] events:ListEndpoints */
	static readonly ListEndpoints = "events:ListEndpoints";
	/** [List] events:ListEventBuses */
	static readonly ListEventBuses = "events:ListEventBuses";
	/** [List] events:ListEventSources */
	static readonly ListEventSources = "events:ListEventSources";
	/** [List] events:ListPartnerEventSourceAccounts */
	static readonly ListPartnerEventSourceAccounts =
		"events:ListPartnerEventSourceAccounts";
	/** [List] events:ListPartnerEventSources */
	static readonly ListPartnerEventSources = "events:ListPartnerEventSources";
	/** [List] events:ListReplays */
	static readonly ListReplays = "events:ListReplays";
	/** [List] events:ListRuleNamesByTarget */
	static readonly ListRuleNamesByTarget = "events:ListRuleNamesByTarget";
	/** [List] events:ListRules */
	static readonly ListRules = "events:ListRules";
	/** [List] events:ListTagsForResource */
	static readonly ListTagsForResource = "events:ListTagsForResource";
	/** [List] events:ListTargetsByRule */
	static readonly ListTargetsByRule = "events:ListTargetsByRule";
	/** [Write] events:PutEvents */
	static readonly PutEvents = "events:PutEvents";
	/** [Write] events:PutPartnerEvents */
	static readonly PutPartnerEvents = "events:PutPartnerEvents";
	/** [PermissionManagement] events:PutPermission */
	static readonly PutPermission = "events:PutPermission";
	/** [Write] events:PutRule */
	static readonly PutRule = "events:PutRule";
	/** [Write] events:PutTargets */
	static readonly PutTargets = "events:PutTargets";
	/** [PermissionManagement] events:RemovePermission */
	static readonly RemovePermission = "events:RemovePermission";
	/** [Write] events:RemoveTargets */
	static readonly RemoveTargets = "events:RemoveTargets";
	/** [Write] events:RetrieveConnectionCredentials */
	static readonly RetrieveConnectionCredentials =
		"events:RetrieveConnectionCredentials";
	/** [Write] events:StartReplay */
	static readonly StartReplay = "events:StartReplay";
	/** [Tagging] events:TagResource */
	static readonly TagResource = "events:TagResource";
	/** [Read] events:TestEventPattern */
	static readonly TestEventPattern = "events:TestEventPattern";
	/** [Tagging] events:UntagResource */
	static readonly UntagResource = "events:UntagResource";
	/** [Write] events:UpdateApiDestination */
	static readonly UpdateApiDestination = "events:UpdateApiDestination";
	/** [Write] events:UpdateArchive */
	static readonly UpdateArchive = "events:UpdateArchive";
	/** [Write] events:UpdateConnection */
	static readonly UpdateConnection = "events:UpdateConnection";
	/** [Write] events:UpdateEndpoint */
	static readonly UpdateEndpoint = "events:UpdateEndpoint";
	/** [Write] events:UpdateEventBus */
	static readonly UpdateEventBus = "events:UpdateEventBus";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EventsActions.DescribeApiDestination,
		EventsActions.DescribeArchive,
		EventsActions.DescribeConnection,
		EventsActions.DescribeEndpoint,
		EventsActions.DescribeEventBus,
		EventsActions.DescribeEventSource,
		EventsActions.DescribePartnerEventSource,
		EventsActions.DescribeReplay,
		EventsActions.DescribeRule,
		EventsActions.TestEventPattern,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EventsActions.ActivateEventSource,
		EventsActions.AllowVendedLogDeliveryForResource,
		EventsActions.CancelReplay,
		EventsActions.CreateApiDestination,
		EventsActions.CreateArchive,
		EventsActions.CreateConnection,
		EventsActions.CreateEndpoint,
		EventsActions.CreateEventBus,
		EventsActions.CreatePartnerEventSource,
		EventsActions.DeactivateEventSource,
		EventsActions.DeauthorizeConnection,
		EventsActions.DeleteApiDestination,
		EventsActions.DeleteArchive,
		EventsActions.DeleteConnection,
		EventsActions.DeleteEndpoint,
		EventsActions.DeleteEventBus,
		EventsActions.DeletePartnerEventSource,
		EventsActions.DeleteRule,
		EventsActions.DisableRule,
		EventsActions.EnableRule,
		EventsActions.InvokeApiDestination,
		EventsActions.PutEvents,
		EventsActions.PutPartnerEvents,
		EventsActions.PutRule,
		EventsActions.PutTargets,
		EventsActions.RemoveTargets,
		EventsActions.RetrieveConnectionCredentials,
		EventsActions.StartReplay,
		EventsActions.UpdateApiDestination,
		EventsActions.UpdateArchive,
		EventsActions.UpdateConnection,
		EventsActions.UpdateEndpoint,
		EventsActions.UpdateEventBus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EventsActions.ListApiDestinations,
		EventsActions.ListArchives,
		EventsActions.ListConnections,
		EventsActions.ListEndpoints,
		EventsActions.ListEventBuses,
		EventsActions.ListEventSources,
		EventsActions.ListPartnerEventSourceAccounts,
		EventsActions.ListPartnerEventSources,
		EventsActions.ListReplays,
		EventsActions.ListRuleNamesByTarget,
		EventsActions.ListRules,
		EventsActions.ListTagsForResource,
		EventsActions.ListTargetsByRule,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		EventsActions.PutPermission,
		EventsActions.RemovePermission,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EventsActions.TagResource,
		EventsActions.UntagResource,
	];
}

/**
 * Properties for building a alias ARN.
 */
export interface EventsAliasArnProps {
	/** The Alias component of the ARN. */
	readonly alias: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a alias ARN.
 */
export interface EventsAliasArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Alias component. */
	readonly alias: string;
}

/**
 * Properties for building a api-destination ARN.
 */
export interface EventsAPIDestinationArnProps {
	/** The ApiDestinationName component of the ARN. */
	readonly apiDestinationName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a api-destination ARN.
 */
export interface EventsAPIDestinationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApiDestinationName component. */
	readonly apiDestinationName: string;
}

/**
 * Properties for building a archive ARN.
 */
export interface EventsArchiveArnProps {
	/** The ArchiveName component of the ARN. */
	readonly archiveName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a archive ARN.
 */
export interface EventsArchiveArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ArchiveName component. */
	readonly archiveName: string;
}

/**
 * Properties for building a connection ARN.
 */
export interface EventsConnectionArnProps {
	/** The ConnectionName component of the ARN. */
	readonly connectionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connection ARN.
 */
export interface EventsConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionName component. */
	readonly connectionName: string;
}

/**
 * Properties for building a create-snapshot ARN.
 */
export interface EventsCreateSnapshotArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a create-snapshot ARN.
 */
export interface EventsCreateSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a endpoint ARN.
 */
export interface EventsEndpointArnProps {
	/** The EndpointName component of the ARN. */
	readonly endpointName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a endpoint ARN.
 */
export interface EventsEndpointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EndpointName component. */
	readonly endpointName: string;
}

/**
 * Properties for building a event-bus ARN.
 */
export interface EventsEventBusArnProps {
	/** The EventBusName component of the ARN. */
	readonly eventBusName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-bus ARN.
 */
export interface EventsEventBusArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventBusName component. */
	readonly eventBusName: string;
}

/**
 * Properties for building a event-source ARN.
 */
export interface EventsEventSourceArnProps {
	/** The EventSourceName component of the ARN. */
	readonly eventSourceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a event-source ARN.
 */
export interface EventsEventSourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventSourceName component. */
	readonly eventSourceName: string;
}

/**
 * Properties for building a key ARN.
 */
export interface EventsKeyArnProps {
	/** The KeyId component of the ARN. */
	readonly keyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a key ARN.
 */
export interface EventsKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KeyId component. */
	readonly keyId: string;
}

/**
 * Properties for building a reboot-instance ARN.
 */
export interface EventsRebootInstanceArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a reboot-instance ARN.
 */
export interface EventsRebootInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a replay ARN.
 */
export interface EventsReplayArnProps {
	/** The ReplayName component of the ARN. */
	readonly replayName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a replay ARN.
 */
export interface EventsReplayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ReplayName component. */
	readonly replayName: string;
}

/**
 * Properties for building a rule-on-custom-event-bus ARN.
 */
export interface EventsRuleOnCustomEventBusArnProps {
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
}

/**
 * Parsed components of a rule-on-custom-event-bus ARN.
 */
export interface EventsRuleOnCustomEventBusArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EventBusName component. */
	readonly eventBusName: string;
	/** The RuleName component. */
	readonly ruleName: string;
}

/**
 * Properties for building a rule-on-default-event-bus ARN.
 */
export interface EventsRuleOnDefaultEventBusArnProps {
	/** The RuleName component of the ARN. */
	readonly ruleName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a rule-on-default-event-bus ARN.
 */
export interface EventsRuleOnDefaultEventBusArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RuleName component. */
	readonly ruleName: string;
}

/**
 * Properties for building a stop-instance ARN.
 */
export interface EventsStopInstanceArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stop-instance ARN.
 */
export interface EventsStopInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a terminate-instance ARN.
 */
export interface EventsTerminateInstanceArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a terminate-instance ARN.
 */
export interface EventsTerminateInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const AliasArnRegex =
	/^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):alias\/(?<alias>[^:/?]+)$/;
const APIDestinationArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):api-destination\/(?<apiDestinationName>[^:/?]+)$/;
const ArchiveArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):archive\/(?<archiveName>[^:/?]+)$/;
const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):connection\/(?<connectionName>[^:/?]+)$/;
const CreateSnapshotArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target\/create-snapshot$/;
const EndpointArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):endpoint\/(?<endpointName>[^:/?]+)$/;
const EventBusArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):event-bus\/(?<eventBusName>[^:/?]+)$/;
const EventSourceArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*)::event-source\/(?<eventSourceName>[^:/?]+)$/;
const KeyArnRegex =
	/^arn:(?<partition>[^:]+):kms:(?<region>[^:]*):(?<account>[^:]*):key\/(?<keyId>[^:/?]+)$/;
const RebootInstanceArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target\/reboot-instance$/;
const ReplayArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):replay\/(?<replayName>[^:/?]+)$/;
const RuleOnCustomEventBusArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):rule\/(?<eventBusName>[^:/?]+)\/(?<ruleName>[^:/?]+)$/;
const RuleOnDefaultEventBusArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):rule\/(?<ruleName>[^:/?]+)$/;
const StopInstanceArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target\/stop-instance$/;
const TerminateInstanceArnRegex =
	/^arn:(?<partition>[^:]+):events:(?<region>[^:]*):(?<account>[^:]*):target\/terminate-instance$/;

/**
 * ARN builders, validators, and parsers for events resources.
 */
export class EventsResources {
	/**
	 * Builds an ARN for the alias resource.
	 */
	static alias(props: EventsAliasArnProps): string {
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
	static parseAliasArn(arn: string): EventsAliasArnComponents {
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
	static apiDestination(props: EventsAPIDestinationArnProps): string {
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
	static parseAPIDestinationArn(
		arn: string,
	): EventsAPIDestinationArnComponents {
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
	static archive(props: EventsArchiveArnProps): string {
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
	static parseArchiveArn(arn: string): EventsArchiveArnComponents {
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
	static connection(props: EventsConnectionArnProps): string {
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
	static parseConnectionArn(arn: string): EventsConnectionArnComponents {
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
	static createSnapshot(props: EventsCreateSnapshotArnProps): string {
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
	static parseCreateSnapshotArn(
		arn: string,
	): EventsCreateSnapshotArnComponents {
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
	static endpoint(props: EventsEndpointArnProps): string {
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
	static parseEndpointArn(arn: string): EventsEndpointArnComponents {
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
	static eventBus(props: EventsEventBusArnProps): string {
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
	static parseEventBusArn(arn: string): EventsEventBusArnComponents {
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
	static eventSource(props: EventsEventSourceArnProps): string {
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
	static parseEventSourceArn(arn: string): EventsEventSourceArnComponents {
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
	static key(props: EventsKeyArnProps): string {
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
	static parseKeyArn(arn: string): EventsKeyArnComponents {
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
	static rebootInstance(props: EventsRebootInstanceArnProps): string {
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
	static parseRebootInstanceArn(
		arn: string,
	): EventsRebootInstanceArnComponents {
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
	static replay(props: EventsReplayArnProps): string {
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
	static parseReplayArn(arn: string): EventsReplayArnComponents {
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
	static ruleOnCustomEventBus(
		props: EventsRuleOnCustomEventBusArnProps,
	): string {
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
	static parseRuleOnCustomEventBusArn(
		arn: string,
	): EventsRuleOnCustomEventBusArnComponents {
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
	static ruleOnDefaultEventBus(
		props: EventsRuleOnDefaultEventBusArnProps,
	): string {
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
	static parseRuleOnDefaultEventBusArn(
		arn: string,
	): EventsRuleOnDefaultEventBusArnComponents {
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
	static stopInstance(props: EventsStopInstanceArnProps): string {
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
	static parseStopInstanceArn(arn: string): EventsStopInstanceArnComponents {
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
	static terminateInstance(props: EventsTerminateInstanceArnProps): string {
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
	static parseTerminateInstanceArn(
		arn: string,
	): EventsTerminateInstanceArnComponents {
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
	static readonly ActivateEventSource: string[] = [
		"events:ActivateEventSource",
	];
	/** IAM actions required for the CancelReplay API call. */
	static readonly CancelReplay: string[] = ["events:CancelReplay"];
	/** IAM actions required for the CreateApiDestination API call. */
	static readonly CreateApiDestination: string[] = [
		"events:CreateApiDestination",
	];
	/** IAM actions required for the CreateArchive API call. */
	static readonly CreateArchive: string[] = ["events:CreateArchive"];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CreateConnection: string[] = ["events:CreateConnection"];
	/** IAM actions required for the CreateEndpoint API call. */
	static readonly CreateEndpoint: string[] = [
		"events:CreateEndpoint",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateEventBus API call. */
	static readonly CreateEventBus: string[] = [
		"events:CreateEventBus",
		"events:TagResource",
	];
	/** IAM actions required for the CreatePartnerEventSource API call. */
	static readonly CreatePartnerEventSource: string[] = [
		"events:CreatePartnerEventSource",
	];
	/** IAM actions required for the DeactivateEventSource API call. */
	static readonly DeactivateEventSource: string[] = [
		"events:DeactivateEventSource",
	];
	/** IAM actions required for the DeauthorizeConnection API call. */
	static readonly DeauthorizeConnection: string[] = [
		"events:DeauthorizeConnection",
	];
	/** IAM actions required for the DeleteApiDestination API call. */
	static readonly DeleteApiDestination: string[] = [
		"events:DeleteApiDestination",
	];
	/** IAM actions required for the DeleteArchive API call. */
	static readonly DeleteArchive: string[] = ["events:DeleteArchive"];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = ["events:DeleteConnection"];
	/** IAM actions required for the DeleteEndpoint API call. */
	static readonly DeleteEndpoint: string[] = ["events:DeleteEndpoint"];
	/** IAM actions required for the DeleteEventBus API call. */
	static readonly DeleteEventBus: string[] = ["events:DeleteEventBus"];
	/** IAM actions required for the DeletePartnerEventSource API call. */
	static readonly DeletePartnerEventSource: string[] = [
		"events:DeletePartnerEventSource",
	];
	/** IAM actions required for the DeleteRule API call. */
	static readonly DeleteRule: string[] = ["events:DeleteRule"];
	/** IAM actions required for the DescribeApiDestination API call. */
	static readonly DescribeApiDestination: string[] = [
		"events:DescribeApiDestination",
	];
	/** IAM actions required for the DescribeArchive API call. */
	static readonly DescribeArchive: string[] = ["events:DescribeArchive"];
	/** IAM actions required for the DescribeConnection API call. */
	static readonly DescribeConnection: string[] = ["events:DescribeConnection"];
	/** IAM actions required for the DescribeEndpoint API call. */
	static readonly DescribeEndpoint: string[] = ["events:DescribeEndpoint"];
	/** IAM actions required for the DescribeEventBus API call. */
	static readonly DescribeEventBus: string[] = ["events:DescribeEventBus"];
	/** IAM actions required for the DescribeEventSource API call. */
	static readonly DescribeEventSource: string[] = [
		"events:DescribeEventSource",
	];
	/** IAM actions required for the DescribePartnerEventSource API call. */
	static readonly DescribePartnerEventSource: string[] = [
		"events:DescribePartnerEventSource",
	];
	/** IAM actions required for the DescribeReplay API call. */
	static readonly DescribeReplay: string[] = ["events:DescribeReplay"];
	/** IAM actions required for the DescribeRule API call. */
	static readonly DescribeRule: string[] = ["events:DescribeRule"];
	/** IAM actions required for the DisableRule API call. */
	static readonly DisableRule: string[] = ["events:DisableRule"];
	/** IAM actions required for the EnableRule API call. */
	static readonly EnableRule: string[] = ["events:EnableRule"];
	/** IAM actions required for the ListApiDestinations API call. */
	static readonly ListApiDestinations: string[] = [
		"events:ListApiDestinations",
	];
	/** IAM actions required for the ListArchives API call. */
	static readonly ListArchives: string[] = ["events:ListArchives"];
	/** IAM actions required for the ListConnections API call. */
	static readonly ListConnections: string[] = ["events:ListConnections"];
	/** IAM actions required for the ListEndpoints API call. */
	static readonly ListEndpoints: string[] = ["events:ListEndpoints"];
	/** IAM actions required for the ListEventBuses API call. */
	static readonly ListEventBuses: string[] = ["events:ListEventBuses"];
	/** IAM actions required for the ListEventSources API call. */
	static readonly ListEventSources: string[] = ["events:ListEventSources"];
	/** IAM actions required for the ListPartnerEventSourceAccounts API call. */
	static readonly ListPartnerEventSourceAccounts: string[] = [
		"events:ListPartnerEventSourceAccounts",
	];
	/** IAM actions required for the ListPartnerEventSources API call. */
	static readonly ListPartnerEventSources: string[] = [
		"events:ListPartnerEventSources",
	];
	/** IAM actions required for the ListReplays API call. */
	static readonly ListReplays: string[] = ["events:ListReplays"];
	/** IAM actions required for the ListRuleNamesByTarget API call. */
	static readonly ListRuleNamesByTarget: string[] = [
		"events:ListRuleNamesByTarget",
	];
	/** IAM actions required for the ListRules API call. */
	static readonly ListRules: string[] = ["events:ListRules"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"events:ListTagsForResource",
	];
	/** IAM actions required for the ListTargetsByRule API call. */
	static readonly ListTargetsByRule: string[] = ["events:ListTargetsByRule"];
	/** IAM actions required for the PutEvents API call. */
	static readonly PutEvents: string[] = ["events:PutEvents"];
	/** IAM actions required for the PutPartnerEvents API call. */
	static readonly PutPartnerEvents: string[] = ["events:PutPartnerEvents"];
	/** IAM actions required for the PutPermission API call. */
	static readonly PutPermission: string[] = ["events:PutPermission"];
	/** IAM actions required for the PutRule API call. */
	static readonly PutRule: string[] = [
		"iam:PassRole",
		"events:PutRule",
		"events:TagResource",
	];
	/** IAM actions required for the PutTargets API call. */
	static readonly PutTargets: string[] = ["iam:PassRole", "events:PutTargets"];
	/** IAM actions required for the RemovePermission API call. */
	static readonly RemovePermission: string[] = ["events:RemovePermission"];
	/** IAM actions required for the RemoveTargets API call. */
	static readonly RemoveTargets: string[] = ["events:RemoveTargets"];
	/** IAM actions required for the StartReplay API call. */
	static readonly StartReplay: string[] = ["events:StartReplay"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["events:TagResource"];
	/** IAM actions required for the TestEventPattern API call. */
	static readonly TestEventPattern: string[] = ["events:TestEventPattern"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["events:UntagResource"];
	/** IAM actions required for the UpdateApiDestination API call. */
	static readonly UpdateApiDestination: string[] = [
		"events:UpdateApiDestination",
	];
	/** IAM actions required for the UpdateArchive API call. */
	static readonly UpdateArchive: string[] = ["events:UpdateArchive"];
	/** IAM actions required for the UpdateConnection API call. */
	static readonly UpdateConnection: string[] = ["events:UpdateConnection"];
	/** IAM actions required for the UpdateEndpoint API call. */
	static readonly UpdateEndpoint: string[] = [
		"iam:PassRole",
		"events:UpdateEndpoint",
	];
	/** IAM actions required for the UpdateEventBus API call. */
	static readonly UpdateEventBus: string[] = ["events:UpdateEventBus"];
}

/**
 * Condition key constants and builders for events.
 */
export class EventsConditions {
	/** Condition keys applicable to the CreateEndpoint action. */
	static readonly CreateEndpointConditionKeys: string[] = [
		"events:EventBusArn",
	];
	/** Condition keys applicable to the CreateEventBus action. */
	static readonly CreateEventBusConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteRule action. */
	static readonly DeleteRuleConditionKeys: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the DescribeRule action. */
	static readonly DescribeRuleConditionKeys: string[] = [
		"events:creatorAccount",
	];
	/** Condition keys applicable to the DisableRule action. */
	static readonly DisableRuleConditionKeys: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the EnableRule action. */
	static readonly EnableRuleConditionKeys: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"events:creatorAccount",
	];
	/** Condition keys applicable to the ListTargetsByRule action. */
	static readonly ListTargetsByRuleConditionKeys: string[] = [
		"events:creatorAccount",
	];
	/** Condition keys applicable to the PutEvents action. */
	static readonly PutEventsConditionKeys: string[] = [
		"events:detail-type",
		"events:eventBusInvocation",
		"events:source",
	];
	/** Condition keys applicable to the PutRule action. */
	static readonly PutRuleConditionKeys: string[] = [
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
	static readonly PutTargetsConditionKeys: string[] = [
		"events:ManagedBy",
		"events:TargetArn",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the RemoveTargets action. */
	static readonly RemoveTargetsConditionKeys: string[] = [
		"events:ManagedBy",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:TagKeys",
		"events:creatorAccount",
	];
	/** Condition keys applicable to the UpdateEndpoint action. */
	static readonly UpdateEndpointConditionKeys: string[] = [
		"events:EventBusArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
