// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iq-permission.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iq-permission service.
 */
export class IqPermissionActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iq-permission";

	/** [Write] iq-permission:ApproveAccessGrant */
	static readonly ApproveAccessGrant = "iq-permission:ApproveAccessGrant";
	/** [Write] iq-permission:ApprovePermissionRequest */
	static readonly ApprovePermissionRequest =
		"iq-permission:ApprovePermissionRequest";
	/** [Write] iq-permission:AssumePermissionRole */
	static readonly AssumePermissionRole = "iq-permission:AssumePermissionRole";
	/** [Write] iq-permission:CreatePermissionRequest */
	static readonly CreatePermissionRequest =
		"iq-permission:CreatePermissionRequest";
	/** [Read] iq-permission:GetPermissionRequest */
	static readonly actionGetPermissionRequest =
		"iq-permission:GetPermissionRequest";
	/** [Read] iq-permission:ListPermissionRequests */
	static readonly ListPermissionRequests =
		"iq-permission:ListPermissionRequests";
	/** [Write] iq-permission:RejectPermissionRequest */
	static readonly RejectPermissionRequest =
		"iq-permission:RejectPermissionRequest";
	/** [Write] iq-permission:RevokePermissionRequest */
	static readonly RevokePermissionRequest =
		"iq-permission:RevokePermissionRequest";
	/** [Write] iq-permission:WithdrawPermissionRequest */
	static readonly WithdrawPermissionRequest =
		"iq-permission:WithdrawPermissionRequest";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IqPermissionActions.actionGetPermissionRequest,
		IqPermissionActions.ListPermissionRequests,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IqPermissionActions.ApproveAccessGrant,
		IqPermissionActions.ApprovePermissionRequest,
		IqPermissionActions.AssumePermissionRole,
		IqPermissionActions.CreatePermissionRequest,
		IqPermissionActions.RejectPermissionRequest,
		IqPermissionActions.RevokePermissionRequest,
		IqPermissionActions.WithdrawPermissionRequest,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a permission ARN.
 */
export interface IqPermissionPermissionArnProps {
	/** The PermissionRequestId component of the ARN. */
	readonly permissionRequestId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a permission ARN.
 */
export interface IqPermissionPermissionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The PermissionRequestId component. */
	readonly permissionRequestId: string;
}

const PermissionArnRegex =
	/^arn:(?<partition>[^:]+):iq-permission:(?<region>[^:]*)::permission\/(?<permissionRequestId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iq-permission resources.
 */
export class IqPermissionResources {
	/**
	 * Builds an ARN for the permission resource.
	 */
	static permission(props: IqPermissionPermissionArnProps): string {
		return `arn:${props.partition ?? "aws"}:iq-permission:${props.region ?? "*"}::permission/${props.permissionRequestId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the permission resource.
	 */
	static isValidPermissionArn(arn: string): boolean {
		return PermissionArnRegex.test(arn);
	}

	/**
	 * Parses a permission ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePermissionArn(arn: string): IqPermissionPermissionArnComponents {
		const match = PermissionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid permission ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			permissionRequestId: match.groups!.permissionRequestId,
		};
	}
}
