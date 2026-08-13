// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/appflow.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the appflow service.
 */
export class AppflowActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "appflow";

	/** [Write] appflow:CancelFlowExecutions */
	static readonly CancelFlowExecutions = "appflow:CancelFlowExecutions";
	/** [Write] appflow:CreateConnectorProfile */
	static readonly CreateConnectorProfile = "appflow:CreateConnectorProfile";
	/** [Write] appflow:CreateFlow */
	static readonly CreateFlow = "appflow:CreateFlow";
	/** [Write] appflow:DeleteConnectorProfile */
	static readonly DeleteConnectorProfile = "appflow:DeleteConnectorProfile";
	/** [Write] appflow:DeleteFlow */
	static readonly DeleteFlow = "appflow:DeleteFlow";
	/** [Read] appflow:DescribeConnector */
	static readonly DescribeConnector = "appflow:DescribeConnector";
	/** [Read] appflow:DescribeConnectorEntity */
	static readonly DescribeConnectorEntity = "appflow:DescribeConnectorEntity";
	/** [Read] appflow:DescribeConnectorFields */
	static readonly DescribeConnectorFields = "appflow:DescribeConnectorFields";
	/** [Read] appflow:DescribeConnectorProfiles */
	static readonly DescribeConnectorProfiles =
		"appflow:DescribeConnectorProfiles";
	/** [Read] appflow:DescribeConnectors */
	static readonly DescribeConnectors = "appflow:DescribeConnectors";
	/** [Read] appflow:DescribeFlow */
	static readonly DescribeFlow = "appflow:DescribeFlow";
	/** [Read] appflow:DescribeFlowExecution */
	static readonly DescribeFlowExecution = "appflow:DescribeFlowExecution";
	/** [Read] appflow:DescribeFlowExecutionRecords */
	static readonly DescribeFlowExecutionRecords =
		"appflow:DescribeFlowExecutionRecords";
	/** [Read] appflow:DescribeFlows */
	static readonly DescribeFlows = "appflow:DescribeFlows";
	/** [List] appflow:ListConnectorEntities */
	static readonly ListConnectorEntities = "appflow:ListConnectorEntities";
	/** [Read] appflow:ListConnectorFields */
	static readonly ListConnectorFields = "appflow:ListConnectorFields";
	/** [List] appflow:ListConnectors */
	static readonly ListConnectors = "appflow:ListConnectors";
	/** [List] appflow:ListFlows */
	static readonly ListFlows = "appflow:ListFlows";
	/** [Read] appflow:ListTagsForResource */
	static readonly ListTagsForResource = "appflow:ListTagsForResource";
	/** [Write] appflow:RegisterConnector */
	static readonly RegisterConnector = "appflow:RegisterConnector";
	/** [Write] appflow:ResetConnectorMetadataCache */
	static readonly ResetConnectorMetadataCache =
		"appflow:ResetConnectorMetadataCache";
	/** [Write] appflow:RunFlow */
	static readonly RunFlow = "appflow:RunFlow";
	/** [Write] appflow:StartFlow */
	static readonly StartFlow = "appflow:StartFlow";
	/** [Write] appflow:StopFlow */
	static readonly StopFlow = "appflow:StopFlow";
	/** [Tagging] appflow:TagResource */
	static readonly TagResource = "appflow:TagResource";
	/** [Write] appflow:UnRegisterConnector */
	static readonly UnRegisterConnector = "appflow:UnRegisterConnector";
	/** [Tagging] appflow:UntagResource */
	static readonly UntagResource = "appflow:UntagResource";
	/** [Write] appflow:UpdateConnectorProfile */
	static readonly UpdateConnectorProfile = "appflow:UpdateConnectorProfile";
	/** [Write] appflow:UpdateConnectorRegistration */
	static readonly UpdateConnectorRegistration =
		"appflow:UpdateConnectorRegistration";
	/** [Write] appflow:UpdateFlow */
	static readonly UpdateFlow = "appflow:UpdateFlow";
	/** [Write] appflow:UseConnectorProfile */
	static readonly UseConnectorProfile = "appflow:UseConnectorProfile";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AppflowActions.DescribeConnector,
		AppflowActions.DescribeConnectorEntity,
		AppflowActions.DescribeConnectorFields,
		AppflowActions.DescribeConnectorProfiles,
		AppflowActions.DescribeConnectors,
		AppflowActions.DescribeFlow,
		AppflowActions.DescribeFlowExecution,
		AppflowActions.DescribeFlowExecutionRecords,
		AppflowActions.DescribeFlows,
		AppflowActions.ListConnectorFields,
		AppflowActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AppflowActions.CancelFlowExecutions,
		AppflowActions.CreateConnectorProfile,
		AppflowActions.CreateFlow,
		AppflowActions.DeleteConnectorProfile,
		AppflowActions.DeleteFlow,
		AppflowActions.RegisterConnector,
		AppflowActions.ResetConnectorMetadataCache,
		AppflowActions.RunFlow,
		AppflowActions.StartFlow,
		AppflowActions.StopFlow,
		AppflowActions.UnRegisterConnector,
		AppflowActions.UpdateConnectorProfile,
		AppflowActions.UpdateConnectorRegistration,
		AppflowActions.UpdateFlow,
		AppflowActions.UseConnectorProfile,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AppflowActions.ListConnectorEntities,
		AppflowActions.ListConnectors,
		AppflowActions.ListFlows,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AppflowActions.TagResource,
		AppflowActions.UntagResource,
	];
}

