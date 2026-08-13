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
	static readonly AddPolicyStatement = "entityresolution:AddPolicyStatement";
	/** [Write] entityresolution:BatchDeleteUniqueId */
	static readonly BatchDeleteUniqueId = "entityresolution:BatchDeleteUniqueId";
	/** [Write] entityresolution:CreateIdMappingWorkflow */
	static readonly CreateIdMappingWorkflow =
		"entityresolution:CreateIdMappingWorkflow";
	/** [Write] entityresolution:CreateIdNamespace */
	static readonly CreateIdNamespace = "entityresolution:CreateIdNamespace";
	/** [Write] entityresolution:CreateMatchingWorkflow */
	static readonly CreateMatchingWorkflow =
		"entityresolution:CreateMatchingWorkflow";
	/** [Write] entityresolution:CreateSchemaMapping */
	static readonly CreateSchemaMapping = "entityresolution:CreateSchemaMapping";
	/** [Write] entityresolution:DeleteIdMappingWorkflow */
	static readonly DeleteIdMappingWorkflow =
		"entityresolution:DeleteIdMappingWorkflow";
	/** [Write] entityresolution:DeleteIdNamespace */
	static readonly DeleteIdNamespace = "entityresolution:DeleteIdNamespace";
	/** [Write] entityresolution:DeleteMatchingWorkflow */
	static readonly DeleteMatchingWorkflow =
		"entityresolution:DeleteMatchingWorkflow";
	/** [PermissionManagement] entityresolution:DeletePolicyStatement */
	static readonly DeletePolicyStatement =
		"entityresolution:DeletePolicyStatement";
	/** [Write] entityresolution:DeleteSchemaMapping */
	static readonly DeleteSchemaMapping = "entityresolution:DeleteSchemaMapping";
	/** [Write] entityresolution:GenerateMatchId */
	static readonly GenerateMatchId = "entityresolution:GenerateMatchId";
	/** [Read] entityresolution:GetIdMappingJob */
	static readonly actionGetIdMappingJob = "entityresolution:GetIdMappingJob";
	/** [Read] entityresolution:GetIdMappingWorkflow */
	static readonly actionGetIdMappingWorkflow =
		"entityresolution:GetIdMappingWorkflow";
	/** [Read] entityresolution:GetIdNamespace */
	static readonly actionGetIdNamespace = "entityresolution:GetIdNamespace";
	/** [Read] entityresolution:GetMatchId */
	static readonly actionGetMatchId = "entityresolution:GetMatchId";
	/** [Read] entityresolution:GetMatchingJob */
	static readonly actionGetMatchingJob = "entityresolution:GetMatchingJob";
	/** [Read] entityresolution:GetMatchingWorkflow */
	static readonly actionGetMatchingWorkflow =
		"entityresolution:GetMatchingWorkflow";
	/** [Read] entityresolution:GetPolicy */
	static readonly actionGetPolicy = "entityresolution:GetPolicy";
	/** [Read] entityresolution:GetProviderService */
	static readonly actionGetProviderService =
		"entityresolution:GetProviderService";
	/** [Read] entityresolution:GetSchemaMapping */
	static readonly actionGetSchemaMapping = "entityresolution:GetSchemaMapping";
	/** [List] entityresolution:ListIdMappingJobs */
	static readonly ListIdMappingJobs = "entityresolution:ListIdMappingJobs";
	/** [List] entityresolution:ListIdMappingWorkflows */
	static readonly ListIdMappingWorkflows =
		"entityresolution:ListIdMappingWorkflows";
	/** [List] entityresolution:ListIdNamespaces */
	static readonly ListIdNamespaces = "entityresolution:ListIdNamespaces";
	/** [List] entityresolution:ListMatchingJobs */
	static readonly ListMatchingJobs = "entityresolution:ListMatchingJobs";
	/** [List] entityresolution:ListMatchingWorkflows */
	static readonly ListMatchingWorkflows =
		"entityresolution:ListMatchingWorkflows";
	/** [List] entityresolution:ListProviderServices */
	static readonly ListProviderServices =
		"entityresolution:ListProviderServices";
	/** [List] entityresolution:ListSchemaMappings */
	static readonly ListSchemaMappings = "entityresolution:ListSchemaMappings";
	/** [Read] entityresolution:ListTagsForResource */
	static readonly ListTagsForResource = "entityresolution:ListTagsForResource";
	/** [PermissionManagement] entityresolution:PutPolicy */
	static readonly PutPolicy = "entityresolution:PutPolicy";
	/** [Write] entityresolution:StartIdMappingJob */
	static readonly StartIdMappingJob = "entityresolution:StartIdMappingJob";
	/** [Write] entityresolution:StartMatchingJob */
	static readonly StartMatchingJob = "entityresolution:StartMatchingJob";
	/** [Tagging] entityresolution:TagResource */
	static readonly TagResource = "entityresolution:TagResource";
	/** [Tagging] entityresolution:UntagResource */
	static readonly UntagResource = "entityresolution:UntagResource";
	/** [Write] entityresolution:UpdateIdMappingWorkflow */
	static readonly UpdateIdMappingWorkflow =
		"entityresolution:UpdateIdMappingWorkflow";
	/** [Write] entityresolution:UpdateIdNamespace */
	static readonly UpdateIdNamespace = "entityresolution:UpdateIdNamespace";
	/** [Write] entityresolution:UpdateMatchingWorkflow */
	static readonly UpdateMatchingWorkflow =
		"entityresolution:UpdateMatchingWorkflow";
	/** [Write] entityresolution:UpdateSchemaMapping */
	static readonly UpdateSchemaMapping = "entityresolution:UpdateSchemaMapping";
	/** [PermissionManagement] entityresolution:UseIdNamespace */
	static readonly UseIdNamespace = "entityresolution:UseIdNamespace";
	/** [PermissionManagement] entityresolution:UseWorkflow */
	static readonly UseWorkflow = "entityresolution:UseWorkflow";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		EntityresolutionActions.actionGetIdMappingJob,
		EntityresolutionActions.actionGetIdMappingWorkflow,
		EntityresolutionActions.actionGetIdNamespace,
		EntityresolutionActions.actionGetMatchId,
		EntityresolutionActions.actionGetMatchingJob,
		EntityresolutionActions.actionGetMatchingWorkflow,
		EntityresolutionActions.actionGetPolicy,
		EntityresolutionActions.actionGetProviderService,
		EntityresolutionActions.actionGetSchemaMapping,
		EntityresolutionActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		EntityresolutionActions.BatchDeleteUniqueId,
		EntityresolutionActions.CreateIdMappingWorkflow,
		EntityresolutionActions.CreateIdNamespace,
		EntityresolutionActions.CreateMatchingWorkflow,
		EntityresolutionActions.CreateSchemaMapping,
		EntityresolutionActions.DeleteIdMappingWorkflow,
		EntityresolutionActions.DeleteIdNamespace,
		EntityresolutionActions.DeleteMatchingWorkflow,
		EntityresolutionActions.DeleteSchemaMapping,
		EntityresolutionActions.GenerateMatchId,
		EntityresolutionActions.StartIdMappingJob,
		EntityresolutionActions.StartMatchingJob,
		EntityresolutionActions.UpdateIdMappingWorkflow,
		EntityresolutionActions.UpdateIdNamespace,
		EntityresolutionActions.UpdateMatchingWorkflow,
		EntityresolutionActions.UpdateSchemaMapping,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		EntityresolutionActions.ListIdMappingJobs,
		EntityresolutionActions.ListIdMappingWorkflows,
		EntityresolutionActions.ListIdNamespaces,
		EntityresolutionActions.ListMatchingJobs,
		EntityresolutionActions.ListMatchingWorkflows,
		EntityresolutionActions.ListProviderServices,
		EntityresolutionActions.ListSchemaMappings,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [
		EntityresolutionActions.AddPolicyStatement,
		EntityresolutionActions.DeletePolicyStatement,
		EntityresolutionActions.PutPolicy,
		EntityresolutionActions.UseIdNamespace,
		EntityresolutionActions.UseWorkflow,
	];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		EntityresolutionActions.TagResource,
		EntityresolutionActions.UntagResource,
	];
}

