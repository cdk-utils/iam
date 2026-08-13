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
	static readonly AssociateFraudster = "voiceid:AssociateFraudster";
	/** [Write] voiceid:CreateDomain */
	static readonly CreateDomain = "voiceid:CreateDomain";
	/** [Write] voiceid:CreateWatchlist */
	static readonly CreateWatchlist = "voiceid:CreateWatchlist";
	/** [Write] voiceid:DeleteDomain */
	static readonly DeleteDomain = "voiceid:DeleteDomain";
	/** [Write] voiceid:DeleteFraudster */
	static readonly DeleteFraudster = "voiceid:DeleteFraudster";
	/** [Write] voiceid:DeleteSpeaker */
	static readonly DeleteSpeaker = "voiceid:DeleteSpeaker";
	/** [Write] voiceid:DeleteWatchlist */
	static readonly DeleteWatchlist = "voiceid:DeleteWatchlist";
	/** [Read] voiceid:DescribeComplianceConsent */
	static readonly DescribeComplianceConsent =
		"voiceid:DescribeComplianceConsent";
	/** [Read] voiceid:DescribeDomain */
	static readonly DescribeDomain = "voiceid:DescribeDomain";
	/** [Read] voiceid:DescribeFraudster */
	static readonly DescribeFraudster = "voiceid:DescribeFraudster";
	/** [Read] voiceid:DescribeFraudsterRegistrationJob */
	static readonly DescribeFraudsterRegistrationJob =
		"voiceid:DescribeFraudsterRegistrationJob";
	/** [Read] voiceid:DescribeSpeaker */
	static readonly DescribeSpeaker = "voiceid:DescribeSpeaker";
	/** [Read] voiceid:DescribeSpeakerEnrollmentJob */
	static readonly DescribeSpeakerEnrollmentJob =
		"voiceid:DescribeSpeakerEnrollmentJob";
	/** [Read] voiceid:DescribeWatchlist */
	static readonly DescribeWatchlist = "voiceid:DescribeWatchlist";
	/** [Write] voiceid:DisassociateFraudster */
	static readonly DisassociateFraudster = "voiceid:DisassociateFraudster";
	/** [Write] voiceid:EvaluateSession */
	static readonly EvaluateSession = "voiceid:EvaluateSession";
	/** [List] voiceid:ListDomains */
	static readonly ListDomains = "voiceid:ListDomains";
	/** [List] voiceid:ListFraudsterRegistrationJobs */
	static readonly ListFraudsterRegistrationJobs =
		"voiceid:ListFraudsterRegistrationJobs";
	/** [List] voiceid:ListFraudsters */
	static readonly ListFraudsters = "voiceid:ListFraudsters";
	/** [List] voiceid:ListSpeakerEnrollmentJobs */
	static readonly ListSpeakerEnrollmentJobs =
		"voiceid:ListSpeakerEnrollmentJobs";
	/** [List] voiceid:ListSpeakers */
	static readonly ListSpeakers = "voiceid:ListSpeakers";
	/** [Read] voiceid:ListTagsForResource */
	static readonly ListTagsForResource = "voiceid:ListTagsForResource";
	/** [List] voiceid:ListWatchlists */
	static readonly ListWatchlists = "voiceid:ListWatchlists";
	/** [Write] voiceid:OptOutSpeaker */
	static readonly OptOutSpeaker = "voiceid:OptOutSpeaker";
	/** [Write] voiceid:RegisterComplianceConsent */
	static readonly RegisterComplianceConsent =
		"voiceid:RegisterComplianceConsent";
	/** [Write] voiceid:StartFraudsterRegistrationJob */
	static readonly StartFraudsterRegistrationJob =
		"voiceid:StartFraudsterRegistrationJob";
	/** [Write] voiceid:StartSpeakerEnrollmentJob */
	static readonly StartSpeakerEnrollmentJob =
		"voiceid:StartSpeakerEnrollmentJob";
	/** [Tagging] voiceid:TagResource */
	static readonly TagResource = "voiceid:TagResource";
	/** [Tagging] voiceid:UntagResource */
	static readonly UntagResource = "voiceid:UntagResource";
	/** [Write] voiceid:UpdateDomain */
	static readonly UpdateDomain = "voiceid:UpdateDomain";
	/** [Write] voiceid:UpdateWatchlist */
	static readonly UpdateWatchlist = "voiceid:UpdateWatchlist";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		VoiceidActions.DescribeComplianceConsent,
		VoiceidActions.DescribeDomain,
		VoiceidActions.DescribeFraudster,
		VoiceidActions.DescribeFraudsterRegistrationJob,
		VoiceidActions.DescribeSpeaker,
		VoiceidActions.DescribeSpeakerEnrollmentJob,
		VoiceidActions.DescribeWatchlist,
		VoiceidActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		VoiceidActions.AssociateFraudster,
		VoiceidActions.CreateDomain,
		VoiceidActions.CreateWatchlist,
		VoiceidActions.DeleteDomain,
		VoiceidActions.DeleteFraudster,
		VoiceidActions.DeleteSpeaker,
		VoiceidActions.DeleteWatchlist,
		VoiceidActions.DisassociateFraudster,
		VoiceidActions.EvaluateSession,
		VoiceidActions.OptOutSpeaker,
		VoiceidActions.RegisterComplianceConsent,
		VoiceidActions.StartFraudsterRegistrationJob,
		VoiceidActions.StartSpeakerEnrollmentJob,
		VoiceidActions.UpdateDomain,
		VoiceidActions.UpdateWatchlist,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		VoiceidActions.ListDomains,
		VoiceidActions.ListFraudsterRegistrationJobs,
		VoiceidActions.ListFraudsters,
		VoiceidActions.ListSpeakerEnrollmentJobs,
		VoiceidActions.ListSpeakers,
		VoiceidActions.ListWatchlists,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		VoiceidActions.TagResource,
		VoiceidActions.UntagResource,
	];
}

