// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/entityresolution.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the entityresolution service.
 */
export class EntityresolutionActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "entityresolution";

	/** [PermissionManagement] entityresolution:AddPolicyStatement */
	static readonly ADD_POLICY_STATEMENT = "entityresolution:AddPolicyStatement";
	/** [Write] entityresolution:BatchDeleteUniqueId */
	static readonly BATCH_DELETE_UNIQUE_ID =
		"entityresolution:BatchDeleteUniqueId";
	/** [Write] entityresolution:CreateIdMappingWorkflow */
	static readonly CREATE_ID_MAPPING_WORKFLOW =
		"entityresolution:CreateIdMappingWorkflow";
	/** [Write] entityresolution:CreateIdNamespace */
	static readonly CREATE_ID_NAMESPACE = "entityresolution:CreateIdNamespace";
	/** [Write] entityresolution:CreateMatchingWorkflow */
	static readonly CREATE_MATCHING_WORKFLOW =
		"entityresolution:CreateMatchingWorkflow";
	/** [Write] entityresolution:CreateSchemaMapping */
	static readonly CREATE_SCHEMA_MAPPING =
		"entityresolution:CreateSchemaMapping";
	/** [Write] entityresolution:DeleteIdMappingWorkflow */
	static readonly DELETE_ID_MAPPING_WORKFLOW =
		"entityresolution:DeleteIdMappingWorkflow";
	/** [Write] entityresolution:DeleteIdNamespace */
	static readonly DELETE_ID_NAMESPACE = "entityresolution:DeleteIdNamespace";
	/** [Write] entityresolution:DeleteMatchingWorkflow */
	static readonly DELETE_MATCHING_WORKFLOW =
		"entityresolution:DeleteMatchingWorkflow";
	/** [PermissionManagement] entityresolution:DeletePolicyStatement */
	static readonly DELETE_POLICY_STATEMENT =
		"entityresolution:DeletePolicyStatement";
	/** [Write] entityresolution:DeleteSchemaMapping */
	static readonly DELETE_SCHEMA_MAPPING =
		"entityresolution:DeleteSchemaMapping";
	/** [Write] entityresolution:GenerateMatchId */
	static readonly GENERATE_MATCH_ID = "entityresolution:GenerateMatchId";
	/** [Read] entityresolution:GetIdMappingJob */
	static readonly GET_ID_MAPPING_JOB = "entityresolution:GetIdMappingJob";
	/** [Read] entityresolution:GetIdMappingWorkflow */
	static readonly GET_ID_MAPPING_WORKFLOW =
		"entityresolution:GetIdMappingWorkflow";
	/** [Read] entityresolution:GetIdNamespace */
	static readonly GET_ID_NAMESPACE = "entityresolution:GetIdNamespace";
	/** [Read] entityresolution:GetMatchId */
	static readonly GET_MATCH_ID = "entityresolution:GetMatchId";
	/** [Read] entityresolution:GetMatchingJob */
	static readonly GET_MATCHING_JOB = "entityresolution:GetMatchingJob";
	/** [Read] entityresolution:GetMatchingWorkflow */
	static readonly GET_MATCHING_WORKFLOW =
		"entityresolution:GetMatchingWorkflow";
	/** [Read] entityresolution:GetPolicy */
	static readonly GET_POLICY = "entityresolution:GetPolicy";
	/** [Read] entityresolution:GetProviderService */
	static readonly GET_PROVIDER_SERVICE = "entityresolution:GetProviderService";
	/** [Read] entityresolution:GetSchemaMapping */
	static readonly GET_SCHEMA_MAPPING = "entityresolution:GetSchemaMapping";
	/** [List] entityresolution:ListIdMappingJobs */
	static readonly LIST_ID_MAPPING_JOBS = "entityresolution:ListIdMappingJobs";
	/** [List] entityresolution:ListIdMappingWorkflows */
	static readonly LIST_ID_MAPPING_WORKFLOWS =
		"entityresolution:ListIdMappingWorkflows";
	/** [List] entityresolution:ListIdNamespaces */
	static readonly LIST_ID_NAMESPACES = "entityresolution:ListIdNamespaces";
	/** [List] entityresolution:ListMatchingJobs */
	static readonly LIST_MATCHING_JOBS = "entityresolution:ListMatchingJobs";
	/** [List] entityresolution:ListMatchingWorkflows */
	static readonly LIST_MATCHING_WORKFLOWS =
		"entityresolution:ListMatchingWorkflows";
	/** [List] entityresolution:ListProviderServices */
	static readonly LIST_PROVIDER_SERVICES =
		"entityresolution:ListProviderServices";
	/** [List] entityresolution:ListSchemaMappings */
	static readonly LIST_SCHEMA_MAPPINGS = "entityresolution:ListSchemaMappings";
	/** [Read] entityresolution:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE =
		"entityresolution:ListTagsForResource";
	/** [PermissionManagement] entityresolution:PutPolicy */
	static readonly PUT_POLICY = "entityresolution:PutPolicy";
	/** [Write] entityresolution:StartIdMappingJob */
	static readonly START_ID_MAPPING_JOB = "entityresolution:StartIdMappingJob";
	/** [Write] entityresolution:StartMatchingJob */
	static readonly START_MATCHING_JOB = "entityresolution:StartMatchingJob";
	/** [Tagging] entityresolution:TagResource */
	static readonly TAG_RESOURCE = "entityresolution:TagResource";
	/** [Tagging] entityresolution:UntagResource */
	static readonly UNTAG_RESOURCE = "entityresolution:UntagResource";
	/** [Write] entityresolution:UpdateIdMappingWorkflow */
	static readonly UPDATE_ID_MAPPING_WORKFLOW =
		"entityresolution:UpdateIdMappingWorkflow";
	/** [Write] entityresolution:UpdateIdNamespace */
	static readonly UPDATE_ID_NAMESPACE = "entityresolution:UpdateIdNamespace";
	/** [Write] entityresolution:UpdateMatchingWorkflow */
	static readonly UPDATE_MATCHING_WORKFLOW =
		"entityresolution:UpdateMatchingWorkflow";
	/** [Write] entityresolution:UpdateSchemaMapping */
	static readonly UPDATE_SCHEMA_MAPPING =
		"entityresolution:UpdateSchemaMapping";
	/** [PermissionManagement] entityresolution:UseIdNamespace */
	static readonly USE_ID_NAMESPACE = "entityresolution:UseIdNamespace";
	/** [PermissionManagement] entityresolution:UseWorkflow */
	static readonly USE_WORKFLOW = "entityresolution:UseWorkflow";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		EntityresolutionActions.GET_ID_MAPPING_JOB,
		EntityresolutionActions.GET_ID_MAPPING_WORKFLOW,
		EntityresolutionActions.GET_ID_NAMESPACE,
		EntityresolutionActions.GET_MATCH_ID,
		EntityresolutionActions.GET_MATCHING_JOB,
		EntityresolutionActions.GET_MATCHING_WORKFLOW,
		EntityresolutionActions.GET_POLICY,
		EntityresolutionActions.GET_PROVIDER_SERVICE,
		EntityresolutionActions.GET_SCHEMA_MAPPING,
		EntityresolutionActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		EntityresolutionActions.BATCH_DELETE_UNIQUE_ID,
		EntityresolutionActions.CREATE_ID_MAPPING_WORKFLOW,
		EntityresolutionActions.CREATE_ID_NAMESPACE,
		EntityresolutionActions.CREATE_MATCHING_WORKFLOW,
		EntityresolutionActions.CREATE_SCHEMA_MAPPING,
		EntityresolutionActions.DELETE_ID_MAPPING_WORKFLOW,
		EntityresolutionActions.DELETE_ID_NAMESPACE,
		EntityresolutionActions.DELETE_MATCHING_WORKFLOW,
		EntityresolutionActions.DELETE_SCHEMA_MAPPING,
		EntityresolutionActions.GENERATE_MATCH_ID,
		EntityresolutionActions.START_ID_MAPPING_JOB,
		EntityresolutionActions.START_MATCHING_JOB,
		EntityresolutionActions.UPDATE_ID_MAPPING_WORKFLOW,
		EntityresolutionActions.UPDATE_ID_NAMESPACE,
		EntityresolutionActions.UPDATE_MATCHING_WORKFLOW,
		EntityresolutionActions.UPDATE_SCHEMA_MAPPING,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		EntityresolutionActions.LIST_ID_MAPPING_JOBS,
		EntityresolutionActions.LIST_ID_MAPPING_WORKFLOWS,
		EntityresolutionActions.LIST_ID_NAMESPACES,
		EntityresolutionActions.LIST_MATCHING_JOBS,
		EntityresolutionActions.LIST_MATCHING_WORKFLOWS,
		EntityresolutionActions.LIST_PROVIDER_SERVICES,
		EntityresolutionActions.LIST_SCHEMA_MAPPINGS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [
		EntityresolutionActions.ADD_POLICY_STATEMENT,
		EntityresolutionActions.DELETE_POLICY_STATEMENT,
		EntityresolutionActions.PUT_POLICY,
		EntityresolutionActions.USE_ID_NAMESPACE,
		EntityresolutionActions.USE_WORKFLOW,
	];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		EntityresolutionActions.TAG_RESOURCE,
		EntityresolutionActions.UNTAG_RESOURCE,
	];
}

const IdMappingWorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):idmappingworkflow/(?<workflowName>[^:/?]+)$",
);
const IdNamespaceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):idnamespace/(?<idNamespaceName>[^:/?]+)$",
);
const MatchingWorkflowArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):matchingworkflow/(?<workflowName>[^:/?]+)$",
);
const ProviderServiceArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):providerservice/(?<providerName>[^:/?]+)/(?<providerServiceName>[^:/?]+)$",
);
const SchemaMappingArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):schemamapping/(?<schemaName>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for entityresolution resources.
 */
export class EntityresolutionResources {
	/**
	 * Builds an ARN for the IdMappingWorkflow resource.
	 */
	static idMappingWorkflow(props: {
		/** The WorkflowName component of the ARN. */
		readonly workflowName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:entityresolution:${props.region ?? "*"}:${props.account ?? "*"}:idmappingworkflow/${props.workflowName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the IdMappingWorkflow resource.
	 */
	static isValidIdMappingWorkflowArn(arn: string): boolean {
		return IdMappingWorkflowArnRegex.test(arn);
	}

	/**
	 * Parses a IdMappingWorkflow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdMappingWorkflowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowName: string;
	} {
		const match = IdMappingWorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid IdMappingWorkflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowName: match.groups!.workflowName,
		};
	}

	/**
	 * Builds an ARN for the IdNamespace resource.
	 */
	static idNamespace(props: {
		/** The IdNamespaceName component of the ARN. */
		readonly idNamespaceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:entityresolution:${props.region ?? "*"}:${props.account ?? "*"}:idnamespace/${props.idNamespaceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the IdNamespace resource.
	 */
	static isValidIdNamespaceArn(arn: string): boolean {
		return IdNamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a IdNamespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdNamespaceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		idNamespaceName: string;
	} {
		const match = IdNamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid IdNamespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			idNamespaceName: match.groups!.idNamespaceName,
		};
	}

	/**
	 * Builds an ARN for the MatchingWorkflow resource.
	 */
	static matchingWorkflow(props: {
		/** The WorkflowName component of the ARN. */
		readonly workflowName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:entityresolution:${props.region ?? "*"}:${props.account ?? "*"}:matchingworkflow/${props.workflowName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MatchingWorkflow resource.
	 */
	static isValidMatchingWorkflowArn(arn: string): boolean {
		return MatchingWorkflowArnRegex.test(arn);
	}

	/**
	 * Parses a MatchingWorkflow ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMatchingWorkflowArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workflowName: string;
	} {
		const match = MatchingWorkflowArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MatchingWorkflow ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workflowName: match.groups!.workflowName,
		};
	}

	/**
	 * Builds an ARN for the ProviderService resource.
	 */
	static providerService(props: {
		/** The ProviderName component of the ARN. */
		readonly providerName: string;
		/** The ProviderServiceName component of the ARN. */
		readonly providerServiceName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:entityresolution:${props.region ?? "*"}:${props.account ?? "*"}:providerservice/${props.providerName}/${props.providerServiceName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProviderService resource.
	 */
	static isValidProviderServiceArn(arn: string): boolean {
		return ProviderServiceArnRegex.test(arn);
	}

	/**
	 * Parses a ProviderService ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProviderServiceArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		providerName: string;
		providerServiceName: string;
	} {
		const match = ProviderServiceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProviderService ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			providerName: match.groups!.providerName,
			providerServiceName: match.groups!.providerServiceName,
		};
	}

	/**
	 * Builds an ARN for the SchemaMapping resource.
	 */
	static schemaMapping(props: {
		/** The SchemaName component of the ARN. */
		readonly schemaName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:entityresolution:${props.region ?? "*"}:${props.account ?? "*"}:schemamapping/${props.schemaName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the SchemaMapping resource.
	 */
	static isValidSchemaMappingArn(arn: string): boolean {
		return SchemaMappingArnRegex.test(arn);
	}

	/**
	 * Parses a SchemaMapping ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSchemaMappingArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		schemaName: string;
	} {
		const match = SchemaMappingArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid SchemaMapping ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			schemaName: match.groups!.schemaName,
		};
	}
}

/**
 * API operation to required IAM actions mapping for entityresolution.
 */
export class EntityresolutionOperations {
	/** IAM actions required for the AddPolicyStatement API call. */
	static readonly ADD_POLICY_STATEMENT: string[] = [
		"entityresolution:AddPolicyStatement",
	];
	/** IAM actions required for the BatchDeleteUniqueId API call. */
	static readonly BATCH_DELETE_UNIQUE_ID: string[] = [
		"entityresolution:BatchDeleteUniqueId",
	];
	/** IAM actions required for the CreateIdMappingWorkflow API call. */
	static readonly CREATE_ID_MAPPING_WORKFLOW: string[] = [
		"entityresolution:CreateIdMappingWorkflow",
		"iam:PassRole",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the CreateIdNamespace API call. */
	static readonly CREATE_ID_NAMESPACE: string[] = [
		"entityresolution:CreateIdNamespace",
		"iam:PassRole",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the CreateMatchingWorkflow API call. */
	static readonly CREATE_MATCHING_WORKFLOW: string[] = [
		"entityresolution:CreateMatchingWorkflow",
		"iam:PassRole",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the CreateSchemaMapping API call. */
	static readonly CREATE_SCHEMA_MAPPING: string[] = [
		"entityresolution:CreateSchemaMapping",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the DeleteIdMappingWorkflow API call. */
	static readonly DELETE_ID_MAPPING_WORKFLOW: string[] = [
		"entityresolution:DeleteIdMappingWorkflow",
	];
	/** IAM actions required for the DeleteIdNamespace API call. */
	static readonly DELETE_ID_NAMESPACE: string[] = [
		"entityresolution:DeleteIdNamespace",
	];
	/** IAM actions required for the DeleteMatchingWorkflow API call. */
	static readonly DELETE_MATCHING_WORKFLOW: string[] = [
		"entityresolution:DeleteMatchingWorkflow",
	];
	/** IAM actions required for the DeletePolicyStatement API call. */
	static readonly DELETE_POLICY_STATEMENT: string[] = [
		"entityresolution:DeletePolicyStatement",
	];
	/** IAM actions required for the DeleteSchemaMapping API call. */
	static readonly DELETE_SCHEMA_MAPPING: string[] = [
		"entityresolution:DeleteSchemaMapping",
	];
	/** IAM actions required for the GenerateMatchId API call. */
	static readonly GENERATE_MATCH_ID: string[] = [
		"entityresolution:GenerateMatchId",
	];
	/** IAM actions required for the GetIdMappingJob API call. */
	static readonly GET_ID_MAPPING_JOB: string[] = [
		"entityresolution:GetIdMappingJob",
	];
	/** IAM actions required for the GetIdMappingWorkflow API call. */
	static readonly GET_ID_MAPPING_WORKFLOW: string[] = [
		"entityresolution:GetIdMappingWorkflow",
	];
	/** IAM actions required for the GetIdNamespace API call. */
	static readonly GET_ID_NAMESPACE: string[] = [
		"entityresolution:GetIdNamespace",
	];
	/** IAM actions required for the GetMatchId API call. */
	static readonly GET_MATCH_ID: string[] = ["entityresolution:GetMatchId"];
	/** IAM actions required for the GetMatchingJob API call. */
	static readonly GET_MATCHING_JOB: string[] = [
		"entityresolution:GetMatchingJob",
	];
	/** IAM actions required for the GetMatchingWorkflow API call. */
	static readonly GET_MATCHING_WORKFLOW: string[] = [
		"entityresolution:GetMatchingWorkflow",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly GET_POLICY: string[] = ["entityresolution:GetPolicy"];
	/** IAM actions required for the GetProviderService API call. */
	static readonly GET_PROVIDER_SERVICE: string[] = [
		"entityresolution:GetProviderService",
	];
	/** IAM actions required for the GetSchemaMapping API call. */
	static readonly GET_SCHEMA_MAPPING: string[] = [
		"entityresolution:GetSchemaMapping",
	];
	/** IAM actions required for the ListIdMappingJobs API call. */
	static readonly LIST_ID_MAPPING_JOBS: string[] = [
		"entityresolution:ListIdMappingJobs",
	];
	/** IAM actions required for the ListIdMappingWorkflows API call. */
	static readonly LIST_ID_MAPPING_WORKFLOWS: string[] = [
		"entityresolution:ListIdMappingWorkflows",
	];
	/** IAM actions required for the ListIdNamespaces API call. */
	static readonly LIST_ID_NAMESPACES: string[] = [
		"entityresolution:ListIdNamespaces",
	];
	/** IAM actions required for the ListMatchingJobs API call. */
	static readonly LIST_MATCHING_JOBS: string[] = [
		"entityresolution:ListMatchingJobs",
	];
	/** IAM actions required for the ListMatchingWorkflows API call. */
	static readonly LIST_MATCHING_WORKFLOWS: string[] = [
		"entityresolution:ListMatchingWorkflows",
	];
	/** IAM actions required for the ListProviderServices API call. */
	static readonly LIST_PROVIDER_SERVICES: string[] = [
		"entityresolution:ListProviderServices",
	];
	/** IAM actions required for the ListSchemaMappings API call. */
	static readonly LIST_SCHEMA_MAPPINGS: string[] = [
		"entityresolution:ListSchemaMappings",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"entityresolution:ListTagsForResource",
	];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PUT_POLICY: string[] = ["entityresolution:PutPolicy"];
	/** IAM actions required for the StartIdMappingJob API call. */
	static readonly START_ID_MAPPING_JOB: string[] = [
		"iam:PassRole",
		"entityresolution:StartIdMappingJob",
		"entityresolution:UseIdNamespace",
	];
	/** IAM actions required for the StartMatchingJob API call. */
	static readonly START_MATCHING_JOB: string[] = [
		"entityresolution:StartMatchingJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["entityresolution:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["entityresolution:UntagResource"];
	/** IAM actions required for the UpdateIdMappingWorkflow API call. */
	static readonly UPDATE_ID_MAPPING_WORKFLOW: string[] = [
		"iam:PassRole",
		"entityresolution:UpdateIdMappingWorkflow",
	];
	/** IAM actions required for the UpdateIdNamespace API call. */
	static readonly UPDATE_ID_NAMESPACE: string[] = [
		"iam:PassRole",
		"entityresolution:UpdateIdNamespace",
	];
	/** IAM actions required for the UpdateMatchingWorkflow API call. */
	static readonly UPDATE_MATCHING_WORKFLOW: string[] = [
		"iam:PassRole",
		"entityresolution:UpdateMatchingWorkflow",
	];
	/** IAM actions required for the UpdateSchemaMapping API call. */
	static readonly UPDATE_SCHEMA_MAPPING: string[] = [
		"entityresolution:UpdateSchemaMapping",
	];
}

/**
 * Condition key constants and builders for entityresolution.
 */
export class EntityresolutionConditions {
	/** Condition keys applicable to the CreateIdMappingWorkflow action. */
	static readonly CREATE_ID_MAPPING_WORKFLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIdNamespace action. */
	static readonly CREATE_ID_NAMESPACE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMatchingWorkflow action. */
	static readonly CREATE_MATCHING_WORKFLOW_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchemaMapping action. */
	static readonly CREATE_SCHEMA_MAPPING_CONDITION_KEYS: string[] = [
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
