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
	static readonly AccessKubernetesApi = "eks:AccessKubernetesApi";
	/** [Write] eks:ActivateCertificateAuthority */
	static readonly ActivateCertificateAuthority =
		"eks:ActivateCertificateAuthority";
	/** [Write] eks:AssociateAccessPolicy */
	static readonly AssociateAccessPolicy = "eks:AssociateAccessPolicy";
	/** [Write] eks:AssociateEncryptionConfig */
	static readonly AssociateEncryptionConfig = "eks:AssociateEncryptionConfig";
	/** [Write] eks:AssociateIdentityProviderConfig */
	static readonly AssociateIdentityProviderConfig =
		"eks:AssociateIdentityProviderConfig";
	/** [Write] eks:CancelUpdate */
	static readonly CancelUpdate = "eks:CancelUpdate";
	/** [Write] eks:CreateAccessEntry */
	static readonly CreateAccessEntry = "eks:CreateAccessEntry";
	/** [Write] eks:CreateAddon */
	static readonly CreateAddon = "eks:CreateAddon";
	/** [Write] eks:CreateCapability */
	static readonly CreateCapability = "eks:CreateCapability";
	/** [Write] eks:CreateCertificateAuthority */
	static readonly CreateCertificateAuthority = "eks:CreateCertificateAuthority";
	/** [Write] eks:CreateCluster */
	static readonly CreateCluster = "eks:CreateCluster";
	/** [Write] eks:CreateEksAnywhereSubscription */
	static readonly CreateEksAnywhereSubscription =
		"eks:CreateEksAnywhereSubscription";
	/** [Write] eks:CreateFargateProfile */
	static readonly CreateFargateProfile = "eks:CreateFargateProfile";
	/** [Write] eks:CreateNodegroup */
	static readonly CreateNodegroup = "eks:CreateNodegroup";
	/** [Write] eks:CreatePodIdentityAssociation */
	static readonly CreatePodIdentityAssociation =
		"eks:CreatePodIdentityAssociation";
	/** [Write] eks:DeleteAccessEntry */
	static readonly DeleteAccessEntry = "eks:DeleteAccessEntry";
	/** [Write] eks:DeleteAddon */
	static readonly DeleteAddon = "eks:DeleteAddon";
	/** [Write] eks:DeleteCapability */
	static readonly DeleteCapability = "eks:DeleteCapability";
	/** [Write] eks:DeleteCertificateAuthority */
	static readonly DeleteCertificateAuthority = "eks:DeleteCertificateAuthority";
	/** [Write] eks:DeleteCluster */
	static readonly DeleteCluster = "eks:DeleteCluster";
	/** [Write] eks:DeleteEksAnywhereSubscription */
	static readonly DeleteEksAnywhereSubscription =
		"eks:DeleteEksAnywhereSubscription";
	/** [Write] eks:DeleteFargateProfile */
	static readonly DeleteFargateProfile = "eks:DeleteFargateProfile";
	/** [Write] eks:DeleteNodegroup */
	static readonly DeleteNodegroup = "eks:DeleteNodegroup";
	/** [Write] eks:DeletePodIdentityAssociation */
	static readonly DeletePodIdentityAssociation =
		"eks:DeletePodIdentityAssociation";
	/** [Write] eks:DeregisterCluster */
	static readonly DeregisterCluster = "eks:DeregisterCluster";
	/** [Read] eks:DescribeAccessEntry */
	static readonly DescribeAccessEntry = "eks:DescribeAccessEntry";
	/** [Read] eks:DescribeAddon */
	static readonly DescribeAddon = "eks:DescribeAddon";
	/** [Read] eks:DescribeAddonConfiguration */
	static readonly DescribeAddonConfiguration = "eks:DescribeAddonConfiguration";
	/** [Read] eks:DescribeAddonVersions */
	static readonly DescribeAddonVersions = "eks:DescribeAddonVersions";
	/** [Read] eks:DescribeCapability */
	static readonly DescribeCapability = "eks:DescribeCapability";
	/** [Read] eks:DescribeCertificateAuthority */
	static readonly DescribeCertificateAuthority =
		"eks:DescribeCertificateAuthority";
	/** [Read] eks:DescribeCluster */
	static readonly DescribeCluster = "eks:DescribeCluster";
	/** [Read] eks:DescribeClusterVersions */
	static readonly DescribeClusterVersions = "eks:DescribeClusterVersions";
	/** [Read] eks:DescribeEksAnywhereSubscription */
	static readonly DescribeEksAnywhereSubscription =
		"eks:DescribeEksAnywhereSubscription";
	/** [Read] eks:DescribeFargateProfile */
	static readonly DescribeFargateProfile = "eks:DescribeFargateProfile";
	/** [Read] eks:DescribeIdentityProviderConfig */
	static readonly DescribeIdentityProviderConfig =
		"eks:DescribeIdentityProviderConfig";
	/** [Read] eks:DescribeInsight */
	static readonly DescribeInsight = "eks:DescribeInsight";
	/** [Read] eks:DescribeInsightsRefresh */
	static readonly DescribeInsightsRefresh = "eks:DescribeInsightsRefresh";
	/** [Read] eks:DescribeNodegroup */
	static readonly DescribeNodegroup = "eks:DescribeNodegroup";
	/** [Read] eks:DescribePodIdentityAssociation */
	static readonly DescribePodIdentityAssociation =
		"eks:DescribePodIdentityAssociation";
	/** [Read] eks:DescribeUpdate */
	static readonly DescribeUpdate = "eks:DescribeUpdate";
	/** [Write] eks:DisassociateAccessPolicy */
	static readonly DisassociateAccessPolicy = "eks:DisassociateAccessPolicy";
	/** [Write] eks:DisassociateIdentityProviderConfig */
	static readonly DisassociateIdentityProviderConfig =
		"eks:DisassociateIdentityProviderConfig";
	/** [List] eks:ListAccessEntries */
	static readonly ListAccessEntries = "eks:ListAccessEntries";
	/** [List] eks:ListAccessPolicies */
	static readonly ListAccessPolicies = "eks:ListAccessPolicies";
	/** [List] eks:ListAddons */
	static readonly ListAddons = "eks:ListAddons";
	/** [List] eks:ListAssociatedAccessPolicies */
	static readonly ListAssociatedAccessPolicies =
		"eks:ListAssociatedAccessPolicies";
	/** [List] eks:ListCapabilities */
	static readonly ListCapabilities = "eks:ListCapabilities";
	/** [List] eks:ListCertificateAuthorities */
	static readonly ListCertificateAuthorities = "eks:ListCertificateAuthorities";
	/** [List] eks:ListClusters */
	static readonly ListClusters = "eks:ListClusters";
	/** [Read] eks:ListDashboardData */
	static readonly ListDashboardData = "eks:ListDashboardData";
	/** [Read] eks:ListDashboardResources */
	static readonly ListDashboardResources = "eks:ListDashboardResources";
	/** [List] eks:ListEksAnywhereSubscriptions */
	static readonly ListEksAnywhereSubscriptions =
		"eks:ListEksAnywhereSubscriptions";
	/** [List] eks:ListFargateProfiles */
	static readonly ListFargateProfiles = "eks:ListFargateProfiles";
	/** [List] eks:ListIdentityProviderConfigs */
	static readonly ListIdentityProviderConfigs =
		"eks:ListIdentityProviderConfigs";
	/** [List] eks:ListInsights */
	static readonly ListInsights = "eks:ListInsights";
	/** [List] eks:ListNodegroups */
	static readonly ListNodegroups = "eks:ListNodegroups";
	/** [List] eks:ListPodIdentityAssociations */
	static readonly ListPodIdentityAssociations =
		"eks:ListPodIdentityAssociations";
	/** [Read] eks:ListTagsForResource */
	static readonly ListTagsForResource = "eks:ListTagsForResource";
	/** [List] eks:ListUpdates */
	static readonly ListUpdates = "eks:ListUpdates";
	/** [Write] eks:MutateViaKubernetesApi */
	static readonly MutateViaKubernetesApi = "eks:MutateViaKubernetesApi";
	/** [Write] eks:RegisterCluster */
	static readonly RegisterCluster = "eks:RegisterCluster";
	/** [Write] eks:StartInsightsRefresh */
	static readonly StartInsightsRefresh = "eks:StartInsightsRefresh";
	/** [Tagging] eks:TagResource */
	static readonly TagResource = "eks:TagResource";
	/** [Tagging] eks:UntagResource */
	static readonly UntagResource = "eks:UntagResource";
	/** [Write] eks:UpdateAccessEntry */
	static readonly UpdateAccessEntry = "eks:UpdateAccessEntry";
	/** [Write] eks:UpdateAddon */
	static readonly UpdateAddon = "eks:UpdateAddon";
	/** [Write] eks:UpdateCapability */
	static readonly UpdateCapability = "eks:UpdateCapability";
	/** [Write] eks:UpdateClusterConfig */
	static readonly UpdateClusterConfig = "eks:UpdateClusterConfig";
	/** [Write] eks:UpdateClusterVersion */
	static readonly UpdateClusterVersion = "eks:UpdateClusterVersion";
	/** [Write] eks:UpdateEksAnywhereSubscription */
	static readonly UpdateEksAnywhereSubscription =
		"eks:UpdateEksAnywhereSubscription";
	/** [Write] eks:UpdateNodegroupConfig */
	static readonly UpdateNodegroupConfig = "eks:UpdateNodegroupConfig";
	/** [Write] eks:UpdateNodegroupVersion */
	static readonly UpdateNodegroupVersion = "eks:UpdateNodegroupVersion";
	/** [Write] eks:UpdatePodIdentityAssociation */
	static readonly UpdatePodIdentityAssociation =
		"eks:UpdatePodIdentityAssociation";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EKSActions.AccessKubernetesApi,
		EKSActions.DescribeAccessEntry,
		EKSActions.DescribeAddon,
		EKSActions.DescribeAddonConfiguration,
		EKSActions.DescribeAddonVersions,
		EKSActions.DescribeCapability,
		EKSActions.DescribeCertificateAuthority,
		EKSActions.DescribeCluster,
		EKSActions.DescribeClusterVersions,
		EKSActions.DescribeEksAnywhereSubscription,
		EKSActions.DescribeFargateProfile,
		EKSActions.DescribeIdentityProviderConfig,
		EKSActions.DescribeInsight,
		EKSActions.DescribeInsightsRefresh,
		EKSActions.DescribeNodegroup,
		EKSActions.DescribePodIdentityAssociation,
		EKSActions.DescribeUpdate,
		EKSActions.ListDashboardData,
		EKSActions.ListDashboardResources,
		EKSActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EKSActions.ActivateCertificateAuthority,
		EKSActions.AssociateAccessPolicy,
		EKSActions.AssociateEncryptionConfig,
		EKSActions.AssociateIdentityProviderConfig,
		EKSActions.CancelUpdate,
		EKSActions.CreateAccessEntry,
		EKSActions.CreateAddon,
		EKSActions.CreateCapability,
		EKSActions.CreateCertificateAuthority,
		EKSActions.CreateCluster,
		EKSActions.CreateEksAnywhereSubscription,
		EKSActions.CreateFargateProfile,
		EKSActions.CreateNodegroup,
		EKSActions.CreatePodIdentityAssociation,
		EKSActions.DeleteAccessEntry,
		EKSActions.DeleteAddon,
		EKSActions.DeleteCapability,
		EKSActions.DeleteCertificateAuthority,
		EKSActions.DeleteCluster,
		EKSActions.DeleteEksAnywhereSubscription,
		EKSActions.DeleteFargateProfile,
		EKSActions.DeleteNodegroup,
		EKSActions.DeletePodIdentityAssociation,
		EKSActions.DeregisterCluster,
		EKSActions.DisassociateAccessPolicy,
		EKSActions.DisassociateIdentityProviderConfig,
		EKSActions.MutateViaKubernetesApi,
		EKSActions.RegisterCluster,
		EKSActions.StartInsightsRefresh,
		EKSActions.UpdateAccessEntry,
		EKSActions.UpdateAddon,
		EKSActions.UpdateCapability,
		EKSActions.UpdateClusterConfig,
		EKSActions.UpdateClusterVersion,
		EKSActions.UpdateEksAnywhereSubscription,
		EKSActions.UpdateNodegroupConfig,
		EKSActions.UpdateNodegroupVersion,
		EKSActions.UpdatePodIdentityAssociation,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EKSActions.ListAccessEntries,
		EKSActions.ListAccessPolicies,
		EKSActions.ListAddons,
		EKSActions.ListAssociatedAccessPolicies,
		EKSActions.ListCapabilities,
		EKSActions.ListCertificateAuthorities,
		EKSActions.ListClusters,
		EKSActions.ListEksAnywhereSubscriptions,
		EKSActions.ListFargateProfiles,
		EKSActions.ListIdentityProviderConfigs,
		EKSActions.ListInsights,
		EKSActions.ListNodegroups,
		EKSActions.ListPodIdentityAssociations,
		EKSActions.ListUpdates,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EKSActions.TagResource,
		EKSActions.UntagResource,
	];
}

