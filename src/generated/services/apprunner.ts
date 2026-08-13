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
	static readonly AssociateCustomDomain = "apprunner:AssociateCustomDomain";
	/** [Write] apprunner:AssociateWebAcl */
	static readonly AssociateWebAcl = "apprunner:AssociateWebAcl";
	/** [Write] apprunner:CreateAutoScalingConfiguration */
	static readonly CreateAutoScalingConfiguration =
		"apprunner:CreateAutoScalingConfiguration";
	/** [Write] apprunner:CreateConnection */
	static readonly CreateConnection = "apprunner:CreateConnection";
	/** [Write] apprunner:CreateObservabilityConfiguration */
	static readonly CreateObservabilityConfiguration =
		"apprunner:CreateObservabilityConfiguration";
	/** [Write] apprunner:CreateService */
	static readonly CreateService = "apprunner:CreateService";
	/** [Write] apprunner:CreateVpcConnector */
	static readonly CreateVpcConnector = "apprunner:CreateVpcConnector";
	/** [Write] apprunner:CreateVpcIngressConnection */
	static readonly CreateVpcIngressConnection =
		"apprunner:CreateVpcIngressConnection";
	/** [Write] apprunner:DeleteAutoScalingConfiguration */
	static readonly DeleteAutoScalingConfiguration =
		"apprunner:DeleteAutoScalingConfiguration";
	/** [Write] apprunner:DeleteConnection */
	static readonly DeleteConnection = "apprunner:DeleteConnection";
	/** [Write] apprunner:DeleteObservabilityConfiguration */
	static readonly DeleteObservabilityConfiguration =
		"apprunner:DeleteObservabilityConfiguration";
	/** [Write] apprunner:DeleteService */
	static readonly DeleteService = "apprunner:DeleteService";
	/** [Write] apprunner:DeleteVpcConnector */
	static readonly DeleteVpcConnector = "apprunner:DeleteVpcConnector";
	/** [Write] apprunner:DeleteVpcIngressConnection */
	static readonly DeleteVpcIngressConnection =
		"apprunner:DeleteVpcIngressConnection";
	/** [Read] apprunner:DescribeAutoScalingConfiguration */
	static readonly DescribeAutoScalingConfiguration =
		"apprunner:DescribeAutoScalingConfiguration";
	/** [Read] apprunner:DescribeCustomDomains */
	static readonly DescribeCustomDomains = "apprunner:DescribeCustomDomains";
	/** [Read] apprunner:DescribeObservabilityConfiguration */
	static readonly DescribeObservabilityConfiguration =
		"apprunner:DescribeObservabilityConfiguration";
	/** [Read] apprunner:DescribeOperation */
	static readonly DescribeOperation = "apprunner:DescribeOperation";
	/** [Read] apprunner:DescribeService */
	static readonly DescribeService = "apprunner:DescribeService";
	/** [Read] apprunner:DescribeVpcConnector */
	static readonly DescribeVpcConnector = "apprunner:DescribeVpcConnector";
	/** [Read] apprunner:DescribeVpcIngressConnection */
	static readonly DescribeVpcIngressConnection =
		"apprunner:DescribeVpcIngressConnection";
	/** [Read] apprunner:DescribeWebAclForService */
	static readonly DescribeWebAclForService =
		"apprunner:DescribeWebAclForService";
	/** [Write] apprunner:DisassociateCustomDomain */
	static readonly DisassociateCustomDomain =
		"apprunner:DisassociateCustomDomain";
	/** [Write] apprunner:DisassociateWebAcl */
	static readonly DisassociateWebAcl = "apprunner:DisassociateWebAcl";
	/** [List] apprunner:ListAssociatedServicesForWebAcl */
	static readonly ListAssociatedServicesForWebAcl =
		"apprunner:ListAssociatedServicesForWebAcl";
	/** [List] apprunner:ListAutoScalingConfigurations */
	static readonly ListAutoScalingConfigurations =
		"apprunner:ListAutoScalingConfigurations";
	/** [List] apprunner:ListConnections */
	static readonly ListConnections = "apprunner:ListConnections";
	/** [List] apprunner:ListObservabilityConfigurations */
	static readonly ListObservabilityConfigurations =
		"apprunner:ListObservabilityConfigurations";
	/** [List] apprunner:ListOperations */
	static readonly ListOperations = "apprunner:ListOperations";
	/** [List] apprunner:ListServices */
	static readonly ListServices = "apprunner:ListServices";
	/** [List] apprunner:ListServicesForAutoScalingConfiguration */
	static readonly ListServicesForAutoScalingConfiguration =
		"apprunner:ListServicesForAutoScalingConfiguration";
	/** [Read] apprunner:ListTagsForResource */
	static readonly ListTagsForResource = "apprunner:ListTagsForResource";
	/** [List] apprunner:ListVpcConnectors */
	static readonly ListVpcConnectors = "apprunner:ListVpcConnectors";
	/** [List] apprunner:ListVpcIngressConnections */
	static readonly ListVpcIngressConnections =
		"apprunner:ListVpcIngressConnections";
	/** [Write] apprunner:PauseService */
	static readonly PauseService = "apprunner:PauseService";
	/** [Write] apprunner:ResumeService */
	static readonly ResumeService = "apprunner:ResumeService";
	/** [Write] apprunner:StartDeployment */
	static readonly StartDeployment = "apprunner:StartDeployment";
	/** [Tagging] apprunner:TagResource */
	static readonly TagResource = "apprunner:TagResource";
	/** [Tagging] apprunner:UntagResource */
	static readonly UntagResource = "apprunner:UntagResource";
	/** [Write] apprunner:UpdateDefaultAutoScalingConfiguration */
	static readonly UpdateDefaultAutoScalingConfiguration =
		"apprunner:UpdateDefaultAutoScalingConfiguration";
	/** [Write] apprunner:UpdateService */
	static readonly UpdateService = "apprunner:UpdateService";
	/** [Write] apprunner:UpdateVpcIngressConnection */
	static readonly UpdateVpcIngressConnection =
		"apprunner:UpdateVpcIngressConnection";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApprunnerActions.DescribeAutoScalingConfiguration,
		ApprunnerActions.DescribeCustomDomains,
		ApprunnerActions.DescribeObservabilityConfiguration,
		ApprunnerActions.DescribeOperation,
		ApprunnerActions.DescribeService,
		ApprunnerActions.DescribeVpcConnector,
		ApprunnerActions.DescribeVpcIngressConnection,
		ApprunnerActions.DescribeWebAclForService,
		ApprunnerActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApprunnerActions.AssociateCustomDomain,
		ApprunnerActions.AssociateWebAcl,
		ApprunnerActions.CreateAutoScalingConfiguration,
		ApprunnerActions.CreateConnection,
		ApprunnerActions.CreateObservabilityConfiguration,
		ApprunnerActions.CreateService,
		ApprunnerActions.CreateVpcConnector,
		ApprunnerActions.CreateVpcIngressConnection,
		ApprunnerActions.DeleteAutoScalingConfiguration,
		ApprunnerActions.DeleteConnection,
		ApprunnerActions.DeleteObservabilityConfiguration,
		ApprunnerActions.DeleteService,
		ApprunnerActions.DeleteVpcConnector,
		ApprunnerActions.DeleteVpcIngressConnection,
		ApprunnerActions.DisassociateCustomDomain,
		ApprunnerActions.DisassociateWebAcl,
		ApprunnerActions.PauseService,
		ApprunnerActions.ResumeService,
		ApprunnerActions.StartDeployment,
		ApprunnerActions.UpdateDefaultAutoScalingConfiguration,
		ApprunnerActions.UpdateService,
		ApprunnerActions.UpdateVpcIngressConnection,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApprunnerActions.ListAssociatedServicesForWebAcl,
		ApprunnerActions.ListAutoScalingConfigurations,
		ApprunnerActions.ListConnections,
		ApprunnerActions.ListObservabilityConfigurations,
		ApprunnerActions.ListOperations,
		ApprunnerActions.ListServices,
		ApprunnerActions.ListServicesForAutoScalingConfiguration,
		ApprunnerActions.ListVpcConnectors,
		ApprunnerActions.ListVpcIngressConnections,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ApprunnerActions.TagResource,
		ApprunnerActions.UntagResource,
	];
}

