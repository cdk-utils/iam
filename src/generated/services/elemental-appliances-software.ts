// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/elemental-appliances-software.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the elemental-appliances-software service.
 */
export class ElementalAppliancesSoftwareActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "elemental-appliances-software";

	/** [Write] elemental-appliances-software:CompleteUpload */
	static readonly CompleteUpload =
		"elemental-appliances-software:CompleteUpload";
	/** [Write] elemental-appliances-software:CreateOrderV1 */
	static readonly CreateOrderV1 = "elemental-appliances-software:CreateOrderV1";
	/** [Write] elemental-appliances-software:CreateQuote */
	static readonly CreateQuote = "elemental-appliances-software:CreateQuote";
	/** [Read] elemental-appliances-software:GetAvsCorrectAddress */
	static readonly actionGetAvsCorrectAddress =
		"elemental-appliances-software:GetAvsCorrectAddress";
	/** [Read] elemental-appliances-software:GetBillingAddresses */
	static readonly actionGetBillingAddresses =
		"elemental-appliances-software:GetBillingAddresses";
	/** [Read] elemental-appliances-software:GetDeliveryAddressesV2 */
	static readonly actionGetDeliveryAddressesV2 =
		"elemental-appliances-software:GetDeliveryAddressesV2";
	/** [Read] elemental-appliances-software:GetOrder */
	static readonly actionGetOrder = "elemental-appliances-software:GetOrder";
	/** [Read] elemental-appliances-software:GetOrdersV2 */
	static readonly actionGetOrdersV2 =
		"elemental-appliances-software:GetOrdersV2";
	/** [Read] elemental-appliances-software:GetQuote */
	static readonly actionGetQuote = "elemental-appliances-software:GetQuote";
	/** [Read] elemental-appliances-software:GetTaxes */
	static readonly actionGetTaxes = "elemental-appliances-software:GetTaxes";
	/** [List] elemental-appliances-software:ListQuotes */
	static readonly ListQuotes = "elemental-appliances-software:ListQuotes";
	/** [Write] elemental-appliances-software:StartUpload */
	static readonly StartUpload = "elemental-appliances-software:StartUpload";
	/** [Write] elemental-appliances-software:SubmitOrderV1 */
	static readonly SubmitOrderV1 = "elemental-appliances-software:SubmitOrderV1";
	/** [Write] elemental-appliances-software:UpdateQuote */
	static readonly UpdateQuote = "elemental-appliances-software:UpdateQuote";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ElementalAppliancesSoftwareActions.actionGetAvsCorrectAddress,
		ElementalAppliancesSoftwareActions.actionGetBillingAddresses,
		ElementalAppliancesSoftwareActions.actionGetDeliveryAddressesV2,
		ElementalAppliancesSoftwareActions.actionGetOrder,
		ElementalAppliancesSoftwareActions.actionGetOrdersV2,
		ElementalAppliancesSoftwareActions.actionGetQuote,
		ElementalAppliancesSoftwareActions.actionGetTaxes,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ElementalAppliancesSoftwareActions.CompleteUpload,
		ElementalAppliancesSoftwareActions.CreateOrderV1,
		ElementalAppliancesSoftwareActions.CreateQuote,
		ElementalAppliancesSoftwareActions.StartUpload,
		ElementalAppliancesSoftwareActions.SubmitOrderV1,
		ElementalAppliancesSoftwareActions.UpdateQuote,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ElementalAppliancesSoftwareActions.ListQuotes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a quote ARN.
 */
export interface ElementalAppliancesSoftwareQuoteArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a quote ARN.
 */
export interface ElementalAppliancesSoftwareQuoteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const QuoteArnRegex =
	/^arn:(?<partition>[^:]+):elemental-appliances-software:(?<region>[^:]*):(?<account>[^:]*):quote\/(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for elemental-appliances-software resources.
 */
export class ElementalAppliancesSoftwareResources {
	/**
	 * Builds an ARN for the quote resource.
	 */
	static quote(props: ElementalAppliancesSoftwareQuoteArnProps): string {
		return `arn:${props.partition ?? "aws"}:elemental-appliances-software:${props.region ?? "*"}:${props.account ?? "*"}:quote/${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the quote resource.
	 */
	static isValidQuoteArn(arn: string): boolean {
		return QuoteArnRegex.test(arn);
	}

	/**
	 * Parses a quote ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQuoteArn(
		arn: string,
	): ElementalAppliancesSoftwareQuoteArnComponents {
		const match = QuoteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid quote ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}
