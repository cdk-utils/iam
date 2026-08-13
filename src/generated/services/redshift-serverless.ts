// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/redshift-serverless.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the redshift-serverless service.
 */
export class RedshiftServerlessActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "redshift-serverless";

	/** [Write] redshift-serverless:ConvertRecoveryPointToSnapshot */
	static readonly ConvertRecoveryPointToSnapshot =
		"redshift-serverless:ConvertRecoveryPointToSnapshot";
	/** [Write] redshift-serverless:CreateCustomDomainAssociation */
	static readonly CreateCustomDomainAssociation =
		"redshift-serverless:CreateCustomDomainAssociation";
	/** [Write] redshift-serverless:CreateEndpointAccess */
	static readonly CreateEndpointAccess =
		"redshift-serverless:CreateEndpointAccess";
	/** [Write] redshift-serverless:CreateNamespace */
	static readonly CreateNamespace = "redshift-serverless:CreateNamespace";
	/** [Write] redshift-serverless:CreateReservation */
	static readonly CreateReservation = "redshift-serverless:CreateReservation";
	/** [Write] redshift-serverless:CreateScheduledAction */
	static readonly CreateScheduledAction =
		"redshift-serverless:CreateScheduledAction";
	/** [Write] redshift-serverless:CreateSnapshot */
	static readonly CreateSnapshot = "redshift-serverless:CreateSnapshot";
	/** [Write] redshift-serverless:CreateSnapshotCopyConfiguration */
	static readonly CreateSnapshotCopyConfiguration =
		"redshift-serverless:CreateSnapshotCopyConfiguration";
	/** [Write] redshift-serverless:CreateUsageLimit */
	static readonly CreateUsageLimit = "redshift-serverless:CreateUsageLimit";
	/** [Write] redshift-serverless:CreateWorkgroup */
	static readonly CreateWorkgroup = "redshift-serverless:CreateWorkgroup";
	/** [Write] redshift-serverless:DeleteCustomDomainAssociation */
	static readonly DeleteCustomDomainAssociation =
		"redshift-serverless:DeleteCustomDomainAssociation";
	/** [Write] redshift-serverless:DeleteEndpointAccess */
	static readonly DeleteEndpointAccess =
		"redshift-serverless:DeleteEndpointAccess";
	/** [Write] redshift-serverless:DeleteNamespace */
	static readonly DeleteNamespace = "redshift-serverless:DeleteNamespace";
	/** [Write] redshift-serverless:DeleteResourcePolicy */
	static readonly DeleteResourcePolicy =
		"redshift-serverless:DeleteResourcePolicy";
	/** [Write] redshift-serverless:DeleteScheduledAction */
	static readonly DeleteScheduledAction =
		"redshift-serverless:DeleteScheduledAction";
	/** [Write] redshift-serverless:DeleteSnapshot */
	static readonly DeleteSnapshot = "redshift-serverless:DeleteSnapshot";
	/** [Write] redshift-serverless:DeleteSnapshotCopyConfiguration */
	static readonly DeleteSnapshotCopyConfiguration =
		"redshift-serverless:DeleteSnapshotCopyConfiguration";
	/** [Write] redshift-serverless:DeleteUsageLimit */
	static readonly DeleteUsageLimit = "redshift-serverless:DeleteUsageLimit";
	/** [Write] redshift-serverless:DeleteWorkgroup */
	static readonly DeleteWorkgroup = "redshift-serverless:DeleteWorkgroup";
	/** [Read] redshift-serverless:DescribeOneTimeCredit */
	static readonly DescribeOneTimeCredit =
		"redshift-serverless:DescribeOneTimeCredit";
	/** [Write] redshift-serverless:GetCredentials */
	static readonly actionGetCredentials = "redshift-serverless:GetCredentials";
	/** [Read] redshift-serverless:GetCustomDomainAssociation */
	static readonly actionGetCustomDomainAssociation =
		"redshift-serverless:GetCustomDomainAssociation";
	/** [Read] redshift-serverless:GetEndpointAccess */
	static readonly actionGetEndpointAccess =
		"redshift-serverless:GetEndpointAccess";
	/** [Read] redshift-serverless:GetIdentityCenterAuthToken */
	static readonly actionGetIdentityCenterAuthToken =
		"redshift-serverless:GetIdentityCenterAuthToken";
	/** [Read] redshift-serverless:GetManagedWorkgroup */
	static readonly actionGetManagedWorkgroup =
		"redshift-serverless:GetManagedWorkgroup";
	/** [Read] redshift-serverless:GetNamespace */
	static readonly actionGetNamespace = "redshift-serverless:GetNamespace";
	/** [Read] redshift-serverless:GetRecoveryPoint */
	static readonly actionGetRecoveryPoint =
		"redshift-serverless:GetRecoveryPoint";
	/** [Read] redshift-serverless:GetReservation */
	static readonly actionGetReservation = "redshift-serverless:GetReservation";
	/** [Read] redshift-serverless:GetReservationOffering */
	static readonly actionGetReservationOffering =
		"redshift-serverless:GetReservationOffering";
	/** [Read] redshift-serverless:GetResourcePolicy */
	static readonly actionGetResourcePolicy =
		"redshift-serverless:GetResourcePolicy";
	/** [Read] redshift-serverless:GetScheduledAction */
	static readonly actionGetScheduledAction =
		"redshift-serverless:GetScheduledAction";
	/** [Read] redshift-serverless:GetSnapshot */
	static readonly actionGetSnapshot = "redshift-serverless:GetSnapshot";
	/** [Read] redshift-serverless:GetTableRestoreStatus */
	static readonly actionGetTableRestoreStatus =
		"redshift-serverless:GetTableRestoreStatus";
	/** [Read] redshift-serverless:GetTrack */
	static readonly actionGetTrack = "redshift-serverless:GetTrack";
	/** [Read] redshift-serverless:GetUsageLimit */
	static readonly actionGetUsageLimit = "redshift-serverless:GetUsageLimit";
	/** [Read] redshift-serverless:GetWorkgroup */
	static readonly actionGetWorkgroup = "redshift-serverless:GetWorkgroup";
	/** [Read] redshift-serverless:ListAutonomicsDenylist */
	static readonly ListAutonomicsDenylist =
		"redshift-serverless:ListAutonomicsDenylist";
	/** [List] redshift-serverless:ListCustomDomainAssociations */
	static readonly ListCustomDomainAssociations =
		"redshift-serverless:ListCustomDomainAssociations";
	/** [List] redshift-serverless:ListEndpointAccess */
	static readonly ListEndpointAccess = "redshift-serverless:ListEndpointAccess";
	/** [List] redshift-serverless:ListManagedWorkgroups */
	static readonly ListManagedWorkgroups =
		"redshift-serverless:ListManagedWorkgroups";
	/** [List] redshift-serverless:ListNamespaces */
	static readonly ListNamespaces = "redshift-serverless:ListNamespaces";
	/** [List] redshift-serverless:ListRecoveryPoints */
	static readonly ListRecoveryPoints = "redshift-serverless:ListRecoveryPoints";
	/** [List] redshift-serverless:ListReservationOfferings */
	static readonly ListReservationOfferings =
		"redshift-serverless:ListReservationOfferings";
	/** [List] redshift-serverless:ListReservations */
	static readonly ListReservations = "redshift-serverless:ListReservations";
	/** [List] redshift-serverless:ListScheduledActions */
	static readonly ListScheduledActions =
		"redshift-serverless:ListScheduledActions";
	/** [List] redshift-serverless:ListSnapshotCopyConfigurations */
	static readonly ListSnapshotCopyConfigurations =
		"redshift-serverless:ListSnapshotCopyConfigurations";
	/** [List] redshift-serverless:ListSnapshots */
	static readonly ListSnapshots = "redshift-serverless:ListSnapshots";
	/** [List] redshift-serverless:ListTableRestoreStatus */
	static readonly ListTableRestoreStatus =
		"redshift-serverless:ListTableRestoreStatus";
	/** [List] redshift-serverless:ListTagsForResource */
	static readonly ListTagsForResource =
		"redshift-serverless:ListTagsForResource";
	/** [List] redshift-serverless:ListTracks */
	static readonly ListTracks = "redshift-serverless:ListTracks";
	/** [List] redshift-serverless:ListUsageLimits */
	static readonly ListUsageLimits = "redshift-serverless:ListUsageLimits";
	/** [List] redshift-serverless:ListWorkgroups */
	static readonly ListWorkgroups = "redshift-serverless:ListWorkgroups";
	/** [Write] redshift-serverless:PutResourcePolicy */
	static readonly PutResourcePolicy = "redshift-serverless:PutResourcePolicy";
	/** [Write] redshift-serverless:RestoreFromRecoveryPoint */
	static readonly RestoreFromRecoveryPoint =
		"redshift-serverless:RestoreFromRecoveryPoint";
	/** [Write] redshift-serverless:RestoreFromSnapshot */
	static readonly RestoreFromSnapshot =
		"redshift-serverless:RestoreFromSnapshot";
	/** [Write] redshift-serverless:RestoreTableFromRecoveryPoint */
	static readonly RestoreTableFromRecoveryPoint =
		"redshift-serverless:RestoreTableFromRecoveryPoint";
	/** [Write] redshift-serverless:RestoreTableFromSnapshot */
	static readonly RestoreTableFromSnapshot =
		"redshift-serverless:RestoreTableFromSnapshot";
	/** [Tagging] redshift-serverless:TagResource */
	static readonly TagResource = "redshift-serverless:TagResource";
	/** [Tagging] redshift-serverless:UntagResource */
	static readonly UntagResource = "redshift-serverless:UntagResource";
	/** [Write] redshift-serverless:UpdateAutonomicsDenylist */
	static readonly UpdateAutonomicsDenylist =
		"redshift-serverless:UpdateAutonomicsDenylist";
	/** [Write] redshift-serverless:UpdateCustomDomainAssociation */
	static readonly UpdateCustomDomainAssociation =
		"redshift-serverless:UpdateCustomDomainAssociation";
	/** [Write] redshift-serverless:UpdateEndpointAccess */
	static readonly UpdateEndpointAccess =
		"redshift-serverless:UpdateEndpointAccess";
	/** [Write] redshift-serverless:UpdateNamespace */
	static readonly UpdateNamespace = "redshift-serverless:UpdateNamespace";
	/** [Write] redshift-serverless:UpdateScheduledAction */
	static readonly UpdateScheduledAction =
		"redshift-serverless:UpdateScheduledAction";
	/** [Write] redshift-serverless:UpdateSnapshot */
	static readonly UpdateSnapshot = "redshift-serverless:UpdateSnapshot";
	/** [Write] redshift-serverless:UpdateSnapshotCopyConfiguration */
	static readonly UpdateSnapshotCopyConfiguration =
		"redshift-serverless:UpdateSnapshotCopyConfiguration";
	/** [Write] redshift-serverless:UpdateUsageLimit */
	static readonly UpdateUsageLimit = "redshift-serverless:UpdateUsageLimit";
	/** [Write] redshift-serverless:UpdateWorkgroup */
	static readonly UpdateWorkgroup = "redshift-serverless:UpdateWorkgroup";

	/** All read-level actions. */
	static readonly AllReadActions: string[] = [
		RedshiftServerlessActions.DescribeOneTimeCredit,
		RedshiftServerlessActions.actionGetCustomDomainAssociation,
		RedshiftServerlessActions.actionGetEndpointAccess,
		RedshiftServerlessActions.actionGetIdentityCenterAuthToken,
		RedshiftServerlessActions.actionGetManagedWorkgroup,
		RedshiftServerlessActions.actionGetNamespace,
		RedshiftServerlessActions.actionGetRecoveryPoint,
		RedshiftServerlessActions.actionGetReservation,
		RedshiftServerlessActions.actionGetReservationOffering,
		RedshiftServerlessActions.actionGetResourcePolicy,
		RedshiftServerlessActions.actionGetScheduledAction,
		RedshiftServerlessActions.actionGetSnapshot,
		RedshiftServerlessActions.actionGetTableRestoreStatus,
		RedshiftServerlessActions.actionGetTrack,
		RedshiftServerlessActions.actionGetUsageLimit,
		RedshiftServerlessActions.actionGetWorkgroup,
		RedshiftServerlessActions.ListAutonomicsDenylist,
	];
	/** All write-level actions. */
	static readonly AllWriteActions: string[] = [
		RedshiftServerlessActions.ConvertRecoveryPointToSnapshot,
		RedshiftServerlessActions.CreateCustomDomainAssociation,
		RedshiftServerlessActions.CreateEndpointAccess,
		RedshiftServerlessActions.CreateNamespace,
		RedshiftServerlessActions.CreateReservation,
		RedshiftServerlessActions.CreateScheduledAction,
		RedshiftServerlessActions.CreateSnapshot,
		RedshiftServerlessActions.CreateSnapshotCopyConfiguration,
		RedshiftServerlessActions.CreateUsageLimit,
		RedshiftServerlessActions.CreateWorkgroup,
		RedshiftServerlessActions.DeleteCustomDomainAssociation,
		RedshiftServerlessActions.DeleteEndpointAccess,
		RedshiftServerlessActions.DeleteNamespace,
		RedshiftServerlessActions.DeleteResourcePolicy,
		RedshiftServerlessActions.DeleteScheduledAction,
		RedshiftServerlessActions.DeleteSnapshot,
		RedshiftServerlessActions.DeleteSnapshotCopyConfiguration,
		RedshiftServerlessActions.DeleteUsageLimit,
		RedshiftServerlessActions.DeleteWorkgroup,
		RedshiftServerlessActions.actionGetCredentials,
		RedshiftServerlessActions.PutResourcePolicy,
		RedshiftServerlessActions.RestoreFromRecoveryPoint,
		RedshiftServerlessActions.RestoreFromSnapshot,
		RedshiftServerlessActions.RestoreTableFromRecoveryPoint,
		RedshiftServerlessActions.RestoreTableFromSnapshot,
		RedshiftServerlessActions.UpdateAutonomicsDenylist,
		RedshiftServerlessActions.UpdateCustomDomainAssociation,
		RedshiftServerlessActions.UpdateEndpointAccess,
		RedshiftServerlessActions.UpdateNamespace,
		RedshiftServerlessActions.UpdateScheduledAction,
		RedshiftServerlessActions.UpdateSnapshot,
		RedshiftServerlessActions.UpdateSnapshotCopyConfiguration,
		RedshiftServerlessActions.UpdateUsageLimit,
		RedshiftServerlessActions.UpdateWorkgroup,
	];
	/** All list-level actions. */
	static readonly AllListActions: string[] = [
		RedshiftServerlessActions.ListCustomDomainAssociations,
		RedshiftServerlessActions.ListEndpointAccess,
		RedshiftServerlessActions.ListManagedWorkgroups,
		RedshiftServerlessActions.ListNamespaces,
		RedshiftServerlessActions.ListRecoveryPoints,
		RedshiftServerlessActions.ListReservationOfferings,
		RedshiftServerlessActions.ListReservations,
		RedshiftServerlessActions.ListScheduledActions,
		RedshiftServerlessActions.ListSnapshotCopyConfigurations,
		RedshiftServerlessActions.ListSnapshots,
		RedshiftServerlessActions.ListTableRestoreStatus,
		RedshiftServerlessActions.ListTagsForResource,
		RedshiftServerlessActions.ListTracks,
		RedshiftServerlessActions.ListUsageLimits,
		RedshiftServerlessActions.ListWorkgroups,
	];
	/** All permission-management-level actions. */
	static readonly AllPermissionManagementActions: string[] = [];
	/** All tagging-level actions. */
	static readonly AllTaggingActions: string[] = [
		RedshiftServerlessActions.TagResource,
		RedshiftServerlessActions.UntagResource,
	];
}

