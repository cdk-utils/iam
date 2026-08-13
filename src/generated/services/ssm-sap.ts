// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/ssm-sap.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the ssm-sap service.
 */
export class SSMSapActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "ssm-sap";

	/** [Write] ssm-sap:BackupDatabase */
	static readonly BackupDatabase = "ssm-sap:BackupDatabase";
	/** [PermissionManagement] ssm-sap:DeleteResourcePermission */
	static readonly DeleteResourcePermission = "ssm-sap:DeleteResourcePermission";
	/** [Write] ssm-sap:DeregisterApplication */
	static readonly DeregisterApplication = "ssm-sap:DeregisterApplication";
	/** [Read] ssm-sap:GetApplication */
	static readonly actionGetApplication = "ssm-sap:GetApplication";
	/** [Read] ssm-sap:GetComponent */
	static readonly actionGetComponent = "ssm-sap:GetComponent";
	/** [Read] ssm-sap:GetConfigurationCheckOperation */
	static readonly actionGetConfigurationCheckOperation =
		"ssm-sap:GetConfigurationCheckOperation";
	/** [Read] ssm-sap:GetDatabase */
	static readonly actionGetDatabase = "ssm-sap:GetDatabase";
	/** [Read] ssm-sap:GetOperation */
	static readonly actionGetOperation = "ssm-sap:GetOperation";
	/** [PermissionManagement] ssm-sap:GetResourcePermission */
	static readonly actionGetResourcePermission = "ssm-sap:GetResourcePermission";
	/** [List] ssm-sap:ListApplications */
	static readonly ListApplications = "ssm-sap:ListApplications";
	/** [List] ssm-sap:ListComponents */
	static readonly ListComponents = "ssm-sap:ListComponents";
	/** [List] ssm-sap:ListConfigurationCheckDefinitions */
	static readonly ListConfigurationCheckDefinitions =
		"ssm-sap:ListConfigurationCheckDefinitions";
	/** [List] ssm-sap:ListConfigurationCheckOperations */
	static readonly ListConfigurationCheckOperations =
		"ssm-sap:ListConfigurationCheckOperations";
	/** [List] ssm-sap:ListDatabases */
	static readonly ListDatabases = "ssm-sap:ListDatabases";
	/** [List] ssm-sap:ListOperationEvents */
	static readonly ListOperationEvents = "ssm-sap:ListOperationEvents";
	/** [List] ssm-sap:ListOperations */
	static readonly ListOperations = "ssm-sap:ListOperations";
	/** [List] ssm-sap:ListSubCheckResults */
	static readonly ListSubCheckResults = "ssm-sap:ListSubCheckResults";
	/** [List] ssm-sap:ListSubCheckRuleResults */
	static readonly ListSubCheckRuleResults = "ssm-sap:ListSubCheckRuleResults";
	/** [Read] ssm-sap:ListTagsForResource */
	static readonly ListTagsForResource = "ssm-sap:ListTagsForResource";
	/** [PermissionManagement] ssm-sap:PutResourcePermission */
	static readonly PutResourcePermission = "ssm-sap:PutResourcePermission";
	/** [Write] ssm-sap:RegisterApplication */
	static readonly RegisterApplication = "ssm-sap:RegisterApplication";
	/** [Write] ssm-sap:RestoreDatabase */
	static readonly RestoreDatabase = "ssm-sap:RestoreDatabase";
	/** [Write] ssm-sap:StartApplication */
	static readonly StartApplication = "ssm-sap:StartApplication";
	/** [Write] ssm-sap:StartApplicationRefresh */
	static readonly StartApplicationRefresh = "ssm-sap:StartApplicationRefresh";
	/** [Write] ssm-sap:StartConfigurationChecks */
	static readonly StartConfigurationChecks = "ssm-sap:StartConfigurationChecks";
	/** [Write] ssm-sap:StopApplication */
	static readonly StopApplication = "ssm-sap:StopApplication";
	/** [Tagging] ssm-sap:TagResource */
	static readonly TagResource = "ssm-sap:TagResource";
	/** [Tagging] ssm-sap:UntagResource */
	static readonly UntagResource = "ssm-sap:UntagResource";
	/** [Write] ssm-sap:UpdateApplicationSettings */
	static readonly UpdateApplicationSettings =
		"ssm-sap:UpdateApplicationSettings";
	/** [Write] ssm-sap:UpdateHANABackupSettings */
	static readonly UpdateHANABackupSettings = "ssm-sap:UpdateHANABackupSettings";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		SSMSapActions.actionGetApplication,
		SSMSapActions.actionGetComponent,
		SSMSapActions.actionGetConfigurationCheckOperation,
		SSMSapActions.actionGetDatabase,
		SSMSapActions.actionGetOperation,
		SSMSapActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		SSMSapActions.BackupDatabase,
		SSMSapActions.DeregisterApplication,
		SSMSapActions.RegisterApplication,
		SSMSapActions.RestoreDatabase,
		SSMSapActions.StartApplication,
		SSMSapActions.StartApplicationRefresh,
		SSMSapActions.StartConfigurationChecks,
		SSMSapActions.StopApplication,
		SSMSapActions.UpdateApplicationSettings,
		SSMSapActions.UpdateHANABackupSettings,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		SSMSapActions.ListApplications,
		SSMSapActions.ListComponents,
		SSMSapActions.ListConfigurationCheckDefinitions,
		SSMSapActions.ListConfigurationCheckOperations,
		SSMSapActions.ListDatabases,
		SSMSapActions.ListOperationEvents,
		SSMSapActions.ListOperations,
		SSMSapActions.ListSubCheckResults,
		SSMSapActions.ListSubCheckRuleResults,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		SSMSapActions.DeleteResourcePermission,
		SSMSapActions.actionGetResourcePermission,
		SSMSapActions.PutResourcePermission,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		SSMSapActions.TagResource,
		SSMSapActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface SSMSapApplicationArnProps {
	/** The ApplicationType component of the ARN. */
	readonly applicationType: string;
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
export interface SSMSapApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationType component. */
	readonly applicationType: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a component ARN.
 */
export interface SSMSapComponentArnProps {
	/** The ApplicationType component of the ARN. */
	readonly applicationType: string;
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The ComponentId component of the ARN. */
	readonly componentId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a component ARN.
 */
export interface SSMSapComponentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationType component. */
	readonly applicationType: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The ComponentId component. */
	readonly componentId: string;
}

/**
 * Properties for building a database ARN.
 */
export interface SSMSapDatabaseArnProps {
	/** The ApplicationType component of the ARN. */
	readonly applicationType: string;
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** The DatabaseId component of the ARN. */
	readonly databaseId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a database ARN.
 */
export interface SSMSapDatabaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationType component. */
	readonly applicationType: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
	/** The DatabaseId component. */
	readonly databaseId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):ssm-sap:(?<region>[^:]*):(?<account>[^:]*):(?<applicationType>[^:/?]+)\/(?<applicationId>[^:/?]+)$/;
const ComponentArnRegex =
	/^arn:(?<partition>[^:]+):ssm-sap:(?<region>[^:]*):(?<account>[^:]*):(?<applicationType>[^:/?]+)\/(?<applicationId>[^:/?]+)\/COMPONENT\/(?<componentId>[^:/?]+)$/;
const DatabaseArnRegex =
	/^arn:(?<partition>[^:]+):ssm-sap:(?<region>[^:]*):(?<account>[^:]*):(?<applicationType>[^:/?]+)\/(?<applicationId>[^:/?]+)\/DB\/(?<databaseId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for ssm-sap resources.
 */
export class SSMSapResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: SSMSapApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:ssm-sap:${props.region ?? "*"}:${props.account ?? "*"}:${props.applicationType}/${props.applicationId}`;
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
	static parseApplicationArn(arn: string): SSMSapApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationType: match.groups!.applicationType,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the component resource.
	 */
	static component(props: SSMSapComponentArnProps): string {
		return `arn:${props.partition ?? "aws"}:ssm-sap:${props.region ?? "*"}:${props.account ?? "*"}:${props.applicationType}/${props.applicationId}/COMPONENT/${props.componentId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the component resource.
	 */
	static isValidComponentArn(arn: string): boolean {
		return ComponentArnRegex.test(arn);
	}

	/**
	 * Parses a component ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseComponentArn(arn: string): SSMSapComponentArnComponents {
		const match = ComponentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid component ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationType: match.groups!.applicationType,
			applicationId: match.groups!.applicationId,
			componentId: match.groups!.componentId,
		};
	}

	/**
	 * Builds an ARN for the database resource.
	 */
	static database(props: SSMSapDatabaseArnProps): string {
		return `arn:${props.partition ?? "aws"}:ssm-sap:${props.region ?? "*"}:${props.account ?? "*"}:${props.applicationType}/${props.applicationId}/DB/${props.databaseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the database resource.
	 */
	static isValidDatabaseArn(arn: string): boolean {
		return DatabaseArnRegex.test(arn);
	}

	/**
	 * Parses a database ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatabaseArn(arn: string): SSMSapDatabaseArnComponents {
		const match = DatabaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid database ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationType: match.groups!.applicationType,
			applicationId: match.groups!.applicationId,
			databaseId: match.groups!.databaseId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for ssm-sap.
 */
export class SSMSapOperations {
	/** IAM actions required for the DeleteResourcePermission API call. */
	static readonly DeleteResourcePermission: string[] = [
		"ssm-sap:DeleteResourcePermission",
	];
	/** IAM actions required for the DeregisterApplication API call. */
	static readonly DeregisterApplication: string[] = [
		"ssm-sap:DeregisterApplication",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = ["ssm-sap:GetApplication"];
	/** IAM actions required for the GetComponent API call. */
	static readonly opGetComponent: string[] = ["ssm-sap:GetComponent"];
	/** IAM actions required for the GetConfigurationCheckOperation API call. */
	static readonly opGetConfigurationCheckOperation: string[] = [
		"ssm-sap:GetConfigurationCheckOperation",
	];
	/** IAM actions required for the GetDatabase API call. */
	static readonly opGetDatabase: string[] = ["ssm-sap:GetDatabase"];
	/** IAM actions required for the GetOperation API call. */
	static readonly opGetOperation: string[] = ["ssm-sap:GetOperation"];
	/** IAM actions required for the GetResourcePermission API call. */
	static readonly opGetResourcePermission: string[] = [
		"ssm-sap:GetResourcePermission",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = ["ssm-sap:ListApplications"];
	/** IAM actions required for the ListComponents API call. */
	static readonly ListComponents: string[] = ["ssm-sap:ListComponents"];
	/** IAM actions required for the ListConfigurationCheckDefinitions API call. */
	static readonly ListConfigurationCheckDefinitions: string[] = [
		"ssm-sap:ListConfigurationCheckDefinitions",
	];
	/** IAM actions required for the ListConfigurationCheckOperations API call. */
	static readonly ListConfigurationCheckOperations: string[] = [
		"ssm-sap:ListConfigurationCheckOperations",
	];
	/** IAM actions required for the ListDatabases API call. */
	static readonly ListDatabases: string[] = ["ssm-sap:ListDatabases"];
	/** IAM actions required for the ListOperationEvents API call. */
	static readonly ListOperationEvents: string[] = [
		"ssm-sap:ListOperationEvents",
	];
	/** IAM actions required for the ListOperations API call. */
	static readonly ListOperations: string[] = ["ssm-sap:ListOperations"];
	/** IAM actions required for the ListSubCheckResults API call. */
	static readonly ListSubCheckResults: string[] = [
		"ssm-sap:ListSubCheckResults",
	];
	/** IAM actions required for the ListSubCheckRuleResults API call. */
	static readonly ListSubCheckRuleResults: string[] = [
		"ssm-sap:ListSubCheckRuleResults",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"ssm-sap:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePermission API call. */
	static readonly PutResourcePermission: string[] = [
		"ssm-sap:PutResourcePermission",
	];
	/** IAM actions required for the RegisterApplication API call. */
	static readonly RegisterApplication: string[] = [
		"ssm-sap:RegisterApplication",
		"ssm-sap:TagResource",
	];
	/** IAM actions required for the StartApplication API call. */
	static readonly StartApplication: string[] = ["ssm-sap:StartApplication"];
	/** IAM actions required for the StartApplicationRefresh API call. */
	static readonly StartApplicationRefresh: string[] = [
		"ssm-sap:StartApplicationRefresh",
	];
	/** IAM actions required for the StartConfigurationChecks API call. */
	static readonly StartConfigurationChecks: string[] = [
		"ssm-sap:StartConfigurationChecks",
	];
	/** IAM actions required for the StopApplication API call. */
	static readonly StopApplication: string[] = ["ssm-sap:StopApplication"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["ssm-sap:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["ssm-sap:UntagResource"];
	/** IAM actions required for the UpdateApplicationSettings API call. */
	static readonly UpdateApplicationSettings: string[] = [
		"ssm-sap:UpdateApplicationSettings",
	];
}

/**
 * Condition key constants and builders for ssm-sap.
 */
export class SSMSapConditions {
	/** Condition keys applicable to the RegisterApplication action. */
	static readonly RegisterApplicationConditionKeys: string[] = [
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
