/**
 * Types for the AWS Service Authorization Reference API responses.
 *
 * List endpoint: https://servicereference.us-east-1.amazonaws.com/
 * Detail endpoint: https://servicereference.us-east-1.amazonaws.com/v1/{service}/{service}.json
 */

// =============================================================================
// Service Reference List (index endpoint)
// =============================================================================

/**
 * A single entry in the service reference list.
 * Represents one AWS service with its metadata URL and last-modified timestamp.
 */
export interface ServiceReferenceEntry {
	/** The service identifier (e.g., "dynamodb", "s3", "lambda"). */
	readonly service: string;
	/** The full URL to fetch this service's detail JSON. */
	readonly url: string;
	/** Unix timestamp (seconds) of the last modification. */
	readonly modified: number;
}

/**
 * The full response from the service reference list endpoint.
 * An array of all available AWS services with their metadata.
 */
export type ServiceReferenceList = ServiceReferenceEntry[];

// =============================================================================
// Service Detail (per-service endpoint)
// =============================================================================

/**
 * Properties annotating an IAM action's access level classification.
 */
export interface ActionAnnotationProperties {
	/** Whether the action returns a list of resources. */
	readonly IsList: boolean;
	/** Whether the action grants permission management capabilities. */
	readonly IsPermissionManagement: boolean;
	/** Whether the action is used solely for tagging operations. */
	readonly IsTaggingOnly: boolean;
	/** Whether the action performs write operations. */
	readonly IsWrite: boolean;
}

/**
 * Annotations attached to an IAM action providing classification metadata.
 */
export interface ActionAnnotations {
	/** Access level classification properties. */
	readonly Properties: ActionAnnotationProperties;
}

/**
 * A reference to a resource type used by an action.
 */
export interface ActionResourceReference {
	/** The resource type name (e.g., "table", "bucket"). */
	readonly Name: string;
}

/**
 * Indicates which AWS features support this action.
 */
export interface ActionSupportedBy {
	/** Whether IAM Access Analyzer can generate policies using this action. */
	readonly "IAM Access Analyzer Policy Generation": boolean;
	/** Whether IAM Action Last Accessed tracks usage of this action. */
	readonly "IAM Action Last Accessed": boolean;
}

/**
 * An IAM action for a service (e.g., "GetObject", "PutItem").
 */
export interface ServiceAction {
	/** The action name without the service prefix (e.g., "GetObject"). */
	readonly Name: string;
	/** Condition keys that can be used specifically with this action. */
	readonly ActionConditionKeys?: string[];
	/** Access level and classification annotations. */
	readonly Annotations?: ActionAnnotations;
	/** Resource types this action can be scoped to. */
	readonly Resources?: ActionResourceReference[];
	/** Which AWS features support this action. */
	readonly SupportedBy?: ActionSupportedBy;
}

/**
 * A condition key available for the service.
 */
export interface ServiceConditionKey {
	/** The full condition key name (e.g., "aws:RequestTag/${TagKey}", "dynamodb:Attributes"). */
	readonly Name: string;
	/** The value types this condition key accepts (e.g., ["String"], ["Numeric"]). */
	readonly Types: string[];
}

/**
 * A reference to an authorized action within an API operation.
 */
export interface OperationAuthorizedAction {
	/** The IAM action name (e.g., "PartiQLDelete"). */
	readonly Name: string;
	/** The service that owns this action (e.g., "dynamodb"). */
	readonly Service: string;
}

/**
 * SDK method mapping for an API operation.
 */
export interface OperationSDKMapping {
	/** The SDK client/service name (e.g., "s3", "dynamodb"). */
	readonly Name: string;
	/** The SDK method name (e.g., "batch_execute_statement"). */
	readonly Method: string;
	/** The SDK package (e.g., "Boto3"). */
	readonly Package: string;
}

/**
 * An API operation and its IAM authorization mapping.
 * Links SDK methods to the IAM actions they require.
 */
export interface ServiceOperation {
	/** The API operation name (e.g., "BatchExecuteStatement"). */
	readonly Name: string;
	/** IAM actions required to authorize this operation. */
	readonly AuthorizedActions?: OperationAuthorizedAction[];
	/** SDK method mappings for this operation. */
	readonly SDK?: OperationSDKMapping[];
}

/**
 * A resource type defined by the service.
 */
export interface ServiceResource {
	/** The resource type name (e.g., "table", "bucket", "backup"). */
	readonly Name: string;
	/** ARN format patterns for this resource type. */
	readonly ARNFormats?: string[];
	/** Condition keys that can be used when this resource is in the request. */
	readonly ConditionKeys?: string[];
}

/**
 * The full response from a service detail endpoint.
 * Contains all IAM-related metadata for a single AWS service.
 */
export interface ServiceDetail {
	/** The service identifier (e.g., "dynamodb"). */
	readonly Name: string;
	/** The schema version (e.g., "v1.4"). */
	readonly Version: string;
	/** All IAM actions defined by this service. */
	readonly Actions: ServiceAction[];
	/** All condition keys available for this service. */
	readonly ConditionKeys: ServiceConditionKey[];
	/** API operations and their IAM action mappings. */
	readonly Operations: ServiceOperation[];
	/** Resource types defined by this service. */
	readonly Resources: ServiceResource[];
}
