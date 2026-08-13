// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/eks-auth.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the eks-auth service.
 */
export class EKSAuthActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "eks-auth";

	/** [Read] eks-auth:AssumeRoleForPodIdentity */
	static readonly AssumeRoleForPodIdentity =
		"eks-auth:AssumeRoleForPodIdentity";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EKSAuthActions.AssumeRoleForPodIdentity,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a cluster ARN.
 */
export interface EKSAuthClusterArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface EKSAuthClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for eks-auth resources.
 */
export class EKSAuthResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: EKSAuthClusterArnProps): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): EKSAuthClusterArnComponents {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for eks-auth.
 */
export class EKSAuthOperations {
	/** IAM actions required for the AssumeRoleForPodIdentity API call. */
	static readonly AssumeRoleForPodIdentity: string[] = [
		"eks-auth:AssumeRoleForPodIdentity",
	];
}

/**
 * Condition key constants and builders for eks-auth.
 */
export class EKSAuthConditions {
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
