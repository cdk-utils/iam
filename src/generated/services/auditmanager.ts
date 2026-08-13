// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/auditmanager.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the auditmanager service.
 */
export class AuditmanagerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "auditmanager";

	/** [Write] auditmanager:AssociateAssessmentReportEvidenceFolder */
	static readonly AssociateAssessmentReportEvidenceFolder =
		"auditmanager:AssociateAssessmentReportEvidenceFolder";
	/** [Write] auditmanager:BatchAssociateAssessmentReportEvidence */
	static readonly BatchAssociateAssessmentReportEvidence =
		"auditmanager:BatchAssociateAssessmentReportEvidence";
	/** [Write] auditmanager:BatchCreateDelegationByAssessment */
	static readonly BatchCreateDelegationByAssessment =
		"auditmanager:BatchCreateDelegationByAssessment";
	/** [Write] auditmanager:BatchDeleteDelegationByAssessment */
	static readonly BatchDeleteDelegationByAssessment =
		"auditmanager:BatchDeleteDelegationByAssessment";
	/** [Write] auditmanager:BatchDisassociateAssessmentReportEvidence */
	static readonly BatchDisassociateAssessmentReportEvidence =
		"auditmanager:BatchDisassociateAssessmentReportEvidence";
	/** [Write] auditmanager:BatchImportEvidenceToAssessmentControl */
	static readonly BatchImportEvidenceToAssessmentControl =
		"auditmanager:BatchImportEvidenceToAssessmentControl";
	/** [Write] auditmanager:CreateAssessment */
	static readonly CreateAssessment = "auditmanager:CreateAssessment";
	/** [Write] auditmanager:CreateAssessmentFramework */
	static readonly CreateAssessmentFramework =
		"auditmanager:CreateAssessmentFramework";
	/** [Write] auditmanager:CreateAssessmentReport */
	static readonly CreateAssessmentReport =
		"auditmanager:CreateAssessmentReport";
	/** [Write] auditmanager:CreateControl */
	static readonly CreateControl = "auditmanager:CreateControl";
	/** [Write] auditmanager:DeleteAssessment */
	static readonly DeleteAssessment = "auditmanager:DeleteAssessment";
	/** [Write] auditmanager:DeleteAssessmentFramework */
	static readonly DeleteAssessmentFramework =
		"auditmanager:DeleteAssessmentFramework";
	/** [Write] auditmanager:DeleteAssessmentFrameworkShare */
	static readonly DeleteAssessmentFrameworkShare =
		"auditmanager:DeleteAssessmentFrameworkShare";
	/** [Write] auditmanager:DeleteAssessmentReport */
	static readonly DeleteAssessmentReport =
		"auditmanager:DeleteAssessmentReport";
	/** [Write] auditmanager:DeleteControl */
	static readonly DeleteControl = "auditmanager:DeleteControl";
	/** [Write] auditmanager:DeregisterAccount */
	static readonly DeregisterAccount = "auditmanager:DeregisterAccount";
	/** [Write] auditmanager:DeregisterOrganizationAdminAccount */
	static readonly DeregisterOrganizationAdminAccount =
		"auditmanager:DeregisterOrganizationAdminAccount";
	/** [Write] auditmanager:DisassociateAssessmentReportEvidenceFolder */
	static readonly DisassociateAssessmentReportEvidenceFolder =
		"auditmanager:DisassociateAssessmentReportEvidenceFolder";
	/** [Read] auditmanager:GetAccountStatus */
	static readonly actionGetAccountStatus = "auditmanager:GetAccountStatus";
	/** [Read] auditmanager:GetAssessment */
	static readonly actionGetAssessment = "auditmanager:GetAssessment";
	/** [Read] auditmanager:GetAssessmentFramework */
	static readonly actionGetAssessmentFramework =
		"auditmanager:GetAssessmentFramework";
	/** [Read] auditmanager:GetAssessmentReportUrl */
	static readonly actionGetAssessmentReportUrl =
		"auditmanager:GetAssessmentReportUrl";
	/** [Read] auditmanager:GetChangeLogs */
	static readonly actionGetChangeLogs = "auditmanager:GetChangeLogs";
	/** [Read] auditmanager:GetControl */
	static readonly actionGetControl = "auditmanager:GetControl";
	/** [List] auditmanager:GetDelegations */
	static readonly actionGetDelegations = "auditmanager:GetDelegations";
	/** [Read] auditmanager:GetEvidence */
	static readonly actionGetEvidence = "auditmanager:GetEvidence";
	/** [Read] auditmanager:GetEvidenceByEvidenceFolder */
	static readonly actionGetEvidenceByEvidenceFolder =
		"auditmanager:GetEvidenceByEvidenceFolder";
	/** [Read] auditmanager:GetEvidenceFileUploadUrl */
	static readonly actionGetEvidenceFileUploadUrl =
		"auditmanager:GetEvidenceFileUploadUrl";
	/** [Read] auditmanager:GetEvidenceFolder */
	static readonly actionGetEvidenceFolder = "auditmanager:GetEvidenceFolder";
	/** [Read] auditmanager:GetEvidenceFoldersByAssessment */
	static readonly actionGetEvidenceFoldersByAssessment =
		"auditmanager:GetEvidenceFoldersByAssessment";
	/** [Read] auditmanager:GetEvidenceFoldersByAssessmentControl */
	static readonly actionGetEvidenceFoldersByAssessmentControl =
		"auditmanager:GetEvidenceFoldersByAssessmentControl";
	/** [Read] auditmanager:GetInsights */
	static readonly actionGetInsights = "auditmanager:GetInsights";
	/** [Read] auditmanager:GetInsightsByAssessment */
	static readonly actionGetInsightsByAssessment =
		"auditmanager:GetInsightsByAssessment";
	/** [Read] auditmanager:GetOrganizationAdminAccount */
	static readonly actionGetOrganizationAdminAccount =
		"auditmanager:GetOrganizationAdminAccount";
	/** [Read] auditmanager:GetServicesInScope */
	static readonly actionGetServicesInScope = "auditmanager:GetServicesInScope";
	/** [Read] auditmanager:GetSettings */
	static readonly actionGetSettings = "auditmanager:GetSettings";
	/** [List] auditmanager:ListAssessmentControlInsightsByControlDomain */
	static readonly ListAssessmentControlInsightsByControlDomain =
		"auditmanager:ListAssessmentControlInsightsByControlDomain";
	/** [List] auditmanager:ListAssessmentFrameworkShareRequests */
	static readonly ListAssessmentFrameworkShareRequests =
		"auditmanager:ListAssessmentFrameworkShareRequests";
	/** [List] auditmanager:ListAssessmentFrameworks */
	static readonly ListAssessmentFrameworks =
		"auditmanager:ListAssessmentFrameworks";
	/** [List] auditmanager:ListAssessmentReports */
	static readonly ListAssessmentReports = "auditmanager:ListAssessmentReports";
	/** [List] auditmanager:ListAssessments */
	static readonly ListAssessments = "auditmanager:ListAssessments";
	/** [List] auditmanager:ListControlDomainInsights */
	static readonly ListControlDomainInsights =
		"auditmanager:ListControlDomainInsights";
	/** [List] auditmanager:ListControlDomainInsightsByAssessment */
	static readonly ListControlDomainInsightsByAssessment =
		"auditmanager:ListControlDomainInsightsByAssessment";
	/** [List] auditmanager:ListControlInsightsByControlDomain */
	static readonly ListControlInsightsByControlDomain =
		"auditmanager:ListControlInsightsByControlDomain";
	/** [List] auditmanager:ListControls */
	static readonly ListControls = "auditmanager:ListControls";
	/** [List] auditmanager:ListKeywordsForDataSource */
	static readonly ListKeywordsForDataSource =
		"auditmanager:ListKeywordsForDataSource";
	/** [List] auditmanager:ListNotifications */
	static readonly ListNotifications = "auditmanager:ListNotifications";
	/** [Read] auditmanager:ListTagsForResource */
	static readonly ListTagsForResource = "auditmanager:ListTagsForResource";
	/** [Write] auditmanager:RegisterAccount */
	static readonly RegisterAccount = "auditmanager:RegisterAccount";
	/** [Write] auditmanager:RegisterOrganizationAdminAccount */
	static readonly RegisterOrganizationAdminAccount =
		"auditmanager:RegisterOrganizationAdminAccount";
	/** [Write] auditmanager:StartAssessmentFrameworkShare */
	static readonly StartAssessmentFrameworkShare =
		"auditmanager:StartAssessmentFrameworkShare";
	/** [Tagging] auditmanager:TagResource */
	static readonly TagResource = "auditmanager:TagResource";
	/** [Tagging] auditmanager:UntagResource */
	static readonly UntagResource = "auditmanager:UntagResource";
	/** [Write] auditmanager:UpdateAssessment */
	static readonly UpdateAssessment = "auditmanager:UpdateAssessment";
	/** [Write] auditmanager:UpdateAssessmentControl */
	static readonly UpdateAssessmentControl =
		"auditmanager:UpdateAssessmentControl";
	/** [Write] auditmanager:UpdateAssessmentControlSetStatus */
	static readonly UpdateAssessmentControlSetStatus =
		"auditmanager:UpdateAssessmentControlSetStatus";
	/** [Write] auditmanager:UpdateAssessmentFramework */
	static readonly UpdateAssessmentFramework =
		"auditmanager:UpdateAssessmentFramework";
	/** [Write] auditmanager:UpdateAssessmentFrameworkShare */
	static readonly UpdateAssessmentFrameworkShare =
		"auditmanager:UpdateAssessmentFrameworkShare";
	/** [Write] auditmanager:UpdateAssessmentStatus */
	static readonly UpdateAssessmentStatus =
		"auditmanager:UpdateAssessmentStatus";
	/** [Write] auditmanager:UpdateControl */
	static readonly UpdateControl = "auditmanager:UpdateControl";
	/** [Write] auditmanager:UpdateSettings */
	static readonly UpdateSettings = "auditmanager:UpdateSettings";
	/** [Read] auditmanager:ValidateAssessmentReportIntegrity */
	static readonly ValidateAssessmentReportIntegrity =
		"auditmanager:ValidateAssessmentReportIntegrity";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AuditmanagerActions.actionGetAccountStatus,
		AuditmanagerActions.actionGetAssessment,
		AuditmanagerActions.actionGetAssessmentFramework,
		AuditmanagerActions.actionGetAssessmentReportUrl,
		AuditmanagerActions.actionGetChangeLogs,
		AuditmanagerActions.actionGetControl,
		AuditmanagerActions.actionGetEvidence,
		AuditmanagerActions.actionGetEvidenceByEvidenceFolder,
		AuditmanagerActions.actionGetEvidenceFileUploadUrl,
		AuditmanagerActions.actionGetEvidenceFolder,
		AuditmanagerActions.actionGetEvidenceFoldersByAssessment,
		AuditmanagerActions.actionGetEvidenceFoldersByAssessmentControl,
		AuditmanagerActions.actionGetInsights,
		AuditmanagerActions.actionGetInsightsByAssessment,
		AuditmanagerActions.actionGetOrganizationAdminAccount,
		AuditmanagerActions.actionGetServicesInScope,
		AuditmanagerActions.actionGetSettings,
		AuditmanagerActions.ListTagsForResource,
		AuditmanagerActions.ValidateAssessmentReportIntegrity,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AuditmanagerActions.AssociateAssessmentReportEvidenceFolder,
		AuditmanagerActions.BatchAssociateAssessmentReportEvidence,
		AuditmanagerActions.BatchCreateDelegationByAssessment,
		AuditmanagerActions.BatchDeleteDelegationByAssessment,
		AuditmanagerActions.BatchDisassociateAssessmentReportEvidence,
		AuditmanagerActions.BatchImportEvidenceToAssessmentControl,
		AuditmanagerActions.CreateAssessment,
		AuditmanagerActions.CreateAssessmentFramework,
		AuditmanagerActions.CreateAssessmentReport,
		AuditmanagerActions.CreateControl,
		AuditmanagerActions.DeleteAssessment,
		AuditmanagerActions.DeleteAssessmentFramework,
		AuditmanagerActions.DeleteAssessmentFrameworkShare,
		AuditmanagerActions.DeleteAssessmentReport,
		AuditmanagerActions.DeleteControl,
		AuditmanagerActions.DeregisterAccount,
		AuditmanagerActions.DeregisterOrganizationAdminAccount,
		AuditmanagerActions.DisassociateAssessmentReportEvidenceFolder,
		AuditmanagerActions.RegisterAccount,
		AuditmanagerActions.RegisterOrganizationAdminAccount,
		AuditmanagerActions.StartAssessmentFrameworkShare,
		AuditmanagerActions.UpdateAssessment,
		AuditmanagerActions.UpdateAssessmentControl,
		AuditmanagerActions.UpdateAssessmentControlSetStatus,
		AuditmanagerActions.UpdateAssessmentFramework,
		AuditmanagerActions.UpdateAssessmentFrameworkShare,
		AuditmanagerActions.UpdateAssessmentStatus,
		AuditmanagerActions.UpdateControl,
		AuditmanagerActions.UpdateSettings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		AuditmanagerActions.actionGetDelegations,
		AuditmanagerActions.ListAssessmentControlInsightsByControlDomain,
		AuditmanagerActions.ListAssessmentFrameworkShareRequests,
		AuditmanagerActions.ListAssessmentFrameworks,
		AuditmanagerActions.ListAssessmentReports,
		AuditmanagerActions.ListAssessments,
		AuditmanagerActions.ListControlDomainInsights,
		AuditmanagerActions.ListControlDomainInsightsByAssessment,
		AuditmanagerActions.ListControlInsightsByControlDomain,
		AuditmanagerActions.ListControls,
		AuditmanagerActions.ListKeywordsForDataSource,
		AuditmanagerActions.ListNotifications,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		AuditmanagerActions.TagResource,
		AuditmanagerActions.UntagResource,
	];
}

