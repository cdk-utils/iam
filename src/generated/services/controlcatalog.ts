// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/controlcatalog.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the controlcatalog service.
 */
export class ControlcatalogActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "controlcatalog";

	/** [Read] controlcatalog:GetControl */
	static readonly GET_CONTROL = "controlcatalog:GetControl";
	/** [List] controlcatalog:ListCommonControls */
	static readonly LIST_COMMON_CONTROLS = "controlcatalog:ListCommonControls";
	/** [List] controlcatalog:ListControlMappings */
	static readonly LIST_CONTROL_MAPPINGS = "controlcatalog:ListControlMappings";
	/** [List] controlcatalog:ListControls */
	static readonly LIST_CONTROLS = "controlcatalog:ListControls";
	/** [List] controlcatalog:ListDomains */
	static readonly LIST_DOMAINS = "controlcatalog:ListDomains";
	/** [List] controlcatalog:ListObjectives */
	static readonly LIST_OBJECTIVES = "controlcatalog:ListObjectives";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [ControlcatalogActions.GET_CONTROL];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ControlcatalogActions.LIST_COMMON_CONTROLS,
		ControlcatalogActions.LIST_CONTROL_MAPPINGS,
		ControlcatalogActions.LIST_CONTROLS,
		ControlcatalogActions.LIST_DOMAINS,
		ControlcatalogActions.LIST_OBJECTIVES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const CommonControlArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controlcatalog:::common-control/(?<commonControlId>[^:/?]+)$",
);
const ControlArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controlcatalog:::control/(?<controlId>[^:/?]+)$",
);
const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controlcatalog:::domain/(?<domainId>[^:/?]+)$",
);
const ObjectiveArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):controlcatalog:::objective/(?<objectiveId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for controlcatalog resources.
 */
export class ControlcatalogResources {
	/**
	 * Builds an ARN for the common-control resource.
	 */
	static commonControl(props: {
		/** The CommonControlId component of the ARN. */
		readonly commonControlId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:controlcatalog:::common-control/${props.commonControlId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the common-control resource.
	 */
	static isValidCommonControlArn(arn: string): boolean {
		return CommonControlArnRegex.test(arn);
	}

	/**
	 * Parses a common-control ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCommonControlArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		commonControlId: string;
	} {
		const match = CommonControlArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid common-control ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			commonControlId: match.groups!.commonControlId,
		};
	}

	/**
	 * Builds an ARN for the control resource.
	 */
	static control(props: {
		/** The ControlId component of the ARN. */
		readonly controlId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:controlcatalog:::control/${props.controlId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the control resource.
	 */
	static isValidControlArn(arn: string): boolean {
		return ControlArnRegex.test(arn);
	}

	/**
	 * Parses a control ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseControlArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		controlId: string;
	} {
		const match = ControlArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid control ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			controlId: match.groups!.controlId,
		};
	}

	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: {
		/** The DomainId component of the ARN. */
		readonly domainId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:controlcatalog:::domain/${props.domainId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the domain resource.
	 */
	static isValidDomainArn(arn: string): boolean {
		return DomainArnRegex.test(arn);
	}

	/**
	 * Parses a domain ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDomainArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		domainId: string;
	} {
		const match = DomainArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid domain ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			domainId: match.groups!.domainId,
		};
	}

	/**
	 * Builds an ARN for the objective resource.
	 */
	static objective(props: {
		/** The ObjectiveId component of the ARN. */
		readonly objectiveId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:controlcatalog:::objective/${props.objectiveId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the objective resource.
	 */
	static isValidObjectiveArn(arn: string): boolean {
		return ObjectiveArnRegex.test(arn);
	}

	/**
	 * Parses a objective ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseObjectiveArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		objectiveId: string;
	} {
		const match = ObjectiveArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid objective ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			objectiveId: match.groups!.objectiveId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for controlcatalog.
 */
export class ControlcatalogOperations {
	/** IAM actions required for the GetControl API call. */
	static readonly GET_CONTROL: string[] = [
		"controltower:DescribeGuardrail",
		"controlcatalog:GetControl",
	];
	/** IAM actions required for the ListCommonControls API call. */
	static readonly LIST_COMMON_CONTROLS: string[] = [
		"controlcatalog:ListCommonControls",
	];
	/** IAM actions required for the ListControlMappings API call. */
	static readonly LIST_CONTROL_MAPPINGS: string[] = [
		"controlcatalog:ListControlMappings",
	];
	/** IAM actions required for the ListControls API call. */
	static readonly LIST_CONTROLS: string[] = [
		"controlcatalog:ListControls",
		"controltower:ListGuardrails",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["controlcatalog:ListDomains"];
	/** IAM actions required for the ListObjectives API call. */
	static readonly LIST_OBJECTIVES: string[] = ["controlcatalog:ListObjectives"];
}
