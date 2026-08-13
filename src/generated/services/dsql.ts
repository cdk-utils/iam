// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/dsql.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the dsql service.
 */
export class DsqlActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "dsql";

	/** [Write] dsql:AddPeerCluster */
	static readonly ADD_PEER_CLUSTER = "dsql:AddPeerCluster";
	/** [Write] dsql:CreateCluster */
	static readonly CREATE_CLUSTER = "dsql:CreateCluster";
	/** [Write] dsql:CreateStream */
	static readonly CREATE_STREAM = "dsql:CreateStream";
	/** [Write] dsql:DbConnect */
	static readonly DB_CONNECT = "dsql:DbConnect";
	/** [Write] dsql:DbConnectAdmin */
	static readonly DB_CONNECT_ADMIN = "dsql:DbConnectAdmin";
	/** [Write] dsql:DeleteCluster */
	static readonly DELETE_CLUSTER = "dsql:DeleteCluster";
	/** [Write] dsql:DeleteClusterPolicy */
	static readonly DELETE_CLUSTER_POLICY = "dsql:DeleteClusterPolicy";
	/** [Write] dsql:DeleteStream */
	static readonly DELETE_STREAM = "dsql:DeleteStream";
	/** [Read] dsql:GetBackupJob */
	static readonly GET_BACKUP_JOB = "dsql:GetBackupJob";
	/** [Read] dsql:GetCluster */
	static readonly GET_CLUSTER = "dsql:GetCluster";
	/** [Read] dsql:GetClusterPolicy */
	static readonly GET_CLUSTER_POLICY = "dsql:GetClusterPolicy";
	/** [Read] dsql:GetRestoreJob */
	static readonly GET_RESTORE_JOB = "dsql:GetRestoreJob";
	/** [Read] dsql:GetStream */
	static readonly GET_STREAM = "dsql:GetStream";
	/** [Read] dsql:GetVpcEndpointServiceName */
	static readonly GET_VPC_ENDPOINT_SERVICE_NAME =
		"dsql:GetVpcEndpointServiceName";
	/** [Write] dsql:InjectError */
	static readonly INJECT_ERROR = "dsql:InjectError";
	/** [List] dsql:ListClusters */
	static readonly LIST_CLUSTERS = "dsql:ListClusters";
	/** [List] dsql:ListStreams */
	static readonly LIST_STREAMS = "dsql:ListStreams";
	/** [Read] dsql:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "dsql:ListTagsForResource";
	/** [Write] dsql:PutClusterPolicy */
	static readonly PUT_CLUSTER_POLICY = "dsql:PutClusterPolicy";
	/** [Write] dsql:PutMultiRegionProperties */
	static readonly PUT_MULTI_REGION_PROPERTIES = "dsql:PutMultiRegionProperties";
	/** [Write] dsql:PutWitnessRegion */
	static readonly PUT_WITNESS_REGION = "dsql:PutWitnessRegion";
	/** [Write] dsql:RemovePeerCluster */
	static readonly REMOVE_PEER_CLUSTER = "dsql:RemovePeerCluster";
	/** [Write] dsql:StartBackupJob */
	static readonly START_BACKUP_JOB = "dsql:StartBackupJob";
	/** [Write] dsql:StartRestoreJob */
	static readonly START_RESTORE_JOB = "dsql:StartRestoreJob";
	/** [Write] dsql:StopBackupJob */
	static readonly STOP_BACKUP_JOB = "dsql:StopBackupJob";
	/** [Write] dsql:StopRestoreJob */
	static readonly STOP_RESTORE_JOB = "dsql:StopRestoreJob";
	/** [Tagging] dsql:TagResource */
	static readonly TAG_RESOURCE = "dsql:TagResource";
	/** [Tagging] dsql:UntagResource */
	static readonly UNTAG_RESOURCE = "dsql:UntagResource";
	/** [Write] dsql:UpdateCluster */
	static readonly UPDATE_CLUSTER = "dsql:UpdateCluster";
	/** [Write] dsql:UpdateStream */
	static readonly UPDATE_STREAM = "dsql:UpdateStream";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		DsqlActions.GET_BACKUP_JOB,
		DsqlActions.GET_CLUSTER,
		DsqlActions.GET_CLUSTER_POLICY,
		DsqlActions.GET_RESTORE_JOB,
		DsqlActions.GET_STREAM,
		DsqlActions.GET_VPC_ENDPOINT_SERVICE_NAME,
		DsqlActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		DsqlActions.ADD_PEER_CLUSTER,
		DsqlActions.CREATE_CLUSTER,
		DsqlActions.CREATE_STREAM,
		DsqlActions.DB_CONNECT,
		DsqlActions.DB_CONNECT_ADMIN,
		DsqlActions.DELETE_CLUSTER,
		DsqlActions.DELETE_CLUSTER_POLICY,
		DsqlActions.DELETE_STREAM,
		DsqlActions.INJECT_ERROR,
		DsqlActions.PUT_CLUSTER_POLICY,
		DsqlActions.PUT_MULTI_REGION_PROPERTIES,
		DsqlActions.PUT_WITNESS_REGION,
		DsqlActions.REMOVE_PEER_CLUSTER,
		DsqlActions.START_BACKUP_JOB,
		DsqlActions.START_RESTORE_JOB,
		DsqlActions.STOP_BACKUP_JOB,
		DsqlActions.STOP_RESTORE_JOB,
		DsqlActions.UPDATE_CLUSTER,
		DsqlActions.UPDATE_STREAM,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		DsqlActions.LIST_CLUSTERS,
		DsqlActions.LIST_STREAMS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		DsqlActions.TAG_RESOURCE,
		DsqlActions.UNTAG_RESOURCE,
	];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dsql:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<identifier>[^:/?]+)$",
);
const StreamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):dsql:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterId>[^:/?]+)/stream/(?<streamId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for dsql resources.
 */
export class DsqlResources {
	/**
	 * Builds an ARN for the Cluster resource.
	 */
	static cluster(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dsql:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a Cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identifier: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the Stream resource.
	 */
	static stream(props: {
		/** The ClusterId component of the ARN. */
		readonly clusterId: string;
		/** The StreamId component of the ARN. */
		readonly streamId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:dsql:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterId}/stream/${props.streamId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Stream resource.
	 */
	static isValidStreamArn(arn: string): boolean {
		return StreamArnRegex.test(arn);
	}

	/**
	 * Parses a Stream ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterId: string;
		streamId: string;
	} {
		const match = StreamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Stream ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterId: match.groups!.clusterId,
			streamId: match.groups!.streamId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for dsql.
 */
export class DsqlOperations {
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"dsql:AddPeerCluster",
		"dsql:CreateCluster",
		"dsql:DeleteClusterPolicy",
		"dsql:PutClusterPolicy",
		"dsql:PutMultiRegionProperties",
		"dsql:PutWitnessRegion",
		"dsql:TagResource",
	];
	/** IAM actions required for the CreateStream API call. */
	static readonly CREATE_STREAM: string[] = [
		"dsql:CreateStream",
		"iam:PassRole",
		"dsql:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["dsql:DeleteCluster"];
	/** IAM actions required for the DeleteClusterPolicy API call. */
	static readonly DELETE_CLUSTER_POLICY: string[] = [
		"dsql:DeleteClusterPolicy",
	];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DELETE_STREAM: string[] = ["dsql:DeleteStream"];
	/** IAM actions required for the GetCluster API call. */
	static readonly GET_CLUSTER: string[] = ["dsql:GetCluster"];
	/** IAM actions required for the GetClusterPolicy API call. */
	static readonly GET_CLUSTER_POLICY: string[] = ["dsql:GetClusterPolicy"];
	/** IAM actions required for the GetStream API call. */
	static readonly GET_STREAM: string[] = ["dsql:GetStream"];
	/** IAM actions required for the GetVpcEndpointServiceName API call. */
	static readonly GET_VPC_ENDPOINT_SERVICE_NAME: string[] = [
		"dsql:GetVpcEndpointServiceName",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["dsql:ListClusters"];
	/** IAM actions required for the ListStreams API call. */
	static readonly LIST_STREAMS: string[] = ["dsql:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"dsql:ListTagsForResource",
	];
	/** IAM actions required for the PutClusterPolicy API call. */
	static readonly PUT_CLUSTER_POLICY: string[] = [
		"dsql:DeleteClusterPolicy",
		"dsql:PutClusterPolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["dsql:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["dsql:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UPDATE_CLUSTER: string[] = [
		"dsql:AddPeerCluster",
		"dsql:GetCluster",
		"dsql:PutMultiRegionProperties",
		"dsql:PutWitnessRegion",
		"dsql:RemovePeerCluster",
		"dsql:UpdateCluster",
	];
}

/**
 * Condition key constants and builders for dsql.
 */
export class DsqlConditions {
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"dsql:WitnessRegion",
	];
	/** Condition keys applicable to the CreateStream action. */
	static readonly CREATE_STREAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InjectError action. */
	static readonly INJECT_ERROR_CONDITION_KEYS: string[] = [
		"dsql:FisActionId",
		"dsql:FisTargetArns",
	];
	/** Condition keys applicable to the PutWitnessRegion action. */
	static readonly PUT_WITNESS_REGION_CONDITION_KEYS: string[] = [
		"dsql:WitnessRegion",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UPDATE_CLUSTER_CONDITION_KEYS: string[] = [
		"dsql:WitnessRegion",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: dsql:FisActionId (String) */
	static readonly FIS_ACTION_ID = "dsql:FisActionId";
	/** Condition key: dsql:FisTargetArns (ArrayOfARN) */
	static readonly FIS_TARGET_ARNS = "dsql:FisTargetArns";
	/** Condition key: dsql:WitnessRegion (String) */
	static readonly WITNESS_REGION = "dsql:WitnessRegion";

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
	 * Generates a condition block for `dsql:FisActionId`.
	 */
	static fisActionId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dsql:FisActionId": value } };
	}

	/**
	 * Generates a condition block for `dsql:FisTargetArns`.
	 */
	static fisTargetArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:ArnEquals": { "dsql:FisTargetArns": values } };
	}

	/**
	 * Generates a condition block for `dsql:WitnessRegion`.
	 */
	static witnessRegion(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "dsql:WitnessRegion": value } };
	}
}
