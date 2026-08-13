// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/evs.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the evs service.
 */
export class EvsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "evs";

	/** [Write] evs:AssociateEipToVlan */
	static readonly AssociateEipToVlan = "evs:AssociateEipToVlan";
	/** [Write] evs:CreateEntitlement */
	static readonly CreateEntitlement = "evs:CreateEntitlement";
	/** [Write] evs:CreateEnvironment */
	static readonly CreateEnvironment = "evs:CreateEnvironment";
	/** [Write] evs:CreateEnvironmentConnector */
	static readonly CreateEnvironmentConnector = "evs:CreateEnvironmentConnector";
	/** [Write] evs:CreateEnvironmentHost */
	static readonly CreateEnvironmentHost = "evs:CreateEnvironmentHost";
	/** [Write] evs:DeleteEntitlement */
	static readonly DeleteEntitlement = "evs:DeleteEntitlement";
	/** [Write] evs:DeleteEnvironment */
	static readonly DeleteEnvironment = "evs:DeleteEnvironment";
	/** [Write] evs:DeleteEnvironmentConnector */
	static readonly DeleteEnvironmentConnector = "evs:DeleteEnvironmentConnector";
	/** [Write] evs:DeleteEnvironmentHost */
	static readonly DeleteEnvironmentHost = "evs:DeleteEnvironmentHost";
	/** [Write] evs:DisassociateEipFromVlan */
	static readonly DisassociateEipFromVlan = "evs:DisassociateEipFromVlan";
	/** [Read] evs:GetDepotUrl */
	static readonly actionGetDepotUrl = "evs:GetDepotUrl";
	/** [Read] evs:GetEnvironment */
	static readonly actionGetEnvironment = "evs:GetEnvironment";
	/** [Read] evs:GetVersions */
	static readonly actionGetVersions = "evs:GetVersions";
	/** [List] evs:ListEnvironmentConnectors */
	static readonly ListEnvironmentConnectors = "evs:ListEnvironmentConnectors";
	/** [List] evs:ListEnvironmentHosts */
	static readonly ListEnvironmentHosts = "evs:ListEnvironmentHosts";
	/** [List] evs:ListEnvironmentVlans */
	static readonly ListEnvironmentVlans = "evs:ListEnvironmentVlans";
	/** [List] evs:ListEnvironments */
	static readonly ListEnvironments = "evs:ListEnvironments";
	/** [Read] evs:ListTagsForResource */
	static readonly ListTagsForResource = "evs:ListTagsForResource";
	/** [List] evs:ListVmEntitlements */
	static readonly ListVmEntitlements = "evs:ListVmEntitlements";
	/** [Tagging] evs:TagResource */
	static readonly TagResource = "evs:TagResource";
	/** [Tagging] evs:UntagResource */
	static readonly UntagResource = "evs:UntagResource";
	/** [Write] evs:UpdateEnvironmentConnector */
	static readonly UpdateEnvironmentConnector = "evs:UpdateEnvironmentConnector";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EvsActions.actionGetDepotUrl,
		EvsActions.actionGetEnvironment,
		EvsActions.actionGetVersions,
		EvsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EvsActions.AssociateEipToVlan,
		EvsActions.CreateEntitlement,
		EvsActions.CreateEnvironment,
		EvsActions.CreateEnvironmentConnector,
		EvsActions.CreateEnvironmentHost,
		EvsActions.DeleteEntitlement,
		EvsActions.DeleteEnvironment,
		EvsActions.DeleteEnvironmentConnector,
		EvsActions.DeleteEnvironmentHost,
		EvsActions.DisassociateEipFromVlan,
		EvsActions.UpdateEnvironmentConnector,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EvsActions.ListEnvironmentConnectors,
		EvsActions.ListEnvironmentHosts,
		EvsActions.ListEnvironmentVlans,
		EvsActions.ListEnvironments,
		EvsActions.ListVmEntitlements,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EvsActions.TagResource,
		EvsActions.UntagResource,
	];
}

/**
 * Properties for building a environment ARN.
 */
