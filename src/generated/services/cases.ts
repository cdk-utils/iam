// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cases.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cases service.
 */
export class CasesActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cases";

	/** [Read] cases:BatchGetCaseRule */
	static readonly BATCH_GET_CASE_RULE = "cases:BatchGetCaseRule";
	/** [Read] cases:BatchGetField */
	static readonly BATCH_GET_FIELD = "cases:BatchGetField";
	/** [Write] cases:BatchPutFieldOptions */
	static readonly BATCH_PUT_FIELD_OPTIONS = "cases:BatchPutFieldOptions";
	/** [Write] cases:CreateCase */
	static readonly CREATE_CASE = "cases:CreateCase";
	/** [Write] cases:CreateCaseRule */
	static readonly CREATE_CASE_RULE = "cases:CreateCaseRule";
	/** [Write] cases:CreateDomain */
	static readonly CREATE_DOMAIN = "cases:CreateDomain";
	/** [Write] cases:CreateField */
	static readonly CREATE_FIELD = "cases:CreateField";
	/** [Write] cases:CreateLayout */
	static readonly CREATE_LAYOUT = "cases:CreateLayout";
	/** [Write] cases:CreateRelatedItem */
	static readonly CREATE_RELATED_ITEM = "cases:CreateRelatedItem";
	/** [Write] cases:CreateTemplate */
	static readonly CREATE_TEMPLATE = "cases:CreateTemplate";
	/** [Write] cases:DeleteCase */
	static readonly DELETE_CASE = "cases:DeleteCase";
	/** [Write] cases:DeleteCaseRule */
	static readonly DELETE_CASE_RULE = "cases:DeleteCaseRule";
	/** [Write] cases:DeleteDomain */
	static readonly DELETE_DOMAIN = "cases:DeleteDomain";
	/** [Write] cases:DeleteField */
	static readonly DELETE_FIELD = "cases:DeleteField";
	/** [Write] cases:DeleteLayout */
	static readonly DELETE_LAYOUT = "cases:DeleteLayout";
	/** [Write] cases:DeleteRelatedItem */
	static readonly DELETE_RELATED_ITEM = "cases:DeleteRelatedItem";
	/** [Write] cases:DeleteTemplate */
	static readonly DELETE_TEMPLATE = "cases:DeleteTemplate";
	/** [Read] cases:GetCase */
	static readonly GET_CASE = "cases:GetCase";
	/** [Read] cases:GetCaseAuditEvents */
	static readonly GET_CASE_AUDIT_EVENTS = "cases:GetCaseAuditEvents";
	/** [Read] cases:GetCaseEventConfiguration */
	static readonly GET_CASE_EVENT_CONFIGURATION =
		"cases:GetCaseEventConfiguration";
	/** [Read] cases:GetDomain */
	static readonly GET_DOMAIN = "cases:GetDomain";
	/** [Read] cases:GetLayout */
	static readonly GET_LAYOUT = "cases:GetLayout";
	/** [Read] cases:GetTemplate */
	static readonly GET_TEMPLATE = "cases:GetTemplate";
	/** [List] cases:ListCaseRules */
	static readonly LIST_CASE_RULES = "cases:ListCaseRules";
	/** [List] cases:ListCasesForContact */
	static readonly LIST_CASES_FOR_CONTACT = "cases:ListCasesForContact";
	/** [List] cases:ListDomains */
	static readonly LIST_DOMAINS = "cases:ListDomains";
	/** [List] cases:ListFieldOptions */
	static readonly LIST_FIELD_OPTIONS = "cases:ListFieldOptions";
	/** [List] cases:ListFields */
	static readonly LIST_FIELDS = "cases:ListFields";
	/** [List] cases:ListLayouts */
	static readonly LIST_LAYOUTS = "cases:ListLayouts";
	/** [Read] cases:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "cases:ListTagsForResource";
	/** [List] cases:ListTemplates */
	static readonly LIST_TEMPLATES = "cases:ListTemplates";
	/** [Write] cases:PutCaseEventConfiguration */
	static readonly PUT_CASE_EVENT_CONFIGURATION =
		"cases:PutCaseEventConfiguration";
	/** [Read] cases:SearchAllRelatedItems */
	static readonly SEARCH_ALL_RELATED_ITEMS = "cases:SearchAllRelatedItems";
	/** [Read] cases:SearchCases */
	static readonly SEARCH_CASES = "cases:SearchCases";
	/** [Read] cases:SearchRelatedItems */
	static readonly SEARCH_RELATED_ITEMS = "cases:SearchRelatedItems";
	/** [Tagging] cases:TagResource */
	static readonly TAG_RESOURCE = "cases:TagResource";
	/** [Tagging] cases:UntagResource */
	static readonly UNTAG_RESOURCE = "cases:UntagResource";
	/** [Write] cases:UpdateCase */
	static readonly UPDATE_CASE = "cases:UpdateCase";
	/** [Write] cases:UpdateCaseRule */
	static readonly UPDATE_CASE_RULE = "cases:UpdateCaseRule";
	/** [Write] cases:UpdateField */
	static readonly UPDATE_FIELD = "cases:UpdateField";
	/** [Write] cases:UpdateLayout */
	static readonly UPDATE_LAYOUT = "cases:UpdateLayout";
	/** [Write] cases:UpdateRelatedItem */
	static readonly UPDATE_RELATED_ITEM = "cases:UpdateRelatedItem";
	/** [Write] cases:UpdateTemplate */
	static readonly UPDATE_TEMPLATE = "cases:UpdateTemplate";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CasesActions.BATCH_GET_CASE_RULE,
		CasesActions.BATCH_GET_FIELD,
		CasesActions.GET_CASE,
		CasesActions.GET_CASE_AUDIT_EVENTS,
		CasesActions.GET_CASE_EVENT_CONFIGURATION,
		CasesActions.GET_DOMAIN,
		CasesActions.GET_LAYOUT,
		CasesActions.GET_TEMPLATE,
		CasesActions.LIST_TAGS_FOR_RESOURCE,
		CasesActions.SEARCH_ALL_RELATED_ITEMS,
		CasesActions.SEARCH_CASES,
		CasesActions.SEARCH_RELATED_ITEMS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CasesActions.BATCH_PUT_FIELD_OPTIONS,
		CasesActions.CREATE_CASE,
		CasesActions.CREATE_CASE_RULE,
		CasesActions.CREATE_DOMAIN,
		CasesActions.CREATE_FIELD,
		CasesActions.CREATE_LAYOUT,
		CasesActions.CREATE_RELATED_ITEM,
		CasesActions.CREATE_TEMPLATE,
		CasesActions.DELETE_CASE,
		CasesActions.DELETE_CASE_RULE,
		CasesActions.DELETE_DOMAIN,
		CasesActions.DELETE_FIELD,
		CasesActions.DELETE_LAYOUT,
		CasesActions.DELETE_RELATED_ITEM,
		CasesActions.DELETE_TEMPLATE,
		CasesActions.PUT_CASE_EVENT_CONFIGURATION,
		CasesActions.UPDATE_CASE,
		CasesActions.UPDATE_CASE_RULE,
		CasesActions.UPDATE_FIELD,
		CasesActions.UPDATE_LAYOUT,
		CasesActions.UPDATE_RELATED_ITEM,
		CasesActions.UPDATE_TEMPLATE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		CasesActions.LIST_CASE_RULES,
		CasesActions.LIST_CASES_FOR_CONTACT,
		CasesActions.LIST_DOMAINS,
		CasesActions.LIST_FIELD_OPTIONS,
		CasesActions.LIST_FIELDS,
		CasesActions.LIST_LAYOUTS,
		CasesActions.LIST_TEMPLATES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		CasesActions.TAG_RESOURCE,
		CasesActions.UNTAG_RESOURCE,
	];
}

const CaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/case/(?<caseId>[^:/?]+)$",
);
const CaseRuleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/case-rule/(?<caseRuleId>[^:/?]+)$",
);
const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)$",
);
const FieldArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/field/(?<fieldId>[^:/?]+)$",
);
const LayoutArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/layout/(?<layoutId>[^:/?]+)$",
);
const RelatedItemArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/case/(?<caseId>[^:/?]+)/related-item/(?<relatedItemId>[^:/?]+)$",
);
const TemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)/template/(?<templateId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cases resources.
 */
export class CasesResources {
	/**
	 * Builds an ARN for the Case resource.
	 */
	static case(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The CaseId component of the ARN. */
		readonly caseId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cases:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/case/${props.caseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Case resource.
	 */
	static isValidCaseArn(arn: string): boolean {
		return CaseArnRegex.test(arn);
	}

	/**
	 * Parses a Case ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		caseId: string;
	} {
		const match = CaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Case ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			caseId: match.groups!.caseId,
		};
	}

	/**
	 * Builds an ARN for the CaseRule resource.
	 */
	static caseRule(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The CaseRuleId component of the ARN. */
		readonly caseRuleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cases:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/case-rule/${props.caseRuleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the CaseRule resource.
	 */
	static isValidCaseRuleArn(arn: string): boolean {
		return CaseRuleArnRegex.test(arn);
	}

	/**
	 * Parses a CaseRule ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCaseRuleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		caseRuleId: string;
	} {
		const match = CaseRuleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid CaseRule ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			caseRuleId: match.groups!.caseRuleId,
		};
	}

	/**
	 * Builds an ARN for the Domain resource.
	 */
	static domain(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cases:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a Domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
		};
	}

	/**
	 * Builds an ARN for the Field resource.
	 */
	static field(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The FieldId component of the ARN. */
		readonly fieldId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cases:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/field/${props.fieldId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Field resource.
	 */
	static isValidFieldArn(arn: string): boolean {
		return FieldArnRegex.test(arn);
	}

	/**
	 * Parses a Field ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFieldArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		fieldId: string;
	} {
		const match = FieldArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Field ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			fieldId: match.groups!.fieldId,
		};
	}

	/**
	 * Builds an ARN for the Layout resource.
	 */
	static layout(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The LayoutId component of the ARN. */
		readonly layoutId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cases:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/layout/${props.layoutId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Layout resource.
	 */
	static isValidLayoutArn(arn: string): boolean {
		return LayoutArnRegex.test(arn);
	}

	/**
	 * Parses a Layout ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLayoutArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		layoutId: string;
	} {
		const match = LayoutArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Layout ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			layoutId: match.groups!.layoutId,
		};
	}

	/**
	 * Builds an ARN for the RelatedItem resource.
	 */
	static relatedItem(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The CaseId component of the ARN. */
		readonly caseId: string;
		/** The RelatedItemId component of the ARN. */
		readonly relatedItemId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cases:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/case/${props.caseId}/related-item/${props.relatedItemId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RelatedItem resource.
	 */
	static isValidRelatedItemArn(arn: string): boolean {
		return RelatedItemArnRegex.test(arn);
	}

	/**
	 * Parses a RelatedItem ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRelatedItemArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		caseId: string;
		relatedItemId: string;
	} {
		const match = RelatedItemArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RelatedItem ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			caseId: match.groups!.caseId,
			relatedItemId: match.groups!.relatedItemId,
		};
	}

	/**
	 * Builds an ARN for the Template resource.
	 */
	static template(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** The TemplateId component of the ARN. */
		readonly templateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cases:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}/template/${props.templateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Template resource.
	 */
	static isValidTemplateArn(arn: string): boolean {
		return TemplateArnRegex.test(arn);
	}

	/**
	 * Parses a Template ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
		templateId: string;
	} {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
			templateId: match.groups!.templateId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cases.
 */
export class CasesOperations {
	/** IAM actions required for the BatchGetCaseRule API call. */
	static readonly BATCH_GET_CASE_RULE: string[] = ["cases:BatchGetCaseRule"];
	/** IAM actions required for the BatchGetField API call. */
	static readonly BATCH_GET_FIELD: string[] = ["cases:BatchGetField"];
	/** IAM actions required for the BatchPutFieldOptions API call. */
	static readonly BATCH_PUT_FIELD_OPTIONS: string[] = [
		"cases:BatchPutFieldOptions",
	];
	/** IAM actions required for the CreateCase API call. */
	static readonly CREATE_CASE: string[] = [
		"cases:CreateCase",
		"cases:TagResource",
	];
	/** IAM actions required for the CreateCaseRule API call. */
	static readonly CREATE_CASE_RULE: string[] = ["cases:CreateCaseRule"];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = ["cases:CreateDomain"];
	/** IAM actions required for the CreateField API call. */
	static readonly CREATE_FIELD: string[] = ["cases:CreateField"];
	/** IAM actions required for the CreateLayout API call. */
	static readonly CREATE_LAYOUT: string[] = ["cases:CreateLayout"];
	/** IAM actions required for the CreateRelatedItem API call. */
	static readonly CREATE_RELATED_ITEM: string[] = ["cases:CreateRelatedItem"];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CREATE_TEMPLATE: string[] = ["cases:CreateTemplate"];
	/** IAM actions required for the DeleteCase API call. */
	static readonly DELETE_CASE: string[] = ["cases:DeleteCase"];
	/** IAM actions required for the DeleteCaseRule API call. */
	static readonly DELETE_CASE_RULE: string[] = ["cases:DeleteCaseRule"];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["cases:DeleteDomain"];
	/** IAM actions required for the DeleteField API call. */
	static readonly DELETE_FIELD: string[] = ["cases:DeleteField"];
	/** IAM actions required for the DeleteLayout API call. */
	static readonly DELETE_LAYOUT: string[] = ["cases:DeleteLayout"];
	/** IAM actions required for the DeleteRelatedItem API call. */
	static readonly DELETE_RELATED_ITEM: string[] = ["cases:DeleteRelatedItem"];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DELETE_TEMPLATE: string[] = ["cases:DeleteTemplate"];
	/** IAM actions required for the GetCase API call. */
	static readonly GET_CASE: string[] = ["cases:GetCase"];
	/** IAM actions required for the GetCaseAuditEvents API call. */
	static readonly GET_CASE_AUDIT_EVENTS: string[] = [
		"cases:GetCaseAuditEvents",
	];
	/** IAM actions required for the GetCaseEventConfiguration API call. */
	static readonly GET_CASE_EVENT_CONFIGURATION: string[] = [
		"cases:GetCaseEventConfiguration",
	];
	/** IAM actions required for the GetDomain API call. */
	static readonly GET_DOMAIN: string[] = ["cases:GetDomain"];
	/** IAM actions required for the GetLayout API call. */
	static readonly GET_LAYOUT: string[] = ["cases:GetLayout"];
	/** IAM actions required for the GetTemplate API call. */
	static readonly GET_TEMPLATE: string[] = ["cases:GetTemplate"];
	/** IAM actions required for the ListCaseRules API call. */
	static readonly LIST_CASE_RULES: string[] = ["cases:ListCaseRules"];
	/** IAM actions required for the ListCasesForContact API call. */
	static readonly LIST_CASES_FOR_CONTACT: string[] = [
		"cases:ListCasesForContact",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["cases:ListDomains"];
	/** IAM actions required for the ListFieldOptions API call. */
	static readonly LIST_FIELD_OPTIONS: string[] = ["cases:ListFieldOptions"];
	/** IAM actions required for the ListFields API call. */
	static readonly LIST_FIELDS: string[] = ["cases:ListFields"];
	/** IAM actions required for the ListLayouts API call. */
	static readonly LIST_LAYOUTS: string[] = ["cases:ListLayouts"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"cases:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly LIST_TEMPLATES: string[] = ["cases:ListTemplates"];
	/** IAM actions required for the PutCaseEventConfiguration API call. */
	static readonly PUT_CASE_EVENT_CONFIGURATION: string[] = [
		"cases:PutCaseEventConfiguration",
	];
	/** IAM actions required for the SearchAllRelatedItems API call. */
	static readonly SEARCH_ALL_RELATED_ITEMS: string[] = [
		"cases:SearchAllRelatedItems",
	];
	/** IAM actions required for the SearchCases API call. */
	static readonly SEARCH_CASES: string[] = ["cases:SearchCases"];
	/** IAM actions required for the SearchRelatedItems API call. */
	static readonly SEARCH_RELATED_ITEMS: string[] = ["cases:SearchRelatedItems"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["cases:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["cases:UntagResource"];
	/** IAM actions required for the UpdateCase API call. */
	static readonly UPDATE_CASE: string[] = ["cases:UpdateCase"];
	/** IAM actions required for the UpdateCaseRule API call. */
	static readonly UPDATE_CASE_RULE: string[] = ["cases:UpdateCaseRule"];
	/** IAM actions required for the UpdateField API call. */
	static readonly UPDATE_FIELD: string[] = ["cases:UpdateField"];
	/** IAM actions required for the UpdateLayout API call. */
	static readonly UPDATE_LAYOUT: string[] = ["cases:UpdateLayout"];
	/** IAM actions required for the UpdateRelatedItem API call. */
	static readonly UPDATE_RELATED_ITEM: string[] = ["cases:UpdateRelatedItem"];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UPDATE_TEMPLATE: string[] = ["cases:UpdateTemplate"];
}

/**
 * Condition key constants and builders for cases.
 */
export class CasesConditions {
	/** Condition keys applicable to the CreateCase action. */
	static readonly CREATE_CASE_CONDITION_KEYS: string[] = ["connect:UserArn"];
	/** Condition keys applicable to the CreateRelatedItem action. */
	static readonly CREATE_RELATED_ITEM_CONDITION_KEYS: string[] = [
		"connect:UserArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCase action. */
	static readonly UPDATE_CASE_CONDITION_KEYS: string[] = ["connect:UserArn"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: cases:CreatedBy (String) */
	static readonly CREATED_BY = "cases:CreatedBy";
	/** Condition key: cases:RelatedItemType (String) */
	static readonly RELATED_ITEM_TYPE = "cases:RelatedItemType";
	/** Condition key: connect:UserArn (ARN) */
	static readonly USER_ARN = "connect:UserArn";

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
	 * Generates a condition block for `cases:CreatedBy`.
	 */
	static createdBy(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "cases:CreatedBy": value } };
	}

	/**
	 * Generates a condition block for `cases:RelatedItemType`.
	 */
	static relatedItemType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "cases:RelatedItemType": value } };
	}
}
