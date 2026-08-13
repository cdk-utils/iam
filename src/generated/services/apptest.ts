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
	static readonly CreateTestCase = "apptest:CreateTestCase";
	/** [Write] apptest:CreateTestConfiguration */
	static readonly CreateTestConfiguration = "apptest:CreateTestConfiguration";
	/** [Write] apptest:CreateTestSuite */
	static readonly CreateTestSuite = "apptest:CreateTestSuite";
	/** [Write] apptest:DeleteTestCase */
	static readonly DeleteTestCase = "apptest:DeleteTestCase";
	/** [Write] apptest:DeleteTestConfiguration */
	static readonly DeleteTestConfiguration = "apptest:DeleteTestConfiguration";
	/** [Write] apptest:DeleteTestRun */
	static readonly DeleteTestRun = "apptest:DeleteTestRun";
	/** [Write] apptest:DeleteTestSuite */
	static readonly DeleteTestSuite = "apptest:DeleteTestSuite";
	/** [Read] apptest:GetTestCase */
	static readonly actionGetTestCase = "apptest:GetTestCase";
	/** [Read] apptest:GetTestConfiguration */
	static readonly actionGetTestConfiguration = "apptest:GetTestConfiguration";
	/** [Read] apptest:GetTestRunStep */
	static readonly actionGetTestRunStep = "apptest:GetTestRunStep";
	/** [Read] apptest:GetTestSuite */
	static readonly actionGetTestSuite = "apptest:GetTestSuite";
	/** [Read] apptest:ListTagsForResource */
	static readonly ListTagsForResource = "apptest:ListTagsForResource";
	/** [List] apptest:ListTestCases */
	static readonly ListTestCases = "apptest:ListTestCases";
	/** [List] apptest:ListTestConfigurations */
	static readonly ListTestConfigurations = "apptest:ListTestConfigurations";
	/** [Read] apptest:ListTestRunSteps */
	static readonly ListTestRunSteps = "apptest:ListTestRunSteps";
	/** [Read] apptest:ListTestRunTestCases */
	static readonly ListTestRunTestCases = "apptest:ListTestRunTestCases";
	/** [List] apptest:ListTestRuns */
	static readonly ListTestRuns = "apptest:ListTestRuns";
	/** [List] apptest:ListTestSuites */
	static readonly ListTestSuites = "apptest:ListTestSuites";
	/** [Write] apptest:StartTestRun */
	static readonly StartTestRun = "apptest:StartTestRun";
	/** [Tagging] apptest:TagResource */
	static readonly TagResource = "apptest:TagResource";
	/** [Tagging] apptest:UntagResource */
	static readonly UntagResource = "apptest:UntagResource";
	/** [Write] apptest:UpdateTestCase */
	static readonly UpdateTestCase = "apptest:UpdateTestCase";
	/** [Write] apptest:UpdateTestConfiguration */
	static readonly UpdateTestConfiguration = "apptest:UpdateTestConfiguration";
	/** [Write] apptest:UpdateTestSuite */
	static readonly UpdateTestSuite = "apptest:UpdateTestSuite";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ApptestActions.actionGetTestCase,
		ApptestActions.actionGetTestConfiguration,
		ApptestActions.actionGetTestRunStep,
		ApptestActions.actionGetTestSuite,
		ApptestActions.ListTagsForResource,
		ApptestActions.ListTestRunSteps,
		ApptestActions.ListTestRunTestCases,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ApptestActions.CreateTestCase,
		ApptestActions.CreateTestConfiguration,
		ApptestActions.CreateTestSuite,
		ApptestActions.DeleteTestCase,
		ApptestActions.DeleteTestConfiguration,
		ApptestActions.DeleteTestRun,
		ApptestActions.DeleteTestSuite,
		ApptestActions.StartTestRun,
		ApptestActions.UpdateTestCase,
		ApptestActions.UpdateTestConfiguration,
		ApptestActions.UpdateTestSuite,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ApptestActions.ListTestCases,
		ApptestActions.ListTestConfigurations,
		ApptestActions.ListTestRuns,
		ApptestActions.ListTestSuites,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ApptestActions.TagResource,
		ApptestActions.UntagResource,
	];
}

/**
 * Properties for building a TestCase ARN.
 */
export interface ApptestTestCaseArnProps {
	/** The TestCaseId component of the ARN. */
	readonly testCaseId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TestCase ARN.
 */
export interface ApptestTestCaseArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TestCaseId component. */
	readonly testCaseId: string;
}

/**
 * Properties for building a TestConfiguration ARN.
 */
export interface ApptestTestConfigurationArnProps {
	/** The TestConfigurationId component of the ARN. */
	readonly testConfigurationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TestConfiguration ARN.
 */
export interface ApptestTestConfigurationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TestConfigurationId component. */
	readonly testConfigurationId: string;
}

/**
 * Properties for building a TestRun ARN.
 */
export interface ApptestTestRunArnProps {
	/** The TestRunId component of the ARN. */
	readonly testRunId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TestRun ARN.
 */
export interface ApptestTestRunArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TestRunId component. */
	readonly testRunId: string;
}

/**
 * Properties for building a TestSuite ARN.
 */
export interface ApptestTestSuiteArnProps {
	/** The TestSuiteId component of the ARN. */
	readonly testSuiteId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a TestSuite ARN.
 */
export interface ApptestTestSuiteArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The TestSuiteId component. */
	readonly testSuiteId: string;
}

const TestCaseArnRegex =
	/^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testcase\/(?<testCaseId>[^:/?]+)$/;
const TestConfigurationArnRegex =
	/^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testconfiguration\/(?<testConfigurationId>[^:/?]+)$/;
const TestRunArnRegex =
	/^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testrun\/(?<testRunId>[^:/?]+)$/;
const TestSuiteArnRegex =
	/^arn:(?<partition>[^:]+):apptest:(?<region>[^:]*):(?<account>[^:]*):testsuite\/(?<testSuiteId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for apptest resources.
 */
export class ApptestResources {
	/**
	 * Builds an ARN for the TestCase resource.
	 */
	static testCase(props: ApptestTestCaseArnProps): string {
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
	static parseTestCaseArn(arn: string): ApptestTestCaseArnComponents {
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
	static testConfiguration(props: ApptestTestConfigurationArnProps): string {
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
	static parseTestConfigurationArn(
		arn: string,
	): ApptestTestConfigurationArnComponents {
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
	static testRun(props: ApptestTestRunArnProps): string {
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
	static parseTestRunArn(arn: string): ApptestTestRunArnComponents {
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
	static testSuite(props: ApptestTestSuiteArnProps): string {
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
	static parseTestSuiteArn(arn: string): ApptestTestSuiteArnComponents {
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
	static readonly CreateTestCaseConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTestConfiguration action. */
	static readonly CreateTestConfigurationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateTestSuite action. */
	static readonly CreateTestSuiteConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the StartTestRun action. */
	static readonly StartTestRunConditionKeys: string[] = [
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
