// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/timestream-influxdb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the timestream-influxdb service.
 */
export class TimestreamInfluxdbActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "timestream-influxdb";

	/** [Write] timestream-influxdb:CreateDbBackup */
	static readonly CreateDbBackup = "timestream-influxdb:CreateDbBackup";
	/** [Write] timestream-influxdb:CreateDbCluster */
	static readonly CreateDbCluster = "timestream-influxdb:CreateDbCluster";
	/** [Write] timestream-influxdb:CreateDbInstance */
	static readonly CreateDbInstance = "timestream-influxdb:CreateDbInstance";
	/** [Write] timestream-influxdb:CreateDbParameterGroup */
	static readonly CreateDbParameterGroup =
		"timestream-influxdb:CreateDbParameterGroup";
	/** [Write] timestream-influxdb:DeleteDbBackup */
	static readonly DeleteDbBackup = "timestream-influxdb:DeleteDbBackup";
	/** [Write] timestream-influxdb:DeleteDbCluster */
	static readonly DeleteDbCluster = "timestream-influxdb:DeleteDbCluster";
	/** [Write] timestream-influxdb:DeleteDbInstance */
	static readonly DeleteDbInstance = "timestream-influxdb:DeleteDbInstance";
	/** [Read] timestream-influxdb:GetDbBackup */
	static readonly actionGetDbBackup = "timestream-influxdb:GetDbBackup";
	/** [Read] timestream-influxdb:GetDbCluster */
	static readonly actionGetDbCluster = "timestream-influxdb:GetDbCluster";
	/** [Read] timestream-influxdb:GetDbInstance */
	static readonly actionGetDbInstance = "timestream-influxdb:GetDbInstance";
	/** [Read] timestream-influxdb:GetDbParameterGroup */
	static readonly actionGetDbParameterGroup =
		"timestream-influxdb:GetDbParameterGroup";
	/** [List] timestream-influxdb:ListDbBackups */
	static readonly ListDbBackups = "timestream-influxdb:ListDbBackups";
	/** [List] timestream-influxdb:ListDbClusters */
	static readonly ListDbClusters = "timestream-influxdb:ListDbClusters";
	/** [List] timestream-influxdb:ListDbInstances */
	static readonly ListDbInstances = "timestream-influxdb:ListDbInstances";
	/** [Read] timestream-influxdb:ListDbInstancesForCluster */
	static readonly ListDbInstancesForCluster =
		"timestream-influxdb:ListDbInstancesForCluster";
	/** [List] timestream-influxdb:ListDbParameterGroups */
	static readonly ListDbParameterGroups =
		"timestream-influxdb:ListDbParameterGroups";
	/** [Read] timestream-influxdb:ListTagsForResource */
	static readonly ListTagsForResource =
		"timestream-influxdb:ListTagsForResource";
	/** [Write] timestream-influxdb:RebootDbCluster */
	static readonly RebootDbCluster = "timestream-influxdb:RebootDbCluster";
	/** [Write] timestream-influxdb:RebootDbInstance */
	static readonly RebootDbInstance = "timestream-influxdb:RebootDbInstance";
	/** [Write] timestream-influxdb:RestoreFromDbBackup */
	static readonly RestoreFromDbBackup =
		"timestream-influxdb:RestoreFromDbBackup";
	/** [Tagging] timestream-influxdb:TagResource */
	static readonly TagResource = "timestream-influxdb:TagResource";
	/** [Tagging] timestream-influxdb:UntagResource */
	static readonly UntagResource = "timestream-influxdb:UntagResource";
	/** [Write] timestream-influxdb:UpdateDbCluster */
	static readonly UpdateDbCluster = "timestream-influxdb:UpdateDbCluster";
	/** [Write] timestream-influxdb:UpdateDbInstance */
	static readonly UpdateDbInstance = "timestream-influxdb:UpdateDbInstance";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TimestreamInfluxdbActions.actionGetDbBackup,
		TimestreamInfluxdbActions.actionGetDbCluster,
		TimestreamInfluxdbActions.actionGetDbInstance,
		TimestreamInfluxdbActions.actionGetDbParameterGroup,
		TimestreamInfluxdbActions.ListDbInstancesForCluster,
		TimestreamInfluxdbActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TimestreamInfluxdbActions.CreateDbBackup,
		TimestreamInfluxdbActions.CreateDbCluster,
		TimestreamInfluxdbActions.CreateDbInstance,
		TimestreamInfluxdbActions.CreateDbParameterGroup,
		TimestreamInfluxdbActions.DeleteDbBackup,
		TimestreamInfluxdbActions.DeleteDbCluster,
		TimestreamInfluxdbActions.DeleteDbInstance,
		TimestreamInfluxdbActions.RebootDbCluster,
		TimestreamInfluxdbActions.RebootDbInstance,
		TimestreamInfluxdbActions.RestoreFromDbBackup,
		TimestreamInfluxdbActions.UpdateDbCluster,
		TimestreamInfluxdbActions.UpdateDbInstance,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TimestreamInfluxdbActions.ListDbBackups,
		TimestreamInfluxdbActions.ListDbClusters,
		TimestreamInfluxdbActions.ListDbInstances,
		TimestreamInfluxdbActions.ListDbParameterGroups,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TimestreamInfluxdbActions.TagResource,
		TimestreamInfluxdbActions.UntagResource,
	];
}

