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
	static readonly AUTOCOMPLETE = "geo-places:Autocomplete";
	/** [Read] geo-places:Geocode */
	static readonly GEOCODE = "geo-places:Geocode";
	/** [Read] geo-places:GetPlace */
	static readonly GET_PLACE = "geo-places:GetPlace";
	/** [Read] geo-places:ReverseGeocode */
	static readonly REVERSE_GEOCODE = "geo-places:ReverseGeocode";
	/** [Read] geo-places:SearchNearby */
	static readonly SEARCH_NEARBY = "geo-places:SearchNearby";
	/** [Read] geo-places:SearchText */
	static readonly SEARCH_TEXT = "geo-places:SearchText";
	/** [Read] geo-places:Suggest */
	static readonly SUGGEST = "geo-places:Suggest";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GeoPlacesActions.AUTOCOMPLETE,
		GeoPlacesActions.GEOCODE,
		GeoPlacesActions.GET_PLACE,
		GeoPlacesActions.REVERSE_GEOCODE,
		GeoPlacesActions.SEARCH_NEARBY,
		GeoPlacesActions.SEARCH_TEXT,
		GeoPlacesActions.SUGGEST,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const ProviderArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):geo-places:(?<region>[^:]*)::provider/default$",
);

/**
 * ARN builders, validators, and parsers for geo-places resources.
 */
export class GeoPlacesResources {
	/**
	 * Builds an ARN for the provider resource.
	 */
	static provider(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProviderArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static readonly AUTOCOMPLETE: string[] = ["geo-places:Autocomplete"];
	/** IAM actions required for the Geocode API call. */
	static readonly GEOCODE: string[] = ["geo-places:Geocode"];
	/** IAM actions required for the GetPlace API call. */
	static readonly GET_PLACE: string[] = ["geo-places:GetPlace"];
	/** IAM actions required for the ReverseGeocode API call. */
	static readonly REVERSE_GEOCODE: string[] = ["geo-places:ReverseGeocode"];
	/** IAM actions required for the SearchNearby API call. */
	static readonly SEARCH_NEARBY: string[] = ["geo-places:SearchNearby"];
	/** IAM actions required for the SearchText API call. */
	static readonly SEARCH_TEXT: string[] = ["geo-places:SearchText"];
	/** IAM actions required for the Suggest API call. */
	static readonly SUGGEST: string[] = ["geo-places:Suggest"];
}
