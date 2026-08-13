// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/pca-connector-ad.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the pca-connector-ad service.
 */
export class PcaConnectorAdActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "pca-connector-ad";

	/** [Write] pca-connector-ad:CreateConnector */
	static readonly CREATE_CONNECTOR = "pca-connector-ad:CreateConnector";
	/** [Write] pca-connector-ad:CreateDirectoryRegistration */
	static readonly CREATE_DIRECTORY_REGISTRATION =
		"pca-connector-ad:CreateDirectoryRegistration";
	/** [Write] pca-connector-ad:CreateServicePrincipalName */
	static readonly CREATE_SERVICE_PRINCIPAL_NAME =
		"pca-connector-ad:CreateServicePrincipalName";
	/** [Write] pca-connector-ad:CreateTemplate */
	static readonly CREATE_TEMPLATE = "pca-connector-ad:CreateTemplate";
	/** [Write] pca-connector-ad:CreateTemplateGroupAccessControlEntry */
	static readonly CREATE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY =
		"pca-connector-ad:CreateTemplateGroupAccessControlEntry";
	/** [Write] pca-connector-ad:DeleteConnector */
	static readonly DELETE_CONNECTOR = "pca-connector-ad:DeleteConnector";
	/** [Write] pca-connector-ad:DeleteDirectoryRegistration */
	static readonly DELETE_DIRECTORY_REGISTRATION =
		"pca-connector-ad:DeleteDirectoryRegistration";
	/** [Write] pca-connector-ad:DeleteServicePrincipalName */
	static readonly DELETE_SERVICE_PRINCIPAL_NAME =
		"pca-connector-ad:DeleteServicePrincipalName";
	/** [Write] pca-connector-ad:DeleteTemplate */
	static readonly DELETE_TEMPLATE = "pca-connector-ad:DeleteTemplate";
	/** [Write] pca-connector-ad:DeleteTemplateGroupAccessControlEntry */
	static readonly DELETE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY =
		"pca-connector-ad:DeleteTemplateGroupAccessControlEntry";
	/** [Read] pca-connector-ad:GetConnector */
	static readonly GET_CONNECTOR = "pca-connector-ad:GetConnector";
	/** [Read] pca-connector-ad:GetDirectoryRegistration */
	static readonly GET_DIRECTORY_REGISTRATION =
		"pca-connector-ad:GetDirectoryRegistration";
	/** [Read] pca-connector-ad:GetServicePrincipalName */
	static readonly GET_SERVICE_PRINCIPAL_NAME =
		"pca-connector-ad:GetServicePrincipalName";
	/** [Read] pca-connector-ad:GetTemplate */
	static readonly GET_TEMPLATE = "pca-connector-ad:GetTemplate";
	/** [Read] pca-connector-ad:GetTemplateGroupAccessControlEntry */
	static readonly GET_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY =
		"pca-connector-ad:GetTemplateGroupAccessControlEntry";
	/** [List] pca-connector-ad:ListConnectors */
	static readonly LIST_CONNECTORS = "pca-connector-ad:ListConnectors";
	/** [List] pca-connector-ad:ListDirectoryRegistrations */
	static readonly LIST_DIRECTORY_REGISTRATIONS =
		"pca-connector-ad:ListDirectoryRegistrations";
	/** [List] pca-connector-ad:ListServicePrincipalNames */
	static readonly LIST_SERVICE_PRINCIPAL_NAMES =
		"pca-connector-ad:ListServicePrincipalNames";
	/** [Read] pca-connector-ad:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"pca-connector-ad:ListTagsForResource";
	/** [List] pca-connector-ad:ListTemplateGroupAccessControlEntries */
	static readonly LIST_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRIES =
		"pca-connector-ad:ListTemplateGroupAccessControlEntries";
	/** [List] pca-connector-ad:ListTemplates */
	static readonly LIST_TEMPLATES = "pca-connector-ad:ListTemplates";
	/** [Tagging] pca-connector-ad:TagResource */
	static readonly TAG_RESOURCE = "pca-connector-ad:TagResource";
	/** [Tagging] pca-connector-ad:UntagResource */
	static readonly UNTAG_RESOURCE = "pca-connector-ad:UntagResource";
	/** [Write] pca-connector-ad:UpdateTemplate */
	static readonly UPDATE_TEMPLATE = "pca-connector-ad:UpdateTemplate";
	/** [Write] pca-connector-ad:UpdateTemplateGroupAccessControlEntry */
	static readonly UPDATE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY =
		"pca-connector-ad:UpdateTemplateGroupAccessControlEntry";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PcaConnectorAdActions.GET_CONNECTOR,
		PcaConnectorAdActions.GET_DIRECTORY_REGISTRATION,
		PcaConnectorAdActions.GET_SERVICE_PRINCIPAL_NAME,
		PcaConnectorAdActions.GET_TEMPLATE,
		PcaConnectorAdActions.GET_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY,
		PcaConnectorAdActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PcaConnectorAdActions.CREATE_CONNECTOR,
		PcaConnectorAdActions.CREATE_DIRECTORY_REGISTRATION,
		PcaConnectorAdActions.CREATE_SERVICE_PRINCIPAL_NAME,
		PcaConnectorAdActions.CREATE_TEMPLATE,
		PcaConnectorAdActions.CREATE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY,
		PcaConnectorAdActions.DELETE_CONNECTOR,
		PcaConnectorAdActions.DELETE_DIRECTORY_REGISTRATION,
		PcaConnectorAdActions.DELETE_SERVICE_PRINCIPAL_NAME,
		PcaConnectorAdActions.DELETE_TEMPLATE,
		PcaConnectorAdActions.DELETE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY,
		PcaConnectorAdActions.UPDATE_TEMPLATE,
		PcaConnectorAdActions.UPDATE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PcaConnectorAdActions.LIST_CONNECTORS,
		PcaConnectorAdActions.LIST_DIRECTORY_REGISTRATIONS,
		PcaConnectorAdActions.LIST_SERVICE_PRINCIPAL_NAMES,
		PcaConnectorAdActions.LIST_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRIES,
		PcaConnectorAdActions.LIST_TEMPLATES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PcaConnectorAdActions.TAG_RESOURCE,
		PcaConnectorAdActions.UNTAG_RESOURCE,
	];
}

