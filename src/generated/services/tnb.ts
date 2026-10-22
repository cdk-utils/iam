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
	static readonly CancelSolNetworkOperation = "tnb:CancelSolNetworkOperation";
	/** [Write] tnb:CreateSolFunctionPackage */
	static readonly CreateSolFunctionPackage = "tnb:CreateSolFunctionPackage";
	/** [Write] tnb:CreateSolNetworkInstance */
	static readonly CreateSolNetworkInstance = "tnb:CreateSolNetworkInstance";
	/** [Write] tnb:CreateSolNetworkPackage */
	static readonly CreateSolNetworkPackage = "tnb:CreateSolNetworkPackage";
	/** [Write] tnb:DeleteSolFunctionPackage */
	static readonly DeleteSolFunctionPackage = "tnb:DeleteSolFunctionPackage";
	/** [Write] tnb:DeleteSolNetworkInstance */
	static readonly DeleteSolNetworkInstance = "tnb:DeleteSolNetworkInstance";
	/** [Write] tnb:DeleteSolNetworkPackage */
	static readonly DeleteSolNetworkPackage = "tnb:DeleteSolNetworkPackage";
	/** [Read] tnb:GetSolFunctionInstance */
	static readonly actionGetSolFunctionInstance = "tnb:GetSolFunctionInstance";
	/** [Read] tnb:GetSolFunctionPackage */
	static readonly actionGetSolFunctionPackage = "tnb:GetSolFunctionPackage";
	/** [Read] tnb:GetSolFunctionPackageContent */
	static readonly actionGetSolFunctionPackageContent =
		"tnb:GetSolFunctionPackageContent";
	/** [Read] tnb:GetSolFunctionPackageDescriptor */
	static readonly actionGetSolFunctionPackageDescriptor =
		"tnb:GetSolFunctionPackageDescriptor";
	/** [Read] tnb:GetSolNetworkInstance */
	static readonly actionGetSolNetworkInstance = "tnb:GetSolNetworkInstance";
	/** [Read] tnb:GetSolNetworkOperation */
	static readonly actionGetSolNetworkOperation = "tnb:GetSolNetworkOperation";
	/** [Read] tnb:GetSolNetworkPackage */
	static readonly actionGetSolNetworkPackage = "tnb:GetSolNetworkPackage";
	/** [Read] tnb:GetSolNetworkPackageContent */
	static readonly actionGetSolNetworkPackageContent =
		"tnb:GetSolNetworkPackageContent";
	/** [Read] tnb:GetSolNetworkPackageDescriptor */
	static readonly actionGetSolNetworkPackageDescriptor =
		"tnb:GetSolNetworkPackageDescriptor";
	/** [Write] tnb:InstantiateSolNetworkInstance */
	static readonly InstantiateSolNetworkInstance =
		"tnb:InstantiateSolNetworkInstance";
	/** [List] tnb:ListSolFunctionInstances */
	static readonly ListSolFunctionInstances = "tnb:ListSolFunctionInstances";
	/** [List] tnb:ListSolFunctionPackages */
	static readonly ListSolFunctionPackages = "tnb:ListSolFunctionPackages";
	/** [List] tnb:ListSolNetworkInstances */
	static readonly ListSolNetworkInstances = "tnb:ListSolNetworkInstances";
	/** [List] tnb:ListSolNetworkOperations */
	static readonly ListSolNetworkOperations = "tnb:ListSolNetworkOperations";
	/** [List] tnb:ListSolNetworkPackages */
	static readonly ListSolNetworkPackages = "tnb:ListSolNetworkPackages";
	/** [List] tnb:ListTagsForResource */
	static readonly ListTagsForResource = "tnb:ListTagsForResource";
	/** [Write] tnb:PutSolFunctionPackageContent */
	static readonly PutSolFunctionPackageContent =
		"tnb:PutSolFunctionPackageContent";
	/** [Write] tnb:PutSolNetworkPackageContent */
	static readonly PutSolNetworkPackageContent =
		"tnb:PutSolNetworkPackageContent";
	/** [Tagging] tnb:TagResource */
	static readonly TagResource = "tnb:TagResource";
	/** [Write] tnb:TerminateSolNetworkInstance */
	static readonly TerminateSolNetworkInstance =
		"tnb:TerminateSolNetworkInstance";
	/** [Tagging] tnb:UntagResource */
	static readonly UntagResource = "tnb:UntagResource";
	/** [Write] tnb:UpdateSolFunctionPackage */
	static readonly UpdateSolFunctionPackage = "tnb:UpdateSolFunctionPackage";
	/** [Write] tnb:UpdateSolNetworkInstance */
	static readonly UpdateSolNetworkInstance = "tnb:UpdateSolNetworkInstance";
	/** [Write] tnb:UpdateSolNetworkPackage */
	static readonly UpdateSolNetworkPackage = "tnb:UpdateSolNetworkPackage";
	/** [Write] tnb:ValidateSolFunctionPackageContent */
	static readonly ValidateSolFunctionPackageContent =
		"tnb:ValidateSolFunctionPackageContent";
	/** [Write] tnb:ValidateSolNetworkPackageContent */
	static readonly ValidateSolNetworkPackageContent =
		"tnb:ValidateSolNetworkPackageContent";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		TnbActions.actionGetSolFunctionInstance,
		TnbActions.actionGetSolFunctionPackage,
		TnbActions.actionGetSolFunctionPackageContent,
		TnbActions.actionGetSolFunctionPackageDescriptor,
		TnbActions.actionGetSolNetworkInstance,
		TnbActions.actionGetSolNetworkOperation,
		TnbActions.actionGetSolNetworkPackage,
		TnbActions.actionGetSolNetworkPackageContent,
		TnbActions.actionGetSolNetworkPackageDescriptor,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		TnbActions.CancelSolNetworkOperation,
		TnbActions.CreateSolFunctionPackage,
		TnbActions.CreateSolNetworkInstance,
		TnbActions.CreateSolNetworkPackage,
		TnbActions.DeleteSolFunctionPackage,
		TnbActions.DeleteSolNetworkInstance,
		TnbActions.DeleteSolNetworkPackage,
		TnbActions.InstantiateSolNetworkInstance,
		TnbActions.PutSolFunctionPackageContent,
		TnbActions.PutSolNetworkPackageContent,
		TnbActions.TerminateSolNetworkInstance,
		TnbActions.UpdateSolFunctionPackage,
		TnbActions.UpdateSolNetworkInstance,
		TnbActions.UpdateSolNetworkPackage,
		TnbActions.ValidateSolFunctionPackageContent,
		TnbActions.ValidateSolNetworkPackageContent,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		TnbActions.ListSolFunctionInstances,
		TnbActions.ListSolFunctionPackages,
		TnbActions.ListSolNetworkInstances,
		TnbActions.ListSolNetworkOperations,
		TnbActions.ListSolNetworkPackages,
		TnbActions.ListTagsForResource,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		TnbActions.TagResource,
		TnbActions.UntagResource,
	];
}

