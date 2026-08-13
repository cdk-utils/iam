// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ebs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ebs service.
 */
export class EBSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ebs";

	/** [Write] ebs:CompleteSnapshot */
	static readonly CompleteSnapshot = "ebs:CompleteSnapshot";
	/** [Read] ebs:GetSnapshotBlock */
	static readonly actionGetSnapshotBlock = "ebs:GetSnapshotBlock";
	/** [Read] ebs:ListChangedBlocks */
	static readonly ListChangedBlocks = "ebs:ListChangedBlocks";
	/** [Read] ebs:ListSnapshotBlocks */
	static readonly ListSnapshotBlocks = "ebs:ListSnapshotBlocks";
	/** [Write] ebs:PutSnapshotBlock */
	static readonly PutSnapshotBlock = "ebs:PutSnapshotBlock";
	/** [Write] ebs:StartSnapshot */
	static readonly StartSnapshot = "ebs:StartSnapshot";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EBSActions.actionGetSnapshotBlock,
		EBSActions.ListChangedBlocks,
		EBSActions.ListSnapshotBlocks,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EBSActions.CompleteSnapshot,
		EBSActions.PutSnapshotBlock,
		EBSActions.StartSnapshot,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a snapshot ARN.
 */
export interface EBSSnapshotArnProps {
	/** The SnapshotId component of the ARN. */
	readonly snapshotId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a snapshot ARN.
 */
export interface EBSSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SnapshotId component. */
	readonly snapshotId: string;
}

const SnapshotArnRegex =
	/^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*)::snapshot\/(?<snapshotId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ebs resources.
 */
export class EBSResources {
	/**
	 * Builds an ARN for the snapshot resource.
	 */
	static snapshot(props: EBSSnapshotArnProps): string {
		return `arn:${props.partition ?? "aws"}:ec2:${props.region ?? "*"}::snapshot/${props.snapshotId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshot resource.
	 */
	static isValidSnapshotArn(arn: string): boolean {
		return SnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotArn(arn: string): EBSSnapshotArnComponents {
		const match = SnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			snapshotId: match.groups!.snapshotId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ebs.
 */
export class EBSOperations {
	/** IAM actions required for the CompleteSnapshot API call. */
	static readonly CompleteSnapshot: string[] = ["ebs:CompleteSnapshot"];
	/** IAM actions required for the GetSnapshotBlock API call. */
	static readonly opGetSnapshotBlock: string[] = ["ebs:GetSnapshotBlock"];
	/** IAM actions required for the ListChangedBlocks API call. */
	static readonly ListChangedBlocks: string[] = ["ebs:ListChangedBlocks"];
	/** IAM actions required for the ListSnapshotBlocks API call. */
	static readonly ListSnapshotBlocks: string[] = ["ebs:ListSnapshotBlocks"];
	/** IAM actions required for the PutSnapshotBlock API call. */
	static readonly PutSnapshotBlock: string[] = ["ebs:PutSnapshotBlock"];
	/** IAM actions required for the StartSnapshot API call. */
	static readonly StartSnapshot: string[] = [
		"ec2:CreateTags",
		"ebs:StartSnapshot",
	];
}

/**
 * Condition key constants and builders for ebs.
 */
export class EBSConditions {
	/** Condition keys applicable to the CompleteSnapshot action. */
	static readonly CompleteSnapshotConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSnapshotBlock action. */
	static readonly actionGetSnapshotBlockConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListChangedBlocks action. */
	static readonly ListChangedBlocksConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSnapshotBlocks action. */
	static readonly ListSnapshotBlocksConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutSnapshotBlock action. */
	static readonly PutSnapshotBlockConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSnapshot action. */
	static readonly StartSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ebs:Description",
		"ebs:ParentSnapshot",
		"ebs:VolumeSize",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: ebs:Description (String) */
	static readonly DESCRIPTION = "ebs:Description";
	/** Condition key: ebs:ParentSnapshot (ARN) */
	static readonly PARENT_SNAPSHOT = "ebs:ParentSnapshot";
	/** Condition key: ebs:VolumeSize (Numeric) */
	static readonly VOLUME_SIZE = "ebs:VolumeSize";

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

	/**
	 * Generates a condition block for `ebs:Description`.
	 */
	static description(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "ebs:Description": value } };
	}

	/**
	 * Generates a condition block for `ebs:ParentSnapshot`.
	 */
	static parentSnapshot(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "ebs:ParentSnapshot": value } };
	}

	/**
	 * Generates a condition block for `ebs:VolumeSize`.
	 */
	static volumeSize(value: number): Record<string, Record<string, number>> {
		return { NumericEquals: { "ebs:VolumeSize": value } };
	}
}
