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
	static readonly ASSOCIATE_EIP_TO_VLAN = "evs:AssociateEipToVlan";
	/** [Write] evs:CreateEntitlement */
	static readonly CREATE_ENTITLEMENT = "evs:CreateEntitlement";
	/** [Write] evs:CreateEnvironment */
	static readonly CREATE_ENVIRONMENT = "evs:CreateEnvironment";
	/** [Write] evs:CreateEnvironmentConnector */
	static readonly CREATE_ENVIRONMENT_CONNECTOR =
		"evs:CreateEnvironmentConnector";
	/** [Write] evs:CreateEnvironmentHost */
	static readonly CREATE_ENVIRONMENT_HOST = "evs:CreateEnvironmentHost";
	/** [Write] evs:DeleteEntitlement */
	static readonly DELETE_ENTITLEMENT = "evs:DeleteEntitlement";
	/** [Write] evs:DeleteEnvironment */
	static readonly DELETE_ENVIRONMENT = "evs:DeleteEnvironment";
	/** [Write] evs:DeleteEnvironmentConnector */
	static readonly DELETE_ENVIRONMENT_CONNECTOR =
		"evs:DeleteEnvironmentConnector";
	/** [Write] evs:DeleteEnvironmentHost */
	static readonly DELETE_ENVIRONMENT_HOST = "evs:DeleteEnvironmentHost";
	/** [Write] evs:DisassociateEipFromVlan */
	static readonly DISASSOCIATE_EIP_FROM_VLAN = "evs:DisassociateEipFromVlan";
	/** [Read] evs:GetDepotUrl */
	static readonly GET_DEPOT_URL = "evs:GetDepotUrl";
	/** [Read] evs:GetEnvironment */
	static readonly GET_ENVIRONMENT = "evs:GetEnvironment";
	/** [Read] evs:GetVersions */
	static readonly GET_VERSIONS = "evs:GetVersions";
	/** [List] evs:ListEnvironmentConnectors */
	static readonly LIST_ENVIRONMENT_CONNECTORS = "evs:ListEnvironmentConnectors";
	/** [List] evs:ListEnvironmentHosts */
	static readonly LIST_ENVIRONMENT_HOSTS = "evs:ListEnvironmentHosts";
	/** [List] evs:ListEnvironmentVlans */
	static readonly LIST_ENVIRONMENT_VLANS = "evs:ListEnvironmentVlans";
	/** [List] evs:ListEnvironments */
	static readonly LIST_ENVIRONMENTS = "evs:ListEnvironments";
	/** [Read] evs:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "evs:ListTagsForResource";
	/** [List] evs:ListVmEntitlements */
	static readonly LIST_VM_ENTITLEMENTS = "evs:ListVmEntitlements";
	/** [Tagging] evs:TagResource */
	static readonly TAG_RESOURCE = "evs:TagResource";
	/** [Tagging] evs:UntagResource */
	static readonly UNTAG_RESOURCE = "evs:UntagResource";
	/** [Write] evs:UpdateEnvironmentConnector */
	static readonly UPDATE_ENVIRONMENT_CONNECTOR =
		"evs:UpdateEnvironmentConnector";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EvsActions.GET_DEPOT_URL,
		EvsActions.GET_ENVIRONMENT,
		EvsActions.GET_VERSIONS,
		EvsActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EvsActions.ASSOCIATE_EIP_TO_VLAN,
		EvsActions.CREATE_ENTITLEMENT,
		EvsActions.CREATE_ENVIRONMENT,
		EvsActions.CREATE_ENVIRONMENT_CONNECTOR,
		EvsActions.CREATE_ENVIRONMENT_HOST,
		EvsActions.DELETE_ENTITLEMENT,
		EvsActions.DELETE_ENVIRONMENT,
		EvsActions.DELETE_ENVIRONMENT_CONNECTOR,
		EvsActions.DELETE_ENVIRONMENT_HOST,
		EvsActions.DISASSOCIATE_EIP_FROM_VLAN,
		EvsActions.UPDATE_ENVIRONMENT_CONNECTOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		EvsActions.LIST_ENVIRONMENT_CONNECTORS,
		EvsActions.LIST_ENVIRONMENT_HOSTS,
		EvsActions.LIST_ENVIRONMENT_VLANS,
		EvsActions.LIST_ENVIRONMENTS,
		EvsActions.LIST_VM_ENTITLEMENTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EvsActions.TAG_RESOURCE,
		EvsActions.UNTAG_RESOURCE,
	];
}

const EnvironmentArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):evs:(?<region>[^:]*):(?<account>[^:]*):environment/(?<environmentIdentifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for evs resources.
 */
export class EvsResources {
	/**
	 * Builds an ARN for the environment resource.
	 */
	static environment(props: {
		/** The EnvironmentIdentifier component of the ARN. */
		readonly environmentIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseEnvironmentArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		environmentIdentifier: string;
	} {
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
	static readonly ASSOCIATE_EIP_TO_VLAN: string[] = ["evs:AssociateEipToVlan"];
	/** IAM actions required for the CreateEntitlement API call. */
	static readonly CREATE_ENTITLEMENT: string[] = ["evs:CreateEntitlement"];
	/** IAM actions required for the CreateEnvironment API call. */
	static readonly CREATE_ENVIRONMENT: string[] = [
		"evs:CreateEnvironment",
		"evs:TagResource",
	];
	/** IAM actions required for the CreateEnvironmentConnector API call. */
	static readonly CREATE_ENVIRONMENT_CONNECTOR: string[] = [
		"evs:CreateEnvironmentConnector",
	];
	/** IAM actions required for the CreateEnvironmentHost API call. */
	static readonly CREATE_ENVIRONMENT_HOST: string[] = [
		"evs:CreateEnvironmentHost",
	];
	/** IAM actions required for the DeleteEntitlement API call. */
	static readonly DELETE_ENTITLEMENT: string[] = ["evs:DeleteEntitlement"];
	/** IAM actions required for the DeleteEnvironment API call. */
	static readonly DELETE_ENVIRONMENT: string[] = ["evs:DeleteEnvironment"];
	/** IAM actions required for the DeleteEnvironmentConnector API call. */
	static readonly DELETE_ENVIRONMENT_CONNECTOR: string[] = [
		"evs:DeleteEnvironmentConnector",
	];
	/** IAM actions required for the DeleteEnvironmentHost API call. */
	static readonly DELETE_ENVIRONMENT_HOST: string[] = [
		"evs:DeleteEnvironmentHost",
	];
	/** IAM actions required for the DisassociateEipFromVlan API call. */
	static readonly DISASSOCIATE_EIP_FROM_VLAN: string[] = [
		"evs:DisassociateEipFromVlan",
	];
	/** IAM actions required for the GetDepotUrl API call. */
	static readonly GET_DEPOT_URL: string[] = ["evs:GetDepotUrl"];
	/** IAM actions required for the GetEnvironment API call. */
	static readonly GET_ENVIRONMENT: string[] = ["evs:GetEnvironment"];
	/** IAM actions required for the GetVersions API call. */
	static readonly GET_VERSIONS: string[] = ["evs:GetVersions"];
	/** IAM actions required for the ListEnvironmentConnectors API call. */
	static readonly LIST_ENVIRONMENT_CONNECTORS: string[] = [
		"evs:ListEnvironmentConnectors",
	];
	/** IAM actions required for the ListEnvironmentHosts API call. */
	static readonly LIST_ENVIRONMENT_HOSTS: string[] = [
		"evs:ListEnvironmentHosts",
	];
	/** IAM actions required for the ListEnvironmentVlans API call. */
	static readonly LIST_ENVIRONMENT_VLANS: string[] = [
		"evs:ListEnvironmentVlans",
	];
	/** IAM actions required for the ListEnvironments API call. */
	static readonly LIST_ENVIRONMENTS: string[] = ["evs:ListEnvironments"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"evs:ListTagsForResource",
	];
	/** IAM actions required for the ListVmEntitlements API call. */
	static readonly LIST_VM_ENTITLEMENTS: string[] = ["evs:ListVmEntitlements"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["evs:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["evs:UntagResource"];
	/** IAM actions required for the UpdateEnvironmentConnector API call. */
	static readonly UPDATE_ENVIRONMENT_CONNECTOR: string[] = [
		"evs:UpdateEnvironmentConnector",
	];
}

/**
 * Condition key constants and builders for evs.
 */
export class EvsConditions {
	/** Condition keys applicable to the CreateEnvironment action. */
	static readonly CREATE_ENVIRONMENT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";

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
