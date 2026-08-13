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
	static readonly BatchGetCaseRule = "cases:BatchGetCaseRule";
	/** [Read] cases:BatchGetField */
	static readonly BatchGetField = "cases:BatchGetField";
	/** [Write] cases:BatchPutFieldOptions */
	static readonly BatchPutFieldOptions = "cases:BatchPutFieldOptions";
	/** [Write] cases:CreateCase */
	static readonly CreateCase = "cases:CreateCase";
	/** [Write] cases:CreateCaseRule */
	static readonly CreateCaseRule = "cases:CreateCaseRule";
	/** [Write] cases:CreateDomain */
	static readonly CreateDomain = "cases:CreateDomain";
	/** [Write] cases:CreateField */
	static readonly CreateField = "cases:CreateField";
	/** [Write] cases:CreateLayout */
	static readonly CreateLayout = "cases:CreateLayout";
	/** [Write] cases:CreateRelatedItem */
	static readonly CreateRelatedItem = "cases:CreateRelatedItem";
	/** [Write] cases:CreateTemplate */
	static readonly CreateTemplate = "cases:CreateTemplate";
	/** [Write] cases:DeleteCase */
	static readonly DeleteCase = "cases:DeleteCase";
	/** [Write] cases:DeleteCaseRule */
	static readonly DeleteCaseRule = "cases:DeleteCaseRule";
	/** [Write] cases:DeleteDomain */
	static readonly DeleteDomain = "cases:DeleteDomain";
	/** [Write] cases:DeleteField */
	static readonly DeleteField = "cases:DeleteField";
	/** [Write] cases:DeleteLayout */
	static readonly DeleteLayout = "cases:DeleteLayout";
	/** [Write] cases:DeleteRelatedItem */
	static readonly DeleteRelatedItem = "cases:DeleteRelatedItem";
	/** [Write] cases:DeleteTemplate */
	static readonly DeleteTemplate = "cases:DeleteTemplate";
	/** [Read] cases:GetCase */
	static readonly actionGetCase = "cases:GetCase";
	/** [Read] cases:GetCaseAuditEvents */
	static readonly actionGetCaseAuditEvents = "cases:GetCaseAuditEvents";
	/** [Read] cases:GetCaseEventConfiguration */
	static readonly actionGetCaseEventConfiguration =
		"cases:GetCaseEventConfiguration";
	/** [Read] cases:GetDomain */
	static readonly actionGetDomain = "cases:GetDomain";
	/** [Read] cases:GetLayout */
	static readonly actionGetLayout = "cases:GetLayout";
	/** [Read] cases:GetTemplate */
	static readonly actionGetTemplate = "cases:GetTemplate";
	/** [List] cases:ListCaseRules */
	static readonly ListCaseRules = "cases:ListCaseRules";
	/** [List] cases:ListCasesForContact */
	static readonly ListCasesForContact = "cases:ListCasesForContact";
	/** [List] cases:ListDomains */
	static readonly ListDomains = "cases:ListDomains";
	/** [List] cases:ListFieldOptions */
	static readonly ListFieldOptions = "cases:ListFieldOptions";
	/** [List] cases:ListFields */
	static readonly ListFields = "cases:ListFields";
	/** [List] cases:ListLayouts */
	static readonly ListLayouts = "cases:ListLayouts";
	/** [Read] cases:ListTagsForResource */
	static readonly ListTagsForResource = "cases:ListTagsForResource";
	/** [List] cases:ListTemplates */
	static readonly ListTemplates = "cases:ListTemplates";
	/** [Write] cases:PutCaseEventConfiguration */
	static readonly PutCaseEventConfiguration = "cases:PutCaseEventConfiguration";
	/** [Read] cases:SearchAllRelatedItems */
	static readonly SearchAllRelatedItems = "cases:SearchAllRelatedItems";
	/** [Read] cases:SearchCases */
	static readonly SearchCases = "cases:SearchCases";
	/** [Read] cases:SearchRelatedItems */
	static readonly SearchRelatedItems = "cases:SearchRelatedItems";
	/** [Tagging] cases:TagResource */
	static readonly TagResource = "cases:TagResource";
	/** [Tagging] cases:UntagResource */
	static readonly UntagResource = "cases:UntagResource";
	/** [Write] cases:UpdateCase */
	static readonly UpdateCase = "cases:UpdateCase";
	/** [Write] cases:UpdateCaseRule */
	static readonly UpdateCaseRule = "cases:UpdateCaseRule";
	/** [Write] cases:UpdateField */
	static readonly UpdateField = "cases:UpdateField";
	/** [Write] cases:UpdateLayout */
	static readonly UpdateLayout = "cases:UpdateLayout";
	/** [Write] cases:UpdateRelatedItem */
	static readonly UpdateRelatedItem = "cases:UpdateRelatedItem";
	/** [Write] cases:UpdateTemplate */
	static readonly UpdateTemplate = "cases:UpdateTemplate";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CasesActions.BatchGetCaseRule,
		CasesActions.BatchGetField,
		CasesActions.actionGetCase,
		CasesActions.actionGetCaseAuditEvents,
		CasesActions.actionGetCaseEventConfiguration,
		CasesActions.actionGetDomain,
		CasesActions.actionGetLayout,
		CasesActions.actionGetTemplate,
		CasesActions.ListTagsForResource,
		CasesActions.SearchAllRelatedItems,
		CasesActions.SearchCases,
		CasesActions.SearchRelatedItems,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CasesActions.BatchPutFieldOptions,
		CasesActions.CreateCase,
		CasesActions.CreateCaseRule,
		CasesActions.CreateDomain,
		CasesActions.CreateField,
		CasesActions.CreateLayout,
		CasesActions.CreateRelatedItem,
		CasesActions.CreateTemplate,
		CasesActions.DeleteCase,
		CasesActions.DeleteCaseRule,
		CasesActions.DeleteDomain,
		CasesActions.DeleteField,
		CasesActions.DeleteLayout,
		CasesActions.DeleteRelatedItem,
		CasesActions.DeleteTemplate,
		CasesActions.PutCaseEventConfiguration,
		CasesActions.UpdateCase,
		CasesActions.UpdateCaseRule,
		CasesActions.UpdateField,
		CasesActions.UpdateLayout,
		CasesActions.UpdateRelatedItem,
		CasesActions.UpdateTemplate,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		CasesActions.ListCaseRules,
		CasesActions.ListCasesForContact,
		CasesActions.ListDomains,
		CasesActions.ListFieldOptions,
		CasesActions.ListFields,
		CasesActions.ListLayouts,
		CasesActions.ListTemplates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		CasesActions.TagResource,
		CasesActions.UntagResource,
	];
}

