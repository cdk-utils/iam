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

	/** [Write] agent-registry:AssociatePublisher */
	static readonly AssociatePublisher = "agent-registry:AssociatePublisher";
	/** [Write] agent-registry:CompleteRegistryRecordTokenAuth */
	static readonly CompleteRegistryRecordTokenAuth =
		"agent-registry:CompleteRegistryRecordTokenAuth";
	/** [Write] agent-registry:CreatePublisher */
	static readonly CreatePublisher = "agent-registry:CreatePublisher";
	/** [Write] agent-registry:CreateRegistry */
	static readonly CreateRegistry = "agent-registry:CreateRegistry";
	/** [Write] agent-registry:CreateRegistryRecord */
	static readonly CreateRegistryRecord = "agent-registry:CreateRegistryRecord";
	/** [Write] agent-registry:DeletePublisher */
	static readonly DeletePublisher = "agent-registry:DeletePublisher";
	/** [Write] agent-registry:DeleteRegistry */
	static readonly DeleteRegistry = "agent-registry:DeleteRegistry";
	/** [Write] agent-registry:DeleteRegistryRecord */
	static readonly DeleteRegistryRecord = "agent-registry:DeleteRegistryRecord";
	/** [Write] agent-registry:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "agent-registry:DeleteResourcePolicy";
	/** [Write] agent-registry:DisassociatePublisher */
	static readonly DisassociatePublisher =
		"agent-registry:DisassociatePublisher";
	/** [Read] agent-registry:GetDiscoverableRegistryRecord */
	static readonly actionGetDiscoverableRegistryRecord =
		"agent-registry:GetDiscoverableRegistryRecord";
	/** [Read] agent-registry:GetPublisher */
	static readonly actionGetPublisher = "agent-registry:GetPublisher";
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
	/** [List] agent-registry:ListPublisherAssociations */
	static readonly ListPublisherAssociations =
		"agent-registry:ListPublisherAssociations";
	/** [List] agent-registry:ListPublishers */
	static readonly ListPublishers = "agent-registry:ListPublishers";
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
	/** [Write] agent-registry:UpdatePublisherAssociationApprovalStatus */
	static readonly UpdatePublisherAssociationApprovalStatus =
		"agent-registry:UpdatePublisherAssociationApprovalStatus";
	/** [Write] agent-registry:UpdateRegistry */
	static readonly UpdateRegistry = "agent-registry:UpdateRegistry";
	/** [Write] agent-registry:UpdateRegistryRecord */
	static readonly UpdateRegistryRecord = "agent-registry:UpdateRegistryRecord";
	/** [Write] agent-registry:UpdateRegistryRecordStatus */
	static readonly UpdateRegistryRecordStatus =
		"agent-registry:UpdateRegistryRecordStatus";
	/** [Write] agent-registry:ValidatePublisher */
	static readonly ValidatePublisher = "agent-registry:ValidatePublisher";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AgentRegistryActions.actionGetDiscoverableRegistryRecord,
		AgentRegistryActions.actionGetPublisher,
		AgentRegistryActions.actionGetRegistry,
		AgentRegistryActions.actionGetRegistryRecord,
		AgentRegistryActions.actionGetResourcePolicy,
		AgentRegistryActions.InvokeRegistryMcp,
		AgentRegistryActions.SearchDiscoverableRegistryRecords,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AgentRegistryActions.AssociatePublisher,
		AgentRegistryActions.CompleteRegistryRecordTokenAuth,
		AgentRegistryActions.CreatePublisher,
		AgentRegistryActions.CreateRegistry,
		AgentRegistryActions.CreateRegistryRecord,
		AgentRegistryActions.DeletePublisher,
		AgentRegistryActions.DeleteRegistry,
		AgentRegistryActions.DeleteRegistryRecord,
		AgentRegistryActions.DeleteResourcePolicy,
		AgentRegistryActions.DisassociatePublisher,
		AgentRegistryActions.PutResourcePolicy,
		AgentRegistryActions.SubmitRegistryRecordForApproval,
		AgentRegistryActions.UpdatePublisherAssociationApprovalStatus,
		AgentRegistryActions.UpdateRegistry,
		AgentRegistryActions.UpdateRegistryRecord,
		AgentRegistryActions.UpdateRegistryRecordStatus,
		AgentRegistryActions.ValidatePublisher,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AgentRegistryActions.ListDiscoverableRegistryRecords,
		AgentRegistryActions.ListPublisherAssociations,
		AgentRegistryActions.ListPublishers,
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
 * Properties for building a publisher ARN.
 */
