// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/clouddirectory.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the clouddirectory service.
 */
export class ClouddirectoryActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "clouddirectory";

	/** [Write] clouddirectory:AddFacetToObject */
	static readonly ADD_FACET_TO_OBJECT = "clouddirectory:AddFacetToObject";
	/** [Write] clouddirectory:ApplySchema */
	static readonly APPLY_SCHEMA = "clouddirectory:ApplySchema";
	/** [Write] clouddirectory:AttachObject */
	static readonly ATTACH_OBJECT = "clouddirectory:AttachObject";
	/** [Write] clouddirectory:AttachPolicy */
	static readonly ATTACH_POLICY = "clouddirectory:AttachPolicy";
	/** [Write] clouddirectory:AttachToIndex */
	static readonly ATTACH_TO_INDEX = "clouddirectory:AttachToIndex";
	/** [Write] clouddirectory:AttachTypedLink */
	static readonly ATTACH_TYPED_LINK = "clouddirectory:AttachTypedLink";
	/** [Read] clouddirectory:BatchRead */
	static readonly BATCH_READ = "clouddirectory:BatchRead";
	/** [Write] clouddirectory:BatchWrite */
	static readonly BATCH_WRITE = "clouddirectory:BatchWrite";
	/** [Write] clouddirectory:CreateDirectory */
	static readonly CREATE_DIRECTORY = "clouddirectory:CreateDirectory";
	/** [Write] clouddirectory:CreateFacet */
	static readonly CREATE_FACET = "clouddirectory:CreateFacet";
	/** [Write] clouddirectory:CreateIndex */
	static readonly CREATE_INDEX = "clouddirectory:CreateIndex";
	/** [Write] clouddirectory:CreateObject */
	static readonly CREATE_OBJECT = "clouddirectory:CreateObject";
	/** [Write] clouddirectory:CreateSchema */
	static readonly CREATE_SCHEMA = "clouddirectory:CreateSchema";
	/** [Write] clouddirectory:CreateTypedLinkFacet */
	static readonly CREATE_TYPED_LINK_FACET =
		"clouddirectory:CreateTypedLinkFacet";
	/** [Write] clouddirectory:DeleteDirectory */
	static readonly DELETE_DIRECTORY = "clouddirectory:DeleteDirectory";
	/** [Write] clouddirectory:DeleteFacet */
	static readonly DELETE_FACET = "clouddirectory:DeleteFacet";
	/** [Write] clouddirectory:DeleteObject */
	static readonly DELETE_OBJECT = "clouddirectory:DeleteObject";
	/** [Write] clouddirectory:DeleteSchema */
	static readonly DELETE_SCHEMA = "clouddirectory:DeleteSchema";
	/** [Write] clouddirectory:DeleteTypedLinkFacet */
	static readonly DELETE_TYPED_LINK_FACET =
		"clouddirectory:DeleteTypedLinkFacet";
	/** [Write] clouddirectory:DetachFromIndex */
	static readonly DETACH_FROM_INDEX = "clouddirectory:DetachFromIndex";
	/** [Write] clouddirectory:DetachObject */
	static readonly DETACH_OBJECT = "clouddirectory:DetachObject";
	/** [Write] clouddirectory:DetachPolicy */
	static readonly DETACH_POLICY = "clouddirectory:DetachPolicy";
	/** [Write] clouddirectory:DetachTypedLink */
	static readonly DETACH_TYPED_LINK = "clouddirectory:DetachTypedLink";
	/** [Write] clouddirectory:DisableDirectory */
	static readonly DISABLE_DIRECTORY = "clouddirectory:DisableDirectory";
	/** [Write] clouddirectory:EnableDirectory */
	static readonly ENABLE_DIRECTORY = "clouddirectory:EnableDirectory";
	/** [Read] clouddirectory:GetAppliedSchemaVersion */
	static readonly GET_APPLIED_SCHEMA_VERSION =
		"clouddirectory:GetAppliedSchemaVersion";
	/** [Read] clouddirectory:GetDirectory */
	static readonly GET_DIRECTORY = "clouddirectory:GetDirectory";
	/** [Read] clouddirectory:GetFacet */
	static readonly GET_FACET = "clouddirectory:GetFacet";
	/** [Read] clouddirectory:GetLinkAttributes */
	static readonly GET_LINK_ATTRIBUTES = "clouddirectory:GetLinkAttributes";
	/** [Read] clouddirectory:GetObjectAttributes */
	static readonly GET_OBJECT_ATTRIBUTES = "clouddirectory:GetObjectAttributes";
	/** [Read] clouddirectory:GetObjectInformation */
	static readonly GET_OBJECT_INFORMATION =
		"clouddirectory:GetObjectInformation";
	/** [Read] clouddirectory:GetSchemaAsJson */
	static readonly GET_SCHEMA_AS_JSON = "clouddirectory:GetSchemaAsJson";
	/** [Read] clouddirectory:GetTypedLinkFacetInformation */
	static readonly GET_TYPED_LINK_FACET_INFORMATION =
		"clouddirectory:GetTypedLinkFacetInformation";
	/** [List] clouddirectory:ListAppliedSchemaArns */
	static readonly LIST_APPLIED_SCHEMA_ARNS =
		"clouddirectory:ListAppliedSchemaArns";
	/** [Read] clouddirectory:ListAttachedIndices */
	static readonly LIST_ATTACHED_INDICES = "clouddirectory:ListAttachedIndices";
	/** [List] clouddirectory:ListDevelopmentSchemaArns */
	static readonly LIST_DEVELOPMENT_SCHEMA_ARNS =
		"clouddirectory:ListDevelopmentSchemaArns";
	/** [List] clouddirectory:ListDirectories */
	static readonly LIST_DIRECTORIES = "clouddirectory:ListDirectories";
	/** [Read] clouddirectory:ListFacetAttributes */
	static readonly LIST_FACET_ATTRIBUTES = "clouddirectory:ListFacetAttributes";
	/** [Read] clouddirectory:ListFacetNames */
	static readonly LIST_FACET_NAMES = "clouddirectory:ListFacetNames";
	/** [Read] clouddirectory:ListIncomingTypedLinks */
	static readonly LIST_INCOMING_TYPED_LINKS =
		"clouddirectory:ListIncomingTypedLinks";
	/** [Read] clouddirectory:ListIndex */
	static readonly LIST_INDEX = "clouddirectory:ListIndex";
	/** [List] clouddirectory:ListManagedSchemaArns */
	static readonly LIST_MANAGED_SCHEMA_ARNS =
		"clouddirectory:ListManagedSchemaArns";
	/** [Read] clouddirectory:ListObjectAttributes */
	static readonly LIST_OBJECT_ATTRIBUTES =
		"clouddirectory:ListObjectAttributes";
	/** [Read] clouddirectory:ListObjectChildren */
	static readonly LIST_OBJECT_CHILDREN = "clouddirectory:ListObjectChildren";
	/** [Read] clouddirectory:ListObjectParentPaths */
	static readonly LIST_OBJECT_PARENT_PATHS =
		"clouddirectory:ListObjectParentPaths";
	/** [Read] clouddirectory:ListObjectParents */
	static readonly LIST_OBJECT_PARENTS = "clouddirectory:ListObjectParents";
	/** [Read] clouddirectory:ListObjectPolicies */
	static readonly LIST_OBJECT_POLICIES = "clouddirectory:ListObjectPolicies";
	/** [Read] clouddirectory:ListOutgoingTypedLinks */
	static readonly LIST_OUTGOING_TYPED_LINKS =
		"clouddirectory:ListOutgoingTypedLinks";
	/** [Read] clouddirectory:ListPolicyAttachments */
	static readonly LIST_POLICY_ATTACHMENTS =
		"clouddirectory:ListPolicyAttachments";
	/** [List] clouddirectory:ListPublishedSchemaArns */
	static readonly LIST_PUBLISHED_SCHEMA_ARNS =
		"clouddirectory:ListPublishedSchemaArns";
	/** [Read] clouddirectory:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "clouddirectory:ListTagsForResource";
	/** [Read] clouddirectory:ListTypedLinkFacetAttributes */
	static readonly LIST_TYPED_LINK_FACET_ATTRIBUTES =
		"clouddirectory:ListTypedLinkFacetAttributes";
	/** [Read] clouddirectory:ListTypedLinkFacetNames */
	static readonly LIST_TYPED_LINK_FACET_NAMES =
		"clouddirectory:ListTypedLinkFacetNames";
	/** [Read] clouddirectory:LookupPolicy */
	static readonly LOOKUP_POLICY = "clouddirectory:LookupPolicy";
	/** [Write] clouddirectory:PublishSchema */
	static readonly PUBLISH_SCHEMA = "clouddirectory:PublishSchema";
	/** [Write] clouddirectory:PutSchemaFromJson */
	static readonly PUT_SCHEMA_FROM_JSON = "clouddirectory:PutSchemaFromJson";
	/** [Write] clouddirectory:RemoveFacetFromObject */
	static readonly REMOVE_FACET_FROM_OBJECT =
		"clouddirectory:RemoveFacetFromObject";
	/** [Tagging] clouddirectory:TagResource */
	static readonly TAG_RESOURCE = "clouddirectory:TagResource";
	/** [Tagging] clouddirectory:UntagResource */
	static readonly UNTAG_RESOURCE = "clouddirectory:UntagResource";
	/** [Write] clouddirectory:UpdateFacet */
	static readonly UPDATE_FACET = "clouddirectory:UpdateFacet";
	/** [Write] clouddirectory:UpdateLinkAttributes */
	static readonly UPDATE_LINK_ATTRIBUTES =
		"clouddirectory:UpdateLinkAttributes";
	/** [Write] clouddirectory:UpdateObjectAttributes */
	static readonly UPDATE_OBJECT_ATTRIBUTES =
		"clouddirectory:UpdateObjectAttributes";
	/** [Write] clouddirectory:UpdateSchema */
	static readonly UPDATE_SCHEMA = "clouddirectory:UpdateSchema";
	/** [Write] clouddirectory:UpdateTypedLinkFacet */
	static readonly UPDATE_TYPED_LINK_FACET =
		"clouddirectory:UpdateTypedLinkFacet";
	/** [Write] clouddirectory:UpgradeAppliedSchema */
	static readonly UPGRADE_APPLIED_SCHEMA =
		"clouddirectory:UpgradeAppliedSchema";
	/** [Write] clouddirectory:UpgradePublishedSchema */
	static readonly UPGRADE_PUBLISHED_SCHEMA =
		"clouddirectory:UpgradePublishedSchema";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		ClouddirectoryActions.BATCH_READ,
		ClouddirectoryActions.GET_APPLIED_SCHEMA_VERSION,
		ClouddirectoryActions.GET_DIRECTORY,
		ClouddirectoryActions.GET_FACET,
		ClouddirectoryActions.GET_LINK_ATTRIBUTES,
		ClouddirectoryActions.GET_OBJECT_ATTRIBUTES,
		ClouddirectoryActions.GET_OBJECT_INFORMATION,
		ClouddirectoryActions.GET_SCHEMA_AS_JSON,
		ClouddirectoryActions.GET_TYPED_LINK_FACET_INFORMATION,
		ClouddirectoryActions.LIST_ATTACHED_INDICES,
		ClouddirectoryActions.LIST_FACET_ATTRIBUTES,
		ClouddirectoryActions.LIST_FACET_NAMES,
		ClouddirectoryActions.LIST_INCOMING_TYPED_LINKS,
		ClouddirectoryActions.LIST_INDEX,
		ClouddirectoryActions.LIST_OBJECT_ATTRIBUTES,
		ClouddirectoryActions.LIST_OBJECT_CHILDREN,
		ClouddirectoryActions.LIST_OBJECT_PARENT_PATHS,
		ClouddirectoryActions.LIST_OBJECT_PARENTS,
		ClouddirectoryActions.LIST_OBJECT_POLICIES,
		ClouddirectoryActions.LIST_OUTGOING_TYPED_LINKS,
		ClouddirectoryActions.LIST_POLICY_ATTACHMENTS,
		ClouddirectoryActions.LIST_TAGS_FOR_RESOURCE,
		ClouddirectoryActions.LIST_TYPED_LINK_FACET_ATTRIBUTES,
		ClouddirectoryActions.LIST_TYPED_LINK_FACET_NAMES,
		ClouddirectoryActions.LOOKUP_POLICY,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		ClouddirectoryActions.ADD_FACET_TO_OBJECT,
		ClouddirectoryActions.APPLY_SCHEMA,
		ClouddirectoryActions.ATTACH_OBJECT,
		ClouddirectoryActions.ATTACH_POLICY,
		ClouddirectoryActions.ATTACH_TO_INDEX,
		ClouddirectoryActions.ATTACH_TYPED_LINK,
		ClouddirectoryActions.BATCH_WRITE,
		ClouddirectoryActions.CREATE_DIRECTORY,
		ClouddirectoryActions.CREATE_FACET,
		ClouddirectoryActions.CREATE_INDEX,
		ClouddirectoryActions.CREATE_OBJECT,
		ClouddirectoryActions.CREATE_SCHEMA,
		ClouddirectoryActions.CREATE_TYPED_LINK_FACET,
		ClouddirectoryActions.DELETE_DIRECTORY,
		ClouddirectoryActions.DELETE_FACET,
		ClouddirectoryActions.DELETE_OBJECT,
		ClouddirectoryActions.DELETE_SCHEMA,
		ClouddirectoryActions.DELETE_TYPED_LINK_FACET,
		ClouddirectoryActions.DETACH_FROM_INDEX,
		ClouddirectoryActions.DETACH_OBJECT,
		ClouddirectoryActions.DETACH_POLICY,
		ClouddirectoryActions.DETACH_TYPED_LINK,
		ClouddirectoryActions.DISABLE_DIRECTORY,
		ClouddirectoryActions.ENABLE_DIRECTORY,
		ClouddirectoryActions.PUBLISH_SCHEMA,
		ClouddirectoryActions.PUT_SCHEMA_FROM_JSON,
		ClouddirectoryActions.REMOVE_FACET_FROM_OBJECT,
		ClouddirectoryActions.UPDATE_FACET,
		ClouddirectoryActions.UPDATE_LINK_ATTRIBUTES,
		ClouddirectoryActions.UPDATE_OBJECT_ATTRIBUTES,
		ClouddirectoryActions.UPDATE_SCHEMA,
		ClouddirectoryActions.UPDATE_TYPED_LINK_FACET,
		ClouddirectoryActions.UPGRADE_APPLIED_SCHEMA,
		ClouddirectoryActions.UPGRADE_PUBLISHED_SCHEMA,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		ClouddirectoryActions.LIST_APPLIED_SCHEMA_ARNS,
		ClouddirectoryActions.LIST_DEVELOPMENT_SCHEMA_ARNS,
		ClouddirectoryActions.LIST_DIRECTORIES,
		ClouddirectoryActions.LIST_MANAGED_SCHEMA_ARNS,
		ClouddirectoryActions.LIST_PUBLISHED_SCHEMA_ARNS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		ClouddirectoryActions.TAG_RESOURCE,
		ClouddirectoryActions.UNTAG_RESOURCE,
	];
}

const AppliedSchemaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):directory/(?<directoryId>[^:/?]+)/schema/(?<schemaName>[^:/?]+)/(?<version>[^:/?]+)$",
);
const DevelopmentSchemaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):schema/development/(?<schemaName>[^:/?]+)$",
);
const DirectoryArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):directory/(?<directoryId>[^:/?]+)$",
);
const PublishedSchemaArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):schema/published/(?<schemaName>[^:/?]+)/(?<version>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for clouddirectory resources.
 */
export class ClouddirectoryResources {
	/**
	 * Builds an ARN for the appliedSchema resource.
	 */
	static appliedSchema(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** The SchemaName component of the ARN. */
		readonly schemaName: string;
		/** The Version component of the ARN. */
		readonly version: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:clouddirectory:${props.region ?? "*"}:${props.account ?? "*"}:directory/${props.directoryId}/schema/${props.schemaName}/${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the appliedSchema resource.
	 */
	static isValidAppliedSchemaArn(arn: string): boolean {
		return AppliedSchemaArnRegex.test(arn);
	}

	/**
	 * Parses a appliedSchema ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseAppliedSchemaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		directoryId: string;
		schemaName: string;
		version: string;
	} {
		const match = AppliedSchemaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid appliedSchema ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
			schemaName: match.groups!.schemaName,
			version: match.groups!.version,
		};
	}

	/**
	 * Builds an ARN for the developmentSchema resource.
	 */
	static developmentSchema(props: {
		/** The SchemaName component of the ARN. */
		readonly schemaName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:clouddirectory:${props.region ?? "*"}:${props.account ?? "*"}:schema/development/${props.schemaName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the developmentSchema resource.
	 */
	static isValidDevelopmentSchemaArn(arn: string): boolean {
		return DevelopmentSchemaArnRegex.test(arn);
	}

	/**
	 * Parses a developmentSchema ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDevelopmentSchemaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		schemaName: string;
	} {
		const match = DevelopmentSchemaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid developmentSchema ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			schemaName: match.groups!.schemaName,
		};
	}

	/**
	 * Builds an ARN for the directory resource.
	 */
	static directory(props: {
		/** The DirectoryId component of the ARN. */
		readonly directoryId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:clouddirectory:${props.region ?? "*"}:${props.account ?? "*"}:directory/${props.directoryId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the directory resource.
	 */
	static isValidDirectoryArn(arn: string): boolean {
		return DirectoryArnRegex.test(arn);
	}

	/**
	 * Parses a directory ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDirectoryArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		directoryId: string;
	} {
		const match = DirectoryArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid directory ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			directoryId: match.groups!.directoryId,
		};
	}

	/**
	 * Builds an ARN for the publishedSchema resource.
	 */
	static publishedSchema(props: {
		/** The SchemaName component of the ARN. */
		readonly schemaName: string;
		/** The Version component of the ARN. */
		readonly version: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:clouddirectory:${props.region ?? "*"}:${props.account ?? "*"}:schema/published/${props.schemaName}/${props.version}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the publishedSchema resource.
	 */
	static isValidPublishedSchemaArn(arn: string): boolean {
		return PublishedSchemaArnRegex.test(arn);
	}

	/**
	 * Parses a publishedSchema ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePublishedSchemaArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		schemaName: string;
		version: string;
	} {
		const match = PublishedSchemaArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid publishedSchema ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			schemaName: match.groups!.schemaName,
			version: match.groups!.version,
		};
	}
}

/**
 * API operation to required IAM actions mapping for clouddirectory.
 */
export class ClouddirectoryOperations {
	/** IAM actions required for the AddFacetToObject API call. */
	static readonly ADD_FACET_TO_OBJECT: string[] = [
		"clouddirectory:AddFacetToObject",
	];
	/** IAM actions required for the ApplySchema API call. */
	static readonly APPLY_SCHEMA: string[] = ["clouddirectory:ApplySchema"];
	/** IAM actions required for the AttachObject API call. */
	static readonly ATTACH_OBJECT: string[] = ["clouddirectory:AttachObject"];
	/** IAM actions required for the AttachPolicy API call. */
	static readonly ATTACH_POLICY: string[] = ["clouddirectory:AttachPolicy"];
	/** IAM actions required for the AttachToIndex API call. */
	static readonly ATTACH_TO_INDEX: string[] = ["clouddirectory:AttachToIndex"];
	/** IAM actions required for the AttachTypedLink API call. */
	static readonly ATTACH_TYPED_LINK: string[] = [
		"clouddirectory:AttachTypedLink",
	];
	/** IAM actions required for the BatchRead API call. */
	static readonly BATCH_READ: string[] = [
		"clouddirectory:BatchRead",
		"clouddirectory:GetLinkAttributes",
		"clouddirectory:GetObjectAttributes",
		"clouddirectory:GetObjectInformation",
		"clouddirectory:ListAttachedIndices",
		"clouddirectory:ListIncomingTypedLinks",
		"clouddirectory:ListIndex",
		"clouddirectory:ListObjectAttributes",
		"clouddirectory:ListObjectChildren",
		"clouddirectory:ListObjectParentPaths",
		"clouddirectory:ListObjectParents",
		"clouddirectory:ListObjectPolicies",
		"clouddirectory:ListOutgoingTypedLinks",
		"clouddirectory:ListPolicyAttachments",
		"clouddirectory:LookupPolicy",
	];
	/** IAM actions required for the BatchWrite API call. */
	static readonly BATCH_WRITE: string[] = [
		"clouddirectory:AddFacetToObject",
		"clouddirectory:AttachObject",
		"clouddirectory:AttachPolicy",
		"clouddirectory:AttachToIndex",
		"clouddirectory:AttachTypedLink",
		"clouddirectory:BatchWrite",
		"clouddirectory:CreateIndex",
		"clouddirectory:CreateObject",
		"clouddirectory:DeleteObject",
		"clouddirectory:DetachFromIndex",
		"clouddirectory:DetachObject",
		"clouddirectory:DetachTypedLink",
		"clouddirectory:RemoveFacetFromObject",
		"clouddirectory:UpdateLinkAttributes",
		"clouddirectory:UpdateObjectAttributes",
	];
	/** IAM actions required for the CreateDirectory API call. */
	static readonly CREATE_DIRECTORY: string[] = [
		"clouddirectory:CreateDirectory",
	];
	/** IAM actions required for the CreateFacet API call. */
	static readonly CREATE_FACET: string[] = ["clouddirectory:CreateFacet"];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CREATE_INDEX: string[] = [
		"clouddirectory:AttachObject",
		"clouddirectory:CreateIndex",
	];
	/** IAM actions required for the CreateObject API call. */
	static readonly CREATE_OBJECT: string[] = [
		"clouddirectory:AttachObject",
		"clouddirectory:CreateObject",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CREATE_SCHEMA: string[] = ["clouddirectory:CreateSchema"];
	/** IAM actions required for the CreateTypedLinkFacet API call. */
	static readonly CREATE_TYPED_LINK_FACET: string[] = [
		"clouddirectory:CreateTypedLinkFacet",
	];
	/** IAM actions required for the DeleteDirectory API call. */
	static readonly DELETE_DIRECTORY: string[] = [
		"clouddirectory:DeleteDirectory",
	];
	/** IAM actions required for the DeleteFacet API call. */
	static readonly DELETE_FACET: string[] = ["clouddirectory:DeleteFacet"];
	/** IAM actions required for the DeleteObject API call. */
	static readonly DELETE_OBJECT: string[] = ["clouddirectory:DeleteObject"];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DELETE_SCHEMA: string[] = ["clouddirectory:DeleteSchema"];
	/** IAM actions required for the DeleteTypedLinkFacet API call. */
	static readonly DELETE_TYPED_LINK_FACET: string[] = [
		"clouddirectory:DeleteTypedLinkFacet",
	];
	/** IAM actions required for the DetachFromIndex API call. */
	static readonly DETACH_FROM_INDEX: string[] = [
		"clouddirectory:DetachFromIndex",
	];
	/** IAM actions required for the DetachObject API call. */
	static readonly DETACH_OBJECT: string[] = ["clouddirectory:DetachObject"];
	/** IAM actions required for the DetachPolicy API call. */
	static readonly DETACH_POLICY: string[] = ["clouddirectory:DetachPolicy"];
	/** IAM actions required for the DetachTypedLink API call. */
	static readonly DETACH_TYPED_LINK: string[] = [
		"clouddirectory:DetachTypedLink",
	];
	/** IAM actions required for the DisableDirectory API call. */
	static readonly DISABLE_DIRECTORY: string[] = [
		"clouddirectory:DisableDirectory",
	];
	/** IAM actions required for the EnableDirectory API call. */
	static readonly ENABLE_DIRECTORY: string[] = [
		"clouddirectory:EnableDirectory",
	];
	/** IAM actions required for the GetAppliedSchemaVersion API call. */
	static readonly GET_APPLIED_SCHEMA_VERSION: string[] = [
		"clouddirectory:GetAppliedSchemaVersion",
	];
	/** IAM actions required for the GetDirectory API call. */
	static readonly GET_DIRECTORY: string[] = ["clouddirectory:GetDirectory"];
	/** IAM actions required for the GetFacet API call. */
	static readonly GET_FACET: string[] = ["clouddirectory:GetFacet"];
	/** IAM actions required for the GetLinkAttributes API call. */
	static readonly GET_LINK_ATTRIBUTES: string[] = [
		"clouddirectory:GetLinkAttributes",
	];
	/** IAM actions required for the GetObjectAttributes API call. */
	static readonly GET_OBJECT_ATTRIBUTES: string[] = [
		"clouddirectory:GetObjectAttributes",
	];
	/** IAM actions required for the GetObjectInformation API call. */
	static readonly GET_OBJECT_INFORMATION: string[] = [
		"clouddirectory:GetObjectInformation",
	];
	/** IAM actions required for the GetSchemaAsJson API call. */
	static readonly GET_SCHEMA_AS_JSON: string[] = [
		"clouddirectory:GetSchemaAsJson",
	];
	/** IAM actions required for the GetTypedLinkFacetInformation API call. */
	static readonly GET_TYPED_LINK_FACET_INFORMATION: string[] = [
		"clouddirectory:GetTypedLinkFacetInformation",
	];
	/** IAM actions required for the ListAppliedSchemaArns API call. */
	static readonly LIST_APPLIED_SCHEMA_ARNS: string[] = [
		"clouddirectory:ListAppliedSchemaArns",
	];
	/** IAM actions required for the ListAttachedIndices API call. */
	static readonly LIST_ATTACHED_INDICES: string[] = [
		"clouddirectory:ListAttachedIndices",
	];
	/** IAM actions required for the ListDevelopmentSchemaArns API call. */
	static readonly LIST_DEVELOPMENT_SCHEMA_ARNS: string[] = [
		"clouddirectory:ListDevelopmentSchemaArns",
	];
	/** IAM actions required for the ListDirectories API call. */
	static readonly LIST_DIRECTORIES: string[] = [
		"clouddirectory:ListDirectories",
	];
	/** IAM actions required for the ListFacetAttributes API call. */
	static readonly LIST_FACET_ATTRIBUTES: string[] = [
		"clouddirectory:ListFacetAttributes",
	];
	/** IAM actions required for the ListFacetNames API call. */
	static readonly LIST_FACET_NAMES: string[] = [
		"clouddirectory:ListFacetNames",
	];
	/** IAM actions required for the ListIncomingTypedLinks API call. */
	static readonly LIST_INCOMING_TYPED_LINKS: string[] = [
		"clouddirectory:ListIncomingTypedLinks",
	];
	/** IAM actions required for the ListIndex API call. */
	static readonly LIST_INDEX: string[] = ["clouddirectory:ListIndex"];
	/** IAM actions required for the ListManagedSchemaArns API call. */
	static readonly LIST_MANAGED_SCHEMA_ARNS: string[] = [
		"clouddirectory:ListManagedSchemaArns",
	];
	/** IAM actions required for the ListObjectAttributes API call. */
	static readonly LIST_OBJECT_ATTRIBUTES: string[] = [
		"clouddirectory:ListObjectAttributes",
	];
	/** IAM actions required for the ListObjectChildren API call. */
	static readonly LIST_OBJECT_CHILDREN: string[] = [
		"clouddirectory:ListObjectChildren",
	];
	/** IAM actions required for the ListObjectParentPaths API call. */
	static readonly LIST_OBJECT_PARENT_PATHS: string[] = [
		"clouddirectory:ListObjectParentPaths",
	];
	/** IAM actions required for the ListObjectParents API call. */
	static readonly LIST_OBJECT_PARENTS: string[] = [
		"clouddirectory:ListObjectParents",
	];
	/** IAM actions required for the ListObjectPolicies API call. */
	static readonly LIST_OBJECT_POLICIES: string[] = [
		"clouddirectory:ListObjectPolicies",
	];
	/** IAM actions required for the ListOutgoingTypedLinks API call. */
	static readonly LIST_OUTGOING_TYPED_LINKS: string[] = [
		"clouddirectory:ListOutgoingTypedLinks",
	];
	/** IAM actions required for the ListPolicyAttachments API call. */
	static readonly LIST_POLICY_ATTACHMENTS: string[] = [
		"clouddirectory:ListPolicyAttachments",
	];
	/** IAM actions required for the ListPublishedSchemaArns API call. */
	static readonly LIST_PUBLISHED_SCHEMA_ARNS: string[] = [
		"clouddirectory:ListPublishedSchemaArns",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"clouddirectory:ListTagsForResource",
	];
	/** IAM actions required for the ListTypedLinkFacetAttributes API call. */
	static readonly LIST_TYPED_LINK_FACET_ATTRIBUTES: string[] = [
		"clouddirectory:ListTypedLinkFacetAttributes",
	];
	/** IAM actions required for the ListTypedLinkFacetNames API call. */
	static readonly LIST_TYPED_LINK_FACET_NAMES: string[] = [
		"clouddirectory:ListTypedLinkFacetNames",
	];
	/** IAM actions required for the LookupPolicy API call. */
	static readonly LOOKUP_POLICY: string[] = ["clouddirectory:LookupPolicy"];
	/** IAM actions required for the PublishSchema API call. */
	static readonly PUBLISH_SCHEMA: string[] = ["clouddirectory:PublishSchema"];
	/** IAM actions required for the PutSchemaFromJson API call. */
	static readonly PUT_SCHEMA_FROM_JSON: string[] = [
		"clouddirectory:PutSchemaFromJson",
	];
	/** IAM actions required for the RemoveFacetFromObject API call. */
	static readonly REMOVE_FACET_FROM_OBJECT: string[] = [
		"clouddirectory:RemoveFacetFromObject",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["clouddirectory:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["clouddirectory:UntagResource"];
	/** IAM actions required for the UpdateFacet API call. */
	static readonly UPDATE_FACET: string[] = ["clouddirectory:UpdateFacet"];
	/** IAM actions required for the UpdateLinkAttributes API call. */
	static readonly UPDATE_LINK_ATTRIBUTES: string[] = [
		"clouddirectory:UpdateLinkAttributes",
	];
	/** IAM actions required for the UpdateObjectAttributes API call. */
	static readonly UPDATE_OBJECT_ATTRIBUTES: string[] = [
		"clouddirectory:UpdateObjectAttributes",
	];
	/** IAM actions required for the UpdateSchema API call. */
	static readonly UPDATE_SCHEMA: string[] = ["clouddirectory:UpdateSchema"];
	/** IAM actions required for the UpdateTypedLinkFacet API call. */
	static readonly UPDATE_TYPED_LINK_FACET: string[] = [
		"clouddirectory:UpdateTypedLinkFacet",
	];
	/** IAM actions required for the UpgradeAppliedSchema API call. */
	static readonly UPGRADE_APPLIED_SCHEMA: string[] = [
		"clouddirectory:UpgradeAppliedSchema",
	];
	/** IAM actions required for the UpgradePublishedSchema API call. */
	static readonly UPGRADE_PUBLISHED_SCHEMA: string[] = [
		"clouddirectory:UpgradePublishedSchema",
	];
}
