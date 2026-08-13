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
	static readonly AssociateServiceQuotaTemplate =
		"servicequotas:AssociateServiceQuotaTemplate";
	/** [Write] servicequotas:CreateSupportCase */
	static readonly CreateSupportCase = "servicequotas:CreateSupportCase";
	/** [Write] servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate */
	static readonly DeleteServiceQuotaIncreaseRequestFromTemplate =
		"servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate";
	/** [Write] servicequotas:DisassociateServiceQuotaTemplate */
	static readonly DisassociateServiceQuotaTemplate =
		"servicequotas:DisassociateServiceQuotaTemplate";
	/** [Read] servicequotas:GetAWSDefaultServiceQuota */
	static readonly actionGetAWSDefaultServiceQuota =
		"servicequotas:GetAWSDefaultServiceQuota";
	/** [Read] servicequotas:GetAssociationForServiceQuotaTemplate */
	static readonly actionGetAssociationForServiceQuotaTemplate =
		"servicequotas:GetAssociationForServiceQuotaTemplate";
	/** [Read] servicequotas:GetAutoManagementConfiguration */
	static readonly actionGetAutoManagementConfiguration =
		"servicequotas:GetAutoManagementConfiguration";
	/** [Read] servicequotas:GetQuotaUtilizationReport */
	static readonly actionGetQuotaUtilizationReport =
		"servicequotas:GetQuotaUtilizationReport";
	/** [Read] servicequotas:GetRequestedServiceQuotaChange */
	static readonly actionGetRequestedServiceQuotaChange =
		"servicequotas:GetRequestedServiceQuotaChange";
	/** [Read] servicequotas:GetServiceQuota */
	static readonly actionGetServiceQuota = "servicequotas:GetServiceQuota";
	/** [Read] servicequotas:GetServiceQuotaIncreaseRequestFromTemplate */
	static readonly actionGetServiceQuotaIncreaseRequestFromTemplate =
		"servicequotas:GetServiceQuotaIncreaseRequestFromTemplate";
	/** [Read] servicequotas:ListAWSDefaultServiceQuotas */
	static readonly ListAWSDefaultServiceQuotas =
		"servicequotas:ListAWSDefaultServiceQuotas";
	/** [Read] servicequotas:ListRequestedServiceQuotaChangeHistory */
	static readonly ListRequestedServiceQuotaChangeHistory =
		"servicequotas:ListRequestedServiceQuotaChangeHistory";
	/** [Read] servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota */
	static readonly ListRequestedServiceQuotaChangeHistoryByQuota =
		"servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota";
	/** [Read] servicequotas:ListServiceQuotaIncreaseRequestsInTemplate */
	static readonly ListServiceQuotaIncreaseRequestsInTemplate =
		"servicequotas:ListServiceQuotaIncreaseRequestsInTemplate";
	/** [Read] servicequotas:ListServiceQuotas */
	static readonly ListServiceQuotas = "servicequotas:ListServiceQuotas";
	/** [Read] servicequotas:ListServices */
	static readonly ListServices = "servicequotas:ListServices";
	/** [Read] servicequotas:ListTagsForResource */
	static readonly ListTagsForResource = "servicequotas:ListTagsForResource";
	/** [Write] servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate */
	static readonly PutServiceQuotaIncreaseRequestIntoTemplate =
		"servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate";
	/** [Write] servicequotas:RequestServiceQuotaIncrease */
	static readonly RequestServiceQuotaIncrease =
		"servicequotas:RequestServiceQuotaIncrease";
	/** [Write] servicequotas:StartAutoManagement */
	static readonly StartAutoManagement = "servicequotas:StartAutoManagement";
	/** [Read] servicequotas:StartQuotaUtilizationReport */
	static readonly StartQuotaUtilizationReport =
		"servicequotas:StartQuotaUtilizationReport";
	/** [Write] servicequotas:StopAutoManagement */
	static readonly StopAutoManagement = "servicequotas:StopAutoManagement";
	/** [Tagging] servicequotas:TagResource */
	static readonly TagResource = "servicequotas:TagResource";
	/** [Tagging] servicequotas:UntagResource */
	static readonly UntagResource = "servicequotas:UntagResource";
	/** [Write] servicequotas:UpdateAutoManagement */
	static readonly UpdateAutoManagement = "servicequotas:UpdateAutoManagement";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ServicequotasActions.actionGetAWSDefaultServiceQuota,
		ServicequotasActions.actionGetAssociationForServiceQuotaTemplate,
		ServicequotasActions.actionGetAutoManagementConfiguration,
		ServicequotasActions.actionGetQuotaUtilizationReport,
		ServicequotasActions.actionGetRequestedServiceQuotaChange,
		ServicequotasActions.actionGetServiceQuota,
		ServicequotasActions.actionGetServiceQuotaIncreaseRequestFromTemplate,
		ServicequotasActions.ListAWSDefaultServiceQuotas,
		ServicequotasActions.ListRequestedServiceQuotaChangeHistory,
		ServicequotasActions.ListRequestedServiceQuotaChangeHistoryByQuota,
		ServicequotasActions.ListServiceQuotaIncreaseRequestsInTemplate,
		ServicequotasActions.ListServiceQuotas,
		ServicequotasActions.ListServices,
		ServicequotasActions.ListTagsForResource,
		ServicequotasActions.StartQuotaUtilizationReport,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ServicequotasActions.AssociateServiceQuotaTemplate,
		ServicequotasActions.CreateSupportCase,
		ServicequotasActions.DeleteServiceQuotaIncreaseRequestFromTemplate,
		ServicequotasActions.DisassociateServiceQuotaTemplate,
		ServicequotasActions.PutServiceQuotaIncreaseRequestIntoTemplate,
		ServicequotasActions.RequestServiceQuotaIncrease,
		ServicequotasActions.StartAutoManagement,
		ServicequotasActions.StopAutoManagement,
		ServicequotasActions.UpdateAutoManagement,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ServicequotasActions.TagResource,
		ServicequotasActions.UntagResource,
	];
}

