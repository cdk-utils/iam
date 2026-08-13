// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/refactor-spaces.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the refactor-spaces service.
 */
export class RefactorSpacesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "refactor-spaces";

	/** [Write] refactor-spaces:CreateApplication */
	static readonly CREATE_APPLICATION = "refactor-spaces:CreateApplication";
	/** [Write] refactor-spaces:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "refactor-spaces:CreateEnvironment";
	/** [Write] refactor-spaces:CreateRoute */
	static readonly CREATE_ROUTE = "refactor-spaces:CreateRoute";
	/** [Write] refactor-spaces:CreateService */
	static readonly CREATE_SERVICE = "refactor-spaces:CreateService";
	/** [Write] refactor-spaces:DeleteApplication */
	static readonly DELETE_APPLICATION = "refactor-spaces:DeleteApplication";
	/** [Write] refactor-spaces:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "refactor-spaces:DeleteEnvironment";
	/** [Write] refactor-spaces:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"refactor-spaces:DeleteResourcePolicy";
	/** [Write] refactor-spaces:DeleteRoute */
	static readonly DELETE_ROUTE = "refactor-spaces:DeleteRoute";
	/** [Write] refactor-spaces:DeleteService */
	static readonly DELETE_SERVICE = "refactor-spaces:DeleteService";
	/** [Read] refactor-spaces:GetApplication */
	static readonly GET_APPLICATION = "refactor-spaces:GetApplication";
	/** [Read] refactor-spaces:GetEnvironment */
	static readonly GET_ENVIRONMENT = "refactor-spaces:GetEnvironment";
	/** [Read] refactor-spaces:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "refactor-spaces:GetResourcePolicy";
	/** [Read] refactor-spaces:GetRoute */
	static readonly GET_ROUTE = "refactor-spaces:GetRoute";
	/** [Read] refactor-spaces:GetService */
	static readonly GET_SERVICE = "refactor-spaces:GetService";
	/** [Read] refactor-spaces:ListApplications */
	static readonly LIST_APPLICATIONS = "refactor-spaces:ListApplications";
	/** [Read] refactor-spaces:ListEnvironmentVpcs */
	static readonly LIST_ENVIRONMENT_VPCS = "refactor-spaces:ListEnvironmentVpcs";
	/** [Read] refactor-spaces:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "refactor-spaces:ListEnvironments";
	/** [Read] refactor-spaces:ListRoutes */
	static readonly LIST_ROUTES = "refactor-spaces:ListRoutes";
	/** [Read] refactor-spaces:ListServices */
	static readonly LIST_SERVICES = "refactor-spaces:ListServices";
	/** [Read] refactor-spaces:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"refactor-spaces:ListTagsForResource";
	/** [Write] refactor-spaces:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "refactor-spaces:PutResourcePolicy";
	/** [Tagging] refactor-spaces:TagResource */
	static readonly TAG_RESOURCE = "refactor-spaces:TagResource";
	/** [Tagging] refactor-spaces:UntagResource */
	static readonly UNTAG_RESOURCE = "refactor-spaces:UntagResource";
	/** [Write] refactor-spaces:UpdateRoute */
	static readonly UPDATE_ROUTE = "refactor-spaces:UpdateRoute";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		RefactorSpacesActions.GET_APPLICATION,
		RefactorSpacesActions.GET_ENVIRONMENT,
		RefactorSpacesActions.GET_RESOURCE_POLICY,
		RefactorSpacesActions.GET_ROUTE,
		RefactorSpacesActions.GET_SERVICE,
		RefactorSpacesActions.LIST_APPLICATIONS,
		RefactorSpacesActions.LIST_ENVIRONMENT_VPCS,
		RefactorSpacesActions.LIST_ENVIRONMENTS,
		RefactorSpacesActions.LIST_ROUTES,
		RefactorSpacesActions.LIST_SERVICES,
		RefactorSpacesActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		RefactorSpacesActions.CREATE_APPLICATION,
		RefactorSpacesActions.CREATE_ENVIRONMENT,
		RefactorSpacesActions.CREATE_ROUTE,
		RefactorSpacesActions.CREATE_SERVICE,
		RefactorSpacesActions.DELETE_APPLICATION,
		RefactorSpacesActions.DELETE_ENVIRONMENT,
		RefactorSpacesActions.DELETE_RESOURCE_POLICY,
		RefactorSpacesActions.DELETE_ROUTE,
		RefactorSpacesActions.DELETE_SERVICE,
		RefactorSpacesActions.PUT_RESOURCE_POLICY,
		RefactorSpacesActions.UPDATE_ROUTE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		RefactorSpacesActions.TAG_RESOURCE,
		RefactorSpacesActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentId>[^:/?]+)/application/(?<applicationId>[^:/?]+)$",
);
const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentId>[^:/?]+)$",
);
const RouteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentId>[^:/?]+)/application/(?<applicationId>[^:/?]+)/route/(?<routeId>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentId>[^:/?]+)/application/(?<applicationId>[^:/?]+)/service/(?<serviceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for refactor-spaces resources.
 */
export class RefactorSpacesResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:refactor-spaces:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentId}/application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		applicationId: string;
	} {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:refactor-spaces:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
	} {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
		};
	}

	/**
	 * Builds an ARN for the route resource.
	 */
	static route(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The RouteId component of the ARN. */
		readonly routeId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:refactor-spaces:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentId}/application/${props.applicationId}/route/${props.routeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the route resource.
	 */
	static isValidRouteArn(arn: string): boolean {
		return RouteArnRegex.test(arn);
	}

	/**
	 * Parses a route ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		applicationId: string;
		routeId: string;
	} {
		const match = RouteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid route ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			applicationId: match.groups!.applicationId,
			routeId: match.groups!.routeId,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: {
		/** The EnvironmentId component of the ARN. */
		readonly environmentId: string;
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:refactor-spaces:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentId}/application/${props.applicationId}/service/${props.serviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentId: string;
		applicationId: string;
		serviceId: string;
	} {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentId: match.groups!.environmentId,
			applicationId: match.groups!.applicationId,
			serviceId: match.groups!.serviceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for refactor-spaces.
 */
export class RefactorSpacesOperations {
	/** IAM actions required for the CreateApplication API call. */
	static readonly CREATE_APPLICATION: string[] = [
		"refactor-spaces:CreateApplication",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"refactor-spaces:CreateEnvironment",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the CreateRoute API call. */
	static readonly CREATE_ROUTE: string[] = [
		"refactor-spaces:CreateRoute",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CREATE_SERVICE: string[] = [
		"refactor-spaces:CreateService",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DELETE_APPLICATION: string[] = [
		"refactor-spaces:DeleteApplication",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = [
		"refactor-spaces:DeleteEnvironment",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DELETE_RESOURCE_POLICY: string[] = [
		"refactor-spaces:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRoute API call. */
	static readonly DELETE_ROUTE: string[] = ["refactor-spaces:DeleteRoute"];
	/** IAM actions required for the DeleteService API call. */
	static readonly DELETE_SERVICE: string[] = ["refactor-spaces:DeleteService"];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = [
		"refactor-spaces:GetApplication",
	];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = [
		"refactor-spaces:GetEnvironment",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = [
		"refactor-spaces:GetResourcePolicy",
	];
	/** IAM actions required for the GetRoute API call. */
	static readonly GET_ROUTE: string[] = ["refactor-spaces:GetRoute"];
	/** IAM actions required for the GetService API call. */
	static readonly GET_SERVICE: string[] = ["refactor-spaces:GetService"];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = [
		"refactor-spaces:ListApplications",
	];
	/** IAM actions required for the ListEnvironmentVpcs API call. */
	static readonly LIST_ENVIRONMENT_VPCS: string[] = [
		"refactor-spaces:ListEnvironmentVpcs",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = [
		"refactor-spaces:ListEnvironments",
	];
	/** IAM actions required for the ListRoutes API call. */
	static readonly LIST_ROUTES: string[] = ["refactor-spaces:ListRoutes"];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["refactor-spaces:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"refactor-spaces:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PUT_RESOURCE_POLICY: string[] = [
		"refactor-spaces:PutResourcePolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["refactor-spaces:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["refactor-spaces:UntagResource"];
	/** IAM actions required for the UpdateRoute API call. */
	static readonly UPDATE_ROUTE: string[] = ["refactor-spaces:UpdateRoute"];
}

/**
 * Condition key constants and builders for refactor-spaces.
 */
export class RefactorSpacesConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CREATE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoute action. */
	static readonly CREATE_ROUTE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CREATE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DELETE_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DELETE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRoute action. */
	static readonly DELETE_ROUTE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DELETE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly GET_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly GET_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRoute action. */
	static readonly GET_ROUTE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the GetService action. */
	static readonly GET_SERVICE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the UpdateRoute action. */
	static readonly UPDATE_ROUTE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: refactor-spaces:ApplicationCreatedByAccount (String) */
	static readonly APPLICATION_CREATED_BY_ACCOUNT =
		"refactor-spaces:ApplicationCreatedByAccount";
	/** Condition key: refactor-spaces:CreatedByAccountIds (ArrayOfString) */
	static readonly CREATED_BY_ACCOUNT_IDS =
		"refactor-spaces:CreatedByAccountIds";
	/** Condition key: refactor-spaces:RouteCreatedByAccount (String) */
	static readonly ROUTE_CREATED_BY_ACCOUNT =
		"refactor-spaces:RouteCreatedByAccount";
	/** Condition key: refactor-spaces:ServiceCreatedByAccount (String) */
	static readonly SERVICE_CREATED_BY_ACCOUNT =
		"refactor-spaces:ServiceCreatedByAccount";
	/** Condition key: refactor-spaces:SourcePath (String) */
	static readonly SOURCE_PATH = "refactor-spaces:SourcePath";

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
	 * Generates a condition block for `refactor-spaces:ApplicationCreatedByAccount`.
	 */
	static applicationCreatedByAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "refactor-spaces:ApplicationCreatedByAccount": value },
		};
	}

	/**
	 * Generates a condition block for `refactor-spaces:CreatedByAccountIds`.
	 */
	static createdByAccountIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"refactor-spaces:CreatedByAccountIds": values,
			},
		};
	}

	/**
	 * Generates a condition block for `refactor-spaces:RouteCreatedByAccount`.
	 */
	static routeCreatedByAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "refactor-spaces:RouteCreatedByAccount": value } };
	}

	/**
	 * Generates a condition block for `refactor-spaces:ServiceCreatedByAccount`.
	 */
	static serviceCreatedByAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "refactor-spaces:ServiceCreatedByAccount": value },
		};
	}

	/**
	 * Generates a condition block for `refactor-spaces:SourcePath`.
	 */
	static sourcePath(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "refactor-spaces:SourcePath": value } };
	}
}
