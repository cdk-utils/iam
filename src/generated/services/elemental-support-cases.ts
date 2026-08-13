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
	static readonly ADD_CASE_COMMENT = "elemental-support-cases:AddCaseComment";
	/** [Write] elemental-support-cases:CheckCasePermission */
	static readonly CHECK_CASE_PERMISSION =
		"elemental-support-cases:CheckCasePermission";
	/** [Write] elemental-support-cases:CompleteMultipartUpload */
	static readonly COMPLETE_MULTIPART_UPLOAD =
		"elemental-support-cases:CompleteMultipartUpload";
	/** [Write] elemental-support-cases:CreateCase */
	static readonly CREATE_CASE = "elemental-support-cases:CreateCase";
	/** [Write] elemental-support-cases:CreateS3CLIUploadCommand */
	static readonly CREATE_S3_CLI_UPLOAD_COMMAND =
		"elemental-support-cases:CreateS3CLIUploadCommand";
	/** [Write] elemental-support-cases:CreateS3DownloadUrl */
	static readonly CREATE_S3_DOWNLOAD_URL =
		"elemental-support-cases:CreateS3DownloadUrl";
	/** [Read] elemental-support-cases:GetCase */
	static readonly GET_CASE = "elemental-support-cases:GetCase";
	/** [Read] elemental-support-cases:GetCasePermission */
	static readonly GET_CASE_PERMISSION =
		"elemental-support-cases:GetCasePermission";
	/** [Read] elemental-support-cases:GetCases */
	static readonly GET_CASES = "elemental-support-cases:GetCases";
	/** [Read] elemental-support-cases:GetUICache */
	static readonly GET_UI_CACHE = "elemental-support-cases:GetUICache";
	/** [Read] elemental-support-cases:ListTagsForCase */
	static readonly LIST_TAGS_FOR_CASE =
		"elemental-support-cases:ListTagsForCase";
	/** [Write] elemental-support-cases:StartMultipartUpload */
	static readonly START_MULTIPART_UPLOAD =
		"elemental-support-cases:StartMultipartUpload";
	/** [Tagging] elemental-support-cases:TagCase */
	static readonly TAG_CASE = "elemental-support-cases:TagCase";
	/** [Tagging] elemental-support-cases:UntagCase */
	static readonly UNTAG_CASE = "elemental-support-cases:UntagCase";
	/** [Write] elemental-support-cases:UpdateCase */
	static readonly UPDATE_CASE = "elemental-support-cases:UpdateCase";
	/** [Write] elemental-support-cases:UpdateCaseStatus */
	static readonly UPDATE_CASE_STATUS =
		"elemental-support-cases:UpdateCaseStatus";
	/** [Write] elemental-support-cases:UpdateMultipartUpload */
	static readonly UPDATE_MULTIPART_UPLOAD =
		"elemental-support-cases:UpdateMultipartUpload";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElementalSupportCasesActions.GET_CASE,
		ElementalSupportCasesActions.GET_CASE_PERMISSION,
		ElementalSupportCasesActions.GET_CASES,
		ElementalSupportCasesActions.GET_UI_CACHE,
		ElementalSupportCasesActions.LIST_TAGS_FOR_CASE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElementalSupportCasesActions.ADD_CASE_COMMENT,
		ElementalSupportCasesActions.CHECK_CASE_PERMISSION,
		ElementalSupportCasesActions.COMPLETE_MULTIPART_UPLOAD,
		ElementalSupportCasesActions.CREATE_CASE,
		ElementalSupportCasesActions.CREATE_S3_CLI_UPLOAD_COMMAND,
		ElementalSupportCasesActions.CREATE_S3_DOWNLOAD_URL,
		ElementalSupportCasesActions.START_MULTIPART_UPLOAD,
		ElementalSupportCasesActions.UPDATE_CASE,
		ElementalSupportCasesActions.UPDATE_CASE_STATUS,
		ElementalSupportCasesActions.UPDATE_MULTIPART_UPLOAD,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ElementalSupportCasesActions.TAG_CASE,
		ElementalSupportCasesActions.UNTAG_CASE,
	];
}

const CaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elemental-support-cases::(?<account>[^:]*):case/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elemental-support-cases resources.
 */
export class ElementalSupportCasesResources {
	/**
	 * Builds an ARN for the case resource.
	 */
	static case(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCaseArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_CASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagCase action. */
	static readonly TAG_CASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagCase action. */
	static readonly UNTAG_CASE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
