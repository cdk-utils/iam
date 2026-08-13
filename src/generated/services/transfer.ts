// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/transfer.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the transfer service.
 */
export class TransferActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "transfer";

	/** [Write] transfer:CreateAccess */
	static readonly CreateAccess = "transfer:CreateAccess";
	/** [Write] transfer:CreateAgreement */
	static readonly CreateAgreement = "transfer:CreateAgreement";
	/** [Write] transfer:CreateConnector */
	static readonly CreateConnector = "transfer:CreateConnector";
	/** [Write] transfer:CreateProfile */
	static readonly CreateProfile = "transfer:CreateProfile";
	/** [Write] transfer:CreateServer */
	static readonly CreateServer = "transfer:CreateServer";
	/** [Write] transfer:CreateUser */
	static readonly CreateUser = "transfer:CreateUser";
	/** [Write] transfer:CreateWebApp */
	static readonly CreateWebApp = "transfer:CreateWebApp";
	/** [Write] transfer:CreateWorkflow */
	static readonly CreateWorkflow = "transfer:CreateWorkflow";
	/** [Write] transfer:DeleteAccess */
	static readonly DeleteAccess = "transfer:DeleteAccess";
	/** [Write] transfer:DeleteAgreement */
	static readonly DeleteAgreement = "transfer:DeleteAgreement";
	/** [Write] transfer:DeleteCertificate */
	static readonly DeleteCertificate = "transfer:DeleteCertificate";
	/** [Write] transfer:DeleteConnector */
	static readonly DeleteConnector = "transfer:DeleteConnector";
	/** [Write] transfer:DeleteHostKey */
	static readonly DeleteHostKey = "transfer:DeleteHostKey";
	/** [Write] transfer:DeleteProfile */
	static readonly DeleteProfile = "transfer:DeleteProfile";
	/** [Write] transfer:DeleteServer */
	static readonly DeleteServer = "transfer:DeleteServer";
	/** [Write] transfer:DeleteSshPublicKey */
	static readonly DeleteSshPublicKey = "transfer:DeleteSshPublicKey";
	/** [Write] transfer:DeleteUser */
	static readonly DeleteUser = "transfer:DeleteUser";
	/** [Write] transfer:DeleteWebApp */
	static readonly DeleteWebApp = "transfer:DeleteWebApp";
	/** [Write] transfer:DeleteWebAppCustomization */
	static readonly DeleteWebAppCustomization =
		"transfer:DeleteWebAppCustomization";
	/** [Write] transfer:DeleteWorkflow */
	static readonly DeleteWorkflow = "transfer:DeleteWorkflow";
	/** [Read] transfer:DescribeAccess */
	static readonly DescribeAccess = "transfer:DescribeAccess";
	/** [Read] transfer:DescribeAgreement */
	static readonly DescribeAgreement = "transfer:DescribeAgreement";
	/** [Read] transfer:DescribeCertificate */
	static readonly DescribeCertificate = "transfer:DescribeCertificate";
	/** [Read] transfer:DescribeConnector */
	static readonly DescribeConnector = "transfer:DescribeConnector";
	/** [Read] transfer:DescribeExecution */
	static readonly DescribeExecution = "transfer:DescribeExecution";
	/** [Read] transfer:DescribeHostKey */
	static readonly DescribeHostKey = "transfer:DescribeHostKey";
	/** [Read] transfer:DescribeProfile */
	static readonly DescribeProfile = "transfer:DescribeProfile";
	/** [Read] transfer:DescribeSecurityPolicy */
	static readonly DescribeSecurityPolicy = "transfer:DescribeSecurityPolicy";
	/** [Read] transfer:DescribeServer */
	static readonly DescribeServer = "transfer:DescribeServer";
	/** [Read] transfer:DescribeUser */
	static readonly DescribeUser = "transfer:DescribeUser";
	/** [Read] transfer:DescribeWebApp */
	static readonly DescribeWebApp = "transfer:DescribeWebApp";
	/** [Read] transfer:DescribeWebAppCustomization */
	static readonly DescribeWebAppCustomization =
		"transfer:DescribeWebAppCustomization";
	/** [Read] transfer:DescribeWorkflow */
	static readonly DescribeWorkflow = "transfer:DescribeWorkflow";
	/** [Write] transfer:ImportCertificate */
	static readonly ImportCertificate = "transfer:ImportCertificate";
	/** [Write] transfer:ImportHostKey */
	static readonly ImportHostKey = "transfer:ImportHostKey";
	/** [Write] transfer:ImportSshPublicKey */
	static readonly ImportSshPublicKey = "transfer:ImportSshPublicKey";
	/** [Read] transfer:ListAccesses */
	static readonly ListAccesses = "transfer:ListAccesses";
	/** [Read] transfer:ListAgreements */
	static readonly ListAgreements = "transfer:ListAgreements";
	/** [Read] transfer:ListCertificates */
	static readonly ListCertificates = "transfer:ListCertificates";
	/** [Read] transfer:ListConnectors */
	static readonly ListConnectors = "transfer:ListConnectors";
	/** [Read] transfer:ListExecutions */
	static readonly ListExecutions = "transfer:ListExecutions";
	/** [Read] transfer:ListFileTransferResults */
	static readonly ListFileTransferResults = "transfer:ListFileTransferResults";
	/** [Read] transfer:ListHostKeys */
	static readonly ListHostKeys = "transfer:ListHostKeys";
	/** [Read] transfer:ListProfiles */
	static readonly ListProfiles = "transfer:ListProfiles";
	/** [List] transfer:ListSecurityPolicies */
	static readonly ListSecurityPolicies = "transfer:ListSecurityPolicies";
	/** [List] transfer:ListServers */
	static readonly ListServers = "transfer:ListServers";
	/** [Read] transfer:ListTagsForResource */
	static readonly ListTagsForResource = "transfer:ListTagsForResource";
	/** [List] transfer:ListUsers */
	static readonly ListUsers = "transfer:ListUsers";
	/** [List] transfer:ListWebApps */
	static readonly ListWebApps = "transfer:ListWebApps";
	/** [List] transfer:ListWorkflows */
	static readonly ListWorkflows = "transfer:ListWorkflows";
	/** [Write] transfer:SendWorkflowStepState */
	static readonly SendWorkflowStepState = "transfer:SendWorkflowStepState";
	/** [Write] transfer:StartDirectoryListing */
	static readonly StartDirectoryListing = "transfer:StartDirectoryListing";
	/** [Write] transfer:StartFileTransfer */
	static readonly StartFileTransfer = "transfer:StartFileTransfer";
	/** [Write] transfer:StartRemoteDelete */
	static readonly StartRemoteDelete = "transfer:StartRemoteDelete";
	/** [Write] transfer:StartRemoteMove */
	static readonly StartRemoteMove = "transfer:StartRemoteMove";
	/** [Write] transfer:StartServer */
	static readonly StartServer = "transfer:StartServer";
	/** [Write] transfer:StopServer */
	static readonly StopServer = "transfer:StopServer";
	/** [Tagging] transfer:TagResource */
	static readonly TagResource = "transfer:TagResource";
	/** [Write] transfer:TestConnection */
	static readonly TestConnection = "transfer:TestConnection";
	/** [Read] transfer:TestIdentityProvider */
	static readonly TestIdentityProvider = "transfer:TestIdentityProvider";
	/** [Tagging] transfer:UntagResource */
	static readonly UntagResource = "transfer:UntagResource";
	/** [Write] transfer:UpdateAccess */
	static readonly UpdateAccess = "transfer:UpdateAccess";
	/** [Write] transfer:UpdateAgreement */
	static readonly UpdateAgreement = "transfer:UpdateAgreement";
	/** [Write] transfer:UpdateCertificate */
	static readonly UpdateCertificate = "transfer:UpdateCertificate";
	/** [Write] transfer:UpdateConnector */
	static readonly UpdateConnector = "transfer:UpdateConnector";
	/** [Write] transfer:UpdateHostKey */
	static readonly UpdateHostKey = "transfer:UpdateHostKey";
	/** [Write] transfer:UpdateProfile */
	static readonly UpdateProfile = "transfer:UpdateProfile";
	/** [Write] transfer:UpdateServer */
	static readonly UpdateServer = "transfer:UpdateServer";
	/** [Write] transfer:UpdateUser */
	static readonly UpdateUser = "transfer:UpdateUser";
	/** [Write] transfer:UpdateWebApp */
	static readonly UpdateWebApp = "transfer:UpdateWebApp";
	/** [Write] transfer:UpdateWebAppCustomization */
	static readonly UpdateWebAppCustomization =
		"transfer:UpdateWebAppCustomization";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TransferActions.DescribeAccess,
		TransferActions.DescribeAgreement,
		TransferActions.DescribeCertificate,
		TransferActions.DescribeConnector,
		TransferActions.DescribeExecution,
		TransferActions.DescribeHostKey,
		TransferActions.DescribeProfile,
		TransferActions.DescribeSecurityPolicy,
		TransferActions.DescribeServer,
		TransferActions.DescribeUser,
		TransferActions.DescribeWebApp,
		TransferActions.DescribeWebAppCustomization,
		TransferActions.DescribeWorkflow,
		TransferActions.ListAccesses,
		TransferActions.ListAgreements,
		TransferActions.ListCertificates,
		TransferActions.ListConnectors,
		TransferActions.ListExecutions,
		TransferActions.ListFileTransferResults,
		TransferActions.ListHostKeys,
		TransferActions.ListProfiles,
		TransferActions.ListTagsForResource,
		TransferActions.TestIdentityProvider,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TransferActions.CreateAccess,
		TransferActions.CreateAgreement,
		TransferActions.CreateConnector,
		TransferActions.CreateProfile,
		TransferActions.CreateServer,
		TransferActions.CreateUser,
		TransferActions.CreateWebApp,
		TransferActions.CreateWorkflow,
		TransferActions.DeleteAccess,
		TransferActions.DeleteAgreement,
		TransferActions.DeleteCertificate,
		TransferActions.DeleteConnector,
		TransferActions.DeleteHostKey,
		TransferActions.DeleteProfile,
		TransferActions.DeleteServer,
		TransferActions.DeleteSshPublicKey,
		TransferActions.DeleteUser,
		TransferActions.DeleteWebApp,
		TransferActions.DeleteWebAppCustomization,
		TransferActions.DeleteWorkflow,
		TransferActions.ImportCertificate,
		TransferActions.ImportHostKey,
		TransferActions.ImportSshPublicKey,
		TransferActions.SendWorkflowStepState,
		TransferActions.StartDirectoryListing,
		TransferActions.StartFileTransfer,
		TransferActions.StartRemoteDelete,
		TransferActions.StartRemoteMove,
		TransferActions.StartServer,
		TransferActions.StopServer,
		TransferActions.TestConnection,
		TransferActions.UpdateAccess,
		TransferActions.UpdateAgreement,
		TransferActions.UpdateCertificate,
		TransferActions.UpdateConnector,
		TransferActions.UpdateHostKey,
		TransferActions.UpdateProfile,
		TransferActions.UpdateServer,
		TransferActions.UpdateUser,
		TransferActions.UpdateWebApp,
		TransferActions.UpdateWebAppCustomization,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TransferActions.ListSecurityPolicies,
		TransferActions.ListServers,
		TransferActions.ListUsers,
		TransferActions.ListWebApps,
		TransferActions.ListWorkflows,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TransferActions.TagResource,
		TransferActions.UntagResource,
	];
}

