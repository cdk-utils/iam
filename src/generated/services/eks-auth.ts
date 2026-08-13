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
	static readonly ASSUME_ROLE_FOR_POD_IDENTITY =
		"eks-auth:AssumeRoleForPodIdentity";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EKSAuthActions.ASSUME_ROLE_FOR_POD_IDENTITY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for eks-auth resources.
 */
export class EKSAuthResources {
	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
	} {
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
	static readonly ASSUME_ROLE_FOR_POD_IDENTITY: string[] = [
		"eks-auth:AssumeRoleForPodIdentity",
	];
}

/**
 * Condition key constants and builders for eks-auth.
 */
export class EKSAuthConditions {
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
