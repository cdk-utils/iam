// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/apptest.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the apptest service.
 */
export class ApptestActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "apptest";

	/** [Write] apptest:CreateTestCase */
	static readonly CREATE_TEST_CASE = "apptest:CreateTestCase";
	/** [Write] apptest:CreateTestConfiguration */
	static readonly CREATE_TEST_CONFIGURATION = "apptest:CreateTestConfiguration";
	/** [Write] apptest:CreateTestSuite */
	static readonly CREATE_TEST_SUITE = "apptest:CreateTestSuite";
	/** [Write] apptest:DeleteTestCase */
	static readonly DELETE_TEST_CASE = "apptest:DeleteTestCase";
	/** [Write] apptest:DeleteTestConfiguration */
	static readonly DELETE_TEST_CONFIGURATION = "apptest:DeleteTestConfiguration";
	/** [Write] apptest:DeleteTestRun */
	static readonly DELETE_TEST_RUN = "apptest:DeleteTestRun";
	/** [Write] apptest:DeleteTestSuite */
	static readonly DELETE_TEST_SUITE = "apptest:DeleteTestSuite";
	/** [Read] apptest:GetTestCase */
	static readonly GET_TEST_CASE = "apptest:GetTestCase";
	/** [Read] apptest:GetTestConfiguration */
	static readonly GET_TEST_CONFIGURATION = "apptest:GetTestConfiguration";
	/** [Read] apptest:GetTestRunStep */
	static readonly GET_TEST_RUN_STEP = "apptest:GetTestRunStep";
	/** [Read] apptest:GetTestSuite */
	static readonly GET_TEST_SUITE = "apptest:GetTestSuite";
	/** [Read] apptest:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "apptest:ListTagsForResource";
	/** [List] apptest:ListTestCases */
	static readonly LIST_TEST_CASES = "apptest:ListTestCases";
	/** [List] apptest:ListTestConfigurations */
	static readonly LIST_TEST_CONFIGURATIONS = "apptest:ListTestConfigurations";
	/** [Read] apptest:ListTestRunSteps */
	static readonly LIST_TEST_RUN_STEPS = "apptest:ListTestRunSteps";
	/** [Read] apptest:ListTestRunTestCases */
	static readonly LIST_TEST_RUN_TEST_CASES = "apptest:ListTestRunTestCases";
	/** [List] apptest:ListTestRuns */
	static readonly LIST_TEST_RUNS = "apptest:ListTestRuns";
	/** [List] apptest:ListTestSuites */
	static readonly LIST_TEST_SUITES = "apptest:ListTestSuites";
	/** [Write] apptest:StartTestRun */
	static readonly START_TEST_RUN = "apptest:StartTestRun";
	/** [Tagging] apptest:TagResource */
	static readonly TAG_RESOURCE = "apptest:TagResource";
	/** [Tagging] apptest:UntagResource */
	static readonly UNTAG_RESOURCE = "apptest:UntagResource";
	/** [Write] apptest:UpdateTestCase */
	static readonly UPDATE_TEST_CASE = "apptest:UpdateTestCase";
	/** [Write] apptest:UpdateTestConfiguration */
	static readonly UPDATE_TEST_CONFIGURATION = "apptest:UpdateTestConfiguration";
	/** [Write] apptest:UpdateTestSuite */
	static readonly UPDATE_TEST_SUITE = "apptest:UpdateTestSuite";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ApptestActions.GET_TEST_CASE,
		ApptestActions.GET_TEST_CONFIGURATION,
		ApptestActions.GET_TEST_RUN_STEP,
		ApptestActions.GET_TEST_SUITE,
		ApptestActions.LIST_TAGS_FOR_RESOURCE,
		ApptestActions.LIST_TEST_RUN_STEPS,
		ApptestActions.LIST_TEST_RUN_TEST_CASES,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ApptestActions.CREATE_TEST_CASE,
		ApptestActions.CREATE_TEST_CONFIGURATION,
		ApptestActions.CREATE_TEST_SUITE,
		ApptestActions.DELETE_TEST_CASE,
		ApptestActions.DELETE_TEST_CONFIGURATION,
		ApptestActions.DELETE_TEST_RUN,
		ApptestActions.DELETE_TEST_SUITE,
		ApptestActions.START_TEST_RUN,
		ApptestActions.UPDATE_TEST_CASE,
		ApptestActions.UPDATE_TEST_CONFIGURATION,
		ApptestActions.UPDATE_TEST_SUITE,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ApptestActions.LIST_TEST_CASES,
		ApptestActions.LIST_TEST_CONFIGURATIONS,
		ApptestActions.LIST_TEST_RUNS,
		ApptestActions.LIST_TEST_SUITES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ApptestActions.TAG_RESOURCE,
		ApptestActions.UNTAG_RESOURCE,
	];
}

const TestCaseArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testcase/(?<testCaseId>[^:/?]+)$",
);
const TestConfigurationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testconfiguration/(?<testConfigurationId>[^:/?]+)$",
);
const TestRunArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testrun/(?<testRunId>[^:/?]+)$",
);
const TestSuiteArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testsuite/(?<testSuiteId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for apptest resources.
 */
export class ApptestResources {
	/**
	 * Builds an ARN for the TestCase resource.
	 */
	static testCase(props: {
		/** The TestCaseId component of the ARN. */
		readonly testCaseId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apptest:${props.region ?? "*"}:${props.account ?? "*"}:testcase/${props.testCaseId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TestCase resource.
	 */
	static isValidTestCaseArn(arn: string): boolean {
		return TestCaseArnRegex.test(arn);
	}

	/**
	 * Parses a TestCase ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestCaseArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		testCaseId: string;
	} {
		const match = TestCaseArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TestCase ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			testCaseId: match.groups!.testCaseId,
		};
	}

	/**
	 * Builds an ARN for the TestConfiguration resource.
	 */
	static testConfiguration(props: {
		/** The TestConfigurationId component of the ARN. */
		readonly testConfigurationId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apptest:${props.region ?? "*"}:${props.account ?? "*"}:testconfiguration/${props.testConfigurationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TestConfiguration resource.
	 */
	static isValidTestConfigurationArn(arn: string): boolean {
		return TestConfigurationArnRegex.test(arn);
	}

	/**
	 * Parses a TestConfiguration ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestConfigurationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		testConfigurationId: string;
	} {
		const match = TestConfigurationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TestConfiguration ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			testConfigurationId: match.groups!.testConfigurationId,
		};
	}

	/**
	 * Builds an ARN for the TestRun resource.
	 */
	static testRun(props: {
		/** The TestRunId component of the ARN. */
		readonly testRunId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apptest:${props.region ?? "*"}:${props.account ?? "*"}:testrun/${props.testRunId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TestRun resource.
	 */
	static isValidTestRunArn(arn: string): boolean {
		return TestRunArnRegex.test(arn);
	}

	/**
	 * Parses a TestRun ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestRunArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		testRunId: string;
	} {
		const match = TestRunArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TestRun ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			testRunId: match.groups!.testRunId,
		};
	}

	/**
	 * Builds an ARN for the TestSuite resource.
	 */
	static testSuite(props: {
		/** The TestSuiteId component of the ARN. */
		readonly testSuiteId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:apptest:${props.region ?? "*"}:${props.account ?? "*"}:testsuite/${props.testSuiteId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the TestSuite resource.
	 */
	static isValidTestSuiteArn(arn: string): boolean {
		return TestSuiteArnRegex.test(arn);
	}

	/**
	 * Parses a TestSuite ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTestSuiteArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		testSuiteId: string;
	} {
		const match = TestSuiteArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid TestSuite ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			testSuiteId: match.groups!.testSuiteId,
		};
	}
}

/**
 * Condition key constants and builders for apptest.
 */
export class ApptestConditions {
	/** Condition keys applicable to the CreateTestCase action. */
	static readonly CREATE_TEST_CASE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTestConfiguration action. */
	static readonly CREATE_TEST_CONFIGURATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTestSuite action. */
	static readonly CREATE_TEST_SUITE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartTestRun action. */
	static readonly START_TEST_RUN_CONDITION_KEYS: string[] = [
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
