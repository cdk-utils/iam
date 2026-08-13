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
	static readonly AssignAdminPermissionsToUser =
		"scn:AssignAdminPermissionsToUser";
	/** [Write] scn:CreateBillOfMaterialsImportJob */
	static readonly CreateBillOfMaterialsImportJob =
		"scn:CreateBillOfMaterialsImportJob";
	/** [Write] scn:CreateDataIntegrationFlow */
	static readonly CreateDataIntegrationFlow = "scn:CreateDataIntegrationFlow";
	/** [Write] scn:CreateDataLakeDataset */
	static readonly CreateDataLakeDataset = "scn:CreateDataLakeDataset";
	/** [Write] scn:CreateDataLakeNamespace */
	static readonly CreateDataLakeNamespace = "scn:CreateDataLakeNamespace";
	/** [Write] scn:CreateInstance */
	static readonly CreateInstance = "scn:CreateInstance";
	/** [Write] scn:CreateSSOApplication */
	static readonly CreateSSOApplication = "scn:CreateSSOApplication";
	/** [Write] scn:DeleteDataIntegrationFlow */
	static readonly DeleteDataIntegrationFlow = "scn:DeleteDataIntegrationFlow";
	/** [Write] scn:DeleteDataLakeDataset */
	static readonly DeleteDataLakeDataset = "scn:DeleteDataLakeDataset";
	/** [Write] scn:DeleteDataLakeNamespace */
	static readonly DeleteDataLakeNamespace = "scn:DeleteDataLakeNamespace";
	/** [Write] scn:DeleteInstance */
	static readonly DeleteInstance = "scn:DeleteInstance";
	/** [Write] scn:DeleteSSOApplication */
	static readonly DeleteSSOApplication = "scn:DeleteSSOApplication";
	/** [Read] scn:DescribeInstance */
	static readonly DescribeInstance = "scn:DescribeInstance";
	/** [Read] scn:GetBillOfMaterialsImportJob */
	static readonly actionGetBillOfMaterialsImportJob =
		"scn:GetBillOfMaterialsImportJob";
	/** [Read] scn:GetDataIntegrationEvent */
	static readonly actionGetDataIntegrationEvent = "scn:GetDataIntegrationEvent";
	/** [Read] scn:GetDataIntegrationFlow */
	static readonly actionGetDataIntegrationFlow = "scn:GetDataIntegrationFlow";
	/** [Read] scn:GetDataIntegrationFlowExecution */
	static readonly actionGetDataIntegrationFlowExecution =
		"scn:GetDataIntegrationFlowExecution";
	/** [Read] scn:GetDataLakeDataset */
	static readonly actionGetDataLakeDataset = "scn:GetDataLakeDataset";
	/** [Read] scn:GetDataLakeNamespace */
	static readonly actionGetDataLakeNamespace = "scn:GetDataLakeNamespace";
	/** [Read] scn:GetInstance */
	static readonly actionGetInstance = "scn:GetInstance";
	/** [List] scn:ListAdminUsers */
	static readonly ListAdminUsers = "scn:ListAdminUsers";
	/** [List] scn:ListDataIntegrationEvents */
	static readonly ListDataIntegrationEvents = "scn:ListDataIntegrationEvents";
	/** [List] scn:ListDataIntegrationFlowExecutions */
	static readonly ListDataIntegrationFlowExecutions =
		"scn:ListDataIntegrationFlowExecutions";
	/** [List] scn:ListDataIntegrationFlows */
	static readonly ListDataIntegrationFlows = "scn:ListDataIntegrationFlows";
	/** [List] scn:ListDataLakeDatasets */
	static readonly ListDataLakeDatasets = "scn:ListDataLakeDatasets";
	/** [List] scn:ListDataLakeNamespaces */
	static readonly ListDataLakeNamespaces = "scn:ListDataLakeNamespaces";
	/** [List] scn:ListInstances */
	static readonly ListInstances = "scn:ListInstances";
	/** [List] scn:ListTagsForResource */
	static readonly ListTagsForResource = "scn:ListTagsForResource";
	/** [Write] scn:RemoveAdminPermissionsForUser */
	static readonly RemoveAdminPermissionsForUser =
		"scn:RemoveAdminPermissionsForUser";
	/** [Write] scn:SendDataIntegrationEvent */
	static readonly SendDataIntegrationEvent = "scn:SendDataIntegrationEvent";
	/** [Tagging] scn:TagResource */
	static readonly TagResource = "scn:TagResource";
	/** [Tagging] scn:UntagResource */
	static readonly UntagResource = "scn:UntagResource";
	/** [Write] scn:UpdateDataIntegrationFlow */
	static readonly UpdateDataIntegrationFlow = "scn:UpdateDataIntegrationFlow";
	/** [Write] scn:UpdateDataLakeDataset */
	static readonly UpdateDataLakeDataset = "scn:UpdateDataLakeDataset";
	/** [Write] scn:UpdateDataLakeNamespace */
	static readonly UpdateDataLakeNamespace = "scn:UpdateDataLakeNamespace";
	/** [Write] scn:UpdateInstance */
	static readonly UpdateInstance = "scn:UpdateInstance";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ScnActions.DescribeInstance,
		ScnActions.actionGetBillOfMaterialsImportJob,
		ScnActions.actionGetDataIntegrationEvent,
		ScnActions.actionGetDataIntegrationFlow,
		ScnActions.actionGetDataIntegrationFlowExecution,
		ScnActions.actionGetDataLakeDataset,
		ScnActions.actionGetDataLakeNamespace,
		ScnActions.actionGetInstance,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ScnActions.AssignAdminPermissionsToUser,
		ScnActions.CreateBillOfMaterialsImportJob,
		ScnActions.CreateDataIntegrationFlow,
		ScnActions.CreateDataLakeDataset,
		ScnActions.CreateDataLakeNamespace,
		ScnActions.CreateInstance,
		ScnActions.CreateSSOApplication,
		ScnActions.DeleteDataIntegrationFlow,
		ScnActions.DeleteDataLakeDataset,
		ScnActions.DeleteDataLakeNamespace,
		ScnActions.DeleteInstance,
		ScnActions.DeleteSSOApplication,
		ScnActions.RemoveAdminPermissionsForUser,
		ScnActions.SendDataIntegrationEvent,
		ScnActions.UpdateDataIntegrationFlow,
		ScnActions.UpdateDataLakeDataset,
		ScnActions.UpdateDataLakeNamespace,
		ScnActions.UpdateInstance,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ScnActions.ListAdminUsers,
		ScnActions.ListDataIntegrationEvents,
		ScnActions.ListDataIntegrationFlowExecutions,
		ScnActions.ListDataIntegrationFlows,
		ScnActions.ListDataLakeDatasets,
		ScnActions.ListDataLakeNamespaces,
		ScnActions.ListInstances,
		ScnActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ScnActions.TagResource,
		ScnActions.UntagResource,
	];
}

