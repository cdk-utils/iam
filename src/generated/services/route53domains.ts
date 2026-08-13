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
	static readonly ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT =
		"route53domains:AcceptDomainTransferFromAnotherAwsAccount";
	/** [Write] route53domains:AssociateDelegationSignerToDomain */
	static readonly ASSOCIATE_DELEGATION_SIGNER_TO_DOMAIN =
		"route53domains:AssociateDelegationSignerToDomain";
	/** [Write] route53domains:CancelDomainTransferToAnotherAwsAccount */
	static readonly CANCEL_DOMAIN_TRANSFER_TO_ANOTHER_AWS_ACCOUNT =
		"route53domains:CancelDomainTransferToAnotherAwsAccount";
	/** [Read] route53domains:CheckDomainAvailability */
	static readonly CHECK_DOMAIN_AVAILABILITY =
		"route53domains:CheckDomainAvailability";
	/** [Read] route53domains:CheckDomainTransferability */
	static readonly CHECK_DOMAIN_TRANSFERABILITY =
		"route53domains:CheckDomainTransferability";
	/** [Write] route53domains:DeleteDomain */
	static readonly DELETE_DOMAIN = "route53domains:DeleteDomain";
	/** [Tagging] route53domains:DeleteTagsForDomain */
	static readonly DELETE_TAGS_FOR_DOMAIN = "route53domains:DeleteTagsForDomain";
	/** [Write] route53domains:DisableDomainAutoRenew */
	static readonly DISABLE_DOMAIN_AUTO_RENEW =
		"route53domains:DisableDomainAutoRenew";
	/** [Write] route53domains:DisableDomainTransferLock */
	static readonly DISABLE_DOMAIN_TRANSFER_LOCK =
		"route53domains:DisableDomainTransferLock";
	/** [Write] route53domains:DisassociateDelegationSignerFromDomain */
	static readonly DISASSOCIATE_DELEGATION_SIGNER_FROM_DOMAIN =
		"route53domains:DisassociateDelegationSignerFromDomain";
	/** [Write] route53domains:EnableDomainAutoRenew */
	static readonly ENABLE_DOMAIN_AUTO_RENEW =
		"route53domains:EnableDomainAutoRenew";
	/** [Write] route53domains:EnableDomainTransferLock */
	static readonly ENABLE_DOMAIN_TRANSFER_LOCK =
		"route53domains:EnableDomainTransferLock";
	/** [Read] route53domains:GetContactReachabilityStatus */
	static readonly GET_CONTACT_REACHABILITY_STATUS =
		"route53domains:GetContactReachabilityStatus";
	/** [Read] route53domains:GetDomainDetail */
	static readonly GET_DOMAIN_DETAIL = "route53domains:GetDomainDetail";
	/** [Read] route53domains:GetDomainSuggestions */
	static readonly GET_DOMAIN_SUGGESTIONS =
		"route53domains:GetDomainSuggestions";
	/** [Read] route53domains:GetOperationDetail */
	static readonly GET_OPERATION_DETAIL = "route53domains:GetOperationDetail";
	/** [List] route53domains:ListDomains */
	static readonly LIST_DOMAINS = "route53domains:ListDomains";
	/** [List] route53domains:ListOperations */
	static readonly LIST_OPERATIONS = "route53domains:ListOperations";
	/** [List] route53domains:ListPrices */
	static readonly LIST_PRICES = "route53domains:ListPrices";
	/** [Read] route53domains:ListTagsForDomain */
	static readonly LIST_TAGS_FOR_DOMAIN = "route53domains:ListTagsForDomain";
	/** [Write] route53domains:PushDomain */
	static readonly PUSH_DOMAIN = "route53domains:PushDomain";
	/** [Write] route53domains:RegisterDomain */
	static readonly REGISTER_DOMAIN = "route53domains:RegisterDomain";
	/** [Write] route53domains:RejectDomainTransferFromAnotherAwsAccount */
	static readonly REJECT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT =
		"route53domains:RejectDomainTransferFromAnotherAwsAccount";
	/** [Write] route53domains:RenewDomain */
	static readonly RENEW_DOMAIN = "route53domains:RenewDomain";
	/** [Write] route53domains:ResendContactReachabilityEmail */
	static readonly RESEND_CONTACT_REACHABILITY_EMAIL =
		"route53domains:ResendContactReachabilityEmail";
	/** [Write] route53domains:ResendOperationAuthorization */
	static readonly RESEND_OPERATION_AUTHORIZATION =
		"route53domains:ResendOperationAuthorization";
	/** [Write] route53domains:RetrieveDomainAuthCode */
	static readonly RETRIEVE_DOMAIN_AUTH_CODE =
		"route53domains:RetrieveDomainAuthCode";
	/** [Write] route53domains:TransferDomain */
	static readonly TRANSFER_DOMAIN = "route53domains:TransferDomain";
	/** [Write] route53domains:TransferDomainToAnotherAwsAccount */
	static readonly TRANSFER_DOMAIN_TO_ANOTHER_AWS_ACCOUNT =
		"route53domains:TransferDomainToAnotherAwsAccount";
	/** [Write] route53domains:UpdateDomainContact */
	static readonly UPDATE_DOMAIN_CONTACT = "route53domains:UpdateDomainContact";
	/** [Write] route53domains:UpdateDomainContactPrivacy */
	static readonly UPDATE_DOMAIN_CONTACT_PRIVACY =
		"route53domains:UpdateDomainContactPrivacy";
	/** [Write] route53domains:UpdateDomainNameservers */
	static readonly UPDATE_DOMAIN_NAMESERVERS =
		"route53domains:UpdateDomainNameservers";
	/** [Tagging] route53domains:UpdateTagsForDomain */
	static readonly UPDATE_TAGS_FOR_DOMAIN = "route53domains:UpdateTagsForDomain";
	/** [Read] route53domains:ViewBilling */
	static readonly VIEW_BILLING = "route53domains:ViewBilling";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		Route53domainsActions.CHECK_DOMAIN_AVAILABILITY,
		Route53domainsActions.CHECK_DOMAIN_TRANSFERABILITY,
		Route53domainsActions.GET_CONTACT_REACHABILITY_STATUS,
		Route53domainsActions.GET_DOMAIN_DETAIL,
		Route53domainsActions.GET_DOMAIN_SUGGESTIONS,
		Route53domainsActions.GET_OPERATION_DETAIL,
		Route53domainsActions.LIST_TAGS_FOR_DOMAIN,
		Route53domainsActions.VIEW_BILLING,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		Route53domainsActions.ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT,
		Route53domainsActions.ASSOCIATE_DELEGATION_SIGNER_TO_DOMAIN,
		Route53domainsActions.CANCEL_DOMAIN_TRANSFER_TO_ANOTHER_AWS_ACCOUNT,
		Route53domainsActions.DELETE_DOMAIN,
		Route53domainsActions.DISABLE_DOMAIN_AUTO_RENEW,
		Route53domainsActions.DISABLE_DOMAIN_TRANSFER_LOCK,
		Route53domainsActions.DISASSOCIATE_DELEGATION_SIGNER_FROM_DOMAIN,
		Route53domainsActions.ENABLE_DOMAIN_AUTO_RENEW,
		Route53domainsActions.ENABLE_DOMAIN_TRANSFER_LOCK,
		Route53domainsActions.PUSH_DOMAIN,
		Route53domainsActions.REGISTER_DOMAIN,
		Route53domainsActions.REJECT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT,
		Route53domainsActions.RENEW_DOMAIN,
		Route53domainsActions.RESEND_CONTACT_REACHABILITY_EMAIL,
		Route53domainsActions.RESEND_OPERATION_AUTHORIZATION,
		Route53domainsActions.RETRIEVE_DOMAIN_AUTH_CODE,
		Route53domainsActions.TRANSFER_DOMAIN,
		Route53domainsActions.TRANSFER_DOMAIN_TO_ANOTHER_AWS_ACCOUNT,
		Route53domainsActions.UPDATE_DOMAIN_CONTACT,
		Route53domainsActions.UPDATE_DOMAIN_CONTACT_PRIVACY,
		Route53domainsActions.UPDATE_DOMAIN_NAMESERVERS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		Route53domainsActions.LIST_DOMAINS,
		Route53domainsActions.LIST_OPERATIONS,
		Route53domainsActions.LIST_PRICES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		Route53domainsActions.DELETE_TAGS_FOR_DOMAIN,
		Route53domainsActions.UPDATE_TAGS_FOR_DOMAIN,
	];
}