/**
 * Properties for building a db-backup ARN.
 */
export interface TimestreamInfluxdbDBBackupArnProps {
	/** The DbBackupId component of the ARN. */
	readonly dbBackupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a db-backup ARN.
 */
export interface TimestreamInfluxdbDBBackupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbBackupId component. */
	readonly dbBackupId: string;
}

/**
 * Properties for building a db-cluster ARN.
 */
export interface TimestreamInfluxdbDBClusterArnProps {
	/** The DbClusterId component of the ARN. */
	readonly dbClusterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a db-cluster ARN.
 */
export interface TimestreamInfluxdbDBClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbClusterId component. */
	readonly dbClusterId: string;
}

/**
 * Properties for building a db-instance ARN.
 */
export interface TimestreamInfluxdbDBInstanceArnProps {
	/** The DbInstanceIdentifier component of the ARN. */
	readonly dbInstanceIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a db-instance ARN.
 */
export interface TimestreamInfluxdbDBInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbInstanceIdentifier component. */
	readonly dbInstanceIdentifier: string;
}

/**
 * Properties for building a db-parameter-group ARN.
 */
export interface TimestreamInfluxdbDBParameterGroupArnProps {
	/** The DbParameterGroupIdentifier component of the ARN. */
	readonly dbParameterGroupIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a db-parameter-group ARN.
 */
export interface TimestreamInfluxdbDBParameterGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DbParameterGroupIdentifier component. */
	readonly dbParameterGroupIdentifier: string;
}

const DBBackupArnRegex =
	/^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-backup\/(?<dbBackupId>[^:/?]+)$/;
const DBClusterArnRegex =
	/^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-cluster\/(?<dbClusterId>[^:/?]+)$/;
const DBInstanceArnRegex =
	/^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-instance\/(?<dbInstanceIdentifier>[^:/?]+)$/;