/**
 * Properties for building a agreement ARN.
 */
export interface TransferAgreementArnProps {
	/** The ServerId component of the ARN. */
	readonly serverId: string;
	/** The AgreementId component of the ARN. */
	readonly agreementId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agreement ARN.
 */
export interface TransferAgreementArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerId component. */
	readonly serverId: string;
	/** The AgreementId component. */
	readonly agreementId: string;
}

/**
 * Properties for building a certificate ARN.
 */
export interface TransferCertificateArnProps {
	/** The CertificateId component of the ARN. */
	readonly certificateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a certificate ARN.
 */
export interface TransferCertificateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CertificateId component. */
	readonly certificateId: string;
}

/**
 * Properties for building a connector ARN.
 */
export interface TransferConnectorArnProps {
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
 * Parsed components of a connector ARN.
 */
export interface TransferConnectorArnComponents {
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
 * Properties for building a host-key ARN.
 */
export interface TransferHostKeyArnProps {
	/** The ServerId component of the ARN. */
	readonly serverId: string;
	/** The HostKeyId component of the ARN. */
	readonly hostKeyId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a host-key ARN.
 */
export interface TransferHostKeyArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerId component. */
	readonly serverId: string;
	/** The HostKeyId component. */
	readonly hostKeyId: string;
}

/**
 * Properties for building a profile ARN.
 */
export interface TransferProfileArnProps {
	/** The ProfileId component of the ARN. */
	readonly profileId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a profile ARN.
 */
export interface TransferProfileArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProfileId component. */
	readonly profileId: string;
}

/**
 * Properties for building a server ARN.
 */
export interface TransferServerArnProps {
	/** The ServerId component of the ARN. */
	readonly serverId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a server ARN.
 */
export interface TransferServerArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerId component. */
	readonly serverId: string;
}

/**
 * Properties for building a user ARN.
 */
export interface TransferUserArnProps {
	/** The ServerId component of the ARN. */
	readonly serverId: string;
	/** The UserName component of the ARN. */
	readonly userName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a user ARN.
 */
export interface TransferUserArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ServerId component. */
	readonly serverId: string;
	/** The UserName component. */
	readonly userName: string;
}

/**
 * Properties for building a webapp ARN.
 */
export interface TransferWebappArnProps {
	/** The WebAppId component of the ARN. */
	readonly webAppId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a webapp ARN.
 */
export interface TransferWebappArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WebAppId component. */
	readonly webAppId: string;
}

/**
 * Properties for building a workflow ARN.
 */
export interface TransferWorkflowArnProps {
	/** The WorkflowId component of the ARN. */
	readonly workflowId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workflow ARN.
 */
export interface TransferWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowId component. */
	readonly workflowId: string;
}

const AgreementArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):agreement\/(?<serverId>[^:/?]+)\/(?<agreementId>[^:/?]+)$/;
const CertificateArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):certificate\/(?<certificateId>[^:/?]+)$/;
const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)$/;
const HostKeyArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):host-key\/(?<serverId>[^:/?]+)\/(?<hostKeyId>[^:/?]+)$/;
const ProfileArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<profileId>[^:/?]+)$/;
const ServerArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):server\/(?<serverId>[^:/?]+)$/;
const UserArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):user\/(?<serverId>[^:/?]+)\/(?<userName>[^:/?]+)$/;
const WebappArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):webapp\/(?<webAppId>[^:/?]+)$/;
const WorkflowArnRegex =
	/^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):workflow\/(?<workflowId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for transfer resources.
 */
export class TransferResources {
	/**
	 * Builds an ARN for the agreement resource.
	 */
	static agreement(props: TransferAgreementArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:agreement/${props.serverId}/${props.agreementId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agreement resource.
	 */
	static isValidAgreementArn(arn: string): boolean {
		return AgreementArnRegex.test(arn);
	}

	/**
	 * Parses a agreement ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgreementArn(arn: string): TransferAgreementArnComponents {
		const match = AgreementArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agreement ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serverId: match.groups!.serverId,
			agreementId: match.groups!.agreementId,
		};
	}

	/**
	 * Builds an ARN for the certificate resource.
	 */
	static certificate(props: TransferCertificateArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:certificate/${props.certificateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the certificate resource.
	 */
	static isValidCertificateArn(arn: string): boolean {
		return CertificateArnRegex.test(arn);
	}

	/**
	 * Parses a certificate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCertificateArn(arn: string): TransferCertificateArnComponents {
		const match = CertificateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid certificate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			certificateId: match.groups!.certificateId,
		};
	}

	/**
	 * Builds an ARN for the connector resource.
	 */
	static connector(props: TransferConnectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(arn: string): TransferConnectorArnComponents {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
		};
	}

	/**
	 * Builds an ARN for the host-key resource.
	 */
	static hostKey(props: TransferHostKeyArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:host-key/${props.serverId}/${props.hostKeyId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the host-key resource.
	 */
	static isValidHostKeyArn(arn: string): boolean {
		return HostKeyArnRegex.test(arn);
	}

	/**
	 * Parses a host-key ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHostKeyArn(arn: string): TransferHostKeyArnComponents {
		const match = HostKeyArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid host-key ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serverId: match.groups!.serverId,
			hostKeyId: match.groups!.hostKeyId,
		};
	}

	/**
	 * Builds an ARN for the profile resource.
	 */
	static profile(props: TransferProfileArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.profileId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the profile resource.
	 */
	static isValidProfileArn(arn: string): boolean {
		return ProfileArnRegex.test(arn);
	}

	/**
	 * Parses a profile ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProfileArn(arn: string): TransferProfileArnComponents {
		const match = ProfileArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid profile ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			profileId: match.groups!.profileId,
		};
	}

	/**
	 * Builds an ARN for the server resource.
	 */
	static server(props: TransferServerArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:server/${props.serverId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the server resource.
	 */
	static isValidServerArn(arn: string): boolean {
		return ServerArnRegex.test(arn);
	}

	/**
	 * Parses a server ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseServerArn(arn: string): TransferServerArnComponents {
		const match = ServerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid server ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serverId: match.groups!.serverId,
		};
	}

	/**
	 * Builds an ARN for the user resource.
	 */
	static user(props: TransferUserArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:user/${props.serverId}/${props.userName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the user resource.
	 */
	static isValidUserArn(arn: string): boolean {
		return UserArnRegex.test(arn);
	}

	/**
	 * Parses a user ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseUserArn(arn: string): TransferUserArnComponents {
		const match = UserArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid user ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			serverId: match.groups!.serverId,
			userName: match.groups!.userName,
		};
	}

	/**
	 * Builds an ARN for the webapp resource.
	 */
	static webapp(props: TransferWebappArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:webapp/${props.webAppId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the webapp resource.
	 */
	static isValidWebappArn(arn: string): boolean {
		return WebappArnRegex.test(arn);
	}

	/**
	 * Parses a webapp ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWebappArn(arn: string): TransferWebappArnComponents {
		const match = WebappArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid webapp ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			webAppId: match.groups!.webAppId,
		};
	}

	/**
	 * Builds an ARN for the workflow resource.
	 */
	static workflow(props: TransferWorkflowArnProps): string {
		return `arn:${props.partition ?? "aws"}:transfer:${props.region ?? "*"}:${props.account ?? "*"}:workflow/${props.workflowId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workflow resource.
	 */
	static isValidWorkflowArn(arn: string): boolean {
		return WorkflowArnRegex.test(arn);
	}

	/**
	 * Parses a workflow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkflowArn(arn: string): TransferWorkflowArnComponents {
		const match = WorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowId: match.groups!.workflowId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for transfer.
 */
export class TransferOperations {
	/** IAM actions required for the CreateAccess API call. */
	static readonly CreateAccess: string[] = [
		"transfer:CreateAccess",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAgreement API call. */
	static readonly CreateAgreement: string[] = [
		"transfer:CreateAgreement",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CreateConnector: string[] = [
		"transfer:CreateConnector",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CreateProfile: string[] = [
		"transfer:CreateProfile",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateServer API call. */
	static readonly CreateServer: string[] = [
		"transfer:CreateServer",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [
		"transfer:CreateUser",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateWebApp API call. */
	static readonly CreateWebApp: string[] = [
		"transfer:CreateWebApp",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CreateWorkflow: string[] = [
		"transfer:CreateWorkflow",
		"transfer:TagResource",
	];
	/** IAM actions required for the DeleteAccess API call. */
	static readonly DeleteAccess: string[] = ["transfer:DeleteAccess"];
	/** IAM actions required for the DeleteAgreement API call. */
	static readonly DeleteAgreement: string[] = ["transfer:DeleteAgreement"];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DeleteCertificate: string[] = ["transfer:DeleteCertificate"];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = ["transfer:DeleteConnector"];
	/** IAM actions required for the DeleteHostKey API call. */
	static readonly DeleteHostKey: string[] = ["transfer:DeleteHostKey"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DeleteProfile: string[] = ["transfer:DeleteProfile"];
	/** IAM actions required for the DeleteServer API call. */
	static readonly DeleteServer: string[] = ["transfer:DeleteServer"];
	/** IAM actions required for the DeleteSshPublicKey API call. */
	static readonly DeleteSshPublicKey: string[] = [
		"transfer:DeleteSshPublicKey",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DeleteUser: string[] = ["transfer:DeleteUser"];
	/** IAM actions required for the DeleteWebApp API call. */
	static readonly DeleteWebApp: string[] = ["transfer:DeleteWebApp"];
	/** IAM actions required for the DeleteWebAppCustomization API call. */
	static readonly DeleteWebAppCustomization: string[] = [
		"transfer:DeleteWebAppCustomization",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DeleteWorkflow: string[] = ["transfer:DeleteWorkflow"];
	/** IAM actions required for the DescribeAccess API call. */
	static readonly DescribeAccess: string[] = ["transfer:DescribeAccess"];
	/** IAM actions required for the DescribeAgreement API call. */
	static readonly DescribeAgreement: string[] = ["transfer:DescribeAgreement"];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DescribeCertificate: string[] = [
		"transfer:DescribeCertificate",
	];
	/** IAM actions required for the DescribeConnector API call. */
	static readonly DescribeConnector: string[] = ["transfer:DescribeConnector"];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DescribeExecution: string[] = ["transfer:DescribeExecution"];
	/** IAM actions required for the DescribeHostKey API call. */
	static readonly DescribeHostKey: string[] = ["transfer:DescribeHostKey"];
	/** IAM actions required for the DescribeProfile API call. */
	static readonly DescribeProfile: string[] = ["transfer:DescribeProfile"];
	/** IAM actions required for the DescribeSecurityPolicy API call. */
	static readonly DescribeSecurityPolicy: string[] = [
		"transfer:DescribeSecurityPolicy",
	];
	/** IAM actions required for the DescribeServer API call. */
	static readonly DescribeServer: string[] = ["transfer:DescribeServer"];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DescribeUser: string[] = ["transfer:DescribeUser"];
	/** IAM actions required for the DescribeWebApp API call. */
	static readonly DescribeWebApp: string[] = ["transfer:DescribeWebApp"];
	/** IAM actions required for the DescribeWebAppCustomization API call. */
	static readonly DescribeWebAppCustomization: string[] = [
		"transfer:DescribeWebAppCustomization",
	];
	/** IAM actions required for the DescribeWorkflow API call. */
	static readonly DescribeWorkflow: string[] = ["transfer:DescribeWorkflow"];
	/** IAM actions required for the ImportCertificate API call. */
	static readonly ImportCertificate: string[] = [
		"transfer:ImportCertificate",
		"transfer:TagResource",
	];
	/** IAM actions required for the ImportHostKey API call. */
	static readonly ImportHostKey: string[] = [
		"transfer:ImportHostKey",
		"transfer:TagResource",
	];
	/** IAM actions required for the ImportSshPublicKey API call. */
	static readonly ImportSshPublicKey: string[] = [
		"transfer:ImportSshPublicKey",
	];
	/** IAM actions required for the ListAccesses API call. */
	static readonly ListAccesses: string[] = ["transfer:ListAccesses"];
	/** IAM actions required for the ListAgreements API call. */
	static readonly ListAgreements: string[] = ["transfer:ListAgreements"];
	/** IAM actions required for the ListCertificates API call. */
	static readonly ListCertificates: string[] = ["transfer:ListCertificates"];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = ["transfer:ListConnectors"];
	/** IAM actions required for the ListExecutions API call. */
	static readonly ListExecutions: string[] = ["transfer:ListExecutions"];
	/** IAM actions required for the ListFileTransferResults API call. */
	static readonly ListFileTransferResults: string[] = [
		"transfer:ListFileTransferResults",
	];
	/** IAM actions required for the ListHostKeys API call. */
	static readonly ListHostKeys: string[] = ["transfer:ListHostKeys"];
	/** IAM actions required for the ListProfiles API call. */
	static readonly ListProfiles: string[] = ["transfer:ListProfiles"];
	/** IAM actions required for the ListSecurityPolicies API call. */
	static readonly ListSecurityPolicies: string[] = [
		"transfer:ListSecurityPolicies",
	];
	/** IAM actions required for the ListServers API call. */
	static readonly ListServers: string[] = ["transfer:ListServers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"transfer:ListTagsForResource",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = ["transfer:ListUsers"];
	/** IAM actions required for the ListWebApps API call. */
	static readonly ListWebApps: string[] = ["transfer:ListWebApps"];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly ListWorkflows: string[] = ["transfer:ListWorkflows"];
	/** IAM actions required for the SendWorkflowStepState API call. */
	static readonly SendWorkflowStepState: string[] = [
		"transfer:SendWorkflowStepState",
	];
	/** IAM actions required for the StartDirectoryListing API call. */
	static readonly StartDirectoryListing: string[] = [
		"transfer:StartDirectoryListing",
	];
	/** IAM actions required for the StartFileTransfer API call. */
	static readonly StartFileTransfer: string[] = ["transfer:StartFileTransfer"];
	/** IAM actions required for the StartRemoteDelete API call. */
	static readonly StartRemoteDelete: string[] = ["transfer:StartRemoteDelete"];
	/** IAM actions required for the StartRemoteMove API call. */
	static readonly StartRemoteMove: string[] = ["transfer:StartRemoteMove"];
	/** IAM actions required for the StartServer API call. */
	static readonly StartServer: string[] = ["transfer:StartServer"];
	/** IAM actions required for the StopServer API call. */
	static readonly StopServer: string[] = ["transfer:StopServer"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["transfer:TagResource"];
	/** IAM actions required for the TestConnection API call. */
	static readonly TestConnection: string[] = ["transfer:TestConnection"];
	/** IAM actions required for the TestIdentityProvider API call. */
	static readonly TestIdentityProvider: string[] = [
		"transfer:TestIdentityProvider",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["transfer:UntagResource"];
	/** IAM actions required for the UpdateAccess API call. */
	static readonly UpdateAccess: string[] = [
		"iam:PassRole",
		"transfer:UpdateAccess",
	];
	/** IAM actions required for the UpdateAgreement API call. */
	static readonly UpdateAgreement: string[] = [
		"iam:PassRole",
		"transfer:UpdateAgreement",
	];
	/** IAM actions required for the UpdateCertificate API call. */
	static readonly UpdateCertificate: string[] = ["transfer:UpdateCertificate"];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UpdateConnector: string[] = [
		"iam:PassRole",
		"transfer:UpdateConnector",
	];
	/** IAM actions required for the UpdateHostKey API call. */
	static readonly UpdateHostKey: string[] = ["transfer:UpdateHostKey"];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UpdateProfile: string[] = ["transfer:UpdateProfile"];
	/** IAM actions required for the UpdateServer API call. */
	static readonly UpdateServer: string[] = [
		"iam:PassRole",
		"transfer:UpdateServer",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = [
		"iam:PassRole",
		"transfer:UpdateUser",
	];
	/** IAM actions required for the UpdateWebApp API call. */
	static readonly UpdateWebApp: string[] = [
		"iam:PassRole",
		"transfer:UpdateWebApp",
	];
	/** IAM actions required for the UpdateWebAppCustomization API call. */
	static readonly UpdateWebAppCustomization: string[] = [
		"transfer:UpdateWebAppCustomization",
	];
}

/**
 * Condition key constants and builders for transfer.
 */
export class TransferConditions {
	/** Condition keys applicable to the CreateAgreement action. */
	static readonly CreateAgreementConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CreateConnectorConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transfer:RequestConnectorProtocol",
		"transfer:RequestSecurityPolicyName",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CreateProfileConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServer action. */
	static readonly CreateServerConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transfer:RequestSecurityPolicyName",
		"transfer:RequestServerDomain",
		"transfer:RequestServerEndpointType",
		"transfer:RequestServerProtocols",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CreateUserConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWebApp action. */
	static readonly CreateWebAppConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CreateWorkflowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportCertificate action. */
	static readonly ImportCertificateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportHostKey action. */
	static readonly ImportHostKeyConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateConnector action. */
	static readonly UpdateConnectorConditionKeys: string[] = [
		"transfer:RequestSecurityPolicyName",
	];
	/** Condition keys applicable to the UpdateServer action. */
	static readonly UpdateServerConditionKeys: string[] = [
		"transfer:RequestSecurityPolicyName",
		"transfer:RequestServerEndpointType",
		"transfer:RequestServerProtocols",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: transfer:RequestConnectorProtocol (String) */
	static readonly REQUEST_CONNECTOR_PROTOCOL =
		"transfer:RequestConnectorProtocol";
	/** Condition key: transfer:RequestSecurityPolicyName (String) */
	static readonly REQUEST_SECURITY_POLICY_NAME =
		"transfer:RequestSecurityPolicyName";
	/** Condition key: transfer:RequestServerDomain (String) */
	static readonly REQUEST_SERVER_DOMAIN = "transfer:RequestServerDomain";
	/** Condition key: transfer:RequestServerEndpointType (String) */
	static readonly REQUEST_SERVER_ENDPOINT_TYPE =
		"transfer:RequestServerEndpointType";
	/** Condition key: transfer:RequestServerProtocols (ArrayOfString) */
	static readonly REQUEST_SERVER_PROTOCOLS = "transfer:RequestServerProtocols";

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
	 * Generates a condition block for `transfer:RequestConnectorProtocol`.
	 */
	static requestConnectorProtocol(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "transfer:RequestConnectorProtocol": value } };
	}

	/**
	 * Generates a condition block for `transfer:RequestSecurityPolicyName`.
	 */
	static requestSecurityPolicyName(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "transfer:RequestSecurityPolicyName": value } };
	}

	/**
	 * Generates a condition block for `transfer:RequestServerDomain`.
	 */
	static requestServerDomain(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "transfer:RequestServerDomain": value } };
	}

	/**
	 * Generates a condition block for `transfer:RequestServerEndpointType`.
	 */
	static requestServerEndpointType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "transfer:RequestServerEndpointType": value } };
	}

	/**
	 * Generates a condition block for `transfer:RequestServerProtocols`.
	 */
	static requestServerProtocols(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"transfer:RequestServerProtocols": values,
			},
		};
	}
}
