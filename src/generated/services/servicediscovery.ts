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
	static readonly CREATE_HTTP_NAMESPACE =
		"servicediscovery:CreateHttpNamespace";
	/** [Write] servicediscovery:CreatePrivateDnsNamespace */
	static readonly CREATE_PRIVATE_DNS_NAMESPACE =
		"servicediscovery:CreatePrivateDnsNamespace";
	/** [Write] servicediscovery:CreatePublicDnsNamespace */
	static readonly CREATE_PUBLIC_DNS_NAMESPACE =
		"servicediscovery:CreatePublicDnsNamespace";
	/** [Write] servicediscovery:CreateService */
	static readonly CREATE_SERVICE = "servicediscovery:CreateService";
	/** [Write] servicediscovery:DeleteNamespace */
	static readonly DELETE_NAMESPACE = "servicediscovery:DeleteNamespace";
	/** [Write] servicediscovery:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY =
		"servicediscovery:DeleteResourcePolicy";
	/** [Write] servicediscovery:DeleteService */
	static readonly DELETE_SERVICE = "servicediscovery:DeleteService";
	/** [Write] servicediscovery:DeleteServiceAttributes */
	static readonly DELETE_SERVICE_ATTRIBUTES =
		"servicediscovery:DeleteServiceAttributes";
	/** [Write] servicediscovery:DeregisterInstance */
	static readonly DEREGISTER_INSTANCE = "servicediscovery:DeregisterInstance";
	/** [Read] servicediscovery:DiscoverInstances */
	static readonly DISCOVER_INSTANCES = "servicediscovery:DiscoverInstances";
	/** [Read] servicediscovery:DiscoverInstancesRevision */
	static readonly DISCOVER_INSTANCES_REVISION =
		"servicediscovery:DiscoverInstancesRevision";
	/** [Read] servicediscovery:GetInstance */
	static readonly GET_INSTANCE = "servicediscovery:GetInstance";
	/** [Read] servicediscovery:GetInstancesHealthStatus */
	static readonly GET_INSTANCES_HEALTH_STATUS =
		"servicediscovery:GetInstancesHealthStatus";
	/** [Read] servicediscovery:GetNamespace */
	static readonly GET_NAMESPACE = "servicediscovery:GetNamespace";
	/** [Read] servicediscovery:GetOperation */
	static readonly GET_OPERATION = "servicediscovery:GetOperation";
	/** [Read] servicediscovery:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "servicediscovery:GetResourcePolicy";
	/** [Read] servicediscovery:GetService */
	static readonly GET_SERVICE = "servicediscovery:GetService";
	/** [Read] servicediscovery:GetServiceAttributes */
	static readonly GET_SERVICE_ATTRIBUTES =
		"servicediscovery:GetServiceAttributes";
	/** [Read] servicediscovery:ListInstances */
	static readonly LIST_INSTANCES = "servicediscovery:ListInstances";
	/** [Read] servicediscovery:ListNamespaces */
	static readonly LIST_NAMESPACES = "servicediscovery:ListNamespaces";
	/** [List] servicediscovery:ListOperations */
	static readonly LIST_OPERATIONS = "servicediscovery:ListOperations";
	/** [Read] servicediscovery:ListServices */
	static readonly LIST_SERVICES = "servicediscovery:ListServices";
	/** [Read] servicediscovery:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"servicediscovery:ListTagsForResource";
	/** [Write] servicediscovery:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "servicediscovery:PutResourcePolicy";
	/** [Write] servicediscovery:RegisterInstance */
	static readonly REGISTER_INSTANCE = "servicediscovery:RegisterInstance";
	/** [Tagging] servicediscovery:TagResource */
	static readonly TAG_RESOURCE = "servicediscovery:TagResource";
	/** [Tagging] servicediscovery:UntagResource */
	static readonly UNTAG_RESOURCE = "servicediscovery:UntagResource";
	/** [Write] servicediscovery:UpdateHttpNamespace */
	static readonly UPDATE_HTTP_NAMESPACE =
		"servicediscovery:UpdateHttpNamespace";
	/** [Write] servicediscovery:UpdateInstanceCustomHealthStatus */
	static readonly UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS =
		"servicediscovery:UpdateInstanceCustomHealthStatus";
	/** [Write] servicediscovery:UpdatePrivateDnsNamespace */
	static readonly UPDATE_PRIVATE_DNS_NAMESPACE =
		"servicediscovery:UpdatePrivateDnsNamespace";
	/** [Write] servicediscovery:UpdatePublicDnsNamespace */
	static readonly UPDATE_PUBLIC_DNS_NAMESPACE =
		"servicediscovery:UpdatePublicDnsNamespace";
	/** [Write] servicediscovery:UpdateService */
	static readonly UPDATE_SERVICE = "servicediscovery:UpdateService";
	/** [Write] servicediscovery:UpdateServiceAttributes */
	static readonly UPDATE_SERVICE_ATTRIBUTES =
		"servicediscovery:UpdateServiceAttributes";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ServiceDiscoveryActions.DISCOVER_INSTANCES,
		ServiceDiscoveryActions.DISCOVER_INSTANCES_REVISION,
		ServiceDiscoveryActions.GET_INSTANCE,
		ServiceDiscoveryActions.GET_INSTANCES_HEALTH_STATUS,
		ServiceDiscoveryActions.GET_NAMESPACE,
		ServiceDiscoveryActions.GET_OPERATION,
		ServiceDiscoveryActions.GET_RESOURCE_POLICY,
		ServiceDiscoveryActions.GET_SERVICE,
		ServiceDiscoveryActions.GET_SERVICE_ATTRIBUTES,
		ServiceDiscoveryActions.LIST_INSTANCES,
		ServiceDiscoveryActions.LIST_NAMESPACES,
		ServiceDiscoveryActions.LIST_SERVICES,
		ServiceDiscoveryActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ServiceDiscoveryActions.CREATE_HTTP_NAMESPACE,
		ServiceDiscoveryActions.CREATE_PRIVATE_DNS_NAMESPACE,
		ServiceDiscoveryActions.CREATE_PUBLIC_DNS_NAMESPACE,
		ServiceDiscoveryActions.CREATE_SERVICE,
		ServiceDiscoveryActions.DELETE_NAMESPACE,
		ServiceDiscoveryActions.DELETE_RESOURCE_POLICY,
		ServiceDiscoveryActions.DELETE_SERVICE,
		ServiceDiscoveryActions.DELETE_SERVICE_ATTRIBUTES,
		ServiceDiscoveryActions.DEREGISTER_INSTANCE,
		ServiceDiscoveryActions.PUT_RESOURCE_POLICY,
		ServiceDiscoveryActions.REGISTER_INSTANCE,
		ServiceDiscoveryActions.UPDATE_HTTP_NAMESPACE,
		ServiceDiscoveryActions.UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS,
		ServiceDiscoveryActions.UPDATE_PRIVATE_DNS_NAMESPACE,
		ServiceDiscoveryActions.UPDATE_PUBLIC_DNS_NAMESPACE,
		ServiceDiscoveryActions.UPDATE_SERVICE,
		ServiceDiscoveryActions.UPDATE_SERVICE_ATTRIBUTES,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ServiceDiscoveryActions.LIST_OPERATIONS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ServiceDiscoveryActions.TAG_RESOURCE,
		ServiceDiscoveryActions.UNTAG_RESOURCE,
	];
}

const NamespaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):servicediscovery:(?<region>[^:]*):(?<account>[^:]*):namespace/(?<namespaceId>[^:/?]+)$",
);
const ServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):servicediscovery:(?<region>[^:]*):(?<account>[^:]*):service/(?<serviceId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for servicediscovery resources.
 */
export class ServiceDiscoveryResources {
	/**
	 * Builds an ARN for the namespace resource.
	 */
	static namespace(props: {
		/** The NamespaceId component of the ARN. */
		readonly namespaceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseNamespaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		namespaceId: string;
	} {
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
	static service(props: {
		/** The ServiceId component of the ARN. */
		readonly serviceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
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
			serviceId: match.groups!.serviceId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for servicediscovery.
 */
export class ServiceDiscoveryOperations {
	/** IAM actions required for the CreateHttpNamespace API call. */
	static readonly CREATE_HTTP_NAMESPACE: string[] = [
		"servicediscovery:CreateHttpNamespace",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the CreatePrivateDnsNamespace API call. */
	static readonly CREATE_PRIVATE_DNS_NAMESPACE: string[] = [
		"servicediscovery:CreatePrivateDnsNamespace",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the CreatePublicDnsNamespace API call. */
	static readonly CREATE_PUBLIC_DNS_NAMESPACE: string[] = [
		"servicediscovery:CreatePublicDnsNamespace",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the CreateService API call. */
	static readonly CREATE_SERVICE: string[] = [
		"servicediscovery:CreateService",
		"servicediscovery:TagResource",
	];
	/** IAM actions required for the DeleteNamespace API call. */
	static readonly DELETE_NAMESPACE: string[] = [
		"servicediscovery:DeleteNamespace",
	];
	/** IAM actions required for the DeleteService API call. */
	static readonly DELETE_SERVICE: string[] = ["servicediscovery:DeleteService"];
	/** IAM actions required for the DeleteServiceAttributes API call. */
	static readonly DELETE_SERVICE_ATTRIBUTES: string[] = [
		"servicediscovery:DeleteServiceAttributes",
	];
	/** IAM actions required for the DeregisterInstance API call. */
	static readonly DEREGISTER_INSTANCE: string[] = [
		"servicediscovery:DeregisterInstance",
	];
	/** IAM actions required for the DiscoverInstances API call. */
	static readonly DISCOVER_INSTANCES: string[] = [
		"servicediscovery:DiscoverInstances",
	];
	/** IAM actions required for the DiscoverInstancesRevision API call. */
	static readonly DISCOVER_INSTANCES_REVISION: string[] = [
		"servicediscovery:DiscoverInstancesRevision",
	];
	/** IAM actions required for the GetInstance API call. */
	static readonly GET_INSTANCE: string[] = ["servicediscovery:GetInstance"];
	/** IAM actions required for the GetInstancesHealthStatus API call. */
	static readonly GET_INSTANCES_HEALTH_STATUS: string[] = [
		"servicediscovery:GetInstancesHealthStatus",
	];
	/** IAM actions required for the GetNamespace API call. */
	static readonly GET_NAMESPACE: string[] = ["servicediscovery:GetNamespace"];
	/** IAM actions required for the GetOperation API call. */
	static readonly GET_OPERATION: string[] = ["servicediscovery:GetOperation"];
	/** IAM actions required for the GetService API call. */
	static readonly GET_SERVICE: string[] = ["servicediscovery:GetService"];
	/** IAM actions required for the GetServiceAttributes API call. */
	static readonly GET_SERVICE_ATTRIBUTES: string[] = [
		"servicediscovery:GetServiceAttributes",
	];
	/** IAM actions required for the ListInstances API call. */
	static readonly LIST_INSTANCES: string[] = ["servicediscovery:ListInstances"];
	/** IAM actions required for the ListNamespaces API call. */
	static readonly LIST_NAMESPACES: string[] = [
		"servicediscovery:ListNamespaces",
	];
	/** IAM actions required for the ListOperations API call. */
	static readonly LIST_OPERATIONS: string[] = [
		"servicediscovery:ListOperations",
	];
	/** IAM actions required for the ListServices API call. */
	static readonly LIST_SERVICES: string[] = ["servicediscovery:ListServices"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"servicediscovery:ListTagsForResource",
	];
	/** IAM actions required for the RegisterInstance API call. */
	static readonly REGISTER_INSTANCE: string[] = [
		"servicediscovery:RegisterInstance",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["servicediscovery:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["servicediscovery:UntagResource"];
	/** IAM actions required for the UpdateHttpNamespace API call. */
	static readonly UPDATE_HTTP_NAMESPACE: string[] = [
		"servicediscovery:UpdateHttpNamespace",
	];
	/** IAM actions required for the UpdateInstanceCustomHealthStatus API call. */
	static readonly UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS: string[] = [
		"servicediscovery:UpdateInstanceCustomHealthStatus",
	];
	/** IAM actions required for the UpdatePrivateDnsNamespace API call. */
	static readonly UPDATE_PRIVATE_DNS_NAMESPACE: string[] = [
		"servicediscovery:UpdatePrivateDnsNamespace",
	];
	/** IAM actions required for the UpdatePublicDnsNamespace API call. */
	static readonly UPDATE_PUBLIC_DNS_NAMESPACE: string[] = [
		"servicediscovery:UpdatePublicDnsNamespace",
	];
	/** IAM actions required for the UpdateService API call. */
	static readonly UPDATE_SERVICE: string[] = ["servicediscovery:UpdateService"];
	/** IAM actions required for the UpdateServiceAttributes API call. */
	static readonly UPDATE_SERVICE_ATTRIBUTES: string[] = [
		"servicediscovery:UpdateServiceAttributes",
	];
}

/**
 * Condition key constants and builders for servicediscovery.
 */
export class ServiceDiscoveryConditions {
	/** Condition keys applicable to the CreateHttpNamespace action. */
	static readonly CREATE_HTTP_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePrivateDnsNamespace action. */
	static readonly CREATE_PRIVATE_DNS_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePublicDnsNamespace action. */
	static readonly CREATE_PUBLIC_DNS_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateService action. */
	static readonly CREATE_SERVICE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"servicediscovery:NamespaceArn",
	];
	/** Condition keys applicable to the DeleteService action. */
	static readonly DELETE_SERVICE_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DeleteServiceAttributes action. */
	static readonly DELETE_SERVICE_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DeregisterInstance action. */
	static readonly DEREGISTER_INSTANCE_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceArn",
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the DiscoverInstances action. */
	static readonly DISCOVER_INSTANCES_CONDITION_KEYS: string[] = [
		"servicediscovery:NamespaceName",
		"servicediscovery:ServiceName",
	];
	/** Condition keys applicable to the DiscoverInstancesRevision action. */
	static readonly DISCOVER_INSTANCES_REVISION_CONDITION_KEYS: string[] = [
		"servicediscovery:NamespaceName",
		"servicediscovery:ServiceName",
	];
	/** Condition keys applicable to the GetInstance action. */
	static readonly GET_INSTANCE_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceArn",
	];
	/** Condition keys applicable to the GetInstancesHealthStatus action. */
	static readonly GET_INSTANCES_HEALTH_STATUS_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceArn",
	];
	/** Condition keys applicable to the ListInstances action. */
	static readonly LIST_INSTANCES_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceArn",
	];
	/** Condition keys applicable to the RegisterInstance action. */
	static readonly REGISTER_INSTANCE_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceArn",
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateInstanceCustomHealthStatus action. */
	static readonly UPDATE_INSTANCE_CUSTOM_HEALTH_STATUS_CONDITION_KEYS: string[] =
		["servicediscovery:ServiceArn", "servicediscovery:ServiceCreatedByAccount"];
	/** Condition keys applicable to the UpdateService action. */
	static readonly UPDATE_SERVICE_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];
	/** Condition keys applicable to the UpdateServiceAttributes action. */
	static readonly UPDATE_SERVICE_ATTRIBUTES_CONDITION_KEYS: string[] = [
		"servicediscovery:ServiceCreatedByAccount",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
