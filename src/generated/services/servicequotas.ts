// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/servicequotas.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the servicequotas service.
 */
export class ServicequotasActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "servicequotas";

	/** [Write] servicequotas:AssociateServiceQuotaTemplate */
	static readonly ASSOCIATE_SERVICE_QUOTA_TEMPLATE =
		"servicequotas:AssociateServiceQuotaTemplate";
	/** [Write] servicequotas:CreateSupportCase */
	static readonly CREATE_SUPPORT_CASE = "servicequotas:CreateSupportCase";
	/** [Write] servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate */
	static readonly DELETE_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE =
		"servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate";
	/** [Write] servicequotas:DisassociateServiceQuotaTemplate */
	static readonly DISASSOCIATE_SERVICE_QUOTA_TEMPLATE =
		"servicequotas:DisassociateServiceQuotaTemplate";
	/** [Read] servicequotas:GetAWSDefaultServiceQuota */
	static readonly GET_AWS_DEFAULT_SERVICE_QUOTA =
		"servicequotas:GetAWSDefaultServiceQuota";
	/** [Read] servicequotas:GetAssociationForServiceQuotaTemplate */
	static readonly GET_ASSOCIATION_FOR_SERVICE_QUOTA_TEMPLATE =
		"servicequotas:GetAssociationForServiceQuotaTemplate";
	/** [Read] servicequotas:GetAutoManagementConfiguration */
	static readonly GET_AUTO_MANAGEMENT_CONFIGURATION =
		"servicequotas:GetAutoManagementConfiguration";
	/** [Read] servicequotas:GetQuotaUtilizationReport */
	static readonly GET_QUOTA_UTILIZATION_REPORT =
		"servicequotas:GetQuotaUtilizationReport";
	/** [Read] servicequotas:GetRequestedServiceQuotaChange */
	static readonly GET_REQUESTED_SERVICE_QUOTA_CHANGE =
		"servicequotas:GetRequestedServiceQuotaChange";
	/** [Read] servicequotas:GetServiceQuota */
	static readonly GET_SERVICE_QUOTA = "servicequotas:GetServiceQuota";
	/** [Read] servicequotas:GetServiceQuotaIncreaseRequestFromTemplate */
	static readonly GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE =
		"servicequotas:GetServiceQuotaIncreaseRequestFromTemplate";
	/** [Read] servicequotas:ListAWSDefaultServiceQuotas */
	static readonly LIST_AWS_DEFAULT_SERVICE_QUOTAS =
		"servicequotas:ListAWSDefaultServiceQuotas";
	/** [Read] servicequotas:ListRequestedServiceQuotaChangeHistory */
	static readonly LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY =
		"servicequotas:ListRequestedServiceQuotaChangeHistory";
	/** [Read] servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota */
	static readonly LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY_BY_QUOTA =
		"servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota";
	/** [Read] servicequotas:ListServiceQuotaIncreaseRequestsInTemplate */
	static readonly LIST_SERVICE_QUOTA_INCREASE_REQUESTS_IN_TEMPLATE =
		"servicequotas:ListServiceQuotaIncreaseRequestsInTemplate";
	/** [Read] servicequotas:ListServiceQuotas */
	static readonly LIST_SERVICE_QUOTAS = "servicequotas:ListServiceQuotas";
	/** [Read] servicequotas:ListServices */
	static readonly LIST_SERVICES = "servicequotas:ListServices";
	/** [Read] servicequotas:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "servicequotas:ListTagsForResource";
	/** [Write] servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate */
	static readonly PUT_SERVICE_QUOTA_INCREASE_REQUEST_INTO_TEMPLATE =
		"servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate";
	/** [Write] servicequotas:RequestServiceQuotaIncrease */
	static readonly REQUEST_SERVICE_QUOTA_INCREASE =
		"servicequotas:RequestServiceQuotaIncrease";
	/** [Write] servicequotas:StartAutoManagement */
	static readonly START_AUTO_MANAGEMENT = "servicequotas:StartAutoManagement";
	/** [Read] servicequotas:StartQuotaUtilizationReport */
	static readonly START_QUOTA_UTILIZATION_REPORT =
		"servicequotas:StartQuotaUtilizationReport";
	/** [Write] servicequotas:StopAutoManagement */
	static readonly STOP_AUTO_MANAGEMENT = "servicequotas:StopAutoManagement";
	/** [Tagging] servicequotas:TagResource */
	static readonly TAG_RESOURCE = "servicequotas:TagResource";
	/** [Tagging] servicequotas:UntagResource */
	static readonly UNTAG_RESOURCE = "servicequotas:UntagResource";
	/** [Write] servicequotas:UpdateAutoManagement */
	static readonly UPDATE_AUTO_MANAGEMENT = "servicequotas:UpdateAutoManagement";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ServicequotasActions.GET_AWS_DEFAULT_SERVICE_QUOTA,
		ServicequotasActions.GET_ASSOCIATION_FOR_SERVICE_QUOTA_TEMPLATE,
		ServicequotasActions.GET_AUTO_MANAGEMENT_CONFIGURATION,
		ServicequotasActions.GET_QUOTA_UTILIZATION_REPORT,
		ServicequotasActions.GET_REQUESTED_SERVICE_QUOTA_CHANGE,
		ServicequotasActions.GET_SERVICE_QUOTA,
		ServicequotasActions.GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE,
		ServicequotasActions.LIST_AWS_DEFAULT_SERVICE_QUOTAS,
		ServicequotasActions.LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY,
		ServicequotasActions.LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY_BY_QUOTA,
		ServicequotasActions.LIST_SERVICE_QUOTA_INCREASE_REQUESTS_IN_TEMPLATE,
		ServicequotasActions.LIST_SERVICE_QUOTAS,
		ServicequotasActions.LIST_SERVICES,
		ServicequotasActions.LIST_TAGS_FOR_RESOURCE,
		ServicequotasActions.START_QUOTA_UTILIZATION_REPORT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ServicequotasActions.ASSOCIATE_SERVICE_QUOTA_TEMPLATE,
		ServicequotasActions.CREATE_SUPPORT_CASE,
		ServicequotasActions.DELETE_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE,
		ServicequotasActions.DISASSOCIATE_SERVICE_QUOTA_TEMPLATE,
		ServicequotasActions.PUT_SERVICE_QUOTA_INCREASE_REQUEST_INTO_TEMPLATE,
		ServicequotasActions.REQUEST_SERVICE_QUOTA_INCREASE,
		ServicequotasActions.START_AUTO_MANAGEMENT,
		ServicequotasActions.STOP_AUTO_MANAGEMENT,
		ServicequotasActions.UPDATE_AUTO_MANAGEMENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ServicequotasActions.TAG_RESOURCE,
		ServicequotasActions.UNTAG_RESOURCE,
	];
}

const QuotaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):servicequotas:(?<region>[^:]*):(?<account>[^:]*):(?<serviceCode>[^:/?]+)/(?<quotaCode>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for servicequotas resources.
 */
export class ServicequotasResources {
	/**
	 * Builds an ARN for the quota resource.
	 */
	static quota(props: {
		/** The ServiceCode component of the ARN. */
		readonly serviceCode: string;
		/** The QuotaCode component of the ARN. */
		readonly quotaCode: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:servicequotas:${props.region ?? "*"}:${props.account ?? "*"}:${props.serviceCode}/${props.quotaCode}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the quota resource.
	 */
	static isValidQuotaArn(arn: string): boolean {
		return QuotaArnRegex.test(arn);
	}

	/**
	 * Parses a quota ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQuotaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceCode: string;
		quotaCode: string;
	} {
		const match = QuotaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid quota ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceCode: match.groups!.serviceCode,
			quotaCode: match.groups!.quotaCode,
		};
	}
}

/**
 * API operation to required IAM actions mapping for servicequotas.
 */
export class ServicequotasOperations {
	/** IAM actions required for the AssociateServiceQuotaTemplate API call. */
	static readonly ASSOCIATE_SERVICE_QUOTA_TEMPLATE: string[] = [
		"servicequotas:AssociateServiceQuotaTemplate",
	];
	/** IAM actions required for the CreateSupportCase API call. */
	static readonly CREATE_SUPPORT_CASE: string[] = [
		"servicequotas:CreateSupportCase",
	];
	/** IAM actions required for the DeleteServiceQuotaIncreaseRequestFromTemplate API call. */
	static readonly DELETE_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE: string[] =
		["servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate"];
	/** IAM actions required for the DisassociateServiceQuotaTemplate API call. */
	static readonly DISASSOCIATE_SERVICE_QUOTA_TEMPLATE: string[] = [
		"servicequotas:DisassociateServiceQuotaTemplate",
	];
	/** IAM actions required for the GetAWSDefaultServiceQuota API call. */
	static readonly GET_AWS_DEFAULT_SERVICE_QUOTA: string[] = [
		"servicequotas:GetAWSDefaultServiceQuota",
	];
	/** IAM actions required for the GetAssociationForServiceQuotaTemplate API call. */
	static readonly GET_ASSOCIATION_FOR_SERVICE_QUOTA_TEMPLATE: string[] = [
		"servicequotas:GetAssociationForServiceQuotaTemplate",
	];
	/** IAM actions required for the GetAutoManagementConfiguration API call. */
	static readonly GET_AUTO_MANAGEMENT_CONFIGURATION: string[] = [
		"servicequotas:GetAutoManagementConfiguration",
	];
	/** IAM actions required for the GetQuotaUtilizationReport API call. */
	static readonly GET_QUOTA_UTILIZATION_REPORT: string[] = [
		"servicequotas:GetQuotaUtilizationReport",
	];
	/** IAM actions required for the GetRequestedServiceQuotaChange API call. */
	static readonly GET_REQUESTED_SERVICE_QUOTA_CHANGE: string[] = [
		"servicequotas:GetRequestedServiceQuotaChange",
	];
	/** IAM actions required for the GetServiceQuota API call. */
	static readonly GET_SERVICE_QUOTA: string[] = [
		"servicequotas:GetServiceQuota",
	];
	/** IAM actions required for the GetServiceQuotaIncreaseRequestFromTemplate API call. */
	static readonly GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE: string[] = [
		"servicequotas:GetServiceQuotaIncreaseRequestFromTemplate",
	];
	/** IAM actions required for the ListAWSDefaultServiceQuotas API call. */
	static readonly LIST_AWS_DEFAULT_SERVICE_QUOTAS: string[] = [
		"servicequotas:ListAWSDefaultServiceQuotas",
	];
	/** IAM actions required for the ListRequestedServiceQuotaChangeHistory API call. */
	static readonly LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY: string[] = [
		"servicequotas:ListRequestedServiceQuotaChangeHistory",
	];
	/** IAM actions required for the ListRequestedServiceQuotaChangeHistoryByQuota API call. */
	static readonly LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY_BY_QUOTA: string[] =
		["servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota"];
	/** IAM actions required for the ListServiceQuotaIncreaseRequestsInTemplate API call. */
	static readonly LIST_SERVICE_QUOTA_INCREASE_REQUESTS_IN_TEMPLATE: string[] = [
		"servicequotas:ListServiceQuotaIncreaseRequestsInTemplate",
	];
	/** IAM actions required for the ListServiceQuotas API call. */
	static readonly LIST_SERVICE_QUOTAS: string[] = [
		"servicequotas:ListServiceQuotas",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["servicequotas:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"servicequotas:ListTagsForResource",
	];
	/** IAM actions required for the PutServiceQuotaIncreaseRequestIntoTemplate API call. */
	static readonly PUT_SERVICE_QUOTA_INCREASE_REQUEST_INTO_TEMPLATE: string[] = [
		"servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate",
	];
	/** IAM actions required for the RequestServiceQuotaIncrease API call. */
	static readonly REQUEST_SERVICE_QUOTA_INCREASE: string[] = [
		"servicequotas:RequestServiceQuotaIncrease",
	];
	/** IAM actions required for the StartAutoManagement API call. */
	static readonly START_AUTO_MANAGEMENT: string[] = [
		"servicequotas:StartAutoManagement",
	];
	/** IAM actions required for the StartQuotaUtilizationReport API call. */
	static readonly START_QUOTA_UTILIZATION_REPORT: string[] = [
		"servicequotas:StartQuotaUtilizationReport",
	];
	/** IAM actions required for the StopAutoManagement API call. */
	static readonly STOP_AUTO_MANAGEMENT: string[] = [
		"servicequotas:StopAutoManagement",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["servicequotas:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["servicequotas:UntagResource"];
	/** IAM actions required for the UpdateAutoManagement API call. */
	static readonly UPDATE_AUTO_MANAGEMENT: string[] = [
		"servicequotas:UpdateAutoManagement",
	];
}

/**
 * Condition key constants and builders for servicequotas.
 */
export class ServicequotasConditions {
	/** Condition keys applicable to the GetServiceQuota action. */
	static readonly GET_SERVICE_QUOTA_CONDITION_KEYS: string[] = [
		"servicequotas:service",
	];
	/** Condition keys applicable to the GetServiceQuotaIncreaseRequestFromTemplate action. */
	static readonly GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE_CONDITION_KEYS: string[] =
		["servicequotas:service"];
	/** Condition keys applicable to the ListRequestedServiceQuotaChangeHistoryByQuota action. */
	static readonly LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY_BY_QUOTA_CONDITION_KEYS: string[] =
		["servicequotas:service"];
	/** Condition keys applicable to the PutServiceQuotaIncreaseRequestIntoTemplate action. */
	static readonly PUT_SERVICE_QUOTA_INCREASE_REQUEST_INTO_TEMPLATE_CONDITION_KEYS: string[] =
		["servicequotas:service"];
	/** Condition keys applicable to the RequestServiceQuotaIncrease action. */
	static readonly REQUEST_SERVICE_QUOTA_INCREASE_CONDITION_KEYS: string[] = [
		"servicequotas:service",
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
	/** Condition key: servicequotas:service (String) */
	static readonly SERVICE = "servicequotas:service";

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

	/**
	 * Generates a condition block for `servicequotas:service`.
	 */
	static service(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicequotas:service": value } };
	}
}