const DBParameterGroupArnRegex =
	/^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-parameter-group\/(?<dbParameterGroupIdentifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for timestream-influxdb resources.
 */
export class TimestreamInfluxdbResources {
	/**
	 * Builds an ARN for the db-backup resource.
	 */
	static dbBackup(props: TimestreamInfluxdbDBBackupArnProps): string {
		return `arn:${props.partition ?? "aws"}:timestream-influxdb:${props.region ?? "*"}:${props.account ?? "*"}:db-backup/${props.dbBackupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the db-backup resource.
	 */
	static isValidDBBackupArn(arn: string): boolean {
		return DBBackupArnRegex.test(arn);
	}

	/**
	 * Parses a db-backup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDBBackupArn(
		arn: string,
	): TimestreamInfluxdbDBBackupArnComponents {
		const match = DBBackupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid db-backup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbBackupId: match.groups!.dbBackupId,
		};
	}

	/**
	 * Builds an ARN for the db-cluster resource.
	 */
	static dbCluster(props: TimestreamInfluxdbDBClusterArnProps): string {
		return `arn:${props.partition ?? "aws"}:timestream-influxdb:${props.region ?? "*"}:${props.account ?? "*"}:db-cluster/${props.dbClusterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the db-cluster resource.
	 */
	static isValidDBClusterArn(arn: string): boolean {
		return DBClusterArnRegex.test(arn);
	}

	/**
	 * Parses a db-cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDBClusterArn(
		arn: string,
	): TimestreamInfluxdbDBClusterArnComponents {
		const match = DBClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid db-cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbClusterId: match.groups!.dbClusterId,
		};
	}

	/**
	 * Builds an ARN for the db-instance resource.
	 */
	static dbInstance(props: TimestreamInfluxdbDBInstanceArnProps): string {
		return `arn:${props.partition ?? "aws"}:timestream-influxdb:${props.region ?? "*"}:${props.account ?? "*"}:db-instance/${props.dbInstanceIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the db-instance resource.
	 */
	static isValidDBInstanceArn(arn: string): boolean {
		return DBInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a db-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDBInstanceArn(
		arn: string,
	): TimestreamInfluxdbDBInstanceArnComponents {
		const match = DBInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid db-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbInstanceIdentifier: match.groups!.dbInstanceIdentifier,
		};
	}

	/**
	 * Builds an ARN for the db-parameter-group resource.
	 */
	static dbParameterGroup(
		props: TimestreamInfluxdbDBParameterGroupArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:timestream-influxdb:${props.region ?? "*"}:${props.account ?? "*"}:db-parameter-group/${props.dbParameterGroupIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the db-parameter-group resource.
	 */
	static isValidDBParameterGroupArn(arn: string): boolean {
		return DBParameterGroupArnRegex.test(arn);
	}

	/**
	 * Parses a db-parameter-group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDBParameterGroupArn(
		arn: string,
	): TimestreamInfluxdbDBParameterGroupArnComponents {
		const match = DBParameterGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid db-parameter-group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dbParameterGroupIdentifier: match.groups!.dbParameterGroupIdentifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for timestream-influxdb.
 */
export class TimestreamInfluxdbOperations {
	/** IAM actions required for the CreateDbBackup API call. */
	static readonly CreateDbBackup: string[] = [
		"timestream-influxdb:CreateDbBackup",
		"timestream-influxdb:TagResource",
	];
	/** IAM actions required for the CreateDbCluster API call. */
	static readonly CreateDbCluster: string[] = [
		"timestream-influxdb:CreateDbCluster",
		"timestream-influxdb:CreateDbInstance",
		"timestream-influxdb:CreateDbParameterGroup",
		"timestream-influxdb:TagResource",
	];
	/** IAM actions required for the CreateDbInstance API call. */
	static readonly CreateDbInstance: string[] = [
		"timestream-influxdb:CreateDbInstance",
		"timestream-influxdb:TagResource",
	];
	/** IAM actions required for the CreateDbParameterGroup API call. */
	static readonly CreateDbParameterGroup: string[] = [
		"timestream-influxdb:CreateDbParameterGroup",
		"timestream-influxdb:TagResource",
	];
	/** IAM actions required for the DeleteDbBackup API call. */
	static readonly DeleteDbBackup: string[] = [
		"timestream-influxdb:DeleteDbBackup",
	];
	/** IAM actions required for the DeleteDbCluster API call. */
	static readonly DeleteDbCluster: string[] = [
		"timestream-influxdb:DeleteDbCluster",
		"timestream-influxdb:DeleteDbInstance",
	];
	/** IAM actions required for the DeleteDbInstance API call. */
	static readonly DeleteDbInstance: string[] = [
		"timestream-influxdb:DeleteDbInstance",
	];
	/** IAM actions required for the GetDbBackup API call. */
	static readonly opGetDbBackup: string[] = ["timestream-influxdb:GetDbBackup"];
	/** IAM actions required for the GetDbCluster API call. */
	static readonly opGetDbCluster: string[] = [
		"timestream-influxdb:GetDbCluster",
	];
	/** IAM actions required for the GetDbInstance API call. */
	static readonly opGetDbInstance: string[] = [
		"timestream-influxdb:GetDbInstance",
	];
	/** IAM actions required for the GetDbParameterGroup API call. */
	static readonly opGetDbParameterGroup: string[] = [
		"timestream-influxdb:GetDbParameterGroup",
	];
	/** IAM actions required for the ListDbBackups API call. */
	static readonly ListDbBackups: string[] = [
		"timestream-influxdb:ListDbBackups",
	];
	/** IAM actions required for the ListDbClusters API call. */
	static readonly ListDbClusters: string[] = [
		"timestream-influxdb:ListDbClusters",
	];
	/** IAM actions required for the ListDbInstances API call. */
	static readonly ListDbInstances: string[] = [
		"timestream-influxdb:ListDbInstances",
	];
	/** IAM actions required for the ListDbInstancesForCluster API call. */
	static readonly ListDbInstancesForCluster: string[] = [
		"timestream-influxdb:ListDbInstancesForCluster",
	];
	/** IAM actions required for the ListDbParameterGroups API call. */
	static readonly ListDbParameterGroups: string[] = [
		"timestream-influxdb:ListDbParameterGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"timestream-influxdb:ListTagsForResource",
	];
	/** IAM actions required for the RebootDbCluster API call. */
	static readonly RebootDbCluster: string[] = [
		"timestream-influxdb:RebootDbCluster",
		"timestream-influxdb:RebootDbInstance",
	];
	/** IAM actions required for the RebootDbInstance API call. */
	static readonly RebootDbInstance: string[] = [
		"timestream-influxdb:RebootDbInstance",
	];
	/** IAM actions required for the RestoreFromDbBackup API call. */
	static readonly RestoreFromDbBackup: string[] = [
		"timestream-influxdb:RestoreFromDbBackup",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["timestream-influxdb:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"timestream-influxdb:UntagResource",
	];
	/** IAM actions required for the UpdateDbCluster API call. */
	static readonly UpdateDbCluster: string[] = [
		"timestream-influxdb:UpdateDbCluster",
		"timestream-influxdb:UpdateDbInstance",
	];
	/** IAM actions required for the UpdateDbInstance API call. */
	static readonly UpdateDbInstance: string[] = [
		"timestream-influxdb:UpdateDbInstance",
	];
}

/**
 * Condition key constants and builders for timestream-influxdb.
 */
export class TimestreamInfluxdbConditions {
	/** Condition keys applicable to the CreateDbBackup action. */
	static readonly CreateDbBackupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDbCluster action. */
	static readonly CreateDbClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDbInstance action. */
	static readonly CreateDbInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDbParameterGroup action. */
	static readonly CreateDbParameterGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreFromDbBackup action. */
	static readonly RestoreFromDbBackupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"timestream-influxdb:RestoreMode",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: timestream-influxdb:RestoreMode (String) */
	static readonly RESTORE_MODE = "timestream-influxdb:RestoreMode";

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
	 * Generates a condition block for `timestream-influxdb:RestoreMode`.
	 */
	static restoreMode(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "timestream-influxdb:RestoreMode": value } };
	}
}
