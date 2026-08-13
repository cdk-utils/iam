// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/serverlessrepo.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the serverlessrepo service.
 */
export class ServerlessrepoActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "serverlessrepo";

	/** [Write] serverlessrepo:CreateApplication */
	static readonly CreateApplication = "serverlessrepo:CreateApplication";
	/** [Write] serverlessrepo:CreateApplicationVersion */
	static readonly CreateApplicationVersion =
		"serverlessrepo:CreateApplicationVersion";
	/** [Write] serverlessrepo:CreateCloudFormationChangeSet */
	static readonly CreateCloudFormationChangeSet =
		"serverlessrepo:CreateCloudFormationChangeSet";
	/** [Write] serverlessrepo:CreateCloudFormationTemplate */
	static readonly CreateCloudFormationTemplate =
		"serverlessrepo:CreateCloudFormationTemplate";
	/** [Write] serverlessrepo:DeleteApplication */
	static readonly DeleteApplication = "serverlessrepo:DeleteApplication";
	/** [Read] serverlessrepo:GetApplication */
	static readonly actionGetApplication = "serverlessrepo:GetApplication";
	/** [Read] serverlessrepo:GetApplicationPolicy */
	static readonly actionGetApplicationPolicy =
		"serverlessrepo:GetApplicationPolicy";
	/** [Read] serverlessrepo:GetCloudFormationTemplate */
	static readonly actionGetCloudFormationTemplate =
		"serverlessrepo:GetCloudFormationTemplate";
	/** [List] serverlessrepo:ListApplicationDependencies */
	static readonly ListApplicationDependencies =
		"serverlessrepo:ListApplicationDependencies";
	/** [List] serverlessrepo:ListApplicationVersions */
	static readonly ListApplicationVersions =
		"serverlessrepo:ListApplicationVersions";
	/** [List] serverlessrepo:ListApplications */
	static readonly ListApplications = "serverlessrepo:ListApplications";
	/** [Write] serverlessrepo:PutApplicationPolicy */
	static readonly PutApplicationPolicy = "serverlessrepo:PutApplicationPolicy";
	/** [Read] serverlessrepo:SearchApplications */
	static readonly SearchApplications = "serverlessrepo:SearchApplications";
	/** [Write] serverlessrepo:UnshareApplication */
	static readonly UnshareApplication = "serverlessrepo:UnshareApplication";
	/** [Write] serverlessrepo:UpdateApplication */
	static readonly UpdateApplication = "serverlessrepo:UpdateApplication";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ServerlessrepoActions.actionGetApplication,
		ServerlessrepoActions.actionGetApplicationPolicy,
		ServerlessrepoActions.actionGetCloudFormationTemplate,
		ServerlessrepoActions.SearchApplications,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ServerlessrepoActions.CreateApplication,
		ServerlessrepoActions.CreateApplicationVersion,
		ServerlessrepoActions.CreateCloudFormationChangeSet,
		ServerlessrepoActions.CreateCloudFormationTemplate,
		ServerlessrepoActions.DeleteApplication,
		ServerlessrepoActions.PutApplicationPolicy,
		ServerlessrepoActions.UnshareApplication,
		ServerlessrepoActions.UpdateApplication,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ServerlessrepoActions.ListApplicationDependencies,
		ServerlessrepoActions.ListApplicationVersions,
		ServerlessrepoActions.ListApplications,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a applications ARN.
 */
export interface ServerlessrepoApplicationsArnProps {
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
 * Parsed components of a applications ARN.
 */
export interface ServerlessrepoApplicationsArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const ApplicationsArnRegex =
	/^arn:(?<partition>[^:]+):serverlessrepo:(?<region>[^:]*):(?<account>[^:]*):applications\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for serverlessrepo resources.
 */
export class ServerlessrepoResources {
	/**
	 * Builds an ARN for the applications resource.
	 */
	static applications(props: ServerlessrepoApplicationsArnProps): string {
		return `arn:${props.partition ?? "aws"}:serverlessrepo:${props.region ?? "*"}:${props.account ?? "*"}:applications/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the applications resource.
	 */
	static isValidApplicationsArn(arn: string): boolean {
		return ApplicationsArnRegex.test(arn);
	}

	/**
	 * Parses a applications ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationsArn(
		arn: string,
	): ServerlessrepoApplicationsArnComponents {
		const match = ApplicationsArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid applications ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for serverlessrepo.
 */
export class ServerlessrepoOperations {
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"serverlessrepo:CreateApplication",
	];
	/** IAM actions required for the CreateApplicationVersion API call. */
	static readonly CreateApplicationVersion: string[] = [
		"serverlessrepo:CreateApplicationVersion",
	];
	/** IAM actions required for the CreateCloudFormationChangeSet API call. */
	static readonly CreateCloudFormationChangeSet: string[] = [
		"serverlessrepo:CreateCloudFormationChangeSet",
	];
	/** IAM actions required for the CreateCloudFormationTemplate API call. */
	static readonly CreateCloudFormationTemplate: string[] = [
		"serverlessrepo:CreateCloudFormationTemplate",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"serverlessrepo:DeleteApplication",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = [
		"serverlessrepo:GetApplication",
	];
	/** IAM actions required for the GetApplicationPolicy API call. */
	static readonly opGetApplicationPolicy: string[] = [
		"serverlessrepo:GetApplicationPolicy",
	];
	/** IAM actions required for the GetCloudFormationTemplate API call. */
	static readonly opGetCloudFormationTemplate: string[] = [
		"serverlessrepo:GetCloudFormationTemplate",
	];
	/** IAM actions required for the ListApplicationDependencies API call. */
	static readonly ListApplicationDependencies: string[] = [
		"serverlessrepo:ListApplicationDependencies",
	];
	/** IAM actions required for the ListApplicationVersions API call. */
	static readonly ListApplicationVersions: string[] = [
		"serverlessrepo:ListApplicationVersions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"serverlessrepo:ListApplications",
	];
	/** IAM actions required for the PutApplicationPolicy API call. */
	static readonly PutApplicationPolicy: string[] = [
		"serverlessrepo:PutApplicationPolicy",
	];
	/** IAM actions required for the UnshareApplication API call. */
	static readonly UnshareApplication: string[] = [
		"serverlessrepo:UnshareApplication",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"serverlessrepo:UpdateApplication",
	];
}

/**
 * Condition key constants and builders for serverlessrepo.
 */
export class ServerlessrepoConditions {
	/** Condition keys applicable to the CreateCloudFormationChangeSet action. */
	static readonly CreateCloudFormationChangeSetConditionKeys: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the CreateCloudFormationTemplate action. */
	static readonly CreateCloudFormationTemplateConditionKeys: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly actionGetApplicationConditionKeys: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the ListApplicationDependencies action. */
	static readonly ListApplicationDependenciesConditionKeys: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the ListApplicationVersions action. */
	static readonly ListApplicationVersionsConditionKeys: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the SearchApplications action. */
	static readonly SearchApplicationsConditionKeys: string[] = [
		"serverlessrepo:applicationType",
	];

	/** Condition key: serverlessrepo:applicationType (String) */
	static readonly APPLICATION_TYPE = "serverlessrepo:applicationType";

	/**
	 * Generates a condition block for `serverlessrepo:applicationType`.
	 */
	static applicationType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "serverlessrepo:applicationType": value } };
	}
}
