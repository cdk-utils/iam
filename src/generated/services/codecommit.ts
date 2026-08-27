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
	static readonly AssociateApprovalRuleTemplateWithRepository =
		"codecommit:AssociateApprovalRuleTemplateWithRepository";
	/** [Write] codecommit:BatchAssociateApprovalRuleTemplateWithRepositories */
	static readonly BatchAssociateApprovalRuleTemplateWithRepositories =
		"codecommit:BatchAssociateApprovalRuleTemplateWithRepositories";
	/** [Read] codecommit:BatchDescribeMergeConflicts */
	static readonly BatchDescribeMergeConflicts =
		"codecommit:BatchDescribeMergeConflicts";
	/** [Write] codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories */
	static readonly BatchDisassociateApprovalRuleTemplateFromRepositories =
		"codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories";
	/** [Read] codecommit:BatchGetCommits */
	static readonly BatchGetCommits = "codecommit:BatchGetCommits";
	/** [Read] codecommit:BatchGetPullRequests */
	static readonly BatchGetPullRequests = "codecommit:BatchGetPullRequests";
	/** [Read] codecommit:BatchGetRepositories */
	static readonly BatchGetRepositories = "codecommit:BatchGetRepositories";
	/** [Read] codecommit:CancelUploadArchive */
	static readonly CancelUploadArchive = "codecommit:CancelUploadArchive";
	/** [Write] codecommit:CreateApprovalRuleTemplate */
	static readonly CreateApprovalRuleTemplate =
		"codecommit:CreateApprovalRuleTemplate";
	/** [Write] codecommit:CreateBranch */
	static readonly CreateBranch = "codecommit:CreateBranch";
	/** [Write] codecommit:CreateCommit */
	static readonly CreateCommit = "codecommit:CreateCommit";
	/** [Write] codecommit:CreatePullRequest */
	static readonly CreatePullRequest = "codecommit:CreatePullRequest";
	/** [Write] codecommit:CreatePullRequestApprovalRule */
	static readonly CreatePullRequestApprovalRule =
		"codecommit:CreatePullRequestApprovalRule";
	/** [Write] codecommit:CreateRepository */
	static readonly CreateRepository = "codecommit:CreateRepository";
	/** [Write] codecommit:CreateUnreferencedMergeCommit */
	static readonly CreateUnreferencedMergeCommit =
		"codecommit:CreateUnreferencedMergeCommit";
	/** [Write] codecommit:DeleteApprovalRuleTemplate */
	static readonly DeleteApprovalRuleTemplate =
		"codecommit:DeleteApprovalRuleTemplate";
	/** [Write] codecommit:DeleteBranch */
	static readonly DeleteBranch = "codecommit:DeleteBranch";
	/** [Write] codecommit:DeleteCommentContent */
	static readonly DeleteCommentContent = "codecommit:DeleteCommentContent";
	/** [Write] codecommit:DeleteFile */
	static readonly DeleteFile = "codecommit:DeleteFile";
	/** [Write] codecommit:DeletePullRequestApprovalRule */
	static readonly DeletePullRequestApprovalRule =
		"codecommit:DeletePullRequestApprovalRule";
	/** [Write] codecommit:DeleteRepository */
	static readonly DeleteRepository = "codecommit:DeleteRepository";
	/** [Read] codecommit:DescribeMergeConflicts */
	static readonly DescribeMergeConflicts = "codecommit:DescribeMergeConflicts";
	/** [Read] codecommit:DescribePullRequestEvents */
	static readonly DescribePullRequestEvents =
		"codecommit:DescribePullRequestEvents";
	/** [Write] codecommit:DisassociateApprovalRuleTemplateFromRepository */
	static readonly DisassociateApprovalRuleTemplateFromRepository =
		"codecommit:DisassociateApprovalRuleTemplateFromRepository";
	/** [Read] codecommit:EvaluatePullRequestApprovalRules */
	static readonly EvaluatePullRequestApprovalRules =
		"codecommit:EvaluatePullRequestApprovalRules";
	/** [Read] codecommit:GetApprovalRuleTemplate */
	static readonly actionGetApprovalRuleTemplate =
		"codecommit:GetApprovalRuleTemplate";
	/** [Read] codecommit:GetBlob */
	static readonly actionGetBlob = "codecommit:GetBlob";
	/** [Read] codecommit:GetBlobDifferences */
	static readonly actionGetBlobDifferences = "codecommit:GetBlobDifferences";
	/** [Read] codecommit:GetBranch */
	static readonly actionGetBranch = "codecommit:GetBranch";
	/** [Read] codecommit:GetComment */
	static readonly actionGetComment = "codecommit:GetComment";
	/** [Read] codecommit:GetCommentReactions */
	static readonly actionGetCommentReactions = "codecommit:GetCommentReactions";
	/** [Read] codecommit:GetCommentsForComparedCommit */
	static readonly actionGetCommentsForComparedCommit =
		"codecommit:GetCommentsForComparedCommit";
	/** [Read] codecommit:GetCommentsForPullRequest */
	static readonly actionGetCommentsForPullRequest =
		"codecommit:GetCommentsForPullRequest";
	/** [Read] codecommit:GetCommit */
	static readonly actionGetCommit = "codecommit:GetCommit";
	/** [Read] codecommit:GetCommitHistory */
	static readonly actionGetCommitHistory = "codecommit:GetCommitHistory";
	/** [Read] codecommit:GetCommitsFromMergeBase */
	static readonly actionGetCommitsFromMergeBase =
		"codecommit:GetCommitsFromMergeBase";
	/** [Read] codecommit:GetDifferences */
	static readonly actionGetDifferences = "codecommit:GetDifferences";
	/** [Read] codecommit:GetFile */
	static readonly actionGetFile = "codecommit:GetFile";
	/** [Read] codecommit:GetFolder */
	static readonly actionGetFolder = "codecommit:GetFolder";
	/** [Read] codecommit:GetMergeCommit */
	static readonly actionGetMergeCommit = "codecommit:GetMergeCommit";
	/** [Read] codecommit:GetMergeConflicts */
	static readonly actionGetMergeConflicts = "codecommit:GetMergeConflicts";
	/** [Read] codecommit:GetMergeOptions */
	static readonly actionGetMergeOptions = "codecommit:GetMergeOptions";
	/** [Read] codecommit:GetObjectIdentifier */
	static readonly actionGetObjectIdentifier = "codecommit:GetObjectIdentifier";
	/** [Read] codecommit:GetPullRequest */
	static readonly actionGetPullRequest = "codecommit:GetPullRequest";
	/** [Read] codecommit:GetPullRequestApprovalStates */
	static readonly actionGetPullRequestApprovalStates =
		"codecommit:GetPullRequestApprovalStates";
	/** [Read] codecommit:GetPullRequestOverrideState */
	static readonly actionGetPullRequestOverrideState =
		"codecommit:GetPullRequestOverrideState";
	/** [Read] codecommit:GetReferences */
	static readonly actionGetReferences = "codecommit:GetReferences";
	/** [Read] codecommit:GetRepository */
	static readonly actionGetRepository = "codecommit:GetRepository";
	/** [Read] codecommit:GetRepositoryTriggers */
	static readonly actionGetRepositoryTriggers =
		"codecommit:GetRepositoryTriggers";
	/** [Read] codecommit:GetTree */
	static readonly actionGetTree = "codecommit:GetTree";
	/** [Read] codecommit:GetUploadArchiveStatus */
	static readonly actionGetUploadArchiveStatus =
		"codecommit:GetUploadArchiveStatus";
	/** [Read] codecommit:GitPull */
	static readonly GitPull = "codecommit:GitPull";
	/** [Write] codecommit:GitPush */
	static readonly GitPush = "codecommit:GitPush";
	/** [List] codecommit:ListApprovalRuleTemplates */
	static readonly ListApprovalRuleTemplates =
		"codecommit:ListApprovalRuleTemplates";
	/** [List] codecommit:ListAssociatedApprovalRuleTemplatesForRepository */
	static readonly ListAssociatedApprovalRuleTemplatesForRepository =
		"codecommit:ListAssociatedApprovalRuleTemplatesForRepository";
	/** [List] codecommit:ListBranches */
	static readonly ListBranches = "codecommit:ListBranches";
	/** [List] codecommit:ListFileCommitHistory */
	static readonly ListFileCommitHistory = "codecommit:ListFileCommitHistory";
	/** [List] codecommit:ListPullRequests */
	static readonly ListPullRequests = "codecommit:ListPullRequests";
	/** [List] codecommit:ListRepositories */
	static readonly ListRepositories = "codecommit:ListRepositories";
	/** [List] codecommit:ListRepositoriesForApprovalRuleTemplate */
	static readonly ListRepositoriesForApprovalRuleTemplate =
		"codecommit:ListRepositoriesForApprovalRuleTemplate";
	/** [List] codecommit:ListTagsForResource */
	static readonly ListTagsForResource = "codecommit:ListTagsForResource";
	/** [Write] codecommit:MergeBranchesByFastForward */
	static readonly MergeBranchesByFastForward =
		"codecommit:MergeBranchesByFastForward";
	/** [Write] codecommit:MergeBranchesBySquash */
	static readonly MergeBranchesBySquash = "codecommit:MergeBranchesBySquash";
	/** [Write] codecommit:MergeBranchesByThreeWay */
	static readonly MergeBranchesByThreeWay =
		"codecommit:MergeBranchesByThreeWay";
	/** [Write] codecommit:MergePullRequestByFastForward */
	static readonly MergePullRequestByFastForward =
		"codecommit:MergePullRequestByFastForward";
	/** [Write] codecommit:MergePullRequestBySquash */
	static readonly MergePullRequestBySquash =
		"codecommit:MergePullRequestBySquash";
	/** [Write] codecommit:MergePullRequestByThreeWay */
	static readonly MergePullRequestByThreeWay =
		"codecommit:MergePullRequestByThreeWay";
	/** [Write] codecommit:OverridePullRequestApprovalRules */
	static readonly OverridePullRequestApprovalRules =
		"codecommit:OverridePullRequestApprovalRules";
	/** [Write] codecommit:PostCommentForComparedCommit */
	static readonly PostCommentForComparedCommit =
		"codecommit:PostCommentForComparedCommit";
	/** [Write] codecommit:PostCommentForPullRequest */
	static readonly PostCommentForPullRequest =
		"codecommit:PostCommentForPullRequest";
	/** [Write] codecommit:PostCommentReply */
	static readonly PostCommentReply = "codecommit:PostCommentReply";
	/** [Write] codecommit:PutCommentReaction */
	static readonly PutCommentReaction = "codecommit:PutCommentReaction";
	/** [Write] codecommit:PutFile */
	static readonly PutFile = "codecommit:PutFile";
	/** [Write] codecommit:PutRepositoryTriggers */
	static readonly PutRepositoryTriggers = "codecommit:PutRepositoryTriggers";
	/** [Tagging] codecommit:TagResource */
	static readonly TagResource = "codecommit:TagResource";
	/** [Write] codecommit:TestRepositoryTriggers */
	static readonly TestRepositoryTriggers = "codecommit:TestRepositoryTriggers";
	/** [Tagging] codecommit:UntagResource */
	static readonly UntagResource = "codecommit:UntagResource";
	/** [Write] codecommit:UpdateApprovalRuleTemplateContent */
	static readonly UpdateApprovalRuleTemplateContent =
		"codecommit:UpdateApprovalRuleTemplateContent";
	/** [Write] codecommit:UpdateApprovalRuleTemplateDescription */
	static readonly UpdateApprovalRuleTemplateDescription =
		"codecommit:UpdateApprovalRuleTemplateDescription";
	/** [Write] codecommit:UpdateApprovalRuleTemplateName */
	static readonly UpdateApprovalRuleTemplateName =
		"codecommit:UpdateApprovalRuleTemplateName";
	/** [Write] codecommit:UpdateComment */
	static readonly UpdateComment = "codecommit:UpdateComment";
	/** [Write] codecommit:UpdateDefaultBranch */
	static readonly UpdateDefaultBranch = "codecommit:UpdateDefaultBranch";
	/** [Write] codecommit:UpdatePullRequestApprovalRuleContent */
	static readonly UpdatePullRequestApprovalRuleContent =
		"codecommit:UpdatePullRequestApprovalRuleContent";
	/** [Write] codecommit:UpdatePullRequestApprovalState */
	static readonly UpdatePullRequestApprovalState =
		"codecommit:UpdatePullRequestApprovalState";
	/** [Write] codecommit:UpdatePullRequestDescription */
	static readonly UpdatePullRequestDescription =
		"codecommit:UpdatePullRequestDescription";
	/** [Write] codecommit:UpdatePullRequestStatus */
	static readonly UpdatePullRequestStatus =
		"codecommit:UpdatePullRequestStatus";
	/** [Write] codecommit:UpdatePullRequestTitle */
	static readonly UpdatePullRequestTitle = "codecommit:UpdatePullRequestTitle";
	/** [Write] codecommit:UpdateRepositoryDescription */
	static readonly UpdateRepositoryDescription =
		"codecommit:UpdateRepositoryDescription";
	/** [Write] codecommit:UpdateRepositoryEncryptionKey */
	static readonly UpdateRepositoryEncryptionKey =
		"codecommit:UpdateRepositoryEncryptionKey";
	/** [Write] codecommit:UpdateRepositoryName */
	static readonly UpdateRepositoryName = "codecommit:UpdateRepositoryName";
	/** [Write] codecommit:UploadArchive */
	static readonly UploadArchive = "codecommit:UploadArchive";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CodeCommitActions.BatchDescribeMergeConflicts,
		CodeCommitActions.BatchGetCommits,
		CodeCommitActions.BatchGetPullRequests,
		CodeCommitActions.BatchGetRepositories,
		CodeCommitActions.CancelUploadArchive,
		CodeCommitActions.DescribeMergeConflicts,
		CodeCommitActions.DescribePullRequestEvents,
		CodeCommitActions.EvaluatePullRequestApprovalRules,
		CodeCommitActions.actionGetApprovalRuleTemplate,
		CodeCommitActions.actionGetBlob,
		CodeCommitActions.actionGetBlobDifferences,
		CodeCommitActions.actionGetBranch,
		CodeCommitActions.actionGetComment,
		CodeCommitActions.actionGetCommentReactions,
		CodeCommitActions.actionGetCommentsForComparedCommit,
		CodeCommitActions.actionGetCommentsForPullRequest,
		CodeCommitActions.actionGetCommit,
		CodeCommitActions.actionGetCommitHistory,
		CodeCommitActions.actionGetCommitsFromMergeBase,
		CodeCommitActions.actionGetDifferences,
		CodeCommitActions.actionGetFile,
		CodeCommitActions.actionGetFolder,
		CodeCommitActions.actionGetMergeCommit,
		CodeCommitActions.actionGetMergeConflicts,
		CodeCommitActions.actionGetMergeOptions,
		CodeCommitActions.actionGetObjectIdentifier,
		CodeCommitActions.actionGetPullRequest,
		CodeCommitActions.actionGetPullRequestApprovalStates,
		CodeCommitActions.actionGetPullRequestOverrideState,
		CodeCommitActions.actionGetReferences,
		CodeCommitActions.actionGetRepository,
		CodeCommitActions.actionGetRepositoryTriggers,
		CodeCommitActions.actionGetTree,
		CodeCommitActions.actionGetUploadArchiveStatus,
		CodeCommitActions.GitPull,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CodeCommitActions.AssociateApprovalRuleTemplateWithRepository,
		CodeCommitActions.BatchAssociateApprovalRuleTemplateWithRepositories,
		CodeCommitActions.BatchDisassociateApprovalRuleTemplateFromRepositories,
		CodeCommitActions.CreateApprovalRuleTemplate,
		CodeCommitActions.CreateBranch,
		CodeCommitActions.CreateCommit,
		CodeCommitActions.CreatePullRequest,
		CodeCommitActions.CreatePullRequestApprovalRule,
		CodeCommitActions.CreateRepository,
		CodeCommitActions.CreateUnreferencedMergeCommit,
		CodeCommitActions.DeleteApprovalRuleTemplate,
		CodeCommitActions.DeleteBranch,
		CodeCommitActions.DeleteCommentContent,
		CodeCommitActions.DeleteFile,
		CodeCommitActions.DeletePullRequestApprovalRule,
		CodeCommitActions.DeleteRepository,
		CodeCommitActions.DisassociateApprovalRuleTemplateFromRepository,
		CodeCommitActions.GitPush,
		CodeCommitActions.MergeBranchesByFastForward,
		CodeCommitActions.MergeBranchesBySquash,
		CodeCommitActions.MergeBranchesByThreeWay,
		CodeCommitActions.MergePullRequestByFastForward,
		CodeCommitActions.MergePullRequestBySquash,
		CodeCommitActions.MergePullRequestByThreeWay,
		CodeCommitActions.OverridePullRequestApprovalRules,
		CodeCommitActions.PostCommentForComparedCommit,
		CodeCommitActions.PostCommentForPullRequest,
		CodeCommitActions.PostCommentReply,
		CodeCommitActions.PutCommentReaction,
		CodeCommitActions.PutFile,
		CodeCommitActions.PutRepositoryTriggers,
		CodeCommitActions.TestRepositoryTriggers,
		CodeCommitActions.UpdateApprovalRuleTemplateContent,
		CodeCommitActions.UpdateApprovalRuleTemplateDescription,
		CodeCommitActions.UpdateApprovalRuleTemplateName,
		CodeCommitActions.UpdateComment,
		CodeCommitActions.UpdateDefaultBranch,
		CodeCommitActions.UpdatePullRequestApprovalRuleContent,
		CodeCommitActions.UpdatePullRequestApprovalState,
		CodeCommitActions.UpdatePullRequestDescription,
		CodeCommitActions.UpdatePullRequestStatus,
		CodeCommitActions.UpdatePullRequestTitle,
		CodeCommitActions.UpdateRepositoryDescription,
		CodeCommitActions.UpdateRepositoryEncryptionKey,
		CodeCommitActions.UpdateRepositoryName,
		CodeCommitActions.UploadArchive,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CodeCommitActions.ListApprovalRuleTemplates,
		CodeCommitActions.ListAssociatedApprovalRuleTemplatesForRepository,
		CodeCommitActions.ListBranches,
		CodeCommitActions.ListFileCommitHistory,
		CodeCommitActions.ListPullRequests,
		CodeCommitActions.ListRepositories,
		CodeCommitActions.ListRepositoriesForApprovalRuleTemplate,
		CodeCommitActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CodeCommitActions.TagResource,
		CodeCommitActions.UntagResource,
	];
}

