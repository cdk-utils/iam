// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/eventsbilltoaws.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the eventsbilltoaws service.
 */
export class EventsbilltoawsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "eventsbilltoaws";

	/** [Write] eventsbilltoaws:approve */
	static readonly approve = "eventsbilltoaws:approve";
	/** [Read] eventsbilltoaws:info */
	static readonly info = "eventsbilltoaws:info";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [EventsbilltoawsActions.info];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [EventsbilltoawsActions.approve];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a approve ARN.
 */
export interface EventsbilltoawsApproveArnProps {
	/** The RelativeId component of the ARN. */
	readonly relativeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a approve ARN.
 */
export interface EventsbilltoawsApproveArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RelativeId component. */
	readonly relativeId: string;
}

/**
 * Properties for building a info ARN.
 */
export interface EventsbilltoawsInfoArnProps {
	/** The RelativeId component of the ARN. */
	readonly relativeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a info ARN.
 */
export interface EventsbilltoawsInfoArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RelativeId component. */
	readonly relativeId: string;
}

const ApproveArnRegex =
	/^arn:(?<partition>[^:]+):eventsbilltoaws:(?<region>[^:]*):(?<account>[^:]*):(?<relativeId>[^:/?]+)$/;
const InfoArnRegex =
	/^arn:(?<partition>[^:]+):eventsbilltoaws:(?<region>[^:]*):(?<account>[^:]*):(?<relativeId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for eventsbilltoaws resources.
 */
export class EventsbilltoawsResources {
	/**
	 * Builds an ARN for the approve resource.
	 */
	static approve(props: EventsbilltoawsApproveArnProps): string {
		return `arn:${props.partition ?? "aws"}:eventsbilltoaws:${props.region ?? "*"}:${props.account ?? "*"}:${props.relativeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the approve resource.
	 */
	static isValidApproveArn(arn: string): boolean {
		return ApproveArnRegex.test(arn);
	}

	/**
	 * Parses a approve ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApproveArn(arn: string): EventsbilltoawsApproveArnComponents {
		const match = ApproveArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid approve ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			relativeId: match.groups!.relativeId,
		};
	}

	/**
	 * Builds an ARN for the info resource.
	 */
	static info(props: EventsbilltoawsInfoArnProps): string {
		return `arn:${props.partition ?? "aws"}:eventsbilltoaws:${props.region ?? "*"}:${props.account ?? "*"}:${props.relativeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the info resource.
	 */
	static isValidInfoArn(arn: string): boolean {
		return InfoArnRegex.test(arn);
	}

	/**
	 * Parses a info ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInfoArn(arn: string): EventsbilltoawsInfoArnComponents {
		const match = InfoArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid info ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			relativeId: match.groups!.relativeId,
		};
	}
}

/**
 * Condition key constants and builders for eventsbilltoaws.
 */
export class EventsbilltoawsConditions {
	/** Condition keys applicable to the approve action. */
	static readonly approveConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the info action. */
	static readonly infoConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
}
