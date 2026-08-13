// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/transform.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the transform service.
 */
export class TransformActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "transform";

	/** [Write] transform:AccessTransformProfile */
	static readonly ACCESS_TRANSFORM_PROFILE = "transform:AccessTransformProfile";
	/** [Write] transform:AssociateConnectorResource */
	static readonly ASSOCIATE_CONNECTOR_RESOURCE =
		"transform:AssociateConnectorResource";
	/** [Write] transform:CreateProfile */
	static readonly CREATE_PROFILE = "transform:CreateProfile";
	/** [Write] transform:DeleteAgentRuntimeConfiguration */
	static readonly DELETE_AGENT_RUNTIME_CONFIGURATION =
		"transform:DeleteAgentRuntimeConfiguration";
	/** [Write] transform:DeleteConnector */
	static readonly DELETE_CONNECTOR = "transform:DeleteConnector";
	/** [Write] transform:DeleteProfile */
	static readonly DELETE_PROFILE = "transform:DeleteProfile";
	/** [Read] transform:GetAccountSettings */
	static readonly GET_ACCOUNT_SETTINGS = "transform:GetAccountSettings";
	/** [Read] transform:GetAgent */
	static readonly GET_AGENT = "transform:GetAgent";
	/** [Read] transform:GetAgentRuntimeConfiguration */
	static readonly GET_AGENT_RUNTIME_CONFIGURATION =
		"transform:GetAgentRuntimeConfiguration";
	/** [Read] transform:GetConnector */
	static readonly GET_CONNECTOR = "transform:GetConnector";
	/** [Read] transform:GetWebAppUrl */
	static readonly GET_WEB_APP_URL = "transform:GetWebAppUrl";
	/** [Read] transform:ListAgents */
	static readonly LIST_AGENTS = "transform:ListAgents";
	/** [List] transform:ListConnectors */
	static readonly LIST_CONNECTORS = "transform:ListConnectors";
	/** [List] transform:ListProfiles */
	static readonly LIST_PROFILES = "transform:ListProfiles";
	/** [Read] transform:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "transform:ListTagsForResource";
	/** [Write] transform:PutAgentRuntimeConfiguration */
	static readonly PUT_AGENT_RUNTIME_CONFIGURATION =
		"transform:PutAgentRuntimeConfiguration";
	/** [Write] transform:RejectConnector */
	static readonly REJECT_CONNECTOR = "transform:RejectConnector";
	/** [Tagging] transform:TagResource */
	static readonly TAG_RESOURCE = "transform:TagResource";
	/** [Tagging] transform:UntagResource */
	static readonly UNTAG_RESOURCE = "transform:UntagResource";
	/** [Write] transform:UpdateAccountSettings */
	static readonly UPDATE_ACCOUNT_SETTINGS = "transform:UpdateAccountSettings";
	/** [Write] transform:UpdateAgentAccess */
	static readonly UPDATE_AGENT_ACCESS = "transform:UpdateAgentAccess";
	/** [Write] transform:UpdateProfile */
	static readonly UPDATE_PROFILE = "transform:UpdateProfile";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TransformActions.GET_ACCOUNT_SETTINGS,
		TransformActions.GET_AGENT,
		TransformActions.GET_AGENT_RUNTIME_CONFIGURATION,
		TransformActions.GET_CONNECTOR,
		TransformActions.GET_WEB_APP_URL,
		TransformActions.LIST_AGENTS,
		TransformActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TransformActions.ACCESS_TRANSFORM_PROFILE,
		TransformActions.ASSOCIATE_CONNECTOR_RESOURCE,
		TransformActions.CREATE_PROFILE,
		TransformActions.DELETE_AGENT_RUNTIME_CONFIGURATION,
		TransformActions.DELETE_CONNECTOR,
		TransformActions.DELETE_PROFILE,
		TransformActions.PUT_AGENT_RUNTIME_CONFIGURATION,
		TransformActions.REJECT_CONNECTOR,
		TransformActions.UPDATE_ACCOUNT_SETTINGS,
		TransformActions.UPDATE_AGENT_ACCESS,
		TransformActions.UPDATE_PROFILE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TransformActions.LIST_CONNECTORS,
		TransformActions.LIST_PROFILES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TransformActions.TAG_RESOURCE,
		TransformActions.UNTAG_RESOURCE,
	];
}

const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transform:(?<region>[^:]*):(?<account>[^:]*):connector/(?<workspaceId>[^:/?]+)/(?<connectorId>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transform:(?<region>[^:]*):(?<account>[^:]*):profile/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for transform resources.
 */
export class TransformResources {
	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: {
		/** The WorkspaceId component of the ARN. */
		readonly workspaceId: string;
		/** The ConnectorId component of the ARN. */
		readonly connectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:transform:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.workspaceId}/${props.connectorId}`;
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
		workspaceId: string;
		connectorId: string;
	} {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workspaceId: match.groups!.workspaceId,
			connectorId: match.groups!.connectorId,
		};
	}

	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:transform:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the profile resource.
	 */
	static isValidProfileArn(arn: string): boolean {
		return ProfileArnRegex.test(arn);
	}

	/**
	 * Parses a profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identifier: string;
	} {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * Condition key constants and builders for transform.
 */
export class TransformConditions {
	/** Condition keys applicable to the AssociateConnectorResource action. */
	static readonly ASSOCIATE_CONNECTOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteConnector action. */
	static readonly DELETE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConnector action. */
	static readonly GET_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListConnectors action. */
	static readonly LIST_CONNECTORS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RejectConnector action. */
	static readonly REJECT_CONNECTOR_CONDITION_KEYS: string[] = [
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
