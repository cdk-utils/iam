// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/honeycode.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the honeycode service.
 */
export class HoneycodeActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "honeycode";

	/** [Write] honeycode:ApproveTeamAssociation */
	static readonly ApproveTeamAssociation = "honeycode:ApproveTeamAssociation";
	/** [Write] honeycode:BatchCreateTableRows */
	static readonly BatchCreateTableRows = "honeycode:BatchCreateTableRows";
	/** [Write] honeycode:BatchDeleteTableRows */
	static readonly BatchDeleteTableRows = "honeycode:BatchDeleteTableRows";
	/** [Write] honeycode:BatchUpdateTableRows */
	static readonly BatchUpdateTableRows = "honeycode:BatchUpdateTableRows";
	/** [Write] honeycode:BatchUpsertTableRows */
	static readonly BatchUpsertTableRows = "honeycode:BatchUpsertTableRows";
	/** [Write] honeycode:CreateTeam */
	static readonly CreateTeam = "honeycode:CreateTeam";
	/** [Write] honeycode:CreateTenant */
	static readonly CreateTenant = "honeycode:CreateTenant";
	/** [Write] honeycode:DeleteDomains */
	static readonly DeleteDomains = "honeycode:DeleteDomains";
	/** [Write] honeycode:DeregisterGroups */
	static readonly DeregisterGroups = "honeycode:DeregisterGroups";
	/** [Read] honeycode:DescribeTableDataImportJob */
	static readonly DescribeTableDataImportJob =
		"honeycode:DescribeTableDataImportJob";
	/** [Read] honeycode:DescribeTeam */
	static readonly DescribeTeam = "honeycode:DescribeTeam";
	/** [Read] honeycode:GetScreenData */
	static readonly actionGetScreenData = "honeycode:GetScreenData";
	/** [Write] honeycode:InvokeScreenAutomation */
	static readonly InvokeScreenAutomation = "honeycode:InvokeScreenAutomation";
	/** [List] honeycode:ListDomains */
	static readonly ListDomains = "honeycode:ListDomains";
	/** [List] honeycode:ListGroups */
	static readonly ListGroups = "honeycode:ListGroups";
	/** [List] honeycode:ListTableColumns */
	static readonly ListTableColumns = "honeycode:ListTableColumns";
	/** [List] honeycode:ListTableRows */
	static readonly ListTableRows = "honeycode:ListTableRows";
	/** [List] honeycode:ListTables */
	static readonly ListTables = "honeycode:ListTables";
	/** [Tagging] honeycode:ListTagsForResource */
	static readonly ListTagsForResource = "honeycode:ListTagsForResource";
	/** [List] honeycode:ListTeamAssociations */
	static readonly ListTeamAssociations = "honeycode:ListTeamAssociations";
	/** [List] honeycode:ListTenants */
	static readonly ListTenants = "honeycode:ListTenants";
	/** [Read] honeycode:QueryTableRows */
	static readonly QueryTableRows = "honeycode:QueryTableRows";
	/** [Write] honeycode:RegisterDomainForVerification */
	static readonly RegisterDomainForVerification =
		"honeycode:RegisterDomainForVerification";
	/** [Write] honeycode:RegisterGroups */
	static readonly RegisterGroups = "honeycode:RegisterGroups";
	/** [Write] honeycode:RejectTeamAssociation */
	static readonly RejectTeamAssociation = "honeycode:RejectTeamAssociation";
	/** [Write] honeycode:RestartDomainVerification */
	static readonly RestartDomainVerification =
		"honeycode:RestartDomainVerification";
	/** [Write] honeycode:StartTableDataImportJob */
	static readonly StartTableDataImportJob = "honeycode:StartTableDataImportJob";
	/** [Tagging] honeycode:TagResource */
	static readonly TagResource = "honeycode:TagResource";
	/** [Tagging] honeycode:UntagResource */
	static readonly UntagResource = "honeycode:UntagResource";
	/** [Write] honeycode:UpdateTeam */
	static readonly UpdateTeam = "honeycode:UpdateTeam";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		HoneycodeActions.DescribeTableDataImportJob,
		HoneycodeActions.DescribeTeam,
		HoneycodeActions.actionGetScreenData,
		HoneycodeActions.QueryTableRows,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		HoneycodeActions.ApproveTeamAssociation,
		HoneycodeActions.BatchCreateTableRows,
		HoneycodeActions.BatchDeleteTableRows,
		HoneycodeActions.BatchUpdateTableRows,
		HoneycodeActions.BatchUpsertTableRows,
		HoneycodeActions.CreateTeam,
		HoneycodeActions.CreateTenant,
		HoneycodeActions.DeleteDomains,
		HoneycodeActions.DeregisterGroups,
		HoneycodeActions.InvokeScreenAutomation,
		HoneycodeActions.RegisterDomainForVerification,
		HoneycodeActions.RegisterGroups,
		HoneycodeActions.RejectTeamAssociation,
		HoneycodeActions.RestartDomainVerification,
		HoneycodeActions.StartTableDataImportJob,
		HoneycodeActions.UpdateTeam,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		HoneycodeActions.ListDomains,
		HoneycodeActions.ListGroups,
		HoneycodeActions.ListTableColumns,
		HoneycodeActions.ListTableRows,
		HoneycodeActions.ListTables,
		HoneycodeActions.ListTeamAssociations,
		HoneycodeActions.ListTenants,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		HoneycodeActions.ListTagsForResource,
		HoneycodeActions.TagResource,
		HoneycodeActions.UntagResource,
	];
}

/**
 * Properties for building a screen ARN.
 */
