// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/account-access.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the account-access service.
 */
export class AccountAccessActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "account-access";

	/** [Write] account-access:CreateApplication */
	static readonly CREATE_APPLICATION = "account-access:CreateApplication";
	/** [Write] account-access:CreateEntitlement */
	static readonly CREATE_ENTITLEMENT = "account-access:CreateEntitlement";
	/** [Write] account-access:DeleteApplication */
	static readonly DELETE_APPLICATION = "account-access:DeleteApplication";
	/** [Write] account-access:DeleteEntitlement */
	static readonly DELETE_ENTITLEMENT = "account-access:DeleteEntitlement";
	/** [Read] account-access:GetApplication */
	static readonly GET_APPLICATION = "account-access:GetApplication";
	/** [Read] account-access:GetEntitlement */
	static readonly GET_ENTITLEMENT = "account-access:GetEntitlement";
	/** [List] account-access:ListApplications */
	static readonly LIST_APPLICATIONS = "account-access:ListApplications";
	/** [List] account-access:ListEntitlements */
	static readonly LIST_ENTITLEMENTS = "account-access:ListEntitlements";
	/** [Read] account-access:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "account-access:ListTagsForResource";
	/** [Tagging] account-access:TagResource */
	static readonly TAG_RESOURCE = "account-access:TagResource";
	/** [Tagging] account-access:UntagResource */
	static readonly UNTAG_RESOURCE = "account-access:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AccountAccessActions.GET_APPLICATION,
		AccountAccessActions.GET_ENTITLEMENT,
		AccountAccessActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AccountAccessActions.CREATE_APPLICATION,
		AccountAccessActions.CREATE_ENTITLEMENT,
		AccountAccessActions.DELETE_APPLICATION,
		AccountAccessActions.DELETE_ENTITLEMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AccountAccessActions.LIST_APPLICATIONS,
		AccountAccessActions.LIST_ENTITLEMENTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AccountAccessActions.TAG_RESOURCE,
		AccountAccessActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):account-access:(?<region>[^:]*):(?<account>[^:]*):application/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for account-access resources.
 */
export class AccountAccessResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:account-access:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
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
 * API operation to required IAM actions mapping for account-access.
 */
export class AccountAccessOperations {
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"account-access:CreateApplication",
		"account-access:TagResource",
	];
	/** IAM actions required for the CreateEntitlement API call. */
	static readonly CREATE_ENTITLEMENT: string[] = [
		"account-access:CreateEntitlement",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"account-access:DeleteApplication",
	];
	/** IAM actions required for the DeleteEntitlement API call. */
	static readonly DELETE_ENTITLEMENT: string[] = [
		"account-access:DeleteEntitlement",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["account-access:GetApplication"];
	/** IAM actions required for the GetEntitlement API call. */
	static readonly GET_ENTITLEMENT: string[] = ["account-access:GetEntitlement"];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"account-access:ListApplications",
	];
	/** IAM actions required for the ListEntitlements API call. */
	static readonly LIST_ENTITLEMENTS: string[] = [
		"account-access:ListEntitlements",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"account-access:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["account-access:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["account-access:UntagResource"];
}

/**
 * Condition key constants and builders for account-access.
 */
export class AccountAccessConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
