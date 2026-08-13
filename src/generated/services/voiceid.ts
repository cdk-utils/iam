// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/voiceid.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the voiceid service.
 */
export class VoiceidActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "voiceid";

	/** [Write] voiceid:AssociateFraudster */
	static readonly ASSOCIATE_FRAUDSTER = "voiceid:AssociateFraudster";
	/** [Write] voiceid:CreateDomain */
	static readonly CREATE_DOMAIN = "voiceid:CreateDomain";
	/** [Write] voiceid:CreateWatchlist */
	static readonly CREATE_WATCHLIST = "voiceid:CreateWatchlist";
	/** [Write] voiceid:DeleteDomain */
	static readonly DELETE_DOMAIN = "voiceid:DeleteDomain";
	/** [Write] voiceid:DeleteFraudster */
	static readonly DELETE_FRAUDSTER = "voiceid:DeleteFraudster";
	/** [Write] voiceid:DeleteSpeaker */
	static readonly DELETE_SPEAKER = "voiceid:DeleteSpeaker";
	/** [Write] voiceid:DeleteWatchlist */
	static readonly DELETE_WATCHLIST = "voiceid:DeleteWatchlist";
	/** [Read] voiceid:DescribeComplianceConsent */
	static readonly DESCRIBE_COMPLIANCE_CONSENT =
		"voiceid:DescribeComplianceConsent";
	/** [Read] voiceid:DescribeDomain */
	static readonly DESCRIBE_DOMAIN = "voiceid:DescribeDomain";
	/** [Read] voiceid:DescribeFraudster */
	static readonly DESCRIBE_FRAUDSTER = "voiceid:DescribeFraudster";
	/** [Read] voiceid:DescribeFraudsterRegistrationJob */
	static readonly DESCRIBE_FRAUDSTER_REGISTRATION_JOB =
		"voiceid:DescribeFraudsterRegistrationJob";
	/** [Read] voiceid:DescribeSpeaker */
	static readonly DESCRIBE_SPEAKER = "voiceid:DescribeSpeaker";
	/** [Read] voiceid:DescribeSpeakerEnrollmentJob */
	static readonly DESCRIBE_SPEAKER_ENROLLMENT_JOB =
		"voiceid:DescribeSpeakerEnrollmentJob";
	/** [Read] voiceid:DescribeWatchlist */
	static readonly DESCRIBE_WATCHLIST = "voiceid:DescribeWatchlist";
	/** [Write] voiceid:DisassociateFraudster */
	static readonly DISASSOCIATE_FRAUDSTER = "voiceid:DisassociateFraudster";
	/** [Write] voiceid:EvaluateSession */
	static readonly EVALUATE_SESSION = "voiceid:EvaluateSession";
	/** [List] voiceid:ListDomains */
	static readonly LIST_DOMAINS = "voiceid:ListDomains";
	/** [List] voiceid:ListFraudsterRegistrationJobs */
	static readonly LIST_FRAUDSTER_REGISTRATION_JOBS =
		"voiceid:ListFraudsterRegistrationJobs";
	/** [List] voiceid:ListFraudsters */
	static readonly LIST_FRAUDSTERS = "voiceid:ListFraudsters";
	/** [List] voiceid:ListSpeakerEnrollmentJobs */
	static readonly LIST_SPEAKER_ENROLLMENT_JOBS =
		"voiceid:ListSpeakerEnrollmentJobs";
	/** [List] voiceid:ListSpeakers */
	static readonly LIST_SPEAKERS = "voiceid:ListSpeakers";
	/** [Read] voiceid:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "voiceid:ListTagsForResource";
	/** [List] voiceid:ListWatchlists */
	static readonly LIST_WATCHLISTS = "voiceid:ListWatchlists";
	/** [Write] voiceid:OptOutSpeaker */
	static readonly OPT_OUT_SPEAKER = "voiceid:OptOutSpeaker";
	/** [Write] voiceid:RegisterComplianceConsent */
	static readonly REGISTER_COMPLIANCE_CONSENT =
		"voiceid:RegisterComplianceConsent";
	/** [Write] voiceid:StartFraudsterRegistrationJob */
	static readonly START_FRAUDSTER_REGISTRATION_JOB =
		"voiceid:StartFraudsterRegistrationJob";
	/** [Write] voiceid:StartSpeakerEnrollmentJob */
	static readonly START_SPEAKER_ENROLLMENT_JOB =
		"voiceid:StartSpeakerEnrollmentJob";
	/** [Tagging] voiceid:TagResource */
	static readonly TAG_RESOURCE = "voiceid:TagResource";
	/** [Tagging] voiceid:UntagResource */
	static readonly UNTAG_RESOURCE = "voiceid:UntagResource";
	/** [Write] voiceid:UpdateDomain */
	static readonly UPDATE_DOMAIN = "voiceid:UpdateDomain";
	/** [Write] voiceid:UpdateWatchlist */
	static readonly UPDATE_WATCHLIST = "voiceid:UpdateWatchlist";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		VoiceidActions.DESCRIBE_COMPLIANCE_CONSENT,
		VoiceidActions.DESCRIBE_DOMAIN,
		VoiceidActions.DESCRIBE_FRAUDSTER,
		VoiceidActions.DESCRIBE_FRAUDSTER_REGISTRATION_JOB,
		VoiceidActions.DESCRIBE_SPEAKER,
		VoiceidActions.DESCRIBE_SPEAKER_ENROLLMENT_JOB,
		VoiceidActions.DESCRIBE_WATCHLIST,
		VoiceidActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		VoiceidActions.ASSOCIATE_FRAUDSTER,
		VoiceidActions.CREATE_DOMAIN,
		VoiceidActions.CREATE_WATCHLIST,
		VoiceidActions.DELETE_DOMAIN,
		VoiceidActions.DELETE_FRAUDSTER,
		VoiceidActions.DELETE_SPEAKER,
		VoiceidActions.DELETE_WATCHLIST,
		VoiceidActions.DISASSOCIATE_FRAUDSTER,
		VoiceidActions.EVALUATE_SESSION,
		VoiceidActions.OPT_OUT_SPEAKER,
		VoiceidActions.REGISTER_COMPLIANCE_CONSENT,
		VoiceidActions.START_FRAUDSTER_REGISTRATION_JOB,
		VoiceidActions.START_SPEAKER_ENROLLMENT_JOB,
		VoiceidActions.UPDATE_DOMAIN,
		VoiceidActions.UPDATE_WATCHLIST,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		VoiceidActions.LIST_DOMAINS,
		VoiceidActions.LIST_FRAUDSTER_REGISTRATION_JOBS,
		VoiceidActions.LIST_FRAUDSTERS,
		VoiceidActions.LIST_SPEAKER_ENROLLMENT_JOBS,
		VoiceidActions.LIST_SPEAKERS,
		VoiceidActions.LIST_WATCHLISTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		VoiceidActions.TAG_RESOURCE,
		VoiceidActions.UNTAG_RESOURCE,
	];
}

const DomainArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):voiceid:(?<region>[^:]*):(?<account>[^:]*):domain/(?<domainId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for voiceid resources.
 */
export class VoiceidResources {
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
		return `arn:${props.partition ?? "aws"}:voiceid:${props.region ?? "*"}:${props.account ?? "*"}:domain/${props.domainId}`;
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
}

/**
 * API operation to required IAM actions mapping for voiceid.
 */
export class VoiceidOperations {
	/** IAM actions required for the AssociateFraudster API call. */
	static readonly ASSOCIATE_FRAUDSTER: string[] = [
		"voiceid:AssociateFraudster",
	];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CREATE_DOMAIN: string[] = [
		"voiceid:CreateDomain",
		"voiceid:TagResource",
	];
	/** IAM actions required for the CreateWatchlist API call. */
	static readonly CREATE_WATCHLIST: string[] = ["voiceid:CreateWatchlist"];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DELETE_DOMAIN: string[] = ["voiceid:DeleteDomain"];
	/** IAM actions required for the DeleteFraudster API call. */
	static readonly DELETE_FRAUDSTER: string[] = ["voiceid:DeleteFraudster"];
	/** IAM actions required for the DeleteSpeaker API call. */
	static readonly DELETE_SPEAKER: string[] = ["voiceid:DeleteSpeaker"];
	/** IAM actions required for the DeleteWatchlist API call. */
	static readonly DELETE_WATCHLIST: string[] = ["voiceid:DeleteWatchlist"];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DESCRIBE_DOMAIN: string[] = ["voiceid:DescribeDomain"];
	/** IAM actions required for the DescribeFraudster API call. */
	static readonly DESCRIBE_FRAUDSTER: string[] = ["voiceid:DescribeFraudster"];
	/** IAM actions required for the DescribeFraudsterRegistrationJob API call. */
	static readonly DESCRIBE_FRAUDSTER_REGISTRATION_JOB: string[] = [
		"voiceid:DescribeFraudsterRegistrationJob",
	];
	/** IAM actions required for the DescribeSpeaker API call. */
	static readonly DESCRIBE_SPEAKER: string[] = ["voiceid:DescribeSpeaker"];
	/** IAM actions required for the DescribeSpeakerEnrollmentJob API call. */
	static readonly DESCRIBE_SPEAKER_ENROLLMENT_JOB: string[] = [
		"voiceid:DescribeSpeakerEnrollmentJob",
	];
	/** IAM actions required for the DescribeWatchlist API call. */
	static readonly DESCRIBE_WATCHLIST: string[] = ["voiceid:DescribeWatchlist"];
	/** IAM actions required for the DisassociateFraudster API call. */
	static readonly DISASSOCIATE_FRAUDSTER: string[] = [
		"voiceid:DisassociateFraudster",
	];
	/** IAM actions required for the EvaluateSession API call. */
	static readonly EVALUATE_SESSION: string[] = ["voiceid:EvaluateSession"];
	/** IAM actions required for the ListDomains API call. */
	static readonly LIST_DOMAINS: string[] = ["voiceid:ListDomains"];
	/** IAM actions required for the ListFraudsterRegistrationJobs API call. */
	static readonly LIST_FRAUDSTER_REGISTRATION_JOBS: string[] = [
		"voiceid:ListFraudsterRegistrationJobs",
	];
	/** IAM actions required for the ListFraudsters API call. */
	static readonly LIST_FRAUDSTERS: string[] = ["voiceid:ListFraudsters"];
	/** IAM actions required for the ListSpeakerEnrollmentJobs API call. */
	static readonly LIST_SPEAKER_ENROLLMENT_JOBS: string[] = [
		"voiceid:ListSpeakerEnrollmentJobs",
	];
	/** IAM actions required for the ListSpeakers API call. */
	static readonly LIST_SPEAKERS: string[] = ["voiceid:ListSpeakers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"voiceid:ListTagsForResource",
	];
	/** IAM actions required for the ListWatchlists API call. */
	static readonly LIST_WATCHLISTS: string[] = ["voiceid:ListWatchlists"];
	/** IAM actions required for the OptOutSpeaker API call. */
	static readonly OPT_OUT_SPEAKER: string[] = ["voiceid:OptOutSpeaker"];
	/** IAM actions required for the StartFraudsterRegistrationJob API call. */
	static readonly START_FRAUDSTER_REGISTRATION_JOB: string[] = [
		"iam:PassRole",
		"voiceid:StartFraudsterRegistrationJob",
	];
	/** IAM actions required for the StartSpeakerEnrollmentJob API call. */
	static readonly START_SPEAKER_ENROLLMENT_JOB: string[] = [
		"iam:PassRole",
		"voiceid:StartSpeakerEnrollmentJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["voiceid:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["voiceid:UntagResource"];
	/** IAM actions required for the UpdateDomain API call. */
	static readonly UPDATE_DOMAIN: string[] = ["voiceid:UpdateDomain"];
	/** IAM actions required for the UpdateWatchlist API call. */
	static readonly UPDATE_WATCHLIST: string[] = ["voiceid:UpdateWatchlist"];
}

/**
 * Condition key constants and builders for voiceid.
 */
export class VoiceidConditions {
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CREATE_DOMAIN_CONDITION_KEYS: string[] = [
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
