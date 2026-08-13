// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/sts.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the sts service.
 */
export class STSActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "sts";

	/** [Write] sts:AssumeRole */
	static readonly AssumeRole = "sts:AssumeRole";
	/** [Write] sts:AssumeRoleWithSAML */
	static readonly AssumeRoleWithSAML = "sts:AssumeRoleWithSAML";
	/** [Write] sts:AssumeRoleWithWebIdentity */
	static readonly AssumeRoleWithWebIdentity = "sts:AssumeRoleWithWebIdentity";
	/** [Write] sts:AssumeRoot */
	static readonly AssumeRoot = "sts:AssumeRoot";
	/** [Write] sts:DecodeAuthorizationMessage */
	static readonly DecodeAuthorizationMessage = "sts:DecodeAuthorizationMessage";
	/** [Read] sts:GetAccessKeyInfo */
	static readonly actionGetAccessKeyInfo = "sts:GetAccessKeyInfo";
	/** [Read] sts:GetCallerIdentity */
	static readonly actionGetCallerIdentity = "sts:GetCallerIdentity";
	/** [Write] sts:GetDelegatedAccessToken */
	static readonly actionGetDelegatedAccessToken = "sts:GetDelegatedAccessToken";
	/** [Write] sts:GetFederationToken */
	static readonly actionGetFederationToken = "sts:GetFederationToken";
	/** [Read] sts:GetServiceBearerToken */
	static readonly actionGetServiceBearerToken = "sts:GetServiceBearerToken";
	/** [Read] sts:GetSessionToken */
	static readonly actionGetSessionToken = "sts:GetSessionToken";
	/** [Write] sts:GetWebIdentityToken */
	static readonly actionGetWebIdentityToken = "sts:GetWebIdentityToken";
	/** [Write] sts:SetContext */
	static readonly actionSetContext = "sts:SetContext";
	/** [Write] sts:SetSourceIdentity */
	static readonly actionSetSourceIdentity = "sts:SetSourceIdentity";
	/** [Tagging] sts:TagGetWebIdentityToken */
	static readonly TagGetWebIdentityToken = "sts:TagGetWebIdentityToken";
	/** [Tagging] sts:TagSession */
	static readonly TagSession = "sts:TagSession";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		STSActions.actionGetAccessKeyInfo,
		STSActions.actionGetCallerIdentity,
		STSActions.actionGetServiceBearerToken,
		STSActions.actionGetSessionToken,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		STSActions.AssumeRole,
		STSActions.AssumeRoleWithSAML,
		STSActions.AssumeRoleWithWebIdentity,
		STSActions.AssumeRoot,
		STSActions.DecodeAuthorizationMessage,
		STSActions.actionGetDelegatedAccessToken,
		STSActions.actionGetFederationToken,
		STSActions.actionGetWebIdentityToken,
		STSActions.actionSetContext,
		STSActions.actionSetSourceIdentity,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		STSActions.TagGetWebIdentityToken,
		STSActions.TagSession,
	];
}

/**
 * Properties for building a context-provider ARN.
 */
export interface STSContextProviderArnProps {
	/** The ContextProviderName component of the ARN. */
	readonly contextProviderName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a context-provider ARN.
 */
export interface STSContextProviderArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ContextProviderName component. */
	readonly contextProviderName: string;
}

/**
 * Properties for building a federated-user ARN.
 */
export interface STSFederatedUserArnProps {
	/** The FederatedUserName component of the ARN. */
	readonly federatedUserName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a federated-user ARN.
 */
export interface STSFederatedUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FederatedUserName component. */
	readonly federatedUserName: string;
}

/**
 * Properties for building a role ARN.
 */
export interface STSRoleArnProps {
	/** The RoleNameWithPath component of the ARN. */
	readonly roleNameWithPath: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a role ARN.
 */
export interface STSRoleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RoleNameWithPath component. */
	readonly roleNameWithPath: string;
}

/**
 * Properties for building a root-user ARN.
 */
export interface STSRootUserArnProps {
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a root-user ARN.
 */
export interface STSRootUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
}

/**
 * Properties for building a self-session ARN.
 */
