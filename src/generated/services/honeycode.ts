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
	static readonly APPROVE_TEAM_ASSOCIATION = "honeycode:ApproveTeamAssociation";
	/** [Write] honeycode:BatchCreateTableRows */
	static readonly BATCH_CREATE_TABLE_ROWS = "honeycode:BatchCreateTableRows";
	/** [Write] honeycode:BatchDeleteTableRows */
	static readonly BATCH_DELETE_TABLE_ROWS = "honeycode:BatchDeleteTableRows";
	/** [Write] honeycode:BatchUpdateTableRows */
	static readonly BATCH_UPDATE_TABLE_ROWS = "honeycode:BatchUpdateTableRows";
	/** [Write] honeycode:BatchUpsertTableRows */
	static readonly BATCH_UPSERT_TABLE_ROWS = "honeycode:BatchUpsertTableRows";
	/** [Write] honeycode:CreateTeam */
	static readonly CREATE_TEAM = "honeycode:CreateTeam";
	/** [Write] honeycode:CreateTenant */
	static readonly CREATE_TENANT = "honeycode:CreateTenant";
	/** [Write] honeycode:DeleteDomains */
	static readonly DELETE_DOMAINS = "honeycode:DeleteDomains";
	/** [Write] honeycode:DeregisterGroups */
	static readonly DEREGISTER_GROUPS = "honeycode:DeregisterGroups";
	/** [Read] honeycode:DescribeTableDataImportJob */
	static readonly DESCRIBE_TABLE_DATA_IMPORT_JOB =
		"honeycode:DescribeTableDataImportJob";
	/** [Read] honeycode:DescribeTeam */
	static readonly DESCRIBE_TEAM = "honeycode:DescribeTeam";
	/** [Read] honeycode:GetScreenData */
	static readonly GET_SCREEN_DATA = "honeycode:GetScreenData";
	/** [Write] honeycode:InvokeScreenAutomation */
	static readonly INVOKE_SCREEN_AUTOMATION = "honeycode:InvokeScreenAutomation";
	/** [List] honeycode:ListDomains */
	static readonly LIST_DOMAINS = "honeycode:ListDomains";
	/** [List] honeycode:ListGroups */
	static readonly LIST_GROUPS = "honeycode:ListGroups";
	/** [List] honeycode:ListTableColumns */
	static readonly LIST_TABLE_COLUMNS = "honeycode:ListTableColumns";
	/** [List] honeycode:ListTableRows */
	static readonly LIST_TABLE_ROWS = "honeycode:ListTableRows";
	/** [List] honeycode:ListTables */
	static readonly LIST_TABLES = "honeycode:ListTables";
	/** [Tagging] honeycode:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "honeycode:ListTagsForResource";
	/** [List] honeycode:ListTeamAssociations */
	static readonly LIST_TEAM_ASSOCIATIONS = "honeycode:ListTeamAssociations";
	/** [List] honeycode:ListTenants */
	static readonly LIST_TENANTS = "honeycode:ListTenants";
	/** [Read] honeycode:QueryTableRows */
	static readonly QUERY_TABLE_ROWS = "honeycode:QueryTableRows";
	/** [Write] honeycode:RegisterDomainForVerification */
	static readonly REGISTER_DOMAIN_FOR_VERIFICATION =
		"honeycode:RegisterDomainForVerification";
	/** [Write] honeycode:RegisterGroups */
	static readonly REGISTER_GROUPS = "honeycode:RegisterGroups";
	/** [Write] honeycode:RejectTeamAssociation */
	static readonly REJECT_TEAM_ASSOCIATION = "honeycode:RejectTeamAssociation";
	/** [Write] honeycode:RestartDomainVerification */
	static readonly RESTART_DOMAIN_VERIFICATION =
		"honeycode:RestartDomainVerification";
	/** [Write] honeycode:StartTableDataImportJob */
	static readonly START_TABLE_DATA_IMPORT_JOB =
		"honeycode:StartTableDataImportJob";
	/** [Tagging] honeycode:TagResource */
	static readonly TAG_RESOURCE = "honeycode:TagResource";
	/** [Tagging] honeycode:UntagResource */
	static readonly UNTAG_RESOURCE = "honeycode:UntagResource";
	/** [Write] honeycode:UpdateTeam */
	static readonly UPDATE_TEAM = "honeycode:UpdateTeam";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		HoneycodeActions.DESCRIBE_TABLE_DATA_IMPORT_JOB,
		HoneycodeActions.DESCRIBE_TEAM,
		HoneycodeActions.GET_SCREEN_DATA,
		HoneycodeActions.QUERY_TABLE_ROWS,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		HoneycodeActions.APPROVE_TEAM_ASSOCIATION,
		HoneycodeActions.BATCH_CREATE_TABLE_ROWS,
		HoneycodeActions.BATCH_DELETE_TABLE_ROWS,
		HoneycodeActions.BATCH_UPDATE_TABLE_ROWS,
		HoneycodeActions.BATCH_UPSERT_TABLE_ROWS,
		HoneycodeActions.CREATE_TEAM,
		HoneycodeActions.CREATE_TENANT,
		HoneycodeActions.DELETE_DOMAINS,
		HoneycodeActions.DEREGISTER_GROUPS,
		HoneycodeActions.INVOKE_SCREEN_AUTOMATION,
		HoneycodeActions.REGISTER_DOMAIN_FOR_VERIFICATION,
		HoneycodeActions.REGISTER_GROUPS,
		HoneycodeActions.REJECT_TEAM_ASSOCIATION,
		HoneycodeActions.RESTART_DOMAIN_VERIFICATION,
		HoneycodeActions.START_TABLE_DATA_IMPORT_JOB,
		HoneycodeActions.UPDATE_TEAM,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		HoneycodeActions.LIST_DOMAINS,
		HoneycodeActions.LIST_GROUPS,
		HoneycodeActions.LIST_TABLE_COLUMNS,
		HoneycodeActions.LIST_TABLE_ROWS,
		HoneycodeActions.LIST_TABLES,
		HoneycodeActions.LIST_TEAM_ASSOCIATIONS,
		HoneycodeActions.LIST_TENANTS,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		HoneycodeActions.LIST_TAGS_FOR_RESOURCE,
		HoneycodeActions.TAG_RESOURCE,
		HoneycodeActions.UNTAG_RESOURCE,
	];
}

const ScreenArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):screen:workbook/(?<workbookId>[^:/?]+)/app/(?<appId>[^:/?]+)/screen/(?<screenId>[^:/?]+)$",
);
const ScreenAutomationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):screen-automation:workbook/(?<workbookId>[^:/?]+)/app/(?<appId>[^:/?]+)/screen/(?<screenId>[^:/?]+)/automation/(?<automationId>[^:/?]+)$",
);
const TableArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):table:workbook/(?<workbookId>[^:/?]+)/table/(?<tableId>[^:/?]+)$",
);
const WorkbookArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):honeycode:(?<region>[^:]*):(?<account>[^:]*):workbook:workbook/(?<workbookId>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for honeycode resources.
 */
export class HoneycodeResources {
	/**
	 * Builds an ARN for the screen resource.
	 */
	static screen(props: {
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
	}): string {
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
	static parseScreenArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workbookId: string;
		appId: string;
		screenId: string;
	} {
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
	static screenAutomation(props: {
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
	}): string {
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
	static parseScreenAutomationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workbookId: string;
		appId: string;
		screenId: string;
		automationId: string;
	} {
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
	static table(props: {
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
	}): string {
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
	static parseTableArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workbookId: string;
		tableId: string;
	} {
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
	static workbook(props: {
		/** The WorkbookId component of the ARN. */
		readonly workbookId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
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
	static parseWorkbookArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		workbookId: string;
	} {
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
