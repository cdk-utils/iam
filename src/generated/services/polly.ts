// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/polly.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the polly service.
 */
export class PollyActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "polly";

	/** [Write] polly:DeleteLexicon */
	static readonly DeleteLexicon = "polly:DeleteLexicon";
	/** [List] polly:DescribeVoices */
	static readonly DescribeVoices = "polly:DescribeVoices";
	/** [Read] polly:GetLexicon */
	static readonly actionGetLexicon = "polly:GetLexicon";
	/** [Read] polly:GetSpeechSynthesisTask */
	static readonly actionGetSpeechSynthesisTask = "polly:GetSpeechSynthesisTask";
	/** [List] polly:ListLexicons */
	static readonly ListLexicons = "polly:ListLexicons";
	/** [List] polly:ListSpeechSynthesisTasks */
	static readonly ListSpeechSynthesisTasks = "polly:ListSpeechSynthesisTasks";
	/** [Write] polly:PutLexicon */
	static readonly PutLexicon = "polly:PutLexicon";
	/** [Read] polly:StartSpeechSynthesisStream */
	static readonly StartSpeechSynthesisStream =
		"polly:StartSpeechSynthesisStream";
	/** [Write] polly:StartSpeechSynthesisTask */
	static readonly StartSpeechSynthesisTask = "polly:StartSpeechSynthesisTask";
	/** [Read] polly:SynthesizeSpeech */
	static readonly SynthesizeSpeech = "polly:SynthesizeSpeech";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		PollyActions.actionGetLexicon,
		PollyActions.actionGetSpeechSynthesisTask,
		PollyActions.StartSpeechSynthesisStream,
		PollyActions.SynthesizeSpeech,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		PollyActions.DeleteLexicon,
		PollyActions.PutLexicon,
		PollyActions.StartSpeechSynthesisTask,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		PollyActions.DescribeVoices,
		PollyActions.ListLexicons,
		PollyActions.ListSpeechSynthesisTasks,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a lexicon ARN.
 */
export interface PollyLexiconArnProps {
	/** The LexiconName component of the ARN. */
	readonly lexiconName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a lexicon ARN.
 */
export interface PollyLexiconArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The LexiconName component. */
	readonly lexiconName: string;
}

const LexiconArnRegex =
	/^arn:(?<partition>[^:]+):polly:(?<region>[^:]*):(?<account>[^:]*):lexicon\/(?<lexiconName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for polly resources.
 */
export class PollyResources {
	/**
	 * Builds an ARN for the lexicon resource.
	 */
	static lexicon(props: PollyLexiconArnProps): string {
		return `arn:${props.partition ?? "aws"}:polly:${props.region ?? "*"}:${props.account ?? "*"}:lexicon/${props.lexiconName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the lexicon resource.
	 */
	static isValidLexiconArn(arn: string): boolean {
		return LexiconArnRegex.test(arn);
	}

	/**
	 * Parses a lexicon ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseLexiconArn(arn: string): PollyLexiconArnComponents {
		const match = LexiconArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid lexicon ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			lexiconName: match.groups!.lexiconName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for polly.
 */
export class PollyOperations {
	/** IAM actions required for the DeleteLexicon API call. */
	static readonly DeleteLexicon: string[] = ["polly:DeleteLexicon"];
	/** IAM actions required for the DescribeVoices API call. */
	static readonly DescribeVoices: string[] = ["polly:DescribeVoices"];
	/** IAM actions required for the GetLexicon API call. */
	static readonly opGetLexicon: string[] = ["polly:GetLexicon"];
	/** IAM actions required for the GetSpeechSynthesisTask API call. */
	static readonly opGetSpeechSynthesisTask: string[] = [
		"polly:GetSpeechSynthesisTask",
	];
	/** IAM actions required for the ListLexicons API call. */
	static readonly ListLexicons: string[] = ["polly:ListLexicons"];
	/** IAM actions required for the ListSpeechSynthesisTasks API call. */
	static readonly ListSpeechSynthesisTasks: string[] = [
		"polly:ListSpeechSynthesisTasks",
	];
	/** IAM actions required for the PutLexicon API call. */
	static readonly PutLexicon: string[] = ["polly:PutLexicon"];
	/** IAM actions required for the StartSpeechSynthesisStream API call. */
	static readonly StartSpeechSynthesisStream: string[] = [
		"polly:StartSpeechSynthesisStream",
	];
	/** IAM actions required for the StartSpeechSynthesisTask API call. */
	static readonly StartSpeechSynthesisTask: string[] = [
		"polly:StartSpeechSynthesisTask",
	];
	/** IAM actions required for the SynthesizeSpeech API call. */
	static readonly SynthesizeSpeech: string[] = ["polly:SynthesizeSpeech"];
}
