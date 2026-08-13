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
	static readonly CreateComponent = "amplifyuibuilder:CreateComponent";
	/** [Write] amplifyuibuilder:CreateForm */
	static readonly CreateForm = "amplifyuibuilder:CreateForm";
	/** [Write] amplifyuibuilder:CreateTheme */
	static readonly CreateTheme = "amplifyuibuilder:CreateTheme";
	/** [Write] amplifyuibuilder:DeleteComponent */
	static readonly DeleteComponent = "amplifyuibuilder:DeleteComponent";
	/** [Write] amplifyuibuilder:DeleteForm */
	static readonly DeleteForm = "amplifyuibuilder:DeleteForm";
	/** [Write] amplifyuibuilder:DeleteTheme */
	static readonly DeleteTheme = "amplifyuibuilder:DeleteTheme";
	/** [Write] amplifyuibuilder:ExchangeCodeForToken */
	static readonly ExchangeCodeForToken =
		"amplifyuibuilder:ExchangeCodeForToken";
	/** [Read] amplifyuibuilder:ExportComponents */
	static readonly ExportComponents = "amplifyuibuilder:ExportComponents";
	/** [Read] amplifyuibuilder:ExportForms */
	static readonly ExportForms = "amplifyuibuilder:ExportForms";
	/** [Read] amplifyuibuilder:ExportThemes */
	static readonly ExportThemes = "amplifyuibuilder:ExportThemes";
	/** [Read] amplifyuibuilder:GetCodegenJob */
	static readonly actionGetCodegenJob = "amplifyuibuilder:GetCodegenJob";
	/** [Read] amplifyuibuilder:GetComponent */
	static readonly actionGetComponent = "amplifyuibuilder:GetComponent";
	/** [Read] amplifyuibuilder:GetForm */
	static readonly actionGetForm = "amplifyuibuilder:GetForm";
	/** [Read] amplifyuibuilder:GetMetadata */
	static readonly actionGetMetadata = "amplifyuibuilder:GetMetadata";
	/** [Read] amplifyuibuilder:GetTheme */
	static readonly actionGetTheme = "amplifyuibuilder:GetTheme";
	/** [List] amplifyuibuilder:ListCodegenJobs */
	static readonly ListCodegenJobs = "amplifyuibuilder:ListCodegenJobs";
	/** [List] amplifyuibuilder:ListComponents */
	static readonly ListComponents = "amplifyuibuilder:ListComponents";
	/** [List] amplifyuibuilder:ListForms */
	static readonly ListForms = "amplifyuibuilder:ListForms";
	/** [List] amplifyuibuilder:ListTagsForResource */
	static readonly ListTagsForResource = "amplifyuibuilder:ListTagsForResource";
	/** [List] amplifyuibuilder:ListThemes */
	static readonly ListThemes = "amplifyuibuilder:ListThemes";
	/** [Write] amplifyuibuilder:PutMetadataFlag */
	static readonly PutMetadataFlag = "amplifyuibuilder:PutMetadataFlag";
	/** [Write] amplifyuibuilder:RefreshToken */
	static readonly RefreshToken = "amplifyuibuilder:RefreshToken";
	/** [Write] amplifyuibuilder:ResetMetadataFlag */
	static readonly ResetMetadataFlag = "amplifyuibuilder:ResetMetadataFlag";
	/** [Write] amplifyuibuilder:StartCodegenJob */
	static readonly StartCodegenJob = "amplifyuibuilder:StartCodegenJob";
	/** [Tagging] amplifyuibuilder:TagResource */
	static readonly TagResource = "amplifyuibuilder:TagResource";
	/** [Tagging] amplifyuibuilder:UntagResource */
	static readonly UntagResource = "amplifyuibuilder:UntagResource";
	/** [Write] amplifyuibuilder:UpdateComponent */
	static readonly UpdateComponent = "amplifyuibuilder:UpdateComponent";
	/** [Write] amplifyuibuilder:UpdateForm */
	static readonly UpdateForm = "amplifyuibuilder:UpdateForm";
	/** [Write] amplifyuibuilder:UpdateTheme */
	static readonly UpdateTheme = "amplifyuibuilder:UpdateTheme";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AmplifyuibuilderActions.ExportComponents,
		AmplifyuibuilderActions.ExportForms,
		AmplifyuibuilderActions.ExportThemes,
		AmplifyuibuilderActions.actionGetCodegenJob,
		AmplifyuibuilderActions.actionGetComponent,
		AmplifyuibuilderActions.actionGetForm,
		AmplifyuibuilderActions.actionGetMetadata,
		AmplifyuibuilderActions.actionGetTheme,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AmplifyuibuilderActions.CreateComponent,
		AmplifyuibuilderActions.CreateForm,
		AmplifyuibuilderActions.CreateTheme,
		AmplifyuibuilderActions.DeleteComponent,
		AmplifyuibuilderActions.DeleteForm,
		AmplifyuibuilderActions.DeleteTheme,
		AmplifyuibuilderActions.ExchangeCodeForToken,
		AmplifyuibuilderActions.PutMetadataFlag,
		AmplifyuibuilderActions.RefreshToken,
		AmplifyuibuilderActions.ResetMetadataFlag,
		AmplifyuibuilderActions.StartCodegenJob,
		AmplifyuibuilderActions.UpdateComponent,
		AmplifyuibuilderActions.UpdateForm,
		AmplifyuibuilderActions.UpdateTheme,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AmplifyuibuilderActions.ListCodegenJobs,
		AmplifyuibuilderActions.ListComponents,
		AmplifyuibuilderActions.ListForms,
		AmplifyuibuilderActions.ListTagsForResource,
		AmplifyuibuilderActions.ListThemes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AmplifyuibuilderActions.TagResource,
		AmplifyuibuilderActions.UntagResource,
	];
}

