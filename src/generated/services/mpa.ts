// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mpa.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mpa service.
 */
export class MpaActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mpa";

	/** [Write] mpa:CancelSession */
	static readonly CANCEL_SESSION = "mpa:CancelSession";
	/** [Write] mpa:CreateApprovalTeam */
	static readonly CREATE_APPROVAL_TEAM = "mpa:CreateApprovalTeam";
	/** [Write] mpa:CreateIdentitySource */
	static readonly CREATE_IDENTITY_SOURCE = "mpa:CreateIdentitySource";
	/** [Write] mpa:DeleteIdentitySource */
	static readonly DELETE_IDENTITY_SOURCE = "mpa:DeleteIdentitySource";
	/** [Write] mpa:DeleteInactiveApprovalTeamVersion */
	static readonly DELETE_INACTIVE_APPROVAL_TEAM_VERSION =
		"mpa:DeleteInactiveApprovalTeamVersion";
	/** [PermissionManagement] mpa:DeleteResourcePolicy */
	static readonly DELETE_RESOURCE_POLICY = "mpa:DeleteResourcePolicy";
	/** [Read] mpa:GetApprovalTeam */
	static readonly GET_APPROVAL_TEAM = "mpa:GetApprovalTeam";
	/** [Read] mpa:GetIdentitySource */
	static readonly GET_IDENTITY_SOURCE = "mpa:GetIdentitySource";
	/** [Read] mpa:GetPolicyVersion */
	static readonly GET_POLICY_VERSION = "mpa:GetPolicyVersion";
	/** [Read] mpa:GetResourcePolicy */
	static readonly GET_RESOURCE_POLICY = "mpa:GetResourcePolicy";
	/** [Read] mpa:GetSession */
	static readonly GET_SESSION = "mpa:GetSession";
	/** [List] mpa:ListApprovalTeams */
	static readonly LIST_APPROVAL_TEAMS = "mpa:ListApprovalTeams";
	/** [List] mpa:ListIdentitySources */
	static readonly LIST_IDENTITY_SOURCES = "mpa:ListIdentitySources";
	/** [List] mpa:ListPolicies */
	static readonly LIST_POLICIES = "mpa:ListPolicies";
	/** [List] mpa:ListPolicyVersions */
	static readonly LIST_POLICY_VERSIONS = "mpa:ListPolicyVersions";
	/** [List] mpa:ListResourcePolicies */
	static readonly LIST_RESOURCE_POLICIES = "mpa:ListResourcePolicies";
	/** [List] mpa:ListSessions */
	static readonly LIST_SESSIONS = "mpa:ListSessions";
	/** [List] mpa:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "mpa:ListTagsForResource";
	/** [PermissionManagement] mpa:PutResourcePolicy */
	static readonly PUT_RESOURCE_POLICY = "mpa:PutResourcePolicy";
	/** [Write] mpa:StartActiveApprovalTeamDeletion */
	static readonly START_ACTIVE_APPROVAL_TEAM_DELETION =
		"mpa:StartActiveApprovalTeamDeletion";
	/** [Write] mpa:StartApprovalTeamBaseline */
	static readonly START_APPROVAL_TEAM_BASELINE =
		"mpa:StartApprovalTeamBaseline";
	/** [Write] mpa:StartSession */
	static readonly START_SESSION = "mpa:StartSession";
	/** [Tagging] mpa:TagResource */
	static readonly TAG_RESOURCE = "mpa:TagResource";
	/** [Tagging] mpa:UntagResource */
	static readonly UNTAG_RESOURCE = "mpa:UntagResource";
	/** [Write] mpa:UpdateApprovalTeam */
	static readonly UPDATE_APPROVAL_TEAM = "mpa:UpdateApprovalTeam";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		MpaActions.GET_APPROVAL_TEAM,
		MpaActions.GET_IDENTITY_SOURCE,
		MpaActions.GET_POLICY_VERSION,
		MpaActions.GET_RESOURCE_POLICY,
		MpaActions.GET_SESSION,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		MpaActions.CANCEL_SESSION,
		MpaActions.CREATE_APPROVAL_TEAM,
		MpaActions.CREATE_IDENTITY_SOURCE,
		MpaActions.DELETE_IDENTITY_SOURCE,
		MpaActions.DELETE_INACTIVE_APPROVAL_TEAM_VERSION,
		MpaActions.START_ACTIVE_APPROVAL_TEAM_DELETION,
		MpaActions.START_APPROVAL_TEAM_BASELINE,
		MpaActions.START_SESSION,
		MpaActions.UPDATE_APPROVAL_TEAM,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MpaActions.LIST_APPROVAL_TEAMS,
		MpaActions.LIST_IDENTITY_SOURCES,
		MpaActions.LIST_POLICIES,
		MpaActions.LIST_POLICY_VERSIONS,
		MpaActions.LIST_RESOURCE_POLICIES,
		MpaActions.LIST_SESSIONS,
		MpaActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		MpaActions.DELETE_RESOURCE_POLICY,
		MpaActions.PUT_RESOURCE_POLICY,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		MpaActions.TAG_RESOURCE,
		MpaActions.UNTAG_RESOURCE,
	];
}

const ApprovalTeamArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):approval-team/(?<approvalTeamId>[^:/?]+)$",
);
const IdentitySourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):identity-source/(?<identitySourceId>[^:/?]+)$",
);
const SessionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):session/(?<sessionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mpa resources.
 */
export class MpaResources {
	/**
	 * Builds an ARN for the approval-team resource.
	 */
	static approvalTeam(props: {
		/** The ApprovalTeamId component of the ARN. */
		readonly approvalTeamId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mpa:${props.region ?? "*"}:${props.account ?? "*"}:approval-team/${props.approvalTeamId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the approval-team resource.
	 */
	static isValidApprovalTeamArn(arn: string): boolean {
		return ApprovalTeamArnRegex.test(arn);
	}

	/**
	 * Parses a approval-team ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApprovalTeamArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		approvalTeamId: string;
	} {
		const match = ApprovalTeamArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid approval-team ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			approvalTeamId: match.groups!.approvalTeamId,
		};
	}

	/**
	 * Builds an ARN for the identity-source resource.
	 */
	static identitySource(props: {
		/** The IdentitySourceId component of the ARN. */
		readonly identitySourceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mpa:${props.region ?? "*"}:${props.account ?? "*"}:identity-source/${props.identitySourceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identity-source resource.
	 */
	static isValidIdentitySourceArn(arn: string): boolean {
		return IdentitySourceArnRegex.test(arn);
	}

	/**
	 * Parses a identity-source ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentitySourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identitySourceId: string;
	} {
		const match = IdentitySourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identity-source ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identitySourceId: match.groups!.identitySourceId,
		};
	}

	/**
	 * Builds an ARN for the session resource.
	 */
	static session(props: {
		/** The SessionId component of the ARN. */
		readonly sessionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:mpa:${props.region ?? "*"}:${props.account ?? "*"}:session/${props.sessionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the session resource.
	 */
	static isValidSessionArn(arn: string): boolean {
		return SessionArnRegex.test(arn);
	}

	/**
	 * Parses a session ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSessionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		sessionId: string;
	} {
		const match = SessionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid session ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			sessionId: match.groups!.sessionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for mpa.
 */
export class MpaOperations {
	/** IAM actions required for the CancelSession API call. */
	static readonly CANCEL_SESSION: string[] = ["mpa:CancelSession"];
	/** IAM actions required for the CreateApprovalTeam API call. */
	static readonly CREATE_APPROVAL_TEAM: string[] = [
		"mpa:CreateApprovalTeam",
		"mpa:TagResource",
	];
	/** IAM actions required for the CreateIdentitySource API call. */
	static readonly CREATE_IDENTITY_SOURCE: string[] = [
		"mpa:CreateIdentitySource",
		"mpa:TagResource",
	];
	/** IAM actions required for the DeleteIdentitySource API call. */
	static readonly DELETE_IDENTITY_SOURCE: string[] = [
		"mpa:DeleteIdentitySource",
	];
	/** IAM actions required for the DeleteInactiveApprovalTeamVersion API call. */
	static readonly DELETE_INACTIVE_APPROVAL_TEAM_VERSION: string[] = [
		"mpa:DeleteInactiveApprovalTeamVersion",
	];
	/** IAM actions required for the GetApprovalTeam API call. */
	static readonly GET_APPROVAL_TEAM: string[] = ["mpa:GetApprovalTeam"];
	/** IAM actions required for the GetIdentitySource API call. */
	static readonly GET_IDENTITY_SOURCE: string[] = ["mpa:GetIdentitySource"];
	/** IAM actions required for the GetPolicyVersion API call. */
	static readonly GET_POLICY_VERSION: string[] = ["mpa:GetPolicyVersion"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly GET_RESOURCE_POLICY: string[] = ["mpa:GetResourcePolicy"];
	/** IAM actions required for the GetSession API call. */
	static readonly GET_SESSION: string[] = ["mpa:GetSession"];
	/** IAM actions required for the ListApprovalTeams API call. */
	static readonly LIST_APPROVAL_TEAMS: string[] = ["mpa:ListApprovalTeams"];
	/** IAM actions required for the ListIdentitySources API call. */
	static readonly LIST_IDENTITY_SOURCES: string[] = ["mpa:ListIdentitySources"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly LIST_POLICIES: string[] = ["mpa:ListPolicies"];
	/** IAM actions required for the ListPolicyVersions API call. */
	static readonly LIST_POLICY_VERSIONS: string[] = ["mpa:ListPolicyVersions"];
	/** IAM actions required for the ListResourcePolicies API call. */
	static readonly LIST_RESOURCE_POLICIES: string[] = [
		"mpa:ListResourcePolicies",
	];
	/** IAM actions required for the ListSessions API call. */
	static readonly LIST_SESSIONS: string[] = ["mpa:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"mpa:ListTagsForResource",
	];
	/** IAM actions required for the StartActiveApprovalTeamDeletion API call. */
	static readonly START_ACTIVE_APPROVAL_TEAM_DELETION: string[] = [
		"mpa:StartActiveApprovalTeamDeletion",
	];
	/** IAM actions required for the StartApprovalTeamBaseline API call. */
	static readonly START_APPROVAL_TEAM_BASELINE: string[] = [
		"mpa:StartApprovalTeamBaseline",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["mpa:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["mpa:UntagResource"];
	/** IAM actions required for the UpdateApprovalTeam API call. */
	static readonly UPDATE_APPROVAL_TEAM: string[] = ["mpa:UpdateApprovalTeam"];
}

/**
 * Condition key constants and builders for mpa.
 */
export class MpaConditions {
	/** Condition keys applicable to the CancelSession action. */
	static readonly CANCEL_SESSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"mpa:ProtectedResourceAccount",
		"mpa:RequestedOperation",
	];
	/** Condition keys applicable to the CreateApprovalTeam action. */
	static readonly CREATE_APPROVAL_TEAM_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIdentitySource action. */
	static readonly CREATE_IDENTITY_SOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteIdentitySource action. */
	static readonly DELETE_IDENTITY_SOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteInactiveApprovalTeamVersion action. */
	static readonly DELETE_INACTIVE_APPROVAL_TEAM_VERSION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetApprovalTeam action. */
	static readonly GET_APPROVAL_TEAM_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIdentitySource action. */
	static readonly GET_IDENTITY_SOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSession action. */
	static readonly GET_SESSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"mpa:ProtectedResourceAccount",
		"mpa:RequestedOperation",
	];
	/** Condition keys applicable to the StartActiveApprovalTeamDeletion action. */
	static readonly START_ACTIVE_APPROVAL_TEAM_DELETION_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the StartApprovalTeamBaseline action. */
	static readonly START_APPROVAL_TEAM_BASELINE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly START_SESSION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"mpa:ProtectedResourceAccount",
		"mpa:RequestedOperation",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateApprovalTeam action. */
	static readonly UPDATE_APPROVAL_TEAM_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: mpa:ProtectedResourceAccount (String) */
	static readonly PROTECTED_RESOURCE_ACCOUNT = "mpa:ProtectedResourceAccount";
	/** Condition key: mpa:RequestedOperation (String) */
	static readonly REQUESTED_OPERATION = "mpa:RequestedOperation";

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
	 * Generates a condition block for `mpa:ProtectedResourceAccount`.
	 */
	static protectedResourceAccount(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "mpa:ProtectedResourceAccount": value } };
	}

	/**
	 * Generates a condition block for `mpa:RequestedOperation`.
	 */
	static requestedOperation(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "mpa:RequestedOperation": value } };
	}
}
