// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/iotfleetwise.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the iotfleetwise service.
 */
export class IotfleetwiseActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "iotfleetwise";

	/** [Write] iotfleetwise:AssociateVehicleFleet */
	static readonly AssociateVehicleFleet = "iotfleetwise:AssociateVehicleFleet";
	/** [Write] iotfleetwise:CreateCampaign */
	static readonly CreateCampaign = "iotfleetwise:CreateCampaign";
	/** [Write] iotfleetwise:CreateDecoderManifest */
	static readonly CreateDecoderManifest = "iotfleetwise:CreateDecoderManifest";
	/** [Write] iotfleetwise:CreateFleet */
	static readonly CreateFleet = "iotfleetwise:CreateFleet";
	/** [Write] iotfleetwise:CreateModelManifest */
	static readonly CreateModelManifest = "iotfleetwise:CreateModelManifest";
	/** [Write] iotfleetwise:CreateSignalCatalog */
	static readonly CreateSignalCatalog = "iotfleetwise:CreateSignalCatalog";
	/** [Write] iotfleetwise:CreateStateTemplate */
	static readonly CreateStateTemplate = "iotfleetwise:CreateStateTemplate";
	/** [Write] iotfleetwise:CreateVehicle */
	static readonly CreateVehicle = "iotfleetwise:CreateVehicle";
	/** [Write] iotfleetwise:DeleteCampaign */
	static readonly DeleteCampaign = "iotfleetwise:DeleteCampaign";
	/** [Write] iotfleetwise:DeleteDecoderManifest */
	static readonly DeleteDecoderManifest = "iotfleetwise:DeleteDecoderManifest";
	/** [Write] iotfleetwise:DeleteFleet */
	static readonly DeleteFleet = "iotfleetwise:DeleteFleet";
	/** [Write] iotfleetwise:DeleteModelManifest */
	static readonly DeleteModelManifest = "iotfleetwise:DeleteModelManifest";
	/** [Write] iotfleetwise:DeleteSignalCatalog */
	static readonly DeleteSignalCatalog = "iotfleetwise:DeleteSignalCatalog";
	/** [Write] iotfleetwise:DeleteStateTemplate */
	static readonly DeleteStateTemplate = "iotfleetwise:DeleteStateTemplate";
	/** [Write] iotfleetwise:DeleteVehicle */
	static readonly DeleteVehicle = "iotfleetwise:DeleteVehicle";
	/** [Write] iotfleetwise:DisassociateVehicleFleet */
	static readonly DisassociateVehicleFleet =
		"iotfleetwise:DisassociateVehicleFleet";
	/** [PermissionManagement] iotfleetwise:GenerateCommandPayload */
	static readonly GenerateCommandPayload =
		"iotfleetwise:GenerateCommandPayload";
	/** [Read] iotfleetwise:GetCampaign */
	static readonly actionGetCampaign = "iotfleetwise:GetCampaign";
	/** [Read] iotfleetwise:GetDecoderManifest */
	static readonly actionGetDecoderManifest = "iotfleetwise:GetDecoderManifest";
	/** [Read] iotfleetwise:GetEncryptionConfiguration */
	static readonly actionGetEncryptionConfiguration =
		"iotfleetwise:GetEncryptionConfiguration";
	/** [Read] iotfleetwise:GetFleet */
	static readonly actionGetFleet = "iotfleetwise:GetFleet";
	/** [Read] iotfleetwise:GetLoggingOptions */
	static readonly actionGetLoggingOptions = "iotfleetwise:GetLoggingOptions";
	/** [Read] iotfleetwise:GetModelManifest */
	static readonly actionGetModelManifest = "iotfleetwise:GetModelManifest";
	/** [Read] iotfleetwise:GetRegisterAccountStatus */
	static readonly actionGetRegisterAccountStatus =
		"iotfleetwise:GetRegisterAccountStatus";
	/** [Read] iotfleetwise:GetSignalCatalog */
	static readonly actionGetSignalCatalog = "iotfleetwise:GetSignalCatalog";
	/** [Read] iotfleetwise:GetStateTemplate */
	static readonly actionGetStateTemplate = "iotfleetwise:GetStateTemplate";
	/** [Read] iotfleetwise:GetVehicle */
	static readonly actionGetVehicle = "iotfleetwise:GetVehicle";
	/** [Read] iotfleetwise:GetVehicleStatus */
	static readonly actionGetVehicleStatus = "iotfleetwise:GetVehicleStatus";
	/** [Write] iotfleetwise:ImportDecoderManifest */
	static readonly ImportDecoderManifest = "iotfleetwise:ImportDecoderManifest";
	/** [Write] iotfleetwise:ImportSignalCatalog */
	static readonly ImportSignalCatalog = "iotfleetwise:ImportSignalCatalog";
	/** [Read] iotfleetwise:ListCampaigns */
	static readonly ListCampaigns = "iotfleetwise:ListCampaigns";
	/** [List] iotfleetwise:ListDecoderManifestNetworkInterfaces */
	static readonly ListDecoderManifestNetworkInterfaces =
		"iotfleetwise:ListDecoderManifestNetworkInterfaces";
	/** [List] iotfleetwise:ListDecoderManifestSignals */
	static readonly ListDecoderManifestSignals =
		"iotfleetwise:ListDecoderManifestSignals";
	/** [Read] iotfleetwise:ListDecoderManifests */
	static readonly ListDecoderManifests = "iotfleetwise:ListDecoderManifests";
	/** [Read] iotfleetwise:ListFleets */
	static readonly ListFleets = "iotfleetwise:ListFleets";
	/** [Read] iotfleetwise:ListFleetsForVehicle */
	static readonly ListFleetsForVehicle = "iotfleetwise:ListFleetsForVehicle";
	/** [List] iotfleetwise:ListModelManifestNodes */
	static readonly ListModelManifestNodes =
		"iotfleetwise:ListModelManifestNodes";
	/** [Read] iotfleetwise:ListModelManifests */
	static readonly ListModelManifests = "iotfleetwise:ListModelManifests";
	/** [Read] iotfleetwise:ListSignalCatalogNodes */
	static readonly ListSignalCatalogNodes =
		"iotfleetwise:ListSignalCatalogNodes";
	/** [Read] iotfleetwise:ListSignalCatalogs */
	static readonly ListSignalCatalogs = "iotfleetwise:ListSignalCatalogs";
	/** [Read] iotfleetwise:ListStateTemplates */
	static readonly ListStateTemplates = "iotfleetwise:ListStateTemplates";
	/** [Read] iotfleetwise:ListTagsForResource */
	static readonly ListTagsForResource = "iotfleetwise:ListTagsForResource";
	/** [Read] iotfleetwise:ListVehicles */
	static readonly ListVehicles = "iotfleetwise:ListVehicles";
	/** [Read] iotfleetwise:ListVehiclesInFleet */
	static readonly ListVehiclesInFleet = "iotfleetwise:ListVehiclesInFleet";
	/** [Write] iotfleetwise:PutEncryptionConfiguration */
	static readonly PutEncryptionConfiguration =
		"iotfleetwise:PutEncryptionConfiguration";
	/** [Write] iotfleetwise:PutLoggingOptions */
	static readonly PutLoggingOptions = "iotfleetwise:PutLoggingOptions";
	/** [Write] iotfleetwise:RegisterAccount */
	static readonly RegisterAccount = "iotfleetwise:RegisterAccount";
	/** [Tagging] iotfleetwise:TagResource */
	static readonly TagResource = "iotfleetwise:TagResource";
	/** [Tagging] iotfleetwise:UntagResource */
	static readonly UntagResource = "iotfleetwise:UntagResource";
	/** [Write] iotfleetwise:UpdateCampaign */
	static readonly UpdateCampaign = "iotfleetwise:UpdateCampaign";
	/** [Write] iotfleetwise:UpdateDecoderManifest */
	static readonly UpdateDecoderManifest = "iotfleetwise:UpdateDecoderManifest";
	/** [Write] iotfleetwise:UpdateFleet */
	static readonly UpdateFleet = "iotfleetwise:UpdateFleet";
	/** [Write] iotfleetwise:UpdateModelManifest */
	static readonly UpdateModelManifest = "iotfleetwise:UpdateModelManifest";
	/** [Write] iotfleetwise:UpdateSignalCatalog */
	static readonly UpdateSignalCatalog = "iotfleetwise:UpdateSignalCatalog";
	/** [Write] iotfleetwise:UpdateStateTemplate */
	static readonly UpdateStateTemplate = "iotfleetwise:UpdateStateTemplate";
	/** [Write] iotfleetwise:UpdateVehicle */
	static readonly UpdateVehicle = "iotfleetwise:UpdateVehicle";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		IotfleetwiseActions.actionGetCampaign,
		IotfleetwiseActions.actionGetDecoderManifest,
		IotfleetwiseActions.actionGetEncryptionConfiguration,
		IotfleetwiseActions.actionGetFleet,
		IotfleetwiseActions.actionGetLoggingOptions,
		IotfleetwiseActions.actionGetModelManifest,
		IotfleetwiseActions.actionGetRegisterAccountStatus,
		IotfleetwiseActions.actionGetSignalCatalog,
		IotfleetwiseActions.actionGetStateTemplate,
		IotfleetwiseActions.actionGetVehicle,
		IotfleetwiseActions.actionGetVehicleStatus,
		IotfleetwiseActions.ListCampaigns,
		IotfleetwiseActions.ListDecoderManifests,
		IotfleetwiseActions.ListFleets,
		IotfleetwiseActions.ListFleetsForVehicle,
		IotfleetwiseActions.ListModelManifests,
		IotfleetwiseActions.ListSignalCatalogNodes,
		IotfleetwiseActions.ListSignalCatalogs,
		IotfleetwiseActions.ListStateTemplates,
		IotfleetwiseActions.ListTagsForResource,
		IotfleetwiseActions.ListVehicles,
		IotfleetwiseActions.ListVehiclesInFleet,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		IotfleetwiseActions.AssociateVehicleFleet,
		IotfleetwiseActions.CreateCampaign,
		IotfleetwiseActions.CreateDecoderManifest,
		IotfleetwiseActions.CreateFleet,
		IotfleetwiseActions.CreateModelManifest,
		IotfleetwiseActions.CreateSignalCatalog,
		IotfleetwiseActions.CreateStateTemplate,
		IotfleetwiseActions.CreateVehicle,
		IotfleetwiseActions.DeleteCampaign,
		IotfleetwiseActions.DeleteDecoderManifest,
		IotfleetwiseActions.DeleteFleet,
		IotfleetwiseActions.DeleteModelManifest,
		IotfleetwiseActions.DeleteSignalCatalog,
		IotfleetwiseActions.DeleteStateTemplate,
		IotfleetwiseActions.DeleteVehicle,
		IotfleetwiseActions.DisassociateVehicleFleet,
		IotfleetwiseActions.ImportDecoderManifest,
		IotfleetwiseActions.ImportSignalCatalog,
		IotfleetwiseActions.PutEncryptionConfiguration,
		IotfleetwiseActions.PutLoggingOptions,
		IotfleetwiseActions.RegisterAccount,
		IotfleetwiseActions.UpdateCampaign,
		IotfleetwiseActions.UpdateDecoderManifest,
		IotfleetwiseActions.UpdateFleet,
		IotfleetwiseActions.UpdateModelManifest,
		IotfleetwiseActions.UpdateSignalCatalog,
		IotfleetwiseActions.UpdateStateTemplate,
		IotfleetwiseActions.UpdateVehicle,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		IotfleetwiseActions.ListDecoderManifestNetworkInterfaces,
		IotfleetwiseActions.ListDecoderManifestSignals,
		IotfleetwiseActions.ListModelManifestNodes,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		IotfleetwiseActions.GenerateCommandPayload,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		IotfleetwiseActions.TagResource,
		IotfleetwiseActions.UntagResource,
	];
}

