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
	static readonly CREATE_APPLICATION = "serverlessrepo:CreateApplication";
	/** [Write] serverlessrepo:CreateApplicationVersion */
	static readonly CREATE_APPLICATION_VERSION =
		"serverlessrepo:CreateApplicationVersion";
	/** [Write] serverlessrepo:CreateCloudFormationChangeSet */
	static readonly CREATE_CLOUD_FORMATION_CHANGE_SET =
		"serverlessrepo:CreateCloudFormationChangeSet";
	/** [Write] serverlessrepo:CreateCloudFormationTemplate */
	static readonly CREATE_CLOUD_FORMATION_TEMPLATE =
		"serverlessrepo:CreateCloudFormationTemplate";
	/** [Write] serverlessrepo:DeleteApplication */
	static readonly DELETE_APPLICATION = "serverlessrepo:DeleteApplication";
	/** [Read] serverlessrepo:GetApplication */
	static readonly GET_APPLICATION = "serverlessrepo:GetApplication";
	/** [Read] serverlessrepo:GetApplicationPolicy */
	static readonly GET_APPLICATION_POLICY =
		"serverlessrepo:GetApplicationPolicy";
	/** [Read] serverlessrepo:GetCloudFormationTemplate */
	static readonly GET_CLOUD_FORMATION_TEMPLATE =
		"serverlessrepo:GetCloudFormationTemplate";
	/** [List] serverlessrepo:ListApplicationDependencies */
	static readonly LIST_APPLICATION_DEPENDENCIES =
		"serverlessrepo:ListApplicationDependencies";
	/** [List] serverlessrepo:ListApplicationVersions */
	static readonly LIST_APPLICATION_VERSIONS =
		"serverlessrepo:ListApplicationVersions";
	/** [List] serverlessrepo:ListApplications */
	static readonly LIST_APPLICATIONS = "serverlessrepo:ListApplications";
	/** [Write] serverlessrepo:PutApplicationPolicy */
	static readonly PUT_APPLICATION_POLICY =
		"serverlessrepo:PutApplicationPolicy";
	/** [Read] serverlessrepo:SearchApplications */
	static readonly SEARCH_APPLICATIONS = "serverlessrepo:SearchApplications";
	/** [Write] serverlessrepo:UnshareApplication */
	static readonly UNSHARE_APPLICATION = "serverlessrepo:UnshareApplication";
	/** [Write] serverlessrepo:UpdateApplication */
	static readonly UPDATE_APPLICATION = "serverlessrepo:UpdateApplication";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ServerlessrepoActions.GET_APPLICATION,
		ServerlessrepoActions.GET_APPLICATION_POLICY,
		ServerlessrepoActions.GET_CLOUD_FORMATION_TEMPLATE,
		ServerlessrepoActions.SEARCH_APPLICATIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ServerlessrepoActions.CREATE_APPLICATION,
		ServerlessrepoActions.CREATE_APPLICATION_VERSION,
		ServerlessrepoActions.CREATE_CLOUD_FORMATION_CHANGE_SET,
		ServerlessrepoActions.CREATE_CLOUD_FORMATION_TEMPLATE,
		ServerlessrepoActions.DELETE_APPLICATION,
		ServerlessrepoActions.PUT_APPLICATION_POLICY,
		ServerlessrepoActions.UNSHARE_APPLICATION,
		ServerlessrepoActions.UPDATE_APPLICATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ServerlessrepoActions.LIST_APPLICATION_DEPENDENCIES,
		ServerlessrepoActions.LIST_APPLICATION_VERSIONS,
		ServerlessrepoActions.LIST_APPLICATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ApplicationsArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):serverlessrepo:(?<region>[^:]*):(?<account>[^:]*):applications/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for serverlessrepo resources.
 */
export class ServerlessrepoResources {
	/**
	 * Builds an ARN for the applications resource.
	 */
	static applications(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationsArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
	static readonly CREATE_APPLICATION: string[] = [
		"serverlessrepo:CreateApplication",
	];
	/** IAM actions required for the CreateApplicationVersion API call. */
	static readonly CREATE_APPLICATION_VERSION: string[] = [
		"serverlessrepo:CreateApplicationVersion",
	];
	/** IAM actions required for the CreateCloudFormationChangeSet API call. */
	static readonly CREATE_CLOUD_FORMATION_CHANGE_SET: string[] = [
		"serverlessrepo:CreateCloudFormationChangeSet",
	];
	/** IAM actions required for the CreateCloudFormationTemplate API call. */
	static readonly CREATE_CLOUD_FORMATION_TEMPLATE: string[] = [
		"serverlessrepo:CreateCloudFormationTemplate",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"serverlessrepo:DeleteApplication",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["serverlessrepo:GetApplication"];
	/** IAM actions required for the GetApplicationPolicy API call. */
	static readonly GET_APPLICATION_POLICY: string[] = [
		"serverlessrepo:GetApplicationPolicy",
	];
	/** IAM actions required for the GetCloudFormationTemplate API call. */
	static readonly GET_CLOUD_FORMATION_TEMPLATE: string[] = [
		"serverlessrepo:GetCloudFormationTemplate",
	];
	/** IAM actions required for the ListApplicationDependencies API call. */
	static readonly LIST_APPLICATION_DEPENDENCIES: string[] = [
		"serverlessrepo:ListApplicationDependencies",
	];
	/** IAM actions required for the ListApplicationVersions API call. */
	static readonly LIST_APPLICATION_VERSIONS: string[] = [
		"serverlessrepo:ListApplicationVersions",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"serverlessrepo:ListApplications",
	];
	/** IAM actions required for the PutApplicationPolicy API call. */
	static readonly PUT_APPLICATION_POLICY: string[] = [
		"serverlessrepo:PutApplicationPolicy",
	];
	/** IAM actions required for the UnshareApplication API call. */
	static readonly UNSHARE_APPLICATION: string[] = [
		"serverlessrepo:UnshareApplication",
	];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UPDATE_APPLICATION: string[] = [
		"serverlessrepo:UpdateApplication",
	];
}

/**
 * Condition key constants and builders for serverlessrepo.
 */
export class ServerlessrepoConditions {
	/** Condition keys applicable to the CreateCloudFormationChangeSet action. */
	static readonly CREATE_CLOUD_FORMATION_CHANGE_SET_CONDITION_KEYS: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the CreateCloudFormationTemplate action. */
	static readonly CREATE_CLOUD_FORMATION_TEMPLATE_CONDITION_KEYS: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly GET_APPLICATION_CONDITION_KEYS: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the ListApplicationDependencies action. */
	static readonly LIST_APPLICATION_DEPENDENCIES_CONDITION_KEYS: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the ListApplicationVersions action. */
	static readonly LIST_APPLICATION_VERSIONS_CONDITION_KEYS: string[] = [
		"serverlessrepo:applicationType",
	];
	/** Condition keys applicable to the SearchApplications action. */
	static readonly SEARCH_APPLICATIONS_CONDITION_KEYS: string[] = [
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
