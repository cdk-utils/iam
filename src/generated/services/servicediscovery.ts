// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/servicediscovery.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the servicediscovery service.
 */
export class ServiceDiscoveryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "servicediscovery";

	/** [Write] servicediscovery:CreateHttpNamespace */
	static readonly CreateHttpNamespace = "servicediscovery:CreateHttpNamespace";
	/** [Write] servicediscovery:CreatePrivateDnsNamespace */
	static readonly CreatePrivateDnsNamespace =
		"servicediscovery:CreatePrivateDnsNamespace";
	/** [Write] servicediscovery:CreatePublicDnsNamespace */
	static readonly CreatePublicDnsNamespace =
		"servicediscovery:CreatePublicDnsNamespace";
	/** [Write] servicediscovery:CreateService */
	static readonly CreateService = "servicediscovery:CreateService";
	/** [Write] servicediscovery:DeleteNamespace */
	static readonly DeleteNamespace = "servicediscovery:DeleteNamespace";
	/** [Write] servicediscovery:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"servicediscovery:DeleteResourcePolicy";
	/** [Write] servicediscovery:DeleteService */
	static readonly DeleteService = "servicediscovery:DeleteService";
	/** [Write] servicediscovery:DeleteServiceAttributes */
	static readonly DeleteServiceAttributes =
		"servicediscovery:DeleteServiceAttributes";
	/** [Write] servicediscovery:DeregisterInstance */
	static readonly DeregisterInstance = "servicediscovery:DeregisterInstance";
	/** [Read] servicediscovery:DiscoverInstances */
	static readonly DiscoverInstances = "servicediscovery:DiscoverInstances";
	/** [Read] servicediscovery:DiscoverInstancesRevision */
	static readonly DiscoverInstancesRevision =
		"servicediscovery:DiscoverInstancesRevision";
	/** [Read] servicediscovery:GetInstance */
	static readonly actionGetInstance = "servicediscovery:GetInstance";
	/** [Read] servicediscovery:GetInstancesHealthStatus */
	static readonly actionGetInstancesHealthStatus =
		"servicediscovery:GetInstancesHealthStatus";
	/** [Read] servicediscovery:GetNamespace */
	static readonly actionGetNamespace = "servicediscovery:GetNamespace";
	/** [Read] servicediscovery:GetOperation */
	static readonly actionGetOperation = "servicediscovery:GetOperation";
	/** [Read] servicediscovery:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"servicediscovery:GetResourcePolicy";
	/** [Read] servicediscovery:GetService */
	static readonly actionGetService = "servicediscovery:GetService";
	/** [Read] servicediscovery:GetServiceAttributes */
	static readonly actionGetServiceAttributes =
		"servicediscovery:GetServiceAttributes";
	/** [Read] servicediscovery:ListInstances */
	static readonly ListInstances = "servicediscovery:ListInstances";
	/** [Read] servicediscovery:ListNamespaces */
	static readonly ListNamespaces = "servicediscovery:ListNamespaces";
	/** [List] servicediscovery:ListOperations */
	static readonly ListOperations = "servicediscovery:ListOperations";
	/** [Read] servicediscovery:ListServices */
	static readonly ListServices = "servicediscovery:ListServices";
	/** [Read] servicediscovery:ListTagsForResource */
	static readonly ListTagsForResource = "servicediscovery:ListTagsForResource";
	/** [Write] servicediscovery:PutResourcePolicy */
	static readonly PutResourcePolicy = "servicediscovery:PutResourcePolicy";
	/** [Write] servicediscovery:RegisterInstance */
	static readonly RegisterInstance = "servicediscovery:RegisterInstance";
	/** [Tagging] servicediscovery:TagResource */
	static readonly TagResource = "servicediscovery:TagResource";
	/** [Tagging] servicediscovery:UntagResource */
	static readonly UntagResource = "servicediscovery:UntagResource";
	/** [Write] servicediscovery:UpdateHttpNamespace */
	static readonly UpdateHttpNamespace = "servicediscovery:UpdateHttpNamespace";
	/** [Write] servicediscovery:UpdateInstanceCustomHealthStatus */
	static readonly UpdateInstanceCustomHealthStatus =
		"servicediscovery:UpdateInstanceCustomHealthStatus";
	/** [Write] servicediscovery:UpdatePrivateDnsNamespace */
	static readonly UpdatePrivateDnsNamespace =
		"servicediscovery:UpdatePrivateDnsNamespace";
	/** [Write] servicediscovery:UpdatePublicDnsNamespace */
	static readonly UpdatePublicDnsNamespace =
		"servicediscovery:UpdatePublicDnsNamespace";
	/** [Write] servicediscovery:UpdateService */
	static readonly UpdateService = "servicediscovery:UpdateService";
	/** [Write] servicediscovery:UpdateServiceAttributes */
	static readonly UpdateServiceAttributes =
		"servicediscovery:UpdateServiceAttributes";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ServiceDiscoveryActions.DiscoverInstances,
		ServiceDiscoveryActions.DiscoverInstancesRevision,
		ServiceDiscoveryActions.actionGetInstance,
		ServiceDiscoveryActions.actionGetInstancesHealthStatus,
		ServiceDiscoveryActions.actionGetNamespace,
		ServiceDiscoveryActions.actionGetOperation,
		ServiceDiscoveryActions.actionGetResourcePolicy,
		ServiceDiscoveryActions.actionGetService,
		ServiceDiscoveryActions.actionGetServiceAttributes,
		ServiceDiscoveryActions.ListInstances,
		ServiceDiscoveryActions.ListNamespaces,
		ServiceDiscoveryActions.ListServices,
		ServiceDiscoveryActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ServiceDiscoveryActions.CreateHttpNamespace,
		ServiceDiscoveryActions.CreatePrivateDnsNamespace,
		ServiceDiscoveryActions.CreatePublicDnsNamespace,
		ServiceDiscoveryActions.CreateService,
		ServiceDiscoveryActions.DeleteNamespace,
		ServiceDiscoveryActions.DeleteResourcePolicy,
		ServiceDiscoveryActions.DeleteService,
		ServiceDiscoveryActions.DeleteServiceAttributes,
		ServiceDiscoveryActions.DeregisterInstance,
		ServiceDiscoveryActions.PutResourcePolicy,
		ServiceDiscoveryActions.RegisterInstance,
		ServiceDiscoveryActions.UpdateHttpNamespace,
		ServiceDiscoveryActions.UpdateInstanceCustomHealthStatus,
		ServiceDiscoveryActions.UpdatePrivateDnsNamespace,
		ServiceDiscoveryActions.UpdatePublicDnsNamespace,
		ServiceDiscoveryActions.UpdateService,
		ServiceDiscoveryActions.UpdateServiceAttributes,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ServiceDiscoveryActions.ListOperations,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ServiceDiscoveryActions.TagResource,
		ServiceDiscoveryActions.UntagResource,
	];
}

