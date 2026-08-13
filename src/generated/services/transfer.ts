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
	static readonly CREATE_ACCESS = "transfer:CreateAccess";
	/** [Write] transfer:CreateAgreement */
	static readonly CREATE_AGREEMENT = "transfer:CreateAgreement";
	/** [Write] transfer:CreateConnector */
	static readonly CREATE_CONNECTOR = "transfer:CreateConnector";
	/** [Write] transfer:CreateProfile */
	static readonly CREATE_PROFILE = "transfer:CreateProfile";
	/** [Write] transfer:CreateServer */
	static readonly CREATE_SERVER = "transfer:CreateServer";
	/** [Write] transfer:CreateUser */
	static readonly CREATE_USER = "transfer:CreateUser";
	/** [Write] transfer:CreateWebApp */
	static readonly CREATE_WEB_APP = "transfer:CreateWebApp";
	/** [Write] transfer:CreateWorkflow */
	static readonly CREATE_WORKFLOW = "transfer:CreateWorkflow";
	/** [Write] transfer:DeleteAccess */
	static readonly DELETE_ACCESS = "transfer:DeleteAccess";
	/** [Write] transfer:DeleteAgreement */
	static readonly DELETE_AGREEMENT = "transfer:DeleteAgreement";
	/** [Write] transfer:DeleteCertificate */
	static readonly DELETE_CERTIFICATE = "transfer:DeleteCertificate";
	/** [Write] transfer:DeleteConnector */
	static readonly DELETE_CONNECTOR = "transfer:DeleteConnector";
	/** [Write] transfer:DeleteHostKey */
	static readonly DELETE_HOST_KEY = "transfer:DeleteHostKey";
	/** [Write] transfer:DeleteProfile */
	static readonly DELETE_PROFILE = "transfer:DeleteProfile";
	/** [Write] transfer:DeleteServer */
	static readonly DELETE_SERVER = "transfer:DeleteServer";
	/** [Write] transfer:DeleteSshPublicKey */
	static readonly DELETE_SSH_PUBLIC_KEY = "transfer:DeleteSshPublicKey";
	/** [Write] transfer:DeleteUser */
	static readonly DELETE_USER = "transfer:DeleteUser";
	/** [Write] transfer:DeleteWebApp */
	static readonly DELETE_WEB_APP = "transfer:DeleteWebApp";
	/** [Write] transfer:DeleteWebAppCustomization */
	static readonly DELETE_WEB_APP_CUSTOMIZATION =
		"transfer:DeleteWebAppCustomization";
	/** [Write] transfer:DeleteWorkflow */
	static readonly DELETE_WORKFLOW = "transfer:DeleteWorkflow";
	/** [Read] transfer:DescribeAccess */
	static readonly DESCRIBE_ACCESS = "transfer:DescribeAccess";
	/** [Read] transfer:DescribeAgreement */
	static readonly DESCRIBE_AGREEMENT = "transfer:DescribeAgreement";
	/** [Read] transfer:DescribeCertificate */
	static readonly DESCRIBE_CERTIFICATE = "transfer:DescribeCertificate";
	/** [Read] transfer:DescribeConnector */
	static readonly DESCRIBE_CONNECTOR = "transfer:DescribeConnector";
	/** [Read] transfer:DescribeExecution */
	static readonly DESCRIBE_EXECUTION = "transfer:DescribeExecution";
	/** [Read] transfer:DescribeHostKey */
	static readonly DESCRIBE_HOST_KEY = "transfer:DescribeHostKey";
	/** [Read] transfer:DescribeProfile */
	static readonly DESCRIBE_PROFILE = "transfer:DescribeProfile";
	/** [Read] transfer:DescribeSecurityPolicy */
	static readonly DESCRIBE_SECURITY_POLICY = "transfer:DescribeSecurityPolicy";
	/** [Read] transfer:DescribeServer */
	static readonly DESCRIBE_SERVER = "transfer:DescribeServer";
	/** [Read] transfer:DescribeUser */
	static readonly DESCRIBE_USER = "transfer:DescribeUser";
	/** [Read] transfer:DescribeWebApp */
	static readonly DESCRIBE_WEB_APP = "transfer:DescribeWebApp";
	/** [Read] transfer:DescribeWebAppCustomization */
	static readonly DESCRIBE_WEB_APP_CUSTOMIZATION =
		"transfer:DescribeWebAppCustomization";
	/** [Read] transfer:DescribeWorkflow */
	static readonly DESCRIBE_WORKFLOW = "transfer:DescribeWorkflow";
	/** [Write] transfer:ImportCertificate */
	static readonly IMPORT_CERTIFICATE = "transfer:ImportCertificate";
	/** [Write] transfer:ImportHostKey */
	static readonly IMPORT_HOST_KEY = "transfer:ImportHostKey";
	/** [Write] transfer:ImportSshPublicKey */
	static readonly IMPORT_SSH_PUBLIC_KEY = "transfer:ImportSshPublicKey";
	/** [Read] transfer:ListAccesses */
	static readonly LIST_ACCESSES = "transfer:ListAccesses";
	/** [Read] transfer:ListAgreements */
	static readonly LIST_AGREEMENTS = "transfer:ListAgreements";
	/** [Read] transfer:ListCertificates */
	static readonly LIST_CERTIFICATES = "transfer:ListCertificates";
	/** [Read] transfer:ListConnectors */
	static readonly LIST_CONNECTORS = "transfer:ListConnectors";
	/** [Read] transfer:ListExecutions */
	static readonly LIST_EXECUTIONS = "transfer:ListExecutions";
	/** [Read] transfer:ListFileTransferResults */
	static readonly LIST_FILE_TRANSFER_RESULTS =
		"transfer:ListFileTransferResults";
	/** [Read] transfer:ListHostKeys */
	static readonly LIST_HOST_KEYS = "transfer:ListHostKeys";
	/** [Read] transfer:ListProfiles */
	static readonly LIST_PROFILES = "transfer:ListProfiles";
	/** [List] transfer:ListSecurityPolicies */
	static readonly LIST_SECURITY_POLICIES = "transfer:ListSecurityPolicies";
	/** [List] transfer:ListServers */
	static readonly LIST_SERVERS = "transfer:ListServers";
	/** [Read] transfer:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "transfer:ListTagsForResource";
	/** [List] transfer:ListUsers */
	static readonly LIST_USERS = "transfer:ListUsers";
	/** [List] transfer:ListWebApps */
	static readonly LIST_WEB_APPS = "transfer:ListWebApps";
	/** [List] transfer:ListWorkflows */
	static readonly LIST_WORKFLOWS = "transfer:ListWorkflows";
	/** [Write] transfer:SendWorkflowStepState */
	static readonly SEND_WORKFLOW_STEP_STATE = "transfer:SendWorkflowStepState";
	/** [Write] transfer:StartDirectoryListing */
	static readonly START_DIRECTORY_LISTING = "transfer:StartDirectoryListing";
	/** [Write] transfer:StartFileTransfer */
	static readonly START_FILE_TRANSFER = "transfer:StartFileTransfer";
	/** [Write] transfer:StartRemoteDelete */
	static readonly START_REMOTE_DELETE = "transfer:StartRemoteDelete";
	/** [Write] transfer:StartRemoteMove */
	static readonly START_REMOTE_MOVE = "transfer:StartRemoteMove";
	/** [Write] transfer:StartServer */
	static readonly START_SERVER = "transfer:StartServer";
	/** [Write] transfer:StopServer */
	static readonly STOP_SERVER = "transfer:StopServer";
	/** [Tagging] transfer:TagResource */
	static readonly TAG_RESOURCE = "transfer:TagResource";
	/** [Write] transfer:TestConnection */
	static readonly TEST_CONNECTION = "transfer:TestConnection";
	/** [Read] transfer:TestIdentityProvider */
	static readonly TEST_IDENTITY_PROVIDER = "transfer:TestIdentityProvider";
	/** [Tagging] transfer:UntagResource */
	static readonly UNTAG_RESOURCE = "transfer:UntagResource";
	/** [Write] transfer:UpdateAccess */
	static readonly UPDATE_ACCESS = "transfer:UpdateAccess";
	/** [Write] transfer:UpdateAgreement */
	static readonly UPDATE_AGREEMENT = "transfer:UpdateAgreement";
	/** [Write] transfer:UpdateCertificate */
	static readonly UPDATE_CERTIFICATE = "transfer:UpdateCertificate";
	/** [Write] transfer:UpdateConnector */
	static readonly UPDATE_CONNECTOR = "transfer:UpdateConnector";
	/** [Write] transfer:UpdateHostKey */
	static readonly UPDATE_HOST_KEY = "transfer:UpdateHostKey";
	/** [Write] transfer:UpdateProfile */
	static readonly UPDATE_PROFILE = "transfer:UpdateProfile";
	/** [Write] transfer:UpdateServer */
	static readonly UPDATE_SERVER = "transfer:UpdateServer";
	/** [Write] transfer:UpdateUser */
	static readonly UPDATE_USER = "transfer:UpdateUser";
	/** [Write] transfer:UpdateWebApp */
	static readonly UPDATE_WEB_APP = "transfer:UpdateWebApp";
	/** [Write] transfer:UpdateWebAppCustomization */
	static readonly UPDATE_WEB_APP_CUSTOMIZATION =
		"transfer:UpdateWebAppCustomization";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TransferActions.DESCRIBE_ACCESS,
		TransferActions.DESCRIBE_AGREEMENT,
		TransferActions.DESCRIBE_CERTIFICATE,
		TransferActions.DESCRIBE_CONNECTOR,
		TransferActions.DESCRIBE_EXECUTION,
		TransferActions.DESCRIBE_HOST_KEY,
		TransferActions.DESCRIBE_PROFILE,
		TransferActions.DESCRIBE_SECURITY_POLICY,
		TransferActions.DESCRIBE_SERVER,
		TransferActions.DESCRIBE_USER,
		TransferActions.DESCRIBE_WEB_APP,
		TransferActions.DESCRIBE_WEB_APP_CUSTOMIZATION,
		TransferActions.DESCRIBE_WORKFLOW,
		TransferActions.LIST_ACCESSES,
		TransferActions.LIST_AGREEMENTS,
		TransferActions.LIST_CERTIFICATES,
		TransferActions.LIST_CONNECTORS,
		TransferActions.LIST_EXECUTIONS,
		TransferActions.LIST_FILE_TRANSFER_RESULTS,
		TransferActions.LIST_HOST_KEYS,
		TransferActions.LIST_PROFILES,
		TransferActions.LIST_TAGS_FOR_RESOURCE,
		TransferActions.TEST_IDENTITY_PROVIDER,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TransferActions.CREATE_ACCESS,
		TransferActions.CREATE_AGREEMENT,
		TransferActions.CREATE_CONNECTOR,
		TransferActions.CREATE_PROFILE,
		TransferActions.CREATE_SERVER,
		TransferActions.CREATE_USER,
		TransferActions.CREATE_WEB_APP,
		TransferActions.CREATE_WORKFLOW,
		TransferActions.DELETE_ACCESS,
		TransferActions.DELETE_AGREEMENT,
		TransferActions.DELETE_CERTIFICATE,
		TransferActions.DELETE_CONNECTOR,
		TransferActions.DELETE_HOST_KEY,
		TransferActions.DELETE_PROFILE,
		TransferActions.DELETE_SERVER,
		TransferActions.DELETE_SSH_PUBLIC_KEY,
		TransferActions.DELETE_USER,
		TransferActions.DELETE_WEB_APP,
		TransferActions.DELETE_WEB_APP_CUSTOMIZATION,
		TransferActions.DELETE_WORKFLOW,
		TransferActions.IMPORT_CERTIFICATE,
		TransferActions.IMPORT_HOST_KEY,
		TransferActions.IMPORT_SSH_PUBLIC_KEY,
		TransferActions.SEND_WORKFLOW_STEP_STATE,
		TransferActions.START_DIRECTORY_LISTING,
		TransferActions.START_FILE_TRANSFER,
		TransferActions.START_REMOTE_DELETE,
		TransferActions.START_REMOTE_MOVE,
		TransferActions.START_SERVER,
		TransferActions.STOP_SERVER,
		TransferActions.TEST_CONNECTION,
		TransferActions.UPDATE_ACCESS,
		TransferActions.UPDATE_AGREEMENT,
		TransferActions.UPDATE_CERTIFICATE,
		TransferActions.UPDATE_CONNECTOR,
		TransferActions.UPDATE_HOST_KEY,
		TransferActions.UPDATE_PROFILE,
		TransferActions.UPDATE_SERVER,
		TransferActions.UPDATE_USER,
		TransferActions.UPDATE_WEB_APP,
		TransferActions.UPDATE_WEB_APP_CUSTOMIZATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TransferActions.LIST_SECURITY_POLICIES,
		TransferActions.LIST_SERVERS,
		TransferActions.LIST_USERS,
		TransferActions.LIST_WEB_APPS,
		TransferActions.LIST_WORKFLOWS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TransferActions.TAG_RESOURCE,
		TransferActions.UNTAG_RESOURCE,
	];
}

const AgreementArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):agreement/(?<serverId>[^:/?]+)/(?<agreementId>[^:/?]+)$",
);
const CertificateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):certificate/(?<certificateId>[^:/?]+)$",
);
const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)$",
);
const HostKeyArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):host-key/(?<serverId>[^:/?]+)/(?<hostKeyId>[^:/?]+)$",
);
const ProfileArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):profile/(?<profileId>[^:/?]+)$",
);
const ServerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):server/(?<serverId>[^:/?]+)$",
);
const UserArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):user/(?<serverId>[^:/?]+)/(?<userName>[^:/?]+)$",
);
const WebappArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):webapp/(?<webAppId>[^:/?]+)$",
);
const WorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):transfer:(?<region>[^:]*):(?<account>[^:]*):workflow/(?<workflowId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for transfer resources.
 */
export class TransferResources {
	/**
	 * Builds an ARN for the agreement resource.
	 */
	static agreement(props: {
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
	}): string {
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
	static parseAgreementArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serverId: string;
		agreementId: string;
	} {
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
	static certificate(props: {
		/** The CertificateId component of the ARN. */
		readonly certificateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCertificateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		certificateId: string;
	} {
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
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
	} {
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
	static hostKey(props: {
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
	}): string {
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
	static parseHostKeyArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serverId: string;
		hostKeyId: string;
	} {
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
	static profile(props: {
		/** The ProfileId component of the ARN. */
		readonly profileId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseProfileArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		profileId: string;
	} {
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
	static server(props: {
		/** The ServerId component of the ARN. */
		readonly serverId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseServerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serverId: string;
	} {
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
	static user(props: {
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
	}): string {
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
	static parseUserArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		serverId: string;
		userName: string;
	} {
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
	static webapp(props: {
		/** The WebAppId component of the ARN. */
		readonly webAppId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWebappArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		webAppId: string;
	} {
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
	static workflow(props: {
		/** The WorkflowId component of the ARN. */
		readonly workflowId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkflowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowId: string;
	} {
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
	static readonly CREATE_ACCESS: string[] = [
		"transfer:CreateAccess",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateAgreement API call. */
	static readonly CREATE_AGREEMENT: string[] = [
		"transfer:CreateAgreement",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CREATE_CONNECTOR: string[] = [
		"transfer:CreateConnector",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateProfile API call. */
	static readonly CREATE_PROFILE: string[] = [
		"transfer:CreateProfile",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateServer API call. */
	static readonly CREATE_SERVER: string[] = [
		"transfer:CreateServer",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [
		"transfer:CreateUser",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateWebApp API call. */
	static readonly CREATE_WEB_APP: string[] = [
		"transfer:CreateWebApp",
		"iam:PassRole",
		"transfer:TagResource",
	];
	/** IAM actions required for the CreateWorkflow API call. */
	static readonly CREATE_WORKFLOW: string[] = [
		"transfer:CreateWorkflow",
		"transfer:TagResource",
	];
	/** IAM actions required for the DeleteAccess API call. */
	static readonly DELETE_ACCESS: string[] = ["transfer:DeleteAccess"];
	/** IAM actions required for the DeleteAgreement API call. */
	static readonly DELETE_AGREEMENT: string[] = ["transfer:DeleteAgreement"];
	/** IAM actions required for the DeleteCertificate API call. */
	static readonly DELETE_CERTIFICATE: string[] = ["transfer:DeleteCertificate"];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = ["transfer:DeleteConnector"];
	/** IAM actions required for the DeleteHostKey API call. */
	static readonly DELETE_HOST_KEY: string[] = ["transfer:DeleteHostKey"];
	/** IAM actions required for the DeleteProfile API call. */
	static readonly DELETE_PROFILE: string[] = ["transfer:DeleteProfile"];
	/** IAM actions required for the DeleteServer API call. */
	static readonly DELETE_SERVER: string[] = ["transfer:DeleteServer"];
	/** IAM actions required for the DeleteSshPublicKey API call. */
	static readonly DELETE_SSH_PUBLIC_KEY: string[] = [
		"transfer:DeleteSshPublicKey",
	];
	/** IAM actions required for the DeleteUser API call. */
	static readonly DELETE_USER: string[] = ["transfer:DeleteUser"];
	/** IAM actions required for the DeleteWebApp API call. */
	static readonly DELETE_WEB_APP: string[] = ["transfer:DeleteWebApp"];
	/** IAM actions required for the DeleteWebAppCustomization API call. */
	static readonly DELETE_WEB_APP_CUSTOMIZATION: string[] = [
		"transfer:DeleteWebAppCustomization",
	];
	/** IAM actions required for the DeleteWorkflow API call. */
	static readonly DELETE_WORKFLOW: string[] = ["transfer:DeleteWorkflow"];
	/** IAM actions required for the DescribeAccess API call. */
	static readonly DESCRIBE_ACCESS: string[] = ["transfer:DescribeAccess"];
	/** IAM actions required for the DescribeAgreement API call. */
	static readonly DESCRIBE_AGREEMENT: string[] = ["transfer:DescribeAgreement"];
	/** IAM actions required for the DescribeCertificate API call. */
	static readonly DESCRIBE_CERTIFICATE: string[] = [
		"transfer:DescribeCertificate",
	];
	/** IAM actions required for the DescribeConnector API call. */
	static readonly DESCRIBE_CONNECTOR: string[] = ["transfer:DescribeConnector"];
	/** IAM actions required for the DescribeExecution API call. */
	static readonly DESCRIBE_EXECUTION: string[] = ["transfer:DescribeExecution"];
	/** IAM actions required for the DescribeHostKey API call. */
	static readonly DESCRIBE_HOST_KEY: string[] = ["transfer:DescribeHostKey"];
	/** IAM actions required for the DescribeProfile API call. */
	static readonly DESCRIBE_PROFILE: string[] = ["transfer:DescribeProfile"];
	/** IAM actions required for the DescribeSecurityPolicy API call. */
	static readonly DESCRIBE_SECURITY_POLICY: string[] = [
		"transfer:DescribeSecurityPolicy",
	];
	/** IAM actions required for the DescribeServer API call. */
	static readonly DESCRIBE_SERVER: string[] = ["transfer:DescribeServer"];
	/** IAM actions required for the DescribeUser API call. */
	static readonly DESCRIBE_USER: string[] = ["transfer:DescribeUser"];
	/** IAM actions required for the DescribeWebApp API call. */
	static readonly DESCRIBE_WEB_APP: string[] = ["transfer:DescribeWebApp"];
	/** IAM actions required for the DescribeWebAppCustomization API call. */
	static readonly DESCRIBE_WEB_APP_CUSTOMIZATION: string[] = [
		"transfer:DescribeWebAppCustomization",
	];
	/** IAM actions required for the DescribeWorkflow API call. */
	static readonly DESCRIBE_WORKFLOW: string[] = ["transfer:DescribeWorkflow"];
	/** IAM actions required for the ImportCertificate API call. */
	static readonly IMPORT_CERTIFICATE: string[] = [
		"transfer:ImportCertificate",
		"transfer:TagResource",
	];
	/** IAM actions required for the ImportHostKey API call. */
	static readonly IMPORT_HOST_KEY: string[] = [
		"transfer:ImportHostKey",
		"transfer:TagResource",
	];
	/** IAM actions required for the ImportSshPublicKey API call. */
	static readonly IMPORT_SSH_PUBLIC_KEY: string[] = [
		"transfer:ImportSshPublicKey",
	];
	/** IAM actions required for the ListAccesses API call. */
	static readonly LIST_ACCESSES: string[] = ["transfer:ListAccesses"];
	/** IAM actions required for the ListAgreements API call. */
	static readonly LIST_AGREEMENTS: string[] = ["transfer:ListAgreements"];
	/** IAM actions required for the ListCertificates API call. */
	static readonly LIST_CERTIFICATES: string[] = ["transfer:ListCertificates"];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = ["transfer:ListConnectors"];
	/** IAM actions required for the ListExecutions API call. */
	static readonly LIST_EXECUTIONS: string[] = ["transfer:ListExecutions"];
	/** IAM actions required for the ListFileTransferResults API call. */
	static readonly LIST_FILE_TRANSFER_RESULTS: string[] = [
		"transfer:ListFileTransferResults",
	];
	/** IAM actions required for the ListHostKeys API call. */
	static readonly LIST_HOST_KEYS: string[] = ["transfer:ListHostKeys"];
	/** IAM actions required for the ListProfiles API call. */
	static readonly LIST_PROFILES: string[] = ["transfer:ListProfiles"];
	/** IAM actions required for the ListSecurityPolicies API call. */
	static readonly LIST_SECURITY_POLICIES: string[] = [
		"transfer:ListSecurityPolicies",
	];
	/** IAM actions required for the ListServers API call. */
	static readonly LIST_SERVERS: string[] = ["transfer:ListServers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"transfer:ListTagsForResource",
	];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = ["transfer:ListUsers"];
	/** IAM actions required for the ListWebApps API call. */
	static readonly LIST_WEB_APPS: string[] = ["transfer:ListWebApps"];
	/** IAM actions required for the ListWorkflows API call. */
	static readonly LIST_WORKFLOWS: string[] = ["transfer:ListWorkflows"];
	/** IAM actions required for the SendWorkflowStepState API call. */
	static readonly SEND_WORKFLOW_STEP_STATE: string[] = [
		"transfer:SendWorkflowStepState",
	];
	/** IAM actions required for the StartDirectoryListing API call. */
	static readonly START_DIRECTORY_LISTING: string[] = [
		"transfer:StartDirectoryListing",
	];
	/** IAM actions required for the StartFileTransfer API call. */
	static readonly START_FILE_TRANSFER: string[] = [
		"transfer:StartFileTransfer",
	];
	/** IAM actions required for the StartRemoteDelete API call. */
	static readonly START_REMOTE_DELETE: string[] = [
		"transfer:StartRemoteDelete",
	];
	/** IAM actions required for the StartRemoteMove API call. */
	static readonly START_REMOTE_MOVE: string[] = ["transfer:StartRemoteMove"];
	/** IAM actions required for the StartServer API call. */
	static readonly START_SERVER: string[] = ["transfer:StartServer"];
	/** IAM actions required for the StopServer API call. */
	static readonly STOP_SERVER: string[] = ["transfer:StopServer"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["transfer:TagResource"];
	/** IAM actions required for the TestConnection API call. */
	static readonly TEST_CONNECTION: string[] = ["transfer:TestConnection"];
	/** IAM actions required for the TestIdentityProvider API call. */
	static readonly TEST_IDENTITY_PROVIDER: string[] = [
		"transfer:TestIdentityProvider",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["transfer:UntagResource"];
	/** IAM actions required for the UpdateAccess API call. */
	static readonly UPDATE_ACCESS: string[] = [
		"iam:PassRole",
		"transfer:UpdateAccess",
	];
	/** IAM actions required for the UpdateAgreement API call. */
	static readonly UPDATE_AGREEMENT: string[] = [
		"iam:PassRole",
		"transfer:UpdateAgreement",
	];
	/** IAM actions required for the UpdateCertificate API call. */
	static readonly UPDATE_CERTIFICATE: string[] = ["transfer:UpdateCertificate"];
	/** IAM actions required for the UpdateConnector API call. */
	static readonly UPDATE_CONNECTOR: string[] = [
		"iam:PassRole",
		"transfer:UpdateConnector",
	];
	/** IAM actions required for the UpdateHostKey API call. */
	static readonly UPDATE_HOST_KEY: string[] = ["transfer:UpdateHostKey"];
	/** IAM actions required for the UpdateProfile API call. */
	static readonly UPDATE_PROFILE: string[] = ["transfer:UpdateProfile"];
	/** IAM actions required for the UpdateServer API call. */
	static readonly UPDATE_SERVER: string[] = [
		"iam:PassRole",
		"transfer:UpdateServer",
	];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = [
		"iam:PassRole",
		"transfer:UpdateUser",
	];
	/** IAM actions required for the UpdateWebApp API call. */
	static readonly UPDATE_WEB_APP: string[] = [
		"iam:PassRole",
		"transfer:UpdateWebApp",
	];
	/** IAM actions required for the UpdateWebAppCustomization API call. */
	static readonly UPDATE_WEB_APP_CUSTOMIZATION: string[] = [
		"transfer:UpdateWebAppCustomization",
	];
}

/**
 * Condition key constants and builders for transfer.
 */
export class TransferConditions {
	/** Condition keys applicable to the CreateAgreement action. */
	static readonly CREATE_AGREEMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CREATE_CONNECTOR_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transfer:RequestConnectorProtocol",
		"transfer:RequestSecurityPolicyName",
	];
	/** Condition keys applicable to the CreateProfile action. */
	static readonly CREATE_PROFILE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateServer action. */
	static readonly CREATE_SERVER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"transfer:RequestSecurityPolicyName",
		"transfer:RequestServerDomain",
		"transfer:RequestServerEndpointType",
		"transfer:RequestServerProtocols",
	];
	/** Condition keys applicable to the CreateUser action. */
	static readonly CREATE_USER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWebApp action. */
	static readonly CREATE_WEB_APP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkflow action. */
	static readonly CREATE_WORKFLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportCertificate action. */
	static readonly IMPORT_CERTIFICATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportHostKey action. */
	static readonly IMPORT_HOST_KEY_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateConnector action. */
	static readonly UPDATE_CONNECTOR_CONDITION_KEYS: string[] = [
		"transfer:RequestSecurityPolicyName",
	];
	/** Condition keys applicable to the UpdateServer action. */
	static readonly UPDATE_SERVER_CONDITION_KEYS: string[] = [
		"transfer:RequestSecurityPolicyName",
		"transfer:RequestServerEndpointType",
		"transfer:RequestServerProtocols",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
