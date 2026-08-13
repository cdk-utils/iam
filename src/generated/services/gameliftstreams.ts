// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/gameliftstreams.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the gameliftstreams service.
 */
export class GameliftstreamsActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "gameliftstreams";

	/** [Write] gameliftstreams:AddStreamGroupLocations */
	static readonly AddStreamGroupLocations =
		"gameliftstreams:AddStreamGroupLocations";
	/** [Write] gameliftstreams:AssociateApplications */
	static readonly AssociateApplications =
		"gameliftstreams:AssociateApplications";
	/** [Write] gameliftstreams:CreateApplication */
	static readonly CreateApplication = "gameliftstreams:CreateApplication";
	/** [Write] gameliftstreams:CreateStreamGroup */
	static readonly CreateStreamGroup = "gameliftstreams:CreateStreamGroup";
	/** [Write] gameliftstreams:CreateStreamSessionAdminShell */
	static readonly CreateStreamSessionAdminShell =
		"gameliftstreams:CreateStreamSessionAdminShell";
	/** [Write] gameliftstreams:CreateStreamSessionConnection */
	static readonly CreateStreamSessionConnection =
		"gameliftstreams:CreateStreamSessionConnection";
	/** [Write] gameliftstreams:CreateStreamUrl */
	static readonly CreateStreamUrl = "gameliftstreams:CreateStreamUrl";
	/** [Write] gameliftstreams:DeleteApplication */
	static readonly DeleteApplication = "gameliftstreams:DeleteApplication";
	/** [Write] gameliftstreams:DeleteStreamGroup */
	static readonly DeleteStreamGroup = "gameliftstreams:DeleteStreamGroup";
	/** [Write] gameliftstreams:DisassociateApplications */
	static readonly DisassociateApplications =
		"gameliftstreams:DisassociateApplications";
	/** [Write] gameliftstreams:ExportStreamSessionFiles */
	static readonly ExportStreamSessionFiles =
		"gameliftstreams:ExportStreamSessionFiles";
	/** [Read] gameliftstreams:GetApplication */
	static readonly actionGetApplication = "gameliftstreams:GetApplication";
	/** [Read] gameliftstreams:GetStreamGroup */
	static readonly actionGetStreamGroup = "gameliftstreams:GetStreamGroup";
	/** [Read] gameliftstreams:GetStreamSession */
	static readonly actionGetStreamSession = "gameliftstreams:GetStreamSession";
	/** [Read] gameliftstreams:GetStreamUrl */
	static readonly actionGetStreamUrl = "gameliftstreams:GetStreamUrl";
	/** [List] gameliftstreams:ListApplicationShaderCaches */
	static readonly ListApplicationShaderCaches =
		"gameliftstreams:ListApplicationShaderCaches";
	/** [List] gameliftstreams:ListApplications */
	static readonly ListApplications = "gameliftstreams:ListApplications";
	/** [List] gameliftstreams:ListStreamGroups */
	static readonly ListStreamGroups = "gameliftstreams:ListStreamGroups";
	/** [Read] gameliftstreams:ListStreamSessions */
	static readonly ListStreamSessions = "gameliftstreams:ListStreamSessions";
	/** [Read] gameliftstreams:ListStreamSessionsByAccount */
	static readonly ListStreamSessionsByAccount =
		"gameliftstreams:ListStreamSessionsByAccount";
	/** [List] gameliftstreams:ListStreamUrls */
	static readonly ListStreamUrls = "gameliftstreams:ListStreamUrls";
	/** [Read] gameliftstreams:ListTagsForResource */
	static readonly ListTagsForResource = "gameliftstreams:ListTagsForResource";
	/** [Write] gameliftstreams:RemoveStreamGroupLocations */
	static readonly RemoveStreamGroupLocations =
		"gameliftstreams:RemoveStreamGroupLocations";
	/** [Write] gameliftstreams:RevokeStreamUrl */
	static readonly RevokeStreamUrl = "gameliftstreams:RevokeStreamUrl";
	/** [Write] gameliftstreams:StartStreamSession */
	static readonly StartStreamSession = "gameliftstreams:StartStreamSession";
	/** [Tagging] gameliftstreams:TagResource */
	static readonly TagResource = "gameliftstreams:TagResource";
	/** [Write] gameliftstreams:TerminateStreamSession */
	static readonly TerminateStreamSession =
		"gameliftstreams:TerminateStreamSession";
	/** [Tagging] gameliftstreams:UntagResource */
	static readonly UntagResource = "gameliftstreams:UntagResource";
	/** [Write] gameliftstreams:UpdateApplication */
	static readonly UpdateApplication = "gameliftstreams:UpdateApplication";
	/** [Write] gameliftstreams:UpdateStreamGroup */
	static readonly UpdateStreamGroup = "gameliftstreams:UpdateStreamGroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		GameliftstreamsActions.actionGetApplication,
		GameliftstreamsActions.actionGetStreamGroup,
		GameliftstreamsActions.actionGetStreamSession,
		GameliftstreamsActions.actionGetStreamUrl,
		GameliftstreamsActions.ListStreamSessions,
		GameliftstreamsActions.ListStreamSessionsByAccount,
		GameliftstreamsActions.ListTagsForResource,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		GameliftstreamsActions.AddStreamGroupLocations,
		GameliftstreamsActions.AssociateApplications,
		GameliftstreamsActions.CreateApplication,
		GameliftstreamsActions.CreateStreamGroup,
		GameliftstreamsActions.CreateStreamSessionAdminShell,
		GameliftstreamsActions.CreateStreamSessionConnection,
		GameliftstreamsActions.CreateStreamUrl,
		GameliftstreamsActions.DeleteApplication,
		GameliftstreamsActions.DeleteStreamGroup,
		GameliftstreamsActions.DisassociateApplications,
		GameliftstreamsActions.ExportStreamSessionFiles,
		GameliftstreamsActions.RemoveStreamGroupLocations,
		GameliftstreamsActions.RevokeStreamUrl,
		GameliftstreamsActions.StartStreamSession,
		GameliftstreamsActions.TerminateStreamSession,
		GameliftstreamsActions.UpdateApplication,
		GameliftstreamsActions.UpdateStreamGroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		GameliftstreamsActions.ListApplicationShaderCaches,
		GameliftstreamsActions.ListApplications,
		GameliftstreamsActions.ListStreamGroups,
		GameliftstreamsActions.ListStreamUrls,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		GameliftstreamsActions.TagResource,
		GameliftstreamsActions.UntagResource,
	];
}

