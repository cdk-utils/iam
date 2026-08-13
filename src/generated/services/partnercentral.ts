// =============================================================================
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated from AWS Service Authorization Reference data
// Source: data/service-reference/partnercentral.json
// Run `npx projen generate-constants` to regenerate
// =============================================================================

/**
 * IAM action constants for the partnercentral service.
 */
export class PartnercentralActions {
	/** The IAM service prefix. */
	static readonly SERVICE_PREFIX = "partnercentral";

	/** [Write] partnercentral:AcceptChannelHandshake */
	static readonly ACCEPT_CHANNEL_HANDSHAKE =
		"partnercentral:AcceptChannelHandshake";
	/** [Write] partnercentral:AcceptConnectionInvitation */
	static readonly ACCEPT_CONNECTION_INVITATION =
		"partnercentral:AcceptConnectionInvitation";
	/** [Write] partnercentral:AcceptEngagementInvitation */
	static readonly ACCEPT_ENGAGEMENT_INVITATION =
		"partnercentral:AcceptEngagementInvitation";
	/** [Write] partnercentral:AmendBenefitApplication */
	static readonly AMEND_BENEFIT_APPLICATION =
		"partnercentral:AmendBenefitApplication";
	/** [Write] partnercentral:AssignOpportunity */
	static readonly ASSIGN_OPPORTUNITY = "partnercentral:AssignOpportunity";
	/** [Write] partnercentral:AssociateAwsTrainingCertificationEmailDomain */
	static readonly ASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN =
		"partnercentral:AssociateAwsTrainingCertificationEmailDomain";
	/** [Write] partnercentral:AssociateBenefitApplicationResource */
	static readonly ASSOCIATE_BENEFIT_APPLICATION_RESOURCE =
		"partnercentral:AssociateBenefitApplicationResource";
	/** [Write] partnercentral:AssociateOpportunity */
	static readonly ASSOCIATE_OPPORTUNITY = "partnercentral:AssociateOpportunity";
	/** [Write] partnercentral:CancelBenefitApplication */
	static readonly CANCEL_BENEFIT_APPLICATION =
		"partnercentral:CancelBenefitApplication";
	/** [Write] partnercentral:CancelChannelHandshake */
	static readonly CANCEL_CHANNEL_HANDSHAKE =
		"partnercentral:CancelChannelHandshake";
	/** [Write] partnercentral:CancelConnection */
	static readonly CANCEL_CONNECTION = "partnercentral:CancelConnection";
	/** [Write] partnercentral:CancelConnectionInvitation */
	static readonly CANCEL_CONNECTION_INVITATION =
		"partnercentral:CancelConnectionInvitation";
	/** [Write] partnercentral:CancelProfileUpdateTask */
	static readonly CANCEL_PROFILE_UPDATE_TASK =
		"partnercentral:CancelProfileUpdateTask";
	/** [Write] partnercentral:CreateBenefitApplication */
	static readonly CREATE_BENEFIT_APPLICATION =
		"partnercentral:CreateBenefitApplication";
	/** [Write] partnercentral:CreateBusinessPlan */
	static readonly CREATE_BUSINESS_PLAN = "partnercentral:CreateBusinessPlan";
	/** [Write] partnercentral:CreateChannelHandshake */
	static readonly CREATE_CHANNEL_HANDSHAKE =
		"partnercentral:CreateChannelHandshake";
	/** [Write] partnercentral:CreateCollaborationChannelMembers */
	static readonly CREATE_COLLABORATION_CHANNEL_MEMBERS =
		"partnercentral:CreateCollaborationChannelMembers";
	/** [Write] partnercentral:CreateCollaborationChannelRequest */
	static readonly CREATE_COLLABORATION_CHANNEL_REQUEST =
		"partnercentral:CreateCollaborationChannelRequest";
	/** [Write] partnercentral:CreateConnectionInvitation */
	static readonly CREATE_CONNECTION_INVITATION =
		"partnercentral:CreateConnectionInvitation";
	/** [Write] partnercentral:CreateEngagement */
	static readonly CREATE_ENGAGEMENT = "partnercentral:CreateEngagement";
	/** [Write] partnercentral:CreateEngagementContext */
	static readonly CREATE_ENGAGEMENT_CONTEXT =
		"partnercentral:CreateEngagementContext";
	/** [Write] partnercentral:CreateEngagementInvitation */
	static readonly CREATE_ENGAGEMENT_INVITATION =
		"partnercentral:CreateEngagementInvitation";
	/** [Write] partnercentral:CreateMarketplaceRevenueShare */
	static readonly CREATE_MARKETPLACE_REVENUE_SHARE =
		"partnercentral:CreateMarketplaceRevenueShare";
	/** [Write] partnercentral:CreateMarketplaceRevenueShareAllocation */
	static readonly CREATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION =
		"partnercentral:CreateMarketplaceRevenueShareAllocation";
	/** [Write] partnercentral:CreateOpportunity */
	static readonly CREATE_OPPORTUNITY = "partnercentral:CreateOpportunity";
	/** [Write] partnercentral:CreatePartner */
	static readonly CREATE_PARTNER = "partnercentral:CreatePartner";
	/** [Write] partnercentral:CreateProgramManagementAccount */
	static readonly CREATE_PROGRAM_MANAGEMENT_ACCOUNT =
		"partnercentral:CreateProgramManagementAccount";
	/** [Write] partnercentral:CreateRelationship */
	static readonly CREATE_RELATIONSHIP = "partnercentral:CreateRelationship";
	/** [Write] partnercentral:CreateResourceSnapshot */
	static readonly CREATE_RESOURCE_SNAPSHOT =
		"partnercentral:CreateResourceSnapshot";
	/** [Write] partnercentral:CreateResourceSnapshotJob */
	static readonly CREATE_RESOURCE_SNAPSHOT_JOB =
		"partnercentral:CreateResourceSnapshotJob";
	/** [Write] partnercentral:CreateRevenueAttribution */
	static readonly CREATE_REVENUE_ATTRIBUTION =
		"partnercentral:CreateRevenueAttribution";
	/** [Write] partnercentral:DeleteProgramManagementAccount */
	static readonly DELETE_PROGRAM_MANAGEMENT_ACCOUNT =
		"partnercentral:DeleteProgramManagementAccount";
	/** [Write] partnercentral:DeleteRelationship */
	static readonly DELETE_RELATIONSHIP = "partnercentral:DeleteRelationship";
	/** [Write] partnercentral:DeleteResourceSnapshotJob */
	static readonly DELETE_RESOURCE_SNAPSHOT_JOB =
		"partnercentral:DeleteResourceSnapshotJob";
	/** [Write] partnercentral:DisassociateAwsTrainingCertificationEmailDomain */
	static readonly DISASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN =
		"partnercentral:DisassociateAwsTrainingCertificationEmailDomain";
	/** [Write] partnercentral:DisassociateBenefitApplicationResource */
	static readonly DISASSOCIATE_BENEFIT_APPLICATION_RESOURCE =
		"partnercentral:DisassociateBenefitApplicationResource";
	/** [Write] partnercentral:DisassociateOpportunity */
	static readonly DISASSOCIATE_OPPORTUNITY =
		"partnercentral:DisassociateOpportunity";
	/** [Write] partnercentral:EnrollInPartnerPath */
	static readonly ENROLL_IN_PARTNER_PATH = "partnercentral:EnrollInPartnerPath";
	/** [Read] partnercentral:GetAllianceLeadContact */
	static readonly GET_ALLIANCE_LEAD_CONTACT =
		"partnercentral:GetAllianceLeadContact";
	/** [Read] partnercentral:GetAwsOpportunitySummary */
	static readonly GET_AWS_OPPORTUNITY_SUMMARY =
		"partnercentral:GetAwsOpportunitySummary";
	/** [Read] partnercentral:GetBenefit */
	static readonly GET_BENEFIT = "partnercentral:GetBenefit";
	/** [Read] partnercentral:GetBenefitAllocation */
	static readonly GET_BENEFIT_ALLOCATION =
		"partnercentral:GetBenefitAllocation";
	/** [Read] partnercentral:GetBenefitApplication */
	static readonly GET_BENEFIT_APPLICATION =
		"partnercentral:GetBenefitApplication";
	/** [Read] partnercentral:GetBusinessPlan */
	static readonly GET_BUSINESS_PLAN = "partnercentral:GetBusinessPlan";
	/** [Read] partnercentral:GetCollaborationChannel */
	static readonly GET_COLLABORATION_CHANNEL =
		"partnercentral:GetCollaborationChannel";
	/** [Read] partnercentral:GetConnection */
	static readonly GET_CONNECTION = "partnercentral:GetConnection";
	/** [Read] partnercentral:GetConnectionInvitation */
	static readonly GET_CONNECTION_INVITATION =
		"partnercentral:GetConnectionInvitation";
	/** [Read] partnercentral:GetConnectionPreferences */
	static readonly GET_CONNECTION_PREFERENCES =
		"partnercentral:GetConnectionPreferences";
	/** [Read] partnercentral:GetEngagement */
	static readonly GET_ENGAGEMENT = "partnercentral:GetEngagement";
	/** [Read] partnercentral:GetEngagementInvitation */
	static readonly GET_ENGAGEMENT_INVITATION =
		"partnercentral:GetEngagementInvitation";
	/** [Read] partnercentral:GetMarketplaceRevenueShare */
	static readonly GET_MARKETPLACE_REVENUE_SHARE =
		"partnercentral:GetMarketplaceRevenueShare";
	/** [Read] partnercentral:GetMarketplaceRevenueShareAllocation */
	static readonly GET_MARKETPLACE_REVENUE_SHARE_ALLOCATION =
		"partnercentral:GetMarketplaceRevenueShareAllocation";
	/** [Read] partnercentral:GetOpportunity */
	static readonly GET_OPPORTUNITY = "partnercentral:GetOpportunity";
	/** [Read] partnercentral:GetPartner */
	static readonly GET_PARTNER = "partnercentral:GetPartner";
	/** [Read] partnercentral:GetPartnerDashboard */
	static readonly GET_PARTNER_DASHBOARD = "partnercentral:GetPartnerDashboard";
	/** [Read] partnercentral:GetPartnerProfile */
	static readonly GET_PARTNER_PROFILE = "partnercentral:GetPartnerProfile";
	/** [Read] partnercentral:GetProfileUpdateTask */
	static readonly GET_PROFILE_UPDATE_TASK =
		"partnercentral:GetProfileUpdateTask";
	/** [Read] partnercentral:GetProfileVisibility */
	static readonly GET_PROFILE_VISIBILITY =
		"partnercentral:GetProfileVisibility";
	/** [Read] partnercentral:GetProgramManagementAccount */
	static readonly GET_PROGRAM_MANAGEMENT_ACCOUNT =
		"partnercentral:GetProgramManagementAccount";
	/** [Read] partnercentral:GetProspectingFromEngagementTask */
	static readonly GET_PROSPECTING_FROM_ENGAGEMENT_TASK =
		"partnercentral:GetProspectingFromEngagementTask";
	/** [Read] partnercentral:GetQualificationsAssociationDetails */
	static readonly GET_QUALIFICATIONS_ASSOCIATION_DETAILS =
		"partnercentral:GetQualificationsAssociationDetails";
	/** [Read] partnercentral:GetQualificationsAssociationTask */
	static readonly GET_QUALIFICATIONS_ASSOCIATION_TASK =
		"partnercentral:GetQualificationsAssociationTask";
	/** [Read] partnercentral:GetQualificationsDisassociationTask */
	static readonly GET_QUALIFICATIONS_DISASSOCIATION_TASK =
		"partnercentral:GetQualificationsDisassociationTask";
	/** [Read] partnercentral:GetRelationship */
	static readonly GET_RELATIONSHIP = "partnercentral:GetRelationship";
	/** [Read] partnercentral:GetResourceSnapshot */
	static readonly GET_RESOURCE_SNAPSHOT = "partnercentral:GetResourceSnapshot";
	/** [Read] partnercentral:GetResourceSnapshotJob */
	static readonly GET_RESOURCE_SNAPSHOT_JOB =
		"partnercentral:GetResourceSnapshotJob";
	/** [Read] partnercentral:GetRevenueAttribution */
	static readonly GET_REVENUE_ATTRIBUTION =
		"partnercentral:GetRevenueAttribution";
	/** [Read] partnercentral:GetRevenueAttributionAllocation */
	static readonly GET_REVENUE_ATTRIBUTION_ALLOCATION =
		"partnercentral:GetRevenueAttributionAllocation";
	/** [Read] partnercentral:GetRevenueAttributionAllocationsTask */
	static readonly GET_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK =
		"partnercentral:GetRevenueAttributionAllocationsTask";
	/** [Read] partnercentral:GetSellingSystemSettings */
	static readonly GET_SELLING_SYSTEM_SETTINGS =
		"partnercentral:GetSellingSystemSettings";
	/** [Read] partnercentral:GetVerification */
	static readonly GET_VERIFICATION = "partnercentral:GetVerification";
	/** [List] partnercentral:ListBenefitAllocations */
	static readonly LIST_BENEFIT_ALLOCATIONS =
		"partnercentral:ListBenefitAllocations";
	/** [List] partnercentral:ListBenefitApplications */
	static readonly LIST_BENEFIT_APPLICATIONS =
		"partnercentral:ListBenefitApplications";
	/** [List] partnercentral:ListBenefits */
	static readonly LIST_BENEFITS = "partnercentral:ListBenefits";
	/** [List] partnercentral:ListBusinessPlans */
	static readonly LIST_BUSINESS_PLANS = "partnercentral:ListBusinessPlans";
	/** [List] partnercentral:ListChannelHandshakes */
	static readonly LIST_CHANNEL_HANDSHAKES =
		"partnercentral:ListChannelHandshakes";
	/** [List] partnercentral:ListCollaborationChannels */
	static readonly LIST_COLLABORATION_CHANNELS =
		"partnercentral:ListCollaborationChannels";
	/** [List] partnercentral:ListConnectionInvitations */
	static readonly LIST_CONNECTION_INVITATIONS =
		"partnercentral:ListConnectionInvitations";
	/** [List] partnercentral:ListConnections */
	static readonly LIST_CONNECTIONS = "partnercentral:ListConnections";
	/** [List] partnercentral:ListEngagementByAcceptingInvitationTasks */
	static readonly LIST_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASKS =
		"partnercentral:ListEngagementByAcceptingInvitationTasks";
	/** [List] partnercentral:ListEngagementFromOpportunityTasks */
	static readonly LIST_ENGAGEMENT_FROM_OPPORTUNITY_TASKS =
		"partnercentral:ListEngagementFromOpportunityTasks";
	/** [List] partnercentral:ListEngagementInvitations */
	static readonly LIST_ENGAGEMENT_INVITATIONS =
		"partnercentral:ListEngagementInvitations";
	/** [Read] partnercentral:ListEngagementMembers */
	static readonly LIST_ENGAGEMENT_MEMBERS =
		"partnercentral:ListEngagementMembers";
	/** [Read] partnercentral:ListEngagementResourceAssociations */
	static readonly LIST_ENGAGEMENT_RESOURCE_ASSOCIATIONS =
		"partnercentral:ListEngagementResourceAssociations";
	/** [List] partnercentral:ListEngagements */
	static readonly LIST_ENGAGEMENTS = "partnercentral:ListEngagements";
	/** [List] partnercentral:ListMarketplaceRevenueShareAllocations */
	static readonly LIST_MARKETPLACE_REVENUE_SHARE_ALLOCATIONS =
		"partnercentral:ListMarketplaceRevenueShareAllocations";
	/** [List] partnercentral:ListMarketplaceRevenueShares */
	static readonly LIST_MARKETPLACE_REVENUE_SHARES =
		"partnercentral:ListMarketplaceRevenueShares";
	/** [List] partnercentral:ListOpportunities */
	static readonly LIST_OPPORTUNITIES = "partnercentral:ListOpportunities";
	/** [List] partnercentral:ListOpportunityFromEngagementTasks */
	static readonly LIST_OPPORTUNITY_FROM_ENGAGEMENT_TASKS =
		"partnercentral:ListOpportunityFromEngagementTasks";
	/** [List] partnercentral:ListPartnerPaths */
	static readonly LIST_PARTNER_PATHS = "partnercentral:ListPartnerPaths";
	/** [List] partnercentral:ListPartners */
	static readonly LIST_PARTNERS = "partnercentral:ListPartners";
	/** [List] partnercentral:ListProgramManagementAccounts */
	static readonly LIST_PROGRAM_MANAGEMENT_ACCOUNTS =
		"partnercentral:ListProgramManagementAccounts";
	/** [List] partnercentral:ListProspectingFromEngagementTasks */
	static readonly LIST_PROSPECTING_FROM_ENGAGEMENT_TASKS =
		"partnercentral:ListProspectingFromEngagementTasks";
	/** [List] partnercentral:ListRelationships */
	static readonly LIST_RELATIONSHIPS = "partnercentral:ListRelationships";
	/** [List] partnercentral:ListResourceSnapshotJobs */
	static readonly LIST_RESOURCE_SNAPSHOT_JOBS =
		"partnercentral:ListResourceSnapshotJobs";
	/** [List] partnercentral:ListResourceSnapshots */
	static readonly LIST_RESOURCE_SNAPSHOTS =
		"partnercentral:ListResourceSnapshots";
	/** [List] partnercentral:ListRevenueAttributionAllocations */
	static readonly LIST_REVENUE_ATTRIBUTION_ALLOCATIONS =
		"partnercentral:ListRevenueAttributionAllocations";
	/** [List] partnercentral:ListRevenueAttributions */
	static readonly LIST_REVENUE_ATTRIBUTIONS =
		"partnercentral:ListRevenueAttributions";
	/** [List] partnercentral:ListSolutions */
	static readonly LIST_SOLUTIONS = "partnercentral:ListSolutions";
	/** [Read] partnercentral:ListTagsForResource */
	static readonly LIST_TAGS_FOR_RESOURCE = "partnercentral:ListTagsForResource";
	/** [Write] partnercentral:PutAllianceLeadContact */
	static readonly PUT_ALLIANCE_LEAD_CONTACT =
		"partnercentral:PutAllianceLeadContact";
	/** [Write] partnercentral:PutBusinessPlan */
	static readonly PUT_BUSINESS_PLAN = "partnercentral:PutBusinessPlan";
	/** [Write] partnercentral:PutProfileVisibility */
	static readonly PUT_PROFILE_VISIBILITY =
		"partnercentral:PutProfileVisibility";
	/** [Write] partnercentral:PutSellingSystemSettings */
	static readonly PUT_SELLING_SYSTEM_SETTINGS =
		"partnercentral:PutSellingSystemSettings";
	/** [Write] partnercentral:RecallBenefitApplication */
	static readonly RECALL_BENEFIT_APPLICATION =
		"partnercentral:RecallBenefitApplication";
	/** [Write] partnercentral:RejectChannelHandshake */
	static readonly REJECT_CHANNEL_HANDSHAKE =
		"partnercentral:RejectChannelHandshake";
	/** [Write] partnercentral:RejectConnectionInvitation */
	static readonly REJECT_CONNECTION_INVITATION =
		"partnercentral:RejectConnectionInvitation";
	/** [Write] partnercentral:RejectEngagementInvitation */
	static readonly REJECT_ENGAGEMENT_INVITATION =
		"partnercentral:RejectEngagementInvitation";
	/** [List] partnercentral:SearchPartnerProfiles */
	static readonly SEARCH_PARTNER_PROFILES =
		"partnercentral:SearchPartnerProfiles";
	/** [Write] partnercentral:SendEmailVerificationCode */
	static readonly SEND_EMAIL_VERIFICATION_CODE =
		"partnercentral:SendEmailVerificationCode";
	/** [Write] partnercentral:StartEngagementByAcceptingInvitationTask */
	static readonly START_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASK =
		"partnercentral:StartEngagementByAcceptingInvitationTask";
	/** [Write] partnercentral:StartEngagementFromOpportunityTask */
	static readonly START_ENGAGEMENT_FROM_OPPORTUNITY_TASK =
		"partnercentral:StartEngagementFromOpportunityTask";
	/** [Write] partnercentral:StartOpportunityFromEngagementTask */
	static readonly START_OPPORTUNITY_FROM_ENGAGEMENT_TASK =
		"partnercentral:StartOpportunityFromEngagementTask";
	/** [Write] partnercentral:StartProfileUpdateTask */
	static readonly START_PROFILE_UPDATE_TASK =
		"partnercentral:StartProfileUpdateTask";
	/** [Write] partnercentral:StartProspectingFromEngagementTask */
	static readonly START_PROSPECTING_FROM_ENGAGEMENT_TASK =
		"partnercentral:StartProspectingFromEngagementTask";
	/** [Write] partnercentral:StartQualificationsAssociationTask */
	static readonly START_QUALIFICATIONS_ASSOCIATION_TASK =
		"partnercentral:StartQualificationsAssociationTask";
	/** [Write] partnercentral:StartQualificationsDisassociationTask */
	static readonly START_QUALIFICATIONS_DISASSOCIATION_TASK =
		"partnercentral:StartQualificationsDisassociationTask";
	/** [Write] partnercentral:StartResourceSnapshotJob */
	static readonly START_RESOURCE_SNAPSHOT_JOB =
		"partnercentral:StartResourceSnapshotJob";
	/** [Write] partnercentral:StartRevenueAttributionAllocationsTask */
	static readonly START_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK =
		"partnercentral:StartRevenueAttributionAllocationsTask";
	/** [Write] partnercentral:StartVerification */
	static readonly START_VERIFICATION = "partnercentral:StartVerification";
	/** [Write] partnercentral:StopResourceSnapshotJob */
	static readonly STOP_RESOURCE_SNAPSHOT_JOB =
		"partnercentral:StopResourceSnapshotJob";
	/** [Write] partnercentral:SubmitBenefitApplication */
	static readonly SUBMIT_BENEFIT_APPLICATION =
		"partnercentral:SubmitBenefitApplication";
	/** [Write] partnercentral:SubmitOpportunity */
	static readonly SUBMIT_OPPORTUNITY = "partnercentral:SubmitOpportunity";
	/** [Tagging] partnercentral:TagResource */
	static readonly TAG_RESOURCE = "partnercentral:TagResource";
	/** [Tagging] partnercentral:UntagResource */
	static readonly UNTAG_RESOURCE = "partnercentral:UntagResource";
	/** [Write] partnercentral:UpdateBenefitApplication */
	static readonly UPDATE_BENEFIT_APPLICATION =
		"partnercentral:UpdateBenefitApplication";
	/** [Write] partnercentral:UpdateConnectionPreferences */
	static readonly UPDATE_CONNECTION_PREFERENCES =
		"partnercentral:UpdateConnectionPreferences";
	/** [Write] partnercentral:UpdateEngagementContext */
	static readonly UPDATE_ENGAGEMENT_CONTEXT =
		"partnercentral:UpdateEngagementContext";
	/** [Write] partnercentral:UpdateMarketplaceRevenueShareAllocation */
	static readonly UPDATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION =
		"partnercentral:UpdateMarketplaceRevenueShareAllocation";
	/** [Write] partnercentral:UpdateOpportunity */
	static readonly UPDATE_OPPORTUNITY = "partnercentral:UpdateOpportunity";
	/** [Write] partnercentral:UpdateProgramManagementAccount */
	static readonly UPDATE_PROGRAM_MANAGEMENT_ACCOUNT =
		"partnercentral:UpdateProgramManagementAccount";
	/** [Write] partnercentral:UpdateRelationship */
	static readonly UPDATE_RELATIONSHIP = "partnercentral:UpdateRelationship";
	/** [Write] partnercentral:UpdateRevenueAttribution */
	static readonly UPDATE_REVENUE_ATTRIBUTION =
		"partnercentral:UpdateRevenueAttribution";
	/** [Write] partnercentral:UseSession */
	static readonly USE_SESSION = "partnercentral:UseSession";