/**
 * Properties for building a endpointAccess ARN.
 */
export interface RedshiftServerlessEndpointAccessArnProps {
	/** The EndpointAccessId component of the ARN. */
	readonly endpointAccessId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a endpointAccess ARN.
 */
export interface RedshiftServerlessEndpointAccessArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The EndpointAccessId component. */
	readonly endpointAccessId: string;
}

/**
 * Properties for building a managed-workgroup ARN.
 */
export interface RedshiftServerlessManagedWorkgroupArnProps {
	/** The ManagedWorkgroupName component of the ARN. */
	readonly managedWorkgroupName: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a managed-workgroup ARN.
 */
export interface RedshiftServerlessManagedWorkgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The ManagedWorkgroupName component. */
	readonly managedWorkgroupName: string;
}

/**
 * Properties for building a namespace ARN.
 */
export interface RedshiftServerlessNamespaceArnProps {
	/** The NamespaceId component of the ARN. */
	readonly namespaceId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a namespace ARN.
 */
export interface RedshiftServerlessNamespaceArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The NamespaceId component. */
	readonly namespaceId: string;
}

/**
 * Properties for building a recoveryPoint ARN.
 */
export interface RedshiftServerlessRecoveryPointArnProps {
	/** The RecoveryPointId component of the ARN. */
	readonly recoveryPointId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a recoveryPoint ARN.
 */
export interface RedshiftServerlessRecoveryPointArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The RecoveryPointId component. */
	readonly recoveryPointId: string;
}