export interface STSSelfSessionArnProps {
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a self-session ARN.
 */
export interface STSSelfSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
}

const ContextProviderArnRegex =
	/^arn:(?<partition>[^:]+):iam::aws:contextProvider\/(?<contextProviderName>[^:/?]+)$/;
const FederatedUserArnRegex =
	/^arn:(?<partition>[^:]+):sts::(?<account>[^:]*):federated-user\/(?<federatedUserName>[^:/?]+)$/;
const RoleArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):role\/(?<roleNameWithPath>[^:/?]+)$/;
const RootUserArnRegex =
	/^arn:(?<partition>[^:]+):iam::(?<account>[^:]*):root$/;
const SelfSessionArnRegex =
	/^arn:(?<partition>[^:]+):sts::(?<account>[^:]*):self$/;

/**
 * ARN builders, validators, and parsers for sts resources.
 */
export class STSResources {
	/**
	 * Builds an ARN for the context-provider resource.
	 */
	static contextProvider(props: STSContextProviderArnProps): string {
		return `arn:${props.partition ?? "aws"}:iam::aws:contextProvider/${props.contextProviderName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the context-provider resource.
	 */
	static isValidContextProviderArn(arn: string): boolean {
		return ContextProviderArnRegex.test(arn);
	}

	/**
	 * Parses a context-provider ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseContextProviderArn(arn: string): STSContextProviderArnComponents {
		const match = ContextProviderArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid context-provider ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			contextProviderName: match.groups!.contextProviderName,
		};
	}

	/**
	 * Builds an ARN for the federated-user resource.
	 */
	static federatedUser(props: STSFederatedUserArnProps): string {
		return `arn:${props.partition ?? "aws"}:sts::${props.account ?? "*"}:federated-user/${props.federatedUserName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the federated-user resource.
	 */
	static isValidFederatedUserArn(arn: string): boolean {
		return FederatedUserArnRegex.test(arn);
	}

	/**
	 * Parses a federated-user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFederatedUserArn(arn: string): STSFederatedUserArnComponents {
		const match = FederatedUserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid federated-user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			federatedUserName: match.groups!.federatedUserName,
		};
	}

	/**
	 * Builds an ARN for the role resource.
	 */
	static role(props: STSRoleArnProps): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:role/${props.roleNameWithPath}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the role resource.
	 */
	static isValidRoleArn(arn: string): boolean {
		return RoleArnRegex.test(arn);
	}

	/**
	 * Parses a role ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRoleArn(arn: string): STSRoleArnComponents {
		const match = RoleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid role ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			roleNameWithPath: match.groups!.roleNameWithPath,
		};
	}

	/**
	 * Builds an ARN for the root-user resource.
	 */
	static rootUser(props: STSRootUserArnProps): string {
		return `arn:${props.partition ?? "aws"}:iam::${props.account ?? "*"}:root`;
	}

	/**
	 * Validates whether a string is a valid ARN for the root-user resource.
	 */
	static isValidRootUserArn(arn: string): boolean {
		return RootUserArnRegex.test(arn);
	}

	/**
	 * Parses a root-user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRootUserArn(arn: string): STSRootUserArnComponents {
		const match = RootUserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid root-user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
		};
	}

	/**
	 * Builds an ARN for the self-session resource.
	 */
	static selfSession(props: STSSelfSessionArnProps): string {
		return `arn:${props.partition ?? "aws"}:sts::${props.account ?? "*"}:self`;
	}

	/**
	 * Validates whether a string is a valid ARN for the self-session resource.
	 */
	static isValidSelfSessionArn(arn: string): boolean {
		return SelfSessionArnRegex.test(arn);
	}

	/**
	 * Parses a self-session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSelfSessionArn(arn: string): STSSelfSessionArnComponents {
		const match = SelfSessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid self-session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for sts.
 */
export class STSOperations {
	/** IAM actions required for the AssumeRole API call. */
	static readonly AssumeRole: string[] = [
		"sts:AssumeRole",
		"sts:SetContext",
		"sts:SetSourceIdentity",
		"sts:TagSession",
	];
	/** IAM actions required for the AssumeRoleWithSAML API call. */
	static readonly AssumeRoleWithSAML: string[] = [];
	/** IAM actions required for the AssumeRoleWithWebIdentity API call. */
	static readonly AssumeRoleWithWebIdentity: string[] = [];
	/** IAM actions required for the AssumeRoot API call. */
	static readonly AssumeRoot: string[] = ["sts:AssumeRoot"];
	/** IAM actions required for the DecodeAuthorizationMessage API call. */
	static readonly DecodeAuthorizationMessage: string[] = [
		"sts:DecodeAuthorizationMessage",
	];
	/** IAM actions required for the GetAccessKeyInfo API call. */
	static readonly opGetAccessKeyInfo: string[] = ["sts:GetAccessKeyInfo"];
	/** IAM actions required for the GetCallerIdentity API call. */
	static readonly opGetCallerIdentity: string[] = ["sts:GetCallerIdentity"];
	/** IAM actions required for the GetDelegatedAccessToken API call. */
	static readonly opGetDelegatedAccessToken: string[] = [
		"sts:GetDelegatedAccessToken",
	];
	/** IAM actions required for the GetFederationToken API call. */
	static readonly opGetFederationToken: string[] = [
		"sts:GetFederationToken",
		"sts:TagSession",
	];
	/** IAM actions required for the GetSessionToken API call. */
	static readonly opGetSessionToken: string[] = ["sts:GetSessionToken"];
	/** IAM actions required for the GetWebIdentityToken API call. */
	static readonly opGetWebIdentityToken: string[] = [
		"sts:GetWebIdentityToken",
		"sts:TagGetWebIdentityToken",
	];
}

/**
 * Condition key constants and builders for sts.
 */
export class STSConditions {
	/** Condition keys applicable to the AssumeRole action. */
	static readonly AssumeRoleConditionKeys: string[] = [
		"accounts.google.com:aud",
		"accounts.google.com:sub",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cognito-identity.amazonaws.com:amr",
		"cognito-identity.amazonaws.com:aud",
		"cognito-identity.amazonaws.com:sub",
		"graph.facebook.com:app_id",
		"graph.facebook.com:id",
		"iam:ResourceTag/${TagKey}",
		"saml:namequalifier",
		"saml:sub",
		"saml:sub_type",
		"sts:ExternalId",
		"sts:RoleSessionName",
		"sts:SourceIdentity",
		"sts:TransitiveTagKeys",
		"www.amazon.com:app_id",
		"www.amazon.com:user_id",
	];
	/** Condition keys applicable to the AssumeRoleWithSAML action. */
	static readonly AssumeRoleWithSAMLConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"saml:aud",
		"saml:cn",
		"saml:commonName",
		"saml:doc",
		"saml:eduorghomepageuri",
		"saml:eduorgidentityauthnpolicyuri",
		"saml:eduorglegalname",
		"saml:eduorgsuperioruri",
		"saml:eduorgwhitepagesuri",
		"saml:edupersonaffiliation",
		"saml:edupersonassurance",
		"saml:edupersonentitlement",
		"saml:edupersonnickname",
		"saml:edupersonorgdn",
		"saml:edupersonorgunitdn",
		"saml:edupersonprimaryaffiliation",
		"saml:edupersonprimaryorgunitdn",
		"saml:edupersonprincipalname",
		"saml:edupersonscopedaffiliation",
		"saml:edupersontargetedid",
		"saml:givenName",
		"saml:iss",
		"saml:mail",
		"saml:name",
		"saml:namequalifier",
		"saml:organizationStatus",
		"saml:primaryGroupSID",
		"saml:sub",
		"saml:sub_type",
		"saml:surname",
		"saml:uid",
		"saml:x500UniqueIdentifier",
		"sts:RoleSessionName",
		"sts:SourceIdentity",
		"sts:TransitiveTagKeys",
	];
	/** Condition keys applicable to the AssumeRoleWithWebIdentity action. */
	static readonly AssumeRoleWithWebIdentityConditionKeys: string[] = [
		"accounts.google.com:aud",
		"accounts.google.com:google/organization_number",
		"accounts.google.com:oaud",
		"accounts.google.com:sub",
		"agent.${Domain}.buildkite.dev:build_branch",
		"agent.${Domain}.buildkite.dev:cluster_id",
		"agent.${Domain}.buildkite.dev:cluster_name",
		"agent.${Domain}.buildkite.dev:organization_id",
		"agent.${Domain}.buildkite.dev:organization_slug",
		"agent.${Domain}.buildkite.dev:pipeline_id",
		"agent.${Domain}.buildkite.dev:pipeline_slug",
		"agent.${Domain}.buildkite.site:build_branch",
		"agent.${Domain}.buildkite.site:cluster_id",
		"agent.${Domain}.buildkite.site:cluster_name",
		"agent.${Domain}.buildkite.site:organization_id",
		"agent.${Domain}.buildkite.site:organization_slug",
		"agent.${Domain}.buildkite.site:pipeline_id",
		"agent.${Domain}.buildkite.site:pipeline_slug",
		"agent.buildkite.com:build_branch",
		"agent.buildkite.com:cluster_id",
		"agent.buildkite.com:cluster_name",
		"agent.buildkite.com:organization_id",
		"agent.buildkite.com:organization_slug",
		"agent.buildkite.com:pipeline_id",
		"agent.buildkite.com:pipeline_slug",
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"cognito-identity.amazonaws.com:amr",
		"cognito-identity.amazonaws.com:aud",
		"cognito-identity.amazonaws.com:sub",
		"github.com/enterprises/${EnterpriseName}:actor",
		"github.com/enterprises/${EnterpriseName}:actor_id",
		"github.com/enterprises/${EnterpriseName}:enterprise_id",
		"github.com/enterprises/${EnterpriseName}:environment",
		"github.com/enterprises/${EnterpriseName}:job_workflow_ref",
		"github.com/enterprises/${EnterpriseName}:ref",
		"github.com/enterprises/${EnterpriseName}:repository",
		"github.com/enterprises/${EnterpriseName}:repository_id",
		"github.com/enterprises/${EnterpriseName}:repository_owner_id",
		"github.com/enterprises/${EnterpriseName}:workflow",
		"gitlab.com:namespace_id",
		"gitlab.com:pipeline_source",
		"gitlab.com:project_id",
		"gitlab.com:ref_protected",
		"gitlab.com:runner_environment",
		"gitlab.com:user_access_level",
		"gitlab.com:user_email",
		"gitlab.com:user_id",
		"gitlab.com:user_login",
		"graph.facebook.com:app_id",
		"graph.facebook.com:id",
		"idcs-${OciUniqueIdentifier}.identity.oraclecloud.com:rpst_id",
		"oidc.circleci.com/org/${OrgId}:oidc.circleci.com/project-id",
		"sts:RoleAuthorizedByIdp",
		"sts:RoleSessionName",
		"sts:SourceIdentity",
		"sts:TransitiveTagKeys",
		"token.actions.${Domain}.ghe.com:actor",
		"token.actions.${Domain}.ghe.com:actor_id",
		"token.actions.${Domain}.ghe.com:enterprise_id",
		"token.actions.${Domain}.ghe.com:environment",
		"token.actions.${Domain}.ghe.com:job_workflow_ref",
		"token.actions.${Domain}.ghe.com:ref",
		"token.actions.${Domain}.ghe.com:repository",
		"token.actions.${Domain}.ghe.com:repository_id",
		"token.actions.${Domain}.ghe.com:repository_owner_id",
		"token.actions.${Domain}.ghe.com:workflow",
		"token.actions.githubusercontent.com/${SubPath}:actor",
		"token.actions.githubusercontent.com/${SubPath}:actor_id",
		"token.actions.githubusercontent.com/${SubPath}:enterprise_id",
		"token.actions.githubusercontent.com/${SubPath}:environment",
		"token.actions.githubusercontent.com/${SubPath}:job_workflow_ref",
		"token.actions.githubusercontent.com/${SubPath}:ref",
		"token.actions.githubusercontent.com/${SubPath}:repository",
		"token.actions.githubusercontent.com/${SubPath}:repository_id",
		"token.actions.githubusercontent.com/${SubPath}:repository_owner_id",
		"token.actions.githubusercontent.com/${SubPath}:workflow",
		"token.actions.githubusercontent.com:actor",
		"token.actions.githubusercontent.com:actor_id",
		"token.actions.githubusercontent.com:enterprise_id",
		"token.actions.githubusercontent.com:environment",
		"token.actions.githubusercontent.com:job_workflow_ref",
		"token.actions.githubusercontent.com:ref",
		"token.actions.githubusercontent.com:repository",
		"token.actions.githubusercontent.com:repository_id",
		"token.actions.githubusercontent.com:repository_owner_id",
		"token.actions.githubusercontent.com:workflow",
		"www.amazon.com:app_id",
		"www.amazon.com:user_id",
	];
	/** Condition keys applicable to the AssumeRoot action. */
	static readonly AssumeRootConditionKeys: string[] = ["sts:TaskPolicyArn"];
	/** Condition keys applicable to the GetFederationToken action. */
	static readonly actionGetFederationTokenConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetServiceBearerToken action. */
	static readonly actionGetServiceBearerTokenConditionKeys: string[] = [
		"sts:AWSServiceName",
		"sts:DurationSeconds",
	];
	/** Condition keys applicable to the GetWebIdentityToken action. */
	static readonly actionGetWebIdentityTokenConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"sts:DurationSeconds",
		"sts:IdentityTokenAudience",
		"sts:SigningAlgorithm",
	];
	/** Condition keys applicable to the SetContext action. */
	static readonly actionSetContextConditionKeys: string[] = [
		"sts:RequestContext/${ContextKey}",
		"sts:RequestContextProviders",
	];
	/** Condition keys applicable to the SetSourceIdentity action. */
	static readonly actionSetSourceIdentityConditionKeys: string[] = [
		"sts:SourceIdentity",
	];
	/** Condition keys applicable to the TagGetWebIdentityToken action. */
	static readonly TagGetWebIdentityTokenConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagSession action. */
	static readonly TagSessionConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"saml:aud",
		"sts:TransitiveTagKeys",
	];

