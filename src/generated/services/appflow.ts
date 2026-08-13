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
	static readonly CANCEL_FLOW_EXECUTIONS = "appflow:CancelFlowExecutions";
	/** [Write] appflow:CreateConnectorProfile */
	static readonly CREATE_CONNECTOR_PROFILE = "appflow:CreateConnectorProfile";
	/** [Write] appflow:CreateFlow */
	static readonly CREATE_FLOW = "appflow:CreateFlow";
	/** [Write] appflow:DeleteConnectorProfile */
	static readonly DELETE_CONNECTOR_PROFILE = "appflow:DeleteConnectorProfile";
	/** [Write] appflow:DeleteFlow */
	static readonly DELETE_FLOW = "appflow:DeleteFlow";
	/** [Read] appflow:DescribeConnector */
	static readonly DESCRIBE_CONNECTOR = "appflow:DescribeConnector";
	/** [Read] appflow:DescribeConnectorEntity */
	static readonly DESCRIBE_CONNECTOR_ENTITY = "appflow:DescribeConnectorEntity";
	/** [Read] appflow:DescribeConnectorFields */
	static readonly DESCRIBE_CONNECTOR_FIELDS = "appflow:DescribeConnectorFields";
	/** [Read] appflow:DescribeConnectorProfiles */
	static readonly DESCRIBE_CONNECTOR_PROFILES =
		"appflow:DescribeConnectorProfiles";
	/** [Read] appflow:DescribeConnectors */
	static readonly DESCRIBE_CONNECTORS = "appflow:DescribeConnectors";
	/** [Read] appflow:DescribeFlow */
	static readonly DESCRIBE_FLOW = "appflow:DescribeFlow";
	/** [Read] appflow:DescribeFlowExecution */
	static readonly DESCRIBE_FLOW_EXECUTION = "appflow:DescribeFlowExecution";
	/** [Read] appflow:DescribeFlowExecutionRecords */
	static readonly DESCRIBE_FLOW_EXECUTION_RECORDS =
		"appflow:DescribeFlowExecutionRecords";
	/** [Read] appflow:DescribeFlows */
	static readonly DESCRIBE_FLOWS = "appflow:DescribeFlows";
	/** [List] appflow:ListConnectorEntities */
	static readonly LIST_CONNECTOR_ENTITIES = "appflow:ListConnectorEntities";
	/** [Read] appflow:ListConnectorFields */
	static readonly LIST_CONNECTOR_FIELDS = "appflow:ListConnectorFields";
	/** [List] appflow:ListConnectors */
	static readonly LIST_CONNECTORS = "appflow:ListConnectors";
	/** [List] appflow:ListFlows */
	static readonly LIST_FLOWS = "appflow:ListFlows";
	/** [Read] appflow:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "appflow:ListTagsForResource";
	/** [Write] appflow:RegisterConnector */
	static readonly REGISTER_CONNECTOR = "appflow:RegisterConnector";
	/** [Write] appflow:ResetConnectorMetadataCache */
	static readonly RESET_CONNECTOR_METADATA_CACHE =
		"appflow:ResetConnectorMetadataCache";
	/** [Write] appflow:RunFlow */
	static readonly RUN_FLOW = "appflow:RunFlow";
	/** [Write] appflow:StartFlow */
	static readonly START_FLOW = "appflow:StartFlow";
	/** [Write] appflow:StopFlow */
	static readonly STOP_FLOW = "appflow:StopFlow";
	/** [Tagging] appflow:TagResource */
	static readonly TAG_RESOURCE = "appflow:TagResource";
	/** [Write] appflow:UnRegisterConnector */
	static readonly UN_REGISTER_CONNECTOR = "appflow:UnRegisterConnector";
	/** [Tagging] appflow:UntagResource */
	static readonly UNTAG_RESOURCE = "appflow:UntagResource";
	/** [Write] appflow:UpdateConnectorProfile */
	static readonly UPDATE_CONNECTOR_PROFILE = "appflow:UpdateConnectorProfile";
	/** [Write] appflow:UpdateConnectorRegistration */
	static readonly UPDATE_CONNECTOR_REGISTRATION =
		"appflow:UpdateConnectorRegistration";
	/** [Write] appflow:UpdateFlow */
	static readonly UPDATE_FLOW = "appflow:UpdateFlow";
	/** [Write] appflow:UseConnectorProfile */
	static readonly USE_CONNECTOR_PROFILE = "appflow:UseConnectorProfile";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AppflowActions.DESCRIBE_CONNECTOR,
		AppflowActions.DESCRIBE_CONNECTOR_ENTITY,
		AppflowActions.DESCRIBE_CONNECTOR_FIELDS,
		AppflowActions.DESCRIBE_CONNECTOR_PROFILES,
		AppflowActions.DESCRIBE_CONNECTORS,
		AppflowActions.DESCRIBE_FLOW,
		AppflowActions.DESCRIBE_FLOW_EXECUTION,
		AppflowActions.DESCRIBE_FLOW_EXECUTION_RECORDS,
		AppflowActions.DESCRIBE_FLOWS,
		AppflowActions.LIST_CONNECTOR_FIELDS,
		AppflowActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AppflowActions.CANCEL_FLOW_EXECUTIONS,
		AppflowActions.CREATE_CONNECTOR_PROFILE,
		AppflowActions.CREATE_FLOW,
		AppflowActions.DELETE_CONNECTOR_PROFILE,
		AppflowActions.DELETE_FLOW,
		AppflowActions.REGISTER_CONNECTOR,
		AppflowActions.RESET_CONNECTOR_METADATA_CACHE,
		AppflowActions.RUN_FLOW,
		AppflowActions.START_FLOW,
		AppflowActions.STOP_FLOW,
		AppflowActions.UN_REGISTER_CONNECTOR,
		AppflowActions.UPDATE_CONNECTOR_PROFILE,
		AppflowActions.UPDATE_CONNECTOR_REGISTRATION,
		AppflowActions.UPDATE_FLOW,
		AppflowActions.USE_CONNECTOR_PROFILE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AppflowActions.LIST_CONNECTOR_ENTITIES,
		AppflowActions.LIST_CONNECTORS,
		AppflowActions.LIST_FLOWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AppflowActions.TAG_RESOURCE,
		AppflowActions.UNTAG_RESOURCE,
	];
}

