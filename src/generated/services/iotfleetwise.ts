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
	static readonly ASSOCIATE_VEHICLE_FLEET =
		"iotfleetwise:AssociateVehicleFleet";
	/** [Write] iotfleetwise:CreateCampaign */
	static readonly CREATE_CAMPAIGN = "iotfleetwise:CreateCampaign";
	/** [Write] iotfleetwise:CreateDecoderManifest */
	static readonly CREATE_DECODER_MANIFEST =
		"iotfleetwise:CreateDecoderManifest";
	/** [Write] iotfleetwise:CreateFleet */
	static readonly CREATE_FLEET = "iotfleetwise:CreateFleet";
	/** [Write] iotfleetwise:CreateModelManifest */
	static readonly CREATE_MODEL_MANIFEST = "iotfleetwise:CreateModelManifest";
	/** [Write] iotfleetwise:CreateSignalCatalog */
	static readonly CREATE_SIGNAL_CATALOG = "iotfleetwise:CreateSignalCatalog";
	/** [Write] iotfleetwise:CreateStateTemplate */
	static readonly CREATE_STATE_TEMPLATE = "iotfleetwise:CreateStateTemplate";
	/** [Write] iotfleetwise:CreateVehicle */
	static readonly CREATE_VEHICLE = "iotfleetwise:CreateVehicle";
	/** [Write] iotfleetwise:DeleteCampaign */
	static readonly DELETE_CAMPAIGN = "iotfleetwise:DeleteCampaign";
	/** [Write] iotfleetwise:DeleteDecoderManifest */
	static readonly DELETE_DECODER_MANIFEST =
		"iotfleetwise:DeleteDecoderManifest";
	/** [Write] iotfleetwise:DeleteFleet */
	static readonly DELETE_FLEET = "iotfleetwise:DeleteFleet";
	/** [Write] iotfleetwise:DeleteModelManifest */
	static readonly DELETE_MODEL_MANIFEST = "iotfleetwise:DeleteModelManifest";
	/** [Write] iotfleetwise:DeleteSignalCatalog */
	static readonly DELETE_SIGNAL_CATALOG = "iotfleetwise:DeleteSignalCatalog";
	/** [Write] iotfleetwise:DeleteStateTemplate */
	static readonly DELETE_STATE_TEMPLATE = "iotfleetwise:DeleteStateTemplate";
	/** [Write] iotfleetwise:DeleteVehicle */
	static readonly DELETE_VEHICLE = "iotfleetwise:DeleteVehicle";
	/** [Write] iotfleetwise:DisassociateVehicleFleet */
	static readonly DISASSOCIATE_VEHICLE_FLEET =
		"iotfleetwise:DisassociateVehicleFleet";
	/** [PermissionManagement] iotfleetwise:GenerateCommandPayload */
	static readonly GENERATE_COMMAND_PAYLOAD =
		"iotfleetwise:GenerateCommandPayload";
	/** [Read] iotfleetwise:GetCampaign */
	static readonly GET_CAMPAIGN = "iotfleetwise:GetCampaign";
	/** [Read] iotfleetwise:GetDecoderManifest */
	static readonly GET_DECODER_MANIFEST = "iotfleetwise:GetDecoderManifest";
	/** [Read] iotfleetwise:GetEncryptionConfiguration */
	static readonly GET_ENCRYPTION_CONFIGURATION =
		"iotfleetwise:GetEncryptionConfiguration";
	/** [Read] iotfleetwise:GetFleet */
	static readonly GET_FLEET = "iotfleetwise:GetFleet";
	/** [Read] iotfleetwise:GetLoggingOptions */
	static readonly GET_LOGGING_OPTIONS = "iotfleetwise:GetLoggingOptions";
	/** [Read] iotfleetwise:GetModelManifest */
	static readonly GET_MODEL_MANIFEST = "iotfleetwise:GetModelManifest";
	/** [Read] iotfleetwise:GetRegisterAccountStatus */
	static readonly GET_REGISTER_ACCOUNT_STATUS =
		"iotfleetwise:GetRegisterAccountStatus";
	/** [Read] iotfleetwise:GetSignalCatalog */
	static readonly GET_SIGNAL_CATALOG = "iotfleetwise:GetSignalCatalog";
	/** [Read] iotfleetwise:GetStateTemplate */
	static readonly GET_STATE_TEMPLATE = "iotfleetwise:GetStateTemplate";
	/** [Read] iotfleetwise:GetVehicle */
	static readonly GET_VEHICLE = "iotfleetwise:GetVehicle";
	/** [Read] iotfleetwise:GetVehicleStatus */
	static readonly GET_VEHICLE_STATUS = "iotfleetwise:GetVehicleStatus";
	/** [Write] iotfleetwise:ImportDecoderManifest */
	static readonly IMPORT_DECODER_MANIFEST =
		"iotfleetwise:ImportDecoderManifest";
	/** [Write] iotfleetwise:ImportSignalCatalog */
	static readonly IMPORT_SIGNAL_CATALOG = "iotfleetwise:ImportSignalCatalog";
	/** [Read] iotfleetwise:ListCampaigns */
	static readonly LIST_CAMPAIGNS = "iotfleetwise:ListCampaigns";
	/** [List] iotfleetwise:ListDecoderManifestNetworkInterfaces */
	static readonly LIST_DECODER_MANIFEST_NETWORK_INTERFACES =
		"iotfleetwise:ListDecoderManifestNetworkInterfaces";
	/** [List] iotfleetwise:ListDecoderManifestSignals */
	static readonly LIST_DECODER_MANIFEST_SIGNALS =
		"iotfleetwise:ListDecoderManifestSignals";
	/** [Read] iotfleetwise:ListDecoderManifests */
	static readonly LIST_DECODER_MANIFESTS = "iotfleetwise:ListDecoderManifests";
	/** [Read] iotfleetwise:ListFleets */
	static readonly LIST_FLEETS = "iotfleetwise:ListFleets";
	/** [Read] iotfleetwise:ListFleetsForVehicle */
	static readonly LIST_FLEETS_FOR_VEHICLE = "iotfleetwise:ListFleetsForVehicle";
	/** [List] iotfleetwise:ListModelManifestNodes */
	static readonly LIST_MODEL_MANIFEST_NODES =
		"iotfleetwise:ListModelManifestNodes";
	/** [Read] iotfleetwise:ListModelManifests */
	static readonly LIST_MODEL_MANIFESTS = "iotfleetwise:ListModelManifests";
	/** [Read] iotfleetwise:ListSignalCatalogNodes */
	static readonly LIST_SIGNAL_CATALOG_NODES =
		"iotfleetwise:ListSignalCatalogNodes";
	/** [Read] iotfleetwise:ListSignalCatalogs */
	static readonly LIST_SIGNAL_CATALOGS = "iotfleetwise:ListSignalCatalogs";
	/** [Read] iotfleetwise:ListStateTemplates */
	static readonly LIST_STATE_TEMPLATES = "iotfleetwise:ListStateTemplates";
	/** [Read] iotfleetwise:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "iotfleetwise:ListTagsForResource";
	/** [Read] iotfleetwise:ListVehicles */
	static readonly LIST_VEHICLES = "iotfleetwise:ListVehicles";
	/** [Read] iotfleetwise:ListVehiclesInFleet */
	static readonly LIST_VEHICLES_IN_FLEET = "iotfleetwise:ListVehiclesInFleet";
	/** [Write] iotfleetwise:PutEncryptionConfiguration */
	static readonly PUT_ENCRYPTION_CONFIGURATION =
		"iotfleetwise:PutEncryptionConfiguration";
	/** [Write] iotfleetwise:PutLoggingOptions */
	static readonly PUT_LOGGING_OPTIONS = "iotfleetwise:PutLoggingOptions";
	/** [Write] iotfleetwise:RegisterAccount */
	static readonly REGISTER_ACCOUNT = "iotfleetwise:RegisterAccount";
	/** [Tagging] iotfleetwise:TagResource */
	static readonly TAG_RESOURCE = "iotfleetwise:TagResource";
	/** [Tagging] iotfleetwise:UntagResource */
	static readonly UNTAG_RESOURCE = "iotfleetwise:UntagResource";
	/** [Write] iotfleetwise:UpdateCampaign */
	static readonly UPDATE_CAMPAIGN = "iotfleetwise:UpdateCampaign";
	/** [Write] iotfleetwise:UpdateDecoderManifest */
	static readonly UPDATE_DECODER_MANIFEST =
		"iotfleetwise:UpdateDecoderManifest";
	/** [Write] iotfleetwise:UpdateFleet */
	static readonly UPDATE_FLEET = "iotfleetwise:UpdateFleet";
	/** [Write] iotfleetwise:UpdateModelManifest */
	static readonly UPDATE_MODEL_MANIFEST = "iotfleetwise:UpdateModelManifest";
	/** [Write] iotfleetwise:UpdateSignalCatalog */
	static readonly UPDATE_SIGNAL_CATALOG = "iotfleetwise:UpdateSignalCatalog";
	/** [Write] iotfleetwise:UpdateStateTemplate */
	static readonly UPDATE_STATE_TEMPLATE = "iotfleetwise:UpdateStateTemplate";
	/** [Write] iotfleetwise:UpdateVehicle */
	static readonly UPDATE_VEHICLE = "iotfleetwise:UpdateVehicle";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		IotfleetwiseActions.GET_CAMPAIGN,
		IotfleetwiseActions.GET_DECODER_MANIFEST,
		IotfleetwiseActions.GET_ENCRYPTION_CONFIGURATION,
		IotfleetwiseActions.GET_FLEET,
		IotfleetwiseActions.GET_LOGGING_OPTIONS,
		IotfleetwiseActions.GET_MODEL_MANIFEST,
		IotfleetwiseActions.GET_REGISTER_ACCOUNT_STATUS,
		IotfleetwiseActions.GET_SIGNAL_CATALOG,
		IotfleetwiseActions.GET_STATE_TEMPLATE,
		IotfleetwiseActions.GET_VEHICLE,
		IotfleetwiseActions.GET_VEHICLE_STATUS,
		IotfleetwiseActions.LIST_CAMPAIGNS,
		IotfleetwiseActions.LIST_DECODER_MANIFESTS,
		IotfleetwiseActions.LIST_FLEETS,
		IotfleetwiseActions.LIST_FLEETS_FOR_VEHICLE,
		IotfleetwiseActions.LIST_MODEL_MANIFESTS,
		IotfleetwiseActions.LIST_SIGNAL_CATALOG_NODES,
		IotfleetwiseActions.LIST_SIGNAL_CATALOGS,
		IotfleetwiseActions.LIST_STATE_TEMPLATES,
		IotfleetwiseActions.LIST_TAGS_FOR_RESOURCE,
		IotfleetwiseActions.LIST_VEHICLES,
		IotfleetwiseActions.LIST_VEHICLES_IN_FLEET,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		IotfleetwiseActions.ASSOCIATE_VEHICLE_FLEET,
		IotfleetwiseActions.CREATE_CAMPAIGN,
		IotfleetwiseActions.CREATE_DECODER_MANIFEST,
		IotfleetwiseActions.CREATE_FLEET,
		IotfleetwiseActions.CREATE_MODEL_MANIFEST,
		IotfleetwiseActions.CREATE_SIGNAL_CATALOG,
		IotfleetwiseActions.CREATE_STATE_TEMPLATE,
		IotfleetwiseActions.CREATE_VEHICLE,
		IotfleetwiseActions.DELETE_CAMPAIGN,
		IotfleetwiseActions.DELETE_DECODER_MANIFEST,
		IotfleetwiseActions.DELETE_FLEET,
		IotfleetwiseActions.DELETE_MODEL_MANIFEST,
		IotfleetwiseActions.DELETE_SIGNAL_CATALOG,
		IotfleetwiseActions.DELETE_STATE_TEMPLATE,
		IotfleetwiseActions.DELETE_VEHICLE,
		IotfleetwiseActions.DISASSOCIATE_VEHICLE_FLEET,
		IotfleetwiseActions.IMPORT_DECODER_MANIFEST,
		IotfleetwiseActions.IMPORT_SIGNAL_CATALOG,
		IotfleetwiseActions.PUT_ENCRYPTION_CONFIGURATION,
		IotfleetwiseActions.PUT_LOGGING_OPTIONS,
		IotfleetwiseActions.REGISTER_ACCOUNT,
		IotfleetwiseActions.UPDATE_CAMPAIGN,
		IotfleetwiseActions.UPDATE_DECODER_MANIFEST,
		IotfleetwiseActions.UPDATE_FLEET,
		IotfleetwiseActions.UPDATE_MODEL_MANIFEST,
		IotfleetwiseActions.UPDATE_SIGNAL_CATALOG,
		IotfleetwiseActions.UPDATE_STATE_TEMPLATE,
		IotfleetwiseActions.UPDATE_VEHICLE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		IotfleetwiseActions.LIST_DECODER_MANIFEST_NETWORK_INTERFACES,
		IotfleetwiseActions.LIST_DECODER_MANIFEST_SIGNALS,
		IotfleetwiseActions.LIST_MODEL_MANIFEST_NODES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		IotfleetwiseActions.GENERATE_COMMAND_PAYLOAD,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		IotfleetwiseActions.TAG_RESOURCE,
		IotfleetwiseActions.UNTAG_RESOURCE,
	];
}

const CampaignArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):campaign/(?<campaignName>[^:/?]+)$",
);
const DecodermanifestArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):decoder-manifest/(?<name>[^:/?]+)$",
);
const FleetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):fleet/(?<fleetId>[^:/?]+)$",
);
const ModelmanifestArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):model-manifest/(?<name>[^:/?]+)$",
);
const SignalcatalogArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):signal-catalog/(?<name>[^:/?]+)$",
);
const StatetemplateArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):state-template/(?<stateTemplateId>[^:/?]+)$",
);
const VehicleArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):iotfleetwise:(?<region>[^:]*):(?<account>[^:]*):vehicle/(?<vehicleId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for iotfleetwise resources.
 */
export class IotfleetwiseResources {
	/**
	 * Builds an ARN for the campaign resource.
	 */
	static campaign(props: {
		/** The CampaignName component of the ARN. */
		readonly campaignName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCampaignArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		campaignName: string;
	} {
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
	static decodermanifest(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseDecodermanifestArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static fleet(props: {
		/** The FleetId component of the ARN. */
		readonly fleetId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseFleetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		fleetId: string;
	} {
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
	static modelmanifest(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseModelmanifestArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static signalcatalog(props: {
		/** The Name component of the ARN. */
		readonly name: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseSignalcatalogArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		name: string;
	} {
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
	static statetemplate(props: {
		/** The StateTemplateId component of the ARN. */
		readonly stateTemplateId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseStatetemplateArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		stateTemplateId: string;
	} {
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
	static vehicle(props: {
		/** The VehicleId component of the ARN. */
		readonly vehicleId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseVehicleArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		vehicleId: string;
	} {
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
	static readonly ASSOCIATE_VEHICLE_FLEET: string[] = [
		"iotfleetwise:AssociateVehicleFleet",
	];
	/** IAM actions required for the BatchCreateVehicle API call. */
	static readonly BATCH_CREATE_VEHICLE: string[] = [
		"iotfleetwise:CreateVehicle",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the BatchUpdateVehicle API call. */
	static readonly BATCH_UPDATE_VEHICLE: string[] = [];
	/** IAM actions required for the CreateCampaign API call. */
	static readonly CREATE_CAMPAIGN: string[] = [
		"iotfleetwise:CreateCampaign",
		"iam:PassRole",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateDecoderManifest API call. */
	static readonly CREATE_DECODER_MANIFEST: string[] = [
		"iotfleetwise:CreateDecoderManifest",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateFleet API call. */
	static readonly CREATE_FLEET: string[] = [
		"iotfleetwise:CreateFleet",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateModelManifest API call. */
	static readonly CREATE_MODEL_MANIFEST: string[] = [
		"iotfleetwise:CreateModelManifest",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateSignalCatalog API call. */
	static readonly CREATE_SIGNAL_CATALOG: string[] = [
		"iotfleetwise:CreateSignalCatalog",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateStateTemplate API call. */
	static readonly CREATE_STATE_TEMPLATE: string[] = [
		"iotfleetwise:CreateStateTemplate",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the CreateVehicle API call. */
	static readonly CREATE_VEHICLE: string[] = [
		"iotfleetwise:CreateVehicle",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the DeleteCampaign API call. */
	static readonly DELETE_CAMPAIGN: string[] = ["iotfleetwise:DeleteCampaign"];
	/** IAM actions required for the DeleteDecoderManifest API call. */
	static readonly DELETE_DECODER_MANIFEST: string[] = [
		"iotfleetwise:DeleteDecoderManifest",
	];
	/** IAM actions required for the DeleteFleet API call. */
	static readonly DELETE_FLEET: string[] = ["iotfleetwise:DeleteFleet"];
	/** IAM actions required for the DeleteModelManifest API call. */
	static readonly DELETE_MODEL_MANIFEST: string[] = [
		"iotfleetwise:DeleteModelManifest",
	];
	/** IAM actions required for the DeleteSignalCatalog API call. */
	static readonly DELETE_SIGNAL_CATALOG: string[] = [
		"iotfleetwise:DeleteSignalCatalog",
	];
	/** IAM actions required for the DeleteStateTemplate API call. */
	static readonly DELETE_STATE_TEMPLATE: string[] = [
		"iotfleetwise:DeleteStateTemplate",
	];
	/** IAM actions required for the DeleteVehicle API call. */
	static readonly DELETE_VEHICLE: string[] = ["iotfleetwise:DeleteVehicle"];
	/** IAM actions required for the DisassociateVehicleFleet API call. */
	static readonly DISASSOCIATE_VEHICLE_FLEET: string[] = [
		"iotfleetwise:DisassociateVehicleFleet",
	];
	/** IAM actions required for the GetCampaign API call. */
	static readonly GET_CAMPAIGN: string[] = ["iotfleetwise:GetCampaign"];
	/** IAM actions required for the GetDecoderManifest API call. */
	static readonly GET_DECODER_MANIFEST: string[] = [
		"iotfleetwise:GetDecoderManifest",
	];
	/** IAM actions required for the GetEncryptionConfiguration API call. */
	static readonly GET_ENCRYPTION_CONFIGURATION: string[] = [
		"iotfleetwise:GetEncryptionConfiguration",
	];
	/** IAM actions required for the GetFleet API call. */
	static readonly GET_FLEET: string[] = ["iotfleetwise:GetFleet"];
	/** IAM actions required for the GetLoggingOptions API call. */
	static readonly GET_LOGGING_OPTIONS: string[] = [
		"iotfleetwise:GetLoggingOptions",
	];
	/** IAM actions required for the GetModelManifest API call. */
	static readonly GET_MODEL_MANIFEST: string[] = [
		"iotfleetwise:GetModelManifest",
	];
	/** IAM actions required for the GetRegisterAccountStatus API call. */
	static readonly GET_REGISTER_ACCOUNT_STATUS: string[] = [
		"iotfleetwise:GetRegisterAccountStatus",
	];
	/** IAM actions required for the GetSignalCatalog API call. */
	static readonly GET_SIGNAL_CATALOG: string[] = [
		"iotfleetwise:GetSignalCatalog",
	];
	/** IAM actions required for the GetStateTemplate API call. */
	static readonly GET_STATE_TEMPLATE: string[] = [
		"iotfleetwise:GetStateTemplate",
	];
	/** IAM actions required for the GetVehicle API call. */
	static readonly GET_VEHICLE: string[] = ["iotfleetwise:GetVehicle"];
	/** IAM actions required for the GetVehicleStatus API call. */
	static readonly GET_VEHICLE_STATUS: string[] = [
		"iotfleetwise:GetVehicleStatus",
	];
	/** IAM actions required for the ImportDecoderManifest API call. */
	static readonly IMPORT_DECODER_MANIFEST: string[] = [
		"iotfleetwise:ImportDecoderManifest",
	];
	/** IAM actions required for the ImportSignalCatalog API call. */
	static readonly IMPORT_SIGNAL_CATALOG: string[] = [
		"iotfleetwise:ImportSignalCatalog",
		"iotfleetwise:TagResource",
	];
	/** IAM actions required for the ListCampaigns API call. */
	static readonly LIST_CAMPAIGNS: string[] = ["iotfleetwise:ListCampaigns"];
	/** IAM actions required for the ListDecoderManifestNetworkInterfaces API call. */
	static readonly LIST_DECODER_MANIFEST_NETWORK_INTERFACES: string[] = [
		"iotfleetwise:ListDecoderManifestNetworkInterfaces",
	];
	/** IAM actions required for the ListDecoderManifestSignals API call. */
	static readonly LIST_DECODER_MANIFEST_SIGNALS: string[] = [
		"iotfleetwise:ListDecoderManifestSignals",
	];
	/** IAM actions required for the ListDecoderManifests API call. */
	static readonly LIST_DECODER_MANIFESTS: string[] = [
		"iotfleetwise:ListDecoderManifests",
	];
	/** IAM actions required for the ListFleets API call. */
	static readonly LIST_FLEETS: string[] = ["iotfleetwise:ListFleets"];
	/** IAM actions required for the ListFleetsForVehicle API call. */
	static readonly LIST_FLEETS_FOR_VEHICLE: string[] = [
		"iotfleetwise:ListFleetsForVehicle",
	];
	/** IAM actions required for the ListModelManifestNodes API call. */
	static readonly LIST_MODEL_MANIFEST_NODES: string[] = [
		"iotfleetwise:ListModelManifestNodes",
	];
	/** IAM actions required for the ListModelManifests API call. */
	static readonly LIST_MODEL_MANIFESTS: string[] = [
		"iotfleetwise:ListModelManifests",
	];
	/** IAM actions required for the ListSignalCatalogNodes API call. */
	static readonly LIST_SIGNAL_CATALOG_NODES: string[] = [
		"iotfleetwise:ListSignalCatalogNodes",
	];
	/** IAM actions required for the ListSignalCatalogs API call. */
	static readonly LIST_SIGNAL_CATALOGS: string[] = [
		"iotfleetwise:ListSignalCatalogs",
	];
	/** IAM actions required for the ListStateTemplates API call. */
	static readonly LIST_STATE_TEMPLATES: string[] = [
		"iotfleetwise:ListStateTemplates",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"iotfleetwise:ListTagsForResource",
	];
	/** IAM actions required for the ListVehicles API call. */
	static readonly LIST_VEHICLES: string[] = ["iotfleetwise:ListVehicles"];
	/** IAM actions required for the ListVehiclesInFleet API call. */
	static readonly LIST_VEHICLES_IN_FLEET: string[] = [
		"iotfleetwise:ListVehiclesInFleet",
	];
	/** IAM actions required for the PutEncryptionConfiguration API call. */
	static readonly PUT_ENCRYPTION_CONFIGURATION: string[] = [
		"iotfleetwise:PutEncryptionConfiguration",
	];
	/** IAM actions required for the PutLoggingOptions API call. */
	static readonly PUT_LOGGING_OPTIONS: string[] = [
		"iotfleetwise:PutLoggingOptions",
	];
	/** IAM actions required for the RegisterAccount API call. */
	static readonly REGISTER_ACCOUNT: string[] = ["iotfleetwise:RegisterAccount"];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["iotfleetwise:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["iotfleetwise:UntagResource"];
	/** IAM actions required for the UpdateCampaign API call. */
	static readonly UPDATE_CAMPAIGN: string[] = ["iotfleetwise:UpdateCampaign"];
	/** IAM actions required for the UpdateDecoderManifest API call. */
	static readonly UPDATE_DECODER_MANIFEST: string[] = [
		"iotfleetwise:UpdateDecoderManifest",
	];
	/** IAM actions required for the UpdateFleet API call. */
	static readonly UPDATE_FLEET: string[] = ["iotfleetwise:UpdateFleet"];
	/** IAM actions required for the UpdateModelManifest API call. */
	static readonly UPDATE_MODEL_MANIFEST: string[] = [
		"iotfleetwise:UpdateModelManifest",
	];
	/** IAM actions required for the UpdateSignalCatalog API call. */
	static readonly UPDATE_SIGNAL_CATALOG: string[] = [
		"iotfleetwise:UpdateSignalCatalog",
	];
	/** IAM actions required for the UpdateStateTemplate API call. */
	static readonly UPDATE_STATE_TEMPLATE: string[] = [
		"iotfleetwise:UpdateStateTemplate",
	];
	/** IAM actions required for the UpdateVehicle API call. */
	static readonly UPDATE_VEHICLE: string[] = ["iotfleetwise:UpdateVehicle"];
}

/**
 * Condition key constants and builders for iotfleetwise.
 */
export class IotfleetwiseConditions {
	/** Condition keys applicable to the CreateCampaign action. */
	static readonly CREATE_CAMPAIGN_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"iotfleetwise:DestinationArn",
	];
	/** Condition keys applicable to the CreateDecoderManifest action. */
	static readonly CREATE_DECODER_MANIFEST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateFleet action. */
	static readonly CREATE_FLEET_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateModelManifest action. */
	static readonly CREATE_MODEL_MANIFEST_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSignalCatalog action. */
	static readonly CREATE_SIGNAL_CATALOG_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStateTemplate action. */
	static readonly CREATE_STATE_TEMPLATE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateVehicle action. */
	static readonly CREATE_VEHICLE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GenerateCommandPayload action. */
	static readonly GENERATE_COMMAND_PAYLOAD_CONDITION_KEYS: string[] = [
		"iotfleetwise:Signals",
	];
	/** Condition keys applicable to the ImportSignalCatalog action. */
	static readonly IMPORT_SIGNAL_CATALOG_CONDITION_KEYS: string[] = [
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
	/** Condition keys applicable to the UpdateVehicle action. */
	static readonly UPDATE_VEHICLE_CONDITION_KEYS: string[] = [
		"iotfleetwise:UpdateToDecoderManifestArn",
		"iotfleetwise:UpdateToModelManifestArn",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
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
