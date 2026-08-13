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
	static readonly actionGetControl = "controlcatalog:GetControl";
	/** [List] controlcatalog:ListCommonControls */
	static readonly ListCommonControls = "controlcatalog:ListCommonControls";
	/** [List] controlcatalog:ListControlMappings */
	static readonly ListControlMappings = "controlcatalog:ListControlMappings";
	/** [List] controlcatalog:ListControls */
	static readonly ListControls = "controlcatalog:ListControls";
	/** [List] controlcatalog:ListDomains */
	static readonly ListDomains = "controlcatalog:ListDomains";
	/** [List] controlcatalog:ListObjectives */
	static readonly ListObjectives = "controlcatalog:ListObjectives";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ControlcatalogActions.actionGetControl,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ControlcatalogActions.ListCommonControls,
		ControlcatalogActions.ListControlMappings,
		ControlcatalogActions.ListControls,
		ControlcatalogActions.ListDomains,
		ControlcatalogActions.ListObjectives,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a common-control ARN.
 */
export interface ControlcatalogCommonControlArnProps {
	/** The CommonControlId component of the ARN. */
	readonly commonControlId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a common-control ARN.
 */
export interface ControlcatalogCommonControlArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The CommonControlId component. */
	readonly commonControlId: string;
}

/**
 * Properties for building a control ARN.
 */
export interface ControlcatalogControlArnProps {
	/** The ControlId component of the ARN. */
	readonly controlId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a control ARN.
 */
export interface ControlcatalogControlArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ControlId component. */
	readonly controlId: string;
}

/**
 * Properties for building a domain ARN.
 */
export interface ControlcatalogDomainArnProps {
	/** The DomainId component of the ARN. */
	readonly domainId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a domain ARN.
 */
export interface ControlcatalogDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
}

/**
 * Properties for building a objective ARN.
 */
export interface ControlcatalogObjectiveArnProps {
	/** The ObjectiveId component of the ARN. */
	readonly objectiveId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a objective ARN.
 */
export interface ControlcatalogObjectiveArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ObjectiveId component. */
	readonly objectiveId: string;
}

const CommonControlArnRegex =
	/^arn:(?<partition>[^:]+):controlcatalog:::common-control\/(?<commonControlId>[^:/?]+)$/;
const ControlArnRegex =
	/^arn:(?<partition>[^:]+):controlcatalog:::control\/(?<controlId>[^:/?]+)$/;
const DomainArnRegex =
	/^arn:(?<partition>[^:]+):controlcatalog:::domain\/(?<domainId>[^:/?]+)$/;
const ObjectiveArnRegex =
	/^arn:(?<partition>[^:]+):controlcatalog:::objective\/(?<objectiveId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for controlcatalog resources.
 */
export class ControlcatalogResources {
	/**
	 * Builds an ARN for the common-control resource.
	 */
	static commonControl(props: ControlcatalogCommonControlArnProps): string {
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
	static parseCommonControlArn(
		arn: string,
	): ControlcatalogCommonControlArnComponents {
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
	static control(props: ControlcatalogControlArnProps): string {
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
	static parseControlArn(arn: string): ControlcatalogControlArnComponents {
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
	static domain(props: ControlcatalogDomainArnProps): string {
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
	static parseDomainArn(arn: string): ControlcatalogDomainArnComponents {
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
	static objective(props: ControlcatalogObjectiveArnProps): string {
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
	static parseObjectiveArn(arn: string): ControlcatalogObjectiveArnComponents {
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
	static readonly opGetControl: string[] = [
		"controltower:DescribeGuardrail",
		"controlcatalog:GetControl",
	];
	/** IAM actions required for the ListCommonControls API call. */
	static readonly ListCommonControls: string[] = [
		"controlcatalog:ListCommonControls",
	];
	/** IAM actions required for the ListControlMappings API call. */
	static readonly ListControlMappings: string[] = [
		"controlcatalog:ListControlMappings",
	];
	/** IAM actions required for the ListControls API call. */
	static readonly ListControls: string[] = [
		"controlcatalog:ListControls",
		"controltower:ListGuardrails",
	];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["controlcatalog:ListDomains"];
	/** IAM actions required for the ListObjectives API call. */
	static readonly ListObjectives: string[] = ["controlcatalog:ListObjectives"];
}
