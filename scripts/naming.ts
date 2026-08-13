/**
 * Naming utilities for code generation.
 * Handles conversion between AWS naming conventions and TypeScript conventions.
 */

/** Known acronyms that should stay uppercase in PascalCase. */
const ACRONYMS = new Set([
	"ACM",
	"API",
	"ARN",
	"AWS",
	"CDK",
	"CLI",
	"DB",
	"DNS",
	"DRS",
	"EBS",
	"EC2",
	"ECR",
	"ECS",
	"EFS",
	"EKS",
	"IAM",
	"IO",
	"IP",
	"KMS",
	"MFA",
	"NAT",
	"RDS",
	"S3",
	"SDK",
	"SMS",
	"SNS",
	"SQS",
	"SSH",
	"SSL",
	"SSM",
	"SSO",
	"STS",
	"TCP",
	"TLS",
	"UDP",
	"URI",
	"URL",
	"VPC",
	"VPN",
	"WAF",
]);

/**
 * Splits a string into words by common separators (hyphens, underscores, dots,
 * camelCase boundaries, PascalCase boundaries, and digit→uppercase boundaries).
 */
export function splitWords(input: string): string[] {
	return input
		.replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase boundary
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2") // ACRONYMWord boundary
		.replace(/(\d)([A-Z])/g, "$1 $2") // digit→Uppercase boundary (e.g., S3Bucket)
		.replace(/[-_.\/]+/g, " ") // separators
		.trim()
		.split(/\s+/)
		.filter((w) => w.length > 0);
}

/**
 * Converts a service name to PascalCase for use as a class prefix.
 * Handles acronyms (s3 → S3, iam → IAM, dynamodb → DynamoDB).
 *
 * @example
 * toPascalCase("dynamodb") → "DynamoDB"
 * toPascalCase("s3") → "S3"
 * toPascalCase("access-analyzer") → "AccessAnalyzer"
 * toPascalCase("ec2") → "EC2"
 * toPascalCase("cloudformation") → "CloudFormation"
 */
export function toPascalCase(input: string): string {
	const words = splitWords(input);
	return words
		.map((word) => {
			const upper = word.toUpperCase();
			if (ACRONYMS.has(upper)) {
				return upper;
			}
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join("");
}

/**
 * Converts a string to UPPER_SNAKE_CASE for constants.
 *
 * @example
 * toUpperSnakeCase("BatchGetItem") → "BATCH_GET_ITEM"
 * toUpperSnakeCase("CreateTable") → "CREATE_TABLE"
 * toUpperSnakeCase("global-table") → "GLOBAL_TABLE"
 */
export function toUpperSnakeCase(input: string): string {
	const words = splitWords(input);
	return words.map((w) => w.toUpperCase()).join("_");
}

/**
 * Converts a string to camelCase for method names.
 *
 * @example
 * toCamelCase("global-table") → "globalTable"
 * toCamelCase("BatchGetItem") → "batchGetItem"
 * toCamelCase("table") → "table"
 */
export function toCamelCase(input: string): string {
	const words = splitWords(input);
	return words
		.map((word, i) => {
			const upper = word.toUpperCase();
			if (i === 0) {
				// First word: always lowercase (even acronyms)
				return word.toLowerCase();
			}
			if (ACRONYMS.has(upper)) {
				return upper;
			}
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join("");
}

/**
 * Normalizes a service name for use as a file name.
 * Keeps hyphens, lowercases everything.
 *
 * @example
 * toFileName("dynamodb") → "dynamodb"
 * toFileName("access-analyzer") → "access-analyzer"
 */
export function toFileName(serviceName: string): string {
	return serviceName.toLowerCase();
}

/**
 * Converts a service name to the class prefix.
 * Special-cases known service names that don't follow simple PascalCase rules.
 *
 * @example
 * toServiceClassName("dynamodb") → "DynamoDB"
 * toServiceClassName("s3") → "S3"
 * toServiceClassName("ec2") → "EC2"
 * toServiceClassName("apigateway") → "ApiGateway"
 * toServiceClassName("cloudfront") → "CloudFront"
 */
export function toServiceClassName(serviceName: string): string {
	// Known compound names that splitWords can't infer from a single-word input
	const KNOWN_COMPOUNDS: Record<string, string> = {
		apigateway: "ApiGateway",
		cloudformation: "CloudFormation",
		cloudfront: "CloudFront",
		cloudhsm: "CloudHSM",
		cloudsearch: "CloudSearch",
		cloudshell: "CloudShell",
		cloudtrail: "CloudTrail",
		cloudwatch: "CloudWatch",
		codeartifact: "CodeArtifact",
		codebuild: "CodeBuild",
		codecatalyst: "CodeCatalyst",
		codecommit: "CodeCommit",
		codedeploy: "CodeDeploy",
		codepipeline: "CodePipeline",
		codestar: "CodeStar",
		directconnect: "DirectConnect",
		dynamodb: "DynamoDB",
		elasticache: "ElastiCache",
		elasticbeanstalk: "ElasticBeanstalk",
		eventbridge: "EventBridge",
		gamelift: "GameLift",
		globalaccelerator: "GlobalAccelerator",
		groundstation: "GroundStation",
		guardduty: "GuardDuty",
		healthlake: "HealthLake",
		imagebuilder: "ImageBuilder",
		lakeformation: "LakeFormation",
		lightsail: "LightSail",
		lookoutequipment: "LookoutEquipment",
		lookoutmetrics: "LookoutMetrics",
		lookoutvision: "LookoutVision",
		machinelearning: "MachineLearning",
		mediaconnect: "MediaConnect",
		mediaconvert: "MediaConvert",
		medialive: "MediaLive",
		mediapackage: "MediaPackage",
		mediastore: "MediaStore",
		mediatailor: "MediaTailor",
		memorydb: "MemoryDB",
		networkmanager: "NetworkManager",
		opensearch: "OpenSearch",
		quicksight: "QuickSight",
		robomaker: "RoboMaker",
		sagemaker: "SageMaker",
		secretsmanager: "SecretsManager",
		securityhub: "SecurityHub",
		securitylake: "SecurityLake",
		servicecatalog: "ServiceCatalog",
		servicediscovery: "ServiceDiscovery",
		snowball: "Snowball",
		storagegateway: "StorageGateway",
		textract: "Textract",
		timestream: "Timestream",
		transcribe: "Transcribe",
		translate: "Translate",
		wellarchitected: "WellArchitected",
		workdocs: "WorkDocs",
		workmail: "WorkMail",
		workspaces: "WorkSpaces",
	};

	if (KNOWN_COMPOUNDS[serviceName]) {
		return KNOWN_COMPOUNDS[serviceName];
	}

	return toPascalCase(serviceName);
}