/**
 * Properties for building a quota ARN.
 */
export interface ServicequotasQuotaArnProps {
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
}

/**
 * Parsed components of a quota ARN.
 */
export interface ServicequotasQuotaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceCode component. */
	readonly serviceCode: string;
	/** The QuotaCode component. */
	readonly quotaCode: string;
}

const QuotaArnRegex =
	/^arn:(?<partition>[^:]+):servicequotas:(?<region>[^:]*):(?<account>[^:]*):(?<serviceCode>[^:/?]+)\/(?<quotaCode>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for servicequotas resources.
 */
export class ServicequotasResources {
	/**
	 * Builds an ARN for the quota resource.
	 */
	static quota(props: ServicequotasQuotaArnProps): string {
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
	static parseQuotaArn(arn: string): ServicequotasQuotaArnComponents {
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
	static readonly AssociateServiceQuotaTemplate: string[] = [
		"servicequotas:AssociateServiceQuotaTemplate",
	];
	/** IAM actions required for the CreateSupportCase API call. */
	static readonly CreateSupportCase: string[] = [
		"servicequotas:CreateSupportCase",
	];
	/** IAM actions required for the DeleteServiceQuotaIncreaseRequestFromTemplate API call. */
	static readonly DeleteServiceQuotaIncreaseRequestFromTemplate: string[] = [
		"servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate",
	];
	/** IAM actions required for the DisassociateServiceQuotaTemplate API call. */
	static readonly DisassociateServiceQuotaTemplate: string[] = [
		"servicequotas:DisassociateServiceQuotaTemplate",
	];
	/** IAM actions required for the GetAWSDefaultServiceQuota API call. */
	static readonly opGetAWSDefaultServiceQuota: string[] = [
		"servicequotas:GetAWSDefaultServiceQuota",
	];
	/** IAM actions required for the GetAssociationForServiceQuotaTemplate API call. */
	static readonly opGetAssociationForServiceQuotaTemplate: string[] = [
		"servicequotas:GetAssociationForServiceQuotaTemplate",
	];
	/** IAM actions required for the GetAutoManagementConfiguration API call. */
	static readonly opGetAutoManagementConfiguration: string[] = [
		"servicequotas:GetAutoManagementConfiguration",
	];
	/** IAM actions required for the GetQuotaUtilizationReport API call. */
	static readonly opGetQuotaUtilizationReport: string[] = [
		"servicequotas:GetQuotaUtilizationReport",
	];
	/** IAM actions required for the GetRequestedServiceQuotaChange API call. */
	static readonly opGetRequestedServiceQuotaChange: string[] = [
		"servicequotas:GetRequestedServiceQuotaChange",
	];
	/** IAM actions required for the GetServiceQuota API call. */
	static readonly opGetServiceQuota: string[] = [
		"servicequotas:GetServiceQuota",
	];
	/** IAM actions required for the GetServiceQuotaIncreaseRequestFromTemplate API call. */
	static readonly opGetServiceQuotaIncreaseRequestFromTemplate: string[] = [
		"servicequotas:GetServiceQuotaIncreaseRequestFromTemplate",
	];
	/** IAM actions required for the ListAWSDefaultServiceQuotas API call. */
	static readonly ListAWSDefaultServiceQuotas: string[] = [
		"servicequotas:ListAWSDefaultServiceQuotas",
	];
	/** IAM actions required for the ListRequestedServiceQuotaChangeHistory API call. */
	static readonly ListRequestedServiceQuotaChangeHistory: string[] = [
		"servicequotas:ListRequestedServiceQuotaChangeHistory",
	];
	/** IAM actions required for the ListRequestedServiceQuotaChangeHistoryByQuota API call. */
	static readonly ListRequestedServiceQuotaChangeHistoryByQuota: string[] = [
		"servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota",
	];
	/** IAM actions required for the ListServiceQuotaIncreaseRequestsInTemplate API call. */
	static readonly ListServiceQuotaIncreaseRequestsInTemplate: string[] = [
		"servicequotas:ListServiceQuotaIncreaseRequestsInTemplate",
	];
	/** IAM actions required for the ListServiceQuotas API call. */
	static readonly ListServiceQuotas: string[] = [
		"servicequotas:ListServiceQuotas",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["servicequotas:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"servicequotas:ListTagsForResource",
	];
	/** IAM actions required for the PutServiceQuotaIncreaseRequestIntoTemplate API call. */
	static readonly PutServiceQuotaIncreaseRequestIntoTemplate: string[] = [
		"servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate",
	];
	/** IAM actions required for the RequestServiceQuotaIncrease API call. */
	static readonly RequestServiceQuotaIncrease: string[] = [
		"servicequotas:RequestServiceQuotaIncrease",
	];
	/** IAM actions required for the StartAutoManagement API call. */
	static readonly StartAutoManagement: string[] = [
		"servicequotas:StartAutoManagement",
	];
	/** IAM actions required for the StartQuotaUtilizationReport API call. */
	static readonly StartQuotaUtilizationReport: string[] = [
		"servicequotas:StartQuotaUtilizationReport",
	];
	/** IAM actions required for the StopAutoManagement API call. */
	static readonly StopAutoManagement: string[] = [
		"servicequotas:StopAutoManagement",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["servicequotas:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["servicequotas:UntagResource"];
	/** IAM actions required for the UpdateAutoManagement API call. */
	static readonly UpdateAutoManagement: string[] = [
		"servicequotas:UpdateAutoManagement",
	];
}

/**
 * Condition key constants and builders for servicequotas.
 */
export class ServicequotasConditions {
	/** Condition keys applicable to the GetServiceQuota action. */
	static readonly actionGetServiceQuotaConditionKeys: string[] = [
		"servicequotas:service",
	];
	/** Condition keys applicable to the GetServiceQuotaIncreaseRequestFromTemplate action. */
	static readonly actionGetServiceQuotaIncreaseRequestFromTemplateConditionKeys: string[] =
		["servicequotas:service"];
	/** Condition keys applicable to the ListRequestedServiceQuotaChangeHistoryByQuota action. */
	static readonly ListRequestedServiceQuotaChangeHistoryByQuotaConditionKeys: string[] =
		["servicequotas:service"];
	/** Condition keys applicable to the PutServiceQuotaIncreaseRequestIntoTemplate action. */
	static readonly PutServiceQuotaIncreaseRequestIntoTemplateConditionKeys: string[] =
		["servicequotas:service"];
	/** Condition keys applicable to the RequestServiceQuotaIncrease action. */
	static readonly RequestServiceQuotaIncreaseConditionKeys: string[] = [
		"servicequotas:service",
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
