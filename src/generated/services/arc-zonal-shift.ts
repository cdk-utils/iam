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
	static readonly CancelPracticeRun = "arc-zonal-shift:CancelPracticeRun";
	/** [Write] arc-zonal-shift:CancelZonalShift */
	static readonly CancelZonalShift = "arc-zonal-shift:CancelZonalShift";
	/** [Write] arc-zonal-shift:CreatePracticeRunConfiguration */
	static readonly CreatePracticeRunConfiguration =
		"arc-zonal-shift:CreatePracticeRunConfiguration";
	/** [Write] arc-zonal-shift:DeletePracticeRunConfiguration */
	static readonly DeletePracticeRunConfiguration =
		"arc-zonal-shift:DeletePracticeRunConfiguration";
	/** [Read] arc-zonal-shift:GetAutoshiftObserverNotificationStatus */
	static readonly actionGetAutoshiftObserverNotificationStatus =
		"arc-zonal-shift:GetAutoshiftObserverNotificationStatus";
	/** [Read] arc-zonal-shift:GetManagedResource */
	static readonly actionGetManagedResource =
		"arc-zonal-shift:GetManagedResource";
	/** [List] arc-zonal-shift:ListAutoshifts */
	static readonly ListAutoshifts = "arc-zonal-shift:ListAutoshifts";
	/** [List] arc-zonal-shift:ListManagedResources */
	static readonly ListManagedResources = "arc-zonal-shift:ListManagedResources";
	/** [List] arc-zonal-shift:ListZonalShifts */
	static readonly ListZonalShifts = "arc-zonal-shift:ListZonalShifts";
	/** [Write] arc-zonal-shift:StartPracticeRun */
	static readonly StartPracticeRun = "arc-zonal-shift:StartPracticeRun";
	/** [Write] arc-zonal-shift:StartZonalShift */
	static readonly StartZonalShift = "arc-zonal-shift:StartZonalShift";
	/** [Write] arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus */
	static readonly UpdateAutoshiftObserverNotificationStatus =
		"arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus";
	/** [Write] arc-zonal-shift:UpdatePracticeRunConfiguration */
	static readonly UpdatePracticeRunConfiguration =
		"arc-zonal-shift:UpdatePracticeRunConfiguration";
	/** [Write] arc-zonal-shift:UpdateZonalAutoshiftConfiguration */
	static readonly UpdateZonalAutoshiftConfiguration =
		"arc-zonal-shift:UpdateZonalAutoshiftConfiguration";
	/** [Write] arc-zonal-shift:UpdateZonalShift */
	static readonly UpdateZonalShift = "arc-zonal-shift:UpdateZonalShift";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ArcZonalShiftActions.actionGetAutoshiftObserverNotificationStatus,
		ArcZonalShiftActions.actionGetManagedResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ArcZonalShiftActions.CancelPracticeRun,
		ArcZonalShiftActions.CancelZonalShift,
		ArcZonalShiftActions.CreatePracticeRunConfiguration,
		ArcZonalShiftActions.DeletePracticeRunConfiguration,
		ArcZonalShiftActions.StartPracticeRun,
		ArcZonalShiftActions.StartZonalShift,
		ArcZonalShiftActions.UpdateAutoshiftObserverNotificationStatus,
		ArcZonalShiftActions.UpdatePracticeRunConfiguration,
		ArcZonalShiftActions.UpdateZonalAutoshiftConfiguration,
		ArcZonalShiftActions.UpdateZonalShift,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ArcZonalShiftActions.ListAutoshifts,
		ArcZonalShiftActions.ListManagedResources,
		ArcZonalShiftActions.ListZonalShifts,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a ALB ARN.
 */
export interface ArcZonalShiftAlbArnProps {
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
}

/**
 * Parsed components of a ALB ARN.
 */
export interface ArcZonalShiftAlbArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LoadBalancerName component. */
	readonly loadBalancerName: string;
	/** The LoadBalancerId component. */
	readonly loadBalancerId: string;
}

/**
 * Properties for building a NLB ARN.
 */
export interface ArcZonalShiftNlbArnProps {
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
}

/**
 * Parsed components of a NLB ARN.
 */
export interface ArcZonalShiftNlbArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LoadBalancerName component. */
	readonly loadBalancerName: string;
	/** The LoadBalancerId component. */
	readonly loadBalancerId: string;
}

const AlbArnRegex =
	/^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer\/app\/(?<loadBalancerName>[^:/?]+)\/(?<loadBalancerId>[^:/?]+)$/;
