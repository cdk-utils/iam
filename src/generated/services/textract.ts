// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/textract.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the textract service.
 */
export class TextractActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "textract";

	/** [Read] textract:AnalyzeDocument */
	static readonly AnalyzeDocument = "textract:AnalyzeDocument";
	/** [Read] textract:AnalyzeExpense */
	static readonly AnalyzeExpense = "textract:AnalyzeExpense";
	/** [Read] textract:AnalyzeID */
	static readonly AnalyzeID = "textract:AnalyzeID";
	/** [Write] textract:CreateAdapter */
	static readonly CreateAdapter = "textract:CreateAdapter";
	/** [Write] textract:CreateAdapterVersion */
	static readonly CreateAdapterVersion = "textract:CreateAdapterVersion";
	/** [Write] textract:CreateBlueprint */
	static readonly CreateBlueprint = "textract:CreateBlueprint";
	/** [Write] textract:CreateBlueprintVersion */
	static readonly CreateBlueprintVersion = "textract:CreateBlueprintVersion";
	/** [Write] textract:CreateProject */
	static readonly CreateProject = "textract:CreateProject";
	/** [Write] textract:DeleteAdapter */
	static readonly DeleteAdapter = "textract:DeleteAdapter";
	/** [Write] textract:DeleteAdapterVersion */
	static readonly DeleteAdapterVersion = "textract:DeleteAdapterVersion";
	/** [Write] textract:DeleteBlueprint */
	static readonly DeleteBlueprint = "textract:DeleteBlueprint";
	/** [Write] textract:DeleteProject */
	static readonly DeleteProject = "textract:DeleteProject";
	/** [Read] textract:DetectDocumentText */
	static readonly DetectDocumentText = "textract:DetectDocumentText";
	/** [Read] textract:GetAdapter */
	static readonly actionGetAdapter = "textract:GetAdapter";
	/** [Read] textract:GetAdapterVersion */
	static readonly actionGetAdapterVersion = "textract:GetAdapterVersion";
	/** [Read] textract:GetBlueprint */
	static readonly actionGetBlueprint = "textract:GetBlueprint";
	/** [Read] textract:GetDocumentAnalysis */
	static readonly actionGetDocumentAnalysis = "textract:GetDocumentAnalysis";
	/** [Read] textract:GetDocumentInsights */
	static readonly actionGetDocumentInsights = "textract:GetDocumentInsights";
	/** [Read] textract:GetDocumentTextDetection */
	static readonly actionGetDocumentTextDetection =
		"textract:GetDocumentTextDetection";
	/** [Read] textract:GetExpenseAnalysis */
	static readonly actionGetExpenseAnalysis = "textract:GetExpenseAnalysis";
	/** [Read] textract:GetLendingAnalysis */
	static readonly actionGetLendingAnalysis = "textract:GetLendingAnalysis";
	/** [Read] textract:GetLendingAnalysisSummary */
	static readonly actionGetLendingAnalysisSummary =
		"textract:GetLendingAnalysisSummary";
	/** [Read] textract:GetProject */
	static readonly actionGetProject = "textract:GetProject";
	/** [Read] textract:ListAdapterVersions */
	static readonly ListAdapterVersions = "textract:ListAdapterVersions";
	/** [Read] textract:ListAdapters */
	static readonly ListAdapters = "textract:ListAdapters";
	/** [List] textract:ListBlueprints */
	static readonly ListBlueprints = "textract:ListBlueprints";
	/** [List] textract:ListProjects */
	static readonly ListProjects = "textract:ListProjects";
	/** [Read] textract:ListTagsForResource */
	static readonly ListTagsForResource = "textract:ListTagsForResource";
	/** [Write] textract:StartDocumentAnalysis */
	static readonly StartDocumentAnalysis = "textract:StartDocumentAnalysis";
	/** [Write] textract:StartDocumentInsights */
	static readonly StartDocumentInsights = "textract:StartDocumentInsights";
	/** [Write] textract:StartDocumentTextDetection */
	static readonly StartDocumentTextDetection =
		"textract:StartDocumentTextDetection";
	/** [Write] textract:StartExpenseAnalysis */
	static readonly StartExpenseAnalysis = "textract:StartExpenseAnalysis";
	/** [Write] textract:StartLendingAnalysis */
	static readonly StartLendingAnalysis = "textract:StartLendingAnalysis";
	/** [Tagging] textract:TagResource */
	static readonly TagResource = "textract:TagResource";
	/** [Tagging] textract:UntagResource */
	static readonly UntagResource = "textract:UntagResource";
	/** [Write] textract:UpdateAdapter */
	static readonly UpdateAdapter = "textract:UpdateAdapter";
	/** [Write] textract:UpdateBlueprint */
	static readonly UpdateBlueprint = "textract:UpdateBlueprint";
	/** [Write] textract:UpdateProject */
	static readonly UpdateProject = "textract:UpdateProject";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TextractActions.AnalyzeDocument,
		TextractActions.AnalyzeExpense,
		TextractActions.AnalyzeID,
		TextractActions.DetectDocumentText,
		TextractActions.actionGetAdapter,
		TextractActions.actionGetAdapterVersion,
		TextractActions.actionGetBlueprint,
		TextractActions.actionGetDocumentAnalysis,
		TextractActions.actionGetDocumentInsights,
		TextractActions.actionGetDocumentTextDetection,
		TextractActions.actionGetExpenseAnalysis,
		TextractActions.actionGetLendingAnalysis,
		TextractActions.actionGetLendingAnalysisSummary,
		TextractActions.actionGetProject,
		TextractActions.ListAdapterVersions,
		TextractActions.ListAdapters,
		TextractActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TextractActions.CreateAdapter,
		TextractActions.CreateAdapterVersion,
		TextractActions.CreateBlueprint,
		TextractActions.CreateBlueprintVersion,
		TextractActions.CreateProject,
		TextractActions.DeleteAdapter,
		TextractActions.DeleteAdapterVersion,
		TextractActions.DeleteBlueprint,
		TextractActions.DeleteProject,
		TextractActions.StartDocumentAnalysis,
		TextractActions.StartDocumentInsights,
		TextractActions.StartDocumentTextDetection,
		TextractActions.StartExpenseAnalysis,
		TextractActions.StartLendingAnalysis,
		TextractActions.UpdateAdapter,
		TextractActions.UpdateBlueprint,
		TextractActions.UpdateProject,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TextractActions.ListBlueprints,
		TextractActions.ListProjects,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TextractActions.TagResource,
		TextractActions.UntagResource,
	];
}

