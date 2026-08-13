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
	static readonly CREATE_REGISTRY = "agent-registry:CreateRegistry";
	/** [Write] agent-registry:CreateRegistryRecord */
	static readonly CREATE_REGISTRY_RECORD =
		"agent-registry:CreateRegistryRecord";
	/** [Write] agent-registry:DeleteRegistry */
	static readonly DELETE_REGISTRY = "agent-registry:DeleteRegistry";
	/** [Write] agent-registry:DeleteRegistryRecord */
	static readonly DELETE_REGISTRY_RECORD =
		"agent-registry:DeleteRegistryRecord";
	/** [Read] agent-registry:GetDiscoverableRegistryRecord */
	static readonly GET_DISCOVERABLE_REGISTRY_RECORD =
		"agent-registry:GetDiscoverableRegistryRecord";
	/** [Read] agent-registry:GetRegistry */
	static readonly GET_REGISTRY = "agent-registry:GetRegistry";
	/** [Read] agent-registry:GetRegistryRecord */
	static readonly GET_REGISTRY_RECORD = "agent-registry:GetRegistryRecord";
	/** [Read] agent-registry:InvokeRegistryMcp */
	static readonly INVOKE_REGISTRY_MCP = "agent-registry:InvokeRegistryMcp";
	/** [List] agent-registry:ListDiscoverableRegistryRecords */
	static readonly LIST_DISCOVERABLE_REGISTRY_RECORDS =
		"agent-registry:ListDiscoverableRegistryRecords";
	/** [List] agent-registry:ListRegistries */
	static readonly LIST_REGISTRIES = "agent-registry:ListRegistries";
	/** [List] agent-registry:ListRegistryRecords */
	static readonly LIST_REGISTRY_RECORDS = "agent-registry:ListRegistryRecords";
	/** [List] agent-registry:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "agent-registry:ListTagsForResource";
	/** [Read] agent-registry:SearchDiscoverableRegistryRecords */
	static readonly SEARCH_DISCOVERABLE_REGISTRY_RECORDS =
		"agent-registry:SearchDiscoverableRegistryRecords";
	/** [Write] agent-registry:SubmitRegistryRecordForApproval */
	static readonly SUBMIT_REGISTRY_RECORD_FOR_APPROVAL =
		"agent-registry:SubmitRegistryRecordForApproval";
	/** [Tagging] agent-registry:TagResource */
	static readonly TAG_RESOURCE = "agent-registry:TagResource";
	/** [Tagging] agent-registry:UntagResource */
	static readonly UNTAG_RESOURCE = "agent-registry:UntagResource";
	/** [Write] agent-registry:UpdateRegistry */
	static readonly UPDATE_REGISTRY = "agent-registry:UpdateRegistry";
	/** [Write] agent-registry:UpdateRegistryRecord */
	static readonly UPDATE_REGISTRY_RECORD =
		"agent-registry:UpdateRegistryRecord";
	/** [Write] agent-registry:UpdateRegistryRecordStatus */
	static readonly UPDATE_REGISTRY_RECORD_STATUS =
		"agent-registry:UpdateRegistryRecordStatus";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AgentRegistryActions.GET_DISCOVERABLE_REGISTRY_RECORD,
		AgentRegistryActions.GET_REGISTRY,
		AgentRegistryActions.GET_REGISTRY_RECORD,
		AgentRegistryActions.INVOKE_REGISTRY_MCP,
		AgentRegistryActions.SEARCH_DISCOVERABLE_REGISTRY_RECORDS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AgentRegistryActions.CREATE_REGISTRY,
		AgentRegistryActions.CREATE_REGISTRY_RECORD,
		AgentRegistryActions.DELETE_REGISTRY,
		AgentRegistryActions.DELETE_REGISTRY_RECORD,
		AgentRegistryActions.SUBMIT_REGISTRY_RECORD_FOR_APPROVAL,
		AgentRegistryActions.UPDATE_REGISTRY,
		AgentRegistryActions.UPDATE_REGISTRY_RECORD,
		AgentRegistryActions.UPDATE_REGISTRY_RECORD_STATUS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AgentRegistryActions.LIST_DISCOVERABLE_REGISTRY_RECORDS,
		AgentRegistryActions.LIST_REGISTRIES,
		AgentRegistryActions.LIST_REGISTRY_RECORDS,
		AgentRegistryActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AgentRegistryActions.TAG_RESOURCE,
		AgentRegistryActions.UNTAG_RESOURCE,
	];
}

const RegistryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):agent-registry:(?<region>[^:]*):(?<account>[^:]*):registry/(?<registryId>[^:/?]+)$",
);
const RegistryRecordArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):agent-registry:(?<region>[^:]*):(?<account>[^:]*):registry/(?<registryId>[^:/?]+)/record/(?<recordId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for agent-registry resources.
 */
export class AgentRegistryResources {
	/**
	 * Builds an ARN for the registry resource.
	 */
	static registry(props: {
		/** The RegistryId component of the ARN. */
		readonly registryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRegistryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		registryId: string;
	} {
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
	static registryRecord(props: {
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
	}): string {
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
	static parseRegistryRecordArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		registryId: string;
		recordId: string;
	} {
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
	static readonly BATCH_GET_DISCOVERABLE_REGISTRY_RECORD: string[] = [
		"agent-registry:GetDiscoverableRegistryRecord",
	];
	/** IAM actions required for the CreateRegistry API call. */
	static readonly CREATE_REGISTRY: string[] = [
		"agent-registry:CreateRegistry",
		"agent-registry:TagResource",
	];
	/** IAM actions required for the CreateRegistryRecord API call. */
	static readonly CREATE_REGISTRY_RECORD: string[] = [
		"agent-registry:CreateRegistryRecord",
		"iam:PassRole",
		"agent-registry:TagResource",
	];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DELETE_REGISTRY: string[] = ["agent-registry:DeleteRegistry"];
	/** IAM actions required for the DeleteRegistryRecord API call. */
	static readonly DELETE_REGISTRY_RECORD: string[] = [
		"agent-registry:DeleteRegistryRecord",
	];
	/** IAM actions required for the GetRegistry API call. */
	static readonly GET_REGISTRY: string[] = ["agent-registry:GetRegistry"];
	/** IAM actions required for the GetRegistryRecord API call. */
	static readonly GET_REGISTRY_RECORD: string[] = [
		"agent-registry:GetRegistryRecord",
	];
	/** IAM actions required for the ListDiscoverableRegistryRecords API call. */
	static readonly LIST_DISCOVERABLE_REGISTRY_RECORDS: string[] = [
		"agent-registry:ListDiscoverableRegistryRecords",
	];
	/** IAM actions required for the ListRegistries API call. */
	static readonly LIST_REGISTRIES: string[] = ["agent-registry:ListRegistries"];
	/** IAM actions required for the ListRegistryRecords API call. */
	static readonly LIST_REGISTRY_RECORDS: string[] = [
		"agent-registry:ListRegistryRecords",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"agent-registry:ListTagsForResource",
	];
	/** IAM actions required for the SearchDiscoverableRegistryRecords API call. */
	static readonly SEARCH_DISCOVERABLE_REGISTRY_RECORDS: string[] = [
		"agent-registry:SearchDiscoverableRegistryRecords",
	];
	/** IAM actions required for the SubmitRegistryRecordForApproval API call. */
	static readonly SUBMIT_REGISTRY_RECORD_FOR_APPROVAL: string[] = [
		"agent-registry:SubmitRegistryRecordForApproval",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["agent-registry:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["agent-registry:UntagResource"];
	/** IAM actions required for the UpdateRegistry API call. */
	static readonly UPDATE_REGISTRY: string[] = ["agent-registry:UpdateRegistry"];
	/** IAM actions required for the UpdateRegistryRecord API call. */
	static readonly UPDATE_REGISTRY_RECORD: string[] = [
		"iam:PassRole",
		"agent-registry:UpdateRegistryRecord",
	];
	/** IAM actions required for the UpdateRegistryRecordStatus API call. */
	static readonly UPDATE_REGISTRY_RECORD_STATUS: string[] = [
		"agent-registry:UpdateRegistryRecordStatus",
	];
}

/**
 * Condition key constants and builders for agent-registry.
 */
export class AgentRegistryConditions {
	/** Condition keys applicable to the CreateRegistry action. */
	static readonly CREATE_REGISTRY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRegistryRecord action. */
	static readonly CREATE_REGISTRY_RECORD_CONDITION_KEYS: string[] = [
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
