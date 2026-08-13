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
	static readonly AddPeerCluster = "dsql:AddPeerCluster";
	/** [Write] dsql:CreateCluster */
	static readonly CreateCluster = "dsql:CreateCluster";
	/** [Write] dsql:CreateStream */
	static readonly CreateStream = "dsql:CreateStream";
	/** [Write] dsql:DbConnect */
	static readonly DbConnect = "dsql:DbConnect";
	/** [Write] dsql:DbConnectAdmin */
	static readonly DbConnectAdmin = "dsql:DbConnectAdmin";
	/** [Write] dsql:DeleteCluster */
	static readonly DeleteCluster = "dsql:DeleteCluster";
	/** [Write] dsql:DeleteClusterPolicy */
	static readonly DeleteClusterPolicy = "dsql:DeleteClusterPolicy";
	/** [Write] dsql:DeleteStream */
	static readonly DeleteStream = "dsql:DeleteStream";
	/** [Read] dsql:GetBackupJob */
	static readonly actionGetBackupJob = "dsql:GetBackupJob";
	/** [Read] dsql:GetCluster */
	static readonly actionGetCluster = "dsql:GetCluster";
	/** [Read] dsql:GetClusterPolicy */
	static readonly actionGetClusterPolicy = "dsql:GetClusterPolicy";
	/** [Read] dsql:GetRestoreJob */
	static readonly actionGetRestoreJob = "dsql:GetRestoreJob";
	/** [Read] dsql:GetStream */
	static readonly actionGetStream = "dsql:GetStream";
	/** [Read] dsql:GetVpcEndpointServiceName */
	static readonly actionGetVpcEndpointServiceName =
		"dsql:GetVpcEndpointServiceName";
	/** [Write] dsql:InjectError */
	static readonly InjectError = "dsql:InjectError";
	/** [List] dsql:ListClusters */
	static readonly ListClusters = "dsql:ListClusters";
	/** [List] dsql:ListStreams */
	static readonly ListStreams = "dsql:ListStreams";
	/** [Read] dsql:ListTagsForResource */
	static readonly ListTagsForResource = "dsql:ListTagsForResource";
	/** [Write] dsql:PutClusterPolicy */
	static readonly PutClusterPolicy = "dsql:PutClusterPolicy";
	/** [Write] dsql:PutMultiRegionProperties */
	static readonly PutMultiRegionProperties = "dsql:PutMultiRegionProperties";
	/** [Write] dsql:PutWitnessRegion */
	static readonly PutWitnessRegion = "dsql:PutWitnessRegion";
	/** [Write] dsql:RemovePeerCluster */
	static readonly RemovePeerCluster = "dsql:RemovePeerCluster";
	/** [Write] dsql:StartBackupJob */
	static readonly StartBackupJob = "dsql:StartBackupJob";
	/** [Write] dsql:StartRestoreJob */
	static readonly StartRestoreJob = "dsql:StartRestoreJob";
	/** [Write] dsql:StopBackupJob */
	static readonly StopBackupJob = "dsql:StopBackupJob";
	/** [Write] dsql:StopRestoreJob */
	static readonly StopRestoreJob = "dsql:StopRestoreJob";
	/** [Tagging] dsql:TagResource */
	static readonly TagResource = "dsql:TagResource";
	/** [Tagging] dsql:UntagResource */
	static readonly UntagResource = "dsql:UntagResource";
	/** [Write] dsql:UpdateCluster */
	static readonly UpdateCluster = "dsql:UpdateCluster";
	/** [Write] dsql:UpdateStream */
	static readonly UpdateStream = "dsql:UpdateStream";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		DsqlActions.actionGetBackupJob,
		DsqlActions.actionGetCluster,
		DsqlActions.actionGetClusterPolicy,
		DsqlActions.actionGetRestoreJob,
		DsqlActions.actionGetStream,
		DsqlActions.actionGetVpcEndpointServiceName,
		DsqlActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		DsqlActions.AddPeerCluster,
		DsqlActions.CreateCluster,
		DsqlActions.CreateStream,
		DsqlActions.DbConnect,
		DsqlActions.DbConnectAdmin,
		DsqlActions.DeleteCluster,
		DsqlActions.DeleteClusterPolicy,
		DsqlActions.DeleteStream,
		DsqlActions.InjectError,
		DsqlActions.PutClusterPolicy,
		DsqlActions.PutMultiRegionProperties,
		DsqlActions.PutWitnessRegion,
		DsqlActions.RemovePeerCluster,
		DsqlActions.StartBackupJob,
		DsqlActions.StartRestoreJob,
		DsqlActions.StopBackupJob,
		DsqlActions.StopRestoreJob,
		DsqlActions.UpdateCluster,
		DsqlActions.UpdateStream,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		DsqlActions.ListClusters,
		DsqlActions.ListStreams,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		DsqlActions.TagResource,
		DsqlActions.UntagResource,
	];
}

