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
	static readonly CREATE_APPLICATION = "iotfleethub:CreateApplication";
	/** [Write] iotfleethub:DeleteApplication */
	static readonly DELETE_APPLICATION = "iotfleethub:DeleteApplication";
	/** [Read] iotfleethub:DescribeApplication */
	static readonly DESCRIBE_APPLICATION = "iotfleethub:DescribeApplication";
	/** [List] iotfleethub:ListApplications */
	static readonly LIST_APPLICATIONS = "iotfleethub:ListApplications";
	/** [Read] iotfleethub:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "iotfleethub:ListTagsForResource";
	/** [Tagging] iotfleethub:TagResource */
	static readonly TAG_RESOURCE = "iotfleethub:TagResource";
	/** [Tagging] iotfleethub:UntagResource */
	static readonly UNTAG_RESOURCE = "iotfleethub:UntagResource";
	/** [Write] iotfleethub:UpdateApplication */
	static readonly UPDATE_APPLICATION = "iotfleethub:UpdateApplication";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotfleethubActions.DESCRIBE_APPLICATION,
		IotfleethubActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotfleethubActions.CREATE_APPLICATION,
		IotfleethubActions.DELETE_APPLICATION,
		IotfleethubActions.UPDATE_APPLICATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IotfleethubActions.LIST_APPLICATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IotfleethubActions.TAG_RESOURCE,
		IotfleethubActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleethub:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iotfleethub resources.
 */
export class IotfleethubResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
