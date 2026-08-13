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
	static readonly ExportArtifact = "qdeveloper:ExportArtifact";
	/** [Write] qdeveloper:ImportArtifact */
	static readonly ImportArtifact = "qdeveloper:ImportArtifact";
	/** [List] qdeveloper:ListTagsForResource */
	static readonly ListTagsForResource = "qdeveloper:ListTagsForResource";
	/** [Write] qdeveloper:StartAgentSession */
	static readonly StartAgentSession = "qdeveloper:StartAgentSession";
	/** [Tagging] qdeveloper:TagResource */
	static readonly TagResource = "qdeveloper:TagResource";
	/** [Write] qdeveloper:TransformCode */
	static readonly TransformCode = "qdeveloper:TransformCode";
	/** [Tagging] qdeveloper:UntagResource */
	static readonly UntagResource = "qdeveloper:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		QdeveloperActions.ExportArtifact,
		QdeveloperActions.ImportArtifact,
		QdeveloperActions.StartAgentSession,
		QdeveloperActions.TransformCode,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		QdeveloperActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		QdeveloperActions.TagResource,
		QdeveloperActions.UntagResource,
	];
}

/**
 * Properties for building a codeTransformation ARN.
 */
export interface QdeveloperCodeTransformationArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a codeTransformation ARN.
 */
export interface QdeveloperCodeTransformationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const CodeTransformationArnRegex =
	/^arn:(?<partition>[^:]+):qdeveloper:(?<region>[^:]*):(?<account>[^:]*):codeTransformation\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for qdeveloper resources.
 */
export class QdeveloperResources {
	/**
	 * Builds an ARN for the codeTransformation resource.
	 */
	static codeTransformation(
		props: QdeveloperCodeTransformationArnProps,
	): string {
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
	static parseCodeTransformationArn(
		arn: string,
	): QdeveloperCodeTransformationArnComponents {
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
	static readonly StartAgentSessionConditionKeys: string[] = [
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
