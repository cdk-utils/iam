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
	static readonly CreateApplication = "refactor-spaces:CreateApplication";
	/** [Write] refactor-spaces:CreateEnvironment */
	static readonly CreateEnvironment = "refactor-spaces:CreateEnvironment";
	/** [Write] refactor-spaces:CreateRoute */
	static readonly CreateRoute = "refactor-spaces:CreateRoute";
	/** [Write] refactor-spaces:CreateService */
	static readonly CreateService = "refactor-spaces:CreateService";
	/** [Write] refactor-spaces:DeleteApplication */
	static readonly DeleteApplication = "refactor-spaces:DeleteApplication";
	/** [Write] refactor-spaces:DeleteEnvironment */
	static readonly DeleteEnvironment = "refactor-spaces:DeleteEnvironment";
	/** [Write] refactor-spaces:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "refactor-spaces:DeleteResourcePolicy";
	/** [Write] refactor-spaces:DeleteRoute */
	static readonly DeleteRoute = "refactor-spaces:DeleteRoute";
	/** [Write] refactor-spaces:DeleteService */
	static readonly DeleteService = "refactor-spaces:DeleteService";
	/** [Read] refactor-spaces:GetApplication */
	static readonly actionGetApplication = "refactor-spaces:GetApplication";
	/** [Read] refactor-spaces:GetEnvironment */
	static readonly actionGetEnvironment = "refactor-spaces:GetEnvironment";
	/** [Read] refactor-spaces:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "refactor-spaces:GetResourcePolicy";
	/** [Read] refactor-spaces:GetRoute */
	static readonly actionGetRoute = "refactor-spaces:GetRoute";
	/** [Read] refactor-spaces:GetService */
	static readonly actionGetService = "refactor-spaces:GetService";
	/** [Read] refactor-spaces:ListApplications */
	static readonly ListApplications = "refactor-spaces:ListApplications";
	/** [Read] refactor-spaces:ListEnvironmentVpcs */
	static readonly ListEnvironmentVpcs = "refactor-spaces:ListEnvironmentVpcs";
	/** [Read] refactor-spaces:ListEnvironments */
	static readonly ListEnvironments = "refactor-spaces:ListEnvironments";
	/** [Read] refactor-spaces:ListRoutes */
	static readonly ListRoutes = "refactor-spaces:ListRoutes";
	/** [Read] refactor-spaces:ListServices */
	static readonly ListServices = "refactor-spaces:ListServices";
	/** [Read] refactor-spaces:ListTagsForResource */
	static readonly ListTagsForResource = "refactor-spaces:ListTagsForResource";
	/** [Write] refactor-spaces:PutResourcePolicy */
	static readonly PutResourcePolicy = "refactor-spaces:PutResourcePolicy";
	/** [Tagging] refactor-spaces:TagResource */
	static readonly TagResource = "refactor-spaces:TagResource";
	/** [Tagging] refactor-spaces:UntagResource */
	static readonly UntagResource = "refactor-spaces:UntagResource";
	/** [Write] refactor-spaces:UpdateRoute */
	static readonly UpdateRoute = "refactor-spaces:UpdateRoute";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RefactorSpacesActions.actionGetApplication,
		RefactorSpacesActions.actionGetEnvironment,
		RefactorSpacesActions.actionGetResourcePolicy,
		RefactorSpacesActions.actionGetRoute,
		RefactorSpacesActions.actionGetService,
		RefactorSpacesActions.ListApplications,
		RefactorSpacesActions.ListEnvironmentVpcs,
		RefactorSpacesActions.ListEnvironments,
		RefactorSpacesActions.ListRoutes,
		RefactorSpacesActions.ListServices,
		RefactorSpacesActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RefactorSpacesActions.CreateApplication,
		RefactorSpacesActions.CreateEnvironment,
		RefactorSpacesActions.CreateRoute,
		RefactorSpacesActions.CreateService,
		RefactorSpacesActions.DeleteApplication,
		RefactorSpacesActions.DeleteEnvironment,
		RefactorSpacesActions.DeleteResourcePolicy,
		RefactorSpacesActions.DeleteRoute,
		RefactorSpacesActions.DeleteService,
		RefactorSpacesActions.PutResourcePolicy,
		RefactorSpacesActions.UpdateRoute,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RefactorSpacesActions.TagResource,
		RefactorSpacesActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface RefactorSpacesApplicationArnProps {
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
}

/**
 * Parsed components of a application ARN.
 */
export interface RefactorSpacesApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a environment ARN.
 */
export interface RefactorSpacesEnvironmentArnProps {
	/** The EnvironmentId component of the ARN. */
	readonly environmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface RefactorSpacesEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
}

/**
 * Properties for building a route ARN.
 */
