// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/apiportal.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the apiportal service.
 */
export class ApiportalActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "apiportal";

	/** [Write] apiportal:AssociateManagedApis */
	static readonly AssociateManagedApis = "apiportal:AssociateManagedApis";
	/** [Write] apiportal:CreateManagedApi */
	static readonly CreateManagedApi = "apiportal:CreateManagedApi";
	/** [Write] apiportal:CreatePortal */
	static readonly CreatePortal = "apiportal:CreatePortal";
	/** [Write] apiportal:CreatePortalPreview */
	static readonly CreatePortalPreview = "apiportal:CreatePortalPreview";
	/** [Write] apiportal:CreateProduct */
	static readonly CreateProduct = "apiportal:CreateProduct";
	/** [Write] apiportal:CreateProductApiPage */
	static readonly CreateProductApiPage = "apiportal:CreateProductApiPage";
	/** [Write] apiportal:CreateProductPage */
	static readonly CreateProductPage = "apiportal:CreateProductPage";
	/** [Write] apiportal:DeleteDiscoveryConfiguration */
	static readonly DeleteDiscoveryConfiguration =
		"apiportal:DeleteDiscoveryConfiguration";
	/** [Write] apiportal:DeleteManagedApi */
	static readonly DeleteManagedApi = "apiportal:DeleteManagedApi";
	/** [Write] apiportal:DeleteOrganizationDiscoveryConfiguration */
	static readonly DeleteOrganizationDiscoveryConfiguration =
		"apiportal:DeleteOrganizationDiscoveryConfiguration";
	/** [Write] apiportal:DeletePortal */
	static readonly DeletePortal = "apiportal:DeletePortal";
	/** [Write] apiportal:DeleteProduct */
	static readonly DeleteProduct = "apiportal:DeleteProduct";
	/** [Write] apiportal:DeleteProductApiPage */
	static readonly DeleteProductApiPage = "apiportal:DeleteProductApiPage";
	/** [Write] apiportal:DeleteProductPage */
	static readonly DeleteProductPage = "apiportal:DeleteProductPage";
	/** [PermissionManagement] apiportal:DeleteProductSharingPolicy */
	static readonly DeleteProductSharingPolicy =
		"apiportal:DeleteProductSharingPolicy";
	/** [Write] apiportal:DisassociateManagedApis */
	static readonly DisassociateManagedApis = "apiportal:DisassociateManagedApis";
	/** [Read] apiportal:GetApiInventoryItem */
	static readonly actionGetApiInventoryItem = "apiportal:GetApiInventoryItem";
	/** [Read] apiportal:GetDiscoveryConfiguration */
	static readonly actionGetDiscoveryConfiguration =
		"apiportal:GetDiscoveryConfiguration";
	/** [Read] apiportal:GetManagedApi */
	static readonly actionGetManagedApi = "apiportal:GetManagedApi";
	/** [Read] apiportal:GetOrganizationDiscoveryConfiguration */
	static readonly actionGetOrganizationDiscoveryConfiguration =
		"apiportal:GetOrganizationDiscoveryConfiguration";
	/** [Read] apiportal:GetPortal */
	static readonly actionGetPortal = "apiportal:GetPortal";
	/** [Read] apiportal:GetProduct */
	static readonly actionGetProduct = "apiportal:GetProduct";
	/** [Read] apiportal:GetProductApiPage */
	static readonly actionGetProductApiPage = "apiportal:GetProductApiPage";
	/** [Read] apiportal:GetProductPage */
	static readonly actionGetProductPage = "apiportal:GetProductPage";
	/** [Read] apiportal:GetProductSharingPolicy */
	static readonly actionGetProductSharingPolicy =
		"apiportal:GetProductSharingPolicy";
	/** [List] apiportal:ListApiInventoryItems */
	static readonly ListApiInventoryItems = "apiportal:ListApiInventoryItems";
	/** [List] apiportal:ListDiscoveryStatuses */
	static readonly ListDiscoveryStatuses = "apiportal:ListDiscoveryStatuses";
	/** [List] apiportal:ListManagedApiEvents */
	static readonly ListManagedApiEvents = "apiportal:ListManagedApiEvents";
	/** [List] apiportal:ListManagedApis */
	static readonly ListManagedApis = "apiportal:ListManagedApis";
	/** [List] apiportal:ListPortals */
	static readonly ListPortals = "apiportal:ListPortals";
	/** [List] apiportal:ListProductApiPages */
	static readonly ListProductApiPages = "apiportal:ListProductApiPages";
	/** [List] apiportal:ListProductPages */
	static readonly ListProductPages = "apiportal:ListProductPages";
	/** [List] apiportal:ListProducts */
	static readonly ListProducts = "apiportal:ListProducts";
	/** [Read] apiportal:ListTagsForResource */
	static readonly ListTagsForResource = "apiportal:ListTagsForResource";
	/** [Write] apiportal:PutDiscoveryConfiguration */
	static readonly PutDiscoveryConfiguration =
		"apiportal:PutDiscoveryConfiguration";
	/** [Write] apiportal:PutOrganizationDiscoveryConfiguration */
	static readonly PutOrganizationDiscoveryConfiguration =
		"apiportal:PutOrganizationDiscoveryConfiguration";
	/** [PermissionManagement] apiportal:PutProductSharingPolicy */
	static readonly PutProductSharingPolicy = "apiportal:PutProductSharingPolicy";
	/** [Write] apiportal:StartDiscovery */
	static readonly StartDiscovery = "apiportal:StartDiscovery";
	/** [Write] apiportal:StopDiscovery */
	static readonly StopDiscovery = "apiportal:StopDiscovery";
	/** [Tagging] apiportal:TagResource */
	static readonly TagResource = "apiportal:TagResource";
	/** [Tagging] apiportal:UntagResource */
	static readonly UntagResource = "apiportal:UntagResource";
	/** [Write] apiportal:UpdatePortal */
	static readonly UpdatePortal = "apiportal:UpdatePortal";
	/** [Write] apiportal:UpdatePortalPublishStatus */
	static readonly UpdatePortalPublishStatus =
		"apiportal:UpdatePortalPublishStatus";
	/** [Write] apiportal:UpdateProduct */
	static readonly UpdateProduct = "apiportal:UpdateProduct";
	/** [Write] apiportal:UpdateProductApiPage */
	static readonly UpdateProductApiPage = "apiportal:UpdateProductApiPage";
	/** [Write] apiportal:UpdateProductPage */
	static readonly UpdateProductPage = "apiportal:UpdateProductPage";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApiportalActions.actionGetApiInventoryItem,
		ApiportalActions.actionGetDiscoveryConfiguration,
		ApiportalActions.actionGetManagedApi,
		ApiportalActions.actionGetOrganizationDiscoveryConfiguration,
		ApiportalActions.actionGetPortal,
		ApiportalActions.actionGetProduct,
		ApiportalActions.actionGetProductApiPage,
		ApiportalActions.actionGetProductPage,
		ApiportalActions.actionGetProductSharingPolicy,
		ApiportalActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApiportalActions.AssociateManagedApis,
		ApiportalActions.CreateManagedApi,
		ApiportalActions.CreatePortal,
		ApiportalActions.CreatePortalPreview,
		ApiportalActions.CreateProduct,
		ApiportalActions.CreateProductApiPage,
		ApiportalActions.CreateProductPage,
		ApiportalActions.DeleteDiscoveryConfiguration,
		ApiportalActions.DeleteManagedApi,
		ApiportalActions.DeleteOrganizationDiscoveryConfiguration,
		ApiportalActions.DeletePortal,
		ApiportalActions.DeleteProduct,
		ApiportalActions.DeleteProductApiPage,
		ApiportalActions.DeleteProductPage,
		ApiportalActions.DisassociateManagedApis,
		ApiportalActions.PutDiscoveryConfiguration,
		ApiportalActions.PutOrganizationDiscoveryConfiguration,
		ApiportalActions.StartDiscovery,
		ApiportalActions.StopDiscovery,
		ApiportalActions.UpdatePortal,
		ApiportalActions.UpdatePortalPublishStatus,
		ApiportalActions.UpdateProduct,
		ApiportalActions.UpdateProductApiPage,
		ApiportalActions.UpdateProductPage,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApiportalActions.ListApiInventoryItems,
		ApiportalActions.ListDiscoveryStatuses,
		ApiportalActions.ListManagedApiEvents,
		ApiportalActions.ListManagedApis,
		ApiportalActions.ListPortals,
		ApiportalActions.ListProductApiPages,
		ApiportalActions.ListProductPages,
		ApiportalActions.ListProducts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		ApiportalActions.DeleteProductSharingPolicy,
		ApiportalActions.PutProductSharingPolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ApiportalActions.TagResource,
		ApiportalActions.UntagResource,
	];
}