/**
 * Properties for building a repository ARN.
 */
export interface CodeCommitRepositoryArnProps {
	/** The RepositoryName component of the ARN. */
	readonly repositoryName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a repository ARN.
 */
export interface CodeCommitRepositoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RepositoryName component. */
	readonly repositoryName: string;
}

const RepositoryArnRegex =
	/^arn:(?<partition>[^:]+):codecommit:(?<region>[^:]*):(?<account>[^:]*):(?<repositoryName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for codecommit resources.
 */
export class CodeCommitResources {
	/**
	 * Builds an ARN for the repository resource.
	 */
	static repository(props: CodeCommitRepositoryArnProps): string {
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
	static parseRepositoryArn(arn: string): CodeCommitRepositoryArnComponents {
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
	static readonly AssociateApprovalRuleTemplateWithRepository: string[] = [
		"codecommit:AssociateApprovalRuleTemplateWithRepository",
	];
	/** IAM actions required for the BatchAssociateApprovalRuleTemplateWithRepositories API call. */
	static readonly BatchAssociateApprovalRuleTemplateWithRepositories: string[] =
		["codecommit:BatchAssociateApprovalRuleTemplateWithRepositories"];
	/** IAM actions required for the BatchDescribeMergeConflicts API call. */
	static readonly BatchDescribeMergeConflicts: string[] = [
		"codecommit:BatchDescribeMergeConflicts",
	];
	/** IAM actions required for the BatchDisassociateApprovalRuleTemplateFromRepositories API call. */
	static readonly BatchDisassociateApprovalRuleTemplateFromRepositories: string[] =
		["codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories"];
	/** IAM actions required for the BatchGetCommits API call. */
	static readonly BatchGetCommits: string[] = ["codecommit:BatchGetCommits"];
	/** IAM actions required for the BatchGetRepositories API call. */
	static readonly BatchGetRepositories: string[] = [
		"codecommit:BatchGetRepositories",
	];
	/** IAM actions required for the CreateApprovalRuleTemplate API call. */
	static readonly CreateApprovalRuleTemplate: string[] = [
		"codecommit:CreateApprovalRuleTemplate",
	];
	/** IAM actions required for the CreateBranch API call. */
	static readonly CreateBranch: string[] = ["codecommit:CreateBranch"];
	/** IAM actions required for the CreateCommit API call. */
	static readonly CreateCommit: string[] = ["codecommit:CreateCommit"];
	/** IAM actions required for the CreatePullRequest API call. */
	static readonly CreatePullRequest: string[] = [
		"codecommit:CreatePullRequest",
	];
	/** IAM actions required for the CreatePullRequestApprovalRule API call. */
	static readonly CreatePullRequestApprovalRule: string[] = [
		"codecommit:CreatePullRequestApprovalRule",
	];
	/** IAM actions required for the CreateRepository API call. */
	static readonly CreateRepository: string[] = [
		"codecommit:CreateRepository",
		"codecommit:TagResource",
	];
	/** IAM actions required for the CreateUnreferencedMergeCommit API call. */
	static readonly CreateUnreferencedMergeCommit: string[] = [
		"codecommit:CreateUnreferencedMergeCommit",
	];
	/** IAM actions required for the DeleteApprovalRuleTemplate API call. */
	static readonly DeleteApprovalRuleTemplate: string[] = [
		"codecommit:DeleteApprovalRuleTemplate",
	];
	/** IAM actions required for the DeleteBranch API call. */
	static readonly DeleteBranch: string[] = ["codecommit:DeleteBranch"];
	/** IAM actions required for the DeleteCommentContent API call. */
	static readonly DeleteCommentContent: string[] = [
		"codecommit:DeleteCommentContent",
	];
	/** IAM actions required for the DeleteFile API call. */
	static readonly DeleteFile: string[] = ["codecommit:DeleteFile"];
	/** IAM actions required for the DeletePullRequestApprovalRule API call. */
	static readonly DeletePullRequestApprovalRule: string[] = [
		"codecommit:DeletePullRequestApprovalRule",
	];
	/** IAM actions required for the DeleteRepository API call. */
	static readonly DeleteRepository: string[] = ["codecommit:DeleteRepository"];
	/** IAM actions required for the DescribeMergeConflicts API call. */
	static readonly DescribeMergeConflicts: string[] = [
		"codecommit:DescribeMergeConflicts",
	];
	/** IAM actions required for the DescribePullRequestEvents API call. */
	static readonly DescribePullRequestEvents: string[] = [
		"codecommit:DescribePullRequestEvents",
	];
	/** IAM actions required for the DisassociateApprovalRuleTemplateFromRepository API call. */
	static readonly DisassociateApprovalRuleTemplateFromRepository: string[] = [
		"codecommit:DisassociateApprovalRuleTemplateFromRepository",
	];
	/** IAM actions required for the EvaluatePullRequestApprovalRules API call. */
	static readonly EvaluatePullRequestApprovalRules: string[] = [
		"codecommit:EvaluatePullRequestApprovalRules",
	];
	/** IAM actions required for the GetApprovalRuleTemplate API call. */
	static readonly opGetApprovalRuleTemplate: string[] = [
		"codecommit:GetApprovalRuleTemplate",
	];
	/** IAM actions required for the GetBlob API call. */
	static readonly opGetBlob: string[] = ["codecommit:GetBlob"];
	/** IAM actions required for the GetBlobDifferences API call. */
	static readonly opGetBlobDifferences: string[] = [
		"codecommit:GetBlobDifferences",
	];
	/** IAM actions required for the GetBranch API call. */
	static readonly opGetBranch: string[] = ["codecommit:GetBranch"];
	/** IAM actions required for the GetComment API call. */
	static readonly opGetComment: string[] = ["codecommit:GetComment"];
	/** IAM actions required for the GetCommentReactions API call. */
	static readonly opGetCommentReactions: string[] = [
		"codecommit:GetCommentReactions",
	];
	/** IAM actions required for the GetCommentsForComparedCommit API call. */
	static readonly opGetCommentsForComparedCommit: string[] = [
		"codecommit:GetCommentsForComparedCommit",
	];
	/** IAM actions required for the GetCommentsForPullRequest API call. */
	static readonly opGetCommentsForPullRequest: string[] = [
		"codecommit:GetCommentsForPullRequest",
	];
	/** IAM actions required for the GetCommit API call. */
	static readonly opGetCommit: string[] = ["codecommit:GetCommit"];
	/** IAM actions required for the GetDifferences API call. */
	static readonly opGetDifferences: string[] = ["codecommit:GetDifferences"];
	/** IAM actions required for the GetFile API call. */
	static readonly opGetFile: string[] = ["codecommit:GetFile"];
	/** IAM actions required for the GetFolder API call. */
	static readonly opGetFolder: string[] = ["codecommit:GetFolder"];
	/** IAM actions required for the GetMergeCommit API call. */
	static readonly opGetMergeCommit: string[] = ["codecommit:GetMergeCommit"];
	/** IAM actions required for the GetMergeConflicts API call. */
	static readonly opGetMergeConflicts: string[] = [
		"codecommit:GetMergeConflicts",
	];
	/** IAM actions required for the GetMergeOptions API call. */
	static readonly opGetMergeOptions: string[] = ["codecommit:GetMergeOptions"];
	/** IAM actions required for the GetPullRequest API call. */
	static readonly opGetPullRequest: string[] = ["codecommit:GetPullRequest"];
	/** IAM actions required for the GetPullRequestApprovalStates API call. */
	static readonly opGetPullRequestApprovalStates: string[] = [
		"codecommit:GetPullRequestApprovalStates",
	];
	/** IAM actions required for the GetPullRequestOverrideState API call. */
	static readonly opGetPullRequestOverrideState: string[] = [
		"codecommit:GetPullRequestOverrideState",
	];
	/** IAM actions required for the GetRepository API call. */
	static readonly opGetRepository: string[] = ["codecommit:GetRepository"];
	/** IAM actions required for the GetRepositoryTriggers API call. */
	static readonly opGetRepositoryTriggers: string[] = [
		"codecommit:GetRepositoryTriggers",
	];
	/** IAM actions required for the ListApprovalRuleTemplates API call. */
	static readonly ListApprovalRuleTemplates: string[] = [
		"codecommit:ListApprovalRuleTemplates",
	];
	/** IAM actions required for the ListAssociatedApprovalRuleTemplatesForRepository API call. */
	static readonly ListAssociatedApprovalRuleTemplatesForRepository: string[] = [
		"codecommit:ListAssociatedApprovalRuleTemplatesForRepository",
	];
	/** IAM actions required for the ListBranches API call. */
	static readonly ListBranches: string[] = ["codecommit:ListBranches"];
	/** IAM actions required for the ListFileCommitHistory API call. */
	static readonly ListFileCommitHistory: string[] = [
		"codecommit:ListFileCommitHistory",
	];
	/** IAM actions required for the ListPullRequests API call. */
	static readonly ListPullRequests: string[] = ["codecommit:ListPullRequests"];
	/** IAM actions required for the ListRepositories API call. */
	static readonly ListRepositories: string[] = ["codecommit:ListRepositories"];
	/** IAM actions required for the ListRepositoriesForApprovalRuleTemplate API call. */
	static readonly ListRepositoriesForApprovalRuleTemplate: string[] = [
		"codecommit:ListRepositoriesForApprovalRuleTemplate",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"codecommit:ListTagsForResource",
	];
	/** IAM actions required for the MergeBranchesByFastForward API call. */
	static readonly MergeBranchesByFastForward: string[] = [
		"codecommit:MergeBranchesByFastForward",
	];
	/** IAM actions required for the MergeBranchesBySquash API call. */
	static readonly MergeBranchesBySquash: string[] = [
		"codecommit:MergeBranchesBySquash",
	];
	/** IAM actions required for the MergeBranchesByThreeWay API call. */
	static readonly MergeBranchesByThreeWay: string[] = [
		"codecommit:MergeBranchesByThreeWay",
	];
	/** IAM actions required for the MergePullRequestByFastForward API call. */
	static readonly MergePullRequestByFastForward: string[] = [
		"codecommit:MergePullRequestByFastForward",
	];
	/** IAM actions required for the MergePullRequestBySquash API call. */
	static readonly MergePullRequestBySquash: string[] = [
		"codecommit:MergePullRequestBySquash",
	];
	/** IAM actions required for the MergePullRequestByThreeWay API call. */
	static readonly MergePullRequestByThreeWay: string[] = [
		"codecommit:MergePullRequestByThreeWay",
	];
	/** IAM actions required for the OverridePullRequestApprovalRules API call. */
	static readonly OverridePullRequestApprovalRules: string[] = [
		"codecommit:OverridePullRequestApprovalRules",
	];
	/** IAM actions required for the PostCommentForComparedCommit API call. */
	static readonly PostCommentForComparedCommit: string[] = [
		"codecommit:PostCommentForComparedCommit",
	];
	/** IAM actions required for the PostCommentForPullRequest API call. */
	static readonly PostCommentForPullRequest: string[] = [
		"codecommit:PostCommentForPullRequest",
	];
	/** IAM actions required for the PostCommentReply API call. */
	static readonly PostCommentReply: string[] = ["codecommit:PostCommentReply"];
	/** IAM actions required for the PutCommentReaction API call. */
	static readonly PutCommentReaction: string[] = [
		"codecommit:PutCommentReaction",
	];
	/** IAM actions required for the PutFile API call. */
	static readonly PutFile: string[] = ["codecommit:PutFile"];
	/** IAM actions required for the PutRepositoryTriggers API call. */
	static readonly PutRepositoryTriggers: string[] = [
		"codecommit:PutRepositoryTriggers",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["codecommit:TagResource"];
	/** IAM actions required for the TestRepositoryTriggers API call. */
	static readonly TestRepositoryTriggers: string[] = [
		"codecommit:TestRepositoryTriggers",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["codecommit:UntagResource"];
	/** IAM actions required for the UpdateApprovalRuleTemplateContent API call. */
	static readonly UpdateApprovalRuleTemplateContent: string[] = [
		"codecommit:UpdateApprovalRuleTemplateContent",
	];
	/** IAM actions required for the UpdateApprovalRuleTemplateDescription API call. */
	static readonly UpdateApprovalRuleTemplateDescription: string[] = [
		"codecommit:UpdateApprovalRuleTemplateDescription",
	];
	/** IAM actions required for the UpdateApprovalRuleTemplateName API call. */
	static readonly UpdateApprovalRuleTemplateName: string[] = [
		"codecommit:UpdateApprovalRuleTemplateName",
	];
	/** IAM actions required for the UpdateComment API call. */
	static readonly UpdateComment: string[] = ["codecommit:UpdateComment"];
	/** IAM actions required for the UpdateDefaultBranch API call. */
	static readonly UpdateDefaultBranch: string[] = [
		"codecommit:UpdateDefaultBranch",
	];
	/** IAM actions required for the UpdatePullRequestApprovalRuleContent API call. */
	static readonly UpdatePullRequestApprovalRuleContent: string[] = [
		"codecommit:UpdatePullRequestApprovalRuleContent",
	];
	/** IAM actions required for the UpdatePullRequestApprovalState API call. */
	static readonly UpdatePullRequestApprovalState: string[] = [
		"codecommit:UpdatePullRequestApprovalState",
	];
	/** IAM actions required for the UpdatePullRequestDescription API call. */
	static readonly UpdatePullRequestDescription: string[] = [
		"codecommit:UpdatePullRequestDescription",
	];
	/** IAM actions required for the UpdatePullRequestStatus API call. */
	static readonly UpdatePullRequestStatus: string[] = [
		"codecommit:UpdatePullRequestStatus",
	];
	/** IAM actions required for the UpdatePullRequestTitle API call. */
	static readonly UpdatePullRequestTitle: string[] = [
		"codecommit:UpdatePullRequestTitle",
	];
	/** IAM actions required for the UpdateRepositoryDescription API call. */
	static readonly UpdateRepositoryDescription: string[] = [
		"codecommit:UpdateRepositoryDescription",
	];
	/** IAM actions required for the UpdateRepositoryEncryptionKey API call. */
	static readonly UpdateRepositoryEncryptionKey: string[] = [
		"codecommit:UpdateRepositoryEncryptionKey",
	];
	/** IAM actions required for the UpdateRepositoryName API call. */
	static readonly UpdateRepositoryName: string[] = [
		"codecommit:TagResource",
		"codecommit:UpdateRepositoryName",
	];
}

/**
 * Condition key constants and builders for codecommit.
 */
export class CodeCommitConditions {
	/** Condition keys applicable to the CreateBranch action. */
	static readonly CreateBranchConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the CreateCommit action. */
	static readonly CreateCommitConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the CreateRepository action. */
	static readonly CreateRepositoryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateUnreferencedMergeCommit action. */
	static readonly CreateUnreferencedMergeCommitConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the DeleteBranch action. */
	static readonly DeleteBranchConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the DeleteFile action. */
	static readonly DeleteFileConditionKeys: string[] = ["codecommit:References"];
	/** Condition keys applicable to the GetMergeCommit action. */
	static readonly actionGetMergeCommitConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the GitPush action. */
	static readonly GitPushConditionKeys: string[] = ["codecommit:References"];
	/** Condition keys applicable to the MergeBranchesByFastForward action. */
	static readonly MergeBranchesByFastForwardConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergeBranchesBySquash action. */
	static readonly MergeBranchesBySquashConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergeBranchesByThreeWay action. */
	static readonly MergeBranchesByThreeWayConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergePullRequestByFastForward action. */
	static readonly MergePullRequestByFastForwardConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergePullRequestBySquash action. */
	static readonly MergePullRequestBySquashConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the MergePullRequestByThreeWay action. */
	static readonly MergePullRequestByThreeWayConditionKeys: string[] = [
		"codecommit:References",
	];
	/** Condition keys applicable to the PutFile action. */
	static readonly PutFileConditionKeys: string[] = ["codecommit:References"];
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
