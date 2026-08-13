// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/workmailmessageflow.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the workmailmessageflow service.
 */
export class WorkmailmessageflowActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "workmailmessageflow";

	/** [Read] workmailmessageflow:GetRawMessageContent */
	static readonly actionGetRawMessageContent =
		"workmailmessageflow:GetRawMessageContent";
	/** [Write] workmailmessageflow:PutRawMessageContent */
	static readonly PutRawMessageContent =
		"workmailmessageflow:PutRawMessageContent";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WorkmailmessageflowActions.actionGetRawMessageContent,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WorkmailmessageflowActions.PutRawMessageContent,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a RawMessage ARN.
 */
export interface WorkmailmessageflowRawMessageArnProps {
	/** The OrganizationId component of the ARN. */
	readonly organizationId: string;
	/** The Context component of the ARN. */
	readonly context: string;
	/** The MessageId component of the ARN. */
	readonly messageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a RawMessage ARN.
 */
export interface WorkmailmessageflowRawMessageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The OrganizationId component. */
	readonly organizationId: string;
	/** The Context component. */
	readonly context: string;
	/** The MessageId component. */
	readonly messageId: string;
}

const RawMessageArnRegex =
	/^arn:(?<partition>[^:]+):workmailmessageflow:(?<region>[^:]*):(?<account>[^:]*):message\/(?<organizationId>[^:/?]+)\/(?<context>[^:/?]+)\/(?<messageId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for workmailmessageflow resources.
 */
export class WorkmailmessageflowResources {
	/**
	 * Builds an ARN for the RawMessage resource.
	 */
	static rawMessage(props: WorkmailmessageflowRawMessageArnProps): string {
		return `arn:${props.partition ?? "aws"}:workmailmessageflow:${props.region ?? "*"}:${props.account ?? "*"}:message/${props.organizationId}/${props.context}/${props.messageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RawMessage resource.
	 */
	static isValidRawMessageArn(arn: string): boolean {
		return RawMessageArnRegex.test(arn);
	}

	/**
	 * Parses a RawMessage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRawMessageArn(
		arn: string,
	): WorkmailmessageflowRawMessageArnComponents {
		const match = RawMessageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RawMessage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			organizationId: match.groups!.organizationId,
			context: match.groups!.context,
			messageId: match.groups!.messageId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for workmailmessageflow.
 */
export class WorkmailmessageflowOperations {
	/** IAM actions required for the GetRawMessageContent API call. */
	static readonly opGetRawMessageContent: string[] = [
		"workmailmessageflow:GetRawMessageContent",
	];
	/** IAM actions required for the PutRawMessageContent API call. */
	static readonly PutRawMessageContent: string[] = [
		"workmailmessageflow:PutRawMessageContent",
	];
}
