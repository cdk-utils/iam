// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iotfleethub.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iotfleethub service.
 */
export class IotfleethubActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iotfleethub";

	/** [Write] iotfleethub:CreateApplication */
	static readonly CreateApplication = "iotfleethub:CreateApplication";
	/** [Write] iotfleethub:DeleteApplication */
	static readonly DeleteApplication = "iotfleethub:DeleteApplication";
	/** [Read] iotfleethub:DescribeApplication */
	static readonly DescribeApplication = "iotfleethub:DescribeApplication";
	/** [List] iotfleethub:ListApplications */
	static readonly ListApplications = "iotfleethub:ListApplications";
	/** [Read] iotfleethub:ListTagsForResource */
	static readonly ListTagsForResource = "iotfleethub:ListTagsForResource";
	/** [Tagging] iotfleethub:TagResource */
	static readonly TagResource = "iotfleethub:TagResource";
	/** [Tagging] iotfleethub:UntagResource */
	static readonly UntagResource = "iotfleethub:UntagResource";
	/** [Write] iotfleethub:UpdateApplication */
	static readonly UpdateApplication = "iotfleethub:UpdateApplication";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotfleethubActions.DescribeApplication,
		IotfleethubActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotfleethubActions.CreateApplication,
		IotfleethubActions.DeleteApplication,
		IotfleethubActions.UpdateApplication,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IotfleethubActions.ListApplications,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IotfleethubActions.TagResource,
		IotfleethubActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface IotfleethubApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
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
export interface IotfleethubApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):iotfleethub:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iotfleethub resources.
 */
export class IotfleethubResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: IotfleethubApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleethub:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
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
	static parseApplicationArn(arn: string): IotfleethubApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}
}

/**
 * Condition key constants and builders for iotfleethub.
 */
export class IotfleethubConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
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