/**
 * Properties for building a CodegenJobResource ARN.
 */
export interface AmplifyuibuilderCodegenJobResourceArnProps {
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
}

/**
 * Parsed components of a CodegenJobResource ARN.
 */
export interface AmplifyuibuilderCodegenJobResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The EnvironmentName component. */
	readonly environmentName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a ComponentResource ARN.
 */
export interface AmplifyuibuilderComponentResourceArnProps {
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
}

/**
 * Parsed components of a ComponentResource ARN.
 */
export interface AmplifyuibuilderComponentResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The EnvironmentName component. */
	readonly environmentName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a FormResource ARN.
 */
export interface AmplifyuibuilderFormResourceArnProps {
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
}

/**
 * Parsed components of a FormResource ARN.
 */
export interface AmplifyuibuilderFormResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The EnvironmentName component. */
	readonly environmentName: string;
	/** The Id component. */
	readonly id: string;
}

/**
 * Properties for building a ThemeResource ARN.
 */
export interface AmplifyuibuilderThemeResourceArnProps {
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
}

/**
 * Parsed components of a ThemeResource ARN.
 */
export interface AmplifyuibuilderThemeResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AppId component. */
	readonly appId: string;
	/** The EnvironmentName component. */
	readonly environmentName: string;
	/** The Id component. */
	readonly id: string;
}

const CodegenJobResourceArnRegex =
	/^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app\/(?<appId>[^:/?]+)\/environment\/(?<environmentName>[^:/?]+)\/codegen-jobs\/(?<id>[^:/?]+)$/;
const ComponentResourceArnRegex =
	/^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app\/(?<appId>[^:/?]+)\/environment\/(?<environmentName>[^:/?]+)\/components\/(?<id>[^:/?]+)$/;
const FormResourceArnRegex =
	/^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app\/(?<appId>[^:/?]+)\/environment\/(?<environmentName>[^:/?]+)\/forms\/(?<id>[^:/?]+)$/;
const ThemeResourceArnRegex =
	/^arn:(?<partition>[^:]+):amplifyuibuilder:(?<region>[^:]*):(?<account>[^:]*):app\/(?<appId>[^:/?]+)\/environment\/(?<environmentName>[^:/?]+)\/themes\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for amplifyuibuilder resources.
 */
