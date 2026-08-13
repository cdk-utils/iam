// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/tax.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the tax service.
 */
export class TaxActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "tax";

	/** [Write] tax:BatchDeleteTaxRegistration */
	static readonly BATCH_DELETE_TAX_REGISTRATION =
		"tax:BatchDeleteTaxRegistration";
	/** [Write] tax:BatchPutTaxRegistration */
	static readonly BATCH_PUT_TAX_REGISTRATION = "tax:BatchPutTaxRegistration";
	/** [Write] tax:CancelDocument */
	static readonly CANCEL_DOCUMENT = "tax:CancelDocument";
	/** [Write] tax:CreateDocument */
	static readonly CREATE_DOCUMENT = "tax:CreateDocument";
	/** [Write] tax:DeleteSupplementalTaxRegistration */
	static readonly DELETE_SUPPLEMENTAL_TAX_REGISTRATION =
		"tax:DeleteSupplementalTaxRegistration";
	/** [Write] tax:DeleteTaxRegistration */
	static readonly DELETE_TAX_REGISTRATION = "tax:DeleteTaxRegistration";
	/** [Read] tax:GetDocument */
	static readonly GET_DOCUMENT = "tax:GetDocument";
	/** [Read] tax:GetDocumentUploadUrl */
	static readonly GET_DOCUMENT_UPLOAD_URL = "tax:GetDocumentUploadUrl";
	/** [Read] tax:GetExemptions */
	static readonly GET_EXEMPTIONS = "tax:GetExemptions";
	/** [Read] tax:GetTaxInfoReportingDocument */
	static readonly GET_TAX_INFO_REPORTING_DOCUMENT =
		"tax:GetTaxInfoReportingDocument";
	/** [Read] tax:GetTaxInheritance */
	static readonly GET_TAX_INHERITANCE = "tax:GetTaxInheritance";
	/** [Read] tax:GetTaxInterview */
	static readonly GET_TAX_INTERVIEW = "tax:GetTaxInterview";
	/** [Read] tax:GetTaxRegistration */
	static readonly GET_TAX_REGISTRATION = "tax:GetTaxRegistration";
	/** [Read] tax:GetTaxRegistrationDocument */
	static readonly GET_TAX_REGISTRATION_DOCUMENT =
		"tax:GetTaxRegistrationDocument";
	/** [Read] tax:ListDocuments */
	static readonly LIST_DOCUMENTS = "tax:ListDocuments";
	/** [Read] tax:ListSupplementalTaxRegistrations */
	static readonly LIST_SUPPLEMENTAL_TAX_REGISTRATIONS =
		"tax:ListSupplementalTaxRegistrations";
	/** [Read] tax:ListTaxRegistrations */
	static readonly LIST_TAX_REGISTRATIONS = "tax:ListTaxRegistrations";
	/** [Read] tax:ListWithholdingEligibleInvoices */
	static readonly LIST_WITHHOLDING_ELIGIBLE_INVOICES =
		"tax:ListWithholdingEligibleInvoices";
	/** [Write] tax:PutSupplementalTaxRegistration */
	static readonly PUT_SUPPLEMENTAL_TAX_REGISTRATION =
		"tax:PutSupplementalTaxRegistration";
	/** [Write] tax:PutTaxInheritance */
	static readonly PUT_TAX_INHERITANCE = "tax:PutTaxInheritance";
	/** [Write] tax:PutTaxInterview */
	static readonly PUT_TAX_INTERVIEW = "tax:PutTaxInterview";
	/** [Write] tax:PutTaxRegistration */
	static readonly PUT_TAX_REGISTRATION = "tax:PutTaxRegistration";
	/** [Write] tax:UpdateExemptions */
	static readonly UPDATE_EXEMPTIONS = "tax:UpdateExemptions";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TaxActions.GET_DOCUMENT,
		TaxActions.GET_DOCUMENT_UPLOAD_URL,
		TaxActions.GET_EXEMPTIONS,
		TaxActions.GET_TAX_INFO_REPORTING_DOCUMENT,
		TaxActions.GET_TAX_INHERITANCE,
		TaxActions.GET_TAX_INTERVIEW,
		TaxActions.GET_TAX_REGISTRATION,
		TaxActions.GET_TAX_REGISTRATION_DOCUMENT,
		TaxActions.LIST_DOCUMENTS,
		TaxActions.LIST_SUPPLEMENTAL_TAX_REGISTRATIONS,
		TaxActions.LIST_TAX_REGISTRATIONS,
		TaxActions.LIST_WITHHOLDING_ELIGIBLE_INVOICES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TaxActions.BATCH_DELETE_TAX_REGISTRATION,
		TaxActions.BATCH_PUT_TAX_REGISTRATION,
		TaxActions.CANCEL_DOCUMENT,
		TaxActions.CREATE_DOCUMENT,
		TaxActions.DELETE_SUPPLEMENTAL_TAX_REGISTRATION,
		TaxActions.DELETE_TAX_REGISTRATION,
		TaxActions.PUT_SUPPLEMENTAL_TAX_REGISTRATION,
		TaxActions.PUT_TAX_INHERITANCE,
		TaxActions.PUT_TAX_INTERVIEW,
		TaxActions.PUT_TAX_REGISTRATION,
		TaxActions.UPDATE_EXEMPTIONS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * API operation to required IAM actions mapping for tax.
 */
