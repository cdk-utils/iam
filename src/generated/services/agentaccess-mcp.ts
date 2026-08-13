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
	static readonly CALL_FORWARDED_TOOL = "agentaccess-mcp:CallForwardedTool";
	/** [Read] agentaccess-mcp:CheckConnectionStatus */
	static readonly CHECK_CONNECTION_STATUS =
		"agentaccess-mcp:CheckConnectionStatus";
	/** [Write] agentaccess-mcp:DoubleClick */
	static readonly DOUBLE_CLICK = "agentaccess-mcp:DoubleClick";
	/** [Read] agentaccess-mcp:GetScreenshot */
	static readonly GET_SCREENSHOT = "agentaccess-mcp:GetScreenshot";
	/** [Write] agentaccess-mcp:HoldKey */
	static readonly HOLD_KEY = "agentaccess-mcp:HoldKey";
	/** [Write] agentaccess-mcp:InvokeMcp */
	static readonly INVOKE_MCP = "agentaccess-mcp:InvokeMcp";
	/** [Write] agentaccess-mcp:KeyPress */
	static readonly KEY_PRESS = "agentaccess-mcp:KeyPress";
	/** [Write] agentaccess-mcp:LeftClick */
	static readonly LEFT_CLICK = "agentaccess-mcp:LeftClick";
	/** [Write] agentaccess-mcp:LeftClickDrag */
	static readonly LEFT_CLICK_DRAG = "agentaccess-mcp:LeftClickDrag";
	/** [Write] agentaccess-mcp:LeftMouseDown */
	static readonly LEFT_MOUSE_DOWN = "agentaccess-mcp:LeftMouseDown";
	/** [Write] agentaccess-mcp:LeftMouseUp */
	static readonly LEFT_MOUSE_UP = "agentaccess-mcp:LeftMouseUp";
	/** [Write] agentaccess-mcp:MiddleClick */
	static readonly MIDDLE_CLICK = "agentaccess-mcp:MiddleClick";
	/** [Write] agentaccess-mcp:MovePointer */
	static readonly MOVE_POINTER = "agentaccess-mcp:MovePointer";
	/** [Write] agentaccess-mcp:RightClick */
	static readonly RIGHT_CLICK = "agentaccess-mcp:RightClick";
	/** [Write] agentaccess-mcp:Scroll */
	static readonly SCROLL = "agentaccess-mcp:Scroll";
	/** [Write] agentaccess-mcp:TripleClick */
	static readonly TRIPLE_CLICK = "agentaccess-mcp:TripleClick";
	/** [Write] agentaccess-mcp:TypeText */
	static readonly TYPE_TEXT = "agentaccess-mcp:TypeText";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		AgentaccessMcpActions.CHECK_CONNECTION_STATUS,
		AgentaccessMcpActions.GET_SCREENSHOT,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		AgentaccessMcpActions.CALL_FORWARDED_TOOL,
		AgentaccessMcpActions.DOUBLE_CLICK,
		AgentaccessMcpActions.HOLD_KEY,
		AgentaccessMcpActions.INVOKE_MCP,
		AgentaccessMcpActions.KEY_PRESS,
		AgentaccessMcpActions.LEFT_CLICK,
		AgentaccessMcpActions.LEFT_CLICK_DRAG,
		AgentaccessMcpActions.LEFT_MOUSE_DOWN,
		AgentaccessMcpActions.LEFT_MOUSE_UP,
		AgentaccessMcpActions.MIDDLE_CLICK,
		AgentaccessMcpActions.MOVE_POINTER,
		AgentaccessMcpActions.RIGHT_CLICK,
		AgentaccessMcpActions.SCROLL,
		AgentaccessMcpActions.TRIPLE_CLICK,
		AgentaccessMcpActions.TYPE_TEXT,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [];
}

/**
 * Condition key constants and builders for agentaccess-mcp.
 */
export class AgentaccessMcpConditions {
	/** Condition keys applicable to the CallForwardedTool action. */
	static readonly CALL_FORWARDED_TOOL_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the CheckConnectionStatus action. */
	static readonly CHECK_CONNECTION_STATUS_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the DoubleClick action. */
	static readonly DOUBLE_CLICK_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the GetScreenshot action. */
	static readonly GET_SCREENSHOT_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the HoldKey action. */
	static readonly HOLD_KEY_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the InvokeMcp action. */
	static readonly INVOKE_MCP_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the KeyPress action. */
	static readonly KEY_PRESS_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftClick action. */
	static readonly LEFT_CLICK_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftClickDrag action. */
	static readonly LEFT_CLICK_DRAG_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftMouseDown action. */
	static readonly LEFT_MOUSE_DOWN_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the LeftMouseUp action. */
	static readonly LEFT_MOUSE_UP_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the MiddleClick action. */
	static readonly MIDDLE_CLICK_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the MovePointer action. */
	static readonly MOVE_POINTER_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the RightClick action. */
	static readonly RIGHT_CLICK_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the Scroll action. */
	static readonly SCROLL_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the TripleClick action. */
	static readonly TRIPLE_CLICK_CONDITION_KEYS: string[] = [
		"agentaccess-mcp:StackArn",
	];
	/** Condition keys applicable to the TypeText action. */
	static readonly TYPE_TEXT_CONDITION_KEYS: string[] = [
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
