// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/agent-registry.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the agent-registry service.
 */
export class AgentRegistryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "agent-registry";

	/** [Write] agent-registry:CreateRegistry */
	static readonly CreateRegistry = "agent-registry:CreateRegistry";
	/** [Write] agent-registry:CreateRegistryRecord */
	static readonly CreateRegistryRecord = "agent-registry:CreateRegistryRecord";
	/** [Write] agent-registry:DeleteRegistry */
	static readonly DeleteRegistry = "agent-registry:DeleteRegistry";
	/** [Write] agent-registry:DeleteRegistryRecord */
	static readonly DeleteRegistryRecord = "agent-registry:DeleteRegistryRecord";
	/** [Write] agent-registry:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "agent-registry:DeleteResourcePolicy";
	/** [Read] agent-registry:GetDiscoverableRegistryRecord */
	static readonly actionGetDiscoverableRegistryRecord =
		"agent-registry:GetDiscoverableRegistryRecord";
	/** [Read] agent-registry:GetRegistry */
	static readonly actionGetRegistry = "agent-registry:GetRegistry";
	/** [Read] agent-registry:GetRegistryRecord */
	static readonly actionGetRegistryRecord = "agent-registry:GetRegistryRecord";
	/** [Read] agent-registry:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "agent-registry:GetResourcePolicy";
	/** [Read] agent-registry:InvokeRegistryMcp */
	static readonly InvokeRegistryMcp = "agent-registry:InvokeRegistryMcp";
	/** [List] agent-registry:ListDiscoverableRegistryRecords */
	static readonly ListDiscoverableRegistryRecords =
		"agent-registry:ListDiscoverableRegistryRecords";
	/** [List] agent-registry:ListRegistries */
	static readonly ListRegistries = "agent-registry:ListRegistries";
	/** [List] agent-registry:ListRegistryRecords */
	static readonly ListRegistryRecords = "agent-registry:ListRegistryRecords";
	/** [List] agent-registry:ListTagsForResource */
	static readonly ListTagsForResource = "agent-registry:ListTagsForResource";
	/** [Write] agent-registry:PutResourcePolicy */
	static readonly PutResourcePolicy = "agent-registry:PutResourcePolicy";
	/** [Read] agent-registry:SearchDiscoverableRegistryRecords */
	static readonly SearchDiscoverableRegistryRecords =
		"agent-registry:SearchDiscoverableRegistryRecords";
	/** [Write] agent-registry:SubmitRegistryRecordForApproval */
	static readonly SubmitRegistryRecordForApproval =
		"agent-registry:SubmitRegistryRecordForApproval";
	/** [Tagging] agent-registry:TagResource */
	static readonly TagResource = "agent-registry:TagResource";
	/** [Tagging] agent-registry:UntagResource */
	static readonly UntagResource = "agent-registry:UntagResource";
	/** [Write] agent-registry:UpdateRegistry */
	static readonly UpdateRegistry = "agent-registry:UpdateRegistry";
	/** [Write] agent-registry:UpdateRegistryRecord */
	static readonly UpdateRegistryRecord = "agent-registry:UpdateRegistryRecord";
	/** [Write] agent-registry:UpdateRegistryRecordStatus */
	static readonly UpdateRegistryRecordStatus =
		"agent-registry:UpdateRegistryRecordStatus";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AgentRegistryActions.actionGetDiscoverableRegistryRecord,
		AgentRegistryActions.actionGetRegistry,
		AgentRegistryActions.actionGetRegistryRecord,
		AgentRegistryActions.actionGetResourcePolicy,
		AgentRegistryActions.InvokeRegistryMcp,
		AgentRegistryActions.SearchDiscoverableRegistryRecords,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AgentRegistryActions.CreateRegistry,
		AgentRegistryActions.CreateRegistryRecord,
		AgentRegistryActions.DeleteRegistry,
		AgentRegistryActions.DeleteRegistryRecord,
		AgentRegistryActions.DeleteResourcePolicy,
		AgentRegistryActions.PutResourcePolicy,
		AgentRegistryActions.SubmitRegistryRecordForApproval,
		AgentRegistryActions.UpdateRegistry,
		AgentRegistryActions.UpdateRegistryRecord,
		AgentRegistryActions.UpdateRegistryRecordStatus,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AgentRegistryActions.ListDiscoverableRegistryRecords,
		AgentRegistryActions.ListRegistries,
		AgentRegistryActions.ListRegistryRecords,
		AgentRegistryActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AgentRegistryActions.TagResource,
		AgentRegistryActions.UntagResource,
	];
}

/**
 * Properties for building a registry ARN.
 */
export interface AgentRegistryRegistryArnProps {
	/** The RegistryId component of the ARN. */
	readonly registryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a registry ARN.
 */
export interface AgentRegistryRegistryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryId component. */
	readonly registryId: string;
}

/**
 * Properties for building a registry-record ARN.
 */
export interface AgentRegistryRegistryRecordArnProps {
	/** The RegistryId component of the ARN. */
	readonly registryId: string;
	/** The RecordId component of the ARN. */
	readonly recordId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a registry-record ARN.
 */
export interface AgentRegistryRegistryRecordArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RegistryId component. */
	readonly registryId: string;
	/** The RecordId component. */
	readonly recordId: string;
}

const RegistryArnRegex =
	/^arn:(?<partition>[^:]+):agent-registry:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryId>[^:/?]+)$/;
