// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/worklink.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the worklink service.
 */
export class WorklinkActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "worklink";

	/** [Write] worklink:AssociateDomain */
	static readonly AssociateDomain = "worklink:AssociateDomain";
	/** [Write] worklink:AssociateWebsiteAuthorizationProvider */
	static readonly AssociateWebsiteAuthorizationProvider =
		"worklink:AssociateWebsiteAuthorizationProvider";
	/** [Write] worklink:AssociateWebsiteCertificateAuthority */
	static readonly AssociateWebsiteCertificateAuthority =
		"worklink:AssociateWebsiteCertificateAuthority";
	/** [Write] worklink:CreateFleet */
	static readonly CreateFleet = "worklink:CreateFleet";
	/** [Write] worklink:DeleteFleet */
	static readonly DeleteFleet = "worklink:DeleteFleet";
	/** [Read] worklink:DescribeAuditStreamConfiguration */
	static readonly DescribeAuditStreamConfiguration =
		"worklink:DescribeAuditStreamConfiguration";
	/** [Read] worklink:DescribeCompanyNetworkConfiguration */
	static readonly DescribeCompanyNetworkConfiguration =
		"worklink:DescribeCompanyNetworkConfiguration";
	/** [Read] worklink:DescribeDevice */
	static readonly DescribeDevice = "worklink:DescribeDevice";
	/** [Read] worklink:DescribeDevicePolicyConfiguration */
	static readonly DescribeDevicePolicyConfiguration =
		"worklink:DescribeDevicePolicyConfiguration";
	/** [Read] worklink:DescribeDomain */
	static readonly DescribeDomain = "worklink:DescribeDomain";
	/** [Read] worklink:DescribeFleetMetadata */
	static readonly DescribeFleetMetadata = "worklink:DescribeFleetMetadata";
	/** [Read] worklink:DescribeIdentityProviderConfiguration */
	static readonly DescribeIdentityProviderConfiguration =
		"worklink:DescribeIdentityProviderConfiguration";
	/** [Read] worklink:DescribeWebsiteCertificateAuthority */
	static readonly DescribeWebsiteCertificateAuthority =
		"worklink:DescribeWebsiteCertificateAuthority";
	/** [Write] worklink:DisassociateDomain */
	static readonly DisassociateDomain = "worklink:DisassociateDomain";
	/** [Write] worklink:DisassociateWebsiteAuthorizationProvider */
	static readonly DisassociateWebsiteAuthorizationProvider =
		"worklink:DisassociateWebsiteAuthorizationProvider";
	/** [Write] worklink:DisassociateWebsiteCertificateAuthority */
	static readonly DisassociateWebsiteCertificateAuthority =
		"worklink:DisassociateWebsiteCertificateAuthority";
	/** [List] worklink:ListDevices */
	static readonly ListDevices = "worklink:ListDevices";
	/** [List] worklink:ListDomains */
	static readonly ListDomains = "worklink:ListDomains";
	/** [List] worklink:ListFleets */
	static readonly ListFleets = "worklink:ListFleets";
	/** [Read] worklink:ListTagsForResource */
	static readonly ListTagsForResource = "worklink:ListTagsForResource";
	/** [List] worklink:ListWebsiteAuthorizationProviders */
	static readonly ListWebsiteAuthorizationProviders =
		"worklink:ListWebsiteAuthorizationProviders";
	/** [List] worklink:ListWebsiteCertificateAuthorities */
	static readonly ListWebsiteCertificateAuthorities =
		"worklink:ListWebsiteCertificateAuthorities";
	/** [Write] worklink:RestoreDomainAccess */
	static readonly RestoreDomainAccess = "worklink:RestoreDomainAccess";
	/** [Write] worklink:RevokeDomainAccess */
	static readonly RevokeDomainAccess = "worklink:RevokeDomainAccess";
	/** [List] worklink:SearchEntity */
	static readonly SearchEntity = "worklink:SearchEntity";
	/** [Write] worklink:SignOutUser */
	static readonly SignOutUser = "worklink:SignOutUser";
	/** [Tagging] worklink:TagResource */
	static readonly TagResource = "worklink:TagResource";
	/** [Tagging] worklink:UntagResource */
	static readonly UntagResource = "worklink:UntagResource";
	/** [Write] worklink:UpdateAuditStreamConfiguration */
	static readonly UpdateAuditStreamConfiguration =
		"worklink:UpdateAuditStreamConfiguration";
	/** [Write] worklink:UpdateCompanyNetworkConfiguration */
	static readonly UpdateCompanyNetworkConfiguration =
		"worklink:UpdateCompanyNetworkConfiguration";
	/** [Write] worklink:UpdateDevicePolicyConfiguration */
	static readonly UpdateDevicePolicyConfiguration =
		"worklink:UpdateDevicePolicyConfiguration";
	/** [Write] worklink:UpdateDomainMetadata */
	static readonly UpdateDomainMetadata = "worklink:UpdateDomainMetadata";
	/** [Write] worklink:UpdateFleetMetadata */
	static readonly UpdateFleetMetadata = "worklink:UpdateFleetMetadata";
	/** [Write] worklink:UpdateIdentityProviderConfiguration */
	static readonly UpdateIdentityProviderConfiguration =
		"worklink:UpdateIdentityProviderConfiguration";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		WorklinkActions.DescribeAuditStreamConfiguration,
		WorklinkActions.DescribeCompanyNetworkConfiguration,
		WorklinkActions.DescribeDevice,
		WorklinkActions.DescribeDevicePolicyConfiguration,
		WorklinkActions.DescribeDomain,
		WorklinkActions.DescribeFleetMetadata,
		WorklinkActions.DescribeIdentityProviderConfiguration,
		WorklinkActions.DescribeWebsiteCertificateAuthority,
		WorklinkActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		WorklinkActions.AssociateDomain,
		WorklinkActions.AssociateWebsiteAuthorizationProvider,
		WorklinkActions.AssociateWebsiteCertificateAuthority,
		WorklinkActions.CreateFleet,
		WorklinkActions.DeleteFleet,
		WorklinkActions.DisassociateDomain,
		WorklinkActions.DisassociateWebsiteAuthorizationProvider,
		WorklinkActions.DisassociateWebsiteCertificateAuthority,
		WorklinkActions.RestoreDomainAccess,
		WorklinkActions.RevokeDomainAccess,
		WorklinkActions.SignOutUser,
		WorklinkActions.UpdateAuditStreamConfiguration,
		WorklinkActions.UpdateCompanyNetworkConfiguration,
		WorklinkActions.UpdateDevicePolicyConfiguration,
		WorklinkActions.UpdateDomainMetadata,
		WorklinkActions.UpdateFleetMetadata,
		WorklinkActions.UpdateIdentityProviderConfiguration,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		WorklinkActions.ListDevices,
		WorklinkActions.ListDomains,
		WorklinkActions.ListFleets,
		WorklinkActions.ListWebsiteAuthorizationProviders,
		WorklinkActions.ListWebsiteCertificateAuthorities,
		WorklinkActions.SearchEntity,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		WorklinkActions.TagResource,
		WorklinkActions.UntagResource,
	];
}

/**
 * Properties for building a fleet ARN.
 */
export interface WorklinkFleetArnProps {
	/** The FleetName component of the ARN. */
	readonly fleetName: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fleet ARN.
 */
export interface WorklinkFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetName component. */
	readonly fleetName: string;
}

const FleetArnRegex =
	/^arn:(?<partition>[^:]+):worklink::(?<account>[^:]*):fleet\/(?<fleetName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for worklink resources.
 */
export class WorklinkResources {
	/**
	 * Builds an ARN for the fleet resource.
	 */
	static fleet(props: WorklinkFleetArnProps): string {
		return `arn:${props.partition ?? "aws"}:worklink::${props.account ?? "*"}:fleet/${props.fleetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the fleet resource.
	 */
	static isValidFleetArn(arn: string): boolean {
		return FleetArnRegex.test(arn);
	}

	/**
	 * Parses a fleet ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFleetArn(arn: string): WorklinkFleetArnComponents {
		const match = FleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			fleetName: match.groups!.fleetName,
		};
	}
}

/**
 * Condition key constants and builders for worklink.
 */
export class WorklinkConditions {
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CreateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteFleet action. */
	static readonly DeleteFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeFleetMetadata action. */
	static readonly DescribeFleetMetadataConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];

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