/**
 * Properties for building a adapter ARN.
 */
export interface TextractAdapterArnProps {
	/** The AdapterId component of the ARN. */
	readonly adapterId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a adapter ARN.
 */
export interface TextractAdapterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AdapterId component. */
	readonly adapterId: string;
}

/**
 * Properties for building a adapterversion ARN.
 */
export interface TextractAdapterversionArnProps {
	/** The AdapterId component of the ARN. */
	readonly adapterId: string;
	/** The AdapterVersion component of the ARN. */
	readonly adapterVersion: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a adapterversion ARN.
 */
export interface TextractAdapterversionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AdapterId component. */
	readonly adapterId: string;
	/** The AdapterVersion component. */
	readonly adapterVersion: string;
}

/**
 * Properties for building a blueprint ARN.
 */
export interface TextractBlueprintArnProps {
	/** The BlueprintId component of the ARN. */
	readonly blueprintId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a blueprint ARN.
 */
export interface TextractBlueprintArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The BlueprintId component. */
	readonly blueprintId: string;
}

/**
 * Properties for building a job ARN.
 */
export interface TextractJobArnProps {
	/** The JobId component of the ARN. */
	readonly jobId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a job ARN.
 */
export interface TextractJobArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The JobId component. */
	readonly jobId: string;
}

/**
 * Properties for building a project ARN.
 */
export interface TextractProjectArnProps {
	/** The ProjectId component of the ARN. */
	readonly projectId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a project ARN.
 */
export interface TextractProjectArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProjectId component. */
	readonly projectId: string;
}

const AdapterArnRegex =
	/^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):\/adapters\/(?<adapterId>[^:/?]+)$/;
const AdapterversionArnRegex =
	/^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):\/adapters\/(?<adapterId>[^:/?]+)\/versions\/(?<adapterVersion>[^:/?]+)$/;
const BlueprintArnRegex =
	/^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):blueprint\/(?<blueprintId>[^:/?]+)$/;
const JobArnRegex =
	/^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):job\/(?<jobId>[^:/?]+)$/;
