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
	static readonly AcceptFinancingApplicationTerms =
		"payments:AcceptFinancingApplicationTerms";
	/** [Write] payments:CreateFinancingApplication */
	static readonly CreateFinancingApplication =
		"payments:CreateFinancingApplication";
	/** [Write] payments:CreatePaymentInstrument */
	static readonly CreatePaymentInstrument = "payments:CreatePaymentInstrument";
	/** [Write] payments:DeletePaymentInstrument */
	static readonly DeletePaymentInstrument = "payments:DeletePaymentInstrument";
	/** [Read] payments:GetFinancingApplication */
	static readonly actionGetFinancingApplication =
		"payments:GetFinancingApplication";
	/** [Read] payments:GetFinancingLine */
	static readonly actionGetFinancingLine = "payments:GetFinancingLine";
	/** [Read] payments:GetFinancingLineWithdrawal */
	static readonly actionGetFinancingLineWithdrawal =
		"payments:GetFinancingLineWithdrawal";
	/** [Read] payments:GetFinancingOption */
	static readonly actionGetFinancingOption = "payments:GetFinancingOption";
	/** [List] payments:GetPaymentInstrument */
	static readonly actionGetPaymentInstrument = "payments:GetPaymentInstrument";
	/** [Read] payments:GetPaymentStatus */
	static readonly actionGetPaymentStatus = "payments:GetPaymentStatus";
	/** [List] payments:ListFinancingApplications */
	static readonly ListFinancingApplications =
		"payments:ListFinancingApplications";
	/** [List] payments:ListFinancingLineWithdrawals */
	static readonly ListFinancingLineWithdrawals =
		"payments:ListFinancingLineWithdrawals";
	/** [List] payments:ListFinancingLines */
	static readonly ListFinancingLines = "payments:ListFinancingLines";
	/** [List] payments:ListPaymentInstruments */
	static readonly ListPaymentInstruments = "payments:ListPaymentInstruments";
	/** [List] payments:ListPaymentPreferences */
	static readonly ListPaymentPreferences = "payments:ListPaymentPreferences";
	/** [List] payments:ListPaymentProgramOptions */
	static readonly ListPaymentProgramOptions =
		"payments:ListPaymentProgramOptions";
	/** [List] payments:ListPaymentProgramStatus */
	static readonly ListPaymentProgramStatus =
		"payments:ListPaymentProgramStatus";
	/** [List] payments:ListTagsForResource */
	static readonly ListTagsForResource = "payments:ListTagsForResource";
	/** [Write] payments:MakePayment */
	static readonly MakePayment = "payments:MakePayment";
	/** [Tagging] payments:TagResource */
	static readonly TagResource = "payments:TagResource";
	/** [Tagging] payments:UntagResource */
	static readonly UntagResource = "payments:UntagResource";
	/** [Write] payments:UpdateFinancingApplication */
	static readonly UpdateFinancingApplication =
		"payments:UpdateFinancingApplication";
	/** [Write] payments:UpdatePaymentInstrument */
	static readonly UpdatePaymentInstrument = "payments:UpdatePaymentInstrument";
	/** [Write] payments:UpdatePaymentPreferences */
	static readonly UpdatePaymentPreferences =
		"payments:UpdatePaymentPreferences";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PaymentsActions.actionGetFinancingApplication,
		PaymentsActions.actionGetFinancingLine,
		PaymentsActions.actionGetFinancingLineWithdrawal,
		PaymentsActions.actionGetFinancingOption,
		PaymentsActions.actionGetPaymentStatus,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PaymentsActions.AcceptFinancingApplicationTerms,
		PaymentsActions.CreateFinancingApplication,
		PaymentsActions.CreatePaymentInstrument,
		PaymentsActions.DeletePaymentInstrument,
		PaymentsActions.MakePayment,
		PaymentsActions.UpdateFinancingApplication,
		PaymentsActions.UpdatePaymentInstrument,
		PaymentsActions.UpdatePaymentPreferences,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PaymentsActions.actionGetPaymentInstrument,
		PaymentsActions.ListFinancingApplications,
		PaymentsActions.ListFinancingLineWithdrawals,
		PaymentsActions.ListFinancingLines,
		PaymentsActions.ListPaymentInstruments,
		PaymentsActions.ListPaymentPreferences,
		PaymentsActions.ListPaymentProgramOptions,
		PaymentsActions.ListPaymentProgramStatus,
		PaymentsActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PaymentsActions.TagResource,
		PaymentsActions.UntagResource,
	];
}

/**
 * Properties for building a payment-instrument ARN.
 */
export interface PaymentsPaymentInstrumentArnProps {
	/** The ResourceId component of the ARN. */
	readonly resourceId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a payment-instrument ARN.
 */
export interface PaymentsPaymentInstrumentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ResourceId component. */
	readonly resourceId: string;
}

const PaymentInstrumentArnRegex =
	/^arn:(?<partition>[^:]+):payments::(?<account>[^:]*):payment-instrument:(?<resourceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for payments resources.
 */
export class PaymentsResources {
	/**
	 * Builds an ARN for the payment-instrument resource.
	 */
	static paymentInstrument(props: PaymentsPaymentInstrumentArnProps): string {
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
	static parsePaymentInstrumentArn(
		arn: string,
	): PaymentsPaymentInstrumentArnComponents {
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
	static readonly CreatePaymentInstrumentConditionKeys: string[] = [
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