/**
 * Properties for building a connector ARN.
 */
export interface AppflowConnectorArnProps {
	/** The ConnectorLabel component of the ARN. */
	readonly connectorLabel: string;
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
export interface AppflowConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorLabel component. */
	readonly connectorLabel: string;
}

/**
 * Properties for building a connectorprofile ARN.
 */
export interface AppflowConnectorprofileArnProps {
	/** The ProfileName component of the ARN. */
	readonly profileName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a connectorprofile ARN.
 */
export interface AppflowConnectorprofileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfileName component. */
	readonly profileName: string;
}

/**
 * Properties for building a flow ARN.
 */
export interface AppflowFlowArnProps {
	/** The FlowName component of the ARN. */
	readonly flowName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a flow ARN.
 */
export interface AppflowFlowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FlowName component. */
	readonly flowName: string;
}

const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):appflow:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorLabel>[^:/?]+)$/;
const ConnectorprofileArnRegex =
	/^arn:(?<partition>[^:]+):appflow:(?<region>[^:]*):(?<account>[^:]*):connectorprofile\/(?<profileName>[^:/?]+)$/;
const FlowArnRegex =
	/^arn:(?<partition>[^:]+):appflow:(?<region>[^:]*):(?<account>[^:]*):flow\/(?<flowName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for appflow resources.
 */
export class AppflowResources {
	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: AppflowConnectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:appflow:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorLabel}`;
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
	static parseConnectorArn(arn: string): AppflowConnectorArnComponents {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorLabel: match.groups!.connectorLabel,
		};
	}

	/**
	 * Builds an ARN for the connectorprofile resource.
	 */
	static connectorprofile(props: AppflowConnectorprofileArnProps): string {
		return `arn:${props.partition ?? "aws"}:appflow:${props.region ?? "*"}:${props.account ?? "*"}:connectorprofile/${props.profileName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connectorprofile resource.
	 */
	static isValidConnectorprofileArn(arn: string): boolean {
		return ConnectorprofileArnRegex.test(arn);
	}

	/**
	 * Parses a connectorprofile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorprofileArn(
		arn: string,
	): AppflowConnectorprofileArnComponents {
		const match = ConnectorprofileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connectorprofile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileName: match.groups!.profileName,
		};
	}

	/**
	 * Builds an ARN for the flow resource.
	 */
	static flow(props: AppflowFlowArnProps): string {
		return `arn:${props.partition ?? "aws"}:appflow:${props.region ?? "*"}:${props.account ?? "*"}:flow/${props.flowName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the flow resource.
	 */
	static isValidFlowArn(arn: string): boolean {
		return FlowArnRegex.test(arn);
	}

	/**
	 * Parses a flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFlowArn(arn: string): AppflowFlowArnComponents {
		const match = FlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			flowName: match.groups!.flowName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for appflow.
 */
export class AppflowOperations {
	/** IAM actions required for the CancelFlowExecutions API call. */
	static readonly CancelFlowExecutions: string[] = [
		"appflow:CancelFlowExecutions",
	];
	/** IAM actions required for the CreateConnectorProfile API call. */
	static readonly CreateConnectorProfile: string[] = [
		"appflow:CreateConnectorProfile",
		"appflow:DescribeConnector",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateFlow API call. */
	static readonly CreateFlow: string[] = [
		"appflow:CreateFlow",
		"iam:PassRole",
		"appflow:TagResource",
		"appflow:UseConnectorProfile",
	];
	/** IAM actions required for the DeleteConnectorProfile API call. */
	static readonly DeleteConnectorProfile: string[] = [
		"appflow:DeleteConnectorProfile",
	];
	/** IAM actions required for the DeleteFlow API call. */
	static readonly DeleteFlow: string[] = ["appflow:DeleteFlow"];
	/** IAM actions required for the DescribeConnector API call. */
	static readonly DescribeConnector: string[] = ["appflow:DescribeConnector"];
	/** IAM actions required for the DescribeConnectorEntity API call. */
	static readonly DescribeConnectorEntity: string[] = [
		"appflow:DescribeConnectorEntity",
	];
	/** IAM actions required for the DescribeConnectorProfiles API call. */
	static readonly DescribeConnectorProfiles: string[] = [
		"appflow:DescribeConnectorProfiles",
	];
	/** IAM actions required for the DescribeConnectors API call. */
	static readonly DescribeConnectors: string[] = ["appflow:DescribeConnectors"];
	/** IAM actions required for the DescribeFlow API call. */
	static readonly DescribeFlow: string[] = ["appflow:DescribeFlow"];
	/** IAM actions required for the DescribeFlowExecutionRecords API call. */
	static readonly DescribeFlowExecutionRecords: string[] = [
		"appflow:DescribeFlowExecutionRecords",
	];
	/** IAM actions required for the ListConnectorEntities API call. */
	static readonly ListConnectorEntities: string[] = [
		"appflow:ListConnectorEntities",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = ["appflow:ListConnectors"];
	/** IAM actions required for the ListFlows API call. */
	static readonly ListFlows: string[] = ["appflow:ListFlows"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"appflow:ListTagsForResource",
	];
	/** IAM actions required for the RegisterConnector API call. */
	static readonly RegisterConnector: string[] = ["appflow:RegisterConnector"];
	/** IAM actions required for the ResetConnectorMetadataCache API call. */
	static readonly ResetConnectorMetadataCache: string[] = [
		"appflow:ResetConnectorMetadataCache",
	];
	/** IAM actions required for the StartFlow API call. */
	static readonly StartFlow: string[] = ["appflow:StartFlow"];
	/** IAM actions required for the StopFlow API call. */
	static readonly StopFlow: string[] = ["appflow:StopFlow"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["appflow:TagResource"];
	/** IAM actions required for the UnregisterConnector API call. */
	static readonly UnregisterConnector: string[] = [
		"appflow:UnRegisterConnector",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["appflow:UntagResource"];
	/** IAM actions required for the UpdateConnectorProfile API call. */
	static readonly UpdateConnectorProfile: string[] = [
		"iam:PassRole",
		"appflow:UpdateConnectorProfile",
	];
	/** IAM actions required for the UpdateConnectorRegistration API call. */
	static readonly UpdateConnectorRegistration: string[] = [
		"appflow:UpdateConnectorRegistration",
	];
	/** IAM actions required for the UpdateFlow API call. */
	static readonly UpdateFlow: string[] = [
		"iam:PassRole",
		"appflow:UpdateFlow",
		"appflow:UseConnectorProfile",
	];
}

/**
 * Condition key constants and builders for appflow.
 */
export class AppflowConditions {
	/** Condition keys applicable to the CreateFlow action. */
	static readonly CreateFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteFlow action. */
	static readonly DeleteFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterConnector action. */
	static readonly RegisterConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnRegisterConnector action. */
	static readonly UnRegisterConnectorConditionKeys: string[] = [
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
