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
	static readonly actionGetStaticMap = "geo-maps:GetStaticMap";
	/** [Read] geo-maps:GetTile */
	static readonly actionGetTile = "geo-maps:GetTile";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GeoMapsActions.actionGetStaticMap,
		GeoMapsActions.actionGetTile,
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
export interface GeoMapsProviderArnProps {
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
export interface GeoMapsProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const ProviderArnRegex =
	/^arn:(?<partition>[^:]+):geo-maps:(?<region>[^:]*)::provider\/default$/;

/**
 * ARN builders, validators, and parsers for geo-maps resources.
 */
export class GeoMapsResources {
	/**
	 * Builds an ARN for the provider resource.
	 */
	static provider(props: GeoMapsProviderArnProps): string {
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
	static parseProviderArn(arn: string): GeoMapsProviderArnComponents {
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
	static readonly opGetGlyphs: string[] = [];
	/** IAM actions required for the GetSprites API call. */
	static readonly opGetSprites: string[] = [];
	/** IAM actions required for the GetStaticMap API call. */
	static readonly opGetStaticMap: string[] = ["geo-maps:GetStaticMap"];
	/** IAM actions required for the GetStyleDescriptor API call. */
	static readonly opGetStyleDescriptor: string[] = [];
	/** IAM actions required for the GetTile API call. */
	static readonly opGetTile: string[] = ["geo-maps:GetTile"];
}