export interface EvsEnvironmentArnProps {
	/** The EnvironmentIdentifier component of the ARN. */
	readonly environmentIdentifier: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a environment ARN.
 */
export interface EvsEnvironmentArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EnvironmentIdentifier component. */
	readonly environmentIdentifier: string;
}

const EnvironmentArnRegex =
	/^arn:(?<partition>[^:]+):evs:(?<region>[^:]*):(?<account>[^:]*):environment\/(?<environmentIdentifier>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for evs resources.
 */
export class EvsResources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: EvsEnvironmentArnProps): string {
		return `arn:${props.partition ?? "aws"}:evs:${props.region ?? "*"}:${props.account ?? "*"}:environment/${props.environmentIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the environment resource.
	 */
	static isValidEnvironmentArn(arn: string): boolean {
		return EnvironmentArnRegex.test(arn);
	}

	/**
	 * Parses a environment ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEnvironmentArn(arn: string): EvsEnvironmentArnComponents {
		const match = EnvironmentArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid environment ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			environmentIdentifier: match.groups!.environmentIdentifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for evs.
 */
export class EvsOperations {
	/** IAM actions required for the AssociateEipToVlan API call. */
	static readonly AssociateEipToVlan: string[] = ["evs:AssociateEipToVlan"];
	/** IAM actions required for the CreateEntitlement API call. */
	static readonly CreateEntitlement: string[] = ["evs:CreateEntitlement"];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CreateEnvironment: string[] = [
		"evs:CreateEnvironment",
		"evs:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentConnector API call. */
	static readonly CreateEnvironmentConnector: string[] = [
		"evs:CreateEnvironmentConnector",
	];
	/** IAM actions required for the CreateEnvironmentHost API call. */
	static readonly CreateEnvironmentHost: string[] = [
		"evs:CreateEnvironmentHost",
	];
	/** IAM actions required for the DeleteEntitlement API call. */
	static readonly DeleteEntitlement: string[] = ["evs:DeleteEntitlement"];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DeleteEnvironment: string[] = ["evs:DeleteEnvironment"];
	/** IAM actions required for the DeleteEnvironmentConnector API call. */
	static readonly DeleteEnvironmentConnector: string[] = [
		"evs:DeleteEnvironmentConnector",
	];
	/** IAM actions required for the DeleteEnvironmentHost API call. */
	static readonly DeleteEnvironmentHost: string[] = [
		"evs:DeleteEnvironmentHost",
	];
	/** IAM actions required for the DisassociateEipFromVlan API call. */
	static readonly DisassociateEipFromVlan: string[] = [
		"evs:DisassociateEipFromVlan",
	];
	/** IAM actions required for the GetDepotUrl API call. */
	static readonly opGetDepotUrl: string[] = ["evs:GetDepotUrl"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly opGetEnvironment: string[] = ["evs:GetEnvironment"];
	/** IAM actions required for the GetVersions API call. */
	static readonly opGetVersions: string[] = ["evs:GetVersions"];
	/** IAM actions required for the ListEnvironmentConnectors API call. */
	static readonly ListEnvironmentConnectors: string[] = [
		"evs:ListEnvironmentConnectors",
	];
	/** IAM actions required for the ListEnvironmentHosts API call. */
	static readonly ListEnvironmentHosts: string[] = ["evs:ListEnvironmentHosts"];
	/** IAM actions required for the ListEnvironmentVlans API call. */
	static readonly ListEnvironmentVlans: string[] = ["evs:ListEnvironmentVlans"];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly ListEnvironments: string[] = ["evs:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = ["evs:ListTagsForResource"];
	/** IAM actions required for the ListVmEntitlements API call. */
	static readonly ListVmEntitlements: string[] = ["evs:ListVmEntitlements"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["evs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["evs:UntagResource"];
	/** IAM actions required for the UpdateEnvironmentConnector API call. */
	static readonly UpdateEnvironmentConnector: string[] = [
		"evs:UpdateEnvironmentConnector",
	];
}

/**
 * Condition key constants and builders for evs.
 */
export class EvsConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CreateEnvironmentConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
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

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";

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
}
