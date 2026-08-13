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
	static readonly COMPLETE_UPLOAD =
		"elemental-appliances-software:CompleteUpload";
	/** [Write] elemental-appliances-software:CreateOrderV1 */
	static readonly CREATE_ORDER_V1 =
		"elemental-appliances-software:CreateOrderV1";
	/** [Write] elemental-appliances-software:CreateQuote */
	static readonly CREATE_QUOTE = "elemental-appliances-software:CreateQuote";
	/** [Read] elemental-appliances-software:GetAvsCorrectAddress */
	static readonly GET_AVS_CORRECT_ADDRESS =
		"elemental-appliances-software:GetAvsCorrectAddress";
	/** [Read] elemental-appliances-software:GetBillingAddresses */
	static readonly GET_BILLING_ADDRESSES =
		"elemental-appliances-software:GetBillingAddresses";
	/** [Read] elemental-appliances-software:GetDeliveryAddressesV2 */
	static readonly GET_DELIVERY_ADDRESSES_V2 =
		"elemental-appliances-software:GetDeliveryAddressesV2";
	/** [Read] elemental-appliances-software:GetOrder */
	static readonly GET_ORDER = "elemental-appliances-software:GetOrder";
	/** [Read] elemental-appliances-software:GetOrdersV2 */
	static readonly GET_ORDERS_V2 = "elemental-appliances-software:GetOrdersV2";
	/** [Read] elemental-appliances-software:GetQuote */
	static readonly GET_QUOTE = "elemental-appliances-software:GetQuote";
	/** [Read] elemental-appliances-software:GetTaxes */
	static readonly GET_TAXES = "elemental-appliances-software:GetTaxes";
	/** [List] elemental-appliances-software:ListQuotes */
	static readonly LIST_QUOTES = "elemental-appliances-software:ListQuotes";
	/** [Write] elemental-appliances-software:StartUpload */
	static readonly START_UPLOAD = "elemental-appliances-software:StartUpload";
	/** [Write] elemental-appliances-software:SubmitOrderV1 */
	static readonly SUBMIT_ORDER_V1 =
		"elemental-appliances-software:SubmitOrderV1";
	/** [Write] elemental-appliances-software:UpdateQuote */
	static readonly UPDATE_QUOTE = "elemental-appliances-software:UpdateQuote";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ElementalAppliancesSoftwareActions.GET_AVS_CORRECT_ADDRESS,
		ElementalAppliancesSoftwareActions.GET_BILLING_ADDRESSES,
		ElementalAppliancesSoftwareActions.GET_DELIVERY_ADDRESSES_V2,
		ElementalAppliancesSoftwareActions.GET_ORDER,
		ElementalAppliancesSoftwareActions.GET_ORDERS_V2,
		ElementalAppliancesSoftwareActions.GET_QUOTE,
		ElementalAppliancesSoftwareActions.GET_TAXES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ElementalAppliancesSoftwareActions.COMPLETE_UPLOAD,
		ElementalAppliancesSoftwareActions.CREATE_ORDER_V1,
		ElementalAppliancesSoftwareActions.CREATE_QUOTE,
		ElementalAppliancesSoftwareActions.START_UPLOAD,
		ElementalAppliancesSoftwareActions.SUBMIT_ORDER_V1,
		ElementalAppliancesSoftwareActions.UPDATE_QUOTE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ElementalAppliancesSoftwareActions.LIST_QUOTES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const QuoteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elemental-appliances-software:(?<region>[^:]*):(?<account>[^:]*):quote/(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for elemental-appliances-software resources.
 */
export class ElementalAppliancesSoftwareResources {
	/**
	 * Builds an ARN for the quote resource.
	 */
	static quote(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseQuoteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		resourceId: string;
	} {
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