/**
 * Properties for building a Case ARN.
 */
export interface CasesCaseArnProps {
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
}

/**
 * Parsed components of a Case ARN.
 */
export interface CasesCaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The CaseId component. */
	readonly caseId: string;
}

/**
 * Properties for building a CaseRule ARN.
 */
export interface CasesCaseRuleArnProps {
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
}

/**
 * Parsed components of a CaseRule ARN.
 */
export interface CasesCaseRuleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The CaseRuleId component. */
	readonly caseRuleId: string;
}

/**
 * Properties for building a Domain ARN.
 */
export interface CasesDomainArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Domain ARN.
 */
export interface CasesDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
}

/**
 * Properties for building a Field ARN.
 */
export interface CasesFieldArnProps {
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
}

/**
 * Parsed components of a Field ARN.
 */
export interface CasesFieldArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The FieldId component. */
	readonly fieldId: string;
}

/**
 * Properties for building a Layout ARN.
 */
export interface CasesLayoutArnProps {
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
}

/**
 * Parsed components of a Layout ARN.
 */
export interface CasesLayoutArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The LayoutId component. */
	readonly layoutId: string;
}

/**
 * Properties for building a RelatedItem ARN.
 */
export interface CasesRelatedItemArnProps {
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
}

/**
 * Parsed components of a RelatedItem ARN.
 */