/**
 * Properties for building a function-instance ARN.
 */
export interface TnbFunctionInstanceArnProps {
	/** The FunctionInstanceId component of the ARN. */
	readonly functionInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a function-instance ARN.
 */
export interface TnbFunctionInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionInstanceId component. */
	readonly functionInstanceId: string;
}

/**
 * Properties for building a function-package ARN.
 */
export interface TnbFunctionPackageArnProps {
	/** The FunctionPackageId component of the ARN. */
	readonly functionPackageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a function-package ARN.
 */
export interface TnbFunctionPackageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The FunctionPackageId component. */
	readonly functionPackageId: string;
}

/**
 * Properties for building a network-instance ARN.
 */
export interface TnbNetworkInstanceArnProps {
	/** The NetworkInstanceId component of the ARN. */
	readonly networkInstanceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a network-instance ARN.
 */
export interface TnbNetworkInstanceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkInstanceId component. */
	readonly networkInstanceId: string;
}

/**
 * Properties for building a network-operation ARN.
 */
export interface TnbNetworkOperationArnProps {
	/** The NetworkOperationId component of the ARN. */
	readonly networkOperationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a network-operation ARN.
 */
export interface TnbNetworkOperationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkOperationId component. */
	readonly networkOperationId: string;
}

/**
 * Properties for building a network-package ARN.
 */
