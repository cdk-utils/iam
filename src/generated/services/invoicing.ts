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
	static readonly BatchGetInvoiceProfile = "invoicing:BatchGetInvoiceProfile";
	/** [Write] invoicing:CreateInvoiceUnit */
	static readonly CreateInvoiceUnit = "invoicing:CreateInvoiceUnit";
	/** [Write] invoicing:CreateProcurementPortalPreference */
	static readonly CreateProcurementPortalPreference =
		"invoicing:CreateProcurementPortalPreference";
	/** [Write] invoicing:DeleteInvoiceUnit */
	static readonly DeleteInvoiceUnit = "invoicing:DeleteInvoiceUnit";
	/** [Write] invoicing:DeleteProcurementPortalPreference */
	static readonly DeleteProcurementPortalPreference =
		"invoicing:DeleteProcurementPortalPreference";
	/** [Read] invoicing:GetInvoiceCorrection */
	static readonly actionGetInvoiceCorrection = "invoicing:GetInvoiceCorrection";
	/** [Read] invoicing:GetInvoiceEmailDeliveryPreferences */
	static readonly actionGetInvoiceEmailDeliveryPreferences =
		"invoicing:GetInvoiceEmailDeliveryPreferences";
	/** [Read] invoicing:GetInvoicePDF */
	static readonly actionGetInvoicePDF = "invoicing:GetInvoicePDF";
	/** [Read] invoicing:GetInvoiceUnit */
	static readonly actionGetInvoiceUnit = "invoicing:GetInvoiceUnit";
	/** [Read] invoicing:GetProcurementPortalPreference */
	static readonly actionGetProcurementPortalPreference =
		"invoicing:GetProcurementPortalPreference";
	/** [List] invoicing:ListInvoiceCorrections */
	static readonly ListInvoiceCorrections = "invoicing:ListInvoiceCorrections";
	/** [Read] invoicing:ListInvoiceSummaries */
	static readonly ListInvoiceSummaries = "invoicing:ListInvoiceSummaries";
	/** [List] invoicing:ListInvoiceUnits */
	static readonly ListInvoiceUnits = "invoicing:ListInvoiceUnits";
	/** [List] invoicing:ListProcurementPortalPreferences */
	static readonly ListProcurementPortalPreferences =
		"invoicing:ListProcurementPortalPreferences";
	/** [List] invoicing:ListProcurementPortalSuppliers */
	static readonly ListProcurementPortalSuppliers =
		"invoicing:ListProcurementPortalSuppliers";
	/** [List] invoicing:ListProcurementPortals */
	static readonly ListProcurementPortals = "invoicing:ListProcurementPortals";
	/** [Read] invoicing:ListTagsForResource */
	static readonly ListTagsForResource = "invoicing:ListTagsForResource";
	/** [Write] invoicing:PutInvoiceEmailDeliveryPreferences */
	static readonly PutInvoiceEmailDeliveryPreferences =
		"invoicing:PutInvoiceEmailDeliveryPreferences";
	/** [Write] invoicing:PutProcurementPortalPreference */
	static readonly PutProcurementPortalPreference =
		"invoicing:PutProcurementPortalPreference";
	/** [Write] invoicing:SendProcurementPortalValidation */
	static readonly SendProcurementPortalValidation =
		"invoicing:SendProcurementPortalValidation";
	/** [Write] invoicing:StartInvoiceCorrection */
	static readonly StartInvoiceCorrection = "invoicing:StartInvoiceCorrection";
	/** [Tagging] invoicing:TagResource */
	static readonly TagResource = "invoicing:TagResource";
	/** [Tagging] invoicing:UntagResource */
	static readonly UntagResource = "invoicing:UntagResource";
	/** [Write] invoicing:UpdateInvoiceUnit */
	static readonly UpdateInvoiceUnit = "invoicing:UpdateInvoiceUnit";
	/** [Write] invoicing:UpdateProcurementPortalPreferenceStatus */
	static readonly UpdateProcurementPortalPreferenceStatus =
		"invoicing:UpdateProcurementPortalPreferenceStatus";
	/** [Write] invoicing:VerifyProcurementPortalValidation */
	static readonly VerifyProcurementPortalValidation =
		"invoicing:VerifyProcurementPortalValidation";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		InvoicingActions.BatchGetInvoiceProfile,
		InvoicingActions.actionGetInvoiceCorrection,
		InvoicingActions.actionGetInvoiceEmailDeliveryPreferences,
		InvoicingActions.actionGetInvoicePDF,
		InvoicingActions.actionGetInvoiceUnit,
		InvoicingActions.actionGetProcurementPortalPreference,
		InvoicingActions.ListInvoiceSummaries,
		InvoicingActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		InvoicingActions.CreateInvoiceUnit,
		InvoicingActions.CreateProcurementPortalPreference,
		InvoicingActions.DeleteInvoiceUnit,
		InvoicingActions.DeleteProcurementPortalPreference,
		InvoicingActions.PutInvoiceEmailDeliveryPreferences,
		InvoicingActions.PutProcurementPortalPreference,
		InvoicingActions.SendProcurementPortalValidation,
		InvoicingActions.StartInvoiceCorrection,
		InvoicingActions.UpdateInvoiceUnit,
		InvoicingActions.UpdateProcurementPortalPreferenceStatus,
		InvoicingActions.VerifyProcurementPortalValidation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		InvoicingActions.ListInvoiceCorrections,
		InvoicingActions.ListInvoiceUnits,
		InvoicingActions.ListProcurementPortalPreferences,
		InvoicingActions.ListProcurementPortalSuppliers,
		InvoicingActions.ListProcurementPortals,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		InvoicingActions.TagResource,
		InvoicingActions.UntagResource,
	];
}

