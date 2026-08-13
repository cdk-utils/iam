// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/finspace-api.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the finspace-api service.
 */
export class FinspaceAPIActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "finspace-api";

	/** [Read] finspace-api:GetProgrammaticAccessCredentials */
	static readonly actionGetProgrammaticAccessCredentials =
		"finspace-api:GetProgrammaticAccessCredentials";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		FinspaceAPIActions.actionGetProgrammaticAccessCredentials,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a credential ARN.
 */
export interface FinspaceAPICredentialArnProps {
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a credential ARN.
 */
export interface FinspaceAPICredentialArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
}

const CredentialArnRegex =
	/^arn:(?<partition>[^:]+):finspace-api:(?<region>[^:]*):(?<account>[^:]*):\/credentials\/programmatic$/;

/**
 * ARN builders, validators, and parsers for finspace-api resources.
 */
export class FinspaceAPIResources {
	/**
	 * Builds an ARN for the credential resource.
	 */
	static credential(props: FinspaceAPICredentialArnProps): string {
		return `arn:${props.partition ?? "aws"}:finspace-api:${props.region ?? "*"}:${props.account ?? "*"}:/credentials/programmatic`;
	}

	/**
	 * Validates whether a string is a valid ARN for the credential resource.
	 */
	static isValidCredentialArn(arn: string): boolean {
		return CredentialArnRegex.test(arn);
	}

	/**
	 * Parses a credential ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseCredentialArn(arn: string): FinspaceAPICredentialArnComponents {
		const match = CredentialArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid credential ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
		};
	}
}

/**
 * API operation to required IAM actions mapping for finspace-api.
 */
export class FinspaceAPIOperations {
	/** IAM actions required for the AssociateUserToPermissionGroup API call. */
	static readonly AssociateUserToPermissionGroup: string[] = [];
	/** IAM actions required for the CreateChangeset API call. */
	static readonly CreateChangeset: string[] = [];
	/** IAM actions required for the CreateDataView API call. */
	static readonly CreateDataView: string[] = [];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CreateDataset: string[] = [];
	/** IAM actions required for the CreatePermissionGroup API call. */
	static readonly CreatePermissionGroup: string[] = [];
	/** IAM actions required for the CreateUser API call. */
	static readonly CreateUser: string[] = [];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = [];
	/** IAM actions required for the DeletePermissionGroup API call. */
	static readonly DeletePermissionGroup: string[] = [];
	/** IAM actions required for the DisableUser API call. */
	static readonly DisableUser: string[] = [];
	/** IAM actions required for the DisassociateUserFromPermissionGroup API call. */
	static readonly DisassociateUserFromPermissionGroup: string[] = [];
	/** IAM actions required for the EnableUser API call. */
	static readonly EnableUser: string[] = [];
	/** IAM actions required for the GetChangeset API call. */
	static readonly opGetChangeset: string[] = [];
	/** IAM actions required for the GetDataView API call. */
	static readonly opGetDataView: string[] = [];
	/** IAM actions required for the GetDataset API call. */
	static readonly opGetDataset: string[] = [];
	/** IAM actions required for the GetExternalDataViewAccessDetails API call. */
	static readonly opGetExternalDataViewAccessDetails: string[] = [];
	/** IAM actions required for the GetPermissionGroup API call. */
	static readonly opGetPermissionGroup: string[] = [];
	/** IAM actions required for the GetProgrammaticAccessCredentials API call. */
	static readonly opGetProgrammaticAccessCredentials: string[] = [
		"finspace-api:GetProgrammaticAccessCredentials",
	];
	/** IAM actions required for the GetUser API call. */
	static readonly opGetUser: string[] = [];
	/** IAM actions required for the GetWorkingLocation API call. */
	static readonly opGetWorkingLocation: string[] = [];
	/** IAM actions required for the ListChangesets API call. */
	static readonly ListChangesets: string[] = [];
	/** IAM actions required for the ListDataViews API call. */
	static readonly ListDataViews: string[] = [];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = [];
	/** IAM actions required for the ListPermissionGroups API call. */
	static readonly ListPermissionGroups: string[] = [];
	/** IAM actions required for the ListPermissionGroupsByUser API call. */
	static readonly ListPermissionGroupsByUser: string[] = [];
	/** IAM actions required for the ListUsers API call. */
	static readonly ListUsers: string[] = [];
	/** IAM actions required for the ListUsersByPermissionGroup API call. */
	static readonly ListUsersByPermissionGroup: string[] = [];
	/** IAM actions required for the ResetUserPassword API call. */
	static readonly ResetUserPassword: string[] = [];
	/** IAM actions required for the UpdateChangeset API call. */
	static readonly UpdateChangeset: string[] = [];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UpdateDataset: string[] = [];
	/** IAM actions required for the UpdatePermissionGroup API call. */
	static readonly UpdatePermissionGroup: string[] = [];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UpdateUser: string[] = [];
}