export class TaxOperations {
	/** IAM actions required for the BatchDeleteTaxRegistration API call. */
	static readonly BATCH_DELETE_TAX_REGISTRATION: string[] = [
		"tax:BatchDeleteTaxRegistration",
	];
	/** IAM actions required for the BatchGetTaxExemptions API call. */
	static readonly BATCH_GET_TAX_EXEMPTIONS: string[] = ["tax:GetExemptions"];
	/** IAM actions required for the BatchPutTaxRegistration API call. */
	static readonly BATCH_PUT_TAX_REGISTRATION: string[] = [
		"tax:BatchPutTaxRegistration",
	];
	/** IAM actions required for the DeleteSupplementalTaxRegistration API call. */
	static readonly DELETE_SUPPLEMENTAL_TAX_REGISTRATION: string[] = [
		"tax:DeleteSupplementalTaxRegistration",
	];
	/** IAM actions required for the DeleteTaxRegistration API call. */
	static readonly DELETE_TAX_REGISTRATION: string[] = [
		"tax:DeleteTaxRegistration",
	];
	/** IAM actions required for the GetTaxExemptionTypes API call. */
	static readonly GET_TAX_EXEMPTION_TYPES: string[] = ["tax:GetExemptions"];
	/** IAM actions required for the GetTaxInheritance API call. */
	static readonly GET_TAX_INHERITANCE: string[] = ["tax:GetTaxInheritance"];
	/** IAM actions required for the GetTaxRegistration API call. */
	static readonly GET_TAX_REGISTRATION: string[] = ["tax:GetTaxRegistration"];
	/** IAM actions required for the GetTaxRegistrationDocument API call. */
	static readonly GET_TAX_REGISTRATION_DOCUMENT: string[] = [
		"tax:GetTaxRegistrationDocument",
	];
	/** IAM actions required for the ListSupplementalTaxRegistrations API call. */
	static readonly LIST_SUPPLEMENTAL_TAX_REGISTRATIONS: string[] = [
		"tax:ListSupplementalTaxRegistrations",
	];
	/** IAM actions required for the ListTaxExemptions API call. */
	static readonly LIST_TAX_EXEMPTIONS: string[] = ["tax:GetExemptions"];
	/** IAM actions required for the ListTaxRegistrations API call. */
	static readonly LIST_TAX_REGISTRATIONS: string[] = [
		"tax:ListTaxRegistrations",
	];
	/** IAM actions required for the PutSupplementalTaxRegistration API call. */
	static readonly PUT_SUPPLEMENTAL_TAX_REGISTRATION: string[] = [
		"tax:PutSupplementalTaxRegistration",
	];
	/** IAM actions required for the PutTaxExemption API call. */
	static readonly PUT_TAX_EXEMPTION: string[] = ["tax:UpdateExemptions"];
	/** IAM actions required for the PutTaxInheritance API call. */
	static readonly PUT_TAX_INHERITANCE: string[] = ["tax:PutTaxInheritance"];
	/** IAM actions required for the PutTaxRegistration API call. */
	static readonly PUT_TAX_REGISTRATION: string[] = ["tax:PutTaxRegistration"];
}