/**
 * Properties for building a autoscalingconfiguration ARN.
 */
export interface ApprunnerAutoscalingconfigurationArnProps {
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
}

/**
 * Parsed components of a autoscalingconfiguration ARN.
 */
export interface ApprunnerAutoscalingconfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AutoscalingConfigurationName component. */
	readonly autoscalingConfigurationName: string;
	/** The AutoscalingConfigurationVersion component. */
	readonly autoscalingConfigurationVersion: string;
	/** The AutoscalingConfigurationId component. */
	readonly autoscalingConfigurationId: string;
}

/**
 * Properties for building a connection ARN.
 */
export interface ApprunnerConnectionArnProps {
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
}

/**
 * Parsed components of a connection ARN.
 */
export interface ApprunnerConnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectionName component. */
	readonly connectionName: string;
	/** The ConnectionId component. */
	readonly connectionId: string;
}

/**
 * Properties for building a observabilityconfiguration ARN.
 */
export interface ApprunnerObservabilityconfigurationArnProps {
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
}

/**
 * Parsed components of a observabilityconfiguration ARN.
 */
export interface ApprunnerObservabilityconfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ObservabilityConfigurationName component. */
	readonly observabilityConfigurationName: string;
	/** The ObservabilityConfigurationVersion component. */
	readonly observabilityConfigurationVersion: string;
	/** The ObservabilityConfigurationId component. */
	readonly observabilityConfigurationId: string;
}

