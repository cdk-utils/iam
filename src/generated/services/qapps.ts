// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/qapps.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the qapps service.
 */
export class QappsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "qapps";

	/** [Write] qapps:AssociateLibraryItemReview */
	static readonly AssociateLibraryItemReview =
		"qapps:AssociateLibraryItemReview";
	/** [Write] qapps:AssociateQAppWithUser */
	static readonly AssociateQAppWithUser = "qapps:AssociateQAppWithUser";
	/** [Write] qapps:BatchCreateCategory */
	static readonly BatchCreateCategory = "qapps:BatchCreateCategory";
	/** [Write] qapps:BatchDeleteCategory */
	static readonly BatchDeleteCategory = "qapps:BatchDeleteCategory";
	/** [Write] qapps:BatchUpdateCategory */
	static readonly BatchUpdateCategory = "qapps:BatchUpdateCategory";
	/** [Write] qapps:CopyQApp */
	static readonly CopyQApp = "qapps:CopyQApp";
	/** [Write] qapps:CreateLibraryItem */
	static readonly CreateLibraryItem = "qapps:CreateLibraryItem";
	/** [Write] qapps:CreateLibraryItemReview */
	static readonly CreateLibraryItemReview = "qapps:CreateLibraryItemReview";
	/** [Write] qapps:CreateQApp */
	static readonly CreateQApp = "qapps:CreateQApp";
	/** [Write] qapps:CreateSubscriptionToken */
	static readonly CreateSubscriptionToken = "qapps:CreateSubscriptionToken";
	/** [Write] qapps:DeleteLibraryItem */
	static readonly DeleteLibraryItem = "qapps:DeleteLibraryItem";
	/** [Write] qapps:DeleteQApp */
	static readonly DeleteQApp = "qapps:DeleteQApp";
	/** [Read] qapps:DescribeQAppPermissions */
	static readonly DescribeQAppPermissions = "qapps:DescribeQAppPermissions";
	/** [Write] qapps:DisassociateLibraryItemReview */
	static readonly DisassociateLibraryItemReview =
		"qapps:DisassociateLibraryItemReview";
	/** [Write] qapps:DisassociateQAppFromUser */
	static readonly DisassociateQAppFromUser = "qapps:DisassociateQAppFromUser";
	/** [Write] qapps:ExportQAppSessionData */
	static readonly ExportQAppSessionData = "qapps:ExportQAppSessionData";
	/** [Read] qapps:GetLibraryItem */
	static readonly actionGetLibraryItem = "qapps:GetLibraryItem";
	/** [Read] qapps:GetQApp */
	static readonly actionGetQApp = "qapps:GetQApp";
	/** [Read] qapps:GetQAppSession */
	static readonly actionGetQAppSession = "qapps:GetQAppSession";
	/** [Read] qapps:GetQAppSessionMetadata */
	static readonly actionGetQAppSessionMetadata = "qapps:GetQAppSessionMetadata";
	/** [Write] qapps:ImportDocument */
	static readonly ImportDocument = "qapps:ImportDocument";
	/** [List] qapps:ListCategories */
	static readonly ListCategories = "qapps:ListCategories";
	/** [List] qapps:ListLibraryItems */
	static readonly ListLibraryItems = "qapps:ListLibraryItems";
	/** [Read] qapps:ListQAppSessionData */
	static readonly ListQAppSessionData = "qapps:ListQAppSessionData";
	/** [List] qapps:ListQApps */
	static readonly ListQApps = "qapps:ListQApps";
	/** [Read] qapps:ListTagsForResource */
	static readonly ListTagsForResource = "qapps:ListTagsForResource";
	/** [Write] qapps:PredictProblemStatementFromConversation */
	static readonly PredictProblemStatementFromConversation =
		"qapps:PredictProblemStatementFromConversation";
	/** [Write] qapps:PredictQApp */
	static readonly PredictQApp = "qapps:PredictQApp";
	/** [Write] qapps:PredictQAppFromProblemStatement */
	static readonly PredictQAppFromProblemStatement =
		"qapps:PredictQAppFromProblemStatement";
	/** [Write] qapps:StartQAppSession */
	static readonly StartQAppSession = "qapps:StartQAppSession";
	/** [Write] qapps:StopQAppSession */
	static readonly StopQAppSession = "qapps:StopQAppSession";
	/** [Tagging] qapps:TagResource */
	static readonly TagResource = "qapps:TagResource";
	/** [Tagging] qapps:UntagResource */
	static readonly UntagResource = "qapps:UntagResource";
	/** [Write] qapps:UpdateLibraryItem */
	static readonly UpdateLibraryItem = "qapps:UpdateLibraryItem";
	/** [Write] qapps:UpdateLibraryItemMetadata */
	static readonly UpdateLibraryItemMetadata = "qapps:UpdateLibraryItemMetadata";
	/** [Write] qapps:UpdateQApp */
	static readonly UpdateQApp = "qapps:UpdateQApp";
	/** [Write] qapps:UpdateQAppPermissions */
	static readonly UpdateQAppPermissions = "qapps:UpdateQAppPermissions";
	/** [Write] qapps:UpdateQAppSession */
	static readonly UpdateQAppSession = "qapps:UpdateQAppSession";
	/** [Write] qapps:UpdateQAppSessionMetadata */
	static readonly UpdateQAppSessionMetadata = "qapps:UpdateQAppSessionMetadata";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		QappsActions.DescribeQAppPermissions,
		QappsActions.actionGetLibraryItem,
		QappsActions.actionGetQApp,
		QappsActions.actionGetQAppSession,
		QappsActions.actionGetQAppSessionMetadata,
		QappsActions.ListQAppSessionData,
		QappsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		QappsActions.AssociateLibraryItemReview,
		QappsActions.AssociateQAppWithUser,
		QappsActions.BatchCreateCategory,
		QappsActions.BatchDeleteCategory,
		QappsActions.BatchUpdateCategory,
		QappsActions.CopyQApp,
		QappsActions.CreateLibraryItem,
		QappsActions.CreateLibraryItemReview,
		QappsActions.CreateQApp,
		QappsActions.CreateSubscriptionToken,
		QappsActions.DeleteLibraryItem,
		QappsActions.DeleteQApp,
		QappsActions.DisassociateLibraryItemReview,
		QappsActions.DisassociateQAppFromUser,
		QappsActions.ExportQAppSessionData,
		QappsActions.ImportDocument,
		QappsActions.PredictProblemStatementFromConversation,
		QappsActions.PredictQApp,
		QappsActions.PredictQAppFromProblemStatement,
		QappsActions.StartQAppSession,
		QappsActions.StopQAppSession,
		QappsActions.UpdateLibraryItem,
		QappsActions.UpdateLibraryItemMetadata,
		QappsActions.UpdateQApp,
		QappsActions.UpdateQAppPermissions,
		QappsActions.UpdateQAppSession,
		QappsActions.UpdateQAppSessionMetadata,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		QappsActions.ListCategories,
		QappsActions.ListLibraryItems,
		QappsActions.ListQApps,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		QappsActions.TagResource,
		QappsActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface QappsApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface QappsApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a qapp ARN.
 */
