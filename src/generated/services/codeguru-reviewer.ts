// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codeguru-reviewer.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codeguru-reviewer service.
 */
export class CodeguruReviewerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codeguru-reviewer";

	/** [Write] codeguru-reviewer:AssociateRepository */
	static readonly AssociateRepository = "codeguru-reviewer:AssociateRepository";
	/** [Write] codeguru-reviewer:CreateCodeReview */
	static readonly CreateCodeReview = "codeguru-reviewer:CreateCodeReview";
	/** [Read] codeguru-reviewer:CreateConnectionToken */
	static readonly CreateConnectionToken =
		"codeguru-reviewer:CreateConnectionToken";
	/** [Read] codeguru-reviewer:DescribeCodeReview */
	static readonly DescribeCodeReview = "codeguru-reviewer:DescribeCodeReview";
	/** [Read] codeguru-reviewer:DescribeRecommendationFeedback */
	static readonly DescribeRecommendationFeedback =
		"codeguru-reviewer:DescribeRecommendationFeedback";
	/** [Read] codeguru-reviewer:DescribeRepositoryAssociation */
	static readonly DescribeRepositoryAssociation =
		"codeguru-reviewer:DescribeRepositoryAssociation";
	/** [Write] codeguru-reviewer:DisassociateRepository */
	static readonly DisassociateRepository =
		"codeguru-reviewer:DisassociateRepository";
	/** [Read] codeguru-reviewer:GetMetricsData */
	static readonly actionGetMetricsData = "codeguru-reviewer:GetMetricsData";
	/** [List] codeguru-reviewer:ListCodeReviews */
	static readonly ListCodeReviews = "codeguru-reviewer:ListCodeReviews";
	/** [List] codeguru-reviewer:ListRecommendationFeedback */
	static readonly ListRecommendationFeedback =
		"codeguru-reviewer:ListRecommendationFeedback";
	/** [List] codeguru-reviewer:ListRecommendations */
	static readonly ListRecommendations = "codeguru-reviewer:ListRecommendations";
	/** [List] codeguru-reviewer:ListRepositoryAssociations */
	static readonly ListRepositoryAssociations =
		"codeguru-reviewer:ListRepositoryAssociations";
	/** [List] codeguru-reviewer:ListTagsForResource */
	static readonly ListTagsForResource = "codeguru-reviewer:ListTagsForResource";
	/** [Read] codeguru-reviewer:ListThirdPartyRepositories */
	static readonly ListThirdPartyRepositories =
		"codeguru-reviewer:ListThirdPartyRepositories";
	/** [Write] codeguru-reviewer:PutRecommendationFeedback */
	static readonly PutRecommendationFeedback =
		"codeguru-reviewer:PutRecommendationFeedback";
	/** [Tagging] codeguru-reviewer:TagResource */
	static readonly TagResource = "codeguru-reviewer:TagResource";
	/** [Tagging] codeguru-reviewer:UnTagResource */
	static readonly UnTagResource = "codeguru-reviewer:UnTagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeguruReviewerActions.CreateConnectionToken,
		CodeguruReviewerActions.DescribeCodeReview,
		CodeguruReviewerActions.DescribeRecommendationFeedback,
		CodeguruReviewerActions.DescribeRepositoryAssociation,
		CodeguruReviewerActions.actionGetMetricsData,
		CodeguruReviewerActions.ListThirdPartyRepositories,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeguruReviewerActions.AssociateRepository,
		CodeguruReviewerActions.CreateCodeReview,
		CodeguruReviewerActions.DisassociateRepository,
		CodeguruReviewerActions.PutRecommendationFeedback,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeguruReviewerActions.ListCodeReviews,
		CodeguruReviewerActions.ListRecommendationFeedback,
		CodeguruReviewerActions.ListRecommendations,
		CodeguruReviewerActions.ListRepositoryAssociations,
		CodeguruReviewerActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeguruReviewerActions.TagResource,
		CodeguruReviewerActions.UnTagResource,
	];
}

/**
 * Properties for building a association ARN.
 */
export interface CodeguruReviewerAssociationArnProps {
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
 * Parsed components of a association ARN.
 */
export interface CodeguruReviewerAssociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

/**
 * Properties for building a codereview ARN.
 */
export interface CodeguruReviewerCodereviewArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** The CodeReviewId component of the ARN. */
	readonly codeReviewId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a codereview ARN.
 */
export interface CodeguruReviewerCodereviewArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
	/** The CodeReviewId component. */
	readonly codeReviewId: string;
}

const AssociationArnRegex =
	/^arn:(?<partition>[^:]+):codeguru-reviewer:(?<region>[^:]*):(?<account>[^:]*):association:(?<resourceId>[^:/?]+)$/;
