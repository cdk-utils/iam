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
	static readonly BulkPublish = "cognito-sync:BulkPublish";
	/** [Write] cognito-sync:DeleteDataset */
	static readonly DeleteDataset = "cognito-sync:DeleteDataset";
	/** [Read] cognito-sync:DescribeDataset */
	static readonly DescribeDataset = "cognito-sync:DescribeDataset";
	/** [Read] cognito-sync:DescribeIdentityPoolUsage */
	static readonly DescribeIdentityPoolUsage =
		"cognito-sync:DescribeIdentityPoolUsage";
	/** [Read] cognito-sync:DescribeIdentityUsage */
	static readonly DescribeIdentityUsage = "cognito-sync:DescribeIdentityUsage";
	/** [Read] cognito-sync:GetBulkPublishDetails */
	static readonly actionGetBulkPublishDetails =
		"cognito-sync:GetBulkPublishDetails";
	/** [Read] cognito-sync:GetCognitoEvents */
	static readonly actionGetCognitoEvents = "cognito-sync:GetCognitoEvents";
	/** [Read] cognito-sync:GetIdentityPoolConfiguration */
	static readonly actionGetIdentityPoolConfiguration =
		"cognito-sync:GetIdentityPoolConfiguration";
	/** [List] cognito-sync:ListDatasets */
	static readonly ListDatasets = "cognito-sync:ListDatasets";
	/** [Read] cognito-sync:ListIdentityPoolUsage */
	static readonly ListIdentityPoolUsage = "cognito-sync:ListIdentityPoolUsage";
	/** [Read] cognito-sync:ListRecords */
	static readonly ListRecords = "cognito-sync:ListRecords";
	/** [Read] cognito-sync:QueryRecords */
	static readonly QueryRecords = "cognito-sync:QueryRecords";
	/** [Write] cognito-sync:RegisterDevice */
	static readonly RegisterDevice = "cognito-sync:RegisterDevice";
	/** [Write] cognito-sync:SetCognitoEvents */
	static readonly actionSetCognitoEvents = "cognito-sync:SetCognitoEvents";
	/** [Write] cognito-sync:SetDatasetConfiguration */
	static readonly actionSetDatasetConfiguration =
		"cognito-sync:SetDatasetConfiguration";
	/** [Write] cognito-sync:SetIdentityPoolConfiguration */
	static readonly actionSetIdentityPoolConfiguration =
		"cognito-sync:SetIdentityPoolConfiguration";
	/** [Write] cognito-sync:SubscribeToDataset */
	static readonly SubscribeToDataset = "cognito-sync:SubscribeToDataset";
	/** [Write] cognito-sync:UnsubscribeFromDataset */
	static readonly UnsubscribeFromDataset =
		"cognito-sync:UnsubscribeFromDataset";
	/** [Write] cognito-sync:UpdateRecords */
	static readonly UpdateRecords = "cognito-sync:UpdateRecords";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		CognitoSyncActions.DescribeDataset,
		CognitoSyncActions.DescribeIdentityPoolUsage,
		CognitoSyncActions.DescribeIdentityUsage,
		CognitoSyncActions.actionGetBulkPublishDetails,
		CognitoSyncActions.actionGetCognitoEvents,
		CognitoSyncActions.actionGetIdentityPoolConfiguration,
		CognitoSyncActions.ListIdentityPoolUsage,
		CognitoSyncActions.ListRecords,
		CognitoSyncActions.QueryRecords,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		CognitoSyncActions.BulkPublish,
		CognitoSyncActions.DeleteDataset,
		CognitoSyncActions.RegisterDevice,
		CognitoSyncActions.actionSetCognitoEvents,
		CognitoSyncActions.actionSetDatasetConfiguration,
		CognitoSyncActions.actionSetIdentityPoolConfiguration,
		CognitoSyncActions.SubscribeToDataset,
		CognitoSyncActions.UnsubscribeFromDataset,
		CognitoSyncActions.UpdateRecords,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [CognitoSyncActions.ListDatasets];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Properties for building a dataset ARN.
 */
export interface CognitoSyncDatasetArnProps {
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
}

/**
 * Parsed components of a dataset ARN.
 */
export interface CognitoSyncDatasetArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityPoolId component. */
	readonly identityPoolId: string;
	/** The IdentityId component. */
	readonly identityId: string;
	/** The DatasetName component. */
	readonly datasetName: string;
}

/**
 * Properties for building a identity ARN.
 */
export interface CognitoSyncIdentityArnProps {
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
}

/**
 * Parsed components of a identity ARN.
 */
export interface CognitoSyncIdentityArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityPoolId component. */
	readonly identityPoolId: string;
	/** The IdentityId component. */
	readonly identityId: string;
}

