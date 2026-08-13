// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/cognito-sync.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the cognito-sync service.
 */
export class CognitoSyncActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "cognito-sync";

	/** [Write] cognito-sync:BulkPublish */
	static readonly BULK_PUBLISH = "cognito-sync:BulkPublish";
	/** [Write] cognito-sync:DeleteDataset */
	static readonly DELETE_DATASET = "cognito-sync:DeleteDataset";
	/** [Read] cognito-sync:DescribeDataset */
	static readonly DESCRIBE_DATASET = "cognito-sync:DescribeDataset";
	/** [Read] cognito-sync:DescribeIdentityPoolUsage */
	static readonly DESCRIBE_IDENTITY_POOL_USAGE =
		"cognito-sync:DescribeIdentityPoolUsage";
	/** [Read] cognito-sync:DescribeIdentityUsage */
	static readonly DESCRIBE_IDENTITY_USAGE =
		"cognito-sync:DescribeIdentityUsage";
	/** [Read] cognito-sync:GetBulkPublishDetails */
	static readonly GET_BULK_PUBLISH_DETAILS =
		"cognito-sync:GetBulkPublishDetails";
	/** [Read] cognito-sync:GetCognitoEvents */
	static readonly GET_COGNITO_EVENTS = "cognito-sync:GetCognitoEvents";
	/** [Read] cognito-sync:GetIdentityPoolConfiguration */
	static readonly GET_IDENTITY_POOL_CONFIGURATION =
		"cognito-sync:GetIdentityPoolConfiguration";
	/** [List] cognito-sync:ListDatasets */
	static readonly LIST_DATASETS = "cognito-sync:ListDatasets";
	/** [Read] cognito-sync:ListIdentityPoolUsage */
	static readonly LIST_IDENTITY_POOL_USAGE =
		"cognito-sync:ListIdentityPoolUsage";
	/** [Read] cognito-sync:ListRecords */
	static readonly LIST_RECORDS = "cognito-sync:ListRecords";
	/** [Read] cognito-sync:QueryRecords */
	static readonly QUERY_RECORDS = "cognito-sync:QueryRecords";
	/** [Write] cognito-sync:RegisterDevice */
	static readonly REGISTER_DEVICE = "cognito-sync:RegisterDevice";
	/** [Write] cognito-sync:SetCognitoEvents */
	static readonly SET_COGNITO_EVENTS = "cognito-sync:SetCognitoEvents";
	/** [Write] cognito-sync:SetDatasetConfiguration */
	static readonly SET_DATASET_CONFIGURATION =
		"cognito-sync:SetDatasetConfiguration";
	/** [Write] cognito-sync:SetIdentityPoolConfiguration */
	static readonly SET_IDENTITY_POOL_CONFIGURATION =
		"cognito-sync:SetIdentityPoolConfiguration";
	/** [Write] cognito-sync:SubscribeToDataset */
	static readonly SUBSCRIBE_TO_DATASET = "cognito-sync:SubscribeToDataset";
	/** [Write] cognito-sync:UnsubscribeFromDataset */
	static readonly UNSUBSCRIBE_FROM_DATASET =
		"cognito-sync:UnsubscribeFromDataset";
	/** [Write] cognito-sync:UpdateRecords */
	static readonly UPDATE_RECORDS = "cognito-sync:UpdateRecords";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		CognitoSyncActions.DESCRIBE_DATASET,
		CognitoSyncActions.DESCRIBE_IDENTITY_POOL_USAGE,
		CognitoSyncActions.DESCRIBE_IDENTITY_USAGE,
		CognitoSyncActions.GET_BULK_PUBLISH_DETAILS,
		CognitoSyncActions.GET_COGNITO_EVENTS,
		CognitoSyncActions.GET_IDENTITY_POOL_CONFIGURATION,
		CognitoSyncActions.LIST_IDENTITY_POOL_USAGE,
		CognitoSyncActions.LIST_RECORDS,
		CognitoSyncActions.QUERY_RECORDS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		CognitoSyncActions.BULK_PUBLISH,
		CognitoSyncActions.DELETE_DATASET,
		CognitoSyncActions.REGISTER_DEVICE,
		CognitoSyncActions.SET_COGNITO_EVENTS,
		CognitoSyncActions.SET_DATASET_CONFIGURATION,
		CognitoSyncActions.SET_IDENTITY_POOL_CONFIGURATION,
		CognitoSyncActions.SUBSCRIBE_TO_DATASET,
		CognitoSyncActions.UNSUBSCRIBE_FROM_DATASET,
		CognitoSyncActions.UPDATE_RECORDS,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [CognitoSyncActions.LIST_DATASETS];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

const DatasetArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cognito-sync:(?<region>[^:]*):(?<account>[^:]*):identitypool/(?<identityPoolId>[^:/?]+)/identity/(?<identityId>[^:/?]+)/dataset/(?<datasetName>[^:/?]+)$",
);
const IdentityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cognito-sync:(?<region>[^:]*):(?<account>[^:]*):identitypool/(?<identityPoolId>[^:/?]+)/identity/(?<identityId>[^:/?]+)$",
);
const IdentitypoolArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):cognito-sync:(?<region>[^:]*):(?<account>[^:]*):identitypool/(?<identityPoolId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for cognito-sync resources.
 */
export class CognitoSyncResources {
	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: {
		/** The IdentityPoolId component of the ARN. */
		readonly identityPoolId: string;
		/** The IdentityId component of the ARN. */
		readonly identityId: string;
		/** The DatasetName component of the ARN. */
		readonly datasetName: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cognito-sync:${props.region ?? "*"}:${props.account ?? "*"}:identitypool/${props.identityPoolId}/identity/${props.identityId}/dataset/${props.datasetName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the dataset resource.
	 */
	static isValidDatasetArn(arn: string): boolean {
		return DatasetArnRegex.test(arn);
	}

	/**
	 * Parses a dataset ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDatasetArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identityPoolId: string;
		identityId: string;
		datasetName: string;
	} {
		const match = DatasetArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid dataset ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identityPoolId: match.groups!.identityPoolId,
			identityId: match.groups!.identityId,
			datasetName: match.groups!.datasetName,
		};
	}

	/**
	 * Builds an ARN for the identity resource.
	 */
	static identity(props: {
		/** The IdentityPoolId component of the ARN. */
		readonly identityPoolId: string;
		/** The IdentityId component of the ARN. */
		readonly identityId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cognito-sync:${props.region ?? "*"}:${props.account ?? "*"}:identitypool/${props.identityPoolId}/identity/${props.identityId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identity resource.
	 */
	static isValidIdentityArn(arn: string): boolean {
		return IdentityArnRegex.test(arn);
	}

	/**
	 * Parses a identity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identityPoolId: string;
		identityId: string;
	} {
		const match = IdentityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identityPoolId: match.groups!.identityPoolId,
			identityId: match.groups!.identityId,
		};
	}

	/**
	 * Builds an ARN for the identitypool resource.
	 */
	static identitypool(props: {
		/** The IdentityPoolId component of the ARN. */
		readonly identityPoolId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:cognito-sync:${props.region ?? "*"}:${props.account ?? "*"}:identitypool/${props.identityPoolId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the identitypool resource.
	 */
	static isValidIdentitypoolArn(arn: string): boolean {
		return IdentitypoolArnRegex.test(arn);
	}

	/**
	 * Parses a identitypool ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseIdentitypoolArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		identityPoolId: string;
	} {
		const match = IdentitypoolArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid identitypool ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			identityPoolId: match.groups!.identityPoolId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for cognito-sync.
 */
export class CognitoSyncOperations {
	/** IAM actions required for the BulkPublish API call. */
	static readonly BULK_PUBLISH: string[] = ["cognito-sync:BulkPublish"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DELETE_DATASET: string[] = ["cognito-sync:DeleteDataset"];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DESCRIBE_DATASET: string[] = ["cognito-sync:DescribeDataset"];
	/** IAM actions required for the DescribeIdentityPoolUsage API call. */
	static readonly DESCRIBE_IDENTITY_POOL_USAGE: string[] = [
		"cognito-sync:DescribeIdentityPoolUsage",
	];
	/** IAM actions required for the DescribeIdentityUsage API call. */
	static readonly DESCRIBE_IDENTITY_USAGE: string[] = [
		"cognito-sync:DescribeIdentityUsage",
	];
	/** IAM actions required for the GetBulkPublishDetails API call. */
	static readonly GET_BULK_PUBLISH_DETAILS: string[] = [
		"cognito-sync:GetBulkPublishDetails",
	];
	/** IAM actions required for the GetCognitoEvents API call. */
	static readonly GET_COGNITO_EVENTS: string[] = [
		"cognito-sync:GetCognitoEvents",
	];
	/** IAM actions required for the GetIdentityPoolConfiguration API call. */
	static readonly GET_IDENTITY_POOL_CONFIGURATION: string[] = [
		"cognito-sync:GetIdentityPoolConfiguration",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly LIST_DATASETS: string[] = ["cognito-sync:ListDatasets"];
	/** IAM actions required for the ListIdentityPoolUsage API call. */
	static readonly LIST_IDENTITY_POOL_USAGE: string[] = [
		"cognito-sync:ListIdentityPoolUsage",
	];
	/** IAM actions required for the ListRecords API call. */
	static readonly LIST_RECORDS: string[] = ["cognito-sync:ListRecords"];
	/** IAM actions required for the RegisterDevice API call. */
	static readonly REGISTER_DEVICE: string[] = ["cognito-sync:RegisterDevice"];
	/** IAM actions required for the SetCognitoEvents API call. */
	static readonly SET_COGNITO_EVENTS: string[] = [
		"cognito-sync:SetCognitoEvents",
	];
	/** IAM actions required for the SetIdentityPoolConfiguration API call. */
	static readonly SET_IDENTITY_POOL_CONFIGURATION: string[] = [
		"iam:PassRole",
		"cognito-sync:SetIdentityPoolConfiguration",
	];
	/** IAM actions required for the SubscribeToDataset API call. */
	static readonly SUBSCRIBE_TO_DATASET: string[] = [
		"cognito-sync:SubscribeToDataset",
	];
	/** IAM actions required for the UnsubscribeFromDataset API call. */
	static readonly UNSUBSCRIBE_FROM_DATASET: string[] = [
		"cognito-sync:UnsubscribeFromDataset",
	];
	/** IAM actions required for the UpdateRecords API call. */
	static readonly UPDATE_RECORDS: string[] = ["cognito-sync:UpdateRecords"];
}
