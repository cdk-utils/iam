// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/pricingplanmanager.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the pricingplanmanager service.
 */
export class PricingplanmanagerActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "pricingplanmanager";

	/** [Write] pricingplanmanager:ApprovePaidSubscription */
	static readonly ApprovePaidSubscription =
		"pricingplanmanager:ApprovePaidSubscription";
	/** [Write] pricingplanmanager:AssociateResourcesToSubscription */
	static readonly AssociateResourcesToSubscription =
		"pricingplanmanager:AssociateResourcesToSubscription";
	/** [Write] pricingplanmanager:CancelSubscription */
	static readonly CancelSubscription = "pricingplanmanager:CancelSubscription";
	/** [Write] pricingplanmanager:CancelSubscriptionChange */
	static readonly CancelSubscriptionChange =
		"pricingplanmanager:CancelSubscriptionChange";
	/** [Write] pricingplanmanager:CreateSubscription */
	static readonly CreateSubscription = "pricingplanmanager:CreateSubscription";
	/** [Write] pricingplanmanager:DisassociateResourcesFromSubscription */
	static readonly DisassociateResourcesFromSubscription =
		"pricingplanmanager:DisassociateResourcesFromSubscription";
	/** [Read] pricingplanmanager:GetSubscription */
	static readonly actionGetSubscription = "pricingplanmanager:GetSubscription";
	/** [Read] pricingplanmanager:ListSubscriptions */
	static readonly ListSubscriptions = "pricingplanmanager:ListSubscriptions";
	/** [Write] pricingplanmanager:UpdateSubscription */
	static readonly UpdateSubscription = "pricingplanmanager:UpdateSubscription";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PricingplanmanagerActions.actionGetSubscription,
		PricingplanmanagerActions.ListSubscriptions,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PricingplanmanagerActions.ApprovePaidSubscription,
		PricingplanmanagerActions.AssociateResourcesToSubscription,
		PricingplanmanagerActions.CancelSubscription,
		PricingplanmanagerActions.CancelSubscriptionChange,
		PricingplanmanagerActions.CreateSubscription,
		PricingplanmanagerActions.DisassociateResourcesFromSubscription,
		PricingplanmanagerActions.UpdateSubscription,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a subscription ARN.
 */
export interface PricingplanmanagerSubscriptionArnProps {
	/** The SubscriptionId component of the ARN. */
	readonly subscriptionId: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a subscription ARN.
 */
export interface PricingplanmanagerSubscriptionArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SubscriptionId component. */
	readonly subscriptionId: string;
}

const SubscriptionArnRegex =
	/^arn:(?<partition>[^:]+):pricingplanmanager::(?<account>[^:]*):subscription\/(?<subscriptionId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for pricingplanmanager resources.
 */
export class PricingplanmanagerResources {
	/**
	 * Builds an ARN for the subscription resource.
	 */
	static subscription(props: PricingplanmanagerSubscriptionArnProps): string {
		return `arn:${props.partition ?? "aws"}:pricingplanmanager::${props.account ?? "*"}:subscription/${props.subscriptionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the subscription resource.
	 */
	static isValidSubscriptionArn(arn: string): boolean {
		return SubscriptionArnRegex.test(arn);
	}

	/**
	 * Parses a subscription ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSubscriptionArn(
		arn: string,
	): PricingplanmanagerSubscriptionArnComponents {
		const match = SubscriptionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid subscription ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			subscriptionId: match.groups!.subscriptionId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for pricingplanmanager.
 */
export class PricingplanmanagerOperations {
	/** IAM actions required for the ApprovePaidSubscription API call. */
	static readonly ApprovePaidSubscription: string[] = [
		"pricingplanmanager:ApprovePaidSubscription",
	];
	/** IAM actions required for the AssociateResourcesToSubscription API call. */
	static readonly AssociateResourcesToSubscription: string[] = [
		"pricingplanmanager:AssociateResourcesToSubscription",
	];
	/** IAM actions required for the CancelSubscription API call. */
	static readonly CancelSubscription: string[] = [
		"pricingplanmanager:CancelSubscription",
	];
	/** IAM actions required for the CancelSubscriptionChange API call. */
	static readonly CancelSubscriptionChange: string[] = [
		"pricingplanmanager:CancelSubscriptionChange",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CreateSubscription: string[] = [
		"pricingplanmanager:ApprovePaidSubscription",
		"pricingplanmanager:CreateSubscription",
	];
	/** IAM actions required for the DisassociateResourcesFromSubscription API call. */
	static readonly DisassociateResourcesFromSubscription: string[] = [
		"pricingplanmanager:DisassociateResourcesFromSubscription",
	];
	/** IAM actions required for the GetSubscription API call. */
	static readonly opGetSubscription: string[] = [
		"pricingplanmanager:GetSubscription",
	];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly ListSubscriptions: string[] = [
		"pricingplanmanager:ListSubscriptions",
	];
	/** IAM actions required for the UpdateSubscription API call. */
	static readonly UpdateSubscription: string[] = [
		"pricingplanmanager:UpdateSubscription",
	];
}
