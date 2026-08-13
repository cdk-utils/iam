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
	static readonly CreateApplication = "account-access:CreateApplication";
	/** [Write] account-access:CreateEntitlement */
	static readonly CreateEntitlement = "account-access:CreateEntitlement";
	/** [Write] account-access:DeleteApplication */
	static readonly DeleteApplication = "account-access:DeleteApplication";
	/** [Write] account-access:DeleteEntitlement */
	static readonly DeleteEntitlement = "account-access:DeleteEntitlement";
	/** [Read] account-access:GetApplication */
	static readonly actionGetApplication = "account-access:GetApplication";
	/** [Read] account-access:GetEntitlement */
	static readonly actionGetEntitlement = "account-access:GetEntitlement";
	/** [List] account-access:ListApplications */
	static readonly ListApplications = "account-access:ListApplications";
	/** [List] account-access:ListEntitlements */
	static readonly ListEntitlements = "account-access:ListEntitlements";
	/** [Read] account-access:ListTagsForResource */
	static readonly ListTagsForResource = "account-access:ListTagsForResource";
	/** [Tagging] account-access:TagResource */
	static readonly TagResource = "account-access:TagResource";
	/** [Tagging] account-access:UntagResource */
	static readonly UntagResource = "account-access:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AccountAccessActions.actionGetApplication,
		AccountAccessActions.actionGetEntitlement,
		AccountAccessActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AccountAccessActions.CreateApplication,
		AccountAccessActions.CreateEntitlement,
		AccountAccessActions.DeleteApplication,
		AccountAccessActions.DeleteEntitlement,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AccountAccessActions.ListApplications,
		AccountAccessActions.ListEntitlements,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AccountAccessActions.TagResource,
		AccountAccessActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface AccountAccessApplicationArnProps {
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
 * Parsed components of a application ARN.
 */
export interface AccountAccessApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):account-access:(?<region>[^:]*):(?<account>[^:]*):application\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for account-access resources.
 */
export class AccountAccessResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: AccountAccessApplicationArnProps): string {
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
	static parseApplicationArn(
		arn: string,
	): AccountAccessApplicationArnComponents {
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
	static readonly CreateApplication: string[] = [
		"account-access:CreateApplication",
		"account-access:TagResource",
	];
	/** IAM actions required for the CreateEntitlement API call. */
	static readonly CreateEntitlement: string[] = [
		"account-access:CreateEntitlement",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"account-access:DeleteApplication",
	];
	/** IAM actions required for the DeleteEntitlement API call. */
	static readonly DeleteEntitlement: string[] = [
		"account-access:DeleteEntitlement",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = [
		"account-access:GetApplication",
	];
	/** IAM actions required for the GetEntitlement API call. */
	static readonly opGetEntitlement: string[] = [
		"account-access:GetEntitlement",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"account-access:ListApplications",
	];
	/** IAM actions required for the ListEntitlements API call. */
	static readonly ListEntitlements: string[] = [
		"account-access:ListEntitlements",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"account-access:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["account-access:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["account-access:UntagResource"];
}

/**
 * Condition key constants and builders for account-access.
 */
export class AccountAccessConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
