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
	static readonly BACKUP_DATABASE = "ssm-sap:BackupDatabase";
	/** [PermissionManagement] ssm-sap:DeleteResourcePermission */
	static readonly DELETE_RESOURCE_PERMISSION =
		"ssm-sap:DeleteResourcePermission";
	/** [Write] ssm-sap:DeregisterApplication */
	static readonly DEREGISTER_APPLICATION = "ssm-sap:DeregisterApplication";
	/** [Read] ssm-sap:GetApplication */
	static readonly GET_APPLICATION = "ssm-sap:GetApplication";
	/** [Read] ssm-sap:GetComponent */
	static readonly GET_COMPONENT = "ssm-sap:GetComponent";
	/** [Read] ssm-sap:GetConfigurationCheckOperation */
	static readonly GET_CONFIGURATION_CHECK_OPERATION =
		"ssm-sap:GetConfigurationCheckOperation";
	/** [Read] ssm-sap:GetDatabase */
	static readonly GET_DATABASE = "ssm-sap:GetDatabase";
	/** [Read] ssm-sap:GetOperation */
	static readonly GET_OPERATION = "ssm-sap:GetOperation";
	/** [PermissionManagement] ssm-sap:GetResourcePermission */
	static readonly GET_RESOURCE_PERMISSION = "ssm-sap:GetResourcePermission";
	/** [List] ssm-sap:ListApplications */
	static readonly LIST_APPLICATIONS = "ssm-sap:ListApplications";
	/** [List] ssm-sap:ListComponents */
	static readonly LIST_COMPONENTS = "ssm-sap:ListComponents";
	/** [List] ssm-sap:ListConfigurationCheckDefinitions */
	static readonly LIST_CONFIGURATION_CHECK_DEFINITIONS =
		"ssm-sap:ListConfigurationCheckDefinitions";
	/** [List] ssm-sap:ListConfigurationCheckOperations */
	static readonly LIST_CONFIGURATION_CHECK_OPERATIONS =
		"ssm-sap:ListConfigurationCheckOperations";
	/** [List] ssm-sap:ListDatabases */
	static readonly LIST_DATABASES = "ssm-sap:ListDatabases";
	/** [List] ssm-sap:ListOperationEvents */
	static readonly LIST_OPERATION_EVENTS = "ssm-sap:ListOperationEvents";
	/** [List] ssm-sap:ListOperations */
	static readonly LIST_OPERATIONS = "ssm-sap:ListOperations";
	/** [List] ssm-sap:ListSubCheckResults */
	static readonly LIST_SUB_CHECK_RESULTS = "ssm-sap:ListSubCheckResults";
	/** [List] ssm-sap:ListSubCheckRuleResults */
	static readonly LIST_SUB_CHECK_RULE_RESULTS =
		"ssm-sap:ListSubCheckRuleResults";
	/** [Read] ssm-sap:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "ssm-sap:ListTagsForResource";
	/** [PermissionManagement] ssm-sap:PutResourcePermission */
	static readonly PUT_RESOURCE_PERMISSION = "ssm-sap:PutResourcePermission";
	/** [Write] ssm-sap:RegisterApplication */
	static readonly REGISTER_APPLICATION = "ssm-sap:RegisterApplication";
	/** [Write] ssm-sap:RestoreDatabase */
	static readonly RESTORE_DATABASE = "ssm-sap:RestoreDatabase";
	/** [Write] ssm-sap:StartApplication */
	static readonly START_APPLICATION = "ssm-sap:StartApplication";
	/** [Write] ssm-sap:StartApplicationRefresh */
	static readonly START_APPLICATION_REFRESH = "ssm-sap:StartApplicationRefresh";
	/** [Write] ssm-sap:StartConfigurationChecks */
	static readonly START_CONFIGURATION_CHECKS =
		"ssm-sap:StartConfigurationChecks";
	/** [Write] ssm-sap:StopApplication */
	static readonly STOP_APPLICATION = "ssm-sap:StopApplication";
	/** [Tagging] ssm-sap:TagResource */
	static readonly TAG_RESOURCE = "ssm-sap:TagResource";
	/** [Tagging] ssm-sap:UntagResource */
	static readonly UNTAG_RESOURCE = "ssm-sap:UntagResource";
	/** [Write] ssm-sap:UpdateApplicationSettings */
	static readonly UPDATE_APPLICATION_SETTINGS =
		"ssm-sap:UpdateApplicationSettings";
	/** [Write] ssm-sap:UpdateHANABackupSettings */
	static readonly UPDATE_HANA_BACKUP_SETTINGS =
		"ssm-sap:UpdateHANABackupSettings";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		SSMSapActions.GET_APPLICATION,
		SSMSapActions.GET_COMPONENT,
		SSMSapActions.GET_CONFIGURATION_CHECK_OPERATION,
		SSMSapActions.GET_DATABASE,
		SSMSapActions.GET_OPERATION,
		SSMSapActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		SSMSapActions.BACKUP_DATABASE,
		SSMSapActions.DEREGISTER_APPLICATION,
		SSMSapActions.REGISTER_APPLICATION,
		SSMSapActions.RESTORE_DATABASE,
		SSMSapActions.START_APPLICATION,
		SSMSapActions.START_APPLICATION_REFRESH,
		SSMSapActions.START_CONFIGURATION_CHECKS,
		SSMSapActions.STOP_APPLICATION,
		SSMSapActions.UPDATE_APPLICATION_SETTINGS,
		SSMSapActions.UPDATE_HANA_BACKUP_SETTINGS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		SSMSapActions.LIST_APPLICATIONS,
		SSMSapActions.LIST_COMPONENTS,
		SSMSapActions.LIST_CONFIGURATION_CHECK_DEFINITIONS,
		SSMSapActions.LIST_CONFIGURATION_CHECK_OPERATIONS,
		SSMSapActions.LIST_DATABASES,
		SSMSapActions.LIST_OPERATION_EVENTS,
		SSMSapActions.LIST_OPERATIONS,
		SSMSapActions.LIST_SUB_CHECK_RESULTS,
		SSMSapActions.LIST_SUB_CHECK_RULE_RESULTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		SSMSapActions.DELETE_RESOURCE_PERMISSION,
		SSMSapActions.GET_RESOURCE_PERMISSION,
		SSMSapActions.PUT_RESOURCE_PERMISSION,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		SSMSapActions.TAG_RESOURCE,
		SSMSapActions.UNTAG_RESOURCE,
	];
}

const ApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-sap:(?<region>[^:]*):(?<account>[^:]*):(?<applicationType>[^:/?]+)/(?<applicationId>[^:/?]+)$",
);
const ComponentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-sap:(?<region>[^:]*):(?<account>[^:]*):(?<applicationType>[^:/?]+)/(?<applicationId>[^:/?]+)/COMPONENT/(?<componentId>[^:/?]+)$",
);
const DatabaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):ssm-sap:(?<region>[^:]*):(?<account>[^:]*):(?<applicationType>[^:/?]+)/(?<applicationId>[^:/?]+)/DB/(?<databaseId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for ssm-sap resources.
 */
export class SSMSapResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: {
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
	}): string {
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
	static parseApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationType: string;
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
			applicationType: match.groups!.applicationType,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the component resource.
	 */
	static component(props: {
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
	}): string {
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
	static parseComponentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationType: string;
		applicationId: string;
		componentId: string;
	} {
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
	static database(props: {
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
	}): string {
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
	static parseDatabaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		applicationType: string;
		applicationId: string;
		databaseId: string;
	} {
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
	static readonly DELETE_RESOURCE_PERMISSION: string[] = [
		"ssm-sap:DeleteResourcePermission",
	];
	/** IAM actions required for the DeregisterApplication API call. */
	static readonly DEREGISTER_APPLICATION: string[] = [
		"ssm-sap:DeregisterApplication",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly GET_APPLICATION: string[] = ["ssm-sap:GetApplication"];
	/** IAM actions required for the GetComponent API call. */
	static readonly GET_COMPONENT: string[] = ["ssm-sap:GetComponent"];
	/** IAM actions required for the GetConfigurationCheckOperation API call. */
	static readonly GET_CONFIGURATION_CHECK_OPERATION: string[] = [
		"ssm-sap:GetConfigurationCheckOperation",
	];
	/** IAM actions required for the GetDatabase API call. */
	static readonly GET_DATABASE: string[] = ["ssm-sap:GetDatabase"];
	/** IAM actions required for the GetOperation API call. */
	static readonly GET_OPERATION: string[] = ["ssm-sap:GetOperation"];
	/** IAM actions required for the GetResourcePermission API call. */
	static readonly GET_RESOURCE_PERMISSION: string[] = [
		"ssm-sap:GetResourcePermission",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly LIST_APPLICATIONS: string[] = ["ssm-sap:ListApplications"];
	/** IAM actions required for the ListComponents API call. */
	static readonly LIST_COMPONENTS: string[] = ["ssm-sap:ListComponents"];
	/** IAM actions required for the ListConfigurationCheckDefinitions API call. */
	static readonly LIST_CONFIGURATION_CHECK_DEFINITIONS: string[] = [
		"ssm-sap:ListConfigurationCheckDefinitions",
	];
	/** IAM actions required for the ListConfigurationCheckOperations API call. */
	static readonly LIST_CONFIGURATION_CHECK_OPERATIONS: string[] = [
		"ssm-sap:ListConfigurationCheckOperations",
	];
	/** IAM actions required for the ListDatabases API call. */
	static readonly LIST_DATABASES: string[] = ["ssm-sap:ListDatabases"];
	/** IAM actions required for the ListOperationEvents API call. */
	static readonly LIST_OPERATION_EVENTS: string[] = [
		"ssm-sap:ListOperationEvents",
	];
	/** IAM actions required for the ListOperations API call. */
	static readonly LIST_OPERATIONS: string[] = ["ssm-sap:ListOperations"];
	/** IAM actions required for the ListSubCheckResults API call. */
	static readonly LIST_SUB_CHECK_RESULTS: string[] = [
		"ssm-sap:ListSubCheckResults",
	];
	/** IAM actions required for the ListSubCheckRuleResults API call. */
	static readonly LIST_SUB_CHECK_RULE_RESULTS: string[] = [
		"ssm-sap:ListSubCheckRuleResults",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"ssm-sap:ListTagsForResource",
	];
	/** IAM actions required for the PutResourcePermission API call. */
	static readonly PUT_RESOURCE_PERMISSION: string[] = [
		"ssm-sap:PutResourcePermission",
	];
	/** IAM actions required for the RegisterApplication API call. */
	static readonly REGISTER_APPLICATION: string[] = [
		"ssm-sap:RegisterApplication",
		"ssm-sap:TagResource",
	];
	/** IAM actions required for the StartApplication API call. */
	static readonly START_APPLICATION: string[] = ["ssm-sap:StartApplication"];
	/** IAM actions required for the StartApplicationRefresh API call. */
	static readonly START_APPLICATION_REFRESH: string[] = [
		"ssm-sap:StartApplicationRefresh",
	];
	/** IAM actions required for the StartConfigurationChecks API call. */
	static readonly START_CONFIGURATION_CHECKS: string[] = [
		"ssm-sap:StartConfigurationChecks",
	];
	/** IAM actions required for the StopApplication API call. */
	static readonly STOP_APPLICATION: string[] = ["ssm-sap:StopApplication"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["ssm-sap:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["ssm-sap:UntagResource"];
	/** IAM actions required for the UpdateApplicationSettings API call. */
	static readonly UPDATE_APPLICATION_SETTINGS: string[] = [
		"ssm-sap:UpdateApplicationSettings",
	];
}

/**
 * Condition key constants and builders for ssm-sap.
 */
export class SSMSapConditions {
	/** Condition keys applicable to the RegisterApplication action. */
	static readonly REGISTER_APPLICATION_CONDITION_KEYS: string[] = [
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