export class AmplifyuibuilderResources {
	/**
	 * Builds an ARN for the CodegenJobResource resource.
	 */
	static codegenJobResource(
		props: AmplifyuibuilderCodegenJobResourceArnProps,
	): string {
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
	static parseCodegenJobResourceArn(
		arn: string,
	): AmplifyuibuilderCodegenJobResourceArnComponents {
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
	static componentResource(
		props: AmplifyuibuilderComponentResourceArnProps,
	): string {
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
	static parseComponentResourceArn(
		arn: string,
	): AmplifyuibuilderComponentResourceArnComponents {
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
	static formResource(props: AmplifyuibuilderFormResourceArnProps): string {
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
	static parseFormResourceArn(
		arn: string,
	): AmplifyuibuilderFormResourceArnComponents {
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
	static themeResource(props: AmplifyuibuilderThemeResourceArnProps): string {
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
	static parseThemeResourceArn(
		arn: string,
	): AmplifyuibuilderThemeResourceArnComponents {
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
	static readonly CreateComponent: string[] = [
		"amplifyuibuilder:CreateComponent",
		"amplifyuibuilder:TagResource",
	];
	/** IAM actions required for the CreateForm API call. */
	static readonly CreateForm: string[] = [
		"amplifyuibuilder:CreateForm",
		"amplifyuibuilder:TagResource",
	];
	/** IAM actions required for the CreateTheme API call. */
	static readonly CreateTheme: string[] = [
		"amplifyuibuilder:CreateTheme",
		"amplifyuibuilder:TagResource",
	];
	/** IAM actions required for the DeleteComponent API call. */
	static readonly DeleteComponent: string[] = [
		"amplifyuibuilder:DeleteComponent",
	];
	/** IAM actions required for the DeleteForm API call. */
	static readonly DeleteForm: string[] = ["amplifyuibuilder:DeleteForm"];
	/** IAM actions required for the DeleteTheme API call. */
	static readonly DeleteTheme: string[] = ["amplifyuibuilder:DeleteTheme"];
	/** IAM actions required for the ExchangeCodeForToken API call. */
	static readonly ExchangeCodeForToken: string[] = [
		"amplifyuibuilder:ExchangeCodeForToken",
	];
	/** IAM actions required for the ExportComponents API call. */
	static readonly ExportComponents: string[] = [
		"amplifyuibuilder:ExportComponents",
	];
	/** IAM actions required for the ExportForms API call. */
	static readonly ExportForms: string[] = ["amplifyuibuilder:ExportForms"];
	/** IAM actions required for the ExportThemes API call. */
	static readonly ExportThemes: string[] = ["amplifyuibuilder:ExportThemes"];
	/** IAM actions required for the GetCodegenJob API call. */
	static readonly opGetCodegenJob: string[] = [
		"amplifyuibuilder:GetCodegenJob",
	];
	/** IAM actions required for the GetComponent API call. */
	static readonly opGetComponent: string[] = ["amplifyuibuilder:GetComponent"];
	/** IAM actions required for the GetForm API call. */
	static readonly opGetForm: string[] = ["amplifyuibuilder:GetForm"];
	/** IAM actions required for the GetMetadata API call. */
	static readonly opGetMetadata: string[] = ["amplifyuibuilder:GetMetadata"];
	/** IAM actions required for the GetTheme API call. */
	static readonly opGetTheme: string[] = ["amplifyuibuilder:GetTheme"];
	/** IAM actions required for the ListCodegenJobs API call. */
	static readonly ListCodegenJobs: string[] = [
		"amplifyuibuilder:ListCodegenJobs",
	];
	/** IAM actions required for the ListComponents API call. */
	static readonly ListComponents: string[] = [
		"amplifyuibuilder:ListComponents",
	];
	/** IAM actions required for the ListForms API call. */
	static readonly ListForms: string[] = ["amplifyuibuilder:ListForms"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"amplifyuibuilder:ListTagsForResource",
	];
	/** IAM actions required for the ListThemes API call. */
	static readonly ListThemes: string[] = ["amplifyuibuilder:ListThemes"];
	/** IAM actions required for the PutMetadataFlag API call. */
	static readonly PutMetadataFlag: string[] = [
		"amplifyuibuilder:PutMetadataFlag",
	];
	/** IAM actions required for the RefreshToken API call. */
	static readonly RefreshToken: string[] = ["amplifyuibuilder:RefreshToken"];
	/** IAM actions required for the StartCodegenJob API call. */
	static readonly StartCodegenJob: string[] = [
		"amplifyuibuilder:StartCodegenJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["amplifyuibuilder:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["amplifyuibuilder:UntagResource"];
	/** IAM actions required for the UpdateComponent API call. */
	static readonly UpdateComponent: string[] = [
		"amplifyuibuilder:UpdateComponent",
	];
	/** IAM actions required for the UpdateForm API call. */
	static readonly UpdateForm: string[] = ["amplifyuibuilder:UpdateForm"];
	/** IAM actions required for the UpdateTheme API call. */
	static readonly UpdateTheme: string[] = ["amplifyuibuilder:UpdateTheme"];
}

/**
 * Condition key constants and builders for amplifyuibuilder.
 */
export class AmplifyuibuilderConditions {
	/** Condition keys applicable to the CreateComponent action. */
	static readonly CreateComponentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateForm action. */
	static readonly CreateFormConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTheme action. */
	static readonly CreateThemeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartCodegenJob action. */
	static readonly StartCodegenJobConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
