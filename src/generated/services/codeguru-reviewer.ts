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
	static readonly ASSOCIATE_REPOSITORY =
		"codeguru-reviewer:AssociateRepository";
	/** [Write] codeguru-reviewer:CreateCodeReview */
	static readonly CREATE_CODE_REVIEW = "codeguru-reviewer:CreateCodeReview";
	/** [Read] codeguru-reviewer:CreateConnectionToken */
	static readonly CREATE_CONNECTION_TOKEN =
		"codeguru-reviewer:CreateConnectionToken";
	/** [Read] codeguru-reviewer:DescribeCodeReview */
	static readonly DESCRIBE_CODE_REVIEW = "codeguru-reviewer:DescribeCodeReview";
	/** [Read] codeguru-reviewer:DescribeRecommendationFeedback */
	static readonly DESCRIBE_RECOMMENDATION_FEEDBACK =
		"codeguru-reviewer:DescribeRecommendationFeedback";
	/** [Read] codeguru-reviewer:DescribeRepositoryAssociation */
	static readonly DESCRIBE_REPOSITORY_ASSOCIATION =
		"codeguru-reviewer:DescribeRepositoryAssociation";
	/** [Write] codeguru-reviewer:DisassociateRepository */
	static readonly DISASSOCIATE_REPOSITORY =
		"codeguru-reviewer:DisassociateRepository";
	/** [Read] codeguru-reviewer:GetMetricsData */
	static readonly GET_METRICS_DATA = "codeguru-reviewer:GetMetricsData";
	/** [List] codeguru-reviewer:ListCodeReviews */
	static readonly LIST_CODE_REVIEWS = "codeguru-reviewer:ListCodeReviews";
	/** [List] codeguru-reviewer:ListRecommendationFeedback */
	static readonly LIST_RECOMMENDATION_FEEDBACK =
		"codeguru-reviewer:ListRecommendationFeedback";
	/** [List] codeguru-reviewer:ListRecommendations */
	static readonly LIST_RECOMMENDATIONS =
		"codeguru-reviewer:ListRecommendations";
	/** [List] codeguru-reviewer:ListRepositoryAssociations */
	static readonly LIST_REPOSITORY_ASSOCIATIONS =
		"codeguru-reviewer:ListRepositoryAssociations";
	/** [List] codeguru-reviewer:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"codeguru-reviewer:ListTagsForResource";
	/** [Read] codeguru-reviewer:ListThirdPartyRepositories */
	static readonly LIST_THIRD_PARTY_REPOSITORIES =
		"codeguru-reviewer:ListThirdPartyRepositories";
	/** [Write] codeguru-reviewer:PutRecommendationFeedback */
	static readonly PUT_RECOMMENDATION_FEEDBACK =
		"codeguru-reviewer:PutRecommendationFeedback";
	/** [Tagging] codeguru-reviewer:TagResource */
	static readonly TAG_RESOURCE = "codeguru-reviewer:TagResource";
	/** [Tagging] codeguru-reviewer:UnTagResource */
	static readonly UN_TAG_RESOURCE = "codeguru-reviewer:UnTagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeguruReviewerActions.CREATE_CONNECTION_TOKEN,
		CodeguruReviewerActions.DESCRIBE_CODE_REVIEW,
		CodeguruReviewerActions.DESCRIBE_RECOMMENDATION_FEEDBACK,
		CodeguruReviewerActions.DESCRIBE_REPOSITORY_ASSOCIATION,
		CodeguruReviewerActions.GET_METRICS_DATA,
		CodeguruReviewerActions.LIST_THIRD_PARTY_REPOSITORIES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeguruReviewerActions.ASSOCIATE_REPOSITORY,
		CodeguruReviewerActions.CREATE_CODE_REVIEW,
		CodeguruReviewerActions.DISASSOCIATE_REPOSITORY,
		CodeguruReviewerActions.PUT_RECOMMENDATION_FEEDBACK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeguruReviewerActions.LIST_CODE_REVIEWS,
		CodeguruReviewerActions.LIST_RECOMMENDATION_FEEDBACK,
		CodeguruReviewerActions.LIST_RECOMMENDATIONS,
		CodeguruReviewerActions.LIST_REPOSITORY_ASSOCIATIONS,
		CodeguruReviewerActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeguruReviewerActions.TAG_RESOURCE,
		CodeguruReviewerActions.UN_TAG_RESOURCE,
	];
}

const AssociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeguru-reviewer:(?<region>[^:]*):(?<account>[^:]*):association:(?<resourceId>[^:/?]+)$",
);
const CodereviewArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codeguru-reviewer:(?<region>[^:]*):(?<account>[^:]*):association:(?<resourceId>[^:/?]+):codereview:(?<codeReviewId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codeguru-reviewer resources.
 */
export class CodeguruReviewerResources {
	/**
	 * Builds an ARN for the association resource.
	 */
	static association(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAssociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static codereview(props: {
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
	}): string {
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
	static parseCodereviewArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
		codeReviewId: string;
	} {
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
	static readonly ASSOCIATE_REPOSITORY: string[] = [
		"codeguru-reviewer:AssociateRepository",
		"codeguru-reviewer:TagResource",
	];
	/** IAM actions required for the CreateCodeReview API call. */
	static readonly CREATE_CODE_REVIEW: string[] = [
		"codeguru-reviewer:CreateCodeReview",
	];
	/** IAM actions required for the DescribeCodeReview API call. */
	static readonly DESCRIBE_CODE_REVIEW: string[] = [
		"codeguru-reviewer:DescribeCodeReview",
	];
	/** IAM actions required for the DescribeRecommendationFeedback API call. */
	static readonly DESCRIBE_RECOMMENDATION_FEEDBACK: string[] = [
		"codeguru-reviewer:DescribeRecommendationFeedback",
	];
	/** IAM actions required for the DescribeRepositoryAssociation API call. */
	static readonly DESCRIBE_REPOSITORY_ASSOCIATION: string[] = [
		"codeguru-reviewer:DescribeRepositoryAssociation",
	];
	/** IAM actions required for the DisassociateRepository API call. */
	static readonly DISASSOCIATE_REPOSITORY: string[] = [
		"codeguru-reviewer:DisassociateRepository",
	];
	/** IAM actions required for the ListCodeReviews API call. */
	static readonly LIST_CODE_REVIEWS: string[] = [
		"codeguru-reviewer:ListCodeReviews",
	];
	/** IAM actions required for the ListRecommendationFeedback API call. */
	static readonly LIST_RECOMMENDATION_FEEDBACK: string[] = [
		"codeguru-reviewer:ListRecommendationFeedback",
	];
	/** IAM actions required for the ListRecommendations API call. */
	static readonly LIST_RECOMMENDATIONS: string[] = [
		"codeguru-reviewer:ListRecommendations",
	];
	/** IAM actions required for the ListRepositoryAssociations API call. */
	static readonly LIST_REPOSITORY_ASSOCIATIONS: string[] = [
		"codeguru-reviewer:ListRepositoryAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codeguru-reviewer:ListTagsForResource",
	];
	/** IAM actions required for the PutRecommendationFeedback API call. */
	static readonly PUT_RECOMMENDATION_FEEDBACK: string[] = [
		"codeguru-reviewer:PutRecommendationFeedback",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["codeguru-reviewer:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"codeguru-reviewer:UnTagResource",
	];
}

/**
 * Condition key constants and builders for codeguru-reviewer.
 */
export class CodeguruReviewerConditions {
	/** Condition keys applicable to the AssociateRepository action. */
	static readonly ASSOCIATE_REPOSITORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCodeReview action. */
	static readonly CREATE_CODE_REVIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeCodeReview action. */
	static readonly DESCRIBE_CODE_REVIEW_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeRecommendationFeedback action. */
	static readonly DESCRIBE_RECOMMENDATION_FEEDBACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DescribeRepositoryAssociation action. */
	static readonly DESCRIBE_REPOSITORY_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DisassociateRepository action. */
	static readonly DISASSOCIATE_REPOSITORY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRecommendationFeedback action. */
	static readonly LIST_RECOMMENDATION_FEEDBACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListRecommendations action. */
	static readonly LIST_RECOMMENDATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutRecommendationFeedback action. */
	static readonly PUT_RECOMMENDATION_FEEDBACK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UnTagResource action. */
	static readonly UN_TAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
