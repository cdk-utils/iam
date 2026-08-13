// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/scn.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the scn service.
 */
export class ScnActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "scn";

	/** [Write] scn:AssignAdminPermissionsToUser */
	static readonly ASSIGN_ADMIN_PERMISSIONS_TO_USER =
		"scn:AssignAdminPermissionsToUser";
	/** [Write] scn:CreateBillOfMaterialsImportJob */
	static readonly CREATE_BILL_OF_MATERIALS_IMPORT_JOB =
		"scn:CreateBillOfMaterialsImportJob";
	/** [Write] scn:CreateDataIntegrationFlow */
	static readonly CREATE_DATA_INTEGRATION_FLOW =
		"scn:CreateDataIntegrationFlow";
	/** [Write] scn:CreateDataLakeDataset */
	static readonly CREATE_DATA_LAKE_DATASET = "scn:CreateDataLakeDataset";
	/** [Write] scn:CreateDataLakeNamespace */
	static readonly CREATE_DATA_LAKE_NAMESPACE = "scn:CreateDataLakeNamespace";
	/** [Write] scn:CreateInstance */
	static readonly CREATE_INSTANCE = "scn:CreateInstance";
	/** [Write] scn:CreateSSOApplication */
	static readonly CREATE_SSO_APPLICATION = "scn:CreateSSOApplication";
	/** [Write] scn:DeleteDataIntegrationFlow */
	static readonly DELETE_DATA_INTEGRATION_FLOW =
		"scn:DeleteDataIntegrationFlow";
	/** [Write] scn:DeleteDataLakeDataset */
	static readonly DELETE_DATA_LAKE_DATASET = "scn:DeleteDataLakeDataset";
	/** [Write] scn:DeleteDataLakeNamespace */
	static readonly DELETE_DATA_LAKE_NAMESPACE = "scn:DeleteDataLakeNamespace";
	/** [Write] scn:DeleteInstance */
	static readonly DELETE_INSTANCE = "scn:DeleteInstance";
	/** [Write] scn:DeleteSSOApplication */
	static readonly DELETE_SSO_APPLICATION = "scn:DeleteSSOApplication";
	/** [Read] scn:DescribeInstance */
	static readonly DESCRIBE_INSTANCE = "scn:DescribeInstance";
	/** [Read] scn:GetBillOfMaterialsImportJob */
	static readonly GET_BILL_OF_MATERIALS_IMPORT_JOB =
		"scn:GetBillOfMaterialsImportJob";
	/** [Read] scn:GetDataIntegrationEvent */
	static readonly GET_DATA_INTEGRATION_EVENT = "scn:GetDataIntegrationEvent";
	/** [Read] scn:GetDataIntegrationFlow */
	static readonly GET_DATA_INTEGRATION_FLOW = "scn:GetDataIntegrationFlow";
	/** [Read] scn:GetDataIntegrationFlowExecution */
	static readonly GET_DATA_INTEGRATION_FLOW_EXECUTION =
		"scn:GetDataIntegrationFlowExecution";
	/** [Read] scn:GetDataLakeDataset */
	static readonly GET_DATA_LAKE_DATASET = "scn:GetDataLakeDataset";
	/** [Read] scn:GetDataLakeNamespace */
	static readonly GET_DATA_LAKE_NAMESPACE = "scn:GetDataLakeNamespace";
	/** [Read] scn:GetInstance */
	static readonly GET_INSTANCE = "scn:GetInstance";
	/** [List] scn:ListAdminUsers */
	static readonly LIST_ADMIN_USERS = "scn:ListAdminUsers";
	/** [List] scn:ListDataIntegrationEvents */
	static readonly LIST_DATA_INTEGRATION_EVENTS =
		"scn:ListDataIntegrationEvents";
	/** [List] scn:ListDataIntegrationFlowExecutions */
	static readonly LIST_DATA_INTEGRATION_FLOW_EXECUTIONS =
		"scn:ListDataIntegrationFlowExecutions";
	/** [List] scn:ListDataIntegrationFlows */
	static readonly LIST_DATA_INTEGRATION_FLOWS = "scn:ListDataIntegrationFlows";
	/** [List] scn:ListDataLakeDatasets */
	static readonly LIST_DATA_LAKE_DATASETS = "scn:ListDataLakeDatasets";
	/** [List] scn:ListDataLakeNamespaces */
	static readonly LIST_DATA_LAKE_NAMESPACES = "scn:ListDataLakeNamespaces";
	/** [List] scn:ListInstances */
	static readonly LIST_INSTANCES = "scn:ListInstances";
	/** [List] scn:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "scn:ListTagsForResource";
	/** [Write] scn:RemoveAdminPermissionsForUser */
	static readonly REMOVE_ADMIN_PERMISSIONS_FOR_USER =
		"scn:RemoveAdminPermissionsForUser";
	/** [Write] scn:SendDataIntegrationEvent */
	static readonly SEND_DATA_INTEGRATION_EVENT = "scn:SendDataIntegrationEvent";
	/** [Tagging] scn:TagResource */
	static readonly TAG_RESOURCE = "scn:TagResource";
	/** [Tagging] scn:UntagResource */
	static readonly UNTAG_RESOURCE = "scn:UntagResource";
	/** [Write] scn:UpdateDataIntegrationFlow */
	static readonly UPDATE_DATA_INTEGRATION_FLOW =
		"scn:UpdateDataIntegrationFlow";
	/** [Write] scn:UpdateDataLakeDataset */
	static readonly UPDATE_DATA_LAKE_DATASET = "scn:UpdateDataLakeDataset";
	/** [Write] scn:UpdateDataLakeNamespace */
	static readonly UPDATE_DATA_LAKE_NAMESPACE = "scn:UpdateDataLakeNamespace";
	/** [Write] scn:UpdateInstance */
	static readonly UPDATE_INSTANCE = "scn:UpdateInstance";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ScnActions.DESCRIBE_INSTANCE,
		ScnActions.GET_BILL_OF_MATERIALS_IMPORT_JOB,
		ScnActions.GET_DATA_INTEGRATION_EVENT,
		ScnActions.GET_DATA_INTEGRATION_FLOW,
		ScnActions.GET_DATA_INTEGRATION_FLOW_EXECUTION,
		ScnActions.GET_DATA_LAKE_DATASET,
		ScnActions.GET_DATA_LAKE_NAMESPACE,
		ScnActions.GET_INSTANCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ScnActions.ASSIGN_ADMIN_PERMISSIONS_TO_USER,
		ScnActions.CREATE_BILL_OF_MATERIALS_IMPORT_JOB,
		ScnActions.CREATE_DATA_INTEGRATION_FLOW,
		ScnActions.CREATE_DATA_LAKE_DATASET,
		ScnActions.CREATE_DATA_LAKE_NAMESPACE,
		ScnActions.CREATE_INSTANCE,
		ScnActions.CREATE_SSO_APPLICATION,
		ScnActions.DELETE_DATA_INTEGRATION_FLOW,
		ScnActions.DELETE_DATA_LAKE_DATASET,
		ScnActions.DELETE_DATA_LAKE_NAMESPACE,
		ScnActions.DELETE_INSTANCE,
		ScnActions.DELETE_SSO_APPLICATION,
		ScnActions.REMOVE_ADMIN_PERMISSIONS_FOR_USER,
		ScnActions.SEND_DATA_INTEGRATION_EVENT,
		ScnActions.UPDATE_DATA_INTEGRATION_FLOW,
		ScnActions.UPDATE_DATA_LAKE_DATASET,
		ScnActions.UPDATE_DATA_LAKE_NAMESPACE,
		ScnActions.UPDATE_INSTANCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ScnActions.LIST_ADMIN_USERS,
		ScnActions.LIST_DATA_INTEGRATION_EVENTS,
		ScnActions.LIST_DATA_INTEGRATION_FLOW_EXECUTIONS,
		ScnActions.LIST_DATA_INTEGRATION_FLOWS,
		ScnActions.LIST_DATA_LAKE_DATASETS,
		ScnActions.LIST_DATA_LAKE_NAMESPACES,
		ScnActions.LIST_INSTANCES,
		ScnActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ScnActions.TAG_RESOURCE,
		ScnActions.UNTAG_RESOURCE,
	];
}

const BillOfMaterialsImportJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/bill-of-materials-import-job/(?<jobId>[^:/?]+)$",
);
const DataIntegrationFlowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/data-integration-flows/(?<flowName>[^:/?]+)$",
);
const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/namespaces/(?<namespace>[^:/?]+)/datasets/(?<datasetName>[^:/?]+)$",
);
const InstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)$",
);
const NamespaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance/(?<instanceId>[^:/?]+)/namespaces/(?<namespace>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for scn resources.
 */
export class ScnResources {
	/**
	 * Builds an ARN for the bill-of-materials-import-job resource.
	 */
	static billOfMaterialsImportJob(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:scn:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/bill-of-materials-import-job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the bill-of-materials-import-job resource.
	 */
	static isValidBillOfMaterialsImportJobArn(arn: string): boolean {
		return BillOfMaterialsImportJobArnRegex.test(arn);
	}

	/**
	 * Parses a bill-of-materials-import-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBillOfMaterialsImportJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		jobId: string;
	} {
		const match = BillOfMaterialsImportJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid bill-of-materials-import-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the data-integration-flow resource.
	 */
	static dataIntegrationFlow(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The FlowName component of the ARN. */
		readonly flowName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:scn:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/data-integration-flows/${props.flowName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the data-integration-flow resource.
	 */
	static isValidDataIntegrationFlowArn(arn: string): boolean {
		return DataIntegrationFlowArnRegex.test(arn);
	}

	/**
	 * Parses a data-integration-flow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDataIntegrationFlowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		flowName: string;
	} {
		const match = DataIntegrationFlowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid data-integration-flow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			flowName: match.groups!.flowName,
		};
	}

	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The Namespace component of the ARN. */
		readonly namespace: string;
		/** The DatasetName component of the ARN. */
		readonly datasetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:scn:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/namespaces/${props.namespace}/datasets/${props.datasetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		namespace: string;
		datasetName: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			namespace: match.groups!.namespace,
			datasetName: match.groups!.datasetName,
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
		return `arn:${props.partition ?? "aws"}:scn:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}`;
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

	/**
	 * Builds an ARN for the namespace resource.
	 */
	static namespace(props: {
		/** The InstanceId component of the ARN. */
		readonly instanceId: string;
		/** The Namespace component of the ARN. */
		readonly namespace: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:scn:${props.region ?? "*"}:${props.account ?? "*"}:instance/${props.instanceId}/namespaces/${props.namespace}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the namespace resource.
	 */
	static isValidNamespaceArn(arn: string): boolean {
		return NamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a namespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNamespaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		instanceId: string;
		namespace: string;
	} {
		const match = NamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid namespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			instanceId: match.groups!.instanceId,
			namespace: match.groups!.namespace,
		};
	}
}

/**
 * API operation to required IAM actions mapping for scn.
 */
export class ScnOperations {
	/** IAM actions required for the CreateBillOfMaterialsImportJob API call. */
	static readonly CREATE_BILL_OF_MATERIALS_IMPORT_JOB: string[] = [
		"scn:CreateBillOfMaterialsImportJob",
	];
	/** IAM actions required for the CreateDataIntegrationFlow API call. */
	static readonly CREATE_DATA_INTEGRATION_FLOW: string[] = [
		"scn:CreateDataIntegrationFlow",
		"scn:TagResource",
	];
	/** IAM actions required for the CreateDataLakeDataset API call. */
	static readonly CREATE_DATA_LAKE_DATASET: string[] = [
		"scn:CreateDataLakeDataset",
		"scn:TagResource",
	];
	/** IAM actions required for the CreateDataLakeNamespace API call. */
	static readonly CREATE_DATA_LAKE_NAMESPACE: string[] = [
		"scn:CreateDataLakeNamespace",
		"scn:TagResource",
	];
	/** IAM actions required for the CreateInstance API call. */
	static readonly CREATE_INSTANCE: string[] = [
		"scn:CreateInstance",
		"scn:TagResource",
	];
	/** IAM actions required for the DeleteDataIntegrationFlow API call. */
	static readonly DELETE_DATA_INTEGRATION_FLOW: string[] = [
		"scn:DeleteDataIntegrationFlow",
	];
	/** IAM actions required for the DeleteDataLakeDataset API call. */
	static readonly DELETE_DATA_LAKE_DATASET: string[] = [
		"scn:DeleteDataLakeDataset",
	];
	/** IAM actions required for the DeleteDataLakeNamespace API call. */
	static readonly DELETE_DATA_LAKE_NAMESPACE: string[] = [
		"scn:DeleteDataLakeNamespace",
	];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DELETE_INSTANCE: string[] = ["scn:DeleteInstance"];
	/** IAM actions required for the GetBillOfMaterialsImportJob API call. */
	static readonly GET_BILL_OF_MATERIALS_IMPORT_JOB: string[] = [
		"scn:GetBillOfMaterialsImportJob",
	];
	/** IAM actions required for the GetDataIntegrationEvent API call. */
	static readonly GET_DATA_INTEGRATION_EVENT: string[] = [
		"scn:GetDataIntegrationEvent",
	];
	/** IAM actions required for the GetDataIntegrationFlow API call. */
	static readonly GET_DATA_INTEGRATION_FLOW: string[] = [
		"scn:GetDataIntegrationFlow",
	];
	/** IAM actions required for the GetDataIntegrationFlowExecution API call. */
	static readonly GET_DATA_INTEGRATION_FLOW_EXECUTION: string[] = [
		"scn:GetDataIntegrationFlowExecution",
	];
	/** IAM actions required for the GetDataLakeDataset API call. */
	static readonly GET_DATA_LAKE_DATASET: string[] = ["scn:GetDataLakeDataset"];
	/** IAM actions required for the GetDataLakeNamespace API call. */
	static readonly GET_DATA_LAKE_NAMESPACE: string[] = [
		"scn:GetDataLakeNamespace",
	];
	/** IAM actions required for the GetInstance API call. */
	static readonly GET_INSTANCE: string[] = ["scn:GetInstance"];
	/** IAM actions required for the ListDataIntegrationEvents API call. */
	static readonly LIST_DATA_INTEGRATION_EVENTS: string[] = [
		"scn:ListDataIntegrationEvents",
	];
	/** IAM actions required for the ListDataIntegrationFlowExecutions API call. */
	static readonly LIST_DATA_INTEGRATION_FLOW_EXECUTIONS: string[] = [
		"scn:ListDataIntegrationFlowExecutions",
	];
	/** IAM actions required for the ListDataIntegrationFlows API call. */
	static readonly LIST_DATA_INTEGRATION_FLOWS: string[] = [
		"scn:ListDataIntegrationFlows",
	];
	/** IAM actions required for the ListDataLakeDatasets API call. */
	static readonly LIST_DATA_LAKE_DATASETS: string[] = [
		"scn:ListDataLakeDatasets",
	];
	/** IAM actions required for the ListDataLakeNamespaces API call. */
	static readonly LIST_DATA_LAKE_NAMESPACES: string[] = [
		"scn:ListDataLakeNamespaces",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly LIST_INSTANCES: string[] = ["scn:ListInstances"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"scn:ListTagsForResource",
	];
	/** IAM actions required for the SendDataIntegrationEvent API call. */
	static readonly SEND_DATA_INTEGRATION_EVENT: string[] = [
		"scn:SendDataIntegrationEvent",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["scn:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["scn:UntagResource"];
	/** IAM actions required for the UpdateDataIntegrationFlow API call. */
	static readonly UPDATE_DATA_INTEGRATION_FLOW: string[] = [
		"scn:UpdateDataIntegrationFlow",
	];
	/** IAM actions required for the UpdateDataLakeDataset API call. */
	static readonly UPDATE_DATA_LAKE_DATASET: string[] = [
		"scn:UpdateDataLakeDataset",
	];
	/** IAM actions required for the UpdateDataLakeNamespace API call. */
	static readonly UPDATE_DATA_LAKE_NAMESPACE: string[] = [
		"scn:UpdateDataLakeNamespace",
	];
	/** IAM actions required for the UpdateInstance API call. */
	static readonly UPDATE_INSTANCE: string[] = ["scn:UpdateInstance"];
}

/**
 * Condition key constants and builders for scn.
 */
export class ScnConditions {
	/** Condition keys applicable to the CreateDataIntegrationFlow action. */
	static readonly CREATE_DATA_INTEGRATION_FLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataLakeDataset action. */
	static readonly CREATE_DATA_LAKE_DATASET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataLakeNamespace action. */
	static readonly CREATE_DATA_LAKE_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstance action. */
	static readonly CREATE_INSTANCE_CONDITION_KEYS: string[] = [
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
