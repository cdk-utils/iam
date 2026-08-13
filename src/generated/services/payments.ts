// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/payments.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the payments service.
 */
export class PaymentsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "payments";

	/** [Write] payments:AcceptFinancingApplicationTerms */
	static readonly ACCEPT_FINANCING_APPLICATION_TERMS =
		"payments:AcceptFinancingApplicationTerms";
	/** [Write] payments:CreateFinancingApplication */
	static readonly CREATE_FINANCING_APPLICATION =
		"payments:CreateFinancingApplication";
	/** [Write] payments:CreatePaymentInstrument */
	static readonly CREATE_PAYMENT_INSTRUMENT =
		"payments:CreatePaymentInstrument";
	/** [Write] payments:DeletePaymentInstrument */
	static readonly DELETE_PAYMENT_INSTRUMENT =
		"payments:DeletePaymentInstrument";
	/** [Read] payments:GetFinancingApplication */
	static readonly GET_FINANCING_APPLICATION =
		"payments:GetFinancingApplication";
	/** [Read] payments:GetFinancingLine */
	static readonly GET_FINANCING_LINE = "payments:GetFinancingLine";
	/** [Read] payments:GetFinancingLineWithdrawal */
	static readonly GET_FINANCING_LINE_WITHDRAWAL =
		"payments:GetFinancingLineWithdrawal";
	/** [Read] payments:GetFinancingOption */
	static readonly GET_FINANCING_OPTION = "payments:GetFinancingOption";
	/** [List] payments:GetPaymentInstrument */
	static readonly GET_PAYMENT_INSTRUMENT = "payments:GetPaymentInstrument";
	/** [Read] payments:GetPaymentStatus */
	static readonly GET_PAYMENT_STATUS = "payments:GetPaymentStatus";
	/** [List] payments:ListFinancingApplications */
	static readonly LIST_FINANCING_APPLICATIONS =
		"payments:ListFinancingApplications";
	/** [List] payments:ListFinancingLineWithdrawals */
	static readonly LIST_FINANCING_LINE_WITHDRAWALS =
		"payments:ListFinancingLineWithdrawals";
	/** [List] payments:ListFinancingLines */
	static readonly LIST_FINANCING_LINES = "payments:ListFinancingLines";
	/** [List] payments:ListPaymentInstruments */
	static readonly LIST_PAYMENT_INSTRUMENTS = "payments:ListPaymentInstruments";
	/** [List] payments:ListPaymentPreferences */
	static readonly LIST_PAYMENT_PREFERENCES = "payments:ListPaymentPreferences";
	/** [List] payments:ListPaymentProgramOptions */
	static readonly LIST_PAYMENT_PROGRAM_OPTIONS =
		"payments:ListPaymentProgramOptions";
	/** [List] payments:ListPaymentProgramStatus */
	static readonly LIST_PAYMENT_PROGRAM_STATUS =
		"payments:ListPaymentProgramStatus";
	/** [List] payments:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "payments:ListTagsForResource";
	/** [Write] payments:MakePayment */
	static readonly MAKE_PAYMENT = "payments:MakePayment";
	/** [Tagging] payments:TagResource */
	static readonly TAG_RESOURCE = "payments:TagResource";
	/** [Tagging] payments:UntagResource */
	static readonly UNTAG_RESOURCE = "payments:UntagResource";
	/** [Write] payments:UpdateFinancingApplication */
	static readonly UPDATE_FINANCING_APPLICATION =
		"payments:UpdateFinancingApplication";
	/** [Write] payments:UpdatePaymentInstrument */
	static readonly UPDATE_PAYMENT_INSTRUMENT =
		"payments:UpdatePaymentInstrument";
	/** [Write] payments:UpdatePaymentPreferences */
	static readonly UPDATE_PAYMENT_PREFERENCES =
		"payments:UpdatePaymentPreferences";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PaymentsActions.GET_FINANCING_APPLICATION,
		PaymentsActions.GET_FINANCING_LINE,
		PaymentsActions.GET_FINANCING_LINE_WITHDRAWAL,
		PaymentsActions.GET_FINANCING_OPTION,
		PaymentsActions.GET_PAYMENT_STATUS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PaymentsActions.ACCEPT_FINANCING_APPLICATION_TERMS,
		PaymentsActions.CREATE_FINANCING_APPLICATION,
		PaymentsActions.CREATE_PAYMENT_INSTRUMENT,
		PaymentsActions.DELETE_PAYMENT_INSTRUMENT,
		PaymentsActions.MAKE_PAYMENT,
		PaymentsActions.UPDATE_FINANCING_APPLICATION,
		PaymentsActions.UPDATE_PAYMENT_INSTRUMENT,
		PaymentsActions.UPDATE_PAYMENT_PREFERENCES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PaymentsActions.GET_PAYMENT_INSTRUMENT,
		PaymentsActions.LIST_FINANCING_APPLICATIONS,
		PaymentsActions.LIST_FINANCING_LINE_WITHDRAWALS,
		PaymentsActions.LIST_FINANCING_LINES,
		PaymentsActions.LIST_PAYMENT_INSTRUMENTS,
		PaymentsActions.LIST_PAYMENT_PREFERENCES,
		PaymentsActions.LIST_PAYMENT_PROGRAM_OPTIONS,
		PaymentsActions.LIST_PAYMENT_PROGRAM_STATUS,
		PaymentsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PaymentsActions.TAG_RESOURCE,
		PaymentsActions.UNTAG_RESOURCE,
	];
}

const PaymentInstrumentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):payments::(?<account>[^:]*):payment-instrument:(?<resourceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for payments resources.
 */
export class PaymentsResources {
	/**
	 * Builds an ARN for the payment-instrument resource.
	 */
	static paymentInstrument(props: {
		/** The ResourceId component of the ARN. */
		readonly resourceId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:payments::${props.account ?? "*"}:payment-instrument:${props.resourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the payment-instrument resource.
	 */
	static isValidPaymentInstrumentArn(arn: string): boolean {
		return PaymentInstrumentArnRegex.test(arn);
	}

	/**
	 * Parses a payment-instrument ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePaymentInstrumentArn(arn: string): {
		partition: string;
		account: string;
		resourceId: string;
	} {
		const match = PaymentInstrumentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid payment-instrument ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			resourceId: match.groups!.resourceId,
		};
	}
}

/**
 * Condition key constants and builders for payments.
 */
export class PaymentsConditions {
	/** Condition keys applicable to the CreatePaymentInstrument action. */
	static readonly CREATE_PAYMENT_INSTRUMENT_CONDITION_KEYS: string[] = [
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

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