const RegistryRecordArnRegex =
	/^arn:(?<partition>[^:]+):agent-registry:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryId>[^:/?]+)\/record\/(?<recordId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for agent-registry resources.
 */
export class AgentRegistryResources {
	/**
	 * Builds an ARN for the registry resource.
	 */
	static registry(props: AgentRegistryRegistryArnProps): string {
		return `arn:${props.partition ?? "aws"}:agent-registry:${props.region ?? "*"}:${props.account ?? "*"}:registry/${props.registryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the registry resource.
	 */
	static isValidRegistryArn(arn: string): boolean {
		return RegistryArnRegex.test(arn);
	}

	/**
	 * Parses a registry ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistryArn(arn: string): AgentRegistryRegistryArnComponents {
		const match = RegistryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid registry ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registryId: match.groups!.registryId,
		};
	}

	/**
	 * Builds an ARN for the registry-record resource.
	 */
	static registryRecord(props: AgentRegistryRegistryRecordArnProps): string {
		return `arn:${props.partition ?? "aws"}:agent-registry:${props.region ?? "*"}:${props.account ?? "*"}:registry/${props.registryId}/record/${props.recordId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the registry-record resource.
	 */
	static isValidRegistryRecordArn(arn: string): boolean {
		return RegistryRecordArnRegex.test(arn);
	}

	/**
	 * Parses a registry-record ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRegistryRecordArn(
		arn: string,
	): AgentRegistryRegistryRecordArnComponents {
		const match = RegistryRecordArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid registry-record ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			registryId: match.groups!.registryId,
			recordId: match.groups!.recordId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for agent-registry.
 */
export class AgentRegistryOperations {
	/** IAM actions required for the BatchGetDiscoverableRegistryRecord API call. */
	static readonly BatchGetDiscoverableRegistryRecord: string[] = [
		"agent-registry:GetDiscoverableRegistryRecord",
	];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CreateRegistry: string[] = [
		"agent-registry:CreateRegistry",
		"agent-registry:TagResource",
	];
	/** IAM actions required for the CreateRegistryRecord API call. */
	static readonly CreateRegistryRecord: string[] = [
		"agent-registry:CreateRegistryRecord",
		"bedrock-agentcore:GetResourceOauth2Token",
		"bedrock-agentcore:GetWorkloadAccessToken",
		"iam:PassRole",
		"agent-registry:TagResource",
	];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DeleteRegistry: string[] = ["agent-registry:DeleteRegistry"];
	/** IAM actions required for the DeleteRegistryRecord API call. */
	static readonly DeleteRegistryRecord: string[] = [
		"agent-registry:DeleteRegistryRecord",
	];
	/** IAM actions required for the GetRegistry API call. */
	static readonly opGetRegistry: string[] = ["agent-registry:GetRegistry"];
	/** IAM actions required for the GetRegistryRecord API call. */
	static readonly opGetRegistryRecord: string[] = [
		"agent-registry:GetRegistryRecord",
	];
	/** IAM actions required for the ListDiscoverableRegistryRecords API call. */
	static readonly ListDiscoverableRegistryRecords: string[] = [
		"agent-registry:ListDiscoverableRegistryRecords",
	];
	/** IAM actions required for the ListRegistries API call. */
	static readonly ListRegistries: string[] = ["agent-registry:ListRegistries"];
	/** IAM actions required for the ListRegistryRecords API call. */
	static readonly ListRegistryRecords: string[] = [
		"agent-registry:ListRegistryRecords",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"agent-registry:ListTagsForResource",
	];
	/** IAM actions required for the SearchDiscoverableRegistryRecords API call. */
	static readonly SearchDiscoverableRegistryRecords: string[] = [
		"agent-registry:SearchDiscoverableRegistryRecords",
	];
	/** IAM actions required for the SubmitRegistryRecordForApproval API call. */
	static readonly SubmitRegistryRecordForApproval: string[] = [
		"agent-registry:SubmitRegistryRecordForApproval",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["agent-registry:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["agent-registry:UntagResource"];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UpdateRegistry: string[] = ["agent-registry:UpdateRegistry"];
	/** IAM actions required for the UpdateRegistryRecord API call. */
	static readonly UpdateRegistryRecord: string[] = [
		"bedrock-agentcore:GetResourceOauth2Token",
		"bedrock-agentcore:GetWorkloadAccessToken",
		"iam:PassRole",
		"agent-registry:UpdateRegistryRecord",
	];
	/** IAM actions required for the UpdateRegistryRecordStatus API call. */
	static readonly UpdateRegistryRecordStatus: string[] = [
		"agent-registry:UpdateRegistryRecordStatus",
	];
}

/**
 * Condition key constants and builders for agent-registry.
 */
export class AgentRegistryConditions {
	/** Condition keys applicable to the CreateRegistry action. */
	static readonly CreateRegistryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRegistryRecord action. */
	static readonly CreateRegistryRecordConditionKeys: string[] = [
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

	/** Condition key: agent-registry:RecordCreatorAccount (String) */
	static readonly RECORD_CREATOR_ACCOUNT =
		"agent-registry:RecordCreatorAccount";
	/** Condition key: agent-registry:RecordSourceAccount (String) */
	static readonly RECORD_SOURCE_ACCOUNT = "agent-registry:RecordSourceAccount";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `agent-registry:RecordCreatorAccount`.
	 */
	static recordCreatorAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "agent-registry:RecordCreatorAccount": value } };
	}

	/**
	 * Generates a condition block for `agent-registry:RecordSourceAccount`.
	 */
	static recordSourceAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "agent-registry:RecordSourceAccount": value } };
	}

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