/**
 * Properties for building a service ARN.
 */
export interface ApprunnerServiceArnProps {
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
}

/**
 * Parsed components of a service ARN.
 */
export interface ApprunnerServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceName component. */
	readonly serviceName: string;
	/** The ServiceId component. */
	readonly serviceId: string;
}

/**
 * Properties for building a vpcconnector ARN.
 */
export interface ApprunnerVpcconnectorArnProps {
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
}

/**
 * Parsed components of a vpcconnector ARN.
 */
export interface ApprunnerVpcconnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VpcConnectorName component. */
	readonly vpcConnectorName: string;
	/** The VpcConnectorVersion component. */
	readonly vpcConnectorVersion: string;
	/** The VpcConnectorId component. */
	readonly vpcConnectorId: string;
}

/**
 * Properties for building a vpcingressconnection ARN.
 */
export interface ApprunnerVpcingressconnectionArnProps {
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
}

/**
 * Parsed components of a vpcingressconnection ARN.
 */
export interface ApprunnerVpcingressconnectionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VpcIngressConnectionName component. */
	readonly vpcIngressConnectionName: string;
	/** The VpcIngressConnectionId component. */
	readonly vpcIngressConnectionId: string;
}

/**
 * Properties for building a webacl ARN.
 */
export interface ApprunnerWebaclArnProps {
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
}

/**
 * Parsed components of a webacl ARN.
 */
export interface ApprunnerWebaclArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Scope component. */
	readonly scope: string;
	/** The Name component. */
	readonly name: string;
	/** The Id component. */
	readonly id: string;
}

const AutoscalingconfigurationArnRegex =
	/^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):autoscalingconfiguration\/(?<autoscalingConfigurationName>[^:/?]+)\/(?<autoscalingConfigurationVersion>[^:/?]+)\/(?<autoscalingConfigurationId>[^:/?]+)$/;
const ConnectionArnRegex =
	/^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):connection\/(?<connectionName>[^:/?]+)\/(?<connectionId>[^:/?]+)$/;
const ObservabilityconfigurationArnRegex =
	/^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):observabilityconfiguration\/(?<observabilityConfigurationName>[^:/?]+)\/(?<observabilityConfigurationVersion>[^:/?]+)\/(?<observabilityConfigurationId>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceName>[^:/?]+)\/(?<serviceId>[^:/?]+)$/;
const VpcconnectorArnRegex =
	/^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):vpcconnector\/(?<vpcConnectorName>[^:/?]+)\/(?<vpcConnectorVersion>[^:/?]+)\/(?<vpcConnectorId>[^:/?]+)$/;
const VpcingressconnectionArnRegex =
	/^arn:(?<partition>[^:]+):apprunner:(?<region>[^:]*):(?<account>[^:]*):vpcingressconnection\/(?<vpcIngressConnectionName>[^:/?]+)\/(?<vpcIngressConnectionId>[^:/?]+)$/;