/**
 * API operation to required IAM actions mapping for route53domains.
 */
export class Route53domainsOperations {
	/** IAM actions required for the AcceptDomainTransferFromAnotherAwsAccount API call. */
	static readonly ACCEPT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT: string[] = [
		"route53domains:AcceptDomainTransferFromAnotherAwsAccount",
	];
	/** IAM actions required for the AssociateDelegationSignerToDomain API call. */
	static readonly ASSOCIATE_DELEGATION_SIGNER_TO_DOMAIN: string[] = [
		"route53domains:AssociateDelegationSignerToDomain",
	];
	/** IAM actions required for the CancelDomainTransferToAnotherAwsAccount API call. */
	static readonly CANCEL_DOMAIN_TRANSFER_TO_ANOTHER_AWS_ACCOUNT: string[] = [
		"route53domains:CancelDomainTransferToAnotherAwsAccount",
	];
	/** IAM actions required for the CheckDomainAvailability API call. */
	static readonly CHECK_DOMAIN_AVAILABILITY: string[] = [
		"route53domains:CheckDomainAvailability",
	];
	/** IAM actions required for the CheckDomainTransferability API call. */
	static readonly CHECK_DOMAIN_TRANSFERABILITY: string[] = [
		"route53domains:CheckDomainTransferability",
	];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["route53domains:DeleteDomain"];
	/** IAM actions required for the DeleteTagsForDomain API call. */
	static readonly DELETE_TAGS_FOR_DOMAIN: string[] = [
		"route53domains:DeleteTagsForDomain",
	];
	/** IAM actions required for the DisableDomainAutoRenew API call. */
	static readonly DISABLE_DOMAIN_AUTO_RENEW: string[] = [
		"route53domains:DisableDomainAutoRenew",
	];
	/** IAM actions required for the DisableDomainTransferLock API call. */
	static readonly DISABLE_DOMAIN_TRANSFER_LOCK: string[] = [
		"route53domains:DisableDomainTransferLock",
	];
	/** IAM actions required for the DisassociateDelegationSignerFromDomain API call. */
	static readonly DISASSOCIATE_DELEGATION_SIGNER_FROM_DOMAIN: string[] = [
		"route53domains:DisassociateDelegationSignerFromDomain",
	];
	/** IAM actions required for the EnableDomainAutoRenew API call. */
	static readonly ENABLE_DOMAIN_AUTO_RENEW: string[] = [
		"route53domains:EnableDomainAutoRenew",
	];
	/** IAM actions required for the EnableDomainTransferLock API call. */
	static readonly ENABLE_DOMAIN_TRANSFER_LOCK: string[] = [
		"route53domains:EnableDomainTransferLock",
	];
	/** IAM actions required for the GetContactReachabilityStatus API call. */
	static readonly GET_CONTACT_REACHABILITY_STATUS: string[] = [
		"route53domains:GetContactReachabilityStatus",
	];
	/** IAM actions required for the GetDomainDetail API call. */
	static readonly GET_DOMAIN_DETAIL: string[] = [
		"route53domains:GetDomainDetail",
	];
	/** IAM actions required for the GetDomainSuggestions API call. */
	static readonly GET_DOMAIN_SUGGESTIONS: string[] = [
		"route53domains:GetDomainSuggestions",
	];
	/** IAM actions required for the GetOperationDetail API call. */
	static readonly GET_OPERATION_DETAIL: string[] = [
		"route53domains:GetOperationDetail",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["route53domains:ListDomains"];
	/** IAM actions required for the ListOperations API call. */
	static readonly LIST_OPERATIONS: string[] = ["route53domains:ListOperations"];
	/** IAM actions required for the ListPrices API call. */
	static readonly LIST_PRICES: string[] = ["route53domains:ListPrices"];
	/** IAM actions required for the ListTagsForDomain API call. */
	static readonly LIST_TAGS_FOR_DOMAIN: string[] = [
		"route53domains:ListTagsForDomain",
	];
	/** IAM actions required for the PushDomain API call. */
	static readonly PUSH_DOMAIN: string[] = ["route53domains:PushDomain"];
	/** IAM actions required for the RegisterDomain API call. */
	static readonly REGISTER_DOMAIN: string[] = [
		"route53:CreateHostedZone",
		"route53domains:RegisterDomain",
	];
	/** IAM actions required for the RejectDomainTransferFromAnotherAwsAccount API call. */
	static readonly REJECT_DOMAIN_TRANSFER_FROM_ANOTHER_AWS_ACCOUNT: string[] = [
		"route53domains:RejectDomainTransferFromAnotherAwsAccount",
	];
	/** IAM actions required for the RenewDomain API call. */
	static readonly RENEW_DOMAIN: string[] = ["route53domains:RenewDomain"];
	/** IAM actions required for the ResendContactReachabilityEmail API call. */
	static readonly RESEND_CONTACT_REACHABILITY_EMAIL: string[] = [
		"route53domains:ResendContactReachabilityEmail",
	];
	/** IAM actions required for the ResendOperationAuthorization API call. */
	static readonly RESEND_OPERATION_AUTHORIZATION: string[] = [
		"route53domains:ResendOperationAuthorization",
	];
	/** IAM actions required for the RetrieveDomainAuthCode API call. */
	static readonly RETRIEVE_DOMAIN_AUTH_CODE: string[] = [
		"route53domains:RetrieveDomainAuthCode",
	];
	/** IAM actions required for the TransferDomain API call. */
	static readonly TRANSFER_DOMAIN: string[] = ["route53domains:TransferDomain"];
	/** IAM actions required for the TransferDomainToAnotherAwsAccount API call. */
	static readonly TRANSFER_DOMAIN_TO_ANOTHER_AWS_ACCOUNT: string[] = [
		"route53domains:TransferDomainToAnotherAwsAccount",
	];
	/** IAM actions required for the UpdateDomainContact API call. */
	static readonly UPDATE_DOMAIN_CONTACT: string[] = [
		"route53domains:UpdateDomainContact",
	];
	/** IAM actions required for the UpdateDomainContactPrivacy API call. */
	static readonly UPDATE_DOMAIN_CONTACT_PRIVACY: string[] = [
		"route53domains:UpdateDomainContactPrivacy",
	];
	/** IAM actions required for the UpdateDomainNameservers API call. */
	static readonly UPDATE_DOMAIN_NAMESERVERS: string[] = [
		"route53domains:UpdateDomainNameservers",
	];
	/** IAM actions required for the UpdateTagsForDomain API call. */
	static readonly UPDATE_TAGS_FOR_DOMAIN: string[] = [
		"route53domains:UpdateTagsForDomain",
	];
	/** IAM actions required for the ViewBilling API call. */
	static readonly VIEW_BILLING: string[] = ["route53domains:ViewBilling"];
}