/**
 * Properties for building a application ARN.
 */
export interface GameliftstreamsApplicationArnProps {
	/** The ApplicationId component of the ARN. */
	readonly applicationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a application ARN.
 */
export interface GameliftstreamsApplicationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ApplicationId component. */
	readonly applicationId: string;
}

/**
 * Properties for building a stream group ARN.
 */
export interface GameliftstreamsStreamGroupArnProps {
	/** The StreamGroupId component of the ARN. */
	readonly streamGroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a stream group ARN.
 */
export interface GameliftstreamsStreamGroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The StreamGroupId component. */
	readonly streamGroupId: string;
}

const ApplicationArnRegex =
	/^arn:(?<partition>[^:]+):gameliftstreams:(?<region>[^:]*):(?<account>[^:]*):application\/(?<applicationId>[^:/?]+)$/;
const StreamGroupArnRegex =
	/^arn:(?<partition>[^:]+):gameliftstreams:(?<region>[^:]*):(?<account>[^:]*):streamgroup\/(?<streamGroupId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for gameliftstreams resources.
 */
export class GameliftstreamsResources {
	/**
	 * Builds an ARN for the application resource.
	 */
	static application(props: GameliftstreamsApplicationArnProps): string {
		return `arn:${props.partition ?? "aws"}:gameliftstreams:${props.region ?? "*"}:${props.account ?? "*"}:application/${props.applicationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the application resource.
	 */
	static isValidApplicationArn(arn: string): boolean {
		return ApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a application ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseApplicationArn(
		arn: string,
	): GameliftstreamsApplicationArnComponents {
		const match = ApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid application ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			applicationId: match.groups!.applicationId,
		};
	}

	/**
	 * Builds an ARN for the stream group resource.
	 */
	static streamGroup(props: GameliftstreamsStreamGroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:gameliftstreams:${props.region ?? "*"}:${props.account ?? "*"}:streamgroup/${props.streamGroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the stream group resource.
	 */
	static isValidStreamGroupArn(arn: string): boolean {
		return StreamGroupArnRegex.test(arn);
	}

	/**
	 * Parses a stream group ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseStreamGroupArn(
		arn: string,
	): GameliftstreamsStreamGroupArnComponents {
		const match = StreamGroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid stream group ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			streamGroupId: match.groups!.streamGroupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for gameliftstreams.
 */
export class GameliftstreamsOperations {
	/** IAM actions required for the AddStreamGroupLocations API call. */
	static readonly AddStreamGroupLocations: string[] = [
		"gameliftstreams:AddStreamGroupLocations",
	];
	/** IAM actions required for the AssociateApplications API call. */
	static readonly AssociateApplications: string[] = [
		"gameliftstreams:AssociateApplications",
	];
	/** IAM actions required for the CreateApplication API call. */
	static readonly CreateApplication: string[] = [
		"gameliftstreams:CreateApplication",
		"gameliftstreams:TagResource",
	];
	/** IAM actions required for the CreateStreamGroup API call. */
	static readonly CreateStreamGroup: string[] = [
		"gameliftstreams:AssociateApplications",
		"gameliftstreams:CreateStreamGroup",
		"gameliftstreams:TagResource",
	];
	/** IAM actions required for the CreateStreamSessionAdminShell API call. */
	static readonly CreateStreamSessionAdminShell: string[] = [
		"gameliftstreams:CreateStreamSessionAdminShell",
	];
	/** IAM actions required for the CreateStreamSessionConnection API call. */
	static readonly CreateStreamSessionConnection: string[] = [
		"gameliftstreams:CreateStreamSessionConnection",
	];
	/** IAM actions required for the CreateStreamUrl API call. */
	static readonly CreateStreamUrl: string[] = [];
	/** IAM actions required for the DeleteApplication API call. */
	static readonly DeleteApplication: string[] = [
		"gameliftstreams:DeleteApplication",
	];
	/** IAM actions required for the DeleteStreamGroup API call. */
	static readonly DeleteStreamGroup: string[] = [
		"gameliftstreams:DeleteStreamGroup",
	];
	/** IAM actions required for the DisassociateApplications API call. */
	static readonly DisassociateApplications: string[] = [
		"gameliftstreams:DisassociateApplications",
	];
	/** IAM actions required for the ExportStreamSessionFiles API call. */
	static readonly ExportStreamSessionFiles: string[] = [
		"gameliftstreams:ExportStreamSessionFiles",
	];
	/** IAM actions required for the GetApplication API call. */
	static readonly opGetApplication: string[] = [
		"gameliftstreams:GetApplication",
	];
	/** IAM actions required for the GetStreamGroup API call. */
	static readonly opGetStreamGroup: string[] = [
		"gameliftstreams:GetStreamGroup",
	];
	/** IAM actions required for the GetStreamSession API call. */
	static readonly opGetStreamSession: string[] = [
		"gameliftstreams:GetStreamSession",
	];
	/** IAM actions required for the GetStreamUrl API call. */
	static readonly opGetStreamUrl: string[] = ["gameliftstreams:GetStreamUrl"];
	/** IAM actions required for the ListApplicationShaderCaches API call. */
	static readonly ListApplicationShaderCaches: string[] = [
		"gameliftstreams:ListApplicationShaderCaches",
	];
	/** IAM actions required for the ListApplications API call. */
	static readonly ListApplications: string[] = [
		"gameliftstreams:ListApplications",
	];
	/** IAM actions required for the ListStreamGroups API call. */
	static readonly ListStreamGroups: string[] = [
		"gameliftstreams:ListStreamGroups",
	];
	/** IAM actions required for the ListStreamSessions API call. */
	static readonly ListStreamSessions: string[] = [
		"gameliftstreams:ListStreamSessions",
	];
	/** IAM actions required for the ListStreamSessionsByAccount API call. */
	static readonly ListStreamSessionsByAccount: string[] = [
		"gameliftstreams:ListStreamSessionsByAccount",
	];
	/** IAM actions required for the ListStreamUrls API call. */
	static readonly ListStreamUrls: string[] = ["gameliftstreams:ListStreamUrls"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"gameliftstreams:ListTagsForResource",
	];
	/** IAM actions required for the RemoveStreamGroupLocations API call. */
	static readonly RemoveStreamGroupLocations: string[] = [
		"gameliftstreams:RemoveStreamGroupLocations",
	];
	/** IAM actions required for the RevokeStreamUrl API call. */
	static readonly RevokeStreamUrl: string[] = [
		"gameliftstreams:RevokeStreamUrl",
	];
	/** IAM actions required for the StartStreamSession API call. */
	static readonly StartStreamSession: string[] = [
		"iam:PassRole",
		"gameliftstreams:StartStreamSession",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["gameliftstreams:TagResource"];
	/** IAM actions required for the TerminateStreamSession API call. */
	static readonly TerminateStreamSession: string[] = [
		"gameliftstreams:TerminateStreamSession",
	];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = ["gameliftstreams:UntagResource"];
	/** IAM actions required for the UpdateApplication API call. */
	static readonly UpdateApplication: string[] = [
		"gameliftstreams:UpdateApplication",
	];
	/** IAM actions required for the UpdateStreamGroup API call. */
	static readonly UpdateStreamGroup: string[] = [
		"gameliftstreams:UpdateStreamGroup",
	];
}

/**
 * Condition key constants and builders for gameliftstreams.
 */
export class GameliftstreamsConditions {
	/** Condition keys applicable to the CreateApplication action. */
	static readonly CreateApplicationConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamGroup action. */
	static readonly CreateStreamGroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateStreamUrl action. */
	static readonly CreateStreamUrlConditionKeys: string[] = [
		"gameliftstreams:RoleArn",
	];
	/** Condition keys applicable to the StartStreamSession action. */
	static readonly StartStreamSessionConditionKeys: string[] = [
		"gameliftstreams:RoleArn",
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
	/** Condition key: gameliftstreams:RoleArn (ARN) */
	static readonly ROLE_ARN = "gameliftstreams:RoleArn";

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

	/**
	 * Generates a condition block for `gameliftstreams:RoleArn`.
	 */
	static roleARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "gameliftstreams:RoleArn": value } };
	}
}
