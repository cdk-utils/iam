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
	static readonly CREATE_SUPPORT_PERMIT = "supportauthz:CreateSupportPermit";
	/** [Write] supportauthz:DeleteSupportPermit */
	static readonly DELETE_SUPPORT_PERMIT = "supportauthz:DeleteSupportPermit";
	/** [Read] supportauthz:GetAction */
	static readonly GET_ACTION = "supportauthz:GetAction";
	/** [Read] supportauthz:GetSupportPermit */
	static readonly GET_SUPPORT_PERMIT = "supportauthz:GetSupportPermit";
	/** [List] supportauthz:ListActions */
	static readonly LIST_ACTIONS = "supportauthz:ListActions";
	/** [List] supportauthz:ListSupportPermitRequests */
	static readonly LIST_SUPPORT_PERMIT_REQUESTS =
		"supportauthz:ListSupportPermitRequests";
	/** [List] supportauthz:ListSupportPermits */
	static readonly LIST_SUPPORT_PERMITS = "supportauthz:ListSupportPermits";
	/** [Read] supportauthz:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "supportauthz:ListTagsForResource";
	/** [Write] supportauthz:RegisterKey */
	static readonly REGISTER_KEY = "supportauthz:RegisterKey";
	/** [Write] supportauthz:RejectSupportPermitRequest */
	static readonly REJECT_SUPPORT_PERMIT_REQUEST =
		"supportauthz:RejectSupportPermitRequest";
	/** [Tagging] supportauthz:TagResource */
	static readonly TAG_RESOURCE = "supportauthz:TagResource";
	/** [Tagging] supportauthz:UntagResource */
	static readonly UNTAG_RESOURCE = "supportauthz:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SupportauthzActions.GET_ACTION,
		SupportauthzActions.GET_SUPPORT_PERMIT,
		SupportauthzActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SupportauthzActions.CREATE_SUPPORT_PERMIT,
		SupportauthzActions.DELETE_SUPPORT_PERMIT,
		SupportauthzActions.REGISTER_KEY,
		SupportauthzActions.REJECT_SUPPORT_PERMIT_REQUEST,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SupportauthzActions.LIST_ACTIONS,
		SupportauthzActions.LIST_SUPPORT_PERMIT_REQUESTS,
		SupportauthzActions.LIST_SUPPORT_PERMITS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SupportauthzActions.TAG_RESOURCE,
		SupportauthzActions.UNTAG_RESOURCE,
	];
}

const SupportpermitArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):supportauthz:(?<region>[^:]*):(?<account>[^:]*):supportpermit/(?<resourceId>[^:/?]+)$",
);
const SupportpermitrequestArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):supportauthz:(?<region>[^:]*):(?<account>[^:]*):supportpermitrequest/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for supportauthz resources.
 */
export class SupportauthzResources {
	/**
	 * Builds an ARN for the supportpermit resource.
	 */
	static supportpermit(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSupportpermitArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static supportpermitrequest(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSupportpermitrequestArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_SUPPORT_PERMIT: string[] = [
		"supportauthz:CreateSupportPermit",
		"supportauthz:TagResource",
	];
	/** IAM actions required for the DeleteSupportPermit API call. */
	static readonly DELETE_SUPPORT_PERMIT: string[] = [
		"supportauthz:DeleteSupportPermit",
	];
	/** IAM actions required for the GetAction API call. */
	static readonly GET_ACTION: string[] = ["supportauthz:GetAction"];
	/** IAM actions required for the GetSupportPermit API call. */
	static readonly GET_SUPPORT_PERMIT: string[] = [
		"supportauthz:GetSupportPermit",
	];
	/** IAM actions required for the ListActions API call. */
	static readonly LIST_ACTIONS: string[] = ["supportauthz:ListActions"];
	/** IAM actions required for the ListSupportPermitRequests API call. */
	static readonly LIST_SUPPORT_PERMIT_REQUESTS: string[] = [
		"supportauthz:ListSupportPermitRequests",
	];
	/** IAM actions required for the ListSupportPermits API call. */
	static readonly LIST_SUPPORT_PERMITS: string[] = [
		"supportauthz:ListSupportPermits",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"supportauthz:ListTagsForResource",
	];
	/** IAM actions required for the RejectSupportPermitRequest API call. */
	static readonly REJECT_SUPPORT_PERMIT_REQUEST: string[] = [
		"supportauthz:RejectSupportPermitRequest",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["supportauthz:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["supportauthz:UntagResource"];
}

/**
 * Condition key constants and builders for supportauthz.
 */
export class SupportauthzConditions {
	/** Condition keys applicable to the CreateSupportPermit action. */
	static readonly CREATE_SUPPORT_PERMIT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteSupportPermit action. */
	static readonly DELETE_SUPPORT_PERMIT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSupportPermit action. */
	static readonly GET_SUPPORT_PERMIT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
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