export interface RefactorSpacesRouteArnProps {
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
}

/**
 * Parsed components of a route ARN.
 */
export interface RefactorSpacesRouteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The RouteId component. */
	readonly routeId: string;
}

/**
 * Properties for building a service ARN.
 */
export interface RefactorSpacesServiceArnProps {
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
}

/**
 * Parsed components of a service ARN.
 */
export interface RefactorSpacesServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentId component. */
	readonly environmentId: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ServiceId component. */
	readonly serviceId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentId>[^:/?]+)\/application\/(?<applicationId>[^:/?]+)$/;
const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentId>[^:/?]+)$/;
const RouteArnRegex =
	/^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentId>[^:/?]+)\/application\/(?<applicationId>[^:/?]+)\/route\/(?<routeId>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):refactor-spaces:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentId>[^:/?]+)\/application\/(?<applicationId>[^:/?]+)\/service\/(?<serviceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for refactor-spaces resources.
 */
export class RefactorSpacesResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: RefactorSpacesApplicationArnProps): string {
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
	static parseApplicationArn(
		arn: string,
	): RefactorSpacesApplicationArnComponents {
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
	static environment(props: RefactorSpacesEnvironmentArnProps): string {
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
	static parseEnvironmentArn(
		arn: string,
	): RefactorSpacesEnvironmentArnComponents {
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
	static route(props: RefactorSpacesRouteArnProps): string {
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
	static parseRouteArn(arn: string): RefactorSpacesRouteArnComponents {
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
	static service(props: RefactorSpacesServiceArnProps): string {
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
	static parseServiceArn(arn: string): RefactorSpacesServiceArnComponents {
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
	static readonly CreateApplication: string[] = [
		"refactor-spaces:CreateApplication",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [
		"refactor-spaces:CreateEnvironment",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the CreateRoute API call. */
	static readonly CreateRoute: string[] = [
		"refactor-spaces:CreateRoute",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CreateService: string[] = [
		"refactor-spaces:CreateService",
		"refactor-spaces:TagResource",
	];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"refactor-spaces:DeleteApplication",
	];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = [
		"refactor-spaces:DeleteEnvironment",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"refactor-spaces:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteRoute API call. */
	static readonly DeleteRoute: string[] = ["refactor-spaces:DeleteRoute"];
	/** IAM actions required for the DeleteService API call. */
	static readonly DeleteService: string[] = ["refactor-spaces:DeleteService"];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = [
		"refactor-spaces:GetApplication",
	];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = [
		"refactor-spaces:GetEnvironment",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"refactor-spaces:GetResourcePolicy",
	];
	/** IAM actions required for the GetRoute API call. */
	static readonly opGetRoute: string[] = ["refactor-spaces:GetRoute"];
	/** IAM actions required for the GetService API call. */
	static readonly opGetService: string[] = ["refactor-spaces:GetService"];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"refactor-spaces:ListApplications",
	];
	/** IAM actions required for the ListEnvironmentVpcs API call. */
	static readonly ListEnvironmentVpcs: string[] = [
		"refactor-spaces:ListEnvironmentVpcs",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = [
		"refactor-spaces:ListEnvironments",
	];
	/** IAM actions required for the ListRoutes API call. */
	static readonly ListRoutes: string[] = ["refactor-spaces:ListRoutes"];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["refactor-spaces:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"refactor-spaces:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"refactor-spaces:PutResourcePolicy",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["refactor-spaces:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["refactor-spaces:UntagResource"];
	/** IAM actions required for the UpdateRoute API call. */
	static readonly UpdateRoute: string[] = ["refactor-spaces:UpdateRoute"];
}

/**
 * Condition key constants and builders for refactor-spaces.
 */
export class RefactorSpacesConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
	];
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRoute action. */
	static readonly CreateRouteConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CreateServiceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DeleteApplication action. */
	static readonly DeleteApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
	];
	/** Condition keys applicable to the DeleteEnvironment action. */
	static readonly DeleteEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteRoute action. */
	static readonly DeleteRouteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DeleteServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the GetApplication action. */
	static readonly actionGetApplicationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
	];
	/** Condition keys applicable to the GetEnvironment action. */
	static readonly actionGetEnvironmentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetRoute action. */
	static readonly actionGetRouteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];
	/** Condition keys applicable to the GetService action. */
	static readonly actionGetServiceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
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
	static readonly UntagResourceConditionKeys: string[] = [
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
	static readonly UpdateRouteConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"refactor-spaces:ApplicationCreatedByAccount",
		"refactor-spaces:CreatedByAccountIds",
		"refactor-spaces:RouteCreatedByAccount",
		"refactor-spaces:ServiceCreatedByAccount",
		"refactor-spaces:SourcePath",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
