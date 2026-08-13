// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/mapcredits.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the mapcredits service.
 */
export class MapcreditsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "mapcredits";

	/** [List] mapcredits:ListAssociatedPrograms */
	static readonly ListAssociatedPrograms = "mapcredits:ListAssociatedPrograms";
	/** [List] mapcredits:ListQuarterCredits */
	static readonly ListQuarterCredits = "mapcredits:ListQuarterCredits";
	/** [List] mapcredits:ListQuarterSpend */
	static readonly ListQuarterSpend = "mapcredits:ListQuarterSpend";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		MapcreditsActions.ListAssociatedPrograms,
		MapcreditsActions.ListQuarterCredits,
		MapcreditsActions.ListQuarterSpend,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a agreement ARN.
 */
export interface MapcreditsAgreementArnProps {
	/** The Agreement component of the ARN. */
	readonly agreement: string;
	/** The AgreementId component of the ARN. */
	readonly agreementId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a agreement ARN.
 */
export interface MapcreditsAgreementArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The Agreement component. */
	readonly agreement: string;
	/** The AgreementId component. */
	readonly agreementId: string;
}

const AgreementArnRegex =
	/^arn:(?<partition>[^:]+):mapcredits:::(?<agreement>[^:/?]+)\/(?<agreementId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for mapcredits resources.
 */
export class MapcreditsResources {
	/**
	 * Builds an ARN for the agreement resource.
	 */
	static agreement(props: MapcreditsAgreementArnProps): string {
		return `arn:${props.partition ?? "aws"}:mapcredits:::${props.agreement}/${props.agreementId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the agreement resource.
	 */
	static isValidAgreementArn(arn: string): boolean {
		return AgreementArnRegex.test(arn);
	}

	/**
	 * Parses a agreement ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAgreementArn(arn: string): MapcreditsAgreementArnComponents {
		const match = AgreementArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid agreement ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			agreement: match.groups!.agreement,
			agreementId: match.groups!.agreementId,
		};
	}
}
