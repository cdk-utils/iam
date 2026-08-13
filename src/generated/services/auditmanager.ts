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
	static readonly ASSOCIATE_ASSESSMENT_REPORT_EVIDENCE_FOLDER =
		"auditmanager:AssociateAssessmentReportEvidenceFolder";
	/** [Write] auditmanager:BatchAssociateAssessmentReportEvidence */
	static readonly BATCH_ASSOCIATE_ASSESSMENT_REPORT_EVIDENCE =
		"auditmanager:BatchAssociateAssessmentReportEvidence";
	/** [Write] auditmanager:BatchCreateDelegationByAssessment */
	static readonly BATCH_CREATE_DELEGATION_BY_ASSESSMENT =
		"auditmanager:BatchCreateDelegationByAssessment";
	/** [Write] auditmanager:BatchDeleteDelegationByAssessment */
	static readonly BATCH_DELETE_DELEGATION_BY_ASSESSMENT =
		"auditmanager:BatchDeleteDelegationByAssessment";
	/** [Write] auditmanager:BatchDisassociateAssessmentReportEvidence */
	static readonly BATCH_DISASSOCIATE_ASSESSMENT_REPORT_EVIDENCE =
		"auditmanager:BatchDisassociateAssessmentReportEvidence";
	/** [Write] auditmanager:BatchImportEvidenceToAssessmentControl */
	static readonly BATCH_IMPORT_EVIDENCE_TO_ASSESSMENT_CONTROL =
		"auditmanager:BatchImportEvidenceToAssessmentControl";
	/** [Write] auditmanager:CreateAssessment */
	static readonly CREATE_ASSESSMENT = "auditmanager:CreateAssessment";
	/** [Write] auditmanager:CreateAssessmentFramework */
	static readonly CREATE_ASSESSMENT_FRAMEWORK =
		"auditmanager:CreateAssessmentFramework";
	/** [Write] auditmanager:CreateAssessmentReport */
	static readonly CREATE_ASSESSMENT_REPORT =
		"auditmanager:CreateAssessmentReport";
	/** [Write] auditmanager:CreateControl */
	static readonly CREATE_CONTROL = "auditmanager:CreateControl";
	/** [Write] auditmanager:DeleteAssessment */
	static readonly DELETE_ASSESSMENT = "auditmanager:DeleteAssessment";
	/** [Write] auditmanager:DeleteAssessmentFramework */
	static readonly DELETE_ASSESSMENT_FRAMEWORK =
		"auditmanager:DeleteAssessmentFramework";
	/** [Write] auditmanager:DeleteAssessmentFrameworkShare */
	static readonly DELETE_ASSESSMENT_FRAMEWORK_SHARE =
		"auditmanager:DeleteAssessmentFrameworkShare";
	/** [Write] auditmanager:DeleteAssessmentReport */
	static readonly DELETE_ASSESSMENT_REPORT =
		"auditmanager:DeleteAssessmentReport";
	/** [Write] auditmanager:DeleteControl */
	static readonly DELETE_CONTROL = "auditmanager:DeleteControl";
	/** [Write] auditmanager:DeregisterAccount */
	static readonly DEREGISTER_ACCOUNT = "auditmanager:DeregisterAccount";
	/** [Write] auditmanager:DeregisterOrganizationAdminAccount */
	static readonly DEREGISTER_ORGANIZATION_ADMIN_ACCOUNT =
		"auditmanager:DeregisterOrganizationAdminAccount";
	/** [Write] auditmanager:DisassociateAssessmentReportEvidenceFolder */
	static readonly DISASSOCIATE_ASSESSMENT_REPORT_EVIDENCE_FOLDER =
		"auditmanager:DisassociateAssessmentReportEvidenceFolder";
	/** [Read] auditmanager:GetAccountStatus */
	static readonly GET_ACCOUNT_STATUS = "auditmanager:GetAccountStatus";
	/** [Read] auditmanager:GetAssessment */
	static readonly GET_ASSESSMENT = "auditmanager:GetAssessment";
	/** [Read] auditmanager:GetAssessmentFramework */
	static readonly GET_ASSESSMENT_FRAMEWORK =
		"auditmanager:GetAssessmentFramework";
	/** [Read] auditmanager:GetAssessmentReportUrl */
	static readonly GET_ASSESSMENT_REPORT_URL =
		"auditmanager:GetAssessmentReportUrl";
	/** [Read] auditmanager:GetChangeLogs */
	static readonly GET_CHANGE_LOGS = "auditmanager:GetChangeLogs";
	/** [Read] auditmanager:GetControl */
	static readonly GET_CONTROL = "auditmanager:GetControl";
	/** [List] auditmanager:GetDelegations */
	static readonly GET_DELEGATIONS = "auditmanager:GetDelegations";
	/** [Read] auditmanager:GetEvidence */
	static readonly GET_EVIDENCE = "auditmanager:GetEvidence";
	/** [Read] auditmanager:GetEvidenceByEvidenceFolder */
	static readonly GET_EVIDENCE_BY_EVIDENCE_FOLDER =
		"auditmanager:GetEvidenceByEvidenceFolder";
	/** [Read] auditmanager:GetEvidenceFileUploadUrl */
	static readonly GET_EVIDENCE_FILE_UPLOAD_URL =
		"auditmanager:GetEvidenceFileUploadUrl";
	/** [Read] auditmanager:GetEvidenceFolder */
	static readonly GET_EVIDENCE_FOLDER = "auditmanager:GetEvidenceFolder";
	/** [Read] auditmanager:GetEvidenceFoldersByAssessment */
	static readonly GET_EVIDENCE_FOLDERS_BY_ASSESSMENT =
		"auditmanager:GetEvidenceFoldersByAssessment";
	/** [Read] auditmanager:GetEvidenceFoldersByAssessmentControl */
	static readonly GET_EVIDENCE_FOLDERS_BY_ASSESSMENT_CONTROL =
		"auditmanager:GetEvidenceFoldersByAssessmentControl";
	/** [Read] auditmanager:GetInsights */
	static readonly GET_INSIGHTS = "auditmanager:GetInsights";
	/** [Read] auditmanager:GetInsightsByAssessment */
	static readonly GET_INSIGHTS_BY_ASSESSMENT =
		"auditmanager:GetInsightsByAssessment";
	/** [Read] auditmanager:GetOrganizationAdminAccount */
	static readonly GET_ORGANIZATION_ADMIN_ACCOUNT =
		"auditmanager:GetOrganizationAdminAccount";
	/** [Read] auditmanager:GetServicesInScope */
	static readonly GET_SERVICES_IN_SCOPE = "auditmanager:GetServicesInScope";
	/** [Read] auditmanager:GetSettings */
	static readonly GET_SETTINGS = "auditmanager:GetSettings";
	/** [List] auditmanager:ListAssessmentControlInsightsByControlDomain */
	static readonly LIST_ASSESSMENT_CONTROL_INSIGHTS_BY_CONTROL_DOMAIN =
		"auditmanager:ListAssessmentControlInsightsByControlDomain";
	/** [List] auditmanager:ListAssessmentFrameworkShareRequests */
	static readonly LIST_ASSESSMENT_FRAMEWORK_SHARE_REQUESTS =
		"auditmanager:ListAssessmentFrameworkShareRequests";
	/** [List] auditmanager:ListAssessmentFrameworks */
	static readonly LIST_ASSESSMENT_FRAMEWORKS =
		"auditmanager:ListAssessmentFrameworks";
	/** [List] auditmanager:ListAssessmentReports */
	static readonly LIST_ASSESSMENT_REPORTS =
		"auditmanager:ListAssessmentReports";
	/** [List] auditmanager:ListAssessments */
	static readonly LIST_ASSESSMENTS = "auditmanager:ListAssessments";
	/** [List] auditmanager:ListControlDomainInsights */
	static readonly LIST_CONTROL_DOMAIN_INSIGHTS =
		"auditmanager:ListControlDomainInsights";
	/** [List] auditmanager:ListControlDomainInsightsByAssessment */
	static readonly LIST_CONTROL_DOMAIN_INSIGHTS_BY_ASSESSMENT =
		"auditmanager:ListControlDomainInsightsByAssessment";
	/** [List] auditmanager:ListControlInsightsByControlDomain */
	static readonly LIST_CONTROL_INSIGHTS_BY_CONTROL_DOMAIN =
		"auditmanager:ListControlInsightsByControlDomain";
	/** [List] auditmanager:ListControls */
	static readonly LIST_CONTROLS = "auditmanager:ListControls";
	/** [List] auditmanager:ListKeywordsForDataSource */
	static readonly LIST_KEYWORDS_FOR_DATA_SOURCE =
		"auditmanager:ListKeywordsForDataSource";
	/** [List] auditmanager:ListNotifications */
	static readonly LIST_NOTIFICATIONS = "auditmanager:ListNotifications";
	/** [Read] auditmanager:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "auditmanager:ListTagsForResource";
	/** [Write] auditmanager:RegisterAccount */
	static readonly REGISTER_ACCOUNT = "auditmanager:RegisterAccount";
	/** [Write] auditmanager:RegisterOrganizationAdminAccount */
	static readonly REGISTER_ORGANIZATION_ADMIN_ACCOUNT =
		"auditmanager:RegisterOrganizationAdminAccount";
	/** [Write] auditmanager:StartAssessmentFrameworkShare */
	static readonly START_ASSESSMENT_FRAMEWORK_SHARE =
		"auditmanager:StartAssessmentFrameworkShare";
	/** [Tagging] auditmanager:TagResource */
	static readonly TAG_RESOURCE = "auditmanager:TagResource";
	/** [Tagging] auditmanager:UntagResource */
	static readonly UNTAG_RESOURCE = "auditmanager:UntagResource";
	/** [Write] auditmanager:UpdateAssessment */
	static readonly UPDATE_ASSESSMENT = "auditmanager:UpdateAssessment";
	/** [Write] auditmanager:UpdateAssessmentControl */
	static readonly UPDATE_ASSESSMENT_CONTROL =
		"auditmanager:UpdateAssessmentControl";
	/** [Write] auditmanager:UpdateAssessmentControlSetStatus */
	static readonly UPDATE_ASSESSMENT_CONTROL_SET_STATUS =
		"auditmanager:UpdateAssessmentControlSetStatus";
	/** [Write] auditmanager:UpdateAssessmentFramework */
	static readonly UPDATE_ASSESSMENT_FRAMEWORK =
		"auditmanager:UpdateAssessmentFramework";
	/** [Write] auditmanager:UpdateAssessmentFrameworkShare */
	static readonly UPDATE_ASSESSMENT_FRAMEWORK_SHARE =
		"auditmanager:UpdateAssessmentFrameworkShare";
	/** [Write] auditmanager:UpdateAssessmentStatus */
	static readonly UPDATE_ASSESSMENT_STATUS =
		"auditmanager:UpdateAssessmentStatus";
	/** [Write] auditmanager:UpdateControl */
	static readonly UPDATE_CONTROL = "auditmanager:UpdateControl";
	/** [Write] auditmanager:UpdateSettings */
	static readonly UPDATE_SETTINGS = "auditmanager:UpdateSettings";
	/** [Read] auditmanager:ValidateAssessmentReportIntegrity */
	static readonly VALIDATE_ASSESSMENT_REPORT_INTEGRITY =
		"auditmanager:ValidateAssessmentReportIntegrity";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AuditmanagerActions.GET_ACCOUNT_STATUS,
		AuditmanagerActions.GET_ASSESSMENT,
		AuditmanagerActions.GET_ASSESSMENT_FRAMEWORK,
		AuditmanagerActions.GET_ASSESSMENT_REPORT_URL,
		AuditmanagerActions.GET_CHANGE_LOGS,
		AuditmanagerActions.GET_CONTROL,
		AuditmanagerActions.GET_EVIDENCE,
		AuditmanagerActions.GET_EVIDENCE_BY_EVIDENCE_FOLDER,
		AuditmanagerActions.GET_EVIDENCE_FILE_UPLOAD_URL,
		AuditmanagerActions.GET_EVIDENCE_FOLDER,
		AuditmanagerActions.GET_EVIDENCE_FOLDERS_BY_ASSESSMENT,
		AuditmanagerActions.GET_EVIDENCE_FOLDERS_BY_ASSESSMENT_CONTROL,
		AuditmanagerActions.GET_INSIGHTS,
		AuditmanagerActions.GET_INSIGHTS_BY_ASSESSMENT,
		AuditmanagerActions.GET_ORGANIZATION_ADMIN_ACCOUNT,
		AuditmanagerActions.GET_SERVICES_IN_SCOPE,
		AuditmanagerActions.GET_SETTINGS,
		AuditmanagerActions.LIST_TAGS_FOR_RESOURCE,
		AuditmanagerActions.VALIDATE_ASSESSMENT_REPORT_INTEGRITY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AuditmanagerActions.ASSOCIATE_ASSESSMENT_REPORT_EVIDENCE_FOLDER,
		AuditmanagerActions.BATCH_ASSOCIATE_ASSESSMENT_REPORT_EVIDENCE,
		AuditmanagerActions.BATCH_CREATE_DELEGATION_BY_ASSESSMENT,
		AuditmanagerActions.BATCH_DELETE_DELEGATION_BY_ASSESSMENT,
		AuditmanagerActions.BATCH_DISASSOCIATE_ASSESSMENT_REPORT_EVIDENCE,
		AuditmanagerActions.BATCH_IMPORT_EVIDENCE_TO_ASSESSMENT_CONTROL,
		AuditmanagerActions.CREATE_ASSESSMENT,
		AuditmanagerActions.CREATE_ASSESSMENT_FRAMEWORK,
		AuditmanagerActions.CREATE_ASSESSMENT_REPORT,
		AuditmanagerActions.CREATE_CONTROL,
		AuditmanagerActions.DELETE_ASSESSMENT,
		AuditmanagerActions.DELETE_ASSESSMENT_FRAMEWORK,
		AuditmanagerActions.DELETE_ASSESSMENT_FRAMEWORK_SHARE,
		AuditmanagerActions.DELETE_ASSESSMENT_REPORT,
		AuditmanagerActions.DELETE_CONTROL,
		AuditmanagerActions.DEREGISTER_ACCOUNT,
		AuditmanagerActions.DEREGISTER_ORGANIZATION_ADMIN_ACCOUNT,
		AuditmanagerActions.DISASSOCIATE_ASSESSMENT_REPORT_EVIDENCE_FOLDER,
		AuditmanagerActions.REGISTER_ACCOUNT,
		AuditmanagerActions.REGISTER_ORGANIZATION_ADMIN_ACCOUNT,
		AuditmanagerActions.START_ASSESSMENT_FRAMEWORK_SHARE,
		AuditmanagerActions.UPDATE_ASSESSMENT,
		AuditmanagerActions.UPDATE_ASSESSMENT_CONTROL,
		AuditmanagerActions.UPDATE_ASSESSMENT_CONTROL_SET_STATUS,
		AuditmanagerActions.UPDATE_ASSESSMENT_FRAMEWORK,
		AuditmanagerActions.UPDATE_ASSESSMENT_FRAMEWORK_SHARE,
		AuditmanagerActions.UPDATE_ASSESSMENT_STATUS,
		AuditmanagerActions.UPDATE_CONTROL,
		AuditmanagerActions.UPDATE_SETTINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		AuditmanagerActions.GET_DELEGATIONS,
		AuditmanagerActions.LIST_ASSESSMENT_CONTROL_INSIGHTS_BY_CONTROL_DOMAIN,
		AuditmanagerActions.LIST_ASSESSMENT_FRAMEWORK_SHARE_REQUESTS,
		AuditmanagerActions.LIST_ASSESSMENT_FRAMEWORKS,
		AuditmanagerActions.LIST_ASSESSMENT_REPORTS,
		AuditmanagerActions.LIST_ASSESSMENTS,
		AuditmanagerActions.LIST_CONTROL_DOMAIN_INSIGHTS,
		AuditmanagerActions.LIST_CONTROL_DOMAIN_INSIGHTS_BY_ASSESSMENT,
		AuditmanagerActions.LIST_CONTROL_INSIGHTS_BY_CONTROL_DOMAIN,
		AuditmanagerActions.LIST_CONTROLS,
		AuditmanagerActions.LIST_KEYWORDS_FOR_DATA_SOURCE,
		AuditmanagerActions.LIST_NOTIFICATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		AuditmanagerActions.TAG_RESOURCE,
		AuditmanagerActions.UNTAG_RESOURCE,
	];
}

const AssessmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):assessment/(?<assessmentId>[^:/?]+)$",
);
const AssessmentControlSetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):assessment/(?<assessmentId>[^:/?]+)/controlSet/(?<controlSetId>[^:/?]+)$",
);
const AssessmentFrameworkArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):assessmentFramework/(?<assessmentFrameworkId>[^:/?]+)$",
);
const ControlArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):auditmanager:(?<region>[^:]*):(?<account>[^:]*):control/(?<controlId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for auditmanager resources.
 */
export class AuditmanagerResources {
	/**
	 * Builds an ARN for the assessment resource.
	 */
	static assessment(props: {
		/** The AssessmentId component of the ARN. */
		readonly assessmentId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAssessmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		assessmentId: string;
	} {
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
	static assessmentControlSet(props: {
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
	}): string {
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
	static parseAssessmentControlSetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		assessmentId: string;
		controlSetId: string;
	} {
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
	static assessmentFramework(props: {
		/** The AssessmentFrameworkId component of the ARN. */
		readonly assessmentFrameworkId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseAssessmentFrameworkArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		assessmentFrameworkId: string;
	} {
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
	static control(props: {
		/** The ControlId component of the ARN. */
		readonly controlId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseControlArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		controlId: string;
	} {
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
	static readonly ASSOCIATE_ASSESSMENT_REPORT_EVIDENCE_FOLDER: string[] = [
		"auditmanager:AssociateAssessmentReportEvidenceFolder",
	];
	/** IAM actions required for the BatchAssociateAssessmentReportEvidence API call. */
	static readonly BATCH_ASSOCIATE_ASSESSMENT_REPORT_EVIDENCE: string[] = [
		"auditmanager:BatchAssociateAssessmentReportEvidence",
	];
	/** IAM actions required for the BatchCreateDelegationByAssessment API call. */
	static readonly BATCH_CREATE_DELEGATION_BY_ASSESSMENT: string[] = [
		"auditmanager:BatchCreateDelegationByAssessment",
	];
	/** IAM actions required for the BatchDeleteDelegationByAssessment API call. */
	static readonly BATCH_DELETE_DELEGATION_BY_ASSESSMENT: string[] = [
		"auditmanager:BatchDeleteDelegationByAssessment",
	];
	/** IAM actions required for the BatchDisassociateAssessmentReportEvidence API call. */
	static readonly BATCH_DISASSOCIATE_ASSESSMENT_REPORT_EVIDENCE: string[] = [
		"auditmanager:BatchDisassociateAssessmentReportEvidence",
	];
	/** IAM actions required for the BatchImportEvidenceToAssessmentControl API call. */
	static readonly BATCH_IMPORT_EVIDENCE_TO_ASSESSMENT_CONTROL: string[] = [
		"auditmanager:BatchImportEvidenceToAssessmentControl",
	];
	/** IAM actions required for the CreateAssessment API call. */
	static readonly CREATE_ASSESSMENT: string[] = [
		"auditmanager:CreateAssessment",
		"auditmanager:TagResource",
	];
	/** IAM actions required for the CreateAssessmentFramework API call. */
	static readonly CREATE_ASSESSMENT_FRAMEWORK: string[] = [
		"auditmanager:CreateAssessmentFramework",
		"auditmanager:TagResource",
	];
	/** IAM actions required for the CreateAssessmentReport API call. */
	static readonly CREATE_ASSESSMENT_REPORT: string[] = [
		"auditmanager:CreateAssessmentReport",
	];
	/** IAM actions required for the CreateControl API call. */
	static readonly CREATE_CONTROL: string[] = [
		"auditmanager:CreateControl",
		"auditmanager:TagResource",
	];
	/** IAM actions required for the DeleteAssessment API call. */
	static readonly DELETE_ASSESSMENT: string[] = [
		"auditmanager:DeleteAssessment",
	];
	/** IAM actions required for the DeleteAssessmentFramework API call. */
	static readonly DELETE_ASSESSMENT_FRAMEWORK: string[] = [
		"auditmanager:DeleteAssessmentFramework",
	];
	/** IAM actions required for the DeleteAssessmentFrameworkShare API call. */
	static readonly DELETE_ASSESSMENT_FRAMEWORK_SHARE: string[] = [
		"auditmanager:DeleteAssessmentFrameworkShare",
	];
	/** IAM actions required for the DeleteAssessmentReport API call. */
	static readonly DELETE_ASSESSMENT_REPORT: string[] = [
		"auditmanager:DeleteAssessmentReport",
	];
	/** IAM actions required for the DeleteControl API call. */
	static readonly DELETE_CONTROL: string[] = ["auditmanager:DeleteControl"];
	/** IAM actions required for the DeregisterAccount API call. */
	static readonly DEREGISTER_ACCOUNT: string[] = [
		"auditmanager:DeregisterAccount",
	];
	/** IAM actions required for the DeregisterOrganizationAdminAccount API call. */
	static readonly DEREGISTER_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"auditmanager:DeregisterOrganizationAdminAccount",
	];
	/** IAM actions required for the DisassociateAssessmentReportEvidenceFolder API call. */
	static readonly DISASSOCIATE_ASSESSMENT_REPORT_EVIDENCE_FOLDER: string[] = [
		"auditmanager:DisassociateAssessmentReportEvidenceFolder",
	];
	/** IAM actions required for the GetAccountStatus API call. */
	static readonly GET_ACCOUNT_STATUS: string[] = [
		"auditmanager:GetAccountStatus",
	];
	/** IAM actions required for the GetAssessment API call. */
	static readonly GET_ASSESSMENT: string[] = ["auditmanager:GetAssessment"];
	/** IAM actions required for the GetAssessmentFramework API call. */
	static readonly GET_ASSESSMENT_FRAMEWORK: string[] = [
		"auditmanager:GetAssessmentFramework",
	];
	/** IAM actions required for the GetAssessmentReportUrl API call. */
	static readonly GET_ASSESSMENT_REPORT_URL: string[] = [
		"auditmanager:GetAssessmentReportUrl",
	];
	/** IAM actions required for the GetChangeLogs API call. */
	static readonly GET_CHANGE_LOGS: string[] = ["auditmanager:GetChangeLogs"];
	/** IAM actions required for the GetControl API call. */
	static readonly GET_CONTROL: string[] = ["auditmanager:GetControl"];
	/** IAM actions required for the GetDelegations API call. */
	static readonly GET_DELEGATIONS: string[] = ["auditmanager:GetDelegations"];
	/** IAM actions required for the GetEvidence API call. */
	static readonly GET_EVIDENCE: string[] = ["auditmanager:GetEvidence"];
	/** IAM actions required for the GetEvidenceByEvidenceFolder API call. */
	static readonly GET_EVIDENCE_BY_EVIDENCE_FOLDER: string[] = [
		"auditmanager:GetEvidenceByEvidenceFolder",
	];
	/** IAM actions required for the GetEvidenceFileUploadUrl API call. */
	static readonly GET_EVIDENCE_FILE_UPLOAD_URL: string[] = [
		"auditmanager:GetEvidenceFileUploadUrl",
	];
	/** IAM actions required for the GetEvidenceFolder API call. */
	static readonly GET_EVIDENCE_FOLDER: string[] = [
		"auditmanager:GetEvidenceFolder",
	];
	/** IAM actions required for the GetEvidenceFoldersByAssessment API call. */
	static readonly GET_EVIDENCE_FOLDERS_BY_ASSESSMENT: string[] = [
		"auditmanager:GetEvidenceFoldersByAssessment",
	];
	/** IAM actions required for the GetEvidenceFoldersByAssessmentControl API call. */
	static readonly GET_EVIDENCE_FOLDERS_BY_ASSESSMENT_CONTROL: string[] = [
		"auditmanager:GetEvidenceFoldersByAssessmentControl",
	];
	/** IAM actions required for the GetInsights API call. */
	static readonly GET_INSIGHTS: string[] = ["auditmanager:GetInsights"];
	/** IAM actions required for the GetInsightsByAssessment API call. */
	static readonly GET_INSIGHTS_BY_ASSESSMENT: string[] = [
		"auditmanager:GetInsightsByAssessment",
	];
	/** IAM actions required for the GetOrganizationAdminAccount API call. */
	static readonly GET_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"auditmanager:GetOrganizationAdminAccount",
	];
	/** IAM actions required for the GetServicesInScope API call. */
	static readonly GET_SERVICES_IN_SCOPE: string[] = [
		"auditmanager:GetServicesInScope",
	];
	/** IAM actions required for the GetSettings API call. */
	static readonly GET_SETTINGS: string[] = ["auditmanager:GetSettings"];
	/** IAM actions required for the ListAssessmentControlInsightsByControlDomain API call. */
	static readonly LIST_ASSESSMENT_CONTROL_INSIGHTS_BY_CONTROL_DOMAIN: string[] =
		["auditmanager:ListAssessmentControlInsightsByControlDomain"];
	/** IAM actions required for the ListAssessmentFrameworkShareRequests API call. */
	static readonly LIST_ASSESSMENT_FRAMEWORK_SHARE_REQUESTS: string[] = [
		"auditmanager:ListAssessmentFrameworkShareRequests",
	];
	/** IAM actions required for the ListAssessmentFrameworks API call. */
	static readonly LIST_ASSESSMENT_FRAMEWORKS: string[] = [
		"auditmanager:ListAssessmentFrameworks",
	];
	/** IAM actions required for the ListAssessmentReports API call. */
	static readonly LIST_ASSESSMENT_REPORTS: string[] = [
		"auditmanager:ListAssessmentReports",
	];
	/** IAM actions required for the ListAssessments API call. */
	static readonly LIST_ASSESSMENTS: string[] = ["auditmanager:ListAssessments"];
	/** IAM actions required for the ListControlDomainInsights API call. */
	static readonly LIST_CONTROL_DOMAIN_INSIGHTS: string[] = [
		"auditmanager:ListControlDomainInsights",
	];
	/** IAM actions required for the ListControlDomainInsightsByAssessment API call. */
	static readonly LIST_CONTROL_DOMAIN_INSIGHTS_BY_ASSESSMENT: string[] = [
		"auditmanager:ListControlDomainInsightsByAssessment",
	];
	/** IAM actions required for the ListControlInsightsByControlDomain API call. */
	static readonly LIST_CONTROL_INSIGHTS_BY_CONTROL_DOMAIN: string[] = [
		"auditmanager:ListControlInsightsByControlDomain",
	];
	/** IAM actions required for the ListControls API call. */
	static readonly LIST_CONTROLS: string[] = ["auditmanager:ListControls"];
	/** IAM actions required for the ListKeywordsForDataSource API call. */
	static readonly LIST_KEYWORDS_FOR_DATA_SOURCE: string[] = [
		"auditmanager:ListKeywordsForDataSource",
	];
	/** IAM actions required for the ListNotifications API call. */
	static readonly LIST_NOTIFICATIONS: string[] = [
		"auditmanager:ListNotifications",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"auditmanager:ListTagsForResource",
	];
	/** IAM actions required for the RegisterAccount API call. */
	static readonly REGISTER_ACCOUNT: string[] = ["auditmanager:RegisterAccount"];
	/** IAM actions required for the RegisterOrganizationAdminAccount API call. */
	static readonly REGISTER_ORGANIZATION_ADMIN_ACCOUNT: string[] = [
		"auditmanager:RegisterOrganizationAdminAccount",
	];
	/** IAM actions required for the StartAssessmentFrameworkShare API call. */
	static readonly START_ASSESSMENT_FRAMEWORK_SHARE: string[] = [
		"auditmanager:StartAssessmentFrameworkShare",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["auditmanager:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["auditmanager:UntagResource"];
	/** IAM actions required for the UpdateAssessment API call. */
	static readonly UPDATE_ASSESSMENT: string[] = [
		"auditmanager:UpdateAssessment",
	];
	/** IAM actions required for the UpdateAssessmentControl API call. */
	static readonly UPDATE_ASSESSMENT_CONTROL: string[] = [
		"auditmanager:UpdateAssessmentControl",
	];
	/** IAM actions required for the UpdateAssessmentControlSetStatus API call. */
	static readonly UPDATE_ASSESSMENT_CONTROL_SET_STATUS: string[] = [
		"auditmanager:UpdateAssessmentControlSetStatus",
	];
	/** IAM actions required for the UpdateAssessmentFramework API call. */
	static readonly UPDATE_ASSESSMENT_FRAMEWORK: string[] = [
		"auditmanager:UpdateAssessmentFramework",
	];
	/** IAM actions required for the UpdateAssessmentFrameworkShare API call. */
	static readonly UPDATE_ASSESSMENT_FRAMEWORK_SHARE: string[] = [
		"auditmanager:UpdateAssessmentFrameworkShare",
	];
	/** IAM actions required for the UpdateAssessmentStatus API call. */
	static readonly UPDATE_ASSESSMENT_STATUS: string[] = [
		"auditmanager:UpdateAssessmentStatus",
	];
	/** IAM actions required for the UpdateControl API call. */
	static readonly UPDATE_CONTROL: string[] = ["auditmanager:UpdateControl"];
	/** IAM actions required for the UpdateSettings API call. */
	static readonly UPDATE_SETTINGS: string[] = ["auditmanager:UpdateSettings"];
	/** IAM actions required for the ValidateAssessmentReportIntegrity API call. */
	static readonly VALIDATE_ASSESSMENT_REPORT_INTEGRITY: string[] = [
		"auditmanager:ValidateAssessmentReportIntegrity",
	];
}

/**
 * Condition key constants and builders for auditmanager.
 */
export class AuditmanagerConditions {
	/** Condition keys applicable to the CreateAssessment action. */
	static readonly CREATE_ASSESSMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateAssessmentFramework action. */
	static readonly CREATE_ASSESSMENT_FRAMEWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateControl action. */
	static readonly CREATE_CONTROL_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssessment action. */
	static readonly DELETE_ASSESSMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteAssessmentFramework action. */
	static readonly DELETE_ASSESSMENT_FRAMEWORK_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteControl action. */
	static readonly DELETE_CONTROL_CONDITION_KEYS: string[] = [
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

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
