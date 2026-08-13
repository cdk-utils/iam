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
	static readonly AssociateGatewayToServer =
		"backup-gateway:AssociateGatewayToServer";
	/** [Write] backup-gateway:Backup */
	static readonly Backup = "backup-gateway:Backup";
	/** [Write] backup-gateway:CreateGateway */
	static readonly CreateGateway = "backup-gateway:CreateGateway";
	/** [Write] backup-gateway:DeleteGateway */
	static readonly DeleteGateway = "backup-gateway:DeleteGateway";
	/** [Write] backup-gateway:DeleteHypervisor */
	static readonly DeleteHypervisor = "backup-gateway:DeleteHypervisor";
	/** [Write] backup-gateway:DisassociateGatewayFromServer */
	static readonly DisassociateGatewayFromServer =
		"backup-gateway:DisassociateGatewayFromServer";
	/** [Read] backup-gateway:GetBandwidthRateLimitSchedule */
	static readonly actionGetBandwidthRateLimitSchedule =
		"backup-gateway:GetBandwidthRateLimitSchedule";
	/** [Read] backup-gateway:GetGateway */
	static readonly actionGetGateway = "backup-gateway:GetGateway";
	/** [Read] backup-gateway:GetHypervisor */
	static readonly actionGetHypervisor = "backup-gateway:GetHypervisor";
	/** [Read] backup-gateway:GetHypervisorPropertyMappings */
	static readonly actionGetHypervisorPropertyMappings =
		"backup-gateway:GetHypervisorPropertyMappings";
	/** [Read] backup-gateway:GetVirtualMachine */
	static readonly actionGetVirtualMachine = "backup-gateway:GetVirtualMachine";
	/** [Write] backup-gateway:ImportHypervisorConfiguration */
	static readonly ImportHypervisorConfiguration =
		"backup-gateway:ImportHypervisorConfiguration";
	/** [Read] backup-gateway:ListGateways */
	static readonly ListGateways = "backup-gateway:ListGateways";
	/** [Read] backup-gateway:ListHypervisors */
	static readonly ListHypervisors = "backup-gateway:ListHypervisors";
	/** [Read] backup-gateway:ListTagsForResource */
	static readonly ListTagsForResource = "backup-gateway:ListTagsForResource";
	/** [Read] backup-gateway:ListVirtualMachines */
	static readonly ListVirtualMachines = "backup-gateway:ListVirtualMachines";
	/** [Write] backup-gateway:PutBandwidthRateLimitSchedule */
	static readonly PutBandwidthRateLimitSchedule =
		"backup-gateway:PutBandwidthRateLimitSchedule";
	/** [Write] backup-gateway:PutHypervisorPropertyMappings */
	static readonly PutHypervisorPropertyMappings =
		"backup-gateway:PutHypervisorPropertyMappings";
	/** [Write] backup-gateway:PutMaintenanceStartTime */
	static readonly PutMaintenanceStartTime =
		"backup-gateway:PutMaintenanceStartTime";
	/** [Write] backup-gateway:Restore */
	static readonly Restore = "backup-gateway:Restore";
	/** [Write] backup-gateway:StartVirtualMachinesMetadataSync */
	static readonly StartVirtualMachinesMetadataSync =
		"backup-gateway:StartVirtualMachinesMetadataSync";
	/** [Tagging] backup-gateway:TagResource */
	static readonly TagResource = "backup-gateway:TagResource";
	/** [Write] backup-gateway:TestHypervisorConfiguration */
	static readonly TestHypervisorConfiguration =
		"backup-gateway:TestHypervisorConfiguration";
	/** [Tagging] backup-gateway:UntagResource */
	static readonly UntagResource = "backup-gateway:UntagResource";
	/** [Write] backup-gateway:UpdateGatewayInformation */
	static readonly UpdateGatewayInformation =
		"backup-gateway:UpdateGatewayInformation";
	/** [Write] backup-gateway:UpdateGatewaySoftwareNow */
	static readonly UpdateGatewaySoftwareNow =
		"backup-gateway:UpdateGatewaySoftwareNow";
	/** [Write] backup-gateway:UpdateHypervisor */
	static readonly UpdateHypervisor = "backup-gateway:UpdateHypervisor";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		BackupGatewayActions.actionGetBandwidthRateLimitSchedule,
		BackupGatewayActions.actionGetGateway,
		BackupGatewayActions.actionGetHypervisor,
		BackupGatewayActions.actionGetHypervisorPropertyMappings,
		BackupGatewayActions.actionGetVirtualMachine,
		BackupGatewayActions.ListGateways,
		BackupGatewayActions.ListHypervisors,
		BackupGatewayActions.ListTagsForResource,
		BackupGatewayActions.ListVirtualMachines,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		BackupGatewayActions.AssociateGatewayToServer,
		BackupGatewayActions.Backup,
		BackupGatewayActions.CreateGateway,
		BackupGatewayActions.DeleteGateway,
		BackupGatewayActions.DeleteHypervisor,
		BackupGatewayActions.DisassociateGatewayFromServer,
		BackupGatewayActions.ImportHypervisorConfiguration,
		BackupGatewayActions.PutBandwidthRateLimitSchedule,
		BackupGatewayActions.PutHypervisorPropertyMappings,
		BackupGatewayActions.PutMaintenanceStartTime,
		BackupGatewayActions.Restore,
		BackupGatewayActions.StartVirtualMachinesMetadataSync,
		BackupGatewayActions.TestHypervisorConfiguration,
		BackupGatewayActions.UpdateGatewayInformation,
		BackupGatewayActions.UpdateGatewaySoftwareNow,
		BackupGatewayActions.UpdateHypervisor,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		BackupGatewayActions.TagResource,
		BackupGatewayActions.UntagResource,
	];
}

