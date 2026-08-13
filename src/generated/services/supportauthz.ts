// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/supportauthz.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the supportauthz service.
 */
export class SupportauthzActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "supportauthz";

	/** [Write] supportauthz:CreateSupportPermit */
	static readonly CreateSupportPermit = "supportauthz:CreateSupportPermit";
	/** [Write] supportauthz:DeleteSupportPermit */
	static readonly DeleteSupportPermit = "supportauthz:DeleteSupportPermit";
	/** [Read] supportauthz:GetAction */
	static readonly actionGetAction = "supportauthz:GetAction";
	/** [Read] supportauthz:GetSupportPermit */
	static readonly actionGetSupportPermit = "supportauthz:GetSupportPermit";
	/** [List] supportauthz:ListActions */
	static readonly ListActions = "supportauthz:ListActions";
	/** [List] supportauthz:ListSupportPermitRequests */
	static readonly ListSupportPermitRequests =
		"supportauthz:ListSupportPermitRequests";
	/** [List] supportauthz:ListSupportPermits */
	static readonly ListSupportPermits = "supportauthz:ListSupportPermits";
	/** [Read] supportauthz:ListTagsForResource */
	static readonly ListTagsForResource = "supportauthz:ListTagsForResource";
	/** [Write] supportauthz:RegisterKey */
	static readonly RegisterKey = "supportauthz:RegisterKey";
	/** [Write] supportauthz:RejectSupportPermitRequest */
	static readonly RejectSupportPermitRequest =
		"supportauthz:RejectSupportPermitRequest";
	/** [Tagging] supportauthz:TagResource */
	static readonly TagResource = "supportauthz:TagResource";
	/** [Tagging] supportauthz:UntagResource */
	static readonly UntagResource = "supportauthz:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SupportauthzActions.actionGetAction,
		SupportauthzActions.actionGetSupportPermit,
		SupportauthzActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SupportauthzActions.CreateSupportPermit,
		SupportauthzActions.DeleteSupportPermit,
		SupportauthzActions.RegisterKey,
		SupportauthzActions.RejectSupportPermitRequest,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SupportauthzActions.ListActions,
		SupportauthzActions.ListSupportPermitRequests,
		SupportauthzActions.ListSupportPermits,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SupportauthzActions.TagResource,
		SupportauthzActions.UntagResource,
	];
}

/**
 * Properties for building a supportpermit ARN.
 */
export interface SupportauthzSupportpermitArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a supportpermit ARN.
 */
export interface SupportauthzSupportpermitArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a supportpermitrequest ARN.
 */
export interface SupportauthzSupportpermitrequestArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a supportpermitrequest ARN.
 */
export interface SupportauthzSupportpermitrequestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const SupportpermitArnRegex =
	/^arn:(?<partition>[^:]+):supportauthz:(?<region>[^:]*):(?<account>[^:]*):supportpermit\/(?<resourceId>[^:/?]+)$/;
const SupportpermitrequestArnRegex =
	/^arn:(?<partition>[^:]+):supportauthz:(?<region>[^:]*):(?<account>[^:]*):supportpermitrequest\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for supportauthz resources.
 */
export class SupportauthzResources {
	/**
	 * Builds an ARN for the supportpermit resource.
	 */
	static supportpermit(props: SupportauthzSupportpermitArnProps): string {
		return `arn:${props.partition ?? "aws"}:supportauthz:${props.region ?? "*"}:${props.account ?? "*"}:supportpermit/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the supportpermit resource.
	 */
	static isValidSupportpermitArn(arn: string): boolean {
		return SupportpermitArnRegex.test(arn);
	}

	/**
	 * Parses a supportpermit ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSupportpermitArn(
		arn: string,
	): SupportauthzSupportpermitArnComponents {
		const match = SupportpermitArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid supportpermit ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the supportpermitrequest resource.
	 */
	static supportpermitrequest(
		props: SupportauthzSupportpermitrequestArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:supportauthz:${props.region ?? "*"}:${props.account ?? "*"}:supportpermitrequest/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the supportpermitrequest resource.
	 */
	static isValidSupportpermitrequestArn(arn: string): boolean {
		return SupportpermitrequestArnRegex.test(arn);
	}

	/**
	 * Parses a supportpermitrequest ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSupportpermitrequestArn(
		arn: string,
	): SupportauthzSupportpermitrequestArnComponents {
		const match = SupportpermitrequestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid supportpermitrequest ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for supportauthz.
 */
export class SupportauthzOperations {
	/** IAM actions required for the CreateSupportPermit API call. */
	static readonly CreateSupportPermit: string[] = [
		"supportauthz:CreateSupportPermit",
		"supportauthz:TagResource",
	];
	/** IAM actions required for the DeleteSupportPermit API call. */
	static readonly DeleteSupportPermit: string[] = [
		"supportauthz:DeleteSupportPermit",
	];
	/** IAM actions required for the GetAction API call. */
	static readonly opGetAction: string[] = ["supportauthz:GetAction"];
	/** IAM actions required for the GetSupportPermit API call. */
	static readonly opGetSupportPermit: string[] = [
		"supportauthz:GetSupportPermit",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly ListActions: string[] = ["supportauthz:ListActions"];
	/** IAM actions required for the ListSupportPermitRequests API call. */
	static readonly ListSupportPermitRequests: string[] = [
		"supportauthz:ListSupportPermitRequests",
	];
	/** IAM actions required for the ListSupportPermits API call. */
	static readonly ListSupportPermits: string[] = [
		"supportauthz:ListSupportPermits",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"supportauthz:ListTagsForResource",
	];
	/** IAM actions required for the RejectSupportPermitRequest API call. */
	static readonly RejectSupportPermitRequest: string[] = [
		"supportauthz:RejectSupportPermitRequest",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["supportauthz:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["supportauthz:UntagResource"];
}

/**
 * Condition key constants and builders for supportauthz.
 */
export class SupportauthzConditions {
	/** Condition keys applicable to the CreateSupportPermit action. */
	static readonly CreateSupportPermitConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteSupportPermit action. */
	static readonly DeleteSupportPermitConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSupportPermit action. */
	static readonly actionGetSupportPermitConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
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
