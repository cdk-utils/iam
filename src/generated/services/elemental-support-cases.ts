// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elemental-support-cases.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elemental-support-cases service.
 */
export class ElementalSupportCasesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elemental-support-cases";

	/** [Write] elemental-support-cases:AddCaseComment */
	static readonly AddCaseComment = "elemental-support-cases:AddCaseComment";
	/** [Write] elemental-support-cases:CheckCasePermission */
	static readonly CheckCasePermission =
		"elemental-support-cases:CheckCasePermission";
	/** [Write] elemental-support-cases:CompleteMultipartUpload */
	static readonly CompleteMultipartUpload =
		"elemental-support-cases:CompleteMultipartUpload";
	/** [Write] elemental-support-cases:CreateCase */
	static readonly CreateCase = "elemental-support-cases:CreateCase";
	/** [Write] elemental-support-cases:CreateS3CLIUploadCommand */
	static readonly CreateS3CLIUploadCommand =
		"elemental-support-cases:CreateS3CLIUploadCommand";
	/** [Write] elemental-support-cases:CreateS3DownloadUrl */
	static readonly CreateS3DownloadUrl =
		"elemental-support-cases:CreateS3DownloadUrl";
	/** [Read] elemental-support-cases:GetCase */
	static readonly actionGetCase = "elemental-support-cases:GetCase";
	/** [Read] elemental-support-cases:GetCasePermission */
	static readonly actionGetCasePermission =
		"elemental-support-cases:GetCasePermission";
	/** [Read] elemental-support-cases:GetCases */
	static readonly actionGetCases = "elemental-support-cases:GetCases";
	/** [Read] elemental-support-cases:GetUICache */
	static readonly actionGetUICache = "elemental-support-cases:GetUICache";
	/** [Read] elemental-support-cases:ListTagsForCase */
	static readonly ListTagsForCase = "elemental-support-cases:ListTagsForCase";
	/** [Write] elemental-support-cases:StartMultipartUpload */
	static readonly StartMultipartUpload =
		"elemental-support-cases:StartMultipartUpload";
	/** [Tagging] elemental-support-cases:TagCase */
	static readonly TagCase = "elemental-support-cases:TagCase";
	/** [Tagging] elemental-support-cases:UntagCase */
	static readonly UntagCase = "elemental-support-cases:UntagCase";
	/** [Write] elemental-support-cases:UpdateCase */
	static readonly UpdateCase = "elemental-support-cases:UpdateCase";
	/** [Write] elemental-support-cases:UpdateCaseStatus */
	static readonly UpdateCaseStatus = "elemental-support-cases:UpdateCaseStatus";
	/** [Write] elemental-support-cases:UpdateMultipartUpload */
	static readonly UpdateMultipartUpload =
		"elemental-support-cases:UpdateMultipartUpload";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElementalSupportCasesActions.actionGetCase,
		ElementalSupportCasesActions.actionGetCasePermission,
		ElementalSupportCasesActions.actionGetCases,
		ElementalSupportCasesActions.actionGetUICache,
		ElementalSupportCasesActions.ListTagsForCase,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElementalSupportCasesActions.AddCaseComment,
		ElementalSupportCasesActions.CheckCasePermission,
		ElementalSupportCasesActions.CompleteMultipartUpload,
		ElementalSupportCasesActions.CreateCase,
		ElementalSupportCasesActions.CreateS3CLIUploadCommand,
		ElementalSupportCasesActions.CreateS3DownloadUrl,
		ElementalSupportCasesActions.StartMultipartUpload,
		ElementalSupportCasesActions.UpdateCase,
		ElementalSupportCasesActions.UpdateCaseStatus,
		ElementalSupportCasesActions.UpdateMultipartUpload,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ElementalSupportCasesActions.TagCase,
		ElementalSupportCasesActions.UntagCase,
	];
}

/**
 * Properties for building a case ARN.
 */
export interface ElementalSupportCasesCaseArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a case ARN.
 */
export interface ElementalSupportCasesCaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const CaseArnRegex =
	/^arn:(?<partition>[^:]+):elemental-support-cases::(?<account>[^:]*):case\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elemental-support-cases resources.
 */
export class ElementalSupportCasesResources {
	/**
	 * Builds an ARN for the case resource.
	 */
	static case(props: ElementalSupportCasesCaseArnProps): string {
		return `arn:${props.partition ?? "aws"}:elemental-support-cases::${props.account ?? "*"}:case/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the case resource.
	 */
	static isValidCaseArn(arn: string): boolean {
		return CaseArnRegex.test(arn);
	}

	/**
	 * Parses a case ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCaseArn(arn: string): ElementalSupportCasesCaseArnComponents {
		const match = CaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid case ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * Condition key constants and builders for elemental-support-cases.
 */
export class ElementalSupportCasesConditions {
	/** Condition keys applicable to the CreateCase action. */
	static readonly CreateCaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagCase action. */
	static readonly TagCaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagCase action. */
	static readonly UntagCaseConditionKeys: string[] = ["aws:TagKeys"];

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
