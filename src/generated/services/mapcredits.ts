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
	static readonly LIST_ASSOCIATED_PROGRAMS =
		"mapcredits:ListAssociatedPrograms";
	/** [List] mapcredits:ListQuarterCredits */
	static readonly LIST_QUARTER_CREDITS = "mapcredits:ListQuarterCredits";
	/** [List] mapcredits:ListQuarterSpend */
	static readonly LIST_QUARTER_SPEND = "mapcredits:ListQuarterSpend";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		MapcreditsActions.LIST_ASSOCIATED_PROGRAMS,
		MapcreditsActions.LIST_QUARTER_CREDITS,
		MapcreditsActions.LIST_QUARTER_SPEND,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const AgreementArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):mapcredits:::(?<agreement>[^:/?]+)/(?<agreementId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for mapcredits resources.
 */
export class MapcreditsResources {
	/**
	 * Builds an ARN for the agreement resource.
	 */
	static agreement(props: {
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
	}): string {
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
	static parseAgreementArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		agreement: string;
		agreementId: string;
	} {
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
