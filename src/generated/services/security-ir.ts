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
	static readonly BatchGetMemberAccountDetails =
		"security-ir:BatchGetMemberAccountDetails";
	/** [Write] security-ir:CancelMembership */
	static readonly CancelMembership = "security-ir:CancelMembership";
	/** [Write] security-ir:CloseCase */
	static readonly CloseCase = "security-ir:CloseCase";
	/** [Write] security-ir:CreateCase */
	static readonly CreateCase = "security-ir:CreateCase";
	/** [Write] security-ir:CreateCaseComment */
	static readonly CreateCaseComment = "security-ir:CreateCaseComment";
	/** [Write] security-ir:CreateMembership */
	static readonly CreateMembership = "security-ir:CreateMembership";
	/** [Read] security-ir:GetCase */
	static readonly actionGetCase = "security-ir:GetCase";
	/** [Read] security-ir:GetCaseAttachmentDownloadUrl */
	static readonly actionGetCaseAttachmentDownloadUrl =
		"security-ir:GetCaseAttachmentDownloadUrl";
	/** [Write] security-ir:GetCaseAttachmentUploadUrl */
	static readonly actionGetCaseAttachmentUploadUrl =
		"security-ir:GetCaseAttachmentUploadUrl";
	/** [Read] security-ir:GetMembership */
	static readonly actionGetMembership = "security-ir:GetMembership";
	/** [Read] security-ir:ListCaseEdits */
	static readonly ListCaseEdits = "security-ir:ListCaseEdits";
	/** [List] security-ir:ListCases */
	static readonly ListCases = "security-ir:ListCases";
	/** [Read] security-ir:ListComments */
	static readonly ListComments = "security-ir:ListComments";
	/** [Read] security-ir:ListInvestigations */
	static readonly ListInvestigations = "security-ir:ListInvestigations";
	/** [List] security-ir:ListMemberships */
	static readonly ListMemberships = "security-ir:ListMemberships";
	/** [Read] security-ir:ListTagsForResource */
	static readonly ListTagsForResource = "security-ir:ListTagsForResource";
	/** [Write] security-ir:SendFeedback */
	static readonly SendFeedback = "security-ir:SendFeedback";
	/** [Tagging] security-ir:TagResource */
	static readonly TagResource = "security-ir:TagResource";
	/** [Tagging] security-ir:UntagResource */
	static readonly UntagResource = "security-ir:UntagResource";
	/** [Write] security-ir:UpdateCase */
	static readonly UpdateCase = "security-ir:UpdateCase";
	/** [Write] security-ir:UpdateCaseComment */
	static readonly UpdateCaseComment = "security-ir:UpdateCaseComment";
	/** [Write] security-ir:UpdateCaseStatus */
	static readonly UpdateCaseStatus = "security-ir:UpdateCaseStatus";
	/** [Write] security-ir:UpdateMembership */
	static readonly UpdateMembership = "security-ir:UpdateMembership";
	/** [Write] security-ir:UpdateResolverType */
	static readonly UpdateResolverType = "security-ir:UpdateResolverType";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SecurityIrActions.BatchGetMemberAccountDetails,
		SecurityIrActions.actionGetCase,
		SecurityIrActions.actionGetCaseAttachmentDownloadUrl,
		SecurityIrActions.actionGetMembership,
		SecurityIrActions.ListCaseEdits,
		SecurityIrActions.ListComments,
		SecurityIrActions.ListInvestigations,
		SecurityIrActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SecurityIrActions.CancelMembership,
		SecurityIrActions.CloseCase,
		SecurityIrActions.CreateCase,
		SecurityIrActions.CreateCaseComment,
		SecurityIrActions.CreateMembership,
		SecurityIrActions.actionGetCaseAttachmentUploadUrl,
		SecurityIrActions.SendFeedback,
		SecurityIrActions.UpdateCase,
		SecurityIrActions.UpdateCaseComment,
		SecurityIrActions.UpdateCaseStatus,
		SecurityIrActions.UpdateMembership,
		SecurityIrActions.UpdateResolverType,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SecurityIrActions.ListCases,
		SecurityIrActions.ListMemberships,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SecurityIrActions.TagResource,
		SecurityIrActions.UntagResource,
	];
}

/**
 * Properties for building a case ARN.
 */
export interface SecurityIrCaseArnProps {
	/** The CaseId component of the ARN. */
	readonly caseId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a case ARN.
 */
export interface SecurityIrCaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CaseId component. */
	readonly caseId: string;
}

/**
 * Properties for building a membership ARN.
 */