/**
 * Properties for building a bill-of-materials-import-job ARN.
 */
export interface ScnBillOfMaterialsImportJobArnProps {
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
}

/**
 * Parsed components of a bill-of-materials-import-job ARN.
 */
export interface ScnBillOfMaterialsImportJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a data-integration-flow ARN.
 */
export interface ScnDataIntegrationFlowArnProps {
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
}

/**
 * Parsed components of a data-integration-flow ARN.
 */
export interface ScnDataIntegrationFlowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The FlowName component. */
	readonly flowName: string;
}

/**
 * Properties for building a dataset ARN.
 */
export interface ScnDatasetArnProps {
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
}

/**
 * Parsed components of a dataset ARN.
 */
export interface ScnDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The Namespace component. */
	readonly namespace: string;
	/** The DatasetName component. */
	readonly datasetName: string;
}

/**
 * Properties for building a instance ARN.
 */
export interface ScnInstanceArnProps {
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
export interface ScnInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
}

/**
 * Properties for building a namespace ARN.
 */
export interface ScnNamespaceArnProps {
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
}

/**
 * Parsed components of a namespace ARN.
 */
export interface ScnNamespaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The InstanceId component. */
	readonly instanceId: string;
	/** The Namespace component. */
	readonly namespace: string;
}

const BillOfMaterialsImportJobArnRegex =
	/^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/bill-of-materials-import-job\/(?<jobId>[^:/?]+)$/;
const DataIntegrationFlowArnRegex =
	/^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/data-integration-flows\/(?<flowName>[^:/?]+)$/;
const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/namespaces\/(?<namespace>[^:/?]+)\/datasets\/(?<datasetName>[^:/?]+)$/;
const InstanceArnRegex =
	/^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)$/;