	/** Condition key: accounts.google.com:aud (String) */
	static readonly AUD = "accounts.google.com:aud";
	/** Condition key: accounts.google.com:google/organization_number (Numeric) */
	static readonly GOOGLE_ORGANIZATION_NUMBER =
		"accounts.google.com:google/organization_number";
	/** Condition key: accounts.google.com:oaud (String) */
	static readonly OAUD = "accounts.google.com:oaud";
	/** Condition key: accounts.google.com:sub (String) */
	static readonly SUB = "accounts.google.com:sub";
	/** Condition key: agent.${Domain}.buildkite.dev:build_branch (String) */
	static readonly BUILD_BRANCH = "agent.${Domain}.buildkite.dev:build_branch";
	/** Condition key: agent.${Domain}.buildkite.dev:cluster_id (String) */
	static readonly CLUSTER_ID = "agent.${Domain}.buildkite.dev:cluster_id";
	/** Condition key: agent.${Domain}.buildkite.dev:cluster_name (String) */
	static readonly CLUSTER_NAME = "agent.${Domain}.buildkite.dev:cluster_name";
	/** Condition key: agent.${Domain}.buildkite.dev:organization_id (String) */
	static readonly ORGANIZATION_ID =
		"agent.${Domain}.buildkite.dev:organization_id";
	/** Condition key: agent.${Domain}.buildkite.dev:organization_slug (String) */
	static readonly ORGANIZATION_SLUG =
		"agent.${Domain}.buildkite.dev:organization_slug";
	/** Condition key: agent.${Domain}.buildkite.dev:pipeline_id (String) */
	static readonly PIPELINE_ID = "agent.${Domain}.buildkite.dev:pipeline_id";
	/** Condition key: agent.${Domain}.buildkite.dev:pipeline_slug (String) */
	static readonly PIPELINE_SLUG = "agent.${Domain}.buildkite.dev:pipeline_slug";
	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: cognito-identity.amazonaws.com:amr (String) */
	static readonly AMR = "cognito-identity.amazonaws.com:amr";
	/** Condition key: github.com/enterprises/${EnterpriseName}:actor (String) */
	static readonly ACTOR = "github.com/enterprises/${EnterpriseName}:actor";
	/** Condition key: github.com/enterprises/${EnterpriseName}:actor_id (String) */
	static readonly ACTOR_ID =
		"github.com/enterprises/${EnterpriseName}:actor_id";
	/** Condition key: github.com/enterprises/${EnterpriseName}:enterprise_id (String) */
	static readonly ENTERPRISE_ID =
		"github.com/enterprises/${EnterpriseName}:enterprise_id";
	/** Condition key: github.com/enterprises/${EnterpriseName}:environment (String) */
	static readonly ENVIRONMENT =
		"github.com/enterprises/${EnterpriseName}:environment";
	/** Condition key: github.com/enterprises/${EnterpriseName}:job_workflow_ref (String) */
	static readonly JOB_WORKFLOW_REF =
		"github.com/enterprises/${EnterpriseName}:job_workflow_ref";
	/** Condition key: github.com/enterprises/${EnterpriseName}:ref (String) */
	static readonly REF = "github.com/enterprises/${EnterpriseName}:ref";
	/** Condition key: github.com/enterprises/${EnterpriseName}:repository (String) */
	static readonly REPOSITORY =
		"github.com/enterprises/${EnterpriseName}:repository";
	/** Condition key: github.com/enterprises/${EnterpriseName}:repository_id (String) */
	static readonly REPOSITORY_ID =
		"github.com/enterprises/${EnterpriseName}:repository_id";
	/** Condition key: github.com/enterprises/${EnterpriseName}:repository_owner_id (String) */
	static readonly REPOSITORY_OWNER_ID =
		"github.com/enterprises/${EnterpriseName}:repository_owner_id";
	/** Condition key: github.com/enterprises/${EnterpriseName}:workflow (String) */
	static readonly WORKFLOW =
		"github.com/enterprises/${EnterpriseName}:workflow";
	/** Condition key: gitlab.com:namespace_id (String) */
	static readonly NAMESPACE_ID = "gitlab.com:namespace_id";
	/** Condition key: gitlab.com:pipeline_source (String) */
	static readonly PIPELINE_SOURCE = "gitlab.com:pipeline_source";
	/** Condition key: gitlab.com:project_id (String) */
	static readonly PROJECT_ID = "gitlab.com:project_id";
	/** Condition key: gitlab.com:ref_protected (String) */
	static readonly REF_PROTECTED = "gitlab.com:ref_protected";
	/** Condition key: gitlab.com:runner_environment (String) */
	static readonly RUNNER_ENVIRONMENT = "gitlab.com:runner_environment";
	/** Condition key: gitlab.com:user_access_level (String) */
	static readonly USER_ACCESS_LEVEL = "gitlab.com:user_access_level";
	/** Condition key: gitlab.com:user_email (String) */
	static readonly USER_EMAIL = "gitlab.com:user_email";
	/** Condition key: gitlab.com:user_id (String) */
	static readonly USER_ID = "gitlab.com:user_id";
	/** Condition key: gitlab.com:user_login (String) */
	static readonly USER_LOGIN = "gitlab.com:user_login";
	/** Condition key: graph.facebook.com:app_id (String) */
	static readonly APP_ID = "graph.facebook.com:app_id";
	/** Condition key: graph.facebook.com:id (String) */
	static readonly ID = "graph.facebook.com:id";
	/** Condition key: iam:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "iam:ResourceTag/${TagKey}";
	/** Condition key: idcs-${OciUniqueIdentifier}.identity.oraclecloud.com:rpst_id (String) */
	static readonly RPST_ID =
		"idcs-${OciUniqueIdentifier}.identity.oraclecloud.com:rpst_id";
	/** Condition key: oidc.circleci.com/org/${OrgId}:oidc.circleci.com/project-id (String) */
	static readonly OIDC_CIRCLECI_COM_PROJECT_ID =
		"oidc.circleci.com/org/${OrgId}:oidc.circleci.com/project-id";
	/** Condition key: saml:cn (ArrayOfString) */
	static readonly CN = "saml:cn";
	/** Condition key: saml:commonName (String) */
	static readonly COMMON_NAME = "saml:commonName";
	/** Condition key: saml:doc (String) */
	static readonly DOC = "saml:doc";
	/** Condition key: saml:eduorghomepageuri (ArrayOfString) */
	static readonly EDUORGHOMEPAGEURI = "saml:eduorghomepageuri";
	/** Condition key: saml:eduorgidentityauthnpolicyuri (ArrayOfString) */
	static readonly EDUORGIDENTITYAUTHNPOLICYURI =
		"saml:eduorgidentityauthnpolicyuri";
	/** Condition key: saml:eduorglegalname (ArrayOfString) */
	static readonly EDUORGLEGALNAME = "saml:eduorglegalname";
	/** Condition key: saml:eduorgsuperioruri (ArrayOfString) */
	static readonly EDUORGSUPERIORURI = "saml:eduorgsuperioruri";
	/** Condition key: saml:eduorgwhitepagesuri (ArrayOfString) */
	static readonly EDUORGWHITEPAGESURI = "saml:eduorgwhitepagesuri";
	/** Condition key: saml:edupersonaffiliation (ArrayOfString) */
	static readonly EDUPERSONAFFILIATION = "saml:edupersonaffiliation";
	/** Condition key: saml:edupersonassurance (ArrayOfString) */
	static readonly EDUPERSONASSURANCE = "saml:edupersonassurance";
	/** Condition key: saml:edupersonentitlement (ArrayOfString) */
	static readonly EDUPERSONENTITLEMENT = "saml:edupersonentitlement";
	/** Condition key: saml:edupersonnickname (ArrayOfString) */
	static readonly EDUPERSONNICKNAME = "saml:edupersonnickname";
	/** Condition key: saml:edupersonorgdn (String) */
	static readonly EDUPERSONORGDN = "saml:edupersonorgdn";
	/** Condition key: saml:edupersonorgunitdn (ArrayOfString) */
	static readonly EDUPERSONORGUNITDN = "saml:edupersonorgunitdn";
	/** Condition key: saml:edupersonprimaryaffiliation (String) */
	static readonly EDUPERSONPRIMARYAFFILIATION =
		"saml:edupersonprimaryaffiliation";
	/** Condition key: saml:edupersonprimaryorgunitdn (String) */
	static readonly EDUPERSONPRIMARYORGUNITDN = "saml:edupersonprimaryorgunitdn";
	/** Condition key: saml:edupersonprincipalname (String) */
	static readonly EDUPERSONPRINCIPALNAME = "saml:edupersonprincipalname";
	/** Condition key: saml:edupersonscopedaffiliation (ArrayOfString) */
	static readonly EDUPERSONSCOPEDAFFILIATION =
		"saml:edupersonscopedaffiliation";
	/** Condition key: saml:edupersontargetedid (ArrayOfString) */
	static readonly EDUPERSONTARGETEDID = "saml:edupersontargetedid";
	/** Condition key: saml:givenName (String) */
	static readonly GIVEN_NAME = "saml:givenName";
	/** Condition key: saml:iss (String) */
	static readonly ISS = "saml:iss";
	/** Condition key: saml:mail (String) */
	static readonly MAIL = "saml:mail";
	/** Condition key: saml:name (String) */
	static readonly NAME = "saml:name";
	/** Condition key: saml:namequalifier (String) */
	static readonly NAMEQUALIFIER = "saml:namequalifier";
	/** Condition key: saml:organizationStatus (String) */
	static readonly ORGANIZATION_STATUS = "saml:organizationStatus";
	/** Condition key: saml:primaryGroupSID (String) */
	static readonly PRIMARY_GROUP_SID = "saml:primaryGroupSID";
	/** Condition key: saml:sub_type (String) */
	static readonly SUB_TYPE = "saml:sub_type";
	/** Condition key: saml:surname (String) */
	static readonly SURNAME = "saml:surname";
	/** Condition key: saml:uid (String) */
	static readonly UID = "saml:uid";
	/** Condition key: saml:x500UniqueIdentifier (String) */
	static readonly X500_UNIQUE_IDENTIFIER = "saml:x500UniqueIdentifier";
	/** Condition key: sts:AWSServiceName (String) */
	static readonly AWS_SERVICE_NAME = "sts:AWSServiceName";
	/** Condition key: sts:DurationSeconds (Numeric) */
	static readonly DURATION_SECONDS = "sts:DurationSeconds";
	/** Condition key: sts:ExternalId (String) */
	static readonly EXTERNAL_ID = "sts:ExternalId";
	/** Condition key: sts:IdentityTokenAudience (ArrayOfString) */
	static readonly IDENTITY_TOKEN_AUDIENCE = "sts:IdentityTokenAudience";
	/** Condition key: sts:RequestContext/${ContextKey} (String) */
	static readonly REQUEST_CONTEXT = "sts:RequestContext/${ContextKey}";
	/** Condition key: sts:RequestContextProviders (ArrayOfARN) */
	static readonly REQUEST_CONTEXT_PROVIDERS = "sts:RequestContextProviders";
	/** Condition key: sts:RoleAuthorizedByIdp (Bool) */
	static readonly ROLE_AUTHORIZED_BY_IDP = "sts:RoleAuthorizedByIdp";
	/** Condition key: sts:RoleSessionName (String) */
	static readonly ROLE_SESSION_NAME = "sts:RoleSessionName";
	/** Condition key: sts:SigningAlgorithm (String) */
	static readonly SIGNING_ALGORITHM = "sts:SigningAlgorithm";
	/** Condition key: sts:SourceIdentity (String) */
	static readonly SOURCE_IDENTITY = "sts:SourceIdentity";
	/** Condition key: sts:TaskPolicyArn (ARN) */
	static readonly TASK_POLICY_ARN = "sts:TaskPolicyArn";
	/** Condition key: sts:TransitiveTagKeys (ArrayOfString) */
	static readonly TRANSITIVE_TAG_KEYS = "sts:TransitiveTagKeys";

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
	 * Generates a condition block for `sts:AWSServiceName`.
	 */
	static awsServiceName(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sts:AWSServiceName": value } };
	}

