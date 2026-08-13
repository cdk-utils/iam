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
	static readonly GET_ACCOUNT_STATUS = "appstudio:GetAccountStatus";
	/** [Read] appstudio:GetEnablementJobStatus */
	static readonly GET_ENABLEMENT_JOB_STATUS =
		"appstudio:GetEnablementJobStatus";
	/** [Write] appstudio:StartEnablementJob */
	static readonly START_ENABLEMENT_JOB = "appstudio:StartEnablementJob";
	/** [Write] appstudio:StartRollbackEnablementJob */
	static readonly START_ROLLBACK_ENABLEMENT_JOB =
		"appstudio:StartRollbackEnablementJob";
	/** [Write] appstudio:StartTeamDeployment */
	static readonly START_TEAM_DEPLOYMENT = "appstudio:StartTeamDeployment";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppstudioActions.GET_ACCOUNT_STATUS,
		AppstudioActions.GET_ENABLEMENT_JOB_STATUS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppstudioActions.START_ENABLEMENT_JOB,
		AppstudioActions.START_ROLLBACK_ENABLEMENT_JOB,
		AppstudioActions.START_TEAM_DEPLOYMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstudio:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstudio:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectionId>[^:/?]+)$",
);
const InstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appstudio:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appstudio resources.
 */
export class AppstudioResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static connector(props: {
		/** The ConnectionId component of the ARN. */
		readonly connectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionId: string;
	} {
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
	static instance(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
	} {
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
