// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/route53domains.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the route53domains service.
 */
export class Route53domainsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "route53domains";

	/** [Write] route53domains:AcceptDomainTransferFromAnotherAwsAccount */
	static readonly AcceptDomainTransferFromAnotherAwsAccount =
		"route53domains:AcceptDomainTransferFromAnotherAwsAccount";
	/** [Write] route53domains:AssociateDelegationSignerToDomain */
	static readonly AssociateDelegationSignerToDomain =
		"route53domains:AssociateDelegationSignerToDomain";
	/** [Write] route53domains:CancelDomainTransferToAnotherAwsAccount */
	static readonly CancelDomainTransferToAnotherAwsAccount =
		"route53domains:CancelDomainTransferToAnotherAwsAccount";
	/** [Read] route53domains:CheckDomainAvailability */
	static readonly CheckDomainAvailability =
		"route53domains:CheckDomainAvailability";
	/** [Read] route53domains:CheckDomainTransferability */
	static readonly CheckDomainTransferability =
		"route53domains:CheckDomainTransferability";
	/** [Write] route53domains:DeleteDomain */
	static readonly DeleteDomain = "route53domains:DeleteDomain";
	/** [Tagging] route53domains:DeleteTagsForDomain */
	static readonly DeleteTagsForDomain = "route53domains:DeleteTagsForDomain";
	/** [Write] route53domains:DisableDomainAutoRenew */
	static readonly DisableDomainAutoRenew =
		"route53domains:DisableDomainAutoRenew";
	/** [Write] route53domains:DisableDomainTransferLock */
	static readonly DisableDomainTransferLock =
		"route53domains:DisableDomainTransferLock";
	/** [Write] route53domains:DisassociateDelegationSignerFromDomain */
	static readonly DisassociateDelegationSignerFromDomain =
		"route53domains:DisassociateDelegationSignerFromDomain";
	/** [Write] route53domains:EnableDomainAutoRenew */
	static readonly EnableDomainAutoRenew =
		"route53domains:EnableDomainAutoRenew";
	/** [Write] route53domains:EnableDomainTransferLock */
	static readonly EnableDomainTransferLock =
		"route53domains:EnableDomainTransferLock";
	/** [Read] route53domains:GetContactReachabilityStatus */
	static readonly actionGetContactReachabilityStatus =
		"route53domains:GetContactReachabilityStatus";
	/** [Read] route53domains:GetDomainDetail */
	static readonly actionGetDomainDetail = "route53domains:GetDomainDetail";
	/** [Read] route53domains:GetDomainSuggestions */
	static readonly actionGetDomainSuggestions =
		"route53domains:GetDomainSuggestions";
	/** [Read] route53domains:GetOperationDetail */
	static readonly actionGetOperationDetail =
		"route53domains:GetOperationDetail";
	/** [List] route53domains:ListDomains */
	static readonly ListDomains = "route53domains:ListDomains";
	/** [List] route53domains:ListOperations */
	static readonly ListOperations = "route53domains:ListOperations";
	/** [List] route53domains:ListPrices */
	static readonly ListPrices = "route53domains:ListPrices";
	/** [Read] route53domains:ListTagsForDomain */
	static readonly ListTagsForDomain = "route53domains:ListTagsForDomain";
	/** [Write] route53domains:PushDomain */
	static readonly PushDomain = "route53domains:PushDomain";
	/** [Write] route53domains:RegisterDomain */
	static readonly RegisterDomain = "route53domains:RegisterDomain";
	/** [Write] route53domains:RejectDomainTransferFromAnotherAwsAccount */
	static readonly RejectDomainTransferFromAnotherAwsAccount =
		"route53domains:RejectDomainTransferFromAnotherAwsAccount";
	/** [Write] route53domains:RenewDomain */
	static readonly RenewDomain = "route53domains:RenewDomain";
	/** [Write] route53domains:ResendContactReachabilityEmail */
	static readonly ResendContactReachabilityEmail =
		"route53domains:ResendContactReachabilityEmail";
	/** [Write] route53domains:ResendOperationAuthorization */
	static readonly ResendOperationAuthorization =
		"route53domains:ResendOperationAuthorization";
	/** [Write] route53domains:RetrieveDomainAuthCode */
	static readonly RetrieveDomainAuthCode =
		"route53domains:RetrieveDomainAuthCode";
	/** [Write] route53domains:TransferDomain */
	static readonly TransferDomain = "route53domains:TransferDomain";
	/** [Write] route53domains:TransferDomainToAnotherAwsAccount */
	static readonly TransferDomainToAnotherAwsAccount =
		"route53domains:TransferDomainToAnotherAwsAccount";
	/** [Write] route53domains:UpdateDomainContact */
	static readonly UpdateDomainContact = "route53domains:UpdateDomainContact";
	/** [Write] route53domains:UpdateDomainContactPrivacy */
	static readonly UpdateDomainContactPrivacy =
		"route53domains:UpdateDomainContactPrivacy";
	/** [Write] route53domains:UpdateDomainNameservers */
	static readonly UpdateDomainNameservers =
		"route53domains:UpdateDomainNameservers";
	/** [Tagging] route53domains:UpdateTagsForDomain */
	static readonly UpdateTagsForDomain = "route53domains:UpdateTagsForDomain";
	/** [Read] route53domains:ViewBilling */
	static readonly ViewBilling = "route53domains:ViewBilling";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		Route53domainsActions.CheckDomainAvailability,
		Route53domainsActions.CheckDomainTransferability,
		Route53domainsActions.actionGetContactReachabilityStatus,
		Route53domainsActions.actionGetDomainDetail,
		Route53domainsActions.actionGetDomainSuggestions,
		Route53domainsActions.actionGetOperationDetail,
		Route53domainsActions.ListTagsForDomain,
		Route53domainsActions.ViewBilling,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		Route53domainsActions.AcceptDomainTransferFromAnotherAwsAccount,
		Route53domainsActions.AssociateDelegationSignerToDomain,
		Route53domainsActions.CancelDomainTransferToAnotherAwsAccount,
		Route53domainsActions.DeleteDomain,
		Route53domainsActions.DisableDomainAutoRenew,
		Route53domainsActions.DisableDomainTransferLock,
		Route53domainsActions.DisassociateDelegationSignerFromDomain,
		Route53domainsActions.EnableDomainAutoRenew,
		Route53domainsActions.EnableDomainTransferLock,
		Route53domainsActions.PushDomain,
		Route53domainsActions.RegisterDomain,
		Route53domainsActions.RejectDomainTransferFromAnotherAwsAccount,
		Route53domainsActions.RenewDomain,
		Route53domainsActions.ResendContactReachabilityEmail,
		Route53domainsActions.ResendOperationAuthorization,
		Route53domainsActions.RetrieveDomainAuthCode,
		Route53domainsActions.TransferDomain,
		Route53domainsActions.TransferDomainToAnotherAwsAccount,
		Route53domainsActions.UpdateDomainContact,
		Route53domainsActions.UpdateDomainContactPrivacy,
		Route53domainsActions.UpdateDomainNameservers,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		Route53domainsActions.ListDomains,
		Route53domainsActions.ListOperations,
		Route53domainsActions.ListPrices,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		Route53domainsActions.DeleteTagsForDomain,
		Route53domainsActions.UpdateTagsForDomain,
	];
}