/**
 * Properties for building a gateway ARN.
 */
export interface BackupGatewayGatewayArnProps {
	/** The GatewayId component of the ARN. */
	readonly gatewayId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a gateway ARN.
 */
export interface BackupGatewayGatewayArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The GatewayId component. */
	readonly gatewayId: string;
}

/**
 * Properties for building a hypervisor ARN.
 */
export interface BackupGatewayHypervisorArnProps {
	/** The HypervisorId component of the ARN. */
	readonly hypervisorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a hypervisor ARN.
 */
export interface BackupGatewayHypervisorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The HypervisorId component. */
	readonly hypervisorId: string;
}

/**
 * Properties for building a virtualmachine ARN.
 */
export interface BackupGatewayVirtualmachineArnProps {
	/** The VirtualmachineId component of the ARN. */
	readonly virtualmachineId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a virtualmachine ARN.
 */
export interface BackupGatewayVirtualmachineArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VirtualmachineId component. */
	readonly virtualmachineId: string;
}

const GatewayArnRegex =
	/^arn:(?<partition>[^:]+):backup-gateway:(?<region>[^:]*):(?<account>[^:]*):gateway\/(?<gatewayId>[^:/?]+)$/;
const HypervisorArnRegex =
	/^arn:(?<partition>[^:]+):backup-gateway:(?<region>[^:]*):(?<account>[^:]*):hypervisor\/(?<hypervisorId>[^:/?]+)$/;