	/** All read-level actions. */
	static readonly READ_ACTIONS: string[] = [
		PartnercentralActions.GET_ALLIANCE_LEAD_CONTACT,
		PartnercentralActions.GET_AWS_OPPORTUNITY_SUMMARY,
		PartnercentralActions.GET_BENEFIT,
		PartnercentralActions.GET_BENEFIT_ALLOCATION,
		PartnercentralActions.GET_BENEFIT_APPLICATION,
		PartnercentralActions.GET_BUSINESS_PLAN,
		PartnercentralActions.GET_COLLABORATION_CHANNEL,
		PartnercentralActions.GET_CONNECTION,
		PartnercentralActions.GET_CONNECTION_INVITATION,
		PartnercentralActions.GET_CONNECTION_PREFERENCES,
		PartnercentralActions.GET_ENGAGEMENT,
		PartnercentralActions.GET_ENGAGEMENT_INVITATION,
		PartnercentralActions.GET_MARKETPLACE_REVENUE_SHARE,
		PartnercentralActions.GET_MARKETPLACE_REVENUE_SHARE_ALLOCATION,
		PartnercentralActions.GET_OPPORTUNITY,
		PartnercentralActions.GET_PARTNER,
		PartnercentralActions.GET_PARTNER_DASHBOARD,
		PartnercentralActions.GET_PARTNER_PROFILE,
		PartnercentralActions.GET_PROFILE_UPDATE_TASK,
		PartnercentralActions.GET_PROFILE_VISIBILITY,
		PartnercentralActions.GET_PROGRAM_MANAGEMENT_ACCOUNT,
		PartnercentralActions.GET_PROSPECTING_FROM_ENGAGEMENT_TASK,
		PartnercentralActions.GET_QUALIFICATIONS_ASSOCIATION_DETAILS,
		PartnercentralActions.GET_QUALIFICATIONS_ASSOCIATION_TASK,
		PartnercentralActions.GET_QUALIFICATIONS_DISASSOCIATION_TASK,
		PartnercentralActions.GET_RELATIONSHIP,
		PartnercentralActions.GET_RESOURCE_SNAPSHOT,
		PartnercentralActions.GET_RESOURCE_SNAPSHOT_JOB,
		PartnercentralActions.GET_REVENUE_ATTRIBUTION,
		PartnercentralActions.GET_REVENUE_ATTRIBUTION_ALLOCATION,
		PartnercentralActions.GET_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK,
		PartnercentralActions.GET_SELLING_SYSTEM_SETTINGS,
		PartnercentralActions.GET_VERIFICATION,
		PartnercentralActions.LIST_ENGAGEMENT_MEMBERS,
		PartnercentralActions.LIST_ENGAGEMENT_RESOURCE_ASSOCIATIONS,
		PartnercentralActions.LIST_TAGS_FOR_RESOURCE,
	];
	/** All write-level actions. */
	static readonly WRITE_ACTIONS: string[] = [
		PartnercentralActions.ACCEPT_CHANNEL_HANDSHAKE,
		PartnercentralActions.ACCEPT_CONNECTION_INVITATION,
		PartnercentralActions.ACCEPT_ENGAGEMENT_INVITATION,
		PartnercentralActions.AMEND_BENEFIT_APPLICATION,
		PartnercentralActions.ASSIGN_OPPORTUNITY,
		PartnercentralActions.ASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN,
		PartnercentralActions.ASSOCIATE_BENEFIT_APPLICATION_RESOURCE,
		PartnercentralActions.ASSOCIATE_OPPORTUNITY,
		PartnercentralActions.CANCEL_BENEFIT_APPLICATION,
		PartnercentralActions.CANCEL_CHANNEL_HANDSHAKE,
		PartnercentralActions.CANCEL_CONNECTION,
		PartnercentralActions.CANCEL_CONNECTION_INVITATION,
		PartnercentralActions.CANCEL_PROFILE_UPDATE_TASK,
		PartnercentralActions.CREATE_BENEFIT_APPLICATION,
		PartnercentralActions.CREATE_BUSINESS_PLAN,
		PartnercentralActions.CREATE_CHANNEL_HANDSHAKE,
		PartnercentralActions.CREATE_COLLABORATION_CHANNEL_MEMBERS,
		PartnercentralActions.CREATE_COLLABORATION_CHANNEL_REQUEST,
		PartnercentralActions.CREATE_CONNECTION_INVITATION,
		PartnercentralActions.CREATE_ENGAGEMENT,
		PartnercentralActions.CREATE_ENGAGEMENT_CONTEXT,
		PartnercentralActions.CREATE_ENGAGEMENT_INVITATION,
		PartnercentralActions.CREATE_MARKETPLACE_REVENUE_SHARE,
		PartnercentralActions.CREATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION,
		PartnercentralActions.CREATE_OPPORTUNITY,
		PartnercentralActions.CREATE_PARTNER,
		PartnercentralActions.CREATE_PROGRAM_MANAGEMENT_ACCOUNT,
		PartnercentralActions.CREATE_RELATIONSHIP,
		PartnercentralActions.CREATE_RESOURCE_SNAPSHOT,
		PartnercentralActions.CREATE_RESOURCE_SNAPSHOT_JOB,
		PartnercentralActions.CREATE_REVENUE_ATTRIBUTION,
		PartnercentralActions.DELETE_PROGRAM_MANAGEMENT_ACCOUNT,
		PartnercentralActions.DELETE_RELATIONSHIP,
		PartnercentralActions.DELETE_RESOURCE_SNAPSHOT_JOB,
		PartnercentralActions.DISASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN,
		PartnercentralActions.DISASSOCIATE_BENEFIT_APPLICATION_RESOURCE,
		PartnercentralActions.DISASSOCIATE_OPPORTUNITY,
		PartnercentralActions.ENROLL_IN_PARTNER_PATH,
		PartnercentralActions.PUT_ALLIANCE_LEAD_CONTACT,
		PartnercentralActions.PUT_BUSINESS_PLAN,
		PartnercentralActions.PUT_PROFILE_VISIBILITY,
		PartnercentralActions.PUT_SELLING_SYSTEM_SETTINGS,
		PartnercentralActions.RECALL_BENEFIT_APPLICATION,
		PartnercentralActions.REJECT_CHANNEL_HANDSHAKE,
		PartnercentralActions.REJECT_CONNECTION_INVITATION,
		PartnercentralActions.REJECT_ENGAGEMENT_INVITATION,
		PartnercentralActions.SEND_EMAIL_VERIFICATION_CODE,
		PartnercentralActions.START_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASK,
		PartnercentralActions.START_ENGAGEMENT_FROM_OPPORTUNITY_TASK,
		PartnercentralActions.START_OPPORTUNITY_FROM_ENGAGEMENT_TASK,
		PartnercentralActions.START_PROFILE_UPDATE_TASK,
		PartnercentralActions.START_PROSPECTING_FROM_ENGAGEMENT_TASK,
		PartnercentralActions.START_QUALIFICATIONS_ASSOCIATION_TASK,
		PartnercentralActions.START_QUALIFICATIONS_DISASSOCIATION_TASK,
		PartnercentralActions.START_RESOURCE_SNAPSHOT_JOB,
		PartnercentralActions.START_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK,
		PartnercentralActions.START_VERIFICATION,
		PartnercentralActions.STOP_RESOURCE_SNAPSHOT_JOB,
		PartnercentralActions.SUBMIT_BENEFIT_APPLICATION,
		PartnercentralActions.SUBMIT_OPPORTUNITY,
		PartnercentralActions.UPDATE_BENEFIT_APPLICATION,
		PartnercentralActions.UPDATE_CONNECTION_PREFERENCES,
		PartnercentralActions.UPDATE_ENGAGEMENT_CONTEXT,
		PartnercentralActions.UPDATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION,
		PartnercentralActions.UPDATE_OPPORTUNITY,
		PartnercentralActions.UPDATE_PROGRAM_MANAGEMENT_ACCOUNT,
		PartnercentralActions.UPDATE_RELATIONSHIP,
		PartnercentralActions.UPDATE_REVENUE_ATTRIBUTION,
		PartnercentralActions.USE_SESSION,
	];
	/** All list-level actions. */
	static readonly LIST_ACTIONS: string[] = [
		PartnercentralActions.LIST_BENEFIT_ALLOCATIONS,
		PartnercentralActions.LIST_BENEFIT_APPLICATIONS,
		PartnercentralActions.LIST_BENEFITS,
		PartnercentralActions.LIST_BUSINESS_PLANS,
		PartnercentralActions.LIST_CHANNEL_HANDSHAKES,
		PartnercentralActions.LIST_COLLABORATION_CHANNELS,
		PartnercentralActions.LIST_CONNECTION_INVITATIONS,
		PartnercentralActions.LIST_CONNECTIONS,
		PartnercentralActions.LIST_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASKS,
		PartnercentralActions.LIST_ENGAGEMENT_FROM_OPPORTUNITY_TASKS,
		PartnercentralActions.LIST_ENGAGEMENT_INVITATIONS,
		PartnercentralActions.LIST_ENGAGEMENTS,
		PartnercentralActions.LIST_MARKETPLACE_REVENUE_SHARE_ALLOCATIONS,
		PartnercentralActions.LIST_MARKETPLACE_REVENUE_SHARES,
		PartnercentralActions.LIST_OPPORTUNITIES,
		PartnercentralActions.LIST_OPPORTUNITY_FROM_ENGAGEMENT_TASKS,
		PartnercentralActions.LIST_PARTNER_PATHS,
		PartnercentralActions.LIST_PARTNERS,
		PartnercentralActions.LIST_PROGRAM_MANAGEMENT_ACCOUNTS,
		PartnercentralActions.LIST_PROSPECTING_FROM_ENGAGEMENT_TASKS,
		PartnercentralActions.LIST_RELATIONSHIPS,
		PartnercentralActions.LIST_RESOURCE_SNAPSHOT_JOBS,
		PartnercentralActions.LIST_RESOURCE_SNAPSHOTS,
		PartnercentralActions.LIST_REVENUE_ATTRIBUTION_ALLOCATIONS,
		PartnercentralActions.LIST_REVENUE_ATTRIBUTIONS,
		PartnercentralActions.LIST_SOLUTIONS,
		PartnercentralActions.SEARCH_PARTNER_PROFILES,
	];
	/** All permission-management-level actions. */
	static readonly PERMISSION_MANAGEMENT_ACTIONS: string[] = [];
	/** All tagging-level actions. */
	static readonly TAGGING_ACTIONS: string[] = [
		PartnercentralActions.TAG_RESOURCE,
		PartnercentralActions.UNTAG_RESOURCE,
	];
}

const BenefitArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/benefit/(?<identifier>[^:/?]+)$",
);
const BenefitAllocationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/benefit-allocation/(?<identifier>[^:/?]+)$",
);
const BenefitApplicationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/benefit-application/(?<identifier>[^:/?]+)$",
);
const ChannelHandshakeArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/channel-handshake/(?<identifier>[^:/?]+)$",
);
const ConnectionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/connection/(?<identifier>[^:/?]+)$",
);
const ConnectionInvitationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/connection-invitation/(?<identifier>[^:/?]+)$",
);
const ConnectionPreferencesArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/connection-preferences$",
);
const DashboardArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral::(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/ReportingData/(?<tableId>[^:/?]+)/Dashboard/(?<dashboardId>[^:/?]+)$",
);
const EngagementArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/engagement/(?<identifier>[^:/?]+)$",
);
const MarketplaceRevenueShareArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/marketplace-revenue-share/(?<marketplaceProductId>[^:/?]+)$",
);
const OpportunityArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/opportunity/(?<identifier>[^:/?]+)$",
);
const OpportunityFromEngagementTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/opportunity-from-engagement-task/(?<taskId>[^:/?]+)$",
);
const PartnerArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/partner/(?<identifier>[^:/?]+)$",
);
const ProgramManagementAccountArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/program-management-account/(?<identifier>[^:/?]+)$",
);
const ProspectingFromEngagementTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/prospecting-from-engagement-task/(?<taskIdentifier>[^:/?]+)$",
);
const RelationshipArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/program-management-account/(?<programManagementAccountId>[^:/?]+)/relationship/(?<relationshipId>[^:/?]+)$",
);
const ResourceSnapshotArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/engagement/(?<engagementIdentifier>[^:/?]+)/resource/(?<resourceType>[^:/?]+)/(?<resourceIdentifier>[^:/?]+)/template/(?<templateIdentifier>[^:/?]+)/resource-snapshot/(?<snapshotRevision>[^:/?]+)$",
);
const RevenueAttributionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/revenue-attribution/(?<revenueAttributionId>[^:/?]+)$",
);
const SolutionArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/solution/(?<identifier>[^:/?]+)$",
);
const EngagementByAcceptingInvitationTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/engagement-by-accepting-invitation-task/(?<taskId>[^:/?]+)$",
);
const EngagementFromOpportunityTaskArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/engagement-from-opportunity-task/(?<taskId>[^:/?]+)$",
);
const EngagementInvitationArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*)::catalog/(?<catalog>[^:/?]+)/engagement-invitation/(?<identifier>[^:/?]+)$",
);
const ResourceSnapshotJobArnRegex = new RegExp(
	"^arn:(?<partition>[^:]+):partnercentral:(?<region>[^:]*):(?<account>[^:]*):catalog/(?<catalog>[^:/?]+)/resource-snapshot-job/(?<identifier>[^:/?]+)$",
);