/**
 * Properties for building a DiscoveryConfiguration ARN.
 */
export interface ApiportalDiscoveryConfigurationArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DiscoveryConfiguration ARN.
 */
export interface ApiportalDiscoveryConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a ManagedApi ARN.
 */
export interface ApiportalManagedAPIArnProps {
	/** The ManagedApiId component of the ARN. */
	readonly managedAPIId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ManagedApi ARN.
 */
export interface ApiportalManagedAPIArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ManagedApiId component. */
	readonly managedAPIId: string;
}

/**
 * Properties for building a OrganizationDiscoveryConfiguration ARN.
 */
export interface ApiportalOrganizationDiscoveryConfigurationArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a OrganizationDiscoveryConfiguration ARN.
 */
export interface ApiportalOrganizationDiscoveryConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a Portal ARN.
 */
export interface ApiportalPortalArnProps {
	/** The PortalId component of the ARN. */
	readonly portalId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Portal ARN.
 */
export interface ApiportalPortalArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PortalId component. */
	readonly portalId: string;
}

/**
 * Properties for building a Product ARN.
 */
export interface ApiportalProductArnProps {
	/** The ProductId component of the ARN. */
	readonly productId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Product ARN.
 */
export interface ApiportalProductArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProductId component. */
	readonly productId: string;
}

