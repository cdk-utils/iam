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
	static readonly APPROVE_PAID_SUBSCRIPTION =
		"pricingplanmanager:ApprovePaidSubscription";
	/** [Write] pricingplanmanager:AssociateResourcesToSubscription */
	static readonly ASSOCIATE_RESOURCES_TO_SUBSCRIPTION =
		"pricingplanmanager:AssociateResourcesToSubscription";
	/** [Write] pricingplanmanager:CancelSubscription */
	static readonly CANCEL_SUBSCRIPTION = "pricingplanmanager:CancelSubscription";
	/** [Write] pricingplanmanager:CancelSubscriptionChange */
	static readonly CANCEL_SUBSCRIPTION_CHANGE =
		"pricingplanmanager:CancelSubscriptionChange";
	/** [Write] pricingplanmanager:CreateSubscription */
	static readonly CREATE_SUBSCRIPTION = "pricingplanmanager:CreateSubscription";
	/** [Write] pricingplanmanager:DisassociateResourcesFromSubscription */
	static readonly DISASSOCIATE_RESOURCES_FROM_SUBSCRIPTION =
		"pricingplanmanager:DisassociateResourcesFromSubscription";
	/** [Read] pricingplanmanager:GetSubscription */
	static readonly GET_SUBSCRIPTION = "pricingplanmanager:GetSubscription";
	/** [Read] pricingplanmanager:ListSubscriptions */
	static readonly LIST_SUBSCRIPTIONS = "pricingplanmanager:ListSubscriptions";
	/** [Write] pricingplanmanager:UpdateSubscription */
	static readonly UPDATE_SUBSCRIPTION = "pricingplanmanager:UpdateSubscription";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PricingplanmanagerActions.GET_SUBSCRIPTION,
		PricingplanmanagerActions.LIST_SUBSCRIPTIONS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PricingplanmanagerActions.APPROVE_PAID_SUBSCRIPTION,
		PricingplanmanagerActions.ASSOCIATE_RESOURCES_TO_SUBSCRIPTION,
		PricingplanmanagerActions.CANCEL_SUBSCRIPTION,
		PricingplanmanagerActions.CANCEL_SUBSCRIPTION_CHANGE,
		PricingplanmanagerActions.CREATE_SUBSCRIPTION,
		PricingplanmanagerActions.DISASSOCIATE_RESOURCES_FROM_SUBSCRIPTION,
		PricingplanmanagerActions.UPDATE_SUBSCRIPTION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const SubscriptionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pricingplanmanager::(?<account>[^:]*):subscription/(?<subscriptionId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for pricingplanmanager resources.
 */
export class PricingplanmanagerResources {
	/**
	 * Builds an ARN for the subscription resource.
	 */
	static subscription(props: {
		/** The SubscriptionId component of the ARN. */
		readonly subscriptionId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSubscriptionArn(arn: string): {
		partition: string;
		account: string;
		subscriptionId: string;
	} {
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
	static readonly APPROVE_PAID_SUBSCRIPTION: string[] = [
		"pricingplanmanager:ApprovePaidSubscription",
	];
	/** IAM actions required for the AssociateResourcesToSubscription API call. */
	static readonly ASSOCIATE_RESOURCES_TO_SUBSCRIPTION: string[] = [
		"pricingplanmanager:AssociateResourcesToSubscription",
	];
	/** IAM actions required for the CancelSubscription API call. */
	static readonly CANCEL_SUBSCRIPTION: string[] = [
		"pricingplanmanager:CancelSubscription",
	];
	/** IAM actions required for the CancelSubscriptionChange API call. */
	static readonly CANCEL_SUBSCRIPTION_CHANGE: string[] = [
		"pricingplanmanager:CancelSubscriptionChange",
	];
	/** IAM actions required for the CreateSubscription API call. */
	static readonly CREATE_SUBSCRIPTION: string[] = [
		"pricingplanmanager:ApprovePaidSubscription",
		"pricingplanmanager:CreateSubscription",
	];
	/** IAM actions required for the DisassociateResourcesFromSubscription API call. */
	static readonly DISASSOCIATE_RESOURCES_FROM_SUBSCRIPTION: string[] = [
		"pricingplanmanager:DisassociateResourcesFromSubscription",
	];
	/** IAM actions required for the GetSubscription API call. */
	static readonly GET_SUBSCRIPTION: string[] = [
		"pricingplanmanager:GetSubscription",
	];
	/** IAM actions required for the ListSubscriptions API call. */
	static readonly LIST_SUBSCRIPTIONS: string[] = [
		"pricingplanmanager:ListSubscriptions",
	];
	/** IAM actions required for the UpdateSubscription API call. */
	static readonly UPDATE_SUBSCRIPTION: string[] = [
		"pricingplanmanager:UpdateSubscription",
	];
}
