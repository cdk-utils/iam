// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/geo-routes.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the geo-routes service.
 */
export class GeoRoutesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "geo-routes";

	/** [Read] geo-routes:CalculateIsolines */
	static readonly CalculateIsolines = "geo-routes:CalculateIsolines";
	/** [Read] geo-routes:CalculateRouteMatrix */
	static readonly CalculateRouteMatrix = "geo-routes:CalculateRouteMatrix";
	/** [Read] geo-routes:CalculateRoutes */
	static readonly CalculateRoutes = "geo-routes:CalculateRoutes";
	/** [Read] geo-routes:OptimizeWaypoints */
	static readonly OptimizeWaypoints = "geo-routes:OptimizeWaypoints";
	/** [Read] geo-routes:SnapToRoads */
	static readonly SnapToRoads = "geo-routes:SnapToRoads";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GeoRoutesActions.CalculateIsolines,
		GeoRoutesActions.CalculateRouteMatrix,
		GeoRoutesActions.CalculateRoutes,
		GeoRoutesActions.OptimizeWaypoints,
		GeoRoutesActions.SnapToRoads,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a provider ARN.
 */
export interface GeoRoutesProviderArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a provider ARN.
 */
export interface GeoRoutesProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const ProviderArnRegex =
	/^arn:(?<partition>[^:]+):geo-routes:(?<region>[^:]*)::provider\/default$/;

/**
 * ARN builders, validators, and parsers for geo-routes resources.
 */
export class GeoRoutesResources {
	/**
	 * Builds an ARN for the provider resource.
	 */
	static provider(props: GeoRoutesProviderArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo-routes:${props.region ?? "*"}::provider/default`;
	}

	/**
	 * Validates whether a string is a valid ARN for the provider resource.
	 */
	static isValidProviderArn(arn: string): boolean {
		return ProviderArnRegex.test(arn);
	}

	/**
	 * Parses a provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProviderArn(arn: string): GeoRoutesProviderArnComponents {
		const match = ProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for geo-routes.
 */
export class GeoRoutesOperations {
	/** IAM actions required for the CalculateIsolines API call. */
	static readonly CalculateIsolines: string[] = [
		"geo-routes:CalculateIsolines",
	];
	/** IAM actions required for the CalculateRouteMatrix API call. */
	static readonly CalculateRouteMatrix: string[] = [
		"geo-routes:CalculateRouteMatrix",
	];
	/** IAM actions required for the CalculateRoutes API call. */
	static readonly CalculateRoutes: string[] = ["geo-routes:CalculateRoutes"];
	/** IAM actions required for the OptimizeWaypoints API call. */
	static readonly OptimizeWaypoints: string[] = [
		"geo-routes:OptimizeWaypoints",
	];
	/** IAM actions required for the SnapToRoads API call. */
	static readonly SnapToRoads: string[] = ["geo-routes:SnapToRoads"];
}
