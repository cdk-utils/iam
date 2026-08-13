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
	static readonly CancelSession = "mpa:CancelSession";
	/** [Write] mpa:CreateApprovalTeam */
	static readonly CreateApprovalTeam = "mpa:CreateApprovalTeam";
	/** [Write] mpa:CreateIdentitySource */
	static readonly CreateIdentitySource = "mpa:CreateIdentitySource";
	/** [Write] mpa:DeleteIdentitySource */
	static readonly DeleteIdentitySource = "mpa:DeleteIdentitySource";
	/** [Write] mpa:DeleteInactiveApprovalTeamVersion */
	static readonly DeleteInactiveApprovalTeamVersion =
		"mpa:DeleteInactiveApprovalTeamVersion";
	/** [PermissionManagement] mpa:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy = "mpa:DeleteResourcePolicy";
	/** [Read] mpa:GetApprovalTeam */
	static readonly actionGetApprovalTeam = "mpa:GetApprovalTeam";
	/** [Read] mpa:GetIdentitySource */
	static readonly actionGetIdentitySource = "mpa:GetIdentitySource";
	/** [Read] mpa:GetPolicyVersion */
	static readonly actionGetPolicyVersion = "mpa:GetPolicyVersion";
	/** [Read] mpa:GetResourcePolicy */
	static readonly actionGetResourcePolicy = "mpa:GetResourcePolicy";
	/** [Read] mpa:GetSession */
	static readonly actionGetSession = "mpa:GetSession";
	/** [List] mpa:ListApprovalTeams */
	static readonly ListApprovalTeams = "mpa:ListApprovalTeams";
	/** [List] mpa:ListIdentitySources */
	static readonly ListIdentitySources = "mpa:ListIdentitySources";
	/** [List] mpa:ListPolicies */
	static readonly ListPolicies = "mpa:ListPolicies";
	/** [List] mpa:ListPolicyVersions */
	static readonly ListPolicyVersions = "mpa:ListPolicyVersions";
	/** [List] mpa:ListResourcePolicies */
	static readonly ListResourcePolicies = "mpa:ListResourcePolicies";
	/** [List] mpa:ListSessions */
	static readonly ListSessions = "mpa:ListSessions";
	/** [List] mpa:ListTagsForResource */
	static readonly ListTagsForResource = "mpa:ListTagsForResource";
	/** [PermissionManagement] mpa:PutResourcePolicy */
	static readonly PutResourcePolicy = "mpa:PutResourcePolicy";
	/** [Write] mpa:StartActiveApprovalTeamDeletion */
	static readonly StartActiveApprovalTeamDeletion =
		"mpa:StartActiveApprovalTeamDeletion";
	/** [Write] mpa:StartApprovalTeamBaseline */
	static readonly StartApprovalTeamBaseline = "mpa:StartApprovalTeamBaseline";
	/** [Write] mpa:StartSession */
	static readonly StartSession = "mpa:StartSession";
	/** [Tagging] mpa:TagResource */
	static readonly TagResource = "mpa:TagResource";
	/** [Tagging] mpa:UntagResource */
	static readonly UntagResource = "mpa:UntagResource";
	/** [Write] mpa:UpdateApprovalTeam */
	static readonly UpdateApprovalTeam = "mpa:UpdateApprovalTeam";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		MpaActions.actionGetApprovalTeam,
		MpaActions.actionGetIdentitySource,
		MpaActions.actionGetPolicyVersion,
		MpaActions.actionGetResourcePolicy,
		MpaActions.actionGetSession,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		MpaActions.CancelSession,
		MpaActions.CreateApprovalTeam,
		MpaActions.CreateIdentitySource,
		MpaActions.DeleteIdentitySource,
		MpaActions.DeleteInactiveApprovalTeamVersion,
		MpaActions.StartActiveApprovalTeamDeletion,
		MpaActions.StartApprovalTeamBaseline,
		MpaActions.StartSession,
		MpaActions.UpdateApprovalTeam,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MpaActions.ListApprovalTeams,
		MpaActions.ListIdentitySources,
		MpaActions.ListPolicies,
		MpaActions.ListPolicyVersions,
		MpaActions.ListResourcePolicies,
		MpaActions.ListSessions,
		MpaActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		MpaActions.DeleteResourcePolicy,
		MpaActions.PutResourcePolicy,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		MpaActions.TagResource,
		MpaActions.UntagResource,
	];
}

/**
 * Properties for building a approval-team ARN.
 */
export interface MpaApprovalTeamArnProps {
	/** The ApprovalTeamId component of the ARN. */
	readonly approvalTeamId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a approval-team ARN.
 */
export interface MpaApprovalTeamArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApprovalTeamId component. */
	readonly approvalTeamId: string;
}

/**
 * Properties for building a identity-source ARN.
 */
export interface MpaIdentitySourceArnProps {
	/** The IdentitySourceId component of the ARN. */
	readonly identitySourceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a identity-source ARN.
 */
export interface MpaIdentitySourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentitySourceId component. */
	readonly identitySourceId: string;
}

/**
 * Properties for building a session ARN.
 */
export interface MpaSessionArnProps {
	/** The SessionId component of the ARN. */
	readonly sessionId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a session ARN.
 */
export interface MpaSessionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SessionId component. */
	readonly sessionId: string;
}

