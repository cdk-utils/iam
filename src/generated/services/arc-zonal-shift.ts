// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/arc-zonal-shift.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the arc-zonal-shift service.
 */
export class ArcZonalShiftActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "arc-zonal-shift";

	/** [Write] arc-zonal-shift:CancelPracticeRun */
	static readonly CANCEL_PRACTICE_RUN = "arc-zonal-shift:CancelPracticeRun";
	/** [Write] arc-zonal-shift:CancelZonalShift */
	static readonly CANCEL_ZONAL_SHIFT = "arc-zonal-shift:CancelZonalShift";
	/** [Write] arc-zonal-shift:CreatePracticeRunConfiguration */
	static readonly CREATE_PRACTICE_RUN_CONFIGURATION =
		"arc-zonal-shift:CreatePracticeRunConfiguration";
	/** [Write] arc-zonal-shift:DeletePracticeRunConfiguration */
	static readonly DELETE_PRACTICE_RUN_CONFIGURATION =
		"arc-zonal-shift:DeletePracticeRunConfiguration";
	/** [Read] arc-zonal-shift:GetAutoshiftObserverNotificationStatus */
	static readonly GET_AUTOSHIFT_OBSERVER_NOTIFICATION_STATUS =
		"arc-zonal-shift:GetAutoshiftObserverNotificationStatus";
	/** [Read] arc-zonal-shift:GetManagedResource */
	static readonly GET_MANAGED_RESOURCE = "arc-zonal-shift:GetManagedResource";
	/** [List] arc-zonal-shift:ListAutoshifts */
	static readonly LIST_AUTOSHIFTS = "arc-zonal-shift:ListAutoshifts";
	/** [List] arc-zonal-shift:ListManagedResources */
	static readonly LIST_MANAGED_RESOURCES =
		"arc-zonal-shift:ListManagedResources";
	/** [List] arc-zonal-shift:ListZonalShifts */
	static readonly LIST_ZONAL_SHIFTS = "arc-zonal-shift:ListZonalShifts";
	/** [Write] arc-zonal-shift:StartPracticeRun */
	static readonly START_PRACTICE_RUN = "arc-zonal-shift:StartPracticeRun";
	/** [Write] arc-zonal-shift:StartZonalShift */
	static readonly START_ZONAL_SHIFT = "arc-zonal-shift:StartZonalShift";
	/** [Write] arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus */
	static readonly UPDATE_AUTOSHIFT_OBSERVER_NOTIFICATION_STATUS =
		"arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus";
	/** [Write] arc-zonal-shift:UpdatePracticeRunConfiguration */
	static readonly UPDATE_PRACTICE_RUN_CONFIGURATION =
		"arc-zonal-shift:UpdatePracticeRunConfiguration";
	/** [Write] arc-zonal-shift:UpdateZonalAutoshiftConfiguration */
	static readonly UPDATE_ZONAL_AUTOSHIFT_CONFIGURATION =
		"arc-zonal-shift:UpdateZonalAutoshiftConfiguration";
	/** [Write] arc-zonal-shift:UpdateZonalShift */
	static readonly UPDATE_ZONAL_SHIFT = "arc-zonal-shift:UpdateZonalShift";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ArcZonalShiftActions.GET_AUTOSHIFT_OBSERVER_NOTIFICATION_STATUS,
		ArcZonalShiftActions.GET_MANAGED_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ArcZonalShiftActions.CANCEL_PRACTICE_RUN,
		ArcZonalShiftActions.CANCEL_ZONAL_SHIFT,
		ArcZonalShiftActions.CREATE_PRACTICE_RUN_CONFIGURATION,
		ArcZonalShiftActions.DELETE_PRACTICE_RUN_CONFIGURATION,
		ArcZonalShiftActions.START_PRACTICE_RUN,
		ArcZonalShiftActions.START_ZONAL_SHIFT,
		ArcZonalShiftActions.UPDATE_AUTOSHIFT_OBSERVER_NOTIFICATION_STATUS,
		ArcZonalShiftActions.UPDATE_PRACTICE_RUN_CONFIGURATION,
		ArcZonalShiftActions.UPDATE_ZONAL_AUTOSHIFT_CONFIGURATION,
		ArcZonalShiftActions.UPDATE_ZONAL_SHIFT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ArcZonalShiftActions.LIST_AUTOSHIFTS,
		ArcZonalShiftActions.LIST_MANAGED_RESOURCES,
		ArcZonalShiftActions.LIST_ZONAL_SHIFTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const AlbArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/app/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)$",
);
const NlbArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer/net/(?<loadBalancerName>[^:/?]+)/(?<loadBalancerId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for arc-zonal-shift resources.
 */
export class ArcZonalShiftResources {
	/**
	 * Builds an ARN for the ALB resource.
	 */
	static alb(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:loadbalancer/app/${props.loadBalancerName}/${props.loadBalancerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ALB resource.
	 */
	static isValidAlbArn(arn: string): boolean {
		return AlbArnRegex.test(arn);
	}

	/**
	 * Parses a ALB ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAlbArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		loadBalancerName: string;
		loadBalancerId: string;
	} {
		const match = AlbArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ALB ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
		};
	}

	/**
	 * Builds an ARN for the NLB resource.
	 */
	static nlb(props: {
		/** The LoadBalancerName component of the ARN. */
		readonly loadBalancerName: string;
		/** The LoadBalancerId component of the ARN. */
		readonly loadBalancerId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:elasticloadbalancing:${props.region ?? "*"}:${props.account ?? "*"}:loadbalancer/net/${props.loadBalancerName}/${props.loadBalancerId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the NLB resource.
	 */
	static isValidNlbArn(arn: string): boolean {
		return NlbArnRegex.test(arn);
	}

	/**
	 * Parses a NLB ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNlbArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		loadBalancerName: string;
		loadBalancerId: string;
	} {
		const match = NlbArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid NLB ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			loadBalancerName: match.groups!.loadBalancerName,
			loadBalancerId: match.groups!.loadBalancerId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for arc-zonal-shift.
 */
export class ArcZonalShiftOperations {
	/** IAM actions required for the CancelPracticeRun API call. */
	static readonly CANCEL_PRACTICE_RUN: string[] = [
		"arc-zonal-shift:CancelPracticeRun",
	];
	/** IAM actions required for the CancelZonalShift API call. */
	static readonly CANCEL_ZONAL_SHIFT: string[] = [
		"arc-zonal-shift:CancelZonalShift",
	];
	/** IAM actions required for the CreatePracticeRunConfiguration API call. */
	static readonly CREATE_PRACTICE_RUN_CONFIGURATION: string[] = [
		"arc-zonal-shift:CreatePracticeRunConfiguration",
	];
	/** IAM actions required for the DeletePracticeRunConfiguration API call. */
	static readonly DELETE_PRACTICE_RUN_CONFIGURATION: string[] = [
		"arc-zonal-shift:DeletePracticeRunConfiguration",
	];
	/** IAM actions required for the GetAutoshiftObserverNotificationStatus API call. */
	static readonly GET_AUTOSHIFT_OBSERVER_NOTIFICATION_STATUS: string[] = [
		"arc-zonal-shift:GetAutoshiftObserverNotificationStatus",
	];
	/** IAM actions required for the GetManagedResource API call. */
	static readonly GET_MANAGED_RESOURCE: string[] = [
		"arc-zonal-shift:GetManagedResource",
	];
	/** IAM actions required for the ListAutoshifts API call. */
	static readonly LIST_AUTOSHIFTS: string[] = [
		"arc-zonal-shift:ListAutoshifts",
	];
	/** IAM actions required for the ListManagedResources API call. */
	static readonly LIST_MANAGED_RESOURCES: string[] = [
		"arc-zonal-shift:ListManagedResources",
	];
	/** IAM actions required for the ListZonalShifts API call. */
	static readonly LIST_ZONAL_SHIFTS: string[] = [
		"arc-zonal-shift:ListZonalShifts",
	];
	/** IAM actions required for the StartPracticeRun API call. */
	static readonly START_PRACTICE_RUN: string[] = [
		"arc-zonal-shift:StartPracticeRun",
	];
	/** IAM actions required for the StartZonalShift API call. */
	static readonly START_ZONAL_SHIFT: string[] = [
		"arc-zonal-shift:StartZonalShift",
	];
	/** IAM actions required for the UpdateAutoshiftObserverNotificationStatus API call. */
	static readonly UPDATE_AUTOSHIFT_OBSERVER_NOTIFICATION_STATUS: string[] = [
		"arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus",
	];
	/** IAM actions required for the UpdatePracticeRunConfiguration API call. */
	static readonly UPDATE_PRACTICE_RUN_CONFIGURATION: string[] = [
		"arc-zonal-shift:UpdatePracticeRunConfiguration",
	];
	/** IAM actions required for the UpdateZonalAutoshiftConfiguration API call. */
	static readonly UPDATE_ZONAL_AUTOSHIFT_CONFIGURATION: string[] = [
		"arc-zonal-shift:UpdateZonalAutoshiftConfiguration",
	];
	/** IAM actions required for the UpdateZonalShift API call. */
	static readonly UPDATE_ZONAL_SHIFT: string[] = [
		"arc-zonal-shift:UpdateZonalShift",
	];
}

/**
 * Condition key constants and builders for arc-zonal-shift.
 */
export class ArcZonalShiftConditions {
	/** Condition keys applicable to the CancelPracticeRun action. */
	static readonly CANCEL_PRACTICE_RUN_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CancelZonalShift action. */
	static readonly CANCEL_ZONAL_SHIFT_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreatePracticeRunConfiguration action. */
	static readonly CREATE_PRACTICE_RUN_CONFIGURATION_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePracticeRunConfiguration action. */
	static readonly DELETE_PRACTICE_RUN_CONFIGURATION_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetManagedResource action. */
	static readonly GET_MANAGED_RESOURCE_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartPracticeRun action. */
	static readonly START_PRACTICE_RUN_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartZonalShift action. */
	static readonly START_ZONAL_SHIFT_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdatePracticeRunConfiguration action. */
	static readonly UPDATE_PRACTICE_RUN_CONFIGURATION_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateZonalAutoshiftConfiguration action. */
	static readonly UPDATE_ZONAL_AUTOSHIFT_CONFIGURATION_CONDITION_KEYS: string[] =
		[
			"arc-zonal-shift:ResourceIdentifier",
			"aws:ResourceTag/${TagKey}",
			"elasticloadbalancing:ResourceTag/${TagKey}",
		];
	/** Condition keys applicable to the UpdateZonalShift action. */
	static readonly UPDATE_ZONAL_SHIFT_CONDITION_KEYS: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];

	/** Condition key: arc-zonal-shift:ResourceIdentifier (String) */
	static readonly RESOURCE_IDENTIFIER = "arc-zonal-shift:ResourceIdentifier";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: elasticloadbalancing:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "elasticloadbalancing:ResourceTag/${TagKey}";

	/**
	 * Generates a condition block for `arc-zonal-shift:ResourceIdentifier`.
	 */
	static resourceIdentifier(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "arc-zonal-shift:ResourceIdentifier": value } };
	}

	/**
	 * Generates a condition block for `aws:ResourceTag/${TagKey}`.
	 */
	static resourceTag(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "aws:ResourceTag/${TagKey}": value } };
	}
}
