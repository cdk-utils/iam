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
	static readonly AddFacetToObject = "clouddirectory:AddFacetToObject";
	/** [Write] clouddirectory:ApplySchema */
	static readonly ApplySchema = "clouddirectory:ApplySchema";
	/** [Write] clouddirectory:AttachObject */
	static readonly AttachObject = "clouddirectory:AttachObject";
	/** [Write] clouddirectory:AttachPolicy */
	static readonly AttachPolicy = "clouddirectory:AttachPolicy";
	/** [Write] clouddirectory:AttachToIndex */
	static readonly AttachToIndex = "clouddirectory:AttachToIndex";
	/** [Write] clouddirectory:AttachTypedLink */
	static readonly AttachTypedLink = "clouddirectory:AttachTypedLink";
	/** [Read] clouddirectory:BatchRead */
	static readonly BatchRead = "clouddirectory:BatchRead";
	/** [Write] clouddirectory:BatchWrite */
	static readonly BatchWrite = "clouddirectory:BatchWrite";
	/** [Write] clouddirectory:CreateDirectory */
	static readonly CreateDirectory = "clouddirectory:CreateDirectory";
	/** [Write] clouddirectory:CreateFacet */
	static readonly CreateFacet = "clouddirectory:CreateFacet";
	/** [Write] clouddirectory:CreateIndex */
	static readonly CreateIndex = "clouddirectory:CreateIndex";
	/** [Write] clouddirectory:CreateObject */
	static readonly CreateObject = "clouddirectory:CreateObject";
	/** [Write] clouddirectory:CreateSchema */
	static readonly CreateSchema = "clouddirectory:CreateSchema";
	/** [Write] clouddirectory:CreateTypedLinkFacet */
	static readonly CreateTypedLinkFacet = "clouddirectory:CreateTypedLinkFacet";
	/** [Write] clouddirectory:DeleteDirectory */
	static readonly DeleteDirectory = "clouddirectory:DeleteDirectory";
	/** [Write] clouddirectory:DeleteFacet */
	static readonly DeleteFacet = "clouddirectory:DeleteFacet";
	/** [Write] clouddirectory:DeleteObject */
	static readonly DeleteObject = "clouddirectory:DeleteObject";
	/** [Write] clouddirectory:DeleteSchema */
	static readonly DeleteSchema = "clouddirectory:DeleteSchema";
	/** [Write] clouddirectory:DeleteTypedLinkFacet */
	static readonly DeleteTypedLinkFacet = "clouddirectory:DeleteTypedLinkFacet";
	/** [Write] clouddirectory:DetachFromIndex */
	static readonly DetachFromIndex = "clouddirectory:DetachFromIndex";
	/** [Write] clouddirectory:DetachObject */
	static readonly DetachObject = "clouddirectory:DetachObject";
	/** [Write] clouddirectory:DetachPolicy */
	static readonly DetachPolicy = "clouddirectory:DetachPolicy";
	/** [Write] clouddirectory:DetachTypedLink */
	static readonly DetachTypedLink = "clouddirectory:DetachTypedLink";
	/** [Write] clouddirectory:DisableDirectory */
	static readonly DisableDirectory = "clouddirectory:DisableDirectory";
	/** [Write] clouddirectory:EnableDirectory */
	static readonly EnableDirectory = "clouddirectory:EnableDirectory";
	/** [Read] clouddirectory:GetAppliedSchemaVersion */
	static readonly actionGetAppliedSchemaVersion =
		"clouddirectory:GetAppliedSchemaVersion";
	/** [Read] clouddirectory:GetDirectory */
	static readonly actionGetDirectory = "clouddirectory:GetDirectory";
	/** [Read] clouddirectory:GetFacet */
	static readonly actionGetFacet = "clouddirectory:GetFacet";
	/** [Read] clouddirectory:GetLinkAttributes */
	static readonly actionGetLinkAttributes = "clouddirectory:GetLinkAttributes";
	/** [Read] clouddirectory:GetObjectAttributes */
	static readonly actionGetObjectAttributes =
		"clouddirectory:GetObjectAttributes";
	/** [Read] clouddirectory:GetObjectInformation */
	static readonly actionGetObjectInformation =
		"clouddirectory:GetObjectInformation";
	/** [Read] clouddirectory:GetSchemaAsJson */
	static readonly actionGetSchemaAsJson = "clouddirectory:GetSchemaAsJson";
	/** [Read] clouddirectory:GetTypedLinkFacetInformation */
	static readonly actionGetTypedLinkFacetInformation =
		"clouddirectory:GetTypedLinkFacetInformation";
	/** [List] clouddirectory:ListAppliedSchemaArns */
	static readonly ListAppliedSchemaArns =
		"clouddirectory:ListAppliedSchemaArns";
	/** [Read] clouddirectory:ListAttachedIndices */
	static readonly ListAttachedIndices = "clouddirectory:ListAttachedIndices";
	/** [List] clouddirectory:ListDevelopmentSchemaArns */
	static readonly ListDevelopmentSchemaArns =
		"clouddirectory:ListDevelopmentSchemaArns";
	/** [List] clouddirectory:ListDirectories */
	static readonly ListDirectories = "clouddirectory:ListDirectories";
	/** [Read] clouddirectory:ListFacetAttributes */
	static readonly ListFacetAttributes = "clouddirectory:ListFacetAttributes";
	/** [Read] clouddirectory:ListFacetNames */
	static readonly ListFacetNames = "clouddirectory:ListFacetNames";
	/** [Read] clouddirectory:ListIncomingTypedLinks */
	static readonly ListIncomingTypedLinks =
		"clouddirectory:ListIncomingTypedLinks";
	/** [Read] clouddirectory:ListIndex */
	static readonly ListIndex = "clouddirectory:ListIndex";
	/** [List] clouddirectory:ListManagedSchemaArns */
	static readonly ListManagedSchemaArns =
		"clouddirectory:ListManagedSchemaArns";
	/** [Read] clouddirectory:ListObjectAttributes */
	static readonly ListObjectAttributes = "clouddirectory:ListObjectAttributes";
	/** [Read] clouddirectory:ListObjectChildren */
	static readonly ListObjectChildren = "clouddirectory:ListObjectChildren";
	/** [Read] clouddirectory:ListObjectParentPaths */
	static readonly ListObjectParentPaths =
		"clouddirectory:ListObjectParentPaths";
	/** [Read] clouddirectory:ListObjectParents */
	static readonly ListObjectParents = "clouddirectory:ListObjectParents";
	/** [Read] clouddirectory:ListObjectPolicies */
	static readonly ListObjectPolicies = "clouddirectory:ListObjectPolicies";
	/** [Read] clouddirectory:ListOutgoingTypedLinks */
	static readonly ListOutgoingTypedLinks =
		"clouddirectory:ListOutgoingTypedLinks";
	/** [Read] clouddirectory:ListPolicyAttachments */
	static readonly ListPolicyAttachments =
		"clouddirectory:ListPolicyAttachments";
	/** [List] clouddirectory:ListPublishedSchemaArns */
	static readonly ListPublishedSchemaArns =
		"clouddirectory:ListPublishedSchemaArns";
	/** [Read] clouddirectory:ListTagsForResource */
	static readonly ListTagsForResource = "clouddirectory:ListTagsForResource";
	/** [Read] clouddirectory:ListTypedLinkFacetAttributes */
	static readonly ListTypedLinkFacetAttributes =
		"clouddirectory:ListTypedLinkFacetAttributes";
	/** [Read] clouddirectory:ListTypedLinkFacetNames */
	static readonly ListTypedLinkFacetNames =
		"clouddirectory:ListTypedLinkFacetNames";
	/** [Read] clouddirectory:LookupPolicy */
	static readonly LookupPolicy = "clouddirectory:LookupPolicy";
	/** [Write] clouddirectory:PublishSchema */
	static readonly PublishSchema = "clouddirectory:PublishSchema";
	/** [Write] clouddirectory:PutSchemaFromJson */
	static readonly PutSchemaFromJson = "clouddirectory:PutSchemaFromJson";
	/** [Write] clouddirectory:RemoveFacetFromObject */
	static readonly RemoveFacetFromObject =
		"clouddirectory:RemoveFacetFromObject";
	/** [Tagging] clouddirectory:TagResource */
	static readonly TagResource = "clouddirectory:TagResource";
	/** [Tagging] clouddirectory:UntagResource */
	static readonly UntagResource = "clouddirectory:UntagResource";
	/** [Write] clouddirectory:UpdateFacet */
	static readonly UpdateFacet = "clouddirectory:UpdateFacet";
	/** [Write] clouddirectory:UpdateLinkAttributes */
	static readonly UpdateLinkAttributes = "clouddirectory:UpdateLinkAttributes";
	/** [Write] clouddirectory:UpdateObjectAttributes */
	static readonly UpdateObjectAttributes =
		"clouddirectory:UpdateObjectAttributes";
	/** [Write] clouddirectory:UpdateSchema */
	static readonly UpdateSchema = "clouddirectory:UpdateSchema";
	/** [Write] clouddirectory:UpdateTypedLinkFacet */
	static readonly UpdateTypedLinkFacet = "clouddirectory:UpdateTypedLinkFacet";
	/** [Write] clouddirectory:UpgradeAppliedSchema */
	static readonly UpgradeAppliedSchema = "clouddirectory:UpgradeAppliedSchema";
	/** [Write] clouddirectory:UpgradePublishedSchema */
	static readonly UpgradePublishedSchema =
		"clouddirectory:UpgradePublishedSchema";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		ClouddirectoryActions.BatchRead,
		ClouddirectoryActions.actionGetAppliedSchemaVersion,
		ClouddirectoryActions.actionGetDirectory,
		ClouddirectoryActions.actionGetFacet,
		ClouddirectoryActions.actionGetLinkAttributes,
		ClouddirectoryActions.actionGetObjectAttributes,
		ClouddirectoryActions.actionGetObjectInformation,
		ClouddirectoryActions.actionGetSchemaAsJson,
		ClouddirectoryActions.actionGetTypedLinkFacetInformation,
		ClouddirectoryActions.ListAttachedIndices,
		ClouddirectoryActions.ListFacetAttributes,
		ClouddirectoryActions.ListFacetNames,
		ClouddirectoryActions.ListIncomingTypedLinks,
		ClouddirectoryActions.ListIndex,
		ClouddirectoryActions.ListObjectAttributes,
		ClouddirectoryActions.ListObjectChildren,
		ClouddirectoryActions.ListObjectParentPaths,
		ClouddirectoryActions.ListObjectParents,
		ClouddirectoryActions.ListObjectPolicies,
		ClouddirectoryActions.ListOutgoingTypedLinks,
		ClouddirectoryActions.ListPolicyAttachments,
		ClouddirectoryActions.ListTagsForResource,
		ClouddirectoryActions.ListTypedLinkFacetAttributes,
		ClouddirectoryActions.ListTypedLinkFacetNames,
		ClouddirectoryActions.LookupPolicy,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		ClouddirectoryActions.AddFacetToObject,
		ClouddirectoryActions.ApplySchema,
		ClouddirectoryActions.AttachObject,
		ClouddirectoryActions.AttachPolicy,
		ClouddirectoryActions.AttachToIndex,
		ClouddirectoryActions.AttachTypedLink,
		ClouddirectoryActions.BatchWrite,
		ClouddirectoryActions.CreateDirectory,
		ClouddirectoryActions.CreateFacet,
		ClouddirectoryActions.CreateIndex,
		ClouddirectoryActions.CreateObject,
		ClouddirectoryActions.CreateSchema,
		ClouddirectoryActions.CreateTypedLinkFacet,
		ClouddirectoryActions.DeleteDirectory,
		ClouddirectoryActions.DeleteFacet,
		ClouddirectoryActions.DeleteObject,
		ClouddirectoryActions.DeleteSchema,
		ClouddirectoryActions.DeleteTypedLinkFacet,
		ClouddirectoryActions.DetachFromIndex,
		ClouddirectoryActions.DetachObject,
		ClouddirectoryActions.DetachPolicy,
		ClouddirectoryActions.DetachTypedLink,
		ClouddirectoryActions.DisableDirectory,
		ClouddirectoryActions.EnableDirectory,
		ClouddirectoryActions.PublishSchema,
		ClouddirectoryActions.PutSchemaFromJson,
		ClouddirectoryActions.RemoveFacetFromObject,
		ClouddirectoryActions.UpdateFacet,
		ClouddirectoryActions.UpdateLinkAttributes,
		ClouddirectoryActions.UpdateObjectAttributes,
		ClouddirectoryActions.UpdateSchema,
		ClouddirectoryActions.UpdateTypedLinkFacet,
		ClouddirectoryActions.UpgradeAppliedSchema,
		ClouddirectoryActions.UpgradePublishedSchema,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		ClouddirectoryActions.ListAppliedSchemaArns,
		ClouddirectoryActions.ListDevelopmentSchemaArns,
		ClouddirectoryActions.ListDirectories,
		ClouddirectoryActions.ListManagedSchemaArns,
		ClouddirectoryActions.ListPublishedSchemaArns,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		ClouddirectoryActions.TagResource,
		ClouddirectoryActions.UntagResource,
	];
}