/**
 * API operation to required IAM actions mapping for route53domains.
 */
export class Route53domainsOperations {
	/** IAM actions required for the AcceptDomainTransferFromAnotherAwsAccount API call. */
	static readonly AcceptDomainTransferFromAnotherAwsAccount: string[] = [
		"route53domains:AcceptDomainTransferFromAnotherAwsAccount",
	];
	/** IAM actions required for the AssociateDelegationSignerToDomain API call. */
	static readonly AssociateDelegationSignerToDomain: string[] = [
		"route53domains:AssociateDelegationSignerToDomain",
	];
	/** IAM actions required for the CancelDomainTransferToAnotherAwsAccount API call. */
	static readonly CancelDomainTransferToAnotherAwsAccount: string[] = [
		"route53domains:CancelDomainTransferToAnotherAwsAccount",
	];
	/** IAM actions required for the CheckDomainAvailability API call. */
	static readonly CheckDomainAvailability: string[] = [
		"route53domains:CheckDomainAvailability",
	];
	/** IAM actions required for the CheckDomainTransferability API call. */
	static readonly CheckDomainTransferability: string[] = [
		"route53domains:CheckDomainTransferability",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["route53domains:DeleteDomain"];
	/** IAM actions required for the DeleteTagsForDomain API call. */
	static readonly DeleteTagsForDomain: string[] = [
		"route53domains:DeleteTagsForDomain",
	];
	/** IAM actions required for the DisableDomainAutoRenew API call. */
	static readonly DisableDomainAutoRenew: string[] = [
		"route53domains:DisableDomainAutoRenew",
	];
	/** IAM actions required for the DisableDomainTransferLock API call. */
	static readonly DisableDomainTransferLock: string[] = [
		"route53domains:DisableDomainTransferLock",
	];
	/** IAM actions required for the DisassociateDelegationSignerFromDomain API call. */
	static readonly DisassociateDelegationSignerFromDomain: string[] = [
		"route53domains:DisassociateDelegationSignerFromDomain",
	];
	/** IAM actions required for the EnableDomainAutoRenew API call. */
	static readonly EnableDomainAutoRenew: string[] = [
		"route53domains:EnableDomainAutoRenew",
	];
	/** IAM actions required for the EnableDomainTransferLock API call. */
	static readonly EnableDomainTransferLock: string[] = [
		"route53domains:EnableDomainTransferLock",
	];
	/** IAM actions required for the GetContactReachabilityStatus API call. */
	static readonly opGetContactReachabilityStatus: string[] = [
		"route53domains:GetContactReachabilityStatus",
	];
	/** IAM actions required for the GetDomainDetail API call. */
	static readonly opGetDomainDetail: string[] = [
		"route53domains:GetDomainDetail",
	];
	/** IAM actions required for the GetDomainSuggestions API call. */
	static readonly opGetDomainSuggestions: string[] = [
		"route53domains:GetDomainSuggestions",
	];
	/** IAM actions required for the GetOperationDetail API call. */
	static readonly opGetOperationDetail: string[] = [
		"route53domains:GetOperationDetail",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["route53domains:ListDomains"];
	/** IAM actions required for the ListOperations API call. */
	static readonly ListOperations: string[] = ["route53domains:ListOperations"];
	/** IAM actions required for the ListPrices API call. */
	static readonly ListPrices: string[] = ["route53domains:ListPrices"];
	/** IAM actions required for the ListTagsForDomain API call. */
	static readonly ListTagsForDomain: string[] = [
		"route53domains:ListTagsForDomain",
	];
	/** IAM actions required for the PushDomain API call. */
	static readonly PushDomain: string[] = ["route53domains:PushDomain"];
	/** IAM actions required for the RegisterDomain API call. */
	static readonly RegisterDomain: string[] = [
		"route53:CreateHostedZone",
		"route53domains:RegisterDomain",
	];
	/** IAM actions required for the RejectDomainTransferFromAnotherAwsAccount API call. */
	static readonly RejectDomainTransferFromAnotherAwsAccount: string[] = [
		"route53domains:RejectDomainTransferFromAnotherAwsAccount",
	];
	/** IAM actions required for the RenewDomain API call. */
	static readonly RenewDomain: string[] = ["route53domains:RenewDomain"];
	/** IAM actions required for the ResendContactReachabilityEmail API call. */
	static readonly ResendContactReachabilityEmail: string[] = [
		"route53domains:ResendContactReachabilityEmail",
	];
	/** IAM actions required for the ResendOperationAuthorization API call. */
	static readonly ResendOperationAuthorization: string[] = [
		"route53domains:ResendOperationAuthorization",
	];
	/** IAM actions required for the RetrieveDomainAuthCode API call. */
	static readonly RetrieveDomainAuthCode: string[] = [
		"route53domains:RetrieveDomainAuthCode",
	];
	/** IAM actions required for the TransferDomain API call. */
	static readonly TransferDomain: string[] = ["route53domains:TransferDomain"];
	/** IAM actions required for the TransferDomainToAnotherAwsAccount API call. */
	static readonly TransferDomainToAnotherAwsAccount: string[] = [
		"route53domains:TransferDomainToAnotherAwsAccount",
	];
	/** IAM actions required for the UpdateDomainContact API call. */
	static readonly UpdateDomainContact: string[] = [
		"route53domains:UpdateDomainContact",
	];
	/** IAM actions required for the UpdateDomainContactPrivacy API call. */
	static readonly UpdateDomainContactPrivacy: string[] = [
		"route53domains:UpdateDomainContactPrivacy",
	];
	/** IAM actions required for the UpdateDomainNameservers API call. */
	static readonly UpdateDomainNameservers: string[] = [
		"route53domains:UpdateDomainNameservers",
	];
	/** IAM actions required for the UpdateTagsForDomain API call. */
	static readonly UpdateTagsForDomain: string[] = [
		"route53domains:UpdateTagsForDomain",
	];
	/** IAM actions required for the ViewBilling API call. */
	static readonly ViewBilling: string[] = ["route53domains:ViewBilling"];
}