/**
 * Properties for building a IdMappingWorkflow ARN.
 */
export interface EntityresolutionIdMappingWorkflowArnProps {
	/** The WorkflowName component of the ARN. */
	readonly workflowName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a IdMappingWorkflow ARN.
 */
export interface EntityresolutionIdMappingWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowName component. */
	readonly workflowName: string;
}

/**
 * Properties for building a IdNamespace ARN.
 */
export interface EntityresolutionIdNamespaceArnProps {
	/** The IdNamespaceName component of the ARN. */
	readonly idNamespaceName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a IdNamespace ARN.
 */
export interface EntityresolutionIdNamespaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdNamespaceName component. */
	readonly idNamespaceName: string;
}

/**
 * Properties for building a MatchingWorkflow ARN.
 */
export interface EntityresolutionMatchingWorkflowArnProps {
	/** The WorkflowName component of the ARN. */
	readonly workflowName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a MatchingWorkflow ARN.
 */
export interface EntityresolutionMatchingWorkflowArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkflowName component. */
	readonly workflowName: string;
}

/**
 * Properties for building a ProviderService ARN.
 */
export interface EntityresolutionProviderServiceArnProps {
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
}

/**
 * Parsed components of a ProviderService ARN.
 */
export interface EntityresolutionProviderServiceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ProviderName component. */
	readonly providerName: string;
	/** The ProviderServiceName component. */
	readonly providerServiceName: string;
}