/**
 * Properties for building a appliedSchema ARN.
 */
export interface ClouddirectoryAppliedSchemaArnProps {
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
}

/**
 * Parsed components of a appliedSchema ARN.
 */
export interface ClouddirectoryAppliedSchemaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
	/** The SchemaName component. */
	readonly schemaName: string;
	/** The Version component. */
	readonly version: string;
}

/**
 * Properties for building a developmentSchema ARN.
 */
export interface ClouddirectoryDevelopmentSchemaArnProps {
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
 * Parsed components of a developmentSchema ARN.
 */
export interface ClouddirectoryDevelopmentSchemaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SchemaName component. */
	readonly schemaName: string;
}

/**
 * Properties for building a directory ARN.
 */
export interface ClouddirectoryDirectoryArnProps {
	/** The DirectoryId component of the ARN. */
	readonly directoryId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a directory ARN.
 */
export interface ClouddirectoryDirectoryArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The DirectoryId component. */
	readonly directoryId: string;
}

/**
 * Properties for building a publishedSchema ARN.
 */
export interface ClouddirectoryPublishedSchemaArnProps {
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
}

/**
 * Parsed components of a publishedSchema ARN.
 */
export interface ClouddirectoryPublishedSchemaArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SchemaName component. */
	readonly schemaName: string;
	/** The Version component. */
	readonly version: string;
}