const CodereviewArnRegex =
	/^arn:(?<partition>[^:]+):codeguru-reviewer:(?<region>[^:]*):(?<account>[^:]*):association:(?<resourceId>[^:/?]+):codereview:(?<codeReviewId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codeguru-reviewer resources.
 */
export class CodeguruReviewerResources {
	/**
	 * Builds an ARN for the association resource.
	 */
	static association(props: CodeguruReviewerAssociationArnProps): string {
		return `arn:${props.partition ?? "aws"}:codeguru-reviewer:${props.region ?? "*"}:${props.account ?? "*"}:association:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the association resource.
	 */
	static isValidAssociationArn(arn: string): boolean {
		return AssociationArnRegex.test(arn);
	}

	/**
	 * Parses a association ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssociationArn(
		arn: string,
	): CodeguruReviewerAssociationArnComponents {
		const match = AssociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid association ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}

	/**
	 * Builds an ARN for the codereview resource.
	 */
	static codereview(props: CodeguruReviewerCodereviewArnProps): string {
		return `arn:${props.partition ?? "aws"}:codeguru-reviewer:${props.region ?? "*"}:${props.account ?? "*"}:association:${props.resourceId}:codereview:${props.codeReviewId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the codereview resource.
	 */
	static isValidCodereviewArn(arn: string): boolean {
		return CodereviewArnRegex.test(arn);
	}

	/**
	 * Parses a codereview ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodereviewArn(
		arn: string,
	): CodeguruReviewerCodereviewArnComponents {
		const match = CodereviewArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid codereview ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
			codeReviewId: match.groups!.codeReviewId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codeguru-reviewer.
 */
export class CodeguruReviewerOperations {
	/** IAM actions required for the AssociateRepository API call. */
	static readonly AssociateRepository: string[] = [
		"codeguru-reviewer:AssociateRepository",
		"codeguru-reviewer:TagResource",
	];
	/** IAM actions required for the CreateCodeReview API call. */
	static readonly CreateCodeReview: string[] = [
		"codeguru-reviewer:CreateCodeReview",
	];
	/** IAM actions required for the DescribeCodeReview API call. */
	static readonly DescribeCodeReview: string[] = [
		"codeguru-reviewer:DescribeCodeReview",
	];
	/** IAM actions required for the DescribeRecommendationFeedback API call. */
	static readonly DescribeRecommendationFeedback: string[] = [
		"codeguru-reviewer:DescribeRecommendationFeedback",
	];
	/** IAM actions required for the DescribeRepositoryAssociation API call. */
	static readonly DescribeRepositoryAssociation: string[] = [
		"codeguru-reviewer:DescribeRepositoryAssociation",
	];
	/** IAM actions required for the DisassociateRepository API call. */
	static readonly DisassociateRepository: string[] = [
		"codeguru-reviewer:DisassociateRepository",
	];
	/** IAM actions required for the ListCodeReviews API call. */
	static readonly ListCodeReviews: string[] = [
		"codeguru-reviewer:ListCodeReviews",
	];
	/** IAM actions required for the ListRecommendationFeedback API call. */
	static readonly ListRecommendationFeedback: string[] = [
		"codeguru-reviewer:ListRecommendationFeedback",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly ListRecommendations: string[] = [
		"codeguru-reviewer:ListRecommendations",
	];
	/** IAM actions required for the ListRepositoryAssociations API call. */
	static readonly ListRepositoryAssociations: string[] = [
		"codeguru-reviewer:ListRepositoryAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codeguru-reviewer:ListTagsForResource",
	];
	/** IAM actions required for the PutRecommendationFeedback API call. */
	static readonly PutRecommendationFeedback: string[] = [
		"codeguru-reviewer:PutRecommendationFeedback",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["codeguru-reviewer:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["codeguru-reviewer:UnTagResource"];
}

/**
 * Condition key constants and builders for codeguru-reviewer.
 */
export class CodeguruReviewerConditions {
	/** Condition keys applicable to the AssociateRepository action. */
	static readonly AssociateRepositoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeReview action. */
	static readonly CreateCodeReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCodeReview action. */
	static readonly DescribeCodeReviewConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeRecommendationFeedback action. */
	static readonly DescribeRecommendationFeedbackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeRepositoryAssociation action. */
	static readonly DescribeRepositoryAssociationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateRepository action. */
	static readonly DisassociateRepositoryConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRecommendationFeedback action. */
	static readonly ListRecommendationFeedbackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRecommendations action. */
	static readonly ListRecommendationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutRecommendationFeedback action. */
	static readonly PutRecommendationFeedbackConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnTagResource action. */
	static readonly UnTagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
