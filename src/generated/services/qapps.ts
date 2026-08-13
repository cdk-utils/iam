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
	static readonly ASSOCIATE_LIBRARY_ITEM_REVIEW =
		"qapps:AssociateLibraryItemReview";
	/** [Write] qapps:AssociateQAppWithUser */
	static readonly ASSOCIATE_Q_APP_WITH_USER = "qapps:AssociateQAppWithUser";
	/** [Write] qapps:BatchCreateCategory */
	static readonly BATCH_CREATE_CATEGORY = "qapps:BatchCreateCategory";
	/** [Write] qapps:BatchDeleteCategory */
	static readonly BATCH_DELETE_CATEGORY = "qapps:BatchDeleteCategory";
	/** [Write] qapps:BatchUpdateCategory */
	static readonly BATCH_UPDATE_CATEGORY = "qapps:BatchUpdateCategory";
	/** [Write] qapps:CopyQApp */
	static readonly COPY_Q_APP = "qapps:CopyQApp";
	/** [Write] qapps:CreateLibraryItem */
	static readonly CREATE_LIBRARY_ITEM = "qapps:CreateLibraryItem";
	/** [Write] qapps:CreateLibraryItemReview */
	static readonly CREATE_LIBRARY_ITEM_REVIEW = "qapps:CreateLibraryItemReview";
	/** [Write] qapps:CreateQApp */
	static readonly CREATE_Q_APP = "qapps:CreateQApp";
	/** [Write] qapps:CreateSubscriptionToken */
	static readonly CREATE_SUBSCRIPTION_TOKEN = "qapps:CreateSubscriptionToken";
	/** [Write] qapps:DeleteLibraryItem */
	static readonly DELETE_LIBRARY_ITEM = "qapps:DeleteLibraryItem";
	/** [Write] qapps:DeleteQApp */
	static readonly DELETE_Q_APP = "qapps:DeleteQApp";
	/** [Read] qapps:DescribeQAppPermissions */
	static readonly DESCRIBE_Q_APP_PERMISSIONS = "qapps:DescribeQAppPermissions";
	/** [Write] qapps:DisassociateLibraryItemReview */
	static readonly DISASSOCIATE_LIBRARY_ITEM_REVIEW =
		"qapps:DisassociateLibraryItemReview";
	/** [Write] qapps:DisassociateQAppFromUser */
	static readonly DISASSOCIATE_Q_APP_FROM_USER =
		"qapps:DisassociateQAppFromUser";
	/** [Write] qapps:ExportQAppSessionData */
	static readonly EXPORT_Q_APP_SESSION_DATA = "qapps:ExportQAppSessionData";
	/** [Read] qapps:GetLibraryItem */
	static readonly GET_LIBRARY_ITEM = "qapps:GetLibraryItem";
	/** [Read] qapps:GetQApp */
	static readonly GET_Q_APP = "qapps:GetQApp";
	/** [Read] qapps:GetQAppSession */
	static readonly GET_Q_APP_SESSION = "qapps:GetQAppSession";
	/** [Read] qapps:GetQAppSessionMetadata */
	static readonly GET_Q_APP_SESSION_METADATA = "qapps:GetQAppSessionMetadata";
	/** [Write] qapps:ImportDocument */
	static readonly IMPORT_DOCUMENT = "qapps:ImportDocument";
	/** [List] qapps:ListCategories */
	static readonly LIST_CATEGORIES = "qapps:ListCategories";
	/** [List] qapps:ListLibraryItems */
	static readonly LIST_LIBRARY_ITEMS = "qapps:ListLibraryItems";
	/** [Read] qapps:ListQAppSessionData */
	static readonly LIST_Q_APP_SESSION_DATA = "qapps:ListQAppSessionData";
	/** [List] qapps:ListQApps */
	static readonly LIST_Q_APPS = "qapps:ListQApps";
	/** [Read] qapps:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "qapps:ListTagsForResource";
	/** [Write] qapps:PredictProblemStatementFromConversation */
	static readonly PREDICT_PROBLEM_STATEMENT_FROM_CONVERSATION =
		"qapps:PredictProblemStatementFromConversation";
	/** [Write] qapps:PredictQApp */
	static readonly PREDICT_Q_APP = "qapps:PredictQApp";
	/** [Write] qapps:PredictQAppFromProblemStatement */
	static readonly PREDICT_Q_APP_FROM_PROBLEM_STATEMENT =
		"qapps:PredictQAppFromProblemStatement";
	/** [Write] qapps:StartQAppSession */
	static readonly START_Q_APP_SESSION = "qapps:StartQAppSession";
	/** [Write] qapps:StopQAppSession */
	static readonly STOP_Q_APP_SESSION = "qapps:StopQAppSession";
	/** [Tagging] qapps:TagResource */
	static readonly TAG_RESOURCE = "qapps:TagResource";
	/** [Tagging] qapps:UntagResource */
	static readonly UNTAG_RESOURCE = "qapps:UntagResource";
	/** [Write] qapps:UpdateLibraryItem */
	static readonly UPDATE_LIBRARY_ITEM = "qapps:UpdateLibraryItem";
	/** [Write] qapps:UpdateLibraryItemMetadata */
	static readonly UPDATE_LIBRARY_ITEM_METADATA =
		"qapps:UpdateLibraryItemMetadata";
	/** [Write] qapps:UpdateQApp */
	static readonly UPDATE_Q_APP = "qapps:UpdateQApp";
	/** [Write] qapps:UpdateQAppPermissions */
	static readonly UPDATE_Q_APP_PERMISSIONS = "qapps:UpdateQAppPermissions";
	/** [Write] qapps:UpdateQAppSession */
	static readonly UPDATE_Q_APP_SESSION = "qapps:UpdateQAppSession";
	/** [Write] qapps:UpdateQAppSessionMetadata */
	static readonly UPDATE_Q_APP_SESSION_METADATA =
		"qapps:UpdateQAppSessionMetadata";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		QappsActions.DESCRIBE_Q_APP_PERMISSIONS,
		QappsActions.GET_LIBRARY_ITEM,
		QappsActions.GET_Q_APP,
		QappsActions.GET_Q_APP_SESSION,
		QappsActions.GET_Q_APP_SESSION_METADATA,
		QappsActions.LIST_Q_APP_SESSION_DATA,
		QappsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		QappsActions.ASSOCIATE_LIBRARY_ITEM_REVIEW,
		QappsActions.ASSOCIATE_Q_APP_WITH_USER,
		QappsActions.BATCH_CREATE_CATEGORY,
		QappsActions.BATCH_DELETE_CATEGORY,
		QappsActions.BATCH_UPDATE_CATEGORY,
		QappsActions.COPY_Q_APP,
		QappsActions.CREATE_LIBRARY_ITEM,
		QappsActions.CREATE_LIBRARY_ITEM_REVIEW,
		QappsActions.CREATE_Q_APP,
		QappsActions.CREATE_SUBSCRIPTION_TOKEN,
		QappsActions.DELETE_LIBRARY_ITEM,
		QappsActions.DELETE_Q_APP,
		QappsActions.DISASSOCIATE_LIBRARY_ITEM_REVIEW,
		QappsActions.DISASSOCIATE_Q_APP_FROM_USER,
		QappsActions.EXPORT_Q_APP_SESSION_DATA,
		QappsActions.IMPORT_DOCUMENT,
		QappsActions.PREDICT_PROBLEM_STATEMENT_FROM_CONVERSATION,
		QappsActions.PREDICT_Q_APP,
		QappsActions.PREDICT_Q_APP_FROM_PROBLEM_STATEMENT,
		QappsActions.START_Q_APP_SESSION,
		QappsActions.STOP_Q_APP_SESSION,
		QappsActions.UPDATE_LIBRARY_ITEM,
		QappsActions.UPDATE_LIBRARY_ITEM_METADATA,
		QappsActions.UPDATE_Q_APP,
		QappsActions.UPDATE_Q_APP_PERMISSIONS,
		QappsActions.UPDATE_Q_APP_SESSION,
		QappsActions.UPDATE_Q_APP_SESSION_METADATA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		QappsActions.LIST_CATEGORIES,
		QappsActions.LIST_LIBRARY_ITEMS,
		QappsActions.LIST_Q_APPS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		QappsActions.TAG_RESOURCE,
		QappsActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qbusiness:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)$",
);
const QappArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qapps:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/qapp/(?<appId>[^:/?]+)$",
);
const QappSessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):qapps:(?<region>[^:]*):(?<account>[^:]*):application/(?<applicationId>[^:/?]+)/qapp/(?<appId>[^:/?]+)/session/(?<sessionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for qapps resources.
 */
export class QappsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
		/** The ApplicationId component of the ARN. */
		readonly applicationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
	} {
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
	static qapp(props: {
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
	}): string {
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
	static parseQappArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		appId: string;
	} {
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
	static qappSession(props: {
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
	}): string {
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
	static parseQappSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationId: string;
		appId: string;
		sessionId: string;
	} {
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
	static readonly ASSOCIATE_LIBRARY_ITEM_REVIEW: string[] = [
		"qapps:AssociateLibraryItemReview",
	];
	/** IAM actions required for the AssociateQAppWithUser API call. */
	static readonly ASSOCIATE_Q_APP_WITH_USER: string[] = [
		"qapps:AssociateQAppWithUser",
	];
	/** IAM actions required for the BatchCreateCategory API call. */
	static readonly BATCH_CREATE_CATEGORY: string[] = [
		"qapps:BatchCreateCategory",
	];
	/** IAM actions required for the BatchDeleteCategory API call. */
	static readonly BATCH_DELETE_CATEGORY: string[] = [
		"qapps:BatchDeleteCategory",
	];
	/** IAM actions required for the BatchUpdateCategory API call. */
	static readonly BATCH_UPDATE_CATEGORY: string[] = [
		"qapps:BatchUpdateCategory",
	];
	/** IAM actions required for the CreateLibraryItem API call. */
	static readonly CREATE_LIBRARY_ITEM: string[] = ["qapps:CreateLibraryItem"];
	/** IAM actions required for the CreatePresignedUrl API call. */
	static readonly CREATE_PRESIGNED_URL: string[] = ["qapps:ImportDocument"];
	/** IAM actions required for the CreateQApp API call. */
	static readonly CREATE_Q_APP: string[] = ["qapps:CreateQApp"];
	/** IAM actions required for the DeleteLibraryItem API call. */
	static readonly DELETE_LIBRARY_ITEM: string[] = ["qapps:DeleteLibraryItem"];
	/** IAM actions required for the DeleteQApp API call. */
	static readonly DELETE_Q_APP: string[] = ["qapps:DeleteQApp"];
	/** IAM actions required for the DescribeQAppPermissions API call. */
	static readonly DESCRIBE_Q_APP_PERMISSIONS: string[] = [
		"qapps:DescribeQAppPermissions",
	];
	/** IAM actions required for the DisassociateLibraryItemReview API call. */
	static readonly DISASSOCIATE_LIBRARY_ITEM_REVIEW: string[] = [
		"qapps:DisassociateLibraryItemReview",
	];
	/** IAM actions required for the DisassociateQAppFromUser API call. */
	static readonly DISASSOCIATE_Q_APP_FROM_USER: string[] = [
		"qapps:DisassociateQAppFromUser",
	];
	/** IAM actions required for the ExportQAppSessionData API call. */
	static readonly EXPORT_Q_APP_SESSION_DATA: string[] = [
		"qapps:ExportQAppSessionData",
	];
	/** IAM actions required for the GetLibraryItem API call. */
	static readonly GET_LIBRARY_ITEM: string[] = ["qapps:GetLibraryItem"];
	/** IAM actions required for the GetQApp API call. */
	static readonly GET_Q_APP: string[] = ["qapps:GetQApp"];
	/** IAM actions required for the GetQAppSession API call. */
	static readonly GET_Q_APP_SESSION: string[] = ["qapps:GetQAppSession"];
	/** IAM actions required for the GetQAppSessionMetadata API call. */
	static readonly GET_Q_APP_SESSION_METADATA: string[] = [
		"qapps:GetQAppSessionMetadata",
	];
	/** IAM actions required for the ImportDocument API call. */
	static readonly IMPORT_DOCUMENT: string[] = ["qapps:ImportDocument"];
	/** IAM actions required for the ListCategories API call. */
	static readonly LIST_CATEGORIES: string[] = ["qapps:ListCategories"];
	/** IAM actions required for the ListLibraryItems API call. */
	static readonly LIST_LIBRARY_ITEMS: string[] = ["qapps:ListLibraryItems"];
	/** IAM actions required for the ListQAppSessionData API call. */
	static readonly LIST_Q_APP_SESSION_DATA: string[] = [
		"qapps:ListQAppSessionData",
	];
	/** IAM actions required for the ListQApps API call. */
	static readonly LIST_Q_APPS: string[] = ["qapps:ListQApps"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"qapps:ListTagsForResource",
	];
	/** IAM actions required for the PredictQApp API call. */
	static readonly PREDICT_Q_APP: string[] = [];
	/** IAM actions required for the StartQAppSession API call. */
	static readonly START_Q_APP_SESSION: string[] = ["qapps:StartQAppSession"];
	/** IAM actions required for the StopQAppSession API call. */
	static readonly STOP_Q_APP_SESSION: string[] = ["qapps:StopQAppSession"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["qapps:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["qapps:UntagResource"];
	/** IAM actions required for the UpdateLibraryItem API call. */
	static readonly UPDATE_LIBRARY_ITEM: string[] = ["qapps:UpdateLibraryItem"];
	/** IAM actions required for the UpdateLibraryItemMetadata API call. */
	static readonly UPDATE_LIBRARY_ITEM_METADATA: string[] = [
		"qapps:UpdateLibraryItemMetadata",
	];
	/** IAM actions required for the UpdateQApp API call. */
	static readonly UPDATE_Q_APP: string[] = ["qapps:UpdateQApp"];
	/** IAM actions required for the UpdateQAppPermissions API call. */
	static readonly UPDATE_Q_APP_PERMISSIONS: string[] = [
		"qapps:UpdateQAppPermissions",
	];
	/** IAM actions required for the UpdateQAppSession API call. */
	static readonly UPDATE_Q_APP_SESSION: string[] = ["qapps:UpdateQAppSession"];
	/** IAM actions required for the UpdateQAppSessionMetadata API call. */
	static readonly UPDATE_Q_APP_SESSION_METADATA: string[] = [
		"qapps:UpdateQAppSessionMetadata",
	];
}

/**
 * Condition key constants and builders for qapps.
 */
export class QappsConditions {
	/** Condition keys applicable to the AssociateLibraryItemReview action. */
	static readonly ASSOCIATE_LIBRARY_ITEM_REVIEW_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the AssociateQAppWithUser action. */
	static readonly ASSOCIATE_Q_APP_WITH_USER_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CopyQApp action. */
	static readonly COPY_Q_APP_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CreateLibraryItem action. */
	static readonly CREATE_LIBRARY_ITEM_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CreateLibraryItemReview action. */
	static readonly CREATE_LIBRARY_ITEM_REVIEW_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the CreateQApp action. */
	static readonly CREATE_Q_APP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteLibraryItem action. */
	static readonly DELETE_LIBRARY_ITEM_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DeleteQApp action. */
	static readonly DELETE_Q_APP_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DescribeQAppPermissions action. */
	static readonly DESCRIBE_Q_APP_PERMISSIONS_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DisassociateLibraryItemReview action. */
	static readonly DISASSOCIATE_LIBRARY_ITEM_REVIEW_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the DisassociateQAppFromUser action. */
	static readonly DISASSOCIATE_Q_APP_FROM_USER_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the GetLibraryItem action. */
	static readonly GET_LIBRARY_ITEM_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the GetQApp action. */
	static readonly GET_Q_APP_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the GetQAppSession action. */
	static readonly GET_Q_APP_SESSION_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];
	/** Condition keys applicable to the ImportDocument action. */
	static readonly IMPORT_DOCUMENT_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];
	/** Condition keys applicable to the StartQAppSession action. */
	static readonly START_Q_APP_SESSION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the StopQAppSession action. */
	static readonly STOP_Q_APP_SESSION_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateLibraryItem action. */
	static readonly UPDATE_LIBRARY_ITEM_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the UpdateLibraryItemMetadata action. */
	static readonly UPDATE_LIBRARY_ITEM_METADATA_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
	];
	/** Condition keys applicable to the UpdateQApp action. */
	static readonly UPDATE_Q_APP_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the UpdateQAppPermissions action. */
	static readonly UPDATE_Q_APP_PERMISSIONS_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:UserIsAppOwner",
	];
	/** Condition keys applicable to the UpdateQAppSession action. */
	static readonly UPDATE_Q_APP_SESSION_CONDITION_KEYS: string[] = [
		"qapps:AppIsPublished",
		"qapps:SessionIsShared",
		"qapps:UserIsAppOwner",
		"qapps:UserIsSessionModerator",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