const ProjectArnRegex =
	/^arn:(?<partition>[^:]+):textract:(?<region>[^:]*):(?<account>[^:]*):project\/(?<projectId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for textract resources.
 */
export class TextractResources {
	/**
	 * Builds an ARN for the adapter resource.
	 */
	static adapter(props: TextractAdapterArnProps): string {
		return `arn:${props.partition ?? "aws"}:textract:${props.region ?? "*"}:${props.account ?? "*"}:/adapters/${props.adapterId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the adapter resource.
	 */
	static isValidAdapterArn(arn: string): boolean {
		return AdapterArnRegex.test(arn);
	}

	/**
	 * Parses a adapter ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAdapterArn(arn: string): TextractAdapterArnComponents {
		const match = AdapterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid adapter ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			adapterId: match.groups!.adapterId,
		};
	}

	/**
	 * Builds an ARN for the adapterversion resource.
	 */
	static adapterversion(props: TextractAdapterversionArnProps): string {
		return `arn:${props.partition ?? "aws"}:textract:${props.region ?? "*"}:${props.account ?? "*"}:/adapters/${props.adapterId}/versions/${props.adapterVersion}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the adapterversion resource.
	 */
	static isValidAdapterversionArn(arn: string): boolean {
		return AdapterversionArnRegex.test(arn);
	}

	/**
	 * Parses a adapterversion ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAdapterversionArn(
		arn: string,
	): TextractAdapterversionArnComponents {
		const match = AdapterversionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid adapterversion ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			adapterId: match.groups!.adapterId,
			adapterVersion: match.groups!.adapterVersion,
		};
	}

	/**
	 * Builds an ARN for the blueprint resource.
	 */
	static blueprint(props: TextractBlueprintArnProps): string {
		return `arn:${props.partition ?? "aws"}:textract:${props.region ?? "*"}:${props.account ?? "*"}:blueprint/${props.blueprintId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the blueprint resource.
	 */
	static isValidBlueprintArn(arn: string): boolean {
		return BlueprintArnRegex.test(arn);
	}

	/**
	 * Parses a blueprint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBlueprintArn(arn: string): TextractBlueprintArnComponents {
		const match = BlueprintArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid blueprint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			blueprintId: match.groups!.blueprintId,
		};
	}

	/**
	 * Builds an ARN for the job resource.
	 */
	static job(props: TextractJobArnProps): string {
		return `arn:${props.partition ?? "aws"}:textract:${props.region ?? "*"}:${props.account ?? "*"}:job/${props.jobId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the job resource.
	 */
	static isValidJobArn(arn: string): boolean {
		return JobArnRegex.test(arn);
	}

	/**
	 * Parses a job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseJobArn(arn: string): TextractJobArnComponents {
		const match = JobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			jobId: match.groups!.jobId,
		};
	}

	/**
	 * Builds an ARN for the project resource.
	 */
	static project(props: TextractProjectArnProps): string {
		return `arn:${props.partition ?? "aws"}:textract:${props.region ?? "*"}:${props.account ?? "*"}:project/${props.projectId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the project resource.
	 */
	static isValidProjectArn(arn: string): boolean {
		return ProjectArnRegex.test(arn);
	}

	/**
	 * Parses a project ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProjectArn(arn: string): TextractProjectArnComponents {
		const match = ProjectArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid project ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			projectId: match.groups!.projectId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for textract.
 */
export class TextractOperations {
	/** IAM actions required for the AnalyzeDocument API call. */
	static readonly AnalyzeDocument: string[] = ["textract:AnalyzeDocument"];
	/** IAM actions required for the AnalyzeExpense API call. */
	static readonly AnalyzeExpense: string[] = ["textract:AnalyzeExpense"];
	/** IAM actions required for the AnalyzeID API call. */
	static readonly AnalyzeID: string[] = ["textract:AnalyzeID"];
	/** IAM actions required for the CreateAdapter API call. */
	static readonly CreateAdapter: string[] = [
		"textract:CreateAdapter",
		"textract:TagResource",
	];
	/** IAM actions required for the CreateAdapterVersion API call. */
	static readonly CreateAdapterVersion: string[] = [
		"textract:CreateAdapterVersion",
		"textract:TagResource",
	];
	/** IAM actions required for the CreateBlueprint API call. */
	static readonly CreateBlueprint: string[] = [
		"textract:CreateBlueprint",
		"textract:TagResource",
	];
	/** IAM actions required for the CreateBlueprintVersion API call. */
	static readonly CreateBlueprintVersion: string[] = [
		"textract:CreateBlueprintVersion",
	];
	/** IAM actions required for the CreateProject API call. */
	static readonly CreateProject: string[] = [
		"textract:CreateProject",
		"textract:TagResource",
	];
	/** IAM actions required for the DeleteAdapter API call. */
	static readonly DeleteAdapter: string[] = ["textract:DeleteAdapter"];
	/** IAM actions required for the DeleteAdapterVersion API call. */
	static readonly DeleteAdapterVersion: string[] = [
		"textract:DeleteAdapterVersion",
	];
	/** IAM actions required for the DeleteBlueprint API call. */
	static readonly DeleteBlueprint: string[] = ["textract:DeleteBlueprint"];
	/** IAM actions required for the DeleteProject API call. */
	static readonly DeleteProject: string[] = ["textract:DeleteProject"];
	/** IAM actions required for the DetectDocumentText API call. */
	static readonly DetectDocumentText: string[] = [
		"textract:DetectDocumentText",
	];
	/** IAM actions required for the GetAdapter API call. */
	static readonly opGetAdapter: string[] = ["textract:GetAdapter"];
	/** IAM actions required for the GetAdapterVersion API call. */
	static readonly opGetAdapterVersion: string[] = [
		"textract:GetAdapterVersion",
	];
	/** IAM actions required for the GetBlueprint API call. */
	static readonly opGetBlueprint: string[] = ["textract:GetBlueprint"];
	/** IAM actions required for the GetDocumentAnalysis API call. */
	static readonly opGetDocumentAnalysis: string[] = [
		"textract:GetDocumentAnalysis",
	];
	/** IAM actions required for the GetDocumentInsights API call. */
	static readonly opGetDocumentInsights: string[] = [
		"textract:GetDocumentInsights",
	];
	/** IAM actions required for the GetDocumentTextDetection API call. */
	static readonly opGetDocumentTextDetection: string[] = [
		"textract:GetDocumentTextDetection",
	];
	/** IAM actions required for the GetExpenseAnalysis API call. */
	static readonly opGetExpenseAnalysis: string[] = [
		"textract:GetExpenseAnalysis",
	];
	/** IAM actions required for the GetLendingAnalysis API call. */
	static readonly opGetLendingAnalysis: string[] = [
		"textract:GetLendingAnalysis",
	];
	/** IAM actions required for the GetLendingAnalysisSummary API call. */
	static readonly opGetLendingAnalysisSummary: string[] = [
		"textract:GetLendingAnalysisSummary",
	];
	/** IAM actions required for the GetProject API call. */
	static readonly opGetProject: string[] = ["textract:GetProject"];
	/** IAM actions required for the ListAdapterVersions API call. */
	static readonly ListAdapterVersions: string[] = [
		"textract:ListAdapterVersions",
	];
	/** IAM actions required for the ListAdapters API call. */
	static readonly ListAdapters: string[] = ["textract:ListAdapters"];
	/** IAM actions required for the ListBlueprints API call. */
	static readonly ListBlueprints: string[] = ["textract:ListBlueprints"];
	/** IAM actions required for the ListProjects API call. */
	static readonly ListProjects: string[] = ["textract:ListProjects"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"textract:ListTagsForResource",
	];
	/** IAM actions required for the StartDocumentAnalysis API call. */
	static readonly StartDocumentAnalysis: string[] = [
		"iam:PassRole",
		"textract:StartDocumentAnalysis",
	];
	/** IAM actions required for the StartDocumentInsights API call. */
	static readonly StartDocumentInsights: string[] = [
		"textract:StartDocumentInsights",
		"textract:TagResource",
	];
	/** IAM actions required for the StartDocumentTextDetection API call. */
	static readonly StartDocumentTextDetection: string[] = [
		"iam:PassRole",
		"textract:StartDocumentTextDetection",
	];
	/** IAM actions required for the StartExpenseAnalysis API call. */
	static readonly StartExpenseAnalysis: string[] = [
		"iam:PassRole",
		"textract:StartExpenseAnalysis",
	];
	/** IAM actions required for the StartLendingAnalysis API call. */
	static readonly StartLendingAnalysis: string[] = [
		"iam:PassRole",
		"textract:StartLendingAnalysis",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["textract:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["textract:UntagResource"];
	/** IAM actions required for the UpdateAdapter API call. */
	static readonly UpdateAdapter: string[] = ["textract:UpdateAdapter"];
	/** IAM actions required for the UpdateBlueprint API call. */
	static readonly UpdateBlueprint: string[] = ["textract:UpdateBlueprint"];
	/** IAM actions required for the UpdateProject API call. */
	static readonly UpdateProject: string[] = ["textract:UpdateProject"];
}

/**
 * Condition key constants and builders for textract.
 */
export class TextractConditions {
	/** Condition keys applicable to the CreateAdapter action. */
	static readonly CreateAdapterConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAdapterVersion action. */
	static readonly CreateAdapterVersionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateBlueprint action. */
	static readonly CreateBlueprintConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateProject action. */
	static readonly CreateProjectConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartDocumentInsights action. */
	static readonly StartDocumentInsightsConditionKeys: string[] = [
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

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
