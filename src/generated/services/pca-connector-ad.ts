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
	static readonly CreateConnector = "pca-connector-ad:CreateConnector";
	/** [Write] pca-connector-ad:CreateDirectoryRegistration */
	static readonly CreateDirectoryRegistration =
		"pca-connector-ad:CreateDirectoryRegistration";
	/** [Write] pca-connector-ad:CreateServicePrincipalName */
	static readonly CreateServicePrincipalName =
		"pca-connector-ad:CreateServicePrincipalName";
	/** [Write] pca-connector-ad:CreateTemplate */
	static readonly CreateTemplate = "pca-connector-ad:CreateTemplate";
	/** [Write] pca-connector-ad:CreateTemplateGroupAccessControlEntry */
	static readonly CreateTemplateGroupAccessControlEntry =
		"pca-connector-ad:CreateTemplateGroupAccessControlEntry";
	/** [Write] pca-connector-ad:DeleteConnector */
	static readonly DeleteConnector = "pca-connector-ad:DeleteConnector";
	/** [Write] pca-connector-ad:DeleteDirectoryRegistration */
	static readonly DeleteDirectoryRegistration =
		"pca-connector-ad:DeleteDirectoryRegistration";
	/** [Write] pca-connector-ad:DeleteServicePrincipalName */
	static readonly DeleteServicePrincipalName =
		"pca-connector-ad:DeleteServicePrincipalName";
	/** [Write] pca-connector-ad:DeleteTemplate */
	static readonly DeleteTemplate = "pca-connector-ad:DeleteTemplate";
	/** [Write] pca-connector-ad:DeleteTemplateGroupAccessControlEntry */
	static readonly DeleteTemplateGroupAccessControlEntry =
		"pca-connector-ad:DeleteTemplateGroupAccessControlEntry";
	/** [Read] pca-connector-ad:GetConnector */
	static readonly actionGetConnector = "pca-connector-ad:GetConnector";
	/** [Read] pca-connector-ad:GetDirectoryRegistration */
	static readonly actionGetDirectoryRegistration =
		"pca-connector-ad:GetDirectoryRegistration";
	/** [Read] pca-connector-ad:GetServicePrincipalName */
	static readonly actionGetServicePrincipalName =
		"pca-connector-ad:GetServicePrincipalName";
	/** [Read] pca-connector-ad:GetTemplate */
	static readonly actionGetTemplate = "pca-connector-ad:GetTemplate";
	/** [Read] pca-connector-ad:GetTemplateGroupAccessControlEntry */
	static readonly actionGetTemplateGroupAccessControlEntry =
		"pca-connector-ad:GetTemplateGroupAccessControlEntry";
	/** [List] pca-connector-ad:ListConnectors */
	static readonly ListConnectors = "pca-connector-ad:ListConnectors";
	/** [List] pca-connector-ad:ListDirectoryRegistrations */
	static readonly ListDirectoryRegistrations =
		"pca-connector-ad:ListDirectoryRegistrations";
	/** [List] pca-connector-ad:ListServicePrincipalNames */
	static readonly ListServicePrincipalNames =
		"pca-connector-ad:ListServicePrincipalNames";
	/** [Read] pca-connector-ad:ListTagsForResource */
	static readonly ListTagsForResource = "pca-connector-ad:ListTagsForResource";
	/** [List] pca-connector-ad:ListTemplateGroupAccessControlEntries */
	static readonly ListTemplateGroupAccessControlEntries =
		"pca-connector-ad:ListTemplateGroupAccessControlEntries";
	/** [List] pca-connector-ad:ListTemplates */
	static readonly ListTemplates = "pca-connector-ad:ListTemplates";
	/** [Tagging] pca-connector-ad:TagResource */
	static readonly TagResource = "pca-connector-ad:TagResource";
	/** [Tagging] pca-connector-ad:UntagResource */
	static readonly UntagResource = "pca-connector-ad:UntagResource";
	/** [Write] pca-connector-ad:UpdateTemplate */
	static readonly UpdateTemplate = "pca-connector-ad:UpdateTemplate";
	/** [Write] pca-connector-ad:UpdateTemplateGroupAccessControlEntry */
	static readonly UpdateTemplateGroupAccessControlEntry =
		"pca-connector-ad:UpdateTemplateGroupAccessControlEntry";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PcaConnectorAdActions.actionGetConnector,
		PcaConnectorAdActions.actionGetDirectoryRegistration,
		PcaConnectorAdActions.actionGetServicePrincipalName,
		PcaConnectorAdActions.actionGetTemplate,
		PcaConnectorAdActions.actionGetTemplateGroupAccessControlEntry,
		PcaConnectorAdActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PcaConnectorAdActions.CreateConnector,
		PcaConnectorAdActions.CreateDirectoryRegistration,
		PcaConnectorAdActions.CreateServicePrincipalName,
		PcaConnectorAdActions.CreateTemplate,
		PcaConnectorAdActions.CreateTemplateGroupAccessControlEntry,
		PcaConnectorAdActions.DeleteConnector,
		PcaConnectorAdActions.DeleteDirectoryRegistration,
		PcaConnectorAdActions.DeleteServicePrincipalName,
		PcaConnectorAdActions.DeleteTemplate,
		PcaConnectorAdActions.DeleteTemplateGroupAccessControlEntry,
		PcaConnectorAdActions.UpdateTemplate,
		PcaConnectorAdActions.UpdateTemplateGroupAccessControlEntry,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PcaConnectorAdActions.ListConnectors,
		PcaConnectorAdActions.ListDirectoryRegistrations,
		PcaConnectorAdActions.ListServicePrincipalNames,
		PcaConnectorAdActions.ListTemplateGroupAccessControlEntries,
		PcaConnectorAdActions.ListTemplates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PcaConnectorAdActions.TagResource,
		PcaConnectorAdActions.UntagResource,
	];
}

