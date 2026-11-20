// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/bcm-data-hub.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the bcm-data-hub service.
 */
export class BcmDataHubActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "bcm-data-hub";

	/** [Write] bcm-data-hub:CancelQueryExecution */
	static readonly CancelQueryExecution = "bcm-data-hub:CancelQueryExecution";
	/** [Write] bcm-data-hub:CreateDataset */
	static readonly CreateDataset = "bcm-data-hub:CreateDataset";
	/** [Write] bcm-data-hub:DeleteDataset */
	static readonly DeleteDataset = "bcm-data-hub:DeleteDataset";
	/** [Read] bcm-data-hub:GetDataset */
	static readonly actionGetDataset = "bcm-data-hub:GetDataset";
	/** [Read] bcm-data-hub:GetDatasetSchema */
	static readonly actionGetDatasetSchema = "bcm-data-hub:GetDatasetSchema";
	/** [Read] bcm-data-hub:GetQueryExecution */
	static readonly actionGetQueryExecution = "bcm-data-hub:GetQueryExecution";
	/** [Read] bcm-data-hub:GetQueryExecutionResults */
	static readonly actionGetQueryExecutionResults =
		"bcm-data-hub:GetQueryExecutionResults";
	/** [List] bcm-data-hub:ListDatasets */
	static readonly ListDatasets = "bcm-data-hub:ListDatasets";
	/** [List] bcm-data-hub:ListQueryExecutions */
	static readonly ListQueryExecutions = "bcm-data-hub:ListQueryExecutions";
	/** [Read] bcm-data-hub:ListTagsForResource */
	static readonly ListTagsForResource = "bcm-data-hub:ListTagsForResource";
	/** [Write] bcm-data-hub:StartQueryExecution */
	static readonly StartQueryExecution = "bcm-data-hub:StartQueryExecution";
	/** [Tagging] bcm-data-hub:TagResource */
	static readonly TagResource = "bcm-data-hub:TagResource";
	/** [Tagging] bcm-data-hub:UntagResource */
	static readonly UntagResource = "bcm-data-hub:UntagResource";
	/** [Write] bcm-data-hub:UpdateDataset */
	static readonly UpdateDataset = "bcm-data-hub:UpdateDataset";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BcmDataHubActions.actionGetDataset,
		BcmDataHubActions.actionGetDatasetSchema,
		BcmDataHubActions.actionGetQueryExecution,
		BcmDataHubActions.actionGetQueryExecutionResults,
		BcmDataHubActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BcmDataHubActions.CancelQueryExecution,
		BcmDataHubActions.CreateDataset,
		BcmDataHubActions.DeleteDataset,
		BcmDataHubActions.StartQueryExecution,
		BcmDataHubActions.UpdateDataset,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		BcmDataHubActions.ListDatasets,
		BcmDataHubActions.ListQueryExecutions,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BcmDataHubActions.TagResource,
		BcmDataHubActions.UntagResource,
	];
}

/**
 * Properties for building a dataset ARN.
 */
export interface BcmDataHubDatasetArnProps {
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
 * Parsed components of a dataset ARN.
 */
export interface BcmDataHubDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):bcm-data-hub:(?<region>[^:]*):(?<account>[^:]*):dataset\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for bcm-data-hub resources.
 */
export class BcmDataHubResources {
	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: BcmDataHubDatasetArnProps): string {
		return `arn:${props.partition ?? "aws"}:bcm-data-hub:${props.region ?? "*"}:${props.account ?? "*"}:dataset/${props.identifier}`;
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
	static parseDatasetArn(arn: string): BcmDataHubDatasetArnComponents {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
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
 * Condition key constants and builders for bcm-data-hub.
 */
export class BcmDataHubConditions {
	/** Condition keys applicable to the CreateDataset action. */
	static readonly CreateDatasetConditionKeys: string[] = [
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
