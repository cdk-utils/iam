// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/eks.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the eks service.
 */
export class EKSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "eks";

	/** [Read] eks:AccessKubernetesApi */
	static readonly ACCESS_KUBERNETES_API = "eks:AccessKubernetesApi";
	/** [Write] eks:AssociateAccessPolicy */
	static readonly ASSOCIATE_ACCESS_POLICY = "eks:AssociateAccessPolicy";
	/** [Write] eks:AssociateEncryptionConfig */
	static readonly ASSOCIATE_ENCRYPTION_CONFIG = "eks:AssociateEncryptionConfig";
	/** [Write] eks:AssociateIdentityProviderConfig */
	static readonly ASSOCIATE_IDENTITY_PROVIDER_CONFIG =
		"eks:AssociateIdentityProviderConfig";
	/** [Write] eks:CancelUpdate */
	static readonly CANCEL_UPDATE = "eks:CancelUpdate";
	/** [Write] eks:CreateAccessEntry */
	static readonly CREATE_ACCESS_ENTRY = "eks:CreateAccessEntry";
	/** [Write] eks:CreateAddon */
	static readonly CREATE_ADDON = "eks:CreateAddon";
	/** [Write] eks:CreateCapability */
	static readonly CREATE_CAPABILITY = "eks:CreateCapability";
	/** [Write] eks:CreateCluster */
	static readonly CREATE_CLUSTER = "eks:CreateCluster";
	/** [Write] eks:CreateEksAnywhereSubscription */
	static readonly CREATE_EKS_ANYWHERE_SUBSCRIPTION =
		"eks:CreateEksAnywhereSubscription";
	/** [Write] eks:CreateFargateProfile */
	static readonly CREATE_FARGATE_PROFILE = "eks:CreateFargateProfile";
	/** [Write] eks:CreateNodegroup */
	static readonly CREATE_NODEGROUP = "eks:CreateNodegroup";
	/** [Write] eks:CreatePodIdentityAssociation */
	static readonly CREATE_POD_IDENTITY_ASSOCIATION =
		"eks:CreatePodIdentityAssociation";
	/** [Write] eks:DeleteAccessEntry */
	static readonly DELETE_ACCESS_ENTRY = "eks:DeleteAccessEntry";
	/** [Write] eks:DeleteAddon */
	static readonly DELETE_ADDON = "eks:DeleteAddon";
	/** [Write] eks:DeleteCapability */
	static readonly DELETE_CAPABILITY = "eks:DeleteCapability";
	/** [Write] eks:DeleteCluster */
	static readonly DELETE_CLUSTER = "eks:DeleteCluster";
	/** [Write] eks:DeleteEksAnywhereSubscription */
	static readonly DELETE_EKS_ANYWHERE_SUBSCRIPTION =
		"eks:DeleteEksAnywhereSubscription";
	/** [Write] eks:DeleteFargateProfile */
	static readonly DELETE_FARGATE_PROFILE = "eks:DeleteFargateProfile";
	/** [Write] eks:DeleteNodegroup */
	static readonly DELETE_NODEGROUP = "eks:DeleteNodegroup";
	/** [Write] eks:DeletePodIdentityAssociation */
	static readonly DELETE_POD_IDENTITY_ASSOCIATION =
		"eks:DeletePodIdentityAssociation";
	/** [Write] eks:DeregisterCluster */
	static readonly DEREGISTER_CLUSTER = "eks:DeregisterCluster";
	/** [Read] eks:DescribeAccessEntry */
	static readonly DESCRIBE_ACCESS_ENTRY = "eks:DescribeAccessEntry";
	/** [Read] eks:DescribeAddon */
	static readonly DESCRIBE_ADDON = "eks:DescribeAddon";
	/** [Read] eks:DescribeAddonConfiguration */
	static readonly DESCRIBE_ADDON_CONFIGURATION =
		"eks:DescribeAddonConfiguration";
	/** [Read] eks:DescribeAddonVersions */
	static readonly DESCRIBE_ADDON_VERSIONS = "eks:DescribeAddonVersions";
	/** [Read] eks:DescribeCapability */
	static readonly DESCRIBE_CAPABILITY = "eks:DescribeCapability";
	/** [Read] eks:DescribeCluster */
	static readonly DESCRIBE_CLUSTER = "eks:DescribeCluster";
	/** [Read] eks:DescribeClusterVersions */
	static readonly DESCRIBE_CLUSTER_VERSIONS = "eks:DescribeClusterVersions";
	/** [Read] eks:DescribeEksAnywhereSubscription */
	static readonly DESCRIBE_EKS_ANYWHERE_SUBSCRIPTION =
		"eks:DescribeEksAnywhereSubscription";
	/** [Read] eks:DescribeFargateProfile */
	static readonly DESCRIBE_FARGATE_PROFILE = "eks:DescribeFargateProfile";
	/** [Read] eks:DescribeIdentityProviderConfig */
	static readonly DESCRIBE_IDENTITY_PROVIDER_CONFIG =
		"eks:DescribeIdentityProviderConfig";
	/** [Read] eks:DescribeInsight */
	static readonly DESCRIBE_INSIGHT = "eks:DescribeInsight";
	/** [Read] eks:DescribeInsightsRefresh */
	static readonly DESCRIBE_INSIGHTS_REFRESH = "eks:DescribeInsightsRefresh";
	/** [Read] eks:DescribeNodegroup */
	static readonly DESCRIBE_NODEGROUP = "eks:DescribeNodegroup";
	/** [Read] eks:DescribePodIdentityAssociation */
	static readonly DESCRIBE_POD_IDENTITY_ASSOCIATION =
		"eks:DescribePodIdentityAssociation";
	/** [Read] eks:DescribeUpdate */
	static readonly DESCRIBE_UPDATE = "eks:DescribeUpdate";
	/** [Write] eks:DisassociateAccessPolicy */
	static readonly DISASSOCIATE_ACCESS_POLICY = "eks:DisassociateAccessPolicy";
	/** [Write] eks:DisassociateIdentityProviderConfig */
	static readonly DISASSOCIATE_IDENTITY_PROVIDER_CONFIG =
		"eks:DisassociateIdentityProviderConfig";
	/** [List] eks:ListAccessEntries */
	static readonly LIST_ACCESS_ENTRIES = "eks:ListAccessEntries";
	/** [List] eks:ListAccessPolicies */
	static readonly LIST_ACCESS_POLICIES = "eks:ListAccessPolicies";
	/** [List] eks:ListAddons */
	static readonly LIST_ADDONS = "eks:ListAddons";
	/** [List] eks:ListAssociatedAccessPolicies */
	static readonly LIST_ASSOCIATED_ACCESS_POLICIES =
		"eks:ListAssociatedAccessPolicies";
	/** [List] eks:ListCapabilities */
	static readonly LIST_CAPABILITIES = "eks:ListCapabilities";
	/** [List] eks:ListClusters */
	static readonly LIST_CLUSTERS = "eks:ListClusters";
	/** [Read] eks:ListDashboardData */
	static readonly LIST_DASHBOARD_DATA = "eks:ListDashboardData";
	/** [Read] eks:ListDashboardResources */
	static readonly LIST_DASHBOARD_RESOURCES = "eks:ListDashboardResources";
	/** [List] eks:ListEksAnywhereSubscriptions */
	static readonly LIST_EKS_ANYWHERE_SUBSCRIPTIONS =
		"eks:ListEksAnywhereSubscriptions";
	/** [List] eks:ListFargateProfiles */
	static readonly LIST_FARGATE_PROFILES = "eks:ListFargateProfiles";
	/** [List] eks:ListIdentityProviderConfigs */
	static readonly LIST_IDENTITY_PROVIDER_CONFIGS =
		"eks:ListIdentityProviderConfigs";
	/** [List] eks:ListInsights */
	static readonly LIST_INSIGHTS = "eks:ListInsights";
	/** [List] eks:ListNodegroups */
	static readonly LIST_NODEGROUPS = "eks:ListNodegroups";
	/** [List] eks:ListPodIdentityAssociations */
	static readonly LIST_POD_IDENTITY_ASSOCIATIONS =
		"eks:ListPodIdentityAssociations";
	/** [Read] eks:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "eks:ListTagsForResource";
	/** [List] eks:ListUpdates */
	static readonly LIST_UPDATES = "eks:ListUpdates";
	/** [Write] eks:MutateViaKubernetesApi */
	static readonly MUTATE_VIA_KUBERNETES_API = "eks:MutateViaKubernetesApi";
	/** [Write] eks:RegisterCluster */
	static readonly REGISTER_CLUSTER = "eks:RegisterCluster";
	/** [Write] eks:StartInsightsRefresh */
	static readonly START_INSIGHTS_REFRESH = "eks:StartInsightsRefresh";
	/** [Tagging] eks:TagResource */
	static readonly TAG_RESOURCE = "eks:TagResource";
	/** [Tagging] eks:UntagResource */
	static readonly UNTAG_RESOURCE = "eks:UntagResource";
	/** [Write] eks:UpdateAccessEntry */
	static readonly UPDATE_ACCESS_ENTRY = "eks:UpdateAccessEntry";
	/** [Write] eks:UpdateAddon */
	static readonly UPDATE_ADDON = "eks:UpdateAddon";
	/** [Write] eks:UpdateCapability */
	static readonly UPDATE_CAPABILITY = "eks:UpdateCapability";
	/** [Write] eks:UpdateClusterConfig */
	static readonly UPDATE_CLUSTER_CONFIG = "eks:UpdateClusterConfig";
	/** [Write] eks:UpdateClusterVersion */
	static readonly UPDATE_CLUSTER_VERSION = "eks:UpdateClusterVersion";
	/** [Write] eks:UpdateEksAnywhereSubscription */
	static readonly UPDATE_EKS_ANYWHERE_SUBSCRIPTION =
		"eks:UpdateEksAnywhereSubscription";
	/** [Write] eks:UpdateNodegroupConfig */
	static readonly UPDATE_NODEGROUP_CONFIG = "eks:UpdateNodegroupConfig";
	/** [Write] eks:UpdateNodegroupVersion */
	static readonly UPDATE_NODEGROUP_VERSION = "eks:UpdateNodegroupVersion";
	/** [Write] eks:UpdatePodIdentityAssociation */
	static readonly UPDATE_POD_IDENTITY_ASSOCIATION =
		"eks:UpdatePodIdentityAssociation";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EKSActions.ACCESS_KUBERNETES_API,
		EKSActions.DESCRIBE_ACCESS_ENTRY,
		EKSActions.DESCRIBE_ADDON,
		EKSActions.DESCRIBE_ADDON_CONFIGURATION,
		EKSActions.DESCRIBE_ADDON_VERSIONS,
		EKSActions.DESCRIBE_CAPABILITY,
		EKSActions.DESCRIBE_CLUSTER,
		EKSActions.DESCRIBE_CLUSTER_VERSIONS,
		EKSActions.DESCRIBE_EKS_ANYWHERE_SUBSCRIPTION,
		EKSActions.DESCRIBE_FARGATE_PROFILE,
		EKSActions.DESCRIBE_IDENTITY_PROVIDER_CONFIG,
		EKSActions.DESCRIBE_INSIGHT,
		EKSActions.DESCRIBE_INSIGHTS_REFRESH,
		EKSActions.DESCRIBE_NODEGROUP,
		EKSActions.DESCRIBE_POD_IDENTITY_ASSOCIATION,
		EKSActions.DESCRIBE_UPDATE,
		EKSActions.LIST_DASHBOARD_DATA,
		EKSActions.LIST_DASHBOARD_RESOURCES,
		EKSActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EKSActions.ASSOCIATE_ACCESS_POLICY,
		EKSActions.ASSOCIATE_ENCRYPTION_CONFIG,
		EKSActions.ASSOCIATE_IDENTITY_PROVIDER_CONFIG,
		EKSActions.CANCEL_UPDATE,
		EKSActions.CREATE_ACCESS_ENTRY,
		EKSActions.CREATE_ADDON,
		EKSActions.CREATE_CAPABILITY,
		EKSActions.CREATE_CLUSTER,
		EKSActions.CREATE_EKS_ANYWHERE_SUBSCRIPTION,
		EKSActions.CREATE_FARGATE_PROFILE,
		EKSActions.CREATE_NODEGROUP,
		EKSActions.CREATE_POD_IDENTITY_ASSOCIATION,
		EKSActions.DELETE_ACCESS_ENTRY,
		EKSActions.DELETE_ADDON,
		EKSActions.DELETE_CAPABILITY,
		EKSActions.DELETE_CLUSTER,
		EKSActions.DELETE_EKS_ANYWHERE_SUBSCRIPTION,
		EKSActions.DELETE_FARGATE_PROFILE,
		EKSActions.DELETE_NODEGROUP,
		EKSActions.DELETE_POD_IDENTITY_ASSOCIATION,
		EKSActions.DEREGISTER_CLUSTER,
		EKSActions.DISASSOCIATE_ACCESS_POLICY,
		EKSActions.DISASSOCIATE_IDENTITY_PROVIDER_CONFIG,
		EKSActions.MUTATE_VIA_KUBERNETES_API,
		EKSActions.REGISTER_CLUSTER,
		EKSActions.START_INSIGHTS_REFRESH,
		EKSActions.UPDATE_ACCESS_ENTRY,
		EKSActions.UPDATE_ADDON,
		EKSActions.UPDATE_CAPABILITY,
		EKSActions.UPDATE_CLUSTER_CONFIG,
		EKSActions.UPDATE_CLUSTER_VERSION,
		EKSActions.UPDATE_EKS_ANYWHERE_SUBSCRIPTION,
		EKSActions.UPDATE_NODEGROUP_CONFIG,
		EKSActions.UPDATE_NODEGROUP_VERSION,
		EKSActions.UPDATE_POD_IDENTITY_ASSOCIATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		EKSActions.LIST_ACCESS_ENTRIES,
		EKSActions.LIST_ACCESS_POLICIES,
		EKSActions.LIST_ADDONS,
		EKSActions.LIST_ASSOCIATED_ACCESS_POLICIES,
		EKSActions.LIST_CAPABILITIES,
		EKSActions.LIST_CLUSTERS,
		EKSActions.LIST_EKS_ANYWHERE_SUBSCRIPTIONS,
		EKSActions.LIST_FARGATE_PROFILES,
		EKSActions.LIST_IDENTITY_PROVIDER_CONFIGS,
		EKSActions.LIST_INSIGHTS,
		EKSActions.LIST_NODEGROUPS,
		EKSActions.LIST_POD_IDENTITY_ASSOCIATIONS,
		EKSActions.LIST_UPDATES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EKSActions.TAG_RESOURCE,
		EKSActions.UNTAG_RESOURCE,
	];
}

const AccessEntryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):access-entry/(?<clusterName>[^:/?]+)/(?<iamIdentityType>[^:/?]+)/(?<iamIdentityAccountId>[^:/?]+)/(?<iamIdentityName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const AccessPolicyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks::aws:cluster-access-policy/(?<accessPolicyName>[^:/?]+)$",
);
const AddonArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):addon/(?<clusterName>[^:/?]+)/(?<addonName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const CapabilityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):capability/(?<clusterName>[^:/?]+)/(?<capabilityType>[^:/?]+)/(?<capabilityName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const ClusterArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):cluster/(?<clusterName>[^:/?]+)$",
);
const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):dashboard/(?<dashboardName>[^:/?]+)$",
);
const EKSAnywhereSubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):eks-anywhere-subscription/(?<uuid>[^:/?]+)$",
);
const FargateprofileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):fargateprofile/(?<clusterName>[^:/?]+)/(?<fargateProfileName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const IdentityproviderconfigArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):identityproviderconfig/(?<clusterName>[^:/?]+)/(?<identityProviderType>[^:/?]+)/(?<identityProviderConfigName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const NodegroupArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):nodegroup/(?<clusterName>[^:/?]+)/(?<nodegroupName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);
const PodidentityassociationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):podidentityassociation/(?<clusterName>[^:/?]+)/(?<uuid>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for eks resources.
 */
export class EKSResources {
	/**
	 * Builds an ARN for the access-entry resource.
	 */
	static accessEntry(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The IamIdentityType component of the ARN. */
		readonly iamIdentityType: string;
		/** The IamIdentityAccountID component of the ARN. */
		readonly iamIdentityAccountId: string;
		/** The IamIdentityName component of the ARN. */
		readonly iamIdentityName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:access-entry/${props.clusterName}/${props.iamIdentityType}/${props.iamIdentityAccountId}/${props.iamIdentityName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-entry resource.
	 */
	static isValidAccessEntryArn(arn: string): boolean {
		return AccessEntryArnRegex.test(arn);
	}

	/**
	 * Parses a access-entry ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessEntryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		iamIdentityType: string;
		iamIdentityAccountId: string;
		iamIdentityName: string;
		uuid: string;
	} {
		const match = AccessEntryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-entry ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			iamIdentityType: match.groups!.iamIdentityType,
			iamIdentityAccountId: match.groups!.iamIdentityAccountId,
			iamIdentityName: match.groups!.iamIdentityName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the access-policy resource.
	 */
	static accessPolicy(props: {
		/** The AccessPolicyName component of the ARN. */
		readonly accessPolicyName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks::aws:cluster-access-policy/${props.accessPolicyName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the access-policy resource.
	 */
	static isValidAccessPolicyArn(arn: string): boolean {
		return AccessPolicyArnRegex.test(arn);
	}

	/**
	 * Parses a access-policy ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAccessPolicyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		accessPolicyName: string;
	} {
		const match = AccessPolicyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid access-policy ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			accessPolicyName: match.groups!.accessPolicyName,
		};
	}

	/**
	 * Builds an ARN for the addon resource.
	 */
	static addon(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The AddonName component of the ARN. */
		readonly addonName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:addon/${props.clusterName}/${props.addonName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the addon resource.
	 */
	static isValidAddonArn(arn: string): boolean {
		return AddonArnRegex.test(arn);
	}

	/**
	 * Parses a addon ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAddonArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		addonName: string;
		uuid: string;
	} {
		const match = AddonArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid addon ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			addonName: match.groups!.addonName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the capability resource.
	 */
	static capability(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The CapabilityType component of the ARN. */
		readonly capabilityType: string;
		/** The CapabilityName component of the ARN. */
		readonly capabilityName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:capability/${props.clusterName}/${props.capabilityType}/${props.capabilityName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the capability resource.
	 */
	static isValidCapabilityArn(arn: string): boolean {
		return CapabilityArnRegex.test(arn);
	}

	/**
	 * Parses a capability ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCapabilityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		capabilityType: string;
		capabilityName: string;
		uuid: string;
	} {
		const match = CapabilityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid capability ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			capabilityType: match.groups!.capabilityType,
			capabilityName: match.groups!.capabilityName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the cluster resource.
	 */
	static cluster(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:cluster/${props.clusterName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the cluster resource.
	 */
	static isValidClusterArn(arn: string): boolean {
		return ClusterArnRegex.test(arn);
	}

	/**
	 * Parses a cluster ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseClusterArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
	} {
		const match = ClusterArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid cluster ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
		};
	}

	/**
	 * Builds an ARN for the dashboard resource.
	 */
	static dashboard(props: {
		/** The DashboardName component of the ARN. */
		readonly dashboardName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:dashboard/${props.dashboardName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		dashboardName: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			dashboardName: match.groups!.dashboardName,
		};
	}

	/**
	 * Builds an ARN for the eks-anywhere-subscription resource.
	 */
	static eksAnywhereSubscription(props: {
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:eks-anywhere-subscription/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the eks-anywhere-subscription resource.
	 */
	static isValidEKSAnywhereSubscriptionArn(arn: string): boolean {
		return EKSAnywhereSubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a eks-anywhere-subscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEKSAnywhereSubscriptionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		uuid: string;
	} {
		const match = EKSAnywhereSubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid eks-anywhere-subscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the fargateprofile resource.
	 */
	static fargateprofile(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The FargateProfileName component of the ARN. */
		readonly fargateProfileName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:fargateprofile/${props.clusterName}/${props.fargateProfileName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fargateprofile resource.
	 */
	static isValidFargateprofileArn(arn: string): boolean {
		return FargateprofileArnRegex.test(arn);
	}

	/**
	 * Parses a fargateprofile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFargateprofileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		fargateProfileName: string;
		uuid: string;
	} {
		const match = FargateprofileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fargateprofile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			fargateProfileName: match.groups!.fargateProfileName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the identityproviderconfig resource.
	 */
	static identityproviderconfig(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The IdentityProviderType component of the ARN. */
		readonly identityProviderType: string;
		/** The IdentityProviderConfigName component of the ARN. */
		readonly identityProviderConfigName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:identityproviderconfig/${props.clusterName}/${props.identityProviderType}/${props.identityProviderConfigName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identityproviderconfig resource.
	 */
	static isValidIdentityproviderconfigArn(arn: string): boolean {
		return IdentityproviderconfigArnRegex.test(arn);
	}

	/**
	 * Parses a identityproviderconfig ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentityproviderconfigArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		identityProviderType: string;
		identityProviderConfigName: string;
		uuid: string;
	} {
		const match = IdentityproviderconfigArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identityproviderconfig ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			identityProviderType: match.groups!.identityProviderType,
			identityProviderConfigName: match.groups!.identityProviderConfigName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the nodegroup resource.
	 */
	static nodegroup(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The NodegroupName component of the ARN. */
		readonly nodegroupName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:nodegroup/${props.clusterName}/${props.nodegroupName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the nodegroup resource.
	 */
	static isValidNodegroupArn(arn: string): boolean {
		return NodegroupArnRegex.test(arn);
	}

	/**
	 * Parses a nodegroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNodegroupArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		nodegroupName: string;
		uuid: string;
	} {
		const match = NodegroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid nodegroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			nodegroupName: match.groups!.nodegroupName,
			uuid: match.groups!.uuid,
		};
	}

	/**
	 * Builds an ARN for the podidentityassociation resource.
	 */
	static podidentityassociation(props: {
		/** The ClusterName component of the ARN. */
		readonly clusterName: string;
		/** The UUID component of the ARN. */
		readonly uuid: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:eks:${props.region ?? "*"}:${props.account ?? "*"}:podidentityassociation/${props.clusterName}/${props.uuid}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the podidentityassociation resource.
	 */
	static isValidPodidentityassociationArn(arn: string): boolean {
		return PodidentityassociationArnRegex.test(arn);
	}

	/**
	 * Parses a podidentityassociation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePodidentityassociationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		clusterName: string;
		uuid: string;
	} {
		const match = PodidentityassociationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid podidentityassociation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			clusterName: match.groups!.clusterName,
			uuid: match.groups!.uuid,
		};
	}
}

/**
 * API operation to required IAM actions mapping for eks.
 */
export class EKSOperations {
	/** IAM actions required for the AssociateAccessPolicy API call. */
	static readonly ASSOCIATE_ACCESS_POLICY: string[] = [
		"eks:AssociateAccessPolicy",
	];
	/** IAM actions required for the AssociateEncryptionConfig API call. */
	static readonly ASSOCIATE_ENCRYPTION_CONFIG: string[] = [
		"eks:AssociateEncryptionConfig",
	];
	/** IAM actions required for the AssociateIdentityProviderConfig API call. */
	static readonly ASSOCIATE_IDENTITY_PROVIDER_CONFIG: string[] = [
		"eks:AssociateIdentityProviderConfig",
		"eks:TagResource",
	];
	/** IAM actions required for the CancelUpdate API call. */
	static readonly CANCEL_UPDATE: string[] = ["eks:CancelUpdate"];
	/** IAM actions required for the CreateAccessEntry API call. */
	static readonly CREATE_ACCESS_ENTRY: string[] = [
		"eks:CreateAccessEntry",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateAddon API call. */
	static readonly CREATE_ADDON: string[] = [
		"eks:CreateAddon",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateCapability API call. */
	static readonly CREATE_CAPABILITY: string[] = [
		"eks:CreateCapability",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CREATE_CLUSTER: string[] = [
		"eks:CreateAccessEntry",
		"eks:CreateCluster",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateEksAnywhereSubscription API call. */
	static readonly CREATE_EKS_ANYWHERE_SUBSCRIPTION: string[] = [
		"eks:CreateEksAnywhereSubscription",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateFargateProfile API call. */
	static readonly CREATE_FARGATE_PROFILE: string[] = [
		"eks:CreateFargateProfile",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateNodegroup API call. */
	static readonly CREATE_NODEGROUP: string[] = [
		"eks:CreateNodegroup",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreatePodIdentityAssociation API call. */
	static readonly CREATE_POD_IDENTITY_ASSOCIATION: string[] = [
		"eks:CreatePodIdentityAssociation",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the DeleteAccessEntry API call. */
	static readonly DELETE_ACCESS_ENTRY: string[] = ["eks:DeleteAccessEntry"];
	/** IAM actions required for the DeleteAddon API call. */
	static readonly DELETE_ADDON: string[] = ["eks:DeleteAddon"];
	/** IAM actions required for the DeleteCapability API call. */
	static readonly DELETE_CAPABILITY: string[] = ["eks:DeleteCapability"];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DELETE_CLUSTER: string[] = ["eks:DeleteCluster"];
	/** IAM actions required for the DeleteEksAnywhereSubscription API call. */
	static readonly DELETE_EKS_ANYWHERE_SUBSCRIPTION: string[] = [
		"eks:DeleteEksAnywhereSubscription",
	];
	/** IAM actions required for the DeleteFargateProfile API call. */
	static readonly DELETE_FARGATE_PROFILE: string[] = [
		"eks:DeleteFargateProfile",
	];
	/** IAM actions required for the DeleteNodegroup API call. */
	static readonly DELETE_NODEGROUP: string[] = ["eks:DeleteNodegroup"];
	/** IAM actions required for the DeletePodIdentityAssociation API call. */
	static readonly DELETE_POD_IDENTITY_ASSOCIATION: string[] = [
		"eks:DeletePodIdentityAssociation",
	];
	/** IAM actions required for the DeregisterCluster API call. */
	static readonly DEREGISTER_CLUSTER: string[] = ["eks:DeregisterCluster"];
	/** IAM actions required for the DescribeAccessEntry API call. */
	static readonly DESCRIBE_ACCESS_ENTRY: string[] = ["eks:DescribeAccessEntry"];
	/** IAM actions required for the DescribeAddon API call. */
	static readonly DESCRIBE_ADDON: string[] = ["eks:DescribeAddon"];
	/** IAM actions required for the DescribeAddonConfiguration API call. */
	static readonly DESCRIBE_ADDON_CONFIGURATION: string[] = [
		"eks:DescribeAddonConfiguration",
	];
	/** IAM actions required for the DescribeAddonVersions API call. */
	static readonly DESCRIBE_ADDON_VERSIONS: string[] = [
		"eks:DescribeAddonVersions",
	];
	/** IAM actions required for the DescribeCapability API call. */
	static readonly DESCRIBE_CAPABILITY: string[] = ["eks:DescribeCapability"];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DESCRIBE_CLUSTER: string[] = ["eks:DescribeCluster"];
	/** IAM actions required for the DescribeClusterVersions API call. */
	static readonly DESCRIBE_CLUSTER_VERSIONS: string[] = [
		"eks:DescribeClusterVersions",
	];
	/** IAM actions required for the DescribeEksAnywhereSubscription API call. */
	static readonly DESCRIBE_EKS_ANYWHERE_SUBSCRIPTION: string[] = [
		"eks:DescribeEksAnywhereSubscription",
	];
	/** IAM actions required for the DescribeFargateProfile API call. */
	static readonly DESCRIBE_FARGATE_PROFILE: string[] = [
		"eks:DescribeFargateProfile",
	];
	/** IAM actions required for the DescribeIdentityProviderConfig API call. */
	static readonly DESCRIBE_IDENTITY_PROVIDER_CONFIG: string[] = [
		"eks:DescribeIdentityProviderConfig",
	];
	/** IAM actions required for the DescribeInsight API call. */
	static readonly DESCRIBE_INSIGHT: string[] = ["eks:DescribeInsight"];
	/** IAM actions required for the DescribeInsightsRefresh API call. */
	static readonly DESCRIBE_INSIGHTS_REFRESH: string[] = [
		"eks:DescribeInsightsRefresh",
	];
	/** IAM actions required for the DescribeNodegroup API call. */
	static readonly DESCRIBE_NODEGROUP: string[] = ["eks:DescribeNodegroup"];
	/** IAM actions required for the DescribePodIdentityAssociation API call. */
	static readonly DESCRIBE_POD_IDENTITY_ASSOCIATION: string[] = [
		"eks:DescribePodIdentityAssociation",
	];
	/** IAM actions required for the DescribeUpdate API call. */
	static readonly DESCRIBE_UPDATE: string[] = ["eks:DescribeUpdate"];
	/** IAM actions required for the DisassociateAccessPolicy API call. */
	static readonly DISASSOCIATE_ACCESS_POLICY: string[] = [
		"eks:DisassociateAccessPolicy",
	];
	/** IAM actions required for the DisassociateIdentityProviderConfig API call. */
	static readonly DISASSOCIATE_IDENTITY_PROVIDER_CONFIG: string[] = [
		"eks:DisassociateIdentityProviderConfig",
	];
	/** IAM actions required for the ListAccessEntries API call. */
	static readonly LIST_ACCESS_ENTRIES: string[] = ["eks:ListAccessEntries"];
	/** IAM actions required for the ListAccessPolicies API call. */
	static readonly LIST_ACCESS_POLICIES: string[] = ["eks:ListAccessPolicies"];
	/** IAM actions required for the ListAddons API call. */
	static readonly LIST_ADDONS: string[] = ["eks:ListAddons"];
	/** IAM actions required for the ListAssociatedAccessPolicies API call. */
	static readonly LIST_ASSOCIATED_ACCESS_POLICIES: string[] = [
		"eks:ListAssociatedAccessPolicies",
	];
	/** IAM actions required for the ListCapabilities API call. */
	static readonly LIST_CAPABILITIES: string[] = ["eks:ListCapabilities"];
	/** IAM actions required for the ListClusters API call. */
	static readonly LIST_CLUSTERS: string[] = ["eks:ListClusters"];
	/** IAM actions required for the ListEksAnywhereSubscriptions API call. */
	static readonly LIST_EKS_ANYWHERE_SUBSCRIPTIONS: string[] = [
		"eks:ListEksAnywhereSubscriptions",
	];
	/** IAM actions required for the ListFargateProfiles API call. */
	static readonly LIST_FARGATE_PROFILES: string[] = ["eks:ListFargateProfiles"];
	/** IAM actions required for the ListIdentityProviderConfigs API call. */
	static readonly LIST_IDENTITY_PROVIDER_CONFIGS: string[] = [
		"eks:ListIdentityProviderConfigs",
	];
	/** IAM actions required for the ListInsights API call. */
	static readonly LIST_INSIGHTS: string[] = ["eks:ListInsights"];
	/** IAM actions required for the ListNodegroups API call. */
	static readonly LIST_NODEGROUPS: string[] = ["eks:ListNodegroups"];
	/** IAM actions required for the ListPodIdentityAssociations API call. */
	static readonly LIST_POD_IDENTITY_ASSOCIATIONS: string[] = [
		"eks:ListPodIdentityAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"eks:ListTagsForResource",
	];
	/** IAM actions required for the ListUpdates API call. */
	static readonly LIST_UPDATES: string[] = ["eks:ListUpdates"];
	/** IAM actions required for the RegisterCluster API call. */
	static readonly REGISTER_CLUSTER: string[] = [
		"iam:PassRole",
		"eks:RegisterCluster",
		"eks:TagResource",
	];
	/** IAM actions required for the StartInsightsRefresh API call. */
	static readonly START_INSIGHTS_REFRESH: string[] = [
		"eks:StartInsightsRefresh",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["eks:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["eks:UntagResource"];
	/** IAM actions required for the UpdateAccessEntry API call. */
	static readonly UPDATE_ACCESS_ENTRY: string[] = ["eks:UpdateAccessEntry"];
	/** IAM actions required for the UpdateAddon API call. */
	static readonly UPDATE_ADDON: string[] = ["iam:PassRole", "eks:UpdateAddon"];
	/** IAM actions required for the UpdateCapability API call. */
	static readonly UPDATE_CAPABILITY: string[] = [
		"iam:PassRole",
		"eks:UpdateCapability",
	];
	/** IAM actions required for the UpdateClusterConfig API call. */
	static readonly UPDATE_CLUSTER_CONFIG: string[] = [
		"eks:CreateAccessEntry",
		"iam:PassRole",
		"eks:UpdateClusterConfig",
	];
	/** IAM actions required for the UpdateClusterVersion API call. */
	static readonly UPDATE_CLUSTER_VERSION: string[] = [
		"eks:UpdateClusterVersion",
	];
	/** IAM actions required for the UpdateEksAnywhereSubscription API call. */
	static readonly UPDATE_EKS_ANYWHERE_SUBSCRIPTION: string[] = [
		"eks:UpdateEksAnywhereSubscription",
	];
	/** IAM actions required for the UpdateNodegroupConfig API call. */
	static readonly UPDATE_NODEGROUP_CONFIG: string[] = [
		"eks:UpdateNodegroupConfig",
	];
	/** IAM actions required for the UpdateNodegroupVersion API call. */
	static readonly UPDATE_NODEGROUP_VERSION: string[] = [
		"eks:UpdateNodegroupVersion",
	];
	/** IAM actions required for the UpdatePodIdentityAssociation API call. */
	static readonly UPDATE_POD_IDENTITY_ASSOCIATION: string[] = [
		"iam:PassRole",
		"eks:UpdatePodIdentityAssociation",
	];
}

/**
 * Condition key constants and builders for eks.
 */
export class EKSConditions {
	/** Condition keys applicable to the AssociateAccessPolicy action. */
	static readonly ASSOCIATE_ACCESS_POLICY_CONDITION_KEYS: string[] = [
		"eks:accessScope",
		"eks:namespaces",
		"eks:policyArn",
	];
	/** Condition keys applicable to the AssociateEncryptionConfig action. */
	static readonly ASSOCIATE_ENCRYPTION_CONFIG_CONDITION_KEYS: string[] = [
		"eks:encryptionConfigProviderKeyArns",
	];
	/** Condition keys applicable to the AssociateIdentityProviderConfig action. */
	static readonly ASSOCIATE_IDENTITY_PROVIDER_CONFIG_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:TagKeys",
			"eks:clientId",
			"eks:issuerUrl",
		];
	/** Condition keys applicable to the CreateAccessEntry action. */
	static readonly CREATE_ACCESS_ENTRY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"eks:accessEntryType",
		"eks:kubernetesGroups",
		"eks:principalArn",
		"eks:username",
	];
	/** Condition keys applicable to the CreateAddon action. */
	static readonly CREATE_ADDON_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCapability action. */
	static readonly CREATE_CAPABILITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CREATE_CLUSTER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"eks:authenticationMode",
		"eks:blockStorageEnabled",
		"eks:bootstrapClusterCreatorAdminPermissions",
		"eks:bootstrapSelfManagedAddons",
		"eks:computeConfigEnabled",
		"eks:controlPlaneEgressMode",
		"eks:controlPlaneScalingTier",
		"eks:deletionProtection",
		"eks:elasticLoadBalancingEnabled",
		"eks:encryptionConfigProviderKeyArns",
		"eks:endpointPrivateAccess",
		"eks:endpointPublicAccess",
		"eks:kubeApiServerConfig",
		"eks:kubeControllerManagerConfig",
		"eks:kubeSchedulerConfig",
		"eks:kubernetesVersion",
		"eks:loggingType/${type}",
		"eks:supportType",
		"eks:zonalShiftEnabled",
	];
	/** Condition keys applicable to the CreateEksAnywhereSubscription action. */
	static readonly CREATE_EKS_ANYWHERE_SUBSCRIPTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFargateProfile action. */
	static readonly CREATE_FARGATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNodegroup action. */
	static readonly CREATE_NODEGROUP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePodIdentityAssociation action. */
	static readonly CREATE_POD_IDENTITY_ASSOCIATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DisassociateAccessPolicy action. */
	static readonly DISASSOCIATE_ACCESS_POLICY_CONDITION_KEYS: string[] = [
		"eks:accessScope",
		"eks:namespaces",
		"eks:policyArn",
	];
	/** Condition keys applicable to the RegisterCluster action. */
	static readonly REGISTER_CLUSTER_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateClusterConfig action. */
	static readonly UPDATE_CLUSTER_CONFIG_CONDITION_KEYS: string[] = [
		"eks:authenticationMode",
		"eks:blockStorageEnabled",
		"eks:computeConfigEnabled",
		"eks:controlPlaneEgressMode",
		"eks:controlPlaneScalingTier",
		"eks:deletionProtection",
		"eks:elasticLoadBalancingEnabled",
		"eks:endpointPrivateAccess",
		"eks:endpointPublicAccess",
		"eks:kubeApiServerConfig",
		"eks:kubeControllerManagerConfig",
		"eks:kubeSchedulerConfig",
		"eks:loggingType/${type}",
		"eks:supportType",
		"eks:zonalShiftEnabled",
	];
	/** Condition keys applicable to the UpdateClusterVersion action. */
	static readonly UPDATE_CLUSTER_VERSION_CONDITION_KEYS: string[] = [
		"eks:kubernetesVersion",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: eks:accessEntryType (String) */
	static readonly ACCESS_ENTRY_TYPE = "eks:accessEntryType";
	/** Condition key: eks:accessScope (String) */
	static readonly ACCESS_SCOPE = "eks:accessScope";
	/** Condition key: eks:authenticationMode (String) */
	static readonly AUTHENTICATION_MODE = "eks:authenticationMode";
	/** Condition key: eks:blockStorageEnabled (Bool) */
	static readonly BLOCK_STORAGE_ENABLED = "eks:blockStorageEnabled";
	/** Condition key: eks:bootstrapClusterCreatorAdminPermissions (Bool) */
	static readonly BOOTSTRAP_CLUSTER_CREATOR_ADMIN_PERMISSIONS =
		"eks:bootstrapClusterCreatorAdminPermissions";
	/** Condition key: eks:bootstrapSelfManagedAddons (Bool) */
	static readonly BOOTSTRAP_SELF_MANAGED_ADDONS =
		"eks:bootstrapSelfManagedAddons";
	/** Condition key: eks:clientId (String) */
	static readonly CLIENT_ID = "eks:clientId";
	/** Condition key: eks:clusterName (String) */
	static readonly CLUSTER_NAME = "eks:clusterName";
	/** Condition key: eks:computeConfigEnabled (Bool) */
	static readonly COMPUTE_CONFIG_ENABLED = "eks:computeConfigEnabled";
	/** Condition key: eks:controlPlaneEgressMode (String) */
	static readonly CONTROL_PLANE_EGRESS_MODE = "eks:controlPlaneEgressMode";
	/** Condition key: eks:controlPlaneScalingTier (String) */
	static readonly CONTROL_PLANE_SCALING_TIER = "eks:controlPlaneScalingTier";
	/** Condition key: eks:deletionProtection (Bool) */
	static readonly DELETION_PROTECTION = "eks:deletionProtection";
	/** Condition key: eks:elasticLoadBalancingEnabled (Bool) */
	static readonly ELASTIC_LOAD_BALANCING_ENABLED =
		"eks:elasticLoadBalancingEnabled";
	/** Condition key: eks:encryptionConfigProviderKeyArns (ArrayOfARN) */
	static readonly ENCRYPTION_CONFIG_PROVIDER_KEY_ARNS =
		"eks:encryptionConfigProviderKeyArns";
	/** Condition key: eks:endpointPrivateAccess (Bool) */
	static readonly ENDPOINT_PRIVATE_ACCESS = "eks:endpointPrivateAccess";
	/** Condition key: eks:endpointPublicAccess (Bool) */
	static readonly ENDPOINT_PUBLIC_ACCESS = "eks:endpointPublicAccess";
	/** Condition key: eks:issuerUrl (String) */
	static readonly ISSUER_URL = "eks:issuerUrl";
	/** Condition key: eks:kubeApiServerConfig (Bool) */
	static readonly KUBE_API_SERVER_CONFIG = "eks:kubeApiServerConfig";
	/** Condition key: eks:kubeControllerManagerConfig (Bool) */
	static readonly KUBE_CONTROLLER_MANAGER_CONFIG =
		"eks:kubeControllerManagerConfig";
	/** Condition key: eks:kubeSchedulerConfig (Bool) */
	static readonly KUBE_SCHEDULER_CONFIG = "eks:kubeSchedulerConfig";
	/** Condition key: eks:kubernetesGroups (ArrayOfString) */
	static readonly KUBERNETES_GROUPS = "eks:kubernetesGroups";
	/** Condition key: eks:kubernetesVersion (String) */
	static readonly KUBERNETES_VERSION = "eks:kubernetesVersion";
	/** Condition key: eks:loggingType/${type} (Bool) */
	static readonly LOGGING_TYPE = "eks:loggingType/${type}";
	/** Condition key: eks:namespaces (ArrayOfString) */
	static readonly NAMESPACES = "eks:namespaces";
	/** Condition key: eks:policyArn (ARN) */
	static readonly POLICY_ARN = "eks:policyArn";
	/** Condition key: eks:principalArn (ARN) */
	static readonly PRINCIPAL_ARN = "eks:principalArn";
	/** Condition key: eks:supportType (String) */
	static readonly SUPPORT_TYPE = "eks:supportType";
	/** Condition key: eks:username (String) */
	static readonly USERNAME = "eks:username";
	/** Condition key: eks:zonalShiftEnabled (Bool) */
	static readonly ZONAL_SHIFT_ENABLED = "eks:zonalShiftEnabled";

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
	 * Generates a condition block for `eks:accessEntryType`.
	 */
	static accessEntryType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:accessEntryType": value } };
	}

	/**
	 * Generates a condition block for `eks:accessScope`.
	 */
	static accessScope(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:accessScope": value } };
	}

	/**
	 * Generates a condition block for `eks:authenticationMode`.
	 */
	static authenticationMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:authenticationMode": value } };
	}

	/**
	 * Generates a condition block for `eks:blockStorageEnabled`.
	 */
	static blockStorageEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:blockStorageEnabled": value } };
	}

	/**
	 * Generates a condition block for `eks:bootstrapClusterCreatorAdminPermissions`.
	 */
	static bootstrapClusterCreatorAdminPermissions(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:bootstrapClusterCreatorAdminPermissions": value } };
	}

	/**
	 * Generates a condition block for `eks:bootstrapSelfManagedAddons`.
	 */
	static bootstrapSelfManagedAddons(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:bootstrapSelfManagedAddons": value } };
	}

	/**
	 * Generates a condition block for `eks:clientId`.
	 */
	static clientId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:clientId": value } };
	}

	/**
	 * Generates a condition block for `eks:clusterName`.
	 */
	static clusterName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:clusterName": value } };
	}

	/**
	 * Generates a condition block for `eks:computeConfigEnabled`.
	 */
	static computeConfigEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:computeConfigEnabled": value } };
	}

	/**
	 * Generates a condition block for `eks:controlPlaneEgressMode`.
	 */
	static controlPlaneEgressMode(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:controlPlaneEgressMode": value } };
	}

	/**
	 * Generates a condition block for `eks:controlPlaneScalingTier`.
	 */
	static controlPlaneScalingTier(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:controlPlaneScalingTier": value } };
	}

	/**
	 * Generates a condition block for `eks:deletionProtection`.
	 */
	static deletionProtection(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:deletionProtection": value } };
	}

	/**
	 * Generates a condition block for `eks:elasticLoadBalancingEnabled`.
	 */
	static elasticLoadBalancingEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:elasticLoadBalancingEnabled": value } };
	}

	/**
	 * Generates a condition block for `eks:encryptionConfigProviderKeyArns`.
	 */
	static encryptionConfigProviderKeyArns(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": {
				"eks:encryptionConfigProviderKeyArns": values,
			},
		};
	}

	/**
	 * Generates a condition block for `eks:endpointPrivateAccess`.
	 */
	static endpointPrivateAccess(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:endpointPrivateAccess": value } };
	}

	/**
	 * Generates a condition block for `eks:endpointPublicAccess`.
	 */
	static endpointPublicAccess(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:endpointPublicAccess": value } };
	}

	/**
	 * Generates a condition block for `eks:issuerUrl`.
	 */
	static issuerURL(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:issuerUrl": value } };
	}

	/**
	 * Generates a condition block for `eks:kubeApiServerConfig`.
	 */
	static kubeAPIServerConfig(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:kubeApiServerConfig": value } };
	}

	/**
	 * Generates a condition block for `eks:kubeControllerManagerConfig`.
	 */
	static kubeControllerManagerConfig(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:kubeControllerManagerConfig": value } };
	}

	/**
	 * Generates a condition block for `eks:kubeSchedulerConfig`.
	 */
	static kubeSchedulerConfig(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:kubeSchedulerConfig": value } };
	}

	/**
	 * Generates a condition block for `eks:kubernetesGroups`.
	 */
	static kubernetesGroups(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "eks:kubernetesGroups": values } };
	}

	/**
	 * Generates a condition block for `eks:kubernetesVersion`.
	 */
	static kubernetesVersion(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:kubernetesVersion": value } };
	}

	/**
	 * Generates a condition block for `eks:loggingType/${type}`.
	 */
	static loggingType(value: boolean): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:loggingType/${type}": value } };
	}

	/**
	 * Generates a condition block for `eks:namespaces`.
	 */
	static namespaces(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "eks:namespaces": values } };
	}

	/**
	 * Generates a condition block for `eks:policyArn`.
	 */
	static policyARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "eks:policyArn": value } };
	}

	/**
	 * Generates a condition block for `eks:principalArn`.
	 */
	static principalARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "eks:principalArn": value } };
	}

	/**
	 * Generates a condition block for `eks:supportType`.
	 */
	static supportType(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:supportType": value } };
	}

	/**
	 * Generates a condition block for `eks:username`.
	 */
	static username(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "eks:username": value } };
	}

	/**
	 * Generates a condition block for `eks:zonalShiftEnabled`.
	 */
	static zonalShiftEnabled(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "eks:zonalShiftEnabled": value } };
	}
}
