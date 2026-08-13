// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/backup-gateway.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the backup-gateway service.
 */
export class BackupGatewayActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "backup-gateway";

	/** [Write] backup-gateway:AssociateGatewayToServer */
	static readonly ASSOCIATE_GATEWAY_TO_SERVER =
		"backup-gateway:AssociateGatewayToServer";
	/** [Write] backup-gateway:Backup */
	static readonly BACKUP = "backup-gateway:Backup";
	/** [Write] backup-gateway:CreateGateway */
	static readonly CREATE_GATEWAY = "backup-gateway:CreateGateway";
	/** [Write] backup-gateway:DeleteGateway */
	static readonly DELETE_GATEWAY = "backup-gateway:DeleteGateway";
	/** [Write] backup-gateway:DeleteHypervisor */
	static readonly DELETE_HYPERVISOR = "backup-gateway:DeleteHypervisor";
	/** [Write] backup-gateway:DisassociateGatewayFromServer */
	static readonly DISASSOCIATE_GATEWAY_FROM_SERVER =
		"backup-gateway:DisassociateGatewayFromServer";
	/** [Read] backup-gateway:GetBandwidthRateLimitSchedule */
	static readonly GET_BANDWIDTH_RATE_LIMIT_SCHEDULE =
		"backup-gateway:GetBandwidthRateLimitSchedule";
	/** [Read] backup-gateway:GetGateway */
	static readonly GET_GATEWAY = "backup-gateway:GetGateway";
	/** [Read] backup-gateway:GetHypervisor */
	static readonly GET_HYPERVISOR = "backup-gateway:GetHypervisor";
	/** [Read] backup-gateway:GetHypervisorPropertyMappings */
	static readonly GET_HYPERVISOR_PROPERTY_MAPPINGS =
		"backup-gateway:GetHypervisorPropertyMappings";
	/** [Read] backup-gateway:GetVirtualMachine */
	static readonly GET_VIRTUAL_MACHINE = "backup-gateway:GetVirtualMachine";
	/** [Write] backup-gateway:ImportHypervisorConfiguration */
	static readonly IMPORT_HYPERVISOR_CONFIGURATION =
		"backup-gateway:ImportHypervisorConfiguration";
	/** [Read] backup-gateway:ListGateways */
	static readonly LIST_GATEWAYS = "backup-gateway:ListGateways";
	/** [Read] backup-gateway:ListHypervisors */
	static readonly LIST_HYPERVISORS = "backup-gateway:ListHypervisors";
	/** [Read] backup-gateway:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "backup-gateway:ListTagsForResource";
	/** [Read] backup-gateway:ListVirtualMachines */
	static readonly LIST_VIRTUAL_MACHINES = "backup-gateway:ListVirtualMachines";
	/** [Write] backup-gateway:PutBandwidthRateLimitSchedule */
	static readonly PUT_BANDWIDTH_RATE_LIMIT_SCHEDULE =
		"backup-gateway:PutBandwidthRateLimitSchedule";
	/** [Write] backup-gateway:PutHypervisorPropertyMappings */
	static readonly PUT_HYPERVISOR_PROPERTY_MAPPINGS =
		"backup-gateway:PutHypervisorPropertyMappings";
	/** [Write] backup-gateway:PutMaintenanceStartTime */
	static readonly PUT_MAINTENANCE_START_TIME =
		"backup-gateway:PutMaintenanceStartTime";
	/** [Write] backup-gateway:Restore */
	static readonly RESTORE = "backup-gateway:Restore";
	/** [Write] backup-gateway:StartVirtualMachinesMetadataSync */
	static readonly START_VIRTUAL_MACHINES_METADATA_SYNC =
		"backup-gateway:StartVirtualMachinesMetadataSync";
	/** [Tagging] backup-gateway:TagResource */
	static readonly TAG_RESOURCE = "backup-gateway:TagResource";
	/** [Write] backup-gateway:TestHypervisorConfiguration */
	static readonly TEST_HYPERVISOR_CONFIGURATION =
		"backup-gateway:TestHypervisorConfiguration";
	/** [Tagging] backup-gateway:UntagResource */
	static readonly UNTAG_RESOURCE = "backup-gateway:UntagResource";
	/** [Write] backup-gateway:UpdateGatewayInformation */
	static readonly UPDATE_GATEWAY_INFORMATION =
		"backup-gateway:UpdateGatewayInformation";
	/** [Write] backup-gateway:UpdateGatewaySoftwareNow */
	static readonly UPDATE_GATEWAY_SOFTWARE_NOW =
		"backup-gateway:UpdateGatewaySoftwareNow";
	/** [Write] backup-gateway:UpdateHypervisor */
	static readonly UPDATE_HYPERVISOR = "backup-gateway:UpdateHypervisor";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		BackupGatewayActions.GET_BANDWIDTH_RATE_LIMIT_SCHEDULE,
		BackupGatewayActions.GET_GATEWAY,
		BackupGatewayActions.GET_HYPERVISOR,
		BackupGatewayActions.GET_HYPERVISOR_PROPERTY_MAPPINGS,
		BackupGatewayActions.GET_VIRTUAL_MACHINE,
		BackupGatewayActions.LIST_GATEWAYS,
		BackupGatewayActions.LIST_HYPERVISORS,
		BackupGatewayActions.LIST_TAGS_FOR_RESOURCE,
		BackupGatewayActions.LIST_VIRTUAL_MACHINES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		BackupGatewayActions.ASSOCIATE_GATEWAY_TO_SERVER,
		BackupGatewayActions.BACKUP,
		BackupGatewayActions.CREATE_GATEWAY,
		BackupGatewayActions.DELETE_GATEWAY,
		BackupGatewayActions.DELETE_HYPERVISOR,
		BackupGatewayActions.DISASSOCIATE_GATEWAY_FROM_SERVER,
		BackupGatewayActions.IMPORT_HYPERVISOR_CONFIGURATION,
		BackupGatewayActions.PUT_BANDWIDTH_RATE_LIMIT_SCHEDULE,
		BackupGatewayActions.PUT_HYPERVISOR_PROPERTY_MAPPINGS,
		BackupGatewayActions.PUT_MAINTENANCE_START_TIME,
		BackupGatewayActions.RESTORE,
		BackupGatewayActions.START_VIRTUAL_MACHINES_METADATA_SYNC,
		BackupGatewayActions.TEST_HYPERVISOR_CONFIGURATION,
		BackupGatewayActions.UPDATE_GATEWAY_INFORMATION,
		BackupGatewayActions.UPDATE_GATEWAY_SOFTWARE_NOW,
		BackupGatewayActions.UPDATE_HYPERVISOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		BackupGatewayActions.TAG_RESOURCE,
		BackupGatewayActions.UNTAG_RESOURCE,
	];
}

const GatewayArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup-gateway:(?<region>[^:]*):(?<account>[^:]*):gateway/(?<gatewayId>[^:/?]+)$",
);
const HypervisorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup-gateway:(?<region>[^:]*):(?<account>[^:]*):hypervisor/(?<hypervisorId>[^:/?]+)$",
);
const VirtualmachineArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):backup-gateway:(?<region>[^:]*):(?<account>[^:]*):vm/(?<virtualmachineId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for backup-gateway resources.
 */
export class BackupGatewayResources {
	/**
	 * Builds an ARN for the gateway resource.
	 */
	static gateway(props: {
		/** The GatewayId component of the ARN. */
		readonly gatewayId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup-gateway:${props.region ?? "*"}:${props.account ?? "*"}:gateway/${props.gatewayId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the gateway resource.
	 */
	static isValidGatewayArn(arn: string): boolean {
		return GatewayArnRegex.test(arn);
	}

	/**
	 * Parses a gateway ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseGatewayArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		gatewayId: string;
	} {
		const match = GatewayArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid gateway ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			gatewayId: match.groups!.gatewayId,
		};
	}

	/**
	 * Builds an ARN for the hypervisor resource.
	 */
	static hypervisor(props: {
		/** The HypervisorId component of the ARN. */
		readonly hypervisorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup-gateway:${props.region ?? "*"}:${props.account ?? "*"}:hypervisor/${props.hypervisorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the hypervisor resource.
	 */
	static isValidHypervisorArn(arn: string): boolean {
		return HypervisorArnRegex.test(arn);
	}

	/**
	 * Parses a hypervisor ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseHypervisorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		hypervisorId: string;
	} {
		const match = HypervisorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid hypervisor ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			hypervisorId: match.groups!.hypervisorId,
		};
	}

	/**
	 * Builds an ARN for the virtualmachine resource.
	 */
	static virtualmachine(props: {
		/** The VirtualmachineId component of the ARN. */
		readonly virtualmachineId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:backup-gateway:${props.region ?? "*"}:${props.account ?? "*"}:vm/${props.virtualmachineId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the virtualmachine resource.
	 */
	static isValidVirtualmachineArn(arn: string): boolean {
		return VirtualmachineArnRegex.test(arn);
	}

	/**
	 * Parses a virtualmachine ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVirtualmachineArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		virtualmachineId: string;
	} {
		const match = VirtualmachineArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid virtualmachine ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			virtualmachineId: match.groups!.virtualmachineId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for backup-gateway.
 */
export class BackupGatewayOperations {
	/** IAM actions required for the AssociateGatewayToServer API call. */
	static readonly ASSOCIATE_GATEWAY_TO_SERVER: string[] = [
		"backup-gateway:AssociateGatewayToServer",
	];
	/** IAM actions required for the CreateGateway API call. */
	static readonly CREATE_GATEWAY: string[] = [
		"backup-gateway:CreateGateway",
		"backup-gateway:TagResource",
	];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DELETE_GATEWAY: string[] = ["backup-gateway:DeleteGateway"];
	/** IAM actions required for the DeleteHypervisor API call. */
	static readonly DELETE_HYPERVISOR: string[] = [
		"backup-gateway:DeleteHypervisor",
	];
	/** IAM actions required for the DisassociateGatewayFromServer API call. */
	static readonly DISASSOCIATE_GATEWAY_FROM_SERVER: string[] = [
		"backup-gateway:DisassociateGatewayFromServer",
	];
	/** IAM actions required for the GetBandwidthRateLimitSchedule API call. */
	static readonly GET_BANDWIDTH_RATE_LIMIT_SCHEDULE: string[] = [
		"backup-gateway:GetBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the GetGateway API call. */
	static readonly GET_GATEWAY: string[] = ["backup-gateway:GetGateway"];
	/** IAM actions required for the GetHypervisor API call. */
	static readonly GET_HYPERVISOR: string[] = ["backup-gateway:GetHypervisor"];
	/** IAM actions required for the GetHypervisorPropertyMappings API call. */
	static readonly GET_HYPERVISOR_PROPERTY_MAPPINGS: string[] = [
		"backup-gateway:GetHypervisorPropertyMappings",
	];
	/** IAM actions required for the GetVirtualMachine API call. */
	static readonly GET_VIRTUAL_MACHINE: string[] = [
		"backup-gateway:GetVirtualMachine",
	];
	/** IAM actions required for the ImportHypervisorConfiguration API call. */
	static readonly IMPORT_HYPERVISOR_CONFIGURATION: string[] = [
		"backup-gateway:ImportHypervisorConfiguration",
		"backup-gateway:TagResource",
	];
	/** IAM actions required for the ListGateways API call. */
	static readonly LIST_GATEWAYS: string[] = ["backup-gateway:ListGateways"];
	/** IAM actions required for the ListHypervisors API call. */
	static readonly LIST_HYPERVISORS: string[] = [
		"backup-gateway:ListHypervisors",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"backup-gateway:ListTagsForResource",
	];
	/** IAM actions required for the ListVirtualMachines API call. */
	static readonly LIST_VIRTUAL_MACHINES: string[] = [
		"backup-gateway:ListVirtualMachines",
	];
	/** IAM actions required for the PutBandwidthRateLimitSchedule API call. */
	static readonly PUT_BANDWIDTH_RATE_LIMIT_SCHEDULE: string[] = [
		"backup-gateway:PutBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the PutHypervisorPropertyMappings API call. */
	static readonly PUT_HYPERVISOR_PROPERTY_MAPPINGS: string[] = [
		"iam:PassRole",
		"backup-gateway:PutHypervisorPropertyMappings",
	];
	/** IAM actions required for the PutMaintenanceStartTime API call. */
	static readonly PUT_MAINTENANCE_START_TIME: string[] = [
		"backup-gateway:PutMaintenanceStartTime",
	];
	/** IAM actions required for the StartVirtualMachinesMetadataSync API call. */
	static readonly START_VIRTUAL_MACHINES_METADATA_SYNC: string[] = [
		"iam:PassRole",
		"backup-gateway:StartVirtualMachinesMetadataSync",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["backup-gateway:TagResource"];
	/** IAM actions required for the TestHypervisorConfiguration API call. */
	static readonly TEST_HYPERVISOR_CONFIGURATION: string[] = [
		"backup-gateway:TestHypervisorConfiguration",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["backup-gateway:UntagResource"];
	/** IAM actions required for the UpdateGatewayInformation API call. */
	static readonly UPDATE_GATEWAY_INFORMATION: string[] = [
		"backup-gateway:UpdateGatewayInformation",
	];
	/** IAM actions required for the UpdateGatewaySoftwareNow API call. */
	static readonly UPDATE_GATEWAY_SOFTWARE_NOW: string[] = [
		"backup-gateway:UpdateGatewaySoftwareNow",
	];
	/** IAM actions required for the UpdateHypervisor API call. */
	static readonly UPDATE_HYPERVISOR: string[] = [
		"backup-gateway:UpdateHypervisor",
	];
}

/**
 * Condition key constants and builders for backup-gateway.
 */
export class BackupGatewayConditions {
	/** Condition keys applicable to the CreateGateway action. */
	static readonly CREATE_GATEWAY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportHypervisorConfiguration action. */
	static readonly IMPORT_HYPERVISOR_CONFIGURATION_CONDITION_KEYS: string[] = [
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
