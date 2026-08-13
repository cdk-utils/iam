// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/codecommit.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the codecommit service.
 */
export class CodeCommitActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "codecommit";

	/** [Write] codecommit:AssociateApprovalRuleTemplateWithRepository */
	static readonly ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY =
		"codecommit:AssociateApprovalRuleTemplateWithRepository";
	/** [Write] codecommit:BatchAssociateApprovalRuleTemplateWithRepositories */
	static readonly BATCH_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORIES =
		"codecommit:BatchAssociateApprovalRuleTemplateWithRepositories";
	/** [Read] codecommit:BatchDescribeMergeConflicts */
	static readonly BATCH_DESCRIBE_MERGE_CONFLICTS =
		"codecommit:BatchDescribeMergeConflicts";
	/** [Write] codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories */
	static readonly BATCH_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORIES =
		"codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories";
	/** [Read] codecommit:BatchGetCommits */
	static readonly BATCH_GET_COMMITS = "codecommit:BatchGetCommits";
	/** [Read] codecommit:BatchGetPullRequests */
	static readonly BATCH_GET_PULL_REQUESTS = "codecommit:BatchGetPullRequests";
	/** [Read] codecommit:BatchGetRepositories */
	static readonly BATCH_GET_REPOSITORIES = "codecommit:BatchGetRepositories";
	/** [Read] codecommit:CancelUploadArchive */
	static readonly CANCEL_UPLOAD_ARCHIVE = "codecommit:CancelUploadArchive";
	/** [Write] codecommit:CreateApprovalRuleTemplate */
	static readonly CREATE_APPROVAL_RULE_TEMPLATE =
		"codecommit:CreateApprovalRuleTemplate";
	/** [Write] codecommit:CreateBranch */
	static readonly CREATE_BRANCH = "codecommit:CreateBranch";
	/** [Write] codecommit:CreateCommit */
	static readonly CREATE_COMMIT = "codecommit:CreateCommit";
	/** [Write] codecommit:CreatePullRequest */
	static readonly CREATE_PULL_REQUEST = "codecommit:CreatePullRequest";
	/** [Write] codecommit:CreatePullRequestApprovalRule */
	static readonly CREATE_PULL_REQUEST_APPROVAL_RULE =
		"codecommit:CreatePullRequestApprovalRule";
	/** [Write] codecommit:CreateRepository */
	static readonly CREATE_REPOSITORY = "codecommit:CreateRepository";
	/** [Write] codecommit:CreateUnreferencedMergeCommit */
	static readonly CREATE_UNREFERENCED_MERGE_COMMIT =
		"codecommit:CreateUnreferencedMergeCommit";
	/** [Write] codecommit:DeleteApprovalRuleTemplate */
	static readonly DELETE_APPROVAL_RULE_TEMPLATE =
		"codecommit:DeleteApprovalRuleTemplate";
	/** [Write] codecommit:DeleteBranch */
	static readonly DELETE_BRANCH = "codecommit:DeleteBranch";
	/** [Write] codecommit:DeleteCommentContent */
	static readonly DELETE_COMMENT_CONTENT = "codecommit:DeleteCommentContent";
	/** [Write] codecommit:DeleteFile */
	static readonly DELETE_FILE = "codecommit:DeleteFile";
	/** [Write] codecommit:DeletePullRequestApprovalRule */
	static readonly DELETE_PULL_REQUEST_APPROVAL_RULE =
		"codecommit:DeletePullRequestApprovalRule";
	/** [Write] codecommit:DeleteRepository */
	static readonly DELETE_REPOSITORY = "codecommit:DeleteRepository";
	/** [Read] codecommit:DescribeMergeConflicts */
	static readonly DESCRIBE_MERGE_CONFLICTS =
		"codecommit:DescribeMergeConflicts";
	/** [Read] codecommit:DescribePullRequestEvents */
	static readonly DESCRIBE_PULL_REQUEST_EVENTS =
		"codecommit:DescribePullRequestEvents";
	/** [Write] codecommit:DisassociateApprovalRuleTemplateFromRepository */
	static readonly DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORY =
		"codecommit:DisassociateApprovalRuleTemplateFromRepository";
	/** [Read] codecommit:EvaluatePullRequestApprovalRules */
	static readonly EVALUATE_PULL_REQUEST_APPROVAL_RULES =
		"codecommit:EvaluatePullRequestApprovalRules";
	/** [Read] codecommit:GetApprovalRuleTemplate */
	static readonly GET_APPROVAL_RULE_TEMPLATE =
		"codecommit:GetApprovalRuleTemplate";
	/** [Read] codecommit:GetBlob */
	static readonly GET_BLOB = "codecommit:GetBlob";
	/** [Read] codecommit:GetBranch */
	static readonly GET_BRANCH = "codecommit:GetBranch";
	/** [Read] codecommit:GetComment */
	static readonly GET_COMMENT = "codecommit:GetComment";
	/** [Read] codecommit:GetCommentReactions */
	static readonly GET_COMMENT_REACTIONS = "codecommit:GetCommentReactions";
	/** [Read] codecommit:GetCommentsForComparedCommit */
	static readonly GET_COMMENTS_FOR_COMPARED_COMMIT =
		"codecommit:GetCommentsForComparedCommit";
	/** [Read] codecommit:GetCommentsForPullRequest */
	static readonly GET_COMMENTS_FOR_PULL_REQUEST =
		"codecommit:GetCommentsForPullRequest";
	/** [Read] codecommit:GetCommit */
	static readonly GET_COMMIT = "codecommit:GetCommit";
	/** [Read] codecommit:GetCommitHistory */
	static readonly GET_COMMIT_HISTORY = "codecommit:GetCommitHistory";
	/** [Read] codecommit:GetCommitsFromMergeBase */
	static readonly GET_COMMITS_FROM_MERGE_BASE =
		"codecommit:GetCommitsFromMergeBase";
	/** [Read] codecommit:GetDifferences */
	static readonly GET_DIFFERENCES = "codecommit:GetDifferences";
	/** [Read] codecommit:GetFile */
	static readonly GET_FILE = "codecommit:GetFile";
	/** [Read] codecommit:GetFolder */
	static readonly GET_FOLDER = "codecommit:GetFolder";
	/** [Read] codecommit:GetMergeCommit */
	static readonly GET_MERGE_COMMIT = "codecommit:GetMergeCommit";
	/** [Read] codecommit:GetMergeConflicts */
	static readonly GET_MERGE_CONFLICTS = "codecommit:GetMergeConflicts";
	/** [Read] codecommit:GetMergeOptions */
	static readonly GET_MERGE_OPTIONS = "codecommit:GetMergeOptions";
	/** [Read] codecommit:GetObjectIdentifier */
	static readonly GET_OBJECT_IDENTIFIER = "codecommit:GetObjectIdentifier";
	/** [Read] codecommit:GetPullRequest */
	static readonly GET_PULL_REQUEST = "codecommit:GetPullRequest";
	/** [Read] codecommit:GetPullRequestApprovalStates */
	static readonly GET_PULL_REQUEST_APPROVAL_STATES =
		"codecommit:GetPullRequestApprovalStates";
	/** [Read] codecommit:GetPullRequestOverrideState */
	static readonly GET_PULL_REQUEST_OVERRIDE_STATE =
		"codecommit:GetPullRequestOverrideState";
	/** [Read] codecommit:GetReferences */
	static readonly GET_REFERENCES = "codecommit:GetReferences";
	/** [Read] codecommit:GetRepository */
	static readonly GET_REPOSITORY = "codecommit:GetRepository";
	/** [Read] codecommit:GetRepositoryTriggers */
	static readonly GET_REPOSITORY_TRIGGERS = "codecommit:GetRepositoryTriggers";
	/** [Read] codecommit:GetTree */
	static readonly GET_TREE = "codecommit:GetTree";
	/** [Read] codecommit:GetUploadArchiveStatus */
	static readonly GET_UPLOAD_ARCHIVE_STATUS =
		"codecommit:GetUploadArchiveStatus";
	/** [Read] codecommit:GitPull */
	static readonly GIT_PULL = "codecommit:GitPull";
	/** [Write] codecommit:GitPush */
	static readonly GIT_PUSH = "codecommit:GitPush";
	/** [List] codecommit:ListApprovalRuleTemplates */
	static readonly LIST_APPROVAL_RULE_TEMPLATES =
		"codecommit:ListApprovalRuleTemplates";
	/** [List] codecommit:ListAssociatedApprovalRuleTemplatesForRepository */
	static readonly LIST_ASSOCIATED_APPROVAL_RULE_TEMPLATES_FOR_REPOSITORY =
		"codecommit:ListAssociatedApprovalRuleTemplatesForRepository";
	/** [List] codecommit:ListBranches */
	static readonly LIST_BRANCHES = "codecommit:ListBranches";
	/** [List] codecommit:ListFileCommitHistory */
	static readonly LIST_FILE_COMMIT_HISTORY = "codecommit:ListFileCommitHistory";
	/** [List] codecommit:ListPullRequests */
	static readonly LIST_PULL_REQUESTS = "codecommit:ListPullRequests";
	/** [List] codecommit:ListRepositories */
	static readonly LIST_REPOSITORIES = "codecommit:ListRepositories";
	/** [List] codecommit:ListRepositoriesForApprovalRuleTemplate */
	static readonly LIST_REPOSITORIES_FOR_APPROVAL_RULE_TEMPLATE =
		"codecommit:ListRepositoriesForApprovalRuleTemplate";
	/** [List] codecommit:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "codecommit:ListTagsForResource";
	/** [Write] codecommit:MergeBranchesByFastForward */
	static readonly MERGE_BRANCHES_BY_FAST_FORWARD =
		"codecommit:MergeBranchesByFastForward";
	/** [Write] codecommit:MergeBranchesBySquash */
	static readonly MERGE_BRANCHES_BY_SQUASH = "codecommit:MergeBranchesBySquash";
	/** [Write] codecommit:MergeBranchesByThreeWay */
	static readonly MERGE_BRANCHES_BY_THREE_WAY =
		"codecommit:MergeBranchesByThreeWay";
	/** [Write] codecommit:MergePullRequestByFastForward */
	static readonly MERGE_PULL_REQUEST_BY_FAST_FORWARD =
		"codecommit:MergePullRequestByFastForward";
	/** [Write] codecommit:MergePullRequestBySquash */
	static readonly MERGE_PULL_REQUEST_BY_SQUASH =
		"codecommit:MergePullRequestBySquash";
	/** [Write] codecommit:MergePullRequestByThreeWay */
	static readonly MERGE_PULL_REQUEST_BY_THREE_WAY =
		"codecommit:MergePullRequestByThreeWay";
	/** [Write] codecommit:OverridePullRequestApprovalRules */
	static readonly OVERRIDE_PULL_REQUEST_APPROVAL_RULES =
		"codecommit:OverridePullRequestApprovalRules";
	/** [Write] codecommit:PostCommentForComparedCommit */
	static readonly POST_COMMENT_FOR_COMPARED_COMMIT =
		"codecommit:PostCommentForComparedCommit";
	/** [Write] codecommit:PostCommentForPullRequest */
	static readonly POST_COMMENT_FOR_PULL_REQUEST =
		"codecommit:PostCommentForPullRequest";
	/** [Write] codecommit:PostCommentReply */
	static readonly POST_COMMENT_REPLY = "codecommit:PostCommentReply";
	/** [Write] codecommit:PutCommentReaction */
	static readonly PUT_COMMENT_REACTION = "codecommit:PutCommentReaction";
	/** [Write] codecommit:PutFile */
	static readonly PUT_FILE = "codecommit:PutFile";
	/** [Write] codecommit:PutRepositoryTriggers */
	static readonly PUT_REPOSITORY_TRIGGERS = "codecommit:PutRepositoryTriggers";
	/** [Tagging] codecommit:TagResource */
	static readonly TAG_RESOURCE = "codecommit:TagResource";
	/** [Write] codecommit:TestRepositoryTriggers */
	static readonly TEST_REPOSITORY_TRIGGERS =
		"codecommit:TestRepositoryTriggers";
	/** [Tagging] codecommit:UntagResource */
	static readonly UNTAG_RESOURCE = "codecommit:UntagResource";
	/** [Write] codecommit:UpdateApprovalRuleTemplateContent */
	static readonly UPDATE_APPROVAL_RULE_TEMPLATE_CONTENT =
		"codecommit:UpdateApprovalRuleTemplateContent";
	/** [Write] codecommit:UpdateApprovalRuleTemplateDescription */
	static readonly UPDATE_APPROVAL_RULE_TEMPLATE_DESCRIPTION =
		"codecommit:UpdateApprovalRuleTemplateDescription";
	/** [Write] codecommit:UpdateApprovalRuleTemplateName */
	static readonly UPDATE_APPROVAL_RULE_TEMPLATE_NAME =
		"codecommit:UpdateApprovalRuleTemplateName";
	/** [Write] codecommit:UpdateComment */
	static readonly UPDATE_COMMENT = "codecommit:UpdateComment";
	/** [Write] codecommit:UpdateDefaultBranch */
	static readonly UPDATE_DEFAULT_BRANCH = "codecommit:UpdateDefaultBranch";
	/** [Write] codecommit:UpdatePullRequestApprovalRuleContent */
	static readonly UPDATE_PULL_REQUEST_APPROVAL_RULE_CONTENT =
		"codecommit:UpdatePullRequestApprovalRuleContent";
	/** [Write] codecommit:UpdatePullRequestApprovalState */
	static readonly UPDATE_PULL_REQUEST_APPROVAL_STATE =
		"codecommit:UpdatePullRequestApprovalState";
	/** [Write] codecommit:UpdatePullRequestDescription */
	static readonly UPDATE_PULL_REQUEST_DESCRIPTION =
		"codecommit:UpdatePullRequestDescription";
	/** [Write] codecommit:UpdatePullRequestStatus */
	static readonly UPDATE_PULL_REQUEST_STATUS =
		"codecommit:UpdatePullRequestStatus";
	/** [Write] codecommit:UpdatePullRequestTitle */
	static readonly UPDATE_PULL_REQUEST_TITLE =
		"codecommit:UpdatePullRequestTitle";
	/** [Write] codecommit:UpdateRepositoryDescription */
	static readonly UPDATE_REPOSITORY_DESCRIPTION =
		"codecommit:UpdateRepositoryDescription";
	/** [Write] codecommit:UpdateRepositoryEncryptionKey */
	static readonly UPDATE_REPOSITORY_ENCRYPTION_KEY =
		"codecommit:UpdateRepositoryEncryptionKey";
	/** [Write] codecommit:UpdateRepositoryName */
	static readonly UPDATE_REPOSITORY_NAME = "codecommit:UpdateRepositoryName";
	/** [Write] codecommit:UploadArchive */
	static readonly UPLOAD_ARCHIVE = "codecommit:UploadArchive";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CodeCommitActions.BATCH_DESCRIBE_MERGE_CONFLICTS,
		CodeCommitActions.BATCH_GET_COMMITS,
		CodeCommitActions.BATCH_GET_PULL_REQUESTS,
		CodeCommitActions.BATCH_GET_REPOSITORIES,
		CodeCommitActions.CANCEL_UPLOAD_ARCHIVE,
		CodeCommitActions.DESCRIBE_MERGE_CONFLICTS,
		CodeCommitActions.DESCRIBE_PULL_REQUEST_EVENTS,
		CodeCommitActions.EVALUATE_PULL_REQUEST_APPROVAL_RULES,
		CodeCommitActions.GET_APPROVAL_RULE_TEMPLATE,
		CodeCommitActions.GET_BLOB,
		CodeCommitActions.GET_BRANCH,
		CodeCommitActions.GET_COMMENT,
		CodeCommitActions.GET_COMMENT_REACTIONS,
		CodeCommitActions.GET_COMMENTS_FOR_COMPARED_COMMIT,
		CodeCommitActions.GET_COMMENTS_FOR_PULL_REQUEST,
		CodeCommitActions.GET_COMMIT,
		CodeCommitActions.GET_COMMIT_HISTORY,
		CodeCommitActions.GET_COMMITS_FROM_MERGE_BASE,
		CodeCommitActions.GET_DIFFERENCES,
		CodeCommitActions.GET_FILE,
		CodeCommitActions.GET_FOLDER,
		CodeCommitActions.GET_MERGE_COMMIT,
		CodeCommitActions.GET_MERGE_CONFLICTS,
		CodeCommitActions.GET_MERGE_OPTIONS,
		CodeCommitActions.GET_OBJECT_IDENTIFIER,
		CodeCommitActions.GET_PULL_REQUEST,
		CodeCommitActions.GET_PULL_REQUEST_APPROVAL_STATES,
		CodeCommitActions.GET_PULL_REQUEST_OVERRIDE_STATE,
		CodeCommitActions.GET_REFERENCES,
		CodeCommitActions.GET_REPOSITORY,
		CodeCommitActions.GET_REPOSITORY_TRIGGERS,
		CodeCommitActions.GET_TREE,
		CodeCommitActions.GET_UPLOAD_ARCHIVE_STATUS,
		CodeCommitActions.GIT_PULL,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CodeCommitActions.ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY,
		CodeCommitActions.BATCH_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORIES,
		CodeCommitActions.BATCH_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORIES,
		CodeCommitActions.CREATE_APPROVAL_RULE_TEMPLATE,
		CodeCommitActions.CREATE_BRANCH,
		CodeCommitActions.CREATE_COMMIT,
		CodeCommitActions.CREATE_PULL_REQUEST,
		CodeCommitActions.CREATE_PULL_REQUEST_APPROVAL_RULE,
		CodeCommitActions.CREATE_REPOSITORY,
		CodeCommitActions.CREATE_UNREFERENCED_MERGE_COMMIT,
		CodeCommitActions.DELETE_APPROVAL_RULE_TEMPLATE,
		CodeCommitActions.DELETE_BRANCH,
		CodeCommitActions.DELETE_COMMENT_CONTENT,
		CodeCommitActions.DELETE_FILE,
		CodeCommitActions.DELETE_PULL_REQUEST_APPROVAL_RULE,
		CodeCommitActions.DELETE_REPOSITORY,
		CodeCommitActions.DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORY,
		CodeCommitActions.GIT_PUSH,
		CodeCommitActions.MERGE_BRANCHES_BY_FAST_FORWARD,
		CodeCommitActions.MERGE_BRANCHES_BY_SQUASH,
		CodeCommitActions.MERGE_BRANCHES_BY_THREE_WAY,
		CodeCommitActions.MERGE_PULL_REQUEST_BY_FAST_FORWARD,
		CodeCommitActions.MERGE_PULL_REQUEST_BY_SQUASH,
		CodeCommitActions.MERGE_PULL_REQUEST_BY_THREE_WAY,
		CodeCommitActions.OVERRIDE_PULL_REQUEST_APPROVAL_RULES,
		CodeCommitActions.POST_COMMENT_FOR_COMPARED_COMMIT,
		CodeCommitActions.POST_COMMENT_FOR_PULL_REQUEST,
		CodeCommitActions.POST_COMMENT_REPLY,
		CodeCommitActions.PUT_COMMENT_REACTION,
		CodeCommitActions.PUT_FILE,
		CodeCommitActions.PUT_REPOSITORY_TRIGGERS,
		CodeCommitActions.TEST_REPOSITORY_TRIGGERS,
		CodeCommitActions.UPDATE_APPROVAL_RULE_TEMPLATE_CONTENT,
		CodeCommitActions.UPDATE_APPROVAL_RULE_TEMPLATE_DESCRIPTION,
		CodeCommitActions.UPDATE_APPROVAL_RULE_TEMPLATE_NAME,
		CodeCommitActions.UPDATE_COMMENT,
		CodeCommitActions.UPDATE_DEFAULT_BRANCH,
		CodeCommitActions.UPDATE_PULL_REQUEST_APPROVAL_RULE_CONTENT,
		CodeCommitActions.UPDATE_PULL_REQUEST_APPROVAL_STATE,
		CodeCommitActions.UPDATE_PULL_REQUEST_DESCRIPTION,
		CodeCommitActions.UPDATE_PULL_REQUEST_STATUS,
		CodeCommitActions.UPDATE_PULL_REQUEST_TITLE,
		CodeCommitActions.UPDATE_REPOSITORY_DESCRIPTION,
		CodeCommitActions.UPDATE_REPOSITORY_ENCRYPTION_KEY,
		CodeCommitActions.UPDATE_REPOSITORY_NAME,
		CodeCommitActions.UPLOAD_ARCHIVE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CodeCommitActions.LIST_APPROVAL_RULE_TEMPLATES,
		CodeCommitActions.LIST_ASSOCIATED_APPROVAL_RULE_TEMPLATES_FOR_REPOSITORY,
		CodeCommitActions.LIST_BRANCHES,
		CodeCommitActions.LIST_FILE_COMMIT_HISTORY,
		CodeCommitActions.LIST_PULL_REQUESTS,
		CodeCommitActions.LIST_REPOSITORIES,
		CodeCommitActions.LIST_REPOSITORIES_FOR_APPROVAL_RULE_TEMPLATE,
		CodeCommitActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CodeCommitActions.TAG_RESOURCE,
		CodeCommitActions.UNTAG_RESOURCE,
	];
}

const RepositoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):codecommit:(?<region>[^:]*):(?<account>[^:]*):(?<repositoryName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for codecommit resources.
 */
export class CodeCommitResources {
	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: {
		/** The RepositoryName component of the ARN. */
		readonly repositoryName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:codecommit:${props.region ?? "*"}:${props.account ?? "*"}:${props.repositoryName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the repository resource.
	 */
	static isValidRepositoryArn(arn: string): boolean {
		return RepositoryArnRegex.test(arn);
	}

	/**
	 * Parses a repository ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRepositoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		repositoryName: string;
	} {
		const match = RepositoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid repository ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			repositoryName: match.groups!.repositoryName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for codecommit.
 */
export class CodeCommitOperations {
	/** IAM actions required for the AssociateApprovalRuleTemplateWithRepository API call. */
	static readonly ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY: string[] = [
		"codecommit:AssociateApprovalRuleTemplateWithRepository",
	];
	/** IAM actions required for the BatchAssociateApprovalRuleTemplateWithRepositories API call. */
	static readonly BATCH_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORIES: string[] =
		["codecommit:BatchAssociateApprovalRuleTemplateWithRepositories"];
	/** IAM actions required for the BatchDescribeMergeConflicts API call. */
	static readonly BATCH_DESCRIBE_MERGE_CONFLICTS: string[] = [
		"codecommit:BatchDescribeMergeConflicts",
	];
	/** IAM actions required for the BatchDisassociateApprovalRuleTemplateFromRepositories API call. */
	static readonly BATCH_DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORIES: string[] =
		["codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories"];
	/** IAM actions required for the BatchGetCommits API call. */
	static readonly BATCH_GET_COMMITS: string[] = ["codecommit:BatchGetCommits"];
	/** IAM actions required for the BatchGetRepositories API call. */
	static readonly BATCH_GET_REPOSITORIES: string[] = [
		"codecommit:BatchGetRepositories",
	];
	/** IAM actions required for the CreateApprovalRuleTemplate API call. */
	static readonly CREATE_APPROVAL_RULE_TEMPLATE: string[] = [
		"codecommit:CreateApprovalRuleTemplate",
	];
	/** IAM actions required for the CreateBranch API call. */
	static readonly CREATE_BRANCH: string[] = ["codecommit:CreateBranch"];
	/** IAM actions required for the CreateCommit API call. */
	static readonly CREATE_COMMIT: string[] = ["codecommit:CreateCommit"];
	/** IAM actions required for the CreatePullRequest API call. */
	static readonly CREATE_PULL_REQUEST: string[] = [
		"codecommit:CreatePullRequest",
	];
	/** IAM actions required for the CreatePullRequestApprovalRule API call. */
	static readonly CREATE_PULL_REQUEST_APPROVAL_RULE: string[] = [
		"codecommit:CreatePullRequestApprovalRule",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CREATE_REPOSITORY: string[] = [
		"codecommit:CreateRepository",
		"codecommit:TagResource",
	];
	/** IAM actions required for the CreateUnreferencedMergeCommit API call. */
	static readonly CREATE_UNREFERENCED_MERGE_COMMIT: string[] = [
		"codecommit:CreateUnreferencedMergeCommit",
	];
	/** IAM actions required for the DeleteApprovalRuleTemplate API call. */
	static readonly DELETE_APPROVAL_RULE_TEMPLATE: string[] = [
		"codecommit:DeleteApprovalRuleTemplate",
	];
	/** IAM actions required for the DeleteBranch API call. */
	static readonly DELETE_BRANCH: string[] = ["codecommit:DeleteBranch"];
	/** IAM actions required for the DeleteCommentContent API call. */
	static readonly DELETE_COMMENT_CONTENT: string[] = [
		"codecommit:DeleteCommentContent",
	];
	/** IAM actions required for the DeleteFile API call. */
	static readonly DELETE_FILE: string[] = ["codecommit:DeleteFile"];
	/** IAM actions required for the DeletePullRequestApprovalRule API call. */
	static readonly DELETE_PULL_REQUEST_APPROVAL_RULE: string[] = [
		"codecommit:DeletePullRequestApprovalRule",
	];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DELETE_REPOSITORY: string[] = ["codecommit:DeleteRepository"];
	/** IAM actions required for the DescribeMergeConflicts API call. */
	static readonly DESCRIBE_MERGE_CONFLICTS: string[] = [
		"codecommit:DescribeMergeConflicts",
	];
	/** IAM actions required for the DescribePullRequestEvents API call. */
	static readonly DESCRIBE_PULL_REQUEST_EVENTS: string[] = [
		"codecommit:DescribePullRequestEvents",
	];
	/** IAM actions required for the DisassociateApprovalRuleTemplateFromRepository API call. */
	static readonly DISASSOCIATE_APPROVAL_RULE_TEMPLATE_FROM_REPOSITORY: string[] =
		["codecommit:DisassociateApprovalRuleTemplateFromRepository"];
	/** IAM actions required for the EvaluatePullRequestApprovalRules API call. */
	static readonly EVALUATE_PULL_REQUEST_APPROVAL_RULES: string[] = [
		"codecommit:EvaluatePullRequestApprovalRules",
	];
	/** IAM actions required for the GetApprovalRuleTemplate API call. */
	static readonly GET_APPROVAL_RULE_TEMPLATE: string[] = [
		"codecommit:GetApprovalRuleTemplate",
	];
	/** IAM actions required for the GetBlob API call. */
	static readonly GET_BLOB: string[] = ["codecommit:GetBlob"];
	/** IAM actions required for the GetBranch API call. */
	static readonly GET_BRANCH: string[] = ["codecommit:GetBranch"];
	/** IAM actions required for the GetComment API call. */
	static readonly GET_COMMENT: string[] = ["codecommit:GetComment"];
	/** IAM actions required for the GetCommentReactions API call. */
	static readonly GET_COMMENT_REACTIONS: string[] = [
		"codecommit:GetCommentReactions",
	];
	/** IAM actions required for the GetCommentsForComparedCommit API call. */
	static readonly GET_COMMENTS_FOR_COMPARED_COMMIT: string[] = [
		"codecommit:GetCommentsForComparedCommit",
	];
	/** IAM actions required for the GetCommentsForPullRequest API call. */
	static readonly GET_COMMENTS_FOR_PULL_REQUEST: string[] = [
		"codecommit:GetCommentsForPullRequest",
	];
	/** IAM actions required for the GetCommit API call. */
	static readonly GET_COMMIT: string[] = ["codecommit:GetCommit"];
	/** IAM actions required for the GetDifferences API call. */
	static readonly GET_DIFFERENCES: string[] = ["codecommit:GetDifferences"];
	/** IAM actions required for the GetFile API call. */
	static readonly GET_FILE: string[] = ["codecommit:GetFile"];
	/** IAM actions required for the GetFolder API call. */
	static readonly GET_FOLDER: string[] = ["codecommit:GetFolder"];
	/** IAM actions required for the GetMergeCommit API call. */
	static readonly GET_MERGE_COMMIT: string[] = ["codecommit:GetMergeCommit"];
	/** IAM actions required for the GetMergeConflicts API call. */
	static readonly GET_MERGE_CONFLICTS: string[] = [
		"codecommit:GetMergeConflicts",
	];
	/** IAM actions required for the GetMergeOptions API call. */
	static readonly GET_MERGE_OPTIONS: string[] = ["codecommit:GetMergeOptions"];
	/** IAM actions required for the GetPullRequest API call. */
	static readonly GET_PULL_REQUEST: string[] = ["codecommit:GetPullRequest"];
	/** IAM actions required for the GetPullRequestApprovalStates API call. */
	static readonly GET_PULL_REQUEST_APPROVAL_STATES: string[] = [
		"codecommit:GetPullRequestApprovalStates",
	];
	/** IAM actions required for the GetPullRequestOverrideState API call. */
	static readonly GET_PULL_REQUEST_OVERRIDE_STATE: string[] = [
		"codecommit:GetPullRequestOverrideState",
	];
	/** IAM actions required for the GetRepository API call. */
	static readonly GET_REPOSITORY: string[] = ["codecommit:GetRepository"];
	/** IAM actions required for the GetRepositoryTriggers API call. */
	static readonly GET_REPOSITORY_TRIGGERS: string[] = [
		"codecommit:GetRepositoryTriggers",
	];
	/** IAM actions required for the ListApprovalRuleTemplates API call. */
	static readonly LIST_APPROVAL_RULE_TEMPLATES: string[] = [
		"codecommit:ListApprovalRuleTemplates",
	];
	/** IAM actions required for the ListAssociatedApprovalRuleTemplatesForRepository API call. */
	static readonly LIST_ASSOCIATED_APPROVAL_RULE_TEMPLATES_FOR_REPOSITORY: string[] =
		["codecommit:ListAssociatedApprovalRuleTemplatesForRepository"];
	/** IAM actions required for the ListBranches API call. */
	static readonly LIST_BRANCHES: string[] = ["codecommit:ListBranches"];
	/** IAM actions required for the ListFileCommitHistory API call. */
	static readonly LIST_FILE_COMMIT_HISTORY: string[] = [
		"codecommit:ListFileCommitHistory",
	];
	/** IAM actions required for the ListPullRequests API call. */
	static readonly LIST_PULL_REQUESTS: string[] = [
		"codecommit:ListPullRequests",
	];
	/** IAM actions required for the ListRepositories API call. */
	static readonly LIST_REPOSITORIES: string[] = ["codecommit:ListRepositories"];
	/** IAM actions required for the ListRepositoriesForApprovalRuleTemplate API call. */
	static readonly LIST_REPOSITORIES_FOR_APPROVAL_RULE_TEMPLATE: string[] = [
		"codecommit:ListRepositoriesForApprovalRuleTemplate",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"codecommit:ListTagsForResource",
	];
	/** IAM actions required for the MergeBranchesByFastForward API call. */
	static readonly MERGE_BRANCHES_BY_FAST_FORWARD: string[] = [
		"codecommit:MergeBranchesByFastForward",
	];
	/** IAM actions required for the MergeBranchesBySquash API call. */
	static readonly MERGE_BRANCHES_BY_SQUASH: string[] = [
		"codecommit:MergeBranchesBySquash",
	];
	/** IAM actions required for the MergeBranchesByThreeWay API call. */
	static readonly MERGE_BRANCHES_BY_THREE_WAY: string[] = [
		"codecommit:MergeBranchesByThreeWay",
	];
	/** IAM actions required for the MergePullRequestByFastForward API call. */
	static readonly MERGE_PULL_REQUEST_BY_FAST_FORWARD: string[] = [
		"codecommit:MergePullRequestByFastForward",
	];
	/** IAM actions required for the MergePullRequestBySquash API call. */
	static readonly MERGE_PULL_REQUEST_BY_SQUASH: string[] = [
		"codecommit:MergePullRequestBySquash",
	];
	/** IAM actions required for the MergePullRequestByThreeWay API call. */
	static readonly MERGE_PULL_REQUEST_BY_THREE_WAY: string[] = [
		"codecommit:MergePullRequestByThreeWay",
	];
	/** IAM actions required for the OverridePullRequestApprovalRules API call. */
	static readonly OVERRIDE_PULL_REQUEST_APPROVAL_RULES: string[] = [
		"codecommit:OverridePullRequestApprovalRules",
	];
	/** IAM actions required for the PostCommentForComparedCommit API call. */
	static readonly POST_COMMENT_FOR_COMPARED_COMMIT: string[] = [
		"codecommit:PostCommentForComparedCommit",
	];
	/** IAM actions required for the PostCommentForPullRequest API call. */
	static readonly POST_COMMENT_FOR_PULL_REQUEST: string[] = [
		"codecommit:PostCommentForPullRequest",
	];
	/** IAM actions required for the PostCommentReply API call. */
	static readonly POST_COMMENT_REPLY: string[] = [
		"codecommit:PostCommentReply",
	];
	/** IAM actions required for the PutCommentReaction API call. */
	static readonly PUT_COMMENT_REACTION: string[] = [
		"codecommit:PutCommentReaction",
	];
	/** IAM actions required for the PutFile API call. */
	static readonly PUT_FILE: string[] = ["codecommit:PutFile"];
	/** IAM actions required for the PutRepositoryTriggers API call. */
	static readonly PUT_REPOSITORY_TRIGGERS: string[] = [
		"codecommit:PutRepositoryTriggers",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["codecommit:TagResource"];
	/** IAM actions required for the TestRepositoryTriggers API call. */
	static readonly TEST_REPOSITORY_TRIGGERS: string[] = [
		"codecommit:TestRepositoryTriggers",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["codecommit:UntagResource"];
	/** IAM actions required for the UpdateApprovalRuleTemplateContent API call. */
	static readonly UPDATE_APPROVAL_RULE_TEMPLATE_CONTENT: string[] = [
		"codecommit:UpdateApprovalRuleTemplateContent",
	];
	/** IAM actions required for the UpdateApprovalRuleTemplateDescription API call. */
	static readonly UPDATE_APPROVAL_RULE_TEMPLATE_DESCRIPTION: string[] = [
		"codecommit:UpdateApprovalRuleTemplateDescription",
	];
	/** IAM actions required for the UpdateApprovalRuleTemplateName API call. */
	static readonly UPDATE_APPROVAL_RULE_TEMPLATE_NAME: string[] = [
		"codecommit:UpdateApprovalRuleTemplateName",
	];
	/** IAM actions required for the UpdateComment API call. */
	static readonly UPDATE_COMMENT: string[] = ["codecommit:UpdateComment"];
	/** IAM actions required for the UpdateDefaultBranch API call. */
	static readonly UPDATE_DEFAULT_BRANCH: string[] = [
		"codecommit:UpdateDefaultBranch",
	];
	/** IAM actions required for the UpdatePullRequestApprovalRuleContent API call. */
	static readonly UPDATE_PULL_REQUEST_APPROVAL_RULE_CONTENT: string[] = [
		"codecommit:UpdatePullRequestApprovalRuleContent",
	];
	/** IAM actions required for the UpdatePullRequestApprovalState API call. */
	static readonly UPDATE_PULL_REQUEST_APPROVAL_STATE: string[] = [
		"codecommit:UpdatePullRequestApprovalState",
	];
	/** IAM actions required for the UpdatePullRequestDescription API call. */
	static readonly UPDATE_PULL_REQUEST_DESCRIPTION: string[] = [
		"codecommit:UpdatePullRequestDescription",
	];
	/** IAM actions required for the UpdatePullRequestStatus API call. */
	static readonly UPDATE_PULL_REQUEST_STATUS: string[] = [
		"codecommit:UpdatePullRequestStatus",
	];
	/** IAM actions required for the UpdatePullRequestTitle API call. */
	static readonly UPDATE_PULL_REQUEST_TITLE: string[] = [
		"codecommit:UpdatePullRequestTitle",
	];
	/** IAM actions required for the UpdateRepositoryDescription API call. */
	static readonly UPDATE_REPOSITORY_DESCRIPTION: string[] = [
		"codecommit:UpdateRepositoryDescription",
	];
	/** IAM actions required for the UpdateRepositoryEncryptionKey API call. */
	static readonly UPDATE_REPOSITORY_ENCRYPTION_KEY: string[] = [
		"codecommit:UpdateRepositoryEncryptionKey",
	];
	/** IAM actions required for the UpdateRepositoryName API call. */
	static readonly UPDATE_REPOSITORY_NAME: string[] = [
		"codecommit:TagResource",
		"codecommit:UpdateRepositoryName",
	];
}

/**
 * Condition key constants and builders for codecommit.
 */
export class CodeCommitConditions {
	/** Condition keys applicable to the CreateBranch action. */
	static readonly CREATE_BRANCH_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the CreateCommit action. */
	static readonly CREATE_COMMIT_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CREATE_REPOSITORY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUnreferencedMergeCommit action. */
	static readonly CREATE_UNREFERENCED_MERGE_COMMIT_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the DeleteBranch action. */
	static readonly DELETE_BRANCH_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the DeleteFile action. */
	static readonly DELETE_FILE_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the GetMergeCommit action. */
	static readonly GET_MERGE_COMMIT_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the GitPush action. */
	static readonly GIT_PUSH_CONDITION_KEYS: string[] = ["codecommit:References"];
	/** Condition keys applicable to the MergeBranchesByFastForward action. */
	static readonly MERGE_BRANCHES_BY_FAST_FORWARD_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergeBranchesBySquash action. */
	static readonly MERGE_BRANCHES_BY_SQUASH_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergeBranchesByThreeWay action. */
	static readonly MERGE_BRANCHES_BY_THREE_WAY_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergePullRequestByFastForward action. */
	static readonly MERGE_PULL_REQUEST_BY_FAST_FORWARD_CONDITION_KEYS: string[] =
		["codecommit:References"];
	/** Condition keys applicable to the MergePullRequestBySquash action. */
	static readonly MERGE_PULL_REQUEST_BY_SQUASH_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergePullRequestByThreeWay action. */
	static readonly MERGE_PULL_REQUEST_BY_THREE_WAY_CONDITION_KEYS: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the PutFile action. */
	static readonly PUT_FILE_CONDITION_KEYS: string[] = ["codecommit:References"];
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
	/** Condition key: codecommit:References (String) */
	static readonly REFERENCES = "codecommit:References";

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

	/**
	 * Generates a condition block for `codecommit:References`.
	 */
	static references(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "codecommit:References": value } };
	}
}