/**
 * Properties for building a SchemaMapping ARN.
 */
export interface EntityresolutionSchemaMappingArnProps {
	/** The SchemaName component of the ARN. */
	readonly schemaName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a SchemaMapping ARN.
 */
export interface EntityresolutionSchemaMappingArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SchemaName component. */
	readonly schemaName: string;
}

const IdMappingWorkflowArnRegex =
	/^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):idmappingworkflow\/(?<workflowName>[^:/?]+)$/;
const IdNamespaceArnRegex =
	/^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):idnamespace\/(?<idNamespaceName>[^:/?]+)$/;
const MatchingWorkflowArnRegex =
	/^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):matchingworkflow\/(?<workflowName>[^:/?]+)$/;
const ProviderServiceArnRegex =
	/^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):providerservice\/(?<providerName>[^:/?]+)\/(?<providerServiceName>[^:/?]+)$/;
const SchemaMappingArnRegex =
	/^arn:(?<partition>[^:]+):entityresolution:(?<region>[^:]*):(?<account>[^:]*):schemamapping\/(?<schemaName>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for entityresolution resources.
 */
export class EntityresolutionResources {
	/**
	 * Builds an ARN for the IdMappingWorkflow resource.
	 */
	static idMappingWorkflow(
		props: EntityresolutionIdMappingWorkflowArnProps,
	): string {
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
	static parseIdMappingWorkflowArn(
		arn: string,
	): EntityresolutionIdMappingWorkflowArnComponents {
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
	static idNamespace(props: EntityresolutionIdNamespaceArnProps): string {
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
	static parseIdNamespaceArn(
		arn: string,
	): EntityresolutionIdNamespaceArnComponents {
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
	static matchingWorkflow(
		props: EntityresolutionMatchingWorkflowArnProps,
	): string {
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
	static parseMatchingWorkflowArn(
		arn: string,
	): EntityresolutionMatchingWorkflowArnComponents {
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
	static providerService(
		props: EntityresolutionProviderServiceArnProps,
	): string {
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
	static parseProviderServiceArn(
		arn: string,
	): EntityresolutionProviderServiceArnComponents {
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
	static schemaMapping(props: EntityresolutionSchemaMappingArnProps): string {
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
	static parseSchemaMappingArn(
		arn: string,
	): EntityresolutionSchemaMappingArnComponents {
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
	static readonly AddPolicyStatement: string[] = [
		"entityresolution:AddPolicyStatement",
	];
	/** IAM actions required for the BatchDeleteUniqueId API call. */
	static readonly BatchDeleteUniqueId: string[] = [
		"entityresolution:BatchDeleteUniqueId",
	];
	/** IAM actions required for the CreateIdMappingWorkflow API call. */
	static readonly CreateIdMappingWorkflow: string[] = [
		"entityresolution:CreateIdMappingWorkflow",
		"iam:PassRole",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the CreateIdNamespace API call. */
	static readonly CreateIdNamespace: string[] = [
		"entityresolution:CreateIdNamespace",
		"iam:PassRole",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the CreateMatchingWorkflow API call. */
	static readonly CreateMatchingWorkflow: string[] = [
		"entityresolution:CreateMatchingWorkflow",
		"iam:PassRole",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the CreateSchemaMapping API call. */
	static readonly CreateSchemaMapping: string[] = [
		"entityresolution:CreateSchemaMapping",
		"entityresolution:TagResource",
	];
	/** IAM actions required for the DeleteIdMappingWorkflow API call. */
	static readonly DeleteIdMappingWorkflow: string[] = [
		"entityresolution:DeleteIdMappingWorkflow",
	];
	/** IAM actions required for the DeleteIdNamespace API call. */
	static readonly DeleteIdNamespace: string[] = [
		"entityresolution:DeleteIdNamespace",
	];
	/** IAM actions required for the DeleteMatchingWorkflow API call. */
	static readonly DeleteMatchingWorkflow: string[] = [
		"entityresolution:DeleteMatchingWorkflow",
	];
	/** IAM actions required for the DeletePolicyStatement API call. */
	static readonly DeletePolicyStatement: string[] = [
		"entityresolution:DeletePolicyStatement",
	];
	/** IAM actions required for the DeleteSchemaMapping API call. */
	static readonly DeleteSchemaMapping: string[] = [
		"entityresolution:DeleteSchemaMapping",
	];
	/** IAM actions required for the GenerateMatchId API call. */
	static readonly GenerateMatchId: string[] = [
		"entityresolution:GenerateMatchId",
	];
	/** IAM actions required for the GetIdMappingJob API call. */
	static readonly opGetIdMappingJob: string[] = [
		"entityresolution:GetIdMappingJob",
	];
	/** IAM actions required for the GetIdMappingWorkflow API call. */
	static readonly opGetIdMappingWorkflow: string[] = [
		"entityresolution:GetIdMappingWorkflow",
	];
	/** IAM actions required for the GetIdNamespace API call. */
	static readonly opGetIdNamespace: string[] = [
		"entityresolution:GetIdNamespace",
	];
	/** IAM actions required for the GetMatchId API call. */
	static readonly opGetMatchId: string[] = ["entityresolution:GetMatchId"];
	/** IAM actions required for the GetMatchingJob API call. */
	static readonly opGetMatchingJob: string[] = [
		"entityresolution:GetMatchingJob",
	];
	/** IAM actions required for the GetMatchingWorkflow API call. */
	static readonly opGetMatchingWorkflow: string[] = [
		"entityresolution:GetMatchingWorkflow",
	];
	/** IAM actions required for the GetPolicy API call. */
	static readonly opGetPolicy: string[] = ["entityresolution:GetPolicy"];
	/** IAM actions required for the GetProviderService API call. */
	static readonly opGetProviderService: string[] = [
		"entityresolution:GetProviderService",
	];
	/** IAM actions required for the GetSchemaMapping API call. */
	static readonly opGetSchemaMapping: string[] = [
		"entityresolution:GetSchemaMapping",
	];
	/** IAM actions required for the ListIdMappingJobs API call. */
	static readonly ListIdMappingJobs: string[] = [
		"entityresolution:ListIdMappingJobs",
	];
	/** IAM actions required for the ListIdMappingWorkflows API call. */
	static readonly ListIdMappingWorkflows: string[] = [
		"entityresolution:ListIdMappingWorkflows",
	];
	/** IAM actions required for the ListIdNamespaces API call. */
	static readonly ListIdNamespaces: string[] = [
		"entityresolution:ListIdNamespaces",
	];
	/** IAM actions required for the ListMatchingJobs API call. */
	static readonly ListMatchingJobs: string[] = [
		"entityresolution:ListMatchingJobs",
	];
	/** IAM actions required for the ListMatchingWorkflows API call. */
	static readonly ListMatchingWorkflows: string[] = [
		"entityresolution:ListMatchingWorkflows",
	];
	/** IAM actions required for the ListProviderServices API call. */
	static readonly ListProviderServices: string[] = [
		"entityresolution:ListProviderServices",
	];
	/** IAM actions required for the ListSchemaMappings API call. */
	static readonly ListSchemaMappings: string[] = [
		"entityresolution:ListSchemaMappings",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"entityresolution:ListTagsForResource",
	];
	/** IAM actions required for the PutPolicy API call. */
	static readonly PutPolicy: string[] = ["entityresolution:PutPolicy"];
	/** IAM actions required for the StartIdMappingJob API call. */
	static readonly StartIdMappingJob: string[] = [
		"iam:PassRole",
		"entityresolution:StartIdMappingJob",
		"entityresolution:UseIdNamespace",
	];
	/** IAM actions required for the StartMatchingJob API call. */
	static readonly StartMatchingJob: string[] = [
		"entityresolution:StartMatchingJob",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["entityresolution:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["entityresolution:UntagResource"];
	/** IAM actions required for the UpdateIdMappingWorkflow API call. */
	static readonly UpdateIdMappingWorkflow: string[] = [
		"iam:PassRole",
		"entityresolution:UpdateIdMappingWorkflow",
	];
	/** IAM actions required for the UpdateIdNamespace API call. */
	static readonly UpdateIdNamespace: string[] = [
		"iam:PassRole",
		"entityresolution:UpdateIdNamespace",
	];
	/** IAM actions required for the UpdateMatchingWorkflow API call. */
	static readonly UpdateMatchingWorkflow: string[] = [
		"iam:PassRole",
		"entityresolution:UpdateMatchingWorkflow",
	];
	/** IAM actions required for the UpdateSchemaMapping API call. */
	static readonly UpdateSchemaMapping: string[] = [
		"entityresolution:UpdateSchemaMapping",
	];
}

/**
 * Condition key constants and builders for entityresolution.
 */
export class EntityresolutionConditions {
	/** Condition keys applicable to the CreateIdMappingWorkflow action. */
	static readonly CreateIdMappingWorkflowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateIdNamespace action. */
	static readonly CreateIdNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateMatchingWorkflow action. */
	static readonly CreateMatchingWorkflowConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSchemaMapping action. */
	static readonly CreateSchemaMappingConditionKeys: string[] = [
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