/**
 * Properties for building a ProductApiPage ARN.
 */
export interface ApiportalProductAPIPageArnProps {
	/** The ProductId component of the ARN. */
	readonly productId: string;
	/** The ProductApiPageId component of the ARN. */
	readonly productAPIPageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ProductApiPage ARN.
 */
export interface ApiportalProductAPIPageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProductId component. */
	readonly productId: string;
	/** The ProductApiPageId component. */
	readonly productAPIPageId: string;
}

/**
 * Properties for building a ProductPage ARN.
 */
export interface ApiportalProductPageArnProps {
	/** The ProductId component of the ARN. */
	readonly productId: string;
	/** The ProductPageId component of the ARN. */
	readonly productPageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ProductPage ARN.
 */
export interface ApiportalProductPageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProductId component. */
	readonly productId: string;
	/** The ProductPageId component. */
	readonly productPageId: string;
}

/**
 * Properties for building a ProductSharingPolicy ARN.
 */
export interface ApiportalProductSharingPolicyArnProps {
	/** The ProductId component of the ARN. */
	readonly productId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a ProductSharingPolicy ARN.
 */
export interface ApiportalProductSharingPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProductId component. */
	readonly productId: string;
}

const DiscoveryConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):discoveryconfiguration$/;
const ManagedAPIArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):managedapis\/(?<managedAPIId>[^:/?]+)$/;
const OrganizationDiscoveryConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):orgdiscoveryconfiguration$/;
const PortalArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):portals\/(?<portalId>[^:/?]+)$/;
const ProductArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):products\/(?<productId>[^:/?]+)$/;
const ProductAPIPageArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):products\/(?<productId>[^:/?]+)\/apipages\/(?<productAPIPageId>[^:/?]+)$/;
const ProductPageArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):products\/(?<productId>[^:/?]+)\/productpages\/(?<productPageId>[^:/?]+)$/;
const ProductSharingPolicyArnRegex =
	/^arn:(?<partition>[^:]+):apiportal:(?<region>[^:]*):(?<account>[^:]*):products\/(?<productId>[^:/?]+)\/sharingpolicy$/;

/**
 * ARN builders, validators, and parsers for apiportal resources.
 */