const ApprovalTeamArnRegex =
	/^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):approval-team\/(?<approvalTeamId>[^:/?]+)$/;
const IdentitySourceArnRegex =
	/^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):identity-source\/(?<identitySourceId>[^:/?]+)$/;
const SessionArnRegex =
	/^arn:(?<partition>[^:]+):mpa:(?<region>[^:]*):(?<account>[^:]*):session\/(?<sessionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mpa resources.
 */
export class MpaResources {
	/**
	 * Builds an ARN for the approval-team resource.
	 */
	static approvalTeam(props: MpaApprovalTeamArnProps): string {
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
	static parseApprovalTeamArn(arn: string): MpaApprovalTeamArnComponents {
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
	static identitySource(props: MpaIdentitySourceArnProps): string {
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
	static parseIdentitySourceArn(arn: string): MpaIdentitySourceArnComponents {
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
	static session(props: MpaSessionArnProps): string {
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
	static parseSessionArn(arn: string): MpaSessionArnComponents {
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
	static readonly CancelSession: string[] = ["mpa:CancelSession"];
	/** IAM actions required for the CreateApprovalTeam API call. */
	static readonly CreateApprovalTeam: string[] = [
		"mpa:CreateApprovalTeam",
		"mpa:TagResource",
	];
	/** IAM actions required for the CreateIdentitySource API call. */
	static readonly CreateIdentitySource: string[] = [
		"mpa:CreateIdentitySource",
		"mpa:TagResource",
	];
	/** IAM actions required for the DeleteIdentitySource API call. */
	static readonly DeleteIdentitySource: string[] = ["mpa:DeleteIdentitySource"];
	/** IAM actions required for the DeleteInactiveApprovalTeamVersion API call. */
	static readonly DeleteInactiveApprovalTeamVersion: string[] = [
		"mpa:DeleteInactiveApprovalTeamVersion",
	];
	/** IAM actions required for the GetApprovalTeam API call. */
	static readonly opGetApprovalTeam: string[] = ["mpa:GetApprovalTeam"];
	/** IAM actions required for the GetIdentitySource API call. */
	static readonly opGetIdentitySource: string[] = ["mpa:GetIdentitySource"];
	/** IAM actions required for the GetPolicyVersion API call. */
	static readonly opGetPolicyVersion: string[] = ["mpa:GetPolicyVersion"];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = ["mpa:GetResourcePolicy"];
	/** IAM actions required for the GetSession API call. */
	static readonly opGetSession: string[] = ["mpa:GetSession"];
	/** IAM actions required for the ListApprovalTeams API call. */
	static readonly ListApprovalTeams: string[] = ["mpa:ListApprovalTeams"];
	/** IAM actions required for the ListIdentitySources API call. */
	static readonly ListIdentitySources: string[] = ["mpa:ListIdentitySources"];
	/** IAM actions required for the ListPolicies API call. */
	static readonly ListPolicies: string[] = ["mpa:ListPolicies"];
	/** IAM actions required for the ListPolicyVersions API call. */
	static readonly ListPolicyVersions: string[] = ["mpa:ListPolicyVersions"];
	/** IAM actions required for the ListResourcePolicies API call. */
	static readonly ListResourcePolicies: string[] = ["mpa:ListResourcePolicies"];
	/** IAM actions required for the ListSessions API call. */
	static readonly ListSessions: string[] = ["mpa:ListSessions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["mpa:ListTagsForResource"];
	/** IAM actions required for the StartActiveApprovalTeamDeletion API call. */
	static readonly StartActiveApprovalTeamDeletion: string[] = [
		"mpa:StartActiveApprovalTeamDeletion",
	];
	/** IAM actions required for the StartApprovalTeamBaseline API call. */
	static readonly StartApprovalTeamBaseline: string[] = [
		"mpa:StartApprovalTeamBaseline",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["mpa:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["mpa:UntagResource"];
	/** IAM actions required for the UpdateApprovalTeam API call. */
	static readonly UpdateApprovalTeam: string[] = ["mpa:UpdateApprovalTeam"];
}

/**
 * Condition key constants and builders for mpa.
 */
export class MpaConditions {
	/** Condition keys applicable to the CancelSession action. */
	static readonly CancelSessionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"mpa:ProtectedResourceAccount",
		"mpa:RequestedOperation",
	];
	/** Condition keys applicable to the CreateApprovalTeam action. */
	static readonly CreateApprovalTeamConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIdentitySource action. */
	static readonly CreateIdentitySourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteIdentitySource action. */
	static readonly DeleteIdentitySourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeleteInactiveApprovalTeamVersion action. */
	static readonly DeleteInactiveApprovalTeamVersionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetApprovalTeam action. */
	static readonly actionGetApprovalTeamConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetIdentitySource action. */
	static readonly actionGetIdentitySourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSession action. */
	static readonly actionGetSessionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"mpa:ProtectedResourceAccount",
		"mpa:RequestedOperation",
	];
	/** Condition keys applicable to the StartActiveApprovalTeamDeletion action. */
	static readonly StartActiveApprovalTeamDeletionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartApprovalTeamBaseline action. */
	static readonly StartApprovalTeamBaselineConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartSession action. */
	static readonly StartSessionConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"mpa:ProtectedResourceAccount",
		"mpa:RequestedOperation",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UpdateApprovalTeam action. */
	static readonly UpdateApprovalTeamConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
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
