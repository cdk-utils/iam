// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/geo.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the geo service.
 */
export class GeoActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "geo";

	/** [Write] geo:AssociateTrackerConsumer */
	static readonly AssociateTrackerConsumer = "geo:AssociateTrackerConsumer";
	/** [Write] geo:BatchDeleteDevicePositionHistory */
	static readonly BatchDeleteDevicePositionHistory =
		"geo:BatchDeleteDevicePositionHistory";
	/** [Write] geo:BatchDeleteGeofence */
	static readonly BatchDeleteGeofence = "geo:BatchDeleteGeofence";
	/** [Write] geo:BatchEvaluateGeofences */
	static readonly BatchEvaluateGeofences = "geo:BatchEvaluateGeofences";
	/** [Read] geo:BatchGetDevicePosition */
	static readonly BatchGetDevicePosition = "geo:BatchGetDevicePosition";
	/** [Write] geo:BatchPutGeofence */
	static readonly BatchPutGeofence = "geo:BatchPutGeofence";
	/** [Write] geo:BatchUpdateDevicePosition */
	static readonly BatchUpdateDevicePosition = "geo:BatchUpdateDevicePosition";
	/** [Read] geo:CalculateRoute */
	static readonly CalculateRoute = "geo:CalculateRoute";
	/** [Read] geo:CalculateRouteMatrix */
	static readonly CalculateRouteMatrix = "geo:CalculateRouteMatrix";
	/** [Write] geo:CancelJob */
	static readonly CancelJob = "geo:CancelJob";
	/** [Write] geo:CreateGeofenceCollection */
	static readonly CreateGeofenceCollection = "geo:CreateGeofenceCollection";
	/** [Write] geo:CreateKey */
	static readonly CreateKey = "geo:CreateKey";
	/** [Write] geo:CreateMap */
	static readonly CreateMap = "geo:CreateMap";
	/** [Write] geo:CreatePlaceIndex */
	static readonly CreatePlaceIndex = "geo:CreatePlaceIndex";
	/** [Write] geo:CreateRouteCalculator */
	static readonly CreateRouteCalculator = "geo:CreateRouteCalculator";
	/** [Write] geo:CreateTracker */
	static readonly CreateTracker = "geo:CreateTracker";
	/** [Write] geo:DeleteGeofenceCollection */
	static readonly DeleteGeofenceCollection = "geo:DeleteGeofenceCollection";
	/** [Write] geo:DeleteKey */
	static readonly DeleteKey = "geo:DeleteKey";
	/** [Write] geo:DeleteMap */
	static readonly DeleteMap = "geo:DeleteMap";
	/** [Write] geo:DeletePlaceIndex */
	static readonly DeletePlaceIndex = "geo:DeletePlaceIndex";
	/** [Write] geo:DeleteRouteCalculator */
	static readonly DeleteRouteCalculator = "geo:DeleteRouteCalculator";
	/** [Write] geo:DeleteTracker */
	static readonly DeleteTracker = "geo:DeleteTracker";
	/** [Read] geo:DescribeGeofenceCollection */
	static readonly DescribeGeofenceCollection = "geo:DescribeGeofenceCollection";
	/** [Read] geo:DescribeKey */
	static readonly DescribeKey = "geo:DescribeKey";
	/** [Read] geo:DescribeMap */
	static readonly DescribeMap = "geo:DescribeMap";
	/** [Read] geo:DescribePlaceIndex */
	static readonly DescribePlaceIndex = "geo:DescribePlaceIndex";
	/** [Read] geo:DescribeRouteCalculator */
	static readonly DescribeRouteCalculator = "geo:DescribeRouteCalculator";
	/** [Read] geo:DescribeTracker */
	static readonly DescribeTracker = "geo:DescribeTracker";
	/** [Write] geo:DisassociateTrackerConsumer */
	static readonly DisassociateTrackerConsumer =
		"geo:DisassociateTrackerConsumer";
	/** [Read] geo:ForecastGeofenceEvents */
	static readonly ForecastGeofenceEvents = "geo:ForecastGeofenceEvents";
	/** [Read] geo:GetDevicePosition */
	static readonly actionGetDevicePosition = "geo:GetDevicePosition";
	/** [Read] geo:GetDevicePositionHistory */
	static readonly actionGetDevicePositionHistory =
		"geo:GetDevicePositionHistory";
	/** [Read] geo:GetGeofence */
	static readonly actionGetGeofence = "geo:GetGeofence";
	/** [Read] geo:GetJob */
	static readonly actionGetJob = "geo:GetJob";
	/** [Read] geo:GetMapGlyphs */
	static readonly actionGetMapGlyphs = "geo:GetMapGlyphs";
	/** [Read] geo:GetMapSprites */
	static readonly actionGetMapSprites = "geo:GetMapSprites";
	/** [Read] geo:GetMapStyleDescriptor */
	static readonly actionGetMapStyleDescriptor = "geo:GetMapStyleDescriptor";
	/** [Read] geo:GetMapTile */
	static readonly actionGetMapTile = "geo:GetMapTile";
	/** [Read] geo:GetPlace */
	static readonly actionGetPlace = "geo:GetPlace";
	/** [Read] geo:ListDevicePositions */
	static readonly ListDevicePositions = "geo:ListDevicePositions";
	/** [List] geo:ListGeofenceCollections */
	static readonly ListGeofenceCollections = "geo:ListGeofenceCollections";
	/** [Read] geo:ListGeofences */
	static readonly ListGeofences = "geo:ListGeofences";
	/** [List] geo:ListJobs */
	static readonly ListJobs = "geo:ListJobs";
	/** [List] geo:ListKeys */
	static readonly ListKeys = "geo:ListKeys";
	/** [List] geo:ListMaps */
	static readonly ListMaps = "geo:ListMaps";
	/** [List] geo:ListPlaceIndexes */
	static readonly ListPlaceIndexes = "geo:ListPlaceIndexes";
	/** [List] geo:ListRouteCalculators */
	static readonly ListRouteCalculators = "geo:ListRouteCalculators";
	/** [Read] geo:ListTagsForResource */
	static readonly ListTagsForResource = "geo:ListTagsForResource";
	/** [Read] geo:ListTrackerConsumers */
	static readonly ListTrackerConsumers = "geo:ListTrackerConsumers";
	/** [List] geo:ListTrackers */
	static readonly ListTrackers = "geo:ListTrackers";
	/** [Write] geo:PutGeofence */
	static readonly PutGeofence = "geo:PutGeofence";
	/** [Read] geo:SearchPlaceIndexForPosition */
	static readonly SearchPlaceIndexForPosition =
		"geo:SearchPlaceIndexForPosition";
	/** [Read] geo:SearchPlaceIndexForSuggestions */
	static readonly SearchPlaceIndexForSuggestions =
		"geo:SearchPlaceIndexForSuggestions";
	/** [Read] geo:SearchPlaceIndexForText */
	static readonly SearchPlaceIndexForText = "geo:SearchPlaceIndexForText";
	/** [Write] geo:StartJob */
	static readonly StartJob = "geo:StartJob";
	/** [Tagging] geo:TagResource */
	static readonly TagResource = "geo:TagResource";
	/** [Tagging] geo:UntagResource */
	static readonly UntagResource = "geo:UntagResource";
	/** [Write] geo:UpdateGeofenceCollection */
	static readonly UpdateGeofenceCollection = "geo:UpdateGeofenceCollection";
	/** [Write] geo:UpdateKey */
	static readonly UpdateKey = "geo:UpdateKey";
	/** [Write] geo:UpdateMap */
	static readonly UpdateMap = "geo:UpdateMap";
	/** [Write] geo:UpdatePlaceIndex */
	static readonly UpdatePlaceIndex = "geo:UpdatePlaceIndex";
	/** [Write] geo:UpdateRouteCalculator */
	static readonly UpdateRouteCalculator = "geo:UpdateRouteCalculator";
	/** [Write] geo:UpdateTracker */
	static readonly UpdateTracker = "geo:UpdateTracker";
	/** [Read] geo:VerifyDevicePosition */
	static readonly VerifyDevicePosition = "geo:VerifyDevicePosition";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GeoActions.BatchGetDevicePosition,
		GeoActions.CalculateRoute,
		GeoActions.CalculateRouteMatrix,
		GeoActions.DescribeGeofenceCollection,
		GeoActions.DescribeKey,
		GeoActions.DescribeMap,
		GeoActions.DescribePlaceIndex,
		GeoActions.DescribeRouteCalculator,
		GeoActions.DescribeTracker,
		GeoActions.ForecastGeofenceEvents,
		GeoActions.actionGetDevicePosition,
		GeoActions.actionGetDevicePositionHistory,
		GeoActions.actionGetGeofence,
		GeoActions.actionGetJob,
		GeoActions.actionGetMapGlyphs,
		GeoActions.actionGetMapSprites,
		GeoActions.actionGetMapStyleDescriptor,
		GeoActions.actionGetMapTile,
		GeoActions.actionGetPlace,
		GeoActions.ListDevicePositions,
		GeoActions.ListGeofences,
		GeoActions.ListTagsForResource,
		GeoActions.ListTrackerConsumers,
		GeoActions.SearchPlaceIndexForPosition,
		GeoActions.SearchPlaceIndexForSuggestions,
		GeoActions.SearchPlaceIndexForText,
		GeoActions.VerifyDevicePosition,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GeoActions.AssociateTrackerConsumer,
		GeoActions.BatchDeleteDevicePositionHistory,
		GeoActions.BatchDeleteGeofence,
		GeoActions.BatchEvaluateGeofences,
		GeoActions.BatchPutGeofence,
		GeoActions.BatchUpdateDevicePosition,
		GeoActions.CancelJob,
		GeoActions.CreateGeofenceCollection,
		GeoActions.CreateKey,
		GeoActions.CreateMap,
		GeoActions.CreatePlaceIndex,
		GeoActions.CreateRouteCalculator,
		GeoActions.CreateTracker,
		GeoActions.DeleteGeofenceCollection,
		GeoActions.DeleteKey,
		GeoActions.DeleteMap,
		GeoActions.DeletePlaceIndex,
		GeoActions.DeleteRouteCalculator,
		GeoActions.DeleteTracker,
		GeoActions.DisassociateTrackerConsumer,
		GeoActions.PutGeofence,
		GeoActions.StartJob,
		GeoActions.UpdateGeofenceCollection,
		GeoActions.UpdateKey,
		GeoActions.UpdateMap,
		GeoActions.UpdatePlaceIndex,
		GeoActions.UpdateRouteCalculator,
		GeoActions.UpdateTracker,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GeoActions.ListGeofenceCollections,
		GeoActions.ListJobs,
		GeoActions.ListKeys,
		GeoActions.ListMaps,
		GeoActions.ListPlaceIndexes,
		GeoActions.ListRouteCalculators,
		GeoActions.ListTrackers,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GeoActions.TagResource,
		GeoActions.UntagResource,
	];
}

