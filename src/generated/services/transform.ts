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
	static readonly AccessTransformProfile = "transform:AccessTransformProfile";
	/** [Write] transform:AssociateConnectorResource */
	static readonly AssociateConnectorResource =
		"transform:AssociateConnectorResource";
	/** [Write] transform:CreateProfile */
	static readonly CreateProfile = "transform:CreateProfile";
	/** [Write] transform:DeleteAgentRuntimeConfiguration */
	static readonly DeleteAgentRuntimeConfiguration =
		"transform:DeleteAgentRuntimeConfiguration";
	/** [Write] transform:DeleteConnector */
	static readonly DeleteConnector = "transform:DeleteConnector";
	/** [Write] transform:DeleteProfile */
	static readonly DeleteProfile = "transform:DeleteProfile";
	/** [Read] transform:GetAccountSettings */
	static readonly actionGetAccountSettings = "transform:GetAccountSettings";
	/** [Read] transform:GetAgent */
	static readonly actionGetAgent = "transform:GetAgent";
	/** [Read] transform:GetAgentRuntimeConfiguration */
	static readonly actionGetAgentRuntimeConfiguration =
		"transform:GetAgentRuntimeConfiguration";
	/** [Read] transform:GetConnector */
	static readonly actionGetConnector = "transform:GetConnector";
	/** [Read] transform:GetWebAppUrl */
	static readonly actionGetWebAppUrl = "transform:GetWebAppUrl";
	/** [Read] transform:ListAgents */
	static readonly ListAgents = "transform:ListAgents";
	/** [List] transform:ListConnectors */
	static readonly ListConnectors = "transform:ListConnectors";
	/** [List] transform:ListProfiles */
	static readonly ListProfiles = "transform:ListProfiles";
	/** [Read] transform:ListTagsForResource */
	static readonly ListTagsForResource = "transform:ListTagsForResource";
	/** [Write] transform:PutAgentRuntimeConfiguration */
	static readonly PutAgentRuntimeConfiguration =
		"transform:PutAgentRuntimeConfiguration";
	/** [Write] transform:RejectConnector */
	static readonly RejectConnector = "transform:RejectConnector";
	/** [Tagging] transform:TagResource */
	static readonly TagResource = "transform:TagResource";
	/** [Tagging] transform:UntagResource */
	static readonly UntagResource = "transform:UntagResource";
	/** [Write] transform:UpdateAccountSettings */
	static readonly UpdateAccountSettings = "transform:UpdateAccountSettings";
	/** [Write] transform:UpdateAgentAccess */
	static readonly UpdateAgentAccess = "transform:UpdateAgentAccess";
	/** [Write] transform:UpdateProfile */
	static readonly UpdateProfile = "transform:UpdateProfile";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TransformActions.actionGetAccountSettings,
		TransformActions.actionGetAgent,
		TransformActions.actionGetAgentRuntimeConfiguration,
		TransformActions.actionGetConnector,
		TransformActions.actionGetWebAppUrl,
		TransformActions.ListAgents,
		TransformActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TransformActions.AccessTransformProfile,
		TransformActions.AssociateConnectorResource,
		TransformActions.CreateProfile,
		TransformActions.DeleteAgentRuntimeConfiguration,
		TransformActions.DeleteConnector,
		TransformActions.DeleteProfile,
		TransformActions.PutAgentRuntimeConfiguration,
		TransformActions.RejectConnector,
		TransformActions.UpdateAccountSettings,
		TransformActions.UpdateAgentAccess,
		TransformActions.UpdateProfile,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TransformActions.ListConnectors,
		TransformActions.ListProfiles,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TransformActions.TagResource,
		TransformActions.UntagResource,
	];
}

/**
 * Properties for building a connector ARN.
 */
export interface TransformConnectorArnProps {
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
}

/**
 * Parsed components of a connector ARN.
 */
export interface TransformConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkspaceId component. */
	readonly workspaceId: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
}

/**
 * Properties for building a profile ARN.
 */
export interface TransformProfileArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a profile ARN.
 */
export interface TransformProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):transform:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<workspaceId>[^:/?]+)\/(?<connectorId>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):transform:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for transform resources.
 */
export class TransformResources {
	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: TransformConnectorArnProps): string {
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
	static parseConnectorArn(arn: string): TransformConnectorArnComponents {
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
	static profile(props: TransformProfileArnProps): string {
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
	static parseProfileArn(arn: string): TransformProfileArnComponents {
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
	static readonly AssociateConnectorResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteConnector action. */
	static readonly DeleteConnectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetConnector action. */
	static readonly actionGetConnectorConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListConnectors action. */
	static readonly ListConnectorsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RejectConnector action. */
	static readonly RejectConnectorConditionKeys: string[] = [
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