export interface QappsQappArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a qapp ARN.
 */
export interface QappsQappArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The AppId component. */
	readonly appId: string;
}

/**
 * Properties for building a qapp-session ARN.
 */
export interface QappsQappSessionArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a qapp-session ARN.
 */
export interface QappsQappSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The AppId component. */
	readonly appId: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const QappArnRegex =
	/^arn:(?<partition>[^:]+):qapps:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/qapp\/(?<appId>[^:/?]+)$/;
const QappSessionArnRegex =
	/^arn:(?<partition>[^:]+):qapps:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)\/qapp\/(?<appId>[^:/?]+)\/session\/(?<sessionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for qapps resources.
 */
export class QappsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: QappsApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:qbusiness:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(arn: string): QappsApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the qapp resource.
	 */
	static qapp(props: QappsQappArnProps): string {
		return `arn:${props.partition ?? "aws"}:qapps:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/qapp/${props.appId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the qapp resource.
	 */
	static isValidQappArn(arn: string): boolean {
		return QappArnRegex.test(arn);
	}

	/**
	 * Parses a qapp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQappArn(arn: string): QappsQappArnComponents {
		const match = QappArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid qapp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			appId: match.groups!.appId,
		};
	}

	/**
	 * Builds an ARN for the qapp-session resource.
	 */
	static qappSession(props: QappsQappSessionArnProps): string {
		return `arn:${props.partition ?? "aws"}:qapps:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}/qapp/${props.appId}/session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the qapp-session resource.
	 */
	static isValidQappSessionArn(arn: string): boolean {
		return QappSessionArnRegex.test(arn);
	}

	/**
	 * Parses a qapp-session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseQappSessionArn(arn: string): QappsQappSessionArnComponents {
		const match = QappSessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid qapp-session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
			appId: match.groups!.appId,
			sessionId: match.groups!.sessionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for qapps.
 */
export class QappsOperations {
	/** IAM actions required for the AssociateLibraryItemReview API call. */
	static readonly AssociateLibraryItemReview: string[] = [
		"qapps:AssociateLibraryItemReview",
	];
	/** IAM actions required for the AssociateQAppWithUser API call. */
	static readonly AssociateQAppWithUser: string[] = [
		"qapps:AssociateQAppWithUser",
	];
	/** IAM actions required for the BatchCreateCategory API call. */
	static readonly BatchCreateCategory: string[] = ["qapps:BatchCreateCategory"];
	/** IAM actions required for the BatchDeleteCategory API call. */
	static readonly BatchDeleteCategory: string[] = ["qapps:BatchDeleteCategory"];
	/** IAM actions required for the BatchUpdateCategory API call. */
	static readonly BatchUpdateCategory: string[] = ["qapps:BatchUpdateCategory"];
	/** IAM actions required for the CreateLibraryItem API call. */
	static readonly CreateLibraryItem: string[] = ["qapps:CreateLibraryItem"];
	/** IAM actions required for the CreatePresignedUrl API call. */
	static readonly CreatePresignedUrl: string[] = ["qapps:ImportDocument"];
	/** IAM actions required for the CreateQApp API call. */
	static readonly CreateQApp: string[] = ["qapps:CreateQApp"];
	/** IAM actions required for the DeleteLibraryItem API call. */
	static readonly DeleteLibraryItem: string[] = ["qapps:DeleteLibraryItem"];
	/** IAM actions required for the DeleteQApp API call. */
	static readonly DeleteQApp: string[] = ["qapps:DeleteQApp"];
	/** IAM actions required for the DescribeQAppPermissions API call. */
	static readonly DescribeQAppPermissions: string[] = [
		"qapps:DescribeQAppPermissions",
	];
	/** IAM actions required for the DisassociateLibraryItemReview API call. */
	static readonly DisassociateLibraryItemReview: string[] = [
		"qapps:DisassociateLibraryItemReview",
	];
	/** IAM actions required for the DisassociateQAppFromUser API call. */
	static readonly DisassociateQAppFromUser: string[] = [
		"qapps:DisassociateQAppFromUser",
	];
	/** IAM actions required for the ExportQAppSessionData API call. */
	static readonly ExportQAppSessionData: string[] = [
		"qapps:ExportQAppSessionData",
	];
	/** IAM actions required for the GetLibraryItem API call. */
	static readonly opGetLibraryItem: string[] = ["qapps:GetLibraryItem"];
	/** IAM actions required for the GetQApp API call. */
	static readonly opGetQApp: string[] = ["qapps:GetQApp"];
	/** IAM actions required for the GetQAppSession API call. */
	static readonly opGetQAppSession: string[] = ["qapps:GetQAppSession"];
	/** IAM actions required for the GetQAppSessionMetadata API call. */
	static readonly opGetQAppSessionMetadata: string[] = [
		"qapps:GetQAppSessionMetadata",
	];
	/** IAM actions required for the ImportDocument API call. */
	static readonly ImportDocument: string[] = ["qapps:ImportDocument"];
	/** IAM actions required for the ListCategories API call. */
	static readonly ListCategories: string[] = ["qapps:ListCategories"];
	/** IAM actions required for the ListLibraryItems API call. */
	static readonly ListLibraryItems: string[] = ["qapps:ListLibraryItems"];
	/** IAM actions required for the ListQAppSessionData API call. */
	static readonly ListQAppSessionData: string[] = ["qapps:ListQAppSessionData"];
	/** IAM actions required for the ListQApps API call. */
	static readonly ListQApps: string[] = ["qapps:ListQApps"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["qapps:ListTagsForResource"];
	/** IAM actions required for the PredictQApp API call. */
	static readonly PredictQApp: string[] = [];
	/** IAM actions required for the StartQAppSession API call. */
	static readonly StartQAppSession: string[] = ["qapps:StartQAppSession"];
	/** IAM actions required for the StopQAppSession API call. */
	static readonly StopQAppSession: string[] = ["qapps:StopQAppSession"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["qapps:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["qapps:UntagResource"];
	/** IAM actions required for the UpdateLibraryItem API call. */
	static readonly UpdateLibraryItem: string[] = ["qapps:UpdateLibraryItem"];
	/** IAM actions required for the UpdateLibraryItemMetadata API call. */
	static readonly UpdateLibraryItemMetadata: string[] = [
		"qapps:UpdateLibraryItemMetadata",
	];
	/** IAM actions required for the UpdateQApp API call. */
	static readonly UpdateQApp: string[] = ["qapps:UpdateQApp"];
	/** IAM actions required for the UpdateQAppPermissions API call. */
	static readonly UpdateQAppPermissions: string[] = [
		"qapps:UpdateQAppPermissions",
	];
	/** IAM actions required for the UpdateQAppSession API call. */
	static readonly UpdateQAppSession: string[] = ["qapps:UpdateQAppSession"];
	/** IAM actions required for the UpdateQAppSessionMetadata API call. */
	static readonly UpdateQAppSessionMetadata: string[] = [
		"qapps:UpdateQAppSessionMetadata",
	];
}

/**
 * Condition key constants and builders for qapps.
 */
export class QappsConditions {
	/** Condition keys applicable to the AssociateLibraryItemReview action. */
	static readonly AssociateLibraryItemReviewConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the AssociateQAppWithUser action. */
	static readonly AssociateQAppWithUserConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CopyQApp action. */
	static readonly CopyQAppConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CreateLibraryItem action. */
	static readonly CreateLibraryItemConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CreateLibraryItemReview action. */
	static readonly CreateLibraryItemReviewConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CreateQApp action. */
	static readonly CreateQAppConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteLibraryItem action. */
	static readonly DeleteLibraryItemConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DeleteQApp action. */
	static readonly DeleteQAppConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DescribeQAppPermissions action. */
	static readonly DescribeQAppPermissionsConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DisassociateLibraryItemReview action. */
	static readonly DisassociateLibraryItemReviewConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DisassociateQAppFromUser action. */
	static readonly DisassociateQAppFromUserConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the GetLibraryItem action. */
	static readonly actionGetLibraryItemConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the GetQApp action. */
	static readonly actionGetQAppConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the GetQAppSession action. */
	static readonly actionGetQAppSessionConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];
	/** Condition keys applicable to the ImportDocument action. */
	static readonly ImportDocumentConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];
	/** Condition keys applicable to the StartQAppSession action. */
	static readonly StartQAppSessionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the StopQAppSession action. */
	static readonly StopQAppSessionConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateLibraryItem action. */
	static readonly UpdateLibraryItemConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the UpdateLibraryItemMetadata action. */
	static readonly UpdateLibraryItemMetadataConditionKeys: string[] = [
		"qapps:AppIsPublished",
	];
	/** Condition keys applicable to the UpdateQApp action. */
	static readonly UpdateQAppConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the UpdateQAppPermissions action. */
	static readonly UpdateQAppPermissionsConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the UpdateQAppSession action. */
	static readonly UpdateQAppSessionConditionKeys: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: qapps:AppIsPublished (String) */
	static readonly APP_IS_PUBLISHED = "qapps:AppIsPublished";
	/** Condition key: qapps:SessionIsShared (String) */
	static readonly SESSION_IS_SHARED = "qapps:SessionIsShared";
	/** Condition key: qapps:UserIsAppOwner (String) */
	static readonly USER_IS_APP_OWNER = "qapps:UserIsAppOwner";
	/** Condition key: qapps:UserIsSessionModerator (String) */
	static readonly USER_IS_SESSION_MODERATOR = "qapps:UserIsSessionModerator";

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
	 * Generates a condition block for `qapps:AppIsPublished`.
	 */
	static appIsPublished(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "qapps:AppIsPublished": value } };
	}

	/**
	 * Generates a condition block for `qapps:SessionIsShared`.
	 */
	static sessionIsShared(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "qapps:SessionIsShared": value } };
	}

	/**
	 * Generates a condition block for `qapps:UserIsAppOwner`.
	 */
	static userIsAppOwner(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "qapps:UserIsAppOwner": value } };
	}

	/**
	 * Generates a condition block for `qapps:UserIsSessionModerator`.
	 */
	static userIsSessionModerator(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "qapps:UserIsSessionModerator": value } };
	}
}