/**
 * Properties for building a snapshot ARN.
 */
export interface RedshiftServerlessSnapshotArnProps {
	/** The SnapshotId component of the ARN. */
	readonly snapshotId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a snapshot ARN.
 */
export interface RedshiftServerlessSnapshotArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The SnapshotId component. */
	readonly snapshotId: string;
}

/**
 * Properties for building a workgroup ARN.
 */
export interface RedshiftServerlessWorkgroupArnProps {
	/** The WorkgroupId component of the ARN. */
	readonly workgroupId: string;
	/** AWS region. Defaults to "*". */
	readonly region?: string;
	/** AWS account ID. Defaults to "*". */
	readonly account?: string;
	/** AWS partition. Defaults to "aws". */
	readonly partition?: string;
}

/**
 * Parsed components of a workgroup ARN.
 */
export interface RedshiftServerlessWorkgroupArnComponents {
	/** AWS partition. */
	readonly partition: string;
	/** AWS region. */
	readonly region: string;
	/** AWS account ID. */
	readonly account: string;
	/** The WorkgroupId component. */
	readonly workgroupId: string;
}

const EndpointAccessArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):managedvpcendpoint\/(?<endpointAccessId>[^:/?]+)$/;
const ManagedWorkgroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):managed-workgroup\/(?<managedWorkgroupName>[^:/?]+)$/;
const NamespaceArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):namespace\/(?<namespaceId>[^:/?]+)$/;
const RecoveryPointArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):recoverypoint\/(?<recoveryPointId>[^:/?]+)$/;
const SnapshotArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):snapshot\/(?<snapshotId>[^:/?]+)$/;
const WorkgroupArnRegex =
	/^arn:(?<partition>[^:]+):redshift-serverless:(?<region>[^:]*):(?<account>[^:]*):workgroup\/(?<workgroupId>[^:/?]+)$/;