/**
 * Properties for building a api-key ARN.
 */
export interface GeoAPIKeyArnProps {
	/** The KeyName component of the ARN. */
	readonly keyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a api-key ARN.
 */
export interface GeoAPIKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The KeyName component. */
	readonly keyName: string;
}

/**
 * Properties for building a geofence-collection ARN.
 */
export interface GeoGeofenceCollectionArnProps {
	/** The GeofenceCollectionName component of the ARN. */
	readonly geofenceCollectionName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a geofence-collection ARN.
 */
export interface GeoGeofenceCollectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GeofenceCollectionName component. */
	readonly geofenceCollectionName: string;
}

/**
 * Properties for building a job ARN.
 */
export interface GeoJobArnProps {
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
 * Parsed components of a job ARN.
 */
export interface GeoJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a map ARN.
 */
export interface GeoMapArnProps {
	/** The MapName component of the ARN. */
	readonly mapName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a map ARN.
 */
export interface GeoMapArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The MapName component. */
	readonly mapName: string;
}

/**
 * Properties for building a place-index ARN.
 */
export interface GeoPlaceIndexArnProps {
	/** The IndexName component of the ARN. */
	readonly indexName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a place-index ARN.
 */
export interface GeoPlaceIndexArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IndexName component. */
	readonly indexName: string;
}

/**
 * Properties for building a route-calculator ARN.
 */
export interface GeoRouteCalculatorArnProps {
	/** The CalculatorName component of the ARN. */
	readonly calculatorName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a route-calculator ARN.
 */
export interface GeoRouteCalculatorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CalculatorName component. */
	readonly calculatorName: string;
}

/**
 * Properties for building a tracker ARN.
 */
export interface GeoTrackerArnProps {
	/** The TrackerName component of the ARN. */
	readonly trackerName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a tracker ARN.
 */
export interface GeoTrackerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TrackerName component. */
	readonly trackerName: string;
}

const APIKeyArnRegex =
	/^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):api-key\/(?<keyName>[^:/?]+)$/;
