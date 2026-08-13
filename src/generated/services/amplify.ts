// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/amplify.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the amplify service.
 */
export class AmplifyActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "amplify";

	/** [Write] amplify:AssociateWebACL */
	static readonly AssociateWebACL = "amplify:AssociateWebACL";
	/** [Write] amplify:CreateApp */
	static readonly CreateApp = "amplify:CreateApp";
	/** [Write] amplify:CreateBackendEnvironment */
	static readonly CreateBackendEnvironment = "amplify:CreateBackendEnvironment";
	/** [Write] amplify:CreateBranch */
	static readonly CreateBranch = "amplify:CreateBranch";
	/** [Write] amplify:CreateDeployment */
	static readonly CreateDeployment = "amplify:CreateDeployment";
	/** [Write] amplify:CreateDomainAssociation */
	static readonly CreateDomainAssociation = "amplify:CreateDomainAssociation";
	/** [Write] amplify:CreateWebHook */
	static readonly CreateWebHook = "amplify:CreateWebHook";
	/** [Write] amplify:DeleteApp */
	static readonly DeleteApp = "amplify:DeleteApp";
	/** [Write] amplify:DeleteBackendEnvironment */
	static readonly DeleteBackendEnvironment = "amplify:DeleteBackendEnvironment";
	/** [Write] amplify:DeleteBranch */
	static readonly DeleteBranch = "amplify:DeleteBranch";
	/** [Write] amplify:DeleteDomainAssociation */
	static readonly DeleteDomainAssociation = "amplify:DeleteDomainAssociation";
	/** [Write] amplify:DeleteJob */
	static readonly DeleteJob = "amplify:DeleteJob";
	/** [Write] amplify:DeleteWebHook */
	static readonly DeleteWebHook = "amplify:DeleteWebHook";
	/** [Write] amplify:DisassociateWebACL */
	static readonly DisassociateWebACL = "amplify:DisassociateWebACL";
	/** [Write] amplify:GenerateAccessLogs */
	static readonly GenerateAccessLogs = "amplify:GenerateAccessLogs";
	/** [Read] amplify:GetApp */
	static readonly actionGetApp = "amplify:GetApp";
	/** [Read] amplify:GetArtifactUrl */
	static readonly actionGetArtifactUrl = "amplify:GetArtifactUrl";
	/** [Read] amplify:GetBackendEnvironment */
	static readonly actionGetBackendEnvironment = "amplify:GetBackendEnvironment";
	/** [Read] amplify:GetBranch */
	static readonly actionGetBranch = "amplify:GetBranch";
	/** [Read] amplify:GetDomainAssociation */
	static readonly actionGetDomainAssociation = "amplify:GetDomainAssociation";
	/** [Read] amplify:GetJob */
	static readonly actionGetJob = "amplify:GetJob";
	/** [Read] amplify:GetWebACLForResource */
	static readonly actionGetWebACLForResource = "amplify:GetWebACLForResource";
	/** [Read] amplify:GetWebHook */
	static readonly actionGetWebHook = "amplify:GetWebHook";
	/** [List] amplify:ListApps */
	static readonly ListApps = "amplify:ListApps";
	/** [List] amplify:ListArtifacts */
	static readonly ListArtifacts = "amplify:ListArtifacts";
	/** [List] amplify:ListBackendEnvironments */
	static readonly ListBackendEnvironments = "amplify:ListBackendEnvironments";
	/** [List] amplify:ListBranches */
	static readonly ListBranches = "amplify:ListBranches";
	/** [List] amplify:ListDomainAssociations */
	static readonly ListDomainAssociations = "amplify:ListDomainAssociations";
	/** [List] amplify:ListJobs */
	static readonly ListJobs = "amplify:ListJobs";
	/** [List] amplify:ListResourcesForWebACL */
	static readonly ListResourcesForWebACL = "amplify:ListResourcesForWebACL";
	/** [Read] amplify:ListTagsForResource */
	static readonly ListTagsForResource = "amplify:ListTagsForResource";
	/** [List] amplify:ListWebHooks */
	static readonly ListWebHooks = "amplify:ListWebHooks";
	/** [Write] amplify:StartDeployment */
	static readonly StartDeployment = "amplify:StartDeployment";
	/** [Write] amplify:StartJob */
	static readonly StartJob = "amplify:StartJob";
	/** [Write] amplify:StopJob */
	static readonly StopJob = "amplify:StopJob";
	/** [Tagging] amplify:TagResource */
	static readonly TagResource = "amplify:TagResource";
	/** [Tagging] amplify:UntagResource */
	static readonly UntagResource = "amplify:UntagResource";
	/** [Write] amplify:UpdateApp */
	static readonly UpdateApp = "amplify:UpdateApp";
	/** [Write] amplify:UpdateBranch */
	static readonly UpdateBranch = "amplify:UpdateBranch";
	/** [Write] amplify:UpdateDomainAssociation */
	static readonly UpdateDomainAssociation = "amplify:UpdateDomainAssociation";
	/** [Write] amplify:UpdateWebHook */
	static readonly UpdateWebHook = "amplify:UpdateWebHook";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AmplifyActions.actionGetApp,
		AmplifyActions.actionGetArtifactUrl,
		AmplifyActions.actionGetBackendEnvironment,
		AmplifyActions.actionGetBranch,
		AmplifyActions.actionGetDomainAssociation,
		AmplifyActions.actionGetJob,
		AmplifyActions.actionGetWebACLForResource,
		AmplifyActions.actionGetWebHook,
		AmplifyActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AmplifyActions.AssociateWebACL,
		AmplifyActions.CreateApp,
		AmplifyActions.CreateBackendEnvironment,
		AmplifyActions.CreateBranch,
		AmplifyActions.CreateDeployment,
		AmplifyActions.CreateDomainAssociation,
		AmplifyActions.CreateWebHook,
		AmplifyActions.DeleteApp,
		AmplifyActions.DeleteBackendEnvironment,
		AmplifyActions.DeleteBranch,
		AmplifyActions.DeleteDomainAssociation,
		AmplifyActions.DeleteJob,
		AmplifyActions.DeleteWebHook,
		AmplifyActions.DisassociateWebACL,
		AmplifyActions.GenerateAccessLogs,
		AmplifyActions.StartDeployment,
		AmplifyActions.StartJob,
		AmplifyActions.StopJob,
		AmplifyActions.UpdateApp,
		AmplifyActions.UpdateBranch,
		AmplifyActions.UpdateDomainAssociation,
		AmplifyActions.UpdateWebHook,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AmplifyActions.ListApps,
		AmplifyActions.ListArtifacts,
		AmplifyActions.ListBackendEnvironments,
		AmplifyActions.ListBranches,
		AmplifyActions.ListDomainAssociations,
		AmplifyActions.ListJobs,
		AmplifyActions.ListResourcesForWebACL,
		AmplifyActions.ListWebHooks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AmplifyActions.TagResource,
		AmplifyActions.UntagResource,
	];
}

