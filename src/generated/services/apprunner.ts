// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/apprunner.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the apprunner service.
 */
export class ApprunnerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "apprunner";

	/** [Write] apprunner:AssociateCustomDomain */
	static readonly ASSOCIATE_CUSTOM_DOMAIN = "apprunner:AssociateCustomDomain";
	/** [Write] apprunner:AssociateWebAcl */
	static readonly ASSOCIATE_WEB_ACL = "apprunner:AssociateWebAcl";
	/** [Write] apprunner:CreateAutoScalingConfiguration */
	static readonly CREATE_AUTO_SCALING_CONFIGURATION =
		"apprunner:CreateAutoScalingConfiguration";
	/** [Write] apprunner:CreateConnection */
	static readonly CREATE_CONNECTION = "apprunner:CreateConnection";
	/** [Write] apprunner:CreateObservabilityConfiguration */
	static readonly CREATE_OBSERVABILITY_CONFIGURATION =
		"apprunner:CreateObservabilityConfiguration";
	/** [Write] apprunner:CreateService */
	static readonly CREATE_SERVICE = "apprunner:CreateService";
	/** [Write] apprunner:CreateVpcConnector */
	static readonly CREATE_VPC_CONNECTOR = "apprunner:CreateVpcConnector";
	/** [Write] apprunner:CreateVpcIngressConnection */
	static readonly CREATE_VPC_INGRESS_CONNECTION =
		"apprunner:CreateVpcIngressConnection";
	/** [Write] apprunner:DeleteAutoScalingConfiguration */
	static readonly DELETE_AUTO_SCALING_CONFIGURATION =
		"apprunner:DeleteAutoScalingConfiguration";
	/** [Write] apprunner:DeleteConnection */
	static readonly DELETE_CONNECTION = "apprunner:DeleteConnection";
	/** [Write] apprunner:DeleteObservabilityConfiguration */
	static readonly DELETE_OBSERVABILITY_CONFIGURATION =
		"apprunner:DeleteObservabilityConfiguration";
	/** [Write] apprunner:DeleteService */
	static readonly DELETE_SERVICE = "apprunner:DeleteService";
	/** [Write] apprunner:DeleteVpcConnector */
	static readonly DELETE_VPC_CONNECTOR = "apprunner:DeleteVpcConnector";
	/** [Write] apprunner:DeleteVpcIngressConnection */
	static readonly DELETE_VPC_INGRESS_CONNECTION =
		"apprunner:DeleteVpcIngressConnection";
	/** [Read] apprunner:DescribeAutoScalingConfiguration */
	static readonly DESCRIBE_AUTO_SCALING_CONFIGURATION =
		"apprunner:DescribeAutoScalingConfiguration";
	/** [Read] apprunner:DescribeCustomDomains */
	static readonly DESCRIBE_CUSTOM_DOMAINS = "apprunner:DescribeCustomDomains";
	/** [Read] apprunner:DescribeObservabilityConfiguration */
	static readonly DESCRIBE_OBSERVABILITY_CONFIGURATION =
		"apprunner:DescribeObservabilityConfiguration";
	/** [Read] apprunner:DescribeOperation */
	static readonly DESCRIBE_OPERATION = "apprunner:DescribeOperation";
	/** [Read] apprunner:DescribeService */
	static readonly DESCRIBE_SERVICE = "apprunner:DescribeService";
	/** [Read] apprunner:DescribeVpcConnector */
	static readonly DESCRIBE_VPC_CONNECTOR = "apprunner:DescribeVpcConnector";
	/** [Read] apprunner:DescribeVpcIngressConnection */
	static readonly DESCRIBE_VPC_INGRESS_CONNECTION =
		"apprunner:DescribeVpcIngressConnection";
	/** [Read] apprunner:DescribeWebAclForService */
	static readonly DESCRIBE_WEB_ACL_FOR_SERVICE =
		"apprunner:DescribeWebAclForService";
	/** [Write] apprunner:DisassociateCustomDomain */
	static readonly DISASSOCIATE_CUSTOM_DOMAIN =
		"apprunner:DisassociateCustomDomain";
	/** [Write] apprunner:DisassociateWebAcl */
	static readonly DISASSOCIATE_WEB_ACL = "apprunner:DisassociateWebAcl";
	/** [List] apprunner:ListAssociatedServicesForWebAcl */
	static readonly LIST_ASSOCIATED_SERVICES_FOR_WEB_ACL =
		"apprunner:ListAssociatedServicesForWebAcl";
	/** [List] apprunner:ListAutoScalingConfigurations */
	static readonly LIST_AUTO_SCALING_CONFIGURATIONS =
		"apprunner:ListAutoScalingConfigurations";
	/** [List] apprunner:ListConnections */
	static readonly LIST_CONNECTIONS = "apprunner:ListConnections";
	/** [List] apprunner:ListObservabilityConfigurations */
	static readonly LIST_OBSERVABILITY_CONFIGURATIONS =
		"apprunner:ListObservabilityConfigurations";
	/** [List] apprunner:ListOperations */
	static readonly LIST_OPERATIONS = "apprunner:ListOperations";
	/** [List] apprunner:ListServices */
	static readonly LIST_SERVICES = "apprunner:ListServices";
	/** [List] apprunner:ListServicesForAutoScalingConfiguration */
	static readonly LIST_SERVICES_FOR_AUTO_SCALING_CONFIGURATION =
		"apprunner:ListServicesForAutoScalingConfiguration";
	/** [Read] apprunner:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "apprunner:ListTagsForResource";
	/** [List] apprunner:ListVpcConnectors */
	static readonly LIST_VPC_CONNECTORS = "apprunner:ListVpcConnectors";
	/** [List] apprunner:ListVpcIngressConnections */
	static readonly LIST_VPC_INGRESS_CONNECTIONS =
		"apprunner:ListVpcIngressConnections";
	/** [Write] apprunner:PauseService */
	static readonly PAUSE_SERVICE = "apprunner:PauseService";
	/** [Write] apprunner:ResumeService */
	static readonly RESUME_SERVICE = "apprunner:ResumeService";
	/** [Write] apprunner:StartDeployment */
	static readonly START_DEPLOYMENT = "apprunner:StartDeployment";
	/** [Tagging] apprunner:TagResource */
	static readonly TAG_RESOURCE = "apprunner:TagResource";
	/** [Tagging] apprunner:UntagResource */
	static readonly UNTAG_RESOURCE = "apprunner:UntagResource";
	/** [Write] apprunner:UpdateDefaultAutoScalingConfiguration */
	static readonly UPDATE_DEFAULT_AUTO_SCALING_CONFIGURATION =
		"apprunner:UpdateDefaultAutoScalingConfiguration";
	/** [Write] apprunner:UpdateService */
	static readonly UPDATE_SERVICE = "apprunner:UpdateService";
	/** [Write] apprunner:UpdateVpcIngressConnection */
	static readonly UPDATE_VPC_INGRESS_CONNECTION =
		"apprunner:UpdateVpcIngressConnection";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApprunnerActions.DESCRIBE_AUTO_SCALING_CONFIGURATION,
		ApprunnerActions.DESCRIBE_CUSTOM_DOMAINS,
		ApprunnerActions.DESCRIBE_OBSERVABILITY_CONFIGURATION,
		ApprunnerActions.DESCRIBE_OPERATION,
		ApprunnerActions.DESCRIBE_SERVICE,
		ApprunnerActions.DESCRIBE_VPC_CONNECTOR,
		ApprunnerActions.DESCRIBE_VPC_INGRESS_CONNECTION,
		ApprunnerActions.DESCRIBE_WEB_ACL_FOR_SERVICE,
		ApprunnerActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApprunnerActions.ASSOCIATE_CUSTOM_DOMAIN,
		ApprunnerActions.ASSOCIATE_WEB_ACL,
		ApprunnerActions.CREATE_AUTO_SCALING_CONFIGURATION,
		ApprunnerActions.CREATE_CONNECTION,
		ApprunnerActions.CREATE_OBSERVABILITY_CONFIGURATION,
		ApprunnerActions.CREATE_SERVICE,
		ApprunnerActions.CREATE_VPC_CONNECTOR,
		ApprunnerActions.CREATE_VPC_INGRESS_CONNECTION,
		ApprunnerActions.DELETE_AUTO_SCALING_CONFIGURATION,
		ApprunnerActions.DELETE_CONNECTION,
		ApprunnerActions.DELETE_OBSERVABILITY_CONFIGURATION,
		ApprunnerActions.DELETE_SERVICE,
		ApprunnerActions.DELETE_VPC_CONNECTOR,
		ApprunnerActions.DELETE_VPC_INGRESS_CONNECTION,
		ApprunnerActions.DISASSOCIATE_CUSTOM_DOMAIN,
		ApprunnerActions.DISASSOCIATE_WEB_ACL,
		ApprunnerActions.PAUSE_SERVICE,
		ApprunnerActions.RESUME_SERVICE,
		ApprunnerActions.START_DEPLOYMENT,
		ApprunnerActions.UPDATE_DEFAULT_AUTO_SCALING_CONFIGURATION,
		ApprunnerActions.UPDATE_SERVICE,
		ApprunnerActions.UPDATE_VPC_INGRESS_CONNECTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ApprunnerActions.LIST_ASSOCIATED_SERVICES_FOR_WEB_ACL,
		ApprunnerActions.LIST_AUTO_SCALING_CONFIGURATIONS,
		ApprunnerActions.LIST_CONNECTIONS,
		ApprunnerActions.LIST_OBSERVABILITY_CONFIGURATIONS,
		ApprunnerActions.LIST_OPERATIONS,
		ApprunnerActions.LIST_SERVICES,
		ApprunnerActions.LIST_SERVICES_FOR_AUTO_SCALING_CONFIGURATION,
		ApprunnerActions.LIST_VPC_CONNECTORS,
		ApprunnerActions.LIST_VPC_INGRESS_CONNECTIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ApprunnerActions.TAG_RESOURCE,
		ApprunnerActions.UNTAG_RESOURCE,
	];
}

const AutoscalingconfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):autoscalingconfiguration/(?<autoscalingConfigurationName>[^:/?]+)/(?<autoscalingConfigurationVersion>[^:/?]+)/(?<autoscalingConfigurationId>[^:/?]+)$",
);
const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):connection/(?<connectionName>[^:/?]+)/(?<connectionId>[^:/?]+)$",
);
const ObservabilityconfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):observabilityconfiguration/(?<observabilityConfigurationName>[^:/?]+)/(?<observabilityConfigurationVersion>[^:/?]+)/(?<observabilityConfigurationId>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceName>[^:/?]+)/(?<serviceId>[^:/?]+)$",
);
const VpcconnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):vpcconnector/(?<vpcConnectorName>[^:/?]+)/(?<vpcConnectorVersion>[^:/?]+)/(?<vpcConnectorId>[^:/?]+)$",
);
const VpcingressconnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):vpcingressconnection/(?<vpcIngressConnectionName>[^:/?]+)/(?<vpcIngressConnectionId>[^:/?]+)$",
);
const WebaclArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)/webacl/(?<name>[^:/?]+)/(?<id>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for apprunner resources.
 */
export class ApprunnerResources {
	/**
	 * Builds an ARN for the autoscalingconfiguration resource.
	 */
	static autoscalingconfiguration(props: {
		/** The AutoscalingConfigurationName component of the ARN. */
		readonly autoscalingConfigurationName: string;
		/** The AutoscalingConfigurationVersion component of the ARN. */
		readonly autoscalingConfigurationVersion: string;
		/** The AutoscalingConfigurationId component of the ARN. */
		readonly autoscalingConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apprunner:${props.region ?? "*"}:${props.account ?? "*"}:autoscalingconfiguration/${props.autoscalingConfigurationName}/${props.autoscalingConfigurationVersion}/${props.autoscalingConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the autoscalingconfiguration resource.
	 */
	static isValidAutoscalingconfigurationArn(arn: string): boolean {
		return AutoscalingconfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a autoscalingconfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAutoscalingconfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		autoscalingConfigurationName: string;
		autoscalingConfigurationVersion: string;
		autoscalingConfigurationId: string;
	} {
		const match = AutoscalingconfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid autoscalingconfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			autoscalingConfigurationName: match.groups!.autoscalingConfigurationName,
			autoscalingConfigurationVersion:
				match.groups!.autoscalingConfigurationVersion,
			autoscalingConfigurationId: match.groups!.autoscalingConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the connection resource.
	 */
	static connection(props: {
		/** The ConnectionName component of the ARN. */
		readonly connectionName: string;
		/** The ConnectionId component of the ARN. */
		readonly connectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apprunner:${props.region ?? "*"}:${props.account ?? "*"}:connection/${props.connectionName}/${props.connectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectionName: string;
		connectionId: string;
	} {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectionName: match.groups!.connectionName,
			connectionId: match.groups!.connectionId,
		};
	}

	/**
	 * Builds an ARN for the observabilityconfiguration resource.
	 */
	static observabilityconfiguration(props: {
		/** The ObservabilityConfigurationName component of the ARN. */
		readonly observabilityConfigurationName: string;
		/** The ObservabilityConfigurationVersion component of the ARN. */
		readonly observabilityConfigurationVersion: string;
		/** The ObservabilityConfigurationId component of the ARN. */
		readonly observabilityConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apprunner:${props.region ?? "*"}:${props.account ?? "*"}:observabilityconfiguration/${props.observabilityConfigurationName}/${props.observabilityConfigurationVersion}/${props.observabilityConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the observabilityconfiguration resource.
	 */
	static isValidObservabilityconfigurationArn(arn: string): boolean {
		return ObservabilityconfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a observabilityconfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseObservabilityconfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		observabilityConfigurationName: string;
		observabilityConfigurationVersion: string;
		observabilityConfigurationId: string;
	} {
		const match = ObservabilityconfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid observabilityconfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			observabilityConfigurationName:
				match.groups!.observabilityConfigurationName,
			observabilityConfigurationVersion:
				match.groups!.observabilityConfigurationVersion,
			observabilityConfigurationId: match.groups!.observabilityConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: {
		/** The ServiceName component of the ARN. */
		readonly serviceName: string;
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apprunner:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceName}/${props.serviceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the service resource.
	 */
	static isValidServiceArn(arn: string): boolean {
		return ServiceArnRegex.test(arn);
	}

	/**
	 * Parses a service ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serviceName: string;
		serviceId: string;
	} {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceName: match.groups!.serviceName,
			serviceId: match.groups!.serviceId,
		};
	}

	/**
	 * Builds an ARN for the vpcconnector resource.
	 */
	static vpcconnector(props: {
		/** The VpcConnectorName component of the ARN. */
		readonly vpcConnectorName: string;
		/** The VpcConnectorVersion component of the ARN. */
		readonly vpcConnectorVersion: string;
		/** The VpcConnectorId component of the ARN. */
		readonly vpcConnectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apprunner:${props.region ?? "*"}:${props.account ?? "*"}:vpcconnector/${props.vpcConnectorName}/${props.vpcConnectorVersion}/${props.vpcConnectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpcconnector resource.
	 */
	static isValidVpcconnectorArn(arn: string): boolean {
		return VpcconnectorArnRegex.test(arn);
	}

	/**
	 * Parses a vpcconnector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVpcconnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vpcConnectorName: string;
		vpcConnectorVersion: string;
		vpcConnectorId: string;
	} {
		const match = VpcconnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpcconnector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vpcConnectorName: match.groups!.vpcConnectorName,
			vpcConnectorVersion: match.groups!.vpcConnectorVersion,
			vpcConnectorId: match.groups!.vpcConnectorId,
		};
	}

	/**
	 * Builds an ARN for the vpcingressconnection resource.
	 */
	static vpcingressconnection(props: {
		/** The VpcIngressConnectionName component of the ARN. */
		readonly vpcIngressConnectionName: string;
		/** The VpcIngressConnectionId component of the ARN. */
		readonly vpcIngressConnectionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apprunner:${props.region ?? "*"}:${props.account ?? "*"}:vpcingressconnection/${props.vpcIngressConnectionName}/${props.vpcIngressConnectionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vpcingressconnection resource.
	 */
	static isValidVpcingressconnectionArn(arn: string): boolean {
		return VpcingressconnectionArnRegex.test(arn);
	}

	/**
	 * Parses a vpcingressconnection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVpcingressconnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vpcIngressConnectionName: string;
		vpcIngressConnectionId: string;
	} {
		const match = VpcingressconnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vpcingressconnection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vpcIngressConnectionName: match.groups!.vpcIngressConnectionName,
			vpcIngressConnectionId: match.groups!.vpcIngressConnectionId,
		};
	}

	/**
	 * Builds an ARN for the webacl resource.
	 */
	static webacl(props: {
		/** The Scope component of the ARN. */
		readonly scope: string;
		/** The Name component of the ARN. */
		readonly name: string;
		/** The Id component of the ARN. */
		readonly id: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:wafv2:${props.region ?? "*"}:${props.account ?? "*"}:${props.scope}/webacl/${props.name}/${props.id}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the webacl resource.
	 */
	static isValidWebaclArn(arn: string): boolean {
		return WebaclArnRegex.test(arn);
	}

	/**
	 * Parses a webacl ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebaclArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		scope: string;
		name: string;
		id: string;
	} {
		const match = WebaclArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webacl ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			scope: match.groups!.scope,
			name: match.groups!.name,
			id: match.groups!.id,
		};
	}
}

/**
 * API operation to required IAM actions mapping for apprunner.
 */
export class ApprunnerOperations {
	/** IAM actions required for the AssociateCustomDomain API call. */
	static readonly ASSOCIATE_CUSTOM_DOMAIN: string[] = [
		"apprunner:AssociateCustomDomain",
	];
	/** IAM actions required for the CreateAutoScalingConfiguration API call. */
	static readonly CREATE_AUTO_SCALING_CONFIGURATION: string[] = [
		"apprunner:CreateAutoScalingConfiguration",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CREATE_CONNECTION: string[] = [
		"apprunner:CreateConnection",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateObservabilityConfiguration API call. */
	static readonly CREATE_OBSERVABILITY_CONFIGURATION: string[] = [
		"apprunner:CreateObservabilityConfiguration",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CREATE_SERVICE: string[] = [
		"apprunner:CreateService",
		"iam:PassRole",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateVpcConnector API call. */
	static readonly CREATE_VPC_CONNECTOR: string[] = [
		"apprunner:CreateVpcConnector",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateVpcIngressConnection API call. */
	static readonly CREATE_VPC_INGRESS_CONNECTION: string[] = [
		"apprunner:CreateVpcIngressConnection",
		"apprunner:TagResource",
	];
	/** IAM actions required for the DeleteAutoScalingConfiguration API call. */
	static readonly DELETE_AUTO_SCALING_CONFIGURATION: string[] = [
		"apprunner:DeleteAutoScalingConfiguration",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DELETE_CONNECTION: string[] = ["apprunner:DeleteConnection"];
	/** IAM actions required for the DeleteObservabilityConfiguration API call. */
	static readonly DELETE_OBSERVABILITY_CONFIGURATION: string[] = [
		"apprunner:DeleteObservabilityConfiguration",
	];
	/** IAM actions required for the DeleteService API call. */
	static readonly DELETE_SERVICE: string[] = [
		"apprunner:DeleteService",
		"apprunner:DisassociateCustomDomain",
	];
	/** IAM actions required for the DeleteVpcConnector API call. */
	static readonly DELETE_VPC_CONNECTOR: string[] = [
		"apprunner:DeleteVpcConnector",
	];
	/** IAM actions required for the DeleteVpcIngressConnection API call. */
	static readonly DELETE_VPC_INGRESS_CONNECTION: string[] = [
		"apprunner:DeleteVpcIngressConnection",
	];
	/** IAM actions required for the DescribeAutoScalingConfiguration API call. */
	static readonly DESCRIBE_AUTO_SCALING_CONFIGURATION: string[] = [
		"apprunner:DescribeAutoScalingConfiguration",
	];
	/** IAM actions required for the DescribeCustomDomains API call. */
	static readonly DESCRIBE_CUSTOM_DOMAINS: string[] = [
		"apprunner:DescribeCustomDomains",
	];
	/** IAM actions required for the DescribeObservabilityConfiguration API call. */
	static readonly DESCRIBE_OBSERVABILITY_CONFIGURATION: string[] = [
		"apprunner:DescribeObservabilityConfiguration",
	];
	/** IAM actions required for the DescribeService API call. */
	static readonly DESCRIBE_SERVICE: string[] = ["apprunner:DescribeService"];
	/** IAM actions required for the DescribeVpcConnector API call. */
	static readonly DESCRIBE_VPC_CONNECTOR: string[] = [
		"apprunner:DescribeVpcConnector",
	];
	/** IAM actions required for the DescribeVpcIngressConnection API call. */
	static readonly DESCRIBE_VPC_INGRESS_CONNECTION: string[] = [
		"apprunner:DescribeVpcIngressConnection",
	];
	/** IAM actions required for the DisassociateCustomDomain API call. */
	static readonly DISASSOCIATE_CUSTOM_DOMAIN: string[] = [
		"apprunner:DisassociateCustomDomain",
	];
	/** IAM actions required for the ListAutoScalingConfigurations API call. */
	static readonly LIST_AUTO_SCALING_CONFIGURATIONS: string[] = [
		"apprunner:ListAutoScalingConfigurations",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly LIST_CONNECTIONS: string[] = ["apprunner:ListConnections"];
	/** IAM actions required for the ListObservabilityConfigurations API call. */
	static readonly LIST_OBSERVABILITY_CONFIGURATIONS: string[] = [
		"apprunner:ListObservabilityConfigurations",
	];
	/** IAM actions required for the ListOperations API call. */
	static readonly LIST_OPERATIONS: string[] = ["apprunner:ListOperations"];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["apprunner:ListServices"];
	/** IAM actions required for the ListServicesForAutoScalingConfiguration API call. */
	static readonly LIST_SERVICES_FOR_AUTO_SCALING_CONFIGURATION: string[] = [
		"apprunner:ListServicesForAutoScalingConfiguration",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"apprunner:ListTagsForResource",
	];
	/** IAM actions required for the ListVpcConnectors API call. */
	static readonly LIST_VPC_CONNECTORS: string[] = [
		"apprunner:ListVpcConnectors",
	];
	/** IAM actions required for the ListVpcIngressConnections API call. */
	static readonly LIST_VPC_INGRESS_CONNECTIONS: string[] = [
		"apprunner:ListVpcIngressConnections",
	];
	/** IAM actions required for the PauseService API call. */
	static readonly PAUSE_SERVICE: string[] = ["apprunner:PauseService"];
	/** IAM actions required for the ResumeService API call. */
	static readonly RESUME_SERVICE: string[] = ["apprunner:ResumeService"];
	/** IAM actions required for the StartDeployment API call. */
	static readonly START_DEPLOYMENT: string[] = ["apprunner:StartDeployment"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["apprunner:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["apprunner:UntagResource"];
	/** IAM actions required for the UpdateDefaultAutoScalingConfiguration API call. */
	static readonly UPDATE_DEFAULT_AUTO_SCALING_CONFIGURATION: string[] = [
		"apprunner:UpdateDefaultAutoScalingConfiguration",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UPDATE_SERVICE: string[] = [
		"iam:PassRole",
		"apprunner:UpdateService",
	];
	/** IAM actions required for the UpdateVpcIngressConnection API call. */
	static readonly UPDATE_VPC_INGRESS_CONNECTION: string[] = [
		"apprunner:UpdateVpcIngressConnection",
	];
}

/**
 * Condition key constants and builders for apprunner.
 */
export class ApprunnerConditions {
	/** Condition keys applicable to the CreateAutoScalingConfiguration action. */
	static readonly CREATE_AUTO_SCALING_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CREATE_CONNECTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateObservabilityConfiguration action. */
	static readonly CREATE_OBSERVABILITY_CONFIGURATION_CONDITION_KEYS: string[] =
		["aws:RequestTag/${TagKey}", "aws:TagKeys"];
	/** Condition keys applicable to the CreateService action. */
	static readonly CREATE_SERVICE_CONDITION_KEYS: string[] = [
		"apprunner:AutoScalingConfigurationArn",
		"apprunner:ConnectionArn",
		"apprunner:ObservabilityConfigurationArn",
		"apprunner:VpcConnectorArn",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVpcConnector action. */
	static readonly CREATE_VPC_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVpcIngressConnection action. */
	static readonly CREATE_VPC_INGRESS_CONNECTION_CONDITION_KEYS: string[] = [
		"apprunner:ServiceArn",
		"apprunner:VpcEndpointId",
		"apprunner:VpcId",
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
	/** Condition keys applicable to the UpdateService action. */
	static readonly UPDATE_SERVICE_CONDITION_KEYS: string[] = [
		"apprunner:AutoScalingConfigurationArn",
		"apprunner:ConnectionArn",
		"apprunner:ObservabilityConfigurationArn",
		"apprunner:VpcConnectorArn",
	];
	/** Condition keys applicable to the UpdateVpcIngressConnection action. */
	static readonly UPDATE_VPC_INGRESS_CONNECTION_CONDITION_KEYS: string[] = [
		"apprunner:VpcEndpointId",
		"apprunner:VpcId",
	];

	/** Condition key: apprunner:AutoScalingConfigurationArn (ARN) */
	static readonly AUTO_SCALING_CONFIGURATION_ARN =
		"apprunner:AutoScalingConfigurationArn";
	/** Condition key: apprunner:ConnectionArn (ARN) */
	static readonly CONNECTION_ARN = "apprunner:ConnectionArn";
	/** Condition key: apprunner:ObservabilityConfigurationArn (ARN) */
	static readonly OBSERVABILITY_CONFIGURATION_ARN =
		"apprunner:ObservabilityConfigurationArn";
	/** Condition key: apprunner:ServiceArn (ARN) */
	static readonly SERVICE_ARN = "apprunner:ServiceArn";
	/** Condition key: apprunner:VpcConnectorArn (ARN) */
	static readonly VPC_CONNECTOR_ARN = "apprunner:VpcConnectorArn";
	/** Condition key: apprunner:VpcEndpointId (String) */
	static readonly VPC_ENDPOINT_ID = "apprunner:VpcEndpointId";
	/** Condition key: apprunner:VpcId (String) */
	static readonly VPC_ID = "apprunner:VpcId";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

	/**
	 * Generates a condition block for `apprunner:AutoScalingConfigurationArn`.
	 */
	static autoScalingConfigurationARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "apprunner:AutoScalingConfigurationArn": value } };
	}

	/**
	 * Generates a condition block for `apprunner:ConnectionArn`.
	 */
	static connectionARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "apprunner:ConnectionArn": value } };
	}

	/**
	 * Generates a condition block for `apprunner:ObservabilityConfigurationArn`.
	 */
	static observabilityConfigurationARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "apprunner:ObservabilityConfigurationArn": value } };
	}

	/**
	 * Generates a condition block for `apprunner:ServiceArn`.
	 */
	static serviceARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "apprunner:ServiceArn": value } };
	}

	/**
	 * Generates a condition block for `apprunner:VpcConnectorArn`.
	 */
	static vpcConnectorARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "apprunner:VpcConnectorArn": value } };
	}

	/**
	 * Generates a condition block for `apprunner:VpcEndpointId`.
	 */
	static vpcEndpointId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "apprunner:VpcEndpointId": value } };
	}

	/**
	 * Generates a condition block for `apprunner:VpcId`.
	 */
	static vpcId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "apprunner:VpcId": value } };
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