const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pca-connector-ad:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)$",
);
const DirectoryRegistrationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pca-connector-ad:(?<region>[^:]*):(?<account>[^:]*):directory-registration/(?<directoryId>[^:/?]+)$",
);
const TemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pca-connector-ad:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)/template/(?<templateId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for pca-connector-ad resources.
 */
export class PcaConnectorAdResources {
	/**
	 * Builds an ARN for the Connector resource.
	 */
	static connector(props: {
		/** The ConnectorId component of the ARN. */
		readonly connectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:pca-connector-ad:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a Connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
	} {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
		};
	}

	/**
	 * Builds an ARN for the DirectoryRegistration resource.
	 */
	static directoryRegistration(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:pca-connector-ad:${props.region ?? "*"}:${props.account ?? "*"}:directory-registration/${props.directoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the DirectoryRegistration resource.
	 */
	static isValidDirectoryRegistrationArn(arn: string): boolean {
		return DirectoryRegistrationArnRegex.test(arn);
	}

	/**
	 * Parses a DirectoryRegistration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDirectoryRegistrationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		directoryId: string;
	} {
		const match = DirectoryRegistrationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid DirectoryRegistration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
		};
	}

	/**
	 * Builds an ARN for the Template resource.
	 */
	static template(props: {
		/** The ConnectorId component of the ARN. */
		readonly connectorId: string;
		/** The TemplateId component of the ARN. */
		readonly templateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:pca-connector-ad:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}/template/${props.templateId}`;
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
	static parseTemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
		templateId: string;
	} {
		const match = TemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Template ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
			templateId: match.groups!.templateId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for pca-connector-ad.
 */
export class PcaConnectorAdOperations {
	/** IAM actions required for the CreateConnector API call. */
	static readonly CREATE_CONNECTOR: string[] = [
		"pca-connector-ad:CreateConnector",
		"pca-connector-ad:TagResource",
	];
	/** IAM actions required for the CreateDirectoryRegistration API call. */
	static readonly CREATE_DIRECTORY_REGISTRATION: string[] = [
		"pca-connector-ad:CreateDirectoryRegistration",
		"pca-connector-ad:TagResource",
	];
	/** IAM actions required for the CreateServicePrincipalName API call. */
	static readonly CREATE_SERVICE_PRINCIPAL_NAME: string[] = [
		"pca-connector-ad:CreateServicePrincipalName",
	];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CREATE_TEMPLATE: string[] = [
		"pca-connector-ad:CreateTemplate",
		"pca-connector-ad:TagResource",
	];
	/** IAM actions required for the CreateTemplateGroupAccessControlEntry API call. */
	static readonly CREATE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY: string[] = [
		"pca-connector-ad:CreateTemplateGroupAccessControlEntry",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = [
		"pca-connector-ad:DeleteConnector",
	];
	/** IAM actions required for the DeleteDirectoryRegistration API call. */
	static readonly DELETE_DIRECTORY_REGISTRATION: string[] = [
		"pca-connector-ad:DeleteDirectoryRegistration",
	];
	/** IAM actions required for the DeleteServicePrincipalName API call. */
	static readonly DELETE_SERVICE_PRINCIPAL_NAME: string[] = [
		"pca-connector-ad:DeleteServicePrincipalName",
	];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DELETE_TEMPLATE: string[] = [
		"pca-connector-ad:DeleteTemplate",
	];
	/** IAM actions required for the DeleteTemplateGroupAccessControlEntry API call. */
	static readonly DELETE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY: string[] = [
		"pca-connector-ad:DeleteTemplateGroupAccessControlEntry",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly GET_CONNECTOR: string[] = ["pca-connector-ad:GetConnector"];
	/** IAM actions required for the GetDirectoryRegistration API call. */
	static readonly GET_DIRECTORY_REGISTRATION: string[] = [
		"pca-connector-ad:GetDirectoryRegistration",
	];
	/** IAM actions required for the GetServicePrincipalName API call. */
	static readonly GET_SERVICE_PRINCIPAL_NAME: string[] = [
		"pca-connector-ad:GetServicePrincipalName",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly GET_TEMPLATE: string[] = ["pca-connector-ad:GetTemplate"];
	/** IAM actions required for the GetTemplateGroupAccessControlEntry API call. */
	static readonly GET_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY: string[] = [
		"pca-connector-ad:GetTemplateGroupAccessControlEntry",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = [
		"pca-connector-ad:ListConnectors",
	];
	/** IAM actions required for the ListDirectoryRegistrations API call. */
	static readonly LIST_DIRECTORY_REGISTRATIONS: string[] = [
		"pca-connector-ad:ListDirectoryRegistrations",
	];
	/** IAM actions required for the ListServicePrincipalNames API call. */
	static readonly LIST_SERVICE_PRINCIPAL_NAMES: string[] = [
		"pca-connector-ad:ListServicePrincipalNames",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"pca-connector-ad:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateGroupAccessControlEntries API call. */
	static readonly LIST_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRIES: string[] = [
		"pca-connector-ad:ListTemplateGroupAccessControlEntries",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly LIST_TEMPLATES: string[] = ["pca-connector-ad:ListTemplates"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["pca-connector-ad:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["pca-connector-ad:UntagResource"];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UPDATE_TEMPLATE: string[] = [
		"pca-connector-ad:UpdateTemplate",
	];
	/** IAM actions required for the UpdateTemplateGroupAccessControlEntry API call. */
	static readonly UPDATE_TEMPLATE_GROUP_ACCESS_CONTROL_ENTRY: string[] = [
		"pca-connector-ad:UpdateTemplateGroupAccessControlEntry",
	];
}

/**
 * Condition key constants and builders for pca-connector-ad.
 */
export class PcaConnectorAdConditions {
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CREATE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDirectoryRegistration action. */
	static readonly CREATE_DIRECTORY_REGISTRATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplate action. */
	static readonly CREATE_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
