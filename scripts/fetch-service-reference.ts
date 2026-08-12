/**
 * Helper functions to fetch and validate AWS Service Authorization Reference data.
 */

import type {
	ServiceDetail,
	ServiceReferenceEntry,
	ServiceReferenceList,
} from "./types";

const SERVICE_REFERENCE_BASE_URL =
	"https://servicereference.us-east-1.amazonaws.com";

/**
 * Validates that a value is a valid ServiceReferenceEntry.
 * Throws if the shape doesn't match the expected structure.
 */
function validateServiceReferenceEntry(
	entry: unknown,
	index: number,
): asserts entry is ServiceReferenceEntry {
	if (typeof entry !== "object" || entry === null) {
		throw new Error(
			`Invalid entry at index ${index}: expected an object, got ${typeof entry}`,
		);
	}

	const obj = entry as Record<string, unknown>;

	if (typeof obj.service !== "string" || obj.service.length === 0) {
		throw new Error(
			`Invalid entry at index ${index}: 'service' must be a non-empty string`,
		);
	}

	if (typeof obj.url !== "string" || obj.url.length === 0) {
		throw new Error(
			`Invalid entry at index ${index}: 'url' must be a non-empty string`,
		);
	}

	if (typeof obj.modified !== "number" || !Number.isFinite(obj.modified)) {
		throw new Error(
			`Invalid entry at index ${index}: 'modified' must be a finite number`,
		);
	}
}

/**
 * Validates that a value is a valid ServiceReferenceList.
 * Throws if the response is not an array or any entry is malformed.
 */
function validateServiceReferenceList(
	data: unknown,
): asserts data is ServiceReferenceList {
	if (!Array.isArray(data)) {
		throw new Error(
			`Invalid service reference list: expected an array, got ${typeof data}`,
		);
	}

	if (data.length === 0) {
		throw new Error(
			"Invalid service reference list: expected a non-empty array",
		);
	}

	for (let i = 0; i < data.length; i++) {
		validateServiceReferenceEntry(data[i], i);
	}
}

/**
 * Validates that a value is a valid ServiceDetail.
 * Performs structural checks on the top-level shape and array contents.
 */
function validateServiceDetail(
	data: unknown,
): asserts data is ServiceDetail {
	if (typeof data !== "object" || data === null) {
		throw new Error(
			`Invalid service detail: expected an object, got ${typeof data}`,
		);
	}

	const obj = data as Record<string, unknown>;

	if (typeof obj.Name !== "string" || obj.Name.length === 0) {
		throw new Error(
			"Invalid service detail: 'Name' must be a non-empty string",
		);
	}

	if (typeof obj.Version !== "string" || obj.Version.length === 0) {
		throw new Error(
			"Invalid service detail: 'Version' must be a non-empty string",
		);
	}

	if (!Array.isArray(obj.Actions)) {
		throw new Error("Invalid service detail: 'Actions' must be an array");
	}

	if (!Array.isArray(obj.ConditionKeys)) {
		throw new Error(
			"Invalid service detail: 'ConditionKeys' must be an array",
		);
	}

	if (!Array.isArray(obj.Operations)) {
		throw new Error(
			"Invalid service detail: 'Operations' must be an array",
		);
	}

	if (!Array.isArray(obj.Resources)) {
		throw new Error(
			"Invalid service detail: 'Resources' must be an array",
		);
	}

	// Validate individual actions have at minimum a Name
	for (let i = 0; i < obj.Actions.length; i++) {
		const action = obj.Actions[i] as Record<string, unknown>;
		if (typeof action?.Name !== "string" || action.Name.length === 0) {
			throw new Error(
				`Invalid service detail: Actions[${i}].Name must be a non-empty string`,
			);
		}
	}

	// Validate condition keys have Name and Types
	for (let i = 0; i < obj.ConditionKeys.length; i++) {
		const ck = obj.ConditionKeys[i] as Record<string, unknown>;
		if (typeof ck?.Name !== "string" || ck.Name.length === 0) {
			throw new Error(
				`Invalid service detail: ConditionKeys[${i}].Name must be a non-empty string`,
			);
		}
		if (!Array.isArray(ck?.Types)) {
			throw new Error(
				`Invalid service detail: ConditionKeys[${i}].Types must be an array`,
			);
		}
	}

	// Validate operations have a Name
	for (let i = 0; i < obj.Operations.length; i++) {
		const op = obj.Operations[i] as Record<string, unknown>;
		if (typeof op?.Name !== "string" || op.Name.length === 0) {
			throw new Error(
				`Invalid service detail: Operations[${i}].Name must be a non-empty string`,
			);
		}
	}

	// Validate resources have a Name
	for (let i = 0; i < obj.Resources.length; i++) {
		const res = obj.Resources[i] as Record<string, unknown>;
		if (typeof res?.Name !== "string" || res.Name.length === 0) {
			throw new Error(
				`Invalid service detail: Resources[${i}].Name must be a non-empty string`,
			);
		}
	}
}

/**
 * Fetches the service reference list from the AWS Service Authorization Reference API.
 * Returns a validated array of service entries with their metadata URLs and timestamps.
 *
 * @returns A typed and validated ServiceReferenceList
 * @throws If the fetch fails or the response doesn't match the expected schema
 */
export async function fetchServiceReferenceList(): Promise<ServiceReferenceList> {
	const response = await fetch(SERVICE_REFERENCE_BASE_URL);

	if (!response.ok) {
		throw new Error(
			`Failed to fetch service reference list: HTTP ${response.status} ${response.statusText}`,
		);
	}

	const data: unknown = await response.json();
	validateServiceReferenceList(data);
	return data;
}

/**
 * Fetches the detail for a specific AWS service from the Service Authorization Reference API.
 * Returns a validated object containing all IAM actions, condition keys, operations, and resources.
 *
 * @param serviceUrl - The full URL to the service's JSON file (from ServiceReferenceEntry.url)
 * @returns A typed and validated ServiceDetail
 * @throws If the fetch fails or the response doesn't match the expected schema
 */
export async function fetchServiceDetail(
	serviceUrl: string,
): Promise<ServiceDetail> {
	if (!serviceUrl || typeof serviceUrl !== "string") {
		throw new Error("serviceUrl must be a non-empty string");
	}

	const response = await fetch(serviceUrl);

	if (!response.ok) {
		throw new Error(
			`Failed to fetch service detail from ${serviceUrl}: HTTP ${response.status} ${response.statusText}`,
		);
	}

	const data: unknown = await response.json();
	validateServiceDetail(data);
	return data;
}

// Export validators for testing
export { validateServiceReferenceList, validateServiceDetail };
