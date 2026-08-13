// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appstudio.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appstudio service.
 */
export class AppstudioActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appstudio";

	/** [Read] appstudio:GetAccountStatus */
	static readonly actionGetAccountStatus = "appstudio:GetAccountStatus";
	/** [Read] appstudio:GetEnablementJobStatus */
	static readonly actionGetEnablementJobStatus =
		"appstudio:GetEnablementJobStatus";
	/** [Write] appstudio:StartEnablementJob */
	static readonly StartEnablementJob = "appstudio:StartEnablementJob";
	/** [Write] appstudio:StartRollbackEnablementJob */
	static readonly StartRollbackEnablementJob =
		"appstudio:StartRollbackEnablementJob";
	/** [Write] appstudio:StartTeamDeployment */
	static readonly StartTeamDeployment = "appstudio:StartTeamDeployment";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppstudioActions.actionGetAccountStatus,
		AppstudioActions.actionGetEnablementJobStatus,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppstudioActions.StartEnablementJob,
		AppstudioActions.StartRollbackEnablementJob,
		AppstudioActions.StartTeamDeployment,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a application ARN.
 */
export interface AppstudioApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface AppstudioApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a connector ARN.
 */
export interface AppstudioConnectorArnProps {
	/** The ConnectionId component of the ARN. */
	readonly connectionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connector ARN.
 */
export interface AppstudioConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionId component. */
	readonly connectionId: string;
}

/**
 * Properties for building a instance ARN.
 */
export interface AppstudioInstanceArnProps {
	/** The InstanceId component of the ARN. */
	readonly instanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a instance ARN.
 */
export interface AppstudioInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):appstudio:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):appstudio:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectionId>[^:/?]+)$/;
const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):appstudio:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appstudio resources.
 */
export class AppstudioResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: AppstudioApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:appstudio:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): AppstudioApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: AppstudioConnectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:appstudio:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(arn: string): AppstudioConnectorArnComponents {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionId: match.groups!.connectionId,
		};
	}

	/**
	 * Builds an ARN for the instance resource.
	 */
	static instance(props: AppstudioInstanceArnProps): string {
		return `arn:${props.partition ?? "aws"}:appstudio:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the instance resource.
	 */
	static isValidInstanceArn(arn: string): boolean {
		return InstanceArnRegex.test(arn);
	}

	/**
	 * Parses a instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInstanceArn(arn: string): AppstudioInstanceArnComponents {
		const match = InstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
		};
	}
}