export interface HoneycodeScreenArnProps {
	/** The WorkbookId component of the ARN. */
	readonly workbookId: string;
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The ScreenId component of the ARN. */
	readonly screenId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a screen ARN.
 */
export interface HoneycodeScreenArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkbookId component. */
	readonly workbookId: string;
	/** The AppId component. */
	readonly appId: string;
	/** The ScreenId component. */
	readonly screenId: string;
}

/**
 * Properties for building a screen-automation ARN.
 */
export interface HoneycodeScreenAutomationArnProps {
	/** The WorkbookId component of the ARN. */
	readonly workbookId: string;
	/** The AppId component of the ARN. */
	readonly appId: string;
	/** The ScreenId component of the ARN. */
	readonly screenId: string;
	/** The AutomationId component of the ARN. */
	readonly automationId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a screen-automation ARN.
 */
export interface HoneycodeScreenAutomationArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkbookId component. */
	readonly workbookId: string;
	/** The AppId component. */
	readonly appId: string;
	/** The ScreenId component. */
	readonly screenId: string;
	/** The AutomationId component. */
	readonly automationId: string;
}

/**
 * Properties for building a table ARN.
 */
export interface HoneycodeTableArnProps {
	/** The WorkbookId component of the ARN. */
	readonly workbookId: string;
	/** The TableId component of the ARN. */
	readonly tableId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a table ARN.
 */
export interface HoneycodeTableArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkbookId component. */
	readonly workbookId: string;
	/** The TableId component. */
	readonly tableId: string;
}

/**
 * Properties for building a workbook ARN.
 */
export interface HoneycodeWorkbookArnProps {
	/** The WorkbookId component of the ARN. */
	readonly workbookId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workbook ARN.
 */
export interface HoneycodeWorkbookArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkbookId component. */
	readonly workbookId: string;
}

const ScreenArnRegex =
	/^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):screen:workbook\/(?<workbookId>[^:/?]+)\/app\/(?<appId>[^:/?]+)\/screen\/(?<screenId>[^:/?]+)$/;
const ScreenAutomationArnRegex =
	/^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):screen-automation:workbook\/(?<workbookId>[^:/?]+)\/app\/(?<appId>[^:/?]+)\/screen\/(?<screenId>[^:/?]+)\/automation\/(?<automationId>[^:/?]+)$/;
const TableArnRegex =
	/^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):table:workbook\/(?<workbookId>[^:/?]+)\/table\/(?<tableId>[^:/?]+)$/;
const WorkbookArnRegex =
	/^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):workbook:workbook\/(?<workbookId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for honeycode resources.
 */
export class HoneycodeResources {
	/**
	 * Builds an ARN for the screen resource.
	 */
	static screen(props: HoneycodeScreenArnProps): string {
		return `arn:${props.partition ?? "aws"}:honeycode:${props.region ?? "*"}:${props.account ?? "*"}:screen:workbook/${props.workbookId}/app/${props.appId}/screen/${props.screenId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the screen resource.
	 */
	static isValidScreenArn(arn: string): boolean {
		return ScreenArnRegex.test(arn);
	}

	/**
	 * Parses a screen ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScreenArn(arn: string): HoneycodeScreenArnComponents {
		const match = ScreenArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid screen ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workbookId: match.groups!.workbookId,
			appId: match.groups!.appId,
			screenId: match.groups!.screenId,
		};
	}

	/**
	 * Builds an ARN for the screen-automation resource.
	 */
	static screenAutomation(props: HoneycodeScreenAutomationArnProps): string {
		return `arn:${props.partition ?? "aws"}:honeycode:${props.region ?? "*"}:${props.account ?? "*"}:screen-automation:workbook/${props.workbookId}/app/${props.appId}/screen/${props.screenId}/automation/${props.automationId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the screen-automation resource.
	 */
	static isValidScreenAutomationArn(arn: string): boolean {
		return ScreenAutomationArnRegex.test(arn);
	}

	/**
	 * Parses a screen-automation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseScreenAutomationArn(
		arn: string,
	): HoneycodeScreenAutomationArnComponents {
		const match = ScreenAutomationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid screen-automation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workbookId: match.groups!.workbookId,
			appId: match.groups!.appId,
			screenId: match.groups!.screenId,
			automationId: match.groups!.automationId,
		};
	}

	/**
	 * Builds an ARN for the table resource.
	 */
	static table(props: HoneycodeTableArnProps): string {
		return `arn:${props.partition ?? "aws"}:honeycode:${props.region ?? "*"}:${props.account ?? "*"}:table:workbook/${props.workbookId}/table/${props.tableId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the table resource.
	 */
	static isValidTableArn(arn: string): boolean {
		return TableArnRegex.test(arn);
	}

	/**
	 * Parses a table ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseTableArn(arn: string): HoneycodeTableArnComponents {
		const match = TableArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid table ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workbookId: match.groups!.workbookId,
			tableId: match.groups!.tableId,
		};
	}

	/**
	 * Builds an ARN for the workbook resource.
	 */
	static workbook(props: HoneycodeWorkbookArnProps): string {
		return `arn:${props.partition ?? "aws"}:honeycode:${props.region ?? "*"}:${props.account ?? "*"}:workbook:workbook/${props.workbookId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workbook resource.
	 */
	static isValidWorkbookArn(arn: string): boolean {
		return WorkbookArnRegex.test(arn);
	}

	/**
	 * Parses a workbook ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkbookArn(arn: string): HoneycodeWorkbookArnComponents {
		const match = WorkbookArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workbook ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workbookId: match.groups!.workbookId,
		};
	}
}
