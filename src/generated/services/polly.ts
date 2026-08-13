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
	static readonly DELETE_LEXICON = "polly:DeleteLexicon";
	/** [List] polly:DescribeVoices */
	static readonly DESCRIBE_VOICES = "polly:DescribeVoices";
	/** [Read] polly:GetLexicon */
	static readonly GET_LEXICON = "polly:GetLexicon";
	/** [Read] polly:GetSpeechSynthesisTask */
	static readonly GET_SPEECH_SYNTHESIS_TASK = "polly:GetSpeechSynthesisTask";
	/** [List] polly:ListLexicons */
	static readonly LIST_LEXICONS = "polly:ListLexicons";
	/** [List] polly:ListSpeechSynthesisTasks */
	static readonly LIST_SPEECH_SYNTHESIS_TASKS =
		"polly:ListSpeechSynthesisTasks";
	/** [Write] polly:PutLexicon */
	static readonly PUT_LEXICON = "polly:PutLexicon";
	/** [Read] polly:StartSpeechSynthesisStream */
	static readonly START_SPEECH_SYNTHESIS_STREAM =
		"polly:StartSpeechSynthesisStream";
	/** [Write] polly:StartSpeechSynthesisTask */
	static readonly START_SPEECH_SYNTHESIS_TASK =
		"polly:StartSpeechSynthesisTask";
	/** [Read] polly:SynthesizeSpeech */
	static readonly SYNTHESIZE_SPEECH = "polly:SynthesizeSpeech";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PollyActions.GET_LEXICON,
		PollyActions.GET_SPEECH_SYNTHESIS_TASK,
		PollyActions.START_SPEECH_SYNTHESIS_STREAM,
		PollyActions.SYNTHESIZE_SPEECH,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PollyActions.DELETE_LEXICON,
		PollyActions.PUT_LEXICON,
		PollyActions.START_SPEECH_SYNTHESIS_TASK,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PollyActions.DESCRIBE_VOICES,
		PollyActions.LIST_LEXICONS,
		PollyActions.LIST_SPEECH_SYNTHESIS_TASKS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const LexiconArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):polly:(?<region>[^:]*):(?<account>[^:]*):lexicon/(?<lexiconName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for polly resources.
 */
export class PollyResources {
	/**
	 * Builds an ARN for the lexicon resource.
	 */
	static lexicon(props: {
		/** The LexiconName component of the ARN. */
		readonly lexiconName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseLexiconArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		lexiconName: string;
	} {
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
	static readonly DELETE_LEXICON: string[] = ["polly:DeleteLexicon"];
	/** IAM actions required for the DescribeVoices API call. */
	static readonly DESCRIBE_VOICES: string[] = ["polly:DescribeVoices"];
	/** IAM actions required for the GetLexicon API call. */
	static readonly GET_LEXICON: string[] = ["polly:GetLexicon"];
	/** IAM actions required for the GetSpeechSynthesisTask API call. */
	static readonly GET_SPEECH_SYNTHESIS_TASK: string[] = [
		"polly:GetSpeechSynthesisTask",
	];
	/** IAM actions required for the ListLexicons API call. */
	static readonly LIST_LEXICONS: string[] = ["polly:ListLexicons"];
	/** IAM actions required for the ListSpeechSynthesisTasks API call. */
	static readonly LIST_SPEECH_SYNTHESIS_TASKS: string[] = [
		"polly:ListSpeechSynthesisTasks",
	];
	/** IAM actions required for the PutLexicon API call. */
	static readonly PUT_LEXICON: string[] = ["polly:PutLexicon"];
	/** IAM actions required for the StartSpeechSynthesisStream API call. */
	static readonly START_SPEECH_SYNTHESIS_STREAM: string[] = [
		"polly:StartSpeechSynthesisStream",
	];
	/** IAM actions required for the StartSpeechSynthesisTask API call. */
	static readonly START_SPEECH_SYNTHESIS_TASK: string[] = [
		"polly:StartSpeechSynthesisTask",
	];
	/** IAM actions required for the SynthesizeSpeech API call. */
	static readonly SYNTHESIZE_SPEECH: string[] = ["polly:SynthesizeSpeech"];
}