const WebaclArnRegex =
	/^arn:(?<partition>[^:]+):wafv2:(?<region>[^:]*):(?<account>[^:]*):(?<scope>[^:/?]+)\/webacl\/(?<name>[^:/?]+)\/(?<id>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for apprunner resources.
 */
export class ApprunnerResources {
	/**
	 * Builds an ARN for the autoscalingconfiguration resource.
	 */
	static autoscalingconfiguration(
		props: ApprunnerAutoscalingconfigurationArnProps,
	): string {
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
	static parseAutoscalingconfigurationArn(
		arn: string,
	): ApprunnerAutoscalingconfigurationArnComponents {
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
	static connection(props: ApprunnerConnectionArnProps): string {
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
	static parseConnectionArn(arn: string): ApprunnerConnectionArnComponents {
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
	static observabilityconfiguration(
		props: ApprunnerObservabilityconfigurationArnProps,
	): string {
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
	static parseObservabilityconfigurationArn(
		arn: string,
	): ApprunnerObservabilityconfigurationArnComponents {
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
	static service(props: ApprunnerServiceArnProps): string {
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
	static parseServiceArn(arn: string): ApprunnerServiceArnComponents {
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
	static vpcconnector(props: ApprunnerVpcconnectorArnProps): string {
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
	static parseVpcconnectorArn(arn: string): ApprunnerVpcconnectorArnComponents {
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
	static vpcingressconnection(
		props: ApprunnerVpcingressconnectionArnProps,
	): string {
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
	static parseVpcingressconnectionArn(
		arn: string,
	): ApprunnerVpcingressconnectionArnComponents {
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
	static webacl(props: ApprunnerWebaclArnProps): string {
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
	static parseWebaclArn(arn: string): ApprunnerWebaclArnComponents {
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
	static readonly AssociateCustomDomain: string[] = [
		"apprunner:AssociateCustomDomain",
	];
	/** IAM actions required for the CreateAutoScalingConfiguration API call. */
	static readonly CreateAutoScalingConfiguration: string[] = [
		"apprunner:CreateAutoScalingConfiguration",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateConnection API call. */
	static readonly CreateConnection: string[] = [
		"apprunner:CreateConnection",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateObservabilityConfiguration API call. */
	static readonly CreateObservabilityConfiguration: string[] = [
		"apprunner:CreateObservabilityConfiguration",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CreateService: string[] = [
		"apprunner:CreateService",
		"iam:PassRole",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateVpcConnector API call. */
	static readonly CreateVpcConnector: string[] = [
		"apprunner:CreateVpcConnector",
		"apprunner:TagResource",
	];
	/** IAM actions required for the CreateVpcIngressConnection API call. */
	static readonly CreateVpcIngressConnection: string[] = [
		"apprunner:CreateVpcIngressConnection",
		"apprunner:TagResource",
	];
	/** IAM actions required for the DeleteAutoScalingConfiguration API call. */
	static readonly DeleteAutoScalingConfiguration: string[] = [
		"apprunner:DeleteAutoScalingConfiguration",
	];
	/** IAM actions required for the DeleteConnection API call. */
	static readonly DeleteConnection: string[] = ["apprunner:DeleteConnection"];
	/** IAM actions required for the DeleteObservabilityConfiguration API call. */
	static readonly DeleteObservabilityConfiguration: string[] = [
		"apprunner:DeleteObservabilityConfiguration",
	];
	/** IAM actions required for the DeleteService API call. */
	static readonly DeleteService: string[] = [
		"apprunner:DeleteService",
		"apprunner:DisassociateCustomDomain",
	];
	/** IAM actions required for the DeleteVpcConnector API call. */
	static readonly DeleteVpcConnector: string[] = [
		"apprunner:DeleteVpcConnector",
	];
	/** IAM actions required for the DeleteVpcIngressConnection API call. */
	static readonly DeleteVpcIngressConnection: string[] = [
		"apprunner:DeleteVpcIngressConnection",
	];
	/** IAM actions required for the DescribeAutoScalingConfiguration API call. */
	static readonly DescribeAutoScalingConfiguration: string[] = [
		"apprunner:DescribeAutoScalingConfiguration",
	];
	/** IAM actions required for the DescribeCustomDomains API call. */
	static readonly DescribeCustomDomains: string[] = [
		"apprunner:DescribeCustomDomains",
	];
	/** IAM actions required for the DescribeObservabilityConfiguration API call. */
	static readonly DescribeObservabilityConfiguration: string[] = [
		"apprunner:DescribeObservabilityConfiguration",
	];
	/** IAM actions required for the DescribeService API call. */
	static readonly DescribeService: string[] = ["apprunner:DescribeService"];
	/** IAM actions required for the DescribeVpcConnector API call. */
	static readonly DescribeVpcConnector: string[] = [
		"apprunner:DescribeVpcConnector",
	];
	/** IAM actions required for the DescribeVpcIngressConnection API call. */
	static readonly DescribeVpcIngressConnection: string[] = [
		"apprunner:DescribeVpcIngressConnection",
	];
	/** IAM actions required for the DisassociateCustomDomain API call. */
	static readonly DisassociateCustomDomain: string[] = [
		"apprunner:DisassociateCustomDomain",
	];
	/** IAM actions required for the ListAutoScalingConfigurations API call. */
	static readonly ListAutoScalingConfigurations: string[] = [
		"apprunner:ListAutoScalingConfigurations",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly ListConnections: string[] = ["apprunner:ListConnections"];
	/** IAM actions required for the ListObservabilityConfigurations API call. */
	static readonly ListObservabilityConfigurations: string[] = [
		"apprunner:ListObservabilityConfigurations",
	];
	/** IAM actions required for the ListOperations API call. */
	static readonly ListOperations: string[] = ["apprunner:ListOperations"];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["apprunner:ListServices"];
	/** IAM actions required for the ListServicesForAutoScalingConfiguration API call. */
	static readonly ListServicesForAutoScalingConfiguration: string[] = [
		"apprunner:ListServicesForAutoScalingConfiguration",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"apprunner:ListTagsForResource",
	];
	/** IAM actions required for the ListVpcConnectors API call. */
	static readonly ListVpcConnectors: string[] = ["apprunner:ListVpcConnectors"];
	/** IAM actions required for the ListVpcIngressConnections API call. */
	static readonly ListVpcIngressConnections: string[] = [
		"apprunner:ListVpcIngressConnections",
	];
	/** IAM actions required for the PauseService API call. */
	static readonly PauseService: string[] = ["apprunner:PauseService"];
	/** IAM actions required for the ResumeService API call. */
	static readonly ResumeService: string[] = ["apprunner:ResumeService"];
	/** IAM actions required for the StartDeployment API call. */
	static readonly StartDeployment: string[] = ["apprunner:StartDeployment"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["apprunner:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["apprunner:UntagResource"];
	/** IAM actions required for the UpdateDefaultAutoScalingConfiguration API call. */
	static readonly UpdateDefaultAutoScalingConfiguration: string[] = [
		"apprunner:UpdateDefaultAutoScalingConfiguration",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UpdateService: string[] = [
		"iam:PassRole",
		"apprunner:UpdateService",
	];
	/** IAM actions required for the UpdateVpcIngressConnection API call. */
	static readonly UpdateVpcIngressConnection: string[] = [
		"apprunner:UpdateVpcIngressConnection",
	];
}

/**
 * Condition key constants and builders for apprunner.
 */
export class ApprunnerConditions {
	/** Condition keys applicable to the CreateAutoScalingConfiguration action. */
	static readonly CreateAutoScalingConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnection action. */
	static readonly CreateConnectionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateObservabilityConfiguration action. */
	static readonly CreateObservabilityConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CreateServiceConditionKeys: string[] = [
		"apprunner:AutoScalingConfigurationArn",
		"apprunner:ConnectionArn",
		"apprunner:ObservabilityConfigurationArn",
		"apprunner:VpcConnectorArn",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVpcConnector action. */
	static readonly CreateVpcConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVpcIngressConnection action. */
	static readonly CreateVpcIngressConnectionConditionKeys: string[] = [
		"apprunner:ServiceArn",
		"apprunner:VpcEndpointId",
		"apprunner:VpcId",
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
	/** Condition keys applicable to the UpdateService action. */
	static readonly UpdateServiceConditionKeys: string[] = [
		"apprunner:AutoScalingConfigurationArn",
		"apprunner:ConnectionArn",
		"apprunner:ObservabilityConfigurationArn",
		"apprunner:VpcConnectorArn",
	];
	/** Condition keys applicable to the UpdateVpcIngressConnection action. */
	static readonly UpdateVpcIngressConnectionConditionKeys: string[] = [
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
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
