// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/agentaccess-mcp.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the agentaccess-mcp service.
 */
export class AgentaccessMcpActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "agentaccess-mcp";

	/** [Write] agentaccess-mcp:CallForwardedTool */
	static readonly CallForwardedTool = "agentaccess-mcp:CallForwardedTool";
	/** [Read] agentaccess-mcp:CheckConnectionStatus */
	static readonly CheckConnectionStatus =
		"agentaccess-mcp:CheckConnectionStatus";
	/** [Write] agentaccess-mcp:DoubleClick */
	static readonly DoubleClick = "agentaccess-mcp:DoubleClick";
	/** [Read] agentaccess-mcp:GetScreenshot */
	static readonly actionGetScreenshot = "agentaccess-mcp:GetScreenshot";
	/** [Write] agentaccess-mcp:HoldKey */
	static readonly HoldKey = "agentaccess-mcp:HoldKey";
	/** [Write] agentaccess-mcp:InvokeMcp */
	static readonly InvokeMcp = "agentaccess-mcp:InvokeMcp";
	/** [Write] agentaccess-mcp:KeyPress */
	static readonly KeyPress = "agentaccess-mcp:KeyPress";
	/** [Write] agentaccess-mcp:LeftClick */
	static readonly LeftClick = "agentaccess-mcp:LeftClick";
	/** [Write] agentaccess-mcp:LeftClickDrag */
	static readonly LeftClickDrag = "agentaccess-mcp:LeftClickDrag";
	/** [Write] agentaccess-mcp:LeftMouseDown */
	static readonly LeftMouseDown = "agentaccess-mcp:LeftMouseDown";
	/** [Write] agentaccess-mcp:LeftMouseUp */
	static readonly LeftMouseUp = "agentaccess-mcp:LeftMouseUp";
	/** [Write] agentaccess-mcp:MiddleClick */
	static readonly MiddleClick = "agentaccess-mcp:MiddleClick";
	/** [Write] agentaccess-mcp:MovePointer */
	static readonly MovePointer = "agentaccess-mcp:MovePointer";
	/** [Write] agentaccess-mcp:RightClick */
	static readonly RightClick = "agentaccess-mcp:RightClick";
	/** [Write] agentaccess-mcp:Scroll */
	static readonly Scroll = "agentaccess-mcp:Scroll";
	/** [Write] agentaccess-mcp:TripleClick */
	static readonly TripleClick = "agentaccess-mcp:TripleClick";
	/** [Write] agentaccess-mcp:TypeText */
	static readonly TypeText = "agentaccess-mcp:TypeText";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		AgentaccessMcpActions.CheckConnectionStatus,
		AgentaccessMcpActions.actionGetScreenshot,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		AgentaccessMcpActions.CallForwardedTool,
		AgentaccessMcpActions.DoubleClick,
		AgentaccessMcpActions.HoldKey,
		AgentaccessMcpActions.InvokeMcp,
		AgentaccessMcpActions.KeyPress,
		AgentaccessMcpActions.LeftClick,
		AgentaccessMcpActions.LeftClickDrag,
		AgentaccessMcpActions.LeftMouseDown,
		AgentaccessMcpActions.LeftMouseUp,
		AgentaccessMcpActions.MiddleClick,
		AgentaccessMcpActions.MovePointer,
		AgentaccessMcpActions.RightClick,
		AgentaccessMcpActions.Scroll,
		AgentaccessMcpActions.TripleClick,
		AgentaccessMcpActions.TypeText,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [];
}

/**
 * Condition key constants and builders for agentaccess-mcp.
 */
export class AgentaccessMcpConditions {
	/** Condition keys applicable to the CallForwardedTool action. */
	static readonly CallForwardedToolConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the CheckConnectionStatus action. */
	static readonly CheckConnectionStatusConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the DoubleClick action. */
	static readonly DoubleClickConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the GetScreenshot action. */
	static readonly actionGetScreenshotConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the HoldKey action. */
	static readonly HoldKeyConditionKeys: string[] = ["agentaccess-mcp:StackArn"];
	/** Condition keys applicable to the InvokeMcp action. */
	static readonly InvokeMcpConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the KeyPress action. */
	static readonly KeyPressConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftClick action. */
	static readonly LeftClickConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftClickDrag action. */
	static readonly LeftClickDragConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftMouseDown action. */
	static readonly LeftMouseDownConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftMouseUp action. */
	static readonly LeftMouseUpConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the MiddleClick action. */
	static readonly MiddleClickConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the MovePointer action. */
	static readonly MovePointerConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the RightClick action. */
	static readonly RightClickConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the Scroll action. */
	static readonly ScrollConditionKeys: string[] = ["agentaccess-mcp:StackArn"];
	/** Condition keys applicable to the TripleClick action. */
	static readonly TripleClickConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the TypeText action. */
	static readonly TypeTextConditionKeys: string[] = [
		"agentaccess-mcp:StackArn",
	];

	/** Condition key: agentaccess-mcp:StackArn (ARN) */
	static readonly STACK_ARN = "agentaccess-mcp:StackArn";

	/**
	 * Generates a condition block for `agentaccess-mcp:StackArn`.
	 */
	static stackARN(value: string): Record<string, Record<string, string>> {
		return { ArnEquals: { "agentaccess-mcp:StackArn": value } };
	}
}