const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appflow:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorLabel>[^:/?]+)$",
);
const ConnectorprofileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appflow:(?<region>[^:]*):(?<account>[^:]*):connectorprofile/(?<profileName>[^:/?]+)$",
);
const FlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):appflow:(?<region>[^:]*):(?<account>[^:]*):flow/(?<flowName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for appflow resources.
 */
export class AppflowResources {
	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: {
		/** The ConnectorLabel component of the ARN. */
		readonly connectorLabel: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorLabel: string;
	} {
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
	static connectorprofile(props: {
		/** The ProfileName component of the ARN. */
		readonly profileName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectorprofileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profileName: string;
	} {
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
	static flow(props: {
		/** The FlowName component of the ARN. */
		readonly flowName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		flowName: string;
	} {
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
	static readonly CANCEL_FLOW_EXECUTIONS: string[] = [
		"appflow:CancelFlowExecutions",
	];
	/** IAM actions required for the CreateConnectorProfile API call. */
	static readonly CREATE_CONNECTOR_PROFILE: string[] = [
		"appflow:CreateConnectorProfile",
		"appflow:DescribeConnector",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateFlow API call. */
	static readonly CREATE_FLOW: string[] = [
		"appflow:CreateFlow",
		"iam:PassRole",
		"appflow:TagResource",
		"appflow:UseConnectorProfile",
	];
	/** IAM actions required for the DeleteConnectorProfile API call. */
	static readonly DELETE_CONNECTOR_PROFILE: string[] = [
		"appflow:DeleteConnectorProfile",
	];
	/** IAM actions required for the DeleteFlow API call. */
	static readonly DELETE_FLOW: string[] = ["appflow:DeleteFlow"];
	/** IAM actions required for the DescribeConnector API call. */
	static readonly DESCRIBE_CONNECTOR: string[] = ["appflow:DescribeConnector"];
	/** IAM actions required for the DescribeConnectorEntity API call. */
	static readonly DESCRIBE_CONNECTOR_ENTITY: string[] = [
		"appflow:DescribeConnectorEntity",
	];
	/** IAM actions required for the DescribeConnectorProfiles API call. */
	static readonly DESCRIBE_CONNECTOR_PROFILES: string[] = [
		"appflow:DescribeConnectorProfiles",
	];
	/** IAM actions required for the DescribeConnectors API call. */
	static readonly DESCRIBE_CONNECTORS: string[] = [
		"appflow:DescribeConnectors",
	];
	/** IAM actions required for the DescribeFlow API call. */
	static readonly DESCRIBE_FLOW: string[] = ["appflow:DescribeFlow"];
	/** IAM actions required for the DescribeFlowExecutionRecords API call. */
	static readonly DESCRIBE_FLOW_EXECUTION_RECORDS: string[] = [
		"appflow:DescribeFlowExecutionRecords",
	];
	/** IAM actions required for the ListConnectorEntities API call. */
	static readonly LIST_CONNECTOR_ENTITIES: string[] = [
		"appflow:ListConnectorEntities",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = ["appflow:ListConnectors"];
	/** IAM actions required for the ListFlows API call. */
	static readonly LIST_FLOWS: string[] = ["appflow:ListFlows"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"appflow:ListTagsForResource",
	];
	/** IAM actions required for the RegisterConnector API call. */
	static readonly REGISTER_CONNECTOR: string[] = ["appflow:RegisterConnector"];
	/** IAM actions required for the ResetConnectorMetadataCache API call. */
	static readonly RESET_CONNECTOR_METADATA_CACHE: string[] = [
		"appflow:ResetConnectorMetadataCache",
	];
	/** IAM actions required for the StartFlow API call. */
	static readonly START_FLOW: string[] = ["appflow:StartFlow"];
	/** IAM actions required for the StopFlow API call. */
	static readonly STOP_FLOW: string[] = ["appflow:StopFlow"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["appflow:TagResource"];
	/** IAM actions required for the UnregisterConnector API call. */
	static readonly UNREGISTER_CONNECTOR: string[] = [
		"appflow:UnRegisterConnector",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["appflow:UntagResource"];
	/** IAM actions required for the UpdateConnectorProfile API call. */
	static readonly UPDATE_CONNECTOR_PROFILE: string[] = [
		"iam:PassRole",
		"appflow:UpdateConnectorProfile",
	];
	/** IAM actions required for the UpdateConnectorRegistration API call. */
	static readonly UPDATE_CONNECTOR_REGISTRATION: string[] = [
		"appflow:UpdateConnectorRegistration",
	];
	/** IAM actions required for the UpdateFlow API call. */
	static readonly UPDATE_FLOW: string[] = [
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
	static readonly CREATE_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteFlow action. */
	static readonly DELETE_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the RegisterConnector action. */
	static readonly REGISTER_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnRegisterConnector action. */
	static readonly UN_REGISTER_CONNECTOR_CONDITION_KEYS: string[] = [
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
