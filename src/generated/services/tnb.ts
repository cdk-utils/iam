// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/tnb.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the tnb service.
 */
export class TnbActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "tnb";

	/** [Write] tnb:CancelSolNetworkOperation */
	static readonly CANCEL_SOL_NETWORK_OPERATION =
		"tnb:CancelSolNetworkOperation";
	/** [Write] tnb:CreateSolFunctionPackage */
	static readonly CREATE_SOL_FUNCTION_PACKAGE = "tnb:CreateSolFunctionPackage";
	/** [Write] tnb:CreateSolNetworkInstance */
	static readonly CREATE_SOL_NETWORK_INSTANCE = "tnb:CreateSolNetworkInstance";
	/** [Write] tnb:CreateSolNetworkPackage */
	static readonly CREATE_SOL_NETWORK_PACKAGE = "tnb:CreateSolNetworkPackage";
	/** [Write] tnb:DeleteSolFunctionPackage */
	static readonly DELETE_SOL_FUNCTION_PACKAGE = "tnb:DeleteSolFunctionPackage";
	/** [Write] tnb:DeleteSolNetworkInstance */
	static readonly DELETE_SOL_NETWORK_INSTANCE = "tnb:DeleteSolNetworkInstance";
	/** [Write] tnb:DeleteSolNetworkPackage */
	static readonly DELETE_SOL_NETWORK_PACKAGE = "tnb:DeleteSolNetworkPackage";
	/** [Read] tnb:GetSolFunctionInstance */
	static readonly GET_SOL_FUNCTION_INSTANCE = "tnb:GetSolFunctionInstance";
	/** [Read] tnb:GetSolFunctionPackage */
	static readonly GET_SOL_FUNCTION_PACKAGE = "tnb:GetSolFunctionPackage";
	/** [Read] tnb:GetSolFunctionPackageContent */
	static readonly GET_SOL_FUNCTION_PACKAGE_CONTENT =
		"tnb:GetSolFunctionPackageContent";
	/** [Read] tnb:GetSolFunctionPackageDescriptor */
	static readonly GET_SOL_FUNCTION_PACKAGE_DESCRIPTOR =
		"tnb:GetSolFunctionPackageDescriptor";
	/** [Read] tnb:GetSolNetworkInstance */
	static readonly GET_SOL_NETWORK_INSTANCE = "tnb:GetSolNetworkInstance";
	/** [Read] tnb:GetSolNetworkOperation */
	static readonly GET_SOL_NETWORK_OPERATION = "tnb:GetSolNetworkOperation";
	/** [Read] tnb:GetSolNetworkPackage */
	static readonly GET_SOL_NETWORK_PACKAGE = "tnb:GetSolNetworkPackage";
	/** [Read] tnb:GetSolNetworkPackageContent */
	static readonly GET_SOL_NETWORK_PACKAGE_CONTENT =
		"tnb:GetSolNetworkPackageContent";
	/** [Read] tnb:GetSolNetworkPackageDescriptor */
	static readonly GET_SOL_NETWORK_PACKAGE_DESCRIPTOR =
		"tnb:GetSolNetworkPackageDescriptor";
	/** [Write] tnb:InstantiateSolNetworkInstance */
	static readonly INSTANTIATE_SOL_NETWORK_INSTANCE =
		"tnb:InstantiateSolNetworkInstance";
	/** [List] tnb:ListSolFunctionInstances */
	static readonly LIST_SOL_FUNCTION_INSTANCES = "tnb:ListSolFunctionInstances";
	/** [List] tnb:ListSolFunctionPackages */
	static readonly LIST_SOL_FUNCTION_PACKAGES = "tnb:ListSolFunctionPackages";
	/** [List] tnb:ListSolNetworkInstances */
	static readonly LIST_SOL_NETWORK_INSTANCES = "tnb:ListSolNetworkInstances";
	/** [List] tnb:ListSolNetworkOperations */
	static readonly LIST_SOL_NETWORK_OPERATIONS = "tnb:ListSolNetworkOperations";
	/** [List] tnb:ListSolNetworkPackages */
	static readonly LIST_SOL_NETWORK_PACKAGES = "tnb:ListSolNetworkPackages";
	/** [List] tnb:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "tnb:ListTagsForResource";
	/** [Write] tnb:PutSolFunctionPackageContent */
	static readonly PUT_SOL_FUNCTION_PACKAGE_CONTENT =
		"tnb:PutSolFunctionPackageContent";
	/** [Write] tnb:PutSolNetworkPackageContent */
	static readonly PUT_SOL_NETWORK_PACKAGE_CONTENT =
		"tnb:PutSolNetworkPackageContent";
	/** [Tagging] tnb:TagResource */
	static readonly TAG_RESOURCE = "tnb:TagResource";
	/** [Write] tnb:TerminateSolNetworkInstance */
	static readonly TERMINATE_SOL_NETWORK_INSTANCE =
		"tnb:TerminateSolNetworkInstance";
	/** [Tagging] tnb:UntagResource */
	static readonly UNTAG_RESOURCE = "tnb:UntagResource";
	/** [Write] tnb:UpdateSolFunctionPackage */
	static readonly UPDATE_SOL_FUNCTION_PACKAGE = "tnb:UpdateSolFunctionPackage";
	/** [Write] tnb:UpdateSolNetworkInstance */
	static readonly UPDATE_SOL_NETWORK_INSTANCE = "tnb:UpdateSolNetworkInstance";
	/** [Write] tnb:UpdateSolNetworkPackage */
	static readonly UPDATE_SOL_NETWORK_PACKAGE = "tnb:UpdateSolNetworkPackage";
	/** [Write] tnb:ValidateSolFunctionPackageContent */
	static readonly VALIDATE_SOL_FUNCTION_PACKAGE_CONTENT =
		"tnb:ValidateSolFunctionPackageContent";
	/** [Write] tnb:ValidateSolNetworkPackageContent */
	static readonly VALIDATE_SOL_NETWORK_PACKAGE_CONTENT =
		"tnb:ValidateSolNetworkPackageContent";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		TnbActions.GET_SOL_FUNCTION_INSTANCE,
		TnbActions.GET_SOL_FUNCTION_PACKAGE,
		TnbActions.GET_SOL_FUNCTION_PACKAGE_CONTENT,
		TnbActions.GET_SOL_FUNCTION_PACKAGE_DESCRIPTOR,
		TnbActions.GET_SOL_NETWORK_INSTANCE,
		TnbActions.GET_SOL_NETWORK_OPERATION,
		TnbActions.GET_SOL_NETWORK_PACKAGE,
		TnbActions.GET_SOL_NETWORK_PACKAGE_CONTENT,
		TnbActions.GET_SOL_NETWORK_PACKAGE_DESCRIPTOR,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		TnbActions.CANCEL_SOL_NETWORK_OPERATION,
		TnbActions.CREATE_SOL_FUNCTION_PACKAGE,
		TnbActions.CREATE_SOL_NETWORK_INSTANCE,
		TnbActions.CREATE_SOL_NETWORK_PACKAGE,
		TnbActions.DELETE_SOL_FUNCTION_PACKAGE,
		TnbActions.DELETE_SOL_NETWORK_INSTANCE,
		TnbActions.DELETE_SOL_NETWORK_PACKAGE,
		TnbActions.INSTANTIATE_SOL_NETWORK_INSTANCE,
		TnbActions.PUT_SOL_FUNCTION_PACKAGE_CONTENT,
		TnbActions.PUT_SOL_NETWORK_PACKAGE_CONTENT,
		TnbActions.TERMINATE_SOL_NETWORK_INSTANCE,
		TnbActions.UPDATE_SOL_FUNCTION_PACKAGE,
		TnbActions.UPDATE_SOL_NETWORK_INSTANCE,
		TnbActions.UPDATE_SOL_NETWORK_PACKAGE,
		TnbActions.VALIDATE_SOL_FUNCTION_PACKAGE_CONTENT,
		TnbActions.VALIDATE_SOL_NETWORK_PACKAGE_CONTENT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		TnbActions.LIST_SOL_FUNCTION_INSTANCES,
		TnbActions.LIST_SOL_FUNCTION_PACKAGES,
		TnbActions.LIST_SOL_NETWORK_INSTANCES,
		TnbActions.LIST_SOL_NETWORK_OPERATIONS,
		TnbActions.LIST_SOL_NETWORK_PACKAGES,
		TnbActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		TnbActions.TAG_RESOURCE,
		TnbActions.UNTAG_RESOURCE,
	];
}

const FunctionInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):function-instance/(?<functionInstanceId>[^:/?]+)$",
);
const FunctionPackageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):function-package/(?<functionPackageId>[^:/?]+)$",
);
const NetworkInstanceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):network-instance/(?<networkInstanceId>[^:/?]+)$",
);
const NetworkOperationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):network-operation/(?<networkOperationId>[^:/?]+)$",
);
const NetworkPackageArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):network-package/(?<networkPackageId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for tnb resources.
 */
export class TnbResources {
	/**
	 * Builds an ARN for the function-instance resource.
	 */
	static functionInstance(props: {
		/** The FunctionInstanceId component of the ARN. */
		readonly functionInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:tnb:${props.region ?? "*"}:${props.account ?? "*"}:function-instance/${props.functionInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the function-instance resource.
	 */
	static isValidFunctionInstanceArn(arn: string): boolean {
		return FunctionInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a function-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionInstanceId: string;
	} {
		const match = FunctionInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid function-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionInstanceId: match.groups!.functionInstanceId,
		};
	}

	/**
	 * Builds an ARN for the function-package resource.
	 */
	static functionPackage(props: {
		/** The FunctionPackageId component of the ARN. */
		readonly functionPackageId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:tnb:${props.region ?? "*"}:${props.account ?? "*"}:function-package/${props.functionPackageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the function-package resource.
	 */
	static isValidFunctionPackageArn(arn: string): boolean {
		return FunctionPackageArnRegex.test(arn);
	}

	/**
	 * Parses a function-package ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseFunctionPackageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		functionPackageId: string;
	} {
		const match = FunctionPackageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid function-package ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			functionPackageId: match.groups!.functionPackageId,
		};
	}

	/**
	 * Builds an ARN for the network-instance resource.
	 */
	static networkInstance(props: {
		/** The NetworkInstanceId component of the ARN. */
		readonly networkInstanceId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:tnb:${props.region ?? "*"}:${props.account ?? "*"}:network-instance/${props.networkInstanceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network-instance resource.
	 */
	static isValidNetworkInstanceArn(arn: string): boolean {
		return NetworkInstanceArnRegex.test(arn);
	}

	/**
	 * Parses a network-instance ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkInstanceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkInstanceId: string;
	} {
		const match = NetworkInstanceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network-instance ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkInstanceId: match.groups!.networkInstanceId,
		};
	}

	/**
	 * Builds an ARN for the network-operation resource.
	 */
	static networkOperation(props: {
		/** The NetworkOperationId component of the ARN. */
		readonly networkOperationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:tnb:${props.region ?? "*"}:${props.account ?? "*"}:network-operation/${props.networkOperationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network-operation resource.
	 */
	static isValidNetworkOperationArn(arn: string): boolean {
		return NetworkOperationArnRegex.test(arn);
	}

	/**
	 * Parses a network-operation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkOperationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkOperationId: string;
	} {
		const match = NetworkOperationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network-operation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkOperationId: match.groups!.networkOperationId,
		};
	}

	/**
	 * Builds an ARN for the network-package resource.
	 */
	static networkPackage(props: {
		/** The NetworkPackageId component of the ARN. */
		readonly networkPackageId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:tnb:${props.region ?? "*"}:${props.account ?? "*"}:network-package/${props.networkPackageId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the network-package resource.
	 */
	static isValidNetworkPackageArn(arn: string): boolean {
		return NetworkPackageArnRegex.test(arn);
	}

	/**
	 * Parses a network-package ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNetworkPackageArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		networkPackageId: string;
	} {
		const match = NetworkPackageArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid network-package ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			networkPackageId: match.groups!.networkPackageId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for tnb.
 */
export class TnbOperations {
	/** IAM actions required for the CancelSolNetworkOperation API call. */
	static readonly CANCEL_SOL_NETWORK_OPERATION: string[] = [
		"tnb:CancelSolNetworkOperation",
	];
	/** IAM actions required for the CreateSolFunctionPackage API call. */
	static readonly CREATE_SOL_FUNCTION_PACKAGE: string[] = [
		"tnb:CreateSolFunctionPackage",
		"tnb:TagResource",
	];
	/** IAM actions required for the CreateSolNetworkInstance API call. */
	static readonly CREATE_SOL_NETWORK_INSTANCE: string[] = [
		"tnb:CreateSolNetworkInstance",
		"tnb:TagResource",
	];
	/** IAM actions required for the CreateSolNetworkPackage API call. */
	static readonly CREATE_SOL_NETWORK_PACKAGE: string[] = [
		"tnb:CreateSolNetworkPackage",
		"tnb:TagResource",
	];
	/** IAM actions required for the DeleteSolFunctionPackage API call. */
	static readonly DELETE_SOL_FUNCTION_PACKAGE: string[] = [
		"tnb:DeleteSolFunctionPackage",
	];
	/** IAM actions required for the DeleteSolNetworkInstance API call. */
	static readonly DELETE_SOL_NETWORK_INSTANCE: string[] = [
		"tnb:DeleteSolNetworkInstance",
	];
	/** IAM actions required for the DeleteSolNetworkPackage API call. */
	static readonly DELETE_SOL_NETWORK_PACKAGE: string[] = [
		"tnb:DeleteSolNetworkPackage",
	];
	/** IAM actions required for the GetSolFunctionInstance API call. */
	static readonly GET_SOL_FUNCTION_INSTANCE: string[] = [
		"tnb:GetSolFunctionInstance",
	];
	/** IAM actions required for the GetSolFunctionPackage API call. */
	static readonly GET_SOL_FUNCTION_PACKAGE: string[] = [
		"tnb:GetSolFunctionPackage",
	];
	/** IAM actions required for the GetSolFunctionPackageContent API call. */
	static readonly GET_SOL_FUNCTION_PACKAGE_CONTENT: string[] = [
		"tnb:GetSolFunctionPackageContent",
	];
	/** IAM actions required for the GetSolFunctionPackageDescriptor API call. */
	static readonly GET_SOL_FUNCTION_PACKAGE_DESCRIPTOR: string[] = [
		"tnb:GetSolFunctionPackageDescriptor",
	];
	/** IAM actions required for the GetSolNetworkInstance API call. */
	static readonly GET_SOL_NETWORK_INSTANCE: string[] = [
		"tnb:GetSolNetworkInstance",
	];
	/** IAM actions required for the GetSolNetworkOperation API call. */
	static readonly GET_SOL_NETWORK_OPERATION: string[] = [
		"tnb:GetSolNetworkOperation",
	];
	/** IAM actions required for the GetSolNetworkPackage API call. */
	static readonly GET_SOL_NETWORK_PACKAGE: string[] = [
		"tnb:GetSolNetworkPackage",
	];
	/** IAM actions required for the GetSolNetworkPackageContent API call. */
	static readonly GET_SOL_NETWORK_PACKAGE_CONTENT: string[] = [
		"tnb:GetSolNetworkPackageContent",
	];
	/** IAM actions required for the GetSolNetworkPackageDescriptor API call. */
	static readonly GET_SOL_NETWORK_PACKAGE_DESCRIPTOR: string[] = [
		"tnb:GetSolNetworkPackageDescriptor",
	];
	/** IAM actions required for the InstantiateSolNetworkInstance API call. */
	static readonly INSTANTIATE_SOL_NETWORK_INSTANCE: string[] = [
		"tnb:InstantiateSolNetworkInstance",
		"tnb:TagResource",
	];
	/** IAM actions required for the ListSolFunctionInstances API call. */
	static readonly LIST_SOL_FUNCTION_INSTANCES: string[] = [
		"tnb:ListSolFunctionInstances",
	];
	/** IAM actions required for the ListSolFunctionPackages API call. */
	static readonly LIST_SOL_FUNCTION_PACKAGES: string[] = [
		"tnb:ListSolFunctionPackages",
	];
	/** IAM actions required for the ListSolNetworkInstances API call. */
	static readonly LIST_SOL_NETWORK_INSTANCES: string[] = [
		"tnb:ListSolNetworkInstances",
	];
	/** IAM actions required for the ListSolNetworkOperations API call. */
	static readonly LIST_SOL_NETWORK_OPERATIONS: string[] = [
		"tnb:ListSolNetworkOperations",
	];
	/** IAM actions required for the ListSolNetworkPackages API call. */
	static readonly LIST_SOL_NETWORK_PACKAGES: string[] = [
		"tnb:ListSolNetworkPackages",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"tnb:ListTagsForResource",
	];
	/** IAM actions required for the PutSolFunctionPackageContent API call. */
	static readonly PUT_SOL_FUNCTION_PACKAGE_CONTENT: string[] = [
		"tnb:PutSolFunctionPackageContent",
	];
	/** IAM actions required for the PutSolNetworkPackageContent API call. */
	static readonly PUT_SOL_NETWORK_PACKAGE_CONTENT: string[] = [
		"tnb:PutSolNetworkPackageContent",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["tnb:TagResource"];
	/** IAM actions required for the TerminateSolNetworkInstance API call. */
	static readonly TERMINATE_SOL_NETWORK_INSTANCE: string[] = [
		"tnb:TagResource",
		"tnb:TerminateSolNetworkInstance",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["tnb:UntagResource"];
	/** IAM actions required for the UpdateSolFunctionPackage API call. */
	static readonly UPDATE_SOL_FUNCTION_PACKAGE: string[] = [
		"tnb:UpdateSolFunctionPackage",
	];
	/** IAM actions required for the UpdateSolNetworkInstance API call. */
	static readonly UPDATE_SOL_NETWORK_INSTANCE: string[] = [
		"tnb:TagResource",
		"tnb:UpdateSolNetworkInstance",
	];
	/** IAM actions required for the UpdateSolNetworkPackage API call. */
	static readonly UPDATE_SOL_NETWORK_PACKAGE: string[] = [
		"tnb:UpdateSolNetworkPackage",
	];
	/** IAM actions required for the ValidateSolFunctionPackageContent API call. */
	static readonly VALIDATE_SOL_FUNCTION_PACKAGE_CONTENT: string[] = [
		"tnb:ValidateSolFunctionPackageContent",
	];
	/** IAM actions required for the ValidateSolNetworkPackageContent API call. */
	static readonly VALIDATE_SOL_NETWORK_PACKAGE_CONTENT: string[] = [
		"tnb:ValidateSolNetworkPackageContent",
	];
}

/**
 * Condition key constants and builders for tnb.
 */
export class TnbConditions {
	/** Condition keys applicable to the CreateSolFunctionPackage action. */
	static readonly CREATE_SOL_FUNCTION_PACKAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolNetworkInstance action. */
	static readonly CREATE_SOL_NETWORK_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolNetworkPackage action. */
	static readonly CREATE_SOL_NETWORK_PACKAGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetSolFunctionInstance action. */
	static readonly GET_SOL_FUNCTION_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolFunctionPackage action. */
	static readonly GET_SOL_FUNCTION_PACKAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolFunctionPackageContent action. */
	static readonly GET_SOL_FUNCTION_PACKAGE_CONTENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolFunctionPackageDescriptor action. */
	static readonly GET_SOL_FUNCTION_PACKAGE_DESCRIPTOR_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetSolNetworkInstance action. */
	static readonly GET_SOL_NETWORK_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkOperation action. */
	static readonly GET_SOL_NETWORK_OPERATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkPackage action. */
	static readonly GET_SOL_NETWORK_PACKAGE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkPackageContent action. */
	static readonly GET_SOL_NETWORK_PACKAGE_CONTENT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkPackageDescriptor action. */
	static readonly GET_SOL_NETWORK_PACKAGE_DESCRIPTOR_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the InstantiateSolNetworkInstance action. */
	static readonly INSTANTIATE_SOL_NETWORK_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListSolFunctionInstances action. */
	static readonly LIST_SOL_FUNCTION_INSTANCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolFunctionPackages action. */
	static readonly LIST_SOL_FUNCTION_PACKAGES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolNetworkInstances action. */
	static readonly LIST_SOL_NETWORK_INSTANCES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolNetworkOperations action. */
	static readonly LIST_SOL_NETWORK_OPERATIONS_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolNetworkPackages action. */
	static readonly LIST_SOL_NETWORK_PACKAGES_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TerminateSolNetworkInstance action. */
	static readonly TERMINATE_SOL_NETWORK_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateSolNetworkInstance action. */
	static readonly UPDATE_SOL_NETWORK_INSTANCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
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
