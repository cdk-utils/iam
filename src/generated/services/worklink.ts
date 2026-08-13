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
	static readonly ASSOCIATE_DOMAIN = "worklink:AssociateDomain";
	/** [Write] worklink:AssociateWebsiteAuthorizationProvider */
	static readonly ASSOCIATE_WEBSITE_AUTHORIZATION_PROVIDER =
		"worklink:AssociateWebsiteAuthorizationProvider";
	/** [Write] worklink:AssociateWebsiteCertificateAuthority */
	static readonly ASSOCIATE_WEBSITE_CERTIFICATE_AUTHORITY =
		"worklink:AssociateWebsiteCertificateAuthority";
	/** [Write] worklink:CreateFleet */
	static readonly CREATE_FLEET = "worklink:CreateFleet";
	/** [Write] worklink:DeleteFleet */
	static readonly DELETE_FLEET = "worklink:DeleteFleet";
	/** [Read] worklink:DescribeAuditStreamConfiguration */
	static readonly DESCRIBE_AUDIT_STREAM_CONFIGURATION =
		"worklink:DescribeAuditStreamConfiguration";
	/** [Read] worklink:DescribeCompanyNetworkConfiguration */
	static readonly DESCRIBE_COMPANY_NETWORK_CONFIGURATION =
		"worklink:DescribeCompanyNetworkConfiguration";
	/** [Read] worklink:DescribeDevice */
	static readonly DESCRIBE_DEVICE = "worklink:DescribeDevice";
	/** [Read] worklink:DescribeDevicePolicyConfiguration */
	static readonly DESCRIBE_DEVICE_POLICY_CONFIGURATION =
		"worklink:DescribeDevicePolicyConfiguration";
	/** [Read] worklink:DescribeDomain */
	static readonly DESCRIBE_DOMAIN = "worklink:DescribeDomain";
	/** [Read] worklink:DescribeFleetMetadata */
	static readonly DESCRIBE_FLEET_METADATA = "worklink:DescribeFleetMetadata";
	/** [Read] worklink:DescribeIdentityProviderConfiguration */
	static readonly DESCRIBE_IDENTITY_PROVIDER_CONFIGURATION =
		"worklink:DescribeIdentityProviderConfiguration";
	/** [Read] worklink:DescribeWebsiteCertificateAuthority */
	static readonly DESCRIBE_WEBSITE_CERTIFICATE_AUTHORITY =
		"worklink:DescribeWebsiteCertificateAuthority";
	/** [Write] worklink:DisassociateDomain */
	static readonly DISASSOCIATE_DOMAIN = "worklink:DisassociateDomain";
	/** [Write] worklink:DisassociateWebsiteAuthorizationProvider */
	static readonly DISASSOCIATE_WEBSITE_AUTHORIZATION_PROVIDER =
		"worklink:DisassociateWebsiteAuthorizationProvider";
	/** [Write] worklink:DisassociateWebsiteCertificateAuthority */
	static readonly DISASSOCIATE_WEBSITE_CERTIFICATE_AUTHORITY =
		"worklink:DisassociateWebsiteCertificateAuthority";
	/** [List] worklink:ListDevices */
	static readonly LIST_DEVICES = "worklink:ListDevices";
	/** [List] worklink:ListDomains */
	static readonly LIST_DOMAINS = "worklink:ListDomains";
	/** [List] worklink:ListFleets */
	static readonly LIST_FLEETS = "worklink:ListFleets";
	/** [Read] worklink:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "worklink:ListTagsForResource";
	/** [List] worklink:ListWebsiteAuthorizationProviders */
	static readonly LIST_WEBSITE_AUTHORIZATION_PROVIDERS =
		"worklink:ListWebsiteAuthorizationProviders";
	/** [List] worklink:ListWebsiteCertificateAuthorities */
	static readonly LIST_WEBSITE_CERTIFICATE_AUTHORITIES =
		"worklink:ListWebsiteCertificateAuthorities";
	/** [Write] worklink:RestoreDomainAccess */
	static readonly RESTORE_DOMAIN_ACCESS = "worklink:RestoreDomainAccess";
	/** [Write] worklink:RevokeDomainAccess */
	static readonly REVOKE_DOMAIN_ACCESS = "worklink:RevokeDomainAccess";
	/** [List] worklink:SearchEntity */
	static readonly SEARCH_ENTITY = "worklink:SearchEntity";
	/** [Write] worklink:SignOutUser */
	static readonly SIGN_OUT_USER = "worklink:SignOutUser";
	/** [Tagging] worklink:TagResource */
	static readonly TAG_RESOURCE = "worklink:TagResource";
	/** [Tagging] worklink:UntagResource */
	static readonly UNTAG_RESOURCE = "worklink:UntagResource";
	/** [Write] worklink:UpdateAuditStreamConfiguration */
	static readonly UPDATE_AUDIT_STREAM_CONFIGURATION =
		"worklink:UpdateAuditStreamConfiguration";
	/** [Write] worklink:UpdateCompanyNetworkConfiguration */
	static readonly UPDATE_COMPANY_NETWORK_CONFIGURATION =
		"worklink:UpdateCompanyNetworkConfiguration";
	/** [Write] worklink:UpdateDevicePolicyConfiguration */
	static readonly UPDATE_DEVICE_POLICY_CONFIGURATION =
		"worklink:UpdateDevicePolicyConfiguration";
	/** [Write] worklink:UpdateDomainMetadata */
	static readonly UPDATE_DOMAIN_METADATA = "worklink:UpdateDomainMetadata";
	/** [Write] worklink:UpdateFleetMetadata */
	static readonly UPDATE_FLEET_METADATA = "worklink:UpdateFleetMetadata";
	/** [Write] worklink:UpdateIdentityProviderConfiguration */
	static readonly UPDATE_IDENTITY_PROVIDER_CONFIGURATION =
		"worklink:UpdateIdentityProviderConfiguration";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		WorklinkActions.DESCRIBE_AUDIT_STREAM_CONFIGURATION,
		WorklinkActions.DESCRIBE_COMPANY_NETWORK_CONFIGURATION,
		WorklinkActions.DESCRIBE_DEVICE,
		WorklinkActions.DESCRIBE_DEVICE_POLICY_CONFIGURATION,
		WorklinkActions.DESCRIBE_DOMAIN,
		WorklinkActions.DESCRIBE_FLEET_METADATA,
		WorklinkActions.DESCRIBE_IDENTITY_PROVIDER_CONFIGURATION,
		WorklinkActions.DESCRIBE_WEBSITE_CERTIFICATE_AUTHORITY,
		WorklinkActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		WorklinkActions.ASSOCIATE_DOMAIN,
		WorklinkActions.ASSOCIATE_WEBSITE_AUTHORIZATION_PROVIDER,
		WorklinkActions.ASSOCIATE_WEBSITE_CERTIFICATE_AUTHORITY,
		WorklinkActions.CREATE_FLEET,
		WorklinkActions.DELETE_FLEET,
		WorklinkActions.DISASSOCIATE_DOMAIN,
		WorklinkActions.DISASSOCIATE_WEBSITE_AUTHORIZATION_PROVIDER,
		WorklinkActions.DISASSOCIATE_WEBSITE_CERTIFICATE_AUTHORITY,
		WorklinkActions.RESTORE_DOMAIN_ACCESS,
		WorklinkActions.REVOKE_DOMAIN_ACCESS,
		WorklinkActions.SIGN_OUT_USER,
		WorklinkActions.UPDATE_AUDIT_STREAM_CONFIGURATION,
		WorklinkActions.UPDATE_COMPANY_NETWORK_CONFIGURATION,
		WorklinkActions.UPDATE_DEVICE_POLICY_CONFIGURATION,
		WorklinkActions.UPDATE_DOMAIN_METADATA,
		WorklinkActions.UPDATE_FLEET_METADATA,
		WorklinkActions.UPDATE_IDENTITY_PROVIDER_CONFIGURATION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		WorklinkActions.LIST_DEVICES,
		WorklinkActions.LIST_DOMAINS,
		WorklinkActions.LIST_FLEETS,
		WorklinkActions.LIST_WEBSITE_AUTHORIZATION_PROVIDERS,
		WorklinkActions.LIST_WEBSITE_CERTIFICATE_AUTHORITIES,
		WorklinkActions.SEARCH_ENTITY,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		WorklinkActions.TAG_RESOURCE,
		WorklinkActions.UNTAG_RESOURCE,
	];
}

const FleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):worklink::(?<account>[^:]*):fleet/(?<fleetName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for worklink resources.
 */
export class WorklinkResources {
	/**
	 * Builds an ARN for the fleet resource.
	 */
	static fleet(props: {
		/** The FleetName component of the ARN. */
		readonly fleetName: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFleetArn(arn: string): {
		partition: string;
		account: string;
		fleetName: string;
	} {
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
	static readonly CREATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DeleteFleet action. */
	static readonly DELETE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the DescribeFleetMetadata action. */
	static readonly DESCRIBE_FLEET_METADATA_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];

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
