// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/security-ir.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the security-ir service.
 */
export class SecurityIrActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "security-ir";

	/** [Read] security-ir:BatchGetMemberAccountDetails */
	static readonly BATCH_GET_MEMBER_ACCOUNT_DETAILS =
		"security-ir:BatchGetMemberAccountDetails";
	/** [Write] security-ir:CancelMembership */
	static readonly CANCEL_MEMBERSHIP = "security-ir:CancelMembership";
	/** [Write] security-ir:CloseCase */
	static readonly CLOSE_CASE = "security-ir:CloseCase";
	/** [Write] security-ir:CreateCase */
	static readonly CREATE_CASE = "security-ir:CreateCase";
	/** [Write] security-ir:CreateCaseComment */
	static readonly CREATE_CASE_COMMENT = "security-ir:CreateCaseComment";
	/** [Write] security-ir:CreateMembership */
	static readonly CREATE_MEMBERSHIP = "security-ir:CreateMembership";
	/** [Read] security-ir:GetCase */
	static readonly GET_CASE = "security-ir:GetCase";
	/** [Read] security-ir:GetCaseAttachmentDownloadUrl */
	static readonly GET_CASE_ATTACHMENT_DOWNLOAD_URL =
		"security-ir:GetCaseAttachmentDownloadUrl";
	/** [Write] security-ir:GetCaseAttachmentUploadUrl */
	static readonly GET_CASE_ATTACHMENT_UPLOAD_URL =
		"security-ir:GetCaseAttachmentUploadUrl";
	/** [Read] security-ir:GetMembership */
	static readonly GET_MEMBERSHIP = "security-ir:GetMembership";
	/** [Read] security-ir:ListCaseEdits */
	static readonly LIST_CASE_EDITS = "security-ir:ListCaseEdits";
	/** [List] security-ir:ListCases */
	static readonly LIST_CASES = "security-ir:ListCases";
	/** [Read] security-ir:ListComments */
	static readonly LIST_COMMENTS = "security-ir:ListComments";
	/** [Read] security-ir:ListInvestigations */
	static readonly LIST_INVESTIGATIONS = "security-ir:ListInvestigations";
	/** [List] security-ir:ListMemberships */
	static readonly LIST_MEMBERSHIPS = "security-ir:ListMemberships";
	/** [Read] security-ir:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "security-ir:ListTagsForResource";
	/** [Write] security-ir:SendFeedback */
	static readonly SEND_FEEDBACK = "security-ir:SendFeedback";
	/** [Tagging] security-ir:TagResource */
	static readonly TAG_RESOURCE = "security-ir:TagResource";
	/** [Tagging] security-ir:UntagResource */
	static readonly UNTAG_RESOURCE = "security-ir:UntagResource";
	/** [Write] security-ir:UpdateCase */
	static readonly UPDATE_CASE = "security-ir:UpdateCase";
	/** [Write] security-ir:UpdateCaseComment */
	static readonly UPDATE_CASE_COMMENT = "security-ir:UpdateCaseComment";
	/** [Write] security-ir:UpdateCaseStatus */
	static readonly UPDATE_CASE_STATUS = "security-ir:UpdateCaseStatus";
	/** [Write] security-ir:UpdateMembership */
	static readonly UPDATE_MEMBERSHIP = "security-ir:UpdateMembership";
	/** [Write] security-ir:UpdateResolverType */
	static readonly UPDATE_RESOLVER_TYPE = "security-ir:UpdateResolverType";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SecurityIrActions.BATCH_GET_MEMBER_ACCOUNT_DETAILS,
		SecurityIrActions.GET_CASE,
		SecurityIrActions.GET_CASE_ATTACHMENT_DOWNLOAD_URL,
		SecurityIrActions.GET_MEMBERSHIP,
		SecurityIrActions.LIST_CASE_EDITS,
		SecurityIrActions.LIST_COMMENTS,
		SecurityIrActions.LIST_INVESTIGATIONS,
		SecurityIrActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SecurityIrActions.CANCEL_MEMBERSHIP,
		SecurityIrActions.CLOSE_CASE,
		SecurityIrActions.CREATE_CASE,
		SecurityIrActions.CREATE_CASE_COMMENT,
		SecurityIrActions.CREATE_MEMBERSHIP,
		SecurityIrActions.GET_CASE_ATTACHMENT_UPLOAD_URL,
		SecurityIrActions.SEND_FEEDBACK,
		SecurityIrActions.UPDATE_CASE,
		SecurityIrActions.UPDATE_CASE_COMMENT,
		SecurityIrActions.UPDATE_CASE_STATUS,
		SecurityIrActions.UPDATE_MEMBERSHIP,
		SecurityIrActions.UPDATE_RESOLVER_TYPE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SecurityIrActions.LIST_CASES,
		SecurityIrActions.LIST_MEMBERSHIPS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SecurityIrActions.TAG_RESOURCE,
		SecurityIrActions.UNTAG_RESOURCE,
	];
}

const CaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):security-ir:(?<region>[^:]*):(?<account>[^:]*):case/(?<caseId>[^:/?]+)$",
);
const MembershipArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):security-ir:(?<region>[^:]*):(?<account>[^:]*):membership/(?<membershipId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for security-ir resources.
 */
export class SecurityIrResources {
	/**
	 * Builds an ARN for the case resource.
	 */
	static case(props: {
		/** The CaseId component of the ARN. */
		readonly caseId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:security-ir:${props.region ?? "*"}:${props.account ?? "*"}:case/${props.caseId}`;
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
		region: string;
		account: string;
		caseId: string;
	} {
		const match = CaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid case ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			caseId: match.groups!.caseId,
		};
	}

	/**
	 * Builds an ARN for the membership resource.
	 */
	static membership(props: {
		/** The MembershipId component of the ARN. */
		readonly membershipId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:security-ir:${props.region ?? "*"}:${props.account ?? "*"}:membership/${props.membershipId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the membership resource.
	 */
	static isValidMembershipArn(arn: string): boolean {
		return MembershipArnRegex.test(arn);
	}

	/**
	 * Parses a membership ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMembershipArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		membershipId: string;
	} {
		const match = MembershipArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid membership ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			membershipId: match.groups!.membershipId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for security-ir.
 */
export class SecurityIrOperations {
	/** IAM actions required for the BatchGetMemberAccountDetails API call. */
	static readonly BATCH_GET_MEMBER_ACCOUNT_DETAILS: string[] = [
		"security-ir:BatchGetMemberAccountDetails",
	];
	/** IAM actions required for the CancelMembership API call. */
	static readonly CANCEL_MEMBERSHIP: string[] = [
		"security-ir:CancelMembership",
	];
	/** IAM actions required for the CloseCase API call. */
	static readonly CLOSE_CASE: string[] = ["security-ir:CloseCase"];
	/** IAM actions required for the CreateCase API call. */
	static readonly CREATE_CASE: string[] = [
		"security-ir:CreateCase",
		"security-ir:TagResource",
	];
	/** IAM actions required for the CreateCaseComment API call. */
	static readonly CREATE_CASE_COMMENT: string[] = [
		"security-ir:CreateCaseComment",
	];
	/** IAM actions required for the CreateMembership API call. */
	static readonly CREATE_MEMBERSHIP: string[] = [
		"security-ir:CreateMembership",
		"security-ir:TagResource",
	];
	/** IAM actions required for the GetCase API call. */
	static readonly GET_CASE: string[] = ["security-ir:GetCase"];
	/** IAM actions required for the GetCaseAttachmentDownloadUrl API call. */
	static readonly GET_CASE_ATTACHMENT_DOWNLOAD_URL: string[] = [
		"security-ir:GetCaseAttachmentDownloadUrl",
	];
	/** IAM actions required for the GetCaseAttachmentUploadUrl API call. */
	static readonly GET_CASE_ATTACHMENT_UPLOAD_URL: string[] = [
		"security-ir:GetCaseAttachmentUploadUrl",
	];
	/** IAM actions required for the GetMembership API call. */
	static readonly GET_MEMBERSHIP: string[] = ["security-ir:GetMembership"];
	/** IAM actions required for the ListCaseEdits API call. */
	static readonly LIST_CASE_EDITS: string[] = ["security-ir:ListCaseEdits"];
	/** IAM actions required for the ListCases API call. */
	static readonly LIST_CASES: string[] = ["security-ir:ListCases"];
	/** IAM actions required for the ListComments API call. */
	static readonly LIST_COMMENTS: string[] = ["security-ir:ListComments"];
	/** IAM actions required for the ListInvestigations API call. */
	static readonly LIST_INVESTIGATIONS: string[] = [
		"security-ir:ListInvestigations",
	];
	/** IAM actions required for the ListMemberships API call. */
	static readonly LIST_MEMBERSHIPS: string[] = ["security-ir:ListMemberships"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"security-ir:ListTagsForResource",
	];
	/** IAM actions required for the SendFeedback API call. */
	static readonly SEND_FEEDBACK: string[] = ["security-ir:SendFeedback"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["security-ir:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["security-ir:UntagResource"];
	/** IAM actions required for the UpdateCase API call. */
	static readonly UPDATE_CASE: string[] = ["security-ir:UpdateCase"];
	/** IAM actions required for the UpdateCaseComment API call. */
	static readonly UPDATE_CASE_COMMENT: string[] = [
		"security-ir:UpdateCaseComment",
	];
	/** IAM actions required for the UpdateCaseStatus API call. */
	static readonly UPDATE_CASE_STATUS: string[] = [
		"security-ir:UpdateCaseStatus",
	];
	/** IAM actions required for the UpdateMembership API call. */
	static readonly UPDATE_MEMBERSHIP: string[] = [
		"security-ir:UpdateMembership",
	];
	/** IAM actions required for the UpdateResolverType API call. */
	static readonly UPDATE_RESOLVER_TYPE: string[] = [
		"security-ir:UpdateResolverType",
	];
}

/**
 * Condition key constants and builders for security-ir.
 */
export class SecurityIrConditions {
	/** Condition keys applicable to the CreateCase action. */
	static readonly CREATE_CASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMembership action. */
	static readonly CREATE_MEMBERSHIP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
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