const AppliedSchemaArnRegex =
	/^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):directory\/(?<directoryId>[^:/?]+)\/schema\/(?<schemaName>[^:/?]+)\/(?<version>[^:/?]+)$/;
const DevelopmentSchemaArnRegex =
	/^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):schema\/development\/(?<schemaName>[^:/?]+)$/;
const DirectoryArnRegex =
	/^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):directory\/(?<directoryId>[^:/?]+)$/;
const PublishedSchemaArnRegex =
	/^arn:(?<partition>[^:]+):clouddirectory:(?<region>[^:]*):(?<account>[^:]*):schema\/published\/(?<schemaName>[^:/?]+)\/(?<version>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for clouddirectory resources.
 */
export class ClouddirectoryResources {
	/**
	 * Builds an ARN for the appliedSchema resource.
	 */
	static appliedSchema(props: ClouddirectoryAppliedSchemaArnProps): string {
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
	static parseAppliedSchemaArn(
		arn: string,
	): ClouddirectoryAppliedSchemaArnComponents {
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
	static developmentSchema(
		props: ClouddirectoryDevelopmentSchemaArnProps,
	): string {
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
	static parseDevelopmentSchemaArn(
		arn: string,
	): ClouddirectoryDevelopmentSchemaArnComponents {
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
	static directory(props: ClouddirectoryDirectoryArnProps): string {
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
	static parseDirectoryArn(arn: string): ClouddirectoryDirectoryArnComponents {
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
	static publishedSchema(props: ClouddirectoryPublishedSchemaArnProps): string {
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
	static parsePublishedSchemaArn(
		arn: string,
	): ClouddirectoryPublishedSchemaArnComponents {
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
	static readonly AddFacetToObject: string[] = [
		"clouddirectory:AddFacetToObject",
	];
	/** IAM actions required for the ApplySchema API call. */
	static readonly ApplySchema: string[] = ["clouddirectory:ApplySchema"];
	/** IAM actions required for the AttachObject API call. */
	static readonly AttachObject: string[] = ["clouddirectory:AttachObject"];
	/** IAM actions required for the AttachPolicy API call. */
	static readonly AttachPolicy: string[] = ["clouddirectory:AttachPolicy"];
	/** IAM actions required for the AttachToIndex API call. */
	static readonly AttachToIndex: string[] = ["clouddirectory:AttachToIndex"];
	/** IAM actions required for the AttachTypedLink API call. */
	static readonly AttachTypedLink: string[] = [
		"clouddirectory:AttachTypedLink",
	];
	/** IAM actions required for the BatchRead API call. */
	static readonly BatchRead: string[] = [
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
	static readonly BatchWrite: string[] = [
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
	static readonly CreateDirectory: string[] = [
		"clouddirectory:CreateDirectory",
	];
	/** IAM actions required for the CreateFacet API call. */
	static readonly CreateFacet: string[] = ["clouddirectory:CreateFacet"];
	/** IAM actions required for the CreateIndex API call. */
	static readonly CreateIndex: string[] = [
		"clouddirectory:AttachObject",
		"clouddirectory:CreateIndex",
	];
	/** IAM actions required for the CreateObject API call. */
	static readonly CreateObject: string[] = [
		"clouddirectory:AttachObject",
		"clouddirectory:CreateObject",
	];
	/** IAM actions required for the CreateSchema API call. */
	static readonly CreateSchema: string[] = ["clouddirectory:CreateSchema"];
	/** IAM actions required for the CreateTypedLinkFacet API call. */
	static readonly CreateTypedLinkFacet: string[] = [
		"clouddirectory:CreateTypedLinkFacet",
	];
	/** IAM actions required for the DeleteDirectory API call. */
	static readonly DeleteDirectory: string[] = [
		"clouddirectory:DeleteDirectory",
	];
	/** IAM actions required for the DeleteFacet API call. */
	static readonly DeleteFacet: string[] = ["clouddirectory:DeleteFacet"];
	/** IAM actions required for the DeleteObject API call. */
	static readonly DeleteObject: string[] = ["clouddirectory:DeleteObject"];
	/** IAM actions required for the DeleteSchema API call. */
	static readonly DeleteSchema: string[] = ["clouddirectory:DeleteSchema"];
	/** IAM actions required for the DeleteTypedLinkFacet API call. */
	static readonly DeleteTypedLinkFacet: string[] = [
		"clouddirectory:DeleteTypedLinkFacet",
	];
	/** IAM actions required for the DetachFromIndex API call. */
	static readonly DetachFromIndex: string[] = [
		"clouddirectory:DetachFromIndex",
	];
	/** IAM actions required for the DetachObject API call. */
	static readonly DetachObject: string[] = ["clouddirectory:DetachObject"];
	/** IAM actions required for the DetachPolicy API call. */
	static readonly DetachPolicy: string[] = ["clouddirectory:DetachPolicy"];
	/** IAM actions required for the DetachTypedLink API call. */
	static readonly DetachTypedLink: string[] = [
		"clouddirectory:DetachTypedLink",
	];
	/** IAM actions required for the DisableDirectory API call. */
	static readonly DisableDirectory: string[] = [
		"clouddirectory:DisableDirectory",
	];
	/** IAM actions required for the EnableDirectory API call. */
	static readonly EnableDirectory: string[] = [
		"clouddirectory:EnableDirectory",
	];
	/** IAM actions required for the GetAppliedSchemaVersion API call. */
	static readonly opGetAppliedSchemaVersion: string[] = [
		"clouddirectory:GetAppliedSchemaVersion",
	];
	/** IAM actions required for the GetDirectory API call. */
	static readonly opGetDirectory: string[] = ["clouddirectory:GetDirectory"];
	/** IAM actions required for the GetFacet API call. */
	static readonly opGetFacet: string[] = ["clouddirectory:GetFacet"];
	/** IAM actions required for the GetLinkAttributes API call. */
	static readonly opGetLinkAttributes: string[] = [
		"clouddirectory:GetLinkAttributes",
	];
	/** IAM actions required for the GetObjectAttributes API call. */
	static readonly opGetObjectAttributes: string[] = [
		"clouddirectory:GetObjectAttributes",
	];
	/** IAM actions required for the GetObjectInformation API call. */
	static readonly opGetObjectInformation: string[] = [
		"clouddirectory:GetObjectInformation",
	];
	/** IAM actions required for the GetSchemaAsJson API call. */
	static readonly opGetSchemaAsJson: string[] = [
		"clouddirectory:GetSchemaAsJson",
	];
	/** IAM actions required for the GetTypedLinkFacetInformation API call. */
	static readonly opGetTypedLinkFacetInformation: string[] = [
		"clouddirectory:GetTypedLinkFacetInformation",
	];
	/** IAM actions required for the ListAppliedSchemaArns API call. */
	static readonly ListAppliedSchemaArns: string[] = [
		"clouddirectory:ListAppliedSchemaArns",
	];
	/** IAM actions required for the ListAttachedIndices API call. */
	static readonly ListAttachedIndices: string[] = [
		"clouddirectory:ListAttachedIndices",
	];
	/** IAM actions required for the ListDevelopmentSchemaArns API call. */
	static readonly ListDevelopmentSchemaArns: string[] = [
		"clouddirectory:ListDevelopmentSchemaArns",
	];
	/** IAM actions required for the ListDirectories API call. */
	static readonly ListDirectories: string[] = [
		"clouddirectory:ListDirectories",
	];
	/** IAM actions required for the ListFacetAttributes API call. */
	static readonly ListFacetAttributes: string[] = [
		"clouddirectory:ListFacetAttributes",
	];
	/** IAM actions required for the ListFacetNames API call. */
	static readonly ListFacetNames: string[] = ["clouddirectory:ListFacetNames"];
	/** IAM actions required for the ListIncomingTypedLinks API call. */
	static readonly ListIncomingTypedLinks: string[] = [
		"clouddirectory:ListIncomingTypedLinks",
	];
	/** IAM actions required for the ListIndex API call. */
	static readonly ListIndex: string[] = ["clouddirectory:ListIndex"];
	/** IAM actions required for the ListManagedSchemaArns API call. */
	static readonly ListManagedSchemaArns: string[] = [
		"clouddirectory:ListManagedSchemaArns",
	];
	/** IAM actions required for the ListObjectAttributes API call. */
	static readonly ListObjectAttributes: string[] = [
		"clouddirectory:ListObjectAttributes",
	];
	/** IAM actions required for the ListObjectChildren API call. */
	static readonly ListObjectChildren: string[] = [
		"clouddirectory:ListObjectChildren",
	];
	/** IAM actions required for the ListObjectParentPaths API call. */
	static readonly ListObjectParentPaths: string[] = [
		"clouddirectory:ListObjectParentPaths",
	];
	/** IAM actions required for the ListObjectParents API call. */
	static readonly ListObjectParents: string[] = [
		"clouddirectory:ListObjectParents",
	];
	/** IAM actions required for the ListObjectPolicies API call. */
	static readonly ListObjectPolicies: string[] = [
		"clouddirectory:ListObjectPolicies",
	];
	/** IAM actions required for the ListOutgoingTypedLinks API call. */
	static readonly ListOutgoingTypedLinks: string[] = [
		"clouddirectory:ListOutgoingTypedLinks",
	];
	/** IAM actions required for the ListPolicyAttachments API call. */
	static readonly ListPolicyAttachments: string[] = [
		"clouddirectory:ListPolicyAttachments",
	];
	/** IAM actions required for the ListPublishedSchemaArns API call. */
	static readonly ListPublishedSchemaArns: string[] = [
		"clouddirectory:ListPublishedSchemaArns",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"clouddirectory:ListTagsForResource",
	];
	/** IAM actions required for the ListTypedLinkFacetAttributes API call. */
	static readonly ListTypedLinkFacetAttributes: string[] = [
		"clouddirectory:ListTypedLinkFacetAttributes",
	];
	/** IAM actions required for the ListTypedLinkFacetNames API call. */
	static readonly ListTypedLinkFacetNames: string[] = [
		"clouddirectory:ListTypedLinkFacetNames",
	];
	/** IAM actions required for the LookupPolicy API call. */
	static readonly LookupPolicy: string[] = ["clouddirectory:LookupPolicy"];
	/** IAM actions required for the PublishSchema API call. */
	static readonly PublishSchema: string[] = ["clouddirectory:PublishSchema"];
	/** IAM actions required for the PutSchemaFromJson API call. */
	static readonly PutSchemaFromJson: string[] = [
		"clouddirectory:PutSchemaFromJson",
	];
	/** IAM actions required for the RemoveFacetFromObject API call. */
	static readonly RemoveFacetFromObject: string[] = [
		"clouddirectory:RemoveFacetFromObject",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["clouddirectory:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["clouddirectory:UntagResource"];
	/** IAM actions required for the UpdateFacet API call. */
	static readonly UpdateFacet: string[] = ["clouddirectory:UpdateFacet"];
	/** IAM actions required for the UpdateLinkAttributes API call. */
	static readonly UpdateLinkAttributes: string[] = [
		"clouddirectory:UpdateLinkAttributes",
	];
	/** IAM actions required for the UpdateObjectAttributes API call. */
	static readonly UpdateObjectAttributes: string[] = [
		"clouddirectory:UpdateObjectAttributes",
	];
	/** IAM actions required for the UpdateSchema API call. */
	static readonly UpdateSchema: string[] = ["clouddirectory:UpdateSchema"];
	/** IAM actions required for the UpdateTypedLinkFacet API call. */
	static readonly UpdateTypedLinkFacet: string[] = [
		"clouddirectory:UpdateTypedLinkFacet",
	];
	/** IAM actions required for the UpgradeAppliedSchema API call. */
	static readonly UpgradeAppliedSchema: string[] = [
		"clouddirectory:UpgradeAppliedSchema",
	];
	/** IAM actions required for the UpgradePublishedSchema API call. */
	static readonly UpgradePublishedSchema: string[] = [
		"clouddirectory:UpgradePublishedSchema",
	];
}