/**
 * Properties for building a campaign ARN.
 */
export interface IotfleetwiseCampaignArnProps {
	/** The CampaignName component of the ARN. */
	readonly campaignName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a campaign ARN.
 */
export interface IotfleetwiseCampaignArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CampaignName component. */
	readonly campaignName: string;
}

/**
 * Properties for building a decodermanifest ARN.
 */
export interface IotfleetwiseDecodermanifestArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a decodermanifest ARN.
 */
export interface IotfleetwiseDecodermanifestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a fleet ARN.
 */
export interface IotfleetwiseFleetArnProps {
	/** The FleetId component of the ARN. */
	readonly fleetId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a fleet ARN.
 */
export interface IotfleetwiseFleetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FleetId component. */
	readonly fleetId: string;
}

/**
 * Properties for building a modelmanifest ARN.
 */
export interface IotfleetwiseModelmanifestArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a modelmanifest ARN.
 */
export interface IotfleetwiseModelmanifestArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a signalcatalog ARN.
 */
export interface IotfleetwiseSignalcatalogArnProps {
	/** The Name component of the ARN. */
	readonly name: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a signalcatalog ARN.
 */
export interface IotfleetwiseSignalcatalogArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Name component. */
	readonly name: string;
}

/**
 * Properties for building a statetemplate ARN.
 */