/**
 * ARN builders, validators, and parsers for redshift-serverless resources.
 */
export class RedshiftServerlessResources {
	/**
	 * Builds an ARN for the endpointAccess resource.
	 */
	static endpointAccess(
		props: RedshiftServerlessEndpointAccessArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:managedvpcendpoint/${props.endpointAccessId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the endpointAccess resource.
	 */
	static isValidEndpointAccessArn(arn: string): boolean {
		return EndpointAccessArnRegex.test(arn);
	}

	/**
	 * Parses a endpointAccess ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEndpointAccessArn(
		arn: string,
	): RedshiftServerlessEndpointAccessArnComponents {
		const match = EndpointAccessArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid endpointAccess ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			endpointAccessId: match.groups!.endpointAccessId,
		};
	}

	/**
	 * Builds an ARN for the managed-workgroup resource.
	 */
	static managedWorkgroup(
		props: RedshiftServerlessManagedWorkgroupArnProps,
	): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:managed-workgroup/${props.managedWorkgroupName}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the managed-workgroup resource.
	 */
	static isValidManagedWorkgroupArn(arn: string): boolean {
		return ManagedWorkgroupArnRegex.test(arn);
	}

	/**
	 * Parses a managed-workgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseManagedWorkgroupArn(
		arn: string,
	): RedshiftServerlessManagedWorkgroupArnComponents {
		const match = ManagedWorkgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid managed-workgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			managedWorkgroupName: match.groups!.managedWorkgroupName,
		};
	}

	/**
	 * Builds an ARN for the namespace resource.
	 */
	static namespace(props: RedshiftServerlessNamespaceArnProps): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:namespace/${props.namespaceId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the namespace resource.
	 */
	static isValidNamespaceArn(arn: string): boolean {
		return NamespaceArnRegex.test(arn);
	}

	/**
	 * Parses a namespace ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseNamespaceArn(
		arn: string,
	): RedshiftServerlessNamespaceArnComponents {
		const match = NamespaceArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid namespace ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			namespaceId: match.groups!.namespaceId,
		};
	}

	/**
	 * Builds an ARN for the recoveryPoint resource.
	 */
	static recoveryPoint(props: RedshiftServerlessRecoveryPointArnProps): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:recoverypoint/${props.recoveryPointId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the recoveryPoint resource.
	 */
	static isValidRecoveryPointArn(arn: string): boolean {
		return RecoveryPointArnRegex.test(arn);
	}

	/**
	 * Parses a recoveryPoint ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRecoveryPointArn(
		arn: string,
	): RedshiftServerlessRecoveryPointArnComponents {
		const match = RecoveryPointArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid recoveryPoint ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			recoveryPointId: match.groups!.recoveryPointId,
		};
	}

	/**
	 * Builds an ARN for the snapshot resource.
	 */
	static snapshot(props: RedshiftServerlessSnapshotArnProps): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:snapshot/${props.snapshotId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the snapshot resource.
	 */
	static isValidSnapshotArn(arn: string): boolean {
		return SnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a snapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSnapshotArn(
		arn: string,
	): RedshiftServerlessSnapshotArnComponents {
		const match = SnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid snapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			snapshotId: match.groups!.snapshotId,
		};
	}

	/**
	 * Builds an ARN for the workgroup resource.
	 */
	static workgroup(props: RedshiftServerlessWorkgroupArnProps): string {
		return `arn:${props.partition ?? "aws"}:redshift-serverless:${props.region ?? "*"}:${props.account ?? "*"}:workgroup/${props.workgroupId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the workgroup resource.
	 */
	static isValidWorkgroupArn(arn: string): boolean {
		return WorkgroupArnRegex.test(arn);
	}

	/**
	 * Parses a workgroup ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseWorkgroupArn(
		arn: string,
	): RedshiftServerlessWorkgroupArnComponents {
		const match = WorkgroupArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid workgroup ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			workgroupId: match.groups!.workgroupId,
		};
	}
}

/**
 * API operation to required IAM actions mapping for redshift-serverless.
 */
export class RedshiftServerlessOperations {
	/** IAM actions required for the ConvertRecoveryPointToSnapshot API call. */
	static readonly ConvertRecoveryPointToSnapshot: string[] = [
		"redshift-serverless:ConvertRecoveryPointToSnapshot",
		"redshift-serverless:TagResource",
	];
	/** IAM actions required for the CreateCustomDomainAssociation API call. */
	static readonly CreateCustomDomainAssociation: string[] = [
		"redshift-serverless:CreateCustomDomainAssociation",
	];
	/** IAM actions required for the CreateEndpointAccess API call. */
	static readonly CreateEndpointAccess: string[] = [
		"redshift-serverless:CreateEndpointAccess",
	];
	/** IAM actions required for the CreateNamespace API call. */
	static readonly CreateNamespace: string[] = [
		"redshift-serverless:CreateNamespace",
		"iam:PassRole",
		"redshift-serverless:TagResource",
	];
	/** IAM actions required for the CreateReservation API call. */
	static readonly CreateReservation: string[] = [
		"redshift-serverless:CreateReservation",
	];
	/** IAM actions required for the CreateScheduledAction API call. */
	static readonly CreateScheduledAction: string[] = [
		"redshift-serverless:CreateScheduledAction",
		"redshift-serverless:CreateSnapshot",
		"iam:PassRole",
	];
	/** IAM actions required for the CreateSnapshot API call. */
	static readonly CreateSnapshot: string[] = [
		"redshift-serverless:CreateSnapshot",
		"redshift-serverless:TagResource",
	];
	/** IAM actions required for the CreateSnapshotCopyConfiguration API call. */
	static readonly CreateSnapshotCopyConfiguration: string[] = [
		"redshift-serverless:CreateSnapshotCopyConfiguration",
	];
	/** IAM actions required for the CreateUsageLimit API call. */
	static readonly CreateUsageLimit: string[] = [
		"redshift-serverless:CreateUsageLimit",
	];
	/** IAM actions required for the CreateWorkgroup API call. */
	static readonly CreateWorkgroup: string[] = [
		"redshift-serverless:CreateWorkgroup",
		"redshift-serverless:TagResource",
	];
	/** IAM actions required for the DeleteCustomDomainAssociation API call. */
	static readonly DeleteCustomDomainAssociation: string[] = [
		"redshift-serverless:DeleteCustomDomainAssociation",
	];
	/** IAM actions required for the DeleteEndpointAccess API call. */
	static readonly DeleteEndpointAccess: string[] = [
		"redshift-serverless:DeleteEndpointAccess",
	];
	/** IAM actions required for the DeleteNamespace API call. */
	static readonly DeleteNamespace: string[] = [
		"redshift-serverless:DeleteNamespace",
	];
	/** IAM actions required for the DeleteResourcePolicy API call. */
	static readonly DeleteResourcePolicy: string[] = [
		"redshift-serverless:DeleteResourcePolicy",
	];
	/** IAM actions required for the DeleteScheduledAction API call. */
	static readonly DeleteScheduledAction: string[] = [
		"redshift-serverless:DeleteScheduledAction",
	];
	/** IAM actions required for the DeleteSnapshot API call. */
	static readonly DeleteSnapshot: string[] = [
		"redshift-serverless:DeleteSnapshot",
	];
	/** IAM actions required for the DeleteSnapshotCopyConfiguration API call. */
	static readonly DeleteSnapshotCopyConfiguration: string[] = [
		"redshift-serverless:DeleteSnapshotCopyConfiguration",
	];
	/** IAM actions required for the DeleteUsageLimit API call. */
	static readonly DeleteUsageLimit: string[] = [
		"redshift-serverless:DeleteUsageLimit",
	];
	/** IAM actions required for the DeleteWorkgroup API call. */
	static readonly DeleteWorkgroup: string[] = [
		"redshift-serverless:DeleteWorkgroup",
	];
	/** IAM actions required for the GetCredentials API call. */
	static readonly opGetCredentials: string[] = [
		"redshift-serverless:GetCredentials",
	];
	/** IAM actions required for the GetCustomDomainAssociation API call. */
	static readonly opGetCustomDomainAssociation: string[] = [
		"redshift-serverless:GetCustomDomainAssociation",
	];
	/** IAM actions required for the GetEndpointAccess API call. */
	static readonly opGetEndpointAccess: string[] = [
		"redshift-serverless:GetEndpointAccess",
	];
	/** IAM actions required for the GetIdentityCenterAuthToken API call. */
	static readonly opGetIdentityCenterAuthToken: string[] = [
		"redshift-serverless:GetIdentityCenterAuthToken",
	];
	/** IAM actions required for the GetNamespace API call. */
	static readonly opGetNamespace: string[] = [
		"redshift-serverless:GetNamespace",
	];
	/** IAM actions required for the GetRecoveryPoint API call. */
	static readonly opGetRecoveryPoint: string[] = [
		"redshift-serverless:GetRecoveryPoint",
	];
	/** IAM actions required for the GetReservation API call. */
	static readonly opGetReservation: string[] = [
		"redshift-serverless:GetReservation",
	];
	/** IAM actions required for the GetReservationOffering API call. */
	static readonly opGetReservationOffering: string[] = [
		"redshift-serverless:GetReservationOffering",
	];
	/** IAM actions required for the GetResourcePolicy API call. */
	static readonly opGetResourcePolicy: string[] = [
		"redshift-serverless:GetResourcePolicy",
	];
	/** IAM actions required for the GetScheduledAction API call. */
	static readonly opGetScheduledAction: string[] = [
		"redshift-serverless:GetScheduledAction",
	];
	/** IAM actions required for the GetSnapshot API call. */
	static readonly opGetSnapshot: string[] = ["redshift-serverless:GetSnapshot"];
	/** IAM actions required for the GetTableRestoreStatus API call. */
	static readonly opGetTableRestoreStatus: string[] = [
		"redshift-serverless:GetTableRestoreStatus",
	];
	/** IAM actions required for the GetTrack API call. */
	static readonly opGetTrack: string[] = ["redshift-serverless:GetTrack"];
	/** IAM actions required for the GetUsageLimit API call. */
	static readonly opGetUsageLimit: string[] = [
		"redshift-serverless:GetUsageLimit",
	];
	/** IAM actions required for the GetWorkgroup API call. */
	static readonly opGetWorkgroup: string[] = [
		"redshift-serverless:GetWorkgroup",
	];
	/** IAM actions required for the ListCustomDomainAssociations API call. */
	static readonly ListCustomDomainAssociations: string[] = [
		"redshift-serverless:ListCustomDomainAssociations",
	];
	/** IAM actions required for the ListEndpointAccess API call. */
	static readonly ListEndpointAccess: string[] = [
		"redshift-serverless:ListEndpointAccess",
	];
	/** IAM actions required for the ListManagedWorkgroups API call. */
	static readonly ListManagedWorkgroups: string[] = [
		"redshift-serverless:ListManagedWorkgroups",
	];
	/** IAM actions required for the ListNamespaces API call. */
	static readonly ListNamespaces: string[] = [
		"redshift-serverless:ListNamespaces",
	];
	/** IAM actions required for the ListRecoveryPoints API call. */
	static readonly ListRecoveryPoints: string[] = [
		"redshift-serverless:ListRecoveryPoints",
	];
	/** IAM actions required for the ListReservationOfferings API call. */
	static readonly ListReservationOfferings: string[] = [
		"redshift-serverless:ListReservationOfferings",
	];
	/** IAM actions required for the ListReservations API call. */
	static readonly ListReservations: string[] = [
		"redshift-serverless:ListReservations",
	];
	/** IAM actions required for the ListScheduledActions API call. */
	static readonly ListScheduledActions: string[] = [
		"redshift-serverless:ListScheduledActions",
	];
	/** IAM actions required for the ListSnapshotCopyConfigurations API call. */
	static readonly ListSnapshotCopyConfigurations: string[] = [
		"redshift-serverless:ListSnapshotCopyConfigurations",
	];
	/** IAM actions required for the ListSnapshots API call. */
	static readonly ListSnapshots: string[] = [
		"redshift-serverless:ListSnapshots",
	];
	/** IAM actions required for the ListTableRestoreStatus API call. */
	static readonly ListTableRestoreStatus: string[] = [
		"redshift-serverless:ListTableRestoreStatus",
	];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly ListTagsForResource: string[] = [
		"redshift-serverless:ListTagsForResource",
	];
	/** IAM actions required for the ListTracks API call. */
	static readonly ListTracks: string[] = ["redshift-serverless:ListTracks"];
	/** IAM actions required for the ListUsageLimits API call. */
	static readonly ListUsageLimits: string[] = [
		"redshift-serverless:ListUsageLimits",
	];
	/** IAM actions required for the ListWorkgroups API call. */
	static readonly ListWorkgroups: string[] = [
		"redshift-serverless:ListWorkgroups",
	];
	/** IAM actions required for the PutResourcePolicy API call. */
	static readonly PutResourcePolicy: string[] = [
		"redshift-serverless:PutResourcePolicy",
	];
	/** IAM actions required for the RestoreFromRecoveryPoint API call. */
	static readonly RestoreFromRecoveryPoint: string[] = [
		"redshift-serverless:RestoreFromRecoveryPoint",
	];
	/** IAM actions required for the RestoreFromSnapshot API call. */
	static readonly RestoreFromSnapshot: string[] = [
		"redshift-serverless:RestoreFromSnapshot",
	];
	/** IAM actions required for the RestoreTableFromRecoveryPoint API call. */
	static readonly RestoreTableFromRecoveryPoint: string[] = [
		"redshift-serverless:RestoreTableFromRecoveryPoint",
	];
	/** IAM actions required for the RestoreTableFromSnapshot API call. */
	static readonly RestoreTableFromSnapshot: string[] = [
		"redshift-serverless:RestoreTableFromSnapshot",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TagResource: string[] = ["redshift-serverless:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UntagResource: string[] = [
		"redshift-serverless:UntagResource",
	];
	/** IAM actions required for the UpdateCustomDomainAssociation API call. */
	static readonly UpdateCustomDomainAssociation: string[] = [
		"redshift-serverless:UpdateCustomDomainAssociation",
	];
	/** IAM actions required for the UpdateEndpointAccess API call. */
	static readonly UpdateEndpointAccess: string[] = [
		"redshift-serverless:UpdateEndpointAccess",
	];
	/** IAM actions required for the UpdateLakehouseConfiguration API call. */
	static readonly UpdateLakehouseConfiguration: string[] = [
		"redshift:AssociateDataShareConsumer",
		"redshift:DeregisterNamespace",
		"iam:PassRole",
		"redshift:RegisterNamespace",
	];
	/** IAM actions required for the UpdateNamespace API call. */
	static readonly UpdateNamespace: string[] = [
		"iam:PassRole",
		"redshift-serverless:UpdateNamespace",
	];
	/** IAM actions required for the UpdateScheduledAction API call. */
	static readonly UpdateScheduledAction: string[] = [
		"redshift-serverless:CreateSnapshot",
		"iam:PassRole",
		"redshift-serverless:UpdateScheduledAction",
	];
	/** IAM actions required for the UpdateSnapshot API call. */
	static readonly UpdateSnapshot: string[] = [
		"redshift-serverless:UpdateSnapshot",
	];
	/** IAM actions required for the UpdateSnapshotCopyConfiguration API call. */
	static readonly UpdateSnapshotCopyConfiguration: string[] = [
		"redshift-serverless:UpdateSnapshotCopyConfiguration",
	];
	/** IAM actions required for the UpdateUsageLimit API call. */
	static readonly UpdateUsageLimit: string[] = [
		"redshift-serverless:UpdateUsageLimit",
	];
	/** IAM actions required for the UpdateWorkgroup API call. */
	static readonly UpdateWorkgroup: string[] = [
		"redshift-serverless:UpdateWorkgroup",
	];
}

/**
 * Condition key constants and builders for redshift-serverless.
 */
export class RedshiftServerlessConditions {
	/** Condition keys applicable to the ConvertRecoveryPointToSnapshot action. */
	static readonly ConvertRecoveryPointToSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateNamespace action. */
	static readonly CreateNamespaceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateSnapshot action. */
	static readonly CreateSnapshotConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the CreateWorkgroup action. */
	static readonly CreateWorkgroupConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly ListTagsForResourceConditionKeys: string[] = [
		"aws:ResourceTag/${TagKey}",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TagResourceConditionKeys: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
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
	/** Condition key: redshift-serverless:endpointAccessId (String) */
	static readonly ENDPOINT_ACCESS_ID = "redshift-serverless:endpointAccessId";
	/** Condition key: redshift-serverless:managedWorkgroupName (String) */
	static readonly MANAGED_WORKGROUP_NAME =
		"redshift-serverless:managedWorkgroupName";
	/** Condition key: redshift-serverless:namespaceId (String) */
	static readonly NAMESPACE_ID = "redshift-serverless:namespaceId";
	/** Condition key: redshift-serverless:recoveryPointId (String) */
	static readonly RECOVERY_POINT_ID = "redshift-serverless:recoveryPointId";
	/** Condition key: redshift-serverless:snapshotId (String) */
	static readonly SNAPSHOT_ID = "redshift-serverless:snapshotId";
	/** Condition key: redshift-serverless:tableRestoreRequestId (String) */
	static readonly TABLE_RESTORE_REQUEST_ID =
		"redshift-serverless:tableRestoreRequestId";
	/** Condition key: redshift-serverless:workgroupId (String) */
	static readonly WORKGROUP_ID = "redshift-serverless:workgroupId";

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
	 * Generates a condition block for `redshift-serverless:endpointAccessId`.
	 */
	static endpointAccessId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift-serverless:endpointAccessId": value } };
	}

	/**
	 * Generates a condition block for `redshift-serverless:managedWorkgroupName`.
	 */
	static managedWorkgroupName(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "redshift-serverless:managedWorkgroupName": value },
		};
	}

	/**
	 * Generates a condition block for `redshift-serverless:namespaceId`.
	 */
	static namespaceId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift-serverless:namespaceId": value } };
	}

	/**
	 * Generates a condition block for `redshift-serverless:recoveryPointId`.
	 */
	static recoveryPointId(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift-serverless:recoveryPointId": value } };
	}

	/**
	 * Generates a condition block for `redshift-serverless:snapshotId`.
	 */
	static snapshotId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift-serverless:snapshotId": value } };
	}

	/**
	 * Generates a condition block for `redshift-serverless:tableRestoreRequestId`.
	 */
	static tableRestoreRequestId(
		value: string,
	): Record<string, Record<string, string>> {
		return {
			StringEquals: { "redshift-serverless:tableRestoreRequestId": value },
		};
	}

	/**
	 * Generates a condition block for `redshift-serverless:workgroupId`.
	 */
	static workgroupId(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "redshift-serverless:workgroupId": value } };
	}
}
