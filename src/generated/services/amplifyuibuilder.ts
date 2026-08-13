// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/amplifyuibuilder.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the amplifyuibuilder service.
 */
export class AmplifyuibuilderActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "amplifyuibuilder";

	/** [Write] amplifyuibuilder:CreateComponent */
	static readonly CREATE_COMPONENT = "amplifyuibuilder:CreateComponent";
	/** [Write] amplifyuibuilder:CreateForm */
	static readonly CREATE_FORM = "amplifyuibuilder:CreateForm";
	/** [Write] amplifyuibuilder:CreateTheme */
	static readonly CREATE_THEME = "amplifyuibuilder:CreateTheme";
	/** [Write] amplifyuibuilder:DeleteComponent */
	static readonly DELETE_COMPONENT = "amplifyuibuilder:DeleteComponent";
	/** [Write] amplifyuibuilder:DeleteForm */
	static readonly DELETE_FORM = "amplifyuibuilder:DeleteForm";
	/** [Write] amplifyuibuilder:DeleteTheme */
	static readonly DELETE_THEME = "amplifyuibuilder:DeleteTheme";
	/** [Write] amplifyuibuilder:ExchangeCodeForToken */
	static readonly EXCHANGE_CODE_FOR_TOKEN =
		"amplifyuibuilder:ExchangeCodeForToken";
	/** [Read] amplifyuibuilder:ExportComponents */
	static readonly EXPORT_COMPONENTS = "amplifyuibuilder:ExportComponents";
	/** [Read] amplifyuibuilder:ExportForms */
	static readonly EXPORT_FORMS = "amplifyuibuilder:ExportForms";
	/** [Read] amplifyuibuilder:ExportThemes */
	static readonly EXPORT_THEMES = "amplifyuibuilder:ExportThemes";
	/** [Read] amplifyuibuilder:GetCodegenJob */
	static readonly GET_CODEGEN_JOB = "amplifyuibuilder:GetCodegenJob";
	/** [Read] amplifyuibuilder:GetComponent */
	static readonly GET_COMPONENT = "amplifyuibuilder:GetComponent";
	/** [Read] amplifyuibuilder:GetForm */
	static readonly GET_FORM = "amplifyuibuilder:GetForm";
	/** [Read] amplifyuibuilder:GetMetadata */
	static readonly GET_METADATA = "amplifyuibuilder:GetMetadata";
	/** [Read] amplifyuibuilder:GetTheme */
	static readonly GET_THEME = "amplifyuibuilder:GetTheme";
	/** [List] amplifyuibuilder:ListCodegenJobs */
	static readonly LIST_CODEGEN_JOBS = "amplifyuibuilder:ListCodegenJobs";
	/** [List] amplifyuibuilder:ListComponents */
	static readonly LIST_COMPONENTS = "amplifyuibuilder:ListComponents";
	/** [List] amplifyuibuilder:ListForms */
	static readonly LIST_FORMS = "amplifyuibuilder:ListForms";
	/** [List] amplifyuibuilder:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"amplifyuibuilder:ListTagsForResource";
	/** [List] amplifyuibuilder:ListThemes */
	static readonly LIST_THEMES = "amplifyuibuilder:ListThemes";
	/** [Write] amplifyuibuilder:PutMetadataFlag */
	static readonly PUT_METADATA_FLAG = "amplifyuibuilder:PutMetadataFlag";
	/** [Write] amplifyuibuilder:RefreshToken */
	static readonly REFRESH_TOKEN = "amplifyuibuilder:RefreshToken";
	/** [Write] amplifyuibuilder:ResetMetadataFlag */
	static readonly RESET_METADATA_FLAG = "amplifyuibuilder:ResetMetadataFlag";
	/** [Write] amplifyuibuilder:StartCodegenJob */
	static readonly START_CODEGEN_JOB = "amplifyuibuilder:StartCodegenJob";
	/** [Tagging] amplifyuibuilder:TagResource */
	static readonly TAG_RESOURCE = "amplifyuibuilder:TagResource";
	/** [Tagging] amplifyuibuilder:UntagResource */
	static readonly UNTAG_RESOURCE = "amplifyuibuilder:UntagResource";
	/** [Write] amplifyuibuilder:UpdateComponent */
	static readonly UPDATE_COMPONENT = "amplifyuibuilder:UpdateComponent";
	/** [Write] amplifyuibuilder:UpdateForm */
	static readonly UPDATE_FORM = "amplifyuibuilder:UpdateForm";
	/** [Write] amplifyuibuilder:UpdateTheme */
	static readonly UPDATE_THEME = "amplifyuibuilder:UpdateTheme";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AmplifyuibuilderActions.EXPORT_COMPONENTS,
		AmplifyuibuilderActions.EXPORT_FORMS,
		AmplifyuibuilderActions.EXPORT_THEMES,
		AmplifyuibuilderActions.GET_CODEGEN_JOB,
		AmplifyuibuilderActions.GET_COMPONENT,
		AmplifyuibuilderActions.GET_FORM,
		AmplifyuibuilderActions.GET_METADATA,
		AmplifyuibuilderActions.GET_THEME,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AmplifyuibuilderActions.CREATE_COMPONENT,
		AmplifyuibuilderActions.CREATE_FORM,
		AmplifyuibuilderActions.CREATE_THEME,
		AmplifyuibuilderActions.DELETE_COMPONENT,
		AmplifyuibuilderActions.DELETE_FORM,
		AmplifyuibuilderActions.DELETE_THEME,
		AmplifyuibuilderActions.EXCHANGE_CODE_FOR_TOKEN,
		AmplifyuibuilderActions.PUT_METADATA_FLAG,
		AmplifyuibuilderActions.REFRESH_TOKEN,
		AmplifyuibuilderActions.RESET_METADATA_FLAG,
		AmplifyuibuilderActions.START_CODEGEN_JOB,
		AmplifyuibuilderActions.UPDATE_COMPONENT,
		AmplifyuibuilderActions.UPDATE_FORM,
		AmplifyuibuilderActions.UPDATE_THEME,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AmplifyuibuilderActions.LIST_CODEGEN_JOBS,
		AmplifyuibuilderActions.LIST_COMPONENTS,
		AmplifyuibuilderActions.LIST_FORMS,
		AmplifyuibuilderActions.LIST_TAGS_FOR_RESOURCE,
		AmplifyuibuilderActions.LIST_THEMES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AmplifyuibuilderActions.TAG_RESOURCE,
		AmplifyuibuilderActions.UNTAG_RESOURCE,
	];
}

const CodegenJobResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app/(?<appId>[^:/?]+)/environment/(?<environmentName>[^:/?]+)/codegen-jobs/(?<id>[^:/?]+)$",
);
const ComponentResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app/(?<appId>[^:/?]+)/environment/(?<environmentName>[^:/?]+)/components/(?<id>[^:/?]+)$",
);
const FormResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app/(?<appId>[^:/?]+)/environment/(?<environmentName>[^:/?]+)/forms/(?<id>[^:/?]+)$",
);
const ThemeResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app/(?<appId>[^:/?]+)/environment/(?<environmentName>[^:/?]+)/themes/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for amplifyuibuilder resources.
 */
export class AmplifyuibuilderResources {
	/**
	 * Builds an ARN for the CodegenJobResource resource.
	 */
	static codegenJobResource(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** The EnvironmentName component of the ARN. */
		readonly environmentName: string;
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifyuibuilder:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.appId}/environment/${props.environmentName}/codegen-jobs/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the CodegenJobResource resource.
	 */
	static isValidCodegenJobResourceArn(arn: string): boolean {
		return CodegenJobResourceArnRegex.test(arn);
	}

	/**
	 * Parses a CodegenJobResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCodegenJobResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
		environmentName: string;
		id: string;
	} {
		const match = CodegenJobResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid CodegenJobResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			environmentName: match.groups!.environmentName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the ComponentResource resource.
	 */
	static componentResource(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** The EnvironmentName component of the ARN. */
		readonly environmentName: string;
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifyuibuilder:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.appId}/environment/${props.environmentName}/components/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ComponentResource resource.
	 */
	static isValidComponentResourceArn(arn: string): boolean {
		return ComponentResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ComponentResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComponentResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
		environmentName: string;
		id: string;
	} {
		const match = ComponentResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ComponentResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			environmentName: match.groups!.environmentName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the FormResource resource.
	 */
	static formResource(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** The EnvironmentName component of the ARN. */
		readonly environmentName: string;
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifyuibuilder:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.appId}/environment/${props.environmentName}/forms/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the FormResource resource.
	 */
	static isValidFormResourceArn(arn: string): boolean {
		return FormResourceArnRegex.test(arn);
	}

	/**
	 * Parses a FormResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFormResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
		environmentName: string;
		id: string;
	} {
		const match = FormResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid FormResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			environmentName: match.groups!.environmentName,
			id: match.groups!.id,
		};
	}

	/**
	 * Builds an ARN for the ThemeResource resource.
	 */
	static themeResource(props: {
		/** The AppId component of the ARN. */
		readonly appId: string;
		/** The EnvironmentName component of the ARN. */
		readonly environmentName: string;
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:amplifyuibuilder:${props.region ?? "*"}:${props.account ?? "*"}:app/${props.appId}/environment/${props.environmentName}/themes/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ThemeResource resource.
	 */
	static isValidThemeResourceArn(arn: string): boolean {
		return ThemeResourceArnRegex.test(arn);
	}

	/**
	 * Parses a ThemeResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseThemeResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		appId: string;
		environmentName: string;
		id: string;
	} {
		const match = ThemeResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ThemeResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			appId: match.groups!.appId,
			environmentName: match.groups!.environmentName,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for amplifyuibuilder.
 */
export class AmplifyuibuilderOperations {
	/** IAM actions required for the CreateComponent API call. */
	static readonly CREATE_COMPONENT: string[] = [
		"amplifyuibuilder:CreateComponent",
		"amplifyuibuilder:TagResource",
	];
	/** IAM actions required for the CreateForm API call. */
	static readonly CREATE_FORM: string[] = [
		"amplifyuibuilder:CreateForm",
		"amplifyuibuilder:TagResource",
	];
	/** IAM actions required for the CreateTheme API call. */
	static readonly CREATE_THEME: string[] = [
		"amplifyuibuilder:CreateTheme",
		"amplifyuibuilder:TagResource",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DELETE_COMPONENT: string[] = [
		"amplifyuibuilder:DeleteComponent",
	];
	/** IAM actions required for the DeleteForm API call. */
	static readonly DELETE_FORM: string[] = ["amplifyuibuilder:DeleteForm"];
	/** IAM actions required for the DeleteTheme API call. */
	static readonly DELETE_THEME: string[] = ["amplifyuibuilder:DeleteTheme"];
	/** IAM actions required for the ExchangeCodeForToken API call. */
	static readonly EXCHANGE_CODE_FOR_TOKEN: string[] = [
		"amplifyuibuilder:ExchangeCodeForToken",
	];
	/** IAM actions required for the ExportComponents API call. */
	static readonly EXPORT_COMPONENTS: string[] = [
		"amplifyuibuilder:ExportComponents",
	];
	/** IAM actions required for the ExportForms API call. */
	static readonly EXPORT_FORMS: string[] = ["amplifyuibuilder:ExportForms"];
	/** IAM actions required for the ExportThemes API call. */
	static readonly EXPORT_THEMES: string[] = ["amplifyuibuilder:ExportThemes"];
	/** IAM actions required for the GetCodegenJob API call. */
	static readonly GET_CODEGEN_JOB: string[] = [
		"amplifyuibuilder:GetCodegenJob",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly GET_COMPONENT: string[] = ["amplifyuibuilder:GetComponent"];
	/** IAM actions required for the GetForm API call. */
	static readonly GET_FORM: string[] = ["amplifyuibuilder:GetForm"];
	/** IAM actions required for the GetMetadata API call. */
	static readonly GET_METADATA: string[] = ["amplifyuibuilder:GetMetadata"];
	/** IAM actions required for the GetTheme API call. */
	static readonly GET_THEME: string[] = ["amplifyuibuilder:GetTheme"];
	/** IAM actions required for the ListCodegenJobs API call. */
	static readonly LIST_CODEGEN_JOBS: string[] = [
		"amplifyuibuilder:ListCodegenJobs",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly LIST_COMPONENTS: string[] = [
		"amplifyuibuilder:ListComponents",
	];
	/** IAM actions required for the ListForms API call. */
	static readonly LIST_FORMS: string[] = ["amplifyuibuilder:ListForms"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"amplifyuibuilder:ListTagsForResource",
	];
	/** IAM actions required for the ListThemes API call. */
	static readonly LIST_THEMES: string[] = ["amplifyuibuilder:ListThemes"];
	/** IAM actions required for the PutMetadataFlag API call. */
	static readonly PUT_METADATA_FLAG: string[] = [
		"amplifyuibuilder:PutMetadataFlag",
	];
	/** IAM actions required for the RefreshToken API call. */
	static readonly REFRESH_TOKEN: string[] = ["amplifyuibuilder:RefreshToken"];
	/** IAM actions required for the StartCodegenJob API call. */
	static readonly START_CODEGEN_JOB: string[] = [
		"amplifyuibuilder:StartCodegenJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["amplifyuibuilder:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["amplifyuibuilder:UntagResource"];
	/** IAM actions required for the UpdateComponent API call. */
	static readonly UPDATE_COMPONENT: string[] = [
		"amplifyuibuilder:UpdateComponent",
	];
	/** IAM actions required for the UpdateForm API call. */
	static readonly UPDATE_FORM: string[] = ["amplifyuibuilder:UpdateForm"];
	/** IAM actions required for the UpdateTheme API call. */
	static readonly UPDATE_THEME: string[] = ["amplifyuibuilder:UpdateTheme"];
}

/**
 * Condition key constants and builders for amplifyuibuilder.
 */
export class AmplifyuibuilderConditions {
	/** Condition keys applicable to the CreateComponent action. */
	static readonly CREATE_COMPONENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForm action. */
	static readonly CREATE_FORM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTheme action. */
	static readonly CREATE_THEME_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCodegenJob action. */
	static readonly START_CODEGEN_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

	/** Condition key: amplifyuibuilder:CodegenJobResourceAppId (String) */
	static readonly CODEGEN_JOB_RESOURCE_APP_ID =
		"amplifyuibuilder:CodegenJobResourceAppId";
	/** Condition key: amplifyuibuilder:CodegenJobResourceEnvironmentName (String) */
	static readonly CODEGEN_JOB_RESOURCE_ENVIRONMENT_NAME =
		"amplifyuibuilder:CodegenJobResourceEnvironmentName";
	/** Condition key: amplifyuibuilder:CodegenJobResourceId (String) */
	static readonly CODEGEN_JOB_RESOURCE_ID =
		"amplifyuibuilder:CodegenJobResourceId";
	/** Condition key: amplifyuibuilder:ComponentResourceAppId (String) */
	static readonly COMPONENT_RESOURCE_APP_ID =
		"amplifyuibuilder:ComponentResourceAppId";
	/** Condition key: amplifyuibuilder:ComponentResourceEnvironmentName (String) */
	static readonly COMPONENT_RESOURCE_ENVIRONMENT_NAME =
		"amplifyuibuilder:ComponentResourceEnvironmentName";
	/** Condition key: amplifyuibuilder:ComponentResourceId (String) */
	static readonly COMPONENT_RESOURCE_ID =
		"amplifyuibuilder:ComponentResourceId";
	/** Condition key: amplifyuibuilder:FormResourceAppId (String) */
	static readonly FORM_RESOURCE_APP_ID = "amplifyuibuilder:FormResourceAppId";
	/** Condition key: amplifyuibuilder:FormResourceEnvironmentName (String) */
	static readonly FORM_RESOURCE_ENVIRONMENT_NAME =
		"amplifyuibuilder:FormResourceEnvironmentName";
	/** Condition key: amplifyuibuilder:FormResourceId (String) */
	static readonly FORM_RESOURCE_ID = "amplifyuibuilder:FormResourceId";
	/** Condition key: amplifyuibuilder:ThemeResourceAppId (String) */
	static readonly THEME_RESOURCE_APP_ID = "amplifyuibuilder:ThemeResourceAppId";
	/** Condition key: amplifyuibuilder:ThemeResourceEnvironmentName (String) */
	static readonly THEME_RESOURCE_ENVIRONMENT_NAME =
		"amplifyuibuilder:ThemeResourceEnvironmentName";
	/** Condition key: amplifyuibuilder:ThemeResourceId (String) */
	static readonly THEME_RESOURCE_ID = "amplifyuibuilder:ThemeResourceId";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `amplifyuibuilder:CodegenJobResourceAppId`.
	 */
	static codegenJobResourceAppId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "amplifyuibuilder:CodegenJobResourceAppId": value },
		};
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:CodegenJobResourceEnvironmentName`.
	 */
	static codegenJobResourceEnvironmentName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"amplifyuibuilder:CodegenJobResourceEnvironmentName": value,
			},
		};
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:CodegenJobResourceId`.
	 */
	static codegenJobResourceId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "amplifyuibuilder:CodegenJobResourceId": value } };
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:ComponentResourceAppId`.
	 */
	static componentResourceAppId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "amplifyuibuilder:ComponentResourceAppId": value },
		};
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:ComponentResourceEnvironmentName`.
	 */
	static componentResourceEnvironmentName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: {
				"amplifyuibuilder:ComponentResourceEnvironmentName": value,
			},
		};
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:ComponentResourceId`.
	 */
	static componentResourceId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "amplifyuibuilder:ComponentResourceId": value } };
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:FormResourceAppId`.
	 */
	static formResourceAppId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "amplifyuibuilder:FormResourceAppId": value } };
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:FormResourceEnvironmentName`.
	 */
	static formResourceEnvironmentName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "amplifyuibuilder:FormResourceEnvironmentName": value },
		};
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:FormResourceId`.
	 */
	static formResourceId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "amplifyuibuilder:FormResourceId": value } };
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:ThemeResourceAppId`.
	 */
	static themeResourceAppId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "amplifyuibuilder:ThemeResourceAppId": value } };
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:ThemeResourceEnvironmentName`.
	 */
	static themeResourceEnvironmentName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "amplifyuibuilder:ThemeResourceEnvironmentName": value },
		};
	}

	/**
	 * Generates a condition block for `amplifyuibuilder:ThemeResourceId`.
	 */
	static themeResourceId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "amplifyuibuilder:ThemeResourceId": value } };
	}

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
