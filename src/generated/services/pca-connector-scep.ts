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
	static readonly CREATE_CHALLENGE = "pca-connector-scep:CreateChallenge";
	/** [Write] pca-connector-scep:CreateConnector */
	static readonly CREATE_CONNECTOR = "pca-connector-scep:CreateConnector";
	/** [Write] pca-connector-scep:DeleteChallenge */
	static readonly DELETE_CHALLENGE = "pca-connector-scep:DeleteChallenge";
	/** [Write] pca-connector-scep:DeleteConnector */
	static readonly DELETE_CONNECTOR = "pca-connector-scep:DeleteConnector";
	/** [Read] pca-connector-scep:GetChallengeMetadata */
	static readonly GET_CHALLENGE_METADATA =
		"pca-connector-scep:GetChallengeMetadata";
	/** [Read] pca-connector-scep:GetChallengePassword */
	static readonly GET_CHALLENGE_PASSWORD =
		"pca-connector-scep:GetChallengePassword";
	/** [Read] pca-connector-scep:GetConnector */
	static readonly GET_CONNECTOR = "pca-connector-scep:GetConnector";
	/** [List] pca-connector-scep:ListChallengeMetadata */
	static readonly LIST_CHALLENGE_METADATA =
		"pca-connector-scep:ListChallengeMetadata";
	/** [List] pca-connector-scep:ListConnectors */
	static readonly LIST_CONNECTORS = "pca-connector-scep:ListConnectors";
	/** [Read] pca-connector-scep:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"pca-connector-scep:ListTagsForResource";
	/** [Tagging] pca-connector-scep:TagResource */
	static readonly TAG_RESOURCE = "pca-connector-scep:TagResource";
	/** [Tagging] pca-connector-scep:UntagResource */
	static readonly UNTAG_RESOURCE = "pca-connector-scep:UntagResource";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PcaConnectorScepActions.GET_CHALLENGE_METADATA,
		PcaConnectorScepActions.GET_CHALLENGE_PASSWORD,
		PcaConnectorScepActions.GET_CONNECTOR,
		PcaConnectorScepActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PcaConnectorScepActions.CREATE_CHALLENGE,
		PcaConnectorScepActions.CREATE_CONNECTOR,
		PcaConnectorScepActions.DELETE_CHALLENGE,
		PcaConnectorScepActions.DELETE_CONNECTOR,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PcaConnectorScepActions.LIST_CHALLENGE_METADATA,
		PcaConnectorScepActions.LIST_CONNECTORS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PcaConnectorScepActions.TAG_RESOURCE,
		PcaConnectorScepActions.UNTAG_RESOURCE,
	];
}

const ChallengeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pca-connector-scep:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)/challenge/(?<challengeId>[^:/?]+)$",
);
const ConnectorArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):pca-connector-scep:(?<region>[^:]*):(?<account>[^:]*):connector/(?<connectorId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for pca-connector-scep resources.
 */
export class PcaConnectorScepResources {
	/**
	 * Builds an ARN for the Challenge resource.
	 */
	static challenge(props: {
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
	}): string {
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
	static parseChallengeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
		challengeId: string;
	} {
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
	static connector(props: {
		/** The ConnectorId component of the ARN. */
		readonly connectorId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseConnectorArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		connectorId: string;
	} {
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
	static readonly CREATE_CHALLENGE: string[] = [
		"pca-connector-scep:CreateChallenge",
		"pca-connector-scep:TagResource",
	];
	/** IAM actions required for the CreateConnector API call. */
	static readonly CREATE_CONNECTOR: string[] = [
		"pca-connector-scep:CreateConnector",
		"pca-connector-scep:TagResource",
	];
	/** IAM actions required for the DeleteChallenge API call. */
	static readonly DELETE_CHALLENGE: string[] = [
		"pca-connector-scep:DeleteChallenge",
	];
	/** IAM actions required for the DeleteConnector API call. */
	static readonly DELETE_CONNECTOR: string[] = [
		"pca-connector-scep:DeleteConnector",
	];
	/** IAM actions required for the GetChallengeMetadata API call. */
	static readonly GET_CHALLENGE_METADATA: string[] = [
		"pca-connector-scep:GetChallengeMetadata",
	];
	/** IAM actions required for the GetChallengePassword API call. */
	static readonly GET_CHALLENGE_PASSWORD: string[] = [
		"pca-connector-scep:GetChallengePassword",
	];
	/** IAM actions required for the GetConnector API call. */
	static readonly GET_CONNECTOR: string[] = ["pca-connector-scep:GetConnector"];
	/** IAM actions required for the ListChallengeMetadata API call. */
	static readonly LIST_CHALLENGE_METADATA: string[] = [
		"pca-connector-scep:ListChallengeMetadata",
	];
	/** IAM actions required for the ListConnectors API call. */
	static readonly LIST_CONNECTORS: string[] = [
		"pca-connector-scep:ListConnectors",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"pca-connector-scep:ListTagsForResource",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["pca-connector-scep:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = [
		"pca-connector-scep:UntagResource",
	];
}

/**
 * Condition key constants and builders for pca-connector-scep.
 */
export class PcaConnectorScepConditions {
	/** Condition keys applicable to the CreateChallenge action. */
	static readonly CREATE_CHALLENGE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateConnector action. */
	static readonly CREATE_CONNECTOR_CONDITION_KEYS: string[] = [
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