/**
 * Properties for building a apps ARN.
 */
export interface AmplifyAppsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a apps ARN.
 */
export interface AmplifyAppsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a branches ARN.
 */
export interface AmplifyBranchesArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The BranchName component of the ARN. */
	readonly branchName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a branches ARN.
 */
export interface AmplifyBranchesArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The BranchName component. */
	readonly branchName: string;
}

/**
 * Properties for building a domains ARN.
 */
export interface AmplifyDomainsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The DomainName component of the ARN. */
	readonly domainName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domains ARN.
 */
export interface AmplifyDomainsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The DomainName component. */
	readonly domainName: string;
}

/**
 * Properties for building a jobs ARN.
 */
export interface AmplifyJobsArnProps {
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The BranchName component of the ARN. */
	readonly branchName: string;
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a jobs ARN.
 */
export interface AmplifyJobsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The BranchName component. */
	readonly branchName: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a webhooks ARN.
 */
export interface AmplifyWebhooksArnProps {
	/** The WebhookId component of the ARN. */
	readonly webhookId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a webhooks ARN.
 */
export interface AmplifyWebhooksArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WebhookId component. */
	readonly webhookId: string;
}

const AppsArnRegex =
	/^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)$/;
const BranchesArnRegex =
	/^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/branches\/(?<branchName>[^:/?]+)$/;