export interface AgentRegistryPublisherArnProps {
	/** The PublisherType component of the ARN. */
	readonly publisherType: string;
	/** The PublisherValue component of the ARN. */
	readonly publisherValue: string;
	/** The PublisherId component of the ARN. */
	readonly publisherId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a publisher ARN.
 */
export interface AgentRegistryPublisherArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PublisherType component. */
	readonly publisherType: string;
	/** The PublisherValue component. */
	readonly publisherValue: string;
	/** The PublisherId component. */
	readonly publisherId: string;
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

const PublisherArnRegex =
	/^arn:(?<partition>[^:]+):agent-registry::(?<account>[^:]*):publisher\/(?<publisherType>[^:/?]+)\/(?<publisherValue>[^:/?]+)\/(?<publisherId>[^:/?]+)$/;
const RegistryArnRegex =
	/^arn:(?<partition>[^:]+):agent-registry:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryId>[^:/?]+)$/;
const RegistryRecordArnRegex =
	/^arn:(?<partition>[^:]+):agent-registry:(?<region>[^:]*):(?<account>[^:]*):registry\/(?<registryId>[^:/?]+)\/record\/(?<recordId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for agent-registry resources.
 */
export class AgentRegistryResources {
	/**
	 * Builds an ARN for the publisher resource.
	 */
	static publisher(props: AgentRegistryPublisherArnProps): string {
		return `arn:${props.partition ?? "aws"}:agent-registry::${props.account ?? "*"}:publisher/${props.publisherType}/${props.publisherValue}/${props.publisherId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the publisher resource.
	 */
	static isValidPublisherArn(arn: string): boolean {
		return PublisherArnRegex.test(arn);
	}

	/**
	 * Parses a publisher ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePublisherArn(arn: string): AgentRegistryPublisherArnComponents {
		const match = PublisherArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid publisher ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			publisherType: match.groups!.publisherType,
			publisherValue: match.groups!.publisherValue,
			publisherId: match.groups!.publisherId,
		};
	}

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
	/** IAM actions required for the AssociatePublisher API call. */
	static readonly AssociatePublisher: string[] = [
		"agent-registry:AssociatePublisher",
	];
	/** IAM actions required for the BatchGetDiscoverableRegistryRecord API call. */
	static readonly BatchGetDiscoverableRegistryRecord: string[] = [
		"agent-registry:GetDiscoverableRegistryRecord",
	];
	/** IAM actions required for the CreatePublisher API call. */
	static readonly CreatePublisher: string[] = [
		"agent-registry:CreatePublisher",
		"agent-registry:TagResource",
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
	/** IAM actions required for the DeletePublisher API call. */
	static readonly DeletePublisher: string[] = [
		"agent-registry:DeletePublisher",
	];
	/** IAM actions required for the DeleteRegistry API call. */
	static readonly DeleteRegistry: string[] = ["agent-registry:DeleteRegistry"];
	/** IAM actions required for the DeleteRegistryRecord API call. */
	static readonly DeleteRegistryRecord: string[] = [
		"agent-registry:DeleteRegistryRecord",
	];
	/** IAM actions required for the DisassociatePublisher API call. */
	static readonly DisassociatePublisher: string[] = [
		"agent-registry:DisassociatePublisher",
	];
	/** IAM actions required for the GetPublisher API call. */
	static readonly opGetPublisher: string[] = ["agent-registry:GetPublisher"];
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
	/** IAM actions required for the ListPublisherAssociations API call. */
	static readonly ListPublisherAssociations: string[] = [
		"agent-registry:ListPublisherAssociations",
	];
	/** IAM actions required for the ListPublishers API call. */
	static readonly ListPublishers: string[] = ["agent-registry:ListPublishers"];
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
	/** IAM actions required for the UpdatePublisherAssociationApprovalStatus API call. */
	static readonly UpdatePublisherAssociationApprovalStatus: string[] = [
		"agent-registry:UpdatePublisherAssociationApprovalStatus",
	];
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
	/** IAM actions required for the ValidatePublisher API call. */
	static readonly ValidatePublisher: string[] = [
		"agent-registry:ValidatePublisher",
	];
}

/**
 * Condition key constants and builders for agent-registry.
 */
export class AgentRegistryConditions {
	/** Condition keys applicable to the CreatePublisher action. */
	static readonly CreatePublisherConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
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