/**
 * Properties for building a domain ARN.
 */
export interface VoiceidDomainArnProps {
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
export interface VoiceidDomainArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DomainId component. */
	readonly domainId: string;
}

const DomainArnRegex =
	/^arn:(?<partition>[^:]+):voiceid:(?<region>[^:]*):(?<account>[^:]*):domain\/(?<domainId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for voiceid resources.
 */
export class VoiceidResources {
	/**
	 * Builds an ARN for the domain resource.
	 */
	static domain(props: VoiceidDomainArnProps): string {
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
	static parseDomainArn(arn: string): VoiceidDomainArnComponents {
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
	static readonly AssociateFraudster: string[] = ["voiceid:AssociateFraudster"];
	/** IAM actions required for the CreateDomain API call. */
	static readonly CreateDomain: string[] = [
		"voiceid:CreateDomain",
		"voiceid:TagResource",
	];
	/** IAM actions required for the CreateWatchlist API call. */
	static readonly CreateWatchlist: string[] = ["voiceid:CreateWatchlist"];
	/** IAM actions required for the DeleteDomain API call. */
	static readonly DeleteDomain: string[] = ["voiceid:DeleteDomain"];
	/** IAM actions required for the DeleteFraudster API call. */
	static readonly DeleteFraudster: string[] = ["voiceid:DeleteFraudster"];
	/** IAM actions required for the DeleteSpeaker API call. */
	static readonly DeleteSpeaker: string[] = ["voiceid:DeleteSpeaker"];
	/** IAM actions required for the DeleteWatchlist API call. */
	static readonly DeleteWatchlist: string[] = ["voiceid:DeleteWatchlist"];
	/** IAM actions required for the DescribeDomain API call. */
	static readonly DescribeDomain: string[] = ["voiceid:DescribeDomain"];
	/** IAM actions required for the DescribeFraudster API call. */
	static readonly DescribeFraudster: string[] = ["voiceid:DescribeFraudster"];
	/** IAM actions required for the DescribeFraudsterRegistrationJob API call. */
	static readonly DescribeFraudsterRegistrationJob: string[] = [
		"voiceid:DescribeFraudsterRegistrationJob",
	];
	/** IAM actions required for the DescribeSpeaker API call. */
	static readonly DescribeSpeaker: string[] = ["voiceid:DescribeSpeaker"];
	/** IAM actions required for the DescribeSpeakerEnrollmentJob API call. */
	static readonly DescribeSpeakerEnrollmentJob: string[] = [
		"voiceid:DescribeSpeakerEnrollmentJob",
	];
	/** IAM actions required for the DescribeWatchlist API call. */
	static readonly DescribeWatchlist: string[] = ["voiceid:DescribeWatchlist"];
	/** IAM actions required for the DisassociateFraudster API call. */
	static readonly DisassociateFraudster: string[] = [
		"voiceid:DisassociateFraudster",
	];
	/** IAM actions required for the EvaluateSession API call. */
	static readonly EvaluateSession: string[] = ["voiceid:EvaluateSession"];
	/** IAM actions required for the ListDomains API call. */
	static readonly ListDomains: string[] = ["voiceid:ListDomains"];
	/** IAM actions required for the ListFraudsterRegistrationJobs API call. */
	static readonly ListFraudsterRegistrationJobs: string[] = [
		"voiceid:ListFraudsterRegistrationJobs",
	];
	/** IAM actions required for the ListFraudsters API call. */
	static readonly ListFraudsters: string[] = ["voiceid:ListFraudsters"];
	/** IAM actions required for the ListSpeakerEnrollmentJobs API call. */
	static readonly ListSpeakerEnrollmentJobs: string[] = [
		"voiceid:ListSpeakerEnrollmentJobs",
	];
	/** IAM actions required for the ListSpeakers API call. */
	static readonly ListSpeakers: string[] = ["voiceid:ListSpeakers"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"voiceid:ListTagsForResource",
	];
	/** IAM actions required for the ListWatchlists API call. */
	static readonly ListWatchlists: string[] = ["voiceid:ListWatchlists"];
	/** IAM actions required for the OptOutSpeaker API call. */
	static readonly OptOutSpeaker: string[] = ["voiceid:OptOutSpeaker"];
	/** IAM actions required for the StartFraudsterRegistrationJob API call. */
	static readonly StartFraudsterRegistrationJob: string[] = [
		"iam:PassRole",
		"voiceid:StartFraudsterRegistrationJob",
	];
	/** IAM actions required for the StartSpeakerEnrollmentJob API call. */
	static readonly StartSpeakerEnrollmentJob: string[] = [
		"iam:PassRole",
		"voiceid:StartSpeakerEnrollmentJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["voiceid:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["voiceid:UntagResource"];
	/** IAM actions required for the UpdateDomain API call. */
	static readonly UpdateDomain: string[] = ["voiceid:UpdateDomain"];
	/** IAM actions required for the UpdateWatchlist API call. */
	static readonly UpdateWatchlist: string[] = ["voiceid:UpdateWatchlist"];
}

/**
 * Condition key constants and builders for voiceid.
 */
export class VoiceidConditions {
	/** Condition keys applicable to the CreateDomain action. */
	static readonly CreateDomainConditionKeys: string[] = [
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