const GeofenceCollectionArnRegex =
	/^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):geofence-collection\/(?<geofenceCollectionName>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const MapArnRegex =
	/^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):map\/(?<mapName>[^:/?]+)$/;
const PlaceIndexArnRegex =
	/^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):place-index\/(?<indexName>[^:/?]+)$/;
const RouteCalculatorArnRegex =
	/^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):route-calculator\/(?<calculatorName>[^:/?]+)$/;
const TrackerArnRegex =
	/^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):tracker\/(?<trackerName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for geo resources.
 */
export class GeoResources {
	/**
	 * Builds an ARN for the api-key resource.
	 */
	static apiKey(props: GeoAPIKeyArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo:${props.region ?? "*"}:${props.account ?? "*"}:api-key/${props.keyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the api-key resource.
	 */
	static isValidAPIKeyArn(arn: string): boolean {
		return APIKeyArnRegex.test(arn);
	}

	/**
	 * Parses a api-key ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAPIKeyArn(arn: string): GeoAPIKeyArnComponents {
		const match = APIKeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid api-key ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			keyName: match.groups!.keyName,
		};
	}

	/**
	 * Builds an ARN for the geofence-collection resource.
	 */
	static geofenceCollection(props: GeoGeofenceCollectionArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo:${props.region ?? "*"}:${props.account ?? "*"}:geofence-collection/${props.geofenceCollectionName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the geofence-collection resource.
	 */
	static isValidGeofenceCollectionArn(arn: string): boolean {
		return GeofenceCollectionArnRegex.test(arn);
	}

	/**
	 * Parses a geofence-collection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGeofenceCollectionArn(
		arn: string,
	): GeoGeofenceCollectionArnComponents {
		const match = GeofenceCollectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid geofence-collection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			geofenceCollectionName: match.groups!.geofenceCollectionName,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: GeoJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): GeoJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the map resource.
	 */
	static map(props: GeoMapArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo:${props.region ?? "*"}:${props.account ?? "*"}:map/${props.mapName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the map resource.
	 */
	static isValidMapArn(arn: string): boolean {
		return MapArnRegex.test(arn);
	}

	/**
	 * Parses a map ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMapArn(arn: string): GeoMapArnComponents {
		const match = MapArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid map ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			mapName: match.groups!.mapName,
		};
	}

	/**
	 * Builds an ARN for the place-index resource.
	 */
	static placeIndex(props: GeoPlaceIndexArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo:${props.region ?? "*"}:${props.account ?? "*"}:place-index/${props.indexName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the place-index resource.
	 */
	static isValidPlaceIndexArn(arn: string): boolean {
		return PlaceIndexArnRegex.test(arn);
	}

	/**
	 * Parses a place-index ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePlaceIndexArn(arn: string): GeoPlaceIndexArnComponents {
		const match = PlaceIndexArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid place-index ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			indexName: match.groups!.indexName,
		};
	}

	/**
	 * Builds an ARN for the route-calculator resource.
	 */
	static routeCalculator(props: GeoRouteCalculatorArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo:${props.region ?? "*"}:${props.account ?? "*"}:route-calculator/${props.calculatorName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the route-calculator resource.
	 */
	static isValidRouteCalculatorArn(arn: string): boolean {
		return RouteCalculatorArnRegex.test(arn);
	}

	/**
	 * Parses a route-calculator ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRouteCalculatorArn(arn: string): GeoRouteCalculatorArnComponents {
		const match = RouteCalculatorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid route-calculator ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			calculatorName: match.groups!.calculatorName,
		};
	}

	/**
	 * Builds an ARN for the tracker resource.
	 */
	static tracker(props: GeoTrackerArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo:${props.region ?? "*"}:${props.account ?? "*"}:tracker/${props.trackerName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the tracker resource.
	 */
	static isValidTrackerArn(arn: string): boolean {
		return TrackerArnRegex.test(arn);
	}

	/**
	 * Parses a tracker ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTrackerArn(arn: string): GeoTrackerArnComponents {
		const match = TrackerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid tracker ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			trackerName: match.groups!.trackerName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for geo.
 */
export class GeoOperations {
	/** IAM actions required for the AssociateTrackerConsumer API call. */
	static readonly AssociateTrackerConsumer: string[] = [
		"geo:AssociateTrackerConsumer",
	];
	/** IAM actions required for the BatchDeleteDevicePositionHistory API call. */
	static readonly BatchDeleteDevicePositionHistory: string[] = [
		"geo:BatchDeleteDevicePositionHistory",
	];
	/** IAM actions required for the BatchDeleteGeofence API call. */
	static readonly BatchDeleteGeofence: string[] = ["geo:BatchDeleteGeofence"];
	/** IAM actions required for the BatchEvaluateGeofences API call. */
	static readonly BatchEvaluateGeofences: string[] = [
		"geo:BatchEvaluateGeofences",
	];
	/** IAM actions required for the BatchGetDevicePosition API call. */
	static readonly BatchGetDevicePosition: string[] = [
		"geo:BatchGetDevicePosition",
	];
	/** IAM actions required for the BatchPutGeofence API call. */
	static readonly BatchPutGeofence: string[] = ["geo:BatchPutGeofence"];
	/** IAM actions required for the BatchUpdateDevicePosition API call. */
	static readonly BatchUpdateDevicePosition: string[] = [
		"geo:BatchUpdateDevicePosition",
	];
	/** IAM actions required for the CalculateRoute API call. */
	static readonly CalculateRoute: string[] = ["geo:CalculateRoute"];
	/** IAM actions required for the CalculateRouteMatrix API call. */
	static readonly CalculateRouteMatrix: string[] = ["geo:CalculateRouteMatrix"];
	/** IAM actions required for the CancelJob API call. */
	static readonly CancelJob: string[] = ["geo:CancelJob"];
	/** IAM actions required for the CreateGeofenceCollection API call. */
	static readonly CreateGeofenceCollection: string[] = [
		"geo:CreateGeofenceCollection",
		"geo:TagResource",
	];
	/** IAM actions required for the CreateKey API call. */
	static readonly CreateKey: string[] = [
		"geo-places:Autocomplete",
		"geo-routes:CalculateIsolines",
		"geo:CalculateRoute",
		"geo:CalculateRouteMatrix",
		"geo-routes:CalculateRouteMatrix",
		"geo-routes:CalculateRoutes",
		"geo:CreateKey",
		"geo-places:Geocode",
		"geo:GetMapGlyphs",
		"geo:GetMapSprites",
		"geo:GetMapStyleDescriptor",
		"geo:GetMapTile",
		"geo:GetPlace",
		"geo-places:GetPlace",
		"geo-maps:GetStaticMap",
		"geo-maps:GetTile",
		"geo-routes:OptimizeWaypoints",
		"geo-places:ReverseGeocode",
		"geo-places:SearchNearby",
		"geo:SearchPlaceIndexForPosition",
		"geo:SearchPlaceIndexForSuggestions",
		"geo:SearchPlaceIndexForText",
		"geo-places:SearchText",
		"geo-routes:SnapToRoads",
		"geo-places:Suggest",
		"geo:TagResource",
	];
	/** IAM actions required for the CreateMap API call. */
	static readonly CreateMap: string[] = ["geo:CreateMap", "geo:TagResource"];
	/** IAM actions required for the CreatePlaceIndex API call. */
	static readonly CreatePlaceIndex: string[] = [
		"geo:CreatePlaceIndex",
		"geo:TagResource",
	];
	/** IAM actions required for the CreateRouteCalculator API call. */
	static readonly CreateRouteCalculator: string[] = [
		"geo:CreateRouteCalculator",
		"geo:TagResource",
	];
	/** IAM actions required for the CreateTracker API call. */
	static readonly CreateTracker: string[] = [
		"geo:CreateTracker",
		"geo:TagResource",
	];
	/** IAM actions required for the DeleteGeofenceCollection API call. */
	static readonly DeleteGeofenceCollection: string[] = [
		"geo:DeleteGeofenceCollection",
	];
	/** IAM actions required for the DeleteKey API call. */
	static readonly DeleteKey: string[] = ["geo:DeleteKey"];
	/** IAM actions required for the DeleteMap API call. */
	static readonly DeleteMap: string[] = ["geo:DeleteMap"];
	/** IAM actions required for the DeletePlaceIndex API call. */
	static readonly DeletePlaceIndex: string[] = ["geo:DeletePlaceIndex"];
	/** IAM actions required for the DeleteRouteCalculator API call. */
	static readonly DeleteRouteCalculator: string[] = [
		"geo:DeleteRouteCalculator",
	];
	/** IAM actions required for the DeleteTracker API call. */
	static readonly DeleteTracker: string[] = ["geo:DeleteTracker"];
	/** IAM actions required for the DescribeGeofenceCollection API call. */
	static readonly DescribeGeofenceCollection: string[] = [
		"geo:DescribeGeofenceCollection",
	];
	/** IAM actions required for the DescribeKey API call. */
	static readonly DescribeKey: string[] = ["geo:DescribeKey"];
	/** IAM actions required for the DescribeMap API call. */
	static readonly DescribeMap: string[] = ["geo:DescribeMap"];
	/** IAM actions required for the DescribePlaceIndex API call. */
	static readonly DescribePlaceIndex: string[] = ["geo:DescribePlaceIndex"];
	/** IAM actions required for the DescribeRouteCalculator API call. */
	static readonly DescribeRouteCalculator: string[] = [
		"geo:DescribeRouteCalculator",
	];
	/** IAM actions required for the DescribeTracker API call. */
	static readonly DescribeTracker: string[] = ["geo:DescribeTracker"];
	/** IAM actions required for the DisassociateTrackerConsumer API call. */
	static readonly DisassociateTrackerConsumer: string[] = [
		"geo:DisassociateTrackerConsumer",
	];
	/** IAM actions required for the ForecastGeofenceEvents API call. */
	static readonly ForecastGeofenceEvents: string[] = [
		"geo:ForecastGeofenceEvents",
	];
	/** IAM actions required for the GetDevicePosition API call. */
	static readonly opGetDevicePosition: string[] = ["geo:GetDevicePosition"];
	/** IAM actions required for the GetDevicePositionHistory API call. */
	static readonly opGetDevicePositionHistory: string[] = [
		"geo:GetDevicePositionHistory",
	];
	/** IAM actions required for the GetGeofence API call. */
	static readonly opGetGeofence: string[] = ["geo:GetGeofence"];
	/** IAM actions required for the GetJob API call. */
	static readonly opGetJob: string[] = ["geo:GetJob"];
	/** IAM actions required for the GetMapGlyphs API call. */
	static readonly opGetMapGlyphs: string[] = ["geo:GetMapGlyphs"];
	/** IAM actions required for the GetMapSprites API call. */
	static readonly opGetMapSprites: string[] = ["geo:GetMapSprites"];
	/** IAM actions required for the GetMapStyleDescriptor API call. */
	static readonly opGetMapStyleDescriptor: string[] = [
		"geo:GetMapStyleDescriptor",
	];
	/** IAM actions required for the GetMapTile API call. */
	static readonly opGetMapTile: string[] = ["geo:GetMapTile"];
	/** IAM actions required for the GetPlace API call. */
	static readonly opGetPlace: string[] = ["geo:GetPlace"];
	/** IAM actions required for the ListDevicePositions API call. */
	static readonly ListDevicePositions: string[] = ["geo:ListDevicePositions"];
	/** IAM actions required for the ListGeofenceCollections API call. */
	static readonly ListGeofenceCollections: string[] = [
		"geo:ListGeofenceCollections",
	];
	/** IAM actions required for the ListGeofences API call. */
	static readonly ListGeofences: string[] = ["geo:ListGeofences"];
	/** IAM actions required for the ListJobs API call. */
	static readonly ListJobs: string[] = ["geo:ListJobs"];
	/** IAM actions required for the ListKeys API call. */
	static readonly ListKeys: string[] = ["geo:ListKeys"];
	/** IAM actions required for the ListMaps API call. */
	static readonly ListMaps: string[] = ["geo:ListMaps"];
	/** IAM actions required for the ListPlaceIndexes API call. */
	static readonly ListPlaceIndexes: string[] = ["geo:ListPlaceIndexes"];
	/** IAM actions required for the ListRouteCalculators API call. */
	static readonly ListRouteCalculators: string[] = ["geo:ListRouteCalculators"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["geo:ListTagsForResource"];
	/** IAM actions required for the ListTrackerConsumers API call. */
	static readonly ListTrackerConsumers: string[] = ["geo:ListTrackerConsumers"];
	/** IAM actions required for the ListTrackers API call. */
	static readonly ListTrackers: string[] = ["geo:ListTrackers"];
	/** IAM actions required for the PutGeofence API call. */
	static readonly PutGeofence: string[] = ["geo:PutGeofence"];
	/** IAM actions required for the SearchPlaceIndexForPosition API call. */
	static readonly SearchPlaceIndexForPosition: string[] = [
		"geo:SearchPlaceIndexForPosition",
	];
	/** IAM actions required for the SearchPlaceIndexForSuggestions API call. */
	static readonly SearchPlaceIndexForSuggestions: string[] = [
		"geo:SearchPlaceIndexForSuggestions",
	];
	/** IAM actions required for the SearchPlaceIndexForText API call. */
	static readonly SearchPlaceIndexForText: string[] = [
		"geo:SearchPlaceIndexForText",
	];
	/** IAM actions required for the StartJob API call. */
	static readonly StartJob: string[] = [
		"iam:PassRole",
		"geo:StartJob",
		"geo:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["geo:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["geo:UntagResource"];
	/** IAM actions required for the UpdateGeofenceCollection API call. */
	static readonly UpdateGeofenceCollection: string[] = [
		"geo:UpdateGeofenceCollection",
	];
	/** IAM actions required for the UpdateKey API call. */
	static readonly UpdateKey: string[] = [
		"geo-places:Autocomplete",
		"geo-routes:CalculateIsolines",
		"geo:CalculateRoute",
		"geo:CalculateRouteMatrix",
		"geo-routes:CalculateRouteMatrix",
		"geo-routes:CalculateRoutes",
		"geo-places:Geocode",
		"geo:GetMapGlyphs",
		"geo:GetMapSprites",
		"geo:GetMapStyleDescriptor",
		"geo:GetMapTile",
		"geo:GetPlace",
		"geo-places:GetPlace",
		"geo-maps:GetStaticMap",
		"geo-maps:GetTile",
		"geo-routes:OptimizeWaypoints",
		"geo-places:ReverseGeocode",
		"geo-places:SearchNearby",
		"geo:SearchPlaceIndexForPosition",
		"geo:SearchPlaceIndexForSuggestions",
		"geo:SearchPlaceIndexForText",
		"geo-places:SearchText",
		"geo-routes:SnapToRoads",
		"geo-places:Suggest",
		"geo:UpdateKey",
	];
	/** IAM actions required for the UpdateMap API call. */
	static readonly UpdateMap: string[] = ["geo:UpdateMap"];
	/** IAM actions required for the UpdatePlaceIndex API call. */
	static readonly UpdatePlaceIndex: string[] = ["geo:UpdatePlaceIndex"];
	/** IAM actions required for the UpdateRouteCalculator API call. */
	static readonly UpdateRouteCalculator: string[] = [
		"geo:UpdateRouteCalculator",
	];
	/** IAM actions required for the UpdateTracker API call. */
	static readonly UpdateTracker: string[] = ["geo:UpdateTracker"];
	/** IAM actions required for the VerifyDevicePosition API call. */
	static readonly VerifyDevicePosition: string[] = ["geo:VerifyDevicePosition"];
}

/**
 * Condition key constants and builders for geo.
 */
export class GeoConditions {
	/** Condition keys applicable to the BatchDeleteDevicePositionHistory action. */
	static readonly BatchDeleteDevicePositionHistoryConditionKeys: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the BatchDeleteGeofence action. */
	static readonly BatchDeleteGeofenceConditionKeys: string[] = [
		"geo:GeofenceIds",
	];
	/** Condition keys applicable to the BatchGetDevicePosition action. */
	static readonly BatchGetDevicePositionConditionKeys: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the BatchPutGeofence action. */
	static readonly BatchPutGeofenceConditionKeys: string[] = ["geo:GeofenceIds"];
	/** Condition keys applicable to the BatchUpdateDevicePosition action. */
	static readonly BatchUpdateDevicePositionConditionKeys: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the CreateGeofenceCollection action. */
	static readonly CreateGeofenceCollectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKey action. */
	static readonly CreateKeyConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMap action. */
	static readonly CreateMapConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePlaceIndex action. */
	static readonly CreatePlaceIndexConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouteCalculator action. */
	static readonly CreateRouteCalculatorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTracker action. */
	static readonly CreateTrackerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDevicePosition action. */
	static readonly actionGetDevicePositionConditionKeys: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the GetDevicePositionHistory action. */
	static readonly actionGetDevicePositionHistoryConditionKeys: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the GetGeofence action. */
	static readonly actionGetGeofenceConditionKeys: string[] = [
		"geo:GeofenceIds",
	];
	/** Condition keys applicable to the PutGeofence action. */
	static readonly PutGeofenceConditionKeys: string[] = ["geo:GeofenceIds"];
	/** Condition keys applicable to the StartJob action. */
	static readonly StartJobConditionKeys: string[] = [
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
	/** Condition keys applicable to the VerifyDevicePosition action. */
	static readonly VerifyDevicePositionConditionKeys: string[] = [
		"geo:DeviceIds",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: geo:DeviceIds (ArrayOfString) */
	static readonly DEVICE_IDS = "geo:DeviceIds";
	/** Condition key: geo:GeofenceIds (ArrayOfString) */
	static readonly GEOFENCE_IDS = "geo:GeofenceIds";

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
	 * Generates a condition block for `geo:DeviceIds`.
	 */
	static deviceIds(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "geo:DeviceIds": values } };
	}

	/**
	 * Generates a condition block for `geo:GeofenceIds`.
	 */
	static geofenceIds(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "geo:GeofenceIds": values } };
	}
}