const NlbArnRegex =
	/^arn:(?<partition>[^:]+):elasticloadbalancing:(?<region>[^:]*):(?<account>[^:]*):loadbalancer\/net\/(?<loadBalancerName>[^:/?]+)\/(?<loadBalancerId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for arc-zonal-shift resources.
 */
export class ArcZonalShiftResources {
	/**
	 * Builds an ARN for the ALB resource.
	 */
	static alb(props: ArcZonalShiftAlbArnProps): string {
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
	static parseAlbArn(arn: string): ArcZonalShiftAlbArnComponents {
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
	static nlb(props: ArcZonalShiftNlbArnProps): string {
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
	static parseNlbArn(arn: string): ArcZonalShiftNlbArnComponents {
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
	static readonly CancelPracticeRun: string[] = [
		"arc-zonal-shift:CancelPracticeRun",
	];
	/** IAM actions required for the CancelZonalShift API call. */
	static readonly CancelZonalShift: string[] = [
		"arc-zonal-shift:CancelZonalShift",
	];
	/** IAM actions required for the CreatePracticeRunConfiguration API call. */
	static readonly CreatePracticeRunConfiguration: string[] = [
		"arc-zonal-shift:CreatePracticeRunConfiguration",
	];
	/** IAM actions required for the DeletePracticeRunConfiguration API call. */
	static readonly DeletePracticeRunConfiguration: string[] = [
		"arc-zonal-shift:DeletePracticeRunConfiguration",
	];
	/** IAM actions required for the GetAutoshiftObserverNotificationStatus API call. */
	static readonly opGetAutoshiftObserverNotificationStatus: string[] = [
		"arc-zonal-shift:GetAutoshiftObserverNotificationStatus",
	];
	/** IAM actions required for the GetManagedResource API call. */
	static readonly opGetManagedResource: string[] = [
		"arc-zonal-shift:GetManagedResource",
	];
	/** IAM actions required for the ListAutoshifts API call. */
	static readonly ListAutoshifts: string[] = ["arc-zonal-shift:ListAutoshifts"];
	/** IAM actions required for the ListManagedResources API call. */
	static readonly ListManagedResources: string[] = [
		"arc-zonal-shift:ListManagedResources",
	];
	/** IAM actions required for the ListZonalShifts API call. */
	static readonly ListZonalShifts: string[] = [
		"arc-zonal-shift:ListZonalShifts",
	];
	/** IAM actions required for the StartPracticeRun API call. */
	static readonly StartPracticeRun: string[] = [
		"arc-zonal-shift:StartPracticeRun",
	];
	/** IAM actions required for the StartZonalShift API call. */
	static readonly StartZonalShift: string[] = [
		"arc-zonal-shift:StartZonalShift",
	];
	/** IAM actions required for the UpdateAutoshiftObserverNotificationStatus API call. */
	static readonly UpdateAutoshiftObserverNotificationStatus: string[] = [
		"arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus",
	];
	/** IAM actions required for the UpdatePracticeRunConfiguration API call. */
	static readonly UpdatePracticeRunConfiguration: string[] = [
		"arc-zonal-shift:UpdatePracticeRunConfiguration",
	];
	/** IAM actions required for the UpdateZonalAutoshiftConfiguration API call. */
	static readonly UpdateZonalAutoshiftConfiguration: string[] = [
		"arc-zonal-shift:UpdateZonalAutoshiftConfiguration",
	];
	/** IAM actions required for the UpdateZonalShift API call. */
	static readonly UpdateZonalShift: string[] = [
		"arc-zonal-shift:UpdateZonalShift",
	];
}

/**
 * Condition key constants and builders for arc-zonal-shift.
 */
export class ArcZonalShiftConditions {
	/** Condition keys applicable to the CancelPracticeRun action. */
	static readonly CancelPracticeRunConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CancelZonalShift action. */
	static readonly CancelZonalShiftConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the CreatePracticeRunConfiguration action. */
	static readonly CreatePracticeRunConfigurationConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the DeletePracticeRunConfiguration action. */
	static readonly DeletePracticeRunConfigurationConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetManagedResource action. */
	static readonly actionGetManagedResourceConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartPracticeRun action. */
	static readonly StartPracticeRunConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the StartZonalShift action. */
	static readonly StartZonalShiftConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdatePracticeRunConfiguration action. */
	static readonly UpdatePracticeRunConfigurationConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateZonalAutoshiftConfiguration action. */
	static readonly UpdateZonalAutoshiftConfigurationConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the UpdateZonalShift action. */
	static readonly UpdateZonalShiftConditionKeys: string[] = [
		"arc-zonal-shift:ResourceIdentifier",
		"aws:ResourceTag/${TagKey}",
		"elasticloadbalancing:ResourceTag/${TagKey}",
	];

	/** Condition key: arc-zonal-shift:ResourceIdentifier (String) */
	static readonly RESOURCE_IDENTIFIER = "arc-zonal-shift:ResourceIdentifier";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
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
