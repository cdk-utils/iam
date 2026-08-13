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
	static readonly CREATE_DB_BACKUP = "timestream-influxdb:CreateDbBackup";
	/** [Write] timestream-influxdb:CreateDbCluster */
	static readonly CREATE_DB_CLUSTER = "timestream-influxdb:CreateDbCluster";
	/** [Write] timestream-influxdb:CreateDbInstance */
	static readonly CREATE_DB_INSTANCE = "timestream-influxdb:CreateDbInstance";
	/** [Write] timestream-influxdb:CreateDbParameterGroup */
	static readonly CREATE_DB_PARAMETER_GROUP =
		"timestream-influxdb:CreateDbParameterGroup";
	/** [Write] timestream-influxdb:DeleteDbBackup */
	static readonly DELETE_DB_BACKUP = "timestream-influxdb:DeleteDbBackup";
	/** [Write] timestream-influxdb:DeleteDbCluster */
	static readonly DELETE_DB_CLUSTER = "timestream-influxdb:DeleteDbCluster";
	/** [Write] timestream-influxdb:DeleteDbInstance */
	static readonly DELETE_DB_INSTANCE = "timestream-influxdb:DeleteDbInstance";
	/** [Read] timestream-influxdb:GetDbBackup */
	static readonly GET_DB_BACKUP = "timestream-influxdb:GetDbBackup";
	/** [Read] timestream-influxdb:GetDbCluster */
	static readonly GET_DB_CLUSTER = "timestream-influxdb:GetDbCluster";
	/** [Read] timestream-influxdb:GetDbInstance */
	static readonly GET_DB_INSTANCE = "timestream-influxdb:GetDbInstance";
	/** [Read] timestream-influxdb:GetDbParameterGroup */
	static readonly GET_DB_PARAMETER_GROUP =
		"timestream-influxdb:GetDbParameterGroup";
	/** [List] timestream-influxdb:ListDbBackups */
	static readonly LIST_DB_BACKUPS = "timestream-influxdb:ListDbBackups";
	/** [List] timestream-influxdb:ListDbClusters */
	static readonly LIST_DB_CLUSTERS = "timestream-influxdb:ListDbClusters";
	/** [List] timestream-influxdb:ListDbInstances */
	static readonly LIST_DB_INSTANCES = "timestream-influxdb:ListDbInstances";
	/** [Read] timestream-influxdb:ListDbInstancesForCluster */
	static readonly LIST_DB_INSTANCES_FOR_CLUSTER =
		"timestream-influxdb:ListDbInstancesForCluster";
	/** [List] timestream-influxdb:ListDbParameterGroups */
	static readonly LIST_DB_PARAMETER_GROUPS =
		"timestream-influxdb:ListDbParameterGroups";
	/** [Read] timestream-influxdb:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"timestream-influxdb:ListTagsForResource";
	/** [Write] timestream-influxdb:RebootDbCluster */
	static readonly REBOOT_DB_CLUSTER = "timestream-influxdb:RebootDbCluster";
	/** [Write] timestream-influxdb:RebootDbInstance */
	static readonly REBOOT_DB_INSTANCE = "timestream-influxdb:RebootDbInstance";
	/** [Write] timestream-influxdb:RestoreFromDbBackup */
	static readonly RESTORE_FROM_DB_BACKUP =
		"timestream-influxdb:RestoreFromDbBackup";
	/** [Tagging] timestream-influxdb:TagResource */
	static readonly TAG_RESOURCE = "timestream-influxdb:TagResource";
	/** [Tagging] timestream-influxdb:UntagResource */
	static readonly UNTAG_RESOURCE = "timestream-influxdb:UntagResource";
	/** [Write] timestream-influxdb:UpdateDbCluster */
	static readonly UPDATE_DB_CLUSTER = "timestream-influxdb:UpdateDbCluster";
	/** [Write] timestream-influxdb:UpdateDbInstance */
	static readonly UPDATE_DB_INSTANCE = "timestream-influxdb:UpdateDbInstance";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TimestreamInfluxdbActions.GET_DB_BACKUP,
		TimestreamInfluxdbActions.GET_DB_CLUSTER,
		TimestreamInfluxdbActions.GET_DB_INSTANCE,
		TimestreamInfluxdbActions.GET_DB_PARAMETER_GROUP,
		TimestreamInfluxdbActions.LIST_DB_INSTANCES_FOR_CLUSTER,
		TimestreamInfluxdbActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TimestreamInfluxdbActions.CREATE_DB_BACKUP,
		TimestreamInfluxdbActions.CREATE_DB_CLUSTER,
		TimestreamInfluxdbActions.CREATE_DB_INSTANCE,
		TimestreamInfluxdbActions.CREATE_DB_PARAMETER_GROUP,
		TimestreamInfluxdbActions.DELETE_DB_BACKUP,
		TimestreamInfluxdbActions.DELETE_DB_CLUSTER,
		TimestreamInfluxdbActions.DELETE_DB_INSTANCE,
		TimestreamInfluxdbActions.REBOOT_DB_CLUSTER,
		TimestreamInfluxdbActions.REBOOT_DB_INSTANCE,
		TimestreamInfluxdbActions.RESTORE_FROM_DB_BACKUP,
		TimestreamInfluxdbActions.UPDATE_DB_CLUSTER,
		TimestreamInfluxdbActions.UPDATE_DB_INSTANCE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TimestreamInfluxdbActions.LIST_DB_BACKUPS,
		TimestreamInfluxdbActions.LIST_DB_CLUSTERS,
		TimestreamInfluxdbActions.LIST_DB_INSTANCES,
		TimestreamInfluxdbActions.LIST_DB_PARAMETER_GROUPS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TimestreamInfluxdbActions.TAG_RESOURCE,
		TimestreamInfluxdbActions.UNTAG_RESOURCE,
	];
}

const DBBackupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-backup/(?<dbBackupId>[^:/?]+)$",
);
const DBClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-cluster/(?<dbClusterId>[^:/?]+)$",
);
const DBInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-instance/(?<dbInstanceIdentifier>[^:/?]+)$",
);
const DBParameterGroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):timestream-influxdb:(?<region>[^:]*):(?<account>[^:]*):db-parameter-group/(?<dbParameterGroupIdentifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for timestream-influxdb resources.
 */
export class TimestreamInfluxdbResources {
	/**
	 * Builds an ARN for the db-backup resource.
	 */
	static dbBackup(props: {
		/** The DbBackupId component of the ARN. */
		readonly dbBackupId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDBBackupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbBackupId: string;
	} {
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
	static dbCluster(props: {
		/** The DbClusterId component of the ARN. */
		readonly dbClusterId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDBClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbClusterId: string;
	} {
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
	static dbInstance(props: {
		/** The DbInstanceIdentifier component of the ARN. */
		readonly dbInstanceIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDBInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbInstanceIdentifier: string;
	} {
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
	static dbParameterGroup(props: {
		/** The DbParameterGroupIdentifier component of the ARN. */
		readonly dbParameterGroupIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDBParameterGroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dbParameterGroupIdentifier: string;
	} {
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
	static readonly CREATE_DB_BACKUP: string[] = [
		"timestream-influxdb:CreateDbBackup",
	];
	/** IAM actions required for the CreateDbCluster API call. */
	static readonly CREATE_DB_CLUSTER: string[] = [
		"timestream-influxdb:CreateDbCluster",
		"timestream-influxdb:CreateDbInstance",
		"timestream-influxdb:CreateDbParameterGroup",
		"timestream-influxdb:TagResource",
	];
	/** IAM actions required for the CreateDbInstance API call. */
	static readonly CREATE_DB_INSTANCE: string[] = [
		"timestream-influxdb:CreateDbInstance",
		"timestream-influxdb:TagResource",
	];
	/** IAM actions required for the CreateDbParameterGroup API call. */
	static readonly CREATE_DB_PARAMETER_GROUP: string[] = [
		"timestream-influxdb:CreateDbParameterGroup",
		"timestream-influxdb:TagResource",
	];
	/** IAM actions required for the DeleteDbBackup API call. */
	static readonly DELETE_DB_BACKUP: string[] = [
		"timestream-influxdb:DeleteDbBackup",
	];
	/** IAM actions required for the DeleteDbCluster API call. */
	static readonly DELETE_DB_CLUSTER: string[] = [
		"timestream-influxdb:DeleteDbCluster",
		"timestream-influxdb:DeleteDbInstance",
	];
	/** IAM actions required for the DeleteDbInstance API call. */
	static readonly DELETE_DB_INSTANCE: string[] = [
		"timestream-influxdb:DeleteDbInstance",
	];
	/** IAM actions required for the GetDbBackup API call. */
	static readonly GET_DB_BACKUP: string[] = ["timestream-influxdb:GetDbBackup"];
	/** IAM actions required for the GetDbCluster API call. */
	static readonly GET_DB_CLUSTER: string[] = [
		"timestream-influxdb:GetDbCluster",
	];
	/** IAM actions required for the GetDbInstance API call. */
	static readonly GET_DB_INSTANCE: string[] = [
		"timestream-influxdb:GetDbInstance",
	];
	/** IAM actions required for the GetDbParameterGroup API call. */
	static readonly GET_DB_PARAMETER_GROUP: string[] = [
		"timestream-influxdb:GetDbParameterGroup",
	];
	/** IAM actions required for the ListDbBackups API call. */
	static readonly LIST_DB_BACKUPS: string[] = [
		"timestream-influxdb:ListDbBackups",
	];
	/** IAM actions required for the ListDbClusters API call. */
	static readonly LIST_DB_CLUSTERS: string[] = [
		"timestream-influxdb:ListDbClusters",
	];
	/** IAM actions required for the ListDbInstances API call. */
	static readonly LIST_DB_INSTANCES: string[] = [
		"timestream-influxdb:ListDbInstances",
	];
	/** IAM actions required for the ListDbInstancesForCluster API call. */
	static readonly LIST_DB_INSTANCES_FOR_CLUSTER: string[] = [
		"timestream-influxdb:ListDbInstancesForCluster",
	];
	/** IAM actions required for the ListDbParameterGroups API call. */
	static readonly LIST_DB_PARAMETER_GROUPS: string[] = [
		"timestream-influxdb:ListDbParameterGroups",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"timestream-influxdb:ListTagsForResource",
	];
	/** IAM actions required for the RebootDbCluster API call. */
	static readonly REBOOT_DB_CLUSTER: string[] = [
		"timestream-influxdb:RebootDbCluster",
		"timestream-influxdb:RebootDbInstance",
	];
	/** IAM actions required for the RebootDbInstance API call. */
	static readonly REBOOT_DB_INSTANCE: string[] = [
		"timestream-influxdb:RebootDbInstance",
	];
	/** IAM actions required for the RestoreFromDbBackup API call. */
	static readonly RESTORE_FROM_DB_BACKUP: string[] = [
		"timestream-influxdb:RestoreFromDbBackup",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["timestream-influxdb:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"timestream-influxdb:UntagResource",
	];
	/** IAM actions required for the UpdateDbCluster API call. */
	static readonly UPDATE_DB_CLUSTER: string[] = [
		"timestream-influxdb:UpdateDbCluster",
		"timestream-influxdb:UpdateDbInstance",
	];
	/** IAM actions required for the UpdateDbInstance API call. */
	static readonly UPDATE_DB_INSTANCE: string[] = [
		"timestream-influxdb:UpdateDbInstance",
	];
}

/**
 * Condition key constants and builders for timestream-influxdb.
 */
export class TimestreamInfluxdbConditions {
	/** Condition keys applicable to the CreateDbBackup action. */
	static readonly CREATE_DB_BACKUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDbCluster action. */
	static readonly CREATE_DB_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDbInstance action. */
	static readonly CREATE_DB_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDbParameterGroup action. */
	static readonly CREATE_DB_PARAMETER_GROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the RestoreFromDbBackup action. */
	static readonly RESTORE_FROM_DB_BACKUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"timestream-influxdb:RestoreMode",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