/**
 * Properties for building a identitypool ARN.
 */
export interface CognitoSyncIdentitypoolArnProps {
	/** The IdentityPoolId component of the ARN. */
	readonly identityPoolId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a identitypool ARN.
 */
export interface CognitoSyncIdentitypoolArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The IdentityPoolId component. */
	readonly identityPoolId: string;
}

const DatasetArnRegex =
	/^arn:(?<partition>[^:]+):cognito-sync:(?<region>[^:]*):(?<account>[^:]*):identitypool\/(?<identityPoolId>[^:/?]+)\/identity\/(?<identityId>[^:/?]+)\/dataset\/(?<datasetName>[^:/?]+)$/;
const IdentityArnRegex =
	/^arn:(?<partition>[^:]+):cognito-sync:(?<region>[^:]*):(?<account>[^:]*):identitypool\/(?<identityPoolId>[^:/?]+)\/identity\/(?<identityId>[^:/?]+)$/;
const IdentitypoolArnRegex =
	/^arn:(?<partition>[^:]+):cognito-sync:(?<region>[^:]*):(?<account>[^:]*):identitypool\/(?<identityPoolId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for cognito-sync resources.
 */
export class CognitoSyncResources {
	/**
	 * Builds an ARN for the dataset resource.
	 */
	static dataset(props: CognitoSyncDatasetArnProps): string {
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
	static parseDatasetArn(arn: string): CognitoSyncDatasetArnComponents {
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
	static identity(props: CognitoSyncIdentityArnProps): string {
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
	static parseIdentityArn(arn: string): CognitoSyncIdentityArnComponents {
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
	static identitypool(props: CognitoSyncIdentitypoolArnProps): string {
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
	static parseIdentitypoolArn(
		arn: string,
	): CognitoSyncIdentitypoolArnComponents {
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
	static readonly BulkPublish: string[] = ["cognito-sync:BulkPublish"];
	/** IAM actions required for the DeleteDataset API call. */
	static readonly DeleteDataset: string[] = ["cognito-sync:DeleteDataset"];
	/** IAM actions required for the DescribeDataset API call. */
	static readonly DescribeDataset: string[] = ["cognito-sync:DescribeDataset"];
	/** IAM actions required for the DescribeIdentityPoolUsage API call. */
	static readonly DescribeIdentityPoolUsage: string[] = [
		"cognito-sync:DescribeIdentityPoolUsage",
	];
	/** IAM actions required for the DescribeIdentityUsage API call. */
	static readonly DescribeIdentityUsage: string[] = [
		"cognito-sync:DescribeIdentityUsage",
	];
	/** IAM actions required for the GetBulkPublishDetails API call. */
	static readonly opGetBulkPublishDetails: string[] = [
		"cognito-sync:GetBulkPublishDetails",
	];
	/** IAM actions required for the GetCognitoEvents API call. */
	static readonly opGetCognitoEvents: string[] = [
		"cognito-sync:GetCognitoEvents",
	];
	/** IAM actions required for the GetIdentityPoolConfiguration API call. */
	static readonly opGetIdentityPoolConfiguration: string[] = [
		"cognito-sync:GetIdentityPoolConfiguration",
	];
	/** IAM actions required for the ListDatasets API call. */
	static readonly ListDatasets: string[] = ["cognito-sync:ListDatasets"];
	/** IAM actions required for the ListIdentityPoolUsage API call. */
	static readonly ListIdentityPoolUsage: string[] = [
		"cognito-sync:ListIdentityPoolUsage",
	];
	/** IAM actions required for the ListRecords API call. */
	static readonly ListRecords: string[] = ["cognito-sync:ListRecords"];
	/** IAM actions required for the RegisterDevice API call. */
	static readonly RegisterDevice: string[] = ["cognito-sync:RegisterDevice"];
	/** IAM actions required for the SetCognitoEvents API call. */
	static readonly opSetCognitoEvents: string[] = [
		"cognito-sync:SetCognitoEvents",
	];
	/** IAM actions required for the SetIdentityPoolConfiguration API call. */
	static readonly opSetIdentityPoolConfiguration: string[] = [
		"iam:PassRole",
		"cognito-sync:SetIdentityPoolConfiguration",
	];
	/** IAM actions required for the SubscribeToDataset API call. */
	static readonly SubscribeToDataset: string[] = [
		"cognito-sync:SubscribeToDataset",
	];
	/** IAM actions required for the UnsubscribeFromDataset API call. */
	static readonly UnsubscribeFromDataset: string[] = [
		"cognito-sync:UnsubscribeFromDataset",
	];
	/** IAM actions required for the UpdateRecords API call. */
	static readonly UpdateRecords: string[] = ["cognito-sync:UpdateRecords"];
}