/**
 * Properties for building a access-entry ARN.
 */
export interface EKSAccessEntryArnProps {
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
}

/**
 * Parsed components of a access-entry ARN.
 */
export interface EKSAccessEntryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The IamIdentityType component. */
	readonly iamIdentityType: string;
	/** The IamIdentityAccountID component. */
	readonly iamIdentityAccountId: string;
	/** The IamIdentityName component. */
	readonly iamIdentityName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a access-policy ARN.
 */
export interface EKSAccessPolicyArnProps {
	/** The AccessPolicyName component of the ARN. */
	readonly accessPolicyName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a access-policy ARN.
 */
export interface EKSAccessPolicyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The AccessPolicyName component. */
	readonly accessPolicyName: string;
}

/**
 * Properties for building a addon ARN.
 */
export interface EKSAddonArnProps {
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
}

/**
 * Parsed components of a addon ARN.
 */
export interface EKSAddonArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The AddonName component. */
	readonly addonName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a capability ARN.
 */
export interface EKSCapabilityArnProps {
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
}

/**
 * Parsed components of a capability ARN.
 */
export interface EKSCapabilityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The CapabilityType component. */
	readonly capabilityType: string;
	/** The CapabilityName component. */
	readonly capabilityName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a cluster ARN.
 */
export interface EKSClusterArnProps {
	/** The ClusterName component of the ARN. */
	readonly clusterName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a cluster ARN.
 */
export interface EKSClusterArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
}

