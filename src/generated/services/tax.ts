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
	static readonly BatchDeleteTaxRegistration = "tax:BatchDeleteTaxRegistration";
	/** [Write] tax:BatchPutTaxRegistration */
	static readonly BatchPutTaxRegistration = "tax:BatchPutTaxRegistration";
	/** [Write] tax:CancelDocument */
	static readonly CancelDocument = "tax:CancelDocument";
	/** [Write] tax:CreateDocument */
	static readonly CreateDocument = "tax:CreateDocument";
	/** [Write] tax:DeleteSupplementalTaxRegistration */
	static readonly DeleteSupplementalTaxRegistration =
		"tax:DeleteSupplementalTaxRegistration";
	/** [Write] tax:DeleteTaxRegistration */
	static readonly DeleteTaxRegistration = "tax:DeleteTaxRegistration";
	/** [Read] tax:GetDocument */
	static readonly actionGetDocument = "tax:GetDocument";
	/** [Read] tax:GetDocumentUploadUrl */
	static readonly actionGetDocumentUploadUrl = "tax:GetDocumentUploadUrl";
	/** [Read] tax:GetExemptions */
	static readonly actionGetExemptions = "tax:GetExemptions";
	/** [Read] tax:GetTaxInfoReportingDocument */
	static readonly actionGetTaxInfoReportingDocument =
		"tax:GetTaxInfoReportingDocument";
	/** [Read] tax:GetTaxInheritance */
	static readonly actionGetTaxInheritance = "tax:GetTaxInheritance";
	/** [Read] tax:GetTaxInterview */
	static readonly actionGetTaxInterview = "tax:GetTaxInterview";
	/** [Read] tax:GetTaxRegistration */
	static readonly actionGetTaxRegistration = "tax:GetTaxRegistration";
	/** [Read] tax:GetTaxRegistrationDocument */
	static readonly actionGetTaxRegistrationDocument =
		"tax:GetTaxRegistrationDocument";
	/** [Read] tax:ListDocuments */
	static readonly ListDocuments = "tax:ListDocuments";
	/** [Read] tax:ListSupplementalTaxRegistrations */
	static readonly ListSupplementalTaxRegistrations =
		"tax:ListSupplementalTaxRegistrations";
	/** [Read] tax:ListTaxRegistrations */
	static readonly ListTaxRegistrations = "tax:ListTaxRegistrations";
	/** [Read] tax:ListWithholdingEligibleInvoices */
	static readonly ListWithholdingEligibleInvoices =
		"tax:ListWithholdingEligibleInvoices";
	/** [Write] tax:PutSupplementalTaxRegistration */
	static readonly PutSupplementalTaxRegistration =
		"tax:PutSupplementalTaxRegistration";
	/** [Write] tax:PutTaxInheritance */
	static readonly PutTaxInheritance = "tax:PutTaxInheritance";
	/** [Write] tax:PutTaxInterview */
	static readonly PutTaxInterview = "tax:PutTaxInterview";
	/** [Write] tax:PutTaxRegistration */
	static readonly PutTaxRegistration = "tax:PutTaxRegistration";
	/** [Write] tax:UpdateExemptions */
	static readonly UpdateExemptions = "tax:UpdateExemptions";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TaxActions.actionGetDocument,
		TaxActions.actionGetDocumentUploadUrl,
		TaxActions.actionGetExemptions,
		TaxActions.actionGetTaxInfoReportingDocument,
		TaxActions.actionGetTaxInheritance,
		TaxActions.actionGetTaxInterview,
		TaxActions.actionGetTaxRegistration,
		TaxActions.actionGetTaxRegistrationDocument,
		TaxActions.ListDocuments,
		TaxActions.ListSupplementalTaxRegistrations,
		TaxActions.ListTaxRegistrations,
		TaxActions.ListWithholdingEligibleInvoices,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TaxActions.BatchDeleteTaxRegistration,
		TaxActions.BatchPutTaxRegistration,
		TaxActions.CancelDocument,
		TaxActions.CreateDocument,
		TaxActions.DeleteSupplementalTaxRegistration,
		TaxActions.DeleteTaxRegistration,
		TaxActions.PutSupplementalTaxRegistration,
		TaxActions.PutTaxInheritance,
		TaxActions.PutTaxInterview,
		TaxActions.PutTaxRegistration,
		TaxActions.UpdateExemptions,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * API operation to required IAM actions mapping for tax.
 */
export class TaxOperations {
	/** IAM actions required for the BatchDeleteTaxRegistration API call. */
	static readonly BatchDeleteTaxRegistration: string[] = [
		"tax:BatchDeleteTaxRegistration",
	];
	/** IAM actions required for the BatchGetTaxExemptions API call. */
	static readonly BatchGetTaxExemptions: string[] = ["tax:GetExemptions"];
	/** IAM actions required for the BatchPutTaxRegistration API call. */
	static readonly BatchPutTaxRegistration: string[] = [
		"tax:BatchPutTaxRegistration",
	];
	/** IAM actions required for the DeleteSupplementalTaxRegistration API call. */
	static readonly DeleteSupplementalTaxRegistration: string[] = [
		"tax:DeleteSupplementalTaxRegistration",
	];
	/** IAM actions required for the DeleteTaxRegistration API call. */
	static readonly DeleteTaxRegistration: string[] = [
		"tax:DeleteTaxRegistration",
	];
	/** IAM actions required for the GetTaxExemptionTypes API call. */
	static readonly opGetTaxExemptionTypes: string[] = ["tax:GetExemptions"];
	/** IAM actions required for the GetTaxInheritance API call. */
	static readonly opGetTaxInheritance: string[] = ["tax:GetTaxInheritance"];
	/** IAM actions required for the GetTaxRegistration API call. */
	static readonly opGetTaxRegistration: string[] = ["tax:GetTaxRegistration"];
	/** IAM actions required for the GetTaxRegistrationDocument API call. */
	static readonly opGetTaxRegistrationDocument: string[] = [
		"tax:GetTaxRegistrationDocument",
	];
	/** IAM actions required for the ListSupplementalTaxRegistrations API call. */
	static readonly ListSupplementalTaxRegistrations: string[] = [
		"tax:ListSupplementalTaxRegistrations",
	];
	/** IAM actions required for the ListTaxExemptions API call. */
	static readonly ListTaxExemptions: string[] = ["tax:GetExemptions"];
	/** IAM actions required for the ListTaxRegistrations API call. */
	static readonly ListTaxRegistrations: string[] = ["tax:ListTaxRegistrations"];
	/** IAM actions required for the PutSupplementalTaxRegistration API call. */
	static readonly PutSupplementalTaxRegistration: string[] = [
		"tax:PutSupplementalTaxRegistration",
	];
	/** IAM actions required for the PutTaxExemption API call. */
	static readonly PutTaxExemption: string[] = ["tax:UpdateExemptions"];
	/** IAM actions required for the PutTaxInheritance API call. */
	static readonly PutTaxInheritance: string[] = ["tax:PutTaxInheritance"];
	/** IAM actions required for the PutTaxRegistration API call. */
	static readonly PutTaxRegistration: string[] = ["tax:PutTaxRegistration"];
}
