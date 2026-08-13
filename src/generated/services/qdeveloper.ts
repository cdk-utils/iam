// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/qdeveloper.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the qdeveloper service.
 */
export class QdeveloperActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "qdeveloper";

	/** [Write] qdeveloper:ExportArtifact */
	static readonly EXPORT_ARTIFACT = "qdeveloper:ExportArtifact";
	/** [Write] qdeveloper:ImportArtifact */
	static readonly IMPORT_ARTIFACT = "qdeveloper:ImportArtifact";
	/** [List] qdeveloper:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "qdeveloper:ListTagsForResource";
	/** [Write] qdeveloper:StartAgentSession */
	static readonly START_AGENT_SESSION = "qdeveloper:StartAgentSession";
	/** [Tagging] qdeveloper:TagResource */
	static readonly TAG_RESOURCE = "qdeveloper:TagResource";
	/** [Write] qdeveloper:TransformCode */
	static readonly TRANSFORM_CODE = "qdeveloper:TransformCode";
	/** [Tagging] qdeveloper:UntagResource */
	static readonly UNTAG_RESOURCE = "qdeveloper:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		QdeveloperActions.EXPORT_ARTIFACT,
		QdeveloperActions.IMPORT_ARTIFACT,
		QdeveloperActions.START_AGENT_SESSION,
		QdeveloperActions.TRANSFORM_CODE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		QdeveloperActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		QdeveloperActions.TAG_RESOURCE,
		QdeveloperActions.UNTAG_RESOURCE,
	];
}

const CodeTransformationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qdeveloper:(?<region>[^:]*):(?<account>[^:]*):codeTransformation/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for qdeveloper resources.
 */
export class QdeveloperResources {
	/**
	 * Builds an ARN for the codeTransformation resource.
	 */
	static codeTransformation(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:qdeveloper:${props.region ?? "*"}:${props.account ?? "*"}:codeTransformation/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the codeTransformation resource.
	 */
	static isValidCodeTransformationArn(arn: string): boolean {
		return CodeTransformationArnRegex.test(arn);
	}

	/**
	 * Parses a codeTransformation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodeTransformationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identifier: string;
	} {
		const match = CodeTransformationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid codeTransformation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * Condition key constants and builders for qdeveloper.
 */
export class QdeveloperConditions {
	/** Condition keys applicable to the StartAgentSession action. */
	static readonly START_AGENT_SESSION_CONDITION_KEYS: string[] = [
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