/**
 * Properties for building a invoice-unit ARN.
 */
export interface InvoicingInvoiceUnitArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a invoice-unit ARN.
 */
export interface InvoicingInvoiceUnitArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

/**
 * Properties for building a procurement-portal-preference ARN.
 */
export interface InvoicingProcurementPortalPreferenceArnProps {
	/** The Identifier component of the ARN. */
	readonly identifier: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a procurement-portal-preference ARN.
 */
export interface InvoicingProcurementPortalPreferenceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Identifier component. */
	readonly identifier: string;
}

const InvoiceUnitArnRegex =
	/^arn:(?<partition>[^:]+):invoicing::(?<account>[^:]*):invoice-unit\/(?<identifier>[^:/?]+)$/;
const ProcurementPortalPreferenceArnRegex =
	/^arn:(?<partition>[^:]+):invoicing::(?<account>[^:]*):procurement-portal-preference\/(?<identifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for invoicing resources.
 */
export class InvoicingResources {
	/**
	 * Builds an ARN for the invoice-unit resource.
	 */
	static invoiceUnit(props: InvoicingInvoiceUnitArnProps): string {
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
	static parseInvoiceUnitArn(arn: string): InvoicingInvoiceUnitArnComponents {
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
	static procurementPortalPreference(
		props: InvoicingProcurementPortalPreferenceArnProps,
	): string {
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
	static parseProcurementPortalPreferenceArn(
		arn: string,
	): InvoicingProcurementPortalPreferenceArnComponents {
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
	static readonly BatchGetInvoiceProfile: string[] = [
		"invoicing:BatchGetInvoiceProfile",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the CreateInvoiceUnit API call. */
	static readonly CreateInvoiceUnit: string[] = [
		"invoicing:CreateInvoiceUnit",
		"invoicing:TagResource",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the CreateProcurementPortalPreference API call. */
	static readonly CreateProcurementPortalPreference: string[] = [
		"invoicing:CreateProcurementPortalPreference",
		"aws-portal:ModifyBilling",
		"invoicing:TagResource",
	];
	/** IAM actions required for the DeleteInvoiceUnit API call. */
	static readonly DeleteInvoiceUnit: string[] = [
		"invoicing:DeleteInvoiceUnit",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the DeleteProcurementPortalPreference API call. */
	static readonly DeleteProcurementPortalPreference: string[] = [
		"invoicing:DeleteProcurementPortalPreference",
		"aws-portal:ModifyBilling",
	];
	/** IAM actions required for the GetInvoicePDF API call. */
	static readonly opGetInvoicePDF: string[] = [
		"invoicing:GetInvoicePDF",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetInvoiceUnit API call. */
	static readonly opGetInvoiceUnit: string[] = [
		"invoicing:GetInvoiceUnit",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the GetProcurementPortalPreference API call. */
	static readonly opGetProcurementPortalPreference: string[] = [
		"invoicing:GetProcurementPortalPreference",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListInvoiceSummaries API call. */
	static readonly ListInvoiceSummaries: string[] = [
		"invoicing:ListInvoiceSummaries",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListInvoiceUnits API call. */
	static readonly ListInvoiceUnits: string[] = [
		"invoicing:ListInvoiceUnits",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListProcurementPortalPreferences API call. */
	static readonly ListProcurementPortalPreferences: string[] = [
		"invoicing:ListProcurementPortalPreferences",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"invoicing:ListTagsForResource",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the PutProcurementPortalPreference API call. */
	static readonly PutProcurementPortalPreference: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:PutProcurementPortalPreference",
	];
	/** IAM actions required for the SendProcurementPortalValidation API call. */
	static readonly SendProcurementPortalValidation: string[] = [
		"invoicing:SendProcurementPortalValidation",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:TagResource",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:UntagResource",
	];
	/** IAM actions required for the UpdateInvoiceUnit API call. */
	static readonly UpdateInvoiceUnit: string[] = [
		"invoicing:UpdateInvoiceUnit",
		"aws-portal:ViewBilling",
	];
	/** IAM actions required for the UpdateProcurementPortalPreferenceStatus API call. */
	static readonly UpdateProcurementPortalPreferenceStatus: string[] = [
		"aws-portal:ModifyBilling",
		"invoicing:UpdateProcurementPortalPreferenceStatus",
	];
	/** IAM actions required for the VerifyProcurementPortalValidation API call. */
	static readonly VerifyProcurementPortalValidation: string[] = [
		"invoicing:VerifyProcurementPortalValidation",
	];
}

/**
 * Condition key constants and builders for invoicing.
 */
export class InvoicingConditions {
	/** Condition keys applicable to the CreateInvoiceUnit action. */
	static readonly CreateInvoiceUnitConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProcurementPortalPreference action. */
	static readonly CreateProcurementPortalPreferenceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteInvoiceUnit action. */
	static readonly DeleteInvoiceUnitConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteProcurementPortalPreference action. */
	static readonly DeleteProcurementPortalPreferenceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the PutProcurementPortalPreference action. */
	static readonly PutProcurementPortalPreferenceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the SendProcurementPortalValidation action. */
	static readonly SendProcurementPortalValidationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateInvoiceUnit action. */
	static readonly UpdateInvoiceUnitConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateProcurementPortalPreferenceStatus action. */
	static readonly UpdateProcurementPortalPreferenceStatusConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the VerifyProcurementPortalValidation action. */
	static readonly VerifyProcurementPortalValidationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

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