export interface IotfleetwiseStatetemplateArnProps {
	/** The StateTemplateId component of the ARN. */
	readonly stateTemplateId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a statetemplate ARN.
 */
export interface IotfleetwiseStatetemplateArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StateTemplateId component. */
	readonly stateTemplateId: string;
}

/**
 * Properties for building a vehicle ARN.
 */
export interface IotfleetwiseVehicleArnProps {
	/** The VehicleId component of the ARN. */
	readonly vehicleId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a vehicle ARN.
 */
export interface IotfleetwiseVehicleArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The VehicleId component. */
	readonly vehicleId: string;
}

const CampaignArnRegex =
	/^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):campaign\/(?<campaignName>[^:/?]+)$/;
const DecodermanifestArnRegex =
	/^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):decoder-manifest\/(?<name>[^:/?]+)$/;
const FleetArnRegex =
	/^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):fleet\/(?<fleetId>[^:/?]+)$/;
const ModelmanifestArnRegex =
	/^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):model-manifest\/(?<name>[^:/?]+)$/;
const SignalcatalogArnRegex =
	/^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):signal-catalog\/(?<name>[^:/?]+)$/;
const StatetemplateArnRegex =
	/^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):state-template\/(?<stateTemplateId>[^:/?]+)$/;
const VehicleArnRegex =
	/^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):vehicle\/(?<vehicleId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for iotfleetwise resources.
 */
export class IotfleetwiseResources {
	/**
	 * Builds an ARN for the campaign resource.
	 */
	static campaign(props: IotfleetwiseCampaignArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleetwise:${props.region ?? "*"}:${props.account ?? "*"}:campaign/${props.campaignName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the campaign resource.
	 */
	static isValidCampaignArn(arn: string): boolean {
		return CampaignArnRegex.test(arn);
	}

	/**
	 * Parses a campaign ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCampaignArn(arn: string): IotfleetwiseCampaignArnComponents {
		const match = CampaignArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid campaign ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			campaignName: match.groups!.campaignName,
		};
	}

	/**
	 * Builds an ARN for the decodermanifest resource.
	 */
	static decodermanifest(props: IotfleetwiseDecodermanifestArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleetwise:${props.region ?? "*"}:${props.account ?? "*"}:decoder-manifest/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the decodermanifest resource.
	 */
	static isValidDecodermanifestArn(arn: string): boolean {
		return DecodermanifestArnRegex.test(arn);
	}

	/**
	 * Parses a decodermanifest ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDecodermanifestArn(
		arn: string,
	): IotfleetwiseDecodermanifestArnComponents {
		const match = DecodermanifestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid decodermanifest ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the fleet resource.
	 */
	static fleet(props: IotfleetwiseFleetArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleetwise:${props.region ?? "*"}:${props.account ?? "*"}:fleet/${props.fleetId}`;
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
	static parseFleetArn(arn: string): IotfleetwiseFleetArnComponents {
		const match = FleetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid fleet ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			fleetId: match.groups!.fleetId,
		};
	}

	/**
	 * Builds an ARN for the modelmanifest resource.
	 */
	static modelmanifest(props: IotfleetwiseModelmanifestArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleetwise:${props.region ?? "*"}:${props.account ?? "*"}:model-manifest/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the modelmanifest resource.
	 */
	static isValidModelmanifestArn(arn: string): boolean {
		return ModelmanifestArnRegex.test(arn);
	}

	/**
	 * Parses a modelmanifest ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseModelmanifestArn(
		arn: string,
	): IotfleetwiseModelmanifestArnComponents {
		const match = ModelmanifestArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid modelmanifest ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the signalcatalog resource.
	 */
	static signalcatalog(props: IotfleetwiseSignalcatalogArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleetwise:${props.region ?? "*"}:${props.account ?? "*"}:signal-catalog/${props.name}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the signalcatalog resource.
	 */
	static isValidSignalcatalogArn(arn: string): boolean {
		return SignalcatalogArnRegex.test(arn);
	}

	/**
	 * Parses a signalcatalog ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSignalcatalogArn(
		arn: string,
	): IotfleetwiseSignalcatalogArnComponents {
		const match = SignalcatalogArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid signalcatalog ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			name: match.groups!.name,
		};
	}

	/**
	 * Builds an ARN for the statetemplate resource.
	 */
	static statetemplate(props: IotfleetwiseStatetemplateArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleetwise:${props.region ?? "*"}:${props.account ?? "*"}:state-template/${props.stateTemplateId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the statetemplate resource.
	 */
	static isValidStatetemplateArn(arn: string): boolean {
		return StatetemplateArnRegex.test(arn);
	}

	/**
	 * Parses a statetemplate ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStatetemplateArn(
		arn: string,
	): IotfleetwiseStatetemplateArnComponents {
		const match = StatetemplateArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid statetemplate ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			stateTemplateId: match.groups!.stateTemplateId,
		};
	}

	/**
	 * Builds an ARN for the vehicle resource.
	 */
	static vehicle(props: IotfleetwiseVehicleArnProps): string {
		return `arn:${props.partition ?? "aws"}:iotfleetwise:${props.region ?? "*"}:${props.account ?? "*"}:vehicle/${props.vehicleId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the vehicle resource.
	 */
	static isValidVehicleArn(arn: string): boolean {
		return VehicleArnRegex.test(arn);
	}

	/**
	 * Parses a vehicle ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseVehicleArn(arn: string): IotfleetwiseVehicleArnComponents {
		const match = VehicleArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid vehicle ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			vehicleId: match.groups!.vehicleId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for iotfleetwise.
 */
export class IotfleetwiseOperations {
	/** IAM actions required for the AssociateVehicleFleet API call. */
	static readonly AssociateVehicleFleet: string[] = [
		"iotfleetwise:AssociateVehicleFleet",
	];
	/** IAM actions required for the BatchCreateVehicle API call. */
	static readonly BatchCreateVehicle: string[] = [
		"iotfleetwise:CreateVehicle",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the BatchUpdateVehicle API call. */
	static readonly BatchUpdateVehicle: string[] = [];
	/** IAM actions required for the CreateCampaign API call. */
	static readonly CreateCampaign: string[] = [
		"iotfleetwise:CreateCampaign",
		"iam:PassRole",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateDecoderManifest API call. */
	static readonly CreateDecoderManifest: string[] = [
		"iotfleetwise:CreateDecoderManifest",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CreateFleet: string[] = [
		"iotfleetwise:CreateFleet",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateModelManifest API call. */
	static readonly CreateModelManifest: string[] = [
		"iotfleetwise:CreateModelManifest",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateSignalCatalog API call. */
	static readonly CreateSignalCatalog: string[] = [
		"iotfleetwise:CreateSignalCatalog",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateStateTemplate API call. */
	static readonly CreateStateTemplate: string[] = [
		"iotfleetwise:CreateStateTemplate",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateVehicle API call. */
	static readonly CreateVehicle: string[] = [
		"iotfleetwise:CreateVehicle",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the DeleteCampaign API call. */
	static readonly DeleteCampaign: string[] = ["iotfleetwise:DeleteCampaign"];
	/** IAM actions required for the DeleteDecoderManifest API call. */
	static readonly DeleteDecoderManifest: string[] = [
		"iotfleetwise:DeleteDecoderManifest",
	];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DeleteFleet: string[] = ["iotfleetwise:DeleteFleet"];
	/** IAM actions required for the DeleteModelManifest API call. */
	static readonly DeleteModelManifest: string[] = [
		"iotfleetwise:DeleteModelManifest",
	];
	/** IAM actions required for the DeleteSignalCatalog API call. */
	static readonly DeleteSignalCatalog: string[] = [
		"iotfleetwise:DeleteSignalCatalog",
	];
	/** IAM actions required for the DeleteStateTemplate API call. */
	static readonly DeleteStateTemplate: string[] = [
		"iotfleetwise:DeleteStateTemplate",
	];
	/** IAM actions required for the DeleteVehicle API call. */
	static readonly DeleteVehicle: string[] = ["iotfleetwise:DeleteVehicle"];
	/** IAM actions required for the DisassociateVehicleFleet API call. */
	static readonly DisassociateVehicleFleet: string[] = [
		"iotfleetwise:DisassociateVehicleFleet",
	];
	/** IAM actions required for the GetCampaign API call. */
	static readonly opGetCampaign: string[] = ["iotfleetwise:GetCampaign"];
	/** IAM actions required for the GetDecoderManifest API call. */
	static readonly opGetDecoderManifest: string[] = [
		"iotfleetwise:GetDecoderManifest",
	];
	/** IAM actions required for the GetEncryptionConfiguration API call. */
	static readonly opGetEncryptionConfiguration: string[] = [
		"iotfleetwise:GetEncryptionConfiguration",
	];
	/** IAM actions required for the GetFleet API call. */
	static readonly opGetFleet: string[] = ["iotfleetwise:GetFleet"];
	/** IAM actions required for the GetLoggingOptions API call. */
	static readonly opGetLoggingOptions: string[] = [
		"iotfleetwise:GetLoggingOptions",
	];
	/** IAM actions required for the GetModelManifest API call. */
	static readonly opGetModelManifest: string[] = [
		"iotfleetwise:GetModelManifest",
	];
	/** IAM actions required for the GetRegisterAccountStatus API call. */
	static readonly opGetRegisterAccountStatus: string[] = [
		"iotfleetwise:GetRegisterAccountStatus",
	];
	/** IAM actions required for the GetSignalCatalog API call. */
	static readonly opGetSignalCatalog: string[] = [
		"iotfleetwise:GetSignalCatalog",
	];
	/** IAM actions required for the GetStateTemplate API call. */
	static readonly opGetStateTemplate: string[] = [
		"iotfleetwise:GetStateTemplate",
	];
	/** IAM actions required for the GetVehicle API call. */
	static readonly opGetVehicle: string[] = ["iotfleetwise:GetVehicle"];
	/** IAM actions required for the GetVehicleStatus API call. */
	static readonly opGetVehicleStatus: string[] = [
		"iotfleetwise:GetVehicleStatus",
	];
	/** IAM actions required for the ImportDecoderManifest API call. */
	static readonly ImportDecoderManifest: string[] = [
		"iotfleetwise:ImportDecoderManifest",
	];
	/** IAM actions required for the ImportSignalCatalog API call. */
	static readonly ImportSignalCatalog: string[] = [
		"iotfleetwise:ImportSignalCatalog",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the ListCampaigns API call. */
	static readonly ListCampaigns: string[] = ["iotfleetwise:ListCampaigns"];
	/** IAM actions required for the ListDecoderManifestNetworkInterfaces API call. */
	static readonly ListDecoderManifestNetworkInterfaces: string[] = [
		"iotfleetwise:ListDecoderManifestNetworkInterfaces",
	];
	/** IAM actions required for the ListDecoderManifestSignals API call. */
	static readonly ListDecoderManifestSignals: string[] = [
		"iotfleetwise:ListDecoderManifestSignals",
	];
	/** IAM actions required for the ListDecoderManifests API call. */
	static readonly ListDecoderManifests: string[] = [
		"iotfleetwise:ListDecoderManifests",
	];
	/** IAM actions required for the ListFleets API call. */
	static readonly ListFleets: string[] = ["iotfleetwise:ListFleets"];
	/** IAM actions required for the ListFleetsForVehicle API call. */
	static readonly ListFleetsForVehicle: string[] = [
		"iotfleetwise:ListFleetsForVehicle",
	];
	/** IAM actions required for the ListModelManifestNodes API call. */
	static readonly ListModelManifestNodes: string[] = [
		"iotfleetwise:ListModelManifestNodes",
	];
	/** IAM actions required for the ListModelManifests API call. */
	static readonly ListModelManifests: string[] = [
		"iotfleetwise:ListModelManifests",
	];
	/** IAM actions required for the ListSignalCatalogNodes API call. */
	static readonly ListSignalCatalogNodes: string[] = [
		"iotfleetwise:ListSignalCatalogNodes",
	];
	/** IAM actions required for the ListSignalCatalogs API call. */
	static readonly ListSignalCatalogs: string[] = [
		"iotfleetwise:ListSignalCatalogs",
	];
	/** IAM actions required for the ListStateTemplates API call. */
	static readonly ListStateTemplates: string[] = [
		"iotfleetwise:ListStateTemplates",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"iotfleetwise:ListTagsForResource",
	];
	/** IAM actions required for the ListVehicles API call. */
	static readonly ListVehicles: string[] = ["iotfleetwise:ListVehicles"];
	/** IAM actions required for the ListVehiclesInFleet API call. */
	static readonly ListVehiclesInFleet: string[] = [
		"iotfleetwise:ListVehiclesInFleet",
	];
	/** IAM actions required for the PutEncryptionConfiguration API call. */
	static readonly PutEncryptionConfiguration: string[] = [
		"iotfleetwise:PutEncryptionConfiguration",
	];
	/** IAM actions required for the PutLoggingOptions API call. */
	static readonly PutLoggingOptions: string[] = [
		"iotfleetwise:PutLoggingOptions",
	];
	/** IAM actions required for the RegisterAccount API call. */
	static readonly RegisterAccount: string[] = ["iotfleetwise:RegisterAccount"];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["iotfleetwise:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["iotfleetwise:UntagResource"];
	/** IAM actions required for the UpdateCampaign API call. */
	static readonly UpdateCampaign: string[] = ["iotfleetwise:UpdateCampaign"];
	/** IAM actions required for the UpdateDecoderManifest API call. */
	static readonly UpdateDecoderManifest: string[] = [
		"iotfleetwise:UpdateDecoderManifest",
	];
	/** IAM actions required for the UpdateFleet API call. */
	static readonly UpdateFleet: string[] = ["iotfleetwise:UpdateFleet"];
	/** IAM actions required for the UpdateModelManifest API call. */
	static readonly UpdateModelManifest: string[] = [
		"iotfleetwise:UpdateModelManifest",
	];
	/** IAM actions required for the UpdateSignalCatalog API call. */
	static readonly UpdateSignalCatalog: string[] = [
		"iotfleetwise:UpdateSignalCatalog",
	];
	/** IAM actions required for the UpdateStateTemplate API call. */
	static readonly UpdateStateTemplate: string[] = [
		"iotfleetwise:UpdateStateTemplate",
	];
	/** IAM actions required for the UpdateVehicle API call. */
	static readonly UpdateVehicle: string[] = ["iotfleetwise:UpdateVehicle"];
}

/**
 * Condition key constants and builders for iotfleetwise.
 */
export class IotfleetwiseConditions {
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CreateCampaignConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iotfleetwise:DestinationArn",
	];
	/** Condition keys applicable to the CreateDecoderManifest action. */
	static readonly CreateDecoderManifestConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CreateFleetConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelManifest action. */
	static readonly CreateModelManifestConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSignalCatalog action. */
	static readonly CreateSignalCatalogConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStateTemplate action. */
	static readonly CreateStateTemplateConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVehicle action. */
	static readonly CreateVehicleConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GenerateCommandPayload action. */
	static readonly GenerateCommandPayloadConditionKeys: string[] = [
		"iotfleetwise:Signals",
	];
	/** Condition keys applicable to the ImportSignalCatalog action. */
	static readonly ImportSignalCatalogConditionKeys: string[] = [
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
	/** Condition keys applicable to the UpdateVehicle action. */
	static readonly UpdateVehicleConditionKeys: string[] = [
		"iotfleetwise:UpdateToDecoderManifestArn",
		"iotfleetwise:UpdateToModelManifestArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly AWS_REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly AWS_RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly AWS_TAG_KEYS = "aws:TagKeys";
	/** Condition key: iotfleetwise:DestinationArn (ARN) */
	static readonly DESTINATION_ARN = "iotfleetwise:DestinationArn";
	/** Condition key: iotfleetwise:Signals (ArrayOfString) */
	static readonly SIGNALS = "iotfleetwise:Signals";
	/** Condition key: iotfleetwise:UpdateToDecoderManifestArn (ARN) */
	static readonly UPDATE_TO_DECODER_MANIFEST_ARN =
		"iotfleetwise:UpdateToDecoderManifestArn";
	/** Condition key: iotfleetwise:UpdateToModelManifestArn (ARN) */
	static readonly UPDATE_TO_MODEL_MANIFEST_ARN =
		"iotfleetwise:UpdateToModelManifestArn";

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

	/**
	 * Generates a condition block for `iotfleetwise:DestinationArn`.
	 */
	static destinationARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "iotfleetwise:DestinationArn": value } };
	}

	/**
	 * Generates a condition block for `iotfleetwise:Signals`.
	 */
	static signals(values: string[]): Record<string, Record<string, string[]>> {
		return { "ForAllValues:StringEquals": { "iotfleetwise:Signals": values } };
	}

	/**
	 * Generates a condition block for `iotfleetwise:UpdateToDecoderManifestArn`.
	 */
	static updateToDecoderManifestARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "iotfleetwise:UpdateToDecoderManifestArn": value } };
	}

	/**
	 * Generates a condition block for `iotfleetwise:UpdateToModelManifestArn`.
	 */
	static updateToModelManifestARN(
		value: string,
	): Record<string, Record<string, string>> {
		return { ArnEquals: { "iotfleetwise:UpdateToModelManifestArn": value } };
	}
}
