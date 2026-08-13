// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/geo-places.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the geo-places service.
 */
export class GeoPlacesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "geo-places";

	/** [Read] geo-places:Autocomplete */
	static readonly Autocomplete = "geo-places:Autocomplete";
	/** [Read] geo-places:Geocode */
	static readonly Geocode = "geo-places:Geocode";
	/** [Read] geo-places:GetPlace */
	static readonly actionGetPlace = "geo-places:GetPlace";
	/** [Read] geo-places:ReverseGeocode */
	static readonly ReverseGeocode = "geo-places:ReverseGeocode";
	/** [Read] geo-places:SearchNearby */
	static readonly SearchNearby = "geo-places:SearchNearby";
	/** [Read] geo-places:SearchText */
	static readonly SearchText = "geo-places:SearchText";
	/** [Read] geo-places:Suggest */
	static readonly Suggest = "geo-places:Suggest";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GeoPlacesActions.Autocomplete,
		GeoPlacesActions.Geocode,
		GeoPlacesActions.actionGetPlace,
		GeoPlacesActions.ReverseGeocode,
		GeoPlacesActions.SearchNearby,
		GeoPlacesActions.SearchText,
		GeoPlacesActions.Suggest,
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
export interface GeoPlacesProviderArnProps {
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
export interface GeoPlacesProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const ProviderArnRegex =
	/^arn:(?<partition>[^:]+):geo-places:(?<region>[^:]*)::provider\/default$/;

/**
 * ARN builders, validators, and parsers for geo-places resources.
 */
export class GeoPlacesResources {
	/**
	 * Builds an ARN for the provider resource.
	 */
	static provider(props: GeoPlacesProviderArnProps): string {
		return `arn:${props.partition ?? "aws"}:geo-places:${props.region ?? "*"}::provider/default`;
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
	static parseProviderArn(arn: string): GeoPlacesProviderArnComponents {
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
 * API operation to required IAM actions mapping for geo-places.
 */
export class GeoPlacesOperations {
	/** IAM actions required for the Autocomplete API call. */
	static readonly Autocomplete: string[] = ["geo-places:Autocomplete"];
	/** IAM actions required for the Geocode API call. */
	static readonly Geocode: string[] = ["geo-places:Geocode"];
	/** IAM actions required for the GetPlace API call. */
	static readonly opGetPlace: string[] = ["geo-places:GetPlace"];
	/** IAM actions required for the ReverseGeocode API call. */
	static readonly ReverseGeocode: string[] = ["geo-places:ReverseGeocode"];
	/** IAM actions required for the SearchNearby API call. */
	static readonly SearchNearby: string[] = ["geo-places:SearchNearby"];
	/** IAM actions required for the SearchText API call. */
	static readonly SearchText: string[] = ["geo-places:SearchText"];
	/** IAM actions required for the Suggest API call. */
	static readonly Suggest: string[] = ["geo-places:Suggest"];
}