/**
 * Properties for building a dashboard ARN.
 */
export interface EKSDashboardArnProps {
	/** The DashboardName component of the ARN. */
	readonly dashboardName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a dashboard ARN.
 */
export interface EKSDashboardArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DashboardName component. */
	readonly dashboardName: string;
}

/**
 * Properties for building a eks-anywhere-subscription ARN.
 */
export interface EKSEKSAnywhereSubscriptionArnProps {
	/** The UUID component of the ARN. */
	readonly uuid: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a eks-anywhere-subscription ARN.
 */
export interface EKSEKSAnywhereSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a fargateprofile ARN.
 */
export interface EKSFargateprofileArnProps {
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
}

/**
 * Parsed components of a fargateprofile ARN.
 */
export interface EKSFargateprofileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The FargateProfileName component. */
	readonly fargateProfileName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a identityproviderconfig ARN.
 */
export interface EKSIdentityproviderconfigArnProps {
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
}

/**
 * Parsed components of a identityproviderconfig ARN.
 */
export interface EKSIdentityproviderconfigArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The IdentityProviderType component. */
	readonly identityProviderType: string;
	/** The IdentityProviderConfigName component. */
	readonly identityProviderConfigName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a nodegroup ARN.
 */
export interface EKSNodegroupArnProps {
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
}

/**
 * Parsed components of a nodegroup ARN.
 */
export interface EKSNodegroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The NodegroupName component. */
	readonly nodegroupName: string;
	/** The UUID component. */
	readonly uuid: string;
}

