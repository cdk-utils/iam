// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/invoicing.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the invoicing service.
 */
export class InvoicingActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "invoicing";

	/** [Read] invoicing:BatchGetInvoiceProfile */
	static readonly BATCH_GET_INVOICE_PROFILE =
		"invoicing:BatchGetInvoiceProfile";
	/** [Write] invoicing:CreateInvoiceUnit */
	static readonly CREATE_INVOICE_UNIT = "invoicing:CreateInvoiceUnit";
	/** [Write] invoicing:CreateProcurementPortalPreference */
	static readonly CREATE_PROCUREMENT_PORTAL_PREFERENCE =
		"invoicing:CreateProcurementPortalPreference";
	/** [Write] invoicing:DeleteInvoiceUnit */
	static readonly DELETE_INVOICE_UNIT = "invoicing:DeleteInvoiceUnit";
	/** [Write] invoicing:DeleteProcurementPortalPreference */
	static readonly DELETE_PROCUREMENT_PORTAL_PREFERENCE =
		"invoicing:DeleteProcurementPortalPreference";
	/** [Read] invoicing:GetInvoiceCorrection */
	static readonly GET_INVOICE_CORRECTION = "invoicing:GetInvoiceCorrection";
	/** [Read] invoicing:GetInvoiceEmailDeliveryPreferences */
	static readonly GET_INVOICE_EMAIL_DELIVERY_PREFERENCES =
		"invoicing:GetInvoiceEmailDeliveryPreferences";
	/** [Read] invoicing:GetInvoicePDF */
	static readonly GET_INVOICE_PDF = "invoicing:GetInvoicePDF";
	/** [Read] invoicing:GetInvoiceUnit */
	static readonly GET_INVOICE_UNIT = "invoicing:GetInvoiceUnit";
	/** [Read] invoicing:GetProcurementPortalPreference */
	static readonly GET_PROCUREMENT_PORTAL_PREFERENCE =
		"invoicing:GetProcurementPortalPreference";
	/** [List] invoicing:ListInvoiceCorrections */
	static readonly LIST_INVOICE_CORRECTIONS = "invoicing:ListInvoiceCorrections";
	/** [Read] invoicing:ListInvoiceSummaries */
	static readonly LIST_INVOICE_SUMMARIES = "invoicing:ListInvoiceSummaries";
	/** [List] invoicing:ListInvoiceUnits */
	static readonly LIST_INVOICE_UNITS = "invoicing:ListInvoiceUnits";
	/** [List] invoicing:ListProcurementPortalPreferences */
	static readonly LIST_PROCUREMENT_PORTAL_PREFERENCES =
		"invoicing:ListProcurementPortalPreferences";
	/** [List] invoicing:ListProcurementPortalSuppliers */
	static readonly LIST_PROCUREMENT_PORTAL_SUPPLIERS =
		"invoicing:ListProcurementPortalSuppliers";
	/** [List] invoicing:ListProcurementPortals */
	static readonly LIST_PROCUREMENT_PORTALS = "invoicing:ListProcurementPortals";
	/** [Read] invoicing:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "invoicing:ListTagsForResource";
	/** [Write] invoicing:PutInvoiceEmailDeliveryPreferences */
	static readonly PUT_INVOICE_EMAIL_DELIVERY_PREFERENCES =
		"invoicing:PutInvoiceEmailDeliveryPreferences";
	/** [Write] invoicing:PutProcurementPortalPreference */
	static readonly PUT_PROCUREMENT_PORTAL_PREFERENCE =
		"invoicing:PutProcurementPortalPreference";
	/** [Write] invoicing:SendProcurementPortalValidation */
	static readonly SEND_PROCUREMENT_PORTAL_VALIDATION =
		"invoicing:SendProcurementPortalValidation";
	/** [Write] invoicing:StartInvoiceCorrection */
	static readonly START_INVOICE_CORRECTION = "invoicing:StartInvoiceCorrection";
	/** [Tagging] invoicing:TagResource */
	static readonly TAG_RESOURCE = "invoicing:TagResource";
	/** [Tagging] invoicing:UntagResource */
	static readonly UNTAG_RESOURCE = "invoicing:UntagResource";
	/** [Write] invoicing:UpdateInvoiceUnit */
	static readonly UPDATE_INVOICE_UNIT = "invoicing:UpdateInvoiceUnit";
	/** [Write] invoicing:UpdateProcurementPortalPreferenceStatus */
	static readonly UPDATE_PROCUREMENT_PORTAL_PREFERENCE_STATUS =
		"invoicing:UpdateProcurementPortalPreferenceStatus";
	/** [Write] invoicing:VerifyProcurementPortalValidation */
	static readonly VERIFY_PROCUREMENT_PORTAL_VALIDATION =
		"invoicing:VerifyProcurementPortalValidation";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		InvoicingActions.BATCH_GET_INVOICE_PROFILE,
		InvoicingActions.GET_INVOICE_CORRECTION,
		InvoicingActions.GET_INVOICE_EMAIL_DELIVERY_PREFERENCES,
		InvoicingActions.GET_INVOICE_PDF,
		InvoicingActions.GET_INVOICE_UNIT,
		InvoicingActions.GET_PROCUREMENT_PORTAL_PREFERENCE,
		InvoicingActions.LIST_INVOICE_SUMMARIES,
		InvoicingActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		InvoicingActions.CREATE_INVOICE_UNIT,
		InvoicingActions.CREATE_PROCUREMENT_PORTAL_PREFERENCE,
		InvoicingActions.DELETE_INVOICE_UNIT,
		InvoicingActions.DELETE_PROCUREMENT_PORTAL_PREFERENCE,
		InvoicingActions.PUT_INVOICE_EMAIL_DELIVERY_PREFERENCES,
		InvoicingActions.PUT_PROCUREMENT_PORTAL_PREFERENCE,
		InvoicingActions.SEND_PROCUREMENT_PORTAL_VALIDATION,
		InvoicingActions.START_INVOICE_CORRECTION,
		InvoicingActions.UPDATE_INVOICE_UNIT,
		InvoicingActions.UPDATE_PROCUREMENT_PORTAL_PREFERENCE_STATUS,
		InvoicingActions.VERIFY_PROCUREMENT_PORTAL_VALIDATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		InvoicingActions.LIST_INVOICE_CORRECTIONS,
		InvoicingActions.LIST_INVOICE_UNITS,
		InvoicingActions.LIST_PROCUREMENT_PORTAL_PREFERENCES,
		InvoicingActions.LIST_PROCUREMENT_PORTAL_SUPPLIERS,
		InvoicingActions.LIST_PROCUREMENT_PORTALS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		InvoicingActions.TAG_RESOURCE,
		InvoicingActions.UNTAG_RESOURCE,
	];
}

const InvoiceUnitArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):invoicing::(?<account>[^:]*):invoice-unit/(?<identifier>[^:/?]+)$",
);
const ProcurementPortalPreferenceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):invoicing::(?<account>[^:]*):procurement-portal-preference/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for invoicing resources.
 */
export class InvoicingResources {
	/**
	 * Builds an ARN for the invoice-unit resource.
	 */
	static invoiceUnit(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:invoicing::${props.account ?? "*"}:invoice-unit/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the invoice-unit resource.
	 */
	static isValidInvoiceUnitArn(arn: string): boolean {
		return InvoiceUnitArnRegex.test(arn);
	}

	/**
	 * Parses a invoice-unit ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseInvoiceUnitArn(arn: string): {
		partition: string;
		account: string;
		identifier: string;
	} {
		const match = InvoiceUnitArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid invoice-unit ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the procurement-portal-preference resource.
	 */
	static procurementPortalPreference(props: {
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:invoicing::${props.account ?? "*"}:procurement-portal-preference/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the procurement-portal-preference resource.
	 */
	static isValidProcurementPortalPreferenceArn(arn: string): boolean {
		return ProcurementPortalPreferenceArnRegex.test(arn);
	}

	/**
	 * Parses a procurement-portal-preference ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProcurementPortalPreferenceArn(arn: string): {
		partition: string;
		account: string;
		identifier: string;
	} {
		const match = ProcurementPortalPreferenceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid procurement-portal-preference ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for invoicing.
 */
export class InvoicingOperations {
	/** IAM actions required for the BatchGetInvoiceProfile API call. */
	static readonly BATCH_GET_INVOICE_PROFILE: string[] = [
		"invoicing:BatchGetInvoiceProfile",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the CreateInvoiceUnit API call. */
	static readonly CREATE_INVOICE_UNIT: string[] = [
		"invoicing:CreateInvoiceUnit",
		"invoicing:TagResource",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the CreateProcurementPortalPreference API call. */
	static readonly CREATE_PROCUREMENT_PORTAL_PREFERENCE: string[] = [
		"invoicing:CreateProcurementPortalPreference",
		"aws-portal:ModifyBilling",
		"invoicing:TagResource",
	];
	/** IAM actions required for the DeleteInvoiceUnit API call. */
	static readonly DELETE_INVOICE_UNIT: string[] = [
		"invoicing:DeleteInvoiceUnit",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DeleteProcurementPortalPreference API call. */
	static readonly DELETE_PROCUREMENT_PORTAL_PREFERENCE: string[] = [
		"invoicing:DeleteProcurementPortalPreference",
		"aws-portal:ModifyBilling",
	];
	/** IAM actions required for the GetInvoicePDF API call. */
	static readonly GET_INVOICE_PDF: string[] = [
		"invoicing:GetInvoicePDF",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetInvoiceUnit API call. */
	static readonly GET_INVOICE_UNIT: string[] = [
		"invoicing:GetInvoiceUnit",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetProcurementPortalPreference API call. */
	static readonly GET_PROCUREMENT_PORTAL_PREFERENCE: string[] = [
		"invoicing:GetProcurementPortalPreference",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListInvoiceSummaries API call. */
	static readonly LIST_INVOICE_SUMMARIES: string[] = [
		"invoicing:ListInvoiceSummaries",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListInvoiceUnits API call. */
	static readonly LIST_INVOICE_UNITS: string[] = [
		"invoicing:ListInvoiceUnits",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListProcurementPortalPreferences API call. */
	static readonly LIST_PROCUREMENT_PORTAL_PREFERENCES: string[] = [
		"invoicing:ListProcurementPortalPreferences",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"invoicing:ListTagsForResource",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the PutProcurementPortalPreference API call. */
	static readonly PUT_PROCUREMENT_PORTAL_PREFERENCE: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:PutProcurementPortalPreference",
	];
	/** IAM actions required for the SendProcurementPortalValidation API call. */
	static readonly SEND_PROCUREMENT_PORTAL_VALIDATION: string[] = [
		"invoicing:SendProcurementPortalValidation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:UntagResource",
	];
	/** IAM actions required for the UpdateInvoiceUnit API call. */
	static readonly UPDATE_INVOICE_UNIT: string[] = [
		"invoicing:UpdateInvoiceUnit",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the UpdateProcurementPortalPreferenceStatus API call. */
	static readonly UPDATE_PROCUREMENT_PORTAL_PREFERENCE_STATUS: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:UpdateProcurementPortalPreferenceStatus",
	];
	/** IAM actions required for the VerifyProcurementPortalValidation API call. */
	static readonly VERIFY_PROCUREMENT_PORTAL_VALIDATION: string[] = [
		"invoicing:VerifyProcurementPortalValidation",
	];
}

/**
 * Condition key constants and builders for invoicing.
 */
export class InvoicingConditions {
	/** Condition keys applicable to the CreateInvoiceUnit action. */
	static readonly CREATE_INVOICE_UNIT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProcurementPortalPreference action. */
	static readonly CREATE_PROCUREMENT_PORTAL_PREFERENCE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the DeleteInvoiceUnit action. */
	static readonly DELETE_INVOICE_UNIT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProcurementPortalPreference action. */
	static readonly DELETE_PROCUREMENT_PORTAL_PREFERENCE_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutProcurementPortalPreference action. */
	static readonly PUT_PROCUREMENT_PORTAL_PREFERENCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the SendProcurementPortalValidation action. */
	static readonly SEND_PROCUREMENT_PORTAL_VALIDATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateInvoiceUnit action. */
	static readonly UPDATE_INVOICE_UNIT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateProcurementPortalPreferenceStatus action. */
	static readonly UPDATE_PROCUREMENT_PORTAL_PREFERENCE_STATUS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the VerifyProcurementPortalValidation action. */
	static readonly VERIFY_PROCUREMENT_PORTAL_VALIDATION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];

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