const VirtualmachineArnRegex =
	/^arn:(?<partition>[^:]+):backup-gateway:(?<region>[^:]*):(?<account>[^:]*):vm\/(?<virtualmachineId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for backup-gateway resources.
 */
export class BackupGatewayResources {
	/**
	 * Builds an ARN for the gateway resource.
	 */
	static gateway(props: BackupGatewayGatewayArnProps): string {
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
	static parseGatewayArn(arn: string): BackupGatewayGatewayArnComponents {
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
	static hypervisor(props: BackupGatewayHypervisorArnProps): string {
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
	static parseHypervisorArn(arn: string): BackupGatewayHypervisorArnComponents {
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
	static virtualmachine(props: BackupGatewayVirtualmachineArnProps): string {
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
	static parseVirtualmachineArn(
		arn: string,
	): BackupGatewayVirtualmachineArnComponents {
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
	static readonly AssociateGatewayToServer: string[] = [
		"backup-gateway:AssociateGatewayToServer",
	];
	/** IAM actions required for the CreateGateway API call. */
	static readonly CreateGateway: string[] = [
		"backup-gateway:CreateGateway",
		"backup-gateway:TagResource",
	];
	/** IAM actions required for the DeleteGateway API call. */
	static readonly DeleteGateway: string[] = ["backup-gateway:DeleteGateway"];
	/** IAM actions required for the DeleteHypervisor API call. */
	static readonly DeleteHypervisor: string[] = [
		"backup-gateway:DeleteHypervisor",
	];
	/** IAM actions required for the DisassociateGatewayFromServer API call. */
	static readonly DisassociateGatewayFromServer: string[] = [
		"backup-gateway:DisassociateGatewayFromServer",
	];
	/** IAM actions required for the GetBandwidthRateLimitSchedule API call. */
	static readonly opGetBandwidthRateLimitSchedule: string[] = [
		"backup-gateway:GetBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the GetGateway API call. */
	static readonly opGetGateway: string[] = ["backup-gateway:GetGateway"];
	/** IAM actions required for the GetHypervisor API call. */
	static readonly opGetHypervisor: string[] = ["backup-gateway:GetHypervisor"];
	/** IAM actions required for the GetHypervisorPropertyMappings API call. */
	static readonly opGetHypervisorPropertyMappings: string[] = [
		"backup-gateway:GetHypervisorPropertyMappings",
	];
	/** IAM actions required for the GetVirtualMachine API call. */
	static readonly opGetVirtualMachine: string[] = [
		"backup-gateway:GetVirtualMachine",
	];
	/** IAM actions required for the ImportHypervisorConfiguration API call. */
	static readonly ImportHypervisorConfiguration: string[] = [
		"backup-gateway:ImportHypervisorConfiguration",
		"backup-gateway:TagResource",
	];
	/** IAM actions required for the ListGateways API call. */
	static readonly ListGateways: string[] = ["backup-gateway:ListGateways"];
	/** IAM actions required for the ListHypervisors API call. */
	static readonly ListHypervisors: string[] = [
		"backup-gateway:ListHypervisors",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"backup-gateway:ListTagsForResource",
	];
	/** IAM actions required for the ListVirtualMachines API call. */
	static readonly ListVirtualMachines: string[] = [
		"backup-gateway:ListVirtualMachines",
	];
	/** IAM actions required for the PutBandwidthRateLimitSchedule API call. */
	static readonly PutBandwidthRateLimitSchedule: string[] = [
		"backup-gateway:PutBandwidthRateLimitSchedule",
	];
	/** IAM actions required for the PutHypervisorPropertyMappings API call. */
	static readonly PutHypervisorPropertyMappings: string[] = [
		"iam:PassRole",
		"backup-gateway:PutHypervisorPropertyMappings",
	];
	/** IAM actions required for the PutMaintenanceStartTime API call. */
	static readonly PutMaintenanceStartTime: string[] = [
		"backup-gateway:PutMaintenanceStartTime",
	];
	/** IAM actions required for the StartVirtualMachinesMetadataSync API call. */
	static readonly StartVirtualMachinesMetadataSync: string[] = [
		"iam:PassRole",
		"backup-gateway:StartVirtualMachinesMetadataSync",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["backup-gateway:TagResource"];
	/** IAM actions required for the TestHypervisorConfiguration API call. */
	static readonly TestHypervisorConfiguration: string[] = [
		"backup-gateway:TestHypervisorConfiguration",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["backup-gateway:UntagResource"];
	/** IAM actions required for the UpdateGatewayInformation API call. */
	static readonly UpdateGatewayInformation: string[] = [
		"backup-gateway:UpdateGatewayInformation",
	];
	/** IAM actions required for the UpdateGatewaySoftwareNow API call. */
	static readonly UpdateGatewaySoftwareNow: string[] = [
		"backup-gateway:UpdateGatewaySoftwareNow",
	];
	/** IAM actions required for the UpdateHypervisor API call. */
	static readonly UpdateHypervisor: string[] = [
		"backup-gateway:UpdateHypervisor",
	];
}

/**
 * Condition key constants and builders for backup-gateway.
 */
export class BackupGatewayConditions {
	/** Condition keys applicable to the CreateGateway action. */
	static readonly CreateGatewayConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ImportHypervisorConfiguration action. */
	static readonly ImportHypervisorConfigurationConditionKeys: string[] = [
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