/**
 * ARN builders, validators, and parsers for partnercentral resources.
 */
export class PartnercentralResources {
	/**
	 * Builds an ARN for the Benefit resource.
	 */
	static benefit(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/benefit/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Benefit resource.
	 */
	static isValidBenefitArn(arn: string): boolean {
		return BenefitArnRegex.test(arn);
	}

	/**
	 * Parses a Benefit ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBenefitArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = BenefitArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Benefit ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the BenefitAllocation resource.
	 */
	static benefitAllocation(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/benefit-allocation/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the BenefitAllocation resource.
	 */
	static isValidBenefitAllocationArn(arn: string): boolean {
		return BenefitAllocationArnRegex.test(arn);
	}

	/**
	 * Parses a BenefitAllocation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBenefitAllocationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = BenefitAllocationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid BenefitAllocation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the BenefitApplication resource.
	 */
	static benefitApplication(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/benefit-application/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the BenefitApplication resource.
	 */
	static isValidBenefitApplicationArn(arn: string): boolean {
		return BenefitApplicationArnRegex.test(arn);
	}

	/**
	 * Parses a BenefitApplication ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseBenefitApplicationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = BenefitApplicationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid BenefitApplication ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the ChannelHandshake resource.
	 */
	static channelHandshake(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/channel-handshake/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ChannelHandshake resource.
	 */
	static isValidChannelHandshakeArn(arn: string): boolean {
		return ChannelHandshakeArnRegex.test(arn);
	}

	/**
	 * Parses a ChannelHandshake ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseChannelHandshakeArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = ChannelHandshakeArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ChannelHandshake ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the Connection resource.
	 */
	static connection(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/connection/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Connection resource.
	 */
	static isValidConnectionArn(arn: string): boolean {
		return ConnectionArnRegex.test(arn);
	}

	/**
	 * Parses a Connection ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = ConnectionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Connection ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the ConnectionInvitation resource.
	 */
	static connectionInvitation(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/connection-invitation/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConnectionInvitation resource.
	 */
	static isValidConnectionInvitationArn(arn: string): boolean {
		return ConnectionInvitationArnRegex.test(arn);
	}

	/**
	 * Parses a ConnectionInvitation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionInvitationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = ConnectionInvitationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConnectionInvitation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the ConnectionPreferences resource.
	 */
	static connectionPreferences(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/connection-preferences`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ConnectionPreferences resource.
	 */
	static isValidConnectionPreferencesArn(arn: string): boolean {
		return ConnectionPreferencesArnRegex.test(arn);
	}

	/**
	 * Parses a ConnectionPreferences ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseConnectionPreferencesArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
	} {
		const match = ConnectionPreferencesArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ConnectionPreferences ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
		};
	}

	/**
	 * Builds an ARN for the Dashboard resource.
	 */
	static dashboard(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The TableId component of the ARN. */
		readonly tableId: string;
		/** The DashboardId component of the ARN. */
		readonly dashboardId: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral::${props.account ?? "*"}:catalog/${props.catalog}/ReportingData/${props.tableId}/Dashboard/${props.dashboardId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Dashboard resource.
	 */
	static isValidDashboardArn(arn: string): boolean {
		return DashboardArnRegex.test(arn);
	}

	/**
	 * Parses a Dashboard ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseDashboardArn(arn: string): {
		partition: string;
		account: string;
		catalog: string;
		tableId: string;
		dashboardId: string;
	} {
		const match = DashboardArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Dashboard ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			tableId: match.groups!.tableId,
			dashboardId: match.groups!.dashboardId,
		};
	}

	/**
	 * Builds an ARN for the Engagement resource.
	 */
	static engagement(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/engagement/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Engagement resource.
	 */
	static isValidEngagementArn(arn: string): boolean {
		return EngagementArnRegex.test(arn);
	}

	/**
	 * Parses a Engagement ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEngagementArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = EngagementArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Engagement ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the MarketplaceRevenueShare resource.
	 */
	static marketplaceRevenueShare(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The MarketplaceProductId component of the ARN. */
		readonly marketplaceProductId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/marketplace-revenue-share/${props.marketplaceProductId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the MarketplaceRevenueShare resource.
	 */
	static isValidMarketplaceRevenueShareArn(arn: string): boolean {
		return MarketplaceRevenueShareArnRegex.test(arn);
	}

	/**
	 * Parses a MarketplaceRevenueShare ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseMarketplaceRevenueShareArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		marketplaceProductId: string;
	} {
		const match = MarketplaceRevenueShareArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid MarketplaceRevenueShare ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			marketplaceProductId: match.groups!.marketplaceProductId,
		};
	}

	/**
	 * Builds an ARN for the Opportunity resource.
	 */
	static opportunity(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/opportunity/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Opportunity resource.
	 */
	static isValidOpportunityArn(arn: string): boolean {
		return OpportunityArnRegex.test(arn);
	}

	/**
	 * Parses a Opportunity ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOpportunityArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = OpportunityArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Opportunity ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the OpportunityFromEngagementTask resource.
	 */
	static opportunityFromEngagementTask(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/opportunity-from-engagement-task/${props.taskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the OpportunityFromEngagementTask resource.
	 */
	static isValidOpportunityFromEngagementTaskArn(arn: string): boolean {
		return OpportunityFromEngagementTaskArnRegex.test(arn);
	}

	/**
	 * Parses a OpportunityFromEngagementTask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseOpportunityFromEngagementTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		taskId: string;
	} {
		const match = OpportunityFromEngagementTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid OpportunityFromEngagementTask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			taskId: match.groups!.taskId,
		};
	}

	/**
	 * Builds an ARN for the Partner resource.
	 */
	static partner(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/partner/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Partner resource.
	 */
	static isValidPartnerArn(arn: string): boolean {
		return PartnerArnRegex.test(arn);
	}

	/**
	 * Parses a Partner ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parsePartnerArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = PartnerArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Partner ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the ProgramManagementAccount resource.
	 */
	static programManagementAccount(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/program-management-account/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProgramManagementAccount resource.
	 */
	static isValidProgramManagementAccountArn(arn: string): boolean {
		return ProgramManagementAccountArnRegex.test(arn);
	}

	/**
	 * Parses a ProgramManagementAccount ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProgramManagementAccountArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = ProgramManagementAccountArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProgramManagementAccount ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the ProspectingFromEngagementTask resource.
	 */
	static prospectingFromEngagementTask(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The TaskIdentifier component of the ARN. */
		readonly taskIdentifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/prospecting-from-engagement-task/${props.taskIdentifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ProspectingFromEngagementTask resource.
	 */
	static isValidProspectingFromEngagementTaskArn(arn: string): boolean {
		return ProspectingFromEngagementTaskArnRegex.test(arn);
	}

	/**
	 * Parses a ProspectingFromEngagementTask ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseProspectingFromEngagementTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		taskIdentifier: string;
	} {
		const match = ProspectingFromEngagementTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ProspectingFromEngagementTask ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			taskIdentifier: match.groups!.taskIdentifier,
		};
	}

	/**
	 * Builds an ARN for the Relationship resource.
	 */
	static relationship(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The ProgramManagementAccountId component of the ARN. */
		readonly programManagementAccountId: string;
		/** The RelationshipId component of the ARN. */
		readonly relationshipId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/program-management-account/${props.programManagementAccountId}/relationship/${props.relationshipId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Relationship resource.
	 */
	static isValidRelationshipArn(arn: string): boolean {
		return RelationshipArnRegex.test(arn);
	}

	/**
	 * Parses a Relationship ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRelationshipArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		programManagementAccountId: string;
		relationshipId: string;
	} {
		const match = RelationshipArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Relationship ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			programManagementAccountId: match.groups!.programManagementAccountId,
			relationshipId: match.groups!.relationshipId,
		};
	}

	/**
	 * Builds an ARN for the ResourceSnapshot resource.
	 */
	static resourceSnapshot(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The EngagementIdentifier component of the ARN. */
		readonly engagementIdentifier: string;
		/** The ResourceType component of the ARN. */
		readonly resourceType: string;
		/** The ResourceIdentifier component of the ARN. */
		readonly resourceIdentifier: string;
		/** The TemplateIdentifier component of the ARN. */
		readonly templateIdentifier: string;
		/** The SnapshotRevision component of the ARN. */
		readonly snapshotRevision: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/engagement/${props.engagementIdentifier}/resource/${props.resourceType}/${props.resourceIdentifier}/template/${props.templateIdentifier}/resource-snapshot/${props.snapshotRevision}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the ResourceSnapshot resource.
	 */
	static isValidResourceSnapshotArn(arn: string): boolean {
		return ResourceSnapshotArnRegex.test(arn);
	}

	/**
	 * Parses a ResourceSnapshot ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceSnapshotArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		engagementIdentifier: string;
		resourceType: string;
		resourceIdentifier: string;
		templateIdentifier: string;
		snapshotRevision: string;
	} {
		const match = ResourceSnapshotArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid ResourceSnapshot ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			engagementIdentifier: match.groups!.engagementIdentifier,
			resourceType: match.groups!.resourceType,
			resourceIdentifier: match.groups!.resourceIdentifier,
			templateIdentifier: match.groups!.templateIdentifier,
			snapshotRevision: match.groups!.snapshotRevision,
		};
	}

	/**
	 * Builds an ARN for the RevenueAttribution resource.
	 */
	static revenueAttribution(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The RevenueAttributionId component of the ARN. */
		readonly revenueAttributionId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/revenue-attribution/${props.revenueAttributionId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the RevenueAttribution resource.
	 */
	static isValidRevenueAttributionArn(arn: string): boolean {
		return RevenueAttributionArnRegex.test(arn);
	}

	/**
	 * Parses a RevenueAttribution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseRevenueAttributionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		revenueAttributionId: string;
	} {
		const match = RevenueAttributionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid RevenueAttribution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			revenueAttributionId: match.groups!.revenueAttributionId,
		};
	}

	/**
	 * Builds an ARN for the Solution resource.
	 */
	static solution(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/solution/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the Solution resource.
	 */
	static isValidSolutionArn(arn: string): boolean {
		return SolutionArnRegex.test(arn);
	}

	/**
	 * Parses a Solution ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseSolutionArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = SolutionArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid Solution ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the engagement-by-accepting-invitation-task resource.
	 */
	static engagementByAcceptingInvitationTask(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/engagement-by-accepting-invitation-task/${props.taskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the engagement-by-accepting-invitation-task resource.
	 */
	static isValidEngagementByAcceptingInvitationTaskArn(arn: string): boolean {
		return EngagementByAcceptingInvitationTaskArnRegex.test(arn);
	}

	/**
	 * Parses a engagement-by-accepting-invitation-task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEngagementByAcceptingInvitationTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		taskId: string;
	} {
		const match = EngagementByAcceptingInvitationTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(
				`Invalid engagement-by-accepting-invitation-task ARN: ${arn}`,
			);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			taskId: match.groups!.taskId,
		};
	}

	/**
	 * Builds an ARN for the engagement-from-opportunity-task resource.
	 */
	static engagementFromOpportunityTask(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The TaskId component of the ARN. */
		readonly taskId: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/engagement-from-opportunity-task/${props.taskId}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the engagement-from-opportunity-task resource.
	 */
	static isValidEngagementFromOpportunityTaskArn(arn: string): boolean {
		return EngagementFromOpportunityTaskArnRegex.test(arn);
	}

	/**
	 * Parses a engagement-from-opportunity-task ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEngagementFromOpportunityTaskArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		taskId: string;
	} {
		const match = EngagementFromOpportunityTaskArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid engagement-from-opportunity-task ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			taskId: match.groups!.taskId,
		};
	}

	/**
	 * Builds an ARN for the engagement-invitation resource.
	 */
	static engagementInvitation(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}::catalog/${props.catalog}/engagement-invitation/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the engagement-invitation resource.
	 */
	static isValidEngagementInvitationArn(arn: string): boolean {
		return EngagementInvitationArnRegex.test(arn);
	}

	/**
	 * Parses a engagement-invitation ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseEngagementInvitationArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = EngagementInvitationArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid engagement-invitation ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}

	/**
	 * Builds an ARN for the resource-snapshot-job resource.
	 */
	static resourceSnapshotJob(props: {
		/** The Catalog component of the ARN. */
		readonly catalog: string;
		/** The Identifier component of the ARN. */
		readonly identifier: string;
		/** AWS region. Defaults to "*". */
		readonly region?: string;
		/** AWS account ID. Defaults to "*". */
		readonly account?: string;
		/** AWS partition. Defaults to "aws". */
		readonly partition?: string;
	}): string {
		return `arn:${props.partition ?? "aws"}:partnercentral:${props.region ?? "*"}:${props.account ?? "*"}:catalog/${props.catalog}/resource-snapshot-job/${props.identifier}`;
	}

	/**
	 * Validates whether a string is a valid ARN for the resource-snapshot-job resource.
	 */
	static isValidResourceSnapshotJobArn(arn: string): boolean {
		return ResourceSnapshotJobArnRegex.test(arn);
	}

	/**
	 * Parses a resource-snapshot-job ARN into its components.
	 * @throws Error if the ARN does not match the expected format.
	 */
	static parseResourceSnapshotJobArn(arn: string): {
		partition: string;
		region: string;
		account: string;
		catalog: string;
		identifier: string;
	} {
		const match = ResourceSnapshotJobArnRegex.exec(arn);
		if (!match?.groups) {
			throw new Error(`Invalid resource-snapshot-job ARN: ${arn}`);
		}
		return {
			partition: match.groups.partition,
			region: match.groups.region,
			account: match.groups.account,
			catalog: match.groups!.catalog,
			identifier: match.groups!.identifier,
		};
	}
}

/**
 * API operation to required IAM actions mapping for partnercentral.
 */
export class PartnercentralOperations {
	/** IAM actions required for the AcceptChannelHandshake API call. */
	static readonly ACCEPT_CHANNEL_HANDSHAKE: string[] = [
		"partnercentral:AcceptChannelHandshake",
	];
	/** IAM actions required for the AcceptConnectionInvitation API call. */
	static readonly ACCEPT_CONNECTION_INVITATION: string[] = [
		"partnercentral:AcceptConnectionInvitation",
	];
	/** IAM actions required for the AcceptEngagementInvitation API call. */
	static readonly ACCEPT_ENGAGEMENT_INVITATION: string[] = [
		"partnercentral:AcceptEngagementInvitation",
	];
	/** IAM actions required for the AmendBenefitApplication API call. */
	static readonly AMEND_BENEFIT_APPLICATION: string[] = [
		"partnercentral:AmendBenefitApplication",
	];
	/** IAM actions required for the AssignOpportunity API call. */
	static readonly ASSIGN_OPPORTUNITY: string[] = [
		"partnercentral:AssignOpportunity",
	];
	/** IAM actions required for the AssociateAwsTrainingCertificationEmailDomain API call. */
	static readonly ASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN: string[] =
		["partnercentral:AssociateAwsTrainingCertificationEmailDomain"];
	/** IAM actions required for the AssociateBenefitApplicationResource API call. */
	static readonly ASSOCIATE_BENEFIT_APPLICATION_RESOURCE: string[] = [
		"partnercentral:AssociateBenefitApplicationResource",
	];
	/** IAM actions required for the AssociateOpportunity API call. */
	static readonly ASSOCIATE_OPPORTUNITY: string[] = [
		"partnercentral:AssociateOpportunity",
	];
	/** IAM actions required for the CancelBenefitApplication API call. */
	static readonly CANCEL_BENEFIT_APPLICATION: string[] = [
		"partnercentral:CancelBenefitApplication",
	];
	/** IAM actions required for the CancelChannelHandshake API call. */
	static readonly CANCEL_CHANNEL_HANDSHAKE: string[] = [
		"partnercentral:CancelChannelHandshake",
	];
	/** IAM actions required for the CancelConnection API call. */
	static readonly CANCEL_CONNECTION: string[] = [
		"partnercentral:CancelConnection",
	];
	/** IAM actions required for the CancelConnectionInvitation API call. */
	static readonly CANCEL_CONNECTION_INVITATION: string[] = [
		"partnercentral:CancelConnectionInvitation",
	];
	/** IAM actions required for the CancelProfileUpdateTask API call. */
	static readonly CANCEL_PROFILE_UPDATE_TASK: string[] = [
		"partnercentral:CancelProfileUpdateTask",
	];
	/** IAM actions required for the CreateBenefitApplication API call. */
	static readonly CREATE_BENEFIT_APPLICATION: string[] = [
		"partnercentral:CreateBenefitApplication",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreateChannelHandshake API call. */
	static readonly CREATE_CHANNEL_HANDSHAKE: string[] = [
		"partnercentral:CreateChannelHandshake",
		"partnercentral:GetProgramManagementAccount",
		"partnercentral:GetRelationship",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreateConnectionInvitation API call. */
	static readonly CREATE_CONNECTION_INVITATION: string[] = [
		"partnercentral:CreateConnectionInvitation",
	];
	/** IAM actions required for the CreateEngagement API call. */
	static readonly CREATE_ENGAGEMENT: string[] = [
		"partnercentral:CreateEngagement",
	];
	/** IAM actions required for the CreateEngagementContext API call. */
	static readonly CREATE_ENGAGEMENT_CONTEXT: string[] = [
		"partnercentral:CreateEngagementContext",
		"partnercentral:GetEngagement",
	];
	/** IAM actions required for the CreateEngagementInvitation API call. */
	static readonly CREATE_ENGAGEMENT_INVITATION: string[] = [
		"partnercentral:CreateEngagementInvitation",
		"partnercentral:GetEngagement",
	];
	/** IAM actions required for the CreateMarketplaceRevenueShare API call. */
	static readonly CREATE_MARKETPLACE_REVENUE_SHARE: string[] = [
		"partnercentral:CreateMarketplaceRevenueShare",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreateMarketplaceRevenueShareAllocation API call. */
	static readonly CREATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION: string[] = [
		"partnercentral:CreateMarketplaceRevenueShareAllocation",
	];
	/** IAM actions required for the CreateOpportunity API call. */
	static readonly CREATE_OPPORTUNITY: string[] = [
		"partnercentral:CreateOpportunity",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreatePartner API call. */
	static readonly CREATE_PARTNER: string[] = [
		"partnercentral:CreatePartner",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreateProgramManagementAccount API call. */
	static readonly CREATE_PROGRAM_MANAGEMENT_ACCOUNT: string[] = [
		"partnercentral:CreateProgramManagementAccount",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreateRelationship API call. */
	static readonly CREATE_RELATIONSHIP: string[] = [
		"partnercentral:CreateRelationship",
		"partnercentral:GetProgramManagementAccount",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreateResourceSnapshot API call. */
	static readonly CREATE_RESOURCE_SNAPSHOT: string[] = [
		"partnercentral:CreateResourceSnapshot",
		"partnercentral:GetAwsOpportunitySummary",
		"partnercentral:GetOpportunity",
	];
	/** IAM actions required for the CreateResourceSnapshotJob API call. */
	static readonly CREATE_RESOURCE_SNAPSHOT_JOB: string[] = [
		"partnercentral:CreateResourceSnapshot",
		"partnercentral:CreateResourceSnapshotJob",
		"partnercentral:GetOpportunity",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the CreateRevenueAttribution API call. */
	static readonly CREATE_REVENUE_ATTRIBUTION: string[] = [
		"partnercentral:CreateRevenueAttribution",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the DeleteProgramManagementAccount API call. */
	static readonly DELETE_PROGRAM_MANAGEMENT_ACCOUNT: string[] = [
		"partnercentral:DeleteProgramManagementAccount",
	];
	/** IAM actions required for the DeleteRelationship API call. */
	static readonly DELETE_RELATIONSHIP: string[] = [
		"partnercentral:DeleteRelationship",
	];
	/** IAM actions required for the DeleteResourceSnapshotJob API call. */
	static readonly DELETE_RESOURCE_SNAPSHOT_JOB: string[] = [
		"partnercentral:DeleteResourceSnapshotJob",
	];
	/** IAM actions required for the DisassociateAwsTrainingCertificationEmailDomain API call. */
	static readonly DISASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN: string[] =
		["partnercentral:DisassociateAwsTrainingCertificationEmailDomain"];
	/** IAM actions required for the DisassociateBenefitApplicationResource API call. */
	static readonly DISASSOCIATE_BENEFIT_APPLICATION_RESOURCE: string[] = [
		"partnercentral:DisassociateBenefitApplicationResource",
	];
	/** IAM actions required for the DisassociateOpportunity API call. */
	static readonly DISASSOCIATE_OPPORTUNITY: string[] = [
		"partnercentral:DisassociateOpportunity",
	];
	/** IAM actions required for the GetAllianceLeadContact API call. */
	static readonly GET_ALLIANCE_LEAD_CONTACT: string[] = [
		"partnercentral:GetAllianceLeadContact",
	];
	/** IAM actions required for the GetAwsOpportunitySummary API call. */
	static readonly GET_AWS_OPPORTUNITY_SUMMARY: string[] = [
		"partnercentral:GetAwsOpportunitySummary",
	];
	/** IAM actions required for the GetBenefit API call. */
	static readonly GET_BENEFIT: string[] = ["partnercentral:GetBenefit"];
	/** IAM actions required for the GetBenefitAllocation API call. */
	static readonly GET_BENEFIT_ALLOCATION: string[] = [
		"partnercentral:GetBenefitAllocation",
	];
	/** IAM actions required for the GetBenefitApplication API call. */
	static readonly GET_BENEFIT_APPLICATION: string[] = [
		"partnercentral:GetBenefitApplication",
		"partnercentral:ListTagsForResource",
	];
	/** IAM actions required for the GetConnection API call. */
	static readonly GET_CONNECTION: string[] = ["partnercentral:GetConnection"];
	/** IAM actions required for the GetConnectionInvitation API call. */
	static readonly GET_CONNECTION_INVITATION: string[] = [
		"partnercentral:GetConnectionInvitation",
	];
	/** IAM actions required for the GetConnectionPreferences API call. */
	static readonly GET_CONNECTION_PREFERENCES: string[] = [
		"partnercentral:GetConnectionPreferences",
	];
	/** IAM actions required for the GetEngagement API call. */
	static readonly GET_ENGAGEMENT: string[] = ["partnercentral:GetEngagement"];
	/** IAM actions required for the GetEngagementInvitation API call. */
	static readonly GET_ENGAGEMENT_INVITATION: string[] = [
		"partnercentral:GetEngagementInvitation",
	];
	/** IAM actions required for the GetMarketplaceRevenueShare API call. */
	static readonly GET_MARKETPLACE_REVENUE_SHARE: string[] = [
		"partnercentral:GetMarketplaceRevenueShare",
	];
	/** IAM actions required for the GetMarketplaceRevenueShareAllocation API call. */
	static readonly GET_MARKETPLACE_REVENUE_SHARE_ALLOCATION: string[] = [
		"partnercentral:GetMarketplaceRevenueShareAllocation",
	];
	/** IAM actions required for the GetOpportunity API call. */
	static readonly GET_OPPORTUNITY: string[] = ["partnercentral:GetOpportunity"];
	/** IAM actions required for the GetPartner API call. */
	static readonly GET_PARTNER: string[] = ["partnercentral:GetPartner"];
	/** IAM actions required for the GetProfileUpdateTask API call. */
	static readonly GET_PROFILE_UPDATE_TASK: string[] = [
		"partnercentral:GetProfileUpdateTask",
	];
	/** IAM actions required for the GetProfileVisibility API call. */
	static readonly GET_PROFILE_VISIBILITY: string[] = [
		"partnercentral:GetProfileVisibility",
	];
	/** IAM actions required for the GetProspectingFromEngagementTask API call. */
	static readonly GET_PROSPECTING_FROM_ENGAGEMENT_TASK: string[] = [
		"partnercentral:GetProspectingFromEngagementTask",
	];
	/** IAM actions required for the GetQualificationsAssociationDetails API call. */
	static readonly GET_QUALIFICATIONS_ASSOCIATION_DETAILS: string[] = [
		"partnercentral:GetQualificationsAssociationDetails",
	];
	/** IAM actions required for the GetQualificationsAssociationTask API call. */
	static readonly GET_QUALIFICATIONS_ASSOCIATION_TASK: string[] = [
		"partnercentral:GetQualificationsAssociationTask",
	];
	/** IAM actions required for the GetQualificationsDisassociationTask API call. */
	static readonly GET_QUALIFICATIONS_DISASSOCIATION_TASK: string[] = [
		"partnercentral:GetQualificationsDisassociationTask",
	];
	/** IAM actions required for the GetRelationship API call. */
	static readonly GET_RELATIONSHIP: string[] = [
		"partnercentral:GetRelationship",
	];
	/** IAM actions required for the GetResourceSnapshot API call. */
	static readonly GET_RESOURCE_SNAPSHOT: string[] = [
		"partnercentral:GetResourceSnapshot",
	];
	/** IAM actions required for the GetResourceSnapshotJob API call. */
	static readonly GET_RESOURCE_SNAPSHOT_JOB: string[] = [
		"partnercentral:GetResourceSnapshotJob",
	];
	/** IAM actions required for the GetRevenueAttribution API call. */
	static readonly GET_REVENUE_ATTRIBUTION: string[] = [
		"partnercentral:GetRevenueAttribution",
	];
	/** IAM actions required for the GetRevenueAttributionAllocation API call. */
	static readonly GET_REVENUE_ATTRIBUTION_ALLOCATION: string[] = [
		"partnercentral:GetRevenueAttributionAllocation",
	];
	/** IAM actions required for the GetRevenueAttributionAllocationsTask API call. */
	static readonly GET_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK: string[] = [
		"partnercentral:GetRevenueAttributionAllocationsTask",
	];
	/** IAM actions required for the GetSellingSystemSettings API call. */
	static readonly GET_SELLING_SYSTEM_SETTINGS: string[] = [
		"partnercentral:GetSellingSystemSettings",
	];
	/** IAM actions required for the GetVerification API call. */
	static readonly GET_VERIFICATION: string[] = [
		"partnercentral:GetVerification",
	];
	/** IAM actions required for the ListBenefitAllocations API call. */
	static readonly LIST_BENEFIT_ALLOCATIONS: string[] = [
		"partnercentral:ListBenefitAllocations",
	];
	/** IAM actions required for the ListBenefitApplications API call. */
	static readonly LIST_BENEFIT_APPLICATIONS: string[] = [
		"partnercentral:ListBenefitApplications",
	];
	/** IAM actions required for the ListBenefits API call. */
	static readonly LIST_BENEFITS: string[] = ["partnercentral:ListBenefits"];
	/** IAM actions required for the ListChannelHandshakes API call. */
	static readonly LIST_CHANNEL_HANDSHAKES: string[] = [
		"partnercentral:ListChannelHandshakes",
	];
	/** IAM actions required for the ListConnectionInvitations API call. */
	static readonly LIST_CONNECTION_INVITATIONS: string[] = [
		"partnercentral:ListConnectionInvitations",
	];
	/** IAM actions required for the ListConnections API call. */
	static readonly LIST_CONNECTIONS: string[] = [
		"partnercentral:ListConnections",
	];
	/** IAM actions required for the ListEngagementByAcceptingInvitationTasks API call. */
	static readonly LIST_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASKS: string[] = [
		"partnercentral:ListEngagementByAcceptingInvitationTasks",
	];
	/** IAM actions required for the ListEngagementFromOpportunityTasks API call. */
	static readonly LIST_ENGAGEMENT_FROM_OPPORTUNITY_TASKS: string[] = [
		"partnercentral:ListEngagementFromOpportunityTasks",
	];
	/** IAM actions required for the ListEngagementInvitations API call. */
	static readonly LIST_ENGAGEMENT_INVITATIONS: string[] = [
		"partnercentral:ListEngagementInvitations",
	];
	/** IAM actions required for the ListEngagementMembers API call. */
	static readonly LIST_ENGAGEMENT_MEMBERS: string[] = [
		"partnercentral:ListEngagementMembers",
	];
	/** IAM actions required for the ListEngagementResourceAssociations API call. */
	static readonly LIST_ENGAGEMENT_RESOURCE_ASSOCIATIONS: string[] = [
		"partnercentral:ListEngagementResourceAssociations",
	];
	/** IAM actions required for the ListEngagements API call. */
	static readonly LIST_ENGAGEMENTS: string[] = [
		"partnercentral:ListEngagements",
	];
	/** IAM actions required for the ListMarketplaceRevenueShareAllocations API call. */
	static readonly LIST_MARKETPLACE_REVENUE_SHARE_ALLOCATIONS: string[] = [
		"partnercentral:ListMarketplaceRevenueShareAllocations",
	];
	/** IAM actions required for the ListMarketplaceRevenueShares API call. */
	static readonly LIST_MARKETPLACE_REVENUE_SHARES: string[] = [
		"partnercentral:ListMarketplaceRevenueShares",
	];
	/** IAM actions required for the ListOpportunities API call. */
	static readonly LIST_OPPORTUNITIES: string[] = [
		"partnercentral:ListOpportunities",
	];
	/** IAM actions required for the ListOpportunityFromEngagementTasks API call. */
	static readonly LIST_OPPORTUNITY_FROM_ENGAGEMENT_TASKS: string[] = [
		"partnercentral:ListEngagementFromOpportunityTasks",
		"partnercentral:ListOpportunityFromEngagementTasks",
	];
	/** IAM actions required for the ListPartners API call. */
	static readonly LIST_PARTNERS: string[] = ["partnercentral:ListPartners"];
	/** IAM actions required for the ListProgramManagementAccounts API call. */
	static readonly LIST_PROGRAM_MANAGEMENT_ACCOUNTS: string[] = [
		"partnercentral:ListProgramManagementAccounts",
	];
	/** IAM actions required for the ListProspectingFromEngagementTasks API call. */
	static readonly LIST_PROSPECTING_FROM_ENGAGEMENT_TASKS: string[] = [
		"partnercentral:ListProspectingFromEngagementTasks",
	];
	/** IAM actions required for the ListRelationships API call. */
	static readonly LIST_RELATIONSHIPS: string[] = [
		"partnercentral:ListRelationships",
	];
	/** IAM actions required for the ListResourceSnapshotJobs API call. */
	static readonly LIST_RESOURCE_SNAPSHOT_JOBS: string[] = [
		"partnercentral:ListResourceSnapshotJobs",
	];
	/** IAM actions required for the ListResourceSnapshots API call. */
	static readonly LIST_RESOURCE_SNAPSHOTS: string[] = [
		"partnercentral:ListResourceSnapshots",
	];
	/** IAM actions required for the ListRevenueAttributionAllocations API call. */
	static readonly LIST_REVENUE_ATTRIBUTION_ALLOCATIONS: string[] = [
		"partnercentral:ListRevenueAttributionAllocations",
	];
	/** IAM actions required for the ListRevenueAttributions API call. */
	static readonly LIST_REVENUE_ATTRIBUTIONS: string[] = [
		"partnercentral:ListRevenueAttributions",
	];
	/** IAM actions required for the ListSolutions API call. */
	static readonly LIST_SOLUTIONS: string[] = ["partnercentral:ListSolutions"];
	/** IAM actions required for the ListTagsForResource API call. */
	static readonly LIST_TAGS_FOR_RESOURCE: string[] = [
		"partnercentral:ListTagsForResource",
	];
	/** IAM actions required for the PutAllianceLeadContact API call. */
	static readonly PUT_ALLIANCE_LEAD_CONTACT: string[] = [
		"partnercentral:PutAllianceLeadContact",
	];
	/** IAM actions required for the PutProfileVisibility API call. */
	static readonly PUT_PROFILE_VISIBILITY: string[] = [
		"partnercentral:PutProfileVisibility",
	];
	/** IAM actions required for the PutSellingSystemSettings API call. */
	static readonly PUT_SELLING_SYSTEM_SETTINGS: string[] = [
		"iam:PassRole",
		"partnercentral:PutSellingSystemSettings",
	];
	/** IAM actions required for the RecallBenefitApplication API call. */
	static readonly RECALL_BENEFIT_APPLICATION: string[] = [
		"partnercentral:RecallBenefitApplication",
	];
	/** IAM actions required for the RejectChannelHandshake API call. */
	static readonly REJECT_CHANNEL_HANDSHAKE: string[] = [
		"partnercentral:RejectChannelHandshake",
	];
	/** IAM actions required for the RejectConnectionInvitation API call. */
	static readonly REJECT_CONNECTION_INVITATION: string[] = [
		"partnercentral:RejectConnectionInvitation",
	];
	/** IAM actions required for the RejectEngagementInvitation API call. */
	static readonly REJECT_ENGAGEMENT_INVITATION: string[] = [
		"partnercentral:RejectEngagementInvitation",
	];
	/** IAM actions required for the SendEmailVerificationCode API call. */
	static readonly SEND_EMAIL_VERIFICATION_CODE: string[] = [
		"partnercentral:SendEmailVerificationCode",
	];
	/** IAM actions required for the StartEngagementByAcceptingInvitationTask API call. */
	static readonly START_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASK: string[] = [
		"partnercentral:AcceptEngagementInvitation",
		"partnercentral:CreateOpportunity",
		"partnercentral:CreateResourceSnapshot",
		"partnercentral:CreateResourceSnapshotJob",
		"partnercentral:GetEngagementInvitation",
		"partnercentral:GetOpportunity",
		"partnercentral:StartEngagementByAcceptingInvitationTask",
		"partnercentral:StartResourceSnapshotJob",
		"partnercentral:SubmitOpportunity",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the StartEngagementFromOpportunityTask API call. */
	static readonly START_ENGAGEMENT_FROM_OPPORTUNITY_TASK: string[] = [
		"partnercentral:CreateEngagement",
		"partnercentral:CreateResourceSnapshot",
		"partnercentral:CreateResourceSnapshotJob",
		"partnercentral:GetOpportunity",
		"partnercentral:StartEngagementFromOpportunityTask",
		"partnercentral:StartResourceSnapshotJob",
		"partnercentral:SubmitOpportunity",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the StartOpportunityFromEngagementTask API call. */
	static readonly START_OPPORTUNITY_FROM_ENGAGEMENT_TASK: string[] = [
		"partnercentral:CreateOpportunity",
		"partnercentral:CreateResourceSnapshot",
		"partnercentral:CreateResourceSnapshotJob",
		"partnercentral:GetEngagement",
		"partnercentral:GetOpportunity",
		"partnercentral:StartOpportunityFromEngagementTask",
		"partnercentral:StartResourceSnapshotJob",
		"partnercentral:TagResource",
	];
	/** IAM actions required for the StartProfileUpdateTask API call. */
	static readonly START_PROFILE_UPDATE_TASK: string[] = [
		"partnercentral:StartProfileUpdateTask",
	];
	/** IAM actions required for the StartProspectingFromEngagementTask API call. */
	static readonly START_PROSPECTING_FROM_ENGAGEMENT_TASK: string[] = [
		"partnercentral:StartProspectingFromEngagementTask",
	];
	/** IAM actions required for the StartQualificationsAssociationTask API call. */
	static readonly START_QUALIFICATIONS_ASSOCIATION_TASK: string[] = [
		"partnercentral:StartQualificationsAssociationTask",
	];
	/** IAM actions required for the StartQualificationsDisassociationTask API call. */
	static readonly START_QUALIFICATIONS_DISASSOCIATION_TASK: string[] = [
		"partnercentral:StartQualificationsDisassociationTask",
	];
	/** IAM actions required for the StartResourceSnapshotJob API call. */
	static readonly START_RESOURCE_SNAPSHOT_JOB: string[] = [
		"partnercentral:StartResourceSnapshotJob",
	];
	/** IAM actions required for the StartRevenueAttributionAllocationsTask API call. */
	static readonly START_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK: string[] = [
		"partnercentral:StartRevenueAttributionAllocationsTask",
	];
	/** IAM actions required for the StartVerification API call. */
	static readonly START_VERIFICATION: string[] = [
		"partnercentral:StartVerification",
	];
	/** IAM actions required for the StopResourceSnapshotJob API call. */
	static readonly STOP_RESOURCE_SNAPSHOT_JOB: string[] = [
		"partnercentral:StopResourceSnapshotJob",
	];
	/** IAM actions required for the SubmitBenefitApplication API call. */
	static readonly SUBMIT_BENEFIT_APPLICATION: string[] = [
		"partnercentral:SubmitBenefitApplication",
	];
	/** IAM actions required for the SubmitOpportunity API call. */
	static readonly SUBMIT_OPPORTUNITY: string[] = [
		"partnercentral:SubmitOpportunity",
	];
	/** IAM actions required for the TagResource API call. */
	static readonly TAG_RESOURCE: string[] = ["partnercentral:TagResource"];
	/** IAM actions required for the UntagResource API call. */
	static readonly UNTAG_RESOURCE: string[] = ["partnercentral:UntagResource"];
	/** IAM actions required for the UpdateBenefitApplication API call. */
	static readonly UPDATE_BENEFIT_APPLICATION: string[] = [
		"partnercentral:UpdateBenefitApplication",
	];
	/** IAM actions required for the UpdateConnectionPreferences API call. */
	static readonly UPDATE_CONNECTION_PREFERENCES: string[] = [
		"partnercentral:UpdateConnectionPreferences",
	];
	/** IAM actions required for the UpdateEngagementContext API call. */
	static readonly UPDATE_ENGAGEMENT_CONTEXT: string[] = [
		"partnercentral:GetEngagement",
		"partnercentral:UpdateEngagementContext",
	];
	/** IAM actions required for the UpdateMarketplaceRevenueShareAllocation API call. */
	static readonly UPDATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION: string[] = [
		"partnercentral:UpdateMarketplaceRevenueShareAllocation",
	];
	/** IAM actions required for the UpdateOpportunity API call. */
	static readonly UPDATE_OPPORTUNITY: string[] = [
		"partnercentral:UpdateOpportunity",
	];
	/** IAM actions required for the UpdateProgramManagementAccount API call. */
	static readonly UPDATE_PROGRAM_MANAGEMENT_ACCOUNT: string[] = [
		"partnercentral:UpdateProgramManagementAccount",
	];
	/** IAM actions required for the UpdateRelationship API call. */
	static readonly UPDATE_RELATIONSHIP: string[] = [
		"partnercentral:UpdateRelationship",
	];
	/** IAM actions required for the UpdateRevenueAttribution API call. */
	static readonly UPDATE_REVENUE_ATTRIBUTION: string[] = [
		"partnercentral:UpdateRevenueAttribution",
	];
}

/**
 * Condition key constants and builders for partnercentral.
 */
export class PartnercentralConditions {
	/** Condition keys applicable to the AcceptChannelHandshake action. */
	static readonly ACCEPT_CHANNEL_HANDSHAKE_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:ChannelHandshakeType",
	];
	/** Condition keys applicable to the AcceptConnectionInvitation action. */
	static readonly ACCEPT_CONNECTION_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the AcceptEngagementInvitation action. */
	static readonly ACCEPT_ENGAGEMENT_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the AmendBenefitApplication action. */
	static readonly AMEND_BENEFIT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the AssignOpportunity action. */
	static readonly ASSIGN_OPPORTUNITY_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the AssociateAwsTrainingCertificationEmailDomain action. */
	static readonly ASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "partnercentral:Catalog"];
	/** Condition keys applicable to the AssociateBenefitApplicationResource action. */
	static readonly ASSOCIATE_BENEFIT_APPLICATION_RESOURCE_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"partnercentral:Catalog",
			"partnercentral:FulfillmentTypes",
			"partnercentral:Programs",
		];
	/** Condition keys applicable to the AssociateOpportunity action. */
	static readonly ASSOCIATE_OPPORTUNITY_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:RelatedEntityType",
	];
	/** Condition keys applicable to the CancelBenefitApplication action. */
	static readonly CANCEL_BENEFIT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the CancelChannelHandshake action. */
	static readonly CANCEL_CHANNEL_HANDSHAKE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:ChannelHandshakeType",
	];
	/** Condition keys applicable to the CancelConnection action. */
	static readonly CANCEL_CONNECTION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CancelConnectionInvitation action. */
	static readonly CANCEL_CONNECTION_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CancelProfileUpdateTask action. */
	static readonly CANCEL_PROFILE_UPDATE_TASK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateBenefitApplication action. */
	static readonly CREATE_BENEFIT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the CreateChannelHandshake action. */
	static readonly CREATE_CHANNEL_HANDSHAKE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
		"partnercentral:ChannelHandshakeType",
	];
	/** Condition keys applicable to the CreateConnectionInvitation action. */
	static readonly CREATE_CONNECTION_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateEngagement action. */
	static readonly CREATE_ENGAGEMENT_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateEngagementContext action. */
	static readonly CREATE_ENGAGEMENT_CONTEXT_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateEngagementInvitation action. */
	static readonly CREATE_ENGAGEMENT_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateMarketplaceRevenueShare action. */
	static readonly CREATE_MARKETPLACE_REVENUE_SHARE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateMarketplaceRevenueShareAllocation action. */
	static readonly CREATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the CreateOpportunity action. */
	static readonly CREATE_OPPORTUNITY_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreatePartner action. */
	static readonly CREATE_PARTNER_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateProgramManagementAccount action. */
	static readonly CREATE_PROGRAM_MANAGEMENT_ACCOUNT_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateRelationship action. */
	static readonly CREATE_RELATIONSHIP_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateResourceSnapshot action. */
	static readonly CREATE_RESOURCE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateResourceSnapshotJob action. */
	static readonly CREATE_RESOURCE_SNAPSHOT_JOB_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the CreateRevenueAttribution action. */
	static readonly CREATE_REVENUE_ATTRIBUTION_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the DeleteProgramManagementAccount action. */
	static readonly DELETE_PROGRAM_MANAGEMENT_ACCOUNT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the DeleteRelationship action. */
	static readonly DELETE_RELATIONSHIP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the DeleteResourceSnapshotJob action. */
	static readonly DELETE_RESOURCE_SNAPSHOT_JOB_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the DisassociateAwsTrainingCertificationEmailDomain action. */
	static readonly DISASSOCIATE_AWS_TRAINING_CERTIFICATION_EMAIL_DOMAIN_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "partnercentral:Catalog"];
	/** Condition keys applicable to the DisassociateBenefitApplicationResource action. */
	static readonly DISASSOCIATE_BENEFIT_APPLICATION_RESOURCE_CONDITION_KEYS: string[] =
		[
			"aws:ResourceTag/${TagKey}",
			"partnercentral:Catalog",
			"partnercentral:FulfillmentTypes",
			"partnercentral:Programs",
		];
	/** Condition keys applicable to the DisassociateOpportunity action. */
	static readonly DISASSOCIATE_OPPORTUNITY_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:RelatedEntityType",
	];
	/** Condition keys applicable to the GetAllianceLeadContact action. */
	static readonly GET_ALLIANCE_LEAD_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetAwsOpportunitySummary action. */
	static readonly GET_AWS_OPPORTUNITY_SUMMARY_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetBenefit action. */
	static readonly GET_BENEFIT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the GetBenefitAllocation action. */
	static readonly GET_BENEFIT_ALLOCATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
	];
	/** Condition keys applicable to the GetBenefitApplication action. */
	static readonly GET_BENEFIT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the GetConnection action. */
	static readonly GET_CONNECTION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetConnectionInvitation action. */
	static readonly GET_CONNECTION_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetConnectionPreferences action. */
	static readonly GET_CONNECTION_PREFERENCES_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetEngagement action. */
	static readonly GET_ENGAGEMENT_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetEngagementInvitation action. */
	static readonly GET_ENGAGEMENT_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetMarketplaceRevenueShare action. */
	static readonly GET_MARKETPLACE_REVENUE_SHARE_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetMarketplaceRevenueShareAllocation action. */
	static readonly GET_MARKETPLACE_REVENUE_SHARE_ALLOCATION_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the GetOpportunity action. */
	static readonly GET_OPPORTUNITY_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetPartner action. */
	static readonly GET_PARTNER_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetPartnerDashboard action. */
	static readonly GET_PARTNER_DASHBOARD_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetProfileUpdateTask action. */
	static readonly GET_PROFILE_UPDATE_TASK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetProfileVisibility action. */
	static readonly GET_PROFILE_VISIBILITY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetProgramManagementAccount action. */
	static readonly GET_PROGRAM_MANAGEMENT_ACCOUNT_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetProspectingFromEngagementTask action. */
	static readonly GET_PROSPECTING_FROM_ENGAGEMENT_TASK_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the GetQualificationsAssociationDetails action. */
	static readonly GET_QUALIFICATIONS_ASSOCIATION_DETAILS_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "partnercentral:Catalog"];
	/** Condition keys applicable to the GetQualificationsAssociationTask action. */
	static readonly GET_QUALIFICATIONS_ASSOCIATION_TASK_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "partnercentral:Catalog"];
	/** Condition keys applicable to the GetQualificationsDisassociationTask action. */
	static readonly GET_QUALIFICATIONS_DISASSOCIATION_TASK_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "partnercentral:Catalog"];
	/** Condition keys applicable to the GetRelationship action. */
	static readonly GET_RELATIONSHIP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetResourceSnapshot action. */
	static readonly GET_RESOURCE_SNAPSHOT_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetResourceSnapshotJob action. */
	static readonly GET_RESOURCE_SNAPSHOT_JOB_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetRevenueAttribution action. */
	static readonly GET_REVENUE_ATTRIBUTION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetRevenueAttributionAllocation action. */
	static readonly GET_REVENUE_ATTRIBUTION_ALLOCATION_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the GetRevenueAttributionAllocationsTask action. */
	static readonly GET_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the GetSellingSystemSettings action. */
	static readonly GET_SELLING_SYSTEM_SETTINGS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the GetVerification action. */
	static readonly GET_VERIFICATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:VerificationType",
	];
	/** Condition keys applicable to the ListBenefitAllocations action. */
	static readonly LIST_BENEFIT_ALLOCATIONS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
	];
	/** Condition keys applicable to the ListBenefitApplications action. */
	static readonly LIST_BENEFIT_APPLICATIONS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the ListBenefits action. */
	static readonly LIST_BENEFITS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the ListChannelHandshakes action. */
	static readonly LIST_CHANNEL_HANDSHAKES_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:ChannelHandshakeType",
	];
	/** Condition keys applicable to the ListConnectionInvitations action. */
	static readonly LIST_CONNECTION_INVITATIONS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListConnections action. */
	static readonly LIST_CONNECTIONS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListEngagementByAcceptingInvitationTasks action. */
	static readonly LIST_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASKS_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the ListEngagementFromOpportunityTasks action. */
	static readonly LIST_ENGAGEMENT_FROM_OPPORTUNITY_TASKS_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the ListEngagementInvitations action. */
	static readonly LIST_ENGAGEMENT_INVITATIONS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListEngagementMembers action. */
	static readonly LIST_ENGAGEMENT_MEMBERS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListEngagementResourceAssociations action. */
	static readonly LIST_ENGAGEMENT_RESOURCE_ASSOCIATIONS_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the ListEngagements action. */
	static readonly LIST_ENGAGEMENTS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListMarketplaceRevenueShareAllocations action. */
	static readonly LIST_MARKETPLACE_REVENUE_SHARE_ALLOCATIONS_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the ListMarketplaceRevenueShares action. */
	static readonly LIST_MARKETPLACE_REVENUE_SHARES_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListOpportunities action. */
	static readonly LIST_OPPORTUNITIES_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListOpportunityFromEngagementTasks action. */
	static readonly LIST_OPPORTUNITY_FROM_ENGAGEMENT_TASKS_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the ListPartners action. */
	static readonly LIST_PARTNERS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListProgramManagementAccounts action. */
	static readonly LIST_PROGRAM_MANAGEMENT_ACCOUNTS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListProspectingFromEngagementTasks action. */
	static readonly LIST_PROSPECTING_FROM_ENGAGEMENT_TASKS_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the ListRelationships action. */
	static readonly LIST_RELATIONSHIPS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListResourceSnapshotJobs action. */
	static readonly LIST_RESOURCE_SNAPSHOT_JOBS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListResourceSnapshots action. */
	static readonly LIST_RESOURCE_SNAPSHOTS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListRevenueAttributionAllocations action. */
	static readonly LIST_REVENUE_ATTRIBUTION_ALLOCATIONS_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the ListRevenueAttributions action. */
	static readonly LIST_REVENUE_ATTRIBUTIONS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListSolutions action. */
	static readonly LIST_SOLUTIONS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the ListTagsForResource action. */
	static readonly LIST_TAGS_FOR_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the PutAllianceLeadContact action. */
	static readonly PUT_ALLIANCE_LEAD_CONTACT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the PutProfileVisibility action. */
	static readonly PUT_PROFILE_VISIBILITY_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the PutSellingSystemSettings action. */
	static readonly PUT_SELLING_SYSTEM_SETTINGS_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the RecallBenefitApplication action. */
	static readonly RECALL_BENEFIT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the RejectChannelHandshake action. */
	static readonly REJECT_CHANNEL_HANDSHAKE_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:ChannelHandshakeType",
	];
	/** Condition keys applicable to the RejectConnectionInvitation action. */
	static readonly REJECT_CONNECTION_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the RejectEngagementInvitation action. */
	static readonly REJECT_ENGAGEMENT_INVITATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the SendEmailVerificationCode action. */
	static readonly SEND_EMAIL_VERIFICATION_CODE_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the StartEngagementByAcceptingInvitationTask action. */
	static readonly START_ENGAGEMENT_BY_ACCEPTING_INVITATION_TASK_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:ResourceTag/${TagKey}",
			"aws:TagKeys",
			"partnercentral:Catalog",
		];
	/** Condition keys applicable to the StartEngagementFromOpportunityTask action. */
	static readonly START_ENGAGEMENT_FROM_OPPORTUNITY_TASK_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:ResourceTag/${TagKey}",
			"aws:TagKeys",
			"partnercentral:Catalog",
		];
	/** Condition keys applicable to the StartOpportunityFromEngagementTask action. */
	static readonly START_OPPORTUNITY_FROM_ENGAGEMENT_TASK_CONDITION_KEYS: string[] =
		[
			"aws:RequestTag/${TagKey}",
			"aws:ResourceTag/${TagKey}",
			"aws:TagKeys",
			"partnercentral:Catalog",
		];
	/** Condition keys applicable to the StartProfileUpdateTask action. */
	static readonly START_PROFILE_UPDATE_TASK_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the StartProspectingFromEngagementTask action. */
	static readonly START_PROSPECTING_FROM_ENGAGEMENT_TASK_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the StartQualificationsAssociationTask action. */
	static readonly START_QUALIFICATIONS_ASSOCIATION_TASK_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "partnercentral:Catalog"];
	/** Condition keys applicable to the StartQualificationsDisassociationTask action. */
	static readonly START_QUALIFICATIONS_DISASSOCIATION_TASK_CONDITION_KEYS: string[] =
		["aws:ResourceTag/${TagKey}", "partnercentral:Catalog"];
	/** Condition keys applicable to the StartResourceSnapshotJob action. */
	static readonly START_RESOURCE_SNAPSHOT_JOB_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the StartRevenueAttributionAllocationsTask action. */
	static readonly START_REVENUE_ATTRIBUTION_ALLOCATIONS_TASK_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the StartVerification action. */
	static readonly START_VERIFICATION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
		"partnercentral:VerificationType",
	];
	/** Condition keys applicable to the StopResourceSnapshotJob action. */
	static readonly STOP_RESOURCE_SNAPSHOT_JOB_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the SubmitBenefitApplication action. */
	static readonly SUBMIT_BENEFIT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the SubmitOpportunity action. */
	static readonly SUBMIT_OPPORTUNITY_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the TagResource action. */
	static readonly TAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:RequestTag/${TagKey}",
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the UntagResource action. */
	static readonly UNTAG_RESOURCE_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"aws:TagKeys",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the UpdateBenefitApplication action. */
	static readonly UPDATE_BENEFIT_APPLICATION_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
		"partnercentral:FulfillmentTypes",
		"partnercentral:Programs",
	];
	/** Condition keys applicable to the UpdateConnectionPreferences action. */
	static readonly UPDATE_CONNECTION_PREFERENCES_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the UpdateEngagementContext action. */
	static readonly UPDATE_ENGAGEMENT_CONTEXT_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the UpdateMarketplaceRevenueShareAllocation action. */
	static readonly UPDATE_MARKETPLACE_REVENUE_SHARE_ALLOCATION_CONDITION_KEYS: string[] =
		["partnercentral:Catalog"];
	/** Condition keys applicable to the UpdateOpportunity action. */
	static readonly UPDATE_OPPORTUNITY_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the UpdateProgramManagementAccount action. */
	static readonly UPDATE_PROGRAM_MANAGEMENT_ACCOUNT_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the UpdateRelationship action. */
	static readonly UPDATE_RELATIONSHIP_CONDITION_KEYS: string[] = [
		"aws:ResourceTag/${TagKey}",
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the UpdateRevenueAttribution action. */
	static readonly UPDATE_REVENUE_ATTRIBUTION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];
	/** Condition keys applicable to the UseSession action. */
	static readonly USE_SESSION_CONDITION_KEYS: string[] = [
		"partnercentral:Catalog",
	];

	/** Condition key: aws:RequestTag/${TagKey} (String) */
	static readonly REQUEST_TAG = "aws:RequestTag/${TagKey}";
	/** Condition key: aws:ResourceTag/${TagKey} (String) */
	static readonly RESOURCE_TAG = "aws:ResourceTag/${TagKey}";
	/** Condition key: aws:TagKeys (ArrayOfString) */
	static readonly TAG_KEYS = "aws:TagKeys";
	/** Condition key: partnercentral:Catalog (String) */
	static readonly CATALOG = "partnercentral:Catalog";
	/** Condition key: partnercentral:ChannelHandshakeType (String) */
	static readonly CHANNEL_HANDSHAKE_TYPE =
		"partnercentral:ChannelHandshakeType";
	/** Condition key: partnercentral:FulfillmentTypes (ArrayOfString) */
	static readonly FULFILLMENT_TYPES = "partnercentral:FulfillmentTypes";
	/** Condition key: partnercentral:Programs (ArrayOfString) */
	static readonly PROGRAMS = "partnercentral:Programs";
	/** Condition key: partnercentral:RelatedEntityType (String) */
	static readonly RELATED_ENTITY_TYPE = "partnercentral:RelatedEntityType";
	/** Condition key: partnercentral:VerificationType (String) */
	static readonly VERIFICATION_TYPE = "partnercentral:VerificationType";

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
	 * Generates a condition block for `partnercentral:Catalog`.
	 */
	static catalog(value: string): Record<string, Record<string, string>> {
		return { StringEquals: { "partnercentral:Catalog": value } };
	}

	/**
	 * Generates a condition block for `partnercentral:ChannelHandshakeType`.
	 */
	static channelHandshakeType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "partnercentral:ChannelHandshakeType": value } };
	}

	/**
	 * Generates a condition block for `partnercentral:FulfillmentTypes`.
	 */
	static fulfillmentTypes(
		values: string[],
	): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": {
				"partnercentral:FulfillmentTypes": values,
			},
		};
	}

	/**
	 * Generates a condition block for `partnercentral:Programs`.
	 */
	static programs(values: string[]): Record<string, Record<string, string[]>> {
		return {
			"ForAllValues:StringEquals": { "partnercentral:Programs": values },
		};
	}

	/**
	 * Generates a condition block for `partnercentral:RelatedEntityType`.
	 */
	static relatedEntityType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "partnercentral:RelatedEntityType": value } };
	}

	/**
	 * Generates a condition block for `partnercentral:VerificationType`.
	 */
	static verificationType(
		value: string,
	): Record<string, Record<string, string>> {
		return { StringEquals: { "partnercentral:VerificationType": value } };
	}
}