/**
 * Properties for building a Cluster ARN.
 */
export interface DsqlClusterArnProps {
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
 * Parsed components of a Cluster ARN.
 */
export interface DsqlClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a Stream ARN.
 */
export interface DsqlStreamArnProps {
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
}

/**
 * Parsed components of a Stream ARN.
 */
export interface DsqlStreamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterId component. */
	readonly clusterId: string;
	/** The StreamId component. */
	readonly streamId: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):dsql:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<identifier>[^:/?]+)$/;
const StreamArnRegex =
	/^arn:(?<partition>[^:]+):dsql:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterId>[^:/?]+)\/stream\/(?<streamId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for dsql resources.
 */
export class DsqlResources {
	/**
	 * Builds an ARN for the Cluster resource.
	 */
	static cluster(props: DsqlClusterArnProps): string {
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
	static parseClusterArn(arn: string): DsqlClusterArnComponents {
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
	static stream(props: DsqlStreamArnProps): string {
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
	static parseStreamArn(arn: string): DsqlStreamArnComponents {
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
	static readonly CreateCluster: string[] = [
		"dsql:AddPeerCluster",
		"dsql:CreateCluster",
		"dsql:DeleteClusterPolicy",
		"dsql:PutClusterPolicy",
		"dsql:PutMultiRegionProperties",
		"dsql:PutWitnessRegion",
		"dsql:TagResource",
	];
	/** IAM actions required for the CreateStream API call. */
	static readonly CreateStream: string[] = [
		"dsql:CreateStream",
		"iam:PassRole",
		"dsql:TagResource",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["dsql:DeleteCluster"];
	/** IAM actions required for the DeleteClusterPolicy API call. */
	static readonly DeleteClusterPolicy: string[] = ["dsql:DeleteClusterPolicy"];
	/** IAM actions required for the DeleteStream API call. */
	static readonly DeleteStream: string[] = ["dsql:DeleteStream"];
	/** IAM actions required for the GetCluster API call. */
	static readonly opGetCluster: string[] = ["dsql:GetCluster"];
	/** IAM actions required for the GetClusterPolicy API call. */
	static readonly opGetClusterPolicy: string[] = ["dsql:GetClusterPolicy"];
	/** IAM actions required for the GetStream API call. */
	static readonly opGetStream: string[] = ["dsql:GetStream"];
	/** IAM actions required for the GetVpcEndpointServiceName API call. */
	static readonly opGetVpcEndpointServiceName: string[] = [
		"dsql:GetVpcEndpointServiceName",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["dsql:ListClusters"];
	/** IAM actions required for the ListStreams API call. */
	static readonly ListStreams: string[] = ["dsql:ListStreams"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["dsql:ListTagsForResource"];
	/** IAM actions required for the PutClusterPolicy API call. */
	static readonly PutClusterPolicy: string[] = [
		"dsql:DeleteClusterPolicy",
		"dsql:PutClusterPolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["dsql:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["dsql:UntagResource"];
	/** IAM actions required for the UpdateCluster API call. */
	static readonly UpdateCluster: string[] = [
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
	static readonly CreateClusterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"dsql:WitnessRegion",
	];
	/** Condition keys applicable to the CreateStream action. */
	static readonly CreateStreamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the InjectError action. */
	static readonly InjectErrorConditionKeys: string[] = [
		"dsql:FisActionId",
		"dsql:FisTargetArns",
	];
	/** Condition keys applicable to the PutWitnessRegion action. */
	static readonly PutWitnessRegionConditionKeys: string[] = [
		"dsql:WitnessRegion",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCluster action. */
	static readonly UpdateClusterConditionKeys: string[] = ["dsql:WitnessRegion"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