/**
 * Properties for building a Connector ARN.
 */
export interface PcaConnectorAdConnectorArnProps {
	/** The ConnectorId component of the ARN. */
	readonly connectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Connector ARN.
 */
export interface PcaConnectorAdConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
}

/**
 * Properties for building a DirectoryRegistration ARN.
 */
export interface PcaConnectorAdDirectoryRegistrationArnProps {
	/** The DirectoryId component of the ARN. */
	readonly directoryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a DirectoryRegistration ARN.
 */
export interface PcaConnectorAdDirectoryRegistrationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
}

/**
 * Properties for building a Template ARN.
 */
export interface PcaConnectorAdTemplateArnProps {
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
}

/**
 * Parsed components of a Template ARN.
 */
export interface PcaConnectorAdTemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
	/** The TemplateId component. */
	readonly templateId: string;
}

const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):pca-connector-ad:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)$/;
const DirectoryRegistrationArnRegex =
	/^arn:(?<partition>[^:]+):pca-connector-ad:(?<region>[^:]*):(?<account>[^:]*):directory-registration\/(?<directoryId>[^:/?]+)$/;
const TemplateArnRegex =
	/^arn:(?<partition>[^:]+):pca-connector-ad:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)\/template\/(?<templateId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for pca-connector-ad resources.
 */
export class PcaConnectorAdResources {
	/**
	 * Builds an ARN for the Connector resource.
	 */
	static connector(props: PcaConnectorAdConnectorArnProps): string {
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
	static parseConnectorArn(arn: string): PcaConnectorAdConnectorArnComponents {
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
	static directoryRegistration(
		props: PcaConnectorAdDirectoryRegistrationArnProps,
	): string {
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
	static parseDirectoryRegistrationArn(
		arn: string,
	): PcaConnectorAdDirectoryRegistrationArnComponents {
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
	static template(props: PcaConnectorAdTemplateArnProps): string {
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
	static parseTemplateArn(arn: string): PcaConnectorAdTemplateArnComponents {
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
	static readonly CreateConnector: string[] = [
		"pca-connector-ad:CreateConnector",
		"pca-connector-ad:TagResource",
	];
	/** IAM actions required for the CreateDirectoryRegistration API call. */
	static readonly CreateDirectoryRegistration: string[] = [
		"pca-connector-ad:CreateDirectoryRegistration",
		"pca-connector-ad:TagResource",
	];
	/** IAM actions required for the CreateServicePrincipalName API call. */
	static readonly CreateServicePrincipalName: string[] = [
		"pca-connector-ad:CreateServicePrincipalName",
	];
	/** IAM actions required for the CreateTemplate API call. */
	static readonly CreateTemplate: string[] = [
		"pca-connector-ad:CreateTemplate",
		"pca-connector-ad:TagResource",
	];
	/** IAM actions required for the CreateTemplateGroupAccessControlEntry API call. */
	static readonly CreateTemplateGroupAccessControlEntry: string[] = [
		"pca-connector-ad:CreateTemplateGroupAccessControlEntry",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = [
		"pca-connector-ad:DeleteConnector",
	];
	/** IAM actions required for the DeleteDirectoryRegistration API call. */
	static readonly DeleteDirectoryRegistration: string[] = [
		"pca-connector-ad:DeleteDirectoryRegistration",
	];
	/** IAM actions required for the DeleteServicePrincipalName API call. */
	static readonly DeleteServicePrincipalName: string[] = [
		"pca-connector-ad:DeleteServicePrincipalName",
	];
	/** IAM actions required for the DeleteTemplate API call. */
	static readonly DeleteTemplate: string[] = [
		"pca-connector-ad:DeleteTemplate",
	];
	/** IAM actions required for the DeleteTemplateGroupAccessControlEntry API call. */
	static readonly DeleteTemplateGroupAccessControlEntry: string[] = [
		"pca-connector-ad:DeleteTemplateGroupAccessControlEntry",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly opGetConnector: string[] = ["pca-connector-ad:GetConnector"];
	/** IAM actions required for the GetDirectoryRegistration API call. */
	static readonly opGetDirectoryRegistration: string[] = [
		"pca-connector-ad:GetDirectoryRegistration",
	];
	/** IAM actions required for the GetServicePrincipalName API call. */
	static readonly opGetServicePrincipalName: string[] = [
		"pca-connector-ad:GetServicePrincipalName",
	];
	/** IAM actions required for the GetTemplate API call. */
	static readonly opGetTemplate: string[] = ["pca-connector-ad:GetTemplate"];
	/** IAM actions required for the GetTemplateGroupAccessControlEntry API call. */
	static readonly opGetTemplateGroupAccessControlEntry: string[] = [
		"pca-connector-ad:GetTemplateGroupAccessControlEntry",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = [
		"pca-connector-ad:ListConnectors",
	];
	/** IAM actions required for the ListDirectoryRegistrations API call. */
	static readonly ListDirectoryRegistrations: string[] = [
		"pca-connector-ad:ListDirectoryRegistrations",
	];
	/** IAM actions required for the ListServicePrincipalNames API call. */
	static readonly ListServicePrincipalNames: string[] = [
		"pca-connector-ad:ListServicePrincipalNames",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"pca-connector-ad:ListTagsForResource",
	];
	/** IAM actions required for the ListTemplateGroupAccessControlEntries API call. */
	static readonly ListTemplateGroupAccessControlEntries: string[] = [
		"pca-connector-ad:ListTemplateGroupAccessControlEntries",
	];
	/** IAM actions required for the ListTemplates API call. */
	static readonly ListTemplates: string[] = ["pca-connector-ad:ListTemplates"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["pca-connector-ad:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["pca-connector-ad:UntagResource"];
	/** IAM actions required for the UpdateTemplate API call. */
	static readonly UpdateTemplate: string[] = [
		"pca-connector-ad:UpdateTemplate",
	];
	/** IAM actions required for the UpdateTemplateGroupAccessControlEntry API call. */
	static readonly UpdateTemplateGroupAccessControlEntry: string[] = [
		"pca-connector-ad:UpdateTemplateGroupAccessControlEntry",
	];
}

/**
 * Condition key constants and builders for pca-connector-ad.
 */
export class PcaConnectorAdConditions {
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CreateConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateDirectoryRegistration action. */
	static readonly CreateDirectoryRegistrationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTemplate action. */
	static readonly CreateTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