export class ApiportalResources {
	/**
	 * Builds an ARN for the DiscoveryConfiguration resource.
	 */
	static discoveryConfiguration(
		props: ApiportalDiscoveryConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:discoveryconfiguration`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DiscoveryConfiguration resource.
	 */
	static isValidDiscoveryConfigurationArn(arn: string): boolean {
		return DiscoveryConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a DiscoveryConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDiscoveryConfigurationArn(
		arn: string,
	): ApiportalDiscoveryConfigurationArnComponents {
		const match = DiscoveryConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DiscoveryConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the ManagedApi resource.
	 */
	static managedAPI(props: ApiportalManagedAPIArnProps): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:managedapis/${props.managedAPIId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ManagedApi resource.
	 */
	static isValidManagedAPIArn(arn: string): boolean {
		return ManagedAPIArnRegex.test(arn);
	}

	/**
	 * Parses a ManagedApi ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedAPIArn(arn: string): ApiportalManagedAPIArnComponents {
		const match = ManagedAPIArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ManagedApi ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			managedAPIId: match.groups!.managedAPIId,
		};
	}

	/**
	 * Builds an ARN for the OrganizationDiscoveryConfiguration resource.
	 */
	static organizationDiscoveryConfiguration(
		props: ApiportalOrganizationDiscoveryConfigurationArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:orgdiscoveryconfiguration`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OrganizationDiscoveryConfiguration resource.
	 */
	static isValidOrganizationDiscoveryConfigurationArn(arn: string): boolean {
		return OrganizationDiscoveryConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a OrganizationDiscoveryConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOrganizationDiscoveryConfigurationArn(
		arn: string,
	): ApiportalOrganizationDiscoveryConfigurationArnComponents {
		const match = OrganizationDiscoveryConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OrganizationDiscoveryConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the Portal resource.
	 */
	static portal(props: ApiportalPortalArnProps): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:portals/${props.portalId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Portal resource.
	 */
	static isValidPortalArn(arn: string): boolean {
		return PortalArnRegex.test(arn);
	}

	/**
	 * Parses a Portal ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePortalArn(arn: string): ApiportalPortalArnComponents {
		const match = PortalArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Portal ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			portalId: match.groups!.portalId,
		};
	}

	/**
	 * Builds an ARN for the Product resource.
	 */
	static product(props: ApiportalProductArnProps): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:products/${props.productId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Product resource.
	 */
	static isValidProductArn(arn: string): boolean {
		return ProductArnRegex.test(arn);
	}

	/**
	 * Parses a Product ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductArn(arn: string): ApiportalProductArnComponents {
		const match = ProductArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Product ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			productId: match.groups!.productId,
		};
	}

	/**
	 * Builds an ARN for the ProductApiPage resource.
	 */
	static productAPIPage(props: ApiportalProductAPIPageArnProps): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:products/${props.productId}/apipages/${props.productAPIPageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProductApiPage resource.
	 */
	static isValidProductAPIPageArn(arn: string): boolean {
		return ProductAPIPageArnRegex.test(arn);
	}

	/**
	 * Parses a ProductApiPage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductAPIPageArn(
		arn: string,
	): ApiportalProductAPIPageArnComponents {
		const match = ProductAPIPageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProductApiPage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			productId: match.groups!.productId,
			productAPIPageId: match.groups!.productAPIPageId,
		};
	}

	/**
	 * Builds an ARN for the ProductPage resource.
	 */
	static productPage(props: ApiportalProductPageArnProps): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:products/${props.productId}/productpages/${props.productPageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProductPage resource.
	 */
	static isValidProductPageArn(arn: string): boolean {
		return ProductPageArnRegex.test(arn);
	}

	/**
	 * Parses a ProductPage ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductPageArn(arn: string): ApiportalProductPageArnComponents {
		const match = ProductPageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProductPage ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			productId: match.groups!.productId,
			productPageId: match.groups!.productPageId,
		};
	}

	/**
	 * Builds an ARN for the ProductSharingPolicy resource.
	 */
	static productSharingPolicy(
		props: ApiportalProductSharingPolicyArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:apiportal:${props.region ?? "*"}:${props.account ?? "*"}:products/${props.productId}/sharingpolicy`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProductSharingPolicy resource.
	 */
	static isValidProductSharingPolicyArn(arn: string): boolean {
		return ProductSharingPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a ProductSharingPolicy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProductSharingPolicyArn(
		arn: string,
	): ApiportalProductSharingPolicyArnComponents {
		const match = ProductSharingPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProductSharingPolicy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			productId: match.groups!.productId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for apiportal.
 */
export class ApiportalOperations {
	/** IAM actions required for the AssociateManagedApis API call. */
	static readonly AssociateManagedApis: string[] = [
		"apiportal:AssociateManagedApis",
	];
	/** IAM actions required for the CreateManagedApi API call. */
	static readonly CreateManagedApi: string[] = [
		"apiportal:CreateManagedApi",
		"apiportal:TagResource",
	];
	/** IAM actions required for the CreatePortal API call. */
	static readonly CreatePortal: string[] = [
		"apiportal:CreatePortal",
		"apiportal:GetProduct",
		"apiportal:TagResource",
	];
	/** IAM actions required for the CreatePortalPreview API call. */
	static readonly CreatePortalPreview: string[] = [
		"apiportal:CreatePortalPreview",
		"apiportal:GetProduct",
	];
	/** IAM actions required for the CreateProduct API call. */
	static readonly CreateProduct: string[] = [
		"apiportal:CreateProduct",
		"apiportal:TagResource",
	];
	/** IAM actions required for the CreateProductApiPage API call. */
	static readonly CreateProductApiPage: string[] = [
		"apiportal:CreateProductApiPage",
		"apiportal:TagResource",
	];
	/** IAM actions required for the CreateProductPage API call. */
	static readonly CreateProductPage: string[] = [
		"apiportal:CreateProductPage",
		"apiportal:TagResource",
	];
	/** IAM actions required for the DeleteDiscoveryConfiguration API call. */
	static readonly DeleteDiscoveryConfiguration: string[] = [
		"apiportal:DeleteDiscoveryConfiguration",
	];
	/** IAM actions required for the DeleteManagedApi API call. */
	static readonly DeleteManagedApi: string[] = ["apiportal:DeleteManagedApi"];
	/** IAM actions required for the DeleteOrganizationDiscoveryConfiguration API call. */
	static readonly DeleteOrganizationDiscoveryConfiguration: string[] = [
		"apiportal:DeleteOrganizationDiscoveryConfiguration",
	];
	/** IAM actions required for the DeletePortal API call. */
	static readonly DeletePortal: string[] = ["apiportal:DeletePortal"];
	/** IAM actions required for the DeleteProduct API call. */
	static readonly DeleteProduct: string[] = ["apiportal:DeleteProduct"];
	/** IAM actions required for the DeleteProductApiPage API call. */
	static readonly DeleteProductApiPage: string[] = [
		"apiportal:DeleteProductApiPage",
	];
	/** IAM actions required for the DeleteProductPage API call. */
	static readonly DeleteProductPage: string[] = ["apiportal:DeleteProductPage"];
	/** IAM actions required for the DeleteProductSharingPolicy API call. */
	static readonly DeleteProductSharingPolicy: string[] = [
		"apiportal:DeleteProductSharingPolicy",
	];
	/** IAM actions required for the DisassociateManagedApis API call. */
	static readonly DisassociateManagedApis: string[] = [
		"apiportal:DisassociateManagedApis",
	];
	/** IAM actions required for the GetApiInventoryItem API call. */
	static readonly opGetApiInventoryItem: string[] = [
		"apiportal:GetApiInventoryItem",
	];
	/** IAM actions required for the GetDiscoveryConfiguration API call. */
	static readonly opGetDiscoveryConfiguration: string[] = [
		"apiportal:GetDiscoveryConfiguration",
	];
	/** IAM actions required for the GetManagedApi API call. */
	static readonly opGetManagedApi: string[] = ["apiportal:GetManagedApi"];
	/** IAM actions required for the GetOrganizationDiscoveryConfiguration API call. */
	static readonly opGetOrganizationDiscoveryConfiguration: string[] = [
		"apiportal:GetOrganizationDiscoveryConfiguration",
	];
	/** IAM actions required for the GetPortal API call. */
	static readonly opGetPortal: string[] = ["apiportal:GetPortal"];
	/** IAM actions required for the GetProduct API call. */
	static readonly opGetProduct: string[] = ["apiportal:GetProduct"];
	/** IAM actions required for the GetProductApiPage API call. */
	static readonly opGetProductApiPage: string[] = [
		"apiportal:GetProductApiPage",
	];
	/** IAM actions required for the GetProductPage API call. */
	static readonly opGetProductPage: string[] = ["apiportal:GetProductPage"];
	/** IAM actions required for the GetProductSharingPolicy API call. */
	static readonly opGetProductSharingPolicy: string[] = [
		"apiportal:GetProductSharingPolicy",
	];
	/** IAM actions required for the ListApiInventoryItems API call. */
	static readonly ListApiInventoryItems: string[] = [
		"apiportal:ListApiInventoryItems",
	];
	/** IAM actions required for the ListDiscoveryStatuses API call. */
	static readonly ListDiscoveryStatuses: string[] = [
		"apiportal:ListDiscoveryStatuses",
	];
	/** IAM actions required for the ListManagedApiEvents API call. */
	static readonly ListManagedApiEvents: string[] = [
		"apiportal:ListManagedApiEvents",
	];
	/** IAM actions required for the ListManagedApis API call. */
	static readonly ListManagedApis: string[] = ["apiportal:ListManagedApis"];
	/** IAM actions required for the ListPortals API call. */
	static readonly ListPortals: string[] = ["apiportal:ListPortals"];
	/** IAM actions required for the ListProductApiPages API call. */
	static readonly ListProductApiPages: string[] = [
		"apiportal:ListProductApiPages",
	];
	/** IAM actions required for the ListProductPages API call. */
	static readonly ListProductPages: string[] = ["apiportal:ListProductPages"];
	/** IAM actions required for the ListProducts API call. */
	static readonly ListProducts: string[] = ["apiportal:ListProducts"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"apiportal:ListTagsForResource",
	];
	/** IAM actions required for the PutDiscoveryConfiguration API call. */
	static readonly PutDiscoveryConfiguration: string[] = [
		"apiportal:PutDiscoveryConfiguration",
		"apiportal:TagResource",
	];
	/** IAM actions required for the PutOrganizationDiscoveryConfiguration API call. */
	static readonly PutOrganizationDiscoveryConfiguration: string[] = [
		"apiportal:PutOrganizationDiscoveryConfiguration",
		"apiportal:TagResource",
	];
	/** IAM actions required for the PutProductSharingPolicy API call. */
	static readonly PutProductSharingPolicy: string[] = [
		"apiportal:PutProductSharingPolicy",
		"apiportal:TagResource",
	];
	/** IAM actions required for the StartDiscovery API call. */
	static readonly StartDiscovery: string[] = ["apiportal:StartDiscovery"];
	/** IAM actions required for the StopDiscovery API call. */
	static readonly StopDiscovery: string[] = ["apiportal:StopDiscovery"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["apiportal:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["apiportal:UntagResource"];
	/** IAM actions required for the UpdatePortal API call. */
	static readonly UpdatePortal: string[] = [
		"apiportal:GetProduct",
		"apiportal:UpdatePortal",
	];
	/** IAM actions required for the UpdatePortalPublishStatus API call. */
	static readonly UpdatePortalPublishStatus: string[] = [
		"apiportal:GetProduct",
		"apiportal:UpdatePortalPublishStatus",
	];
	/** IAM actions required for the UpdateProduct API call. */
	static readonly UpdateProduct: string[] = ["apiportal:UpdateProduct"];
	/** IAM actions required for the UpdateProductApiPage API call. */
	static readonly UpdateProductApiPage: string[] = [
		"apiportal:UpdateProductApiPage",
	];
	/** IAM actions required for the UpdateProductPage API call. */
	static readonly UpdateProductPage: string[] = ["apiportal:UpdateProductPage"];
}

/**
 * Condition key constants and builders for apiportal.
 */
export class ApiportalConditions {
	/** Condition keys applicable to the CreateManagedApi action. */
	static readonly CreateManagedApiConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePortal action. */
	static readonly CreatePortalConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProduct action. */
	static readonly CreateProductConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProductApiPage action. */
	static readonly CreateProductApiPageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProductPage action. */
	static readonly CreateProductPageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutDiscoveryConfiguration action. */
	static readonly PutDiscoveryConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the PutOrganizationDiscoveryConfiguration action. */
	static readonly PutOrganizationDiscoveryConfigurationConditionKeys: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the PutProductSharingPolicy action. */
	static readonly PutProductSharingPolicyConditionKeys: string[] = [
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

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
}
