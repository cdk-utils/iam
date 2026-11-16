// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssmmessages.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ssmmessages service.
 */
export class SsmmessagesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssmmessages";

	/** [Write] ssmmessages:CreateControlChannel */
	static readonly CreateControlChannel = "ssmmessages:CreateControlChannel";
	/** [Write] ssmmessages:CreateDataChannel */
	static readonly CreateDataChannel = "ssmmessages:CreateDataChannel";
	/** [Write] ssmmessages:OpenControlChannel */
	static readonly OpenControlChannel = "ssmmessages:OpenControlChannel";
	/** [Write] ssmmessages:OpenDataChannel */
	static readonly OpenDataChannel = "ssmmessages:OpenDataChannel";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SsmmessagesActions.CreateControlChannel,
		SsmmessagesActions.CreateDataChannel,
		SsmmessagesActions.OpenControlChannel,
		SsmmessagesActions.OpenDataChannel,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a session ARN.
 */
export interface SsmmessagesSessionArnProps {
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a session ARN.
 */
export interface SsmmessagesSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

const SessionArnRegex =
	/^arn:(?<partition>[^:]+):ssm:(?<region>[^:]*):(?<account>[^:]*):session\/(?<sessionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ssmmessages resources.
 */
export class SsmmessagesResources {
	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: SsmmessagesSessionArnProps): string {
		return `arn:${props.partition ?? "aws"}:ssm:${props.region ?? "*"}:${props.account ?? "*"}:session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): SsmmessagesSessionArnComponents {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sessionId: match.groups!.sessionId,
		};
	}
}

/**
 * Condition key constants and builders for ssmmessages.
 */
export class SsmmessagesConditions {
	/** Condition keys applicable to the CreateControlChannel action. */
	static readonly CreateControlChannelConditionKeys: string[] = [
		"ec2:SourceInstanceARN",
		"ssm:SourceInstanceARN",
	];

	/** Condition key: ec2:SourceInstanceARN (ARN) */
	static readonly SOURCE_INSTANCE_ARN = "ec2:SourceInstanceARN";
	/** Condition key: ssm:resourceTag/aws:ssmmessages:session-id (String) */
	static readonly RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID =
		"ssm:resourceTag/aws:ssmmessages:session-id";
	/** Condition key: ssm:resourceTag/aws:ssmmessages:target-id (String) */
	static readonly RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID =
		"ssm:resourceTag/aws:ssmmessages:target-id";
}
