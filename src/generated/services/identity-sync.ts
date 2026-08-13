// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/identity-sync.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the identity-sync service.
 */
export class IdentitySyncActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "identity-sync";

	/** [PermissionManagement] identity-sync:AllowVendedLogDeliveryForResource */
	static readonly ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE =
		"identity-sync:AllowVendedLogDeliveryForResource";
	/** [Write] identity-sync:CreateSyncFilter */
	static readonly CREATE_SYNC_FILTER = "identity-sync:CreateSyncFilter";
	/** [Write] identity-sync:CreateSyncProfile */
	static readonly CREATE_SYNC_PROFILE = "identity-sync:CreateSyncProfile";
	/** [Write] identity-sync:CreateSyncTarget */
	static readonly CREATE_SYNC_TARGET = "identity-sync:CreateSyncTarget";
	/** [Write] identity-sync:DeleteSyncFilter */
	static readonly DELETE_SYNC_FILTER = "identity-sync:DeleteSyncFilter";
	/** [Write] identity-sync:DeleteSyncProfile */
	static readonly DELETE_SYNC_PROFILE = "identity-sync:DeleteSyncProfile";
	/** [Write] identity-sync:DeleteSyncTarget */
	static readonly DELETE_SYNC_TARGET = "identity-sync:DeleteSyncTarget";
	/** [Read] identity-sync:GetSyncProfile */
	static readonly GET_SYNC_PROFILE = "identity-sync:GetSyncProfile";
	/** [Read] identity-sync:GetSyncTarget */
	static readonly GET_SYNC_TARGET = "identity-sync:GetSyncTarget";
	/** [List] identity-sync:ListSyncFilters */
	static readonly LIST_SYNC_FILTERS = "identity-sync:ListSyncFilters";
	/** [Write] identity-sync:StartSync */
	static readonly START_SYNC = "identity-sync:StartSync";
	/** [Write] identity-sync:StopSync */
	static readonly STOP_SYNC = "identity-sync:StopSync";
	/** [Write] identity-sync:UpdateSyncTarget */
	static readonly UPDATE_SYNC_TARGET = "identity-sync:UpdateSyncTarget";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IdentitySyncActions.GET_SYNC_PROFILE,
		IdentitySyncActions.GET_SYNC_TARGET,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IdentitySyncActions.CREATE_SYNC_FILTER,
		IdentitySyncActions.CREATE_SYNC_PROFILE,
		IdentitySyncActions.CREATE_SYNC_TARGET,
		IdentitySyncActions.DELETE_SYNC_FILTER,
		IdentitySyncActions.DELETE_SYNC_PROFILE,
		IdentitySyncActions.DELETE_SYNC_TARGET,
		IdentitySyncActions.START_SYNC,
		IdentitySyncActions.STOP_SYNC,
		IdentitySyncActions.UPDATE_SYNC_TARGET,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IdentitySyncActions.LIST_SYNC_FILTERS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		IdentitySyncActions.ALLOW_VENDED_LOG_DELIVERY_FOR_RESOURCE,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const SyncProfileResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identity-sync:(?<region>[^:]*):(?<account>[^:]*):profile/(?<syncProfileName>[^:/?]+)$",
);
const SyncTargetResourceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):identity-sync:(?<region>[^:]*):(?<account>[^:]*):target/(?<syncProfileName>[^:/?]+)/(?<syncTargetName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for identity-sync resources.
 */
export class IdentitySyncResources {
	/**
	 * Builds an ARN for the SyncProfileResource resource.
	 */
	static syncProfileResource(props: {
		/** The SyncProfileName component of the ARN. */
		readonly syncProfileName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identity-sync:${props.region ?? "*"}:${props.account ?? "*"}:profile/${props.syncProfileName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SyncProfileResource resource.
	 */
	static isValidSyncProfileResourceArn(arn: string): boolean {
		return SyncProfileResourceArnRegex.test(arn);
	}

	/**
	 * Parses a SyncProfileResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSyncProfileResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		syncProfileName: string;
	} {
		const match = SyncProfileResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SyncProfileResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			syncProfileName: match.groups!.syncProfileName,
		};
	}

	/**
	 * Builds an ARN for the SyncTargetResource resource.
	 */
	static syncTargetResource(props: {
		/** The SyncProfileName component of the ARN. */
		readonly syncProfileName: string;
		/** The SyncTargetName component of the ARN. */
		readonly syncTargetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:identity-sync:${props.region ?? "*"}:${props.account ?? "*"}:target/${props.syncProfileName}/${props.syncTargetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SyncTargetResource resource.
	 */
	static isValidSyncTargetResourceArn(arn: string): boolean {
		return SyncTargetResourceArnRegex.test(arn);
	}

	/**
	 * Parses a SyncTargetResource ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSyncTargetResourceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		syncProfileName: string;
		syncTargetName: string;
	} {
		const match = SyncTargetResourceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SyncTargetResource ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			syncProfileName: match.groups!.syncProfileName,
			syncTargetName: match.groups!.syncTargetName,
		};
	}
}