const NamespaceArnRegex =
	/^arn:(?<partition>[^:]+):scn:(?<region>[^:]*):(?<account>[^:]*):instance\/(?<instanceId>[^:/?]+)\/namespaces\/(?<namespace>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for scn resources.
 */
export class ScnResources {
	/**
	 * Builds an ARN for the bill-of-materials-import-job resource.
	 */
	static billOfMaterialsImportJob(
		props: ScnBillOfMaterialsImportJobArnProps,
	): string {
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
	static parseBillOfMaterialsImportJobArn(
		arn: string,
	): ScnBillOfMaterialsImportJobArnComponents {
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
	static dataIntegrationFlow(props: ScnDataIntegrationFlowArnProps): string {
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
	static parseDataIntegrationFlowArn(
		arn: string,
	): ScnDataIntegrationFlowArnComponents {
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
	static dataset(props: ScnDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): ScnDatasetArnComponents {
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
	static instance(props: ScnInstanceArnProps): string {
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
	static parseInstanceArn(arn: string): ScnInstanceArnComponents {
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
	static namespace(props: ScnNamespaceArnProps): string {
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
	static parseNamespaceArn(arn: string): ScnNamespaceArnComponents {
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
	static readonly CreateBillOfMaterialsImportJob: string[] = [
		"scn:CreateBillOfMaterialsImportJob",
	];
	/** IAM actions required for the CreateDataIntegrationFlow API call. */
	static readonly CreateDataIntegrationFlow: string[] = [
		"scn:CreateDataIntegrationFlow",
		"scn:TagResource",
	];
	/** IAM actions required for the CreateDataLakeDataset API call. */
	static readonly CreateDataLakeDataset: string[] = [
		"scn:CreateDataLakeDataset",
		"scn:TagResource",
	];
	/** IAM actions required for the CreateDataLakeNamespace API call. */
	static readonly CreateDataLakeNamespace: string[] = [
		"scn:CreateDataLakeNamespace",
		"scn:TagResource",
	];
	/** IAM actions required for the CreateInstance API call. */
	static readonly CreateInstance: string[] = [
		"scn:CreateInstance",
		"scn:TagResource",
	];
	/** IAM actions required for the DeleteDataIntegrationFlow API call. */
	static readonly DeleteDataIntegrationFlow: string[] = [
		"scn:DeleteDataIntegrationFlow",
	];
	/** IAM actions required for the DeleteDataLakeDataset API call. */
	static readonly DeleteDataLakeDataset: string[] = [
		"scn:DeleteDataLakeDataset",
	];
	/** IAM actions required for the DeleteDataLakeNamespace API call. */
	static readonly DeleteDataLakeNamespace: string[] = [
		"scn:DeleteDataLakeNamespace",
	];
	/** IAM actions required for the DeleteInstance API call. */
	static readonly DeleteInstance: string[] = ["scn:DeleteInstance"];
	/** IAM actions required for the GetBillOfMaterialsImportJob API call. */
	static readonly opGetBillOfMaterialsImportJob: string[] = [
		"scn:GetBillOfMaterialsImportJob",
	];
	/** IAM actions required for the GetDataIntegrationEvent API call. */
	static readonly opGetDataIntegrationEvent: string[] = [
		"scn:GetDataIntegrationEvent",
	];
	/** IAM actions required for the GetDataIntegrationFlow API call. */
	static readonly opGetDataIntegrationFlow: string[] = [
		"scn:GetDataIntegrationFlow",
	];
	/** IAM actions required for the GetDataIntegrationFlowExecution API call. */
	static readonly opGetDataIntegrationFlowExecution: string[] = [
		"scn:GetDataIntegrationFlowExecution",
	];
	/** IAM actions required for the GetDataLakeDataset API call. */
	static readonly opGetDataLakeDataset: string[] = ["scn:GetDataLakeDataset"];
	/** IAM actions required for the GetDataLakeNamespace API call. */
	static readonly opGetDataLakeNamespace: string[] = [
		"scn:GetDataLakeNamespace",
	];
	/** IAM actions required for the GetInstance API call. */
	static readonly opGetInstance: string[] = ["scn:GetInstance"];
	/** IAM actions required for the ListDataIntegrationEvents API call. */
	static readonly ListDataIntegrationEvents: string[] = [
		"scn:ListDataIntegrationEvents",
	];
	/** IAM actions required for the ListDataIntegrationFlowExecutions API call. */
	static readonly ListDataIntegrationFlowExecutions: string[] = [
		"scn:ListDataIntegrationFlowExecutions",
	];
	/** IAM actions required for the ListDataIntegrationFlows API call. */
	static readonly ListDataIntegrationFlows: string[] = [
		"scn:ListDataIntegrationFlows",
	];
	/** IAM actions required for the ListDataLakeDatasets API call. */
	static readonly ListDataLakeDatasets: string[] = ["scn:ListDataLakeDatasets"];
	/** IAM actions required for the ListDataLakeNamespaces API call. */
	static readonly ListDataLakeNamespaces: string[] = [
		"scn:ListDataLakeNamespaces",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly ListInstances: string[] = ["scn:ListInstances"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["scn:ListTagsForResource"];
	/** IAM actions required for the SendDataIntegrationEvent API call. */
	static readonly SendDataIntegrationEvent: string[] = [
		"scn:SendDataIntegrationEvent",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["scn:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["scn:UntagResource"];
	/** IAM actions required for the UpdateDataIntegrationFlow API call. */
	static readonly UpdateDataIntegrationFlow: string[] = [
		"scn:UpdateDataIntegrationFlow",
	];
	/** IAM actions required for the UpdateDataLakeDataset API call. */
	static readonly UpdateDataLakeDataset: string[] = [
		"scn:UpdateDataLakeDataset",
	];
	/** IAM actions required for the UpdateDataLakeNamespace API call. */
	static readonly UpdateDataLakeNamespace: string[] = [
		"scn:UpdateDataLakeNamespace",
	];
	/** IAM actions required for the UpdateInstance API call. */
	static readonly UpdateInstance: string[] = ["scn:UpdateInstance"];
}

/**
 * Condition key constants and builders for scn.
 */
export class ScnConditions {
	/** Condition keys applicable to the CreateDataIntegrationFlow action. */
	static readonly CreateDataIntegrationFlowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataLakeDataset action. */
	static readonly CreateDataLakeDatasetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDataLakeNamespace action. */
	static readonly CreateDataLakeNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateInstance action. */
	static readonly CreateInstanceConditionKeys: string[] = [
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