export interface SecurityIrMembershipArnProps {
	/** The MembershipId component of the ARN. */
	readonly membershipId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a membership ARN.
 */
export interface SecurityIrMembershipArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MembershipId component. */
	readonly membershipId: string;
}

const CaseArnRegex =
	/^arn:(?<partition>[^:]+):security-ir:(?<region>[^:]*):(?<account>[^:]*):case\/(?<caseId>[^:/?]+)$/;
const MembershipArnRegex =
	/^arn:(?<partition>[^:]+):security-ir:(?<region>[^:]*):(?<account>[^:]*):membership\/(?<membershipId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for security-ir resources.
 */
export class SecurityIrResources {
	/**
	 * Builds an ARN for the case resource.
	 */
	static case(props: SecurityIrCaseArnProps): string {
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
	static parseCaseArn(arn: string): SecurityIrCaseArnComponents {
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
	static membership(props: SecurityIrMembershipArnProps): string {
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
	static parseMembershipArn(arn: string): SecurityIrMembershipArnComponents {
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
	static readonly BatchGetMemberAccountDetails: string[] = [
		"security-ir:BatchGetMemberAccountDetails",
	];
	/** IAM actions required for the CancelMembership API call. */
	static readonly CancelMembership: string[] = ["security-ir:CancelMembership"];
	/** IAM actions required for the CloseCase API call. */
	static readonly CloseCase: string[] = ["security-ir:CloseCase"];
	/** IAM actions required for the CreateCase API call. */
	static readonly CreateCase: string[] = [
		"security-ir:CreateCase",
		"security-ir:TagResource",
	];
	/** IAM actions required for the CreateCaseComment API call. */
	static readonly CreateCaseComment: string[] = [
		"security-ir:CreateCaseComment",
	];
	/** IAM actions required for the CreateMembership API call. */
	static readonly CreateMembership: string[] = [
		"security-ir:CreateMembership",
		"security-ir:TagResource",
	];
	/** IAM actions required for the GetCase API call. */
	static readonly opGetCase: string[] = ["security-ir:GetCase"];
	/** IAM actions required for the GetCaseAttachmentDownloadUrl API call. */
	static readonly opGetCaseAttachmentDownloadUrl: string[] = [
		"security-ir:GetCaseAttachmentDownloadUrl",
	];
	/** IAM actions required for the GetCaseAttachmentUploadUrl API call. */
	static readonly opGetCaseAttachmentUploadUrl: string[] = [
		"security-ir:GetCaseAttachmentUploadUrl",
	];
	/** IAM actions required for the GetMembership API call. */
	static readonly opGetMembership: string[] = ["security-ir:GetMembership"];
	/** IAM actions required for the ListCaseEdits API call. */
	static readonly ListCaseEdits: string[] = ["security-ir:ListCaseEdits"];
	/** IAM actions required for the ListCases API call. */
	static readonly ListCases: string[] = ["security-ir:ListCases"];
	/** IAM actions required for the ListComments API call. */
	static readonly ListComments: string[] = ["security-ir:ListComments"];
	/** IAM actions required for the ListInvestigations API call. */
	static readonly ListInvestigations: string[] = [
		"security-ir:ListInvestigations",
	];
	/** IAM actions required for the ListMemberships API call. */
	static readonly ListMemberships: string[] = ["security-ir:ListMemberships"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"security-ir:ListTagsForResource",
	];
	/** IAM actions required for the SendFeedback API call. */
	static readonly SendFeedback: string[] = ["security-ir:SendFeedback"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["security-ir:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["security-ir:UntagResource"];
	/** IAM actions required for the UpdateCase API call. */
	static readonly UpdateCase: string[] = ["security-ir:UpdateCase"];
	/** IAM actions required for the UpdateCaseComment API call. */
	static readonly UpdateCaseComment: string[] = [
		"security-ir:UpdateCaseComment",
	];
	/** IAM actions required for the UpdateCaseStatus API call. */
	static readonly UpdateCaseStatus: string[] = ["security-ir:UpdateCaseStatus"];
	/** IAM actions required for the UpdateMembership API call. */
	static readonly UpdateMembership: string[] = ["security-ir:UpdateMembership"];
	/** IAM actions required for the UpdateResolverType API call. */
	static readonly UpdateResolverType: string[] = [
		"security-ir:UpdateResolverType",
	];
}

/**
 * Condition key constants and builders for security-ir.
 */
export class SecurityIrConditions {
	/** Condition keys applicable to the CreateCase action. */
	static readonly CreateCaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMembership action. */
	static readonly CreateMembershipConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

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