	/**
	 * Generates a condition block for `sts:DurationSeconds`.
	 */
	static durationSeconds(
		value: number,
	): Record<string, Record<string, number>> {
		return { NumericEquals: { "sts:DurationSeconds": value } };
	}

	/**
	 * Generates a condition block for `sts:ExternalId`.
	 */
	static externalId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sts:ExternalId": value } };
	}

	/**
	 * Generates a condition block for `sts:IdentityTokenAudience`.
	 */
	static identityTokenAudience(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "sts:IdentityTokenAudience": values },
		};
	}

	/**
	 * Generates a condition block for `sts:RequestContext/${ContextKey}`.
	 */
	static requestContext(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sts:RequestContext/${ContextKey}": value } };
	}

	/**
	 * Generates a condition block for `sts:RequestContextProviders`.
	 */
	static requestContextProviders(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:ArnEquals": { "sts:RequestContextProviders": values },
		};
	}

	/**
	 * Generates a condition block for `sts:RoleAuthorizedByIdp`.
	 */
	static roleAuthorizedByIdp(
		value: boolean,
	): Record<string, Record<string, boolean>> {
		return { Bool: { "sts:RoleAuthorizedByIdp": value } };
	}

	/**
	 * Generates a condition block for `sts:RoleSessionName`.
	 */
	static roleSessionName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sts:RoleSessionName": value } };
	}

	/**
	 * Generates a condition block for `sts:SigningAlgorithm`.
	 */
	static signingAlgorithm(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "sts:SigningAlgorithm": value } };
	}

	/**
	 * Generates a condition block for `sts:SourceIdentity`.
	 */
	static sourceIdentity(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "sts:SourceIdentity": value } };
	}

	/**
	 * Generates a condition block for `sts:TaskPolicyArn`.
	 */
	static taskPolicyARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "sts:TaskPolicyArn": value } };
	}

	/**
	 * Generates a condition block for `sts:TransitiveTagKeys`.
	 */
	static transitiveTagKeys(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "sts:TransitiveTagKeys": values } };
	}
}
