import { BaseOdooModel } from './odoo';
import { T_unknown } from '../types/odoo/_unknown';
import { TAccountAccountTag } from '../types/odoo/account.account.tag';
import { TAccountAccount } from '../types/odoo/account.account';
import { TAccountAccruedOrdersWizard } from '../types/odoo/account.accrued.orders.wizard';
import { TAccountAnalyticAccount } from '../types/odoo/account.analytic.account';
import { TAccountAnalyticApplicability } from '../types/odoo/account.analytic.applicability';
import { TAccountAnalyticDistributionModel } from '../types/odoo/account.analytic.distribution.model';
import { TAccountAnalyticLine } from '../types/odoo/account.analytic.line';
import { TAccountAnalyticPlan } from '../types/odoo/account.analytic.plan';
import { TAccountAutoReconcileWizard } from '../types/odoo/account.auto.reconcile.wizard';
import { TAccountAutomaticEntryWizard } from '../types/odoo/account.automatic.entry.wizard';
import { TAccountAutopostBillsWizard } from '../types/odoo/account.autopost.bills.wizard';
import { TAccountAvataxUniqueCode } from '../types/odoo/account.avatax.unique.code';
import { TAccountBankSelection } from '../types/odoo/account.bank.selection';
import { TAccountBankStatementLineTransient } from '../types/odoo/account.bank.statement.line.transient';
import { TAccountBankStatementLine } from '../types/odoo/account.bank.statement.line';
import { TAccountBankStatement } from '../types/odoo/account.bank.statement';
import { TAccountBatchErrorWizardLine } from '../types/odoo/account.batch.error.wizard.line';
import { TAccountBatchErrorWizard } from '../types/odoo/account.batch.error.wizard';
import { TAccountBatchPaymentRejection } from '../types/odoo/account.batch.payment.rejection';
import { TAccountBatchPayment } from '../types/odoo/account.batch.payment';
import { TAccountCashRounding } from '../types/odoo/account.cash.rounding';
import { TAccountChangeLockDate } from '../types/odoo/account.change.lock.date';
import { TAccountChartTemplate } from '../types/odoo/account.chart.template';
import { TAccountCodeMapping } from '../types/odoo/account.code.mapping';
import { TAccountDuplicateTransactionWizard } from '../types/odoo/account.duplicate.transaction.wizard';
import { TAccountEdiCommon } from '../types/odoo/account.edi.common';
import { TAccountEdiXmlCii } from '../types/odoo/account.edi.xml.cii';
import { TAccountEdiXmlUbl_20 } from '../types/odoo/account.edi.xml.ubl_20';
import { TAccountEdiXmlUbl_21 } from '../types/odoo/account.edi.xml.ubl_21';
import { TAccountEdiXmlUbl_a_nz } from '../types/odoo/account.edi.xml.ubl_a_nz';
import { TAccountEdiXmlUbl_bis3 } from '../types/odoo/account.edi.xml.ubl_bis3';
import { TAccountEdiXmlUbl_de } from '../types/odoo/account.edi.xml.ubl_de';
import { TAccountEdiXmlUbl_efff } from '../types/odoo/account.edi.xml.ubl_efff';
import { TAccountEdiXmlUbl_nl } from '../types/odoo/account.edi.xml.ubl_nl';
import { TAccountEdiXmlUbl_sg } from '../types/odoo/account.edi.xml.ubl_sg';
import { TAccountExternalTaxMixin } from '../types/odoo/account.external.tax.mixin';
import { TAccountFinancialYearOp } from '../types/odoo/account.financial.year.op';
import { TAccountFiscalPositionAccount } from '../types/odoo/account.fiscal.position.account';
import { TAccountFiscalPositionTax } from '../types/odoo/account.fiscal.position.tax';
import { TAccountFiscalPosition } from '../types/odoo/account.fiscal.position';
import { TAccountFiscalYear } from '../types/odoo/account.fiscal.year';
import { TAccountFullReconcile } from '../types/odoo/account.full.reconcile';
import { TAccountGroup } from '../types/odoo/account.group';
import { TAccountImportSummary } from '../types/odoo/account.import.summary';
import { TAccountIncoterms } from '../types/odoo/account.incoterms';
import { TAccountInvoiceReport } from '../types/odoo/account.invoice.report';
import { TAccountInvoice_extractWords } from '../types/odoo/account.invoice_extract.words';
import { TAccountJournalGroup } from '../types/odoo/account.journal.group';
import { TAccountJournal } from '../types/odoo/account.journal';
import { TAccountLock_exception } from '../types/odoo/account.lock_exception';
import { TAccountMergeWizardLine } from '../types/odoo/account.merge.wizard.line';
import { TAccountMergeWizard } from '../types/odoo/account.merge.wizard';
import { TAccountMissingTransactionWizard } from '../types/odoo/account.missing.transaction.wizard';
import { TAccountMoveLine } from '../types/odoo/account.move.line';
import { TAccountMoveReversal } from '../types/odoo/account.move.reversal';
import { TAccountMoveSendBatchWizard } from '../types/odoo/account.move.send.batch.wizard';
import { TAccountMoveSend } from '../types/odoo/account.move.send';
import { TAccountMoveSendWizard } from '../types/odoo/account.move.send.wizard';
import { TAccountMove } from '../types/odoo/account.move';
import { TAccountOnlineAccount } from '../types/odoo/account.online.account';
import { TAccountOnlineLink } from '../types/odoo/account.online.link';
import { TAccountPartialReconcile } from '../types/odoo/account.partial.reconcile';
import { TAccountPaymentMethodLine } from '../types/odoo/account.payment.method.line';
import { TAccountPaymentMethod } from '../types/odoo/account.payment.method';
import { TAccountPaymentRegister } from '../types/odoo/account.payment.register';
import { TAccountPaymentTermLine } from '../types/odoo/account.payment.term.line';
import { TAccountPaymentTerm } from '../types/odoo/account.payment.term';
import { TAccountPayment } from '../types/odoo/account.payment';
import { TAccountReconcileModelLine } from '../types/odoo/account.reconcile.model.line';
import { TAccountReconcileModelPartnerMapping } from '../types/odoo/account.reconcile.model.partner.mapping';
import { TAccountReconcileModel } from '../types/odoo/account.reconcile.model';
import { TAccountReconcileWizard } from '../types/odoo/account.reconcile.wizard';
import { TAccountReportColumn } from '../types/odoo/account.report.column';
import { TAccountReportExpression } from '../types/odoo/account.report.expression';
import { TAccountReportExternalValue } from '../types/odoo/account.report.external.value';
import { TAccountReportLine } from '../types/odoo/account.report.line';
import { TAccountReport } from '../types/odoo/account.report';
import { TAccountResequenceWizard } from '../types/odoo/account.resequence.wizard';
import { TAccountRoot } from '../types/odoo/account.root';
import { TAccountSecureEntriesWizard } from '../types/odoo/account.secure.entries.wizard';
import { TAccountSetupBankManualConfig } from '../types/odoo/account.setup.bank.manual.config';
import { TAccountTaxGroup } from '../types/odoo/account.tax.group';
import { TAccountTaxRepartitionLine } from '../types/odoo/account.tax.repartition.line';
import { TAccountTax } from '../types/odoo/account.tax';
import { TAccountTransferModelLine } from '../types/odoo/account.transfer.model.line';
import { TAccountTransferModel } from '../types/odoo/account.transfer.model';
import { TAnalyticMixin } from '../types/odoo/analytic.mixin';
import { TAnalyticPlanFieldsMixin } from '../types/odoo/analytic.plan.fields.mixin';
import { TApprovalApprover } from '../types/odoo/approval.approver';
import { TApprovalCategoryApprover } from '../types/odoo/approval.category.approver';
import { TApprovalCategory } from '../types/odoo/approval.category';
import { TApprovalProductLine } from '../types/odoo/approval.product.line';
import { TApprovalRequest } from '../types/odoo/approval.request';
import { TAuth_totpDevice } from '../types/odoo/auth_totp.device';
import { TAuth_totpWizard } from '../types/odoo/auth_totp.wizard';
import { TAvatarMixin } from '../types/odoo/avatar.mixin';
import { TAvataxConnectionTestResult } from '../types/odoo/avatax.connection.test.result';
import { TAvataxExemption } from '../types/odoo/avatax.exemption';
import { TAvataxValidateAddress } from '../types/odoo/avatax.validate.address';
import { TBankRecWidgetLine } from '../types/odoo/bank.rec.widget.line';
import { TBankRecWidget } from '../types/odoo/bank.rec.widget';
import { TBarcodeNomenclature } from '../types/odoo/barcode.nomenclature';
import { TBarcodeRule } from '../types/odoo/barcode.rule';
import { TBarcodesBarcode_events_mixin } from '../types/odoo/barcodes.barcode_events_mixin';
import { TBaseAutomation } from '../types/odoo/base.automation';
import { TBaseDocumentLayout } from '../types/odoo/base.document.layout';
import { TBaseEnableProfilingWizard } from '../types/odoo/base.enable.profiling.wizard';
import { TBaseImportModule } from '../types/odoo/base.import.module';
import { TBaseLanguageExport } from '../types/odoo/base.language.export';
import { TBaseLanguageImport } from '../types/odoo/base.language.import';
import { TBaseLanguageInstall } from '../types/odoo/base.language.install';
import { TBaseModuleInstallRequest } from '../types/odoo/base.module.install.request';
import { TBaseModuleInstallReview } from '../types/odoo/base.module.install.review';
import { TBaseModuleUninstall } from '../types/odoo/base.module.uninstall';
import { TBaseModuleUpdate } from '../types/odoo/base.module.update';
import { TBaseModuleUpgrade } from '../types/odoo/base.module.upgrade';
import { TBasePartnerMergeAutomaticWizard } from '../types/odoo/base.partner.merge.automatic.wizard';
import { TBasePartnerMergeLine } from '../types/odoo/base.partner.merge.line';
import { TBase } from '../types/odoo/base';
import { TBase_importImport } from '../types/odoo/base_import.import';
import { TBase_importMapping } from '../types/odoo/base_import.mapping';
import { TBillToPoWizard } from '../types/odoo/bill.to.po.wizard';
import { TBusBus } from '../types/odoo/bus.bus';
import { TBusListenerMixin } from '../types/odoo/bus.listener.mixin';
import { TBusPresence } from '../types/odoo/bus.presence';
import { TChangePasswordOwn } from '../types/odoo/change.password.own';
import { TChangePasswordUser } from '../types/odoo/change.password.user';
import { TChangePasswordWizard } from '../types/odoo/change.password.wizard';
import { TChangeProductionQty } from '../types/odoo/change.production.qty';
import { TChooseDeliveryCarrier } from '../types/odoo/choose.delivery.carrier';
import { TChooseDeliveryPackage } from '../types/odoo/choose.delivery.package';
import { TConfirmStockSms } from '../types/odoo/confirm.stock.sms';
import { TCrmTag } from '../types/odoo/crm.tag';
import { TCrmTeamMember } from '../types/odoo/crm.team.member';
import { TCrmTeam } from '../types/odoo/crm.team';
import { TDecimalPrecision } from '../types/odoo/decimal.precision';
import { TDeliveryCarrier } from '../types/odoo/delivery.carrier';
import { TDeliveryPriceRule } from '../types/odoo/delivery.price.rule';
import { TDeliveryZipPrefix } from '../types/odoo/delivery.zip.prefix';
import { TDigestDigest } from '../types/odoo/digest.digest';
import { TDigestTip } from '../types/odoo/digest.tip';
import { TDiscussChannelMember } from '../types/odoo/discuss.channel.member';
import { TDiscussChannelRtcSession } from '../types/odoo/discuss.channel.rtc.session';
import { TDiscussChannel } from '../types/odoo/discuss.channel';
import { TDiscussGifFavorite } from '../types/odoo/discuss.gif.favorite';
import { TDiscussVoiceMetadata } from '../types/odoo/discuss.voice.metadata';
import { TExtractMixin } from '../types/odoo/extract.mixin';
import { TFetchmailServer } from '../types/odoo/fetchmail.server';
import { TFormatAddressMixin } from '../types/odoo/format.address.mixin';
import { TFormatVatLabelMixin } from '../types/odoo/format.vat.label.mixin';
import { TGoogleGmailMixin } from '../types/odoo/google.gmail.mixin';
import { THrContractType } from '../types/odoo/hr.contract.type';
import { THrDepartment } from '../types/odoo/hr.department';
import { THrDepartureReason } from '../types/odoo/hr.departure.reason';
import { THrDepartureWizard } from '../types/odoo/hr.departure.wizard';
import { THrEmployeeBase } from '../types/odoo/hr.employee.base';
import { THrEmployeeCategory } from '../types/odoo/hr.employee.category';
import { THrEmployeeCvWizard } from '../types/odoo/hr.employee.cv.wizard';
import { THrEmployeePublic } from '../types/odoo/hr.employee.public';
import { THrEmployeeSkillLog } from '../types/odoo/hr.employee.skill.log';
import { THrEmployeeSkillReport } from '../types/odoo/hr.employee.skill.report';
import { THrEmployeeSkill } from '../types/odoo/hr.employee.skill';
import { THrEmployee } from '../types/odoo/hr.employee';
import { THrJob } from '../types/odoo/hr.job';
import { THrManagerDepartmentReport } from '../types/odoo/hr.manager.department.report';
import { THrResumeLine } from '../types/odoo/hr.resume.line';
import { THrResumeLineType } from '../types/odoo/hr.resume.line.type';
import { THrSkillLevel } from '../types/odoo/hr.skill.level';
import { THrSkill } from '../types/odoo/hr.skill';
import { THrSkillType } from '../types/odoo/hr.skill.type';
import { THrWorkLocation } from '../types/odoo/hr.work.location';
import { THtmlFieldHistoryMixin } from '../types/odoo/html.field.history.mixin';
import { TIapAccount } from '../types/odoo/iap.account';
import { TIapAutocompleteApi } from '../types/odoo/iap.autocomplete.api';
import { TIapEnrichApi } from '../types/odoo/iap.enrich.api';
import { TIapService } from '../types/odoo/iap.service';
import { TImageMixin } from '../types/odoo/image.mixin';
import { TIrActionsAct_url } from '../types/odoo/ir.actions.act_url';
import { TIrActionsAct_window } from '../types/odoo/ir.actions.act_window';
import { TIrActionsAct_windowView } from '../types/odoo/ir.actions.act_window.view';
import { TIrActionsAct_window_close } from '../types/odoo/ir.actions.act_window_close';
import { TIrActionsActions } from '../types/odoo/ir.actions.actions';
import { TIrActionsClient } from '../types/odoo/ir.actions.client';
import { TIrActionsReport } from '../types/odoo/ir.actions.report';
import { TIrActionsServer } from '../types/odoo/ir.actions.server';
import { TIrActionsTodo } from '../types/odoo/ir.actions.todo';
import { TIrAsset } from '../types/odoo/ir.asset';
import { TIrAttachment } from '../types/odoo/ir.attachment';
import { TIrAutovacuum } from '../types/odoo/ir.autovacuum';
import { TIrBinary } from '../types/odoo/ir.binary';
import { TIrConfig_parameter } from '../types/odoo/ir.config_parameter';
import { TIrCronProgress } from '../types/odoo/ir.cron.progress';
import { TIrCronTrigger } from '../types/odoo/ir.cron.trigger';
import { TIrCron } from '../types/odoo/ir.cron';
import { TIrDefault } from '../types/odoo/ir.default';
import { TIrDemo } from '../types/odoo/ir.demo';
import { TIrDemo_failure } from '../types/odoo/ir.demo_failure';
import { TIrDemo_failureWizard } from '../types/odoo/ir.demo_failure.wizard';
import { TIrEmbeddedActions } from '../types/odoo/ir.embedded.actions';
import { TIrExportsLine } from '../types/odoo/ir.exports.line';
import { TIrExports } from '../types/odoo/ir.exports';
import { TIrFieldsConverter } from '../types/odoo/ir.fields.converter';
import { TIrFilters } from '../types/odoo/ir.filters';
import { TIrHttp } from '../types/odoo/ir.http';
import { TIrLogging } from '../types/odoo/ir.logging';
import { TIrMail_server } from '../types/odoo/ir.mail_server';
import { TIrModelAccess } from '../types/odoo/ir.model.access';
import { TIrModelConstraint } from '../types/odoo/ir.model.constraint';
import { TIrModelData } from '../types/odoo/ir.model.data';
import { TIrModelFieldsSelection } from '../types/odoo/ir.model.fields.selection';
import { TIrModelFields } from '../types/odoo/ir.model.fields';
import { TIrModelInherit } from '../types/odoo/ir.model.inherit';
import { TIrModelRelation } from '../types/odoo/ir.model.relation';
import { TIrModel } from '../types/odoo/ir.model';
import { TIrModuleCategory } from '../types/odoo/ir.module.category';
import { TIrModuleModuleDependency } from '../types/odoo/ir.module.module.dependency';
import { TIrModuleModuleExclusion } from '../types/odoo/ir.module.module.exclusion';
import { TIrModuleModule } from '../types/odoo/ir.module.module';
import { TIrProfile } from '../types/odoo/ir.profile';
import { TIrQwebFieldBarcode } from '../types/odoo/ir.qweb.field.barcode';
import { TIrQwebFieldContact } from '../types/odoo/ir.qweb.field.contact';
import { TIrQwebFieldDate } from '../types/odoo/ir.qweb.field.date';
import { TIrQwebFieldDatetime } from '../types/odoo/ir.qweb.field.datetime';
import { TIrQwebFieldDuration } from '../types/odoo/ir.qweb.field.duration';
import { TIrQwebFieldFloat } from '../types/odoo/ir.qweb.field.float';
import { TIrQwebFieldFloat_time } from '../types/odoo/ir.qweb.field.float_time';
import { TIrQwebFieldHtml } from '../types/odoo/ir.qweb.field.html';
import { TIrQwebFieldImage } from '../types/odoo/ir.qweb.field.image';
import { TIrQwebFieldImage_url } from '../types/odoo/ir.qweb.field.image_url';
import { TIrQwebFieldInteger } from '../types/odoo/ir.qweb.field.integer';
import { TIrQwebFieldMany2many } from '../types/odoo/ir.qweb.field.many2many';
import { TIrQwebFieldMany2one } from '../types/odoo/ir.qweb.field.many2one';
import { TIrQwebFieldMonetary } from '../types/odoo/ir.qweb.field.monetary';
import { TIrQwebFieldOne2many } from '../types/odoo/ir.qweb.field.one2many';
import { TIrQwebFieldQweb } from '../types/odoo/ir.qweb.field.qweb';
import { TIrQwebFieldRelative } from '../types/odoo/ir.qweb.field.relative';
import { TIrQwebFieldSelection } from '../types/odoo/ir.qweb.field.selection';
import { TIrQwebFieldText } from '../types/odoo/ir.qweb.field.text';
import { TIrQwebFieldTime } from '../types/odoo/ir.qweb.field.time';
import { TIrQwebField } from '../types/odoo/ir.qweb.field';
import { TIrQweb } from '../types/odoo/ir.qweb';
import { TIrRule } from '../types/odoo/ir.rule';
import { TIrSequenceDate_range } from '../types/odoo/ir.sequence.date_range';
import { TIrSequence } from '../types/odoo/ir.sequence';
import { TIrUiMenu } from '../types/odoo/ir.ui.menu';
import { TIrUiViewCustom } from '../types/odoo/ir.ui.view.custom';
import { TIrUiView } from '../types/odoo/ir.ui.view';
import { TIrWebsocket } from '../types/odoo/ir.websocket';
import { TKpiProvider } from '../types/odoo/kpi.provider';
import { TL10n_it_delivery_noteDelivery_mixin } from '../types/odoo/l10n_it_delivery_note.delivery_mixin';
import { TL10n_us1099_box } from '../types/odoo/l10n_us.1099_box';
import { TL10n_us_1099Wizard } from '../types/odoo/l10n_us_1099.wizard';
import { TLotLabelLayout } from '../types/odoo/lot.label.layout';
import { TMailActivityMixin } from '../types/odoo/mail.activity.mixin';
import { TMailActivityPlanTemplate } from '../types/odoo/mail.activity.plan.template';
import { TMailActivityPlan } from '../types/odoo/mail.activity.plan';
import { TMailActivitySchedule } from '../types/odoo/mail.activity.schedule';
import { TMailActivity } from '../types/odoo/mail.activity';
import { TMailActivityType } from '../types/odoo/mail.activity.type';
import { TMailAliasDomain } from '../types/odoo/mail.alias.domain';
import { TMailAliasMixinOptional } from '../types/odoo/mail.alias.mixin.optional';
import { TMailAliasMixin } from '../types/odoo/mail.alias.mixin';
import { TMailAlias } from '../types/odoo/mail.alias';
import { TMailBlacklistRemove } from '../types/odoo/mail.blacklist.remove';
import { TMailBlacklist } from '../types/odoo/mail.blacklist';
import { TMailBot } from '../types/odoo/mail.bot';
import { TMailCannedResponse } from '../types/odoo/mail.canned.response';
import { TMailComposeMessage } from '../types/odoo/mail.compose.message';
import { TMailComposerMixin } from '../types/odoo/mail.composer.mixin';
import { TMailFollowers } from '../types/odoo/mail.followers';
import { TMailGatewayAllowed } from '../types/odoo/mail.gateway.allowed';
import { TMailGuest } from '../types/odoo/mail.guest';
import { TMailIceServer } from '../types/odoo/mail.ice.server';
import { TMailLinkPreview } from '../types/odoo/mail.link.preview';
import { TMailMail } from '../types/odoo/mail.mail';
import { TMailMessageReaction } from '../types/odoo/mail.message.reaction';
import { TMailMessageSchedule } from '../types/odoo/mail.message.schedule';
import { TMailMessageSubtype } from '../types/odoo/mail.message.subtype';
import { TMailMessageTranslation } from '../types/odoo/mail.message.translation';
import { TMailMessage } from '../types/odoo/mail.message';
import { TMailNotification } from '../types/odoo/mail.notification';
import { TMailPushDevice } from '../types/odoo/mail.push.device';
import { TMailPush } from '../types/odoo/mail.push';
import { TMailRenderMixin } from '../types/odoo/mail.render.mixin';
import { TMailResendMessage } from '../types/odoo/mail.resend.message';
import { TMailResendPartner } from '../types/odoo/mail.resend.partner';
import { TMailScheduledMessage } from '../types/odoo/mail.scheduled.message';
import { TMailTemplatePreview } from '../types/odoo/mail.template.preview';
import { TMailTemplateReset } from '../types/odoo/mail.template.reset';
import { TMailTemplate } from '../types/odoo/mail.template';
import { TMailThreadBlacklist } from '../types/odoo/mail.thread.blacklist';
import { TMailThreadCc } from '../types/odoo/mail.thread.cc';
import { TMailThreadMainAttachment } from '../types/odoo/mail.thread.main.attachment';
import { TMailThreadPhone } from '../types/odoo/mail.thread.phone';
import { TMailThread } from '../types/odoo/mail.thread';
import { TMailTrackingDurationMixin } from '../types/odoo/mail.tracking.duration.mixin';
import { TMailTrackingValue } from '../types/odoo/mail.tracking.value';
import { TMailWizardInvite } from '../types/odoo/mail.wizard.invite';
import { TMrpAccountWipAccountingLine } from '../types/odoo/mrp.account.wip.accounting.line';
import { TMrpAccountWipAccounting } from '../types/odoo/mrp.account.wip.accounting';
import { TMrpBatchProduce } from '../types/odoo/mrp.batch.produce';
import { TMrpBomByproduct } from '../types/odoo/mrp.bom.byproduct';
import { TMrpBomLine } from '../types/odoo/mrp.bom.line';
import { TMrpBom } from '../types/odoo/mrp.bom';
import { TMrpConsumptionWarningLine } from '../types/odoo/mrp.consumption.warning.line';
import { TMrpConsumptionWarning } from '../types/odoo/mrp.consumption.warning';
import { TMrpProductionBackorderLine } from '../types/odoo/mrp.production.backorder.line';
import { TMrpProductionBackorder } from '../types/odoo/mrp.production.backorder';
import { TMrpProductionSplitLine } from '../types/odoo/mrp.production.split.line';
import { TMrpProductionSplitMulti } from '../types/odoo/mrp.production.split.multi';
import { TMrpProductionSplit } from '../types/odoo/mrp.production.split';
import { TMrpProduction } from '../types/odoo/mrp.production';
import { TMrpReport } from '../types/odoo/mrp.report';
import { TMrpRoutingWorkcenter } from '../types/odoo/mrp.routing.workcenter';
import { TMrpUnbuild } from '../types/odoo/mrp.unbuild';
import { TMrpWorkcenterCapacity } from '../types/odoo/mrp.workcenter.capacity';
import { TMrpWorkcenterProductivityLoss } from '../types/odoo/mrp.workcenter.productivity.loss';
import { TMrpWorkcenterProductivityLossType } from '../types/odoo/mrp.workcenter.productivity.loss.type';
import { TMrpWorkcenterProductivity } from '../types/odoo/mrp.workcenter.productivity';
import { TMrpWorkcenterTag } from '../types/odoo/mrp.workcenter.tag';
import { TMrpWorkcenter } from '../types/odoo/mrp.workcenter';
import { TMrpWorkorder } from '../types/odoo/mrp.workorder';
import { TMrp_productionAdditionalWorkorder } from '../types/odoo/mrp_production.additional.workorder';
import { TOnboardingOnboardingStep } from '../types/odoo/onboarding.onboarding.step';
import { TOnboardingOnboarding } from '../types/odoo/onboarding.onboarding';
import { TOnboardingProgressStep } from '../types/odoo/onboarding.progress.step';
import { TOnboardingProgress } from '../types/odoo/onboarding.progress';
import { TPaymentCaptureWizard } from '../types/odoo/payment.capture.wizard';
import { TPaymentLinkWizard } from '../types/odoo/payment.link.wizard';
import { TPaymentMethod } from '../types/odoo/payment.method';
import { TPaymentProviderOnboardingWizard } from '../types/odoo/payment.provider.onboarding.wizard';
import { TPaymentProvider } from '../types/odoo/payment.provider';
import { TPaymentRefundWizard } from '../types/odoo/payment.refund.wizard';
import { TPaymentToken } from '../types/odoo/payment.token';
import { TPaymentTransaction } from '../types/odoo/payment.transaction';
import { TPhoneBlacklistRemove } from '../types/odoo/phone.blacklist.remove';
import { TPhoneBlacklist } from '../types/odoo/phone.blacklist';
import { TPickingLabelType } from '../types/odoo/picking.label.type';
import { TPortalMixin } from '../types/odoo/portal.mixin';
import { TPortalShare } from '../types/odoo/portal.share';
import { TPortalWizard } from '../types/odoo/portal.wizard';
import { TPortalWizardUser } from '../types/odoo/portal.wizard.user';
import { TPrintPrenumberedChecks } from '../types/odoo/print.prenumbered.checks';
import { TPrivacyLog } from '../types/odoo/privacy.log';
import { TPrivacyLookupWizardLine } from '../types/odoo/privacy.lookup.wizard.line';
import { TPrivacyLookupWizard } from '../types/odoo/privacy.lookup.wizard';
import { TProcurementGroup } from '../types/odoo/procurement.group';
import { TProductAttributeCustomValue } from '../types/odoo/product.attribute.custom.value';
import { TProductAttribute } from '../types/odoo/product.attribute';
import { TProductAttributeValue } from '../types/odoo/product.attribute.value';
import { TProductAvataxCategory } from '../types/odoo/product.avatax.category';
import { TProductCatalogMixin } from '../types/odoo/product.catalog.mixin';
import { TProductCategory } from '../types/odoo/product.category';
import { TProductComboItem } from '../types/odoo/product.combo.item';
import { TProductCombo } from '../types/odoo/product.combo';
import { TProductDocument } from '../types/odoo/product.document';
import { TProductLabelLayout } from '../types/odoo/product.label.layout';
import { TProductPackaging } from '../types/odoo/product.packaging';
import { TProductPricelistItem } from '../types/odoo/product.pricelist.item';
import { TProductPricelist } from '../types/odoo/product.pricelist';
import { TProductProduct } from '../types/odoo/product.product';
import { TProductRemoval } from '../types/odoo/product.removal';
import { TProductReplenish } from '../types/odoo/product.replenish';
import { TProductSupplierinfo } from '../types/odoo/product.supplierinfo';
import { TProductTag } from '../types/odoo/product.tag';
import { TProductTemplateAttributeExclusion } from '../types/odoo/product.template.attribute.exclusion';
import { TProductTemplateAttributeLine } from '../types/odoo/product.template.attribute.line';
import { TProductTemplateAttributeValue } from '../types/odoo/product.template.attribute.value';
import { TProductTemplate } from '../types/odoo/product.template';
import { TProposeChange } from '../types/odoo/propose.change';
import { TPublisher_warrantyContract } from '../types/odoo/publisher_warranty.contract';
import { TPurchaseBillLineMatch } from '../types/odoo/purchase.bill.line.match';
import { TPurchaseBillUnion } from '../types/odoo/purchase.bill.union';
import { TPurchaseEdiXmlUbl_bis3 } from '../types/odoo/purchase.edi.xml.ubl_bis3';
import { TPurchaseOrderLine } from '../types/odoo/purchase.order.line';
import { TPurchaseOrder } from '../types/odoo/purchase.order';
import { TPurchaseReport } from '../types/odoo/purchase.report';
import { TQualityAlertStage } from '../types/odoo/quality.alert.stage';
import { TQualityAlertTeam } from '../types/odoo/quality.alert.team';
import { TQualityAlert } from '../types/odoo/quality.alert';
import { TQualityCheck } from '../types/odoo/quality.check';
import { TQualityPointTest_type } from '../types/odoo/quality.point.test_type';
import { TQualityPoint } from '../types/odoo/quality.point';
import { TQualityReason } from '../types/odoo/quality.reason';
import { TQualityTag } from '../types/odoo/quality.tag';
import { TQuotationDocument } from '../types/odoo/quotation.document';
import { TReportAccountReport_hash_integrity } from '../types/odoo/report.account.report_hash_integrity';
import { TReportAccountReport_invoice } from '../types/odoo/report.account.report_invoice';
import { TReportAccountReport_invoice_with_payments } from '../types/odoo/report.account.report_invoice_with_payments';
import { TReportAccount_batch_paymentPrint_batch_payment } from '../types/odoo/report.account_batch_payment.print_batch_payment';
import { TReportBaseReport_irmodulereference } from '../types/odoo/report.base.report_irmodulereference';
import { TReportHr_skillsReport_employee_cv } from '../types/odoo/report.hr_skills.report_employee_cv';
import { TReportLayout } from '../types/odoo/report.layout';
import { TReportMrpReport_bom_structure } from '../types/odoo/report.mrp.report_bom_structure';
import { TReportMrpReport_mo_overview } from '../types/odoo/report.mrp.report_mo_overview';
import { TReportMrp_account_enterpriseMrp_cost_structure } from '../types/odoo/report.mrp_account_enterprise.mrp_cost_structure';
import { TReportMrp_account_enterpriseProduct_template_cost_structure } from '../types/odoo/report.mrp_account_enterprise.product_template_cost_structure';
import { TReportPaperformat } from '../types/odoo/report.paperformat';
import { TReportProductReport_pricelist } from '../types/odoo/report.product.report_pricelist';
import { TReportProductReport_producttemplatelabel2x7 } from '../types/odoo/report.product.report_producttemplatelabel2x7';
import { TReportProductReport_producttemplatelabel4x12 } from '../types/odoo/report.product.report_producttemplatelabel4x12';
import { TReportProductReport_producttemplatelabel4x12noprice } from '../types/odoo/report.product.report_producttemplatelabel4x12noprice';
import { TReportProductReport_producttemplatelabel4x7 } from '../types/odoo/report.product.report_producttemplatelabel4x7';
import { TReportProductReport_producttemplatelabel_dymo } from '../types/odoo/report.product.report_producttemplatelabel_dymo';
import { TReportStockLabel_lot_template_view } from '../types/odoo/report.stock.label_lot_template_view';
import { TReportStockLabel_product_product_view } from '../types/odoo/report.stock.label_product_product_view';
import { TReportStockQuantity } from '../types/odoo/report.stock.quantity';
import { TReportStockReport_reception } from '../types/odoo/report.stock.report_reception';
import { TReportStockReport_stock_rule } from '../types/odoo/report.stock.report_stock_rule';
import { TResBank } from '../types/odoo/res.bank';
import { TResCompany } from '../types/odoo/res.company';
import { TResConfigSettings } from '../types/odoo/res.config.settings';
import { TResConfig } from '../types/odoo/res.config';
import { TResCountryGroup } from '../types/odoo/res.country.group';
import { TResCountryState } from '../types/odoo/res.country.state';
import { TResCountry } from '../types/odoo/res.country';
import { TResCurrencyRate } from '../types/odoo/res.currency.rate';
import { TResCurrency } from '../types/odoo/res.currency';
import { TResDeviceLog } from '../types/odoo/res.device.log';
import { TResDevice } from '../types/odoo/res.device';
import { TResGroups } from '../types/odoo/res.groups';
import { TResLang } from '../types/odoo/res.lang';
import { TResPartnerAutocompleteSync } from '../types/odoo/res.partner.autocomplete.sync';
import { TResPartnerBank } from '../types/odoo/res.partner.bank';
import { TResPartnerCategory } from '../types/odoo/res.partner.category';
import { TResPartnerIndustry } from '../types/odoo/res.partner.industry';
import { TResPartnerTitle } from '../types/odoo/res.partner.title';
import { TResPartner } from '../types/odoo/res.partner';
import { TResUsersApikeysDescription } from '../types/odoo/res.users.apikeys.description';
import { TResUsersApikeysShow } from '../types/odoo/res.users.apikeys.show';
import { TResUsersApikeys } from '../types/odoo/res.users.apikeys';
import { TResUsersDeletion } from '../types/odoo/res.users.deletion';
import { TResUsersIdentitycheck } from '../types/odoo/res.users.identitycheck';
import { TResUsersLog } from '../types/odoo/res.users.log';
import { TResUsersSettings } from '../types/odoo/res.users.settings';
import { TResUsersSettingsVolumes } from '../types/odoo/res.users.settings.volumes';
import { TResUsers } from '../types/odoo/res.users';
import { TResetViewArchWizard } from '../types/odoo/reset.view.arch.wizard';
import { TResourceCalendarAttendance } from '../types/odoo/resource.calendar.attendance';
import { TResourceCalendarLeaves } from '../types/odoo/resource.calendar.leaves';
import { TResourceCalendar } from '../types/odoo/resource.calendar';
import { TResourceMixin } from '../types/odoo/resource.mixin';
import { TResourceResource } from '../types/odoo/resource.resource';
import { TSaleAdvancePaymentInv } from '../types/odoo/sale.advance.payment.inv';
import { TSaleEdiCommon } from '../types/odoo/sale.edi.common';
import { TSaleEdiXmlUbl_bis3 } from '../types/odoo/sale.edi.xml.ubl_bis3';
import { TSaleMassCancelOrders } from '../types/odoo/sale.mass.cancel.orders';
import { TSaleOrderCancel } from '../types/odoo/sale.order.cancel';
import { TSaleOrderDiscount } from '../types/odoo/sale.order.discount';
import { TSaleOrderLine } from '../types/odoo/sale.order.line';
import { TSaleOrderOption } from '../types/odoo/sale.order.option';
import { TSaleOrderSpreadsheet } from '../types/odoo/sale.order.spreadsheet';
import { TSaleOrderTemplateLine } from '../types/odoo/sale.order.template.line';
import { TSaleOrderTemplateOption } from '../types/odoo/sale.order.template.option';
import { TSaleOrderTemplate } from '../types/odoo/sale.order.template';
import { TSaleOrder } from '../types/odoo/sale.order';
import { TSalePaymentProviderOnboardingWizard } from '../types/odoo/sale.payment.provider.onboarding.wizard';
import { TSalePdfFormField } from '../types/odoo/sale.pdf.form.field';
import { TSaleReport } from '../types/odoo/sale.report';
import { TSequenceMixin } from '../types/odoo/sequence.mixin';
import { TShippingInformationUpdaterMixin } from '../types/odoo/shipping.information.updater.mixin';
import { TSmsAccountCode } from '../types/odoo/sms.account.code';
import { TSmsAccountPhone } from '../types/odoo/sms.account.phone';
import { TSmsAccountSender } from '../types/odoo/sms.account.sender';
import { TSmsComposer } from '../types/odoo/sms.composer';
import { TSmsResendRecipient } from '../types/odoo/sms.resend.recipient';
import { TSmsResend } from '../types/odoo/sms.resend';
import { TSmsSms } from '../types/odoo/sms.sms';
import { TSmsTemplatePreview } from '../types/odoo/sms.template.preview';
import { TSmsTemplateReset } from '../types/odoo/sms.template.reset';
import { TSmsTemplate } from '../types/odoo/sms.template';
import { TSmsTracker } from '../types/odoo/sms.tracker';
import { TSnailmailLetterFormatError } from '../types/odoo/snailmail.letter.format.error';
import { TSnailmailLetterMissingRequiredFields } from '../types/odoo/snailmail.letter.missing.required.fields';
import { TSnailmailLetter } from '../types/odoo/snailmail.letter';
import { TSpreadsheetCellThread } from '../types/odoo/spreadsheet.cell.thread';
import { TSpreadsheetDashboardGroup } from '../types/odoo/spreadsheet.dashboard.group';
import { TSpreadsheetDashboardShare } from '../types/odoo/spreadsheet.dashboard.share';
import { TSpreadsheetDashboard } from '../types/odoo/spreadsheet.dashboard';
import { TSpreadsheetMixin } from '../types/odoo/spreadsheet.mixin';
import { TSpreadsheetRevision } from '../types/odoo/spreadsheet.revision';
import { TStockBackorderConfirmationLine } from '../types/odoo/stock.backorder.confirmation.line';
import { TStockBackorderConfirmation } from '../types/odoo/stock.backorder.confirmation';
import { TStockChangeProductQty } from '../types/odoo/stock.change.product.qty';
import { TStockDeliveryNoteBaseWizard } from '../types/odoo/stock.delivery.note.base.wizard';
import { TStockDeliveryNoteConfirmWizard } from '../types/odoo/stock.delivery.note.confirm.wizard';
import { TStockDeliveryNoteCreateWizard } from '../types/odoo/stock.delivery.note.create.wizard';
import { TStockDeliveryNoteInvoiceWizard } from '../types/odoo/stock.delivery.note.invoice.wizard';
import { TStockDeliveryNoteLine } from '../types/odoo/stock.delivery.note.line';
import { TStockDeliveryNoteSelectWizard } from '../types/odoo/stock.delivery.note.select.wizard';
import { TStockDeliveryNote } from '../types/odoo/stock.delivery.note';
import { TStockDeliveryNoteType } from '../types/odoo/stock.delivery.note.type';
import { TStockForecasted_product_product } from '../types/odoo/stock.forecasted_product_product';
import { TStockForecasted_product_template } from '../types/odoo/stock.forecasted_product_template';
import { TStockInventoryAdjustmentName } from '../types/odoo/stock.inventory.adjustment.name';
import { TStockInventoryConflict } from '../types/odoo/stock.inventory.conflict';
import { TStockInventoryWarning } from '../types/odoo/stock.inventory.warning';
import { TStockLocation } from '../types/odoo/stock.location';
import { TStockLotReport } from '../types/odoo/stock.lot.report';
import { TStockLot } from '../types/odoo/stock.lot';
import { TStockMoveLine } from '../types/odoo/stock.move.line';
import { TStockMove } from '../types/odoo/stock.move';
import { TStockOrderpointSnooze } from '../types/odoo/stock.orderpoint.snooze';
import { TStockPackageDestination } from '../types/odoo/stock.package.destination';
import { TStockPackageType } from '../types/odoo/stock.package.type';
import { TStockPackage_level } from '../types/odoo/stock.package_level';
import { TStockPickingCheckerMixin } from '../types/odoo/stock.picking.checker.mixin';
import { TStockPickingGoodsAppearance } from '../types/odoo/stock.picking.goods.appearance';
import { TStockPickingTransportCondition } from '../types/odoo/stock.picking.transport.condition';
import { TStockPickingTransportMethod } from '../types/odoo/stock.picking.transport.method';
import { TStockPickingTransportReason } from '../types/odoo/stock.picking.transport.reason';
import { TStockPicking } from '../types/odoo/stock.picking';
import { TStockPickingType } from '../types/odoo/stock.picking.type';
import { TStockPutawayRule } from '../types/odoo/stock.putaway.rule';
import { TStockQuantPackage } from '../types/odoo/stock.quant.package';
import { TStockQuantRelocate } from '../types/odoo/stock.quant.relocate';
import { TStockQuant } from '../types/odoo/stock.quant';
import { TStockQuantityHistory } from '../types/odoo/stock.quantity.history';
import { TStockReplenishMixin } from '../types/odoo/stock.replenish.mixin';
import { TStockReplenishmentInfo } from '../types/odoo/stock.replenishment.info';
import { TStockReplenishmentOption } from '../types/odoo/stock.replenishment.option';
import { TStockReport } from '../types/odoo/stock.report';
import { TStockRequestCount } from '../types/odoo/stock.request.count';
import { TStockReturnPickingLine } from '../types/odoo/stock.return.picking.line';
import { TStockReturnPicking } from '../types/odoo/stock.return.picking';
import { TStockRoute } from '../types/odoo/stock.route';
import { TStockRule } from '../types/odoo/stock.rule';
import { TStockRulesReport } from '../types/odoo/stock.rules.report';
import { TStockScrapReasonTag } from '../types/odoo/stock.scrap.reason.tag';
import { TStockScrap } from '../types/odoo/stock.scrap';
import { TStockStorageCategoryCapacity } from '../types/odoo/stock.storage.category.capacity';
import { TStockStorageCategory } from '../types/odoo/stock.storage.category';
import { TStockTraceabilityReport } from '../types/odoo/stock.traceability.report';
import { TStockTrackConfirmation } from '../types/odoo/stock.track.confirmation';
import { TStockTrackLine } from '../types/odoo/stock.track.line';
import { TStockValuationLayerRevaluation } from '../types/odoo/stock.valuation.layer.revaluation';
import { TStockValuationLayer } from '../types/odoo/stock.valuation.layer';
import { TStockWarehouseOrderpoint } from '../types/odoo/stock.warehouse.orderpoint';
import { TStockWarehouse } from '../types/odoo/stock.warehouse';
import { TStockWarnInsufficientQtyScrap } from '../types/odoo/stock.warn.insufficient.qty.scrap';
import { TStockWarnInsufficientQty } from '../types/odoo/stock.warn.insufficient.qty';
import { TStockWarnInsufficientQtyUnbuild } from '../types/odoo/stock.warn.insufficient.qty.unbuild';
import { TStock_barcodeCancelOperation } from '../types/odoo/stock_barcode.cancel.operation';
import { TStudioApprovalEntry } from '../types/odoo/studio.approval.entry';
import { TStudioApprovalRequest } from '../types/odoo/studio.approval.request';
import { TStudioApprovalRuleApprover } from '../types/odoo/studio.approval.rule.approver';
import { TStudioApprovalRuleDelegate } from '../types/odoo/studio.approval.rule.delegate';
import { TStudioApprovalRule } from '../types/odoo/studio.approval.rule';
import { TStudioExportModel } from '../types/odoo/studio.export.model';
import { TStudioExportWizardData } from '../types/odoo/studio.export.wizard.data';
import { TStudioExportWizard } from '../types/odoo/studio.export.wizard';
import { TStudioMixin } from '../types/odoo/studio.mixin';
import { TTemplateResetMixin } from '../types/odoo/template.reset.mixin';
import { TUomCategory } from '../types/odoo/uom.category';
import { TUomUom } from '../types/odoo/uom.uom';
import { TUpdateProductAttributeValue } from '../types/odoo/update.product.attribute.value';
import { TUtmCampaign } from '../types/odoo/utm.campaign';
import { TUtmMedium } from '../types/odoo/utm.medium';
import { TUtmMixin } from '../types/odoo/utm.mixin';
import { TUtmSourceMixin } from '../types/odoo/utm.source.mixin';
import { TUtmSource } from '../types/odoo/utm.source';
import { TUtmStage } from '../types/odoo/utm.stage';
import { TUtmTag } from '../types/odoo/utm.tag';
import { TValidateAccountMove } from '../types/odoo/validate.account.move';
import { TVendorDelayReport } from '../types/odoo/vendor.delay.report';
import { TWeb_editorAssets } from '../types/odoo/web_editor.assets';
import { TWeb_editorConverterTestSub } from '../types/odoo/web_editor.converter.test.sub';
import { TWeb_editorConverterTest } from '../types/odoo/web_editor.converter.test';
import { TWeb_tourTourStep } from '../types/odoo/web_tour.tour.step';
import { TWeb_tourTour } from '../types/odoo/web_tour.tour';
import { TWizardIrModelMenuCreate } from '../types/odoo/wizard.ir.model.menu.create';
export declare class _unknownModel extends BaseOdooModel<T_unknown> {
    protected readonly model = '_unknown';
}
export declare class AccountAccountTagModel extends BaseOdooModel<TAccountAccountTag> {
    protected readonly model = 'account.account.tag';
}
export declare class AccountAccountModel extends BaseOdooModel<TAccountAccount> {
    protected readonly model = 'account.account';
}
export declare class AccountAccruedOrdersWizardModel extends BaseOdooModel<TAccountAccruedOrdersWizard> {
    protected readonly model = 'account.accrued.orders.wizard';
}
export declare class AccountAnalyticAccountModel extends BaseOdooModel<TAccountAnalyticAccount> {
    protected readonly model = 'account.analytic.account';
}
export declare class AccountAnalyticApplicabilityModel extends BaseOdooModel<TAccountAnalyticApplicability> {
    protected readonly model = 'account.analytic.applicability';
}
export declare class AccountAnalyticDistributionModelModel extends BaseOdooModel<TAccountAnalyticDistributionModel> {
    protected readonly model = 'account.analytic.distribution.model';
}
export declare class AccountAnalyticLineModel extends BaseOdooModel<TAccountAnalyticLine> {
    protected readonly model = 'account.analytic.line';
}
export declare class AccountAnalyticPlanModel extends BaseOdooModel<TAccountAnalyticPlan> {
    protected readonly model = 'account.analytic.plan';
}
export declare class AccountAutoReconcileWizardModel extends BaseOdooModel<TAccountAutoReconcileWizard> {
    protected readonly model = 'account.auto.reconcile.wizard';
}
export declare class AccountAutomaticEntryWizardModel extends BaseOdooModel<TAccountAutomaticEntryWizard> {
    protected readonly model = 'account.automatic.entry.wizard';
}
export declare class AccountAutopostBillsWizardModel extends BaseOdooModel<TAccountAutopostBillsWizard> {
    protected readonly model = 'account.autopost.bills.wizard';
}
export declare class AccountAvataxUniqueCodeModel extends BaseOdooModel<TAccountAvataxUniqueCode> {
    protected readonly model = 'account.avatax.unique.code';
}
export declare class AccountBankSelectionModel extends BaseOdooModel<TAccountBankSelection> {
    protected readonly model = 'account.bank.selection';
}
export declare class AccountBankStatementLineTransientModel extends BaseOdooModel<TAccountBankStatementLineTransient> {
    protected readonly model = 'account.bank.statement.line.transient';
}
export declare class AccountBankStatementLineModel extends BaseOdooModel<TAccountBankStatementLine> {
    protected readonly model = 'account.bank.statement.line';
}
export declare class AccountBankStatementModel extends BaseOdooModel<TAccountBankStatement> {
    protected readonly model = 'account.bank.statement';
}
export declare class AccountBatchErrorWizardLineModel extends BaseOdooModel<TAccountBatchErrorWizardLine> {
    protected readonly model = 'account.batch.error.wizard.line';
}
export declare class AccountBatchErrorWizardModel extends BaseOdooModel<TAccountBatchErrorWizard> {
    protected readonly model = 'account.batch.error.wizard';
}
export declare class AccountBatchPaymentRejectionModel extends BaseOdooModel<TAccountBatchPaymentRejection> {
    protected readonly model = 'account.batch.payment.rejection';
}
export declare class AccountBatchPaymentModel extends BaseOdooModel<TAccountBatchPayment> {
    protected readonly model = 'account.batch.payment';
}
export declare class AccountCashRoundingModel extends BaseOdooModel<TAccountCashRounding> {
    protected readonly model = 'account.cash.rounding';
}
export declare class AccountChangeLockDateModel extends BaseOdooModel<TAccountChangeLockDate> {
    protected readonly model = 'account.change.lock.date';
}
export declare class AccountChartTemplateModel extends BaseOdooModel<TAccountChartTemplate> {
    protected readonly model = 'account.chart.template';
}
export declare class AccountCodeMappingModel extends BaseOdooModel<TAccountCodeMapping> {
    protected readonly model = 'account.code.mapping';
}
export declare class AccountDuplicateTransactionWizardModel extends BaseOdooModel<TAccountDuplicateTransactionWizard> {
    protected readonly model = 'account.duplicate.transaction.wizard';
}
export declare class AccountEdiCommonModel extends BaseOdooModel<TAccountEdiCommon> {
    protected readonly model = 'account.edi.common';
}
export declare class AccountEdiXmlCiiModel extends BaseOdooModel<TAccountEdiXmlCii> {
    protected readonly model = 'account.edi.xml.cii';
}
export declare class AccountEdiXmlUbl_20Model extends BaseOdooModel<TAccountEdiXmlUbl_20> {
    protected readonly model = 'account.edi.xml.ubl_20';
}
export declare class AccountEdiXmlUbl_21Model extends BaseOdooModel<TAccountEdiXmlUbl_21> {
    protected readonly model = 'account.edi.xml.ubl_21';
}
export declare class AccountEdiXmlUbl_a_nzModel extends BaseOdooModel<TAccountEdiXmlUbl_a_nz> {
    protected readonly model = 'account.edi.xml.ubl_a_nz';
}
export declare class AccountEdiXmlUbl_bis3Model extends BaseOdooModel<TAccountEdiXmlUbl_bis3> {
    protected readonly model = 'account.edi.xml.ubl_bis3';
}
export declare class AccountEdiXmlUbl_deModel extends BaseOdooModel<TAccountEdiXmlUbl_de> {
    protected readonly model = 'account.edi.xml.ubl_de';
}
export declare class AccountEdiXmlUbl_efffModel extends BaseOdooModel<TAccountEdiXmlUbl_efff> {
    protected readonly model = 'account.edi.xml.ubl_efff';
}
export declare class AccountEdiXmlUbl_nlModel extends BaseOdooModel<TAccountEdiXmlUbl_nl> {
    protected readonly model = 'account.edi.xml.ubl_nl';
}
export declare class AccountEdiXmlUbl_sgModel extends BaseOdooModel<TAccountEdiXmlUbl_sg> {
    protected readonly model = 'account.edi.xml.ubl_sg';
}
export declare class AccountExternalTaxMixinModel extends BaseOdooModel<TAccountExternalTaxMixin> {
    protected readonly model = 'account.external.tax.mixin';
}
export declare class AccountFinancialYearOpModel extends BaseOdooModel<TAccountFinancialYearOp> {
    protected readonly model = 'account.financial.year.op';
}
export declare class AccountFiscalPositionAccountModel extends BaseOdooModel<TAccountFiscalPositionAccount> {
    protected readonly model = 'account.fiscal.position.account';
}
export declare class AccountFiscalPositionTaxModel extends BaseOdooModel<TAccountFiscalPositionTax> {
    protected readonly model = 'account.fiscal.position.tax';
}
export declare class AccountFiscalPositionModel extends BaseOdooModel<TAccountFiscalPosition> {
    protected readonly model = 'account.fiscal.position';
}
export declare class AccountFiscalYearModel extends BaseOdooModel<TAccountFiscalYear> {
    protected readonly model = 'account.fiscal.year';
}
export declare class AccountFullReconcileModel extends BaseOdooModel<TAccountFullReconcile> {
    protected readonly model = 'account.full.reconcile';
}
export declare class AccountGroupModel extends BaseOdooModel<TAccountGroup> {
    protected readonly model = 'account.group';
}
export declare class AccountImportSummaryModel extends BaseOdooModel<TAccountImportSummary> {
    protected readonly model = 'account.import.summary';
}
export declare class AccountIncotermsModel extends BaseOdooModel<TAccountIncoterms> {
    protected readonly model = 'account.incoterms';
}
export declare class AccountInvoiceReportModel extends BaseOdooModel<TAccountInvoiceReport> {
    protected readonly model = 'account.invoice.report';
}
export declare class AccountInvoice_extractWordsModel extends BaseOdooModel<TAccountInvoice_extractWords> {
    protected readonly model = 'account.invoice_extract.words';
}
export declare class AccountJournalGroupModel extends BaseOdooModel<TAccountJournalGroup> {
    protected readonly model = 'account.journal.group';
}
export declare class AccountJournalModel extends BaseOdooModel<TAccountJournal> {
    protected readonly model = 'account.journal';
}
export declare class AccountLock_exceptionModel extends BaseOdooModel<TAccountLock_exception> {
    protected readonly model = 'account.lock_exception';
}
export declare class AccountMergeWizardLineModel extends BaseOdooModel<TAccountMergeWizardLine> {
    protected readonly model = 'account.merge.wizard.line';
}
export declare class AccountMergeWizardModel extends BaseOdooModel<TAccountMergeWizard> {
    protected readonly model = 'account.merge.wizard';
}
export declare class AccountMissingTransactionWizardModel extends BaseOdooModel<TAccountMissingTransactionWizard> {
    protected readonly model = 'account.missing.transaction.wizard';
}
export declare class AccountMoveLineModel extends BaseOdooModel<TAccountMoveLine> {
    protected readonly model = 'account.move.line';
}
export declare class AccountMoveReversalModel extends BaseOdooModel<TAccountMoveReversal> {
    protected readonly model = 'account.move.reversal';
}
export declare class AccountMoveSendBatchWizardModel extends BaseOdooModel<TAccountMoveSendBatchWizard> {
    protected readonly model = 'account.move.send.batch.wizard';
}
export declare class AccountMoveSendModel extends BaseOdooModel<TAccountMoveSend> {
    protected readonly model = 'account.move.send';
}
export declare class AccountMoveSendWizardModel extends BaseOdooModel<TAccountMoveSendWizard> {
    protected readonly model = 'account.move.send.wizard';
}
export declare class AccountMoveModel extends BaseOdooModel<TAccountMove> {
    protected readonly model = 'account.move';
}
export declare class AccountOnlineAccountModel extends BaseOdooModel<TAccountOnlineAccount> {
    protected readonly model = 'account.online.account';
}
export declare class AccountOnlineLinkModel extends BaseOdooModel<TAccountOnlineLink> {
    protected readonly model = 'account.online.link';
}
export declare class AccountPartialReconcileModel extends BaseOdooModel<TAccountPartialReconcile> {
    protected readonly model = 'account.partial.reconcile';
}
export declare class AccountPaymentMethodLineModel extends BaseOdooModel<TAccountPaymentMethodLine> {
    protected readonly model = 'account.payment.method.line';
}
export declare class AccountPaymentMethodModel extends BaseOdooModel<TAccountPaymentMethod> {
    protected readonly model = 'account.payment.method';
}
export declare class AccountPaymentRegisterModel extends BaseOdooModel<TAccountPaymentRegister> {
    protected readonly model = 'account.payment.register';
}
export declare class AccountPaymentTermLineModel extends BaseOdooModel<TAccountPaymentTermLine> {
    protected readonly model = 'account.payment.term.line';
}
export declare class AccountPaymentTermModel extends BaseOdooModel<TAccountPaymentTerm> {
    protected readonly model = 'account.payment.term';
}
export declare class AccountPaymentModel extends BaseOdooModel<TAccountPayment> {
    protected readonly model = 'account.payment';
}
export declare class AccountReconcileModelLineModel extends BaseOdooModel<TAccountReconcileModelLine> {
    protected readonly model = 'account.reconcile.model.line';
}
export declare class AccountReconcileModelPartnerMappingModel extends BaseOdooModel<TAccountReconcileModelPartnerMapping> {
    protected readonly model = 'account.reconcile.model.partner.mapping';
}
export declare class AccountReconcileModelModel extends BaseOdooModel<TAccountReconcileModel> {
    protected readonly model = 'account.reconcile.model';
}
export declare class AccountReconcileWizardModel extends BaseOdooModel<TAccountReconcileWizard> {
    protected readonly model = 'account.reconcile.wizard';
}
export declare class AccountReportColumnModel extends BaseOdooModel<TAccountReportColumn> {
    protected readonly model = 'account.report.column';
}
export declare class AccountReportExpressionModel extends BaseOdooModel<TAccountReportExpression> {
    protected readonly model = 'account.report.expression';
}
export declare class AccountReportExternalValueModel extends BaseOdooModel<TAccountReportExternalValue> {
    protected readonly model = 'account.report.external.value';
}
export declare class AccountReportLineModel extends BaseOdooModel<TAccountReportLine> {
    protected readonly model = 'account.report.line';
}
export declare class AccountReportModel extends BaseOdooModel<TAccountReport> {
    protected readonly model = 'account.report';
}
export declare class AccountResequenceWizardModel extends BaseOdooModel<TAccountResequenceWizard> {
    protected readonly model = 'account.resequence.wizard';
}
export declare class AccountRootModel extends BaseOdooModel<TAccountRoot> {
    protected readonly model = 'account.root';
}
export declare class AccountSecureEntriesWizardModel extends BaseOdooModel<TAccountSecureEntriesWizard> {
    protected readonly model = 'account.secure.entries.wizard';
}
export declare class AccountSetupBankManualConfigModel extends BaseOdooModel<TAccountSetupBankManualConfig> {
    protected readonly model = 'account.setup.bank.manual.config';
}
export declare class AccountTaxGroupModel extends BaseOdooModel<TAccountTaxGroup> {
    protected readonly model = 'account.tax.group';
}
export declare class AccountTaxRepartitionLineModel extends BaseOdooModel<TAccountTaxRepartitionLine> {
    protected readonly model = 'account.tax.repartition.line';
}
export declare class AccountTaxModel extends BaseOdooModel<TAccountTax> {
    protected readonly model = 'account.tax';
}
export declare class AccountTransferModelLineModel extends BaseOdooModel<TAccountTransferModelLine> {
    protected readonly model = 'account.transfer.model.line';
}
export declare class AccountTransferModelModel extends BaseOdooModel<TAccountTransferModel> {
    protected readonly model = 'account.transfer.model';
}
export declare class AnalyticMixinModel extends BaseOdooModel<TAnalyticMixin> {
    protected readonly model = 'analytic.mixin';
}
export declare class AnalyticPlanFieldsMixinModel extends BaseOdooModel<TAnalyticPlanFieldsMixin> {
    protected readonly model = 'analytic.plan.fields.mixin';
}
export declare class ApprovalApproverModel extends BaseOdooModel<TApprovalApprover> {
    protected readonly model = 'approval.approver';
}
export declare class ApprovalCategoryApproverModel extends BaseOdooModel<TApprovalCategoryApprover> {
    protected readonly model = 'approval.category.approver';
}
export declare class ApprovalCategoryModel extends BaseOdooModel<TApprovalCategory> {
    protected readonly model = 'approval.category';
}
export declare class ApprovalProductLineModel extends BaseOdooModel<TApprovalProductLine> {
    protected readonly model = 'approval.product.line';
}
export declare class ApprovalRequestModel extends BaseOdooModel<TApprovalRequest> {
    protected readonly model = 'approval.request';
}
export declare class Auth_totpDeviceModel extends BaseOdooModel<TAuth_totpDevice> {
    protected readonly model = 'auth_totp.device';
}
export declare class Auth_totpWizardModel extends BaseOdooModel<TAuth_totpWizard> {
    protected readonly model = 'auth_totp.wizard';
}
export declare class AvatarMixinModel extends BaseOdooModel<TAvatarMixin> {
    protected readonly model = 'avatar.mixin';
}
export declare class AvataxConnectionTestResultModel extends BaseOdooModel<TAvataxConnectionTestResult> {
    protected readonly model = 'avatax.connection.test.result';
}
export declare class AvataxExemptionModel extends BaseOdooModel<TAvataxExemption> {
    protected readonly model = 'avatax.exemption';
}
export declare class AvataxValidateAddressModel extends BaseOdooModel<TAvataxValidateAddress> {
    protected readonly model = 'avatax.validate.address';
}
export declare class BankRecWidgetLineModel extends BaseOdooModel<TBankRecWidgetLine> {
    protected readonly model = 'bank.rec.widget.line';
}
export declare class BankRecWidgetModel extends BaseOdooModel<TBankRecWidget> {
    protected readonly model = 'bank.rec.widget';
}
export declare class BarcodeNomenclatureModel extends BaseOdooModel<TBarcodeNomenclature> {
    protected readonly model = 'barcode.nomenclature';
}
export declare class BarcodeRuleModel extends BaseOdooModel<TBarcodeRule> {
    protected readonly model = 'barcode.rule';
}
export declare class BarcodesBarcode_events_mixinModel extends BaseOdooModel<TBarcodesBarcode_events_mixin> {
    protected readonly model = 'barcodes.barcode_events_mixin';
}
export declare class BaseAutomationModel extends BaseOdooModel<TBaseAutomation> {
    protected readonly model = 'base.automation';
}
export declare class BaseDocumentLayoutModel extends BaseOdooModel<TBaseDocumentLayout> {
    protected readonly model = 'base.document.layout';
}
export declare class BaseEnableProfilingWizardModel extends BaseOdooModel<TBaseEnableProfilingWizard> {
    protected readonly model = 'base.enable.profiling.wizard';
}
export declare class BaseImportModuleModel extends BaseOdooModel<TBaseImportModule> {
    protected readonly model = 'base.import.module';
}
export declare class BaseLanguageExportModel extends BaseOdooModel<TBaseLanguageExport> {
    protected readonly model = 'base.language.export';
}
export declare class BaseLanguageImportModel extends BaseOdooModel<TBaseLanguageImport> {
    protected readonly model = 'base.language.import';
}
export declare class BaseLanguageInstallModel extends BaseOdooModel<TBaseLanguageInstall> {
    protected readonly model = 'base.language.install';
}
export declare class BaseModuleInstallRequestModel extends BaseOdooModel<TBaseModuleInstallRequest> {
    protected readonly model = 'base.module.install.request';
}
export declare class BaseModuleInstallReviewModel extends BaseOdooModel<TBaseModuleInstallReview> {
    protected readonly model = 'base.module.install.review';
}
export declare class BaseModuleUninstallModel extends BaseOdooModel<TBaseModuleUninstall> {
    protected readonly model = 'base.module.uninstall';
}
export declare class BaseModuleUpdateModel extends BaseOdooModel<TBaseModuleUpdate> {
    protected readonly model = 'base.module.update';
}
export declare class BaseModuleUpgradeModel extends BaseOdooModel<TBaseModuleUpgrade> {
    protected readonly model = 'base.module.upgrade';
}
export declare class BasePartnerMergeAutomaticWizardModel extends BaseOdooModel<TBasePartnerMergeAutomaticWizard> {
    protected readonly model = 'base.partner.merge.automatic.wizard';
}
export declare class BasePartnerMergeLineModel extends BaseOdooModel<TBasePartnerMergeLine> {
    protected readonly model = 'base.partner.merge.line';
}
export declare class BaseModel extends BaseOdooModel<TBase> {
    protected readonly model = 'base';
}
export declare class Base_importImportModel extends BaseOdooModel<TBase_importImport> {
    protected readonly model = 'base_import.import';
}
export declare class Base_importMappingModel extends BaseOdooModel<TBase_importMapping> {
    protected readonly model = 'base_import.mapping';
}
export declare class BillToPoWizardModel extends BaseOdooModel<TBillToPoWizard> {
    protected readonly model = 'bill.to.po.wizard';
}
export declare class BusBusModel extends BaseOdooModel<TBusBus> {
    protected readonly model = 'bus.bus';
}
export declare class BusListenerMixinModel extends BaseOdooModel<TBusListenerMixin> {
    protected readonly model = 'bus.listener.mixin';
}
export declare class BusPresenceModel extends BaseOdooModel<TBusPresence> {
    protected readonly model = 'bus.presence';
}
export declare class ChangePasswordOwnModel extends BaseOdooModel<TChangePasswordOwn> {
    protected readonly model = 'change.password.own';
}
export declare class ChangePasswordUserModel extends BaseOdooModel<TChangePasswordUser> {
    protected readonly model = 'change.password.user';
}
export declare class ChangePasswordWizardModel extends BaseOdooModel<TChangePasswordWizard> {
    protected readonly model = 'change.password.wizard';
}
export declare class ChangeProductionQtyModel extends BaseOdooModel<TChangeProductionQty> {
    protected readonly model = 'change.production.qty';
}
export declare class ChooseDeliveryCarrierModel extends BaseOdooModel<TChooseDeliveryCarrier> {
    protected readonly model = 'choose.delivery.carrier';
}
export declare class ChooseDeliveryPackageModel extends BaseOdooModel<TChooseDeliveryPackage> {
    protected readonly model = 'choose.delivery.package';
}
export declare class ConfirmStockSmsModel extends BaseOdooModel<TConfirmStockSms> {
    protected readonly model = 'confirm.stock.sms';
}
export declare class CrmTagModel extends BaseOdooModel<TCrmTag> {
    protected readonly model = 'crm.tag';
}
export declare class CrmTeamMemberModel extends BaseOdooModel<TCrmTeamMember> {
    protected readonly model = 'crm.team.member';
}
export declare class CrmTeamModel extends BaseOdooModel<TCrmTeam> {
    protected readonly model = 'crm.team';
}
export declare class DecimalPrecisionModel extends BaseOdooModel<TDecimalPrecision> {
    protected readonly model = 'decimal.precision';
}
export declare class DeliveryCarrierModel extends BaseOdooModel<TDeliveryCarrier> {
    protected readonly model = 'delivery.carrier';
}
export declare class DeliveryPriceRuleModel extends BaseOdooModel<TDeliveryPriceRule> {
    protected readonly model = 'delivery.price.rule';
}
export declare class DeliveryZipPrefixModel extends BaseOdooModel<TDeliveryZipPrefix> {
    protected readonly model = 'delivery.zip.prefix';
}
export declare class DigestDigestModel extends BaseOdooModel<TDigestDigest> {
    protected readonly model = 'digest.digest';
}
export declare class DigestTipModel extends BaseOdooModel<TDigestTip> {
    protected readonly model = 'digest.tip';
}
export declare class DiscussChannelMemberModel extends BaseOdooModel<TDiscussChannelMember> {
    protected readonly model = 'discuss.channel.member';
}
export declare class DiscussChannelRtcSessionModel extends BaseOdooModel<TDiscussChannelRtcSession> {
    protected readonly model = 'discuss.channel.rtc.session';
}
export declare class DiscussChannelModel extends BaseOdooModel<TDiscussChannel> {
    protected readonly model = 'discuss.channel';
}
export declare class DiscussGifFavoriteModel extends BaseOdooModel<TDiscussGifFavorite> {
    protected readonly model = 'discuss.gif.favorite';
}
export declare class DiscussVoiceMetadataModel extends BaseOdooModel<TDiscussVoiceMetadata> {
    protected readonly model = 'discuss.voice.metadata';
}
export declare class ExtractMixinModel extends BaseOdooModel<TExtractMixin> {
    protected readonly model = 'extract.mixin';
}
export declare class FetchmailServerModel extends BaseOdooModel<TFetchmailServer> {
    protected readonly model = 'fetchmail.server';
}
export declare class FormatAddressMixinModel extends BaseOdooModel<TFormatAddressMixin> {
    protected readonly model = 'format.address.mixin';
}
export declare class FormatVatLabelMixinModel extends BaseOdooModel<TFormatVatLabelMixin> {
    protected readonly model = 'format.vat.label.mixin';
}
export declare class GoogleGmailMixinModel extends BaseOdooModel<TGoogleGmailMixin> {
    protected readonly model = 'google.gmail.mixin';
}
export declare class HrContractTypeModel extends BaseOdooModel<THrContractType> {
    protected readonly model = 'hr.contract.type';
}
export declare class HrDepartmentModel extends BaseOdooModel<THrDepartment> {
    protected readonly model = 'hr.department';
}
export declare class HrDepartureReasonModel extends BaseOdooModel<THrDepartureReason> {
    protected readonly model = 'hr.departure.reason';
}
export declare class HrDepartureWizardModel extends BaseOdooModel<THrDepartureWizard> {
    protected readonly model = 'hr.departure.wizard';
}
export declare class HrEmployeeBaseModel extends BaseOdooModel<THrEmployeeBase> {
    protected readonly model = 'hr.employee.base';
}
export declare class HrEmployeeCategoryModel extends BaseOdooModel<THrEmployeeCategory> {
    protected readonly model = 'hr.employee.category';
}
export declare class HrEmployeeCvWizardModel extends BaseOdooModel<THrEmployeeCvWizard> {
    protected readonly model = 'hr.employee.cv.wizard';
}
export declare class HrEmployeePublicModel extends BaseOdooModel<THrEmployeePublic> {
    protected readonly model = 'hr.employee.public';
}
export declare class HrEmployeeSkillLogModel extends BaseOdooModel<THrEmployeeSkillLog> {
    protected readonly model = 'hr.employee.skill.log';
}
export declare class HrEmployeeSkillReportModel extends BaseOdooModel<THrEmployeeSkillReport> {
    protected readonly model = 'hr.employee.skill.report';
}
export declare class HrEmployeeSkillModel extends BaseOdooModel<THrEmployeeSkill> {
    protected readonly model = 'hr.employee.skill';
}
export declare class HrEmployeeModel extends BaseOdooModel<THrEmployee> {
    protected readonly model = 'hr.employee';
}
export declare class HrJobModel extends BaseOdooModel<THrJob> {
    protected readonly model = 'hr.job';
}
export declare class HrManagerDepartmentReportModel extends BaseOdooModel<THrManagerDepartmentReport> {
    protected readonly model = 'hr.manager.department.report';
}
export declare class HrResumeLineModel extends BaseOdooModel<THrResumeLine> {
    protected readonly model = 'hr.resume.line';
}
export declare class HrResumeLineTypeModel extends BaseOdooModel<THrResumeLineType> {
    protected readonly model = 'hr.resume.line.type';
}
export declare class HrSkillLevelModel extends BaseOdooModel<THrSkillLevel> {
    protected readonly model = 'hr.skill.level';
}
export declare class HrSkillModel extends BaseOdooModel<THrSkill> {
    protected readonly model = 'hr.skill';
}
export declare class HrSkillTypeModel extends BaseOdooModel<THrSkillType> {
    protected readonly model = 'hr.skill.type';
}
export declare class HrWorkLocationModel extends BaseOdooModel<THrWorkLocation> {
    protected readonly model = 'hr.work.location';
}
export declare class HtmlFieldHistoryMixinModel extends BaseOdooModel<THtmlFieldHistoryMixin> {
    protected readonly model = 'html.field.history.mixin';
}
export declare class IapAccountModel extends BaseOdooModel<TIapAccount> {
    protected readonly model = 'iap.account';
}
export declare class IapAutocompleteApiModel extends BaseOdooModel<TIapAutocompleteApi> {
    protected readonly model = 'iap.autocomplete.api';
}
export declare class IapEnrichApiModel extends BaseOdooModel<TIapEnrichApi> {
    protected readonly model = 'iap.enrich.api';
}
export declare class IapServiceModel extends BaseOdooModel<TIapService> {
    protected readonly model = 'iap.service';
}
export declare class ImageMixinModel extends BaseOdooModel<TImageMixin> {
    protected readonly model = 'image.mixin';
}
export declare class IrActionsAct_urlModel extends BaseOdooModel<TIrActionsAct_url> {
    protected readonly model = 'ir.actions.act_url';
}
export declare class IrActionsAct_windowModel extends BaseOdooModel<TIrActionsAct_window> {
    protected readonly model = 'ir.actions.act_window';
}
export declare class IrActionsAct_windowViewModel extends BaseOdooModel<TIrActionsAct_windowView> {
    protected readonly model = 'ir.actions.act_window.view';
}
export declare class IrActionsAct_window_closeModel extends BaseOdooModel<TIrActionsAct_window_close> {
    protected readonly model = 'ir.actions.act_window_close';
}
export declare class IrActionsActionsModel extends BaseOdooModel<TIrActionsActions> {
    protected readonly model = 'ir.actions.actions';
}
export declare class IrActionsClientModel extends BaseOdooModel<TIrActionsClient> {
    protected readonly model = 'ir.actions.client';
}
export declare class IrActionsReportModel extends BaseOdooModel<TIrActionsReport> {
    protected readonly model = 'ir.actions.report';
}
export declare class IrActionsServerModel extends BaseOdooModel<TIrActionsServer> {
    protected readonly model = 'ir.actions.server';
}
export declare class IrActionsTodoModel extends BaseOdooModel<TIrActionsTodo> {
    protected readonly model = 'ir.actions.todo';
}
export declare class IrAssetModel extends BaseOdooModel<TIrAsset> {
    protected readonly model = 'ir.asset';
}
export declare class IrAttachmentModel extends BaseOdooModel<TIrAttachment> {
    protected readonly model = 'ir.attachment';
}
export declare class IrAutovacuumModel extends BaseOdooModel<TIrAutovacuum> {
    protected readonly model = 'ir.autovacuum';
}
export declare class IrBinaryModel extends BaseOdooModel<TIrBinary> {
    protected readonly model = 'ir.binary';
}
export declare class IrConfig_parameterModel extends BaseOdooModel<TIrConfig_parameter> {
    protected readonly model = 'ir.config_parameter';
}
export declare class IrCronProgressModel extends BaseOdooModel<TIrCronProgress> {
    protected readonly model = 'ir.cron.progress';
}
export declare class IrCronTriggerModel extends BaseOdooModel<TIrCronTrigger> {
    protected readonly model = 'ir.cron.trigger';
}
export declare class IrCronModel extends BaseOdooModel<TIrCron> {
    protected readonly model = 'ir.cron';
}
export declare class IrDefaultModel extends BaseOdooModel<TIrDefault> {
    protected readonly model = 'ir.default';
}
export declare class IrDemoModel extends BaseOdooModel<TIrDemo> {
    protected readonly model = 'ir.demo';
}
export declare class IrDemo_failureModel extends BaseOdooModel<TIrDemo_failure> {
    protected readonly model = 'ir.demo_failure';
}
export declare class IrDemo_failureWizardModel extends BaseOdooModel<TIrDemo_failureWizard> {
    protected readonly model = 'ir.demo_failure.wizard';
}
export declare class IrEmbeddedActionsModel extends BaseOdooModel<TIrEmbeddedActions> {
    protected readonly model = 'ir.embedded.actions';
}
export declare class IrExportsLineModel extends BaseOdooModel<TIrExportsLine> {
    protected readonly model = 'ir.exports.line';
}
export declare class IrExportsModel extends BaseOdooModel<TIrExports> {
    protected readonly model = 'ir.exports';
}
export declare class IrFieldsConverterModel extends BaseOdooModel<TIrFieldsConverter> {
    protected readonly model = 'ir.fields.converter';
}
export declare class IrFiltersModel extends BaseOdooModel<TIrFilters> {
    protected readonly model = 'ir.filters';
}
export declare class IrHttpModel extends BaseOdooModel<TIrHttp> {
    protected readonly model = 'ir.http';
}
export declare class IrLoggingModel extends BaseOdooModel<TIrLogging> {
    protected readonly model = 'ir.logging';
}
export declare class IrMail_serverModel extends BaseOdooModel<TIrMail_server> {
    protected readonly model = 'ir.mail_server';
}
export declare class IrModelAccessModel extends BaseOdooModel<TIrModelAccess> {
    protected readonly model = 'ir.model.access';
}
export declare class IrModelConstraintModel extends BaseOdooModel<TIrModelConstraint> {
    protected readonly model = 'ir.model.constraint';
}
export declare class IrModelDataModel extends BaseOdooModel<TIrModelData> {
    protected readonly model = 'ir.model.data';
}
export declare class IrModelFieldsSelectionModel extends BaseOdooModel<TIrModelFieldsSelection> {
    protected readonly model = 'ir.model.fields.selection';
}
export declare class IrModelFieldsModel extends BaseOdooModel<TIrModelFields> {
    protected readonly model = 'ir.model.fields';
}
export declare class IrModelInheritModel extends BaseOdooModel<TIrModelInherit> {
    protected readonly model = 'ir.model.inherit';
}
export declare class IrModelRelationModel extends BaseOdooModel<TIrModelRelation> {
    protected readonly model = 'ir.model.relation';
}
export declare class IrModelModel extends BaseOdooModel<TIrModel> {
    protected readonly model = 'ir.model';
}
export declare class IrModuleCategoryModel extends BaseOdooModel<TIrModuleCategory> {
    protected readonly model = 'ir.module.category';
}
export declare class IrModuleModuleDependencyModel extends BaseOdooModel<TIrModuleModuleDependency> {
    protected readonly model = 'ir.module.module.dependency';
}
export declare class IrModuleModuleExclusionModel extends BaseOdooModel<TIrModuleModuleExclusion> {
    protected readonly model = 'ir.module.module.exclusion';
}
export declare class IrModuleModuleModel extends BaseOdooModel<TIrModuleModule> {
    protected readonly model = 'ir.module.module';
}
export declare class IrProfileModel extends BaseOdooModel<TIrProfile> {
    protected readonly model = 'ir.profile';
}
export declare class IrQwebFieldBarcodeModel extends BaseOdooModel<TIrQwebFieldBarcode> {
    protected readonly model = 'ir.qweb.field.barcode';
}
export declare class IrQwebFieldContactModel extends BaseOdooModel<TIrQwebFieldContact> {
    protected readonly model = 'ir.qweb.field.contact';
}
export declare class IrQwebFieldDateModel extends BaseOdooModel<TIrQwebFieldDate> {
    protected readonly model = 'ir.qweb.field.date';
}
export declare class IrQwebFieldDatetimeModel extends BaseOdooModel<TIrQwebFieldDatetime> {
    protected readonly model = 'ir.qweb.field.datetime';
}
export declare class IrQwebFieldDurationModel extends BaseOdooModel<TIrQwebFieldDuration> {
    protected readonly model = 'ir.qweb.field.duration';
}
export declare class IrQwebFieldFloatModel extends BaseOdooModel<TIrQwebFieldFloat> {
    protected readonly model = 'ir.qweb.field.float';
}
export declare class IrQwebFieldFloat_timeModel extends BaseOdooModel<TIrQwebFieldFloat_time> {
    protected readonly model = 'ir.qweb.field.float_time';
}
export declare class IrQwebFieldHtmlModel extends BaseOdooModel<TIrQwebFieldHtml> {
    protected readonly model = 'ir.qweb.field.html';
}
export declare class IrQwebFieldImageModel extends BaseOdooModel<TIrQwebFieldImage> {
    protected readonly model = 'ir.qweb.field.image';
}
export declare class IrQwebFieldImage_urlModel extends BaseOdooModel<TIrQwebFieldImage_url> {
    protected readonly model = 'ir.qweb.field.image_url';
}
export declare class IrQwebFieldIntegerModel extends BaseOdooModel<TIrQwebFieldInteger> {
    protected readonly model = 'ir.qweb.field.integer';
}
export declare class IrQwebFieldMany2manyModel extends BaseOdooModel<TIrQwebFieldMany2many> {
    protected readonly model = 'ir.qweb.field.many2many';
}
export declare class IrQwebFieldMany2oneModel extends BaseOdooModel<TIrQwebFieldMany2one> {
    protected readonly model = 'ir.qweb.field.many2one';
}
export declare class IrQwebFieldMonetaryModel extends BaseOdooModel<TIrQwebFieldMonetary> {
    protected readonly model = 'ir.qweb.field.monetary';
}
export declare class IrQwebFieldOne2manyModel extends BaseOdooModel<TIrQwebFieldOne2many> {
    protected readonly model = 'ir.qweb.field.one2many';
}
export declare class IrQwebFieldQwebModel extends BaseOdooModel<TIrQwebFieldQweb> {
    protected readonly model = 'ir.qweb.field.qweb';
}
export declare class IrQwebFieldRelativeModel extends BaseOdooModel<TIrQwebFieldRelative> {
    protected readonly model = 'ir.qweb.field.relative';
}
export declare class IrQwebFieldSelectionModel extends BaseOdooModel<TIrQwebFieldSelection> {
    protected readonly model = 'ir.qweb.field.selection';
}
export declare class IrQwebFieldTextModel extends BaseOdooModel<TIrQwebFieldText> {
    protected readonly model = 'ir.qweb.field.text';
}
export declare class IrQwebFieldTimeModel extends BaseOdooModel<TIrQwebFieldTime> {
    protected readonly model = 'ir.qweb.field.time';
}
export declare class IrQwebFieldModel extends BaseOdooModel<TIrQwebField> {
    protected readonly model = 'ir.qweb.field';
}
export declare class IrQwebModel extends BaseOdooModel<TIrQweb> {
    protected readonly model = 'ir.qweb';
}
export declare class IrRuleModel extends BaseOdooModel<TIrRule> {
    protected readonly model = 'ir.rule';
}
export declare class IrSequenceDate_rangeModel extends BaseOdooModel<TIrSequenceDate_range> {
    protected readonly model = 'ir.sequence.date_range';
}
export declare class IrSequenceModel extends BaseOdooModel<TIrSequence> {
    protected readonly model = 'ir.sequence';
}
export declare class IrUiMenuModel extends BaseOdooModel<TIrUiMenu> {
    protected readonly model = 'ir.ui.menu';
}
export declare class IrUiViewCustomModel extends BaseOdooModel<TIrUiViewCustom> {
    protected readonly model = 'ir.ui.view.custom';
}
export declare class IrUiViewModel extends BaseOdooModel<TIrUiView> {
    protected readonly model = 'ir.ui.view';
}
export declare class IrWebsocketModel extends BaseOdooModel<TIrWebsocket> {
    protected readonly model = 'ir.websocket';
}
export declare class KpiProviderModel extends BaseOdooModel<TKpiProvider> {
    protected readonly model = 'kpi.provider';
}
export declare class L10n_it_delivery_noteDelivery_mixinModel extends BaseOdooModel<TL10n_it_delivery_noteDelivery_mixin> {
    protected readonly model = 'l10n_it_delivery_note.delivery_mixin';
}
export declare class L10n_us1099_boxModel extends BaseOdooModel<TL10n_us1099_box> {
    protected readonly model = 'l10n_us1099_box';
}
export declare class L10n_us_1099WizardModel extends BaseOdooModel<TL10n_us_1099Wizard> {
    protected readonly model = 'l10n_us_1099.wizard';
}
export declare class LotLabelLayoutModel extends BaseOdooModel<TLotLabelLayout> {
    protected readonly model = 'lot.label.layout';
}
export declare class MailActivityMixinModel extends BaseOdooModel<TMailActivityMixin> {
    protected readonly model = 'mail.activity.mixin';
}
export declare class MailActivityPlanTemplateModel extends BaseOdooModel<TMailActivityPlanTemplate> {
    protected readonly model = 'mail.activity.plan.template';
}
export declare class MailActivityPlanModel extends BaseOdooModel<TMailActivityPlan> {
    protected readonly model = 'mail.activity.plan';
}
export declare class MailActivityScheduleModel extends BaseOdooModel<TMailActivitySchedule> {
    protected readonly model = 'mail.activity.schedule';
}
export declare class MailActivityModel extends BaseOdooModel<TMailActivity> {
    protected readonly model = 'mail.activity';
}
export declare class MailActivityTypeModel extends BaseOdooModel<TMailActivityType> {
    protected readonly model = 'mail.activity.type';
}
export declare class MailAliasDomainModel extends BaseOdooModel<TMailAliasDomain> {
    protected readonly model = 'mail.alias.domain';
}
export declare class MailAliasMixinOptionalModel extends BaseOdooModel<TMailAliasMixinOptional> {
    protected readonly model = 'mail.alias.mixin.optional';
}
export declare class MailAliasMixinModel extends BaseOdooModel<TMailAliasMixin> {
    protected readonly model = 'mail.alias.mixin';
}
export declare class MailAliasModel extends BaseOdooModel<TMailAlias> {
    protected readonly model = 'mail.alias';
}
export declare class MailBlacklistRemoveModel extends BaseOdooModel<TMailBlacklistRemove> {
    protected readonly model = 'mail.blacklist.remove';
}
export declare class MailBlacklistModel extends BaseOdooModel<TMailBlacklist> {
    protected readonly model = 'mail.blacklist';
}
export declare class MailBotModel extends BaseOdooModel<TMailBot> {
    protected readonly model = 'mail.bot';
}
export declare class MailCannedResponseModel extends BaseOdooModel<TMailCannedResponse> {
    protected readonly model = 'mail.canned.response';
}
export declare class MailComposeMessageModel extends BaseOdooModel<TMailComposeMessage> {
    protected readonly model = 'mail.compose.message';
}
export declare class MailComposerMixinModel extends BaseOdooModel<TMailComposerMixin> {
    protected readonly model = 'mail.composer.mixin';
}
export declare class MailFollowersModel extends BaseOdooModel<TMailFollowers> {
    protected readonly model = 'mail.followers';
}
export declare class MailGatewayAllowedModel extends BaseOdooModel<TMailGatewayAllowed> {
    protected readonly model = 'mail.gateway.allowed';
}
export declare class MailGuestModel extends BaseOdooModel<TMailGuest> {
    protected readonly model = 'mail.guest';
}
export declare class MailIceServerModel extends BaseOdooModel<TMailIceServer> {
    protected readonly model = 'mail.ice.server';
}
export declare class MailLinkPreviewModel extends BaseOdooModel<TMailLinkPreview> {
    protected readonly model = 'mail.link.preview';
}
export declare class MailMailModel extends BaseOdooModel<TMailMail> {
    protected readonly model = 'mail.mail';
}
export declare class MailMessageReactionModel extends BaseOdooModel<TMailMessageReaction> {
    protected readonly model = 'mail.message.reaction';
}
export declare class MailMessageScheduleModel extends BaseOdooModel<TMailMessageSchedule> {
    protected readonly model = 'mail.message.schedule';
}
export declare class MailMessageSubtypeModel extends BaseOdooModel<TMailMessageSubtype> {
    protected readonly model = 'mail.message.subtype';
}
export declare class MailMessageTranslationModel extends BaseOdooModel<TMailMessageTranslation> {
    protected readonly model = 'mail.message.translation';
}
export declare class MailMessageModel extends BaseOdooModel<TMailMessage> {
    protected readonly model = 'mail.message';
}
export declare class MailNotificationModel extends BaseOdooModel<TMailNotification> {
    protected readonly model = 'mail.notification';
}
export declare class MailPushDeviceModel extends BaseOdooModel<TMailPushDevice> {
    protected readonly model = 'mail.push.device';
}
export declare class MailPushModel extends BaseOdooModel<TMailPush> {
    protected readonly model = 'mail.push';
}
export declare class MailRenderMixinModel extends BaseOdooModel<TMailRenderMixin> {
    protected readonly model = 'mail.render.mixin';
}
export declare class MailResendMessageModel extends BaseOdooModel<TMailResendMessage> {
    protected readonly model = 'mail.resend.message';
}
export declare class MailResendPartnerModel extends BaseOdooModel<TMailResendPartner> {
    protected readonly model = 'mail.resend.partner';
}
export declare class MailScheduledMessageModel extends BaseOdooModel<TMailScheduledMessage> {
    protected readonly model = 'mail.scheduled.message';
}
export declare class MailTemplatePreviewModel extends BaseOdooModel<TMailTemplatePreview> {
    protected readonly model = 'mail.template.preview';
}
export declare class MailTemplateResetModel extends BaseOdooModel<TMailTemplateReset> {
    protected readonly model = 'mail.template.reset';
}
export declare class MailTemplateModel extends BaseOdooModel<TMailTemplate> {
    protected readonly model = 'mail.template';
}
export declare class MailThreadBlacklistModel extends BaseOdooModel<TMailThreadBlacklist> {
    protected readonly model = 'mail.thread.blacklist';
}
export declare class MailThreadCcModel extends BaseOdooModel<TMailThreadCc> {
    protected readonly model = 'mail.thread.cc';
}
export declare class MailThreadMainAttachmentModel extends BaseOdooModel<TMailThreadMainAttachment> {
    protected readonly model = 'mail.thread.main.attachment';
}
export declare class MailThreadPhoneModel extends BaseOdooModel<TMailThreadPhone> {
    protected readonly model = 'mail.thread.phone';
}
export declare class MailThreadModel extends BaseOdooModel<TMailThread> {
    protected readonly model = 'mail.thread';
}
export declare class MailTrackingDurationMixinModel extends BaseOdooModel<TMailTrackingDurationMixin> {
    protected readonly model = 'mail.tracking.duration.mixin';
}
export declare class MailTrackingValueModel extends BaseOdooModel<TMailTrackingValue> {
    protected readonly model = 'mail.tracking.value';
}
export declare class MailWizardInviteModel extends BaseOdooModel<TMailWizardInvite> {
    protected readonly model = 'mail.wizard.invite';
}
export declare class MrpAccountWipAccountingLineModel extends BaseOdooModel<TMrpAccountWipAccountingLine> {
    protected readonly model = 'mrp.account.wip.accounting.line';
}
export declare class MrpAccountWipAccountingModel extends BaseOdooModel<TMrpAccountWipAccounting> {
    protected readonly model = 'mrp.account.wip.accounting';
}
export declare class MrpBatchProduceModel extends BaseOdooModel<TMrpBatchProduce> {
    protected readonly model = 'mrp.batch.produce';
}
export declare class MrpBomByproductModel extends BaseOdooModel<TMrpBomByproduct> {
    protected readonly model = 'mrp.bom.byproduct';
}
export declare class MrpBomLineModel extends BaseOdooModel<TMrpBomLine> {
    protected readonly model = 'mrp.bom.line';
}
export declare class MrpBomModel extends BaseOdooModel<TMrpBom> {
    protected readonly model = 'mrp.bom';
}
export declare class MrpConsumptionWarningLineModel extends BaseOdooModel<TMrpConsumptionWarningLine> {
    protected readonly model = 'mrp.consumption.warning.line';
}
export declare class MrpConsumptionWarningModel extends BaseOdooModel<TMrpConsumptionWarning> {
    protected readonly model = 'mrp.consumption.warning';
}
export declare class MrpProductionBackorderLineModel extends BaseOdooModel<TMrpProductionBackorderLine> {
    protected readonly model = 'mrp.production.backorder.line';
}
export declare class MrpProductionBackorderModel extends BaseOdooModel<TMrpProductionBackorder> {
    protected readonly model = 'mrp.production.backorder';
}
export declare class MrpProductionSplitLineModel extends BaseOdooModel<TMrpProductionSplitLine> {
    protected readonly model = 'mrp.production.split.line';
}
export declare class MrpProductionSplitMultiModel extends BaseOdooModel<TMrpProductionSplitMulti> {
    protected readonly model = 'mrp.production.split.multi';
}
export declare class MrpProductionSplitModel extends BaseOdooModel<TMrpProductionSplit> {
    protected readonly model = 'mrp.production.split';
}
export declare class MrpProductionModel extends BaseOdooModel<TMrpProduction> {
    protected readonly model = 'mrp.production';
}
export declare class MrpReportModel extends BaseOdooModel<TMrpReport> {
    protected readonly model = 'mrp.report';
}
export declare class MrpRoutingWorkcenterModel extends BaseOdooModel<TMrpRoutingWorkcenter> {
    protected readonly model = 'mrp.routing.workcenter';
}
export declare class MrpUnbuildModel extends BaseOdooModel<TMrpUnbuild> {
    protected readonly model = 'mrp.unbuild';
}
export declare class MrpWorkcenterCapacityModel extends BaseOdooModel<TMrpWorkcenterCapacity> {
    protected readonly model = 'mrp.workcenter.capacity';
}
export declare class MrpWorkcenterProductivityLossModel extends BaseOdooModel<TMrpWorkcenterProductivityLoss> {
    protected readonly model = 'mrp.workcenter.productivity.loss';
}
export declare class MrpWorkcenterProductivityLossTypeModel extends BaseOdooModel<TMrpWorkcenterProductivityLossType> {
    protected readonly model = 'mrp.workcenter.productivity.loss.type';
}
export declare class MrpWorkcenterProductivityModel extends BaseOdooModel<TMrpWorkcenterProductivity> {
    protected readonly model = 'mrp.workcenter.productivity';
}
export declare class MrpWorkcenterTagModel extends BaseOdooModel<TMrpWorkcenterTag> {
    protected readonly model = 'mrp.workcenter.tag';
}
export declare class MrpWorkcenterModel extends BaseOdooModel<TMrpWorkcenter> {
    protected readonly model = 'mrp.workcenter';
}
export declare class MrpWorkorderModel extends BaseOdooModel<TMrpWorkorder> {
    protected readonly model = 'mrp.workorder';
}
export declare class Mrp_productionAdditionalWorkorderModel extends BaseOdooModel<TMrp_productionAdditionalWorkorder> {
    protected readonly model = 'mrp_production.additional.workorder';
}
export declare class OnboardingOnboardingStepModel extends BaseOdooModel<TOnboardingOnboardingStep> {
    protected readonly model = 'onboarding.onboarding.step';
}
export declare class OnboardingOnboardingModel extends BaseOdooModel<TOnboardingOnboarding> {
    protected readonly model = 'onboarding.onboarding';
}
export declare class OnboardingProgressStepModel extends BaseOdooModel<TOnboardingProgressStep> {
    protected readonly model = 'onboarding.progress.step';
}
export declare class OnboardingProgressModel extends BaseOdooModel<TOnboardingProgress> {
    protected readonly model = 'onboarding.progress';
}
export declare class PaymentCaptureWizardModel extends BaseOdooModel<TPaymentCaptureWizard> {
    protected readonly model = 'payment.capture.wizard';
}
export declare class PaymentLinkWizardModel extends BaseOdooModel<TPaymentLinkWizard> {
    protected readonly model = 'payment.link.wizard';
}
export declare class PaymentMethodModel extends BaseOdooModel<TPaymentMethod> {
    protected readonly model = 'payment.method';
}
export declare class PaymentProviderOnboardingWizardModel extends BaseOdooModel<TPaymentProviderOnboardingWizard> {
    protected readonly model = 'payment.provider.onboarding.wizard';
}
export declare class PaymentProviderModel extends BaseOdooModel<TPaymentProvider> {
    protected readonly model = 'payment.provider';
}
export declare class PaymentRefundWizardModel extends BaseOdooModel<TPaymentRefundWizard> {
    protected readonly model = 'payment.refund.wizard';
}
export declare class PaymentTokenModel extends BaseOdooModel<TPaymentToken> {
    protected readonly model = 'payment.token';
}
export declare class PaymentTransactionModel extends BaseOdooModel<TPaymentTransaction> {
    protected readonly model = 'payment.transaction';
}
export declare class PhoneBlacklistRemoveModel extends BaseOdooModel<TPhoneBlacklistRemove> {
    protected readonly model = 'phone.blacklist.remove';
}
export declare class PhoneBlacklistModel extends BaseOdooModel<TPhoneBlacklist> {
    protected readonly model = 'phone.blacklist';
}
export declare class PickingLabelTypeModel extends BaseOdooModel<TPickingLabelType> {
    protected readonly model = 'picking.label.type';
}
export declare class PortalMixinModel extends BaseOdooModel<TPortalMixin> {
    protected readonly model = 'portal.mixin';
}
export declare class PortalShareModel extends BaseOdooModel<TPortalShare> {
    protected readonly model = 'portal.share';
}
export declare class PortalWizardModel extends BaseOdooModel<TPortalWizard> {
    protected readonly model = 'portal.wizard';
}
export declare class PortalWizardUserModel extends BaseOdooModel<TPortalWizardUser> {
    protected readonly model = 'portal.wizard.user';
}
export declare class PrintPrenumberedChecksModel extends BaseOdooModel<TPrintPrenumberedChecks> {
    protected readonly model = 'print.prenumbered.checks';
}
export declare class PrivacyLogModel extends BaseOdooModel<TPrivacyLog> {
    protected readonly model = 'privacy.log';
}
export declare class PrivacyLookupWizardLineModel extends BaseOdooModel<TPrivacyLookupWizardLine> {
    protected readonly model = 'privacy.lookup.wizard.line';
}
export declare class PrivacyLookupWizardModel extends BaseOdooModel<TPrivacyLookupWizard> {
    protected readonly model = 'privacy.lookup.wizard';
}
export declare class ProcurementGroupModel extends BaseOdooModel<TProcurementGroup> {
    protected readonly model = 'procurement.group';
}
export declare class ProductAttributeCustomValueModel extends BaseOdooModel<TProductAttributeCustomValue> {
    protected readonly model = 'product.attribute.custom.value';
}
export declare class ProductAttributeModel extends BaseOdooModel<TProductAttribute> {
    protected readonly model = 'product.attribute';
}
export declare class ProductAttributeValueModel extends BaseOdooModel<TProductAttributeValue> {
    protected readonly model = 'product.attribute.value';
}
export declare class ProductAvataxCategoryModel extends BaseOdooModel<TProductAvataxCategory> {
    protected readonly model = 'product.avatax.category';
}
export declare class ProductCatalogMixinModel extends BaseOdooModel<TProductCatalogMixin> {
    protected readonly model = 'product.catalog.mixin';
}
export declare class ProductCategoryModel extends BaseOdooModel<TProductCategory> {
    protected readonly model = 'product.category';
}
export declare class ProductComboItemModel extends BaseOdooModel<TProductComboItem> {
    protected readonly model = 'product.combo.item';
}
export declare class ProductComboModel extends BaseOdooModel<TProductCombo> {
    protected readonly model = 'product.combo';
}
export declare class ProductDocumentModel extends BaseOdooModel<TProductDocument> {
    protected readonly model = 'product.document';
}
export declare class ProductLabelLayoutModel extends BaseOdooModel<TProductLabelLayout> {
    protected readonly model = 'product.label.layout';
}
export declare class ProductPackagingModel extends BaseOdooModel<TProductPackaging> {
    protected readonly model = 'product.packaging';
}
export declare class ProductPricelistItemModel extends BaseOdooModel<TProductPricelistItem> {
    protected readonly model = 'product.pricelist.item';
}
export declare class ProductPricelistModel extends BaseOdooModel<TProductPricelist> {
    protected readonly model = 'product.pricelist';
}
export declare class ProductProductModel extends BaseOdooModel<TProductProduct> {
    protected readonly model = 'product.product';
}
export declare class ProductRemovalModel extends BaseOdooModel<TProductRemoval> {
    protected readonly model = 'product.removal';
}
export declare class ProductReplenishModel extends BaseOdooModel<TProductReplenish> {
    protected readonly model = 'product.replenish';
}
export declare class ProductSupplierinfoModel extends BaseOdooModel<TProductSupplierinfo> {
    protected readonly model = 'product.supplierinfo';
}
export declare class ProductTagModel extends BaseOdooModel<TProductTag> {
    protected readonly model = 'product.tag';
}
export declare class ProductTemplateAttributeExclusionModel extends BaseOdooModel<TProductTemplateAttributeExclusion> {
    protected readonly model = 'product.template.attribute.exclusion';
}
export declare class ProductTemplateAttributeLineModel extends BaseOdooModel<TProductTemplateAttributeLine> {
    protected readonly model = 'product.template.attribute.line';
}
export declare class ProductTemplateAttributeValueModel extends BaseOdooModel<TProductTemplateAttributeValue> {
    protected readonly model = 'product.template.attribute.value';
}
export declare class ProductTemplateModel extends BaseOdooModel<TProductTemplate> {
    protected readonly model = 'product.template';
}
export declare class ProposeChangeModel extends BaseOdooModel<TProposeChange> {
    protected readonly model = 'propose.change';
}
export declare class Publisher_warrantyContractModel extends BaseOdooModel<TPublisher_warrantyContract> {
    protected readonly model = 'publisher_warranty.contract';
}
export declare class PurchaseBillLineMatchModel extends BaseOdooModel<TPurchaseBillLineMatch> {
    protected readonly model = 'purchase.bill.line.match';
}
export declare class PurchaseBillUnionModel extends BaseOdooModel<TPurchaseBillUnion> {
    protected readonly model = 'purchase.bill.union';
}
export declare class PurchaseEdiXmlUbl_bis3Model extends BaseOdooModel<TPurchaseEdiXmlUbl_bis3> {
    protected readonly model = 'purchase.edi.xml.ubl_bis3';
}
export declare class PurchaseOrderLineModel extends BaseOdooModel<TPurchaseOrderLine> {
    protected readonly model = 'purchase.order.line';
}
export declare class PurchaseOrderModel extends BaseOdooModel<TPurchaseOrder> {
    protected readonly model = 'purchase.order';
}
export declare class PurchaseReportModel extends BaseOdooModel<TPurchaseReport> {
    protected readonly model = 'purchase.report';
}
export declare class QualityAlertStageModel extends BaseOdooModel<TQualityAlertStage> {
    protected readonly model = 'quality.alert.stage';
}
export declare class QualityAlertTeamModel extends BaseOdooModel<TQualityAlertTeam> {
    protected readonly model = 'quality.alert.team';
}
export declare class QualityAlertModel extends BaseOdooModel<TQualityAlert> {
    protected readonly model = 'quality.alert';
}
export declare class QualityCheckModel extends BaseOdooModel<TQualityCheck> {
    protected readonly model = 'quality.check';
}
export declare class QualityPointTest_typeModel extends BaseOdooModel<TQualityPointTest_type> {
    protected readonly model = 'quality.point.test_type';
}
export declare class QualityPointModel extends BaseOdooModel<TQualityPoint> {
    protected readonly model = 'quality.point';
}
export declare class QualityReasonModel extends BaseOdooModel<TQualityReason> {
    protected readonly model = 'quality.reason';
}
export declare class QualityTagModel extends BaseOdooModel<TQualityTag> {
    protected readonly model = 'quality.tag';
}
export declare class QuotationDocumentModel extends BaseOdooModel<TQuotationDocument> {
    protected readonly model = 'quotation.document';
}
export declare class ReportAccountReport_hash_integrityModel extends BaseOdooModel<TReportAccountReport_hash_integrity> {
    protected readonly model = 'report.account.report_hash_integrity';
}
export declare class ReportAccountReport_invoiceModel extends BaseOdooModel<TReportAccountReport_invoice> {
    protected readonly model = 'report.account.report_invoice';
}
export declare class ReportAccountReport_invoice_with_paymentsModel extends BaseOdooModel<TReportAccountReport_invoice_with_payments> {
    protected readonly model = 'report.account.report_invoice_with_payments';
}
export declare class ReportAccount_batch_paymentPrint_batch_paymentModel extends BaseOdooModel<TReportAccount_batch_paymentPrint_batch_payment> {
    protected readonly model = 'report.account_batch_payment.print_batch_payment';
}
export declare class ReportBaseReport_irmodulereferenceModel extends BaseOdooModel<TReportBaseReport_irmodulereference> {
    protected readonly model = 'report.base.report_irmodulereference';
}
export declare class ReportHr_skillsReport_employee_cvModel extends BaseOdooModel<TReportHr_skillsReport_employee_cv> {
    protected readonly model = 'report.hr_skills.report_employee_cv';
}
export declare class ReportLayoutModel extends BaseOdooModel<TReportLayout> {
    protected readonly model = 'report.layout';
}
export declare class ReportMrpReport_bom_structureModel extends BaseOdooModel<TReportMrpReport_bom_structure> {
    protected readonly model = 'report.mrp.report_bom_structure';
}
export declare class ReportMrpReport_mo_overviewModel extends BaseOdooModel<TReportMrpReport_mo_overview> {
    protected readonly model = 'report.mrp.report_mo_overview';
}
export declare class ReportMrp_account_enterpriseMrp_cost_structureModel extends BaseOdooModel<TReportMrp_account_enterpriseMrp_cost_structure> {
    protected readonly model = 'report.mrp_account_enterprise.mrp_cost_structure';
}
export declare class ReportMrp_account_enterpriseProduct_template_cost_structureModel extends BaseOdooModel<TReportMrp_account_enterpriseProduct_template_cost_structure> {
    protected readonly model = 'report.mrp_account_enterprise.product_template_cost_structure';
}
export declare class ReportPaperformatModel extends BaseOdooModel<TReportPaperformat> {
    protected readonly model = 'report.paperformat';
}
export declare class ReportProductReport_pricelistModel extends BaseOdooModel<TReportProductReport_pricelist> {
    protected readonly model = 'report.product.report_pricelist';
}
export declare class ReportProductReport_producttemplatelabel2x7Model extends BaseOdooModel<TReportProductReport_producttemplatelabel2x7> {
    protected readonly model = 'report.product.report_producttemplatelabel2x7';
}
export declare class ReportProductReport_producttemplatelabel4x12Model extends BaseOdooModel<TReportProductReport_producttemplatelabel4x12> {
    protected readonly model = 'report.product.report_producttemplatelabel4x12';
}
export declare class ReportProductReport_producttemplatelabel4x12nopriceModel extends BaseOdooModel<TReportProductReport_producttemplatelabel4x12noprice> {
    protected readonly model = 'report.product.report_producttemplatelabel4x12noprice';
}
export declare class ReportProductReport_producttemplatelabel4x7Model extends BaseOdooModel<TReportProductReport_producttemplatelabel4x7> {
    protected readonly model = 'report.product.report_producttemplatelabel4x7';
}
export declare class ReportProductReport_producttemplatelabel_dymoModel extends BaseOdooModel<TReportProductReport_producttemplatelabel_dymo> {
    protected readonly model = 'report.product.report_producttemplatelabel_dymo';
}
export declare class ReportStockLabel_lot_template_viewModel extends BaseOdooModel<TReportStockLabel_lot_template_view> {
    protected readonly model = 'report.stock.label_lot_template_view';
}
export declare class ReportStockLabel_product_product_viewModel extends BaseOdooModel<TReportStockLabel_product_product_view> {
    protected readonly model = 'report.stock.label_product_product_view';
}
export declare class ReportStockQuantityModel extends BaseOdooModel<TReportStockQuantity> {
    protected readonly model = 'report.stock.quantity';
}
export declare class ReportStockReport_receptionModel extends BaseOdooModel<TReportStockReport_reception> {
    protected readonly model = 'report.stock.report_reception';
}
export declare class ReportStockReport_stock_ruleModel extends BaseOdooModel<TReportStockReport_stock_rule> {
    protected readonly model = 'report.stock.report_stock_rule';
}
export declare class ResBankModel extends BaseOdooModel<TResBank> {
    protected readonly model = 'res.bank';
}
export declare class ResCompanyModel extends BaseOdooModel<TResCompany> {
    protected readonly model = 'res.company';
}
export declare class ResConfigSettingsModel extends BaseOdooModel<TResConfigSettings> {
    protected readonly model = 'res.config.settings';
}
export declare class ResConfigModel extends BaseOdooModel<TResConfig> {
    protected readonly model = 'res.config';
}
export declare class ResCountryGroupModel extends BaseOdooModel<TResCountryGroup> {
    protected readonly model = 'res.country.group';
}
export declare class ResCountryStateModel extends BaseOdooModel<TResCountryState> {
    protected readonly model = 'res.country.state';
}
export declare class ResCountryModel extends BaseOdooModel<TResCountry> {
    protected readonly model = 'res.country';
}
export declare class ResCurrencyRateModel extends BaseOdooModel<TResCurrencyRate> {
    protected readonly model = 'res.currency.rate';
}
export declare class ResCurrencyModel extends BaseOdooModel<TResCurrency> {
    protected readonly model = 'res.currency';
}
export declare class ResDeviceLogModel extends BaseOdooModel<TResDeviceLog> {
    protected readonly model = 'res.device.log';
}
export declare class ResDeviceModel extends BaseOdooModel<TResDevice> {
    protected readonly model = 'res.device';
}
export declare class ResGroupsModel extends BaseOdooModel<TResGroups> {
    protected readonly model = 'res.groups';
}
export declare class ResLangModel extends BaseOdooModel<TResLang> {
    protected readonly model = 'res.lang';
}
export declare class ResPartnerAutocompleteSyncModel extends BaseOdooModel<TResPartnerAutocompleteSync> {
    protected readonly model = 'res.partner.autocomplete.sync';
}
export declare class ResPartnerBankModel extends BaseOdooModel<TResPartnerBank> {
    protected readonly model = 'res.partner.bank';
}
export declare class ResPartnerCategoryModel extends BaseOdooModel<TResPartnerCategory> {
    protected readonly model = 'res.partner.category';
}
export declare class ResPartnerIndustryModel extends BaseOdooModel<TResPartnerIndustry> {
    protected readonly model = 'res.partner.industry';
}
export declare class ResPartnerTitleModel extends BaseOdooModel<TResPartnerTitle> {
    protected readonly model = 'res.partner.title';
}
export declare class ResPartnerModel extends BaseOdooModel<TResPartner> {
    protected readonly model = 'res.partner';
}
export declare class ResUsersApikeysDescriptionModel extends BaseOdooModel<TResUsersApikeysDescription> {
    protected readonly model = 'res.users.apikeys.description';
}
export declare class ResUsersApikeysShowModel extends BaseOdooModel<TResUsersApikeysShow> {
    protected readonly model = 'res.users.apikeys.show';
}
export declare class ResUsersApikeysModel extends BaseOdooModel<TResUsersApikeys> {
    protected readonly model = 'res.users.apikeys';
}
export declare class ResUsersDeletionModel extends BaseOdooModel<TResUsersDeletion> {
    protected readonly model = 'res.users.deletion';
}
export declare class ResUsersIdentitycheckModel extends BaseOdooModel<TResUsersIdentitycheck> {
    protected readonly model = 'res.users.identitycheck';
}
export declare class ResUsersLogModel extends BaseOdooModel<TResUsersLog> {
    protected readonly model = 'res.users.log';
}
export declare class ResUsersSettingsModel extends BaseOdooModel<TResUsersSettings> {
    protected readonly model = 'res.users.settings';
}
export declare class ResUsersSettingsVolumesModel extends BaseOdooModel<TResUsersSettingsVolumes> {
    protected readonly model = 'res.users.settings.volumes';
}
export declare class ResUsersModel extends BaseOdooModel<TResUsers> {
    protected readonly model = 'res.users';
}
export declare class ResetViewArchWizardModel extends BaseOdooModel<TResetViewArchWizard> {
    protected readonly model = 'reset.view.arch.wizard';
}
export declare class ResourceCalendarAttendanceModel extends BaseOdooModel<TResourceCalendarAttendance> {
    protected readonly model = 'resource.calendar.attendance';
}
export declare class ResourceCalendarLeavesModel extends BaseOdooModel<TResourceCalendarLeaves> {
    protected readonly model = 'resource.calendar.leaves';
}
export declare class ResourceCalendarModel extends BaseOdooModel<TResourceCalendar> {
    protected readonly model = 'resource.calendar';
}
export declare class ResourceMixinModel extends BaseOdooModel<TResourceMixin> {
    protected readonly model = 'resource.mixin';
}
export declare class ResourceResourceModel extends BaseOdooModel<TResourceResource> {
    protected readonly model = 'resource.resource';
}
export declare class SaleAdvancePaymentInvModel extends BaseOdooModel<TSaleAdvancePaymentInv> {
    protected readonly model = 'sale.advance.payment.inv';
}
export declare class SaleEdiCommonModel extends BaseOdooModel<TSaleEdiCommon> {
    protected readonly model = 'sale.edi.common';
}
export declare class SaleEdiXmlUbl_bis3Model extends BaseOdooModel<TSaleEdiXmlUbl_bis3> {
    protected readonly model = 'sale.edi.xml.ubl_bis3';
}
export declare class SaleMassCancelOrdersModel extends BaseOdooModel<TSaleMassCancelOrders> {
    protected readonly model = 'sale.mass.cancel.orders';
}
export declare class SaleOrderCancelModel extends BaseOdooModel<TSaleOrderCancel> {
    protected readonly model = 'sale.order.cancel';
}
export declare class SaleOrderDiscountModel extends BaseOdooModel<TSaleOrderDiscount> {
    protected readonly model = 'sale.order.discount';
}
export declare class SaleOrderLineModel extends BaseOdooModel<TSaleOrderLine> {
    protected readonly model = 'sale.order.line';
}
export declare class SaleOrderOptionModel extends BaseOdooModel<TSaleOrderOption> {
    protected readonly model = 'sale.order.option';
}
export declare class SaleOrderSpreadsheetModel extends BaseOdooModel<TSaleOrderSpreadsheet> {
    protected readonly model = 'sale.order.spreadsheet';
}
export declare class SaleOrderTemplateLineModel extends BaseOdooModel<TSaleOrderTemplateLine> {
    protected readonly model = 'sale.order.template.line';
}
export declare class SaleOrderTemplateOptionModel extends BaseOdooModel<TSaleOrderTemplateOption> {
    protected readonly model = 'sale.order.template.option';
}
export declare class SaleOrderTemplateModel extends BaseOdooModel<TSaleOrderTemplate> {
    protected readonly model = 'sale.order.template';
}
export declare class SaleOrderModel extends BaseOdooModel<TSaleOrder> {
    protected readonly model = 'sale.order';
}
export declare class SalePaymentProviderOnboardingWizardModel extends BaseOdooModel<TSalePaymentProviderOnboardingWizard> {
    protected readonly model = 'sale.payment.provider.onboarding.wizard';
}
export declare class SalePdfFormFieldModel extends BaseOdooModel<TSalePdfFormField> {
    protected readonly model = 'sale.pdf.form.field';
}
export declare class SaleReportModel extends BaseOdooModel<TSaleReport> {
    protected readonly model = 'sale.report';
}
export declare class SequenceMixinModel extends BaseOdooModel<TSequenceMixin> {
    protected readonly model = 'sequence.mixin';
}
export declare class ShippingInformationUpdaterMixinModel extends BaseOdooModel<TShippingInformationUpdaterMixin> {
    protected readonly model = 'shipping.information.updater.mixin';
}
export declare class SmsAccountCodeModel extends BaseOdooModel<TSmsAccountCode> {
    protected readonly model = 'sms.account.code';
}
export declare class SmsAccountPhoneModel extends BaseOdooModel<TSmsAccountPhone> {
    protected readonly model = 'sms.account.phone';
}
export declare class SmsAccountSenderModel extends BaseOdooModel<TSmsAccountSender> {
    protected readonly model = 'sms.account.sender';
}
export declare class SmsComposerModel extends BaseOdooModel<TSmsComposer> {
    protected readonly model = 'sms.composer';
}
export declare class SmsResendRecipientModel extends BaseOdooModel<TSmsResendRecipient> {
    protected readonly model = 'sms.resend.recipient';
}
export declare class SmsResendModel extends BaseOdooModel<TSmsResend> {
    protected readonly model = 'sms.resend';
}
export declare class SmsSmsModel extends BaseOdooModel<TSmsSms> {
    protected readonly model = 'sms.sms';
}
export declare class SmsTemplatePreviewModel extends BaseOdooModel<TSmsTemplatePreview> {
    protected readonly model = 'sms.template.preview';
}
export declare class SmsTemplateResetModel extends BaseOdooModel<TSmsTemplateReset> {
    protected readonly model = 'sms.template.reset';
}
export declare class SmsTemplateModel extends BaseOdooModel<TSmsTemplate> {
    protected readonly model = 'sms.template';
}
export declare class SmsTrackerModel extends BaseOdooModel<TSmsTracker> {
    protected readonly model = 'sms.tracker';
}
export declare class SnailmailLetterFormatErrorModel extends BaseOdooModel<TSnailmailLetterFormatError> {
    protected readonly model = 'snailmail.letter.format.error';
}
export declare class SnailmailLetterMissingRequiredFieldsModel extends BaseOdooModel<TSnailmailLetterMissingRequiredFields> {
    protected readonly model = 'snailmail.letter.missing.required.fields';
}
export declare class SnailmailLetterModel extends BaseOdooModel<TSnailmailLetter> {
    protected readonly model = 'snailmail.letter';
}
export declare class SpreadsheetCellThreadModel extends BaseOdooModel<TSpreadsheetCellThread> {
    protected readonly model = 'spreadsheet.cell.thread';
}
export declare class SpreadsheetDashboardGroupModel extends BaseOdooModel<TSpreadsheetDashboardGroup> {
    protected readonly model = 'spreadsheet.dashboard.group';
}
export declare class SpreadsheetDashboardShareModel extends BaseOdooModel<TSpreadsheetDashboardShare> {
    protected readonly model = 'spreadsheet.dashboard.share';
}
export declare class SpreadsheetDashboardModel extends BaseOdooModel<TSpreadsheetDashboard> {
    protected readonly model = 'spreadsheet.dashboard';
}
export declare class SpreadsheetMixinModel extends BaseOdooModel<TSpreadsheetMixin> {
    protected readonly model = 'spreadsheet.mixin';
}
export declare class SpreadsheetRevisionModel extends BaseOdooModel<TSpreadsheetRevision> {
    protected readonly model = 'spreadsheet.revision';
}
export declare class StockBackorderConfirmationLineModel extends BaseOdooModel<TStockBackorderConfirmationLine> {
    protected readonly model = 'stock.backorder.confirmation.line';
}
export declare class StockBackorderConfirmationModel extends BaseOdooModel<TStockBackorderConfirmation> {
    protected readonly model = 'stock.backorder.confirmation';
}
export declare class StockChangeProductQtyModel extends BaseOdooModel<TStockChangeProductQty> {
    protected readonly model = 'stock.change.product.qty';
}
export declare class StockDeliveryNoteBaseWizardModel extends BaseOdooModel<TStockDeliveryNoteBaseWizard> {
    protected readonly model = 'stock.delivery.note.base.wizard';
}
export declare class StockDeliveryNoteConfirmWizardModel extends BaseOdooModel<TStockDeliveryNoteConfirmWizard> {
    protected readonly model = 'stock.delivery.note.confirm.wizard';
}
export declare class StockDeliveryNoteCreateWizardModel extends BaseOdooModel<TStockDeliveryNoteCreateWizard> {
    protected readonly model = 'stock.delivery.note.create.wizard';
}
export declare class StockDeliveryNoteInvoiceWizardModel extends BaseOdooModel<TStockDeliveryNoteInvoiceWizard> {
    protected readonly model = 'stock.delivery.note.invoice.wizard';
}
export declare class StockDeliveryNoteLineModel extends BaseOdooModel<TStockDeliveryNoteLine> {
    protected readonly model = 'stock.delivery.note.line';
}
export declare class StockDeliveryNoteSelectWizardModel extends BaseOdooModel<TStockDeliveryNoteSelectWizard> {
    protected readonly model = 'stock.delivery.note.select.wizard';
}
export declare class StockDeliveryNoteModel extends BaseOdooModel<TStockDeliveryNote> {
    protected readonly model = 'stock.delivery.note';
}
export declare class StockDeliveryNoteTypeModel extends BaseOdooModel<TStockDeliveryNoteType> {
    protected readonly model = 'stock.delivery.note.type';
}
export declare class StockForecasted_product_productModel extends BaseOdooModel<TStockForecasted_product_product> {
    protected readonly model = 'stock.forecasted_product_product';
}
export declare class StockForecasted_product_templateModel extends BaseOdooModel<TStockForecasted_product_template> {
    protected readonly model = 'stock.forecasted_product_template';
}
export declare class StockInventoryAdjustmentNameModel extends BaseOdooModel<TStockInventoryAdjustmentName> {
    protected readonly model = 'stock.inventory.adjustment.name';
}
export declare class StockInventoryConflictModel extends BaseOdooModel<TStockInventoryConflict> {
    protected readonly model = 'stock.inventory.conflict';
}
export declare class StockInventoryWarningModel extends BaseOdooModel<TStockInventoryWarning> {
    protected readonly model = 'stock.inventory.warning';
}
export declare class StockLocationModel extends BaseOdooModel<TStockLocation> {
    protected readonly model = 'stock.location';
}
export declare class StockLotReportModel extends BaseOdooModel<TStockLotReport> {
    protected readonly model = 'stock.lot.report';
}
export declare class StockLotModel extends BaseOdooModel<TStockLot> {
    protected readonly model = 'stock.lot';
}
export declare class StockMoveLineModel extends BaseOdooModel<TStockMoveLine> {
    protected readonly model = 'stock.move.line';
}
export declare class StockMoveModel extends BaseOdooModel<TStockMove> {
    protected readonly model = 'stock.move';
}
export declare class StockOrderpointSnoozeModel extends BaseOdooModel<TStockOrderpointSnooze> {
    protected readonly model = 'stock.orderpoint.snooze';
}
export declare class StockPackageDestinationModel extends BaseOdooModel<TStockPackageDestination> {
    protected readonly model = 'stock.package.destination';
}
export declare class StockPackageTypeModel extends BaseOdooModel<TStockPackageType> {
    protected readonly model = 'stock.package.type';
}
export declare class StockPackage_levelModel extends BaseOdooModel<TStockPackage_level> {
    protected readonly model = 'stock.package_level';
}
export declare class StockPickingCheckerMixinModel extends BaseOdooModel<TStockPickingCheckerMixin> {
    protected readonly model = 'stock.picking.checker.mixin';
}
export declare class StockPickingGoodsAppearanceModel extends BaseOdooModel<TStockPickingGoodsAppearance> {
    protected readonly model = 'stock.picking.goods.appearance';
}
export declare class StockPickingTransportConditionModel extends BaseOdooModel<TStockPickingTransportCondition> {
    protected readonly model = 'stock.picking.transport.condition';
}
export declare class StockPickingTransportMethodModel extends BaseOdooModel<TStockPickingTransportMethod> {
    protected readonly model = 'stock.picking.transport.method';
}
export declare class StockPickingTransportReasonModel extends BaseOdooModel<TStockPickingTransportReason> {
    protected readonly model = 'stock.picking.transport.reason';
}
export declare class StockPickingModel extends BaseOdooModel<TStockPicking> {
    protected readonly model = 'stock.picking';
}
export declare class StockPickingTypeModel extends BaseOdooModel<TStockPickingType> {
    protected readonly model = 'stock.picking.type';
}
export declare class StockPutawayRuleModel extends BaseOdooModel<TStockPutawayRule> {
    protected readonly model = 'stock.putaway.rule';
}
export declare class StockQuantPackageModel extends BaseOdooModel<TStockQuantPackage> {
    protected readonly model = 'stock.quant.package';
}
export declare class StockQuantRelocateModel extends BaseOdooModel<TStockQuantRelocate> {
    protected readonly model = 'stock.quant.relocate';
}
export declare class StockQuantModel extends BaseOdooModel<TStockQuant> {
    protected readonly model = 'stock.quant';
}
export declare class StockQuantityHistoryModel extends BaseOdooModel<TStockQuantityHistory> {
    protected readonly model = 'stock.quantity.history';
}
export declare class StockReplenishMixinModel extends BaseOdooModel<TStockReplenishMixin> {
    protected readonly model = 'stock.replenish.mixin';
}
export declare class StockReplenishmentInfoModel extends BaseOdooModel<TStockReplenishmentInfo> {
    protected readonly model = 'stock.replenishment.info';
}
export declare class StockReplenishmentOptionModel extends BaseOdooModel<TStockReplenishmentOption> {
    protected readonly model = 'stock.replenishment.option';
}
export declare class StockReportModel extends BaseOdooModel<TStockReport> {
    protected readonly model = 'stock.report';
}
export declare class StockRequestCountModel extends BaseOdooModel<TStockRequestCount> {
    protected readonly model = 'stock.request.count';
}
export declare class StockReturnPickingLineModel extends BaseOdooModel<TStockReturnPickingLine> {
    protected readonly model = 'stock.return.picking.line';
}
export declare class StockReturnPickingModel extends BaseOdooModel<TStockReturnPicking> {
    protected readonly model = 'stock.return.picking';
}
export declare class StockRouteModel extends BaseOdooModel<TStockRoute> {
    protected readonly model = 'stock.route';
}
export declare class StockRuleModel extends BaseOdooModel<TStockRule> {
    protected readonly model = 'stock.rule';
}
export declare class StockRulesReportModel extends BaseOdooModel<TStockRulesReport> {
    protected readonly model = 'stock.rules.report';
}
export declare class StockScrapReasonTagModel extends BaseOdooModel<TStockScrapReasonTag> {
    protected readonly model = 'stock.scrap.reason.tag';
}
export declare class StockScrapModel extends BaseOdooModel<TStockScrap> {
    protected readonly model = 'stock.scrap';
}
export declare class StockStorageCategoryCapacityModel extends BaseOdooModel<TStockStorageCategoryCapacity> {
    protected readonly model = 'stock.storage.category.capacity';
}
export declare class StockStorageCategoryModel extends BaseOdooModel<TStockStorageCategory> {
    protected readonly model = 'stock.storage.category';
}
export declare class StockTraceabilityReportModel extends BaseOdooModel<TStockTraceabilityReport> {
    protected readonly model = 'stock.traceability.report';
}
export declare class StockTrackConfirmationModel extends BaseOdooModel<TStockTrackConfirmation> {
    protected readonly model = 'stock.track.confirmation';
}
export declare class StockTrackLineModel extends BaseOdooModel<TStockTrackLine> {
    protected readonly model = 'stock.track.line';
}
export declare class StockValuationLayerRevaluationModel extends BaseOdooModel<TStockValuationLayerRevaluation> {
    protected readonly model = 'stock.valuation.layer.revaluation';
}
export declare class StockValuationLayerModel extends BaseOdooModel<TStockValuationLayer> {
    protected readonly model = 'stock.valuation.layer';
}
export declare class StockWarehouseOrderpointModel extends BaseOdooModel<TStockWarehouseOrderpoint> {
    protected readonly model = 'stock.warehouse.orderpoint';
}
export declare class StockWarehouseModel extends BaseOdooModel<TStockWarehouse> {
    protected readonly model = 'stock.warehouse';
}
export declare class StockWarnInsufficientQtyScrapModel extends BaseOdooModel<TStockWarnInsufficientQtyScrap> {
    protected readonly model = 'stock.warn.insufficient.qty.scrap';
}
export declare class StockWarnInsufficientQtyModel extends BaseOdooModel<TStockWarnInsufficientQty> {
    protected readonly model = 'stock.warn.insufficient.qty';
}
export declare class StockWarnInsufficientQtyUnbuildModel extends BaseOdooModel<TStockWarnInsufficientQtyUnbuild> {
    protected readonly model = 'stock.warn.insufficient.qty.unbuild';
}
export declare class Stock_barcodeCancelOperationModel extends BaseOdooModel<TStock_barcodeCancelOperation> {
    protected readonly model = 'stock_barcode.cancel.operation';
}
export declare class StudioApprovalEntryModel extends BaseOdooModel<TStudioApprovalEntry> {
    protected readonly model = 'studio.approval.entry';
}
export declare class StudioApprovalRequestModel extends BaseOdooModel<TStudioApprovalRequest> {
    protected readonly model = 'studio.approval.request';
}
export declare class StudioApprovalRuleApproverModel extends BaseOdooModel<TStudioApprovalRuleApprover> {
    protected readonly model = 'studio.approval.rule.approver';
}
export declare class StudioApprovalRuleDelegateModel extends BaseOdooModel<TStudioApprovalRuleDelegate> {
    protected readonly model = 'studio.approval.rule.delegate';
}
export declare class StudioApprovalRuleModel extends BaseOdooModel<TStudioApprovalRule> {
    protected readonly model = 'studio.approval.rule';
}
export declare class StudioExportModelModel extends BaseOdooModel<TStudioExportModel> {
    protected readonly model = 'studio.export.model';
}
export declare class StudioExportWizardDataModel extends BaseOdooModel<TStudioExportWizardData> {
    protected readonly model = 'studio.export.wizard.data';
}
export declare class StudioExportWizardModel extends BaseOdooModel<TStudioExportWizard> {
    protected readonly model = 'studio.export.wizard';
}
export declare class StudioMixinModel extends BaseOdooModel<TStudioMixin> {
    protected readonly model = 'studio.mixin';
}
export declare class TemplateResetMixinModel extends BaseOdooModel<TTemplateResetMixin> {
    protected readonly model = 'template.reset.mixin';
}
export declare class UomCategoryModel extends BaseOdooModel<TUomCategory> {
    protected readonly model = 'uom.category';
}
export declare class UomUomModel extends BaseOdooModel<TUomUom> {
    protected readonly model = 'uom.uom';
}
export declare class UpdateProductAttributeValueModel extends BaseOdooModel<TUpdateProductAttributeValue> {
    protected readonly model = 'update.product.attribute.value';
}
export declare class UtmCampaignModel extends BaseOdooModel<TUtmCampaign> {
    protected readonly model = 'utm.campaign';
}
export declare class UtmMediumModel extends BaseOdooModel<TUtmMedium> {
    protected readonly model = 'utm.medium';
}
export declare class UtmMixinModel extends BaseOdooModel<TUtmMixin> {
    protected readonly model = 'utm.mixin';
}
export declare class UtmSourceMixinModel extends BaseOdooModel<TUtmSourceMixin> {
    protected readonly model = 'utm.source.mixin';
}
export declare class UtmSourceModel extends BaseOdooModel<TUtmSource> {
    protected readonly model = 'utm.source';
}
export declare class UtmStageModel extends BaseOdooModel<TUtmStage> {
    protected readonly model = 'utm.stage';
}
export declare class UtmTagModel extends BaseOdooModel<TUtmTag> {
    protected readonly model = 'utm.tag';
}
export declare class ValidateAccountMoveModel extends BaseOdooModel<TValidateAccountMove> {
    protected readonly model = 'validate.account.move';
}
export declare class VendorDelayReportModel extends BaseOdooModel<TVendorDelayReport> {
    protected readonly model = 'vendor.delay.report';
}
export declare class Web_editorAssetsModel extends BaseOdooModel<TWeb_editorAssets> {
    protected readonly model = 'web_editor.assets';
}
export declare class Web_editorConverterTestSubModel extends BaseOdooModel<TWeb_editorConverterTestSub> {
    protected readonly model = 'web_editor.converter.test.sub';
}
export declare class Web_editorConverterTestModel extends BaseOdooModel<TWeb_editorConverterTest> {
    protected readonly model = 'web_editor.converter.test';
}
export declare class Web_tourTourStepModel extends BaseOdooModel<TWeb_tourTourStep> {
    protected readonly model = 'web_tour.tour.step';
}
export declare class Web_tourTourModel extends BaseOdooModel<TWeb_tourTour> {
    protected readonly model = 'web_tour.tour';
}
export declare class WizardIrModelMenuCreateModel extends BaseOdooModel<TWizardIrModelMenuCreate> {
    protected readonly model = 'wizard.ir.model.menu.create';
}
