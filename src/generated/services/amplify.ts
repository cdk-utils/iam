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
	static readonly ASSOCIATE_WEB_ACL = "amplify:AssociateWebACL";
	/** [Write] amplify:CreateApp */
	static readonly CREATE_APP = "amplify:CreateApp";
	/** [Write] amplify:CreateBackendEnvironment */
	static readonly CREATE_BACKEND_ENVIRONMENT =
		"amplify:CreateBackendEnvironment";
	/** [Write] amplify:CreateBranch */
	static readonly CREATE_BRANCH = "amplify:CreateBranch";
	/** [Write] amplify:CreateDeployment */
	static readonly CREATE_DEPLOYMENT = "amplify:CreateDeployment";
	/** [Write] amplify:CreateDomainAssociation */
	static readonly CREATE_DOMAIN_ASSOCIATION = "amplify:CreateDomainAssociation";
	/** [Write] amplify:CreateWebHook */
	static readonly CREATE_WEB_HOOK = "amplify:CreateWebHook";
	/** [Write] amplify:DeleteApp */
	static readonly DELETE_APP = "amplify:DeleteApp";
	/** [Write] amplify:DeleteBackendEnvironment */
	static readonly DELETE_BACKEND_ENVIRONMENT =
		"amplify:DeleteBackendEnvironment";
	/** [Write] amplify:DeleteBranch */
	static readonly DELETE_BRANCH = "amplify:DeleteBranch";
	/** [Write] amplify:DeleteDomainAssociation */
	static readonly DELETE_DOMAIN_ASSOCIATION = "amplify:DeleteDomainAssociation";
	/** [Write] amplify:DeleteJob */
	static readonly DELETE_JOB = "amplify:DeleteJob";
	/** [Write] amplify:DeleteWebHook */
	static readonly DELETE_WEB_HOOK = "amplify:DeleteWebHook";
	/** [Write] amplify:DisassociateWebACL */
	static readonly DISASSOCIATE_WEB_ACL = "amplify:DisassociateWebACL";
	/** [Write] amplify:GenerateAccessLogs */
	static readonly GENERATE_ACCESS_LOGS = "amplify:GenerateAccessLogs";
	/** [Read] amplify:GetApp */
	static readonly GET_APP = "amplify:GetApp";
	/** [Read] amplify:GetArtifactUrl */
	static readonly GET_ARTIFACT_URL = "amplify:GetArtifactUrl";
	/** [Read] amplify:GetBackendEnvironment */
	static readonly GET_BACKEND_ENVIRONMENT = "amplify:GetBackendEnvironment";
	/** [Read] amplify:GetBranch */
	static readonly GET_BRANCH = "amplify:GetBranch";
	/** [Read] amplify:GetDomainAssociation */
	static readonly GET_DOMAIN_ASSOCIATION = "amplify:GetDomainAssociation";
	/** [Read] amplify:GetJob */
	static readonly GET_JOB = "amplify:GetJob";
	/** [Read] amplify:GetWebACLForResource */
	static readonly GET_WEB_ACL_FOR_RESOURCE = "amplify:GetWebACLForResource";
	/** [Read] amplify:GetWebHook */
	static readonly GET_WEB_HOOK = "amplify:GetWebHook";
	/** [List] amplify:ListApps */
	static readonly LIST_APPS = "amplify:ListApps";
	/** [List] amplify:ListArtifacts */
	static readonly LIST_ARTIFACTS = "amplify:ListArtifacts";
	/** [List] amplify:ListBackendEnvironments */
	static readonly LIST_BACKEND_ENVIRONMENTS = "amplify:ListBackendEnvironments";
	/** [List] amplify:ListBranches */
	static readonly LIST_BRANCHES = "amplify:ListBranches";
	/** [List] amplify:ListDomainAssociations */
	static readonly LIST_DOMAIN_ASSOCIATIONS = "amplify:ListDomainAssociations";
	/** [List] amplify:ListJobs */
	static readonly LIST_JOBS = "amplify:ListJobs";
	/** [List] amplify:ListResourcesForWebACL */
	static readonly LIST_RESOURCES_FOR_WEB_ACL = "amplify:ListResourcesForWebACL";
	/** [Read] amplify:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "amplify:ListTagsForResource";
	/** [List] amplify:ListWebHooks */
	static readonly LIST_WEB_HOOKS = "amplify:ListWebHooks";
	/** [Write] amplify:StartDeployment */
	static readonly START_DEPLOYMENT = "amplify:StartDeployment";
	/** [Write] amplify:StartJob */
	static readonly START_JOB = "amplify:StartJob";
	/** [Write] amplify:StopJob */
	static readonly STOP_JOB = "amplify:StopJob";
	/** [Tagging] amplify:TagResource */
	static readonly TAG_RESOURCE = "amplify:TagResource";
	/** [Tagging] amplify:UntagResource */
	static readonly UNTAG_RESOURCE = "amplify:UntagResource";
	/** [Write] amplify:UpdateApp */
	static readonly UPDATE_APP = "amplify:UpdateApp";
	/** [Write] amplify:UpdateBranch */
	static readonly UPDATE_BRANCH = "amplify:UpdateBranch";
	/** [Write] amplify:UpdateDomainAssociation */
	static readonly UPDATE_DOMAIN_ASSOCIATION = "amplify:UpdateDomainAssociation";
	/** [Write] amplify:UpdateWebHook */
	static readonly UPDATE_WEB_HOOK = "amplify:UpdateWebHook";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AmplifyActions.GET_APP,
		AmplifyActions.GET_ARTIFACT_URL,
		AmplifyActions.GET_BACKEND_ENVIRONMENT,
		AmplifyActions.GET_BRANCH,
		AmplifyActions.GET_DOMAIN_ASSOCIATION,
		AmplifyActions.GET_JOB,
		AmplifyActions.GET_WEB_ACL_FOR_RESOURCE,
		AmplifyActions.GET_WEB_HOOK,
		AmplifyActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AmplifyActions.ASSOCIATE_WEB_ACL,
		AmplifyActions.CREATE_APP,
		AmplifyActions.CREATE_BACKEND_ENVIRONMENT,
		AmplifyActions.CREATE_BRANCH,
		AmplifyActions.CREATE_DEPLOYMENT,
		AmplifyActions.CREATE_DOMAIN_ASSOCIATION,
		AmplifyActions.CREATE_WEB_HOOK,
		AmplifyActions.DELETE_APP,
		AmplifyActions.DELETE_BACKEND_ENVIRONMENT,
		AmplifyActions.DELETE_BRANCH,
		AmplifyActions.DELETE_DOMAIN_ASSOCIATION,
		AmplifyActions.DELETE_JOB,
		AmplifyActions.DELETE_WEB_HOOK,
		AmplifyActions.DISASSOCIATE_WEB_ACL,
		AmplifyActions.GENERATE_ACCESS_LOGS,
		AmplifyActions.START_DEPLOYMENT,
		AmplifyActions.START_JOB,
		AmplifyActions.STOP_JOB,
		AmplifyActions.UPDATE_APP,
		AmplifyActions.UPDATE_BRANCH,
		AmplifyActions.UPDATE_DOMAIN_ASSOCIATION,
		AmplifyActions.UPDATE_WEB_HOOK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AmplifyActions.LIST_APPS,
		AmplifyActions.LIST_ARTIFACTS,
		AmplifyActions.LIST_BACKEND_ENVIRONMENTS,
		AmplifyActions.LIST_BRANCHES,
		AmplifyActions.LIST_DOMAIN_ASSOCIATIONS,
		AmplifyActions.LIST_JOBS,
		AmplifyActions.LIST_RESOURCES_FOR_WEB_ACL,
		AmplifyActions.LIST_WEB_HOOKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AmplifyActions.TAG_RESOURCE,
		AmplifyActions.UNTAG_RESOURCE,
	];
}

const AppsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps/(?<appId>[^:/?]+)$",
);
const BranchesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps/(?<appId>[^:/?]+)/branches/(?<branchName>[^:/?]+)$",
);
const DomainsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps/(?<appId>[^:/?]+)/domains/(?<domainName>[^:/?]+)$",
);
const JobsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):apps/(?<appId>[^:/?]+)/branches/(?<branchName>[^:/?]+)/jobs/(?<jobId>[^:/?]+)$",
);
const WebhooksArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplify:(?<region>[^:]*):(?<account>[^:]*):webhooks/(?<webhookId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for amplify resources.
 */
export class AmplifyResources {
	/**
	 * Builds an ARN for the apps resource.
	 */
	static apps(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAppsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
	} {
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
	static branches(props: {
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
	}): string {
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
	static parseBranchesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
		branchName: string;
	} {
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
	static domains(props: {
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
	}): string {
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
	static parseDomainsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
		domainName: string;
	} {
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
	static jobs(props: {
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
	}): string {
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
	static parseJobsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
		branchName: string;
		jobId: string;
	} {
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
	static webhooks(props: {
		/** The WebhookId component of the ARN. */
		readonly webhookId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWebhooksArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		webhookId: string;
	} {
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
	static readonly CREATE_APP: string[] = [
		"amplify:CreateApp",
		"iam:PassRole",
		"amplify:TagResource",
	];
	/** IAM actions required for the CreateBackendEnvironment API call. */
	static readonly CREATE_BACKEND_ENVIRONMENT: string[] = [
		"amplify:CreateBackendEnvironment",
	];
	/** IAM actions required for the CreateBranch API call. */
	static readonly CREATE_BRANCH: string[] = [
		"amplify:CreateBranch",
		"iam:PassRole",
		"amplify:TagResource",
	];
	/** IAM actions required for the CreateDeployment API call. */
	static readonly CREATE_DEPLOYMENT: string[] = ["amplify:CreateDeployment"];
	/** IAM actions required for the CreateDomainAssociation API call. */
	static readonly CREATE_DOMAIN_ASSOCIATION: string[] = [
		"amplify:CreateDomainAssociation",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateWebhook API call. */
	static readonly CREATE_WEBHOOK: string[] = ["amplify:CreateWebHook"];
	/** IAM actions required for the DeleteApp API call. */
	static readonly DELETE_APP: string[] = ["amplify:DeleteApp"];
	/** IAM actions required for the DeleteBackendEnvironment API call. */
	static readonly DELETE_BACKEND_ENVIRONMENT: string[] = [
		"amplify:DeleteBackendEnvironment",
	];
	/** IAM actions required for the DeleteBranch API call. */
	static readonly DELETE_BRANCH: string[] = ["amplify:DeleteBranch"];
	/** IAM actions required for the DeleteDomainAssociation API call. */
	static readonly DELETE_DOMAIN_ASSOCIATION: string[] = [
		"amplify:DeleteDomainAssociation",
	];
	/** IAM actions required for the DeleteJob API call. */
	static readonly DELETE_JOB: string[] = ["amplify:DeleteJob"];
	/** IAM actions required for the DeleteWebhook API call. */
	static readonly DELETE_WEBHOOK: string[] = ["amplify:DeleteWebHook"];
	/** IAM actions required for the GenerateAccessLogs API call. */
	static readonly GENERATE_ACCESS_LOGS: string[] = [
		"amplify:GenerateAccessLogs",
	];
	/** IAM actions required for the GetApp API call. */
	static readonly GET_APP: string[] = ["amplify:GetApp"];
	/** IAM actions required for the GetArtifactUrl API call. */
	static readonly GET_ARTIFACT_URL: string[] = ["amplify:GetArtifactUrl"];
	/** IAM actions required for the GetBackendEnvironment API call. */
	static readonly GET_BACKEND_ENVIRONMENT: string[] = [
		"amplify:GetBackendEnvironment",
	];
	/** IAM actions required for the GetBranch API call. */
	static readonly GET_BRANCH: string[] = ["amplify:GetBranch"];
	/** IAM actions required for the GetDomainAssociation API call. */
	static readonly GET_DOMAIN_ASSOCIATION: string[] = [
		"amplify:GetDomainAssociation",
	];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["amplify:GetJob"];
	/** IAM actions required for the GetWebhook API call. */
	static readonly GET_WEBHOOK: string[] = ["amplify:GetWebHook"];
	/** IAM actions required for the ListApps API call. */
	static readonly LIST_APPS: string[] = ["amplify:ListApps"];
	/** IAM actions required for the ListArtifacts API call. */
	static readonly LIST_ARTIFACTS: string[] = ["amplify:ListArtifacts"];
	/** IAM actions required for the ListBackendEnvironments API call. */
	static readonly LIST_BACKEND_ENVIRONMENTS: string[] = [
		"amplify:ListBackendEnvironments",
	];
	/** IAM actions required for the ListBranches API call. */
	static readonly LIST_BRANCHES: string[] = ["amplify:ListBranches"];
	/** IAM actions required for the ListDomainAssociations API call. */
	static readonly LIST_DOMAIN_ASSOCIATIONS: string[] = [
		"amplify:ListDomainAssociations",
	];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["amplify:ListJobs"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"amplify:ListTagsForResource",
	];
	/** IAM actions required for the ListWebhooks API call. */
	static readonly LIST_WEBHOOKS: string[] = ["amplify:ListWebHooks"];
	/** IAM actions required for the StartDeployment API call. */
	static readonly START_DEPLOYMENT: string[] = ["amplify:StartDeployment"];
	/** IAM actions required for the StartJob API call. */
	static readonly START_JOB: string[] = ["amplify:StartJob"];
	/** IAM actions required for the StopJob API call. */
	static readonly STOP_JOB: string[] = ["amplify:StopJob"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["amplify:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["amplify:UntagResource"];
	/** IAM actions required for the UpdateApp API call. */
	static readonly UPDATE_APP: string[] = ["iam:PassRole", "amplify:UpdateApp"];
	/** IAM actions required for the UpdateBranch API call. */
	static readonly UPDATE_BRANCH: string[] = [
		"iam:PassRole",
		"amplify:UpdateBranch",
	];
	/** IAM actions required for the UpdateDomainAssociation API call. */
	static readonly UPDATE_DOMAIN_ASSOCIATION: string[] = [
		"iam:PassRole",
		"amplify:UpdateDomainAssociation",
	];
	/** IAM actions required for the UpdateWebhook API call. */
	static readonly UPDATE_WEBHOOK: string[] = ["amplify:UpdateWebHook"];
}

/**
 * Condition key constants and builders for amplify.
 */
export class AmplifyConditions {
	/** Condition keys applicable to the CreateApp action. */
	static readonly CREATE_APP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBranch action. */
	static readonly CREATE_BRANCH_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