export interface TnbNetworkPackageArnProps {
	/** The NetworkPackageId component of the ARN. */
	readonly networkPackageId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a network-package ARN.
 */
export interface TnbNetworkPackageArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NetworkPackageId component. */
	readonly networkPackageId: string;
}

const FunctionInstanceArnRegex =
	/^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):function-instance\/(?<functionInstanceId>[^:/?]+)$/;
const FunctionPackageArnRegex =
	/^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):function-package\/(?<functionPackageId>[^:/?]+)$/;
const NetworkInstanceArnRegex =
	/^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):network-instance\/(?<networkInstanceId>[^:/?]+)$/;
const NetworkOperationArnRegex =
	/^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):network-operation\/(?<networkOperationId>[^:/?]+)$/;
const NetworkPackageArnRegex =
	/^arn:(?<partition>[^:]+):tnb:(?<region>[^:]*):(?<account>[^:]*):network-package\/(?<networkPackageId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for tnb resources.
 */
export class TnbResources {
	/**
	 * Builds an ARN for the function-instance resource.
	 */
	static functionInstance(props: TnbFunctionInstanceArnProps): string {
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
	static parseFunctionInstanceArn(
		arn: string,
	): TnbFunctionInstanceArnComponents {
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
	static functionPackage(props: TnbFunctionPackageArnProps): string {
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
	static parseFunctionPackageArn(arn: string): TnbFunctionPackageArnComponents {
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
	static networkInstance(props: TnbNetworkInstanceArnProps): string {
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
	static parseNetworkInstanceArn(arn: string): TnbNetworkInstanceArnComponents {
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
	static networkOperation(props: TnbNetworkOperationArnProps): string {
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
	static parseNetworkOperationArn(
		arn: string,
	): TnbNetworkOperationArnComponents {
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
	static networkPackage(props: TnbNetworkPackageArnProps): string {
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
	static parseNetworkPackageArn(arn: string): TnbNetworkPackageArnComponents {
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
 * Condition key constants and builders for tnb.
 */
export class TnbConditions {
	/** Condition keys applicable to the CreateSolFunctionPackage action. */
	static readonly CreateSolFunctionPackageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolNetworkInstance action. */
	static readonly CreateSolNetworkInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSolNetworkPackage action. */
	static readonly CreateSolNetworkPackageConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the GetSolFunctionInstance action. */
	static readonly actionGetSolFunctionInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolFunctionPackage action. */
	static readonly actionGetSolFunctionPackageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolFunctionPackageContent action. */
	static readonly actionGetSolFunctionPackageContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolFunctionPackageDescriptor action. */
	static readonly actionGetSolFunctionPackageDescriptorConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the GetSolNetworkInstance action. */
	static readonly actionGetSolNetworkInstanceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkOperation action. */
	static readonly actionGetSolNetworkOperationConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkPackage action. */
	static readonly actionGetSolNetworkPackageConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkPackageContent action. */
	static readonly actionGetSolNetworkPackageContentConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the GetSolNetworkPackageDescriptor action. */
	static readonly actionGetSolNetworkPackageDescriptorConditionKeys: string[] =
		["aws:ResourceTag/${TagKey}"];
	/** Condition keys applicable to the InstantiateSolNetworkInstance action. */
	static readonly InstantiateSolNetworkInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListSolFunctionInstances action. */
	static readonly ListSolFunctionInstancesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolFunctionPackages action. */
	static readonly ListSolFunctionPackagesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolNetworkInstances action. */
	static readonly ListSolNetworkInstancesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolNetworkOperations action. */
	static readonly ListSolNetworkOperationsConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the ListSolNetworkPackages action. */
	static readonly ListSolNetworkPackagesConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the TerminateSolNetworkInstance action. */
	static readonly TerminateSolNetworkInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UntagResourceConditionKeys: string[] = ["aws:TagKeys"];
	/** Condition keys applicable to the UpdateSolNetworkInstance action. */
	static readonly UpdateSolNetworkInstanceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
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
