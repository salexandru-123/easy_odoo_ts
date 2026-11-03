"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLock_exceptionModel = exports.AccountJournalModel = exports.AccountJournalGroupModel = exports.AccountInvoice_extractWordsModel = exports.AccountInvoiceReportModel = exports.AccountIncotermsModel = exports.AccountImportSummaryModel = exports.AccountGroupModel = exports.AccountFullReconcileModel = exports.AccountFiscalYearModel = exports.AccountFiscalPositionModel = exports.AccountFiscalPositionTaxModel = exports.AccountFiscalPositionAccountModel = exports.AccountFinancialYearOpModel = exports.AccountEdiXmlUbl_sgModel = exports.AccountEdiXmlUbl_nlModel = exports.AccountEdiXmlUbl_efffModel = exports.AccountEdiXmlUbl_deModel = exports.AccountEdiXmlUbl_bis3Model = exports.AccountEdiXmlUbl_a_nzModel = exports.AccountEdiXmlUbl_21Model = exports.AccountEdiXmlUbl_20Model = exports.AccountEdiXmlCiiModel = exports.AccountEdiCommonModel = exports.AccountDuplicateTransactionWizardModel = exports.AccountDebitNoteModel = exports.AccountCodeMappingModel = exports.AccountChartTemplateModel = exports.AccountChangeLockDateModel = exports.AccountCashRoundingModel = exports.AccountBatchPaymentModel = exports.AccountBatchPaymentRejectionModel = exports.AccountBatchErrorWizardModel = exports.AccountBatchErrorWizardLineModel = exports.AccountBankStatementModel = exports.AccountBankStatementLineModel = exports.AccountBankStatementLineTransientModel = exports.AccountBankSelectionModel = exports.AccountAutopostBillsWizardModel = exports.AccountAutomaticEntryWizardModel = exports.AccountAutoReconcileWizardModel = exports.AccountAnalyticPlanModel = exports.AccountAnalyticLineModel = exports.AccountAnalyticDistributionModelModel = exports.AccountAnalyticApplicabilityModel = exports.AccountAnalyticAccountModel = exports.AccountAccruedOrdersWizardModel = exports.AccountAccountModel = exports.AccountAccountTagModel = exports._unknownModel = void 0;
exports.Auth_totpDeviceModel = exports.ApprovalRequestWizardModel = exports.ApprovalRequestModel = exports.ApprovalProductLineModel = exports.ApprovalCategoryModel = exports.ApprovalCategoryApproverModel = exports.ApprovalApproverModel = exports.ApplicantSendMailModel = exports.ApplicantGetRefuseReasonModel = exports.AnalyticPlanFieldsMixinModel = exports.AnalyticMixinModel = exports.Account_peppolServiceWizardModel = exports.Account_peppolServiceModel = exports.Account_edi_proxy_clientUserModel = exports.AccountTransferModelModel = exports.AccountTransferModelLineModel = exports.AccountTaxModel = exports.AccountTaxRepartitionLineModel = exports.AccountTaxGroupModel = exports.AccountSetupBankManualConfigModel = exports.AccountSecureEntriesWizardModel = exports.AccountRootModel = exports.AccountResequenceWizardModel = exports.AccountReportModel = exports.AccountReportLineModel = exports.AccountReportExternalValueModel = exports.AccountReportExpressionModel = exports.AccountReportColumnModel = exports.AccountReconcileWizardModel = exports.AccountReconcileModelModel = exports.AccountReconcileModelPartnerMappingModel = exports.AccountReconcileModelLineModel = exports.AccountPaymentModel = exports.AccountPaymentTermModel = exports.AccountPaymentTermLineModel = exports.AccountPaymentRegisterModel = exports.AccountPaymentMethodModel = exports.AccountPaymentMethodLineModel = exports.AccountPartialReconcileModel = exports.AccountOnlineLinkModel = exports.AccountOnlineAccountModel = exports.AccountMoveModel = exports.AccountMoveSendWizardModel = exports.AccountMoveSendModel = exports.AccountMoveSendBatchWizardModel = exports.AccountMoveReversalModel = exports.AccountMoveLineModel = exports.AccountMissingTransactionWizardModel = exports.AccountMergeWizardModel = exports.AccountMergeWizardLineModel = void 0;
exports.CrmTeamModel = exports.CrmTeamMemberModel = exports.CrmTagModel = exports.ConfirmStockSmsModel = exports.ChooseDeliveryPackageModel = exports.ChooseDeliveryCarrierModel = exports.ChangeProductionQtyModel = exports.ChangePasswordWizardModel = exports.ChangePasswordUserModel = exports.ChangePasswordOwnModel = exports.CertificateKeyModel = exports.CertificateCertificateModel = exports.CandidateSendMailModel = exports.CalendarRecurrenceModel = exports.CalendarProviderConfigModel = exports.CalendarPopoverDeleteWizardModel = exports.CalendarFiltersModel = exports.CalendarEventTypeModel = exports.CalendarEventModel = exports.CalendarAttendeeModel = exports.CalendarAlarm_managerModel = exports.CalendarAlarmModel = exports.BusPresenceModel = exports.BusListenerMixinModel = exports.BusBusModel = exports.BillToPoWizardModel = exports.Base_importMappingModel = exports.Base_importImportModel = exports.BaseModel = exports.BasePartnerMergeLineModel = exports.BasePartnerMergeAutomaticWizardModel = exports.BaseModuleUpgradeModel = exports.BaseModuleUpdateModel = exports.BaseModuleUninstallModel = exports.BaseModuleInstallReviewModel = exports.BaseModuleInstallRequestModel = exports.BaseLanguageInstallModel = exports.BaseLanguageImportModel = exports.BaseLanguageExportModel = exports.BaseImportModuleModel = exports.BaseEnableProfilingWizardModel = exports.BaseDocumentLayoutModel = exports.BaseAutomationModel = exports.BarcodesBarcode_events_mixinModel = exports.BarcodeRuleModel = exports.BarcodeNomenclatureModel = exports.BankRecWidgetModel = exports.BankRecWidgetLineModel = exports.AvatarMixinModel = exports.Auth_totpWizardModel = void 0;
exports.HelpdeskTicketConvertWizardModel = exports.HelpdeskTeamModel = exports.HelpdeskTagModel = exports.HelpdeskStageModel = exports.HelpdeskStageDeleteWizardModel = exports.HelpdeskSlaModel = exports.HelpdeskSlaStatusModel = exports.HelpdeskSlaReportAnalysisModel = exports.GoogleGmailMixinModel = exports.FormatVatLabelMixinModel = exports.FormatAddressMixinModel = exports.FleetVehicleModel = exports.FleetVehicleTagModel = exports.FleetVehicleStateModel = exports.FleetVehicleSendMailModel = exports.FleetVehicleOdometerModel = exports.FleetVehicleModelModel = exports.FleetVehicleModelCategoryModel = exports.FleetVehicleModelBrandModel = exports.FleetVehicleLogServicesModel = exports.FleetVehicleLogContractModel = exports.FleetVehicleCostReportModel = exports.FleetVehicleAssignationLogModel = exports.FleetServiceTypeModel = exports.FetchmailServerModel = exports.ExtractMixinModel = exports.ExportHrOutputModel = exports.ExportHrConfigModel = exports.ExpenseSampleRegisterModel = exports.ExpenseSampleReceiptModel = exports.DiscussVoiceMetadataModel = exports.DiscussGifFavoriteModel = exports.DiscussChannelModel = exports.DiscussChannelRtcSessionModel = exports.DiscussChannelMemberModel = exports.DigestTipModel = exports.DigestDigestModel = exports.DeliveryZipPrefixModel = exports.DeliveryPriceRuleModel = exports.DeliveryCarrierModel = exports.DecimalPrecisionModel = exports.Data_recycleRecordModel = exports.Data_recycleModelModel = exports.Data_mergeRuleModel = exports.Data_mergeRecordModel = exports.Data_mergeModelModel = exports.Data_mergeGroupModel = exports.Data_cleaningRuleModel = exports.Data_cleaningRecordModel = exports.Data_cleaningModelModel = void 0;
exports.HrLeaveGenerateMultiWizardModel = exports.HrLeaveEmployeeTypeReportModel = exports.HrLeaveAllocationModel = exports.HrLeaveAllocationGenerateMultiWizardModel = exports.HrLeaveAccrualPlanModel = exports.HrLeaveAccrualLevelModel = exports.HrJobModel = exports.HrJobPlatformModel = exports.HrHolidaysSummaryEmployeeModel = exports.HrHolidaysCancelLeaveModel = exports.HrExpenseModel = exports.HrExpenseSplitWizardModel = exports.HrExpenseSplitModel = exports.HrExpenseSheetModel = exports.HrExpenseRefuseWizardModel = exports.HrExpenseApproveDuplicateModel = exports.HrEmployeeModel = exports.HrEmployeeSkillModel = exports.HrEmployeeSkillReportModel = exports.HrEmployeeSkillLogModel = exports.HrEmployeePublicModel = exports.HrEmployeeDeleteWizardModel = exports.HrEmployeeCvWizardModel = exports.HrEmployeeCategoryModel = exports.HrEmployeeBaseModel = exports.HrDepartureWizardModel = exports.HrDepartureReasonModel = exports.HrDepartmentModel = exports.HrContractTypeModel = exports.HrContractModel = exports.HrContractSignDocumentWizardModel = exports.HrContractHistoryModel = exports.HrContractEmployeeReportModel = exports.HrCandidateModel = exports.HrCandidateSkillModel = exports.HrAttendanceModel = exports.HrAttendanceOvertimeModel = exports.HrAppraisalModel = exports.HrAppraisalTemplateModel = exports.HrAppraisalSkillModel = exports.HrAppraisalSkillReportModel = exports.HrAppraisalReportModel = exports.HrAppraisalNoteModel = exports.HrAppraisalGoalModel = exports.HrAppraisalGoalTagModel = exports.HrApplicantModel = exports.HrApplicantRefuseReasonModel = exports.HrApplicantCategoryModel = exports.HelpdeskTicketModel = exports.HelpdeskTicketReportAnalysisModel = void 0;
exports.HrWorkEntryRegenerationWizardModel = exports.HrWorkEntryExportMixinModel = exports.HrWorkEntryExportEmployeeMixinModel = exports.HrUserWorkEntryEmployeeModel = exports.HrTimesheetTipModel = exports.HrTimesheetAttendanceReportModel = exports.HrSkillTypeModel = exports.HrSkillModel = exports.HrSkillLevelModel = exports.HrSalaryRuleModel = exports.HrSalaryRuleCategoryModel = exports.HrSalaryAttachmentModel = exports.HrRuleParameterValueModel = exports.HrRuleParameterModel = exports.HrResumeLineTypeModel = exports.HrResumeLineModel = exports.HrRecruitmentStageModel = exports.HrRecruitmentStageReportModel = exports.HrRecruitmentSourceModel = exports.HrRecruitmentSignDocumentWizardModel = exports.HrRecruitmentReportModel = exports.HrRecruitmentDegreeModel = exports.HrPayslipWorked_daysModel = exports.HrPayslipModel = exports.HrPayslipRunModel = exports.HrPayslipLineModel = exports.HrPayslipInputTypeModel = exports.HrPayslipInputModel = exports.HrPayslipEmployeesModel = exports.HrPayrollStructureTypeModel = exports.HrPayrollStructureModel = exports.HrPayrollReportModel = exports.HrPayrollPaymentReportWizardModel = exports.HrPayrollNoteModel = exports.HrPayrollIndexModel = exports.HrPayrollHeadcountWorkingRateModel = exports.HrPayrollHeadcountModel = exports.HrPayrollHeadcountLineModel = exports.HrPayrollEmployeeDeclarationModel = exports.HrPayrollEditPayslipWorkedDaysLineModel = exports.HrPayrollEditPayslipLinesWizardModel = exports.HrPayrollEditPayslipLineModel = exports.HrPayrollDeclarationMixinModel = exports.HrPayrollDashboardWarningModel = exports.HrManagerDepartmentReportModel = exports.HrLeaveTypeModel = exports.HrLeaveModel = exports.HrLeaveReportModel = exports.HrLeaveReportCalendarModel = exports.HrLeaveMandatoryDayModel = void 0;
exports.IrModuleCategoryModel = exports.IrModelModel = exports.IrModelRelationModel = exports.IrModelInheritModel = exports.IrModelFieldsModel = exports.IrModelFieldsSelectionModel = exports.IrModelDataModel = exports.IrModelConstraintModel = exports.IrModelAccessModel = exports.IrMail_serverModel = exports.IrLoggingModel = exports.IrHttpModel = exports.IrFiltersModel = exports.IrFieldsConverterModel = exports.IrExportsModel = exports.IrExportsLineModel = exports.IrEmbeddedActionsModel = exports.IrDemo_failureWizardModel = exports.IrDemo_failureModel = exports.IrDemoModel = exports.IrDefaultModel = exports.IrCronModel = exports.IrCronTriggerModel = exports.IrCronProgressModel = exports.IrConfig_parameterModel = exports.IrBinaryModel = exports.IrAutovacuumModel = exports.IrAttachmentModel = exports.IrAttachmentReportModel = exports.IrAssetModel = exports.IrActionsTodoModel = exports.IrActionsServerModel = exports.IrActionsReportModel = exports.IrActionsClientModel = exports.IrActionsActionsModel = exports.IrActionsAct_window_closeModel = exports.IrActionsAct_windowViewModel = exports.IrActionsAct_windowModel = exports.IrActionsAct_urlModel = exports.ImageMixinModel = exports.IapServiceModel = exports.IapEnrichApiModel = exports.IapAutocompleteApiModel = exports.IapAccountModel = exports.HtmlFieldHistoryMixinModel = exports.Hr_timesheetMergeWizardModel = exports.HrWorkLocationModel = exports.HrWorkEntryTypeModel = exports.HrWorkEntryModel = exports.HrWorkEntryReportModel = void 0;
exports.MailActivityTodoCreateModel = exports.MailActivityScheduleModel = exports.MailActivityPlanModel = exports.MailActivityPlanTemplateModel = exports.MailActivityMixinModel = exports.LotLabelLayoutModel = exports.L10n_it_delivery_noteDelivery_mixinModel = exports.L10n_itDocumentTypeModel = exports.L10n_itDdtModel = exports.KpiProviderModel = exports.KnowledgeInviteModel = exports.KnowledgeCoverModel = exports.KnowledgeArticleModel = exports.KnowledgeArticleThreadModel = exports.KnowledgeArticleTemplateCategoryModel = exports.KnowledgeArticleStageModel = exports.KnowledgeArticleMemberModel = exports.KnowledgeArticleFavoriteModel = exports.IrWebsocketModel = exports.IrUiViewModel = exports.IrUiViewCustomModel = exports.IrUiMenuModel = exports.IrSequenceModel = exports.IrSequenceDate_rangeModel = exports.IrRuleModel = exports.IrQwebModel = exports.IrQwebFieldModel = exports.IrQwebFieldTimeModel = exports.IrQwebFieldTextModel = exports.IrQwebFieldSelectionModel = exports.IrQwebFieldRelativeModel = exports.IrQwebFieldQwebModel = exports.IrQwebFieldMonetaryModel = exports.IrQwebFieldMany2oneModel = exports.IrQwebFieldMany2manyModel = exports.IrQwebFieldIntegerModel = exports.IrQwebFieldImage_urlModel = exports.IrQwebFieldImageModel = exports.IrQwebFieldHtmlModel = exports.IrQwebFieldFloat_timeModel = exports.IrQwebFieldFloatModel = exports.IrQwebFieldDurationModel = exports.IrQwebFieldDatetimeModel = exports.IrQwebFieldDateModel = exports.IrQwebFieldContactModel = exports.IrQwebFieldBarcodeModel = exports.IrProfileModel = exports.IrModuleModuleModel = exports.IrModuleModuleExclusionModel = exports.IrModuleModuleDependencyModel = void 0;
exports.MrpBatchProduceModel = exports.MrpAccountWipAccountingModel = exports.MrpAccountWipAccountingLineModel = exports.MaintenanceTeamModel = exports.MaintenanceStageModel = exports.MaintenanceRequestModel = exports.MaintenanceMixinModel = exports.MaintenanceEquipmentModel = exports.MaintenanceEquipmentCategoryModel = exports.MailWizardInviteModel = exports.MailTrackingValueModel = exports.MailTrackingDurationMixinModel = exports.MailThreadModel = exports.MailThreadPhoneModel = exports.MailThreadMainAttachmentModel = exports.MailThreadCcModel = exports.MailThreadBlacklistModel = exports.MailTemplateModel = exports.MailTemplateResetModel = exports.MailTemplatePreviewModel = exports.MailScheduledMessageModel = exports.MailResendPartnerModel = exports.MailResendMessageModel = exports.MailRenderMixinModel = exports.MailPushModel = exports.MailPushDeviceModel = exports.MailNotificationModel = exports.MailMessageModel = exports.MailMessageTranslationModel = exports.MailMessageSubtypeModel = exports.MailMessageScheduleModel = exports.MailMessageReactionModel = exports.MailMailModel = exports.MailLinkPreviewModel = exports.MailIceServerModel = exports.MailGuestModel = exports.MailGatewayAllowedModel = exports.MailFollowersModel = exports.MailComposerMixinModel = exports.MailComposeMessageModel = exports.MailCannedResponseModel = exports.MailBotModel = exports.MailBlacklistModel = exports.MailBlacklistRemoveModel = exports.MailAliasModel = exports.MailAliasMixinModel = exports.MailAliasMixinOptionalModel = exports.MailAliasDomainModel = exports.MailActivityTypeModel = exports.MailActivityModel = void 0;
exports.PlanningAnalysisReportModel = exports.PickingLabelTypeModel = exports.PhoneBlacklistModel = exports.PhoneBlacklistRemoveModel = exports.PeppolRegistrationModel = exports.PaymentTransactionModel = exports.PaymentTokenModel = exports.PaymentRefundWizardModel = exports.PaymentProviderModel = exports.PaymentProviderOnboardingWizardModel = exports.PaymentMethodModel = exports.PaymentLinkWizardModel = exports.PaymentCaptureWizardModel = exports.OnboardingProgressModel = exports.OnboardingProgressStepModel = exports.OnboardingOnboardingModel = exports.OnboardingOnboardingStepModel = exports.Mrp_productionAdditionalWorkorderModel = exports.MrpWorkorderModel = exports.MrpWorkcenterModel = exports.MrpWorkcenterTagModel = exports.MrpWorkcenterProductivityModel = exports.MrpWorkcenterProductivityLossTypeModel = exports.MrpWorkcenterProductivityLossModel = exports.MrpWorkcenterCapacityModel = exports.MrpUnbuildModel = exports.MrpRoutingWorkcenterModel = exports.MrpReportModel = exports.MrpProductionModel = exports.MrpProductionSplitModel = exports.MrpProductionSplitMultiModel = exports.MrpProductionSplitLineModel = exports.MrpProductionScheduleModel = exports.MrpProductionBackorderModel = exports.MrpProductionBackorderLineModel = exports.MrpProductForecastModel = exports.MrpMpsForecastDetailsModel = exports.MrpEcoTypeModel = exports.MrpEcoModel = exports.MrpEcoTagModel = exports.MrpEcoStageModel = exports.MrpEcoRoutingChangeModel = exports.MrpEcoBomChangeModel = exports.MrpEcoApprovalModel = exports.MrpEcoApprovalTemplateModel = exports.MrpConsumptionWarningModel = exports.MrpConsumptionWarningLineModel = exports.MrpBomModel = exports.MrpBomLineModel = exports.MrpBomByproductModel = void 0;
exports.ProjectTaskStagePersonalModel = exports.ProjectTaskRecurrenceModel = exports.ProjectTaskCreateTimesheetModel = exports.ProjectTaskConvertWizardModel = exports.ProjectTaskBurndownChartReportModel = exports.ProjectTagsModel = exports.ProjectShareWizardModel = exports.ProjectShareCollaboratorWizardModel = exports.ProjectSaleLineEmployeeMapModel = exports.ProjectProjectModel = exports.ProjectProjectStageModel = exports.ProjectProjectStageDeleteWizardModel = exports.ProjectMilestoneModel = exports.ProjectCreateInvoiceModel = exports.ProjectCollaboratorModel = exports.ProductTemplateModel = exports.ProductTemplateAttributeValueModel = exports.ProductTemplateAttributeLineModel = exports.ProductTemplateAttributeExclusionModel = exports.ProductTagModel = exports.ProductSupplierinfoModel = exports.ProductReplenishModel = exports.ProductRemovalModel = exports.ProductProductModel = exports.ProductPricelistModel = exports.ProductPricelistItemModel = exports.ProductPackagingModel = exports.ProductLabelLayoutModel = exports.ProductDocumentModel = exports.ProductComboModel = exports.ProductComboItemModel = exports.ProductCategoryModel = exports.ProductCatalogMixinModel = exports.ProductAttributeValueModel = exports.ProductAttributeModel = exports.ProductAttributeCustomValueModel = exports.ProcurementGroupModel = exports.PrivacyLookupWizardModel = exports.PrivacyLookupWizardLineModel = exports.PrivacyLogModel = exports.PortalWizardUserModel = exports.PortalWizardModel = exports.PortalShareModel = exports.PortalMixinModel = exports.PlanningSlotModel = exports.PlanningSlotTemplateModel = exports.PlanningSendModel = exports.PlanningRoleModel = exports.PlanningRecurrencyModel = exports.PlanningPlanningModel = void 0;
exports.ReportProductReport_producttemplatelabel4x7Model = exports.ReportProductReport_producttemplatelabel4x12nopriceModel = exports.ReportProductReport_producttemplatelabel4x12Model = exports.ReportProductReport_producttemplatelabel2x7Model = exports.ReportProductReport_pricelistModel = exports.ReportPaperformatModel = exports.ReportMrp_account_enterpriseProduct_template_cost_structureModel = exports.ReportMrp_account_enterpriseMrp_cost_structureModel = exports.ReportMrpReport_mo_overviewModel = exports.ReportMrpReport_bom_structureModel = exports.ReportLayoutModel = exports.ReportHr_skillsReport_employee_cvModel = exports.ReportHr_payrollContribution_registerModel = exports.ReportHr_holidaysReport_holidayssummaryModel = exports.ReportBaseReport_irmodulereferenceModel = exports.ReportAccount_batch_paymentPrint_batch_paymentModel = exports.ReportAccountReport_invoice_with_paymentsModel = exports.ReportAccountReport_invoiceModel = exports.ReportAccountReport_hash_integrityModel = exports.RepairTagsModel = exports.RepairOrderModel = exports.RatingRatingModel = exports.RatingParentMixinModel = exports.RatingMixinModel = exports.QuotationDocumentModel = exports.QualityTagModel = exports.QualitySpreadsheetTemplateModel = exports.QualityReasonModel = exports.QualityPointModel = exports.QualityPointTest_typeModel = exports.QualityCheckWizardModel = exports.QualityCheckModel = exports.QualityCheckSpreadsheetModel = exports.QualityCheckOnDemandModel = exports.QualityAlertModel = exports.QualityAlertTeamModel = exports.QualityAlertStageModel = exports.PurchaseReportModel = exports.PurchaseOrderModel = exports.PurchaseOrderLineModel = exports.PurchaseInvoiceLinkWizardModel = exports.PurchaseEdiXmlUbl_bis3Model = exports.PurchaseBillUnionModel = exports.PurchaseBillLineMatchModel = exports.Publisher_warrantyContractModel = exports.ProposeChangeModel = exports.ProjectUpdateModel = exports.ProjectTaskTypeModel = exports.ProjectTaskTypeDeleteWizardModel = exports.ProjectTaskModel = void 0;
exports.SaleEdiCommonModel = exports.SaleAdvancePaymentInvModel = exports.RoomRoomModel = exports.RoomOfficeModel = exports.RoomBookingModel = exports.ResourceResourceModel = exports.ResourceMixinModel = exports.ResourceCalendarModel = exports.ResourceCalendarLeavesModel = exports.ResourceCalendarAttendanceModel = exports.ResetViewArchWizardModel = exports.ResUsersModel = exports.ResUsersSettingsVolumesModel = exports.ResUsersSettingsModel = exports.ResUsersLogModel = exports.ResUsersIdentitycheckModel = exports.ResUsersDeletionModel = exports.ResUsersApikeysModel = exports.ResUsersApikeysShowModel = exports.ResUsersApikeysDescriptionModel = exports.ResPartnerModel = exports.ResPartnerTitleModel = exports.ResPartnerIndustryModel = exports.ResPartnerCategoryModel = exports.ResPartnerBankModel = exports.ResPartnerAutocompleteSyncModel = exports.ResLangModel = exports.ResGroupsModel = exports.ResDeviceModel = exports.ResDeviceLogModel = exports.ResCurrencyModel = exports.ResCurrencyRateModel = exports.ResCountryModel = exports.ResCountryStateModel = exports.ResCountryGroupModel = exports.ResConfigModel = exports.ResConfigSettingsModel = exports.ResCompanyModel = exports.ResBankModel = exports.RequestAppraisalModel = exports.ReportStockReport_stock_ruleModel = exports.ReportStockReport_receptionModel = exports.ReportStockQuantityModel = exports.ReportStockLabel_product_product_viewModel = exports.ReportStockLabel_lot_template_viewModel = exports.ReportSignGreen_savings_reportModel = exports.ReportQuality_controlQuality_worksheet_internalModel = exports.ReportQuality_controlQuality_worksheetModel = exports.ReportProjectTaskUserModel = exports.ReportProductReport_producttemplatelabel_dymoModel = void 0;
exports.SpreadsheetRevisionModel = exports.SpreadsheetMixinModel = exports.SpreadsheetDashboardModel = exports.SpreadsheetDashboardShareModel = exports.SpreadsheetDashboardGroupModel = exports.SpreadsheetCellThreadModel = exports.SnailmailLetterModel = exports.SnailmailLetterMissingRequiredFieldsModel = exports.SnailmailLetterFormatErrorModel = exports.SmsTrackerModel = exports.SmsTemplateModel = exports.SmsTemplateResetModel = exports.SmsTemplatePreviewModel = exports.SmsSmsModel = exports.SmsResendModel = exports.SmsResendRecipientModel = exports.SmsComposerModel = exports.SmsAccountSenderModel = exports.SmsAccountPhoneModel = exports.SmsAccountCodeModel = exports.SignTemplateModel = exports.SignTemplateTagModel = exports.SignSendRequestModel = exports.SignSendRequestSignerModel = exports.SignRequestModel = exports.SignRequestItemValueModel = exports.SignRequestItemModel = exports.SignLogModel = exports.SignItemTypeModel = exports.SignItemModel = exports.SignItemRoleModel = exports.SignItemRadioSetModel = exports.SignItemOptionModel = exports.SignDuplicateTemplatePdfModel = exports.ShippingInformationUpdaterMixinModel = exports.SequenceMixinModel = exports.SaleReportModel = exports.SalePdfFormFieldModel = exports.SalePaymentProviderOnboardingWizardModel = exports.SaleOrderModel = exports.SaleOrderTemplateModel = exports.SaleOrderTemplateOptionModel = exports.SaleOrderTemplateLineModel = exports.SaleOrderSpreadsheetModel = exports.SaleOrderOptionModel = exports.SaleOrderLineModel = exports.SaleOrderDiscountModel = exports.SaleOrderCancelModel = exports.SaleMassCancelOrdersModel = exports.SaleEdiXmlUbl_bis3Model = void 0;
exports.StockStorageCategoryCapacityModel = exports.StockScrapModel = exports.StockScrapReasonTagModel = exports.StockRulesReportModel = exports.StockRuleModel = exports.StockRouteModel = exports.StockReturnPickingModel = exports.StockReturnPickingLineModel = exports.StockRequestCountModel = exports.StockReportModel = exports.StockReplenishmentOptionModel = exports.StockReplenishmentInfoModel = exports.StockReplenishMixinModel = exports.StockQuantityHistoryModel = exports.StockQuantModel = exports.StockQuantRelocateModel = exports.StockQuantPackageModel = exports.StockPutawayRuleModel = exports.StockPickingTypeModel = exports.StockPickingModel = exports.StockPickingTransportReasonModel = exports.StockPickingTransportMethodModel = exports.StockPickingTransportConditionModel = exports.StockPickingGoodsAppearanceModel = exports.StockPickingCheckerMixinModel = exports.StockPackage_levelModel = exports.StockPackageTypeModel = exports.StockPackageDestinationModel = exports.StockOrderpointSnoozeModel = exports.StockMoveModel = exports.StockMoveLineModel = exports.StockLotModel = exports.StockLotReportModel = exports.StockLocationModel = exports.StockInventoryWarningModel = exports.StockInventoryConflictModel = exports.StockInventoryAdjustmentNameModel = exports.StockForecasted_product_templateModel = exports.StockForecasted_product_productModel = exports.StockDeliveryNoteTypeModel = exports.StockDeliveryNoteModel = exports.StockDeliveryNoteSelectWizardModel = exports.StockDeliveryNoteLineModel = exports.StockDeliveryNoteInvoiceWizardModel = exports.StockDeliveryNoteCreateWizardModel = exports.StockDeliveryNoteConfirmWizardModel = exports.StockDeliveryNoteBaseWizardModel = exports.StockChangeProductQtyModel = exports.StockBackorderConfirmationModel = exports.StockBackorderConfirmationLineModel = void 0;
exports.X_stock_picking_line_6a2c5Model = exports.WizardIrModelMenuCreateModel = exports.Web_tourTourModel = exports.Web_tourTourStepModel = exports.Web_editorConverterTestModel = exports.Web_editorConverterTestSubModel = exports.Web_editorAssetsModel = exports.VendorDelayReportModel = exports.ValidateAccountMoveModel = exports.UtmTagModel = exports.UtmStageModel = exports.UtmSourceModel = exports.UtmSourceMixinModel = exports.UtmMixinModel = exports.UtmMediumModel = exports.UtmCampaignModel = exports.UpdateProductAttributeValueModel = exports.UomUomModel = exports.UomCategoryModel = exports.TimesheetsAnalysisReportModel = exports.TimesheetGridMixinModel = exports.TimerTimerModel = exports.TimerMixinModel = exports.TemplateResetMixinModel = exports.StudioMixinModel = exports.StudioExportWizardModel = exports.StudioExportWizardDataModel = exports.StudioExportModelModel = exports.StudioApprovalRuleModel = exports.StudioApprovalRuleDelegateModel = exports.StudioApprovalRuleApproverModel = exports.StudioApprovalRequestModel = exports.StudioApprovalEntryModel = exports.Stock_barcodeCancelOperationModel = exports.StockWarnInsufficientQtyUnbuildModel = exports.StockWarnInsufficientQtyModel = exports.StockWarnInsufficientQtyScrapModel = exports.StockWarnInsufficientQtyRepairModel = exports.StockWarehouseModel = exports.StockWarehouseOrderpointModel = exports.StockValuationLayerModel = exports.StockValuationLayerRevaluationModel = exports.StockTrackLineModel = exports.StockTrackConfirmationModel = exports.StockTraceabilityReportModel = exports.StockStorageCategoryModel = void 0;
const odoo_1 = require("./odoo");
class _unknownModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = '_unknown';
    }
}
exports._unknownModel = _unknownModel;
class AccountAccountTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.account.tag';
    }
}
exports.AccountAccountTagModel = AccountAccountTagModel;
class AccountAccountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.account';
    }
}
exports.AccountAccountModel = AccountAccountModel;
class AccountAccruedOrdersWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.accrued.orders.wizard';
    }
}
exports.AccountAccruedOrdersWizardModel = AccountAccruedOrdersWizardModel;
class AccountAnalyticAccountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.analytic.account';
    }
}
exports.AccountAnalyticAccountModel = AccountAnalyticAccountModel;
class AccountAnalyticApplicabilityModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.analytic.applicability';
    }
}
exports.AccountAnalyticApplicabilityModel = AccountAnalyticApplicabilityModel;
class AccountAnalyticDistributionModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.analytic.distribution.model';
    }
}
exports.AccountAnalyticDistributionModelModel = AccountAnalyticDistributionModelModel;
class AccountAnalyticLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.analytic.line';
    }
}
exports.AccountAnalyticLineModel = AccountAnalyticLineModel;
class AccountAnalyticPlanModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.analytic.plan';
    }
}
exports.AccountAnalyticPlanModel = AccountAnalyticPlanModel;
class AccountAutoReconcileWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.auto.reconcile.wizard';
    }
}
exports.AccountAutoReconcileWizardModel = AccountAutoReconcileWizardModel;
class AccountAutomaticEntryWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.automatic.entry.wizard';
    }
}
exports.AccountAutomaticEntryWizardModel = AccountAutomaticEntryWizardModel;
class AccountAutopostBillsWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.autopost.bills.wizard';
    }
}
exports.AccountAutopostBillsWizardModel = AccountAutopostBillsWizardModel;
class AccountBankSelectionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.bank.selection';
    }
}
exports.AccountBankSelectionModel = AccountBankSelectionModel;
class AccountBankStatementLineTransientModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.bank.statement.line.transient';
    }
}
exports.AccountBankStatementLineTransientModel = AccountBankStatementLineTransientModel;
class AccountBankStatementLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.bank.statement.line';
    }
}
exports.AccountBankStatementLineModel = AccountBankStatementLineModel;
class AccountBankStatementModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.bank.statement';
    }
}
exports.AccountBankStatementModel = AccountBankStatementModel;
class AccountBatchErrorWizardLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.batch.error.wizard.line';
    }
}
exports.AccountBatchErrorWizardLineModel = AccountBatchErrorWizardLineModel;
class AccountBatchErrorWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.batch.error.wizard';
    }
}
exports.AccountBatchErrorWizardModel = AccountBatchErrorWizardModel;
class AccountBatchPaymentRejectionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.batch.payment.rejection';
    }
}
exports.AccountBatchPaymentRejectionModel = AccountBatchPaymentRejectionModel;
class AccountBatchPaymentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.batch.payment';
    }
}
exports.AccountBatchPaymentModel = AccountBatchPaymentModel;
class AccountCashRoundingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.cash.rounding';
    }
}
exports.AccountCashRoundingModel = AccountCashRoundingModel;
class AccountChangeLockDateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.change.lock.date';
    }
}
exports.AccountChangeLockDateModel = AccountChangeLockDateModel;
class AccountChartTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.chart.template';
    }
}
exports.AccountChartTemplateModel = AccountChartTemplateModel;
class AccountCodeMappingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.code.mapping';
    }
}
exports.AccountCodeMappingModel = AccountCodeMappingModel;
class AccountDebitNoteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.debit.note';
    }
}
exports.AccountDebitNoteModel = AccountDebitNoteModel;
class AccountDuplicateTransactionWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.duplicate.transaction.wizard';
    }
}
exports.AccountDuplicateTransactionWizardModel = AccountDuplicateTransactionWizardModel;
class AccountEdiCommonModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.common';
    }
}
exports.AccountEdiCommonModel = AccountEdiCommonModel;
class AccountEdiXmlCiiModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.cii';
    }
}
exports.AccountEdiXmlCiiModel = AccountEdiXmlCiiModel;
class AccountEdiXmlUbl_20Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_20';
    }
}
exports.AccountEdiXmlUbl_20Model = AccountEdiXmlUbl_20Model;
class AccountEdiXmlUbl_21Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_21';
    }
}
exports.AccountEdiXmlUbl_21Model = AccountEdiXmlUbl_21Model;
class AccountEdiXmlUbl_a_nzModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_a_nz';
    }
}
exports.AccountEdiXmlUbl_a_nzModel = AccountEdiXmlUbl_a_nzModel;
class AccountEdiXmlUbl_bis3Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_bis3';
    }
}
exports.AccountEdiXmlUbl_bis3Model = AccountEdiXmlUbl_bis3Model;
class AccountEdiXmlUbl_deModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_de';
    }
}
exports.AccountEdiXmlUbl_deModel = AccountEdiXmlUbl_deModel;
class AccountEdiXmlUbl_efffModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_efff';
    }
}
exports.AccountEdiXmlUbl_efffModel = AccountEdiXmlUbl_efffModel;
class AccountEdiXmlUbl_nlModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_nl';
    }
}
exports.AccountEdiXmlUbl_nlModel = AccountEdiXmlUbl_nlModel;
class AccountEdiXmlUbl_sgModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.edi.xml.ubl_sg';
    }
}
exports.AccountEdiXmlUbl_sgModel = AccountEdiXmlUbl_sgModel;
class AccountFinancialYearOpModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.financial.year.op';
    }
}
exports.AccountFinancialYearOpModel = AccountFinancialYearOpModel;
class AccountFiscalPositionAccountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.fiscal.position.account';
    }
}
exports.AccountFiscalPositionAccountModel = AccountFiscalPositionAccountModel;
class AccountFiscalPositionTaxModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.fiscal.position.tax';
    }
}
exports.AccountFiscalPositionTaxModel = AccountFiscalPositionTaxModel;
class AccountFiscalPositionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.fiscal.position';
    }
}
exports.AccountFiscalPositionModel = AccountFiscalPositionModel;
class AccountFiscalYearModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.fiscal.year';
    }
}
exports.AccountFiscalYearModel = AccountFiscalYearModel;
class AccountFullReconcileModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.full.reconcile';
    }
}
exports.AccountFullReconcileModel = AccountFullReconcileModel;
class AccountGroupModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.group';
    }
}
exports.AccountGroupModel = AccountGroupModel;
class AccountImportSummaryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.import.summary';
    }
}
exports.AccountImportSummaryModel = AccountImportSummaryModel;
class AccountIncotermsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.incoterms';
    }
}
exports.AccountIncotermsModel = AccountIncotermsModel;
class AccountInvoiceReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.invoice.report';
    }
}
exports.AccountInvoiceReportModel = AccountInvoiceReportModel;
class AccountInvoice_extractWordsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.invoice_extract.words';
    }
}
exports.AccountInvoice_extractWordsModel = AccountInvoice_extractWordsModel;
class AccountJournalGroupModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.journal.group';
    }
}
exports.AccountJournalGroupModel = AccountJournalGroupModel;
class AccountJournalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.journal';
    }
}
exports.AccountJournalModel = AccountJournalModel;
class AccountLock_exceptionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.lock_exception';
    }
}
exports.AccountLock_exceptionModel = AccountLock_exceptionModel;
class AccountMergeWizardLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.merge.wizard.line';
    }
}
exports.AccountMergeWizardLineModel = AccountMergeWizardLineModel;
class AccountMergeWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.merge.wizard';
    }
}
exports.AccountMergeWizardModel = AccountMergeWizardModel;
class AccountMissingTransactionWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.missing.transaction.wizard';
    }
}
exports.AccountMissingTransactionWizardModel = AccountMissingTransactionWizardModel;
class AccountMoveLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.move.line';
    }
}
exports.AccountMoveLineModel = AccountMoveLineModel;
class AccountMoveReversalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.move.reversal';
    }
}
exports.AccountMoveReversalModel = AccountMoveReversalModel;
class AccountMoveSendBatchWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.move.send.batch.wizard';
    }
}
exports.AccountMoveSendBatchWizardModel = AccountMoveSendBatchWizardModel;
class AccountMoveSendModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.move.send';
    }
}
exports.AccountMoveSendModel = AccountMoveSendModel;
class AccountMoveSendWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.move.send.wizard';
    }
}
exports.AccountMoveSendWizardModel = AccountMoveSendWizardModel;
class AccountMoveModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.move';
    }
}
exports.AccountMoveModel = AccountMoveModel;
class AccountOnlineAccountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.online.account';
    }
}
exports.AccountOnlineAccountModel = AccountOnlineAccountModel;
class AccountOnlineLinkModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.online.link';
    }
}
exports.AccountOnlineLinkModel = AccountOnlineLinkModel;
class AccountPartialReconcileModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.partial.reconcile';
    }
}
exports.AccountPartialReconcileModel = AccountPartialReconcileModel;
class AccountPaymentMethodLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.payment.method.line';
    }
}
exports.AccountPaymentMethodLineModel = AccountPaymentMethodLineModel;
class AccountPaymentMethodModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.payment.method';
    }
}
exports.AccountPaymentMethodModel = AccountPaymentMethodModel;
class AccountPaymentRegisterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.payment.register';
    }
}
exports.AccountPaymentRegisterModel = AccountPaymentRegisterModel;
class AccountPaymentTermLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.payment.term.line';
    }
}
exports.AccountPaymentTermLineModel = AccountPaymentTermLineModel;
class AccountPaymentTermModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.payment.term';
    }
}
exports.AccountPaymentTermModel = AccountPaymentTermModel;
class AccountPaymentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.payment';
    }
}
exports.AccountPaymentModel = AccountPaymentModel;
class AccountReconcileModelLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.reconcile.model.line';
    }
}
exports.AccountReconcileModelLineModel = AccountReconcileModelLineModel;
class AccountReconcileModelPartnerMappingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.reconcile.model.partner.mapping';
    }
}
exports.AccountReconcileModelPartnerMappingModel = AccountReconcileModelPartnerMappingModel;
class AccountReconcileModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.reconcile.model';
    }
}
exports.AccountReconcileModelModel = AccountReconcileModelModel;
class AccountReconcileWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.reconcile.wizard';
    }
}
exports.AccountReconcileWizardModel = AccountReconcileWizardModel;
class AccountReportColumnModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.report.column';
    }
}
exports.AccountReportColumnModel = AccountReportColumnModel;
class AccountReportExpressionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.report.expression';
    }
}
exports.AccountReportExpressionModel = AccountReportExpressionModel;
class AccountReportExternalValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.report.external.value';
    }
}
exports.AccountReportExternalValueModel = AccountReportExternalValueModel;
class AccountReportLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.report.line';
    }
}
exports.AccountReportLineModel = AccountReportLineModel;
class AccountReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.report';
    }
}
exports.AccountReportModel = AccountReportModel;
class AccountResequenceWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.resequence.wizard';
    }
}
exports.AccountResequenceWizardModel = AccountResequenceWizardModel;
class AccountRootModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.root';
    }
}
exports.AccountRootModel = AccountRootModel;
class AccountSecureEntriesWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.secure.entries.wizard';
    }
}
exports.AccountSecureEntriesWizardModel = AccountSecureEntriesWizardModel;
class AccountSetupBankManualConfigModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.setup.bank.manual.config';
    }
}
exports.AccountSetupBankManualConfigModel = AccountSetupBankManualConfigModel;
class AccountTaxGroupModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.tax.group';
    }
}
exports.AccountTaxGroupModel = AccountTaxGroupModel;
class AccountTaxRepartitionLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.tax.repartition.line';
    }
}
exports.AccountTaxRepartitionLineModel = AccountTaxRepartitionLineModel;
class AccountTaxModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.tax';
    }
}
exports.AccountTaxModel = AccountTaxModel;
class AccountTransferModelLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.transfer.model.line';
    }
}
exports.AccountTransferModelLineModel = AccountTransferModelLineModel;
class AccountTransferModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account.transfer.model';
    }
}
exports.AccountTransferModelModel = AccountTransferModelModel;
class Account_edi_proxy_clientUserModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account_edi_proxy_client.user';
    }
}
exports.Account_edi_proxy_clientUserModel = Account_edi_proxy_clientUserModel;
class Account_peppolServiceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account_peppol.service';
    }
}
exports.Account_peppolServiceModel = Account_peppolServiceModel;
class Account_peppolServiceWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'account_peppol.service.wizard';
    }
}
exports.Account_peppolServiceWizardModel = Account_peppolServiceWizardModel;
class AnalyticMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'analytic.mixin';
    }
}
exports.AnalyticMixinModel = AnalyticMixinModel;
class AnalyticPlanFieldsMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'analytic.plan.fields.mixin';
    }
}
exports.AnalyticPlanFieldsMixinModel = AnalyticPlanFieldsMixinModel;
class ApplicantGetRefuseReasonModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'applicant.get.refuse.reason';
    }
}
exports.ApplicantGetRefuseReasonModel = ApplicantGetRefuseReasonModel;
class ApplicantSendMailModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'applicant.send.mail';
    }
}
exports.ApplicantSendMailModel = ApplicantSendMailModel;
class ApprovalApproverModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'approval.approver';
    }
}
exports.ApprovalApproverModel = ApprovalApproverModel;
class ApprovalCategoryApproverModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'approval.category.approver';
    }
}
exports.ApprovalCategoryApproverModel = ApprovalCategoryApproverModel;
class ApprovalCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'approval.category';
    }
}
exports.ApprovalCategoryModel = ApprovalCategoryModel;
class ApprovalProductLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'approval.product.line';
    }
}
exports.ApprovalProductLineModel = ApprovalProductLineModel;
class ApprovalRequestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'approval.request';
    }
}
exports.ApprovalRequestModel = ApprovalRequestModel;
class ApprovalRequestWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'approval.request.wizard';
    }
}
exports.ApprovalRequestWizardModel = ApprovalRequestWizardModel;
class Auth_totpDeviceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'auth_totp.device';
    }
}
exports.Auth_totpDeviceModel = Auth_totpDeviceModel;
class Auth_totpWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'auth_totp.wizard';
    }
}
exports.Auth_totpWizardModel = Auth_totpWizardModel;
class AvatarMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'avatar.mixin';
    }
}
exports.AvatarMixinModel = AvatarMixinModel;
class BankRecWidgetLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'bank.rec.widget.line';
    }
}
exports.BankRecWidgetLineModel = BankRecWidgetLineModel;
class BankRecWidgetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'bank.rec.widget';
    }
}
exports.BankRecWidgetModel = BankRecWidgetModel;
class BarcodeNomenclatureModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'barcode.nomenclature';
    }
}
exports.BarcodeNomenclatureModel = BarcodeNomenclatureModel;
class BarcodeRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'barcode.rule';
    }
}
exports.BarcodeRuleModel = BarcodeRuleModel;
class BarcodesBarcode_events_mixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'barcodes.barcode_events_mixin';
    }
}
exports.BarcodesBarcode_events_mixinModel = BarcodesBarcode_events_mixinModel;
class BaseAutomationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.automation';
    }
}
exports.BaseAutomationModel = BaseAutomationModel;
class BaseDocumentLayoutModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.document.layout';
    }
}
exports.BaseDocumentLayoutModel = BaseDocumentLayoutModel;
class BaseEnableProfilingWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.enable.profiling.wizard';
    }
}
exports.BaseEnableProfilingWizardModel = BaseEnableProfilingWizardModel;
class BaseImportModuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.import.module';
    }
}
exports.BaseImportModuleModel = BaseImportModuleModel;
class BaseLanguageExportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.language.export';
    }
}
exports.BaseLanguageExportModel = BaseLanguageExportModel;
class BaseLanguageImportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.language.import';
    }
}
exports.BaseLanguageImportModel = BaseLanguageImportModel;
class BaseLanguageInstallModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.language.install';
    }
}
exports.BaseLanguageInstallModel = BaseLanguageInstallModel;
class BaseModuleInstallRequestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.module.install.request';
    }
}
exports.BaseModuleInstallRequestModel = BaseModuleInstallRequestModel;
class BaseModuleInstallReviewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.module.install.review';
    }
}
exports.BaseModuleInstallReviewModel = BaseModuleInstallReviewModel;
class BaseModuleUninstallModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.module.uninstall';
    }
}
exports.BaseModuleUninstallModel = BaseModuleUninstallModel;
class BaseModuleUpdateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.module.update';
    }
}
exports.BaseModuleUpdateModel = BaseModuleUpdateModel;
class BaseModuleUpgradeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.module.upgrade';
    }
}
exports.BaseModuleUpgradeModel = BaseModuleUpgradeModel;
class BasePartnerMergeAutomaticWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.partner.merge.automatic.wizard';
    }
}
exports.BasePartnerMergeAutomaticWizardModel = BasePartnerMergeAutomaticWizardModel;
class BasePartnerMergeLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base.partner.merge.line';
    }
}
exports.BasePartnerMergeLineModel = BasePartnerMergeLineModel;
class BaseModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base';
    }
}
exports.BaseModel = BaseModel;
class Base_importImportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base_import.import';
    }
}
exports.Base_importImportModel = Base_importImportModel;
class Base_importMappingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'base_import.mapping';
    }
}
exports.Base_importMappingModel = Base_importMappingModel;
class BillToPoWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'bill.to.po.wizard';
    }
}
exports.BillToPoWizardModel = BillToPoWizardModel;
class BusBusModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'bus.bus';
    }
}
exports.BusBusModel = BusBusModel;
class BusListenerMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'bus.listener.mixin';
    }
}
exports.BusListenerMixinModel = BusListenerMixinModel;
class BusPresenceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'bus.presence';
    }
}
exports.BusPresenceModel = BusPresenceModel;
class CalendarAlarmModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.alarm';
    }
}
exports.CalendarAlarmModel = CalendarAlarmModel;
class CalendarAlarm_managerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.alarm_manager';
    }
}
exports.CalendarAlarm_managerModel = CalendarAlarm_managerModel;
class CalendarAttendeeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.attendee';
    }
}
exports.CalendarAttendeeModel = CalendarAttendeeModel;
class CalendarEventModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.event';
    }
}
exports.CalendarEventModel = CalendarEventModel;
class CalendarEventTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.event.type';
    }
}
exports.CalendarEventTypeModel = CalendarEventTypeModel;
class CalendarFiltersModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.filters';
    }
}
exports.CalendarFiltersModel = CalendarFiltersModel;
class CalendarPopoverDeleteWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.popover.delete.wizard';
    }
}
exports.CalendarPopoverDeleteWizardModel = CalendarPopoverDeleteWizardModel;
class CalendarProviderConfigModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.provider.config';
    }
}
exports.CalendarProviderConfigModel = CalendarProviderConfigModel;
class CalendarRecurrenceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'calendar.recurrence';
    }
}
exports.CalendarRecurrenceModel = CalendarRecurrenceModel;
class CandidateSendMailModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'candidate.send.mail';
    }
}
exports.CandidateSendMailModel = CandidateSendMailModel;
class CertificateCertificateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'certificate.certificate';
    }
}
exports.CertificateCertificateModel = CertificateCertificateModel;
class CertificateKeyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'certificate.key';
    }
}
exports.CertificateKeyModel = CertificateKeyModel;
class ChangePasswordOwnModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'change.password.own';
    }
}
exports.ChangePasswordOwnModel = ChangePasswordOwnModel;
class ChangePasswordUserModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'change.password.user';
    }
}
exports.ChangePasswordUserModel = ChangePasswordUserModel;
class ChangePasswordWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'change.password.wizard';
    }
}
exports.ChangePasswordWizardModel = ChangePasswordWizardModel;
class ChangeProductionQtyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'change.production.qty';
    }
}
exports.ChangeProductionQtyModel = ChangeProductionQtyModel;
class ChooseDeliveryCarrierModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'choose.delivery.carrier';
    }
}
exports.ChooseDeliveryCarrierModel = ChooseDeliveryCarrierModel;
class ChooseDeliveryPackageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'choose.delivery.package';
    }
}
exports.ChooseDeliveryPackageModel = ChooseDeliveryPackageModel;
class ConfirmStockSmsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'confirm.stock.sms';
    }
}
exports.ConfirmStockSmsModel = ConfirmStockSmsModel;
class CrmTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'crm.tag';
    }
}
exports.CrmTagModel = CrmTagModel;
class CrmTeamMemberModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'crm.team.member';
    }
}
exports.CrmTeamMemberModel = CrmTeamMemberModel;
class CrmTeamModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'crm.team';
    }
}
exports.CrmTeamModel = CrmTeamModel;
class Data_cleaningModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_cleaning.model';
    }
}
exports.Data_cleaningModelModel = Data_cleaningModelModel;
class Data_cleaningRecordModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_cleaning.record';
    }
}
exports.Data_cleaningRecordModel = Data_cleaningRecordModel;
class Data_cleaningRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_cleaning.rule';
    }
}
exports.Data_cleaningRuleModel = Data_cleaningRuleModel;
class Data_mergeGroupModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_merge.group';
    }
}
exports.Data_mergeGroupModel = Data_mergeGroupModel;
class Data_mergeModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_merge.model';
    }
}
exports.Data_mergeModelModel = Data_mergeModelModel;
class Data_mergeRecordModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_merge.record';
    }
}
exports.Data_mergeRecordModel = Data_mergeRecordModel;
class Data_mergeRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_merge.rule';
    }
}
exports.Data_mergeRuleModel = Data_mergeRuleModel;
class Data_recycleModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_recycle.model';
    }
}
exports.Data_recycleModelModel = Data_recycleModelModel;
class Data_recycleRecordModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'data_recycle.record';
    }
}
exports.Data_recycleRecordModel = Data_recycleRecordModel;
class DecimalPrecisionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'decimal.precision';
    }
}
exports.DecimalPrecisionModel = DecimalPrecisionModel;
class DeliveryCarrierModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'delivery.carrier';
    }
}
exports.DeliveryCarrierModel = DeliveryCarrierModel;
class DeliveryPriceRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'delivery.price.rule';
    }
}
exports.DeliveryPriceRuleModel = DeliveryPriceRuleModel;
class DeliveryZipPrefixModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'delivery.zip.prefix';
    }
}
exports.DeliveryZipPrefixModel = DeliveryZipPrefixModel;
class DigestDigestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'digest.digest';
    }
}
exports.DigestDigestModel = DigestDigestModel;
class DigestTipModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'digest.tip';
    }
}
exports.DigestTipModel = DigestTipModel;
class DiscussChannelMemberModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'discuss.channel.member';
    }
}
exports.DiscussChannelMemberModel = DiscussChannelMemberModel;
class DiscussChannelRtcSessionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'discuss.channel.rtc.session';
    }
}
exports.DiscussChannelRtcSessionModel = DiscussChannelRtcSessionModel;
class DiscussChannelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'discuss.channel';
    }
}
exports.DiscussChannelModel = DiscussChannelModel;
class DiscussGifFavoriteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'discuss.gif.favorite';
    }
}
exports.DiscussGifFavoriteModel = DiscussGifFavoriteModel;
class DiscussVoiceMetadataModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'discuss.voice.metadata';
    }
}
exports.DiscussVoiceMetadataModel = DiscussVoiceMetadataModel;
class ExpenseSampleReceiptModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'expense.sample.receipt';
    }
}
exports.ExpenseSampleReceiptModel = ExpenseSampleReceiptModel;
class ExpenseSampleRegisterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'expense.sample.register';
    }
}
exports.ExpenseSampleRegisterModel = ExpenseSampleRegisterModel;
class ExportHrConfigModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'export.hr.config';
    }
}
exports.ExportHrConfigModel = ExportHrConfigModel;
class ExportHrOutputModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'export.hr.output';
    }
}
exports.ExportHrOutputModel = ExportHrOutputModel;
class ExtractMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'extract.mixin';
    }
}
exports.ExtractMixinModel = ExtractMixinModel;
class FetchmailServerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fetchmail.server';
    }
}
exports.FetchmailServerModel = FetchmailServerModel;
class FleetServiceTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.service.type';
    }
}
exports.FleetServiceTypeModel = FleetServiceTypeModel;
class FleetVehicleAssignationLogModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.assignation.log';
    }
}
exports.FleetVehicleAssignationLogModel = FleetVehicleAssignationLogModel;
class FleetVehicleCostReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.cost.report';
    }
}
exports.FleetVehicleCostReportModel = FleetVehicleCostReportModel;
class FleetVehicleLogContractModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.log.contract';
    }
}
exports.FleetVehicleLogContractModel = FleetVehicleLogContractModel;
class FleetVehicleLogServicesModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.log.services';
    }
}
exports.FleetVehicleLogServicesModel = FleetVehicleLogServicesModel;
class FleetVehicleModelBrandModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.model.brand';
    }
}
exports.FleetVehicleModelBrandModel = FleetVehicleModelBrandModel;
class FleetVehicleModelCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.model.category';
    }
}
exports.FleetVehicleModelCategoryModel = FleetVehicleModelCategoryModel;
class FleetVehicleModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.model';
    }
}
exports.FleetVehicleModelModel = FleetVehicleModelModel;
class FleetVehicleOdometerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.odometer';
    }
}
exports.FleetVehicleOdometerModel = FleetVehicleOdometerModel;
class FleetVehicleSendMailModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.send.mail';
    }
}
exports.FleetVehicleSendMailModel = FleetVehicleSendMailModel;
class FleetVehicleStateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.state';
    }
}
exports.FleetVehicleStateModel = FleetVehicleStateModel;
class FleetVehicleTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle.tag';
    }
}
exports.FleetVehicleTagModel = FleetVehicleTagModel;
class FleetVehicleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'fleet.vehicle';
    }
}
exports.FleetVehicleModel = FleetVehicleModel;
class FormatAddressMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'format.address.mixin';
    }
}
exports.FormatAddressMixinModel = FormatAddressMixinModel;
class FormatVatLabelMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'format.vat.label.mixin';
    }
}
exports.FormatVatLabelMixinModel = FormatVatLabelMixinModel;
class GoogleGmailMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'google.gmail.mixin';
    }
}
exports.GoogleGmailMixinModel = GoogleGmailMixinModel;
class HelpdeskSlaReportAnalysisModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.sla.report.analysis';
    }
}
exports.HelpdeskSlaReportAnalysisModel = HelpdeskSlaReportAnalysisModel;
class HelpdeskSlaStatusModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.sla.status';
    }
}
exports.HelpdeskSlaStatusModel = HelpdeskSlaStatusModel;
class HelpdeskSlaModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.sla';
    }
}
exports.HelpdeskSlaModel = HelpdeskSlaModel;
class HelpdeskStageDeleteWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.stage.delete.wizard';
    }
}
exports.HelpdeskStageDeleteWizardModel = HelpdeskStageDeleteWizardModel;
class HelpdeskStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.stage';
    }
}
exports.HelpdeskStageModel = HelpdeskStageModel;
class HelpdeskTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.tag';
    }
}
exports.HelpdeskTagModel = HelpdeskTagModel;
class HelpdeskTeamModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.team';
    }
}
exports.HelpdeskTeamModel = HelpdeskTeamModel;
class HelpdeskTicketConvertWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.ticket.convert.wizard';
    }
}
exports.HelpdeskTicketConvertWizardModel = HelpdeskTicketConvertWizardModel;
class HelpdeskTicketReportAnalysisModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.ticket.report.analysis';
    }
}
exports.HelpdeskTicketReportAnalysisModel = HelpdeskTicketReportAnalysisModel;
class HelpdeskTicketModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'helpdesk.ticket';
    }
}
exports.HelpdeskTicketModel = HelpdeskTicketModel;
class HrApplicantCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.applicant.category';
    }
}
exports.HrApplicantCategoryModel = HrApplicantCategoryModel;
class HrApplicantRefuseReasonModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.applicant.refuse.reason';
    }
}
exports.HrApplicantRefuseReasonModel = HrApplicantRefuseReasonModel;
class HrApplicantModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.applicant';
    }
}
exports.HrApplicantModel = HrApplicantModel;
class HrAppraisalGoalTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal.goal.tag';
    }
}
exports.HrAppraisalGoalTagModel = HrAppraisalGoalTagModel;
class HrAppraisalGoalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal.goal';
    }
}
exports.HrAppraisalGoalModel = HrAppraisalGoalModel;
class HrAppraisalNoteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal.note';
    }
}
exports.HrAppraisalNoteModel = HrAppraisalNoteModel;
class HrAppraisalReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal.report';
    }
}
exports.HrAppraisalReportModel = HrAppraisalReportModel;
class HrAppraisalSkillReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal.skill.report';
    }
}
exports.HrAppraisalSkillReportModel = HrAppraisalSkillReportModel;
class HrAppraisalSkillModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal.skill';
    }
}
exports.HrAppraisalSkillModel = HrAppraisalSkillModel;
class HrAppraisalTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal.template';
    }
}
exports.HrAppraisalTemplateModel = HrAppraisalTemplateModel;
class HrAppraisalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.appraisal';
    }
}
exports.HrAppraisalModel = HrAppraisalModel;
class HrAttendanceOvertimeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.attendance.overtime';
    }
}
exports.HrAttendanceOvertimeModel = HrAttendanceOvertimeModel;
class HrAttendanceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.attendance';
    }
}
exports.HrAttendanceModel = HrAttendanceModel;
class HrCandidateSkillModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.candidate.skill';
    }
}
exports.HrCandidateSkillModel = HrCandidateSkillModel;
class HrCandidateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.candidate';
    }
}
exports.HrCandidateModel = HrCandidateModel;
class HrContractEmployeeReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.contract.employee.report';
    }
}
exports.HrContractEmployeeReportModel = HrContractEmployeeReportModel;
class HrContractHistoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.contract.history';
    }
}
exports.HrContractHistoryModel = HrContractHistoryModel;
class HrContractSignDocumentWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.contract.sign.document.wizard';
    }
}
exports.HrContractSignDocumentWizardModel = HrContractSignDocumentWizardModel;
class HrContractModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.contract';
    }
}
exports.HrContractModel = HrContractModel;
class HrContractTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.contract.type';
    }
}
exports.HrContractTypeModel = HrContractTypeModel;
class HrDepartmentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.department';
    }
}
exports.HrDepartmentModel = HrDepartmentModel;
class HrDepartureReasonModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.departure.reason';
    }
}
exports.HrDepartureReasonModel = HrDepartureReasonModel;
class HrDepartureWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.departure.wizard';
    }
}
exports.HrDepartureWizardModel = HrDepartureWizardModel;
class HrEmployeeBaseModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.base';
    }
}
exports.HrEmployeeBaseModel = HrEmployeeBaseModel;
class HrEmployeeCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.category';
    }
}
exports.HrEmployeeCategoryModel = HrEmployeeCategoryModel;
class HrEmployeeCvWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.cv.wizard';
    }
}
exports.HrEmployeeCvWizardModel = HrEmployeeCvWizardModel;
class HrEmployeeDeleteWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.delete.wizard';
    }
}
exports.HrEmployeeDeleteWizardModel = HrEmployeeDeleteWizardModel;
class HrEmployeePublicModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.public';
    }
}
exports.HrEmployeePublicModel = HrEmployeePublicModel;
class HrEmployeeSkillLogModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.skill.log';
    }
}
exports.HrEmployeeSkillLogModel = HrEmployeeSkillLogModel;
class HrEmployeeSkillReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.skill.report';
    }
}
exports.HrEmployeeSkillReportModel = HrEmployeeSkillReportModel;
class HrEmployeeSkillModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee.skill';
    }
}
exports.HrEmployeeSkillModel = HrEmployeeSkillModel;
class HrEmployeeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.employee';
    }
}
exports.HrEmployeeModel = HrEmployeeModel;
class HrExpenseApproveDuplicateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.expense.approve.duplicate';
    }
}
exports.HrExpenseApproveDuplicateModel = HrExpenseApproveDuplicateModel;
class HrExpenseRefuseWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.expense.refuse.wizard';
    }
}
exports.HrExpenseRefuseWizardModel = HrExpenseRefuseWizardModel;
class HrExpenseSheetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.expense.sheet';
    }
}
exports.HrExpenseSheetModel = HrExpenseSheetModel;
class HrExpenseSplitModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.expense.split';
    }
}
exports.HrExpenseSplitModel = HrExpenseSplitModel;
class HrExpenseSplitWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.expense.split.wizard';
    }
}
exports.HrExpenseSplitWizardModel = HrExpenseSplitWizardModel;
class HrExpenseModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.expense';
    }
}
exports.HrExpenseModel = HrExpenseModel;
class HrHolidaysCancelLeaveModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.holidays.cancel.leave';
    }
}
exports.HrHolidaysCancelLeaveModel = HrHolidaysCancelLeaveModel;
class HrHolidaysSummaryEmployeeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.holidays.summary.employee';
    }
}
exports.HrHolidaysSummaryEmployeeModel = HrHolidaysSummaryEmployeeModel;
class HrJobPlatformModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.job.platform';
    }
}
exports.HrJobPlatformModel = HrJobPlatformModel;
class HrJobModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.job';
    }
}
exports.HrJobModel = HrJobModel;
class HrLeaveAccrualLevelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.accrual.level';
    }
}
exports.HrLeaveAccrualLevelModel = HrLeaveAccrualLevelModel;
class HrLeaveAccrualPlanModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.accrual.plan';
    }
}
exports.HrLeaveAccrualPlanModel = HrLeaveAccrualPlanModel;
class HrLeaveAllocationGenerateMultiWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.allocation.generate.multi.wizard';
    }
}
exports.HrLeaveAllocationGenerateMultiWizardModel = HrLeaveAllocationGenerateMultiWizardModel;
class HrLeaveAllocationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.allocation';
    }
}
exports.HrLeaveAllocationModel = HrLeaveAllocationModel;
class HrLeaveEmployeeTypeReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.employee.type.report';
    }
}
exports.HrLeaveEmployeeTypeReportModel = HrLeaveEmployeeTypeReportModel;
class HrLeaveGenerateMultiWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.generate.multi.wizard';
    }
}
exports.HrLeaveGenerateMultiWizardModel = HrLeaveGenerateMultiWizardModel;
class HrLeaveMandatoryDayModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.mandatory.day';
    }
}
exports.HrLeaveMandatoryDayModel = HrLeaveMandatoryDayModel;
class HrLeaveReportCalendarModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.report.calendar';
    }
}
exports.HrLeaveReportCalendarModel = HrLeaveReportCalendarModel;
class HrLeaveReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.report';
    }
}
exports.HrLeaveReportModel = HrLeaveReportModel;
class HrLeaveModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave';
    }
}
exports.HrLeaveModel = HrLeaveModel;
class HrLeaveTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.leave.type';
    }
}
exports.HrLeaveTypeModel = HrLeaveTypeModel;
class HrManagerDepartmentReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.manager.department.report';
    }
}
exports.HrManagerDepartmentReportModel = HrManagerDepartmentReportModel;
class HrPayrollDashboardWarningModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.dashboard.warning';
    }
}
exports.HrPayrollDashboardWarningModel = HrPayrollDashboardWarningModel;
class HrPayrollDeclarationMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.declaration.mixin';
    }
}
exports.HrPayrollDeclarationMixinModel = HrPayrollDeclarationMixinModel;
class HrPayrollEditPayslipLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.edit.payslip.line';
    }
}
exports.HrPayrollEditPayslipLineModel = HrPayrollEditPayslipLineModel;
class HrPayrollEditPayslipLinesWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.edit.payslip.lines.wizard';
    }
}
exports.HrPayrollEditPayslipLinesWizardModel = HrPayrollEditPayslipLinesWizardModel;
class HrPayrollEditPayslipWorkedDaysLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.edit.payslip.worked.days.line';
    }
}
exports.HrPayrollEditPayslipWorkedDaysLineModel = HrPayrollEditPayslipWorkedDaysLineModel;
class HrPayrollEmployeeDeclarationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.employee.declaration';
    }
}
exports.HrPayrollEmployeeDeclarationModel = HrPayrollEmployeeDeclarationModel;
class HrPayrollHeadcountLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.headcount.line';
    }
}
exports.HrPayrollHeadcountLineModel = HrPayrollHeadcountLineModel;
class HrPayrollHeadcountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.headcount';
    }
}
exports.HrPayrollHeadcountModel = HrPayrollHeadcountModel;
class HrPayrollHeadcountWorkingRateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.headcount.working.rate';
    }
}
exports.HrPayrollHeadcountWorkingRateModel = HrPayrollHeadcountWorkingRateModel;
class HrPayrollIndexModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.index';
    }
}
exports.HrPayrollIndexModel = HrPayrollIndexModel;
class HrPayrollNoteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.note';
    }
}
exports.HrPayrollNoteModel = HrPayrollNoteModel;
class HrPayrollPaymentReportWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.payment.report.wizard';
    }
}
exports.HrPayrollPaymentReportWizardModel = HrPayrollPaymentReportWizardModel;
class HrPayrollReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.report';
    }
}
exports.HrPayrollReportModel = HrPayrollReportModel;
class HrPayrollStructureModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.structure';
    }
}
exports.HrPayrollStructureModel = HrPayrollStructureModel;
class HrPayrollStructureTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payroll.structure.type';
    }
}
exports.HrPayrollStructureTypeModel = HrPayrollStructureTypeModel;
class HrPayslipEmployeesModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payslip.employees';
    }
}
exports.HrPayslipEmployeesModel = HrPayslipEmployeesModel;
class HrPayslipInputModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payslip.input';
    }
}
exports.HrPayslipInputModel = HrPayslipInputModel;
class HrPayslipInputTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payslip.input.type';
    }
}
exports.HrPayslipInputTypeModel = HrPayslipInputTypeModel;
class HrPayslipLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payslip.line';
    }
}
exports.HrPayslipLineModel = HrPayslipLineModel;
class HrPayslipRunModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payslip.run';
    }
}
exports.HrPayslipRunModel = HrPayslipRunModel;
class HrPayslipModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payslip';
    }
}
exports.HrPayslipModel = HrPayslipModel;
class HrPayslipWorked_daysModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.payslip.worked_days';
    }
}
exports.HrPayslipWorked_daysModel = HrPayslipWorked_daysModel;
class HrRecruitmentDegreeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.recruitment.degree';
    }
}
exports.HrRecruitmentDegreeModel = HrRecruitmentDegreeModel;
class HrRecruitmentReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.recruitment.report';
    }
}
exports.HrRecruitmentReportModel = HrRecruitmentReportModel;
class HrRecruitmentSignDocumentWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.recruitment.sign.document.wizard';
    }
}
exports.HrRecruitmentSignDocumentWizardModel = HrRecruitmentSignDocumentWizardModel;
class HrRecruitmentSourceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.recruitment.source';
    }
}
exports.HrRecruitmentSourceModel = HrRecruitmentSourceModel;
class HrRecruitmentStageReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.recruitment.stage.report';
    }
}
exports.HrRecruitmentStageReportModel = HrRecruitmentStageReportModel;
class HrRecruitmentStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.recruitment.stage';
    }
}
exports.HrRecruitmentStageModel = HrRecruitmentStageModel;
class HrResumeLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.resume.line';
    }
}
exports.HrResumeLineModel = HrResumeLineModel;
class HrResumeLineTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.resume.line.type';
    }
}
exports.HrResumeLineTypeModel = HrResumeLineTypeModel;
class HrRuleParameterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.rule.parameter';
    }
}
exports.HrRuleParameterModel = HrRuleParameterModel;
class HrRuleParameterValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.rule.parameter.value';
    }
}
exports.HrRuleParameterValueModel = HrRuleParameterValueModel;
class HrSalaryAttachmentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.salary.attachment';
    }
}
exports.HrSalaryAttachmentModel = HrSalaryAttachmentModel;
class HrSalaryRuleCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.salary.rule.category';
    }
}
exports.HrSalaryRuleCategoryModel = HrSalaryRuleCategoryModel;
class HrSalaryRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.salary.rule';
    }
}
exports.HrSalaryRuleModel = HrSalaryRuleModel;
class HrSkillLevelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.skill.level';
    }
}
exports.HrSkillLevelModel = HrSkillLevelModel;
class HrSkillModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.skill';
    }
}
exports.HrSkillModel = HrSkillModel;
class HrSkillTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.skill.type';
    }
}
exports.HrSkillTypeModel = HrSkillTypeModel;
class HrTimesheetAttendanceReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.timesheet.attendance.report';
    }
}
exports.HrTimesheetAttendanceReportModel = HrTimesheetAttendanceReportModel;
class HrTimesheetTipModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.timesheet.tip';
    }
}
exports.HrTimesheetTipModel = HrTimesheetTipModel;
class HrUserWorkEntryEmployeeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.user.work.entry.employee';
    }
}
exports.HrUserWorkEntryEmployeeModel = HrUserWorkEntryEmployeeModel;
class HrWorkEntryExportEmployeeMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.work.entry.export.employee.mixin';
    }
}
exports.HrWorkEntryExportEmployeeMixinModel = HrWorkEntryExportEmployeeMixinModel;
class HrWorkEntryExportMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.work.entry.export.mixin';
    }
}
exports.HrWorkEntryExportMixinModel = HrWorkEntryExportMixinModel;
class HrWorkEntryRegenerationWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.work.entry.regeneration.wizard';
    }
}
exports.HrWorkEntryRegenerationWizardModel = HrWorkEntryRegenerationWizardModel;
class HrWorkEntryReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.work.entry.report';
    }
}
exports.HrWorkEntryReportModel = HrWorkEntryReportModel;
class HrWorkEntryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.work.entry';
    }
}
exports.HrWorkEntryModel = HrWorkEntryModel;
class HrWorkEntryTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.work.entry.type';
    }
}
exports.HrWorkEntryTypeModel = HrWorkEntryTypeModel;
class HrWorkLocationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr.work.location';
    }
}
exports.HrWorkLocationModel = HrWorkLocationModel;
class Hr_timesheetMergeWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'hr_timesheet.merge.wizard';
    }
}
exports.Hr_timesheetMergeWizardModel = Hr_timesheetMergeWizardModel;
class HtmlFieldHistoryMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'html.field.history.mixin';
    }
}
exports.HtmlFieldHistoryMixinModel = HtmlFieldHistoryMixinModel;
class IapAccountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'iap.account';
    }
}
exports.IapAccountModel = IapAccountModel;
class IapAutocompleteApiModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'iap.autocomplete.api';
    }
}
exports.IapAutocompleteApiModel = IapAutocompleteApiModel;
class IapEnrichApiModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'iap.enrich.api';
    }
}
exports.IapEnrichApiModel = IapEnrichApiModel;
class IapServiceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'iap.service';
    }
}
exports.IapServiceModel = IapServiceModel;
class ImageMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'image.mixin';
    }
}
exports.ImageMixinModel = ImageMixinModel;
class IrActionsAct_urlModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.act_url';
    }
}
exports.IrActionsAct_urlModel = IrActionsAct_urlModel;
class IrActionsAct_windowModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.act_window';
    }
}
exports.IrActionsAct_windowModel = IrActionsAct_windowModel;
class IrActionsAct_windowViewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.act_window.view';
    }
}
exports.IrActionsAct_windowViewModel = IrActionsAct_windowViewModel;
class IrActionsAct_window_closeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.act_window_close';
    }
}
exports.IrActionsAct_window_closeModel = IrActionsAct_window_closeModel;
class IrActionsActionsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.actions';
    }
}
exports.IrActionsActionsModel = IrActionsActionsModel;
class IrActionsClientModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.client';
    }
}
exports.IrActionsClientModel = IrActionsClientModel;
class IrActionsReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.report';
    }
}
exports.IrActionsReportModel = IrActionsReportModel;
class IrActionsServerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.server';
    }
}
exports.IrActionsServerModel = IrActionsServerModel;
class IrActionsTodoModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.actions.todo';
    }
}
exports.IrActionsTodoModel = IrActionsTodoModel;
class IrAssetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.asset';
    }
}
exports.IrAssetModel = IrAssetModel;
class IrAttachmentReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.attachment.report';
    }
}
exports.IrAttachmentReportModel = IrAttachmentReportModel;
class IrAttachmentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.attachment';
    }
}
exports.IrAttachmentModel = IrAttachmentModel;
class IrAutovacuumModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.autovacuum';
    }
}
exports.IrAutovacuumModel = IrAutovacuumModel;
class IrBinaryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.binary';
    }
}
exports.IrBinaryModel = IrBinaryModel;
class IrConfig_parameterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.config_parameter';
    }
}
exports.IrConfig_parameterModel = IrConfig_parameterModel;
class IrCronProgressModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.cron.progress';
    }
}
exports.IrCronProgressModel = IrCronProgressModel;
class IrCronTriggerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.cron.trigger';
    }
}
exports.IrCronTriggerModel = IrCronTriggerModel;
class IrCronModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.cron';
    }
}
exports.IrCronModel = IrCronModel;
class IrDefaultModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.default';
    }
}
exports.IrDefaultModel = IrDefaultModel;
class IrDemoModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.demo';
    }
}
exports.IrDemoModel = IrDemoModel;
class IrDemo_failureModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.demo_failure';
    }
}
exports.IrDemo_failureModel = IrDemo_failureModel;
class IrDemo_failureWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.demo_failure.wizard';
    }
}
exports.IrDemo_failureWizardModel = IrDemo_failureWizardModel;
class IrEmbeddedActionsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.embedded.actions';
    }
}
exports.IrEmbeddedActionsModel = IrEmbeddedActionsModel;
class IrExportsLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.exports.line';
    }
}
exports.IrExportsLineModel = IrExportsLineModel;
class IrExportsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.exports';
    }
}
exports.IrExportsModel = IrExportsModel;
class IrFieldsConverterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.fields.converter';
    }
}
exports.IrFieldsConverterModel = IrFieldsConverterModel;
class IrFiltersModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.filters';
    }
}
exports.IrFiltersModel = IrFiltersModel;
class IrHttpModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.http';
    }
}
exports.IrHttpModel = IrHttpModel;
class IrLoggingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.logging';
    }
}
exports.IrLoggingModel = IrLoggingModel;
class IrMail_serverModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.mail_server';
    }
}
exports.IrMail_serverModel = IrMail_serverModel;
class IrModelAccessModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model.access';
    }
}
exports.IrModelAccessModel = IrModelAccessModel;
class IrModelConstraintModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model.constraint';
    }
}
exports.IrModelConstraintModel = IrModelConstraintModel;
class IrModelDataModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model.data';
    }
}
exports.IrModelDataModel = IrModelDataModel;
class IrModelFieldsSelectionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model.fields.selection';
    }
}
exports.IrModelFieldsSelectionModel = IrModelFieldsSelectionModel;
class IrModelFieldsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model.fields';
    }
}
exports.IrModelFieldsModel = IrModelFieldsModel;
class IrModelInheritModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model.inherit';
    }
}
exports.IrModelInheritModel = IrModelInheritModel;
class IrModelRelationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model.relation';
    }
}
exports.IrModelRelationModel = IrModelRelationModel;
class IrModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.model';
    }
}
exports.IrModelModel = IrModelModel;
class IrModuleCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.module.category';
    }
}
exports.IrModuleCategoryModel = IrModuleCategoryModel;
class IrModuleModuleDependencyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.module.module.dependency';
    }
}
exports.IrModuleModuleDependencyModel = IrModuleModuleDependencyModel;
class IrModuleModuleExclusionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.module.module.exclusion';
    }
}
exports.IrModuleModuleExclusionModel = IrModuleModuleExclusionModel;
class IrModuleModuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.module.module';
    }
}
exports.IrModuleModuleModel = IrModuleModuleModel;
class IrProfileModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.profile';
    }
}
exports.IrProfileModel = IrProfileModel;
class IrQwebFieldBarcodeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.barcode';
    }
}
exports.IrQwebFieldBarcodeModel = IrQwebFieldBarcodeModel;
class IrQwebFieldContactModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.contact';
    }
}
exports.IrQwebFieldContactModel = IrQwebFieldContactModel;
class IrQwebFieldDateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.date';
    }
}
exports.IrQwebFieldDateModel = IrQwebFieldDateModel;
class IrQwebFieldDatetimeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.datetime';
    }
}
exports.IrQwebFieldDatetimeModel = IrQwebFieldDatetimeModel;
class IrQwebFieldDurationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.duration';
    }
}
exports.IrQwebFieldDurationModel = IrQwebFieldDurationModel;
class IrQwebFieldFloatModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.float';
    }
}
exports.IrQwebFieldFloatModel = IrQwebFieldFloatModel;
class IrQwebFieldFloat_timeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.float_time';
    }
}
exports.IrQwebFieldFloat_timeModel = IrQwebFieldFloat_timeModel;
class IrQwebFieldHtmlModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.html';
    }
}
exports.IrQwebFieldHtmlModel = IrQwebFieldHtmlModel;
class IrQwebFieldImageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.image';
    }
}
exports.IrQwebFieldImageModel = IrQwebFieldImageModel;
class IrQwebFieldImage_urlModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.image_url';
    }
}
exports.IrQwebFieldImage_urlModel = IrQwebFieldImage_urlModel;
class IrQwebFieldIntegerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.integer';
    }
}
exports.IrQwebFieldIntegerModel = IrQwebFieldIntegerModel;
class IrQwebFieldMany2manyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.many2many';
    }
}
exports.IrQwebFieldMany2manyModel = IrQwebFieldMany2manyModel;
class IrQwebFieldMany2oneModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.many2one';
    }
}
exports.IrQwebFieldMany2oneModel = IrQwebFieldMany2oneModel;
class IrQwebFieldMonetaryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.monetary';
    }
}
exports.IrQwebFieldMonetaryModel = IrQwebFieldMonetaryModel;
class IrQwebFieldQwebModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.qweb';
    }
}
exports.IrQwebFieldQwebModel = IrQwebFieldQwebModel;
class IrQwebFieldRelativeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.relative';
    }
}
exports.IrQwebFieldRelativeModel = IrQwebFieldRelativeModel;
class IrQwebFieldSelectionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.selection';
    }
}
exports.IrQwebFieldSelectionModel = IrQwebFieldSelectionModel;
class IrQwebFieldTextModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.text';
    }
}
exports.IrQwebFieldTextModel = IrQwebFieldTextModel;
class IrQwebFieldTimeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field.time';
    }
}
exports.IrQwebFieldTimeModel = IrQwebFieldTimeModel;
class IrQwebFieldModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb.field';
    }
}
exports.IrQwebFieldModel = IrQwebFieldModel;
class IrQwebModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.qweb';
    }
}
exports.IrQwebModel = IrQwebModel;
class IrRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.rule';
    }
}
exports.IrRuleModel = IrRuleModel;
class IrSequenceDate_rangeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.sequence.date_range';
    }
}
exports.IrSequenceDate_rangeModel = IrSequenceDate_rangeModel;
class IrSequenceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.sequence';
    }
}
exports.IrSequenceModel = IrSequenceModel;
class IrUiMenuModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.ui.menu';
    }
}
exports.IrUiMenuModel = IrUiMenuModel;
class IrUiViewCustomModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.ui.view.custom';
    }
}
exports.IrUiViewCustomModel = IrUiViewCustomModel;
class IrUiViewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.ui.view';
    }
}
exports.IrUiViewModel = IrUiViewModel;
class IrWebsocketModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'ir.websocket';
    }
}
exports.IrWebsocketModel = IrWebsocketModel;
class KnowledgeArticleFavoriteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.article.favorite';
    }
}
exports.KnowledgeArticleFavoriteModel = KnowledgeArticleFavoriteModel;
class KnowledgeArticleMemberModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.article.member';
    }
}
exports.KnowledgeArticleMemberModel = KnowledgeArticleMemberModel;
class KnowledgeArticleStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.article.stage';
    }
}
exports.KnowledgeArticleStageModel = KnowledgeArticleStageModel;
class KnowledgeArticleTemplateCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.article.template.category';
    }
}
exports.KnowledgeArticleTemplateCategoryModel = KnowledgeArticleTemplateCategoryModel;
class KnowledgeArticleThreadModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.article.thread';
    }
}
exports.KnowledgeArticleThreadModel = KnowledgeArticleThreadModel;
class KnowledgeArticleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.article';
    }
}
exports.KnowledgeArticleModel = KnowledgeArticleModel;
class KnowledgeCoverModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.cover';
    }
}
exports.KnowledgeCoverModel = KnowledgeCoverModel;
class KnowledgeInviteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'knowledge.invite';
    }
}
exports.KnowledgeInviteModel = KnowledgeInviteModel;
class KpiProviderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'kpi.provider';
    }
}
exports.KpiProviderModel = KpiProviderModel;
class L10n_itDdtModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'l10n_it.ddt';
    }
}
exports.L10n_itDdtModel = L10n_itDdtModel;
class L10n_itDocumentTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'l10n_it.document.type';
    }
}
exports.L10n_itDocumentTypeModel = L10n_itDocumentTypeModel;
class L10n_it_delivery_noteDelivery_mixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'l10n_it_delivery_note.delivery_mixin';
    }
}
exports.L10n_it_delivery_noteDelivery_mixinModel = L10n_it_delivery_noteDelivery_mixinModel;
class LotLabelLayoutModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'lot.label.layout';
    }
}
exports.LotLabelLayoutModel = LotLabelLayoutModel;
class MailActivityMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.activity.mixin';
    }
}
exports.MailActivityMixinModel = MailActivityMixinModel;
class MailActivityPlanTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.activity.plan.template';
    }
}
exports.MailActivityPlanTemplateModel = MailActivityPlanTemplateModel;
class MailActivityPlanModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.activity.plan';
    }
}
exports.MailActivityPlanModel = MailActivityPlanModel;
class MailActivityScheduleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.activity.schedule';
    }
}
exports.MailActivityScheduleModel = MailActivityScheduleModel;
class MailActivityTodoCreateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.activity.todo.create';
    }
}
exports.MailActivityTodoCreateModel = MailActivityTodoCreateModel;
class MailActivityModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.activity';
    }
}
exports.MailActivityModel = MailActivityModel;
class MailActivityTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.activity.type';
    }
}
exports.MailActivityTypeModel = MailActivityTypeModel;
class MailAliasDomainModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.alias.domain';
    }
}
exports.MailAliasDomainModel = MailAliasDomainModel;
class MailAliasMixinOptionalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.alias.mixin.optional';
    }
}
exports.MailAliasMixinOptionalModel = MailAliasMixinOptionalModel;
class MailAliasMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.alias.mixin';
    }
}
exports.MailAliasMixinModel = MailAliasMixinModel;
class MailAliasModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.alias';
    }
}
exports.MailAliasModel = MailAliasModel;
class MailBlacklistRemoveModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.blacklist.remove';
    }
}
exports.MailBlacklistRemoveModel = MailBlacklistRemoveModel;
class MailBlacklistModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.blacklist';
    }
}
exports.MailBlacklistModel = MailBlacklistModel;
class MailBotModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.bot';
    }
}
exports.MailBotModel = MailBotModel;
class MailCannedResponseModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.canned.response';
    }
}
exports.MailCannedResponseModel = MailCannedResponseModel;
class MailComposeMessageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.compose.message';
    }
}
exports.MailComposeMessageModel = MailComposeMessageModel;
class MailComposerMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.composer.mixin';
    }
}
exports.MailComposerMixinModel = MailComposerMixinModel;
class MailFollowersModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.followers';
    }
}
exports.MailFollowersModel = MailFollowersModel;
class MailGatewayAllowedModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.gateway.allowed';
    }
}
exports.MailGatewayAllowedModel = MailGatewayAllowedModel;
class MailGuestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.guest';
    }
}
exports.MailGuestModel = MailGuestModel;
class MailIceServerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.ice.server';
    }
}
exports.MailIceServerModel = MailIceServerModel;
class MailLinkPreviewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.link.preview';
    }
}
exports.MailLinkPreviewModel = MailLinkPreviewModel;
class MailMailModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.mail';
    }
}
exports.MailMailModel = MailMailModel;
class MailMessageReactionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.message.reaction';
    }
}
exports.MailMessageReactionModel = MailMessageReactionModel;
class MailMessageScheduleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.message.schedule';
    }
}
exports.MailMessageScheduleModel = MailMessageScheduleModel;
class MailMessageSubtypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.message.subtype';
    }
}
exports.MailMessageSubtypeModel = MailMessageSubtypeModel;
class MailMessageTranslationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.message.translation';
    }
}
exports.MailMessageTranslationModel = MailMessageTranslationModel;
class MailMessageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.message';
    }
}
exports.MailMessageModel = MailMessageModel;
class MailNotificationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.notification';
    }
}
exports.MailNotificationModel = MailNotificationModel;
class MailPushDeviceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.push.device';
    }
}
exports.MailPushDeviceModel = MailPushDeviceModel;
class MailPushModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.push';
    }
}
exports.MailPushModel = MailPushModel;
class MailRenderMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.render.mixin';
    }
}
exports.MailRenderMixinModel = MailRenderMixinModel;
class MailResendMessageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.resend.message';
    }
}
exports.MailResendMessageModel = MailResendMessageModel;
class MailResendPartnerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.resend.partner';
    }
}
exports.MailResendPartnerModel = MailResendPartnerModel;
class MailScheduledMessageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.scheduled.message';
    }
}
exports.MailScheduledMessageModel = MailScheduledMessageModel;
class MailTemplatePreviewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.template.preview';
    }
}
exports.MailTemplatePreviewModel = MailTemplatePreviewModel;
class MailTemplateResetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.template.reset';
    }
}
exports.MailTemplateResetModel = MailTemplateResetModel;
class MailTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.template';
    }
}
exports.MailTemplateModel = MailTemplateModel;
class MailThreadBlacklistModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.thread.blacklist';
    }
}
exports.MailThreadBlacklistModel = MailThreadBlacklistModel;
class MailThreadCcModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.thread.cc';
    }
}
exports.MailThreadCcModel = MailThreadCcModel;
class MailThreadMainAttachmentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.thread.main.attachment';
    }
}
exports.MailThreadMainAttachmentModel = MailThreadMainAttachmentModel;
class MailThreadPhoneModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.thread.phone';
    }
}
exports.MailThreadPhoneModel = MailThreadPhoneModel;
class MailThreadModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.thread';
    }
}
exports.MailThreadModel = MailThreadModel;
class MailTrackingDurationMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.tracking.duration.mixin';
    }
}
exports.MailTrackingDurationMixinModel = MailTrackingDurationMixinModel;
class MailTrackingValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.tracking.value';
    }
}
exports.MailTrackingValueModel = MailTrackingValueModel;
class MailWizardInviteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mail.wizard.invite';
    }
}
exports.MailWizardInviteModel = MailWizardInviteModel;
class MaintenanceEquipmentCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'maintenance.equipment.category';
    }
}
exports.MaintenanceEquipmentCategoryModel = MaintenanceEquipmentCategoryModel;
class MaintenanceEquipmentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'maintenance.equipment';
    }
}
exports.MaintenanceEquipmentModel = MaintenanceEquipmentModel;
class MaintenanceMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'maintenance.mixin';
    }
}
exports.MaintenanceMixinModel = MaintenanceMixinModel;
class MaintenanceRequestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'maintenance.request';
    }
}
exports.MaintenanceRequestModel = MaintenanceRequestModel;
class MaintenanceStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'maintenance.stage';
    }
}
exports.MaintenanceStageModel = MaintenanceStageModel;
class MaintenanceTeamModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'maintenance.team';
    }
}
exports.MaintenanceTeamModel = MaintenanceTeamModel;
class MrpAccountWipAccountingLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.account.wip.accounting.line';
    }
}
exports.MrpAccountWipAccountingLineModel = MrpAccountWipAccountingLineModel;
class MrpAccountWipAccountingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.account.wip.accounting';
    }
}
exports.MrpAccountWipAccountingModel = MrpAccountWipAccountingModel;
class MrpBatchProduceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.batch.produce';
    }
}
exports.MrpBatchProduceModel = MrpBatchProduceModel;
class MrpBomByproductModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.bom.byproduct';
    }
}
exports.MrpBomByproductModel = MrpBomByproductModel;
class MrpBomLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.bom.line';
    }
}
exports.MrpBomLineModel = MrpBomLineModel;
class MrpBomModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.bom';
    }
}
exports.MrpBomModel = MrpBomModel;
class MrpConsumptionWarningLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.consumption.warning.line';
    }
}
exports.MrpConsumptionWarningLineModel = MrpConsumptionWarningLineModel;
class MrpConsumptionWarningModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.consumption.warning';
    }
}
exports.MrpConsumptionWarningModel = MrpConsumptionWarningModel;
class MrpEcoApprovalTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco.approval.template';
    }
}
exports.MrpEcoApprovalTemplateModel = MrpEcoApprovalTemplateModel;
class MrpEcoApprovalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco.approval';
    }
}
exports.MrpEcoApprovalModel = MrpEcoApprovalModel;
class MrpEcoBomChangeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco.bom.change';
    }
}
exports.MrpEcoBomChangeModel = MrpEcoBomChangeModel;
class MrpEcoRoutingChangeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco.routing.change';
    }
}
exports.MrpEcoRoutingChangeModel = MrpEcoRoutingChangeModel;
class MrpEcoStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco.stage';
    }
}
exports.MrpEcoStageModel = MrpEcoStageModel;
class MrpEcoTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco.tag';
    }
}
exports.MrpEcoTagModel = MrpEcoTagModel;
class MrpEcoModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco';
    }
}
exports.MrpEcoModel = MrpEcoModel;
class MrpEcoTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.eco.type';
    }
}
exports.MrpEcoTypeModel = MrpEcoTypeModel;
class MrpMpsForecastDetailsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.mps.forecast.details';
    }
}
exports.MrpMpsForecastDetailsModel = MrpMpsForecastDetailsModel;
class MrpProductForecastModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.product.forecast';
    }
}
exports.MrpProductForecastModel = MrpProductForecastModel;
class MrpProductionBackorderLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.production.backorder.line';
    }
}
exports.MrpProductionBackorderLineModel = MrpProductionBackorderLineModel;
class MrpProductionBackorderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.production.backorder';
    }
}
exports.MrpProductionBackorderModel = MrpProductionBackorderModel;
class MrpProductionScheduleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.production.schedule';
    }
}
exports.MrpProductionScheduleModel = MrpProductionScheduleModel;
class MrpProductionSplitLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.production.split.line';
    }
}
exports.MrpProductionSplitLineModel = MrpProductionSplitLineModel;
class MrpProductionSplitMultiModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.production.split.multi';
    }
}
exports.MrpProductionSplitMultiModel = MrpProductionSplitMultiModel;
class MrpProductionSplitModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.production.split';
    }
}
exports.MrpProductionSplitModel = MrpProductionSplitModel;
class MrpProductionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.production';
    }
}
exports.MrpProductionModel = MrpProductionModel;
class MrpReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.report';
    }
}
exports.MrpReportModel = MrpReportModel;
class MrpRoutingWorkcenterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.routing.workcenter';
    }
}
exports.MrpRoutingWorkcenterModel = MrpRoutingWorkcenterModel;
class MrpUnbuildModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.unbuild';
    }
}
exports.MrpUnbuildModel = MrpUnbuildModel;
class MrpWorkcenterCapacityModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.workcenter.capacity';
    }
}
exports.MrpWorkcenterCapacityModel = MrpWorkcenterCapacityModel;
class MrpWorkcenterProductivityLossModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.workcenter.productivity.loss';
    }
}
exports.MrpWorkcenterProductivityLossModel = MrpWorkcenterProductivityLossModel;
class MrpWorkcenterProductivityLossTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.workcenter.productivity.loss.type';
    }
}
exports.MrpWorkcenterProductivityLossTypeModel = MrpWorkcenterProductivityLossTypeModel;
class MrpWorkcenterProductivityModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.workcenter.productivity';
    }
}
exports.MrpWorkcenterProductivityModel = MrpWorkcenterProductivityModel;
class MrpWorkcenterTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.workcenter.tag';
    }
}
exports.MrpWorkcenterTagModel = MrpWorkcenterTagModel;
class MrpWorkcenterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.workcenter';
    }
}
exports.MrpWorkcenterModel = MrpWorkcenterModel;
class MrpWorkorderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp.workorder';
    }
}
exports.MrpWorkorderModel = MrpWorkorderModel;
class Mrp_productionAdditionalWorkorderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'mrp_production.additional.workorder';
    }
}
exports.Mrp_productionAdditionalWorkorderModel = Mrp_productionAdditionalWorkorderModel;
class OnboardingOnboardingStepModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'onboarding.onboarding.step';
    }
}
exports.OnboardingOnboardingStepModel = OnboardingOnboardingStepModel;
class OnboardingOnboardingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'onboarding.onboarding';
    }
}
exports.OnboardingOnboardingModel = OnboardingOnboardingModel;
class OnboardingProgressStepModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'onboarding.progress.step';
    }
}
exports.OnboardingProgressStepModel = OnboardingProgressStepModel;
class OnboardingProgressModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'onboarding.progress';
    }
}
exports.OnboardingProgressModel = OnboardingProgressModel;
class PaymentCaptureWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.capture.wizard';
    }
}
exports.PaymentCaptureWizardModel = PaymentCaptureWizardModel;
class PaymentLinkWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.link.wizard';
    }
}
exports.PaymentLinkWizardModel = PaymentLinkWizardModel;
class PaymentMethodModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.method';
    }
}
exports.PaymentMethodModel = PaymentMethodModel;
class PaymentProviderOnboardingWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.provider.onboarding.wizard';
    }
}
exports.PaymentProviderOnboardingWizardModel = PaymentProviderOnboardingWizardModel;
class PaymentProviderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.provider';
    }
}
exports.PaymentProviderModel = PaymentProviderModel;
class PaymentRefundWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.refund.wizard';
    }
}
exports.PaymentRefundWizardModel = PaymentRefundWizardModel;
class PaymentTokenModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.token';
    }
}
exports.PaymentTokenModel = PaymentTokenModel;
class PaymentTransactionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'payment.transaction';
    }
}
exports.PaymentTransactionModel = PaymentTransactionModel;
class PeppolRegistrationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'peppol.registration';
    }
}
exports.PeppolRegistrationModel = PeppolRegistrationModel;
class PhoneBlacklistRemoveModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'phone.blacklist.remove';
    }
}
exports.PhoneBlacklistRemoveModel = PhoneBlacklistRemoveModel;
class PhoneBlacklistModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'phone.blacklist';
    }
}
exports.PhoneBlacklistModel = PhoneBlacklistModel;
class PickingLabelTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'picking.label.type';
    }
}
exports.PickingLabelTypeModel = PickingLabelTypeModel;
class PlanningAnalysisReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'planning.analysis.report';
    }
}
exports.PlanningAnalysisReportModel = PlanningAnalysisReportModel;
class PlanningPlanningModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'planning.planning';
    }
}
exports.PlanningPlanningModel = PlanningPlanningModel;
class PlanningRecurrencyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'planning.recurrency';
    }
}
exports.PlanningRecurrencyModel = PlanningRecurrencyModel;
class PlanningRoleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'planning.role';
    }
}
exports.PlanningRoleModel = PlanningRoleModel;
class PlanningSendModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'planning.send';
    }
}
exports.PlanningSendModel = PlanningSendModel;
class PlanningSlotTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'planning.slot.template';
    }
}
exports.PlanningSlotTemplateModel = PlanningSlotTemplateModel;
class PlanningSlotModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'planning.slot';
    }
}
exports.PlanningSlotModel = PlanningSlotModel;
class PortalMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'portal.mixin';
    }
}
exports.PortalMixinModel = PortalMixinModel;
class PortalShareModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'portal.share';
    }
}
exports.PortalShareModel = PortalShareModel;
class PortalWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'portal.wizard';
    }
}
exports.PortalWizardModel = PortalWizardModel;
class PortalWizardUserModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'portal.wizard.user';
    }
}
exports.PortalWizardUserModel = PortalWizardUserModel;
class PrivacyLogModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'privacy.log';
    }
}
exports.PrivacyLogModel = PrivacyLogModel;
class PrivacyLookupWizardLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'privacy.lookup.wizard.line';
    }
}
exports.PrivacyLookupWizardLineModel = PrivacyLookupWizardLineModel;
class PrivacyLookupWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'privacy.lookup.wizard';
    }
}
exports.PrivacyLookupWizardModel = PrivacyLookupWizardModel;
class ProcurementGroupModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'procurement.group';
    }
}
exports.ProcurementGroupModel = ProcurementGroupModel;
class ProductAttributeCustomValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.attribute.custom.value';
    }
}
exports.ProductAttributeCustomValueModel = ProductAttributeCustomValueModel;
class ProductAttributeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.attribute';
    }
}
exports.ProductAttributeModel = ProductAttributeModel;
class ProductAttributeValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.attribute.value';
    }
}
exports.ProductAttributeValueModel = ProductAttributeValueModel;
class ProductCatalogMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.catalog.mixin';
    }
}
exports.ProductCatalogMixinModel = ProductCatalogMixinModel;
class ProductCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.category';
    }
}
exports.ProductCategoryModel = ProductCategoryModel;
class ProductComboItemModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.combo.item';
    }
}
exports.ProductComboItemModel = ProductComboItemModel;
class ProductComboModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.combo';
    }
}
exports.ProductComboModel = ProductComboModel;
class ProductDocumentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.document';
    }
}
exports.ProductDocumentModel = ProductDocumentModel;
class ProductLabelLayoutModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.label.layout';
    }
}
exports.ProductLabelLayoutModel = ProductLabelLayoutModel;
class ProductPackagingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.packaging';
    }
}
exports.ProductPackagingModel = ProductPackagingModel;
class ProductPricelistItemModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.pricelist.item';
    }
}
exports.ProductPricelistItemModel = ProductPricelistItemModel;
class ProductPricelistModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.pricelist';
    }
}
exports.ProductPricelistModel = ProductPricelistModel;
class ProductProductModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.product';
    }
}
exports.ProductProductModel = ProductProductModel;
class ProductRemovalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.removal';
    }
}
exports.ProductRemovalModel = ProductRemovalModel;
class ProductReplenishModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.replenish';
    }
}
exports.ProductReplenishModel = ProductReplenishModel;
class ProductSupplierinfoModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.supplierinfo';
    }
}
exports.ProductSupplierinfoModel = ProductSupplierinfoModel;
class ProductTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.tag';
    }
}
exports.ProductTagModel = ProductTagModel;
class ProductTemplateAttributeExclusionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.template.attribute.exclusion';
    }
}
exports.ProductTemplateAttributeExclusionModel = ProductTemplateAttributeExclusionModel;
class ProductTemplateAttributeLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.template.attribute.line';
    }
}
exports.ProductTemplateAttributeLineModel = ProductTemplateAttributeLineModel;
class ProductTemplateAttributeValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.template.attribute.value';
    }
}
exports.ProductTemplateAttributeValueModel = ProductTemplateAttributeValueModel;
class ProductTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'product.template';
    }
}
exports.ProductTemplateModel = ProductTemplateModel;
class ProjectCollaboratorModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.collaborator';
    }
}
exports.ProjectCollaboratorModel = ProjectCollaboratorModel;
class ProjectCreateInvoiceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.create.invoice';
    }
}
exports.ProjectCreateInvoiceModel = ProjectCreateInvoiceModel;
class ProjectMilestoneModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.milestone';
    }
}
exports.ProjectMilestoneModel = ProjectMilestoneModel;
class ProjectProjectStageDeleteWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.project.stage.delete.wizard';
    }
}
exports.ProjectProjectStageDeleteWizardModel = ProjectProjectStageDeleteWizardModel;
class ProjectProjectStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.project.stage';
    }
}
exports.ProjectProjectStageModel = ProjectProjectStageModel;
class ProjectProjectModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.project';
    }
}
exports.ProjectProjectModel = ProjectProjectModel;
class ProjectSaleLineEmployeeMapModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.sale.line.employee.map';
    }
}
exports.ProjectSaleLineEmployeeMapModel = ProjectSaleLineEmployeeMapModel;
class ProjectShareCollaboratorWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.share.collaborator.wizard';
    }
}
exports.ProjectShareCollaboratorWizardModel = ProjectShareCollaboratorWizardModel;
class ProjectShareWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.share.wizard';
    }
}
exports.ProjectShareWizardModel = ProjectShareWizardModel;
class ProjectTagsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.tags';
    }
}
exports.ProjectTagsModel = ProjectTagsModel;
class ProjectTaskBurndownChartReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task.burndown.chart.report';
    }
}
exports.ProjectTaskBurndownChartReportModel = ProjectTaskBurndownChartReportModel;
class ProjectTaskConvertWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task.convert.wizard';
    }
}
exports.ProjectTaskConvertWizardModel = ProjectTaskConvertWizardModel;
class ProjectTaskCreateTimesheetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task.create.timesheet';
    }
}
exports.ProjectTaskCreateTimesheetModel = ProjectTaskCreateTimesheetModel;
class ProjectTaskRecurrenceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task.recurrence';
    }
}
exports.ProjectTaskRecurrenceModel = ProjectTaskRecurrenceModel;
class ProjectTaskStagePersonalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task.stage.personal';
    }
}
exports.ProjectTaskStagePersonalModel = ProjectTaskStagePersonalModel;
class ProjectTaskModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task';
    }
}
exports.ProjectTaskModel = ProjectTaskModel;
class ProjectTaskTypeDeleteWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task.type.delete.wizard';
    }
}
exports.ProjectTaskTypeDeleteWizardModel = ProjectTaskTypeDeleteWizardModel;
class ProjectTaskTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.task.type';
    }
}
exports.ProjectTaskTypeModel = ProjectTaskTypeModel;
class ProjectUpdateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'project.update';
    }
}
exports.ProjectUpdateModel = ProjectUpdateModel;
class ProposeChangeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'propose.change';
    }
}
exports.ProposeChangeModel = ProposeChangeModel;
class Publisher_warrantyContractModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'publisher_warranty.contract';
    }
}
exports.Publisher_warrantyContractModel = Publisher_warrantyContractModel;
class PurchaseBillLineMatchModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'purchase.bill.line.match';
    }
}
exports.PurchaseBillLineMatchModel = PurchaseBillLineMatchModel;
class PurchaseBillUnionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'purchase.bill.union';
    }
}
exports.PurchaseBillUnionModel = PurchaseBillUnionModel;
class PurchaseEdiXmlUbl_bis3Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'purchase.edi.xml.ubl_bis3';
    }
}
exports.PurchaseEdiXmlUbl_bis3Model = PurchaseEdiXmlUbl_bis3Model;
class PurchaseInvoiceLinkWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'purchase.invoice.link.wizard';
    }
}
exports.PurchaseInvoiceLinkWizardModel = PurchaseInvoiceLinkWizardModel;
class PurchaseOrderLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'purchase.order.line';
    }
}
exports.PurchaseOrderLineModel = PurchaseOrderLineModel;
class PurchaseOrderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'purchase.order';
    }
}
exports.PurchaseOrderModel = PurchaseOrderModel;
class PurchaseReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'purchase.report';
    }
}
exports.PurchaseReportModel = PurchaseReportModel;
class QualityAlertStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.alert.stage';
    }
}
exports.QualityAlertStageModel = QualityAlertStageModel;
class QualityAlertTeamModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.alert.team';
    }
}
exports.QualityAlertTeamModel = QualityAlertTeamModel;
class QualityAlertModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.alert';
    }
}
exports.QualityAlertModel = QualityAlertModel;
class QualityCheckOnDemandModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.check.on.demand';
    }
}
exports.QualityCheckOnDemandModel = QualityCheckOnDemandModel;
class QualityCheckSpreadsheetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.check.spreadsheet';
    }
}
exports.QualityCheckSpreadsheetModel = QualityCheckSpreadsheetModel;
class QualityCheckModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.check';
    }
}
exports.QualityCheckModel = QualityCheckModel;
class QualityCheckWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.check.wizard';
    }
}
exports.QualityCheckWizardModel = QualityCheckWizardModel;
class QualityPointTest_typeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.point.test_type';
    }
}
exports.QualityPointTest_typeModel = QualityPointTest_typeModel;
class QualityPointModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.point';
    }
}
exports.QualityPointModel = QualityPointModel;
class QualityReasonModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.reason';
    }
}
exports.QualityReasonModel = QualityReasonModel;
class QualitySpreadsheetTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.spreadsheet.template';
    }
}
exports.QualitySpreadsheetTemplateModel = QualitySpreadsheetTemplateModel;
class QualityTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quality.tag';
    }
}
exports.QualityTagModel = QualityTagModel;
class QuotationDocumentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'quotation.document';
    }
}
exports.QuotationDocumentModel = QuotationDocumentModel;
class RatingMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'rating.mixin';
    }
}
exports.RatingMixinModel = RatingMixinModel;
class RatingParentMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'rating.parent.mixin';
    }
}
exports.RatingParentMixinModel = RatingParentMixinModel;
class RatingRatingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'rating.rating';
    }
}
exports.RatingRatingModel = RatingRatingModel;
class RepairOrderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'repair.order';
    }
}
exports.RepairOrderModel = RepairOrderModel;
class RepairTagsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'repair.tags';
    }
}
exports.RepairTagsModel = RepairTagsModel;
class ReportAccountReport_hash_integrityModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.account.report_hash_integrity';
    }
}
exports.ReportAccountReport_hash_integrityModel = ReportAccountReport_hash_integrityModel;
class ReportAccountReport_invoiceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.account.report_invoice';
    }
}
exports.ReportAccountReport_invoiceModel = ReportAccountReport_invoiceModel;
class ReportAccountReport_invoice_with_paymentsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.account.report_invoice_with_payments';
    }
}
exports.ReportAccountReport_invoice_with_paymentsModel = ReportAccountReport_invoice_with_paymentsModel;
class ReportAccount_batch_paymentPrint_batch_paymentModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.account_batch_payment.print_batch_payment';
    }
}
exports.ReportAccount_batch_paymentPrint_batch_paymentModel = ReportAccount_batch_paymentPrint_batch_paymentModel;
class ReportBaseReport_irmodulereferenceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.base.report_irmodulereference';
    }
}
exports.ReportBaseReport_irmodulereferenceModel = ReportBaseReport_irmodulereferenceModel;
class ReportHr_holidaysReport_holidayssummaryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.hr_holidays.report_holidayssummary';
    }
}
exports.ReportHr_holidaysReport_holidayssummaryModel = ReportHr_holidaysReport_holidayssummaryModel;
class ReportHr_payrollContribution_registerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.hr_payroll.contribution_register';
    }
}
exports.ReportHr_payrollContribution_registerModel = ReportHr_payrollContribution_registerModel;
class ReportHr_skillsReport_employee_cvModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.hr_skills.report_employee_cv';
    }
}
exports.ReportHr_skillsReport_employee_cvModel = ReportHr_skillsReport_employee_cvModel;
class ReportLayoutModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.layout';
    }
}
exports.ReportLayoutModel = ReportLayoutModel;
class ReportMrpReport_bom_structureModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.mrp.report_bom_structure';
    }
}
exports.ReportMrpReport_bom_structureModel = ReportMrpReport_bom_structureModel;
class ReportMrpReport_mo_overviewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.mrp.report_mo_overview';
    }
}
exports.ReportMrpReport_mo_overviewModel = ReportMrpReport_mo_overviewModel;
class ReportMrp_account_enterpriseMrp_cost_structureModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.mrp_account_enterprise.mrp_cost_structure';
    }
}
exports.ReportMrp_account_enterpriseMrp_cost_structureModel = ReportMrp_account_enterpriseMrp_cost_structureModel;
class ReportMrp_account_enterpriseProduct_template_cost_structureModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.mrp_account_enterprise.product_template_cost_structure';
    }
}
exports.ReportMrp_account_enterpriseProduct_template_cost_structureModel = ReportMrp_account_enterpriseProduct_template_cost_structureModel;
class ReportPaperformatModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.paperformat';
    }
}
exports.ReportPaperformatModel = ReportPaperformatModel;
class ReportProductReport_pricelistModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.product.report_pricelist';
    }
}
exports.ReportProductReport_pricelistModel = ReportProductReport_pricelistModel;
class ReportProductReport_producttemplatelabel2x7Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.product.report_producttemplatelabel2x7';
    }
}
exports.ReportProductReport_producttemplatelabel2x7Model = ReportProductReport_producttemplatelabel2x7Model;
class ReportProductReport_producttemplatelabel4x12Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.product.report_producttemplatelabel4x12';
    }
}
exports.ReportProductReport_producttemplatelabel4x12Model = ReportProductReport_producttemplatelabel4x12Model;
class ReportProductReport_producttemplatelabel4x12nopriceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.product.report_producttemplatelabel4x12noprice';
    }
}
exports.ReportProductReport_producttemplatelabel4x12nopriceModel = ReportProductReport_producttemplatelabel4x12nopriceModel;
class ReportProductReport_producttemplatelabel4x7Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.product.report_producttemplatelabel4x7';
    }
}
exports.ReportProductReport_producttemplatelabel4x7Model = ReportProductReport_producttemplatelabel4x7Model;
class ReportProductReport_producttemplatelabel_dymoModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.product.report_producttemplatelabel_dymo';
    }
}
exports.ReportProductReport_producttemplatelabel_dymoModel = ReportProductReport_producttemplatelabel_dymoModel;
class ReportProjectTaskUserModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.project.task.user';
    }
}
exports.ReportProjectTaskUserModel = ReportProjectTaskUserModel;
class ReportQuality_controlQuality_worksheetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.quality_control.quality_worksheet';
    }
}
exports.ReportQuality_controlQuality_worksheetModel = ReportQuality_controlQuality_worksheetModel;
class ReportQuality_controlQuality_worksheet_internalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.quality_control.quality_worksheet_internal';
    }
}
exports.ReportQuality_controlQuality_worksheet_internalModel = ReportQuality_controlQuality_worksheet_internalModel;
class ReportSignGreen_savings_reportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.sign.green_savings_report';
    }
}
exports.ReportSignGreen_savings_reportModel = ReportSignGreen_savings_reportModel;
class ReportStockLabel_lot_template_viewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.stock.label_lot_template_view';
    }
}
exports.ReportStockLabel_lot_template_viewModel = ReportStockLabel_lot_template_viewModel;
class ReportStockLabel_product_product_viewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.stock.label_product_product_view';
    }
}
exports.ReportStockLabel_product_product_viewModel = ReportStockLabel_product_product_viewModel;
class ReportStockQuantityModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.stock.quantity';
    }
}
exports.ReportStockQuantityModel = ReportStockQuantityModel;
class ReportStockReport_receptionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.stock.report_reception';
    }
}
exports.ReportStockReport_receptionModel = ReportStockReport_receptionModel;
class ReportStockReport_stock_ruleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'report.stock.report_stock_rule';
    }
}
exports.ReportStockReport_stock_ruleModel = ReportStockReport_stock_ruleModel;
class RequestAppraisalModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'request.appraisal';
    }
}
exports.RequestAppraisalModel = RequestAppraisalModel;
class ResBankModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.bank';
    }
}
exports.ResBankModel = ResBankModel;
class ResCompanyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.company';
    }
}
exports.ResCompanyModel = ResCompanyModel;
class ResConfigSettingsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.config.settings';
    }
}
exports.ResConfigSettingsModel = ResConfigSettingsModel;
class ResConfigModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.config';
    }
}
exports.ResConfigModel = ResConfigModel;
class ResCountryGroupModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.country.group';
    }
}
exports.ResCountryGroupModel = ResCountryGroupModel;
class ResCountryStateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.country.state';
    }
}
exports.ResCountryStateModel = ResCountryStateModel;
class ResCountryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.country';
    }
}
exports.ResCountryModel = ResCountryModel;
class ResCurrencyRateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.currency.rate';
    }
}
exports.ResCurrencyRateModel = ResCurrencyRateModel;
class ResCurrencyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.currency';
    }
}
exports.ResCurrencyModel = ResCurrencyModel;
class ResDeviceLogModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.device.log';
    }
}
exports.ResDeviceLogModel = ResDeviceLogModel;
class ResDeviceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.device';
    }
}
exports.ResDeviceModel = ResDeviceModel;
class ResGroupsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.groups';
    }
}
exports.ResGroupsModel = ResGroupsModel;
class ResLangModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.lang';
    }
}
exports.ResLangModel = ResLangModel;
class ResPartnerAutocompleteSyncModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.partner.autocomplete.sync';
    }
}
exports.ResPartnerAutocompleteSyncModel = ResPartnerAutocompleteSyncModel;
class ResPartnerBankModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.partner.bank';
    }
}
exports.ResPartnerBankModel = ResPartnerBankModel;
class ResPartnerCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.partner.category';
    }
}
exports.ResPartnerCategoryModel = ResPartnerCategoryModel;
class ResPartnerIndustryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.partner.industry';
    }
}
exports.ResPartnerIndustryModel = ResPartnerIndustryModel;
class ResPartnerTitleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.partner.title';
    }
}
exports.ResPartnerTitleModel = ResPartnerTitleModel;
class ResPartnerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.partner';
    }
}
exports.ResPartnerModel = ResPartnerModel;
class ResUsersApikeysDescriptionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.apikeys.description';
    }
}
exports.ResUsersApikeysDescriptionModel = ResUsersApikeysDescriptionModel;
class ResUsersApikeysShowModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.apikeys.show';
    }
}
exports.ResUsersApikeysShowModel = ResUsersApikeysShowModel;
class ResUsersApikeysModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.apikeys';
    }
}
exports.ResUsersApikeysModel = ResUsersApikeysModel;
class ResUsersDeletionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.deletion';
    }
}
exports.ResUsersDeletionModel = ResUsersDeletionModel;
class ResUsersIdentitycheckModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.identitycheck';
    }
}
exports.ResUsersIdentitycheckModel = ResUsersIdentitycheckModel;
class ResUsersLogModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.log';
    }
}
exports.ResUsersLogModel = ResUsersLogModel;
class ResUsersSettingsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.settings';
    }
}
exports.ResUsersSettingsModel = ResUsersSettingsModel;
class ResUsersSettingsVolumesModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users.settings.volumes';
    }
}
exports.ResUsersSettingsVolumesModel = ResUsersSettingsVolumesModel;
class ResUsersModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'res.users';
    }
}
exports.ResUsersModel = ResUsersModel;
class ResetViewArchWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'reset.view.arch.wizard';
    }
}
exports.ResetViewArchWizardModel = ResetViewArchWizardModel;
class ResourceCalendarAttendanceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'resource.calendar.attendance';
    }
}
exports.ResourceCalendarAttendanceModel = ResourceCalendarAttendanceModel;
class ResourceCalendarLeavesModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'resource.calendar.leaves';
    }
}
exports.ResourceCalendarLeavesModel = ResourceCalendarLeavesModel;
class ResourceCalendarModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'resource.calendar';
    }
}
exports.ResourceCalendarModel = ResourceCalendarModel;
class ResourceMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'resource.mixin';
    }
}
exports.ResourceMixinModel = ResourceMixinModel;
class ResourceResourceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'resource.resource';
    }
}
exports.ResourceResourceModel = ResourceResourceModel;
class RoomBookingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'room.booking';
    }
}
exports.RoomBookingModel = RoomBookingModel;
class RoomOfficeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'room.office';
    }
}
exports.RoomOfficeModel = RoomOfficeModel;
class RoomRoomModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'room.room';
    }
}
exports.RoomRoomModel = RoomRoomModel;
class SaleAdvancePaymentInvModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.advance.payment.inv';
    }
}
exports.SaleAdvancePaymentInvModel = SaleAdvancePaymentInvModel;
class SaleEdiCommonModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.edi.common';
    }
}
exports.SaleEdiCommonModel = SaleEdiCommonModel;
class SaleEdiXmlUbl_bis3Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.edi.xml.ubl_bis3';
    }
}
exports.SaleEdiXmlUbl_bis3Model = SaleEdiXmlUbl_bis3Model;
class SaleMassCancelOrdersModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.mass.cancel.orders';
    }
}
exports.SaleMassCancelOrdersModel = SaleMassCancelOrdersModel;
class SaleOrderCancelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.cancel';
    }
}
exports.SaleOrderCancelModel = SaleOrderCancelModel;
class SaleOrderDiscountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.discount';
    }
}
exports.SaleOrderDiscountModel = SaleOrderDiscountModel;
class SaleOrderLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.line';
    }
}
exports.SaleOrderLineModel = SaleOrderLineModel;
class SaleOrderOptionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.option';
    }
}
exports.SaleOrderOptionModel = SaleOrderOptionModel;
class SaleOrderSpreadsheetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.spreadsheet';
    }
}
exports.SaleOrderSpreadsheetModel = SaleOrderSpreadsheetModel;
class SaleOrderTemplateLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.template.line';
    }
}
exports.SaleOrderTemplateLineModel = SaleOrderTemplateLineModel;
class SaleOrderTemplateOptionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.template.option';
    }
}
exports.SaleOrderTemplateOptionModel = SaleOrderTemplateOptionModel;
class SaleOrderTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order.template';
    }
}
exports.SaleOrderTemplateModel = SaleOrderTemplateModel;
class SaleOrderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.order';
    }
}
exports.SaleOrderModel = SaleOrderModel;
class SalePaymentProviderOnboardingWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.payment.provider.onboarding.wizard';
    }
}
exports.SalePaymentProviderOnboardingWizardModel = SalePaymentProviderOnboardingWizardModel;
class SalePdfFormFieldModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.pdf.form.field';
    }
}
exports.SalePdfFormFieldModel = SalePdfFormFieldModel;
class SaleReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sale.report';
    }
}
exports.SaleReportModel = SaleReportModel;
class SequenceMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sequence.mixin';
    }
}
exports.SequenceMixinModel = SequenceMixinModel;
class ShippingInformationUpdaterMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'shipping.information.updater.mixin';
    }
}
exports.ShippingInformationUpdaterMixinModel = ShippingInformationUpdaterMixinModel;
class SignDuplicateTemplatePdfModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.duplicate.template.pdf';
    }
}
exports.SignDuplicateTemplatePdfModel = SignDuplicateTemplatePdfModel;
class SignItemOptionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.item.option';
    }
}
exports.SignItemOptionModel = SignItemOptionModel;
class SignItemRadioSetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.item.radio.set';
    }
}
exports.SignItemRadioSetModel = SignItemRadioSetModel;
class SignItemRoleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.item.role';
    }
}
exports.SignItemRoleModel = SignItemRoleModel;
class SignItemModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.item';
    }
}
exports.SignItemModel = SignItemModel;
class SignItemTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.item.type';
    }
}
exports.SignItemTypeModel = SignItemTypeModel;
class SignLogModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.log';
    }
}
exports.SignLogModel = SignLogModel;
class SignRequestItemModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.request.item';
    }
}
exports.SignRequestItemModel = SignRequestItemModel;
class SignRequestItemValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.request.item.value';
    }
}
exports.SignRequestItemValueModel = SignRequestItemValueModel;
class SignRequestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.request';
    }
}
exports.SignRequestModel = SignRequestModel;
class SignSendRequestSignerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.send.request.signer';
    }
}
exports.SignSendRequestSignerModel = SignSendRequestSignerModel;
class SignSendRequestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.send.request';
    }
}
exports.SignSendRequestModel = SignSendRequestModel;
class SignTemplateTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.template.tag';
    }
}
exports.SignTemplateTagModel = SignTemplateTagModel;
class SignTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sign.template';
    }
}
exports.SignTemplateModel = SignTemplateModel;
class SmsAccountCodeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.account.code';
    }
}
exports.SmsAccountCodeModel = SmsAccountCodeModel;
class SmsAccountPhoneModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.account.phone';
    }
}
exports.SmsAccountPhoneModel = SmsAccountPhoneModel;
class SmsAccountSenderModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.account.sender';
    }
}
exports.SmsAccountSenderModel = SmsAccountSenderModel;
class SmsComposerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.composer';
    }
}
exports.SmsComposerModel = SmsComposerModel;
class SmsResendRecipientModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.resend.recipient';
    }
}
exports.SmsResendRecipientModel = SmsResendRecipientModel;
class SmsResendModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.resend';
    }
}
exports.SmsResendModel = SmsResendModel;
class SmsSmsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.sms';
    }
}
exports.SmsSmsModel = SmsSmsModel;
class SmsTemplatePreviewModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.template.preview';
    }
}
exports.SmsTemplatePreviewModel = SmsTemplatePreviewModel;
class SmsTemplateResetModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.template.reset';
    }
}
exports.SmsTemplateResetModel = SmsTemplateResetModel;
class SmsTemplateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.template';
    }
}
exports.SmsTemplateModel = SmsTemplateModel;
class SmsTrackerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'sms.tracker';
    }
}
exports.SmsTrackerModel = SmsTrackerModel;
class SnailmailLetterFormatErrorModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'snailmail.letter.format.error';
    }
}
exports.SnailmailLetterFormatErrorModel = SnailmailLetterFormatErrorModel;
class SnailmailLetterMissingRequiredFieldsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'snailmail.letter.missing.required.fields';
    }
}
exports.SnailmailLetterMissingRequiredFieldsModel = SnailmailLetterMissingRequiredFieldsModel;
class SnailmailLetterModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'snailmail.letter';
    }
}
exports.SnailmailLetterModel = SnailmailLetterModel;
class SpreadsheetCellThreadModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'spreadsheet.cell.thread';
    }
}
exports.SpreadsheetCellThreadModel = SpreadsheetCellThreadModel;
class SpreadsheetDashboardGroupModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'spreadsheet.dashboard.group';
    }
}
exports.SpreadsheetDashboardGroupModel = SpreadsheetDashboardGroupModel;
class SpreadsheetDashboardShareModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'spreadsheet.dashboard.share';
    }
}
exports.SpreadsheetDashboardShareModel = SpreadsheetDashboardShareModel;
class SpreadsheetDashboardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'spreadsheet.dashboard';
    }
}
exports.SpreadsheetDashboardModel = SpreadsheetDashboardModel;
class SpreadsheetMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'spreadsheet.mixin';
    }
}
exports.SpreadsheetMixinModel = SpreadsheetMixinModel;
class SpreadsheetRevisionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'spreadsheet.revision';
    }
}
exports.SpreadsheetRevisionModel = SpreadsheetRevisionModel;
class StockBackorderConfirmationLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.backorder.confirmation.line';
    }
}
exports.StockBackorderConfirmationLineModel = StockBackorderConfirmationLineModel;
class StockBackorderConfirmationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.backorder.confirmation';
    }
}
exports.StockBackorderConfirmationModel = StockBackorderConfirmationModel;
class StockChangeProductQtyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.change.product.qty';
    }
}
exports.StockChangeProductQtyModel = StockChangeProductQtyModel;
class StockDeliveryNoteBaseWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note.base.wizard';
    }
}
exports.StockDeliveryNoteBaseWizardModel = StockDeliveryNoteBaseWizardModel;
class StockDeliveryNoteConfirmWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note.confirm.wizard';
    }
}
exports.StockDeliveryNoteConfirmWizardModel = StockDeliveryNoteConfirmWizardModel;
class StockDeliveryNoteCreateWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note.create.wizard';
    }
}
exports.StockDeliveryNoteCreateWizardModel = StockDeliveryNoteCreateWizardModel;
class StockDeliveryNoteInvoiceWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note.invoice.wizard';
    }
}
exports.StockDeliveryNoteInvoiceWizardModel = StockDeliveryNoteInvoiceWizardModel;
class StockDeliveryNoteLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note.line';
    }
}
exports.StockDeliveryNoteLineModel = StockDeliveryNoteLineModel;
class StockDeliveryNoteSelectWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note.select.wizard';
    }
}
exports.StockDeliveryNoteSelectWizardModel = StockDeliveryNoteSelectWizardModel;
class StockDeliveryNoteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note';
    }
}
exports.StockDeliveryNoteModel = StockDeliveryNoteModel;
class StockDeliveryNoteTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.delivery.note.type';
    }
}
exports.StockDeliveryNoteTypeModel = StockDeliveryNoteTypeModel;
class StockForecasted_product_productModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.forecasted_product_product';
    }
}
exports.StockForecasted_product_productModel = StockForecasted_product_productModel;
class StockForecasted_product_templateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.forecasted_product_template';
    }
}
exports.StockForecasted_product_templateModel = StockForecasted_product_templateModel;
class StockInventoryAdjustmentNameModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.inventory.adjustment.name';
    }
}
exports.StockInventoryAdjustmentNameModel = StockInventoryAdjustmentNameModel;
class StockInventoryConflictModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.inventory.conflict';
    }
}
exports.StockInventoryConflictModel = StockInventoryConflictModel;
class StockInventoryWarningModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.inventory.warning';
    }
}
exports.StockInventoryWarningModel = StockInventoryWarningModel;
class StockLocationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.location';
    }
}
exports.StockLocationModel = StockLocationModel;
class StockLotReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.lot.report';
    }
}
exports.StockLotReportModel = StockLotReportModel;
class StockLotModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.lot';
    }
}
exports.StockLotModel = StockLotModel;
class StockMoveLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.move.line';
    }
}
exports.StockMoveLineModel = StockMoveLineModel;
class StockMoveModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.move';
    }
}
exports.StockMoveModel = StockMoveModel;
class StockOrderpointSnoozeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.orderpoint.snooze';
    }
}
exports.StockOrderpointSnoozeModel = StockOrderpointSnoozeModel;
class StockPackageDestinationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.package.destination';
    }
}
exports.StockPackageDestinationModel = StockPackageDestinationModel;
class StockPackageTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.package.type';
    }
}
exports.StockPackageTypeModel = StockPackageTypeModel;
class StockPackage_levelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.package_level';
    }
}
exports.StockPackage_levelModel = StockPackage_levelModel;
class StockPickingCheckerMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.picking.checker.mixin';
    }
}
exports.StockPickingCheckerMixinModel = StockPickingCheckerMixinModel;
class StockPickingGoodsAppearanceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.picking.goods.appearance';
    }
}
exports.StockPickingGoodsAppearanceModel = StockPickingGoodsAppearanceModel;
class StockPickingTransportConditionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.picking.transport.condition';
    }
}
exports.StockPickingTransportConditionModel = StockPickingTransportConditionModel;
class StockPickingTransportMethodModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.picking.transport.method';
    }
}
exports.StockPickingTransportMethodModel = StockPickingTransportMethodModel;
class StockPickingTransportReasonModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.picking.transport.reason';
    }
}
exports.StockPickingTransportReasonModel = StockPickingTransportReasonModel;
class StockPickingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.picking';
    }
}
exports.StockPickingModel = StockPickingModel;
class StockPickingTypeModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.picking.type';
    }
}
exports.StockPickingTypeModel = StockPickingTypeModel;
class StockPutawayRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.putaway.rule';
    }
}
exports.StockPutawayRuleModel = StockPutawayRuleModel;
class StockQuantPackageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.quant.package';
    }
}
exports.StockQuantPackageModel = StockQuantPackageModel;
class StockQuantRelocateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.quant.relocate';
    }
}
exports.StockQuantRelocateModel = StockQuantRelocateModel;
class StockQuantModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.quant';
    }
}
exports.StockQuantModel = StockQuantModel;
class StockQuantityHistoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.quantity.history';
    }
}
exports.StockQuantityHistoryModel = StockQuantityHistoryModel;
class StockReplenishMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.replenish.mixin';
    }
}
exports.StockReplenishMixinModel = StockReplenishMixinModel;
class StockReplenishmentInfoModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.replenishment.info';
    }
}
exports.StockReplenishmentInfoModel = StockReplenishmentInfoModel;
class StockReplenishmentOptionModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.replenishment.option';
    }
}
exports.StockReplenishmentOptionModel = StockReplenishmentOptionModel;
class StockReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.report';
    }
}
exports.StockReportModel = StockReportModel;
class StockRequestCountModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.request.count';
    }
}
exports.StockRequestCountModel = StockRequestCountModel;
class StockReturnPickingLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.return.picking.line';
    }
}
exports.StockReturnPickingLineModel = StockReturnPickingLineModel;
class StockReturnPickingModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.return.picking';
    }
}
exports.StockReturnPickingModel = StockReturnPickingModel;
class StockRouteModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.route';
    }
}
exports.StockRouteModel = StockRouteModel;
class StockRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.rule';
    }
}
exports.StockRuleModel = StockRuleModel;
class StockRulesReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.rules.report';
    }
}
exports.StockRulesReportModel = StockRulesReportModel;
class StockScrapReasonTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.scrap.reason.tag';
    }
}
exports.StockScrapReasonTagModel = StockScrapReasonTagModel;
class StockScrapModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.scrap';
    }
}
exports.StockScrapModel = StockScrapModel;
class StockStorageCategoryCapacityModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.storage.category.capacity';
    }
}
exports.StockStorageCategoryCapacityModel = StockStorageCategoryCapacityModel;
class StockStorageCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.storage.category';
    }
}
exports.StockStorageCategoryModel = StockStorageCategoryModel;
class StockTraceabilityReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.traceability.report';
    }
}
exports.StockTraceabilityReportModel = StockTraceabilityReportModel;
class StockTrackConfirmationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.track.confirmation';
    }
}
exports.StockTrackConfirmationModel = StockTrackConfirmationModel;
class StockTrackLineModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.track.line';
    }
}
exports.StockTrackLineModel = StockTrackLineModel;
class StockValuationLayerRevaluationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.valuation.layer.revaluation';
    }
}
exports.StockValuationLayerRevaluationModel = StockValuationLayerRevaluationModel;
class StockValuationLayerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.valuation.layer';
    }
}
exports.StockValuationLayerModel = StockValuationLayerModel;
class StockWarehouseOrderpointModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.warehouse.orderpoint';
    }
}
exports.StockWarehouseOrderpointModel = StockWarehouseOrderpointModel;
class StockWarehouseModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.warehouse';
    }
}
exports.StockWarehouseModel = StockWarehouseModel;
class StockWarnInsufficientQtyRepairModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.warn.insufficient.qty.repair';
    }
}
exports.StockWarnInsufficientQtyRepairModel = StockWarnInsufficientQtyRepairModel;
class StockWarnInsufficientQtyScrapModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.warn.insufficient.qty.scrap';
    }
}
exports.StockWarnInsufficientQtyScrapModel = StockWarnInsufficientQtyScrapModel;
class StockWarnInsufficientQtyModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.warn.insufficient.qty';
    }
}
exports.StockWarnInsufficientQtyModel = StockWarnInsufficientQtyModel;
class StockWarnInsufficientQtyUnbuildModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock.warn.insufficient.qty.unbuild';
    }
}
exports.StockWarnInsufficientQtyUnbuildModel = StockWarnInsufficientQtyUnbuildModel;
class Stock_barcodeCancelOperationModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'stock_barcode.cancel.operation';
    }
}
exports.Stock_barcodeCancelOperationModel = Stock_barcodeCancelOperationModel;
class StudioApprovalEntryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.approval.entry';
    }
}
exports.StudioApprovalEntryModel = StudioApprovalEntryModel;
class StudioApprovalRequestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.approval.request';
    }
}
exports.StudioApprovalRequestModel = StudioApprovalRequestModel;
class StudioApprovalRuleApproverModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.approval.rule.approver';
    }
}
exports.StudioApprovalRuleApproverModel = StudioApprovalRuleApproverModel;
class StudioApprovalRuleDelegateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.approval.rule.delegate';
    }
}
exports.StudioApprovalRuleDelegateModel = StudioApprovalRuleDelegateModel;
class StudioApprovalRuleModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.approval.rule';
    }
}
exports.StudioApprovalRuleModel = StudioApprovalRuleModel;
class StudioExportModelModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.export.model';
    }
}
exports.StudioExportModelModel = StudioExportModelModel;
class StudioExportWizardDataModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.export.wizard.data';
    }
}
exports.StudioExportWizardDataModel = StudioExportWizardDataModel;
class StudioExportWizardModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.export.wizard';
    }
}
exports.StudioExportWizardModel = StudioExportWizardModel;
class StudioMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'studio.mixin';
    }
}
exports.StudioMixinModel = StudioMixinModel;
class TemplateResetMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'template.reset.mixin';
    }
}
exports.TemplateResetMixinModel = TemplateResetMixinModel;
class TimerMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'timer.mixin';
    }
}
exports.TimerMixinModel = TimerMixinModel;
class TimerTimerModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'timer.timer';
    }
}
exports.TimerTimerModel = TimerTimerModel;
class TimesheetGridMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'timesheet.grid.mixin';
    }
}
exports.TimesheetGridMixinModel = TimesheetGridMixinModel;
class TimesheetsAnalysisReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'timesheets.analysis.report';
    }
}
exports.TimesheetsAnalysisReportModel = TimesheetsAnalysisReportModel;
class UomCategoryModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'uom.category';
    }
}
exports.UomCategoryModel = UomCategoryModel;
class UomUomModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'uom.uom';
    }
}
exports.UomUomModel = UomUomModel;
class UpdateProductAttributeValueModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'update.product.attribute.value';
    }
}
exports.UpdateProductAttributeValueModel = UpdateProductAttributeValueModel;
class UtmCampaignModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'utm.campaign';
    }
}
exports.UtmCampaignModel = UtmCampaignModel;
class UtmMediumModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'utm.medium';
    }
}
exports.UtmMediumModel = UtmMediumModel;
class UtmMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'utm.mixin';
    }
}
exports.UtmMixinModel = UtmMixinModel;
class UtmSourceMixinModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'utm.source.mixin';
    }
}
exports.UtmSourceMixinModel = UtmSourceMixinModel;
class UtmSourceModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'utm.source';
    }
}
exports.UtmSourceModel = UtmSourceModel;
class UtmStageModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'utm.stage';
    }
}
exports.UtmStageModel = UtmStageModel;
class UtmTagModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'utm.tag';
    }
}
exports.UtmTagModel = UtmTagModel;
class ValidateAccountMoveModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'validate.account.move';
    }
}
exports.ValidateAccountMoveModel = ValidateAccountMoveModel;
class VendorDelayReportModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'vendor.delay.report';
    }
}
exports.VendorDelayReportModel = VendorDelayReportModel;
class Web_editorAssetsModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'web_editor.assets';
    }
}
exports.Web_editorAssetsModel = Web_editorAssetsModel;
class Web_editorConverterTestSubModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'web_editor.converter.test.sub';
    }
}
exports.Web_editorConverterTestSubModel = Web_editorConverterTestSubModel;
class Web_editorConverterTestModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'web_editor.converter.test';
    }
}
exports.Web_editorConverterTestModel = Web_editorConverterTestModel;
class Web_tourTourStepModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'web_tour.tour.step';
    }
}
exports.Web_tourTourStepModel = Web_tourTourStepModel;
class Web_tourTourModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'web_tour.tour';
    }
}
exports.Web_tourTourModel = Web_tourTourModel;
class WizardIrModelMenuCreateModel extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'wizard.ir.model.menu.create';
    }
}
exports.WizardIrModelMenuCreateModel = WizardIrModelMenuCreateModel;
class X_stock_picking_line_6a2c5Model extends odoo_1.BaseOdooModel {
    constructor() {
        super(...arguments);
        this.model = 'x_stock_picking_line_6a2c5';
    }
}
exports.X_stock_picking_line_6a2c5Model = X_stock_picking_line_6a2c5Model;
