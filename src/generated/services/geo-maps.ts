// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/geo-maps.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the geo-maps service.
 */
export class GeoMapsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "geo-maps";

	/** [Read] geo-maps:GetStaticMap */
	static readonly GET_STATIC_MAP = "geo-maps:GetStaticMap";
	/** [Read] geo-maps:GetTile */
	static readonly GET_TILE = "geo-maps:GetTile";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		GeoMapsActions.GET_STATIC_MAP,
		GeoMapsActions.GET_TILE,
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
	"^arn:(?<partition>[^:]+):geo-maps:(?<region>[^:]*)::provider/default$",
);

/**
 * ARN builders, validators, and parsers for geo-maps resources.
 */
export class GeoMapsResources {
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
		return `arn:${props.partition ?? "aws"}:geo-maps:${props.region ?? "*"}::provider/default`;
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
 * API operation to required IAM actions mapping for geo-maps.
 */
export class GeoMapsOperations {
	/** IAM actions required for the GetGlyphs API call. */
	static readonly GET_GLYPHS: string[] = [];
	/** IAM actions required for the GetSprites API call. */
	static readonly GET_SPRITES: string[] = [];
	/** IAM actions required for the GetStaticMap API call. */
	static readonly GET_STATIC_MAP: string[] = ["geo-maps:GetStaticMap"];
	/** IAM actions required for the GetStyleDescriptor API call. */
	static readonly GET_STYLE_DESCRIPTOR: string[] = [];
	/** IAM actions required for the GetTile API call. */
	static readonly GET_TILE: string[] = ["geo-maps:GetTile"];
}