/**
 * Properties for building a assessment ARN.
 */
export interface AuditmanagerAssessmentArnProps {
	/** The AssessmentId component of the ARN. */
	readonly assessmentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a assessment ARN.
 */
export interface AuditmanagerAssessmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssessmentId component. */
	readonly assessmentId: string;
}

/**
 * Properties for building a assessmentControlSet ARN.
 */
export interface AuditmanagerAssessmentControlSetArnProps {
	/** The AssessmentId component of the ARN. */
	readonly assessmentId: string;
	/** The ControlSetId component of the ARN. */
	readonly controlSetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a assessmentControlSet ARN.
 */
export interface AuditmanagerAssessmentControlSetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssessmentId component. */
	readonly assessmentId: string;
	/** The ControlSetId component. */
	readonly controlSetId: string;
}

/**
 * Properties for building a assessmentFramework ARN.
 */
export interface AuditmanagerAssessmentFrameworkArnProps {
	/** The AssessmentFrameworkId component of the ARN. */
	readonly assessmentFrameworkId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a assessmentFramework ARN.
 */
export interface AuditmanagerAssessmentFrameworkArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AssessmentFrameworkId component. */
	readonly assessmentFrameworkId: string;
}

/**
 * Properties for building a control ARN.
 */
export interface AuditmanagerControlArnProps {
	/** The ControlId component of the ARN. */
	readonly controlId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a control ARN.
 */
export interface AuditmanagerControlArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ControlId component. */
	readonly controlId: string;
}

