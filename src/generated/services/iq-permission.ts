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
	static readonly APPROVE_ACCESS_GRANT = "iq-permission:ApproveAccessGrant";
	/** [Write] iq-permission:ApprovePermissionRequest */
	static readonly APPROVE_PERMISSION_REQUEST =
		"iq-permission:ApprovePermissionRequest";
	/** [Write] iq-permission:AssumePermissionRole */
	static readonly ASSUME_PERMISSION_ROLE = "iq-permission:AssumePermissionRole";
	/** [Write] iq-permission:CreatePermissionRequest */
	static readonly CREATE_PERMISSION_REQUEST =
		"iq-permission:CreatePermissionRequest";
	/** [Read] iq-permission:GetPermissionRequest */
	static readonly GET_PERMISSION_REQUEST = "iq-permission:GetPermissionRequest";
	/** [Read] iq-permission:ListPermissionRequests */
	static readonly LIST_PERMISSION_REQUESTS =
		"iq-permission:ListPermissionRequests";
	/** [Write] iq-permission:RejectPermissionRequest */
	static readonly REJECT_PERMISSION_REQUEST =
		"iq-permission:RejectPermissionRequest";
	/** [Write] iq-permission:RevokePermissionRequest */
	static readonly REVOKE_PERMISSION_REQUEST =
		"iq-permission:RevokePermissionRequest";
	/** [Write] iq-permission:WithdrawPermissionRequest */
	static readonly WITHDRAW_PERMISSION_REQUEST =
		"iq-permission:WithdrawPermissionRequest";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IqPermissionActions.GET_PERMISSION_REQUEST,
		IqPermissionActions.LIST_PERMISSION_REQUESTS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IqPermissionActions.APPROVE_ACCESS_GRANT,
		IqPermissionActions.APPROVE_PERMISSION_REQUEST,
		IqPermissionActions.ASSUME_PERMISSION_ROLE,
		IqPermissionActions.CREATE_PERMISSION_REQUEST,
		IqPermissionActions.REJECT_PERMISSION_REQUEST,
		IqPermissionActions.REVOKE_PERMISSION_REQUEST,
		IqPermissionActions.WITHDRAW_PERMISSION_REQUEST,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const PermissionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iq-permission:(?<region>[^:]*)::permission/(?<permissionRequestId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iq-permission resources.
 */
export class IqPermissionResources {
	/**
	 * Builds an ARN for the permission resource.
	 */
	static permission(props: {
		/** The PermissionRequestId component of the ARN. */
		readonly permissionRequestId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parsePermissionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		permissionRequestId: string;
	} {
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