export interface CasesRelatedItemArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The CaseId component. */
	readonly caseId: string;
	/** The RelatedItemId component. */
	readonly relatedItemId: string;
}

/**
 * Properties for building a Template ARN.
 */
export interface CasesTemplateArnProps {
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
}

/**
 * Parsed components of a Template ARN.
 */
export interface CasesTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
	/** The TemplateId component. */
	readonly templateId: string;
}

const CaseArnRegex =
	/^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/case\/(?<caseId>[^:/?]+)$/;
const CaseRuleArnRegex =
	/^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/case-rule\/(?<caseRuleId>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)$/;
const FieldArnRegex =
	/^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/field\/(?<fieldId>[^:/?]+)$/;
const LayoutArnRegex =
	/^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/layout\/(?<layoutId>[^:/?]+)$/;
const RelatedItemArnRegex =
	/^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/case\/(?<caseId>[^:/?]+)\/related-item\/(?<relatedItemId>[^:/?]+)$/;
const TemplateArnRegex =
	/^arn:(?<partition>[^:]+):cases:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)\/template\/(?<templateId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cases resources.
 */
export class CasesResources {
	/**
	 * Builds an ARN for the Case resource.
	 */
	static case(props: CasesCaseArnProps): string {
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
	static parseCaseArn(arn: string): CasesCaseArnComponents {
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
	static caseRule(props: CasesCaseRuleArnProps): string {
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
	static parseCaseRuleArn(arn: string): CasesCaseRuleArnComponents {
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
	static domain(props: CasesDomainArnProps): string {
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
	static parseDomainArn(arn: string): CasesDomainArnComponents {
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
	static field(props: CasesFieldArnProps): string {
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
	static parseFieldArn(arn: string): CasesFieldArnComponents {
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
	static layout(props: CasesLayoutArnProps): string {
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
	static parseLayoutArn(arn: string): CasesLayoutArnComponents {
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
	static relatedItem(props: CasesRelatedItemArnProps): string {
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
	static parseRelatedItemArn(arn: string): CasesRelatedItemArnComponents {
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
	static template(props: CasesTemplateArnProps): string {
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
	static parseTemplateArn(arn: string): CasesTemplateArnComponents {
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
	static readonly BatchGetCaseRule: string[] = ["cases:BatchGetCaseRule"];
	/** IAM actions required for the BatchGetField API call. */
	static readonly BatchGetField: string[] = ["cases:BatchGetField"];
	/** IAM actions required for the BatchPutFieldOptions API call. */
	static readonly BatchPutFieldOptions: string[] = [
		"cases:BatchPutFieldOptions",
	];
	/** IAM actions required for the CreateCase API call. */
	static readonly CreateCase: string[] = [
		"cases:CreateCase",
		"cases:TagResource",
	];
	/** IAM actions required for the CreateCaseRule API call. */
	static readonly CreateCaseRule: string[] = ["cases:CreateCaseRule"];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = ["cases:CreateDomain"];
	/** IAM actions required for the CreateField API call. */
	static readonly CreateField: string[] = ["cases:CreateField"];
	/** IAM actions required for the CreateLayout API call. */
	static readonly CreateLayout: string[] = ["cases:CreateLayout"];
	/** IAM actions required for the CreateRelatedItem API call. */
	static readonly CreateRelatedItem: string[] = ["cases:CreateRelatedItem"];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CreateTemplate: string[] = ["cases:CreateTemplate"];
	/** IAM actions required for the DeleteCase API call. */
	static readonly DeleteCase: string[] = ["cases:DeleteCase"];
	/** IAM actions required for the DeleteCaseRule API call. */
	static readonly DeleteCaseRule: string[] = ["cases:DeleteCaseRule"];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["cases:DeleteDomain"];
	/** IAM actions required for the DeleteField API call. */
	static readonly DeleteField: string[] = ["cases:DeleteField"];
	/** IAM actions required for the DeleteLayout API call. */
	static readonly DeleteLayout: string[] = ["cases:DeleteLayout"];
	/** IAM actions required for the DeleteRelatedItem API call. */
	static readonly DeleteRelatedItem: string[] = ["cases:DeleteRelatedItem"];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DeleteTemplate: string[] = ["cases:DeleteTemplate"];
	/** IAM actions required for the GetCase API call. */
	static readonly opGetCase: string[] = ["cases:GetCase"];
	/** IAM actions required for the GetCaseAuditEvents API call. */
	static readonly opGetCaseAuditEvents: string[] = ["cases:GetCaseAuditEvents"];
	/** IAM actions required for the GetCaseEventConfiguration API call. */
	static readonly opGetCaseEventConfiguration: string[] = [
		"cases:GetCaseEventConfiguration",
	];
	/** IAM actions required for the GetDomain API call. */
	static readonly opGetDomain: string[] = ["cases:GetDomain"];
	/** IAM actions required for the GetLayout API call. */
	static readonly opGetLayout: string[] = ["cases:GetLayout"];
	/** IAM actions required for the GetTemplate API call. */
	static readonly opGetTemplate: string[] = ["cases:GetTemplate"];
	/** IAM actions required for the ListCaseRules API call. */
	static readonly ListCaseRules: string[] = ["cases:ListCaseRules"];
	/** IAM actions required for the ListCasesForContact API call. */
	static readonly ListCasesForContact: string[] = ["cases:ListCasesForContact"];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["cases:ListDomains"];
	/** IAM actions required for the ListFieldOptions API call. */
	static readonly ListFieldOptions: string[] = ["cases:ListFieldOptions"];
	/** IAM actions required for the ListFields API call. */
	static readonly ListFields: string[] = ["cases:ListFields"];
	/** IAM actions required for the ListLayouts API call. */
	static readonly ListLayouts: string[] = ["cases:ListLayouts"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["cases:ListTagsForResource"];
	/** IAM actions required for the ListTemplates API call. */
	static readonly ListTemplates: string[] = ["cases:ListTemplates"];
	/** IAM actions required for the PutCaseEventConfiguration API call. */
	static readonly PutCaseEventConfiguration: string[] = [
		"cases:PutCaseEventConfiguration",
	];
	/** IAM actions required for the SearchAllRelatedItems API call. */
	static readonly SearchAllRelatedItems: string[] = [
		"cases:SearchAllRelatedItems",
	];
	/** IAM actions required for the SearchCases API call. */
	static readonly SearchCases: string[] = ["cases:SearchCases"];
	/** IAM actions required for the SearchRelatedItems API call. */
	static readonly SearchRelatedItems: string[] = ["cases:SearchRelatedItems"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["cases:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["cases:UntagResource"];
	/** IAM actions required for the UpdateCase API call. */
	static readonly UpdateCase: string[] = ["cases:UpdateCase"];
	/** IAM actions required for the UpdateCaseRule API call. */
	static readonly UpdateCaseRule: string[] = ["cases:UpdateCaseRule"];
	/** IAM actions required for the UpdateField API call. */
	static readonly UpdateField: string[] = ["cases:UpdateField"];
	/** IAM actions required for the UpdateLayout API call. */
	static readonly UpdateLayout: string[] = ["cases:UpdateLayout"];
	/** IAM actions required for the UpdateRelatedItem API call. */
	static readonly UpdateRelatedItem: string[] = ["cases:UpdateRelatedItem"];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UpdateTemplate: string[] = ["cases:UpdateTemplate"];
}

/**
 * Condition key constants and builders for cases.
 */
export class CasesConditions {
	/** Condition keys applicable to the CreateCase action. */
	static readonly CreateCaseConditionKeys: string[] = ["connect:UserArn"];
	/** Condition keys applicable to the CreateRelatedItem action. */
	static readonly CreateRelatedItemConditionKeys: string[] = [
		"connect:UserArn",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateCase action. */
	static readonly UpdateCaseConditionKeys: string[] = ["connect:UserArn"];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