/**
 * Properties for building a namespace ARN.
 */
export interface ServiceDiscoveryNamespaceArnProps {
	/** The NamespaceId component of the ARN. */
	readonly namespaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a namespace ARN.
 */
export interface ServiceDiscoveryNamespaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NamespaceId component. */
	readonly namespaceId: string;
}

/**
 * Properties for building a service ARN.
 */
export interface ServiceDiscoveryServiceArnProps {
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
export interface ServiceDiscoveryServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServiceId component. */
	readonly serviceId: string;
}

const NamespaceArnRegex =
	/^arn:(?<partition>[^:]+):servicediscovery:(?<region>[^:]*):(?<account>[^:]*):namespace\/(?<namespaceId>[^:/?]+)$/;
const ServiceArnRegex =
	/^arn:(?<partition>[^:]+):servicediscovery:(?<region>[^:]*):(?<account>[^:]*):service\/(?<serviceId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for servicediscovery resources.
 */
export class ServiceDiscoveryResources {
	/**
	 * Builds an ARN for the namespace resource.
	 */
	static namespace(props: ServiceDiscoveryNamespaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:servicediscovery:${props.region ?? "*"}:${props.account ?? "*"}:namespace/${props.namespaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the namespace resource.
	 */
	static isValidNamespaceArn(arn: string): boolean {
		return NamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a namespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNamespaceArn(
		arn: string,
	): ServiceDiscoveryNamespaceArnComponents {
		const match = NamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid namespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			namespaceId: match.groups!.namespaceId,
		};
	}

	/**
	 * Builds an ARN for the service resource.
	 */
	static service(props: ServiceDiscoveryServiceArnProps): string {
		return `arn:${props.partition ?? "aws"}:servicediscovery:${props.region ?? "*"}:${props.account ?? "*"}:service/${props.serviceId}`;
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
	static parseServiceArn(arn: string): ServiceDiscoveryServiceArnComponents {
		const match = ServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid service ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serviceId: match.groups!.serviceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for servicediscovery.
 */
export class ServiceDiscoveryOperations {
	/** IAM actions required for the CreateHttpNamespace API call. */
	static readonly CreateHttpNamespace: string[] = [
		"servicediscovery:CreateHttpNamespace",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the CreatePrivateDnsNamespace API call. */
	static readonly CreatePrivateDnsNamespace: string[] = [
		"servicediscovery:CreatePrivateDnsNamespace",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the CreatePublicDnsNamespace API call. */
	static readonly CreatePublicDnsNamespace: string[] = [
		"servicediscovery:CreatePublicDnsNamespace",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CreateService: string[] = [
		"servicediscovery:CreateService",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the DeleteNamespace API call. */
	static readonly DeleteNamespace: string[] = [
		"servicediscovery:DeleteNamespace",
	];
	/** IAM actions required for the DeleteService API call. */
	static readonly DeleteService: string[] = ["servicediscovery:DeleteService"];
	/** IAM actions required for the DeleteServiceAttributes API call. */
	static readonly DeleteServiceAttributes: string[] = [
		"servicediscovery:DeleteServiceAttributes",
	];
	/** IAM actions required for the DeregisterInstance API call. */
	static readonly DeregisterInstance: string[] = [
		"servicediscovery:DeregisterInstance",
	];
	/** IAM actions required for the DiscoverInstances API call. */
	static readonly DiscoverInstances: string[] = [
		"servicediscovery:DiscoverInstances",
	];
	/** IAM actions required for the DiscoverInstancesRevision API call. */
	static readonly DiscoverInstancesRevision: string[] = [
		"servicediscovery:DiscoverInstancesRevision",
	];
	/** IAM actions required for the GetInstance API call. */
	static readonly opGetInstance: string[] = ["servicediscovery:GetInstance"];
	/** IAM actions required for the GetInstancesHealthStatus API call. */
	static readonly opGetInstancesHealthStatus: string[] = [
		"servicediscovery:GetInstancesHealthStatus",
	];
	/** IAM actions required for the GetNamespace API call. */
	static readonly opGetNamespace: string[] = ["servicediscovery:GetNamespace"];
	/** IAM actions required for the GetOperation API call. */
	static readonly opGetOperation: string[] = ["servicediscovery:GetOperation"];
	/** IAM actions required for the GetService API call. */
	static readonly opGetService: string[] = ["servicediscovery:GetService"];
	/** IAM actions required for the GetServiceAttributes API call. */
	static readonly opGetServiceAttributes: string[] = [
		"servicediscovery:GetServiceAttributes",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly ListInstances: string[] = ["servicediscovery:ListInstances"];
	/** IAM actions required for the ListNamespaces API call. */
	static readonly ListNamespaces: string[] = [
		"servicediscovery:ListNamespaces",
	];
	/** IAM actions required for the ListOperations API call. */
	static readonly ListOperations: string[] = [
		"servicediscovery:ListOperations",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly ListServices: string[] = ["servicediscovery:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"servicediscovery:ListTagsForResource",
	];
	/** IAM actions required for the RegisterInstance API call. */
	static readonly RegisterInstance: string[] = [
		"servicediscovery:RegisterInstance",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["servicediscovery:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["servicediscovery:UntagResource"];
	/** IAM actions required for the UpdateHttpNamespace API call. */
	static readonly UpdateHttpNamespace: string[] = [
		"servicediscovery:UpdateHttpNamespace",
	];
	/** IAM actions required for the UpdateInstanceCustomHealthStatus API call. */
	static readonly UpdateInstanceCustomHealthStatus: string[] = [
		"servicediscovery:UpdateInstanceCustomHealthStatus",
	];
	/** IAM actions required for the UpdatePrivateDnsNamespace API call. */
	static readonly UpdatePrivateDnsNamespace: string[] = [
		"servicediscovery:UpdatePrivateDnsNamespace",
	];
	/** IAM actions required for the UpdatePublicDnsNamespace API call. */
	static readonly UpdatePublicDnsNamespace: string[] = [
		"servicediscovery:UpdatePublicDnsNamespace",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UpdateService: string[] = ["servicediscovery:UpdateService"];
	/** IAM actions required for the UpdateServiceAttributes API call. */
	static readonly UpdateServiceAttributes: string[] = [
		"servicediscovery:UpdateServiceAttributes",
	];
}

/**
 * Condition key constants and builders for servicediscovery.
 */
export class ServiceDiscoveryConditions {
	/** Condition keys applicable to the CreateHttpNamespace action. */
	static readonly CreateHttpNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrivateDnsNamespace action. */
	static readonly CreatePrivateDnsNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePublicDnsNamespace action. */
	static readonly CreatePublicDnsNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CreateServiceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"servicediscovery:NamespaceArn",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DeleteServiceConditionKeys: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DeleteServiceAttributes action. */
	static readonly DeleteServiceAttributesConditionKeys: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DeregisterInstance action. */
	static readonly DeregisterInstanceConditionKeys: string[] = [
		"servicediscovery:ServiceArn",
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DiscoverInstances action. */
	static readonly DiscoverInstancesConditionKeys: string[] = [
		"servicediscovery:NamespaceName",
		"servicediscovery:ServiceName",
	];
	/** Condition keys applicable to the DiscoverInstancesRevision action. */
	static readonly DiscoverInstancesRevisionConditionKeys: string[] = [
		"servicediscovery:NamespaceName",
		"servicediscovery:ServiceName",
	];
	/** Condition keys applicable to the GetInstance action. */
	static readonly actionGetInstanceConditionKeys: string[] = [
		"servicediscovery:ServiceArn",
	];
	/** Condition keys applicable to the GetInstancesHealthStatus action. */
	static readonly actionGetInstancesHealthStatusConditionKeys: string[] = [
		"servicediscovery:ServiceArn",
	];
	/** Condition keys applicable to the ListInstances action. */
	static readonly ListInstancesConditionKeys: string[] = [
		"servicediscovery:ServiceArn",
	];
	/** Condition keys applicable to the RegisterInstance action. */
	static readonly RegisterInstanceConditionKeys: string[] = [
		"servicediscovery:ServiceArn",
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateInstanceCustomHealthStatus action. */
	static readonly UpdateInstanceCustomHealthStatusConditionKeys: string[] = [
		"servicediscovery:ServiceArn",
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UpdateServiceConditionKeys: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the UpdateServiceAttributes action. */
	static readonly UpdateServiceAttributesConditionKeys: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: servicediscovery:NamespaceArn (ARN) */
	static readonly NAMESPACE_ARN = "servicediscovery:NamespaceArn";
	/** Condition key: servicediscovery:NamespaceName (String) */
	static readonly NAMESPACE_NAME = "servicediscovery:NamespaceName";
	/** Condition key: servicediscovery:ServiceArn (ARN) */
	static readonly SERVICE_ARN = "servicediscovery:ServiceArn";
	/** Condition key: servicediscovery:ServiceCreatedByAccount (String) */
	static readonly SERVICE_CREATED_BY_ACCOUNT =
		"servicediscovery:ServiceCreatedByAccount";
	/** Condition key: servicediscovery:ServiceName (String) */
	static readonly SERVICE_NAME = "servicediscovery:ServiceName";

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
	 * Generates a condition block for `servicediscovery:NamespaceArn`.
	 */
	static namespaceARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "servicediscovery:NamespaceArn": value } };
	}

	/**
	 * Generates a condition block for `servicediscovery:NamespaceName`.
	 */
	static namespaceName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicediscovery:NamespaceName": value } };
	}

	/**
	 * Generates a condition block for `servicediscovery:ServiceArn`.
	 */
	static serviceARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "servicediscovery:ServiceArn": value } };
	}

	/**
	 * Generates a condition block for `servicediscovery:ServiceCreatedByAccount`.
	 */
	static serviceCreatedByAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "servicediscovery:ServiceCreatedByAccount": value },
		};
	}

	/**
	 * Generates a condition block for `servicediscovery:ServiceName`.
	 */
	static serviceName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "servicediscovery:ServiceName": value } };
	}
}