const AssessmentArnRegex =
	/^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):assessment\/(?<assessmentId>[^:/?]+)$/;
const AssessmentControlSetArnRegex =
	/^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):assessment\/(?<assessmentId>[^:/?]+)\/controlSet\/(?<controlSetId>[^:/?]+)$/;
const AssessmentFrameworkArnRegex =
	/^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):assessmentFramework\/(?<assessmentFrameworkId>[^:/?]+)$/;
const ControlArnRegex =
	/^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):control\/(?<controlId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for auditmanager resources.
 */
export class AuditmanagerResources {
	/**
	 * Builds an ARN for the assessment resource.
	 */
	static assessment(props: AuditmanagerAssessmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:auditmanager:${props.region ?? "*"}:${props.account ?? "*"}:assessment/${props.assessmentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assessment resource.
	 */
	static isValidAssessmentArn(arn: string): boolean {
		return AssessmentArnRegex.test(arn);
	}

	/**
	 * Parses a assessment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssessmentArn(arn: string): AuditmanagerAssessmentArnComponents {
		const match = AssessmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assessment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assessmentId: match.groups!.assessmentId,
		};
	}

	/**
	 * Builds an ARN for the assessmentControlSet resource.
	 */
	static assessmentControlSet(
		props: AuditmanagerAssessmentControlSetArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:auditmanager:${props.region ?? "*"}:${props.account ?? "*"}:assessment/${props.assessmentId}/controlSet/${props.controlSetId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assessmentControlSet resource.
	 */
	static isValidAssessmentControlSetArn(arn: string): boolean {
		return AssessmentControlSetArnRegex.test(arn);
	}

	/**
	 * Parses a assessmentControlSet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssessmentControlSetArn(
		arn: string,
	): AuditmanagerAssessmentControlSetArnComponents {
		const match = AssessmentControlSetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assessmentControlSet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assessmentId: match.groups!.assessmentId,
			controlSetId: match.groups!.controlSetId,
		};
	}

	/**
	 * Builds an ARN for the assessmentFramework resource.
	 */
	static assessmentFramework(
		props: AuditmanagerAssessmentFrameworkArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:auditmanager:${props.region ?? "*"}:${props.account ?? "*"}:assessmentFramework/${props.assessmentFrameworkId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the assessmentFramework resource.
	 */
	static isValidAssessmentFrameworkArn(arn: string): boolean {
		return AssessmentFrameworkArnRegex.test(arn);
	}

	/**
	 * Parses a assessmentFramework ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAssessmentFrameworkArn(
		arn: string,
	): AuditmanagerAssessmentFrameworkArnComponents {
		const match = AssessmentFrameworkArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid assessmentFramework ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			assessmentFrameworkId: match.groups!.assessmentFrameworkId,
		};
	}

	/**
	 * Builds an ARN for the control resource.
	 */
	static control(props: AuditmanagerControlArnProps): string {
		return `arn:${props.partition ?? "aws"}:auditmanager:${props.region ?? "*"}:${props.account ?? "*"}:control/${props.controlId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the control resource.
	 */
	static isValidControlArn(arn: string): boolean {
		return ControlArnRegex.test(arn);
	}

	/**
	 * Parses a control ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseControlArn(arn: string): AuditmanagerControlArnComponents {
		const match = ControlArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid control ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			controlId: match.groups!.controlId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for auditmanager.
 */
export class AuditmanagerOperations {
	/** IAM actions required for the AssociateAssessmentReportEvidenceFolder API call. */
	static readonly AssociateAssessmentReportEvidenceFolder: string[] = [
		"auditmanager:AssociateAssessmentReportEvidenceFolder",
	];
	/** IAM actions required for the BatchAssociateAssessmentReportEvidence API call. */
	static readonly BatchAssociateAssessmentReportEvidence: string[] = [
		"auditmanager:BatchAssociateAssessmentReportEvidence",
	];
	/** IAM actions required for the BatchCreateDelegationByAssessment API call. */
	static readonly BatchCreateDelegationByAssessment: string[] = [
		"auditmanager:BatchCreateDelegationByAssessment",
	];
	/** IAM actions required for the BatchDeleteDelegationByAssessment API call. */
	static readonly BatchDeleteDelegationByAssessment: string[] = [
		"auditmanager:BatchDeleteDelegationByAssessment",
	];
	/** IAM actions required for the BatchDisassociateAssessmentReportEvidence API call. */
	static readonly BatchDisassociateAssessmentReportEvidence: string[] = [
		"auditmanager:BatchDisassociateAssessmentReportEvidence",
	];
	/** IAM actions required for the BatchImportEvidenceToAssessmentControl API call. */
	static readonly BatchImportEvidenceToAssessmentControl: string[] = [
		"auditmanager:BatchImportEvidenceToAssessmentControl",
	];
	/** IAM actions required for the CreateAssessment API call. */
	static readonly CreateAssessment: string[] = [
		"auditmanager:CreateAssessment",
		"auditmanager:TagResource",
	];
	/** IAM actions required for the CreateAssessmentFramework API call. */
	static readonly CreateAssessmentFramework: string[] = [
		"auditmanager:CreateAssessmentFramework",
		"auditmanager:TagResource",
	];
	/** IAM actions required for the CreateAssessmentReport API call. */
	static readonly CreateAssessmentReport: string[] = [
		"auditmanager:CreateAssessmentReport",
	];
	/** IAM actions required for the CreateControl API call. */
	static readonly CreateControl: string[] = [
		"auditmanager:CreateControl",
		"auditmanager:TagResource",
	];
	/** IAM actions required for the DeleteAssessment API call. */
	static readonly DeleteAssessment: string[] = [
		"auditmanager:DeleteAssessment",
	];
	/** IAM actions required for the DeleteAssessmentFramework API call. */
	static readonly DeleteAssessmentFramework: string[] = [
		"auditmanager:DeleteAssessmentFramework",
	];
	/** IAM actions required for the DeleteAssessmentFrameworkShare API call. */
	static readonly DeleteAssessmentFrameworkShare: string[] = [
		"auditmanager:DeleteAssessmentFrameworkShare",
	];
	/** IAM actions required for the DeleteAssessmentReport API call. */
	static readonly DeleteAssessmentReport: string[] = [
		"auditmanager:DeleteAssessmentReport",
	];
	/** IAM actions required for the DeleteControl API call. */
	static readonly DeleteControl: string[] = ["auditmanager:DeleteControl"];
	/** IAM actions required for the DeregisterAccount API call. */
	static readonly DeregisterAccount: string[] = [
		"auditmanager:DeregisterAccount",
	];
	/** IAM actions required for the DeregisterOrganizationAdminAccount API call. */
	static readonly DeregisterOrganizationAdminAccount: string[] = [
		"auditmanager:DeregisterOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateAssessmentReportEvidenceFolder API call. */
	static readonly DisassociateAssessmentReportEvidenceFolder: string[] = [
		"auditmanager:DisassociateAssessmentReportEvidenceFolder",
	];
	/** IAM actions required for the GetAccountStatus API call. */
	static readonly opGetAccountStatus: string[] = [
		"auditmanager:GetAccountStatus",
	];
	/** IAM actions required for the GetAssessment API call. */
	static readonly opGetAssessment: string[] = ["auditmanager:GetAssessment"];
	/** IAM actions required for the GetAssessmentFramework API call. */
	static readonly opGetAssessmentFramework: string[] = [
		"auditmanager:GetAssessmentFramework",
	];
	/** IAM actions required for the GetAssessmentReportUrl API call. */
	static readonly opGetAssessmentReportUrl: string[] = [
		"auditmanager:GetAssessmentReportUrl",
	];
	/** IAM actions required for the GetChangeLogs API call. */
	static readonly opGetChangeLogs: string[] = ["auditmanager:GetChangeLogs"];
	/** IAM actions required for the GetControl API call. */
	static readonly opGetControl: string[] = ["auditmanager:GetControl"];
	/** IAM actions required for the GetDelegations API call. */
	static readonly opGetDelegations: string[] = ["auditmanager:GetDelegations"];
	/** IAM actions required for the GetEvidence API call. */
	static readonly opGetEvidence: string[] = ["auditmanager:GetEvidence"];
	/** IAM actions required for the GetEvidenceByEvidenceFolder API call. */
	static readonly opGetEvidenceByEvidenceFolder: string[] = [
		"auditmanager:GetEvidenceByEvidenceFolder",
	];
	/** IAM actions required for the GetEvidenceFileUploadUrl API call. */
	static readonly opGetEvidenceFileUploadUrl: string[] = [
		"auditmanager:GetEvidenceFileUploadUrl",
	];
	/** IAM actions required for the GetEvidenceFolder API call. */
	static readonly opGetEvidenceFolder: string[] = [
		"auditmanager:GetEvidenceFolder",
	];
	/** IAM actions required for the GetEvidenceFoldersByAssessment API call. */
	static readonly opGetEvidenceFoldersByAssessment: string[] = [
		"auditmanager:GetEvidenceFoldersByAssessment",
	];
	/** IAM actions required for the GetEvidenceFoldersByAssessmentControl API call. */
	static readonly opGetEvidenceFoldersByAssessmentControl: string[] = [
		"auditmanager:GetEvidenceFoldersByAssessmentControl",
	];
	/** IAM actions required for the GetInsights API call. */
	static readonly opGetInsights: string[] = ["auditmanager:GetInsights"];
	/** IAM actions required for the GetInsightsByAssessment API call. */
	static readonly opGetInsightsByAssessment: string[] = [
		"auditmanager:GetInsightsByAssessment",
	];
	/** IAM actions required for the GetOrganizationAdminAccount API call. */
	static readonly opGetOrganizationAdminAccount: string[] = [
		"auditmanager:GetOrganizationAdminAccount",
	];
	/** IAM actions required for the GetServicesInScope API call. */
	static readonly opGetServicesInScope: string[] = [
		"auditmanager:GetServicesInScope",
	];
	/** IAM actions required for the GetSettings API call. */
	static readonly opGetSettings: string[] = ["auditmanager:GetSettings"];
	/** IAM actions required for the ListAssessmentControlInsightsByControlDomain API call. */
	static readonly ListAssessmentControlInsightsByControlDomain: string[] = [
		"auditmanager:ListAssessmentControlInsightsByControlDomain",
	];
	/** IAM actions required for the ListAssessmentFrameworkShareRequests API call. */
	static readonly ListAssessmentFrameworkShareRequests: string[] = [
		"auditmanager:ListAssessmentFrameworkShareRequests",
	];
	/** IAM actions required for the ListAssessmentFrameworks API call. */
	static readonly ListAssessmentFrameworks: string[] = [
		"auditmanager:ListAssessmentFrameworks",
	];
	/** IAM actions required for the ListAssessmentReports API call. */
	static readonly ListAssessmentReports: string[] = [
		"auditmanager:ListAssessmentReports",
	];
	/** IAM actions required for the ListAssessments API call. */
	static readonly ListAssessments: string[] = ["auditmanager:ListAssessments"];
	/** IAM actions required for the ListControlDomainInsights API call. */
	static readonly ListControlDomainInsights: string[] = [
		"auditmanager:ListControlDomainInsights",
	];
	/** IAM actions required for the ListControlDomainInsightsByAssessment API call. */
	static readonly ListControlDomainInsightsByAssessment: string[] = [
		"auditmanager:ListControlDomainInsightsByAssessment",
	];
	/** IAM actions required for the ListControlInsightsByControlDomain API call. */
	static readonly ListControlInsightsByControlDomain: string[] = [
		"auditmanager:ListControlInsightsByControlDomain",
	];
	/** IAM actions required for the ListControls API call. */
	static readonly ListControls: string[] = ["auditmanager:ListControls"];
	/** IAM actions required for the ListKeywordsForDataSource API call. */
	static readonly ListKeywordsForDataSource: string[] = [
		"auditmanager:ListKeywordsForDataSource",
	];
	/** IAM actions required for the ListNotifications API call. */
	static readonly ListNotifications: string[] = [
		"auditmanager:ListNotifications",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"auditmanager:ListTagsForResource",
	];
	/** IAM actions required for the RegisterAccount API call. */
	static readonly RegisterAccount: string[] = ["auditmanager:RegisterAccount"];
	/** IAM actions required for the RegisterOrganizationAdminAccount API call. */
	static readonly RegisterOrganizationAdminAccount: string[] = [
		"auditmanager:RegisterOrganizationAdminAccount",
	];
	/** IAM actions required for the StartAssessmentFrameworkShare API call. */
	static readonly StartAssessmentFrameworkShare: string[] = [
		"auditmanager:StartAssessmentFrameworkShare",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["auditmanager:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["auditmanager:UntagResource"];
	/** IAM actions required for the UpdateAssessment API call. */
	static readonly UpdateAssessment: string[] = [
		"auditmanager:UpdateAssessment",
	];
	/** IAM actions required for the UpdateAssessmentControl API call. */
	static readonly UpdateAssessmentControl: string[] = [
		"auditmanager:UpdateAssessmentControl",
	];
	/** IAM actions required for the UpdateAssessmentControlSetStatus API call. */
	static readonly UpdateAssessmentControlSetStatus: string[] = [
		"auditmanager:UpdateAssessmentControlSetStatus",
	];
	/** IAM actions required for the UpdateAssessmentFramework API call. */
	static readonly UpdateAssessmentFramework: string[] = [
		"auditmanager:UpdateAssessmentFramework",
	];
	/** IAM actions required for the UpdateAssessmentFrameworkShare API call. */
	static readonly UpdateAssessmentFrameworkShare: string[] = [
		"auditmanager:UpdateAssessmentFrameworkShare",
	];
	/** IAM actions required for the UpdateAssessmentStatus API call. */
	static readonly UpdateAssessmentStatus: string[] = [
		"auditmanager:UpdateAssessmentStatus",
	];
	/** IAM actions required for the UpdateControl API call. */
	static readonly UpdateControl: string[] = ["auditmanager:UpdateControl"];
	/** IAM actions required for the UpdateSettings API call. */
	static readonly UpdateSettings: string[] = ["auditmanager:UpdateSettings"];
	/** IAM actions required for the ValidateAssessmentReportIntegrity API call. */
	static readonly ValidateAssessmentReportIntegrity: string[] = [
		"auditmanager:ValidateAssessmentReportIntegrity",
	];
}

/**
 * Condition key constants and builders for auditmanager.
 */
export class AuditmanagerConditions {
	/** Condition keys applicable to the CreateAssessment action. */
	static readonly CreateAssessmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssessmentFramework action. */
	static readonly CreateAssessmentFrameworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateControl action. */
	static readonly CreateControlConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssessment action. */
	static readonly DeleteAssessmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssessmentFramework action. */
	static readonly DeleteAssessmentFrameworkConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteControl action. */
	static readonly DeleteControlConditionKeys: string[] = [
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
