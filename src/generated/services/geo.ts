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
	static readonly ASSOCIATE_TRACKER_CONSUMER = "geo:AssociateTrackerConsumer";
	/** [Write] geo:BatchDeleteDevicePositionHistory */
	static readonly BATCH_DELETE_DEVICE_POSITION_HISTORY =
		"geo:BatchDeleteDevicePositionHistory";
	/** [Write] geo:BatchDeleteGeofence */
	static readonly BATCH_DELETE_GEOFENCE = "geo:BatchDeleteGeofence";
	/** [Write] geo:BatchEvaluateGeofences */
	static readonly BATCH_EVALUATE_GEOFENCES = "geo:BatchEvaluateGeofences";
	/** [Read] geo:BatchGetDevicePosition */
	static readonly BATCH_GET_DEVICE_POSITION = "geo:BatchGetDevicePosition";
	/** [Write] geo:BatchPutGeofence */
	static readonly BATCH_PUT_GEOFENCE = "geo:BatchPutGeofence";
	/** [Write] geo:BatchUpdateDevicePosition */
	static readonly BATCH_UPDATE_DEVICE_POSITION =
		"geo:BatchUpdateDevicePosition";
	/** [Read] geo:CalculateRoute */
	static readonly CALCULATE_ROUTE = "geo:CalculateRoute";
	/** [Read] geo:CalculateRouteMatrix */
	static readonly CALCULATE_ROUTE_MATRIX = "geo:CalculateRouteMatrix";
	/** [Write] geo:CancelJob */
	static readonly CANCEL_JOB = "geo:CancelJob";
	/** [Write] geo:CreateGeofenceCollection */
	static readonly CREATE_GEOFENCE_COLLECTION = "geo:CreateGeofenceCollection";
	/** [Write] geo:CreateKey */
	static readonly CREATE_KEY = "geo:CreateKey";
	/** [Write] geo:CreateMap */
	static readonly CREATE_MAP = "geo:CreateMap";
	/** [Write] geo:CreatePlaceIndex */
	static readonly CREATE_PLACE_INDEX = "geo:CreatePlaceIndex";
	/** [Write] geo:CreateRouteCalculator */
	static readonly CREATE_ROUTE_CALCULATOR = "geo:CreateRouteCalculator";
	/** [Write] geo:CreateTracker */
	static readonly CREATE_TRACKER = "geo:CreateTracker";
	/** [Write] geo:DeleteGeofenceCollection */
	static readonly DELETE_GEOFENCE_COLLECTION = "geo:DeleteGeofenceCollection";
	/** [Write] geo:DeleteKey */
	static readonly DELETE_KEY = "geo:DeleteKey";
	/** [Write] geo:DeleteMap */
	static readonly DELETE_MAP = "geo:DeleteMap";
	/** [Write] geo:DeletePlaceIndex */
	static readonly DELETE_PLACE_INDEX = "geo:DeletePlaceIndex";
	/** [Write] geo:DeleteRouteCalculator */
	static readonly DELETE_ROUTE_CALCULATOR = "geo:DeleteRouteCalculator";
	/** [Write] geo:DeleteTracker */
	static readonly DELETE_TRACKER = "geo:DeleteTracker";
	/** [Read] geo:DescribeGeofenceCollection */
	static readonly DESCRIBE_GEOFENCE_COLLECTION =
		"geo:DescribeGeofenceCollection";
	/** [Read] geo:DescribeKey */
	static readonly DESCRIBE_KEY = "geo:DescribeKey";
	/** [Read] geo:DescribeMap */
	static readonly DESCRIBE_MAP = "geo:DescribeMap";
	/** [Read] geo:DescribePlaceIndex */
	static readonly DESCRIBE_PLACE_INDEX = "geo:DescribePlaceIndex";
	/** [Read] geo:DescribeRouteCalculator */
	static readonly DESCRIBE_ROUTE_CALCULATOR = "geo:DescribeRouteCalculator";
	/** [Read] geo:DescribeTracker */
	static readonly DESCRIBE_TRACKER = "geo:DescribeTracker";
	/** [Write] geo:DisassociateTrackerConsumer */
	static readonly DISASSOCIATE_TRACKER_CONSUMER =
		"geo:DisassociateTrackerConsumer";
	/** [Read] geo:ForecastGeofenceEvents */
	static readonly FORECAST_GEOFENCE_EVENTS = "geo:ForecastGeofenceEvents";
	/** [Read] geo:GetDevicePosition */
	static readonly GET_DEVICE_POSITION = "geo:GetDevicePosition";
	/** [Read] geo:GetDevicePositionHistory */
	static readonly GET_DEVICE_POSITION_HISTORY = "geo:GetDevicePositionHistory";
	/** [Read] geo:GetGeofence */
	static readonly GET_GEOFENCE = "geo:GetGeofence";
	/** [Read] geo:GetJob */
	static readonly GET_JOB = "geo:GetJob";
	/** [Read] geo:GetMapGlyphs */
	static readonly GET_MAP_GLYPHS = "geo:GetMapGlyphs";
	/** [Read] geo:GetMapSprites */
	static readonly GET_MAP_SPRITES = "geo:GetMapSprites";
	/** [Read] geo:GetMapStyleDescriptor */
	static readonly GET_MAP_STYLE_DESCRIPTOR = "geo:GetMapStyleDescriptor";
	/** [Read] geo:GetMapTile */
	static readonly GET_MAP_TILE = "geo:GetMapTile";
	/** [Read] geo:GetPlace */
	static readonly GET_PLACE = "geo:GetPlace";
	/** [Read] geo:ListDevicePositions */
	static readonly LIST_DEVICE_POSITIONS = "geo:ListDevicePositions";
	/** [List] geo:ListGeofenceCollections */
	static readonly LIST_GEOFENCE_COLLECTIONS = "geo:ListGeofenceCollections";
	/** [Read] geo:ListGeofences */
	static readonly LIST_GEOFENCES = "geo:ListGeofences";
	/** [List] geo:ListJobs */
	static readonly LIST_JOBS = "geo:ListJobs";
	/** [List] geo:ListKeys */
	static readonly LIST_KEYS = "geo:ListKeys";
	/** [List] geo:ListMaps */
	static readonly LIST_MAPS = "geo:ListMaps";
	/** [List] geo:ListPlaceIndexes */
	static readonly LIST_PLACE_INDEXES = "geo:ListPlaceIndexes";
	/** [List] geo:ListRouteCalculators */
	static readonly LIST_ROUTE_CALCULATORS = "geo:ListRouteCalculators";
	/** [Read] geo:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "geo:ListTagsForResource";
	/** [Read] geo:ListTrackerConsumers */
	static readonly LIST_TRACKER_CONSUMERS = "geo:ListTrackerConsumers";
	/** [List] geo:ListTrackers */
	static readonly LIST_TRACKERS = "geo:ListTrackers";
	/** [Write] geo:PutGeofence */
	static readonly PUT_GEOFENCE = "geo:PutGeofence";
	/** [Read] geo:SearchPlaceIndexForPosition */
	static readonly SEARCH_PLACE_INDEX_FOR_POSITION =
		"geo:SearchPlaceIndexForPosition";
	/** [Read] geo:SearchPlaceIndexForSuggestions */
	static readonly SEARCH_PLACE_INDEX_FOR_SUGGESTIONS =
		"geo:SearchPlaceIndexForSuggestions";
	/** [Read] geo:SearchPlaceIndexForText */
	static readonly SEARCH_PLACE_INDEX_FOR_TEXT = "geo:SearchPlaceIndexForText";
	/** [Write] geo:StartJob */
	static readonly START_JOB = "geo:StartJob";
	/** [Tagging] geo:TagResource */
	static readonly TAG_RESOURCE = "geo:TagResource";
	/** [Tagging] geo:UntagResource */
	static readonly UNTAG_RESOURCE = "geo:UntagResource";
	/** [Write] geo:UpdateGeofenceCollection */
	static readonly UPDATE_GEOFENCE_COLLECTION = "geo:UpdateGeofenceCollection";
	/** [Write] geo:UpdateKey */
	static readonly UPDATE_KEY = "geo:UpdateKey";
	/** [Write] geo:UpdateMap */
	static readonly UPDATE_MAP = "geo:UpdateMap";
	/** [Write] geo:UpdatePlaceIndex */
	static readonly UPDATE_PLACE_INDEX = "geo:UpdatePlaceIndex";
	/** [Write] geo:UpdateRouteCalculator */
	static readonly UPDATE_ROUTE_CALCULATOR = "geo:UpdateRouteCalculator";
	/** [Write] geo:UpdateTracker */
	static readonly UPDATE_TRACKER = "geo:UpdateTracker";
	/** [Read] geo:VerifyDevicePosition */
	static readonly VERIFY_DEVICE_POSITION = "geo:VerifyDevicePosition";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GeoActions.BATCH_GET_DEVICE_POSITION,
		GeoActions.CALCULATE_ROUTE,
		GeoActions.CALCULATE_ROUTE_MATRIX,
		GeoActions.DESCRIBE_GEOFENCE_COLLECTION,
		GeoActions.DESCRIBE_KEY,
		GeoActions.DESCRIBE_MAP,
		GeoActions.DESCRIBE_PLACE_INDEX,
		GeoActions.DESCRIBE_ROUTE_CALCULATOR,
		GeoActions.DESCRIBE_TRACKER,
		GeoActions.FORECAST_GEOFENCE_EVENTS,
		GeoActions.GET_DEVICE_POSITION,
		GeoActions.GET_DEVICE_POSITION_HISTORY,
		GeoActions.GET_GEOFENCE,
		GeoActions.GET_JOB,
		GeoActions.GET_MAP_GLYPHS,
		GeoActions.GET_MAP_SPRITES,
		GeoActions.GET_MAP_STYLE_DESCRIPTOR,
		GeoActions.GET_MAP_TILE,
		GeoActions.GET_PLACE,
		GeoActions.LIST_DEVICE_POSITIONS,
		GeoActions.LIST_GEOFENCES,
		GeoActions.LIST_TAGS_FOR_RESOURCE,
		GeoActions.LIST_TRACKER_CONSUMERS,
		GeoActions.SEARCH_PLACE_INDEX_FOR_POSITION,
		GeoActions.SEARCH_PLACE_INDEX_FOR_SUGGESTIONS,
		GeoActions.SEARCH_PLACE_INDEX_FOR_TEXT,
		GeoActions.VERIFY_DEVICE_POSITION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		GeoActions.ASSOCIATE_TRACKER_CONSUMER,
		GeoActions.BATCH_DELETE_DEVICE_POSITION_HISTORY,
		GeoActions.BATCH_DELETE_GEOFENCE,
		GeoActions.BATCH_EVALUATE_GEOFENCES,
		GeoActions.BATCH_PUT_GEOFENCE,
		GeoActions.BATCH_UPDATE_DEVICE_POSITION,
		GeoActions.CANCEL_JOB,
		GeoActions.CREATE_GEOFENCE_COLLECTION,
		GeoActions.CREATE_KEY,
		GeoActions.CREATE_MAP,
		GeoActions.CREATE_PLACE_INDEX,
		GeoActions.CREATE_ROUTE_CALCULATOR,
		GeoActions.CREATE_TRACKER,
		GeoActions.DELETE_GEOFENCE_COLLECTION,
		GeoActions.DELETE_KEY,
		GeoActions.DELETE_MAP,
		GeoActions.DELETE_PLACE_INDEX,
		GeoActions.DELETE_ROUTE_CALCULATOR,
		GeoActions.DELETE_TRACKER,
		GeoActions.DISASSOCIATE_TRACKER_CONSUMER,
		GeoActions.PUT_GEOFENCE,
		GeoActions.START_JOB,
		GeoActions.UPDATE_GEOFENCE_COLLECTION,
		GeoActions.UPDATE_KEY,
		GeoActions.UPDATE_MAP,
		GeoActions.UPDATE_PLACE_INDEX,
		GeoActions.UPDATE_ROUTE_CALCULATOR,
		GeoActions.UPDATE_TRACKER,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		GeoActions.LIST_GEOFENCE_COLLECTIONS,
		GeoActions.LIST_JOBS,
		GeoActions.LIST_KEYS,
		GeoActions.LIST_MAPS,
		GeoActions.LIST_PLACE_INDEXES,
		GeoActions.LIST_ROUTE_CALCULATORS,
		GeoActions.LIST_TRACKERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		GeoActions.TAG_RESOURCE,
		GeoActions.UNTAG_RESOURCE,
	];
}

const APIKeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):api-key/(?<keyName>[^:/?]+)$",
);
const GeofenceCollectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):geofence-collection/(?<geofenceCollectionName>[^:/?]+)$",
);
const JobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):job/(?<jobId>[^:/?]+)$",
);
const MapArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):map/(?<mapName>[^:/?]+)$",
);
const PlaceIndexArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):place-index/(?<indexName>[^:/?]+)$",
);
const RouteCalculatorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):route-calculator/(?<calculatorName>[^:/?]+)$",
);
const TrackerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo:(?<region>[^:]*):(?<account>[^:]*):tracker/(?<trackerName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for geo resources.
 */
export class GeoResources {
	/**
	 * Builds an ARN for the api-key resource.
	 */
	static apiKey(props: {
		/** The KeyName component of the ARN. */
		readonly keyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAPIKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		keyName: string;
	} {
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
	static geofenceCollection(props: {
		/** The GeofenceCollectionName component of the ARN. */
		readonly geofenceCollectionName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseGeofenceCollectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		geofenceCollectionName: string;
	} {
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
	static job(props: {
		/** The JobId component of the ARN. */
		readonly jobId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		jobId: string;
	} {
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
	static map(props: {
		/** The MapName component of the ARN. */
		readonly mapName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseMapArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		mapName: string;
	} {
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
	static placeIndex(props: {
		/** The IndexName component of the ARN. */
		readonly indexName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePlaceIndexArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		indexName: string;
	} {
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
	static routeCalculator(props: {
		/** The CalculatorName component of the ARN. */
		readonly calculatorName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseRouteCalculatorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		calculatorName: string;
	} {
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
	static tracker(props: {
		/** The TrackerName component of the ARN. */
		readonly trackerName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseTrackerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		trackerName: string;
	} {
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
	static readonly ASSOCIATE_TRACKER_CONSUMER: string[] = [
		"geo:AssociateTrackerConsumer",
	];
	/** IAM actions required for the BatchDeleteDevicePositionHistory API call. */
	static readonly BATCH_DELETE_DEVICE_POSITION_HISTORY: string[] = [
		"geo:BatchDeleteDevicePositionHistory",
	];
	/** IAM actions required for the BatchDeleteGeofence API call. */
	static readonly BATCH_DELETE_GEOFENCE: string[] = ["geo:BatchDeleteGeofence"];
	/** IAM actions required for the BatchEvaluateGeofences API call. */
	static readonly BATCH_EVALUATE_GEOFENCES: string[] = [
		"geo:BatchEvaluateGeofences",
	];
	/** IAM actions required for the BatchGetDevicePosition API call. */
	static readonly BATCH_GET_DEVICE_POSITION: string[] = [
		"geo:BatchGetDevicePosition",
	];
	/** IAM actions required for the BatchPutGeofence API call. */
	static readonly BATCH_PUT_GEOFENCE: string[] = ["geo:BatchPutGeofence"];
	/** IAM actions required for the BatchUpdateDevicePosition API call. */
	static readonly BATCH_UPDATE_DEVICE_POSITION: string[] = [
		"geo:BatchUpdateDevicePosition",
	];
	/** IAM actions required for the CalculateRoute API call. */
	static readonly CALCULATE_ROUTE: string[] = ["geo:CalculateRoute"];
	/** IAM actions required for the CalculateRouteMatrix API call. */
	static readonly CALCULATE_ROUTE_MATRIX: string[] = [
		"geo:CalculateRouteMatrix",
	];
	/** IAM actions required for the CancelJob API call. */
	static readonly CANCEL_JOB: string[] = ["geo:CancelJob"];
	/** IAM actions required for the CreateGeofenceCollection API call. */
	static readonly CREATE_GEOFENCE_COLLECTION: string[] = [
		"geo:CreateGeofenceCollection",
		"geo:TagResource",
	];
	/** IAM actions required for the CreateKey API call. */
	static readonly CREATE_KEY: string[] = [
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
	static readonly CREATE_MAP: string[] = ["geo:CreateMap", "geo:TagResource"];
	/** IAM actions required for the CreatePlaceIndex API call. */
	static readonly CREATE_PLACE_INDEX: string[] = [
		"geo:CreatePlaceIndex",
		"geo:TagResource",
	];
	/** IAM actions required for the CreateRouteCalculator API call. */
	static readonly CREATE_ROUTE_CALCULATOR: string[] = [
		"geo:CreateRouteCalculator",
		"geo:TagResource",
	];
	/** IAM actions required for the CreateTracker API call. */
	static readonly CREATE_TRACKER: string[] = [
		"geo:CreateTracker",
		"geo:TagResource",
	];
	/** IAM actions required for the DeleteGeofenceCollection API call. */
	static readonly DELETE_GEOFENCE_COLLECTION: string[] = [
		"geo:DeleteGeofenceCollection",
	];
	/** IAM actions required for the DeleteKey API call. */
	static readonly DELETE_KEY: string[] = ["geo:DeleteKey"];
	/** IAM actions required for the DeleteMap API call. */
	static readonly DELETE_MAP: string[] = ["geo:DeleteMap"];
	/** IAM actions required for the DeletePlaceIndex API call. */
	static readonly DELETE_PLACE_INDEX: string[] = ["geo:DeletePlaceIndex"];
	/** IAM actions required for the DeleteRouteCalculator API call. */
	static readonly DELETE_ROUTE_CALCULATOR: string[] = [
		"geo:DeleteRouteCalculator",
	];
	/** IAM actions required for the DeleteTracker API call. */
	static readonly DELETE_TRACKER: string[] = ["geo:DeleteTracker"];
	/** IAM actions required for the DescribeGeofenceCollection API call. */
	static readonly DESCRIBE_GEOFENCE_COLLECTION: string[] = [
		"geo:DescribeGeofenceCollection",
	];
	/** IAM actions required for the DescribeKey API call. */
	static readonly DESCRIBE_KEY: string[] = ["geo:DescribeKey"];
	/** IAM actions required for the DescribeMap API call. */
	static readonly DESCRIBE_MAP: string[] = ["geo:DescribeMap"];
	/** IAM actions required for the DescribePlaceIndex API call. */
	static readonly DESCRIBE_PLACE_INDEX: string[] = ["geo:DescribePlaceIndex"];
	/** IAM actions required for the DescribeRouteCalculator API call. */
	static readonly DESCRIBE_ROUTE_CALCULATOR: string[] = [
		"geo:DescribeRouteCalculator",
	];
	/** IAM actions required for the DescribeTracker API call. */
	static readonly DESCRIBE_TRACKER: string[] = ["geo:DescribeTracker"];
	/** IAM actions required for the DisassociateTrackerConsumer API call. */
	static readonly DISASSOCIATE_TRACKER_CONSUMER: string[] = [
		"geo:DisassociateTrackerConsumer",
	];
	/** IAM actions required for the ForecastGeofenceEvents API call. */
	static readonly FORECAST_GEOFENCE_EVENTS: string[] = [
		"geo:ForecastGeofenceEvents",
	];
	/** IAM actions required for the GetDevicePosition API call. */
	static readonly GET_DEVICE_POSITION: string[] = ["geo:GetDevicePosition"];
	/** IAM actions required for the GetDevicePositionHistory API call. */
	static readonly GET_DEVICE_POSITION_HISTORY: string[] = [
		"geo:GetDevicePositionHistory",
	];
	/** IAM actions required for the GetGeofence API call. */
	static readonly GET_GEOFENCE: string[] = ["geo:GetGeofence"];
	/** IAM actions required for the GetJob API call. */
	static readonly GET_JOB: string[] = ["geo:GetJob"];
	/** IAM actions required for the GetMapGlyphs API call. */
	static readonly GET_MAP_GLYPHS: string[] = ["geo:GetMapGlyphs"];
	/** IAM actions required for the GetMapSprites API call. */
	static readonly GET_MAP_SPRITES: string[] = ["geo:GetMapSprites"];
	/** IAM actions required for the GetMapStyleDescriptor API call. */
	static readonly GET_MAP_STYLE_DESCRIPTOR: string[] = [
		"geo:GetMapStyleDescriptor",
	];
	/** IAM actions required for the GetMapTile API call. */
	static readonly GET_MAP_TILE: string[] = ["geo:GetMapTile"];
	/** IAM actions required for the GetPlace API call. */
	static readonly GET_PLACE: string[] = ["geo:GetPlace"];
	/** IAM actions required for the ListDevicePositions API call. */
	static readonly LIST_DEVICE_POSITIONS: string[] = ["geo:ListDevicePositions"];
	/** IAM actions required for the ListGeofenceCollections API call. */
	static readonly LIST_GEOFENCE_COLLECTIONS: string[] = [
		"geo:ListGeofenceCollections",
	];
	/** IAM actions required for the ListGeofences API call. */
	static readonly LIST_GEOFENCES: string[] = ["geo:ListGeofences"];
	/** IAM actions required for the ListJobs API call. */
	static readonly LIST_JOBS: string[] = ["geo:ListJobs"];
	/** IAM actions required for the ListKeys API call. */
	static readonly LIST_KEYS: string[] = ["geo:ListKeys"];
	/** IAM actions required for the ListMaps API call. */
	static readonly LIST_MAPS: string[] = ["geo:ListMaps"];
	/** IAM actions required for the ListPlaceIndexes API call. */
	static readonly LIST_PLACE_INDEXES: string[] = ["geo:ListPlaceIndexes"];
	/** IAM actions required for the ListRouteCalculators API call. */
	static readonly LIST_ROUTE_CALCULATORS: string[] = [
		"geo:ListRouteCalculators",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"geo:ListTagsForResource",
	];
	/** IAM actions required for the ListTrackerConsumers API call. */
	static readonly LIST_TRACKER_CONSUMERS: string[] = [
		"geo:ListTrackerConsumers",
	];
	/** IAM actions required for the ListTrackers API call. */
	static readonly LIST_TRACKERS: string[] = ["geo:ListTrackers"];
	/** IAM actions required for the PutGeofence API call. */
	static readonly PUT_GEOFENCE: string[] = ["geo:PutGeofence"];
	/** IAM actions required for the SearchPlaceIndexForPosition API call. */
	static readonly SEARCH_PLACE_INDEX_FOR_POSITION: string[] = [
		"geo:SearchPlaceIndexForPosition",
	];
	/** IAM actions required for the SearchPlaceIndexForSuggestions API call. */
	static readonly SEARCH_PLACE_INDEX_FOR_SUGGESTIONS: string[] = [
		"geo:SearchPlaceIndexForSuggestions",
	];
	/** IAM actions required for the SearchPlaceIndexForText API call. */
	static readonly SEARCH_PLACE_INDEX_FOR_TEXT: string[] = [
		"geo:SearchPlaceIndexForText",
	];
	/** IAM actions required for the StartJob API call. */
	static readonly START_JOB: string[] = [
		"iam:PassRole",
		"geo:StartJob",
		"geo:TagResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["geo:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["geo:UntagResource"];
	/** IAM actions required for the UpdateGeofenceCollection API call. */
	static readonly UPDATE_GEOFENCE_COLLECTION: string[] = [
		"geo:UpdateGeofenceCollection",
	];
	/** IAM actions required for the UpdateKey API call. */
	static readonly UPDATE_KEY: string[] = [
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
	static readonly UPDATE_MAP: string[] = ["geo:UpdateMap"];
	/** IAM actions required for the UpdatePlaceIndex API call. */
	static readonly UPDATE_PLACE_INDEX: string[] = ["geo:UpdatePlaceIndex"];
	/** IAM actions required for the UpdateRouteCalculator API call. */
	static readonly UPDATE_ROUTE_CALCULATOR: string[] = [
		"geo:UpdateRouteCalculator",
	];
	/** IAM actions required for the UpdateTracker API call. */
	static readonly UPDATE_TRACKER: string[] = ["geo:UpdateTracker"];
	/** IAM actions required for the VerifyDevicePosition API call. */
	static readonly VERIFY_DEVICE_POSITION: string[] = [
		"geo:VerifyDevicePosition",
	];
}

/**
 * Condition key constants and builders for geo.
 */
export class GeoConditions {
	/** Condition keys applicable to the BatchDeleteDevicePositionHistory action. */
	static readonly BATCH_DELETE_DEVICE_POSITION_HISTORY_CONDITION_KEYS: string[] =
		["geo:DeviceIds"];
	/** Condition keys applicable to the BatchDeleteGeofence action. */
	static readonly BATCH_DELETE_GEOFENCE_CONDITION_KEYS: string[] = [
		"geo:GeofenceIds",
	];
	/** Condition keys applicable to the BatchGetDevicePosition action. */
	static readonly BATCH_GET_DEVICE_POSITION_CONDITION_KEYS: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the BatchPutGeofence action. */
	static readonly BATCH_PUT_GEOFENCE_CONDITION_KEYS: string[] = [
		"geo:GeofenceIds",
	];
	/** Condition keys applicable to the BatchUpdateDevicePosition action. */
	static readonly BATCH_UPDATE_DEVICE_POSITION_CONDITION_KEYS: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the CreateGeofenceCollection action. */
	static readonly CREATE_GEOFENCE_COLLECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateKey action. */
	static readonly CREATE_KEY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMap action. */
	static readonly CREATE_MAP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePlaceIndex action. */
	static readonly CREATE_PLACE_INDEX_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateRouteCalculator action. */
	static readonly CREATE_ROUTE_CALCULATOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTracker action. */
	static readonly CREATE_TRACKER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetDevicePosition action. */
	static readonly GET_DEVICE_POSITION_CONDITION_KEYS: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the GetDevicePositionHistory action. */
	static readonly GET_DEVICE_POSITION_HISTORY_CONDITION_KEYS: string[] = [
		"geo:DeviceIds",
	];
	/** Condition keys applicable to the GetGeofence action. */
	static readonly GET_GEOFENCE_CONDITION_KEYS: string[] = ["geo:GeofenceIds"];
	/** Condition keys applicable to the PutGeofence action. */
	static readonly PUT_GEOFENCE_CONDITION_KEYS: string[] = ["geo:GeofenceIds"];
	/** Condition keys applicable to the StartJob action. */
	static readonly START_JOB_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the VerifyDevicePosition action. */
	static readonly VERIFY_DEVICE_POSITION_CONDITION_KEYS: string[] = [
		"geo:DeviceIds",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
