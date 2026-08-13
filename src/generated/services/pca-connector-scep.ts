// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/pca-connector-scep.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the pca-connector-scep service.
 */
export class PcaConnectorScepActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "pca-connector-scep";

	/** [Write] pca-connector-scep:CreateChallenge */
	static readonly CreateChallenge = "pca-connector-scep:CreateChallenge";
	/** [Write] pca-connector-scep:CreateConnector */
	static readonly CreateConnector = "pca-connector-scep:CreateConnector";
	/** [Write] pca-connector-scep:DeleteChallenge */
	static readonly DeleteChallenge = "pca-connector-scep:DeleteChallenge";
	/** [Write] pca-connector-scep:DeleteConnector */
	static readonly DeleteConnector = "pca-connector-scep:DeleteConnector";
	/** [Read] pca-connector-scep:GetChallengeMetadata */
	static readonly actionGetChallengeMetadata =
		"pca-connector-scep:GetChallengeMetadata";
	/** [Read] pca-connector-scep:GetChallengePassword */
	static readonly actionGetChallengePassword =
		"pca-connector-scep:GetChallengePassword";
	/** [Read] pca-connector-scep:GetConnector */
	static readonly actionGetConnector = "pca-connector-scep:GetConnector";
	/** [List] pca-connector-scep:ListChallengeMetadata */
	static readonly ListChallengeMetadata =
		"pca-connector-scep:ListChallengeMetadata";
	/** [List] pca-connector-scep:ListConnectors */
	static readonly ListConnectors = "pca-connector-scep:ListConnectors";
	/** [Read] pca-connector-scep:ListTagsForResource */
	static readonly ListTagsForResource =
		"pca-connector-scep:ListTagsForResource";
	/** [Tagging] pca-connector-scep:TagResource */
	static readonly TagResource = "pca-connector-scep:TagResource";
	/** [Tagging] pca-connector-scep:UntagResource */
	static readonly UntagResource = "pca-connector-scep:UntagResource";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PcaConnectorScepActions.actionGetChallengeMetadata,
		PcaConnectorScepActions.actionGetChallengePassword,
		PcaConnectorScepActions.actionGetConnector,
		PcaConnectorScepActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PcaConnectorScepActions.CreateChallenge,
		PcaConnectorScepActions.CreateConnector,
		PcaConnectorScepActions.DeleteChallenge,
		PcaConnectorScepActions.DeleteConnector,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PcaConnectorScepActions.ListChallengeMetadata,
		PcaConnectorScepActions.ListConnectors,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		PcaConnectorScepActions.TagResource,
		PcaConnectorScepActions.UntagResource,
	];
}

/**
 * Properties for building a Challenge ARN.
 */
export interface PcaConnectorScepChallengeArnProps {
	/** The ConnectorId component of the ARN. */
	readonly connectorId: string;
	/** The ChallengeId component of the ARN. */
	readonly challengeId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Challenge ARN.
 */
export interface PcaConnectorScepChallengeArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
	/** The ChallengeId component. */
	readonly challengeId: string;
}

/**
 * Properties for building a Connector ARN.
 */
export interface PcaConnectorScepConnectorArnProps {
	/** The ConnectorId component of the ARN. */
	readonly connectorId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a Connector ARN.
 */
export interface PcaConnectorScepConnectorArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ConnectorId component. */
	readonly connectorId: string;
}

const ChallengeArnRegex =
	/^arn:(?<partition>[^:]+):pca-connector-scep:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)\/challenge\/(?<challengeId>[^:/?]+)$/;
const ConnectorArnRegex =
	/^arn:(?<partition>[^:]+):pca-connector-scep:(?<region>[^:]*):(?<account>[^:]*):connector\/(?<connectorId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for pca-connector-scep resources.
 */
export class PcaConnectorScepResources {
	/**
	 * Builds an ARN for the Challenge resource.
	 */
	static challenge(props: PcaConnectorScepChallengeArnProps): string {
		return `arn:${props.partition ?? "aws"}:pca-connector-scep:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}/challenge/${props.challengeId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Challenge resource.
	 */
	static isValidChallengeArn(arn: string): boolean {
		return ChallengeArnRegex.test(arn);
	}

	/**
	 * Parses a Challenge ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChallengeArn(
		arn: string,
	): PcaConnectorScepChallengeArnComponents {
		const match = ChallengeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Challenge ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
			challengeId: match.groups!.challengeId,
		};
	}

	/**
	 * Builds an ARN for the Connector resource.
	 */
	static connector(props: PcaConnectorScepConnectorArnProps): string {
		return `arn:${props.partition ?? "aws"}:pca-connector-scep:${props.region ?? "*"}:${props.account ?? "*"}:connector/${props.connectorId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Connector resource.
	 */
	static isValidConnectorArn(arn: string): boolean {
		return ConnectorArnRegex.test(arn);
	}

	/**
	 * Parses a Connector ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectorArn(
		arn: string,
	): PcaConnectorScepConnectorArnComponents {
		const match = ConnectorArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Connector ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			connectorId: match.groups!.connectorId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for pca-connector-scep.
 */
export class PcaConnectorScepOperations {
	/** IAM actions required for the CreateChallenge API call. */
	static readonly CreateChallenge: string[] = [
		"pca-connector-scep:CreateChallenge",
		"pca-connector-scep:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CreateConnector: string[] = [
		"pca-connector-scep:CreateConnector",
		"pca-connector-scep:TagResource",
	];
	/** IAM actions required for the DeleteChallenge API call. */
	static readonly DeleteChallenge: string[] = [
		"pca-connector-scep:DeleteChallenge",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DeleteConnector: string[] = [
		"pca-connector-scep:DeleteConnector",
	];
	/** IAM actions required for the GetChallengeMetadata API call. */
	static readonly opGetChallengeMetadata: string[] = [
		"pca-connector-scep:GetChallengeMetadata",
	];
	/** IAM actions required for the GetChallengePassword API call. */
	static readonly opGetChallengePassword: string[] = [
		"pca-connector-scep:GetChallengePassword",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly opGetConnector: string[] = [
		"pca-connector-scep:GetConnector",
	];
	/** IAM actions required for the ListChallengeMetadata API call. */
	static readonly ListChallengeMetadata: string[] = [
		"pca-connector-scep:ListChallengeMetadata",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly ListConnectors: string[] = [
		"pca-connector-scep:ListConnectors",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"pca-connector-scep:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["pca-connector-scep:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"pca-connector-scep:UntagResource",
	];
}

/**
 * Condition key constants and builders for pca-connector-scep.
 */
export class PcaConnectorScepConditions {
	/** Condition keys applicable to the CreateChallenge action. */
	static readonly CreateChallengeConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CreateConnectorConditionKeys: string[] = [
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
