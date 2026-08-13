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
	static readonly AllowVendedLogDeliveryForResource =
		"identity-sync:AllowVendedLogDeliveryForResource";
	/** [Write] identity-sync:CreateSyncFilter */
	static readonly CreateSyncFilter = "identity-sync:CreateSyncFilter";
	/** [Write] identity-sync:CreateSyncProfile */
	static readonly CreateSyncProfile = "identity-sync:CreateSyncProfile";
	/** [Write] identity-sync:CreateSyncTarget */
	static readonly CreateSyncTarget = "identity-sync:CreateSyncTarget";
	/** [Write] identity-sync:DeleteSyncFilter */
	static readonly DeleteSyncFilter = "identity-sync:DeleteSyncFilter";
	/** [Write] identity-sync:DeleteSyncProfile */
	static readonly DeleteSyncProfile = "identity-sync:DeleteSyncProfile";
	/** [Write] identity-sync:DeleteSyncTarget */
	static readonly DeleteSyncTarget = "identity-sync:DeleteSyncTarget";
	/** [Read] identity-sync:GetSyncProfile */
	static readonly actionGetSyncProfile = "identity-sync:GetSyncProfile";
	/** [Read] identity-sync:GetSyncTarget */
	static readonly actionGetSyncTarget = "identity-sync:GetSyncTarget";
	/** [List] identity-sync:ListSyncFilters */
	static readonly ListSyncFilters = "identity-sync:ListSyncFilters";
	/** [Write] identity-sync:StartSync */
	static readonly StartSync = "identity-sync:StartSync";
	/** [Write] identity-sync:StopSync */
	static readonly StopSync = "identity-sync:StopSync";
	/** [Write] identity-sync:UpdateSyncTarget */
	static readonly UpdateSyncTarget = "identity-sync:UpdateSyncTarget";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IdentitySyncActions.actionGetSyncProfile,
		IdentitySyncActions.actionGetSyncTarget,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IdentitySyncActions.CreateSyncFilter,
		IdentitySyncActions.CreateSyncProfile,
		IdentitySyncActions.CreateSyncTarget,
		IdentitySyncActions.DeleteSyncFilter,
		IdentitySyncActions.DeleteSyncProfile,
		IdentitySyncActions.DeleteSyncTarget,
		IdentitySyncActions.StartSync,
		IdentitySyncActions.StopSync,
		IdentitySyncActions.UpdateSyncTarget,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IdentitySyncActions.ListSyncFilters,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		IdentitySyncActions.AllowVendedLogDeliveryForResource,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a SyncProfileResource ARN.
 */
export interface IdentitySyncSyncProfileResourceArnProps {
	/** The SyncProfileName component of the ARN. */
	readonly syncProfileName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a SyncProfileResource ARN.
 */
export interface IdentitySyncSyncProfileResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SyncProfileName component. */
	readonly syncProfileName: string;
}

/**
 * Properties for building a SyncTargetResource ARN.
 */
export interface IdentitySyncSyncTargetResourceArnProps {
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
}

/**
 * Parsed components of a SyncTargetResource ARN.
 */
export interface IdentitySyncSyncTargetResourceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SyncProfileName component. */
	readonly syncProfileName: string;
	/** The SyncTargetName component. */
	readonly syncTargetName: string;
}

const SyncProfileResourceArnRegex =
	/^arn:(?<partition>[^:]+):identity-sync:(?<region>[^:]*):(?<account>[^:]*):profile\/(?<syncProfileName>[^:/?]+)$/;
const SyncTargetResourceArnRegex =
	/^arn:(?<partition>[^:]+):identity-sync:(?<region>[^:]*):(?<account>[^:]*):target\/(?<syncProfileName>[^:/?]+)\/(?<syncTargetName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for identity-sync resources.
 */
export class IdentitySyncResources {
	/**
	 * Builds an ARN for the SyncProfileResource resource.
	 */
	static syncProfileResource(
		props: IdentitySyncSyncProfileResourceArnProps,
	): string {
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
	static parseSyncProfileResourceArn(
		arn: string,
	): IdentitySyncSyncProfileResourceArnComponents {
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
	static syncTargetResource(
		props: IdentitySyncSyncTargetResourceArnProps,
	): string {
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
	static parseSyncTargetResourceArn(
		arn: string,
	): IdentitySyncSyncTargetResourceArnComponents {
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
