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
	static readonly GET_PROGRAMMATIC_ACCESS_CREDENTIALS =
		"finspace-api:GetProgrammaticAccessCredentials";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		FinspaceAPIActions.GET_PROGRAMMATIC_ACCESS_CREDENTIALS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const CredentialArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):finspace-api:(?<region>[^:]*):(?<account>[^:]*):/credentials/programmatic$",
);

/**
 * ARN builders, validators, and parsers for finspace-api resources.
 */
export class FinspaceAPIResources {
	/**
	 * Builds an ARN for the credential resource.
	 */
	static credential(props: {
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseCredentialArn(arn: string): {
		partition: string;
		region: string;
		account: string;
	} {
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
	static readonly ASSOCIATE_USER_TO_PERMISSION_GROUP: string[] = [];
	/** IAM actions required for the CreateChangeset API call. */
	static readonly CREATE_CHANGESET: string[] = [];
	/** IAM actions required for the CreateDataView API call. */
	static readonly CREATE_DATA_VIEW: string[] = [];
	/** IAM actions required for the CreateDataset API call. */
	static readonly CREATE_DATASET: string[] = [];
	/** IAM actions required for the CreatePermissionGroup API call. */
	static readonly CREATE_PERMISSION_GROUP: string[] = [];
	/** IAM actions required for the CreateUser API call. */
	static readonly CREATE_USER: string[] = [];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = [];
	/** IAM actions required for the DeletePermissionGroup API call. */
	static readonly DELETE_PERMISSION_GROUP: string[] = [];
	/** IAM actions required for the DisableUser API call. */
	static readonly DISABLE_USER: string[] = [];
	/** IAM actions required for the DisassociateUserFromPermissionGroup API call. */
	static readonly DISASSOCIATE_USER_FROM_PERMISSION_GROUP: string[] = [];
	/** IAM actions required for the EnableUser API call. */
	static readonly ENABLE_USER: string[] = [];
	/** IAM actions required for the GetChangeset API call. */
	static readonly GET_CHANGESET: string[] = [];
	/** IAM actions required for the GetDataView API call. */
	static readonly GET_DATA_VIEW: string[] = [];
	/** IAM actions required for the GetDataset API call. */
	static readonly GET_DATASET: string[] = [];
	/** IAM actions required for the GetExternalDataViewAccessDetails API call. */
	static readonly GET_EXTERNAL_DATA_VIEW_ACCESS_DETAILS: string[] = [];
	/** IAM actions required for the GetPermissionGroup API call. */
	static readonly GET_PERMISSION_GROUP: string[] = [];
	/** IAM actions required for the GetProgrammaticAccessCredentials API call. */
	static readonly GET_PROGRAMMATIC_ACCESS_CREDENTIALS: string[] = [
		"finspace-api:GetProgrammaticAccessCredentials",
	];
	/** IAM actions required for the GetUser API call. */
	static readonly GET_USER: string[] = [];
	/** IAM actions required for the GetWorkingLocation API call. */
	static readonly GET_WORKING_LOCATION: string[] = [];
	/** IAM actions required for the ListChangesets API call. */
	static readonly LIST_CHANGESETS: string[] = [];
	/** IAM actions required for the ListDataViews API call. */
	static readonly LIST_DATA_VIEWS: string[] = [];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = [];
	/** IAM actions required for the ListPermissionGroups API call. */
	static readonly LIST_PERMISSION_GROUPS: string[] = [];
	/** IAM actions required for the ListPermissionGroupsByUser API call. */
	static readonly LIST_PERMISSION_GROUPS_BY_USER: string[] = [];
	/** IAM actions required for the ListUsers API call. */
	static readonly LIST_USERS: string[] = [];
	/** IAM actions required for the ListUsersByPermissionGroup API call. */
	static readonly LIST_USERS_BY_PERMISSION_GROUP: string[] = [];
	/** IAM actions required for the ResetUserPassword API call. */
	static readonly RESET_USER_PASSWORD: string[] = [];
	/** IAM actions required for the UpdateChangeset API call. */
	static readonly UPDATE_CHANGESET: string[] = [];
	/** IAM actions required for the UpdateDataset API call. */
	static readonly UPDATE_DATASET: string[] = [];
	/** IAM actions required for the UpdatePermissionGroup API call. */
	static readonly UPDATE_PERMISSION_GROUP: string[] = [];
	/** IAM actions required for the UpdateUser API call. */
	static readonly UPDATE_USER: string[] = [];
}