const DomainsArnRegex =
	/^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/domains\/(?<domainName>[^:/?]+)$/;
const JobsArnRegex =
	/^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps\/(?<appId>[^:/?]+)\/branches\/(?<branchName>[^:/?]+)\/jobs\/(?<jobId>[^:/?]+)$/;
const WebhooksArnRegex =
	/^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):webhooks\/(?<webhookId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for amplify resources.
 */
export class AmplifyResources {
	/**
	 * Builds an ARN for the apps resource.
	 */
	static apps(props: AmplifyAppsArnProps): string {
		return `arn:${props.partition ?? "aws"}:amplify:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the apps resource.
	 */
	static isValidAppsArn(arn: string): boolean {
		return AppsArnRegex.test(arn);
	}

	/**
	 * Parses a apps ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppsArn(arn: string): AmplifyAppsArnComponents {
		const match = AppsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid apps ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the branches resource.
	 */
	static branches(props: AmplifyBranchesArnProps): string {
		return `arn:${props.partition ?? "aws"}:amplify:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/branches/${props.branchName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the branches resource.
	 */
	static isValidBranchesArn(arn: string): boolean {
		return BranchesArnRegex.test(arn);
	}

	/**
	 * Parses a branches ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBranchesArn(arn: string): AmplifyBranchesArnComponents {
		const match = BranchesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid branches ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			branchName: match.groups!.branchName,
		};
	}

	/**
	 * Builds an ARN for the domains resource.
	 */
	static domains(props: AmplifyDomainsArnProps): string {
		return `arn:${props.partition ?? "aws"}:amplify:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/domains/${props.domainName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domains resource.
	 */
	static isValidDomainsArn(arn: string): boolean {
		return DomainsArnRegex.test(arn);
	}

	/**
	 * Parses a domains ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainsArn(arn: string): AmplifyDomainsArnComponents {
		const match = DomainsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domains ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			domainName: match.groups!.domainName,
		};
	}

	/**
	 * Builds an ARN for the jobs resource.
	 */
	static jobs(props: AmplifyJobsArnProps): string {
		return `arn:${props.partition ?? "aws"}:amplify:${props.region ?? "*"}:${props.account ?? "*"}:apps/${props.appId}/branches/${props.branchName}/jobs/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the jobs resource.
	 */
	static isValidJobsArn(arn: string): boolean {
		return JobsArnRegex.test(arn);
	}

	/**
	 * Parses a jobs ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobsArn(arn: string): AmplifyJobsArnComponents {
		const match = JobsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid jobs ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			branchName: match.groups!.branchName,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the webhooks resource.
	 */
	static webhooks(props: AmplifyWebhooksArnProps): string {
		return `arn:${props.partition ?? "aws"}:amplify:${props.region ?? "*"}:${props.account ?? "*"}:webhooks/${props.webhookId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the webhooks resource.
	 */
	static isValidWebhooksArn(arn: string): boolean {
		return WebhooksArnRegex.test(arn);
	}

	/**
	 * Parses a webhooks ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebhooksArn(arn: string): AmplifyWebhooksArnComponents {
		const match = WebhooksArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webhooks ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			webhookId: match.groups!.webhookId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for amplify.
 */
export class AmplifyOperations {
	/** IAM actions required for the CreateApp API call. */
	static readonly CreateApp: string[] = [
		"amplify:CreateApp",
		"iam:PassRole",
		"amplify:TagResource",
	];
	/** IAM actions required for the CreateBackendEnvironment API call. */
	static readonly CreateBackendEnvironment: string[] = [
		"amplify:CreateBackendEnvironment",
	];
	/** IAM actions required for the CreateBranch API call. */
	static readonly CreateBranch: string[] = [
		"amplify:CreateBranch",
		"iam:PassRole",
		"amplify:TagResource",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CreateDeployment: string[] = ["amplify:CreateDeployment"];
	/** IAM actions required for the CreateDomainAssociation API call. */
	static readonly CreateDomainAssociation: string[] = [
		"amplify:CreateDomainAssociation",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateWebhook API call. */
	static readonly CreateWebhook: string[] = ["amplify:CreateWebHook"];
	/** IAM actions required for the DeleteApp API call. */
	static readonly DeleteApp: string[] = ["amplify:DeleteApp"];
	/** IAM actions required for the DeleteBackendEnvironment API call. */
	static readonly DeleteBackendEnvironment: string[] = [
		"amplify:DeleteBackendEnvironment",
	];
	/** IAM actions required for the DeleteBranch API call. */
	static readonly DeleteBranch: string[] = ["amplify:DeleteBranch"];
	/** IAM actions required for the DeleteDomainAssociation API call. */
	static readonly DeleteDomainAssociation: string[] = [
		"amplify:DeleteDomainAssociation",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DeleteJob: string[] = ["amplify:DeleteJob"];
	/** IAM actions required for the DeleteWebhook API call. */
	static readonly DeleteWebhook: string[] = ["amplify:DeleteWebHook"];
	/** IAM actions required for the GenerateAccessLogs API call. */
	static readonly GenerateAccessLogs: string[] = ["amplify:GenerateAccessLogs"];
	/** IAM actions required for the GetApp API call. */
	static readonly opGetApp: string[] = ["amplify:GetApp"];
	/** IAM actions required for the GetArtifactUrl API call. */
	static readonly opGetArtifactUrl: string[] = ["amplify:GetArtifactUrl"];
	/** IAM actions required for the GetBackendEnvironment API call. */
	static readonly opGetBackendEnvironment: string[] = [
		"amplify:GetBackendEnvironment",
	];
	/** IAM actions required for the GetBranch API call. */
	static readonly opGetBranch: string[] = ["amplify:GetBranch"];
	/** IAM actions required for the GetDomainAssociation API call. */
	static readonly opGetDomainAssociation: string[] = [
		"amplify:GetDomainAssociation",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["amplify:GetJob"];
	/** IAM actions required for the GetWebhook API call. */
	static readonly opGetWebhook: string[] = ["amplify:GetWebHook"];
	/** IAM actions required for the ListApps API call. */
	static readonly ListApps: string[] = ["amplify:ListApps"];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly ListArtifacts: string[] = ["amplify:ListArtifacts"];
	/** IAM actions required for the ListBackendEnvironments API call. */
	static readonly ListBackendEnvironments: string[] = [
		"amplify:ListBackendEnvironments",
	];
	/** IAM actions required for the ListBranches API call. */
	static readonly ListBranches: string[] = ["amplify:ListBranches"];
	/** IAM actions required for the ListDomainAssociations API call. */
	static readonly ListDomainAssociations: string[] = [
		"amplify:ListDomainAssociations",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["amplify:ListJobs"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"amplify:ListTagsForResource",
	];
	/** IAM actions required for the ListWebhooks API call. */
	static readonly ListWebhooks: string[] = ["amplify:ListWebHooks"];
	/** IAM actions required for the StartDeployment API call. */
	static readonly StartDeployment: string[] = ["amplify:StartDeployment"];
	/** IAM actions required for the StartJob API call. */
	static readonly StartJob: string[] = ["amplify:StartJob"];
	/** IAM actions required for the StopJob API call. */
	static readonly StopJob: string[] = ["amplify:StopJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["amplify:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["amplify:UntagResource"];
	/** IAM actions required for the UpdateApp API call. */
	static readonly UpdateApp: string[] = ["iam:PassRole", "amplify:UpdateApp"];
	/** IAM actions required for the UpdateBranch API call. */
	static readonly UpdateBranch: string[] = [
		"iam:PassRole",
		"amplify:UpdateBranch",
	];
	/** IAM actions required for the UpdateDomainAssociation API call. */
	static readonly UpdateDomainAssociation: string[] = [
		"iam:PassRole",
		"amplify:UpdateDomainAssociation",
	];
	/** IAM actions required for the UpdateWebhook API call. */
	static readonly UpdateWebhook: string[] = ["amplify:UpdateWebHook"];
}

/**
 * Condition key constants and builders for amplify.
 */
export class AmplifyConditions {
	/** Condition keys applicable to the CreateApp action. */
	static readonly CreateAppConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBranch action. */
	static readonly CreateBranchConditionKeys: string[] = [
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