/**
 * Properties for building a podidentityassociation ARN.
 */
export interface EKSPodidentityassociationArnProps {
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
}

/**
 * Parsed components of a podidentityassociation ARN.
 */
export interface EKSPodidentityassociationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ClusterName component. */
	readonly clusterName: string;
	/** The UUID component. */
	readonly uuid: string;
}

const AccessEntryArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):access-entry\/(?<clusterName>[^:/?]+)\/(?<iamIdentityType>[^:/?]+)\/(?<iamIdentityAccountId>[^:/?]+)\/(?<iamIdentityName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const AccessPolicyArnRegex =
	/^arn:(?<partition>[^:]+):eks::aws:cluster-access-policy\/(?<accessPolicyName>[^:/?]+)$/;
const AddonArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):addon\/(?<clusterName>[^:/?]+)\/(?<addonName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const CapabilityArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):capability\/(?<clusterName>[^:/?]+)\/(?<capabilityType>[^:/?]+)\/(?<capabilityName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const ClusterArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):cluster\/(?<clusterName>[^:/?]+)$/;
const DashboardArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):dashboard\/(?<dashboardName>[^:/?]+)$/;
const EKSAnywhereSubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):eks-anywhere-subscription\/(?<uuid>[^:/?]+)$/;
const FargateprofileArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):fargateprofile\/(?<clusterName>[^:/?]+)\/(?<fargateProfileName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const IdentityproviderconfigArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):identityproviderconfig\/(?<clusterName>[^:/?]+)\/(?<identityProviderType>[^:/?]+)\/(?<identityProviderConfigName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const NodegroupArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):nodegroup\/(?<clusterName>[^:/?]+)\/(?<nodegroupName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;
const PodidentityassociationArnRegex =
	/^arn:(?<partition>[^:]+):eks:(?<region>[^:]*):(?<account>[^:]*):podidentityassociation\/(?<clusterName>[^:/?]+)\/(?<uuid>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for eks resources.
 */
export class EKSResources {
	/**
	 * Builds an ARN for the access-entry resource.
	 */
	static accessEntry(props: EKSAccessEntryArnProps): string {
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
	static parseAccessEntryArn(arn: string): EKSAccessEntryArnComponents {
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
	static accessPolicy(props: EKSAccessPolicyArnProps): string {
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
	static parseAccessPolicyArn(arn: string): EKSAccessPolicyArnComponents {
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
	static addon(props: EKSAddonArnProps): string {
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
	static parseAddonArn(arn: string): EKSAddonArnComponents {
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
	static capability(props: EKSCapabilityArnProps): string {
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
	static parseCapabilityArn(arn: string): EKSCapabilityArnComponents {
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
	static cluster(props: EKSClusterArnProps): string {
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
	static parseClusterArn(arn: string): EKSClusterArnComponents {
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
	static dashboard(props: EKSDashboardArnProps): string {
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
	static parseDashboardArn(arn: string): EKSDashboardArnComponents {
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
	static eksAnywhereSubscription(
		props: EKSEKSAnywhereSubscriptionArnProps,
	): string {
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
	static parseEKSAnywhereSubscriptionArn(
		arn: string,
	): EKSEKSAnywhereSubscriptionArnComponents {
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
	static fargateprofile(props: EKSFargateprofileArnProps): string {
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
	static parseFargateprofileArn(arn: string): EKSFargateprofileArnComponents {
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
	static identityproviderconfig(
		props: EKSIdentityproviderconfigArnProps,
	): string {
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
	static parseIdentityproviderconfigArn(
		arn: string,
	): EKSIdentityproviderconfigArnComponents {
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
	static nodegroup(props: EKSNodegroupArnProps): string {
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
	static parseNodegroupArn(arn: string): EKSNodegroupArnComponents {
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
	static podidentityassociation(
		props: EKSPodidentityassociationArnProps,
	): string {
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
	static parsePodidentityassociationArn(
		arn: string,
	): EKSPodidentityassociationArnComponents {
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
	/** IAM actions required for the ActivateCertificateAuthority API call. */
	static readonly ActivateCertificateAuthority: string[] = [
		"eks:ActivateCertificateAuthority",
	];
	/** IAM actions required for the AssociateAccessPolicy API call. */
	static readonly AssociateAccessPolicy: string[] = [
		"eks:AssociateAccessPolicy",
	];
	/** IAM actions required for the AssociateEncryptionConfig API call. */
	static readonly AssociateEncryptionConfig: string[] = [
		"eks:AssociateEncryptionConfig",
	];
	/** IAM actions required for the AssociateIdentityProviderConfig API call. */
	static readonly AssociateIdentityProviderConfig: string[] = [
		"eks:AssociateIdentityProviderConfig",
		"eks:TagResource",
	];
	/** IAM actions required for the CancelUpdate API call. */
	static readonly CancelUpdate: string[] = ["eks:CancelUpdate"];
	/** IAM actions required for the CreateAccessEntry API call. */
	static readonly CreateAccessEntry: string[] = [
		"eks:CreateAccessEntry",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateAddon API call. */
	static readonly CreateAddon: string[] = [
		"eks:CreateAddon",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateCapability API call. */
	static readonly CreateCapability: string[] = [
		"eks:CreateCapability",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateCertificateAuthority API call. */
	static readonly CreateCertificateAuthority: string[] = [
		"eks:CreateCertificateAuthority",
	];
	/** IAM actions required for the CreateCluster API call. */
	static readonly CreateCluster: string[] = [
		"eks:CreateAccessEntry",
		"eks:CreateCluster",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateEksAnywhereSubscription API call. */
	static readonly CreateEksAnywhereSubscription: string[] = [
		"eks:CreateEksAnywhereSubscription",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateFargateProfile API call. */
	static readonly CreateFargateProfile: string[] = [
		"eks:CreateFargateProfile",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreateNodegroup API call. */
	static readonly CreateNodegroup: string[] = [
		"eks:CreateNodegroup",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the CreatePodIdentityAssociation API call. */
	static readonly CreatePodIdentityAssociation: string[] = [
		"eks:CreatePodIdentityAssociation",
		"iam:PassRole",
		"eks:TagResource",
	];
	/** IAM actions required for the DeleteAccessEntry API call. */
	static readonly DeleteAccessEntry: string[] = ["eks:DeleteAccessEntry"];
	/** IAM actions required for the DeleteAddon API call. */
	static readonly DeleteAddon: string[] = ["eks:DeleteAddon"];
	/** IAM actions required for the DeleteCapability API call. */
	static readonly DeleteCapability: string[] = ["eks:DeleteCapability"];
	/** IAM actions required for the DeleteCertificateAuthority API call. */
	static readonly DeleteCertificateAuthority: string[] = [
		"eks:DeleteCertificateAuthority",
	];
	/** IAM actions required for the DeleteCluster API call. */
	static readonly DeleteCluster: string[] = ["eks:DeleteCluster"];
	/** IAM actions required for the DeleteEksAnywhereSubscription API call. */
	static readonly DeleteEksAnywhereSubscription: string[] = [
		"eks:DeleteEksAnywhereSubscription",
	];
	/** IAM actions required for the DeleteFargateProfile API call. */
	static readonly DeleteFargateProfile: string[] = ["eks:DeleteFargateProfile"];
	/** IAM actions required for the DeleteNodegroup API call. */
	static readonly DeleteNodegroup: string[] = ["eks:DeleteNodegroup"];
	/** IAM actions required for the DeletePodIdentityAssociation API call. */
	static readonly DeletePodIdentityAssociation: string[] = [
		"eks:DeletePodIdentityAssociation",
	];
	/** IAM actions required for the DeregisterCluster API call. */
	static readonly DeregisterCluster: string[] = ["eks:DeregisterCluster"];
	/** IAM actions required for the DescribeAccessEntry API call. */
	static readonly DescribeAccessEntry: string[] = ["eks:DescribeAccessEntry"];
	/** IAM actions required for the DescribeAddon API call. */
	static readonly DescribeAddon: string[] = ["eks:DescribeAddon"];
	/** IAM actions required for the DescribeAddonConfiguration API call. */
	static readonly DescribeAddonConfiguration: string[] = [
		"eks:DescribeAddonConfiguration",
	];
	/** IAM actions required for the DescribeAddonVersions API call. */
	static readonly DescribeAddonVersions: string[] = [
		"eks:DescribeAddonVersions",
	];
	/** IAM actions required for the DescribeCapability API call. */
	static readonly DescribeCapability: string[] = ["eks:DescribeCapability"];
	/** IAM actions required for the DescribeCertificateAuthority API call. */
	static readonly DescribeCertificateAuthority: string[] = [
		"eks:DescribeCertificateAuthority",
	];
	/** IAM actions required for the DescribeCluster API call. */
	static readonly DescribeCluster: string[] = ["eks:DescribeCluster"];
	/** IAM actions required for the DescribeClusterVersions API call. */
	static readonly DescribeClusterVersions: string[] = [
		"eks:DescribeClusterVersions",
	];
	/** IAM actions required for the DescribeEksAnywhereSubscription API call. */
	static readonly DescribeEksAnywhereSubscription: string[] = [
		"eks:DescribeEksAnywhereSubscription",
	];
	/** IAM actions required for the DescribeFargateProfile API call. */
	static readonly DescribeFargateProfile: string[] = [
		"eks:DescribeFargateProfile",
	];
	/** IAM actions required for the DescribeIdentityProviderConfig API call. */
	static readonly DescribeIdentityProviderConfig: string[] = [
		"eks:DescribeIdentityProviderConfig",
	];
	/** IAM actions required for the DescribeInsight API call. */
	static readonly DescribeInsight: string[] = ["eks:DescribeInsight"];
	/** IAM actions required for the DescribeInsightsRefresh API call. */
	static readonly DescribeInsightsRefresh: string[] = [
		"eks:DescribeInsightsRefresh",
	];
	/** IAM actions required for the DescribeNodegroup API call. */
	static readonly DescribeNodegroup: string[] = ["eks:DescribeNodegroup"];
	/** IAM actions required for the DescribePodIdentityAssociation API call. */
	static readonly DescribePodIdentityAssociation: string[] = [
		"eks:DescribePodIdentityAssociation",
	];
	/** IAM actions required for the DescribeUpdate API call. */
	static readonly DescribeUpdate: string[] = ["eks:DescribeUpdate"];
	/** IAM actions required for the DisassociateAccessPolicy API call. */
	static readonly DisassociateAccessPolicy: string[] = [
		"eks:DisassociateAccessPolicy",
	];
	/** IAM actions required for the DisassociateIdentityProviderConfig API call. */
	static readonly DisassociateIdentityProviderConfig: string[] = [
		"eks:DisassociateIdentityProviderConfig",
	];
	/** IAM actions required for the ListAccessEntries API call. */
	static readonly ListAccessEntries: string[] = ["eks:ListAccessEntries"];
	/** IAM actions required for the ListAccessPolicies API call. */
	static readonly ListAccessPolicies: string[] = ["eks:ListAccessPolicies"];
	/** IAM actions required for the ListAddons API call. */
	static readonly ListAddons: string[] = ["eks:ListAddons"];
	/** IAM actions required for the ListAssociatedAccessPolicies API call. */
	static readonly ListAssociatedAccessPolicies: string[] = [
		"eks:ListAssociatedAccessPolicies",
	];
	/** IAM actions required for the ListCapabilities API call. */
	static readonly ListCapabilities: string[] = ["eks:ListCapabilities"];
	/** IAM actions required for the ListCertificateAuthorities API call. */
	static readonly ListCertificateAuthorities: string[] = [
		"eks:ListCertificateAuthorities",
	];
	/** IAM actions required for the ListClusters API call. */
	static readonly ListClusters: string[] = ["eks:ListClusters"];
	/** IAM actions required for the ListEksAnywhereSubscriptions API call. */
	static readonly ListEksAnywhereSubscriptions: string[] = [
		"eks:ListEksAnywhereSubscriptions",
	];
	/** IAM actions required for the ListFargateProfiles API call. */
	static readonly ListFargateProfiles: string[] = ["eks:ListFargateProfiles"];
	/** IAM actions required for the ListIdentityProviderConfigs API call. */
	static readonly ListIdentityProviderConfigs: string[] = [
		"eks:ListIdentityProviderConfigs",
	];
	/** IAM actions required for the ListInsights API call. */
	static readonly ListInsights: string[] = ["eks:ListInsights"];
	/** IAM actions required for the ListNodegroups API call. */
	static readonly ListNodegroups: string[] = ["eks:ListNodegroups"];
	/** IAM actions required for the ListPodIdentityAssociations API call. */
	static readonly ListPodIdentityAssociations: string[] = [
		"eks:ListPodIdentityAssociations",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["eks:ListTagsForResource"];
	/** IAM actions required for the ListUpdates API call. */
	static readonly ListUpdates: string[] = ["eks:ListUpdates"];
	/** IAM actions required for the RegisterCluster API call. */
	static readonly RegisterCluster: string[] = [
		"iam:PassRole",
		"eks:RegisterCluster",
		"eks:TagResource",
	];
	/** IAM actions required for the StartInsightsRefresh API call. */
	static readonly StartInsightsRefresh: string[] = ["eks:StartInsightsRefresh"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["eks:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["eks:UntagResource"];
	/** IAM actions required for the UpdateAccessEntry API call. */
	static readonly UpdateAccessEntry: string[] = ["eks:UpdateAccessEntry"];
	/** IAM actions required for the UpdateAddon API call. */
	static readonly UpdateAddon: string[] = ["iam:PassRole", "eks:UpdateAddon"];
	/** IAM actions required for the UpdateCapability API call. */
	static readonly UpdateCapability: string[] = [
		"iam:PassRole",
		"eks:UpdateCapability",
	];
	/** IAM actions required for the UpdateClusterConfig API call. */
	static readonly UpdateClusterConfig: string[] = [
		"eks:CreateAccessEntry",
		"iam:PassRole",
		"eks:UpdateClusterConfig",
	];
	/** IAM actions required for the UpdateClusterVersion API call. */
	static readonly UpdateClusterVersion: string[] = ["eks:UpdateClusterVersion"];
	/** IAM actions required for the UpdateEksAnywhereSubscription API call. */
	static readonly UpdateEksAnywhereSubscription: string[] = [
		"eks:UpdateEksAnywhereSubscription",
	];
	/** IAM actions required for the UpdateNodegroupConfig API call. */
	static readonly UpdateNodegroupConfig: string[] = [
		"eks:UpdateNodegroupConfig",
	];
	/** IAM actions required for the UpdateNodegroupVersion API call. */
	static readonly UpdateNodegroupVersion: string[] = [
		"eks:UpdateNodegroupVersion",
	];
	/** IAM actions required for the UpdatePodIdentityAssociation API call. */
	static readonly UpdatePodIdentityAssociation: string[] = [
		"iam:PassRole",
		"eks:UpdatePodIdentityAssociation",
	];
}

/**
 * Condition key constants and builders for eks.
 */
export class EKSConditions {
	/** Condition keys applicable to the AssociateAccessPolicy action. */
	static readonly AssociateAccessPolicyConditionKeys: string[] = [
		"eks:accessScope",
		"eks:namespaces",
		"eks:policyArn",
	];
	/** Condition keys applicable to the AssociateEncryptionConfig action. */
	static readonly AssociateEncryptionConfigConditionKeys: string[] = [
		"eks:encryptionConfigProviderKeyArns",
	];
	/** Condition keys applicable to the AssociateIdentityProviderConfig action. */
	static readonly AssociateIdentityProviderConfigConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"eks:clientId",
		"eks:issuerUrl",
	];
	/** Condition keys applicable to the CreateAccessEntry action. */
	static readonly CreateAccessEntryConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"eks:accessEntryType",
		"eks:kubernetesGroups",
		"eks:principalArn",
		"eks:username",
	];
	/** Condition keys applicable to the CreateAddon action. */
	static readonly CreateAddonConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCapability action. */
	static readonly CreateCapabilityConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateCluster action. */
	static readonly CreateClusterConditionKeys: string[] = [
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
	static readonly CreateEksAnywhereSubscriptionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFargateProfile action. */
	static readonly CreateFargateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNodegroup action. */
	static readonly CreateNodegroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreatePodIdentityAssociation action. */
	static readonly CreatePodIdentityAssociationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DisassociateAccessPolicy action. */
	static readonly DisassociateAccessPolicyConditionKeys: string[] = [
		"eks:accessScope",
		"eks:namespaces",
		"eks:policyArn",
	];
	/** Condition keys applicable to the RegisterCluster action. */
	static readonly RegisterClusterConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateClusterConfig action. */
	static readonly UpdateClusterConfigConditionKeys: string[] = [
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
	static readonly UpdateClusterVersionConditionKeys: string[] = [
		"eks:kubernetesVersion",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
