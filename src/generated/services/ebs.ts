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
	static readonly COMPLETE_SNAPSHOT = "ebs:CompleteSnapshot";
	/** [Read] ebs:GetSnapshotBlock */
	static readonly GET_SNAPSHOT_BLOCK = "ebs:GetSnapshotBlock";
	/** [Read] ebs:ListChangedBlocks */
	static readonly LIST_CHANGED_BLOCKS = "ebs:ListChangedBlocks";
	/** [Read] ebs:ListSnapshotBlocks */
	static readonly LIST_SNAPSHOT_BLOCKS = "ebs:ListSnapshotBlocks";
	/** [Write] ebs:PutSnapshotBlock */
	static readonly PUT_SNAPSHOT_BLOCK = "ebs:PutSnapshotBlock";
	/** [Write] ebs:StartSnapshot */
	static readonly START_SNAPSHOT = "ebs:StartSnapshot";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EBSActions.GET_SNAPSHOT_BLOCK,
		EBSActions.LIST_CHANGED_BLOCKS,
		EBSActions.LIST_SNAPSHOT_BLOCKS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EBSActions.COMPLETE_SNAPSHOT,
		EBSActions.PUT_SNAPSHOT_BLOCK,
		EBSActions.START_SNAPSHOT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const SnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ec2:(?<region>[^:]*)::snapshot/(?<snapshotId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ebs resources.
 */
export class EBSResources {
	/**
	 * Builds an ARN for the snapshot resource.
	 */
	static snapshot(props: {
		/** The SnapshotId component of the ARN. */
		readonly snapshotId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		snapshotId: string;
	} {
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
	static readonly COMPLETE_SNAPSHOT: string[] = ["ebs:CompleteSnapshot"];
	/** IAM actions required for the GetSnapshotBlock API call. */
	static readonly GET_SNAPSHOT_BLOCK: string[] = ["ebs:GetSnapshotBlock"];
	/** IAM actions required for the ListChangedBlocks API call. */
	static readonly LIST_CHANGED_BLOCKS: string[] = ["ebs:ListChangedBlocks"];
	/** IAM actions required for the ListSnapshotBlocks API call. */
	static readonly LIST_SNAPSHOT_BLOCKS: string[] = ["ebs:ListSnapshotBlocks"];
	/** IAM actions required for the PutSnapshotBlock API call. */
	static readonly PUT_SNAPSHOT_BLOCK: string[] = ["ebs:PutSnapshotBlock"];
	/** IAM actions required for the StartSnapshot API call. */
	static readonly START_SNAPSHOT: string[] = [
		"ec2:CreateTags",
		"ebs:StartSnapshot",
	];
}

/**
 * Condition key constants and builders for ebs.
 */
export class EBSConditions {
	/** Condition keys applicable to the CompleteSnapshot action. */
	static readonly COMPLETE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSnapshotBlock action. */
	static readonly GET_SNAPSHOT_BLOCK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListChangedBlocks action. */
	static readonly LIST_CHANGED_BLOCKS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSnapshotBlocks action. */
	static readonly LIST_SNAPSHOT_BLOCKS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutSnapshotBlock action. */
	static readonly PUT_SNAPSHOT_BLOCK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSnapshot action. */
	static readonly START_SNAPSHOT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"ebs:Description",
		"ebs:ParentSnapshot",
		"ebs:VolumeSize",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
